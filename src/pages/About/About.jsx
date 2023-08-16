import React from "react";
import "./About.css";
import { useState } from "react";
import Faq from '../../components/FAQ/Faq'
import { Collapse } from "react-collapse";


const About = () => {
    const [mission, setMission] = useState(true);
    const [story, setStory] = useState(false);
    const [press, setPress] = useState(false);

    const missionActive = () => {
        setMission(true);
        setStory(false);
        setPress(false);
    }
    const storyActive = () => {
        setMission(false);
        setStory(true);
        setPress(false);
    }
    const pressActive = () => {
        setMission(false);
        setStory(false);
        setPress(true);
    }
  return (
    <section className="about">
      <h1 className="title">Welcome To Our Shop</h1>
      <div className="mission  container">
          <div className="m-title">
            <p className={mission === true ? 'm-active' : ''} onClick={() => missionActive()}>Our Mission</p>
            <p className={story === true ? 'm-active' : ''} onClick={() => storyActive()}>FOUNDING STORY</p>
            <p className={press === true ? 'm-active' : ''} onClick={() => pressActive()}>Press</p>
          </div>
        {mission &&<> <img src="/public/images/mission.jpg" alt="" />
        <p className="desc">
          Our mission at Holstee is to help conscious people (like you!) along
          your journey to live more fully and mindfully. In today’s complicated,
          fast-paced, hyper-connected, and often overwhelming world, it can be
          difficult to find perspective — to focus on what’s actually important
          and not just what is urgent. It’s hard to find the time, it’s hard to
          know where to begin, and it’s hard to do it alone. That’s where we
          come in :-). We are passionate about bringing more meaning and
          inspiration into people's lives. Over the years, it has become clear
          to us that living with intention and reflection is an ongoing
          practice, not a destination. We’re honored to share that journey with
          you.
        </p> </>}
        {story && <>
        <img src="/public/images/story.jpg" alt="" />
        <p className="desc">
        In the summer of 2009, brothers Dave and Mike Radparvar decided to quit their jobs in the heat of the recession to go all-in on their passion project — Holstee, a functional and sustainable t-shirt company they had started with their friend Fabian Pfortmüller. Without a business plan or experience in fashion, they reasoned that in the worst-case scenario, it would be the most memorable summer of their lives. More than anything, Dave, Mike, and Fabian were looking to build a company that would allow them to live their dream. They wanted to create a company that aligned with their personal values and allowed them to have a positive impact on the world around them.
        </p>
        </>}
        {press && <>
        <img src="/public/images/press.jpg" alt="" />
        <p className="desc">
        We are honored that others have found our work as exciting as we do! Here are some nice words from people that we look up to: “Most mission statements contain words like value and service but often fail to explain what the founders truly care about, much less inspire anyone else to care. Holstee's mission statement is an exception.”
        </p>
        </>}
      </div>
      <Faq />
    </section>
  );
};

export default About;
