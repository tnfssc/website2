import { Button, Icon, useBoolean, ButtonSpinner } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";
import { useUser } from "../contexts/user";
import supabase from "../initSupabase";

const AuthButton = () => {
  const { user } = useUser();
  const [isLoading, setLoading] = useBoolean(false);
  const handleSignIn = async () => {
    setLoading.on();
    await supabase.auth.signIn({ provider: "google" });
    setLoading.off();
  };
  const handleSignOut = async () => {
    setLoading.on();
    await supabase.auth.signOut();
    setLoading.off();
  };
  if (isLoading)
    return (
      <Button isFullWidth disabled>
        <ButtonSpinner />
      </Button>
    );
  if (!user)
    return (
      <Button isFullWidth onClick={handleSignIn} alignItems="center" display="flex" disabled={isLoading}>
        <Icon as={FaGoogle} mr="2" />
        Sign in with Google
      </Button>
    );
  return (
    <Button isFullWidth onClick={handleSignOut} disabled={isLoading}>
      Sign out
    </Button>
  );
};

export default AuthButton;
