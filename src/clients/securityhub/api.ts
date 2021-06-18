import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class SecurityHubClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public acceptInvitation(input: shapes.SecurityHubAcceptInvitationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptInvitation',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.AcceptInvitation'),
        parameters: {
          MasterId: input.masterId,
          InvitationId: input.invitationId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AcceptInvitation', props);
  }

  public batchDisableStandards(input: shapes.SecurityHubBatchDisableStandardsRequest): SecurityHubBatchDisableStandards {
    return new SecurityHubBatchDisableStandards(this, 'BatchDisableStandards', this.__resources, input);
  }

  public batchEnableStandards(input: shapes.SecurityHubBatchEnableStandardsRequest): SecurityHubBatchEnableStandards {
    return new SecurityHubBatchEnableStandards(this, 'BatchEnableStandards', this.__resources, input);
  }

  public batchImportFindings(input: shapes.SecurityHubBatchImportFindingsRequest): SecurityHubBatchImportFindings {
    return new SecurityHubBatchImportFindings(this, 'BatchImportFindings', this.__resources, input);
  }

  public batchUpdateFindings(input: shapes.SecurityHubBatchUpdateFindingsRequest): SecurityHubBatchUpdateFindings {
    return new SecurityHubBatchUpdateFindings(this, 'BatchUpdateFindings', this.__resources, input);
  }

  public createActionTarget(input: shapes.SecurityHubCreateActionTargetRequest): SecurityHubCreateActionTarget {
    return new SecurityHubCreateActionTarget(this, 'CreateActionTarget', this.__resources, input);
  }

  public createInsight(input: shapes.SecurityHubCreateInsightRequest): SecurityHubCreateInsight {
    return new SecurityHubCreateInsight(this, 'CreateInsight', this.__resources, input);
  }

  public createMembers(input: shapes.SecurityHubCreateMembersRequest): SecurityHubCreateMembers {
    return new SecurityHubCreateMembers(this, 'CreateMembers', this.__resources, input);
  }

  public declineInvitations(input: shapes.SecurityHubDeclineInvitationsRequest): SecurityHubDeclineInvitations {
    return new SecurityHubDeclineInvitations(this, 'DeclineInvitations', this.__resources, input);
  }

  public deleteActionTarget(input: shapes.SecurityHubDeleteActionTargetRequest): SecurityHubDeleteActionTarget {
    return new SecurityHubDeleteActionTarget(this, 'DeleteActionTarget', this.__resources, input);
  }

  public deleteInsight(input: shapes.SecurityHubDeleteInsightRequest): SecurityHubDeleteInsight {
    return new SecurityHubDeleteInsight(this, 'DeleteInsight', this.__resources, input);
  }

  public deleteInvitations(input: shapes.SecurityHubDeleteInvitationsRequest): SecurityHubDeleteInvitations {
    return new SecurityHubDeleteInvitations(this, 'DeleteInvitations', this.__resources, input);
  }

  public deleteMembers(input: shapes.SecurityHubDeleteMembersRequest): SecurityHubDeleteMembers {
    return new SecurityHubDeleteMembers(this, 'DeleteMembers', this.__resources, input);
  }

  public describeActionTargets(input: shapes.SecurityHubDescribeActionTargetsRequest): SecurityHubDescribeActionTargets {
    return new SecurityHubDescribeActionTargets(this, 'DescribeActionTargets', this.__resources, input);
  }

  public describeHub(input: shapes.SecurityHubDescribeHubRequest): SecurityHubDescribeHub {
    return new SecurityHubDescribeHub(this, 'DescribeHub', this.__resources, input);
  }

  public describeOrganizationConfiguration(): SecurityHubDescribeOrganizationConfiguration {
    return new SecurityHubDescribeOrganizationConfiguration(this, 'DescribeOrganizationConfiguration', this.__resources);
  }

  public describeProducts(input: shapes.SecurityHubDescribeProductsRequest): SecurityHubDescribeProducts {
    return new SecurityHubDescribeProducts(this, 'DescribeProducts', this.__resources, input);
  }

  public describeStandards(input: shapes.SecurityHubDescribeStandardsRequest): SecurityHubDescribeStandards {
    return new SecurityHubDescribeStandards(this, 'DescribeStandards', this.__resources, input);
  }

  public describeStandardsControls(input: shapes.SecurityHubDescribeStandardsControlsRequest): SecurityHubDescribeStandardsControls {
    return new SecurityHubDescribeStandardsControls(this, 'DescribeStandardsControls', this.__resources, input);
  }

  public disableImportFindingsForProduct(input: shapes.SecurityHubDisableImportFindingsForProductRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disableImportFindingsForProduct',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.DisableImportFindingsForProduct'),
        parameters: {
          ProductSubscriptionArn: input.productSubscriptionArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisableImportFindingsForProduct', props);
  }

  public disableOrganizationAdminAccount(input: shapes.SecurityHubDisableOrganizationAdminAccountRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disableOrganizationAdminAccount',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.DisableOrganizationAdminAccount'),
        parameters: {
          AdminAccountId: input.adminAccountId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisableOrganizationAdminAccount', props);
  }

  public disableSecurityHub(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disableSecurityHub',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.DisableSecurityHub'),
        parameters: {
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisableSecurityHub', props);
  }

  public disassociateFromMasterAccount(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateFromMasterAccount',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.DisassociateFromMasterAccount'),
        parameters: {
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateFromMasterAccount', props);
  }

  public disassociateMembers(input: shapes.SecurityHubDisassociateMembersRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateMembers',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.DisassociateMembers'),
        parameters: {
          AccountIds: input.accountIds,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateMembers', props);
  }

  public enableImportFindingsForProduct(input: shapes.SecurityHubEnableImportFindingsForProductRequest): SecurityHubEnableImportFindingsForProduct {
    return new SecurityHubEnableImportFindingsForProduct(this, 'EnableImportFindingsForProduct', this.__resources, input);
  }

  public enableOrganizationAdminAccount(input: shapes.SecurityHubEnableOrganizationAdminAccountRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableOrganizationAdminAccount',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.EnableOrganizationAdminAccount'),
        parameters: {
          AdminAccountId: input.adminAccountId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'EnableOrganizationAdminAccount', props);
  }

  public enableSecurityHub(input: shapes.SecurityHubEnableSecurityHubRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableSecurityHub',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.EnableSecurityHub'),
        parameters: {
          Tags: input.tags,
          EnableDefaultStandards: input.enableDefaultStandards,
        },
      },
    };
    new cr.AwsCustomResource(this, 'EnableSecurityHub', props);
  }

  public fetchEnabledStandards(input: shapes.SecurityHubGetEnabledStandardsRequest): SecurityHubFetchEnabledStandards {
    return new SecurityHubFetchEnabledStandards(this, 'FetchEnabledStandards', this.__resources, input);
  }

  public fetchFindings(input: shapes.SecurityHubGetFindingsRequest): SecurityHubFetchFindings {
    return new SecurityHubFetchFindings(this, 'FetchFindings', this.__resources, input);
  }

  public fetchInsightResults(input: shapes.SecurityHubGetInsightResultsRequest): SecurityHubFetchInsightResults {
    return new SecurityHubFetchInsightResults(this, 'FetchInsightResults', this.__resources, input);
  }

  public fetchInsights(input: shapes.SecurityHubGetInsightsRequest): SecurityHubFetchInsights {
    return new SecurityHubFetchInsights(this, 'FetchInsights', this.__resources, input);
  }

  public fetchInvitationsCount(): SecurityHubFetchInvitationsCount {
    return new SecurityHubFetchInvitationsCount(this, 'FetchInvitationsCount', this.__resources);
  }

  public fetchMasterAccount(): SecurityHubFetchMasterAccount {
    return new SecurityHubFetchMasterAccount(this, 'FetchMasterAccount', this.__resources);
  }

  public fetchMembers(input: shapes.SecurityHubGetMembersRequest): SecurityHubFetchMembers {
    return new SecurityHubFetchMembers(this, 'FetchMembers', this.__resources, input);
  }

  public inviteMembers(input: shapes.SecurityHubInviteMembersRequest): SecurityHubInviteMembers {
    return new SecurityHubInviteMembers(this, 'InviteMembers', this.__resources, input);
  }

  public listEnabledProductsForImport(input: shapes.SecurityHubListEnabledProductsForImportRequest): SecurityHubListEnabledProductsForImport {
    return new SecurityHubListEnabledProductsForImport(this, 'ListEnabledProductsForImport', this.__resources, input);
  }

  public listInvitations(input: shapes.SecurityHubListInvitationsRequest): SecurityHubListInvitations {
    return new SecurityHubListInvitations(this, 'ListInvitations', this.__resources, input);
  }

  public listMembers(input: shapes.SecurityHubListMembersRequest): SecurityHubListMembers {
    return new SecurityHubListMembers(this, 'ListMembers', this.__resources, input);
  }

  public listOrganizationAdminAccounts(input: shapes.SecurityHubListOrganizationAdminAccountsRequest): SecurityHubListOrganizationAdminAccounts {
    return new SecurityHubListOrganizationAdminAccounts(this, 'ListOrganizationAdminAccounts', this.__resources, input);
  }

  public listTagsForResource(input: shapes.SecurityHubListTagsForResourceRequest): SecurityHubListTagsForResource {
    return new SecurityHubListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public tagResource(input: shapes.SecurityHubTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.SecurityHubUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateActionTarget(input: shapes.SecurityHubUpdateActionTargetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateActionTarget',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.UpdateActionTarget'),
        parameters: {
          ActionTargetArn: input.actionTargetArn,
          Name: input.name,
          Description: input.description,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateActionTarget', props);
  }

  public updateFindings(input: shapes.SecurityHubUpdateFindingsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFindings',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.UpdateFindings'),
        parameters: {
          Filters: {
            ProductArn: input.filters.productArn,
            AwsAccountId: input.filters.awsAccountId,
            Id: input.filters.id,
            GeneratorId: input.filters.generatorId,
            Type: input.filters.type,
            FirstObservedAt: input.filters.firstObservedAt,
            LastObservedAt: input.filters.lastObservedAt,
            CreatedAt: input.filters.createdAt,
            UpdatedAt: input.filters.updatedAt,
            SeverityProduct: input.filters.severityProduct,
            SeverityNormalized: input.filters.severityNormalized,
            SeverityLabel: input.filters.severityLabel,
            Confidence: input.filters.confidence,
            Criticality: input.filters.criticality,
            Title: input.filters.title,
            Description: input.filters.description,
            RecommendationText: input.filters.recommendationText,
            SourceUrl: input.filters.sourceUrl,
            ProductFields: input.filters.productFields,
            ProductName: input.filters.productName,
            CompanyName: input.filters.companyName,
            UserDefinedFields: input.filters.userDefinedFields,
            MalwareName: input.filters.malwareName,
            MalwareType: input.filters.malwareType,
            MalwarePath: input.filters.malwarePath,
            MalwareState: input.filters.malwareState,
            NetworkDirection: input.filters.networkDirection,
            NetworkProtocol: input.filters.networkProtocol,
            NetworkSourceIpV4: input.filters.networkSourceIpV4,
            NetworkSourceIpV6: input.filters.networkSourceIpV6,
            NetworkSourcePort: input.filters.networkSourcePort,
            NetworkSourceDomain: input.filters.networkSourceDomain,
            NetworkSourceMac: input.filters.networkSourceMac,
            NetworkDestinationIpV4: input.filters.networkDestinationIpV4,
            NetworkDestinationIpV6: input.filters.networkDestinationIpV6,
            NetworkDestinationPort: input.filters.networkDestinationPort,
            NetworkDestinationDomain: input.filters.networkDestinationDomain,
            ProcessName: input.filters.processName,
            ProcessPath: input.filters.processPath,
            ProcessPid: input.filters.processPid,
            ProcessParentPid: input.filters.processParentPid,
            ProcessLaunchedAt: input.filters.processLaunchedAt,
            ProcessTerminatedAt: input.filters.processTerminatedAt,
            ThreatIntelIndicatorType: input.filters.threatIntelIndicatorType,
            ThreatIntelIndicatorValue: input.filters.threatIntelIndicatorValue,
            ThreatIntelIndicatorCategory: input.filters.threatIntelIndicatorCategory,
            ThreatIntelIndicatorLastObservedAt: input.filters.threatIntelIndicatorLastObservedAt,
            ThreatIntelIndicatorSource: input.filters.threatIntelIndicatorSource,
            ThreatIntelIndicatorSourceUrl: input.filters.threatIntelIndicatorSourceUrl,
            ResourceType: input.filters.resourceType,
            ResourceId: input.filters.resourceId,
            ResourcePartition: input.filters.resourcePartition,
            ResourceRegion: input.filters.resourceRegion,
            ResourceTags: input.filters.resourceTags,
            ResourceAwsEc2InstanceType: input.filters.resourceAwsEc2InstanceType,
            ResourceAwsEc2InstanceImageId: input.filters.resourceAwsEc2InstanceImageId,
            ResourceAwsEc2InstanceIpV4Addresses: input.filters.resourceAwsEc2InstanceIpV4Addresses,
            ResourceAwsEc2InstanceIpV6Addresses: input.filters.resourceAwsEc2InstanceIpV6Addresses,
            ResourceAwsEc2InstanceKeyName: input.filters.resourceAwsEc2InstanceKeyName,
            ResourceAwsEc2InstanceIamInstanceProfileArn: input.filters.resourceAwsEc2InstanceIamInstanceProfileArn,
            ResourceAwsEc2InstanceVpcId: input.filters.resourceAwsEc2InstanceVpcId,
            ResourceAwsEc2InstanceSubnetId: input.filters.resourceAwsEc2InstanceSubnetId,
            ResourceAwsEc2InstanceLaunchedAt: input.filters.resourceAwsEc2InstanceLaunchedAt,
            ResourceAwsS3BucketOwnerId: input.filters.resourceAwsS3BucketOwnerId,
            ResourceAwsS3BucketOwnerName: input.filters.resourceAwsS3BucketOwnerName,
            ResourceAwsIamAccessKeyUserName: input.filters.resourceAwsIamAccessKeyUserName,
            ResourceAwsIamAccessKeyStatus: input.filters.resourceAwsIamAccessKeyStatus,
            ResourceAwsIamAccessKeyCreatedAt: input.filters.resourceAwsIamAccessKeyCreatedAt,
            ResourceContainerName: input.filters.resourceContainerName,
            ResourceContainerImageId: input.filters.resourceContainerImageId,
            ResourceContainerImageName: input.filters.resourceContainerImageName,
            ResourceContainerLaunchedAt: input.filters.resourceContainerLaunchedAt,
            ResourceDetailsOther: input.filters.resourceDetailsOther,
            ComplianceStatus: input.filters.complianceStatus,
            VerificationState: input.filters.verificationState,
            WorkflowState: input.filters.workflowState,
            WorkflowStatus: input.filters.workflowStatus,
            RecordState: input.filters.recordState,
            RelatedFindingsProductArn: input.filters.relatedFindingsProductArn,
            RelatedFindingsId: input.filters.relatedFindingsId,
            NoteText: input.filters.noteText,
            NoteUpdatedAt: input.filters.noteUpdatedAt,
            NoteUpdatedBy: input.filters.noteUpdatedBy,
            Keyword: input.filters.keyword,
          },
          Note: {
            Text: input.note?.text,
            UpdatedBy: input.note?.updatedBy,
          },
          RecordState: input.recordState,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateFindings', props);
  }

  public updateInsight(input: shapes.SecurityHubUpdateInsightRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateInsight',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.UpdateInsight'),
        parameters: {
          InsightArn: input.insightArn,
          Name: input.name,
          Filters: {
            ProductArn: input.filters?.productArn,
            AwsAccountId: input.filters?.awsAccountId,
            Id: input.filters?.id,
            GeneratorId: input.filters?.generatorId,
            Type: input.filters?.type,
            FirstObservedAt: input.filters?.firstObservedAt,
            LastObservedAt: input.filters?.lastObservedAt,
            CreatedAt: input.filters?.createdAt,
            UpdatedAt: input.filters?.updatedAt,
            SeverityProduct: input.filters?.severityProduct,
            SeverityNormalized: input.filters?.severityNormalized,
            SeverityLabel: input.filters?.severityLabel,
            Confidence: input.filters?.confidence,
            Criticality: input.filters?.criticality,
            Title: input.filters?.title,
            Description: input.filters?.description,
            RecommendationText: input.filters?.recommendationText,
            SourceUrl: input.filters?.sourceUrl,
            ProductFields: input.filters?.productFields,
            ProductName: input.filters?.productName,
            CompanyName: input.filters?.companyName,
            UserDefinedFields: input.filters?.userDefinedFields,
            MalwareName: input.filters?.malwareName,
            MalwareType: input.filters?.malwareType,
            MalwarePath: input.filters?.malwarePath,
            MalwareState: input.filters?.malwareState,
            NetworkDirection: input.filters?.networkDirection,
            NetworkProtocol: input.filters?.networkProtocol,
            NetworkSourceIpV4: input.filters?.networkSourceIpV4,
            NetworkSourceIpV6: input.filters?.networkSourceIpV6,
            NetworkSourcePort: input.filters?.networkSourcePort,
            NetworkSourceDomain: input.filters?.networkSourceDomain,
            NetworkSourceMac: input.filters?.networkSourceMac,
            NetworkDestinationIpV4: input.filters?.networkDestinationIpV4,
            NetworkDestinationIpV6: input.filters?.networkDestinationIpV6,
            NetworkDestinationPort: input.filters?.networkDestinationPort,
            NetworkDestinationDomain: input.filters?.networkDestinationDomain,
            ProcessName: input.filters?.processName,
            ProcessPath: input.filters?.processPath,
            ProcessPid: input.filters?.processPid,
            ProcessParentPid: input.filters?.processParentPid,
            ProcessLaunchedAt: input.filters?.processLaunchedAt,
            ProcessTerminatedAt: input.filters?.processTerminatedAt,
            ThreatIntelIndicatorType: input.filters?.threatIntelIndicatorType,
            ThreatIntelIndicatorValue: input.filters?.threatIntelIndicatorValue,
            ThreatIntelIndicatorCategory: input.filters?.threatIntelIndicatorCategory,
            ThreatIntelIndicatorLastObservedAt: input.filters?.threatIntelIndicatorLastObservedAt,
            ThreatIntelIndicatorSource: input.filters?.threatIntelIndicatorSource,
            ThreatIntelIndicatorSourceUrl: input.filters?.threatIntelIndicatorSourceUrl,
            ResourceType: input.filters?.resourceType,
            ResourceId: input.filters?.resourceId,
            ResourcePartition: input.filters?.resourcePartition,
            ResourceRegion: input.filters?.resourceRegion,
            ResourceTags: input.filters?.resourceTags,
            ResourceAwsEc2InstanceType: input.filters?.resourceAwsEc2InstanceType,
            ResourceAwsEc2InstanceImageId: input.filters?.resourceAwsEc2InstanceImageId,
            ResourceAwsEc2InstanceIpV4Addresses: input.filters?.resourceAwsEc2InstanceIpV4Addresses,
            ResourceAwsEc2InstanceIpV6Addresses: input.filters?.resourceAwsEc2InstanceIpV6Addresses,
            ResourceAwsEc2InstanceKeyName: input.filters?.resourceAwsEc2InstanceKeyName,
            ResourceAwsEc2InstanceIamInstanceProfileArn: input.filters?.resourceAwsEc2InstanceIamInstanceProfileArn,
            ResourceAwsEc2InstanceVpcId: input.filters?.resourceAwsEc2InstanceVpcId,
            ResourceAwsEc2InstanceSubnetId: input.filters?.resourceAwsEc2InstanceSubnetId,
            ResourceAwsEc2InstanceLaunchedAt: input.filters?.resourceAwsEc2InstanceLaunchedAt,
            ResourceAwsS3BucketOwnerId: input.filters?.resourceAwsS3BucketOwnerId,
            ResourceAwsS3BucketOwnerName: input.filters?.resourceAwsS3BucketOwnerName,
            ResourceAwsIamAccessKeyUserName: input.filters?.resourceAwsIamAccessKeyUserName,
            ResourceAwsIamAccessKeyStatus: input.filters?.resourceAwsIamAccessKeyStatus,
            ResourceAwsIamAccessKeyCreatedAt: input.filters?.resourceAwsIamAccessKeyCreatedAt,
            ResourceContainerName: input.filters?.resourceContainerName,
            ResourceContainerImageId: input.filters?.resourceContainerImageId,
            ResourceContainerImageName: input.filters?.resourceContainerImageName,
            ResourceContainerLaunchedAt: input.filters?.resourceContainerLaunchedAt,
            ResourceDetailsOther: input.filters?.resourceDetailsOther,
            ComplianceStatus: input.filters?.complianceStatus,
            VerificationState: input.filters?.verificationState,
            WorkflowState: input.filters?.workflowState,
            WorkflowStatus: input.filters?.workflowStatus,
            RecordState: input.filters?.recordState,
            RelatedFindingsProductArn: input.filters?.relatedFindingsProductArn,
            RelatedFindingsId: input.filters?.relatedFindingsId,
            NoteText: input.filters?.noteText,
            NoteUpdatedAt: input.filters?.noteUpdatedAt,
            NoteUpdatedBy: input.filters?.noteUpdatedBy,
            Keyword: input.filters?.keyword,
          },
          GroupByAttribute: input.groupByAttribute,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateInsight', props);
  }

  public updateOrganizationConfiguration(input: shapes.SecurityHubUpdateOrganizationConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateOrganizationConfiguration',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.UpdateOrganizationConfiguration'),
        parameters: {
          AutoEnable: input.autoEnable,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateOrganizationConfiguration', props);
  }

  public updateSecurityHubConfiguration(input: shapes.SecurityHubUpdateSecurityHubConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSecurityHubConfiguration',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.UpdateSecurityHubConfiguration'),
        parameters: {
          AutoEnableControls: input.autoEnableControls,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateSecurityHubConfiguration', props);
  }

  public updateStandardsControl(input: shapes.SecurityHubUpdateStandardsControlRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStandardsControl',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.UpdateStandardsControl'),
        parameters: {
          StandardsControlArn: input.standardsControlArn,
          ControlStatus: input.controlStatus,
          DisabledReason: input.disabledReason,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateStandardsControl', props);
  }

}

export class SecurityHubBatchDisableStandards extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecurityHubBatchDisableStandardsRequest) {
    super(scope, id);
  }

  public get standardsSubscriptions(): shapes.SecurityHubStandardsSubscription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDisableStandards',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.BatchDisableStandards.StandardsSubscriptions'),
        outputPath: 'StandardsSubscriptions',
        parameters: {
          StandardsSubscriptionArns: this.input.standardsSubscriptionArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDisableStandards.StandardsSubscriptions', props);
    return resource.getResponseField('StandardsSubscriptions') as unknown as shapes.SecurityHubStandardsSubscription[];
  }

}

export class SecurityHubBatchEnableStandards extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecurityHubBatchEnableStandardsRequest) {
    super(scope, id);
  }

  public get standardsSubscriptions(): shapes.SecurityHubStandardsSubscription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchEnableStandards',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.BatchEnableStandards.StandardsSubscriptions'),
        outputPath: 'StandardsSubscriptions',
        parameters: {
          StandardsSubscriptionRequests: this.input.standardsSubscriptionRequests,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchEnableStandards.StandardsSubscriptions', props);
    return resource.getResponseField('StandardsSubscriptions') as unknown as shapes.SecurityHubStandardsSubscription[];
  }

}

export class SecurityHubBatchImportFindings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecurityHubBatchImportFindingsRequest) {
    super(scope, id);
  }

  public get failedCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchImportFindings',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.BatchImportFindings.FailedCount'),
        outputPath: 'FailedCount',
        parameters: {
          Findings: this.input.findings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchImportFindings.FailedCount', props);
    return resource.getResponseField('FailedCount') as unknown as number;
  }

  public get successCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchImportFindings',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.BatchImportFindings.SuccessCount'),
        outputPath: 'SuccessCount',
        parameters: {
          Findings: this.input.findings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchImportFindings.SuccessCount', props);
    return resource.getResponseField('SuccessCount') as unknown as number;
  }

  public get failedFindings(): shapes.SecurityHubImportFindingsError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchImportFindings',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.BatchImportFindings.FailedFindings'),
        outputPath: 'FailedFindings',
        parameters: {
          Findings: this.input.findings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchImportFindings.FailedFindings', props);
    return resource.getResponseField('FailedFindings') as unknown as shapes.SecurityHubImportFindingsError[];
  }

}

export class SecurityHubBatchUpdateFindings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecurityHubBatchUpdateFindingsRequest) {
    super(scope, id);
  }

  public get processedFindings(): shapes.SecurityHubAwsSecurityFindingIdentifier[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchUpdateFindings',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.BatchUpdateFindings.ProcessedFindings'),
        outputPath: 'ProcessedFindings',
        parameters: {
          FindingIdentifiers: this.input.findingIdentifiers,
          Note: {
            Text: this.input.note?.text,
            UpdatedBy: this.input.note?.updatedBy,
          },
          Severity: {
            Normalized: this.input.severity?.normalized,
            Product: this.input.severity?.product,
            Label: this.input.severity?.label,
          },
          VerificationState: this.input.verificationState,
          Confidence: this.input.confidence,
          Criticality: this.input.criticality,
          Types: this.input.types,
          UserDefinedFields: this.input.userDefinedFields,
          Workflow: {
            Status: this.input.workflow?.status,
          },
          RelatedFindings: this.input.relatedFindings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchUpdateFindings.ProcessedFindings', props);
    return resource.getResponseField('ProcessedFindings') as unknown as shapes.SecurityHubAwsSecurityFindingIdentifier[];
  }

  public get unprocessedFindings(): shapes.SecurityHubBatchUpdateFindingsUnprocessedFinding[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchUpdateFindings',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.BatchUpdateFindings.UnprocessedFindings'),
        outputPath: 'UnprocessedFindings',
        parameters: {
          FindingIdentifiers: this.input.findingIdentifiers,
          Note: {
            Text: this.input.note?.text,
            UpdatedBy: this.input.note?.updatedBy,
          },
          Severity: {
            Normalized: this.input.severity?.normalized,
            Product: this.input.severity?.product,
            Label: this.input.severity?.label,
          },
          VerificationState: this.input.verificationState,
          Confidence: this.input.confidence,
          Criticality: this.input.criticality,
          Types: this.input.types,
          UserDefinedFields: this.input.userDefinedFields,
          Workflow: {
            Status: this.input.workflow?.status,
          },
          RelatedFindings: this.input.relatedFindings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchUpdateFindings.UnprocessedFindings', props);
    return resource.getResponseField('UnprocessedFindings') as unknown as shapes.SecurityHubBatchUpdateFindingsUnprocessedFinding[];
  }

}

export class SecurityHubCreateActionTarget extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecurityHubCreateActionTargetRequest) {
    super(scope, id);
  }

  public get actionTargetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createActionTarget',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.CreateActionTarget.ActionTargetArn'),
        outputPath: 'ActionTargetArn',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateActionTarget.ActionTargetArn', props);
    return resource.getResponseField('ActionTargetArn') as unknown as string;
  }

}

export class SecurityHubCreateInsight extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecurityHubCreateInsightRequest) {
    super(scope, id);
  }

  public get insightArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInsight',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.CreateInsight.InsightArn'),
        outputPath: 'InsightArn',
        parameters: {
          Name: this.input.name,
          Filters: {
            ProductArn: this.input.filters.productArn,
            AwsAccountId: this.input.filters.awsAccountId,
            Id: this.input.filters.id,
            GeneratorId: this.input.filters.generatorId,
            Type: this.input.filters.type,
            FirstObservedAt: this.input.filters.firstObservedAt,
            LastObservedAt: this.input.filters.lastObservedAt,
            CreatedAt: this.input.filters.createdAt,
            UpdatedAt: this.input.filters.updatedAt,
            SeverityProduct: this.input.filters.severityProduct,
            SeverityNormalized: this.input.filters.severityNormalized,
            SeverityLabel: this.input.filters.severityLabel,
            Confidence: this.input.filters.confidence,
            Criticality: this.input.filters.criticality,
            Title: this.input.filters.title,
            Description: this.input.filters.description,
            RecommendationText: this.input.filters.recommendationText,
            SourceUrl: this.input.filters.sourceUrl,
            ProductFields: this.input.filters.productFields,
            ProductName: this.input.filters.productName,
            CompanyName: this.input.filters.companyName,
            UserDefinedFields: this.input.filters.userDefinedFields,
            MalwareName: this.input.filters.malwareName,
            MalwareType: this.input.filters.malwareType,
            MalwarePath: this.input.filters.malwarePath,
            MalwareState: this.input.filters.malwareState,
            NetworkDirection: this.input.filters.networkDirection,
            NetworkProtocol: this.input.filters.networkProtocol,
            NetworkSourceIpV4: this.input.filters.networkSourceIpV4,
            NetworkSourceIpV6: this.input.filters.networkSourceIpV6,
            NetworkSourcePort: this.input.filters.networkSourcePort,
            NetworkSourceDomain: this.input.filters.networkSourceDomain,
            NetworkSourceMac: this.input.filters.networkSourceMac,
            NetworkDestinationIpV4: this.input.filters.networkDestinationIpV4,
            NetworkDestinationIpV6: this.input.filters.networkDestinationIpV6,
            NetworkDestinationPort: this.input.filters.networkDestinationPort,
            NetworkDestinationDomain: this.input.filters.networkDestinationDomain,
            ProcessName: this.input.filters.processName,
            ProcessPath: this.input.filters.processPath,
            ProcessPid: this.input.filters.processPid,
            ProcessParentPid: this.input.filters.processParentPid,
            ProcessLaunchedAt: this.input.filters.processLaunchedAt,
            ProcessTerminatedAt: this.input.filters.processTerminatedAt,
            ThreatIntelIndicatorType: this.input.filters.threatIntelIndicatorType,
            ThreatIntelIndicatorValue: this.input.filters.threatIntelIndicatorValue,
            ThreatIntelIndicatorCategory: this.input.filters.threatIntelIndicatorCategory,
            ThreatIntelIndicatorLastObservedAt: this.input.filters.threatIntelIndicatorLastObservedAt,
            ThreatIntelIndicatorSource: this.input.filters.threatIntelIndicatorSource,
            ThreatIntelIndicatorSourceUrl: this.input.filters.threatIntelIndicatorSourceUrl,
            ResourceType: this.input.filters.resourceType,
            ResourceId: this.input.filters.resourceId,
            ResourcePartition: this.input.filters.resourcePartition,
            ResourceRegion: this.input.filters.resourceRegion,
            ResourceTags: this.input.filters.resourceTags,
            ResourceAwsEc2InstanceType: this.input.filters.resourceAwsEc2InstanceType,
            ResourceAwsEc2InstanceImageId: this.input.filters.resourceAwsEc2InstanceImageId,
            ResourceAwsEc2InstanceIpV4Addresses: this.input.filters.resourceAwsEc2InstanceIpV4Addresses,
            ResourceAwsEc2InstanceIpV6Addresses: this.input.filters.resourceAwsEc2InstanceIpV6Addresses,
            ResourceAwsEc2InstanceKeyName: this.input.filters.resourceAwsEc2InstanceKeyName,
            ResourceAwsEc2InstanceIamInstanceProfileArn: this.input.filters.resourceAwsEc2InstanceIamInstanceProfileArn,
            ResourceAwsEc2InstanceVpcId: this.input.filters.resourceAwsEc2InstanceVpcId,
            ResourceAwsEc2InstanceSubnetId: this.input.filters.resourceAwsEc2InstanceSubnetId,
            ResourceAwsEc2InstanceLaunchedAt: this.input.filters.resourceAwsEc2InstanceLaunchedAt,
            ResourceAwsS3BucketOwnerId: this.input.filters.resourceAwsS3BucketOwnerId,
            ResourceAwsS3BucketOwnerName: this.input.filters.resourceAwsS3BucketOwnerName,
            ResourceAwsIamAccessKeyUserName: this.input.filters.resourceAwsIamAccessKeyUserName,
            ResourceAwsIamAccessKeyStatus: this.input.filters.resourceAwsIamAccessKeyStatus,
            ResourceAwsIamAccessKeyCreatedAt: this.input.filters.resourceAwsIamAccessKeyCreatedAt,
            ResourceContainerName: this.input.filters.resourceContainerName,
            ResourceContainerImageId: this.input.filters.resourceContainerImageId,
            ResourceContainerImageName: this.input.filters.resourceContainerImageName,
            ResourceContainerLaunchedAt: this.input.filters.resourceContainerLaunchedAt,
            ResourceDetailsOther: this.input.filters.resourceDetailsOther,
            ComplianceStatus: this.input.filters.complianceStatus,
            VerificationState: this.input.filters.verificationState,
            WorkflowState: this.input.filters.workflowState,
            WorkflowStatus: this.input.filters.workflowStatus,
            RecordState: this.input.filters.recordState,
            RelatedFindingsProductArn: this.input.filters.relatedFindingsProductArn,
            RelatedFindingsId: this.input.filters.relatedFindingsId,
            NoteText: this.input.filters.noteText,
            NoteUpdatedAt: this.input.filters.noteUpdatedAt,
            NoteUpdatedBy: this.input.filters.noteUpdatedBy,
            Keyword: this.input.filters.keyword,
          },
          GroupByAttribute: this.input.groupByAttribute,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInsight.InsightArn', props);
    return resource.getResponseField('InsightArn') as unknown as string;
  }

}

export class SecurityHubCreateMembers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecurityHubCreateMembersRequest) {
    super(scope, id);
  }

  public get unprocessedAccounts(): shapes.SecurityHubResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMembers',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.CreateMembers.UnprocessedAccounts'),
        outputPath: 'UnprocessedAccounts',
        parameters: {
          AccountDetails: this.input.accountDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMembers.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.SecurityHubResult[];
  }

}

export class SecurityHubDeclineInvitations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecurityHubDeclineInvitationsRequest) {
    super(scope, id);
  }

  public get unprocessedAccounts(): shapes.SecurityHubResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'declineInvitations',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.DeclineInvitations.UnprocessedAccounts'),
        outputPath: 'UnprocessedAccounts',
        parameters: {
          AccountIds: this.input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeclineInvitations.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.SecurityHubResult[];
  }

}

export class SecurityHubDeleteActionTarget extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecurityHubDeleteActionTargetRequest) {
    super(scope, id);
  }

  public get actionTargetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteActionTarget',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.DeleteActionTarget.ActionTargetArn'),
        outputPath: 'ActionTargetArn',
        parameters: {
          ActionTargetArn: this.input.actionTargetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteActionTarget.ActionTargetArn', props);
    return resource.getResponseField('ActionTargetArn') as unknown as string;
  }

}

export class SecurityHubDeleteInsight extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecurityHubDeleteInsightRequest) {
    super(scope, id);
  }

  public get insightArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteInsight',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.DeleteInsight.InsightArn'),
        outputPath: 'InsightArn',
        parameters: {
          InsightArn: this.input.insightArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteInsight.InsightArn', props);
    return resource.getResponseField('InsightArn') as unknown as string;
  }

}

export class SecurityHubDeleteInvitations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecurityHubDeleteInvitationsRequest) {
    super(scope, id);
  }

  public get unprocessedAccounts(): shapes.SecurityHubResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteInvitations',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.DeleteInvitations.UnprocessedAccounts'),
        outputPath: 'UnprocessedAccounts',
        parameters: {
          AccountIds: this.input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteInvitations.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.SecurityHubResult[];
  }

}

export class SecurityHubDeleteMembers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecurityHubDeleteMembersRequest) {
    super(scope, id);
  }

  public get unprocessedAccounts(): shapes.SecurityHubResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteMembers',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.DeleteMembers.UnprocessedAccounts'),
        outputPath: 'UnprocessedAccounts',
        parameters: {
          AccountIds: this.input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteMembers.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.SecurityHubResult[];
  }

}

export class SecurityHubDescribeActionTargets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecurityHubDescribeActionTargetsRequest) {
    super(scope, id);
  }

  public get actionTargets(): shapes.SecurityHubActionTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeActionTargets',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.DescribeActionTargets.ActionTargets'),
        outputPath: 'ActionTargets',
        parameters: {
          ActionTargetArns: this.input.actionTargetArns,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeActionTargets.ActionTargets', props);
    return resource.getResponseField('ActionTargets') as unknown as shapes.SecurityHubActionTarget[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeActionTargets',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.DescribeActionTargets.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ActionTargetArns: this.input.actionTargetArns,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeActionTargets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SecurityHubDescribeHub extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecurityHubDescribeHubRequest) {
    super(scope, id);
  }

  public get hubArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHub',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.DescribeHub.HubArn'),
        outputPath: 'HubArn',
        parameters: {
          HubArn: this.input.hubArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHub.HubArn', props);
    return resource.getResponseField('HubArn') as unknown as string;
  }

  public get subscribedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHub',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.DescribeHub.SubscribedAt'),
        outputPath: 'SubscribedAt',
        parameters: {
          HubArn: this.input.hubArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHub.SubscribedAt', props);
    return resource.getResponseField('SubscribedAt') as unknown as string;
  }

  public get autoEnableControls(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHub',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.DescribeHub.AutoEnableControls'),
        outputPath: 'AutoEnableControls',
        parameters: {
          HubArn: this.input.hubArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHub.AutoEnableControls', props);
    return resource.getResponseField('AutoEnableControls') as unknown as boolean;
  }

}

export class SecurityHubDescribeOrganizationConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get autoEnable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOrganizationConfiguration',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.DescribeOrganizationConfiguration.AutoEnable'),
        outputPath: 'AutoEnable',
        parameters: {
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
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.DescribeOrganizationConfiguration.MemberAccountLimitReached'),
        outputPath: 'MemberAccountLimitReached',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeOrganizationConfiguration.MemberAccountLimitReached', props);
    return resource.getResponseField('MemberAccountLimitReached') as unknown as boolean;
  }

}

export class SecurityHubDescribeProducts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecurityHubDescribeProductsRequest) {
    super(scope, id);
  }

  public get products(): shapes.SecurityHubProduct[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProducts',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.DescribeProducts.Products'),
        outputPath: 'Products',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProducts.Products', props);
    return resource.getResponseField('Products') as unknown as shapes.SecurityHubProduct[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProducts',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.DescribeProducts.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProducts.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SecurityHubDescribeStandards extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecurityHubDescribeStandardsRequest) {
    super(scope, id);
  }

  public get standards(): shapes.SecurityHubStandard[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStandards',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.DescribeStandards.Standards'),
        outputPath: 'Standards',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStandards.Standards', props);
    return resource.getResponseField('Standards') as unknown as shapes.SecurityHubStandard[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStandards',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.DescribeStandards.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStandards.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SecurityHubDescribeStandardsControls extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecurityHubDescribeStandardsControlsRequest) {
    super(scope, id);
  }

  public get controls(): shapes.SecurityHubStandardsControl[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStandardsControls',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.DescribeStandardsControls.Controls'),
        outputPath: 'Controls',
        parameters: {
          StandardsSubscriptionArn: this.input.standardsSubscriptionArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStandardsControls.Controls', props);
    return resource.getResponseField('Controls') as unknown as shapes.SecurityHubStandardsControl[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStandardsControls',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.DescribeStandardsControls.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          StandardsSubscriptionArn: this.input.standardsSubscriptionArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStandardsControls.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SecurityHubEnableImportFindingsForProduct extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecurityHubEnableImportFindingsForProductRequest) {
    super(scope, id);
  }

  public get productSubscriptionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableImportFindingsForProduct',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.EnableImportFindingsForProduct.ProductSubscriptionArn'),
        outputPath: 'ProductSubscriptionArn',
        parameters: {
          ProductArn: this.input.productArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'EnableImportFindingsForProduct.ProductSubscriptionArn', props);
    return resource.getResponseField('ProductSubscriptionArn') as unknown as string;
  }

}

export class SecurityHubFetchEnabledStandards extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecurityHubGetEnabledStandardsRequest) {
    super(scope, id);
  }

  public get standardsSubscriptions(): shapes.SecurityHubStandardsSubscription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnabledStandards',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.GetEnabledStandards.StandardsSubscriptions'),
        outputPath: 'StandardsSubscriptions',
        parameters: {
          StandardsSubscriptionArns: this.input.standardsSubscriptionArns,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnabledStandards.StandardsSubscriptions', props);
    return resource.getResponseField('StandardsSubscriptions') as unknown as shapes.SecurityHubStandardsSubscription[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnabledStandards',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.GetEnabledStandards.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          StandardsSubscriptionArns: this.input.standardsSubscriptionArns,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnabledStandards.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SecurityHubFetchFindings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecurityHubGetFindingsRequest) {
    super(scope, id);
  }

  public get findings(): shapes.SecurityHubAwsSecurityFinding[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFindings',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.GetFindings.Findings'),
        outputPath: 'Findings',
        parameters: {
          Filters: {
            ProductArn: this.input.filters?.productArn,
            AwsAccountId: this.input.filters?.awsAccountId,
            Id: this.input.filters?.id,
            GeneratorId: this.input.filters?.generatorId,
            Type: this.input.filters?.type,
            FirstObservedAt: this.input.filters?.firstObservedAt,
            LastObservedAt: this.input.filters?.lastObservedAt,
            CreatedAt: this.input.filters?.createdAt,
            UpdatedAt: this.input.filters?.updatedAt,
            SeverityProduct: this.input.filters?.severityProduct,
            SeverityNormalized: this.input.filters?.severityNormalized,
            SeverityLabel: this.input.filters?.severityLabel,
            Confidence: this.input.filters?.confidence,
            Criticality: this.input.filters?.criticality,
            Title: this.input.filters?.title,
            Description: this.input.filters?.description,
            RecommendationText: this.input.filters?.recommendationText,
            SourceUrl: this.input.filters?.sourceUrl,
            ProductFields: this.input.filters?.productFields,
            ProductName: this.input.filters?.productName,
            CompanyName: this.input.filters?.companyName,
            UserDefinedFields: this.input.filters?.userDefinedFields,
            MalwareName: this.input.filters?.malwareName,
            MalwareType: this.input.filters?.malwareType,
            MalwarePath: this.input.filters?.malwarePath,
            MalwareState: this.input.filters?.malwareState,
            NetworkDirection: this.input.filters?.networkDirection,
            NetworkProtocol: this.input.filters?.networkProtocol,
            NetworkSourceIpV4: this.input.filters?.networkSourceIpV4,
            NetworkSourceIpV6: this.input.filters?.networkSourceIpV6,
            NetworkSourcePort: this.input.filters?.networkSourcePort,
            NetworkSourceDomain: this.input.filters?.networkSourceDomain,
            NetworkSourceMac: this.input.filters?.networkSourceMac,
            NetworkDestinationIpV4: this.input.filters?.networkDestinationIpV4,
            NetworkDestinationIpV6: this.input.filters?.networkDestinationIpV6,
            NetworkDestinationPort: this.input.filters?.networkDestinationPort,
            NetworkDestinationDomain: this.input.filters?.networkDestinationDomain,
            ProcessName: this.input.filters?.processName,
            ProcessPath: this.input.filters?.processPath,
            ProcessPid: this.input.filters?.processPid,
            ProcessParentPid: this.input.filters?.processParentPid,
            ProcessLaunchedAt: this.input.filters?.processLaunchedAt,
            ProcessTerminatedAt: this.input.filters?.processTerminatedAt,
            ThreatIntelIndicatorType: this.input.filters?.threatIntelIndicatorType,
            ThreatIntelIndicatorValue: this.input.filters?.threatIntelIndicatorValue,
            ThreatIntelIndicatorCategory: this.input.filters?.threatIntelIndicatorCategory,
            ThreatIntelIndicatorLastObservedAt: this.input.filters?.threatIntelIndicatorLastObservedAt,
            ThreatIntelIndicatorSource: this.input.filters?.threatIntelIndicatorSource,
            ThreatIntelIndicatorSourceUrl: this.input.filters?.threatIntelIndicatorSourceUrl,
            ResourceType: this.input.filters?.resourceType,
            ResourceId: this.input.filters?.resourceId,
            ResourcePartition: this.input.filters?.resourcePartition,
            ResourceRegion: this.input.filters?.resourceRegion,
            ResourceTags: this.input.filters?.resourceTags,
            ResourceAwsEc2InstanceType: this.input.filters?.resourceAwsEc2InstanceType,
            ResourceAwsEc2InstanceImageId: this.input.filters?.resourceAwsEc2InstanceImageId,
            ResourceAwsEc2InstanceIpV4Addresses: this.input.filters?.resourceAwsEc2InstanceIpV4Addresses,
            ResourceAwsEc2InstanceIpV6Addresses: this.input.filters?.resourceAwsEc2InstanceIpV6Addresses,
            ResourceAwsEc2InstanceKeyName: this.input.filters?.resourceAwsEc2InstanceKeyName,
            ResourceAwsEc2InstanceIamInstanceProfileArn: this.input.filters?.resourceAwsEc2InstanceIamInstanceProfileArn,
            ResourceAwsEc2InstanceVpcId: this.input.filters?.resourceAwsEc2InstanceVpcId,
            ResourceAwsEc2InstanceSubnetId: this.input.filters?.resourceAwsEc2InstanceSubnetId,
            ResourceAwsEc2InstanceLaunchedAt: this.input.filters?.resourceAwsEc2InstanceLaunchedAt,
            ResourceAwsS3BucketOwnerId: this.input.filters?.resourceAwsS3BucketOwnerId,
            ResourceAwsS3BucketOwnerName: this.input.filters?.resourceAwsS3BucketOwnerName,
            ResourceAwsIamAccessKeyUserName: this.input.filters?.resourceAwsIamAccessKeyUserName,
            ResourceAwsIamAccessKeyStatus: this.input.filters?.resourceAwsIamAccessKeyStatus,
            ResourceAwsIamAccessKeyCreatedAt: this.input.filters?.resourceAwsIamAccessKeyCreatedAt,
            ResourceContainerName: this.input.filters?.resourceContainerName,
            ResourceContainerImageId: this.input.filters?.resourceContainerImageId,
            ResourceContainerImageName: this.input.filters?.resourceContainerImageName,
            ResourceContainerLaunchedAt: this.input.filters?.resourceContainerLaunchedAt,
            ResourceDetailsOther: this.input.filters?.resourceDetailsOther,
            ComplianceStatus: this.input.filters?.complianceStatus,
            VerificationState: this.input.filters?.verificationState,
            WorkflowState: this.input.filters?.workflowState,
            WorkflowStatus: this.input.filters?.workflowStatus,
            RecordState: this.input.filters?.recordState,
            RelatedFindingsProductArn: this.input.filters?.relatedFindingsProductArn,
            RelatedFindingsId: this.input.filters?.relatedFindingsId,
            NoteText: this.input.filters?.noteText,
            NoteUpdatedAt: this.input.filters?.noteUpdatedAt,
            NoteUpdatedBy: this.input.filters?.noteUpdatedBy,
            Keyword: this.input.filters?.keyword,
          },
          SortCriteria: this.input.sortCriteria,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFindings.Findings', props);
    return resource.getResponseField('Findings') as unknown as shapes.SecurityHubAwsSecurityFinding[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFindings',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.GetFindings.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filters: {
            ProductArn: this.input.filters?.productArn,
            AwsAccountId: this.input.filters?.awsAccountId,
            Id: this.input.filters?.id,
            GeneratorId: this.input.filters?.generatorId,
            Type: this.input.filters?.type,
            FirstObservedAt: this.input.filters?.firstObservedAt,
            LastObservedAt: this.input.filters?.lastObservedAt,
            CreatedAt: this.input.filters?.createdAt,
            UpdatedAt: this.input.filters?.updatedAt,
            SeverityProduct: this.input.filters?.severityProduct,
            SeverityNormalized: this.input.filters?.severityNormalized,
            SeverityLabel: this.input.filters?.severityLabel,
            Confidence: this.input.filters?.confidence,
            Criticality: this.input.filters?.criticality,
            Title: this.input.filters?.title,
            Description: this.input.filters?.description,
            RecommendationText: this.input.filters?.recommendationText,
            SourceUrl: this.input.filters?.sourceUrl,
            ProductFields: this.input.filters?.productFields,
            ProductName: this.input.filters?.productName,
            CompanyName: this.input.filters?.companyName,
            UserDefinedFields: this.input.filters?.userDefinedFields,
            MalwareName: this.input.filters?.malwareName,
            MalwareType: this.input.filters?.malwareType,
            MalwarePath: this.input.filters?.malwarePath,
            MalwareState: this.input.filters?.malwareState,
            NetworkDirection: this.input.filters?.networkDirection,
            NetworkProtocol: this.input.filters?.networkProtocol,
            NetworkSourceIpV4: this.input.filters?.networkSourceIpV4,
            NetworkSourceIpV6: this.input.filters?.networkSourceIpV6,
            NetworkSourcePort: this.input.filters?.networkSourcePort,
            NetworkSourceDomain: this.input.filters?.networkSourceDomain,
            NetworkSourceMac: this.input.filters?.networkSourceMac,
            NetworkDestinationIpV4: this.input.filters?.networkDestinationIpV4,
            NetworkDestinationIpV6: this.input.filters?.networkDestinationIpV6,
            NetworkDestinationPort: this.input.filters?.networkDestinationPort,
            NetworkDestinationDomain: this.input.filters?.networkDestinationDomain,
            ProcessName: this.input.filters?.processName,
            ProcessPath: this.input.filters?.processPath,
            ProcessPid: this.input.filters?.processPid,
            ProcessParentPid: this.input.filters?.processParentPid,
            ProcessLaunchedAt: this.input.filters?.processLaunchedAt,
            ProcessTerminatedAt: this.input.filters?.processTerminatedAt,
            ThreatIntelIndicatorType: this.input.filters?.threatIntelIndicatorType,
            ThreatIntelIndicatorValue: this.input.filters?.threatIntelIndicatorValue,
            ThreatIntelIndicatorCategory: this.input.filters?.threatIntelIndicatorCategory,
            ThreatIntelIndicatorLastObservedAt: this.input.filters?.threatIntelIndicatorLastObservedAt,
            ThreatIntelIndicatorSource: this.input.filters?.threatIntelIndicatorSource,
            ThreatIntelIndicatorSourceUrl: this.input.filters?.threatIntelIndicatorSourceUrl,
            ResourceType: this.input.filters?.resourceType,
            ResourceId: this.input.filters?.resourceId,
            ResourcePartition: this.input.filters?.resourcePartition,
            ResourceRegion: this.input.filters?.resourceRegion,
            ResourceTags: this.input.filters?.resourceTags,
            ResourceAwsEc2InstanceType: this.input.filters?.resourceAwsEc2InstanceType,
            ResourceAwsEc2InstanceImageId: this.input.filters?.resourceAwsEc2InstanceImageId,
            ResourceAwsEc2InstanceIpV4Addresses: this.input.filters?.resourceAwsEc2InstanceIpV4Addresses,
            ResourceAwsEc2InstanceIpV6Addresses: this.input.filters?.resourceAwsEc2InstanceIpV6Addresses,
            ResourceAwsEc2InstanceKeyName: this.input.filters?.resourceAwsEc2InstanceKeyName,
            ResourceAwsEc2InstanceIamInstanceProfileArn: this.input.filters?.resourceAwsEc2InstanceIamInstanceProfileArn,
            ResourceAwsEc2InstanceVpcId: this.input.filters?.resourceAwsEc2InstanceVpcId,
            ResourceAwsEc2InstanceSubnetId: this.input.filters?.resourceAwsEc2InstanceSubnetId,
            ResourceAwsEc2InstanceLaunchedAt: this.input.filters?.resourceAwsEc2InstanceLaunchedAt,
            ResourceAwsS3BucketOwnerId: this.input.filters?.resourceAwsS3BucketOwnerId,
            ResourceAwsS3BucketOwnerName: this.input.filters?.resourceAwsS3BucketOwnerName,
            ResourceAwsIamAccessKeyUserName: this.input.filters?.resourceAwsIamAccessKeyUserName,
            ResourceAwsIamAccessKeyStatus: this.input.filters?.resourceAwsIamAccessKeyStatus,
            ResourceAwsIamAccessKeyCreatedAt: this.input.filters?.resourceAwsIamAccessKeyCreatedAt,
            ResourceContainerName: this.input.filters?.resourceContainerName,
            ResourceContainerImageId: this.input.filters?.resourceContainerImageId,
            ResourceContainerImageName: this.input.filters?.resourceContainerImageName,
            ResourceContainerLaunchedAt: this.input.filters?.resourceContainerLaunchedAt,
            ResourceDetailsOther: this.input.filters?.resourceDetailsOther,
            ComplianceStatus: this.input.filters?.complianceStatus,
            VerificationState: this.input.filters?.verificationState,
            WorkflowState: this.input.filters?.workflowState,
            WorkflowStatus: this.input.filters?.workflowStatus,
            RecordState: this.input.filters?.recordState,
            RelatedFindingsProductArn: this.input.filters?.relatedFindingsProductArn,
            RelatedFindingsId: this.input.filters?.relatedFindingsId,
            NoteText: this.input.filters?.noteText,
            NoteUpdatedAt: this.input.filters?.noteUpdatedAt,
            NoteUpdatedBy: this.input.filters?.noteUpdatedBy,
            Keyword: this.input.filters?.keyword,
          },
          SortCriteria: this.input.sortCriteria,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFindings.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SecurityHubFetchInsightResults extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecurityHubGetInsightResultsRequest) {
    super(scope, id);
  }

  public get insightResults(): SecurityHubFetchInsightResultsInsightResults {
    return new SecurityHubFetchInsightResultsInsightResults(this, 'InsightResults', this.__resources, this.input);
  }

}

export class SecurityHubFetchInsightResultsInsightResults extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecurityHubGetInsightResultsRequest) {
    super(scope, id);
  }

  public get insightArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsightResults',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.GetInsightResults.InsightResults.InsightArn'),
        outputPath: 'InsightResults.InsightArn',
        parameters: {
          InsightArn: this.input.insightArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsightResults.InsightResults.InsightArn', props);
    return resource.getResponseField('InsightResults.InsightArn') as unknown as string;
  }

  public get groupByAttribute(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsightResults',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.GetInsightResults.InsightResults.GroupByAttribute'),
        outputPath: 'InsightResults.GroupByAttribute',
        parameters: {
          InsightArn: this.input.insightArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsightResults.InsightResults.GroupByAttribute', props);
    return resource.getResponseField('InsightResults.GroupByAttribute') as unknown as string;
  }

  public get resultValues(): shapes.SecurityHubInsightResultValue[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsightResults',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.GetInsightResults.InsightResults.ResultValues'),
        outputPath: 'InsightResults.ResultValues',
        parameters: {
          InsightArn: this.input.insightArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsightResults.InsightResults.ResultValues', props);
    return resource.getResponseField('InsightResults.ResultValues') as unknown as shapes.SecurityHubInsightResultValue[];
  }

}

export class SecurityHubFetchInsights extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecurityHubGetInsightsRequest) {
    super(scope, id);
  }

  public get insights(): shapes.SecurityHubInsight[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsights',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.GetInsights.Insights'),
        outputPath: 'Insights',
        parameters: {
          InsightArns: this.input.insightArns,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsights.Insights', props);
    return resource.getResponseField('Insights') as unknown as shapes.SecurityHubInsight[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsights',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.GetInsights.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InsightArns: this.input.insightArns,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsights.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SecurityHubFetchInvitationsCount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get invitationsCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInvitationsCount',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.GetInvitationsCount.InvitationsCount'),
        outputPath: 'InvitationsCount',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInvitationsCount.InvitationsCount', props);
    return resource.getResponseField('InvitationsCount') as unknown as number;
  }

}

export class SecurityHubFetchMasterAccount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get master(): SecurityHubFetchMasterAccountMaster {
    return new SecurityHubFetchMasterAccountMaster(this, 'Master', this.__resources);
  }

}

export class SecurityHubFetchMasterAccountMaster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMasterAccount',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.GetMasterAccount.Master.AccountId'),
        outputPath: 'Master.AccountId',
        parameters: {
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
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.GetMasterAccount.Master.InvitationId'),
        outputPath: 'Master.InvitationId',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMasterAccount.Master.InvitationId', props);
    return resource.getResponseField('Master.InvitationId') as unknown as string;
  }

  public get invitedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMasterAccount',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.GetMasterAccount.Master.InvitedAt'),
        outputPath: 'Master.InvitedAt',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMasterAccount.Master.InvitedAt', props);
    return resource.getResponseField('Master.InvitedAt') as unknown as string;
  }

  public get memberStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMasterAccount',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.GetMasterAccount.Master.MemberStatus'),
        outputPath: 'Master.MemberStatus',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMasterAccount.Master.MemberStatus', props);
    return resource.getResponseField('Master.MemberStatus') as unknown as string;
  }

}

export class SecurityHubFetchMembers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecurityHubGetMembersRequest) {
    super(scope, id);
  }

  public get members(): shapes.SecurityHubMember[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMembers',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.GetMembers.Members'),
        outputPath: 'Members',
        parameters: {
          AccountIds: this.input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMembers.Members', props);
    return resource.getResponseField('Members') as unknown as shapes.SecurityHubMember[];
  }

  public get unprocessedAccounts(): shapes.SecurityHubResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMembers',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.GetMembers.UnprocessedAccounts'),
        outputPath: 'UnprocessedAccounts',
        parameters: {
          AccountIds: this.input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMembers.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.SecurityHubResult[];
  }

}

export class SecurityHubInviteMembers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecurityHubInviteMembersRequest) {
    super(scope, id);
  }

  public get unprocessedAccounts(): shapes.SecurityHubResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'inviteMembers',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.InviteMembers.UnprocessedAccounts'),
        outputPath: 'UnprocessedAccounts',
        parameters: {
          AccountIds: this.input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InviteMembers.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.SecurityHubResult[];
  }

}

export class SecurityHubListEnabledProductsForImport extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecurityHubListEnabledProductsForImportRequest) {
    super(scope, id);
  }

  public get productSubscriptions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEnabledProductsForImport',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.ListEnabledProductsForImport.ProductSubscriptions'),
        outputPath: 'ProductSubscriptions',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEnabledProductsForImport.ProductSubscriptions', props);
    return resource.getResponseField('ProductSubscriptions') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEnabledProductsForImport',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.ListEnabledProductsForImport.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEnabledProductsForImport.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SecurityHubListInvitations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecurityHubListInvitationsRequest) {
    super(scope, id);
  }

  public get invitations(): shapes.SecurityHubInvitation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInvitations',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.ListInvitations.Invitations'),
        outputPath: 'Invitations',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInvitations.Invitations', props);
    return resource.getResponseField('Invitations') as unknown as shapes.SecurityHubInvitation[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInvitations',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.ListInvitations.NextToken'),
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

export class SecurityHubListMembers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecurityHubListMembersRequest) {
    super(scope, id);
  }

  public get members(): shapes.SecurityHubMember[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMembers',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.ListMembers.Members'),
        outputPath: 'Members',
        parameters: {
          OnlyAssociated: this.input.onlyAssociated,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMembers.Members', props);
    return resource.getResponseField('Members') as unknown as shapes.SecurityHubMember[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMembers',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.ListMembers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          OnlyAssociated: this.input.onlyAssociated,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMembers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SecurityHubListOrganizationAdminAccounts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecurityHubListOrganizationAdminAccountsRequest) {
    super(scope, id);
  }

  public get adminAccounts(): shapes.SecurityHubAdminAccount[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOrganizationAdminAccounts',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.ListOrganizationAdminAccounts.AdminAccounts'),
        outputPath: 'AdminAccounts',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOrganizationAdminAccounts.AdminAccounts', props);
    return resource.getResponseField('AdminAccounts') as unknown as shapes.SecurityHubAdminAccount[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOrganizationAdminAccounts',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.ListOrganizationAdminAccounts.NextToken'),
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

export class SecurityHubListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecurityHubListTagsForResourceRequest) {
    super(scope, id);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'SecurityHub',
        physicalResourceId: cr.PhysicalResourceId.of('SecurityHub.ListTagsForResource.Tags'),
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

