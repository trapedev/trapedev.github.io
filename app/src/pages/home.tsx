import Template from "components/views/template";
import Typography from "@mui/material/Typography";
import { BaseContainer, BaseItem } from "components/views/ui";

const Home = () => {
  return (
    <Template name={"Home"}>
      <BaseContainer>
        <BaseItem xs={12}>
          <Typography gutterBottom variant="h2" component="div">
            Hi There !
          </Typography>
          <Typography gutterBottom variant="h4" component="div">
            I'm Keiichiro KIMURA
          </Typography>
        </BaseItem>
      </BaseContainer>
    </Template>
  );
};

export default Home;
