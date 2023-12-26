import { Metadata } from 'next';
import styles from '@/styles/Name.module.scss';

const postData: any = {
    title: "What's up with your name?",
    description: "Morgan is my legal name, Hazel is my preferred name, which one you end up using doesn't really matter."
}

export const metadata: Metadata = {
    title: postData.title,
    description: postData.description,
    twitter: {
        title: postData.title,
        description: postData.description,
        site: "hazelthats.me",
    }
}

const Post = () =>
    <div className={styles.post}>
        <a href='/'>Back to root</a>
        <h1>{postData.title}</h1>
        <p>Hiya,</p>
        <p>{`
            Over the past few months I've been getting a lot of questions about my name, then I saw one of my co-workers pull up my GitHub which had Hazel plastered all 
            over it. So here's the deal.
        `}</p>
        <p>{`
            A few months back I went through some revelations about my identity, who I truly wanted to be. I was already transitioning from male to female, and already
            had my legal name and gender changed to accommodate it, keeping my first name, Morgan.
        `}</p>
        <p>{`
            I ended up finding out after some experimentation within friend groups that I found the name Hazel a lot more fitting personally. In the end, I don't really
            care all too much what you end up calling me, it's also very unlikely that I'd go through the process of changing it legally. I just have a preference for 
            Hazel as a calling name ('roepnaam' in Dutch).
        `}</p>
        <p>Sincerely, Morgan/Hazel</p>
    </div>

export default Post;
