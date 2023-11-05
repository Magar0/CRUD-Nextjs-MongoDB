'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"


const EditTopicForm = ({ id, title, description }) => {

    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`/api/topics/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ newTitle, newDescription })
            })

            if (res.ok) {
                router.refresh();
                router.push("/");
            } else {
                throw new Error("Upadate failed")
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input type="text" id="newTitle" value={newTitle} className="border border-slate-500 my-3 px-5 py-3 font-bold" placeholder="Add Topic" onChange={(e) => setNewTitle(e.target.value)} />
                <input type="text" id="newDescription" value={newDescription} className="border border-slate-500 my-3 px-5 py-3" placeholder="Description" onChange={(e) => setNewDescription(e.target.value)} />

                <button type="submit" className="bg-green-400 hover:bg-green-800 text-white hover:font-bold  py-3 "> Update </button>
            </form>
        </>
    )
}

export default EditTopicForm