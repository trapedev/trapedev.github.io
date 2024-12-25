import Divider from "@mui/material/Divider";
import {
  BulletPointsList,
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";

const CanonITS = () => {
  return (
    <SingleCardItem>
      <Title
        title={"キヤノン IT ソリューションズ"}
        hyperLink="https://www.canon-its.co.jp/"
      />
      <SubTitle title={"2022月8月29日 - 2022年9月2日 (インターンシップ)"} />
      <BulletPointsList
        items={[
          "実際に観測されたマルウェアおよびランサムウェアを解析．",
          "インターン生内のCTFで優勝．",
        ]}
      />
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Title
        title={"Canon IT Solutions Inc."}
        hyperLink="https://www.canon-its.co.jp/"
      />
      <SubTitle title={"08/29/2022 - 09/02/2022 (Internship)"} />
      <BulletPointsList
        items={[
          "Analyzed malware and ransomware.",
          "Got the 1st score in CTF contest among the interns.",
        ]}
      />
    </SingleCardItem>
  );
};

export default CanonITS;
