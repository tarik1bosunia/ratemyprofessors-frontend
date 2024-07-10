"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface Tab {
  name: string;
  path: string;
}

interface AccountTabsProps {
  initialActiveTab: string;
}

export default function UserPagesTabs({ initialActiveTab }: AccountTabsProps) {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);

  const tabs = [
    { name: "Profile", path: "/account/profile" },
    { name: "Settings", path: "/account/settings" },
    { name: "Your Ratings", path: "/account/ratings" },
    { name: "Saved Professors", path: "/account/saved-professors" },
  ];


  return (
    <div className="border-b border-gray-400 flex mx-auto max-w-[755px] overflow-auto whitespace-nowrap">
      
       
          {
          tabs.map((tab) => (
            <div key={tab.name} role="tab" className={`
            cursor-pointer flex mr-14 px-3
            ${activeTab === tab.path
              ? "border-b-2 border-gray-900 tracking-wide"
              : "tracking-tighter"
            }
            `}>
            <Link
              
              href={tab.path}
              className={`font-sans text-base leading-8 hover:font-bold hover:tracking-wide hover:word-spacing-[0.05em] ${
                activeTab === tab.path
                  ?"font-bold"
                  : ""
              }`}
            >
              {tab.name}
            </Link>
            </div>
          ))}

   
    </div>
  );
}
