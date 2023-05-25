type TupleStringArray = [string, string][];

export function isTupleStringArray(value: any): value is TupleStringArray {
    return Array.isArray(value) && value.every(item => Array.isArray(item) && item.length === 2 && typeof item[0] === 'string' && typeof item[1] === 'string');
}

export type ContributionSummary = ContributionItem[];

interface ContributionItem {
    repoName: string;
    focusEmojis: string;
    highlights: string;
    issuesClosed: IssueClosed[];
    prsMerged: PrsMerged[];
}

interface IssueClosed {
    issueNumber: string;
    issueTitle: string;
    issueUrl: string;
}

interface PrsMerged {
    prNumber: string;
    prTitle: string;
    prUrl: string;
}


interface Issue {
    title: string;
    number: number;
    url: string;
    repository: {
        name: string;
    };
}

interface PullRequest extends Issue {
    merged: boolean;
}

interface IssueNode {
    issue: Issue;
}

interface PullRequestNode {
    pullRequest: PullRequest;
}

interface ContributionsCollection {
    startedAt: string;
    endedAt: string;
    hasAnyContributions: boolean;
    hasActivityInThePast: boolean;
    issueContributions: {
        nodes: IssueNode[];
    };
    pullRequestContributions: {
        nodes: PullRequestNode[];
    };
}

interface User {
    contributionsCollection: ContributionsCollection;
}

export interface GraphQLResponse {
    user: User;
}

export function isGraphQLResponse(obj: any): obj is GraphQLResponse {
    // Add checks for required fields
    return obj && obj.user && obj.user.contributionsCollection;
}
