"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Folder, Home, Settings, ChevronRight, Dot } from "lucide-react";
import { useState } from 'react';

export default function SideNav() {
  const pathname = usePathname();

  const items = [
    { name: "Medical Assistant", link: "/ma", icon: ChevronRight},
    { name: "Front Desk", link: "/frontdesk", icon: ChevronRight},
    { name: "Residents", link: "/residents", icon: ChevronRight},
    { name: "Residency Coordinator", link: "/residency", icon: ChevronRight},
    { name: "Employee Handbook", link: "/New Hire-Employee Forms_Fillable Template 2025.pdf", icon: Dot,external: true },
  ];

  return (
    <aside className="w-56 shrink-0 border-r border-slate-200 bg-[#000000]">
      <nav className="p-3">
        <div className="flex flex-col gap-1">
          {items.map((item) => {
            const isActive = pathname === item.link;
            const Icon = item.icon;


            if (item.external) {
              return (
                <a
                key={item.link}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex w-full items-center rounded-lg px-4 py-3
                  text-sm font-medium text-[#9ba6ba]
                  transition-colors duration-200
                  hover:bg-[#172131] hover:text-slate-200
                "
              >
                {item.name}
                <Icon className="w-5 h-5" />
              </a>
              
            );
          }

            return (
              
              <Link
                key={item.link}
                href={item.link}
                className={`
                  flex w-full items-center rounded-lg px-4 py-3
                  text-sm font-medium transition-colors duration-200
                  ${
                    isActive
                      ? "bg-[#1c2635] text-slate-200"
                      : "text-[#9ba6ba] hover:bg-[#172131] hover:text-slate-200"
                  }
                `}
              >
                {item.name}
                <Icon className="w-5 h-5" />
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}

