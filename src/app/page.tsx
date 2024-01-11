import * as React from 'react'

import styles from '@/styles/Home.module.scss'
import { Metadata } from 'next';
import Image from 'next/image';
import { ProjectTile } from './components/ProjectTile';

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
        <h1><a href='./name'>Hazel</a>{", that's me."}</h1>

        <h2>{`Here's what I've worked on.`}</h2>

        <div className={styles.showcase}>
            <ProjectTile background='url(/projects/celesteia.jpg)' links={
                <a href='//www.celesteia.com'>Visit celesteia.com</a>
            }>
                <h1>Celesteia</h1>
                <i>{`
                    Game made using C# (MonoGame), website made using JavaScript (React).
                `}</i>
                <p>{`
                    A 2D sandbox game featuring procedural world generation and resource management systems, presented as my final high school 
                    project. The method of managing the project has changed the teaching methods of computer science at the school, acting as
                    an approachable project management method. This project won the school's award for Best Project in the Sciences.
                `}</p>
            </ProjectTile>
            <ProjectTile background='url(/projects/tosc.jpg)' links={
                <a href='//theopensource.company'>Visit theopensource.company</a>
            }>
                <h1>The Open Source Company</h1>
                <i>{`
                    Website made using JavaScript (React).
                `}</i>
                <p>{`
                    A collective advocating for libre software and a web built on transparency, started by two of my friends and myself. With
                    The Open Source Company, I've designed the collective's website, Kards, Playrbase and recently brought leafal.io under its
                    banner.
                `}</p>
            </ProjectTile>
            <ProjectTile background='url(/projects/ruleset.jpg)'>
                <h1>Dutch SSBU Ruleset</h1>
                <i>{`
                    Layout made using HTML/CSS.
                `}</i>
                <p>{`
                    The Dutch Super Smash Bros. Ultimate community plays by the rules set in a unified ruleset. Most tournaments use this
                    graphic I produced when the ruleset was released. Not very relevant to the rest of my work, but still pretty cool.
                `}</p>
            </ProjectTile>
        </div>

        <h2>{`Here's what I use to get the job done.`}</h2>
        <div className={styles.languages}>
            <a href="//github.com/leafeling" target='_blank'>
                <img
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=leafeling&theme=dark&bg_color=0000&disable_animations=true&hide_border=true&hide_title=true&text_bold=true&langs_count=12&layout=compact"
                    alt="Language statistics, unfortunately can't really grab the content for readability."
                />
            </a>
        </div>
    </div>

export default Home;
