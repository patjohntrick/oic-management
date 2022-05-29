import "../styles/globals.css";
import { UserContext, BaseUri } from "../context/UserContext";

function MyApp({ Component, pageProps }) {
  const baseUri = "http://localhost:5000";
  return (
    <BaseUri.Provider value={baseUri}>
      <Component {...pageProps} />
    </BaseUri.Provider>
  );
}

export default MyApp;
