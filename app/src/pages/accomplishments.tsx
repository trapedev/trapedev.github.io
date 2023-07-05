import Template from "components/views/template";
import {
  BaseContainer,
  BaseItem,
  SecondaryText,
  SingleCardItem,
  Title,
} from "components/views/ui";

const Accomplishments = () => {
  return (
    <Template name={"Accomplishments"}>
      <BaseContainer>
        <BaseItem xs={12}>
          <First />
        </BaseItem>
      </BaseContainer>
    </Template>
  );
};

export default Accomplishments;

const First = () => {
  return (
    <SingleCardItem>
      <Title
        title={<>02/2022 &nbsp;&nbsp;&nbsp;&nbsp; TOEIC L&R Score:825</>}
      />
      <SecondaryText data={"Listening : 420, Reading : 405"} />
    </SingleCardItem>
  );
};
