/**
This file is for creating the footer component
 */
import React from 'react'
import {
    FooterContainer,
    FooterSubscription,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLink,
    FooterSubHeading
} from './Footer.elements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>Created By</FooterSubHeading>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLink href='https://github.com/SayakMukherjee' target="_blank">
                            Sayak Mukherjee
                        </FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLink href='https://github.com/vishruty' target="_blank">
                            Vishruty Mittal
                        </FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLink href='https://github.com/cashenkes' target="_blank">
                            Casper Henkes
                        </FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <FooterSubscription>
                <FooterSubHeading>Developed at Delft University of Technology</FooterSubHeading>
            </FooterSubscription>
        </FooterContainer>
    )
}

export default Footer
