import { User } from "@supabase/supabase-js";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import supabase from "../../src/initSupabase";

export default function Profile({ user }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div style={{ maxWidth: "520px", margin: "96px auto" }}>
      <h4>You&apos;re signed in</h4>
      <h5>Email: {user.email}</h5>
      <hr />
      <div style={{ color: "green" }}>User data retrieved server-side (from Cookie in getServerSideProps):</div>
      <div>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<{ user: User }> = async ({ req }) => {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  if (!user) return { props: {}, redirect: { destination: "/", permanent: false } };
  return { props: { user } };
};
