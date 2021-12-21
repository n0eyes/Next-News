import React from "react";
import { useRouter } from "next/router";
export default function aaa() {
  const router = useRouter();
  console.log(router);
  return <div>aaa</div>;
}
