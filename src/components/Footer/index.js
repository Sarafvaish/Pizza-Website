import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import {FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink} from './FooterElement'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Pizza</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href='/' target='blank' arial-label='Facebook'>
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='blank' arial-label='Instagram'>
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='blank' arial-label='Twitter'>
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='blank' arial-label='Linkedin'>
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
