import * as React from 'react';
import css from '@emotion/css';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

export enum HighlightAlignment {
  Right,
  Left,
}

// eslint-disable-next-line
const HighlightContainer = styled.div<{
  rightAligned: boolean;
  lightTheme: boolean;
}>`${tw`flex items-center`}
  ${({ rightAligned }) => rightAligned && 'flex-direction: row-reverse;'}
  background-color: ${({ lightTheme }) =>
    lightTheme ? '#ffffffeb' : '#28303F'}
`;

// eslint-disable-next-line
const HighlightBackgroundImageContainer = styled.div<{
  rightAligned: boolean;
  contentHeight: number;
}>`
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEyIiBoZWlnaHQ9IjEwMDkiIHZpZXdCb3g9IjAgMCA0MTIgMTAwOSIgZmls%0D%0AbD0ibm9uZSIgCiAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPHBh%0D%0AdGggZD0iTTI0NyAwSDBWMTAwOUg0MTJMMjQ3IDBaIiBmaWxsPSIjRUZGMUY2Ii8+Cjwvc3ZnPgo=);
  background-size: 100% auto;
  background-repeat: no-repeat;
  @media screen and (min-width: 775px) {
    ${({ contentHeight }) => `height: ${contentHeight}px`}
  }
  align-items: center;
  ${({ rightAligned }) => rightAligned && 'transform: scaleX(-1);'}
  ${tw`absolute w-2/5 hidden lg:flex xl:flex`}
`;

const LargeAlignedImage = styled.img<{ rightAligned: boolean }>`
  height: 177px;
  max-width: 295px;
  margin-left: 30%;
  ${({ rightAligned }) => rightAligned && 'transform: scaleX(-1);'}
`;

const MediumAlignedImage = styled.img<{ rightAligned: boolean }>`
  ${tw`hidden md:flex lg:hidden`}
  height: 177px;
  max-width: 295px;

  ${({ rightAligned }) =>
    rightAligned ? 'margin-right: 2rem' : 'margin-left: 2rem'}
`;

const ExpandingHighlightContent = styled.div<{ rightAligned: boolean }>`
  flex-grow: 1;
  max-width: 100vw;
  overflow-x: hidden;
  @media screen and (min-width: 1024px) {
    ${({ rightAligned }) =>
      rightAligned ? 'padding-right: 40%' : `padding-left: 40%;`}
  }
`;

const HighlightContentContainer = styled.div<{ lightTheme: boolean }>`
  color: ${({ lightTheme }) => (lightTheme ? '#28303F' : '#ffffffeb')};
`;

const HighlightDate = styled.div<{ lightTheme: boolean }>`
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ lightTheme }) => (lightTheme ? '#5d6980' : '#cbd5e0;')};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const HighlightLink = styled.a<{ lightTheme: boolean }>`
  ${tw`mt-3`}
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ lightTheme }) => (lightTheme ? '#52779e' : '#ffd0d8')};
`;

const HighlightPointsUl = styled.ul`
  ${tw`mt-4`}
  padding-left: 1.1rem;
  font-weight: 600;
  line-height: 1.4;
`;

const SkillsContainer = styled.div<{ lightTheme: boolean }>`
  ${tw`flex flex-wrap font-semibold uppercase mt-8`}
  margin-left: -1rem;
  line-height: 1.5rem;
  color: ${({ lightTheme }) => (lightTheme ? '#5d6980' : '#cbd5e0;')};
`;

const targetRefDeps = (
  targetRef: React.MutableRefObject<null | HTMLDivElement>,
): [React.MutableRefObject<null | HTMLDivElement>, 0 | number] => {
  if (targetRef !== null && targetRef.current !== null) {
    return [targetRef, targetRef.current.clientHeight];
  }
  return [targetRef, 0];
};

export const Highlight: React.FC<{
  align?: HighlightAlignment;
  color?: 'light' | 'dark';
  companyImageUrl?: string;
  date: string;
  link?: string;
  linkTitle?: string;
  title: string;
  points: string[];
  skills: string[];
}> = ({
  align = HighlightAlignment.Right,
  color = 'light',
  companyImageUrl = 'https://www.fujifilm.com/products/digital_cameras/x/fujifilm_x_t3/sample_images/img/index/ff_x_t3_003.JPG',
  date,
  link,
  linkTitle,
  title,
  points,
  skills,
}) => {
  const targetRef = React.useRef<null | HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = React.useState(450);
  React.useLayoutEffect(() => {
    try {
      if (targetRef === null || targetRef.current === null) {
        return;
      }
      setContentHeight(targetRef.current.clientHeight);
    } catch (e) {}
    // eslint-disable-next-line
  }, targetRefDeps(targetRef)); // you should pass an array literal so that tslint can tell you if your deps are wrong, instead I need to optionally return a clientHeight or 0 when its not available

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      try {
        if (targetRef === null || targetRef.current === null) {
          return;
        }
        setContentHeight(targetRef.current.clientHeight);
      } catch (e) {}
    });
  });

  return (
    <HighlightContainer
      rightAligned={align === HighlightAlignment.Right}
      lightTheme={color === 'light'}
    >
      <HighlightBackgroundImageContainer
        rightAligned={align === HighlightAlignment.Right}
        contentHeight={contentHeight}
      >
        <LargeAlignedImage
          rightAligned={align === HighlightAlignment.Right}
          alt="company"
          src={companyImageUrl}
        />
      </HighlightBackgroundImageContainer>
      <MediumAlignedImage
        alt="company"
        rightAligned={align === HighlightAlignment.Right}
        src={companyImageUrl}
      />
      <ExpandingHighlightContent
        rightAligned={align === HighlightAlignment.Right}
        ref={targetRef}
      >
        <div
          css={css`
            ${tw`p-8`}
          `}
        >
          <HighlightContentContainer lightTheme={color === 'light'}>
            <HighlightDate lightTheme={color === 'light'}>{date}</HighlightDate>
            <div
              css={css`
                ${tw`text-4xl font-semibold mt-2`}
              `}
            >
              {title}
            </div>
            {link && (
              <HighlightLink
                lightTheme={color === 'light'}
                rel="noopener noreferrer"
                target="_blank"
                href={link}
              >
                {linkTitle ? linkTitle : link}
              </HighlightLink>
            )}

            <HighlightPointsUl>
              {points.map(point => (
                <li
                  css={css`
                    ${tw`text-lg max-w-xl lg:text-lg`}
                  `}
                >
                  {point}
                </li>
              ))}
            </HighlightPointsUl>
            <SkillsContainer lightTheme={color === 'light'}>
              {skills.map(skill => (
                <div
                  css={css`
                    ${tw`pl-4 pr-4`}
                  `}
                >
                  {skill}
                </div>
              ))}
            </SkillsContainer>
          </HighlightContentContainer>
        </div>
      </ExpandingHighlightContent>
    </HighlightContainer>
  );
};
