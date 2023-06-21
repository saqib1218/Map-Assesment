import {  useState } from "react";

const useResizeObserver = ref => {
  const [dimensions] = useState(null);
  return dimensions;
};

export default useResizeObserver;
