const pages = [
  ["index.html", "Home", "Nosivad overview, shard goals, quick links"],
  ["download.html", "Download Launcher", "Launcher installer, setup steps, release links"],
  ["getting-started.html", "Getting Started", "Eldeir Village, first hour, Mira guide, starter hunt-and-gather path"],
  ["adventurer-levels.html", "Adventurer Levels", "Player levels, public grades, XP sources"],
  ["rifts.html", "Planar Rifts", "Static rift anchors, waves, affixes, regional themes"],
  ["breach-gates.html", "Rift Breach Expeditions", "E through S dungeons, sigils, waves, timers, caches"],
  ["regional-events.html", "Regional Events", "Local events, enemy families, resources, bosses, rewards"],
  ["world-bosses.html", "World Bosses", "Rare breach events, random bosses, five-day despawn"],
  ["creatures.html", "Creatures", "Enemy rarity, mutations, creature families"],
  ["loot-relics.html", "Loot and Relics", "Dynamic loot, gear rolls, graded gear, relic templates"],
  ["shrines-lore.html", "God Shrines and Lore", "Shrine blessings, deity dedications, shard lore"],
  ["bounties.html", "Bounty Boards", "Contracts, rewards, progression hooks"],
  ["reference.html", "Reference", "Templates, terms, launch notes"]
];

function currentFile() {
  const file = window.location.pathname.split("/").pop();
  return file || "index.html";
}

function markActiveNav() {
  const file = currentFile();
  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.getAttribute("href") === file) {
      link.classList.add("active");
    }
  });
}

function ensureRegionalEventsNav() {
  const navPanel = document.querySelector(".nav-panel");
  if (!navPanel || navPanel.querySelector('a[href="regional-events.html"]')) return;

  const anchor = document.createElement("a");
  anchor.href = "regional-events.html";
  anchor.setAttribute("data-nav", "");
  anchor.textContent = "Regional Events";

  const worldBossLink = navPanel.querySelector('a[href="world-bosses.html"]');
  navPanel.insertBefore(anchor, worldBossLink || null);
}

function ensureCommunityNav() {
  const navPanel = document.querySelector(".nav-panel");
  if (!navPanel) return;

  const links = [
    ["download.html", "Download Launcher", true],
    ["https://discord.gg/TY5kQ62p9", "Join Discord", false]
  ];

  links.forEach(([href, label, isSitePage]) => {
    if (navPanel.querySelector(`a[href="${href}"]`)) return;

    const anchor = document.createElement("a");
    anchor.href = href;
    if (isSitePage) anchor.setAttribute("data-nav", "");
    anchor.textContent = label;
    navPanel.appendChild(anchor);
  });
}

function setupSearch() {
  const input = document.querySelector("[data-search]");
  const results = document.querySelector("[data-search-results]");
  const resultList = document.querySelector("[data-search-list]");
  if (!input || !results || !resultList) return;

  input.addEventListener("input", () => {
    const term = input.value.trim().toLowerCase();
    resultList.innerHTML = "";
    if (term.length < 2) {
      results.classList.remove("visible");
      return;
    }

    const matches = pages.filter((page) => {
      return page.join(" ").toLowerCase().includes(term);
    });

    matches.forEach(([href, title, summary]) => {
      const a = document.createElement("a");
      a.className = "search-result";
      a.href = href;
      a.innerHTML = `<strong>${title}</strong><span>${summary}</span>`;
      resultList.appendChild(a);
    });

    if (matches.length === 0) {
      const empty = document.createElement("div");
      empty.className = "search-result";
      empty.innerHTML = "<strong>No matches yet</strong><span>Try breach, sigil, event, rift, relic, region, grade, or bounty.</span>";
      resultList.appendChild(empty);
    }

    results.classList.add("visible");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  ensureRegionalEventsNav();
  ensureCommunityNav();
  markActiveNav();
  setupSearch();
});
