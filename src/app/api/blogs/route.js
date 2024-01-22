import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({ message: "Hello, World" });
};

// post api
export const POST = () => {};

// PATCH api
export const PATCH = () => {};

// DELETE api
export const DELETE = () => {};

// PUT API
export const PUT = () => {};
