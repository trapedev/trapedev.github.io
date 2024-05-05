import Template from "components/views/template";
import {
  BaseContainer,
  BaseItem,
  SecondaryText,
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";

const Accomplishments = () => {
  return (
    <Template name={"業績 | Accomplishments"}>
      <BaseContainer>
        <BaseItem xs={12}>
          <ISEC2023 />
          <CTF2023 />
          <TOEIC />
        </BaseItem>
      </BaseContainer>
    </Template>
  );
};

export default Accomplishments;

const TOEIC = () => {
  return (
    <SingleCardItem>
      <Title title={"TOEIC L&R Score:825"} />
      <SubTitle title={"02/2022"} />
      <SecondaryText text={"Listening : 420, Reading : 405"} />
    </SingleCardItem>
  );
};

const ISEC2023 = () => {
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
