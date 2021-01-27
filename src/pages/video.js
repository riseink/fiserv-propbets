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
    <source src="http://www.intersporthub.com/wp-content/uploads/2020/02/19ADIDAS_FNS_FINAL_720_29_FOR_HUB.mp4?id=0" />
  
  </video>
  <iframe width="560" title="unique" height="315" src="http://www.intersporthub.com/wp-content/uploads/2020/02/19ADIDAS_FNS_FINAL_720_29_FOR_HUB.mp4?id=0" frameborder="0" allowfullscreen></iframe>
</div>
  </LayoutAlt>
)



export default VideoPage