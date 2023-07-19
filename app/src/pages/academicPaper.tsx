import { Typography } from "@mui/material";
import Template from "components/views/template";
import {
  BaseContainer,
  BaseItem,
  HyperLink,
  SecondaryText,
  SingleCardItem,
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
        }
      />
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ color: "white" }}
      >
        Computer Security Symposium 2022
      </Typography>
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        sx={{ color: "white" }}
      >
        Keiichiro Kimura, Yoshiaki Shiraishi, Masakatu Morii
      </Typography>
      <SecondaryText data="pp.393-399, 2022-10-27" />
    </SingleCardItem>
  );
};

const Second = () => {
  return (
    <SingleCardItem>
      <Title
        title={
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
        }
      />
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ color: "white" }}
      >
        Forum on Information Technology 2022
      </Typography>
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        sx={{ color: "white" }}
      >
        Keiichiro Kimura, Yoshiaki Shiraishi, Masakatu Morii
      </Typography>
      <SecondaryText data="pp.33-40, 2022-08-30" />
    </SingleCardItem>
  );
};
