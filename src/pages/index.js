import React from "react"
import { Link } from "gatsby"
import Helmet from 'react-helmet'

function gateKeeper (event){
  let detectInput = document.querySelector('#input');
  if (detectInput.value === '123' || 'ABC') {
  console.log("FISERV_ACCESS_KEY " + detectInput.value)
  localStorage.setItem('FISERV_ACCESS_KEY', detectInput.value);
 
  }
  else{
    event.preventDefault()
    alert('Wrong Access Code, please contact Administrator')

  }
}

const IndexPage = () => (
  
<div className="gateKeeper">
<Helmet>
          <body class='body_home' />
</Helmet>
    <div className="welcome_image">
    <img className="img_responsive" alt="chevron" src="/home_prop_bet_logo.png" />

    </div>
    <div className="chevron_container">
      <div className="chevron chevron_left">
      </div>
      <div className="chevron_input">
      <div className="input_copy">enter invite code</div>

        <input id="input"></input>
        <Link to="/home" onClick={gateKeeper}>Go</Link>
      </div>

      <div className=" chevron chevron_right">

      </div>

    </div>

</div>
)


export default IndexPage
