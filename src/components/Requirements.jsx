import { useState } from "react";
import { Dropdown, DetailsList } from "@fluentui/react"; 
import { requirements } from "../data";
export default function Requirements() { const [version, setVersion] = useState("Original");
const options = [
{ key: "Original", text: "Original" }, { key: "Variation 1", text: "Variation" },
];
const filtered = requirements.filter(r => r.version === version);
return ( <div>
<Dropdown
label="Select Variation" options={options} selectedKey={version}
onChange={(_, o) => setVersion(o.key)}
/>
<DetailsList items={filtered} columns={[
{ key: "version", name: "Variation", fieldName: "version", minWidth: 80 }, 
{ key: "details", name: "Details", fieldName: "details", minWidth: 250 },
{ key: "status", name: "Status", fieldName: "status", minWidth: 100 },
]} />
</div> );
}
