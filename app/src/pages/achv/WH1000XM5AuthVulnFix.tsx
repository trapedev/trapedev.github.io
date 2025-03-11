import { Box } from "@mui/material";
import {
  SecondaryText,
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";

const WH1000XM5AuthVulnFix = () => {
  return (
    <SingleCardItem>
      <Title
        title={
          "Sony, WH-1000XM5's Improper Authentication Vulnerability (Fixed in v2.4.1)"
        }
        hyperLink="https://github.com/trapedev/WH-1000XM5_Auth_Vuln_Fixed_v2.4.1"
      />
      <SubTitle title={"03/2025"} />
      <SecondaryText
        text={
          "We discovered a new vulnerability (CWE-287 related) in the Bluetooth authentication process of WH-1000XM5 in August 2024. We reported the new vulnerability to Sony via HackerOne."
        }
      />
      <SecondaryText text={"Sony acknowledged the vulnerability in November 2024."} />
      <SecondaryText
        text={
          "Sony released firmware with the applied patch as v2.4.1 in February 2025."
        }
      />
      <SecondaryText text={"In March 2025, acknowledgments were published in both English and Japanese."} />
      <SecondaryText text={"This vulnerability was discovered using our attack tool, Breaktooth, that we developed."} />
      <SecondaryText text={"We made a conference presentation that included an explanation of this vulnerability at ICSS2025@Okinawa."} />
      <SecondaryText text={"I would like to express my gratitude to Associate Professor Hiroki Kuzuno, Professor Yoshiaki Shiraishi, and Professor Masakatu Morii (ES3 Lab, Kobe University) for their cooperation in investigating the vulnerability."} />
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
          src="wh-1000xm5-acks-en.png"
          style={{
            position: "absolute",
            width: "75%",
            maxWidth: "800px",
          }}
          alt="wh-1000xm5-acks-en"
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
          src="wh-1000xm5-acks-jp.png"
          style={{
            position: "absolute",
            width: "75%",
            maxWidth: "800px",
          }}
          alt="wh-1000xm5-acks-jp"
        />
      </Box>
      <Box
        sx={{
          position: "relative",
          paddingBottom: "56.25%", // 16:9 aspect ratio
          height: 0,
          overflow: "hidden",
          maxWidth: "100%",
          mb: 3,
        }}
      >
        <iframe
          src="https://drive.google.com/file/d/1alE6dDvkXPcpLyD29HHnNMVabhRXaEyY/preview"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
          allow="autoplay"
          title="breaktooth attack demo"
        />
      </Box>
    </SingleCardItem>
  );
};

export default WH1000XM5AuthVulnFix;
