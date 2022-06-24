import { useState } from "react";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div className="w-48 absolute top-0 left-0 h-screen">
      {!showSidebar && (
        <button title="toggle sidebar" type="button" onClick={toggleSidebar}>
          =
        </button>
      )}
      {showSidebar && (
        <div>
          <h3>Sidebar</h3>
          <button
            className="absolute right-0 top-0"
            title="toggle sidebar"
            type="button"
            onClick={toggleSidebar}
          >
            X
          </button>
          <ul className="list-disc list-inside">
            <li>Menu 1</li>
            <li>Menu 2</li>
            <li>Menu 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export { Sidebar };
