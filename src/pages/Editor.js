import React, { useCallback } from 'react'
import { useState, useEffect, useRef } from 'react'
import SplitPane from 'react-split-pane'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faHtml5, faJs } from '@fortawesome/free-brands-svg-icons'
import CodeMirror, { useCodeMirror } from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import ACTIONS from '../Actions'

const Editor = ({ socketRef, roomId, onCodeChange }) => {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [output, setOutput] = useState('')
  const editorRef = useRef(null)

  const onHtmlChange = useCallback((value, changes) => {
    setHtml(value)
    const { origin } = changes
    const getValue = () => {
      return editorRef.current ? editorRef.current.getValue() : ''
    }
    const code = getValue(value)
    onCodeChange(code)
    if (origin !== 'setValue') {
      socketRef.current.emit(ACTIONS.CODE_CHANGE, {
        roomId,
        code: { html, css, js },
      })
    }
  })
  const onCssChange = useCallback((value, changes) => {
    setCss(value)
    const { origin } = changes
    const getValue = () => {
      return editorRef.current ? editorRef.current.getValue() : ''
    }
    const code = getValue(value)
    onCodeChange(code)
    if (origin !== 'setValue') {
      socketRef.current.emit(ACTIONS.CODE_CHANGE, {
        roomId,
        code: { html, css, js },
      })
    }
  })

  const onJsChange = useCallback((value, changes) => {
    setJs(value)
    const { origin } = changes
    const getValue = () => {
      return editorRef.current ? editorRef.current.getValue() : ''
    }
    const code = getValue(value)
    onCodeChange(code)
    if (origin !== 'setValue') {
      socketRef.current.emit(ACTIONS.CODE_CHANGE, {
        roomId,
        code: { html, css, js },
      })
    }
  })
  const { setContainer } = useCodeMirror({
    container: editorRef.current,
    extensions: [javascript({ jsx: true })],
    value: `${html}\n${css}\n${js}`,
  })

  useEffect(() => {
    if (editorRef.current) {
      setContainer(editorRef.current)
    }
  }, [editorRef.current])

  useEffect(() => {
    updateOutput()
  }, [html, css, js])

  useEffect(() => {
    if (socketRef.current) {
      socketRef.current.on(ACTIONS.CODE_CHANGE, ({ code }) => {
        if (code !== null) {
          setHtml(code.html)
          setCss(code.css)
          setJs(code.js)
        }
      })
    }
    return () => {
      socketRef.current.off(ACTIONS.CODE_CHANGE)
    }
  }, [socketRef.current])

  const updateOutput = () => {
    const combinedOutput = `
              <html>
                <head>
                  <style>${css}</style>
                </head>
                <body>
                  ${html}
                  <script>${js}</script>
                </body>
              </html>
              `
    setOutput(combinedOutput)
  }

  return (
    <div>
      {/* coding Section */}

      <div>
        {/* horizontal split */}
        <SplitPane
          split='horizontal'
          minSize={100}
          maxSize={-100}
          defaultSize={'60%'}
        >
          {/* Top code section placeholder */}
          <SplitPane split='vertical' minSize={500}>
            {/* HTML section */}
            <div className='w-full h-full flex flex-col items-start justify-start'>
              <div className='w-full flex items-center justify-between'>
                <div className='bg-secondary px-4 py-2 border-t-4 flex items-center justify-center gap-3 border-t-gray-500'>
                  <FontAwesomeIcon className='text-red' icon={faHtml5} />
                  <p className='text-primaryText font-semibold'>HTML</p>
                </div>
              </div>
              <div className='w-full px-2 overflow-x-auto '>
                <CodeMirror
                  //ref={editorRef}
                  value={html}
                  height='600px'
                  theme='dark'
                  extensions={[javascript({ jsx: true })]}
                  onChange={onHtmlChange}
                />
              </div>
            </div>
            <SplitPane split='vertical' minSize={500}>
              {/* CSS section */}
              <div className='w-full h-full flex flex-col items-start justify-start'>
                <div className='w-full flex items-center justify-between'>
                  <div className='bg-secondary px-4 py-2 border-t-4 flex items-center justify-center gap-3 border-t-gray-500'>
                    <FontAwesomeIcon className='text-sky-500' icon={faCss3} />
                    <p className='text-primaryText font-semibold'>CSS</p>
                  </div>
                </div>
                <div className='w-full px-2 overflow-x-auto'>
                  <CodeMirror
                    // ref={editorRef}
                    value={css}
                    height='600px'
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={onCssChange}
                  />
                </div>
              </div>
              {/*JS Section */}
              <div className='w-full h-full flex flex-col items-start justify-start'>
                <div className='w-full flex items-center justify-between'>
                  <div className='bg-secondary px-4 py-2 border-t-4 flex items-center justify-center gap-3 border-t-gray-500'>
                    <FontAwesomeIcon className='text-yellow-500' icon={faJs} />
                    <p className='text-primaryText font-semibold'>JS</p>
                  </div>
                </div>
                <div className='w-full px-2 overflow-x-auto'>
                  <CodeMirror
                    // ref={editorRef}
                    value={js}
                    height='600px'
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={onJsChange}
                  />
                </div>
              </div>
            </SplitPane>
          </SplitPane>

          {/* Bottom result placeholder */}
          <div
            className='bg-white overflow-hidden h-full'
            style={{ overflow: 'hidden', height: '100%' }}
          >
            <iframe
              title='Result'
              srcDoc={output}
              style={{ border: 'none', width: '100%', height: '100%' }}
            />
          </div>
        </SplitPane>
      </div>
    </div>
  )
}

export default Editor
