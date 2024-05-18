import React, { useState, useEffect } from "react";
import Template from "components/views/template";
import Typography from "@mui/material/Typography";
import {
  BaseContainer,
  BaseItem,
  BulletPointsList,
  DoubleTitle,
  HyperLink,
  SecondaryText,
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";
import { Divider, Grid, styled } from "@mui/material";
import { Bachelor, Master } from "./education";
import {
  CANDAR2023,
  CSS2022,
  CSS2023,
  FIT2022,
  ISEC2023,
} from "./academicPaper";
import { CTF2023, SCISISEC2023, TOEIC } from "./accomplishments";

const Home = () => {
  const [imageSize, setImageSize] = useState(window.innerWidth * 0.2);

  const handleResize = () => {
    setImageSize(window.innerWidth * 0.2);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const StyledImage = styled("img")({
    borderRadius: "50%",
    height: imageSize,
    width: imageSize,
    objectFit: "cover",
  });

  return (
    <Template name={"Keiichiro KIMURA"}>
      <BaseContainer id="whoami">
        <BaseItem xs={12}>
          <Grid container>
            <Grid item sm={12} md={8}>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                sx={{ color: "white" }}
              >
                $ whoami
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ color: "lightgray" }}
              >
                Hi, there! My name is Keiichiro KIMURA, a second-year master's
                student in the Graduate School of Engineering, Kobe University.
                My research theme is the study of vulnerabilities in wireless
                communication, such as HTTPS and Bluetooth.
              </Typography>
            </Grid>
            <Grid
              item
              sm={12}
              md={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <StyledImage src={"/bio.jpg"} alt={`biography`} loading="lazy" />
            </Grid>
          </Grid>
        </BaseItem>
      </BaseContainer>

      {/* 学歴 */}
      <BaseContainer id="education">
        <BaseItem xs={12}>
          <Title title="学歴 | Education" />
          <Master />
          <Bachelor />
        </BaseItem>
      </BaseContainer>

      {/* 職歴 */}
      <BaseContainer id="experience">
        <BaseItem xs={12}>
          <Title title="職歴 | Experience" />
          <SingleCardItem>
            <Title
              title={"クランテーブル株式会社"}
              hyperLink="https://www.ijyuku.clantable.com/clantable-corp"
            />
            <SubTitle title={"2021年8月 - 現在 (インターンシップ)"} />
            <BulletPointsList
              items={[
                <>
                  塾の業務管理をサポートするクラウドサービス
                  <HyperLink
                    url="https://www.juksl.com/"
                    data={"`ジュクスル`"}
                  />
                  の開発及び運用．
                </>,
                "フロントエンド（Next.js/TypeScript）とバックエンド（Golang）の開発を担当．",
                "サービスの拡張に伴い，モノリスからマイクロサービスへ移行．",
                "ビジネスロジックのアルゴリズムを改善し，処理速度を約17%向上．",
                "運用効率化のため，一部のコードを自動生成・更新する機能を実装．",
              ]}
            />
            <Divider sx={{ mt: 2, mb: 2 }} />
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
              title={"株式会社 野村総合研究所 (NRI)"}
              hyperLink="https://www.nri.com/jp"
            />
            <SubTitle
              title={"2024年1月15日 - 2024年1月19日 (インターンシップ)"}
            />
            <SecondaryText
              text={
                "配属：マルチクラウドインテグレーション事業本部・金融基盤サービス部・金融プロジェクトチーム"
              }
            />
            <BulletPointsList
              items={[
                "実運用されている決済サービスのアクセスログ解析ツールを構築",
                "環境はAWSで構築．",
              ]}
            />
            <Divider sx={{ mt: 2, mb: 2 }} />
            <Title
              title={"Nomura Researh Institute (NRI)"}
              hyperLink="https://www.nri.com/en"
            />
            <SubTitle title={"01/15/2024 - 01/19/2024 (Internship)"} />
            <BulletPointsList
              items={[
                "Built an access log analysis tool for a payment service in actual operation.",
                "The construction environment was built on AWS.",
              ]}
            />
          </SingleCardItem>
          <SingleCardItem>
            <Title
              title={"ソニー株式会社"}
              hyperLink="https://www.sony.com/ja/"
            />
            <SubTitle
              title={"2023年8月28日 - 2023年9月8日 (インターンシップ)"}
            />
            <SecondaryText
              text={
                "配属：品質CSセンター セキュリティリスクマネジメント部 グループ製品セキュリティ課"
              }
            />
            <BulletPointsList
              items={[
                "ソニーのSDL（セキュリティ開発ライフサイクル），特に再発防止活動，リスクアセスメント，実践を通じたセキュリティテストについて学習．",
                "C言語でBluetooth BR/EDRのファジングツールを実装．libbluetooth-devライブラリを使用し，L2CAPを含む5つのプロトコルに対するファジングを実現．",
              ]}
            />
            <Divider sx={{ mt: 2, mb: 2 }} />
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
              title={"株式会社マネーフォワード"}
              hyperLink="https://corp.moneyforward.com/"
            />
            <SubTitle
              title={"2023年8月1日 - 2023年8月16日 (インターンシップ)"}
            />
            <SecondaryText
              text={
                "配属：CTO室 基盤アプリケーション部 マイクロサービスグループ"
              }
            />
            <BulletPointsList
              items={[
                "実運用されているメールオーダーサービスの領収書パーサーをGolangで実装．",
                "Kustomizeを使ってk8sマニフェストを作成し，サービスを本番環境にデプロイ＆リリース．",
              ]}
            />
            <Divider sx={{ mt: 2, mb: 2 }} />
            <Title
              title={"Money Forward Inc."}
              hyperLink="https://corp.moneyforward.com/en/"
            />
            <SubTitle title={"08/01/2023 - 08/16/2023 (Internship)"} />
            <BulletPointsList
              items={[
                "Implemented a receipt parser for mail order services that are actually in operation in Golang.",
                "Created k8s manifests using Kustomize, and deployed and released the services to the production environment.",
              ]}
            />
          </SingleCardItem>
          <SingleCardItem>
            <Title
              title={"株式会社ワンキャリア"}
              hyperLink="https://onecareer.co.jp/"
            />
            <SubTitle
              title={"2023年7月22日 - 2023年7月23日 (インターンシップ)"}
            />
            <BulletPointsList
              items={[
                "alpコマンドを使ってNginxのアクセスログを解析",
                "Webのパフォーマンスチューニング（N+1問題の解決，SQLの最適化，システムコールの削減）を行い，処理速度を約20倍に改善．",
              ]}
            />
            <Divider sx={{ mt: 2, mb: 2 }} />
            <Title
              title={"ONE CAREER Inc."}
              hyperLink="https://onecareer.co.jp/"
            />
            <SubTitle title={"07/22/2023 - 07/23/2023 (Internship)"} />
            <BulletPointsList
              items={[
                "Analyzed the Nginx access logs using alp command.",
                "Performed web performance tuning (solving the N+1 problem, optimizing SQL, and reducing the number of system calls) and managed to improve processing speed by approximately 20 times.",
              ]}
            />
          </SingleCardItem>
          <SingleCardItem>
            <Title
              title={"キヤノン IT ソリューションズ"}
              hyperLink="https://www.canon-its.co.jp/"
            />
            <SubTitle
              title={"2022月8月29日 - 2022年9月2日 (インターンシップ)"}
            />
            <BulletPointsList
              items={[
                "実際に観測されたマルウェアおよびランサムウェアを解析．",
                "インターン生内のCTFで優勝．",
              ]}
            />
            <Divider sx={{ mt: 2, mb: 2 }} />
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
              title1={"神戸大学大学院工学研究科"}
              hyperLink1="http://www.eng.kobe-u.ac.jp/"
              title2={"大阪商工会議所"}
              hyperLink2="https://www.osaka.cci.or.jp/"
            />
            <SubTitle title={"2020年11月 - 2021年5月 (学生技術補佐)"} />
            <BulletPointsList
              items={[
                "大阪商工会議所主催の「サイバーセキュリティお助け隊サービス」の一環として，PHPで学習システムを開発．",
              ]}
            />
            <Divider sx={{ mt: 2, mb: 2 }} />
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
              title1={"神戸大学大学院工学研究科"}
              hyperLink1="http://www.eng.kobe-u.ac.jp/"
              title2={"徳島県警"}
              hyperLink2="https://www.police.pref.tokushima.jp/"
            />
            <SubTitle title={"2020年7月 - 2021年3月 (学生技術補佐)"} />
            <BulletPointsList
              items={[
                <>
                  JavaScriptで{" "}
                  <HyperLink
                    url="https://www.tcn.jp/news/detail/5/"
                    data={"`すごセク`"}
                  />{" "}
                  と命名されたゲーム形式のサイバーセキュリティ教育アプリケーションを開発．
                </>,
                "R言語を用いて，収集したデータからサイバーセキュリティの意識データを分析．",
              ]}
            />
            <Divider sx={{ mt: 2, mb: 2 }} />
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

      {/* 論文 */}
      <BaseContainer id="papers">
        <BaseItem xs={12}>
          <Title title="論文 | Papers" />
          <CANDAR2023 />
          <ISEC2023 />
          <CSS2023 />
          <CSS2022 />
          <FIT2022 />
        </BaseItem>
      </BaseContainer>

      {/* 業績 */}
      <BaseContainer id="accomplishments">
        <BaseItem xs={12}>
          <Title title="業績 | Accomplishments" />
          <SCISISEC2023 />
          <CTF2023 />
          <TOEIC />
        </BaseItem>
      </BaseContainer>

      {/* スキル */}
      {/* <BaseContainer>
        <BaseItem xs={12}>
          <Title title="Coding Lang." />
          <SingleCardItem>
            <SubTitle title={"Golang"} />
          </SingleCardItem>
          <SingleCardItem>
            <SubTitle title={"TypeScript"} />
          </SingleCardItem>
          <SingleCardItem>
            <SubTitle title={"JavaScript"} />
          </SingleCardItem>
          <SingleCardItem>
            <SubTitle title={"Python"} />
          </SingleCardItem>
          <SingleCardItem>
            <SubTitle title={"Java"} />
          </SingleCardItem>
        </BaseItem>
      </BaseContainer> */}
    </Template>
  );
};

export default Home;
