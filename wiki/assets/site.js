const pages = [
  ["index.html", "Home", "Nosivad overview, shard goals, quick links"],
  ["whats-new.html", "What's New", "Recent magic, crafting, inventory, rune, and Necromancy updates"],
  ["getting-started.html", "Getting Started", "Eldeir Village, first hour, guide, starter bounties"],
  ["adventurer-levels.html", "Adventurer Levels", "Player levels, public grades, XP sources"],
  ["skills-stats.html", "Skills and Stats", "Skill and stat caps, vitality, crafting and smelting"],
  ["magic.html", "Magic and Spellbooks", "Magery, Necromancy, Evocation, Warding, Conjuration, Verdancy, spellbooks, summons"],
  ["regional-events.html", "Regional Events", "Regional invasions, escorts, shrines, event progress"],
  ["rifts.html", "Planar Rifts", "Static rift anchors, waves, affixes, regional themes"],
  ["breach-gates.html", "Breach Gates", "Breach Gate grades, rooms, bosses, loot"],
  ["world-bosses.html", "World Bosses", "Rare rift events, random bosses, five-day despawn"],
  ["creatures.html", "Creatures", "Enemy rarity, mutations, creature families"],
  ["loot-relics.html", "Loot and Relics", "Dynamic loot, graded gear, relic templates"],
  ["shrines-lore.html", "Shrines and Lore", "Shrine blessings, deity dedications, shard lore"],
  ["bounties.html", "Bounty Boards", "Contracts, rewards, progression hooks"],
  ["reference.html", "Reference", "Runes, player commands, common terms"]
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
      empty.innerHTML = "<strong>No matches yet</strong><span>Try rift, relic, shrine, Eldeir, grade, boss, or bounty.</span>";
      resultList.appendChild(empty);
    }

    results.classList.add("visible");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  markActiveNav();
  setupSearch();
});
