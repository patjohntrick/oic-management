import "../styles/globals.css";
import { UserContext } from "../context/UserContext";

function MyApp({ Component, pageProps }) {
  const baseUri = "http://localhost:5000";
  return (
    <UserContext.Provider value={baseUri}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
