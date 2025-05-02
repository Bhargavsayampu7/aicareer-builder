
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
  experience: Array<{
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
  }>;
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

// Sample resume templates for experienced professionals
const resumeTemplates = [
  {
    id: "executive",
    name: "Executive",
    description: "Professional template for senior roles",
    image: "/placeholder.svg",
  },
  {
    id: "modern-pro",
    name: "Modern Pro",
    description: "Contemporary design for tech professionals",
    image: "/placeholder.svg",
  },
  {
    id: "classic",
    name: "Classic",
    description: "Traditional LaTeX-inspired template",
    image: "/placeholder.svg",
  },
  {
    id: "technical",
    name: "Technical",
    description: "Designed for technical roles",
    image: "/placeholder.svg",
  },
];

const ExperiencedResume = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [selectedTemplate, setSelectedTemplate] = useState("executive");
  const [resumeData, setResumeData] = useState<ResumeData>({
    about: {
      name: "",
      title: "",
      email: "",
      phone: "",
      location: "",
      summary: "",
    },
    experience: [
      {
        title: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        current: false,
        description: "",
      },
    ],
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
        <h1 className="text-3xl font-bold mb-6">Create Your Professional Resume</h1>
        
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
                <TabsList className="grid grid-cols-3 md:grid-cols-7 mb-6">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="experience">Experience</TabsTrigger>
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
                        placeholder="Senior Software Engineer" 
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
                      placeholder="Write a compelling professional summary..." 
                      rows={4}
                      {...register("summary")}
                      onChange={(e) => updateAboutData({ summary: e.target.value })}
                    />
                    <p className="text-xs text-muted-foreground">
                      Highlight your years of experience, industry expertise, and key achievements.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="experience" className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Experience #1</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="jobTitle">Job Title</Label>
                        <Input 
                          id="jobTitle" 
                          placeholder="Senior Software Engineer" 
                          {...register("experience[0].title")}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input 
                          id="company" 
                          placeholder="Company Name" 
                          {...register("experience[0].company")}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="jobLocation">Location</Label>
                        <Input 
                          id="jobLocation" 
                          placeholder="City, State" 
                          {...register("experience[0].location")}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="jobStartDate">Start Date</Label>
                        <Input 
                          id="jobStartDate" 
                          placeholder="MM/YYYY" 
                          {...register("experience[0].startDate")}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="jobEndDate">End Date</Label>
                        <Input 
                          id="jobEndDate" 
                          placeholder="MM/YYYY or Present" 
                          {...register("experience[0].endDate")}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="jobDescription">Responsibilities & Achievements</Label>
                      <Textarea 
                        id="jobDescription" 
                        placeholder="• Led a team of 5 developers to deliver a critical project ahead of schedule
• Improved application performance by 40% through optimization
• Implemented CI/CD pipeline reducing deployment time by 60%" 
                        rows={5}
                        {...register("experience[0].description")}
                      />
                      <p className="text-xs text-muted-foreground">
                        Use bullet points to highlight specific achievements and responsibilities.
                      </p>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Plus className="h-4 w-4 mr-2" /> Add Another Experience
                  </Button>
                </TabsContent>
                
                <TabsContent value="education" className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Education #1</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="degree">Degree/Qualification</Label>
                        <Input 
                          id="degree" 
                          placeholder="Master of Computer Science" 
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
                        <Label htmlFor="eduStartDate">Start Date</Label>
                        <Input 
                          id="eduStartDate" 
                          placeholder="MM/YYYY" 
                          {...register("education[0].startDate")}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="eduEndDate">End Date</Label>
                        <Input 
                          id="eduEndDate" 
                          placeholder="MM/YYYY" 
                          {...register("education[0].endDate")}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eduDescription">Description (Optional)</Label>
                      <Textarea 
                        id="eduDescription" 
                        placeholder="Relevant coursework, honors, activities..." 
                        rows={2}
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
                      placeholder="Enter a skill and press Enter (e.g. Project Management, React, AWS)" 
                      onKeyDown={handleAddSkill}
                    />
                    <p className="text-xs text-muted-foreground">
                      Press Enter to add multiple skills. Focus on skills relevant to your target role.
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
                          placeholder="Enterprise CRM System" 
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
                        placeholder="React, Node.js, MongoDB, AWS" 
                        {...register("projects[0].technologies")}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectDesc">Description</Label>
                      <Textarea 
                        id="projectDesc" 
                        placeholder="Describe the project, your role, technical challenges, and business impact..." 
                        rows={4}
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
                          placeholder="AWS Solutions Architect Professional" 
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
                      Add awards, recognition, or significant professional accomplishments.
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
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

export default ExperiencedResume;
