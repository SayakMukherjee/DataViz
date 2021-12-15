import React from 'react'
import { heroObj, homeObj, homeObjThree, homeObjTwo } from './Data'
import {
  HeroSection,
  InfoSection,
  CardSection,
  Footer,
  GraphSection
} from '../../components';

const Home = () => {
  return (
    <>
      <HeroSection {...heroObj} />
      <InfoSection {...homeObj} />
      <CardSection />
      <InfoSection {...homeObjTwo} />
      <GraphSection {...homeObjThree} />
      <Footer />
    </>
  )
}

export default Home
