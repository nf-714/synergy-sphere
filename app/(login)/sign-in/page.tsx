import { getUser } from "@/queries/user";
import { Login } from "../login";
export default async function SignInPage() {
  const user = await getUser();

  return <Login mode="signin" />;
}
