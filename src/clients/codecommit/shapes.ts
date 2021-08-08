/**
 * @schema CodeCommitAssociateApprovalRuleTemplateWithRepositoryInput
 */
export interface CodeCommitAssociateApprovalRuleTemplateWithRepositoryInput {
  /**
   * @schema CodeCommitAssociateApprovalRuleTemplateWithRepositoryInput#approvalRuleTemplateName
   */
  readonly approvalRuleTemplateName: string;

  /**
   * @schema CodeCommitAssociateApprovalRuleTemplateWithRepositoryInput#repositoryName
   */
  readonly repositoryName: string;

}

/**
 * Converts an object of type 'CodeCommitAssociateApprovalRuleTemplateWithRepositoryInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitAssociateApprovalRuleTemplateWithRepositoryInput(obj: CodeCommitAssociateApprovalRuleTemplateWithRepositoryInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'approvalRuleTemplateName': obj.approvalRuleTemplateName,
    'repositoryName': obj.repositoryName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesInput
 */
export interface CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesInput {
  /**
   * @schema CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesInput#approvalRuleTemplateName
   */
  readonly approvalRuleTemplateName: string;

  /**
   * @schema CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesInput#repositoryNames
   */
  readonly repositoryNames: string[];

}

/**
 * Converts an object of type 'CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesInput(obj: CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'approvalRuleTemplateName': obj.approvalRuleTemplateName,
    'repositoryNames': obj.repositoryNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesOutput
 */
export interface CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesOutput {
  /**
   * @schema CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesOutput#associatedRepositoryNames
   */
  readonly associatedRepositoryNames: string[];

  /**
   * @schema CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesOutput#errors
   */
  readonly errors: CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesError[];

}

/**
 * Converts an object of type 'CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesOutput(obj: CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'associatedRepositoryNames': obj.associatedRepositoryNames?.map(y => y),
    'errors': obj.errors?.map(y => toJson_CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitBatchDescribeMergeConflictsInput
 */
export interface CodeCommitBatchDescribeMergeConflictsInput {
  /**
   * @schema CodeCommitBatchDescribeMergeConflictsInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CodeCommitBatchDescribeMergeConflictsInput#destinationCommitSpecifier
   */
  readonly destinationCommitSpecifier: string;

  /**
   * @schema CodeCommitBatchDescribeMergeConflictsInput#sourceCommitSpecifier
   */
  readonly sourceCommitSpecifier: string;

  /**
   * @schema CodeCommitBatchDescribeMergeConflictsInput#mergeOption
   */
  readonly mergeOption: string;

  /**
   * @schema CodeCommitBatchDescribeMergeConflictsInput#maxMergeHunks
   */
  readonly maxMergeHunks?: number;

  /**
   * @schema CodeCommitBatchDescribeMergeConflictsInput#maxConflictFiles
   */
  readonly maxConflictFiles?: number;

  /**
   * @schema CodeCommitBatchDescribeMergeConflictsInput#filePaths
   */
  readonly filePaths?: string[];

  /**
   * @schema CodeCommitBatchDescribeMergeConflictsInput#conflictDetailLevel
   */
  readonly conflictDetailLevel?: string;

  /**
   * @schema CodeCommitBatchDescribeMergeConflictsInput#conflictResolutionStrategy
   */
  readonly conflictResolutionStrategy?: string;

  /**
   * @schema CodeCommitBatchDescribeMergeConflictsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeCommitBatchDescribeMergeConflictsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitBatchDescribeMergeConflictsInput(obj: CodeCommitBatchDescribeMergeConflictsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'destinationCommitSpecifier': obj.destinationCommitSpecifier,
    'sourceCommitSpecifier': obj.sourceCommitSpecifier,
    'mergeOption': obj.mergeOption,
    'maxMergeHunks': obj.maxMergeHunks,
    'maxConflictFiles': obj.maxConflictFiles,
    'filePaths': obj.filePaths?.map(y => y),
    'conflictDetailLevel': obj.conflictDetailLevel,
    'conflictResolutionStrategy': obj.conflictResolutionStrategy,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitBatchDescribeMergeConflictsOutput
 */
export interface CodeCommitBatchDescribeMergeConflictsOutput {
  /**
   * @schema CodeCommitBatchDescribeMergeConflictsOutput#conflicts
   */
  readonly conflicts: CodeCommitConflict[];

  /**
   * @schema CodeCommitBatchDescribeMergeConflictsOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeCommitBatchDescribeMergeConflictsOutput#errors
   */
  readonly errors?: CodeCommitBatchDescribeMergeConflictsError[];

  /**
   * @schema CodeCommitBatchDescribeMergeConflictsOutput#destinationCommitId
   */
  readonly destinationCommitId: string;

  /**
   * @schema CodeCommitBatchDescribeMergeConflictsOutput#sourceCommitId
   */
  readonly sourceCommitId: string;

  /**
   * @schema CodeCommitBatchDescribeMergeConflictsOutput#baseCommitId
   */
  readonly baseCommitId?: string;

}

/**
 * Converts an object of type 'CodeCommitBatchDescribeMergeConflictsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitBatchDescribeMergeConflictsOutput(obj: CodeCommitBatchDescribeMergeConflictsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'conflicts': obj.conflicts?.map(y => toJson_CodeCommitConflict(y)),
    'nextToken': obj.nextToken,
    'errors': obj.errors?.map(y => toJson_CodeCommitBatchDescribeMergeConflictsError(y)),
    'destinationCommitId': obj.destinationCommitId,
    'sourceCommitId': obj.sourceCommitId,
    'baseCommitId': obj.baseCommitId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesInput
 */
export interface CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesInput {
  /**
   * @schema CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesInput#approvalRuleTemplateName
   */
  readonly approvalRuleTemplateName: string;

  /**
   * @schema CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesInput#repositoryNames
   */
  readonly repositoryNames: string[];

}

/**
 * Converts an object of type 'CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesInput(obj: CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'approvalRuleTemplateName': obj.approvalRuleTemplateName,
    'repositoryNames': obj.repositoryNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesOutput
 */
export interface CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesOutput {
  /**
   * @schema CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesOutput#disassociatedRepositoryNames
   */
  readonly disassociatedRepositoryNames: string[];

  /**
   * @schema CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesOutput#errors
   */
  readonly errors: CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesError[];

}

/**
 * Converts an object of type 'CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesOutput(obj: CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'disassociatedRepositoryNames': obj.disassociatedRepositoryNames?.map(y => y),
    'errors': obj.errors?.map(y => toJson_CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitBatchGetCommitsInput
 */
export interface CodeCommitBatchGetCommitsInput {
  /**
   * @schema CodeCommitBatchGetCommitsInput#commitIds
   */
  readonly commitIds: string[];

  /**
   * @schema CodeCommitBatchGetCommitsInput#repositoryName
   */
  readonly repositoryName: string;

}

/**
 * Converts an object of type 'CodeCommitBatchGetCommitsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitBatchGetCommitsInput(obj: CodeCommitBatchGetCommitsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'commitIds': obj.commitIds?.map(y => y),
    'repositoryName': obj.repositoryName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitBatchGetCommitsOutput
 */
export interface CodeCommitBatchGetCommitsOutput {
  /**
   * @schema CodeCommitBatchGetCommitsOutput#commits
   */
  readonly commits?: CodeCommitCommit[];

  /**
   * @schema CodeCommitBatchGetCommitsOutput#errors
   */
  readonly errors?: CodeCommitBatchGetCommitsError[];

}

/**
 * Converts an object of type 'CodeCommitBatchGetCommitsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitBatchGetCommitsOutput(obj: CodeCommitBatchGetCommitsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'commits': obj.commits?.map(y => toJson_CodeCommitCommit(y)),
    'errors': obj.errors?.map(y => toJson_CodeCommitBatchGetCommitsError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitBatchGetRepositoriesInput
 */
export interface CodeCommitBatchGetRepositoriesInput {
  /**
   * @schema CodeCommitBatchGetRepositoriesInput#repositoryNames
   */
  readonly repositoryNames: string[];

}

/**
 * Converts an object of type 'CodeCommitBatchGetRepositoriesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitBatchGetRepositoriesInput(obj: CodeCommitBatchGetRepositoriesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryNames': obj.repositoryNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitBatchGetRepositoriesOutput
 */
export interface CodeCommitBatchGetRepositoriesOutput {
  /**
   * @schema CodeCommitBatchGetRepositoriesOutput#repositories
   */
  readonly repositories?: CodeCommitRepositoryMetadata[];

  /**
   * @schema CodeCommitBatchGetRepositoriesOutput#repositoriesNotFound
   */
  readonly repositoriesNotFound?: string[];

}

/**
 * Converts an object of type 'CodeCommitBatchGetRepositoriesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitBatchGetRepositoriesOutput(obj: CodeCommitBatchGetRepositoriesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositories': obj.repositories?.map(y => toJson_CodeCommitRepositoryMetadata(y)),
    'repositoriesNotFound': obj.repositoriesNotFound?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitCreateApprovalRuleTemplateInput
 */
export interface CodeCommitCreateApprovalRuleTemplateInput {
  /**
   * @schema CodeCommitCreateApprovalRuleTemplateInput#approvalRuleTemplateName
   */
  readonly approvalRuleTemplateName: string;

  /**
   * @schema CodeCommitCreateApprovalRuleTemplateInput#approvalRuleTemplateContent
   */
  readonly approvalRuleTemplateContent: string;

  /**
   * @schema CodeCommitCreateApprovalRuleTemplateInput#approvalRuleTemplateDescription
   */
  readonly approvalRuleTemplateDescription?: string;

}

/**
 * Converts an object of type 'CodeCommitCreateApprovalRuleTemplateInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitCreateApprovalRuleTemplateInput(obj: CodeCommitCreateApprovalRuleTemplateInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'approvalRuleTemplateName': obj.approvalRuleTemplateName,
    'approvalRuleTemplateContent': obj.approvalRuleTemplateContent,
    'approvalRuleTemplateDescription': obj.approvalRuleTemplateDescription,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitCreateApprovalRuleTemplateOutput
 */
export interface CodeCommitCreateApprovalRuleTemplateOutput {
  /**
   * @schema CodeCommitCreateApprovalRuleTemplateOutput#approvalRuleTemplate
   */
  readonly approvalRuleTemplate: CodeCommitApprovalRuleTemplate;

}

/**
 * Converts an object of type 'CodeCommitCreateApprovalRuleTemplateOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitCreateApprovalRuleTemplateOutput(obj: CodeCommitCreateApprovalRuleTemplateOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'approvalRuleTemplate': toJson_CodeCommitApprovalRuleTemplate(obj.approvalRuleTemplate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitCreateBranchInput
 */
export interface CodeCommitCreateBranchInput {
  /**
   * @schema CodeCommitCreateBranchInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CodeCommitCreateBranchInput#branchName
   */
  readonly branchName: string;

  /**
   * @schema CodeCommitCreateBranchInput#commitId
   */
  readonly commitId: string;

}

/**
 * Converts an object of type 'CodeCommitCreateBranchInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitCreateBranchInput(obj: CodeCommitCreateBranchInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'branchName': obj.branchName,
    'commitId': obj.commitId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitCreateCommitInput
 */
export interface CodeCommitCreateCommitInput {
  /**
   * @schema CodeCommitCreateCommitInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CodeCommitCreateCommitInput#branchName
   */
  readonly branchName: string;

  /**
   * @schema CodeCommitCreateCommitInput#parentCommitId
   */
  readonly parentCommitId?: string;

  /**
   * @schema CodeCommitCreateCommitInput#authorName
   */
  readonly authorName?: string;

  /**
   * @schema CodeCommitCreateCommitInput#email
   */
  readonly email?: string;

  /**
   * @schema CodeCommitCreateCommitInput#commitMessage
   */
  readonly commitMessage?: string;

  /**
   * @schema CodeCommitCreateCommitInput#keepEmptyFolders
   */
  readonly keepEmptyFolders?: boolean;

  /**
   * @schema CodeCommitCreateCommitInput#putFiles
   */
  readonly putFiles?: CodeCommitPutFileEntry[];

  /**
   * @schema CodeCommitCreateCommitInput#deleteFiles
   */
  readonly deleteFiles?: CodeCommitDeleteFileEntry[];

  /**
   * @schema CodeCommitCreateCommitInput#setFileModes
   */
  readonly setFileModes?: CodeCommitSetFileModeEntry[];

}

/**
 * Converts an object of type 'CodeCommitCreateCommitInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitCreateCommitInput(obj: CodeCommitCreateCommitInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'branchName': obj.branchName,
    'parentCommitId': obj.parentCommitId,
    'authorName': obj.authorName,
    'email': obj.email,
    'commitMessage': obj.commitMessage,
    'keepEmptyFolders': obj.keepEmptyFolders,
    'putFiles': obj.putFiles?.map(y => toJson_CodeCommitPutFileEntry(y)),
    'deleteFiles': obj.deleteFiles?.map(y => toJson_CodeCommitDeleteFileEntry(y)),
    'setFileModes': obj.setFileModes?.map(y => toJson_CodeCommitSetFileModeEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitCreateCommitOutput
 */
export interface CodeCommitCreateCommitOutput {
  /**
   * @schema CodeCommitCreateCommitOutput#commitId
   */
  readonly commitId?: string;

  /**
   * @schema CodeCommitCreateCommitOutput#treeId
   */
  readonly treeId?: string;

  /**
   * @schema CodeCommitCreateCommitOutput#filesAdded
   */
  readonly filesAdded?: CodeCommitFileMetadata[];

  /**
   * @schema CodeCommitCreateCommitOutput#filesUpdated
   */
  readonly filesUpdated?: CodeCommitFileMetadata[];

  /**
   * @schema CodeCommitCreateCommitOutput#filesDeleted
   */
  readonly filesDeleted?: CodeCommitFileMetadata[];

}

/**
 * Converts an object of type 'CodeCommitCreateCommitOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitCreateCommitOutput(obj: CodeCommitCreateCommitOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'commitId': obj.commitId,
    'treeId': obj.treeId,
    'filesAdded': obj.filesAdded?.map(y => toJson_CodeCommitFileMetadata(y)),
    'filesUpdated': obj.filesUpdated?.map(y => toJson_CodeCommitFileMetadata(y)),
    'filesDeleted': obj.filesDeleted?.map(y => toJson_CodeCommitFileMetadata(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitCreatePullRequestInput
 */
export interface CodeCommitCreatePullRequestInput {
  /**
   * @schema CodeCommitCreatePullRequestInput#title
   */
  readonly title: string;

  /**
   * @schema CodeCommitCreatePullRequestInput#description
   */
  readonly description?: string;

  /**
   * @schema CodeCommitCreatePullRequestInput#targets
   */
  readonly targets: CodeCommitTarget[];

  /**
   * @schema CodeCommitCreatePullRequestInput#clientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'CodeCommitCreatePullRequestInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitCreatePullRequestInput(obj: CodeCommitCreatePullRequestInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'title': obj.title,
    'description': obj.description,
    'targets': obj.targets?.map(y => toJson_CodeCommitTarget(y)),
    'clientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitCreatePullRequestOutput
 */
export interface CodeCommitCreatePullRequestOutput {
  /**
   * @schema CodeCommitCreatePullRequestOutput#pullRequest
   */
  readonly pullRequest: CodeCommitPullRequest;

}

/**
 * Converts an object of type 'CodeCommitCreatePullRequestOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitCreatePullRequestOutput(obj: CodeCommitCreatePullRequestOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pullRequest': toJson_CodeCommitPullRequest(obj.pullRequest),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitCreatePullRequestApprovalRuleInput
 */
export interface CodeCommitCreatePullRequestApprovalRuleInput {
  /**
   * @schema CodeCommitCreatePullRequestApprovalRuleInput#pullRequestId
   */
  readonly pullRequestId: string;

  /**
   * @schema CodeCommitCreatePullRequestApprovalRuleInput#approvalRuleName
   */
  readonly approvalRuleName: string;

  /**
   * @schema CodeCommitCreatePullRequestApprovalRuleInput#approvalRuleContent
   */
  readonly approvalRuleContent: string;

}

/**
 * Converts an object of type 'CodeCommitCreatePullRequestApprovalRuleInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitCreatePullRequestApprovalRuleInput(obj: CodeCommitCreatePullRequestApprovalRuleInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pullRequestId': obj.pullRequestId,
    'approvalRuleName': obj.approvalRuleName,
    'approvalRuleContent': obj.approvalRuleContent,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitCreatePullRequestApprovalRuleOutput
 */
export interface CodeCommitCreatePullRequestApprovalRuleOutput {
  /**
   * @schema CodeCommitCreatePullRequestApprovalRuleOutput#approvalRule
   */
  readonly approvalRule: CodeCommitApprovalRule;

}

/**
 * Converts an object of type 'CodeCommitCreatePullRequestApprovalRuleOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitCreatePullRequestApprovalRuleOutput(obj: CodeCommitCreatePullRequestApprovalRuleOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'approvalRule': toJson_CodeCommitApprovalRule(obj.approvalRule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitCreateRepositoryInput
 */
export interface CodeCommitCreateRepositoryInput {
  /**
   * @schema CodeCommitCreateRepositoryInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CodeCommitCreateRepositoryInput#repositoryDescription
   */
  readonly repositoryDescription?: string;

  /**
   * @schema CodeCommitCreateRepositoryInput#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CodeCommitCreateRepositoryInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitCreateRepositoryInput(obj: CodeCommitCreateRepositoryInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'repositoryDescription': obj.repositoryDescription,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitCreateRepositoryOutput
 */
export interface CodeCommitCreateRepositoryOutput {
  /**
   * @schema CodeCommitCreateRepositoryOutput#repositoryMetadata
   */
  readonly repositoryMetadata?: CodeCommitRepositoryMetadata;

}

/**
 * Converts an object of type 'CodeCommitCreateRepositoryOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitCreateRepositoryOutput(obj: CodeCommitCreateRepositoryOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryMetadata': toJson_CodeCommitRepositoryMetadata(obj.repositoryMetadata),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitCreateUnreferencedMergeCommitInput
 */
export interface CodeCommitCreateUnreferencedMergeCommitInput {
  /**
   * @schema CodeCommitCreateUnreferencedMergeCommitInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CodeCommitCreateUnreferencedMergeCommitInput#sourceCommitSpecifier
   */
  readonly sourceCommitSpecifier: string;

  /**
   * @schema CodeCommitCreateUnreferencedMergeCommitInput#destinationCommitSpecifier
   */
  readonly destinationCommitSpecifier: string;

  /**
   * @schema CodeCommitCreateUnreferencedMergeCommitInput#mergeOption
   */
  readonly mergeOption: string;

  /**
   * @schema CodeCommitCreateUnreferencedMergeCommitInput#conflictDetailLevel
   */
  readonly conflictDetailLevel?: string;

  /**
   * @schema CodeCommitCreateUnreferencedMergeCommitInput#conflictResolutionStrategy
   */
  readonly conflictResolutionStrategy?: string;

  /**
   * @schema CodeCommitCreateUnreferencedMergeCommitInput#authorName
   */
  readonly authorName?: string;

  /**
   * @schema CodeCommitCreateUnreferencedMergeCommitInput#email
   */
  readonly email?: string;

  /**
   * @schema CodeCommitCreateUnreferencedMergeCommitInput#commitMessage
   */
  readonly commitMessage?: string;

  /**
   * @schema CodeCommitCreateUnreferencedMergeCommitInput#keepEmptyFolders
   */
  readonly keepEmptyFolders?: boolean;

  /**
   * @schema CodeCommitCreateUnreferencedMergeCommitInput#conflictResolution
   */
  readonly conflictResolution?: CodeCommitConflictResolution;

}

/**
 * Converts an object of type 'CodeCommitCreateUnreferencedMergeCommitInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitCreateUnreferencedMergeCommitInput(obj: CodeCommitCreateUnreferencedMergeCommitInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'sourceCommitSpecifier': obj.sourceCommitSpecifier,
    'destinationCommitSpecifier': obj.destinationCommitSpecifier,
    'mergeOption': obj.mergeOption,
    'conflictDetailLevel': obj.conflictDetailLevel,
    'conflictResolutionStrategy': obj.conflictResolutionStrategy,
    'authorName': obj.authorName,
    'email': obj.email,
    'commitMessage': obj.commitMessage,
    'keepEmptyFolders': obj.keepEmptyFolders,
    'conflictResolution': toJson_CodeCommitConflictResolution(obj.conflictResolution),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitCreateUnreferencedMergeCommitOutput
 */
export interface CodeCommitCreateUnreferencedMergeCommitOutput {
  /**
   * @schema CodeCommitCreateUnreferencedMergeCommitOutput#commitId
   */
  readonly commitId?: string;

  /**
   * @schema CodeCommitCreateUnreferencedMergeCommitOutput#treeId
   */
  readonly treeId?: string;

}

/**
 * Converts an object of type 'CodeCommitCreateUnreferencedMergeCommitOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitCreateUnreferencedMergeCommitOutput(obj: CodeCommitCreateUnreferencedMergeCommitOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'commitId': obj.commitId,
    'treeId': obj.treeId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitDeleteApprovalRuleTemplateInput
 */
export interface CodeCommitDeleteApprovalRuleTemplateInput {
  /**
   * @schema CodeCommitDeleteApprovalRuleTemplateInput#approvalRuleTemplateName
   */
  readonly approvalRuleTemplateName: string;

}

/**
 * Converts an object of type 'CodeCommitDeleteApprovalRuleTemplateInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitDeleteApprovalRuleTemplateInput(obj: CodeCommitDeleteApprovalRuleTemplateInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'approvalRuleTemplateName': obj.approvalRuleTemplateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitDeleteApprovalRuleTemplateOutput
 */
export interface CodeCommitDeleteApprovalRuleTemplateOutput {
  /**
   * @schema CodeCommitDeleteApprovalRuleTemplateOutput#approvalRuleTemplateId
   */
  readonly approvalRuleTemplateId: string;

}

/**
 * Converts an object of type 'CodeCommitDeleteApprovalRuleTemplateOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitDeleteApprovalRuleTemplateOutput(obj: CodeCommitDeleteApprovalRuleTemplateOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'approvalRuleTemplateId': obj.approvalRuleTemplateId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitDeleteBranchInput
 */
export interface CodeCommitDeleteBranchInput {
  /**
   * @schema CodeCommitDeleteBranchInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CodeCommitDeleteBranchInput#branchName
   */
  readonly branchName: string;

}

/**
 * Converts an object of type 'CodeCommitDeleteBranchInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitDeleteBranchInput(obj: CodeCommitDeleteBranchInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'branchName': obj.branchName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitDeleteBranchOutput
 */
export interface CodeCommitDeleteBranchOutput {
  /**
   * @schema CodeCommitDeleteBranchOutput#deletedBranch
   */
  readonly deletedBranch?: CodeCommitBranchInfo;

}

/**
 * Converts an object of type 'CodeCommitDeleteBranchOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitDeleteBranchOutput(obj: CodeCommitDeleteBranchOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deletedBranch': toJson_CodeCommitBranchInfo(obj.deletedBranch),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitDeleteCommentContentInput
 */
export interface CodeCommitDeleteCommentContentInput {
  /**
   * @schema CodeCommitDeleteCommentContentInput#commentId
   */
  readonly commentId: string;

}

/**
 * Converts an object of type 'CodeCommitDeleteCommentContentInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitDeleteCommentContentInput(obj: CodeCommitDeleteCommentContentInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'commentId': obj.commentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitDeleteCommentContentOutput
 */
export interface CodeCommitDeleteCommentContentOutput {
  /**
   * @schema CodeCommitDeleteCommentContentOutput#comment
   */
  readonly comment?: CodeCommitComment;

}

/**
 * Converts an object of type 'CodeCommitDeleteCommentContentOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitDeleteCommentContentOutput(obj: CodeCommitDeleteCommentContentOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'comment': toJson_CodeCommitComment(obj.comment),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitDeleteFileInput
 */
export interface CodeCommitDeleteFileInput {
  /**
   * @schema CodeCommitDeleteFileInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CodeCommitDeleteFileInput#branchName
   */
  readonly branchName: string;

  /**
   * @schema CodeCommitDeleteFileInput#filePath
   */
  readonly filePath: string;

  /**
   * @schema CodeCommitDeleteFileInput#parentCommitId
   */
  readonly parentCommitId: string;

  /**
   * @schema CodeCommitDeleteFileInput#keepEmptyFolders
   */
  readonly keepEmptyFolders?: boolean;

  /**
   * @schema CodeCommitDeleteFileInput#commitMessage
   */
  readonly commitMessage?: string;

  /**
   * @schema CodeCommitDeleteFileInput#name
   */
  readonly name?: string;

  /**
   * @schema CodeCommitDeleteFileInput#email
   */
  readonly email?: string;

}

/**
 * Converts an object of type 'CodeCommitDeleteFileInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitDeleteFileInput(obj: CodeCommitDeleteFileInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'branchName': obj.branchName,
    'filePath': obj.filePath,
    'parentCommitId': obj.parentCommitId,
    'keepEmptyFolders': obj.keepEmptyFolders,
    'commitMessage': obj.commitMessage,
    'name': obj.name,
    'email': obj.email,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitDeleteFileOutput
 */
export interface CodeCommitDeleteFileOutput {
  /**
   * @schema CodeCommitDeleteFileOutput#commitId
   */
  readonly commitId: string;

  /**
   * @schema CodeCommitDeleteFileOutput#blobId
   */
  readonly blobId: string;

  /**
   * @schema CodeCommitDeleteFileOutput#treeId
   */
  readonly treeId: string;

  /**
   * @schema CodeCommitDeleteFileOutput#filePath
   */
  readonly filePath: string;

}

/**
 * Converts an object of type 'CodeCommitDeleteFileOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitDeleteFileOutput(obj: CodeCommitDeleteFileOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'commitId': obj.commitId,
    'blobId': obj.blobId,
    'treeId': obj.treeId,
    'filePath': obj.filePath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitDeletePullRequestApprovalRuleInput
 */
export interface CodeCommitDeletePullRequestApprovalRuleInput {
  /**
   * @schema CodeCommitDeletePullRequestApprovalRuleInput#pullRequestId
   */
  readonly pullRequestId: string;

  /**
   * @schema CodeCommitDeletePullRequestApprovalRuleInput#approvalRuleName
   */
  readonly approvalRuleName: string;

}

/**
 * Converts an object of type 'CodeCommitDeletePullRequestApprovalRuleInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitDeletePullRequestApprovalRuleInput(obj: CodeCommitDeletePullRequestApprovalRuleInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pullRequestId': obj.pullRequestId,
    'approvalRuleName': obj.approvalRuleName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitDeletePullRequestApprovalRuleOutput
 */
export interface CodeCommitDeletePullRequestApprovalRuleOutput {
  /**
   * @schema CodeCommitDeletePullRequestApprovalRuleOutput#approvalRuleId
   */
  readonly approvalRuleId: string;

}

/**
 * Converts an object of type 'CodeCommitDeletePullRequestApprovalRuleOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitDeletePullRequestApprovalRuleOutput(obj: CodeCommitDeletePullRequestApprovalRuleOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'approvalRuleId': obj.approvalRuleId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitDeleteRepositoryInput
 */
export interface CodeCommitDeleteRepositoryInput {
  /**
   * @schema CodeCommitDeleteRepositoryInput#repositoryName
   */
  readonly repositoryName: string;

}

/**
 * Converts an object of type 'CodeCommitDeleteRepositoryInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitDeleteRepositoryInput(obj: CodeCommitDeleteRepositoryInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitDeleteRepositoryOutput
 */
export interface CodeCommitDeleteRepositoryOutput {
  /**
   * @schema CodeCommitDeleteRepositoryOutput#repositoryId
   */
  readonly repositoryId?: string;

}

/**
 * Converts an object of type 'CodeCommitDeleteRepositoryOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitDeleteRepositoryOutput(obj: CodeCommitDeleteRepositoryOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryId': obj.repositoryId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitDescribeMergeConflictsInput
 */
export interface CodeCommitDescribeMergeConflictsInput {
  /**
   * @schema CodeCommitDescribeMergeConflictsInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CodeCommitDescribeMergeConflictsInput#destinationCommitSpecifier
   */
  readonly destinationCommitSpecifier: string;

  /**
   * @schema CodeCommitDescribeMergeConflictsInput#sourceCommitSpecifier
   */
  readonly sourceCommitSpecifier: string;

  /**
   * @schema CodeCommitDescribeMergeConflictsInput#mergeOption
   */
  readonly mergeOption: string;

  /**
   * @schema CodeCommitDescribeMergeConflictsInput#maxMergeHunks
   */
  readonly maxMergeHunks?: number;

  /**
   * @schema CodeCommitDescribeMergeConflictsInput#filePath
   */
  readonly filePath: string;

  /**
   * @schema CodeCommitDescribeMergeConflictsInput#conflictDetailLevel
   */
  readonly conflictDetailLevel?: string;

  /**
   * @schema CodeCommitDescribeMergeConflictsInput#conflictResolutionStrategy
   */
  readonly conflictResolutionStrategy?: string;

  /**
   * @schema CodeCommitDescribeMergeConflictsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeCommitDescribeMergeConflictsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitDescribeMergeConflictsInput(obj: CodeCommitDescribeMergeConflictsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'destinationCommitSpecifier': obj.destinationCommitSpecifier,
    'sourceCommitSpecifier': obj.sourceCommitSpecifier,
    'mergeOption': obj.mergeOption,
    'maxMergeHunks': obj.maxMergeHunks,
    'filePath': obj.filePath,
    'conflictDetailLevel': obj.conflictDetailLevel,
    'conflictResolutionStrategy': obj.conflictResolutionStrategy,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitDescribeMergeConflictsOutput
 */
export interface CodeCommitDescribeMergeConflictsOutput {
  /**
   * @schema CodeCommitDescribeMergeConflictsOutput#conflictMetadata
   */
  readonly conflictMetadata: CodeCommitConflictMetadata;

  /**
   * @schema CodeCommitDescribeMergeConflictsOutput#mergeHunks
   */
  readonly mergeHunks: CodeCommitMergeHunk[];

  /**
   * @schema CodeCommitDescribeMergeConflictsOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeCommitDescribeMergeConflictsOutput#destinationCommitId
   */
  readonly destinationCommitId: string;

  /**
   * @schema CodeCommitDescribeMergeConflictsOutput#sourceCommitId
   */
  readonly sourceCommitId: string;

  /**
   * @schema CodeCommitDescribeMergeConflictsOutput#baseCommitId
   */
  readonly baseCommitId?: string;

}

/**
 * Converts an object of type 'CodeCommitDescribeMergeConflictsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitDescribeMergeConflictsOutput(obj: CodeCommitDescribeMergeConflictsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'conflictMetadata': toJson_CodeCommitConflictMetadata(obj.conflictMetadata),
    'mergeHunks': obj.mergeHunks?.map(y => toJson_CodeCommitMergeHunk(y)),
    'nextToken': obj.nextToken,
    'destinationCommitId': obj.destinationCommitId,
    'sourceCommitId': obj.sourceCommitId,
    'baseCommitId': obj.baseCommitId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitDescribePullRequestEventsInput
 */
export interface CodeCommitDescribePullRequestEventsInput {
  /**
   * @schema CodeCommitDescribePullRequestEventsInput#pullRequestId
   */
  readonly pullRequestId: string;

  /**
   * @schema CodeCommitDescribePullRequestEventsInput#pullRequestEventType
   */
  readonly pullRequestEventType?: string;

  /**
   * @schema CodeCommitDescribePullRequestEventsInput#actorArn
   */
  readonly actorArn?: string;

  /**
   * @schema CodeCommitDescribePullRequestEventsInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeCommitDescribePullRequestEventsInput#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'CodeCommitDescribePullRequestEventsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitDescribePullRequestEventsInput(obj: CodeCommitDescribePullRequestEventsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pullRequestId': obj.pullRequestId,
    'pullRequestEventType': obj.pullRequestEventType,
    'actorArn': obj.actorArn,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitDescribePullRequestEventsOutput
 */
export interface CodeCommitDescribePullRequestEventsOutput {
  /**
   * @schema CodeCommitDescribePullRequestEventsOutput#pullRequestEvents
   */
  readonly pullRequestEvents: CodeCommitPullRequestEvent[];

  /**
   * @schema CodeCommitDescribePullRequestEventsOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeCommitDescribePullRequestEventsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitDescribePullRequestEventsOutput(obj: CodeCommitDescribePullRequestEventsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pullRequestEvents': obj.pullRequestEvents?.map(y => toJson_CodeCommitPullRequestEvent(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitDisassociateApprovalRuleTemplateFromRepositoryInput
 */
export interface CodeCommitDisassociateApprovalRuleTemplateFromRepositoryInput {
  /**
   * @schema CodeCommitDisassociateApprovalRuleTemplateFromRepositoryInput#approvalRuleTemplateName
   */
  readonly approvalRuleTemplateName: string;

  /**
   * @schema CodeCommitDisassociateApprovalRuleTemplateFromRepositoryInput#repositoryName
   */
  readonly repositoryName: string;

}

/**
 * Converts an object of type 'CodeCommitDisassociateApprovalRuleTemplateFromRepositoryInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitDisassociateApprovalRuleTemplateFromRepositoryInput(obj: CodeCommitDisassociateApprovalRuleTemplateFromRepositoryInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'approvalRuleTemplateName': obj.approvalRuleTemplateName,
    'repositoryName': obj.repositoryName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitEvaluatePullRequestApprovalRulesInput
 */
export interface CodeCommitEvaluatePullRequestApprovalRulesInput {
  /**
   * @schema CodeCommitEvaluatePullRequestApprovalRulesInput#pullRequestId
   */
  readonly pullRequestId: string;

  /**
   * @schema CodeCommitEvaluatePullRequestApprovalRulesInput#revisionId
   */
  readonly revisionId: string;

}

/**
 * Converts an object of type 'CodeCommitEvaluatePullRequestApprovalRulesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitEvaluatePullRequestApprovalRulesInput(obj: CodeCommitEvaluatePullRequestApprovalRulesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pullRequestId': obj.pullRequestId,
    'revisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitEvaluatePullRequestApprovalRulesOutput
 */
export interface CodeCommitEvaluatePullRequestApprovalRulesOutput {
  /**
   * @schema CodeCommitEvaluatePullRequestApprovalRulesOutput#evaluation
   */
  readonly evaluation: CodeCommitEvaluation;

}

/**
 * Converts an object of type 'CodeCommitEvaluatePullRequestApprovalRulesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitEvaluatePullRequestApprovalRulesOutput(obj: CodeCommitEvaluatePullRequestApprovalRulesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'evaluation': toJson_CodeCommitEvaluation(obj.evaluation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetApprovalRuleTemplateInput
 */
export interface CodeCommitGetApprovalRuleTemplateInput {
  /**
   * @schema CodeCommitGetApprovalRuleTemplateInput#approvalRuleTemplateName
   */
  readonly approvalRuleTemplateName: string;

}

/**
 * Converts an object of type 'CodeCommitGetApprovalRuleTemplateInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetApprovalRuleTemplateInput(obj: CodeCommitGetApprovalRuleTemplateInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'approvalRuleTemplateName': obj.approvalRuleTemplateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetApprovalRuleTemplateOutput
 */
export interface CodeCommitGetApprovalRuleTemplateOutput {
  /**
   * @schema CodeCommitGetApprovalRuleTemplateOutput#approvalRuleTemplate
   */
  readonly approvalRuleTemplate: CodeCommitApprovalRuleTemplate;

}

/**
 * Converts an object of type 'CodeCommitGetApprovalRuleTemplateOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetApprovalRuleTemplateOutput(obj: CodeCommitGetApprovalRuleTemplateOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'approvalRuleTemplate': toJson_CodeCommitApprovalRuleTemplate(obj.approvalRuleTemplate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetBlobInput
 */
export interface CodeCommitGetBlobInput {
  /**
   * @schema CodeCommitGetBlobInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CodeCommitGetBlobInput#blobId
   */
  readonly blobId: string;

}

/**
 * Converts an object of type 'CodeCommitGetBlobInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetBlobInput(obj: CodeCommitGetBlobInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'blobId': obj.blobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetBlobOutput
 */
export interface CodeCommitGetBlobOutput {
  /**
   * @schema CodeCommitGetBlobOutput#content
   */
  readonly content: any;

}

/**
 * Converts an object of type 'CodeCommitGetBlobOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetBlobOutput(obj: CodeCommitGetBlobOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'content': obj.content,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetBranchInput
 */
export interface CodeCommitGetBranchInput {
  /**
   * @schema CodeCommitGetBranchInput#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema CodeCommitGetBranchInput#branchName
   */
  readonly branchName?: string;

}

/**
 * Converts an object of type 'CodeCommitGetBranchInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetBranchInput(obj: CodeCommitGetBranchInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'branchName': obj.branchName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetBranchOutput
 */
export interface CodeCommitGetBranchOutput {
  /**
   * @schema CodeCommitGetBranchOutput#branch
   */
  readonly branch?: CodeCommitBranchInfo;

}

/**
 * Converts an object of type 'CodeCommitGetBranchOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetBranchOutput(obj: CodeCommitGetBranchOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'branch': toJson_CodeCommitBranchInfo(obj.branch),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetCommentInput
 */
export interface CodeCommitGetCommentInput {
  /**
   * @schema CodeCommitGetCommentInput#commentId
   */
  readonly commentId: string;

}

/**
 * Converts an object of type 'CodeCommitGetCommentInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetCommentInput(obj: CodeCommitGetCommentInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'commentId': obj.commentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetCommentOutput
 */
export interface CodeCommitGetCommentOutput {
  /**
   * @schema CodeCommitGetCommentOutput#comment
   */
  readonly comment?: CodeCommitComment;

}

/**
 * Converts an object of type 'CodeCommitGetCommentOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetCommentOutput(obj: CodeCommitGetCommentOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'comment': toJson_CodeCommitComment(obj.comment),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetCommentReactionsInput
 */
export interface CodeCommitGetCommentReactionsInput {
  /**
   * @schema CodeCommitGetCommentReactionsInput#commentId
   */
  readonly commentId: string;

  /**
   * @schema CodeCommitGetCommentReactionsInput#reactionUserArn
   */
  readonly reactionUserArn?: string;

  /**
   * @schema CodeCommitGetCommentReactionsInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeCommitGetCommentReactionsInput#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'CodeCommitGetCommentReactionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetCommentReactionsInput(obj: CodeCommitGetCommentReactionsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'commentId': obj.commentId,
    'reactionUserArn': obj.reactionUserArn,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetCommentReactionsOutput
 */
export interface CodeCommitGetCommentReactionsOutput {
  /**
   * @schema CodeCommitGetCommentReactionsOutput#reactionsForComment
   */
  readonly reactionsForComment: CodeCommitReactionForComment[];

  /**
   * @schema CodeCommitGetCommentReactionsOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeCommitGetCommentReactionsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetCommentReactionsOutput(obj: CodeCommitGetCommentReactionsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'reactionsForComment': obj.reactionsForComment?.map(y => toJson_CodeCommitReactionForComment(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetCommentsForComparedCommitInput
 */
export interface CodeCommitGetCommentsForComparedCommitInput {
  /**
   * @schema CodeCommitGetCommentsForComparedCommitInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CodeCommitGetCommentsForComparedCommitInput#beforeCommitId
   */
  readonly beforeCommitId?: string;

  /**
   * @schema CodeCommitGetCommentsForComparedCommitInput#afterCommitId
   */
  readonly afterCommitId: string;

  /**
   * @schema CodeCommitGetCommentsForComparedCommitInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeCommitGetCommentsForComparedCommitInput#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'CodeCommitGetCommentsForComparedCommitInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetCommentsForComparedCommitInput(obj: CodeCommitGetCommentsForComparedCommitInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'beforeCommitId': obj.beforeCommitId,
    'afterCommitId': obj.afterCommitId,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetCommentsForComparedCommitOutput
 */
export interface CodeCommitGetCommentsForComparedCommitOutput {
  /**
   * @schema CodeCommitGetCommentsForComparedCommitOutput#commentsForComparedCommitData
   */
  readonly commentsForComparedCommitData?: CodeCommitCommentsForComparedCommit[];

  /**
   * @schema CodeCommitGetCommentsForComparedCommitOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeCommitGetCommentsForComparedCommitOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetCommentsForComparedCommitOutput(obj: CodeCommitGetCommentsForComparedCommitOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'commentsForComparedCommitData': obj.commentsForComparedCommitData?.map(y => toJson_CodeCommitCommentsForComparedCommit(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetCommentsForPullRequestInput
 */
export interface CodeCommitGetCommentsForPullRequestInput {
  /**
   * @schema CodeCommitGetCommentsForPullRequestInput#pullRequestId
   */
  readonly pullRequestId: string;

  /**
   * @schema CodeCommitGetCommentsForPullRequestInput#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema CodeCommitGetCommentsForPullRequestInput#beforeCommitId
   */
  readonly beforeCommitId?: string;

  /**
   * @schema CodeCommitGetCommentsForPullRequestInput#afterCommitId
   */
  readonly afterCommitId?: string;

  /**
   * @schema CodeCommitGetCommentsForPullRequestInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeCommitGetCommentsForPullRequestInput#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'CodeCommitGetCommentsForPullRequestInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetCommentsForPullRequestInput(obj: CodeCommitGetCommentsForPullRequestInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pullRequestId': obj.pullRequestId,
    'repositoryName': obj.repositoryName,
    'beforeCommitId': obj.beforeCommitId,
    'afterCommitId': obj.afterCommitId,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetCommentsForPullRequestOutput
 */
export interface CodeCommitGetCommentsForPullRequestOutput {
  /**
   * @schema CodeCommitGetCommentsForPullRequestOutput#commentsForPullRequestData
   */
  readonly commentsForPullRequestData?: CodeCommitCommentsForPullRequest[];

  /**
   * @schema CodeCommitGetCommentsForPullRequestOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeCommitGetCommentsForPullRequestOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetCommentsForPullRequestOutput(obj: CodeCommitGetCommentsForPullRequestOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'commentsForPullRequestData': obj.commentsForPullRequestData?.map(y => toJson_CodeCommitCommentsForPullRequest(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetCommitInput
 */
export interface CodeCommitGetCommitInput {
  /**
   * @schema CodeCommitGetCommitInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CodeCommitGetCommitInput#commitId
   */
  readonly commitId: string;

}

/**
 * Converts an object of type 'CodeCommitGetCommitInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetCommitInput(obj: CodeCommitGetCommitInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'commitId': obj.commitId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetCommitOutput
 */
export interface CodeCommitGetCommitOutput {
  /**
   * @schema CodeCommitGetCommitOutput#commit
   */
  readonly commit: CodeCommitCommit;

}

/**
 * Converts an object of type 'CodeCommitGetCommitOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetCommitOutput(obj: CodeCommitGetCommitOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'commit': toJson_CodeCommitCommit(obj.commit),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetDifferencesInput
 */
export interface CodeCommitGetDifferencesInput {
  /**
   * @schema CodeCommitGetDifferencesInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CodeCommitGetDifferencesInput#beforeCommitSpecifier
   */
  readonly beforeCommitSpecifier?: string;

  /**
   * @schema CodeCommitGetDifferencesInput#afterCommitSpecifier
   */
  readonly afterCommitSpecifier: string;

  /**
   * @schema CodeCommitGetDifferencesInput#beforePath
   */
  readonly beforePath?: string;

  /**
   * @schema CodeCommitGetDifferencesInput#afterPath
   */
  readonly afterPath?: string;

  /**
   * @schema CodeCommitGetDifferencesInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeCommitGetDifferencesInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeCommitGetDifferencesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetDifferencesInput(obj: CodeCommitGetDifferencesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'beforeCommitSpecifier': obj.beforeCommitSpecifier,
    'afterCommitSpecifier': obj.afterCommitSpecifier,
    'beforePath': obj.beforePath,
    'afterPath': obj.afterPath,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetDifferencesOutput
 */
export interface CodeCommitGetDifferencesOutput {
  /**
   * @schema CodeCommitGetDifferencesOutput#differences
   */
  readonly differences?: CodeCommitDifference[];

  /**
   * @schema CodeCommitGetDifferencesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeCommitGetDifferencesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetDifferencesOutput(obj: CodeCommitGetDifferencesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'differences': obj.differences?.map(y => toJson_CodeCommitDifference(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetFileInput
 */
export interface CodeCommitGetFileInput {
  /**
   * @schema CodeCommitGetFileInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CodeCommitGetFileInput#commitSpecifier
   */
  readonly commitSpecifier?: string;

  /**
   * @schema CodeCommitGetFileInput#filePath
   */
  readonly filePath: string;

}

/**
 * Converts an object of type 'CodeCommitGetFileInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetFileInput(obj: CodeCommitGetFileInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'commitSpecifier': obj.commitSpecifier,
    'filePath': obj.filePath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetFileOutput
 */
export interface CodeCommitGetFileOutput {
  /**
   * @schema CodeCommitGetFileOutput#commitId
   */
  readonly commitId: string;

  /**
   * @schema CodeCommitGetFileOutput#blobId
   */
  readonly blobId: string;

  /**
   * @schema CodeCommitGetFileOutput#filePath
   */
  readonly filePath: string;

  /**
   * @schema CodeCommitGetFileOutput#fileMode
   */
  readonly fileMode: string;

  /**
   * @schema CodeCommitGetFileOutput#fileSize
   */
  readonly fileSize: number;

  /**
   * @schema CodeCommitGetFileOutput#fileContent
   */
  readonly fileContent: any;

}

/**
 * Converts an object of type 'CodeCommitGetFileOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetFileOutput(obj: CodeCommitGetFileOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'commitId': obj.commitId,
    'blobId': obj.blobId,
    'filePath': obj.filePath,
    'fileMode': obj.fileMode,
    'fileSize': obj.fileSize,
    'fileContent': obj.fileContent,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetFolderInput
 */
export interface CodeCommitGetFolderInput {
  /**
   * @schema CodeCommitGetFolderInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CodeCommitGetFolderInput#commitSpecifier
   */
  readonly commitSpecifier?: string;

  /**
   * @schema CodeCommitGetFolderInput#folderPath
   */
  readonly folderPath: string;

}

/**
 * Converts an object of type 'CodeCommitGetFolderInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetFolderInput(obj: CodeCommitGetFolderInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'commitSpecifier': obj.commitSpecifier,
    'folderPath': obj.folderPath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetFolderOutput
 */
export interface CodeCommitGetFolderOutput {
  /**
   * @schema CodeCommitGetFolderOutput#commitId
   */
  readonly commitId: string;

  /**
   * @schema CodeCommitGetFolderOutput#folderPath
   */
  readonly folderPath: string;

  /**
   * @schema CodeCommitGetFolderOutput#treeId
   */
  readonly treeId?: string;

  /**
   * @schema CodeCommitGetFolderOutput#subFolders
   */
  readonly subFolders?: CodeCommitFolder[];

  /**
   * @schema CodeCommitGetFolderOutput#files
   */
  readonly files?: CodeCommitFile[];

  /**
   * @schema CodeCommitGetFolderOutput#symbolicLinks
   */
  readonly symbolicLinks?: CodeCommitSymbolicLink[];

  /**
   * @schema CodeCommitGetFolderOutput#subModules
   */
  readonly subModules?: CodeCommitSubModule[];

}

/**
 * Converts an object of type 'CodeCommitGetFolderOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetFolderOutput(obj: CodeCommitGetFolderOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'commitId': obj.commitId,
    'folderPath': obj.folderPath,
    'treeId': obj.treeId,
    'subFolders': obj.subFolders?.map(y => toJson_CodeCommitFolder(y)),
    'files': obj.files?.map(y => toJson_CodeCommitFile(y)),
    'symbolicLinks': obj.symbolicLinks?.map(y => toJson_CodeCommitSymbolicLink(y)),
    'subModules': obj.subModules?.map(y => toJson_CodeCommitSubModule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetMergeCommitInput
 */
export interface CodeCommitGetMergeCommitInput {
  /**
   * @schema CodeCommitGetMergeCommitInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CodeCommitGetMergeCommitInput#sourceCommitSpecifier
   */
  readonly sourceCommitSpecifier: string;

  /**
   * @schema CodeCommitGetMergeCommitInput#destinationCommitSpecifier
   */
  readonly destinationCommitSpecifier: string;

  /**
   * @schema CodeCommitGetMergeCommitInput#conflictDetailLevel
   */
  readonly conflictDetailLevel?: string;

  /**
   * @schema CodeCommitGetMergeCommitInput#conflictResolutionStrategy
   */
  readonly conflictResolutionStrategy?: string;

}

/**
 * Converts an object of type 'CodeCommitGetMergeCommitInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetMergeCommitInput(obj: CodeCommitGetMergeCommitInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'sourceCommitSpecifier': obj.sourceCommitSpecifier,
    'destinationCommitSpecifier': obj.destinationCommitSpecifier,
    'conflictDetailLevel': obj.conflictDetailLevel,
    'conflictResolutionStrategy': obj.conflictResolutionStrategy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetMergeCommitOutput
 */
export interface CodeCommitGetMergeCommitOutput {
  /**
   * @schema CodeCommitGetMergeCommitOutput#sourceCommitId
   */
  readonly sourceCommitId?: string;

  /**
   * @schema CodeCommitGetMergeCommitOutput#destinationCommitId
   */
  readonly destinationCommitId?: string;

  /**
   * @schema CodeCommitGetMergeCommitOutput#baseCommitId
   */
  readonly baseCommitId?: string;

  /**
   * @schema CodeCommitGetMergeCommitOutput#mergedCommitId
   */
  readonly mergedCommitId?: string;

}

/**
 * Converts an object of type 'CodeCommitGetMergeCommitOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetMergeCommitOutput(obj: CodeCommitGetMergeCommitOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sourceCommitId': obj.sourceCommitId,
    'destinationCommitId': obj.destinationCommitId,
    'baseCommitId': obj.baseCommitId,
    'mergedCommitId': obj.mergedCommitId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetMergeConflictsInput
 */
export interface CodeCommitGetMergeConflictsInput {
  /**
   * @schema CodeCommitGetMergeConflictsInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CodeCommitGetMergeConflictsInput#destinationCommitSpecifier
   */
  readonly destinationCommitSpecifier: string;

  /**
   * @schema CodeCommitGetMergeConflictsInput#sourceCommitSpecifier
   */
  readonly sourceCommitSpecifier: string;

  /**
   * @schema CodeCommitGetMergeConflictsInput#mergeOption
   */
  readonly mergeOption: string;

  /**
   * @schema CodeCommitGetMergeConflictsInput#conflictDetailLevel
   */
  readonly conflictDetailLevel?: string;

  /**
   * @schema CodeCommitGetMergeConflictsInput#maxConflictFiles
   */
  readonly maxConflictFiles?: number;

  /**
   * @schema CodeCommitGetMergeConflictsInput#conflictResolutionStrategy
   */
  readonly conflictResolutionStrategy?: string;

  /**
   * @schema CodeCommitGetMergeConflictsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeCommitGetMergeConflictsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetMergeConflictsInput(obj: CodeCommitGetMergeConflictsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'destinationCommitSpecifier': obj.destinationCommitSpecifier,
    'sourceCommitSpecifier': obj.sourceCommitSpecifier,
    'mergeOption': obj.mergeOption,
    'conflictDetailLevel': obj.conflictDetailLevel,
    'maxConflictFiles': obj.maxConflictFiles,
    'conflictResolutionStrategy': obj.conflictResolutionStrategy,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetMergeConflictsOutput
 */
export interface CodeCommitGetMergeConflictsOutput {
  /**
   * @schema CodeCommitGetMergeConflictsOutput#mergeable
   */
  readonly mergeable: boolean;

  /**
   * @schema CodeCommitGetMergeConflictsOutput#destinationCommitId
   */
  readonly destinationCommitId: string;

  /**
   * @schema CodeCommitGetMergeConflictsOutput#sourceCommitId
   */
  readonly sourceCommitId: string;

  /**
   * @schema CodeCommitGetMergeConflictsOutput#baseCommitId
   */
  readonly baseCommitId?: string;

  /**
   * @schema CodeCommitGetMergeConflictsOutput#conflictMetadataList
   */
  readonly conflictMetadataList: CodeCommitConflictMetadata[];

  /**
   * @schema CodeCommitGetMergeConflictsOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeCommitGetMergeConflictsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetMergeConflictsOutput(obj: CodeCommitGetMergeConflictsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'mergeable': obj.mergeable,
    'destinationCommitId': obj.destinationCommitId,
    'sourceCommitId': obj.sourceCommitId,
    'baseCommitId': obj.baseCommitId,
    'conflictMetadataList': obj.conflictMetadataList?.map(y => toJson_CodeCommitConflictMetadata(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetMergeOptionsInput
 */
export interface CodeCommitGetMergeOptionsInput {
  /**
   * @schema CodeCommitGetMergeOptionsInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CodeCommitGetMergeOptionsInput#sourceCommitSpecifier
   */
  readonly sourceCommitSpecifier: string;

  /**
   * @schema CodeCommitGetMergeOptionsInput#destinationCommitSpecifier
   */
  readonly destinationCommitSpecifier: string;

  /**
   * @schema CodeCommitGetMergeOptionsInput#conflictDetailLevel
   */
  readonly conflictDetailLevel?: string;

  /**
   * @schema CodeCommitGetMergeOptionsInput#conflictResolutionStrategy
   */
  readonly conflictResolutionStrategy?: string;

}

/**
 * Converts an object of type 'CodeCommitGetMergeOptionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetMergeOptionsInput(obj: CodeCommitGetMergeOptionsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'sourceCommitSpecifier': obj.sourceCommitSpecifier,
    'destinationCommitSpecifier': obj.destinationCommitSpecifier,
    'conflictDetailLevel': obj.conflictDetailLevel,
    'conflictResolutionStrategy': obj.conflictResolutionStrategy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetMergeOptionsOutput
 */
export interface CodeCommitGetMergeOptionsOutput {
  /**
   * @schema CodeCommitGetMergeOptionsOutput#mergeOptions
   */
  readonly mergeOptions: string[];

  /**
   * @schema CodeCommitGetMergeOptionsOutput#sourceCommitId
   */
  readonly sourceCommitId: string;

  /**
   * @schema CodeCommitGetMergeOptionsOutput#destinationCommitId
   */
  readonly destinationCommitId: string;

  /**
   * @schema CodeCommitGetMergeOptionsOutput#baseCommitId
   */
  readonly baseCommitId: string;

}

/**
 * Converts an object of type 'CodeCommitGetMergeOptionsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetMergeOptionsOutput(obj: CodeCommitGetMergeOptionsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'mergeOptions': obj.mergeOptions?.map(y => y),
    'sourceCommitId': obj.sourceCommitId,
    'destinationCommitId': obj.destinationCommitId,
    'baseCommitId': obj.baseCommitId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetPullRequestInput
 */
export interface CodeCommitGetPullRequestInput {
  /**
   * @schema CodeCommitGetPullRequestInput#pullRequestId
   */
  readonly pullRequestId: string;

}

/**
 * Converts an object of type 'CodeCommitGetPullRequestInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetPullRequestInput(obj: CodeCommitGetPullRequestInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pullRequestId': obj.pullRequestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetPullRequestOutput
 */
export interface CodeCommitGetPullRequestOutput {
  /**
   * @schema CodeCommitGetPullRequestOutput#pullRequest
   */
  readonly pullRequest: CodeCommitPullRequest;

}

/**
 * Converts an object of type 'CodeCommitGetPullRequestOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetPullRequestOutput(obj: CodeCommitGetPullRequestOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pullRequest': toJson_CodeCommitPullRequest(obj.pullRequest),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetPullRequestApprovalStatesInput
 */
export interface CodeCommitGetPullRequestApprovalStatesInput {
  /**
   * @schema CodeCommitGetPullRequestApprovalStatesInput#pullRequestId
   */
  readonly pullRequestId: string;

  /**
   * @schema CodeCommitGetPullRequestApprovalStatesInput#revisionId
   */
  readonly revisionId: string;

}

/**
 * Converts an object of type 'CodeCommitGetPullRequestApprovalStatesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetPullRequestApprovalStatesInput(obj: CodeCommitGetPullRequestApprovalStatesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pullRequestId': obj.pullRequestId,
    'revisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetPullRequestApprovalStatesOutput
 */
export interface CodeCommitGetPullRequestApprovalStatesOutput {
  /**
   * @schema CodeCommitGetPullRequestApprovalStatesOutput#approvals
   */
  readonly approvals?: CodeCommitApproval[];

}

/**
 * Converts an object of type 'CodeCommitGetPullRequestApprovalStatesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetPullRequestApprovalStatesOutput(obj: CodeCommitGetPullRequestApprovalStatesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'approvals': obj.approvals?.map(y => toJson_CodeCommitApproval(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetPullRequestOverrideStateInput
 */
export interface CodeCommitGetPullRequestOverrideStateInput {
  /**
   * @schema CodeCommitGetPullRequestOverrideStateInput#pullRequestId
   */
  readonly pullRequestId: string;

  /**
   * @schema CodeCommitGetPullRequestOverrideStateInput#revisionId
   */
  readonly revisionId: string;

}

/**
 * Converts an object of type 'CodeCommitGetPullRequestOverrideStateInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetPullRequestOverrideStateInput(obj: CodeCommitGetPullRequestOverrideStateInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pullRequestId': obj.pullRequestId,
    'revisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetPullRequestOverrideStateOutput
 */
export interface CodeCommitGetPullRequestOverrideStateOutput {
  /**
   * @schema CodeCommitGetPullRequestOverrideStateOutput#overridden
   */
  readonly overridden?: boolean;

  /**
   * @schema CodeCommitGetPullRequestOverrideStateOutput#overrider
   */
  readonly overrider?: string;

}

/**
 * Converts an object of type 'CodeCommitGetPullRequestOverrideStateOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetPullRequestOverrideStateOutput(obj: CodeCommitGetPullRequestOverrideStateOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'overridden': obj.overridden,
    'overrider': obj.overrider,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetRepositoryInput
 */
export interface CodeCommitGetRepositoryInput {
  /**
   * @schema CodeCommitGetRepositoryInput#repositoryName
   */
  readonly repositoryName: string;

}

/**
 * Converts an object of type 'CodeCommitGetRepositoryInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetRepositoryInput(obj: CodeCommitGetRepositoryInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetRepositoryOutput
 */
export interface CodeCommitGetRepositoryOutput {
  /**
   * @schema CodeCommitGetRepositoryOutput#repositoryMetadata
   */
  readonly repositoryMetadata?: CodeCommitRepositoryMetadata;

}

/**
 * Converts an object of type 'CodeCommitGetRepositoryOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetRepositoryOutput(obj: CodeCommitGetRepositoryOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryMetadata': toJson_CodeCommitRepositoryMetadata(obj.repositoryMetadata),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetRepositoryTriggersInput
 */
export interface CodeCommitGetRepositoryTriggersInput {
  /**
   * @schema CodeCommitGetRepositoryTriggersInput#repositoryName
   */
  readonly repositoryName: string;

}

/**
 * Converts an object of type 'CodeCommitGetRepositoryTriggersInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetRepositoryTriggersInput(obj: CodeCommitGetRepositoryTriggersInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitGetRepositoryTriggersOutput
 */
export interface CodeCommitGetRepositoryTriggersOutput {
  /**
   * @schema CodeCommitGetRepositoryTriggersOutput#configurationId
   */
  readonly configurationId?: string;

  /**
   * @schema CodeCommitGetRepositoryTriggersOutput#triggers
   */
  readonly triggers?: CodeCommitRepositoryTrigger[];

}

/**
 * Converts an object of type 'CodeCommitGetRepositoryTriggersOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitGetRepositoryTriggersOutput(obj: CodeCommitGetRepositoryTriggersOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configurationId': obj.configurationId,
    'triggers': obj.triggers?.map(y => toJson_CodeCommitRepositoryTrigger(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitListApprovalRuleTemplatesInput
 */
export interface CodeCommitListApprovalRuleTemplatesInput {
  /**
   * @schema CodeCommitListApprovalRuleTemplatesInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeCommitListApprovalRuleTemplatesInput#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'CodeCommitListApprovalRuleTemplatesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitListApprovalRuleTemplatesInput(obj: CodeCommitListApprovalRuleTemplatesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitListApprovalRuleTemplatesOutput
 */
export interface CodeCommitListApprovalRuleTemplatesOutput {
  /**
   * @schema CodeCommitListApprovalRuleTemplatesOutput#approvalRuleTemplateNames
   */
  readonly approvalRuleTemplateNames?: string[];

  /**
   * @schema CodeCommitListApprovalRuleTemplatesOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeCommitListApprovalRuleTemplatesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitListApprovalRuleTemplatesOutput(obj: CodeCommitListApprovalRuleTemplatesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'approvalRuleTemplateNames': obj.approvalRuleTemplateNames?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryInput
 */
export interface CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryInput {
  /**
   * @schema CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryInput#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryInput(obj: CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryOutput
 */
export interface CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryOutput {
  /**
   * @schema CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryOutput#approvalRuleTemplateNames
   */
  readonly approvalRuleTemplateNames?: string[];

  /**
   * @schema CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryOutput(obj: CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'approvalRuleTemplateNames': obj.approvalRuleTemplateNames?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitListBranchesInput
 */
export interface CodeCommitListBranchesInput {
  /**
   * @schema CodeCommitListBranchesInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CodeCommitListBranchesInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeCommitListBranchesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitListBranchesInput(obj: CodeCommitListBranchesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitListBranchesOutput
 */
export interface CodeCommitListBranchesOutput {
  /**
   * @schema CodeCommitListBranchesOutput#branches
   */
  readonly branches?: string[];

  /**
   * @schema CodeCommitListBranchesOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeCommitListBranchesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitListBranchesOutput(obj: CodeCommitListBranchesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'branches': obj.branches?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitListPullRequestsInput
 */
export interface CodeCommitListPullRequestsInput {
  /**
   * @schema CodeCommitListPullRequestsInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CodeCommitListPullRequestsInput#authorArn
   */
  readonly authorArn?: string;

  /**
   * @schema CodeCommitListPullRequestsInput#pullRequestStatus
   */
  readonly pullRequestStatus?: string;

  /**
   * @schema CodeCommitListPullRequestsInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeCommitListPullRequestsInput#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'CodeCommitListPullRequestsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitListPullRequestsInput(obj: CodeCommitListPullRequestsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'authorArn': obj.authorArn,
    'pullRequestStatus': obj.pullRequestStatus,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitListPullRequestsOutput
 */
export interface CodeCommitListPullRequestsOutput {
  /**
   * @schema CodeCommitListPullRequestsOutput#pullRequestIds
   */
  readonly pullRequestIds: string[];

  /**
   * @schema CodeCommitListPullRequestsOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeCommitListPullRequestsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitListPullRequestsOutput(obj: CodeCommitListPullRequestsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pullRequestIds': obj.pullRequestIds?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitListRepositoriesInput
 */
export interface CodeCommitListRepositoriesInput {
  /**
   * @schema CodeCommitListRepositoriesInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeCommitListRepositoriesInput#sortBy
   */
  readonly sortBy?: string;

  /**
   * @schema CodeCommitListRepositoriesInput#order
   */
  readonly order?: string;

}

/**
 * Converts an object of type 'CodeCommitListRepositoriesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitListRepositoriesInput(obj: CodeCommitListRepositoriesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'sortBy': obj.sortBy,
    'order': obj.order,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitListRepositoriesOutput
 */
export interface CodeCommitListRepositoriesOutput {
  /**
   * @schema CodeCommitListRepositoriesOutput#repositories
   */
  readonly repositories?: CodeCommitRepositoryNameIdPair[];

  /**
   * @schema CodeCommitListRepositoriesOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeCommitListRepositoriesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitListRepositoriesOutput(obj: CodeCommitListRepositoriesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositories': obj.repositories?.map(y => toJson_CodeCommitRepositoryNameIdPair(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitListRepositoriesForApprovalRuleTemplateInput
 */
export interface CodeCommitListRepositoriesForApprovalRuleTemplateInput {
  /**
   * @schema CodeCommitListRepositoriesForApprovalRuleTemplateInput#approvalRuleTemplateName
   */
  readonly approvalRuleTemplateName: string;

  /**
   * @schema CodeCommitListRepositoriesForApprovalRuleTemplateInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeCommitListRepositoriesForApprovalRuleTemplateInput#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'CodeCommitListRepositoriesForApprovalRuleTemplateInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitListRepositoriesForApprovalRuleTemplateInput(obj: CodeCommitListRepositoriesForApprovalRuleTemplateInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'approvalRuleTemplateName': obj.approvalRuleTemplateName,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitListRepositoriesForApprovalRuleTemplateOutput
 */
export interface CodeCommitListRepositoriesForApprovalRuleTemplateOutput {
  /**
   * @schema CodeCommitListRepositoriesForApprovalRuleTemplateOutput#repositoryNames
   */
  readonly repositoryNames?: string[];

  /**
   * @schema CodeCommitListRepositoriesForApprovalRuleTemplateOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeCommitListRepositoriesForApprovalRuleTemplateOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitListRepositoriesForApprovalRuleTemplateOutput(obj: CodeCommitListRepositoriesForApprovalRuleTemplateOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryNames': obj.repositoryNames?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitListTagsForResourceInput
 */
export interface CodeCommitListTagsForResourceInput {
  /**
   * @schema CodeCommitListTagsForResourceInput#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CodeCommitListTagsForResourceInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeCommitListTagsForResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitListTagsForResourceInput(obj: CodeCommitListTagsForResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitListTagsForResourceOutput
 */
export interface CodeCommitListTagsForResourceOutput {
  /**
   * @schema CodeCommitListTagsForResourceOutput#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CodeCommitListTagsForResourceOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeCommitListTagsForResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitListTagsForResourceOutput(obj: CodeCommitListTagsForResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitMergeBranchesByFastForwardInput
 */
export interface CodeCommitMergeBranchesByFastForwardInput {
  /**
   * @schema CodeCommitMergeBranchesByFastForwardInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CodeCommitMergeBranchesByFastForwardInput#sourceCommitSpecifier
   */
  readonly sourceCommitSpecifier: string;

  /**
   * @schema CodeCommitMergeBranchesByFastForwardInput#destinationCommitSpecifier
   */
  readonly destinationCommitSpecifier: string;

  /**
   * @schema CodeCommitMergeBranchesByFastForwardInput#targetBranch
   */
  readonly targetBranch?: string;

}

/**
 * Converts an object of type 'CodeCommitMergeBranchesByFastForwardInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitMergeBranchesByFastForwardInput(obj: CodeCommitMergeBranchesByFastForwardInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'sourceCommitSpecifier': obj.sourceCommitSpecifier,
    'destinationCommitSpecifier': obj.destinationCommitSpecifier,
    'targetBranch': obj.targetBranch,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitMergeBranchesByFastForwardOutput
 */
export interface CodeCommitMergeBranchesByFastForwardOutput {
  /**
   * @schema CodeCommitMergeBranchesByFastForwardOutput#commitId
   */
  readonly commitId?: string;

  /**
   * @schema CodeCommitMergeBranchesByFastForwardOutput#treeId
   */
  readonly treeId?: string;

}

/**
 * Converts an object of type 'CodeCommitMergeBranchesByFastForwardOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitMergeBranchesByFastForwardOutput(obj: CodeCommitMergeBranchesByFastForwardOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'commitId': obj.commitId,
    'treeId': obj.treeId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitMergeBranchesBySquashInput
 */
export interface CodeCommitMergeBranchesBySquashInput {
  /**
   * @schema CodeCommitMergeBranchesBySquashInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CodeCommitMergeBranchesBySquashInput#sourceCommitSpecifier
   */
  readonly sourceCommitSpecifier: string;

  /**
   * @schema CodeCommitMergeBranchesBySquashInput#destinationCommitSpecifier
   */
  readonly destinationCommitSpecifier: string;

  /**
   * @schema CodeCommitMergeBranchesBySquashInput#targetBranch
   */
  readonly targetBranch?: string;

  /**
   * @schema CodeCommitMergeBranchesBySquashInput#conflictDetailLevel
   */
  readonly conflictDetailLevel?: string;

  /**
   * @schema CodeCommitMergeBranchesBySquashInput#conflictResolutionStrategy
   */
  readonly conflictResolutionStrategy?: string;

  /**
   * @schema CodeCommitMergeBranchesBySquashInput#authorName
   */
  readonly authorName?: string;

  /**
   * @schema CodeCommitMergeBranchesBySquashInput#email
   */
  readonly email?: string;

  /**
   * @schema CodeCommitMergeBranchesBySquashInput#commitMessage
   */
  readonly commitMessage?: string;

  /**
   * @schema CodeCommitMergeBranchesBySquashInput#keepEmptyFolders
   */
  readonly keepEmptyFolders?: boolean;

  /**
   * @schema CodeCommitMergeBranchesBySquashInput#conflictResolution
   */
  readonly conflictResolution?: CodeCommitConflictResolution;

}

/**
 * Converts an object of type 'CodeCommitMergeBranchesBySquashInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitMergeBranchesBySquashInput(obj: CodeCommitMergeBranchesBySquashInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'sourceCommitSpecifier': obj.sourceCommitSpecifier,
    'destinationCommitSpecifier': obj.destinationCommitSpecifier,
    'targetBranch': obj.targetBranch,
    'conflictDetailLevel': obj.conflictDetailLevel,
    'conflictResolutionStrategy': obj.conflictResolutionStrategy,
    'authorName': obj.authorName,
    'email': obj.email,
    'commitMessage': obj.commitMessage,
    'keepEmptyFolders': obj.keepEmptyFolders,
    'conflictResolution': toJson_CodeCommitConflictResolution(obj.conflictResolution),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitMergeBranchesBySquashOutput
 */
export interface CodeCommitMergeBranchesBySquashOutput {
  /**
   * @schema CodeCommitMergeBranchesBySquashOutput#commitId
   */
  readonly commitId?: string;

  /**
   * @schema CodeCommitMergeBranchesBySquashOutput#treeId
   */
  readonly treeId?: string;

}

/**
 * Converts an object of type 'CodeCommitMergeBranchesBySquashOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitMergeBranchesBySquashOutput(obj: CodeCommitMergeBranchesBySquashOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'commitId': obj.commitId,
    'treeId': obj.treeId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitMergeBranchesByThreeWayInput
 */
export interface CodeCommitMergeBranchesByThreeWayInput {
  /**
   * @schema CodeCommitMergeBranchesByThreeWayInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CodeCommitMergeBranchesByThreeWayInput#sourceCommitSpecifier
   */
  readonly sourceCommitSpecifier: string;

  /**
   * @schema CodeCommitMergeBranchesByThreeWayInput#destinationCommitSpecifier
   */
  readonly destinationCommitSpecifier: string;

  /**
   * @schema CodeCommitMergeBranchesByThreeWayInput#targetBranch
   */
  readonly targetBranch?: string;

  /**
   * @schema CodeCommitMergeBranchesByThreeWayInput#conflictDetailLevel
   */
  readonly conflictDetailLevel?: string;

  /**
   * @schema CodeCommitMergeBranchesByThreeWayInput#conflictResolutionStrategy
   */
  readonly conflictResolutionStrategy?: string;

  /**
   * @schema CodeCommitMergeBranchesByThreeWayInput#authorName
   */
  readonly authorName?: string;

  /**
   * @schema CodeCommitMergeBranchesByThreeWayInput#email
   */
  readonly email?: string;

  /**
   * @schema CodeCommitMergeBranchesByThreeWayInput#commitMessage
   */
  readonly commitMessage?: string;

  /**
   * @schema CodeCommitMergeBranchesByThreeWayInput#keepEmptyFolders
   */
  readonly keepEmptyFolders?: boolean;

  /**
   * @schema CodeCommitMergeBranchesByThreeWayInput#conflictResolution
   */
  readonly conflictResolution?: CodeCommitConflictResolution;

}

/**
 * Converts an object of type 'CodeCommitMergeBranchesByThreeWayInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitMergeBranchesByThreeWayInput(obj: CodeCommitMergeBranchesByThreeWayInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'sourceCommitSpecifier': obj.sourceCommitSpecifier,
    'destinationCommitSpecifier': obj.destinationCommitSpecifier,
    'targetBranch': obj.targetBranch,
    'conflictDetailLevel': obj.conflictDetailLevel,
    'conflictResolutionStrategy': obj.conflictResolutionStrategy,
    'authorName': obj.authorName,
    'email': obj.email,
    'commitMessage': obj.commitMessage,
    'keepEmptyFolders': obj.keepEmptyFolders,
    'conflictResolution': toJson_CodeCommitConflictResolution(obj.conflictResolution),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitMergeBranchesByThreeWayOutput
 */
export interface CodeCommitMergeBranchesByThreeWayOutput {
  /**
   * @schema CodeCommitMergeBranchesByThreeWayOutput#commitId
   */
  readonly commitId?: string;

  /**
   * @schema CodeCommitMergeBranchesByThreeWayOutput#treeId
   */
  readonly treeId?: string;

}

/**
 * Converts an object of type 'CodeCommitMergeBranchesByThreeWayOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitMergeBranchesByThreeWayOutput(obj: CodeCommitMergeBranchesByThreeWayOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'commitId': obj.commitId,
    'treeId': obj.treeId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitMergePullRequestByFastForwardInput
 */
export interface CodeCommitMergePullRequestByFastForwardInput {
  /**
   * @schema CodeCommitMergePullRequestByFastForwardInput#pullRequestId
   */
  readonly pullRequestId: string;

  /**
   * @schema CodeCommitMergePullRequestByFastForwardInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CodeCommitMergePullRequestByFastForwardInput#sourceCommitId
   */
  readonly sourceCommitId?: string;

}

/**
 * Converts an object of type 'CodeCommitMergePullRequestByFastForwardInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitMergePullRequestByFastForwardInput(obj: CodeCommitMergePullRequestByFastForwardInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pullRequestId': obj.pullRequestId,
    'repositoryName': obj.repositoryName,
    'sourceCommitId': obj.sourceCommitId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitMergePullRequestByFastForwardOutput
 */
export interface CodeCommitMergePullRequestByFastForwardOutput {
  /**
   * @schema CodeCommitMergePullRequestByFastForwardOutput#pullRequest
   */
  readonly pullRequest?: CodeCommitPullRequest;

}

/**
 * Converts an object of type 'CodeCommitMergePullRequestByFastForwardOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitMergePullRequestByFastForwardOutput(obj: CodeCommitMergePullRequestByFastForwardOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pullRequest': toJson_CodeCommitPullRequest(obj.pullRequest),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitMergePullRequestBySquashInput
 */
export interface CodeCommitMergePullRequestBySquashInput {
  /**
   * @schema CodeCommitMergePullRequestBySquashInput#pullRequestId
   */
  readonly pullRequestId: string;

  /**
   * @schema CodeCommitMergePullRequestBySquashInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CodeCommitMergePullRequestBySquashInput#sourceCommitId
   */
  readonly sourceCommitId?: string;

  /**
   * @schema CodeCommitMergePullRequestBySquashInput#conflictDetailLevel
   */
  readonly conflictDetailLevel?: string;

  /**
   * @schema CodeCommitMergePullRequestBySquashInput#conflictResolutionStrategy
   */
  readonly conflictResolutionStrategy?: string;

  /**
   * @schema CodeCommitMergePullRequestBySquashInput#commitMessage
   */
  readonly commitMessage?: string;

  /**
   * @schema CodeCommitMergePullRequestBySquashInput#authorName
   */
  readonly authorName?: string;

  /**
   * @schema CodeCommitMergePullRequestBySquashInput#email
   */
  readonly email?: string;

  /**
   * @schema CodeCommitMergePullRequestBySquashInput#keepEmptyFolders
   */
  readonly keepEmptyFolders?: boolean;

  /**
   * @schema CodeCommitMergePullRequestBySquashInput#conflictResolution
   */
  readonly conflictResolution?: CodeCommitConflictResolution;

}

/**
 * Converts an object of type 'CodeCommitMergePullRequestBySquashInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitMergePullRequestBySquashInput(obj: CodeCommitMergePullRequestBySquashInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pullRequestId': obj.pullRequestId,
    'repositoryName': obj.repositoryName,
    'sourceCommitId': obj.sourceCommitId,
    'conflictDetailLevel': obj.conflictDetailLevel,
    'conflictResolutionStrategy': obj.conflictResolutionStrategy,
    'commitMessage': obj.commitMessage,
    'authorName': obj.authorName,
    'email': obj.email,
    'keepEmptyFolders': obj.keepEmptyFolders,
    'conflictResolution': toJson_CodeCommitConflictResolution(obj.conflictResolution),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitMergePullRequestBySquashOutput
 */
export interface CodeCommitMergePullRequestBySquashOutput {
  /**
   * @schema CodeCommitMergePullRequestBySquashOutput#pullRequest
   */
  readonly pullRequest?: CodeCommitPullRequest;

}

/**
 * Converts an object of type 'CodeCommitMergePullRequestBySquashOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitMergePullRequestBySquashOutput(obj: CodeCommitMergePullRequestBySquashOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pullRequest': toJson_CodeCommitPullRequest(obj.pullRequest),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitMergePullRequestByThreeWayInput
 */
export interface CodeCommitMergePullRequestByThreeWayInput {
  /**
   * @schema CodeCommitMergePullRequestByThreeWayInput#pullRequestId
   */
  readonly pullRequestId: string;

  /**
   * @schema CodeCommitMergePullRequestByThreeWayInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CodeCommitMergePullRequestByThreeWayInput#sourceCommitId
   */
  readonly sourceCommitId?: string;

  /**
   * @schema CodeCommitMergePullRequestByThreeWayInput#conflictDetailLevel
   */
  readonly conflictDetailLevel?: string;

  /**
   * @schema CodeCommitMergePullRequestByThreeWayInput#conflictResolutionStrategy
   */
  readonly conflictResolutionStrategy?: string;

  /**
   * @schema CodeCommitMergePullRequestByThreeWayInput#commitMessage
   */
  readonly commitMessage?: string;

  /**
   * @schema CodeCommitMergePullRequestByThreeWayInput#authorName
   */
  readonly authorName?: string;

  /**
   * @schema CodeCommitMergePullRequestByThreeWayInput#email
   */
  readonly email?: string;

  /**
   * @schema CodeCommitMergePullRequestByThreeWayInput#keepEmptyFolders
   */
  readonly keepEmptyFolders?: boolean;

  /**
   * @schema CodeCommitMergePullRequestByThreeWayInput#conflictResolution
   */
  readonly conflictResolution?: CodeCommitConflictResolution;

}

/**
 * Converts an object of type 'CodeCommitMergePullRequestByThreeWayInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitMergePullRequestByThreeWayInput(obj: CodeCommitMergePullRequestByThreeWayInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pullRequestId': obj.pullRequestId,
    'repositoryName': obj.repositoryName,
    'sourceCommitId': obj.sourceCommitId,
    'conflictDetailLevel': obj.conflictDetailLevel,
    'conflictResolutionStrategy': obj.conflictResolutionStrategy,
    'commitMessage': obj.commitMessage,
    'authorName': obj.authorName,
    'email': obj.email,
    'keepEmptyFolders': obj.keepEmptyFolders,
    'conflictResolution': toJson_CodeCommitConflictResolution(obj.conflictResolution),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitMergePullRequestByThreeWayOutput
 */
export interface CodeCommitMergePullRequestByThreeWayOutput {
  /**
   * @schema CodeCommitMergePullRequestByThreeWayOutput#pullRequest
   */
  readonly pullRequest?: CodeCommitPullRequest;

}

/**
 * Converts an object of type 'CodeCommitMergePullRequestByThreeWayOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitMergePullRequestByThreeWayOutput(obj: CodeCommitMergePullRequestByThreeWayOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pullRequest': toJson_CodeCommitPullRequest(obj.pullRequest),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitOverridePullRequestApprovalRulesInput
 */
export interface CodeCommitOverridePullRequestApprovalRulesInput {
  /**
   * @schema CodeCommitOverridePullRequestApprovalRulesInput#pullRequestId
   */
  readonly pullRequestId: string;

  /**
   * @schema CodeCommitOverridePullRequestApprovalRulesInput#revisionId
   */
  readonly revisionId: string;

  /**
   * @schema CodeCommitOverridePullRequestApprovalRulesInput#overrideStatus
   */
  readonly overrideStatus: string;

}

/**
 * Converts an object of type 'CodeCommitOverridePullRequestApprovalRulesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitOverridePullRequestApprovalRulesInput(obj: CodeCommitOverridePullRequestApprovalRulesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pullRequestId': obj.pullRequestId,
    'revisionId': obj.revisionId,
    'overrideStatus': obj.overrideStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitPostCommentForComparedCommitInput
 */
export interface CodeCommitPostCommentForComparedCommitInput {
  /**
   * @schema CodeCommitPostCommentForComparedCommitInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CodeCommitPostCommentForComparedCommitInput#beforeCommitId
   */
  readonly beforeCommitId?: string;

  /**
   * @schema CodeCommitPostCommentForComparedCommitInput#afterCommitId
   */
  readonly afterCommitId: string;

  /**
   * @schema CodeCommitPostCommentForComparedCommitInput#location
   */
  readonly location?: CodeCommitLocation;

  /**
   * @schema CodeCommitPostCommentForComparedCommitInput#content
   */
  readonly content: string;

  /**
   * @schema CodeCommitPostCommentForComparedCommitInput#clientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'CodeCommitPostCommentForComparedCommitInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitPostCommentForComparedCommitInput(obj: CodeCommitPostCommentForComparedCommitInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'beforeCommitId': obj.beforeCommitId,
    'afterCommitId': obj.afterCommitId,
    'location': toJson_CodeCommitLocation(obj.location),
    'content': obj.content,
    'clientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitPostCommentForComparedCommitOutput
 */
export interface CodeCommitPostCommentForComparedCommitOutput {
  /**
   * @schema CodeCommitPostCommentForComparedCommitOutput#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema CodeCommitPostCommentForComparedCommitOutput#beforeCommitId
   */
  readonly beforeCommitId?: string;

  /**
   * @schema CodeCommitPostCommentForComparedCommitOutput#afterCommitId
   */
  readonly afterCommitId?: string;

  /**
   * @schema CodeCommitPostCommentForComparedCommitOutput#beforeBlobId
   */
  readonly beforeBlobId?: string;

  /**
   * @schema CodeCommitPostCommentForComparedCommitOutput#afterBlobId
   */
  readonly afterBlobId?: string;

  /**
   * @schema CodeCommitPostCommentForComparedCommitOutput#location
   */
  readonly location?: CodeCommitLocation;

  /**
   * @schema CodeCommitPostCommentForComparedCommitOutput#comment
   */
  readonly comment?: CodeCommitComment;

}

/**
 * Converts an object of type 'CodeCommitPostCommentForComparedCommitOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitPostCommentForComparedCommitOutput(obj: CodeCommitPostCommentForComparedCommitOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'beforeCommitId': obj.beforeCommitId,
    'afterCommitId': obj.afterCommitId,
    'beforeBlobId': obj.beforeBlobId,
    'afterBlobId': obj.afterBlobId,
    'location': toJson_CodeCommitLocation(obj.location),
    'comment': toJson_CodeCommitComment(obj.comment),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitPostCommentForPullRequestInput
 */
export interface CodeCommitPostCommentForPullRequestInput {
  /**
   * @schema CodeCommitPostCommentForPullRequestInput#pullRequestId
   */
  readonly pullRequestId: string;

  /**
   * @schema CodeCommitPostCommentForPullRequestInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CodeCommitPostCommentForPullRequestInput#beforeCommitId
   */
  readonly beforeCommitId: string;

  /**
   * @schema CodeCommitPostCommentForPullRequestInput#afterCommitId
   */
  readonly afterCommitId: string;

  /**
   * @schema CodeCommitPostCommentForPullRequestInput#location
   */
  readonly location?: CodeCommitLocation;

  /**
   * @schema CodeCommitPostCommentForPullRequestInput#content
   */
  readonly content: string;

  /**
   * @schema CodeCommitPostCommentForPullRequestInput#clientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'CodeCommitPostCommentForPullRequestInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitPostCommentForPullRequestInput(obj: CodeCommitPostCommentForPullRequestInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pullRequestId': obj.pullRequestId,
    'repositoryName': obj.repositoryName,
    'beforeCommitId': obj.beforeCommitId,
    'afterCommitId': obj.afterCommitId,
    'location': toJson_CodeCommitLocation(obj.location),
    'content': obj.content,
    'clientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitPostCommentForPullRequestOutput
 */
export interface CodeCommitPostCommentForPullRequestOutput {
  /**
   * @schema CodeCommitPostCommentForPullRequestOutput#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema CodeCommitPostCommentForPullRequestOutput#pullRequestId
   */
  readonly pullRequestId?: string;

  /**
   * @schema CodeCommitPostCommentForPullRequestOutput#beforeCommitId
   */
  readonly beforeCommitId?: string;

  /**
   * @schema CodeCommitPostCommentForPullRequestOutput#afterCommitId
   */
  readonly afterCommitId?: string;

  /**
   * @schema CodeCommitPostCommentForPullRequestOutput#beforeBlobId
   */
  readonly beforeBlobId?: string;

  /**
   * @schema CodeCommitPostCommentForPullRequestOutput#afterBlobId
   */
  readonly afterBlobId?: string;

  /**
   * @schema CodeCommitPostCommentForPullRequestOutput#location
   */
  readonly location?: CodeCommitLocation;

  /**
   * @schema CodeCommitPostCommentForPullRequestOutput#comment
   */
  readonly comment?: CodeCommitComment;

}

/**
 * Converts an object of type 'CodeCommitPostCommentForPullRequestOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitPostCommentForPullRequestOutput(obj: CodeCommitPostCommentForPullRequestOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'pullRequestId': obj.pullRequestId,
    'beforeCommitId': obj.beforeCommitId,
    'afterCommitId': obj.afterCommitId,
    'beforeBlobId': obj.beforeBlobId,
    'afterBlobId': obj.afterBlobId,
    'location': toJson_CodeCommitLocation(obj.location),
    'comment': toJson_CodeCommitComment(obj.comment),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitPostCommentReplyInput
 */
export interface CodeCommitPostCommentReplyInput {
  /**
   * @schema CodeCommitPostCommentReplyInput#inReplyTo
   */
  readonly inReplyTo: string;

  /**
   * @schema CodeCommitPostCommentReplyInput#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CodeCommitPostCommentReplyInput#content
   */
  readonly content: string;

}

/**
 * Converts an object of type 'CodeCommitPostCommentReplyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitPostCommentReplyInput(obj: CodeCommitPostCommentReplyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'inReplyTo': obj.inReplyTo,
    'clientRequestToken': obj.clientRequestToken,
    'content': obj.content,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitPostCommentReplyOutput
 */
export interface CodeCommitPostCommentReplyOutput {
  /**
   * @schema CodeCommitPostCommentReplyOutput#comment
   */
  readonly comment?: CodeCommitComment;

}

/**
 * Converts an object of type 'CodeCommitPostCommentReplyOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitPostCommentReplyOutput(obj: CodeCommitPostCommentReplyOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'comment': toJson_CodeCommitComment(obj.comment),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitPutCommentReactionInput
 */
export interface CodeCommitPutCommentReactionInput {
  /**
   * @schema CodeCommitPutCommentReactionInput#commentId
   */
  readonly commentId: string;

  /**
   * @schema CodeCommitPutCommentReactionInput#reactionValue
   */
  readonly reactionValue: string;

}

/**
 * Converts an object of type 'CodeCommitPutCommentReactionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitPutCommentReactionInput(obj: CodeCommitPutCommentReactionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'commentId': obj.commentId,
    'reactionValue': obj.reactionValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitPutFileInput
 */
export interface CodeCommitPutFileInput {
  /**
   * @schema CodeCommitPutFileInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CodeCommitPutFileInput#branchName
   */
  readonly branchName: string;

  /**
   * @schema CodeCommitPutFileInput#fileContent
   */
  readonly fileContent: any;

  /**
   * @schema CodeCommitPutFileInput#filePath
   */
  readonly filePath: string;

  /**
   * @schema CodeCommitPutFileInput#fileMode
   */
  readonly fileMode?: string;

  /**
   * @schema CodeCommitPutFileInput#parentCommitId
   */
  readonly parentCommitId?: string;

  /**
   * @schema CodeCommitPutFileInput#commitMessage
   */
  readonly commitMessage?: string;

  /**
   * @schema CodeCommitPutFileInput#name
   */
  readonly name?: string;

  /**
   * @schema CodeCommitPutFileInput#email
   */
  readonly email?: string;

}

/**
 * Converts an object of type 'CodeCommitPutFileInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitPutFileInput(obj: CodeCommitPutFileInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'branchName': obj.branchName,
    'fileContent': obj.fileContent,
    'filePath': obj.filePath,
    'fileMode': obj.fileMode,
    'parentCommitId': obj.parentCommitId,
    'commitMessage': obj.commitMessage,
    'name': obj.name,
    'email': obj.email,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitPutFileOutput
 */
export interface CodeCommitPutFileOutput {
  /**
   * @schema CodeCommitPutFileOutput#commitId
   */
  readonly commitId: string;

  /**
   * @schema CodeCommitPutFileOutput#blobId
   */
  readonly blobId: string;

  /**
   * @schema CodeCommitPutFileOutput#treeId
   */
  readonly treeId: string;

}

/**
 * Converts an object of type 'CodeCommitPutFileOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitPutFileOutput(obj: CodeCommitPutFileOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'commitId': obj.commitId,
    'blobId': obj.blobId,
    'treeId': obj.treeId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitPutRepositoryTriggersInput
 */
export interface CodeCommitPutRepositoryTriggersInput {
  /**
   * @schema CodeCommitPutRepositoryTriggersInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CodeCommitPutRepositoryTriggersInput#triggers
   */
  readonly triggers: CodeCommitRepositoryTrigger[];

}

/**
 * Converts an object of type 'CodeCommitPutRepositoryTriggersInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitPutRepositoryTriggersInput(obj: CodeCommitPutRepositoryTriggersInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'triggers': obj.triggers?.map(y => toJson_CodeCommitRepositoryTrigger(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitPutRepositoryTriggersOutput
 */
export interface CodeCommitPutRepositoryTriggersOutput {
  /**
   * @schema CodeCommitPutRepositoryTriggersOutput#configurationId
   */
  readonly configurationId?: string;

}

/**
 * Converts an object of type 'CodeCommitPutRepositoryTriggersOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitPutRepositoryTriggersOutput(obj: CodeCommitPutRepositoryTriggersOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configurationId': obj.configurationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitTagResourceInput
 */
export interface CodeCommitTagResourceInput {
  /**
   * @schema CodeCommitTagResourceInput#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CodeCommitTagResourceInput#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * Converts an object of type 'CodeCommitTagResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitTagResourceInput(obj: CodeCommitTagResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitTestRepositoryTriggersInput
 */
export interface CodeCommitTestRepositoryTriggersInput {
  /**
   * @schema CodeCommitTestRepositoryTriggersInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CodeCommitTestRepositoryTriggersInput#triggers
   */
  readonly triggers: CodeCommitRepositoryTrigger[];

}

/**
 * Converts an object of type 'CodeCommitTestRepositoryTriggersInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitTestRepositoryTriggersInput(obj: CodeCommitTestRepositoryTriggersInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'triggers': obj.triggers?.map(y => toJson_CodeCommitRepositoryTrigger(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitTestRepositoryTriggersOutput
 */
export interface CodeCommitTestRepositoryTriggersOutput {
  /**
   * @schema CodeCommitTestRepositoryTriggersOutput#successfulExecutions
   */
  readonly successfulExecutions?: string[];

  /**
   * @schema CodeCommitTestRepositoryTriggersOutput#failedExecutions
   */
  readonly failedExecutions?: CodeCommitRepositoryTriggerExecutionFailure[];

}

/**
 * Converts an object of type 'CodeCommitTestRepositoryTriggersOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitTestRepositoryTriggersOutput(obj: CodeCommitTestRepositoryTriggersOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'successfulExecutions': obj.successfulExecutions?.map(y => y),
    'failedExecutions': obj.failedExecutions?.map(y => toJson_CodeCommitRepositoryTriggerExecutionFailure(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitUntagResourceInput
 */
export interface CodeCommitUntagResourceInput {
  /**
   * @schema CodeCommitUntagResourceInput#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CodeCommitUntagResourceInput#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'CodeCommitUntagResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitUntagResourceInput(obj: CodeCommitUntagResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitUpdateApprovalRuleTemplateContentInput
 */
export interface CodeCommitUpdateApprovalRuleTemplateContentInput {
  /**
   * @schema CodeCommitUpdateApprovalRuleTemplateContentInput#approvalRuleTemplateName
   */
  readonly approvalRuleTemplateName: string;

  /**
   * @schema CodeCommitUpdateApprovalRuleTemplateContentInput#newRuleContent
   */
  readonly newRuleContent: string;

  /**
   * @schema CodeCommitUpdateApprovalRuleTemplateContentInput#existingRuleContentSha256
   */
  readonly existingRuleContentSha256?: string;

}

/**
 * Converts an object of type 'CodeCommitUpdateApprovalRuleTemplateContentInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitUpdateApprovalRuleTemplateContentInput(obj: CodeCommitUpdateApprovalRuleTemplateContentInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'approvalRuleTemplateName': obj.approvalRuleTemplateName,
    'newRuleContent': obj.newRuleContent,
    'existingRuleContentSha256': obj.existingRuleContentSha256,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitUpdateApprovalRuleTemplateContentOutput
 */
export interface CodeCommitUpdateApprovalRuleTemplateContentOutput {
  /**
   * @schema CodeCommitUpdateApprovalRuleTemplateContentOutput#approvalRuleTemplate
   */
  readonly approvalRuleTemplate: CodeCommitApprovalRuleTemplate;

}

/**
 * Converts an object of type 'CodeCommitUpdateApprovalRuleTemplateContentOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitUpdateApprovalRuleTemplateContentOutput(obj: CodeCommitUpdateApprovalRuleTemplateContentOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'approvalRuleTemplate': toJson_CodeCommitApprovalRuleTemplate(obj.approvalRuleTemplate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitUpdateApprovalRuleTemplateDescriptionInput
 */
export interface CodeCommitUpdateApprovalRuleTemplateDescriptionInput {
  /**
   * @schema CodeCommitUpdateApprovalRuleTemplateDescriptionInput#approvalRuleTemplateName
   */
  readonly approvalRuleTemplateName: string;

  /**
   * @schema CodeCommitUpdateApprovalRuleTemplateDescriptionInput#approvalRuleTemplateDescription
   */
  readonly approvalRuleTemplateDescription: string;

}

/**
 * Converts an object of type 'CodeCommitUpdateApprovalRuleTemplateDescriptionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitUpdateApprovalRuleTemplateDescriptionInput(obj: CodeCommitUpdateApprovalRuleTemplateDescriptionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'approvalRuleTemplateName': obj.approvalRuleTemplateName,
    'approvalRuleTemplateDescription': obj.approvalRuleTemplateDescription,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitUpdateApprovalRuleTemplateDescriptionOutput
 */
export interface CodeCommitUpdateApprovalRuleTemplateDescriptionOutput {
  /**
   * @schema CodeCommitUpdateApprovalRuleTemplateDescriptionOutput#approvalRuleTemplate
   */
  readonly approvalRuleTemplate: CodeCommitApprovalRuleTemplate;

}

/**
 * Converts an object of type 'CodeCommitUpdateApprovalRuleTemplateDescriptionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitUpdateApprovalRuleTemplateDescriptionOutput(obj: CodeCommitUpdateApprovalRuleTemplateDescriptionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'approvalRuleTemplate': toJson_CodeCommitApprovalRuleTemplate(obj.approvalRuleTemplate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitUpdateApprovalRuleTemplateNameInput
 */
export interface CodeCommitUpdateApprovalRuleTemplateNameInput {
  /**
   * @schema CodeCommitUpdateApprovalRuleTemplateNameInput#oldApprovalRuleTemplateName
   */
  readonly oldApprovalRuleTemplateName: string;

  /**
   * @schema CodeCommitUpdateApprovalRuleTemplateNameInput#newApprovalRuleTemplateName
   */
  readonly newApprovalRuleTemplateName: string;

}

/**
 * Converts an object of type 'CodeCommitUpdateApprovalRuleTemplateNameInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitUpdateApprovalRuleTemplateNameInput(obj: CodeCommitUpdateApprovalRuleTemplateNameInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'oldApprovalRuleTemplateName': obj.oldApprovalRuleTemplateName,
    'newApprovalRuleTemplateName': obj.newApprovalRuleTemplateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitUpdateApprovalRuleTemplateNameOutput
 */
export interface CodeCommitUpdateApprovalRuleTemplateNameOutput {
  /**
   * @schema CodeCommitUpdateApprovalRuleTemplateNameOutput#approvalRuleTemplate
   */
  readonly approvalRuleTemplate: CodeCommitApprovalRuleTemplate;

}

/**
 * Converts an object of type 'CodeCommitUpdateApprovalRuleTemplateNameOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitUpdateApprovalRuleTemplateNameOutput(obj: CodeCommitUpdateApprovalRuleTemplateNameOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'approvalRuleTemplate': toJson_CodeCommitApprovalRuleTemplate(obj.approvalRuleTemplate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitUpdateCommentInput
 */
export interface CodeCommitUpdateCommentInput {
  /**
   * @schema CodeCommitUpdateCommentInput#commentId
   */
  readonly commentId: string;

  /**
   * @schema CodeCommitUpdateCommentInput#content
   */
  readonly content: string;

}

/**
 * Converts an object of type 'CodeCommitUpdateCommentInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitUpdateCommentInput(obj: CodeCommitUpdateCommentInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'commentId': obj.commentId,
    'content': obj.content,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitUpdateCommentOutput
 */
export interface CodeCommitUpdateCommentOutput {
  /**
   * @schema CodeCommitUpdateCommentOutput#comment
   */
  readonly comment?: CodeCommitComment;

}

/**
 * Converts an object of type 'CodeCommitUpdateCommentOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitUpdateCommentOutput(obj: CodeCommitUpdateCommentOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'comment': toJson_CodeCommitComment(obj.comment),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitUpdateDefaultBranchInput
 */
export interface CodeCommitUpdateDefaultBranchInput {
  /**
   * @schema CodeCommitUpdateDefaultBranchInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CodeCommitUpdateDefaultBranchInput#defaultBranchName
   */
  readonly defaultBranchName: string;

}

/**
 * Converts an object of type 'CodeCommitUpdateDefaultBranchInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitUpdateDefaultBranchInput(obj: CodeCommitUpdateDefaultBranchInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'defaultBranchName': obj.defaultBranchName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitUpdatePullRequestApprovalRuleContentInput
 */
export interface CodeCommitUpdatePullRequestApprovalRuleContentInput {
  /**
   * @schema CodeCommitUpdatePullRequestApprovalRuleContentInput#pullRequestId
   */
  readonly pullRequestId: string;

  /**
   * @schema CodeCommitUpdatePullRequestApprovalRuleContentInput#approvalRuleName
   */
  readonly approvalRuleName: string;

  /**
   * @schema CodeCommitUpdatePullRequestApprovalRuleContentInput#existingRuleContentSha256
   */
  readonly existingRuleContentSha256?: string;

  /**
   * @schema CodeCommitUpdatePullRequestApprovalRuleContentInput#newRuleContent
   */
  readonly newRuleContent: string;

}

/**
 * Converts an object of type 'CodeCommitUpdatePullRequestApprovalRuleContentInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitUpdatePullRequestApprovalRuleContentInput(obj: CodeCommitUpdatePullRequestApprovalRuleContentInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pullRequestId': obj.pullRequestId,
    'approvalRuleName': obj.approvalRuleName,
    'existingRuleContentSha256': obj.existingRuleContentSha256,
    'newRuleContent': obj.newRuleContent,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitUpdatePullRequestApprovalRuleContentOutput
 */
export interface CodeCommitUpdatePullRequestApprovalRuleContentOutput {
  /**
   * @schema CodeCommitUpdatePullRequestApprovalRuleContentOutput#approvalRule
   */
  readonly approvalRule: CodeCommitApprovalRule;

}

/**
 * Converts an object of type 'CodeCommitUpdatePullRequestApprovalRuleContentOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitUpdatePullRequestApprovalRuleContentOutput(obj: CodeCommitUpdatePullRequestApprovalRuleContentOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'approvalRule': toJson_CodeCommitApprovalRule(obj.approvalRule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitUpdatePullRequestApprovalStateInput
 */
export interface CodeCommitUpdatePullRequestApprovalStateInput {
  /**
   * @schema CodeCommitUpdatePullRequestApprovalStateInput#pullRequestId
   */
  readonly pullRequestId: string;

  /**
   * @schema CodeCommitUpdatePullRequestApprovalStateInput#revisionId
   */
  readonly revisionId: string;

  /**
   * @schema CodeCommitUpdatePullRequestApprovalStateInput#approvalState
   */
  readonly approvalState: string;

}

/**
 * Converts an object of type 'CodeCommitUpdatePullRequestApprovalStateInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitUpdatePullRequestApprovalStateInput(obj: CodeCommitUpdatePullRequestApprovalStateInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pullRequestId': obj.pullRequestId,
    'revisionId': obj.revisionId,
    'approvalState': obj.approvalState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitUpdatePullRequestDescriptionInput
 */
export interface CodeCommitUpdatePullRequestDescriptionInput {
  /**
   * @schema CodeCommitUpdatePullRequestDescriptionInput#pullRequestId
   */
  readonly pullRequestId: string;

  /**
   * @schema CodeCommitUpdatePullRequestDescriptionInput#description
   */
  readonly description: string;

}

/**
 * Converts an object of type 'CodeCommitUpdatePullRequestDescriptionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitUpdatePullRequestDescriptionInput(obj: CodeCommitUpdatePullRequestDescriptionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pullRequestId': obj.pullRequestId,
    'description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitUpdatePullRequestDescriptionOutput
 */
export interface CodeCommitUpdatePullRequestDescriptionOutput {
  /**
   * @schema CodeCommitUpdatePullRequestDescriptionOutput#pullRequest
   */
  readonly pullRequest: CodeCommitPullRequest;

}

/**
 * Converts an object of type 'CodeCommitUpdatePullRequestDescriptionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitUpdatePullRequestDescriptionOutput(obj: CodeCommitUpdatePullRequestDescriptionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pullRequest': toJson_CodeCommitPullRequest(obj.pullRequest),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitUpdatePullRequestStatusInput
 */
export interface CodeCommitUpdatePullRequestStatusInput {
  /**
   * @schema CodeCommitUpdatePullRequestStatusInput#pullRequestId
   */
  readonly pullRequestId: string;

  /**
   * @schema CodeCommitUpdatePullRequestStatusInput#pullRequestStatus
   */
  readonly pullRequestStatus: string;

}

/**
 * Converts an object of type 'CodeCommitUpdatePullRequestStatusInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitUpdatePullRequestStatusInput(obj: CodeCommitUpdatePullRequestStatusInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pullRequestId': obj.pullRequestId,
    'pullRequestStatus': obj.pullRequestStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitUpdatePullRequestStatusOutput
 */
export interface CodeCommitUpdatePullRequestStatusOutput {
  /**
   * @schema CodeCommitUpdatePullRequestStatusOutput#pullRequest
   */
  readonly pullRequest: CodeCommitPullRequest;

}

/**
 * Converts an object of type 'CodeCommitUpdatePullRequestStatusOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitUpdatePullRequestStatusOutput(obj: CodeCommitUpdatePullRequestStatusOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pullRequest': toJson_CodeCommitPullRequest(obj.pullRequest),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitUpdatePullRequestTitleInput
 */
export interface CodeCommitUpdatePullRequestTitleInput {
  /**
   * @schema CodeCommitUpdatePullRequestTitleInput#pullRequestId
   */
  readonly pullRequestId: string;

  /**
   * @schema CodeCommitUpdatePullRequestTitleInput#title
   */
  readonly title: string;

}

/**
 * Converts an object of type 'CodeCommitUpdatePullRequestTitleInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitUpdatePullRequestTitleInput(obj: CodeCommitUpdatePullRequestTitleInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pullRequestId': obj.pullRequestId,
    'title': obj.title,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitUpdatePullRequestTitleOutput
 */
export interface CodeCommitUpdatePullRequestTitleOutput {
  /**
   * @schema CodeCommitUpdatePullRequestTitleOutput#pullRequest
   */
  readonly pullRequest: CodeCommitPullRequest;

}

/**
 * Converts an object of type 'CodeCommitUpdatePullRequestTitleOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitUpdatePullRequestTitleOutput(obj: CodeCommitUpdatePullRequestTitleOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pullRequest': toJson_CodeCommitPullRequest(obj.pullRequest),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitUpdateRepositoryDescriptionInput
 */
export interface CodeCommitUpdateRepositoryDescriptionInput {
  /**
   * @schema CodeCommitUpdateRepositoryDescriptionInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CodeCommitUpdateRepositoryDescriptionInput#repositoryDescription
   */
  readonly repositoryDescription?: string;

}

/**
 * Converts an object of type 'CodeCommitUpdateRepositoryDescriptionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitUpdateRepositoryDescriptionInput(obj: CodeCommitUpdateRepositoryDescriptionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'repositoryDescription': obj.repositoryDescription,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitUpdateRepositoryNameInput
 */
export interface CodeCommitUpdateRepositoryNameInput {
  /**
   * @schema CodeCommitUpdateRepositoryNameInput#oldName
   */
  readonly oldName: string;

  /**
   * @schema CodeCommitUpdateRepositoryNameInput#newName
   */
  readonly newName: string;

}

/**
 * Converts an object of type 'CodeCommitUpdateRepositoryNameInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitUpdateRepositoryNameInput(obj: CodeCommitUpdateRepositoryNameInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'oldName': obj.oldName,
    'newName': obj.newName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesError
 */
export interface CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesError {
  /**
   * @schema CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesError#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesError#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesError#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesError(obj: CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'errorCode': obj.errorCode,
    'errorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitConflict
 */
export interface CodeCommitConflict {
  /**
   * @schema CodeCommitConflict#conflictMetadata
   */
  readonly conflictMetadata?: CodeCommitConflictMetadata;

  /**
   * @schema CodeCommitConflict#mergeHunks
   */
  readonly mergeHunks?: CodeCommitMergeHunk[];

}

/**
 * Converts an object of type 'CodeCommitConflict' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitConflict(obj: CodeCommitConflict | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'conflictMetadata': toJson_CodeCommitConflictMetadata(obj.conflictMetadata),
    'mergeHunks': obj.mergeHunks?.map(y => toJson_CodeCommitMergeHunk(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitBatchDescribeMergeConflictsError
 */
export interface CodeCommitBatchDescribeMergeConflictsError {
  /**
   * @schema CodeCommitBatchDescribeMergeConflictsError#filePath
   */
  readonly filePath: string;

  /**
   * @schema CodeCommitBatchDescribeMergeConflictsError#exceptionName
   */
  readonly exceptionName: string;

  /**
   * @schema CodeCommitBatchDescribeMergeConflictsError#message
   */
  readonly message: string;

}

/**
 * Converts an object of type 'CodeCommitBatchDescribeMergeConflictsError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitBatchDescribeMergeConflictsError(obj: CodeCommitBatchDescribeMergeConflictsError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filePath': obj.filePath,
    'exceptionName': obj.exceptionName,
    'message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesError
 */
export interface CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesError {
  /**
   * @schema CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesError#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesError#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesError#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesError(obj: CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'errorCode': obj.errorCode,
    'errorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitCommit
 */
export interface CodeCommitCommit {
  /**
   * @schema CodeCommitCommit#commitId
   */
  readonly commitId?: string;

  /**
   * @schema CodeCommitCommit#treeId
   */
  readonly treeId?: string;

  /**
   * @schema CodeCommitCommit#parents
   */
  readonly parents?: string[];

  /**
   * @schema CodeCommitCommit#message
   */
  readonly message?: string;

  /**
   * @schema CodeCommitCommit#author
   */
  readonly author?: CodeCommitUserInfo;

  /**
   * @schema CodeCommitCommit#committer
   */
  readonly committer?: CodeCommitUserInfo;

  /**
   * @schema CodeCommitCommit#additionalData
   */
  readonly additionalData?: string;

}

/**
 * Converts an object of type 'CodeCommitCommit' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitCommit(obj: CodeCommitCommit | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'commitId': obj.commitId,
    'treeId': obj.treeId,
    'parents': obj.parents?.map(y => y),
    'message': obj.message,
    'author': toJson_CodeCommitUserInfo(obj.author),
    'committer': toJson_CodeCommitUserInfo(obj.committer),
    'additionalData': obj.additionalData,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitBatchGetCommitsError
 */
export interface CodeCommitBatchGetCommitsError {
  /**
   * @schema CodeCommitBatchGetCommitsError#commitId
   */
  readonly commitId?: string;

  /**
   * @schema CodeCommitBatchGetCommitsError#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema CodeCommitBatchGetCommitsError#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'CodeCommitBatchGetCommitsError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitBatchGetCommitsError(obj: CodeCommitBatchGetCommitsError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'commitId': obj.commitId,
    'errorCode': obj.errorCode,
    'errorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitRepositoryMetadata
 */
export interface CodeCommitRepositoryMetadata {
  /**
   * @schema CodeCommitRepositoryMetadata#accountId
   */
  readonly accountId?: string;

  /**
   * @schema CodeCommitRepositoryMetadata#repositoryId
   */
  readonly repositoryId?: string;

  /**
   * @schema CodeCommitRepositoryMetadata#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema CodeCommitRepositoryMetadata#repositoryDescription
   */
  readonly repositoryDescription?: string;

  /**
   * @schema CodeCommitRepositoryMetadata#defaultBranch
   */
  readonly defaultBranch?: string;

  /**
   * @schema CodeCommitRepositoryMetadata#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema CodeCommitRepositoryMetadata#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema CodeCommitRepositoryMetadata#cloneUrlHttp
   */
  readonly cloneUrlHttp?: string;

  /**
   * @schema CodeCommitRepositoryMetadata#cloneUrlSsh
   */
  readonly cloneUrlSsh?: string;

  /**
   * @schema CodeCommitRepositoryMetadata#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'CodeCommitRepositoryMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitRepositoryMetadata(obj: CodeCommitRepositoryMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'repositoryId': obj.repositoryId,
    'repositoryName': obj.repositoryName,
    'repositoryDescription': obj.repositoryDescription,
    'defaultBranch': obj.defaultBranch,
    'lastModifiedDate': obj.lastModifiedDate,
    'creationDate': obj.creationDate,
    'cloneUrlHttp': obj.cloneUrlHttp,
    'cloneUrlSsh': obj.cloneUrlSsh,
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitApprovalRuleTemplate
 */
export interface CodeCommitApprovalRuleTemplate {
  /**
   * @schema CodeCommitApprovalRuleTemplate#approvalRuleTemplateId
   */
  readonly approvalRuleTemplateId?: string;

  /**
   * @schema CodeCommitApprovalRuleTemplate#approvalRuleTemplateName
   */
  readonly approvalRuleTemplateName?: string;

  /**
   * @schema CodeCommitApprovalRuleTemplate#approvalRuleTemplateDescription
   */
  readonly approvalRuleTemplateDescription?: string;

  /**
   * @schema CodeCommitApprovalRuleTemplate#approvalRuleTemplateContent
   */
  readonly approvalRuleTemplateContent?: string;

  /**
   * @schema CodeCommitApprovalRuleTemplate#ruleContentSha256
   */
  readonly ruleContentSha256?: string;

  /**
   * @schema CodeCommitApprovalRuleTemplate#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema CodeCommitApprovalRuleTemplate#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema CodeCommitApprovalRuleTemplate#lastModifiedUser
   */
  readonly lastModifiedUser?: string;

}

/**
 * Converts an object of type 'CodeCommitApprovalRuleTemplate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitApprovalRuleTemplate(obj: CodeCommitApprovalRuleTemplate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'approvalRuleTemplateId': obj.approvalRuleTemplateId,
    'approvalRuleTemplateName': obj.approvalRuleTemplateName,
    'approvalRuleTemplateDescription': obj.approvalRuleTemplateDescription,
    'approvalRuleTemplateContent': obj.approvalRuleTemplateContent,
    'ruleContentSha256': obj.ruleContentSha256,
    'lastModifiedDate': obj.lastModifiedDate,
    'creationDate': obj.creationDate,
    'lastModifiedUser': obj.lastModifiedUser,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitPutFileEntry
 */
export interface CodeCommitPutFileEntry {
  /**
   * @schema CodeCommitPutFileEntry#filePath
   */
  readonly filePath: string;

  /**
   * @schema CodeCommitPutFileEntry#fileMode
   */
  readonly fileMode?: string;

  /**
   * @schema CodeCommitPutFileEntry#fileContent
   */
  readonly fileContent?: any;

  /**
   * @schema CodeCommitPutFileEntry#sourceFile
   */
  readonly sourceFile?: CodeCommitSourceFileSpecifier;

}

/**
 * Converts an object of type 'CodeCommitPutFileEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitPutFileEntry(obj: CodeCommitPutFileEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filePath': obj.filePath,
    'fileMode': obj.fileMode,
    'fileContent': obj.fileContent,
    'sourceFile': toJson_CodeCommitSourceFileSpecifier(obj.sourceFile),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitDeleteFileEntry
 */
export interface CodeCommitDeleteFileEntry {
  /**
   * @schema CodeCommitDeleteFileEntry#filePath
   */
  readonly filePath: string;

}

/**
 * Converts an object of type 'CodeCommitDeleteFileEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitDeleteFileEntry(obj: CodeCommitDeleteFileEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filePath': obj.filePath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitSetFileModeEntry
 */
export interface CodeCommitSetFileModeEntry {
  /**
   * @schema CodeCommitSetFileModeEntry#filePath
   */
  readonly filePath: string;

  /**
   * @schema CodeCommitSetFileModeEntry#fileMode
   */
  readonly fileMode: string;

}

/**
 * Converts an object of type 'CodeCommitSetFileModeEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitSetFileModeEntry(obj: CodeCommitSetFileModeEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filePath': obj.filePath,
    'fileMode': obj.fileMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitFileMetadata
 */
export interface CodeCommitFileMetadata {
  /**
   * @schema CodeCommitFileMetadata#absolutePath
   */
  readonly absolutePath?: string;

  /**
   * @schema CodeCommitFileMetadata#blobId
   */
  readonly blobId?: string;

  /**
   * @schema CodeCommitFileMetadata#fileMode
   */
  readonly fileMode?: string;

}

/**
 * Converts an object of type 'CodeCommitFileMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitFileMetadata(obj: CodeCommitFileMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'absolutePath': obj.absolutePath,
    'blobId': obj.blobId,
    'fileMode': obj.fileMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitTarget
 */
export interface CodeCommitTarget {
  /**
   * @schema CodeCommitTarget#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CodeCommitTarget#sourceReference
   */
  readonly sourceReference: string;

  /**
   * @schema CodeCommitTarget#destinationReference
   */
  readonly destinationReference?: string;

}

/**
 * Converts an object of type 'CodeCommitTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitTarget(obj: CodeCommitTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'sourceReference': obj.sourceReference,
    'destinationReference': obj.destinationReference,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitPullRequest
 */
export interface CodeCommitPullRequest {
  /**
   * @schema CodeCommitPullRequest#pullRequestId
   */
  readonly pullRequestId?: string;

  /**
   * @schema CodeCommitPullRequest#title
   */
  readonly title?: string;

  /**
   * @schema CodeCommitPullRequest#description
   */
  readonly description?: string;

  /**
   * @schema CodeCommitPullRequest#lastActivityDate
   */
  readonly lastActivityDate?: string;

  /**
   * @schema CodeCommitPullRequest#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema CodeCommitPullRequest#pullRequestStatus
   */
  readonly pullRequestStatus?: string;

  /**
   * @schema CodeCommitPullRequest#authorArn
   */
  readonly authorArn?: string;

  /**
   * @schema CodeCommitPullRequest#pullRequestTargets
   */
  readonly pullRequestTargets?: CodeCommitPullRequestTarget[];

  /**
   * @schema CodeCommitPullRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CodeCommitPullRequest#revisionId
   */
  readonly revisionId?: string;

  /**
   * @schema CodeCommitPullRequest#approvalRules
   */
  readonly approvalRules?: CodeCommitApprovalRule[];

}

/**
 * Converts an object of type 'CodeCommitPullRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitPullRequest(obj: CodeCommitPullRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pullRequestId': obj.pullRequestId,
    'title': obj.title,
    'description': obj.description,
    'lastActivityDate': obj.lastActivityDate,
    'creationDate': obj.creationDate,
    'pullRequestStatus': obj.pullRequestStatus,
    'authorArn': obj.authorArn,
    'pullRequestTargets': obj.pullRequestTargets?.map(y => toJson_CodeCommitPullRequestTarget(y)),
    'clientRequestToken': obj.clientRequestToken,
    'revisionId': obj.revisionId,
    'approvalRules': obj.approvalRules?.map(y => toJson_CodeCommitApprovalRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitApprovalRule
 */
export interface CodeCommitApprovalRule {
  /**
   * @schema CodeCommitApprovalRule#approvalRuleId
   */
  readonly approvalRuleId?: string;

  /**
   * @schema CodeCommitApprovalRule#approvalRuleName
   */
  readonly approvalRuleName?: string;

  /**
   * @schema CodeCommitApprovalRule#approvalRuleContent
   */
  readonly approvalRuleContent?: string;

  /**
   * @schema CodeCommitApprovalRule#ruleContentSha256
   */
  readonly ruleContentSha256?: string;

  /**
   * @schema CodeCommitApprovalRule#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema CodeCommitApprovalRule#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema CodeCommitApprovalRule#lastModifiedUser
   */
  readonly lastModifiedUser?: string;

  /**
   * @schema CodeCommitApprovalRule#originApprovalRuleTemplate
   */
  readonly originApprovalRuleTemplate?: CodeCommitOriginApprovalRuleTemplate;

}

/**
 * Converts an object of type 'CodeCommitApprovalRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitApprovalRule(obj: CodeCommitApprovalRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'approvalRuleId': obj.approvalRuleId,
    'approvalRuleName': obj.approvalRuleName,
    'approvalRuleContent': obj.approvalRuleContent,
    'ruleContentSha256': obj.ruleContentSha256,
    'lastModifiedDate': obj.lastModifiedDate,
    'creationDate': obj.creationDate,
    'lastModifiedUser': obj.lastModifiedUser,
    'originApprovalRuleTemplate': toJson_CodeCommitOriginApprovalRuleTemplate(obj.originApprovalRuleTemplate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitConflictResolution
 */
export interface CodeCommitConflictResolution {
  /**
   * @schema CodeCommitConflictResolution#replaceContents
   */
  readonly replaceContents?: CodeCommitReplaceContentEntry[];

  /**
   * @schema CodeCommitConflictResolution#deleteFiles
   */
  readonly deleteFiles?: CodeCommitDeleteFileEntry[];

  /**
   * @schema CodeCommitConflictResolution#setFileModes
   */
  readonly setFileModes?: CodeCommitSetFileModeEntry[];

}

/**
 * Converts an object of type 'CodeCommitConflictResolution' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitConflictResolution(obj: CodeCommitConflictResolution | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'replaceContents': obj.replaceContents?.map(y => toJson_CodeCommitReplaceContentEntry(y)),
    'deleteFiles': obj.deleteFiles?.map(y => toJson_CodeCommitDeleteFileEntry(y)),
    'setFileModes': obj.setFileModes?.map(y => toJson_CodeCommitSetFileModeEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitBranchInfo
 */
export interface CodeCommitBranchInfo {
  /**
   * @schema CodeCommitBranchInfo#branchName
   */
  readonly branchName?: string;

  /**
   * @schema CodeCommitBranchInfo#commitId
   */
  readonly commitId?: string;

}

/**
 * Converts an object of type 'CodeCommitBranchInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitBranchInfo(obj: CodeCommitBranchInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'branchName': obj.branchName,
    'commitId': obj.commitId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitComment
 */
export interface CodeCommitComment {
  /**
   * @schema CodeCommitComment#commentId
   */
  readonly commentId?: string;

  /**
   * @schema CodeCommitComment#content
   */
  readonly content?: string;

  /**
   * @schema CodeCommitComment#inReplyTo
   */
  readonly inReplyTo?: string;

  /**
   * @schema CodeCommitComment#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema CodeCommitComment#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema CodeCommitComment#authorArn
   */
  readonly authorArn?: string;

  /**
   * @schema CodeCommitComment#deleted
   */
  readonly deleted?: boolean;

  /**
   * @schema CodeCommitComment#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CodeCommitComment#callerReactions
   */
  readonly callerReactions?: string[];

  /**
   * @schema CodeCommitComment#reactionCounts
   */
  readonly reactionCounts?: { [key: string]: number };

}

/**
 * Converts an object of type 'CodeCommitComment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitComment(obj: CodeCommitComment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'commentId': obj.commentId,
    'content': obj.content,
    'inReplyTo': obj.inReplyTo,
    'creationDate': obj.creationDate,
    'lastModifiedDate': obj.lastModifiedDate,
    'authorArn': obj.authorArn,
    'deleted': obj.deleted,
    'clientRequestToken': obj.clientRequestToken,
    'callerReactions': obj.callerReactions?.map(y => y),
    'reactionCounts': ((obj.reactionCounts) === undefined) ? undefined : (Object.entries(obj.reactionCounts).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitConflictMetadata
 */
export interface CodeCommitConflictMetadata {
  /**
   * @schema CodeCommitConflictMetadata#filePath
   */
  readonly filePath?: string;

  /**
   * @schema CodeCommitConflictMetadata#fileSizes
   */
  readonly fileSizes?: CodeCommitFileSizes;

  /**
   * @schema CodeCommitConflictMetadata#fileModes
   */
  readonly fileModes?: CodeCommitFileModes;

  /**
   * @schema CodeCommitConflictMetadata#objectTypes
   */
  readonly objectTypes?: CodeCommitObjectTypes;

  /**
   * @schema CodeCommitConflictMetadata#numberOfConflicts
   */
  readonly numberOfConflicts?: number;

  /**
   * @schema CodeCommitConflictMetadata#isBinaryFile
   */
  readonly isBinaryFile?: CodeCommitIsBinaryFile;

  /**
   * @schema CodeCommitConflictMetadata#contentConflict
   */
  readonly contentConflict?: boolean;

  /**
   * @schema CodeCommitConflictMetadata#fileModeConflict
   */
  readonly fileModeConflict?: boolean;

  /**
   * @schema CodeCommitConflictMetadata#objectTypeConflict
   */
  readonly objectTypeConflict?: boolean;

  /**
   * @schema CodeCommitConflictMetadata#mergeOperations
   */
  readonly mergeOperations?: CodeCommitMergeOperations;

}

/**
 * Converts an object of type 'CodeCommitConflictMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitConflictMetadata(obj: CodeCommitConflictMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filePath': obj.filePath,
    'fileSizes': toJson_CodeCommitFileSizes(obj.fileSizes),
    'fileModes': toJson_CodeCommitFileModes(obj.fileModes),
    'objectTypes': toJson_CodeCommitObjectTypes(obj.objectTypes),
    'numberOfConflicts': obj.numberOfConflicts,
    'isBinaryFile': toJson_CodeCommitIsBinaryFile(obj.isBinaryFile),
    'contentConflict': obj.contentConflict,
    'fileModeConflict': obj.fileModeConflict,
    'objectTypeConflict': obj.objectTypeConflict,
    'mergeOperations': toJson_CodeCommitMergeOperations(obj.mergeOperations),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitMergeHunk
 */
export interface CodeCommitMergeHunk {
  /**
   * @schema CodeCommitMergeHunk#isConflict
   */
  readonly isConflict?: boolean;

  /**
   * @schema CodeCommitMergeHunk#source
   */
  readonly source?: CodeCommitMergeHunkDetail;

  /**
   * @schema CodeCommitMergeHunk#destination
   */
  readonly destination?: CodeCommitMergeHunkDetail;

  /**
   * @schema CodeCommitMergeHunk#base
   */
  readonly base?: CodeCommitMergeHunkDetail;

}

/**
 * Converts an object of type 'CodeCommitMergeHunk' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitMergeHunk(obj: CodeCommitMergeHunk | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'isConflict': obj.isConflict,
    'source': toJson_CodeCommitMergeHunkDetail(obj.source),
    'destination': toJson_CodeCommitMergeHunkDetail(obj.destination),
    'base': toJson_CodeCommitMergeHunkDetail(obj.base),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitPullRequestEvent
 */
export interface CodeCommitPullRequestEvent {
  /**
   * @schema CodeCommitPullRequestEvent#pullRequestId
   */
  readonly pullRequestId?: string;

  /**
   * @schema CodeCommitPullRequestEvent#eventDate
   */
  readonly eventDate?: string;

  /**
   * @schema CodeCommitPullRequestEvent#pullRequestEventType
   */
  readonly pullRequestEventType?: string;

  /**
   * @schema CodeCommitPullRequestEvent#actorArn
   */
  readonly actorArn?: string;

  /**
   * @schema CodeCommitPullRequestEvent#pullRequestCreatedEventMetadata
   */
  readonly pullRequestCreatedEventMetadata?: CodeCommitPullRequestCreatedEventMetadata;

  /**
   * @schema CodeCommitPullRequestEvent#pullRequestStatusChangedEventMetadata
   */
  readonly pullRequestStatusChangedEventMetadata?: CodeCommitPullRequestStatusChangedEventMetadata;

  /**
   * @schema CodeCommitPullRequestEvent#pullRequestSourceReferenceUpdatedEventMetadata
   */
  readonly pullRequestSourceReferenceUpdatedEventMetadata?: CodeCommitPullRequestSourceReferenceUpdatedEventMetadata;

  /**
   * @schema CodeCommitPullRequestEvent#pullRequestMergedStateChangedEventMetadata
   */
  readonly pullRequestMergedStateChangedEventMetadata?: CodeCommitPullRequestMergedStateChangedEventMetadata;

  /**
   * @schema CodeCommitPullRequestEvent#approvalRuleEventMetadata
   */
  readonly approvalRuleEventMetadata?: CodeCommitApprovalRuleEventMetadata;

  /**
   * @schema CodeCommitPullRequestEvent#approvalStateChangedEventMetadata
   */
  readonly approvalStateChangedEventMetadata?: CodeCommitApprovalStateChangedEventMetadata;

  /**
   * @schema CodeCommitPullRequestEvent#approvalRuleOverriddenEventMetadata
   */
  readonly approvalRuleOverriddenEventMetadata?: CodeCommitApprovalRuleOverriddenEventMetadata;

}

/**
 * Converts an object of type 'CodeCommitPullRequestEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitPullRequestEvent(obj: CodeCommitPullRequestEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pullRequestId': obj.pullRequestId,
    'eventDate': obj.eventDate,
    'pullRequestEventType': obj.pullRequestEventType,
    'actorArn': obj.actorArn,
    'pullRequestCreatedEventMetadata': toJson_CodeCommitPullRequestCreatedEventMetadata(obj.pullRequestCreatedEventMetadata),
    'pullRequestStatusChangedEventMetadata': toJson_CodeCommitPullRequestStatusChangedEventMetadata(obj.pullRequestStatusChangedEventMetadata),
    'pullRequestSourceReferenceUpdatedEventMetadata': toJson_CodeCommitPullRequestSourceReferenceUpdatedEventMetadata(obj.pullRequestSourceReferenceUpdatedEventMetadata),
    'pullRequestMergedStateChangedEventMetadata': toJson_CodeCommitPullRequestMergedStateChangedEventMetadata(obj.pullRequestMergedStateChangedEventMetadata),
    'approvalRuleEventMetadata': toJson_CodeCommitApprovalRuleEventMetadata(obj.approvalRuleEventMetadata),
    'approvalStateChangedEventMetadata': toJson_CodeCommitApprovalStateChangedEventMetadata(obj.approvalStateChangedEventMetadata),
    'approvalRuleOverriddenEventMetadata': toJson_CodeCommitApprovalRuleOverriddenEventMetadata(obj.approvalRuleOverriddenEventMetadata),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitEvaluation
 */
export interface CodeCommitEvaluation {
  /**
   * @schema CodeCommitEvaluation#approved
   */
  readonly approved?: boolean;

  /**
   * @schema CodeCommitEvaluation#overridden
   */
  readonly overridden?: boolean;

  /**
   * @schema CodeCommitEvaluation#approvalRulesSatisfied
   */
  readonly approvalRulesSatisfied?: string[];

  /**
   * @schema CodeCommitEvaluation#approvalRulesNotSatisfied
   */
  readonly approvalRulesNotSatisfied?: string[];

}

/**
 * Converts an object of type 'CodeCommitEvaluation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitEvaluation(obj: CodeCommitEvaluation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'approved': obj.approved,
    'overridden': obj.overridden,
    'approvalRulesSatisfied': obj.approvalRulesSatisfied?.map(y => y),
    'approvalRulesNotSatisfied': obj.approvalRulesNotSatisfied?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitReactionForComment
 */
export interface CodeCommitReactionForComment {
  /**
   * @schema CodeCommitReactionForComment#reaction
   */
  readonly reaction?: CodeCommitReactionValueFormats;

  /**
   * @schema CodeCommitReactionForComment#reactionUsers
   */
  readonly reactionUsers?: string[];

  /**
   * @schema CodeCommitReactionForComment#reactionsFromDeletedUsersCount
   */
  readonly reactionsFromDeletedUsersCount?: number;

}

/**
 * Converts an object of type 'CodeCommitReactionForComment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitReactionForComment(obj: CodeCommitReactionForComment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'reaction': toJson_CodeCommitReactionValueFormats(obj.reaction),
    'reactionUsers': obj.reactionUsers?.map(y => y),
    'reactionsFromDeletedUsersCount': obj.reactionsFromDeletedUsersCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitCommentsForComparedCommit
 */
export interface CodeCommitCommentsForComparedCommit {
  /**
   * @schema CodeCommitCommentsForComparedCommit#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema CodeCommitCommentsForComparedCommit#beforeCommitId
   */
  readonly beforeCommitId?: string;

  /**
   * @schema CodeCommitCommentsForComparedCommit#afterCommitId
   */
  readonly afterCommitId?: string;

  /**
   * @schema CodeCommitCommentsForComparedCommit#beforeBlobId
   */
  readonly beforeBlobId?: string;

  /**
   * @schema CodeCommitCommentsForComparedCommit#afterBlobId
   */
  readonly afterBlobId?: string;

  /**
   * @schema CodeCommitCommentsForComparedCommit#location
   */
  readonly location?: CodeCommitLocation;

  /**
   * @schema CodeCommitCommentsForComparedCommit#comments
   */
  readonly comments?: CodeCommitComment[];

}

/**
 * Converts an object of type 'CodeCommitCommentsForComparedCommit' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitCommentsForComparedCommit(obj: CodeCommitCommentsForComparedCommit | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'beforeCommitId': obj.beforeCommitId,
    'afterCommitId': obj.afterCommitId,
    'beforeBlobId': obj.beforeBlobId,
    'afterBlobId': obj.afterBlobId,
    'location': toJson_CodeCommitLocation(obj.location),
    'comments': obj.comments?.map(y => toJson_CodeCommitComment(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitCommentsForPullRequest
 */
export interface CodeCommitCommentsForPullRequest {
  /**
   * @schema CodeCommitCommentsForPullRequest#pullRequestId
   */
  readonly pullRequestId?: string;

  /**
   * @schema CodeCommitCommentsForPullRequest#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema CodeCommitCommentsForPullRequest#beforeCommitId
   */
  readonly beforeCommitId?: string;

  /**
   * @schema CodeCommitCommentsForPullRequest#afterCommitId
   */
  readonly afterCommitId?: string;

  /**
   * @schema CodeCommitCommentsForPullRequest#beforeBlobId
   */
  readonly beforeBlobId?: string;

  /**
   * @schema CodeCommitCommentsForPullRequest#afterBlobId
   */
  readonly afterBlobId?: string;

  /**
   * @schema CodeCommitCommentsForPullRequest#location
   */
  readonly location?: CodeCommitLocation;

  /**
   * @schema CodeCommitCommentsForPullRequest#comments
   */
  readonly comments?: CodeCommitComment[];

}

/**
 * Converts an object of type 'CodeCommitCommentsForPullRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitCommentsForPullRequest(obj: CodeCommitCommentsForPullRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pullRequestId': obj.pullRequestId,
    'repositoryName': obj.repositoryName,
    'beforeCommitId': obj.beforeCommitId,
    'afterCommitId': obj.afterCommitId,
    'beforeBlobId': obj.beforeBlobId,
    'afterBlobId': obj.afterBlobId,
    'location': toJson_CodeCommitLocation(obj.location),
    'comments': obj.comments?.map(y => toJson_CodeCommitComment(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitDifference
 */
export interface CodeCommitDifference {
  /**
   * @schema CodeCommitDifference#beforeBlob
   */
  readonly beforeBlob?: CodeCommitBlobMetadata;

  /**
   * @schema CodeCommitDifference#afterBlob
   */
  readonly afterBlob?: CodeCommitBlobMetadata;

  /**
   * @schema CodeCommitDifference#changeType
   */
  readonly changeType?: string;

}

/**
 * Converts an object of type 'CodeCommitDifference' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitDifference(obj: CodeCommitDifference | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'beforeBlob': toJson_CodeCommitBlobMetadata(obj.beforeBlob),
    'afterBlob': toJson_CodeCommitBlobMetadata(obj.afterBlob),
    'changeType': obj.changeType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitFolder
 */
export interface CodeCommitFolder {
  /**
   * @schema CodeCommitFolder#treeId
   */
  readonly treeId?: string;

  /**
   * @schema CodeCommitFolder#absolutePath
   */
  readonly absolutePath?: string;

  /**
   * @schema CodeCommitFolder#relativePath
   */
  readonly relativePath?: string;

}

/**
 * Converts an object of type 'CodeCommitFolder' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitFolder(obj: CodeCommitFolder | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'treeId': obj.treeId,
    'absolutePath': obj.absolutePath,
    'relativePath': obj.relativePath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitFile
 */
export interface CodeCommitFile {
  /**
   * @schema CodeCommitFile#blobId
   */
  readonly blobId?: string;

  /**
   * @schema CodeCommitFile#absolutePath
   */
  readonly absolutePath?: string;

  /**
   * @schema CodeCommitFile#relativePath
   */
  readonly relativePath?: string;

  /**
   * @schema CodeCommitFile#fileMode
   */
  readonly fileMode?: string;

}

/**
 * Converts an object of type 'CodeCommitFile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitFile(obj: CodeCommitFile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'blobId': obj.blobId,
    'absolutePath': obj.absolutePath,
    'relativePath': obj.relativePath,
    'fileMode': obj.fileMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitSymbolicLink
 */
export interface CodeCommitSymbolicLink {
  /**
   * @schema CodeCommitSymbolicLink#blobId
   */
  readonly blobId?: string;

  /**
   * @schema CodeCommitSymbolicLink#absolutePath
   */
  readonly absolutePath?: string;

  /**
   * @schema CodeCommitSymbolicLink#relativePath
   */
  readonly relativePath?: string;

  /**
   * @schema CodeCommitSymbolicLink#fileMode
   */
  readonly fileMode?: string;

}

/**
 * Converts an object of type 'CodeCommitSymbolicLink' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitSymbolicLink(obj: CodeCommitSymbolicLink | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'blobId': obj.blobId,
    'absolutePath': obj.absolutePath,
    'relativePath': obj.relativePath,
    'fileMode': obj.fileMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitSubModule
 */
export interface CodeCommitSubModule {
  /**
   * @schema CodeCommitSubModule#commitId
   */
  readonly commitId?: string;

  /**
   * @schema CodeCommitSubModule#absolutePath
   */
  readonly absolutePath?: string;

  /**
   * @schema CodeCommitSubModule#relativePath
   */
  readonly relativePath?: string;

}

/**
 * Converts an object of type 'CodeCommitSubModule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitSubModule(obj: CodeCommitSubModule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'commitId': obj.commitId,
    'absolutePath': obj.absolutePath,
    'relativePath': obj.relativePath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitApproval
 */
export interface CodeCommitApproval {
  /**
   * @schema CodeCommitApproval#userArn
   */
  readonly userArn?: string;

  /**
   * @schema CodeCommitApproval#approvalState
   */
  readonly approvalState?: string;

}

/**
 * Converts an object of type 'CodeCommitApproval' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitApproval(obj: CodeCommitApproval | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'userArn': obj.userArn,
    'approvalState': obj.approvalState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitRepositoryTrigger
 */
export interface CodeCommitRepositoryTrigger {
  /**
   * @schema CodeCommitRepositoryTrigger#name
   */
  readonly name: string;

  /**
   * @schema CodeCommitRepositoryTrigger#destinationArn
   */
  readonly destinationArn: string;

  /**
   * @schema CodeCommitRepositoryTrigger#customData
   */
  readonly customData?: string;

  /**
   * @schema CodeCommitRepositoryTrigger#branches
   */
  readonly branches?: string[];

  /**
   * @schema CodeCommitRepositoryTrigger#events
   */
  readonly events: string[];

}

/**
 * Converts an object of type 'CodeCommitRepositoryTrigger' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitRepositoryTrigger(obj: CodeCommitRepositoryTrigger | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'destinationArn': obj.destinationArn,
    'customData': obj.customData,
    'branches': obj.branches?.map(y => y),
    'events': obj.events?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitRepositoryNameIdPair
 */
export interface CodeCommitRepositoryNameIdPair {
  /**
   * @schema CodeCommitRepositoryNameIdPair#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema CodeCommitRepositoryNameIdPair#repositoryId
   */
  readonly repositoryId?: string;

}

/**
 * Converts an object of type 'CodeCommitRepositoryNameIdPair' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitRepositoryNameIdPair(obj: CodeCommitRepositoryNameIdPair | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'repositoryId': obj.repositoryId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitLocation
 */
export interface CodeCommitLocation {
  /**
   * @schema CodeCommitLocation#filePath
   */
  readonly filePath?: string;

  /**
   * @schema CodeCommitLocation#filePosition
   */
  readonly filePosition?: number;

  /**
   * @schema CodeCommitLocation#relativeFileVersion
   */
  readonly relativeFileVersion?: string;

}

/**
 * Converts an object of type 'CodeCommitLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitLocation(obj: CodeCommitLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filePath': obj.filePath,
    'filePosition': obj.filePosition,
    'relativeFileVersion': obj.relativeFileVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitRepositoryTriggerExecutionFailure
 */
export interface CodeCommitRepositoryTriggerExecutionFailure {
  /**
   * @schema CodeCommitRepositoryTriggerExecutionFailure#trigger
   */
  readonly trigger?: string;

  /**
   * @schema CodeCommitRepositoryTriggerExecutionFailure#failureMessage
   */
  readonly failureMessage?: string;

}

/**
 * Converts an object of type 'CodeCommitRepositoryTriggerExecutionFailure' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitRepositoryTriggerExecutionFailure(obj: CodeCommitRepositoryTriggerExecutionFailure | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'trigger': obj.trigger,
    'failureMessage': obj.failureMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitUserInfo
 */
export interface CodeCommitUserInfo {
  /**
   * @schema CodeCommitUserInfo#name
   */
  readonly name?: string;

  /**
   * @schema CodeCommitUserInfo#email
   */
  readonly email?: string;

  /**
   * @schema CodeCommitUserInfo#date
   */
  readonly date?: string;

}

/**
 * Converts an object of type 'CodeCommitUserInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitUserInfo(obj: CodeCommitUserInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'email': obj.email,
    'date': obj.date,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitSourceFileSpecifier
 */
export interface CodeCommitSourceFileSpecifier {
  /**
   * @schema CodeCommitSourceFileSpecifier#filePath
   */
  readonly filePath: string;

  /**
   * @schema CodeCommitSourceFileSpecifier#isMove
   */
  readonly isMove?: boolean;

}

/**
 * Converts an object of type 'CodeCommitSourceFileSpecifier' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitSourceFileSpecifier(obj: CodeCommitSourceFileSpecifier | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filePath': obj.filePath,
    'isMove': obj.isMove,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitPullRequestTarget
 */
export interface CodeCommitPullRequestTarget {
  /**
   * @schema CodeCommitPullRequestTarget#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema CodeCommitPullRequestTarget#sourceReference
   */
  readonly sourceReference?: string;

  /**
   * @schema CodeCommitPullRequestTarget#destinationReference
   */
  readonly destinationReference?: string;

  /**
   * @schema CodeCommitPullRequestTarget#destinationCommit
   */
  readonly destinationCommit?: string;

  /**
   * @schema CodeCommitPullRequestTarget#sourceCommit
   */
  readonly sourceCommit?: string;

  /**
   * @schema CodeCommitPullRequestTarget#mergeBase
   */
  readonly mergeBase?: string;

  /**
   * @schema CodeCommitPullRequestTarget#mergeMetadata
   */
  readonly mergeMetadata?: CodeCommitMergeMetadata;

}

/**
 * Converts an object of type 'CodeCommitPullRequestTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitPullRequestTarget(obj: CodeCommitPullRequestTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'sourceReference': obj.sourceReference,
    'destinationReference': obj.destinationReference,
    'destinationCommit': obj.destinationCommit,
    'sourceCommit': obj.sourceCommit,
    'mergeBase': obj.mergeBase,
    'mergeMetadata': toJson_CodeCommitMergeMetadata(obj.mergeMetadata),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitOriginApprovalRuleTemplate
 */
export interface CodeCommitOriginApprovalRuleTemplate {
  /**
   * @schema CodeCommitOriginApprovalRuleTemplate#approvalRuleTemplateId
   */
  readonly approvalRuleTemplateId?: string;

  /**
   * @schema CodeCommitOriginApprovalRuleTemplate#approvalRuleTemplateName
   */
  readonly approvalRuleTemplateName?: string;

}

/**
 * Converts an object of type 'CodeCommitOriginApprovalRuleTemplate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitOriginApprovalRuleTemplate(obj: CodeCommitOriginApprovalRuleTemplate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'approvalRuleTemplateId': obj.approvalRuleTemplateId,
    'approvalRuleTemplateName': obj.approvalRuleTemplateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitReplaceContentEntry
 */
export interface CodeCommitReplaceContentEntry {
  /**
   * @schema CodeCommitReplaceContentEntry#filePath
   */
  readonly filePath: string;

  /**
   * @schema CodeCommitReplaceContentEntry#replacementType
   */
  readonly replacementType: string;

  /**
   * @schema CodeCommitReplaceContentEntry#content
   */
  readonly content?: any;

  /**
   * @schema CodeCommitReplaceContentEntry#fileMode
   */
  readonly fileMode?: string;

}

/**
 * Converts an object of type 'CodeCommitReplaceContentEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitReplaceContentEntry(obj: CodeCommitReplaceContentEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filePath': obj.filePath,
    'replacementType': obj.replacementType,
    'content': obj.content,
    'fileMode': obj.fileMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitFileSizes
 */
export interface CodeCommitFileSizes {
  /**
   * @schema CodeCommitFileSizes#source
   */
  readonly source?: number;

  /**
   * @schema CodeCommitFileSizes#destination
   */
  readonly destination?: number;

  /**
   * @schema CodeCommitFileSizes#base
   */
  readonly base?: number;

}

/**
 * Converts an object of type 'CodeCommitFileSizes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitFileSizes(obj: CodeCommitFileSizes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'source': obj.source,
    'destination': obj.destination,
    'base': obj.base,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitFileModes
 */
export interface CodeCommitFileModes {
  /**
   * @schema CodeCommitFileModes#source
   */
  readonly source?: string;

  /**
   * @schema CodeCommitFileModes#destination
   */
  readonly destination?: string;

  /**
   * @schema CodeCommitFileModes#base
   */
  readonly base?: string;

}

/**
 * Converts an object of type 'CodeCommitFileModes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitFileModes(obj: CodeCommitFileModes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'source': obj.source,
    'destination': obj.destination,
    'base': obj.base,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitObjectTypes
 */
export interface CodeCommitObjectTypes {
  /**
   * @schema CodeCommitObjectTypes#source
   */
  readonly source?: string;

  /**
   * @schema CodeCommitObjectTypes#destination
   */
  readonly destination?: string;

  /**
   * @schema CodeCommitObjectTypes#base
   */
  readonly base?: string;

}

/**
 * Converts an object of type 'CodeCommitObjectTypes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitObjectTypes(obj: CodeCommitObjectTypes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'source': obj.source,
    'destination': obj.destination,
    'base': obj.base,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitIsBinaryFile
 */
export interface CodeCommitIsBinaryFile {
  /**
   * @schema CodeCommitIsBinaryFile#source
   */
  readonly source?: boolean;

  /**
   * @schema CodeCommitIsBinaryFile#destination
   */
  readonly destination?: boolean;

  /**
   * @schema CodeCommitIsBinaryFile#base
   */
  readonly base?: boolean;

}

/**
 * Converts an object of type 'CodeCommitIsBinaryFile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitIsBinaryFile(obj: CodeCommitIsBinaryFile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'source': obj.source,
    'destination': obj.destination,
    'base': obj.base,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitMergeOperations
 */
export interface CodeCommitMergeOperations {
  /**
   * @schema CodeCommitMergeOperations#source
   */
  readonly source?: string;

  /**
   * @schema CodeCommitMergeOperations#destination
   */
  readonly destination?: string;

}

/**
 * Converts an object of type 'CodeCommitMergeOperations' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitMergeOperations(obj: CodeCommitMergeOperations | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'source': obj.source,
    'destination': obj.destination,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitMergeHunkDetail
 */
export interface CodeCommitMergeHunkDetail {
  /**
   * @schema CodeCommitMergeHunkDetail#startLine
   */
  readonly startLine?: number;

  /**
   * @schema CodeCommitMergeHunkDetail#endLine
   */
  readonly endLine?: number;

  /**
   * @schema CodeCommitMergeHunkDetail#hunkContent
   */
  readonly hunkContent?: string;

}

/**
 * Converts an object of type 'CodeCommitMergeHunkDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitMergeHunkDetail(obj: CodeCommitMergeHunkDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'startLine': obj.startLine,
    'endLine': obj.endLine,
    'hunkContent': obj.hunkContent,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitPullRequestCreatedEventMetadata
 */
export interface CodeCommitPullRequestCreatedEventMetadata {
  /**
   * @schema CodeCommitPullRequestCreatedEventMetadata#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema CodeCommitPullRequestCreatedEventMetadata#sourceCommitId
   */
  readonly sourceCommitId?: string;

  /**
   * @schema CodeCommitPullRequestCreatedEventMetadata#destinationCommitId
   */
  readonly destinationCommitId?: string;

  /**
   * @schema CodeCommitPullRequestCreatedEventMetadata#mergeBase
   */
  readonly mergeBase?: string;

}

/**
 * Converts an object of type 'CodeCommitPullRequestCreatedEventMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitPullRequestCreatedEventMetadata(obj: CodeCommitPullRequestCreatedEventMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'sourceCommitId': obj.sourceCommitId,
    'destinationCommitId': obj.destinationCommitId,
    'mergeBase': obj.mergeBase,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitPullRequestStatusChangedEventMetadata
 */
export interface CodeCommitPullRequestStatusChangedEventMetadata {
  /**
   * @schema CodeCommitPullRequestStatusChangedEventMetadata#pullRequestStatus
   */
  readonly pullRequestStatus?: string;

}

/**
 * Converts an object of type 'CodeCommitPullRequestStatusChangedEventMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitPullRequestStatusChangedEventMetadata(obj: CodeCommitPullRequestStatusChangedEventMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pullRequestStatus': obj.pullRequestStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitPullRequestSourceReferenceUpdatedEventMetadata
 */
export interface CodeCommitPullRequestSourceReferenceUpdatedEventMetadata {
  /**
   * @schema CodeCommitPullRequestSourceReferenceUpdatedEventMetadata#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema CodeCommitPullRequestSourceReferenceUpdatedEventMetadata#beforeCommitId
   */
  readonly beforeCommitId?: string;

  /**
   * @schema CodeCommitPullRequestSourceReferenceUpdatedEventMetadata#afterCommitId
   */
  readonly afterCommitId?: string;

  /**
   * @schema CodeCommitPullRequestSourceReferenceUpdatedEventMetadata#mergeBase
   */
  readonly mergeBase?: string;

}

/**
 * Converts an object of type 'CodeCommitPullRequestSourceReferenceUpdatedEventMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitPullRequestSourceReferenceUpdatedEventMetadata(obj: CodeCommitPullRequestSourceReferenceUpdatedEventMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'beforeCommitId': obj.beforeCommitId,
    'afterCommitId': obj.afterCommitId,
    'mergeBase': obj.mergeBase,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitPullRequestMergedStateChangedEventMetadata
 */
export interface CodeCommitPullRequestMergedStateChangedEventMetadata {
  /**
   * @schema CodeCommitPullRequestMergedStateChangedEventMetadata#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema CodeCommitPullRequestMergedStateChangedEventMetadata#destinationReference
   */
  readonly destinationReference?: string;

  /**
   * @schema CodeCommitPullRequestMergedStateChangedEventMetadata#mergeMetadata
   */
  readonly mergeMetadata?: CodeCommitMergeMetadata;

}

/**
 * Converts an object of type 'CodeCommitPullRequestMergedStateChangedEventMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitPullRequestMergedStateChangedEventMetadata(obj: CodeCommitPullRequestMergedStateChangedEventMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repositoryName': obj.repositoryName,
    'destinationReference': obj.destinationReference,
    'mergeMetadata': toJson_CodeCommitMergeMetadata(obj.mergeMetadata),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitApprovalRuleEventMetadata
 */
export interface CodeCommitApprovalRuleEventMetadata {
  /**
   * @schema CodeCommitApprovalRuleEventMetadata#approvalRuleName
   */
  readonly approvalRuleName?: string;

  /**
   * @schema CodeCommitApprovalRuleEventMetadata#approvalRuleId
   */
  readonly approvalRuleId?: string;

  /**
   * @schema CodeCommitApprovalRuleEventMetadata#approvalRuleContent
   */
  readonly approvalRuleContent?: string;

}

/**
 * Converts an object of type 'CodeCommitApprovalRuleEventMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitApprovalRuleEventMetadata(obj: CodeCommitApprovalRuleEventMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'approvalRuleName': obj.approvalRuleName,
    'approvalRuleId': obj.approvalRuleId,
    'approvalRuleContent': obj.approvalRuleContent,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitApprovalStateChangedEventMetadata
 */
export interface CodeCommitApprovalStateChangedEventMetadata {
  /**
   * @schema CodeCommitApprovalStateChangedEventMetadata#revisionId
   */
  readonly revisionId?: string;

  /**
   * @schema CodeCommitApprovalStateChangedEventMetadata#approvalStatus
   */
  readonly approvalStatus?: string;

}

/**
 * Converts an object of type 'CodeCommitApprovalStateChangedEventMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitApprovalStateChangedEventMetadata(obj: CodeCommitApprovalStateChangedEventMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'revisionId': obj.revisionId,
    'approvalStatus': obj.approvalStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitApprovalRuleOverriddenEventMetadata
 */
export interface CodeCommitApprovalRuleOverriddenEventMetadata {
  /**
   * @schema CodeCommitApprovalRuleOverriddenEventMetadata#revisionId
   */
  readonly revisionId?: string;

  /**
   * @schema CodeCommitApprovalRuleOverriddenEventMetadata#overrideStatus
   */
  readonly overrideStatus?: string;

}

/**
 * Converts an object of type 'CodeCommitApprovalRuleOverriddenEventMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitApprovalRuleOverriddenEventMetadata(obj: CodeCommitApprovalRuleOverriddenEventMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'revisionId': obj.revisionId,
    'overrideStatus': obj.overrideStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitReactionValueFormats
 */
export interface CodeCommitReactionValueFormats {
  /**
   * @schema CodeCommitReactionValueFormats#emoji
   */
  readonly emoji?: string;

  /**
   * @schema CodeCommitReactionValueFormats#shortCode
   */
  readonly shortCode?: string;

  /**
   * @schema CodeCommitReactionValueFormats#unicode
   */
  readonly unicode?: string;

}

/**
 * Converts an object of type 'CodeCommitReactionValueFormats' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitReactionValueFormats(obj: CodeCommitReactionValueFormats | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'emoji': obj.emoji,
    'shortCode': obj.shortCode,
    'unicode': obj.unicode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitBlobMetadata
 */
export interface CodeCommitBlobMetadata {
  /**
   * @schema CodeCommitBlobMetadata#blobId
   */
  readonly blobId?: string;

  /**
   * @schema CodeCommitBlobMetadata#path
   */
  readonly path?: string;

  /**
   * @schema CodeCommitBlobMetadata#mode
   */
  readonly mode?: string;

}

/**
 * Converts an object of type 'CodeCommitBlobMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitBlobMetadata(obj: CodeCommitBlobMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'blobId': obj.blobId,
    'path': obj.path,
    'mode': obj.mode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeCommitMergeMetadata
 */
export interface CodeCommitMergeMetadata {
  /**
   * @schema CodeCommitMergeMetadata#isMerged
   */
  readonly isMerged?: boolean;

  /**
   * @schema CodeCommitMergeMetadata#mergedBy
   */
  readonly mergedBy?: string;

  /**
   * @schema CodeCommitMergeMetadata#mergeCommitId
   */
  readonly mergeCommitId?: string;

  /**
   * @schema CodeCommitMergeMetadata#mergeOption
   */
  readonly mergeOption?: string;

}

/**
 * Converts an object of type 'CodeCommitMergeMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeCommitMergeMetadata(obj: CodeCommitMergeMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'isMerged': obj.isMerged,
    'mergedBy': obj.mergedBy,
    'mergeCommitId': obj.mergeCommitId,
    'mergeOption': obj.mergeOption,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
