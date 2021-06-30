import Page from "../components/Page";
import { getAllPosts } from "../services/sanity";
import Box from "../components/Box";

const Home = ({ allPosts }) => {
  const heroPost = allPosts[0];

  return (
    <Page>
      <Box m="1">
        {heroPost.title}
      </Box>
    </Page>
  );
};

export default Home;

export async function getStaticProps() {
  const allPosts = await getAllPosts();

  return {
    props: { allPosts }
  };
}