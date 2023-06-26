// ** MUI Import
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";

const NestedListItems = () => {
  return (
    <>
      <ListItemButton href="/">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary={"HOME"} />
      </ListItemButton>
    </>
  );
};

export default NestedListItems;
