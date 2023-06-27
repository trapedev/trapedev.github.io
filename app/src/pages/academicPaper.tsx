import Template from "components/views/template";
import Typography from "@mui/material/Typography";
import {
  BaseContainer,
  BaseItem,
  HyperLink,
  SecondaryText,
  SingleCardItem,
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
      <Typography gutterBottom variant="h5" component="div">
        <HyperLink
          url={"https://www.iwsec.org/css/2022/program.html#2A4-I"}
          data={
            <>
              {
                "Implementation of Man-in-the-Middle Attacks that bypass SSL/TLS and allow eavesdropping/falsification ~ Public Wireless LAN Vulnerabilities and Threats ~"
              }
            </>
          }
        />
      </Typography>
      <SecondaryText
        text={"Keiichiro Kimura, Yoshiaki Shiraishi, Masakatu Morii"}
      />
      <SecondaryText
        text={"Computer Security Symposium 2022,pp.393-399, 2022-10-27"}
      />
    </SingleCardItem>
  );
};

const Second = () => {
  return (
    <SingleCardItem>
      <Typography gutterBottom variant="h5" component="div">
        <HyperLink
          url={
            "https://onsite.gakkai-web.net/fit2022/abstract/data/html/program/l.html#s1k"
          }
          data={
            <>
              {
                "New Proposals and Threats of Man-in-the-Middle Attacks to Evade SSL/TLS ~ Evaluation and Consideration by Implementation ~"
              }
            </>
          }
        />
      </Typography>
      <SecondaryText
        text={"Keiichiro Kimura, Yoshiaki Shiraishi, Masakatu Morii"}
      />
      <SecondaryText
        text={"Forum on Information Technology 2022, pp.33-40, 2022-08-30"}
      />
    </SingleCardItem>
  );
};
