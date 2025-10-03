import { Sidebar } from "./components/Sidebar";
import { ChannelHeader } from "./components/ChannelHeader";
import { MessagePane } from "./components/MessagePane";
import { MessageInput } from "./components/MessageInput";
import { useState } from "react";
import { Button } from "./components/ui/button";
import { Menu, X } from "lucide-react";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex bg-background dark">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed lg:relative lg:translate-x-0 z-50 lg:z-auto transition-transform duration-200 ease-in-out lg:transition-none`}>
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile header with menu button */}
        <div className="lg:hidden flex items-center gap-3 p-4 bg-sidebar border-b border-sidebar-border">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(true)}
            className="h-8 w-8 p-0 text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <Menu className="h-4 w-4" />
          </Button>
          <h1 className="text-sidebar-foreground">Design Team Hub</h1>
        </div>
        
        {/* Channel Header */}
        <ChannelHeader />
        
        {/* Message Area */}
        <MessagePane />
        
        {/* Message Input */}
        <MessageInput />
      </div>
    </div>
  );
}