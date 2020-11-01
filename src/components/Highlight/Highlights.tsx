import * as React from 'react';
import { Highlight, HighlightAlignment } from './Highlight';
import css from '@emotion/css';
import tw from 'tailwind.macro';

export const Highlights = () => {
  return (
    <div
      css={css`
        ${tw`mt-8`}
      `}
    >
      <Highlight
        align={HighlightAlignment.Right}
        color={'dark'}
        companyImageUrl={`${process.env.PUBLIC_URL}/assets/gbr-census.svg`}
        date="March 2020 - November 2020"
        title="Volunteer Work and Travel"
        link="https://greatreefcensus.org/"
        linkTitle="www.greatreefcensus.org"
        points={[
          'Developed a social mapping tool that allows small groups of travelers to edit a planned route simultaneously. Used by dozens of travelers I met over the last year.',
          'Assisted research teams in Cairns, Australia, and Townsville, Australia in the Great Barrier Reef Census. Logged 40 days of diving over two months mapping and documenting the status of the reef system.'
        ]}
      />
      <Highlight
        align={HighlightAlignment.Left}
        color={'light'}
        companyImageUrl="https://eog08boavi-flywheel.netdna-ssl.com/wp-content/uploads/2019/07/logo.svg"
        date="September 2016 - March 2020"
        title="Automat"
        link="https://www.automat.ai"
        linkTitle="www.automat.ai"
        points={[
          'Designed UX and developed a web platform for building and deploying chatbots to various messaging services.',
          'Architected and developed a custom chat platform and library supporting 1M+  conversations integrated directly on our customer’s websites.',
          'Patented methodology for building AI-assisted, goal-driven, conversational chatbots.',
        ]}
      />
      <Highlight
        color={'dark'}
        date="September 2015 - September 2016"
        title="LeadWeb"
        companyImageUrl={`${process.env.PUBLIC_URL}/assets/vibrant-lead-web.png`}
        link="https://www.lead-web.com"
        linkTitle="www.lead-web.com"
        points={[
          'Developed UI/UX for a real-time bus schedule app deployed by the City of Toronto used by ~150,000 daily bus riders.',
          'Developed interactive touchscreen advertisements and games deployed at many Toronto-area bus stops and used by tens of thousands of users weekly.',
          'Developed an internal analytics tool for generating live data visualizations for LeadWeb’s deployed applications.'
]}
      />
      <Highlight
        align={HighlightAlignment.Left}
        companyImageUrl={`${process.env.PUBLIC_URL}/assets/sds-logo.svg`}
        color={'light'}
        date="August 2013 - September 2015"
        title="Silent Disco Squad"
        link="http://silentdiscosquad.com"
        linkTitle="www.silentdiscosquad.com"
        points={[
          'Produced music-sharing and event-organizing web platform with 30,000+ unique users.',
          'Developed algorithms and infrastructure to simultaneously live stream music to live dance parties in nearly 100 cities.',
          'Architected and developed a social companion app for uploading and sharing user-generated videos.',
          'Developed algorithms and infrastructure to simultaneously live stream music to live dance parties in nearly 100 cities.',
          'Created partnerships with dozens of organizations including Amnesty International and Unify.'
        ]}
      />
      <Highlight
        color={'dark'}
        companyImageUrl={`${process.env.PUBLIC_URL}/assets/nuance.png`}
        date="September 2013 - May 2014"
        title="Nuance Communications"
        link="https://www.nuance.com/index.html"
        linkTitle="wwww.nuance.com"
        points={[
          'Responsible for running and analyzing the weekly load tests for the Voicemail-to-Text product and generating analytics reports circulated amongst team and management.',
          'Implemented an automated pipeline that archived the logs and generated data visualizations that replaced the previous manual process.'
          
        ]}
      />
      <Highlight
        align={HighlightAlignment.Left}
        color={'light'}
        companyImageUrl={`${process.env.PUBLIC_URL}/assets/mcgill-logo.png`}
        date="May 2013"
        title="Freelance"
        points={[
          'Developed a computer vision pipeline for Materials Engineering grad students at McGill University using Python and OpenCV to analyze Scanning Electron Miscroscope images and calculate the volume of metallic crystals.'
        ]}
      />
    </div>
  );
};
