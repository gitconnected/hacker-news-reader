import styled from 'styled-components';
import { tablet } from 'styles/mediaQueries';

const HEIGHT = 48;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  height: ${HEIGHT}px;
  color: ${({ theme }) => theme.text};
  width: 100%;
  box-shadow: 0 1px 0 0 black;
  position: fixed;
  top: 0;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  max-width: 85%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${tablet} {
    max-width: 96%;
  }
`;

export const NavSection = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  margin-left: 12px;
  font-size: 18px;
  cursor: pointer;
`;

export const Logo = styled.img`
  height: 20px;
  border-radius: 2px;
  margin-right: 8px;
`;

export const Spacer = styled.div`
  height: ${HEIGHT}px;
`;

export const ExternalLink = styled.a`
  display: flex;
`;
