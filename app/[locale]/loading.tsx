import React from "react";
import Spinner from "@/components/ui/Spinner";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/30 backdrop-blur-sm z-[9999]">
      <Spinner />
    </div>
  );
}
