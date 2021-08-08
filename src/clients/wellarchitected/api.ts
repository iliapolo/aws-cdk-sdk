import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class WellArchitectedClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateLenses(input: shapes.WellArchitectedAssociateLensesInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateLenses',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.AssociateLenses'),
        parameters: {
          WorkloadId: input.workloadId,
          LensAliases: input.lensAliases,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateLenses', props);
  }

  public createMilestone(input: shapes.WellArchitectedCreateMilestoneInput): WellArchitectedResponsesCreateMilestone {
    return new WellArchitectedResponsesCreateMilestone(this, this.__resources, input);
  }

  public createWorkload(input: shapes.WellArchitectedCreateWorkloadInput): WellArchitectedResponsesCreateWorkload {
    return new WellArchitectedResponsesCreateWorkload(this, this.__resources, input);
  }

  public createWorkloadShare(input: shapes.WellArchitectedCreateWorkloadShareInput): WellArchitectedResponsesCreateWorkloadShare {
    return new WellArchitectedResponsesCreateWorkloadShare(this, this.__resources, input);
  }

  public deleteWorkload(input: shapes.WellArchitectedDeleteWorkloadInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.DeleteWorkload'),
        parameters: {
          WorkloadId: input.workloadId,
          ClientRequestToken: input.clientRequestToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteWorkload', props);
  }

  public deleteWorkloadShare(input: shapes.WellArchitectedDeleteWorkloadShareInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteWorkloadShare',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.DeleteWorkloadShare'),
        parameters: {
          ShareId: input.shareId,
          WorkloadId: input.workloadId,
          ClientRequestToken: input.clientRequestToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteWorkloadShare', props);
  }

  public disassociateLenses(input: shapes.WellArchitectedDisassociateLensesInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateLenses',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.DisassociateLenses'),
        parameters: {
          WorkloadId: input.workloadId,
          LensAliases: input.lensAliases,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateLenses', props);
  }

  public fetchAnswer(input: shapes.WellArchitectedGetAnswerInput): WellArchitectedResponsesFetchAnswer {
    return new WellArchitectedResponsesFetchAnswer(this, this.__resources, input);
  }

  public fetchLensReview(input: shapes.WellArchitectedGetLensReviewInput): WellArchitectedResponsesFetchLensReview {
    return new WellArchitectedResponsesFetchLensReview(this, this.__resources, input);
  }

  public fetchLensReviewReport(input: shapes.WellArchitectedGetLensReviewReportInput): WellArchitectedResponsesFetchLensReviewReport {
    return new WellArchitectedResponsesFetchLensReviewReport(this, this.__resources, input);
  }

  public fetchLensVersionDifference(input: shapes.WellArchitectedGetLensVersionDifferenceInput): WellArchitectedResponsesFetchLensVersionDifference {
    return new WellArchitectedResponsesFetchLensVersionDifference(this, this.__resources, input);
  }

  public fetchMilestone(input: shapes.WellArchitectedGetMilestoneInput): WellArchitectedResponsesFetchMilestone {
    return new WellArchitectedResponsesFetchMilestone(this, this.__resources, input);
  }

  public fetchWorkload(input: shapes.WellArchitectedGetWorkloadInput): WellArchitectedResponsesFetchWorkload {
    return new WellArchitectedResponsesFetchWorkload(this, this.__resources, input);
  }

  public listAnswers(input: shapes.WellArchitectedListAnswersInput): WellArchitectedResponsesListAnswers {
    return new WellArchitectedResponsesListAnswers(this, this.__resources, input);
  }

  public listLensReviewImprovements(input: shapes.WellArchitectedListLensReviewImprovementsInput): WellArchitectedResponsesListLensReviewImprovements {
    return new WellArchitectedResponsesListLensReviewImprovements(this, this.__resources, input);
  }

  public listLensReviews(input: shapes.WellArchitectedListLensReviewsInput): WellArchitectedResponsesListLensReviews {
    return new WellArchitectedResponsesListLensReviews(this, this.__resources, input);
  }

  public listLenses(input: shapes.WellArchitectedListLensesInput): WellArchitectedResponsesListLenses {
    return new WellArchitectedResponsesListLenses(this, this.__resources, input);
  }

  public listMilestones(input: shapes.WellArchitectedListMilestonesInput): WellArchitectedResponsesListMilestones {
    return new WellArchitectedResponsesListMilestones(this, this.__resources, input);
  }

  public listNotifications(input: shapes.WellArchitectedListNotificationsInput): WellArchitectedResponsesListNotifications {
    return new WellArchitectedResponsesListNotifications(this, this.__resources, input);
  }

  public listShareInvitations(input: shapes.WellArchitectedListShareInvitationsInput): WellArchitectedResponsesListShareInvitations {
    return new WellArchitectedResponsesListShareInvitations(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.WellArchitectedListTagsForResourceInput): WellArchitectedResponsesListTagsForResource {
    return new WellArchitectedResponsesListTagsForResource(this, this.__resources, input);
  }

  public listWorkloadShares(input: shapes.WellArchitectedListWorkloadSharesInput): WellArchitectedResponsesListWorkloadShares {
    return new WellArchitectedResponsesListWorkloadShares(this, this.__resources, input);
  }

  public listWorkloads(input: shapes.WellArchitectedListWorkloadsInput): WellArchitectedResponsesListWorkloads {
    return new WellArchitectedResponsesListWorkloads(this, this.__resources, input);
  }

  public tagResource(input: shapes.WellArchitectedTagResourceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.TagResource'),
        parameters: {
          WorkloadArn: input.workloadArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.WellArchitectedUntagResourceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UntagResource'),
        parameters: {
          WorkloadArn: input.workloadArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateAnswer(input: shapes.WellArchitectedUpdateAnswerInput): WellArchitectedResponsesUpdateAnswer {
    return new WellArchitectedResponsesUpdateAnswer(this, this.__resources, input);
  }

  public updateLensReview(input: shapes.WellArchitectedUpdateLensReviewInput): WellArchitectedResponsesUpdateLensReview {
    return new WellArchitectedResponsesUpdateLensReview(this, this.__resources, input);
  }

  public updateShareInvitation(input: shapes.WellArchitectedUpdateShareInvitationInput): WellArchitectedResponsesUpdateShareInvitation {
    return new WellArchitectedResponsesUpdateShareInvitation(this, this.__resources, input);
  }

  public updateWorkload(input: shapes.WellArchitectedUpdateWorkloadInput): WellArchitectedResponsesUpdateWorkload {
    return new WellArchitectedResponsesUpdateWorkload(this, this.__resources, input);
  }

  public updateWorkloadShare(input: shapes.WellArchitectedUpdateWorkloadShareInput): WellArchitectedResponsesUpdateWorkloadShare {
    return new WellArchitectedResponsesUpdateWorkloadShare(this, this.__resources, input);
  }

  public upgradeLensReview(input: shapes.WellArchitectedUpgradeLensReviewInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'upgradeLensReview',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpgradeLensReview'),
        parameters: {
          WorkloadId: input.workloadId,
          LensAlias: input.lensAlias,
          MilestoneName: input.milestoneName,
          ClientRequestToken: input.clientRequestToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpgradeLensReview', props);
  }

}

export class WellArchitectedResponsesCreateMilestone {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedCreateMilestoneInput) {
  }

  public get workloadId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMilestone',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.CreateMilestone.WorkloadId'),
        outputPath: 'WorkloadId',
        parameters: {
          WorkloadId: this.__input.workloadId,
          MilestoneName: this.__input.milestoneName,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMilestone.WorkloadId', props);
    return resource.getResponseField('WorkloadId') as unknown as string;
  }

  public get milestoneNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMilestone',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.CreateMilestone.MilestoneNumber'),
        outputPath: 'MilestoneNumber',
        parameters: {
          WorkloadId: this.__input.workloadId,
          MilestoneName: this.__input.milestoneName,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMilestone.MilestoneNumber', props);
    return resource.getResponseField('MilestoneNumber') as unknown as number;
  }

}

export class WellArchitectedResponsesCreateWorkload {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedCreateWorkloadInput) {
  }

  public get workloadId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.CreateWorkload.WorkloadId'),
        outputPath: 'WorkloadId',
        parameters: {
          WorkloadName: this.__input.workloadName,
          Description: this.__input.description,
          Environment: this.__input.environment,
          AccountIds: this.__input.accountIds,
          AwsRegions: this.__input.awsRegions,
          NonAwsRegions: this.__input.nonAwsRegions,
          PillarPriorities: this.__input.pillarPriorities,
          ArchitecturalDesign: this.__input.architecturalDesign,
          ReviewOwner: this.__input.reviewOwner,
          IndustryType: this.__input.industryType,
          Industry: this.__input.industry,
          Lenses: this.__input.lenses,
          Notes: this.__input.notes,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorkload.WorkloadId', props);
    return resource.getResponseField('WorkloadId') as unknown as string;
  }

  public get workloadArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.CreateWorkload.WorkloadArn'),
        outputPath: 'WorkloadArn',
        parameters: {
          WorkloadName: this.__input.workloadName,
          Description: this.__input.description,
          Environment: this.__input.environment,
          AccountIds: this.__input.accountIds,
          AwsRegions: this.__input.awsRegions,
          NonAwsRegions: this.__input.nonAwsRegions,
          PillarPriorities: this.__input.pillarPriorities,
          ArchitecturalDesign: this.__input.architecturalDesign,
          ReviewOwner: this.__input.reviewOwner,
          IndustryType: this.__input.industryType,
          Industry: this.__input.industry,
          Lenses: this.__input.lenses,
          Notes: this.__input.notes,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorkload.WorkloadArn', props);
    return resource.getResponseField('WorkloadArn') as unknown as string;
  }

}

export class WellArchitectedResponsesCreateWorkloadShare {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedCreateWorkloadShareInput) {
  }

  public get workloadId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorkloadShare',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.CreateWorkloadShare.WorkloadId'),
        outputPath: 'WorkloadId',
        parameters: {
          WorkloadId: this.__input.workloadId,
          SharedWith: this.__input.sharedWith,
          PermissionType: this.__input.permissionType,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorkloadShare.WorkloadId', props);
    return resource.getResponseField('WorkloadId') as unknown as string;
  }

  public get shareId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorkloadShare',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.CreateWorkloadShare.ShareId'),
        outputPath: 'ShareId',
        parameters: {
          WorkloadId: this.__input.workloadId,
          SharedWith: this.__input.sharedWith,
          PermissionType: this.__input.permissionType,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorkloadShare.ShareId', props);
    return resource.getResponseField('ShareId') as unknown as string;
  }

}

export class WellArchitectedResponsesFetchAnswer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedGetAnswerInput) {
  }

  public get workloadId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnswer',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetAnswer.WorkloadId'),
        outputPath: 'WorkloadId',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          QuestionId: this.__input.questionId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnswer.WorkloadId', props);
    return resource.getResponseField('WorkloadId') as unknown as string;
  }

  public get milestoneNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnswer',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetAnswer.MilestoneNumber'),
        outputPath: 'MilestoneNumber',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          QuestionId: this.__input.questionId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnswer.MilestoneNumber', props);
    return resource.getResponseField('MilestoneNumber') as unknown as number;
  }

  public get lensAlias(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnswer',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetAnswer.LensAlias'),
        outputPath: 'LensAlias',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          QuestionId: this.__input.questionId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnswer.LensAlias', props);
    return resource.getResponseField('LensAlias') as unknown as string;
  }

  public get answer(): WellArchitectedResponsesFetchAnswerAnswer {
    return new WellArchitectedResponsesFetchAnswerAnswer(this.__scope, this.__resources, this.__input);
  }

}

export class WellArchitectedResponsesFetchAnswerAnswer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedGetAnswerInput) {
  }

  public get questionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnswer',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetAnswer.Answer.QuestionId'),
        outputPath: 'Answer.QuestionId',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          QuestionId: this.__input.questionId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnswer.Answer.QuestionId', props);
    return resource.getResponseField('Answer.QuestionId') as unknown as string;
  }

  public get pillarId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnswer',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetAnswer.Answer.PillarId'),
        outputPath: 'Answer.PillarId',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          QuestionId: this.__input.questionId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnswer.Answer.PillarId', props);
    return resource.getResponseField('Answer.PillarId') as unknown as string;
  }

  public get questionTitle(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnswer',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetAnswer.Answer.QuestionTitle'),
        outputPath: 'Answer.QuestionTitle',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          QuestionId: this.__input.questionId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnswer.Answer.QuestionTitle', props);
    return resource.getResponseField('Answer.QuestionTitle') as unknown as string;
  }

  public get questionDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnswer',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetAnswer.Answer.QuestionDescription'),
        outputPath: 'Answer.QuestionDescription',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          QuestionId: this.__input.questionId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnswer.Answer.QuestionDescription', props);
    return resource.getResponseField('Answer.QuestionDescription') as unknown as string;
  }

  public get improvementPlanUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnswer',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetAnswer.Answer.ImprovementPlanUrl'),
        outputPath: 'Answer.ImprovementPlanUrl',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          QuestionId: this.__input.questionId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnswer.Answer.ImprovementPlanUrl', props);
    return resource.getResponseField('Answer.ImprovementPlanUrl') as unknown as string;
  }

  public get helpfulResourceUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnswer',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetAnswer.Answer.HelpfulResourceUrl'),
        outputPath: 'Answer.HelpfulResourceUrl',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          QuestionId: this.__input.questionId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnswer.Answer.HelpfulResourceUrl', props);
    return resource.getResponseField('Answer.HelpfulResourceUrl') as unknown as string;
  }

  public get choices(): shapes.WellArchitectedChoice[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnswer',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetAnswer.Answer.Choices'),
        outputPath: 'Answer.Choices',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          QuestionId: this.__input.questionId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnswer.Answer.Choices', props);
    return resource.getResponseField('Answer.Choices') as unknown as shapes.WellArchitectedChoice[];
  }

  public get selectedChoices(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnswer',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetAnswer.Answer.SelectedChoices'),
        outputPath: 'Answer.SelectedChoices',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          QuestionId: this.__input.questionId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnswer.Answer.SelectedChoices', props);
    return resource.getResponseField('Answer.SelectedChoices') as unknown as string[];
  }

  public get choiceAnswers(): shapes.WellArchitectedChoiceAnswer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnswer',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetAnswer.Answer.ChoiceAnswers'),
        outputPath: 'Answer.ChoiceAnswers',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          QuestionId: this.__input.questionId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnswer.Answer.ChoiceAnswers', props);
    return resource.getResponseField('Answer.ChoiceAnswers') as unknown as shapes.WellArchitectedChoiceAnswer[];
  }

  public get isApplicable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnswer',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetAnswer.Answer.IsApplicable'),
        outputPath: 'Answer.IsApplicable',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          QuestionId: this.__input.questionId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnswer.Answer.IsApplicable', props);
    return resource.getResponseField('Answer.IsApplicable') as unknown as boolean;
  }

  public get risk(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnswer',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetAnswer.Answer.Risk'),
        outputPath: 'Answer.Risk',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          QuestionId: this.__input.questionId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnswer.Answer.Risk', props);
    return resource.getResponseField('Answer.Risk') as unknown as string;
  }

  public get notes(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnswer',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetAnswer.Answer.Notes'),
        outputPath: 'Answer.Notes',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          QuestionId: this.__input.questionId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnswer.Answer.Notes', props);
    return resource.getResponseField('Answer.Notes') as unknown as string;
  }

  public get reason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnswer',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetAnswer.Answer.Reason'),
        outputPath: 'Answer.Reason',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          QuestionId: this.__input.questionId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnswer.Answer.Reason', props);
    return resource.getResponseField('Answer.Reason') as unknown as string;
  }

}

export class WellArchitectedResponsesFetchLensReview {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedGetLensReviewInput) {
  }

  public get workloadId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLensReview',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetLensReview.WorkloadId'),
        outputPath: 'WorkloadId',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLensReview.WorkloadId', props);
    return resource.getResponseField('WorkloadId') as unknown as string;
  }

  public get milestoneNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLensReview',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetLensReview.MilestoneNumber'),
        outputPath: 'MilestoneNumber',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLensReview.MilestoneNumber', props);
    return resource.getResponseField('MilestoneNumber') as unknown as number;
  }

  public get lensReview(): WellArchitectedResponsesFetchLensReviewLensReview {
    return new WellArchitectedResponsesFetchLensReviewLensReview(this.__scope, this.__resources, this.__input);
  }

}

export class WellArchitectedResponsesFetchLensReviewLensReview {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedGetLensReviewInput) {
  }

  public get lensAlias(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLensReview',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetLensReview.LensReview.LensAlias'),
        outputPath: 'LensReview.LensAlias',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLensReview.LensReview.LensAlias', props);
    return resource.getResponseField('LensReview.LensAlias') as unknown as string;
  }

  public get lensVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLensReview',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetLensReview.LensReview.LensVersion'),
        outputPath: 'LensReview.LensVersion',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLensReview.LensReview.LensVersion', props);
    return resource.getResponseField('LensReview.LensVersion') as unknown as string;
  }

  public get lensName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLensReview',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetLensReview.LensReview.LensName'),
        outputPath: 'LensReview.LensName',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLensReview.LensReview.LensName', props);
    return resource.getResponseField('LensReview.LensName') as unknown as string;
  }

  public get lensStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLensReview',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetLensReview.LensReview.LensStatus'),
        outputPath: 'LensReview.LensStatus',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLensReview.LensReview.LensStatus', props);
    return resource.getResponseField('LensReview.LensStatus') as unknown as string;
  }

  public get pillarReviewSummaries(): shapes.WellArchitectedPillarReviewSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLensReview',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetLensReview.LensReview.PillarReviewSummaries'),
        outputPath: 'LensReview.PillarReviewSummaries',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLensReview.LensReview.PillarReviewSummaries', props);
    return resource.getResponseField('LensReview.PillarReviewSummaries') as unknown as shapes.WellArchitectedPillarReviewSummary[];
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLensReview',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetLensReview.LensReview.UpdatedAt'),
        outputPath: 'LensReview.UpdatedAt',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLensReview.LensReview.UpdatedAt', props);
    return resource.getResponseField('LensReview.UpdatedAt') as unknown as string;
  }

  public get notes(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLensReview',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetLensReview.LensReview.Notes'),
        outputPath: 'LensReview.Notes',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLensReview.LensReview.Notes', props);
    return resource.getResponseField('LensReview.Notes') as unknown as string;
  }

  public get riskCounts(): Record<string, number> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLensReview',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetLensReview.LensReview.RiskCounts'),
        outputPath: 'LensReview.RiskCounts',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLensReview.LensReview.RiskCounts', props);
    return resource.getResponseField('LensReview.RiskCounts') as unknown as Record<string, number>;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLensReview',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetLensReview.LensReview.NextToken'),
        outputPath: 'LensReview.NextToken',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLensReview.LensReview.NextToken', props);
    return resource.getResponseField('LensReview.NextToken') as unknown as string;
  }

}

export class WellArchitectedResponsesFetchLensReviewReport {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedGetLensReviewReportInput) {
  }

  public get workloadId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLensReviewReport',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetLensReviewReport.WorkloadId'),
        outputPath: 'WorkloadId',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLensReviewReport.WorkloadId', props);
    return resource.getResponseField('WorkloadId') as unknown as string;
  }

  public get milestoneNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLensReviewReport',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetLensReviewReport.MilestoneNumber'),
        outputPath: 'MilestoneNumber',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLensReviewReport.MilestoneNumber', props);
    return resource.getResponseField('MilestoneNumber') as unknown as number;
  }

  public get lensReviewReport(): WellArchitectedResponsesFetchLensReviewReportLensReviewReport {
    return new WellArchitectedResponsesFetchLensReviewReportLensReviewReport(this.__scope, this.__resources, this.__input);
  }

}

export class WellArchitectedResponsesFetchLensReviewReportLensReviewReport {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedGetLensReviewReportInput) {
  }

  public get lensAlias(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLensReviewReport',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetLensReviewReport.LensReviewReport.LensAlias'),
        outputPath: 'LensReviewReport.LensAlias',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLensReviewReport.LensReviewReport.LensAlias', props);
    return resource.getResponseField('LensReviewReport.LensAlias') as unknown as string;
  }

  public get base64String(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLensReviewReport',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetLensReviewReport.LensReviewReport.Base64String'),
        outputPath: 'LensReviewReport.Base64String',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLensReviewReport.LensReviewReport.Base64String', props);
    return resource.getResponseField('LensReviewReport.Base64String') as unknown as string;
  }

}

export class WellArchitectedResponsesFetchLensVersionDifference {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedGetLensVersionDifferenceInput) {
  }

  public get lensAlias(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLensVersionDifference',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetLensVersionDifference.LensAlias'),
        outputPath: 'LensAlias',
        parameters: {
          LensAlias: this.__input.lensAlias,
          BaseLensVersion: this.__input.baseLensVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLensVersionDifference.LensAlias', props);
    return resource.getResponseField('LensAlias') as unknown as string;
  }

  public get baseLensVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLensVersionDifference',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetLensVersionDifference.BaseLensVersion'),
        outputPath: 'BaseLensVersion',
        parameters: {
          LensAlias: this.__input.lensAlias,
          BaseLensVersion: this.__input.baseLensVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLensVersionDifference.BaseLensVersion', props);
    return resource.getResponseField('BaseLensVersion') as unknown as string;
  }

  public get latestLensVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLensVersionDifference',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetLensVersionDifference.LatestLensVersion'),
        outputPath: 'LatestLensVersion',
        parameters: {
          LensAlias: this.__input.lensAlias,
          BaseLensVersion: this.__input.baseLensVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLensVersionDifference.LatestLensVersion', props);
    return resource.getResponseField('LatestLensVersion') as unknown as string;
  }

  public get versionDifferences(): WellArchitectedResponsesFetchLensVersionDifferenceVersionDifferences {
    return new WellArchitectedResponsesFetchLensVersionDifferenceVersionDifferences(this.__scope, this.__resources, this.__input);
  }

}

export class WellArchitectedResponsesFetchLensVersionDifferenceVersionDifferences {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedGetLensVersionDifferenceInput) {
  }

  public get pillarDifferences(): shapes.WellArchitectedPillarDifference[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLensVersionDifference',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetLensVersionDifference.VersionDifferences.PillarDifferences'),
        outputPath: 'VersionDifferences.PillarDifferences',
        parameters: {
          LensAlias: this.__input.lensAlias,
          BaseLensVersion: this.__input.baseLensVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLensVersionDifference.VersionDifferences.PillarDifferences', props);
    return resource.getResponseField('VersionDifferences.PillarDifferences') as unknown as shapes.WellArchitectedPillarDifference[];
  }

}

export class WellArchitectedResponsesFetchMilestone {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedGetMilestoneInput) {
  }

  public get workloadId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMilestone',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetMilestone.WorkloadId'),
        outputPath: 'WorkloadId',
        parameters: {
          WorkloadId: this.__input.workloadId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMilestone.WorkloadId', props);
    return resource.getResponseField('WorkloadId') as unknown as string;
  }

  public get milestone(): WellArchitectedResponsesFetchMilestoneMilestone {
    return new WellArchitectedResponsesFetchMilestoneMilestone(this.__scope, this.__resources, this.__input);
  }

}

export class WellArchitectedResponsesFetchMilestoneMilestone {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedGetMilestoneInput) {
  }

  public get milestoneNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMilestone',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetMilestone.Milestone.MilestoneNumber'),
        outputPath: 'Milestone.MilestoneNumber',
        parameters: {
          WorkloadId: this.__input.workloadId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMilestone.Milestone.MilestoneNumber', props);
    return resource.getResponseField('Milestone.MilestoneNumber') as unknown as number;
  }

  public get milestoneName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMilestone',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetMilestone.Milestone.MilestoneName'),
        outputPath: 'Milestone.MilestoneName',
        parameters: {
          WorkloadId: this.__input.workloadId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMilestone.Milestone.MilestoneName', props);
    return resource.getResponseField('Milestone.MilestoneName') as unknown as string;
  }

  public get recordedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMilestone',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetMilestone.Milestone.RecordedAt'),
        outputPath: 'Milestone.RecordedAt',
        parameters: {
          WorkloadId: this.__input.workloadId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMilestone.Milestone.RecordedAt', props);
    return resource.getResponseField('Milestone.RecordedAt') as unknown as string;
  }

  public get workload(): WellArchitectedResponsesFetchMilestoneMilestoneWorkload {
    return new WellArchitectedResponsesFetchMilestoneMilestoneWorkload(this.__scope, this.__resources, this.__input);
  }

}

export class WellArchitectedResponsesFetchMilestoneMilestoneWorkload {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedGetMilestoneInput) {
  }

  public get workloadId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMilestone',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetMilestone.Milestone.Workload.WorkloadId'),
        outputPath: 'Milestone.Workload.WorkloadId',
        parameters: {
          WorkloadId: this.__input.workloadId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMilestone.Milestone.Workload.WorkloadId', props);
    return resource.getResponseField('Milestone.Workload.WorkloadId') as unknown as string;
  }

  public get workloadArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMilestone',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetMilestone.Milestone.Workload.WorkloadArn'),
        outputPath: 'Milestone.Workload.WorkloadArn',
        parameters: {
          WorkloadId: this.__input.workloadId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMilestone.Milestone.Workload.WorkloadArn', props);
    return resource.getResponseField('Milestone.Workload.WorkloadArn') as unknown as string;
  }

  public get workloadName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMilestone',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetMilestone.Milestone.Workload.WorkloadName'),
        outputPath: 'Milestone.Workload.WorkloadName',
        parameters: {
          WorkloadId: this.__input.workloadId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMilestone.Milestone.Workload.WorkloadName', props);
    return resource.getResponseField('Milestone.Workload.WorkloadName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMilestone',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetMilestone.Milestone.Workload.Description'),
        outputPath: 'Milestone.Workload.Description',
        parameters: {
          WorkloadId: this.__input.workloadId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMilestone.Milestone.Workload.Description', props);
    return resource.getResponseField('Milestone.Workload.Description') as unknown as string;
  }

  public get environment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMilestone',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetMilestone.Milestone.Workload.Environment'),
        outputPath: 'Milestone.Workload.Environment',
        parameters: {
          WorkloadId: this.__input.workloadId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMilestone.Milestone.Workload.Environment', props);
    return resource.getResponseField('Milestone.Workload.Environment') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMilestone',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetMilestone.Milestone.Workload.UpdatedAt'),
        outputPath: 'Milestone.Workload.UpdatedAt',
        parameters: {
          WorkloadId: this.__input.workloadId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMilestone.Milestone.Workload.UpdatedAt', props);
    return resource.getResponseField('Milestone.Workload.UpdatedAt') as unknown as string;
  }

  public get accountIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMilestone',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetMilestone.Milestone.Workload.AccountIds'),
        outputPath: 'Milestone.Workload.AccountIds',
        parameters: {
          WorkloadId: this.__input.workloadId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMilestone.Milestone.Workload.AccountIds', props);
    return resource.getResponseField('Milestone.Workload.AccountIds') as unknown as string[];
  }

  public get awsRegions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMilestone',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetMilestone.Milestone.Workload.AwsRegions'),
        outputPath: 'Milestone.Workload.AwsRegions',
        parameters: {
          WorkloadId: this.__input.workloadId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMilestone.Milestone.Workload.AwsRegions', props);
    return resource.getResponseField('Milestone.Workload.AwsRegions') as unknown as string[];
  }

  public get nonAwsRegions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMilestone',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetMilestone.Milestone.Workload.NonAwsRegions'),
        outputPath: 'Milestone.Workload.NonAwsRegions',
        parameters: {
          WorkloadId: this.__input.workloadId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMilestone.Milestone.Workload.NonAwsRegions', props);
    return resource.getResponseField('Milestone.Workload.NonAwsRegions') as unknown as string[];
  }

  public get architecturalDesign(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMilestone',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetMilestone.Milestone.Workload.ArchitecturalDesign'),
        outputPath: 'Milestone.Workload.ArchitecturalDesign',
        parameters: {
          WorkloadId: this.__input.workloadId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMilestone.Milestone.Workload.ArchitecturalDesign', props);
    return resource.getResponseField('Milestone.Workload.ArchitecturalDesign') as unknown as string;
  }

  public get reviewOwner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMilestone',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetMilestone.Milestone.Workload.ReviewOwner'),
        outputPath: 'Milestone.Workload.ReviewOwner',
        parameters: {
          WorkloadId: this.__input.workloadId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMilestone.Milestone.Workload.ReviewOwner', props);
    return resource.getResponseField('Milestone.Workload.ReviewOwner') as unknown as string;
  }

  public get reviewRestrictionDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMilestone',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetMilestone.Milestone.Workload.ReviewRestrictionDate'),
        outputPath: 'Milestone.Workload.ReviewRestrictionDate',
        parameters: {
          WorkloadId: this.__input.workloadId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMilestone.Milestone.Workload.ReviewRestrictionDate', props);
    return resource.getResponseField('Milestone.Workload.ReviewRestrictionDate') as unknown as string;
  }

  public get isReviewOwnerUpdateAcknowledged(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMilestone',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetMilestone.Milestone.Workload.IsReviewOwnerUpdateAcknowledged'),
        outputPath: 'Milestone.Workload.IsReviewOwnerUpdateAcknowledged',
        parameters: {
          WorkloadId: this.__input.workloadId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMilestone.Milestone.Workload.IsReviewOwnerUpdateAcknowledged', props);
    return resource.getResponseField('Milestone.Workload.IsReviewOwnerUpdateAcknowledged') as unknown as boolean;
  }

  public get industryType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMilestone',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetMilestone.Milestone.Workload.IndustryType'),
        outputPath: 'Milestone.Workload.IndustryType',
        parameters: {
          WorkloadId: this.__input.workloadId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMilestone.Milestone.Workload.IndustryType', props);
    return resource.getResponseField('Milestone.Workload.IndustryType') as unknown as string;
  }

  public get industry(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMilestone',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetMilestone.Milestone.Workload.Industry'),
        outputPath: 'Milestone.Workload.Industry',
        parameters: {
          WorkloadId: this.__input.workloadId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMilestone.Milestone.Workload.Industry', props);
    return resource.getResponseField('Milestone.Workload.Industry') as unknown as string;
  }

  public get notes(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMilestone',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetMilestone.Milestone.Workload.Notes'),
        outputPath: 'Milestone.Workload.Notes',
        parameters: {
          WorkloadId: this.__input.workloadId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMilestone.Milestone.Workload.Notes', props);
    return resource.getResponseField('Milestone.Workload.Notes') as unknown as string;
  }

  public get improvementStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMilestone',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetMilestone.Milestone.Workload.ImprovementStatus'),
        outputPath: 'Milestone.Workload.ImprovementStatus',
        parameters: {
          WorkloadId: this.__input.workloadId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMilestone.Milestone.Workload.ImprovementStatus', props);
    return resource.getResponseField('Milestone.Workload.ImprovementStatus') as unknown as string;
  }

  public get riskCounts(): Record<string, number> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMilestone',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetMilestone.Milestone.Workload.RiskCounts'),
        outputPath: 'Milestone.Workload.RiskCounts',
        parameters: {
          WorkloadId: this.__input.workloadId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMilestone.Milestone.Workload.RiskCounts', props);
    return resource.getResponseField('Milestone.Workload.RiskCounts') as unknown as Record<string, number>;
  }

  public get pillarPriorities(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMilestone',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetMilestone.Milestone.Workload.PillarPriorities'),
        outputPath: 'Milestone.Workload.PillarPriorities',
        parameters: {
          WorkloadId: this.__input.workloadId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMilestone.Milestone.Workload.PillarPriorities', props);
    return resource.getResponseField('Milestone.Workload.PillarPriorities') as unknown as string[];
  }

  public get lenses(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMilestone',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetMilestone.Milestone.Workload.Lenses'),
        outputPath: 'Milestone.Workload.Lenses',
        parameters: {
          WorkloadId: this.__input.workloadId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMilestone.Milestone.Workload.Lenses', props);
    return resource.getResponseField('Milestone.Workload.Lenses') as unknown as string[];
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMilestone',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetMilestone.Milestone.Workload.Owner'),
        outputPath: 'Milestone.Workload.Owner',
        parameters: {
          WorkloadId: this.__input.workloadId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMilestone.Milestone.Workload.Owner', props);
    return resource.getResponseField('Milestone.Workload.Owner') as unknown as string;
  }

  public get shareInvitationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMilestone',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetMilestone.Milestone.Workload.ShareInvitationId'),
        outputPath: 'Milestone.Workload.ShareInvitationId',
        parameters: {
          WorkloadId: this.__input.workloadId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMilestone.Milestone.Workload.ShareInvitationId', props);
    return resource.getResponseField('Milestone.Workload.ShareInvitationId') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMilestone',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetMilestone.Milestone.Workload.Tags'),
        outputPath: 'Milestone.Workload.Tags',
        parameters: {
          WorkloadId: this.__input.workloadId,
          MilestoneNumber: this.__input.milestoneNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMilestone.Milestone.Workload.Tags', props);
    return resource.getResponseField('Milestone.Workload.Tags') as unknown as Record<string, string>;
  }

}

export class WellArchitectedResponsesFetchWorkload {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedGetWorkloadInput) {
  }

  public get workload(): WellArchitectedResponsesFetchWorkloadWorkload {
    return new WellArchitectedResponsesFetchWorkloadWorkload(this.__scope, this.__resources, this.__input);
  }

}

export class WellArchitectedResponsesFetchWorkloadWorkload {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedGetWorkloadInput) {
  }

  public get workloadId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetWorkload.Workload.WorkloadId'),
        outputPath: 'Workload.WorkloadId',
        parameters: {
          WorkloadId: this.__input.workloadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkload.Workload.WorkloadId', props);
    return resource.getResponseField('Workload.WorkloadId') as unknown as string;
  }

  public get workloadArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetWorkload.Workload.WorkloadArn'),
        outputPath: 'Workload.WorkloadArn',
        parameters: {
          WorkloadId: this.__input.workloadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkload.Workload.WorkloadArn', props);
    return resource.getResponseField('Workload.WorkloadArn') as unknown as string;
  }

  public get workloadName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetWorkload.Workload.WorkloadName'),
        outputPath: 'Workload.WorkloadName',
        parameters: {
          WorkloadId: this.__input.workloadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkload.Workload.WorkloadName', props);
    return resource.getResponseField('Workload.WorkloadName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetWorkload.Workload.Description'),
        outputPath: 'Workload.Description',
        parameters: {
          WorkloadId: this.__input.workloadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkload.Workload.Description', props);
    return resource.getResponseField('Workload.Description') as unknown as string;
  }

  public get environment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetWorkload.Workload.Environment'),
        outputPath: 'Workload.Environment',
        parameters: {
          WorkloadId: this.__input.workloadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkload.Workload.Environment', props);
    return resource.getResponseField('Workload.Environment') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetWorkload.Workload.UpdatedAt'),
        outputPath: 'Workload.UpdatedAt',
        parameters: {
          WorkloadId: this.__input.workloadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkload.Workload.UpdatedAt', props);
    return resource.getResponseField('Workload.UpdatedAt') as unknown as string;
  }

  public get accountIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetWorkload.Workload.AccountIds'),
        outputPath: 'Workload.AccountIds',
        parameters: {
          WorkloadId: this.__input.workloadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkload.Workload.AccountIds', props);
    return resource.getResponseField('Workload.AccountIds') as unknown as string[];
  }

  public get awsRegions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetWorkload.Workload.AwsRegions'),
        outputPath: 'Workload.AwsRegions',
        parameters: {
          WorkloadId: this.__input.workloadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkload.Workload.AwsRegions', props);
    return resource.getResponseField('Workload.AwsRegions') as unknown as string[];
  }

  public get nonAwsRegions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetWorkload.Workload.NonAwsRegions'),
        outputPath: 'Workload.NonAwsRegions',
        parameters: {
          WorkloadId: this.__input.workloadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkload.Workload.NonAwsRegions', props);
    return resource.getResponseField('Workload.NonAwsRegions') as unknown as string[];
  }

  public get architecturalDesign(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetWorkload.Workload.ArchitecturalDesign'),
        outputPath: 'Workload.ArchitecturalDesign',
        parameters: {
          WorkloadId: this.__input.workloadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkload.Workload.ArchitecturalDesign', props);
    return resource.getResponseField('Workload.ArchitecturalDesign') as unknown as string;
  }

  public get reviewOwner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetWorkload.Workload.ReviewOwner'),
        outputPath: 'Workload.ReviewOwner',
        parameters: {
          WorkloadId: this.__input.workloadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkload.Workload.ReviewOwner', props);
    return resource.getResponseField('Workload.ReviewOwner') as unknown as string;
  }

  public get reviewRestrictionDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetWorkload.Workload.ReviewRestrictionDate'),
        outputPath: 'Workload.ReviewRestrictionDate',
        parameters: {
          WorkloadId: this.__input.workloadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkload.Workload.ReviewRestrictionDate', props);
    return resource.getResponseField('Workload.ReviewRestrictionDate') as unknown as string;
  }

  public get isReviewOwnerUpdateAcknowledged(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetWorkload.Workload.IsReviewOwnerUpdateAcknowledged'),
        outputPath: 'Workload.IsReviewOwnerUpdateAcknowledged',
        parameters: {
          WorkloadId: this.__input.workloadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkload.Workload.IsReviewOwnerUpdateAcknowledged', props);
    return resource.getResponseField('Workload.IsReviewOwnerUpdateAcknowledged') as unknown as boolean;
  }

  public get industryType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetWorkload.Workload.IndustryType'),
        outputPath: 'Workload.IndustryType',
        parameters: {
          WorkloadId: this.__input.workloadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkload.Workload.IndustryType', props);
    return resource.getResponseField('Workload.IndustryType') as unknown as string;
  }

  public get industry(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetWorkload.Workload.Industry'),
        outputPath: 'Workload.Industry',
        parameters: {
          WorkloadId: this.__input.workloadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkload.Workload.Industry', props);
    return resource.getResponseField('Workload.Industry') as unknown as string;
  }

  public get notes(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetWorkload.Workload.Notes'),
        outputPath: 'Workload.Notes',
        parameters: {
          WorkloadId: this.__input.workloadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkload.Workload.Notes', props);
    return resource.getResponseField('Workload.Notes') as unknown as string;
  }

  public get improvementStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetWorkload.Workload.ImprovementStatus'),
        outputPath: 'Workload.ImprovementStatus',
        parameters: {
          WorkloadId: this.__input.workloadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkload.Workload.ImprovementStatus', props);
    return resource.getResponseField('Workload.ImprovementStatus') as unknown as string;
  }

  public get riskCounts(): Record<string, number> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetWorkload.Workload.RiskCounts'),
        outputPath: 'Workload.RiskCounts',
        parameters: {
          WorkloadId: this.__input.workloadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkload.Workload.RiskCounts', props);
    return resource.getResponseField('Workload.RiskCounts') as unknown as Record<string, number>;
  }

  public get pillarPriorities(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetWorkload.Workload.PillarPriorities'),
        outputPath: 'Workload.PillarPriorities',
        parameters: {
          WorkloadId: this.__input.workloadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkload.Workload.PillarPriorities', props);
    return resource.getResponseField('Workload.PillarPriorities') as unknown as string[];
  }

  public get lenses(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetWorkload.Workload.Lenses'),
        outputPath: 'Workload.Lenses',
        parameters: {
          WorkloadId: this.__input.workloadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkload.Workload.Lenses', props);
    return resource.getResponseField('Workload.Lenses') as unknown as string[];
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetWorkload.Workload.Owner'),
        outputPath: 'Workload.Owner',
        parameters: {
          WorkloadId: this.__input.workloadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkload.Workload.Owner', props);
    return resource.getResponseField('Workload.Owner') as unknown as string;
  }

  public get shareInvitationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetWorkload.Workload.ShareInvitationId'),
        outputPath: 'Workload.ShareInvitationId',
        parameters: {
          WorkloadId: this.__input.workloadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkload.Workload.ShareInvitationId', props);
    return resource.getResponseField('Workload.ShareInvitationId') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.GetWorkload.Workload.Tags'),
        outputPath: 'Workload.Tags',
        parameters: {
          WorkloadId: this.__input.workloadId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkload.Workload.Tags', props);
    return resource.getResponseField('Workload.Tags') as unknown as Record<string, string>;
  }

}

export class WellArchitectedResponsesListAnswers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedListAnswersInput) {
  }

  public get workloadId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAnswers',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.ListAnswers.WorkloadId'),
        outputPath: 'WorkloadId',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          PillarId: this.__input.pillarId,
          MilestoneNumber: this.__input.milestoneNumber,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAnswers.WorkloadId', props);
    return resource.getResponseField('WorkloadId') as unknown as string;
  }

  public get milestoneNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAnswers',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.ListAnswers.MilestoneNumber'),
        outputPath: 'MilestoneNumber',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          PillarId: this.__input.pillarId,
          MilestoneNumber: this.__input.milestoneNumber,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAnswers.MilestoneNumber', props);
    return resource.getResponseField('MilestoneNumber') as unknown as number;
  }

  public get lensAlias(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAnswers',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.ListAnswers.LensAlias'),
        outputPath: 'LensAlias',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          PillarId: this.__input.pillarId,
          MilestoneNumber: this.__input.milestoneNumber,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAnswers.LensAlias', props);
    return resource.getResponseField('LensAlias') as unknown as string;
  }

  public get answerSummaries(): shapes.WellArchitectedAnswerSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAnswers',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.ListAnswers.AnswerSummaries'),
        outputPath: 'AnswerSummaries',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          PillarId: this.__input.pillarId,
          MilestoneNumber: this.__input.milestoneNumber,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAnswers.AnswerSummaries', props);
    return resource.getResponseField('AnswerSummaries') as unknown as shapes.WellArchitectedAnswerSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAnswers',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.ListAnswers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          PillarId: this.__input.pillarId,
          MilestoneNumber: this.__input.milestoneNumber,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAnswers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WellArchitectedResponsesListLensReviewImprovements {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedListLensReviewImprovementsInput) {
  }

  public get workloadId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLensReviewImprovements',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.ListLensReviewImprovements.WorkloadId'),
        outputPath: 'WorkloadId',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          PillarId: this.__input.pillarId,
          MilestoneNumber: this.__input.milestoneNumber,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLensReviewImprovements.WorkloadId', props);
    return resource.getResponseField('WorkloadId') as unknown as string;
  }

  public get milestoneNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLensReviewImprovements',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.ListLensReviewImprovements.MilestoneNumber'),
        outputPath: 'MilestoneNumber',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          PillarId: this.__input.pillarId,
          MilestoneNumber: this.__input.milestoneNumber,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLensReviewImprovements.MilestoneNumber', props);
    return resource.getResponseField('MilestoneNumber') as unknown as number;
  }

  public get lensAlias(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLensReviewImprovements',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.ListLensReviewImprovements.LensAlias'),
        outputPath: 'LensAlias',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          PillarId: this.__input.pillarId,
          MilestoneNumber: this.__input.milestoneNumber,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLensReviewImprovements.LensAlias', props);
    return resource.getResponseField('LensAlias') as unknown as string;
  }

  public get improvementSummaries(): shapes.WellArchitectedImprovementSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLensReviewImprovements',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.ListLensReviewImprovements.ImprovementSummaries'),
        outputPath: 'ImprovementSummaries',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          PillarId: this.__input.pillarId,
          MilestoneNumber: this.__input.milestoneNumber,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLensReviewImprovements.ImprovementSummaries', props);
    return resource.getResponseField('ImprovementSummaries') as unknown as shapes.WellArchitectedImprovementSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLensReviewImprovements',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.ListLensReviewImprovements.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          PillarId: this.__input.pillarId,
          MilestoneNumber: this.__input.milestoneNumber,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLensReviewImprovements.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WellArchitectedResponsesListLensReviews {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedListLensReviewsInput) {
  }

  public get workloadId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLensReviews',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.ListLensReviews.WorkloadId'),
        outputPath: 'WorkloadId',
        parameters: {
          WorkloadId: this.__input.workloadId,
          MilestoneNumber: this.__input.milestoneNumber,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLensReviews.WorkloadId', props);
    return resource.getResponseField('WorkloadId') as unknown as string;
  }

  public get milestoneNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLensReviews',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.ListLensReviews.MilestoneNumber'),
        outputPath: 'MilestoneNumber',
        parameters: {
          WorkloadId: this.__input.workloadId,
          MilestoneNumber: this.__input.milestoneNumber,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLensReviews.MilestoneNumber', props);
    return resource.getResponseField('MilestoneNumber') as unknown as number;
  }

  public get lensReviewSummaries(): shapes.WellArchitectedLensReviewSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLensReviews',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.ListLensReviews.LensReviewSummaries'),
        outputPath: 'LensReviewSummaries',
        parameters: {
          WorkloadId: this.__input.workloadId,
          MilestoneNumber: this.__input.milestoneNumber,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLensReviews.LensReviewSummaries', props);
    return resource.getResponseField('LensReviewSummaries') as unknown as shapes.WellArchitectedLensReviewSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLensReviews',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.ListLensReviews.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          WorkloadId: this.__input.workloadId,
          MilestoneNumber: this.__input.milestoneNumber,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLensReviews.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WellArchitectedResponsesListLenses {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedListLensesInput) {
  }

  public get lensSummaries(): shapes.WellArchitectedLensSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLenses',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.ListLenses.LensSummaries'),
        outputPath: 'LensSummaries',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLenses.LensSummaries', props);
    return resource.getResponseField('LensSummaries') as unknown as shapes.WellArchitectedLensSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLenses',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.ListLenses.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLenses.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WellArchitectedResponsesListMilestones {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedListMilestonesInput) {
  }

  public get workloadId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMilestones',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.ListMilestones.WorkloadId'),
        outputPath: 'WorkloadId',
        parameters: {
          WorkloadId: this.__input.workloadId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMilestones.WorkloadId', props);
    return resource.getResponseField('WorkloadId') as unknown as string;
  }

  public get milestoneSummaries(): shapes.WellArchitectedMilestoneSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMilestones',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.ListMilestones.MilestoneSummaries'),
        outputPath: 'MilestoneSummaries',
        parameters: {
          WorkloadId: this.__input.workloadId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMilestones.MilestoneSummaries', props);
    return resource.getResponseField('MilestoneSummaries') as unknown as shapes.WellArchitectedMilestoneSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMilestones',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.ListMilestones.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          WorkloadId: this.__input.workloadId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMilestones.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WellArchitectedResponsesListNotifications {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedListNotificationsInput) {
  }

  public get notificationSummaries(): shapes.WellArchitectedNotificationSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listNotifications',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.ListNotifications.NotificationSummaries'),
        outputPath: 'NotificationSummaries',
        parameters: {
          WorkloadId: this.__input.workloadId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListNotifications.NotificationSummaries', props);
    return resource.getResponseField('NotificationSummaries') as unknown as shapes.WellArchitectedNotificationSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listNotifications',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.ListNotifications.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          WorkloadId: this.__input.workloadId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListNotifications.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WellArchitectedResponsesListShareInvitations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedListShareInvitationsInput) {
  }

  public get shareInvitationSummaries(): shapes.WellArchitectedShareInvitationSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listShareInvitations',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.ListShareInvitations.ShareInvitationSummaries'),
        outputPath: 'ShareInvitationSummaries',
        parameters: {
          WorkloadNamePrefix: this.__input.workloadNamePrefix,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListShareInvitations.ShareInvitationSummaries', props);
    return resource.getResponseField('ShareInvitationSummaries') as unknown as shapes.WellArchitectedShareInvitationSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listShareInvitations',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.ListShareInvitations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          WorkloadNamePrefix: this.__input.workloadNamePrefix,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListShareInvitations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WellArchitectedResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedListTagsForResourceInput) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          WorkloadArn: this.__input.workloadArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class WellArchitectedResponsesListWorkloadShares {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedListWorkloadSharesInput) {
  }

  public get workloadId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWorkloadShares',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.ListWorkloadShares.WorkloadId'),
        outputPath: 'WorkloadId',
        parameters: {
          WorkloadId: this.__input.workloadId,
          SharedWithPrefix: this.__input.sharedWithPrefix,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWorkloadShares.WorkloadId', props);
    return resource.getResponseField('WorkloadId') as unknown as string;
  }

  public get workloadShareSummaries(): shapes.WellArchitectedWorkloadShareSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWorkloadShares',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.ListWorkloadShares.WorkloadShareSummaries'),
        outputPath: 'WorkloadShareSummaries',
        parameters: {
          WorkloadId: this.__input.workloadId,
          SharedWithPrefix: this.__input.sharedWithPrefix,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWorkloadShares.WorkloadShareSummaries', props);
    return resource.getResponseField('WorkloadShareSummaries') as unknown as shapes.WellArchitectedWorkloadShareSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWorkloadShares',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.ListWorkloadShares.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          WorkloadId: this.__input.workloadId,
          SharedWithPrefix: this.__input.sharedWithPrefix,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWorkloadShares.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WellArchitectedResponsesListWorkloads {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedListWorkloadsInput) {
  }

  public get workloadSummaries(): shapes.WellArchitectedWorkloadSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWorkloads',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.ListWorkloads.WorkloadSummaries'),
        outputPath: 'WorkloadSummaries',
        parameters: {
          WorkloadNamePrefix: this.__input.workloadNamePrefix,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWorkloads.WorkloadSummaries', props);
    return resource.getResponseField('WorkloadSummaries') as unknown as shapes.WellArchitectedWorkloadSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWorkloads',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.ListWorkloads.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          WorkloadNamePrefix: this.__input.workloadNamePrefix,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWorkloads.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WellArchitectedResponsesUpdateAnswer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedUpdateAnswerInput) {
  }

  public get workloadId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAnswer',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateAnswer.WorkloadId'),
        outputPath: 'WorkloadId',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          QuestionId: this.__input.questionId,
          SelectedChoices: this.__input.selectedChoices,
          ChoiceUpdates: this.__input.choiceUpdates,
          Notes: this.__input.notes,
          IsApplicable: this.__input.isApplicable,
          Reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAnswer.WorkloadId', props);
    return resource.getResponseField('WorkloadId') as unknown as string;
  }

  public get lensAlias(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAnswer',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateAnswer.LensAlias'),
        outputPath: 'LensAlias',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          QuestionId: this.__input.questionId,
          SelectedChoices: this.__input.selectedChoices,
          ChoiceUpdates: this.__input.choiceUpdates,
          Notes: this.__input.notes,
          IsApplicable: this.__input.isApplicable,
          Reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAnswer.LensAlias', props);
    return resource.getResponseField('LensAlias') as unknown as string;
  }

  public get answer(): WellArchitectedResponsesUpdateAnswerAnswer {
    return new WellArchitectedResponsesUpdateAnswerAnswer(this.__scope, this.__resources, this.__input);
  }

}

export class WellArchitectedResponsesUpdateAnswerAnswer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedUpdateAnswerInput) {
  }

  public get questionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAnswer',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateAnswer.Answer.QuestionId'),
        outputPath: 'Answer.QuestionId',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          QuestionId: this.__input.questionId,
          SelectedChoices: this.__input.selectedChoices,
          ChoiceUpdates: this.__input.choiceUpdates,
          Notes: this.__input.notes,
          IsApplicable: this.__input.isApplicable,
          Reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAnswer.Answer.QuestionId', props);
    return resource.getResponseField('Answer.QuestionId') as unknown as string;
  }

  public get pillarId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAnswer',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateAnswer.Answer.PillarId'),
        outputPath: 'Answer.PillarId',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          QuestionId: this.__input.questionId,
          SelectedChoices: this.__input.selectedChoices,
          ChoiceUpdates: this.__input.choiceUpdates,
          Notes: this.__input.notes,
          IsApplicable: this.__input.isApplicable,
          Reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAnswer.Answer.PillarId', props);
    return resource.getResponseField('Answer.PillarId') as unknown as string;
  }

  public get questionTitle(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAnswer',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateAnswer.Answer.QuestionTitle'),
        outputPath: 'Answer.QuestionTitle',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          QuestionId: this.__input.questionId,
          SelectedChoices: this.__input.selectedChoices,
          ChoiceUpdates: this.__input.choiceUpdates,
          Notes: this.__input.notes,
          IsApplicable: this.__input.isApplicable,
          Reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAnswer.Answer.QuestionTitle', props);
    return resource.getResponseField('Answer.QuestionTitle') as unknown as string;
  }

  public get questionDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAnswer',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateAnswer.Answer.QuestionDescription'),
        outputPath: 'Answer.QuestionDescription',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          QuestionId: this.__input.questionId,
          SelectedChoices: this.__input.selectedChoices,
          ChoiceUpdates: this.__input.choiceUpdates,
          Notes: this.__input.notes,
          IsApplicable: this.__input.isApplicable,
          Reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAnswer.Answer.QuestionDescription', props);
    return resource.getResponseField('Answer.QuestionDescription') as unknown as string;
  }

  public get improvementPlanUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAnswer',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateAnswer.Answer.ImprovementPlanUrl'),
        outputPath: 'Answer.ImprovementPlanUrl',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          QuestionId: this.__input.questionId,
          SelectedChoices: this.__input.selectedChoices,
          ChoiceUpdates: this.__input.choiceUpdates,
          Notes: this.__input.notes,
          IsApplicable: this.__input.isApplicable,
          Reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAnswer.Answer.ImprovementPlanUrl', props);
    return resource.getResponseField('Answer.ImprovementPlanUrl') as unknown as string;
  }

  public get helpfulResourceUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAnswer',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateAnswer.Answer.HelpfulResourceUrl'),
        outputPath: 'Answer.HelpfulResourceUrl',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          QuestionId: this.__input.questionId,
          SelectedChoices: this.__input.selectedChoices,
          ChoiceUpdates: this.__input.choiceUpdates,
          Notes: this.__input.notes,
          IsApplicable: this.__input.isApplicable,
          Reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAnswer.Answer.HelpfulResourceUrl', props);
    return resource.getResponseField('Answer.HelpfulResourceUrl') as unknown as string;
  }

  public get choices(): shapes.WellArchitectedChoice[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAnswer',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateAnswer.Answer.Choices'),
        outputPath: 'Answer.Choices',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          QuestionId: this.__input.questionId,
          SelectedChoices: this.__input.selectedChoices,
          ChoiceUpdates: this.__input.choiceUpdates,
          Notes: this.__input.notes,
          IsApplicable: this.__input.isApplicable,
          Reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAnswer.Answer.Choices', props);
    return resource.getResponseField('Answer.Choices') as unknown as shapes.WellArchitectedChoice[];
  }

  public get selectedChoices(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAnswer',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateAnswer.Answer.SelectedChoices'),
        outputPath: 'Answer.SelectedChoices',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          QuestionId: this.__input.questionId,
          SelectedChoices: this.__input.selectedChoices,
          ChoiceUpdates: this.__input.choiceUpdates,
          Notes: this.__input.notes,
          IsApplicable: this.__input.isApplicable,
          Reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAnswer.Answer.SelectedChoices', props);
    return resource.getResponseField('Answer.SelectedChoices') as unknown as string[];
  }

  public get choiceAnswers(): shapes.WellArchitectedChoiceAnswer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAnswer',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateAnswer.Answer.ChoiceAnswers'),
        outputPath: 'Answer.ChoiceAnswers',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          QuestionId: this.__input.questionId,
          SelectedChoices: this.__input.selectedChoices,
          ChoiceUpdates: this.__input.choiceUpdates,
          Notes: this.__input.notes,
          IsApplicable: this.__input.isApplicable,
          Reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAnswer.Answer.ChoiceAnswers', props);
    return resource.getResponseField('Answer.ChoiceAnswers') as unknown as shapes.WellArchitectedChoiceAnswer[];
  }

  public get isApplicable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAnswer',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateAnswer.Answer.IsApplicable'),
        outputPath: 'Answer.IsApplicable',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          QuestionId: this.__input.questionId,
          SelectedChoices: this.__input.selectedChoices,
          ChoiceUpdates: this.__input.choiceUpdates,
          Notes: this.__input.notes,
          IsApplicable: this.__input.isApplicable,
          Reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAnswer.Answer.IsApplicable', props);
    return resource.getResponseField('Answer.IsApplicable') as unknown as boolean;
  }

  public get risk(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAnswer',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateAnswer.Answer.Risk'),
        outputPath: 'Answer.Risk',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          QuestionId: this.__input.questionId,
          SelectedChoices: this.__input.selectedChoices,
          ChoiceUpdates: this.__input.choiceUpdates,
          Notes: this.__input.notes,
          IsApplicable: this.__input.isApplicable,
          Reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAnswer.Answer.Risk', props);
    return resource.getResponseField('Answer.Risk') as unknown as string;
  }

  public get notes(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAnswer',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateAnswer.Answer.Notes'),
        outputPath: 'Answer.Notes',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          QuestionId: this.__input.questionId,
          SelectedChoices: this.__input.selectedChoices,
          ChoiceUpdates: this.__input.choiceUpdates,
          Notes: this.__input.notes,
          IsApplicable: this.__input.isApplicable,
          Reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAnswer.Answer.Notes', props);
    return resource.getResponseField('Answer.Notes') as unknown as string;
  }

  public get reason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAnswer',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateAnswer.Answer.Reason'),
        outputPath: 'Answer.Reason',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          QuestionId: this.__input.questionId,
          SelectedChoices: this.__input.selectedChoices,
          ChoiceUpdates: this.__input.choiceUpdates,
          Notes: this.__input.notes,
          IsApplicable: this.__input.isApplicable,
          Reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAnswer.Answer.Reason', props);
    return resource.getResponseField('Answer.Reason') as unknown as string;
  }

}

export class WellArchitectedResponsesUpdateLensReview {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedUpdateLensReviewInput) {
  }

  public get workloadId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLensReview',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateLensReview.WorkloadId'),
        outputPath: 'WorkloadId',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          LensNotes: this.__input.lensNotes,
          PillarNotes: this.__input.pillarNotes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLensReview.WorkloadId', props);
    return resource.getResponseField('WorkloadId') as unknown as string;
  }

  public get lensReview(): WellArchitectedResponsesUpdateLensReviewLensReview {
    return new WellArchitectedResponsesUpdateLensReviewLensReview(this.__scope, this.__resources, this.__input);
  }

}

export class WellArchitectedResponsesUpdateLensReviewLensReview {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedUpdateLensReviewInput) {
  }

  public get lensAlias(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLensReview',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateLensReview.LensReview.LensAlias'),
        outputPath: 'LensReview.LensAlias',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          LensNotes: this.__input.lensNotes,
          PillarNotes: this.__input.pillarNotes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLensReview.LensReview.LensAlias', props);
    return resource.getResponseField('LensReview.LensAlias') as unknown as string;
  }

  public get lensVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLensReview',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateLensReview.LensReview.LensVersion'),
        outputPath: 'LensReview.LensVersion',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          LensNotes: this.__input.lensNotes,
          PillarNotes: this.__input.pillarNotes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLensReview.LensReview.LensVersion', props);
    return resource.getResponseField('LensReview.LensVersion') as unknown as string;
  }

  public get lensName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLensReview',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateLensReview.LensReview.LensName'),
        outputPath: 'LensReview.LensName',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          LensNotes: this.__input.lensNotes,
          PillarNotes: this.__input.pillarNotes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLensReview.LensReview.LensName', props);
    return resource.getResponseField('LensReview.LensName') as unknown as string;
  }

  public get lensStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLensReview',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateLensReview.LensReview.LensStatus'),
        outputPath: 'LensReview.LensStatus',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          LensNotes: this.__input.lensNotes,
          PillarNotes: this.__input.pillarNotes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLensReview.LensReview.LensStatus', props);
    return resource.getResponseField('LensReview.LensStatus') as unknown as string;
  }

  public get pillarReviewSummaries(): shapes.WellArchitectedPillarReviewSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLensReview',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateLensReview.LensReview.PillarReviewSummaries'),
        outputPath: 'LensReview.PillarReviewSummaries',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          LensNotes: this.__input.lensNotes,
          PillarNotes: this.__input.pillarNotes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLensReview.LensReview.PillarReviewSummaries', props);
    return resource.getResponseField('LensReview.PillarReviewSummaries') as unknown as shapes.WellArchitectedPillarReviewSummary[];
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLensReview',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateLensReview.LensReview.UpdatedAt'),
        outputPath: 'LensReview.UpdatedAt',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          LensNotes: this.__input.lensNotes,
          PillarNotes: this.__input.pillarNotes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLensReview.LensReview.UpdatedAt', props);
    return resource.getResponseField('LensReview.UpdatedAt') as unknown as string;
  }

  public get notes(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLensReview',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateLensReview.LensReview.Notes'),
        outputPath: 'LensReview.Notes',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          LensNotes: this.__input.lensNotes,
          PillarNotes: this.__input.pillarNotes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLensReview.LensReview.Notes', props);
    return resource.getResponseField('LensReview.Notes') as unknown as string;
  }

  public get riskCounts(): Record<string, number> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLensReview',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateLensReview.LensReview.RiskCounts'),
        outputPath: 'LensReview.RiskCounts',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          LensNotes: this.__input.lensNotes,
          PillarNotes: this.__input.pillarNotes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLensReview.LensReview.RiskCounts', props);
    return resource.getResponseField('LensReview.RiskCounts') as unknown as Record<string, number>;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLensReview',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateLensReview.LensReview.NextToken'),
        outputPath: 'LensReview.NextToken',
        parameters: {
          WorkloadId: this.__input.workloadId,
          LensAlias: this.__input.lensAlias,
          LensNotes: this.__input.lensNotes,
          PillarNotes: this.__input.pillarNotes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLensReview.LensReview.NextToken', props);
    return resource.getResponseField('LensReview.NextToken') as unknown as string;
  }

}

export class WellArchitectedResponsesUpdateShareInvitation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedUpdateShareInvitationInput) {
  }

  public get shareInvitation(): WellArchitectedResponsesUpdateShareInvitationShareInvitation {
    return new WellArchitectedResponsesUpdateShareInvitationShareInvitation(this.__scope, this.__resources, this.__input);
  }

}

export class WellArchitectedResponsesUpdateShareInvitationShareInvitation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedUpdateShareInvitationInput) {
  }

  public get shareInvitationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateShareInvitation',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateShareInvitation.ShareInvitation.ShareInvitationId'),
        outputPath: 'ShareInvitation.ShareInvitationId',
        parameters: {
          ShareInvitationId: this.__input.shareInvitationId,
          ShareInvitationAction: this.__input.shareInvitationAction,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateShareInvitation.ShareInvitation.ShareInvitationId', props);
    return resource.getResponseField('ShareInvitation.ShareInvitationId') as unknown as string;
  }

  public get workloadId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateShareInvitation',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateShareInvitation.ShareInvitation.WorkloadId'),
        outputPath: 'ShareInvitation.WorkloadId',
        parameters: {
          ShareInvitationId: this.__input.shareInvitationId,
          ShareInvitationAction: this.__input.shareInvitationAction,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateShareInvitation.ShareInvitation.WorkloadId', props);
    return resource.getResponseField('ShareInvitation.WorkloadId') as unknown as string;
  }

}

export class WellArchitectedResponsesUpdateWorkload {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedUpdateWorkloadInput) {
  }

  public get workload(): WellArchitectedResponsesUpdateWorkloadWorkload {
    return new WellArchitectedResponsesUpdateWorkloadWorkload(this.__scope, this.__resources, this.__input);
  }

}

export class WellArchitectedResponsesUpdateWorkloadWorkload {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedUpdateWorkloadInput) {
  }

  public get workloadId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateWorkload.Workload.WorkloadId'),
        outputPath: 'Workload.WorkloadId',
        parameters: {
          WorkloadId: this.__input.workloadId,
          WorkloadName: this.__input.workloadName,
          Description: this.__input.description,
          Environment: this.__input.environment,
          AccountIds: this.__input.accountIds,
          AwsRegions: this.__input.awsRegions,
          NonAwsRegions: this.__input.nonAwsRegions,
          PillarPriorities: this.__input.pillarPriorities,
          ArchitecturalDesign: this.__input.architecturalDesign,
          ReviewOwner: this.__input.reviewOwner,
          IsReviewOwnerUpdateAcknowledged: this.__input.isReviewOwnerUpdateAcknowledged,
          IndustryType: this.__input.industryType,
          Industry: this.__input.industry,
          Notes: this.__input.notes,
          ImprovementStatus: this.__input.improvementStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkload.Workload.WorkloadId', props);
    return resource.getResponseField('Workload.WorkloadId') as unknown as string;
  }

  public get workloadArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateWorkload.Workload.WorkloadArn'),
        outputPath: 'Workload.WorkloadArn',
        parameters: {
          WorkloadId: this.__input.workloadId,
          WorkloadName: this.__input.workloadName,
          Description: this.__input.description,
          Environment: this.__input.environment,
          AccountIds: this.__input.accountIds,
          AwsRegions: this.__input.awsRegions,
          NonAwsRegions: this.__input.nonAwsRegions,
          PillarPriorities: this.__input.pillarPriorities,
          ArchitecturalDesign: this.__input.architecturalDesign,
          ReviewOwner: this.__input.reviewOwner,
          IsReviewOwnerUpdateAcknowledged: this.__input.isReviewOwnerUpdateAcknowledged,
          IndustryType: this.__input.industryType,
          Industry: this.__input.industry,
          Notes: this.__input.notes,
          ImprovementStatus: this.__input.improvementStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkload.Workload.WorkloadArn', props);
    return resource.getResponseField('Workload.WorkloadArn') as unknown as string;
  }

  public get workloadName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateWorkload.Workload.WorkloadName'),
        outputPath: 'Workload.WorkloadName',
        parameters: {
          WorkloadId: this.__input.workloadId,
          WorkloadName: this.__input.workloadName,
          Description: this.__input.description,
          Environment: this.__input.environment,
          AccountIds: this.__input.accountIds,
          AwsRegions: this.__input.awsRegions,
          NonAwsRegions: this.__input.nonAwsRegions,
          PillarPriorities: this.__input.pillarPriorities,
          ArchitecturalDesign: this.__input.architecturalDesign,
          ReviewOwner: this.__input.reviewOwner,
          IsReviewOwnerUpdateAcknowledged: this.__input.isReviewOwnerUpdateAcknowledged,
          IndustryType: this.__input.industryType,
          Industry: this.__input.industry,
          Notes: this.__input.notes,
          ImprovementStatus: this.__input.improvementStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkload.Workload.WorkloadName', props);
    return resource.getResponseField('Workload.WorkloadName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateWorkload.Workload.Description'),
        outputPath: 'Workload.Description',
        parameters: {
          WorkloadId: this.__input.workloadId,
          WorkloadName: this.__input.workloadName,
          Description: this.__input.description,
          Environment: this.__input.environment,
          AccountIds: this.__input.accountIds,
          AwsRegions: this.__input.awsRegions,
          NonAwsRegions: this.__input.nonAwsRegions,
          PillarPriorities: this.__input.pillarPriorities,
          ArchitecturalDesign: this.__input.architecturalDesign,
          ReviewOwner: this.__input.reviewOwner,
          IsReviewOwnerUpdateAcknowledged: this.__input.isReviewOwnerUpdateAcknowledged,
          IndustryType: this.__input.industryType,
          Industry: this.__input.industry,
          Notes: this.__input.notes,
          ImprovementStatus: this.__input.improvementStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkload.Workload.Description', props);
    return resource.getResponseField('Workload.Description') as unknown as string;
  }

  public get environment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateWorkload.Workload.Environment'),
        outputPath: 'Workload.Environment',
        parameters: {
          WorkloadId: this.__input.workloadId,
          WorkloadName: this.__input.workloadName,
          Description: this.__input.description,
          Environment: this.__input.environment,
          AccountIds: this.__input.accountIds,
          AwsRegions: this.__input.awsRegions,
          NonAwsRegions: this.__input.nonAwsRegions,
          PillarPriorities: this.__input.pillarPriorities,
          ArchitecturalDesign: this.__input.architecturalDesign,
          ReviewOwner: this.__input.reviewOwner,
          IsReviewOwnerUpdateAcknowledged: this.__input.isReviewOwnerUpdateAcknowledged,
          IndustryType: this.__input.industryType,
          Industry: this.__input.industry,
          Notes: this.__input.notes,
          ImprovementStatus: this.__input.improvementStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkload.Workload.Environment', props);
    return resource.getResponseField('Workload.Environment') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateWorkload.Workload.UpdatedAt'),
        outputPath: 'Workload.UpdatedAt',
        parameters: {
          WorkloadId: this.__input.workloadId,
          WorkloadName: this.__input.workloadName,
          Description: this.__input.description,
          Environment: this.__input.environment,
          AccountIds: this.__input.accountIds,
          AwsRegions: this.__input.awsRegions,
          NonAwsRegions: this.__input.nonAwsRegions,
          PillarPriorities: this.__input.pillarPriorities,
          ArchitecturalDesign: this.__input.architecturalDesign,
          ReviewOwner: this.__input.reviewOwner,
          IsReviewOwnerUpdateAcknowledged: this.__input.isReviewOwnerUpdateAcknowledged,
          IndustryType: this.__input.industryType,
          Industry: this.__input.industry,
          Notes: this.__input.notes,
          ImprovementStatus: this.__input.improvementStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkload.Workload.UpdatedAt', props);
    return resource.getResponseField('Workload.UpdatedAt') as unknown as string;
  }

  public get accountIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateWorkload.Workload.AccountIds'),
        outputPath: 'Workload.AccountIds',
        parameters: {
          WorkloadId: this.__input.workloadId,
          WorkloadName: this.__input.workloadName,
          Description: this.__input.description,
          Environment: this.__input.environment,
          AccountIds: this.__input.accountIds,
          AwsRegions: this.__input.awsRegions,
          NonAwsRegions: this.__input.nonAwsRegions,
          PillarPriorities: this.__input.pillarPriorities,
          ArchitecturalDesign: this.__input.architecturalDesign,
          ReviewOwner: this.__input.reviewOwner,
          IsReviewOwnerUpdateAcknowledged: this.__input.isReviewOwnerUpdateAcknowledged,
          IndustryType: this.__input.industryType,
          Industry: this.__input.industry,
          Notes: this.__input.notes,
          ImprovementStatus: this.__input.improvementStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkload.Workload.AccountIds', props);
    return resource.getResponseField('Workload.AccountIds') as unknown as string[];
  }

  public get awsRegions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateWorkload.Workload.AwsRegions'),
        outputPath: 'Workload.AwsRegions',
        parameters: {
          WorkloadId: this.__input.workloadId,
          WorkloadName: this.__input.workloadName,
          Description: this.__input.description,
          Environment: this.__input.environment,
          AccountIds: this.__input.accountIds,
          AwsRegions: this.__input.awsRegions,
          NonAwsRegions: this.__input.nonAwsRegions,
          PillarPriorities: this.__input.pillarPriorities,
          ArchitecturalDesign: this.__input.architecturalDesign,
          ReviewOwner: this.__input.reviewOwner,
          IsReviewOwnerUpdateAcknowledged: this.__input.isReviewOwnerUpdateAcknowledged,
          IndustryType: this.__input.industryType,
          Industry: this.__input.industry,
          Notes: this.__input.notes,
          ImprovementStatus: this.__input.improvementStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkload.Workload.AwsRegions', props);
    return resource.getResponseField('Workload.AwsRegions') as unknown as string[];
  }

  public get nonAwsRegions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateWorkload.Workload.NonAwsRegions'),
        outputPath: 'Workload.NonAwsRegions',
        parameters: {
          WorkloadId: this.__input.workloadId,
          WorkloadName: this.__input.workloadName,
          Description: this.__input.description,
          Environment: this.__input.environment,
          AccountIds: this.__input.accountIds,
          AwsRegions: this.__input.awsRegions,
          NonAwsRegions: this.__input.nonAwsRegions,
          PillarPriorities: this.__input.pillarPriorities,
          ArchitecturalDesign: this.__input.architecturalDesign,
          ReviewOwner: this.__input.reviewOwner,
          IsReviewOwnerUpdateAcknowledged: this.__input.isReviewOwnerUpdateAcknowledged,
          IndustryType: this.__input.industryType,
          Industry: this.__input.industry,
          Notes: this.__input.notes,
          ImprovementStatus: this.__input.improvementStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkload.Workload.NonAwsRegions', props);
    return resource.getResponseField('Workload.NonAwsRegions') as unknown as string[];
  }

  public get architecturalDesign(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateWorkload.Workload.ArchitecturalDesign'),
        outputPath: 'Workload.ArchitecturalDesign',
        parameters: {
          WorkloadId: this.__input.workloadId,
          WorkloadName: this.__input.workloadName,
          Description: this.__input.description,
          Environment: this.__input.environment,
          AccountIds: this.__input.accountIds,
          AwsRegions: this.__input.awsRegions,
          NonAwsRegions: this.__input.nonAwsRegions,
          PillarPriorities: this.__input.pillarPriorities,
          ArchitecturalDesign: this.__input.architecturalDesign,
          ReviewOwner: this.__input.reviewOwner,
          IsReviewOwnerUpdateAcknowledged: this.__input.isReviewOwnerUpdateAcknowledged,
          IndustryType: this.__input.industryType,
          Industry: this.__input.industry,
          Notes: this.__input.notes,
          ImprovementStatus: this.__input.improvementStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkload.Workload.ArchitecturalDesign', props);
    return resource.getResponseField('Workload.ArchitecturalDesign') as unknown as string;
  }

  public get reviewOwner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateWorkload.Workload.ReviewOwner'),
        outputPath: 'Workload.ReviewOwner',
        parameters: {
          WorkloadId: this.__input.workloadId,
          WorkloadName: this.__input.workloadName,
          Description: this.__input.description,
          Environment: this.__input.environment,
          AccountIds: this.__input.accountIds,
          AwsRegions: this.__input.awsRegions,
          NonAwsRegions: this.__input.nonAwsRegions,
          PillarPriorities: this.__input.pillarPriorities,
          ArchitecturalDesign: this.__input.architecturalDesign,
          ReviewOwner: this.__input.reviewOwner,
          IsReviewOwnerUpdateAcknowledged: this.__input.isReviewOwnerUpdateAcknowledged,
          IndustryType: this.__input.industryType,
          Industry: this.__input.industry,
          Notes: this.__input.notes,
          ImprovementStatus: this.__input.improvementStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkload.Workload.ReviewOwner', props);
    return resource.getResponseField('Workload.ReviewOwner') as unknown as string;
  }

  public get reviewRestrictionDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateWorkload.Workload.ReviewRestrictionDate'),
        outputPath: 'Workload.ReviewRestrictionDate',
        parameters: {
          WorkloadId: this.__input.workloadId,
          WorkloadName: this.__input.workloadName,
          Description: this.__input.description,
          Environment: this.__input.environment,
          AccountIds: this.__input.accountIds,
          AwsRegions: this.__input.awsRegions,
          NonAwsRegions: this.__input.nonAwsRegions,
          PillarPriorities: this.__input.pillarPriorities,
          ArchitecturalDesign: this.__input.architecturalDesign,
          ReviewOwner: this.__input.reviewOwner,
          IsReviewOwnerUpdateAcknowledged: this.__input.isReviewOwnerUpdateAcknowledged,
          IndustryType: this.__input.industryType,
          Industry: this.__input.industry,
          Notes: this.__input.notes,
          ImprovementStatus: this.__input.improvementStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkload.Workload.ReviewRestrictionDate', props);
    return resource.getResponseField('Workload.ReviewRestrictionDate') as unknown as string;
  }

  public get isReviewOwnerUpdateAcknowledged(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateWorkload.Workload.IsReviewOwnerUpdateAcknowledged'),
        outputPath: 'Workload.IsReviewOwnerUpdateAcknowledged',
        parameters: {
          WorkloadId: this.__input.workloadId,
          WorkloadName: this.__input.workloadName,
          Description: this.__input.description,
          Environment: this.__input.environment,
          AccountIds: this.__input.accountIds,
          AwsRegions: this.__input.awsRegions,
          NonAwsRegions: this.__input.nonAwsRegions,
          PillarPriorities: this.__input.pillarPriorities,
          ArchitecturalDesign: this.__input.architecturalDesign,
          ReviewOwner: this.__input.reviewOwner,
          IsReviewOwnerUpdateAcknowledged: this.__input.isReviewOwnerUpdateAcknowledged,
          IndustryType: this.__input.industryType,
          Industry: this.__input.industry,
          Notes: this.__input.notes,
          ImprovementStatus: this.__input.improvementStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkload.Workload.IsReviewOwnerUpdateAcknowledged', props);
    return resource.getResponseField('Workload.IsReviewOwnerUpdateAcknowledged') as unknown as boolean;
  }

  public get industryType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateWorkload.Workload.IndustryType'),
        outputPath: 'Workload.IndustryType',
        parameters: {
          WorkloadId: this.__input.workloadId,
          WorkloadName: this.__input.workloadName,
          Description: this.__input.description,
          Environment: this.__input.environment,
          AccountIds: this.__input.accountIds,
          AwsRegions: this.__input.awsRegions,
          NonAwsRegions: this.__input.nonAwsRegions,
          PillarPriorities: this.__input.pillarPriorities,
          ArchitecturalDesign: this.__input.architecturalDesign,
          ReviewOwner: this.__input.reviewOwner,
          IsReviewOwnerUpdateAcknowledged: this.__input.isReviewOwnerUpdateAcknowledged,
          IndustryType: this.__input.industryType,
          Industry: this.__input.industry,
          Notes: this.__input.notes,
          ImprovementStatus: this.__input.improvementStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkload.Workload.IndustryType', props);
    return resource.getResponseField('Workload.IndustryType') as unknown as string;
  }

  public get industry(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateWorkload.Workload.Industry'),
        outputPath: 'Workload.Industry',
        parameters: {
          WorkloadId: this.__input.workloadId,
          WorkloadName: this.__input.workloadName,
          Description: this.__input.description,
          Environment: this.__input.environment,
          AccountIds: this.__input.accountIds,
          AwsRegions: this.__input.awsRegions,
          NonAwsRegions: this.__input.nonAwsRegions,
          PillarPriorities: this.__input.pillarPriorities,
          ArchitecturalDesign: this.__input.architecturalDesign,
          ReviewOwner: this.__input.reviewOwner,
          IsReviewOwnerUpdateAcknowledged: this.__input.isReviewOwnerUpdateAcknowledged,
          IndustryType: this.__input.industryType,
          Industry: this.__input.industry,
          Notes: this.__input.notes,
          ImprovementStatus: this.__input.improvementStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkload.Workload.Industry', props);
    return resource.getResponseField('Workload.Industry') as unknown as string;
  }

  public get notes(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateWorkload.Workload.Notes'),
        outputPath: 'Workload.Notes',
        parameters: {
          WorkloadId: this.__input.workloadId,
          WorkloadName: this.__input.workloadName,
          Description: this.__input.description,
          Environment: this.__input.environment,
          AccountIds: this.__input.accountIds,
          AwsRegions: this.__input.awsRegions,
          NonAwsRegions: this.__input.nonAwsRegions,
          PillarPriorities: this.__input.pillarPriorities,
          ArchitecturalDesign: this.__input.architecturalDesign,
          ReviewOwner: this.__input.reviewOwner,
          IsReviewOwnerUpdateAcknowledged: this.__input.isReviewOwnerUpdateAcknowledged,
          IndustryType: this.__input.industryType,
          Industry: this.__input.industry,
          Notes: this.__input.notes,
          ImprovementStatus: this.__input.improvementStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkload.Workload.Notes', props);
    return resource.getResponseField('Workload.Notes') as unknown as string;
  }

  public get improvementStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateWorkload.Workload.ImprovementStatus'),
        outputPath: 'Workload.ImprovementStatus',
        parameters: {
          WorkloadId: this.__input.workloadId,
          WorkloadName: this.__input.workloadName,
          Description: this.__input.description,
          Environment: this.__input.environment,
          AccountIds: this.__input.accountIds,
          AwsRegions: this.__input.awsRegions,
          NonAwsRegions: this.__input.nonAwsRegions,
          PillarPriorities: this.__input.pillarPriorities,
          ArchitecturalDesign: this.__input.architecturalDesign,
          ReviewOwner: this.__input.reviewOwner,
          IsReviewOwnerUpdateAcknowledged: this.__input.isReviewOwnerUpdateAcknowledged,
          IndustryType: this.__input.industryType,
          Industry: this.__input.industry,
          Notes: this.__input.notes,
          ImprovementStatus: this.__input.improvementStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkload.Workload.ImprovementStatus', props);
    return resource.getResponseField('Workload.ImprovementStatus') as unknown as string;
  }

  public get riskCounts(): Record<string, number> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateWorkload.Workload.RiskCounts'),
        outputPath: 'Workload.RiskCounts',
        parameters: {
          WorkloadId: this.__input.workloadId,
          WorkloadName: this.__input.workloadName,
          Description: this.__input.description,
          Environment: this.__input.environment,
          AccountIds: this.__input.accountIds,
          AwsRegions: this.__input.awsRegions,
          NonAwsRegions: this.__input.nonAwsRegions,
          PillarPriorities: this.__input.pillarPriorities,
          ArchitecturalDesign: this.__input.architecturalDesign,
          ReviewOwner: this.__input.reviewOwner,
          IsReviewOwnerUpdateAcknowledged: this.__input.isReviewOwnerUpdateAcknowledged,
          IndustryType: this.__input.industryType,
          Industry: this.__input.industry,
          Notes: this.__input.notes,
          ImprovementStatus: this.__input.improvementStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkload.Workload.RiskCounts', props);
    return resource.getResponseField('Workload.RiskCounts') as unknown as Record<string, number>;
  }

  public get pillarPriorities(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateWorkload.Workload.PillarPriorities'),
        outputPath: 'Workload.PillarPriorities',
        parameters: {
          WorkloadId: this.__input.workloadId,
          WorkloadName: this.__input.workloadName,
          Description: this.__input.description,
          Environment: this.__input.environment,
          AccountIds: this.__input.accountIds,
          AwsRegions: this.__input.awsRegions,
          NonAwsRegions: this.__input.nonAwsRegions,
          PillarPriorities: this.__input.pillarPriorities,
          ArchitecturalDesign: this.__input.architecturalDesign,
          ReviewOwner: this.__input.reviewOwner,
          IsReviewOwnerUpdateAcknowledged: this.__input.isReviewOwnerUpdateAcknowledged,
          IndustryType: this.__input.industryType,
          Industry: this.__input.industry,
          Notes: this.__input.notes,
          ImprovementStatus: this.__input.improvementStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkload.Workload.PillarPriorities', props);
    return resource.getResponseField('Workload.PillarPriorities') as unknown as string[];
  }

  public get lenses(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateWorkload.Workload.Lenses'),
        outputPath: 'Workload.Lenses',
        parameters: {
          WorkloadId: this.__input.workloadId,
          WorkloadName: this.__input.workloadName,
          Description: this.__input.description,
          Environment: this.__input.environment,
          AccountIds: this.__input.accountIds,
          AwsRegions: this.__input.awsRegions,
          NonAwsRegions: this.__input.nonAwsRegions,
          PillarPriorities: this.__input.pillarPriorities,
          ArchitecturalDesign: this.__input.architecturalDesign,
          ReviewOwner: this.__input.reviewOwner,
          IsReviewOwnerUpdateAcknowledged: this.__input.isReviewOwnerUpdateAcknowledged,
          IndustryType: this.__input.industryType,
          Industry: this.__input.industry,
          Notes: this.__input.notes,
          ImprovementStatus: this.__input.improvementStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkload.Workload.Lenses', props);
    return resource.getResponseField('Workload.Lenses') as unknown as string[];
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateWorkload.Workload.Owner'),
        outputPath: 'Workload.Owner',
        parameters: {
          WorkloadId: this.__input.workloadId,
          WorkloadName: this.__input.workloadName,
          Description: this.__input.description,
          Environment: this.__input.environment,
          AccountIds: this.__input.accountIds,
          AwsRegions: this.__input.awsRegions,
          NonAwsRegions: this.__input.nonAwsRegions,
          PillarPriorities: this.__input.pillarPriorities,
          ArchitecturalDesign: this.__input.architecturalDesign,
          ReviewOwner: this.__input.reviewOwner,
          IsReviewOwnerUpdateAcknowledged: this.__input.isReviewOwnerUpdateAcknowledged,
          IndustryType: this.__input.industryType,
          Industry: this.__input.industry,
          Notes: this.__input.notes,
          ImprovementStatus: this.__input.improvementStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkload.Workload.Owner', props);
    return resource.getResponseField('Workload.Owner') as unknown as string;
  }

  public get shareInvitationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateWorkload.Workload.ShareInvitationId'),
        outputPath: 'Workload.ShareInvitationId',
        parameters: {
          WorkloadId: this.__input.workloadId,
          WorkloadName: this.__input.workloadName,
          Description: this.__input.description,
          Environment: this.__input.environment,
          AccountIds: this.__input.accountIds,
          AwsRegions: this.__input.awsRegions,
          NonAwsRegions: this.__input.nonAwsRegions,
          PillarPriorities: this.__input.pillarPriorities,
          ArchitecturalDesign: this.__input.architecturalDesign,
          ReviewOwner: this.__input.reviewOwner,
          IsReviewOwnerUpdateAcknowledged: this.__input.isReviewOwnerUpdateAcknowledged,
          IndustryType: this.__input.industryType,
          Industry: this.__input.industry,
          Notes: this.__input.notes,
          ImprovementStatus: this.__input.improvementStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkload.Workload.ShareInvitationId', props);
    return resource.getResponseField('Workload.ShareInvitationId') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkload',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateWorkload.Workload.Tags'),
        outputPath: 'Workload.Tags',
        parameters: {
          WorkloadId: this.__input.workloadId,
          WorkloadName: this.__input.workloadName,
          Description: this.__input.description,
          Environment: this.__input.environment,
          AccountIds: this.__input.accountIds,
          AwsRegions: this.__input.awsRegions,
          NonAwsRegions: this.__input.nonAwsRegions,
          PillarPriorities: this.__input.pillarPriorities,
          ArchitecturalDesign: this.__input.architecturalDesign,
          ReviewOwner: this.__input.reviewOwner,
          IsReviewOwnerUpdateAcknowledged: this.__input.isReviewOwnerUpdateAcknowledged,
          IndustryType: this.__input.industryType,
          Industry: this.__input.industry,
          Notes: this.__input.notes,
          ImprovementStatus: this.__input.improvementStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkload.Workload.Tags', props);
    return resource.getResponseField('Workload.Tags') as unknown as Record<string, string>;
  }

}

export class WellArchitectedResponsesUpdateWorkloadShare {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedUpdateWorkloadShareInput) {
  }

  public get workloadId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkloadShare',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateWorkloadShare.WorkloadId'),
        outputPath: 'WorkloadId',
        parameters: {
          ShareId: this.__input.shareId,
          WorkloadId: this.__input.workloadId,
          PermissionType: this.__input.permissionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkloadShare.WorkloadId', props);
    return resource.getResponseField('WorkloadId') as unknown as string;
  }

  public get workloadShare(): WellArchitectedResponsesUpdateWorkloadShareWorkloadShare {
    return new WellArchitectedResponsesUpdateWorkloadShareWorkloadShare(this.__scope, this.__resources, this.__input);
  }

}

export class WellArchitectedResponsesUpdateWorkloadShareWorkloadShare {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WellArchitectedUpdateWorkloadShareInput) {
  }

  public get shareId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkloadShare',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateWorkloadShare.WorkloadShare.ShareId'),
        outputPath: 'WorkloadShare.ShareId',
        parameters: {
          ShareId: this.__input.shareId,
          WorkloadId: this.__input.workloadId,
          PermissionType: this.__input.permissionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkloadShare.WorkloadShare.ShareId', props);
    return resource.getResponseField('WorkloadShare.ShareId') as unknown as string;
  }

  public get sharedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkloadShare',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateWorkloadShare.WorkloadShare.SharedBy'),
        outputPath: 'WorkloadShare.SharedBy',
        parameters: {
          ShareId: this.__input.shareId,
          WorkloadId: this.__input.workloadId,
          PermissionType: this.__input.permissionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkloadShare.WorkloadShare.SharedBy', props);
    return resource.getResponseField('WorkloadShare.SharedBy') as unknown as string;
  }

  public get sharedWith(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkloadShare',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateWorkloadShare.WorkloadShare.SharedWith'),
        outputPath: 'WorkloadShare.SharedWith',
        parameters: {
          ShareId: this.__input.shareId,
          WorkloadId: this.__input.workloadId,
          PermissionType: this.__input.permissionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkloadShare.WorkloadShare.SharedWith', props);
    return resource.getResponseField('WorkloadShare.SharedWith') as unknown as string;
  }

  public get permissionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkloadShare',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateWorkloadShare.WorkloadShare.PermissionType'),
        outputPath: 'WorkloadShare.PermissionType',
        parameters: {
          ShareId: this.__input.shareId,
          WorkloadId: this.__input.workloadId,
          PermissionType: this.__input.permissionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkloadShare.WorkloadShare.PermissionType', props);
    return resource.getResponseField('WorkloadShare.PermissionType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkloadShare',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateWorkloadShare.WorkloadShare.Status'),
        outputPath: 'WorkloadShare.Status',
        parameters: {
          ShareId: this.__input.shareId,
          WorkloadId: this.__input.workloadId,
          PermissionType: this.__input.permissionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkloadShare.WorkloadShare.Status', props);
    return resource.getResponseField('WorkloadShare.Status') as unknown as string;
  }

  public get workloadName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkloadShare',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateWorkloadShare.WorkloadShare.WorkloadName'),
        outputPath: 'WorkloadShare.WorkloadName',
        parameters: {
          ShareId: this.__input.shareId,
          WorkloadId: this.__input.workloadId,
          PermissionType: this.__input.permissionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkloadShare.WorkloadShare.WorkloadName', props);
    return resource.getResponseField('WorkloadShare.WorkloadName') as unknown as string;
  }

  public get workloadId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkloadShare',
        service: 'WellArchitected',
        physicalResourceId: cr.PhysicalResourceId.of('WellArchitected.UpdateWorkloadShare.WorkloadShare.WorkloadId'),
        outputPath: 'WorkloadShare.WorkloadId',
        parameters: {
          ShareId: this.__input.shareId,
          WorkloadId: this.__input.workloadId,
          PermissionType: this.__input.permissionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkloadShare.WorkloadShare.WorkloadId', props);
    return resource.getResponseField('WorkloadShare.WorkloadId') as unknown as string;
  }

}

