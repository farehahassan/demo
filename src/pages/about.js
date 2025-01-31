import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/socialIcons'
// import Home from '/home.png/'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
    <section className='pt-5'>
      <Head>
        <title>About - Fareha Hassan</title>
        <meta
          name="description"
          content="I’m Fareha Hassan. I live in Pakistan."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={"/home.png"}
                alt=""
                width={2000}
                height={2000}
                // sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl  object-cover "
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Fareha Hassan. I live in Pakistan.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
              Hello,I'm Fareha Hassan, a passionate software engineer with a lifelong dream of diving deeper into the fascinating realms of artificial intelligence and robotics. My journey into software engineering began with a love for mathematics, and as I delved further into this field, my interest in it only grew stronger. Currently, I am a web and app developer, earning a livelihood through my skills.
              </p>
              <p>
              My childhood aspiration was to become a software engineer, and I'm proud to have turned that dream into a reality. However, I believe that learning is a lifelong process, and I'm eager to expand my horizons by venturing into the exciting domains of artificial intelligence and robotics. These fields hold boundless potential for innovation and problem-solving, and I'm committed to exploring their depths to further my knowledge and skills.
              </p>
              <p>
              Throughout my career as a web and app developer, I've honed my problem-solving skills and developed a keen eye for detail. These attributes have been instrumental in my software engineering journey, and I look forward to applying them to the challenges and opportunities that AI and robotics present. My experiences have also reinforced the importance of collaboration and adaptability in the fast-paced world of technology, and I'm excited to carry these values into my exploration of AI and robotics. Together, let's embrace the endless possibilities of these fields and work towards a future where technology empowers and enriches our lives in ways we've only begun to imagine.
              </p>
              <p>In closing, I am excited to continue my evolution as a software engineer, and I am determined to bring the magic of AI and Robotics to life. The future holds infinite opportunities to push the envelope and drive innovation, and I am committed to being at the forefront of this technological revolution. As I embark on this exciting journey, I'm reminded of a quote that has been my guiding principle:</p>
              <p>
                <em>
                "I believe in the infinite possibilities that technology offers, and I'm on a journey to turn those possibilities into realities." 
                </em>
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://instagram.com/fareha_dev"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://github.com/farehahassan"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/fareha-hassan-90a7b7221/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:hfariha104@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                hfariha104@gmail.com
              </SocialLink>
             
            </ul>
          </div>
        </div>
      </Container>
      </section>
    </>
  )
}
