import { fetchPosts } from "@/middlewareRequests/fetchPosts";
import { setPosts } from "@/store/slices/posts_slice";
import { wrapper } from "@/store/store";
import "@/styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

App.getInitialProps = wrapper.getInitialPageProps(
  (store) =>
    async ({ req }) => {
      const posts = await fetchPosts();
      store.dispatch(setPosts(posts));
      return {
        props: {
          data: "",
        },
      };
    }
);

export default wrapper.withRedux(App);
