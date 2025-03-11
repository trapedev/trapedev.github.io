// import Divider from "@mui/material/Divider";
import {
  BulletPointsList,
  // SecondaryText,
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";

const Sony = () => {
  return (
    <SingleCardItem>
      {/* <Title title={"ソニー株式会社"} hyperLink="https://www.sony.com/ja/" />
      <SubTitle title={"2023年8月28日 - 2023年9月8日 (インターンシップ)"} />
      <SecondaryText
        text={
          "配属：品質CSセンター セキュリティリスクマネジメント部 グループ製品セキュリティ課"
        }
      /> */}
      {/* <BulletPointsList
        items={[
          "ソニーのSDL（セキュリティ開発ライフサイクル），特に再発防止活動，リスクアセスメント，実践を通じたセキュリティテストについて学習．",
          "C言語でBluetooth BR/EDRのファジングツールを実装．libbluetooth-devライブラリを使用し，L2CAPを含む5つのプロトコルに対するファジングを実現．",
        ]}
      /> */}
      {/* <Divider sx={{ mt: 2, mb: 2 }} /> */}
      <Title title={"Sony"} hyperLink="https://www.sony.com/en/" />
      <SubTitle title={"08/28/2023 - 09/08/2023 (Internship)"} />
      <BulletPointsList
        items={[
          "Learned about Sony's SDL (Security Development Lifecycle). Specifically, I learned about recurrence prevention activities, risk assessment, and security testing through practice.",
          "Implemented a fuzzing tool for Bluetooth BR/EDR in C. Using libbluetooth-dev library, fuzzing for 5 protocols including L2CAP is enabled.",
        ]}
      />
    </SingleCardItem>
  );
};

export default Sony;
