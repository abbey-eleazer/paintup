import { NavLink } from "react-router";

export const NavBar = () => {
 const getNavClass = ({ isActive }) =>
   `flex-1 h-12 flex items-center justify-center rounded-lg border border-gray-400 text-sm transition-colors ${
     isActive
       ? "bg-yellow-400 font-bold text-gray-900 shadow-sm"
       : "bg-gray-100 font-medium text-gray-600 hover:bg-gray-200"
   }`;

  return (
    <>
      <nav className="w-full flex justify-end items-center px-4 ">
        <ul className="flex gap-2 justify-between items-center w-full text-center">
          <NavLink to="/estimate" className={getNavClass}>
            <li>Estimate</li>
          </NavLink>

          <NavLink to="/sites" className={getNavClass}>
            <li>Site</li>
          </NavLink>

          <NavLink
            to="/inventory"
            active="bg-black text-white border-0"
            className={getNavClass}
          >
            <li>Inventory</li>
          </NavLink>

          <NavLink to="/teams" className={getNavClass}>
            <li>Team</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};
