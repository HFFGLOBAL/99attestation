import type { Metadata } from "next";
import CountryAttestationClient from "./CountryAttestationClient";
import { Breadcrumbs } from "../../../components/SectionHeader";

export async function generateMetadata({ params }: { params: { country: string } }): Promise<Metadata> {
  const country = params.country || "Country";
  return {
    title: `${country} Attestation | 99Attestation`,
    description: `Get your documents attested for use in ${country}. Fast, secure, and globally accepted.`,
  };
}

export async function generateStaticParams() {
  // TODO: Replace with your real country list or fetch from API
  const countries = [
    "uae",
    "qatar",
    "kuwait",
    "oman",
    "bahrain",
    "egypt"
  ];
  return countries.map((country) => ({ country }));
}

export default function Page({ params }: { params: Record<string, string> }) {
  return (
    <>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Attestation", href: "/(services)/attestation" },
        { label: params.country }
      ]} />
      <CountryAttestationClient country={params.country} />
    </>
  );
} 