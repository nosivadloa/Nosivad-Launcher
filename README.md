# Nosivad GitHub Pages Site

This folder is prepared to publish as a static GitHub Pages website for the Nosivad shard.

## Suggested Repo Layout

Create a public GitHub repository for the website and upload the contents of this folder to the repository root:

```text
/
  .nojekyll
  404.html
  index.html
  download.html
  getting-started.html
  adventurer-levels.html
  rifts.html
  breach-gates.html
  world-bosses.html
  creatures.html
  loot-relics.html
  shrines-lore.html
  bounties.html
  reference.html
  assets/
```

## Publish Steps

1. Create a public GitHub repository.
2. Upload these files to the repository root.
3. In GitHub, open `Settings -> Pages`.
4. Set the source to `Deploy from a branch`.
5. Choose the main branch and `/ (root)`.
6. Save and wait for the Pages URL to appear.

## Launcher Downloads

Do **not** upload the installer EXE into this Pages repo.

Instead:

1. Create a GitHub Release in a separate repo or in the same repo.
2. Upload these files to the release:
   - `NosivadLauncher-Setup-win-x64.exe`
   - `NosivadLauncher-win-x64.zip`
3. Update `download.html` and replace:

```text
https://github.com/YOUR-GITHUB-OWNER/YOUR-REPO/releases/latest/download/NosivadLauncher-Setup-win-x64.exe
https://github.com/YOUR-GITHUB-OWNER/YOUR-REPO/releases/latest/download/NosivadLauncher-win-x64.zip
```

with your real release asset URLs.

## Notes

- `.nojekyll` is included so GitHub Pages serves the site as plain static files.
- `404.html` is included for cleaner broken-link handling.
- The search box is local and static; it does not require a server backend.
