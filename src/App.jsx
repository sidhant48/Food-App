import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useEffect, useState } from "react";

function App() {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Sidhant",
    };
    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    </UserContext.Provider>
  );
}

export default App;
