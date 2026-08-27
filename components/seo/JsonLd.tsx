import {
  getFaqJsonLd,
  getItemListJsonLd,
  getLocalBusinessJsonLd,
  getPersonJsonLd,
  getProfessionalServiceJsonLd,
  getProfilePageJsonLd,
  getWebSiteJsonLd,
} from "@/lib/seo";

const schemas = [
  getPersonJsonLd(),
  getLocalBusinessJsonLd(),
  getProfessionalServiceJsonLd(),
  getWebSiteJsonLd(),
  getProfilePageJsonLd(),
  getItemListJsonLd(),
  getFaqJsonLd(),
];

export function JsonLd() {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={`schema-${i}-${schema["@type"] as string}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
