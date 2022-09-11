import Image from "next/image";
import Logo from "../static/logo.png";
import { FiBookmark } from "react-icons/fi";
import Link from "next/link";

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
    articalDetails: "my-2 text-[.8rem]",
    category: "bg-[#F2F3F2] p-1 rounded-full",
    bookmarkContainer: "cursor-pointer",
    postDetails: "flex flex-[2.5] flex-col",
};

const PostCard = () => {
    return (
        <Link href={`/post/123`}>
            <div className={styles.wrapper}>
                <div className={styles.postDetails}>
                    <div className={styles.authorContainer}>
                        <div className={styles.authorImageContainer}>
                            <Image
                                src={Logo}
                                className={styles.authorImage}
                                height={40}
                                width={40}
                                alt={""}
                            />
                        </div>
                        <div className={styles.authorName}>HKP</div>
                    </div>
                    <h1 className={styles.title}>
                        7 Free Tools That Will Make You More Productive In 2022.
                    </h1>
                    <div className={styles.briefing}>
                        Productivity is a skill that can be learned
                    </div>
                    <div className={styles.detailsContainer}>
                        <span className={styles.articalDetails}>
                            Jun 15 • 5 mins read •
                            <span className={styles.category}>
                                productivity{" "}
                            </span>
                        </span>
                        <span className={styles.bookmarkContainer}>
                            <FiBookmark className="h-5 w-5" />
                        </span>
                    </div>
                </div>

                <div className={styles.thumbnailContainer}>
                    <Image src={Logo} height={100} width={100} alt={""} />
                </div>
            </div>
        </Link>
    );
};
export default PostCard;
