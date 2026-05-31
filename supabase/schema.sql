-- ===== ACADEMY =====
CREATE TABLE academy_categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name_ar TEXT NOT NULL,
  name_en TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  order_index INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE academy_courses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  category_id UUID REFERENCES academy_categories(id) ON DELETE SET NULL,
  title_ar TEXT NOT NULL,
  title_en TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description_ar TEXT,
  description_en TEXT,
  thumbnail_url TEXT,
  level TEXT CHECK (level IN ('beginner', 'intermediate', 'advanced')) DEFAULT 'beginner',
  duration_minutes INT DEFAULT 0,
  is_published BOOLEAN DEFAULT false,
  order_index INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE academy_lessons (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id UUID REFERENCES academy_courses(id) ON DELETE CASCADE,
  title_ar TEXT NOT NULL,
  title_en TEXT NOT NULL,
  slug TEXT NOT NULL,
  content_ar TEXT,
  content_en TEXT,
  video_url TEXT,
  duration_minutes INT DEFAULT 0,
  order_index INT DEFAULT 0,
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ===== KNOWLEDGE BASE =====
CREATE TABLE kb_categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name_ar TEXT NOT NULL,
  name_en TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  icon TEXT DEFAULT '📄',
  order_index INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE kb_articles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  category_id UUID REFERENCES kb_categories(id) ON DELETE SET NULL,
  title_ar TEXT NOT NULL,
  title_en TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content_ar TEXT,
  content_en TEXT,
  is_published BOOLEAN DEFAULT false,
  helpful_yes INT DEFAULT 0,
  helpful_no INT DEFAULT 0,
  order_index INT DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ===== RLS POLICIES =====
ALTER TABLE academy_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE academy_courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE academy_lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE kb_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE kb_articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read categories" ON academy_categories FOR SELECT USING (true);
CREATE POLICY "Public read published courses" ON academy_courses FOR SELECT USING (is_published = true);
CREATE POLICY "Public read published lessons" ON academy_lessons FOR SELECT USING (is_published = true);
CREATE POLICY "Public read kb_categories" ON kb_categories FOR SELECT USING (true);
CREATE POLICY "Public read published articles" ON kb_articles FOR SELECT USING (is_published = true);
