import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Phone, Mail, CheckCircle2, Sparkles, Send, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EnquiryPopup({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      timeSlot: '10:00 AM - 12:00 PM',
      roomType: '1 BHK Suite',
    },
  });

  const onSubmit = (data) => {
    const mockRef = 'WALK-' + Math.floor(100000 + Math.random() * 900000);
    setRefCode(mockRef);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 100,
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

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
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
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Schedule Campus Walkthrough</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FAF7F0] font-sora">
                  Book Your <span className="text-gradient-gold">In-Person Visit</span>
                </h3>
                <p className="text-xs text-[#FAF7F0]/70 mt-1">
                  Pick a date and time slot to visit Aafa Coliving campus near HCL Gate, Jigani.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-[#FAF7F0]/80">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul Nair"
                    {...register('fullName', { required: 'Name is required' })}
                    className="w-full px-4 py-3 rounded-xl glass-card text-sm focus:outline-none focus:border-[#D4A64A] transition-colors"
                  />
                  {errors.fullName && (
                    <span className="text-xs text-rose-400 mt-1 block">{errors.fullName.message}</span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-[#FAF7F0]/80">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="10-digit Mobile"
                      {...register('phone', {
                        required: 'Phone number is required',
                        pattern: { value: /^[0-9]{10}$/, message: 'Valid 10-digit number' }
                      })}
                      className="w-full px-4 py-3 rounded-xl glass-card text-sm focus:outline-none focus:border-[#D4A64A] transition-colors"
                    />
                    {errors.phone && (
                      <span className="text-xs text-rose-400 mt-1 block">{errors.phone.message}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-[#FAF7F0]/80">
                      Visit Date *
                    </label>
                    <input
                      type="date"
                      {...register('visitDate', { required: 'Date is required' })}
                      className="w-full px-4 py-3 rounded-xl glass-card text-sm focus:outline-none focus:border-[#D4A64A] transition-colors bg-[#0B1220]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-[#FAF7F0]/80">
                      Time Slot
                    </label>
                    <select
                      {...register('timeSlot')}
                      className="w-full px-4 py-3 rounded-xl glass-card text-sm focus:outline-none focus:border-[#D4A64A] transition-colors bg-[#0B1220]"
                    >
                      <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                      <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM</option>
                      <option value="05:00 PM - 07:00 PM">05:00 PM - 07:00 PM</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-[#FAF7F0]/80">
                      Room Interest
                    </label>
                    <select
                      {...register('roomType')}
                      className="w-full px-4 py-3 rounded-xl glass-card text-sm focus:outline-none focus:border-[#D4A64A] transition-colors bg-[#0B1220]"
                    >
                      <option value="1 BHK Suite">1 BHK Suite</option>
                      <option value="2 BHK Sharing">2 BHK Sharing</option>
                      <option value="Single Room">Single Room</option>
                      <option value="Daily Stay (₹499/day)">Daily Stay (₹499/day)</option>
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
                    <span>Confirm Walkthrough Booking</span>
                  </button>
                </div>

              </form>
            </div>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-[#D4A64A]/20 border border-[#D4A64A]/40 text-[#D4A64A] flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#FAF7F0] font-sora mb-2">
                Walkthrough Scheduled!
              </h3>
              <p className="text-xs text-[#FAF7F0]/80 mb-6">
                Thank you! Our Jigani campus relationship manager will call you to confirm your visit slot.
              </p>

              <div className="p-4 rounded-xl glass-card border border-white/10 mb-6 text-left">
                <p className="text-xs text-[#FAF7F0]/60 font-mono uppercase">Pass Reference</p>
                <p className="text-xl font-bold text-[#D4A64A] font-mono tracking-wider">{refCode}</p>
              </div>

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
