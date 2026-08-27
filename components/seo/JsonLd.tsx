import {
  getFaqJsonLd,
  getPersonJsonLd,
  getProfessionalServiceJsonLd,
  getWebSiteJsonLd,
} from "@/lib/seo";

const schemas = [
  getPersonJsonLd(),
  getProfessionalServiceJsonLd(),
  getWebSiteJsonLd(),
  getFaqJsonLd(),
];

export function JsonLd() {
  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema["@type"] as string}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
