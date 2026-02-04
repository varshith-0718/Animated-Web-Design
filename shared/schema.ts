import { pgTable, text, serial, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===

export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  category: text("category").notNull(), // e.g., "Programming", "ML & DL"
  items: text("items").array().notNull(), // Array of skills in this category
});

export const experiences = pgTable("experiences", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  company: text("company").notNull(),
  role: text("role").notNull(),
  duration: text("duration").notNull(),
  description: text("description").notNull(),
  highlights: text("highlights").array(), // Bullet points
  environment: text("environment").array(), // Tech stack used
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  highlights: text("highlights").array(),
  link: text("link"),
  duration: text("duration"),
});

export const personalInfo = pgTable("personal_info", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  headline: text("headline").notNull(),
  bio: text("bio").notNull(),
  socialLinks: jsonb("social_links").$type<{
    linkedin?: string;
    github?: string;
    email?: string;
  }>(),
});

// === SCHEMAS ===

export const insertSkillSchema = createInsertSchema(skills);
export const insertExperienceSchema = createInsertSchema(experiences);
export const insertProjectSchema = createInsertSchema(projects);
export const insertPersonalInfoSchema = createInsertSchema(personalInfo);

// === TYPES ===

export type Skill = typeof skills.$inferSelect;
export type InsertSkill = z.infer<typeof insertSkillSchema>;

export type Experience = typeof experiences.$inferSelect;
export type InsertExperience = z.infer<typeof insertExperienceSchema>;

export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;

export type PersonalInfo = typeof personalInfo.$inferSelect;
export type InsertPersonalInfo = z.infer<typeof insertPersonalInfoSchema>;
