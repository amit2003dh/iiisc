"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { Container } from "./Container";
import backgroundImage from "../images/background-features.jpg";
import screenshotExpenses from "../images/screenshots/expenses.png";
import screenshotPayroll from "../images/screenshots/payroll.png";

function formater(num) {
  const CurrencyFormater = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "USD",
  });

  const formatString = CurrencyFormater.format(num);
  let cleanedInput = formatString.substring(1);
  let dotIndex = cleanedInput.indexOf(".");
  if (dotIndex !== -1) {
    cleanedInput = cleanedInput.slice(0, dotIndex);
  }
  return cleanedInput;
}

function formatStats(stat) {
  return stat.replace(/(\d+)([A-Za-z]+)/, "$1 $2");
}

export function Stats({ stats }) {
  let [tabOrientation, setTabOrientation] = useState("horizontal");
  console.log(stats);

  const totalFiles = formater(stats?.total_Files) ?? "";
  const totalDuration = stats?.total_duration ?? "";
  const totalSpeakers = formater(stats?.total_speakers) ?? "";
  const maleSpeakers = stats?.male_Speakers ?? "";
  const femaleSpeakers = stats?.female_Speakers ?? "";
  const totalDistricts = stats?.total_districts ?? "";
  const totalStates = stats?.total_states ?? "";
  const transcription_duration = stats.transcription_duration ?? "";
  const total_languages = stats.total_languages;
  const total_images = stats.total_images;

  // Create an array of features with proper data handling
  let features = [
    {
      title: "Total Duration",
      value: formatStats(totalDuration),
      logo: screenshotExpenses,
    },
    {
      title: "Total Speakers",
      value: totalSpeakers,
      logo: screenshotPayroll,
    },
    {
      title: "Total Languages",
      value: total_languages,
      logo: screenshotExpenses,
    },
    {
      title: "Transcription Duration",
      value: formatStats(transcription_duration),
      logo: screenshotExpenses,
    },
    {
      title: "Districts Covered",
      value: totalDistricts,
      logo: screenshotExpenses,
    },
    {
      title: "States & UT Covered",
      value: totalStates,
      logo: screenshotExpenses,
    },
    {
      title: "Total Images",
      value: total_images,
      logo: screenshotExpenses,
    },
    {
      title: "Male Audio",
      value: maleSpeakers,
      logo: screenshotExpenses,
    },
    {
      title: "Female Audio",
      value: femaleSpeakers,
      logo: screenshotExpenses,
    },
    {
      title: " Total Files",
      value: totalFiles,
      logo: screenshotPayroll,
    },
  ];

  return (
    <section
      id="About"
      aria-label="Features for running your books"
      className="relative overflow-hidden py-20 sm:py-32 content-relative"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none mb-16">
          <div className="glass-card p-8 rounded-fintech inline-block">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-fintech">
              About Project VAANI
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, featureIndex) => (
            <div
              key={feature.title}
              className="glass-card p-6 rounded-fintech hover:shadow-glow-effect transition-all duration-300 hover:scale-105 group"
            >
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-fintech-light transition-colors">
                {feature.title}
              </h3>
              <p className="text-3xl font-bold text-gradient-fintech">
                {feature.value}
              </p>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 rounded-fintech">
          <div className="text-white text-lg max-w-screen-lg">
            <p className="mb-5">
              Digital India is marching ahead inexorably. Digital
              interfaces and communications have become critical
              for access to information, entertainment, economic
              opportunities and even essential services such as
              healthcare.
            </p>
            <p className="mb-5">
              Project Vaani, by IISc, Bangalore and ARTPARK, is
              capturing true diversity of India's spoken
              languages to propel language AI technologies and
              content for an inclusive Digital India.
            </p>
            <p className="mb-5">
              We expect to create data corpora of over 150,000
              hours of speech, part of which will be transcribed
              in local scripts, while ensuring linguistic,
              educational, urban-rural, age, and gender diversity
              (among other potential diversity characteristics).
              These diligently collected and curated datasets of
              natural speech and text from about 1 million people
              across all 773 districts of India will be
              open-sourced. The current version of data is
              open-sourced here. Going forward, we hope to open
              source through platforms like Bhashini (under
              National Language Translation Mission, MeiTY).
            </p>
            <p className="mb-5">
              This will boost development of technologies such
              as automatic speech recognition (ASR), speech to
              speech translation (SST), and natural language
              understanding (NLU) that reflect ground
              realities of how Indians speak.
            </p>
            <p className="mb-5">
              Google is funding Project Vaani.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
