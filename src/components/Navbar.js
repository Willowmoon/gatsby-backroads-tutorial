import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div>
      <Link to="/"> Home </Link>
      <Link to="/blog/"> Blog </Link>
      <Link to="/tours/"> Tours </Link>
      <Link to="/contact/"> Contact </Link>
    </div>
  )
}

export default Navbar
