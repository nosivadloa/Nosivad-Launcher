const pages = [
  ["index.html", "Home", "Nosivad overview, shard goals, quick links"],
  ["https://nosivadloa.github.io/Nosivad-Launcher/download.html", "Download Launcher", "Launcher installer, portable zip, and setup steps"],
  ["getting-started.html", "Getting Started", "Eldeir Village, first hour, guide, starter bounties"],
  ["adventurer-levels.html", "Adventurer Levels", "Player levels, public grades, XP sources"],
  ["skills-stats.html", "Skills, Stats and Mana", "Skill caps, Barding difficulty, Provoke practice bonus, Channeling, Focus, mana, Wisdom"],
  ["armory.html", "Weapon Armory", "Current weapon types, attack, speed, primary abilities, secondary abilities, relic inheritance"],
  ["professions-crafting.html", "Professions, Crafting and Enchanting", "Fourteen professions, rank thresholds, enchanting, practice, Repair Gear, cloaks, stone fences, gates, pillars, Leather Quiver"],
  ["housing-mounts.html", "Housing, Storage and Mounts", "Starter home, one plot per account, secure house chests, trade pouches, Horse Armor Kits, Pyros fish dock"],
  ["adventurer-npcs.html", "Adventurer NPCs and Companions", "Travel routes, Vanguard, Ranger, Arcanist, Shadowblade, Templar, hiring, Follow, Guard, tactics, renewals"],
  ["rifts.html", "Planar Rifts", "Static rift anchors, waves, affixes, regional themes"],
  ["breach-gates.html", "Rift Breach Expeditions", "E through S dungeons, sigils, waves, timers, caches"],
  ["regional-events.html", "Regional Events", "Local events, enemy families, resources, bosses, rewards"],
  ["world-bosses.html", "World Bosses", "Rare rift events, random bosses, five-day despawn"],
  ["creatures.html", "Creatures", "Enemy rarity, mutations, creature families"],
  ["taming-pets.html", "Taming and Pets", "/pet, level 100, creature abilities, Tamer's Grimoire, Inscription, storage, control slots"],
  ["loot-relics.html", "Planar Crafting, Riftborn Gear and Relics", "Repair Gear, durability, Metalsmithing, Fabrication, Woodsmithing, Breach Essence, Planar Dust, Shards, Cores, Recycler, Forge, cleansing, Masterworks, trade"],
  ["shrines-lore.html", "God Shrines and Lore", "Shrine blessings, deity dedications, shard lore"],
  ["story-discovery.html", "Story and Discovery", "The Unseen Thread, journals, environmental clues, rumors, Pip, persistent investigations, world consequences"],
  ["bounties.html", "Bounty Boards", "Contracts, rewards, progression hooks"],
  ["renown-bards.html", "Renown and Bards", "Regional leaders, ranks, rewards, inn vitality, Pip's lute flute drum repertoire, Panache, Silverwind, Many-Road"],
  ["player-marketplace.html", "Player Marketplace", "Regional buy orders, sell orders, escrow, claims, fees, taxes, Eldeir, Helm, Pyros, Market Stewards"],
  ["roadmap.html", "Development Roadmap", "Current priorities, active development, future dungeons, professions, guilds, story, events, collections"],
  ["reference.html", "Player Tools and Reference", "Secure house chests, locked-down storage, stacked containers, item access, activities, waypoints, professions, economy, HUD modes, event alerts, templates, and terms"]
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

function ensureCommunityNav() {
  const navPanel = document.querySelector(".nav-panel");
  if (!navPanel) return;

  const links = [
    ["https://nosivadloa.github.io/Nosivad-Launcher/download.html", "Download Launcher"],
    ["https://discord.gg/5HZ4GMZjd6", "Join Discord"]
  ];

  links.forEach(([href, label]) => {
    if (navPanel.querySelector(`a[href="${href}"]`)) return;

    const anchor = document.createElement("a");
    anchor.href = href;
    anchor.textContent = label;
    navPanel.appendChild(anchor);
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

function ensureArmoryNav() {
  const navPanel = document.querySelector(".nav-panel");
  if (!navPanel || navPanel.querySelector('a[href="armory.html"]')) return;

  const anchor = document.createElement("a");
  anchor.href = "armory.html";
  anchor.setAttribute("data-nav", "");
  anchor.textContent = "Weapon Armory";

  const skillsLink = navPanel.querySelector('a[href="skills-stats.html"]');
  skillsLink?.insertAdjacentElement("afterend", anchor);
}

function ensureCurrentSystemsNav() {
  const navPanel = document.querySelector(".nav-panel");
  if (!navPanel) return;

  const entries = [
    ["professions-crafting.html", "Professions and Crafting"],
    ["housing-mounts.html", "Housing, Storage and Mounts"],
    ["adventurer-npcs.html", "Adventurer NPCs"]
  ];
  const riftsLink = navPanel.querySelector('a[href="rifts.html"]');

  entries.forEach(([href, label]) => {
    if (navPanel.querySelector(`a[href="${href}"]`)) return;
    const anchor = document.createElement("a");
    anchor.href = href;
    anchor.setAttribute("data-nav", "");
    anchor.textContent = label;
    navPanel.insertBefore(anchor, riftsLink || null);
  });
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

function ensureMarketplaceNav() {
  const navPanel = document.querySelector(".nav-panel");
  if (!navPanel || navPanel.querySelector('a[href="player-marketplace.html"]')) return;

  const anchor = document.createElement("a");
  anchor.href = "player-marketplace.html";
  anchor.setAttribute("data-nav", "");
  anchor.textContent = "Player Marketplace";

  const referenceLink = navPanel.querySelector('a[href="reference.html"]');
  navPanel.insertBefore(anchor, referenceLink || null);
}

function ensureTamingNav() {
  const navPanel = document.querySelector(".nav-panel");
  if (!navPanel || navPanel.querySelector('a[href="taming-pets.html"]')) return;

  const anchor = document.createElement("a");
  anchor.href = "taming-pets.html";
  anchor.setAttribute("data-nav", "");
  anchor.textContent = "Taming and Pets";
  const creaturesLink = navPanel.querySelector('a[href="creatures.html"]');
  if (creaturesLink) creaturesLink.insertAdjacentElement("afterend", anchor);
  else navPanel.appendChild(anchor);
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
  ensureArmoryNav();
  ensureCurrentSystemsNav();
  ensureRegionalEventsNav();
  ensureStoryNav();
  ensureMarketplaceNav();
  ensureTamingNav();
  ensureRoadmapNav();
  ensureCommunityNav();
  markActiveNav();
  setupSearch();
});
