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
    <Template name={"Accomplishments"}>
      <BaseContainer>
        <BaseItem xs={12}>
          <ISEC2023 />
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
      <SecondaryText data={"Listening : 420, Reading : 405"} />
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
      <SecondaryText data={"SCIS 2024@Nagasaki にて表彰予定"} />
    </SingleCardItem>
  );
};
