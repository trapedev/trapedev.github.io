import { Typography } from "@mui/material";
import Template from "components/views/template";
import {
  BaseContainer,
  BaseItem,
  SecondaryText,
  SingleCardItem,
} from "components/views/ui";

const Education = () => {
  return (
    <Template name={"Education"}>
      <BaseContainer>
        <BaseItem xs={12}>
          <First />
          <Second />
        </BaseItem>
      </BaseContainer>
    </Template>
  );
};

export default Education;

const First = () => {
  return (
    <SingleCardItem>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ color: "white" }}
      >
        Kobe University | Master
      </Typography>
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        sx={{ color: "white" }}
      >
        04/2023 - Present
      </Typography>
      <SecondaryText data="Department of Electrical and Electronic Engineering, Graduate School of Engineering" />
    </SingleCardItem>
  );
};

const Second = () => {
  return (
    <SingleCardItem>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ color: "white" }}
      >
        Kobe University | Bachelor
      </Typography>
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        sx={{ color: "white" }}
      >
        04/2019 - 03/2023
      </Typography>
      <SecondaryText data="Department of Electrical and Electronic Engineering, Faculty of Engineering" />
    </SingleCardItem>
  );
};
