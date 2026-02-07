'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { signIn} from "next-auth/react";

export function LoginWithGoogleButton() {
  return (
    <button
      onClick={() => signIn('google')}
      className="bg-white shadow text-center w-full py-4 flex gap-2 items-center justify-center">
      <FontAwesomeIcon icon={faGoogle} className="text-2xl" />
      <span>Sign in with Google</span>
    </button>
  );
}
