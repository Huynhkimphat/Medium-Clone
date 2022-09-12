import Image from "next/image";
import Logo from "../static/logo.png";
import { FiBookmark } from "react-icons/fi";
import Link from "next/link";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const styles = {
    wrapper:
        "flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer",
    authorContainer: "flex gap-[.4rem]",
    authorImageContainer:
        "grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]",
    authorImage: "object-cover",
    authorName: "font-semibold",
    title: "font-bold text-2xl",
    briefing: "text-[#787878]",
    detailsContainer: "flex items-center justify-between text-[#787878]",
    articleDetails: "my-2 text-[.8rem]",
    category: "bg-[#F2F3F2] p-1 rounded-full",
    bookmarkContainer: "cursor-pointer",
    postDetails: "flex flex-[2.5] flex-col",
    thumbnailContainer: "flex-1",
};

const PostCard = ({ post }) => {
    const [authorData, setAuthorData] = useState(null, post);

    useEffect(() => {
        const getAuthorData = async () => {
            console.log(
                post.id,
                (await getDoc(doc(db, "users", post.data.author))).data()
            );
            setAuthorData(
                (await getDoc(doc(db, "users", post.data.author))).data()
            );
        };
        getAuthorData();
    }, [post]);

    return (
        <Link href={`/post/${post.id}`}>
            <div className={styles.wrapper}>
                <div className={styles.postDetails}>
                    <div className={styles.authorContainer}>
                        <div className={styles.authorImageContainer}>
                            <Image
                                src={authorData?.imageUrl}
                                className={styles.authorImage}
                                height={40}
                                width={40}
                                alt={""}
                            />
                        </div>
                        <div className={styles.authorName}>
                            {authorData?.name}
                        </div>
                    </div>
                    <h1 className={styles.title}>{post.data.title}</h1>
                    <div className={styles.briefing}>{post.data.brief}</div>
                    <div className={styles.detailsContainer}>
                        <span className={styles.articleDetails}>
                            {new Date(post.data.postedOn).toLocaleDateString(
                                "en-US",
                                { day: "numeric", month: "short" }
                            )}
                            • {post.data.postLength} mins read •
                            <span className={styles.category}>
                                {post.data.category}
                            </span>
                        </span>
                        <span className={styles.bookmarkContainer}>
                            <FiBookmark className="h-5 w-5" />
                        </span>
                    </div>
                </div>

                <div className={styles.thumbnailContainer}>
                    <Image
                        src={`https://res.cloudinary.com/demo/image/fetch/${post.data.bannerImage}`}
                        height={100}
                        width={100}
                        alt={""}
                    />
                </div>
            </div>
        </Link>
    );
};
export default PostCard;
