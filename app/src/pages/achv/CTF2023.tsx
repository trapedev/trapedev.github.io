import { SingleCardItem, SubTitle, Title } from "components/views/ui";

const CTF2023 = () => {
  return (
    <SingleCardItem>
      <Title
        title={
          "CTF優勝：総務省 西日本横断サイバーセキュリティ・グランプリ@徳島会場"
        }
        hyperLink="https://www.soumu.go.jp/soutsu/kinki/topics/01sotsu07_01002069.html"
      />
      <SubTitle title={"06/2023"} />
    </SingleCardItem>
  );
};

export default CTF2023;
