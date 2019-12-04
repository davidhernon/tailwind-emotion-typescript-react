import * as React from 'react';
import css from '@emotion/css';
import tw from 'tailwind.macro';
import { CheckmarkIcon } from '../Examples/Examples';
import styled from '@emotion/styled';

const LinkContainer = styled.a`
  ${tw`flex flex-col items-center no-underline p-4 rounded-lg`}
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #eeeeef;
  width: 225px;
  transition: background 200ms;
  &:hover {
    background: #485061;
  }
`;

export const Links = ({
  links,
}: {
  links: { title: string; icon?: React.ReactNode; url: string }[];
}) => (
  <div
    css={css`
      background: #28303f;
      color: #eeeeef;
    `}
  >
    <div
      css={css`
        ${tw`pt-8 text-3xl font-semibold text-center`}
      `}
    >
      Lets Get In Touch
    </div>
    <div
      css={css`
        ${tw`mt-2 text-center text-xl`}
      `}
    >
      I like meeting new people in this space and collaborating. Give me a
      shout.
    </div>
    <div
      css={css`
        ${tw`flex justify-around pt-8 pb-16 px-32`}
      `}
    >
      {links.map(
        ({ icon = <CheckmarkIcon iconColor="#eeeeef" />, title, url }) => (
          <LinkContainer
            key={title}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>{icon}</div>
            <div
              css={css`
                ${tw`p-2 text-base`}
              `}
            >
              {title}
            </div>
          </LinkContainer>
        ),
      )}
    </div>
  </div>
);
