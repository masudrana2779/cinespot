import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Button } from "../styledComponents/Button.Styled";
import { LI, Logo, UL } from "../styledComponents/global.styled";
import { DivBlock, Span } from "../styledComponents/Typography.Styled";
import { Color, FontSize } from "../styledComponents/Variable.styled";
import { LefSiteBar, LefSiteBarWrap, SidebarMenu } from "./LefSiteBar.Styled";

const LefSiteBarComponent = () => {
  return (
    <LefSiteBarWrap>
      <LefSiteBar>
        <DivBlock paddingBottom="0px">
          <DivBlock marginBottom="50px">
            <Logo>
              <Link href={"/"}>
                <a>
                  <Image
                    src="/assets/img/logo.png"
                    alt="logo"
                    width="157"
                    height="79"
                  />
                </a>
              </Link>
            </Logo>
          </DivBlock>
          <DivBlock>
            <SidebarMenu>
              <UL listStyle="none">
                <LI>
                  <Link href={"/"}>
                    <a>
                      <Span display="flex" alignItems="center">
                        <Span
                          display="flex"
                          marginRight="10px"
                          className="icon"
                        >
                          <AiOutlineHome />
                        </Span>
                        <Span>Home</Span>
                      </Span>
                    </a>
                  </Link>
                </LI>
                <LI>
                  <Link href={"/"}>
                    <a>
                      <Span display="flex" alignItems="center">
                        <Span
                          display="flex"
                          marginRight="10px"
                          className="icon"
                        >
                          <AiOutlineHome />
                        </Span>
                        <Span>Watch Later </Span>
                      </Span>
                    </a>
                  </Link>
                </LI>
                <LI>
                  <Link href={"/"}>
                    <a>
                      <Span
                        display="flex"
                        alignItems="center"
                        fontSize={FontSize.F16}
                      >
                        <Span
                          display="flex"
                          marginRight="10px"
                          className="icon"
                        >
                          <AiOutlineHome />
                        </Span>
                        <Span>Subscription</Span>
                      </Span>
                    </a>
                  </Link>
                </LI>
                <LI marginTop="100px">
                  <Button
                    width="100%"
                    padding="15px"
                    backgroundColor={Color.Brand_Color}
                    border="none"
                    hoverBackground="#E60909"
                    fontSize={FontSize.F14}
                    fontWeight="500"
                  >
                    <Span
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Span
                        display="flex"
                        fontSize="18px"
                        marginRight="10px"
                        className="icon"
                      >
                        <AiOutlineHome />
                      </Span>
                      <Span>Sign in</Span>
                    </Span>
                  </Button>
                </LI>
              </UL>
            </SidebarMenu>
          </DivBlock>
        </DivBlock>
      </LefSiteBar>
    </LefSiteBarWrap>
  );
};

export default LefSiteBarComponent;
