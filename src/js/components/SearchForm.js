import React from "react"

const SearchForm = ({ fetchUser }) => {
  let input

  const handleSubmit = e => {
    e.preventDefault()
    fetchUser(input.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={ref => input = ref} placeholder="Enter username" />
    </form>
  )
}

export default SearchForm
