import { db } from "./db";
import {
  skills, experiences, projects, personalInfo,
  type Skill, type InsertSkill,
  type Experience, type InsertExperience,
  type Project, type InsertProject,
  type PersonalInfo, type InsertPersonalInfo
} from "@shared/schema";

export interface IStorage {
  getSkills(): Promise<Skill[]>;
  getExperiences(): Promise<Experience[]>;
  getProjects(): Promise<Project[]>;
  getPersonalInfo(): Promise<PersonalInfo | undefined>;
  
  // Seed methods
  createSkill(skill: InsertSkill): Promise<Skill>;
  createExperience(exp: InsertExperience): Promise<Experience>;
  createProject(proj: InsertProject): Promise<Project>;
  createPersonalInfo(info: InsertPersonalInfo): Promise<PersonalInfo>;
}

export class DatabaseStorage implements IStorage {
  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills);
  }

  async getExperiences(): Promise<Experience[]> {
    return await db.select().from(experiences);
  }

  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async getPersonalInfo(): Promise<PersonalInfo | undefined> {
    const [info] = await db.select().from(personalInfo).limit(1);
    return info;
  }

  async createSkill(skill: InsertSkill): Promise<Skill> {
    const [newSkill] = await db.insert(skills).values(skill).returning();
    return newSkill;
  }

  async createExperience(exp: InsertExperience): Promise<Experience> {
    const [newExp] = await db.insert(experiences).values(exp).returning();
    return newExp;
  }

  async createProject(proj: InsertProject): Promise<Project> {
    const [newProj] = await db.insert(projects).values(proj).returning();
    return newProj;
  }

  async createPersonalInfo(info: InsertPersonalInfo): Promise<PersonalInfo> {
    const [newInfo] = await db.insert(personalInfo).values(info).returning();
    return newInfo;
  }
}

export const storage = new DatabaseStorage();
