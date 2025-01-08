'use client'
import React, { useEffect, useState } from 'react';

const CommentBox = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  useEffect(() => {
    const CommentSave = localStorage.getItem('comments');
    if (CommentSave) {
      setComments(JSON.parse(CommentSave));
    }
    },[]);

  const addComments = () => {
    if (comment.trim() !== '') {
        const UpdateComments = [...comments, comment];
      setComments(UpdateComments);
      setComment('');
      localStorage.setItem('comments',JSON.stringify(UpdateComments))
      
    }
  };

  return (
    <div>
      <h1 className='text-3xl font-bold mt-4 text-green-800'>Comment Box</h1>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder='Write your comment'
        className='border border-green-400 mt-3 w-80 p-2'
      />
      <br />

      <button
        className='bg-green-500 text-white w-36 p-2 mt-3'
        onClick={addComments}
      >
        Add Comment
      </button>

      <div className='mt-2'>
        <h2 className='text-xl font-bold mt-4 text-green-800'>All Comments:</h2>
        {comments.length === 0 ? (
          <p>No comments yet. Add your comment.</p>
        ) : (
          <ul>
            {comments.map((data, index) => (
              <li key={index} className='border border-green-400 mt-3 w-80 p-2'>
                {data}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CommentBox;
