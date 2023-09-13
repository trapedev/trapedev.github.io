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
          <CSS2023 />
          <CSS2022 />
          <FIT2022 />
        </BaseItem>
      </BaseContainer>
    </Template>
  );
};

export default AcademicPaper;

const CSS2022 = () => {
  return (
    <SingleCardItem>
      <Title
        title={
          "Implementation of Man-in-the-Middle Attacks that bypass SSL/TLS and allow eavesdropping/falsification: Public Wireless LAN Vulnerabilities and Threats"
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

const FIT2022 = () => {
  return (
    <SingleCardItem>
      <Title
        title={
          "New Proposals and Threats of Man-in-the-Middle Attacks to Evade SSL/TLS: Evaluation and Consideration by Implementation"
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

const CSS2023 = () => {
  return (
    <SingleCardItem>
      <Title
        title={
          "A New Attack Method on Bluetooth BR/EDR and Its Demonstration: Vulnerability of Power-Saving Mode and Its Threat"
        }
        hyperLink="https://www.iwsec.org/css/2023/program.html#3E3"
      />
      <Title title={"Computer Security Symposium 2023"} />
      <SubTitle
        title={"Keiichiro Kimura, Hiroki Kuzuno, Yoshiaki Shiraishi, Masakatu Morii"}
      />
      {/* <SecondaryText data="pp.33-40, 2022-08-30" /> */}
    </SingleCardItem>
  );
};
