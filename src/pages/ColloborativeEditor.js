import React, { useState, useCallback } from 'react'
//import './App.css'
import { AutoComplete } from 'antd'
import { htmlTagNames as allHtmlTags } from 'html-tag-names' // Importing htmlTagNames from html-tag-names library

const ColloborativeEditor = () => {
  const [inputValue, setInputValue] = useState('') // State to hold input value
  const [selectedTags, setSelectedTags] = useState('') // State to hold concatenated selected tags
  const [filteredOptions, setFilteredOptions] = useState([]) // State to hold filtered options
  const [inputCleared, setInputCleared] = useState(false) // State to track if input has been cleared

  const handleSearch = (value) => {
    const lastOpeningTagIndex = value.lastIndexOf('<')
    const lastClosingTagIndex = value.lastIndexOf('>')
    const isNested = lastOpeningTagIndex > lastClosingTagIndex

    if (isNested) {
      const input = value.substring(lastOpeningTagIndex + 1).toLowerCase()
      const filtered = allHtmlTags
        .filter((tag) => tag.toLowerCase().startsWith(input))
        .slice(0, 12) // Limit to 12 options
      setFilteredOptions(filtered)
    } else {
      setFilteredOptions([]) // Clear the suggestions if the input doesn't match
    }
    setInputValue(value) // Update input value
    setInputCleared(false) // Reset input cleared state
  }

  const handleSelect = (value) => {
    const lastOpeningTagIndex = inputValue.lastIndexOf('<')
    const lastClosingTagIndex = inputValue.lastIndexOf('>')
    const inputBeforeSelection = inputValue.substring(
      0,
      lastOpeningTagIndex + 1
    )
    const newSelectedTag = inputBeforeSelection + value + '>'

    setSelectedTags(newSelectedTag) // Update selected tags
    setInputValue(newSelectedTag) // Update input value
    setFilteredOptions([]) // Clear the suggestions
  }

  const handleChange = (value) => {
    if (!value) {
      setInputCleared(true)
      setSelectedTags('')
    } else if (inputValue && !inputCleared && inputValue !== value) {
      setInputCleared(true)
      setSelectedTags(inputValue)
    }
    setInputValue(value)
  }

  return (
    <AutoComplete
      style={{ width: 230 }}
      placeholder='Type here'
      value={inputValue}
      options={filteredOptions.map((tag) => ({ label: tag, value: tag }))}
      filterOption={false}
      onSelect={handleSelect}
      onSearch={handleSearch}
      onChange={handleChange}
    />
  )
}

export default ColloborativeEditor
