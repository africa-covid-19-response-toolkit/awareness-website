import styled from "vue-styled-components";

export const Footer = styled.h3`
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.footer};
  font-size: ${props => props.theme.fontSizes.large};
  color: ${props => props.theme.colors.footerFont};
  padding: 16px;
`;
