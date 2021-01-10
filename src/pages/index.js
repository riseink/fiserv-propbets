import React from "react"
import { Link } from "gatsby"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";

// import Layout from "../components/layout"
import WelcomeImage from "../components/welcome_image"
// import SEO from "../components/seo"

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

const IndexPage = () => (
<div className="gateKeeper">
    <div className="welcome_image">
      <WelcomeImage />
    </div>
    <div className="chevron_container">
      <div className="chevron chevron_left">
        <img className="img_responsive" src="/chevron_left.jpg" />
      </div>
      <div className="chevron_input">
      <div className="input_copy">enter invite code</div>

        <input id="input"></input>
        <Link to="/home" onClick={gateKeeper}>Go</Link>
      </div>

      <div className=" chevron chevron_right">
      <img className="img_responsive" src="/chevron_right.jpg" />

      </div>

    </div>

</div>
)


export default IndexPage
