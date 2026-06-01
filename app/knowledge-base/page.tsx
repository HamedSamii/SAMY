import { KnowledgeBasePageContent } from "@/components/knowledge-base/KnowledgeBasePageContent";
import { getKBCategories } from "@/lib/db";

export default async function KnowledgeBasePage() {
  const categories = await getKBCategories();
  return <KnowledgeBasePageContent categories={categories} />;
}
