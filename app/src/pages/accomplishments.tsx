import Template from "components/views/template";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import { BaseContainer, BaseItem } from "components/views/ui";

const Accomplishments = () => {
  return (
    <Template name={"Accomplishments"}>
      <BaseContainer>
        <BaseItem xs={12}>
          <Card sx={{ maxWidth: "100%" }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  02/2022 &nbsp;&nbsp;&nbsp;&nbsp; TOEIC L&R Score:825
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Listening : 420, Reading : 405
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </BaseItem>
      </BaseContainer>
    </Template>
  );
};

export default Accomplishments;
