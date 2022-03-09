import Image from "next/image";
import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { Button } from "../styledComponents/Button.Styled";
import { CardItem } from "../styledComponents/Card.styled";
import { Dflex } from "../styledComponents/global.styled";
import { DivBlock, P, Span } from "../styledComponents/Typography.Styled";
import { Color, FontSize } from "../styledComponents/Variable.styled";
import { BannerContentInfo, BannerImage, BannerWrap } from "./Bnner.styled";

const BannerComponent = () => {
  return (
    <BannerWrap>
      <CardItem>
        <DivBlock>
          <Dflex>
            <DivBlock width="70%">
              <BannerImage>
                <Image
                  src="/assets/img/banner.png"
                  alt="banner"
                  width="1008"
                  height="467"
                  layout="responsive"
                />
              </BannerImage>
            </DivBlock>
            <DivBlock paddingLeft="20px" width="30%">
              <BannerContentInfo>
                <DivBlock marginBottom="10px">
                  <P
                    fontColor={Color.Heading_Color}
                    fontSize={FontSize.F24}
                    fontWeight="600"
                  >
                    Babar Lekha Chithi
                  </P>
                </DivBlock>
                <DivBlock marginBottom="20px">
                  <Dflex>
                    <Span
                      backgroundColor={Color.Gray_Light_Bg}
                      marginRight="10px"
                      borderRadius="10px"
                      fontColor={Color.Gray_Color}
                      fontSize={FontSize.F12}
                      padding="3px 5px"
                    >
                      Drama
                    </Span>
                  </Dflex>
                </DivBlock>
                <DivBlock marginBottom="20px">
                  <Dflex>
                    <DivBlock borderRadius="10px" marginRight="10px">
                      <Image
                        src="/assets/img/bannerI.png"
                        alt="banner"
                        width="76"
                        height="93"
                      />
                    </DivBlock>
                    <DivBlock borderRadius="10px" marginRight="10px">
                      <Image
                        src="/assets/img/bannerI.png"
                        alt="banner"
                        width="76"
                        height="93"
                      />
                    </DivBlock>
                    <DivBlock borderRadius="10px" marginRight="10px">
                      <Image
                        src="/assets/img/bannerI.png"
                        alt="banner"
                        width="76"
                        height="93"
                      />
                    </DivBlock>
                    <DivBlock borderRadius="10px" marginRight="10px">
                      <Image
                        src="/assets/img/bannerI.png"
                        alt="banner"
                        width="76"
                        height="93"
                      />
                    </DivBlock>
                  </Dflex>
                </DivBlock>
                <DivBlock marginBottom="20px">
                  <Dflex>
                    <P>
                      <Span marginRight="10px" fontWeight="600">
                        Cast :
                      </Span>
                      Mosarof Karim, Opy Karim, Abdul Karim, Sabila Nur, Sarika
                      Saba
                    </P>
                  </Dflex>
                </DivBlock>
                <DivBlock marginBottom="20px">
                  <P fontWeight="600">Synopsis:</P>
                  <P>
                    orem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ut erat sed libero tempus congue sed et tortor.
                    Vestibulum dapibus auctor sem at finibus. Proin ut erat sed
                    libero tempus congue sed et tortor.
                  </P>
                </DivBlock>
                <DivBlock>
                  <Dflex alignItems="center">
                    <DivBlock marginRight="15px">
                      <Button
                        padding="15px 30px"
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
                            <BsFillPlayFill />
                          </Span>
                          <Span>Play</Span>
                        </Span>
                      </Button>
                    </DivBlock>
                    {/* <DivBlock>
                      <Span
                        fontColor="#BBBBBB"
                        fontSize="28px"
                        cursor="pointer"
                      >
                        <AiFillPlusCircle />
                      </Span>
                    </DivBlock> */}
                  </Dflex>
                </DivBlock>
              </BannerContentInfo>
            </DivBlock>
          </Dflex>
        </DivBlock>
      </CardItem>
    </BannerWrap>
  );
};

export default BannerComponent;
