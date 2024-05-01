import {useState} from 'react'
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

const Signup = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });

  const {loading, signup} = useSignup();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle signup logic here
    await signup(formData);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-none">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-2xl mb-4 text-center text-black font-semibold">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                Username
              </label>
              <input
                type="text"
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
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Gender</label>
              <div className="flex items-center mt-1">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="male" className="text-sm text-gray-700">
                  Male
                </label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  className="mx-4"
                />
                <label htmlFor="female" className="text-sm text-gray-700">
                  Female
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-lime-700 text-white p-2 rounded-md hover:bg-lime-900 mb-4"
             disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : 'Sign Up'}
            </button>
            <Link to="/login" className='hover:text-gray-700'>{"Already"} have an account?</Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup