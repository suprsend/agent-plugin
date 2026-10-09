---
name: suprsend
description: Work with a SuprSend account through the SuprSend MCP server - users and their channels and preferences, objects, tenants, subscriber lists, broadcasts, workflows, templates, events, delivery logs and analytics (SQL), and the SuprSend docs. Use when the user mentions SuprSend, notifications, workflows, templates, subscriber lists, notification preferences, or delivery data. Before you write a workflow, template content, or SQL, read the matching SuprSend skill from the server (docs.get_skill).
license: MIT
---

# SuprSend

The SuprSend MCP server (`https://mcp.suprsend.com/mcp`) gives you live tools for the user's SuprSend account. The tools are named `<group>.<action>`, for example `users.get` or `workflows.save_draft`. The user signs in with their SuprSend account the first time that you call a tool.

## Read the SuprSend skill first

The detailed SuprSend skills are on the server. Read the matching skill before the work that it covers, and follow it:

- If your client lists SuprSend skills from the server (the MCP Skills extension, `skill://` resources), use them directly.
- Otherwise, call `docs.get_skill`. It returns the same files.

| Before you...                                                                                   | Read the skill                       |
| ----------------------------------------------------------------------------------------------- | ------------------------------------ |
| write or change workflow JSON (`workflows.save_draft`, `workflows.validate`)                     | `suprsend-workflow-schema`           |
| write template or variant content (`templates.upsert_variant`, `templates.validate`)             | `suprsend-template-schema`           |
| write SQL for `data.query`, `data.validate`, or a dynamic list query (`lists.preview_query`)     | `suprsend-semantic-layer`            |
| answer a how-to or concept question about SuprSend                                              | `suprsend-docs-support`, and `docs.search` |

With `docs.get_skill`, start without a `path`: you get the skill's `SKILL.md` and the list of its other files. Then read the files that you need with `path`, for example `{"skill": "suprsend-semantic-layer", "path": "references/sql-rules.md"}`.

## Rules

- **Workspaces.** An account has several workspaces (for example `staging` and `production`). When a tool needs a `workspace`, get the valid values from `workspaces.list`. Use `production` only when the user asks for it.
- **IDs.** Find a user's `distinct_id` from an email or a phone number with `users.find`. Find lists with `lists.list`, and other records with `data.query`.
- **Writes.** Tools that change data or send notifications ask the user first. Before a change that removes or replaces data (for example `lists.finish_replace` or `users.update`), say what changes.
- **Sending.** Call `workflows.trigger`, `broadcasts.trigger`, `workflows.test_run`, `templates.send_test`, or `events.track` only when the user asks to send. These send real notifications.
- **Broadcasts.** To send one published template to every user of a list, use `broadcasts.trigger`. Run it with `dry_run` first and tell the user the list size. Read the status with `broadcasts.get`, and stop a broadcast with `broadcasts.cancel` (both take the idempotency key that `broadcasts.trigger` returns).
- **Data limits.** `data.query` allows 10 queries per minute for the whole organization. Combine questions into one query when you can.
