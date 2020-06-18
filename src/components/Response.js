import React from 'react';
import {connect } from 'react-redux';
import {getResponses,postResponse} from '../store/actions/responses';
import ResponseInput from './ResponseInput';
import ResponseItem from './ResponseItem';

class Response extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    componentDidMount(){
        const blogId=this.props.blog_id;
        const userId=this.props.currentUser.id;
        this.props.getResponses(userId,blogId);
    }

    handleSubmit(text){
        const blogId=this.props.blog_id;
        const userId=this.props.currentUser.id;
        this.props.postResponse(userId,blogId,text);
    }
    render(){
        const {count,responses,currentUser} =this.props;
        const ResponseList=responses.map(response=>(
            <ResponseItem
                 key={response.id}
                 currentUser={currentUser}
                 response={response}
            />
        ));
        if(count===-1) return (
            <div>loading...</div>
        )
        return (
            <div className="response-container">
                <div className="header">
                    Responses ({count})
                </div>
                <ResponseInput
                    currentUser={currentUser}
                    handleSubmit={this.handleSubmit}
                />
                <div className="response-list">
                    <ul>{ResponseList}</ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        responses:state.responses.responses,
        count:state.responses.responseCount,
        currentUser:state.currentUser.user,
    }
}

export default connect(mapStateToProps,{getResponses,postResponse})(Response);