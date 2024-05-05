import { Typography, Divider } from "@mui/material";
import Template from "components/views/template";
import {
  BaseContainer,
  BaseItem,
  SecondaryText,
  SingleCardItem,
} from "components/views/ui";

const Education = () => {
  return (
    <Template name={"学歴 | Education"}>
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
        神戸大学大学院 | 修士
      </Typography>
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        sx={{ color: "white" }}
      >
        2023年4月 - 現在
      </Typography>
      <SecondaryText text="工学研究科　電気電子工学専攻" />
      <Divider sx={{ mt: 2, mb: 2 }} />
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
      <SecondaryText text="Department of Electrical and Electronic Engineering, Graduate School of Engineering" />
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
        神戸大学 | 学士
      </Typography>
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        sx={{ color: "white" }}
      >
        2019年4月 - 2023年3月
      </Typography>
      <SecondaryText text="工学部　電気電子工学科" />
      <Divider sx={{ mt: 2, mb: 2 }} />
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
      <SecondaryText text="Department of Electrical and Electronic Engineering, Faculty of Engineering" />
    </SingleCardItem>
  );
};
