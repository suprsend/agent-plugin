<img src="assets/logo.png" alt="SuprSend logo" width="96" height="96">

# SuprSend agent plugin

The official [SuprSend](https://suprsend.com) plugin in the open [Agent Plugins](https://agent-plugins.org) format, for VS Code, GitHub Copilot, Cursor, ChatGPT and Codex, Kiro, and the other [compatible clients](https://agent-plugins.org/compatible-clients). It connects the agent to the **hosted SuprSend MCP server** and adds a skill that tells the agent how to use it. The agent can then work with your SuprSend account: users and their preferences, tenants, objects, subscriber lists, workflows, templates, events, and delivery data.

For Claude (web, desktop, mobile, Cowork, and Claude Code), use [`suprsend/claude-plugin`](https://github.com/suprsend/claude-plugin).

## What you get

| Part           | What it does                                                                                                                                                                                                                            |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **MCP server** | `https://mcp.suprsend.com/mcp`, hosted by SuprSend: tools for users, objects, tenants, lists, preferences, events, schemas, workflows, templates, translations, messages, and delivery data (read-only SQL). Nothing runs on your computer. |
| **Skill**      | `suprsend`: when to use which tool, and to read the detailed SuprSend skill (workflow JSON, template content, SQL tables) from the server, directly or with `docs_get_skill`, before the agent writes one.                                               |

You need no API key: you sign in with your SuprSend account (OAuth). Admins get every tool; members get the read-only tools. The agent sees only the workspaces that your account can open.

## Install

| Client                 | Install                                                                                                                                   | Sign-in to SuprSend                                                                                       |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| **VS Code**            | Command Palette → **Chat: Install Plugin From Source** → `https://github.com/suprsend/agent-plugin`. The setting `chat.plugins.enabled` must be on. | VS Code asks you to sign in when the server starts.                                                       |
| **GitHub Copilot CLI** | `copilot plugin install suprsend/agent-plugin`                                                                                            | Copilot CLI 1.0.83 or later. It asks you to sign in on first use.                                        |
| **Codex**              | `codex plugin marketplace add suprsend/agent-plugin`, then install **suprsend**                                                           | `codex mcp login suprsend`                                                                                |
| **Cursor**             | Dashboard → **Plugins & MCPs** → **Add Marketplace** → **Import from Repo** → `https://github.com/suprsend/agent-plugin`                    | Cursor asks you to sign in when the server first connects.                                               |
| **Kiro**               | **Powers** → **Add Custom Power** → **Import power from GitHub** → `https://github.com/suprsend/agent-plugin`                                | Kiro asks you to sign in on first use.                                                                   |
| Other clients          | Hermes Agent, OpenClaw, Grok Bot, NanoClaw, OpenHands: see the client's plugin docs.                                                      | Works with any client that supports MCP OAuth.                                                           |

The SuprSend server signs in clients with OAuth 2.1 as the [MCP authorization spec](https://modelcontextprotocol.io/specification/draft/basic/authorization) describes. It supports both dynamic client registration and Client ID Metadata Documents (CIMD), so any MCP client with OAuth support can sign in.

## Examples

```
List my SuprSend workspaces.
Why did user u_42 not get the "order-confirmed" email yesterday?
How many emails did we send per day last week, in production?
Opt user u_42 out of the newsletter category and stop SMS for them.
Make the static list beta-testers exactly the users in this CSV.
Create a workflow that sends the "welcome" email when the event USER_SIGNUP comes in.
```

## Limit the scope

To fix one workspace or a set of tools, add the server with a custom URL instead of the plugin's default:

- `https://mcp.suprsend.com/mcp/staging`: only the `staging` workspace.
- `https://mcp.suprsend.com/mcp?tools=users_*,lists_*`: only these tool groups.

## Support

- Docs: https://docs.suprsend.com
- Email: support@suprsend.com
- Privacy policy: https://www.suprsend.com/privacy
- Security: see [SECURITY.md](SECURITY.md)

## License

[MIT](LICENSE)
