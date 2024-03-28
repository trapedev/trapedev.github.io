// ** MUI Import
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DoneIcon from "@mui/icons-material/Done";
// import EditNoteIcon from "@mui/icons-material/EditNote";

const ListItems = () => {
  return (
    <>
      <ListItemButton href="/#/">
        <ListItemIcon>
          <DashboardIcon sx={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText primary={"Home"} sx={{ color: "white" }} />
      </ListItemButton>
      <ListItemButton href="/#/education">
        <ListItemIcon>
          <SchoolIcon sx={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText primary={"Education"} sx={{ color: "white" }} />
      </ListItemButton>
      <ListItemButton href="/#/experiences">
        <ListItemIcon>
          <DoneIcon sx={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText primary={"Experiences"} sx={{ color: "white" }} />
      </ListItemButton>
      <ListItemButton href="/#/academic-paper">
        <ListItemIcon>
          <MenuBookIcon sx={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText primary={"Academic Paper"} sx={{ color: "white" }} />
      </ListItemButton>
      <ListItemButton href="/#/accomplishments">
        <ListItemIcon>
          <EmojiEventsIcon sx={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText primary={"Accomplishments"} sx={{ color: "white" }} />
      </ListItemButton>
    </>
  );
};

export default ListItems;
