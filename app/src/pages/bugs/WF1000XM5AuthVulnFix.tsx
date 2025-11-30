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
      <SecondaryText
        text={
          "We discovered a vulnerability (CWE-287 related) in the Bluetooth authentication process of WF-1000XM5. We reported the vulnerability to Sony via HackerOne in January 2025."
        }
      />
      <SecondaryText text={"This vulnerability is the same type as the vulnerability in WH-1000XM5 that was fixed in v2.4.1."} />
      <SecondaryText
        text={
          "Sony released firmware with the applied patch as v5.0.2 and acknowledgments were published in both English and Japanese in July 2025."
        }
      />
      <SecondaryText text={"I would like to express my gratitude to Associate Professor Hiroki Kuzuno, Professor Yoshiaki Shiraishi, and Professor Masakatu Morii (ES3 Lab, Kobe University) for their cooperation in investigating the vulnerability."} />
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
