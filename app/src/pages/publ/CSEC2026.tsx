// import { Divider } from "@mui/material";
import {
  SecondaryText,
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";

const CSEC2026 = () => {
  return (
    <SingleCardItem>
      <Title
        title={"疑似スマートグラスに対するBluetooth通信を介した攻撃の検討"}
      // hyperLink="https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=237288&item_no=1&page_id=13&block_id=8"
      />
      {/* <SubTitle title={"第112回 CSEC研究会 (2026)"} />
      <SubTitle title={"松本 蒼史, 葛野 弘樹, 木村 圭一朗, 瀧田 愼, 白石 善明, 森井 昌克"} />
      <SecondaryText text="国内発表論文（2026年 CSEC優秀研究賞 受賞論文）" />
      <SecondaryText text="共著者" /> */}
      {/* <SecondaryText text="Vol.2024-CSEC-106 No.82, 2024-07-15" /> */}
      {/* <Divider sx={{ mt: 2, mb: 2 }} />
      <Title
        title={"Device Hijack Attacks Abusing Bluetooth Power-Saving Mode"}
        hyperLink="https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=237288&item_no=1&page_id=13&block_id=8"
      /> */}
      <SubTitle title={"112th, CSEC: Computer Security Group (2026)"} />
      <SubTitle
        title={
          "Soshi Matsumoto, Hiroki Kuzuno, Keiichiro Kimura, Makoto Takita, Yoshiaki Shiraishi, and Masakatu Morii"
        }
      />
      <SecondaryText text="Co-Author" />
      <SecondaryText text="Non Peer-Reviewed Paper (Award Paper)" />
      <SecondaryText text="vol.2026-CSEC-112，no.15，pp.1-8" />
    </SingleCardItem>
  );
};

export default CSEC2026;
