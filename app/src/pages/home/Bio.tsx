import { Typography } from "@mui/material";

const Bio = () => {
  return (
    <>
      <Typography variant="h4">Finding Flaws. Fixing Futures.</Typography>
      <Typography variant="h6">
        Hi, there! I'm Keiichiro KIMURA. My research focuses on vulnerabilities
        in wireless technologies, such as HTTPS and Bluetooth.
      </Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>
        This website will no longer be updated, except for results/achievements
        before March 31, 2025.
      </Typography>
    </>
  );
};

export default Bio;
