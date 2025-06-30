import { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postAction.js";
import PropsTypes from "prop-types";

class Posts extends Component {
    componentDidMount = () => {
        this.props.fetchPosts();
    };

    componentWillReceiveProps = nextProps => {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    };

    render = () => {
        const posts = this.props.posts;

        return (
            <div>
                <h2>Posts</h2>
                {posts.map(post => (
                    <div
                        style={{
                            marginTop: 20,
                            backgroundColor: "gray",
                            color: "white",
                            padding: 15,
                            borderRadius: 5,
                        }}
                        key={post.id}
                    >
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    };
}

Posts.propsTypes = {
    fetchPosts: PropsTypes.func.isRequired,
    posts: PropsTypes.array.isRequired,
    newPost: PropsTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        posts: state.posts.items,
        newPost: state.posts.item,
    };
};

export default connect(mapStateToProps, { fetchPosts })(Posts);
