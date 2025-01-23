import { Divider } from "@mui/material";
import {
  SecondaryText,
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";

const ICSS2025 = () => {
  return (
    <SingleCardItem>
      <Title
        title={"投稿予定"}
        //   hyperLink=""
      />
      <SubTitle title={"2025年 情報通信システムセキュリティ研究会 (ICSS)"} />
      <SubTitle title={"木村圭一朗, 葛野弘樹, 白石善明, 森井昌克"} />
      <SecondaryText text="国内発表論文" />
      {/* <SecondaryText text="登壇予定" /> */}
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Title
        title={"To be submitted"}
        // hyperLink=""
      />
      <SubTitle
        title={"Information and Communication System Security (ICSS) 2025"}
      />
      <SubTitle
        title={
          "Keiichiro Kimura, Hiroki Kuzuno, Yoshiaki Shiraishi, and Masakatu Morii"
        }
      />
      <SecondaryText text="Non Peer-Reviewed Paper" />
      {/* <SecondaryText text="To be appeared" /> */}
    </SingleCardItem>
  );
};

export default ICSS2025;
