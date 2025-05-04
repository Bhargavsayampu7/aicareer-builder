
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { User, Briefcase } from "lucide-react";

const Technical = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="container py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Technical Resume Builder
            </h1>
            <p className="text-xl text-muted-foreground">
              Are you a fresher or do you have professional experience? Choose the option that best describes you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-all">
                <User className="mx-auto h-16 w-16 text-resume-primary mb-4" />
                <h2 className="text-2xl font-bold mb-4">Fresher</h2>
                <p className="text-muted-foreground mb-6">
                  Perfect for students or recent graduates with limited or no professional experience.
                </p>
                <Link to="/fresher-templates">
                  <Button size="lg" className="bg-resume-primary hover:bg-resume-secondary w-full">
                    Choose Fresher Template
                  </Button>
                </Link>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-all">
                <Briefcase className="mx-auto h-16 w-16 text-resume-primary mb-4" />
                <h2 className="text-2xl font-bold mb-4">Experienced</h2>
                <p className="text-muted-foreground mb-6">
                  Designed for professionals with work experience seeking to highlight their career achievements.
                </p>
                <Link to="/experienced-templates">
                  <Button size="lg" className="bg-resume-primary hover:bg-resume-secondary w-full">
                    Choose Experienced Template
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Technical;
