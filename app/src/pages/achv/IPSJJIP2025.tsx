import { Box } from "@mui/material";
import {
    SecondaryText,
    SingleCardItem,
    SubTitle,
    Title,
} from "components/views/ui";

const IPSJJIPSPECIAL2025 = () => {
    return (
        <SingleCardItem>
            <Title
                title={"JIP Specially Selected Paper Certificate 2025"}
                hyperLink="https://www.ipsj.or.jp/english/organization/aboutipsj/award/ssp_award.html"
            />
            <SubTitle title={"09/2025"} />
            <SecondaryText text={"Title: Breaktooth: Breaking Security and Privacy in Bluetooth Power-Saving Mode"} />
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
                    src="ipsjjip2025.png"
                    style={{
                        position: "absolute",
                        width: "75%",
                        maxWidth: "800px",
                    }}
                    alt="ipsjjip2025"
                />
            </Box>
        </SingleCardItem>
    );
};

export default IPSJJIPSPECIAL2025;
