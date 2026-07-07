const pages = [
  ["index.html", "Home", "Nosivad overview, shard goals, quick links"],
  ["download.html", "Download Launcher", "Launcher installer, setup steps, release links"],
  ["getting-started.html", "Getting Started", "Eldeir Village, first hour, guide, starter bounties"],
  ["adventurer-levels.html", "Adventurer Levels", "Player levels, public grades, XP sources"],
  ["rifts.html", "Planar Rifts", "Static rift anchors, waves, affixes, regional themes"],
  ["breach-gates.html", "Breach Gates", "Instanced dungeon-style portals, E through S grades"],
  ["world-bosses.html", "World Bosses", "Rare breach events, random bosses, five-day despawn"],
  ["creatures.html", "Creatures", "Enemy rarity, mutations, creature families"],
  ["loot-relics.html", "Loot and Relics", "Dynamic loot, graded gear, relic templates"],
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

function ensureDownloadNav() {
  const navPanel = document.querySelector(".nav-panel");
  if (!navPanel) return;
  if (navPanel.querySelector('a[href="download.html"]')) return;

  const anchor = document.createElement("a");
  anchor.href = "download.html";
  anchor.setAttribute("data-nav", "");
  anchor.textContent = "Download Launcher";
  navPanel.insertBefore(anchor, navPanel.children[1] || null);
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
  ensureDownloadNav();
  markActiveNav();
  setupSearch();
});
