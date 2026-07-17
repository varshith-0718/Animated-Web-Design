/**
 * Refreshes the `githubProjects` section of client/src/data/portfolio.json
 * with the latest repos from GitHub.
 *
 * Run manually:   npm run update:github
 * Run in CI:       see .github/workflows/update-github-projects.yml
 */
import { readFile, writeFile } from "fs/promises";
import path from "path";

const GITHUB_USERNAME = "varshith-0718";
// Repos to hide from this section (e.g. the portfolio site itself)
const EXCLUDED_REPOS = new Set(["Animated-Web-Design"]);
const MAX_REPOS = 9;

const PORTFOLIO_JSON_PATH = path.resolve(
  import.meta.dirname,
  "../client/src/data/portfolio.json"
);

interface GithubRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  fork: boolean;
  updated_at: string;
}

async function fetchRepos(): Promise<GithubRepo[]> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
  };
  // Optional: set GITHUB_TOKEN env var in CI for a higher rate limit
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
    { headers }
  );

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status} ${await res.text()}`);
  }

  return res.json();
}

async function main() {
  console.log(`Fetching repos for ${GITHUB_USERNAME}...`);
  const repos = await fetchRepos();

  const filtered = repos
    .filter((repo) => !repo.fork)
    .filter((repo) => !EXCLUDED_REPOS.has(repo.name))
    .sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    )
    .slice(0, MAX_REPOS)
    .map((repo) => ({
      title: repo.name,
      description: repo.description || "No description provided.",
      language: repo.language || "N/A",
      link: repo.html_url,
    }));

  console.log(`Found ${filtered.length} repos to include.`);

  const raw = await readFile(PORTFOLIO_JSON_PATH, "utf-8");
  const portfolio = JSON.parse(raw);
  portfolio.githubProjects = filtered;

  await writeFile(
    PORTFOLIO_JSON_PATH,
    JSON.stringify(portfolio, null, 2) + "\n",
    "utf-8"
  );

  console.log(`Updated ${PORTFOLIO_JSON_PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
