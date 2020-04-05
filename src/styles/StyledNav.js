import styled from "vue-styled-components";

export const StyledNav = styled.div`
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.background};
  font-size: ${props => props.theme.fontSizes.medium};
`;
