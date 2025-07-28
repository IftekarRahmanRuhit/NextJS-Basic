import { ObjectId } from 'mongodb';
import dbConnect from "../../../../lib/dbConnect";

export async function GET(req, {params}) {

    const p = await params
  const singleData = await dbConnect("products").findOne({ _id: new ObjectId(p.id) });
  return Response.json(singleData)
}

export async function DELETE(req, {params}) {
    
    const p = await params
  const deleteData = await dbConnect("products").deleteOne({ _id: new ObjectId(p.id) });
  return Response.json(deleteData)
 
  return Response.json({params: p })
}

export async function PATCH(req, {params}) {
    
    const p = await params
    const postedData = await req.json();
    const filter = { _id: new ObjectId(p.id) };
    const updatedData = await dbConnect("products").updateOne(filter,{$set:{...postedData}}, {upsert: true});
    return Response.json(updatedData)
}