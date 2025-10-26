// prisma/schema.prisma

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        Int       @id @default(autoincrement())
  email     String    @unique
  name      String?
  projects  Project[]
}

model Project {
  id          Int      @id @default(autoincrement())
  name        String
  description String
  createdBy   User     @relation(fields: [createdById], references: [id])
  createdById  Int
}

// components/ProjectsListingPage.tsx

import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import prisma from "../prisma";
import { Project } from "@prisma/client";

interface ProjectsListingPageProps {}

interface UserResponse {
  user: {
    id: number;
    email: string;
    name?: string | null;
    projects: Project[];
  };
}

export const ProjectsListingPage: React.FC<ProjectsListingPageProps> = () => {
  const { user } = useUser();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;

      const response = (await prisma.user.findUnique({
        where: { email: user.email },
        include: { projects: true },
      })) as UserResponse;

      setProjects(response.user.projects);
    };

    fetchData();
  }, [user]);

  return (
    <div>
      <h1>Projects Listing Page</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};