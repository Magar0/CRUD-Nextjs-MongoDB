"use client"

import { useRouter } from "next/navigation";

const DeleteAll = () => {

    const router = useRouter()

    const handleClick = async () => {

        const confirmed = confirm("Are you sure to Delete All Data")
        console.log(confirmed);

        if (confirmed) {
            try {
                const res = await fetch("/api/deleteAll", {
                    method: "DELETE"
                });

                if (res.ok) {
                    router.refresh();
                } else {
                    console.log("Delete failed");
                }
            } catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <>
            <button className="text-red-500 float-right m-5 font-bold border border-red-400 bg-red-100 px-5 py-2 rounded-xl hover:bg-red-500 hover:text-white " onClick={handleClick}> Delete All </button>
        </>
    )
}

export default DeleteAll