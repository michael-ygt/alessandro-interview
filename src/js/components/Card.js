import React from "react"
import Input from "./Input"
import Display from "./Display"

const ENDPOINT = "https://api.github.com/users/"

export default class Card extends React.Component {
  constructor() {
    super()

    this.state = { user: "Hello world again" }
  }

  fetchUser = login => {
    fetch(ENDPOINT + login)
      .then(res => res.json())
      .then(user => this.setState({ user: user.name }))
      .catch(err => this.setState({ user: null }))
  }

  handleEnter = e => {
    if (e.key === "Enter") {
      this.fetchUser(e.target.value)
    }
    //this.setState({ user: "new user" })
  }

  render() {
    return (
      //<div>
      //  <Input onSubmit={this.handleInput} />
      //  <Display user={this.state.user} />
      //</div>
      <div>
        <input onKeyDown={this.handleEnter} placeholder="Type username + enter" type="text" />
        {this.state.user
          ? this.state.user
          : "Sorry, user not found"
        }
      </div>
    )
  }
}
