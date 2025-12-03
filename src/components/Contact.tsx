"use client";
import { useRef, useState, useEffect } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle, MessageCircle, Sparkles, X } from "lucide-react";
import emailjs from "@emailjs/browser";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [showAddons, setShowAddons] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",

    //.sendForm(
  //"service_opbjzfo", // your EmailJS service ID
  //"template_ausepep", // your template ID
  //formRef.current,
 // "0XOe85dPHYF8PG-5r" // your public key
  //    )
  });

  // Starry canvas background effect
  useEffect(() => {
    const canvas = document.getElementById('contact-star-canvas') as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function resizeCanvas() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Draw twinkling stars
    let animationFrame: number;
    const starCount = 150;
    const stars: { x: number; y: number; r: number; o: number; delta: number }[] = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random(),
        y: Math.random(),
        r: Math.random() * 0.7 + 0.5,
        o: Math.random() * 0.6 + 0.3,
        delta: (Math.random() - 0.5) * 0.02,
      });
    }

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const star of stars) {
        star.o += star.delta;
        if (star.o > 1) {
          star.o = 1; star.delta *= -1;
        }
        if (star.o < 0.25) {
          star.o = 0.25; star.delta *= -1;
        }

        ctx.save();
        ctx.globalAlpha = star.o;
        ctx.beginPath();
        ctx.arc(
          star.x * canvas.width,
          star.y * canvas.height,
          star.r,
          0,
          2 * Math.PI,
          false
        );
        ctx.fillStyle = "#fff";
        ctx.shadowColor = "#fff";
        ctx.shadowBlur = 4 + Math.random() * 5;
        ctx.fill();
        ctx.restore();
      }
    }

    function animate() {
      drawStars();
      animationFrame = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  // Close Addons dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".addons-dropdown")) setShowAddons(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setSent(true);
      setLoading(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSelectedPlan("");
      setSelectedAddons([]);
    }, 2000);
  };

  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => setSent(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [sent]);

  const contactCards = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      text: "jokersgang123@gmail.com",
      link: "mailto:jokersgang123@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      text: "+234 807 265 1864",
      link: "tel:+2348072651864",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      text: "+234 807 265 1864",
      link: "https://wa.me/2348072651864",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      text: "Lagos, Nigeria",
      link: "https://www.google.com/maps/place/Lagos,+Nigeria",
    },
  ];

  const addons = [
    { name: "SEO Optimization", icon: "🔍" },
    { name: "Analytics Setup", icon: "📊" },
    { name: "Maintenance Plan", icon: "🔧" },
    { name: "Web Hosting", icon: "🌐" },
    { name: "Marketing", icon: "📱" },
  ];

  return (
    <section
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #020617 0%, #0c1222 50%, #020617 100%)"
   }}
    >   <Navigation />
      {/* Starfield background */}
      <canvas
        id="contact-star-canvas"
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle gradient overlays */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 80%, hsl(var(--primary)/0.08) 0%, transparent 55%)," +
            "radial-gradient(circle at 85% 15%, hsl(var(--secondary)/0.06) 0%, transparent 60%)"
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="mx-auto mb-6 h-px w-20"
            style={{
              background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))",
              boxShadow: "0 0 20px hsl(var(--primary)/0.5)"
            }}
          />
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
            style={{
              backgroundImage: "linear-gradient(135deg, hsl(var(--primary)) 20%, hsl(var(--secondary)) 100%)"
            }}
          >
            GET IN TOUCH
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Ready to collaborate on your next groundbreaking project? Let's build the future together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactCards.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-6 rounded-2xl text-center hover:border-[hsl(var(--primary))] hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-500 hover:scale-105 hover:-translate-y-1 group"
                style={{ 
                  animation: "fade-in 0.7s ease-out",
                  animationDelay: `${i * 100}ms`,
                  animationFillMode: "both"
                }}
              >
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300"
                  style={{
                    background: "hsl(var(--primary)/0.2)",
                    color: "hsl(var(--primary))"
                  }}
                >
                  {item.icon}
                </div>
                <h3 
                  className="font-semibold mb-2 text-lg transition-colors"
                  style={{ color: "hsl(var(--foreground))" }}
                >
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm break-words group-hover:text-slate-300 transition-colors">
                  {item.text}
                </p>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2" style={{ animation: "fade-in 0.7s ease-out" }}>
            <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl shadow-2xl relative overflow-hidden">
              {/* Decorative corner accents */}
              <div 
                className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 rounded-tl-2xl"
                style={{ borderColor: "hsl(var(--primary)/0.3)" }}
              />
              <div 
                className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 rounded-br-2xl"
                style={{ borderColor: "hsl(var(--primary)/0.3)" }}
              />
              
              <div className="relative p-8">
                <div className="mb-6">
                  <h3 
                    className="text-2xl font-bold font-mono flex items-center gap-2"
                    style={{ color: "hsl(var(--primary))" }}
                  >
                    <span className="animate-pulse">&gt;</span> SEND_MESSAGE();
                  </h3>
                  <div 
                    className="h-px w-full mt-4"
                    style={{
                      background: "linear-gradient(to right, transparent, hsl(var(--primary)/0.5), transparent)"
                    }}
                  />
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FloatingInput
                      label="Name"
                      value={formData.name}
                      onChange={(v) => setFormData({ ...formData, name: v })}
                      placeholder="John Doe"
                      focusedField={focusedField}
                      setFocusedField={setFocusedField}
                      fieldName="name"
                    />
                    <FloatingInput
                      label="Email"
                      value={formData.email}
                      onChange={(v) => setFormData({ ...formData, email: v })}
                      placeholder="john@example.com"
                      type="email"
                      focusedField={focusedField}
                      setFocusedField={setFocusedField}
                      fieldName="email"
                    />
                  </div>

                  <FloatingInput
                    label="Subject"
                    value={formData.subject}
                    onChange={(v) => setFormData({ ...formData, subject: v })}
                    placeholder="Project collaboration"
                    focusedField={focusedField}
                    setFocusedField={setFocusedField}
                    fieldName="subject"
                  />

                  {/* Plan Dropdown */}
                  <div className="relative group">
                    <label className={`text-sm font-medium mb-2 block transition-colors ${
                      focusedField === "plan" ? "text-[hsl(var(--primary))]" : "text-slate-400"
                    }`}>
                      Select Plan *
                    </label>
                    <div className="relative">
                      <select
                        value={selectedPlan}
                        onChange={(e) => setSelectedPlan(e.target.value)}
                        className="bg-[hsl(var(--muted))] border-2 border-[hsl(var(--border))] w-full p-4 rounded-xl focus:ring-2 focus:border-[hsl(var(--primary))] hover:border-[hsl(var(--primary)/0.5)] transition-all duration-300 appearance-none cursor-pointer text-[hsl(var(--foreground))]"
                        onFocus={() => setFocusedField("plan")}
                        onBlur={() => setFocusedField(null)}
                      >
                        <option value="" disabled>
                          -- Choose a plan --
                        </option>
                        <option value="Starter">🚀 Starter</option>
                        <option value="Standard">⭐ Standard</option>
                        <option value="E-Commerce">🛒 E-Commerce</option>
                        <option value="Web App">💻 Web App</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg
                          className={`w-5 h-5 transition-transform duration-200 ${
                            focusedField === "plan" ? "rotate-180" : ""
                          }`}
                          style={{ color: "hsl(var(--primary))" }}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Add-ons Dropdown */}
                  <div className="relative addons-dropdown">
                    <label className="text-sm font-medium text-slate-400 mb-2 block">
                      Add-ons (Optional)
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowAddons(!showAddons)}
                      className="bg-[hsl(var(--muted))] border-2 border-[hsl(var(--border))] w-full p-4 rounded-xl focus:ring-2 hover:border-[hsl(var(--primary)/0.5)] transition-all duration-300 flex justify-between items-center group text-left"
                      style={{
                      }}
                    >
                      <span className={selectedAddons.length > 0 ? "text-[hsl(var(--foreground))]" : "text-slate-400"}>
                        {selectedAddons.length > 0
                          ? `${selectedAddons.length} selected: ${selectedAddons.join(", ")}`
                          : "Select add-ons"}
                      </span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${
                          showAddons ? "rotate-180" : ""
                        }`}
                        style={{ color: "hsl(var(--primary))" }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {showAddons && (
                      <div 
                        className="absolute z-20 mt-2 w-full bg-[hsl(var(--card))] border-2 border-[hsl(var(--border))] rounded-xl shadow-2xl p-3"
                        style={{ animation: "fade-in 0.3s ease-out" }}
                      >
                        {addons.map((addon) => (
                          <label
                            key={addon.name}
                            className="flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 group hover:bg-[hsl(var(--primary)/0.1)]"
                          >
                            <input
                              type="checkbox"
                              checked={selectedAddons.includes(addon.name)}
                              onChange={() => {
                                setSelectedAddons((prev) =>
                                  prev.includes(addon.name)
                                    ? prev.filter((a) => a !== addon.name)
                                    : [...prev, addon.name]
                                );
                              }}
                              className="w-5 h-5 rounded border-2 cursor-pointer"
                              style={{
                                borderColor: "hsl(var(--primary))",
                                accentColor: "hsl(var(--primary))"
                              }}
                            />
                            <span className="flex items-center gap-2 text-[hsl(var(--foreground))]">
                              <span className="text-lg">{addon.icon}</span>
                              {addon.name}
                            </span>
                          </label>
                        ))}
                      </div>
                    )}
                    <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Select multiple add-ons to enhance your project
                    </p>
                  </div>

                  {/* Textarea */}
                  <div className="relative group">
                    <label className={`text-sm font-medium mb-2 block transition-colors ${
                      focusedField === "message" ? "text-[hsl(var(--primary))]" : "text-slate-400"
                    }`}>
                      Message *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project vision..."
                      rows={6}
                      className="bg-[hsl(var(--muted))] border-2 border-[hsl(var(--border))] focus:border-[hsl(var(--primary))] focus:ring-2 hover:border-[hsl(var(--primary)/0.5)] resize-none transition-all duration-300 p-4 rounded-xl w-full text-[hsl(var(--foreground))] placeholder-slate-500"
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className={`w-full text-white flex items-center justify-center gap-3 py-6 text-lg font-bold transition-all duration-500 rounded-xl relative overflow-hidden group ${
                      loading ? "opacity-70 cursor-not-allowed" : "hover:scale-[1.02]"
                    }`}
                    style={{
                      background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--secondary)))",
                      boxShadow: loading ? "" : "0 0 30px hsl(var(--primary)/0.3)"
                    }}
                  >
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    
                    {loading ? (
                      <>
                        <Send className="w-5 h-5 animate-bounce" />
                        <span className="animate-pulse">Launching Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                        <span>Launch Message</span>
                        <Sparkles className="w-5 h-5 group-hover:animate-spin" />
                      </>
                    )}
                  </button>

                  {/* Success Message */}
                  {sent && (
                    <div 
                      className="flex items-center justify-center gap-3 p-4 border-2 rounded-xl"
                      style={{ 
                        animation: "fade-in 0.5s ease-out",
                        background: "hsl(var(--primary)/0.1)",
                        borderColor: "hsl(var(--primary)/0.5)",
                        color: "hsl(var(--primary))"
                      }}
                    >
                      <CheckCircle className="w-6 h-6 animate-bounce" />
                      <p className="font-semibold text-lg">
                        Message sent successfully! 🚀
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .gradient-text {
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

// Floating Label Input Component
const FloatingInput = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  focusedField,
  setFocusedField,
  fieldName,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  focusedField: string | null;
  setFocusedField: (field: string | null) => void;
  fieldName: string;
}) => {
  return (
    <div className="relative group">
      <label
        className={`text-sm font-medium mb-2 block transition-all duration-300 ${
          focusedField === fieldName ? "text-[hsl(var(--primary))]" : "text-slate-400"
        }`}
      >
        {label} *
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-[hsl(var(--muted))] border-2 border-[hsl(var(--border))] focus:border-[hsl(var(--primary))] focus:ring-2 hover:border-[hsl(var(--primary)/0.5)] transition-all duration-300 p-4 rounded-xl w-full text-[hsl(var(--foreground))] placeholder-slate-500"
        style={{ 
          animation: "fade-in 0.3s ease-out",
          background: "hsl(var(--primary))"
        }}
        onFocus={() => setFocusedField(fieldName)}
        onBlur={() => setFocusedField(null)}
      />
    </div>
  );
};

export default Contact;