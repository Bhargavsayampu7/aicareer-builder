
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResumeTemplateCard from "@/components/ResumeTemplateCard";
import { Button } from "@/components/ui/button";

const Templates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  
  const templates = [
    {
      id: "carpenter",
      name: "Carpenter",
      description: "Perfect for skilled carpenters and woodworkers",
      image: "/placeholder.svg",
    },
    {
      id: "plumber",
      name: "Plumber",
      description: "Ideal for plumbing professionals",
      image: "/placeholder.svg",
    },
    {
      id: "hotel",
      name: "Hotel Management",
      description: "Designed for hospitality industry professionals",
      image: "/placeholder.svg",
    },
    {
      id: "receptionist",
      name: "Receptionist",
      description: "Perfect for front desk and administrative roles",
      image: "/placeholder.svg",
    },
    {
      id: "manager",
      name: "Manager",
      description: "For leadership and management positions",
      image: "/placeholder.svg",
    },
    {
      id: "psychologist",
      name: "Psychologist",
      description: "Tailored for mental health professionals",
      image: "/placeholder.svg",
    },
    {
      id: "doctor",
      name: "Doctor",
      description: "Specialized for medical practitioners",
      image: "/placeholder.svg",
    },
    {
      id: "nurse",
      name: "Nurse",
      description: "Created for nursing and healthcare staff",
      image: "/placeholder.svg",
    },
  ];

  const handleSelectTemplate = (id: string) => {
    setSelectedTemplate(id);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="container py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">Non-Technical Resume Templates</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Choose a template designed specifically for your non-technical profession
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {templates.map((template) => (
              <ResumeTemplateCard
                key={template.id}
                name={template.name}
                description={template.description}
                image={template.image}
                active={selectedTemplate === template.id}
                onClick={() => handleSelectTemplate(template.id)}
              />
            ))}
          </div>
          
          {selectedTemplate && (
            <div className="mt-12 text-center">
              <Link to={`/template/${selectedTemplate}`}>
                <Button size="lg" className="bg-resume-primary hover:bg-resume-secondary">
                  Continue with {templates.find(t => t.id === selectedTemplate)?.name} Template
                </Button>
              </Link>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Templates;
