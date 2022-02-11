import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
       <LinkList>
        <LinkColumn>
         <LinkTitle>Call</LinkTitle>
         <LinkItem hrf='tel:+57 304-272-30-32'>304-272-30-32</LinkItem>
       </LinkColumn>
       <LinkColumn>
         <LinkTitle>Email</LinkTitle>
         <LinkItem hrf='dufainder@gmail.com'>dufainder@gmail.com</LinkItem>
        </LinkColumn>
       </LinkList>
       <SocialIconsContainer>
         <CompanyContainer>
           <Slogan> Innovation one project at a time</Slogan>
         </CompanyContainer>
        <SocialContainer>

         <SocialIcons href='https://github.com'>
             <AiFillGithub size="3rem" />
           </SocialIcons>

           <SocialIcons href='https://linkedin.com'>
             <AiFillLinkedin size="3rem" />
           </SocialIcons>

          

        </SocialContainer>
       </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
