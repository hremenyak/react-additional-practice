import styled from 'styled-components';
export const Span = styled.span`
  font-weight: 600;
  color: ${({ isRed }) => (isRed ? 'red' : 'black')};
`;

export const Text = styled.p`
  font-size: 16px;
  color: grey;
  font-weight: 500;

  &:hover {
    color: blue;
  }

  &:hover ${Span} {
    color: green;
  }
`;
export const Title = styled.h2`
  color: purple;
  font-weight: 600;
`;
