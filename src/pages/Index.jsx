import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Navigation from '../components/Navigation';

const Index = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-bold">My App</h1>
      </header>
      
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-4">Welcome to Your App</h2>
        <p className="mb-4">This is a bare-bones application that you can modify and build upon.</p>
        
        <div className="space-y-4">
          <Input 
            type="text" 
            placeholder="Enter something..." 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)}
            className="max-w-md"
          />
          <Button onClick={() => alert(`You entered: ${inputValue}`)}>
            Submit
          </Button>
        </div>
      </main>
      
      <footer className="bg-secondary text-secondary-foreground p-4 text-center">
        <p>&copy; 2024 My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
