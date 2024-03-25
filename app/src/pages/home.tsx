import React, { useState, useEffect } from "react";
import Template from "components/views/template";
import Typography from "@mui/material/Typography";
import { BaseContainer, BaseItem } from "components/views/ui";
import { Grid, styled } from "@mui/material";

const Home = () => {
  const [imageSize, setImageSize] = useState(window.innerWidth * 0.2);

  const handleResize = () => {
    setImageSize(window.innerWidth * 0.2);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const StyledImage = styled("img")({
    borderRadius: "50%",
    height: imageSize,
    width: imageSize,
    objectFit: "cover",
  });

  return (
    <Template name={"Home"}>
      <BaseContainer>
        <BaseItem xs={12}>
          <Grid container>
            <Grid item sm={12} md={8}>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                sx={{ color: "white" }}
              >
                $ whoami
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ color: "lightgray" }}
              >
                Hi, there! My name is Keiichiro KIMURA, a first-year master's
                student in the Graduate School of Engineering at Kobe
                University. My research theme is the study of vulnerabilities in
                wireless communication, such as HTTPS and Bluetooth.
              </Typography>
            </Grid>
            <Grid
              item
              sm={12}
              md={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <StyledImage src={"/bio.jpg"} alt={`biography`} loading="lazy" />
            </Grid>
          </Grid>
        </BaseItem>
      </BaseContainer>
    </Template>
  );
};

export default Home;
