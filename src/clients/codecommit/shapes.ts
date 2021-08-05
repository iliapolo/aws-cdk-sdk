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
 * @schema CodeCommitBatchGetRepositoriesInput
 */
export interface CodeCommitBatchGetRepositoriesInput {
  /**
   * @schema CodeCommitBatchGetRepositoriesInput#repositoryNames
   */
  readonly repositoryNames: string[];

}

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
 * @schema CodeCommitCreateApprovalRuleTemplateOutput
 */
export interface CodeCommitCreateApprovalRuleTemplateOutput {
  /**
   * @schema CodeCommitCreateApprovalRuleTemplateOutput#approvalRuleTemplate
   */
  readonly approvalRuleTemplate: CodeCommitApprovalRuleTemplate;

}

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
 * @schema CodeCommitCreatePullRequestOutput
 */
export interface CodeCommitCreatePullRequestOutput {
  /**
   * @schema CodeCommitCreatePullRequestOutput#pullRequest
   */
  readonly pullRequest: CodeCommitPullRequest;

}

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
 * @schema CodeCommitCreatePullRequestApprovalRuleOutput
 */
export interface CodeCommitCreatePullRequestApprovalRuleOutput {
  /**
   * @schema CodeCommitCreatePullRequestApprovalRuleOutput#approvalRule
   */
  readonly approvalRule: CodeCommitApprovalRule;

}

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
 * @schema CodeCommitCreateRepositoryOutput
 */
export interface CodeCommitCreateRepositoryOutput {
  /**
   * @schema CodeCommitCreateRepositoryOutput#repositoryMetadata
   */
  readonly repositoryMetadata?: CodeCommitRepositoryMetadata;

}

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
 * @schema CodeCommitDeleteApprovalRuleTemplateInput
 */
export interface CodeCommitDeleteApprovalRuleTemplateInput {
  /**
   * @schema CodeCommitDeleteApprovalRuleTemplateInput#approvalRuleTemplateName
   */
  readonly approvalRuleTemplateName: string;

}

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
 * @schema CodeCommitDeleteBranchOutput
 */
export interface CodeCommitDeleteBranchOutput {
  /**
   * @schema CodeCommitDeleteBranchOutput#deletedBranch
   */
  readonly deletedBranch?: CodeCommitBranchInfo;

}

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
 * @schema CodeCommitDeleteCommentContentOutput
 */
export interface CodeCommitDeleteCommentContentOutput {
  /**
   * @schema CodeCommitDeleteCommentContentOutput#comment
   */
  readonly comment?: CodeCommitComment;

}

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
 * @schema CodeCommitDeletePullRequestApprovalRuleOutput
 */
export interface CodeCommitDeletePullRequestApprovalRuleOutput {
  /**
   * @schema CodeCommitDeletePullRequestApprovalRuleOutput#approvalRuleId
   */
  readonly approvalRuleId: string;

}

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
 * @schema CodeCommitDeleteRepositoryOutput
 */
export interface CodeCommitDeleteRepositoryOutput {
  /**
   * @schema CodeCommitDeleteRepositoryOutput#repositoryId
   */
  readonly repositoryId?: string;

}

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
 * @schema CodeCommitEvaluatePullRequestApprovalRulesOutput
 */
export interface CodeCommitEvaluatePullRequestApprovalRulesOutput {
  /**
   * @schema CodeCommitEvaluatePullRequestApprovalRulesOutput#evaluation
   */
  readonly evaluation: CodeCommitEvaluation;

}

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
 * @schema CodeCommitGetApprovalRuleTemplateOutput
 */
export interface CodeCommitGetApprovalRuleTemplateOutput {
  /**
   * @schema CodeCommitGetApprovalRuleTemplateOutput#approvalRuleTemplate
   */
  readonly approvalRuleTemplate: CodeCommitApprovalRuleTemplate;

}

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
 * @schema CodeCommitGetBlobOutput
 */
export interface CodeCommitGetBlobOutput {
  /**
   * @schema CodeCommitGetBlobOutput#content
   */
  readonly content: any;

}

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
 * @schema CodeCommitGetBranchOutput
 */
export interface CodeCommitGetBranchOutput {
  /**
   * @schema CodeCommitGetBranchOutput#branch
   */
  readonly branch?: CodeCommitBranchInfo;

}

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
 * @schema CodeCommitGetCommentOutput
 */
export interface CodeCommitGetCommentOutput {
  /**
   * @schema CodeCommitGetCommentOutput#comment
   */
  readonly comment?: CodeCommitComment;

}

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
 * @schema CodeCommitGetCommitOutput
 */
export interface CodeCommitGetCommitOutput {
  /**
   * @schema CodeCommitGetCommitOutput#commit
   */
  readonly commit: CodeCommitCommit;

}

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
 * @schema CodeCommitGetPullRequestInput
 */
export interface CodeCommitGetPullRequestInput {
  /**
   * @schema CodeCommitGetPullRequestInput#pullRequestId
   */
  readonly pullRequestId: string;

}

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
 * @schema CodeCommitGetPullRequestApprovalStatesOutput
 */
export interface CodeCommitGetPullRequestApprovalStatesOutput {
  /**
   * @schema CodeCommitGetPullRequestApprovalStatesOutput#approvals
   */
  readonly approvals?: CodeCommitApproval[];

}

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
 * @schema CodeCommitGetRepositoryInput
 */
export interface CodeCommitGetRepositoryInput {
  /**
   * @schema CodeCommitGetRepositoryInput#repositoryName
   */
  readonly repositoryName: string;

}

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
 * @schema CodeCommitGetRepositoryTriggersInput
 */
export interface CodeCommitGetRepositoryTriggersInput {
  /**
   * @schema CodeCommitGetRepositoryTriggersInput#repositoryName
   */
  readonly repositoryName: string;

}

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
 * @schema CodeCommitMergePullRequestByFastForwardOutput
 */
export interface CodeCommitMergePullRequestByFastForwardOutput {
  /**
   * @schema CodeCommitMergePullRequestByFastForwardOutput#pullRequest
   */
  readonly pullRequest?: CodeCommitPullRequest;

}

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
 * @schema CodeCommitMergePullRequestBySquashOutput
 */
export interface CodeCommitMergePullRequestBySquashOutput {
  /**
   * @schema CodeCommitMergePullRequestBySquashOutput#pullRequest
   */
  readonly pullRequest?: CodeCommitPullRequest;

}

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
 * @schema CodeCommitMergePullRequestByThreeWayOutput
 */
export interface CodeCommitMergePullRequestByThreeWayOutput {
  /**
   * @schema CodeCommitMergePullRequestByThreeWayOutput#pullRequest
   */
  readonly pullRequest?: CodeCommitPullRequest;

}

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
 * @schema CodeCommitPostCommentReplyOutput
 */
export interface CodeCommitPostCommentReplyOutput {
  /**
   * @schema CodeCommitPostCommentReplyOutput#comment
   */
  readonly comment?: CodeCommitComment;

}

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
 * @schema CodeCommitPutRepositoryTriggersOutput
 */
export interface CodeCommitPutRepositoryTriggersOutput {
  /**
   * @schema CodeCommitPutRepositoryTriggersOutput#configurationId
   */
  readonly configurationId?: string;

}

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
 * @schema CodeCommitUpdateApprovalRuleTemplateContentOutput
 */
export interface CodeCommitUpdateApprovalRuleTemplateContentOutput {
  /**
   * @schema CodeCommitUpdateApprovalRuleTemplateContentOutput#approvalRuleTemplate
   */
  readonly approvalRuleTemplate: CodeCommitApprovalRuleTemplate;

}

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
 * @schema CodeCommitUpdateApprovalRuleTemplateDescriptionOutput
 */
export interface CodeCommitUpdateApprovalRuleTemplateDescriptionOutput {
  /**
   * @schema CodeCommitUpdateApprovalRuleTemplateDescriptionOutput#approvalRuleTemplate
   */
  readonly approvalRuleTemplate: CodeCommitApprovalRuleTemplate;

}

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
 * @schema CodeCommitUpdateApprovalRuleTemplateNameOutput
 */
export interface CodeCommitUpdateApprovalRuleTemplateNameOutput {
  /**
   * @schema CodeCommitUpdateApprovalRuleTemplateNameOutput#approvalRuleTemplate
   */
  readonly approvalRuleTemplate: CodeCommitApprovalRuleTemplate;

}

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
 * @schema CodeCommitUpdateCommentOutput
 */
export interface CodeCommitUpdateCommentOutput {
  /**
   * @schema CodeCommitUpdateCommentOutput#comment
   */
  readonly comment?: CodeCommitComment;

}

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
 * @schema CodeCommitUpdatePullRequestApprovalRuleContentOutput
 */
export interface CodeCommitUpdatePullRequestApprovalRuleContentOutput {
  /**
   * @schema CodeCommitUpdatePullRequestApprovalRuleContentOutput#approvalRule
   */
  readonly approvalRule: CodeCommitApprovalRule;

}

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
 * @schema CodeCommitUpdatePullRequestDescriptionOutput
 */
export interface CodeCommitUpdatePullRequestDescriptionOutput {
  /**
   * @schema CodeCommitUpdatePullRequestDescriptionOutput#pullRequest
   */
  readonly pullRequest: CodeCommitPullRequest;

}

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
 * @schema CodeCommitUpdatePullRequestStatusOutput
 */
export interface CodeCommitUpdatePullRequestStatusOutput {
  /**
   * @schema CodeCommitUpdatePullRequestStatusOutput#pullRequest
   */
  readonly pullRequest: CodeCommitPullRequest;

}

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
 * @schema CodeCommitUpdatePullRequestTitleOutput
 */
export interface CodeCommitUpdatePullRequestTitleOutput {
  /**
   * @schema CodeCommitUpdatePullRequestTitleOutput#pullRequest
   */
  readonly pullRequest: CodeCommitPullRequest;

}

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
 * @schema CodeCommitDeleteFileEntry
 */
export interface CodeCommitDeleteFileEntry {
  /**
   * @schema CodeCommitDeleteFileEntry#filePath
   */
  readonly filePath: string;

}

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
 * @schema CodeCommitPullRequestStatusChangedEventMetadata
 */
export interface CodeCommitPullRequestStatusChangedEventMetadata {
  /**
   * @schema CodeCommitPullRequestStatusChangedEventMetadata#pullRequestStatus
   */
  readonly pullRequestStatus?: string;

}

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
