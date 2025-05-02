
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full border-t border-border mt-8">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <span className="text-xl font-bold text-resume-primary">ResumeAI</span>
          <p className="text-sm text-muted-foreground mt-2">
            Build ATS-optimized resumes with AI assistance
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div>
            <h3 className="font-semibold mb-2">Navigation</h3>
            <ul className="space-y-1">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
              <li><Link to="/templates" className="text-muted-foreground hover:text-foreground">Templates</Link></li>
              <li><Link to="/fresher" className="text-muted-foreground hover:text-foreground">Fresher</Link></li>
              <li><Link to="/experienced" className="text-muted-foreground hover:text-foreground">Experienced</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container border-t border-border py-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} ResumeAI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
