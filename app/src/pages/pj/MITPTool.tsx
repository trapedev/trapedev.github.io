import Box from "@mui/material/Box";
import {
  SecondaryText,
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";

const BreaktoothTool = () => {
  return (
    <SingleCardItem>
      <Title title={"Breaktooth"} hyperLink="https://breaktooth.dev/" />
      <SubTitle title={"Open-Source Tool of the Breaktooth Attack."} />
      <SecondaryText text="Below is a demonstration of the Breaktooth attack:" />
      <Box
        sx={{
          position: "relative",
          paddingBottom: "56.25%", // 16:9 aspect ratio
          height: 0,
          overflow: "hidden",
          maxWidth: "100%",
          mb: 3,
        }}
      >
        <iframe
          src="https://drive.google.com/file/d/1opQV6ZV0S6IsnJ_8Y-0GYHz90TZx2uoU/preview"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
          allow="autoplay"
          title="breaktooth attack demo"
        />
      </Box>
    </SingleCardItem>
  );
};

export default BreaktoothTool;
