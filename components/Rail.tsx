"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  name: string;
  role: string;
  isOwner: boolean;
}

export default function Rail({ name, role, isOwner }: Props) {
  const path = usePathname();
  const nav = [
    { href: "/today", ix: "◎", label: "Today's Missions" },
    { href: "/roadmap", ix: "▤", label: "60-Day Roadmap" },
    { href: "/team", ix: "⌾", label: isOwner ? "Team Overview" : "My Progress" },
  ];

  return (
    <nav className="rail">
      <div className="brand">
        <div className="logo">∞</div>
        <div>
          <b>Infinity &amp; Beyond</b>
          <span>Command Center</span>
        </div>
      </div>

      {nav.map((n) => {
        const active = path === n.href || path.startsWith(n.href + "/");
        return (
          <Link key={n.href} href={n.href} className={"navbtn" + (active ? " active" : "")}>
            <span className="ix">{n.ix}</span>
            {n.label}
          </Link>
        );
      })}

      <div className="railfoot">
        <div style={{ fontSize: 11, fontWeight: 700 }}>{name}</div>
        <div style={{ fontSize: 10, color: "var(--muted)", marginBottom: 10 }}>{role}</div>
        <form action="/auth/signout" method="post">
          <button className="btn block" type="submit">
            ⏻ Sign out
          </button>
        </form>
      </div>
    </nav>
  );
}
