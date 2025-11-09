"use client";

import { useState, useEffect } from 'react';

export function useTrialStatus() {
  const [isInTrial, setIsInTrial] = useState(true);
  const [daysRemaining, setDaysRemaining] = useState(14);

  useEffect(() => {
    // Demo implementation - replace with actual logic
    const trialEndDate = new Date();
    trialEndDate.setDate(trialEndDate.getDate() + 14);
    
    const days = Math.ceil((trialEndDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
    setDaysRemaining(days);
    setIsInTrial(days > 0);
  }, []);

  return { isInTrial, daysRemaining };
}