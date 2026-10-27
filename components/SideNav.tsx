"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, Dot } from "lucide-react";
import { useState } from "react";

export default function SideNav() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const items = [
    {
      name: "Medical Assistant",
      children: [
        { name: "Overview", link: "/ma" },
        { name: "Intake", link: "/ma/intake" },
        { name: "Botox", link: "/ma/rooming" },
        { name: "Nerveblock", link: "/ma/nerveblock" },
        { name: "Patient Cases", link: "/ma/patientcases" },
      ],
    },
    {
      name: "Front Desk",
      children: [
        { name: "Overview", link: "/frontdesk" },
        { name: "Scheduling", link: "/frontdesk/scheduling" },
        { name: "Check In", link: "/frontdesk/checkin" },
      ],
    },
    {
      name: "Residents",
      children: [
        { name: "Overview", link: "/residents" },
        { name: "Schedules", link: "/residents/schedules" },
      ],
    },
    {
      name: "Residency Coordinator",
      children: [
        { name: "Overview", link: "/residency" },
        { name: "Tasks", link: "/residency/tasks" },
      ],
    },
    {
      name: "Employee Handbook",
      link: "/New Hire-Employee Forms_Fillable Template 2025.pdf",
      external: true,
    },
  ];

  return (
    <aside className="w-56 shrink-0 border-r border-slate-200 bg-black">
      <nav className="p-3">
        <div className="flex flex-col gap-1">
          {items.map((item) => {
            
            // External link
            if (item.external) {
              return (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex w-full items-center justify-between
                    rounded-lg px-4 py-3
                    text-sm font-medium text-[#9ba6ba]
                    transition-colors duration-200
                    hover:bg-[#172131] hover:text-slate-200
                  "
                >
                  {item.name}

                  <Dot className="h-5 w-5" />
                </a>
              );
            }

            const isOpen = openMenu === item.name;

            return (
              <div key={item.name}>
                
                {/* Main category */}
                <button
                  onClick={() =>
                    setOpenMenu(isOpen ? null : item.name)
                  }
                  className="
                    flex w-full items-center justify-between
                    rounded-lg px-4 py-3
                    text-sm font-medium text-[#9ba6ba]
                    transition-colors duration-200
                    hover:bg-[#172131] hover:text-slate-200
                  "
                >
                  <span>{item.name}</span>

                  {isOpen ? (
                    <ChevronDown className="h-5 w-5" />
                  ) : (
                    <ChevronRight className="h-5 w-5" />
                  )}
                </button>

                {/* Dropdown */}
                {isOpen && (
                  <div className="ml-4 flex flex-col gap-1">
                    {item.children?.map((child) => {
                      const isActive = pathname === child.link;

                      return (
                        <Link
                          key={child.link}
                          href={child.link}
                          className={`
                            rounded-lg px-4 py-2
                            text-sm transition-colors duration-200
                            ${
                              isActive
                                ? "bg-[#1c2635] text-slate-200"
                                : "text-[#9ba6ba] hover:bg-[#172131] hover:text-slate-200"
                            }
                          `}
                        >
                          {child.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}