import { SecondaryText, SingleCardItem, SubTitle, Title } from "components/views/ui";

const WH1000XM5AuthVulnFix = () => {
  return (
    <SingleCardItem>
      <Title
        title={"Sony, WH-1000XM5's Improper Authentication Vulnerability (Fixed in v2.4.1)"}
        hyperLink="https://github.com/trapedev/WH-1000XM5_Auth_Vuln_Fixed_v2.4.1"
      />
      <SubTitle title={"03/2025"} />
      <SecondaryText text={"2024年8月，WH-1000XM5に未知の脆弱性（CWE-287 related）が存在することを発見．"} />
      <SecondaryText text={"2024年11月，ベンダーは脆弱性を認めた．"} />
      <SecondaryText text={"2025年2月，v2.4.1としてパッチが適用されたファームウェアがリリース．"} />
    </SingleCardItem>
  );
};

export default WH1000XM5AuthVulnFix;
