'use client';

import React from 'react';
import { Toaster } from 'react-hot-toast';

export const ToastProvider = () => {
  return <Toaster position="top-center" reverseOrder={false} />;
};
