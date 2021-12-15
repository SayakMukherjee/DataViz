import React from 'react'
import { heroObj, homeObj, homeObjThree, homeObjTwo, emissionObj} from './Data'
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
          <InfoSection {...homeObjTwo} />
          <GraphSection {...homeObjThree} />
          <InfoSection {...emissionObj} />
          <Footer/>
        </>
    )
}

export default Home
