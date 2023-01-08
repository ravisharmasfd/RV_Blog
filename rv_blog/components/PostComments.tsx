import React from 'react'
import moment from 'moment';
import { ICommentResult } from '../types';
interface IProps{
    comments:Array<ICommentResult>
}
function PostComments({comments}:IProps) {
    return (
        <>
          {comments.length > 0 && (
            <div className="bg-white/20 shadow-lg rounded-lg p-8 pb-12 mb-8 w-full">
              <h3 className="text-xl mb-8 font-semibold border-b pb-4">
                {comments.length}
                {' '}
                Comments
              </h3>
                {comments.map((comment) => (
                  <div key={comment.id} className="border-b border-gray-100 mb-4 pb-4">
                    <p className="mb-4">
                      <span className="font-semibold text-white mr-1">{comment.name}</span>
                      {' '}
                      on
                      {' '}
                      {moment(comment.createdAt).format('MMM DD, YYYY')}
                    </p>
                    <p className="whitespace-pre-line text-third w-full bg-primary rounded-2xl my-2 p-2">{comment.message}</p>
                  </div>
                ))}
            </div>
          )}
        </>
      );
    };

export default PostComments