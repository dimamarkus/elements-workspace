---
createdAt: 2026-03-22
title: Elements Workspace Image Drop Guide
---

## Elements Workspace Image Drop Guide

## How To Replace Placeholder Images

The image system is centralized in:

- `content/shared/media.ts`

The actual image files should be dropped into:

- `public/images/homepage/`
- `public/images/programs/`
- `public/images/about/`
- `public/images/team/`
- `public/images/summer-camp/`
- `public/images/contact/`

## Workflow

1. Drop the real image file into the exact `dropPath` shown in `content/shared/media.ts`.
2. Make sure the `alt` text still accurately describes the real image.
3. Redeploy if needed for your hosting setup.

## Why It Works This Way

- All image slots live in one file.
- All placeholder notes and alt text live in one file.
- Page components do not need to be edited when an image changes.
- The site automatically detects whether the expected file exists.

## Example

If you want to replace the homepage hero image:

1. Add the file at `public/images/homepage/hero-main.jpg`
2. Leave the slot metadata in `content/shared/media.ts` alone unless the path or alt text needs to change.

```ts
heroMain: {
  publicPath: "/images/homepage/hero-main.jpg",
  dropPath: "public/images/homepage/hero-main.jpg",
  // ...
}
```

## Current Rule

Until a real asset is ready:

- leave the file path as-is
- the UI will continue rendering the branded placeholder card instead
