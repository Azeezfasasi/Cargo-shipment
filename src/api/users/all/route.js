import User from "@/lib/models/User";
import { connectDB } from "@/lib/db";
import { verifyToken } from "../middleware";

export async function GET(req) {
  await connectDB();
  const { user, error, status } = verifyToken(req);
  if (error || user.role !== "admin") return new Response(JSON.stringify({ error }), { status });

  const users = await User.find().select("-password");
  return Response.json(users);
}
