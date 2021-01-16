import { useEffect, useState } from 'react'

const useInfiniteScroll = (callback: any) => {
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isFetching) {
      return
    }
    callback()
    setIsFetching(false)
  }, [isFetching])

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) {
      return
    }
    setIsFetching(true)
  }

  return
}

export default useInfiniteScroll
