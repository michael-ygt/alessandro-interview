import "../styles/index.scss"
import React from "react"
import ReactDOM from "react-dom"
import User from "./components/User"

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("js-app")
  ReactDOM.render(<User />, app)
})
