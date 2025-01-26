import { getUser } from "@/queries/user";
import { Login } from "../login";

export default async function SignUpPage() {
  const user = await getUser();

  return <Login mode="signup" />;
}
