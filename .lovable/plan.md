

## Image Swap Plan

### Images Received (5 total)
1. **IMG_0184.jpeg** -- Luxurious bed with roses, warm candlelight, chandelier (landscape)
2. **IMG_0160.png** -- B&W artistic silhouette with chandelier (portrait/tall)
3. **IMG_023448_0.png** -- Modern luxury suite with fireplace and art (landscape)
4. **IMG_0088-2.png** -- Madison McCoy logo with script monogram
5. **AAEE915E.jpeg** -- B&W lace and bow detail (portrait/tall)

### Proposed Placement

| Slot | Image | Rationale |
|------|-------|-----------|
| **Hero background** | IMG_0184 (roses bed) | Warm, inviting, sets the luxurious tone immediately. Landscape format fits full-width hero. |
| **Header logo** | IMG_0088-2 (logo) | Replace the text-only "MADISON McCOY" in the header with the actual brand logo image. Scale it down to fit the nav bar cleanly. |
| **Gallery image 1** (tall) | IMG_0160 (B&W silhouette) | Striking vertical composition, perfect for the masonry tall slot. |
| **Gallery image 2** | IMG_023448_0 (luxury suite) | Landscape, showcases the space/environment. |
| **Gallery image 3** | AAEE915E (B&W lace) | Portrait, artistic detail shot -- adds texture variety. |

Since we now have 3 real gallery images instead of 6 placeholders, the gallery will be reduced to 3 images for a cleaner, more curated look (or we can repeat/reuse -- 3 feels intentional).

### Steps

1. **Copy all 5 uploads into `src/assets/`** with clean filenames (e.g., `hero.jpg`, `logo.png`, `gallery-1.png`, `gallery-2.png`, `gallery-3.jpg`).
2. **Delete the old placeholder assets** (`hero-bg.jpg`, `gallery-1.jpg` through `gallery-6.jpg`).
3. **Update `HeroSection.tsx`** -- change the import from `hero-bg.jpg` to the new `hero.jpg`.
4. **Update `Header.tsx`** -- replace the text logo link with an `<img>` tag importing the logo. Size it to roughly 120-140px wide, keeping it elegant in the nav bar.
5. **Update `GallerySection.tsx`** -- reduce the images array to 3 entries using the new gallery assets, with appropriate `tall` flags for the masonry layout.
6. **Update `AuthGate.tsx`** -- optionally swap the text "Madison McCoy" with the logo image for brand consistency on the login screen.

### Technical Details
- All images imported as ES6 modules from `@/assets/` for Vite bundling and optimization.
- The logo will be rendered with `object-contain` and constrained height (`h-8` or similar) in the header.
- Gallery masonry columns adjusted: 3 images across 1-2 columns on mobile, 3 columns on desktop.

