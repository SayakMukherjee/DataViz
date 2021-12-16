/**
This file is for creating the structure of the webpage.
 */
import React from 'react'
import {
  heroObj,
  introObj,
  effectsObj,
  effectsObjTwo,
  causeObj,
  emissionObj,
  effortsObj,
  effortsObjTwo,
  effortsObjThree,
  effortsObjFour,
  supportObj
} from './Data'
import {
  HeroSection,
  InfoSection,
  Footer,
  GraphSection,
  CardSection,
  DetailsSection,
} from '../../components';

const Home = () => {
  return (
    <>
      <HeroSection {...heroObj} />
      <DetailsSection {...introObj} />
      <InfoSection {...effectsObj} />
      <CardSection />
      <GraphSection {...effectsObjTwo} />
      <DetailsSection {...causeObj} />
      <InfoSection {...emissionObj} />
      <DetailsSection {...effortsObj} />
      <InfoSection {...effortsObjTwo} />
      <InfoSection {...effortsObjThree} />
      <GraphSection {...effortsObjFour} />
      <DetailsSection {...supportObj} />
      <Footer />
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
