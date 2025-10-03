import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Hash, Plus, MessageCircle, X } from "lucide-react";

const channels = [
  { id: 1, name: "general", unread: 0 },
  { id: 2, name: "announcements", unread: 2 },
  { id: 3, name: "random", unread: 0 },
  { id: 4, name: "development", unread: 5 },
  { id: 5, name: "design", unread: 1 },
  { id: 6, name: "marketing", unread: 0 },
];

const directMessages = [
  { id: 1, name: "Emma Rodriguez", avatar: "ER", online: true, unread: 0 },
  { id: 2, name: "David Kim", avatar: "DK", online: true, unread: 2 },
  { id: 3, name: "Maria Santos", avatar: "MS", online: false, unread: 0 },
  { id: 4, name: "Alex Thompson", avatar: "AT", online: true, unread: 1 },
  { id: 5, name: "Jordan Lee", avatar: "JL", online: false, unread: 0 },
];

interface SidebarProps {
  onClose?: () => void;
}

export function Sidebar({ onClose }: SidebarProps) {
  return (
    <div className="w-64 bg-sidebar text-sidebar-foreground flex flex-col h-full border-r border-sidebar-border">
      {/* Workspace Header */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sidebar-foreground mb-1">Design Team Hub</h2>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Emma Rodriguez</span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0 lg:hidden text-muted-foreground hover:text-sidebar-foreground"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-4">
          {/* Channels Section */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-muted-foreground text-sm uppercase tracking-wide">Channels</h3>
              <Button size="sm" variant="ghost" className="h-5 w-5 p-0 text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent">
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            <div className="space-y-1">
              {channels.map((channel) => (
                <div
                  key={channel.id}
                  className={`flex items-center gap-2 px-2 py-1 rounded text-sm cursor-pointer transition-colors ${
                    channel.name === "general"
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  }`}
                >
                  <Hash className="h-4 w-4" />
                  <span className="flex-1">{channel.name}</span>
                  {channel.unread > 0 && (
                    <span className="bg-destructive text-destructive-foreground text-xs px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                      {channel.unread}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Direct Messages Section */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-muted-foreground text-sm uppercase tracking-wide">Direct messages</h3>
              <Button size="sm" variant="ghost" className="h-5 w-5 p-0 text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent">
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            <div className="space-y-1">
              {directMessages.map((dm) => (
                <div
                  key={dm.id}
                  className="flex items-center gap-2 px-2 py-1 rounded text-sm cursor-pointer text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
                >
                  <div className="relative">
                    <Avatar className="h-5 w-5">
                      <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                        {dm.avatar}
                      </AvatarFallback>
                    </Avatar>
                    {dm.online && (
                      <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-green-500 border border-sidebar rounded-full"></div>
                    )}
                  </div>
                  <span className="flex-1">{dm.name}</span>
                  {dm.unread > 0 && (
                    <span className="bg-destructive text-destructive-foreground text-xs px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                      {dm.unread}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}