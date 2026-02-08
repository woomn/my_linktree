'use client';

import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Heroform() {
    useEffect(() => {
        if (
            'localStorage' in window && window.localStorage.getItem('desiredUsername')
        ) {
            const username = window.localStorage.getItem('desiredUsername');
            window.localStorage.removeItem('desiredUsername');
            redirect('/account?desiredUsername=' + username);
        }
    }, []);
    async function handleSubmit(ev) {
        ev.preventDefault();
        const from = ev.target;
        const input = from.querySelector('input');
        const username = input.value;
        if (username.length > 0) {
            window.localStorage.setItem('desiredUsername', username);
            await signIn('google');
        }
    }
  return (
    <form 
    onSubmit={handleSubmit}
    className="inline-flex items-center shadow-lg shadow-gray500/20 rounded-xl overflow-hidden">
      <span className="bg-white py-4 pl-4">my linktree.to/</span>
      <input
      type="text" className="py-4 bg-white" placeholder="username" />
      <button 
      type="submit" 
      className="bg-blue-500 text-white py-4 px-6">
        Get Started
      </button>
    </form>
  );
}
