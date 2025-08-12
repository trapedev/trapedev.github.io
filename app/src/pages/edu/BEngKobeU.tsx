import { SecondaryText, SingleCardItem, SubTitle, Title } from "components/views/ui";

const BEngKobeU = () => {
  return (
    <SingleCardItem>
      <Title
        title={"Kobe University | Bachelor"}
        hyperLink="https://www.kobe-u.ac.jp/en/"
      />
      <SubTitle title={"04/01/2019 - 03/31/2023"} />
      <SecondaryText text="Bachelor Thesis: Research on Development of a Maliciousness Assessment System for Darknet Using OSINT" />
      <SecondaryText text="Department of Electrical and Electronic Engineering, Faculty of Engineering" />
    </SingleCardItem>
  );
};

export default BEngKobeU;
