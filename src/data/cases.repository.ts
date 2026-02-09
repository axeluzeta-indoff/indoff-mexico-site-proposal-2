import { CASES_SUCCESS } from "../data/cases/cases.data";
import type { CaseSuccess } from "../data/types/caseSuccess";

export function getAllCases(): CaseSuccess[] {
  return CASES_SUCCESS;
}

export function getCaseBySlug(slug: string): CaseSuccess | undefined {
  return CASES_SUCCESS.find((c) => c.slug === slug);
}
