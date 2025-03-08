import { Typography } from "@mui/material";

const Bio = () => {
  return (
    <>
      <Typography variant="h4">Finding Flaws. Fixing Futures.</Typography>
      <Typography variant="h6">
        Hi, there! I'm Keiichiro KIMURA. My research focuses on vulnerabilities
        in wireless technologies, such as HTTPS and Bluetooth.
      </Typography>
      <Typography variant="h6" sx={{ mt: 5 }}>
        This website will be archived on April 1st, 2025.
      </Typography>
    </>
  );
};

export default Bio;
