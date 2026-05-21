import { Pivot, PivotItem } from "@fluentui/react"; import Requirements from "./Requirements"; import Estimates from "./Estimates";
export default function ClientDetails() { return (
    <div>
<h2>John Smith</h2>
<Pivot>
<PivotItem headerText="Requirements">
<Requirements /> </PivotItem>
<PivotItem headerText="Estimates"> <Estimates />
</PivotItem> </Pivot>
</div> );
}
