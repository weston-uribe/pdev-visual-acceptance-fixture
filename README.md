# pdev-visual-acceptance-fixture

Shared synthetic visual-acceptance web fixture for PDev.

This is public preview infrastructure only. It contains synthetic catalog and
quote data. It has no production dependency, no authentication, and no PDev
private configuration.

A visual verifier should start at `/`, complete the multi-step request flow with
pointer, keyboard, and scrolling, inspect the rendered panel, and then review
the confirmation totals.

The canonical qualification authority is a deployment-specific Vercel Preview URL
bound to an exact git commit, not a moving branch alias.
