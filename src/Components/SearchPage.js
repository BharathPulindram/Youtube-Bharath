import React from "react";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import VideoRow from "./VideoRow";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://pbs.twimg.com/profile_images/1185858244389957633/6SoMTZGE.jpg"
        channel="Bharath Pulindram"
        verified
        subs="660k"
        noOfVideos={382}
        description="You can find awesome videos here. So come and join immediately to have fun and tech"
      />
      <hr />

      <VideoRow
        views="1.4M"
        subs="3.1M"
        channel="Bharath"
        description="Ayodhya Ram Mandir invites all of u to this auspicious Bhoomi Pujan"
        timestamp="5 minutes ago"
        title="Lets start witnessing the Great Lord Ram Mandir Bhoomi Pujan"
        image="https://english.cdn.zeenews.com/sites/default/files/2020/08/05/877039-ayodhya-ram-temple-3.gif"
      />
      <VideoRow
        views="11M"
        subs="1.7M"
        channel="PBK"
        description="Jabardast show for fun and enjoyment. Comedy Show!!"
        timestamp="3 days ago"
        title="Telugu Tv Show Extra Jabardasth Synopsis Aired On ETV Telugu Channel"
        image="https://nettv4u.com/imagine/23-09-2019/extra-jabardasth.jpg"
      />
      <VideoRow
        views="7M"
        subs="5M"
        channel="Bharath Pulindram"
        description="South Indian Biggest Dance Show !!"
        timestamp="2 days ago"
        title=" Dhee Champions latest episode !"
        image="https://etv-win-image.akamaized.net/etvwin/shows/shows/dhee/subcategories/dheechampions/episodes/26feb20/18427/26-feb-20--D12_26Feb20_EP_24-384x216.jpg"
      />
    </div>
  );
}

export default SearchPage;
