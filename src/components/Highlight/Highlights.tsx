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
        align={HighlightAlignment.Left}
        color={'dark'}
        companyImageUrl="https://eog08boavi-flywheel.netdna-ssl.com/wp-content/uploads/2019/07/logo.svg"
        date="August 2016 - Present"
        title="Automat"
        link="https://www.automat.ai"
        linkTitle="www.automat.ai"
        points={[
          'Software Engineer',
          'Grown with the company from 6 people to 30+',
          'Develop platforms to design conversation marketing chatbots',
          'Deploying chatbots at scale',
        ]}
        skills={['UI/UX', 'QA', 'Design', 'React', 'Node', 'Typescript']}
      />
      <Highlight
        color={'light'}
        date="August 2015 - November 2016"
        title="Lead-Web"
        companyImageUrl={`${process.env.PUBLIC_URL}/assets/vibrant-lead-web.png`}
        link="https://www.lead-web.com"
        linkTitle="www.lead-web.com"
        points={[
          'Software Engineer / Data Scientist',
          'Build custom web apps for embedded touchscreen devices deployed across Ontario and Quebec',
          "Built interactive experiences to augment existing information boards used by travellers at Montreal's Pierre Elliot Trudeau Airport and the City of Toronto's Bus Kiosks",
          'Developed an Automated Dashboard for analytics data was turned into client reports and circulated among our company and our clients',
        ]}
        skills={['DataViz', 'QA', 'UI/UX']}
      />
      <Highlight
        align={HighlightAlignment.Left}
        companyImageUrl={`${process.env.PUBLIC_URL}/assets/sds-logo.png`}
        color={'dark'}
        date="August 2013 - November 2015"
        title="Silent Disco Squad"
        link="http://silentdiscosquad.com"
        linkTitle="www.silentdiscosquad.com"
        points={[
          'Co-founder and Engineer',
          'Built a social music application that organizes headphone danceparties in public spaces',
          'Developed a distributed system for streaming synchronous live broadcasts',
          'Prototyped mobile apps and chat experiences to upload and share digital media and messages between live streaming users',
          'Grew the community from hundreds to tens of thousands of people dancing through the streets in almost 100 cities around the world',
          'Participated in the McGill X-1 Accelerator - a 4 month long accelerator that provided officespace, mentorship, and capital',
          'Built Ecstatic.fm, a tool that allowed users to collaboratively create music videos at danceparties',
        ]}
        skills={[
          'CoFounder',
          'Javascript/Node/iOS',
          'UI/UX',
          'Research',
          'Infra',
          'iOS',
        ]}
      />
      <Highlight
        color={'light'}
        companyImageUrl={`${process.env.PUBLIC_URL}/assets/nuance.png`}
        date="August 2013 - November 2014"
        title="Nuance Communications"
        link="https://www.nuance.com/index.html"
        linkTitle="wwww.nuance.com"
        points={[
          'QA Software Engineering Intern',
          'Automated and Analyzed the Weekly Load Test',
          'Compiled and distributed weekly reports that were circulated among my teammembers and managers',
          'Automated the report generation and built a dashboard using Kibana/ElasticSearch/Logstash',
        ]}
        skills={['QA', 'UI/UX', 'DataViz']}
      />
    </div>
  );
};
