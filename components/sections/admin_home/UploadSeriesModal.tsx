"use client";

import React, { useState } from "react";
import { Upload, X, Image as ImageIcon, Film } from "lucide-react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface UploadSeriesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessAdd: (title: string, roll: string, count: number, medium: string) => void;
}

export default function UploadSeriesModal({
  isOpen,
  onClose,
  onSuccessAdd,
}: UploadSeriesModalProps) {
  const [title, setTitle] = useState("");
  const [rollNumber, setRollNumber] = useState("Roll No. 049");
  const [imageCount, setImageCount] = useState("16");
  const [medium, setMedium] = useState("Hasselblad 500C / Kodak Portra 400");
  const [curatorNote, setCuratorNote] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      toast.error("Please enter a series title.");
      return;
    }
    onSuccessAdd(title, rollNumber, parseInt(imageCount, 10) || 12, medium);
    toast.success(`Series "${title}" registered to curatorial archives.`);
    setTitle("");
    setCuratorNote("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[calc(100dvh-4rem)] overflow-y-auto sm:max-w-md p-6 bg-card text-card-foreground border border-border">
        <DialogHeader>
          <DialogTitle className="font-serif text-lg font-semibold text-foreground">
            Ingest New Photography Series
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            Catalog master photographic plates, roll numbering, and exhibition parameters.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div>
            <label className="text-xs font-semibold text-foreground block mb-1">
              Series Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Nocturne Reflections / Venice Solitude"
              className="w-full text-xs p-2.5 rounded-sm border border-border bg-background text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-foreground block mb-1">
                Roll / Archive No.
              </label>
              <input
                type="text"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                placeholder="Roll No. 049"
                className="w-full text-xs p-2.5 rounded-sm border border-border bg-background text-foreground font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-foreground block mb-1">
                Plate Count
              </label>
              <input
                type="number"
                value={imageCount}
                onChange={(e) => setImageCount(e.target.value)}
                min={1}
                max={120}
                className="w-full text-xs p-2.5 rounded-sm border border-border bg-background text-foreground font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-foreground block mb-1">
              Film Stock & Photographic Medium
            </label>
            <input
              type="text"
              value={medium}
              onChange={(e) => setMedium(e.target.value)}
              placeholder="e.g. 120 Format / Ilford HP5 Plus"
              className="w-full text-xs p-2.5 rounded-sm border border-border bg-background text-foreground text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-foreground block mb-1">
              Curator Annotation Note
            </label>
            <textarea
              rows={3}
              value={curatorNote}
              onChange={(e) => setCuratorNote(e.target.value)}
              placeholder="Exhibition context, lighting setup notes, and archival print recommendations..."
              className="w-full text-xs p-2.5 rounded-sm border border-border bg-background text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>

          <div className="pt-3 border-t border-border flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-1.5 text-xs rounded-sm border border-border hover:bg-muted text-muted-foreground"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 text-xs font-medium rounded-sm bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Register Folio
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}