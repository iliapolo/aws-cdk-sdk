import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class MacieClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public acceptInvitation(input: shapes.MacieAcceptInvitationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptInvitation',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.AcceptInvitation'),
        parameters: {
          invitationId: input.invitationId,
          masterAccount: input.masterAccount,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AcceptInvitation', props);
  }

  public batchGetCustomDataIdentifiers(input: shapes.MacieBatchGetCustomDataIdentifiersRequest): MacieBatchGetCustomDataIdentifiers {
    return new MacieBatchGetCustomDataIdentifiers(this, 'BatchGetCustomDataIdentifiers', this.__resources, input);
  }

  public createClassificationJob(input: shapes.MacieCreateClassificationJobRequest): MacieCreateClassificationJob {
    return new MacieCreateClassificationJob(this, 'CreateClassificationJob', this.__resources, input);
  }

  public createCustomDataIdentifier(input: shapes.MacieCreateCustomDataIdentifierRequest): MacieCreateCustomDataIdentifier {
    return new MacieCreateCustomDataIdentifier(this, 'CreateCustomDataIdentifier', this.__resources, input);
  }

  public createFindingsFilter(input: shapes.MacieCreateFindingsFilterRequest): MacieCreateFindingsFilter {
    return new MacieCreateFindingsFilter(this, 'CreateFindingsFilter', this.__resources, input);
  }

  public createInvitations(input: shapes.MacieCreateInvitationsRequest): MacieCreateInvitations {
    return new MacieCreateInvitations(this, 'CreateInvitations', this.__resources, input);
  }

  public createMember(input: shapes.MacieCreateMemberRequest): MacieCreateMember {
    return new MacieCreateMember(this, 'CreateMember', this.__resources, input);
  }

  public createSampleFindings(input: shapes.MacieCreateSampleFindingsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSampleFindings',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.CreateSampleFindings'),
        parameters: {
          findingTypes: input.findingTypes,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateSampleFindings', props);
  }

  public declineInvitations(input: shapes.MacieDeclineInvitationsRequest): MacieDeclineInvitations {
    return new MacieDeclineInvitations(this, 'DeclineInvitations', this.__resources, input);
  }

  public deleteCustomDataIdentifier(input: shapes.MacieDeleteCustomDataIdentifierRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCustomDataIdentifier',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DeleteCustomDataIdentifier'),
        parameters: {
          id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteCustomDataIdentifier', props);
  }

  public deleteFindingsFilter(input: shapes.MacieDeleteFindingsFilterRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFindingsFilter',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DeleteFindingsFilter'),
        parameters: {
          id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteFindingsFilter', props);
  }

  public deleteInvitations(input: shapes.MacieDeleteInvitationsRequest): MacieDeleteInvitations {
    return new MacieDeleteInvitations(this, 'DeleteInvitations', this.__resources, input);
  }

  public deleteMember(input: shapes.MacieDeleteMemberRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteMember',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DeleteMember'),
        parameters: {
          id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteMember', props);
  }

  public describeBuckets(input: shapes.MacieDescribeBucketsRequest): MacieDescribeBuckets {
    return new MacieDescribeBuckets(this, 'DescribeBuckets', this.__resources, input);
  }

  public describeClassificationJob(input: shapes.MacieDescribeClassificationJobRequest): MacieDescribeClassificationJob {
    return new MacieDescribeClassificationJob(this, 'DescribeClassificationJob', this.__resources, input);
  }

  public describeOrganizationConfiguration(): MacieDescribeOrganizationConfiguration {
    return new MacieDescribeOrganizationConfiguration(this, 'DescribeOrganizationConfiguration', this.__resources);
  }

  public disableMacie(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disableMacie',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DisableMacie'),
        parameters: {
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisableMacie', props);
  }

  public disableOrganizationAdminAccount(input: shapes.MacieDisableOrganizationAdminAccountRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disableOrganizationAdminAccount',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DisableOrganizationAdminAccount'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DisassociateFromMasterAccount'),
        parameters: {
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateFromMasterAccount', props);
  }

  public disassociateMember(input: shapes.MacieDisassociateMemberRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateMember',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DisassociateMember'),
        parameters: {
          id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateMember', props);
  }

  public enableMacie(input: shapes.MacieEnableMacieRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableMacie',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.EnableMacie'),
        parameters: {
          clientToken: input.clientToken,
          findingPublishingFrequency: input.findingPublishingFrequency,
          status: input.status,
        },
      },
    };
    new cr.AwsCustomResource(this, 'EnableMacie', props);
  }

  public enableOrganizationAdminAccount(input: shapes.MacieEnableOrganizationAdminAccountRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableOrganizationAdminAccount',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.EnableOrganizationAdminAccount'),
        parameters: {
          adminAccountId: input.adminAccountId,
          clientToken: input.clientToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'EnableOrganizationAdminAccount', props);
  }

  public fetchBucketStatistics(input: shapes.MacieGetBucketStatisticsRequest): MacieFetchBucketStatistics {
    return new MacieFetchBucketStatistics(this, 'FetchBucketStatistics', this.__resources, input);
  }

  public fetchClassificationExportConfiguration(): MacieFetchClassificationExportConfiguration {
    return new MacieFetchClassificationExportConfiguration(this, 'FetchClassificationExportConfiguration', this.__resources);
  }

  public fetchCustomDataIdentifier(input: shapes.MacieGetCustomDataIdentifierRequest): MacieFetchCustomDataIdentifier {
    return new MacieFetchCustomDataIdentifier(this, 'FetchCustomDataIdentifier', this.__resources, input);
  }

  public fetchFindingStatistics(input: shapes.MacieGetFindingStatisticsRequest): MacieFetchFindingStatistics {
    return new MacieFetchFindingStatistics(this, 'FetchFindingStatistics', this.__resources, input);
  }

  public fetchFindings(input: shapes.MacieGetFindingsRequest): MacieFetchFindings {
    return new MacieFetchFindings(this, 'FetchFindings', this.__resources, input);
  }

  public fetchFindingsFilter(input: shapes.MacieGetFindingsFilterRequest): MacieFetchFindingsFilter {
    return new MacieFetchFindingsFilter(this, 'FetchFindingsFilter', this.__resources, input);
  }

  public fetchInvitationsCount(): MacieFetchInvitationsCount {
    return new MacieFetchInvitationsCount(this, 'FetchInvitationsCount', this.__resources);
  }

  public fetchMacieSession(): MacieFetchMacieSession {
    return new MacieFetchMacieSession(this, 'FetchMacieSession', this.__resources);
  }

  public fetchMasterAccount(): MacieFetchMasterAccount {
    return new MacieFetchMasterAccount(this, 'FetchMasterAccount', this.__resources);
  }

  public fetchMember(input: shapes.MacieGetMemberRequest): MacieFetchMember {
    return new MacieFetchMember(this, 'FetchMember', this.__resources, input);
  }

  public fetchUsageStatistics(input: shapes.MacieGetUsageStatisticsRequest): MacieFetchUsageStatistics {
    return new MacieFetchUsageStatistics(this, 'FetchUsageStatistics', this.__resources, input);
  }

  public fetchUsageTotals(): MacieFetchUsageTotals {
    return new MacieFetchUsageTotals(this, 'FetchUsageTotals', this.__resources);
  }

  public listClassificationJobs(input: shapes.MacieListClassificationJobsRequest): MacieListClassificationJobs {
    return new MacieListClassificationJobs(this, 'ListClassificationJobs', this.__resources, input);
  }

  public listCustomDataIdentifiers(input: shapes.MacieListCustomDataIdentifiersRequest): MacieListCustomDataIdentifiers {
    return new MacieListCustomDataIdentifiers(this, 'ListCustomDataIdentifiers', this.__resources, input);
  }

  public listFindings(input: shapes.MacieListFindingsRequest): MacieListFindings {
    return new MacieListFindings(this, 'ListFindings', this.__resources, input);
  }

  public listFindingsFilters(input: shapes.MacieListFindingsFiltersRequest): MacieListFindingsFilters {
    return new MacieListFindingsFilters(this, 'ListFindingsFilters', this.__resources, input);
  }

  public listInvitations(input: shapes.MacieListInvitationsRequest): MacieListInvitations {
    return new MacieListInvitations(this, 'ListInvitations', this.__resources, input);
  }

  public listMembers(input: shapes.MacieListMembersRequest): MacieListMembers {
    return new MacieListMembers(this, 'ListMembers', this.__resources, input);
  }

  public listOrganizationAdminAccounts(input: shapes.MacieListOrganizationAdminAccountsRequest): MacieListOrganizationAdminAccounts {
    return new MacieListOrganizationAdminAccounts(this, 'ListOrganizationAdminAccounts', this.__resources, input);
  }

  public listTagsForResource(input: shapes.MacieListTagsForResourceRequest): MacieListTagsForResource {
    return new MacieListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public putClassificationExportConfiguration(input: shapes.MaciePutClassificationExportConfigurationRequest): MaciePutClassificationExportConfiguration {
    return new MaciePutClassificationExportConfiguration(this, 'PutClassificationExportConfiguration', this.__resources, input);
  }

  public tagResource(input: shapes.MacieTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public testCustomDataIdentifier(input: shapes.MacieTestCustomDataIdentifierRequest): MacieTestCustomDataIdentifier {
    return new MacieTestCustomDataIdentifier(this, 'TestCustomDataIdentifier', this.__resources, input);
  }

  public untagResource(input: shapes.MacieUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateClassificationJob(input: shapes.MacieUpdateClassificationJobRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClassificationJob',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.UpdateClassificationJob'),
        parameters: {
          jobId: input.jobId,
          jobStatus: input.jobStatus,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateClassificationJob', props);
  }

  public updateFindingsFilter(input: shapes.MacieUpdateFindingsFilterRequest): MacieUpdateFindingsFilter {
    return new MacieUpdateFindingsFilter(this, 'UpdateFindingsFilter', this.__resources, input);
  }

  public updateMacieSession(input: shapes.MacieUpdateMacieSessionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMacieSession',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.UpdateMacieSession'),
        parameters: {
          findingPublishingFrequency: input.findingPublishingFrequency,
          status: input.status,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateMacieSession', props);
  }

  public updateMemberSession(input: shapes.MacieUpdateMemberSessionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMemberSession',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.UpdateMemberSession'),
        parameters: {
          id: input.id,
          status: input.status,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateMemberSession', props);
  }

  public updateOrganizationConfiguration(input: shapes.MacieUpdateOrganizationConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateOrganizationConfiguration',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.UpdateOrganizationConfiguration'),
        parameters: {
          autoEnable: input.autoEnable,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateOrganizationConfiguration', props);
  }

}

export class MacieBatchGetCustomDataIdentifiers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieBatchGetCustomDataIdentifiersRequest) {
    super(scope, id);
  }

  public get customDataIdentifiers(): shapes.MacieBatchGetCustomDataIdentifierSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetCustomDataIdentifiers',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.BatchGetCustomDataIdentifiers.customDataIdentifiers'),
        outputPath: 'customDataIdentifiers',
        parameters: {
          ids: this.input.ids,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetCustomDataIdentifiers.customDataIdentifiers', props);
    return resource.getResponseField('customDataIdentifiers') as unknown as shapes.MacieBatchGetCustomDataIdentifierSummary[];
  }

  public get notFoundIdentifierIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetCustomDataIdentifiers',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.BatchGetCustomDataIdentifiers.notFoundIdentifierIds'),
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

export class MacieCreateClassificationJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieCreateClassificationJobRequest) {
    super(scope, id);
  }

  public get jobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createClassificationJob',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.CreateClassificationJob.jobArn'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.CreateClassificationJob.jobId'),
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

export class MacieCreateCustomDataIdentifier extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieCreateCustomDataIdentifierRequest) {
    super(scope, id);
  }

  public get customDataIdentifierId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCustomDataIdentifier',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.CreateCustomDataIdentifier.customDataIdentifierId'),
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

export class MacieCreateFindingsFilter extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieCreateFindingsFilterRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFindingsFilter',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.CreateFindingsFilter.arn'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.CreateFindingsFilter.id'),
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

export class MacieCreateInvitations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieCreateInvitationsRequest) {
    super(scope, id);
  }

  public get unprocessedAccounts(): shapes.MacieUnprocessedAccount[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInvitations',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.CreateInvitations.unprocessedAccounts'),
        outputPath: 'unprocessedAccounts',
        parameters: {
          accountIds: this.input.accountIds,
          disableEmailNotification: this.input.disableEmailNotification,
          message: this.input.message,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInvitations.unprocessedAccounts', props);
    return resource.getResponseField('unprocessedAccounts') as unknown as shapes.MacieUnprocessedAccount[];
  }

}

export class MacieCreateMember extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieCreateMemberRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMember',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.CreateMember.arn'),
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

export class MacieDeclineInvitations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieDeclineInvitationsRequest) {
    super(scope, id);
  }

  public get unprocessedAccounts(): shapes.MacieUnprocessedAccount[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'declineInvitations',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DeclineInvitations.unprocessedAccounts'),
        outputPath: 'unprocessedAccounts',
        parameters: {
          accountIds: this.input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeclineInvitations.unprocessedAccounts', props);
    return resource.getResponseField('unprocessedAccounts') as unknown as shapes.MacieUnprocessedAccount[];
  }

}

export class MacieDeleteInvitations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieDeleteInvitationsRequest) {
    super(scope, id);
  }

  public get unprocessedAccounts(): shapes.MacieUnprocessedAccount[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteInvitations',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DeleteInvitations.unprocessedAccounts'),
        outputPath: 'unprocessedAccounts',
        parameters: {
          accountIds: this.input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteInvitations.unprocessedAccounts', props);
    return resource.getResponseField('unprocessedAccounts') as unknown as shapes.MacieUnprocessedAccount[];
  }

}

export class MacieDescribeBuckets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieDescribeBucketsRequest) {
    super(scope, id);
  }

  public get buckets(): shapes.MacieBucketMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBuckets',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeBuckets.buckets'),
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
    return resource.getResponseField('buckets') as unknown as shapes.MacieBucketMetadata[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBuckets',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeBuckets.nextToken'),
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

export class MacieDescribeClassificationJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieDescribeClassificationJobRequest) {
    super(scope, id);
  }

  public get clientToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.clientToken'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.createdAt'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.customDataIdentifierIds'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.description'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.initialRun'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.jobArn'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.jobId'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.jobStatus'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.jobType'),
        outputPath: 'jobType',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClassificationJob.jobType', props);
    return resource.getResponseField('jobType') as unknown as string;
  }

  public get lastRunErrorStatus(): MacieDescribeClassificationJobLastRunErrorStatus {
    return new MacieDescribeClassificationJobLastRunErrorStatus(this, 'LastRunErrorStatus', this.__resources, this.input);
  }

  public get lastRunTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.lastRunTime'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.name'),
        outputPath: 'name',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClassificationJob.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get s3JobDefinition(): MacieDescribeClassificationJobS3JobDefinition {
    return new MacieDescribeClassificationJobS3JobDefinition(this, 'S3JobDefinition', this.__resources, this.input);
  }

  public get samplingPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.samplingPercentage'),
        outputPath: 'samplingPercentage',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClassificationJob.samplingPercentage', props);
    return resource.getResponseField('samplingPercentage') as unknown as number;
  }

  public get scheduleFrequency(): MacieDescribeClassificationJobScheduleFrequency {
    return new MacieDescribeClassificationJobScheduleFrequency(this, 'ScheduleFrequency', this.__resources, this.input);
  }

  public get statistics(): MacieDescribeClassificationJobStatistics {
    return new MacieDescribeClassificationJobStatistics(this, 'Statistics', this.__resources, this.input);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.tags'),
        outputPath: 'tags',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClassificationJob.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

  public get userPausedDetails(): MacieDescribeClassificationJobUserPausedDetails {
    return new MacieDescribeClassificationJobUserPausedDetails(this, 'UserPausedDetails', this.__resources, this.input);
  }

}

export class MacieDescribeClassificationJobLastRunErrorStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieDescribeClassificationJobRequest) {
    super(scope, id);
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.lastRunErrorStatus.code'),
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

export class MacieDescribeClassificationJobS3JobDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieDescribeClassificationJobRequest) {
    super(scope, id);
  }

  public get bucketDefinitions(): shapes.MacieS3BucketDefinitionForJob[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.s3JobDefinition.bucketDefinitions'),
        outputPath: 's3JobDefinition.bucketDefinitions',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClassificationJob.s3JobDefinition.bucketDefinitions', props);
    return resource.getResponseField('s3JobDefinition.bucketDefinitions') as unknown as shapes.MacieS3BucketDefinitionForJob[];
  }

  public get scoping(): MacieDescribeClassificationJobS3JobDefinitionScoping {
    return new MacieDescribeClassificationJobS3JobDefinitionScoping(this, 'Scoping', this.__resources, this.input);
  }

}

export class MacieDescribeClassificationJobS3JobDefinitionScoping extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieDescribeClassificationJobRequest) {
    super(scope, id);
  }

  public get excludes(): MacieDescribeClassificationJobS3JobDefinitionScopingExcludes {
    return new MacieDescribeClassificationJobS3JobDefinitionScopingExcludes(this, 'Excludes', this.__resources, this.input);
  }

  public get includes(): MacieDescribeClassificationJobS3JobDefinitionScopingIncludes {
    return new MacieDescribeClassificationJobS3JobDefinitionScopingIncludes(this, 'Includes', this.__resources, this.input);
  }

}

export class MacieDescribeClassificationJobS3JobDefinitionScopingExcludes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieDescribeClassificationJobRequest) {
    super(scope, id);
  }

  public get and(): shapes.MacieJobScopeTerm[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.s3JobDefinition.scoping.excludes.and'),
        outputPath: 's3JobDefinition.scoping.excludes.and',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClassificationJob.s3JobDefinition.scoping.excludes.and', props);
    return resource.getResponseField('s3JobDefinition.scoping.excludes.and') as unknown as shapes.MacieJobScopeTerm[];
  }

}

export class MacieDescribeClassificationJobS3JobDefinitionScopingIncludes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieDescribeClassificationJobRequest) {
    super(scope, id);
  }

  public get and(): shapes.MacieJobScopeTerm[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.s3JobDefinition.scoping.includes.and'),
        outputPath: 's3JobDefinition.scoping.includes.and',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClassificationJob.s3JobDefinition.scoping.includes.and', props);
    return resource.getResponseField('s3JobDefinition.scoping.includes.and') as unknown as shapes.MacieJobScopeTerm[];
  }

}

export class MacieDescribeClassificationJobScheduleFrequency extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieDescribeClassificationJobRequest) {
    super(scope, id);
  }

  public get dailySchedule(): MacieDescribeClassificationJobScheduleFrequencyDailySchedule {
    return new MacieDescribeClassificationJobScheduleFrequencyDailySchedule(this, 'DailySchedule');
  }

  public get monthlySchedule(): MacieDescribeClassificationJobScheduleFrequencyMonthlySchedule {
    return new MacieDescribeClassificationJobScheduleFrequencyMonthlySchedule(this, 'MonthlySchedule', this.__resources, this.input);
  }

  public get weeklySchedule(): MacieDescribeClassificationJobScheduleFrequencyWeeklySchedule {
    return new MacieDescribeClassificationJobScheduleFrequencyWeeklySchedule(this, 'WeeklySchedule', this.__resources, this.input);
  }

}

export class MacieDescribeClassificationJobScheduleFrequencyDailySchedule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);
  }

}

export class MacieDescribeClassificationJobScheduleFrequencyMonthlySchedule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieDescribeClassificationJobRequest) {
    super(scope, id);
  }

  public get dayOfMonth(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.scheduleFrequency.monthlySchedule.dayOfMonth'),
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

export class MacieDescribeClassificationJobScheduleFrequencyWeeklySchedule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieDescribeClassificationJobRequest) {
    super(scope, id);
  }

  public get dayOfWeek(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.scheduleFrequency.weeklySchedule.dayOfWeek'),
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

export class MacieDescribeClassificationJobStatistics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieDescribeClassificationJobRequest) {
    super(scope, id);
  }

  public get approximateNumberOfObjectsToProcess(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.statistics.approximateNumberOfObjectsToProcess'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.statistics.numberOfRuns'),
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

export class MacieDescribeClassificationJobUserPausedDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieDescribeClassificationJobRequest) {
    super(scope, id);
  }

  public get jobExpiresAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.userPausedDetails.jobExpiresAt'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.userPausedDetails.jobImminentExpirationHealthEventArn'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.userPausedDetails.jobPausedAt'),
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

export class MacieDescribeOrganizationConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get autoEnable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOrganizationConfiguration',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeOrganizationConfiguration.autoEnable'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeOrganizationConfiguration.maxAccountLimitReached'),
        outputPath: 'maxAccountLimitReached',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeOrganizationConfiguration.maxAccountLimitReached', props);
    return resource.getResponseField('maxAccountLimitReached') as unknown as boolean;
  }

}

export class MacieFetchBucketStatistics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieGetBucketStatisticsRequest) {
    super(scope, id);
  }

  public get bucketCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.bucketCount'),
        outputPath: 'bucketCount',
        parameters: {
          accountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketStatistics.bucketCount', props);
    return resource.getResponseField('bucketCount') as unknown as number;
  }

  public get bucketCountByEffectivePermission(): MacieFetchBucketStatisticsBucketCountByEffectivePermission {
    return new MacieFetchBucketStatisticsBucketCountByEffectivePermission(this, 'BucketCountByEffectivePermission', this.__resources, this.input);
  }

  public get bucketCountByEncryptionType(): MacieFetchBucketStatisticsBucketCountByEncryptionType {
    return new MacieFetchBucketStatisticsBucketCountByEncryptionType(this, 'BucketCountByEncryptionType', this.__resources, this.input);
  }

  public get bucketCountBySharedAccessType(): MacieFetchBucketStatisticsBucketCountBySharedAccessType {
    return new MacieFetchBucketStatisticsBucketCountBySharedAccessType(this, 'BucketCountBySharedAccessType', this.__resources, this.input);
  }

  public get classifiableObjectCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.classifiableObjectCount'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.classifiableSizeInBytes'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.lastUpdated'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.objectCount'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.sizeInBytes'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.sizeInBytesCompressed'),
        outputPath: 'sizeInBytesCompressed',
        parameters: {
          accountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketStatistics.sizeInBytesCompressed', props);
    return resource.getResponseField('sizeInBytesCompressed') as unknown as number;
  }

  public get unclassifiableObjectCount(): MacieFetchBucketStatisticsUnclassifiableObjectCount {
    return new MacieFetchBucketStatisticsUnclassifiableObjectCount(this, 'UnclassifiableObjectCount', this.__resources, this.input);
  }

  public get unclassifiableObjectSizeInBytes(): MacieFetchBucketStatisticsUnclassifiableObjectSizeInBytes {
    return new MacieFetchBucketStatisticsUnclassifiableObjectSizeInBytes(this, 'UnclassifiableObjectSizeInBytes', this.__resources, this.input);
  }

}

export class MacieFetchBucketStatisticsBucketCountByEffectivePermission extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieGetBucketStatisticsRequest) {
    super(scope, id);
  }

  public get publiclyAccessible(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.bucketCountByEffectivePermission.publiclyAccessible'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.bucketCountByEffectivePermission.publiclyReadable'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.bucketCountByEffectivePermission.publiclyWritable'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.bucketCountByEffectivePermission.unknown'),
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

export class MacieFetchBucketStatisticsBucketCountByEncryptionType extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieGetBucketStatisticsRequest) {
    super(scope, id);
  }

  public get kmsManaged(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.bucketCountByEncryptionType.kmsManaged'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.bucketCountByEncryptionType.s3Managed'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.bucketCountByEncryptionType.unencrypted'),
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

export class MacieFetchBucketStatisticsBucketCountBySharedAccessType extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieGetBucketStatisticsRequest) {
    super(scope, id);
  }

  public get external(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.bucketCountBySharedAccessType.external'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.bucketCountBySharedAccessType.internal'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.bucketCountBySharedAccessType.notShared'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.bucketCountBySharedAccessType.unknown'),
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

export class MacieFetchBucketStatisticsUnclassifiableObjectCount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieGetBucketStatisticsRequest) {
    super(scope, id);
  }

  public get fileType(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.unclassifiableObjectCount.fileType'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.unclassifiableObjectCount.storageClass'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.unclassifiableObjectCount.total'),
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

export class MacieFetchBucketStatisticsUnclassifiableObjectSizeInBytes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieGetBucketStatisticsRequest) {
    super(scope, id);
  }

  public get fileType(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.unclassifiableObjectSizeInBytes.fileType'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.unclassifiableObjectSizeInBytes.storageClass'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.unclassifiableObjectSizeInBytes.total'),
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

export class MacieFetchClassificationExportConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get configuration(): MacieFetchClassificationExportConfigurationConfiguration {
    return new MacieFetchClassificationExportConfigurationConfiguration(this, 'Configuration', this.__resources);
  }

}

export class MacieFetchClassificationExportConfigurationConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get s3Destination(): MacieFetchClassificationExportConfigurationConfigurationS3Destination {
    return new MacieFetchClassificationExportConfigurationConfigurationS3Destination(this, 'S3Destination', this.__resources);
  }

}

export class MacieFetchClassificationExportConfigurationConfigurationS3Destination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get bucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassificationExportConfiguration',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetClassificationExportConfiguration.configuration.s3Destination.bucketName'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetClassificationExportConfiguration.configuration.s3Destination.keyPrefix'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetClassificationExportConfiguration.configuration.s3Destination.kmsKeyArn'),
        outputPath: 'configuration.s3Destination.kmsKeyArn',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClassificationExportConfiguration.configuration.s3Destination.kmsKeyArn', props);
    return resource.getResponseField('configuration.s3Destination.kmsKeyArn') as unknown as string;
  }

}

export class MacieFetchCustomDataIdentifier extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieGetCustomDataIdentifierRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCustomDataIdentifier',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetCustomDataIdentifier.arn'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetCustomDataIdentifier.createdAt'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetCustomDataIdentifier.deleted'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetCustomDataIdentifier.description'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetCustomDataIdentifier.id'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetCustomDataIdentifier.ignoreWords'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetCustomDataIdentifier.keywords'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetCustomDataIdentifier.maximumMatchDistance'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetCustomDataIdentifier.name'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetCustomDataIdentifier.regex'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetCustomDataIdentifier.tags'),
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

export class MacieFetchFindingStatistics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieGetFindingStatisticsRequest) {
    super(scope, id);
  }

  public get countsByGroup(): shapes.MacieGroupCount[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFindingStatistics',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetFindingStatistics.countsByGroup'),
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
    return resource.getResponseField('countsByGroup') as unknown as shapes.MacieGroupCount[];
  }

}

export class MacieFetchFindings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieGetFindingsRequest) {
    super(scope, id);
  }

  public get findings(): shapes.MacieFinding[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFindings',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetFindings.findings'),
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
    return resource.getResponseField('findings') as unknown as shapes.MacieFinding[];
  }

}

export class MacieFetchFindingsFilter extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieGetFindingsFilterRequest) {
    super(scope, id);
  }

  public get action(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFindingsFilter',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetFindingsFilter.action'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetFindingsFilter.arn'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetFindingsFilter.description'),
        outputPath: 'description',
        parameters: {
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFindingsFilter.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get findingCriteria(): MacieFetchFindingsFilterFindingCriteria {
    return new MacieFetchFindingsFilterFindingCriteria(this, 'FindingCriteria', this.__resources, this.input);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFindingsFilter',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetFindingsFilter.id'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetFindingsFilter.name'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetFindingsFilter.position'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetFindingsFilter.tags'),
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

export class MacieFetchFindingsFilterFindingCriteria extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieGetFindingsFilterRequest) {
    super(scope, id);
  }

  public get criterion(): Record<string, shapes.MacieCriterionAdditionalProperties> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFindingsFilter',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetFindingsFilter.findingCriteria.criterion'),
        outputPath: 'findingCriteria.criterion',
        parameters: {
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFindingsFilter.findingCriteria.criterion', props);
    return resource.getResponseField('findingCriteria.criterion') as unknown as Record<string, shapes.MacieCriterionAdditionalProperties>;
  }

}

export class MacieFetchInvitationsCount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get invitationsCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInvitationsCount',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetInvitationsCount.invitationsCount'),
        outputPath: 'invitationsCount',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInvitationsCount.invitationsCount', props);
    return resource.getResponseField('invitationsCount') as unknown as number;
  }

}

export class MacieFetchMacieSession extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMacieSession',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetMacieSession.createdAt'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetMacieSession.findingPublishingFrequency'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetMacieSession.serviceRole'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetMacieSession.status'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetMacieSession.updatedAt'),
        outputPath: 'updatedAt',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMacieSession.updatedAt', props);
    return resource.getResponseField('updatedAt') as unknown as string;
  }

}

export class MacieFetchMasterAccount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get master(): MacieFetchMasterAccountMaster {
    return new MacieFetchMasterAccountMaster(this, 'Master', this.__resources);
  }

}

export class MacieFetchMasterAccountMaster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMasterAccount',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetMasterAccount.master.accountId'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetMasterAccount.master.invitationId'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetMasterAccount.master.invitedAt'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetMasterAccount.master.relationshipStatus'),
        outputPath: 'master.relationshipStatus',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMasterAccount.master.relationshipStatus', props);
    return resource.getResponseField('master.relationshipStatus') as unknown as string;
  }

}

export class MacieFetchMember extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieGetMemberRequest) {
    super(scope, id);
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMember',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetMember.accountId'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetMember.arn'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetMember.email'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetMember.invitedAt'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetMember.masterAccountId'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetMember.relationshipStatus'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetMember.tags'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetMember.updatedAt'),
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

export class MacieFetchUsageStatistics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieGetUsageStatisticsRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsageStatistics',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetUsageStatistics.nextToken'),
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

  public get records(): shapes.MacieUsageRecord[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsageStatistics',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetUsageStatistics.records'),
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
    return resource.getResponseField('records') as unknown as shapes.MacieUsageRecord[];
  }

}

export class MacieFetchUsageTotals extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get usageTotals(): shapes.MacieUsageTotal[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsageTotals',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetUsageTotals.usageTotals'),
        outputPath: 'usageTotals',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUsageTotals.usageTotals', props);
    return resource.getResponseField('usageTotals') as unknown as shapes.MacieUsageTotal[];
  }

}

export class MacieListClassificationJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieListClassificationJobsRequest) {
    super(scope, id);
  }

  public get items(): shapes.MacieJobSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listClassificationJobs',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.ListClassificationJobs.items'),
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
    return resource.getResponseField('items') as unknown as shapes.MacieJobSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listClassificationJobs',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.ListClassificationJobs.nextToken'),
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

export class MacieListCustomDataIdentifiers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieListCustomDataIdentifiersRequest) {
    super(scope, id);
  }

  public get items(): shapes.MacieCustomDataIdentifierSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCustomDataIdentifiers',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.ListCustomDataIdentifiers.items'),
        outputPath: 'items',
        parameters: {
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCustomDataIdentifiers.items', props);
    return resource.getResponseField('items') as unknown as shapes.MacieCustomDataIdentifierSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCustomDataIdentifiers',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.ListCustomDataIdentifiers.nextToken'),
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

export class MacieListFindings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieListFindingsRequest) {
    super(scope, id);
  }

  public get findingIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFindings',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.ListFindings.findingIds'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.ListFindings.nextToken'),
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

export class MacieListFindingsFilters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieListFindingsFiltersRequest) {
    super(scope, id);
  }

  public get findingsFilterListItems(): shapes.MacieFindingsFilterListItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFindingsFilters',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.ListFindingsFilters.findingsFilterListItems'),
        outputPath: 'findingsFilterListItems',
        parameters: {
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFindingsFilters.findingsFilterListItems', props);
    return resource.getResponseField('findingsFilterListItems') as unknown as shapes.MacieFindingsFilterListItem[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFindingsFilters',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.ListFindingsFilters.nextToken'),
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

export class MacieListInvitations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieListInvitationsRequest) {
    super(scope, id);
  }

  public get invitations(): shapes.MacieInvitation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInvitations',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.ListInvitations.invitations'),
        outputPath: 'invitations',
        parameters: {
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInvitations.invitations', props);
    return resource.getResponseField('invitations') as unknown as shapes.MacieInvitation[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInvitations',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.ListInvitations.nextToken'),
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

export class MacieListMembers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieListMembersRequest) {
    super(scope, id);
  }

  public get members(): shapes.MacieMember[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMembers',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.ListMembers.members'),
        outputPath: 'members',
        parameters: {
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          onlyAssociated: this.input.onlyAssociated,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMembers.members', props);
    return resource.getResponseField('members') as unknown as shapes.MacieMember[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMembers',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.ListMembers.nextToken'),
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

export class MacieListOrganizationAdminAccounts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieListOrganizationAdminAccountsRequest) {
    super(scope, id);
  }

  public get adminAccounts(): shapes.MacieAdminAccount[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOrganizationAdminAccounts',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.ListOrganizationAdminAccounts.adminAccounts'),
        outputPath: 'adminAccounts',
        parameters: {
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOrganizationAdminAccounts.adminAccounts', props);
    return resource.getResponseField('adminAccounts') as unknown as shapes.MacieAdminAccount[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOrganizationAdminAccounts',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.ListOrganizationAdminAccounts.nextToken'),
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

export class MacieListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieListTagsForResourceRequest) {
    super(scope, id);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.ListTagsForResource.tags'),
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

export class MaciePutClassificationExportConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MaciePutClassificationExportConfigurationRequest) {
    super(scope, id);
  }

  public get configuration(): MaciePutClassificationExportConfigurationConfiguration {
    return new MaciePutClassificationExportConfigurationConfiguration(this, 'Configuration', this.__resources, this.input);
  }

}

export class MaciePutClassificationExportConfigurationConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MaciePutClassificationExportConfigurationRequest) {
    super(scope, id);
  }

  public get s3Destination(): MaciePutClassificationExportConfigurationConfigurationS3Destination {
    return new MaciePutClassificationExportConfigurationConfigurationS3Destination(this, 'S3Destination', this.__resources, this.input);
  }

}

export class MaciePutClassificationExportConfigurationConfigurationS3Destination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MaciePutClassificationExportConfigurationRequest) {
    super(scope, id);
  }

  public get bucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putClassificationExportConfiguration',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.PutClassificationExportConfiguration.configuration.s3Destination.bucketName'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.PutClassificationExportConfiguration.configuration.s3Destination.keyPrefix'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.PutClassificationExportConfiguration.configuration.s3Destination.kmsKeyArn'),
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

export class MacieTestCustomDataIdentifier extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieTestCustomDataIdentifierRequest) {
    super(scope, id);
  }

  public get matchCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testCustomDataIdentifier',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.TestCustomDataIdentifier.matchCount'),
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

export class MacieUpdateFindingsFilter extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MacieUpdateFindingsFilterRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFindingsFilter',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.UpdateFindingsFilter.arn'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.UpdateFindingsFilter.id'),
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

