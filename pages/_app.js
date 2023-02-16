import Layout from "../components/Main";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <div>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
