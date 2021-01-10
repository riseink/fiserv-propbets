import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const HeaderAlt = ({ siteTitle }) => (
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

        <li className="active">
        <Link
          to="#">place bets</Link>
        </li>

        <li>
        <Link
          to="/home/leaderboard">leaderboard</Link>
        </li>
      </ul>
    </div>
  </header>
)

HeaderAlt.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderAlt.defaultProps = {
  siteTitle: ``,
}

export default HeaderAlt
