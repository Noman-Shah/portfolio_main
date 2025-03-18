import Header  from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { RealProjects } from "@/sections/RealProjects";

export default function ProjectsPage() {
  return (
    <div>
      <Header />
      <main className="py-6">
        <RealProjects />
      </main>
      <Footer />
    </div>
  );
}
