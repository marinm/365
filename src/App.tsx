import "./App.css";
import { DotGrid } from "./components/DotGrid";
import dayjs from "dayjs";

function App() {
    const now = dayjs();

    return (
        <>
            <h1>{now.format("YYYY")}</h1>
            <DotGrid now={now} />
        </>
    );
}

export default App;
