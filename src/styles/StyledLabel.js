import styled from "vue-styled-components";

export const StyledLabel = styled.span`
  color: ${props => props.theme.colors.link};
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${props => props.theme.fontWeights.bold};
`;
