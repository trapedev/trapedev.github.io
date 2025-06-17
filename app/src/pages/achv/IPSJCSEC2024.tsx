import { Box } from "@mui/material";
import { SingleCardItem, SubTitle, Title } from "components/views/ui";

const IPSJCSEC2024 = () => {
  return (
    <SingleCardItem>
      <Title
        title={"CSEC Outstanding Research Award (The 106th CSEC Conference)"}
        hyperLink="https://www.ipsj.or.jp/award/csec-award.html"
      />
      <SubTitle title={"09/2024"} />
      {/* <SecondaryText text={"CSS 2024@Kobe にて表彰"} /> */}
      <Box
        sx={{
          position: "relative",
          paddingBottom: "15%", // 16:9 aspect ratio
          height: 0,
          overflow: "hidden",
          maxWidth: "100%",
          mt: 3,
        }}
      >
        <img
          src="csec2024.png"
          style={{
            position: "absolute",
            width: "75%",
            maxWidth: "800px",
          }}
          alt="wh-1000xm5-acks-en"
        />
      </Box>
    </SingleCardItem>
  );
};

export default IPSJCSEC2024;
