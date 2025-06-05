// import Divider from "@mui/material/Divider";
import {
  BulletPointsList,
  SecondaryText,
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";

const MF = () => {
  return (
    <SingleCardItem>
      {/* <Title
        title={"株式会社マネーフォワード"}
        hyperLink="https://corp.moneyforward.com/"
      />
      <SubTitle title={"2023年8月1日 - 2023年8月16日 (インターンシップ)"} />
      <SecondaryText
        text={"配属：CTO室 基盤アプリケーション部 マイクロサービスグループ"}
      /> */}
      {/* <BulletPointsList
        items={[
          "実運用されているメールオーダーサービスの領収書パーサーをGolangで実装．",
          "Kustomizeを使ってk8sマニフェストを作成し，サービスを本番環境にデプロイ＆リリース．",
        ]}
      /> */}
      {/* <Divider sx={{ mt: 2, mb: 2 }} /> */}
      <Title
        title={"Money Forward Inc."}
        hyperLink="https://corp.moneyforward.com/en/"
      />
      <SubTitle title={"08/01/2023 - 08/16/2023 (Internship)"} />
      <SecondaryText text="Software Engineer" />
      {/* <BulletPointsList
        items={[
          "Implemented a receipt parser for mail order services that are actually in operation in Golang.",
          "Created k8s manifests using Kustomize, and deployed and released the services to the production environment.",
        ]}
      /> */}
    </SingleCardItem>
  );
};

export default MF;
