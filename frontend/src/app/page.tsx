import { BorderBeam } from "@/components/magicui/border-beam";
import HeroVideoDialog from "@/components/magicui/HeroVideo";
import { AnimatedShinyTextDemo } from "@/components/magicui/heroButton";
import BlurIn from "@/components/magicui/ui/BlurIn";
import TextReveal from "@/components/magicui/ui/TextRevel";
import Image0001 from "@/components/image/book.jpeg";
import Image0002 from "@/components/image/book-1.jpg";
import Image0003 from "@/components/image/book-2.jpg";
import Image0004 from "@/components/image/book-3.jpg";
import Image0005 from "@/components/image/book-4.jpg";
import Image0006 from "@/components/image/book-5.jpg";
import Image0007 from "@/components/image/book-6.jpg";
import Image0008 from "@/components/image/book-7.jpg";
import Image0009 from "@/components/image/book-8.jpg";
import Image00010 from "@/components/image/book-9.jpg";
import Image00011 from "@/components/image/book-10.jpg";
import Image from "next/image";
import Quote from "@/components/Quotedata";
import { FadeText } from "@/components/magicui/ui/fade";
import SparklesText from "@/components/magicui/ui/SparkText";
import { Instagram, Linkedin, Rss, Twitter, LucideGithub } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <header className="pb-5">
        <AnimatedShinyTextDemo />
        <div className="hero flex flex-col mt-5 justify-center items-center gap-4">
          <BlurIn
            word="NARRATIQ"
            className="text-[4rem] md:text-9xl font-bold text-white mt-10"
          />
          <BlurIn
            word="One Page at a Time - Your Next Great Read Starts Here"
            className="text-[15px] text-gray-500"
          />
        </div>
        <div className="relative max-w-[1200px] mx-auto my-0 mt-6 h-auto overflow-hidden">
          <HeroVideoDialog
            className="dark:hidden block"
            animationStyle="from-center"
            videoSrc="https://www-ccv.adobe.io/v1/player/ccv/QQEXxWfTndE/embed?api_key=behance1&bgcolor=%23191919"
            thumbnailSrc="https://mir-s3-cdn-cf.behance.net/project_modules/fs/fe36d3207557173.66dfec2a38cbb.png"
            thumbnailAlt="Hero Video"
          />
          <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="from-center"
            videoSrc="https://www-ccv.adobe.io/v1/player/ccv/QQEXxWfTndE/embed?api_key=behance1&bgcolor=%23191919"
            thumbnailSrc="https://mir-s3-cdn-cf.behance.net/project_modules/fs/fe36d3207557173.66dfec2a38cbb.png"
            thumbnailAlt="Hero Video"
          />
          <BorderBeam size={200} duration={12} delay={6} />
        </div>
      </header>
      <main>
        <div className="about mt-14 pb-5">
          <div className="container flex justify-center items-center gap-3 max-w-[1550px] mx-auto my-0 flex-col md:flex-row-reverse">
            <div className="text w-full md:w-1/2 flex justify-center items-start gap-3 flex-col">
              <h1 className="text-2xl md:text-3xl text-left text-white">
                About Us
              </h1>
              <BlurIn
                word="At Narratiq, we believe that every book opens a door to a new world, and we're here to help you find the keys. Our mission is to offer a vast and diverse collection of literature that caters to every reader's needs and interests. With a focus on books from the last few decades, we strive to provide you with a rich and relevant reading experience."
                className="text-white text-left md:leading-8 text-[15px] md:text-[18px]"
              />
              <BlurIn
                word="We proudly house a remarkable collection of 1,00,000 books, with a particular emphasis on works published between 1990 and 2010. This period features an incredible range of influential literature, encompassing everything from groundbreaking contemporary novels to insightful non-fiction."
                className="text-white text-left md:leading-8 text-[15px] md:text-[18px]"
              />
            </div>
            <div className="image justify-center items-center flex-wrap gap-3">
              <Image
                src={Image0001}
                alt="Book"
                width={441}
                height={300}
                className="w-[300px] md:w-[500px] h-auto"
              />
            </div>
          </div>
        </div>

        <div className="do-you-know">
          <TextReveal
            text="Did You know"
            className="font-bold text-white mt-10 text-2xl md:text-5xl"
          />
          <TextReveal text="The Library of Alexandria, one of the most famous ancient libraries, housed hundreds of thousands of scrolls and was a hub of knowledge and learning in the ancient world. Imagine the stories and wisdom it contained!" />
        </div>

        <div className="day-quote flex justify-center items-center gap-0 flex-col md:h-[100vh]">
          <BlurIn
            word="Narratiq Day"
            className="font-bold text-white mt-10 text-2xl md:text-5xl"
          />
          <FadeText
            className="text-xl font-bold text-black dark:text-white"
            direction="up"
            text={<Quote />}
          />
        </div>

        <div className="read-book">
          <TextReveal
            text="Ready to Read?"
            className="font-bold text-white mt-10 text-2xl md:text-5xl"
          />
          <TextReveal text="Discover our collection of books at Narratiq. We strive to make your reading experience as enjoyable and engaging as possible." />
          <div className="flex justify-center items-center gap-0 flex-col md:h-[100vh]">
            <BlurIn
              word="My fav Books"
              className="font-bold text-white mt-10 text-2xl md:text-5xl"
            />
            <div className="flex justify-center items-center mt-10">
              <div className="book-card max-w-[900px] mx-auto my-0 flex justify-center items-center gap-5 flex-wrap">
                <Image
                  src={Image0002}
                  alt="Book"
                  width={303}
                  height={475}
                  className="w-[150px]"
                />
                <Image
                  src={Image0003}
                  alt="Book"
                  width={150}
                  height={218}
                  className="w-[150px]"
                />
                <Image
                  src={Image0004}
                  alt="Book"
                  width={323}
                  height={445}
                  className="w-[150px]"
                />
                <Image
                  src={Image0005}
                  alt="Book"
                  width={308}
                  height={466}
                  className="w-[150px]"
                />
                <Image
                  src={Image0006}
                  alt="Book"
                  width={200}
                  height={200}
                  className="w-[150px]"
                />
                <Image
                  src={Image0007}
                  alt="Book"
                  width={667}
                  height={1024}
                  className="w-[150px]"
                />
                <Image
                  src={Image0008}
                  alt="Book"
                  width={431}
                  height={466}
                  className="w-[150px]"
                />
                <Image
                  src={Image0009}
                  alt="Book"
                  width={321}
                  height={445}
                  className="w-[150px]"
                />
                <Image
                  src={Image00010}
                  alt="Book"
                  width={290}
                  height={445}
                  className="w-[150px]"
                />
                <Image
                  src={Image00011}
                  alt="Book"
                  width={318}
                  height={445}
                  className="w-[150px]"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex justify-center items-center gap-0 flex-wrap bg-[#a3e635] p-5 mt-5 h-[400px]">
        <div className="flex justify-center items-center gap-3 w-full md:w-1/3 text-center">
          <SparklesText text="NARRATIQ" className="text-5xl" />
        </div>
        <div className="flex justify-center items-center flex-col gap-3 w-full md:w-1/3">
          <Link href="/Book">Book</Link>
          <Link href="/Search">Search</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="flex justify-center items-center gap-3 w-full md:w-1/3">
          <div className="flex justify-center items-center gap-4">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/jayasriraam"
            >
              <span className="text-sm">
                <Linkedin />
              </span>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/_ivanjay_/"
            >
              <span className="text-sm">
                <Instagram />
              </span>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://jayasriraam.blogspot.com/"
            >
              <span className="text-sm">
                <Rss />
              </span>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/ivan_jayram"
            >
              <span className="text-sm">
                <Twitter />
              </span>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Jay-Raam/"
            >
              <span className="text-sm">
                <LucideGithub />
              </span>
            </Link>
          </div>
        </div>
      </footer>
      <div className="copyright p-4 text-white bg-black text-center text-[13px]">
        <p>
          © 2024
          <Link
            className="ml-1"
            href="https://jayasriraam.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jayasriraam
          </Link>
          . All rights reserved.
        </p>
      </div>
    </>
  );
}
