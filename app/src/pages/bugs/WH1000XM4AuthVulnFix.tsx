import { Box } from "@mui/material";
import {
  SecondaryText,
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
      <SecondaryText
        text={
          "We discovered a vulnerability (CWE-287 related) in the Bluetooth authentication process of WH-1000XM4. We reported the vulnerability to Sony via HackerOne in January 2025."
        }
      />
      <SecondaryText text={"This vulnerability is the same type as the vulnerability in WH-1000XM5 that was fixed in v2.4.1."} />
      <SecondaryText
        text={
          "Sony released firmware with the applied patch as v2.9.0 and acknowledgments were published in both English and Japanese in April 2025."
        }
      />
      <SecondaryText text={"I would like to express my gratitude to Associate Professor Hiroki Kuzuno, Professor Yoshiaki Shiraishi, and Professor Masakatu Morii (ES3 Lab, Kobe University) for their cooperation in investigating the vulnerability."} />
      <Box
        sx={{
          position: "relative",
          paddingBottom: "13%", // 16:9 aspect ratio
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
