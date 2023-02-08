import PropsTypes from "prop-types";
import { connect } from "react-redux";
import { Component } from "react";
import { createPost } from "../actions/postAction.js";

class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "", body: "" };
    }

    handleOnchange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = async e => {
        e.preventDefault();

        const post = { title: this.state.title, body: this.state.body };
        this.props.createPost(post);
    };

    render = () => {
        return (
            <div>
                <h2>Add Post</h2>
                <div
                    style={{
                        marginTop: 20,
                        backgroundColor: "gray",
                        color: "white",
                        padding: 10,
                        borderRadius: 5,
                    }}
                >
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label style={{ margin: 10 }}>Title: </label>
                            <input
                                style={{ display: "block", margin: 10 }}
                                type="text"
                                name="title"
                                value={this.state.title}
                                onChange={this.handleOnchange}
                            />
                        </div>
                        <div>
                            <label style={{ margin: 10 }}>Body: </label>
                            <textarea
                                name="body"
                                id=""
                                cols="80"
                                rows="15"
                                style={{ margin: 10, display: "block" }}
                                value={this.state.body}
                                onChange={this.handleOnchange}
                            ></textarea>
                        </div>
                        <input
                            value="Submit"
                            style={{ margin: 10 }}
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        );
    };
}

Postform.propsTypes = {
    createPost: PropsTypes.func.isRequired,
};

export default connect(null, { createPost })(Postform);
