import {
  SecondaryText,
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";

export const TOEIC = () => {
  return (
    <SingleCardItem>
      <Title title={"TOEIC L&R Score:825"} />
      <SubTitle title={"02/2022"} />
      <SecondaryText text={"Listening : 420, Reading : 405"} />
    </SingleCardItem>
  );
};

export const IPSJCSEC2024 = () => {
  return (
    <SingleCardItem>
      <Title
        title={"第106回CSEC研究会 CSEC優秀研究賞 受賞"}
        hyperLink="https://www.ipsj.or.jp/award/csec-award.html"
      />
      <SubTitle title={"09/2024"} />
    </SingleCardItem>
  );
};

export const SCISISEC2023 = () => {
  return (
    <SingleCardItem>
      <Title
        title={"2023年度 情報セキュリティ研究奨励賞 受賞"}
        hyperLink="https://www.ieice.org/~isec/award-encouragement.html"
      />
      <SubTitle title={"12/2023"} />
      <SecondaryText text={"SCIS 2024@Nagasaki にて表彰"} />
    </SingleCardItem>
  );
};

export const CTF2023 = () => {
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
