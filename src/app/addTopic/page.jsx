'use client'

import { useRouter } from "next/navigation";
import { useState } from "react"

const AddTopic = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description) {
            alert("Title & description are required");
            return;
        }

        try {
            const res = await fetch('/api/topics', {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ title, description })
            })

            if (res.ok) {
                router.refresh();
                router.push('/');
            } else {
                throw new Error('failed to create a topic')
            }

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input type="text" name="title" id="title" value={title} className="border border-slate-500 my-3 px-5 py-3 font-bold" placeholder="Add Topic" autoComplete="off" onChange={(e) => setTitle(e.target.value)} />
                <input type="text" name="description" id="description" value={description} className="border border-slate-500 my-3 px-5 py-3" placeholder="Description" autoComplete="off" onChange={(e) => setDescription(e.target.value)} />

                <button type="submit" className="bg-green-400 hover:bg-green-800 text-white hover:font-bold  py-3"> Add+ </button>

            </form>
        </>
    )
}

export default AddTopic