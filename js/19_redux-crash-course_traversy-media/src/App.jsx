import { Component } from "react";
import { Provider } from "react-redux";
import Postform from "./components/Postform.jsx";
import Posts from "./components/Posts.jsx";
import store from "./store.js";

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div style={{ margin: 10 }}>
                    <Postform />
                    <Posts />
                </div>
            </Provider>
        );
    }
}
