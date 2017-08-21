import React from "react"
import SearchForm from "./SearchForm"

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      user: {
        login: "simon"
      }
    }
  }

  componentDidMount() {
    this.fetchUser(this.state.user.login)
  }

  fetchUser = login => {
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(user => this.setState({user}))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.user)
    return (
      <div>
        <SearchForm fetchUser={this.fetchUser} />
        {this.state.user.login}
      </div>
    )
  }
}
