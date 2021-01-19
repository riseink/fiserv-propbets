import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"

function activeOverview(event) {
  let detectActive = document.querySelectorAll('.nav_links a');
  detectActive[1].classList.add('active')
  detectActive[2].classList.remove('active')
  detectActive[3].classList.remove('active')
  let detectNav = document.querySelector('nav');
  detectNav.classList.toggle('show')
  let detectSelf = document.querySelector('.hamburger');
  detectSelf.classList.toggle('is-active')

};

function activeGameplay(event) {
  let detectActive = document.querySelectorAll('.nav_links a');
  detectActive[2].classList.add('active')
  detectActive[1].classList.remove('active')
  detectActive[3].classList.remove('active')
  let detectNav = document.querySelector('nav');
  detectNav.classList.toggle('show')
  let detectSelf = document.querySelector('.hamburger');
  detectSelf.classList.toggle('is-active')
};

function activeBets(event) {
  let detectActive = document.querySelectorAll('.nav_links a');
  detectActive[3].classList.add('active')
  detectActive[2].classList.remove('active')
  detectActive[1].classList.remove('active')
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

const HeaderAlt = () => (

  <header className="fixed_nav" >


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
                  <Link to="/home/#overview"
                      onClick={
                          activeOverview
                      } > overview </Link>
              </li >

              < li >
                  <Link to="/home/#gameplay"
                      onClick={
                          activeGameplay
                      } > gameplay </Link> </li >

              <li >
                  <Link to="/home/#place_bets"
                      onClick={
                          activeBets
                      } > place bets </Link> </li >

              <li >
                  <Link to="/leaderboard" > leaderboard </Link> </li > </ul>

      </nav>


      <div className="hamburger hamburger--squeeze"
          onClick={
              showMobileNav
          } >
          <div className="hamburger-box" >
              <div className="hamburger-inner" >
              </div> </div> </div>  </header>
)


export default HeaderAlt 
