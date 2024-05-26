import { Tag } from "./tag";

export interface Project {
    id: number;
    name: string;
    summary: string;
    tags: Tag[];
    sourceCodeURL: string;
    demoURL: string;
    pictures: string[];
    description: string;
}