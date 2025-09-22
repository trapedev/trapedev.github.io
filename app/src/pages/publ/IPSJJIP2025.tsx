import {
  SecondaryText,
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";

const IPSJJIP2025 = () => {
  return (
    <SingleCardItem>
      <Title
        title={
          "Breaktooth: Breaking Security and Privacy in Bluetooth Power-Saving Mode"
        }
        hyperLink="https://www.jstage.jst.go.jp/article/ipsjjip/33/0/33_523/_article"
      />
      <SubTitle title={"Journal of Information Processing, Vol.33, (To be appeared in Sep. 2025)"} />
      <SubTitle
        title={
          "Keiichiro Kimura, Hiroki Kuzuno, Yoshiaki Shiraishi, and Masakatu Morii"
        }
      />
      <SecondaryText text="First Author" />
      <SecondaryText text="Peer-Reviewed Journal Paper" />
      <SecondaryText text="pp. 523-536, 2025-09-15" />
    </SingleCardItem>
  );
};

export default IPSJJIP2025;
