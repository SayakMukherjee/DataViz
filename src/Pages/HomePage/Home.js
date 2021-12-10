import React from 'react'
import { heroObj, homeObj, homeObjTwo } from './Data'
import { 
  HeroSection, 
  InfoSection, 
  CardSection,
  Footer } from '../../components';

const Home = () => {
    return (
        <>
          <HeroSection {...heroObj}/>
          <InfoSection {...homeObj} />
          <CardSection/>
          <InfoSection {...homeObjTwo} />
          
          <Footer/>
        </>
    )
}

export default Home
