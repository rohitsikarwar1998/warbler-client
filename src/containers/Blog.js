import React, { Component } from 'react'
import {connect}  from 'react-redux';
import {getBlog} from '../store/actions/blogs';
import BlogInfo from '../components/BlogInfo';
import Response from '../components/Response';
class Blog extends Component {
    constructor(props) {
        super(props);
        this.state={
            status:false,
        }
    }

    componentDidMount(){
        this.getblog();
    }
    
    async getblog(){
        const blogId=this.props.blog_id;
        await this.props.getBlog(blogId);
        this.setState({status:true});
    }

    render() {
        if(!this.state.status) return (
            <div>loading...</div>
        )
        const {blog,currentUser} =this.props;
        return (
            <div className='blog-container'>
                <BlogInfo blog={blog} currentUser={currentUser}/>
                <Response blog_id={blog.id}/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        blog:state.blogs[0],
        currentUser:state.currentUser.user,
    };
}

export default connect(mapStateToProps,{getBlog})(Blog);