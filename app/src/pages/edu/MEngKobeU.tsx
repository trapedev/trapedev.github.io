import { SecondaryText, SingleCardItem, SubTitle, Title } from "components/views/ui";

const MEngKobeU = () => {
  return (
    <SingleCardItem>
      <Title
        title={"Kobe University | Master"}
        hyperLink="https://www.kobe-u.ac.jp/en/"
      />
      <SubTitle title={"04/01/2023 - 03/31/2025"} />
      <SecondaryText text="Master Thesis: Security Assessments and Defenses for Communication Systems" />
      <SecondaryText text="Department of Electrical and Electronic Engineering, Graduate School of Engineering" />
    </SingleCardItem>
  );
};

export default MEngKobeU;
