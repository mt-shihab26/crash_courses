// const helloWorld = React.createElement("ul", null, [
//     React.createElement("li", null, "item1"),
//     React.createElement("li", null, "item1")
// ]);


const App = () => {
    const myItem = "hello";

    return (
        <ul>
            <li>item1222</li>
            <li>item2</li>
            <li>{myItem.toUpperCase()}</li>
        </ul>
    )
};

// ReactDOM.render(App(), document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));
