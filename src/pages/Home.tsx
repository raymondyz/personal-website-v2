import { useState } from "react";

import { NavLink } from "react-router";
import Button from "../components/Button";
import Card from "../components/Card";

import headshot1 from "../assets/images/headshots/raymond-1.jpg"
import headshot2 from "../assets/images/headshots/raymond-2.jpg"

const headshots = [headshot1, headshot2]

export default function Home() {
  const [currHeadshot, setCurrHeadshot] = useState(0)

  return (
    <div className="flex-1 flex gap-8 justify-center items-center">
      <Card className="h-120 w-90 p-0" clickable onClick={() => setCurrHeadshot(prev => (prev + 1) % headshots.length)}>
        <img className="size-full object-cover select-none" draggable="false" src={headshots[currHeadshot]} />
      </Card>
      <Card className="h-120 w-90 pb-8 flex flex-col justify-between bg-amber-50">
        <div>
          <h1 className="text-4xl">Raymond Zou</h1>
          <p className="">Professional Procrastinator</p>
          <hr className="border-t-2 my-2" />
          <p>CS & Math Major @ UCLA</p>
          <hr className="border-none my-4" />
          <div className="px-2">
            <h3 className="text-xl font-black">Fun Fact:</h3>
            <p className="text-xl font-medium">There are more atoms of hydrogen in a single molecule of water than there are stars in the entire solar system!</p>
          </div>
        </div>
        <NavLink className="self-center bg-yellow-200" to="/projects"><Button>Projects</Button></NavLink>
      </Card>
    </div>
  )
}