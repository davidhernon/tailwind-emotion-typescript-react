import * as React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import css from '@emotion/css';
import { useSpring, animated, config } from 'react-spring';
import { targetRefDeps } from '../Highlight/Highlight';
import { keyframes } from '@emotion/core';

const pulse = keyframes`

0% {
  box-shadow: 0px 0px 0px 0px rgba(255,255,255,0.5)
}

  50% {
    box-shadow: 0px 0px 0px 0px rgba(255,255,255,0.5)
  }

  75% {
    box-shadow: 0px 0px 0px 10px rgba(255,255,255,0.0)
  }

  100% {
    box-shadow: 0px 0px 0px 10px rgba(255,255,255,0.0)
  }
`;

const HeroImageOuterContainer = styled.div`
  overflow: hidden;
  background: #28303f;
`;

const SideImage = styled.div`
  @keyframes scrollBackground {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 50vw -35vh;
    }
    100% {
      background-position: 0 0;
    }
  }

  ${tw`hidden lg:block absolute`}
  height:100%;
  max-height: 100vh;
  width: 100%;
  background-size: 100% auto;
  @media screen and (max-width: 1280px) {
    background-size: 100% 250%;
  }
  background-image: url(https://images.unsplash.com/photo-1503198515498-d0bd9ed16902?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60);
  animation: scrollBackground 60s linear infinite;
`;

const HeroContainer = styled.div`
  ${tw`relative lg:min-h-screen xl:min-h-screen lg:min-w-3xl xl:min-w-4xl lg:flex lg:items-center lg:justify-center lg:w-3/5 lg:pl-8 lg:pr-8 bg-no-repeat`}
  background-image: url(${process.env
    .PUBLIC_URL}/assets/background-triangle.svg);
  background-size: 200% auto;
  transform: scaleY(-1);
  @media screen and (min-width: 1024px) {
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
  ${tw`px-6 pt-16 pb-8 lg:pt-0`}
`;

const HeadlineContainer = styled.div`
  ${tw`mt-8 lg:mt-16`}
`;

const HeadlineLabel = styled.p`
  ${tw`text-sm font-semibold text-gray-400 uppercase tracking-wider`}
`;

const Headline = styled.h1`
  ${tw`mt-2 text-4xl leading-tight xl:text-5xl font-semibold font-display text-white`}
  @media screen and (min-width: 1282px) {
    font-size: 2.8rem;
  }
`;

const SubHeadline = styled.p`
  ${tw`text-gray-400 mt-3 text-lg max-w-xl lg:max-w-3xl xl:text-2xl`}
  line-height: 1.25;
`;

const SmallerScreenBackground = styled.div`
  @keyframes scrollBackground2 {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 0 -50vh;
    }
    100% {
      background-position: 0 0;
    }
  }
  height: 100%;
  width: 100%;
  background-size: 100% auto;
  background-image: url(https://images.unsplash.com/photo-1503198515498-d0bd9ed16902?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60);
  background-position: 0px -300px;
  background-repeat: no-repeat ${tw`absolute`};
  @media screen and (max-width: 600px) {
    background-size: 100% 300%;
    background-position: 0 0;
  }
  animation: scrollBackground2 60s linear infinite;
`;

const CTAContainer = styled.div`
  ${tw`flex w-1/3 pt-6 mt-1`}
`;

const CTA = styled.a`
  ${tw`p-2 rounded bg-gray-300 no-underline`}
  color: #2d3748;
  &:hover {
    cursor: pointer;
    ${tw`bg-blue-200`}
  }
`;

const ContinueSVG = styled.a`
  cursor: pointer;
  ${tw`absolute`}
  top: 10px;
  @media screen and (max-width: 1024px) {
    left: 50%;
  }
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export const Hero = () => {
  const { x } = useSpring({
    from: { x: -900 },
    x: 0,
    config: config.stiff,
  });

  const { opacity } = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    config: config.slow,
  });

  const targetRef = React.useRef<null | HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = React.useState(0);
  React.useLayoutEffect(() => {
    try {
      if (targetRef === null || targetRef.current === null) {
        return;
      }
      setContentWidth(targetRef.current.clientWidth);
    } catch (e) {}
    // eslint-disable-next-line
  }, targetRefDeps(targetRef)); // you should pass an array literal so that tslint can tell you if your deps are wrong, instead I need to optionally return a clientHeight or 0 when its not available

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      try {
        if (targetRef === null || targetRef.current === null) {
          return;
        }
        setContentWidth(targetRef.current.clientWidth);
      } catch (e) {}
    });
  });

  return (
    <HeroImageOuterContainer ref={targetRef}>
      <SideImage />
      <animated.div
        style={{
          display: contentWidth > 1023 ? 'flex' : 'auto',
          transform: 'translate3d(0,0,0)',
        }}
      >
        {contentWidth > 1023 && (
          <div
            style={{ width: '50px', height: '100vh', background: '#2F3747' }}
          ></div>
        )}
        <HeroContainer
          style={{ width: contentWidth < 1010 ? contentWidth : undefined }}
        >
          <HeroCTAContainer>
            <HeroTextContainer>
              <HeadlineContainer>
                <animated.div
                  style={{
                    opacity:
                      contentWidth < 1010
                        ? '1'
                        : opacity.interpolate((o) => `${o}`),
                    transform:
                      contentWidth < 1010
                        ? 'translate3d(0,0,0)'
                        : x.interpolate((x) => `translate3d(${x}px, 0, 0)`),
                  }}
                >
                  <HeadlineLabel></HeadlineLabel>
                  <Headline>User Centered Engineer</Headline>
                  <SubHeadline>
                    David Hernon is an entrepreuner and creator currently
                    designing software tools to build chatbots at scale.
                  </SubHeadline>
                  <CTAContainer>
                    <CTA
                      target="_blank"
                      href="https://davidhernonpersonal.s3.us-east-2.amazonaws.com/David_Hernon_Resume_2020.pdf"
                    >
                      Resume
                    </CTA>
                    <CTA
                      href="mailto:dmohernon@gmail.com"
                      style={{ marginLeft: '1rem' }}
                    >
                      Contact
                    </CTA>
                  </CTAContainer>
                </animated.div>
              </HeadlineContainer>
            </HeroTextContainer>
            <div
              css={css`
                ${tw`relative h-64 overflow-hidden lg:hidden`}
              `}
            >
              <SmallerScreenBackground></SmallerScreenBackground>
            </div>
            <animated.div
              style={{
                opacity:
                  contentWidth < 1010
                    ? '1'
                    : opacity.interpolate((o) => `${o}`),
                transform:
                  contentWidth < 1010
                    ? 'translate3d(0,0,0)'
                    : x.interpolate((x) => `translate3d(${x}px, 0, 0)`),
              }}
            >
              <div
                css={css`
                  ${tw`px-6 py-8 md:max-w-3xl md:mx-auto md:mx-0 lg:max-w-full lg:py-0`}
                `}
              >
                <div
                  css={css`
                    ${tw`sm:flex`}
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
                    </div>
                  </a>
                </div>
              </div>
            </animated.div>
          </HeroCTAContainer>

          <ContinueSVG href="/#background">
            <div
              css={css`
                border-radius: 50%;
                animation: ${pulse} infinite 4s linear;
              `}
            >
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
            </div>
          </ContinueSVG>
        </HeroContainer>
      </animated.div>
    </HeroImageOuterContainer>
  );
};
