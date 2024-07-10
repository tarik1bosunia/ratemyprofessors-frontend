'use client'
import { logout } from "@/redux/fetures/authSlice"
import { useAppDispatch } from "@/redux/hooks"



const MyAccountDropdown = () => {
  const dispatch = useAppDispatch()
  const handleLogout = () =>{
      dispatch(logout())
  }
  return (
    <div className="absolute -left-12 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
      <a href="/account/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Profile</a>
      <a href="/account/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Account Settings</a>
      <a href="/account/your-ratings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Ratings</a>
      <a href="/account/saved-professors" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Saved professors</a>
      <button type="button" onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Logout</button>
    </div>
  </div>
  )
}

export default MyAccountDropdown