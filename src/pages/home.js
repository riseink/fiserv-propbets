import React from "react";
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"


const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="intro_section">
      <div className="hero_logo">
        <img className="img_responsive" alt="chevron" src="/prop_bet_logo.png" />
      </div>
    </div>

    <div id="overview" className="overview_section">
      <div className="copy_container">
        <h2>THE ROAD TO GLORY STARTS HERE</h2>
        <p>Today, two worlds collide in a soothsaying battle royal. Legends of the gridiron will join forces with fintech superstars in pursuit of eternal pigskin glory.</p>
        <p>If you have the smarts, the savvy and the sweet kiss of lady luck, destiny awaits.</p>
      </div>
    </div>
    <div id="gameplay" className="gameplay_section">
    <div className="gameplay_item flex_end">
    <h2>THE PLAYBOOK</h2>
        <p>The objective is simple: Outsmart the competition and leave them in your wake.</p>
        <p>You’ll be given a series of prop bets, or predictions, for the Super Bowl. Your secret weapon? A pro football Hall of Famer at your side.</p>
        <p>Choose wisely and the spoils of victory could be yours.</p>
    </div>
    <div className="gameplay_item">
    <img className="img_responsive" alt="chevron" src="/game_play.png" />
    </div>
    </div>
    <div className="place_bets_section" id="place_bets">
    <div className="bets_copy">
        <h2>IT’S GAME TIME!</h2>
        <p>Ready for action? It’s time to separate the contenders from the pretenders.</p>
      </div>

      <div className="button_container">
    <Link
          to="/bets">
        <img className="img_responsive" alt="chevron" src="/bet_button.png" /></Link>
      </div>
    </div>



  </Layout>
)

export default HomePage