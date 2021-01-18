import { Link } from "gatsby"
import React from "react"


function activeOverview(event) {
  let detectActive = document.querySelectorAll('.nav_links a');
  detectActive[0].classList.add('active')
  detectActive[1].classList.remove('active')
  detectActive[2].classList.remove('active')

};

function activeGameplay(event) {
  let detectActive = document.querySelectorAll('.nav_links a');
  detectActive[1].classList.add('active')
  detectActive[0].classList.remove('active')
  detectActive[2].classList.remove('active')
};

function activeBets(event) {
  let detectActive = document.querySelectorAll('.nav_links a');
  detectActive[2].classList.add('active')
  detectActive[1].classList.remove('active')
  detectActive[0].classList.remove('active')
};

function showMobileNav() {
  console.log('hamburger')
  let detectNav = document.querySelector('nav');
  detectNav.classList.toggle('show')
  let detectSelf = document.querySelector('.hamburger');
  detectSelf.classList.toggle('is-active')

}


const Header = () => (

  <header className="fixed_nav" >


  <div className="logo" >
  <Link to="/">
  <img className="img_responsive"
  alt="chevron"
  src="/nav_logo.png" />
  </Link>
  </div>


  <nav className="nav_links desktop_nav">

  <ul>
  <div className="hamburger_logo" >
  <Link to = "/"
   >
  <img className="img_responsive"
  alt="chevron"
  src="/nav_logo.png" />
  </Link> </div > 
  <li >
  <Link to = "#overview"
  onClick = {
      activeOverview
  } > overview </Link> 
  </li >

  < li >
  <Link to = "#gameplay"
  onClick = {
      activeGameplay
  } > gameplay </Link> </li >

  <li >
  <Link to = "#place_bets"
  onClick = {
      activeBets
  } > place bets </Link> </li >

  <li >
  <Link to = "/leaderboard" > leaderboard </Link> </li > </ul>

  </nav>


  <div className = "hamburger hamburger--squeeze"
  onClick = {
      showMobileNav
  } >
  <div className = "hamburger-box" >
  <div className = "hamburger-inner" > 
  </div> </div> </div> </header>
)


export default Header