import { SecondaryText, SingleCardItem, SubTitle, Title } from "components/views/ui";

const SECCONBEGINNERCTF2025 = () => {
    return (
        <SingleCardItem>
            <Title
                title={
                    "SECCON Beginners CTF 2025"
                }
                hyperLink="https://ctf.beginners.seccon.jp/"
            />
            <SubTitle title={"07/2025"} />
            <SecondaryText text={"Ranking: 23 / 880"} />
        </SingleCardItem>
    );
};

export default SECCONBEGINNERCTF2025;
