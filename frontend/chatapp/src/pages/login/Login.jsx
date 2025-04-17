import {useState} from 'react'
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const {loading, login} = useLogin();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData)
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-none opacity-100 relative z-50  ">
        <div className="bg-white p-8 shadow-md w-full max-w-md rounded-xl">
          <h2 className="text-2xl mb-4 text-black text-center font-semibold">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Username
              </label>
              <input
                type="username"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <button
              type="submit"
              className="xl:w-full md:w-full md:mt-5 md:h-10 md:mb-5 bg-lime-700  xl:mt-5 text-white font-semibold xl:p-2 rounded-md hover:bg-lime-900 xl:*:mb-4"
             disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : "Login" }
            </button>
            <Link to="/signup" className='hover:text-gray-700'>{"Don't"} have an account?</Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login