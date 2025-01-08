import Divider from "@mui/material/Divider";
import {
  // BulletPointsList,
  DoubleTitle,
  SingleCardItem,
  SubTitle,
} from "components/views/ui";

const KobeU02 = () => {
  return (
    <SingleCardItem>
      <DoubleTitle
        title1={"神戸大学大学院工学研究科"}
        hyperLink1="http://www.eng.kobe-u.ac.jp/"
        title2={"大阪商工会議所"}
        hyperLink2="https://www.osaka.cci.or.jp/"
      />
      <SubTitle title={"2020年11月 - 2021年5月 (学生技術補佐)"} />
      {/* <BulletPointsList
        items={[
          "大阪商工会議所主催の「サイバーセキュリティお助け隊サービス」の一環として，PHPで学習システムを開発．",
        ]}
      /> */}
      <Divider sx={{ mt: 2, mb: 2 }} />
      <DoubleTitle
        title1={"Kobe University"}
        hyperLink1="http://www.eng.kobe-u.ac.jp/en/"
        title2={"Osaka Chamber of Commerce and Industry"}
        hyperLink2="https://www.osaka.cci.or.jp/e/"
      />
      <SubTitle title={"11/2020 - 05/2021 (Reserch Assistant)"} />
      {/* <BulletPointsList
        items={[
          "Developed e-learning system in PHP as a part of the “サイバーセキュリティお助け隊サービス(Cyber Security Help Team Service)” sponsored by the Osaka Chamber of Commerce and Industry.",
        ]}
      /> */}
    </SingleCardItem>
  );
};

export default KobeU02;
