import { Typography, Divider } from "@mui/material";
import { SecondaryText, SingleCardItem } from "components/views/ui";

const MEngKobeU = () => {
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
        2023年4月 - 2025年3月（卒業予定）
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
        04/2023 - 03/2025
      </Typography>
      <SecondaryText text="Department of Electrical and Electronic Engineering, Graduate School of Engineering" />
    </SingleCardItem>
  );
};

export default MEngKobeU;
