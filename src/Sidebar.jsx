import React, { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const menus = [
    { title: "Dashboard", icon: "ri-dashboard-line" },
    { title: "Profile", icon: "ri-user-line" },
    { title: "Messages", icon: "ri-message-2-line" },
    { title: "Settings", icon: "ri-settings-3-line" },
    { title: "Logout", icon: "ri-logout-box-line" },
  ];

  return (
    <div
      className={`${
        open ? "w-60" : "w-20"
      } bg-[#2f3136] h-screen p-4 text-white transition-all duration-300`}
    >
      {/* Toggle Button */}
      <div className="flex justify-end">
        <i
          className="ri-menu-line cursor-pointer text-xl"
          onClick={() => setOpen(!open)}
        ></i>
      </div>

      {/* Menu Items */}
      <ul className="mt-6 space-y-3">
        {menus.map((menu, i) => (
          <li
            key={i}
            className="flex items-center gap-4 p-2 hover:bg-[#3a3d42] rounded-lg cursor-pointer transition-all duration-200"
          >
            <i className={`${menu.icon} text-lg`}></i>
            {open && <span className="text-sm">{menu.title}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
