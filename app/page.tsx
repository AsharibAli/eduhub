"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Twitter,
  Globe,
  BookOpen,
  Code,
  MessageCircleCode,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

export default function Home() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const cards = [
    {
      title: "EduChainGPT",
      description:
        "A Smart AI assistant that helps you to learn and build your educational dApps on EduChain.",
      buttonText: "Start Chatting",
      link: "https://educhaingpt.vercel.app/",
    },
    {
      title: "EduKit",
      description:
        "A starter-kit featuring React & NextJS and Vue &NuxtJS with Hardhat and Foundry for Building dApps on EduChain.",
      buttonText: "Start Building",
      link: "https://ced.asharib.xyz/",
    },
    {
      title: "EduBox",
      description:
        "A no-code tool to configure and deploy your Tokens and NFTs with one click on EduChain.",
      buttonText: "Start Launching",
      link: "https://example.com/coming-soon",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Improved Grid background */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-20 transition-opacity duration-300"
        style={{
          backgroundSize: "50px 50px",
          backgroundImage:
            "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
        }}
      />

      {/* Teal glow effect */}
      <div
        className={`absolute top-0 left-1/4 w-1/2 h-1/2 bg-teal-500 rounded-full filter blur-[150px] opacity-20 transition-all duration-500 ${
          activeCard !== null ? "opacity-40" : ""
        }`}
      />

      {/* Header */}
      <header className="container mx-auto px-6 py-8 flex justify-between items-center relative z-10">
        <div className="text-3xl font-bold text-teal-500">EduHub</div>
        <div className="flex space-x-6">
          <Link
            href="https://x.com"
            className="text-white hover:text-teal-500 transition-colors"
          >
            <Twitter className="w-7 h-7" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="https://github.com"
            className="text-white hover:text-teal-500 transition-colors"
          >
            <Github className="w-7 h-7" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://telegram.org/"
            className="text-white hover:text-teal-500 transition-colors"
          >
            <MessageCircleCode className="w-7 h-7" />
            <span className="sr-only">Telegram</span>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-6 py-20 flex flex-col items-center relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold text-center mb-6 tracking-tight">
          Build Education
          <span className="block text-teal-500">Apps On-chain</span>
        </h1>
        <p className="text-xl md:text-2xl text-center mb-16 text-gray-400 max-w-3xl">
          Building developer tools and infrastructure on EduChain, so that you
          can quickly ship your awesome educational dApps on-chain.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-20">
          <Link href="https://example.com" passHref>
            <Button
              size="lg"
              className="bg-teal-500 hover:bg-teal-600 text-black font-semibold px-10 py-6 text-lg"
            >
              Try EduGPT
            </Button>
          </Link>
          <Link href="https://example.com" passHref>
            <Button
              size="lg"
              variant="outline"
              className="border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-black px-10 py-6 text-lg"
            >
              <BookOpen className="mr-3 h-6 w-6" />
              Go to Documentation
            </Button>
          </Link>
        </div>

        {/* Data cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl mb-20">
          {cards.map((card, index) => (
            <Card
              key={index}
              className={`bg-black/50 border-teal-500/50 text-white backdrop-blur-sm transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20 ${
                activeCard === index ? "ring-4 ring-teal-500" : ""
              }`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              style={{
                backgroundImage:
                  "radial-gradient(circle at center, rgba(45, 212, 191, 0.1) 0%, transparent 70%)",
                backgroundSize: "200% 200%",
                backgroundPosition: "center",
                transition: "all 0.3s ease-in-out",
              }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-teal-500">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-300 mb-6">{card.description}</p>
              </CardContent>
              <CardFooter>
                <Link
                  href={card.link}
                  passHref
                  className="w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-teal-500 hover:bg-teal-600 text-black font-semibold py-5 text-lg">
                    {card.buttonText}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Backed by section */}
        <div className="w-full max-w-4xl mb-20">
          <div className="text-center mb-8 text-teal-500 font-semibold text-xl">
            BACKED BY
          </div>
          <div className="text-center">
            <a
              href="https://oci.opencampus.xyz/"
              target="_blank"
              className="text-gray-400 font-semibold text-4xl hover:text-teal-500 transition-colors"
            >
              Open Campus Incubar
            </a>
          </div>
        </div>

        {/* Learn more button */}
        <Link href="https://example.com" passHref>
          <Button
            size="lg"
            className="bg-teal-500 hover:bg-teal-600 text-black font-semibold px-10 py-6 text-lg"
          >
            <BookOpen className="mr-3 h-6 w-6" />
            Learn more on GitBook
          </Button>
        </Link>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 py-8 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <div className="text-gray-400 text-lg">
            Build with 💚 by{" "}
            <a href="" target="_blank" className="text-teal-500">
              Asharib Ali
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
