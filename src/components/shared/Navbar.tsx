import Image from 'next/image'
import logo from '@/assets/book.ico'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li>
          <a>Listed Books</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Pages to read</a></li>
      </ul>
    </div>
    <div className='flex gap-2 items-center'>
         <Image src={logo} alt='' width={32} height={32} />
        <h1 className='text-xl font-bold'>Book Vibe</h1>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex p-2">
    <ul className="menu menu-horizontal px-1 text-xl font-medium">
      <li className='border border-green-500 rounded-md text-green-500'><a>Home</a></li>
      <li>
        <details>
          <summary>Listed Books</summary>
        </details>
      </li>
      <li><a>Pages to read</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-3 p-5">
    <button className="btn btn-active btn-success text-xl">Sign In</button>
    <button className="btn btn-active btn-accent text-xl">Sign Up</button>
  </div>
</div>
  )
}

export default Navbar