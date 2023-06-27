// ** MUI Import
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PsychologyIcon from "@mui/icons-material/Psychology";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DoneIcon from "@mui/icons-material/Done";
import EditNoteIcon from "@mui/icons-material/EditNote";

const ListItems = () => {
  return (
    <>
      <ListItemButton href="/#/">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary={"Home"} />
      </ListItemButton>
      <ListItemButton href="/#/education">
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary={"Education"} />
      </ListItemButton>
      <ListItemButton href="/#/experiences">
        <ListItemIcon>
          <DoneIcon />
        </ListItemIcon>
        <ListItemText primary={"Experiences"} />
      </ListItemButton>
      <ListItemButton href="/#/academic-paper">
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <ListItemText primary={"Academic Paper"} />
      </ListItemButton>
      <ListItemButton href="/#/accomplishments">
        <ListItemIcon>
          <EmojiEventsIcon />
        </ListItemIcon>
        <ListItemText primary={"Accomplishments"} />
      </ListItemButton>
      <ListItemButton href="/#/skills">
        <ListItemIcon>
          <PsychologyIcon />
        </ListItemIcon>
        <ListItemText primary={"Skills"} />
      </ListItemButton>
      <ListItemButton href="/#/blog">
        <ListItemIcon>
          <EditNoteIcon />
        </ListItemIcon>
        <ListItemText primary={"Blog"} />
      </ListItemButton>
    </>
  );
};

export default ListItems;
