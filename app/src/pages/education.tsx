import Template from "components/views/template";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import { BaseContainer, BaseItem } from "components/views/ui";

const Education = () => {
  return (
    <Template name={"Education"}>
      <BaseContainer>
        <BaseItem xs={12}>
          <Card sx={{ maxWidth: "100%", mb: 4 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  04/2023 - Present &nbsp;&nbsp;&nbsp;&nbsp; Kobe University |
                  Master
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Department of Electrical and Electronic Engineering, Graduate
                  School of Engineering
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: "100%" }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  04/2019 - 03/2023 &nbsp;&nbsp;&nbsp;&nbsp; Kobe University |
                  Bachelor
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Department of Electrical and Electronic Engineering, Faculty
                  of Engineering
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </BaseItem>
      </BaseContainer>
    </Template>
  );
};

export default Education;
