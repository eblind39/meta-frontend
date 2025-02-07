import { useEffect, useRef } from "react";

function usePrevious(val: any) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current = val
  }, [val])

  return ref.current;
}

export default usePrevious;