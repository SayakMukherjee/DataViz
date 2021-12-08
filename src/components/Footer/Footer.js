import React from 'react'
import { AiFillHeart } from "react-icons/ai";
import { FooterContainer, FooterSubscription, FooterSubText } from './Footer.elements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubText>
                    Made with <AiFillHeart/> at Delft University of Technology
                </FooterSubText>
            </FooterSubscription>
        </FooterContainer>
    )
}

export default Footer
