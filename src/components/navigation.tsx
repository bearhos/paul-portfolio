"use client";

import { useEffect, useState } from "react";
import { ArrowUpRightIcon, ListIcon, XIcon } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";

const links = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-15% 0px -55% 0px" },
    );
    for (const { href } of links) {
      const element = document.querySelector(href);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <nav className="nav-inner shell" aria-label="Main navigation">
        <a className="wordmark" href="#home" aria-label="phuoc. Back to top">
          phuoc<span>.</span>
        </a>
        <div className="desktop-nav">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={
                active === link.href ? "nav-link is-active" : "nav-link"
              }
              aria-current={active === link.href ? "location" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a className="nav-contact" href="#contact">
          Start a conversation <ArrowUpRightIcon size={17} />
        </a>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button
              className="icon-button mobile-menu-button"
              aria-label="Open navigation"
            >
              <ListIcon size={24} />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="dialog-overlay" />
            <Dialog.Content className="mobile-menu">
              <Dialog.Title className="wordmark">
                phuoc<span>.</span>
              </Dialog.Title>
              <Dialog.Description className="sr-only">
                Navigate the portfolio
              </Dialog.Description>
              <Dialog.Close asChild>
                <button
                  className="icon-button dialog-close"
                  aria-label="Close navigation"
                >
                  <XIcon size={22} />
                </button>
              </Dialog.Close>
              {[...links, { label: "Contact", href: "#contact" }].map(
                (link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                    <ArrowUpRightIcon size={24} />
                  </a>
                ),
              )}
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </nav>
    </header>
  );
}
