import Heading2 from "./Heading2.jsx";
import Part from "./Part.jsx";

const History = () => {
    return (
        <div>
            <Heading2>History</Heading2>
            <div className="mt-4">
                <div className="flex flex-col space-y-3">
                    <Part text="food" amount={500} />
                    <Part text="food" amount={0} />
                    <Part text="food2" amount={-500} />
                </div>
            </div>
        </div>
    );
};

export default History;
