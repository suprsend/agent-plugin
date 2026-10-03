# Security

## Reporting a vulnerability

Do not open a public issue. Email [security@suprsend.com](mailto:security@suprsend.com) with the details. We answer within 48 hours.

## How the plugin handles access

- The plugin holds no credentials. `mcp.json` has only the server URL, `https://mcp.suprsend.com/mcp`.
- You sign in with your SuprSend account (OAuth 2.1). Your client stores and renews the login. To revoke it, sign out of the server in your client.
- The server acts with your account and role. Members get only the read-only tools, and every tool reaches only the workspaces that your account can open.
- Tools that change data or send notifications are marked as such, so your client can ask you before it runs them.
- The skill is text only. It runs no code and makes no calls.
