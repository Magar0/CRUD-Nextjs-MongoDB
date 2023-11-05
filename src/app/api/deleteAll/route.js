import Topic from "@/models/topic";
import connectMongoDb from "@/utils/mongoDb";
import { NextResponse } from "next/server";

export async function DELETE(req) {
    await connectMongoDb();
    await Topic.deleteMany({});
    return NextResponse.json({ message: "All Deleted" }, { status: 200 })
}