// import the useContext hook
import React, { useContext } from "react";
// import the UserContext we created
import { UserContext } from "../context/user";
import Interests from "./Interests";

function Profile({ theme }) {
  const { user } = useContext(UserContext);

  // now, we can use the user object just like we would if it was passed as a prop!
  console.log(user);
  if (!user) return <h2>Please Login To View Profile</h2>;
  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <Interests interests={user.interests} theme={theme} />
    </div>
  );

  function UserProvider({ children }) {
    const currentUser = {
      name: "Duane",
      interests: ["Coding", "Biking", "Words ending in 'ing'"],
    };
    return (
      <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
    );
  }
}

export default Profile;
