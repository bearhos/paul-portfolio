"use client";

import { useEffect, useRef, useState } from "react";
import { CheckIcon, CopyIcon } from "@phosphor-icons/react";

export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
    timer.current = setTimeout(() => setStatus("idle"), 3500);
  }

  return (
    <div className="copy-email-wrap">
      <button
        type="button"
        className="copy-email"
        onClick={copy}
        aria-label="Copy email address"
      >
        {status === "copied" ? <CheckIcon size={19} /> : <CopyIcon size={19} />}
        <span>{status === "copied" ? "Copied!" : "Copy email"}</span>
      </button>
      <span role="status" className="copy-status">
        {status === "error"
          ? "Couldn't copy. You can select the email address above."
          : status === "copied"
            ? "Email address copied to clipboard."
            : ""}
      </span>
    </div>
  );
}
