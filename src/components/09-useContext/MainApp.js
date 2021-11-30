import React, { useState } from "react";
import { RouteApp } from "./RouteApp";
import { UserContext } from "./UserContext";

export const MainApp = () => {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <RouteApp />;
    </UserContext.Provider>
  );
};
