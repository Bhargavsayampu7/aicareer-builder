
import { useState } from "react";
import { useParams } from "react-router-dom";
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
  experience: Array<{
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  skills: string[];
  certifications: Array<{
    name: string;
    organization: string;
    date: string;
    description: string;
  }>;
  achievements: string[];
}

const BuildIndustryResume = () => {
  const { industryId, templateId } = useParams();
  const [activeTab, setActiveTab] = useState("about");
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
    experience: [
      {
        title: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
    skills: [],
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

  // Get industry-specific information
  const getIndustryName = () => {
    switch (industryId) {
      case "healthcare":
        return "Healthcare Industry";
      case "construction":
        return "Construction and Skilled Trade Industry";
      case "hospitality":
        return "Hospitality and Tourism Industry";
      case "education":
        return "Education Industry";
      case "food":
        return "Food and Beverage Industry";
      default:
        return "Industry";
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">
          Create Your {getIndustryName()} Resume
        </h1>
        
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
                <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 mb-6">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
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
                        placeholder="Professional Title" 
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
                          placeholder="Bachelor of Science" 
                          {...register("education[0].degree")}
                          onChange={(e) => {
                            const updatedEducation = [...resumeData.education];
                            updatedEducation[0] = { ...updatedEducation[0], degree: e.target.value };
                            handleFormChange("education", updatedEducation);
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="institution">Institution</Label>
                        <Input 
                          id="institution" 
                          placeholder="University Name" 
                          {...register("education[0].institution")}
                          onChange={(e) => {
                            const updatedEducation = [...resumeData.education];
                            updatedEducation[0] = { ...updatedEducation[0], institution: e.target.value };
                            handleFormChange("education", updatedEducation);
                          }}
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
                
                <TabsContent value="experience" className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Experience #1</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="jobTitle">Job Title</Label>
                        <Input 
                          id="jobTitle" 
                          placeholder="Position Title" 
                          {...register("experience[0].title")}
                          onChange={(e) => {
                            const updatedExperience = [...resumeData.experience];
                            updatedExperience[0] = { ...updatedExperience[0], title: e.target.value };
                            handleFormChange("experience", updatedExperience);
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input 
                          id="company" 
                          placeholder="Company Name" 
                          {...register("experience[0].company")}
                          onChange={(e) => {
                            const updatedExperience = [...resumeData.experience];
                            updatedExperience[0] = { ...updatedExperience[0], company: e.target.value };
                            handleFormChange("experience", updatedExperience);
                          }}
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
                        <Label htmlFor="jobEndDate">End Date (or Current)</Label>
                        <Input 
                          id="jobEndDate" 
                          placeholder="MM/YYYY or Present" 
                          {...register("experience[0].endDate")}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="jobDescription">Job Description</Label>
                      <Textarea 
                        id="jobDescription" 
                        placeholder="Describe your responsibilities and achievements..." 
                        rows={3}
                        {...register("experience[0].description")}
                      />
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Plus className="h-4 w-4 mr-2" /> Add Another Experience
                  </Button>
                </TabsContent>
                
                <TabsContent value="skills" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="skill">Add Skill</Label>
                    <Input 
                      id="skill" 
                      placeholder="Enter a skill and press Enter" 
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
                
                <TabsContent value="certs" className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Certification #1</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="certName">Certification Name</Label>
                        <Input 
                          id="certName" 
                          placeholder="Certification Title" 
                          {...register("certifications[0].name")}
                          onChange={(e) => {
                            const updatedCertifications = [...resumeData.certifications];
                            updatedCertifications[0] = { ...updatedCertifications[0], name: e.target.value };
                            handleFormChange("certifications", updatedCertifications);
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="certOrg">Issuing Organization</Label>
                        <Input 
                          id="certOrg" 
                          placeholder="Organization Name" 
                          {...register("certifications[0].organization")}
                          onChange={(e) => {
                            const updatedCertifications = [...resumeData.certifications];
                            updatedCertifications[0] = { ...updatedCertifications[0], organization: e.target.value };
                            handleFormChange("certifications", updatedCertifications);
                          }}
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
          </div>

          {/* Right column - Preview */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-8 h-[calc(100vh-10rem)]">
            <PreviewPane 
              resumeData={resumeData}
              template={templateId || "modern"}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BuildIndustryResume;
