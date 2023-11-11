import React from 'react';
import styled from '@emotion/styled';
import { icons } from 'feather-icons';

const IconWrapper = styled.i`
  display: inline-block;
`;

const Icon = ({
  name,
  size = 16,
  strokeWidth = 2,
  rotate = 0,
  color = '#222',
  onClick,
  ...props
}) => {
  const wrapperStyle = {
    width: size,
    height: size,
    transform: rotate ? `rotate(${rotate}deg)` : undefined,
  };
  const iconStyle = {
    'stroke-width': strokeWidth,
    stroke: color,
    width: size,
    height: size,
  };
  const icon = icons[name];
  const svg = icon ? icon.toSvg(iconStyle) : '';
  const base64 = btoa(svg);

  return (
    <IconWrapper {...props} style={wrapperStyle} onClick={onClick}>
      <img src={`data:image/svg+xml;base64, ${base64}`} alt={name} />
    </IconWrapper>
  );
};

export default Icon;
