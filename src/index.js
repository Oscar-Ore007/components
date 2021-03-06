import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
  return (
    <div className="ui-container comments">
      <ApprovalCard>
      <CommentDetail 
        author ="Sam" 
        timeAgo="Today at 4:45pm"   
        content="Nice blog post"
        avatar={faker.image.avatar()}
        />
      </ApprovalCard> 
      
     <CommentDetail
      author ="Alex" 
      timeAgo="Today at 2:00am" 
      content="I like the writing" 
      avatar={faker.image.avatar()}
      />  
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root') );