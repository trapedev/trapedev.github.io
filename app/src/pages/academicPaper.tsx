import Template from "components/views/template";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import { BaseContainer, BaseItem } from "components/views/ui";

const AcademicPaper = () => {
  return (
    <Template name={"Academic Paper"}>
      <BaseContainer>
        <BaseItem xs={12}>
          <Card sx={{ maxWidth: "100%", mb: 4 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <a
                    href="https://www.iwsec.org/css/2022/program.html#2A4-I"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Implementation of Man-in-the-Middle Attacks that bypass
                    SSL/TLS and allow eavesdropping/falsification ~ Public
                    Wireless LAN Vulnerabilities and Threats ~
                  </a>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Keiichiro Kimura, Yoshiaki Shiraishi, Masakatu Morii
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Computer Security Symposium 2022,pp.393-399, 2022-10-27
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: "100%" }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <a
                    href="https://onsite.gakkai-web.net/fit2022/abstract/data/html/program/l.html#s1k"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    New Proposals and Threats of Man-in-the-Middle Attacks to
                    Evade SSL/TLS ~ Evaluation and Consideration by
                    Implementation ~
                  </a>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Keiichiro Kimura, Yoshiaki Shiraishi, Masakatu Morii
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Forum on Information Technology 2022, pp.33-40, 2022-08-30
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </BaseItem>
      </BaseContainer>
    </Template>
  );
};

export default AcademicPaper;
