import * as React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import css from '@emotion/css';

const HeroImageOuterContainer = styled.div`
  overflow: hidden;
`;

const SideImage = styled.div`
  ${tw`hidden lg:block absolute`}
  height:100%;
  max-height: 100vh;
  width: 100%;
  background-size: 100% auto;
  background-repeat: no-repeat;
  @media screen and (max-width: 1280px) {
    background-size: 100% 130%;
  }
  background-image: url(https://images.unsplash.com/photo-1503198515498-d0bd9ed16902?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60);
`;

const HeroContainer = styled.div<{ backgroundXTranslate?: number }>`
  ${tw`relative lg:min-h-screen xl:min-h-screen lg:min-w-3xl xl:min-w-4xl lg:flex lg:items-center lg:justify-center lg:w-3/5 lg:pl-8 lg:pr-8 bg-no-repeat `}
  background-image: url(https://svgshare.com/i/G3y.svg);
  background-size: 200% auto;
  transform: scaleY(-1);
  @media screen and (min-width: 1024px) {
    transform: ${({ backgroundXTranslate = 0 }) =>
      `translate3d(${backgroundXTranslate}px, 0px, 0px) scaleY(-1);`} 
    background-size: 100% auto;
    min-height: calc(100vh + 6px);
    bottom: 2px;
  }
`;

const HeroCTAContainer = styled.div`
  ${tw`lg:pb-8 lg:pr-8`}
  transform: scaleY(-1);
`;

const HeroTextContainer = styled.div`
  ${tw`px-6 pt-16 pb-12 md:max-w-3xl md:mx-auto lg:max-w-full lg:pt-0`}
`;

const HeadlineContainer = styled.div`
  ${tw`mt-8 lg:mt-16`}
`;

const HeadlineLabel = styled.p`
  ${tw`text-sm font-semibold text-gray-400 uppercase tracking-wider`}
`;

const Headline = styled.h1`
  ${tw`mt-2 text-4xl leading-tight xl:text-5xl font-semibold font-display text-white`}
`;

const SubHeadline = styled.p`
  ${tw`mt-3 text-lg max-w-xl lg:max-w-3xl text-gray-400 xl:text-2xl`}
`;

const SmallerScreenBackground = styled.div`
  height: 100%;
  width: 100%;
  background-size: 100% auto;
  background-image: url(https://images.unsplash.com/photo-1503198515498-d0bd9ed16902?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60);
  background-position: 0px -300px;
  background-repeat: no-repeat ${tw`absolute`};
`;

const CreditHeadline = styled.div`
  ${tw`text-sm font-semibold text-gray-400 uppercase tracking-wider`}
`;

const ContinueSVG = styled.div`
  ${tw`absolute`}
  top: 0px;
  @media screen and (max-width: 1024px) {
    left: 50%;
  }
`;

export const Hero = () => {
  return (
    <HeroImageOuterContainer>
      <SideImage />
      <HeroContainer>
        <HeroCTAContainer>
          <HeroTextContainer>
            <HeadlineContainer>
              <HeadlineLabel>Available Now</HeadlineLabel>
              <Headline>Software Engineer, curious artist</Headline>
              <SubHeadline>
                I build web apps and applications that connect people and
                inspire spontaneous interactions. I am a deeply curious maker
                and programmer by day. Beyond work I automate aquariums, throw
                events, write comedy, play drums, and go outside.
              </SubHeadline>
            </HeadlineContainer>
          </HeroTextContainer>
          <div
            css={css`
              ${tw`relative h-64 overflow-hidden lg:hidden`}
            `}
          >
            <SmallerScreenBackground></SmallerScreenBackground>
          </div>
          <div
            css={css`
              ${tw`px-6 py-8 md:max-w-3xl md:mx-auto lg:max-w-full lg:py-0`}
            `}
          >
            <CreditHeadline>The Portfolio Of</CreditHeadline>
            <div
              css={css`
                ${tw`mt-4 sm:flex`}
              `}
            >
              <a
                href="https://github.com/davidhernon"
                target="_blank"
                rel="noopener noreferrer"
                css={css`
                  ${tw`flex items-center no-underline`}
                `}
              >
                <div
                  css={css`
                    ${tw`flex-shrink-0`}
                  `}
                >
                  <img
                    css={css`
                      ${tw`h-12 w-12 rounded-full border-2 border-white`}
                    `}
                    src="https://i.imgur.com/XFauvmb.jpg"
                    alt="david-hernon-avatar"
                  ></img>
                </div>
                <div
                  css={css`
                    ${tw`ml-3`}
                  `}
                >
                  <p
                    css={css`
                      ${tw`font-semibold text-white leading-tight`}
                    `}
                  >
                    David Hernon
                  </p>
                  <p
                    css={css`
                      ${tw`text-sm text-gray-500 leading-tight`}
                    `}
                  >
                    Engineer, Artist
                  </p>
                </div>
              </a>
            </div>
          </div>
        </HeroCTAContainer>
        <ContinueSVG>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
          >
            <path
              d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"
              fill="#5d687c"
            />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </ContinueSVG>
      </HeroContainer>
    </HeroImageOuterContainer>
  );
};
