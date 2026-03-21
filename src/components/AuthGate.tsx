import { useState } from "react";
import { Button } from "@/components/ui/button";

const AuthGate = ({ children }: { children: React.ReactNode }) => {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("authed") === "1");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "madisonmccoy" && password === "thereal1!") {
      sessionStorage.setItem("authed", "1");
      setAuthed(true);
    } else {
      setError(true);
    }
  };

  if (authed) return <>{children}</>;

  const inputClasses =
    "w-full bg-transparent border-b border-border px-0 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300 rounded-none";

  return (
    <div className="min-h-screen bg-background flex items-center justify-center section-padding">
      <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-6">
        <h1 className="text-sm tracking-[0.25em] uppercase font-light text-foreground text-center">
          Madison McCoy
        </h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => { setUsername(e.target.value); setError(false); }}
          className={inputClasses}
          autoComplete="username"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => { setPassword(e.target.value); setError(false); }}
          className={inputClasses}
          autoComplete="current-password"
        />
        {error && (
          <p className="text-xs text-destructive font-light">Invalid credentials</p>
        )}
        <Button variant="hero" size="lg" type="submit" className="w-full">
          Enter
        </Button>
      </form>
    </div>
  );
};

export default AuthGate;
