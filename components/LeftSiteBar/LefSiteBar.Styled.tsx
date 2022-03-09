import styled from "styled-components";
import { Color } from "../styledComponents/Variable.styled";

export const LefSiteBarWrap = styled.div`
  /* width: 240px; */
  background-color: #fff;
  /* min-height: 100%; */
  border-radius: 10px;
  /* margin-right: 30px; */
`;

export const LefSiteBar = styled.div`
  padding: 20px;
`;

export const LefSiteBarTop = styled.div`
  margin-bottom: 165px;
`;
export const SidebarMenu = styled.div`
  ul {
    li {
      border-bottom: 1px solid ${Color.Menu_Bg};
      padding-top: 10px;
      padding-bottom: 10px;
      &:last-child {
        border: none;
      }
      a {
        color: ${Color.Gray_Dark_Color};
        padding: 15px 15px;
        transition: all 0.5s;
        border-radius: 10px;
        &:hover {
          background-color: ${Color.Menu_Bg};
          border-color: transparent;
          color: ${Color.Brand_Color};
        }
      }
    }
  }
`;
