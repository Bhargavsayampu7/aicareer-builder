
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResumeTemplateCard from "@/components/ResumeTemplateCard";
import { Button } from "@/components/ui/button";
import { 
  Hospital, 
  Construction, 
  Hotel, 
  GraduationCap, 
  Utensils,
  FileText,
  ArrowRight
} from "lucide-react";

const IndustryTemplates = () => {
  const { industryId } = useParams();
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  
  // Define industry information
  const industries = {
    healthcare: {
      name: "Healthcare Industry",
      icon: Hospital,
      templates: [
        {
          id: "healthcare-modern",
          name: "Modern Healthcare",
          description: "Clean and professional design for healthcare professionals",
          image: "/placeholder.svg",
        },
        {
          id: "healthcare-classic",
          name: "Classic Medical",
          description: "Traditional layout ideal for established medical roles",
          image: "/placeholder.svg",
        },
        {
          id: "healthcare-minimalist",
          name: "Minimalist Care",
          description: "Simple design emphasizing clinical experience and skills",
          image: "/placeholder.svg",
        },
        {
          id: "healthcare-executive",
          name: "Executive Medical",
          description: "Elegant design for senior healthcare management positions",
          image: "/placeholder.svg",
        },
        {
          id: "healthcare-specialist",
          name: "Medical Specialist",
          description: "Focused layout highlighting specialized medical training",
          image: "/placeholder.svg",
        },
        {
          id: "healthcare-researcher",
          name: "Medical Researcher",
          description: "Academic-focused template for research positions",
          image: "/placeholder.svg",
        },
      ]
    },
    construction: {
      name: "Construction and Skilled Trade Industry",
      icon: Construction,
      templates: [
        {
          id: "construction-skilled",
          name: "Skilled Tradesperson",
          description: "Highlights hands-on experience and technical skills",
          image: "/placeholder.svg",
        },
        {
          id: "construction-project",
          name: "Project Manager",
          description: "Focus on leadership and project completion metrics",
          image: "/placeholder.svg",
        },
        {
          id: "construction-contractor",
          name: "Independent Contractor",
          description: "Perfect for self-employed professionals in construction",
          image: "/placeholder.svg",
        },
        {
          id: "construction-safety",
          name: "Safety Specialist",
          description: "Emphasizes certifications and safety compliance",
          image: "/placeholder.svg",
        },
        {
          id: "construction-technical",
          name: "Technical Specialist",
          description: "Detailed focus on specific technical construction skills",
          image: "/placeholder.svg",
        },
        {
          id: "construction-foreman",
          name: "Construction Foreman",
          description: "Leadership-focused template for supervisory roles",
          image: "/placeholder.svg",
        },
      ]
    },
    hospitality: {
      name: "Hospitality and Tourism Industry",
      icon: Hotel,
      templates: [
        {
          id: "hospitality-service",
          name: "Service Excellence",
          description: "Customer-focused design for front-line service roles",
          image: "/placeholder.svg",
        },
        {
          id: "hospitality-management",
          name: "Hospitality Management",
          description: "Leadership-oriented design for management positions",
          image: "/placeholder.svg",
        },
        {
          id: "hospitality-events",
          name: "Events Coordinator",
          description: "Layout emphasizing event planning and execution",
          image: "/placeholder.svg",
        },
        {
          id: "hospitality-concierge",
          name: "Concierge Professional",
          description: "Elegant design for high-end guest service roles",
          image: "/placeholder.svg",
        },
        {
          id: "hospitality-tourism",
          name: "Tourism Guide",
          description: "Engaging layout for tourism and guiding professionals",
          image: "/placeholder.svg",
        },
        {
          id: "hospitality-luxury",
          name: "Luxury Hospitality",
          description: "Premium design for luxury hotel and resort positions",
          image: "/placeholder.svg",
        },
      ]
    },
    education: {
      name: "Education Industry",
      icon: GraduationCap,
      templates: [
        {
          id: "education-teacher",
          name: "Professional Teacher",
          description: "Clear format showcasing teaching qualifications and experience",
          image: "/placeholder.svg",
        },
        {
          id: "education-academic",
          name: "Academic CV",
          description: "Comprehensive academic resume for higher education",
          image: "/placeholder.svg",
        },
        {
          id: "education-counselor",
          name: "Education Counselor",
          description: "Focused on student guidance and counseling skills",
          image: "/placeholder.svg",
        },
        {
          id: "education-administrator",
          name: "Education Administrator",
          description: "Leadership-focused template for administrative roles",
          image: "/placeholder.svg",
        },
        {
          id: "education-specialist",
          name: "Education Specialist",
          description: "For specialized teaching and curriculum development",
          image: "/placeholder.svg",
        },
        {
          id: "education-coach",
          name: "Educational Coach",
          description: "Dynamic layout for coaching and mentoring roles",
          image: "/placeholder.svg",
        },
      ]
    },
    food: {
      name: "Food and Beverage Industry",
      icon: Utensils,
      templates: [
        {
          id: "food-culinary",
          name: "Culinary Professional",
          description: "Showcases culinary skills and kitchen experience",
          image: "/placeholder.svg",
        },
        {
          id: "food-service",
          name: "Service Staff",
          description: "Customer-focused design for front-of-house roles",
          image: "/placeholder.svg",
        },
        {
          id: "food-management",
          name: "Restaurant Management",
          description: "Business-oriented design for management positions",
          image: "/placeholder.svg",
        },
        {
          id: "food-sommelier",
          name: "Beverage Specialist",
          description: "Elegant design for wine and beverage professionals",
          image: "/placeholder.svg",
        },
        {
          id: "food-pastry",
          name: "Pastry Artist",
          description: "Creative layout for pastry chefs and bakers",
          image: "/placeholder.svg",
        },
        {
          id: "food-nutritionist",
          name: "Food Nutritionist",
          description: "Health-focused template for nutrition professionals",
          image: "/placeholder.svg",
        },
      ]
    },
  };
  
  // Get current industry data
  const currentIndustry = industryId && industryId in industries 
    ? industries[industryId as keyof typeof industries] 
    : null;
    
  if (!currentIndustry) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Industry Not Found</h1>
            <p className="mb-8">The industry you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/templates')}>
              Return to Industries
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const handleSelectTemplate = (id: string) => {
    setSelectedTemplate(id);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="container py-16">
          <div className="flex items-center gap-3 mb-8">
            <currentIndustry.icon className="h-8 w-8 text-resume-primary" />
            <h1 className="text-3xl font-bold">{currentIndustry.name} Templates</h1>
          </div>
          
          <p className="text-lg text-muted-foreground mb-12">
            Choose a template designed specifically for {currentIndustry.name.toLowerCase()} professionals
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {currentIndustry.templates.map((template) => (
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
              <Link to={`/build/${industryId}/${selectedTemplate}`}>
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

export default IndustryTemplates;
