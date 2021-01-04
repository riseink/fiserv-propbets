import React from "react";
import { Link } from "gatsby"
import UserForm from '../components/userform'
import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Fiserv Prop Bets</h1>
    <p>Let's Get started</p>
    <UserForm />
  </Layout>
)



export default IndexPage
