'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

interface Message {
  id: string;
  role: 'user' | 'bot';
  content: string;
}

const WELCOME_MESSAGE: Message = {
  id: 'welcome',
  role: 'bot',
  content:
    'Selam kanka! Ben Trilece. İlişki, manita, tartışma, barışma... ne derdin varsa sor. Ama hazır ol, ben tatlı konuşmam. 🔥',
};

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'bot',
          content: data.reply || data.error || 'Bir hata oluştu.',
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'bot',
          content: 'Bağlantı hatası. Tekrar dene kanka.',
        },
      ]);
    }

    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="chat-fab"
        aria-label="Chatbot"
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <span style={{ fontSize: '28px' }}>🤖</span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-window-header">
            <div className="chat-header-info">
              <span className="chat-header-avatar">🔥</span>
              <div>
                <div className="chat-header-name">Trilece</div>
                <div className="chat-header-status">
                  {loading ? 'Yazıyor...' : 'Çevrimiçi'}
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="chat-close-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`chat-msg ${msg.role === 'user' ? 'chat-msg-user' : 'chat-msg-bot'}`}
              >
                {msg.role === 'bot' && (
                  <div className="chat-msg-avatar">🔥</div>
                )}
                <div className={`chat-msg-bubble ${msg.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-bot'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="chat-msg chat-msg-bot">
                <div className="chat-msg-avatar">🔥</div>
                <div className="chat-bubble-bot chat-msg-bubble chat-typing">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-area">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Mesajını yaz..."
              rows={1}
              disabled={loading}
              className="chat-textarea"
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="chat-send-btn"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
