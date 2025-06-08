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
        </SingleCardItem>
    );
};

export default SCISISEC2025;
