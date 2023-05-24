import { fetchUserContributions } from "./api"
import { formatAsPromptInput } from "./format";
import { getContributionSummary } from "./langchain";

export async function main(username: string, startDateInput?: Date, endDateInput?: Date) {
  const endDate = endDateInput || new Date();
  const startDate = startDateInput || new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate() - 14);

  const contributions = await fetchUserContributions('subspace', username, startDate, endDate);
  const formattedContributions = formatAsPromptInput(contributions);

  const summary = await getContributionSummary(formattedContributions);

  console.log(summary);
}

main('isSerge');

