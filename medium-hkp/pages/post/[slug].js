import ReadersNav from "../../components/ReadersNav.js";
import Recommendations from "../../components/Recommendations.js";
import ArticleMain from "../../components/ArticleMain.js";
import { useContext, useEffect, useState } from "react";
import { MediumContext } from "../../context/MediumContext";
import { useRouter } from "next/router";

const styles = {
    content: `flex`,
};

const Post = () => {
    const { posts, users } = useContext(MediumContext);
    const router = useRouter();
    const [post, setPost] = useState([]);
    const [author, setAuthor] = useState([]);

    useEffect(() => {
        if (posts.length === 0) return;
        setPost(posts.find((post) => post.id === router.query.slug));
        setAuthor(users.find((user) => user.id === post?.data?.author));
    }, [post?.data?.author, posts, router.query.slug, users]);

    return (
        <div className={styles.content}>
            <ReadersNav />
            <ArticleMain post={post} author={author} />
            <Recommendations />
        </div>
    );
};
export default Post;
