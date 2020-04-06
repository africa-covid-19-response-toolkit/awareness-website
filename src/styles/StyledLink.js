import styled from "vue-styled-components";

const StyledLink = styled.div`
  color: ${props => props.theme.colors.link}
  text-align: left;
  text-decoration: underline;
  font-size: ${props => props.theme.fontSizes.large}
`;

export default StyledLink;
