
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResumeTemplateCard from "@/components/ResumeTemplateCard";
import PreviewPane from "@/components/PreviewPane";
import { Separator } from "@/components/ui/separator";
import { Plus, Upload } from "lucide-react";

interface ResumeData {
  about: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
  };
  education: Array<{
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  skills: string[];
  projects: Array<{
    name: string;
    description: string;
    technologies: string;
    link: string;
  }>;
  certifications: Array<{
    name: string;
    organization: string;
    date: string;
    description: string;
  }>;
  achievements: string[];
}

// Sample resume templates
const resumeTemplates = [
  {
    id: "modern",
    name: "Modern",
    description: "Clean and contemporary design",
    image: "/placeholder.svg",
  },
  {
    id: "professional",
    name: "Professional",
    description: "Traditional and structured layout",
    image: "/placeholder.svg",
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Simple and elegant design",
    image: "/placeholder.svg",
  },
];

const FresherResume = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [selectedTemplate, setSelectedTemplate] = useState("modern");
  const [resumeData, setResumeData] = useState<ResumeData>({
    about: {
      name: "",
      title: "",
      email: "",
      phone: "",
      location: "",
      summary: "",
    },
    education: [
      {
        degree: "",
        institution: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
    skills: [],
    projects: [
      {
        name: "",
        description: "",
        technologies: "",
        link: "",
      },
    ],
    certifications: [
      {
        name: "",
        organization: "",
        date: "",
        description: "",
      },
    ],
    achievements: [],
  });

  const { register, handleSubmit } = useForm();

  const handleUploadResume = () => {
    // This is a placeholder for the resume upload functionality
    console.log("Upload resume functionality will be implemented in the future");
  };

  const handleFormChange = (section: string, data: any) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  const handleAddSkill = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.currentTarget.value.trim() !== "") {
      e.preventDefault();
      const newSkill = e.currentTarget.value.trim();
      setResumeData((prev) => ({
        ...prev,
        skills: [...prev.skills, newSkill],
      }));
      e.currentTarget.value = "";
    }
  };

  const handleAddAchievement = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.currentTarget.value.trim() !== "") {
      e.preventDefault();
      const newAchievement = e.currentTarget.value.trim();
      setResumeData((prev) => ({
        ...prev,
        achievements: [...prev.achievements, newAchievement],
      }));
      e.currentTarget.value = "";
    }
  };

  const updateAboutData = (data: any) => {
    handleFormChange("about", { ...resumeData.about, ...data });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">Create Your Fresher Resume</h1>
        
        <div className="flex flex-col-reverse lg:flex-row gap-8">
          {/* Left column - Form */}
          <div className="w-full lg:w-7/12">
            <Card className="p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Resume Information</h2>
                <Button variant="outline" onClick={handleUploadResume}>
                  <Upload className="h-4 w-4 mr-2" /> Upload Resume
                </Button>
              </div>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-6">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                  <TabsTrigger value="projects">Projects</TabsTrigger>
                  <TabsTrigger value="certs">Certifications</TabsTrigger>
                  <TabsTrigger value="achievements">Achievements</TabsTrigger>
                </TabsList>
                
                <TabsContent value="about" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        placeholder="John Doe" 
                        {...register("name")}
                        onChange={(e) => updateAboutData({ name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title">Professional Title</Label>
                      <Input 
                        id="title" 
                        placeholder="Computer Science Graduate" 
                        {...register("title")}
                        onChange={(e) => updateAboutData({ title: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="johndoe@example.com" 
                        {...register("email")}
                        onChange={(e) => updateAboutData({ email: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input 
                        id="phone" 
                        placeholder="123-456-7890" 
                        {...register("phone")}
                        onChange={(e) => updateAboutData({ phone: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input 
                      id="location" 
                      placeholder="City, State" 
                      {...register("location")}
                      onChange={(e) => updateAboutData({ location: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="summary">Professional Summary</Label>
                    <Textarea 
                      id="summary" 
                      placeholder="Write a brief summary about yourself..." 
                      rows={4}
                      {...register("summary")}
                      onChange={(e) => updateAboutData({ summary: e.target.value })}
                    />
                  </div>
                </TabsContent>
                
                <TabsContent value="education" className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Education #1</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="degree">Degree/Qualification</Label>
                        <Input 
                          id="degree" 
                          placeholder="Bachelor of Computer Science" 
                          {...register("education[0].degree")}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="institution">Institution</Label>
                        <Input 
                          id="institution" 
                          placeholder="University Name" 
                          {...register("education[0].institution")}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="eduLocation">Location</Label>
                        <Input 
                          id="eduLocation" 
                          placeholder="City, State" 
                          {...register("education[0].location")}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="startDate">Start Date</Label>
                        <Input 
                          id="startDate" 
                          placeholder="MM/YYYY" 
                          {...register("education[0].startDate")}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="endDate">End Date (or Expected)</Label>
                        <Input 
                          id="endDate" 
                          placeholder="MM/YYYY" 
                          {...register("education[0].endDate")}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eduDescription">Description</Label>
                      <Textarea 
                        id="eduDescription" 
                        placeholder="Relevant achievements, courses, or GPA..." 
                        rows={3}
                        {...register("education[0].description")}
                      />
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Plus className="h-4 w-4 mr-2" /> Add Another Education
                  </Button>
                </TabsContent>
                
                <TabsContent value="skills" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="skill">Add Skill</Label>
                    <Input 
                      id="skill" 
                      placeholder="Enter a skill and press Enter (e.g. Java, Python, React)" 
                      onKeyDown={handleAddSkill}
                    />
                    <p className="text-xs text-muted-foreground">
                      Press Enter to add multiple skills
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {resumeData.skills.map((skill, index) => (
                      <div 
                        key={index} 
                        className="bg-secondary px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                        <button 
                          className="ml-2 text-muted-foreground hover:text-foreground"
                          onClick={() => {
                            setResumeData((prev) => ({
                              ...prev,
                              skills: prev.skills.filter((_, i) => i !== index),
                            }));
                          }}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="projects" className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Project #1</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="projectName">Project Name</Label>
                        <Input 
                          id="projectName" 
                          placeholder="Portfolio Website" 
                          {...register("projects[0].name")}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="projectLink">Project Link (Optional)</Label>
                        <Input 
                          id="projectLink" 
                          placeholder="https://github.com/username/project" 
                          {...register("projects[0].link")}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectTech">Technologies Used</Label>
                      <Input 
                        id="projectTech" 
                        placeholder="HTML, CSS, JavaScript, React" 
                        {...register("projects[0].technologies")}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectDesc">Description</Label>
                      <Textarea 
                        id="projectDesc" 
                        placeholder="Describe your project, your role, and the impact..." 
                        rows={3}
                        {...register("projects[0].description")}
                      />
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Plus className="h-4 w-4 mr-2" /> Add Another Project
                  </Button>
                </TabsContent>
                
                <TabsContent value="certs" className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Certification #1</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="certName">Certification Name</Label>
                        <Input 
                          id="certName" 
                          placeholder="AWS Certified Developer" 
                          {...register("certifications[0].name")}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="certOrg">Issuing Organization</Label>
                        <Input 
                          id="certOrg" 
                          placeholder="Amazon Web Services" 
                          {...register("certifications[0].organization")}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="certDate">Date Earned</Label>
                      <Input 
                        id="certDate" 
                        placeholder="MM/YYYY" 
                        {...register("certifications[0].date")}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="certDesc">Description (Optional)</Label>
                      <Textarea 
                        id="certDesc" 
                        placeholder="Additional details about your certification..." 
                        rows={2}
                        {...register("certifications[0].description")}
                      />
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Plus className="h-4 w-4 mr-2" /> Add Another Certification
                  </Button>
                </TabsContent>
                
                <TabsContent value="achievements" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="achievement">Add Achievement</Label>
                    <Input 
                      id="achievement" 
                      placeholder="Enter an achievement and press Enter" 
                      onKeyDown={handleAddAchievement}
                    />
                    <p className="text-xs text-muted-foreground">
                      Press Enter to add multiple achievements
                    </p>
                  </div>
                  
                  <div className="space-y-2 mt-4">
                    {resumeData.achievements.map((achievement, index) => (
                      <div 
                        key={index} 
                        className="flex items-center justify-between bg-secondary/50 p-3 rounded-lg"
                      >
                        <span>{achievement}</span>
                        <button 
                          className="text-muted-foreground hover:text-foreground"
                          onClick={() => {
                            setResumeData((prev) => ({
                              ...prev,
                              achievements: prev.achievements.filter((_, i) => i !== index),
                            }));
                          }}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </Card>

            <h3 className="text-xl font-semibold mb-4">Choose a Template</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {resumeTemplates.map((template) => (
                <ResumeTemplateCard
                  key={template.id}
                  name={template.name}
                  description={template.description}
                  image={template.image}
                  active={selectedTemplate === template.id}
                  onClick={() => setSelectedTemplate(template.id)}
                />
              ))}
            </div>
          </div>

          {/* Right column - Preview */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-8 h-[calc(100vh-10rem)]">
            <PreviewPane 
              resumeData={resumeData}
              template={selectedTemplate}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FresherResume;
