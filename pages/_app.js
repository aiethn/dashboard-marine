import { configureStore } from "@reduxjs/toolkit";
import { Layout } from "../sections/Layout";
import userReducer from "../features/User";
import pagesReducer from "../features/Pages";
import "../styles/globals.css";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    user: userReducer,
    pages: pagesReducer,
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
