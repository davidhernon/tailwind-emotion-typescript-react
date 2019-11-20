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
      More Than Online Transactions
    </div>
    <div
      css={css`
        ${tw`mt-1 text-center text-xl`}
      `}
    >
      We have all kinds of services to help you save time and run a better
      business.
    </div>
    <div
      css={css`
        ${tw`flex flex-wrap justify-around mt-8`}
      `}
    >
      <Example
        title="Get your memory first"
        content="You are trying to get your content from me. I have a lot ofe experience giving this content. I can give a lot more experience in the future as well too. Its a great thing. Lets do it."
      />
      <Example
        title="Get your memory first"
        content="You are trying to get your content from me. I have a lot ofe experience giving this content. I can give a lot more experience in the future as well too. Its a great thing. Lets do it."
      />
      <Example
        title="Get your memory first"
        content="You are trying to get your content from me. I have a lot ofe experience giving this content. I can give a lot more experience in the future as well too. Its a great thing. Lets do it."
      />
      <Example
        title="Get your memory first"
        content="You are trying to get your content from me. I have a lot ofe experience giving this content. I can give a lot more experience in the future as well too. Its a great thing. Lets do it."
      />
    </div>
  </div>
);
