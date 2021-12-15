import React from 'react'
import { heroObj, homeObj, homeObjThree, homeObjTwo, emissionObj, streamObj} from './Data'
import { 
  HeroSection, 
  InfoSection, 
  Footer,
  GraphSection,
  CardSection } from '../../components';

const Home = () => {
    return (
        <>
          <HeroSection {...heroObj}/>
          <InfoSection {...homeObj} />
          <CardSection/>
          <GraphSection {...homeObjTwo} />
          <GraphSection {...homeObjThree} />
          <InfoSection {...emissionObj} />
          <InfoSection {...streamObj} />
          <Footer/>
        </>
    )/*
  return (
    <>
      <HeroSection {...heroObj} />
      <InfoSection {...homeObj} />
      <CardSection />
      <GraphSection {...homeObjTwo} />
      <GraphSection {...homeObjThree} />
      <Footer />
    </>
  )*/

}

export default Home
