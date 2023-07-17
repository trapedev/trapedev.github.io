import Template from "components/views/template";
import Typography from "@mui/material/Typography";
import {
  BaseContainer,
  BaseItem,
  HyperLink,
  SecondaryText,
  SingleCardItem,
} from "components/views/ui";

const Experiences = () => {
  return (
    <Template name={"Experiences"}>
      <BaseContainer>
        <BaseItem xs={12}>
          <SingleCardItem>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "white" }}
            >
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
                <SecondaryText
                  data={
                    <>
                      Developing and operating cram schools business management
                      service named{" "}
                      <HyperLink
                        url="https://www.juksl.com/"
                        data={"`ジュクスル`"}
                      />
                    </>
                  }
                />
              </li>
              <li>
                <SecondaryText data="In charge of front-end (Next.js/TypeScript) and back-end(Golang) development." />
              </li>
              <li>
                <SecondaryText data="Implemented the transition from monolithic to microservices, as the service is extended." />
              </li>
              <li>
                <SecondaryText data="Increased processing speed by approximately 17% by improving business logic algorithms." />
              </li>
              <li>
                <SecondaryText data="Implemented the function that generate and update some of the code automatically to implementation operational efficiency." />
              </li>
            </ul>
          </SingleCardItem>
          <SingleCardItem>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "white" }}
            >
              08/2023 - 09/2023 (2 weeks) &nbsp;&nbsp;&nbsp;&nbsp; Internship,{" "}
              <a
                href="https://www.sony.com/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sony Corp.
              </a>{" "}
              (PLAN TO JOIN !)
            </Typography>
          </SingleCardItem>
          <SingleCardItem>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "white" }}
            >
              08/2023 - 08/2023 (2 weeks) &nbsp;&nbsp;&nbsp;&nbsp; Internship,{" "}
              <a
                href="https://corp.moneyforward.com/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Money Forward Inc.
              </a>{" "}
              (PLAN TO JOIN !)
            </Typography>
          </SingleCardItem>
          <SingleCardItem>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "white" }}
            >
              07/2023 (1 day) &nbsp;&nbsp;&nbsp;&nbsp; Internship,{" "}
              <a
                href="https://www.hpe.com/us/en/home.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hewlett Packard Enterprise
              </a>{" "}
              (PLAN TO JOIN !)
            </Typography>
          </SingleCardItem>
          <SingleCardItem>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "white" }}
            >
              08/2022 - 09/2022 (5 days) &nbsp;&nbsp;&nbsp;&nbsp; Internship,{" "}
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
                <SecondaryText data="Analyzed malware and ransomware." />
              </li>
              <li>
                <SecondaryText data="Got the 1st score in CTF contest among the interns." />
              </li>
            </ul>
          </SingleCardItem>
          <SingleCardItem>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "white" }}
            >
              11/2020 - 05/2021 &nbsp;&nbsp;&nbsp;&nbsp; Reserch Assistant, Kobe
              University / Osaka Chamber of Commerce and Industory
            </Typography>
            <ul className="list">
              <li>
                <Typography variant="body2" color="text.secondary"></Typography>
                <SecondaryText
                  data="Developed e-learning system in PHP as a part of the
                  “サイバーセキュリティお助け隊サービス(Cyber Security Help Team
                  Service)” sponsored by the Osaka Chamber of Commerce and
                  Industry."
                />
              </li>
            </ul>
          </SingleCardItem>
          <SingleCardItem>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "white" }}
            >
              07/2020 - 03/2021 &nbsp;&nbsp;&nbsp;&nbsp; Reserch Assistant, Kobe
              University / Tokushima Prefectual Police
            </Typography>
            <ul className="list">
              <li>
                <SecondaryText
                  data={
                    <>
                      Developed game-style cyber security education application
                      named{" "}
                      <HyperLink
                        url="https://www.tcn.jp/news/detail/5/"
                        data={"`すごセク`"}
                      />{" "}
                      in JavaScript.
                    </>
                  }
                />
              </li>
              <li>
                <SecondaryText data="Analyzed data of cyber security awareness from the collected data using R language." />
              </li>
            </ul>
          </SingleCardItem>
        </BaseItem>
      </BaseContainer>
    </Template>
  );
};

export default Experiences;
