import Template from "components/views/template";
import {
  BaseContainer,
  BaseItem,
  SecondaryText,
  SingleCardItem,
  Title,
} from "components/views/ui";

const Education = () => {
  return (
    <Template name={"Education"}>
      <BaseContainer>
        <BaseItem xs={12}>
          <First />
          <Second />
        </BaseItem>
      </BaseContainer>
    </Template>
  );
};

export default Education;

const First = () => {
  return (
    <SingleCardItem>
      <Title
        title={
          <>
            04/2023 - Present &nbsp;&nbsp;&nbsp;&nbsp; Kobe University | Master
          </>
        }
      />
      <SecondaryText data="Department of Electrical and Electronic Engineering, Graduate School of Engineering" />
    </SingleCardItem>
  );
};

const Second = () => {
  return (
    <SingleCardItem>
      <Title
        title={
          <>
            04/2019 - 03/2023 &nbsp;&nbsp;&nbsp;&nbsp; Kobe University |
            Bachelor
          </>
        }
      />
      <SecondaryText data="Department of Electrical and Electronic Engineering, Faculty of Engineering" />
    </SingleCardItem>
  );
};
