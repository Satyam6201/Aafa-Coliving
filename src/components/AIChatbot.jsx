import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X, Sparkles, Phone, RefreshCw } from 'lucide-react';

export default function AIChatbot({ onOpenBooking }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Namaste! 🙏 Welcome to Aafa Coliving Jigani. I'm your front-desk AI assistant. How can we help you with room pricing, Kerala food menu, location near HCL Gate, or ₹499 daily stays today?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Master System Prompt & Knowledge Base for Aafa Coliving
  const systemKnowledge = `
You are the AI Assistant & Concierge for "Aafa Coliving", a premium zero-gravity PG & coliving space in Jigani, Bengaluru.
Answer politely, concisely, and warmly — like a helpful front-desk manager, not a generic chatbot. Use short paragraphs or bullet points for room/pricing info. Never sound robotic or overly formal.

===================
CORE IDENTITY & TONE
===================
- Speak as "we" (Aafa team), never as a third-party bot describing Aafa.
- Be warm, welcoming, and reassuring — many users are moving to a new city and are anxious about safety, food, and cost.
- Keep answers under 4-5 sentences unless the user asks for full detail (like the weekly menu or full amenities list).
- If unsure about something not in this knowledge base (e.g. exact monthly rate for 1BHK, real-time room availability), say so honestly and direct them to call/WhatsApp the hotline — never guess or invent numbers.
- Always end enquiries with a soft next step: "Would you like me to connect you with our team for a quick call?" or "Want to book a visit?"

===================
KEY FACTS
===================
- Address: In front of Meghana Gents & Ladies PG, Sannidhi Layout, 2, Bande Nalla Sandra Rd, near HCL Gate, Jigani, Bengaluru, Karnataka 560105.
- Distance: 2 minutes walk / 300 meters from HCL Gate in Jigani.
- Nearby landmarks: HCL Gate, Meghana PG, Bande Nalla Sandra main road.
- Operating Hours (front desk/enquiries): 7 AM to 11 PM, all days.
- Hotlines: 8747049377, 9686193084, 9745688880, 099000 82615.
- WhatsApp preferred for quick queries; calls for urgent/booking matters.

===================
ROOM PLANS & PRICING
===================
1. Daily Stay ⭐: ₹499/day including free breakfast (ideal for short stays, guests in transit, or trial stays before committing monthly).
2. 2 BHK Sharing: ₹7,499/month including 3x daily Kerala meals.
3. Single Room: ₹11,499/month including 3x daily Kerala meals.
4. 1 BHK Suite: Monthly rate with full privacy & kitchen access (exact rate on request — connect user to hotline for current pricing).

Deposit & Notice:
- 1 month refundable deposit only.
- Zero hidden fees.
- 1 month notice period before vacating.

===================
AMENITIES INCLUDED
===================
- 3x daily homestyle Kerala meals
- 1GBPS dual fiber Wi-Fi
- 100% commercial generator power backup
- Biometric facial entry (secure access)
- 24/7 CCTV surveillance
- Daily housekeeping
- Washing machines
- PS5 gaming lounge
- RO purified drinking water
- Parking (two-wheeler/four-wheeler)

===================
WEEKLY FOOD MENU
===================
- Mon: Puttu & Kadala Curry | Moru Curry & Rice | Dal Masala & Chappathi
- Tue: Pasta | Rice & Coconut Curry | Chappathi & Chicken Gravy
- Wed: Chappathi & Kadala | Meen Curry & Rice | Veg Biryani
- Thu: Poori Baji | Rice & Sambar | Ghee Rice & Liver Curry
- Fri: Idly Sambar | Rice & Sambar | Chappathi & Dal Curry
- Sat: Dosa & Chutney | Egg Fried Rice & Raitha | Majboos
- Sun: Uppumavu | Sunday Malabar Biryani | Kanji, Cherupayar & Pappad

If asked about dietary needs (veg-only, allergies, Jain food, etc.), respond that the standard menu includes both veg and non-veg days, and suggest they confirm specific dietary accommodations directly with the kitchen/team via hotline.

===================
BOOKING PROCESS (if asked "how do I book")
===================
1. Enquiry — call, WhatsApp, or fill the enquiry form on the website.
2. Room visit — schedule a free visit to see the room in person (recommended before booking).
3. Document submission — valid government ID proof (Aadhaar/Passport/Voter ID) and a recent photograph.
4. Deposit payment — 1 month refundable deposit to confirm the room.
5. Move-in — schedule move-in date, room handover with checklist.

===================
HOUSE RULES (if asked)
===================
- Visitor policy: guests allowed during daytime hours only, must be registered at entry.
- No smoking/alcohol in common areas.
- Quiet hours generally after 10-11 PM.

===================
COMMON OBJECTIONS — HOW TO RESPOND
===================
- "Is it safe for women?" → Highlight biometric entry, 24/7 CCTV, gated community feel, and encourage an in-person visit to see for themselves.
- "Is food really included?" → Confirm 3x daily meals included in monthly plans, breakfast included in Daily Stay, and share menu details.
- "What if I don't like it after moving in?" → Mention the Daily Stay ₹499/day option as a great way to trial before committing monthly.
- "Is there a lock-in period?" → Only 1 month notice period, no long-term lock-in beyond that.
- "Can I get a discount?" → Politely say pricing is fixed and transparent with no hidden fees, but offer to connect them with the team for any current offers/referral discounts.

===================
PAN-INDIA EXPANSION
===================
- Live campus: Jigani, Bengaluru.
- Coming soon: Pune, Mumbai, Delhi NCR, Chennai, Kerala.
- If asked about a city not yet live: "We're excited to be launching in that city soon! Would you like me to note your interest so our team can reach out the moment we open there?"

===================
ESCALATION RULES
===================
- Any question about exact 1BHK pricing, room availability right now, refund timelines, or anything not explicitly listed above → do NOT guess. Respond warmly and direct to hotline/WhatsApp:
  "That's a great question — let me connect you with our team directly for the most accurate answer. You can reach us at 8747049377 or via WhatsApp anytime between 7 AM–11 PM."
- If user seems upset/complaining about an existing stay issue → acknowledge empathetically, do NOT try to resolve technical/service issues yourself, and escalate: "I'm sorry to hear that — this needs our on-ground team's attention. Please call us directly at 8747049377 so we can fix this right away."
- Never make promises about refunds, discounts, or exceptions to policy — always defer those to the human team.
`;

  // Local Response Fallback Matcher adhering strictly to Aafa tone rules
  const getSmartResponse = (query) => {
    const q = query.toLowerCase();
    
    if (q.includes('women') || q.includes('girl') || q.includes('lady') || q.includes('safe') || q.includes('security')) {
      return "We take safety very seriously at Aafa Coliving! Our campus features biometric facial entry, 24/7 CCTV surveillance, and a peaceful gated community feel in Jigani.\n\nWould you like me to schedule a quick visit for you to inspect the campus in person?";
    }

    if (q.includes('how to book') || q.includes('booking process') || q.includes('how do i book') || q.includes('process')) {
      return "Booking your room at Aafa is simple:\n1. Enquiry (Call/WhatsApp)\n2. Free Room Visit\n3. Document Submission (Govt ID + Photo)\n4. 1-Month Deposit\n5. Move-In & Handover!\n\nWould you like to schedule a free visit to see the room today?";
    }

    if (q.includes('price') || q.includes('cost') || q.includes('rate') || q.includes('rent')) {
      return "Here are our room options at Aafa Coliving Jigani:\n• Daily Stay ⭐: ₹499/day (Free Breakfast Included)\n• 2 BHK Sharing: ₹7,499/month (3x Kerala Meals Included)\n• Single Room: ₹11,499/month (3x Kerala Meals Included)\n• 1 BHK Suite: Monthly rate with full privacy & kitchenette.\n\nWould you like me to connect you with our team for a quick call or room visit?";
    }

    if (q.includes('food') || q.includes('menu') || q.includes('eat') || q.includes('meal') || q.includes('kerala')) {
      return "We serve 3x daily homestyle Kerala meals prepared fresh in-house!\n• Mon: Puttu & Kadala Curry\n• Wed: Meen (Fish) Curry & Rice | Veg Biryani\n• Sat: Dosa & Chutney | Majboos\n• Sun: Sunday Malabar Biryani & Evening Pazham Pori!\n\nWant to book a visit to sample our food and check out the rooms?";
    }

    if (q.includes('location') || q.includes('address') || q.includes('hcl') || q.includes('where') || q.includes('jigani')) {
      return "We are located right in Sannidhi Layout, Jigani, Bengaluru — just a 2-minute walk (300 meters) from HCL Gate! Address: In front of Meghana PG, Bande Nalla Sandra Rd, Jigani 560105.\n\nWould you like me to share directions or set up a visit?";
    }

    if (q.includes('daily') || q.includes('499') || q.includes('short')) {
      return "Our Daily Stay plan is ₹499/day with FREE breakfast included! It's ideal for short business trips, interview visits near HCL Gate, or testing out the stay before committing monthly.\n\nWould you like to book a Daily Stay for your upcoming dates?";
    }

    if (q.includes('contact') || q.includes('phone') || q.includes('number') || q.includes('call')) {
      return "You can call or WhatsApp our front-desk team directly at:\n📞 8747049377\n📞 9686193084\n📞 9745688880\nDesk Hours: Open 7 AM – 11 PM every day.\n\nWould you like us to give you a quick call back?";
    }

    return "Thank you for reaching out! We offer fully furnished rooms, 1GBPS Wi-Fi, 100% generator backup, and 3x daily Kerala meals in Jigani near HCL Gate (₹499/day Daily Stays & monthly plans).\n\nWould you like me to connect you with our team for a quick call?";
  };

  const handleSend = async (customQuery = null) => {
    const userMsg = customQuery || input.trim();
    if (!userMsg) return;

    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    if (!customQuery) setInput('');
    setIsLoading(true);

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    try {
      if (apiKey && apiKey !== 'YOUR_GEMINI_API_KEY' && apiKey.startsWith('AQ.')) {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [
                {
                  role: 'user',
                  parts: [{ text: `${systemKnowledge}\n\nUser Question: ${userMsg}\nAnswer warmly as Aafa Coliving Front-Desk Concierge:` }],
                },
              ],
            }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          const replyText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (replyText) {
            setMessages((prev) => [...prev, { sender: 'bot', text: replyText }]);
            setIsLoading(false);
            return;
          }
        }
      }
    } catch (e) {
      console.log('Gemini API fallback to local matcher');
    }

    // Fallback response generator adhering to tone rules
    setTimeout(() => {
      const fallbackReply = getSmartResponse(userMsg);
      setMessages((prev) => [...prev, { sender: 'bot', text: fallbackReply }]);
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-24 right-6 z-50 pointer-events-auto">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#D4A64A] via-amber-500 to-yellow-600 text-[#0B1220] flex items-center justify-center shadow-[0_0_35px_rgba(212,166,74,0.6)] border-2 border-[#FAF7F0]/40 transition-transform"
          aria-label="Open AI Concierge Chatbot"
          data-cursor="expand"
        >
          <Bot className="w-7 h-7 stroke-[2.5]" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0B1220]" />
        </motion.button>
      </div>

      {/* Floating Chat Modal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            className="fixed bottom-6 right-6 z-50 w-full max-w-sm sm:max-w-md h-[570px] rounded-3xl glass-card border border-[#D4A64A]/40 shadow-2xl flex flex-col overflow-hidden bg-[#0B1220]/95 backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-[#D4A64A]/20 via-amber-500/10 to-transparent border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#D4A64A] to-yellow-600 text-[#0B1220] flex items-center justify-center font-bold shadow-md">
                  <Bot className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-sora text-[#FAF7F0] flex items-center gap-1.5">
                    <span>Aafa Front-Desk Concierge</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#D4A64A]" />
                  </h4>
                  <p className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>Online • Trained AI Front-Desk</span>
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close AI Chatbot Modal"
                className="p-2 rounded-full bg-white/10 text-[#FAF7F0] hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Reply Badges */}
            <div className="p-2 bg-white/5 border-b border-white/10 flex items-center gap-2 overflow-x-auto text-[10px]">
              {[
                { label: '🍛 Kerala Menu', query: 'What is the weekly Kerala food menu?' },
                { label: '💰 Room Rates', query: 'What are the room rates?' },
                { label: '📍 HCL Gate Location', query: 'Where is Aafa Coliving located?' },
                { label: '⭐ ₹499 Daily Stay', query: 'Tell me about ₹499 daily stay' },
                { label: '🛡️ Women Safety', query: 'Is Aafa safe for female residents?' },
              ].map((pill, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(pill.query)}
                  className="px-2.5 py-1 rounded-full bg-[#D4A64A]/15 text-[#D4A64A] border border-[#D4A64A]/30 whitespace-nowrap hover:bg-[#D4A64A]/30 transition-all font-mono"
                >
                  {pill.label}
                </button>
              ))}
            </div>

            {/* Messages Container */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-gradient-to-r from-[#D4A64A] to-yellow-600 text-[#0B1220] font-medium shadow-md'
                        : 'glass-card border border-white/10 text-[#FAF7F0] whitespace-pre-line'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="glass-card border border-white/10 px-4 py-2.5 rounded-2xl text-xs text-[#D4A64A] font-mono flex items-center gap-2">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#D4A64A]" />
                    <span>Aafa team typing...</span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Footer */}
            <div className="p-3 bg-[#0B1220] border-t border-white/10 flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask about rooms, food, prices, or address..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 px-4 py-2.5 rounded-xl glass-card text-xs text-[#FAF7F0] placeholder-[#FAF7F0]/50 focus:outline-none focus:border-[#D4A64A]"
              />
              <button
                onClick={() => handleSend()}
                aria-label="Send Message to AI Assistant"
                className="p-2.5 rounded-xl bg-gradient-to-r from-[#D4A64A] to-yellow-600 text-[#0B1220] font-bold shadow-md hover:scale-105 transition-transform"
                data-cursor="expand"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
