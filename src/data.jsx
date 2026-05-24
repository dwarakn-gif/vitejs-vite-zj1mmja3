export const clients = [
 { id: "C001", name: "John Smith", email: "john@email.com", phone:"0400123456" },
 { id: "C002", name: "Client No2", email: "cl2@email.com", phone:"0400000000" }
];

export const requirements = [
{ clientId: "C001", version: "Original", details: "4-bed house", status: "Original" },
{ clientId: "C001", version: "Variation 1", details: "4-bed + garage", status: "Current" },
];
export const estimates = [
{ version: "Original", materials: 230000, labour: 160000, total: 400000, price: 500000 },
{ version: "Variation 1", materials: 230000, labour: 160000, total: 450000, price: 540000 }
];
export const variations = [
{ id: "V001", desc: "Add garage", impact: 40000, status: "Standard cost" },
{ id: "V002", desc: "Add Swimming Pool", impact: 60000, status: "To be Confirmed" }
];
