import { GitHub } from "@mui/icons-material";
import { HyperLink } from "components/views/ui";

const GitHubLink = () => {
  return (
    <HyperLink
      url={"https://github.com/trapedev"}
      data={<GitHub sx={{ ml: 1, mr: 1, color: "white" }} />}
    />
  );
};

export default GitHubLink;
