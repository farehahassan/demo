import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
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
    <section className='pt-10'>
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
              Hello, I'm Fareha Hassan, a passionate software engineer, and a lifelong learner. From an early age, I nurtured a deep love for mathematics, which eventually led me to the captivating world of software engineering. I am fascinated by the boundless possibilities that technology offers, and my journey into the realm of Artificial Intelligence and Robotics is a testament to my insatiable curiosity and ambition.
              </p>
              <p>
              I began my career in the tech industry as a web and app developer, crafting intuitive digital experiences that bridge the gap between users and technology. The ever-evolving nature of this field has provided me with invaluable experiences and insights, but my true calling has always been in pushing the boundaries of what's possible. This led me to dive deeper into Artificial Intelligence and Robotics, where I found myself at the intersection of innovation and engineering.
              </p>
              <p>
              As a web and app developer, I have had the privilege of creating user-friendly solutions that enhance the digital landscape. My journey is a testament to my commitment to delivering user-centric experiences that resonate with people. My love for elegant code and seamless interfaces drives me to stay at the forefront of technology trends, ensuring that I continually deliver solutions that are not only functional but also aesthetically pleasing.
              </p>
              <p>
              However, my quest for knowledge and innovation knows no bounds. I have embarked on a remarkable journey to explore the realms of Artificial Intelligence and Robotics, where I'm eager to develop intelligent systems and machines that can change the world. This journey is not just a career choice; it's a passion, a calling that constantly fuels my desire to expand my horizons.
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
