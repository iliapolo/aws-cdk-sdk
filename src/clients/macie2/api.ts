import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class Macie2Client extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public acceptInvitation(input: shapes.Macie2AcceptInvitationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptInvitation',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.AcceptInvitation'),
        parameters: {
          invitationId: input.invitationId,
          masterAccount: input.masterAccount,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AcceptInvitation', props);
  }

  public batchGetCustomDataIdentifiers(input: shapes.Macie2BatchGetCustomDataIdentifiersRequest): Macie2BatchGetCustomDataIdentifiers {
    return new Macie2BatchGetCustomDataIdentifiers(this, 'BatchGetCustomDataIdentifiers', this.__resources, input);
  }

  public createClassificationJob(input: shapes.Macie2CreateClassificationJobRequest): Macie2CreateClassificationJob {
    return new Macie2CreateClassificationJob(this, 'CreateClassificationJob', this.__resources, input);
  }

  public createCustomDataIdentifier(input: shapes.Macie2CreateCustomDataIdentifierRequest): Macie2CreateCustomDataIdentifier {
    return new Macie2CreateCustomDataIdentifier(this, 'CreateCustomDataIdentifier', this.__resources, input);
  }

  public createFindingsFilter(input: shapes.Macie2CreateFindingsFilterRequest): Macie2CreateFindingsFilter {
    return new Macie2CreateFindingsFilter(this, 'CreateFindingsFilter', this.__resources, input);
  }

  public createInvitations(input: shapes.Macie2CreateInvitationsRequest): Macie2CreateInvitations {
    return new Macie2CreateInvitations(this, 'CreateInvitations', this.__resources, input);
  }

  public createMember(input: shapes.Macie2CreateMemberRequest): Macie2CreateMember {
    return new Macie2CreateMember(this, 'CreateMember', this.__resources, input);
  }

  public createSampleFindings(input: shapes.Macie2CreateSampleFindingsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSampleFindings',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.CreateSampleFindings'),
        parameters: {
          findingTypes: input.findingTypes,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateSampleFindings', props);
  }

  public declineInvitations(input: shapes.Macie2DeclineInvitationsRequest): Macie2DeclineInvitations {
    return new Macie2DeclineInvitations(this, 'DeclineInvitations', this.__resources, input);
  }

  public deleteCustomDataIdentifier(input: shapes.Macie2DeleteCustomDataIdentifierRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCustomDataIdentifier',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DeleteCustomDataIdentifier'),
        parameters: {
          id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteCustomDataIdentifier', props);
  }

  public deleteFindingsFilter(input: shapes.Macie2DeleteFindingsFilterRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFindingsFilter',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DeleteFindingsFilter'),
        parameters: {
          id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteFindingsFilter', props);
  }

  public deleteInvitations(input: shapes.Macie2DeleteInvitationsRequest): Macie2DeleteInvitations {
    return new Macie2DeleteInvitations(this, 'DeleteInvitations', this.__resources, input);
  }

  public deleteMember(input: shapes.Macie2DeleteMemberRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteMember',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DeleteMember'),
        parameters: {
          id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteMember', props);
  }

  public describeBuckets(input: shapes.Macie2DescribeBucketsRequest): Macie2DescribeBuckets {
    return new Macie2DescribeBuckets(this, 'DescribeBuckets', this.__resources, input);
  }

  public describeClassificationJob(input: shapes.Macie2DescribeClassificationJobRequest): Macie2DescribeClassificationJob {
    return new Macie2DescribeClassificationJob(this, 'DescribeClassificationJob', this.__resources, input);
  }

  public describeOrganizationConfiguration(): Macie2DescribeOrganizationConfiguration {
    return new Macie2DescribeOrganizationConfiguration(this, 'DescribeOrganizationConfiguration', this.__resources);
  }

  public disableMacie(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disableMacie',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DisableMacie'),
        parameters: {
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisableMacie', props);
  }

  public disableOrganizationAdminAccount(input: shapes.Macie2DisableOrganizationAdminAccountRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disableOrganizationAdminAccount',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DisableOrganizationAdminAccount'),
        parameters: {
          adminAccountId: input.adminAccountId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisableOrganizationAdminAccount', props);
  }

  public disassociateFromMasterAccount(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateFromMasterAccount',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DisassociateFromMasterAccount'),
        parameters: {
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateFromMasterAccount', props);
  }

  public disassociateMember(input: shapes.Macie2DisassociateMemberRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateMember',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DisassociateMember'),
        parameters: {
          id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateMember', props);
  }

  public enableMacie(input: shapes.Macie2EnableMacieRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableMacie',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.EnableMacie'),
        parameters: {
          clientToken: input.clientToken,
          findingPublishingFrequency: input.findingPublishingFrequency,
          status: input.status,
        },
      },
    };
    new cr.AwsCustomResource(this, 'EnableMacie', props);
  }

  public enableOrganizationAdminAccount(input: shapes.Macie2EnableOrganizationAdminAccountRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableOrganizationAdminAccount',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.EnableOrganizationAdminAccount'),
        parameters: {
          adminAccountId: input.adminAccountId,
          clientToken: input.clientToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'EnableOrganizationAdminAccount', props);
  }

  public fetchBucketStatistics(input: shapes.Macie2GetBucketStatisticsRequest): Macie2FetchBucketStatistics {
    return new Macie2FetchBucketStatistics(this, 'FetchBucketStatistics', this.__resources, input);
  }

  public fetchClassificationExportConfiguration(): Macie2FetchClassificationExportConfiguration {
    return new Macie2FetchClassificationExportConfiguration(this, 'FetchClassificationExportConfiguration', this.__resources);
  }

  public fetchCustomDataIdentifier(input: shapes.Macie2GetCustomDataIdentifierRequest): Macie2FetchCustomDataIdentifier {
    return new Macie2FetchCustomDataIdentifier(this, 'FetchCustomDataIdentifier', this.__resources, input);
  }

  public fetchFindingStatistics(input: shapes.Macie2GetFindingStatisticsRequest): Macie2FetchFindingStatistics {
    return new Macie2FetchFindingStatistics(this, 'FetchFindingStatistics', this.__resources, input);
  }

  public fetchFindings(input: shapes.Macie2GetFindingsRequest): Macie2FetchFindings {
    return new Macie2FetchFindings(this, 'FetchFindings', this.__resources, input);
  }

  public fetchFindingsFilter(input: shapes.Macie2GetFindingsFilterRequest): Macie2FetchFindingsFilter {
    return new Macie2FetchFindingsFilter(this, 'FetchFindingsFilter', this.__resources, input);
  }

  public fetchInvitationsCount(): Macie2FetchInvitationsCount {
    return new Macie2FetchInvitationsCount(this, 'FetchInvitationsCount', this.__resources);
  }

  public fetchMacieSession(): Macie2FetchMacieSession {
    return new Macie2FetchMacieSession(this, 'FetchMacieSession', this.__resources);
  }

  public fetchMasterAccount(): Macie2FetchMasterAccount {
    return new Macie2FetchMasterAccount(this, 'FetchMasterAccount', this.__resources);
  }

  public fetchMember(input: shapes.Macie2GetMemberRequest): Macie2FetchMember {
    return new Macie2FetchMember(this, 'FetchMember', this.__resources, input);
  }

  public fetchUsageStatistics(input: shapes.Macie2GetUsageStatisticsRequest): Macie2FetchUsageStatistics {
    return new Macie2FetchUsageStatistics(this, 'FetchUsageStatistics', this.__resources, input);
  }

  public fetchUsageTotals(): Macie2FetchUsageTotals {
    return new Macie2FetchUsageTotals(this, 'FetchUsageTotals', this.__resources);
  }

  public listClassificationJobs(input: shapes.Macie2ListClassificationJobsRequest): Macie2ListClassificationJobs {
    return new Macie2ListClassificationJobs(this, 'ListClassificationJobs', this.__resources, input);
  }

  public listCustomDataIdentifiers(input: shapes.Macie2ListCustomDataIdentifiersRequest): Macie2ListCustomDataIdentifiers {
    return new Macie2ListCustomDataIdentifiers(this, 'ListCustomDataIdentifiers', this.__resources, input);
  }

  public listFindings(input: shapes.Macie2ListFindingsRequest): Macie2ListFindings {
    return new Macie2ListFindings(this, 'ListFindings', this.__resources, input);
  }

  public listFindingsFilters(input: shapes.Macie2ListFindingsFiltersRequest): Macie2ListFindingsFilters {
    return new Macie2ListFindingsFilters(this, 'ListFindingsFilters', this.__resources, input);
  }

  public listInvitations(input: shapes.Macie2ListInvitationsRequest): Macie2ListInvitations {
    return new Macie2ListInvitations(this, 'ListInvitations', this.__resources, input);
  }

  public listMembers(input: shapes.Macie2ListMembersRequest): Macie2ListMembers {
    return new Macie2ListMembers(this, 'ListMembers', this.__resources, input);
  }

  public listOrganizationAdminAccounts(input: shapes.Macie2ListOrganizationAdminAccountsRequest): Macie2ListOrganizationAdminAccounts {
    return new Macie2ListOrganizationAdminAccounts(this, 'ListOrganizationAdminAccounts', this.__resources, input);
  }

  public listTagsForResource(input: shapes.Macie2ListTagsForResourceRequest): Macie2ListTagsForResource {
    return new Macie2ListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public putClassificationExportConfiguration(input: shapes.Macie2PutClassificationExportConfigurationRequest): Macie2PutClassificationExportConfiguration {
    return new Macie2PutClassificationExportConfiguration(this, 'PutClassificationExportConfiguration', this.__resources, input);
  }

  public tagResource(input: shapes.Macie2TagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public testCustomDataIdentifier(input: shapes.Macie2TestCustomDataIdentifierRequest): Macie2TestCustomDataIdentifier {
    return new Macie2TestCustomDataIdentifier(this, 'TestCustomDataIdentifier', this.__resources, input);
  }

  public untagResource(input: shapes.Macie2UntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateClassificationJob(input: shapes.Macie2UpdateClassificationJobRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClassificationJob',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.UpdateClassificationJob'),
        parameters: {
          jobId: input.jobId,
          jobStatus: input.jobStatus,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateClassificationJob', props);
  }

  public updateFindingsFilter(input: shapes.Macie2UpdateFindingsFilterRequest): Macie2UpdateFindingsFilter {
    return new Macie2UpdateFindingsFilter(this, 'UpdateFindingsFilter', this.__resources, input);
  }

  public updateMacieSession(input: shapes.Macie2UpdateMacieSessionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMacieSession',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.UpdateMacieSession'),
        parameters: {
          findingPublishingFrequency: input.findingPublishingFrequency,
          status: input.status,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateMacieSession', props);
  }

  public updateMemberSession(input: shapes.Macie2UpdateMemberSessionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMemberSession',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.UpdateMemberSession'),
        parameters: {
          id: input.id,
          status: input.status,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateMemberSession', props);
  }

  public updateOrganizationConfiguration(input: shapes.Macie2UpdateOrganizationConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateOrganizationConfiguration',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.UpdateOrganizationConfiguration'),
        parameters: {
          autoEnable: input.autoEnable,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateOrganizationConfiguration', props);
  }

}

export class Macie2BatchGetCustomDataIdentifiers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2BatchGetCustomDataIdentifiersRequest) {
    super(scope, id);
  }

  public get customDataIdentifiers(): shapes.Macie2BatchGetCustomDataIdentifierSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetCustomDataIdentifiers',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.BatchGetCustomDataIdentifiers.customDataIdentifiers'),
        outputPath: 'customDataIdentifiers',
        parameters: {
          ids: this.input.ids,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetCustomDataIdentifiers.customDataIdentifiers', props);
    return resource.getResponseField('customDataIdentifiers') as unknown as shapes.Macie2BatchGetCustomDataIdentifierSummary[];
  }

  public get notFoundIdentifierIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetCustomDataIdentifiers',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.BatchGetCustomDataIdentifiers.notFoundIdentifierIds'),
        outputPath: 'notFoundIdentifierIds',
        parameters: {
          ids: this.input.ids,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetCustomDataIdentifiers.notFoundIdentifierIds', props);
    return resource.getResponseField('notFoundIdentifierIds') as unknown as string[];
  }

}

export class Macie2CreateClassificationJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2CreateClassificationJobRequest) {
    super(scope, id);
  }

  public get jobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createClassificationJob',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.CreateClassificationJob.jobArn'),
        outputPath: 'jobArn',
        parameters: {
          clientToken: this.input.clientToken,
          customDataIdentifierIds: this.input.customDataIdentifierIds,
          description: this.input.description,
          initialRun: this.input.initialRun,
          jobType: this.input.jobType,
          name: this.input.name,
          s3JobDefinition: {
            bucketDefinitions: this.input.s3JobDefinition.bucketDefinitions,
            scoping: {
              excludes: {
                and: this.input.s3JobDefinition.scoping?.excludes?.and,
              },
              includes: {
                and: this.input.s3JobDefinition.scoping?.includes?.and,
              },
            },
          },
          samplingPercentage: this.input.samplingPercentage,
          scheduleFrequency: {
            dailySchedule: {
            },
            monthlySchedule: {
              dayOfMonth: this.input.scheduleFrequency?.monthlySchedule?.dayOfMonth,
            },
            weeklySchedule: {
              dayOfWeek: this.input.scheduleFrequency?.weeklySchedule?.dayOfWeek,
            },
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateClassificationJob.jobArn', props);
    return resource.getResponseField('jobArn') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createClassificationJob',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.CreateClassificationJob.jobId'),
        outputPath: 'jobId',
        parameters: {
          clientToken: this.input.clientToken,
          customDataIdentifierIds: this.input.customDataIdentifierIds,
          description: this.input.description,
          initialRun: this.input.initialRun,
          jobType: this.input.jobType,
          name: this.input.name,
          s3JobDefinition: {
            bucketDefinitions: this.input.s3JobDefinition.bucketDefinitions,
            scoping: {
              excludes: {
                and: this.input.s3JobDefinition.scoping?.excludes?.and,
              },
              includes: {
                and: this.input.s3JobDefinition.scoping?.includes?.and,
              },
            },
          },
          samplingPercentage: this.input.samplingPercentage,
          scheduleFrequency: {
            dailySchedule: {
            },
            monthlySchedule: {
              dayOfMonth: this.input.scheduleFrequency?.monthlySchedule?.dayOfMonth,
            },
            weeklySchedule: {
              dayOfWeek: this.input.scheduleFrequency?.weeklySchedule?.dayOfWeek,
            },
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateClassificationJob.jobId', props);
    return resource.getResponseField('jobId') as unknown as string;
  }

}

export class Macie2CreateCustomDataIdentifier extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2CreateCustomDataIdentifierRequest) {
    super(scope, id);
  }

  public get customDataIdentifierId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCustomDataIdentifier',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.CreateCustomDataIdentifier.customDataIdentifierId'),
        outputPath: 'customDataIdentifierId',
        parameters: {
          clientToken: this.input.clientToken,
          description: this.input.description,
          ignoreWords: this.input.ignoreWords,
          keywords: this.input.keywords,
          maximumMatchDistance: this.input.maximumMatchDistance,
          name: this.input.name,
          regex: this.input.regex,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCustomDataIdentifier.customDataIdentifierId', props);
    return resource.getResponseField('customDataIdentifierId') as unknown as string;
  }

}

export class Macie2CreateFindingsFilter extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2CreateFindingsFilterRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFindingsFilter',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.CreateFindingsFilter.arn'),
        outputPath: 'arn',
        parameters: {
          action: this.input.action,
          clientToken: this.input.clientToken,
          description: this.input.description,
          findingCriteria: {
            criterion: this.input.findingCriteria.criterion,
          },
          name: this.input.name,
          position: this.input.position,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFindingsFilter.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFindingsFilter',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.CreateFindingsFilter.id'),
        outputPath: 'id',
        parameters: {
          action: this.input.action,
          clientToken: this.input.clientToken,
          description: this.input.description,
          findingCriteria: {
            criterion: this.input.findingCriteria.criterion,
          },
          name: this.input.name,
          position: this.input.position,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFindingsFilter.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

}

export class Macie2CreateInvitations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2CreateInvitationsRequest) {
    super(scope, id);
  }

  public get unprocessedAccounts(): shapes.Macie2UnprocessedAccount[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInvitations',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.CreateInvitations.unprocessedAccounts'),
        outputPath: 'unprocessedAccounts',
        parameters: {
          accountIds: this.input.accountIds,
          disableEmailNotification: this.input.disableEmailNotification,
          message: this.input.message,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInvitations.unprocessedAccounts', props);
    return resource.getResponseField('unprocessedAccounts') as unknown as shapes.Macie2UnprocessedAccount[];
  }

}

export class Macie2CreateMember extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2CreateMemberRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMember',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.CreateMember.arn'),
        outputPath: 'arn',
        parameters: {
          account: {
            accountId: this.input.account.accountId,
            email: this.input.account.email,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMember.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

}

export class Macie2DeclineInvitations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2DeclineInvitationsRequest) {
    super(scope, id);
  }

  public get unprocessedAccounts(): shapes.Macie2UnprocessedAccount[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'declineInvitations',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DeclineInvitations.unprocessedAccounts'),
        outputPath: 'unprocessedAccounts',
        parameters: {
          accountIds: this.input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeclineInvitations.unprocessedAccounts', props);
    return resource.getResponseField('unprocessedAccounts') as unknown as shapes.Macie2UnprocessedAccount[];
  }

}

export class Macie2DeleteInvitations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2DeleteInvitationsRequest) {
    super(scope, id);
  }

  public get unprocessedAccounts(): shapes.Macie2UnprocessedAccount[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteInvitations',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DeleteInvitations.unprocessedAccounts'),
        outputPath: 'unprocessedAccounts',
        parameters: {
          accountIds: this.input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteInvitations.unprocessedAccounts', props);
    return resource.getResponseField('unprocessedAccounts') as unknown as shapes.Macie2UnprocessedAccount[];
  }

}

export class Macie2DescribeBuckets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2DescribeBucketsRequest) {
    super(scope, id);
  }

  public get buckets(): shapes.Macie2BucketMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBuckets',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DescribeBuckets.buckets'),
        outputPath: 'buckets',
        parameters: {
          criteria: this.input.criteria,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          sortCriteria: {
            attributeName: this.input.sortCriteria?.attributeName,
            orderBy: this.input.sortCriteria?.orderBy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBuckets.buckets', props);
    return resource.getResponseField('buckets') as unknown as shapes.Macie2BucketMetadata[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBuckets',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DescribeBuckets.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          criteria: this.input.criteria,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          sortCriteria: {
            attributeName: this.input.sortCriteria?.attributeName,
            orderBy: this.input.sortCriteria?.orderBy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBuckets.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class Macie2DescribeClassificationJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2DescribeClassificationJobRequest) {
    super(scope, id);
  }

  public get clientToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DescribeClassificationJob.clientToken'),
        outputPath: 'clientToken',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClassificationJob.clientToken', props);
    return resource.getResponseField('clientToken') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DescribeClassificationJob.createdAt'),
        outputPath: 'createdAt',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClassificationJob.createdAt', props);
    return resource.getResponseField('createdAt') as unknown as string;
  }

  public get customDataIdentifierIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DescribeClassificationJob.customDataIdentifierIds'),
        outputPath: 'customDataIdentifierIds',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClassificationJob.customDataIdentifierIds', props);
    return resource.getResponseField('customDataIdentifierIds') as unknown as string[];
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DescribeClassificationJob.description'),
        outputPath: 'description',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClassificationJob.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get initialRun(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DescribeClassificationJob.initialRun'),
        outputPath: 'initialRun',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClassificationJob.initialRun', props);
    return resource.getResponseField('initialRun') as unknown as boolean;
  }

  public get jobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DescribeClassificationJob.jobArn'),
        outputPath: 'jobArn',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClassificationJob.jobArn', props);
    return resource.getResponseField('jobArn') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DescribeClassificationJob.jobId'),
        outputPath: 'jobId',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClassificationJob.jobId', props);
    return resource.getResponseField('jobId') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DescribeClassificationJob.jobStatus'),
        outputPath: 'jobStatus',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClassificationJob.jobStatus', props);
    return resource.getResponseField('jobStatus') as unknown as string;
  }

  public get jobType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DescribeClassificationJob.jobType'),
        outputPath: 'jobType',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClassificationJob.jobType', props);
    return resource.getResponseField('jobType') as unknown as string;
  }

  public get lastRunErrorStatus(): Macie2DescribeClassificationJobLastRunErrorStatus {
    return new Macie2DescribeClassificationJobLastRunErrorStatus(this, 'LastRunErrorStatus', this.__resources, this.input);
  }

  public get lastRunTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DescribeClassificationJob.lastRunTime'),
        outputPath: 'lastRunTime',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClassificationJob.lastRunTime', props);
    return resource.getResponseField('lastRunTime') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DescribeClassificationJob.name'),
        outputPath: 'name',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClassificationJob.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get s3JobDefinition(): Macie2DescribeClassificationJobS3JobDefinition {
    return new Macie2DescribeClassificationJobS3JobDefinition(this, 'S3JobDefinition', this.__resources, this.input);
  }

  public get samplingPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DescribeClassificationJob.samplingPercentage'),
        outputPath: 'samplingPercentage',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClassificationJob.samplingPercentage', props);
    return resource.getResponseField('samplingPercentage') as unknown as number;
  }

  public get scheduleFrequency(): Macie2DescribeClassificationJobScheduleFrequency {
    return new Macie2DescribeClassificationJobScheduleFrequency(this, 'ScheduleFrequency', this.__resources, this.input);
  }

  public get statistics(): Macie2DescribeClassificationJobStatistics {
    return new Macie2DescribeClassificationJobStatistics(this, 'Statistics', this.__resources, this.input);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DescribeClassificationJob.tags'),
        outputPath: 'tags',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClassificationJob.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

  public get userPausedDetails(): Macie2DescribeClassificationJobUserPausedDetails {
    return new Macie2DescribeClassificationJobUserPausedDetails(this, 'UserPausedDetails', this.__resources, this.input);
  }

}

export class Macie2DescribeClassificationJobLastRunErrorStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2DescribeClassificationJobRequest) {
    super(scope, id);
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DescribeClassificationJob.lastRunErrorStatus.code'),
        outputPath: 'lastRunErrorStatus.code',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClassificationJob.lastRunErrorStatus.code', props);
    return resource.getResponseField('lastRunErrorStatus.code') as unknown as string;
  }

}

export class Macie2DescribeClassificationJobS3JobDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2DescribeClassificationJobRequest) {
    super(scope, id);
  }

  public get bucketDefinitions(): shapes.Macie2S3BucketDefinitionForJob[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DescribeClassificationJob.s3JobDefinition.bucketDefinitions'),
        outputPath: 's3JobDefinition.bucketDefinitions',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClassificationJob.s3JobDefinition.bucketDefinitions', props);
    return resource.getResponseField('s3JobDefinition.bucketDefinitions') as unknown as shapes.Macie2S3BucketDefinitionForJob[];
  }

  public get scoping(): Macie2DescribeClassificationJobS3JobDefinitionScoping {
    return new Macie2DescribeClassificationJobS3JobDefinitionScoping(this, 'Scoping', this.__resources, this.input);
  }

}

export class Macie2DescribeClassificationJobS3JobDefinitionScoping extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2DescribeClassificationJobRequest) {
    super(scope, id);
  }

  public get excludes(): Macie2DescribeClassificationJobS3JobDefinitionScopingExcludes {
    return new Macie2DescribeClassificationJobS3JobDefinitionScopingExcludes(this, 'Excludes', this.__resources, this.input);
  }

  public get includes(): Macie2DescribeClassificationJobS3JobDefinitionScopingIncludes {
    return new Macie2DescribeClassificationJobS3JobDefinitionScopingIncludes(this, 'Includes', this.__resources, this.input);
  }

}

export class Macie2DescribeClassificationJobS3JobDefinitionScopingExcludes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2DescribeClassificationJobRequest) {
    super(scope, id);
  }

  public get and(): shapes.Macie2JobScopeTerm[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DescribeClassificationJob.s3JobDefinition.scoping.excludes.and'),
        outputPath: 's3JobDefinition.scoping.excludes.and',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClassificationJob.s3JobDefinition.scoping.excludes.and', props);
    return resource.getResponseField('s3JobDefinition.scoping.excludes.and') as unknown as shapes.Macie2JobScopeTerm[];
  }

}

export class Macie2DescribeClassificationJobS3JobDefinitionScopingIncludes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2DescribeClassificationJobRequest) {
    super(scope, id);
  }

  public get and(): shapes.Macie2JobScopeTerm[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DescribeClassificationJob.s3JobDefinition.scoping.includes.and'),
        outputPath: 's3JobDefinition.scoping.includes.and',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClassificationJob.s3JobDefinition.scoping.includes.and', props);
    return resource.getResponseField('s3JobDefinition.scoping.includes.and') as unknown as shapes.Macie2JobScopeTerm[];
  }

}

export class Macie2DescribeClassificationJobScheduleFrequency extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2DescribeClassificationJobRequest) {
    super(scope, id);
  }

  public get dailySchedule(): Macie2DescribeClassificationJobScheduleFrequencyDailySchedule {
    return new Macie2DescribeClassificationJobScheduleFrequencyDailySchedule(this, 'DailySchedule');
  }

  public get monthlySchedule(): Macie2DescribeClassificationJobScheduleFrequencyMonthlySchedule {
    return new Macie2DescribeClassificationJobScheduleFrequencyMonthlySchedule(this, 'MonthlySchedule', this.__resources, this.input);
  }

  public get weeklySchedule(): Macie2DescribeClassificationJobScheduleFrequencyWeeklySchedule {
    return new Macie2DescribeClassificationJobScheduleFrequencyWeeklySchedule(this, 'WeeklySchedule', this.__resources, this.input);
  }

}

export class Macie2DescribeClassificationJobScheduleFrequencyDailySchedule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);
  }

}

export class Macie2DescribeClassificationJobScheduleFrequencyMonthlySchedule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2DescribeClassificationJobRequest) {
    super(scope, id);
  }

  public get dayOfMonth(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DescribeClassificationJob.scheduleFrequency.monthlySchedule.dayOfMonth'),
        outputPath: 'scheduleFrequency.monthlySchedule.dayOfMonth',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClassificationJob.scheduleFrequency.monthlySchedule.dayOfMonth', props);
    return resource.getResponseField('scheduleFrequency.monthlySchedule.dayOfMonth') as unknown as number;
  }

}

export class Macie2DescribeClassificationJobScheduleFrequencyWeeklySchedule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2DescribeClassificationJobRequest) {
    super(scope, id);
  }

  public get dayOfWeek(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DescribeClassificationJob.scheduleFrequency.weeklySchedule.dayOfWeek'),
        outputPath: 'scheduleFrequency.weeklySchedule.dayOfWeek',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClassificationJob.scheduleFrequency.weeklySchedule.dayOfWeek', props);
    return resource.getResponseField('scheduleFrequency.weeklySchedule.dayOfWeek') as unknown as string;
  }

}

export class Macie2DescribeClassificationJobStatistics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2DescribeClassificationJobRequest) {
    super(scope, id);
  }

  public get approximateNumberOfObjectsToProcess(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DescribeClassificationJob.statistics.approximateNumberOfObjectsToProcess'),
        outputPath: 'statistics.approximateNumberOfObjectsToProcess',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClassificationJob.statistics.approximateNumberOfObjectsToProcess', props);
    return resource.getResponseField('statistics.approximateNumberOfObjectsToProcess') as unknown as number;
  }

  public get numberOfRuns(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DescribeClassificationJob.statistics.numberOfRuns'),
        outputPath: 'statistics.numberOfRuns',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClassificationJob.statistics.numberOfRuns', props);
    return resource.getResponseField('statistics.numberOfRuns') as unknown as number;
  }

}

export class Macie2DescribeClassificationJobUserPausedDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2DescribeClassificationJobRequest) {
    super(scope, id);
  }

  public get jobExpiresAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DescribeClassificationJob.userPausedDetails.jobExpiresAt'),
        outputPath: 'userPausedDetails.jobExpiresAt',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClassificationJob.userPausedDetails.jobExpiresAt', props);
    return resource.getResponseField('userPausedDetails.jobExpiresAt') as unknown as string;
  }

  public get jobImminentExpirationHealthEventArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DescribeClassificationJob.userPausedDetails.jobImminentExpirationHealthEventArn'),
        outputPath: 'userPausedDetails.jobImminentExpirationHealthEventArn',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClassificationJob.userPausedDetails.jobImminentExpirationHealthEventArn', props);
    return resource.getResponseField('userPausedDetails.jobImminentExpirationHealthEventArn') as unknown as string;
  }

  public get jobPausedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DescribeClassificationJob.userPausedDetails.jobPausedAt'),
        outputPath: 'userPausedDetails.jobPausedAt',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClassificationJob.userPausedDetails.jobPausedAt', props);
    return resource.getResponseField('userPausedDetails.jobPausedAt') as unknown as string;
  }

}

export class Macie2DescribeOrganizationConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get autoEnable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOrganizationConfiguration',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DescribeOrganizationConfiguration.autoEnable'),
        outputPath: 'autoEnable',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeOrganizationConfiguration.autoEnable', props);
    return resource.getResponseField('autoEnable') as unknown as boolean;
  }

  public get maxAccountLimitReached(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOrganizationConfiguration',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DescribeOrganizationConfiguration.maxAccountLimitReached'),
        outputPath: 'maxAccountLimitReached',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeOrganizationConfiguration.maxAccountLimitReached', props);
    return resource.getResponseField('maxAccountLimitReached') as unknown as boolean;
  }

}

export class Macie2FetchBucketStatistics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2GetBucketStatisticsRequest) {
    super(scope, id);
  }

  public get bucketCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetBucketStatistics.bucketCount'),
        outputPath: 'bucketCount',
        parameters: {
          accountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketStatistics.bucketCount', props);
    return resource.getResponseField('bucketCount') as unknown as number;
  }

  public get bucketCountByEffectivePermission(): Macie2FetchBucketStatisticsBucketCountByEffectivePermission {
    return new Macie2FetchBucketStatisticsBucketCountByEffectivePermission(this, 'BucketCountByEffectivePermission', this.__resources, this.input);
  }

  public get bucketCountByEncryptionType(): Macie2FetchBucketStatisticsBucketCountByEncryptionType {
    return new Macie2FetchBucketStatisticsBucketCountByEncryptionType(this, 'BucketCountByEncryptionType', this.__resources, this.input);
  }

  public get bucketCountBySharedAccessType(): Macie2FetchBucketStatisticsBucketCountBySharedAccessType {
    return new Macie2FetchBucketStatisticsBucketCountBySharedAccessType(this, 'BucketCountBySharedAccessType', this.__resources, this.input);
  }

  public get classifiableObjectCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetBucketStatistics.classifiableObjectCount'),
        outputPath: 'classifiableObjectCount',
        parameters: {
          accountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketStatistics.classifiableObjectCount', props);
    return resource.getResponseField('classifiableObjectCount') as unknown as number;
  }

  public get classifiableSizeInBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetBucketStatistics.classifiableSizeInBytes'),
        outputPath: 'classifiableSizeInBytes',
        parameters: {
          accountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketStatistics.classifiableSizeInBytes', props);
    return resource.getResponseField('classifiableSizeInBytes') as unknown as number;
  }

  public get lastUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetBucketStatistics.lastUpdated'),
        outputPath: 'lastUpdated',
        parameters: {
          accountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketStatistics.lastUpdated', props);
    return resource.getResponseField('lastUpdated') as unknown as string;
  }

  public get objectCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetBucketStatistics.objectCount'),
        outputPath: 'objectCount',
        parameters: {
          accountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketStatistics.objectCount', props);
    return resource.getResponseField('objectCount') as unknown as number;
  }

  public get sizeInBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetBucketStatistics.sizeInBytes'),
        outputPath: 'sizeInBytes',
        parameters: {
          accountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketStatistics.sizeInBytes', props);
    return resource.getResponseField('sizeInBytes') as unknown as number;
  }

  public get sizeInBytesCompressed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetBucketStatistics.sizeInBytesCompressed'),
        outputPath: 'sizeInBytesCompressed',
        parameters: {
          accountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketStatistics.sizeInBytesCompressed', props);
    return resource.getResponseField('sizeInBytesCompressed') as unknown as number;
  }

  public get unclassifiableObjectCount(): Macie2FetchBucketStatisticsUnclassifiableObjectCount {
    return new Macie2FetchBucketStatisticsUnclassifiableObjectCount(this, 'UnclassifiableObjectCount', this.__resources, this.input);
  }

  public get unclassifiableObjectSizeInBytes(): Macie2FetchBucketStatisticsUnclassifiableObjectSizeInBytes {
    return new Macie2FetchBucketStatisticsUnclassifiableObjectSizeInBytes(this, 'UnclassifiableObjectSizeInBytes', this.__resources, this.input);
  }

}

export class Macie2FetchBucketStatisticsBucketCountByEffectivePermission extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2GetBucketStatisticsRequest) {
    super(scope, id);
  }

  public get publiclyAccessible(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetBucketStatistics.bucketCountByEffectivePermission.publiclyAccessible'),
        outputPath: 'bucketCountByEffectivePermission.publiclyAccessible',
        parameters: {
          accountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketStatistics.bucketCountByEffectivePermission.publiclyAccessible', props);
    return resource.getResponseField('bucketCountByEffectivePermission.publiclyAccessible') as unknown as number;
  }

  public get publiclyReadable(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetBucketStatistics.bucketCountByEffectivePermission.publiclyReadable'),
        outputPath: 'bucketCountByEffectivePermission.publiclyReadable',
        parameters: {
          accountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketStatistics.bucketCountByEffectivePermission.publiclyReadable', props);
    return resource.getResponseField('bucketCountByEffectivePermission.publiclyReadable') as unknown as number;
  }

  public get publiclyWritable(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetBucketStatistics.bucketCountByEffectivePermission.publiclyWritable'),
        outputPath: 'bucketCountByEffectivePermission.publiclyWritable',
        parameters: {
          accountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketStatistics.bucketCountByEffectivePermission.publiclyWritable', props);
    return resource.getResponseField('bucketCountByEffectivePermission.publiclyWritable') as unknown as number;
  }

  public get unknown(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetBucketStatistics.bucketCountByEffectivePermission.unknown'),
        outputPath: 'bucketCountByEffectivePermission.unknown',
        parameters: {
          accountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketStatistics.bucketCountByEffectivePermission.unknown', props);
    return resource.getResponseField('bucketCountByEffectivePermission.unknown') as unknown as number;
  }

}

export class Macie2FetchBucketStatisticsBucketCountByEncryptionType extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2GetBucketStatisticsRequest) {
    super(scope, id);
  }

  public get kmsManaged(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetBucketStatistics.bucketCountByEncryptionType.kmsManaged'),
        outputPath: 'bucketCountByEncryptionType.kmsManaged',
        parameters: {
          accountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketStatistics.bucketCountByEncryptionType.kmsManaged', props);
    return resource.getResponseField('bucketCountByEncryptionType.kmsManaged') as unknown as number;
  }

  public get s3Managed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetBucketStatistics.bucketCountByEncryptionType.s3Managed'),
        outputPath: 'bucketCountByEncryptionType.s3Managed',
        parameters: {
          accountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketStatistics.bucketCountByEncryptionType.s3Managed', props);
    return resource.getResponseField('bucketCountByEncryptionType.s3Managed') as unknown as number;
  }

  public get unencrypted(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetBucketStatistics.bucketCountByEncryptionType.unencrypted'),
        outputPath: 'bucketCountByEncryptionType.unencrypted',
        parameters: {
          accountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketStatistics.bucketCountByEncryptionType.unencrypted', props);
    return resource.getResponseField('bucketCountByEncryptionType.unencrypted') as unknown as number;
  }

}

export class Macie2FetchBucketStatisticsBucketCountBySharedAccessType extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2GetBucketStatisticsRequest) {
    super(scope, id);
  }

  public get external(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetBucketStatistics.bucketCountBySharedAccessType.external'),
        outputPath: 'bucketCountBySharedAccessType.external',
        parameters: {
          accountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketStatistics.bucketCountBySharedAccessType.external', props);
    return resource.getResponseField('bucketCountBySharedAccessType.external') as unknown as number;
  }

  public get internal(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetBucketStatistics.bucketCountBySharedAccessType.internal'),
        outputPath: 'bucketCountBySharedAccessType.internal',
        parameters: {
          accountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketStatistics.bucketCountBySharedAccessType.internal', props);
    return resource.getResponseField('bucketCountBySharedAccessType.internal') as unknown as number;
  }

  public get notShared(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetBucketStatistics.bucketCountBySharedAccessType.notShared'),
        outputPath: 'bucketCountBySharedAccessType.notShared',
        parameters: {
          accountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketStatistics.bucketCountBySharedAccessType.notShared', props);
    return resource.getResponseField('bucketCountBySharedAccessType.notShared') as unknown as number;
  }

  public get unknown(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetBucketStatistics.bucketCountBySharedAccessType.unknown'),
        outputPath: 'bucketCountBySharedAccessType.unknown',
        parameters: {
          accountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketStatistics.bucketCountBySharedAccessType.unknown', props);
    return resource.getResponseField('bucketCountBySharedAccessType.unknown') as unknown as number;
  }

}

export class Macie2FetchBucketStatisticsUnclassifiableObjectCount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2GetBucketStatisticsRequest) {
    super(scope, id);
  }

  public get fileType(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetBucketStatistics.unclassifiableObjectCount.fileType'),
        outputPath: 'unclassifiableObjectCount.fileType',
        parameters: {
          accountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketStatistics.unclassifiableObjectCount.fileType', props);
    return resource.getResponseField('unclassifiableObjectCount.fileType') as unknown as number;
  }

  public get storageClass(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetBucketStatistics.unclassifiableObjectCount.storageClass'),
        outputPath: 'unclassifiableObjectCount.storageClass',
        parameters: {
          accountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketStatistics.unclassifiableObjectCount.storageClass', props);
    return resource.getResponseField('unclassifiableObjectCount.storageClass') as unknown as number;
  }

  public get total(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetBucketStatistics.unclassifiableObjectCount.total'),
        outputPath: 'unclassifiableObjectCount.total',
        parameters: {
          accountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketStatistics.unclassifiableObjectCount.total', props);
    return resource.getResponseField('unclassifiableObjectCount.total') as unknown as number;
  }

}

export class Macie2FetchBucketStatisticsUnclassifiableObjectSizeInBytes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2GetBucketStatisticsRequest) {
    super(scope, id);
  }

  public get fileType(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetBucketStatistics.unclassifiableObjectSizeInBytes.fileType'),
        outputPath: 'unclassifiableObjectSizeInBytes.fileType',
        parameters: {
          accountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketStatistics.unclassifiableObjectSizeInBytes.fileType', props);
    return resource.getResponseField('unclassifiableObjectSizeInBytes.fileType') as unknown as number;
  }

  public get storageClass(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetBucketStatistics.unclassifiableObjectSizeInBytes.storageClass'),
        outputPath: 'unclassifiableObjectSizeInBytes.storageClass',
        parameters: {
          accountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketStatistics.unclassifiableObjectSizeInBytes.storageClass', props);
    return resource.getResponseField('unclassifiableObjectSizeInBytes.storageClass') as unknown as number;
  }

  public get total(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetBucketStatistics.unclassifiableObjectSizeInBytes.total'),
        outputPath: 'unclassifiableObjectSizeInBytes.total',
        parameters: {
          accountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketStatistics.unclassifiableObjectSizeInBytes.total', props);
    return resource.getResponseField('unclassifiableObjectSizeInBytes.total') as unknown as number;
  }

}

export class Macie2FetchClassificationExportConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get configuration(): Macie2FetchClassificationExportConfigurationConfiguration {
    return new Macie2FetchClassificationExportConfigurationConfiguration(this, 'Configuration', this.__resources);
  }

}

export class Macie2FetchClassificationExportConfigurationConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get s3Destination(): Macie2FetchClassificationExportConfigurationConfigurationS3Destination {
    return new Macie2FetchClassificationExportConfigurationConfigurationS3Destination(this, 'S3Destination', this.__resources);
  }

}

export class Macie2FetchClassificationExportConfigurationConfigurationS3Destination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get bucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassificationExportConfiguration',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetClassificationExportConfiguration.configuration.s3Destination.bucketName'),
        outputPath: 'configuration.s3Destination.bucketName',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClassificationExportConfiguration.configuration.s3Destination.bucketName', props);
    return resource.getResponseField('configuration.s3Destination.bucketName') as unknown as string;
  }

  public get keyPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassificationExportConfiguration',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetClassificationExportConfiguration.configuration.s3Destination.keyPrefix'),
        outputPath: 'configuration.s3Destination.keyPrefix',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClassificationExportConfiguration.configuration.s3Destination.keyPrefix', props);
    return resource.getResponseField('configuration.s3Destination.keyPrefix') as unknown as string;
  }

  public get kmsKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassificationExportConfiguration',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetClassificationExportConfiguration.configuration.s3Destination.kmsKeyArn'),
        outputPath: 'configuration.s3Destination.kmsKeyArn',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClassificationExportConfiguration.configuration.s3Destination.kmsKeyArn', props);
    return resource.getResponseField('configuration.s3Destination.kmsKeyArn') as unknown as string;
  }

}

export class Macie2FetchCustomDataIdentifier extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2GetCustomDataIdentifierRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCustomDataIdentifier',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetCustomDataIdentifier.arn'),
        outputPath: 'arn',
        parameters: {
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCustomDataIdentifier.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCustomDataIdentifier',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetCustomDataIdentifier.createdAt'),
        outputPath: 'createdAt',
        parameters: {
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCustomDataIdentifier.createdAt', props);
    return resource.getResponseField('createdAt') as unknown as string;
  }

  public get deleted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCustomDataIdentifier',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetCustomDataIdentifier.deleted'),
        outputPath: 'deleted',
        parameters: {
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCustomDataIdentifier.deleted', props);
    return resource.getResponseField('deleted') as unknown as boolean;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCustomDataIdentifier',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetCustomDataIdentifier.description'),
        outputPath: 'description',
        parameters: {
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCustomDataIdentifier.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCustomDataIdentifier',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetCustomDataIdentifier.id'),
        outputPath: 'id',
        parameters: {
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCustomDataIdentifier.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get ignoreWords(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCustomDataIdentifier',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetCustomDataIdentifier.ignoreWords'),
        outputPath: 'ignoreWords',
        parameters: {
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCustomDataIdentifier.ignoreWords', props);
    return resource.getResponseField('ignoreWords') as unknown as string[];
  }

  public get keywords(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCustomDataIdentifier',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetCustomDataIdentifier.keywords'),
        outputPath: 'keywords',
        parameters: {
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCustomDataIdentifier.keywords', props);
    return resource.getResponseField('keywords') as unknown as string[];
  }

  public get maximumMatchDistance(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCustomDataIdentifier',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetCustomDataIdentifier.maximumMatchDistance'),
        outputPath: 'maximumMatchDistance',
        parameters: {
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCustomDataIdentifier.maximumMatchDistance', props);
    return resource.getResponseField('maximumMatchDistance') as unknown as number;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCustomDataIdentifier',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetCustomDataIdentifier.name'),
        outputPath: 'name',
        parameters: {
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCustomDataIdentifier.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get regex(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCustomDataIdentifier',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetCustomDataIdentifier.regex'),
        outputPath: 'regex',
        parameters: {
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCustomDataIdentifier.regex', props);
    return resource.getResponseField('regex') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCustomDataIdentifier',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetCustomDataIdentifier.tags'),
        outputPath: 'tags',
        parameters: {
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCustomDataIdentifier.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class Macie2FetchFindingStatistics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2GetFindingStatisticsRequest) {
    super(scope, id);
  }

  public get countsByGroup(): shapes.Macie2GroupCount[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFindingStatistics',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetFindingStatistics.countsByGroup'),
        outputPath: 'countsByGroup',
        parameters: {
          findingCriteria: {
            criterion: this.input.findingCriteria?.criterion,
          },
          groupBy: this.input.groupBy,
          size: this.input.size,
          sortCriteria: {
            attributeName: this.input.sortCriteria?.attributeName,
            orderBy: this.input.sortCriteria?.orderBy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFindingStatistics.countsByGroup', props);
    return resource.getResponseField('countsByGroup') as unknown as shapes.Macie2GroupCount[];
  }

}

export class Macie2FetchFindings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2GetFindingsRequest) {
    super(scope, id);
  }

  public get findings(): shapes.Macie2Finding[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFindings',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetFindings.findings'),
        outputPath: 'findings',
        parameters: {
          findingIds: this.input.findingIds,
          sortCriteria: {
            attributeName: this.input.sortCriteria?.attributeName,
            orderBy: this.input.sortCriteria?.orderBy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFindings.findings', props);
    return resource.getResponseField('findings') as unknown as shapes.Macie2Finding[];
  }

}

export class Macie2FetchFindingsFilter extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2GetFindingsFilterRequest) {
    super(scope, id);
  }

  public get action(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFindingsFilter',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetFindingsFilter.action'),
        outputPath: 'action',
        parameters: {
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFindingsFilter.action', props);
    return resource.getResponseField('action') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFindingsFilter',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetFindingsFilter.arn'),
        outputPath: 'arn',
        parameters: {
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFindingsFilter.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFindingsFilter',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetFindingsFilter.description'),
        outputPath: 'description',
        parameters: {
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFindingsFilter.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get findingCriteria(): Macie2FetchFindingsFilterFindingCriteria {
    return new Macie2FetchFindingsFilterFindingCriteria(this, 'FindingCriteria', this.__resources, this.input);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFindingsFilter',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetFindingsFilter.id'),
        outputPath: 'id',
        parameters: {
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFindingsFilter.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFindingsFilter',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetFindingsFilter.name'),
        outputPath: 'name',
        parameters: {
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFindingsFilter.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get position(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFindingsFilter',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetFindingsFilter.position'),
        outputPath: 'position',
        parameters: {
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFindingsFilter.position', props);
    return resource.getResponseField('position') as unknown as number;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFindingsFilter',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetFindingsFilter.tags'),
        outputPath: 'tags',
        parameters: {
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFindingsFilter.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class Macie2FetchFindingsFilterFindingCriteria extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2GetFindingsFilterRequest) {
    super(scope, id);
  }

  public get criterion(): Record<string, shapes.Macie2CriterionAdditionalProperties> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFindingsFilter',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetFindingsFilter.findingCriteria.criterion'),
        outputPath: 'findingCriteria.criterion',
        parameters: {
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFindingsFilter.findingCriteria.criterion', props);
    return resource.getResponseField('findingCriteria.criterion') as unknown as Record<string, shapes.Macie2CriterionAdditionalProperties>;
  }

}

export class Macie2FetchInvitationsCount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get invitationsCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInvitationsCount',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetInvitationsCount.invitationsCount'),
        outputPath: 'invitationsCount',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInvitationsCount.invitationsCount', props);
    return resource.getResponseField('invitationsCount') as unknown as number;
  }

}

export class Macie2FetchMacieSession extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMacieSession',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetMacieSession.createdAt'),
        outputPath: 'createdAt',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMacieSession.createdAt', props);
    return resource.getResponseField('createdAt') as unknown as string;
  }

  public get findingPublishingFrequency(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMacieSession',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetMacieSession.findingPublishingFrequency'),
        outputPath: 'findingPublishingFrequency',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMacieSession.findingPublishingFrequency', props);
    return resource.getResponseField('findingPublishingFrequency') as unknown as string;
  }

  public get serviceRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMacieSession',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetMacieSession.serviceRole'),
        outputPath: 'serviceRole',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMacieSession.serviceRole', props);
    return resource.getResponseField('serviceRole') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMacieSession',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetMacieSession.status'),
        outputPath: 'status',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMacieSession.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMacieSession',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetMacieSession.updatedAt'),
        outputPath: 'updatedAt',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMacieSession.updatedAt', props);
    return resource.getResponseField('updatedAt') as unknown as string;
  }

}

export class Macie2FetchMasterAccount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get master(): Macie2FetchMasterAccountMaster {
    return new Macie2FetchMasterAccountMaster(this, 'Master', this.__resources);
  }

}

export class Macie2FetchMasterAccountMaster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMasterAccount',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetMasterAccount.master.accountId'),
        outputPath: 'master.accountId',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMasterAccount.master.accountId', props);
    return resource.getResponseField('master.accountId') as unknown as string;
  }

  public get invitationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMasterAccount',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetMasterAccount.master.invitationId'),
        outputPath: 'master.invitationId',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMasterAccount.master.invitationId', props);
    return resource.getResponseField('master.invitationId') as unknown as string;
  }

  public get invitedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMasterAccount',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetMasterAccount.master.invitedAt'),
        outputPath: 'master.invitedAt',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMasterAccount.master.invitedAt', props);
    return resource.getResponseField('master.invitedAt') as unknown as string;
  }

  public get relationshipStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMasterAccount',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetMasterAccount.master.relationshipStatus'),
        outputPath: 'master.relationshipStatus',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMasterAccount.master.relationshipStatus', props);
    return resource.getResponseField('master.relationshipStatus') as unknown as string;
  }

}

export class Macie2FetchMember extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2GetMemberRequest) {
    super(scope, id);
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMember',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetMember.accountId'),
        outputPath: 'accountId',
        parameters: {
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMember.accountId', props);
    return resource.getResponseField('accountId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMember',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetMember.arn'),
        outputPath: 'arn',
        parameters: {
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMember.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get email(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMember',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetMember.email'),
        outputPath: 'email',
        parameters: {
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMember.email', props);
    return resource.getResponseField('email') as unknown as string;
  }

  public get invitedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMember',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetMember.invitedAt'),
        outputPath: 'invitedAt',
        parameters: {
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMember.invitedAt', props);
    return resource.getResponseField('invitedAt') as unknown as string;
  }

  public get masterAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMember',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetMember.masterAccountId'),
        outputPath: 'masterAccountId',
        parameters: {
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMember.masterAccountId', props);
    return resource.getResponseField('masterAccountId') as unknown as string;
  }

  public get relationshipStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMember',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetMember.relationshipStatus'),
        outputPath: 'relationshipStatus',
        parameters: {
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMember.relationshipStatus', props);
    return resource.getResponseField('relationshipStatus') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMember',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetMember.tags'),
        outputPath: 'tags',
        parameters: {
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMember.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMember',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetMember.updatedAt'),
        outputPath: 'updatedAt',
        parameters: {
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMember.updatedAt', props);
    return resource.getResponseField('updatedAt') as unknown as string;
  }

}

export class Macie2FetchUsageStatistics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2GetUsageStatisticsRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsageStatistics',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetUsageStatistics.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          filterBy: this.input.filterBy,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          sortBy: {
            key: this.input.sortBy?.key,
            orderBy: this.input.sortBy?.orderBy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUsageStatistics.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get records(): shapes.Macie2UsageRecord[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsageStatistics',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetUsageStatistics.records'),
        outputPath: 'records',
        parameters: {
          filterBy: this.input.filterBy,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          sortBy: {
            key: this.input.sortBy?.key,
            orderBy: this.input.sortBy?.orderBy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUsageStatistics.records', props);
    return resource.getResponseField('records') as unknown as shapes.Macie2UsageRecord[];
  }

}

export class Macie2FetchUsageTotals extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get usageTotals(): shapes.Macie2UsageTotal[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsageTotals',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetUsageTotals.usageTotals'),
        outputPath: 'usageTotals',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUsageTotals.usageTotals', props);
    return resource.getResponseField('usageTotals') as unknown as shapes.Macie2UsageTotal[];
  }

}

export class Macie2ListClassificationJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2ListClassificationJobsRequest) {
    super(scope, id);
  }

  public get items(): shapes.Macie2JobSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listClassificationJobs',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.ListClassificationJobs.items'),
        outputPath: 'items',
        parameters: {
          filterCriteria: {
            excludes: this.input.filterCriteria?.excludes,
            includes: this.input.filterCriteria?.includes,
          },
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          sortCriteria: {
            attributeName: this.input.sortCriteria?.attributeName,
            orderBy: this.input.sortCriteria?.orderBy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListClassificationJobs.items', props);
    return resource.getResponseField('items') as unknown as shapes.Macie2JobSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listClassificationJobs',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.ListClassificationJobs.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          filterCriteria: {
            excludes: this.input.filterCriteria?.excludes,
            includes: this.input.filterCriteria?.includes,
          },
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          sortCriteria: {
            attributeName: this.input.sortCriteria?.attributeName,
            orderBy: this.input.sortCriteria?.orderBy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListClassificationJobs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class Macie2ListCustomDataIdentifiers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2ListCustomDataIdentifiersRequest) {
    super(scope, id);
  }

  public get items(): shapes.Macie2CustomDataIdentifierSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCustomDataIdentifiers',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.ListCustomDataIdentifiers.items'),
        outputPath: 'items',
        parameters: {
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCustomDataIdentifiers.items', props);
    return resource.getResponseField('items') as unknown as shapes.Macie2CustomDataIdentifierSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCustomDataIdentifiers',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.ListCustomDataIdentifiers.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCustomDataIdentifiers.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class Macie2ListFindings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2ListFindingsRequest) {
    super(scope, id);
  }

  public get findingIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFindings',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.ListFindings.findingIds'),
        outputPath: 'findingIds',
        parameters: {
          findingCriteria: {
            criterion: this.input.findingCriteria?.criterion,
          },
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          sortCriteria: {
            attributeName: this.input.sortCriteria?.attributeName,
            orderBy: this.input.sortCriteria?.orderBy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFindings.findingIds', props);
    return resource.getResponseField('findingIds') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFindings',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.ListFindings.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          findingCriteria: {
            criterion: this.input.findingCriteria?.criterion,
          },
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          sortCriteria: {
            attributeName: this.input.sortCriteria?.attributeName,
            orderBy: this.input.sortCriteria?.orderBy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFindings.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class Macie2ListFindingsFilters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2ListFindingsFiltersRequest) {
    super(scope, id);
  }

  public get findingsFilterListItems(): shapes.Macie2FindingsFilterListItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFindingsFilters',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.ListFindingsFilters.findingsFilterListItems'),
        outputPath: 'findingsFilterListItems',
        parameters: {
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFindingsFilters.findingsFilterListItems', props);
    return resource.getResponseField('findingsFilterListItems') as unknown as shapes.Macie2FindingsFilterListItem[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFindingsFilters',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.ListFindingsFilters.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFindingsFilters.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class Macie2ListInvitations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2ListInvitationsRequest) {
    super(scope, id);
  }

  public get invitations(): shapes.Macie2Invitation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInvitations',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.ListInvitations.invitations'),
        outputPath: 'invitations',
        parameters: {
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInvitations.invitations', props);
    return resource.getResponseField('invitations') as unknown as shapes.Macie2Invitation[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInvitations',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.ListInvitations.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInvitations.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class Macie2ListMembers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2ListMembersRequest) {
    super(scope, id);
  }

  public get members(): shapes.Macie2Member[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMembers',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.ListMembers.members'),
        outputPath: 'members',
        parameters: {
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          onlyAssociated: this.input.onlyAssociated,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMembers.members', props);
    return resource.getResponseField('members') as unknown as shapes.Macie2Member[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMembers',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.ListMembers.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          onlyAssociated: this.input.onlyAssociated,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMembers.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class Macie2ListOrganizationAdminAccounts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2ListOrganizationAdminAccountsRequest) {
    super(scope, id);
  }

  public get adminAccounts(): shapes.Macie2AdminAccount[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOrganizationAdminAccounts',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.ListOrganizationAdminAccounts.adminAccounts'),
        outputPath: 'adminAccounts',
        parameters: {
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOrganizationAdminAccounts.adminAccounts', props);
    return resource.getResponseField('adminAccounts') as unknown as shapes.Macie2AdminAccount[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOrganizationAdminAccounts',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.ListOrganizationAdminAccounts.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOrganizationAdminAccounts.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class Macie2ListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2ListTagsForResourceRequest) {
    super(scope, id);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          resourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class Macie2PutClassificationExportConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2PutClassificationExportConfigurationRequest) {
    super(scope, id);
  }

  public get configuration(): Macie2PutClassificationExportConfigurationConfiguration {
    return new Macie2PutClassificationExportConfigurationConfiguration(this, 'Configuration', this.__resources, this.input);
  }

}

export class Macie2PutClassificationExportConfigurationConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2PutClassificationExportConfigurationRequest) {
    super(scope, id);
  }

  public get s3Destination(): Macie2PutClassificationExportConfigurationConfigurationS3Destination {
    return new Macie2PutClassificationExportConfigurationConfigurationS3Destination(this, 'S3Destination', this.__resources, this.input);
  }

}

export class Macie2PutClassificationExportConfigurationConfigurationS3Destination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2PutClassificationExportConfigurationRequest) {
    super(scope, id);
  }

  public get bucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putClassificationExportConfiguration',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.PutClassificationExportConfiguration.configuration.s3Destination.bucketName'),
        outputPath: 'configuration.s3Destination.bucketName',
        parameters: {
          configuration: {
            s3Destination: {
              bucketName: this.input.configuration.s3Destination?.bucketName,
              keyPrefix: this.input.configuration.s3Destination?.keyPrefix,
              kmsKeyArn: this.input.configuration.s3Destination?.kmsKeyArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutClassificationExportConfiguration.configuration.s3Destination.bucketName', props);
    return resource.getResponseField('configuration.s3Destination.bucketName') as unknown as string;
  }

  public get keyPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putClassificationExportConfiguration',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.PutClassificationExportConfiguration.configuration.s3Destination.keyPrefix'),
        outputPath: 'configuration.s3Destination.keyPrefix',
        parameters: {
          configuration: {
            s3Destination: {
              bucketName: this.input.configuration.s3Destination?.bucketName,
              keyPrefix: this.input.configuration.s3Destination?.keyPrefix,
              kmsKeyArn: this.input.configuration.s3Destination?.kmsKeyArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutClassificationExportConfiguration.configuration.s3Destination.keyPrefix', props);
    return resource.getResponseField('configuration.s3Destination.keyPrefix') as unknown as string;
  }

  public get kmsKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putClassificationExportConfiguration',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.PutClassificationExportConfiguration.configuration.s3Destination.kmsKeyArn'),
        outputPath: 'configuration.s3Destination.kmsKeyArn',
        parameters: {
          configuration: {
            s3Destination: {
              bucketName: this.input.configuration.s3Destination?.bucketName,
              keyPrefix: this.input.configuration.s3Destination?.keyPrefix,
              kmsKeyArn: this.input.configuration.s3Destination?.kmsKeyArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutClassificationExportConfiguration.configuration.s3Destination.kmsKeyArn', props);
    return resource.getResponseField('configuration.s3Destination.kmsKeyArn') as unknown as string;
  }

}

export class Macie2TestCustomDataIdentifier extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2TestCustomDataIdentifierRequest) {
    super(scope, id);
  }

  public get matchCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testCustomDataIdentifier',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.TestCustomDataIdentifier.matchCount'),
        outputPath: 'matchCount',
        parameters: {
          ignoreWords: this.input.ignoreWords,
          keywords: this.input.keywords,
          maximumMatchDistance: this.input.maximumMatchDistance,
          regex: this.input.regex,
          sampleText: this.input.sampleText,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestCustomDataIdentifier.matchCount', props);
    return resource.getResponseField('matchCount') as unknown as number;
  }

}

export class Macie2UpdateFindingsFilter extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Macie2UpdateFindingsFilterRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFindingsFilter',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.UpdateFindingsFilter.arn'),
        outputPath: 'arn',
        parameters: {
          action: this.input.action,
          description: this.input.description,
          findingCriteria: {
            criterion: this.input.findingCriteria?.criterion,
          },
          id: this.input.id,
          name: this.input.name,
          position: this.input.position,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFindingsFilter.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFindingsFilter',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.UpdateFindingsFilter.id'),
        outputPath: 'id',
        parameters: {
          action: this.input.action,
          description: this.input.description,
          findingCriteria: {
            criterion: this.input.findingCriteria?.criterion,
          },
          id: this.input.id,
          name: this.input.name,
          position: this.input.position,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFindingsFilter.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

}

