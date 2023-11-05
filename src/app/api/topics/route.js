import Topic from "@/models/topic";
import connectMongoDb from "@/utils/mongoDb";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { title, description } = await req.json();
    await connectMongoDb();
    await Topic.create({ title, description })
    return NextResponse.json({ message: "Topic Created Successful" }, { status: 201 }
    )
}

export async function GET() {
    await connectMongoDb();
    const topics = await Topic.find();
    return NextResponse.json({ topics }, { status: 201 })

}

export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get("id");
    await connectMongoDb();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({ message: "Topic Deleted" }, { status: 200 })
}
