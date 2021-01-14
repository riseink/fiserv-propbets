import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const HeaderLeader = ({ siteTitle }) => (
  <header className="alt_nav"

  >


    <div className="logo">
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <img className="img_responsive" alt="chevron" src="/nav_logo_alt.png" />
      </Link>
    </div>


    <div className="nav_links">
      <ul>
        <li>
          <Link
            to="/home/#overview">overview</Link>
        </li>

        <li>
          <Link
            to="/home/#gameplay">gameplay</Link>
        </li>

        <li >
          <Link
            to="/bets">place bets</Link>
        </li>

        <li className="active">
          <Link
            to="#">leaderboard</Link>
        </li>
      </ul>
    </div>
  </header>
)

HeaderLeader.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderLeader.defaultProps = {
  siteTitle: ``,
}

export default HeaderLeader
