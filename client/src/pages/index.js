import React from 'react';
import components from './homeElements'
import Footer from './footer';
import VideoSlider from '../components/videoslider';
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <components.HeroSection/>
        <components.StatsAndReasons/>
        <components.FeaturesSection/>
        <components.RecruitmentSections/>
        <VideoSlider/>
        <components.WhatWeDo/>

        <components.StoriesAndLife/> 
        <Footer/>       

          </div>
  );
};

export default Home;