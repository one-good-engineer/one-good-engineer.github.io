import type {Metadata} from "next";
import {OG_IMAGE} from "../../site";
import PrivateAIPage from "../../prywatne-ai/PrivateAIPage";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Private AI and knowledge assistants for businesses",
  description: "Data and process audits, knowledge assistant PoCs and private AI implementation with access control, cited answers and human approval.",
  keywords: ["private AI for business", "local language model for business", "AI knowledge assistant", "RAG implementation", "private AI Poland"],
  alternates: {canonical: "/en/private-ai/", languages: {en: "/en/private-ai/", pl: "/prywatne-ai/", "x-default": "/prywatne-ai/"}},
  openGraph: {title: "Private AI and knowledge assistants for businesses · One Good Engineer", description: "Data and process audits, knowledge assistant PoCs and private AI implementation with access control and human approval.", locale: "en_US", alternateLocale: "pl_PL", url: "/en/private-ai/", images: [OG_IMAGE.en]},
};

export default function PrivateAIEnglish() {
  return <PrivateAIPage locale="en" />;
}
