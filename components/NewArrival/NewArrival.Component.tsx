import Image from "next/image";
import React from "react";
import { BsClock } from "react-icons/bs";
import { IAlbum } from "../../interfaces/IAlbum";
import { IBanner } from "../../interfaces/IBanner";
import { CardItem } from "../styledComponents/Card.styled";
import { Dflex } from "../styledComponents/global.styled";
import { DivBlock, Span, Title } from "../styledComponents/Typography.Styled";
import { Color, FontSize } from "../styledComponents/Variable.styled";
import { NewArrivalWrap } from "./NewArrival.styles";

type NewArrivalProps = {
  item: IAlbum;
};
const NewArrivalComponent = ({ item }: NewArrivalProps) => {
  return (
    <NewArrivalWrap>
      <CardItem>
        <Title
          marginBottom="20px"
          paddingBottom="5px"
          fontWeight="500"
          borderColor={Color.Brand_Color}
          textTransform="capitalize"
        >
          {item.playlist_name}
        </Title>
        <DivBlock>
          <DivBlock overflow="hidden">
            <DivBlock overflowY="hidden" overflowX="auto" paddingBottom="10px">
              <DivBlock display="flex" margin="0 -15px">
                {item.contents &&
                  item.contents?.length > 0 &&
                  item.contents?.map((content: IBanner, i) => (
                    <DivBlock key={i} padding="0 15px">
                      <DivBlock width="300px">
                        <DivBlock marginBottom="10px">
                          <DivBlock
                            overflow="hidden"
                            borderRadius="10px"
                            display="flex"
                          >
                            <Image
                              src={content.img_lanscape}
                              alt="banner"
                              width="301"
                              height="169"
                            />
                          </DivBlock>
                        </DivBlock>
                        <DivBlock>
                          <DivBlock>
                            <Title fontWeight="500">{content.title}</Title>
                          </DivBlock>
                          <DivBlock>
                            <Dflex>
                              <Span
                                fontColor={Color.Gray_Color}
                                fontSize={FontSize.F12}
                                textTransform="capitalize"
                              >
                                {content.category}
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
                                  {content.video_duration}
                                </Span>
                              </Span>
                            </Dflex>
                          </DivBlock>
                        </DivBlock>
                      </DivBlock>
                    </DivBlock>
                  ))}
              </DivBlock>
            </DivBlock>
          </DivBlock>
        </DivBlock>
      </CardItem>
    </NewArrivalWrap>
  );
};
export default NewArrivalComponent;
