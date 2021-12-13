import React from 'react'
import { heroObj, homeObj, homeObjThree, homeObjTwo } from './Data'
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
          <InfoSection {...homeObjThree} />
          <Footer/>
        </>
    )
}

export default Home
