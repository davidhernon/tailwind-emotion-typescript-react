import React from 'react';

import './App.css';
import { Hero } from './components/Hero/Hero';
import { Examples } from './components/Examples/Examples';
import { Highlights } from './components/Highlight/Highlights';
import { Links } from './components/Links/Links';

export const App: React.FC = () => {
  return (
    <>
      <Hero />
      <Examples />
      <Highlights />
      <Links
        links={[
          {
            title: 'LinkedIn',
            url: 'https://www.linkedin.com/in/david-hernon-931746b2/',
          },
          { title: 'Github', url: 'https://github.com/davidhernon' },
          {
            title: 'david.hernon1',
            url: 'mailto:david.hernon1+personalwebsite@gmail.com',
          },
        ]}
      />
    </>
  );
};
