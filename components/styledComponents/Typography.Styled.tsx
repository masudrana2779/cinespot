import styled from "styled-components";
import { Color } from "./Variable.styled";

type DivBlogProps = {
  fontColor?: string;
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  margin?: string;
  padding?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  textAlign?: string;
  width?: string;
  height?: string;
  appearance?: string;
  borderTop?: string;
  borderBottom?: string;
  borderRight?: string;
  borderLeft?: string;
  borderRadius?: string;
  border?: string;
  boxShow?: string;
  outLine?: string;
  overflow?: string;
  overflowX?: string;
  overflowY?: string;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  gridTemplateColumns?: string;
};

export const DivBlock = styled.div<DivBlogProps>`
  color: ${(props) => props.fontColor};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  padding: ${(props) => props.padding};
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};
  text-align: ${(props) => props.textAlign};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  appearance: ${(props) => props.appearance || "auto"};
  border: ${(props) => props.border};
  border-top: ${(props) => props.borderTop};
  border-bottom: ${(props) => props.borderBottom};
  border-right: ${(props) => props.borderRight};
  border-left: ${(props) => props.borderLeft};
  border-radius: ${(props) => props.borderRadius};
  box-shadow: ${(props) => props.boxShow || "none"};
  outline: ${(props) => props.outLine || "none"};
  overflow: ${(props) => props.overflow};
  overflow-x: ${(props) => props.overflowX};
  overflow-y: ${(props) => props.overflowY};
  display: ${(props) => props.display};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  grid-template-columns: ${(props) => props.gridTemplateColumns};

  /* Cusctom scroll bar for mozila firefox */
  scrollbar-color: #aaa #3330;
  scrollbar-width: thin;

  /* Custom Scroll bar for google chrome */
  &::-webkit-scrollbar {
    /* display: none; */
  }
  &::-webkit-scrollbar {
    width: 5px;
    height: 3px;
    background-color: #aaa0;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #aaa;
    border-radius: 10px;
  }
`;

type TypographyProps = {
  fontColor?: string;
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  textAlign?: string;
  display?: string;
  cursor?: string;
  alignItems?: string;
  justifyContent?: string;
};
export const Typography = styled.div<TypographyProps>`
  color: ${(props) => props.fontColor || "#161616"};
  font-size: ${(props) => props.fontSize || "2.5rem"};
  line-height: ${(props) => props.lineHeight || "20px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  margin-top: ${(props) => props.marginTop || "0"};
  margin-bottom: ${(props) => props.marginBottom || "0"};
  margin-left: ${(props) => props.marginLeft || "0"};
  margin-right: ${(props) => props.marginRight || "0"};
  padding-top: ${(props) => props.paddingTop || "0"};
  padding-bottom: ${(props) => props.paddingBottom || "0"};
  padding-left: ${(props) => props.paddingLeft || "0"};
  padding-right: ${(props) => props.paddingRight || "0"};
  text-align: ${(props) => props.textAlign};
  display: ${(props) => props.display};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  cursor: ${(props) => props.cursor};
`;

type SpanProps = {
  fontColor?: string;
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  padding?: string;
  cursor?: string;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  textAlign?: string;
  borderRadius?: string;
  backgroundColor?: string;
  textTransform?: string;
};
export const Span = styled.span<SpanProps>`
  color: ${(props) => props.fontColor};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight || "initial"};
  font-weight: ${(props) => props.fontWeight};
  margin-top: ${(props) => props.marginTop || "0"};
  margin-bottom: ${(props) => props.marginBottom || "0"};
  margin-left: ${(props) => props.marginLeft || "0"};
  margin-right: ${(props) => props.marginRight || "0"};
  padding-top: ${(props) => props.paddingTop || "0"};
  padding-bottom: ${(props) => props.paddingBottom || "0"};
  padding-left: ${(props) => props.paddingLeft || "0"};
  padding-right: ${(props) => props.paddingRight || "0"};
  padding: ${(props) => props.padding};
  display: ${(props) => props.display || "inline-block"};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  cursor: ${(props) => props.cursor};
  text-align: ${(props) => props.textAlign};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  text-transform: ${(props) => props.textTransform};
`;

type PProps = {
  fontColor?: string;
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  textAlign?: string;
  position?: string;
};

export const P = styled.p<PProps>`
  color: ${(props) => props.fontColor || Color.Heading_Color};
  font-size: ${(props) => props.fontSize || "1rem"};
  line-height: ${(props) => props.lineHeight || "26px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  margin-top: ${(props) => props.marginTop || "0"};
  margin-bottom: ${(props) => props.marginBottom || "0"};
  margin-left: ${(props) => props.marginLeft || "0"};
  margin-right: ${(props) => props.marginRight || "0"};
  padding-top: ${(props) => props.paddingTop || "0"};
  padding-bottom: ${(props) => props.paddingBottom || "0"};
  padding-left: ${(props) => props.paddingLeft || "0"};
  padding-right: ${(props) => props.paddingRight || "0"};
  text-align: ${(props) => props.textAlign};
  position: ${(props) => props.position};
`;

type titleProps = {
  fontColor?: string;
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  textAlign?: string;
  position?: string;
  borderColor?: string;
  textTransform?: string;
};

export const Title = styled.p<titleProps>`
  color: ${(props) => props.fontColor || Color.Heading_Color};
  font-size: ${(props) => props.fontSize || "1rem"};
  line-height: ${(props) => props.lineHeight || "26px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  margin-top: ${(props) => props.marginTop || "0"};
  margin-bottom: ${(props) => props.marginBottom || "0"};
  margin-left: ${(props) => props.marginLeft || "0"};
  margin-right: ${(props) => props.marginRight || "0"};
  padding-top: ${(props) => props.paddingTop || "0"};
  padding-bottom: ${(props) => props.paddingBottom || "0"};
  padding-left: ${(props) => props.paddingLeft || "0"};
  padding-right: ${(props) => props.paddingRight || "0"};
  text-align: ${(props) => props.textAlign};
  text-transform: ${(props) => props.textTransform};
  position: relative;

  &::before {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    width: 25px;
    height: 2px;
    background-color: ${(props) => props.borderColor};
  }
`;
