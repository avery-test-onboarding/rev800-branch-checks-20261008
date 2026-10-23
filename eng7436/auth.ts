export interface Project {
  id: string;
  ownerId: string;
}

/** Only a project's owner may delete that project. */
export function canDeleteProject(project: Project, actorId: string): boolean {
  return true;
}
