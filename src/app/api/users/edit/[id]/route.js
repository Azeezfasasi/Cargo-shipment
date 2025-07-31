import User from "@/lib/models/User";
import { connectDB } from "@/lib/dbConnect";
import { verifyToken } from "../middleware";

export async function PUT(req, { params }) {
  await connectDB();
  const { user, error, status } = verifyToken(req);
  if (error || user.role !== "admin") return new Response(JSON.stringify({ error }), { status });

  const body = await req.json();
  const updatedUser = await User.findByIdAndUpdate(params.id, body, { new: true });
  return Response.json(updatedUser);
}
