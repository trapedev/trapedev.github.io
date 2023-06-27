import Template from "components/views/template";
import Typography from "@mui/material/Typography";
import { BaseContainer, BaseItem, SingleCardItem } from "components/views/ui";

const Education = () => {
  return (
    <Template name={"Education"}>
      <BaseContainer>
        <BaseItem xs={12}>
          <SingleCardItem>
            <Typography gutterBottom variant="h5" component="div">
              04/2023 - Present &nbsp;&nbsp;&nbsp;&nbsp; Kobe University |
              Master
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Department of Electrical and Electronic Engineering, Graduate
              School of Engineering
            </Typography>
          </SingleCardItem>
          <SingleCardItem>
            <Typography gutterBottom variant="h5" component="div">
              04/2019 - 03/2023 &nbsp;&nbsp;&nbsp;&nbsp; Kobe University |
              Bachelor
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Department of Electrical and Electronic Engineering, Faculty of
              Engineering
            </Typography>
          </SingleCardItem>
        </BaseItem>
      </BaseContainer>
    </Template>
  );
};

export default Education;
