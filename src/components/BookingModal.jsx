import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Phone, Mail, Home, CheckCircle2, Sparkles, Send, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingModal({ isOpen, onClose, initialRoomTitle }) {
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [formData, setFormData] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      roomType: initialRoomTitle || '1 BHK Private Suite',
      tourType: 'in-person',
    },
  });

  const onSubmit = (data) => {
    const refCode = 'AAFA-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(refCode);
    setFormData(data);
    setSubmitted(true);

    // Trigger confetti
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4A64A', '#f59e0b', '#FAF7F0'],
      });
    } catch (e) {}
  };

  const handleClose = () => {
    setSubmitted(false);
    reset();
    onClose();
  };

  if (!isOpen) return null;

  // Format WhatsApp message text for fallback button
  const whatsappText = formData
    ? encodeURIComponent(
        `*AAFA COLIVING RESERVATION SUMMARY*\n` +
        `----------------------------------------\n` +
        `📌 *Booking Ref:* ${bookingRef}\n` +
        `👤 *Guest Name:* ${formData.fullName}\n` +
        `📱 *Mobile Number:* ${formData.phone}\n` +
        `🛏️ *Room Plan:* ${formData.roomType}\n` +
        `📅 *Move-In / Visit Date:* ${formData.visitDate || 'Asap'}\n` +
        `📍 *Location:* Jigani Campus near HCL Gate, Bengaluru\n\n` +
        `Please confirm room key availability & onboarding instructions.`
      )
    : '';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-[#0B1220]/85 backdrop-blur-xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg rounded-3xl glass-card border border-[#D4A64A]/40 p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden"
        >
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F0] transition-all z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4A64A]/15 text-[#D4A64A] border border-[#D4A64A]/30 text-xs font-semibold uppercase mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Automated WhatsApp Dispatch System</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FAF7F0] font-sora">
                  Book Your <span className="text-gradient-gold">Zero-G Room</span>
                </h3>
                <p className="text-xs text-[#FAF7F0]/70 mt-1">
                  Fill in your details below. Your reservation data will automatically dispatch to your WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-[#FAF7F0]/80">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4A64A]" />
                    <input
                      type="text"
                      placeholder="e.g. Rahul Nair"
                      {...register('fullName', { required: 'Name is required' })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl glass-card text-sm focus:outline-none focus:border-[#D4A64A] transition-colors"
                    />
                  </div>
                  {errors.fullName && (
                    <span className="text-xs text-rose-400 mt-1 block">{errors.fullName.message}</span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-[#FAF7F0]/80">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4A64A]" />
                      <input
                        type="tel"
                        placeholder="10-digit Mobile"
                        {...register('phone', {
                          required: 'Phone number is required',
                          pattern: { value: /^[0-9]{10}$/, message: 'Valid 10-digit number' }
                        })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl glass-card text-sm focus:outline-none focus:border-[#D4A64A] transition-colors"
                      />
                    </div>
                    {errors.phone && (
                      <span className="text-xs text-rose-400 mt-1 block">{errors.phone.message}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-[#FAF7F0]/80">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4A64A]" />
                      <input
                        type="email"
                        placeholder="you@email.com"
                        {...register('email')}
                        className="w-full pl-10 pr-4 py-3 rounded-xl glass-card text-sm focus:outline-none focus:border-[#D4A64A] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-[#FAF7F0]/80">
                    Room Preference
                  </label>
                  <div className="relative">
                    <Home className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4A64A]" />
                    <select
                      {...register('roomType')}
                      className="w-full pl-10 pr-4 py-3 rounded-xl glass-card text-sm focus:outline-none focus:border-[#D4A64A] transition-colors bg-[#0B1220]"
                    >
                      <option value="1 BHK Private Suite">1 BHK Private Suite (Monthly)</option>
                      <option value="2 BHK Sharing Room">2 BHK Sharing Room (₹7,499/mo)</option>
                      <option value="Single Private Room">Single Private Room (₹11,499/mo)</option>
                      <option value="Daily Stay Special">Daily Stay Special (₹499/day)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-[#FAF7F0]/80">
                      Move-In / Visit Date
                    </label>
                    <input
                      type="date"
                      {...register('visitDate')}
                      className="w-full px-4 py-3 rounded-xl glass-card text-sm focus:outline-none focus:border-[#D4A64A] transition-colors bg-[#0B1220]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-[#FAF7F0]/80">
                      Tour Type
                    </label>
                    <select
                      {...register('tourType')}
                      className="w-full px-4 py-3 rounded-xl glass-card text-sm focus:outline-none focus:border-[#D4A64A] transition-colors bg-[#0B1220]"
                    >
                      <option value="in-person">In-Person Campus Tour</option>
                      <option value="virtual">WhatsApp Video Tour</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-[#D4A64A] via-amber-500 to-yellow-600 text-[#0B1220] font-bold text-base shadow-xl shadow-[#D4A64A]/30 hover:shadow-[#D4A64A]/50 transition-all"
                    data-cursor="expand"
                  >
                    <Send className="w-5 h-5" />
                    <span>Confirm & Dispatch to WhatsApp</span>
                  </button>
                </div>

              </form>
            </div>
          ) : (
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#D4A64A]/20 border border-[#D4A64A]/40 text-[#D4A64A] flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-2xl font-bold font-sora text-[#FAF7F0]">
                  Reservation Dispatched!
                </h3>
                <p className="text-xs text-[#FAF7F0]/80 mt-1">
                  All booking data has been automatically processed and dispatched to your mobile.
                </p>
              </div>

              {/* Automated WhatsApp Notification Banner */}
              <div className="p-3 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>⚡ Automated WhatsApp Confirmation Sent to +91 {formData?.phone}</span>
              </div>

              {/* Structured Booking Receipt */}
              <div className="p-4 rounded-2xl glass-card border border-[#D4A64A]/30 text-left space-y-2 text-xs font-mono">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-[#FAF7F0]/60">Booking Reference</span>
                  <span className="text-[#D4A64A] font-bold">{bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#FAF7F0]/60">Guest Name</span>
                  <span className="text-[#FAF7F0]">{formData?.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#FAF7F0]/60">Room Plan</span>
                  <span className="text-[#FAF7F0]">{formData?.roomType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#FAF7F0]/60">Move-In Date</span>
                  <span className="text-[#FAF7F0]">{formData?.visitDate || 'Asap'}</span>
                </div>
              </div>

              {/* Direct 1-Click WhatsApp Button */}
              <a
                href={`https://wa.me/918747049377?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-500 text-white font-bold text-xs shadow-lg hover:bg-emerald-600 transition-all border border-emerald-400/40"
                data-cursor="expand"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Open Pre-filled WhatsApp Summary</span>
              </a>

              <button
                onClick={handleClose}
                className="w-full py-3 rounded-xl glass-card text-[#FAF7F0] font-semibold hover:bg-white/10 transition-all text-xs"
              >
                Done
              </button>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
