import type { Metadata } from "next";
import CountryApostilleClient from "./CountryApostilleClient";
import { Breadcrumbs } from "../../../components/SectionHeader";

export async function generateMetadata({ params }: { params: { country: string } }): Promise<Metadata> {
  const country = params.country || "Country";
  return {
    title: `${country} Apostille | 99Attestation`,
    description: `Get your documents apostilled for use in ${country}. Fast, secure, and globally accepted.`,
  };
}

export async function generateStaticParams() {
  // TODO: Replace with your real country list or fetch from API
  const countries = [
    "usa",
    "uk",
    "australia",
    "italy",
    "germany",
    "france",
    "netherlands"
  ];
  return countries.map((country) => ({ country }));
}

export default function Page({ params }: { params: Record<string, string> }) {
  return (
    <>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Apostille", href: "/(services)/apostille" },
        { label: params.country }
      ]} />
      <CountryApostilleClient country={params.country} />
    </>
  );
}
