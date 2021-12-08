import React from 'react'
import { InfoSection } from '../../components'
import { heroObj, homeObj, homeObjTwo } from './Data'
import { HeroSection, Footer } from '../../components';
import { Scrollbars } from 'react-custom-scrollbars-2';

const Home = () => {
    return (
        <>
          <HeroSection {...heroObj}/>
          <InfoSection {...homeObj} />
          <InfoSection {...homeObjTwo} />   
          <Footer/>
        </>
    )
}

export default Home
