import styles from '@/styles/Home.module.scss'
import { Metadata } from 'next';
import BlogPost from './components/BlogPost';

export const metadata: Metadata = {
    title: "Hazel, that's me.",
    description: "",
    twitter: {
        title: "Hazel, that's me.",
        description: "",
        site: "hazelthats.me",
    }
}

const Home = () =>
    <div className={styles.main}>
        <div className={styles.profile}>
            <h1>{"Hazel, that's me."}</h1>
            <span className={styles.sub}>The blog of one girl with too many interests</span>
        </div>

        <div className={styles.posts}>
            <BlogPost
                href="./blog/2023-09-17"
                title="Starting a Blog"
                description="I'm starting a weekly blog for whoever wants to read it."
                date="September 17th, 2023"
                />
        </div>
    </div>

export default Home;
