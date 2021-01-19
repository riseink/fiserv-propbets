import { Link } from "gatsby"
import React from "react"


function nukeNav(event) {

  let detectNav = document.querySelector('nav');
  detectNav.classList.toggle('show')
  let detectSelf = document.querySelector('.hamburger');
  detectSelf.classList.toggle('is-active')

};

function showMobileNav() {
  console.log('hamburger')
  let detectNav = document.querySelector('nav');
  detectNav.classList.toggle('show')
  let detectSelf = document.querySelector('.hamburger');
  detectSelf.classList.toggle('is-active')

}

const HeaderLeader = () => (

  <header className="alt_nav" >


      <div className="logo" >
          <Link to="/">
              <img className="img_responsive"
                  alt="chevron"
                  src="/nav_logo_alt.png" />
          </Link>
      </div>


      <nav className="nav_links desktop_nav">

          <ul>
              <div className="hamburger_logo" >
                  <Link to="/"
                  >
                      <img className="img_responsive"
                          alt="chevron"
                          src="/nav_logo.png" />
                  </Link> </div >
              <li >
                  <Link to="/home/#overview"> overview </Link>
              </li >

              < li >
                  <Link to="/home/#gameplay"> gameplay </Link> </li >

              <li >
                  <Link to="/home/#place_bets"> place bets </Link> </li >

              <li >
                  <Link className="active" to="#" onClick={
                          nukeNav
                      } > leaderboard </Link> </li > </ul>

      </nav>


      <div className="hamburger hamburger--squeeze"
          onClick={
              showMobileNav
          } >
          <div className="hamburger-box" >
              <div className="hamburger-inner" >
              </div> </div> </div>  </header>
)


export default HeaderLeader 
