import { Box } from "@mui/material";
import {
  SecondaryText,
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";

const MTH2025 = () => {
  return (
    <SingleCardItem>
      <Title
        title={"The Chikusuikai Best Master Thesis Award, Kobe University"}
        hyperLink="http://www.eng.kobe-u.ac.jp/research_publications/awards_2024.html"
      />
      <SubTitle title={"03/2025"} />
      <SecondaryText text={"Title: Security Accessments and Defenses for Communication Systems"} />
      <Box
        sx={{
          position: "relative",
          paddingBottom: "20%", // 16:9 aspect ratio
          height: 0,
          overflow: "hidden",
          maxWidth: "100%",
          mt: 3,
        }}
      >
        <img
          src="mth2025.png"
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

export default MTH2025;
