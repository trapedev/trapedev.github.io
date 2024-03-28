import Template from "components/views/template";
import {
  BaseContainer,
  BaseItem,
  BulletPointsList,
  DoubleTitle,
  HyperLink,
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
            <BulletPointsList
              items={[
                <>
                  Developing and operating cram schools business management
                  service named{" "}
                  <HyperLink
                    url="https://www.juksl.com/"
                    data={"`ジュクスル`"}
                  />
                </>,
                "In charge of front-end (Next.js/TypeScript) and back-end(Golang) development.",
                "Implemented the transition from monolithic to microservices, as the service is extended.",
                "Increased processing speed by approximately 17% by improving business logic algorithms.",
                "Implemented the function that generate and update some of the code automatically to implementation operational efficiency.",
              ]}
            />
          </SingleCardItem>
          <SingleCardItem>
            <Title
              title={"Nomura Researh Institute (NRI)"}
              hyperLink="https://www.nri.com/en"
            />
            <SubTitle title={"01/15/2024 - 01/19/2024 (Internship)"} />
            <BulletPointsList
              items={[
                "Built an access log analysis tool for a payment service in actual operation.",
                "The construction environment was built on AWS, allowing the participants to experience the actual business use of public cloud computing.",
              ]}
            />
          </SingleCardItem>
          <SingleCardItem>
            <Title title={"Sony"} hyperLink="https://www.sony.com/en/" />
            <SubTitle title={"08/28/2023 - 09/08/2023 (Internship)"} />
            <BulletPointsList
              items={[
                "Learned about Sony's SDL (Security Development Lifecycle). Specifically, I learned about recurrence prevention activities, risk assessment, and security testing through practice.",
                "Implemented a fuzzing tool for Bluetooth BR/EDR in C. Using libbluetooth-dev library, fuzzing for 5 protocols including L2CAP is enabled.",
              ]}
            />
          </SingleCardItem>
          <SingleCardItem>
            <Title
              title={"Money Forward Inc."}
              hyperLink="https://corp.moneyforward.com/en/"
            />
            <SubTitle title={"08/01/2023 - 08/16/2023 (Internship)"} />
            <BulletPointsList
              items={[
                "Implemented a receipt parser for a mail order service that is actually in operation in Golang.",
                "Created the k8s manifest using Kustomize, and deployed and released the implemented service to the production environment.",
              ]}
            />
          </SingleCardItem>
          <SingleCardItem>
            <Title
              title={"ONE CAREER Inc."}
              hyperLink="https://onecareer.co.jp/"
            />
            <SubTitle title={"07/22/2023 - 07/23/2023 (Internship)"} />
            <BulletPointsList
              items={[
                "Analyzed the Nginx access logs using the alp command.",
                "Performed web performance tuning (solving the N+1 problem, optimizing SQL, reducing the number of system calls) and managed to improve processing speed by approximately 20 times.",
              ]}
            />
          </SingleCardItem>
          <SingleCardItem>
            <Title
              title={"Canon IT Solutions Inc."}
              hyperLink="https://www.canon-its.co.jp/"
            />
            <SubTitle title={"08/29/2022 - 09/02/2022 (Internship)"} />
            <BulletPointsList
              items={[
                "Analyzed malware and ransomware.",
                "Got the 1st score in CTF contest among the interns.",
              ]}
            />
          </SingleCardItem>
          <SingleCardItem>
            <DoubleTitle
              title1={"Kobe University"}
              hyperLink1="http://www.eng.kobe-u.ac.jp/en/"
              title2={"Osaka Chamber of Commerce and Industry"}
              hyperLink2="https://www.osaka.cci.or.jp/e/"
            />
            <SubTitle title={"11/2020 - 05/2021 (Reserch Assistant)"} />
            <BulletPointsList
              items={[
                "Developed e-learning system in PHP as a part of the “サイバーセキュリティお助け隊サービス(Cyber Security Help Team Service)” sponsored by the Osaka Chamber of Commerce and Industry.",
              ]}
            />
          </SingleCardItem>
          <SingleCardItem>
            <DoubleTitle
              title1={"Kobe University"}
              hyperLink1="http://www.eng.kobe-u.ac.jp/en/"
              title2={"Tokushima Prefectual Police"}
              hyperLink2="https://www.police.pref.tokushima.jp/"
            />
            <SubTitle title={"07/2020 - 03/2021 (Reserch Assistant)"} />
            <BulletPointsList
              items={[
                <>
                  Developed game-style cyber security education application
                  named{" "}
                  <HyperLink
                    url="https://www.tcn.jp/news/detail/5/"
                    data={"`すごセク`"}
                  />{" "}
                  in JavaScript.
                </>,
                "Analyzed data of cyber security awareness from the collected data using R language.",
              ]}
            />
          </SingleCardItem>
        </BaseItem>
      </BaseContainer>
    </Template>
  );
};

export default Experiences;
