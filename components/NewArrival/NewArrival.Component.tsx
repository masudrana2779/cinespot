import Image from "next/image";
import React from "react";
import { BsClock } from "react-icons/bs";
import { CardItem } from "../styledComponents/Card.styled";
import { Dflex } from "../styledComponents/global.styled";
import { DivBlock, Span, Title } from "../styledComponents/Typography.Styled";
import { Color, FontSize } from "../styledComponents/Variable.styled";
import { NewArrivalWrap } from "./NewArrival.styles";

const NewArrivalComponent = () => {
  return (
    <NewArrivalWrap>
      <CardItem>
        <Title
          marginBottom="20px"
          paddingBottom="5px"
          fontWeight="500"
          borderColor={Color.Brand_Color}
        >
          New Arrivals
        </Title>
        <DivBlock>
          <DivBlock>
            <DivBlock overflowY="hidden" overflowX="auto">
              <DivBlock display="flex">
                <div>
                  <DivBlock display="flex">
                    {[1, 2, 1, 1, 1, 1].map((item, i) => (
                      <DivBlock key={i} padding="0 15px">
                        <DivBlock width="300px">
                          <DivBlock marginBottom="10px">
                            <Image
                              src="/assets/img/img.png"
                              alt="banner"
                              width="301"
                              height="169"
                            />
                          </DivBlock>
                          <DivBlock>
                            <DivBlock>
                              <Title fontWeight="500">Chak</Title>
                            </DivBlock>
                            <DivBlock>
                              <Dflex>
                                <Span
                                  fontColor={Color.Gray_Color}
                                  fontSize={FontSize.F12}
                                >
                                  Drama
                                </Span>

                                <Span
                                  fontColor={Color.Gray_Color}
                                  fontSize={FontSize.F12}
                                  marginRight="10px"
                                  marginLeft="10px"
                                >
                                  |
                                </Span>

                                <Span
                                  fontColor={Color.Gray_Color}
                                  fontSize={FontSize.F12}
                                  marginRight="5px"
                                  display="flex"
                                  alignItems="center"
                                >
                                  <Span
                                    display="flex"
                                    alignItems="center"
                                    fontColor="#292929"
                                    fontSize="10px"
                                    marginRight="3px"
                                    paddingTop="2px"
                                  >
                                    <BsClock />
                                  </Span>
                                  <Span display="flex" alignItems="center">
                                    1hr.40min
                                  </Span>
                                </Span>
                              </Dflex>
                            </DivBlock>
                          </DivBlock>
                        </DivBlock>
                      </DivBlock>
                    ))}
                  </DivBlock>
                </div>
              </DivBlock>
            </DivBlock>
          </DivBlock>
        </DivBlock>
      </CardItem>
    </NewArrivalWrap>
  );
};
export default NewArrivalComponent;
