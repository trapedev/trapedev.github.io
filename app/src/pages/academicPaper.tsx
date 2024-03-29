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
          <CANDAR2023 />
          <ISEC2023 />
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
        hyperLink="https://cir.nii.ac.jp/crid/1050013087466839168"
      />
      <Title title={"Computer Security Symposium (CSS) 2022"} />
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
        hyperLink="https://jglobal.jst.go.jp/detail?JGLOBAL_ID=202202236004551288"
      />
      <Title title={"Forum on Information Technology (FIT) 2022"} />
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
        hyperLink="https://cir.nii.ac.jp/crid/1050016494531112832"
      />
      <Title title={"Computer Security Symposium (CSS) 2023"} />
      <SubTitle
        title={
          "Keiichiro Kimura, Hiroki Kuzuno, Yoshiaki Shiraishi, Masakatu Morii"
        }
      />
      <SecondaryText data="pp.1136-1142, 2023-10-23" />
    </SingleCardItem>
  );
};

const ISEC2023 = () => {
  return (
    <SingleCardItem>
      <Title
        title={
          "A Proposed Link Key Hijacking Attack Using the Power-Saving Mode against Bluetooth BR/EDR"
        }
        hyperLink="https://ken.ieice.org/ken/paper/20231110nCyv/"
      />
      <Title title={"Information Security (ISEC) 2023"} />
      <SubTitle
        title={
          "Keiichiro Kimura, Hiroki Kuzuno, Yoshiaki Shiraishi, Masakatu Morii"
        }
      />
      <SecondaryText data="pp.103-109, 2023-11-02" />
    </SingleCardItem>
  );
};

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
        title={"Keiichiro Kimura, Yoshiaki Shiraishi, Masakatu Morii"}
      />
      <SecondaryText data="Peer-reviewed international conference" />
      <SecondaryText data="pp.11-19, 2023-11-28" />
    </SingleCardItem>
  );
};
