"use client";

import { useUserContext } from "@/providers/UserProvider";

const LoginPage = () => {
  const { user, userLoginHandler } = useUserContext();

  return <div>{user.email}</div>;
};

export default LoginPage;
