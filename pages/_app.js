import "../styles/globals.css";
import { UserContext, BaseUri } from "../context/UserContext";
import Layout from "../components/admin/Layout";
// import { BaseUri } from "../../../../context/UserContext";

function MyApp({ Component, pageProps }) {
  const baseUri = "https://oic-management.herokuapp.com";
  return (
    <Layout>
      <BaseUri.Provider value={baseUri}>
        <Component {...pageProps} />
      </BaseUri.Provider>
    </Layout>
  );
}

export default MyApp;
