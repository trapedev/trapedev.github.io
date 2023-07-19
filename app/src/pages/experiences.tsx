import Template from "components/views/template";
import {
  BaseContainer,
  BaseItem,
  DoubleTitle,
  HyperLink,
  SecondaryText,
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";

const Experiences = () => {
  return (
    <Template name={"Experiences"}>
      <BaseContainer>
        <BaseItem xs={12}>
          <SingleCardItem>
            <Title
              title={"Clantable Co."}
              hyperLink="https://www.ijyuku.clantable.com/clantable-corp"
            />
            <SubTitle title={"08/2021 - Present (Internship)"} />
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
            <Title title={"Sony Corp."} hyperLink="https://www.sony.com/en/" />
            <SubTitle
              title={"08/2023 - 09/2023 (Internship) ... PLAN TO JOIN !"}
            />
          </SingleCardItem>
          <SingleCardItem>
            <Title
              title={"Money Forward Inc."}
              hyperLink="https://corp.moneyforward.com/en/"
            />
            <SubTitle
              title={"08/2023 - 08/2023 (Internship) ... PLAN TO JOIN !"}
            />
          </SingleCardItem>
          <SingleCardItem>
            <Title
              title={"Hewlett Packard Enterprise"}
              hyperLink="https://www.hpe.com/us/en/home.html"
            />
            <SubTitle title={"07/2023 (Internship) ... PLAN TO JOIN !"} />
          </SingleCardItem>
          <SingleCardItem>
            <Title
              title={"ONE CAREER Inc."}
              hyperLink="https://onecareer.co.jp/"
            />
            <SubTitle
              title={"07/2023 - 07/2023 (Internship) ... PLAN TO JOIN !"}
            />
          </SingleCardItem>
          <SingleCardItem>
            <Title
              title={"Canon IT Solutions Inc."}
              hyperLink="https://www.canon-its.co.jp/"
            />
            <SubTitle title={"08/2022 - 09/2022 (Internship)"} />
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
            <DoubleTitle
              title1={"Kobe University"}
              hyperLink1="http://www.eng.kobe-u.ac.jp/en/"
              title2={"Osaka Chamber of Commerce and Industory"}
              hyperLink2="https://www.osaka.cci.or.jp/e/"
            />
            <SubTitle title={"11/2020 - 05/2021 (Reserch Assistant)"} />
            <ul className="list">
              <li>
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
            <DoubleTitle
              title1={"Kobe University"}
              hyperLink1="http://www.eng.kobe-u.ac.jp/en/"
              title2={"Tokushima Prefectual Police"}
              hyperLink2="https://www.police.pref.tokushima.jp/"
            />
            <SubTitle title={"07/2020 - 03/2021 (Reserch Assistant)"} />
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
