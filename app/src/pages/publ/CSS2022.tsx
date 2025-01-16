import { Divider } from "@mui/material";
import {
  SecondaryText,
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";

const CSS2022 = () => {
  return (
    <SingleCardItem>
      <Title
        title={
          "SSL/TLSを回避して盗聴/改ざんを可能にする中間者攻撃の実装 ～公衆無線LANの脆弱性とその脅威～"
        }
        hyperLink="https://cir.nii.ac.jp/crid/1050013087466839168"
      />
      <SubTitle title={"コンピュータセキュリティシンポジウム (CSS) 2022"} />
      <SubTitle
        title={"木村圭一朗, 白石善明, 森井昌克"}
      />
      <SecondaryText text="国内発表論文" />
      <SecondaryText text="pp.393-399, 2022-10-27" />
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Title
        title={
          "Implementation of Man-in-the-Middle Attacks that bypass SSL/TLS and allow eavesdropping/falsification: Public Wireless LAN Vulnerabilities and Threats"
        }
        hyperLink="https://cir.nii.ac.jp/crid/1050013087466839168"
      />
      <SubTitle title={"Computer Security Symposium (CSS) 2022"} />
      <SubTitle
        title={"Keiichiro Kimura, Yoshiaki Shiraishi, and Masakatu Morii"}
      />
      <SecondaryText text="Non Peer-Reviewed Paper" />
      <SecondaryText text="pp.393-399, 2022-10-27" />
    </SingleCardItem>
  );
};

export default CSS2022;