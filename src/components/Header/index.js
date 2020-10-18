import React from "react"
import { Link } from "gatsby"
import {Wrapper} from "./Header.styles"

const Header = () => {
  return (
    <header>
      <Wrapper>
        <nav>
          <ul>
            <li>
              <Link to={"/"} activeClassName="active">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/about"} activeClassName="active">
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/blog"}
                activeClassName="active"
                partiallyActive={true}
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </Wrapper>
    </header>
  )
}

export default Header
