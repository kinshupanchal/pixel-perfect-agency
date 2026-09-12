import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { worksQuery, type Work } from "@/lib/works";
import { toast } from "sonner";

export const Route = createFileRoute("/studio-admin")({
  ssr: false,
  component: AdminPage,
  head: () => ({
    meta: [
      { title: "Studio Admin — Akina Studio" },
      { name: "robots", content: "noindex, nofollow" },
      { name: "description", content: "Private area for managing Akina Studio project entries." },
    ],
  }),
});

const empty = { title: "", client: "", summary: "", image_url: "", year: "", position: "0" };

function AdminPage() {
  const qc = useQueryClient();
  const { data: works, isLoading } = useQuery(worksQuery);
  const [form, setForm] = useState(empty);

  const addWork = useMutation({
    mutationFn: async () => {
      const { error } = await supabase.from("works").insert({
        title: form.title.trim(),
        client: form.client.trim() || null,
        summary: form.summary.trim() || null,
        image_url: form.image_url.trim() || null,
        year: form.year.trim() || null,
        position: Number(form.position) || 0,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      setForm(empty);
      toast.success("Project added");
      qc.invalidateQueries({ queryKey: ["works"] });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const removeWork = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("works").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Project removed");
      qc.invalidateQueries({ queryKey: ["works"] });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const field = (
    key: keyof typeof empty,
    label: string,
    placeholder: string,
    type = "text",
  ) => (
    <label className="block">
      <span className="text-xs tracking-widest text-muted-foreground uppercase">{label}</span>
      <input
        type={type}
        value={form[key]}
        placeholder={placeholder}
        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        className="mt-2 w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none"
      />
    </label>
  );

  return (
    <main className="min-h-screen px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow">Private</p>
        <h1 className="mt-3 text-4xl sm:text-5xl">Manage previous work</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Anything you add here appears in the Work section of the landing page.
        </p>

        <form
          className="panel mt-10 grid gap-5 rounded-3xl p-7 sm:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            if (!form.title.trim()) {
              toast.error("A project title is required");
              return;
            }
            addWork.mutate();
          }}
        >
          {field("title", "Project title", "Summit logistics platform")}
          {field("client", "Client", "Summit Freight")}
          {field("year", "Year", "2025")}
          {field("position", "Order", "0", "number")}
          <div className="sm:col-span-2">
            {field("image_url", "Image link", "https://…/photo.jpg")}
          </div>
          <label className="block sm:col-span-2">
            <span className="text-xs tracking-widest text-muted-foreground uppercase">
              Short description
            </span>
            <textarea
              rows={3}
              value={form.summary}
              placeholder="What you built and the result it delivered."
              onChange={(e) => setForm({ ...form, summary: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none"
            />
          </label>
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={addWork.isPending}
              className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {addWork.isPending ? "Saving…" : "Add project"}
            </button>
          </div>
        </form>

        <div className="hairline my-12" />

        <h2 className="text-2xl">Current projects</h2>
        {isLoading ? (
          <p className="mt-4 text-sm text-muted-foreground">Loading…</p>
        ) : !works?.length ? (
          <p className="mt-4 text-sm text-muted-foreground">Nothing added yet.</p>
        ) : (
          <ul className="mt-6 space-y-3">
            {works.map((w: Work) => (
              <li
                key={w.id}
                className="panel flex items-center gap-4 rounded-2xl p-4"
              >
                {w.image_url ? (
                  <img
                    src={w.image_url}
                    alt={w.title}
                    className="h-14 w-14 rounded-xl object-cover"
                  />
                ) : null}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-lg">{w.title}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {[w.client, w.year].filter(Boolean).join(" · ")}
                  </p>
                </div>
                <button
                  onClick={() => removeWork.mutate(w.id)}
                  className="rounded-full border border-border px-4 py-2 text-xs tracking-wide text-foreground uppercase transition-colors hover:bg-destructive hover:text-destructive-foreground"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
