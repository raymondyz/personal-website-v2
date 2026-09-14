import { useEffect } from "react"


export default function ResumeRedirect() {
  useEffect(() => window.location.replace("/raymond_zou_resume.pdf"), [])
  return null
}