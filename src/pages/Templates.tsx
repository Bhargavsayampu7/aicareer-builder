
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getIndustryList } from "@/data/industryTemplates";

const Templates = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  
  const industries = getIndustryList();

  const handleSelectIndustry = (id: string) => {
    setSelectedIndustry(id);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="container py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">Non-Technical Resume Builder</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Choose your industry to get started with specialized resume templates
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div 
                key={industry.id}
                className="cursor-pointer"
                onClick={() => handleSelectIndustry(industry.id)}
              >
                <div className={`bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 ${
                  selectedIndustry === industry.id ? "ring-2 ring-resume-primary shadow-lg" : "hover:shadow-md"
                }`}>
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={`${industry.name}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <industry.icon className="h-6 w-6 text-resume-primary" />
                      <h3 className="font-medium text-lg">{industry.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{industry.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {selectedIndustry && (
            <div className="mt-12 text-center">
              <Link to={`/industry/${selectedIndustry}`}>
                <Button size="lg" className="bg-resume-primary hover:bg-resume-secondary">
                  Continue with {industries.find(i => i.id === selectedIndustry)?.name}
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
