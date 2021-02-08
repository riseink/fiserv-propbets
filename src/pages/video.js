import React from "react";
import Helmet from 'react-helmet'
import LayoutAlt from "../components/layout_alt"


const VideoPage = () => (
  <LayoutAlt>

    <Helmet>
          <body class='video_bg' />
    </Helmet>

    <div id="player-overlay">
  <video controls autoplay="true">
    <source src="https://intersport-assets.s3.amazonaws.com/21Fiserv_Prop_Bets_v2.mp4" />
  
  </video>
</div>
  </LayoutAlt>
)



export default VideoPage