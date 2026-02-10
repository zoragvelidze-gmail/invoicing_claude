import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { LogoutButton } from "@/components/logout-button";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <h1 className="text-xl font-semibold">Invoicing App</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {session.user.name || session.user.email}
            </span>
            <LogoutButton />
          </div>
        </div>
      </header>
      <main className="container flex-1 py-8">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="mt-2 text-muted-foreground">
          Welcome back, {session.user.name || "User"}. Your invoicing workspace
          is ready.
        </p>
      </main>
    </div>
  );
}
