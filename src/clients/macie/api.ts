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
          administratorAccountId: input.administratorAccountId,
          invitationId: input.invitationId,
          masterAccount: input.masterAccount,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AcceptInvitation', props);
  }

  public batchGetCustomDataIdentifiers(input: shapes.MacieBatchGetCustomDataIdentifiersRequest): MacieResponsesBatchGetCustomDataIdentifiers {
    return new MacieResponsesBatchGetCustomDataIdentifiers(this, this.__resources, input);
  }

  public createClassificationJob(input: shapes.MacieCreateClassificationJobRequest): MacieResponsesCreateClassificationJob {
    return new MacieResponsesCreateClassificationJob(this, this.__resources, input);
  }

  public createCustomDataIdentifier(input: shapes.MacieCreateCustomDataIdentifierRequest): MacieResponsesCreateCustomDataIdentifier {
    return new MacieResponsesCreateCustomDataIdentifier(this, this.__resources, input);
  }

  public createFindingsFilter(input: shapes.MacieCreateFindingsFilterRequest): MacieResponsesCreateFindingsFilter {
    return new MacieResponsesCreateFindingsFilter(this, this.__resources, input);
  }

  public createInvitations(input: shapes.MacieCreateInvitationsRequest): MacieResponsesCreateInvitations {
    return new MacieResponsesCreateInvitations(this, this.__resources, input);
  }

  public createMember(input: shapes.MacieCreateMemberRequest): MacieResponsesCreateMember {
    return new MacieResponsesCreateMember(this, this.__resources, input);
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

  public declineInvitations(input: shapes.MacieDeclineInvitationsRequest): MacieResponsesDeclineInvitations {
    return new MacieResponsesDeclineInvitations(this, this.__resources, input);
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

  public deleteInvitations(input: shapes.MacieDeleteInvitationsRequest): MacieResponsesDeleteInvitations {
    return new MacieResponsesDeleteInvitations(this, this.__resources, input);
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

  public describeBuckets(input: shapes.MacieDescribeBucketsRequest): MacieResponsesDescribeBuckets {
    return new MacieResponsesDescribeBuckets(this, this.__resources, input);
  }

  public describeClassificationJob(input: shapes.MacieDescribeClassificationJobRequest): MacieResponsesDescribeClassificationJob {
    return new MacieResponsesDescribeClassificationJob(this, this.__resources, input);
  }

  public describeOrganizationConfiguration(): MacieResponsesDescribeOrganizationConfiguration {
    return new MacieResponsesDescribeOrganizationConfiguration(this, this.__resources);
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

  public disassociateFromAdministratorAccount(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateFromAdministratorAccount',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DisassociateFromAdministratorAccount'),
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

  public fetchAdministratorAccount(): MacieResponsesFetchAdministratorAccount {
    return new MacieResponsesFetchAdministratorAccount(this, this.__resources);
  }

  public fetchBucketStatistics(input: shapes.MacieGetBucketStatisticsRequest): MacieResponsesFetchBucketStatistics {
    return new MacieResponsesFetchBucketStatistics(this, this.__resources, input);
  }

  public fetchClassificationExportConfiguration(): MacieResponsesFetchClassificationExportConfiguration {
    return new MacieResponsesFetchClassificationExportConfiguration(this, this.__resources);
  }

  public fetchCustomDataIdentifier(input: shapes.MacieGetCustomDataIdentifierRequest): MacieResponsesFetchCustomDataIdentifier {
    return new MacieResponsesFetchCustomDataIdentifier(this, this.__resources, input);
  }

  public fetchFindingStatistics(input: shapes.MacieGetFindingStatisticsRequest): MacieResponsesFetchFindingStatistics {
    return new MacieResponsesFetchFindingStatistics(this, this.__resources, input);
  }

  public fetchFindings(input: shapes.MacieGetFindingsRequest): MacieResponsesFetchFindings {
    return new MacieResponsesFetchFindings(this, this.__resources, input);
  }

  public fetchFindingsFilter(input: shapes.MacieGetFindingsFilterRequest): MacieResponsesFetchFindingsFilter {
    return new MacieResponsesFetchFindingsFilter(this, this.__resources, input);
  }

  public fetchFindingsPublicationConfiguration(): MacieResponsesFetchFindingsPublicationConfiguration {
    return new MacieResponsesFetchFindingsPublicationConfiguration(this, this.__resources);
  }

  public fetchInvitationsCount(): MacieResponsesFetchInvitationsCount {
    return new MacieResponsesFetchInvitationsCount(this, this.__resources);
  }

  public fetchMacieSession(): MacieResponsesFetchMacieSession {
    return new MacieResponsesFetchMacieSession(this, this.__resources);
  }

  public fetchMasterAccount(): MacieResponsesFetchMasterAccount {
    return new MacieResponsesFetchMasterAccount(this, this.__resources);
  }

  public fetchMember(input: shapes.MacieGetMemberRequest): MacieResponsesFetchMember {
    return new MacieResponsesFetchMember(this, this.__resources, input);
  }

  public fetchUsageStatistics(input: shapes.MacieGetUsageStatisticsRequest): MacieResponsesFetchUsageStatistics {
    return new MacieResponsesFetchUsageStatistics(this, this.__resources, input);
  }

  public fetchUsageTotals(input: shapes.MacieGetUsageTotalsRequest): MacieResponsesFetchUsageTotals {
    return new MacieResponsesFetchUsageTotals(this, this.__resources, input);
  }

  public listClassificationJobs(input: shapes.MacieListClassificationJobsRequest): MacieResponsesListClassificationJobs {
    return new MacieResponsesListClassificationJobs(this, this.__resources, input);
  }

  public listCustomDataIdentifiers(input: shapes.MacieListCustomDataIdentifiersRequest): MacieResponsesListCustomDataIdentifiers {
    return new MacieResponsesListCustomDataIdentifiers(this, this.__resources, input);
  }

  public listFindings(input: shapes.MacieListFindingsRequest): MacieResponsesListFindings {
    return new MacieResponsesListFindings(this, this.__resources, input);
  }

  public listFindingsFilters(input: shapes.MacieListFindingsFiltersRequest): MacieResponsesListFindingsFilters {
    return new MacieResponsesListFindingsFilters(this, this.__resources, input);
  }

  public listInvitations(input: shapes.MacieListInvitationsRequest): MacieResponsesListInvitations {
    return new MacieResponsesListInvitations(this, this.__resources, input);
  }

  public listMembers(input: shapes.MacieListMembersRequest): MacieResponsesListMembers {
    return new MacieResponsesListMembers(this, this.__resources, input);
  }

  public listOrganizationAdminAccounts(input: shapes.MacieListOrganizationAdminAccountsRequest): MacieResponsesListOrganizationAdminAccounts {
    return new MacieResponsesListOrganizationAdminAccounts(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.MacieListTagsForResourceRequest): MacieResponsesListTagsForResource {
    return new MacieResponsesListTagsForResource(this, this.__resources, input);
  }

  public putClassificationExportConfiguration(input: shapes.MaciePutClassificationExportConfigurationRequest): MacieResponsesPutClassificationExportConfiguration {
    return new MacieResponsesPutClassificationExportConfiguration(this, this.__resources, input);
  }

  public putFindingsPublicationConfiguration(input: shapes.MaciePutFindingsPublicationConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putFindingsPublicationConfiguration',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.PutFindingsPublicationConfiguration'),
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

  public searchResources(input: shapes.MacieSearchResourcesRequest): MacieResponsesSearchResources {
    return new MacieResponsesSearchResources(this, this.__resources, input);
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

  public testCustomDataIdentifier(input: shapes.MacieTestCustomDataIdentifierRequest): MacieResponsesTestCustomDataIdentifier {
    return new MacieResponsesTestCustomDataIdentifier(this, this.__resources, input);
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

  public updateFindingsFilter(input: shapes.MacieUpdateFindingsFilterRequest): MacieResponsesUpdateFindingsFilter {
    return new MacieResponsesUpdateFindingsFilter(this, this.__resources, input);
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

export class MacieResponsesBatchGetCustomDataIdentifiers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieBatchGetCustomDataIdentifiersRequest) {
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
          ids: this.__input.ids,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetCustomDataIdentifiers.customDataIdentifiers', props);
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
          ids: this.__input.ids,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetCustomDataIdentifiers.notFoundIdentifierIds', props);
    return resource.getResponseField('notFoundIdentifierIds') as unknown as string[];
  }

}

export class MacieResponsesCreateClassificationJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieCreateClassificationJobRequest) {
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.CreateClassificationJob.jobId'),
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

export class MacieResponsesCreateCustomDataIdentifier {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieCreateCustomDataIdentifierRequest) {
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

export class MacieResponsesCreateFindingsFilter {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieCreateFindingsFilterRequest) {
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.CreateFindingsFilter.id'),
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

export class MacieResponsesCreateInvitations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieCreateInvitationsRequest) {
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
          accountIds: this.__input.accountIds,
          disableEmailNotification: this.__input.disableEmailNotification,
          message: this.__input.message,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInvitations.unprocessedAccounts', props);
    return resource.getResponseField('unprocessedAccounts') as unknown as shapes.MacieUnprocessedAccount[];
  }

}

export class MacieResponsesCreateMember {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieCreateMemberRequest) {
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

export class MacieResponsesDeclineInvitations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieDeclineInvitationsRequest) {
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
          accountIds: this.__input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeclineInvitations.unprocessedAccounts', props);
    return resource.getResponseField('unprocessedAccounts') as unknown as shapes.MacieUnprocessedAccount[];
  }

}

export class MacieResponsesDeleteInvitations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieDeleteInvitationsRequest) {
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
          accountIds: this.__input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteInvitations.unprocessedAccounts', props);
    return resource.getResponseField('unprocessedAccounts') as unknown as shapes.MacieUnprocessedAccount[];
  }

}

export class MacieResponsesDescribeBuckets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieDescribeBucketsRequest) {
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

export class MacieResponsesDescribeClassificationJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieDescribeClassificationJobRequest) {
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.createdAt'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.customDataIdentifierIds'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.description'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.initialRun'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.jobArn'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.jobId'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.jobStatus'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.jobType'),
        outputPath: 'jobType',
        parameters: {
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.jobType', props);
    return resource.getResponseField('jobType') as unknown as string;
  }

  public get lastRunErrorStatus(): MacieResponsesDescribeClassificationJobLastRunErrorStatus {
    return new MacieResponsesDescribeClassificationJobLastRunErrorStatus(this.__scope, this.__resources, this.__input);
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.name'),
        outputPath: 'name',
        parameters: {
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get s3JobDefinition(): MacieResponsesDescribeClassificationJobS3JobDefinition {
    return new MacieResponsesDescribeClassificationJobS3JobDefinition(this.__scope, this.__resources, this.__input);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.samplingPercentage', props);
    return resource.getResponseField('samplingPercentage') as unknown as number;
  }

  public get scheduleFrequency(): MacieResponsesDescribeClassificationJobScheduleFrequency {
    return new MacieResponsesDescribeClassificationJobScheduleFrequency(this.__scope, this.__resources, this.__input);
  }

  public get statistics(): MacieResponsesDescribeClassificationJobStatistics {
    return new MacieResponsesDescribeClassificationJobStatistics(this.__scope, this.__resources, this.__input);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

  public get userPausedDetails(): MacieResponsesDescribeClassificationJobUserPausedDetails {
    return new MacieResponsesDescribeClassificationJobUserPausedDetails(this.__scope, this.__resources, this.__input);
  }

}

export class MacieResponsesDescribeClassificationJobLastRunErrorStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieDescribeClassificationJobRequest) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.lastRunErrorStatus.code', props);
    return resource.getResponseField('lastRunErrorStatus.code') as unknown as string;
  }

}

export class MacieResponsesDescribeClassificationJobS3JobDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieDescribeClassificationJobRequest) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.s3JobDefinition.bucketDefinitions', props);
    return resource.getResponseField('s3JobDefinition.bucketDefinitions') as unknown as shapes.MacieS3BucketDefinitionForJob[];
  }

  public get scoping(): MacieResponsesDescribeClassificationJobS3JobDefinitionScoping {
    return new MacieResponsesDescribeClassificationJobS3JobDefinitionScoping(this.__scope, this.__resources, this.__input);
  }

  public get bucketCriteria(): MacieResponsesDescribeClassificationJobS3JobDefinitionBucketCriteria {
    return new MacieResponsesDescribeClassificationJobS3JobDefinitionBucketCriteria(this.__scope, this.__resources, this.__input);
  }

}

export class MacieResponsesDescribeClassificationJobS3JobDefinitionScoping {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieDescribeClassificationJobRequest) {
  }

  public get excludes(): MacieResponsesDescribeClassificationJobS3JobDefinitionScopingExcludes {
    return new MacieResponsesDescribeClassificationJobS3JobDefinitionScopingExcludes(this.__scope, this.__resources, this.__input);
  }

  public get includes(): MacieResponsesDescribeClassificationJobS3JobDefinitionScopingIncludes {
    return new MacieResponsesDescribeClassificationJobS3JobDefinitionScopingIncludes(this.__scope, this.__resources, this.__input);
  }

}

export class MacieResponsesDescribeClassificationJobS3JobDefinitionScopingExcludes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieDescribeClassificationJobRequest) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.s3JobDefinition.scoping.excludes.and', props);
    return resource.getResponseField('s3JobDefinition.scoping.excludes.and') as unknown as shapes.MacieJobScopeTerm[];
  }

}

export class MacieResponsesDescribeClassificationJobS3JobDefinitionScopingIncludes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieDescribeClassificationJobRequest) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.s3JobDefinition.scoping.includes.and', props);
    return resource.getResponseField('s3JobDefinition.scoping.includes.and') as unknown as shapes.MacieJobScopeTerm[];
  }

}

export class MacieResponsesDescribeClassificationJobS3JobDefinitionBucketCriteria {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieDescribeClassificationJobRequest) {
  }

  public get excludes(): MacieResponsesDescribeClassificationJobS3JobDefinitionBucketCriteriaExcludes {
    return new MacieResponsesDescribeClassificationJobS3JobDefinitionBucketCriteriaExcludes(this.__scope, this.__resources, this.__input);
  }

  public get includes(): MacieResponsesDescribeClassificationJobS3JobDefinitionBucketCriteriaIncludes {
    return new MacieResponsesDescribeClassificationJobS3JobDefinitionBucketCriteriaIncludes(this.__scope, this.__resources, this.__input);
  }

}

export class MacieResponsesDescribeClassificationJobS3JobDefinitionBucketCriteriaExcludes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieDescribeClassificationJobRequest) {
  }

  public get and(): shapes.MacieCriteriaForJob[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.s3JobDefinition.bucketCriteria.excludes.and'),
        outputPath: 's3JobDefinition.bucketCriteria.excludes.and',
        parameters: {
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.s3JobDefinition.bucketCriteria.excludes.and', props);
    return resource.getResponseField('s3JobDefinition.bucketCriteria.excludes.and') as unknown as shapes.MacieCriteriaForJob[];
  }

}

export class MacieResponsesDescribeClassificationJobS3JobDefinitionBucketCriteriaIncludes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieDescribeClassificationJobRequest) {
  }

  public get and(): shapes.MacieCriteriaForJob[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.s3JobDefinition.bucketCriteria.includes.and'),
        outputPath: 's3JobDefinition.bucketCriteria.includes.and',
        parameters: {
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.s3JobDefinition.bucketCriteria.includes.and', props);
    return resource.getResponseField('s3JobDefinition.bucketCriteria.includes.and') as unknown as shapes.MacieCriteriaForJob[];
  }

}

export class MacieResponsesDescribeClassificationJobScheduleFrequency {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieDescribeClassificationJobRequest) {
  }

  public get dailySchedule(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClassificationJob',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.scheduleFrequency.dailySchedule'),
        outputPath: 'scheduleFrequency.dailySchedule',
        parameters: {
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.scheduleFrequency.dailySchedule', props);
    return resource.getResponseField('scheduleFrequency.dailySchedule') as unknown as any;
  }

  public get monthlySchedule(): MacieResponsesDescribeClassificationJobScheduleFrequencyMonthlySchedule {
    return new MacieResponsesDescribeClassificationJobScheduleFrequencyMonthlySchedule(this.__scope, this.__resources, this.__input);
  }

  public get weeklySchedule(): MacieResponsesDescribeClassificationJobScheduleFrequencyWeeklySchedule {
    return new MacieResponsesDescribeClassificationJobScheduleFrequencyWeeklySchedule(this.__scope, this.__resources, this.__input);
  }

}

export class MacieResponsesDescribeClassificationJobScheduleFrequencyMonthlySchedule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieDescribeClassificationJobRequest) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.scheduleFrequency.monthlySchedule.dayOfMonth', props);
    return resource.getResponseField('scheduleFrequency.monthlySchedule.dayOfMonth') as unknown as number;
  }

}

export class MacieResponsesDescribeClassificationJobScheduleFrequencyWeeklySchedule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieDescribeClassificationJobRequest) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClassificationJob.scheduleFrequency.weeklySchedule.dayOfWeek', props);
    return resource.getResponseField('scheduleFrequency.weeklySchedule.dayOfWeek') as unknown as string;
  }

}

export class MacieResponsesDescribeClassificationJobStatistics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieDescribeClassificationJobRequest) {
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.statistics.numberOfRuns'),
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

export class MacieResponsesDescribeClassificationJobUserPausedDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieDescribeClassificationJobRequest) {
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.userPausedDetails.jobImminentExpirationHealthEventArn'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.DescribeClassificationJob.userPausedDetails.jobPausedAt'),
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

export class MacieResponsesDescribeOrganizationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOrganizationConfiguration.autoEnable', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOrganizationConfiguration.maxAccountLimitReached', props);
    return resource.getResponseField('maxAccountLimitReached') as unknown as boolean;
  }

}

export class MacieResponsesFetchAdministratorAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get administrator(): MacieResponsesFetchAdministratorAccountAdministrator {
    return new MacieResponsesFetchAdministratorAccountAdministrator(this.__scope, this.__resources);
  }

}

export class MacieResponsesFetchAdministratorAccountAdministrator {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAdministratorAccount',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetAdministratorAccount.administrator.accountId'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetAdministratorAccount.administrator.invitationId'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetAdministratorAccount.administrator.invitedAt'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetAdministratorAccount.administrator.relationshipStatus'),
        outputPath: 'administrator.relationshipStatus',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAdministratorAccount.administrator.relationshipStatus', props);
    return resource.getResponseField('administrator.relationshipStatus') as unknown as string;
  }

}

export class MacieResponsesFetchBucketStatistics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieGetBucketStatisticsRequest) {
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
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketStatistics.bucketCount', props);
    return resource.getResponseField('bucketCount') as unknown as number;
  }

  public get bucketCountByEffectivePermission(): MacieResponsesFetchBucketStatisticsBucketCountByEffectivePermission {
    return new MacieResponsesFetchBucketStatisticsBucketCountByEffectivePermission(this.__scope, this.__resources, this.__input);
  }

  public get bucketCountByEncryptionType(): MacieResponsesFetchBucketStatisticsBucketCountByEncryptionType {
    return new MacieResponsesFetchBucketStatisticsBucketCountByEncryptionType(this.__scope, this.__resources, this.__input);
  }

  public get bucketCountByObjectEncryptionRequirement(): MacieResponsesFetchBucketStatisticsBucketCountByObjectEncryptionRequirement {
    return new MacieResponsesFetchBucketStatisticsBucketCountByObjectEncryptionRequirement(this.__scope, this.__resources, this.__input);
  }

  public get bucketCountBySharedAccessType(): MacieResponsesFetchBucketStatisticsBucketCountBySharedAccessType {
    return new MacieResponsesFetchBucketStatisticsBucketCountBySharedAccessType(this.__scope, this.__resources, this.__input);
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.classifiableSizeInBytes'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.lastUpdated'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.objectCount'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.sizeInBytes'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.sizeInBytesCompressed'),
        outputPath: 'sizeInBytesCompressed',
        parameters: {
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketStatistics.sizeInBytesCompressed', props);
    return resource.getResponseField('sizeInBytesCompressed') as unknown as number;
  }

  public get unclassifiableObjectCount(): MacieResponsesFetchBucketStatisticsUnclassifiableObjectCount {
    return new MacieResponsesFetchBucketStatisticsUnclassifiableObjectCount(this.__scope, this.__resources, this.__input);
  }

  public get unclassifiableObjectSizeInBytes(): MacieResponsesFetchBucketStatisticsUnclassifiableObjectSizeInBytes {
    return new MacieResponsesFetchBucketStatisticsUnclassifiableObjectSizeInBytes(this.__scope, this.__resources, this.__input);
  }

}

export class MacieResponsesFetchBucketStatisticsBucketCountByEffectivePermission {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieGetBucketStatisticsRequest) {
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.bucketCountByEffectivePermission.publiclyReadable'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.bucketCountByEffectivePermission.publiclyWritable'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.bucketCountByEffectivePermission.unknown'),
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

export class MacieResponsesFetchBucketStatisticsBucketCountByEncryptionType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieGetBucketStatisticsRequest) {
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.bucketCountByEncryptionType.s3Managed'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.bucketCountByEncryptionType.unencrypted'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.bucketCountByEncryptionType.unknown'),
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

export class MacieResponsesFetchBucketStatisticsBucketCountByObjectEncryptionRequirement {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieGetBucketStatisticsRequest) {
  }

  public get allowsUnencryptedObjectUploads(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketStatistics',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.bucketCountByObjectEncryptionRequirement.allowsUnencryptedObjectUploads'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.bucketCountByObjectEncryptionRequirement.deniesUnencryptedObjectUploads'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.bucketCountByObjectEncryptionRequirement.unknown'),
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

export class MacieResponsesFetchBucketStatisticsBucketCountBySharedAccessType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieGetBucketStatisticsRequest) {
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.bucketCountBySharedAccessType.internal'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.bucketCountBySharedAccessType.notShared'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.bucketCountBySharedAccessType.unknown'),
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

export class MacieResponsesFetchBucketStatisticsUnclassifiableObjectCount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieGetBucketStatisticsRequest) {
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.unclassifiableObjectCount.storageClass'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.unclassifiableObjectCount.total'),
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

export class MacieResponsesFetchBucketStatisticsUnclassifiableObjectSizeInBytes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieGetBucketStatisticsRequest) {
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.unclassifiableObjectSizeInBytes.storageClass'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetBucketStatistics.unclassifiableObjectSizeInBytes.total'),
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

export class MacieResponsesFetchClassificationExportConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get configuration(): MacieResponsesFetchClassificationExportConfigurationConfiguration {
    return new MacieResponsesFetchClassificationExportConfigurationConfiguration(this.__scope, this.__resources);
  }

}

export class MacieResponsesFetchClassificationExportConfigurationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get s3Destination(): MacieResponsesFetchClassificationExportConfigurationConfigurationS3Destination {
    return new MacieResponsesFetchClassificationExportConfigurationConfigurationS3Destination(this.__scope, this.__resources);
  }

}

export class MacieResponsesFetchClassificationExportConfigurationConfigurationS3Destination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassificationExportConfiguration.configuration.s3Destination.bucketName', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassificationExportConfiguration.configuration.s3Destination.keyPrefix', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassificationExportConfiguration.configuration.s3Destination.kmsKeyArn', props);
    return resource.getResponseField('configuration.s3Destination.kmsKeyArn') as unknown as string;
  }

}

export class MacieResponsesFetchCustomDataIdentifier {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieGetCustomDataIdentifierRequest) {
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetCustomDataIdentifier.createdAt'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetCustomDataIdentifier.deleted'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetCustomDataIdentifier.description'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetCustomDataIdentifier.id'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetCustomDataIdentifier.ignoreWords'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetCustomDataIdentifier.keywords'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetCustomDataIdentifier.maximumMatchDistance'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetCustomDataIdentifier.name'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetCustomDataIdentifier.regex'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetCustomDataIdentifier.tags'),
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

export class MacieResponsesFetchFindingStatistics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieGetFindingStatisticsRequest) {
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
    return resource.getResponseField('countsByGroup') as unknown as shapes.MacieGroupCount[];
  }

}

export class MacieResponsesFetchFindings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieGetFindingsRequest) {
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
          findingIds: this.__input.findingIds,
          sortCriteria: {
            attributeName: this.__input.sortCriteria?.attributeName,
            orderBy: this.__input.sortCriteria?.orderBy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFindings.findings', props);
    return resource.getResponseField('findings') as unknown as shapes.MacieFinding[];
  }

}

export class MacieResponsesFetchFindingsFilter {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieGetFindingsFilterRequest) {
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetFindingsFilter.arn'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetFindingsFilter.description'),
        outputPath: 'description',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFindingsFilter.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get findingCriteria(): MacieResponsesFetchFindingsFilterFindingCriteria {
    return new MacieResponsesFetchFindingsFilterFindingCriteria(this.__scope, this.__resources, this.__input);
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetFindingsFilter.name'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetFindingsFilter.position'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetFindingsFilter.tags'),
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

export class MacieResponsesFetchFindingsFilterFindingCriteria {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieGetFindingsFilterRequest) {
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
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFindingsFilter.findingCriteria.criterion', props);
    return resource.getResponseField('findingCriteria.criterion') as unknown as Record<string, shapes.MacieCriterionAdditionalProperties>;
  }

}

export class MacieResponsesFetchFindingsPublicationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get securityHubConfiguration(): MacieResponsesFetchFindingsPublicationConfigurationSecurityHubConfiguration {
    return new MacieResponsesFetchFindingsPublicationConfigurationSecurityHubConfiguration(this.__scope, this.__resources);
  }

}

export class MacieResponsesFetchFindingsPublicationConfigurationSecurityHubConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get publishClassificationFindings(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFindingsPublicationConfiguration',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetFindingsPublicationConfiguration.securityHubConfiguration.publishClassificationFindings'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetFindingsPublicationConfiguration.securityHubConfiguration.publishPolicyFindings'),
        outputPath: 'securityHubConfiguration.publishPolicyFindings',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFindingsPublicationConfiguration.securityHubConfiguration.publishPolicyFindings', props);
    return resource.getResponseField('securityHubConfiguration.publishPolicyFindings') as unknown as boolean;
  }

}

export class MacieResponsesFetchInvitationsCount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInvitationsCount.invitationsCount', props);
    return resource.getResponseField('invitationsCount') as unknown as number;
  }

}

export class MacieResponsesFetchMacieSession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMacieSession.createdAt', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMacieSession.findingPublishingFrequency', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMacieSession.serviceRole', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMacieSession.status', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMacieSession.updatedAt', props);
    return resource.getResponseField('updatedAt') as unknown as string;
  }

}

export class MacieResponsesFetchMasterAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get master(): MacieResponsesFetchMasterAccountMaster {
    return new MacieResponsesFetchMasterAccountMaster(this.__scope, this.__resources);
  }

}

export class MacieResponsesFetchMasterAccountMaster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMasterAccount.master.accountId', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMasterAccount.master.invitationId', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMasterAccount.master.invitedAt', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMasterAccount.master.relationshipStatus', props);
    return resource.getResponseField('master.relationshipStatus') as unknown as string;
  }

}

export class MacieResponsesFetchMember {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieGetMemberRequest) {
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetMember.administratorAccountId'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetMember.arn'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetMember.email'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetMember.invitedAt'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetMember.masterAccountId'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetMember.relationshipStatus'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetMember.tags'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetMember.updatedAt'),
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

export class MacieResponsesFetchUsageStatistics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieGetUsageStatisticsRequest) {
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

  public get records(): shapes.MacieUsageRecord[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsageStatistics',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetUsageStatistics.records'),
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
    return resource.getResponseField('records') as unknown as shapes.MacieUsageRecord[];
  }

  public get timeRange(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsageStatistics',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetUsageStatistics.timeRange'),
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

export class MacieResponsesFetchUsageTotals {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieGetUsageTotalsRequest) {
  }

  public get timeRange(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsageTotals',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.GetUsageTotals.timeRange'),
        outputPath: 'timeRange',
        parameters: {
          timeRange: this.__input.timeRange,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsageTotals.timeRange', props);
    return resource.getResponseField('timeRange') as unknown as string;
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
          timeRange: this.__input.timeRange,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsageTotals.usageTotals', props);
    return resource.getResponseField('usageTotals') as unknown as shapes.MacieUsageTotal[];
  }

}

export class MacieResponsesListClassificationJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieListClassificationJobsRequest) {
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

export class MacieResponsesListCustomDataIdentifiers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieListCustomDataIdentifiersRequest) {
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
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCustomDataIdentifiers.items', props);
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
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCustomDataIdentifiers.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class MacieResponsesListFindings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieListFindingsRequest) {
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.ListFindings.nextToken'),
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

export class MacieResponsesListFindingsFilters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieListFindingsFiltersRequest) {
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
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFindingsFilters.findingsFilterListItems', props);
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
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFindingsFilters.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class MacieResponsesListInvitations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieListInvitationsRequest) {
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
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInvitations.invitations', props);
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
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInvitations.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class MacieResponsesListMembers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieListMembersRequest) {
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
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          onlyAssociated: this.__input.onlyAssociated,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMembers.members', props);
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

export class MacieResponsesListOrganizationAdminAccounts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieListOrganizationAdminAccountsRequest) {
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
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOrganizationAdminAccounts.adminAccounts', props);
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
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOrganizationAdminAccounts.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class MacieResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieListTagsForResourceRequest) {
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
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class MacieResponsesPutClassificationExportConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MaciePutClassificationExportConfigurationRequest) {
  }

  public get configuration(): MacieResponsesPutClassificationExportConfigurationConfiguration {
    return new MacieResponsesPutClassificationExportConfigurationConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class MacieResponsesPutClassificationExportConfigurationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MaciePutClassificationExportConfigurationRequest) {
  }

  public get s3Destination(): MacieResponsesPutClassificationExportConfigurationConfigurationS3Destination {
    return new MacieResponsesPutClassificationExportConfigurationConfigurationS3Destination(this.__scope, this.__resources, this.__input);
  }

}

export class MacieResponsesPutClassificationExportConfigurationConfigurationS3Destination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MaciePutClassificationExportConfigurationRequest) {
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.PutClassificationExportConfiguration.configuration.s3Destination.keyPrefix'),
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.PutClassificationExportConfiguration.configuration.s3Destination.kmsKeyArn'),
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

export class MacieResponsesSearchResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieSearchResourcesRequest) {
  }

  public get matchingResources(): shapes.MacieMatchingResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchResources',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.SearchResources.matchingResources'),
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
    return resource.getResponseField('matchingResources') as unknown as shapes.MacieMatchingResource[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchResources',
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.SearchResources.nextToken'),
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

export class MacieResponsesTestCustomDataIdentifier {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieTestCustomDataIdentifierRequest) {
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

export class MacieResponsesUpdateFindingsFilter {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MacieUpdateFindingsFilterRequest) {
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
        service: 'Macie',
        physicalResourceId: cr.PhysicalResourceId.of('Macie.UpdateFindingsFilter.id'),
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

