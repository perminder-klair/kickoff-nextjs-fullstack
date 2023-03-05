/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react'

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
const useInterval = (callback: unknown, delay: unknown) => {
  const savedCallback = useRef()
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])
  useEffect(() => {
    const handler = (...args: any[]) => savedCallback.current(...args)

    if (delay !== null) {
      const id = setInterval(handler, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export default useInterval
