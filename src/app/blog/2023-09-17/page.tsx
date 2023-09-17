import { Metadata } from 'next';

const postData: any = {
    title: "Starting a Blog",
    description: "I'm starting a weekly blog for whoever wants to read it."
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
<>
    <h1>{postData.title}</h1>
    <p>Hiya,</p>
    <p>{`
        Since I have gotten clearance for my job, I can finally update this site! Going forward, this will be my new blog, it's where I will write a weekly post about what's on my mind.
        Posts will include looks into past ventures like game design, web engineering, event organization, maybe some random personal stuff I feel like sharing. All in good fun, I hope!
    `}</p>
    <p>
        {"I'll probably post links to new posts on my "}
        <a href='https://www.twitter.com/hazelthatsme'>Twitter</a>
        {" (it's not X, no one calls it that), so if you want to keep up to date with this, that's your best bet!"}</p>
    <p>Sincerely, Hazel</p>
</>

export default Post;
