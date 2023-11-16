import styles from '@/styles/Home.module.scss'
import { Metadata } from 'next';

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
            <h1><a href='./name'>Hazel</a>{", that's me."}</h1>
        </div>
    </div>

export default Home;
