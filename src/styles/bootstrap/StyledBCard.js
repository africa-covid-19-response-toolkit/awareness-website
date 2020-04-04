import BootstrapVue from "bootstrap-vue";
import styled from "vue-styled-components";
console.log("BootstrapVue ", BootstrapVue);
export const StyledBCard = styled.div`
  color: ${props => props.theme.colors.primary}
  padding: 0px
`;
