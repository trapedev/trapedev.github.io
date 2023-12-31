import { Typography } from "@mui/material";
import Template from "components/views/template";
import { BaseContainer, BaseItem, SingleCardItem } from "components/views/ui";

const Blog = () => {
  return (
    <Template name={"Blog"}>
      <BaseContainer>
        <BaseItem xs={12}>
          <First />
        </BaseItem>
      </BaseContainer>
    </Template>
  );
};

export default Blog;

const First = () => {
  return (
    <SingleCardItem>
      <Typography gutterBottom variant="h5" component="div"></Typography>
    </SingleCardItem>
  );
};
