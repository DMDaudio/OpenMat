# Setup — Accounts & Cloud Sync

OpenMat works fully **without** any of this — progress saves in the browser. This guide turns on
optional **GitHub sign-in + cross-device sync**, using [Supabase](https://supabase.com) for
hosted auth and a database. There is **no server to run and no ongoing cost** on the free tier;
the study site stays on GitHub Pages.

**What the code already does:** the site ([`docs/`](docs/)) ships with all the auth and sync
logic built in. It stays local-only until you paste two public keys into
[`docs/config.js`](docs/config.js). These steps create the Supabase project and GitHub OAuth app
(which require logging in as you — they can't be automated) and then fill in those keys.

Estimated time: **~10 minutes.**

---

## 1. Create a Supabase project

1. Sign in at <https://supabase.com> (free tier is fine).
2. **New project** → pick a name (e.g. `openmat`), a strong database password, and a region.
3. Wait for it to finish provisioning (~2 min).

## 2. Create a GitHub OAuth app

This lets users sign in with GitHub.

1. Go to **GitHub → Settings → Developer settings → OAuth Apps → New OAuth App**
   (<https://github.com/settings/developers>).
2. Fill in:
   - **Application name:** `OpenMat`
   - **Homepage URL:** `https://dmdaudio.github.io/OpenMat/`
   - **Authorization callback URL:** your Supabase callback —
     `https://<YOUR-PROJECT-REF>.supabase.co/auth/v1/callback`
     (find `<YOUR-PROJECT-REF>` in Supabase under **Project Settings → API → Project URL**).
3. **Register application**, then **Generate a new client secret**. Copy the **Client ID** and
   **Client secret**.

## 3. Enable the GitHub provider in Supabase

1. Supabase Dashboard → **Authentication → Providers → GitHub**.
2. Toggle it **on**, paste the **Client ID** and **Client secret** from step 2, and **Save**.
3. Supabase Dashboard → **Authentication → URL Configuration**:
   - **Site URL:** `https://dmdaudio.github.io/OpenMat/`
   - **Redirect URLs:** add `https://dmdaudio.github.io/OpenMat/` (and
     `http://localhost:8080/` if you want sign-in to work during local `node scripts/serve.mjs`).

## 4. Create the database table

1. Supabase Dashboard → **SQL Editor → New query**.
2. Paste the contents of [`supabase/schema.sql`](supabase/schema.sql) and **Run**.
   This creates the `progress` table and the Row-Level Security policies that let each user touch
   only their own data.

## 5. Add your keys to the site

1. Supabase Dashboard → **Project Settings → API**. Copy the **Project URL** and the **anon /
   public** key.
2. Edit [`docs/config.js`](docs/config.js):
   ```js
   window.OPENMAT_CONFIG = {
     supabaseUrl: "https://YOUR-PROJECT-REF.supabase.co",
     supabaseAnonKey: "eyJhbGc...your-anon-key...",
   };
   ```
3. Commit and push. GitHub Pages redeploys, and the **Sign in with GitHub** button on the Profile
   page goes live.

> **Are these keys secret?** No. The anon key is a *public* client key — it's meant to live in
> the browser. Security comes from the Row-Level Security policies in step 4, which ensure a
> signed-in user can only read and write their own `progress` row. Never commit the *service
> role* key or the OAuth *client secret*, though — those stay in the Supabase dashboard.

---

## How sync behaves

- **Signed out:** progress is saved in the browser (localStorage), exactly as before.
- **On sign-in:** the browser's progress and the cloud copy are **merged** (per question, the more
  recent attempt wins), then saved to both. So signing in never loses local work.
- **While signed in:** each answer updates the cloud (debounced) so any device stays current.
- **Import/Reset** on the Profile page also push to the cloud when you're signed in.

## Troubleshooting

- **Button does nothing / "not set up yet" persists:** `config.js` values are still empty, or the
  Supabase JS library didn't load. Check the browser console.
- **Redirect error after GitHub login:** the redirect URL isn't allow-listed in Supabase
  (step 3) or the OAuth callback URL is wrong (step 2).
- **Signed in but nothing syncs:** re-run [`supabase/schema.sql`](supabase/schema.sql) and confirm
  the `progress` table exists with RLS enabled.
