import "../styles/index.scss"
import React from "react"
import ReactDOM from "react-dom"
import Card from "./components/Card"

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Card />, document.getElementById("js-app"))
})

