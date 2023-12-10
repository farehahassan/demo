// components/Sidebar.js
import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        <ul>
          <li>
            <Link href="/admin/dashboard" className="block py-2 px-4">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/admin/skill" className="block py-2 px-4">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/admin/blog" className="block py-2 px-4">
              Blogs
            </Link>
          </li>
          {/* Add more sidebar links as needed */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
