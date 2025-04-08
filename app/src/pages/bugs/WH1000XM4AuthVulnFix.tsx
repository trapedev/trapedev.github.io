import { Box } from "@mui/material";
import {
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";

const WH1000XM4AuthVulnFix = () => {
  return (
    <SingleCardItem>
      <Title
        title={
          "Sony, WH-1000XM4's Improper Authentication Vulnerability (Fixed in v2.9.0)"
        }
        hyperLink="https://github.com/trapedev/WH-1000XM4_Auth_Vuln_Fixed_v2.9.0"
      />
      <SubTitle title={"04/2025"} />
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
          src="wh-1000xm4-acks-en.png"
          style={{
            position: "absolute",
            width: "75%",
            maxWidth: "800px",
          }}
          alt="wh-1000xm4-acks-en"
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
          src="wh-1000xm4-acks-jp.png"
          style={{
            position: "absolute",
            width: "75%",
            maxWidth: "800px",
          }}
          alt="wh-1000xm4-acks-jp"
        />
      </Box>
    </SingleCardItem>
  );
};

export default WH1000XM4AuthVulnFix;
