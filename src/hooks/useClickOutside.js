import { useCallback, useEffect, useState } from "react";

export const useClickOutside = (refEle) => {
  const [show, setShow] = useState(false);

  const handleClickOutside = useCallback(
    (event) => {
      if (!refEle || !refEle.current || refEle.current.contains(event.target)) {
        return;
      }
      setShow(false);
    },
    [refEle]
  );
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [handleClickOutside]);

  return { show, setShow };
};
