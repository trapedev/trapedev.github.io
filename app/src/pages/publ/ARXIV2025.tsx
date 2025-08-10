// import { Divider } from "@mui/material";
import {
    SecondaryText,
    SingleCardItem,
    SubTitle,
    Title,
} from "components/views/ui";

const ARXIV2025 = () => {
    return (
        <SingleCardItem>
            <Title
                title={
                    "Stealtooth: Breaking Bluetooth Security Abusing Silent Automatic Pairing"
                }
                hyperLink="https://arxiv.org/abs/2507.00847"
            />
            <SubTitle
                title={
                    "arXiv"
                }
            />
            <SubTitle
                title={
                    "Keiichiro Kimura, Hiroki Kuzuno, Yoshiaki Shiraishi, and Masakatu Morii"
                }
            />
            <SecondaryText text="First Author" />
            <SecondaryText text="Preprint Paper" />
            <SecondaryText text="2025-07-01" />
        </SingleCardItem>
    );
};

export default ARXIV2025;
