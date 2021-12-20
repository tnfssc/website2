import { User, Session, SupabaseClient } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext<{ user: User | null; session: Session | null }>({ user: null, session: null });

export const UserProvider: React.FC<{ supabaseClient: SupabaseClient }> = ({ supabaseClient, children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const session = supabaseClient.auth.session();
    setSession(session);
    setUser(session?.user ?? null);
    const { data: authListener } = supabaseClient.auth.onAuthStateChange(async (event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      fetch("/api/auth", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        credentials: "same-origin",
        body: JSON.stringify({ event, session }),
      }).then(res => res.json());
    });
    return () => {
      authListener?.unsubscribe();
    };
  }, [supabaseClient.auth]);

  return <UserContext.Provider value={{ user, session }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserContextProvider.`);
  }
  return context;
};
