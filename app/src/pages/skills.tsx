import Template from "components/views/template";
import {
  BaseContainer,
  BaseItem,
  SecondaryText,
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";

const Skills = () => {
  return (
    <Template name={"Skills"}>
      <BaseContainer>
        <BaseItem xs={12}>
          <Title title="Coding Lang." />
          <SingleCardItem>
            <SubTitle title={"Golang"} />
            <SecondaryText data="2 years ~ 3 years" />
          </SingleCardItem>
          <SingleCardItem>
            <SubTitle title={"TypeScript"} />
            <SecondaryText data="1 years ~ 2 years" />
          </SingleCardItem>
          <SingleCardItem>
            <SubTitle title={"JavaScript"} />
            <SecondaryText data="1 years ~ 2 years" />
          </SingleCardItem>
          <SingleCardItem>
            <SubTitle title={"Python"} />
            <SecondaryText data="6 months ~ 1 year" />
          </SingleCardItem>
          <SingleCardItem>
            <SubTitle title={"Java"} />
            <SecondaryText data="6 months ~ 1 year" />
          </SingleCardItem>
        </BaseItem>
      </BaseContainer>
    </Template>
  );
};

export default Skills;
