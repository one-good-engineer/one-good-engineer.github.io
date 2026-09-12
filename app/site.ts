export const SITE = "https://onegoodengineer.pl";

// A page-level openGraph replaces the layout's whole object, so each page re-attaches the image.
const ogImage = (alt: string) => ({ url: "/og.png", width: 1200, height: 630, alt });
export const OG_IMAGE = {
  pl: ogImage("One Good Engineer & Co. · jeden inżynier, załoga agentów"),
  en: ogImage("One Good Engineer & Co. · one engineer, a crew of agents"),
};
