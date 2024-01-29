 
export default function Page() {
  return (
    <form className="flex flex-col justify-center items-center gap-10 pt-10">
      <input 
        className="appearance-none border rounded py-2 px-3 focus:outline-none" 
        type="email" 
        name="email" 
        placeholder="Email" 
        required 
      />
      <input className="appearance-none border rounded py-2 px-3 focus:outline-none" type="text" name="username" placeholder="Username" required />
      <input className="appearance-none border rounded py-2 px-3 focus:outline-none" type="password" name="password" placeholder="Password" required />
      <button className="bg-black px-20 py-2 rounded text-white" type="submit">Log in</button>
    </form>
  );
}
