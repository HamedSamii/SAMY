import { supabase } from "./supabase";

export async function getCourses(categorySlug?: string) {
  if (!supabase) return [];
  let query = supabase
    .from("academy_courses")
    .select("*, academy_categories(name_ar, name_en, slug)")
    .eq("is_published", true)
    .order("order_index");

  if (categorySlug) {
    const { data: cat } = await supabase
      .from("academy_categories")
      .select("id")
      .eq("slug", categorySlug)
      .single();
    if (cat) query = query.eq("category_id", cat.id);
  }

  const { data } = await query;
  return data ?? [];
}

export async function getCourseBySlug(slug: string) {
  if (!supabase) return null;
  const { data } = await supabase
    .from("academy_courses")
    .select("*, academy_lessons(*), academy_categories(name_ar, name_en)")
    .eq("slug", slug)
    .eq("is_published", true)
    .order("order_index", { foreignTable: "academy_lessons" })
    .single();
  return data;
}

export async function getKBCategories() {
  if (!supabase) return [];
  const { data } = await supabase
    .from("kb_categories")
    .select("*, kb_articles(count)")
    .order("order_index");
  return data ?? [];
}

export async function getArticlesByCategory(categorySlug: string) {
  if (!supabase) return [];
  const { data: cat } = await supabase
    .from("kb_categories")
    .select("id")
    .eq("slug", categorySlug)
    .single();

  if (!cat) return [];

  const { data } = await supabase
    .from("kb_articles")
    .select("*")
    .eq("category_id", cat.id)
    .eq("is_published", true)
    .order("order_index");
  return data ?? [];
}

export async function searchArticles(query: string) {
  if (!supabase) return [];
  const { data } = await supabase
    .from("kb_articles")
    .select("*, kb_categories(name_ar, name_en)")
    .eq("is_published", true)
    .or(
      `title_ar.ilike.%${query}%,title_en.ilike.%${query}%,content_ar.ilike.%${query}%,content_en.ilike.%${query}%`,
    );
  return data ?? [];
}

export async function getArticleBySlug(slug: string) {
  if (!supabase) return null;
  const { data } = await supabase
    .from("kb_articles")
    .select("*, kb_categories(name_ar, name_en, slug)")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();
  return data;
}
