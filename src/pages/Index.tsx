
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { User, Briefcase, Wrench, Hotel } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Build Your <span className="text-resume-primary">AI-Powered</span> Resume
              </h1>
              <p className="text-xl text-muted-foreground">
                Create a professional, ATS-optimized resume in minutes with our AI-assisted resume builder.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/technical">
                  <Button size="lg" className="bg-resume-primary hover:bg-resume-secondary">
                    <Wrench className="mr-2 h-5 w-5" />
                    Technical Roles
                  </Button>
                </Link>
                <Link to="/templates">
                  <Button size="lg" variant="outline">
                    <Hotel className="mr-2 h-5 w-5" />
                    Non-Technical Roles
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="/placeholder.svg" 
                alt="Resume Builder" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-2">Multiple Templates</h3>
                <p>Choose from professional, modern templates designed to impress recruiters.</p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-2">ATS Optimization</h3>
                <p>Get real-time feedback to ensure your resume passes through applicant tracking systems.</p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-2">AI Content Suggestions</h3>
                <p>Let AI help you craft compelling bullet points and achievements.</p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-2">Real-time Preview</h3>
                <p>See changes instantly as you build your perfect resume.</p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-2">Grammar Checking</h3>
                <p>Ensure your resume is free of grammatical errors and typos.</p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-2">One-Click Download</h3>
                <p>Export your finished resume as a professional PDF with a single click.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-16">
          <div className="bg-resume-primary/10 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your Professional Resume?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Stand out from the competition with an ATS-optimized resume.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/technical">
                <Button size="lg" className="bg-resume-primary hover:bg-resume-secondary">
                  Technical Roles
                </Button>
              </Link>
              <Link to="/templates">
                <Button size="lg" variant="outline">
                  Non-Technical Roles
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
