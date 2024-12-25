import {
  SecondaryText,
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";

const IPSJJIP2024 = () => {
  return (
    <SingleCardItem>
      <Title
        title={
          "Man-in-the-Portal: Breaking SSL/TLS Silently Abusing Captive Portal"
        }
        hyperLink="https://www.ipsj.or.jp/english/jip/info/accept/sep.html"
      />
      <Title title={"Journal of Information Processing, Vol.32, (2024)"} />
      <SubTitle
        title={
          "Keiichiro Kimura, Hiroki Kuzuno, Yoshiaki Shiraishi, and Masakatu Morii"
        }
      />
      <SecondaryText text="Peer-Reviewed Journal Paper" />
      <SecondaryText text="To be appeared" />
    </SingleCardItem>
  );
};

export default IPSJJIP2024;
