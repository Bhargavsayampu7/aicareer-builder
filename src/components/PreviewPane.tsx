
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, ZoomIn, ZoomOut } from 'lucide-react';

interface PreviewPaneProps {
  resumeData: any;
  template: string;
}

const PreviewPane = ({ resumeData, template }: PreviewPaneProps) => {
  const [scale, setScale] = useState(1);

  const handleZoomIn = () => {
    if (scale < 1.5) {
      setScale(scale + 0.1);
    }
  };

  const handleZoomOut = () => {
    if (scale > 0.5) {
      setScale(scale - 0.1);
    }
  };

  const handleDownloadPDF = () => {
    // This is a placeholder for the PDF download functionality
    console.log('Downloading PDF...');
    // Will implement actual PDF generation in future version
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Resume Preview</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={handleZoomOut}>
            <ZoomOut className="h-4 w-4" />
          </Button>
          <span className="text-xs w-12 text-center">
            {Math.round(scale * 100)}%
          </span>
          <Button variant="outline" size="icon" onClick={handleZoomIn}>
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button onClick={handleDownloadPDF}>
            <Download className="h-4 w-4 mr-2" /> PDF
          </Button>
        </div>
      </div>
      <Card className="flex-1 overflow-auto p-4 bg-white">
        <div
          className="resume-preview mx-auto transition-transform"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'top center',
            width: '21cm', // A4 width
            height: '29.7cm', // A4 height
            padding: '1cm',
          }}
        >
          {/* Placeholder for the actual resume template */}
          <div className="h-full border border-dashed border-gray-300 flex items-center justify-center">
            <div className="text-center p-6">
              {template === "modern" && (
                <div>
                  <h1 className="text-2xl font-bold mb-2">{resumeData?.about?.name || "Your Name"}</h1>
                  <p className="text-muted-foreground mb-4">{resumeData?.about?.title || "Professional Title"}</p>
                  <hr className="my-4" />
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <h2 className="font-semibold text-resume-primary mb-2">Contact</h2>
                      <p>{resumeData?.about?.email || "email@example.com"}</p>
                      <p>{resumeData?.about?.phone || "123-456-7890"}</p>
                    </div>
                    <div>
                      <h2 className="font-semibold text-resume-primary mb-2">Education</h2>
                      <p>{resumeData?.education?.[0]?.degree || "Your Degree"}</p>
                      <p>{resumeData?.education?.[0]?.institution || "University Name"}</p>
                    </div>
                    <div>
                      <h2 className="font-semibold text-resume-primary mb-2">Skills</h2>
                      <p>{resumeData?.skills?.join(", ") || "Your skills"}</p>
                    </div>
                  </div>
                </div>
              )}
              
              {template === "professional" && (
                <div>
                  <div className="bg-resume-primary text-white p-4 -m-4 mb-4">
                    <h1 className="text-2xl font-bold">{resumeData?.about?.name || "Your Name"}</h1>
                    <p>{resumeData?.about?.title || "Professional Title"}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="col-span-2">
                      <h2 className="font-semibold border-b border-resume-primary pb-1 mb-2">About</h2>
                      <p>{resumeData?.about?.summary || "Your professional summary will appear here"}</p>
                      
                      <h2 className="font-semibold border-b border-resume-primary pb-1 mb-2 mt-4">Education</h2>
                      <p>{resumeData?.education?.[0]?.degree || "Your Degree"}</p>
                      <p>{resumeData?.education?.[0]?.institution || "University Name"}</p>
                    </div>
                    <div>
                      <h2 className="font-semibold border-b border-resume-primary pb-1 mb-2">Contact</h2>
                      <p>{resumeData?.about?.email || "email@example.com"}</p>
                      <p>{resumeData?.about?.phone || "123-456-7890"}</p>
                      
                      <h2 className="font-semibold border-b border-resume-primary pb-1 mb-2 mt-4">Skills</h2>
                      <p>{resumeData?.skills?.join(", ") || "Your skills"}</p>
                    </div>
                  </div>
                </div>
              )}
              
              {template === "minimal" && (
                <div className="text-left">
                  <h1 className="text-3xl font-light mb-1">{resumeData?.about?.name || "Your Name"}</h1>
                  <p className="text-resume-primary">{resumeData?.about?.title || "Professional Title"}</p>
                  <hr className="my-4 border-resume-neutral" />
                  
                  <div className="grid grid-cols-4 gap-6">
                    <div className="col-span-1">
                      <h2 className="text-xs uppercase tracking-wider text-resume-neutral mb-2">Contact</h2>
                      <p className="text-sm">{resumeData?.about?.email || "email@example.com"}</p>
                      <p className="text-sm">{resumeData?.about?.phone || "123-456-7890"}</p>
                      
                      <h2 className="text-xs uppercase tracking-wider text-resume-neutral mb-2 mt-4">Skills</h2>
                      <p className="text-sm">{resumeData?.skills?.join(", ") || "Your skills"}</p>
                    </div>
                    
                    <div className="col-span-3">
                      <h2 className="text-xs uppercase tracking-wider text-resume-neutral mb-2">About</h2>
                      <p className="text-sm">{resumeData?.about?.summary || "Your professional summary will appear here"}</p>
                      
                      <h2 className="text-xs uppercase tracking-wider text-resume-neutral mb-2 mt-4">Education</h2>
                      <p className="text-sm font-medium">{resumeData?.education?.[0]?.degree || "Your Degree"}</p>
                      <p className="text-sm">{resumeData?.education?.[0]?.institution || "University Name"}</p>
                    </div>
                  </div>
                </div>
              )}
              
              {!["modern", "professional", "minimal"].includes(template) && (
                <div className="text-center">
                  <p className="text-lg font-medium">Select a template to preview your resume</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PreviewPane;
