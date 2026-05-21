import { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./components/Dashboard.jsx";
import ClientList from "./components/ClientList.jsx";
import ClientDetails from "./components/ClientDetails.jsx";
import Variations from "./components/Variations.jsx";
 
export default function App() {
  const [page, setPage] = useState("dashboard");
 
  const renderPage = () => {
    switch (page) {
      case "clients":
        return <ClientList setPage={setPage} />;
      case "clientDetails":
        return <ClientDetails />;
      case "variations":
        return <Variations />;
      default:
        return <Dashboard />;
    }
  };
 
  return (
    <div style={{ display: "flex", background: "#f3f2f1" }}>
      <Sidebar setPage={setPage} />
      <div style={{ flex: 1, padding: 20 }}>{renderPage()}</div>
    </div>
  );

}