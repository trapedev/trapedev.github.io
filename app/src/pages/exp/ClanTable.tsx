import Divider from "@mui/material/Divider";
import {
  // BulletPointsList,
  // HyperLink,
  SecondaryText,
  SingleCardItem,
  SubTitle,
  Title,
} from "components/views/ui";

const ClanTable = () => {
  return (
    <SingleCardItem>
      <Title
        title={"クランテーブル株式会社"}
        hyperLink="https://www.ijyuku.clantable.com/clantable-corp"
      />
      <SubTitle title={"2021年8月 - 2025年3月"} />
      <SecondaryText text="プロダクト" hyperLink="https://www.juksl.com/" />
      {/* <BulletPointsList
        items={[
          <>
            塾の業務管理をサポートするクラウドサービス
            <HyperLink url="https://www.juksl.com/" data={"`ジュクスル`"} />
            の開発及び運用．
          </>,
          "フロントエンド（Next.js/TypeScript）とバックエンド（Golang）の開発を担当．",
          "サービスの拡張に伴い，モノリスからマイクロサービスへ移行．",
          "ビジネスロジックのアルゴリズムを改善し，処理速度を約17%向上．",
          "運用効率化のため，一部のコードを自動生成・更新する機能を実装．",
        ]}
      /> */}
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Title
        title={"Clantable Co."}
        hyperLink="https://www.ijyuku.clantable.com/clantable-corp"
      />
      <SubTitle title={"08/2021 - 03/2025"} />
      <SecondaryText text="Products" hyperLink="https://www.juksl.com/" />
      {/* <BulletPointsList
        items={[
          <>
            Developing and operating cram schools business management service
            named <HyperLink url="https://www.juksl.com/" data={"`Juksl`"} />
          </>,
          "In charge of front-end (Next.js/TypeScript) and back-end(Golang) development.",
          "Implemented the transition from monolithic to microservices, as the service is extended.",
          "Increased processing speed by approximately 17% by improving business logic algorithms.",
          "Implemented the function that generate and update some of the code automatically to implementation operational efficiency.",
        ]}
      /> */}
    </SingleCardItem>
  );
};

export default ClanTable;
