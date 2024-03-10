import { IBackButton } from "@/types/AuthHeader";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const BackButton: React.FC<IBackButton> = ({ label, href }) => {
  return (
    <Button variant={"link"} className="font-normal w-full" size={"sm"} asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;
