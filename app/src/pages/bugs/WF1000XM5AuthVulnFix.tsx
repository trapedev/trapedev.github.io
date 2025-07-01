import { Box } from "@mui/material";
import {
  SecondaryText,
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";

const WF1000XM5AuthVulnFix = () => {
  return (
    <SingleCardItem>
      <Title
        title={
          "Sony, WF-1000XM5's Improper Authentication Vulnerability (Fixed in v5.0.2)"
        }
      />
      <SubTitle title={"07/2025"} />
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
          src="wf-1000xm5-acks-en.png"
          style={{
            position: "absolute",
            width: "75%",
            maxWidth: "800px",
          }}
          alt="wf-1000xm5-acks-en"
        />
      </Box>
      <Box
        sx={{
          position: "relative",
          paddingBottom: "15%", // 16:9 aspect ratio
          height: 0,
          overflow: "hidden",
          maxWidth: "100%",
        }}
      >
        <img
          src="wf-1000xm5-acks-jp.png"
          style={{
            position: "absolute",
            width: "75%",
            maxWidth: "800px",
          }}
          alt="wf-1000xm5-acks-jp"
        />
      </Box>
    </SingleCardItem>
  );
};

export default WF1000XM5AuthVulnFix;
