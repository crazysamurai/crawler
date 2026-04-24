import type { ExtractedPageData } from "./crawl";
import { writeFileSync } from "node:fs";
import path from "node:path";

export function writeJSONReport(
  pageData: Record<string, ExtractedPageData>,
  filename = "report.json",
): void {
  const sorted = Object.values(pageData).sort((a, b) => a.url.localeCompare(b.url));
  const serialized = JSON.stringify(sorted, null, 2);
  const filePath = path.resolve(process.cwd(), filename);
  writeFileSync(filePath, serialized);
}
