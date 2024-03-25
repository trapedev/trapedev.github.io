import Template from "components/views/template";
import {
  BaseContainer,
  BaseItem,
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
          </SingleCardItem>
          <SingleCardItem>
            <SubTitle title={"TypeScript"} />
          </SingleCardItem>
          <SingleCardItem>
            <SubTitle title={"JavaScript"} />
          </SingleCardItem>
          <SingleCardItem>
            <SubTitle title={"Python"} />
          </SingleCardItem>
          <SingleCardItem>
            <SubTitle title={"Java"} />
          </SingleCardItem>
        </BaseItem>
      </BaseContainer>
    </Template>
  );
};

export default Skills;
