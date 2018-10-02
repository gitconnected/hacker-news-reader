import styled from 'styled-components';

const RADIUS = 4;

export const Item = styled.li`
  height: 100%;
`;

export const Card = styled.div`
  flex-direction: column;
  display: flex;
  height: 100%;
`;

export const ExternalLink = styled.a`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  display: block;
  height: 240px;
  max-width: 100%;
  border-top-left-radius: ${RADIUS}px;
  border-top-right-radius: ${RADIUS}px;
  object-fit: cover;
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border-bottom-left-radius: ${RADIUS}px;
  border-bottom-right-radius: ${RADIUS}px;
  word-break: break-word;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.text};
  margin: 0;
  padding: 16px;
  padding-bottom: 70px;
  font-size: 16px;
  font-weight: 400;
  flex-grow: 1;
`;

export const Source = styled.div`
  color: ${({ theme }) => theme.textSecondary};
  border-top: 1px solid ${({ theme }) => theme.border};
  padding: 16px;
`;
