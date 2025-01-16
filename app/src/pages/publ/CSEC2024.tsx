import { Divider } from "@mui/material";
import {
  SecondaryText,
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";

const CSEC2024 = () => {
  return (
    <SingleCardItem>
      <Title
        title={"Bluetooth省電力モードを用いるデバイスハイジャック攻撃"}
        hyperLink="https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=237288&item_no=1&page_id=13&block_id=8"
      />
      <SubTitle title={"第106回 CSEC研究会 (2024)"} />
      <SubTitle title={"木村圭一朗, 葛野弘樹, 白石善明, 森井昌克"} />
      <SecondaryText text="国内発表論文（2024年 CSEC優秀研究賞 受賞論文）" />
      <SecondaryText text="Vol.2024-CSEC-106 No.82, 2024-07-15" />
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Title
        title={"Device Hijack Attacks Abusing Bluetooth Power-Saving Mode"}
        hyperLink="https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=237288&item_no=1&page_id=13&block_id=8"
      />
      <SubTitle title={"106th, CSEC: Computer Security Group (2024)"} />
      <SubTitle
        title={
          "Keiichiro Kimura, Hiroki Kuzuno, Yoshiaki Shiraishi, and Masakatu Morii"
        }
      />
      <SecondaryText text="Non Peer-Reviewed Paper (Award Paper)" />
      <SecondaryText text="Vol.2024-CSEC-106 No.82, 2024-07-15" />
    </SingleCardItem>
  );
};

export default CSEC2024;
