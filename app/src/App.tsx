import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { HOME_TITLE } from "./models/constants";
import { Bachelor, Master } from "pages/education";
import {
  BulletPointsList,
  DoubleTitle,
  HyperLink,
  SecondaryText,
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";
import { CTF2023, IPSJCSEC2024, SCISISEC2023, TOEIC } from "pages/accomplishments";
import {
  CANDAR2023,
  CSEC2024,
  CSS2022,
  CSS2023,
  FIT2022,
  ISEC2023,
} from "pages/academicPaper";
import { Container } from "@mui/material";
import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  "Home",
  "Education",
  "Experience",
  "Publication",
  "Achievement",
];

export default function App(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {HOME_TITLE}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => scrollToSection(item.toLowerCase())}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", backgroundColor: "#272d33", color: "white" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#1A1A1A" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {HOME_TITLE}
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: "#fff" }}
                onClick={() => scrollToSection(item.toLowerCase())}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Box id="home" sx={{ mb: 10 }}>
          <Typography variant="h4">Hi, there!</Typography>
          <Typography variant="h6">
            My name is Keiichiro KIMURA, a second-year master's student in the
            Graduate School of Engineering, Kobe University. My research focuses
            on vulnerabilities in wireless technologies, such as HTTPS and
            Bluetooth.
          </Typography>
        </Box>
        <Box id="education" sx={{ mb: 10 }}>
          <Typography variant="h4">Education</Typography>
          <Master />
          <Bachelor />
        </Box>
        <Box id="experience" sx={{ mb: 10 }}>
          <Typography variant="h4">Experience</Typography>
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
        </Box>
        <Box id="publication" sx={{ mb: 10 }}>
          <Typography variant="h4">Publication</Typography>
          <CSEC2024 />
          <CANDAR2023 />
          <ISEC2023 />
          <CSS2023 />
          <CSS2022 />
          <FIT2022 />
        </Box>
        <Box id="achievement" sx={{ mb: 10 }}>
          <Typography variant="h4">Achievement</Typography>
          <IPSJCSEC2024 />
          <SCISISEC2023 />
          <CTF2023 />
          <TOEIC />
        </Box>
        <Container
          maxWidth="lg"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <HyperLink
            url={"https://github.com/trapedev"}
            data={<GitHub sx={{ ml: 1, mr: 1, color: "white" }} />}
          />
          <HyperLink
            url={"https://www.instagram.com/trape.dev/"}
            data={<Instagram sx={{ ml: 1, mr: 1, color: "white" }} />}
          />
          <HyperLink
            url={"https://twitter.com/trape_dev"}
            data={<Twitter sx={{ ml: 1, mr: 1, color: "white" }} />}
          />
          <HyperLink
            url="https://www.linkedin.com/in/keiichiro-kimura-aaab62291"
            data={<LinkedIn sx={{ ml: 1, mr: 1, color: "white" }} />}
          />
        </Container>
      </Box>
    </Box>
  );
}
