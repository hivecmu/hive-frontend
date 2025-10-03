"use client";
import { useState } from 'react';

type Message = {
  id: string;
  author: string;
  time: string;
  text: string;
};

const initialMessages: Message[] = [
  { id: 'm1', author: 'Alex', time: '9:13 AM', text: 'Welcome to the AI Tools workspace.' },
  { id: 'm2', author: 'Jamie', time: '9:15 AM', text: 'Let’s build the Slack-like UI from Figma.' },
  { id: 'm3', author: 'Sam', time: '9:18 AM', text: 'I’ll wire a quick prototype with Tailwind.' },
];

export default function Thread() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');

  function send() {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages((prev) => [
      ...prev,
      { id: `m${prev.length + 1}`, author: 'You', time: new Date().toLocaleTimeString(), text: trimmed },
    ]);
    setInput('');
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {messages.map((m) => (
          <div key={m.id} className="flex gap-3">
            <div className="h-9 w-9 rounded bg-white/10" />
            <div>
              <div className="text-sm"><span className="font-medium">{m.author}</span> <span className="text-muted">{m.time}</span></div>
              <div className="text-sm leading-6">{m.text}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-black/40 p-4">
        <div className="flex items-center gap-2 rounded-md bg-white/5 px-3 py-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
            placeholder="Message #general"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted"
          />
          <button className="text-sm text-accent" onClick={send}>Send</button>
        </div>
      </div>
    </div>
  );
}


