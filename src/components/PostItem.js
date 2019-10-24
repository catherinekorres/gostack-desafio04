import React from 'react';

function Comment({ comments }) {
  return(
    
    <div className="comment-list">
      
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <div className="author">
            <img className="avatar" src={comment.author.avatar} alt="" width="40"/>
          </div>
          <div className="content">
            <span className="name">{comment.author.name}</span> 
            {comment.content}
          </div>
        </div>
      ))}
    
    </div>

  );
}

function PostItem({ author, date, content, comments }) {
  return(

      <div className="post">

        <div className="post-author">
          <img className="avatar" src={author.avatar} alt="" width="40"/>
          <div className="info">
            <h4>{author.name}</h4>
            <p>{date}</p>
          </div>
        </div>

        <div className="content">
          {content}
        </div>

        <Comment comments={comments} />

      </div>
      
  );
}

export default PostItem;