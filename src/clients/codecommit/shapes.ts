/**
 * @schema AssociateApprovalRuleTemplateWithRepositoryInput
 */
export interface AssociateApprovalRuleTemplateWithRepositoryInput {
  /**
   * @schema AssociateApprovalRuleTemplateWithRepositoryInput#approvalRuleTemplateName
   */
  readonly approvalRuleTemplateName: string;

  /**
   * @schema AssociateApprovalRuleTemplateWithRepositoryInput#repositoryName
   */
  readonly repositoryName: string;

}

/**
 * @schema BatchAssociateApprovalRuleTemplateWithRepositoriesInput
 */
export interface BatchAssociateApprovalRuleTemplateWithRepositoriesInput {
  /**
   * @schema BatchAssociateApprovalRuleTemplateWithRepositoriesInput#approvalRuleTemplateName
   */
  readonly approvalRuleTemplateName: string;

  /**
   * @schema BatchAssociateApprovalRuleTemplateWithRepositoriesInput#repositoryNames
   */
  readonly repositoryNames: string[];

}

/**
 * @schema BatchAssociateApprovalRuleTemplateWithRepositoriesOutput
 */
export interface BatchAssociateApprovalRuleTemplateWithRepositoriesOutput {
  /**
   * @schema BatchAssociateApprovalRuleTemplateWithRepositoriesOutput#associatedRepositoryNames
   */
  readonly associatedRepositoryNames: string[];

  /**
   * @schema BatchAssociateApprovalRuleTemplateWithRepositoriesOutput#errors
   */
  readonly errors: BatchAssociateApprovalRuleTemplateWithRepositoriesError[];

}

/**
 * @schema BatchDescribeMergeConflictsInput
 */
export interface BatchDescribeMergeConflictsInput {
  /**
   * @schema BatchDescribeMergeConflictsInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema BatchDescribeMergeConflictsInput#destinationCommitSpecifier
   */
  readonly destinationCommitSpecifier: string;

  /**
   * @schema BatchDescribeMergeConflictsInput#sourceCommitSpecifier
   */
  readonly sourceCommitSpecifier: string;

  /**
   * @schema BatchDescribeMergeConflictsInput#mergeOption
   */
  readonly mergeOption: string;

  /**
   * @schema BatchDescribeMergeConflictsInput#maxMergeHunks
   */
  readonly maxMergeHunks?: number;

  /**
   * @schema BatchDescribeMergeConflictsInput#maxConflictFiles
   */
  readonly maxConflictFiles?: number;

  /**
   * @schema BatchDescribeMergeConflictsInput#filePaths
   */
  readonly filePaths?: string[];

  /**
   * @schema BatchDescribeMergeConflictsInput#conflictDetailLevel
   */
  readonly conflictDetailLevel?: string;

  /**
   * @schema BatchDescribeMergeConflictsInput#conflictResolutionStrategy
   */
  readonly conflictResolutionStrategy?: string;

  /**
   * @schema BatchDescribeMergeConflictsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BatchDescribeMergeConflictsOutput
 */
export interface BatchDescribeMergeConflictsOutput {
  /**
   * @schema BatchDescribeMergeConflictsOutput#conflicts
   */
  readonly conflicts: Conflict[];

  /**
   * @schema BatchDescribeMergeConflictsOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema BatchDescribeMergeConflictsOutput#errors
   */
  readonly errors?: BatchDescribeMergeConflictsError[];

  /**
   * @schema BatchDescribeMergeConflictsOutput#destinationCommitId
   */
  readonly destinationCommitId: string;

  /**
   * @schema BatchDescribeMergeConflictsOutput#sourceCommitId
   */
  readonly sourceCommitId: string;

  /**
   * @schema BatchDescribeMergeConflictsOutput#baseCommitId
   */
  readonly baseCommitId?: string;

}

/**
 * @schema BatchDisassociateApprovalRuleTemplateFromRepositoriesInput
 */
export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesInput {
  /**
   * @schema BatchDisassociateApprovalRuleTemplateFromRepositoriesInput#approvalRuleTemplateName
   */
  readonly approvalRuleTemplateName: string;

  /**
   * @schema BatchDisassociateApprovalRuleTemplateFromRepositoriesInput#repositoryNames
   */
  readonly repositoryNames: string[];

}

/**
 * @schema BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput
 */
export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput {
  /**
   * @schema BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput#disassociatedRepositoryNames
   */
  readonly disassociatedRepositoryNames: string[];

  /**
   * @schema BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput#errors
   */
  readonly errors: BatchDisassociateApprovalRuleTemplateFromRepositoriesError[];

}

/**
 * @schema BatchGetCommitsInput
 */
export interface BatchGetCommitsInput {
  /**
   * @schema BatchGetCommitsInput#commitIds
   */
  readonly commitIds: string[];

  /**
   * @schema BatchGetCommitsInput#repositoryName
   */
  readonly repositoryName: string;

}

/**
 * @schema BatchGetCommitsOutput
 */
export interface BatchGetCommitsOutput {
  /**
   * @schema BatchGetCommitsOutput#commits
   */
  readonly commits?: Commit[];

  /**
   * @schema BatchGetCommitsOutput#errors
   */
  readonly errors?: BatchGetCommitsError[];

}

/**
 * @schema BatchGetRepositoriesInput
 */
export interface BatchGetRepositoriesInput {
  /**
   * @schema BatchGetRepositoriesInput#repositoryNames
   */
  readonly repositoryNames: string[];

}

/**
 * @schema BatchGetRepositoriesOutput
 */
export interface BatchGetRepositoriesOutput {
  /**
   * @schema BatchGetRepositoriesOutput#repositories
   */
  readonly repositories?: RepositoryMetadata[];

  /**
   * @schema BatchGetRepositoriesOutput#repositoriesNotFound
   */
  readonly repositoriesNotFound?: string[];

}

/**
 * @schema CreateApprovalRuleTemplateInput
 */
export interface CreateApprovalRuleTemplateInput {
  /**
   * @schema CreateApprovalRuleTemplateInput#approvalRuleTemplateName
   */
  readonly approvalRuleTemplateName: string;

  /**
   * @schema CreateApprovalRuleTemplateInput#approvalRuleTemplateContent
   */
  readonly approvalRuleTemplateContent: string;

  /**
   * @schema CreateApprovalRuleTemplateInput#approvalRuleTemplateDescription
   */
  readonly approvalRuleTemplateDescription?: string;

}

/**
 * @schema CreateApprovalRuleTemplateOutput
 */
export interface CreateApprovalRuleTemplateOutput {
  /**
   * @schema CreateApprovalRuleTemplateOutput#approvalRuleTemplate
   */
  readonly approvalRuleTemplate: ApprovalRuleTemplate;

}

/**
 * @schema CreateBranchInput
 */
export interface CreateBranchInput {
  /**
   * @schema CreateBranchInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CreateBranchInput#branchName
   */
  readonly branchName: string;

  /**
   * @schema CreateBranchInput#commitId
   */
  readonly commitId: string;

}

/**
 * @schema CreateCommitInput
 */
export interface CreateCommitInput {
  /**
   * @schema CreateCommitInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CreateCommitInput#branchName
   */
  readonly branchName: string;

  /**
   * @schema CreateCommitInput#parentCommitId
   */
  readonly parentCommitId?: string;

  /**
   * @schema CreateCommitInput#authorName
   */
  readonly authorName?: string;

  /**
   * @schema CreateCommitInput#email
   */
  readonly email?: string;

  /**
   * @schema CreateCommitInput#commitMessage
   */
  readonly commitMessage?: string;

  /**
   * @schema CreateCommitInput#keepEmptyFolders
   */
  readonly keepEmptyFolders?: boolean;

  /**
   * @schema CreateCommitInput#putFiles
   */
  readonly putFiles?: PutFileEntry[];

  /**
   * @schema CreateCommitInput#deleteFiles
   */
  readonly deleteFiles?: DeleteFileEntry[];

  /**
   * @schema CreateCommitInput#setFileModes
   */
  readonly setFileModes?: SetFileModeEntry[];

}

/**
 * @schema CreateCommitOutput
 */
export interface CreateCommitOutput {
  /**
   * @schema CreateCommitOutput#commitId
   */
  readonly commitId?: string;

  /**
   * @schema CreateCommitOutput#treeId
   */
  readonly treeId?: string;

  /**
   * @schema CreateCommitOutput#filesAdded
   */
  readonly filesAdded?: FileMetadata[];

  /**
   * @schema CreateCommitOutput#filesUpdated
   */
  readonly filesUpdated?: FileMetadata[];

  /**
   * @schema CreateCommitOutput#filesDeleted
   */
  readonly filesDeleted?: FileMetadata[];

}

/**
 * @schema CreatePullRequestInput
 */
export interface CreatePullRequestInput {
  /**
   * @schema CreatePullRequestInput#title
   */
  readonly title: string;

  /**
   * @schema CreatePullRequestInput#description
   */
  readonly description?: string;

  /**
   * @schema CreatePullRequestInput#targets
   */
  readonly targets: Target[];

  /**
   * @schema CreatePullRequestInput#clientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema CreatePullRequestOutput
 */
export interface CreatePullRequestOutput {
  /**
   * @schema CreatePullRequestOutput#pullRequest
   */
  readonly pullRequest: PullRequest;

}

/**
 * @schema CreatePullRequestApprovalRuleInput
 */
export interface CreatePullRequestApprovalRuleInput {
  /**
   * @schema CreatePullRequestApprovalRuleInput#pullRequestId
   */
  readonly pullRequestId: string;

  /**
   * @schema CreatePullRequestApprovalRuleInput#approvalRuleName
   */
  readonly approvalRuleName: string;

  /**
   * @schema CreatePullRequestApprovalRuleInput#approvalRuleContent
   */
  readonly approvalRuleContent: string;

}

/**
 * @schema CreatePullRequestApprovalRuleOutput
 */
export interface CreatePullRequestApprovalRuleOutput {
  /**
   * @schema CreatePullRequestApprovalRuleOutput#approvalRule
   */
  readonly approvalRule: ApprovalRule;

}

/**
 * @schema CreateRepositoryInput
 */
export interface CreateRepositoryInput {
  /**
   * @schema CreateRepositoryInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CreateRepositoryInput#repositoryDescription
   */
  readonly repositoryDescription?: string;

  /**
   * @schema CreateRepositoryInput#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateRepositoryOutput
 */
export interface CreateRepositoryOutput {
  /**
   * @schema CreateRepositoryOutput#repositoryMetadata
   */
  readonly repositoryMetadata?: RepositoryMetadata;

}

/**
 * @schema CreateUnreferencedMergeCommitInput
 */
export interface CreateUnreferencedMergeCommitInput {
  /**
   * @schema CreateUnreferencedMergeCommitInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema CreateUnreferencedMergeCommitInput#sourceCommitSpecifier
   */
  readonly sourceCommitSpecifier: string;

  /**
   * @schema CreateUnreferencedMergeCommitInput#destinationCommitSpecifier
   */
  readonly destinationCommitSpecifier: string;

  /**
   * @schema CreateUnreferencedMergeCommitInput#mergeOption
   */
  readonly mergeOption: string;

  /**
   * @schema CreateUnreferencedMergeCommitInput#conflictDetailLevel
   */
  readonly conflictDetailLevel?: string;

  /**
   * @schema CreateUnreferencedMergeCommitInput#conflictResolutionStrategy
   */
  readonly conflictResolutionStrategy?: string;

  /**
   * @schema CreateUnreferencedMergeCommitInput#authorName
   */
  readonly authorName?: string;

  /**
   * @schema CreateUnreferencedMergeCommitInput#email
   */
  readonly email?: string;

  /**
   * @schema CreateUnreferencedMergeCommitInput#commitMessage
   */
  readonly commitMessage?: string;

  /**
   * @schema CreateUnreferencedMergeCommitInput#keepEmptyFolders
   */
  readonly keepEmptyFolders?: boolean;

  /**
   * @schema CreateUnreferencedMergeCommitInput#conflictResolution
   */
  readonly conflictResolution?: ConflictResolution;

}

/**
 * @schema CreateUnreferencedMergeCommitOutput
 */
export interface CreateUnreferencedMergeCommitOutput {
  /**
   * @schema CreateUnreferencedMergeCommitOutput#commitId
   */
  readonly commitId?: string;

  /**
   * @schema CreateUnreferencedMergeCommitOutput#treeId
   */
  readonly treeId?: string;

}

/**
 * @schema DeleteApprovalRuleTemplateInput
 */
export interface DeleteApprovalRuleTemplateInput {
  /**
   * @schema DeleteApprovalRuleTemplateInput#approvalRuleTemplateName
   */
  readonly approvalRuleTemplateName: string;

}

/**
 * @schema DeleteApprovalRuleTemplateOutput
 */
export interface DeleteApprovalRuleTemplateOutput {
  /**
   * @schema DeleteApprovalRuleTemplateOutput#approvalRuleTemplateId
   */
  readonly approvalRuleTemplateId: string;

}

/**
 * @schema DeleteBranchInput
 */
export interface DeleteBranchInput {
  /**
   * @schema DeleteBranchInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema DeleteBranchInput#branchName
   */
  readonly branchName: string;

}

/**
 * @schema DeleteBranchOutput
 */
export interface DeleteBranchOutput {
  /**
   * @schema DeleteBranchOutput#deletedBranch
   */
  readonly deletedBranch?: BranchInfo;

}

/**
 * @schema DeleteCommentContentInput
 */
export interface DeleteCommentContentInput {
  /**
   * @schema DeleteCommentContentInput#commentId
   */
  readonly commentId: string;

}

/**
 * @schema DeleteCommentContentOutput
 */
export interface DeleteCommentContentOutput {
  /**
   * @schema DeleteCommentContentOutput#comment
   */
  readonly comment?: Comment;

}

/**
 * @schema DeleteFileInput
 */
export interface DeleteFileInput {
  /**
   * @schema DeleteFileInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema DeleteFileInput#branchName
   */
  readonly branchName: string;

  /**
   * @schema DeleteFileInput#filePath
   */
  readonly filePath: string;

  /**
   * @schema DeleteFileInput#parentCommitId
   */
  readonly parentCommitId: string;

  /**
   * @schema DeleteFileInput#keepEmptyFolders
   */
  readonly keepEmptyFolders?: boolean;

  /**
   * @schema DeleteFileInput#commitMessage
   */
  readonly commitMessage?: string;

  /**
   * @schema DeleteFileInput#name
   */
  readonly name?: string;

  /**
   * @schema DeleteFileInput#email
   */
  readonly email?: string;

}

/**
 * @schema DeleteFileOutput
 */
export interface DeleteFileOutput {
  /**
   * @schema DeleteFileOutput#commitId
   */
  readonly commitId: string;

  /**
   * @schema DeleteFileOutput#blobId
   */
  readonly blobId: string;

  /**
   * @schema DeleteFileOutput#treeId
   */
  readonly treeId: string;

  /**
   * @schema DeleteFileOutput#filePath
   */
  readonly filePath: string;

}

/**
 * @schema DeletePullRequestApprovalRuleInput
 */
export interface DeletePullRequestApprovalRuleInput {
  /**
   * @schema DeletePullRequestApprovalRuleInput#pullRequestId
   */
  readonly pullRequestId: string;

  /**
   * @schema DeletePullRequestApprovalRuleInput#approvalRuleName
   */
  readonly approvalRuleName: string;

}

/**
 * @schema DeletePullRequestApprovalRuleOutput
 */
export interface DeletePullRequestApprovalRuleOutput {
  /**
   * @schema DeletePullRequestApprovalRuleOutput#approvalRuleId
   */
  readonly approvalRuleId: string;

}

/**
 * @schema DeleteRepositoryInput
 */
export interface DeleteRepositoryInput {
  /**
   * @schema DeleteRepositoryInput#repositoryName
   */
  readonly repositoryName: string;

}

/**
 * @schema DeleteRepositoryOutput
 */
export interface DeleteRepositoryOutput {
  /**
   * @schema DeleteRepositoryOutput#repositoryId
   */
  readonly repositoryId?: string;

}

/**
 * @schema DescribeMergeConflictsInput
 */
export interface DescribeMergeConflictsInput {
  /**
   * @schema DescribeMergeConflictsInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema DescribeMergeConflictsInput#destinationCommitSpecifier
   */
  readonly destinationCommitSpecifier: string;

  /**
   * @schema DescribeMergeConflictsInput#sourceCommitSpecifier
   */
  readonly sourceCommitSpecifier: string;

  /**
   * @schema DescribeMergeConflictsInput#mergeOption
   */
  readonly mergeOption: string;

  /**
   * @schema DescribeMergeConflictsInput#maxMergeHunks
   */
  readonly maxMergeHunks?: number;

  /**
   * @schema DescribeMergeConflictsInput#filePath
   */
  readonly filePath: string;

  /**
   * @schema DescribeMergeConflictsInput#conflictDetailLevel
   */
  readonly conflictDetailLevel?: string;

  /**
   * @schema DescribeMergeConflictsInput#conflictResolutionStrategy
   */
  readonly conflictResolutionStrategy?: string;

  /**
   * @schema DescribeMergeConflictsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeMergeConflictsOutput
 */
export interface DescribeMergeConflictsOutput {
  /**
   * @schema DescribeMergeConflictsOutput#conflictMetadata
   */
  readonly conflictMetadata: ConflictMetadata;

  /**
   * @schema DescribeMergeConflictsOutput#mergeHunks
   */
  readonly mergeHunks: MergeHunk[];

  /**
   * @schema DescribeMergeConflictsOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeMergeConflictsOutput#destinationCommitId
   */
  readonly destinationCommitId: string;

  /**
   * @schema DescribeMergeConflictsOutput#sourceCommitId
   */
  readonly sourceCommitId: string;

  /**
   * @schema DescribeMergeConflictsOutput#baseCommitId
   */
  readonly baseCommitId?: string;

}

/**
 * @schema DescribePullRequestEventsInput
 */
export interface DescribePullRequestEventsInput {
  /**
   * @schema DescribePullRequestEventsInput#pullRequestId
   */
  readonly pullRequestId: string;

  /**
   * @schema DescribePullRequestEventsInput#pullRequestEventType
   */
  readonly pullRequestEventType?: string;

  /**
   * @schema DescribePullRequestEventsInput#actorArn
   */
  readonly actorArn?: string;

  /**
   * @schema DescribePullRequestEventsInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribePullRequestEventsInput#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribePullRequestEventsOutput
 */
export interface DescribePullRequestEventsOutput {
  /**
   * @schema DescribePullRequestEventsOutput#pullRequestEvents
   */
  readonly pullRequestEvents: PullRequestEvent[];

  /**
   * @schema DescribePullRequestEventsOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DisassociateApprovalRuleTemplateFromRepositoryInput
 */
export interface DisassociateApprovalRuleTemplateFromRepositoryInput {
  /**
   * @schema DisassociateApprovalRuleTemplateFromRepositoryInput#approvalRuleTemplateName
   */
  readonly approvalRuleTemplateName: string;

  /**
   * @schema DisassociateApprovalRuleTemplateFromRepositoryInput#repositoryName
   */
  readonly repositoryName: string;

}

/**
 * @schema EvaluatePullRequestApprovalRulesInput
 */
export interface EvaluatePullRequestApprovalRulesInput {
  /**
   * @schema EvaluatePullRequestApprovalRulesInput#pullRequestId
   */
  readonly pullRequestId: string;

  /**
   * @schema EvaluatePullRequestApprovalRulesInput#revisionId
   */
  readonly revisionId: string;

}

/**
 * @schema EvaluatePullRequestApprovalRulesOutput
 */
export interface EvaluatePullRequestApprovalRulesOutput {
  /**
   * @schema EvaluatePullRequestApprovalRulesOutput#evaluation
   */
  readonly evaluation: Evaluation;

}

/**
 * @schema GetApprovalRuleTemplateInput
 */
export interface GetApprovalRuleTemplateInput {
  /**
   * @schema GetApprovalRuleTemplateInput#approvalRuleTemplateName
   */
  readonly approvalRuleTemplateName: string;

}

/**
 * @schema GetApprovalRuleTemplateOutput
 */
export interface GetApprovalRuleTemplateOutput {
  /**
   * @schema GetApprovalRuleTemplateOutput#approvalRuleTemplate
   */
  readonly approvalRuleTemplate: ApprovalRuleTemplate;

}

/**
 * @schema GetBlobInput
 */
export interface GetBlobInput {
  /**
   * @schema GetBlobInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema GetBlobInput#blobId
   */
  readonly blobId: string;

}

/**
 * @schema GetBlobOutput
 */
export interface GetBlobOutput {
  /**
   * @schema GetBlobOutput#content
   */
  readonly content: any;

}

/**
 * @schema GetBranchInput
 */
export interface GetBranchInput {
  /**
   * @schema GetBranchInput#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema GetBranchInput#branchName
   */
  readonly branchName?: string;

}

/**
 * @schema GetBranchOutput
 */
export interface GetBranchOutput {
  /**
   * @schema GetBranchOutput#branch
   */
  readonly branch?: BranchInfo;

}

/**
 * @schema GetCommentInput
 */
export interface GetCommentInput {
  /**
   * @schema GetCommentInput#commentId
   */
  readonly commentId: string;

}

/**
 * @schema GetCommentOutput
 */
export interface GetCommentOutput {
  /**
   * @schema GetCommentOutput#comment
   */
  readonly comment?: Comment;

}

/**
 * @schema GetCommentReactionsInput
 */
export interface GetCommentReactionsInput {
  /**
   * @schema GetCommentReactionsInput#commentId
   */
  readonly commentId: string;

  /**
   * @schema GetCommentReactionsInput#reactionUserArn
   */
  readonly reactionUserArn?: string;

  /**
   * @schema GetCommentReactionsInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetCommentReactionsInput#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetCommentReactionsOutput
 */
export interface GetCommentReactionsOutput {
  /**
   * @schema GetCommentReactionsOutput#reactionsForComment
   */
  readonly reactionsForComment: ReactionForComment[];

  /**
   * @schema GetCommentReactionsOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetCommentsForComparedCommitInput
 */
export interface GetCommentsForComparedCommitInput {
  /**
   * @schema GetCommentsForComparedCommitInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema GetCommentsForComparedCommitInput#beforeCommitId
   */
  readonly beforeCommitId?: string;

  /**
   * @schema GetCommentsForComparedCommitInput#afterCommitId
   */
  readonly afterCommitId: string;

  /**
   * @schema GetCommentsForComparedCommitInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetCommentsForComparedCommitInput#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetCommentsForComparedCommitOutput
 */
export interface GetCommentsForComparedCommitOutput {
  /**
   * @schema GetCommentsForComparedCommitOutput#commentsForComparedCommitData
   */
  readonly commentsForComparedCommitData?: CommentsForComparedCommit[];

  /**
   * @schema GetCommentsForComparedCommitOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetCommentsForPullRequestInput
 */
export interface GetCommentsForPullRequestInput {
  /**
   * @schema GetCommentsForPullRequestInput#pullRequestId
   */
  readonly pullRequestId: string;

  /**
   * @schema GetCommentsForPullRequestInput#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema GetCommentsForPullRequestInput#beforeCommitId
   */
  readonly beforeCommitId?: string;

  /**
   * @schema GetCommentsForPullRequestInput#afterCommitId
   */
  readonly afterCommitId?: string;

  /**
   * @schema GetCommentsForPullRequestInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetCommentsForPullRequestInput#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetCommentsForPullRequestOutput
 */
export interface GetCommentsForPullRequestOutput {
  /**
   * @schema GetCommentsForPullRequestOutput#commentsForPullRequestData
   */
  readonly commentsForPullRequestData?: CommentsForPullRequest[];

  /**
   * @schema GetCommentsForPullRequestOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetCommitInput
 */
export interface GetCommitInput {
  /**
   * @schema GetCommitInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema GetCommitInput#commitId
   */
  readonly commitId: string;

}

/**
 * @schema GetCommitOutput
 */
export interface GetCommitOutput {
  /**
   * @schema GetCommitOutput#commit
   */
  readonly commit: Commit;

}

/**
 * @schema GetDifferencesInput
 */
export interface GetDifferencesInput {
  /**
   * @schema GetDifferencesInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema GetDifferencesInput#beforeCommitSpecifier
   */
  readonly beforeCommitSpecifier?: string;

  /**
   * @schema GetDifferencesInput#afterCommitSpecifier
   */
  readonly afterCommitSpecifier: string;

  /**
   * @schema GetDifferencesInput#beforePath
   */
  readonly beforePath?: string;

  /**
   * @schema GetDifferencesInput#afterPath
   */
  readonly afterPath?: string;

  /**
   * @schema GetDifferencesInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetDifferencesInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetDifferencesOutput
 */
export interface GetDifferencesOutput {
  /**
   * @schema GetDifferencesOutput#differences
   */
  readonly differences?: Difference[];

  /**
   * @schema GetDifferencesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetFileInput
 */
export interface GetFileInput {
  /**
   * @schema GetFileInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema GetFileInput#commitSpecifier
   */
  readonly commitSpecifier?: string;

  /**
   * @schema GetFileInput#filePath
   */
  readonly filePath: string;

}

/**
 * @schema GetFileOutput
 */
export interface GetFileOutput {
  /**
   * @schema GetFileOutput#commitId
   */
  readonly commitId: string;

  /**
   * @schema GetFileOutput#blobId
   */
  readonly blobId: string;

  /**
   * @schema GetFileOutput#filePath
   */
  readonly filePath: string;

  /**
   * @schema GetFileOutput#fileMode
   */
  readonly fileMode: string;

  /**
   * @schema GetFileOutput#fileSize
   */
  readonly fileSize: number;

  /**
   * @schema GetFileOutput#fileContent
   */
  readonly fileContent: any;

}

/**
 * @schema GetFolderInput
 */
export interface GetFolderInput {
  /**
   * @schema GetFolderInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema GetFolderInput#commitSpecifier
   */
  readonly commitSpecifier?: string;

  /**
   * @schema GetFolderInput#folderPath
   */
  readonly folderPath: string;

}

/**
 * @schema GetFolderOutput
 */
export interface GetFolderOutput {
  /**
   * @schema GetFolderOutput#commitId
   */
  readonly commitId: string;

  /**
   * @schema GetFolderOutput#folderPath
   */
  readonly folderPath: string;

  /**
   * @schema GetFolderOutput#treeId
   */
  readonly treeId?: string;

  /**
   * @schema GetFolderOutput#subFolders
   */
  readonly subFolders?: Folder[];

  /**
   * @schema GetFolderOutput#files
   */
  readonly files?: File[];

  /**
   * @schema GetFolderOutput#symbolicLinks
   */
  readonly symbolicLinks?: SymbolicLink[];

  /**
   * @schema GetFolderOutput#subModules
   */
  readonly subModules?: SubModule[];

}

/**
 * @schema GetMergeCommitInput
 */
export interface GetMergeCommitInput {
  /**
   * @schema GetMergeCommitInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema GetMergeCommitInput#sourceCommitSpecifier
   */
  readonly sourceCommitSpecifier: string;

  /**
   * @schema GetMergeCommitInput#destinationCommitSpecifier
   */
  readonly destinationCommitSpecifier: string;

  /**
   * @schema GetMergeCommitInput#conflictDetailLevel
   */
  readonly conflictDetailLevel?: string;

  /**
   * @schema GetMergeCommitInput#conflictResolutionStrategy
   */
  readonly conflictResolutionStrategy?: string;

}

/**
 * @schema GetMergeCommitOutput
 */
export interface GetMergeCommitOutput {
  /**
   * @schema GetMergeCommitOutput#sourceCommitId
   */
  readonly sourceCommitId?: string;

  /**
   * @schema GetMergeCommitOutput#destinationCommitId
   */
  readonly destinationCommitId?: string;

  /**
   * @schema GetMergeCommitOutput#baseCommitId
   */
  readonly baseCommitId?: string;

  /**
   * @schema GetMergeCommitOutput#mergedCommitId
   */
  readonly mergedCommitId?: string;

}

/**
 * @schema GetMergeConflictsInput
 */
export interface GetMergeConflictsInput {
  /**
   * @schema GetMergeConflictsInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema GetMergeConflictsInput#destinationCommitSpecifier
   */
  readonly destinationCommitSpecifier: string;

  /**
   * @schema GetMergeConflictsInput#sourceCommitSpecifier
   */
  readonly sourceCommitSpecifier: string;

  /**
   * @schema GetMergeConflictsInput#mergeOption
   */
  readonly mergeOption: string;

  /**
   * @schema GetMergeConflictsInput#conflictDetailLevel
   */
  readonly conflictDetailLevel?: string;

  /**
   * @schema GetMergeConflictsInput#maxConflictFiles
   */
  readonly maxConflictFiles?: number;

  /**
   * @schema GetMergeConflictsInput#conflictResolutionStrategy
   */
  readonly conflictResolutionStrategy?: string;

  /**
   * @schema GetMergeConflictsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetMergeConflictsOutput
 */
export interface GetMergeConflictsOutput {
  /**
   * @schema GetMergeConflictsOutput#mergeable
   */
  readonly mergeable: boolean;

  /**
   * @schema GetMergeConflictsOutput#destinationCommitId
   */
  readonly destinationCommitId: string;

  /**
   * @schema GetMergeConflictsOutput#sourceCommitId
   */
  readonly sourceCommitId: string;

  /**
   * @schema GetMergeConflictsOutput#baseCommitId
   */
  readonly baseCommitId?: string;

  /**
   * @schema GetMergeConflictsOutput#conflictMetadataList
   */
  readonly conflictMetadataList: ConflictMetadata[];

  /**
   * @schema GetMergeConflictsOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetMergeOptionsInput
 */
export interface GetMergeOptionsInput {
  /**
   * @schema GetMergeOptionsInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema GetMergeOptionsInput#sourceCommitSpecifier
   */
  readonly sourceCommitSpecifier: string;

  /**
   * @schema GetMergeOptionsInput#destinationCommitSpecifier
   */
  readonly destinationCommitSpecifier: string;

  /**
   * @schema GetMergeOptionsInput#conflictDetailLevel
   */
  readonly conflictDetailLevel?: string;

  /**
   * @schema GetMergeOptionsInput#conflictResolutionStrategy
   */
  readonly conflictResolutionStrategy?: string;

}

/**
 * @schema GetMergeOptionsOutput
 */
export interface GetMergeOptionsOutput {
  /**
   * @schema GetMergeOptionsOutput#mergeOptions
   */
  readonly mergeOptions: string[];

  /**
   * @schema GetMergeOptionsOutput#sourceCommitId
   */
  readonly sourceCommitId: string;

  /**
   * @schema GetMergeOptionsOutput#destinationCommitId
   */
  readonly destinationCommitId: string;

  /**
   * @schema GetMergeOptionsOutput#baseCommitId
   */
  readonly baseCommitId: string;

}

/**
 * @schema GetPullRequestInput
 */
export interface GetPullRequestInput {
  /**
   * @schema GetPullRequestInput#pullRequestId
   */
  readonly pullRequestId: string;

}

/**
 * @schema GetPullRequestOutput
 */
export interface GetPullRequestOutput {
  /**
   * @schema GetPullRequestOutput#pullRequest
   */
  readonly pullRequest: PullRequest;

}

/**
 * @schema GetPullRequestApprovalStatesInput
 */
export interface GetPullRequestApprovalStatesInput {
  /**
   * @schema GetPullRequestApprovalStatesInput#pullRequestId
   */
  readonly pullRequestId: string;

  /**
   * @schema GetPullRequestApprovalStatesInput#revisionId
   */
  readonly revisionId: string;

}

/**
 * @schema GetPullRequestApprovalStatesOutput
 */
export interface GetPullRequestApprovalStatesOutput {
  /**
   * @schema GetPullRequestApprovalStatesOutput#approvals
   */
  readonly approvals?: Approval[];

}

/**
 * @schema GetPullRequestOverrideStateInput
 */
export interface GetPullRequestOverrideStateInput {
  /**
   * @schema GetPullRequestOverrideStateInput#pullRequestId
   */
  readonly pullRequestId: string;

  /**
   * @schema GetPullRequestOverrideStateInput#revisionId
   */
  readonly revisionId: string;

}

/**
 * @schema GetPullRequestOverrideStateOutput
 */
export interface GetPullRequestOverrideStateOutput {
  /**
   * @schema GetPullRequestOverrideStateOutput#overridden
   */
  readonly overridden?: boolean;

  /**
   * @schema GetPullRequestOverrideStateOutput#overrider
   */
  readonly overrider?: string;

}

/**
 * @schema GetRepositoryInput
 */
export interface GetRepositoryInput {
  /**
   * @schema GetRepositoryInput#repositoryName
   */
  readonly repositoryName: string;

}

/**
 * @schema GetRepositoryOutput
 */
export interface GetRepositoryOutput {
  /**
   * @schema GetRepositoryOutput#repositoryMetadata
   */
  readonly repositoryMetadata?: RepositoryMetadata;

}

/**
 * @schema GetRepositoryTriggersInput
 */
export interface GetRepositoryTriggersInput {
  /**
   * @schema GetRepositoryTriggersInput#repositoryName
   */
  readonly repositoryName: string;

}

/**
 * @schema GetRepositoryTriggersOutput
 */
export interface GetRepositoryTriggersOutput {
  /**
   * @schema GetRepositoryTriggersOutput#configurationId
   */
  readonly configurationId?: string;

  /**
   * @schema GetRepositoryTriggersOutput#triggers
   */
  readonly triggers?: RepositoryTrigger[];

}

/**
 * @schema ListApprovalRuleTemplatesInput
 */
export interface ListApprovalRuleTemplatesInput {
  /**
   * @schema ListApprovalRuleTemplatesInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListApprovalRuleTemplatesInput#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListApprovalRuleTemplatesOutput
 */
export interface ListApprovalRuleTemplatesOutput {
  /**
   * @schema ListApprovalRuleTemplatesOutput#approvalRuleTemplateNames
   */
  readonly approvalRuleTemplateNames?: string[];

  /**
   * @schema ListApprovalRuleTemplatesOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAssociatedApprovalRuleTemplatesForRepositoryInput
 */
export interface ListAssociatedApprovalRuleTemplatesForRepositoryInput {
  /**
   * @schema ListAssociatedApprovalRuleTemplatesForRepositoryInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema ListAssociatedApprovalRuleTemplatesForRepositoryInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAssociatedApprovalRuleTemplatesForRepositoryInput#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListAssociatedApprovalRuleTemplatesForRepositoryOutput
 */
export interface ListAssociatedApprovalRuleTemplatesForRepositoryOutput {
  /**
   * @schema ListAssociatedApprovalRuleTemplatesForRepositoryOutput#approvalRuleTemplateNames
   */
  readonly approvalRuleTemplateNames?: string[];

  /**
   * @schema ListAssociatedApprovalRuleTemplatesForRepositoryOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListBranchesInput
 */
export interface ListBranchesInput {
  /**
   * @schema ListBranchesInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema ListBranchesInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListBranchesOutput
 */
export interface ListBranchesOutput {
  /**
   * @schema ListBranchesOutput#branches
   */
  readonly branches?: string[];

  /**
   * @schema ListBranchesOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPullRequestsInput
 */
export interface ListPullRequestsInput {
  /**
   * @schema ListPullRequestsInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema ListPullRequestsInput#authorArn
   */
  readonly authorArn?: string;

  /**
   * @schema ListPullRequestsInput#pullRequestStatus
   */
  readonly pullRequestStatus?: string;

  /**
   * @schema ListPullRequestsInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListPullRequestsInput#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListPullRequestsOutput
 */
export interface ListPullRequestsOutput {
  /**
   * @schema ListPullRequestsOutput#pullRequestIds
   */
  readonly pullRequestIds: string[];

  /**
   * @schema ListPullRequestsOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRepositoriesInput
 */
export interface ListRepositoriesInput {
  /**
   * @schema ListRepositoriesInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRepositoriesInput#sortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListRepositoriesInput#order
   */
  readonly order?: string;

}

/**
 * @schema ListRepositoriesOutput
 */
export interface ListRepositoriesOutput {
  /**
   * @schema ListRepositoriesOutput#repositories
   */
  readonly repositories?: RepositoryNameIdPair[];

  /**
   * @schema ListRepositoriesOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRepositoriesForApprovalRuleTemplateInput
 */
export interface ListRepositoriesForApprovalRuleTemplateInput {
  /**
   * @schema ListRepositoriesForApprovalRuleTemplateInput#approvalRuleTemplateName
   */
  readonly approvalRuleTemplateName: string;

  /**
   * @schema ListRepositoriesForApprovalRuleTemplateInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRepositoriesForApprovalRuleTemplateInput#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListRepositoriesForApprovalRuleTemplateOutput
 */
export interface ListRepositoriesForApprovalRuleTemplateOutput {
  /**
   * @schema ListRepositoriesForApprovalRuleTemplateOutput#repositoryNames
   */
  readonly repositoryNames?: string[];

  /**
   * @schema ListRepositoriesForApprovalRuleTemplateOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceInput
 */
export interface ListTagsForResourceInput {
  /**
   * @schema ListTagsForResourceInput#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ListTagsForResourceInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceOutput
 */
export interface ListTagsForResourceOutput {
  /**
   * @schema ListTagsForResourceOutput#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ListTagsForResourceOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MergeBranchesByFastForwardInput
 */
export interface MergeBranchesByFastForwardInput {
  /**
   * @schema MergeBranchesByFastForwardInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema MergeBranchesByFastForwardInput#sourceCommitSpecifier
   */
  readonly sourceCommitSpecifier: string;

  /**
   * @schema MergeBranchesByFastForwardInput#destinationCommitSpecifier
   */
  readonly destinationCommitSpecifier: string;

  /**
   * @schema MergeBranchesByFastForwardInput#targetBranch
   */
  readonly targetBranch?: string;

}

/**
 * @schema MergeBranchesByFastForwardOutput
 */
export interface MergeBranchesByFastForwardOutput {
  /**
   * @schema MergeBranchesByFastForwardOutput#commitId
   */
  readonly commitId?: string;

  /**
   * @schema MergeBranchesByFastForwardOutput#treeId
   */
  readonly treeId?: string;

}

/**
 * @schema MergeBranchesBySquashInput
 */
export interface MergeBranchesBySquashInput {
  /**
   * @schema MergeBranchesBySquashInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema MergeBranchesBySquashInput#sourceCommitSpecifier
   */
  readonly sourceCommitSpecifier: string;

  /**
   * @schema MergeBranchesBySquashInput#destinationCommitSpecifier
   */
  readonly destinationCommitSpecifier: string;

  /**
   * @schema MergeBranchesBySquashInput#targetBranch
   */
  readonly targetBranch?: string;

  /**
   * @schema MergeBranchesBySquashInput#conflictDetailLevel
   */
  readonly conflictDetailLevel?: string;

  /**
   * @schema MergeBranchesBySquashInput#conflictResolutionStrategy
   */
  readonly conflictResolutionStrategy?: string;

  /**
   * @schema MergeBranchesBySquashInput#authorName
   */
  readonly authorName?: string;

  /**
   * @schema MergeBranchesBySquashInput#email
   */
  readonly email?: string;

  /**
   * @schema MergeBranchesBySquashInput#commitMessage
   */
  readonly commitMessage?: string;

  /**
   * @schema MergeBranchesBySquashInput#keepEmptyFolders
   */
  readonly keepEmptyFolders?: boolean;

  /**
   * @schema MergeBranchesBySquashInput#conflictResolution
   */
  readonly conflictResolution?: ConflictResolution;

}

/**
 * @schema MergeBranchesBySquashOutput
 */
export interface MergeBranchesBySquashOutput {
  /**
   * @schema MergeBranchesBySquashOutput#commitId
   */
  readonly commitId?: string;

  /**
   * @schema MergeBranchesBySquashOutput#treeId
   */
  readonly treeId?: string;

}

/**
 * @schema MergeBranchesByThreeWayInput
 */
export interface MergeBranchesByThreeWayInput {
  /**
   * @schema MergeBranchesByThreeWayInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema MergeBranchesByThreeWayInput#sourceCommitSpecifier
   */
  readonly sourceCommitSpecifier: string;

  /**
   * @schema MergeBranchesByThreeWayInput#destinationCommitSpecifier
   */
  readonly destinationCommitSpecifier: string;

  /**
   * @schema MergeBranchesByThreeWayInput#targetBranch
   */
  readonly targetBranch?: string;

  /**
   * @schema MergeBranchesByThreeWayInput#conflictDetailLevel
   */
  readonly conflictDetailLevel?: string;

  /**
   * @schema MergeBranchesByThreeWayInput#conflictResolutionStrategy
   */
  readonly conflictResolutionStrategy?: string;

  /**
   * @schema MergeBranchesByThreeWayInput#authorName
   */
  readonly authorName?: string;

  /**
   * @schema MergeBranchesByThreeWayInput#email
   */
  readonly email?: string;

  /**
   * @schema MergeBranchesByThreeWayInput#commitMessage
   */
  readonly commitMessage?: string;

  /**
   * @schema MergeBranchesByThreeWayInput#keepEmptyFolders
   */
  readonly keepEmptyFolders?: boolean;

  /**
   * @schema MergeBranchesByThreeWayInput#conflictResolution
   */
  readonly conflictResolution?: ConflictResolution;

}

/**
 * @schema MergeBranchesByThreeWayOutput
 */
export interface MergeBranchesByThreeWayOutput {
  /**
   * @schema MergeBranchesByThreeWayOutput#commitId
   */
  readonly commitId?: string;

  /**
   * @schema MergeBranchesByThreeWayOutput#treeId
   */
  readonly treeId?: string;

}

/**
 * @schema MergePullRequestByFastForwardInput
 */
export interface MergePullRequestByFastForwardInput {
  /**
   * @schema MergePullRequestByFastForwardInput#pullRequestId
   */
  readonly pullRequestId: string;

  /**
   * @schema MergePullRequestByFastForwardInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema MergePullRequestByFastForwardInput#sourceCommitId
   */
  readonly sourceCommitId?: string;

}

/**
 * @schema MergePullRequestByFastForwardOutput
 */
export interface MergePullRequestByFastForwardOutput {
  /**
   * @schema MergePullRequestByFastForwardOutput#pullRequest
   */
  readonly pullRequest?: PullRequest;

}

/**
 * @schema MergePullRequestBySquashInput
 */
export interface MergePullRequestBySquashInput {
  /**
   * @schema MergePullRequestBySquashInput#pullRequestId
   */
  readonly pullRequestId: string;

  /**
   * @schema MergePullRequestBySquashInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema MergePullRequestBySquashInput#sourceCommitId
   */
  readonly sourceCommitId?: string;

  /**
   * @schema MergePullRequestBySquashInput#conflictDetailLevel
   */
  readonly conflictDetailLevel?: string;

  /**
   * @schema MergePullRequestBySquashInput#conflictResolutionStrategy
   */
  readonly conflictResolutionStrategy?: string;

  /**
   * @schema MergePullRequestBySquashInput#commitMessage
   */
  readonly commitMessage?: string;

  /**
   * @schema MergePullRequestBySquashInput#authorName
   */
  readonly authorName?: string;

  /**
   * @schema MergePullRequestBySquashInput#email
   */
  readonly email?: string;

  /**
   * @schema MergePullRequestBySquashInput#keepEmptyFolders
   */
  readonly keepEmptyFolders?: boolean;

  /**
   * @schema MergePullRequestBySquashInput#conflictResolution
   */
  readonly conflictResolution?: ConflictResolution;

}

/**
 * @schema MergePullRequestBySquashOutput
 */
export interface MergePullRequestBySquashOutput {
  /**
   * @schema MergePullRequestBySquashOutput#pullRequest
   */
  readonly pullRequest?: PullRequest;

}

/**
 * @schema MergePullRequestByThreeWayInput
 */
export interface MergePullRequestByThreeWayInput {
  /**
   * @schema MergePullRequestByThreeWayInput#pullRequestId
   */
  readonly pullRequestId: string;

  /**
   * @schema MergePullRequestByThreeWayInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema MergePullRequestByThreeWayInput#sourceCommitId
   */
  readonly sourceCommitId?: string;

  /**
   * @schema MergePullRequestByThreeWayInput#conflictDetailLevel
   */
  readonly conflictDetailLevel?: string;

  /**
   * @schema MergePullRequestByThreeWayInput#conflictResolutionStrategy
   */
  readonly conflictResolutionStrategy?: string;

  /**
   * @schema MergePullRequestByThreeWayInput#commitMessage
   */
  readonly commitMessage?: string;

  /**
   * @schema MergePullRequestByThreeWayInput#authorName
   */
  readonly authorName?: string;

  /**
   * @schema MergePullRequestByThreeWayInput#email
   */
  readonly email?: string;

  /**
   * @schema MergePullRequestByThreeWayInput#keepEmptyFolders
   */
  readonly keepEmptyFolders?: boolean;

  /**
   * @schema MergePullRequestByThreeWayInput#conflictResolution
   */
  readonly conflictResolution?: ConflictResolution;

}

/**
 * @schema MergePullRequestByThreeWayOutput
 */
export interface MergePullRequestByThreeWayOutput {
  /**
   * @schema MergePullRequestByThreeWayOutput#pullRequest
   */
  readonly pullRequest?: PullRequest;

}

/**
 * @schema OverridePullRequestApprovalRulesInput
 */
export interface OverridePullRequestApprovalRulesInput {
  /**
   * @schema OverridePullRequestApprovalRulesInput#pullRequestId
   */
  readonly pullRequestId: string;

  /**
   * @schema OverridePullRequestApprovalRulesInput#revisionId
   */
  readonly revisionId: string;

  /**
   * @schema OverridePullRequestApprovalRulesInput#overrideStatus
   */
  readonly overrideStatus: string;

}

/**
 * @schema PostCommentForComparedCommitInput
 */
export interface PostCommentForComparedCommitInput {
  /**
   * @schema PostCommentForComparedCommitInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema PostCommentForComparedCommitInput#beforeCommitId
   */
  readonly beforeCommitId?: string;

  /**
   * @schema PostCommentForComparedCommitInput#afterCommitId
   */
  readonly afterCommitId: string;

  /**
   * @schema PostCommentForComparedCommitInput#location
   */
  readonly location?: Location;

  /**
   * @schema PostCommentForComparedCommitInput#content
   */
  readonly content: string;

  /**
   * @schema PostCommentForComparedCommitInput#clientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema PostCommentForComparedCommitOutput
 */
export interface PostCommentForComparedCommitOutput {
  /**
   * @schema PostCommentForComparedCommitOutput#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema PostCommentForComparedCommitOutput#beforeCommitId
   */
  readonly beforeCommitId?: string;

  /**
   * @schema PostCommentForComparedCommitOutput#afterCommitId
   */
  readonly afterCommitId?: string;

  /**
   * @schema PostCommentForComparedCommitOutput#beforeBlobId
   */
  readonly beforeBlobId?: string;

  /**
   * @schema PostCommentForComparedCommitOutput#afterBlobId
   */
  readonly afterBlobId?: string;

  /**
   * @schema PostCommentForComparedCommitOutput#location
   */
  readonly location?: Location;

  /**
   * @schema PostCommentForComparedCommitOutput#comment
   */
  readonly comment?: Comment;

}

/**
 * @schema PostCommentForPullRequestInput
 */
export interface PostCommentForPullRequestInput {
  /**
   * @schema PostCommentForPullRequestInput#pullRequestId
   */
  readonly pullRequestId: string;

  /**
   * @schema PostCommentForPullRequestInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema PostCommentForPullRequestInput#beforeCommitId
   */
  readonly beforeCommitId: string;

  /**
   * @schema PostCommentForPullRequestInput#afterCommitId
   */
  readonly afterCommitId: string;

  /**
   * @schema PostCommentForPullRequestInput#location
   */
  readonly location?: Location;

  /**
   * @schema PostCommentForPullRequestInput#content
   */
  readonly content: string;

  /**
   * @schema PostCommentForPullRequestInput#clientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema PostCommentForPullRequestOutput
 */
export interface PostCommentForPullRequestOutput {
  /**
   * @schema PostCommentForPullRequestOutput#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema PostCommentForPullRequestOutput#pullRequestId
   */
  readonly pullRequestId?: string;

  /**
   * @schema PostCommentForPullRequestOutput#beforeCommitId
   */
  readonly beforeCommitId?: string;

  /**
   * @schema PostCommentForPullRequestOutput#afterCommitId
   */
  readonly afterCommitId?: string;

  /**
   * @schema PostCommentForPullRequestOutput#beforeBlobId
   */
  readonly beforeBlobId?: string;

  /**
   * @schema PostCommentForPullRequestOutput#afterBlobId
   */
  readonly afterBlobId?: string;

  /**
   * @schema PostCommentForPullRequestOutput#location
   */
  readonly location?: Location;

  /**
   * @schema PostCommentForPullRequestOutput#comment
   */
  readonly comment?: Comment;

}

/**
 * @schema PostCommentReplyInput
 */
export interface PostCommentReplyInput {
  /**
   * @schema PostCommentReplyInput#inReplyTo
   */
  readonly inReplyTo: string;

  /**
   * @schema PostCommentReplyInput#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema PostCommentReplyInput#content
   */
  readonly content: string;

}

/**
 * @schema PostCommentReplyOutput
 */
export interface PostCommentReplyOutput {
  /**
   * @schema PostCommentReplyOutput#comment
   */
  readonly comment?: Comment;

}

/**
 * @schema PutCommentReactionInput
 */
export interface PutCommentReactionInput {
  /**
   * @schema PutCommentReactionInput#commentId
   */
  readonly commentId: string;

  /**
   * @schema PutCommentReactionInput#reactionValue
   */
  readonly reactionValue: string;

}

/**
 * @schema PutFileInput
 */
export interface PutFileInput {
  /**
   * @schema PutFileInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema PutFileInput#branchName
   */
  readonly branchName: string;

  /**
   * @schema PutFileInput#fileContent
   */
  readonly fileContent: any;

  /**
   * @schema PutFileInput#filePath
   */
  readonly filePath: string;

  /**
   * @schema PutFileInput#fileMode
   */
  readonly fileMode?: string;

  /**
   * @schema PutFileInput#parentCommitId
   */
  readonly parentCommitId?: string;

  /**
   * @schema PutFileInput#commitMessage
   */
  readonly commitMessage?: string;

  /**
   * @schema PutFileInput#name
   */
  readonly name?: string;

  /**
   * @schema PutFileInput#email
   */
  readonly email?: string;

}

/**
 * @schema PutFileOutput
 */
export interface PutFileOutput {
  /**
   * @schema PutFileOutput#commitId
   */
  readonly commitId: string;

  /**
   * @schema PutFileOutput#blobId
   */
  readonly blobId: string;

  /**
   * @schema PutFileOutput#treeId
   */
  readonly treeId: string;

}

/**
 * @schema PutRepositoryTriggersInput
 */
export interface PutRepositoryTriggersInput {
  /**
   * @schema PutRepositoryTriggersInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema PutRepositoryTriggersInput#triggers
   */
  readonly triggers: RepositoryTrigger[];

}

/**
 * @schema PutRepositoryTriggersOutput
 */
export interface PutRepositoryTriggersOutput {
  /**
   * @schema PutRepositoryTriggersOutput#configurationId
   */
  readonly configurationId?: string;

}

/**
 * @schema TagResourceInput
 */
export interface TagResourceInput {
  /**
   * @schema TagResourceInput#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceInput#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema TestRepositoryTriggersInput
 */
export interface TestRepositoryTriggersInput {
  /**
   * @schema TestRepositoryTriggersInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema TestRepositoryTriggersInput#triggers
   */
  readonly triggers: RepositoryTrigger[];

}

/**
 * @schema TestRepositoryTriggersOutput
 */
export interface TestRepositoryTriggersOutput {
  /**
   * @schema TestRepositoryTriggersOutput#successfulExecutions
   */
  readonly successfulExecutions?: string[];

  /**
   * @schema TestRepositoryTriggersOutput#failedExecutions
   */
  readonly failedExecutions?: RepositoryTriggerExecutionFailure[];

}

/**
 * @schema UntagResourceInput
 */
export interface UntagResourceInput {
  /**
   * @schema UntagResourceInput#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceInput#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UpdateApprovalRuleTemplateContentInput
 */
export interface UpdateApprovalRuleTemplateContentInput {
  /**
   * @schema UpdateApprovalRuleTemplateContentInput#approvalRuleTemplateName
   */
  readonly approvalRuleTemplateName: string;

  /**
   * @schema UpdateApprovalRuleTemplateContentInput#newRuleContent
   */
  readonly newRuleContent: string;

  /**
   * @schema UpdateApprovalRuleTemplateContentInput#existingRuleContentSha256
   */
  readonly existingRuleContentSha256?: string;

}

/**
 * @schema UpdateApprovalRuleTemplateContentOutput
 */
export interface UpdateApprovalRuleTemplateContentOutput {
  /**
   * @schema UpdateApprovalRuleTemplateContentOutput#approvalRuleTemplate
   */
  readonly approvalRuleTemplate: ApprovalRuleTemplate;

}

/**
 * @schema UpdateApprovalRuleTemplateDescriptionInput
 */
export interface UpdateApprovalRuleTemplateDescriptionInput {
  /**
   * @schema UpdateApprovalRuleTemplateDescriptionInput#approvalRuleTemplateName
   */
  readonly approvalRuleTemplateName: string;

  /**
   * @schema UpdateApprovalRuleTemplateDescriptionInput#approvalRuleTemplateDescription
   */
  readonly approvalRuleTemplateDescription: string;

}

/**
 * @schema UpdateApprovalRuleTemplateDescriptionOutput
 */
export interface UpdateApprovalRuleTemplateDescriptionOutput {
  /**
   * @schema UpdateApprovalRuleTemplateDescriptionOutput#approvalRuleTemplate
   */
  readonly approvalRuleTemplate: ApprovalRuleTemplate;

}

/**
 * @schema UpdateApprovalRuleTemplateNameInput
 */
export interface UpdateApprovalRuleTemplateNameInput {
  /**
   * @schema UpdateApprovalRuleTemplateNameInput#oldApprovalRuleTemplateName
   */
  readonly oldApprovalRuleTemplateName: string;

  /**
   * @schema UpdateApprovalRuleTemplateNameInput#newApprovalRuleTemplateName
   */
  readonly newApprovalRuleTemplateName: string;

}

/**
 * @schema UpdateApprovalRuleTemplateNameOutput
 */
export interface UpdateApprovalRuleTemplateNameOutput {
  /**
   * @schema UpdateApprovalRuleTemplateNameOutput#approvalRuleTemplate
   */
  readonly approvalRuleTemplate: ApprovalRuleTemplate;

}

/**
 * @schema UpdateCommentInput
 */
export interface UpdateCommentInput {
  /**
   * @schema UpdateCommentInput#commentId
   */
  readonly commentId: string;

  /**
   * @schema UpdateCommentInput#content
   */
  readonly content: string;

}

/**
 * @schema UpdateCommentOutput
 */
export interface UpdateCommentOutput {
  /**
   * @schema UpdateCommentOutput#comment
   */
  readonly comment?: Comment;

}

/**
 * @schema UpdateDefaultBranchInput
 */
export interface UpdateDefaultBranchInput {
  /**
   * @schema UpdateDefaultBranchInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema UpdateDefaultBranchInput#defaultBranchName
   */
  readonly defaultBranchName: string;

}

/**
 * @schema UpdatePullRequestApprovalRuleContentInput
 */
export interface UpdatePullRequestApprovalRuleContentInput {
  /**
   * @schema UpdatePullRequestApprovalRuleContentInput#pullRequestId
   */
  readonly pullRequestId: string;

  /**
   * @schema UpdatePullRequestApprovalRuleContentInput#approvalRuleName
   */
  readonly approvalRuleName: string;

  /**
   * @schema UpdatePullRequestApprovalRuleContentInput#existingRuleContentSha256
   */
  readonly existingRuleContentSha256?: string;

  /**
   * @schema UpdatePullRequestApprovalRuleContentInput#newRuleContent
   */
  readonly newRuleContent: string;

}

/**
 * @schema UpdatePullRequestApprovalRuleContentOutput
 */
export interface UpdatePullRequestApprovalRuleContentOutput {
  /**
   * @schema UpdatePullRequestApprovalRuleContentOutput#approvalRule
   */
  readonly approvalRule: ApprovalRule;

}

/**
 * @schema UpdatePullRequestApprovalStateInput
 */
export interface UpdatePullRequestApprovalStateInput {
  /**
   * @schema UpdatePullRequestApprovalStateInput#pullRequestId
   */
  readonly pullRequestId: string;

  /**
   * @schema UpdatePullRequestApprovalStateInput#revisionId
   */
  readonly revisionId: string;

  /**
   * @schema UpdatePullRequestApprovalStateInput#approvalState
   */
  readonly approvalState: string;

}

/**
 * @schema UpdatePullRequestDescriptionInput
 */
export interface UpdatePullRequestDescriptionInput {
  /**
   * @schema UpdatePullRequestDescriptionInput#pullRequestId
   */
  readonly pullRequestId: string;

  /**
   * @schema UpdatePullRequestDescriptionInput#description
   */
  readonly description: string;

}

/**
 * @schema UpdatePullRequestDescriptionOutput
 */
export interface UpdatePullRequestDescriptionOutput {
  /**
   * @schema UpdatePullRequestDescriptionOutput#pullRequest
   */
  readonly pullRequest: PullRequest;

}

/**
 * @schema UpdatePullRequestStatusInput
 */
export interface UpdatePullRequestStatusInput {
  /**
   * @schema UpdatePullRequestStatusInput#pullRequestId
   */
  readonly pullRequestId: string;

  /**
   * @schema UpdatePullRequestStatusInput#pullRequestStatus
   */
  readonly pullRequestStatus: string;

}

/**
 * @schema UpdatePullRequestStatusOutput
 */
export interface UpdatePullRequestStatusOutput {
  /**
   * @schema UpdatePullRequestStatusOutput#pullRequest
   */
  readonly pullRequest: PullRequest;

}

/**
 * @schema UpdatePullRequestTitleInput
 */
export interface UpdatePullRequestTitleInput {
  /**
   * @schema UpdatePullRequestTitleInput#pullRequestId
   */
  readonly pullRequestId: string;

  /**
   * @schema UpdatePullRequestTitleInput#title
   */
  readonly title: string;

}

/**
 * @schema UpdatePullRequestTitleOutput
 */
export interface UpdatePullRequestTitleOutput {
  /**
   * @schema UpdatePullRequestTitleOutput#pullRequest
   */
  readonly pullRequest: PullRequest;

}

/**
 * @schema UpdateRepositoryDescriptionInput
 */
export interface UpdateRepositoryDescriptionInput {
  /**
   * @schema UpdateRepositoryDescriptionInput#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema UpdateRepositoryDescriptionInput#repositoryDescription
   */
  readonly repositoryDescription?: string;

}

/**
 * @schema UpdateRepositoryNameInput
 */
export interface UpdateRepositoryNameInput {
  /**
   * @schema UpdateRepositoryNameInput#oldName
   */
  readonly oldName: string;

  /**
   * @schema UpdateRepositoryNameInput#newName
   */
  readonly newName: string;

}

/**
 * @schema BatchAssociateApprovalRuleTemplateWithRepositoriesError
 */
export interface BatchAssociateApprovalRuleTemplateWithRepositoriesError {
  /**
   * @schema BatchAssociateApprovalRuleTemplateWithRepositoriesError#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema BatchAssociateApprovalRuleTemplateWithRepositoriesError#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema BatchAssociateApprovalRuleTemplateWithRepositoriesError#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema Conflict
 */
export interface Conflict {
  /**
   * @schema Conflict#conflictMetadata
   */
  readonly conflictMetadata?: ConflictMetadata;

  /**
   * @schema Conflict#mergeHunks
   */
  readonly mergeHunks?: MergeHunk[];

}

/**
 * @schema BatchDescribeMergeConflictsError
 */
export interface BatchDescribeMergeConflictsError {
  /**
   * @schema BatchDescribeMergeConflictsError#filePath
   */
  readonly filePath: string;

  /**
   * @schema BatchDescribeMergeConflictsError#exceptionName
   */
  readonly exceptionName: string;

  /**
   * @schema BatchDescribeMergeConflictsError#message
   */
  readonly message: string;

}

/**
 * @schema BatchDisassociateApprovalRuleTemplateFromRepositoriesError
 */
export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesError {
  /**
   * @schema BatchDisassociateApprovalRuleTemplateFromRepositoriesError#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema BatchDisassociateApprovalRuleTemplateFromRepositoriesError#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema BatchDisassociateApprovalRuleTemplateFromRepositoriesError#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema Commit
 */
export interface Commit {
  /**
   * @schema Commit#commitId
   */
  readonly commitId?: string;

  /**
   * @schema Commit#treeId
   */
  readonly treeId?: string;

  /**
   * @schema Commit#parents
   */
  readonly parents?: string[];

  /**
   * @schema Commit#message
   */
  readonly message?: string;

  /**
   * @schema Commit#author
   */
  readonly author?: UserInfo;

  /**
   * @schema Commit#committer
   */
  readonly committer?: UserInfo;

  /**
   * @schema Commit#additionalData
   */
  readonly additionalData?: string;

}

/**
 * @schema BatchGetCommitsError
 */
export interface BatchGetCommitsError {
  /**
   * @schema BatchGetCommitsError#commitId
   */
  readonly commitId?: string;

  /**
   * @schema BatchGetCommitsError#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema BatchGetCommitsError#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema RepositoryMetadata
 */
export interface RepositoryMetadata {
  /**
   * @schema RepositoryMetadata#accountId
   */
  readonly accountId?: string;

  /**
   * @schema RepositoryMetadata#repositoryId
   */
  readonly repositoryId?: string;

  /**
   * @schema RepositoryMetadata#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema RepositoryMetadata#repositoryDescription
   */
  readonly repositoryDescription?: string;

  /**
   * @schema RepositoryMetadata#defaultBranch
   */
  readonly defaultBranch?: string;

  /**
   * @schema RepositoryMetadata#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema RepositoryMetadata#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema RepositoryMetadata#cloneUrlHttp
   */
  readonly cloneUrlHttp?: string;

  /**
   * @schema RepositoryMetadata#cloneUrlSsh
   */
  readonly cloneUrlSsh?: string;

  /**
   * @schema RepositoryMetadata#Arn
   */
  readonly arn?: string;

}

/**
 * @schema ApprovalRuleTemplate
 */
export interface ApprovalRuleTemplate {
  /**
   * @schema ApprovalRuleTemplate#approvalRuleTemplateId
   */
  readonly approvalRuleTemplateId?: string;

  /**
   * @schema ApprovalRuleTemplate#approvalRuleTemplateName
   */
  readonly approvalRuleTemplateName?: string;

  /**
   * @schema ApprovalRuleTemplate#approvalRuleTemplateDescription
   */
  readonly approvalRuleTemplateDescription?: string;

  /**
   * @schema ApprovalRuleTemplate#approvalRuleTemplateContent
   */
  readonly approvalRuleTemplateContent?: string;

  /**
   * @schema ApprovalRuleTemplate#ruleContentSha256
   */
  readonly ruleContentSha256?: string;

  /**
   * @schema ApprovalRuleTemplate#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema ApprovalRuleTemplate#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema ApprovalRuleTemplate#lastModifiedUser
   */
  readonly lastModifiedUser?: string;

}

/**
 * @schema PutFileEntry
 */
export interface PutFileEntry {
  /**
   * @schema PutFileEntry#filePath
   */
  readonly filePath: string;

  /**
   * @schema PutFileEntry#fileMode
   */
  readonly fileMode?: string;

  /**
   * @schema PutFileEntry#fileContent
   */
  readonly fileContent?: any;

  /**
   * @schema PutFileEntry#sourceFile
   */
  readonly sourceFile?: SourceFileSpecifier;

}

/**
 * @schema DeleteFileEntry
 */
export interface DeleteFileEntry {
  /**
   * @schema DeleteFileEntry#filePath
   */
  readonly filePath: string;

}

/**
 * @schema SetFileModeEntry
 */
export interface SetFileModeEntry {
  /**
   * @schema SetFileModeEntry#filePath
   */
  readonly filePath: string;

  /**
   * @schema SetFileModeEntry#fileMode
   */
  readonly fileMode: string;

}

/**
 * @schema FileMetadata
 */
export interface FileMetadata {
  /**
   * @schema FileMetadata#absolutePath
   */
  readonly absolutePath?: string;

  /**
   * @schema FileMetadata#blobId
   */
  readonly blobId?: string;

  /**
   * @schema FileMetadata#fileMode
   */
  readonly fileMode?: string;

}

/**
 * @schema Target
 */
export interface Target {
  /**
   * @schema Target#repositoryName
   */
  readonly repositoryName: string;

  /**
   * @schema Target#sourceReference
   */
  readonly sourceReference: string;

  /**
   * @schema Target#destinationReference
   */
  readonly destinationReference?: string;

}

/**
 * @schema PullRequest
 */
export interface PullRequest {
  /**
   * @schema PullRequest#pullRequestId
   */
  readonly pullRequestId?: string;

  /**
   * @schema PullRequest#title
   */
  readonly title?: string;

  /**
   * @schema PullRequest#description
   */
  readonly description?: string;

  /**
   * @schema PullRequest#lastActivityDate
   */
  readonly lastActivityDate?: string;

  /**
   * @schema PullRequest#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema PullRequest#pullRequestStatus
   */
  readonly pullRequestStatus?: string;

  /**
   * @schema PullRequest#authorArn
   */
  readonly authorArn?: string;

  /**
   * @schema PullRequest#pullRequestTargets
   */
  readonly pullRequestTargets?: PullRequestTarget[];

  /**
   * @schema PullRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema PullRequest#revisionId
   */
  readonly revisionId?: string;

  /**
   * @schema PullRequest#approvalRules
   */
  readonly approvalRules?: ApprovalRule[];

}

/**
 * @schema ApprovalRule
 */
export interface ApprovalRule {
  /**
   * @schema ApprovalRule#approvalRuleId
   */
  readonly approvalRuleId?: string;

  /**
   * @schema ApprovalRule#approvalRuleName
   */
  readonly approvalRuleName?: string;

  /**
   * @schema ApprovalRule#approvalRuleContent
   */
  readonly approvalRuleContent?: string;

  /**
   * @schema ApprovalRule#ruleContentSha256
   */
  readonly ruleContentSha256?: string;

  /**
   * @schema ApprovalRule#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema ApprovalRule#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema ApprovalRule#lastModifiedUser
   */
  readonly lastModifiedUser?: string;

  /**
   * @schema ApprovalRule#originApprovalRuleTemplate
   */
  readonly originApprovalRuleTemplate?: OriginApprovalRuleTemplate;

}

/**
 * @schema ConflictResolution
 */
export interface ConflictResolution {
  /**
   * @schema ConflictResolution#replaceContents
   */
  readonly replaceContents?: ReplaceContentEntry[];

  /**
   * @schema ConflictResolution#deleteFiles
   */
  readonly deleteFiles?: DeleteFileEntry[];

  /**
   * @schema ConflictResolution#setFileModes
   */
  readonly setFileModes?: SetFileModeEntry[];

}

/**
 * @schema BranchInfo
 */
export interface BranchInfo {
  /**
   * @schema BranchInfo#branchName
   */
  readonly branchName?: string;

  /**
   * @schema BranchInfo#commitId
   */
  readonly commitId?: string;

}

/**
 * @schema Comment
 */
export interface Comment {
  /**
   * @schema Comment#commentId
   */
  readonly commentId?: string;

  /**
   * @schema Comment#content
   */
  readonly content?: string;

  /**
   * @schema Comment#inReplyTo
   */
  readonly inReplyTo?: string;

  /**
   * @schema Comment#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema Comment#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema Comment#authorArn
   */
  readonly authorArn?: string;

  /**
   * @schema Comment#deleted
   */
  readonly deleted?: boolean;

  /**
   * @schema Comment#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema Comment#callerReactions
   */
  readonly callerReactions?: string[];

  /**
   * @schema Comment#reactionCounts
   */
  readonly reactionCounts?: { [key: string]: number };

}

/**
 * @schema ConflictMetadata
 */
export interface ConflictMetadata {
  /**
   * @schema ConflictMetadata#filePath
   */
  readonly filePath?: string;

  /**
   * @schema ConflictMetadata#fileSizes
   */
  readonly fileSizes?: FileSizes;

  /**
   * @schema ConflictMetadata#fileModes
   */
  readonly fileModes?: FileModes;

  /**
   * @schema ConflictMetadata#objectTypes
   */
  readonly objectTypes?: ObjectTypes;

  /**
   * @schema ConflictMetadata#numberOfConflicts
   */
  readonly numberOfConflicts?: number;

  /**
   * @schema ConflictMetadata#isBinaryFile
   */
  readonly isBinaryFile?: IsBinaryFile;

  /**
   * @schema ConflictMetadata#contentConflict
   */
  readonly contentConflict?: boolean;

  /**
   * @schema ConflictMetadata#fileModeConflict
   */
  readonly fileModeConflict?: boolean;

  /**
   * @schema ConflictMetadata#objectTypeConflict
   */
  readonly objectTypeConflict?: boolean;

  /**
   * @schema ConflictMetadata#mergeOperations
   */
  readonly mergeOperations?: MergeOperations;

}

/**
 * @schema MergeHunk
 */
export interface MergeHunk {
  /**
   * @schema MergeHunk#isConflict
   */
  readonly isConflict?: boolean;

  /**
   * @schema MergeHunk#source
   */
  readonly source?: MergeHunkDetail;

  /**
   * @schema MergeHunk#destination
   */
  readonly destination?: MergeHunkDetail;

  /**
   * @schema MergeHunk#base
   */
  readonly base?: MergeHunkDetail;

}

/**
 * @schema PullRequestEvent
 */
export interface PullRequestEvent {
  /**
   * @schema PullRequestEvent#pullRequestId
   */
  readonly pullRequestId?: string;

  /**
   * @schema PullRequestEvent#eventDate
   */
  readonly eventDate?: string;

  /**
   * @schema PullRequestEvent#pullRequestEventType
   */
  readonly pullRequestEventType?: string;

  /**
   * @schema PullRequestEvent#actorArn
   */
  readonly actorArn?: string;

  /**
   * @schema PullRequestEvent#pullRequestCreatedEventMetadata
   */
  readonly pullRequestCreatedEventMetadata?: PullRequestCreatedEventMetadata;

  /**
   * @schema PullRequestEvent#pullRequestStatusChangedEventMetadata
   */
  readonly pullRequestStatusChangedEventMetadata?: PullRequestStatusChangedEventMetadata;

  /**
   * @schema PullRequestEvent#pullRequestSourceReferenceUpdatedEventMetadata
   */
  readonly pullRequestSourceReferenceUpdatedEventMetadata?: PullRequestSourceReferenceUpdatedEventMetadata;

  /**
   * @schema PullRequestEvent#pullRequestMergedStateChangedEventMetadata
   */
  readonly pullRequestMergedStateChangedEventMetadata?: PullRequestMergedStateChangedEventMetadata;

  /**
   * @schema PullRequestEvent#approvalRuleEventMetadata
   */
  readonly approvalRuleEventMetadata?: ApprovalRuleEventMetadata;

  /**
   * @schema PullRequestEvent#approvalStateChangedEventMetadata
   */
  readonly approvalStateChangedEventMetadata?: ApprovalStateChangedEventMetadata;

  /**
   * @schema PullRequestEvent#approvalRuleOverriddenEventMetadata
   */
  readonly approvalRuleOverriddenEventMetadata?: ApprovalRuleOverriddenEventMetadata;

}

/**
 * @schema Evaluation
 */
export interface Evaluation {
  /**
   * @schema Evaluation#approved
   */
  readonly approved?: boolean;

  /**
   * @schema Evaluation#overridden
   */
  readonly overridden?: boolean;

  /**
   * @schema Evaluation#approvalRulesSatisfied
   */
  readonly approvalRulesSatisfied?: string[];

  /**
   * @schema Evaluation#approvalRulesNotSatisfied
   */
  readonly approvalRulesNotSatisfied?: string[];

}

/**
 * @schema ReactionForComment
 */
export interface ReactionForComment {
  /**
   * @schema ReactionForComment#reaction
   */
  readonly reaction?: ReactionValueFormats;

  /**
   * @schema ReactionForComment#reactionUsers
   */
  readonly reactionUsers?: string[];

  /**
   * @schema ReactionForComment#reactionsFromDeletedUsersCount
   */
  readonly reactionsFromDeletedUsersCount?: number;

}

/**
 * @schema CommentsForComparedCommit
 */
export interface CommentsForComparedCommit {
  /**
   * @schema CommentsForComparedCommit#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema CommentsForComparedCommit#beforeCommitId
   */
  readonly beforeCommitId?: string;

  /**
   * @schema CommentsForComparedCommit#afterCommitId
   */
  readonly afterCommitId?: string;

  /**
   * @schema CommentsForComparedCommit#beforeBlobId
   */
  readonly beforeBlobId?: string;

  /**
   * @schema CommentsForComparedCommit#afterBlobId
   */
  readonly afterBlobId?: string;

  /**
   * @schema CommentsForComparedCommit#location
   */
  readonly location?: Location;

  /**
   * @schema CommentsForComparedCommit#comments
   */
  readonly comments?: Comment[];

}

/**
 * @schema CommentsForPullRequest
 */
export interface CommentsForPullRequest {
  /**
   * @schema CommentsForPullRequest#pullRequestId
   */
  readonly pullRequestId?: string;

  /**
   * @schema CommentsForPullRequest#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema CommentsForPullRequest#beforeCommitId
   */
  readonly beforeCommitId?: string;

  /**
   * @schema CommentsForPullRequest#afterCommitId
   */
  readonly afterCommitId?: string;

  /**
   * @schema CommentsForPullRequest#beforeBlobId
   */
  readonly beforeBlobId?: string;

  /**
   * @schema CommentsForPullRequest#afterBlobId
   */
  readonly afterBlobId?: string;

  /**
   * @schema CommentsForPullRequest#location
   */
  readonly location?: Location;

  /**
   * @schema CommentsForPullRequest#comments
   */
  readonly comments?: Comment[];

}

/**
 * @schema Difference
 */
export interface Difference {
  /**
   * @schema Difference#beforeBlob
   */
  readonly beforeBlob?: BlobMetadata;

  /**
   * @schema Difference#afterBlob
   */
  readonly afterBlob?: BlobMetadata;

  /**
   * @schema Difference#changeType
   */
  readonly changeType?: string;

}

/**
 * @schema Folder
 */
export interface Folder {
  /**
   * @schema Folder#treeId
   */
  readonly treeId?: string;

  /**
   * @schema Folder#absolutePath
   */
  readonly absolutePath?: string;

  /**
   * @schema Folder#relativePath
   */
  readonly relativePath?: string;

}

/**
 * @schema File
 */
export interface File {
  /**
   * @schema File#blobId
   */
  readonly blobId?: string;

  /**
   * @schema File#absolutePath
   */
  readonly absolutePath?: string;

  /**
   * @schema File#relativePath
   */
  readonly relativePath?: string;

  /**
   * @schema File#fileMode
   */
  readonly fileMode?: string;

}

/**
 * @schema SymbolicLink
 */
export interface SymbolicLink {
  /**
   * @schema SymbolicLink#blobId
   */
  readonly blobId?: string;

  /**
   * @schema SymbolicLink#absolutePath
   */
  readonly absolutePath?: string;

  /**
   * @schema SymbolicLink#relativePath
   */
  readonly relativePath?: string;

  /**
   * @schema SymbolicLink#fileMode
   */
  readonly fileMode?: string;

}

/**
 * @schema SubModule
 */
export interface SubModule {
  /**
   * @schema SubModule#commitId
   */
  readonly commitId?: string;

  /**
   * @schema SubModule#absolutePath
   */
  readonly absolutePath?: string;

  /**
   * @schema SubModule#relativePath
   */
  readonly relativePath?: string;

}

/**
 * @schema Approval
 */
export interface Approval {
  /**
   * @schema Approval#userArn
   */
  readonly userArn?: string;

  /**
   * @schema Approval#approvalState
   */
  readonly approvalState?: string;

}

/**
 * @schema RepositoryTrigger
 */
export interface RepositoryTrigger {
  /**
   * @schema RepositoryTrigger#name
   */
  readonly name: string;

  /**
   * @schema RepositoryTrigger#destinationArn
   */
  readonly destinationArn: string;

  /**
   * @schema RepositoryTrigger#customData
   */
  readonly customData?: string;

  /**
   * @schema RepositoryTrigger#branches
   */
  readonly branches?: string[];

  /**
   * @schema RepositoryTrigger#events
   */
  readonly events: string[];

}

/**
 * @schema RepositoryNameIdPair
 */
export interface RepositoryNameIdPair {
  /**
   * @schema RepositoryNameIdPair#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema RepositoryNameIdPair#repositoryId
   */
  readonly repositoryId?: string;

}

/**
 * @schema Location
 */
export interface Location {
  /**
   * @schema Location#filePath
   */
  readonly filePath?: string;

  /**
   * @schema Location#filePosition
   */
  readonly filePosition?: number;

  /**
   * @schema Location#relativeFileVersion
   */
  readonly relativeFileVersion?: string;

}

/**
 * @schema RepositoryTriggerExecutionFailure
 */
export interface RepositoryTriggerExecutionFailure {
  /**
   * @schema RepositoryTriggerExecutionFailure#trigger
   */
  readonly trigger?: string;

  /**
   * @schema RepositoryTriggerExecutionFailure#failureMessage
   */
  readonly failureMessage?: string;

}

/**
 * @schema UserInfo
 */
export interface UserInfo {
  /**
   * @schema UserInfo#name
   */
  readonly name?: string;

  /**
   * @schema UserInfo#email
   */
  readonly email?: string;

  /**
   * @schema UserInfo#date
   */
  readonly date?: string;

}

/**
 * @schema SourceFileSpecifier
 */
export interface SourceFileSpecifier {
  /**
   * @schema SourceFileSpecifier#filePath
   */
  readonly filePath: string;

  /**
   * @schema SourceFileSpecifier#isMove
   */
  readonly isMove?: boolean;

}

/**
 * @schema PullRequestTarget
 */
export interface PullRequestTarget {
  /**
   * @schema PullRequestTarget#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema PullRequestTarget#sourceReference
   */
  readonly sourceReference?: string;

  /**
   * @schema PullRequestTarget#destinationReference
   */
  readonly destinationReference?: string;

  /**
   * @schema PullRequestTarget#destinationCommit
   */
  readonly destinationCommit?: string;

  /**
   * @schema PullRequestTarget#sourceCommit
   */
  readonly sourceCommit?: string;

  /**
   * @schema PullRequestTarget#mergeBase
   */
  readonly mergeBase?: string;

  /**
   * @schema PullRequestTarget#mergeMetadata
   */
  readonly mergeMetadata?: MergeMetadata;

}

/**
 * @schema OriginApprovalRuleTemplate
 */
export interface OriginApprovalRuleTemplate {
  /**
   * @schema OriginApprovalRuleTemplate#approvalRuleTemplateId
   */
  readonly approvalRuleTemplateId?: string;

  /**
   * @schema OriginApprovalRuleTemplate#approvalRuleTemplateName
   */
  readonly approvalRuleTemplateName?: string;

}

/**
 * @schema ReplaceContentEntry
 */
export interface ReplaceContentEntry {
  /**
   * @schema ReplaceContentEntry#filePath
   */
  readonly filePath: string;

  /**
   * @schema ReplaceContentEntry#replacementType
   */
  readonly replacementType: string;

  /**
   * @schema ReplaceContentEntry#content
   */
  readonly content?: any;

  /**
   * @schema ReplaceContentEntry#fileMode
   */
  readonly fileMode?: string;

}

/**
 * @schema FileSizes
 */
export interface FileSizes {
  /**
   * @schema FileSizes#source
   */
  readonly source?: number;

  /**
   * @schema FileSizes#destination
   */
  readonly destination?: number;

  /**
   * @schema FileSizes#base
   */
  readonly base?: number;

}

/**
 * @schema FileModes
 */
export interface FileModes {
  /**
   * @schema FileModes#source
   */
  readonly source?: string;

  /**
   * @schema FileModes#destination
   */
  readonly destination?: string;

  /**
   * @schema FileModes#base
   */
  readonly base?: string;

}

/**
 * @schema ObjectTypes
 */
export interface ObjectTypes {
  /**
   * @schema ObjectTypes#source
   */
  readonly source?: string;

  /**
   * @schema ObjectTypes#destination
   */
  readonly destination?: string;

  /**
   * @schema ObjectTypes#base
   */
  readonly base?: string;

}

/**
 * @schema IsBinaryFile
 */
export interface IsBinaryFile {
  /**
   * @schema IsBinaryFile#source
   */
  readonly source?: boolean;

  /**
   * @schema IsBinaryFile#destination
   */
  readonly destination?: boolean;

  /**
   * @schema IsBinaryFile#base
   */
  readonly base?: boolean;

}

/**
 * @schema MergeOperations
 */
export interface MergeOperations {
  /**
   * @schema MergeOperations#source
   */
  readonly source?: string;

  /**
   * @schema MergeOperations#destination
   */
  readonly destination?: string;

}

/**
 * @schema MergeHunkDetail
 */
export interface MergeHunkDetail {
  /**
   * @schema MergeHunkDetail#startLine
   */
  readonly startLine?: number;

  /**
   * @schema MergeHunkDetail#endLine
   */
  readonly endLine?: number;

  /**
   * @schema MergeHunkDetail#hunkContent
   */
  readonly hunkContent?: string;

}

/**
 * @schema PullRequestCreatedEventMetadata
 */
export interface PullRequestCreatedEventMetadata {
  /**
   * @schema PullRequestCreatedEventMetadata#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema PullRequestCreatedEventMetadata#sourceCommitId
   */
  readonly sourceCommitId?: string;

  /**
   * @schema PullRequestCreatedEventMetadata#destinationCommitId
   */
  readonly destinationCommitId?: string;

  /**
   * @schema PullRequestCreatedEventMetadata#mergeBase
   */
  readonly mergeBase?: string;

}

/**
 * @schema PullRequestStatusChangedEventMetadata
 */
export interface PullRequestStatusChangedEventMetadata {
  /**
   * @schema PullRequestStatusChangedEventMetadata#pullRequestStatus
   */
  readonly pullRequestStatus?: string;

}

/**
 * @schema PullRequestSourceReferenceUpdatedEventMetadata
 */
export interface PullRequestSourceReferenceUpdatedEventMetadata {
  /**
   * @schema PullRequestSourceReferenceUpdatedEventMetadata#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema PullRequestSourceReferenceUpdatedEventMetadata#beforeCommitId
   */
  readonly beforeCommitId?: string;

  /**
   * @schema PullRequestSourceReferenceUpdatedEventMetadata#afterCommitId
   */
  readonly afterCommitId?: string;

  /**
   * @schema PullRequestSourceReferenceUpdatedEventMetadata#mergeBase
   */
  readonly mergeBase?: string;

}

/**
 * @schema PullRequestMergedStateChangedEventMetadata
 */
export interface PullRequestMergedStateChangedEventMetadata {
  /**
   * @schema PullRequestMergedStateChangedEventMetadata#repositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema PullRequestMergedStateChangedEventMetadata#destinationReference
   */
  readonly destinationReference?: string;

  /**
   * @schema PullRequestMergedStateChangedEventMetadata#mergeMetadata
   */
  readonly mergeMetadata?: MergeMetadata;

}

/**
 * @schema ApprovalRuleEventMetadata
 */
export interface ApprovalRuleEventMetadata {
  /**
   * @schema ApprovalRuleEventMetadata#approvalRuleName
   */
  readonly approvalRuleName?: string;

  /**
   * @schema ApprovalRuleEventMetadata#approvalRuleId
   */
  readonly approvalRuleId?: string;

  /**
   * @schema ApprovalRuleEventMetadata#approvalRuleContent
   */
  readonly approvalRuleContent?: string;

}

/**
 * @schema ApprovalStateChangedEventMetadata
 */
export interface ApprovalStateChangedEventMetadata {
  /**
   * @schema ApprovalStateChangedEventMetadata#revisionId
   */
  readonly revisionId?: string;

  /**
   * @schema ApprovalStateChangedEventMetadata#approvalStatus
   */
  readonly approvalStatus?: string;

}

/**
 * @schema ApprovalRuleOverriddenEventMetadata
 */
export interface ApprovalRuleOverriddenEventMetadata {
  /**
   * @schema ApprovalRuleOverriddenEventMetadata#revisionId
   */
  readonly revisionId?: string;

  /**
   * @schema ApprovalRuleOverriddenEventMetadata#overrideStatus
   */
  readonly overrideStatus?: string;

}

/**
 * @schema ReactionValueFormats
 */
export interface ReactionValueFormats {
  /**
   * @schema ReactionValueFormats#emoji
   */
  readonly emoji?: string;

  /**
   * @schema ReactionValueFormats#shortCode
   */
  readonly shortCode?: string;

  /**
   * @schema ReactionValueFormats#unicode
   */
  readonly unicode?: string;

}

/**
 * @schema BlobMetadata
 */
export interface BlobMetadata {
  /**
   * @schema BlobMetadata#blobId
   */
  readonly blobId?: string;

  /**
   * @schema BlobMetadata#path
   */
  readonly path?: string;

  /**
   * @schema BlobMetadata#mode
   */
  readonly mode?: string;

}

/**
 * @schema MergeMetadata
 */
export interface MergeMetadata {
  /**
   * @schema MergeMetadata#isMerged
   */
  readonly isMerged?: boolean;

  /**
   * @schema MergeMetadata#mergedBy
   */
  readonly mergedBy?: string;

  /**
   * @schema MergeMetadata#mergeCommitId
   */
  readonly mergeCommitId?: string;

  /**
   * @schema MergeMetadata#mergeOption
   */
  readonly mergeOption?: string;

}
