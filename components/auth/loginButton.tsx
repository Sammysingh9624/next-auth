"use client";
interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "redirect" | "popup";
  asChild?: boolean;
}
import React from "react";
import { useRouter } from "next/navigation";

const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const navigation = useRouter();
  const onClick = () => {
    navigation.push("/auth/login", {});
  };
  if (mode === "popup") {
    return <span onClick={onClick}>Not children</span>;
  }
  return <span onClick={onClick}>{children}</span>;
};

export default LoginButton;
