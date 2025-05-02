
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-resume-primary">ResumeAI</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost">Home</Button>
          </Link>
          <Link to="/templates">
            <Button variant="ghost">Templates</Button>
          </Link>
          <Link to="/fresher">
            <Button variant="ghost">Fresher</Button>
          </Link>
          <Link to="/experienced">
            <Button variant="ghost">Experienced</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
