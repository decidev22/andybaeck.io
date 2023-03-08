import React, { useState, useEffect } from "react";
import {
  Content_Layout,
  Loading_Screen,
  Project,
  Nav_Bar,
} from "./components/index";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isProject, setProject] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  // const displayMain = () => {
  //   if (isLoading == true) {
  //     return <Loading_Screen />;
  //   }
  //   return <Content_Layout />;
  // };

  // const displayProject = () => {
  //   if (isProject == true) {
  //     return (
  //       <div>
  //         <Nav_Bar /> <Project />
  //       </div>
  //     );
  //   }
  //   return null;
  // };

  return (
    <div>
      <div>{isLoading ? <Loading_Screen /> : <Content_Layout />}</div>
    </div>
  );
};

export default App;
