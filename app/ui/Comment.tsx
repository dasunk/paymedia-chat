'use client';

import { useForm } from "react-hook-form";
import Image from 'next/image';
import { useState } from "react";

export default function Comment() {
    const [comment, setComment] = useState("");

    const {
        handleSubmit,
        register,
        reset,
        formState: { isSubmitting, isValid },
    } = useForm({
        mode: "onChange",
    });

    const onSubmit = handleSubmit(data => {
        console.log("data", data);
        reset();
    });

    return (
        <form onSubmit={onSubmit} className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md">
            <img
                src="/path-to-avatar" // Replace with the actual image path
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
            />
            <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment..."
                className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
                type="submit"
                className="px-4 py-2 text-white bg-purple-500 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
                Send
            </button>
        </form>
    );
}
