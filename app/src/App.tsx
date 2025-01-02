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

// link
import GitHubLink from "pages/link/GitHubLink";
import InstagramLink from "pages/link/InstagramLink";
import XLink from "pages/link/XLink";
import LinkedInLink from "pages/link/LinkedInLink";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  // "Home",
  // "Education",
  // "Experience",
  // "Publication",
  // "Project",
  // "Achievement",
  "", // remove
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
        <Toolbar />
        <Box id="home" sx={{ mb: 10 }}>
          <Bio />
        </Box>
        <Box id="education" sx={{ mb: 10 }}>
          <Typography variant="h4">Education</Typography>
          <MEngKobeU />
          <BEngKobeU />
        </Box>
        <Box id="experience" sx={{ mb: 10 }}>
          <Typography variant="h4">Experience</Typography>
          <ClanTable />
          <NRI />
          <Sony />
          <MF />
          <OneCareer />
          <CanonITS />
          <KobeU02 />
          <KobeU01 />
        </Box>
        <Box id="publication" sx={{ mb: 10 }}>
          <Typography variant="h4">Publication</Typography>
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
        <Box id="project" sx={{ mb: 10 }}>
          <Typography variant="h4">Projects</Typography>
          <BreaktoothTool />
          <MITPTool />
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
          <GitHubLink />
          <InstagramLink />
          <XLink />
          <LinkedInLink />
        </Container>
      </Container>
    </Box>
  );
}
