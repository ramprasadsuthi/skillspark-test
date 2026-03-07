import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const PASSWORD = "root#123";
const SESSION_STORAGE_KEY = "admin_authenticated";

interface PasswordProtectProps {
  children: ReactNode;
}

const PasswordProtect = ({ children }: PasswordProtectProps) => {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem(SESSION_STORAGE_KEY) === "true"
  );
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === PASSWORD) {
      sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
      setIsAuthenticated(true);
      toast({
        title: "Success",
        description: "Authenticated successfully.",
      });
    } else {
      toast({
        title: "Error",
        description: "Incorrect password.",
        variant: "destructive",
      });
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-24"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1510519138101-570d1dca3d66?fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white'
      }}>
      <div className="glass bg-gray-900 shadow-xl p-8 text-center rounded-xl max-w-sm mx-auto">
        <h1 className="text-2xl font-display font-bold mb-4 text-white">Admin Access Required</h1>
        <p className="text-gray-200 mb-6">
          Please enter the password to access this page.
        </p>
        <div className="space-y-4">
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            className="bg-white text-gray-900" // Explicitly set background and text color
          />
          <Button onClick={handleLogin} size="lg" className="w-full bg-[#06B6D4] text-white hover:bg-[#0891B2] rounded-xl shadow-[0_10px_30px_rgba(59,130,246,0.4)]">
            Enter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PasswordProtect;
