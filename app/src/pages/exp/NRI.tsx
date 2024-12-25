import Divider from "@mui/material/Divider";
import {
  BulletPointsList,
  SecondaryText,
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";

const NRI = () => {
  return (
    <SingleCardItem>
      <Title
        title={"株式会社 野村総合研究所 (NRI)"}
        hyperLink="https://www.nri.com/jp"
      />
      <SubTitle title={"2024年1月15日 - 2024年1月19日 (インターンシップ)"} />
      <SecondaryText
        text={
          "配属：マルチクラウドインテグレーション事業本部・金融基盤サービス部・金融プロジェクトチーム"
        }
      />
      <BulletPointsList
        items={[
          "実運用されている決済サービスのアクセスログ解析ツールを構築",
          "環境はAWSで構築．",
        ]}
      />
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Title
        title={"Nomura Researh Institute (NRI)"}
        hyperLink="https://www.nri.com/en"
      />
      <SubTitle title={"01/15/2024 - 01/19/2024 (Internship)"} />
      <BulletPointsList
        items={[
          "Built an access log analysis tool for a payment service in actual operation.",
          "The construction environment was built on AWS.",
        ]}
      />
    </SingleCardItem>
  );
};

export default NRI;
