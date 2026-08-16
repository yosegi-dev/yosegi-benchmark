# Arm prompts

The verbatim prompt templates every arm ran with. The red-team pass found the prompts were
the one input the repository did not carry, which made the most important variable
unauditable; this directory closes that.

Placeholders: `{LIB}` is the library sentence ("shadcn/ui", "MUI (Material UI) v9",
"Chakra UI v3", "Mantine v9"); `{N}` is the component count named for M/L hosts; `{DIR}` is
the arm's absolute working directory.

Two disclosures a reader needs, found in the audit rather than planned:

- **Procedural asymmetry (A2 vs B).** The near-miss warning is verbatim-identical in both
  arms. But B additionally received "the registry is the source of truth", an instruction to
  confirm every component before writing, and three worked example commands; A2's only
  counterpart was "Read whatever you need from `src/`". The coaching favours B, and B still
  only tied A2 — so the tie survives it — but B arms' self-reports about what the registry
  "saved" them from are cued and are not quoted as evidence anywhere.
- **Agents were not naive.** Arms ran as subagents of a session whose system prompt carried
  the Yosegi repository's AGENTS.md (which describes the registry favourably) and the
  operator's global instructions. Neither names any host component or library API, but the
  arms knew what Yosegi is.

Isolation was enforced by the instruction at the top of each prompt ("Stay inside it…"), not
by the filesystem — the workspaces are not sandboxed, and `setup-arms.sh`'s comment claiming
filesystem isolation overstates what it builds. The two arms audited (`mui-m-A2`,
`mui-m-B`) complied: every read in their tool logs resolves inside their workspace.
