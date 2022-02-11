import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
         
      FullStack Developer <br/>
         Hi I'm Dufainder

      </SectionTitle>

      <SectionText>
         I am a Full Stack web developer, and if you are here you are interested in me and of course I am interested in meeting you, do not hesitate to talk to me.
      </SectionText>
      <Button onClick={()=> window.location = 'https://github.com/Dufainder'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;