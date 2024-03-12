import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Poppins({ subsets: ["latin"], weight: ["600"] });

import React from "react";
import { IAuthHeaderProps } from "@/types/AuthHeader";

const AuthHeader: React.FC<IAuthHeaderProps> = ({ label }) => {
  return (
    <div className="w-full flex gap-y-4 flex-col items-center justify-center">
      <h1 className={cn("text-3xl font-semibold", font.className)}>🔐 Auth</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

export default AuthHeader;
