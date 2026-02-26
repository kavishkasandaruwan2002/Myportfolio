import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import { submitContact } from '../utils/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await submitContact(formData);
      if (response.success) {
        setStatus({ type: 'success', message: response.message });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Transmission failed. Retrying sync...',
      });
    } finally {
      setLoading(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-foreground">
            <span className="gradient-text">Let's Collaborate</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Have a visionary project? I'm ready to architect the solution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="space-y-10"
          >
            <div className="bg-secondary p-10 rounded-[2.5rem] border border-border shadow-xl shadow-primary/5">
              <h3 className="text-3xl font-black text-foreground mb-6">
                Direct Sync
              </h3>
              <p className="text-muted-foreground font-medium mb-10 leading-relaxed text-lg">
                I'm currently optimizing my workflow for new enterprise-scale collaborations.
                Drop a line to initiate a discovery session.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: 'kavishkasandaruwan608@gmail.com', href: 'mailto:kavishkasandaruwan608@gmail.com' },
                  { icon: Phone, label: 'Voice', value: '+94 70 334 4589', href: 'tel:+94703344589' },
                  { icon: MapPin, label: 'HQ', value: 'Remote / Global Deployment', href: '#' }
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="flex items-center gap-5 group"
                  >
                    <div className="w-12 h-12 bg-card rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all text-violet-600 border border-border">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-muted-foreground uppercase tracking-widest">{item.label}</p>
                      <p className="text-foreground font-bold group-hover:text-violet-600 transition-colors">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-slate-900 dark:bg-card p-10 rounded-[3rem] space-y-8 shadow-2xl relative border border-slate-800 dark:border-border">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <MessageSquare className="w-24 h-24 text-white dark:text-foreground" />
              </div>

              <div className="space-y-6 relative z-10">
                <div className="relative group">
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">Identity</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-slate-800/50 dark:bg-secondary border border-slate-700 dark:border-border rounded-2xl focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 outline-none transition-all text-white dark:text-foreground font-medium"
                    placeholder="Operator Name"
                  />
                </div>

                <div className="relative group">
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">Comms Protocol</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-slate-800/50 dark:bg-secondary border border-slate-700 dark:border-border rounded-2xl focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 outline-none transition-all text-white dark:text-foreground font-medium"
                    placeholder="email@example.com"
                  />
                </div>

                <div className="relative group">
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">Payload</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-6 py-4 bg-slate-800/50 dark:bg-secondary border border-slate-700 dark:border-border rounded-2xl focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 outline-none transition-all text-white dark:text-foreground font-medium resize-none shadow-inner"
                    placeholder="Describe the mission..."
                  />
                </div>
              </div>

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`p-4 rounded-2xl text-center font-bold text-sm ${status.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}`}
                >
                  {status.message}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-5 bg-gradient-to-r from-violet-600 to-indigo-600 disabled:from-slate-700 disabled:to-slate-800 text-white font-black rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-violet-900/20 relative z-10 overflow-hidden"
              >
                {loading ? (
                  <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Synchronize
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
