import React from "react";
import "./Recommended.css";
import VideoCard from "./VideoCard";
function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h1>Recommended</h1>
      <div className="recommendedVideos__videos">
        <VideoCard
          image="https://wirally.com/wp-content/uploads/2017/10/Wirally-Success-Story-Of-Sundar-Pichai-Thumbnail.jpg"
          title="Success Story of Google CEO Sundar Pichai"
          views="20.3M views"
          timestamp="5 days ago"
          channelImage="https://pbs.twimg.com/profile_images/1185858244389957633/6SoMTZGE.jpg"
          channel="Bharath Pulindram"
        />
        <VideoCard
          image="https://i.ytimg.com/vi/JKb4dUoxDPU/maxresdefault.jpg"
          title="Biography of Microsoft CEO Sundar Pichai"
          views="33M views"
          timestamp="1 week ago"
          channelImage="https://upload.wikimedia.org/wikipedia/commons/6/67/PBK_Architects.png"
          channel="PBK"
        />
        <VideoCard
          image="https://upload.wikimedia.org/wikipedia/commons/3/3d/Mark_Zuckerberg_F8_2018_Keynote_%2841793468182%29.jpg"
          title="Mark Zuckerberg vragant halp Facebook"
          views="10.3M views"
          timestamp="3 days ago"
          channelImage="https://i.pinimg.com/originals/35/bf/b0/35bfb0b191c4703057f3136b9754fa2d.jpg"
          channel="Bharath Royal"
        />
        <VideoCard
          image="https://gkindiatoday.com/wp-content/uploads/2017/04/narendra-modi-india-pm-speech-thumbnail-400x400.png"
          title="Narendra Modi Enlightens India"
          views="44.2M views"
          timestamp="1 week ago"
          channelImage="https://pbs.twimg.com/profile_images/1185858244389957633/6SoMTZGE.jpg"
          channel="Bharath Pulindram"
        />
        <VideoCard
          image="https://upload.wikimedia.org/wikipedia/commons/b/bd/Bill_Gates_2013.jpg"
          title="Bill Gates simplicity and smile of love"
          views="17.7M views"
          timestamp="4 days ago"
          channelImage="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0001/6771/brand.gif?3SNIOX.RvROd_lhl3jAehnlTCU0wWsYr&itok=kjidnJ1y"
          channel="P Bharath Kumar"
        />
        <VideoCard
          image="https://i.insider.com/5e76cbc8671de07fd1039563?width=1200&format=jpeg"
          title="Jeff Bezos challenges retail rivals to outdo Amazon's ..."
          views="29.7M views"
          timestamp="6 days ago"
          channelImage="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0001/6771/brand.gif?3SNIOX.RvROd_lhl3jAehnlTCU0wWsYr&itok=kjidnJ1y"
          channel="P Bharath Kumar"
        />
        <VideoCard
          image="https://www.medalofphilanthropy.org/wp-content/uploads/2017/06/2017.jpg"
          title="Premji, Azim - Carnegie Medal of Philanthropy"
          views="41.3M views"
          timestamp="3 weeks ago"
          channelImage="https://i.pinimg.com/originals/35/bf/b0/35bfb0b191c4703057f3136b9754fa2d.jpg"
          channel="Bharath Royal"
        />
        <VideoCard
          image="https://cdn.slidesharecdn.com/ss_thumbnails/ethicalleadershipattata-190109143309-thumbnail-4.jpg?cb=1547044481"
          title="Ethical leadership at TATA a true Inspiration"
          views="70.3M views"
          timestamp="2 weeks ago"
          channelImage="https://pbs.twimg.com/profile_images/1185858244389957633/6SoMTZGE.jpg"
          channel="Bharath Pulindram"
        />
        <VideoCard
          image="https://upload.wikimedia.org/wikipedia/commons/4/44/Sudha_murthy.jpg"
          title="Woman of simplicity and true heart ..."
          views="44M views"
          timestamp="1 week ago"
          channelImage="https://upload.wikimedia.org/wikipedia/commons/6/67/PBK_Architects.png"
          channel="PBK"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
