"use client";

import { useContext } from "react";
import { contextProvider } from "../UserAuthentication/page";

export default function Child() {
  const { isLoggedIn, username, login } = useContext(contextProvider);

  return (
    <main>
      {isLoggedIn ? (
        <h2>Welcome {username}!</h2>
      ) : (
        <>
          <h3>Please Login</h3> <button onClick={login}> Log In </button>
        </>
      )}
    </main>
  );
}
