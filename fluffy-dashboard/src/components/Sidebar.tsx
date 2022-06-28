import { useState } from "react";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <>
      {!showSidebar && (
        <div className="absolute top-0 mx-5">
          <button title="toggle sidebar" type="button" onClick={toggleSidebar}>
            =
          </button>
        </div>
      )}
      {showSidebar && (
        <div className="w-48 fixed top-0 left-0 h-screen bg-yellow-200">
          <h3>Sidebar</h3>
          <button
            className="absolute right-0 top-0 px-3"
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
    </>
  );
};

export { Sidebar };
