import hyphenateWords from "./hyphenateWords";
import { projects } from "../data/projects";

function findProject (string) {
  const title = string.replace('/projects/', '')

  const foundProject = projects.find(project => {
    const titleTwo = hyphenateWords(project.title)
    return titleTwo === title
  })

  return foundProject
}

export default findProject