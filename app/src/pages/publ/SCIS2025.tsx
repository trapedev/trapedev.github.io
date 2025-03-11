// import { Divider } from "@mui/material";
import {
  SecondaryText,
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";

const SCIS2025 = () => {
  return (
    <SingleCardItem>
      {/* <Title
        title={"Bluetooth省電力モードを用いた音声盗聴攻撃と防御"}
        hyperLink="https://www.iwsec.org/scis/2025/program.html#4F1"
      />
      <SubTitle title={"2025年 暗号と情報セキュリティシンポジウム (SCIS)"} />
      <SubTitle title={"木村圭一朗, 葛野弘樹, 白石善明, 森井昌克"} />
      <SecondaryText text="国内発表論文" />
      <SecondaryText text="pp.1-8, 2025-01-21" />
      <Divider sx={{ mt: 2, mb: 2 }} /> */}
      <Title
        title={
          "Audio Eavesdropping through Bluetooth Power-Saving Mode and Defenses"
        }
        hyperLink="https://www.iwsec.org/scis/2025/program.html#4F1"
      />
      <SubTitle
        title={
          "The 42nd Symposium on Cryptography and Information Security (SCIS) 2025"
        }
      />
      <SubTitle
        title={
          "Keiichiro Kimura, Hiroki Kuzuno, Yoshiaki Shiraishi, and Masakatu Morii"
        }
      />
      <SecondaryText text="Non Peer-Reviewed Paper" />
      <SecondaryText text="pp.1-8, 2025-01-21" />
    </SingleCardItem>
  );
};

export default SCIS2025;
