import { Box } from "@mui/material";
import {
  // SecondaryText,
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";

const SCISISEC2023 = () => {
  return (
    <SingleCardItem>
      <Title
        title={"Information Security Research Encouragement Award (The 2023 Academic Year)"}
        hyperLink="https://www.ieice.org/~isec/award-encouragement.html"
      />
      <SubTitle title={"12/2023"} />
      {/* <SecondaryText text={"SCIS 2024@Nagasaki にて表彰"} /> */}
      <Box
        sx={{
          position: "relative",
          paddingBottom: "12%", // 16:9 aspect ratio
          height: 0,
          overflow: "hidden",
          maxWidth: "100%",
          mt: 3,
        }}
      >
        <img
          src="isec2023.png"
          style={{
            position: "absolute",
            width: "75%",
            maxWidth: "800px",
          }}
          alt="isec2023"
        />
      </Box>
    </SingleCardItem>
  );
};

export default SCISISEC2023;
