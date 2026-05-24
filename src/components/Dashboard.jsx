import { Stack, Text } from "@fluentui/react";
export default function Dashboard() { return (
<Stack tokens={{ childrenGap: 20 }}>
<Text variant="xLarge">Dashboard</Text>
<Stack horizontal tokens={{ childrenGap: 20 }}> <Stack styles={{ root: card }}>
<Text variant="large">Active Clients</Text>
<Text variant="xxLarge">2</Text> </Stack>
<Stack styles={{ root: card }}>
<Text variant="large">Signoff pending</Text> <Text variant="xxLarge">1</Text>
</Stack> </Stack>
</Stack> );
}
const card = {
padding: 20,
background: "#fff",
borderRadius: 8,
width: 200,
boxShadow: "0 0 6px rgba(0,0,0,0.1)"
};