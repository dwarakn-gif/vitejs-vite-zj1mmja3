import { DetailsList } from "@fluentui/react"; import { clients } from "../data";
export default function ClientList({ setPage }) { const columns = [
{ key: "name", name: "Name", fieldName: "name", minWidth: 150 },
{ key: "email", name: "Email", fieldName: "email", minWidth: 150 },
{ key: "phone", name: "Phone", fieldName: "phone", minWidth: 100 }, ];
return ( <div>
<h2>Clients</h2> <DetailsList
items={clients}
columns={columns}
onItemInvoked={(item) => setPage("clientDetails")}
/> </div>
); }
