import { loginClose} from '@/reduxStore/loginSlice';
import React from 'react'
import { useDispatch } from 'react-redux';
const Login = () => {
    const [formData, setFormdata] = React.useState({ email: "", password: "" })

    const dispatch = useDispatch();
// ----------------------------------------form data handling code----------------------------------------
    const handleChange = (e) => {
        setFormdata({ ...formData, [e.target.name]: e.target.value })
    }
// ----------------------------------------close button code----------------------------------------
    const handleClose = () => {
        dispatch(loginClose(false));
    }
// ----------------------------------------form handling code----------------------------------------
    const handleform = async (e) => {
        e.preventDefault();

        try {
            const sentData = await API.post('/register', formData);
            if (sentData.data.success) {
                alert(sentData.data.message);
                dispatch(loginpageStatus(false));
            } else {
                alert(sentData.data.message);
            }
        } catch (error) {
            alert("Network Error - backend not reachable");
        }
    };
// ----------------------------------------JSX code----------------------------------------
    return (
        <div>
            <div className='relative flex items-center w-full '>
                <div className='text-shadow-sky-950 text-2xl mx-auto'>Admin Login</div>
                <div onClick={handleClose} className='absolute right-2 px-2 text-shadow-sky-950 text-2xl bg-amber-400 cursor-pointer'>X</div>
            </div>
            <div>
                <form onSubmit={handleform} className='flex flex-col justify-center items-center ' >
                    <input
                        name='email'
                        type="text"
                        placeholder='Enter email'
                        onChange={handleChange}
                        value={formData.email}
                        className='p-1 m-2 rounded-[5px] border-2 border-bs-indigo-950'
                    />

                    <input
                        name='password'
                        type="password"
                        placeholder='Password'
                        value={formData.password}
                        onChange={handleChange}
                        className='p-1 m-2 rounded-[5px] border-2 border-bs-indigo-950'
                    />
                    <button type='submit' className='bg-blue-500 text-white p-2 rounded-lg'>Login</button>
                </form>
            </div>
            
        </div>
    )
}

export default Login