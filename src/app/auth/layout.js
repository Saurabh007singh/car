
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route"; // Make sure this path is correct
import { redirect } from "next/navigation";

export default async function AuthLayout({ children }) {
  const session = await getServerSession(authOptions);

  if (session) {
    if (session.user.role === "admin"){
      redirect("/admin/dashboard");
    } else {
      redirect("/shop/home");
    }
  }
  return<>{children}</>;
}
