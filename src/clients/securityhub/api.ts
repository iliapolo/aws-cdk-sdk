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

  public batchDisableStandards(input: shapes.SecurityHubBatchDisableStandardsRequest): SecurityHubResponsesBatchDisableStandards {
    return new SecurityHubResponsesBatchDisableStandards(this, this.__resources, input);
  }

  public batchEnableStandards(input: shapes.SecurityHubBatchEnableStandardsRequest): SecurityHubResponsesBatchEnableStandards {
    return new SecurityHubResponsesBatchEnableStandards(this, this.__resources, input);
  }

  public batchImportFindings(input: shapes.SecurityHubBatchImportFindingsRequest): SecurityHubResponsesBatchImportFindings {
    return new SecurityHubResponsesBatchImportFindings(this, this.__resources, input);
  }

  public batchUpdateFindings(input: shapes.SecurityHubBatchUpdateFindingsRequest): SecurityHubResponsesBatchUpdateFindings {
    return new SecurityHubResponsesBatchUpdateFindings(this, this.__resources, input);
  }

  public createActionTarget(input: shapes.SecurityHubCreateActionTargetRequest): SecurityHubResponsesCreateActionTarget {
    return new SecurityHubResponsesCreateActionTarget(this, this.__resources, input);
  }

  public createInsight(input: shapes.SecurityHubCreateInsightRequest): SecurityHubResponsesCreateInsight {
    return new SecurityHubResponsesCreateInsight(this, this.__resources, input);
  }

  public createMembers(input: shapes.SecurityHubCreateMembersRequest): SecurityHubResponsesCreateMembers {
    return new SecurityHubResponsesCreateMembers(this, this.__resources, input);
  }

  public declineInvitations(input: shapes.SecurityHubDeclineInvitationsRequest): SecurityHubResponsesDeclineInvitations {
    return new SecurityHubResponsesDeclineInvitations(this, this.__resources, input);
  }

  public deleteActionTarget(input: shapes.SecurityHubDeleteActionTargetRequest): SecurityHubResponsesDeleteActionTarget {
    return new SecurityHubResponsesDeleteActionTarget(this, this.__resources, input);
  }

  public deleteInsight(input: shapes.SecurityHubDeleteInsightRequest): SecurityHubResponsesDeleteInsight {
    return new SecurityHubResponsesDeleteInsight(this, this.__resources, input);
  }

  public deleteInvitations(input: shapes.SecurityHubDeleteInvitationsRequest): SecurityHubResponsesDeleteInvitations {
    return new SecurityHubResponsesDeleteInvitations(this, this.__resources, input);
  }

  public deleteMembers(input: shapes.SecurityHubDeleteMembersRequest): SecurityHubResponsesDeleteMembers {
    return new SecurityHubResponsesDeleteMembers(this, this.__resources, input);
  }

  public describeActionTargets(input: shapes.SecurityHubDescribeActionTargetsRequest): SecurityHubResponsesDescribeActionTargets {
    return new SecurityHubResponsesDescribeActionTargets(this, this.__resources, input);
  }

  public describeHub(input: shapes.SecurityHubDescribeHubRequest): SecurityHubResponsesDescribeHub {
    return new SecurityHubResponsesDescribeHub(this, this.__resources, input);
  }

  public describeOrganizationConfiguration(): SecurityHubResponsesDescribeOrganizationConfiguration {
    return new SecurityHubResponsesDescribeOrganizationConfiguration(this, this.__resources);
  }

  public describeProducts(input: shapes.SecurityHubDescribeProductsRequest): SecurityHubResponsesDescribeProducts {
    return new SecurityHubResponsesDescribeProducts(this, this.__resources, input);
  }

  public describeStandards(input: shapes.SecurityHubDescribeStandardsRequest): SecurityHubResponsesDescribeStandards {
    return new SecurityHubResponsesDescribeStandards(this, this.__resources, input);
  }

  public describeStandardsControls(input: shapes.SecurityHubDescribeStandardsControlsRequest): SecurityHubResponsesDescribeStandardsControls {
    return new SecurityHubResponsesDescribeStandardsControls(this, this.__resources, input);
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

  public enableImportFindingsForProduct(input: shapes.SecurityHubEnableImportFindingsForProductRequest): SecurityHubResponsesEnableImportFindingsForProduct {
    return new SecurityHubResponsesEnableImportFindingsForProduct(this, this.__resources, input);
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

  public fetchEnabledStandards(input: shapes.SecurityHubGetEnabledStandardsRequest): SecurityHubResponsesFetchEnabledStandards {
    return new SecurityHubResponsesFetchEnabledStandards(this, this.__resources, input);
  }

  public fetchFindings(input: shapes.SecurityHubGetFindingsRequest): SecurityHubResponsesFetchFindings {
    return new SecurityHubResponsesFetchFindings(this, this.__resources, input);
  }

  public fetchInsightResults(input: shapes.SecurityHubGetInsightResultsRequest): SecurityHubResponsesFetchInsightResults {
    return new SecurityHubResponsesFetchInsightResults(this, this.__resources, input);
  }

  public fetchInsights(input: shapes.SecurityHubGetInsightsRequest): SecurityHubResponsesFetchInsights {
    return new SecurityHubResponsesFetchInsights(this, this.__resources, input);
  }

  public fetchInvitationsCount(): SecurityHubResponsesFetchInvitationsCount {
    return new SecurityHubResponsesFetchInvitationsCount(this, this.__resources);
  }

  public fetchMasterAccount(): SecurityHubResponsesFetchMasterAccount {
    return new SecurityHubResponsesFetchMasterAccount(this, this.__resources);
  }

  public fetchMembers(input: shapes.SecurityHubGetMembersRequest): SecurityHubResponsesFetchMembers {
    return new SecurityHubResponsesFetchMembers(this, this.__resources, input);
  }

  public inviteMembers(input: shapes.SecurityHubInviteMembersRequest): SecurityHubResponsesInviteMembers {
    return new SecurityHubResponsesInviteMembers(this, this.__resources, input);
  }

  public listEnabledProductsForImport(input: shapes.SecurityHubListEnabledProductsForImportRequest): SecurityHubResponsesListEnabledProductsForImport {
    return new SecurityHubResponsesListEnabledProductsForImport(this, this.__resources, input);
  }

  public listInvitations(input: shapes.SecurityHubListInvitationsRequest): SecurityHubResponsesListInvitations {
    return new SecurityHubResponsesListInvitations(this, this.__resources, input);
  }

  public listMembers(input: shapes.SecurityHubListMembersRequest): SecurityHubResponsesListMembers {
    return new SecurityHubResponsesListMembers(this, this.__resources, input);
  }

  public listOrganizationAdminAccounts(input: shapes.SecurityHubListOrganizationAdminAccountsRequest): SecurityHubResponsesListOrganizationAdminAccounts {
    return new SecurityHubResponsesListOrganizationAdminAccounts(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.SecurityHubListTagsForResourceRequest): SecurityHubResponsesListTagsForResource {
    return new SecurityHubResponsesListTagsForResource(this, this.__resources, input);
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

export class SecurityHubResponsesBatchDisableStandards {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecurityHubBatchDisableStandardsRequest) {
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
          StandardsSubscriptionArns: this.__input.standardsSubscriptionArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDisableStandards.StandardsSubscriptions', props);
    return resource.getResponseField('StandardsSubscriptions') as unknown as shapes.SecurityHubStandardsSubscription[];
  }

}

export class SecurityHubResponsesBatchEnableStandards {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecurityHubBatchEnableStandardsRequest) {
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
          StandardsSubscriptionRequests: this.__input.standardsSubscriptionRequests,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchEnableStandards.StandardsSubscriptions', props);
    return resource.getResponseField('StandardsSubscriptions') as unknown as shapes.SecurityHubStandardsSubscription[];
  }

}

export class SecurityHubResponsesBatchImportFindings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecurityHubBatchImportFindingsRequest) {
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
          Findings: this.__input.findings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchImportFindings.FailedCount', props);
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
          Findings: this.__input.findings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchImportFindings.SuccessCount', props);
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
          Findings: this.__input.findings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchImportFindings.FailedFindings', props);
    return resource.getResponseField('FailedFindings') as unknown as shapes.SecurityHubImportFindingsError[];
  }

}

export class SecurityHubResponsesBatchUpdateFindings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecurityHubBatchUpdateFindingsRequest) {
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
          FindingIdentifiers: this.__input.findingIdentifiers,
          Note: {
            Text: this.__input.note?.text,
            UpdatedBy: this.__input.note?.updatedBy,
          },
          Severity: {
            Normalized: this.__input.severity?.normalized,
            Product: this.__input.severity?.product,
            Label: this.__input.severity?.label,
          },
          VerificationState: this.__input.verificationState,
          Confidence: this.__input.confidence,
          Criticality: this.__input.criticality,
          Types: this.__input.types,
          UserDefinedFields: this.__input.userDefinedFields,
          Workflow: {
            Status: this.__input.workflow?.status,
          },
          RelatedFindings: this.__input.relatedFindings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchUpdateFindings.ProcessedFindings', props);
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
          FindingIdentifiers: this.__input.findingIdentifiers,
          Note: {
            Text: this.__input.note?.text,
            UpdatedBy: this.__input.note?.updatedBy,
          },
          Severity: {
            Normalized: this.__input.severity?.normalized,
            Product: this.__input.severity?.product,
            Label: this.__input.severity?.label,
          },
          VerificationState: this.__input.verificationState,
          Confidence: this.__input.confidence,
          Criticality: this.__input.criticality,
          Types: this.__input.types,
          UserDefinedFields: this.__input.userDefinedFields,
          Workflow: {
            Status: this.__input.workflow?.status,
          },
          RelatedFindings: this.__input.relatedFindings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchUpdateFindings.UnprocessedFindings', props);
    return resource.getResponseField('UnprocessedFindings') as unknown as shapes.SecurityHubBatchUpdateFindingsUnprocessedFinding[];
  }

}

export class SecurityHubResponsesCreateActionTarget {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecurityHubCreateActionTargetRequest) {
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
          Name: this.__input.name,
          Description: this.__input.description,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateActionTarget.ActionTargetArn', props);
    return resource.getResponseField('ActionTargetArn') as unknown as string;
  }

}

export class SecurityHubResponsesCreateInsight {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecurityHubCreateInsightRequest) {
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
          Name: this.__input.name,
          Filters: {
            ProductArn: this.__input.filters.productArn,
            AwsAccountId: this.__input.filters.awsAccountId,
            Id: this.__input.filters.id,
            GeneratorId: this.__input.filters.generatorId,
            Type: this.__input.filters.type,
            FirstObservedAt: this.__input.filters.firstObservedAt,
            LastObservedAt: this.__input.filters.lastObservedAt,
            CreatedAt: this.__input.filters.createdAt,
            UpdatedAt: this.__input.filters.updatedAt,
            SeverityProduct: this.__input.filters.severityProduct,
            SeverityNormalized: this.__input.filters.severityNormalized,
            SeverityLabel: this.__input.filters.severityLabel,
            Confidence: this.__input.filters.confidence,
            Criticality: this.__input.filters.criticality,
            Title: this.__input.filters.title,
            Description: this.__input.filters.description,
            RecommendationText: this.__input.filters.recommendationText,
            SourceUrl: this.__input.filters.sourceUrl,
            ProductFields: this.__input.filters.productFields,
            ProductName: this.__input.filters.productName,
            CompanyName: this.__input.filters.companyName,
            UserDefinedFields: this.__input.filters.userDefinedFields,
            MalwareName: this.__input.filters.malwareName,
            MalwareType: this.__input.filters.malwareType,
            MalwarePath: this.__input.filters.malwarePath,
            MalwareState: this.__input.filters.malwareState,
            NetworkDirection: this.__input.filters.networkDirection,
            NetworkProtocol: this.__input.filters.networkProtocol,
            NetworkSourceIpV4: this.__input.filters.networkSourceIpV4,
            NetworkSourceIpV6: this.__input.filters.networkSourceIpV6,
            NetworkSourcePort: this.__input.filters.networkSourcePort,
            NetworkSourceDomain: this.__input.filters.networkSourceDomain,
            NetworkSourceMac: this.__input.filters.networkSourceMac,
            NetworkDestinationIpV4: this.__input.filters.networkDestinationIpV4,
            NetworkDestinationIpV6: this.__input.filters.networkDestinationIpV6,
            NetworkDestinationPort: this.__input.filters.networkDestinationPort,
            NetworkDestinationDomain: this.__input.filters.networkDestinationDomain,
            ProcessName: this.__input.filters.processName,
            ProcessPath: this.__input.filters.processPath,
            ProcessPid: this.__input.filters.processPid,
            ProcessParentPid: this.__input.filters.processParentPid,
            ProcessLaunchedAt: this.__input.filters.processLaunchedAt,
            ProcessTerminatedAt: this.__input.filters.processTerminatedAt,
            ThreatIntelIndicatorType: this.__input.filters.threatIntelIndicatorType,
            ThreatIntelIndicatorValue: this.__input.filters.threatIntelIndicatorValue,
            ThreatIntelIndicatorCategory: this.__input.filters.threatIntelIndicatorCategory,
            ThreatIntelIndicatorLastObservedAt: this.__input.filters.threatIntelIndicatorLastObservedAt,
            ThreatIntelIndicatorSource: this.__input.filters.threatIntelIndicatorSource,
            ThreatIntelIndicatorSourceUrl: this.__input.filters.threatIntelIndicatorSourceUrl,
            ResourceType: this.__input.filters.resourceType,
            ResourceId: this.__input.filters.resourceId,
            ResourcePartition: this.__input.filters.resourcePartition,
            ResourceRegion: this.__input.filters.resourceRegion,
            ResourceTags: this.__input.filters.resourceTags,
            ResourceAwsEc2InstanceType: this.__input.filters.resourceAwsEc2InstanceType,
            ResourceAwsEc2InstanceImageId: this.__input.filters.resourceAwsEc2InstanceImageId,
            ResourceAwsEc2InstanceIpV4Addresses: this.__input.filters.resourceAwsEc2InstanceIpV4Addresses,
            ResourceAwsEc2InstanceIpV6Addresses: this.__input.filters.resourceAwsEc2InstanceIpV6Addresses,
            ResourceAwsEc2InstanceKeyName: this.__input.filters.resourceAwsEc2InstanceKeyName,
            ResourceAwsEc2InstanceIamInstanceProfileArn: this.__input.filters.resourceAwsEc2InstanceIamInstanceProfileArn,
            ResourceAwsEc2InstanceVpcId: this.__input.filters.resourceAwsEc2InstanceVpcId,
            ResourceAwsEc2InstanceSubnetId: this.__input.filters.resourceAwsEc2InstanceSubnetId,
            ResourceAwsEc2InstanceLaunchedAt: this.__input.filters.resourceAwsEc2InstanceLaunchedAt,
            ResourceAwsS3BucketOwnerId: this.__input.filters.resourceAwsS3BucketOwnerId,
            ResourceAwsS3BucketOwnerName: this.__input.filters.resourceAwsS3BucketOwnerName,
            ResourceAwsIamAccessKeyUserName: this.__input.filters.resourceAwsIamAccessKeyUserName,
            ResourceAwsIamAccessKeyStatus: this.__input.filters.resourceAwsIamAccessKeyStatus,
            ResourceAwsIamAccessKeyCreatedAt: this.__input.filters.resourceAwsIamAccessKeyCreatedAt,
            ResourceContainerName: this.__input.filters.resourceContainerName,
            ResourceContainerImageId: this.__input.filters.resourceContainerImageId,
            ResourceContainerImageName: this.__input.filters.resourceContainerImageName,
            ResourceContainerLaunchedAt: this.__input.filters.resourceContainerLaunchedAt,
            ResourceDetailsOther: this.__input.filters.resourceDetailsOther,
            ComplianceStatus: this.__input.filters.complianceStatus,
            VerificationState: this.__input.filters.verificationState,
            WorkflowState: this.__input.filters.workflowState,
            WorkflowStatus: this.__input.filters.workflowStatus,
            RecordState: this.__input.filters.recordState,
            RelatedFindingsProductArn: this.__input.filters.relatedFindingsProductArn,
            RelatedFindingsId: this.__input.filters.relatedFindingsId,
            NoteText: this.__input.filters.noteText,
            NoteUpdatedAt: this.__input.filters.noteUpdatedAt,
            NoteUpdatedBy: this.__input.filters.noteUpdatedBy,
            Keyword: this.__input.filters.keyword,
          },
          GroupByAttribute: this.__input.groupByAttribute,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInsight.InsightArn', props);
    return resource.getResponseField('InsightArn') as unknown as string;
  }

}

export class SecurityHubResponsesCreateMembers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecurityHubCreateMembersRequest) {
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
          AccountDetails: this.__input.accountDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMembers.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.SecurityHubResult[];
  }

}

export class SecurityHubResponsesDeclineInvitations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecurityHubDeclineInvitationsRequest) {
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
          AccountIds: this.__input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeclineInvitations.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.SecurityHubResult[];
  }

}

export class SecurityHubResponsesDeleteActionTarget {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecurityHubDeleteActionTargetRequest) {
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
          ActionTargetArn: this.__input.actionTargetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteActionTarget.ActionTargetArn', props);
    return resource.getResponseField('ActionTargetArn') as unknown as string;
  }

}

export class SecurityHubResponsesDeleteInsight {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecurityHubDeleteInsightRequest) {
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
          InsightArn: this.__input.insightArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteInsight.InsightArn', props);
    return resource.getResponseField('InsightArn') as unknown as string;
  }

}

export class SecurityHubResponsesDeleteInvitations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecurityHubDeleteInvitationsRequest) {
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
          AccountIds: this.__input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteInvitations.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.SecurityHubResult[];
  }

}

export class SecurityHubResponsesDeleteMembers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecurityHubDeleteMembersRequest) {
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
          AccountIds: this.__input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteMembers.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.SecurityHubResult[];
  }

}

export class SecurityHubResponsesDescribeActionTargets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecurityHubDescribeActionTargetsRequest) {
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
          ActionTargetArns: this.__input.actionTargetArns,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeActionTargets.ActionTargets', props);
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
          ActionTargetArns: this.__input.actionTargetArns,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeActionTargets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SecurityHubResponsesDescribeHub {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecurityHubDescribeHubRequest) {
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
          HubArn: this.__input.hubArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHub.HubArn', props);
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
          HubArn: this.__input.hubArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHub.SubscribedAt', props);
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
          HubArn: this.__input.hubArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHub.AutoEnableControls', props);
    return resource.getResponseField('AutoEnableControls') as unknown as boolean;
  }

}

export class SecurityHubResponsesDescribeOrganizationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOrganizationConfiguration.AutoEnable', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOrganizationConfiguration.MemberAccountLimitReached', props);
    return resource.getResponseField('MemberAccountLimitReached') as unknown as boolean;
  }

}

export class SecurityHubResponsesDescribeProducts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecurityHubDescribeProductsRequest) {
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProducts.Products', props);
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProducts.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SecurityHubResponsesDescribeStandards {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecurityHubDescribeStandardsRequest) {
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStandards.Standards', props);
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStandards.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SecurityHubResponsesDescribeStandardsControls {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecurityHubDescribeStandardsControlsRequest) {
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
          StandardsSubscriptionArn: this.__input.standardsSubscriptionArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStandardsControls.Controls', props);
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
          StandardsSubscriptionArn: this.__input.standardsSubscriptionArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStandardsControls.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SecurityHubResponsesEnableImportFindingsForProduct {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecurityHubEnableImportFindingsForProductRequest) {
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
          ProductArn: this.__input.productArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'EnableImportFindingsForProduct.ProductSubscriptionArn', props);
    return resource.getResponseField('ProductSubscriptionArn') as unknown as string;
  }

}

export class SecurityHubResponsesFetchEnabledStandards {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecurityHubGetEnabledStandardsRequest) {
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
          StandardsSubscriptionArns: this.__input.standardsSubscriptionArns,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnabledStandards.StandardsSubscriptions', props);
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
          StandardsSubscriptionArns: this.__input.standardsSubscriptionArns,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnabledStandards.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SecurityHubResponsesFetchFindings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecurityHubGetFindingsRequest) {
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
            ProductArn: this.__input.filters?.productArn,
            AwsAccountId: this.__input.filters?.awsAccountId,
            Id: this.__input.filters?.id,
            GeneratorId: this.__input.filters?.generatorId,
            Type: this.__input.filters?.type,
            FirstObservedAt: this.__input.filters?.firstObservedAt,
            LastObservedAt: this.__input.filters?.lastObservedAt,
            CreatedAt: this.__input.filters?.createdAt,
            UpdatedAt: this.__input.filters?.updatedAt,
            SeverityProduct: this.__input.filters?.severityProduct,
            SeverityNormalized: this.__input.filters?.severityNormalized,
            SeverityLabel: this.__input.filters?.severityLabel,
            Confidence: this.__input.filters?.confidence,
            Criticality: this.__input.filters?.criticality,
            Title: this.__input.filters?.title,
            Description: this.__input.filters?.description,
            RecommendationText: this.__input.filters?.recommendationText,
            SourceUrl: this.__input.filters?.sourceUrl,
            ProductFields: this.__input.filters?.productFields,
            ProductName: this.__input.filters?.productName,
            CompanyName: this.__input.filters?.companyName,
            UserDefinedFields: this.__input.filters?.userDefinedFields,
            MalwareName: this.__input.filters?.malwareName,
            MalwareType: this.__input.filters?.malwareType,
            MalwarePath: this.__input.filters?.malwarePath,
            MalwareState: this.__input.filters?.malwareState,
            NetworkDirection: this.__input.filters?.networkDirection,
            NetworkProtocol: this.__input.filters?.networkProtocol,
            NetworkSourceIpV4: this.__input.filters?.networkSourceIpV4,
            NetworkSourceIpV6: this.__input.filters?.networkSourceIpV6,
            NetworkSourcePort: this.__input.filters?.networkSourcePort,
            NetworkSourceDomain: this.__input.filters?.networkSourceDomain,
            NetworkSourceMac: this.__input.filters?.networkSourceMac,
            NetworkDestinationIpV4: this.__input.filters?.networkDestinationIpV4,
            NetworkDestinationIpV6: this.__input.filters?.networkDestinationIpV6,
            NetworkDestinationPort: this.__input.filters?.networkDestinationPort,
            NetworkDestinationDomain: this.__input.filters?.networkDestinationDomain,
            ProcessName: this.__input.filters?.processName,
            ProcessPath: this.__input.filters?.processPath,
            ProcessPid: this.__input.filters?.processPid,
            ProcessParentPid: this.__input.filters?.processParentPid,
            ProcessLaunchedAt: this.__input.filters?.processLaunchedAt,
            ProcessTerminatedAt: this.__input.filters?.processTerminatedAt,
            ThreatIntelIndicatorType: this.__input.filters?.threatIntelIndicatorType,
            ThreatIntelIndicatorValue: this.__input.filters?.threatIntelIndicatorValue,
            ThreatIntelIndicatorCategory: this.__input.filters?.threatIntelIndicatorCategory,
            ThreatIntelIndicatorLastObservedAt: this.__input.filters?.threatIntelIndicatorLastObservedAt,
            ThreatIntelIndicatorSource: this.__input.filters?.threatIntelIndicatorSource,
            ThreatIntelIndicatorSourceUrl: this.__input.filters?.threatIntelIndicatorSourceUrl,
            ResourceType: this.__input.filters?.resourceType,
            ResourceId: this.__input.filters?.resourceId,
            ResourcePartition: this.__input.filters?.resourcePartition,
            ResourceRegion: this.__input.filters?.resourceRegion,
            ResourceTags: this.__input.filters?.resourceTags,
            ResourceAwsEc2InstanceType: this.__input.filters?.resourceAwsEc2InstanceType,
            ResourceAwsEc2InstanceImageId: this.__input.filters?.resourceAwsEc2InstanceImageId,
            ResourceAwsEc2InstanceIpV4Addresses: this.__input.filters?.resourceAwsEc2InstanceIpV4Addresses,
            ResourceAwsEc2InstanceIpV6Addresses: this.__input.filters?.resourceAwsEc2InstanceIpV6Addresses,
            ResourceAwsEc2InstanceKeyName: this.__input.filters?.resourceAwsEc2InstanceKeyName,
            ResourceAwsEc2InstanceIamInstanceProfileArn: this.__input.filters?.resourceAwsEc2InstanceIamInstanceProfileArn,
            ResourceAwsEc2InstanceVpcId: this.__input.filters?.resourceAwsEc2InstanceVpcId,
            ResourceAwsEc2InstanceSubnetId: this.__input.filters?.resourceAwsEc2InstanceSubnetId,
            ResourceAwsEc2InstanceLaunchedAt: this.__input.filters?.resourceAwsEc2InstanceLaunchedAt,
            ResourceAwsS3BucketOwnerId: this.__input.filters?.resourceAwsS3BucketOwnerId,
            ResourceAwsS3BucketOwnerName: this.__input.filters?.resourceAwsS3BucketOwnerName,
            ResourceAwsIamAccessKeyUserName: this.__input.filters?.resourceAwsIamAccessKeyUserName,
            ResourceAwsIamAccessKeyStatus: this.__input.filters?.resourceAwsIamAccessKeyStatus,
            ResourceAwsIamAccessKeyCreatedAt: this.__input.filters?.resourceAwsIamAccessKeyCreatedAt,
            ResourceContainerName: this.__input.filters?.resourceContainerName,
            ResourceContainerImageId: this.__input.filters?.resourceContainerImageId,
            ResourceContainerImageName: this.__input.filters?.resourceContainerImageName,
            ResourceContainerLaunchedAt: this.__input.filters?.resourceContainerLaunchedAt,
            ResourceDetailsOther: this.__input.filters?.resourceDetailsOther,
            ComplianceStatus: this.__input.filters?.complianceStatus,
            VerificationState: this.__input.filters?.verificationState,
            WorkflowState: this.__input.filters?.workflowState,
            WorkflowStatus: this.__input.filters?.workflowStatus,
            RecordState: this.__input.filters?.recordState,
            RelatedFindingsProductArn: this.__input.filters?.relatedFindingsProductArn,
            RelatedFindingsId: this.__input.filters?.relatedFindingsId,
            NoteText: this.__input.filters?.noteText,
            NoteUpdatedAt: this.__input.filters?.noteUpdatedAt,
            NoteUpdatedBy: this.__input.filters?.noteUpdatedBy,
            Keyword: this.__input.filters?.keyword,
          },
          SortCriteria: this.__input.sortCriteria,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFindings.Findings', props);
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
            ProductArn: this.__input.filters?.productArn,
            AwsAccountId: this.__input.filters?.awsAccountId,
            Id: this.__input.filters?.id,
            GeneratorId: this.__input.filters?.generatorId,
            Type: this.__input.filters?.type,
            FirstObservedAt: this.__input.filters?.firstObservedAt,
            LastObservedAt: this.__input.filters?.lastObservedAt,
            CreatedAt: this.__input.filters?.createdAt,
            UpdatedAt: this.__input.filters?.updatedAt,
            SeverityProduct: this.__input.filters?.severityProduct,
            SeverityNormalized: this.__input.filters?.severityNormalized,
            SeverityLabel: this.__input.filters?.severityLabel,
            Confidence: this.__input.filters?.confidence,
            Criticality: this.__input.filters?.criticality,
            Title: this.__input.filters?.title,
            Description: this.__input.filters?.description,
            RecommendationText: this.__input.filters?.recommendationText,
            SourceUrl: this.__input.filters?.sourceUrl,
            ProductFields: this.__input.filters?.productFields,
            ProductName: this.__input.filters?.productName,
            CompanyName: this.__input.filters?.companyName,
            UserDefinedFields: this.__input.filters?.userDefinedFields,
            MalwareName: this.__input.filters?.malwareName,
            MalwareType: this.__input.filters?.malwareType,
            MalwarePath: this.__input.filters?.malwarePath,
            MalwareState: this.__input.filters?.malwareState,
            NetworkDirection: this.__input.filters?.networkDirection,
            NetworkProtocol: this.__input.filters?.networkProtocol,
            NetworkSourceIpV4: this.__input.filters?.networkSourceIpV4,
            NetworkSourceIpV6: this.__input.filters?.networkSourceIpV6,
            NetworkSourcePort: this.__input.filters?.networkSourcePort,
            NetworkSourceDomain: this.__input.filters?.networkSourceDomain,
            NetworkSourceMac: this.__input.filters?.networkSourceMac,
            NetworkDestinationIpV4: this.__input.filters?.networkDestinationIpV4,
            NetworkDestinationIpV6: this.__input.filters?.networkDestinationIpV6,
            NetworkDestinationPort: this.__input.filters?.networkDestinationPort,
            NetworkDestinationDomain: this.__input.filters?.networkDestinationDomain,
            ProcessName: this.__input.filters?.processName,
            ProcessPath: this.__input.filters?.processPath,
            ProcessPid: this.__input.filters?.processPid,
            ProcessParentPid: this.__input.filters?.processParentPid,
            ProcessLaunchedAt: this.__input.filters?.processLaunchedAt,
            ProcessTerminatedAt: this.__input.filters?.processTerminatedAt,
            ThreatIntelIndicatorType: this.__input.filters?.threatIntelIndicatorType,
            ThreatIntelIndicatorValue: this.__input.filters?.threatIntelIndicatorValue,
            ThreatIntelIndicatorCategory: this.__input.filters?.threatIntelIndicatorCategory,
            ThreatIntelIndicatorLastObservedAt: this.__input.filters?.threatIntelIndicatorLastObservedAt,
            ThreatIntelIndicatorSource: this.__input.filters?.threatIntelIndicatorSource,
            ThreatIntelIndicatorSourceUrl: this.__input.filters?.threatIntelIndicatorSourceUrl,
            ResourceType: this.__input.filters?.resourceType,
            ResourceId: this.__input.filters?.resourceId,
            ResourcePartition: this.__input.filters?.resourcePartition,
            ResourceRegion: this.__input.filters?.resourceRegion,
            ResourceTags: this.__input.filters?.resourceTags,
            ResourceAwsEc2InstanceType: this.__input.filters?.resourceAwsEc2InstanceType,
            ResourceAwsEc2InstanceImageId: this.__input.filters?.resourceAwsEc2InstanceImageId,
            ResourceAwsEc2InstanceIpV4Addresses: this.__input.filters?.resourceAwsEc2InstanceIpV4Addresses,
            ResourceAwsEc2InstanceIpV6Addresses: this.__input.filters?.resourceAwsEc2InstanceIpV6Addresses,
            ResourceAwsEc2InstanceKeyName: this.__input.filters?.resourceAwsEc2InstanceKeyName,
            ResourceAwsEc2InstanceIamInstanceProfileArn: this.__input.filters?.resourceAwsEc2InstanceIamInstanceProfileArn,
            ResourceAwsEc2InstanceVpcId: this.__input.filters?.resourceAwsEc2InstanceVpcId,
            ResourceAwsEc2InstanceSubnetId: this.__input.filters?.resourceAwsEc2InstanceSubnetId,
            ResourceAwsEc2InstanceLaunchedAt: this.__input.filters?.resourceAwsEc2InstanceLaunchedAt,
            ResourceAwsS3BucketOwnerId: this.__input.filters?.resourceAwsS3BucketOwnerId,
            ResourceAwsS3BucketOwnerName: this.__input.filters?.resourceAwsS3BucketOwnerName,
            ResourceAwsIamAccessKeyUserName: this.__input.filters?.resourceAwsIamAccessKeyUserName,
            ResourceAwsIamAccessKeyStatus: this.__input.filters?.resourceAwsIamAccessKeyStatus,
            ResourceAwsIamAccessKeyCreatedAt: this.__input.filters?.resourceAwsIamAccessKeyCreatedAt,
            ResourceContainerName: this.__input.filters?.resourceContainerName,
            ResourceContainerImageId: this.__input.filters?.resourceContainerImageId,
            ResourceContainerImageName: this.__input.filters?.resourceContainerImageName,
            ResourceContainerLaunchedAt: this.__input.filters?.resourceContainerLaunchedAt,
            ResourceDetailsOther: this.__input.filters?.resourceDetailsOther,
            ComplianceStatus: this.__input.filters?.complianceStatus,
            VerificationState: this.__input.filters?.verificationState,
            WorkflowState: this.__input.filters?.workflowState,
            WorkflowStatus: this.__input.filters?.workflowStatus,
            RecordState: this.__input.filters?.recordState,
            RelatedFindingsProductArn: this.__input.filters?.relatedFindingsProductArn,
            RelatedFindingsId: this.__input.filters?.relatedFindingsId,
            NoteText: this.__input.filters?.noteText,
            NoteUpdatedAt: this.__input.filters?.noteUpdatedAt,
            NoteUpdatedBy: this.__input.filters?.noteUpdatedBy,
            Keyword: this.__input.filters?.keyword,
          },
          SortCriteria: this.__input.sortCriteria,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFindings.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SecurityHubResponsesFetchInsightResults {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecurityHubGetInsightResultsRequest) {
  }

  public get insightResults(): SecurityHubResponsesFetchInsightResultsInsightResults {
    return new SecurityHubResponsesFetchInsightResultsInsightResults(this.__scope, this.__resources, this.__input);
  }

}

export class SecurityHubResponsesFetchInsightResultsInsightResults {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecurityHubGetInsightResultsRequest) {
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
          InsightArn: this.__input.insightArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsightResults.InsightResults.InsightArn', props);
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
          InsightArn: this.__input.insightArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsightResults.InsightResults.GroupByAttribute', props);
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
          InsightArn: this.__input.insightArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsightResults.InsightResults.ResultValues', props);
    return resource.getResponseField('InsightResults.ResultValues') as unknown as shapes.SecurityHubInsightResultValue[];
  }

}

export class SecurityHubResponsesFetchInsights {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecurityHubGetInsightsRequest) {
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
          InsightArns: this.__input.insightArns,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsights.Insights', props);
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
          InsightArns: this.__input.insightArns,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsights.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SecurityHubResponsesFetchInvitationsCount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInvitationsCount.InvitationsCount', props);
    return resource.getResponseField('InvitationsCount') as unknown as number;
  }

}

export class SecurityHubResponsesFetchMasterAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get master(): SecurityHubResponsesFetchMasterAccountMaster {
    return new SecurityHubResponsesFetchMasterAccountMaster(this.__scope, this.__resources);
  }

}

export class SecurityHubResponsesFetchMasterAccountMaster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMasterAccount.Master.AccountId', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMasterAccount.Master.InvitationId', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMasterAccount.Master.InvitedAt', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMasterAccount.Master.MemberStatus', props);
    return resource.getResponseField('Master.MemberStatus') as unknown as string;
  }

}

export class SecurityHubResponsesFetchMembers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecurityHubGetMembersRequest) {
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
          AccountIds: this.__input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMembers.Members', props);
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
          AccountIds: this.__input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMembers.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.SecurityHubResult[];
  }

}

export class SecurityHubResponsesInviteMembers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecurityHubInviteMembersRequest) {
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
          AccountIds: this.__input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InviteMembers.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.SecurityHubResult[];
  }

}

export class SecurityHubResponsesListEnabledProductsForImport {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecurityHubListEnabledProductsForImportRequest) {
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEnabledProductsForImport.ProductSubscriptions', props);
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEnabledProductsForImport.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SecurityHubResponsesListInvitations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecurityHubListInvitationsRequest) {
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInvitations.Invitations', props);
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInvitations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SecurityHubResponsesListMembers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecurityHubListMembersRequest) {
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
          OnlyAssociated: this.__input.onlyAssociated,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMembers.Members', props);
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
          OnlyAssociated: this.__input.onlyAssociated,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMembers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SecurityHubResponsesListOrganizationAdminAccounts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecurityHubListOrganizationAdminAccountsRequest) {
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOrganizationAdminAccounts.AdminAccounts', props);
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOrganizationAdminAccounts.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SecurityHubResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecurityHubListTagsForResourceRequest) {
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
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

