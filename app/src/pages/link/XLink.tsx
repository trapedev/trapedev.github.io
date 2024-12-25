import { Twitter } from "@mui/icons-material";
import { HyperLink } from "components/views/ui";

const XLink = () => {
  return (
    <HyperLink
      url={"https://x.com/trape_dev"}
      data={<Twitter sx={{ ml: 1, mr: 1, color: "white" }} />}
    />
  );
};

export default XLink;
