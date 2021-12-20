import { NextApiRequest, NextApiResponse } from "next";
import supabase from "../../src/initSupabase";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  supabase.auth.api.setAuthCookie(req, res);
}
