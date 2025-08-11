"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Nikhil C Gopi",
    title: "Solution Architect | Founder",
    bio: "Nikhil C. Gopi is a passionate tech enthusiast and one of the founding pillars of mightyscape. With a deep-seated love for crafting impeccable code, Nikhil is committed to delivering exceptional user experiences. He possesses a well-rounded understanding of the rapidly evolving mobile and TV landscape, with a particular focus on Android app development.",
    image: "https://mightyscape.com/image/nikhil_c.jpg",
    linkedin: "#"
  },
  {
    name: "Minu Theresia",
    title: "Project Manager | Founder",
    bio: "Minu Theresia is a dynamic Project Manager and one of the founders of mightyscape, bringing over 10 years of experience in software development, including more than 5 years in project management. Known for her strategic insight and exceptional leadership skills, Minu excels at coordinating teams to deliver innovative solutions.",
    image: "https://mightyscape.com/image/minu.png",
    linkedin: "#"
  },
  {
    name: "Paul Cheriyan",
    title: "Full Stack Developer | Founder",
    bio: "Paul Cheriyan is an experienced Full Stack Developer and co-founder of mightyscape, specialising in Angular and Java Spring. With a strong background in the information technology and services industry, Paul has spent 8 years crafting seamless web experiences.",
    image: "https://mightyscape.com/image/paul.jpg",
    linkedin: "#"
  },
  {
    name: "Nithin Thomas",
    title: "Backend Developer",
    bio: "Nithin Thomas has over 5 years of experience in software development, with a strong focus on backend technologies. He possesses in-depth expertise in Spring Boot and extensive hands-on experience with NoSQL databases, including MongoDB, Cassandra, and AWS Keyspaces.",
    image: "https://mightyscape.com/image/nithin.jpg",
    linkedin: "#"
  },
  {
    name: "Athira Mol Joy",
    title: "Senior Developer",
    bio: "Athira Mol Joy is a seasoned developer with over 5 years of experience in software development. She specialises in Roku and Samsung platforms, with strong expertise in BrightScript with SceneGraph, as well as JavaScript, HTML, CSS, and TypeScript.",
    image: "https://mightyscape.com/image/athira.jpg",
    linkedin: "#"
  },
  {
    name: "Hasna P A",
    title: "Senior QA Engineer",
    bio: "Hasna PA is a dedicated Senior QA Engineer with over 8 years of experience in software testing. She specialises in manual testing and is proficient in API and load testing. Hasna is passionate about ensuring quality across multiple platforms.",
    image: "https://mightyscape.com/image/hasnapa.jpg",
    linkedin: "#"
  },
  {
    name: "Sumayya A A",
    title: "Senior Software Developer",
    bio: "Sumayya is a skilled Senior Software Developer specialising in web development using HTML and Visual Studio Code. With a strong foundation in coding and design principles, she is dedicated to creating user-friendly websites that meet client needs and enhance user experience.",
    image: "https://mightyscape.com/image/sumayya.jpg",
    linkedin: "#"
  },
  {
    name: "Bhasura S",
    title: "Business Analyst",
    bio: "Bhasura is an experienced Business Analyst, specialising in creating comprehensive and precise business documents. She excels at analyzing data, defining requirements, and translating complex concepts into clear, actionable insights.",
    image: "https://mightyscape.com/image/bhasurasajan.png",
    linkedin: "#"
  },
  {
    name: "Anagha Sood E",
    title: "UI Designer",
    bio: "Anagha is a talented UI Designer with expertise in Photoshop, Illustrator, and InDesign. She has a keen eye for detail and creativity, ensuring that the visual elements she designs are not only aesthetically appealing but also functional and user-friendly.",
    image: "https://mightyscape.com/image/anagha.jpeg",
    linkedin: "#"
  },
  {
    name: "Gibin A V",
    title: "Marketing Consultant",
    bio: "Gibin A V is an experienced Marketing Consultant with a deep understanding of market trends, brand positioning, and consumer behaviour. He excels at developing and executing marketing strategies that drive growth and enhance brand visibility.",
    image: "https://mightyscape.com/image/gibin.jpg",
    linkedin: "#"
  },
  {
    name: "Hormis Cheriyan",
    title: "Jr. Android Developer",
    bio: "Hormis Cheriyan is a skilled Jr. Android Developer with a passion for creating efficient and user-friendly mobile applications. With a focus on Android development, Hormis is dedicated to building reliable and scalable apps that enhance user experiences.",
    image: "https://mightyscape.com/image/hormis.jpg",
    linkedin: "#"
  },
  {
    name: "AthulKrishna C V",
    title: "Jr. iOS Developer",
    bio: "AthulKrishna C V is an enthusiastic Jr. iOS Developer with a passion for creating intuitive and efficient mobile applications for Apple platforms. He is skilled in Swift and Objective-C, bringing a fresh perspective and dedication to delivering high-quality iOS apps.",
    image: "https://mightyscape.com/image/athul.jpg",
    linkedin: "#"
  }
];

export default function TeamMembers() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
                <div className="aspect-square relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-4">{member.title}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.bio}
                  </p>
                  <div className="flex space-x-3">
                    <a 
                      href={member.linkedin}
                      className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}