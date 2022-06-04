import "../styles/globals.css";
import { UserContext, BaseUri } from "../context/UserContext";
import Layout from "../components/admin/Layout";
// import { BaseUri } from "../../../../context/UserContext";

function MyApp({ Component, pageProps }) {
  const baseUri = "http://localhost:5000";
  return (
    <Layout>
      <BaseUri.Provider value={baseUri}>
        <Component {...pageProps} />
      </BaseUri.Provider>
    </Layout>
  );
}

export default MyApp;
