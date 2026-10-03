# AGENTS.md

This repo is the SuprSend plugin in the [Agent Plugins](https://agent-plugins.org) 1.0.0 format. Its sibling, [`suprsend/claude-plugin`](https://github.com/suprsend/claude-plugin), is the same plugin in the Claude format. Keep the two in step: the skill text (`skills/suprsend/SKILL.md`) is the same file in both repos.

## Layout

| Path                               | Role                                                                                                                                                             |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `plugin.json`                      | The manifest. Its schema is closed: only `$schema, name, version, description, author, homepage, repository, license, keywords, extensions`. Client-specific data goes in `extensions.<reverse-domain>`. |
| `mcp.json`                         | The hosted server, `{"type": "streamable-http", "url": "https://mcp.suprsend.com/mcp"}`. No auth fields: the spec leaves OAuth to the client. Its `$schema` version must equal the one in `plugin.json`. |
| `skills/suprsend/SKILL.md`         | The one skill. The detailed skills stay on the server (`skill://` resources and `docs.get_skill`); do not copy them here.                                                                |
| `.agents/plugins/marketplace.json` | For Codex only (`codex plugin marketplace add suprsend/agent-plugin`). Not part of the standard.                                                                 |

## Rules

- Stay on Agent Plugins **1.0.0**. 1.1.0 is a working draft.
- **Skill text is neutral and current:** "the agent", never a product name. It names only tools that the production server has. When the server adds, renames, or removes a tool that the skill names, change the skill in both repos.
- Raise `version` in `plugin.json` for every change that users must get.
- Check with `npm install --no-save ajv@8 ajv-formats@3 && node scripts/validate.mjs` before you push.
- Never add AI attribution to commits or pull requests.
