const pages = [
  ["index.html", "Home", "Nosivad overview, shard goals, quick links"],
  ["download.html", "Download Launcher", "Launcher installer, setup steps, release links"],
  ["getting-started.html", "Getting Started", "Eldeir Village, first hour, Mira guide, starter hunt-and-gather path"],
  ["adventurer-levels.html", "Adventurer Levels", "Player levels, public grades, XP sources"],
  ["skills-stats.html", "Skills, Stats and Mana", "Skill caps, Barding difficulty, Provoke practice bonus, Channeling, Focus, mana, Wisdom"],
  ["rifts.html", "Planar Rifts", "Static rift anchors, waves, affixes, regional themes"],
  ["breach-gates.html", "Rift Breach Expeditions", "E through S dungeons, sigils, waves, timers, caches"],
  ["regional-events.html", "Regional Events", "Invasions, escorts, corrupted resource surges, shrine defenses, roaming elites, multi-stage rifts, objectives, rewards"],
  ["world-bosses.html", "World Bosses", "Rare breach events, random bosses, five-day despawn"],
  ["creatures.html", "Creatures", "Enemy rarity, mutations, creature families"],
  ["loot-relics.html", "Planar Crafting, Riftborn Gear and Relics", "Breach Essence, Planar Dust, Shards, Cores, Recycler, Forge, repair, cleansing, Masterworks, trade"],
  ["shrines-lore.html", "God Shrines and Lore", "Shrine blessings, deity dedications, shard lore"],
  ["story-discovery.html", "Story and Discovery", "The Unseen Thread, journals, environmental clues, rumors, Pip, persistent investigations, world consequences"],
  ["bounties.html", "Bounty Boards", "Contracts, rewards, progression hooks"],
  ["renown-bards.html", "Renown and Bards", "Regional leaders, ranks, rewards, inn vitality, Pip's lute flute drum repertoire, Panache, Silverwind, Many-Road"],
  ["roadmap.html", "Development Roadmap", "Current priorities, active development, future dungeons, professions, guilds, story, events, collections"],
  ["reference.html", "Player Tools and Reference", "Activities hub, waypoints, professions, economy, HUD modes, event alerts, templates, and terms"]
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

function ensureSkillsStatsNav() {
  const navPanel = document.querySelector(".nav-panel");
  if (!navPanel || navPanel.querySelector('a[href="skills-stats.html"]')) return;

  const anchor = document.createElement("a");
  anchor.href = "skills-stats.html";
  anchor.setAttribute("data-nav", "");
  anchor.textContent = "Skills, Stats and Mana";

  const levelsLink = navPanel.querySelector('a[href="adventurer-levels.html"]');
  levelsLink?.insertAdjacentElement("afterend", anchor);
}

function ensureStoryNav() {
  const navPanel = document.querySelector(".nav-panel");
  if (!navPanel || navPanel.querySelector('a[href="story-discovery.html"]')) return;
  const anchor = document.createElement("a");
  anchor.href = "story-discovery.html";
  anchor.setAttribute("data-nav", "");
  anchor.textContent = "Story and Discovery";
  const bountyLink = navPanel.querySelector('a[href="bounties.html"]');
  navPanel.insertBefore(anchor, bountyLink || null);
}

function ensureRenownBardsNav() {
  const navPanel = document.querySelector(".nav-panel");
  if (!navPanel || navPanel.querySelector('a[href="renown-bards.html"]')) return;
  const anchor = document.createElement("a");
  anchor.href = "renown-bards.html";
  anchor.setAttribute("data-nav", "");
  anchor.textContent = "Renown and Bards";
  const referenceLink = navPanel.querySelector('a[href="reference.html"]');
  navPanel.insertBefore(anchor, referenceLink || null);
}

function ensureRoadmapNav() {
  const navPanel = document.querySelector(".nav-panel");
  if (!navPanel || navPanel.querySelector('a[href="roadmap.html"]')) return;

  const anchor = document.createElement("a");
  anchor.href = "roadmap.html";
  anchor.setAttribute("data-nav", "");
  anchor.textContent = "Roadmap";

  const referenceLink = navPanel.querySelector('a[href="reference.html"]');
  navPanel.insertBefore(anchor, referenceLink || null);
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
      empty.innerHTML = "<strong>No matches yet</strong><span>Try activities, waypoint, profession, economy, HUD, event, rift, or bounty.</span>";
      resultList.appendChild(empty);
    }

    results.classList.add("visible");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  ensureSkillsStatsNav();
  ensureRegionalEventsNav();
  ensureStoryNav();
  ensureRenownBardsNav();
  ensureRoadmapNav();
  ensureCommunityNav();
  markActiveNav();
  setupSearch();
});

