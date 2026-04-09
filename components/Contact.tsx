import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    width: "100%",
    background: "#f0f4ff",
    border: `1.5px solid ${
      focusedField === field ? "#4A6CF7" : "rgba(26,43,94,0.08)"
    }`,
    borderRadius: 12,
    padding: "14px 18px",
    fontFamily: "'Inter', sans-serif",
    fontSize: 15,
    color: "#1a2b5e",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxShadow:
      focusedField === field
        ? "0 0 0 4px rgba(74,108,247,0.08)"
        : "none",
    resize: "none"
  });

  const contactItems = [
    {
      icon: <MapPin size={26} />,
      iconBg: "rgba(74,108,247,0.08)",
      iconColor: "#4A6CF7",
      label: "Our Office",
      value: "IHub, Ahmedabad, Gujarat, India"
    },
    {
      icon: <Mail size={26} />,
      iconBg: "rgba(249,115,22,0.08)",
      iconColor: "#F97316",
      label: "Email Us",
      value: "connect@vyoma.learning"
    },
    {
      icon: <Phone size={26} />,
      iconBg: "rgba(124,58,237,0.08)",
      iconColor: "#7C3AED",
      label: "Call Us",
      value: "+91 87803 75687"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          variants={containerVariants}
        >

          {/* Eyebrow */}
          <motion.div
            variants={itemVariants}
            style={{
              display: "inline-block",
              padding: "6px 16px",
              borderRadius: 999,
              background: "rgba(74,108,247,0.07)",
              color: "#4A6CF7",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 13,
              border: "1px solid rgba(74,108,247,0.15)",
              marginBottom: 24
            }}
          >
            Let's Talk
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(32px, 4.5vw, 56px)",
              fontWeight: 700,
              color: "#1a2b5e",
              lineHeight: 1.1,
              marginBottom: 24
            }}
          >
            Ready to{" "}
            <span style={{ color: "#4A6CF7" }}>
              Transform
            </span>{" "}
            Education with Us?
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 18,
              color: "#5a6a8a",
              lineHeight: 1.75,
              maxWidth: 480,
              marginBottom: 52
            }}
          >
            Invite institutions, partners, investors, and learners to connect.
            Whether you have a question or a partnership proposal, we're ready
            to talk.
          </motion.p>

          {/* Contact Items */}
          <motion.div
            variants={containerVariants}
            style={{ display: "flex", flexDirection: "column", gap: 28 }}
          >
            {contactItems.map((item) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20
                }}
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: 64,
                    height: 64,
                    background: item.iconBg,
                    color: item.iconColor,
                    borderRadius: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    border: "1px solid rgba(26,43,94,0.08)"
                  }}
                >
                  {item.icon}
                </motion.div>

                <div>
                  <div
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: 17,
                      color: "#1a2b5e",
                      marginBottom: 4
                    }}
                  >
                    {item.label}
                  </div>

                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 16,
                      color: "#5a6a8a"
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          style={{ position: "relative" }}
        >

          {/* Glow blobs */}
          <div
            style={{
              position: "absolute",
              top: -24,
              right: -24,
              width: 96,
              height: 96,
              background: "rgba(249,115,22,0.12)",
              borderRadius: "50%",
              filter: "blur(32px)",
              pointerEvents: "none"
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: -24,
              left: -24,
              width: 96,
              height: 96,
              background: "rgba(74,108,247,0.12)",
              borderRadius: "50%",
              filter: "blur(32px)",
              pointerEvents: "none"
            }}
          />

          {/* FORM CARD */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid rgba(26,43,94,0.08)",
              borderRadius: 40,
              padding: "48px",
              boxShadow: "0 24px 64px rgba(26,43,94,0.09)",
              position: "relative",
              zIndex: 1
            }}
          >

            {/* Accent */}
            <div
              style={{
                height: 4,
                width: 56,
                borderRadius: 99,
                background:
                  "linear-gradient(to right, #1a2b5e, #4A6CF7)",
                marginBottom: 32
              }}
            />

            <motion.form
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 22
              }}
            >

              <motion.div variants={itemVariants}>
                <label style={{ fontWeight: 600, fontSize: 13 }}>
                  Full Name
                </label>

                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      name: e.target.value
                    })
                  }
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  required
                  style={inputStyle("name")}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label style={{ fontWeight: 600, fontSize: 13 }}>
                  Email Address
                </label>

                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      email: e.target.value
                    })
                  }
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  required
                  style={inputStyle("email")}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label style={{ fontWeight: 600, fontSize: 13 }}>
                  Your Message
                </label>

                <textarea
                  rows={4}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      message: e.target.value
                    })
                  }
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  style={inputStyle("message")}
                />
              </motion.div>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={submitted}
                style={{
                  width: "100%",
                  padding: "18px",
                  borderRadius: 14,
                  border: "none",
                  fontWeight: 700,
                  fontSize: 16,
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  background: submitted
                    ? "#22c55e"
                    : "linear-gradient(135deg,#1a2b5e,#4A6CF7)"
                }}
              >
                {submitted ? (
                  "Success! We'll be in touch."
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </motion.button>

            </motion.form>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;