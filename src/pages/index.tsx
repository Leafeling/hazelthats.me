import Head from 'next/head'
import styles from '@/styles/Home.module.scss'

const Home = () =>
<>
    <Head>
        <title>{"Hazel, that's me."}</title>
        <meta name="description" content="Hazel is a software developer working in the development of video games and web applications." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:," />
    </Head>

    <main className={`${styles.main}`}>
        <div className={styles.profile}>
            <h1>{"Hiya, I'm Hazel."}</h1>
            <p>
                {"I'm a "}
                <a target="_blank" href="https://theopensource.company">software developer at The Open Source Company</a>
                {", working in the development of video games and web applications."}
            </p>
            <p>My official name is Morgan, but I prefer Hazel as a calling name.</p>

            <h2>Game Development</h2>
            <ul className={styles.list}>
                <li><a target='_blank' href='https://celesteia.com'>Celesteia</a>, a 2D sandbox game set on alien planets.</li>
            </ul>

            <h2>Web Development</h2>
            <ul className={styles.list}>
                <li><a target='_blank' href='https://theopensource.company/'>The Open Source Company</a>{"'s website."}</li>
                <li><a target='_blank' href='https://leafal.io/'>leafal.io</a>, a game distribution platform aiming to make gaming more social.</li>
                <li><a target='_blank' href='https://playrbase.app/'>PlayrBase</a>, an open-source event and tournament management platform.</li>
            </ul>

            <h2>Online Presence</h2>
            <ul className={styles.list}>
                <li><a target='_blank' href='https://github.com/leafeling'>GitHub</a></li>
                <li><a target='_blank' href='https://tumblr.com/leafeling'>Tumblr</a></li>
                <li><a rel='me' target='_blank' href='https://tech.lgbt/@leafeling'>Mastodon (tech.lgbt)</a></li>
                <li><a target='_blank' href='https://www.youtube.com/MorganHofmann'>{"YouTube (as 'Morgan')"}</a></li>
            </ul>
        </div>
    </main>
</>

export default Home;
