import {
  SecondaryText,
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";

const CANDAR2023 = () => {
  return (
    <SingleCardItem>
      <Title
        title={
          "A New Approach to Disabling SSL/TLS: Man-in-the-Middle Attacks are still Effective"
        }
        hyperLink="https://ieeexplore.ieee.org/document/10406178"
      />
      <Title
        title={
          "The Eleventh International Symposium on Computing and Networking (CANDAR) 2023"
        }
      />
      <SubTitle
        title={"Keiichiro Kimura, Yoshiaki Shiraishi, and Masakatu Morii"}
      />
      <SecondaryText text="Peer-Reviewed International Conference Paper" />
      <SecondaryText text="pp.11-19, 2023-11-28" />
    </SingleCardItem>
  );
};

export default CANDAR2023;
