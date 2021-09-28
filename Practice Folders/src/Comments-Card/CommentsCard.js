import React from 'react';
import faker from 'faker'; 
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const CommentsCard = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:12PM" 
                    content="Nice Post!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 1:59PM" 
                    content="Keep up the good work bro" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Yesterday at 9:00AM" 
                    content="Good Luck (y)" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

export default CommentsCard;
