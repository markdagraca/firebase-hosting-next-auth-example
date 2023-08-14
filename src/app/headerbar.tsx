import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function SiteBar() {
  const { data: session, status } = useSession();
  let button;
  if (status === "loading") {
    button = null;
  } else if (session) {
    button = (
      <button onClick={() => signOut()} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Sign Out
      </button>
    );
  } else {
    button = (
      <button onClick={() => signIn()} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Log In
      </button>
    );
  }

  return (
    <div className="flex justify-between items-center bg-blue-500 p-6 text-white w-full">
      <div className="flex items-center">
      </div>
      <div>
        {button}
      </div>
    </div>
  );
}
