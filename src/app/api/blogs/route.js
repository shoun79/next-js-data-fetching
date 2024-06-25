import { NextResponse } from "next/server"

export const GET = () => {
    return NextResponse.json({ message: 'Hello World' })
}

export const POST = () => {
    return NextResponse.json({ message: 'Hello World' })
}

