import { Nav } from "@fluentui/react";
export default function Sidebar({ setPage }) { return (
<Nav selectedKey="dashboard" groups={[
{
links: [
{ name: "Dashboard", key: "dashboard", onClick: () => setPage("dashboard") }, 
{ name: "Clients", key: "clients", onClick: () => setPage("clients") },
{ name: "Variations", key: "variations", onClick: () => setPage("variations") },
], },
]}
styles={{ root: { width: 220, height: "100vh" } }} />
); }