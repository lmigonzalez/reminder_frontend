import React from 'react'

function Login() {
  return (
    <div>
    <h1 className="my-5 text-4xl">Reminder</h1>
    <form className="bg-[#2C3333] w-[400px] max-w-full m-auto p-10">
      <h2 className="text-white text-start mb-2">Login</h2>
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <button className="bg-[#59CE8F] text-white w-full px-4 py-1 mb-2">
        Submit
      </button>
      <button className="bg-[#E64848] text-white w-full px-4 py-1">
        Cancel
      </button>
    </form>
  </div>
  )
}

export default Login