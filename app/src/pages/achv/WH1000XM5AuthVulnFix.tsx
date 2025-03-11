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
          "2024年8月，WH-1000XM5のBluetooth認証プロセスに新たな脆弱性（CWE-287 related）が存在することを発見．HackerOneを通じてSonyへ報告．"
        }
      />
      <SecondaryText text={"2024年11月，Sonyは脆弱性を認めた．"} />
      <SecondaryText
        text={
          "2025年2月，v2.4.1としてパッチが適用されたファームウェアがリリース．"
        }
      />
      <SecondaryText text={"2025年3月，英語と日本語で謝辞が公開された．"} />
      <SecondaryText text={"本脆弱性は，我々が開発した攻撃ツール「Breaktooth」を用いて発見されたものである．"} />
      <SecondaryText text={"我々は，ICSS2025@沖縄にて本脆弱性の説明を含む学会発表を行った．"} />
      <SecondaryText text={"脆弱性の調査にご協力いただいた葛野弘樹 准教授，白石善明 教授，森井昌克 教授（情報通信研究室ES3）に感謝申し上げます．"} />
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
          paddingBottom: "20%", // 16:9 aspect ratio
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
    </SingleCardItem>
  );
};

export default WH1000XM5AuthVulnFix;
