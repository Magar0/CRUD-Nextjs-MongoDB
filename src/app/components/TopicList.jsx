
import Link from "next/link";
import Delete from "./Delete";
import { HiPencilAlt } from "react-icons/hi";
import DeleteAll from "./DeleteAll";
import Topic from "@/models/topic";
import connectMongoDb from "@/utils/mongoDb";

const TopicList = async () => {

    // const res = await fetch('http://localhost:3000/api/topics', { cache: 'no-store' }); //for local environment
    // const { topics } = await res.json();

    await connectMongoDb();
    const topics = await Topic.find();


    return (
        <>
            {
                topics.map(curElem => {
                    const date = new Date(curElem.updatedAt)

                    return (
                        <div className="border border-slate-400 p-4 my-3 shadow-xl" key={curElem._id}>
                            <div className="flex justify-between gap-5">
                                <div>
                                    <h2 className="font-bold text-2xl ">{curElem.title}</h2>
                                    <p>{curElem.description}</p>
                                </div>

                                <div className="flex gap-3 items-center">
                                    <Delete id={curElem._id} />
                                    <Link href={`/editTopic/${curElem._id}`} className="text-yellow-300 "> <HiPencilAlt size={30} /> </Link>
                                </div>
                            </div>

                            <div className="text-sm text-right text-gray-600 ">
                                <p><i>Last Updated:</i> {date.toLocaleDateString()} {date.toLocaleTimeString()}  </p>
                            </div>
                        </div>
                    )
                })
            }

            {
                topics.length ? <DeleteAll /> : ""
            }
        </>
    )
}

export default TopicList;
