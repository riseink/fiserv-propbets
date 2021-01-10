import React from "react";
// import { Link } from "gatsby"
import UserForm from '../components/userform'
import LayoutAlt from "../components/layout_alt"
import SEO from "../components/seo"


const BetsPage = () => (
  <LayoutAlt>
    <SEO title="Page two" />
    <h2>Overview </h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <h4>Good Luck! Answer the following questions below: </h4>

    <UserForm />
  </LayoutAlt>
)



export default BetsPage
