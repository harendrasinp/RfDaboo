"use client"
import { useSelector} from 'react-redux'

import Login from '../common_components/login';
const AdminLogin = () => {
  const visible = useSelector((state) => state.loginpage.pageStatus);
  if (visible) {
    return (
      <div className=' bg-gray-800/35 backdrop-blur-md w-96 py-2  flex flex-col items-center gap-5 rounded-lg mt-10 mx-auto'>
        {visible &&<Login/>}
      </div>
    )
  }
  return null;
}

export default AdminLogin