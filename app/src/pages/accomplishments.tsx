import Template from "components/views/template";
import Typography from "@mui/material/Typography";
import {
  BaseContainer,
  BaseItem,
  SecondaryText,
  SingleCardItem,
} from "components/views/ui";

const Accomplishments = () => {
  return (
    <Template name={"Accomplishments"}>
      <BaseContainer>
        <BaseItem xs={12}>
          <First />
        </BaseItem>
      </BaseContainer>
    </Template>
  );
};

export default Accomplishments;

const First = () => {
  return (
    <SingleCardItem>
      <Typography gutterBottom variant="h5" component="div">
        02/2022 &nbsp;&nbsp;&nbsp;&nbsp; TOEIC L&R Score:825
      </Typography>
      <SecondaryText text={"Listening : 420, Reading : 405"} />
    </SingleCardItem>
  );
};
