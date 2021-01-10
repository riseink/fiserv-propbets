import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="fixed_nav"
    
  >


          <div className="logo">
          <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img className="img_responsive" alt="chevron" src="/nav_logo.png" />
          </Link>
          </div>
       

    <div className="nav_links">
      <ul>
        <li>
        <Link
          to="#overview">overview</Link>
        </li>

        <li>
        <Link
          to="#gameplay">gameplay</Link>
        </li>

        <li>
        <Link
          to="#place_bets">place bets</Link>
        </li>

        <li>
        <Link
          to="/leaderboard">leaderboard</Link>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
