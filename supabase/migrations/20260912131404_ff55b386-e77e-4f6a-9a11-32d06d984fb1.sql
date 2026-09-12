CREATE TABLE public.works (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  client TEXT,
  summary TEXT,
  image_url TEXT,
  year TEXT,
  position INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.works TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.works TO authenticated;
GRANT ALL ON public.works TO service_role;

ALTER TABLE public.works ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view works" ON public.works FOR SELECT USING (true);
CREATE POLICY "Anyone can add works" ON public.works FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can update works" ON public.works FOR UPDATE USING (true) WITH CHECK (true);
CREATE POLICY "Anyone can delete works" ON public.works FOR DELETE USING (true);