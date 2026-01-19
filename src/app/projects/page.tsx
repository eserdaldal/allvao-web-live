import { ProjectsShowcase } from "@/components/home/ProjectsShowcase";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projelerimiz | Allvao",
    description: "Allvao ekosistemindeki girişimler: Omniafeed, Shelvyn ve Toolvana.",
};

export default function ProjectsPage() {
    return (
        <main className="min-h-screen pt-24">
            <ProjectsShowcase />
        </main>
    );
}
