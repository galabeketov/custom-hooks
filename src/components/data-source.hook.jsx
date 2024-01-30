import { useEffect, useState } from "react";
export const useDataSource = (getData) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getData();
      setData(res);
    })();
  }, []);

  return data;
};
