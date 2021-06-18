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

  public createDetector(input: shapes.GuardDutyCreateDetectorRequest): GuardDutyCreateDetector {
    return new GuardDutyCreateDetector(this, 'CreateDetector', this.__resources, input);
  }

  public createFilter(input: shapes.GuardDutyCreateFilterRequest): GuardDutyCreateFilter {
    return new GuardDutyCreateFilter(this, 'CreateFilter', this.__resources, input);
  }

  public createIpSet(input: shapes.GuardDutyCreateIpSetRequest): GuardDutyCreateIpSet {
    return new GuardDutyCreateIpSet(this, 'CreateIpSet', this.__resources, input);
  }

  public createMembers(input: shapes.GuardDutyCreateMembersRequest): GuardDutyCreateMembers {
    return new GuardDutyCreateMembers(this, 'CreateMembers', this.__resources, input);
  }

  public createPublishingDestination(input: shapes.GuardDutyCreatePublishingDestinationRequest): GuardDutyCreatePublishingDestination {
    return new GuardDutyCreatePublishingDestination(this, 'CreatePublishingDestination', this.__resources, input);
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

  public createThreatIntelSet(input: shapes.GuardDutyCreateThreatIntelSetRequest): GuardDutyCreateThreatIntelSet {
    return new GuardDutyCreateThreatIntelSet(this, 'CreateThreatIntelSet', this.__resources, input);
  }

  public declineInvitations(input: shapes.GuardDutyDeclineInvitationsRequest): GuardDutyDeclineInvitations {
    return new GuardDutyDeclineInvitations(this, 'DeclineInvitations', this.__resources, input);
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

  public deleteInvitations(input: shapes.GuardDutyDeleteInvitationsRequest): GuardDutyDeleteInvitations {
    return new GuardDutyDeleteInvitations(this, 'DeleteInvitations', this.__resources, input);
  }

  public deleteMembers(input: shapes.GuardDutyDeleteMembersRequest): GuardDutyDeleteMembers {
    return new GuardDutyDeleteMembers(this, 'DeleteMembers', this.__resources, input);
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

  public describeOrganizationConfiguration(input: shapes.GuardDutyDescribeOrganizationConfigurationRequest): GuardDutyDescribeOrganizationConfiguration {
    return new GuardDutyDescribeOrganizationConfiguration(this, 'DescribeOrganizationConfiguration', this.__resources, input);
  }

  public describePublishingDestination(input: shapes.GuardDutyDescribePublishingDestinationRequest): GuardDutyDescribePublishingDestination {
    return new GuardDutyDescribePublishingDestination(this, 'DescribePublishingDestination', this.__resources, input);
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

  public disassociateMembers(input: shapes.GuardDutyDisassociateMembersRequest): GuardDutyDisassociateMembers {
    return new GuardDutyDisassociateMembers(this, 'DisassociateMembers', this.__resources, input);
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

  public fetchDetector(input: shapes.GuardDutyGetDetectorRequest): GuardDutyFetchDetector {
    return new GuardDutyFetchDetector(this, 'FetchDetector', this.__resources, input);
  }

  public fetchFilter(input: shapes.GuardDutyGetFilterRequest): GuardDutyFetchFilter {
    return new GuardDutyFetchFilter(this, 'FetchFilter', this.__resources, input);
  }

  public fetchFindings(input: shapes.GuardDutyGetFindingsRequest): GuardDutyFetchFindings {
    return new GuardDutyFetchFindings(this, 'FetchFindings', this.__resources, input);
  }

  public fetchFindingsStatistics(input: shapes.GuardDutyGetFindingsStatisticsRequest): GuardDutyFetchFindingsStatistics {
    return new GuardDutyFetchFindingsStatistics(this, 'FetchFindingsStatistics', this.__resources, input);
  }

  public fetchIpSet(input: shapes.GuardDutyGetIpSetRequest): GuardDutyFetchIpSet {
    return new GuardDutyFetchIpSet(this, 'FetchIpSet', this.__resources, input);
  }

  public fetchInvitationsCount(): GuardDutyFetchInvitationsCount {
    return new GuardDutyFetchInvitationsCount(this, 'FetchInvitationsCount', this.__resources);
  }

  public fetchMasterAccount(input: shapes.GuardDutyGetMasterAccountRequest): GuardDutyFetchMasterAccount {
    return new GuardDutyFetchMasterAccount(this, 'FetchMasterAccount', this.__resources, input);
  }

  public fetchMemberDetectors(input: shapes.GuardDutyGetMemberDetectorsRequest): GuardDutyFetchMemberDetectors {
    return new GuardDutyFetchMemberDetectors(this, 'FetchMemberDetectors', this.__resources, input);
  }

  public fetchMembers(input: shapes.GuardDutyGetMembersRequest): GuardDutyFetchMembers {
    return new GuardDutyFetchMembers(this, 'FetchMembers', this.__resources, input);
  }

  public fetchThreatIntelSet(input: shapes.GuardDutyGetThreatIntelSetRequest): GuardDutyFetchThreatIntelSet {
    return new GuardDutyFetchThreatIntelSet(this, 'FetchThreatIntelSet', this.__resources, input);
  }

  public fetchUsageStatistics(input: shapes.GuardDutyGetUsageStatisticsRequest): GuardDutyFetchUsageStatistics {
    return new GuardDutyFetchUsageStatistics(this, 'FetchUsageStatistics', this.__resources, input);
  }

  public inviteMembers(input: shapes.GuardDutyInviteMembersRequest): GuardDutyInviteMembers {
    return new GuardDutyInviteMembers(this, 'InviteMembers', this.__resources, input);
  }

  public listDetectors(input: shapes.GuardDutyListDetectorsRequest): GuardDutyListDetectors {
    return new GuardDutyListDetectors(this, 'ListDetectors', this.__resources, input);
  }

  public listFilters(input: shapes.GuardDutyListFiltersRequest): GuardDutyListFilters {
    return new GuardDutyListFilters(this, 'ListFilters', this.__resources, input);
  }

  public listFindings(input: shapes.GuardDutyListFindingsRequest): GuardDutyListFindings {
    return new GuardDutyListFindings(this, 'ListFindings', this.__resources, input);
  }

  public listIpSets(input: shapes.GuardDutyListIpSetsRequest): GuardDutyListIpSets {
    return new GuardDutyListIpSets(this, 'ListIpSets', this.__resources, input);
  }

  public listInvitations(input: shapes.GuardDutyListInvitationsRequest): GuardDutyListInvitations {
    return new GuardDutyListInvitations(this, 'ListInvitations', this.__resources, input);
  }

  public listMembers(input: shapes.GuardDutyListMembersRequest): GuardDutyListMembers {
    return new GuardDutyListMembers(this, 'ListMembers', this.__resources, input);
  }

  public listOrganizationAdminAccounts(input: shapes.GuardDutyListOrganizationAdminAccountsRequest): GuardDutyListOrganizationAdminAccounts {
    return new GuardDutyListOrganizationAdminAccounts(this, 'ListOrganizationAdminAccounts', this.__resources, input);
  }

  public listPublishingDestinations(input: shapes.GuardDutyListPublishingDestinationsRequest): GuardDutyListPublishingDestinations {
    return new GuardDutyListPublishingDestinations(this, 'ListPublishingDestinations', this.__resources, input);
  }

  public listTagsForResource(input: shapes.GuardDutyListTagsForResourceRequest): GuardDutyListTagsForResource {
    return new GuardDutyListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public listThreatIntelSets(input: shapes.GuardDutyListThreatIntelSetsRequest): GuardDutyListThreatIntelSets {
    return new GuardDutyListThreatIntelSets(this, 'ListThreatIntelSets', this.__resources, input);
  }

  public startMonitoringMembers(input: shapes.GuardDutyStartMonitoringMembersRequest): GuardDutyStartMonitoringMembers {
    return new GuardDutyStartMonitoringMembers(this, 'StartMonitoringMembers', this.__resources, input);
  }

  public stopMonitoringMembers(input: shapes.GuardDutyStopMonitoringMembersRequest): GuardDutyStopMonitoringMembers {
    return new GuardDutyStopMonitoringMembers(this, 'StopMonitoringMembers', this.__resources, input);
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

  public updateFilter(input: shapes.GuardDutyUpdateFilterRequest): GuardDutyUpdateFilter {
    return new GuardDutyUpdateFilter(this, 'UpdateFilter', this.__resources, input);
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

  public updateMemberDetectors(input: shapes.GuardDutyUpdateMemberDetectorsRequest): GuardDutyUpdateMemberDetectors {
    return new GuardDutyUpdateMemberDetectors(this, 'UpdateMemberDetectors', this.__resources, input);
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

export class GuardDutyCreateDetector extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyCreateDetectorRequest) {
    super(scope, id);
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
          Enable: this.input.enable,
          ClientToken: this.input.clientToken,
          FindingPublishingFrequency: this.input.findingPublishingFrequency,
          DataSources: {
            S3Logs: {
              Enable: this.input.dataSources?.s3Logs?.enable,
            },
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDetector.DetectorId', props);
    return resource.getResponseField('DetectorId') as unknown as string;
  }

}

export class GuardDutyCreateFilter extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyCreateFilterRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
          Name: this.input.name,
          Description: this.input.description,
          Action: this.input.action,
          Rank: this.input.rank,
          FindingCriteria: {
            Criterion: this.input.findingCriteria.criterion,
          },
          ClientToken: this.input.clientToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFilter.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GuardDutyCreateIpSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyCreateIpSetRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
          Name: this.input.name,
          Format: this.input.format,
          Location: this.input.location,
          Activate: this.input.activate,
          ClientToken: this.input.clientToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIPSet.IpSetId', props);
    return resource.getResponseField('IpSetId') as unknown as string;
  }

}

export class GuardDutyCreateMembers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyCreateMembersRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
          AccountDetails: this.input.accountDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMembers.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.GuardDutyUnprocessedAccount[];
  }

}

export class GuardDutyCreatePublishingDestination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyCreatePublishingDestinationRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
          DestinationType: this.input.destinationType,
          DestinationProperties: {
            DestinationArn: this.input.destinationProperties.destinationArn,
            KmsKeyArn: this.input.destinationProperties.kmsKeyArn,
          },
          ClientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePublishingDestination.DestinationId', props);
    return resource.getResponseField('DestinationId') as unknown as string;
  }

}

export class GuardDutyCreateThreatIntelSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyCreateThreatIntelSetRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
          Name: this.input.name,
          Format: this.input.format,
          Location: this.input.location,
          Activate: this.input.activate,
          ClientToken: this.input.clientToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateThreatIntelSet.ThreatIntelSetId', props);
    return resource.getResponseField('ThreatIntelSetId') as unknown as string;
  }

}

export class GuardDutyDeclineInvitations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyDeclineInvitationsRequest) {
    super(scope, id);
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
          AccountIds: this.input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeclineInvitations.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.GuardDutyUnprocessedAccount[];
  }

}

export class GuardDutyDeleteInvitations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyDeleteInvitationsRequest) {
    super(scope, id);
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
          AccountIds: this.input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteInvitations.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.GuardDutyUnprocessedAccount[];
  }

}

export class GuardDutyDeleteMembers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyDeleteMembersRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
          AccountIds: this.input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteMembers.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.GuardDutyUnprocessedAccount[];
  }

}

export class GuardDutyDescribeOrganizationConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyDescribeOrganizationConfigurationRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeOrganizationConfiguration.AutoEnable', props);
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
          DetectorId: this.input.detectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeOrganizationConfiguration.MemberAccountLimitReached', props);
    return resource.getResponseField('MemberAccountLimitReached') as unknown as boolean;
  }

  public get dataSources(): GuardDutyDescribeOrganizationConfigurationDataSources {
    return new GuardDutyDescribeOrganizationConfigurationDataSources(this, 'DataSources', this.__resources, this.input);
  }

}

export class GuardDutyDescribeOrganizationConfigurationDataSources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyDescribeOrganizationConfigurationRequest) {
    super(scope, id);
  }

  public get s3Logs(): GuardDutyDescribeOrganizationConfigurationDataSourcesS3Logs {
    return new GuardDutyDescribeOrganizationConfigurationDataSourcesS3Logs(this, 'S3Logs', this.__resources, this.input);
  }

}

export class GuardDutyDescribeOrganizationConfigurationDataSourcesS3Logs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyDescribeOrganizationConfigurationRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeOrganizationConfiguration.DataSources.S3Logs.AutoEnable', props);
    return resource.getResponseField('DataSources.S3Logs.AutoEnable') as unknown as boolean;
  }

}

export class GuardDutyDescribePublishingDestination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyDescribePublishingDestinationRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
          DestinationId: this.input.destinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePublishingDestination.DestinationId', props);
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
          DetectorId: this.input.detectorId,
          DestinationId: this.input.destinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePublishingDestination.DestinationType', props);
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
          DetectorId: this.input.detectorId,
          DestinationId: this.input.destinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePublishingDestination.Status', props);
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
          DetectorId: this.input.detectorId,
          DestinationId: this.input.destinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePublishingDestination.PublishingFailureStartTimestamp', props);
    return resource.getResponseField('PublishingFailureStartTimestamp') as unknown as number;
  }

  public get destinationProperties(): GuardDutyDescribePublishingDestinationDestinationProperties {
    return new GuardDutyDescribePublishingDestinationDestinationProperties(this, 'DestinationProperties', this.__resources, this.input);
  }

}

export class GuardDutyDescribePublishingDestinationDestinationProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyDescribePublishingDestinationRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
          DestinationId: this.input.destinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePublishingDestination.DestinationProperties.DestinationArn', props);
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
          DetectorId: this.input.detectorId,
          DestinationId: this.input.destinationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePublishingDestination.DestinationProperties.KmsKeyArn', props);
    return resource.getResponseField('DestinationProperties.KmsKeyArn') as unknown as string;
  }

}

export class GuardDutyDisassociateMembers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyDisassociateMembersRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
          AccountIds: this.input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateMembers.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.GuardDutyUnprocessedAccount[];
  }

}

export class GuardDutyFetchDetector extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyGetDetectorRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDetector.CreatedAt', props);
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
          DetectorId: this.input.detectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDetector.FindingPublishingFrequency', props);
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
          DetectorId: this.input.detectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDetector.ServiceRole', props);
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
          DetectorId: this.input.detectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDetector.Status', props);
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
          DetectorId: this.input.detectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDetector.UpdatedAt', props);
    return resource.getResponseField('UpdatedAt') as unknown as string;
  }

  public get dataSources(): GuardDutyFetchDetectorDataSources {
    return new GuardDutyFetchDetectorDataSources(this, 'DataSources', this.__resources, this.input);
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
          DetectorId: this.input.detectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDetector.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class GuardDutyFetchDetectorDataSources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyGetDetectorRequest) {
    super(scope, id);
  }

  public get cloudTrail(): GuardDutyFetchDetectorDataSourcesCloudTrail {
    return new GuardDutyFetchDetectorDataSourcesCloudTrail(this, 'CloudTrail', this.__resources, this.input);
  }

  public get dnsLogs(): GuardDutyFetchDetectorDataSourcesDnsLogs {
    return new GuardDutyFetchDetectorDataSourcesDnsLogs(this, 'DnsLogs', this.__resources, this.input);
  }

  public get flowLogs(): GuardDutyFetchDetectorDataSourcesFlowLogs {
    return new GuardDutyFetchDetectorDataSourcesFlowLogs(this, 'FlowLogs', this.__resources, this.input);
  }

  public get s3Logs(): GuardDutyFetchDetectorDataSourcesS3Logs {
    return new GuardDutyFetchDetectorDataSourcesS3Logs(this, 'S3Logs', this.__resources, this.input);
  }

}

export class GuardDutyFetchDetectorDataSourcesCloudTrail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyGetDetectorRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDetector.DataSources.CloudTrail.Status', props);
    return resource.getResponseField('DataSources.CloudTrail.Status') as unknown as string;
  }

}

export class GuardDutyFetchDetectorDataSourcesDnsLogs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyGetDetectorRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDetector.DataSources.DNSLogs.Status', props);
    return resource.getResponseField('DataSources.DNSLogs.Status') as unknown as string;
  }

}

export class GuardDutyFetchDetectorDataSourcesFlowLogs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyGetDetectorRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDetector.DataSources.FlowLogs.Status', props);
    return resource.getResponseField('DataSources.FlowLogs.Status') as unknown as string;
  }

}

export class GuardDutyFetchDetectorDataSourcesS3Logs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyGetDetectorRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDetector.DataSources.S3Logs.Status', props);
    return resource.getResponseField('DataSources.S3Logs.Status') as unknown as string;
  }

}

export class GuardDutyFetchFilter extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyGetFilterRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
          FilterName: this.input.filterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFilter.Name', props);
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
          DetectorId: this.input.detectorId,
          FilterName: this.input.filterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFilter.Description', props);
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
          DetectorId: this.input.detectorId,
          FilterName: this.input.filterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFilter.Action', props);
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
          DetectorId: this.input.detectorId,
          FilterName: this.input.filterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFilter.Rank', props);
    return resource.getResponseField('Rank') as unknown as number;
  }

  public get findingCriteria(): GuardDutyFetchFilterFindingCriteria {
    return new GuardDutyFetchFilterFindingCriteria(this, 'FindingCriteria', this.__resources, this.input);
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
          DetectorId: this.input.detectorId,
          FilterName: this.input.filterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFilter.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class GuardDutyFetchFilterFindingCriteria extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyGetFilterRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
          FilterName: this.input.filterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFilter.FindingCriteria.Criterion', props);
    return resource.getResponseField('FindingCriteria.Criterion') as unknown as Record<string, shapes.GuardDutyCondition>;
  }

}

export class GuardDutyFetchFindings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyGetFindingsRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
          FindingIds: this.input.findingIds,
          SortCriteria: {
            AttributeName: this.input.sortCriteria?.attributeName,
            OrderBy: this.input.sortCriteria?.orderBy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFindings.Findings', props);
    return resource.getResponseField('Findings') as unknown as shapes.GuardDutyFinding[];
  }

}

export class GuardDutyFetchFindingsStatistics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyGetFindingsStatisticsRequest) {
    super(scope, id);
  }

  public get findingStatistics(): GuardDutyFetchFindingsStatisticsFindingStatistics {
    return new GuardDutyFetchFindingsStatisticsFindingStatistics(this, 'FindingStatistics', this.__resources, this.input);
  }

}

export class GuardDutyFetchFindingsStatisticsFindingStatistics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyGetFindingsStatisticsRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
          FindingStatisticTypes: this.input.findingStatisticTypes,
          FindingCriteria: {
            Criterion: this.input.findingCriteria?.criterion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFindingsStatistics.FindingStatistics.CountBySeverity', props);
    return resource.getResponseField('FindingStatistics.CountBySeverity') as unknown as Record<string, number>;
  }

}

export class GuardDutyFetchIpSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyGetIpSetRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
          IpSetId: this.input.ipSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIPSet.Name', props);
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
          DetectorId: this.input.detectorId,
          IpSetId: this.input.ipSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIPSet.Format', props);
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
          DetectorId: this.input.detectorId,
          IpSetId: this.input.ipSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIPSet.Location', props);
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
          DetectorId: this.input.detectorId,
          IpSetId: this.input.ipSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIPSet.Status', props);
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
          DetectorId: this.input.detectorId,
          IpSetId: this.input.ipSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIPSet.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class GuardDutyFetchInvitationsCount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetInvitationsCount.InvitationsCount', props);
    return resource.getResponseField('InvitationsCount') as unknown as number;
  }

}

export class GuardDutyFetchMasterAccount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyGetMasterAccountRequest) {
    super(scope, id);
  }

  public get master(): GuardDutyFetchMasterAccountMaster {
    return new GuardDutyFetchMasterAccountMaster(this, 'Master', this.__resources, this.input);
  }

}

export class GuardDutyFetchMasterAccountMaster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyGetMasterAccountRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMasterAccount.Master.AccountId', props);
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
          DetectorId: this.input.detectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMasterAccount.Master.InvitationId', props);
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
          DetectorId: this.input.detectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMasterAccount.Master.RelationshipStatus', props);
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
          DetectorId: this.input.detectorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMasterAccount.Master.InvitedAt', props);
    return resource.getResponseField('Master.InvitedAt') as unknown as string;
  }

}

export class GuardDutyFetchMemberDetectors extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyGetMemberDetectorsRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
          AccountIds: this.input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMemberDetectors.MemberDataSourceConfigurations', props);
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
          DetectorId: this.input.detectorId,
          AccountIds: this.input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMemberDetectors.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.GuardDutyUnprocessedAccount[];
  }

}

export class GuardDutyFetchMembers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyGetMembersRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
          AccountIds: this.input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMembers.Members', props);
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
          DetectorId: this.input.detectorId,
          AccountIds: this.input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMembers.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.GuardDutyUnprocessedAccount[];
  }

}

export class GuardDutyFetchThreatIntelSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyGetThreatIntelSetRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
          ThreatIntelSetId: this.input.threatIntelSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetThreatIntelSet.Name', props);
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
          DetectorId: this.input.detectorId,
          ThreatIntelSetId: this.input.threatIntelSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetThreatIntelSet.Format', props);
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
          DetectorId: this.input.detectorId,
          ThreatIntelSetId: this.input.threatIntelSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetThreatIntelSet.Location', props);
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
          DetectorId: this.input.detectorId,
          ThreatIntelSetId: this.input.threatIntelSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetThreatIntelSet.Status', props);
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
          DetectorId: this.input.detectorId,
          ThreatIntelSetId: this.input.threatIntelSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetThreatIntelSet.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class GuardDutyFetchUsageStatistics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyGetUsageStatisticsRequest) {
    super(scope, id);
  }

  public get usageStatistics(): GuardDutyFetchUsageStatisticsUsageStatistics {
    return new GuardDutyFetchUsageStatisticsUsageStatistics(this, 'UsageStatistics', this.__resources, this.input);
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
          DetectorId: this.input.detectorId,
          UsageStatisticType: this.input.usageStatisticType,
          UsageCriteria: {
            AccountIds: this.input.usageCriteria.accountIds,
            DataSources: this.input.usageCriteria.dataSources,
            Resources: this.input.usageCriteria.resources,
          },
          Unit: this.input.unit,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUsageStatistics.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GuardDutyFetchUsageStatisticsUsageStatistics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyGetUsageStatisticsRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
          UsageStatisticType: this.input.usageStatisticType,
          UsageCriteria: {
            AccountIds: this.input.usageCriteria.accountIds,
            DataSources: this.input.usageCriteria.dataSources,
            Resources: this.input.usageCriteria.resources,
          },
          Unit: this.input.unit,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUsageStatistics.UsageStatistics.SumByAccount', props);
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
          DetectorId: this.input.detectorId,
          UsageStatisticType: this.input.usageStatisticType,
          UsageCriteria: {
            AccountIds: this.input.usageCriteria.accountIds,
            DataSources: this.input.usageCriteria.dataSources,
            Resources: this.input.usageCriteria.resources,
          },
          Unit: this.input.unit,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUsageStatistics.UsageStatistics.SumByDataSource', props);
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
          DetectorId: this.input.detectorId,
          UsageStatisticType: this.input.usageStatisticType,
          UsageCriteria: {
            AccountIds: this.input.usageCriteria.accountIds,
            DataSources: this.input.usageCriteria.dataSources,
            Resources: this.input.usageCriteria.resources,
          },
          Unit: this.input.unit,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUsageStatistics.UsageStatistics.SumByResource', props);
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
          DetectorId: this.input.detectorId,
          UsageStatisticType: this.input.usageStatisticType,
          UsageCriteria: {
            AccountIds: this.input.usageCriteria.accountIds,
            DataSources: this.input.usageCriteria.dataSources,
            Resources: this.input.usageCriteria.resources,
          },
          Unit: this.input.unit,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUsageStatistics.UsageStatistics.TopResources', props);
    return resource.getResponseField('UsageStatistics.TopResources') as unknown as shapes.GuardDutyUsageResourceResult[];
  }

}

export class GuardDutyInviteMembers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyInviteMembersRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
          AccountIds: this.input.accountIds,
          DisableEmailNotification: this.input.disableEmailNotification,
          Message: this.input.message,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InviteMembers.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.GuardDutyUnprocessedAccount[];
  }

}

export class GuardDutyListDetectors extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyListDetectorsRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDetectors.DetectorIds', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDetectors.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GuardDutyListFilters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyListFiltersRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFilters.FilterNames', props);
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
          DetectorId: this.input.detectorId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFilters.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GuardDutyListFindings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyListFindingsRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
          FindingCriteria: {
            Criterion: this.input.findingCriteria?.criterion,
          },
          SortCriteria: {
            AttributeName: this.input.sortCriteria?.attributeName,
            OrderBy: this.input.sortCriteria?.orderBy,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFindings.FindingIds', props);
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
          DetectorId: this.input.detectorId,
          FindingCriteria: {
            Criterion: this.input.findingCriteria?.criterion,
          },
          SortCriteria: {
            AttributeName: this.input.sortCriteria?.attributeName,
            OrderBy: this.input.sortCriteria?.orderBy,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFindings.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GuardDutyListIpSets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyListIpSetsRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIPSets.IpSetIds', props);
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
          DetectorId: this.input.detectorId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIPSets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GuardDutyListInvitations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyListInvitationsRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInvitations.Invitations', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInvitations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GuardDutyListMembers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyListMembersRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          OnlyAssociated: this.input.onlyAssociated,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMembers.Members', props);
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
          DetectorId: this.input.detectorId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          OnlyAssociated: this.input.onlyAssociated,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMembers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GuardDutyListOrganizationAdminAccounts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyListOrganizationAdminAccountsRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOrganizationAdminAccounts.AdminAccounts', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOrganizationAdminAccounts.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GuardDutyListPublishingDestinations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyListPublishingDestinationsRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPublishingDestinations.Destinations', props);
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
          DetectorId: this.input.detectorId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPublishingDestinations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GuardDutyListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyListTagsForResourceRequest) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class GuardDutyListThreatIntelSets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyListThreatIntelSetsRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListThreatIntelSets.ThreatIntelSetIds', props);
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
          DetectorId: this.input.detectorId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListThreatIntelSets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GuardDutyStartMonitoringMembers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyStartMonitoringMembersRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
          AccountIds: this.input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMonitoringMembers.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.GuardDutyUnprocessedAccount[];
  }

}

export class GuardDutyStopMonitoringMembers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyStopMonitoringMembersRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
          AccountIds: this.input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopMonitoringMembers.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.GuardDutyUnprocessedAccount[];
  }

}

export class GuardDutyUpdateFilter extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyUpdateFilterRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
          FilterName: this.input.filterName,
          Description: this.input.description,
          Action: this.input.action,
          Rank: this.input.rank,
          FindingCriteria: {
            Criterion: this.input.findingCriteria?.criterion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFilter.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GuardDutyUpdateMemberDetectors extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GuardDutyUpdateMemberDetectorsRequest) {
    super(scope, id);
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
          DetectorId: this.input.detectorId,
          AccountIds: this.input.accountIds,
          DataSources: {
            S3Logs: {
              Enable: this.input.dataSources?.s3Logs?.enable,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMemberDetectors.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.GuardDutyUnprocessedAccount[];
  }

}

