'use client';

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addComment } from "@/app/lib/redux/commentSlice";
import { Schema, SchemaType } from "@/app/lib/schema";
import { zodResolver } from '@hookform/resolvers/zod'

export default function Comment() {
    const dispatch = useDispatch();

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting, isValid },
    } = useForm<SchemaType>({
        mode: "onChange",
        resolver: zodResolver(Schema)
    });

    const onSubmit = handleSubmit(data => {
        dispatch(addComment(data.comment));
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
                {...register("comment")}
                id="comment"
                name="comment"
                type="text"
                // value={comment}
                // onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment..."
                className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors?.comment && <p className="text-red">{errors?.comment?.message}</p>}

            <button
                type="submit"
                disabled={isSubmitting || !isValid}
                className="px-4 py-2 text-white bg-purple-500 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
                {isSubmitting ? "Sending..." : "Send"}
            </button>
        </form>
    );
}