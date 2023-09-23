import { useRef, useEffect, useState } from "eact";

function useElementMargin(ref) {
  const [margins, setMargins] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const element = ref.current;
    const style = window.getComputedStyle(element);

    setMargins([
      parseInt(style.marginTop),
      parseInt(style.marginRight),
      parseInt(style.marginBottom),
      parseInt(style.marginLeft),
    ]);
  }, [ref]);

  return margins;
}
