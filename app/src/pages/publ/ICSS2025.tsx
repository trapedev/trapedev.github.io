// import { Divider } from "@mui/material";
import {
  SecondaryText,
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";

const ICSS2025 = () => {
  return (
    <SingleCardItem>
      {/* <Title
        title={"Bluetooth省電力モードと認証の脆弱性を用いた中間者攻撃の検討"}
        hyperLink="https://ken.ieice.org/ken/paper/20250307Ic87/"
      />
      <SubTitle title={"2025年 情報通信システムセキュリティ研究会 (ICSS)"} />
      <SubTitle title={"木村圭一朗, 葛野弘樹, 白石善明, 森井昌克"} />
      <SecondaryText text="国内発表論文" />
      <SecondaryText text="信学技報, vol. 124, no. 422, ICSS2024-102, pp. 257-264" />
      <Divider sx={{ mt: 2, mb: 2 }} /> */}
      <Title
        title={
          "Study on Man-in-the-Middle Attacks Abusing Power-Saving Mode and Authentication Vulnerabilities in Bluetooth"
        }
        hyperLink="https://ken.ieice.org/ken/paper/20250307Ic87/"
      />
      <SubTitle
        title={"Information and Communication System Security (ICSS) 2025"}
      />
      <SubTitle
        title={
          "Keiichiro Kimura, Hiroki Kuzuno, Yoshiaki Shiraishi, and Masakatu Morii"
        }
      />
      <SecondaryText text="First Author" />
      <SecondaryText text="Non Peer-Reviewed Paper" />
      <SecondaryText text="IEICE Technical Report, vol. 124, no. 422, ICSS2024-102, pp. 257-264" />
    </SingleCardItem>
  );
};

export default ICSS2025;
