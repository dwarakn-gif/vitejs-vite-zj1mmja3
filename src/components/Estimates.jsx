import { DetailsList } from "@fluentui/react"; import { estimates } from "../data";
export default function Estimates() {
    return ( <DetailsList
items={estimates} columns={[
{ key: "version", name: "Version", fieldName: "version", minWidth: 80 },
{ key: "total", name: "Total Cost", fieldName: "total", minWidth: 120 },
{ key: "price", name: "Contract Price", fieldName: "price", minWidth: 120 },
]} />
); }
