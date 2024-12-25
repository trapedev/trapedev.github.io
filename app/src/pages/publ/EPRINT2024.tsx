import {
  SecondaryText,
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";

const EPRINT2024 = () => {
  return (
    <SingleCardItem>
      <Title
        title={
          "Breaktooth: Breaking Bluetooth Sessions Abusing Power-Saving Mode"
        }
        hyperLink="https://eprint.iacr.org/2024/900"
      />
      <Title title={"Cryptology ePrint Archive"} />
      <SubTitle
        title={
          "Keiichiro Kimura, Hiroki Kuzuno, Yoshiaki Shiraishi, and Masakatu Morii"
        }
      />
      <SecondaryText text="Preprint Paper" />
      <SecondaryText text="2024-06-06" />
    </SingleCardItem>
  );
};

export default EPRINT2024;
