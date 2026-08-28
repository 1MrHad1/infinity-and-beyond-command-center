import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getProfile } from "@/lib/roadmap";
import Rail from "@/components/Rail";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const profile = await getProfile(supabase, user.id);
  const name = profile?.full_name || user.email || "Team member";
  const role = profile?.role || "Team";

  return (
    <div className="wrap">
      <Rail name={name} role={role} isOwner={!!profile?.is_owner} />
      <div className="main">{children}</div>
    </div>
  );
}
