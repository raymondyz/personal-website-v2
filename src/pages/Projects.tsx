import { Link } from "react-router"
import Card from "../components/ui/Card"

import morsetypeImage from "../assets/images/thumbnails/morsetype.png"
import shufflerBuilderImage from "../assets/images/thumbnails/shufflerbuilder.png"

import { cn } from "../lib/utils"

interface ProjectCardProps {
  title: string,
  description?: string,
  image: string,
  color: string,
  link?: string
}
function ProjectCard({ title, description, image, color, link }: ProjectCardProps) {
  return (
    <Card className={cn("group relative p-0 min-h-90 w-90 flex flex-col", color)} clickable>
      <img className="h-50 object-cover select-none" draggable="false" src={image} />
      <div className="p-4 border-t-4">
        <h2 className="text-2xl">{title}</h2>
        <p className="">{description}</p>
      </div>
      {link &&
        <Link className={cn("absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100")} to={link}>
          <div className="py-2 px-4 border-4 text-white/90 text-3xl">Visit</div>
        </Link>
      }
    </Card>
  )
}


export default function Projects() {
  return (
    <div className="mx-[10%] py-24 flex justify-center flex-wrap gap-8">
      <ProjectCard 
        title="MorseType"
        description="A typing game for practicing Morse code!"
        image={morsetypeImage}
        color="bg-amber-300"
        link="/projects/morsetype"
      />
      <ProjectCard
        title="Shuffler Builder"
        description="A tool to build and analyze geometries for robot shuffler drives"
        image={shufflerBuilderImage}
        color="bg-blue-300"
        link="/tools/shuffler-builder"
      />
    </div>
  )
}