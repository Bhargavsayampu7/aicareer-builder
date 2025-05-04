
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResumeTemplateCard from "@/components/ResumeTemplateCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { fresherTemplates } from "@/data/technicalTemplates";

const FresherTemplates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  
  const handleSelectTemplate = (id: string) => {
    setSelectedTemplate(id);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="container py-16">
          <h1 className="text-4xl font-bold mb-8">Fresher Technical Resume Templates</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Choose a template designed specifically for entry-level technical positions
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {fresherTemplates.map((template) => (
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
              <Link to={`/build/fresher/${selectedTemplate}`}>
                <Button size="lg" className="bg-resume-primary hover:bg-resume-secondary">
                  Continue with this template <ArrowRight className="ml-2" />
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

export default FresherTemplates;
