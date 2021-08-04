import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class GuardDutyClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public acceptInvitation(input: shapes.GuardDutyAcceptInvitationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptInvitation',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.AcceptInvitation'),
        parameters: {
          DetectorId: input.detectorId,
          MasterId: input.masterId,
          InvitationId: input.invitationId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AcceptInvitation', props);
  }

  public archiveFindings(input: shapes.GuardDutyArchiveFindingsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'archiveFindings',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.ArchiveFindings'),
        parameters: {
          DetectorId: input.detectorId,
          FindingIds: input.findingIds,
        },
      },
    };
    new cr.AwsCustomResource(this, 'ArchiveFindings', props);
  }

  public createDetector(input: shapes.GuardDutyCreateDetectorRequest): GuardDutyResponsesCreateDetector {
    return new GuardDutyResponsesCreateDetector(this, this.__resources, input);
  }

  public createFilter(input: shapes.GuardDutyCreateFilterRequest): GuardDutyResponsesCreateFilter {
    return new GuardDutyResponsesCreateFilter(this, this.__resources, input);
  }

  public createIpSet(input: shapes.GuardDutyCreateIpSetRequest): GuardDutyResponsesCreateIpSet {
    return new GuardDutyResponsesCreateIpSet(this, this.__resources, input);
  }

  public createMembers(input: shapes.GuardDutyCreateMembersRequest): GuardDutyResponsesCreateMembers {
    return new GuardDutyResponsesCreateMembers(this, this.__resources, input);
  }

  public createPublishingDestination(input: shapes.GuardDutyCreatePublishingDestinationRequest): GuardDutyResponsesCreatePublishingDestination {
    return new GuardDutyResponsesCreatePublishingDestination(this, this.__resources, input);
  }

  public createSampleFindings(input: shapes.GuardDutyCreateSampleFindingsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSampleFindings',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.CreateSampleFindings'),
        parameters: {
          DetectorId: input.detectorId,
          FindingTypes: input.findingTypes,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateSampleFindings', props);
  }

  public createThreatIntelSet(input: shapes.GuardDutyCreateThreatIntelSetRequest): GuardDutyResponsesCreateThreatIntelSet {
    return new GuardDutyResponsesCreateThreatIntelSet(this, this.__resources, input);
  }

  public declineInvitations(input: shapes.GuardDutyDeclineInvitationsRequest): GuardDutyResponsesDeclineInvitations {
    return new GuardDutyResponsesDeclineInvitations(this, this.__resources, input);
  }

  public deleteDetector(input: shapes.GuardDutyDeleteDetectorRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDetector',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.DeleteDetector'),
        parameters: {
          DetectorId: input.detectorId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDetector', props);
  }

  public deleteFilter(input: shapes.GuardDutyDeleteFilterRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFilter',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.DeleteFilter'),
        parameters: {
          DetectorId: input.detectorId,
          FilterName: input.filterName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteFilter', props);
  }

  public deleteIpSet(input: shapes.GuardDutyDeleteIpSetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIpSet',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.DeleteIPSet'),
        parameters: {
          DetectorId: input.detectorId,
          IpSetId: input.ipSetId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteIPSet', props);
  }

  public deleteInvitations(input: shapes.GuardDutyDeleteInvitationsRequest): GuardDutyResponsesDeleteInvitations {
    return new GuardDutyResponsesDeleteInvitations(this, this.__resources, input);
  }

  public deleteMembers(input: shapes.GuardDutyDeleteMembersRequest): GuardDutyResponsesDeleteMembers {
    return new GuardDutyResponsesDeleteMembers(this, this.__resources, input);
  }

  public deletePublishingDestination(input: shapes.GuardDutyDeletePublishingDestinationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePublishingDestination',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.DeletePublishingDestination'),
        parameters: {
          DetectorId: input.detectorId,
          DestinationId: input.destinationId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePublishingDestination', props);
  }

  public deleteThreatIntelSet(input: shapes.GuardDutyDeleteThreatIntelSetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteThreatIntelSet',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.DeleteThreatIntelSet'),
        parameters: {
          DetectorId: input.detectorId,
          ThreatIntelSetId: input.threatIntelSetId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteThreatIntelSet', props);
  }

  public describeOrganizationConfiguration(input: shapes.GuardDutyDescribeOrganizationConfigurationRequest): GuardDutyResponsesDescribeOrganizationConfiguration {
    return new GuardDutyResponsesDescribeOrganizationConfiguration(this, this.__resources, input);
  }

  public describePublishingDestination(input: shapes.GuardDutyDescribePublishingDestinationRequest): GuardDutyResponsesDescribePublishingDestination {
    return new GuardDutyResponsesDescribePublishingDestination(this, this.__resources, input);
  }

  public disableOrganizationAdminAccount(input: shapes.GuardDutyDisableOrganizationAdminAccountRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disableOrganizationAdminAccount',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.DisableOrganizationAdminAccount'),
        parameters: {
          AdminAccountId: input.adminAccountId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisableOrganizationAdminAccount', props);
  }

  public disassociateFromMasterAccount(input: shapes.GuardDutyDisassociateFromMasterAccountRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateFromMasterAccount',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.DisassociateFromMasterAccount'),
        parameters: {
          DetectorId: input.detectorId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateFromMasterAccount', props);
  }

  public disassociateMembers(input: shapes.GuardDutyDisassociateMembersRequest): GuardDutyResponsesDisassociateMembers {
    return new GuardDutyResponsesDisassociateMembers(this, this.__resources, input);
  }

  public enableOrganizationAdminAccount(input: shapes.GuardDutyEnableOrganizationAdminAccountRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableOrganizationAdminAccount',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.EnableOrganizationAdminAccount'),
        parameters: {
          AdminAccountId: input.adminAccountId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'EnableOrganizationAdminAccount', props);
  }

  public fetchDetector(input: shapes.GuardDutyGetDetectorRequest): GuardDutyResponsesFetchDetector {
    return new GuardDutyResponsesFetchDetector(this, this.__resources, input);
  }

  public fetchFilter(input: shapes.GuardDutyGetFilterRequest): GuardDutyResponsesFetchFilter {
    return new GuardDutyResponsesFetchFilter(this, this.__resources, input);
  }

  public fetchFindings(input: shapes.GuardDutyGetFindingsRequest): GuardDutyResponsesFetchFindings {
    return new GuardDutyResponsesFetchFindings(this, this.__resources, input);
  }

  public fetchFindingsStatistics(input: shapes.GuardDutyGetFindingsStatisticsRequest): GuardDutyResponsesFetchFindingsStatistics {
    return new GuardDutyResponsesFetchFindingsStatistics(this, this.__resources, input);
  }

  public fetchIpSet(input: shapes.GuardDutyGetIpSetRequest): GuardDutyResponsesFetchIpSet {
    return new GuardDutyResponsesFetchIpSet(this, this.__resources, input);
  }

  public fetchInvitationsCount(): GuardDutyResponsesFetchInvitationsCount {
    return new GuardDutyResponsesFetchInvitationsCount(this, this.__resources);
  }

  public fetchMasterAccount(input: shapes.GuardDutyGetMasterAccountRequest): GuardDutyResponsesFetchMasterAccount {
    return new GuardDutyResponsesFetchMasterAccount(this, this.__resources, input);
  }

  public fetchMemberDetectors(input: shapes.GuardDutyGetMemberDetectorsRequest): GuardDutyResponsesFetchMemberDetectors {
    return new GuardDutyResponsesFetchMemberDetectors(this, this.__resources, input);
  }

  public fetchMembers(input: shapes.GuardDutyGetMembersRequest): GuardDutyResponsesFetchMembers {
    return new GuardDutyResponsesFetchMembers(this, this.__resources, input);
  }

  public fetchThreatIntelSet(input: shapes.GuardDutyGetThreatIntelSetRequest): GuardDutyResponsesFetchThreatIntelSet {
    return new GuardDutyResponsesFetchThreatIntelSet(this, this.__resources, input);
  }

  public fetchUsageStatistics(input: shapes.GuardDutyGetUsageStatisticsRequest): GuardDutyResponsesFetchUsageStatistics {
    return new GuardDutyResponsesFetchUsageStatistics(this, this.__resources, input);
  }

  public inviteMembers(input: shapes.GuardDutyInviteMembersRequest): GuardDutyResponsesInviteMembers {
    return new GuardDutyResponsesInviteMembers(this, this.__resources, input);
  }

  public listDetectors(input: shapes.GuardDutyListDetectorsRequest): GuardDutyResponsesListDetectors {
    return new GuardDutyResponsesListDetectors(this, this.__resources, input);
  }

  public listFilters(input: shapes.GuardDutyListFiltersRequest): GuardDutyResponsesListFilters {
    return new GuardDutyResponsesListFilters(this, this.__resources, input);
  }

  public listFindings(input: shapes.GuardDutyListFindingsRequest): GuardDutyResponsesListFindings {
    return new GuardDutyResponsesListFindings(this, this.__resources, input);
  }

  public listIpSets(input: shapes.GuardDutyListIpSetsRequest): GuardDutyResponsesListIpSets {
    return new GuardDutyResponsesListIpSets(this, this.__resources, input);
  }

  public listInvitations(input: shapes.GuardDutyListInvitationsRequest): GuardDutyResponsesListInvitations {
    return new GuardDutyResponsesListInvitations(this, this.__resources, input);
  }

  public listMembers(input: shapes.GuardDutyListMembersRequest): GuardDutyResponsesListMembers {
    return new GuardDutyResponsesListMembers(this, this.__resources, input);
  }

  public listOrganizationAdminAccounts(input: shapes.GuardDutyListOrganizationAdminAccountsRequest): GuardDutyResponsesListOrganizationAdminAccounts {
    return new GuardDutyResponsesListOrganizationAdminAccounts(this, this.__resources, input);
  }

  public listPublishingDestinations(input: shapes.GuardDutyListPublishingDestinationsRequest): GuardDutyResponsesListPublishingDestinations {
    return new GuardDutyResponsesListPublishingDestinations(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.GuardDutyListTagsForResourceRequest): GuardDutyResponsesListTagsForResource {
    return new GuardDutyResponsesListTagsForResource(this, this.__resources, input);
  }

  public listThreatIntelSets(input: shapes.GuardDutyListThreatIntelSetsRequest): GuardDutyResponsesListThreatIntelSets {
    return new GuardDutyResponsesListThreatIntelSets(this, this.__resources, input);
  }

  public startMonitoringMembers(input: shapes.GuardDutyStartMonitoringMembersRequest): GuardDutyResponsesStartMonitoringMembers {
    return new GuardDutyResponsesStartMonitoringMembers(this, this.__resources, input);
  }

  public stopMonitoringMembers(input: shapes.GuardDutyStopMonitoringMembersRequest): GuardDutyResponsesStopMonitoringMembers {
    return new GuardDutyResponsesStopMonitoringMembers(this, this.__resources, input);
  }

  public tagResource(input: shapes.GuardDutyTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public unarchiveFindings(input: shapes.GuardDutyUnarchiveFindingsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'unarchiveFindings',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.UnarchiveFindings'),
        parameters: {
          DetectorId: input.detectorId,
          FindingIds: input.findingIds,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UnarchiveFindings', props);
  }

  public untagResource(input: shapes.GuardDutyUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateDetector(input: shapes.GuardDutyUpdateDetectorRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDetector',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.UpdateDetector'),
        parameters: {
          DetectorId: input.detectorId,
          Enable: input.enable,
          FindingPublishingFrequency: input.findingPublishingFrequency,
          DataSources: {
            S3Logs: {
              Enable: input.dataSources?.s3Logs?.enable,
            },
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateDetector', props);
  }

  public updateFilter(input: shapes.GuardDutyUpdateFilterRequest): GuardDutyResponsesUpdateFilter {
    return new GuardDutyResponsesUpdateFilter(this, this.__resources, input);
  }

  public updateFindingsFeedback(input: shapes.GuardDutyUpdateFindingsFeedbackRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFindingsFeedback',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.UpdateFindingsFeedback'),
        parameters: {
          DetectorId: input.detectorId,
          FindingIds: input.findingIds,
          Feedback: input.feedback,
          Comments: input.comments,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateFindingsFeedback', props);
  }

  public updateIpSet(input: shapes.GuardDutyUpdateIpSetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIpSet',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.UpdateIPSet'),
        parameters: {
          DetectorId: input.detectorId,
          IpSetId: input.ipSetId,
          Name: input.name,
          Location: input.location,
          Activate: input.activate,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateIPSet', props);
  }

  public updateMemberDetectors(input: shapes.GuardDutyUpdateMemberDetectorsRequest): GuardDutyResponsesUpdateMemberDetectors {
    return new GuardDutyResponsesUpdateMemberDetectors(this, this.__resources, input);
  }

  public updateOrganizationConfiguration(input: shapes.GuardDutyUpdateOrganizationConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateOrganizationConfiguration',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.UpdateOrganizationConfiguration'),
        parameters: {
          DetectorId: input.detectorId,
          AutoEnable: input.autoEnable,
          DataSources: {
            S3Logs: {
              AutoEnable: input.dataSources?.s3Logs?.autoEnable,
            },
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateOrganizationConfiguration', props);
  }

  public updatePublishingDestination(input: shapes.GuardDutyUpdatePublishingDestinationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePublishingDestination',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.UpdatePublishingDestination'),
        parameters: {
          DetectorId: input.detectorId,
          DestinationId: input.destinationId,
          DestinationProperties: {
            DestinationArn: input.destinationProperties?.destinationArn,
            KmsKeyArn: input.destinationProperties?.kmsKeyArn,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdatePublishingDestination', props);
  }

  public updateThreatIntelSet(input: shapes.GuardDutyUpdateThreatIntelSetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateThreatIntelSet',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.UpdateThreatIntelSet'),
        parameters: {
          DetectorId: input.detectorId,
          ThreatIntelSetId: input.threatIntelSetId,
          Name: input.name,
          Location: input.location,
          Activate: input.activate,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateThreatIntelSet', props);
  }

}

export class GuardDutyResponsesCreateDetector {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyCreateDetectorRequest) {
  }

  public get detectorId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDetector',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.CreateDetector.DetectorId'),
        outputPath: 'DetectorId',
        parameters: {
          Enable: this.__input.enable,
          ClientToken: this.__input.clientToken,
          FindingPublishingFrequency: this.__input.findingPublishingFrequency,
          DataSources: {
            S3Logs: {
              Enable: this.__input.dataSources?.s3Logs?.enable,
            },
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDetector.DetectorId', props);
    return resource.getResponseField('DetectorId') as unknown as string;
  }

}

export class GuardDutyResponsesCreateFilter {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyCreateFilterRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFilter',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.CreateFilter.Name'),
        outputPath: 'Name',
        parameters: {
          DetectorId: this.__input.detectorId,
          Name: this.__input.name,
          Description: this.__input.description,
          Action: this.__input.action,
          Rank: this.__input.rank,
          FindingCriteria: {
            Criterion: this.__input.findingCriteria.criterion,
          },
          ClientToken: this.__input.clientToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFilter.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GuardDutyResponsesCreateIpSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyCreateIpSetRequest) {
  }

  public get ipSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIpSet',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.CreateIPSet.IpSetId'),
        outputPath: 'IpSetId',
        parameters: {
          DetectorId: this.__input.detectorId,
          Name: this.__input.name,
          Format: this.__input.format,
          Location: this.__input.location,
          Activate: this.__input.activate,
          ClientToken: this.__input.clientToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIPSet.IpSetId', props);
    return resource.getResponseField('IpSetId') as unknown as string;
  }

}

export class GuardDutyResponsesCreateMembers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyCreateMembersRequest) {
  }

  public get unprocessedAccounts(): shapes.GuardDutyUnprocessedAccount[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMembers',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.CreateMembers.UnprocessedAccounts'),
        outputPath: 'UnprocessedAccounts',
        parameters: {
          DetectorId: this.__input.detectorId,
          AccountDetails: this.__input.accountDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMembers.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.GuardDutyUnprocessedAccount[];
  }

}

export class GuardDutyResponsesCreatePublishingDestination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyCreatePublishingDestinationRequest) {
  }

  public get destinationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPublishingDestination',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.CreatePublishingDestination.DestinationId'),
        outputPath: 'DestinationId',
        parameters: {
          DetectorId: this.__input.detectorId,
          DestinationType: this.__input.destinationType,
          DestinationProperties: {
            DestinationArn: this.__input.destinationProperties.destinationArn,
            KmsKeyArn: this.__input.destinationProperties.kmsKeyArn,
          },
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePublishingDestination.DestinationId', props);
    return resource.getResponseField('DestinationId') as unknown as string;
  }

}

export class GuardDutyResponsesCreateThreatIntelSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyCreateThreatIntelSetRequest) {
  }

  public get threatIntelSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createThreatIntelSet',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.CreateThreatIntelSet.ThreatIntelSetId'),
        outputPath: 'ThreatIntelSetId',
        parameters: {
          DetectorId: this.__input.detectorId,
          Name: this.__input.name,
          Format: this.__input.format,
          Location: this.__input.location,
          Activate: this.__input.activate,
          ClientToken: this.__input.clientToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateThreatIntelSet.ThreatIntelSetId', props);
    return resource.getResponseField('ThreatIntelSetId') as unknown as string;
  }

}

export class GuardDutyResponsesDeclineInvitations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyDeclineInvitationsRequest) {
  }

  public get unprocessedAccounts(): shapes.GuardDutyUnprocessedAccount[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'declineInvitations',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.DeclineInvitations.UnprocessedAccounts'),
        outputPath: 'UnprocessedAccounts',
        parameters: {
          AccountIds: this.__input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeclineInvitations.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.GuardDutyUnprocessedAccount[];
  }

}

export class GuardDutyResponsesDeleteInvitations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyDeleteInvitationsRequest) {
  }

  public get unprocessedAccounts(): shapes.GuardDutyUnprocessedAccount[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteInvitations',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.DeleteInvitations.UnprocessedAccounts'),
        outputPath: 'UnprocessedAccounts',
        parameters: {
          AccountIds: this.__input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteInvitations.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.GuardDutyUnprocessedAccount[];
  }

}

export class GuardDutyResponsesDeleteMembers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyDeleteMembersRequest) {
  }

  public get unprocessedAccounts(): shapes.GuardDutyUnprocessedAccount[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteMembers',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.DeleteMembers.UnprocessedAccounts'),
        outputPath: 'UnprocessedAccounts',
        parameters: {
          DetectorId: this.__input.detectorId,
          AccountIds: this.__input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteMembers.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.GuardDutyUnprocessedAccount[];
  }

}

export class GuardDutyResponsesDescribeOrganizationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyDescribeOrganizationConfigurationRequest) {
  }

  public get autoEnable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOrganizationConfiguration',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.DescribeOrganizationConfiguration.AutoEnable'),
        outputPath: 'AutoEnable',
        parameters: {
          DetectorId: this.__input.detectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOrganizationConfiguration.AutoEnable', props);
    return resource.getResponseField('AutoEnable') as unknown as boolean;
  }

  public get memberAccountLimitReached(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOrganizationConfiguration',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.DescribeOrganizationConfiguration.MemberAccountLimitReached'),
        outputPath: 'MemberAccountLimitReached',
        parameters: {
          DetectorId: this.__input.detectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOrganizationConfiguration.MemberAccountLimitReached', props);
    return resource.getResponseField('MemberAccountLimitReached') as unknown as boolean;
  }

  public get dataSources(): GuardDutyResponsesDescribeOrganizationConfigurationDataSources {
    return new GuardDutyResponsesDescribeOrganizationConfigurationDataSources(this.__scope, this.__resources, this.__input);
  }

}

export class GuardDutyResponsesDescribeOrganizationConfigurationDataSources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyDescribeOrganizationConfigurationRequest) {
  }

  public get s3Logs(): GuardDutyResponsesDescribeOrganizationConfigurationDataSourcesS3Logs {
    return new GuardDutyResponsesDescribeOrganizationConfigurationDataSourcesS3Logs(this.__scope, this.__resources, this.__input);
  }

}

export class GuardDutyResponsesDescribeOrganizationConfigurationDataSourcesS3Logs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyDescribeOrganizationConfigurationRequest) {
  }

  public get autoEnable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOrganizationConfiguration',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.DescribeOrganizationConfiguration.DataSources.S3Logs.AutoEnable'),
        outputPath: 'DataSources.S3Logs.AutoEnable',
        parameters: {
          DetectorId: this.__input.detectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOrganizationConfiguration.DataSources.S3Logs.AutoEnable', props);
    return resource.getResponseField('DataSources.S3Logs.AutoEnable') as unknown as boolean;
  }

}

export class GuardDutyResponsesDescribePublishingDestination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyDescribePublishingDestinationRequest) {
  }

  public get destinationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePublishingDestination',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.DescribePublishingDestination.DestinationId'),
        outputPath: 'DestinationId',
        parameters: {
          DetectorId: this.__input.detectorId,
          DestinationId: this.__input.destinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePublishingDestination.DestinationId', props);
    return resource.getResponseField('DestinationId') as unknown as string;
  }

  public get destinationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePublishingDestination',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.DescribePublishingDestination.DestinationType'),
        outputPath: 'DestinationType',
        parameters: {
          DetectorId: this.__input.detectorId,
          DestinationId: this.__input.destinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePublishingDestination.DestinationType', props);
    return resource.getResponseField('DestinationType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePublishingDestination',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.DescribePublishingDestination.Status'),
        outputPath: 'Status',
        parameters: {
          DetectorId: this.__input.detectorId,
          DestinationId: this.__input.destinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePublishingDestination.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get publishingFailureStartTimestamp(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePublishingDestination',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.DescribePublishingDestination.PublishingFailureStartTimestamp'),
        outputPath: 'PublishingFailureStartTimestamp',
        parameters: {
          DetectorId: this.__input.detectorId,
          DestinationId: this.__input.destinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePublishingDestination.PublishingFailureStartTimestamp', props);
    return resource.getResponseField('PublishingFailureStartTimestamp') as unknown as number;
  }

  public get destinationProperties(): GuardDutyResponsesDescribePublishingDestinationDestinationProperties {
    return new GuardDutyResponsesDescribePublishingDestinationDestinationProperties(this.__scope, this.__resources, this.__input);
  }

}

export class GuardDutyResponsesDescribePublishingDestinationDestinationProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyDescribePublishingDestinationRequest) {
  }

  public get destinationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePublishingDestination',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.DescribePublishingDestination.DestinationProperties.DestinationArn'),
        outputPath: 'DestinationProperties.DestinationArn',
        parameters: {
          DetectorId: this.__input.detectorId,
          DestinationId: this.__input.destinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePublishingDestination.DestinationProperties.DestinationArn', props);
    return resource.getResponseField('DestinationProperties.DestinationArn') as unknown as string;
  }

  public get kmsKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePublishingDestination',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.DescribePublishingDestination.DestinationProperties.KmsKeyArn'),
        outputPath: 'DestinationProperties.KmsKeyArn',
        parameters: {
          DetectorId: this.__input.detectorId,
          DestinationId: this.__input.destinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePublishingDestination.DestinationProperties.KmsKeyArn', props);
    return resource.getResponseField('DestinationProperties.KmsKeyArn') as unknown as string;
  }

}

export class GuardDutyResponsesDisassociateMembers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyDisassociateMembersRequest) {
  }

  public get unprocessedAccounts(): shapes.GuardDutyUnprocessedAccount[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateMembers',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.DisassociateMembers.UnprocessedAccounts'),
        outputPath: 'UnprocessedAccounts',
        parameters: {
          DetectorId: this.__input.detectorId,
          AccountIds: this.__input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateMembers.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.GuardDutyUnprocessedAccount[];
  }

}

export class GuardDutyResponsesFetchDetector {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyGetDetectorRequest) {
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDetector',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetDetector.CreatedAt'),
        outputPath: 'CreatedAt',
        parameters: {
          DetectorId: this.__input.detectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDetector.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get findingPublishingFrequency(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDetector',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetDetector.FindingPublishingFrequency'),
        outputPath: 'FindingPublishingFrequency',
        parameters: {
          DetectorId: this.__input.detectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDetector.FindingPublishingFrequency', props);
    return resource.getResponseField('FindingPublishingFrequency') as unknown as string;
  }

  public get serviceRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDetector',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetDetector.ServiceRole'),
        outputPath: 'ServiceRole',
        parameters: {
          DetectorId: this.__input.detectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDetector.ServiceRole', props);
    return resource.getResponseField('ServiceRole') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDetector',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetDetector.Status'),
        outputPath: 'Status',
        parameters: {
          DetectorId: this.__input.detectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDetector.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDetector',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetDetector.UpdatedAt'),
        outputPath: 'UpdatedAt',
        parameters: {
          DetectorId: this.__input.detectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDetector.UpdatedAt', props);
    return resource.getResponseField('UpdatedAt') as unknown as string;
  }

  public get dataSources(): GuardDutyResponsesFetchDetectorDataSources {
    return new GuardDutyResponsesFetchDetectorDataSources(this.__scope, this.__resources, this.__input);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDetector',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetDetector.Tags'),
        outputPath: 'Tags',
        parameters: {
          DetectorId: this.__input.detectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDetector.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class GuardDutyResponsesFetchDetectorDataSources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyGetDetectorRequest) {
  }

  public get cloudTrail(): GuardDutyResponsesFetchDetectorDataSourcesCloudTrail {
    return new GuardDutyResponsesFetchDetectorDataSourcesCloudTrail(this.__scope, this.__resources, this.__input);
  }

  public get dnsLogs(): GuardDutyResponsesFetchDetectorDataSourcesDnsLogs {
    return new GuardDutyResponsesFetchDetectorDataSourcesDnsLogs(this.__scope, this.__resources, this.__input);
  }

  public get flowLogs(): GuardDutyResponsesFetchDetectorDataSourcesFlowLogs {
    return new GuardDutyResponsesFetchDetectorDataSourcesFlowLogs(this.__scope, this.__resources, this.__input);
  }

  public get s3Logs(): GuardDutyResponsesFetchDetectorDataSourcesS3Logs {
    return new GuardDutyResponsesFetchDetectorDataSourcesS3Logs(this.__scope, this.__resources, this.__input);
  }

}

export class GuardDutyResponsesFetchDetectorDataSourcesCloudTrail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyGetDetectorRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDetector',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetDetector.DataSources.CloudTrail.Status'),
        outputPath: 'DataSources.CloudTrail.Status',
        parameters: {
          DetectorId: this.__input.detectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDetector.DataSources.CloudTrail.Status', props);
    return resource.getResponseField('DataSources.CloudTrail.Status') as unknown as string;
  }

}

export class GuardDutyResponsesFetchDetectorDataSourcesDnsLogs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyGetDetectorRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDetector',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetDetector.DataSources.DNSLogs.Status'),
        outputPath: 'DataSources.DNSLogs.Status',
        parameters: {
          DetectorId: this.__input.detectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDetector.DataSources.DNSLogs.Status', props);
    return resource.getResponseField('DataSources.DNSLogs.Status') as unknown as string;
  }

}

export class GuardDutyResponsesFetchDetectorDataSourcesFlowLogs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyGetDetectorRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDetector',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetDetector.DataSources.FlowLogs.Status'),
        outputPath: 'DataSources.FlowLogs.Status',
        parameters: {
          DetectorId: this.__input.detectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDetector.DataSources.FlowLogs.Status', props);
    return resource.getResponseField('DataSources.FlowLogs.Status') as unknown as string;
  }

}

export class GuardDutyResponsesFetchDetectorDataSourcesS3Logs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyGetDetectorRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDetector',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetDetector.DataSources.S3Logs.Status'),
        outputPath: 'DataSources.S3Logs.Status',
        parameters: {
          DetectorId: this.__input.detectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDetector.DataSources.S3Logs.Status', props);
    return resource.getResponseField('DataSources.S3Logs.Status') as unknown as string;
  }

}

export class GuardDutyResponsesFetchFilter {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyGetFilterRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFilter',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetFilter.Name'),
        outputPath: 'Name',
        parameters: {
          DetectorId: this.__input.detectorId,
          FilterName: this.__input.filterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFilter.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFilter',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetFilter.Description'),
        outputPath: 'Description',
        parameters: {
          DetectorId: this.__input.detectorId,
          FilterName: this.__input.filterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFilter.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get action(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFilter',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetFilter.Action'),
        outputPath: 'Action',
        parameters: {
          DetectorId: this.__input.detectorId,
          FilterName: this.__input.filterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFilter.Action', props);
    return resource.getResponseField('Action') as unknown as string;
  }

  public get rank(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFilter',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetFilter.Rank'),
        outputPath: 'Rank',
        parameters: {
          DetectorId: this.__input.detectorId,
          FilterName: this.__input.filterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFilter.Rank', props);
    return resource.getResponseField('Rank') as unknown as number;
  }

  public get findingCriteria(): GuardDutyResponsesFetchFilterFindingCriteria {
    return new GuardDutyResponsesFetchFilterFindingCriteria(this.__scope, this.__resources, this.__input);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFilter',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetFilter.Tags'),
        outputPath: 'Tags',
        parameters: {
          DetectorId: this.__input.detectorId,
          FilterName: this.__input.filterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFilter.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class GuardDutyResponsesFetchFilterFindingCriteria {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyGetFilterRequest) {
  }

  public get criterion(): Record<string, shapes.GuardDutyCondition> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFilter',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetFilter.FindingCriteria.Criterion'),
        outputPath: 'FindingCriteria.Criterion',
        parameters: {
          DetectorId: this.__input.detectorId,
          FilterName: this.__input.filterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFilter.FindingCriteria.Criterion', props);
    return resource.getResponseField('FindingCriteria.Criterion') as unknown as Record<string, shapes.GuardDutyCondition>;
  }

}

export class GuardDutyResponsesFetchFindings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyGetFindingsRequest) {
  }

  public get findings(): shapes.GuardDutyFinding[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFindings',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetFindings.Findings'),
        outputPath: 'Findings',
        parameters: {
          DetectorId: this.__input.detectorId,
          FindingIds: this.__input.findingIds,
          SortCriteria: {
            AttributeName: this.__input.sortCriteria?.attributeName,
            OrderBy: this.__input.sortCriteria?.orderBy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFindings.Findings', props);
    return resource.getResponseField('Findings') as unknown as shapes.GuardDutyFinding[];
  }

}

export class GuardDutyResponsesFetchFindingsStatistics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyGetFindingsStatisticsRequest) {
  }

  public get findingStatistics(): GuardDutyResponsesFetchFindingsStatisticsFindingStatistics {
    return new GuardDutyResponsesFetchFindingsStatisticsFindingStatistics(this.__scope, this.__resources, this.__input);
  }

}

export class GuardDutyResponsesFetchFindingsStatisticsFindingStatistics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyGetFindingsStatisticsRequest) {
  }

  public get countBySeverity(): Record<string, number> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFindingsStatistics',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetFindingsStatistics.FindingStatistics.CountBySeverity'),
        outputPath: 'FindingStatistics.CountBySeverity',
        parameters: {
          DetectorId: this.__input.detectorId,
          FindingStatisticTypes: this.__input.findingStatisticTypes,
          FindingCriteria: {
            Criterion: this.__input.findingCriteria?.criterion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFindingsStatistics.FindingStatistics.CountBySeverity', props);
    return resource.getResponseField('FindingStatistics.CountBySeverity') as unknown as Record<string, number>;
  }

}

export class GuardDutyResponsesFetchIpSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyGetIpSetRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIpSet',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetIPSet.Name'),
        outputPath: 'Name',
        parameters: {
          DetectorId: this.__input.detectorId,
          IpSetId: this.__input.ipSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIPSet.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIpSet',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetIPSet.Format'),
        outputPath: 'Format',
        parameters: {
          DetectorId: this.__input.detectorId,
          IpSetId: this.__input.ipSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIPSet.Format', props);
    return resource.getResponseField('Format') as unknown as string;
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIpSet',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetIPSet.Location'),
        outputPath: 'Location',
        parameters: {
          DetectorId: this.__input.detectorId,
          IpSetId: this.__input.ipSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIPSet.Location', props);
    return resource.getResponseField('Location') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIpSet',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetIPSet.Status'),
        outputPath: 'Status',
        parameters: {
          DetectorId: this.__input.detectorId,
          IpSetId: this.__input.ipSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIPSet.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIpSet',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetIPSet.Tags'),
        outputPath: 'Tags',
        parameters: {
          DetectorId: this.__input.detectorId,
          IpSetId: this.__input.ipSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIPSet.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class GuardDutyResponsesFetchInvitationsCount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get invitationsCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInvitationsCount',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetInvitationsCount.InvitationsCount'),
        outputPath: 'InvitationsCount',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInvitationsCount.InvitationsCount', props);
    return resource.getResponseField('InvitationsCount') as unknown as number;
  }

}

export class GuardDutyResponsesFetchMasterAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyGetMasterAccountRequest) {
  }

  public get master(): GuardDutyResponsesFetchMasterAccountMaster {
    return new GuardDutyResponsesFetchMasterAccountMaster(this.__scope, this.__resources, this.__input);
  }

}

export class GuardDutyResponsesFetchMasterAccountMaster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyGetMasterAccountRequest) {
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMasterAccount',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetMasterAccount.Master.AccountId'),
        outputPath: 'Master.AccountId',
        parameters: {
          DetectorId: this.__input.detectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMasterAccount.Master.AccountId', props);
    return resource.getResponseField('Master.AccountId') as unknown as string;
  }

  public get invitationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMasterAccount',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetMasterAccount.Master.InvitationId'),
        outputPath: 'Master.InvitationId',
        parameters: {
          DetectorId: this.__input.detectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMasterAccount.Master.InvitationId', props);
    return resource.getResponseField('Master.InvitationId') as unknown as string;
  }

  public get relationshipStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMasterAccount',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetMasterAccount.Master.RelationshipStatus'),
        outputPath: 'Master.RelationshipStatus',
        parameters: {
          DetectorId: this.__input.detectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMasterAccount.Master.RelationshipStatus', props);
    return resource.getResponseField('Master.RelationshipStatus') as unknown as string;
  }

  public get invitedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMasterAccount',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetMasterAccount.Master.InvitedAt'),
        outputPath: 'Master.InvitedAt',
        parameters: {
          DetectorId: this.__input.detectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMasterAccount.Master.InvitedAt', props);
    return resource.getResponseField('Master.InvitedAt') as unknown as string;
  }

}

export class GuardDutyResponsesFetchMemberDetectors {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyGetMemberDetectorsRequest) {
  }

  public get memberDataSourceConfigurations(): shapes.GuardDutyMemberDataSourceConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMemberDetectors',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetMemberDetectors.MemberDataSourceConfigurations'),
        outputPath: 'MemberDataSourceConfigurations',
        parameters: {
          DetectorId: this.__input.detectorId,
          AccountIds: this.__input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMemberDetectors.MemberDataSourceConfigurations', props);
    return resource.getResponseField('MemberDataSourceConfigurations') as unknown as shapes.GuardDutyMemberDataSourceConfiguration[];
  }

  public get unprocessedAccounts(): shapes.GuardDutyUnprocessedAccount[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMemberDetectors',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetMemberDetectors.UnprocessedAccounts'),
        outputPath: 'UnprocessedAccounts',
        parameters: {
          DetectorId: this.__input.detectorId,
          AccountIds: this.__input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMemberDetectors.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.GuardDutyUnprocessedAccount[];
  }

}

export class GuardDutyResponsesFetchMembers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyGetMembersRequest) {
  }

  public get members(): shapes.GuardDutyMember[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMembers',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetMembers.Members'),
        outputPath: 'Members',
        parameters: {
          DetectorId: this.__input.detectorId,
          AccountIds: this.__input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMembers.Members', props);
    return resource.getResponseField('Members') as unknown as shapes.GuardDutyMember[];
  }

  public get unprocessedAccounts(): shapes.GuardDutyUnprocessedAccount[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMembers',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetMembers.UnprocessedAccounts'),
        outputPath: 'UnprocessedAccounts',
        parameters: {
          DetectorId: this.__input.detectorId,
          AccountIds: this.__input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMembers.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.GuardDutyUnprocessedAccount[];
  }

}

export class GuardDutyResponsesFetchThreatIntelSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyGetThreatIntelSetRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getThreatIntelSet',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetThreatIntelSet.Name'),
        outputPath: 'Name',
        parameters: {
          DetectorId: this.__input.detectorId,
          ThreatIntelSetId: this.__input.threatIntelSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetThreatIntelSet.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getThreatIntelSet',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetThreatIntelSet.Format'),
        outputPath: 'Format',
        parameters: {
          DetectorId: this.__input.detectorId,
          ThreatIntelSetId: this.__input.threatIntelSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetThreatIntelSet.Format', props);
    return resource.getResponseField('Format') as unknown as string;
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getThreatIntelSet',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetThreatIntelSet.Location'),
        outputPath: 'Location',
        parameters: {
          DetectorId: this.__input.detectorId,
          ThreatIntelSetId: this.__input.threatIntelSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetThreatIntelSet.Location', props);
    return resource.getResponseField('Location') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getThreatIntelSet',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetThreatIntelSet.Status'),
        outputPath: 'Status',
        parameters: {
          DetectorId: this.__input.detectorId,
          ThreatIntelSetId: this.__input.threatIntelSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetThreatIntelSet.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getThreatIntelSet',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetThreatIntelSet.Tags'),
        outputPath: 'Tags',
        parameters: {
          DetectorId: this.__input.detectorId,
          ThreatIntelSetId: this.__input.threatIntelSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetThreatIntelSet.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class GuardDutyResponsesFetchUsageStatistics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyGetUsageStatisticsRequest) {
  }

  public get usageStatistics(): GuardDutyResponsesFetchUsageStatisticsUsageStatistics {
    return new GuardDutyResponsesFetchUsageStatisticsUsageStatistics(this.__scope, this.__resources, this.__input);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsageStatistics',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetUsageStatistics.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DetectorId: this.__input.detectorId,
          UsageStatisticType: this.__input.usageStatisticType,
          UsageCriteria: {
            AccountIds: this.__input.usageCriteria.accountIds,
            DataSources: this.__input.usageCriteria.dataSources,
            Resources: this.__input.usageCriteria.resources,
          },
          Unit: this.__input.unit,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsageStatistics.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GuardDutyResponsesFetchUsageStatisticsUsageStatistics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyGetUsageStatisticsRequest) {
  }

  public get sumByAccount(): shapes.GuardDutyUsageAccountResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsageStatistics',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetUsageStatistics.UsageStatistics.SumByAccount'),
        outputPath: 'UsageStatistics.SumByAccount',
        parameters: {
          DetectorId: this.__input.detectorId,
          UsageStatisticType: this.__input.usageStatisticType,
          UsageCriteria: {
            AccountIds: this.__input.usageCriteria.accountIds,
            DataSources: this.__input.usageCriteria.dataSources,
            Resources: this.__input.usageCriteria.resources,
          },
          Unit: this.__input.unit,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsageStatistics.UsageStatistics.SumByAccount', props);
    return resource.getResponseField('UsageStatistics.SumByAccount') as unknown as shapes.GuardDutyUsageAccountResult[];
  }

  public get sumByDataSource(): shapes.GuardDutyUsageDataSourceResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsageStatistics',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetUsageStatistics.UsageStatistics.SumByDataSource'),
        outputPath: 'UsageStatistics.SumByDataSource',
        parameters: {
          DetectorId: this.__input.detectorId,
          UsageStatisticType: this.__input.usageStatisticType,
          UsageCriteria: {
            AccountIds: this.__input.usageCriteria.accountIds,
            DataSources: this.__input.usageCriteria.dataSources,
            Resources: this.__input.usageCriteria.resources,
          },
          Unit: this.__input.unit,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsageStatistics.UsageStatistics.SumByDataSource', props);
    return resource.getResponseField('UsageStatistics.SumByDataSource') as unknown as shapes.GuardDutyUsageDataSourceResult[];
  }

  public get sumByResource(): shapes.GuardDutyUsageResourceResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsageStatistics',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetUsageStatistics.UsageStatistics.SumByResource'),
        outputPath: 'UsageStatistics.SumByResource',
        parameters: {
          DetectorId: this.__input.detectorId,
          UsageStatisticType: this.__input.usageStatisticType,
          UsageCriteria: {
            AccountIds: this.__input.usageCriteria.accountIds,
            DataSources: this.__input.usageCriteria.dataSources,
            Resources: this.__input.usageCriteria.resources,
          },
          Unit: this.__input.unit,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsageStatistics.UsageStatistics.SumByResource', props);
    return resource.getResponseField('UsageStatistics.SumByResource') as unknown as shapes.GuardDutyUsageResourceResult[];
  }

  public get topResources(): shapes.GuardDutyUsageResourceResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsageStatistics',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.GetUsageStatistics.UsageStatistics.TopResources'),
        outputPath: 'UsageStatistics.TopResources',
        parameters: {
          DetectorId: this.__input.detectorId,
          UsageStatisticType: this.__input.usageStatisticType,
          UsageCriteria: {
            AccountIds: this.__input.usageCriteria.accountIds,
            DataSources: this.__input.usageCriteria.dataSources,
            Resources: this.__input.usageCriteria.resources,
          },
          Unit: this.__input.unit,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsageStatistics.UsageStatistics.TopResources', props);
    return resource.getResponseField('UsageStatistics.TopResources') as unknown as shapes.GuardDutyUsageResourceResult[];
  }

}

export class GuardDutyResponsesInviteMembers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyInviteMembersRequest) {
  }

  public get unprocessedAccounts(): shapes.GuardDutyUnprocessedAccount[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'inviteMembers',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.InviteMembers.UnprocessedAccounts'),
        outputPath: 'UnprocessedAccounts',
        parameters: {
          DetectorId: this.__input.detectorId,
          AccountIds: this.__input.accountIds,
          DisableEmailNotification: this.__input.disableEmailNotification,
          Message: this.__input.message,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InviteMembers.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.GuardDutyUnprocessedAccount[];
  }

}

export class GuardDutyResponsesListDetectors {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyListDetectorsRequest) {
  }

  public get detectorIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDetectors',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.ListDetectors.DetectorIds'),
        outputPath: 'DetectorIds',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDetectors.DetectorIds', props);
    return resource.getResponseField('DetectorIds') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDetectors',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.ListDetectors.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDetectors.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GuardDutyResponsesListFilters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyListFiltersRequest) {
  }

  public get filterNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFilters',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.ListFilters.FilterNames'),
        outputPath: 'FilterNames',
        parameters: {
          DetectorId: this.__input.detectorId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFilters.FilterNames', props);
    return resource.getResponseField('FilterNames') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFilters',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.ListFilters.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DetectorId: this.__input.detectorId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFilters.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GuardDutyResponsesListFindings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyListFindingsRequest) {
  }

  public get findingIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFindings',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.ListFindings.FindingIds'),
        outputPath: 'FindingIds',
        parameters: {
          DetectorId: this.__input.detectorId,
          FindingCriteria: {
            Criterion: this.__input.findingCriteria?.criterion,
          },
          SortCriteria: {
            AttributeName: this.__input.sortCriteria?.attributeName,
            OrderBy: this.__input.sortCriteria?.orderBy,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFindings.FindingIds', props);
    return resource.getResponseField('FindingIds') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFindings',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.ListFindings.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DetectorId: this.__input.detectorId,
          FindingCriteria: {
            Criterion: this.__input.findingCriteria?.criterion,
          },
          SortCriteria: {
            AttributeName: this.__input.sortCriteria?.attributeName,
            OrderBy: this.__input.sortCriteria?.orderBy,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFindings.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GuardDutyResponsesListIpSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyListIpSetsRequest) {
  }

  public get ipSetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIpSets',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.ListIPSets.IpSetIds'),
        outputPath: 'IpSetIds',
        parameters: {
          DetectorId: this.__input.detectorId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIPSets.IpSetIds', props);
    return resource.getResponseField('IpSetIds') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIpSets',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.ListIPSets.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DetectorId: this.__input.detectorId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIPSets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GuardDutyResponsesListInvitations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyListInvitationsRequest) {
  }

  public get invitations(): shapes.GuardDutyInvitation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInvitations',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.ListInvitations.Invitations'),
        outputPath: 'Invitations',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInvitations.Invitations', props);
    return resource.getResponseField('Invitations') as unknown as shapes.GuardDutyInvitation[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInvitations',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.ListInvitations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInvitations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GuardDutyResponsesListMembers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyListMembersRequest) {
  }

  public get members(): shapes.GuardDutyMember[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMembers',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.ListMembers.Members'),
        outputPath: 'Members',
        parameters: {
          DetectorId: this.__input.detectorId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          OnlyAssociated: this.__input.onlyAssociated,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMembers.Members', props);
    return resource.getResponseField('Members') as unknown as shapes.GuardDutyMember[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMembers',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.ListMembers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DetectorId: this.__input.detectorId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          OnlyAssociated: this.__input.onlyAssociated,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMembers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GuardDutyResponsesListOrganizationAdminAccounts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyListOrganizationAdminAccountsRequest) {
  }

  public get adminAccounts(): shapes.GuardDutyAdminAccount[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOrganizationAdminAccounts',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.ListOrganizationAdminAccounts.AdminAccounts'),
        outputPath: 'AdminAccounts',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOrganizationAdminAccounts.AdminAccounts', props);
    return resource.getResponseField('AdminAccounts') as unknown as shapes.GuardDutyAdminAccount[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOrganizationAdminAccounts',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.ListOrganizationAdminAccounts.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOrganizationAdminAccounts.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GuardDutyResponsesListPublishingDestinations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyListPublishingDestinationsRequest) {
  }

  public get destinations(): shapes.GuardDutyDestination[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPublishingDestinations',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.ListPublishingDestinations.Destinations'),
        outputPath: 'Destinations',
        parameters: {
          DetectorId: this.__input.detectorId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPublishingDestinations.Destinations', props);
    return resource.getResponseField('Destinations') as unknown as shapes.GuardDutyDestination[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPublishingDestinations',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.ListPublishingDestinations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DetectorId: this.__input.detectorId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPublishingDestinations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GuardDutyResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class GuardDutyResponsesListThreatIntelSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyListThreatIntelSetsRequest) {
  }

  public get threatIntelSetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listThreatIntelSets',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.ListThreatIntelSets.ThreatIntelSetIds'),
        outputPath: 'ThreatIntelSetIds',
        parameters: {
          DetectorId: this.__input.detectorId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListThreatIntelSets.ThreatIntelSetIds', props);
    return resource.getResponseField('ThreatIntelSetIds') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listThreatIntelSets',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.ListThreatIntelSets.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DetectorId: this.__input.detectorId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListThreatIntelSets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GuardDutyResponsesStartMonitoringMembers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyStartMonitoringMembersRequest) {
  }

  public get unprocessedAccounts(): shapes.GuardDutyUnprocessedAccount[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMonitoringMembers',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.StartMonitoringMembers.UnprocessedAccounts'),
        outputPath: 'UnprocessedAccounts',
        parameters: {
          DetectorId: this.__input.detectorId,
          AccountIds: this.__input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMonitoringMembers.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.GuardDutyUnprocessedAccount[];
  }

}

export class GuardDutyResponsesStopMonitoringMembers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyStopMonitoringMembersRequest) {
  }

  public get unprocessedAccounts(): shapes.GuardDutyUnprocessedAccount[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopMonitoringMembers',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.StopMonitoringMembers.UnprocessedAccounts'),
        outputPath: 'UnprocessedAccounts',
        parameters: {
          DetectorId: this.__input.detectorId,
          AccountIds: this.__input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopMonitoringMembers.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.GuardDutyUnprocessedAccount[];
  }

}

export class GuardDutyResponsesUpdateFilter {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyUpdateFilterRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFilter',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.UpdateFilter.Name'),
        outputPath: 'Name',
        parameters: {
          DetectorId: this.__input.detectorId,
          FilterName: this.__input.filterName,
          Description: this.__input.description,
          Action: this.__input.action,
          Rank: this.__input.rank,
          FindingCriteria: {
            Criterion: this.__input.findingCriteria?.criterion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFilter.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GuardDutyResponsesUpdateMemberDetectors {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GuardDutyUpdateMemberDetectorsRequest) {
  }

  public get unprocessedAccounts(): shapes.GuardDutyUnprocessedAccount[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMemberDetectors',
        service: 'GuardDuty',
        physicalResourceId: cr.PhysicalResourceId.of('GuardDuty.UpdateMemberDetectors.UnprocessedAccounts'),
        outputPath: 'UnprocessedAccounts',
        parameters: {
          DetectorId: this.__input.detectorId,
          AccountIds: this.__input.accountIds,
          DataSources: {
            S3Logs: {
              Enable: this.__input.dataSources?.s3Logs?.enable,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMemberDetectors.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.GuardDutyUnprocessedAccount[];
  }

}

