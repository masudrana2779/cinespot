import React from "react";
import { Replay } from "vimond-replay";
import "vimond-replay/index.css";
import { DivBlock } from "../components/styledComponents/Typography.Styled";

const Player = () => {
  return (
    <DivBlock>
      <Replay source="https://node10.apigate.pro/media-s3/cinematic/promo_teaser/Bilaap_Trailer/playlist.m3u8" />
    </DivBlock>
  );
};

export default Player;
