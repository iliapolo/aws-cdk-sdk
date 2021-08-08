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
          administratorAccountId: input.administratorAccountId,
          invitationId: input.invitationId,
          masterAccount: input.masterAccount,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AcceptInvitation', props);
  }

  public batchGetCustomDataIdentifiers(input: shapes.Macie2BatchGetCustomDataIdentifiersRequest): Macie2ResponsesBatchGetCustomDataIdentifiers {
    return new Macie2ResponsesBatchGetCustomDataIdentifiers(this, this.__resources, input);
  }

  public createClassificationJob(input: shapes.Macie2CreateClassificationJobRequest): Macie2ResponsesCreateClassificationJob {
    return new Macie2ResponsesCreateClassificationJob(this, this.__resources, input);
  }

  public createCustomDataIdentifier(input: shapes.Macie2CreateCustomDataIdentifierRequest): Macie2ResponsesCreateCustomDataIdentifier {
    return new Macie2ResponsesCreateCustomDataIdentifier(this, this.__resources, input);
  }

  public createFindingsFilter(input: shapes.Macie2CreateFindingsFilterRequest): Macie2ResponsesCreateFindingsFilter {
    return new Macie2ResponsesCreateFindingsFilter(this, this.__resources, input);
  }

  public createInvitations(input: shapes.Macie2CreateInvitationsRequest): Macie2ResponsesCreateInvitations {
    return new Macie2ResponsesCreateInvitations(this, this.__resources, input);
  }

  public createMember(input: shapes.Macie2CreateMemberRequest): Macie2ResponsesCreateMember {
    return new Macie2ResponsesCreateMember(this, this.__resources, input);
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

  public declineInvitations(input: shapes.Macie2DeclineInvitationsRequest): Macie2ResponsesDeclineInvitations {
    return new Macie2ResponsesDeclineInvitations(this, this.__resources, input);
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

  public deleteInvitations(input: shapes.Macie2DeleteInvitationsRequest): Macie2ResponsesDeleteInvitations {
    return new Macie2ResponsesDeleteInvitations(this, this.__resources, input);
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

  public describeBuckets(input: shapes.Macie2DescribeBucketsRequest): Macie2ResponsesDescribeBuckets {
    return new Macie2ResponsesDescribeBuckets(this, this.__resources, input);
  }

  public describeClassificationJob(input: shapes.Macie2DescribeClassificationJobRequest): Macie2ResponsesDescribeClassificationJob {
    return new Macie2ResponsesDescribeClassificationJob(this, this.__resources, input);
  }

  public describeOrganizationConfiguration(): Macie2ResponsesDescribeOrganizationConfiguration {
    return new Macie2ResponsesDescribeOrganizationConfiguration(this, this.__resources);
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

  public disassociateFromAdministratorAccount(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateFromAdministratorAccount',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DisassociateFromAdministratorAccount'),
        parameters: {
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateFromAdministratorAccount', props);
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

  public fetchAdministratorAccount(): Macie2ResponsesFetchAdministratorAccount {
    return new Macie2ResponsesFetchAdministratorAccount(this, this.__resources);
  }

  public fetchBucketStatistics(input: shapes.Macie2GetBucketStatisticsRequest): Macie2ResponsesFetchBucketStatistics {
    return new Macie2ResponsesFetchBucketStatistics(this, this.__resources, input);
  }

  public fetchClassificationExportConfiguration(): Macie2ResponsesFetchClassificationExportConfiguration {
    return new Macie2ResponsesFetchClassificationExportConfiguration(this, this.__resources);
  }

  public fetchCustomDataIdentifier(input: shapes.Macie2GetCustomDataIdentifierRequest): Macie2ResponsesFetchCustomDataIdentifier {
    return new Macie2ResponsesFetchCustomDataIdentifier(this, this.__resources, input);
  }

  public fetchFindingStatistics(input: shapes.Macie2GetFindingStatisticsRequest): Macie2ResponsesFetchFindingStatistics {
    return new Macie2ResponsesFetchFindingStatistics(this, this.__resources, input);
  }

  public fetchFindings(input: shapes.Macie2GetFindingsRequest): Macie2ResponsesFetchFindings {
    return new Macie2ResponsesFetchFindings(this, this.__resources, input);
  }

  public fetchFindingsFilter(input: shapes.Macie2GetFindingsFilterRequest): Macie2ResponsesFetchFindingsFilter {
    return new Macie2ResponsesFetchFindingsFilter(this, this.__resources, input);
  }

  public fetchFindingsPublicationConfiguration(): Macie2ResponsesFetchFindingsPublicationConfiguration {
    return new Macie2ResponsesFetchFindingsPublicationConfiguration(this, this.__resources);
  }

  public fetchInvitationsCount(): Macie2ResponsesFetchInvitationsCount {
    return new Macie2ResponsesFetchInvitationsCount(this, this.__resources);
  }

  public fetchMacieSession(): Macie2ResponsesFetchMacieSession {
    return new Macie2ResponsesFetchMacieSession(this, this.__resources);
  }

  public fetchMasterAccount(): Macie2ResponsesFetchMasterAccount {
    return new Macie2ResponsesFetchMasterAccount(this, this.__resources);
  }

  public fetchMember(input: shapes.Macie2GetMemberRequest): Macie2ResponsesFetchMember {
    return new Macie2ResponsesFetchMember(this, this.__resources, input);
  }

  public fetchUsageStatistics(input: shapes.Macie2GetUsageStatisticsRequest): Macie2ResponsesFetchUsageStatistics {
    return new Macie2ResponsesFetchUsageStatistics(this, this.__resources, input);
  }

  public fetchUsageTotals(input: shapes.Macie2GetUsageTotalsRequest): Macie2ResponsesFetchUsageTotals {
    return new Macie2ResponsesFetchUsageTotals(this, this.__resources, input);
  }

  public listClassificationJobs(input: shapes.Macie2ListClassificationJobsRequest): Macie2ResponsesListClassificationJobs {
    return new Macie2ResponsesListClassificationJobs(this, this.__resources, input);
  }

  public listCustomDataIdentifiers(input: shapes.Macie2ListCustomDataIdentifiersRequest): Macie2ResponsesListCustomDataIdentifiers {
    return new Macie2ResponsesListCustomDataIdentifiers(this, this.__resources, input);
  }

  public listFindings(input: shapes.Macie2ListFindingsRequest): Macie2ResponsesListFindings {
    return new Macie2ResponsesListFindings(this, this.__resources, input);
  }

  public listFindingsFilters(input: shapes.Macie2ListFindingsFiltersRequest): Macie2ResponsesListFindingsFilters {
    return new Macie2ResponsesListFindingsFilters(this, this.__resources, input);
  }

  public listInvitations(input: shapes.Macie2ListInvitationsRequest): Macie2ResponsesListInvitations {
    return new Macie2ResponsesListInvitations(this, this.__resources, input);
  }

  public listMembers(input: shapes.Macie2ListMembersRequest): Macie2ResponsesListMembers {
    return new Macie2ResponsesListMembers(this, this.__resources, input);
  }

  public listOrganizationAdminAccounts(input: shapes.Macie2ListOrganizationAdminAccountsRequest): Macie2ResponsesListOrganizationAdminAccounts {
    return new Macie2ResponsesListOrganizationAdminAccounts(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.Macie2ListTagsForResourceRequest): Macie2ResponsesListTagsForResource {
    return new Macie2ResponsesListTagsForResource(this, this.__resources, input);
  }

  public putClassificationExportConfiguration(input: shapes.Macie2PutClassificationExportConfigurationRequest): Macie2ResponsesPutClassificationExportConfiguration {
    return new Macie2ResponsesPutClassificationExportConfiguration(this, this.__resources, input);
  }

  public putFindingsPublicationConfiguration(input: shapes.Macie2PutFindingsPublicationConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putFindingsPublicationConfiguration',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.PutFindingsPublicationConfiguration'),
        parameters: {
          clientToken: input.clientToken,
          securityHubConfiguration: {
            publishClassificationFindings: input.securityHubConfiguration?.publishClassificationFindings,
            publishPolicyFindings: input.securityHubConfiguration?.publishPolicyFindings,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutFindingsPublicationConfiguration', props);
  }

  public searchResources(input: shapes.Macie2SearchResourcesRequest): Macie2ResponsesSearchResources {
    return new Macie2ResponsesSearchResources(this, this.__resources, input);
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

  public testCustomDataIdentifier(input: shapes.Macie2TestCustomDataIdentifierRequest): Macie2ResponsesTestCustomDataIdentifier {
    return new Macie2ResponsesTestCustomDataIdentifier(this, this.__resources, input);
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

  public updateFindingsFilter(input: shapes.Macie2UpdateFindingsFilterRequest): Macie2ResponsesUpdateFindingsFilter {
    return new Macie2ResponsesUpdateFindingsFilter(this, this.__resources, input);
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

export class Macie2ResponsesBatchGetCustomDataIdentifiers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2BatchGetCustomDataIdentifiersRequest) {
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
          ids: this.__input.ids,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetCustomDataIdentifiers.customDataIdentifiers', props);
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
          ids: this.__input.ids,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetCustomDataIdentifiers.notFoundIdentifierIds', props);
    return resource.getResponseField('notFoundIdentifierIds') as unknown as string[];
  }

}

export class Macie2ResponsesCreateClassificationJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2CreateClassificationJobRequest) {
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
          clientToken: this.__input.clientToken,
          customDataIdentifierIds: this.__input.customDataIdentifierIds,
          description: this.__input.description,
          initialRun: this.__input.initialRun,
          jobType: this.__input.jobType,
          name: this.__input.name,
          s3JobDefinition: {
            bucketDefinitions: this.__input.s3JobDefinition.bucketDefinitions,
            scoping: {
              excludes: {
                and: this.__input.s3JobDefinition.scoping?.excludes?.and,
              },
              includes: {
                and: this.__input.s3JobDefinition.scoping?.includes?.and,
              },
            },
            bucketCriteria: {
              excludes: {
                and: this.__input.s3JobDefinition.bucketCriteria?.excludes?.and,
              },
              includes: {
                and: this.__input.s3JobDefinition.bucketCriteria?.includes?.and,
              },
            },
          },
          samplingPercentage: this.__input.samplingPercentage,
          scheduleFrequency: {
            dailySchedule: {
            },
            monthlySchedule: {
              dayOfMonth: this.__input.scheduleFrequency?.monthlySchedule?.dayOfMonth,
            },
            weeklySchedule: {
              dayOfWeek: this.__input.scheduleFrequency?.weeklySchedule?.dayOfWeek,
            },
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateClassificationJob.jobArn', props);
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
          clientToken: this.__input.clientToken,
          customDataIdentifierIds: this.__input.customDataIdentifierIds,
          description: this.__input.description,
          initialRun: this.__input.initialRun,
          jobType: this.__input.jobType,
          name: this.__input.name,
          s3JobDefinition: {
            bucketDefinitions: this.__input.s3JobDefinition.bucketDefinitions,
            scoping: {
              excludes: {
                and: this.__input.s3JobDefinition.scoping?.excludes?.and,
              },
              includes: {
                and: this.__input.s3JobDefinition.scoping?.includes?.and,
              },
            },
            bucketCriteria: {
              excludes: {
                and: this.__input.s3JobDefinition.bucketCriteria?.excludes?.and,
              },
              includes: {
                and: this.__input.s3JobDefinition.bucketCriteria?.includes?.and,
              },
            },
          },
          samplingPercentage: this.__input.samplingPercentage,
          scheduleFrequency: {
            dailySchedule: {
            },
            monthlySchedule: {
              dayOfMonth: this.__input.scheduleFrequency?.monthlySchedule?.dayOfMonth,
            },
            weeklySchedule: {
              dayOfWeek: this.__input.scheduleFrequency?.weeklySchedule?.dayOfWeek,
            },
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateClassificationJob.jobId', props);
    return resource.getResponseField('jobId') as unknown as string;
  }

}

export class Macie2ResponsesCreateCustomDataIdentifier {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2CreateCustomDataIdentifierRequest) {
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
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          ignoreWords: this.__input.ignoreWords,
          keywords: this.__input.keywords,
          maximumMatchDistance: this.__input.maximumMatchDistance,
          name: this.__input.name,
          regex: this.__input.regex,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCustomDataIdentifier.customDataIdentifierId', props);
    return resource.getResponseField('customDataIdentifierId') as unknown as string;
  }

}

export class Macie2ResponsesCreateFindingsFilter {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2CreateFindingsFilterRequest) {
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
          action: this.__input.action,
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          findingCriteria: {
            criterion: this.__input.findingCriteria.criterion,
          },
          name: this.__input.name,
          position: this.__input.position,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFindingsFilter.arn', props);
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
          action: this.__input.action,
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          findingCriteria: {
            criterion: this.__input.findingCriteria.criterion,
          },
          name: this.__input.name,
          position: this.__input.position,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFindingsFilter.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

}

export class Macie2ResponsesCreateInvitations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2CreateInvitationsRequest) {
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
          accountIds: this.__input.accountIds,
          disableEmailNotification: this.__input.disableEmailNotification,
          message: this.__input.message,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInvitations.unprocessedAccounts', props);
    return resource.getResponseField('unprocessedAccounts') as unknown as shapes.Macie2UnprocessedAccount[];
  }

}

export class Macie2ResponsesCreateMember {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2CreateMemberRequest) {
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
            accountId: this.__input.account.accountId,
            email: this.__input.account.email,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMember.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

}

export class Macie2ResponsesDeclineInvitations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2DeclineInvitationsRequest) {
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
          accountIds: this.__input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeclineInvitations.unprocessedAccounts', props);
    return resource.getResponseField('unprocessedAccounts') as unknown as shapes.Macie2UnprocessedAccount[];
  }

}

export class Macie2ResponsesDeleteInvitations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2DeleteInvitationsRequest) {
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
          accountIds: this.__input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteInvitations.unprocessedAccounts', props);
    return resource.getResponseField('unprocessedAccounts') as unknown as shapes.Macie2UnprocessedAccount[];
  }

}

export class Macie2ResponsesDescribeBuckets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2DescribeBucketsRequest) {
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
          criteria: this.__input.criteria,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          sortCriteria: {
            attributeName: this.__input.sortCriteria?.attributeName,
            orderBy: this.__input.sortCriteria?.orderBy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBuckets.buckets', props);
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
          criteria: this.__input.criteria,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          sortCriteria: {
            attributeName: this.__input.sortCriteria?.attributeName,
            orderBy: this.__input.sortCriteria?.orderBy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBuckets.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class Macie2ResponsesDescribeClassificationJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2DescribeClassificationJobRequest) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.clientToken', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.createdAt', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.customDataIdentifierIds', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.description', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.initialRun', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.jobArn', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.jobId', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.jobStatus', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.jobType', props);
    return resource.getResponseField('jobType') as unknown as string;
  }

  public get lastRunErrorStatus(): Macie2ResponsesDescribeClassificationJobLastRunErrorStatus {
    return new Macie2ResponsesDescribeClassificationJobLastRunErrorStatus(this.__scope, this.__resources, this.__input);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.lastRunTime', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get s3JobDefinition(): Macie2ResponsesDescribeClassificationJobS3JobDefinition {
    return new Macie2ResponsesDescribeClassificationJobS3JobDefinition(this.__scope, this.__resources, this.__input);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.samplingPercentage', props);
    return resource.getResponseField('samplingPercentage') as unknown as number;
  }

  public get scheduleFrequency(): Macie2ResponsesDescribeClassificationJobScheduleFrequency {
    return new Macie2ResponsesDescribeClassificationJobScheduleFrequency(this.__scope, this.__resources, this.__input);
  }

  public get statistics(): Macie2ResponsesDescribeClassificationJobStatistics {
    return new Macie2ResponsesDescribeClassificationJobStatistics(this.__scope, this.__resources, this.__input);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

  public get userPausedDetails(): Macie2ResponsesDescribeClassificationJobUserPausedDetails {
    return new Macie2ResponsesDescribeClassificationJobUserPausedDetails(this.__scope, this.__resources, this.__input);
  }

}

export class Macie2ResponsesDescribeClassificationJobLastRunErrorStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2DescribeClassificationJobRequest) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.lastRunErrorStatus.code', props);
    return resource.getResponseField('lastRunErrorStatus.code') as unknown as string;
  }

}

export class Macie2ResponsesDescribeClassificationJobS3JobDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2DescribeClassificationJobRequest) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.s3JobDefinition.bucketDefinitions', props);
    return resource.getResponseField('s3JobDefinition.bucketDefinitions') as unknown as shapes.Macie2S3BucketDefinitionForJob[];
  }

  public get scoping(): Macie2ResponsesDescribeClassificationJobS3JobDefinitionScoping {
    return new Macie2ResponsesDescribeClassificationJobS3JobDefinitionScoping(this.__scope, this.__resources, this.__input);
  }

  public get bucketCriteria(): Macie2ResponsesDescribeClassificationJobS3JobDefinitionBucketCriteria {
    return new Macie2ResponsesDescribeClassificationJobS3JobDefinitionBucketCriteria(this.__scope, this.__resources, this.__input);
  }

}

export class Macie2ResponsesDescribeClassificationJobS3JobDefinitionScoping {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2DescribeClassificationJobRequest) {
  }

  public get excludes(): Macie2ResponsesDescribeClassificationJobS3JobDefinitionScopingExcludes {
    return new Macie2ResponsesDescribeClassificationJobS3JobDefinitionScopingExcludes(this.__scope, this.__resources, this.__input);
  }

  public get includes(): Macie2ResponsesDescribeClassificationJobS3JobDefinitionScopingIncludes {
    return new Macie2ResponsesDescribeClassificationJobS3JobDefinitionScopingIncludes(this.__scope, this.__resources, this.__input);
  }

}

export class Macie2ResponsesDescribeClassificationJobS3JobDefinitionScopingExcludes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2DescribeClassificationJobRequest) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.s3JobDefinition.scoping.excludes.and', props);
    return resource.getResponseField('s3JobDefinition.scoping.excludes.and') as unknown as shapes.Macie2JobScopeTerm[];
  }

}

export class Macie2ResponsesDescribeClassificationJobS3JobDefinitionScopingIncludes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2DescribeClassificationJobRequest) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.s3JobDefinition.scoping.includes.and', props);
    return resource.getResponseField('s3JobDefinition.scoping.includes.and') as unknown as shapes.Macie2JobScopeTerm[];
  }

}

export class Macie2ResponsesDescribeClassificationJobS3JobDefinitionBucketCriteria {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2DescribeClassificationJobRequest) {
  }

  public get excludes(): Macie2ResponsesDescribeClassificationJobS3JobDefinitionBucketCriteriaExcludes {
    return new Macie2ResponsesDescribeClassificationJobS3JobDefinitionBucketCriteriaExcludes(this.__scope, this.__resources, this.__input);
  }

  public get includes(): Macie2ResponsesDescribeClassificationJobS3JobDefinitionBucketCriteriaIncludes {
    return new Macie2ResponsesDescribeClassificationJobS3JobDefinitionBucketCriteriaIncludes(this.__scope, this.__resources, this.__input);
  }

}

export class Macie2ResponsesDescribeClassificationJobS3JobDefinitionBucketCriteriaExcludes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2DescribeClassificationJobRequest) {
  }

  public get and(): shapes.Macie2CriteriaForJob[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DescribeClassificationJob.s3JobDefinition.bucketCriteria.excludes.and'),
        outputPath: 's3JobDefinition.bucketCriteria.excludes.and',
        parameters: {
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.s3JobDefinition.bucketCriteria.excludes.and', props);
    return resource.getResponseField('s3JobDefinition.bucketCriteria.excludes.and') as unknown as shapes.Macie2CriteriaForJob[];
  }

}

export class Macie2ResponsesDescribeClassificationJobS3JobDefinitionBucketCriteriaIncludes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2DescribeClassificationJobRequest) {
  }

  public get and(): shapes.Macie2CriteriaForJob[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DescribeClassificationJob.s3JobDefinition.bucketCriteria.includes.and'),
        outputPath: 's3JobDefinition.bucketCriteria.includes.and',
        parameters: {
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.s3JobDefinition.bucketCriteria.includes.and', props);
    return resource.getResponseField('s3JobDefinition.bucketCriteria.includes.and') as unknown as shapes.Macie2CriteriaForJob[];
  }

}

export class Macie2ResponsesDescribeClassificationJobScheduleFrequency {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2DescribeClassificationJobRequest) {
  }

  public get dailySchedule(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.DescribeClassificationJob.scheduleFrequency.dailySchedule'),
        outputPath: 'scheduleFrequency.dailySchedule',
        parameters: {
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.scheduleFrequency.dailySchedule', props);
    return resource.getResponseField('scheduleFrequency.dailySchedule') as unknown as any;
  }

  public get monthlySchedule(): Macie2ResponsesDescribeClassificationJobScheduleFrequencyMonthlySchedule {
    return new Macie2ResponsesDescribeClassificationJobScheduleFrequencyMonthlySchedule(this.__scope, this.__resources, this.__input);
  }

  public get weeklySchedule(): Macie2ResponsesDescribeClassificationJobScheduleFrequencyWeeklySchedule {
    return new Macie2ResponsesDescribeClassificationJobScheduleFrequencyWeeklySchedule(this.__scope, this.__resources, this.__input);
  }

}

export class Macie2ResponsesDescribeClassificationJobScheduleFrequencyMonthlySchedule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2DescribeClassificationJobRequest) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.scheduleFrequency.monthlySchedule.dayOfMonth', props);
    return resource.getResponseField('scheduleFrequency.monthlySchedule.dayOfMonth') as unknown as number;
  }

}

export class Macie2ResponsesDescribeClassificationJobScheduleFrequencyWeeklySchedule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2DescribeClassificationJobRequest) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.scheduleFrequency.weeklySchedule.dayOfWeek', props);
    return resource.getResponseField('scheduleFrequency.weeklySchedule.dayOfWeek') as unknown as string;
  }

}

export class Macie2ResponsesDescribeClassificationJobStatistics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2DescribeClassificationJobRequest) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.statistics.approximateNumberOfObjectsToProcess', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.statistics.numberOfRuns', props);
    return resource.getResponseField('statistics.numberOfRuns') as unknown as number;
  }

}

export class Macie2ResponsesDescribeClassificationJobUserPausedDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2DescribeClassificationJobRequest) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.userPausedDetails.jobExpiresAt', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.userPausedDetails.jobImminentExpirationHealthEventArn', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.userPausedDetails.jobPausedAt', props);
    return resource.getResponseField('userPausedDetails.jobPausedAt') as unknown as string;
  }

}

export class Macie2ResponsesDescribeOrganizationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOrganizationConfiguration.autoEnable', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOrganizationConfiguration.maxAccountLimitReached', props);
    return resource.getResponseField('maxAccountLimitReached') as unknown as boolean;
  }

}

export class Macie2ResponsesFetchAdministratorAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get administrator(): Macie2ResponsesFetchAdministratorAccountAdministrator {
    return new Macie2ResponsesFetchAdministratorAccountAdministrator(this.__scope, this.__resources);
  }

}

export class Macie2ResponsesFetchAdministratorAccountAdministrator {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAdministratorAccount',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetAdministratorAccount.administrator.accountId'),
        outputPath: 'administrator.accountId',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAdministratorAccount.administrator.accountId', props);
    return resource.getResponseField('administrator.accountId') as unknown as string;
  }

  public get invitationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAdministratorAccount',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetAdministratorAccount.administrator.invitationId'),
        outputPath: 'administrator.invitationId',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAdministratorAccount.administrator.invitationId', props);
    return resource.getResponseField('administrator.invitationId') as unknown as string;
  }

  public get invitedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAdministratorAccount',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetAdministratorAccount.administrator.invitedAt'),
        outputPath: 'administrator.invitedAt',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAdministratorAccount.administrator.invitedAt', props);
    return resource.getResponseField('administrator.invitedAt') as unknown as string;
  }

  public get relationshipStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAdministratorAccount',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetAdministratorAccount.administrator.relationshipStatus'),
        outputPath: 'administrator.relationshipStatus',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAdministratorAccount.administrator.relationshipStatus', props);
    return resource.getResponseField('administrator.relationshipStatus') as unknown as string;
  }

}

export class Macie2ResponsesFetchBucketStatistics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2GetBucketStatisticsRequest) {
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
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketStatistics.bucketCount', props);
    return resource.getResponseField('bucketCount') as unknown as number;
  }

  public get bucketCountByEffectivePermission(): Macie2ResponsesFetchBucketStatisticsBucketCountByEffectivePermission {
    return new Macie2ResponsesFetchBucketStatisticsBucketCountByEffectivePermission(this.__scope, this.__resources, this.__input);
  }

  public get bucketCountByEncryptionType(): Macie2ResponsesFetchBucketStatisticsBucketCountByEncryptionType {
    return new Macie2ResponsesFetchBucketStatisticsBucketCountByEncryptionType(this.__scope, this.__resources, this.__input);
  }

  public get bucketCountByObjectEncryptionRequirement(): Macie2ResponsesFetchBucketStatisticsBucketCountByObjectEncryptionRequirement {
    return new Macie2ResponsesFetchBucketStatisticsBucketCountByObjectEncryptionRequirement(this.__scope, this.__resources, this.__input);
  }

  public get bucketCountBySharedAccessType(): Macie2ResponsesFetchBucketStatisticsBucketCountBySharedAccessType {
    return new Macie2ResponsesFetchBucketStatisticsBucketCountBySharedAccessType(this.__scope, this.__resources, this.__input);
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
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketStatistics.classifiableObjectCount', props);
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
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketStatistics.classifiableSizeInBytes', props);
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
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketStatistics.lastUpdated', props);
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
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketStatistics.objectCount', props);
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
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketStatistics.sizeInBytes', props);
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
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketStatistics.sizeInBytesCompressed', props);
    return resource.getResponseField('sizeInBytesCompressed') as unknown as number;
  }

  public get unclassifiableObjectCount(): Macie2ResponsesFetchBucketStatisticsUnclassifiableObjectCount {
    return new Macie2ResponsesFetchBucketStatisticsUnclassifiableObjectCount(this.__scope, this.__resources, this.__input);
  }

  public get unclassifiableObjectSizeInBytes(): Macie2ResponsesFetchBucketStatisticsUnclassifiableObjectSizeInBytes {
    return new Macie2ResponsesFetchBucketStatisticsUnclassifiableObjectSizeInBytes(this.__scope, this.__resources, this.__input);
  }

}

export class Macie2ResponsesFetchBucketStatisticsBucketCountByEffectivePermission {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2GetBucketStatisticsRequest) {
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
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketStatistics.bucketCountByEffectivePermission.publiclyAccessible', props);
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
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketStatistics.bucketCountByEffectivePermission.publiclyReadable', props);
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
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketStatistics.bucketCountByEffectivePermission.publiclyWritable', props);
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
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketStatistics.bucketCountByEffectivePermission.unknown', props);
    return resource.getResponseField('bucketCountByEffectivePermission.unknown') as unknown as number;
  }

}

export class Macie2ResponsesFetchBucketStatisticsBucketCountByEncryptionType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2GetBucketStatisticsRequest) {
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
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketStatistics.bucketCountByEncryptionType.kmsManaged', props);
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
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketStatistics.bucketCountByEncryptionType.s3Managed', props);
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
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketStatistics.bucketCountByEncryptionType.unencrypted', props);
    return resource.getResponseField('bucketCountByEncryptionType.unencrypted') as unknown as number;
  }

  public get unknown(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetBucketStatistics.bucketCountByEncryptionType.unknown'),
        outputPath: 'bucketCountByEncryptionType.unknown',
        parameters: {
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketStatistics.bucketCountByEncryptionType.unknown', props);
    return resource.getResponseField('bucketCountByEncryptionType.unknown') as unknown as number;
  }

}

export class Macie2ResponsesFetchBucketStatisticsBucketCountByObjectEncryptionRequirement {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2GetBucketStatisticsRequest) {
  }

  public get allowsUnencryptedObjectUploads(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetBucketStatistics.bucketCountByObjectEncryptionRequirement.allowsUnencryptedObjectUploads'),
        outputPath: 'bucketCountByObjectEncryptionRequirement.allowsUnencryptedObjectUploads',
        parameters: {
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketStatistics.bucketCountByObjectEncryptionRequirement.allowsUnencryptedObjectUploads', props);
    return resource.getResponseField('bucketCountByObjectEncryptionRequirement.allowsUnencryptedObjectUploads') as unknown as number;
  }

  public get deniesUnencryptedObjectUploads(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetBucketStatistics.bucketCountByObjectEncryptionRequirement.deniesUnencryptedObjectUploads'),
        outputPath: 'bucketCountByObjectEncryptionRequirement.deniesUnencryptedObjectUploads',
        parameters: {
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketStatistics.bucketCountByObjectEncryptionRequirement.deniesUnencryptedObjectUploads', props);
    return resource.getResponseField('bucketCountByObjectEncryptionRequirement.deniesUnencryptedObjectUploads') as unknown as number;
  }

  public get unknown(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetBucketStatistics.bucketCountByObjectEncryptionRequirement.unknown'),
        outputPath: 'bucketCountByObjectEncryptionRequirement.unknown',
        parameters: {
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketStatistics.bucketCountByObjectEncryptionRequirement.unknown', props);
    return resource.getResponseField('bucketCountByObjectEncryptionRequirement.unknown') as unknown as number;
  }

}

export class Macie2ResponsesFetchBucketStatisticsBucketCountBySharedAccessType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2GetBucketStatisticsRequest) {
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
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketStatistics.bucketCountBySharedAccessType.external', props);
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
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketStatistics.bucketCountBySharedAccessType.internal', props);
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
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketStatistics.bucketCountBySharedAccessType.notShared', props);
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
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketStatistics.bucketCountBySharedAccessType.unknown', props);
    return resource.getResponseField('bucketCountBySharedAccessType.unknown') as unknown as number;
  }

}

export class Macie2ResponsesFetchBucketStatisticsUnclassifiableObjectCount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2GetBucketStatisticsRequest) {
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
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketStatistics.unclassifiableObjectCount.fileType', props);
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
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketStatistics.unclassifiableObjectCount.storageClass', props);
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
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketStatistics.unclassifiableObjectCount.total', props);
    return resource.getResponseField('unclassifiableObjectCount.total') as unknown as number;
  }

}

export class Macie2ResponsesFetchBucketStatisticsUnclassifiableObjectSizeInBytes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2GetBucketStatisticsRequest) {
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
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketStatistics.unclassifiableObjectSizeInBytes.fileType', props);
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
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketStatistics.unclassifiableObjectSizeInBytes.storageClass', props);
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
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketStatistics.unclassifiableObjectSizeInBytes.total', props);
    return resource.getResponseField('unclassifiableObjectSizeInBytes.total') as unknown as number;
  }

}

export class Macie2ResponsesFetchClassificationExportConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get configuration(): Macie2ResponsesFetchClassificationExportConfigurationConfiguration {
    return new Macie2ResponsesFetchClassificationExportConfigurationConfiguration(this.__scope, this.__resources);
  }

}

export class Macie2ResponsesFetchClassificationExportConfigurationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get s3Destination(): Macie2ResponsesFetchClassificationExportConfigurationConfigurationS3Destination {
    return new Macie2ResponsesFetchClassificationExportConfigurationConfigurationS3Destination(this.__scope, this.__resources);
  }

}

export class Macie2ResponsesFetchClassificationExportConfigurationConfigurationS3Destination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassificationExportConfiguration.configuration.s3Destination.bucketName', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassificationExportConfiguration.configuration.s3Destination.keyPrefix', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassificationExportConfiguration.configuration.s3Destination.kmsKeyArn', props);
    return resource.getResponseField('configuration.s3Destination.kmsKeyArn') as unknown as string;
  }

}

export class Macie2ResponsesFetchCustomDataIdentifier {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2GetCustomDataIdentifierRequest) {
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
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCustomDataIdentifier.arn', props);
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
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCustomDataIdentifier.createdAt', props);
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
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCustomDataIdentifier.deleted', props);
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
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCustomDataIdentifier.description', props);
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
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCustomDataIdentifier.id', props);
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
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCustomDataIdentifier.ignoreWords', props);
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
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCustomDataIdentifier.keywords', props);
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
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCustomDataIdentifier.maximumMatchDistance', props);
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
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCustomDataIdentifier.name', props);
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
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCustomDataIdentifier.regex', props);
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
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCustomDataIdentifier.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class Macie2ResponsesFetchFindingStatistics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2GetFindingStatisticsRequest) {
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
            criterion: this.__input.findingCriteria?.criterion,
          },
          groupBy: this.__input.groupBy,
          size: this.__input.size,
          sortCriteria: {
            attributeName: this.__input.sortCriteria?.attributeName,
            orderBy: this.__input.sortCriteria?.orderBy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFindingStatistics.countsByGroup', props);
    return resource.getResponseField('countsByGroup') as unknown as shapes.Macie2GroupCount[];
  }

}

export class Macie2ResponsesFetchFindings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2GetFindingsRequest) {
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
          findingIds: this.__input.findingIds,
          sortCriteria: {
            attributeName: this.__input.sortCriteria?.attributeName,
            orderBy: this.__input.sortCriteria?.orderBy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFindings.findings', props);
    return resource.getResponseField('findings') as unknown as shapes.Macie2Finding[];
  }

}

export class Macie2ResponsesFetchFindingsFilter {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2GetFindingsFilterRequest) {
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
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFindingsFilter.action', props);
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
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFindingsFilter.arn', props);
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
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFindingsFilter.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get findingCriteria(): Macie2ResponsesFetchFindingsFilterFindingCriteria {
    return new Macie2ResponsesFetchFindingsFilterFindingCriteria(this.__scope, this.__resources, this.__input);
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
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFindingsFilter.id', props);
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
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFindingsFilter.name', props);
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
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFindingsFilter.position', props);
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
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFindingsFilter.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class Macie2ResponsesFetchFindingsFilterFindingCriteria {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2GetFindingsFilterRequest) {
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
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFindingsFilter.findingCriteria.criterion', props);
    return resource.getResponseField('findingCriteria.criterion') as unknown as Record<string, shapes.Macie2CriterionAdditionalProperties>;
  }

}

export class Macie2ResponsesFetchFindingsPublicationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get securityHubConfiguration(): Macie2ResponsesFetchFindingsPublicationConfigurationSecurityHubConfiguration {
    return new Macie2ResponsesFetchFindingsPublicationConfigurationSecurityHubConfiguration(this.__scope, this.__resources);
  }

}

export class Macie2ResponsesFetchFindingsPublicationConfigurationSecurityHubConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get publishClassificationFindings(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFindingsPublicationConfiguration',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetFindingsPublicationConfiguration.securityHubConfiguration.publishClassificationFindings'),
        outputPath: 'securityHubConfiguration.publishClassificationFindings',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFindingsPublicationConfiguration.securityHubConfiguration.publishClassificationFindings', props);
    return resource.getResponseField('securityHubConfiguration.publishClassificationFindings') as unknown as boolean;
  }

  public get publishPolicyFindings(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFindingsPublicationConfiguration',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetFindingsPublicationConfiguration.securityHubConfiguration.publishPolicyFindings'),
        outputPath: 'securityHubConfiguration.publishPolicyFindings',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFindingsPublicationConfiguration.securityHubConfiguration.publishPolicyFindings', props);
    return resource.getResponseField('securityHubConfiguration.publishPolicyFindings') as unknown as boolean;
  }

}

export class Macie2ResponsesFetchInvitationsCount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInvitationsCount.invitationsCount', props);
    return resource.getResponseField('invitationsCount') as unknown as number;
  }

}

export class Macie2ResponsesFetchMacieSession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMacieSession.createdAt', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMacieSession.findingPublishingFrequency', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMacieSession.serviceRole', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMacieSession.status', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMacieSession.updatedAt', props);
    return resource.getResponseField('updatedAt') as unknown as string;
  }

}

export class Macie2ResponsesFetchMasterAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get master(): Macie2ResponsesFetchMasterAccountMaster {
    return new Macie2ResponsesFetchMasterAccountMaster(this.__scope, this.__resources);
  }

}

export class Macie2ResponsesFetchMasterAccountMaster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMasterAccount.master.accountId', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMasterAccount.master.invitationId', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMasterAccount.master.invitedAt', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMasterAccount.master.relationshipStatus', props);
    return resource.getResponseField('master.relationshipStatus') as unknown as string;
  }

}

export class Macie2ResponsesFetchMember {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2GetMemberRequest) {
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
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMember.accountId', props);
    return resource.getResponseField('accountId') as unknown as string;
  }

  public get administratorAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMember',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetMember.administratorAccountId'),
        outputPath: 'administratorAccountId',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMember.administratorAccountId', props);
    return resource.getResponseField('administratorAccountId') as unknown as string;
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
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMember.arn', props);
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
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMember.email', props);
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
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMember.invitedAt', props);
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
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMember.masterAccountId', props);
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
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMember.relationshipStatus', props);
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
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMember.tags', props);
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
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMember.updatedAt', props);
    return resource.getResponseField('updatedAt') as unknown as string;
  }

}

export class Macie2ResponsesFetchUsageStatistics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2GetUsageStatisticsRequest) {
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
          filterBy: this.__input.filterBy,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          sortBy: {
            key: this.__input.sortBy?.key,
            orderBy: this.__input.sortBy?.orderBy,
          },
          timeRange: this.__input.timeRange,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsageStatistics.nextToken', props);
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
          filterBy: this.__input.filterBy,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          sortBy: {
            key: this.__input.sortBy?.key,
            orderBy: this.__input.sortBy?.orderBy,
          },
          timeRange: this.__input.timeRange,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsageStatistics.records', props);
    return resource.getResponseField('records') as unknown as shapes.Macie2UsageRecord[];
  }

  public get timeRange(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsageStatistics',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetUsageStatistics.timeRange'),
        outputPath: 'timeRange',
        parameters: {
          filterBy: this.__input.filterBy,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          sortBy: {
            key: this.__input.sortBy?.key,
            orderBy: this.__input.sortBy?.orderBy,
          },
          timeRange: this.__input.timeRange,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsageStatistics.timeRange', props);
    return resource.getResponseField('timeRange') as unknown as string;
  }

}

export class Macie2ResponsesFetchUsageTotals {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2GetUsageTotalsRequest) {
  }

  public get timeRange(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsageTotals',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.GetUsageTotals.timeRange'),
        outputPath: 'timeRange',
        parameters: {
          timeRange: this.__input.timeRange,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsageTotals.timeRange', props);
    return resource.getResponseField('timeRange') as unknown as string;
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
          timeRange: this.__input.timeRange,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsageTotals.usageTotals', props);
    return resource.getResponseField('usageTotals') as unknown as shapes.Macie2UsageTotal[];
  }

}

export class Macie2ResponsesListClassificationJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2ListClassificationJobsRequest) {
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
            excludes: this.__input.filterCriteria?.excludes,
            includes: this.__input.filterCriteria?.includes,
          },
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          sortCriteria: {
            attributeName: this.__input.sortCriteria?.attributeName,
            orderBy: this.__input.sortCriteria?.orderBy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListClassificationJobs.items', props);
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
            excludes: this.__input.filterCriteria?.excludes,
            includes: this.__input.filterCriteria?.includes,
          },
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          sortCriteria: {
            attributeName: this.__input.sortCriteria?.attributeName,
            orderBy: this.__input.sortCriteria?.orderBy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListClassificationJobs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class Macie2ResponsesListCustomDataIdentifiers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2ListCustomDataIdentifiersRequest) {
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
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCustomDataIdentifiers.items', props);
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
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCustomDataIdentifiers.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class Macie2ResponsesListFindings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2ListFindingsRequest) {
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
            criterion: this.__input.findingCriteria?.criterion,
          },
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          sortCriteria: {
            attributeName: this.__input.sortCriteria?.attributeName,
            orderBy: this.__input.sortCriteria?.orderBy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFindings.findingIds', props);
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
            criterion: this.__input.findingCriteria?.criterion,
          },
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          sortCriteria: {
            attributeName: this.__input.sortCriteria?.attributeName,
            orderBy: this.__input.sortCriteria?.orderBy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFindings.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class Macie2ResponsesListFindingsFilters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2ListFindingsFiltersRequest) {
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
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFindingsFilters.findingsFilterListItems', props);
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
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFindingsFilters.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class Macie2ResponsesListInvitations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2ListInvitationsRequest) {
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
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInvitations.invitations', props);
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
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInvitations.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class Macie2ResponsesListMembers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2ListMembersRequest) {
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
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          onlyAssociated: this.__input.onlyAssociated,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMembers.members', props);
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
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          onlyAssociated: this.__input.onlyAssociated,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMembers.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class Macie2ResponsesListOrganizationAdminAccounts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2ListOrganizationAdminAccountsRequest) {
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
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOrganizationAdminAccounts.adminAccounts', props);
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
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOrganizationAdminAccounts.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class Macie2ResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2ListTagsForResourceRequest) {
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
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class Macie2ResponsesPutClassificationExportConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2PutClassificationExportConfigurationRequest) {
  }

  public get configuration(): Macie2ResponsesPutClassificationExportConfigurationConfiguration {
    return new Macie2ResponsesPutClassificationExportConfigurationConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class Macie2ResponsesPutClassificationExportConfigurationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2PutClassificationExportConfigurationRequest) {
  }

  public get s3Destination(): Macie2ResponsesPutClassificationExportConfigurationConfigurationS3Destination {
    return new Macie2ResponsesPutClassificationExportConfigurationConfigurationS3Destination(this.__scope, this.__resources, this.__input);
  }

}

export class Macie2ResponsesPutClassificationExportConfigurationConfigurationS3Destination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2PutClassificationExportConfigurationRequest) {
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
              bucketName: this.__input.configuration.s3Destination?.bucketName,
              keyPrefix: this.__input.configuration.s3Destination?.keyPrefix,
              kmsKeyArn: this.__input.configuration.s3Destination?.kmsKeyArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutClassificationExportConfiguration.configuration.s3Destination.bucketName', props);
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
              bucketName: this.__input.configuration.s3Destination?.bucketName,
              keyPrefix: this.__input.configuration.s3Destination?.keyPrefix,
              kmsKeyArn: this.__input.configuration.s3Destination?.kmsKeyArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutClassificationExportConfiguration.configuration.s3Destination.keyPrefix', props);
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
              bucketName: this.__input.configuration.s3Destination?.bucketName,
              keyPrefix: this.__input.configuration.s3Destination?.keyPrefix,
              kmsKeyArn: this.__input.configuration.s3Destination?.kmsKeyArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutClassificationExportConfiguration.configuration.s3Destination.kmsKeyArn', props);
    return resource.getResponseField('configuration.s3Destination.kmsKeyArn') as unknown as string;
  }

}

export class Macie2ResponsesSearchResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2SearchResourcesRequest) {
  }

  public get matchingResources(): shapes.Macie2MatchingResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchResources',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.SearchResources.matchingResources'),
        outputPath: 'matchingResources',
        parameters: {
          bucketCriteria: {
            excludes: {
              and: this.__input.bucketCriteria?.excludes?.and,
            },
            includes: {
              and: this.__input.bucketCriteria?.includes?.and,
            },
          },
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          sortCriteria: {
            attributeName: this.__input.sortCriteria?.attributeName,
            orderBy: this.__input.sortCriteria?.orderBy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchResources.matchingResources', props);
    return resource.getResponseField('matchingResources') as unknown as shapes.Macie2MatchingResource[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchResources',
        service: 'Macie2',
        physicalResourceId: cr.PhysicalResourceId.of('Macie2.SearchResources.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          bucketCriteria: {
            excludes: {
              and: this.__input.bucketCriteria?.excludes?.and,
            },
            includes: {
              and: this.__input.bucketCriteria?.includes?.and,
            },
          },
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          sortCriteria: {
            attributeName: this.__input.sortCriteria?.attributeName,
            orderBy: this.__input.sortCriteria?.orderBy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchResources.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class Macie2ResponsesTestCustomDataIdentifier {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2TestCustomDataIdentifierRequest) {
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
          ignoreWords: this.__input.ignoreWords,
          keywords: this.__input.keywords,
          maximumMatchDistance: this.__input.maximumMatchDistance,
          regex: this.__input.regex,
          sampleText: this.__input.sampleText,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestCustomDataIdentifier.matchCount', props);
    return resource.getResponseField('matchCount') as unknown as number;
  }

}

export class Macie2ResponsesUpdateFindingsFilter {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Macie2UpdateFindingsFilterRequest) {
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
          action: this.__input.action,
          description: this.__input.description,
          findingCriteria: {
            criterion: this.__input.findingCriteria?.criterion,
          },
          id: this.__input.id,
          name: this.__input.name,
          position: this.__input.position,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFindingsFilter.arn', props);
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
          action: this.__input.action,
          description: this.__input.description,
          findingCriteria: {
            criterion: this.__input.findingCriteria?.criterion,
          },
          id: this.__input.id,
          name: this.__input.name,
          position: this.__input.position,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFindingsFilter.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

}

