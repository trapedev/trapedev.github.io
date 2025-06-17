import { Box } from "@mui/material";
import {
    SecondaryText,
    SingleCardItem,
    SubTitle,
    Title,
} from "components/views/ui";

const SCISISEC2025 = () => {
    return (
        <SingleCardItem>
            <Title
                title={"SCIS Paper Award 2025"}
                hyperLink="https://www.ieice.org/ess/isec/award-SCIS.html"
            />
            <SubTitle title={"06/2025"} />
            <SecondaryText text={"Title: Audio Eavesdropping through Bluetooth Power-Saving Mode and Defenses"} />
            <Box
                sx={{
                    position: "relative",
                    paddingBottom: "20%", // 16:9 aspect ratio
                    height: 0,
                    overflow: "hidden",
                    maxWidth: "100%",
                    mt: 3,
                }}
            >
                <img
                    src="scis2025.png"
                    style={{
                        position: "absolute",
                        width: "75%",
                        maxWidth: "800px",
                    }}
                    alt="wh-1000xm5-acks-en"
                />
            </Box>
        </SingleCardItem>
    );
};

export default SCISISEC2025;
