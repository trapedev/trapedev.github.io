// import Divider from "@mui/material/Divider";
import {
  BulletPointsList,
  DoubleTitle,
  HyperLink,
  SecondaryText,
  SingleCardItem,
  SubTitle,
} from "components/views/ui";

const KobeU01 = () => {
  return (
    <SingleCardItem>
      {/* <DoubleTitle
        title1={"神戸大学大学院工学研究科"}
        hyperLink1="http://www.eng.kobe-u.ac.jp/"
        title2={"徳島県警"}
        hyperLink2="https://www.police.pref.tokushima.jp/"
      />
      <SubTitle title={"2020年7月 - 2021年3月 (学生技術補佐)"} />
      <SecondaryText
        text="プロダクト"
        hyperLink="https://www.tcn.jp/news/detail/5/"
      /> */}
      {/* <BulletPointsList
        items={[
          <>
            JavaScriptで{" "}
            <HyperLink
              url="https://www.tcn.jp/news/detail/5/"
              data={"`すごセク`"}
            />{" "}
            と命名されたゲーム形式のサイバーセキュリティ教育アプリケーションを開発．
          </>,
          "R言語を用いて，収集したデータからサイバーセキュリティの意識データを分析．",
        ]}
      /> */}
      {/* <Divider sx={{ mt: 2, mb: 2 }} /> */}
      <DoubleTitle
        title1={"Kobe University"}
        hyperLink1="http://www.eng.kobe-u.ac.jp/en/"
        title2={"Tokushima Prefectual Police"}
        hyperLink2="https://www.police.pref.tokushima.jp/"
      />
      <SubTitle title={"07/2020 - 03/2021 (Reserch Assistant)"} />
      <SecondaryText
        text="Services"
        hyperLink="https://www.tcn.jp/news/detail/5/"
      />
      {/* <BulletPointsList
        items={[
          <>
            Developed game-style cyber security education application named{" "}
            <HyperLink
              url="https://www.tcn.jp/news/detail/5/"
              data={"`SUGOSEKU`"}
            />{" "}
            in JavaScript.
          </>,
          "Analyzed data of cyber security awareness from the collected data using R language.",
        ]}
      /> */}
    </SingleCardItem>
  );
};

export default KobeU01;
