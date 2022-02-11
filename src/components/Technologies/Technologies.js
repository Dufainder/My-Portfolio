import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    I love knowing about new technologies but at the moment these are the ones I dominate
    </SectionText>
    <List>
      <ListItem>
       
        <DiReact size ="3rem"/> 
         <ListContainer>
           <ListTitle>Front-End</ListTitle>
           <ListParagraph>
             Experience with <br/>
             React.js, Redux, Styled Components, Next.js, 
             css, HTML, JavaScript, Boostrap
           </ListParagraph>
         </ListContainer>
      </ListItem>
      <ListItem>
       
       <DiFirebase size ="3rem"/> 
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node.js, Express, axios, SQL, SQLPostgress, <br/>
            Squelize, Git and Github, JavaScript
          </ListParagraph>
        </ListContainer>
     </ListItem>
     <ListItem>
       
       <DiZend size ="3rem"/> 
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br/>
            tools like Figma
          </ListParagraph>
        </ListContainer>
     </ListItem>

    </List>
  </Section>
);

export default Technologies;
