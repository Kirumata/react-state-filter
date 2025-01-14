import { Project } from '../utils';

function ProjectList(props: { projectList: Project[] }) {

  let array = [];
  for (let i = 0; i < props.projectList.length; i++){
    array.push(<img key = {`img ${i}`} src={props.projectList[i].img}></img>);
  }
  return (
    <>{array}</>
  )
}

export default ProjectList