"use client";
import { useState } from 'react';
import clsx from 'clsx';

const channels = [
  { id: 'general', name: 'general' },
  { id: 'ai-lab', name: 'ai-lab' },
  { id: 'random', name: 'random' },
];

const dms = [
  { id: 'u-alex', name: 'Alex' },
  { id: 'u-jamie', name: 'Jamie' },
  { id: 'u-sam', name: 'Sam' },
];

export default function Sidebar() {
  const [active, setActive] = useState<string>('general');
  return (
    <div className="h-full flex flex-col">
      <div className="p-3 text-sm font-medium">Hive Workspace</div>
      <div className="px-2">
        <Section title="Channels">
          {channels.map((c) => (
            <Item
              key={c.id}
              label={`# ${c.name}`}
              active={active === c.id}
              onClick={() => setActive(c.id)}
            />
          ))}
        </Section>
        <Section title="Direct messages">
          {dms.map((u) => (
            <Item
              key={u.id}
              label={u.name}
              active={active === u.id}
              onClick={() => setActive(u.id)}
            />
          ))}
        </Section>
      </div>
      <div className="mt-auto p-3 text-xs text-muted">AI Tools · 17-316/17-616</div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <div className="px-2 py-1 text-xs uppercase tracking-wide text-muted">{title}</div>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function Item({ label, active, onClick }: { label: string; active?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'w-full text-left px-2 py-1.5 rounded-md text-sm',
        active ? 'bg-white/10 text-foreground' : 'text-muted hover:bg-white/5'
      )}
    >
      {label}
    </button>
  );
}


