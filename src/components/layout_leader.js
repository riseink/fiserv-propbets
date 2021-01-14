/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import HeaderLeader from "./header_leader"
import "./layout.css"

const LayoutLeader = ({ children }) => {

  return (
    <>
      <HeaderLeader  />
      <div className="page_wrapper"
      >
        <main>{children}</main>
        <footer style={{
          marginTop: `2rem`
        }}>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://www.intersport.global/">Intersport</a>
        </footer>
      </div>
    </>
  )
}

LayoutLeader.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutLeader
