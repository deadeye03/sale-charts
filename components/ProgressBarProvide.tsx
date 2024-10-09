'use client';
import React, { ReactNode } from 'react'

type ProgressBarProviderProps={
    children:ReactNode
}

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function ProgressBarProvider({ children }:ProgressBarProviderProps) {
  return (
      <>
        {children}
        <ProgressBar
          height="4px"
          color="#ff0000"
          options={{ showSpinner: false }}
          shallowRouting
        />
     </>
  );
}
