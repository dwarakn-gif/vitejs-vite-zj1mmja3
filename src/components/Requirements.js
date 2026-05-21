import { useState } from "react";
import { Dropdown, DetailsList } from "@fluentui/react"; import { requirements } from "../data";
export default function Requirements() { const [version, setVersion] = useState("v2");
const options = [
{ key: "v1", text: "v1" }, { key: "v2", text: "v2" },
];
const filtered = requirements.filter(r => r.version === version);
return ( <div>
<Dropdown
label="Select Version" options={options} selectedKey={version}
onChange={(_, o) => setVersion(o.key)}
/>
<DetailsList items={filtered} columns={[
{ key: "version", name: "Version", fieldName: "version", minWidth: 80 }, { key: "details", name: "Details", fieldName: "details", minWidth: 250 }, { key: "status", name: "Status", fieldName: "status", minWidth: 100 },
]} />
</div> );
}
