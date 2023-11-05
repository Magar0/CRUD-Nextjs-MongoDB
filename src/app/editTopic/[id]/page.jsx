import EditTopicForm from "@/app/components/EditTopicForm"
import Topic from "@/models/topic";
import connectMongoDb from "@/utils/mongoDb";

const EditTopic = async ({ params }) => {

    const { id } = params

    // const res = await fetch(`http://localhost:3000/api/topics/${id}`, { cache: 'no-store' });
    // const { topic } = await res.json();

    await connectMongoDb();
    const topic = await Topic.findOne({ _id: id });

    const { title, description } = topic

    return (
        <>
            <EditTopicForm id={id} title={title} description={description} />
        </>
    )
}

export default EditTopic;