import Template from "components/views/template";
import {
  BaseContainer,
  BaseItem,
  SecondaryText,
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";

const AcademicPaper = () => {
  return (
    <Template name={"Academic Paper"}>
      <BaseContainer>
        <BaseItem xs={12}>
          <First />
          <Second />
        </BaseItem>
      </BaseContainer>
    </Template>
  );
};

export default AcademicPaper;

const First = () => {
  return (
    <SingleCardItem>
      <Title
        title={
          "Implementation of Man-in-the-Middle Attacks that bypass SSL/TLS and allow eavesdropping/falsification ~ Public Wireless LAN Vulnerabilities and Threats ~"
        }
        hyperLink="https://www.iwsec.org/css/2022/program.html#2A4-I"
      />
      <Title title={"Computer Security Symposium 2022"} />
      <SubTitle
        title={"Keiichiro Kimura, Yoshiaki Shiraishi, Masakatu Morii"}
      />
      <SecondaryText data="pp.393-399, 2022-10-27" />
    </SingleCardItem>
  );
};

const Second = () => {
  return (
    <SingleCardItem>
      <Title
        title={
          "New Proposals and Threats of Man-in-the-Middle Attacks to Evade SSL/TLS ~ Evaluation and Consideration by Implementation ~"
        }
        hyperLink="https://onsite.gakkai-web.net/fit2022/abstract/data/html/program/l.html#s1k"
      />
      <Title title={"Forum on Information Technology 2022"} />
      <SubTitle
        title={"Keiichiro Kimura, Yoshiaki Shiraishi, Masakatu Morii"}
      />
      <SecondaryText data="pp.33-40, 2022-08-30" />
    </SingleCardItem>
  );
};
