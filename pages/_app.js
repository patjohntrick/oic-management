import "../styles/globals.css";
import { BaseUri } from "../context/UserContext";
import Layout from "../components/admin/Layout";

function MyApp({ Component, pageProps }) {
  const baseUri = "https://oic-management.herokuapp.com";
  // const baseUri = "http://localhost:5000";
  return (
    <Layout>
      <BaseUri.Provider value={baseUri}>
        <Component {...pageProps} />
      </BaseUri.Provider>
    </Layout>
  );
}

export default MyApp;
