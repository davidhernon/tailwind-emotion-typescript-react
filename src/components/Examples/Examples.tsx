import * as React from 'react';
import css from '@emotion/css';
import tw from 'tailwind.macro';

// Icon Information at https://material.io/resources/icons/?style=baseline

export const CheckmarkIcon: React.FC<{ iconColor?: string }> = ({
  iconColor = 'black',
}) => (
  <svg
    css={css`
      margin: 0 auto;
      & > path {
        transition: fill 200ms;
      }
    `}
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      fill={iconColor}
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
    />
  </svg>
);

const Example: React.FC<{
  content: string;
  icon?: React.ReactNode;
  title: string;
}> = ({ content, icon = <CheckmarkIcon iconColor="#28303f" />, title }) => (
  <div
    css={css`
      ${tw`m-2 w-64`}
    `}
  >
    <div
      css={css`
        margin: 0 auto;
        ${tw`flex items-center justify-between`};
      `}
    >
      {icon}
    </div>
    <div
      css={css`
        ${tw`font-semibold text-lg text-center mt-2`}
      `}
    >
      {title}
    </div>
    <div
      css={css`
        ${tw`mt-4 text-center`}
      `}
    >
      {content}
    </div>
  </div>
);

export const Examples = () => (
  <div
    id="background"
    css={css`
      ${tw`px-12 py-6`}
      color: #28303f;
    `}
  >
    <div
      css={css`
        ${tw`text-3xl font-semibold text-center`}
      `}
    >
      A Diverse Background Of Experiences
    </div>
    <div
      css={css`
        ${tw`mt-1 text-center text-xl`}
      `}
    >
      Full Stack Developer who has worn many hats
    </div>
    <div
      css={css`
        ${tw`flex flex-wrap justify-around mt-8`}
      `}
    >
      <Example
        title="Creative"
        content="David has experience working closely with designers and creatives. He draws on his background in writing, music, and the visual arts."
        icon={<div css={css`${tw`flex w-full content-center justify-center`}`}><span css={css`${tw`text-3xl`}`} role="img" aria-label="self-reliant-rocket-emoji">🎨</span></div>}
      />
      <Example
        title="Technical"
        content="He has an interest in how programs and machines work and enjoys learning new tools. Beyond solving the problem at hand, he enjoys understanding the deeper reasons behind Why and How something works."
        icon={<div css={css`${tw`flex w-full content-center justify-center`}`}><span css={css`${tw`text-3xl`}`} role="img" aria-label="self-reliant-rocket-emoji">🔧</span></div>}
      />
      <Example
        title="Communicator"
        content="David is skilled at communicating complex problems to non-technical team members and stakeholders. He has been a team lead and scrum master and cares about getting everyone on the same page and covering all the bases."
        icon={<div css={css`${tw`flex w-full content-center justify-center`}`}><span css={css`${tw`text-3xl`}`} role="img" aria-label="self-reliant-rocket-emoji">👋</span></div>}
      />
      <Example
        title="Self Reliant"
        content="Experience working on remote teams and personal projects. David has launched his own projects and shipped features from all around the world."
        icon={<div css={css`${tw`flex w-full content-center justify-center`}`}><span css={css`${tw`text-3xl`}`} role="img" aria-label="self-reliant-rocket-emoji">🚀</span></div>}
      />
    </div>
  </div>
);
