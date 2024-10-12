"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/lib/store";
import { addComment } from "@/app/lib/redux/commentSlice";

interface Comment {
    id: number;
    user: string;
    text: string;
    date: string;
    replies?: Comment[];
    votes: number;
}

const Chat: React.FC = () => {
    const dispatch = useDispatch();

    const comments = useSelector((state: RootState) => state.comments.comments);

    const handleVote = (id: number, isUpvote: boolean) => {
        //TODO: Handle add vote
        // comments.map((comment: Comment) => {
        //     if (comment.id === id) {
        //         comment.votes += isUpvote ? 1 : -1;
        //         dispatch(
        //             addComment(comment.text)
        //         );
        //     }
        // })
        // setComments((prevComments) =>
        //     prevComments.map((comment) =>
        //         comment.id === id
        //             ? { ...comment, votes: comment.votes + (isUpvote ? 1 : -1) }
        //             : comment
        //     )
        // );
    };

    const handleReplay = () => {
        // TODO: Add new comment with reply
        // dispatch(
        //     addComment(
        //         "Reply text goes here",
        //         comments.find((comment) => comment.id === id)?.user
        //     )
        // );
    }

    return (
        <div className="p-4 max-w-2xl mx-auto">
            {comments.map((comment) => (
                <div key={comment.id} className="mb-4 p-4 bg-white rounded-lg shadow-md">
                    <div className="flex space-x-4">
                        <div className="flex flex-col items-center">
                            <button onClick={() => handleVote(comment.id, true)}>
                                <span className="text-lg font-bold text-purple-500">+</span>
                            </button>
                            <span className="font-bold">{comment.votes}</span>
                            <button onClick={() => handleVote(comment.id, false)}>
                                <span className="text-lg font-bold text-purple-500">-</span>
                            </button>
                        </div>
                        <div className="flex-grow">
                            <div className="flex space-x-1">
                                <img
                                    src="/path-to-avatar" // Replace with the actual image path
                                    alt="User Avatar"
                                    className="w-10 h-10 rounded-full"
                                />
                                <p className="text-gray-700 font-semibold">{comment.user}</p>
                            </div>
                            <p className="text-gray-500 text-sm">{comment.date}</p>
                            <p className="mt-2 text-gray-900">{comment.text}</p>
                            <button
                                onClick={() => handleReplay()}
                                className="text-purple-500 text-sm mt-2"
                            >
                                Reply
                            </button>

                            {/* Display replies if any */}
                            {/* {comment.replies && (
                                <div className="mt-4 space-y-4">
                                    {comment.replies.map((reply) => (
                                        <div
                                            key={reply.id}
                                            className="ml-6 p-4 bg-gray-50 rounded-lg shadow-sm"
                                        >
                                            <div className="flex space-x-4">
                                                <div className="flex flex-col items-center">
                                                    <button onClick={() => handleVote(reply.id, true)}>
                                                        <span className="text-lg font-bold text-purple-500">+</span>
                                                    </button>
                                                    <span className="font-bold">{reply.votes}</span>
                                                    <button onClick={() => handleVote(reply.id, false)}>
                                                        <span className="text-lg font-bold text-purple-500">-</span>
                                                    </button>
                                                </div>
                                                <div>
                                                    <p className="text-gray-700 font-semibold">{reply.user}</p>
                                                    <p className="text-gray-500 text-sm">{reply.date}</p>
                                                    <p className="mt-2 text-gray-900">{reply.text}</p>
                                                    <button className="text-purple-500 text-sm mt-2">Reply</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )} */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Chat;
