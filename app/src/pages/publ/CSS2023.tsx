import { Divider } from "@mui/material";
import {
  SecondaryText,
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";

const CSS2023 = () => {
  return (
    <SingleCardItem>
      <Title
        title={
          "Bluetooth BR/EDRへの新たな攻撃手法とその実証 ～省エネモードの脆弱性とその脅威～"
        }
        hyperLink="https://cir.nii.ac.jp/crid/1050016494531112832"
      />
      <Title title={"コンピュータセキュリティシンポジウム (CSS) 2023"} />
      <SubTitle title={"木村圭一朗, 葛野弘樹, 白石善明, 森井昌克"} />
      <SecondaryText text="国内発表論文" />
      <SecondaryText text="pp.1136-1142, 2023-10-23" />
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Title
        title={
          "A New Attack Method on Bluetooth BR/EDR and Its Demonstration: Vulnerability of Power-Saving Mode and Its Threat"
        }
        hyperLink="https://cir.nii.ac.jp/crid/1050016494531112832"
      />
      <Title title={"Computer Security Symposium (CSS) 2023"} />
      <SubTitle
        title={
          "Keiichiro Kimura, Hiroki Kuzuno, Yoshiaki Shiraishi, and Masakatu Morii"
        }
      />
      <SecondaryText text="Non Peer-Reviewed Paper" />
      <SecondaryText text="pp.1136-1142, 2023-10-23" />
    </SingleCardItem>
  );
};

export default CSS2023;
