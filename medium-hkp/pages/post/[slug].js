import ReadersNav from "../../components/ReadersNav.js";
import Recommendations from "../../components/Recommendations.js";
import ArticleMain from "../../components/ArticleMain.js";

const styles = {
    content: `flex`,
};

const Post = () => {
    return (
        <div className={styles.content}>
            <ReadersNav />
            <ArticleMain />
            <Recommendations />
        </div>
    );
};
export default Post;
