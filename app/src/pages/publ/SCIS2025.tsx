import { Divider } from "@mui/material";
import {
  SecondaryText,
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";

const SCIS2025 = () => {
  return (
    <SingleCardItem>
      <Title
        title={"投稿予定"}
        // hyperLink="https://eprint.iacr.org/2024/900"
      />
      <Title title={"2025年 暗号と情報セキュリティシンポジウム（SCIS2025）"} />
      <SubTitle title={"木村圭一朗, 葛野弘樹, 白石善明, 森井昌克"} />
      <SecondaryText text="国内発表論文" />
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Title
        title={"In Preparation for Submission"}
        // hyperLink="https://eprint.iacr.org/2024/900"
      />
      <Title
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
    </SingleCardItem>
  );
};

export default SCIS2025;
