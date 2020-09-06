import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlogs, removeBlog } from '../store/actions/blogs';
import BlogItem from '../components/BlogItem';

class BlogList extends Component {
    componentDidMount() {
        const text = new URLSearchParams(this.props.location.search).get("text");
        if (text) {
            this.props.fetchBlogs(text);
        }
        else {
            this.props.fetchBlogs();
        }


    }
    componentDidUpdate() {
        const text = new URLSearchParams(this.props.location.search).get("text");
        this.props.fetchBlogs(text);
    }
    render() {
        const { blogs, removeBlog, currentUserId } = this.props;

        //if no blog is find then show the message to the user 
        if (!blogs.length)
            return (<h4>No Blogs Found</h4>);

        let blogList = blogs.map(m => (
            <BlogItem
                history={this.props.history}
                key={m.id}
                data={m.updated_at}
                user_id={m.user_id}
                blog_id={m.id}
                isCorrectUser={currentUserId === m.user_id}
                removeBlog={removeBlog.bind(this, m.user_id, m.id)}
                text={m.text}
                username={m.username}
                profileImageUrl={m.profileImageUrl}
                id={currentUserId} />
        ));

        return (
            <ul className="list-items">
                {blogList}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        blogs: state.blogs,
        currentUserId: state.currentUser.user.id
    };
};

export default connect(mapStateToProps, { fetchBlogs, removeBlog })(BlogList);
