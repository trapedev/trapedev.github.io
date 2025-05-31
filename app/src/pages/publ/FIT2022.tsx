// import { Divider } from "@mui/material";
import {
  SecondaryText,
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";

const FIT2022 = () => {
  return (
    <SingleCardItem>
      {/* <Title
        title={
          "SSL/TLSを回避する中間者攻撃の新たな提案とその脅威 ～実装による評価と考察～"
        }
        hyperLink="https://jglobal.jst.go.jp/detail?JGLOBAL_ID=202202236004551288"
      />
      <SubTitle title={"FIT 情報科学技術フォーラム 2022"} />
      <SubTitle title={"木村圭一朗, 白石善明, 森井昌克"} />
      <SecondaryText text="国内発表論文" />
      <SecondaryText text="pp.33-40, 2022-08-30" />
      <Divider sx={{ mt: 2, mb: 2 }} /> */}
      <Title
        title={
          "New Proposals and Threats of Man-in-the-Middle Attacks to Evade SSL/TLS: Evaluation and Consideration by Implementation"
        }
        hyperLink="https://jglobal.jst.go.jp/detail?JGLOBAL_ID=202202236004551288"
      />
      <SubTitle title={"Forum on Information Technology (FIT) 2022"} />
      <SubTitle
        title={"Keiichiro Kimura, Yoshiaki Shiraishi, and Masakatu Morii"}
      />
      <SecondaryText text="First Author" />
      <SecondaryText text="Non Peer-Reviewed Paper" />
      <SecondaryText text="pp.33-40, 2022-08-30" />
    </SingleCardItem>
  );
};

export default FIT2022;
