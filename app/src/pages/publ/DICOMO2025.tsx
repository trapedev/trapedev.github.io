// import { Divider } from "@mui/material";
import {
    SecondaryText,
    SingleCardItem,
    SubTitle,
    Title,
} from "components/views/ui";

const DICOMO2025 = () => {
    return (
        <SingleCardItem>
            <Title
                title={
                    "Proposal of a Vulnerability Detection Method Using Static Analysis for Software Development Environment in 5G Communication Systems"
                }
                hyperLink="https://tsys.jp/dicomo/2025/program/program_abst.html#8H-3"
            />
            <SubTitle title={"Multimedia, Distributed, Cooperative, and Mobile Symposium (DICOMO) 2025"} />
            <SubTitle
                title={
                    "Kazuki Oe, Keiichiro Kimura, Hiroki Kuzuno, Makoto Takita, and Yoshiaki Shiraishi"
                }
            />
            <SecondaryText text="Non Peer-Reviewed Paper" />
        </SingleCardItem>
    );
};

export default DICOMO2025;
