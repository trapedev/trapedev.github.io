import { Typography, Divider } from "@mui/material";
import { SecondaryText, SingleCardItem } from "components/views/ui";

const BEngKobeU = () => {
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
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        sx={{ color: "white" }}
      >
        学士論文：OSINTを活用したダークネットの悪性判定システムの開発に関する研究
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
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        sx={{ color: "white" }}
      >
        Bachelor Thesis: Research on Development of a Maliciousness Assessment
        System for Darknet Using OSINT
      </Typography>
      <SecondaryText text="Department of Electrical and Electronic Engineering, Faculty of Engineering" />
    </SingleCardItem>
  );
};

export default BEngKobeU;
