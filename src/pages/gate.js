import React from "react"
import { Link } from "gatsby"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

function gateKeeper (event){
  let detectInput = document.querySelector('#input');
  if (detectInput.value === '123') {
  console.log("true" + detectInput.value)
  }
  else{
    event.preventDefault()
    alert('wrong password, please contact administrator')

  }
}

const GatePage = () => (
  <Layout>
    <SEO title="Gate" />
    <h1>Welcome</h1>
    <MuiThemeProvider>
    <TextField id="input"></TextField>
    </MuiThemeProvider>
    <Link to="/" onClick={gateKeeper}>Go</Link>
  </Layout>
)


export default GatePage
