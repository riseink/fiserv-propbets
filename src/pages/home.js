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
        <h2>Overview</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum metus aliquet tortor accumsan vulputate. Nam accumsan nibh ut augue vulputate rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu tortor id lorem mattis hendrerit et in lacus. Pellentesque id nulla mollis, vehicula turpis vitae, euismod est. Suspendisse posuere nisi a tempus pretium. Ut molestie turpis justo, non dignissim dui eleifend rutrum. In auctor ultrices tristique. Donec finibus, tortor quis eleifend consectetur, massa ligula maximus eros, ut tempor est enim id felis.</p>
      </div>
    </div>
    <div id="gameplay" className="gameplay_section">
    <div className="gameplay_item flex_end">
    <h2>Game Play</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum metus aliquet tortor accumsan vulputate. Nam accumsan nibh ut augue vulputate rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu tortor id lorem mattis hendrerit et in lacus. Pellentesque id nulla mollis, vehicula turpis vitae, euismod est. Suspendisse posuere nisi a tempus pretium. Ut molestie turpis justo, non dignissim dui eleifend rutrum. In auctor ultrices tristique. Donec finibus, tortor quis eleifend consectetur, massa ligula maximus eros, ut tempor est enim id felis.</p>
    </div>
    <div className="gameplay_item">
    <img className="img_responsive" alt="chevron" src="/game_play.png" />
    </div>
    </div>
    <div className="place_bets_section" id="place_bets">
    <div className="bets_copy">
        <h2>Are you Ready?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum metus aliquet tortor accumsan vulputate. Nam accumsan nibh ut augue vulputate rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
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