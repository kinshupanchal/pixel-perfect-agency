import { supabase } from "@/integrations/supabase/client";

export type Work = {
  id: string;
  title: string;
  client: string | null;
  summary: string | null;
  image_url: string | null;
  year: string | null;
  position: number;
  created_at: string;
};

export async function fetchWorks(): Promise<Work[]> {
  const { data, error } = await supabase
    .from("works")
    .select("*")
    .order("position", { ascending: true })
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as Work[];
}

export const worksQuery = {
  queryKey: ["works"],
  queryFn: fetchWorks,
};
