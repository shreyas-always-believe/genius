"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("b29fa8d4-6975-460f-8e6c-2e485a856171");
  }, []);
  return null;
};
