"use client";

import { useRef } from "react";

export function MobileMenu() {
  const menu = useRef<HTMLDetailsElement>(null);
  return (
    <details className="mobile-menu" ref={menu}>
      <summary>Menu <span aria-hidden="true">+</span></summary>
      <nav
        aria-label="Mobile navigation"
        onClick={(event) => {
          if ((event.target as HTMLElement).closest("a") && menu.current) {
            menu.current.open = false;
          }
        }}
      >
        <a href="#datasets">Datasets</a>
        <a href="#research">Research</a>
        <a href="#releases">Releases</a>
        <a href="https://www.datacruiser.ai/">DataCruiser website ↗</a>
      </nav>
    </details>
  );
}
