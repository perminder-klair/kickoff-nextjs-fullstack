'use client'
import { useForm } from 'react-hook-form'
import shallow from 'zustand/shallow'
import { useStore } from '../../../lib/store'

const useIsLoggedIn = () => {
  return useStore(
    (store: any) => ({
      isLoggedIn: store.isLoggedIn,
      setIsLoggedIn: store.setIsLoggedIn,
    }),
    shallow
  )
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { isLoggedIn, setIsLoggedIn } = useIsLoggedIn()

  const onSubmit = (data: any) => {
    console.log(data)
    setIsLoggedIn(true)
  }

  return (
    <div className="w-full max-w-xs">
      <h1>Is Logged In: {isLoggedIn ? 'Yes' : 'No'}</h1>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Your Email
          </label>
          <input
            {...register('email', { required: true })}
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Your Email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">Email is required.</p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Password
          </label>
          <input
            {...register('password', { required: true })}
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="*******"
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic">Password is required.</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
