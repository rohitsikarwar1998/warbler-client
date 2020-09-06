import React from 'react';
import { getStatus } from '../store/actions/blogs';
import ReactHtmlParser from 'react-html-parser';
import {
    postFollow, postLike, postSave,
    deleteFollow, deleteLike, deleteSave
} from '../store/actions/blogControls'

import { calculateTime } from './ResponseItem';

class BlogInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLiked: false,
            isSaved: false,
            isFollow: false,
            isStatus: false,
        }
        this.toggleFollow = this.toggleFollow.bind(this);
        this.toggleLike = this.toggleLike.bind(this);
        this.toggleSave = this.toggleSave.bind(this);
    }

    componentDidMount() {
        this.getStatus();
    }

    async getStatus() {
        let results = await getStatus(this.props.currentUser.id, this.props.blog.id, this.props.blog.user_id);
        this.setState({
            isFollow: results[0].res,
            isLiked: results[1].res,
            isSaved: results[2].res,
            isStatus: true,
        });
    }


    async toggleFollow() {
        if (this.state.isFollow) {
            await deleteFollow(this.props.currentUser.id, this.props.blog.user_id);
        } else {
            await postFollow(this.props.currentUser.id, this.props.blog.user_id)
        }
        this.setState({ isFollow: !this.state.isFollow });
    }
    async toggleLike() {
        if (this.state.isLiked) {
            await deleteLike(this.props.currentUser.id, this.props.blog.id);
        } else {
            await postLike(this.props.currentUser.id, this.props.blog.id)
        }
        this.setState({ isLiked: !this.state.isLiked });
    }
    async toggleSave() {
        if (this.state.isSaved) {
            await deleteSave(this.props.currentUser.id, this.props.blog.id);
        } else {
            await postSave(this.props.currentUser.id, this.props.blog.id)
        }
        this.setState({ isSaved: !this.state.isSaved });
    }

    render() {
        const { isLiked, isSaved, isFollow, isStatus } = this.state;
        if (!isStatus) return (
            <div>loading...</div>
        )
        let btntext = (isFollow) ? 'Unfollow' : 'Follow';
        let liketext = (isLiked) ? 'liked' : 'like';
        let savetext = (isSaved) ? 'saved' : 'save';
        const { user_id, profileImageUrl, created_at } = this.props.blog;
        const userId = this.props.currentUser.id;

        const datediff = calculateTime(created_at);
        return (
            <div className="bloginfo-container">
                <div className="blog-user-info">
                    <div className="u-i">
                        <img src={profileImageUrl} alt="blog-user" />
                        <div className="username">
                            <h3>{this.props.blog.username}</h3>
                            <span>{datediff}</span>
                        </div>
                    </div>
                    {userId !== user_id && <button className="btn" onClick={this.toggleFollow}>{btntext}</button>}
                </div>
                <div className="blog-layout">
                    {ReactHtmlParser(this.props.blog.text)}
                </div>
                <div className="blog-controls">
                    <div className="like icon" onClick={this.toggleLike}>
                        <i className="fa fa-thumbs-up"></i>
                        <span>{liketext}</span>
                    </div>
                    <div className="save icon" onClick={this.toggleSave}>
                        <i className="fa fa-bookmark"></i>
                        <span>{savetext}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogInfo;