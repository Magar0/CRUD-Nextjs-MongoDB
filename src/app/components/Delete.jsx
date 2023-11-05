'use client'

import { useRouter } from "next/navigation";
import { GoTrash } from "react-icons/go";


const Delete = ({ id }) => {

    const router = useRouter();

    const removeTopic = async () => {
        try {
            const res = await fetch(`/api/topics?id=${id}`, {
                method: "DELETE"
            })

            if (res.ok) {
                router.refresh();
            } else {
                console.log("Delete failed");
            }
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <>
            <button className="text-red-500 " onClick={removeTopic}> <GoTrash size={28} /> </button>
        </>
    )
}

export default Delete