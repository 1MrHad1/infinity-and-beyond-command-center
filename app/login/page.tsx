import { login } from "./actions";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="authwrap">
      <div className="authcard">
        <div className="logo">∞</div>
        <h1>Infinity &amp; Beyond</h1>
        <div className="sub">Command Center · Secure Login</div>

        <form action={login}>
          <label className="fld" htmlFor="email">
            Email
          </label>
          <input
            className="inp"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@infinityandbeyond.agency"
            required
          />

          <label className="fld" htmlFor="password">
            Password
          </label>
          <input
            className="inp"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
            required
          />

          {error ? <div className="err">{error}</div> : null}

          <div style={{ marginTop: 22 }}>
            <button className="btn acc block" type="submit">
              Enter the Dojo →
            </button>
          </div>
        </form>

        <div className="note" style={{ marginTop: 18 }}>
          <b>Team access only.</b> Your tasks, progress and rank are private to
          your account. Contact the owner if you can&apos;t sign in.
        </div>
      </div>
    </div>
  );
}
