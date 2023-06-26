import Template from "components/views/template";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import { BaseContainer, BaseItem } from "components/views/ui";

const Experiences = () => {
  return (
    <Template name={"Experiences"}>
      <BaseContainer>
        <BaseItem xs={12}>
          <Card sx={{ maxWidth: "100%", mb: 4 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  08/2021 - Present &nbsp;&nbsp;&nbsp;&nbsp; Internship,
                  <a
                    href="https://www.ijyuku.clantable.com/clantable-corp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Clantable Co.
                  </a>
                </Typography>
                <ul className="list">
                  <li>
                    <Typography variant="body2" color="text.secondary">
                      Developing and operating cram schools business management
                      service named{" "}
                      <a
                        href="https://www.juksl.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        "ジュクスル"
                      </a>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2" color="text.secondary">
                      In charge of front-end (Next.js/TypeScript) and
                      back-end(Golang) development.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2" color="text.secondary">
                      Implemented the transition from monolithic to
                      microservices, as the service is extended.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2" color="text.secondary">
                      Increased processing speed by approximately 17% by
                      improving business logic algorithms.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2" color="text.secondary">
                      Implemented the function that generate and update some of
                      the code automatically to implementation operational
                      efficiency.
                    </Typography>
                  </li>
                </ul>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: "100%", mb: 4 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  08/2022 - 09/2022 &nbsp;&nbsp;&nbsp;&nbsp; Internship,{" "}
                  <a
                    href="https://www.canon-its.co.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Canon IT Solutions Inc.
                  </a>
                </Typography>
                <ul className="list">
                  <li>
                    <Typography variant="body2" color="text.secondary">
                      Analyzed malware and ransomware.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2" color="text.secondary">
                      Got the 1st score in CTF contest among the interns.
                    </Typography>
                  </li>
                </ul>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: "100%", mb: 4 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  11/2020 - 05/2021 &nbsp;&nbsp;&nbsp;&nbsp; Reserch Assistant,
                  Kobe University / Osaka Chamber of Commerce and Industory
                </Typography>
                <ul className="list">
                  <li>
                    <Typography variant="body2" color="text.secondary">
                      Developed e-learning system in PHP as a part of the
                      “サイバーセキュリティお助け隊サービス(Cyber Security Help
                      Team Service)” sponsored by the Osaka Chamber of Commerce
                      and Industry.
                    </Typography>
                  </li>
                </ul>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: "100%" }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  07/2020 - 03/2021 &nbsp;&nbsp;&nbsp;&nbsp; Reserch Assistant,
                  Kobe University / Tokushima Prefectual Police
                </Typography>
                <ul className="list">
                  <li>
                    <Typography variant="body2" color="text.secondary">
                      Developed game-style cyber security education application
                      named{" "}
                      <a
                        href="https://www.tcn.jp/news/detail/5/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        "す ご セ ク"
                      </a>{" "}
                      in JavaScript.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2" color="text.secondary">
                      Analyzed data of cyber security awareness from the
                      collected data using R language.
                    </Typography>
                  </li>
                </ul>
              </CardContent>
            </CardActionArea>
          </Card>
        </BaseItem>
      </BaseContainer>
    </Template>
  );
};

export default Experiences;
