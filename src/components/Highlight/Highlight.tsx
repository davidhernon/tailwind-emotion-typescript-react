import * as React from 'react';
import css from '@emotion/css';
import tw from 'tailwind.macro';

export enum HighlightAlignment {
  Right,
  Left,
}

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
  // @ts-ignore
  const [contentHeight, setContentHeight] = React.useState(450);
  React.useLayoutEffect(() => {
    console.log('layout');
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
    <div
      css={css`
      ${tw`flex items-center`}
      ${align === HighlightAlignment.Right && 'flex-direction: row-reverse;'}
      background-color: ${color === 'light' ? '#ffffffeb' : '#28303F'};
    `}
    >
      <div
        css={css`
          background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEyIiBoZWlnaHQ9IjEwMDkiIHZpZXdCb3g9IjAgMCA0MTIgMTAwOSIgZmls%0D%0AbD0ibm9uZSIgCiAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPHBh%0D%0AdGggZD0iTTI0NyAwSDBWMTAwOUg0MTJMMjQ3IDBaIiBmaWxsPSIjRUZGMUY2Ii8+Cjwvc3ZnPgo=);
          background-size: 100% auto;
          background-repeat: no-repeat;
          @media screen and (min-width: 775px) {
            height: ${contentHeight}px;
          }
          align-items: center;
          ${align === HighlightAlignment.Right && 'transform: scaleX(-1);'}
          ${tw`absolute w-2/5 hidden lg:flex xl:flex`}
        `}
      >
        <img
          alt="company"
          css={css`
            height: 177px;
            max-width: 295px;
            margin-left: 30%;
            ${align === HighlightAlignment.Right && 'transform: scaleX(-1);'}
          `}
          src={companyImageUrl}
        />
      </div>
      <img
        alt="company"
        css={css`
          height: 177px;
          max-width: 295px;
          ${tw`hidden md:flex lg:hidden`}

          ${align === HighlightAlignment.Right
            ? 'margin-right: 2rem'
            : 'margin-left: 2rem'}
        `}
        src={companyImageUrl}
      />
      <div
        ref={targetRef}
        css={css`
          flex-grow: 1;
          max-width: 100vw;
          overflow-x: hidden;
          @media screen and (min-width: 700px) {
          }
          @media screen and (min-width: 775px) {
          }
          @media screen and (min-width: 820px) {
          }
          @media screen and (min-width: 1024px) {
            ${align === HighlightAlignment.Right
              ? 'padding-right: 40%'
              : `padding-left: 40%;`}
          }
        `}
      >
        <div
          css={css`
            padding: 2rem;
          `}
        >
          <div
            css={css`
              color: ${color === 'light' ? '#28303F' : '#ffffffeb'};
            `}
          >
            <div
              css={css`
                text-transform: uppercase;
                font-size: 0.875rem;
                font-weight: 600;
                color: ${color === 'light' ? '#5d6980' : '#cbd5e0;'};
                text-transform: uppercase;
                letter-spacing: 0.05em;
              `}
            >
              {date}
            </div>
            <div
              css={css`
                ${tw`text-4xl font-semibold mt-2`}
              `}
            >
              {title}
            </div>
            {link && (
              <a
                css={css`
                  ${tw`mt-3`}
                  font-size: 0.8rem;
                  font-weight: 700;
                  text-transform: uppercase;
                  color: ${color === 'light' ? '#52779e' : '#ffd0d8'};
                  &: visited {
                    color: ${color === 'light' ? '#52779e' : '#ffd0d8'};
                  }
                  &: hover {
                  }
                `}
                rel="noopener noreferrer"
                target="_blank"
                href={link}
              >
                {linkTitle ? linkTitle : link}
              </a>
            )}

            <ul
              css={css`
                ${tw`mt-4`}
                padding-left: 1.1rem;
                font-weight: 600;
                line-height: 1.4;
              `}
            >
              {points.map(point => (
                <li
                  css={css`
                    ${tw`text-lg max-w-xl lg:text-lg`}
                  `}
                >
                  {point}
                </li>
              ))}
            </ul>
            <div
              css={css`
                ${tw`flex flex-wrap font-semibold uppercase mt-8`}
                margin-left: -1rem;
                line-height: 1.5rem;
                color: ${color === 'light' ? '#5d6980' : '#cbd5e0;'};
              `}
            >
              {skills.map(skill => (
                <div
                  css={css`
                    ${tw`pl-4 pr-4`}
                  `}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
