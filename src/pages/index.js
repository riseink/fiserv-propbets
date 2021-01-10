import React from "react"
import { Link } from "gatsby"

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
    <img className="img_responsive" alt="chevron" src="/welcome_image.jpg" />

    </div>
    <div className="chevron_container">
      <div className="chevron chevron_left">
        <img className="img_responsive" alt="chevron" src="/chevron_left.jpg" />
      </div>
      <div className="chevron_input">
      <div className="input_copy">enter invite code</div>

        <input id="input"></input>
        <Link to="/home" onClick={gateKeeper}>Go</Link>
      </div>

      <div className=" chevron chevron_right">
      <img className="img_responsive" alt="chevron" src="/chevron_right.jpg" />

      </div>

    </div>

</div>
)


export default IndexPage
