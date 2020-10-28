import React from 'react';
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApporvalCard';

const App = () => {
    return (
        <div className="ui container comments">

            <ApprovalCard>
                <div>
                    <h4>WARNING!</h4>
                Are you sure you want to do this? 
                </div>
            </ApprovalCard>

            <ApprovalCard > 
                <CommentDetail 
                author="Sam" 
                timeAgo="4:45" 
                avatar={faker.image.avatar()} 
                post="Comment 1"/>
            </ApprovalCard>

            <ApprovalCard > 
                <CommentDetail 
                author="Alex" 
                timeAgo="3:00" 
                post="Comment 2"
                avatar={faker.image.avatar()} />
            </ApprovalCard>

            <ApprovalCard > 
                <CommentDetail 
                author="Jane" 
                timeAgo='2:00' 
                post="Comment 3"
                avatar={faker.image.avatar()} />
            </ApprovalCard>
        
        </div> 
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))

