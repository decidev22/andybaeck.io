import React, { useState, useEffect } from "react";

import { Content_Layout, Loading_Screen } from "./components/index";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return <div>{isLoading ? <Loading_Screen /> : <Content_Layout />}</div>;
};

export default App;
