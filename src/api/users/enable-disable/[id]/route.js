import User from "@/lib/models/User";
import { connectDB } from "@/lib/db";
import { verifyToken } from "../middleware";

export async function PATCH(req, { params }) {
  await connectDB();
  const { user, error, status } = verifyToken(req);
  if (error || user.role !== "admin") return new Response(JSON.stringify({ error }), { status });

  const { active } = await req.json();
  const updated = await User.findByIdAndUpdate(params.id, { active }, { new: true });
  return Response.json(updated);
}
