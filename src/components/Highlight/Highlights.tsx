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
        title="Great Barrier Reef Census"
        link="https://greatreefcensus.org/"
        linkTitle="www.greatreefcensus.org"
        points={[
          'Assisted research teams in Cairns and Townsville, Australia in the Great Barrier Reef Census. Logged 40 days of diving over two months mapping and documenting the status of the reef system.',
          'Developed a social mapping tool that allows small groups of travelers to edit a planned route simultaneously. React/TypeScript/TailwindCSS used for front-end; Apollo GraphQL, Node, and Express used for back-end. Used by 6+ groups of travel organizers.',
          'Created a notification system for a camper-converted Ford Econovan Maxi using battery and solar controllers to send analytics and usage information to the user via push notifications.',
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
          'Designed UX and developed web apps for building and deploying chatbots to Messenger/Slack/Kik. Front-end built with  Typescript/ReasonML/React/Node/Apollo/GraphQL. Data lived in POSTgres and CouchDB. Infra relied on Kubernetes/Docker/Jenkins/Git Hooks/AWS.',
          "Developed an in-house chat messaging service supporting 1M+  conversations that integrated client websites bypassing the need to deploy to Messenger/Slack/Kik. Integration led to an increase in client sales by 100% and had 90% customer satisfaction with the client's customers.",
          'Acted as tech communication lead with clients Amika, L’Oreal, and National Bank.',
          'US patent on a new methodology for generating conversational bots: David Hernon et. al. (2020).  SYSTEMS AND METHODS FOR GENERATING CONVERSATIONAL SYSTEMS (29/729, 529)',
          'Hiring engineering team leading to front-end and back-end team growth of 400%',
          'Led the initiative to create a successful user testing rubric that contributed to user satisfaction.',
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
          'Developed UI/UX for a real-time bus schedule app deployed on embedded screens by the City of Toronto and visible for 250,000 daily bus riders.',
          'Developed touchscreen advertisements and games for clients. Deployed and maintained the apps on embedded touchscreens at 20 bus stops in the Toronto area accumulating 30,000  impressions per week. ',
          'Tech development lead on client projects with Bell Media, Astral, and Équation Humaine.',
          'Developed an internal analytics tool using ChartJS and Angular for generating live data visualizations.',
          'Developed process to batch download, clean, and analyze user data. Auto-generate analytics reports that were sent to clients.',
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
          'Created partnerships with dozens of organizations including Amnesty International and Unify.',
          'Built a Ruby-on-Rails powered music-sharing and event-organizing web platform with 30,000+ unique users.',
          'Developed a companion web app in AngularJS that used web sockets and a custom audio-stream-synchronizing library to simultaneously stream a single live audio source to global dance parties with sub-300ms latency.',
          'Hosted and produced weekly live music shows powered by our web streaming service. Grew this weekly event into a yearly digital festival that 30,000 people participated in from almost 100 cities simultaneously.',
          'Architected and developed an iOS social app in Objective-C and Swift for uploading and sharing user-generated videos. Used FFMPEG/bash/JavaScript/S3 to batch process user uploads and run an in-house CDN.',
        ]}
      />
      <Highlight
        color={'dark'}
        companyImageUrl={`${process.env.PUBLIC_URL}/assets/nuance-logo.svg`}
        date="September 2013 - May 2014"
        title="Nuance Communications"
        link="https://www.nuance.com/index.html"
        linkTitle="wwww.nuance.com"
        points={[
          'Responsible for running and analyzing the weekly load tests for the Voicemail-to-Text product and generating analytics reports circulated amongst team and management.',
          'Implemented an automated pipeline that archived the logs and generated data visualizations that replaced the previous manual process.',
        ]}
      />
      <Highlight
        align={HighlightAlignment.Left}
        color={'light'}
        companyImageUrl={`${process.env.PUBLIC_URL}/assets/mcgill-logo.png`}
        date="May 2013"
        title="Freelance"
        points={[
          'Developed a computer vision pipeline for Materials Engineering grad students at McGill University using Python and OpenCV to analyze Scanning Electron Miscroscope images and calculate the volume of metallic crystals.',
        ]}
      />
    </div>
  );
};
