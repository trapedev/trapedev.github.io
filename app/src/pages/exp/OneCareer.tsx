import Divider from "@mui/material/Divider";
import {
  BulletPointsList,
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";

const OneCareer = () => {
  return (
    <SingleCardItem>
      <Title
        title={"株式会社ワンキャリア"}
        hyperLink="https://onecareer.co.jp/"
      />
      <SubTitle title={"2023年7月22日 - 2023年7月23日 (インターンシップ)"} />
      <BulletPointsList
        items={[
          "alpコマンドを使ってNginxのアクセスログを解析",
          "Webのパフォーマンスチューニング（N+1問題の解決，SQLの最適化，システムコールの削減）を行い，処理速度を約20倍に改善．",
        ]}
      />
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Title title={"ONE CAREER Inc."} hyperLink="https://onecareer.co.jp/" />
      <SubTitle title={"07/22/2023 - 07/23/2023 (Internship)"} />
      <BulletPointsList
        items={[
          "Analyzed the Nginx access logs using alp command.",
          "Performed web performance tuning (solving the N+1 problem, optimizing SQL, and reducing the number of system calls) and managed to improve processing speed by approximately 20 times.",
        ]}
      />
    </SingleCardItem>
  );
};

export default OneCareer;
