import styled from '@emotion/styled';

export const CopyBlock = styled('div')`
  color: #fff;
  text-align: left;
  padding: 10px;
  margin: 0;
`;

export const ScoreLabel = styled('span')`
  color: #fff;
  padding: 0 10px;
`;

export const Container = styled('div')`
  position: absolute;
  top: 0;
  opacity: 0.3;
  padding: 11%; /* 😒 */
`;

export const SnowflakeSlice = styled('path')`
  cursor: pointer;
  fill: transparent;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  transition: fill 0.2s ease;
  &:hover {
    fill: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    fill: rgba(255, 255, 255, 0.4);
  }
`;

export const LabelRadar = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 19px;
  color: #ffffff;
  margin-bottom: 8px;
  span {
    color: #a7aaaf;
  }
`;

export const TextRadar = styled.span`
  font-style: normal;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  margin-bottom: 14px;
  display: block;
`;
