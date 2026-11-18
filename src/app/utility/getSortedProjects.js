import projectData from './projectsData.json';

/**
 * Returns all projects sorted by createdAt (newest first).
 */
export function getSortedProjects() {
  return [...projectData].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
}

export default getSortedProjects;
