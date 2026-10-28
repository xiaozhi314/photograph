# Lumen Portraits Design System

## 1. Design Philosophy
- **Core Principles**: The photograph is the sole hero. Interface elements exist only to frame, annotate, and navigate light. Clutter, decorative micro-badges, artificial status codes, and multi-colored pills are rigorously excluded.
- **The Vibe**: An exclusive natural-light gallery in Milan or Tokyo. Warm mineral paper stock, precise typographic scales, tactile linen warmth, and spacious exhibition margins.
- **Tactile Experience**:
  - *Paper & Carbon*: The background possesses a delicate warm tone (#faf8f5) reminiscent of heavy cotton rag paper, eliminating clinical pure white glare.
  - *Hairline Cast*: Structural divisions use delicate hairline borders (#e5dfd5) rather than drop shadows.
  - *Burnished Bronze*: Interactive intent is signaled with a single tactile bronze luster (#8c5828), grounding buttons and active navigation states.

## 2. Five Visual Signatures
1. **Museum Matte Framing**: Images are encased in warm parchment vitrines with 2px rounded corners and 1px crisp mineral borders (`border border-border/80`).
2. **Editorial Masthead Scale**: Bold editorial Serif display headers (`font-display tracking-tight text-foreground`) establishing an authoritative artistic presence.
3. **Quiet Curatorial Annotations**: Image captions, dates, and plate numbers use tabular numerals and muted carbon (`text-muted-foreground font-body text-xs sm:text-sm`).
4. **Restrained Bronze Focal Points**: Interactive anchors (Primary inquiry button, active filter tags) use burnished bronze (`bg-primary text-primary-foreground`) with zero visual noise.
5. **Generous Exhibition Spacing**: Clean double-layer sections featuring calm, intentional breathing room (`py-14 sm:py-20 lg:py-24`) without redundant stacked margins.

## 3. Token Architecture & Pairing Map
All neutral surfaces reside strictly on the warm light end of the spectrum (scale 50–200). All foregrounds strictly satisfy the Lightness separation rule (Pairing Distance ≥ 500, L_fg ≤ 0.12).

| Token | Role & Tone | Surface Hex & L | Pairing Foreground Hex & L | Status |
|---|---|---|---|---|
| `background` | Warm Cotton Canvas | `#faf8f5` (L=0.95) | `#141312` (L=0.01) | PASS (ΔL > 0.90) |
| `card` | Gallery Mount Board | `#f5f2eb` (L=0.91) | `#141312` (L=0.01) | PASS (ΔL > 0.90) |
| `popover` | Floated Palette Surface | `#f5f2eb` (L=0.91) | `#141312` (L=0.01) | PASS (ΔL > 0.90) |
| `muted` | Recessed Linen Surface | `#eee9df` (L=0.83) | `#2b2724` (L=0.03) | PASS (ΔL > 0.80) |
| `secondary` | Neutral Warm Container | `#e5ded2` (L=0.76) | `#1b1917` (L=0.02) | PASS (ΔL > 0.74) |
| `primary` | Burnished Art Bronze | `#8c5828` (L=0.14) | `#ffffff` (L=1.00) | PASS (L ≤ 0.18, White FG) |
| `accent` | Deep Earth Umber | `#543820` (L=0.06) | `#ffffff` (L=1.00) | PASS (L ≤ 0.18, White FG) |
| `destructive` | Curatorial Seal Crimson | `#b91c1c` (L=0.11) | `#ffffff` (L=1.00) | PASS (Pre-approved) |
| `success` | Deep Olive Verdigris | `#1e5631` (L=0.08) | `#ffffff` (L=1.00) | PASS (L ≤ 0.18) |
| `warning` | Amber Ochre | `#9a5214` (L=0.13) | `#ffffff` (L=1.00) | PASS (L ≤ 0.18) |
| `info` | Archival Slate Blue | `#23496d` (L=0.08) | `#ffffff` (L=1.00) | PASS (L ≤ 0.18) |
| `sidebar` | Neutral Studio Desk Board | `#f4f0e8` (L=0.89) | `#141312` (L=0.01) | PASS (ΔL > 0.85) |

## 4. Anti-Generic Enforcement (5 Hard CSS Invariants)
1. **No Pure White Surfaces**: `background`, `card`, `popover`, `muted`, and `sidebar` must never equal `#ffffff`. All must carry the warm cotton/limestone tint.
2. **Zero Kicker Pill Noise**: Headers and sections must not use eyebrow badges, announcement capsules, or decorative mock version pills. Headlines begin cleanly with `<h1>` or `<h2>`.
3. **Single High-Saturation Accent Rule**: Only one primary CTA or active filter state may carry `#8c5828` in any viewport section. Secondary actions remain neutral `border border-border bg-card hover:bg-muted text-card-foreground`.
4. **Strict Inherited Foregrounds on Tints**: Any icon well or indicator using `bg-primary/10` or semantic `/10` tints must NOT declare any `text-*` utility; foreground text and icons inherit strictly from the solid parent container.
5. **Font Token Triad Exclusivity**: Only `--font-display`, `--font-header`, and `--font-body` exist. No generic fallback label fonts or decorative monospace pseudo-telemetry.

## 5. Component Recipes (White-list Only)
- **Metadata Badges**: `bg-muted text-muted-foreground` or `border border-border text-foreground text-xs px-2.5 py-1 rounded-sm`.
- **Status Indicators (e.g. Inquiry status, Collection availability)**:
  - Solid pill: `bg-success text-success-foreground px-2 py-0.5 text-xs font-medium rounded-full`.
  - Icon well: `bg-primary/10 p-2 rounded-full` (Children inherit parent `text-foreground`).
- **Primary Interactive CTA**: `bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 transition-colors font-medium px-5 py-2.5 rounded-sm`.
- **Secondary Outlined Button**: `border border-border bg-card text-card-foreground hover:bg-muted hover:text-muted-foreground active:brightness-95 transition-colors px-4 py-2 rounded-sm`.
- **Collection Cards / Exhibit Frames**: `bg-card text-card-foreground border border-border/70 rounded-sm overflow-hidden shadow-sm hover:border-border transition-all`.

## 6. Layout & Spatial Discipline
- **Web Content Column**: `container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl` applied strictly to inner section wrappers.
- **Section Rhythm**: Outer `<section>` holds subtle background tints; inner content carries `py-14 sm:py-20 lg:py-24` with zero artificial double dividers or 200px stacked gaps.
- **Backend Admin Layout**: Clean top/sidebar architecture with `--color-sidebar: #f4f0e8` and card summary decks utilizing `bg-card text-card-foreground border border-border`.