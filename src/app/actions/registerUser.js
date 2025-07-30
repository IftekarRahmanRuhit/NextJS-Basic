"use server"

import dbConnect from "../../lib/dbConnect"
import { error } from "console"

export const registerUser = async (payload) => {

    try{
 const result = await dbConnect("test-users").insertOne(payload);
    return result;
    } catch (error){
        console.log(error)
        return null
    }
}
