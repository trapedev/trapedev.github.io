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
import { Container } from "@mui/material";

import { HOME_TITLE } from "./models/constants";

// home
import Bio from "pages/home/Bio";

// publ
import FIT2022 from "pages/publ/FIT2022";
import CSS2022 from "pages/publ/CSS2022";
import CSS2023 from "pages/publ/CSS2023";
import ISEC2023 from "pages/publ/ISEC2023";
import CANDAR2023 from "pages/publ/CANDAR2023";
import EPRINT2024 from "pages/publ/EPRINT2024";
import CSEC2024 from "pages/publ/CSEC2024";
import IPSJJIP2024 from "pages/publ/IPSJJIP2024";
import SCIS2025 from "pages/publ/SCIS2025";
import ICSS2025 from "pages/publ/ICSS2025";
import DICOMO2025 from "pages/publ/DICOMO2025";
import IPSJJIP2025 from "pages/publ/IPSJJIP2025";
import ARXIV2025 from "pages/publ/ARXIV2025";

//edu
import MEngKobeU from "pages/edu/MEngKobeU";
import BEngKobeU from "pages/edu/BEngKobeU";

// exp
import ClanTable from "pages/exp/ClanTable";
import NRI from "pages/exp/NRI";
import Sony from "pages/exp/Sony";
import MF from "pages/exp/MF";
import OneCareer from "pages/exp/OneCareer";
import CanonITS from "pages/exp/CanonITS";
import KobeU02 from "pages/exp/KobeU02";
import KobeU01 from "pages/exp/KobeU01";

// pj
import BreaktoothTool from "pages/pj/BreaktoothTool";
import MITPTool from "pages/pj/MITPTool";

// achv
import TOEIC from "pages/achv/TOEIC";
import IPSJCSEC2024 from "pages/achv/IPSJCSEC2024";
import SCISISEC2023 from "pages/achv/SCISISEC2023";
import CTF2023 from "pages/achv/CTF2023";
import MTH2025 from "pages/achv/MTH2025";
import SCISISEC2025 from "pages/achv/SCISISEC2025";

// link
import GitHubLink from "pages/link/GitHubLink";
import InstagramLink from "pages/link/InstagramLink";
import XLink from "pages/link/XLink";
import LinkedInLink from "pages/link/LinkedInLink";

// bugs
import WH1000XM5AuthVulnFix from "pages/bugs/WH1000XM5AuthVulnFix";
import WF1000XM4AuthVulnFix from "pages/bugs/WF1000XM4AuthVulnFix";
import WF1000XM5AuthVulnFix from "pages/bugs/WF1000XM5AuthVulnFix";
import WH1000XM4AuthVulnFix from "pages/bugs/WH1000XM4AuthVulnFix";
import MistralAIInputValidFlawFix from "pages/bugs/MistralAIInputValidFlawFix";

// others
import IERAECTF2025 from "pages/others/IERAECTF2025";
import SECCONBEGINNERCTF2025 from "pages/others/SECCONBEGINNERCTF2025";

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
  "Bug Hunting",
  "Projects",
  "Achievements",
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
      <Container component="main" sx={{ mt: 8, mb: 4 }}>
        <Box id="home" sx={{ pt: 10 }}>
          <Bio />
        </Box>
        <Box id="education">
          <Typography variant="h4" sx={{ pt: 10 }}>
            Education
          </Typography>
          <MEngKobeU />
          <BEngKobeU />
        </Box>
        <Box id="experience">
          <Typography variant="h4" sx={{ pt: 10 }}>
            Experience
          </Typography>
          <Sony />
          <ClanTable />
          <NRI />
          <MF />
          <OneCareer />
          <CanonITS />
          <KobeU02 />
          <KobeU01 />
        </Box>
        <Box id="publication">
          <Typography variant="h4" sx={{ pt: 10 }}>
            Publication
          </Typography>
          <IPSJJIP2025 />
          <ARXIV2025 />
          <DICOMO2025 />
          <ICSS2025 />
          <SCIS2025 />
          <IPSJJIP2024 />
          <CSEC2024 />
          <EPRINT2024 />
          <CANDAR2023 />
          <ISEC2023 />
          <CSS2023 />
          <CSS2022 />
          <FIT2022 />
        </Box>
        <Box id="bug hunting">
          <Typography variant="h4" sx={{ pt: 10 }}>
            Bug Hunting
          </Typography>
          <MistralAIInputValidFlawFix />
          <WF1000XM4AuthVulnFix />
          <WF1000XM5AuthVulnFix />
          <WH1000XM4AuthVulnFix />
          <WH1000XM5AuthVulnFix />
        </Box>
        <Box id="projects">
          <Typography variant="h4" sx={{ pt: 10 }}>
            Projects
          </Typography>
          <BreaktoothTool />
          <MITPTool />
        </Box>
        <Box id="achievements">
          <Typography variant="h4" sx={{ pt: 10 }}>
            Achievements
          </Typography>
          <SCISISEC2025 />
          <MTH2025 />
          <IPSJCSEC2024 />
          <SCISISEC2023 />
          <CTF2023 />
          <TOEIC />
        </Box>
        <Box id="others">
          <Typography variant="h4" sx={{ pt: 10 }}>
            Others
          </Typography>
          <IERAECTF2025 />
          <SECCONBEGINNERCTF2025 />
        </Box>
        <Container
          maxWidth="lg"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <GitHubLink />
          <InstagramLink />
          <XLink />
          <LinkedInLink />
        </Container>
      </Container>
    </Box>
  );
}
