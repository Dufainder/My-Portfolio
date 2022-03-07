import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';



const Projects = () => (
  <Section nopadding id = 'projects'>
  <SectionDivider/> 
  <SectionTitle main>Projects</SectionTitle>   
  <GridContainer>
  { projects.map(({id, title, description, tags, source, visit, image})=>(
<BlogCard key={id}>
    <Img src={image}/>
    <TitleContent>
      <HeaderThree>{title}</HeaderThree>
      <Hr/>
    </TitleContent>
    <CardInfo>{description}</CardInfo>
    <div>
        
      <TitleContent></TitleContent>
      <TagList>
        {tags.map((tag, i)=>(
          <div key={i}>
            <Tag>{tag}</Tag>
          </div>
        ))}
        </TagList> 
    </div>
    <UtilityList>
      <ExternalLinks href={visit}>Deploy</ExternalLinks>
        <ExternalLinks href={source}>Code</ExternalLinks>
    </UtilityList>
</BlogCard>
  )) }


  </GridContainer>
 
 
  </Section>
);

export default Projects;