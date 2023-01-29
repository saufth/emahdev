// React
import { useEffect, useLayoutEffect } from 'react'

/** Switch between useEffect and useLayoutEffect following the execution environment */
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

export default useIsomorphicLayoutEffect
