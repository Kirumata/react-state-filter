export interface Project {
    img: string,
    category: string
}

export function filterProjects(filter: string, allProjects: Project[]): Project[] {
    let projects: Project[] = [];
    for (let i = 0; i < allProjects.length; i++) {
        if (allProjects[i].category == filter) {
            projects.push(allProjects[i]);
        }
    }
    if (filter == "All") {
        return allProjects;
    }
    else {
        return projects;
    }

}


