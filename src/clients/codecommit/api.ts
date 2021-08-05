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

  public batchAssociateApprovalRuleTemplateWithRepositories(input: shapes.CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesInput): CodeCommitResponsesBatchAssociateApprovalRuleTemplateWithRepositories {
    return new CodeCommitResponsesBatchAssociateApprovalRuleTemplateWithRepositories(this, this.__resources, input);
  }

  public batchDescribeMergeConflicts(input: shapes.CodeCommitBatchDescribeMergeConflictsInput): CodeCommitResponsesBatchDescribeMergeConflicts {
    return new CodeCommitResponsesBatchDescribeMergeConflicts(this, this.__resources, input);
  }

  public batchDisassociateApprovalRuleTemplateFromRepositories(input: shapes.CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesInput): CodeCommitResponsesBatchDisassociateApprovalRuleTemplateFromRepositories {
    return new CodeCommitResponsesBatchDisassociateApprovalRuleTemplateFromRepositories(this, this.__resources, input);
  }

  public batchGetCommits(input: shapes.CodeCommitBatchGetCommitsInput): CodeCommitResponsesBatchGetCommits {
    return new CodeCommitResponsesBatchGetCommits(this, this.__resources, input);
  }

  public batchGetRepositories(input: shapes.CodeCommitBatchGetRepositoriesInput): CodeCommitResponsesBatchGetRepositories {
    return new CodeCommitResponsesBatchGetRepositories(this, this.__resources, input);
  }

  public createApprovalRuleTemplate(input: shapes.CodeCommitCreateApprovalRuleTemplateInput): CodeCommitResponsesCreateApprovalRuleTemplate {
    return new CodeCommitResponsesCreateApprovalRuleTemplate(this, this.__resources, input);
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

  public createCommit(input: shapes.CodeCommitCreateCommitInput): CodeCommitResponsesCreateCommit {
    return new CodeCommitResponsesCreateCommit(this, this.__resources, input);
  }

  public createPullRequest(input: shapes.CodeCommitCreatePullRequestInput): CodeCommitResponsesCreatePullRequest {
    return new CodeCommitResponsesCreatePullRequest(this, this.__resources, input);
  }

  public createPullRequestApprovalRule(input: shapes.CodeCommitCreatePullRequestApprovalRuleInput): CodeCommitResponsesCreatePullRequestApprovalRule {
    return new CodeCommitResponsesCreatePullRequestApprovalRule(this, this.__resources, input);
  }

  public createRepository(input: shapes.CodeCommitCreateRepositoryInput): CodeCommitResponsesCreateRepository {
    return new CodeCommitResponsesCreateRepository(this, this.__resources, input);
  }

  public createUnreferencedMergeCommit(input: shapes.CodeCommitCreateUnreferencedMergeCommitInput): CodeCommitResponsesCreateUnreferencedMergeCommit {
    return new CodeCommitResponsesCreateUnreferencedMergeCommit(this, this.__resources, input);
  }

  public deleteApprovalRuleTemplate(input: shapes.CodeCommitDeleteApprovalRuleTemplateInput): CodeCommitResponsesDeleteApprovalRuleTemplate {
    return new CodeCommitResponsesDeleteApprovalRuleTemplate(this, this.__resources, input);
  }

  public deleteBranch(input: shapes.CodeCommitDeleteBranchInput): CodeCommitResponsesDeleteBranch {
    return new CodeCommitResponsesDeleteBranch(this, this.__resources, input);
  }

  public deleteCommentContent(input: shapes.CodeCommitDeleteCommentContentInput): CodeCommitResponsesDeleteCommentContent {
    return new CodeCommitResponsesDeleteCommentContent(this, this.__resources, input);
  }

  public deleteFile(input: shapes.CodeCommitDeleteFileInput): CodeCommitResponsesDeleteFile {
    return new CodeCommitResponsesDeleteFile(this, this.__resources, input);
  }

  public deletePullRequestApprovalRule(input: shapes.CodeCommitDeletePullRequestApprovalRuleInput): CodeCommitResponsesDeletePullRequestApprovalRule {
    return new CodeCommitResponsesDeletePullRequestApprovalRule(this, this.__resources, input);
  }

  public deleteRepository(input: shapes.CodeCommitDeleteRepositoryInput): CodeCommitResponsesDeleteRepository {
    return new CodeCommitResponsesDeleteRepository(this, this.__resources, input);
  }

  public describeMergeConflicts(input: shapes.CodeCommitDescribeMergeConflictsInput): CodeCommitResponsesDescribeMergeConflicts {
    return new CodeCommitResponsesDescribeMergeConflicts(this, this.__resources, input);
  }

  public describePullRequestEvents(input: shapes.CodeCommitDescribePullRequestEventsInput): CodeCommitResponsesDescribePullRequestEvents {
    return new CodeCommitResponsesDescribePullRequestEvents(this, this.__resources, input);
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

  public evaluatePullRequestApprovalRules(input: shapes.CodeCommitEvaluatePullRequestApprovalRulesInput): CodeCommitResponsesEvaluatePullRequestApprovalRules {
    return new CodeCommitResponsesEvaluatePullRequestApprovalRules(this, this.__resources, input);
  }

  public fetchApprovalRuleTemplate(input: shapes.CodeCommitGetApprovalRuleTemplateInput): CodeCommitResponsesFetchApprovalRuleTemplate {
    return new CodeCommitResponsesFetchApprovalRuleTemplate(this, this.__resources, input);
  }

  public fetchBlob(input: shapes.CodeCommitGetBlobInput): CodeCommitResponsesFetchBlob {
    return new CodeCommitResponsesFetchBlob(this, this.__resources, input);
  }

  public fetchBranch(input: shapes.CodeCommitGetBranchInput): CodeCommitResponsesFetchBranch {
    return new CodeCommitResponsesFetchBranch(this, this.__resources, input);
  }

  public fetchComment(input: shapes.CodeCommitGetCommentInput): CodeCommitResponsesFetchComment {
    return new CodeCommitResponsesFetchComment(this, this.__resources, input);
  }

  public fetchCommentReactions(input: shapes.CodeCommitGetCommentReactionsInput): CodeCommitResponsesFetchCommentReactions {
    return new CodeCommitResponsesFetchCommentReactions(this, this.__resources, input);
  }

  public fetchCommentsForComparedCommit(input: shapes.CodeCommitGetCommentsForComparedCommitInput): CodeCommitResponsesFetchCommentsForComparedCommit {
    return new CodeCommitResponsesFetchCommentsForComparedCommit(this, this.__resources, input);
  }

  public fetchCommentsForPullRequest(input: shapes.CodeCommitGetCommentsForPullRequestInput): CodeCommitResponsesFetchCommentsForPullRequest {
    return new CodeCommitResponsesFetchCommentsForPullRequest(this, this.__resources, input);
  }

  public fetchCommit(input: shapes.CodeCommitGetCommitInput): CodeCommitResponsesFetchCommit {
    return new CodeCommitResponsesFetchCommit(this, this.__resources, input);
  }

  public fetchDifferences(input: shapes.CodeCommitGetDifferencesInput): CodeCommitResponsesFetchDifferences {
    return new CodeCommitResponsesFetchDifferences(this, this.__resources, input);
  }

  public fetchFile(input: shapes.CodeCommitGetFileInput): CodeCommitResponsesFetchFile {
    return new CodeCommitResponsesFetchFile(this, this.__resources, input);
  }

  public fetchFolder(input: shapes.CodeCommitGetFolderInput): CodeCommitResponsesFetchFolder {
    return new CodeCommitResponsesFetchFolder(this, this.__resources, input);
  }

  public fetchMergeCommit(input: shapes.CodeCommitGetMergeCommitInput): CodeCommitResponsesFetchMergeCommit {
    return new CodeCommitResponsesFetchMergeCommit(this, this.__resources, input);
  }

  public fetchMergeConflicts(input: shapes.CodeCommitGetMergeConflictsInput): CodeCommitResponsesFetchMergeConflicts {
    return new CodeCommitResponsesFetchMergeConflicts(this, this.__resources, input);
  }

  public fetchMergeOptions(input: shapes.CodeCommitGetMergeOptionsInput): CodeCommitResponsesFetchMergeOptions {
    return new CodeCommitResponsesFetchMergeOptions(this, this.__resources, input);
  }

  public fetchPullRequest(input: shapes.CodeCommitGetPullRequestInput): CodeCommitResponsesFetchPullRequest {
    return new CodeCommitResponsesFetchPullRequest(this, this.__resources, input);
  }

  public fetchPullRequestApprovalStates(input: shapes.CodeCommitGetPullRequestApprovalStatesInput): CodeCommitResponsesFetchPullRequestApprovalStates {
    return new CodeCommitResponsesFetchPullRequestApprovalStates(this, this.__resources, input);
  }

  public fetchPullRequestOverrideState(input: shapes.CodeCommitGetPullRequestOverrideStateInput): CodeCommitResponsesFetchPullRequestOverrideState {
    return new CodeCommitResponsesFetchPullRequestOverrideState(this, this.__resources, input);
  }

  public fetchRepository(input: shapes.CodeCommitGetRepositoryInput): CodeCommitResponsesFetchRepository {
    return new CodeCommitResponsesFetchRepository(this, this.__resources, input);
  }

  public fetchRepositoryTriggers(input: shapes.CodeCommitGetRepositoryTriggersInput): CodeCommitResponsesFetchRepositoryTriggers {
    return new CodeCommitResponsesFetchRepositoryTriggers(this, this.__resources, input);
  }

  public listApprovalRuleTemplates(input: shapes.CodeCommitListApprovalRuleTemplatesInput): CodeCommitResponsesListApprovalRuleTemplates {
    return new CodeCommitResponsesListApprovalRuleTemplates(this, this.__resources, input);
  }

  public listAssociatedApprovalRuleTemplatesForRepository(input: shapes.CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryInput): CodeCommitResponsesListAssociatedApprovalRuleTemplatesForRepository {
    return new CodeCommitResponsesListAssociatedApprovalRuleTemplatesForRepository(this, this.__resources, input);
  }

  public listBranches(input: shapes.CodeCommitListBranchesInput): CodeCommitResponsesListBranches {
    return new CodeCommitResponsesListBranches(this, this.__resources, input);
  }

  public listPullRequests(input: shapes.CodeCommitListPullRequestsInput): CodeCommitResponsesListPullRequests {
    return new CodeCommitResponsesListPullRequests(this, this.__resources, input);
  }

  public listRepositories(input: shapes.CodeCommitListRepositoriesInput): CodeCommitResponsesListRepositories {
    return new CodeCommitResponsesListRepositories(this, this.__resources, input);
  }

  public listRepositoriesForApprovalRuleTemplate(input: shapes.CodeCommitListRepositoriesForApprovalRuleTemplateInput): CodeCommitResponsesListRepositoriesForApprovalRuleTemplate {
    return new CodeCommitResponsesListRepositoriesForApprovalRuleTemplate(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.CodeCommitListTagsForResourceInput): CodeCommitResponsesListTagsForResource {
    return new CodeCommitResponsesListTagsForResource(this, this.__resources, input);
  }

  public mergeBranchesByFastForward(input: shapes.CodeCommitMergeBranchesByFastForwardInput): CodeCommitResponsesMergeBranchesByFastForward {
    return new CodeCommitResponsesMergeBranchesByFastForward(this, this.__resources, input);
  }

  public mergeBranchesBySquash(input: shapes.CodeCommitMergeBranchesBySquashInput): CodeCommitResponsesMergeBranchesBySquash {
    return new CodeCommitResponsesMergeBranchesBySquash(this, this.__resources, input);
  }

  public mergeBranchesByThreeWay(input: shapes.CodeCommitMergeBranchesByThreeWayInput): CodeCommitResponsesMergeBranchesByThreeWay {
    return new CodeCommitResponsesMergeBranchesByThreeWay(this, this.__resources, input);
  }

  public mergePullRequestByFastForward(input: shapes.CodeCommitMergePullRequestByFastForwardInput): CodeCommitResponsesMergePullRequestByFastForward {
    return new CodeCommitResponsesMergePullRequestByFastForward(this, this.__resources, input);
  }

  public mergePullRequestBySquash(input: shapes.CodeCommitMergePullRequestBySquashInput): CodeCommitResponsesMergePullRequestBySquash {
    return new CodeCommitResponsesMergePullRequestBySquash(this, this.__resources, input);
  }

  public mergePullRequestByThreeWay(input: shapes.CodeCommitMergePullRequestByThreeWayInput): CodeCommitResponsesMergePullRequestByThreeWay {
    return new CodeCommitResponsesMergePullRequestByThreeWay(this, this.__resources, input);
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

  public postCommentForComparedCommit(input: shapes.CodeCommitPostCommentForComparedCommitInput): CodeCommitResponsesPostCommentForComparedCommit {
    return new CodeCommitResponsesPostCommentForComparedCommit(this, this.__resources, input);
  }

  public postCommentForPullRequest(input: shapes.CodeCommitPostCommentForPullRequestInput): CodeCommitResponsesPostCommentForPullRequest {
    return new CodeCommitResponsesPostCommentForPullRequest(this, this.__resources, input);
  }

  public postCommentReply(input: shapes.CodeCommitPostCommentReplyInput): CodeCommitResponsesPostCommentReply {
    return new CodeCommitResponsesPostCommentReply(this, this.__resources, input);
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

  public putFile(input: shapes.CodeCommitPutFileInput): CodeCommitResponsesPutFile {
    return new CodeCommitResponsesPutFile(this, this.__resources, input);
  }

  public putRepositoryTriggers(input: shapes.CodeCommitPutRepositoryTriggersInput): CodeCommitResponsesPutRepositoryTriggers {
    return new CodeCommitResponsesPutRepositoryTriggers(this, this.__resources, input);
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

  public testRepositoryTriggers(input: shapes.CodeCommitTestRepositoryTriggersInput): CodeCommitResponsesTestRepositoryTriggers {
    return new CodeCommitResponsesTestRepositoryTriggers(this, this.__resources, input);
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

  public updateApprovalRuleTemplateContent(input: shapes.CodeCommitUpdateApprovalRuleTemplateContentInput): CodeCommitResponsesUpdateApprovalRuleTemplateContent {
    return new CodeCommitResponsesUpdateApprovalRuleTemplateContent(this, this.__resources, input);
  }

  public updateApprovalRuleTemplateDescription(input: shapes.CodeCommitUpdateApprovalRuleTemplateDescriptionInput): CodeCommitResponsesUpdateApprovalRuleTemplateDescription {
    return new CodeCommitResponsesUpdateApprovalRuleTemplateDescription(this, this.__resources, input);
  }

  public updateApprovalRuleTemplateName(input: shapes.CodeCommitUpdateApprovalRuleTemplateNameInput): CodeCommitResponsesUpdateApprovalRuleTemplateName {
    return new CodeCommitResponsesUpdateApprovalRuleTemplateName(this, this.__resources, input);
  }

  public updateComment(input: shapes.CodeCommitUpdateCommentInput): CodeCommitResponsesUpdateComment {
    return new CodeCommitResponsesUpdateComment(this, this.__resources, input);
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

  public updatePullRequestApprovalRuleContent(input: shapes.CodeCommitUpdatePullRequestApprovalRuleContentInput): CodeCommitResponsesUpdatePullRequestApprovalRuleContent {
    return new CodeCommitResponsesUpdatePullRequestApprovalRuleContent(this, this.__resources, input);
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

  public updatePullRequestDescription(input: shapes.CodeCommitUpdatePullRequestDescriptionInput): CodeCommitResponsesUpdatePullRequestDescription {
    return new CodeCommitResponsesUpdatePullRequestDescription(this, this.__resources, input);
  }

  public updatePullRequestStatus(input: shapes.CodeCommitUpdatePullRequestStatusInput): CodeCommitResponsesUpdatePullRequestStatus {
    return new CodeCommitResponsesUpdatePullRequestStatus(this, this.__resources, input);
  }

  public updatePullRequestTitle(input: shapes.CodeCommitUpdatePullRequestTitleInput): CodeCommitResponsesUpdatePullRequestTitle {
    return new CodeCommitResponsesUpdatePullRequestTitle(this, this.__resources, input);
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

export class CodeCommitResponsesBatchAssociateApprovalRuleTemplateWithRepositories {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesInput) {
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
          repositoryNames: this.__input.repositoryNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchAssociateApprovalRuleTemplateWithRepositories.associatedRepositoryNames', props);
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
          repositoryNames: this.__input.repositoryNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchAssociateApprovalRuleTemplateWithRepositories.errors', props);
    return resource.getResponseField('errors') as unknown as shapes.CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesError[];
  }

}

export class CodeCommitResponsesBatchDescribeMergeConflicts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitBatchDescribeMergeConflictsInput) {
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          maxMergeHunks: this.__input.maxMergeHunks,
          maxConflictFiles: this.__input.maxConflictFiles,
          filePaths: this.__input.filePaths,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDescribeMergeConflicts.conflicts', props);
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          maxMergeHunks: this.__input.maxMergeHunks,
          maxConflictFiles: this.__input.maxConflictFiles,
          filePaths: this.__input.filePaths,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDescribeMergeConflicts.nextToken', props);
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          maxMergeHunks: this.__input.maxMergeHunks,
          maxConflictFiles: this.__input.maxConflictFiles,
          filePaths: this.__input.filePaths,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDescribeMergeConflicts.errors', props);
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          maxMergeHunks: this.__input.maxMergeHunks,
          maxConflictFiles: this.__input.maxConflictFiles,
          filePaths: this.__input.filePaths,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDescribeMergeConflicts.destinationCommitId', props);
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          maxMergeHunks: this.__input.maxMergeHunks,
          maxConflictFiles: this.__input.maxConflictFiles,
          filePaths: this.__input.filePaths,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDescribeMergeConflicts.sourceCommitId', props);
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          maxMergeHunks: this.__input.maxMergeHunks,
          maxConflictFiles: this.__input.maxConflictFiles,
          filePaths: this.__input.filePaths,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDescribeMergeConflicts.baseCommitId', props);
    return resource.getResponseField('baseCommitId') as unknown as string;
  }

}

export class CodeCommitResponsesBatchDisassociateApprovalRuleTemplateFromRepositories {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesInput) {
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
          repositoryNames: this.__input.repositoryNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDisassociateApprovalRuleTemplateFromRepositories.disassociatedRepositoryNames', props);
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
          repositoryNames: this.__input.repositoryNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDisassociateApprovalRuleTemplateFromRepositories.errors', props);
    return resource.getResponseField('errors') as unknown as shapes.CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesError[];
  }

}

export class CodeCommitResponsesBatchGetCommits {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitBatchGetCommitsInput) {
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
          commitIds: this.__input.commitIds,
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetCommits.commits', props);
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
          commitIds: this.__input.commitIds,
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetCommits.errors', props);
    return resource.getResponseField('errors') as unknown as shapes.CodeCommitBatchGetCommitsError[];
  }

}

export class CodeCommitResponsesBatchGetRepositories {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitBatchGetRepositoriesInput) {
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
          repositoryNames: this.__input.repositoryNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetRepositories.repositories', props);
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
          repositoryNames: this.__input.repositoryNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetRepositories.repositoriesNotFound', props);
    return resource.getResponseField('repositoriesNotFound') as unknown as string[];
  }

}

export class CodeCommitResponsesCreateApprovalRuleTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitCreateApprovalRuleTemplateInput) {
  }

  public get approvalRuleTemplate(): CodeCommitResponsesCreateApprovalRuleTemplateApprovalRuleTemplate {
    return new CodeCommitResponsesCreateApprovalRuleTemplateApprovalRuleTemplate(this.__scope, this.__resources, this.__input);
  }

}

export class CodeCommitResponsesCreateApprovalRuleTemplateApprovalRuleTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitCreateApprovalRuleTemplateInput) {
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
          approvalRuleTemplateContent: this.__input.approvalRuleTemplateContent,
          approvalRuleTemplateDescription: this.__input.approvalRuleTemplateDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApprovalRuleTemplate.approvalRuleTemplate.approvalRuleTemplateId', props);
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
          approvalRuleTemplateContent: this.__input.approvalRuleTemplateContent,
          approvalRuleTemplateDescription: this.__input.approvalRuleTemplateDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApprovalRuleTemplate.approvalRuleTemplate.approvalRuleTemplateName', props);
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
          approvalRuleTemplateContent: this.__input.approvalRuleTemplateContent,
          approvalRuleTemplateDescription: this.__input.approvalRuleTemplateDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApprovalRuleTemplate.approvalRuleTemplate.approvalRuleTemplateDescription', props);
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
          approvalRuleTemplateContent: this.__input.approvalRuleTemplateContent,
          approvalRuleTemplateDescription: this.__input.approvalRuleTemplateDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApprovalRuleTemplate.approvalRuleTemplate.approvalRuleTemplateContent', props);
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
          approvalRuleTemplateContent: this.__input.approvalRuleTemplateContent,
          approvalRuleTemplateDescription: this.__input.approvalRuleTemplateDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApprovalRuleTemplate.approvalRuleTemplate.ruleContentSha256', props);
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
          approvalRuleTemplateContent: this.__input.approvalRuleTemplateContent,
          approvalRuleTemplateDescription: this.__input.approvalRuleTemplateDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApprovalRuleTemplate.approvalRuleTemplate.lastModifiedDate', props);
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
          approvalRuleTemplateContent: this.__input.approvalRuleTemplateContent,
          approvalRuleTemplateDescription: this.__input.approvalRuleTemplateDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApprovalRuleTemplate.approvalRuleTemplate.creationDate', props);
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
          approvalRuleTemplateContent: this.__input.approvalRuleTemplateContent,
          approvalRuleTemplateDescription: this.__input.approvalRuleTemplateDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApprovalRuleTemplate.approvalRuleTemplate.lastModifiedUser', props);
    return resource.getResponseField('approvalRuleTemplate.lastModifiedUser') as unknown as string;
  }

}

export class CodeCommitResponsesCreateCommit {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitCreateCommitInput) {
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
          repositoryName: this.__input.repositoryName,
          branchName: this.__input.branchName,
          parentCommitId: this.__input.parentCommitId,
          authorName: this.__input.authorName,
          email: this.__input.email,
          commitMessage: this.__input.commitMessage,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          putFiles: this.__input.putFiles,
          deleteFiles: this.__input.deleteFiles,
          setFileModes: this.__input.setFileModes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCommit.commitId', props);
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
          repositoryName: this.__input.repositoryName,
          branchName: this.__input.branchName,
          parentCommitId: this.__input.parentCommitId,
          authorName: this.__input.authorName,
          email: this.__input.email,
          commitMessage: this.__input.commitMessage,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          putFiles: this.__input.putFiles,
          deleteFiles: this.__input.deleteFiles,
          setFileModes: this.__input.setFileModes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCommit.treeId', props);
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
          repositoryName: this.__input.repositoryName,
          branchName: this.__input.branchName,
          parentCommitId: this.__input.parentCommitId,
          authorName: this.__input.authorName,
          email: this.__input.email,
          commitMessage: this.__input.commitMessage,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          putFiles: this.__input.putFiles,
          deleteFiles: this.__input.deleteFiles,
          setFileModes: this.__input.setFileModes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCommit.filesAdded', props);
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
          repositoryName: this.__input.repositoryName,
          branchName: this.__input.branchName,
          parentCommitId: this.__input.parentCommitId,
          authorName: this.__input.authorName,
          email: this.__input.email,
          commitMessage: this.__input.commitMessage,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          putFiles: this.__input.putFiles,
          deleteFiles: this.__input.deleteFiles,
          setFileModes: this.__input.setFileModes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCommit.filesUpdated', props);
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
          repositoryName: this.__input.repositoryName,
          branchName: this.__input.branchName,
          parentCommitId: this.__input.parentCommitId,
          authorName: this.__input.authorName,
          email: this.__input.email,
          commitMessage: this.__input.commitMessage,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          putFiles: this.__input.putFiles,
          deleteFiles: this.__input.deleteFiles,
          setFileModes: this.__input.setFileModes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCommit.filesDeleted', props);
    return resource.getResponseField('filesDeleted') as unknown as shapes.CodeCommitFileMetadata[];
  }

}

export class CodeCommitResponsesCreatePullRequest {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitCreatePullRequestInput) {
  }

  public get pullRequest(): CodeCommitResponsesCreatePullRequestPullRequest {
    return new CodeCommitResponsesCreatePullRequestPullRequest(this.__scope, this.__resources, this.__input);
  }

}

export class CodeCommitResponsesCreatePullRequestPullRequest {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitCreatePullRequestInput) {
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
          title: this.__input.title,
          description: this.__input.description,
          targets: this.__input.targets,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePullRequest.pullRequest.pullRequestId', props);
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
          title: this.__input.title,
          description: this.__input.description,
          targets: this.__input.targets,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePullRequest.pullRequest.title', props);
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
          title: this.__input.title,
          description: this.__input.description,
          targets: this.__input.targets,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePullRequest.pullRequest.description', props);
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
          title: this.__input.title,
          description: this.__input.description,
          targets: this.__input.targets,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePullRequest.pullRequest.lastActivityDate', props);
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
          title: this.__input.title,
          description: this.__input.description,
          targets: this.__input.targets,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePullRequest.pullRequest.creationDate', props);
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
          title: this.__input.title,
          description: this.__input.description,
          targets: this.__input.targets,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePullRequest.pullRequest.pullRequestStatus', props);
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
          title: this.__input.title,
          description: this.__input.description,
          targets: this.__input.targets,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePullRequest.pullRequest.authorArn', props);
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
          title: this.__input.title,
          description: this.__input.description,
          targets: this.__input.targets,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePullRequest.pullRequest.pullRequestTargets', props);
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
          title: this.__input.title,
          description: this.__input.description,
          targets: this.__input.targets,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePullRequest.pullRequest.clientRequestToken', props);
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
          title: this.__input.title,
          description: this.__input.description,
          targets: this.__input.targets,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePullRequest.pullRequest.revisionId', props);
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
          title: this.__input.title,
          description: this.__input.description,
          targets: this.__input.targets,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePullRequest.pullRequest.approvalRules', props);
    return resource.getResponseField('pullRequest.approvalRules') as unknown as shapes.CodeCommitApprovalRule[];
  }

}

export class CodeCommitResponsesCreatePullRequestApprovalRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitCreatePullRequestApprovalRuleInput) {
  }

  public get approvalRule(): CodeCommitResponsesCreatePullRequestApprovalRuleApprovalRule {
    return new CodeCommitResponsesCreatePullRequestApprovalRuleApprovalRule(this.__scope, this.__resources, this.__input);
  }

}

export class CodeCommitResponsesCreatePullRequestApprovalRuleApprovalRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitCreatePullRequestApprovalRuleInput) {
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
          pullRequestId: this.__input.pullRequestId,
          approvalRuleName: this.__input.approvalRuleName,
          approvalRuleContent: this.__input.approvalRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePullRequestApprovalRule.approvalRule.approvalRuleId', props);
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
          pullRequestId: this.__input.pullRequestId,
          approvalRuleName: this.__input.approvalRuleName,
          approvalRuleContent: this.__input.approvalRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePullRequestApprovalRule.approvalRule.approvalRuleName', props);
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
          pullRequestId: this.__input.pullRequestId,
          approvalRuleName: this.__input.approvalRuleName,
          approvalRuleContent: this.__input.approvalRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePullRequestApprovalRule.approvalRule.approvalRuleContent', props);
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
          pullRequestId: this.__input.pullRequestId,
          approvalRuleName: this.__input.approvalRuleName,
          approvalRuleContent: this.__input.approvalRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePullRequestApprovalRule.approvalRule.ruleContentSha256', props);
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
          pullRequestId: this.__input.pullRequestId,
          approvalRuleName: this.__input.approvalRuleName,
          approvalRuleContent: this.__input.approvalRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePullRequestApprovalRule.approvalRule.lastModifiedDate', props);
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
          pullRequestId: this.__input.pullRequestId,
          approvalRuleName: this.__input.approvalRuleName,
          approvalRuleContent: this.__input.approvalRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePullRequestApprovalRule.approvalRule.creationDate', props);
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
          pullRequestId: this.__input.pullRequestId,
          approvalRuleName: this.__input.approvalRuleName,
          approvalRuleContent: this.__input.approvalRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePullRequestApprovalRule.approvalRule.lastModifiedUser', props);
    return resource.getResponseField('approvalRule.lastModifiedUser') as unknown as string;
  }

  public get originApprovalRuleTemplate(): CodeCommitResponsesCreatePullRequestApprovalRuleApprovalRuleOriginApprovalRuleTemplate {
    return new CodeCommitResponsesCreatePullRequestApprovalRuleApprovalRuleOriginApprovalRuleTemplate(this.__scope, this.__resources, this.__input);
  }

}

export class CodeCommitResponsesCreatePullRequestApprovalRuleApprovalRuleOriginApprovalRuleTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitCreatePullRequestApprovalRuleInput) {
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
          pullRequestId: this.__input.pullRequestId,
          approvalRuleName: this.__input.approvalRuleName,
          approvalRuleContent: this.__input.approvalRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePullRequestApprovalRule.approvalRule.originApprovalRuleTemplate.approvalRuleTemplateId', props);
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
          pullRequestId: this.__input.pullRequestId,
          approvalRuleName: this.__input.approvalRuleName,
          approvalRuleContent: this.__input.approvalRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePullRequestApprovalRule.approvalRule.originApprovalRuleTemplate.approvalRuleTemplateName', props);
    return resource.getResponseField('approvalRule.originApprovalRuleTemplate.approvalRuleTemplateName') as unknown as string;
  }

}

export class CodeCommitResponsesCreateRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitCreateRepositoryInput) {
  }

  public get repositoryMetadata(): CodeCommitResponsesCreateRepositoryRepositoryMetadata {
    return new CodeCommitResponsesCreateRepositoryRepositoryMetadata(this.__scope, this.__resources, this.__input);
  }

}

export class CodeCommitResponsesCreateRepositoryRepositoryMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitCreateRepositoryInput) {
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
          repositoryName: this.__input.repositoryName,
          repositoryDescription: this.__input.repositoryDescription,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.repositoryMetadata.accountId', props);
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
          repositoryName: this.__input.repositoryName,
          repositoryDescription: this.__input.repositoryDescription,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.repositoryMetadata.repositoryId', props);
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
          repositoryName: this.__input.repositoryName,
          repositoryDescription: this.__input.repositoryDescription,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.repositoryMetadata.repositoryName', props);
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
          repositoryName: this.__input.repositoryName,
          repositoryDescription: this.__input.repositoryDescription,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.repositoryMetadata.repositoryDescription', props);
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
          repositoryName: this.__input.repositoryName,
          repositoryDescription: this.__input.repositoryDescription,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.repositoryMetadata.defaultBranch', props);
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
          repositoryName: this.__input.repositoryName,
          repositoryDescription: this.__input.repositoryDescription,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.repositoryMetadata.lastModifiedDate', props);
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
          repositoryName: this.__input.repositoryName,
          repositoryDescription: this.__input.repositoryDescription,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.repositoryMetadata.creationDate', props);
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
          repositoryName: this.__input.repositoryName,
          repositoryDescription: this.__input.repositoryDescription,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.repositoryMetadata.cloneUrlHttp', props);
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
          repositoryName: this.__input.repositoryName,
          repositoryDescription: this.__input.repositoryDescription,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.repositoryMetadata.cloneUrlSsh', props);
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
          repositoryName: this.__input.repositoryName,
          repositoryDescription: this.__input.repositoryDescription,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.repositoryMetadata.Arn', props);
    return resource.getResponseField('repositoryMetadata.Arn') as unknown as string;
  }

}

export class CodeCommitResponsesCreateUnreferencedMergeCommit {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitCreateUnreferencedMergeCommitInput) {
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
          repositoryName: this.__input.repositoryName,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          authorName: this.__input.authorName,
          email: this.__input.email,
          commitMessage: this.__input.commitMessage,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.__input.conflictResolution?.replaceContents,
            deleteFiles: this.__input.conflictResolution?.deleteFiles,
            setFileModes: this.__input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUnreferencedMergeCommit.commitId', props);
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
          repositoryName: this.__input.repositoryName,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          authorName: this.__input.authorName,
          email: this.__input.email,
          commitMessage: this.__input.commitMessage,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.__input.conflictResolution?.replaceContents,
            deleteFiles: this.__input.conflictResolution?.deleteFiles,
            setFileModes: this.__input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUnreferencedMergeCommit.treeId', props);
    return resource.getResponseField('treeId') as unknown as string;
  }

}

export class CodeCommitResponsesDeleteApprovalRuleTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitDeleteApprovalRuleTemplateInput) {
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApprovalRuleTemplate.approvalRuleTemplateId', props);
    return resource.getResponseField('approvalRuleTemplateId') as unknown as string;
  }

}

export class CodeCommitResponsesDeleteBranch {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitDeleteBranchInput) {
  }

  public get deletedBranch(): CodeCommitResponsesDeleteBranchDeletedBranch {
    return new CodeCommitResponsesDeleteBranchDeletedBranch(this.__scope, this.__resources, this.__input);
  }

}

export class CodeCommitResponsesDeleteBranchDeletedBranch {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitDeleteBranchInput) {
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
          repositoryName: this.__input.repositoryName,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBranch.deletedBranch.branchName', props);
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
          repositoryName: this.__input.repositoryName,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBranch.deletedBranch.commitId', props);
    return resource.getResponseField('deletedBranch.commitId') as unknown as string;
  }

}

export class CodeCommitResponsesDeleteCommentContent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitDeleteCommentContentInput) {
  }

  public get comment(): CodeCommitResponsesDeleteCommentContentComment {
    return new CodeCommitResponsesDeleteCommentContentComment(this.__scope, this.__resources, this.__input);
  }

}

export class CodeCommitResponsesDeleteCommentContentComment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitDeleteCommentContentInput) {
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
          commentId: this.__input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCommentContent.comment.commentId', props);
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
          commentId: this.__input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCommentContent.comment.content', props);
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
          commentId: this.__input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCommentContent.comment.inReplyTo', props);
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
          commentId: this.__input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCommentContent.comment.creationDate', props);
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
          commentId: this.__input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCommentContent.comment.lastModifiedDate', props);
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
          commentId: this.__input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCommentContent.comment.authorArn', props);
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
          commentId: this.__input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCommentContent.comment.deleted', props);
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
          commentId: this.__input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCommentContent.comment.clientRequestToken', props);
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
          commentId: this.__input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCommentContent.comment.callerReactions', props);
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
          commentId: this.__input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCommentContent.comment.reactionCounts', props);
    return resource.getResponseField('comment.reactionCounts') as unknown as Record<string, number>;
  }

}

export class CodeCommitResponsesDeleteFile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitDeleteFileInput) {
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
          repositoryName: this.__input.repositoryName,
          branchName: this.__input.branchName,
          filePath: this.__input.filePath,
          parentCommitId: this.__input.parentCommitId,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          commitMessage: this.__input.commitMessage,
          name: this.__input.name,
          email: this.__input.email,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFile.commitId', props);
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
          repositoryName: this.__input.repositoryName,
          branchName: this.__input.branchName,
          filePath: this.__input.filePath,
          parentCommitId: this.__input.parentCommitId,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          commitMessage: this.__input.commitMessage,
          name: this.__input.name,
          email: this.__input.email,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFile.blobId', props);
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
          repositoryName: this.__input.repositoryName,
          branchName: this.__input.branchName,
          filePath: this.__input.filePath,
          parentCommitId: this.__input.parentCommitId,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          commitMessage: this.__input.commitMessage,
          name: this.__input.name,
          email: this.__input.email,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFile.treeId', props);
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
          repositoryName: this.__input.repositoryName,
          branchName: this.__input.branchName,
          filePath: this.__input.filePath,
          parentCommitId: this.__input.parentCommitId,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          commitMessage: this.__input.commitMessage,
          name: this.__input.name,
          email: this.__input.email,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFile.filePath', props);
    return resource.getResponseField('filePath') as unknown as string;
  }

}

export class CodeCommitResponsesDeletePullRequestApprovalRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitDeletePullRequestApprovalRuleInput) {
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
          pullRequestId: this.__input.pullRequestId,
          approvalRuleName: this.__input.approvalRuleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeletePullRequestApprovalRule.approvalRuleId', props);
    return resource.getResponseField('approvalRuleId') as unknown as string;
  }

}

export class CodeCommitResponsesDeleteRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitDeleteRepositoryInput) {
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
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRepository.repositoryId', props);
    return resource.getResponseField('repositoryId') as unknown as string;
  }

}

export class CodeCommitResponsesDescribeMergeConflicts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitDescribeMergeConflictsInput) {
  }

  public get conflictMetadata(): CodeCommitResponsesDescribeMergeConflictsConflictMetadata {
    return new CodeCommitResponsesDescribeMergeConflictsConflictMetadata(this.__scope, this.__resources, this.__input);
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          maxMergeHunks: this.__input.maxMergeHunks,
          filePath: this.__input.filePath,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMergeConflicts.mergeHunks', props);
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          maxMergeHunks: this.__input.maxMergeHunks,
          filePath: this.__input.filePath,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMergeConflicts.nextToken', props);
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          maxMergeHunks: this.__input.maxMergeHunks,
          filePath: this.__input.filePath,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMergeConflicts.destinationCommitId', props);
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          maxMergeHunks: this.__input.maxMergeHunks,
          filePath: this.__input.filePath,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMergeConflicts.sourceCommitId', props);
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          maxMergeHunks: this.__input.maxMergeHunks,
          filePath: this.__input.filePath,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMergeConflicts.baseCommitId', props);
    return resource.getResponseField('baseCommitId') as unknown as string;
  }

}

export class CodeCommitResponsesDescribeMergeConflictsConflictMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitDescribeMergeConflictsInput) {
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          maxMergeHunks: this.__input.maxMergeHunks,
          filePath: this.__input.filePath,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMergeConflicts.conflictMetadata.filePath', props);
    return resource.getResponseField('conflictMetadata.filePath') as unknown as string;
  }

  public get fileSizes(): CodeCommitResponsesDescribeMergeConflictsConflictMetadataFileSizes {
    return new CodeCommitResponsesDescribeMergeConflictsConflictMetadataFileSizes(this.__scope, this.__resources, this.__input);
  }

  public get fileModes(): CodeCommitResponsesDescribeMergeConflictsConflictMetadataFileModes {
    return new CodeCommitResponsesDescribeMergeConflictsConflictMetadataFileModes(this.__scope, this.__resources, this.__input);
  }

  public get objectTypes(): CodeCommitResponsesDescribeMergeConflictsConflictMetadataObjectTypes {
    return new CodeCommitResponsesDescribeMergeConflictsConflictMetadataObjectTypes(this.__scope, this.__resources, this.__input);
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          maxMergeHunks: this.__input.maxMergeHunks,
          filePath: this.__input.filePath,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMergeConflicts.conflictMetadata.numberOfConflicts', props);
    return resource.getResponseField('conflictMetadata.numberOfConflicts') as unknown as number;
  }

  public get isBinaryFile(): CodeCommitResponsesDescribeMergeConflictsConflictMetadataIsBinaryFile {
    return new CodeCommitResponsesDescribeMergeConflictsConflictMetadataIsBinaryFile(this.__scope, this.__resources, this.__input);
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          maxMergeHunks: this.__input.maxMergeHunks,
          filePath: this.__input.filePath,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMergeConflicts.conflictMetadata.contentConflict', props);
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          maxMergeHunks: this.__input.maxMergeHunks,
          filePath: this.__input.filePath,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMergeConflicts.conflictMetadata.fileModeConflict', props);
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          maxMergeHunks: this.__input.maxMergeHunks,
          filePath: this.__input.filePath,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMergeConflicts.conflictMetadata.objectTypeConflict', props);
    return resource.getResponseField('conflictMetadata.objectTypeConflict') as unknown as boolean;
  }

  public get mergeOperations(): CodeCommitResponsesDescribeMergeConflictsConflictMetadataMergeOperations {
    return new CodeCommitResponsesDescribeMergeConflictsConflictMetadataMergeOperations(this.__scope, this.__resources, this.__input);
  }

}

export class CodeCommitResponsesDescribeMergeConflictsConflictMetadataFileSizes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitDescribeMergeConflictsInput) {
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          maxMergeHunks: this.__input.maxMergeHunks,
          filePath: this.__input.filePath,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMergeConflicts.conflictMetadata.fileSizes.source', props);
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          maxMergeHunks: this.__input.maxMergeHunks,
          filePath: this.__input.filePath,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMergeConflicts.conflictMetadata.fileSizes.destination', props);
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          maxMergeHunks: this.__input.maxMergeHunks,
          filePath: this.__input.filePath,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMergeConflicts.conflictMetadata.fileSizes.base', props);
    return resource.getResponseField('conflictMetadata.fileSizes.base') as unknown as number;
  }

}

export class CodeCommitResponsesDescribeMergeConflictsConflictMetadataFileModes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitDescribeMergeConflictsInput) {
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          maxMergeHunks: this.__input.maxMergeHunks,
          filePath: this.__input.filePath,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMergeConflicts.conflictMetadata.fileModes.source', props);
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          maxMergeHunks: this.__input.maxMergeHunks,
          filePath: this.__input.filePath,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMergeConflicts.conflictMetadata.fileModes.destination', props);
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          maxMergeHunks: this.__input.maxMergeHunks,
          filePath: this.__input.filePath,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMergeConflicts.conflictMetadata.fileModes.base', props);
    return resource.getResponseField('conflictMetadata.fileModes.base') as unknown as string;
  }

}

export class CodeCommitResponsesDescribeMergeConflictsConflictMetadataObjectTypes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitDescribeMergeConflictsInput) {
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          maxMergeHunks: this.__input.maxMergeHunks,
          filePath: this.__input.filePath,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMergeConflicts.conflictMetadata.objectTypes.source', props);
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          maxMergeHunks: this.__input.maxMergeHunks,
          filePath: this.__input.filePath,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMergeConflicts.conflictMetadata.objectTypes.destination', props);
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          maxMergeHunks: this.__input.maxMergeHunks,
          filePath: this.__input.filePath,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMergeConflicts.conflictMetadata.objectTypes.base', props);
    return resource.getResponseField('conflictMetadata.objectTypes.base') as unknown as string;
  }

}

export class CodeCommitResponsesDescribeMergeConflictsConflictMetadataIsBinaryFile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitDescribeMergeConflictsInput) {
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          maxMergeHunks: this.__input.maxMergeHunks,
          filePath: this.__input.filePath,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMergeConflicts.conflictMetadata.isBinaryFile.source', props);
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          maxMergeHunks: this.__input.maxMergeHunks,
          filePath: this.__input.filePath,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMergeConflicts.conflictMetadata.isBinaryFile.destination', props);
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          maxMergeHunks: this.__input.maxMergeHunks,
          filePath: this.__input.filePath,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMergeConflicts.conflictMetadata.isBinaryFile.base', props);
    return resource.getResponseField('conflictMetadata.isBinaryFile.base') as unknown as boolean;
  }

}

export class CodeCommitResponsesDescribeMergeConflictsConflictMetadataMergeOperations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitDescribeMergeConflictsInput) {
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          maxMergeHunks: this.__input.maxMergeHunks,
          filePath: this.__input.filePath,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMergeConflicts.conflictMetadata.mergeOperations.source', props);
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          maxMergeHunks: this.__input.maxMergeHunks,
          filePath: this.__input.filePath,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMergeConflicts.conflictMetadata.mergeOperations.destination', props);
    return resource.getResponseField('conflictMetadata.mergeOperations.destination') as unknown as string;
  }

}

export class CodeCommitResponsesDescribePullRequestEvents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitDescribePullRequestEventsInput) {
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
          pullRequestId: this.__input.pullRequestId,
          pullRequestEventType: this.__input.pullRequestEventType,
          actorArn: this.__input.actorArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePullRequestEvents.pullRequestEvents', props);
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
          pullRequestId: this.__input.pullRequestId,
          pullRequestEventType: this.__input.pullRequestEventType,
          actorArn: this.__input.actorArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePullRequestEvents.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeCommitResponsesEvaluatePullRequestApprovalRules {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitEvaluatePullRequestApprovalRulesInput) {
  }

  public get evaluation(): CodeCommitResponsesEvaluatePullRequestApprovalRulesEvaluation {
    return new CodeCommitResponsesEvaluatePullRequestApprovalRulesEvaluation(this.__scope, this.__resources, this.__input);
  }

}

export class CodeCommitResponsesEvaluatePullRequestApprovalRulesEvaluation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitEvaluatePullRequestApprovalRulesInput) {
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
          pullRequestId: this.__input.pullRequestId,
          revisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'EvaluatePullRequestApprovalRules.evaluation.approved', props);
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
          pullRequestId: this.__input.pullRequestId,
          revisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'EvaluatePullRequestApprovalRules.evaluation.overridden', props);
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
          pullRequestId: this.__input.pullRequestId,
          revisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'EvaluatePullRequestApprovalRules.evaluation.approvalRulesSatisfied', props);
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
          pullRequestId: this.__input.pullRequestId,
          revisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'EvaluatePullRequestApprovalRules.evaluation.approvalRulesNotSatisfied', props);
    return resource.getResponseField('evaluation.approvalRulesNotSatisfied') as unknown as string[];
  }

}

export class CodeCommitResponsesFetchApprovalRuleTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitGetApprovalRuleTemplateInput) {
  }

  public get approvalRuleTemplate(): CodeCommitResponsesFetchApprovalRuleTemplateApprovalRuleTemplate {
    return new CodeCommitResponsesFetchApprovalRuleTemplateApprovalRuleTemplate(this.__scope, this.__resources, this.__input);
  }

}

export class CodeCommitResponsesFetchApprovalRuleTemplateApprovalRuleTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitGetApprovalRuleTemplateInput) {
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApprovalRuleTemplate.approvalRuleTemplate.approvalRuleTemplateId', props);
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApprovalRuleTemplate.approvalRuleTemplate.approvalRuleTemplateName', props);
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApprovalRuleTemplate.approvalRuleTemplate.approvalRuleTemplateDescription', props);
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApprovalRuleTemplate.approvalRuleTemplate.approvalRuleTemplateContent', props);
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApprovalRuleTemplate.approvalRuleTemplate.ruleContentSha256', props);
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApprovalRuleTemplate.approvalRuleTemplate.lastModifiedDate', props);
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApprovalRuleTemplate.approvalRuleTemplate.creationDate', props);
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApprovalRuleTemplate.approvalRuleTemplate.lastModifiedUser', props);
    return resource.getResponseField('approvalRuleTemplate.lastModifiedUser') as unknown as string;
  }

}

export class CodeCommitResponsesFetchBlob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitGetBlobInput) {
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
          repositoryName: this.__input.repositoryName,
          blobId: this.__input.blobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBlob.content', props);
    return resource.getResponseField('content') as unknown as any;
  }

}

export class CodeCommitResponsesFetchBranch {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitGetBranchInput) {
  }

  public get branch(): CodeCommitResponsesFetchBranchBranch {
    return new CodeCommitResponsesFetchBranchBranch(this.__scope, this.__resources, this.__input);
  }

}

export class CodeCommitResponsesFetchBranchBranch {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitGetBranchInput) {
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
          repositoryName: this.__input.repositoryName,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBranch.branch.branchName', props);
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
          repositoryName: this.__input.repositoryName,
          branchName: this.__input.branchName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBranch.branch.commitId', props);
    return resource.getResponseField('branch.commitId') as unknown as string;
  }

}

export class CodeCommitResponsesFetchComment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitGetCommentInput) {
  }

  public get comment(): CodeCommitResponsesFetchCommentComment {
    return new CodeCommitResponsesFetchCommentComment(this.__scope, this.__resources, this.__input);
  }

}

export class CodeCommitResponsesFetchCommentComment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitGetCommentInput) {
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
          commentId: this.__input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComment.comment.commentId', props);
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
          commentId: this.__input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComment.comment.content', props);
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
          commentId: this.__input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComment.comment.inReplyTo', props);
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
          commentId: this.__input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComment.comment.creationDate', props);
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
          commentId: this.__input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComment.comment.lastModifiedDate', props);
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
          commentId: this.__input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComment.comment.authorArn', props);
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
          commentId: this.__input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComment.comment.deleted', props);
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
          commentId: this.__input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComment.comment.clientRequestToken', props);
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
          commentId: this.__input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComment.comment.callerReactions', props);
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
          commentId: this.__input.commentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComment.comment.reactionCounts', props);
    return resource.getResponseField('comment.reactionCounts') as unknown as Record<string, number>;
  }

}

export class CodeCommitResponsesFetchCommentReactions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitGetCommentReactionsInput) {
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
          commentId: this.__input.commentId,
          reactionUserArn: this.__input.reactionUserArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommentReactions.reactionsForComment', props);
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
          commentId: this.__input.commentId,
          reactionUserArn: this.__input.reactionUserArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommentReactions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeCommitResponsesFetchCommentsForComparedCommit {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitGetCommentsForComparedCommitInput) {
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
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommentsForComparedCommit.commentsForComparedCommitData', props);
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
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommentsForComparedCommit.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeCommitResponsesFetchCommentsForPullRequest {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitGetCommentsForPullRequestInput) {
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommentsForPullRequest.commentsForPullRequestData', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommentsForPullRequest.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeCommitResponsesFetchCommit {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitGetCommitInput) {
  }

  public get commit(): CodeCommitResponsesFetchCommitCommit {
    return new CodeCommitResponsesFetchCommitCommit(this.__scope, this.__resources, this.__input);
  }

}

export class CodeCommitResponsesFetchCommitCommit {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitGetCommitInput) {
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
          repositoryName: this.__input.repositoryName,
          commitId: this.__input.commitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommit.commit.commitId', props);
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
          repositoryName: this.__input.repositoryName,
          commitId: this.__input.commitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommit.commit.treeId', props);
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
          repositoryName: this.__input.repositoryName,
          commitId: this.__input.commitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommit.commit.parents', props);
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
          repositoryName: this.__input.repositoryName,
          commitId: this.__input.commitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommit.commit.message', props);
    return resource.getResponseField('commit.message') as unknown as string;
  }

  public get author(): CodeCommitResponsesFetchCommitCommitAuthor {
    return new CodeCommitResponsesFetchCommitCommitAuthor(this.__scope, this.__resources, this.__input);
  }

  public get committer(): CodeCommitResponsesFetchCommitCommitCommitter {
    return new CodeCommitResponsesFetchCommitCommitCommitter(this.__scope, this.__resources, this.__input);
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
          repositoryName: this.__input.repositoryName,
          commitId: this.__input.commitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommit.commit.additionalData', props);
    return resource.getResponseField('commit.additionalData') as unknown as string;
  }

}

export class CodeCommitResponsesFetchCommitCommitAuthor {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitGetCommitInput) {
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
          repositoryName: this.__input.repositoryName,
          commitId: this.__input.commitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommit.commit.author.name', props);
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
          repositoryName: this.__input.repositoryName,
          commitId: this.__input.commitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommit.commit.author.email', props);
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
          repositoryName: this.__input.repositoryName,
          commitId: this.__input.commitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommit.commit.author.date', props);
    return resource.getResponseField('commit.author.date') as unknown as string;
  }

}

export class CodeCommitResponsesFetchCommitCommitCommitter {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitGetCommitInput) {
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
          repositoryName: this.__input.repositoryName,
          commitId: this.__input.commitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommit.commit.committer.name', props);
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
          repositoryName: this.__input.repositoryName,
          commitId: this.__input.commitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommit.commit.committer.email', props);
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
          repositoryName: this.__input.repositoryName,
          commitId: this.__input.commitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommit.commit.committer.date', props);
    return resource.getResponseField('commit.committer.date') as unknown as string;
  }

}

export class CodeCommitResponsesFetchDifferences {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitGetDifferencesInput) {
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
          repositoryName: this.__input.repositoryName,
          beforeCommitSpecifier: this.__input.beforeCommitSpecifier,
          afterCommitSpecifier: this.__input.afterCommitSpecifier,
          beforePath: this.__input.beforePath,
          afterPath: this.__input.afterPath,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDifferences.differences', props);
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
          repositoryName: this.__input.repositoryName,
          beforeCommitSpecifier: this.__input.beforeCommitSpecifier,
          afterCommitSpecifier: this.__input.afterCommitSpecifier,
          beforePath: this.__input.beforePath,
          afterPath: this.__input.afterPath,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDifferences.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CodeCommitResponsesFetchFile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitGetFileInput) {
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
          repositoryName: this.__input.repositoryName,
          commitSpecifier: this.__input.commitSpecifier,
          filePath: this.__input.filePath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFile.commitId', props);
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
          repositoryName: this.__input.repositoryName,
          commitSpecifier: this.__input.commitSpecifier,
          filePath: this.__input.filePath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFile.blobId', props);
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
          repositoryName: this.__input.repositoryName,
          commitSpecifier: this.__input.commitSpecifier,
          filePath: this.__input.filePath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFile.filePath', props);
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
          repositoryName: this.__input.repositoryName,
          commitSpecifier: this.__input.commitSpecifier,
          filePath: this.__input.filePath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFile.fileMode', props);
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
          repositoryName: this.__input.repositoryName,
          commitSpecifier: this.__input.commitSpecifier,
          filePath: this.__input.filePath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFile.fileSize', props);
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
          repositoryName: this.__input.repositoryName,
          commitSpecifier: this.__input.commitSpecifier,
          filePath: this.__input.filePath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFile.fileContent', props);
    return resource.getResponseField('fileContent') as unknown as any;
  }

}

export class CodeCommitResponsesFetchFolder {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitGetFolderInput) {
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
          repositoryName: this.__input.repositoryName,
          commitSpecifier: this.__input.commitSpecifier,
          folderPath: this.__input.folderPath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFolder.commitId', props);
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
          repositoryName: this.__input.repositoryName,
          commitSpecifier: this.__input.commitSpecifier,
          folderPath: this.__input.folderPath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFolder.folderPath', props);
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
          repositoryName: this.__input.repositoryName,
          commitSpecifier: this.__input.commitSpecifier,
          folderPath: this.__input.folderPath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFolder.treeId', props);
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
          repositoryName: this.__input.repositoryName,
          commitSpecifier: this.__input.commitSpecifier,
          folderPath: this.__input.folderPath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFolder.subFolders', props);
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
          repositoryName: this.__input.repositoryName,
          commitSpecifier: this.__input.commitSpecifier,
          folderPath: this.__input.folderPath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFolder.files', props);
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
          repositoryName: this.__input.repositoryName,
          commitSpecifier: this.__input.commitSpecifier,
          folderPath: this.__input.folderPath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFolder.symbolicLinks', props);
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
          repositoryName: this.__input.repositoryName,
          commitSpecifier: this.__input.commitSpecifier,
          folderPath: this.__input.folderPath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFolder.subModules', props);
    return resource.getResponseField('subModules') as unknown as shapes.CodeCommitSubModule[];
  }

}

export class CodeCommitResponsesFetchMergeCommit {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitGetMergeCommitInput) {
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
          repositoryName: this.__input.repositoryName,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMergeCommit.sourceCommitId', props);
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
          repositoryName: this.__input.repositoryName,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMergeCommit.destinationCommitId', props);
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
          repositoryName: this.__input.repositoryName,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMergeCommit.baseCommitId', props);
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
          repositoryName: this.__input.repositoryName,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMergeCommit.mergedCommitId', props);
    return resource.getResponseField('mergedCommitId') as unknown as string;
  }

}

export class CodeCommitResponsesFetchMergeConflicts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitGetMergeConflictsInput) {
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          maxConflictFiles: this.__input.maxConflictFiles,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMergeConflicts.mergeable', props);
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          maxConflictFiles: this.__input.maxConflictFiles,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMergeConflicts.destinationCommitId', props);
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          maxConflictFiles: this.__input.maxConflictFiles,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMergeConflicts.sourceCommitId', props);
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          maxConflictFiles: this.__input.maxConflictFiles,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMergeConflicts.baseCommitId', props);
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          maxConflictFiles: this.__input.maxConflictFiles,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMergeConflicts.conflictMetadataList', props);
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
          repositoryName: this.__input.repositoryName,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          mergeOption: this.__input.mergeOption,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          maxConflictFiles: this.__input.maxConflictFiles,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMergeConflicts.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeCommitResponsesFetchMergeOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitGetMergeOptionsInput) {
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
          repositoryName: this.__input.repositoryName,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMergeOptions.mergeOptions', props);
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
          repositoryName: this.__input.repositoryName,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMergeOptions.sourceCommitId', props);
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
          repositoryName: this.__input.repositoryName,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMergeOptions.destinationCommitId', props);
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
          repositoryName: this.__input.repositoryName,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMergeOptions.baseCommitId', props);
    return resource.getResponseField('baseCommitId') as unknown as string;
  }

}

export class CodeCommitResponsesFetchPullRequest {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitGetPullRequestInput) {
  }

  public get pullRequest(): CodeCommitResponsesFetchPullRequestPullRequest {
    return new CodeCommitResponsesFetchPullRequestPullRequest(this.__scope, this.__resources, this.__input);
  }

}

export class CodeCommitResponsesFetchPullRequestPullRequest {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitGetPullRequestInput) {
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
          pullRequestId: this.__input.pullRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPullRequest.pullRequest.pullRequestId', props);
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
          pullRequestId: this.__input.pullRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPullRequest.pullRequest.title', props);
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
          pullRequestId: this.__input.pullRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPullRequest.pullRequest.description', props);
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
          pullRequestId: this.__input.pullRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPullRequest.pullRequest.lastActivityDate', props);
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
          pullRequestId: this.__input.pullRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPullRequest.pullRequest.creationDate', props);
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
          pullRequestId: this.__input.pullRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPullRequest.pullRequest.pullRequestStatus', props);
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
          pullRequestId: this.__input.pullRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPullRequest.pullRequest.authorArn', props);
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
          pullRequestId: this.__input.pullRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPullRequest.pullRequest.pullRequestTargets', props);
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
          pullRequestId: this.__input.pullRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPullRequest.pullRequest.clientRequestToken', props);
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
          pullRequestId: this.__input.pullRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPullRequest.pullRequest.revisionId', props);
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
          pullRequestId: this.__input.pullRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPullRequest.pullRequest.approvalRules', props);
    return resource.getResponseField('pullRequest.approvalRules') as unknown as shapes.CodeCommitApprovalRule[];
  }

}

export class CodeCommitResponsesFetchPullRequestApprovalStates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitGetPullRequestApprovalStatesInput) {
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
          pullRequestId: this.__input.pullRequestId,
          revisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPullRequestApprovalStates.approvals', props);
    return resource.getResponseField('approvals') as unknown as shapes.CodeCommitApproval[];
  }

}

export class CodeCommitResponsesFetchPullRequestOverrideState {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitGetPullRequestOverrideStateInput) {
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
          pullRequestId: this.__input.pullRequestId,
          revisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPullRequestOverrideState.overridden', props);
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
          pullRequestId: this.__input.pullRequestId,
          revisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPullRequestOverrideState.overrider', props);
    return resource.getResponseField('overrider') as unknown as string;
  }

}

export class CodeCommitResponsesFetchRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitGetRepositoryInput) {
  }

  public get repositoryMetadata(): CodeCommitResponsesFetchRepositoryRepositoryMetadata {
    return new CodeCommitResponsesFetchRepositoryRepositoryMetadata(this.__scope, this.__resources, this.__input);
  }

}

export class CodeCommitResponsesFetchRepositoryRepositoryMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitGetRepositoryInput) {
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
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRepository.repositoryMetadata.accountId', props);
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
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRepository.repositoryMetadata.repositoryId', props);
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
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRepository.repositoryMetadata.repositoryName', props);
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
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRepository.repositoryMetadata.repositoryDescription', props);
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
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRepository.repositoryMetadata.defaultBranch', props);
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
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRepository.repositoryMetadata.lastModifiedDate', props);
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
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRepository.repositoryMetadata.creationDate', props);
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
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRepository.repositoryMetadata.cloneUrlHttp', props);
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
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRepository.repositoryMetadata.cloneUrlSsh', props);
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
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRepository.repositoryMetadata.Arn', props);
    return resource.getResponseField('repositoryMetadata.Arn') as unknown as string;
  }

}

export class CodeCommitResponsesFetchRepositoryTriggers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitGetRepositoryTriggersInput) {
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
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRepositoryTriggers.configurationId', props);
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
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRepositoryTriggers.triggers', props);
    return resource.getResponseField('triggers') as unknown as shapes.CodeCommitRepositoryTrigger[];
  }

}

export class CodeCommitResponsesListApprovalRuleTemplates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitListApprovalRuleTemplatesInput) {
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListApprovalRuleTemplates.approvalRuleTemplateNames', props);
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListApprovalRuleTemplates.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeCommitResponsesListAssociatedApprovalRuleTemplatesForRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryInput) {
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
          repositoryName: this.__input.repositoryName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssociatedApprovalRuleTemplatesForRepository.approvalRuleTemplateNames', props);
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
          repositoryName: this.__input.repositoryName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssociatedApprovalRuleTemplatesForRepository.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeCommitResponsesListBranches {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitListBranchesInput) {
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
          repositoryName: this.__input.repositoryName,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBranches.branches', props);
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
          repositoryName: this.__input.repositoryName,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBranches.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeCommitResponsesListPullRequests {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitListPullRequestsInput) {
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
          repositoryName: this.__input.repositoryName,
          authorArn: this.__input.authorArn,
          pullRequestStatus: this.__input.pullRequestStatus,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPullRequests.pullRequestIds', props);
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
          repositoryName: this.__input.repositoryName,
          authorArn: this.__input.authorArn,
          pullRequestStatus: this.__input.pullRequestStatus,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPullRequests.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeCommitResponsesListRepositories {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitListRepositoriesInput) {
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
          nextToken: this.__input.nextToken,
          sortBy: this.__input.sortBy,
          order: this.__input.order,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRepositories.repositories', props);
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
          nextToken: this.__input.nextToken,
          sortBy: this.__input.sortBy,
          order: this.__input.order,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRepositories.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeCommitResponsesListRepositoriesForApprovalRuleTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitListRepositoriesForApprovalRuleTemplateInput) {
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRepositoriesForApprovalRuleTemplate.repositoryNames', props);
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRepositoriesForApprovalRuleTemplate.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeCommitResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitListTagsForResourceInput) {
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
          resourceArn: this.__input.resourceArn,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
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
          resourceArn: this.__input.resourceArn,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeCommitResponsesMergeBranchesByFastForward {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitMergeBranchesByFastForwardInput) {
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
          repositoryName: this.__input.repositoryName,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          targetBranch: this.__input.targetBranch,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergeBranchesByFastForward.commitId', props);
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
          repositoryName: this.__input.repositoryName,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          targetBranch: this.__input.targetBranch,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergeBranchesByFastForward.treeId', props);
    return resource.getResponseField('treeId') as unknown as string;
  }

}

export class CodeCommitResponsesMergeBranchesBySquash {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitMergeBranchesBySquashInput) {
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
          repositoryName: this.__input.repositoryName,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          targetBranch: this.__input.targetBranch,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          authorName: this.__input.authorName,
          email: this.__input.email,
          commitMessage: this.__input.commitMessage,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.__input.conflictResolution?.replaceContents,
            deleteFiles: this.__input.conflictResolution?.deleteFiles,
            setFileModes: this.__input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergeBranchesBySquash.commitId', props);
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
          repositoryName: this.__input.repositoryName,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          targetBranch: this.__input.targetBranch,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          authorName: this.__input.authorName,
          email: this.__input.email,
          commitMessage: this.__input.commitMessage,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.__input.conflictResolution?.replaceContents,
            deleteFiles: this.__input.conflictResolution?.deleteFiles,
            setFileModes: this.__input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergeBranchesBySquash.treeId', props);
    return resource.getResponseField('treeId') as unknown as string;
  }

}

export class CodeCommitResponsesMergeBranchesByThreeWay {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitMergeBranchesByThreeWayInput) {
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
          repositoryName: this.__input.repositoryName,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          targetBranch: this.__input.targetBranch,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          authorName: this.__input.authorName,
          email: this.__input.email,
          commitMessage: this.__input.commitMessage,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.__input.conflictResolution?.replaceContents,
            deleteFiles: this.__input.conflictResolution?.deleteFiles,
            setFileModes: this.__input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergeBranchesByThreeWay.commitId', props);
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
          repositoryName: this.__input.repositoryName,
          sourceCommitSpecifier: this.__input.sourceCommitSpecifier,
          destinationCommitSpecifier: this.__input.destinationCommitSpecifier,
          targetBranch: this.__input.targetBranch,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          authorName: this.__input.authorName,
          email: this.__input.email,
          commitMessage: this.__input.commitMessage,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.__input.conflictResolution?.replaceContents,
            deleteFiles: this.__input.conflictResolution?.deleteFiles,
            setFileModes: this.__input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergeBranchesByThreeWay.treeId', props);
    return resource.getResponseField('treeId') as unknown as string;
  }

}

export class CodeCommitResponsesMergePullRequestByFastForward {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitMergePullRequestByFastForwardInput) {
  }

  public get pullRequest(): CodeCommitResponsesMergePullRequestByFastForwardPullRequest {
    return new CodeCommitResponsesMergePullRequestByFastForwardPullRequest(this.__scope, this.__resources, this.__input);
  }

}

export class CodeCommitResponsesMergePullRequestByFastForwardPullRequest {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitMergePullRequestByFastForwardInput) {
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          sourceCommitId: this.__input.sourceCommitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergePullRequestByFastForward.pullRequest.pullRequestId', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          sourceCommitId: this.__input.sourceCommitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergePullRequestByFastForward.pullRequest.title', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          sourceCommitId: this.__input.sourceCommitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergePullRequestByFastForward.pullRequest.description', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          sourceCommitId: this.__input.sourceCommitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergePullRequestByFastForward.pullRequest.lastActivityDate', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          sourceCommitId: this.__input.sourceCommitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergePullRequestByFastForward.pullRequest.creationDate', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          sourceCommitId: this.__input.sourceCommitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergePullRequestByFastForward.pullRequest.pullRequestStatus', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          sourceCommitId: this.__input.sourceCommitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergePullRequestByFastForward.pullRequest.authorArn', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          sourceCommitId: this.__input.sourceCommitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergePullRequestByFastForward.pullRequest.pullRequestTargets', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          sourceCommitId: this.__input.sourceCommitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergePullRequestByFastForward.pullRequest.clientRequestToken', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          sourceCommitId: this.__input.sourceCommitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergePullRequestByFastForward.pullRequest.revisionId', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          sourceCommitId: this.__input.sourceCommitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergePullRequestByFastForward.pullRequest.approvalRules', props);
    return resource.getResponseField('pullRequest.approvalRules') as unknown as shapes.CodeCommitApprovalRule[];
  }

}

export class CodeCommitResponsesMergePullRequestBySquash {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitMergePullRequestBySquashInput) {
  }

  public get pullRequest(): CodeCommitResponsesMergePullRequestBySquashPullRequest {
    return new CodeCommitResponsesMergePullRequestBySquashPullRequest(this.__scope, this.__resources, this.__input);
  }

}

export class CodeCommitResponsesMergePullRequestBySquashPullRequest {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitMergePullRequestBySquashInput) {
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          sourceCommitId: this.__input.sourceCommitId,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          commitMessage: this.__input.commitMessage,
          authorName: this.__input.authorName,
          email: this.__input.email,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.__input.conflictResolution?.replaceContents,
            deleteFiles: this.__input.conflictResolution?.deleteFiles,
            setFileModes: this.__input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergePullRequestBySquash.pullRequest.pullRequestId', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          sourceCommitId: this.__input.sourceCommitId,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          commitMessage: this.__input.commitMessage,
          authorName: this.__input.authorName,
          email: this.__input.email,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.__input.conflictResolution?.replaceContents,
            deleteFiles: this.__input.conflictResolution?.deleteFiles,
            setFileModes: this.__input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergePullRequestBySquash.pullRequest.title', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          sourceCommitId: this.__input.sourceCommitId,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          commitMessage: this.__input.commitMessage,
          authorName: this.__input.authorName,
          email: this.__input.email,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.__input.conflictResolution?.replaceContents,
            deleteFiles: this.__input.conflictResolution?.deleteFiles,
            setFileModes: this.__input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergePullRequestBySquash.pullRequest.description', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          sourceCommitId: this.__input.sourceCommitId,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          commitMessage: this.__input.commitMessage,
          authorName: this.__input.authorName,
          email: this.__input.email,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.__input.conflictResolution?.replaceContents,
            deleteFiles: this.__input.conflictResolution?.deleteFiles,
            setFileModes: this.__input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergePullRequestBySquash.pullRequest.lastActivityDate', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          sourceCommitId: this.__input.sourceCommitId,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          commitMessage: this.__input.commitMessage,
          authorName: this.__input.authorName,
          email: this.__input.email,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.__input.conflictResolution?.replaceContents,
            deleteFiles: this.__input.conflictResolution?.deleteFiles,
            setFileModes: this.__input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergePullRequestBySquash.pullRequest.creationDate', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          sourceCommitId: this.__input.sourceCommitId,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          commitMessage: this.__input.commitMessage,
          authorName: this.__input.authorName,
          email: this.__input.email,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.__input.conflictResolution?.replaceContents,
            deleteFiles: this.__input.conflictResolution?.deleteFiles,
            setFileModes: this.__input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergePullRequestBySquash.pullRequest.pullRequestStatus', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          sourceCommitId: this.__input.sourceCommitId,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          commitMessage: this.__input.commitMessage,
          authorName: this.__input.authorName,
          email: this.__input.email,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.__input.conflictResolution?.replaceContents,
            deleteFiles: this.__input.conflictResolution?.deleteFiles,
            setFileModes: this.__input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergePullRequestBySquash.pullRequest.authorArn', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          sourceCommitId: this.__input.sourceCommitId,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          commitMessage: this.__input.commitMessage,
          authorName: this.__input.authorName,
          email: this.__input.email,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.__input.conflictResolution?.replaceContents,
            deleteFiles: this.__input.conflictResolution?.deleteFiles,
            setFileModes: this.__input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergePullRequestBySquash.pullRequest.pullRequestTargets', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          sourceCommitId: this.__input.sourceCommitId,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          commitMessage: this.__input.commitMessage,
          authorName: this.__input.authorName,
          email: this.__input.email,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.__input.conflictResolution?.replaceContents,
            deleteFiles: this.__input.conflictResolution?.deleteFiles,
            setFileModes: this.__input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergePullRequestBySquash.pullRequest.clientRequestToken', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          sourceCommitId: this.__input.sourceCommitId,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          commitMessage: this.__input.commitMessage,
          authorName: this.__input.authorName,
          email: this.__input.email,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.__input.conflictResolution?.replaceContents,
            deleteFiles: this.__input.conflictResolution?.deleteFiles,
            setFileModes: this.__input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergePullRequestBySquash.pullRequest.revisionId', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          sourceCommitId: this.__input.sourceCommitId,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          commitMessage: this.__input.commitMessage,
          authorName: this.__input.authorName,
          email: this.__input.email,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.__input.conflictResolution?.replaceContents,
            deleteFiles: this.__input.conflictResolution?.deleteFiles,
            setFileModes: this.__input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergePullRequestBySquash.pullRequest.approvalRules', props);
    return resource.getResponseField('pullRequest.approvalRules') as unknown as shapes.CodeCommitApprovalRule[];
  }

}

export class CodeCommitResponsesMergePullRequestByThreeWay {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitMergePullRequestByThreeWayInput) {
  }

  public get pullRequest(): CodeCommitResponsesMergePullRequestByThreeWayPullRequest {
    return new CodeCommitResponsesMergePullRequestByThreeWayPullRequest(this.__scope, this.__resources, this.__input);
  }

}

export class CodeCommitResponsesMergePullRequestByThreeWayPullRequest {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitMergePullRequestByThreeWayInput) {
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          sourceCommitId: this.__input.sourceCommitId,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          commitMessage: this.__input.commitMessage,
          authorName: this.__input.authorName,
          email: this.__input.email,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.__input.conflictResolution?.replaceContents,
            deleteFiles: this.__input.conflictResolution?.deleteFiles,
            setFileModes: this.__input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergePullRequestByThreeWay.pullRequest.pullRequestId', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          sourceCommitId: this.__input.sourceCommitId,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          commitMessage: this.__input.commitMessage,
          authorName: this.__input.authorName,
          email: this.__input.email,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.__input.conflictResolution?.replaceContents,
            deleteFiles: this.__input.conflictResolution?.deleteFiles,
            setFileModes: this.__input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergePullRequestByThreeWay.pullRequest.title', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          sourceCommitId: this.__input.sourceCommitId,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          commitMessage: this.__input.commitMessage,
          authorName: this.__input.authorName,
          email: this.__input.email,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.__input.conflictResolution?.replaceContents,
            deleteFiles: this.__input.conflictResolution?.deleteFiles,
            setFileModes: this.__input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergePullRequestByThreeWay.pullRequest.description', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          sourceCommitId: this.__input.sourceCommitId,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          commitMessage: this.__input.commitMessage,
          authorName: this.__input.authorName,
          email: this.__input.email,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.__input.conflictResolution?.replaceContents,
            deleteFiles: this.__input.conflictResolution?.deleteFiles,
            setFileModes: this.__input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergePullRequestByThreeWay.pullRequest.lastActivityDate', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          sourceCommitId: this.__input.sourceCommitId,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          commitMessage: this.__input.commitMessage,
          authorName: this.__input.authorName,
          email: this.__input.email,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.__input.conflictResolution?.replaceContents,
            deleteFiles: this.__input.conflictResolution?.deleteFiles,
            setFileModes: this.__input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergePullRequestByThreeWay.pullRequest.creationDate', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          sourceCommitId: this.__input.sourceCommitId,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          commitMessage: this.__input.commitMessage,
          authorName: this.__input.authorName,
          email: this.__input.email,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.__input.conflictResolution?.replaceContents,
            deleteFiles: this.__input.conflictResolution?.deleteFiles,
            setFileModes: this.__input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergePullRequestByThreeWay.pullRequest.pullRequestStatus', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          sourceCommitId: this.__input.sourceCommitId,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          commitMessage: this.__input.commitMessage,
          authorName: this.__input.authorName,
          email: this.__input.email,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.__input.conflictResolution?.replaceContents,
            deleteFiles: this.__input.conflictResolution?.deleteFiles,
            setFileModes: this.__input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergePullRequestByThreeWay.pullRequest.authorArn', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          sourceCommitId: this.__input.sourceCommitId,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          commitMessage: this.__input.commitMessage,
          authorName: this.__input.authorName,
          email: this.__input.email,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.__input.conflictResolution?.replaceContents,
            deleteFiles: this.__input.conflictResolution?.deleteFiles,
            setFileModes: this.__input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergePullRequestByThreeWay.pullRequest.pullRequestTargets', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          sourceCommitId: this.__input.sourceCommitId,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          commitMessage: this.__input.commitMessage,
          authorName: this.__input.authorName,
          email: this.__input.email,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.__input.conflictResolution?.replaceContents,
            deleteFiles: this.__input.conflictResolution?.deleteFiles,
            setFileModes: this.__input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergePullRequestByThreeWay.pullRequest.clientRequestToken', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          sourceCommitId: this.__input.sourceCommitId,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          commitMessage: this.__input.commitMessage,
          authorName: this.__input.authorName,
          email: this.__input.email,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.__input.conflictResolution?.replaceContents,
            deleteFiles: this.__input.conflictResolution?.deleteFiles,
            setFileModes: this.__input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergePullRequestByThreeWay.pullRequest.revisionId', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          sourceCommitId: this.__input.sourceCommitId,
          conflictDetailLevel: this.__input.conflictDetailLevel,
          conflictResolutionStrategy: this.__input.conflictResolutionStrategy,
          commitMessage: this.__input.commitMessage,
          authorName: this.__input.authorName,
          email: this.__input.email,
          keepEmptyFolders: this.__input.keepEmptyFolders,
          conflictResolution: {
            replaceContents: this.__input.conflictResolution?.replaceContents,
            deleteFiles: this.__input.conflictResolution?.deleteFiles,
            setFileModes: this.__input.conflictResolution?.setFileModes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergePullRequestByThreeWay.pullRequest.approvalRules', props);
    return resource.getResponseField('pullRequest.approvalRules') as unknown as shapes.CodeCommitApprovalRule[];
  }

}

export class CodeCommitResponsesPostCommentForComparedCommit {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitPostCommentForComparedCommitInput) {
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
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForComparedCommit.repositoryName', props);
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
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForComparedCommit.beforeCommitId', props);
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
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForComparedCommit.afterCommitId', props);
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
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForComparedCommit.beforeBlobId', props);
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
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForComparedCommit.afterBlobId', props);
    return resource.getResponseField('afterBlobId') as unknown as string;
  }

  public get location(): CodeCommitResponsesPostCommentForComparedCommitLocation {
    return new CodeCommitResponsesPostCommentForComparedCommitLocation(this.__scope, this.__resources, this.__input);
  }

  public get comment(): CodeCommitResponsesPostCommentForComparedCommitComment {
    return new CodeCommitResponsesPostCommentForComparedCommitComment(this.__scope, this.__resources, this.__input);
  }

}

export class CodeCommitResponsesPostCommentForComparedCommitLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitPostCommentForComparedCommitInput) {
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
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForComparedCommit.location.filePath', props);
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
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForComparedCommit.location.filePosition', props);
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
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForComparedCommit.location.relativeFileVersion', props);
    return resource.getResponseField('location.relativeFileVersion') as unknown as string;
  }

}

export class CodeCommitResponsesPostCommentForComparedCommitComment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitPostCommentForComparedCommitInput) {
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
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForComparedCommit.comment.commentId', props);
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
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForComparedCommit.comment.content', props);
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
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForComparedCommit.comment.inReplyTo', props);
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
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForComparedCommit.comment.creationDate', props);
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
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForComparedCommit.comment.lastModifiedDate', props);
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
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForComparedCommit.comment.authorArn', props);
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
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForComparedCommit.comment.deleted', props);
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
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForComparedCommit.comment.clientRequestToken', props);
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
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForComparedCommit.comment.callerReactions', props);
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
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForComparedCommit.comment.reactionCounts', props);
    return resource.getResponseField('comment.reactionCounts') as unknown as Record<string, number>;
  }

}

export class CodeCommitResponsesPostCommentForPullRequest {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitPostCommentForPullRequestInput) {
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForPullRequest.repositoryName', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForPullRequest.pullRequestId', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForPullRequest.beforeCommitId', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForPullRequest.afterCommitId', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForPullRequest.beforeBlobId', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForPullRequest.afterBlobId', props);
    return resource.getResponseField('afterBlobId') as unknown as string;
  }

  public get location(): CodeCommitResponsesPostCommentForPullRequestLocation {
    return new CodeCommitResponsesPostCommentForPullRequestLocation(this.__scope, this.__resources, this.__input);
  }

  public get comment(): CodeCommitResponsesPostCommentForPullRequestComment {
    return new CodeCommitResponsesPostCommentForPullRequestComment(this.__scope, this.__resources, this.__input);
  }

}

export class CodeCommitResponsesPostCommentForPullRequestLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitPostCommentForPullRequestInput) {
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForPullRequest.location.filePath', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForPullRequest.location.filePosition', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForPullRequest.location.relativeFileVersion', props);
    return resource.getResponseField('location.relativeFileVersion') as unknown as string;
  }

}

export class CodeCommitResponsesPostCommentForPullRequestComment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitPostCommentForPullRequestInput) {
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForPullRequest.comment.commentId', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForPullRequest.comment.content', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForPullRequest.comment.inReplyTo', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForPullRequest.comment.creationDate', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForPullRequest.comment.lastModifiedDate', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForPullRequest.comment.authorArn', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForPullRequest.comment.deleted', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForPullRequest.comment.clientRequestToken', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForPullRequest.comment.callerReactions', props);
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
          pullRequestId: this.__input.pullRequestId,
          repositoryName: this.__input.repositoryName,
          beforeCommitId: this.__input.beforeCommitId,
          afterCommitId: this.__input.afterCommitId,
          location: {
            filePath: this.__input.location?.filePath,
            filePosition: this.__input.location?.filePosition,
            relativeFileVersion: this.__input.location?.relativeFileVersion,
          },
          content: this.__input.content,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentForPullRequest.comment.reactionCounts', props);
    return resource.getResponseField('comment.reactionCounts') as unknown as Record<string, number>;
  }

}

export class CodeCommitResponsesPostCommentReply {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitPostCommentReplyInput) {
  }

  public get comment(): CodeCommitResponsesPostCommentReplyComment {
    return new CodeCommitResponsesPostCommentReplyComment(this.__scope, this.__resources, this.__input);
  }

}

export class CodeCommitResponsesPostCommentReplyComment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitPostCommentReplyInput) {
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
          inReplyTo: this.__input.inReplyTo,
          clientRequestToken: this.__input.clientRequestToken,
          content: this.__input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentReply.comment.commentId', props);
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
          inReplyTo: this.__input.inReplyTo,
          clientRequestToken: this.__input.clientRequestToken,
          content: this.__input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentReply.comment.content', props);
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
          inReplyTo: this.__input.inReplyTo,
          clientRequestToken: this.__input.clientRequestToken,
          content: this.__input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentReply.comment.inReplyTo', props);
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
          inReplyTo: this.__input.inReplyTo,
          clientRequestToken: this.__input.clientRequestToken,
          content: this.__input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentReply.comment.creationDate', props);
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
          inReplyTo: this.__input.inReplyTo,
          clientRequestToken: this.__input.clientRequestToken,
          content: this.__input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentReply.comment.lastModifiedDate', props);
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
          inReplyTo: this.__input.inReplyTo,
          clientRequestToken: this.__input.clientRequestToken,
          content: this.__input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentReply.comment.authorArn', props);
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
          inReplyTo: this.__input.inReplyTo,
          clientRequestToken: this.__input.clientRequestToken,
          content: this.__input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentReply.comment.deleted', props);
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
          inReplyTo: this.__input.inReplyTo,
          clientRequestToken: this.__input.clientRequestToken,
          content: this.__input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentReply.comment.clientRequestToken', props);
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
          inReplyTo: this.__input.inReplyTo,
          clientRequestToken: this.__input.clientRequestToken,
          content: this.__input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentReply.comment.callerReactions', props);
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
          inReplyTo: this.__input.inReplyTo,
          clientRequestToken: this.__input.clientRequestToken,
          content: this.__input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PostCommentReply.comment.reactionCounts', props);
    return resource.getResponseField('comment.reactionCounts') as unknown as Record<string, number>;
  }

}

export class CodeCommitResponsesPutFile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitPutFileInput) {
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
          repositoryName: this.__input.repositoryName,
          branchName: this.__input.branchName,
          fileContent: {
          },
          filePath: this.__input.filePath,
          fileMode: this.__input.fileMode,
          parentCommitId: this.__input.parentCommitId,
          commitMessage: this.__input.commitMessage,
          name: this.__input.name,
          email: this.__input.email,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutFile.commitId', props);
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
          repositoryName: this.__input.repositoryName,
          branchName: this.__input.branchName,
          fileContent: {
          },
          filePath: this.__input.filePath,
          fileMode: this.__input.fileMode,
          parentCommitId: this.__input.parentCommitId,
          commitMessage: this.__input.commitMessage,
          name: this.__input.name,
          email: this.__input.email,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutFile.blobId', props);
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
          repositoryName: this.__input.repositoryName,
          branchName: this.__input.branchName,
          fileContent: {
          },
          filePath: this.__input.filePath,
          fileMode: this.__input.fileMode,
          parentCommitId: this.__input.parentCommitId,
          commitMessage: this.__input.commitMessage,
          name: this.__input.name,
          email: this.__input.email,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutFile.treeId', props);
    return resource.getResponseField('treeId') as unknown as string;
  }

}

export class CodeCommitResponsesPutRepositoryTriggers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitPutRepositoryTriggersInput) {
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
          repositoryName: this.__input.repositoryName,
          triggers: this.__input.triggers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRepositoryTriggers.configurationId', props);
    return resource.getResponseField('configurationId') as unknown as string;
  }

}

export class CodeCommitResponsesTestRepositoryTriggers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitTestRepositoryTriggersInput) {
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
          repositoryName: this.__input.repositoryName,
          triggers: this.__input.triggers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestRepositoryTriggers.successfulExecutions', props);
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
          repositoryName: this.__input.repositoryName,
          triggers: this.__input.triggers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestRepositoryTriggers.failedExecutions', props);
    return resource.getResponseField('failedExecutions') as unknown as shapes.CodeCommitRepositoryTriggerExecutionFailure[];
  }

}

export class CodeCommitResponsesUpdateApprovalRuleTemplateContent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitUpdateApprovalRuleTemplateContentInput) {
  }

  public get approvalRuleTemplate(): CodeCommitResponsesUpdateApprovalRuleTemplateContentApprovalRuleTemplate {
    return new CodeCommitResponsesUpdateApprovalRuleTemplateContentApprovalRuleTemplate(this.__scope, this.__resources, this.__input);
  }

}

export class CodeCommitResponsesUpdateApprovalRuleTemplateContentApprovalRuleTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitUpdateApprovalRuleTemplateContentInput) {
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
          newRuleContent: this.__input.newRuleContent,
          existingRuleContentSha256: this.__input.existingRuleContentSha256,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApprovalRuleTemplateContent.approvalRuleTemplate.approvalRuleTemplateId', props);
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
          newRuleContent: this.__input.newRuleContent,
          existingRuleContentSha256: this.__input.existingRuleContentSha256,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApprovalRuleTemplateContent.approvalRuleTemplate.approvalRuleTemplateName', props);
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
          newRuleContent: this.__input.newRuleContent,
          existingRuleContentSha256: this.__input.existingRuleContentSha256,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApprovalRuleTemplateContent.approvalRuleTemplate.approvalRuleTemplateDescription', props);
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
          newRuleContent: this.__input.newRuleContent,
          existingRuleContentSha256: this.__input.existingRuleContentSha256,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApprovalRuleTemplateContent.approvalRuleTemplate.approvalRuleTemplateContent', props);
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
          newRuleContent: this.__input.newRuleContent,
          existingRuleContentSha256: this.__input.existingRuleContentSha256,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApprovalRuleTemplateContent.approvalRuleTemplate.ruleContentSha256', props);
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
          newRuleContent: this.__input.newRuleContent,
          existingRuleContentSha256: this.__input.existingRuleContentSha256,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApprovalRuleTemplateContent.approvalRuleTemplate.lastModifiedDate', props);
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
          newRuleContent: this.__input.newRuleContent,
          existingRuleContentSha256: this.__input.existingRuleContentSha256,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApprovalRuleTemplateContent.approvalRuleTemplate.creationDate', props);
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
          newRuleContent: this.__input.newRuleContent,
          existingRuleContentSha256: this.__input.existingRuleContentSha256,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApprovalRuleTemplateContent.approvalRuleTemplate.lastModifiedUser', props);
    return resource.getResponseField('approvalRuleTemplate.lastModifiedUser') as unknown as string;
  }

}

export class CodeCommitResponsesUpdateApprovalRuleTemplateDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitUpdateApprovalRuleTemplateDescriptionInput) {
  }

  public get approvalRuleTemplate(): CodeCommitResponsesUpdateApprovalRuleTemplateDescriptionApprovalRuleTemplate {
    return new CodeCommitResponsesUpdateApprovalRuleTemplateDescriptionApprovalRuleTemplate(this.__scope, this.__resources, this.__input);
  }

}

export class CodeCommitResponsesUpdateApprovalRuleTemplateDescriptionApprovalRuleTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitUpdateApprovalRuleTemplateDescriptionInput) {
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
          approvalRuleTemplateDescription: this.__input.approvalRuleTemplateDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApprovalRuleTemplateDescription.approvalRuleTemplate.approvalRuleTemplateId', props);
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
          approvalRuleTemplateDescription: this.__input.approvalRuleTemplateDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApprovalRuleTemplateDescription.approvalRuleTemplate.approvalRuleTemplateName', props);
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
          approvalRuleTemplateDescription: this.__input.approvalRuleTemplateDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApprovalRuleTemplateDescription.approvalRuleTemplate.approvalRuleTemplateDescription', props);
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
          approvalRuleTemplateDescription: this.__input.approvalRuleTemplateDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApprovalRuleTemplateDescription.approvalRuleTemplate.approvalRuleTemplateContent', props);
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
          approvalRuleTemplateDescription: this.__input.approvalRuleTemplateDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApprovalRuleTemplateDescription.approvalRuleTemplate.ruleContentSha256', props);
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
          approvalRuleTemplateDescription: this.__input.approvalRuleTemplateDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApprovalRuleTemplateDescription.approvalRuleTemplate.lastModifiedDate', props);
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
          approvalRuleTemplateDescription: this.__input.approvalRuleTemplateDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApprovalRuleTemplateDescription.approvalRuleTemplate.creationDate', props);
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
          approvalRuleTemplateName: this.__input.approvalRuleTemplateName,
          approvalRuleTemplateDescription: this.__input.approvalRuleTemplateDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApprovalRuleTemplateDescription.approvalRuleTemplate.lastModifiedUser', props);
    return resource.getResponseField('approvalRuleTemplate.lastModifiedUser') as unknown as string;
  }

}

export class CodeCommitResponsesUpdateApprovalRuleTemplateName {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitUpdateApprovalRuleTemplateNameInput) {
  }

  public get approvalRuleTemplate(): CodeCommitResponsesUpdateApprovalRuleTemplateNameApprovalRuleTemplate {
    return new CodeCommitResponsesUpdateApprovalRuleTemplateNameApprovalRuleTemplate(this.__scope, this.__resources, this.__input);
  }

}

export class CodeCommitResponsesUpdateApprovalRuleTemplateNameApprovalRuleTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitUpdateApprovalRuleTemplateNameInput) {
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
          oldApprovalRuleTemplateName: this.__input.oldApprovalRuleTemplateName,
          newApprovalRuleTemplateName: this.__input.newApprovalRuleTemplateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApprovalRuleTemplateName.approvalRuleTemplate.approvalRuleTemplateId', props);
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
          oldApprovalRuleTemplateName: this.__input.oldApprovalRuleTemplateName,
          newApprovalRuleTemplateName: this.__input.newApprovalRuleTemplateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApprovalRuleTemplateName.approvalRuleTemplate.approvalRuleTemplateName', props);
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
          oldApprovalRuleTemplateName: this.__input.oldApprovalRuleTemplateName,
          newApprovalRuleTemplateName: this.__input.newApprovalRuleTemplateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApprovalRuleTemplateName.approvalRuleTemplate.approvalRuleTemplateDescription', props);
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
          oldApprovalRuleTemplateName: this.__input.oldApprovalRuleTemplateName,
          newApprovalRuleTemplateName: this.__input.newApprovalRuleTemplateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApprovalRuleTemplateName.approvalRuleTemplate.approvalRuleTemplateContent', props);
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
          oldApprovalRuleTemplateName: this.__input.oldApprovalRuleTemplateName,
          newApprovalRuleTemplateName: this.__input.newApprovalRuleTemplateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApprovalRuleTemplateName.approvalRuleTemplate.ruleContentSha256', props);
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
          oldApprovalRuleTemplateName: this.__input.oldApprovalRuleTemplateName,
          newApprovalRuleTemplateName: this.__input.newApprovalRuleTemplateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApprovalRuleTemplateName.approvalRuleTemplate.lastModifiedDate', props);
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
          oldApprovalRuleTemplateName: this.__input.oldApprovalRuleTemplateName,
          newApprovalRuleTemplateName: this.__input.newApprovalRuleTemplateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApprovalRuleTemplateName.approvalRuleTemplate.creationDate', props);
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
          oldApprovalRuleTemplateName: this.__input.oldApprovalRuleTemplateName,
          newApprovalRuleTemplateName: this.__input.newApprovalRuleTemplateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApprovalRuleTemplateName.approvalRuleTemplate.lastModifiedUser', props);
    return resource.getResponseField('approvalRuleTemplate.lastModifiedUser') as unknown as string;
  }

}

export class CodeCommitResponsesUpdateComment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitUpdateCommentInput) {
  }

  public get comment(): CodeCommitResponsesUpdateCommentComment {
    return new CodeCommitResponsesUpdateCommentComment(this.__scope, this.__resources, this.__input);
  }

}

export class CodeCommitResponsesUpdateCommentComment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitUpdateCommentInput) {
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
          commentId: this.__input.commentId,
          content: this.__input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateComment.comment.commentId', props);
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
          commentId: this.__input.commentId,
          content: this.__input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateComment.comment.content', props);
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
          commentId: this.__input.commentId,
          content: this.__input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateComment.comment.inReplyTo', props);
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
          commentId: this.__input.commentId,
          content: this.__input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateComment.comment.creationDate', props);
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
          commentId: this.__input.commentId,
          content: this.__input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateComment.comment.lastModifiedDate', props);
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
          commentId: this.__input.commentId,
          content: this.__input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateComment.comment.authorArn', props);
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
          commentId: this.__input.commentId,
          content: this.__input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateComment.comment.deleted', props);
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
          commentId: this.__input.commentId,
          content: this.__input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateComment.comment.clientRequestToken', props);
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
          commentId: this.__input.commentId,
          content: this.__input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateComment.comment.callerReactions', props);
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
          commentId: this.__input.commentId,
          content: this.__input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateComment.comment.reactionCounts', props);
    return resource.getResponseField('comment.reactionCounts') as unknown as Record<string, number>;
  }

}

export class CodeCommitResponsesUpdatePullRequestApprovalRuleContent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitUpdatePullRequestApprovalRuleContentInput) {
  }

  public get approvalRule(): CodeCommitResponsesUpdatePullRequestApprovalRuleContentApprovalRule {
    return new CodeCommitResponsesUpdatePullRequestApprovalRuleContentApprovalRule(this.__scope, this.__resources, this.__input);
  }

}

export class CodeCommitResponsesUpdatePullRequestApprovalRuleContentApprovalRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitUpdatePullRequestApprovalRuleContentInput) {
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
          pullRequestId: this.__input.pullRequestId,
          approvalRuleName: this.__input.approvalRuleName,
          existingRuleContentSha256: this.__input.existingRuleContentSha256,
          newRuleContent: this.__input.newRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestApprovalRuleContent.approvalRule.approvalRuleId', props);
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
          pullRequestId: this.__input.pullRequestId,
          approvalRuleName: this.__input.approvalRuleName,
          existingRuleContentSha256: this.__input.existingRuleContentSha256,
          newRuleContent: this.__input.newRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestApprovalRuleContent.approvalRule.approvalRuleName', props);
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
          pullRequestId: this.__input.pullRequestId,
          approvalRuleName: this.__input.approvalRuleName,
          existingRuleContentSha256: this.__input.existingRuleContentSha256,
          newRuleContent: this.__input.newRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestApprovalRuleContent.approvalRule.approvalRuleContent', props);
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
          pullRequestId: this.__input.pullRequestId,
          approvalRuleName: this.__input.approvalRuleName,
          existingRuleContentSha256: this.__input.existingRuleContentSha256,
          newRuleContent: this.__input.newRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestApprovalRuleContent.approvalRule.ruleContentSha256', props);
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
          pullRequestId: this.__input.pullRequestId,
          approvalRuleName: this.__input.approvalRuleName,
          existingRuleContentSha256: this.__input.existingRuleContentSha256,
          newRuleContent: this.__input.newRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestApprovalRuleContent.approvalRule.lastModifiedDate', props);
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
          pullRequestId: this.__input.pullRequestId,
          approvalRuleName: this.__input.approvalRuleName,
          existingRuleContentSha256: this.__input.existingRuleContentSha256,
          newRuleContent: this.__input.newRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestApprovalRuleContent.approvalRule.creationDate', props);
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
          pullRequestId: this.__input.pullRequestId,
          approvalRuleName: this.__input.approvalRuleName,
          existingRuleContentSha256: this.__input.existingRuleContentSha256,
          newRuleContent: this.__input.newRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestApprovalRuleContent.approvalRule.lastModifiedUser', props);
    return resource.getResponseField('approvalRule.lastModifiedUser') as unknown as string;
  }

  public get originApprovalRuleTemplate(): CodeCommitResponsesUpdatePullRequestApprovalRuleContentApprovalRuleOriginApprovalRuleTemplate {
    return new CodeCommitResponsesUpdatePullRequestApprovalRuleContentApprovalRuleOriginApprovalRuleTemplate(this.__scope, this.__resources, this.__input);
  }

}

export class CodeCommitResponsesUpdatePullRequestApprovalRuleContentApprovalRuleOriginApprovalRuleTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitUpdatePullRequestApprovalRuleContentInput) {
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
          pullRequestId: this.__input.pullRequestId,
          approvalRuleName: this.__input.approvalRuleName,
          existingRuleContentSha256: this.__input.existingRuleContentSha256,
          newRuleContent: this.__input.newRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestApprovalRuleContent.approvalRule.originApprovalRuleTemplate.approvalRuleTemplateId', props);
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
          pullRequestId: this.__input.pullRequestId,
          approvalRuleName: this.__input.approvalRuleName,
          existingRuleContentSha256: this.__input.existingRuleContentSha256,
          newRuleContent: this.__input.newRuleContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestApprovalRuleContent.approvalRule.originApprovalRuleTemplate.approvalRuleTemplateName', props);
    return resource.getResponseField('approvalRule.originApprovalRuleTemplate.approvalRuleTemplateName') as unknown as string;
  }

}

export class CodeCommitResponsesUpdatePullRequestDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitUpdatePullRequestDescriptionInput) {
  }

  public get pullRequest(): CodeCommitResponsesUpdatePullRequestDescriptionPullRequest {
    return new CodeCommitResponsesUpdatePullRequestDescriptionPullRequest(this.__scope, this.__resources, this.__input);
  }

}

export class CodeCommitResponsesUpdatePullRequestDescriptionPullRequest {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitUpdatePullRequestDescriptionInput) {
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
          pullRequestId: this.__input.pullRequestId,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestDescription.pullRequest.pullRequestId', props);
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
          pullRequestId: this.__input.pullRequestId,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestDescription.pullRequest.title', props);
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
          pullRequestId: this.__input.pullRequestId,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestDescription.pullRequest.description', props);
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
          pullRequestId: this.__input.pullRequestId,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestDescription.pullRequest.lastActivityDate', props);
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
          pullRequestId: this.__input.pullRequestId,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestDescription.pullRequest.creationDate', props);
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
          pullRequestId: this.__input.pullRequestId,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestDescription.pullRequest.pullRequestStatus', props);
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
          pullRequestId: this.__input.pullRequestId,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestDescription.pullRequest.authorArn', props);
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
          pullRequestId: this.__input.pullRequestId,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestDescription.pullRequest.pullRequestTargets', props);
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
          pullRequestId: this.__input.pullRequestId,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestDescription.pullRequest.clientRequestToken', props);
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
          pullRequestId: this.__input.pullRequestId,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestDescription.pullRequest.revisionId', props);
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
          pullRequestId: this.__input.pullRequestId,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestDescription.pullRequest.approvalRules', props);
    return resource.getResponseField('pullRequest.approvalRules') as unknown as shapes.CodeCommitApprovalRule[];
  }

}

export class CodeCommitResponsesUpdatePullRequestStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitUpdatePullRequestStatusInput) {
  }

  public get pullRequest(): CodeCommitResponsesUpdatePullRequestStatusPullRequest {
    return new CodeCommitResponsesUpdatePullRequestStatusPullRequest(this.__scope, this.__resources, this.__input);
  }

}

export class CodeCommitResponsesUpdatePullRequestStatusPullRequest {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitUpdatePullRequestStatusInput) {
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
          pullRequestId: this.__input.pullRequestId,
          pullRequestStatus: this.__input.pullRequestStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestStatus.pullRequest.pullRequestId', props);
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
          pullRequestId: this.__input.pullRequestId,
          pullRequestStatus: this.__input.pullRequestStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestStatus.pullRequest.title', props);
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
          pullRequestId: this.__input.pullRequestId,
          pullRequestStatus: this.__input.pullRequestStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestStatus.pullRequest.description', props);
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
          pullRequestId: this.__input.pullRequestId,
          pullRequestStatus: this.__input.pullRequestStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestStatus.pullRequest.lastActivityDate', props);
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
          pullRequestId: this.__input.pullRequestId,
          pullRequestStatus: this.__input.pullRequestStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestStatus.pullRequest.creationDate', props);
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
          pullRequestId: this.__input.pullRequestId,
          pullRequestStatus: this.__input.pullRequestStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestStatus.pullRequest.pullRequestStatus', props);
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
          pullRequestId: this.__input.pullRequestId,
          pullRequestStatus: this.__input.pullRequestStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestStatus.pullRequest.authorArn', props);
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
          pullRequestId: this.__input.pullRequestId,
          pullRequestStatus: this.__input.pullRequestStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestStatus.pullRequest.pullRequestTargets', props);
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
          pullRequestId: this.__input.pullRequestId,
          pullRequestStatus: this.__input.pullRequestStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestStatus.pullRequest.clientRequestToken', props);
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
          pullRequestId: this.__input.pullRequestId,
          pullRequestStatus: this.__input.pullRequestStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestStatus.pullRequest.revisionId', props);
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
          pullRequestId: this.__input.pullRequestId,
          pullRequestStatus: this.__input.pullRequestStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestStatus.pullRequest.approvalRules', props);
    return resource.getResponseField('pullRequest.approvalRules') as unknown as shapes.CodeCommitApprovalRule[];
  }

}

export class CodeCommitResponsesUpdatePullRequestTitle {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitUpdatePullRequestTitleInput) {
  }

  public get pullRequest(): CodeCommitResponsesUpdatePullRequestTitlePullRequest {
    return new CodeCommitResponsesUpdatePullRequestTitlePullRequest(this.__scope, this.__resources, this.__input);
  }

}

export class CodeCommitResponsesUpdatePullRequestTitlePullRequest {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeCommitUpdatePullRequestTitleInput) {
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
          pullRequestId: this.__input.pullRequestId,
          title: this.__input.title,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestTitle.pullRequest.pullRequestId', props);
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
          pullRequestId: this.__input.pullRequestId,
          title: this.__input.title,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestTitle.pullRequest.title', props);
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
          pullRequestId: this.__input.pullRequestId,
          title: this.__input.title,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestTitle.pullRequest.description', props);
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
          pullRequestId: this.__input.pullRequestId,
          title: this.__input.title,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestTitle.pullRequest.lastActivityDate', props);
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
          pullRequestId: this.__input.pullRequestId,
          title: this.__input.title,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestTitle.pullRequest.creationDate', props);
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
          pullRequestId: this.__input.pullRequestId,
          title: this.__input.title,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestTitle.pullRequest.pullRequestStatus', props);
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
          pullRequestId: this.__input.pullRequestId,
          title: this.__input.title,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestTitle.pullRequest.authorArn', props);
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
          pullRequestId: this.__input.pullRequestId,
          title: this.__input.title,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestTitle.pullRequest.pullRequestTargets', props);
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
          pullRequestId: this.__input.pullRequestId,
          title: this.__input.title,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestTitle.pullRequest.clientRequestToken', props);
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
          pullRequestId: this.__input.pullRequestId,
          title: this.__input.title,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestTitle.pullRequest.revisionId', props);
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
          pullRequestId: this.__input.pullRequestId,
          title: this.__input.title,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePullRequestTitle.pullRequest.approvalRules', props);
    return resource.getResponseField('pullRequest.approvalRules') as unknown as shapes.CodeCommitApprovalRule[];
  }

}

