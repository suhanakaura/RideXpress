import React from "react";

const UserLogin = () => {
  return (
    <div className="p-7">
      <form>
        <h3 className="text-lg mb-2 font-medium">What's your email?</h3>
        <input className="bg-[#eeeeee] rounded px-4 py-2 border mb-7 text-lg w-full placeholder:text-base" required type="email" placeholder="email@example.com" />
        <h3 className="text-lg mb-2 font-medium">Enter Password</h3>
        <input className="bg-[#eeeeee] rounded px-4 py-2 border mb-7 text-lg w-full placeholder:text-base" required type="password" placeholder="***" />
        <button className="bg-[#111] font-semibold rounded px-4 py-2 mb-7 text-white w-full">login</button>
      </form>
    </div>
  );
};

export default UserLogin;
