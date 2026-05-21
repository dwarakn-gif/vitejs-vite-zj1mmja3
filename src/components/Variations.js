import { DetailsList, PrimaryButton } from "@fluentui/react"; import { variations } from "../data";
export default function Variations() { return (
<div> <h2>Variations</h2>
<PrimaryButton text="Create Variation" />
<DetailsList items={variations} columns={[
{ key: "id", name: "ID", fieldName: "id", minWidth: 80 },
{ key: "desc", name: "Description", fieldName: "desc", minWidth: 200 },
{ key: "impact", name: "Cost Impact", fieldName: "impact", minWidth: 120 }, { key: "status", name: "Status", fieldName: "status", minWidth: 120 }
]} />
</div> );
}
