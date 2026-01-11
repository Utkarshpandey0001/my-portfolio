"use client";

import { motion } from "framer-motion";
import { sectionVariants, SOCIALS, EXPERIENCE, PROJECTS, SKILLS, ACHIEVEMENTS, OPEN_SOURCE } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight, Brain, Cloud, Code2, Database, Github, Layers, Network, Terminal, Trophy, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden dark">
      {/* Background Grid Effect */}
      <div className="fixed inset-0 z-[-1] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(120,119,198,0.15),transparent)]"></div>

      <div className="container max-w-5xl mx-auto px-4 py-12 space-y-24">
        
        {/* HERO SECTION */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}
          className="flex flex-col justify-center min-h-[70vh] space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-xl text-muted-foreground font-medium tracking-wide">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500 pb-2">
              Utkarsh Raj.
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            Engineering Undergraduate at <span className="text-foreground font-semibold">NIT Trichy</span>. 
            Founding Software Engineer & Full-stack specialist building scalable decentralized systems and AI-native solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            {SOCIALS.map((social) => (
              <Button key={social.name} variant="outline" size="lg" asChild className="rounded-full hover:bg-zinc-800 gap-2">
                <Link href={social.href} target="_blank">
                  <social.icon className="h-5 w-5" />
                  <span>{social.name}</span>
                </Link>
              </Button>
            ))}
          </div>
        </motion.section>

        <Separator className="my-12 bg-zinc-800" />

        {/* EXPERIENCE SECTION */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants} id="experience">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3"><Terminal className="h-8 w-8 text-zinc-400" /> Work Experience</h2>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-700 before:to-transparent">
            {EXPERIENCE.map((job, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-700 bg-zinc-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <Layers className="h-5 w-5 text-zinc-400" />
                </div>
                <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-zinc-900/50 backdrop-blur-sm border-zinc-800 p-6 rounded-xl hover:border-zinc-700 transition-colors">
                  <div className="flex flex-col justify-between items-start mb-4">
                    <div className="flex flex-col gap-1 w-full">
                        <div className="flex justify-between items-center w-full">
                            <h3 className="text-xl font-bold">{job.company}</h3>
                            <Badge variant="secondary" className="bg-zinc-800 text-zinc-300 whitespace-nowrap">{job.duration}</Badge>
                        </div>
                        
                        <div className="flex gap-3 mt-2 text-sm">
                            {job.link && job.link !== '#' && (
                                <Link href={job.link} target="_blank" className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors">
                                    <ExternalLink className="h-3 w-3" /> Website
                                </Link>
                            )}
                             {/* Only render repo link if it exists (for Ridevaam) */}
                            {job.repo && (
                                <Link href={job.repo} target="_blank" className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors">
                                    <Github className="h-3 w-3" /> Work Repo
                                </Link>
                            )}
                        </div>
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-zinc-300 mb-3">{job.role}</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">{job.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* PROJECTS SECTION */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={sectionVariants} id="projects">
           <h2 className="text-3xl font-bold mb-12 flex items-center gap-3"><Code2 className="h-8 w-8 text-zinc-400" /> Featured Projects</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECTS.map((project, index) => {
                 const Icon = project.imageType === 'ai' ? Brain : project.imageType === 'blockchain' ? Network : Cloud;
                 return (
                  <motion.div key={index} variants={sectionVariants} custom={index}>
                    <Card className="h-full flex flex-col bg-zinc-900/50 backdrop-blur-sm border-zinc-800 hover:border-zinc-600 transition-colors group rounded-xl overflow-hidden relative">
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                          <Icon className="h-24 w-24" />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl flex items-center gap-2">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-base">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow relative z-10">
                        <ul className="list-disc list-outside pl-5 space-y-2 text-sm text-muted-foreground mb-6">
                          {project.points.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.stack.map((tech) => (
                            <Badge key={tech} variant="outline" className="bg-zinc-800/50 border-zinc-700">{tech}</Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="gap-4 pt-0 relative z-10">
                          {project.github !== "#" && (
                             <Button variant="ghost" size="sm" className="gap-2 hover:bg-zinc-800" asChild>
                               <Link href={project.github} target="_blank"><Github className="h-4 w-4"/> Code</Link>
                             </Button>
                          )}
                           {project.demo !== "#" && (
                             <Button variant="ghost" size="sm" className="gap-2 hover:bg-zinc-800 text-blue-400 hover:text-blue-300" asChild>
                               <Link href={project.demo} target="_blank"><ExternalLink className="h-4 w-4"/> Live Demo</Link>
                             </Button>
                          )}
                      </CardFooter>
                    </Card>
                  </motion.div>
                 )
              })}
           </div>
        </motion.section>

        {/* SKILLS SECTION */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} id="skills">
           <h2 className="text-3xl font-bold mb-12 flex items-center gap-3"><Database className="h-8 w-8 text-zinc-400" /> Technical Expertise</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(SKILLS).map(([category, skills], index) => (
                 <Card key={index} className="bg-zinc-900/40 border-zinc-800">
                    <CardHeader className="pb-3">
                       <CardTitle className="capitalize text-lg text-zinc-300">
                          {category.replace('_', ' / ')}
                       </CardTitle>
                    </CardHeader>
                    <CardContent>
                       <div className="flex flex-wrap gap-2">
                          {skills.map(skill => (
                             <Badge key={skill} className="bg-zinc-800 hover:bg-zinc-700 text-zinc-100 px-3 py-1 text-sm">{skill}</Badge>
                          ))}
                       </div>
                    </CardContent>
                 </Card>
              ))}
           </div>
        </motion.section>

         {/* AWARDS & OPEN SOURCE SECTION */}
         <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Honors */}
                <div>
                   <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Trophy className="h-6 w-6 text-yellow-500" /> Honors & Awards</h2>
                   <ul className="space-y-4">
                      {ACHIEVEMENTS.map((award, index) => (
                         <li key={index} className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-4">
                             <h4 className="font-semibold text-foreground">{award.title}</h4>
                             <p className="text-muted-foreground text-sm">{award.organization}</p>
                             {award.details && <p className="text-xs text-zinc-500 mt-1">{award.details}</p>}
                         </li>
                      ))}
                   </ul>
                </div>
                {/* Open Source */}
                <div>
                   <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Github className="h-6 w-6 text-zinc-300" /> Open Source Contributions</h2>
                   <Card className="bg-zinc-900/30 border-zinc-800 p-6">
                      <p className="text-muted-foreground mb-4">Active contributor to various technical communities and projects.</p>
                      <div className="flex flex-wrap gap-3">
                         {OPEN_SOURCE.map((repo) => (
                             <Badge key={repo} variant="secondary" className="text-md py-1 px-3 flex gap-2 items-center">
                                <Github className="h-4 w-4" /> {repo}
                             </Badge>
                         ))}
                      </div>
                   </Card>
                </div>
            </div>
         </motion.section>

         {/* FOOTER */}
         <motion.footer initial="hidden" whileInView="visible" variants={sectionVariants} className="text-center text-muted-foreground py-8 border-t border-zinc-800 font-mono text-sm">
            <p>Built with Next.js, Tailwind CSS, Shadcn UI & Framer Motion.</p>
            <p className="mt-2">© {new Date().getFullYear()} Utkarsh Raj. All Rights Reserved.</p>
         </motion.footer>
      </div>
    </main>
  );
}