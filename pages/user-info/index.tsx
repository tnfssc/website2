import useSWR from "swr";
import { useUser } from "../../src/contexts/user";
import { Box } from "@chakra-ui/react";
import { User } from "@supabase/supabase-js";

const UserInfo = () => {
  const { user, session } = useUser();
  const { data, error } = useSWR<User | null, string | null>(session ? ["/api/getUser", session.access_token] : null);
  return (
    <Box>
      <pre>{JSON.stringify({ user }, null, 2)}</pre>
      <pre>{JSON.stringify({ session }, null, 2)}</pre>
      <pre>{JSON.stringify({ data }, null, 2)}</pre>
      <pre>{JSON.stringify({ error }, null, 2)}</pre>
    </Box>
  );
};

export default UserInfo;
