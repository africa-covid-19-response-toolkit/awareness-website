import styled from "vue-styled-components";

export const Footer = styled.h3`
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.background};
  font-size: ${props => props.theme.fontSizes.medium};
  padding: 0.25rem;
`;
