# Visual acceptance fixture

This repository is shared PDev visual-acceptance infrastructure. It is not a
Slice 9-only harness and it is not a production application.

## Purpose

Provide one synthetic, publicly reachable multi-step web fixture that a visual
verifier can open at a deployment-specific Vercel Preview URL.

The fixture must remain:

- synthetic data only
- free of production dependencies, secrets, and PDev private configuration
- reusable for later Checkpoint B visual scenarios
- navigable with pointer, keyboard, and scrolling
- honest about one intentional observable visual/product defect
- host to one visual-only challenge whose authoritative answer is not present in
  HTML text, accessibility text, JavaScript, URLs, public APIs, or filenames

## Working here

Read this file before editing. Keep the fixture small and deterministic. Do not
add authentication, environment files, provider credentials, or PDev private
state. Do not put the visual-only challenge answer into any public surface.

Authoritative expected pixels, hashes, and the challenge value live outside this
repository in PDev private acceptance files.

## Validation

After changing pages or assets, confirm the Preview deployment is still public,
deployment-specific, and bound to the exact git commit. A moving branch alias is
not verification authority.
