import React, { createContext, useState } from 'react'

export const DataContext = createContext({
  html: '',
  setHtml: () => {},
  css: '',
  setCss: () => {},
  js: '',
  setJs: () => {},
})

const DataProvider = ({ children }) => {
  const [html, setHtml] = useState('')
  const [js, setJs] = useState('')
  const [css, setCss] = useState('')

  return (
    <DataContext.Provider
      value={{
        html,
        setHtml,
        css,
        setCss,
        js,
        setJs,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
