import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../sass/layout.scss"
// import "./layout.css"
// import "bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
