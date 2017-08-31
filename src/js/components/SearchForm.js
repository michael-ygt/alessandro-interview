import React from "react"

const SearchForm = ({ fetchUser }) => {
  let input

  const handleSubmit = e => {
    e.preventDefault()
    fetchUser(input.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className="user-card__input" ref={ref => input = ref} placeholder="Type Username + Enter" />
    </form>
  )
}

export default SearchForm
