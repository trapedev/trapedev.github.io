import { Box } from "@mui/material";
import { SecondaryText, SingleCardItem, SubTitle, Title } from "components/views/ui";

const MistralAIInputValidFlawFix = () => {
    return (
        <SingleCardItem>
            <Title
                title={"Major LLM Service Provider's Input Validation DoS Vulnerability (Fixed)"}
            />
            <SubTitle title={"07/2025"} />
            <SecondaryText
                text={
                    "Discovered an input validation vulnerability leading to Denial of Service attacks in a major LLM service platform."
                }
            />
            <SecondaryText text={"Reported the vulnerability through HackerOne Private Bug Bounty Program."} />
            <SecondaryText
                text={
                    "The vulnerability was acknowledged by the company's security team and marked as valid."
                }
            />
            <Box
                sx={{
                    position: "relative",
                    paddingBottom: "7%", // 16:9 aspect ratio
                    height: 0,
                    overflow: "hidden",
                    maxWidth: "100%",
                    mt: 3,
                }}
            >
                <img
                    src="mai_report_acks.png"
                    style={{
                        position: "absolute",
                        width: "75%",
                        maxWidth: "800px",
                    }}
                    alt="acks"
                />
            </Box>
        </SingleCardItem>
    );
};

export default MistralAIInputValidFlawFix;
