/** Prefix public assets when the site is hosted beneath a repository path. */
export function assetPath(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
