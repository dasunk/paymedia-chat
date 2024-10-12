"use client";

import React, { useState } from "react";

interface Comment {
    id: number;
    user: string;
    text: string;
    date: string;
    replies?: Comment[];
    votes: number;
}

const Chat: React.FC = () => {
    const [comments, setComments] = useState<Comment[]>([
        {
            id: 1,
            user: "amyrobson",
            text:
                "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.",
            date: "1 month ago",
            votes: 12,
        },
        {
            id: 2,
            user: "maxblagun",
            text:
                "Woah, your project looks awesome! How long have you been coding for? I’m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
            date: "2 weeks ago",
            votes: 5,
            replies: [
                {
                    id: 3,
                    user: "ramsesmiron",
                    text:
                        "If you’re still new, I’d recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It’s very tempting to jump ahead but lay a solid foundation first.",
                    date: "1 week ago",
                    votes: 4,
                },
                {
                    id: 4,
                    user: "juliosomo",
                    text:
                        "I couldn’t agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
                    date: "2 days ago",
                    votes: 2,
                },
            ],
        },
    ]);

    const handleVote = (id: number, isUpvote: boolean) => {
        setComments((prevComments) =>
            prevComments.map((comment) =>
                comment.id === id
                    ? { ...comment, votes: comment.votes + (isUpvote ? 1 : -1) }
                    : comment
            )
        );
    };

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
                            <p className="text-gray-700 font-semibold">{comment.user}</p>
                            <p className="text-gray-500 text-sm">{comment.date}</p>
                            <p className="mt-2 text-gray-900">{comment.text}</p>
                            <button className="text-purple-500 text-sm mt-2">Reply</button>

                            {/* Display replies if any */}
                            {comment.replies && (
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
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Chat;
