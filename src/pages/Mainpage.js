import React, { useState, useEffect } from 'react'
import SplitPane from 'react-split-pane'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faHtml5, faJs } from '@fortawesome/free-brands-svg-icons'
import {
  faComment,
  faPenNib,
  faShare,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { AnimatePresence, motion } from 'framer-motion'

const MainPage = () => {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [output, setOutput] = useState('')
  const [title, setTitle] = useState('Untitled')
  const [isTitle, setisTitle] = useState('')

  useEffect(() => {
    updateOutput()
  }, [html, css, js])

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
    <div className='w-screen h-screen flex flex-col items-start justify-start overflow-hidden'>
      {/* alert section */}

      {/* header section */}

      <header className='w-full flex items-center justify-between px-6'>
        <div className='flex items-center justify-center gap-3'>
          {/* Logo */}
          <img className='w-15 h-12 pt-1 object-contain' src='/logo3.png' />
          {/* tittle */}
          <div className='flex items-center justify-center gap-3'>
            <AnimatePresence>
              {isTitle ? (
                <>
                  <motion.input
                    key={'TitleInput'}
                    className='px-0 py-0 rounded-md border-l-transparent '
                    type='text'
                    placeholder='Your Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <motion.p
                    key={'titleLabel'}
                    className='px-0 py-0 text-white text-lg'
                  >
                    {title}
                  </motion.p>
                </>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {isTitle ? (
                <>
                  <motion.div
                    key={'MdCheck'}
                    whileTap={{ scale: 0.9 }}
                    className='cursor-pointer'
                    onClick={() => setisTitle(false)}
                  >
                    <FontAwesomeIcon
                      className='text-emerald-500 text-2xl '
                      icon={faCheck}
                    />
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div
                    key={'MdEdit'}
                    whileTap={{ scale: 0.9 }}
                    className='cursor-pointer'
                    onClick={() => setisTitle(true)}
                  >
                    <FontAwesomeIcon
                      className='text-white'
                      icon={faPenNib}
                      size='lg'
                    />
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className='flex items-center justify-end gap-6 pr-8'>
          <FontAwesomeIcon className='text-white text-xl' icon={faComment} />
          <a href='/Friends'>
            <FontAwesomeIcon
              className='text-white text-xl'
              icon={faUserFriends}
            />
          </a>
          <FontAwesomeIcon className='text-white text-xl' icon={faShare} />
        </div>
      </header>

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
                  <FontAwesomeIcon className='text-red-500' icon={faHtml5} />
                  <p className='text-primaryText font-semibold'>HTML</p>
                </div>
              </div>
              <div className='w-full px-2 overflow-x-auto '>
                <CodeMirror
                  value={html}
                  height='600px'
                  theme='dark'
                  extensions={[javascript({ jsx: true })]}
                  onChange={(value, viewUpdate) => {
                    setHtml(value)
                  }}
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
                    value={css}
                    height='600px'
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                      setCss(value)
                    }}
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
                    value={js}
                    height='600px'
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                      setJs(value)
                    }}
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

export default MainPage
