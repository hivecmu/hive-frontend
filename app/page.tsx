import Sidebar from '@/components/Sidebar';
import Thread from '@/components/Thread';

export default function Page() {
  return (
    <div className="grid h-screen grid-cols-[280px_1fr]">
      <aside className="bg-sidebar text-[color:rgb(var(--sidebar-foreground))] border-r border-black/40">
        <Sidebar />
      </aside>
      <main className="flex flex-col">
        <div className="border-b border-black/40 px-4 py-3 text-sm text-muted"># general</div>
        <Thread />
      </main>
    </div>
  );
}


