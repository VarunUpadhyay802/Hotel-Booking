import { createContext, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from 'prop-types'; // Import PropTypes

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!user) {
      axios.get('/profile').then(({ data }) => {
        setUser(data);
        setReady(true);
      });
    }
  });

  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}

// Add prop types validation
UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
