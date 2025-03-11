// import { Divider } from "@mui/material";
import {
  SecondaryText,
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";

const ISEC2023 = () => {
  return (
    <SingleCardItem>
      {/* <Title
        title={
          "Bluetooth BR/EDRに対する省エネモードを利用した暗号鍵ハイジャック攻撃の提案"
        }
        hyperLink="https://ken.ieice.org/ken/paper/20231110nCyv/"
      />
      <SubTitle title={"情報セキュリティ研究会 (ISEC) 2023"} />
      <SubTitle title={"木村圭一朗, 葛野弘樹, 白石善明, 森井昌克"} />
      <SecondaryText text="国内発表論文（2023年 情報セキュリティ研究奨励賞 受賞論文）" />
      <SecondaryText text="pp.103-109, 2023-11-02" />
      <Divider sx={{ mt: 2, mb: 2 }} /> */}
      <Title
        title={
          "A Proposed Link Key Hijacking Attack Using the Power-Saving Mode against Bluetooth BR/EDR"
        }
        hyperLink="https://ken.ieice.org/ken/paper/20231110nCyv/"
      />
      <SubTitle title={"Information Security (ISEC) 2023"} />
      <SubTitle
        title={
          "Keiichiro Kimura, Hiroki Kuzuno, Yoshiaki Shiraishi, and Masakatu Morii"
        }
      />
      <SecondaryText text="Non Peer-Reviewed Paper (Award Paper)" />
      <SecondaryText text="pp.103-109, 2023-11-02" />
    </SingleCardItem>
  );
};

export default ISEC2023;
