import styled, { css } from 'styled-components';
import {
  padding, color, margin, shadow, position, grid, layout, border, alignSelf, gridColumn, gridRow,
  zIndex, background,
} from 'styled-system';

export const boxStyles = css`
  ${background};
  ${grid};
  ${layout};
  ${padding};
  ${margin};
  ${color};
  ${shadow};
  ${position};
  ${border};
  ${alignSelf};
  ${gridColumn};
  ${gridRow};
  ${zIndex};
`;

const Box = styled.div`
  ${boxStyles};
`;

export default Box;
