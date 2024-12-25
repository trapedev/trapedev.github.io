import { LinkedIn } from "@mui/icons-material";
import { HyperLink } from "components/views/ui";

const LinkedInLink = () => {
  return (
    <HyperLink
      url="https://www.linkedin.com/in/keiichiro-kimura"
      data={<LinkedIn sx={{ ml: 1, mr: 1, color: "white" }} />}
    />
  );
};

export default LinkedInLink;
