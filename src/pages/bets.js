import React from "react";
// import { Link } from "gatsby"
import UserForm from '../components/userform'
import LayoutAlt from "../components/layout_alt"
import SEO from "../components/seo"
import Helmet from 'react-helmet'


const BetsPage = () => (
  <LayoutAlt>
    <SEO title="Page two" />
    <Helmet>
          <body class='body_bets' />
    </Helmet>
    <div className="bets_copy_container">
    <h2>CHOOSE LIKE A CHAMPION</h2>
    <p>Lock in each pick by hitting continue. You can always go back. Just remember: The play clock is ticking.</p>
    
    </div>
    <UserForm />
    <div className="bets_logo">
    <img className="img_responsive" alt="chevron" src="/HOF_logo.png" />

    </div>
  </LayoutAlt>
)



export default BetsPage
