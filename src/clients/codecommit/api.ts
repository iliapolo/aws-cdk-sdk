import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class CodeCommitClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateApprovalRuleTemplateWithRepository(input: shapes.CodeCommitAssociateApprovalRuleTemplateWithRepositoryInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateApprovalRuleTemplateWithRepository',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.AssociateApprovalRuleTemplateWithRepository'),
        parameters: {
          approvalRuleTemplateName: input.approvalRuleTemplateName,
          repositoryName: input.repositoryName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateApprovalRuleTemplateWithRepository', props);
  }

  public batchAssociateApprovalRuleTemplateWithRepositories(input: shapes.CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesInput): CodeCommitBatchAssociateApprovalRuleTemplateWithRepositories {
    return new CodeCommitBatchAssociateApprovalRuleTemplateWithRepositories(this, 'BatchAssociateApprovalRuleTemplateWithRepositories', this.__resources, input);
  }

  public batchDescribeMergeConflicts(input: shapes.CodeCommitBatchDescribeMergeConflictsInput): CodeCommitBatchDescribeMergeConflicts {
    return new CodeCommitBatchDescribeMergeConflicts(this, 'BatchDescribeMergeConflicts', this.__resources, input);
  }

  public batchDisassociateApprovalRuleTemplateFromRepositories(input: shapes.CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesInput): CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositories {
    return new CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositories(this, 'BatchDisassociateApprovalRuleTemplateFromRepositories', this.__resources, input);
  }

  public batchGetCommits(input: shapes.CodeCommitBatchGetCommitsInput): CodeCommitBatchGetCommits {
    return new CodeCommitBatchGetCommits(this, 'BatchGetCommits', this.__resources, input);
  }

  public batchGetRepositories(input: shapes.CodeCommitBatchGetRepositoriesInput): CodeCommitBatchGetRepositories {
    return new CodeCommitBatchGetRepositories(this, 'BatchGetRepositories', this.__resources, input);
  }

  public createApprovalRuleTemplate(input: shapes.CodeCommitCreateApprovalRuleTemplateInput): CodeCommitCreateApprovalRuleTemplate {
    return new CodeCommitCreateApprovalRuleTemplate(this, 'CreateApprovalRuleTemplate', this.__resources, input);
  }

  public createBranch(input: shapes.CodeCommitCreateBranchInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBranch',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreateBranch'),
        parameters: {
          repositoryName: input.repositoryName,
          branchName: input.branchName,
          commitId: input.commitId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateBranch', props);
  }

  public createCommit(input: shapes.CodeCommitCreateCommitInput): CodeCommitCreateCommit {
    return new CodeCommitCreateCommit(this, 'CreateCommit', this.__resources, input);
  }

  public createPullRequest(input: shapes.CodeCommitCreatePullRequestInput): CodeCommitCreatePullRequest {
    return new CodeCommitCreatePullRequest(this, 'CreatePullRequest', this.__resources, input);
  }

  public createPullRequestApprovalRule(input: shapes.CodeCommitCreatePullRequestApprovalRuleInput): CodeCommitCreatePullRequestApprovalRule {
    return new CodeCommitCreatePullRequestApprovalRule(this, 'CreatePullRequestApprovalRule', this.__resources, input);
  }

  public createRepository(input: shapes.CodeCommitCreateRepositoryInput): CodeCommitCreateRepository {
    return new CodeCommitCreateRepository(this, 'CreateRepository', this.__resources, input);
  }

  public createUnreferencedMergeCommit(input: shapes.CodeCommitCreateUnreferencedMergeCommitInput): CodeCommitCreateUnreferencedMergeCommit {
    return new CodeCommitCreateUnreferencedMergeCommit(this, 'CreateUnreferencedMergeCommit', this.__resources, input);
  }

  public deleteApprovalRuleTemplate(input: shapes.CodeCommitDeleteApprovalRuleTemplateInput): CodeCommitDeleteApprovalRuleTemplate {
    return new CodeCommitDeleteApprovalRuleTemplate(this, 'DeleteApprovalRuleTemplate', this.__resources, input);
  }

  public deleteBranch(input: shapes.CodeCommitDeleteBranchInput): CodeCommitDeleteBranch {
    return new CodeCommitDeleteBranch(this, 'DeleteBranch', this.__resources, input);
  }

  public deleteCommentContent(input: shapes.CodeCommitDeleteCommentContentInput): CodeCommitDeleteCommentContent {
    return new CodeCommitDeleteCommentContent(this, 'DeleteCommentContent', this.__resources, input);
  }

  public deleteFile(input: shapes.CodeCommitDeleteFileInput): CodeCommitDeleteFile {
    return new CodeCommitDeleteFile(this, 'DeleteFile', this.__resources, input);
  }

  public deletePullRequestApprovalRule(input: shapes.CodeCommitDeletePullRequestApprovalRuleInput): CodeCommitDeletePullRequestApprovalRule {
    return new CodeCommitDeletePullRequestApprovalRule(this, 'DeletePullRequestApprovalRule', this.__resources, input);
  }

  public deleteRepository(input: shapes.CodeCommitDeleteRepositoryInput): CodeCommitDeleteRepository {
    return new CodeCommitDeleteRepository(this, 'DeleteRepository', this.__resources, input);
  }

  public describeMergeConflicts(input: shapes.CodeCommitDescribeMergeConflictsInput): CodeCommitDescribeMergeConflicts {
    return new CodeCommitDescribeMergeConflicts(this, 'DescribeMergeConflicts', this.__resources, input);
  }

  public describePullRequestEvents(input: shapes.CodeCommitDescribePullRequestEventsInput): CodeCommitDescribePullRequestEvents {
    return new CodeCommitDescribePullRequestEvents(this, 'DescribePullRequestEvents', this.__resources, input);
  }

  public disassociateApprovalRuleTemplateFromRepository(input: shapes.CodeCommitDisassociateApprovalRuleTemplateFromRepositoryInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateApprovalRuleTemplateFromRepository',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DisassociateApprovalRuleTemplateFromRepository'),
        parameters: {
          approvalRuleTemplateName: input.approvalRuleTemplateName,
          repositoryName: input.repositoryName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateApprovalRuleTemplateFromRepository', props);
  }

  public evaluatePullRequestApprovalRules(input: shapes.CodeCommitEvaluatePullRequestApprovalRulesInput): CodeCommitEvaluatePullRequestApprovalRules {
    return new CodeCommitEvaluatePullRequestApprovalRules(this, 'EvaluatePullRequestApprovalRules', this.__resources, input);
  }

  public fetchApprovalRuleTemplate(input: shapes.CodeCommitGetApprovalRuleTemplateInput): CodeCommitFetchApprovalRuleTemplate {
    return new CodeCommitFetchApprovalRuleTemplate(this, 'FetchApprovalRuleTemplate', this.__resources, input);
  }

  public fetchBlob(input: shapes.CodeCommitGetBlobInput): CodeCommitFetchBlob {
    return new CodeCommitFetchBlob(this, 'FetchBlob', this.__resources, input);
  }

  public fetchBranch(input: shapes.CodeCommitGetBranchInput): CodeCommitFetchBranch {
    return new CodeCommitFetchBranch(this, 'FetchBranch', this.__resources, input);
  }

  public fetchComment(input: shapes.CodeCommitGetCommentInput): CodeCommitFetchComment {
    return new CodeCommitFetchComment(this, 'FetchComment', this.__resources, input);
  }

  public fetchCommentReactions(input: shapes.CodeCommitGetCommentReactionsInput): CodeCommitFetchCommentReactions {
    return new CodeCommitFetchCommentReactions(this, 'FetchCommentReactions', this.__resources, input);
  }

  public fetchCommentsForComparedCommit(input: shapes.CodeCommitGetCommentsForComparedCommitInput): CodeCommitFetchCommentsForComparedCommit {
    return new CodeCommitFetchCommentsForComparedCommit(this, 'FetchCommentsForComparedCommit', this.__resources, input);
  }

  public fetchCommentsForPullRequest(input: shapes.CodeCommitGetCommentsForPullRequestInput): CodeCommitFetchCommentsForPullRequest {
    return new CodeCommitFetchCommentsForPullRequest(this, 'FetchCommentsForPullRequest', this.__resources, input);
  }

  public fetchCommit(input: shapes.CodeCommitGetCommitInput): CodeCommitFetchCommit {
    return new CodeCommitFetchCommit(this, 'FetchCommit', this.__resources, input);
  }

  public fetchDifferences(input: shapes.CodeCommitGetDifferencesInput): CodeCommitFetchDifferences {
    return new CodeCommitFetchDifferences(this, 'FetchDifferences', this.__resources, input);
  }

  public fetchFile(input: shapes.CodeCommitGetFileInput): CodeCommitFetchFile {
    return new CodeCommitFetchFile(this, 'FetchFile', this.__resources, input);
  }

  public fetchFolder(input: shapes.CodeCommitGetFolderInput): CodeCommitFetchFolder {
    return new CodeCommitFetchFolder(this, 'FetchFolder', this.__resources, input);
  }

  public fetchMergeCommit(input: shapes.CodeCommitGetMergeCommitInput): CodeCommitFetchMergeCommit {
    return new CodeCommitFetchMergeCommit(this, 'FetchMergeCommit', this.__resources, input);
  }

  public fetchMergeConflicts(input: shapes.CodeCommitGetMergeConflictsInput): CodeCommitFetchMergeConflicts {
    return new CodeCommitFetchMergeConflicts(this, 'FetchMergeConflicts', this.__resources, input);
  }

  public fetchMergeOptions(input: shapes.CodeCommitGetMergeOptionsInput): CodeCommitFetchMergeOptions {
    return new CodeCommitFetchMergeOptions(this, 'FetchMergeOptions', this.__resources, input);
  }

  public fetchPullRequest(input: shapes.CodeCommitGetPullRequestInput): CodeCommitFetchPullRequest {
    return new CodeCommitFetchPullRequest(this, 'FetchPullRequest', this.__resources, input);
  }

  public fetchPullRequestApprovalStates(input: shapes.CodeCommitGetPullRequestApprovalStatesInput): CodeCommitFetchPullRequestApprovalStates {
    return new CodeCommitFetchPullRequestApprovalStates(this, 'FetchPullRequestApprovalStates', this.__resources, input);
  }

  public fetchPullRequestOverrideState(input: shapes.CodeCommitGetPullRequestOverrideStateInput): CodeCommitFetchPullRequestOverrideState {
    return new CodeCommitFetchPullRequestOverrideState(this, 'FetchPullRequestOverrideState', this.__resources, input);
  }

  public fetchRepository(input: shapes.CodeCommitGetRepositoryInput): CodeCommitFetchRepository {
    return new CodeCommitFetchRepository(this, 'FetchRepository', this.__resources, input);
  }

  public fetchRepositoryTriggers(input: shapes.CodeCommitGetRepositoryTriggersInput): CodeCommitFetchRepositoryTriggers {
    return new CodeCommitFetchRepositoryTriggers(this, 'FetchRepositoryTriggers', this.__resources, input);
  }

  public listApprovalRuleTemplates(input: shapes.CodeCommitListApprovalRuleTemplatesInput): CodeCommitListApprovalRuleTemplates {
    return new CodeCommitListApprovalRuleTemplates(this, 'ListApprovalRuleTemplates', this.__resources, input);
  }

  public listAssociatedApprovalRuleTemplatesForRepository(input: shapes.CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryInput): CodeCommitListAssociatedApprovalRuleTemplatesForRepository {
    return new CodeCommitListAssociatedApprovalRuleTemplatesForRepository(this, 'ListAssociatedApprovalRuleTemplatesForRepository', this.__resources, input);
  }

  public listBranches(input: shapes.CodeCommitListBranchesInput): CodeCommitListBranches {
    return new CodeCommitListBranches(this, 'ListBranches', this.__resources, input);
  }

  public listPullRequests(input: shapes.CodeCommitListPullRequestsInput): CodeCommitListPullRequests {
    return new CodeCommitListPullRequests(this, 'ListPullRequests', this.__resources, input);
  }

  public listRepositories(input: shapes.CodeCommitListRepositoriesInput): CodeCommitListRepositories {
    return new CodeCommitListRepositories(this, 'ListRepositories', this.__resources, input);
  }

  public listRepositoriesForApprovalRuleTemplate(input: shapes.CodeCommitListRepositoriesForApprovalRuleTemplateInput): CodeCommitListRepositoriesForApprovalRuleTemplate {
    return new CodeCommitListRepositoriesForApprovalRuleTemplate(this, 'ListRepositoriesForApprovalRuleTemplate', this.__resources, input);
  }

  public listTagsForResource(input: shapes.CodeCommitListTagsForResourceInput): CodeCommitListTagsForResource {
    return new CodeCommitListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public mergeBranchesByFastForward(input: shapes.CodeCommitMergeBranchesByFastForwardInput): CodeCommitMergeBranchesByFastForward {
    return new CodeCommitMergeBranchesByFastForward(this, 'MergeBranchesByFastForward', this.__resources, input);
  }

  public mergeBranchesBySquash(input: shapes.CodeCommitMergeBranchesBySquashInput): CodeCommitMergeBranchesBySquash {
    return new CodeCommitMergeBranchesBySquash(this, 'MergeBranchesBySquash', this.__resources, input);
  }

  public mergeBranchesByThreeWay(input: shapes.CodeCommitMergeBranchesByThreeWayInput): CodeCommitMergeBranchesByThreeWay {
    return new CodeCommitMergeBranchesByThreeWay(this, 'MergeBranchesByThreeWay', this.__resources, input);
  }

  public mergePullRequestByFastForward(input: shapes.CodeCommitMergePullRequestByFastForwardInput): CodeCommitMergePullRequestByFastForward {
    return new CodeCommitMergePullRequestByFastForward(this, 'MergePullRequestByFastForward', this.__resources, input);
  }

  public mergePullRequestBySquash(input: shapes.CodeCommitMergePullRequestBySquashInput): CodeCommitMergePullRequestBySquash {
    return new CodeCommitMergePullRequestBySquash(this, 'MergePullRequestBySquash', this.__resources, input);
  }

  public mergePullRequestByThreeWay(input: shapes.CodeCommitMergePullRequestByThreeWayInput): CodeCommitMergePullRequestByThreeWay {
    return new CodeCommitMergePullRequestByThreeWay(this, 'MergePullRequestByThreeWay', this.__resources, input);
  }

  public overridePullRequestApprovalRules(input: shapes.CodeCommitOverridePullRequestApprovalRulesInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'overridePullRequestApprovalRules',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.OverridePullRequestApprovalRules'),
        parameters: {
          pullRequestId: input.pullRequestId,
          revisionId: input.revisionId,
          overrideStatus: input.overrideStatus,
        },
      },
    };
    new cr.AwsCustomResource(this, 'OverridePullRequestApprovalRules', props);
  }

  public postCommentForComparedCommit(input: shapes.CodeCommitPostCommentForComparedCommitInput): CodeCommitPostCommentForComparedCommit {
    return new CodeCommitPostCommentForComparedCommit(this, 'PostCommentForComparedCommit', this.__resources, input);
  }

  public postCommentForPullRequest(input: shapes.CodeCommitPostCommentForPullRequestInput): CodeCommitPostCommentForPullRequest {
    return new CodeCommitPostCommentForPullRequest(this, 'PostCommentForPullRequest', this.__resources, input);
  }

  public postCommentReply(input: shapes.CodeCommitPostCommentReplyInput): CodeCommitPostCommentReply {
    return new CodeCommitPostCommentReply(this, 'PostCommentReply', this.__resources, input);
  }

  public putCommentReaction(input: shapes.CodeCommitPutCommentReactionInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putCommentReaction',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PutCommentReaction'),
        parameters: {
          commentId: input.commentId,
          reactionValue: input.reactionValue,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutCommentReaction', props);
  }

  public putFile(input: shapes.CodeCommitPutFileInput): CodeCommitPutFile {
    return new CodeCommitPutFile(this, 'PutFile', this.__resources, input);
  }

  public putRepositoryTriggers(input: shapes.CodeCommitPutRepositoryTriggersInput): CodeCommitPutRepositoryTriggers {
    return new CodeCommitPutRepositoryTriggers(this, 'PutRepositoryTriggers', this.__resources, input);
  }

  public tagResource(input: shapes.CodeCommitTagResourceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public testRepositoryTriggers(input: shapes.CodeCommitTestRepositoryTriggersInput): CodeCommitTestRepositoryTriggers {
    return new CodeCommitTestRepositoryTriggers(this, 'TestRepositoryTriggers', this.__resources, input);
  }

  public untagResource(input: shapes.CodeCommitUntagResourceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateApprovalRuleTemplateContent(input: shapes.CodeCommitUpdateApprovalRuleTemplateContentInput): CodeCommitUpdateApprovalRuleTemplateContent {
    return new CodeCommitUpdateApprovalRuleTemplateContent(this, 'UpdateApprovalRuleTemplateContent', this.__resources, input);
  }

  public updateApprovalRuleTemplateDescription(input: shapes.CodeCommitUpdateApprovalRuleTemplateDescriptionInput): CodeCommitUpdateApprovalRuleTemplateDescription {
    return new CodeCommitUpdateApprovalRuleTemplateDescription(this, 'UpdateApprovalRuleTemplateDescription', this.__resources, input);
  }

  public updateApprovalRuleTemplateName(input: shapes.CodeCommitUpdateApprovalRuleTemplateNameInput): CodeCommitUpdateApprovalRuleTemplateName {
    return new CodeCommitUpdateApprovalRuleTemplateName(this, 'UpdateApprovalRuleTemplateName', this.__resources, input);
  }

  public updateComment(input: shapes.CodeCommitUpdateCommentInput): CodeCommitUpdateComment {
    return new CodeCommitUpdateComment(this, 'UpdateComment', this.__resources, input);
  }

  public updateDefaultBranch(input: shapes.CodeCommitUpdateDefaultBranchInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDefaultBranch',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateDefaultBranch'),
        parameters: {
          repositoryName: input.repositoryName,
          defaultBranchName: input.defaultBranchName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateDefaultBranch', props);
  }

  public updatePullRequestApprovalRuleContent(input: shapes.CodeCommitUpdatePullRequestApprovalRuleContentInput): CodeCommitUpdatePullRequestApprovalRuleContent {
    return new CodeCommitUpdatePullRequestApprovalRuleContent(this, 'UpdatePullRequestApprovalRuleContent', this.__resources, input);
  }

  public updatePullRequestApprovalState(input: shapes.CodeCommitUpdatePullRequestApprovalStateInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestApprovalState',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestApprovalState'),
        parameters: {
          pullRequestId: input.pullRequestId,
          revisionId: input.revisionId,
          approvalState: input.approvalState,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdatePullRequestApprovalState', props);
  }

  public updatePullRequestDescription(input: shapes.CodeCommitUpdatePullRequestDescriptionInput): CodeCommitUpdatePullRequestDescription {
    return new CodeCommitUpdatePullRequestDescription(this, 'UpdatePullRequestDescription', this.__resources, input);
  }

  public updatePullRequestStatus(input: shapes.CodeCommitUpdatePullRequestStatusInput): CodeCommitUpdatePullRequestStatus {
    return new CodeCommitUpdatePullRequestStatus(this, 'UpdatePullRequestStatus', this.__resources, input);
  }

  public updatePullRequestTitle(input: shapes.CodeCommitUpdatePullRequestTitleInput): CodeCommitUpdatePullRequestTitle {
    return new CodeCommitUpdatePullRequestTitle(this, 'UpdatePullRequestTitle', this.__resources, input);
  }

  public updateRepositoryDescription(input: shapes.CodeCommitUpdateRepositoryDescriptionInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRepositoryDescription',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateRepositoryDescription'),
        parameters: {
          repositoryName: input.repositoryName,
          repositoryDescription: input.repositoryDescription,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateRepositoryDescription', props);
  }

  public updateRepositoryName(input: shapes.CodeCommitUpdateRepositoryNameInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRepositoryName',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateRepositoryName'),
        parameters: {
          oldName: input.oldName,
          newName: input.newName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateRepositoryName', props);
  }

}

export class CodeCommitBatchAssociateApprovalRuleTemplateWithRepositories extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesInput) {
    super(scope, id);
  }

  public get associatedRepositoryNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchAssociateApprovalRuleTemplateWithRepositories',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.BatchAssociateApprovalRuleTemplateWithRepositories.associatedRepositoryNames'),
        outputPath: 'associatedRepositoryNames',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
          repositoryNames: this.input.repositoryNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchAssociateApprovalRuleTemplateWithRepositories.associatedRepositoryNames', props);
    return resource.getResponseField('associatedRepositoryNames') as unknown as string[];
  }

  public get errors(): shapes.CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchAssociateApprovalRuleTemplateWithRepositories',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.BatchAssociateApprovalRuleTemplateWithRepositories.errors'),
        outputPath: 'errors',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
          repositoryNames: this.input.repositoryNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchAssociateApprovalRuleTemplateWithRepositories.errors', props);
    return resource.getResponseField('errors') as unknown as shapes.CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesError[];
  }

}

export class CodeCommitBatchDescribeMergeConflicts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitBatchDescribeMergeConflictsInput) {
    super(scope, id);
  }

  public get conflicts(): shapes.CodeCommitConflict[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDescribeMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.BatchDescribeMergeConflicts.conflicts'),
        outputPath: 'conflicts',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          maxMergeHunks: this.input.maxMergeHunks,
          maxConflictFiles: this.input.maxConflictFiles,
          filePaths: this.input.filePaths,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDescribeMergeConflicts.conflicts', props);
    return resource.getResponseField('conflicts') as unknown as shapes.CodeCommitConflict[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDescribeMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.BatchDescribeMergeConflicts.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          maxMergeHunks: this.input.maxMergeHunks,
          maxConflictFiles: this.input.maxConflictFiles,
          filePaths: this.input.filePaths,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDescribeMergeConflicts.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get errors(): shapes.CodeCommitBatchDescribeMergeConflictsError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDescribeMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.BatchDescribeMergeConflicts.errors'),
        outputPath: 'errors',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          maxMergeHunks: this.input.maxMergeHunks,
          maxConflictFiles: this.input.maxConflictFiles,
          filePaths: this.input.filePaths,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDescribeMergeConflicts.errors', props);
    return resource.getResponseField('errors') as unknown as shapes.CodeCommitBatchDescribeMergeConflictsError[];
  }

  public get destinationCommitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDescribeMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.BatchDescribeMergeConflicts.destinationCommitId'),
        outputPath: 'destinationCommitId',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          maxMergeHunks: this.input.maxMergeHunks,
          maxConflictFiles: this.input.maxConflictFiles,
          filePaths: this.input.filePaths,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDescribeMergeConflicts.destinationCommitId', props);
    return resource.getResponseField('destinationCommitId') as unknown as string;
  }

  public get sourceCommitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDescribeMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.BatchDescribeMergeConflicts.sourceCommitId'),
        outputPath: 'sourceCommitId',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          maxMergeHunks: this.input.maxMergeHunks,
          maxConflictFiles: this.input.maxConflictFiles,
          filePaths: this.input.filePaths,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDescribeMergeConflicts.sourceCommitId', props);
    return resource.getResponseField('sourceCommitId') as unknown as string;
  }

  public get baseCommitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDescribeMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.BatchDescribeMergeConflicts.baseCommitId'),
        outputPath: 'baseCommitId',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          maxMergeHunks: this.input.maxMergeHunks,
          maxConflictFiles: this.input.maxConflictFiles,
          filePaths: this.input.filePaths,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDescribeMergeConflicts.baseCommitId', props);
    return resource.getResponseField('baseCommitId') as unknown as string;
  }

}

export class CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositories extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesInput) {
    super(scope, id);
  }

  public get disassociatedRepositoryNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDisassociateApprovalRuleTemplateFromRepositories',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.BatchDisassociateApprovalRuleTemplateFromRepositories.disassociatedRepositoryNames'),
        outputPath: 'disassociatedRepositoryNames',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
          repositoryNames: this.input.repositoryNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDisassociateApprovalRuleTemplateFromRepositories.disassociatedRepositoryNames', props);
    return resource.getResponseField('disassociatedRepositoryNames') as unknown as string[];
  }

  public get errors(): shapes.CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDisassociateApprovalRuleTemplateFromRepositories',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.BatchDisassociateApprovalRuleTemplateFromRepositories.errors'),
        outputPath: 'errors',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
          repositoryNames: this.input.repositoryNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDisassociateApprovalRuleTemplateFromRepositories.errors', props);
    return resource.getResponseField('errors') as unknown as shapes.CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesError[];
  }

}

export class CodeCommitBatchGetCommits extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitBatchGetCommitsInput) {
    super(scope, id);
  }

  public get commits(): shapes.CodeCommitCommit[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetCommits',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.BatchGetCommits.commits'),
        outputPath: 'commits',
        parameters: {
          commitIds: this.input.commitIds,
          repositoryName: this.input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetCommits.commits', props);
    return resource.getResponseField('commits') as unknown as shapes.CodeCommitCommit[];
  }

  public get errors(): shapes.CodeCommitBatchGetCommitsError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetCommits',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.BatchGetCommits.errors'),
        outputPath: 'errors',
        parameters: {
          commitIds: this.input.commitIds,
          repositoryName: this.input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetCommits.errors', props);
    return resource.getResponseField('errors') as unknown as shapes.CodeCommitBatchGetCommitsError[];
  }

}

export class CodeCommitBatchGetRepositories extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitBatchGetRepositoriesInput) {
    super(scope, id);
  }

  public get repositories(): shapes.CodeCommitRepositoryMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetRepositories',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.BatchGetRepositories.repositories'),
        outputPath: 'repositories',
        parameters: {
          repositoryNames: this.input.repositoryNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetRepositories.repositories', props);
    return resource.getResponseField('repositories') as unknown as shapes.CodeCommitRepositoryMetadata[];
  }

  public get repositoriesNotFound(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetRepositories',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.BatchGetRepositories.repositoriesNotFound'),
        outputPath: 'repositoriesNotFound',
        parameters: {
          repositoryNames: this.input.repositoryNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetRepositories.repositoriesNotFound', props);
    return resource.getResponseField('repositoriesNotFound') as unknown as string[];
  }

}

export class CodeCommitCreateApprovalRuleTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitCreateApprovalRuleTemplateInput) {
    super(scope, id);
  }

  public get approvalRuleTemplate(): CodeCommitCreateApprovalRuleTemplateApprovalRuleTemplate {
    return new CodeCommitCreateApprovalRuleTemplateApprovalRuleTemplate(this, 'ApprovalRuleTemplate', this.__resources, this.input);
  }

}

export class CodeCommitCreateApprovalRuleTemplateApprovalRuleTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitCreateApprovalRuleTemplateInput) {
    super(scope, id);
  }

  public get approvalRuleTemplateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApprovalRuleTemplate',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreateApprovalRuleTemplate.approvalRuleTemplate.approvalRuleTemplateId'),
        outputPath: 'approvalRuleTemplate.approvalRuleTemplateId',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
          approvalRuleTemplateContent: this.input.approvalRuleTemplateContent,
          approvalRuleTemplateDescription: this.input.approvalRuleTemplateDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApprovalRuleTemplate.approvalRuleTemplate.approvalRuleTemplateId', props);
    return resource.getResponseField('approvalRuleTemplate.approvalRuleTemplateId') as unknown as string;
  }

  public get approvalRuleTemplateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApprovalRuleTemplate',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreateApprovalRuleTemplate.approvalRuleTemplate.approvalRuleTemplateName'),
        outputPath: 'approvalRuleTemplate.approvalRuleTemplateName',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
          approvalRuleTemplateContent: this.input.approvalRuleTemplateContent,
          approvalRuleTemplateDescription: this.input.approvalRuleTemplateDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApprovalRuleTemplate.approvalRuleTemplate.approvalRuleTemplateName', props);
    return resource.getResponseField('approvalRuleTemplate.approvalRuleTemplateName') as unknown as string;
  }

  public get approvalRuleTemplateDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApprovalRuleTemplate',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreateApprovalRuleTemplate.approvalRuleTemplate.approvalRuleTemplateDescription'),
        outputPath: 'approvalRuleTemplate.approvalRuleTemplateDescription',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
          approvalRuleTemplateContent: this.input.approvalRuleTemplateContent,
          approvalRuleTemplateDescription: this.input.approvalRuleTemplateDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApprovalRuleTemplate.approvalRuleTemplate.approvalRuleTemplateDescription', props);
    return resource.getResponseField('approvalRuleTemplate.approvalRuleTemplateDescription') as unknown as string;
  }

  public get approvalRuleTemplateContent(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApprovalRuleTemplate',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreateApprovalRuleTemplate.approvalRuleTemplate.approvalRuleTemplateContent'),
        outputPath: 'approvalRuleTemplate.approvalRuleTemplateContent',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
          approvalRuleTemplateContent: this.input.approvalRuleTemplateContent,
          approvalRuleTemplateDescription: this.input.approvalRuleTemplateDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApprovalRuleTemplate.approvalRuleTemplate.approvalRuleTemplateContent', props);
    return resource.getResponseField('approvalRuleTemplate.approvalRuleTemplateContent') as unknown as string;
  }

  public get ruleContentSha256(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApprovalRuleTemplate',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreateApprovalRuleTemplate.approvalRuleTemplate.ruleContentSha256'),
        outputPath: 'approvalRuleTemplate.ruleContentSha256',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
          approvalRuleTemplateContent: this.input.approvalRuleTemplateContent,
          approvalRuleTemplateDescription: this.input.approvalRuleTemplateDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApprovalRuleTemplate.approvalRuleTemplate.ruleContentSha256', props);
    return resource.getResponseField('approvalRuleTemplate.ruleContentSha256') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApprovalRuleTemplate',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreateApprovalRuleTemplate.approvalRuleTemplate.lastModifiedDate'),
        outputPath: 'approvalRuleTemplate.lastModifiedDate',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
          approvalRuleTemplateContent: this.input.approvalRuleTemplateContent,
          approvalRuleTemplateDescription: this.input.approvalRuleTemplateDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApprovalRuleTemplate.approvalRuleTemplate.lastModifiedDate', props);
    return resource.getResponseField('approvalRuleTemplate.lastModifiedDate') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApprovalRuleTemplate',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreateApprovalRuleTemplate.approvalRuleTemplate.creationDate'),
        outputPath: 'approvalRuleTemplate.creationDate',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
          approvalRuleTemplateContent: this.input.approvalRuleTemplateContent,
          approvalRuleTemplateDescription: this.input.approvalRuleTemplateDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApprovalRuleTemplate.approvalRuleTemplate.creationDate', props);
    return resource.getResponseField('approvalRuleTemplate.creationDate') as unknown as string;
  }

  public get lastModifiedUser(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApprovalRuleTemplate',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreateApprovalRuleTemplate.approvalRuleTemplate.lastModifiedUser'),
        outputPath: 'approvalRuleTemplate.lastModifiedUser',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
          approvalRuleTemplateContent: this.input.approvalRuleTemplateContent,
          approvalRuleTemplateDescription: this.input.approvalRuleTemplateDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApprovalRuleTemplate.approvalRuleTemplate.lastModifiedUser', props);
    return resource.getResponseField('approvalRuleTemplate.lastModifiedUser') as unknown as string;
  }

}

export class CodeCommitCreateCommit extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitCreateCommitInput) {
    super(scope, id);
  }

  public get commitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreateCommit.commitId'),
        outputPath: 'commitId',
        parameters: {
          repositoryName: this.input.repositoryName,
          branchName: this.input.branchName,
          parentCommitId: this.input.parentCommitId,
          authorName: this.input.authorName,
          email: this.input.email,
          commitMessage: this.input.commitMessage,
          keepEmptyFolders: this.input.keepEmptyFolders,
          putFiles: this.input.putFiles,
          deleteFiles: this.input.deleteFiles,
          setFileModes: this.input.setFileModes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCommit.commitId', props);
    return resource.getResponseField('commitId') as unknown as string;
  }

  public get treeId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreateCommit.treeId'),
        outputPath: 'treeId',
        parameters: {
          repositoryName: this.input.repositoryName,
          branchName: this.input.branchName,
          parentCommitId: this.input.parentCommitId,
          authorName: this.input.authorName,
          email: this.input.email,
          commitMessage: this.input.commitMessage,
          keepEmptyFolders: this.input.keepEmptyFolders,
          putFiles: this.input.putFiles,
          deleteFiles: this.input.deleteFiles,
          setFileModes: this.input.setFileModes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCommit.treeId', props);
    return resource.getResponseField('treeId') as unknown as string;
  }

  public get filesAdded(): shapes.CodeCommitFileMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreateCommit.filesAdded'),
        outputPath: 'filesAdded',
        parameters: {
          repositoryName: this.input.repositoryName,
          branchName: this.input.branchName,
          parentCommitId: this.input.parentCommitId,
          authorName: this.input.authorName,
          email: this.input.email,
          commitMessage: this.input.commitMessage,
          keepEmptyFolders: this.input.keepEmptyFolders,
          putFiles: this.input.putFiles,
          deleteFiles: this.input.deleteFiles,
          setFileModes: this.input.setFileModes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCommit.filesAdded', props);
    return resource.getResponseField('filesAdded') as unknown as shapes.CodeCommitFileMetadata[];
  }

  public get filesUpdated(): shapes.CodeCommitFileMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreateCommit.filesUpdated'),
        outputPath: 'filesUpdated',
        parameters: {
          repositoryName: this.input.repositoryName,
          branchName: this.input.branchName,
          parentCommitId: this.input.parentCommitId,
          authorName: this.input.authorName,
          email: this.input.email,
          commitMessage: this.input.commitMessage,
          keepEmptyFolders: this.input.keepEmptyFolders,
          putFiles: this.input.putFiles,
          deleteFiles: this.input.deleteFiles,
          setFileModes: this.input.setFileModes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCommit.filesUpdated', props);
    return resource.getResponseField('filesUpdated') as unknown as shapes.CodeCommitFileMetadata[];
  }

  public get filesDeleted(): shapes.CodeCommitFileMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreateCommit.filesDeleted'),
        outputPath: 'filesDeleted',
        parameters: {
          repositoryName: this.input.repositoryName,
          branchName: this.input.branchName,
          parentCommitId: this.input.parentCommitId,
          authorName: this.input.authorName,
          email: this.input.email,
          commitMessage: this.input.commitMessage,
          keepEmptyFolders: this.input.keepEmptyFolders,
          putFiles: this.input.putFiles,
          deleteFiles: this.input.deleteFiles,
          setFileModes: this.input.setFileModes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCommit.filesDeleted', props);
    return resource.getResponseField('filesDeleted') as unknown as shapes.CodeCommitFileMetadata[];
  }

}

export class CodeCommitCreatePullRequest extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitCreatePullRequestInput) {
    super(scope, id);
  }

  public get pullRequest(): CodeCommitCreatePullRequestPullRequest {
    return new CodeCommitCreatePullRequestPullRequest(this, 'PullRequest', this.__resources, this.input);
  }

}

export class CodeCommitCreatePullRequestPullRequest extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitCreatePullRequestInput) {
    super(scope, id);
  }

  public get pullRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreatePullRequest.pullRequest.pullRequestId'),
        outputPath: 'pullRequest.pullRequestId',
        parameters: {
          title: this.input.title,
          description: this.input.description,
          targets: this.input.targets,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePullRequest.pullRequest.pullRequestId', props);
    return resource.getResponseField('pullRequest.pullRequestId') as unknown as string;
  }

  public get title(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreatePullRequest.pullRequest.title'),
        outputPath: 'pullRequest.title',
        parameters: {
          title: this.input.title,
          description: this.input.description,
          targets: this.input.targets,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePullRequest.pullRequest.title', props);
    return resource.getResponseField('pullRequest.title') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreatePullRequest.pullRequest.description'),
        outputPath: 'pullRequest.description',
        parameters: {
          title: this.input.title,
          description: this.input.description,
          targets: this.input.targets,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePullRequest.pullRequest.description', props);
    return resource.getResponseField('pullRequest.description') as unknown as string;
  }

  public get lastActivityDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreatePullRequest.pullRequest.lastActivityDate'),
        outputPath: 'pullRequest.lastActivityDate',
        parameters: {
          title: this.input.title,
          description: this.input.description,
          targets: this.input.targets,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePullRequest.pullRequest.lastActivityDate', props);
    return resource.getResponseField('pullRequest.lastActivityDate') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreatePullRequest.pullRequest.creationDate'),
        outputPath: 'pullRequest.creationDate',
        parameters: {
          title: this.input.title,
          description: this.input.description,
          targets: this.input.targets,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePullRequest.pullRequest.creationDate', props);
    return resource.getResponseField('pullRequest.creationDate') as unknown as string;
  }

  public get pullRequestStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreatePullRequest.pullRequest.pullRequestStatus'),
        outputPath: 'pullRequest.pullRequestStatus',
        parameters: {
          title: this.input.title,
          description: this.input.description,
          targets: this.input.targets,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePullRequest.pullRequest.pullRequestStatus', props);
    return resource.getResponseField('pullRequest.pullRequestStatus') as unknown as string;
  }

  public get authorArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreatePullRequest.pullRequest.authorArn'),
        outputPath: 'pullRequest.authorArn',
        parameters: {
          title: this.input.title,
          description: this.input.description,
          targets: this.input.targets,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePullRequest.pullRequest.authorArn', props);
    return resource.getResponseField('pullRequest.authorArn') as unknown as string;
  }

  public get pullRequestTargets(): shapes.CodeCommitPullRequestTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreatePullRequest.pullRequest.pullRequestTargets'),
        outputPath: 'pullRequest.pullRequestTargets',
        parameters: {
          title: this.input.title,
          description: this.input.description,
          targets: this.input.targets,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePullRequest.pullRequest.pullRequestTargets', props);
    return resource.getResponseField('pullRequest.pullRequestTargets') as unknown as shapes.CodeCommitPullRequestTarget[];
  }

  public get clientRequestToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreatePullRequest.pullRequest.clientRequestToken'),
        outputPath: 'pullRequest.clientRequestToken',
        parameters: {
          title: this.input.title,
          description: this.input.description,
          targets: this.input.targets,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePullRequest.pullRequest.clientRequestToken', props);
    return resource.getResponseField('pullRequest.clientRequestToken') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreatePullRequest.pullRequest.revisionId'),
        outputPath: 'pullRequest.revisionId',
        parameters: {
          title: this.input.title,
          description: this.input.description,
          targets: this.input.targets,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePullRequest.pullRequest.revisionId', props);
    return resource.getResponseField('pullRequest.revisionId') as unknown as string;
  }

  public get approvalRules(): shapes.CodeCommitApprovalRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreatePullRequest.pullRequest.approvalRules'),
        outputPath: 'pullRequest.approvalRules',
        parameters: {
          title: this.input.title,
          description: this.input.description,
          targets: this.input.targets,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePullRequest.pullRequest.approvalRules', props);
    return resource.getResponseField('pullRequest.approvalRules') as unknown as shapes.CodeCommitApprovalRule[];
  }

}

export class CodeCommitCreatePullRequestApprovalRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitCreatePullRequestApprovalRuleInput) {
    super(scope, id);
  }

  public get approvalRule(): CodeCommitCreatePullRequestApprovalRuleApprovalRule {
    return new CodeCommitCreatePullRequestApprovalRuleApprovalRule(this, 'ApprovalRule', this.__resources, this.input);
  }

}

export class CodeCommitCreatePullRequestApprovalRuleApprovalRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitCreatePullRequestApprovalRuleInput) {
    super(scope, id);
  }

  public get approvalRuleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPullRequestApprovalRule',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreatePullRequestApprovalRule.approvalRule.approvalRuleId'),
        outputPath: 'approvalRule.approvalRuleId',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          approvalRuleName: this.input.approvalRuleName,
          approvalRuleContent: this.input.approvalRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePullRequestApprovalRule.approvalRule.approvalRuleId', props);
    return resource.getResponseField('approvalRule.approvalRuleId') as unknown as string;
  }

  public get approvalRuleName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPullRequestApprovalRule',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreatePullRequestApprovalRule.approvalRule.approvalRuleName'),
        outputPath: 'approvalRule.approvalRuleName',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          approvalRuleName: this.input.approvalRuleName,
          approvalRuleContent: this.input.approvalRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePullRequestApprovalRule.approvalRule.approvalRuleName', props);
    return resource.getResponseField('approvalRule.approvalRuleName') as unknown as string;
  }

  public get approvalRuleContent(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPullRequestApprovalRule',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreatePullRequestApprovalRule.approvalRule.approvalRuleContent'),
        outputPath: 'approvalRule.approvalRuleContent',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          approvalRuleName: this.input.approvalRuleName,
          approvalRuleContent: this.input.approvalRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePullRequestApprovalRule.approvalRule.approvalRuleContent', props);
    return resource.getResponseField('approvalRule.approvalRuleContent') as unknown as string;
  }

  public get ruleContentSha256(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPullRequestApprovalRule',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreatePullRequestApprovalRule.approvalRule.ruleContentSha256'),
        outputPath: 'approvalRule.ruleContentSha256',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          approvalRuleName: this.input.approvalRuleName,
          approvalRuleContent: this.input.approvalRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePullRequestApprovalRule.approvalRule.ruleContentSha256', props);
    return resource.getResponseField('approvalRule.ruleContentSha256') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPullRequestApprovalRule',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreatePullRequestApprovalRule.approvalRule.lastModifiedDate'),
        outputPath: 'approvalRule.lastModifiedDate',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          approvalRuleName: this.input.approvalRuleName,
          approvalRuleContent: this.input.approvalRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePullRequestApprovalRule.approvalRule.lastModifiedDate', props);
    return resource.getResponseField('approvalRule.lastModifiedDate') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPullRequestApprovalRule',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreatePullRequestApprovalRule.approvalRule.creationDate'),
        outputPath: 'approvalRule.creationDate',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          approvalRuleName: this.input.approvalRuleName,
          approvalRuleContent: this.input.approvalRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePullRequestApprovalRule.approvalRule.creationDate', props);
    return resource.getResponseField('approvalRule.creationDate') as unknown as string;
  }

  public get lastModifiedUser(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPullRequestApprovalRule',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreatePullRequestApprovalRule.approvalRule.lastModifiedUser'),
        outputPath: 'approvalRule.lastModifiedUser',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          approvalRuleName: this.input.approvalRuleName,
          approvalRuleContent: this.input.approvalRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePullRequestApprovalRule.approvalRule.lastModifiedUser', props);
    return resource.getResponseField('approvalRule.lastModifiedUser') as unknown as string;
  }

  public get originApprovalRuleTemplate(): CodeCommitCreatePullRequestApprovalRuleApprovalRuleOriginApprovalRuleTemplate {
    return new CodeCommitCreatePullRequestApprovalRuleApprovalRuleOriginApprovalRuleTemplate(this, 'OriginApprovalRuleTemplate', this.__resources, this.input);
  }

}

export class CodeCommitCreatePullRequestApprovalRuleApprovalRuleOriginApprovalRuleTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitCreatePullRequestApprovalRuleInput) {
    super(scope, id);
  }

  public get approvalRuleTemplateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPullRequestApprovalRule',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreatePullRequestApprovalRule.approvalRule.originApprovalRuleTemplate.approvalRuleTemplateId'),
        outputPath: 'approvalRule.originApprovalRuleTemplate.approvalRuleTemplateId',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          approvalRuleName: this.input.approvalRuleName,
          approvalRuleContent: this.input.approvalRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePullRequestApprovalRule.approvalRule.originApprovalRuleTemplate.approvalRuleTemplateId', props);
    return resource.getResponseField('approvalRule.originApprovalRuleTemplate.approvalRuleTemplateId') as unknown as string;
  }

  public get approvalRuleTemplateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPullRequestApprovalRule',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreatePullRequestApprovalRule.approvalRule.originApprovalRuleTemplate.approvalRuleTemplateName'),
        outputPath: 'approvalRule.originApprovalRuleTemplate.approvalRuleTemplateName',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          approvalRuleName: this.input.approvalRuleName,
          approvalRuleContent: this.input.approvalRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePullRequestApprovalRule.approvalRule.originApprovalRuleTemplate.approvalRuleTemplateName', props);
    return resource.getResponseField('approvalRule.originApprovalRuleTemplate.approvalRuleTemplateName') as unknown as string;
  }

}

export class CodeCommitCreateRepository extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitCreateRepositoryInput) {
    super(scope, id);
  }

  public get repositoryMetadata(): CodeCommitCreateRepositoryRepositoryMetadata {
    return new CodeCommitCreateRepositoryRepositoryMetadata(this, 'RepositoryMetadata', this.__resources, this.input);
  }

}

export class CodeCommitCreateRepositoryRepositoryMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitCreateRepositoryInput) {
    super(scope, id);
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreateRepository.repositoryMetadata.accountId'),
        outputPath: 'repositoryMetadata.accountId',
        parameters: {
          repositoryName: this.input.repositoryName,
          repositoryDescription: this.input.repositoryDescription,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRepository.repositoryMetadata.accountId', props);
    return resource.getResponseField('repositoryMetadata.accountId') as unknown as string;
  }

  public get repositoryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreateRepository.repositoryMetadata.repositoryId'),
        outputPath: 'repositoryMetadata.repositoryId',
        parameters: {
          repositoryName: this.input.repositoryName,
          repositoryDescription: this.input.repositoryDescription,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRepository.repositoryMetadata.repositoryId', props);
    return resource.getResponseField('repositoryMetadata.repositoryId') as unknown as string;
  }

  public get repositoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreateRepository.repositoryMetadata.repositoryName'),
        outputPath: 'repositoryMetadata.repositoryName',
        parameters: {
          repositoryName: this.input.repositoryName,
          repositoryDescription: this.input.repositoryDescription,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRepository.repositoryMetadata.repositoryName', props);
    return resource.getResponseField('repositoryMetadata.repositoryName') as unknown as string;
  }

  public get repositoryDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreateRepository.repositoryMetadata.repositoryDescription'),
        outputPath: 'repositoryMetadata.repositoryDescription',
        parameters: {
          repositoryName: this.input.repositoryName,
          repositoryDescription: this.input.repositoryDescription,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRepository.repositoryMetadata.repositoryDescription', props);
    return resource.getResponseField('repositoryMetadata.repositoryDescription') as unknown as string;
  }

  public get defaultBranch(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreateRepository.repositoryMetadata.defaultBranch'),
        outputPath: 'repositoryMetadata.defaultBranch',
        parameters: {
          repositoryName: this.input.repositoryName,
          repositoryDescription: this.input.repositoryDescription,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRepository.repositoryMetadata.defaultBranch', props);
    return resource.getResponseField('repositoryMetadata.defaultBranch') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreateRepository.repositoryMetadata.lastModifiedDate'),
        outputPath: 'repositoryMetadata.lastModifiedDate',
        parameters: {
          repositoryName: this.input.repositoryName,
          repositoryDescription: this.input.repositoryDescription,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRepository.repositoryMetadata.lastModifiedDate', props);
    return resource.getResponseField('repositoryMetadata.lastModifiedDate') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreateRepository.repositoryMetadata.creationDate'),
        outputPath: 'repositoryMetadata.creationDate',
        parameters: {
          repositoryName: this.input.repositoryName,
          repositoryDescription: this.input.repositoryDescription,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRepository.repositoryMetadata.creationDate', props);
    return resource.getResponseField('repositoryMetadata.creationDate') as unknown as string;
  }

  public get cloneUrlHttp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreateRepository.repositoryMetadata.cloneUrlHttp'),
        outputPath: 'repositoryMetadata.cloneUrlHttp',
        parameters: {
          repositoryName: this.input.repositoryName,
          repositoryDescription: this.input.repositoryDescription,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRepository.repositoryMetadata.cloneUrlHttp', props);
    return resource.getResponseField('repositoryMetadata.cloneUrlHttp') as unknown as string;
  }

  public get cloneUrlSsh(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreateRepository.repositoryMetadata.cloneUrlSsh'),
        outputPath: 'repositoryMetadata.cloneUrlSsh',
        parameters: {
          repositoryName: this.input.repositoryName,
          repositoryDescription: this.input.repositoryDescription,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRepository.repositoryMetadata.cloneUrlSsh', props);
    return resource.getResponseField('repositoryMetadata.cloneUrlSsh') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreateRepository.repositoryMetadata.Arn'),
        outputPath: 'repositoryMetadata.Arn',
        parameters: {
          repositoryName: this.input.repositoryName,
          repositoryDescription: this.input.repositoryDescription,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRepository.repositoryMetadata.Arn', props);
    return resource.getResponseField('repositoryMetadata.Arn') as unknown as string;
  }

}

export class CodeCommitCreateUnreferencedMergeCommit extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitCreateUnreferencedMergeCommitInput) {
    super(scope, id);
  }

  public get commitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUnreferencedMergeCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreateUnreferencedMergeCommit.commitId'),
        outputPath: 'commitId',
        parameters: {
          repositoryName: this.input.repositoryName,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          mergeOption: this.input.mergeOption,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          authorName: this.input.authorName,
          email: this.input.email,
          commitMessage: this.input.commitMessage,
          keepEmptyFolders: this.input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.input.conflictResolution?.replaceContents,
            deleteFiles: this.input.conflictResolution?.deleteFiles,
            setFileModes: this.input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUnreferencedMergeCommit.commitId', props);
    return resource.getResponseField('commitId') as unknown as string;
  }

  public get treeId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUnreferencedMergeCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.CreateUnreferencedMergeCommit.treeId'),
        outputPath: 'treeId',
        parameters: {
          repositoryName: this.input.repositoryName,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          mergeOption: this.input.mergeOption,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          authorName: this.input.authorName,
          email: this.input.email,
          commitMessage: this.input.commitMessage,
          keepEmptyFolders: this.input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.input.conflictResolution?.replaceContents,
            deleteFiles: this.input.conflictResolution?.deleteFiles,
            setFileModes: this.input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUnreferencedMergeCommit.treeId', props);
    return resource.getResponseField('treeId') as unknown as string;
  }

}

export class CodeCommitDeleteApprovalRuleTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitDeleteApprovalRuleTemplateInput) {
    super(scope, id);
  }

  public get approvalRuleTemplateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApprovalRuleTemplate',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DeleteApprovalRuleTemplate.approvalRuleTemplateId'),
        outputPath: 'approvalRuleTemplateId',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApprovalRuleTemplate.approvalRuleTemplateId', props);
    return resource.getResponseField('approvalRuleTemplateId') as unknown as string;
  }

}

export class CodeCommitDeleteBranch extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitDeleteBranchInput) {
    super(scope, id);
  }

  public get deletedBranch(): CodeCommitDeleteBranchDeletedBranch {
    return new CodeCommitDeleteBranchDeletedBranch(this, 'DeletedBranch', this.__resources, this.input);
  }

}

export class CodeCommitDeleteBranchDeletedBranch extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitDeleteBranchInput) {
    super(scope, id);
  }

  public get branchName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBranch',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DeleteBranch.deletedBranch.branchName'),
        outputPath: 'deletedBranch.branchName',
        parameters: {
          repositoryName: this.input.repositoryName,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBranch.deletedBranch.branchName', props);
    return resource.getResponseField('deletedBranch.branchName') as unknown as string;
  }

  public get commitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBranch',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DeleteBranch.deletedBranch.commitId'),
        outputPath: 'deletedBranch.commitId',
        parameters: {
          repositoryName: this.input.repositoryName,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBranch.deletedBranch.commitId', props);
    return resource.getResponseField('deletedBranch.commitId') as unknown as string;
  }

}

export class CodeCommitDeleteCommentContent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitDeleteCommentContentInput) {
    super(scope, id);
  }

  public get comment(): CodeCommitDeleteCommentContentComment {
    return new CodeCommitDeleteCommentContentComment(this, 'Comment', this.__resources, this.input);
  }

}

export class CodeCommitDeleteCommentContentComment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitDeleteCommentContentInput) {
    super(scope, id);
  }

  public get commentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCommentContent',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DeleteCommentContent.comment.commentId'),
        outputPath: 'comment.commentId',
        parameters: {
          commentId: this.input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCommentContent.comment.commentId', props);
    return resource.getResponseField('comment.commentId') as unknown as string;
  }

  public get content(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCommentContent',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DeleteCommentContent.comment.content'),
        outputPath: 'comment.content',
        parameters: {
          commentId: this.input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCommentContent.comment.content', props);
    return resource.getResponseField('comment.content') as unknown as string;
  }

  public get inReplyTo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCommentContent',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DeleteCommentContent.comment.inReplyTo'),
        outputPath: 'comment.inReplyTo',
        parameters: {
          commentId: this.input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCommentContent.comment.inReplyTo', props);
    return resource.getResponseField('comment.inReplyTo') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCommentContent',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DeleteCommentContent.comment.creationDate'),
        outputPath: 'comment.creationDate',
        parameters: {
          commentId: this.input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCommentContent.comment.creationDate', props);
    return resource.getResponseField('comment.creationDate') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCommentContent',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DeleteCommentContent.comment.lastModifiedDate'),
        outputPath: 'comment.lastModifiedDate',
        parameters: {
          commentId: this.input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCommentContent.comment.lastModifiedDate', props);
    return resource.getResponseField('comment.lastModifiedDate') as unknown as string;
  }

  public get authorArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCommentContent',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DeleteCommentContent.comment.authorArn'),
        outputPath: 'comment.authorArn',
        parameters: {
          commentId: this.input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCommentContent.comment.authorArn', props);
    return resource.getResponseField('comment.authorArn') as unknown as string;
  }

  public get deleted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCommentContent',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DeleteCommentContent.comment.deleted'),
        outputPath: 'comment.deleted',
        parameters: {
          commentId: this.input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCommentContent.comment.deleted', props);
    return resource.getResponseField('comment.deleted') as unknown as boolean;
  }

  public get clientRequestToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCommentContent',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DeleteCommentContent.comment.clientRequestToken'),
        outputPath: 'comment.clientRequestToken',
        parameters: {
          commentId: this.input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCommentContent.comment.clientRequestToken', props);
    return resource.getResponseField('comment.clientRequestToken') as unknown as string;
  }

  public get callerReactions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCommentContent',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DeleteCommentContent.comment.callerReactions'),
        outputPath: 'comment.callerReactions',
        parameters: {
          commentId: this.input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCommentContent.comment.callerReactions', props);
    return resource.getResponseField('comment.callerReactions') as unknown as string[];
  }

  public get reactionCounts(): Record<string, number> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCommentContent',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DeleteCommentContent.comment.reactionCounts'),
        outputPath: 'comment.reactionCounts',
        parameters: {
          commentId: this.input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCommentContent.comment.reactionCounts', props);
    return resource.getResponseField('comment.reactionCounts') as unknown as Record<string, number>;
  }

}

export class CodeCommitDeleteFile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitDeleteFileInput) {
    super(scope, id);
  }

  public get commitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFile',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DeleteFile.commitId'),
        outputPath: 'commitId',
        parameters: {
          repositoryName: this.input.repositoryName,
          branchName: this.input.branchName,
          filePath: this.input.filePath,
          parentCommitId: this.input.parentCommitId,
          keepEmptyFolders: this.input.keepEmptyFolders,
          commitMessage: this.input.commitMessage,
          name: this.input.name,
          email: this.input.email,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFile.commitId', props);
    return resource.getResponseField('commitId') as unknown as string;
  }

  public get blobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFile',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DeleteFile.blobId'),
        outputPath: 'blobId',
        parameters: {
          repositoryName: this.input.repositoryName,
          branchName: this.input.branchName,
          filePath: this.input.filePath,
          parentCommitId: this.input.parentCommitId,
          keepEmptyFolders: this.input.keepEmptyFolders,
          commitMessage: this.input.commitMessage,
          name: this.input.name,
          email: this.input.email,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFile.blobId', props);
    return resource.getResponseField('blobId') as unknown as string;
  }

  public get treeId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFile',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DeleteFile.treeId'),
        outputPath: 'treeId',
        parameters: {
          repositoryName: this.input.repositoryName,
          branchName: this.input.branchName,
          filePath: this.input.filePath,
          parentCommitId: this.input.parentCommitId,
          keepEmptyFolders: this.input.keepEmptyFolders,
          commitMessage: this.input.commitMessage,
          name: this.input.name,
          email: this.input.email,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFile.treeId', props);
    return resource.getResponseField('treeId') as unknown as string;
  }

  public get filePath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFile',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DeleteFile.filePath'),
        outputPath: 'filePath',
        parameters: {
          repositoryName: this.input.repositoryName,
          branchName: this.input.branchName,
          filePath: this.input.filePath,
          parentCommitId: this.input.parentCommitId,
          keepEmptyFolders: this.input.keepEmptyFolders,
          commitMessage: this.input.commitMessage,
          name: this.input.name,
          email: this.input.email,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFile.filePath', props);
    return resource.getResponseField('filePath') as unknown as string;
  }

}

export class CodeCommitDeletePullRequestApprovalRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitDeletePullRequestApprovalRuleInput) {
    super(scope, id);
  }

  public get approvalRuleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePullRequestApprovalRule',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DeletePullRequestApprovalRule.approvalRuleId'),
        outputPath: 'approvalRuleId',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          approvalRuleName: this.input.approvalRuleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeletePullRequestApprovalRule.approvalRuleId', props);
    return resource.getResponseField('approvalRuleId') as unknown as string;
  }

}

export class CodeCommitDeleteRepository extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitDeleteRepositoryInput) {
    super(scope, id);
  }

  public get repositoryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRepository',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DeleteRepository.repositoryId'),
        outputPath: 'repositoryId',
        parameters: {
          repositoryName: this.input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRepository.repositoryId', props);
    return resource.getResponseField('repositoryId') as unknown as string;
  }

}

export class CodeCommitDescribeMergeConflicts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitDescribeMergeConflictsInput) {
    super(scope, id);
  }

  public get conflictMetadata(): CodeCommitDescribeMergeConflictsConflictMetadata {
    return new CodeCommitDescribeMergeConflictsConflictMetadata(this, 'ConflictMetadata', this.__resources, this.input);
  }

  public get mergeHunks(): shapes.CodeCommitMergeHunk[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DescribeMergeConflicts.mergeHunks'),
        outputPath: 'mergeHunks',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          maxMergeHunks: this.input.maxMergeHunks,
          filePath: this.input.filePath,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMergeConflicts.mergeHunks', props);
    return resource.getResponseField('mergeHunks') as unknown as shapes.CodeCommitMergeHunk[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DescribeMergeConflicts.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          maxMergeHunks: this.input.maxMergeHunks,
          filePath: this.input.filePath,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMergeConflicts.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get destinationCommitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DescribeMergeConflicts.destinationCommitId'),
        outputPath: 'destinationCommitId',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          maxMergeHunks: this.input.maxMergeHunks,
          filePath: this.input.filePath,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMergeConflicts.destinationCommitId', props);
    return resource.getResponseField('destinationCommitId') as unknown as string;
  }

  public get sourceCommitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DescribeMergeConflicts.sourceCommitId'),
        outputPath: 'sourceCommitId',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          maxMergeHunks: this.input.maxMergeHunks,
          filePath: this.input.filePath,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMergeConflicts.sourceCommitId', props);
    return resource.getResponseField('sourceCommitId') as unknown as string;
  }

  public get baseCommitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DescribeMergeConflicts.baseCommitId'),
        outputPath: 'baseCommitId',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          maxMergeHunks: this.input.maxMergeHunks,
          filePath: this.input.filePath,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMergeConflicts.baseCommitId', props);
    return resource.getResponseField('baseCommitId') as unknown as string;
  }

}

export class CodeCommitDescribeMergeConflictsConflictMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitDescribeMergeConflictsInput) {
    super(scope, id);
  }

  public get filePath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DescribeMergeConflicts.conflictMetadata.filePath'),
        outputPath: 'conflictMetadata.filePath',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          maxMergeHunks: this.input.maxMergeHunks,
          filePath: this.input.filePath,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMergeConflicts.conflictMetadata.filePath', props);
    return resource.getResponseField('conflictMetadata.filePath') as unknown as string;
  }

  public get fileSizes(): CodeCommitDescribeMergeConflictsConflictMetadataFileSizes {
    return new CodeCommitDescribeMergeConflictsConflictMetadataFileSizes(this, 'FileSizes', this.__resources, this.input);
  }

  public get fileModes(): CodeCommitDescribeMergeConflictsConflictMetadataFileModes {
    return new CodeCommitDescribeMergeConflictsConflictMetadataFileModes(this, 'FileModes', this.__resources, this.input);
  }

  public get objectTypes(): CodeCommitDescribeMergeConflictsConflictMetadataObjectTypes {
    return new CodeCommitDescribeMergeConflictsConflictMetadataObjectTypes(this, 'ObjectTypes', this.__resources, this.input);
  }

  public get numberOfConflicts(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DescribeMergeConflicts.conflictMetadata.numberOfConflicts'),
        outputPath: 'conflictMetadata.numberOfConflicts',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          maxMergeHunks: this.input.maxMergeHunks,
          filePath: this.input.filePath,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMergeConflicts.conflictMetadata.numberOfConflicts', props);
    return resource.getResponseField('conflictMetadata.numberOfConflicts') as unknown as number;
  }

  public get isBinaryFile(): CodeCommitDescribeMergeConflictsConflictMetadataIsBinaryFile {
    return new CodeCommitDescribeMergeConflictsConflictMetadataIsBinaryFile(this, 'IsBinaryFile', this.__resources, this.input);
  }

  public get contentConflict(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DescribeMergeConflicts.conflictMetadata.contentConflict'),
        outputPath: 'conflictMetadata.contentConflict',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          maxMergeHunks: this.input.maxMergeHunks,
          filePath: this.input.filePath,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMergeConflicts.conflictMetadata.contentConflict', props);
    return resource.getResponseField('conflictMetadata.contentConflict') as unknown as boolean;
  }

  public get fileModeConflict(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DescribeMergeConflicts.conflictMetadata.fileModeConflict'),
        outputPath: 'conflictMetadata.fileModeConflict',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          maxMergeHunks: this.input.maxMergeHunks,
          filePath: this.input.filePath,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMergeConflicts.conflictMetadata.fileModeConflict', props);
    return resource.getResponseField('conflictMetadata.fileModeConflict') as unknown as boolean;
  }

  public get objectTypeConflict(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DescribeMergeConflicts.conflictMetadata.objectTypeConflict'),
        outputPath: 'conflictMetadata.objectTypeConflict',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          maxMergeHunks: this.input.maxMergeHunks,
          filePath: this.input.filePath,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMergeConflicts.conflictMetadata.objectTypeConflict', props);
    return resource.getResponseField('conflictMetadata.objectTypeConflict') as unknown as boolean;
  }

  public get mergeOperations(): CodeCommitDescribeMergeConflictsConflictMetadataMergeOperations {
    return new CodeCommitDescribeMergeConflictsConflictMetadataMergeOperations(this, 'MergeOperations', this.__resources, this.input);
  }

}

export class CodeCommitDescribeMergeConflictsConflictMetadataFileSizes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitDescribeMergeConflictsInput) {
    super(scope, id);
  }

  public get source(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DescribeMergeConflicts.conflictMetadata.fileSizes.source'),
        outputPath: 'conflictMetadata.fileSizes.source',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          maxMergeHunks: this.input.maxMergeHunks,
          filePath: this.input.filePath,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMergeConflicts.conflictMetadata.fileSizes.source', props);
    return resource.getResponseField('conflictMetadata.fileSizes.source') as unknown as number;
  }

  public get destination(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DescribeMergeConflicts.conflictMetadata.fileSizes.destination'),
        outputPath: 'conflictMetadata.fileSizes.destination',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          maxMergeHunks: this.input.maxMergeHunks,
          filePath: this.input.filePath,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMergeConflicts.conflictMetadata.fileSizes.destination', props);
    return resource.getResponseField('conflictMetadata.fileSizes.destination') as unknown as number;
  }

  public get base(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DescribeMergeConflicts.conflictMetadata.fileSizes.base'),
        outputPath: 'conflictMetadata.fileSizes.base',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          maxMergeHunks: this.input.maxMergeHunks,
          filePath: this.input.filePath,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMergeConflicts.conflictMetadata.fileSizes.base', props);
    return resource.getResponseField('conflictMetadata.fileSizes.base') as unknown as number;
  }

}

export class CodeCommitDescribeMergeConflictsConflictMetadataFileModes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitDescribeMergeConflictsInput) {
    super(scope, id);
  }

  public get source(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DescribeMergeConflicts.conflictMetadata.fileModes.source'),
        outputPath: 'conflictMetadata.fileModes.source',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          maxMergeHunks: this.input.maxMergeHunks,
          filePath: this.input.filePath,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMergeConflicts.conflictMetadata.fileModes.source', props);
    return resource.getResponseField('conflictMetadata.fileModes.source') as unknown as string;
  }

  public get destination(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DescribeMergeConflicts.conflictMetadata.fileModes.destination'),
        outputPath: 'conflictMetadata.fileModes.destination',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          maxMergeHunks: this.input.maxMergeHunks,
          filePath: this.input.filePath,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMergeConflicts.conflictMetadata.fileModes.destination', props);
    return resource.getResponseField('conflictMetadata.fileModes.destination') as unknown as string;
  }

  public get base(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DescribeMergeConflicts.conflictMetadata.fileModes.base'),
        outputPath: 'conflictMetadata.fileModes.base',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          maxMergeHunks: this.input.maxMergeHunks,
          filePath: this.input.filePath,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMergeConflicts.conflictMetadata.fileModes.base', props);
    return resource.getResponseField('conflictMetadata.fileModes.base') as unknown as string;
  }

}

export class CodeCommitDescribeMergeConflictsConflictMetadataObjectTypes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitDescribeMergeConflictsInput) {
    super(scope, id);
  }

  public get source(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DescribeMergeConflicts.conflictMetadata.objectTypes.source'),
        outputPath: 'conflictMetadata.objectTypes.source',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          maxMergeHunks: this.input.maxMergeHunks,
          filePath: this.input.filePath,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMergeConflicts.conflictMetadata.objectTypes.source', props);
    return resource.getResponseField('conflictMetadata.objectTypes.source') as unknown as string;
  }

  public get destination(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DescribeMergeConflicts.conflictMetadata.objectTypes.destination'),
        outputPath: 'conflictMetadata.objectTypes.destination',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          maxMergeHunks: this.input.maxMergeHunks,
          filePath: this.input.filePath,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMergeConflicts.conflictMetadata.objectTypes.destination', props);
    return resource.getResponseField('conflictMetadata.objectTypes.destination') as unknown as string;
  }

  public get base(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DescribeMergeConflicts.conflictMetadata.objectTypes.base'),
        outputPath: 'conflictMetadata.objectTypes.base',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          maxMergeHunks: this.input.maxMergeHunks,
          filePath: this.input.filePath,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMergeConflicts.conflictMetadata.objectTypes.base', props);
    return resource.getResponseField('conflictMetadata.objectTypes.base') as unknown as string;
  }

}

export class CodeCommitDescribeMergeConflictsConflictMetadataIsBinaryFile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitDescribeMergeConflictsInput) {
    super(scope, id);
  }

  public get source(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DescribeMergeConflicts.conflictMetadata.isBinaryFile.source'),
        outputPath: 'conflictMetadata.isBinaryFile.source',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          maxMergeHunks: this.input.maxMergeHunks,
          filePath: this.input.filePath,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMergeConflicts.conflictMetadata.isBinaryFile.source', props);
    return resource.getResponseField('conflictMetadata.isBinaryFile.source') as unknown as boolean;
  }

  public get destination(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DescribeMergeConflicts.conflictMetadata.isBinaryFile.destination'),
        outputPath: 'conflictMetadata.isBinaryFile.destination',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          maxMergeHunks: this.input.maxMergeHunks,
          filePath: this.input.filePath,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMergeConflicts.conflictMetadata.isBinaryFile.destination', props);
    return resource.getResponseField('conflictMetadata.isBinaryFile.destination') as unknown as boolean;
  }

  public get base(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DescribeMergeConflicts.conflictMetadata.isBinaryFile.base'),
        outputPath: 'conflictMetadata.isBinaryFile.base',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          maxMergeHunks: this.input.maxMergeHunks,
          filePath: this.input.filePath,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMergeConflicts.conflictMetadata.isBinaryFile.base', props);
    return resource.getResponseField('conflictMetadata.isBinaryFile.base') as unknown as boolean;
  }

}

export class CodeCommitDescribeMergeConflictsConflictMetadataMergeOperations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitDescribeMergeConflictsInput) {
    super(scope, id);
  }

  public get source(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DescribeMergeConflicts.conflictMetadata.mergeOperations.source'),
        outputPath: 'conflictMetadata.mergeOperations.source',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          maxMergeHunks: this.input.maxMergeHunks,
          filePath: this.input.filePath,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMergeConflicts.conflictMetadata.mergeOperations.source', props);
    return resource.getResponseField('conflictMetadata.mergeOperations.source') as unknown as string;
  }

  public get destination(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DescribeMergeConflicts.conflictMetadata.mergeOperations.destination'),
        outputPath: 'conflictMetadata.mergeOperations.destination',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          maxMergeHunks: this.input.maxMergeHunks,
          filePath: this.input.filePath,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMergeConflicts.conflictMetadata.mergeOperations.destination', props);
    return resource.getResponseField('conflictMetadata.mergeOperations.destination') as unknown as string;
  }

}

export class CodeCommitDescribePullRequestEvents extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitDescribePullRequestEventsInput) {
    super(scope, id);
  }

  public get pullRequestEvents(): shapes.CodeCommitPullRequestEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePullRequestEvents',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DescribePullRequestEvents.pullRequestEvents'),
        outputPath: 'pullRequestEvents',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          pullRequestEventType: this.input.pullRequestEventType,
          actorArn: this.input.actorArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePullRequestEvents.pullRequestEvents', props);
    return resource.getResponseField('pullRequestEvents') as unknown as shapes.CodeCommitPullRequestEvent[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePullRequestEvents',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.DescribePullRequestEvents.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          pullRequestEventType: this.input.pullRequestEventType,
          actorArn: this.input.actorArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePullRequestEvents.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeCommitEvaluatePullRequestApprovalRules extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitEvaluatePullRequestApprovalRulesInput) {
    super(scope, id);
  }

  public get evaluation(): CodeCommitEvaluatePullRequestApprovalRulesEvaluation {
    return new CodeCommitEvaluatePullRequestApprovalRulesEvaluation(this, 'Evaluation', this.__resources, this.input);
  }

}

export class CodeCommitEvaluatePullRequestApprovalRulesEvaluation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitEvaluatePullRequestApprovalRulesInput) {
    super(scope, id);
  }

  public get approved(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'evaluatePullRequestApprovalRules',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.EvaluatePullRequestApprovalRules.evaluation.approved'),
        outputPath: 'evaluation.approved',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          revisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'EvaluatePullRequestApprovalRules.evaluation.approved', props);
    return resource.getResponseField('evaluation.approved') as unknown as boolean;
  }

  public get overridden(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'evaluatePullRequestApprovalRules',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.EvaluatePullRequestApprovalRules.evaluation.overridden'),
        outputPath: 'evaluation.overridden',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          revisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'EvaluatePullRequestApprovalRules.evaluation.overridden', props);
    return resource.getResponseField('evaluation.overridden') as unknown as boolean;
  }

  public get approvalRulesSatisfied(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'evaluatePullRequestApprovalRules',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.EvaluatePullRequestApprovalRules.evaluation.approvalRulesSatisfied'),
        outputPath: 'evaluation.approvalRulesSatisfied',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          revisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'EvaluatePullRequestApprovalRules.evaluation.approvalRulesSatisfied', props);
    return resource.getResponseField('evaluation.approvalRulesSatisfied') as unknown as string[];
  }

  public get approvalRulesNotSatisfied(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'evaluatePullRequestApprovalRules',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.EvaluatePullRequestApprovalRules.evaluation.approvalRulesNotSatisfied'),
        outputPath: 'evaluation.approvalRulesNotSatisfied',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          revisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'EvaluatePullRequestApprovalRules.evaluation.approvalRulesNotSatisfied', props);
    return resource.getResponseField('evaluation.approvalRulesNotSatisfied') as unknown as string[];
  }

}

export class CodeCommitFetchApprovalRuleTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitGetApprovalRuleTemplateInput) {
    super(scope, id);
  }

  public get approvalRuleTemplate(): CodeCommitFetchApprovalRuleTemplateApprovalRuleTemplate {
    return new CodeCommitFetchApprovalRuleTemplateApprovalRuleTemplate(this, 'ApprovalRuleTemplate', this.__resources, this.input);
  }

}

export class CodeCommitFetchApprovalRuleTemplateApprovalRuleTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitGetApprovalRuleTemplateInput) {
    super(scope, id);
  }

  public get approvalRuleTemplateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApprovalRuleTemplate',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetApprovalRuleTemplate.approvalRuleTemplate.approvalRuleTemplateId'),
        outputPath: 'approvalRuleTemplate.approvalRuleTemplateId',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApprovalRuleTemplate.approvalRuleTemplate.approvalRuleTemplateId', props);
    return resource.getResponseField('approvalRuleTemplate.approvalRuleTemplateId') as unknown as string;
  }

  public get approvalRuleTemplateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApprovalRuleTemplate',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetApprovalRuleTemplate.approvalRuleTemplate.approvalRuleTemplateName'),
        outputPath: 'approvalRuleTemplate.approvalRuleTemplateName',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApprovalRuleTemplate.approvalRuleTemplate.approvalRuleTemplateName', props);
    return resource.getResponseField('approvalRuleTemplate.approvalRuleTemplateName') as unknown as string;
  }

  public get approvalRuleTemplateDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApprovalRuleTemplate',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetApprovalRuleTemplate.approvalRuleTemplate.approvalRuleTemplateDescription'),
        outputPath: 'approvalRuleTemplate.approvalRuleTemplateDescription',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApprovalRuleTemplate.approvalRuleTemplate.approvalRuleTemplateDescription', props);
    return resource.getResponseField('approvalRuleTemplate.approvalRuleTemplateDescription') as unknown as string;
  }

  public get approvalRuleTemplateContent(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApprovalRuleTemplate',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetApprovalRuleTemplate.approvalRuleTemplate.approvalRuleTemplateContent'),
        outputPath: 'approvalRuleTemplate.approvalRuleTemplateContent',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApprovalRuleTemplate.approvalRuleTemplate.approvalRuleTemplateContent', props);
    return resource.getResponseField('approvalRuleTemplate.approvalRuleTemplateContent') as unknown as string;
  }

  public get ruleContentSha256(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApprovalRuleTemplate',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetApprovalRuleTemplate.approvalRuleTemplate.ruleContentSha256'),
        outputPath: 'approvalRuleTemplate.ruleContentSha256',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApprovalRuleTemplate.approvalRuleTemplate.ruleContentSha256', props);
    return resource.getResponseField('approvalRuleTemplate.ruleContentSha256') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApprovalRuleTemplate',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetApprovalRuleTemplate.approvalRuleTemplate.lastModifiedDate'),
        outputPath: 'approvalRuleTemplate.lastModifiedDate',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApprovalRuleTemplate.approvalRuleTemplate.lastModifiedDate', props);
    return resource.getResponseField('approvalRuleTemplate.lastModifiedDate') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApprovalRuleTemplate',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetApprovalRuleTemplate.approvalRuleTemplate.creationDate'),
        outputPath: 'approvalRuleTemplate.creationDate',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApprovalRuleTemplate.approvalRuleTemplate.creationDate', props);
    return resource.getResponseField('approvalRuleTemplate.creationDate') as unknown as string;
  }

  public get lastModifiedUser(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApprovalRuleTemplate',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetApprovalRuleTemplate.approvalRuleTemplate.lastModifiedUser'),
        outputPath: 'approvalRuleTemplate.lastModifiedUser',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApprovalRuleTemplate.approvalRuleTemplate.lastModifiedUser', props);
    return resource.getResponseField('approvalRuleTemplate.lastModifiedUser') as unknown as string;
  }

}

export class CodeCommitFetchBlob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitGetBlobInput) {
    super(scope, id);
  }

  public get content(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBlob',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetBlob.content'),
        outputPath: 'content',
        parameters: {
          repositoryName: this.input.repositoryName,
          blobId: this.input.blobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBlob.content', props);
    return resource.getResponseField('content') as unknown as any;
  }

}

export class CodeCommitFetchBranch extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitGetBranchInput) {
    super(scope, id);
  }

  public get branch(): CodeCommitFetchBranchBranch {
    return new CodeCommitFetchBranchBranch(this, 'Branch', this.__resources, this.input);
  }

}

export class CodeCommitFetchBranchBranch extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitGetBranchInput) {
    super(scope, id);
  }

  public get branchName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBranch',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetBranch.branch.branchName'),
        outputPath: 'branch.branchName',
        parameters: {
          repositoryName: this.input.repositoryName,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBranch.branch.branchName', props);
    return resource.getResponseField('branch.branchName') as unknown as string;
  }

  public get commitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBranch',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetBranch.branch.commitId'),
        outputPath: 'branch.commitId',
        parameters: {
          repositoryName: this.input.repositoryName,
          branchName: this.input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBranch.branch.commitId', props);
    return resource.getResponseField('branch.commitId') as unknown as string;
  }

}

export class CodeCommitFetchComment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitGetCommentInput) {
    super(scope, id);
  }

  public get comment(): CodeCommitFetchCommentComment {
    return new CodeCommitFetchCommentComment(this, 'Comment', this.__resources, this.input);
  }

}

export class CodeCommitFetchCommentComment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitGetCommentInput) {
    super(scope, id);
  }

  public get commentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComment',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetComment.comment.commentId'),
        outputPath: 'comment.commentId',
        parameters: {
          commentId: this.input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComment.comment.commentId', props);
    return resource.getResponseField('comment.commentId') as unknown as string;
  }

  public get content(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComment',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetComment.comment.content'),
        outputPath: 'comment.content',
        parameters: {
          commentId: this.input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComment.comment.content', props);
    return resource.getResponseField('comment.content') as unknown as string;
  }

  public get inReplyTo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComment',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetComment.comment.inReplyTo'),
        outputPath: 'comment.inReplyTo',
        parameters: {
          commentId: this.input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComment.comment.inReplyTo', props);
    return resource.getResponseField('comment.inReplyTo') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComment',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetComment.comment.creationDate'),
        outputPath: 'comment.creationDate',
        parameters: {
          commentId: this.input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComment.comment.creationDate', props);
    return resource.getResponseField('comment.creationDate') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComment',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetComment.comment.lastModifiedDate'),
        outputPath: 'comment.lastModifiedDate',
        parameters: {
          commentId: this.input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComment.comment.lastModifiedDate', props);
    return resource.getResponseField('comment.lastModifiedDate') as unknown as string;
  }

  public get authorArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComment',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetComment.comment.authorArn'),
        outputPath: 'comment.authorArn',
        parameters: {
          commentId: this.input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComment.comment.authorArn', props);
    return resource.getResponseField('comment.authorArn') as unknown as string;
  }

  public get deleted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComment',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetComment.comment.deleted'),
        outputPath: 'comment.deleted',
        parameters: {
          commentId: this.input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComment.comment.deleted', props);
    return resource.getResponseField('comment.deleted') as unknown as boolean;
  }

  public get clientRequestToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComment',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetComment.comment.clientRequestToken'),
        outputPath: 'comment.clientRequestToken',
        parameters: {
          commentId: this.input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComment.comment.clientRequestToken', props);
    return resource.getResponseField('comment.clientRequestToken') as unknown as string;
  }

  public get callerReactions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComment',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetComment.comment.callerReactions'),
        outputPath: 'comment.callerReactions',
        parameters: {
          commentId: this.input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComment.comment.callerReactions', props);
    return resource.getResponseField('comment.callerReactions') as unknown as string[];
  }

  public get reactionCounts(): Record<string, number> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComment',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetComment.comment.reactionCounts'),
        outputPath: 'comment.reactionCounts',
        parameters: {
          commentId: this.input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComment.comment.reactionCounts', props);
    return resource.getResponseField('comment.reactionCounts') as unknown as Record<string, number>;
  }

}

export class CodeCommitFetchCommentReactions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitGetCommentReactionsInput) {
    super(scope, id);
  }

  public get reactionsForComment(): shapes.CodeCommitReactionForComment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommentReactions',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetCommentReactions.reactionsForComment'),
        outputPath: 'reactionsForComment',
        parameters: {
          commentId: this.input.commentId,
          reactionUserArn: this.input.reactionUserArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommentReactions.reactionsForComment', props);
    return resource.getResponseField('reactionsForComment') as unknown as shapes.CodeCommitReactionForComment[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommentReactions',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetCommentReactions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          commentId: this.input.commentId,
          reactionUserArn: this.input.reactionUserArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommentReactions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeCommitFetchCommentsForComparedCommit extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitGetCommentsForComparedCommitInput) {
    super(scope, id);
  }

  public get commentsForComparedCommitData(): shapes.CodeCommitCommentsForComparedCommit[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommentsForComparedCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetCommentsForComparedCommit.commentsForComparedCommitData'),
        outputPath: 'commentsForComparedCommitData',
        parameters: {
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommentsForComparedCommit.commentsForComparedCommitData', props);
    return resource.getResponseField('commentsForComparedCommitData') as unknown as shapes.CodeCommitCommentsForComparedCommit[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommentsForComparedCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetCommentsForComparedCommit.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommentsForComparedCommit.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeCommitFetchCommentsForPullRequest extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitGetCommentsForPullRequestInput) {
    super(scope, id);
  }

  public get commentsForPullRequestData(): shapes.CodeCommitCommentsForPullRequest[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommentsForPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetCommentsForPullRequest.commentsForPullRequestData'),
        outputPath: 'commentsForPullRequestData',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommentsForPullRequest.commentsForPullRequestData', props);
    return resource.getResponseField('commentsForPullRequestData') as unknown as shapes.CodeCommitCommentsForPullRequest[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommentsForPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetCommentsForPullRequest.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommentsForPullRequest.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeCommitFetchCommit extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitGetCommitInput) {
    super(scope, id);
  }

  public get commit(): CodeCommitFetchCommitCommit {
    return new CodeCommitFetchCommitCommit(this, 'Commit', this.__resources, this.input);
  }

}

export class CodeCommitFetchCommitCommit extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitGetCommitInput) {
    super(scope, id);
  }

  public get commitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetCommit.commit.commitId'),
        outputPath: 'commit.commitId',
        parameters: {
          repositoryName: this.input.repositoryName,
          commitId: this.input.commitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommit.commit.commitId', props);
    return resource.getResponseField('commit.commitId') as unknown as string;
  }

  public get treeId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetCommit.commit.treeId'),
        outputPath: 'commit.treeId',
        parameters: {
          repositoryName: this.input.repositoryName,
          commitId: this.input.commitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommit.commit.treeId', props);
    return resource.getResponseField('commit.treeId') as unknown as string;
  }

  public get parents(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetCommit.commit.parents'),
        outputPath: 'commit.parents',
        parameters: {
          repositoryName: this.input.repositoryName,
          commitId: this.input.commitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommit.commit.parents', props);
    return resource.getResponseField('commit.parents') as unknown as string[];
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetCommit.commit.message'),
        outputPath: 'commit.message',
        parameters: {
          repositoryName: this.input.repositoryName,
          commitId: this.input.commitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommit.commit.message', props);
    return resource.getResponseField('commit.message') as unknown as string;
  }

  public get author(): CodeCommitFetchCommitCommitAuthor {
    return new CodeCommitFetchCommitCommitAuthor(this, 'Author', this.__resources, this.input);
  }

  public get committer(): CodeCommitFetchCommitCommitCommitter {
    return new CodeCommitFetchCommitCommitCommitter(this, 'Committer', this.__resources, this.input);
  }

  public get additionalData(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetCommit.commit.additionalData'),
        outputPath: 'commit.additionalData',
        parameters: {
          repositoryName: this.input.repositoryName,
          commitId: this.input.commitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommit.commit.additionalData', props);
    return resource.getResponseField('commit.additionalData') as unknown as string;
  }

}

export class CodeCommitFetchCommitCommitAuthor extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitGetCommitInput) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetCommit.commit.author.name'),
        outputPath: 'commit.author.name',
        parameters: {
          repositoryName: this.input.repositoryName,
          commitId: this.input.commitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommit.commit.author.name', props);
    return resource.getResponseField('commit.author.name') as unknown as string;
  }

  public get email(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetCommit.commit.author.email'),
        outputPath: 'commit.author.email',
        parameters: {
          repositoryName: this.input.repositoryName,
          commitId: this.input.commitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommit.commit.author.email', props);
    return resource.getResponseField('commit.author.email') as unknown as string;
  }

  public get date(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetCommit.commit.author.date'),
        outputPath: 'commit.author.date',
        parameters: {
          repositoryName: this.input.repositoryName,
          commitId: this.input.commitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommit.commit.author.date', props);
    return resource.getResponseField('commit.author.date') as unknown as string;
  }

}

export class CodeCommitFetchCommitCommitCommitter extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitGetCommitInput) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetCommit.commit.committer.name'),
        outputPath: 'commit.committer.name',
        parameters: {
          repositoryName: this.input.repositoryName,
          commitId: this.input.commitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommit.commit.committer.name', props);
    return resource.getResponseField('commit.committer.name') as unknown as string;
  }

  public get email(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetCommit.commit.committer.email'),
        outputPath: 'commit.committer.email',
        parameters: {
          repositoryName: this.input.repositoryName,
          commitId: this.input.commitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommit.commit.committer.email', props);
    return resource.getResponseField('commit.committer.email') as unknown as string;
  }

  public get date(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetCommit.commit.committer.date'),
        outputPath: 'commit.committer.date',
        parameters: {
          repositoryName: this.input.repositoryName,
          commitId: this.input.commitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommit.commit.committer.date', props);
    return resource.getResponseField('commit.committer.date') as unknown as string;
  }

}

export class CodeCommitFetchDifferences extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitGetDifferencesInput) {
    super(scope, id);
  }

  public get differences(): shapes.CodeCommitDifference[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDifferences',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetDifferences.differences'),
        outputPath: 'differences',
        parameters: {
          repositoryName: this.input.repositoryName,
          beforeCommitSpecifier: this.input.beforeCommitSpecifier,
          afterCommitSpecifier: this.input.afterCommitSpecifier,
          beforePath: this.input.beforePath,
          afterPath: this.input.afterPath,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDifferences.differences', props);
    return resource.getResponseField('differences') as unknown as shapes.CodeCommitDifference[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDifferences',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetDifferences.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          repositoryName: this.input.repositoryName,
          beforeCommitSpecifier: this.input.beforeCommitSpecifier,
          afterCommitSpecifier: this.input.afterCommitSpecifier,
          beforePath: this.input.beforePath,
          afterPath: this.input.afterPath,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDifferences.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CodeCommitFetchFile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitGetFileInput) {
    super(scope, id);
  }

  public get commitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFile',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetFile.commitId'),
        outputPath: 'commitId',
        parameters: {
          repositoryName: this.input.repositoryName,
          commitSpecifier: this.input.commitSpecifier,
          filePath: this.input.filePath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFile.commitId', props);
    return resource.getResponseField('commitId') as unknown as string;
  }

  public get blobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFile',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetFile.blobId'),
        outputPath: 'blobId',
        parameters: {
          repositoryName: this.input.repositoryName,
          commitSpecifier: this.input.commitSpecifier,
          filePath: this.input.filePath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFile.blobId', props);
    return resource.getResponseField('blobId') as unknown as string;
  }

  public get filePath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFile',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetFile.filePath'),
        outputPath: 'filePath',
        parameters: {
          repositoryName: this.input.repositoryName,
          commitSpecifier: this.input.commitSpecifier,
          filePath: this.input.filePath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFile.filePath', props);
    return resource.getResponseField('filePath') as unknown as string;
  }

  public get fileMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFile',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetFile.fileMode'),
        outputPath: 'fileMode',
        parameters: {
          repositoryName: this.input.repositoryName,
          commitSpecifier: this.input.commitSpecifier,
          filePath: this.input.filePath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFile.fileMode', props);
    return resource.getResponseField('fileMode') as unknown as string;
  }

  public get fileSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFile',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetFile.fileSize'),
        outputPath: 'fileSize',
        parameters: {
          repositoryName: this.input.repositoryName,
          commitSpecifier: this.input.commitSpecifier,
          filePath: this.input.filePath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFile.fileSize', props);
    return resource.getResponseField('fileSize') as unknown as number;
  }

  public get fileContent(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFile',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetFile.fileContent'),
        outputPath: 'fileContent',
        parameters: {
          repositoryName: this.input.repositoryName,
          commitSpecifier: this.input.commitSpecifier,
          filePath: this.input.filePath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFile.fileContent', props);
    return resource.getResponseField('fileContent') as unknown as any;
  }

}

export class CodeCommitFetchFolder extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitGetFolderInput) {
    super(scope, id);
  }

  public get commitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFolder',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetFolder.commitId'),
        outputPath: 'commitId',
        parameters: {
          repositoryName: this.input.repositoryName,
          commitSpecifier: this.input.commitSpecifier,
          folderPath: this.input.folderPath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFolder.commitId', props);
    return resource.getResponseField('commitId') as unknown as string;
  }

  public get folderPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFolder',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetFolder.folderPath'),
        outputPath: 'folderPath',
        parameters: {
          repositoryName: this.input.repositoryName,
          commitSpecifier: this.input.commitSpecifier,
          folderPath: this.input.folderPath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFolder.folderPath', props);
    return resource.getResponseField('folderPath') as unknown as string;
  }

  public get treeId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFolder',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetFolder.treeId'),
        outputPath: 'treeId',
        parameters: {
          repositoryName: this.input.repositoryName,
          commitSpecifier: this.input.commitSpecifier,
          folderPath: this.input.folderPath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFolder.treeId', props);
    return resource.getResponseField('treeId') as unknown as string;
  }

  public get subFolders(): shapes.CodeCommitFolder[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFolder',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetFolder.subFolders'),
        outputPath: 'subFolders',
        parameters: {
          repositoryName: this.input.repositoryName,
          commitSpecifier: this.input.commitSpecifier,
          folderPath: this.input.folderPath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFolder.subFolders', props);
    return resource.getResponseField('subFolders') as unknown as shapes.CodeCommitFolder[];
  }

  public get files(): shapes.CodeCommitFile[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFolder',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetFolder.files'),
        outputPath: 'files',
        parameters: {
          repositoryName: this.input.repositoryName,
          commitSpecifier: this.input.commitSpecifier,
          folderPath: this.input.folderPath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFolder.files', props);
    return resource.getResponseField('files') as unknown as shapes.CodeCommitFile[];
  }

  public get symbolicLinks(): shapes.CodeCommitSymbolicLink[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFolder',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetFolder.symbolicLinks'),
        outputPath: 'symbolicLinks',
        parameters: {
          repositoryName: this.input.repositoryName,
          commitSpecifier: this.input.commitSpecifier,
          folderPath: this.input.folderPath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFolder.symbolicLinks', props);
    return resource.getResponseField('symbolicLinks') as unknown as shapes.CodeCommitSymbolicLink[];
  }

  public get subModules(): shapes.CodeCommitSubModule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFolder',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetFolder.subModules'),
        outputPath: 'subModules',
        parameters: {
          repositoryName: this.input.repositoryName,
          commitSpecifier: this.input.commitSpecifier,
          folderPath: this.input.folderPath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFolder.subModules', props);
    return resource.getResponseField('subModules') as unknown as shapes.CodeCommitSubModule[];
  }

}

export class CodeCommitFetchMergeCommit extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitGetMergeCommitInput) {
    super(scope, id);
  }

  public get sourceCommitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMergeCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetMergeCommit.sourceCommitId'),
        outputPath: 'sourceCommitId',
        parameters: {
          repositoryName: this.input.repositoryName,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMergeCommit.sourceCommitId', props);
    return resource.getResponseField('sourceCommitId') as unknown as string;
  }

  public get destinationCommitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMergeCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetMergeCommit.destinationCommitId'),
        outputPath: 'destinationCommitId',
        parameters: {
          repositoryName: this.input.repositoryName,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMergeCommit.destinationCommitId', props);
    return resource.getResponseField('destinationCommitId') as unknown as string;
  }

  public get baseCommitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMergeCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetMergeCommit.baseCommitId'),
        outputPath: 'baseCommitId',
        parameters: {
          repositoryName: this.input.repositoryName,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMergeCommit.baseCommitId', props);
    return resource.getResponseField('baseCommitId') as unknown as string;
  }

  public get mergedCommitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMergeCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetMergeCommit.mergedCommitId'),
        outputPath: 'mergedCommitId',
        parameters: {
          repositoryName: this.input.repositoryName,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMergeCommit.mergedCommitId', props);
    return resource.getResponseField('mergedCommitId') as unknown as string;
  }

}

export class CodeCommitFetchMergeConflicts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitGetMergeConflictsInput) {
    super(scope, id);
  }

  public get mergeable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetMergeConflicts.mergeable'),
        outputPath: 'mergeable',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          conflictDetailLevel: this.input.conflictDetailLevel,
          maxConflictFiles: this.input.maxConflictFiles,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMergeConflicts.mergeable', props);
    return resource.getResponseField('mergeable') as unknown as boolean;
  }

  public get destinationCommitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetMergeConflicts.destinationCommitId'),
        outputPath: 'destinationCommitId',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          conflictDetailLevel: this.input.conflictDetailLevel,
          maxConflictFiles: this.input.maxConflictFiles,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMergeConflicts.destinationCommitId', props);
    return resource.getResponseField('destinationCommitId') as unknown as string;
  }

  public get sourceCommitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetMergeConflicts.sourceCommitId'),
        outputPath: 'sourceCommitId',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          conflictDetailLevel: this.input.conflictDetailLevel,
          maxConflictFiles: this.input.maxConflictFiles,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMergeConflicts.sourceCommitId', props);
    return resource.getResponseField('sourceCommitId') as unknown as string;
  }

  public get baseCommitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetMergeConflicts.baseCommitId'),
        outputPath: 'baseCommitId',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          conflictDetailLevel: this.input.conflictDetailLevel,
          maxConflictFiles: this.input.maxConflictFiles,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMergeConflicts.baseCommitId', props);
    return resource.getResponseField('baseCommitId') as unknown as string;
  }

  public get conflictMetadataList(): shapes.CodeCommitConflictMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetMergeConflicts.conflictMetadataList'),
        outputPath: 'conflictMetadataList',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          conflictDetailLevel: this.input.conflictDetailLevel,
          maxConflictFiles: this.input.maxConflictFiles,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMergeConflicts.conflictMetadataList', props);
    return resource.getResponseField('conflictMetadataList') as unknown as shapes.CodeCommitConflictMetadata[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMergeConflicts',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetMergeConflicts.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          repositoryName: this.input.repositoryName,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          mergeOption: this.input.mergeOption,
          conflictDetailLevel: this.input.conflictDetailLevel,
          maxConflictFiles: this.input.maxConflictFiles,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMergeConflicts.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeCommitFetchMergeOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitGetMergeOptionsInput) {
    super(scope, id);
  }

  public get mergeOptions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMergeOptions',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetMergeOptions.mergeOptions'),
        outputPath: 'mergeOptions',
        parameters: {
          repositoryName: this.input.repositoryName,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMergeOptions.mergeOptions', props);
    return resource.getResponseField('mergeOptions') as unknown as string[];
  }

  public get sourceCommitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMergeOptions',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetMergeOptions.sourceCommitId'),
        outputPath: 'sourceCommitId',
        parameters: {
          repositoryName: this.input.repositoryName,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMergeOptions.sourceCommitId', props);
    return resource.getResponseField('sourceCommitId') as unknown as string;
  }

  public get destinationCommitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMergeOptions',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetMergeOptions.destinationCommitId'),
        outputPath: 'destinationCommitId',
        parameters: {
          repositoryName: this.input.repositoryName,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMergeOptions.destinationCommitId', props);
    return resource.getResponseField('destinationCommitId') as unknown as string;
  }

  public get baseCommitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMergeOptions',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetMergeOptions.baseCommitId'),
        outputPath: 'baseCommitId',
        parameters: {
          repositoryName: this.input.repositoryName,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMergeOptions.baseCommitId', props);
    return resource.getResponseField('baseCommitId') as unknown as string;
  }

}

export class CodeCommitFetchPullRequest extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitGetPullRequestInput) {
    super(scope, id);
  }

  public get pullRequest(): CodeCommitFetchPullRequestPullRequest {
    return new CodeCommitFetchPullRequestPullRequest(this, 'PullRequest', this.__resources, this.input);
  }

}

export class CodeCommitFetchPullRequestPullRequest extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitGetPullRequestInput) {
    super(scope, id);
  }

  public get pullRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetPullRequest.pullRequest.pullRequestId'),
        outputPath: 'pullRequest.pullRequestId',
        parameters: {
          pullRequestId: this.input.pullRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPullRequest.pullRequest.pullRequestId', props);
    return resource.getResponseField('pullRequest.pullRequestId') as unknown as string;
  }

  public get title(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetPullRequest.pullRequest.title'),
        outputPath: 'pullRequest.title',
        parameters: {
          pullRequestId: this.input.pullRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPullRequest.pullRequest.title', props);
    return resource.getResponseField('pullRequest.title') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetPullRequest.pullRequest.description'),
        outputPath: 'pullRequest.description',
        parameters: {
          pullRequestId: this.input.pullRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPullRequest.pullRequest.description', props);
    return resource.getResponseField('pullRequest.description') as unknown as string;
  }

  public get lastActivityDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetPullRequest.pullRequest.lastActivityDate'),
        outputPath: 'pullRequest.lastActivityDate',
        parameters: {
          pullRequestId: this.input.pullRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPullRequest.pullRequest.lastActivityDate', props);
    return resource.getResponseField('pullRequest.lastActivityDate') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetPullRequest.pullRequest.creationDate'),
        outputPath: 'pullRequest.creationDate',
        parameters: {
          pullRequestId: this.input.pullRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPullRequest.pullRequest.creationDate', props);
    return resource.getResponseField('pullRequest.creationDate') as unknown as string;
  }

  public get pullRequestStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetPullRequest.pullRequest.pullRequestStatus'),
        outputPath: 'pullRequest.pullRequestStatus',
        parameters: {
          pullRequestId: this.input.pullRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPullRequest.pullRequest.pullRequestStatus', props);
    return resource.getResponseField('pullRequest.pullRequestStatus') as unknown as string;
  }

  public get authorArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetPullRequest.pullRequest.authorArn'),
        outputPath: 'pullRequest.authorArn',
        parameters: {
          pullRequestId: this.input.pullRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPullRequest.pullRequest.authorArn', props);
    return resource.getResponseField('pullRequest.authorArn') as unknown as string;
  }

  public get pullRequestTargets(): shapes.CodeCommitPullRequestTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetPullRequest.pullRequest.pullRequestTargets'),
        outputPath: 'pullRequest.pullRequestTargets',
        parameters: {
          pullRequestId: this.input.pullRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPullRequest.pullRequest.pullRequestTargets', props);
    return resource.getResponseField('pullRequest.pullRequestTargets') as unknown as shapes.CodeCommitPullRequestTarget[];
  }

  public get clientRequestToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetPullRequest.pullRequest.clientRequestToken'),
        outputPath: 'pullRequest.clientRequestToken',
        parameters: {
          pullRequestId: this.input.pullRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPullRequest.pullRequest.clientRequestToken', props);
    return resource.getResponseField('pullRequest.clientRequestToken') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetPullRequest.pullRequest.revisionId'),
        outputPath: 'pullRequest.revisionId',
        parameters: {
          pullRequestId: this.input.pullRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPullRequest.pullRequest.revisionId', props);
    return resource.getResponseField('pullRequest.revisionId') as unknown as string;
  }

  public get approvalRules(): shapes.CodeCommitApprovalRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetPullRequest.pullRequest.approvalRules'),
        outputPath: 'pullRequest.approvalRules',
        parameters: {
          pullRequestId: this.input.pullRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPullRequest.pullRequest.approvalRules', props);
    return resource.getResponseField('pullRequest.approvalRules') as unknown as shapes.CodeCommitApprovalRule[];
  }

}

export class CodeCommitFetchPullRequestApprovalStates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitGetPullRequestApprovalStatesInput) {
    super(scope, id);
  }

  public get approvals(): shapes.CodeCommitApproval[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPullRequestApprovalStates',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetPullRequestApprovalStates.approvals'),
        outputPath: 'approvals',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          revisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPullRequestApprovalStates.approvals', props);
    return resource.getResponseField('approvals') as unknown as shapes.CodeCommitApproval[];
  }

}

export class CodeCommitFetchPullRequestOverrideState extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitGetPullRequestOverrideStateInput) {
    super(scope, id);
  }

  public get overridden(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPullRequestOverrideState',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetPullRequestOverrideState.overridden'),
        outputPath: 'overridden',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          revisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPullRequestOverrideState.overridden', props);
    return resource.getResponseField('overridden') as unknown as boolean;
  }

  public get overrider(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPullRequestOverrideState',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetPullRequestOverrideState.overrider'),
        outputPath: 'overrider',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          revisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPullRequestOverrideState.overrider', props);
    return resource.getResponseField('overrider') as unknown as string;
  }

}

export class CodeCommitFetchRepository extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitGetRepositoryInput) {
    super(scope, id);
  }

  public get repositoryMetadata(): CodeCommitFetchRepositoryRepositoryMetadata {
    return new CodeCommitFetchRepositoryRepositoryMetadata(this, 'RepositoryMetadata', this.__resources, this.input);
  }

}

export class CodeCommitFetchRepositoryRepositoryMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitGetRepositoryInput) {
    super(scope, id);
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRepository',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetRepository.repositoryMetadata.accountId'),
        outputPath: 'repositoryMetadata.accountId',
        parameters: {
          repositoryName: this.input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRepository.repositoryMetadata.accountId', props);
    return resource.getResponseField('repositoryMetadata.accountId') as unknown as string;
  }

  public get repositoryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRepository',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetRepository.repositoryMetadata.repositoryId'),
        outputPath: 'repositoryMetadata.repositoryId',
        parameters: {
          repositoryName: this.input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRepository.repositoryMetadata.repositoryId', props);
    return resource.getResponseField('repositoryMetadata.repositoryId') as unknown as string;
  }

  public get repositoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRepository',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetRepository.repositoryMetadata.repositoryName'),
        outputPath: 'repositoryMetadata.repositoryName',
        parameters: {
          repositoryName: this.input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRepository.repositoryMetadata.repositoryName', props);
    return resource.getResponseField('repositoryMetadata.repositoryName') as unknown as string;
  }

  public get repositoryDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRepository',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetRepository.repositoryMetadata.repositoryDescription'),
        outputPath: 'repositoryMetadata.repositoryDescription',
        parameters: {
          repositoryName: this.input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRepository.repositoryMetadata.repositoryDescription', props);
    return resource.getResponseField('repositoryMetadata.repositoryDescription') as unknown as string;
  }

  public get defaultBranch(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRepository',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetRepository.repositoryMetadata.defaultBranch'),
        outputPath: 'repositoryMetadata.defaultBranch',
        parameters: {
          repositoryName: this.input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRepository.repositoryMetadata.defaultBranch', props);
    return resource.getResponseField('repositoryMetadata.defaultBranch') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRepository',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetRepository.repositoryMetadata.lastModifiedDate'),
        outputPath: 'repositoryMetadata.lastModifiedDate',
        parameters: {
          repositoryName: this.input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRepository.repositoryMetadata.lastModifiedDate', props);
    return resource.getResponseField('repositoryMetadata.lastModifiedDate') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRepository',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetRepository.repositoryMetadata.creationDate'),
        outputPath: 'repositoryMetadata.creationDate',
        parameters: {
          repositoryName: this.input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRepository.repositoryMetadata.creationDate', props);
    return resource.getResponseField('repositoryMetadata.creationDate') as unknown as string;
  }

  public get cloneUrlHttp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRepository',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetRepository.repositoryMetadata.cloneUrlHttp'),
        outputPath: 'repositoryMetadata.cloneUrlHttp',
        parameters: {
          repositoryName: this.input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRepository.repositoryMetadata.cloneUrlHttp', props);
    return resource.getResponseField('repositoryMetadata.cloneUrlHttp') as unknown as string;
  }

  public get cloneUrlSsh(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRepository',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetRepository.repositoryMetadata.cloneUrlSsh'),
        outputPath: 'repositoryMetadata.cloneUrlSsh',
        parameters: {
          repositoryName: this.input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRepository.repositoryMetadata.cloneUrlSsh', props);
    return resource.getResponseField('repositoryMetadata.cloneUrlSsh') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRepository',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetRepository.repositoryMetadata.Arn'),
        outputPath: 'repositoryMetadata.Arn',
        parameters: {
          repositoryName: this.input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRepository.repositoryMetadata.Arn', props);
    return resource.getResponseField('repositoryMetadata.Arn') as unknown as string;
  }

}

export class CodeCommitFetchRepositoryTriggers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitGetRepositoryTriggersInput) {
    super(scope, id);
  }

  public get configurationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRepositoryTriggers',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetRepositoryTriggers.configurationId'),
        outputPath: 'configurationId',
        parameters: {
          repositoryName: this.input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRepositoryTriggers.configurationId', props);
    return resource.getResponseField('configurationId') as unknown as string;
  }

  public get triggers(): shapes.CodeCommitRepositoryTrigger[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRepositoryTriggers',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.GetRepositoryTriggers.triggers'),
        outputPath: 'triggers',
        parameters: {
          repositoryName: this.input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRepositoryTriggers.triggers', props);
    return resource.getResponseField('triggers') as unknown as shapes.CodeCommitRepositoryTrigger[];
  }

}

export class CodeCommitListApprovalRuleTemplates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitListApprovalRuleTemplatesInput) {
    super(scope, id);
  }

  public get approvalRuleTemplateNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listApprovalRuleTemplates',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.ListApprovalRuleTemplates.approvalRuleTemplateNames'),
        outputPath: 'approvalRuleTemplateNames',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListApprovalRuleTemplates.approvalRuleTemplateNames', props);
    return resource.getResponseField('approvalRuleTemplateNames') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listApprovalRuleTemplates',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.ListApprovalRuleTemplates.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListApprovalRuleTemplates.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeCommitListAssociatedApprovalRuleTemplatesForRepository extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryInput) {
    super(scope, id);
  }

  public get approvalRuleTemplateNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssociatedApprovalRuleTemplatesForRepository',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.ListAssociatedApprovalRuleTemplatesForRepository.approvalRuleTemplateNames'),
        outputPath: 'approvalRuleTemplateNames',
        parameters: {
          repositoryName: this.input.repositoryName,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAssociatedApprovalRuleTemplatesForRepository.approvalRuleTemplateNames', props);
    return resource.getResponseField('approvalRuleTemplateNames') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssociatedApprovalRuleTemplatesForRepository',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.ListAssociatedApprovalRuleTemplatesForRepository.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          repositoryName: this.input.repositoryName,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAssociatedApprovalRuleTemplatesForRepository.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeCommitListBranches extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitListBranchesInput) {
    super(scope, id);
  }

  public get branches(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBranches',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.ListBranches.branches'),
        outputPath: 'branches',
        parameters: {
          repositoryName: this.input.repositoryName,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBranches.branches', props);
    return resource.getResponseField('branches') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBranches',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.ListBranches.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          repositoryName: this.input.repositoryName,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBranches.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeCommitListPullRequests extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitListPullRequestsInput) {
    super(scope, id);
  }

  public get pullRequestIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPullRequests',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.ListPullRequests.pullRequestIds'),
        outputPath: 'pullRequestIds',
        parameters: {
          repositoryName: this.input.repositoryName,
          authorArn: this.input.authorArn,
          pullRequestStatus: this.input.pullRequestStatus,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPullRequests.pullRequestIds', props);
    return resource.getResponseField('pullRequestIds') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPullRequests',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.ListPullRequests.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          repositoryName: this.input.repositoryName,
          authorArn: this.input.authorArn,
          pullRequestStatus: this.input.pullRequestStatus,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPullRequests.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeCommitListRepositories extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitListRepositoriesInput) {
    super(scope, id);
  }

  public get repositories(): shapes.CodeCommitRepositoryNameIdPair[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRepositories',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.ListRepositories.repositories'),
        outputPath: 'repositories',
        parameters: {
          nextToken: this.input.nextToken,
          sortBy: this.input.sortBy,
          order: this.input.order,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRepositories.repositories', props);
    return resource.getResponseField('repositories') as unknown as shapes.CodeCommitRepositoryNameIdPair[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRepositories',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.ListRepositories.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          sortBy: this.input.sortBy,
          order: this.input.order,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRepositories.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeCommitListRepositoriesForApprovalRuleTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitListRepositoriesForApprovalRuleTemplateInput) {
    super(scope, id);
  }

  public get repositoryNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRepositoriesForApprovalRuleTemplate',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.ListRepositoriesForApprovalRuleTemplate.repositoryNames'),
        outputPath: 'repositoryNames',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRepositoriesForApprovalRuleTemplate.repositoryNames', props);
    return resource.getResponseField('repositoryNames') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRepositoriesForApprovalRuleTemplate',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.ListRepositoriesForApprovalRuleTemplate.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRepositoriesForApprovalRuleTemplate.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeCommitListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitListTagsForResourceInput) {
    super(scope, id);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          resourceArn: this.input.resourceArn,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.ListTagsForResource.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          resourceArn: this.input.resourceArn,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeCommitMergeBranchesByFastForward extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitMergeBranchesByFastForwardInput) {
    super(scope, id);
  }

  public get commitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergeBranchesByFastForward',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergeBranchesByFastForward.commitId'),
        outputPath: 'commitId',
        parameters: {
          repositoryName: this.input.repositoryName,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          targetBranch: this.input.targetBranch,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergeBranchesByFastForward.commitId', props);
    return resource.getResponseField('commitId') as unknown as string;
  }

  public get treeId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergeBranchesByFastForward',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergeBranchesByFastForward.treeId'),
        outputPath: 'treeId',
        parameters: {
          repositoryName: this.input.repositoryName,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          targetBranch: this.input.targetBranch,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergeBranchesByFastForward.treeId', props);
    return resource.getResponseField('treeId') as unknown as string;
  }

}

export class CodeCommitMergeBranchesBySquash extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitMergeBranchesBySquashInput) {
    super(scope, id);
  }

  public get commitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergeBranchesBySquash',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergeBranchesBySquash.commitId'),
        outputPath: 'commitId',
        parameters: {
          repositoryName: this.input.repositoryName,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          targetBranch: this.input.targetBranch,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          authorName: this.input.authorName,
          email: this.input.email,
          commitMessage: this.input.commitMessage,
          keepEmptyFolders: this.input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.input.conflictResolution?.replaceContents,
            deleteFiles: this.input.conflictResolution?.deleteFiles,
            setFileModes: this.input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergeBranchesBySquash.commitId', props);
    return resource.getResponseField('commitId') as unknown as string;
  }

  public get treeId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergeBranchesBySquash',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergeBranchesBySquash.treeId'),
        outputPath: 'treeId',
        parameters: {
          repositoryName: this.input.repositoryName,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          targetBranch: this.input.targetBranch,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          authorName: this.input.authorName,
          email: this.input.email,
          commitMessage: this.input.commitMessage,
          keepEmptyFolders: this.input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.input.conflictResolution?.replaceContents,
            deleteFiles: this.input.conflictResolution?.deleteFiles,
            setFileModes: this.input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergeBranchesBySquash.treeId', props);
    return resource.getResponseField('treeId') as unknown as string;
  }

}

export class CodeCommitMergeBranchesByThreeWay extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitMergeBranchesByThreeWayInput) {
    super(scope, id);
  }

  public get commitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergeBranchesByThreeWay',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergeBranchesByThreeWay.commitId'),
        outputPath: 'commitId',
        parameters: {
          repositoryName: this.input.repositoryName,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          targetBranch: this.input.targetBranch,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          authorName: this.input.authorName,
          email: this.input.email,
          commitMessage: this.input.commitMessage,
          keepEmptyFolders: this.input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.input.conflictResolution?.replaceContents,
            deleteFiles: this.input.conflictResolution?.deleteFiles,
            setFileModes: this.input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergeBranchesByThreeWay.commitId', props);
    return resource.getResponseField('commitId') as unknown as string;
  }

  public get treeId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergeBranchesByThreeWay',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergeBranchesByThreeWay.treeId'),
        outputPath: 'treeId',
        parameters: {
          repositoryName: this.input.repositoryName,
          sourceCommitSpecifier: this.input.sourceCommitSpecifier,
          destinationCommitSpecifier: this.input.destinationCommitSpecifier,
          targetBranch: this.input.targetBranch,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          authorName: this.input.authorName,
          email: this.input.email,
          commitMessage: this.input.commitMessage,
          keepEmptyFolders: this.input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.input.conflictResolution?.replaceContents,
            deleteFiles: this.input.conflictResolution?.deleteFiles,
            setFileModes: this.input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergeBranchesByThreeWay.treeId', props);
    return resource.getResponseField('treeId') as unknown as string;
  }

}

export class CodeCommitMergePullRequestByFastForward extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitMergePullRequestByFastForwardInput) {
    super(scope, id);
  }

  public get pullRequest(): CodeCommitMergePullRequestByFastForwardPullRequest {
    return new CodeCommitMergePullRequestByFastForwardPullRequest(this, 'PullRequest', this.__resources, this.input);
  }

}

export class CodeCommitMergePullRequestByFastForwardPullRequest extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitMergePullRequestByFastForwardInput) {
    super(scope, id);
  }

  public get pullRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergePullRequestByFastForward',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergePullRequestByFastForward.pullRequest.pullRequestId'),
        outputPath: 'pullRequest.pullRequestId',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          sourceCommitId: this.input.sourceCommitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergePullRequestByFastForward.pullRequest.pullRequestId', props);
    return resource.getResponseField('pullRequest.pullRequestId') as unknown as string;
  }

  public get title(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergePullRequestByFastForward',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergePullRequestByFastForward.pullRequest.title'),
        outputPath: 'pullRequest.title',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          sourceCommitId: this.input.sourceCommitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergePullRequestByFastForward.pullRequest.title', props);
    return resource.getResponseField('pullRequest.title') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergePullRequestByFastForward',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergePullRequestByFastForward.pullRequest.description'),
        outputPath: 'pullRequest.description',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          sourceCommitId: this.input.sourceCommitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergePullRequestByFastForward.pullRequest.description', props);
    return resource.getResponseField('pullRequest.description') as unknown as string;
  }

  public get lastActivityDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergePullRequestByFastForward',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergePullRequestByFastForward.pullRequest.lastActivityDate'),
        outputPath: 'pullRequest.lastActivityDate',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          sourceCommitId: this.input.sourceCommitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergePullRequestByFastForward.pullRequest.lastActivityDate', props);
    return resource.getResponseField('pullRequest.lastActivityDate') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergePullRequestByFastForward',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergePullRequestByFastForward.pullRequest.creationDate'),
        outputPath: 'pullRequest.creationDate',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          sourceCommitId: this.input.sourceCommitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergePullRequestByFastForward.pullRequest.creationDate', props);
    return resource.getResponseField('pullRequest.creationDate') as unknown as string;
  }

  public get pullRequestStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergePullRequestByFastForward',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergePullRequestByFastForward.pullRequest.pullRequestStatus'),
        outputPath: 'pullRequest.pullRequestStatus',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          sourceCommitId: this.input.sourceCommitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergePullRequestByFastForward.pullRequest.pullRequestStatus', props);
    return resource.getResponseField('pullRequest.pullRequestStatus') as unknown as string;
  }

  public get authorArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergePullRequestByFastForward',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergePullRequestByFastForward.pullRequest.authorArn'),
        outputPath: 'pullRequest.authorArn',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          sourceCommitId: this.input.sourceCommitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergePullRequestByFastForward.pullRequest.authorArn', props);
    return resource.getResponseField('pullRequest.authorArn') as unknown as string;
  }

  public get pullRequestTargets(): shapes.CodeCommitPullRequestTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergePullRequestByFastForward',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergePullRequestByFastForward.pullRequest.pullRequestTargets'),
        outputPath: 'pullRequest.pullRequestTargets',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          sourceCommitId: this.input.sourceCommitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergePullRequestByFastForward.pullRequest.pullRequestTargets', props);
    return resource.getResponseField('pullRequest.pullRequestTargets') as unknown as shapes.CodeCommitPullRequestTarget[];
  }

  public get clientRequestToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergePullRequestByFastForward',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergePullRequestByFastForward.pullRequest.clientRequestToken'),
        outputPath: 'pullRequest.clientRequestToken',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          sourceCommitId: this.input.sourceCommitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergePullRequestByFastForward.pullRequest.clientRequestToken', props);
    return resource.getResponseField('pullRequest.clientRequestToken') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergePullRequestByFastForward',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergePullRequestByFastForward.pullRequest.revisionId'),
        outputPath: 'pullRequest.revisionId',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          sourceCommitId: this.input.sourceCommitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergePullRequestByFastForward.pullRequest.revisionId', props);
    return resource.getResponseField('pullRequest.revisionId') as unknown as string;
  }

  public get approvalRules(): shapes.CodeCommitApprovalRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergePullRequestByFastForward',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergePullRequestByFastForward.pullRequest.approvalRules'),
        outputPath: 'pullRequest.approvalRules',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          sourceCommitId: this.input.sourceCommitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergePullRequestByFastForward.pullRequest.approvalRules', props);
    return resource.getResponseField('pullRequest.approvalRules') as unknown as shapes.CodeCommitApprovalRule[];
  }

}

export class CodeCommitMergePullRequestBySquash extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitMergePullRequestBySquashInput) {
    super(scope, id);
  }

  public get pullRequest(): CodeCommitMergePullRequestBySquashPullRequest {
    return new CodeCommitMergePullRequestBySquashPullRequest(this, 'PullRequest', this.__resources, this.input);
  }

}

export class CodeCommitMergePullRequestBySquashPullRequest extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitMergePullRequestBySquashInput) {
    super(scope, id);
  }

  public get pullRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergePullRequestBySquash',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergePullRequestBySquash.pullRequest.pullRequestId'),
        outputPath: 'pullRequest.pullRequestId',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          sourceCommitId: this.input.sourceCommitId,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          commitMessage: this.input.commitMessage,
          authorName: this.input.authorName,
          email: this.input.email,
          keepEmptyFolders: this.input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.input.conflictResolution?.replaceContents,
            deleteFiles: this.input.conflictResolution?.deleteFiles,
            setFileModes: this.input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergePullRequestBySquash.pullRequest.pullRequestId', props);
    return resource.getResponseField('pullRequest.pullRequestId') as unknown as string;
  }

  public get title(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergePullRequestBySquash',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergePullRequestBySquash.pullRequest.title'),
        outputPath: 'pullRequest.title',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          sourceCommitId: this.input.sourceCommitId,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          commitMessage: this.input.commitMessage,
          authorName: this.input.authorName,
          email: this.input.email,
          keepEmptyFolders: this.input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.input.conflictResolution?.replaceContents,
            deleteFiles: this.input.conflictResolution?.deleteFiles,
            setFileModes: this.input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergePullRequestBySquash.pullRequest.title', props);
    return resource.getResponseField('pullRequest.title') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergePullRequestBySquash',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergePullRequestBySquash.pullRequest.description'),
        outputPath: 'pullRequest.description',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          sourceCommitId: this.input.sourceCommitId,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          commitMessage: this.input.commitMessage,
          authorName: this.input.authorName,
          email: this.input.email,
          keepEmptyFolders: this.input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.input.conflictResolution?.replaceContents,
            deleteFiles: this.input.conflictResolution?.deleteFiles,
            setFileModes: this.input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergePullRequestBySquash.pullRequest.description', props);
    return resource.getResponseField('pullRequest.description') as unknown as string;
  }

  public get lastActivityDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergePullRequestBySquash',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergePullRequestBySquash.pullRequest.lastActivityDate'),
        outputPath: 'pullRequest.lastActivityDate',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          sourceCommitId: this.input.sourceCommitId,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          commitMessage: this.input.commitMessage,
          authorName: this.input.authorName,
          email: this.input.email,
          keepEmptyFolders: this.input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.input.conflictResolution?.replaceContents,
            deleteFiles: this.input.conflictResolution?.deleteFiles,
            setFileModes: this.input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergePullRequestBySquash.pullRequest.lastActivityDate', props);
    return resource.getResponseField('pullRequest.lastActivityDate') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergePullRequestBySquash',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergePullRequestBySquash.pullRequest.creationDate'),
        outputPath: 'pullRequest.creationDate',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          sourceCommitId: this.input.sourceCommitId,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          commitMessage: this.input.commitMessage,
          authorName: this.input.authorName,
          email: this.input.email,
          keepEmptyFolders: this.input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.input.conflictResolution?.replaceContents,
            deleteFiles: this.input.conflictResolution?.deleteFiles,
            setFileModes: this.input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergePullRequestBySquash.pullRequest.creationDate', props);
    return resource.getResponseField('pullRequest.creationDate') as unknown as string;
  }

  public get pullRequestStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergePullRequestBySquash',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergePullRequestBySquash.pullRequest.pullRequestStatus'),
        outputPath: 'pullRequest.pullRequestStatus',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          sourceCommitId: this.input.sourceCommitId,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          commitMessage: this.input.commitMessage,
          authorName: this.input.authorName,
          email: this.input.email,
          keepEmptyFolders: this.input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.input.conflictResolution?.replaceContents,
            deleteFiles: this.input.conflictResolution?.deleteFiles,
            setFileModes: this.input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergePullRequestBySquash.pullRequest.pullRequestStatus', props);
    return resource.getResponseField('pullRequest.pullRequestStatus') as unknown as string;
  }

  public get authorArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergePullRequestBySquash',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergePullRequestBySquash.pullRequest.authorArn'),
        outputPath: 'pullRequest.authorArn',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          sourceCommitId: this.input.sourceCommitId,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          commitMessage: this.input.commitMessage,
          authorName: this.input.authorName,
          email: this.input.email,
          keepEmptyFolders: this.input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.input.conflictResolution?.replaceContents,
            deleteFiles: this.input.conflictResolution?.deleteFiles,
            setFileModes: this.input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergePullRequestBySquash.pullRequest.authorArn', props);
    return resource.getResponseField('pullRequest.authorArn') as unknown as string;
  }

  public get pullRequestTargets(): shapes.CodeCommitPullRequestTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergePullRequestBySquash',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergePullRequestBySquash.pullRequest.pullRequestTargets'),
        outputPath: 'pullRequest.pullRequestTargets',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          sourceCommitId: this.input.sourceCommitId,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          commitMessage: this.input.commitMessage,
          authorName: this.input.authorName,
          email: this.input.email,
          keepEmptyFolders: this.input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.input.conflictResolution?.replaceContents,
            deleteFiles: this.input.conflictResolution?.deleteFiles,
            setFileModes: this.input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergePullRequestBySquash.pullRequest.pullRequestTargets', props);
    return resource.getResponseField('pullRequest.pullRequestTargets') as unknown as shapes.CodeCommitPullRequestTarget[];
  }

  public get clientRequestToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergePullRequestBySquash',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergePullRequestBySquash.pullRequest.clientRequestToken'),
        outputPath: 'pullRequest.clientRequestToken',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          sourceCommitId: this.input.sourceCommitId,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          commitMessage: this.input.commitMessage,
          authorName: this.input.authorName,
          email: this.input.email,
          keepEmptyFolders: this.input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.input.conflictResolution?.replaceContents,
            deleteFiles: this.input.conflictResolution?.deleteFiles,
            setFileModes: this.input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergePullRequestBySquash.pullRequest.clientRequestToken', props);
    return resource.getResponseField('pullRequest.clientRequestToken') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergePullRequestBySquash',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergePullRequestBySquash.pullRequest.revisionId'),
        outputPath: 'pullRequest.revisionId',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          sourceCommitId: this.input.sourceCommitId,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          commitMessage: this.input.commitMessage,
          authorName: this.input.authorName,
          email: this.input.email,
          keepEmptyFolders: this.input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.input.conflictResolution?.replaceContents,
            deleteFiles: this.input.conflictResolution?.deleteFiles,
            setFileModes: this.input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergePullRequestBySquash.pullRequest.revisionId', props);
    return resource.getResponseField('pullRequest.revisionId') as unknown as string;
  }

  public get approvalRules(): shapes.CodeCommitApprovalRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergePullRequestBySquash',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergePullRequestBySquash.pullRequest.approvalRules'),
        outputPath: 'pullRequest.approvalRules',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          sourceCommitId: this.input.sourceCommitId,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          commitMessage: this.input.commitMessage,
          authorName: this.input.authorName,
          email: this.input.email,
          keepEmptyFolders: this.input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.input.conflictResolution?.replaceContents,
            deleteFiles: this.input.conflictResolution?.deleteFiles,
            setFileModes: this.input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergePullRequestBySquash.pullRequest.approvalRules', props);
    return resource.getResponseField('pullRequest.approvalRules') as unknown as shapes.CodeCommitApprovalRule[];
  }

}

export class CodeCommitMergePullRequestByThreeWay extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitMergePullRequestByThreeWayInput) {
    super(scope, id);
  }

  public get pullRequest(): CodeCommitMergePullRequestByThreeWayPullRequest {
    return new CodeCommitMergePullRequestByThreeWayPullRequest(this, 'PullRequest', this.__resources, this.input);
  }

}

export class CodeCommitMergePullRequestByThreeWayPullRequest extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitMergePullRequestByThreeWayInput) {
    super(scope, id);
  }

  public get pullRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergePullRequestByThreeWay',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergePullRequestByThreeWay.pullRequest.pullRequestId'),
        outputPath: 'pullRequest.pullRequestId',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          sourceCommitId: this.input.sourceCommitId,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          commitMessage: this.input.commitMessage,
          authorName: this.input.authorName,
          email: this.input.email,
          keepEmptyFolders: this.input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.input.conflictResolution?.replaceContents,
            deleteFiles: this.input.conflictResolution?.deleteFiles,
            setFileModes: this.input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergePullRequestByThreeWay.pullRequest.pullRequestId', props);
    return resource.getResponseField('pullRequest.pullRequestId') as unknown as string;
  }

  public get title(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergePullRequestByThreeWay',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergePullRequestByThreeWay.pullRequest.title'),
        outputPath: 'pullRequest.title',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          sourceCommitId: this.input.sourceCommitId,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          commitMessage: this.input.commitMessage,
          authorName: this.input.authorName,
          email: this.input.email,
          keepEmptyFolders: this.input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.input.conflictResolution?.replaceContents,
            deleteFiles: this.input.conflictResolution?.deleteFiles,
            setFileModes: this.input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergePullRequestByThreeWay.pullRequest.title', props);
    return resource.getResponseField('pullRequest.title') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergePullRequestByThreeWay',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergePullRequestByThreeWay.pullRequest.description'),
        outputPath: 'pullRequest.description',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          sourceCommitId: this.input.sourceCommitId,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          commitMessage: this.input.commitMessage,
          authorName: this.input.authorName,
          email: this.input.email,
          keepEmptyFolders: this.input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.input.conflictResolution?.replaceContents,
            deleteFiles: this.input.conflictResolution?.deleteFiles,
            setFileModes: this.input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergePullRequestByThreeWay.pullRequest.description', props);
    return resource.getResponseField('pullRequest.description') as unknown as string;
  }

  public get lastActivityDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergePullRequestByThreeWay',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergePullRequestByThreeWay.pullRequest.lastActivityDate'),
        outputPath: 'pullRequest.lastActivityDate',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          sourceCommitId: this.input.sourceCommitId,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          commitMessage: this.input.commitMessage,
          authorName: this.input.authorName,
          email: this.input.email,
          keepEmptyFolders: this.input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.input.conflictResolution?.replaceContents,
            deleteFiles: this.input.conflictResolution?.deleteFiles,
            setFileModes: this.input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergePullRequestByThreeWay.pullRequest.lastActivityDate', props);
    return resource.getResponseField('pullRequest.lastActivityDate') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergePullRequestByThreeWay',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergePullRequestByThreeWay.pullRequest.creationDate'),
        outputPath: 'pullRequest.creationDate',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          sourceCommitId: this.input.sourceCommitId,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          commitMessage: this.input.commitMessage,
          authorName: this.input.authorName,
          email: this.input.email,
          keepEmptyFolders: this.input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.input.conflictResolution?.replaceContents,
            deleteFiles: this.input.conflictResolution?.deleteFiles,
            setFileModes: this.input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergePullRequestByThreeWay.pullRequest.creationDate', props);
    return resource.getResponseField('pullRequest.creationDate') as unknown as string;
  }

  public get pullRequestStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergePullRequestByThreeWay',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergePullRequestByThreeWay.pullRequest.pullRequestStatus'),
        outputPath: 'pullRequest.pullRequestStatus',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          sourceCommitId: this.input.sourceCommitId,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          commitMessage: this.input.commitMessage,
          authorName: this.input.authorName,
          email: this.input.email,
          keepEmptyFolders: this.input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.input.conflictResolution?.replaceContents,
            deleteFiles: this.input.conflictResolution?.deleteFiles,
            setFileModes: this.input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergePullRequestByThreeWay.pullRequest.pullRequestStatus', props);
    return resource.getResponseField('pullRequest.pullRequestStatus') as unknown as string;
  }

  public get authorArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergePullRequestByThreeWay',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergePullRequestByThreeWay.pullRequest.authorArn'),
        outputPath: 'pullRequest.authorArn',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          sourceCommitId: this.input.sourceCommitId,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          commitMessage: this.input.commitMessage,
          authorName: this.input.authorName,
          email: this.input.email,
          keepEmptyFolders: this.input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.input.conflictResolution?.replaceContents,
            deleteFiles: this.input.conflictResolution?.deleteFiles,
            setFileModes: this.input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergePullRequestByThreeWay.pullRequest.authorArn', props);
    return resource.getResponseField('pullRequest.authorArn') as unknown as string;
  }

  public get pullRequestTargets(): shapes.CodeCommitPullRequestTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergePullRequestByThreeWay',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergePullRequestByThreeWay.pullRequest.pullRequestTargets'),
        outputPath: 'pullRequest.pullRequestTargets',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          sourceCommitId: this.input.sourceCommitId,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          commitMessage: this.input.commitMessage,
          authorName: this.input.authorName,
          email: this.input.email,
          keepEmptyFolders: this.input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.input.conflictResolution?.replaceContents,
            deleteFiles: this.input.conflictResolution?.deleteFiles,
            setFileModes: this.input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergePullRequestByThreeWay.pullRequest.pullRequestTargets', props);
    return resource.getResponseField('pullRequest.pullRequestTargets') as unknown as shapes.CodeCommitPullRequestTarget[];
  }

  public get clientRequestToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergePullRequestByThreeWay',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergePullRequestByThreeWay.pullRequest.clientRequestToken'),
        outputPath: 'pullRequest.clientRequestToken',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          sourceCommitId: this.input.sourceCommitId,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          commitMessage: this.input.commitMessage,
          authorName: this.input.authorName,
          email: this.input.email,
          keepEmptyFolders: this.input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.input.conflictResolution?.replaceContents,
            deleteFiles: this.input.conflictResolution?.deleteFiles,
            setFileModes: this.input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergePullRequestByThreeWay.pullRequest.clientRequestToken', props);
    return resource.getResponseField('pullRequest.clientRequestToken') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergePullRequestByThreeWay',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergePullRequestByThreeWay.pullRequest.revisionId'),
        outputPath: 'pullRequest.revisionId',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          sourceCommitId: this.input.sourceCommitId,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          commitMessage: this.input.commitMessage,
          authorName: this.input.authorName,
          email: this.input.email,
          keepEmptyFolders: this.input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.input.conflictResolution?.replaceContents,
            deleteFiles: this.input.conflictResolution?.deleteFiles,
            setFileModes: this.input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergePullRequestByThreeWay.pullRequest.revisionId', props);
    return resource.getResponseField('pullRequest.revisionId') as unknown as string;
  }

  public get approvalRules(): shapes.CodeCommitApprovalRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergePullRequestByThreeWay',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.MergePullRequestByThreeWay.pullRequest.approvalRules'),
        outputPath: 'pullRequest.approvalRules',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          sourceCommitId: this.input.sourceCommitId,
          conflictDetailLevel: this.input.conflictDetailLevel,
          conflictResolutionStrategy: this.input.conflictResolutionStrategy,
          commitMessage: this.input.commitMessage,
          authorName: this.input.authorName,
          email: this.input.email,
          keepEmptyFolders: this.input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.input.conflictResolution?.replaceContents,
            deleteFiles: this.input.conflictResolution?.deleteFiles,
            setFileModes: this.input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergePullRequestByThreeWay.pullRequest.approvalRules', props);
    return resource.getResponseField('pullRequest.approvalRules') as unknown as shapes.CodeCommitApprovalRule[];
  }

}

export class CodeCommitPostCommentForComparedCommit extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitPostCommentForComparedCommitInput) {
    super(scope, id);
  }

  public get repositoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForComparedCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForComparedCommit.repositoryName'),
        outputPath: 'repositoryName',
        parameters: {
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForComparedCommit.repositoryName', props);
    return resource.getResponseField('repositoryName') as unknown as string;
  }

  public get beforeCommitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForComparedCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForComparedCommit.beforeCommitId'),
        outputPath: 'beforeCommitId',
        parameters: {
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForComparedCommit.beforeCommitId', props);
    return resource.getResponseField('beforeCommitId') as unknown as string;
  }

  public get afterCommitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForComparedCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForComparedCommit.afterCommitId'),
        outputPath: 'afterCommitId',
        parameters: {
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForComparedCommit.afterCommitId', props);
    return resource.getResponseField('afterCommitId') as unknown as string;
  }

  public get beforeBlobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForComparedCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForComparedCommit.beforeBlobId'),
        outputPath: 'beforeBlobId',
        parameters: {
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForComparedCommit.beforeBlobId', props);
    return resource.getResponseField('beforeBlobId') as unknown as string;
  }

  public get afterBlobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForComparedCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForComparedCommit.afterBlobId'),
        outputPath: 'afterBlobId',
        parameters: {
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForComparedCommit.afterBlobId', props);
    return resource.getResponseField('afterBlobId') as unknown as string;
  }

  public get location(): CodeCommitPostCommentForComparedCommitLocation {
    return new CodeCommitPostCommentForComparedCommitLocation(this, 'Location', this.__resources, this.input);
  }

  public get comment(): CodeCommitPostCommentForComparedCommitComment {
    return new CodeCommitPostCommentForComparedCommitComment(this, 'Comment', this.__resources, this.input);
  }

}

export class CodeCommitPostCommentForComparedCommitLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitPostCommentForComparedCommitInput) {
    super(scope, id);
  }

  public get filePath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForComparedCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForComparedCommit.location.filePath'),
        outputPath: 'location.filePath',
        parameters: {
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForComparedCommit.location.filePath', props);
    return resource.getResponseField('location.filePath') as unknown as string;
  }

  public get filePosition(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForComparedCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForComparedCommit.location.filePosition'),
        outputPath: 'location.filePosition',
        parameters: {
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForComparedCommit.location.filePosition', props);
    return resource.getResponseField('location.filePosition') as unknown as number;
  }

  public get relativeFileVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForComparedCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForComparedCommit.location.relativeFileVersion'),
        outputPath: 'location.relativeFileVersion',
        parameters: {
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForComparedCommit.location.relativeFileVersion', props);
    return resource.getResponseField('location.relativeFileVersion') as unknown as string;
  }

}

export class CodeCommitPostCommentForComparedCommitComment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitPostCommentForComparedCommitInput) {
    super(scope, id);
  }

  public get commentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForComparedCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForComparedCommit.comment.commentId'),
        outputPath: 'comment.commentId',
        parameters: {
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForComparedCommit.comment.commentId', props);
    return resource.getResponseField('comment.commentId') as unknown as string;
  }

  public get content(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForComparedCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForComparedCommit.comment.content'),
        outputPath: 'comment.content',
        parameters: {
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForComparedCommit.comment.content', props);
    return resource.getResponseField('comment.content') as unknown as string;
  }

  public get inReplyTo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForComparedCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForComparedCommit.comment.inReplyTo'),
        outputPath: 'comment.inReplyTo',
        parameters: {
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForComparedCommit.comment.inReplyTo', props);
    return resource.getResponseField('comment.inReplyTo') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForComparedCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForComparedCommit.comment.creationDate'),
        outputPath: 'comment.creationDate',
        parameters: {
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForComparedCommit.comment.creationDate', props);
    return resource.getResponseField('comment.creationDate') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForComparedCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForComparedCommit.comment.lastModifiedDate'),
        outputPath: 'comment.lastModifiedDate',
        parameters: {
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForComparedCommit.comment.lastModifiedDate', props);
    return resource.getResponseField('comment.lastModifiedDate') as unknown as string;
  }

  public get authorArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForComparedCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForComparedCommit.comment.authorArn'),
        outputPath: 'comment.authorArn',
        parameters: {
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForComparedCommit.comment.authorArn', props);
    return resource.getResponseField('comment.authorArn') as unknown as string;
  }

  public get deleted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForComparedCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForComparedCommit.comment.deleted'),
        outputPath: 'comment.deleted',
        parameters: {
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForComparedCommit.comment.deleted', props);
    return resource.getResponseField('comment.deleted') as unknown as boolean;
  }

  public get clientRequestToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForComparedCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForComparedCommit.comment.clientRequestToken'),
        outputPath: 'comment.clientRequestToken',
        parameters: {
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForComparedCommit.comment.clientRequestToken', props);
    return resource.getResponseField('comment.clientRequestToken') as unknown as string;
  }

  public get callerReactions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForComparedCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForComparedCommit.comment.callerReactions'),
        outputPath: 'comment.callerReactions',
        parameters: {
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForComparedCommit.comment.callerReactions', props);
    return resource.getResponseField('comment.callerReactions') as unknown as string[];
  }

  public get reactionCounts(): Record<string, number> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForComparedCommit',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForComparedCommit.comment.reactionCounts'),
        outputPath: 'comment.reactionCounts',
        parameters: {
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForComparedCommit.comment.reactionCounts', props);
    return resource.getResponseField('comment.reactionCounts') as unknown as Record<string, number>;
  }

}

export class CodeCommitPostCommentForPullRequest extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitPostCommentForPullRequestInput) {
    super(scope, id);
  }

  public get repositoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForPullRequest.repositoryName'),
        outputPath: 'repositoryName',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForPullRequest.repositoryName', props);
    return resource.getResponseField('repositoryName') as unknown as string;
  }

  public get pullRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForPullRequest.pullRequestId'),
        outputPath: 'pullRequestId',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForPullRequest.pullRequestId', props);
    return resource.getResponseField('pullRequestId') as unknown as string;
  }

  public get beforeCommitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForPullRequest.beforeCommitId'),
        outputPath: 'beforeCommitId',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForPullRequest.beforeCommitId', props);
    return resource.getResponseField('beforeCommitId') as unknown as string;
  }

  public get afterCommitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForPullRequest.afterCommitId'),
        outputPath: 'afterCommitId',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForPullRequest.afterCommitId', props);
    return resource.getResponseField('afterCommitId') as unknown as string;
  }

  public get beforeBlobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForPullRequest.beforeBlobId'),
        outputPath: 'beforeBlobId',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForPullRequest.beforeBlobId', props);
    return resource.getResponseField('beforeBlobId') as unknown as string;
  }

  public get afterBlobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForPullRequest.afterBlobId'),
        outputPath: 'afterBlobId',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForPullRequest.afterBlobId', props);
    return resource.getResponseField('afterBlobId') as unknown as string;
  }

  public get location(): CodeCommitPostCommentForPullRequestLocation {
    return new CodeCommitPostCommentForPullRequestLocation(this, 'Location', this.__resources, this.input);
  }

  public get comment(): CodeCommitPostCommentForPullRequestComment {
    return new CodeCommitPostCommentForPullRequestComment(this, 'Comment', this.__resources, this.input);
  }

}

export class CodeCommitPostCommentForPullRequestLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitPostCommentForPullRequestInput) {
    super(scope, id);
  }

  public get filePath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForPullRequest.location.filePath'),
        outputPath: 'location.filePath',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForPullRequest.location.filePath', props);
    return resource.getResponseField('location.filePath') as unknown as string;
  }

  public get filePosition(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForPullRequest.location.filePosition'),
        outputPath: 'location.filePosition',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForPullRequest.location.filePosition', props);
    return resource.getResponseField('location.filePosition') as unknown as number;
  }

  public get relativeFileVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForPullRequest.location.relativeFileVersion'),
        outputPath: 'location.relativeFileVersion',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForPullRequest.location.relativeFileVersion', props);
    return resource.getResponseField('location.relativeFileVersion') as unknown as string;
  }

}

export class CodeCommitPostCommentForPullRequestComment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitPostCommentForPullRequestInput) {
    super(scope, id);
  }

  public get commentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForPullRequest.comment.commentId'),
        outputPath: 'comment.commentId',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForPullRequest.comment.commentId', props);
    return resource.getResponseField('comment.commentId') as unknown as string;
  }

  public get content(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForPullRequest.comment.content'),
        outputPath: 'comment.content',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForPullRequest.comment.content', props);
    return resource.getResponseField('comment.content') as unknown as string;
  }

  public get inReplyTo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForPullRequest.comment.inReplyTo'),
        outputPath: 'comment.inReplyTo',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForPullRequest.comment.inReplyTo', props);
    return resource.getResponseField('comment.inReplyTo') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForPullRequest.comment.creationDate'),
        outputPath: 'comment.creationDate',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForPullRequest.comment.creationDate', props);
    return resource.getResponseField('comment.creationDate') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForPullRequest.comment.lastModifiedDate'),
        outputPath: 'comment.lastModifiedDate',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForPullRequest.comment.lastModifiedDate', props);
    return resource.getResponseField('comment.lastModifiedDate') as unknown as string;
  }

  public get authorArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForPullRequest.comment.authorArn'),
        outputPath: 'comment.authorArn',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForPullRequest.comment.authorArn', props);
    return resource.getResponseField('comment.authorArn') as unknown as string;
  }

  public get deleted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForPullRequest.comment.deleted'),
        outputPath: 'comment.deleted',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForPullRequest.comment.deleted', props);
    return resource.getResponseField('comment.deleted') as unknown as boolean;
  }

  public get clientRequestToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForPullRequest.comment.clientRequestToken'),
        outputPath: 'comment.clientRequestToken',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForPullRequest.comment.clientRequestToken', props);
    return resource.getResponseField('comment.clientRequestToken') as unknown as string;
  }

  public get callerReactions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForPullRequest.comment.callerReactions'),
        outputPath: 'comment.callerReactions',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForPullRequest.comment.callerReactions', props);
    return resource.getResponseField('comment.callerReactions') as unknown as string[];
  }

  public get reactionCounts(): Record<string, number> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentForPullRequest',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentForPullRequest.comment.reactionCounts'),
        outputPath: 'comment.reactionCounts',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          repositoryName: this.input.repositoryName,
          beforeCommitId: this.input.beforeCommitId,
          afterCommitId: this.input.afterCommitId,
          location: {
            filePath: this.input.location?.filePath,
            filePosition: this.input.location?.filePosition,
            relativeFileVersion: this.input.location?.relativeFileVersion,
          },
          content: this.input.content,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentForPullRequest.comment.reactionCounts', props);
    return resource.getResponseField('comment.reactionCounts') as unknown as Record<string, number>;
  }

}

export class CodeCommitPostCommentReply extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitPostCommentReplyInput) {
    super(scope, id);
  }

  public get comment(): CodeCommitPostCommentReplyComment {
    return new CodeCommitPostCommentReplyComment(this, 'Comment', this.__resources, this.input);
  }

}

export class CodeCommitPostCommentReplyComment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitPostCommentReplyInput) {
    super(scope, id);
  }

  public get commentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentReply',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentReply.comment.commentId'),
        outputPath: 'comment.commentId',
        parameters: {
          inReplyTo: this.input.inReplyTo,
          clientRequestToken: this.input.clientRequestToken,
          content: this.input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentReply.comment.commentId', props);
    return resource.getResponseField('comment.commentId') as unknown as string;
  }

  public get content(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentReply',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentReply.comment.content'),
        outputPath: 'comment.content',
        parameters: {
          inReplyTo: this.input.inReplyTo,
          clientRequestToken: this.input.clientRequestToken,
          content: this.input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentReply.comment.content', props);
    return resource.getResponseField('comment.content') as unknown as string;
  }

  public get inReplyTo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentReply',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentReply.comment.inReplyTo'),
        outputPath: 'comment.inReplyTo',
        parameters: {
          inReplyTo: this.input.inReplyTo,
          clientRequestToken: this.input.clientRequestToken,
          content: this.input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentReply.comment.inReplyTo', props);
    return resource.getResponseField('comment.inReplyTo') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentReply',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentReply.comment.creationDate'),
        outputPath: 'comment.creationDate',
        parameters: {
          inReplyTo: this.input.inReplyTo,
          clientRequestToken: this.input.clientRequestToken,
          content: this.input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentReply.comment.creationDate', props);
    return resource.getResponseField('comment.creationDate') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentReply',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentReply.comment.lastModifiedDate'),
        outputPath: 'comment.lastModifiedDate',
        parameters: {
          inReplyTo: this.input.inReplyTo,
          clientRequestToken: this.input.clientRequestToken,
          content: this.input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentReply.comment.lastModifiedDate', props);
    return resource.getResponseField('comment.lastModifiedDate') as unknown as string;
  }

  public get authorArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentReply',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentReply.comment.authorArn'),
        outputPath: 'comment.authorArn',
        parameters: {
          inReplyTo: this.input.inReplyTo,
          clientRequestToken: this.input.clientRequestToken,
          content: this.input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentReply.comment.authorArn', props);
    return resource.getResponseField('comment.authorArn') as unknown as string;
  }

  public get deleted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentReply',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentReply.comment.deleted'),
        outputPath: 'comment.deleted',
        parameters: {
          inReplyTo: this.input.inReplyTo,
          clientRequestToken: this.input.clientRequestToken,
          content: this.input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentReply.comment.deleted', props);
    return resource.getResponseField('comment.deleted') as unknown as boolean;
  }

  public get clientRequestToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentReply',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentReply.comment.clientRequestToken'),
        outputPath: 'comment.clientRequestToken',
        parameters: {
          inReplyTo: this.input.inReplyTo,
          clientRequestToken: this.input.clientRequestToken,
          content: this.input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentReply.comment.clientRequestToken', props);
    return resource.getResponseField('comment.clientRequestToken') as unknown as string;
  }

  public get callerReactions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentReply',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentReply.comment.callerReactions'),
        outputPath: 'comment.callerReactions',
        parameters: {
          inReplyTo: this.input.inReplyTo,
          clientRequestToken: this.input.clientRequestToken,
          content: this.input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentReply.comment.callerReactions', props);
    return resource.getResponseField('comment.callerReactions') as unknown as string[];
  }

  public get reactionCounts(): Record<string, number> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postCommentReply',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PostCommentReply.comment.reactionCounts'),
        outputPath: 'comment.reactionCounts',
        parameters: {
          inReplyTo: this.input.inReplyTo,
          clientRequestToken: this.input.clientRequestToken,
          content: this.input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PostCommentReply.comment.reactionCounts', props);
    return resource.getResponseField('comment.reactionCounts') as unknown as Record<string, number>;
  }

}

export class CodeCommitPutFile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitPutFileInput) {
    super(scope, id);
  }

  public get commitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putFile',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PutFile.commitId'),
        outputPath: 'commitId',
        parameters: {
          repositoryName: this.input.repositoryName,
          branchName: this.input.branchName,
          fileContent: {
          },
          filePath: this.input.filePath,
          fileMode: this.input.fileMode,
          parentCommitId: this.input.parentCommitId,
          commitMessage: this.input.commitMessage,
          name: this.input.name,
          email: this.input.email,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutFile.commitId', props);
    return resource.getResponseField('commitId') as unknown as string;
  }

  public get blobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putFile',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PutFile.blobId'),
        outputPath: 'blobId',
        parameters: {
          repositoryName: this.input.repositoryName,
          branchName: this.input.branchName,
          fileContent: {
          },
          filePath: this.input.filePath,
          fileMode: this.input.fileMode,
          parentCommitId: this.input.parentCommitId,
          commitMessage: this.input.commitMessage,
          name: this.input.name,
          email: this.input.email,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutFile.blobId', props);
    return resource.getResponseField('blobId') as unknown as string;
  }

  public get treeId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putFile',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PutFile.treeId'),
        outputPath: 'treeId',
        parameters: {
          repositoryName: this.input.repositoryName,
          branchName: this.input.branchName,
          fileContent: {
          },
          filePath: this.input.filePath,
          fileMode: this.input.fileMode,
          parentCommitId: this.input.parentCommitId,
          commitMessage: this.input.commitMessage,
          name: this.input.name,
          email: this.input.email,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutFile.treeId', props);
    return resource.getResponseField('treeId') as unknown as string;
  }

}

export class CodeCommitPutRepositoryTriggers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitPutRepositoryTriggersInput) {
    super(scope, id);
  }

  public get configurationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRepositoryTriggers',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.PutRepositoryTriggers.configurationId'),
        outputPath: 'configurationId',
        parameters: {
          repositoryName: this.input.repositoryName,
          triggers: this.input.triggers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutRepositoryTriggers.configurationId', props);
    return resource.getResponseField('configurationId') as unknown as string;
  }

}

export class CodeCommitTestRepositoryTriggers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitTestRepositoryTriggersInput) {
    super(scope, id);
  }

  public get successfulExecutions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testRepositoryTriggers',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.TestRepositoryTriggers.successfulExecutions'),
        outputPath: 'successfulExecutions',
        parameters: {
          repositoryName: this.input.repositoryName,
          triggers: this.input.triggers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestRepositoryTriggers.successfulExecutions', props);
    return resource.getResponseField('successfulExecutions') as unknown as string[];
  }

  public get failedExecutions(): shapes.CodeCommitRepositoryTriggerExecutionFailure[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testRepositoryTriggers',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.TestRepositoryTriggers.failedExecutions'),
        outputPath: 'failedExecutions',
        parameters: {
          repositoryName: this.input.repositoryName,
          triggers: this.input.triggers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestRepositoryTriggers.failedExecutions', props);
    return resource.getResponseField('failedExecutions') as unknown as shapes.CodeCommitRepositoryTriggerExecutionFailure[];
  }

}

export class CodeCommitUpdateApprovalRuleTemplateContent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitUpdateApprovalRuleTemplateContentInput) {
    super(scope, id);
  }

  public get approvalRuleTemplate(): CodeCommitUpdateApprovalRuleTemplateContentApprovalRuleTemplate {
    return new CodeCommitUpdateApprovalRuleTemplateContentApprovalRuleTemplate(this, 'ApprovalRuleTemplate', this.__resources, this.input);
  }

}

export class CodeCommitUpdateApprovalRuleTemplateContentApprovalRuleTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitUpdateApprovalRuleTemplateContentInput) {
    super(scope, id);
  }

  public get approvalRuleTemplateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApprovalRuleTemplateContent',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateApprovalRuleTemplateContent.approvalRuleTemplate.approvalRuleTemplateId'),
        outputPath: 'approvalRuleTemplate.approvalRuleTemplateId',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
          newRuleContent: this.input.newRuleContent,
          existingRuleContentSha256: this.input.existingRuleContentSha256,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApprovalRuleTemplateContent.approvalRuleTemplate.approvalRuleTemplateId', props);
    return resource.getResponseField('approvalRuleTemplate.approvalRuleTemplateId') as unknown as string;
  }

  public get approvalRuleTemplateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApprovalRuleTemplateContent',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateApprovalRuleTemplateContent.approvalRuleTemplate.approvalRuleTemplateName'),
        outputPath: 'approvalRuleTemplate.approvalRuleTemplateName',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
          newRuleContent: this.input.newRuleContent,
          existingRuleContentSha256: this.input.existingRuleContentSha256,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApprovalRuleTemplateContent.approvalRuleTemplate.approvalRuleTemplateName', props);
    return resource.getResponseField('approvalRuleTemplate.approvalRuleTemplateName') as unknown as string;
  }

  public get approvalRuleTemplateDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApprovalRuleTemplateContent',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateApprovalRuleTemplateContent.approvalRuleTemplate.approvalRuleTemplateDescription'),
        outputPath: 'approvalRuleTemplate.approvalRuleTemplateDescription',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
          newRuleContent: this.input.newRuleContent,
          existingRuleContentSha256: this.input.existingRuleContentSha256,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApprovalRuleTemplateContent.approvalRuleTemplate.approvalRuleTemplateDescription', props);
    return resource.getResponseField('approvalRuleTemplate.approvalRuleTemplateDescription') as unknown as string;
  }

  public get approvalRuleTemplateContent(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApprovalRuleTemplateContent',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateApprovalRuleTemplateContent.approvalRuleTemplate.approvalRuleTemplateContent'),
        outputPath: 'approvalRuleTemplate.approvalRuleTemplateContent',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
          newRuleContent: this.input.newRuleContent,
          existingRuleContentSha256: this.input.existingRuleContentSha256,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApprovalRuleTemplateContent.approvalRuleTemplate.approvalRuleTemplateContent', props);
    return resource.getResponseField('approvalRuleTemplate.approvalRuleTemplateContent') as unknown as string;
  }

  public get ruleContentSha256(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApprovalRuleTemplateContent',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateApprovalRuleTemplateContent.approvalRuleTemplate.ruleContentSha256'),
        outputPath: 'approvalRuleTemplate.ruleContentSha256',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
          newRuleContent: this.input.newRuleContent,
          existingRuleContentSha256: this.input.existingRuleContentSha256,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApprovalRuleTemplateContent.approvalRuleTemplate.ruleContentSha256', props);
    return resource.getResponseField('approvalRuleTemplate.ruleContentSha256') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApprovalRuleTemplateContent',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateApprovalRuleTemplateContent.approvalRuleTemplate.lastModifiedDate'),
        outputPath: 'approvalRuleTemplate.lastModifiedDate',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
          newRuleContent: this.input.newRuleContent,
          existingRuleContentSha256: this.input.existingRuleContentSha256,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApprovalRuleTemplateContent.approvalRuleTemplate.lastModifiedDate', props);
    return resource.getResponseField('approvalRuleTemplate.lastModifiedDate') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApprovalRuleTemplateContent',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateApprovalRuleTemplateContent.approvalRuleTemplate.creationDate'),
        outputPath: 'approvalRuleTemplate.creationDate',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
          newRuleContent: this.input.newRuleContent,
          existingRuleContentSha256: this.input.existingRuleContentSha256,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApprovalRuleTemplateContent.approvalRuleTemplate.creationDate', props);
    return resource.getResponseField('approvalRuleTemplate.creationDate') as unknown as string;
  }

  public get lastModifiedUser(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApprovalRuleTemplateContent',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateApprovalRuleTemplateContent.approvalRuleTemplate.lastModifiedUser'),
        outputPath: 'approvalRuleTemplate.lastModifiedUser',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
          newRuleContent: this.input.newRuleContent,
          existingRuleContentSha256: this.input.existingRuleContentSha256,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApprovalRuleTemplateContent.approvalRuleTemplate.lastModifiedUser', props);
    return resource.getResponseField('approvalRuleTemplate.lastModifiedUser') as unknown as string;
  }

}

export class CodeCommitUpdateApprovalRuleTemplateDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitUpdateApprovalRuleTemplateDescriptionInput) {
    super(scope, id);
  }

  public get approvalRuleTemplate(): CodeCommitUpdateApprovalRuleTemplateDescriptionApprovalRuleTemplate {
    return new CodeCommitUpdateApprovalRuleTemplateDescriptionApprovalRuleTemplate(this, 'ApprovalRuleTemplate', this.__resources, this.input);
  }

}

export class CodeCommitUpdateApprovalRuleTemplateDescriptionApprovalRuleTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitUpdateApprovalRuleTemplateDescriptionInput) {
    super(scope, id);
  }

  public get approvalRuleTemplateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApprovalRuleTemplateDescription',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateApprovalRuleTemplateDescription.approvalRuleTemplate.approvalRuleTemplateId'),
        outputPath: 'approvalRuleTemplate.approvalRuleTemplateId',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
          approvalRuleTemplateDescription: this.input.approvalRuleTemplateDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApprovalRuleTemplateDescription.approvalRuleTemplate.approvalRuleTemplateId', props);
    return resource.getResponseField('approvalRuleTemplate.approvalRuleTemplateId') as unknown as string;
  }

  public get approvalRuleTemplateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApprovalRuleTemplateDescription',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateApprovalRuleTemplateDescription.approvalRuleTemplate.approvalRuleTemplateName'),
        outputPath: 'approvalRuleTemplate.approvalRuleTemplateName',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
          approvalRuleTemplateDescription: this.input.approvalRuleTemplateDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApprovalRuleTemplateDescription.approvalRuleTemplate.approvalRuleTemplateName', props);
    return resource.getResponseField('approvalRuleTemplate.approvalRuleTemplateName') as unknown as string;
  }

  public get approvalRuleTemplateDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApprovalRuleTemplateDescription',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateApprovalRuleTemplateDescription.approvalRuleTemplate.approvalRuleTemplateDescription'),
        outputPath: 'approvalRuleTemplate.approvalRuleTemplateDescription',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
          approvalRuleTemplateDescription: this.input.approvalRuleTemplateDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApprovalRuleTemplateDescription.approvalRuleTemplate.approvalRuleTemplateDescription', props);
    return resource.getResponseField('approvalRuleTemplate.approvalRuleTemplateDescription') as unknown as string;
  }

  public get approvalRuleTemplateContent(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApprovalRuleTemplateDescription',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateApprovalRuleTemplateDescription.approvalRuleTemplate.approvalRuleTemplateContent'),
        outputPath: 'approvalRuleTemplate.approvalRuleTemplateContent',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
          approvalRuleTemplateDescription: this.input.approvalRuleTemplateDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApprovalRuleTemplateDescription.approvalRuleTemplate.approvalRuleTemplateContent', props);
    return resource.getResponseField('approvalRuleTemplate.approvalRuleTemplateContent') as unknown as string;
  }

  public get ruleContentSha256(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApprovalRuleTemplateDescription',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateApprovalRuleTemplateDescription.approvalRuleTemplate.ruleContentSha256'),
        outputPath: 'approvalRuleTemplate.ruleContentSha256',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
          approvalRuleTemplateDescription: this.input.approvalRuleTemplateDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApprovalRuleTemplateDescription.approvalRuleTemplate.ruleContentSha256', props);
    return resource.getResponseField('approvalRuleTemplate.ruleContentSha256') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApprovalRuleTemplateDescription',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateApprovalRuleTemplateDescription.approvalRuleTemplate.lastModifiedDate'),
        outputPath: 'approvalRuleTemplate.lastModifiedDate',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
          approvalRuleTemplateDescription: this.input.approvalRuleTemplateDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApprovalRuleTemplateDescription.approvalRuleTemplate.lastModifiedDate', props);
    return resource.getResponseField('approvalRuleTemplate.lastModifiedDate') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApprovalRuleTemplateDescription',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateApprovalRuleTemplateDescription.approvalRuleTemplate.creationDate'),
        outputPath: 'approvalRuleTemplate.creationDate',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
          approvalRuleTemplateDescription: this.input.approvalRuleTemplateDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApprovalRuleTemplateDescription.approvalRuleTemplate.creationDate', props);
    return resource.getResponseField('approvalRuleTemplate.creationDate') as unknown as string;
  }

  public get lastModifiedUser(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApprovalRuleTemplateDescription',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateApprovalRuleTemplateDescription.approvalRuleTemplate.lastModifiedUser'),
        outputPath: 'approvalRuleTemplate.lastModifiedUser',
        parameters: {
          approvalRuleTemplateName: this.input.approvalRuleTemplateName,
          approvalRuleTemplateDescription: this.input.approvalRuleTemplateDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApprovalRuleTemplateDescription.approvalRuleTemplate.lastModifiedUser', props);
    return resource.getResponseField('approvalRuleTemplate.lastModifiedUser') as unknown as string;
  }

}

export class CodeCommitUpdateApprovalRuleTemplateName extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitUpdateApprovalRuleTemplateNameInput) {
    super(scope, id);
  }

  public get approvalRuleTemplate(): CodeCommitUpdateApprovalRuleTemplateNameApprovalRuleTemplate {
    return new CodeCommitUpdateApprovalRuleTemplateNameApprovalRuleTemplate(this, 'ApprovalRuleTemplate', this.__resources, this.input);
  }

}

export class CodeCommitUpdateApprovalRuleTemplateNameApprovalRuleTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitUpdateApprovalRuleTemplateNameInput) {
    super(scope, id);
  }

  public get approvalRuleTemplateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApprovalRuleTemplateName',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateApprovalRuleTemplateName.approvalRuleTemplate.approvalRuleTemplateId'),
        outputPath: 'approvalRuleTemplate.approvalRuleTemplateId',
        parameters: {
          oldApprovalRuleTemplateName: this.input.oldApprovalRuleTemplateName,
          newApprovalRuleTemplateName: this.input.newApprovalRuleTemplateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApprovalRuleTemplateName.approvalRuleTemplate.approvalRuleTemplateId', props);
    return resource.getResponseField('approvalRuleTemplate.approvalRuleTemplateId') as unknown as string;
  }

  public get approvalRuleTemplateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApprovalRuleTemplateName',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateApprovalRuleTemplateName.approvalRuleTemplate.approvalRuleTemplateName'),
        outputPath: 'approvalRuleTemplate.approvalRuleTemplateName',
        parameters: {
          oldApprovalRuleTemplateName: this.input.oldApprovalRuleTemplateName,
          newApprovalRuleTemplateName: this.input.newApprovalRuleTemplateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApprovalRuleTemplateName.approvalRuleTemplate.approvalRuleTemplateName', props);
    return resource.getResponseField('approvalRuleTemplate.approvalRuleTemplateName') as unknown as string;
  }

  public get approvalRuleTemplateDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApprovalRuleTemplateName',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateApprovalRuleTemplateName.approvalRuleTemplate.approvalRuleTemplateDescription'),
        outputPath: 'approvalRuleTemplate.approvalRuleTemplateDescription',
        parameters: {
          oldApprovalRuleTemplateName: this.input.oldApprovalRuleTemplateName,
          newApprovalRuleTemplateName: this.input.newApprovalRuleTemplateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApprovalRuleTemplateName.approvalRuleTemplate.approvalRuleTemplateDescription', props);
    return resource.getResponseField('approvalRuleTemplate.approvalRuleTemplateDescription') as unknown as string;
  }

  public get approvalRuleTemplateContent(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApprovalRuleTemplateName',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateApprovalRuleTemplateName.approvalRuleTemplate.approvalRuleTemplateContent'),
        outputPath: 'approvalRuleTemplate.approvalRuleTemplateContent',
        parameters: {
          oldApprovalRuleTemplateName: this.input.oldApprovalRuleTemplateName,
          newApprovalRuleTemplateName: this.input.newApprovalRuleTemplateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApprovalRuleTemplateName.approvalRuleTemplate.approvalRuleTemplateContent', props);
    return resource.getResponseField('approvalRuleTemplate.approvalRuleTemplateContent') as unknown as string;
  }

  public get ruleContentSha256(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApprovalRuleTemplateName',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateApprovalRuleTemplateName.approvalRuleTemplate.ruleContentSha256'),
        outputPath: 'approvalRuleTemplate.ruleContentSha256',
        parameters: {
          oldApprovalRuleTemplateName: this.input.oldApprovalRuleTemplateName,
          newApprovalRuleTemplateName: this.input.newApprovalRuleTemplateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApprovalRuleTemplateName.approvalRuleTemplate.ruleContentSha256', props);
    return resource.getResponseField('approvalRuleTemplate.ruleContentSha256') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApprovalRuleTemplateName',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateApprovalRuleTemplateName.approvalRuleTemplate.lastModifiedDate'),
        outputPath: 'approvalRuleTemplate.lastModifiedDate',
        parameters: {
          oldApprovalRuleTemplateName: this.input.oldApprovalRuleTemplateName,
          newApprovalRuleTemplateName: this.input.newApprovalRuleTemplateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApprovalRuleTemplateName.approvalRuleTemplate.lastModifiedDate', props);
    return resource.getResponseField('approvalRuleTemplate.lastModifiedDate') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApprovalRuleTemplateName',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateApprovalRuleTemplateName.approvalRuleTemplate.creationDate'),
        outputPath: 'approvalRuleTemplate.creationDate',
        parameters: {
          oldApprovalRuleTemplateName: this.input.oldApprovalRuleTemplateName,
          newApprovalRuleTemplateName: this.input.newApprovalRuleTemplateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApprovalRuleTemplateName.approvalRuleTemplate.creationDate', props);
    return resource.getResponseField('approvalRuleTemplate.creationDate') as unknown as string;
  }

  public get lastModifiedUser(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApprovalRuleTemplateName',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateApprovalRuleTemplateName.approvalRuleTemplate.lastModifiedUser'),
        outputPath: 'approvalRuleTemplate.lastModifiedUser',
        parameters: {
          oldApprovalRuleTemplateName: this.input.oldApprovalRuleTemplateName,
          newApprovalRuleTemplateName: this.input.newApprovalRuleTemplateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApprovalRuleTemplateName.approvalRuleTemplate.lastModifiedUser', props);
    return resource.getResponseField('approvalRuleTemplate.lastModifiedUser') as unknown as string;
  }

}

export class CodeCommitUpdateComment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitUpdateCommentInput) {
    super(scope, id);
  }

  public get comment(): CodeCommitUpdateCommentComment {
    return new CodeCommitUpdateCommentComment(this, 'Comment', this.__resources, this.input);
  }

}

export class CodeCommitUpdateCommentComment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitUpdateCommentInput) {
    super(scope, id);
  }

  public get commentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateComment',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateComment.comment.commentId'),
        outputPath: 'comment.commentId',
        parameters: {
          commentId: this.input.commentId,
          content: this.input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateComment.comment.commentId', props);
    return resource.getResponseField('comment.commentId') as unknown as string;
  }

  public get content(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateComment',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateComment.comment.content'),
        outputPath: 'comment.content',
        parameters: {
          commentId: this.input.commentId,
          content: this.input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateComment.comment.content', props);
    return resource.getResponseField('comment.content') as unknown as string;
  }

  public get inReplyTo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateComment',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateComment.comment.inReplyTo'),
        outputPath: 'comment.inReplyTo',
        parameters: {
          commentId: this.input.commentId,
          content: this.input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateComment.comment.inReplyTo', props);
    return resource.getResponseField('comment.inReplyTo') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateComment',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateComment.comment.creationDate'),
        outputPath: 'comment.creationDate',
        parameters: {
          commentId: this.input.commentId,
          content: this.input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateComment.comment.creationDate', props);
    return resource.getResponseField('comment.creationDate') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateComment',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateComment.comment.lastModifiedDate'),
        outputPath: 'comment.lastModifiedDate',
        parameters: {
          commentId: this.input.commentId,
          content: this.input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateComment.comment.lastModifiedDate', props);
    return resource.getResponseField('comment.lastModifiedDate') as unknown as string;
  }

  public get authorArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateComment',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateComment.comment.authorArn'),
        outputPath: 'comment.authorArn',
        parameters: {
          commentId: this.input.commentId,
          content: this.input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateComment.comment.authorArn', props);
    return resource.getResponseField('comment.authorArn') as unknown as string;
  }

  public get deleted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateComment',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateComment.comment.deleted'),
        outputPath: 'comment.deleted',
        parameters: {
          commentId: this.input.commentId,
          content: this.input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateComment.comment.deleted', props);
    return resource.getResponseField('comment.deleted') as unknown as boolean;
  }

  public get clientRequestToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateComment',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateComment.comment.clientRequestToken'),
        outputPath: 'comment.clientRequestToken',
        parameters: {
          commentId: this.input.commentId,
          content: this.input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateComment.comment.clientRequestToken', props);
    return resource.getResponseField('comment.clientRequestToken') as unknown as string;
  }

  public get callerReactions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateComment',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateComment.comment.callerReactions'),
        outputPath: 'comment.callerReactions',
        parameters: {
          commentId: this.input.commentId,
          content: this.input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateComment.comment.callerReactions', props);
    return resource.getResponseField('comment.callerReactions') as unknown as string[];
  }

  public get reactionCounts(): Record<string, number> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateComment',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdateComment.comment.reactionCounts'),
        outputPath: 'comment.reactionCounts',
        parameters: {
          commentId: this.input.commentId,
          content: this.input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateComment.comment.reactionCounts', props);
    return resource.getResponseField('comment.reactionCounts') as unknown as Record<string, number>;
  }

}

export class CodeCommitUpdatePullRequestApprovalRuleContent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitUpdatePullRequestApprovalRuleContentInput) {
    super(scope, id);
  }

  public get approvalRule(): CodeCommitUpdatePullRequestApprovalRuleContentApprovalRule {
    return new CodeCommitUpdatePullRequestApprovalRuleContentApprovalRule(this, 'ApprovalRule', this.__resources, this.input);
  }

}

export class CodeCommitUpdatePullRequestApprovalRuleContentApprovalRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitUpdatePullRequestApprovalRuleContentInput) {
    super(scope, id);
  }

  public get approvalRuleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestApprovalRuleContent',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestApprovalRuleContent.approvalRule.approvalRuleId'),
        outputPath: 'approvalRule.approvalRuleId',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          approvalRuleName: this.input.approvalRuleName,
          existingRuleContentSha256: this.input.existingRuleContentSha256,
          newRuleContent: this.input.newRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestApprovalRuleContent.approvalRule.approvalRuleId', props);
    return resource.getResponseField('approvalRule.approvalRuleId') as unknown as string;
  }

  public get approvalRuleName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestApprovalRuleContent',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestApprovalRuleContent.approvalRule.approvalRuleName'),
        outputPath: 'approvalRule.approvalRuleName',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          approvalRuleName: this.input.approvalRuleName,
          existingRuleContentSha256: this.input.existingRuleContentSha256,
          newRuleContent: this.input.newRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestApprovalRuleContent.approvalRule.approvalRuleName', props);
    return resource.getResponseField('approvalRule.approvalRuleName') as unknown as string;
  }

  public get approvalRuleContent(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestApprovalRuleContent',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestApprovalRuleContent.approvalRule.approvalRuleContent'),
        outputPath: 'approvalRule.approvalRuleContent',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          approvalRuleName: this.input.approvalRuleName,
          existingRuleContentSha256: this.input.existingRuleContentSha256,
          newRuleContent: this.input.newRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestApprovalRuleContent.approvalRule.approvalRuleContent', props);
    return resource.getResponseField('approvalRule.approvalRuleContent') as unknown as string;
  }

  public get ruleContentSha256(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestApprovalRuleContent',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestApprovalRuleContent.approvalRule.ruleContentSha256'),
        outputPath: 'approvalRule.ruleContentSha256',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          approvalRuleName: this.input.approvalRuleName,
          existingRuleContentSha256: this.input.existingRuleContentSha256,
          newRuleContent: this.input.newRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestApprovalRuleContent.approvalRule.ruleContentSha256', props);
    return resource.getResponseField('approvalRule.ruleContentSha256') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestApprovalRuleContent',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestApprovalRuleContent.approvalRule.lastModifiedDate'),
        outputPath: 'approvalRule.lastModifiedDate',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          approvalRuleName: this.input.approvalRuleName,
          existingRuleContentSha256: this.input.existingRuleContentSha256,
          newRuleContent: this.input.newRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestApprovalRuleContent.approvalRule.lastModifiedDate', props);
    return resource.getResponseField('approvalRule.lastModifiedDate') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestApprovalRuleContent',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestApprovalRuleContent.approvalRule.creationDate'),
        outputPath: 'approvalRule.creationDate',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          approvalRuleName: this.input.approvalRuleName,
          existingRuleContentSha256: this.input.existingRuleContentSha256,
          newRuleContent: this.input.newRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestApprovalRuleContent.approvalRule.creationDate', props);
    return resource.getResponseField('approvalRule.creationDate') as unknown as string;
  }

  public get lastModifiedUser(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestApprovalRuleContent',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestApprovalRuleContent.approvalRule.lastModifiedUser'),
        outputPath: 'approvalRule.lastModifiedUser',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          approvalRuleName: this.input.approvalRuleName,
          existingRuleContentSha256: this.input.existingRuleContentSha256,
          newRuleContent: this.input.newRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestApprovalRuleContent.approvalRule.lastModifiedUser', props);
    return resource.getResponseField('approvalRule.lastModifiedUser') as unknown as string;
  }

  public get originApprovalRuleTemplate(): CodeCommitUpdatePullRequestApprovalRuleContentApprovalRuleOriginApprovalRuleTemplate {
    return new CodeCommitUpdatePullRequestApprovalRuleContentApprovalRuleOriginApprovalRuleTemplate(this, 'OriginApprovalRuleTemplate', this.__resources, this.input);
  }

}

export class CodeCommitUpdatePullRequestApprovalRuleContentApprovalRuleOriginApprovalRuleTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitUpdatePullRequestApprovalRuleContentInput) {
    super(scope, id);
  }

  public get approvalRuleTemplateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestApprovalRuleContent',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestApprovalRuleContent.approvalRule.originApprovalRuleTemplate.approvalRuleTemplateId'),
        outputPath: 'approvalRule.originApprovalRuleTemplate.approvalRuleTemplateId',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          approvalRuleName: this.input.approvalRuleName,
          existingRuleContentSha256: this.input.existingRuleContentSha256,
          newRuleContent: this.input.newRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestApprovalRuleContent.approvalRule.originApprovalRuleTemplate.approvalRuleTemplateId', props);
    return resource.getResponseField('approvalRule.originApprovalRuleTemplate.approvalRuleTemplateId') as unknown as string;
  }

  public get approvalRuleTemplateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestApprovalRuleContent',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestApprovalRuleContent.approvalRule.originApprovalRuleTemplate.approvalRuleTemplateName'),
        outputPath: 'approvalRule.originApprovalRuleTemplate.approvalRuleTemplateName',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          approvalRuleName: this.input.approvalRuleName,
          existingRuleContentSha256: this.input.existingRuleContentSha256,
          newRuleContent: this.input.newRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestApprovalRuleContent.approvalRule.originApprovalRuleTemplate.approvalRuleTemplateName', props);
    return resource.getResponseField('approvalRule.originApprovalRuleTemplate.approvalRuleTemplateName') as unknown as string;
  }

}

export class CodeCommitUpdatePullRequestDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitUpdatePullRequestDescriptionInput) {
    super(scope, id);
  }

  public get pullRequest(): CodeCommitUpdatePullRequestDescriptionPullRequest {
    return new CodeCommitUpdatePullRequestDescriptionPullRequest(this, 'PullRequest', this.__resources, this.input);
  }

}

export class CodeCommitUpdatePullRequestDescriptionPullRequest extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitUpdatePullRequestDescriptionInput) {
    super(scope, id);
  }

  public get pullRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestDescription',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestDescription.pullRequest.pullRequestId'),
        outputPath: 'pullRequest.pullRequestId',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestDescription.pullRequest.pullRequestId', props);
    return resource.getResponseField('pullRequest.pullRequestId') as unknown as string;
  }

  public get title(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestDescription',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestDescription.pullRequest.title'),
        outputPath: 'pullRequest.title',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestDescription.pullRequest.title', props);
    return resource.getResponseField('pullRequest.title') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestDescription',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestDescription.pullRequest.description'),
        outputPath: 'pullRequest.description',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestDescription.pullRequest.description', props);
    return resource.getResponseField('pullRequest.description') as unknown as string;
  }

  public get lastActivityDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestDescription',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestDescription.pullRequest.lastActivityDate'),
        outputPath: 'pullRequest.lastActivityDate',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestDescription.pullRequest.lastActivityDate', props);
    return resource.getResponseField('pullRequest.lastActivityDate') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestDescription',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestDescription.pullRequest.creationDate'),
        outputPath: 'pullRequest.creationDate',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestDescription.pullRequest.creationDate', props);
    return resource.getResponseField('pullRequest.creationDate') as unknown as string;
  }

  public get pullRequestStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestDescription',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestDescription.pullRequest.pullRequestStatus'),
        outputPath: 'pullRequest.pullRequestStatus',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestDescription.pullRequest.pullRequestStatus', props);
    return resource.getResponseField('pullRequest.pullRequestStatus') as unknown as string;
  }

  public get authorArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestDescription',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestDescription.pullRequest.authorArn'),
        outputPath: 'pullRequest.authorArn',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestDescription.pullRequest.authorArn', props);
    return resource.getResponseField('pullRequest.authorArn') as unknown as string;
  }

  public get pullRequestTargets(): shapes.CodeCommitPullRequestTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestDescription',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestDescription.pullRequest.pullRequestTargets'),
        outputPath: 'pullRequest.pullRequestTargets',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestDescription.pullRequest.pullRequestTargets', props);
    return resource.getResponseField('pullRequest.pullRequestTargets') as unknown as shapes.CodeCommitPullRequestTarget[];
  }

  public get clientRequestToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestDescription',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestDescription.pullRequest.clientRequestToken'),
        outputPath: 'pullRequest.clientRequestToken',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestDescription.pullRequest.clientRequestToken', props);
    return resource.getResponseField('pullRequest.clientRequestToken') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestDescription',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestDescription.pullRequest.revisionId'),
        outputPath: 'pullRequest.revisionId',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestDescription.pullRequest.revisionId', props);
    return resource.getResponseField('pullRequest.revisionId') as unknown as string;
  }

  public get approvalRules(): shapes.CodeCommitApprovalRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestDescription',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestDescription.pullRequest.approvalRules'),
        outputPath: 'pullRequest.approvalRules',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestDescription.pullRequest.approvalRules', props);
    return resource.getResponseField('pullRequest.approvalRules') as unknown as shapes.CodeCommitApprovalRule[];
  }

}

export class CodeCommitUpdatePullRequestStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitUpdatePullRequestStatusInput) {
    super(scope, id);
  }

  public get pullRequest(): CodeCommitUpdatePullRequestStatusPullRequest {
    return new CodeCommitUpdatePullRequestStatusPullRequest(this, 'PullRequest', this.__resources, this.input);
  }

}

export class CodeCommitUpdatePullRequestStatusPullRequest extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitUpdatePullRequestStatusInput) {
    super(scope, id);
  }

  public get pullRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestStatus',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestStatus.pullRequest.pullRequestId'),
        outputPath: 'pullRequest.pullRequestId',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          pullRequestStatus: this.input.pullRequestStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestStatus.pullRequest.pullRequestId', props);
    return resource.getResponseField('pullRequest.pullRequestId') as unknown as string;
  }

  public get title(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestStatus',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestStatus.pullRequest.title'),
        outputPath: 'pullRequest.title',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          pullRequestStatus: this.input.pullRequestStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestStatus.pullRequest.title', props);
    return resource.getResponseField('pullRequest.title') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestStatus',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestStatus.pullRequest.description'),
        outputPath: 'pullRequest.description',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          pullRequestStatus: this.input.pullRequestStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestStatus.pullRequest.description', props);
    return resource.getResponseField('pullRequest.description') as unknown as string;
  }

  public get lastActivityDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestStatus',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestStatus.pullRequest.lastActivityDate'),
        outputPath: 'pullRequest.lastActivityDate',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          pullRequestStatus: this.input.pullRequestStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestStatus.pullRequest.lastActivityDate', props);
    return resource.getResponseField('pullRequest.lastActivityDate') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestStatus',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestStatus.pullRequest.creationDate'),
        outputPath: 'pullRequest.creationDate',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          pullRequestStatus: this.input.pullRequestStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestStatus.pullRequest.creationDate', props);
    return resource.getResponseField('pullRequest.creationDate') as unknown as string;
  }

  public get pullRequestStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestStatus',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestStatus.pullRequest.pullRequestStatus'),
        outputPath: 'pullRequest.pullRequestStatus',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          pullRequestStatus: this.input.pullRequestStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestStatus.pullRequest.pullRequestStatus', props);
    return resource.getResponseField('pullRequest.pullRequestStatus') as unknown as string;
  }

  public get authorArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestStatus',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestStatus.pullRequest.authorArn'),
        outputPath: 'pullRequest.authorArn',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          pullRequestStatus: this.input.pullRequestStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestStatus.pullRequest.authorArn', props);
    return resource.getResponseField('pullRequest.authorArn') as unknown as string;
  }

  public get pullRequestTargets(): shapes.CodeCommitPullRequestTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestStatus',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestStatus.pullRequest.pullRequestTargets'),
        outputPath: 'pullRequest.pullRequestTargets',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          pullRequestStatus: this.input.pullRequestStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestStatus.pullRequest.pullRequestTargets', props);
    return resource.getResponseField('pullRequest.pullRequestTargets') as unknown as shapes.CodeCommitPullRequestTarget[];
  }

  public get clientRequestToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestStatus',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestStatus.pullRequest.clientRequestToken'),
        outputPath: 'pullRequest.clientRequestToken',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          pullRequestStatus: this.input.pullRequestStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestStatus.pullRequest.clientRequestToken', props);
    return resource.getResponseField('pullRequest.clientRequestToken') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestStatus',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestStatus.pullRequest.revisionId'),
        outputPath: 'pullRequest.revisionId',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          pullRequestStatus: this.input.pullRequestStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestStatus.pullRequest.revisionId', props);
    return resource.getResponseField('pullRequest.revisionId') as unknown as string;
  }

  public get approvalRules(): shapes.CodeCommitApprovalRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestStatus',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestStatus.pullRequest.approvalRules'),
        outputPath: 'pullRequest.approvalRules',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          pullRequestStatus: this.input.pullRequestStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestStatus.pullRequest.approvalRules', props);
    return resource.getResponseField('pullRequest.approvalRules') as unknown as shapes.CodeCommitApprovalRule[];
  }

}

export class CodeCommitUpdatePullRequestTitle extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitUpdatePullRequestTitleInput) {
    super(scope, id);
  }

  public get pullRequest(): CodeCommitUpdatePullRequestTitlePullRequest {
    return new CodeCommitUpdatePullRequestTitlePullRequest(this, 'PullRequest', this.__resources, this.input);
  }

}

export class CodeCommitUpdatePullRequestTitlePullRequest extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeCommitUpdatePullRequestTitleInput) {
    super(scope, id);
  }

  public get pullRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestTitle',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestTitle.pullRequest.pullRequestId'),
        outputPath: 'pullRequest.pullRequestId',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          title: this.input.title,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestTitle.pullRequest.pullRequestId', props);
    return resource.getResponseField('pullRequest.pullRequestId') as unknown as string;
  }

  public get title(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestTitle',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestTitle.pullRequest.title'),
        outputPath: 'pullRequest.title',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          title: this.input.title,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestTitle.pullRequest.title', props);
    return resource.getResponseField('pullRequest.title') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestTitle',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestTitle.pullRequest.description'),
        outputPath: 'pullRequest.description',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          title: this.input.title,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestTitle.pullRequest.description', props);
    return resource.getResponseField('pullRequest.description') as unknown as string;
  }

  public get lastActivityDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestTitle',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestTitle.pullRequest.lastActivityDate'),
        outputPath: 'pullRequest.lastActivityDate',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          title: this.input.title,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestTitle.pullRequest.lastActivityDate', props);
    return resource.getResponseField('pullRequest.lastActivityDate') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestTitle',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestTitle.pullRequest.creationDate'),
        outputPath: 'pullRequest.creationDate',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          title: this.input.title,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestTitle.pullRequest.creationDate', props);
    return resource.getResponseField('pullRequest.creationDate') as unknown as string;
  }

  public get pullRequestStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestTitle',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestTitle.pullRequest.pullRequestStatus'),
        outputPath: 'pullRequest.pullRequestStatus',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          title: this.input.title,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestTitle.pullRequest.pullRequestStatus', props);
    return resource.getResponseField('pullRequest.pullRequestStatus') as unknown as string;
  }

  public get authorArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestTitle',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestTitle.pullRequest.authorArn'),
        outputPath: 'pullRequest.authorArn',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          title: this.input.title,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestTitle.pullRequest.authorArn', props);
    return resource.getResponseField('pullRequest.authorArn') as unknown as string;
  }

  public get pullRequestTargets(): shapes.CodeCommitPullRequestTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestTitle',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestTitle.pullRequest.pullRequestTargets'),
        outputPath: 'pullRequest.pullRequestTargets',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          title: this.input.title,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestTitle.pullRequest.pullRequestTargets', props);
    return resource.getResponseField('pullRequest.pullRequestTargets') as unknown as shapes.CodeCommitPullRequestTarget[];
  }

  public get clientRequestToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestTitle',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestTitle.pullRequest.clientRequestToken'),
        outputPath: 'pullRequest.clientRequestToken',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          title: this.input.title,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestTitle.pullRequest.clientRequestToken', props);
    return resource.getResponseField('pullRequest.clientRequestToken') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestTitle',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestTitle.pullRequest.revisionId'),
        outputPath: 'pullRequest.revisionId',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          title: this.input.title,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestTitle.pullRequest.revisionId', props);
    return resource.getResponseField('pullRequest.revisionId') as unknown as string;
  }

  public get approvalRules(): shapes.CodeCommitApprovalRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePullRequestTitle',
        service: 'CodeCommit',
        physicalResourceId: cr.PhysicalResourceId.of('CodeCommit.UpdatePullRequestTitle.pullRequest.approvalRules'),
        outputPath: 'pullRequest.approvalRules',
        parameters: {
          pullRequestId: this.input.pullRequestId,
          title: this.input.title,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePullRequestTitle.pullRequest.approvalRules', props);
    return resource.getResponseField('pullRequest.approvalRules') as unknown as shapes.CodeCommitApprovalRule[];
  }

}

