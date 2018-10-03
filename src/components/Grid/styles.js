import styled from 'styled-components';
import { mobile, tablet, monitor } from 'styles/mediaQueries';

export const GridWrapper = styled.ul`
  display: flex;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;

  ${monitor} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mobile} {
    grid-template-columns: 1fr;
  }
`;
