import { DetailsList } from "@fluentui/react"; import { clients } from "../data";
export default function ClientList({ setPage })  { const columns = [
{ key: "name", name: "Name", fieldName: "name", minWidth: 75},
{ key: "email", name: "Email", fieldName: "email", minWidth: 75 },
{ key: "phone", name: "Phone", fieldName: "phone", minWidth: 75 }, ];
return ( <div>
<h2>Clients</h2> <DetailsList
items={clients}
columns={columns}
onItemInvoked={(item) => setPage("clientDetails")}
/> </div>
); }
