// Repo is a GitHub *project* page (not a user root site, since the account's
// user-site slot is already taken by the old ocvillal.github.io repo), so it's
// served at https://ocvillal.github.io/octaviovillalobos.github.io/ — every
// hardcoded absolute path needs this prefix. Keep in sync with next.config.ts.
export const BASE_PATH = "/octaviovillalobos.github.io";

export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
