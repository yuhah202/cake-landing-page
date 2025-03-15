"use client";

import React from "react";
import { FacebookProvider, Page } from "react-facebook";

function FacebookTimeline() {
  return (
    <FacebookProvider appId="625783190069616">
      <Page href="https://www.facebook.com/BioTeabreak" tabs="timeline" />
    </FacebookProvider>
  );
}

export default FacebookTimeline;
