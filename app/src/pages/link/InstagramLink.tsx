import { Instagram } from "@mui/icons-material";
import { HyperLink } from "components/views/ui";

const InstagramLink = () => {
  return (
    <HyperLink
      url={"https://www.instagram.com/trape.dev/"}
      data={<Instagram sx={{ ml: 1, mr: 1, color: "white" }} />}
    />
  );
};

export default InstagramLink;
