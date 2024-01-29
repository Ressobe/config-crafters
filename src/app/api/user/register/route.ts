import db from "@/src/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json() ;
    const { email, username, password } = body;

    const isEmailInDatabase = await db.user.findUnique({
      where: {email: email}
    });

    if (isEmailInDatabase) {
      return NextResponse.json(
        { 
          user: null, 
          message: "User with this email already exist",
        },
        { status: 409 }
      );
    }

    const isUserNameInDatabase = await db.user.findUnique({
      where: {username: username}
    });

    if (isUserNameInDatabase) {
      return NextResponse.json( {
        user: null,
        message: "User with this username already exist",
      },
      { status: 409}
      )
    }
    const hashedPassword = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
      }
    })


    return NextResponse.json({user: newUser, message: "User created successful"}, {status: 201});
  } catch(error) {
    return NextResponse.json({message: "Something went wrong!"}, {status: 500});
  }
}
