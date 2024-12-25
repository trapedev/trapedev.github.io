import {
  SecondaryText,
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";

const TOEIC = () => {
  return (
    <SingleCardItem>
      <Title title={"TOEIC L&R Score:825"} />
      <SubTitle title={"02/2022"} />
      <SecondaryText text={"Listening : 420, Reading : 405"} />
    </SingleCardItem>
  );
};

export default TOEIC;
