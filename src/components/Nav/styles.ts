import styled, { css } from 'styled-components';
import {
  FacebookWithCircle,
  InstagramWithCircle,
  LinkedinWithCircle,
  YoutubeWithCircle,
  TwitterWithCircle,
} from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #3f51b5;
  width: 100%;
  padding: 5px 15px;

  > img {
    width: 300px;
    cursor: pointer;
  }
`;

export const MenuButton = styled.div`
  > button,
  svg {
    margin: 0 10px;
  }
`;
const iconCSS = css`
  width: 31px;
  height: 31px;
  cursor: pointer;
  fill: #fff;
`;

export const FacebookIcon = styled(FacebookWithCircle)`
  ${iconCSS};
`;

export const LinkedinIcon = styled(LinkedinWithCircle)`
  ${iconCSS};
`;

export const InstagramIcon = styled(InstagramWithCircle)`
  ${iconCSS};
`;

export const TwitterIcon = styled(TwitterWithCircle)`
  ${iconCSS};
`;

export const YoutubeIcon = styled(YoutubeWithCircle)`
  ${iconCSS};
`;
