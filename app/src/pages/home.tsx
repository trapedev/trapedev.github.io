import Template from "components/views/template";
import Typography from "@mui/material/Typography";
import { BaseContainer, BaseItem } from "components/views/ui";

const Home = () => {
  return (
    <Template name={"Home"}>
      <BaseContainer>
        <BaseItem xs={12}>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{ color: "white" }}
          >
            Biography
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ color: "lightgray" }}
          >
            My name is Keiichiro KIMURA, and I am a first-year master's student
            in the Graduate School of Engineering at Kobe University. I am
            conducting research in information security, with my research theme
            being the study of vulnerabilities in wireless communication, such
            as HTTPS and Bluetooth. In addition to my studies, I am involved in
            the development of a web application called 'JUKSL', primarily
            handling the implementation of the backend. I also have an enduring
            love for Gopher, the character of Golang.
          </Typography>
        </BaseItem>
      </BaseContainer>
    </Template>
  );
};

export default Home;
