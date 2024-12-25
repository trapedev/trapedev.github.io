import {
  SecondaryText,
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";

const SCISISEC2023 = () => {
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

export default SCISISEC2023;
