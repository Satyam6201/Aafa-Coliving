import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, CheckCircle2, Calendar, Sparkles, ArrowRight } from 'lucide-react';

export default function PriceCalculator({ onOpenBooking }) {
  const [roomType, setRoomType] = useState('2bhk');
  const [durationMonths, setDurationMonths] = useState(1);
  const [includeMeals, setIncludeMeals] = useState(true);

  const roomRates = {
    '1bhk': { base: 14999, name: '1 BHK Suite' },
    '2bhk': { base: 7499, name: '2 BHK Sharing Room' },
    'single': { base: 11499, name: 'Single Private Room' },
    'daily': { base: 499, name: 'Daily Stay (Per Day)' },
  };

  const selectedRate = roomRates[roomType];
  
  // Calculate cost
  const isDaily = roomType === 'daily';
  const multiplier = isDaily ? durationMonths : durationMonths;
  const mealCost = includeMeals ? (isDaily ? 0 : 0) : 0; // Meals included free in Aafa plans
  const totalCost = (selectedRate.base * multiplier) + mealCost;

  return (
    <div className="rounded-3xl glass-card border border-[#D4A64A]/30 p-8 shadow-2xl relative overflow-hidden">
      
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-[#D4A64A]/20 border border-[#D4A64A]/40 text-[#D4A64A] flex items-center justify-center shrink-0">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <span className="text-xs font-mono uppercase text-[#D4A64A]">Interactive Cost Tool</span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#FAF7F0] font-sora">
            Estimate Your Monthly Living Budget
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Room Selector */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-[#FAF7F0]/80">
              Select Room Plan
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: '1bhk', name: '1 BHK' },
                { id: '2bhk', name: '2 BHK Sharing' },
                { id: 'single', name: 'Single Room' },
                { id: 'daily', name: 'Daily Stay' },
              ].map((r) => (
                <button
                  key={r.id}
                  onClick={() => setRoomType(r.id)}
                  className={`py-3 px-3 rounded-xl text-xs font-bold transition-all ${
                    roomType === r.id
                      ? 'bg-[#D4A64A] text-[#0B1220] shadow-md scale-105'
                      : 'glass-card text-[#FAF7F0]/80 hover:text-[#FAF7F0]'
                  }`}
                  data-cursor="expand"
                >
                  {r.name}
                </button>
              ))}
            </div>
          </div>

          {/* Stay Duration Slider */}
          <div>
            <div className="flex justify-between items-center mb-2 text-xs font-semibold">
              <span className="uppercase tracking-wider text-[#FAF7F0]/80">
                {isDaily ? 'Stay Duration (Days)' : 'Stay Duration (Months)'}
              </span>
              <span className="font-mono text-[#D4A64A] text-sm font-bold">
                {durationMonths} {isDaily ? (durationMonths === 1 ? 'Day' : 'Days') : (durationMonths === 1 ? 'Month' : 'Months')}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max={isDaily ? 30 : 12}
              value={durationMonths}
              onChange={(e) => setDurationMonths(parseInt(e.target.value))}
              className="w-full h-2 bg-[#FAF7F0]/10 rounded-lg appearance-none cursor-pointer accent-[#D4A64A]"
            />
          </div>

          {/* Included Features Checklist */}
          <div className="grid grid-cols-2 gap-2 text-xs text-[#FAF7F0]/80 pt-2 border-t border-[#FAF7F0]/10">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>3x Daily Kerala Meals</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>1GBPS Dual Fiber Wi-Fi</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Power Backup</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Daily Maid Housekeeping</span>
            </div>
          </div>

        </div>

        {/* Right Output Result Box */}
        <div className="lg:col-span-5 rounded-2xl glass-card border border-[#D4A64A]/40 p-6 text-center shadow-xl bg-gradient-to-b from-[#D4A64A]/10 to-transparent">
          <span className="text-[10px] font-mono uppercase text-[#D4A64A]">Estimated Total Cost</span>
          <h4 className="text-4xl font-extrabold text-[#D4A64A] font-sora mt-1 mb-2">
            ₹{totalCost.toLocaleString('en-IN')}
          </h4>
          <p className="text-xs text-[#FAF7F0]/70 mb-6 font-mono">
            Zero hidden fees • Refundable deposit 1 month only
          </p>

          <button
            onClick={() => onOpenBooking(selectedRate.name)}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-[#D4A64A] via-amber-500 to-yellow-600 text-[#0B1220] font-bold text-sm shadow-lg shadow-[#D4A64A]/25 hover:shadow-[#D4A64A]/45 transition-all"
            data-cursor="expand"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve at This Estimated Rate</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
}
