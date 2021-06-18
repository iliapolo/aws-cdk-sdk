import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class GreengrassClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateRoleToGroup(input: shapes.GreengrassAssociateRoleToGroupRequest): GreengrassAssociateRoleToGroup {
    return new GreengrassAssociateRoleToGroup(this, 'AssociateRoleToGroup', this.__resources, input);
  }

  public associateServiceRoleToAccount(input: shapes.GreengrassAssociateServiceRoleToAccountRequest): GreengrassAssociateServiceRoleToAccount {
    return new GreengrassAssociateServiceRoleToAccount(this, 'AssociateServiceRoleToAccount', this.__resources, input);
  }

  public createConnectorDefinition(input: shapes.GreengrassCreateConnectorDefinitionRequest): GreengrassCreateConnectorDefinition {
    return new GreengrassCreateConnectorDefinition(this, 'CreateConnectorDefinition', this.__resources, input);
  }

  public createConnectorDefinitionVersion(input: shapes.GreengrassCreateConnectorDefinitionVersionRequest): GreengrassCreateConnectorDefinitionVersion {
    return new GreengrassCreateConnectorDefinitionVersion(this, 'CreateConnectorDefinitionVersion', this.__resources, input);
  }

  public createCoreDefinition(input: shapes.GreengrassCreateCoreDefinitionRequest): GreengrassCreateCoreDefinition {
    return new GreengrassCreateCoreDefinition(this, 'CreateCoreDefinition', this.__resources, input);
  }

  public createCoreDefinitionVersion(input: shapes.GreengrassCreateCoreDefinitionVersionRequest): GreengrassCreateCoreDefinitionVersion {
    return new GreengrassCreateCoreDefinitionVersion(this, 'CreateCoreDefinitionVersion', this.__resources, input);
  }

  public createDeployment(input: shapes.GreengrassCreateDeploymentRequest): GreengrassCreateDeployment {
    return new GreengrassCreateDeployment(this, 'CreateDeployment', this.__resources, input);
  }

  public createDeviceDefinition(input: shapes.GreengrassCreateDeviceDefinitionRequest): GreengrassCreateDeviceDefinition {
    return new GreengrassCreateDeviceDefinition(this, 'CreateDeviceDefinition', this.__resources, input);
  }

  public createDeviceDefinitionVersion(input: shapes.GreengrassCreateDeviceDefinitionVersionRequest): GreengrassCreateDeviceDefinitionVersion {
    return new GreengrassCreateDeviceDefinitionVersion(this, 'CreateDeviceDefinitionVersion', this.__resources, input);
  }

  public createFunctionDefinition(input: shapes.GreengrassCreateFunctionDefinitionRequest): GreengrassCreateFunctionDefinition {
    return new GreengrassCreateFunctionDefinition(this, 'CreateFunctionDefinition', this.__resources, input);
  }

  public createFunctionDefinitionVersion(input: shapes.GreengrassCreateFunctionDefinitionVersionRequest): GreengrassCreateFunctionDefinitionVersion {
    return new GreengrassCreateFunctionDefinitionVersion(this, 'CreateFunctionDefinitionVersion', this.__resources, input);
  }

  public createGroup(input: shapes.GreengrassCreateGroupRequest): GreengrassCreateGroup {
    return new GreengrassCreateGroup(this, 'CreateGroup', this.__resources, input);
  }

  public createGroupCertificateAuthority(input: shapes.GreengrassCreateGroupCertificateAuthorityRequest): GreengrassCreateGroupCertificateAuthority {
    return new GreengrassCreateGroupCertificateAuthority(this, 'CreateGroupCertificateAuthority', this.__resources, input);
  }

  public createGroupVersion(input: shapes.GreengrassCreateGroupVersionRequest): GreengrassCreateGroupVersion {
    return new GreengrassCreateGroupVersion(this, 'CreateGroupVersion', this.__resources, input);
  }

  public createLoggerDefinition(input: shapes.GreengrassCreateLoggerDefinitionRequest): GreengrassCreateLoggerDefinition {
    return new GreengrassCreateLoggerDefinition(this, 'CreateLoggerDefinition', this.__resources, input);
  }

  public createLoggerDefinitionVersion(input: shapes.GreengrassCreateLoggerDefinitionVersionRequest): GreengrassCreateLoggerDefinitionVersion {
    return new GreengrassCreateLoggerDefinitionVersion(this, 'CreateLoggerDefinitionVersion', this.__resources, input);
  }

  public createResourceDefinition(input: shapes.GreengrassCreateResourceDefinitionRequest): GreengrassCreateResourceDefinition {
    return new GreengrassCreateResourceDefinition(this, 'CreateResourceDefinition', this.__resources, input);
  }

  public createResourceDefinitionVersion(input: shapes.GreengrassCreateResourceDefinitionVersionRequest): GreengrassCreateResourceDefinitionVersion {
    return new GreengrassCreateResourceDefinitionVersion(this, 'CreateResourceDefinitionVersion', this.__resources, input);
  }

  public createSoftwareUpdateJob(input: shapes.GreengrassCreateSoftwareUpdateJobRequest): GreengrassCreateSoftwareUpdateJob {
    return new GreengrassCreateSoftwareUpdateJob(this, 'CreateSoftwareUpdateJob', this.__resources, input);
  }

  public createSubscriptionDefinition(input: shapes.GreengrassCreateSubscriptionDefinitionRequest): GreengrassCreateSubscriptionDefinition {
    return new GreengrassCreateSubscriptionDefinition(this, 'CreateSubscriptionDefinition', this.__resources, input);
  }

  public createSubscriptionDefinitionVersion(input: shapes.GreengrassCreateSubscriptionDefinitionVersionRequest): GreengrassCreateSubscriptionDefinitionVersion {
    return new GreengrassCreateSubscriptionDefinitionVersion(this, 'CreateSubscriptionDefinitionVersion', this.__resources, input);
  }

  public deleteConnectorDefinition(input: shapes.GreengrassDeleteConnectorDefinitionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnectorDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.DeleteConnectorDefinition'),
        parameters: {
          ConnectorDefinitionId: input.connectorDefinitionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteConnectorDefinition', props);
  }

  public deleteCoreDefinition(input: shapes.GreengrassDeleteCoreDefinitionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCoreDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.DeleteCoreDefinition'),
        parameters: {
          CoreDefinitionId: input.coreDefinitionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteCoreDefinition', props);
  }

  public deleteDeviceDefinition(input: shapes.GreengrassDeleteDeviceDefinitionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDeviceDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.DeleteDeviceDefinition'),
        parameters: {
          DeviceDefinitionId: input.deviceDefinitionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDeviceDefinition', props);
  }

  public deleteFunctionDefinition(input: shapes.GreengrassDeleteFunctionDefinitionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFunctionDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.DeleteFunctionDefinition'),
        parameters: {
          FunctionDefinitionId: input.functionDefinitionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteFunctionDefinition', props);
  }

  public deleteGroup(input: shapes.GreengrassDeleteGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGroup',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.DeleteGroup'),
        parameters: {
          GroupId: input.groupId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteGroup', props);
  }

  public deleteLoggerDefinition(input: shapes.GreengrassDeleteLoggerDefinitionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLoggerDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.DeleteLoggerDefinition'),
        parameters: {
          LoggerDefinitionId: input.loggerDefinitionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteLoggerDefinition', props);
  }

  public deleteResourceDefinition(input: shapes.GreengrassDeleteResourceDefinitionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResourceDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.DeleteResourceDefinition'),
        parameters: {
          ResourceDefinitionId: input.resourceDefinitionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteResourceDefinition', props);
  }

  public deleteSubscriptionDefinition(input: shapes.GreengrassDeleteSubscriptionDefinitionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSubscriptionDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.DeleteSubscriptionDefinition'),
        parameters: {
          SubscriptionDefinitionId: input.subscriptionDefinitionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteSubscriptionDefinition', props);
  }

  public disassociateRoleFromGroup(input: shapes.GreengrassDisassociateRoleFromGroupRequest): GreengrassDisassociateRoleFromGroup {
    return new GreengrassDisassociateRoleFromGroup(this, 'DisassociateRoleFromGroup', this.__resources, input);
  }

  public disassociateServiceRoleFromAccount(): GreengrassDisassociateServiceRoleFromAccount {
    return new GreengrassDisassociateServiceRoleFromAccount(this, 'DisassociateServiceRoleFromAccount', this.__resources);
  }

  public fetchAssociatedRole(input: shapes.GreengrassGetAssociatedRoleRequest): GreengrassFetchAssociatedRole {
    return new GreengrassFetchAssociatedRole(this, 'FetchAssociatedRole', this.__resources, input);
  }

  public fetchBulkDeploymentStatus(input: shapes.GreengrassGetBulkDeploymentStatusRequest): GreengrassFetchBulkDeploymentStatus {
    return new GreengrassFetchBulkDeploymentStatus(this, 'FetchBulkDeploymentStatus', this.__resources, input);
  }

  public fetchConnectivityInfo(input: shapes.GreengrassGetConnectivityInfoRequest): GreengrassFetchConnectivityInfo {
    return new GreengrassFetchConnectivityInfo(this, 'FetchConnectivityInfo', this.__resources, input);
  }

  public fetchConnectorDefinition(input: shapes.GreengrassGetConnectorDefinitionRequest): GreengrassFetchConnectorDefinition {
    return new GreengrassFetchConnectorDefinition(this, 'FetchConnectorDefinition', this.__resources, input);
  }

  public fetchConnectorDefinitionVersion(input: shapes.GreengrassGetConnectorDefinitionVersionRequest): GreengrassFetchConnectorDefinitionVersion {
    return new GreengrassFetchConnectorDefinitionVersion(this, 'FetchConnectorDefinitionVersion', this.__resources, input);
  }

  public fetchCoreDefinition(input: shapes.GreengrassGetCoreDefinitionRequest): GreengrassFetchCoreDefinition {
    return new GreengrassFetchCoreDefinition(this, 'FetchCoreDefinition', this.__resources, input);
  }

  public fetchCoreDefinitionVersion(input: shapes.GreengrassGetCoreDefinitionVersionRequest): GreengrassFetchCoreDefinitionVersion {
    return new GreengrassFetchCoreDefinitionVersion(this, 'FetchCoreDefinitionVersion', this.__resources, input);
  }

  public fetchDeploymentStatus(input: shapes.GreengrassGetDeploymentStatusRequest): GreengrassFetchDeploymentStatus {
    return new GreengrassFetchDeploymentStatus(this, 'FetchDeploymentStatus', this.__resources, input);
  }

  public fetchDeviceDefinition(input: shapes.GreengrassGetDeviceDefinitionRequest): GreengrassFetchDeviceDefinition {
    return new GreengrassFetchDeviceDefinition(this, 'FetchDeviceDefinition', this.__resources, input);
  }

  public fetchDeviceDefinitionVersion(input: shapes.GreengrassGetDeviceDefinitionVersionRequest): GreengrassFetchDeviceDefinitionVersion {
    return new GreengrassFetchDeviceDefinitionVersion(this, 'FetchDeviceDefinitionVersion', this.__resources, input);
  }

  public fetchFunctionDefinition(input: shapes.GreengrassGetFunctionDefinitionRequest): GreengrassFetchFunctionDefinition {
    return new GreengrassFetchFunctionDefinition(this, 'FetchFunctionDefinition', this.__resources, input);
  }

  public fetchFunctionDefinitionVersion(input: shapes.GreengrassGetFunctionDefinitionVersionRequest): GreengrassFetchFunctionDefinitionVersion {
    return new GreengrassFetchFunctionDefinitionVersion(this, 'FetchFunctionDefinitionVersion', this.__resources, input);
  }

  public fetchGroup(input: shapes.GreengrassGetGroupRequest): GreengrassFetchGroup {
    return new GreengrassFetchGroup(this, 'FetchGroup', this.__resources, input);
  }

  public fetchGroupCertificateAuthority(input: shapes.GreengrassGetGroupCertificateAuthorityRequest): GreengrassFetchGroupCertificateAuthority {
    return new GreengrassFetchGroupCertificateAuthority(this, 'FetchGroupCertificateAuthority', this.__resources, input);
  }

  public fetchGroupCertificateConfiguration(input: shapes.GreengrassGetGroupCertificateConfigurationRequest): GreengrassFetchGroupCertificateConfiguration {
    return new GreengrassFetchGroupCertificateConfiguration(this, 'FetchGroupCertificateConfiguration', this.__resources, input);
  }

  public fetchGroupVersion(input: shapes.GreengrassGetGroupVersionRequest): GreengrassFetchGroupVersion {
    return new GreengrassFetchGroupVersion(this, 'FetchGroupVersion', this.__resources, input);
  }

  public fetchLoggerDefinition(input: shapes.GreengrassGetLoggerDefinitionRequest): GreengrassFetchLoggerDefinition {
    return new GreengrassFetchLoggerDefinition(this, 'FetchLoggerDefinition', this.__resources, input);
  }

  public fetchLoggerDefinitionVersion(input: shapes.GreengrassGetLoggerDefinitionVersionRequest): GreengrassFetchLoggerDefinitionVersion {
    return new GreengrassFetchLoggerDefinitionVersion(this, 'FetchLoggerDefinitionVersion', this.__resources, input);
  }

  public fetchResourceDefinition(input: shapes.GreengrassGetResourceDefinitionRequest): GreengrassFetchResourceDefinition {
    return new GreengrassFetchResourceDefinition(this, 'FetchResourceDefinition', this.__resources, input);
  }

  public fetchResourceDefinitionVersion(input: shapes.GreengrassGetResourceDefinitionVersionRequest): GreengrassFetchResourceDefinitionVersion {
    return new GreengrassFetchResourceDefinitionVersion(this, 'FetchResourceDefinitionVersion', this.__resources, input);
  }

  public fetchServiceRoleForAccount(): GreengrassFetchServiceRoleForAccount {
    return new GreengrassFetchServiceRoleForAccount(this, 'FetchServiceRoleForAccount', this.__resources);
  }

  public fetchSubscriptionDefinition(input: shapes.GreengrassGetSubscriptionDefinitionRequest): GreengrassFetchSubscriptionDefinition {
    return new GreengrassFetchSubscriptionDefinition(this, 'FetchSubscriptionDefinition', this.__resources, input);
  }

  public fetchSubscriptionDefinitionVersion(input: shapes.GreengrassGetSubscriptionDefinitionVersionRequest): GreengrassFetchSubscriptionDefinitionVersion {
    return new GreengrassFetchSubscriptionDefinitionVersion(this, 'FetchSubscriptionDefinitionVersion', this.__resources, input);
  }

  public fetchThingRuntimeConfiguration(input: shapes.GreengrassGetThingRuntimeConfigurationRequest): GreengrassFetchThingRuntimeConfiguration {
    return new GreengrassFetchThingRuntimeConfiguration(this, 'FetchThingRuntimeConfiguration', this.__resources, input);
  }

  public listBulkDeploymentDetailedReports(input: shapes.GreengrassListBulkDeploymentDetailedReportsRequest): GreengrassListBulkDeploymentDetailedReports {
    return new GreengrassListBulkDeploymentDetailedReports(this, 'ListBulkDeploymentDetailedReports', this.__resources, input);
  }

  public listBulkDeployments(input: shapes.GreengrassListBulkDeploymentsRequest): GreengrassListBulkDeployments {
    return new GreengrassListBulkDeployments(this, 'ListBulkDeployments', this.__resources, input);
  }

  public listConnectorDefinitionVersions(input: shapes.GreengrassListConnectorDefinitionVersionsRequest): GreengrassListConnectorDefinitionVersions {
    return new GreengrassListConnectorDefinitionVersions(this, 'ListConnectorDefinitionVersions', this.__resources, input);
  }

  public listConnectorDefinitions(input: shapes.GreengrassListConnectorDefinitionsRequest): GreengrassListConnectorDefinitions {
    return new GreengrassListConnectorDefinitions(this, 'ListConnectorDefinitions', this.__resources, input);
  }

  public listCoreDefinitionVersions(input: shapes.GreengrassListCoreDefinitionVersionsRequest): GreengrassListCoreDefinitionVersions {
    return new GreengrassListCoreDefinitionVersions(this, 'ListCoreDefinitionVersions', this.__resources, input);
  }

  public listCoreDefinitions(input: shapes.GreengrassListCoreDefinitionsRequest): GreengrassListCoreDefinitions {
    return new GreengrassListCoreDefinitions(this, 'ListCoreDefinitions', this.__resources, input);
  }

  public listDeployments(input: shapes.GreengrassListDeploymentsRequest): GreengrassListDeployments {
    return new GreengrassListDeployments(this, 'ListDeployments', this.__resources, input);
  }

  public listDeviceDefinitionVersions(input: shapes.GreengrassListDeviceDefinitionVersionsRequest): GreengrassListDeviceDefinitionVersions {
    return new GreengrassListDeviceDefinitionVersions(this, 'ListDeviceDefinitionVersions', this.__resources, input);
  }

  public listDeviceDefinitions(input: shapes.GreengrassListDeviceDefinitionsRequest): GreengrassListDeviceDefinitions {
    return new GreengrassListDeviceDefinitions(this, 'ListDeviceDefinitions', this.__resources, input);
  }

  public listFunctionDefinitionVersions(input: shapes.GreengrassListFunctionDefinitionVersionsRequest): GreengrassListFunctionDefinitionVersions {
    return new GreengrassListFunctionDefinitionVersions(this, 'ListFunctionDefinitionVersions', this.__resources, input);
  }

  public listFunctionDefinitions(input: shapes.GreengrassListFunctionDefinitionsRequest): GreengrassListFunctionDefinitions {
    return new GreengrassListFunctionDefinitions(this, 'ListFunctionDefinitions', this.__resources, input);
  }

  public listGroupCertificateAuthorities(input: shapes.GreengrassListGroupCertificateAuthoritiesRequest): GreengrassListGroupCertificateAuthorities {
    return new GreengrassListGroupCertificateAuthorities(this, 'ListGroupCertificateAuthorities', this.__resources, input);
  }

  public listGroupVersions(input: shapes.GreengrassListGroupVersionsRequest): GreengrassListGroupVersions {
    return new GreengrassListGroupVersions(this, 'ListGroupVersions', this.__resources, input);
  }

  public listGroups(input: shapes.GreengrassListGroupsRequest): GreengrassListGroups {
    return new GreengrassListGroups(this, 'ListGroups', this.__resources, input);
  }

  public listLoggerDefinitionVersions(input: shapes.GreengrassListLoggerDefinitionVersionsRequest): GreengrassListLoggerDefinitionVersions {
    return new GreengrassListLoggerDefinitionVersions(this, 'ListLoggerDefinitionVersions', this.__resources, input);
  }

  public listLoggerDefinitions(input: shapes.GreengrassListLoggerDefinitionsRequest): GreengrassListLoggerDefinitions {
    return new GreengrassListLoggerDefinitions(this, 'ListLoggerDefinitions', this.__resources, input);
  }

  public listResourceDefinitionVersions(input: shapes.GreengrassListResourceDefinitionVersionsRequest): GreengrassListResourceDefinitionVersions {
    return new GreengrassListResourceDefinitionVersions(this, 'ListResourceDefinitionVersions', this.__resources, input);
  }

  public listResourceDefinitions(input: shapes.GreengrassListResourceDefinitionsRequest): GreengrassListResourceDefinitions {
    return new GreengrassListResourceDefinitions(this, 'ListResourceDefinitions', this.__resources, input);
  }

  public listSubscriptionDefinitionVersions(input: shapes.GreengrassListSubscriptionDefinitionVersionsRequest): GreengrassListSubscriptionDefinitionVersions {
    return new GreengrassListSubscriptionDefinitionVersions(this, 'ListSubscriptionDefinitionVersions', this.__resources, input);
  }

  public listSubscriptionDefinitions(input: shapes.GreengrassListSubscriptionDefinitionsRequest): GreengrassListSubscriptionDefinitions {
    return new GreengrassListSubscriptionDefinitions(this, 'ListSubscriptionDefinitions', this.__resources, input);
  }

  public listTagsForResource(input: shapes.GreengrassListTagsForResourceRequest): GreengrassListTagsForResource {
    return new GreengrassListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public resetDeployments(input: shapes.GreengrassResetDeploymentsRequest): GreengrassResetDeployments {
    return new GreengrassResetDeployments(this, 'ResetDeployments', this.__resources, input);
  }

  public startBulkDeployment(input: shapes.GreengrassStartBulkDeploymentRequest): GreengrassStartBulkDeployment {
    return new GreengrassStartBulkDeployment(this, 'StartBulkDeployment', this.__resources, input);
  }

  public stopBulkDeployment(input: shapes.GreengrassStopBulkDeploymentRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopBulkDeployment',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.StopBulkDeployment'),
        parameters: {
          BulkDeploymentId: input.bulkDeploymentId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopBulkDeployment', props);
  }

  public tagResource(input: shapes.GreengrassTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.GreengrassUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateConnectivityInfo(input: shapes.GreengrassUpdateConnectivityInfoRequest): GreengrassUpdateConnectivityInfo {
    return new GreengrassUpdateConnectivityInfo(this, 'UpdateConnectivityInfo', this.__resources, input);
  }

  public updateConnectorDefinition(input: shapes.GreengrassUpdateConnectorDefinitionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConnectorDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.UpdateConnectorDefinition'),
        parameters: {
          ConnectorDefinitionId: input.connectorDefinitionId,
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateConnectorDefinition', props);
  }

  public updateCoreDefinition(input: shapes.GreengrassUpdateCoreDefinitionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCoreDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.UpdateCoreDefinition'),
        parameters: {
          CoreDefinitionId: input.coreDefinitionId,
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateCoreDefinition', props);
  }

  public updateDeviceDefinition(input: shapes.GreengrassUpdateDeviceDefinitionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDeviceDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.UpdateDeviceDefinition'),
        parameters: {
          DeviceDefinitionId: input.deviceDefinitionId,
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateDeviceDefinition', props);
  }

  public updateFunctionDefinition(input: shapes.GreengrassUpdateFunctionDefinitionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunctionDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.UpdateFunctionDefinition'),
        parameters: {
          FunctionDefinitionId: input.functionDefinitionId,
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateFunctionDefinition', props);
  }

  public updateGroup(input: shapes.GreengrassUpdateGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGroup',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.UpdateGroup'),
        parameters: {
          GroupId: input.groupId,
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateGroup', props);
  }

  public updateGroupCertificateConfiguration(input: shapes.GreengrassUpdateGroupCertificateConfigurationRequest): GreengrassUpdateGroupCertificateConfiguration {
    return new GreengrassUpdateGroupCertificateConfiguration(this, 'UpdateGroupCertificateConfiguration', this.__resources, input);
  }

  public updateLoggerDefinition(input: shapes.GreengrassUpdateLoggerDefinitionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLoggerDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.UpdateLoggerDefinition'),
        parameters: {
          LoggerDefinitionId: input.loggerDefinitionId,
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateLoggerDefinition', props);
  }

  public updateResourceDefinition(input: shapes.GreengrassUpdateResourceDefinitionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResourceDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.UpdateResourceDefinition'),
        parameters: {
          Name: input.name,
          ResourceDefinitionId: input.resourceDefinitionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateResourceDefinition', props);
  }

  public updateSubscriptionDefinition(input: shapes.GreengrassUpdateSubscriptionDefinitionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSubscriptionDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.UpdateSubscriptionDefinition'),
        parameters: {
          Name: input.name,
          SubscriptionDefinitionId: input.subscriptionDefinitionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateSubscriptionDefinition', props);
  }

  public updateThingRuntimeConfiguration(input: shapes.GreengrassUpdateThingRuntimeConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateThingRuntimeConfiguration',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.UpdateThingRuntimeConfiguration'),
        parameters: {
          TelemetryConfiguration: {
            Telemetry: input.telemetryConfiguration?.telemetry,
          },
          ThingName: input.thingName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateThingRuntimeConfiguration', props);
  }

}

export class GreengrassAssociateRoleToGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassAssociateRoleToGroupRequest) {
    super(scope, id);
  }

  public get associatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateRoleToGroup',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.AssociateRoleToGroup.AssociatedAt'),
        outputPath: 'AssociatedAt',
        parameters: {
          GroupId: this.input.groupId,
          RoleArn: this.input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateRoleToGroup.AssociatedAt', props);
    return resource.getResponseField('AssociatedAt') as unknown as string;
  }

}

export class GreengrassAssociateServiceRoleToAccount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassAssociateServiceRoleToAccountRequest) {
    super(scope, id);
  }

  public get associatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateServiceRoleToAccount',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.AssociateServiceRoleToAccount.AssociatedAt'),
        outputPath: 'AssociatedAt',
        parameters: {
          RoleArn: this.input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateServiceRoleToAccount.AssociatedAt', props);
    return resource.getResponseField('AssociatedAt') as unknown as string;
  }

}

export class GreengrassCreateConnectorDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassCreateConnectorDefinitionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnectorDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateConnectorDefinition.Arn'),
        outputPath: 'Arn',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Connectors: this.input.initialVersion?.connectors,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConnectorDefinition.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnectorDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateConnectorDefinition.CreationTimestamp'),
        outputPath: 'CreationTimestamp',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Connectors: this.input.initialVersion?.connectors,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConnectorDefinition.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnectorDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateConnectorDefinition.Id'),
        outputPath: 'Id',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Connectors: this.input.initialVersion?.connectors,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConnectorDefinition.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get lastUpdatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnectorDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateConnectorDefinition.LastUpdatedTimestamp'),
        outputPath: 'LastUpdatedTimestamp',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Connectors: this.input.initialVersion?.connectors,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConnectorDefinition.LastUpdatedTimestamp', props);
    return resource.getResponseField('LastUpdatedTimestamp') as unknown as string;
  }

  public get latestVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnectorDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateConnectorDefinition.LatestVersion'),
        outputPath: 'LatestVersion',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Connectors: this.input.initialVersion?.connectors,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConnectorDefinition.LatestVersion', props);
    return resource.getResponseField('LatestVersion') as unknown as string;
  }

  public get latestVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnectorDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateConnectorDefinition.LatestVersionArn'),
        outputPath: 'LatestVersionArn',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Connectors: this.input.initialVersion?.connectors,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConnectorDefinition.LatestVersionArn', props);
    return resource.getResponseField('LatestVersionArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnectorDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateConnectorDefinition.Name'),
        outputPath: 'Name',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Connectors: this.input.initialVersion?.connectors,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConnectorDefinition.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GreengrassCreateConnectorDefinitionVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassCreateConnectorDefinitionVersionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnectorDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateConnectorDefinitionVersion.Arn'),
        outputPath: 'Arn',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          ConnectorDefinitionId: this.input.connectorDefinitionId,
          Connectors: this.input.connectors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConnectorDefinitionVersion.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnectorDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateConnectorDefinitionVersion.CreationTimestamp'),
        outputPath: 'CreationTimestamp',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          ConnectorDefinitionId: this.input.connectorDefinitionId,
          Connectors: this.input.connectors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConnectorDefinitionVersion.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnectorDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateConnectorDefinitionVersion.Id'),
        outputPath: 'Id',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          ConnectorDefinitionId: this.input.connectorDefinitionId,
          Connectors: this.input.connectors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConnectorDefinitionVersion.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnectorDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateConnectorDefinitionVersion.Version'),
        outputPath: 'Version',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          ConnectorDefinitionId: this.input.connectorDefinitionId,
          Connectors: this.input.connectors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConnectorDefinitionVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class GreengrassCreateCoreDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassCreateCoreDefinitionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCoreDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateCoreDefinition.Arn'),
        outputPath: 'Arn',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Cores: this.input.initialVersion?.cores,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCoreDefinition.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCoreDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateCoreDefinition.CreationTimestamp'),
        outputPath: 'CreationTimestamp',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Cores: this.input.initialVersion?.cores,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCoreDefinition.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCoreDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateCoreDefinition.Id'),
        outputPath: 'Id',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Cores: this.input.initialVersion?.cores,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCoreDefinition.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get lastUpdatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCoreDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateCoreDefinition.LastUpdatedTimestamp'),
        outputPath: 'LastUpdatedTimestamp',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Cores: this.input.initialVersion?.cores,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCoreDefinition.LastUpdatedTimestamp', props);
    return resource.getResponseField('LastUpdatedTimestamp') as unknown as string;
  }

  public get latestVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCoreDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateCoreDefinition.LatestVersion'),
        outputPath: 'LatestVersion',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Cores: this.input.initialVersion?.cores,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCoreDefinition.LatestVersion', props);
    return resource.getResponseField('LatestVersion') as unknown as string;
  }

  public get latestVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCoreDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateCoreDefinition.LatestVersionArn'),
        outputPath: 'LatestVersionArn',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Cores: this.input.initialVersion?.cores,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCoreDefinition.LatestVersionArn', props);
    return resource.getResponseField('LatestVersionArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCoreDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateCoreDefinition.Name'),
        outputPath: 'Name',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Cores: this.input.initialVersion?.cores,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCoreDefinition.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GreengrassCreateCoreDefinitionVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassCreateCoreDefinitionVersionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCoreDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateCoreDefinitionVersion.Arn'),
        outputPath: 'Arn',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          CoreDefinitionId: this.input.coreDefinitionId,
          Cores: this.input.cores,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCoreDefinitionVersion.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCoreDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateCoreDefinitionVersion.CreationTimestamp'),
        outputPath: 'CreationTimestamp',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          CoreDefinitionId: this.input.coreDefinitionId,
          Cores: this.input.cores,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCoreDefinitionVersion.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCoreDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateCoreDefinitionVersion.Id'),
        outputPath: 'Id',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          CoreDefinitionId: this.input.coreDefinitionId,
          Cores: this.input.cores,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCoreDefinitionVersion.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCoreDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateCoreDefinitionVersion.Version'),
        outputPath: 'Version',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          CoreDefinitionId: this.input.coreDefinitionId,
          Cores: this.input.cores,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCoreDefinitionVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class GreengrassCreateDeployment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassCreateDeploymentRequest) {
    super(scope, id);
  }

  public get deploymentArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeployment',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateDeployment.DeploymentArn'),
        outputPath: 'DeploymentArn',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          DeploymentId: this.input.deploymentId,
          DeploymentType: this.input.deploymentType,
          GroupId: this.input.groupId,
          GroupVersionId: this.input.groupVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeployment.DeploymentArn', props);
    return resource.getResponseField('DeploymentArn') as unknown as string;
  }

  public get deploymentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeployment',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateDeployment.DeploymentId'),
        outputPath: 'DeploymentId',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          DeploymentId: this.input.deploymentId,
          DeploymentType: this.input.deploymentType,
          GroupId: this.input.groupId,
          GroupVersionId: this.input.groupVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeployment.DeploymentId', props);
    return resource.getResponseField('DeploymentId') as unknown as string;
  }

}

export class GreengrassCreateDeviceDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassCreateDeviceDefinitionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeviceDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateDeviceDefinition.Arn'),
        outputPath: 'Arn',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Devices: this.input.initialVersion?.devices,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeviceDefinition.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeviceDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateDeviceDefinition.CreationTimestamp'),
        outputPath: 'CreationTimestamp',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Devices: this.input.initialVersion?.devices,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeviceDefinition.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeviceDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateDeviceDefinition.Id'),
        outputPath: 'Id',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Devices: this.input.initialVersion?.devices,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeviceDefinition.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get lastUpdatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeviceDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateDeviceDefinition.LastUpdatedTimestamp'),
        outputPath: 'LastUpdatedTimestamp',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Devices: this.input.initialVersion?.devices,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeviceDefinition.LastUpdatedTimestamp', props);
    return resource.getResponseField('LastUpdatedTimestamp') as unknown as string;
  }

  public get latestVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeviceDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateDeviceDefinition.LatestVersion'),
        outputPath: 'LatestVersion',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Devices: this.input.initialVersion?.devices,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeviceDefinition.LatestVersion', props);
    return resource.getResponseField('LatestVersion') as unknown as string;
  }

  public get latestVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeviceDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateDeviceDefinition.LatestVersionArn'),
        outputPath: 'LatestVersionArn',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Devices: this.input.initialVersion?.devices,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeviceDefinition.LatestVersionArn', props);
    return resource.getResponseField('LatestVersionArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeviceDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateDeviceDefinition.Name'),
        outputPath: 'Name',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Devices: this.input.initialVersion?.devices,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeviceDefinition.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GreengrassCreateDeviceDefinitionVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassCreateDeviceDefinitionVersionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeviceDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateDeviceDefinitionVersion.Arn'),
        outputPath: 'Arn',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          DeviceDefinitionId: this.input.deviceDefinitionId,
          Devices: this.input.devices,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeviceDefinitionVersion.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeviceDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateDeviceDefinitionVersion.CreationTimestamp'),
        outputPath: 'CreationTimestamp',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          DeviceDefinitionId: this.input.deviceDefinitionId,
          Devices: this.input.devices,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeviceDefinitionVersion.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeviceDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateDeviceDefinitionVersion.Id'),
        outputPath: 'Id',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          DeviceDefinitionId: this.input.deviceDefinitionId,
          Devices: this.input.devices,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeviceDefinitionVersion.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeviceDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateDeviceDefinitionVersion.Version'),
        outputPath: 'Version',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          DeviceDefinitionId: this.input.deviceDefinitionId,
          Devices: this.input.devices,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeviceDefinitionVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class GreengrassCreateFunctionDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassCreateFunctionDefinitionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunctionDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateFunctionDefinition.Arn'),
        outputPath: 'Arn',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            DefaultConfig: {
              Execution: {
                IsolationMode: this.input.initialVersion?.defaultConfig?.execution?.isolationMode,
                RunAs: {
                  Gid: this.input.initialVersion?.defaultConfig?.execution?.runAs?.gid,
                  Uid: this.input.initialVersion?.defaultConfig?.execution?.runAs?.uid,
                },
              },
            },
            Functions: this.input.initialVersion?.functions,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunctionDefinition.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunctionDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateFunctionDefinition.CreationTimestamp'),
        outputPath: 'CreationTimestamp',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            DefaultConfig: {
              Execution: {
                IsolationMode: this.input.initialVersion?.defaultConfig?.execution?.isolationMode,
                RunAs: {
                  Gid: this.input.initialVersion?.defaultConfig?.execution?.runAs?.gid,
                  Uid: this.input.initialVersion?.defaultConfig?.execution?.runAs?.uid,
                },
              },
            },
            Functions: this.input.initialVersion?.functions,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunctionDefinition.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunctionDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateFunctionDefinition.Id'),
        outputPath: 'Id',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            DefaultConfig: {
              Execution: {
                IsolationMode: this.input.initialVersion?.defaultConfig?.execution?.isolationMode,
                RunAs: {
                  Gid: this.input.initialVersion?.defaultConfig?.execution?.runAs?.gid,
                  Uid: this.input.initialVersion?.defaultConfig?.execution?.runAs?.uid,
                },
              },
            },
            Functions: this.input.initialVersion?.functions,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunctionDefinition.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get lastUpdatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunctionDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateFunctionDefinition.LastUpdatedTimestamp'),
        outputPath: 'LastUpdatedTimestamp',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            DefaultConfig: {
              Execution: {
                IsolationMode: this.input.initialVersion?.defaultConfig?.execution?.isolationMode,
                RunAs: {
                  Gid: this.input.initialVersion?.defaultConfig?.execution?.runAs?.gid,
                  Uid: this.input.initialVersion?.defaultConfig?.execution?.runAs?.uid,
                },
              },
            },
            Functions: this.input.initialVersion?.functions,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunctionDefinition.LastUpdatedTimestamp', props);
    return resource.getResponseField('LastUpdatedTimestamp') as unknown as string;
  }

  public get latestVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunctionDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateFunctionDefinition.LatestVersion'),
        outputPath: 'LatestVersion',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            DefaultConfig: {
              Execution: {
                IsolationMode: this.input.initialVersion?.defaultConfig?.execution?.isolationMode,
                RunAs: {
                  Gid: this.input.initialVersion?.defaultConfig?.execution?.runAs?.gid,
                  Uid: this.input.initialVersion?.defaultConfig?.execution?.runAs?.uid,
                },
              },
            },
            Functions: this.input.initialVersion?.functions,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunctionDefinition.LatestVersion', props);
    return resource.getResponseField('LatestVersion') as unknown as string;
  }

  public get latestVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunctionDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateFunctionDefinition.LatestVersionArn'),
        outputPath: 'LatestVersionArn',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            DefaultConfig: {
              Execution: {
                IsolationMode: this.input.initialVersion?.defaultConfig?.execution?.isolationMode,
                RunAs: {
                  Gid: this.input.initialVersion?.defaultConfig?.execution?.runAs?.gid,
                  Uid: this.input.initialVersion?.defaultConfig?.execution?.runAs?.uid,
                },
              },
            },
            Functions: this.input.initialVersion?.functions,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunctionDefinition.LatestVersionArn', props);
    return resource.getResponseField('LatestVersionArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunctionDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateFunctionDefinition.Name'),
        outputPath: 'Name',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            DefaultConfig: {
              Execution: {
                IsolationMode: this.input.initialVersion?.defaultConfig?.execution?.isolationMode,
                RunAs: {
                  Gid: this.input.initialVersion?.defaultConfig?.execution?.runAs?.gid,
                  Uid: this.input.initialVersion?.defaultConfig?.execution?.runAs?.uid,
                },
              },
            },
            Functions: this.input.initialVersion?.functions,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunctionDefinition.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GreengrassCreateFunctionDefinitionVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassCreateFunctionDefinitionVersionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunctionDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateFunctionDefinitionVersion.Arn'),
        outputPath: 'Arn',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          DefaultConfig: {
            Execution: {
              IsolationMode: this.input.defaultConfig?.execution?.isolationMode,
              RunAs: {
                Gid: this.input.defaultConfig?.execution?.runAs?.gid,
                Uid: this.input.defaultConfig?.execution?.runAs?.uid,
              },
            },
          },
          FunctionDefinitionId: this.input.functionDefinitionId,
          Functions: this.input.functions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunctionDefinitionVersion.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunctionDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateFunctionDefinitionVersion.CreationTimestamp'),
        outputPath: 'CreationTimestamp',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          DefaultConfig: {
            Execution: {
              IsolationMode: this.input.defaultConfig?.execution?.isolationMode,
              RunAs: {
                Gid: this.input.defaultConfig?.execution?.runAs?.gid,
                Uid: this.input.defaultConfig?.execution?.runAs?.uid,
              },
            },
          },
          FunctionDefinitionId: this.input.functionDefinitionId,
          Functions: this.input.functions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunctionDefinitionVersion.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunctionDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateFunctionDefinitionVersion.Id'),
        outputPath: 'Id',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          DefaultConfig: {
            Execution: {
              IsolationMode: this.input.defaultConfig?.execution?.isolationMode,
              RunAs: {
                Gid: this.input.defaultConfig?.execution?.runAs?.gid,
                Uid: this.input.defaultConfig?.execution?.runAs?.uid,
              },
            },
          },
          FunctionDefinitionId: this.input.functionDefinitionId,
          Functions: this.input.functions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunctionDefinitionVersion.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunctionDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateFunctionDefinitionVersion.Version'),
        outputPath: 'Version',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          DefaultConfig: {
            Execution: {
              IsolationMode: this.input.defaultConfig?.execution?.isolationMode,
              RunAs: {
                Gid: this.input.defaultConfig?.execution?.runAs?.gid,
                Uid: this.input.defaultConfig?.execution?.runAs?.uid,
              },
            },
          },
          FunctionDefinitionId: this.input.functionDefinitionId,
          Functions: this.input.functions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunctionDefinitionVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class GreengrassCreateGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassCreateGroupRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateGroup.Arn'),
        outputPath: 'Arn',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            ConnectorDefinitionVersionArn: this.input.initialVersion?.connectorDefinitionVersionArn,
            CoreDefinitionVersionArn: this.input.initialVersion?.coreDefinitionVersionArn,
            DeviceDefinitionVersionArn: this.input.initialVersion?.deviceDefinitionVersionArn,
            FunctionDefinitionVersionArn: this.input.initialVersion?.functionDefinitionVersionArn,
            LoggerDefinitionVersionArn: this.input.initialVersion?.loggerDefinitionVersionArn,
            ResourceDefinitionVersionArn: this.input.initialVersion?.resourceDefinitionVersionArn,
            SubscriptionDefinitionVersionArn: this.input.initialVersion?.subscriptionDefinitionVersionArn,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateGroup.CreationTimestamp'),
        outputPath: 'CreationTimestamp',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            ConnectorDefinitionVersionArn: this.input.initialVersion?.connectorDefinitionVersionArn,
            CoreDefinitionVersionArn: this.input.initialVersion?.coreDefinitionVersionArn,
            DeviceDefinitionVersionArn: this.input.initialVersion?.deviceDefinitionVersionArn,
            FunctionDefinitionVersionArn: this.input.initialVersion?.functionDefinitionVersionArn,
            LoggerDefinitionVersionArn: this.input.initialVersion?.loggerDefinitionVersionArn,
            ResourceDefinitionVersionArn: this.input.initialVersion?.resourceDefinitionVersionArn,
            SubscriptionDefinitionVersionArn: this.input.initialVersion?.subscriptionDefinitionVersionArn,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateGroup.Id'),
        outputPath: 'Id',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            ConnectorDefinitionVersionArn: this.input.initialVersion?.connectorDefinitionVersionArn,
            CoreDefinitionVersionArn: this.input.initialVersion?.coreDefinitionVersionArn,
            DeviceDefinitionVersionArn: this.input.initialVersion?.deviceDefinitionVersionArn,
            FunctionDefinitionVersionArn: this.input.initialVersion?.functionDefinitionVersionArn,
            LoggerDefinitionVersionArn: this.input.initialVersion?.loggerDefinitionVersionArn,
            ResourceDefinitionVersionArn: this.input.initialVersion?.resourceDefinitionVersionArn,
            SubscriptionDefinitionVersionArn: this.input.initialVersion?.subscriptionDefinitionVersionArn,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get lastUpdatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateGroup.LastUpdatedTimestamp'),
        outputPath: 'LastUpdatedTimestamp',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            ConnectorDefinitionVersionArn: this.input.initialVersion?.connectorDefinitionVersionArn,
            CoreDefinitionVersionArn: this.input.initialVersion?.coreDefinitionVersionArn,
            DeviceDefinitionVersionArn: this.input.initialVersion?.deviceDefinitionVersionArn,
            FunctionDefinitionVersionArn: this.input.initialVersion?.functionDefinitionVersionArn,
            LoggerDefinitionVersionArn: this.input.initialVersion?.loggerDefinitionVersionArn,
            ResourceDefinitionVersionArn: this.input.initialVersion?.resourceDefinitionVersionArn,
            SubscriptionDefinitionVersionArn: this.input.initialVersion?.subscriptionDefinitionVersionArn,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.LastUpdatedTimestamp', props);
    return resource.getResponseField('LastUpdatedTimestamp') as unknown as string;
  }

  public get latestVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateGroup.LatestVersion'),
        outputPath: 'LatestVersion',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            ConnectorDefinitionVersionArn: this.input.initialVersion?.connectorDefinitionVersionArn,
            CoreDefinitionVersionArn: this.input.initialVersion?.coreDefinitionVersionArn,
            DeviceDefinitionVersionArn: this.input.initialVersion?.deviceDefinitionVersionArn,
            FunctionDefinitionVersionArn: this.input.initialVersion?.functionDefinitionVersionArn,
            LoggerDefinitionVersionArn: this.input.initialVersion?.loggerDefinitionVersionArn,
            ResourceDefinitionVersionArn: this.input.initialVersion?.resourceDefinitionVersionArn,
            SubscriptionDefinitionVersionArn: this.input.initialVersion?.subscriptionDefinitionVersionArn,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.LatestVersion', props);
    return resource.getResponseField('LatestVersion') as unknown as string;
  }

  public get latestVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateGroup.LatestVersionArn'),
        outputPath: 'LatestVersionArn',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            ConnectorDefinitionVersionArn: this.input.initialVersion?.connectorDefinitionVersionArn,
            CoreDefinitionVersionArn: this.input.initialVersion?.coreDefinitionVersionArn,
            DeviceDefinitionVersionArn: this.input.initialVersion?.deviceDefinitionVersionArn,
            FunctionDefinitionVersionArn: this.input.initialVersion?.functionDefinitionVersionArn,
            LoggerDefinitionVersionArn: this.input.initialVersion?.loggerDefinitionVersionArn,
            ResourceDefinitionVersionArn: this.input.initialVersion?.resourceDefinitionVersionArn,
            SubscriptionDefinitionVersionArn: this.input.initialVersion?.subscriptionDefinitionVersionArn,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.LatestVersionArn', props);
    return resource.getResponseField('LatestVersionArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateGroup.Name'),
        outputPath: 'Name',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            ConnectorDefinitionVersionArn: this.input.initialVersion?.connectorDefinitionVersionArn,
            CoreDefinitionVersionArn: this.input.initialVersion?.coreDefinitionVersionArn,
            DeviceDefinitionVersionArn: this.input.initialVersion?.deviceDefinitionVersionArn,
            FunctionDefinitionVersionArn: this.input.initialVersion?.functionDefinitionVersionArn,
            LoggerDefinitionVersionArn: this.input.initialVersion?.loggerDefinitionVersionArn,
            ResourceDefinitionVersionArn: this.input.initialVersion?.resourceDefinitionVersionArn,
            SubscriptionDefinitionVersionArn: this.input.initialVersion?.subscriptionDefinitionVersionArn,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GreengrassCreateGroupCertificateAuthority extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassCreateGroupCertificateAuthorityRequest) {
    super(scope, id);
  }

  public get groupCertificateAuthorityArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroupCertificateAuthority',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateGroupCertificateAuthority.GroupCertificateAuthorityArn'),
        outputPath: 'GroupCertificateAuthorityArn',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroupCertificateAuthority.GroupCertificateAuthorityArn', props);
    return resource.getResponseField('GroupCertificateAuthorityArn') as unknown as string;
  }

}

export class GreengrassCreateGroupVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassCreateGroupVersionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroupVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateGroupVersion.Arn'),
        outputPath: 'Arn',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          ConnectorDefinitionVersionArn: this.input.connectorDefinitionVersionArn,
          CoreDefinitionVersionArn: this.input.coreDefinitionVersionArn,
          DeviceDefinitionVersionArn: this.input.deviceDefinitionVersionArn,
          FunctionDefinitionVersionArn: this.input.functionDefinitionVersionArn,
          GroupId: this.input.groupId,
          LoggerDefinitionVersionArn: this.input.loggerDefinitionVersionArn,
          ResourceDefinitionVersionArn: this.input.resourceDefinitionVersionArn,
          SubscriptionDefinitionVersionArn: this.input.subscriptionDefinitionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroupVersion.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroupVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateGroupVersion.CreationTimestamp'),
        outputPath: 'CreationTimestamp',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          ConnectorDefinitionVersionArn: this.input.connectorDefinitionVersionArn,
          CoreDefinitionVersionArn: this.input.coreDefinitionVersionArn,
          DeviceDefinitionVersionArn: this.input.deviceDefinitionVersionArn,
          FunctionDefinitionVersionArn: this.input.functionDefinitionVersionArn,
          GroupId: this.input.groupId,
          LoggerDefinitionVersionArn: this.input.loggerDefinitionVersionArn,
          ResourceDefinitionVersionArn: this.input.resourceDefinitionVersionArn,
          SubscriptionDefinitionVersionArn: this.input.subscriptionDefinitionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroupVersion.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroupVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateGroupVersion.Id'),
        outputPath: 'Id',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          ConnectorDefinitionVersionArn: this.input.connectorDefinitionVersionArn,
          CoreDefinitionVersionArn: this.input.coreDefinitionVersionArn,
          DeviceDefinitionVersionArn: this.input.deviceDefinitionVersionArn,
          FunctionDefinitionVersionArn: this.input.functionDefinitionVersionArn,
          GroupId: this.input.groupId,
          LoggerDefinitionVersionArn: this.input.loggerDefinitionVersionArn,
          ResourceDefinitionVersionArn: this.input.resourceDefinitionVersionArn,
          SubscriptionDefinitionVersionArn: this.input.subscriptionDefinitionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroupVersion.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroupVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateGroupVersion.Version'),
        outputPath: 'Version',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          ConnectorDefinitionVersionArn: this.input.connectorDefinitionVersionArn,
          CoreDefinitionVersionArn: this.input.coreDefinitionVersionArn,
          DeviceDefinitionVersionArn: this.input.deviceDefinitionVersionArn,
          FunctionDefinitionVersionArn: this.input.functionDefinitionVersionArn,
          GroupId: this.input.groupId,
          LoggerDefinitionVersionArn: this.input.loggerDefinitionVersionArn,
          ResourceDefinitionVersionArn: this.input.resourceDefinitionVersionArn,
          SubscriptionDefinitionVersionArn: this.input.subscriptionDefinitionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroupVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class GreengrassCreateLoggerDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassCreateLoggerDefinitionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLoggerDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateLoggerDefinition.Arn'),
        outputPath: 'Arn',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Loggers: this.input.initialVersion?.loggers,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLoggerDefinition.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLoggerDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateLoggerDefinition.CreationTimestamp'),
        outputPath: 'CreationTimestamp',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Loggers: this.input.initialVersion?.loggers,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLoggerDefinition.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLoggerDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateLoggerDefinition.Id'),
        outputPath: 'Id',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Loggers: this.input.initialVersion?.loggers,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLoggerDefinition.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get lastUpdatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLoggerDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateLoggerDefinition.LastUpdatedTimestamp'),
        outputPath: 'LastUpdatedTimestamp',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Loggers: this.input.initialVersion?.loggers,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLoggerDefinition.LastUpdatedTimestamp', props);
    return resource.getResponseField('LastUpdatedTimestamp') as unknown as string;
  }

  public get latestVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLoggerDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateLoggerDefinition.LatestVersion'),
        outputPath: 'LatestVersion',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Loggers: this.input.initialVersion?.loggers,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLoggerDefinition.LatestVersion', props);
    return resource.getResponseField('LatestVersion') as unknown as string;
  }

  public get latestVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLoggerDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateLoggerDefinition.LatestVersionArn'),
        outputPath: 'LatestVersionArn',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Loggers: this.input.initialVersion?.loggers,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLoggerDefinition.LatestVersionArn', props);
    return resource.getResponseField('LatestVersionArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLoggerDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateLoggerDefinition.Name'),
        outputPath: 'Name',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Loggers: this.input.initialVersion?.loggers,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLoggerDefinition.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GreengrassCreateLoggerDefinitionVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassCreateLoggerDefinitionVersionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLoggerDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateLoggerDefinitionVersion.Arn'),
        outputPath: 'Arn',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          LoggerDefinitionId: this.input.loggerDefinitionId,
          Loggers: this.input.loggers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLoggerDefinitionVersion.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLoggerDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateLoggerDefinitionVersion.CreationTimestamp'),
        outputPath: 'CreationTimestamp',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          LoggerDefinitionId: this.input.loggerDefinitionId,
          Loggers: this.input.loggers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLoggerDefinitionVersion.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLoggerDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateLoggerDefinitionVersion.Id'),
        outputPath: 'Id',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          LoggerDefinitionId: this.input.loggerDefinitionId,
          Loggers: this.input.loggers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLoggerDefinitionVersion.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLoggerDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateLoggerDefinitionVersion.Version'),
        outputPath: 'Version',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          LoggerDefinitionId: this.input.loggerDefinitionId,
          Loggers: this.input.loggers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLoggerDefinitionVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class GreengrassCreateResourceDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassCreateResourceDefinitionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResourceDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateResourceDefinition.Arn'),
        outputPath: 'Arn',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Resources: this.input.initialVersion?.resources,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResourceDefinition.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResourceDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateResourceDefinition.CreationTimestamp'),
        outputPath: 'CreationTimestamp',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Resources: this.input.initialVersion?.resources,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResourceDefinition.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResourceDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateResourceDefinition.Id'),
        outputPath: 'Id',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Resources: this.input.initialVersion?.resources,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResourceDefinition.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get lastUpdatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResourceDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateResourceDefinition.LastUpdatedTimestamp'),
        outputPath: 'LastUpdatedTimestamp',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Resources: this.input.initialVersion?.resources,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResourceDefinition.LastUpdatedTimestamp', props);
    return resource.getResponseField('LastUpdatedTimestamp') as unknown as string;
  }

  public get latestVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResourceDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateResourceDefinition.LatestVersion'),
        outputPath: 'LatestVersion',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Resources: this.input.initialVersion?.resources,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResourceDefinition.LatestVersion', props);
    return resource.getResponseField('LatestVersion') as unknown as string;
  }

  public get latestVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResourceDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateResourceDefinition.LatestVersionArn'),
        outputPath: 'LatestVersionArn',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Resources: this.input.initialVersion?.resources,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResourceDefinition.LatestVersionArn', props);
    return resource.getResponseField('LatestVersionArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResourceDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateResourceDefinition.Name'),
        outputPath: 'Name',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Resources: this.input.initialVersion?.resources,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResourceDefinition.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GreengrassCreateResourceDefinitionVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassCreateResourceDefinitionVersionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResourceDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateResourceDefinitionVersion.Arn'),
        outputPath: 'Arn',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          ResourceDefinitionId: this.input.resourceDefinitionId,
          Resources: this.input.resources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResourceDefinitionVersion.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResourceDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateResourceDefinitionVersion.CreationTimestamp'),
        outputPath: 'CreationTimestamp',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          ResourceDefinitionId: this.input.resourceDefinitionId,
          Resources: this.input.resources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResourceDefinitionVersion.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResourceDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateResourceDefinitionVersion.Id'),
        outputPath: 'Id',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          ResourceDefinitionId: this.input.resourceDefinitionId,
          Resources: this.input.resources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResourceDefinitionVersion.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResourceDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateResourceDefinitionVersion.Version'),
        outputPath: 'Version',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          ResourceDefinitionId: this.input.resourceDefinitionId,
          Resources: this.input.resources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResourceDefinitionVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class GreengrassCreateSoftwareUpdateJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassCreateSoftwareUpdateJobRequest) {
    super(scope, id);
  }

  public get iotJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSoftwareUpdateJob',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateSoftwareUpdateJob.IotJobArn'),
        outputPath: 'IotJobArn',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          S3UrlSignerRole: this.input.s3UrlSignerRole,
          SoftwareToUpdate: this.input.softwareToUpdate,
          UpdateAgentLogLevel: this.input.updateAgentLogLevel,
          UpdateTargets: this.input.updateTargets,
          UpdateTargetsArchitecture: this.input.updateTargetsArchitecture,
          UpdateTargetsOperatingSystem: this.input.updateTargetsOperatingSystem,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSoftwareUpdateJob.IotJobArn', props);
    return resource.getResponseField('IotJobArn') as unknown as string;
  }

  public get iotJobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSoftwareUpdateJob',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateSoftwareUpdateJob.IotJobId'),
        outputPath: 'IotJobId',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          S3UrlSignerRole: this.input.s3UrlSignerRole,
          SoftwareToUpdate: this.input.softwareToUpdate,
          UpdateAgentLogLevel: this.input.updateAgentLogLevel,
          UpdateTargets: this.input.updateTargets,
          UpdateTargetsArchitecture: this.input.updateTargetsArchitecture,
          UpdateTargetsOperatingSystem: this.input.updateTargetsOperatingSystem,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSoftwareUpdateJob.IotJobId', props);
    return resource.getResponseField('IotJobId') as unknown as string;
  }

  public get platformSoftwareVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSoftwareUpdateJob',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateSoftwareUpdateJob.PlatformSoftwareVersion'),
        outputPath: 'PlatformSoftwareVersion',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          S3UrlSignerRole: this.input.s3UrlSignerRole,
          SoftwareToUpdate: this.input.softwareToUpdate,
          UpdateAgentLogLevel: this.input.updateAgentLogLevel,
          UpdateTargets: this.input.updateTargets,
          UpdateTargetsArchitecture: this.input.updateTargetsArchitecture,
          UpdateTargetsOperatingSystem: this.input.updateTargetsOperatingSystem,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSoftwareUpdateJob.PlatformSoftwareVersion', props);
    return resource.getResponseField('PlatformSoftwareVersion') as unknown as string;
  }

}

export class GreengrassCreateSubscriptionDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassCreateSubscriptionDefinitionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSubscriptionDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateSubscriptionDefinition.Arn'),
        outputPath: 'Arn',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Subscriptions: this.input.initialVersion?.subscriptions,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSubscriptionDefinition.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSubscriptionDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateSubscriptionDefinition.CreationTimestamp'),
        outputPath: 'CreationTimestamp',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Subscriptions: this.input.initialVersion?.subscriptions,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSubscriptionDefinition.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSubscriptionDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateSubscriptionDefinition.Id'),
        outputPath: 'Id',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Subscriptions: this.input.initialVersion?.subscriptions,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSubscriptionDefinition.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get lastUpdatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSubscriptionDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateSubscriptionDefinition.LastUpdatedTimestamp'),
        outputPath: 'LastUpdatedTimestamp',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Subscriptions: this.input.initialVersion?.subscriptions,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSubscriptionDefinition.LastUpdatedTimestamp', props);
    return resource.getResponseField('LastUpdatedTimestamp') as unknown as string;
  }

  public get latestVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSubscriptionDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateSubscriptionDefinition.LatestVersion'),
        outputPath: 'LatestVersion',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Subscriptions: this.input.initialVersion?.subscriptions,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSubscriptionDefinition.LatestVersion', props);
    return resource.getResponseField('LatestVersion') as unknown as string;
  }

  public get latestVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSubscriptionDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateSubscriptionDefinition.LatestVersionArn'),
        outputPath: 'LatestVersionArn',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Subscriptions: this.input.initialVersion?.subscriptions,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSubscriptionDefinition.LatestVersionArn', props);
    return resource.getResponseField('LatestVersionArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSubscriptionDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateSubscriptionDefinition.Name'),
        outputPath: 'Name',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          InitialVersion: {
            Subscriptions: this.input.initialVersion?.subscriptions,
          },
          Name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSubscriptionDefinition.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GreengrassCreateSubscriptionDefinitionVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassCreateSubscriptionDefinitionVersionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSubscriptionDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateSubscriptionDefinitionVersion.Arn'),
        outputPath: 'Arn',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          SubscriptionDefinitionId: this.input.subscriptionDefinitionId,
          Subscriptions: this.input.subscriptions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSubscriptionDefinitionVersion.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSubscriptionDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateSubscriptionDefinitionVersion.CreationTimestamp'),
        outputPath: 'CreationTimestamp',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          SubscriptionDefinitionId: this.input.subscriptionDefinitionId,
          Subscriptions: this.input.subscriptions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSubscriptionDefinitionVersion.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSubscriptionDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateSubscriptionDefinitionVersion.Id'),
        outputPath: 'Id',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          SubscriptionDefinitionId: this.input.subscriptionDefinitionId,
          Subscriptions: this.input.subscriptions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSubscriptionDefinitionVersion.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSubscriptionDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.CreateSubscriptionDefinitionVersion.Version'),
        outputPath: 'Version',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          SubscriptionDefinitionId: this.input.subscriptionDefinitionId,
          Subscriptions: this.input.subscriptions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSubscriptionDefinitionVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class GreengrassDisassociateRoleFromGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassDisassociateRoleFromGroupRequest) {
    super(scope, id);
  }

  public get disassociatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateRoleFromGroup',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.DisassociateRoleFromGroup.DisassociatedAt'),
        outputPath: 'DisassociatedAt',
        parameters: {
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateRoleFromGroup.DisassociatedAt', props);
    return resource.getResponseField('DisassociatedAt') as unknown as string;
  }

}

export class GreengrassDisassociateServiceRoleFromAccount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get disassociatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateServiceRoleFromAccount',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.DisassociateServiceRoleFromAccount.DisassociatedAt'),
        outputPath: 'DisassociatedAt',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateServiceRoleFromAccount.DisassociatedAt', props);
    return resource.getResponseField('DisassociatedAt') as unknown as string;
  }

}

export class GreengrassFetchAssociatedRole extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetAssociatedRoleRequest) {
    super(scope, id);
  }

  public get associatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssociatedRole',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetAssociatedRole.AssociatedAt'),
        outputPath: 'AssociatedAt',
        parameters: {
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAssociatedRole.AssociatedAt', props);
    return resource.getResponseField('AssociatedAt') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssociatedRole',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetAssociatedRole.RoleArn'),
        outputPath: 'RoleArn',
        parameters: {
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAssociatedRole.RoleArn', props);
    return resource.getResponseField('RoleArn') as unknown as string;
  }

}

export class GreengrassFetchBulkDeploymentStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetBulkDeploymentStatusRequest) {
    super(scope, id);
  }

  public get bulkDeploymentMetrics(): GreengrassFetchBulkDeploymentStatusBulkDeploymentMetrics {
    return new GreengrassFetchBulkDeploymentStatusBulkDeploymentMetrics(this, 'BulkDeploymentMetrics', this.__resources, this.input);
  }

  public get bulkDeploymentStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBulkDeploymentStatus',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetBulkDeploymentStatus.BulkDeploymentStatus'),
        outputPath: 'BulkDeploymentStatus',
        parameters: {
          BulkDeploymentId: this.input.bulkDeploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBulkDeploymentStatus.BulkDeploymentStatus', props);
    return resource.getResponseField('BulkDeploymentStatus') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBulkDeploymentStatus',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetBulkDeploymentStatus.CreatedAt'),
        outputPath: 'CreatedAt',
        parameters: {
          BulkDeploymentId: this.input.bulkDeploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBulkDeploymentStatus.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get errorDetails(): shapes.GreengrassErrorDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBulkDeploymentStatus',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetBulkDeploymentStatus.ErrorDetails'),
        outputPath: 'ErrorDetails',
        parameters: {
          BulkDeploymentId: this.input.bulkDeploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBulkDeploymentStatus.ErrorDetails', props);
    return resource.getResponseField('ErrorDetails') as unknown as shapes.GreengrassErrorDetail[];
  }

  public get errorMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBulkDeploymentStatus',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetBulkDeploymentStatus.ErrorMessage'),
        outputPath: 'ErrorMessage',
        parameters: {
          BulkDeploymentId: this.input.bulkDeploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBulkDeploymentStatus.ErrorMessage', props);
    return resource.getResponseField('ErrorMessage') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBulkDeploymentStatus',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetBulkDeploymentStatus.tags'),
        outputPath: 'tags',
        parameters: {
          BulkDeploymentId: this.input.bulkDeploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBulkDeploymentStatus.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class GreengrassFetchBulkDeploymentStatusBulkDeploymentMetrics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetBulkDeploymentStatusRequest) {
    super(scope, id);
  }

  public get invalidInputRecords(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBulkDeploymentStatus',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetBulkDeploymentStatus.BulkDeploymentMetrics.InvalidInputRecords'),
        outputPath: 'BulkDeploymentMetrics.InvalidInputRecords',
        parameters: {
          BulkDeploymentId: this.input.bulkDeploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBulkDeploymentStatus.BulkDeploymentMetrics.InvalidInputRecords', props);
    return resource.getResponseField('BulkDeploymentMetrics.InvalidInputRecords') as unknown as number;
  }

  public get recordsProcessed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBulkDeploymentStatus',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetBulkDeploymentStatus.BulkDeploymentMetrics.RecordsProcessed'),
        outputPath: 'BulkDeploymentMetrics.RecordsProcessed',
        parameters: {
          BulkDeploymentId: this.input.bulkDeploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBulkDeploymentStatus.BulkDeploymentMetrics.RecordsProcessed', props);
    return resource.getResponseField('BulkDeploymentMetrics.RecordsProcessed') as unknown as number;
  }

  public get retryAttempts(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBulkDeploymentStatus',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetBulkDeploymentStatus.BulkDeploymentMetrics.RetryAttempts'),
        outputPath: 'BulkDeploymentMetrics.RetryAttempts',
        parameters: {
          BulkDeploymentId: this.input.bulkDeploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBulkDeploymentStatus.BulkDeploymentMetrics.RetryAttempts', props);
    return resource.getResponseField('BulkDeploymentMetrics.RetryAttempts') as unknown as number;
  }

}

export class GreengrassFetchConnectivityInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetConnectivityInfoRequest) {
    super(scope, id);
  }

  public get connectivityInfo(): shapes.GreengrassConnectivityInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnectivityInfo',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetConnectivityInfo.ConnectivityInfo'),
        outputPath: 'ConnectivityInfo',
        parameters: {
          ThingName: this.input.thingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnectivityInfo.ConnectivityInfo', props);
    return resource.getResponseField('ConnectivityInfo') as unknown as shapes.GreengrassConnectivityInfo[];
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnectivityInfo',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetConnectivityInfo.Message'),
        outputPath: 'Message',
        parameters: {
          ThingName: this.input.thingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnectivityInfo.Message', props);
    return resource.getResponseField('Message') as unknown as string;
  }

}

export class GreengrassFetchConnectorDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetConnectorDefinitionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnectorDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetConnectorDefinition.Arn'),
        outputPath: 'Arn',
        parameters: {
          ConnectorDefinitionId: this.input.connectorDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnectorDefinition.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnectorDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetConnectorDefinition.CreationTimestamp'),
        outputPath: 'CreationTimestamp',
        parameters: {
          ConnectorDefinitionId: this.input.connectorDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnectorDefinition.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnectorDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetConnectorDefinition.Id'),
        outputPath: 'Id',
        parameters: {
          ConnectorDefinitionId: this.input.connectorDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnectorDefinition.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get lastUpdatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnectorDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetConnectorDefinition.LastUpdatedTimestamp'),
        outputPath: 'LastUpdatedTimestamp',
        parameters: {
          ConnectorDefinitionId: this.input.connectorDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnectorDefinition.LastUpdatedTimestamp', props);
    return resource.getResponseField('LastUpdatedTimestamp') as unknown as string;
  }

  public get latestVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnectorDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetConnectorDefinition.LatestVersion'),
        outputPath: 'LatestVersion',
        parameters: {
          ConnectorDefinitionId: this.input.connectorDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnectorDefinition.LatestVersion', props);
    return resource.getResponseField('LatestVersion') as unknown as string;
  }

  public get latestVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnectorDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetConnectorDefinition.LatestVersionArn'),
        outputPath: 'LatestVersionArn',
        parameters: {
          ConnectorDefinitionId: this.input.connectorDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnectorDefinition.LatestVersionArn', props);
    return resource.getResponseField('LatestVersionArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnectorDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetConnectorDefinition.Name'),
        outputPath: 'Name',
        parameters: {
          ConnectorDefinitionId: this.input.connectorDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnectorDefinition.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnectorDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetConnectorDefinition.tags'),
        outputPath: 'tags',
        parameters: {
          ConnectorDefinitionId: this.input.connectorDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnectorDefinition.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class GreengrassFetchConnectorDefinitionVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetConnectorDefinitionVersionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnectorDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetConnectorDefinitionVersion.Arn'),
        outputPath: 'Arn',
        parameters: {
          ConnectorDefinitionId: this.input.connectorDefinitionId,
          ConnectorDefinitionVersionId: this.input.connectorDefinitionVersionId,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnectorDefinitionVersion.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnectorDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetConnectorDefinitionVersion.CreationTimestamp'),
        outputPath: 'CreationTimestamp',
        parameters: {
          ConnectorDefinitionId: this.input.connectorDefinitionId,
          ConnectorDefinitionVersionId: this.input.connectorDefinitionVersionId,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnectorDefinitionVersion.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get definition(): GreengrassFetchConnectorDefinitionVersionDefinition {
    return new GreengrassFetchConnectorDefinitionVersionDefinition(this, 'Definition', this.__resources, this.input);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnectorDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetConnectorDefinitionVersion.Id'),
        outputPath: 'Id',
        parameters: {
          ConnectorDefinitionId: this.input.connectorDefinitionId,
          ConnectorDefinitionVersionId: this.input.connectorDefinitionVersionId,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnectorDefinitionVersion.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnectorDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetConnectorDefinitionVersion.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ConnectorDefinitionId: this.input.connectorDefinitionId,
          ConnectorDefinitionVersionId: this.input.connectorDefinitionVersionId,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnectorDefinitionVersion.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnectorDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetConnectorDefinitionVersion.Version'),
        outputPath: 'Version',
        parameters: {
          ConnectorDefinitionId: this.input.connectorDefinitionId,
          ConnectorDefinitionVersionId: this.input.connectorDefinitionVersionId,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnectorDefinitionVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class GreengrassFetchConnectorDefinitionVersionDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetConnectorDefinitionVersionRequest) {
    super(scope, id);
  }

  public get connectors(): shapes.GreengrassConnector[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnectorDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetConnectorDefinitionVersion.Definition.Connectors'),
        outputPath: 'Definition.Connectors',
        parameters: {
          ConnectorDefinitionId: this.input.connectorDefinitionId,
          ConnectorDefinitionVersionId: this.input.connectorDefinitionVersionId,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnectorDefinitionVersion.Definition.Connectors', props);
    return resource.getResponseField('Definition.Connectors') as unknown as shapes.GreengrassConnector[];
  }

}

export class GreengrassFetchCoreDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetCoreDefinitionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCoreDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetCoreDefinition.Arn'),
        outputPath: 'Arn',
        parameters: {
          CoreDefinitionId: this.input.coreDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCoreDefinition.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCoreDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetCoreDefinition.CreationTimestamp'),
        outputPath: 'CreationTimestamp',
        parameters: {
          CoreDefinitionId: this.input.coreDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCoreDefinition.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCoreDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetCoreDefinition.Id'),
        outputPath: 'Id',
        parameters: {
          CoreDefinitionId: this.input.coreDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCoreDefinition.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get lastUpdatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCoreDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetCoreDefinition.LastUpdatedTimestamp'),
        outputPath: 'LastUpdatedTimestamp',
        parameters: {
          CoreDefinitionId: this.input.coreDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCoreDefinition.LastUpdatedTimestamp', props);
    return resource.getResponseField('LastUpdatedTimestamp') as unknown as string;
  }

  public get latestVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCoreDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetCoreDefinition.LatestVersion'),
        outputPath: 'LatestVersion',
        parameters: {
          CoreDefinitionId: this.input.coreDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCoreDefinition.LatestVersion', props);
    return resource.getResponseField('LatestVersion') as unknown as string;
  }

  public get latestVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCoreDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetCoreDefinition.LatestVersionArn'),
        outputPath: 'LatestVersionArn',
        parameters: {
          CoreDefinitionId: this.input.coreDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCoreDefinition.LatestVersionArn', props);
    return resource.getResponseField('LatestVersionArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCoreDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetCoreDefinition.Name'),
        outputPath: 'Name',
        parameters: {
          CoreDefinitionId: this.input.coreDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCoreDefinition.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCoreDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetCoreDefinition.tags'),
        outputPath: 'tags',
        parameters: {
          CoreDefinitionId: this.input.coreDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCoreDefinition.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class GreengrassFetchCoreDefinitionVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetCoreDefinitionVersionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCoreDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetCoreDefinitionVersion.Arn'),
        outputPath: 'Arn',
        parameters: {
          CoreDefinitionId: this.input.coreDefinitionId,
          CoreDefinitionVersionId: this.input.coreDefinitionVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCoreDefinitionVersion.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCoreDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetCoreDefinitionVersion.CreationTimestamp'),
        outputPath: 'CreationTimestamp',
        parameters: {
          CoreDefinitionId: this.input.coreDefinitionId,
          CoreDefinitionVersionId: this.input.coreDefinitionVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCoreDefinitionVersion.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get definition(): GreengrassFetchCoreDefinitionVersionDefinition {
    return new GreengrassFetchCoreDefinitionVersionDefinition(this, 'Definition', this.__resources, this.input);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCoreDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetCoreDefinitionVersion.Id'),
        outputPath: 'Id',
        parameters: {
          CoreDefinitionId: this.input.coreDefinitionId,
          CoreDefinitionVersionId: this.input.coreDefinitionVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCoreDefinitionVersion.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCoreDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetCoreDefinitionVersion.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CoreDefinitionId: this.input.coreDefinitionId,
          CoreDefinitionVersionId: this.input.coreDefinitionVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCoreDefinitionVersion.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCoreDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetCoreDefinitionVersion.Version'),
        outputPath: 'Version',
        parameters: {
          CoreDefinitionId: this.input.coreDefinitionId,
          CoreDefinitionVersionId: this.input.coreDefinitionVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCoreDefinitionVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class GreengrassFetchCoreDefinitionVersionDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetCoreDefinitionVersionRequest) {
    super(scope, id);
  }

  public get cores(): shapes.GreengrassCore[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCoreDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetCoreDefinitionVersion.Definition.Cores'),
        outputPath: 'Definition.Cores',
        parameters: {
          CoreDefinitionId: this.input.coreDefinitionId,
          CoreDefinitionVersionId: this.input.coreDefinitionVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCoreDefinitionVersion.Definition.Cores', props);
    return resource.getResponseField('Definition.Cores') as unknown as shapes.GreengrassCore[];
  }

}

export class GreengrassFetchDeploymentStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetDeploymentStatusRequest) {
    super(scope, id);
  }

  public get deploymentStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentStatus',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetDeploymentStatus.DeploymentStatus'),
        outputPath: 'DeploymentStatus',
        parameters: {
          DeploymentId: this.input.deploymentId,
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentStatus.DeploymentStatus', props);
    return resource.getResponseField('DeploymentStatus') as unknown as string;
  }

  public get deploymentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentStatus',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetDeploymentStatus.DeploymentType'),
        outputPath: 'DeploymentType',
        parameters: {
          DeploymentId: this.input.deploymentId,
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentStatus.DeploymentType', props);
    return resource.getResponseField('DeploymentType') as unknown as string;
  }

  public get errorDetails(): shapes.GreengrassErrorDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentStatus',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetDeploymentStatus.ErrorDetails'),
        outputPath: 'ErrorDetails',
        parameters: {
          DeploymentId: this.input.deploymentId,
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentStatus.ErrorDetails', props);
    return resource.getResponseField('ErrorDetails') as unknown as shapes.GreengrassErrorDetail[];
  }

  public get errorMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentStatus',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetDeploymentStatus.ErrorMessage'),
        outputPath: 'ErrorMessage',
        parameters: {
          DeploymentId: this.input.deploymentId,
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentStatus.ErrorMessage', props);
    return resource.getResponseField('ErrorMessage') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentStatus',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetDeploymentStatus.UpdatedAt'),
        outputPath: 'UpdatedAt',
        parameters: {
          DeploymentId: this.input.deploymentId,
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentStatus.UpdatedAt', props);
    return resource.getResponseField('UpdatedAt') as unknown as string;
  }

}

export class GreengrassFetchDeviceDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetDeviceDefinitionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetDeviceDefinition.Arn'),
        outputPath: 'Arn',
        parameters: {
          DeviceDefinitionId: this.input.deviceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeviceDefinition.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetDeviceDefinition.CreationTimestamp'),
        outputPath: 'CreationTimestamp',
        parameters: {
          DeviceDefinitionId: this.input.deviceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeviceDefinition.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetDeviceDefinition.Id'),
        outputPath: 'Id',
        parameters: {
          DeviceDefinitionId: this.input.deviceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeviceDefinition.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get lastUpdatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetDeviceDefinition.LastUpdatedTimestamp'),
        outputPath: 'LastUpdatedTimestamp',
        parameters: {
          DeviceDefinitionId: this.input.deviceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeviceDefinition.LastUpdatedTimestamp', props);
    return resource.getResponseField('LastUpdatedTimestamp') as unknown as string;
  }

  public get latestVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetDeviceDefinition.LatestVersion'),
        outputPath: 'LatestVersion',
        parameters: {
          DeviceDefinitionId: this.input.deviceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeviceDefinition.LatestVersion', props);
    return resource.getResponseField('LatestVersion') as unknown as string;
  }

  public get latestVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetDeviceDefinition.LatestVersionArn'),
        outputPath: 'LatestVersionArn',
        parameters: {
          DeviceDefinitionId: this.input.deviceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeviceDefinition.LatestVersionArn', props);
    return resource.getResponseField('LatestVersionArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetDeviceDefinition.Name'),
        outputPath: 'Name',
        parameters: {
          DeviceDefinitionId: this.input.deviceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeviceDefinition.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetDeviceDefinition.tags'),
        outputPath: 'tags',
        parameters: {
          DeviceDefinitionId: this.input.deviceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeviceDefinition.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class GreengrassFetchDeviceDefinitionVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetDeviceDefinitionVersionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetDeviceDefinitionVersion.Arn'),
        outputPath: 'Arn',
        parameters: {
          DeviceDefinitionId: this.input.deviceDefinitionId,
          DeviceDefinitionVersionId: this.input.deviceDefinitionVersionId,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeviceDefinitionVersion.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetDeviceDefinitionVersion.CreationTimestamp'),
        outputPath: 'CreationTimestamp',
        parameters: {
          DeviceDefinitionId: this.input.deviceDefinitionId,
          DeviceDefinitionVersionId: this.input.deviceDefinitionVersionId,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeviceDefinitionVersion.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get definition(): GreengrassFetchDeviceDefinitionVersionDefinition {
    return new GreengrassFetchDeviceDefinitionVersionDefinition(this, 'Definition', this.__resources, this.input);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetDeviceDefinitionVersion.Id'),
        outputPath: 'Id',
        parameters: {
          DeviceDefinitionId: this.input.deviceDefinitionId,
          DeviceDefinitionVersionId: this.input.deviceDefinitionVersionId,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeviceDefinitionVersion.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetDeviceDefinitionVersion.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DeviceDefinitionId: this.input.deviceDefinitionId,
          DeviceDefinitionVersionId: this.input.deviceDefinitionVersionId,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeviceDefinitionVersion.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetDeviceDefinitionVersion.Version'),
        outputPath: 'Version',
        parameters: {
          DeviceDefinitionId: this.input.deviceDefinitionId,
          DeviceDefinitionVersionId: this.input.deviceDefinitionVersionId,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeviceDefinitionVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class GreengrassFetchDeviceDefinitionVersionDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetDeviceDefinitionVersionRequest) {
    super(scope, id);
  }

  public get devices(): shapes.GreengrassDevice[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetDeviceDefinitionVersion.Definition.Devices'),
        outputPath: 'Definition.Devices',
        parameters: {
          DeviceDefinitionId: this.input.deviceDefinitionId,
          DeviceDefinitionVersionId: this.input.deviceDefinitionVersionId,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeviceDefinitionVersion.Definition.Devices', props);
    return resource.getResponseField('Definition.Devices') as unknown as shapes.GreengrassDevice[];
  }

}

export class GreengrassFetchFunctionDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetFunctionDefinitionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetFunctionDefinition.Arn'),
        outputPath: 'Arn',
        parameters: {
          FunctionDefinitionId: this.input.functionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionDefinition.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetFunctionDefinition.CreationTimestamp'),
        outputPath: 'CreationTimestamp',
        parameters: {
          FunctionDefinitionId: this.input.functionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionDefinition.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetFunctionDefinition.Id'),
        outputPath: 'Id',
        parameters: {
          FunctionDefinitionId: this.input.functionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionDefinition.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get lastUpdatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetFunctionDefinition.LastUpdatedTimestamp'),
        outputPath: 'LastUpdatedTimestamp',
        parameters: {
          FunctionDefinitionId: this.input.functionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionDefinition.LastUpdatedTimestamp', props);
    return resource.getResponseField('LastUpdatedTimestamp') as unknown as string;
  }

  public get latestVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetFunctionDefinition.LatestVersion'),
        outputPath: 'LatestVersion',
        parameters: {
          FunctionDefinitionId: this.input.functionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionDefinition.LatestVersion', props);
    return resource.getResponseField('LatestVersion') as unknown as string;
  }

  public get latestVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetFunctionDefinition.LatestVersionArn'),
        outputPath: 'LatestVersionArn',
        parameters: {
          FunctionDefinitionId: this.input.functionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionDefinition.LatestVersionArn', props);
    return resource.getResponseField('LatestVersionArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetFunctionDefinition.Name'),
        outputPath: 'Name',
        parameters: {
          FunctionDefinitionId: this.input.functionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionDefinition.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetFunctionDefinition.tags'),
        outputPath: 'tags',
        parameters: {
          FunctionDefinitionId: this.input.functionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionDefinition.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class GreengrassFetchFunctionDefinitionVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetFunctionDefinitionVersionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetFunctionDefinitionVersion.Arn'),
        outputPath: 'Arn',
        parameters: {
          FunctionDefinitionId: this.input.functionDefinitionId,
          FunctionDefinitionVersionId: this.input.functionDefinitionVersionId,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionDefinitionVersion.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetFunctionDefinitionVersion.CreationTimestamp'),
        outputPath: 'CreationTimestamp',
        parameters: {
          FunctionDefinitionId: this.input.functionDefinitionId,
          FunctionDefinitionVersionId: this.input.functionDefinitionVersionId,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionDefinitionVersion.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get definition(): GreengrassFetchFunctionDefinitionVersionDefinition {
    return new GreengrassFetchFunctionDefinitionVersionDefinition(this, 'Definition', this.__resources, this.input);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetFunctionDefinitionVersion.Id'),
        outputPath: 'Id',
        parameters: {
          FunctionDefinitionId: this.input.functionDefinitionId,
          FunctionDefinitionVersionId: this.input.functionDefinitionVersionId,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionDefinitionVersion.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetFunctionDefinitionVersion.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          FunctionDefinitionId: this.input.functionDefinitionId,
          FunctionDefinitionVersionId: this.input.functionDefinitionVersionId,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionDefinitionVersion.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetFunctionDefinitionVersion.Version'),
        outputPath: 'Version',
        parameters: {
          FunctionDefinitionId: this.input.functionDefinitionId,
          FunctionDefinitionVersionId: this.input.functionDefinitionVersionId,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionDefinitionVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class GreengrassFetchFunctionDefinitionVersionDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetFunctionDefinitionVersionRequest) {
    super(scope, id);
  }

  public get defaultConfig(): GreengrassFetchFunctionDefinitionVersionDefinitionDefaultConfig {
    return new GreengrassFetchFunctionDefinitionVersionDefinitionDefaultConfig(this, 'DefaultConfig', this.__resources, this.input);
  }

  public get functions(): shapes.GreengrassFunction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetFunctionDefinitionVersion.Definition.Functions'),
        outputPath: 'Definition.Functions',
        parameters: {
          FunctionDefinitionId: this.input.functionDefinitionId,
          FunctionDefinitionVersionId: this.input.functionDefinitionVersionId,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionDefinitionVersion.Definition.Functions', props);
    return resource.getResponseField('Definition.Functions') as unknown as shapes.GreengrassFunction[];
  }

}

export class GreengrassFetchFunctionDefinitionVersionDefinitionDefaultConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetFunctionDefinitionVersionRequest) {
    super(scope, id);
  }

  public get execution(): GreengrassFetchFunctionDefinitionVersionDefinitionDefaultConfigExecution {
    return new GreengrassFetchFunctionDefinitionVersionDefinitionDefaultConfigExecution(this, 'Execution', this.__resources, this.input);
  }

}

export class GreengrassFetchFunctionDefinitionVersionDefinitionDefaultConfigExecution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetFunctionDefinitionVersionRequest) {
    super(scope, id);
  }

  public get isolationMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetFunctionDefinitionVersion.Definition.DefaultConfig.Execution.IsolationMode'),
        outputPath: 'Definition.DefaultConfig.Execution.IsolationMode',
        parameters: {
          FunctionDefinitionId: this.input.functionDefinitionId,
          FunctionDefinitionVersionId: this.input.functionDefinitionVersionId,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionDefinitionVersion.Definition.DefaultConfig.Execution.IsolationMode', props);
    return resource.getResponseField('Definition.DefaultConfig.Execution.IsolationMode') as unknown as string;
  }

  public get runAs(): GreengrassFetchFunctionDefinitionVersionDefinitionDefaultConfigExecutionRunAs {
    return new GreengrassFetchFunctionDefinitionVersionDefinitionDefaultConfigExecutionRunAs(this, 'RunAs', this.__resources, this.input);
  }

}

export class GreengrassFetchFunctionDefinitionVersionDefinitionDefaultConfigExecutionRunAs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetFunctionDefinitionVersionRequest) {
    super(scope, id);
  }

  public get gid(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetFunctionDefinitionVersion.Definition.DefaultConfig.Execution.RunAs.Gid'),
        outputPath: 'Definition.DefaultConfig.Execution.RunAs.Gid',
        parameters: {
          FunctionDefinitionId: this.input.functionDefinitionId,
          FunctionDefinitionVersionId: this.input.functionDefinitionVersionId,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionDefinitionVersion.Definition.DefaultConfig.Execution.RunAs.Gid', props);
    return resource.getResponseField('Definition.DefaultConfig.Execution.RunAs.Gid') as unknown as number;
  }

  public get uid(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunctionDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetFunctionDefinitionVersion.Definition.DefaultConfig.Execution.RunAs.Uid'),
        outputPath: 'Definition.DefaultConfig.Execution.RunAs.Uid',
        parameters: {
          FunctionDefinitionId: this.input.functionDefinitionId,
          FunctionDefinitionVersionId: this.input.functionDefinitionVersionId,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunctionDefinitionVersion.Definition.DefaultConfig.Execution.RunAs.Uid', props);
    return resource.getResponseField('Definition.DefaultConfig.Execution.RunAs.Uid') as unknown as number;
  }

}

export class GreengrassFetchGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetGroupRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroup',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetGroup.Arn'),
        outputPath: 'Arn',
        parameters: {
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroup.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroup',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetGroup.CreationTimestamp'),
        outputPath: 'CreationTimestamp',
        parameters: {
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroup.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroup',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetGroup.Id'),
        outputPath: 'Id',
        parameters: {
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroup.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get lastUpdatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroup',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetGroup.LastUpdatedTimestamp'),
        outputPath: 'LastUpdatedTimestamp',
        parameters: {
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroup.LastUpdatedTimestamp', props);
    return resource.getResponseField('LastUpdatedTimestamp') as unknown as string;
  }

  public get latestVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroup',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetGroup.LatestVersion'),
        outputPath: 'LatestVersion',
        parameters: {
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroup.LatestVersion', props);
    return resource.getResponseField('LatestVersion') as unknown as string;
  }

  public get latestVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroup',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetGroup.LatestVersionArn'),
        outputPath: 'LatestVersionArn',
        parameters: {
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroup.LatestVersionArn', props);
    return resource.getResponseField('LatestVersionArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroup',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetGroup.Name'),
        outputPath: 'Name',
        parameters: {
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroup.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroup',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetGroup.tags'),
        outputPath: 'tags',
        parameters: {
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroup.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class GreengrassFetchGroupCertificateAuthority extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetGroupCertificateAuthorityRequest) {
    super(scope, id);
  }

  public get groupCertificateAuthorityArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroupCertificateAuthority',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetGroupCertificateAuthority.GroupCertificateAuthorityArn'),
        outputPath: 'GroupCertificateAuthorityArn',
        parameters: {
          CertificateAuthorityId: this.input.certificateAuthorityId,
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroupCertificateAuthority.GroupCertificateAuthorityArn', props);
    return resource.getResponseField('GroupCertificateAuthorityArn') as unknown as string;
  }

  public get groupCertificateAuthorityId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroupCertificateAuthority',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetGroupCertificateAuthority.GroupCertificateAuthorityId'),
        outputPath: 'GroupCertificateAuthorityId',
        parameters: {
          CertificateAuthorityId: this.input.certificateAuthorityId,
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroupCertificateAuthority.GroupCertificateAuthorityId', props);
    return resource.getResponseField('GroupCertificateAuthorityId') as unknown as string;
  }

  public get pemEncodedCertificate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroupCertificateAuthority',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetGroupCertificateAuthority.PemEncodedCertificate'),
        outputPath: 'PemEncodedCertificate',
        parameters: {
          CertificateAuthorityId: this.input.certificateAuthorityId,
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroupCertificateAuthority.PemEncodedCertificate', props);
    return resource.getResponseField('PemEncodedCertificate') as unknown as string;
  }

}

export class GreengrassFetchGroupCertificateConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetGroupCertificateConfigurationRequest) {
    super(scope, id);
  }

  public get certificateAuthorityExpiryInMilliseconds(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroupCertificateConfiguration',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetGroupCertificateConfiguration.CertificateAuthorityExpiryInMilliseconds'),
        outputPath: 'CertificateAuthorityExpiryInMilliseconds',
        parameters: {
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroupCertificateConfiguration.CertificateAuthorityExpiryInMilliseconds', props);
    return resource.getResponseField('CertificateAuthorityExpiryInMilliseconds') as unknown as string;
  }

  public get certificateExpiryInMilliseconds(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroupCertificateConfiguration',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetGroupCertificateConfiguration.CertificateExpiryInMilliseconds'),
        outputPath: 'CertificateExpiryInMilliseconds',
        parameters: {
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroupCertificateConfiguration.CertificateExpiryInMilliseconds', props);
    return resource.getResponseField('CertificateExpiryInMilliseconds') as unknown as string;
  }

  public get groupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroupCertificateConfiguration',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetGroupCertificateConfiguration.GroupId'),
        outputPath: 'GroupId',
        parameters: {
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroupCertificateConfiguration.GroupId', props);
    return resource.getResponseField('GroupId') as unknown as string;
  }

}

export class GreengrassFetchGroupVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetGroupVersionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroupVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetGroupVersion.Arn'),
        outputPath: 'Arn',
        parameters: {
          GroupId: this.input.groupId,
          GroupVersionId: this.input.groupVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroupVersion.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroupVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetGroupVersion.CreationTimestamp'),
        outputPath: 'CreationTimestamp',
        parameters: {
          GroupId: this.input.groupId,
          GroupVersionId: this.input.groupVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroupVersion.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get definition(): GreengrassFetchGroupVersionDefinition {
    return new GreengrassFetchGroupVersionDefinition(this, 'Definition', this.__resources, this.input);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroupVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetGroupVersion.Id'),
        outputPath: 'Id',
        parameters: {
          GroupId: this.input.groupId,
          GroupVersionId: this.input.groupVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroupVersion.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroupVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetGroupVersion.Version'),
        outputPath: 'Version',
        parameters: {
          GroupId: this.input.groupId,
          GroupVersionId: this.input.groupVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroupVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class GreengrassFetchGroupVersionDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetGroupVersionRequest) {
    super(scope, id);
  }

  public get connectorDefinitionVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroupVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetGroupVersion.Definition.ConnectorDefinitionVersionArn'),
        outputPath: 'Definition.ConnectorDefinitionVersionArn',
        parameters: {
          GroupId: this.input.groupId,
          GroupVersionId: this.input.groupVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroupVersion.Definition.ConnectorDefinitionVersionArn', props);
    return resource.getResponseField('Definition.ConnectorDefinitionVersionArn') as unknown as string;
  }

  public get coreDefinitionVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroupVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetGroupVersion.Definition.CoreDefinitionVersionArn'),
        outputPath: 'Definition.CoreDefinitionVersionArn',
        parameters: {
          GroupId: this.input.groupId,
          GroupVersionId: this.input.groupVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroupVersion.Definition.CoreDefinitionVersionArn', props);
    return resource.getResponseField('Definition.CoreDefinitionVersionArn') as unknown as string;
  }

  public get deviceDefinitionVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroupVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetGroupVersion.Definition.DeviceDefinitionVersionArn'),
        outputPath: 'Definition.DeviceDefinitionVersionArn',
        parameters: {
          GroupId: this.input.groupId,
          GroupVersionId: this.input.groupVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroupVersion.Definition.DeviceDefinitionVersionArn', props);
    return resource.getResponseField('Definition.DeviceDefinitionVersionArn') as unknown as string;
  }

  public get functionDefinitionVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroupVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetGroupVersion.Definition.FunctionDefinitionVersionArn'),
        outputPath: 'Definition.FunctionDefinitionVersionArn',
        parameters: {
          GroupId: this.input.groupId,
          GroupVersionId: this.input.groupVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroupVersion.Definition.FunctionDefinitionVersionArn', props);
    return resource.getResponseField('Definition.FunctionDefinitionVersionArn') as unknown as string;
  }

  public get loggerDefinitionVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroupVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetGroupVersion.Definition.LoggerDefinitionVersionArn'),
        outputPath: 'Definition.LoggerDefinitionVersionArn',
        parameters: {
          GroupId: this.input.groupId,
          GroupVersionId: this.input.groupVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroupVersion.Definition.LoggerDefinitionVersionArn', props);
    return resource.getResponseField('Definition.LoggerDefinitionVersionArn') as unknown as string;
  }

  public get resourceDefinitionVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroupVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetGroupVersion.Definition.ResourceDefinitionVersionArn'),
        outputPath: 'Definition.ResourceDefinitionVersionArn',
        parameters: {
          GroupId: this.input.groupId,
          GroupVersionId: this.input.groupVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroupVersion.Definition.ResourceDefinitionVersionArn', props);
    return resource.getResponseField('Definition.ResourceDefinitionVersionArn') as unknown as string;
  }

  public get subscriptionDefinitionVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroupVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetGroupVersion.Definition.SubscriptionDefinitionVersionArn'),
        outputPath: 'Definition.SubscriptionDefinitionVersionArn',
        parameters: {
          GroupId: this.input.groupId,
          GroupVersionId: this.input.groupVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroupVersion.Definition.SubscriptionDefinitionVersionArn', props);
    return resource.getResponseField('Definition.SubscriptionDefinitionVersionArn') as unknown as string;
  }

}

export class GreengrassFetchLoggerDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetLoggerDefinitionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoggerDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetLoggerDefinition.Arn'),
        outputPath: 'Arn',
        parameters: {
          LoggerDefinitionId: this.input.loggerDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoggerDefinition.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoggerDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetLoggerDefinition.CreationTimestamp'),
        outputPath: 'CreationTimestamp',
        parameters: {
          LoggerDefinitionId: this.input.loggerDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoggerDefinition.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoggerDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetLoggerDefinition.Id'),
        outputPath: 'Id',
        parameters: {
          LoggerDefinitionId: this.input.loggerDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoggerDefinition.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get lastUpdatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoggerDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetLoggerDefinition.LastUpdatedTimestamp'),
        outputPath: 'LastUpdatedTimestamp',
        parameters: {
          LoggerDefinitionId: this.input.loggerDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoggerDefinition.LastUpdatedTimestamp', props);
    return resource.getResponseField('LastUpdatedTimestamp') as unknown as string;
  }

  public get latestVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoggerDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetLoggerDefinition.LatestVersion'),
        outputPath: 'LatestVersion',
        parameters: {
          LoggerDefinitionId: this.input.loggerDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoggerDefinition.LatestVersion', props);
    return resource.getResponseField('LatestVersion') as unknown as string;
  }

  public get latestVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoggerDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetLoggerDefinition.LatestVersionArn'),
        outputPath: 'LatestVersionArn',
        parameters: {
          LoggerDefinitionId: this.input.loggerDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoggerDefinition.LatestVersionArn', props);
    return resource.getResponseField('LatestVersionArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoggerDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetLoggerDefinition.Name'),
        outputPath: 'Name',
        parameters: {
          LoggerDefinitionId: this.input.loggerDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoggerDefinition.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoggerDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetLoggerDefinition.tags'),
        outputPath: 'tags',
        parameters: {
          LoggerDefinitionId: this.input.loggerDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoggerDefinition.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class GreengrassFetchLoggerDefinitionVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetLoggerDefinitionVersionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoggerDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetLoggerDefinitionVersion.Arn'),
        outputPath: 'Arn',
        parameters: {
          LoggerDefinitionId: this.input.loggerDefinitionId,
          LoggerDefinitionVersionId: this.input.loggerDefinitionVersionId,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoggerDefinitionVersion.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoggerDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetLoggerDefinitionVersion.CreationTimestamp'),
        outputPath: 'CreationTimestamp',
        parameters: {
          LoggerDefinitionId: this.input.loggerDefinitionId,
          LoggerDefinitionVersionId: this.input.loggerDefinitionVersionId,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoggerDefinitionVersion.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get definition(): GreengrassFetchLoggerDefinitionVersionDefinition {
    return new GreengrassFetchLoggerDefinitionVersionDefinition(this, 'Definition', this.__resources, this.input);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoggerDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetLoggerDefinitionVersion.Id'),
        outputPath: 'Id',
        parameters: {
          LoggerDefinitionId: this.input.loggerDefinitionId,
          LoggerDefinitionVersionId: this.input.loggerDefinitionVersionId,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoggerDefinitionVersion.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoggerDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetLoggerDefinitionVersion.Version'),
        outputPath: 'Version',
        parameters: {
          LoggerDefinitionId: this.input.loggerDefinitionId,
          LoggerDefinitionVersionId: this.input.loggerDefinitionVersionId,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoggerDefinitionVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class GreengrassFetchLoggerDefinitionVersionDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetLoggerDefinitionVersionRequest) {
    super(scope, id);
  }

  public get loggers(): shapes.GreengrassLogger[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoggerDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetLoggerDefinitionVersion.Definition.Loggers'),
        outputPath: 'Definition.Loggers',
        parameters: {
          LoggerDefinitionId: this.input.loggerDefinitionId,
          LoggerDefinitionVersionId: this.input.loggerDefinitionVersionId,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoggerDefinitionVersion.Definition.Loggers', props);
    return resource.getResponseField('Definition.Loggers') as unknown as shapes.GreengrassLogger[];
  }

}

export class GreengrassFetchResourceDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetResourceDefinitionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourceDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetResourceDefinition.Arn'),
        outputPath: 'Arn',
        parameters: {
          ResourceDefinitionId: this.input.resourceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourceDefinition.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourceDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetResourceDefinition.CreationTimestamp'),
        outputPath: 'CreationTimestamp',
        parameters: {
          ResourceDefinitionId: this.input.resourceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourceDefinition.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourceDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetResourceDefinition.Id'),
        outputPath: 'Id',
        parameters: {
          ResourceDefinitionId: this.input.resourceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourceDefinition.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get lastUpdatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourceDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetResourceDefinition.LastUpdatedTimestamp'),
        outputPath: 'LastUpdatedTimestamp',
        parameters: {
          ResourceDefinitionId: this.input.resourceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourceDefinition.LastUpdatedTimestamp', props);
    return resource.getResponseField('LastUpdatedTimestamp') as unknown as string;
  }

  public get latestVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourceDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetResourceDefinition.LatestVersion'),
        outputPath: 'LatestVersion',
        parameters: {
          ResourceDefinitionId: this.input.resourceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourceDefinition.LatestVersion', props);
    return resource.getResponseField('LatestVersion') as unknown as string;
  }

  public get latestVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourceDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetResourceDefinition.LatestVersionArn'),
        outputPath: 'LatestVersionArn',
        parameters: {
          ResourceDefinitionId: this.input.resourceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourceDefinition.LatestVersionArn', props);
    return resource.getResponseField('LatestVersionArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourceDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetResourceDefinition.Name'),
        outputPath: 'Name',
        parameters: {
          ResourceDefinitionId: this.input.resourceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourceDefinition.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourceDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetResourceDefinition.tags'),
        outputPath: 'tags',
        parameters: {
          ResourceDefinitionId: this.input.resourceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourceDefinition.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class GreengrassFetchResourceDefinitionVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetResourceDefinitionVersionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourceDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetResourceDefinitionVersion.Arn'),
        outputPath: 'Arn',
        parameters: {
          ResourceDefinitionId: this.input.resourceDefinitionId,
          ResourceDefinitionVersionId: this.input.resourceDefinitionVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourceDefinitionVersion.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourceDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetResourceDefinitionVersion.CreationTimestamp'),
        outputPath: 'CreationTimestamp',
        parameters: {
          ResourceDefinitionId: this.input.resourceDefinitionId,
          ResourceDefinitionVersionId: this.input.resourceDefinitionVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourceDefinitionVersion.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get definition(): GreengrassFetchResourceDefinitionVersionDefinition {
    return new GreengrassFetchResourceDefinitionVersionDefinition(this, 'Definition', this.__resources, this.input);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourceDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetResourceDefinitionVersion.Id'),
        outputPath: 'Id',
        parameters: {
          ResourceDefinitionId: this.input.resourceDefinitionId,
          ResourceDefinitionVersionId: this.input.resourceDefinitionVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourceDefinitionVersion.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourceDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetResourceDefinitionVersion.Version'),
        outputPath: 'Version',
        parameters: {
          ResourceDefinitionId: this.input.resourceDefinitionId,
          ResourceDefinitionVersionId: this.input.resourceDefinitionVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourceDefinitionVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class GreengrassFetchResourceDefinitionVersionDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetResourceDefinitionVersionRequest) {
    super(scope, id);
  }

  public get resources(): shapes.GreengrassResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourceDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetResourceDefinitionVersion.Definition.Resources'),
        outputPath: 'Definition.Resources',
        parameters: {
          ResourceDefinitionId: this.input.resourceDefinitionId,
          ResourceDefinitionVersionId: this.input.resourceDefinitionVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourceDefinitionVersion.Definition.Resources', props);
    return resource.getResponseField('Definition.Resources') as unknown as shapes.GreengrassResource[];
  }

}

export class GreengrassFetchServiceRoleForAccount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get associatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceRoleForAccount',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetServiceRoleForAccount.AssociatedAt'),
        outputPath: 'AssociatedAt',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceRoleForAccount.AssociatedAt', props);
    return resource.getResponseField('AssociatedAt') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceRoleForAccount',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetServiceRoleForAccount.RoleArn'),
        outputPath: 'RoleArn',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceRoleForAccount.RoleArn', props);
    return resource.getResponseField('RoleArn') as unknown as string;
  }

}

export class GreengrassFetchSubscriptionDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetSubscriptionDefinitionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSubscriptionDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetSubscriptionDefinition.Arn'),
        outputPath: 'Arn',
        parameters: {
          SubscriptionDefinitionId: this.input.subscriptionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSubscriptionDefinition.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSubscriptionDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetSubscriptionDefinition.CreationTimestamp'),
        outputPath: 'CreationTimestamp',
        parameters: {
          SubscriptionDefinitionId: this.input.subscriptionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSubscriptionDefinition.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSubscriptionDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetSubscriptionDefinition.Id'),
        outputPath: 'Id',
        parameters: {
          SubscriptionDefinitionId: this.input.subscriptionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSubscriptionDefinition.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get lastUpdatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSubscriptionDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetSubscriptionDefinition.LastUpdatedTimestamp'),
        outputPath: 'LastUpdatedTimestamp',
        parameters: {
          SubscriptionDefinitionId: this.input.subscriptionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSubscriptionDefinition.LastUpdatedTimestamp', props);
    return resource.getResponseField('LastUpdatedTimestamp') as unknown as string;
  }

  public get latestVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSubscriptionDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetSubscriptionDefinition.LatestVersion'),
        outputPath: 'LatestVersion',
        parameters: {
          SubscriptionDefinitionId: this.input.subscriptionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSubscriptionDefinition.LatestVersion', props);
    return resource.getResponseField('LatestVersion') as unknown as string;
  }

  public get latestVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSubscriptionDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetSubscriptionDefinition.LatestVersionArn'),
        outputPath: 'LatestVersionArn',
        parameters: {
          SubscriptionDefinitionId: this.input.subscriptionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSubscriptionDefinition.LatestVersionArn', props);
    return resource.getResponseField('LatestVersionArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSubscriptionDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetSubscriptionDefinition.Name'),
        outputPath: 'Name',
        parameters: {
          SubscriptionDefinitionId: this.input.subscriptionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSubscriptionDefinition.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSubscriptionDefinition',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetSubscriptionDefinition.tags'),
        outputPath: 'tags',
        parameters: {
          SubscriptionDefinitionId: this.input.subscriptionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSubscriptionDefinition.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class GreengrassFetchSubscriptionDefinitionVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetSubscriptionDefinitionVersionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSubscriptionDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetSubscriptionDefinitionVersion.Arn'),
        outputPath: 'Arn',
        parameters: {
          NextToken: this.input.nextToken,
          SubscriptionDefinitionId: this.input.subscriptionDefinitionId,
          SubscriptionDefinitionVersionId: this.input.subscriptionDefinitionVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSubscriptionDefinitionVersion.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSubscriptionDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetSubscriptionDefinitionVersion.CreationTimestamp'),
        outputPath: 'CreationTimestamp',
        parameters: {
          NextToken: this.input.nextToken,
          SubscriptionDefinitionId: this.input.subscriptionDefinitionId,
          SubscriptionDefinitionVersionId: this.input.subscriptionDefinitionVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSubscriptionDefinitionVersion.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get definition(): GreengrassFetchSubscriptionDefinitionVersionDefinition {
    return new GreengrassFetchSubscriptionDefinitionVersionDefinition(this, 'Definition', this.__resources, this.input);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSubscriptionDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetSubscriptionDefinitionVersion.Id'),
        outputPath: 'Id',
        parameters: {
          NextToken: this.input.nextToken,
          SubscriptionDefinitionId: this.input.subscriptionDefinitionId,
          SubscriptionDefinitionVersionId: this.input.subscriptionDefinitionVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSubscriptionDefinitionVersion.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSubscriptionDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetSubscriptionDefinitionVersion.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          SubscriptionDefinitionId: this.input.subscriptionDefinitionId,
          SubscriptionDefinitionVersionId: this.input.subscriptionDefinitionVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSubscriptionDefinitionVersion.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSubscriptionDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetSubscriptionDefinitionVersion.Version'),
        outputPath: 'Version',
        parameters: {
          NextToken: this.input.nextToken,
          SubscriptionDefinitionId: this.input.subscriptionDefinitionId,
          SubscriptionDefinitionVersionId: this.input.subscriptionDefinitionVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSubscriptionDefinitionVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class GreengrassFetchSubscriptionDefinitionVersionDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetSubscriptionDefinitionVersionRequest) {
    super(scope, id);
  }

  public get subscriptions(): shapes.GreengrassSubscription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSubscriptionDefinitionVersion',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetSubscriptionDefinitionVersion.Definition.Subscriptions'),
        outputPath: 'Definition.Subscriptions',
        parameters: {
          NextToken: this.input.nextToken,
          SubscriptionDefinitionId: this.input.subscriptionDefinitionId,
          SubscriptionDefinitionVersionId: this.input.subscriptionDefinitionVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSubscriptionDefinitionVersion.Definition.Subscriptions', props);
    return resource.getResponseField('Definition.Subscriptions') as unknown as shapes.GreengrassSubscription[];
  }

}

export class GreengrassFetchThingRuntimeConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetThingRuntimeConfigurationRequest) {
    super(scope, id);
  }

  public get runtimeConfiguration(): GreengrassFetchThingRuntimeConfigurationRuntimeConfiguration {
    return new GreengrassFetchThingRuntimeConfigurationRuntimeConfiguration(this, 'RuntimeConfiguration', this.__resources, this.input);
  }

}

export class GreengrassFetchThingRuntimeConfigurationRuntimeConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetThingRuntimeConfigurationRequest) {
    super(scope, id);
  }

  public get telemetryConfiguration(): GreengrassFetchThingRuntimeConfigurationRuntimeConfigurationTelemetryConfiguration {
    return new GreengrassFetchThingRuntimeConfigurationRuntimeConfigurationTelemetryConfiguration(this, 'TelemetryConfiguration', this.__resources, this.input);
  }

}

export class GreengrassFetchThingRuntimeConfigurationRuntimeConfigurationTelemetryConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassGetThingRuntimeConfigurationRequest) {
    super(scope, id);
  }

  public get configurationSyncStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getThingRuntimeConfiguration',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetThingRuntimeConfiguration.RuntimeConfiguration.TelemetryConfiguration.ConfigurationSyncStatus'),
        outputPath: 'RuntimeConfiguration.TelemetryConfiguration.ConfigurationSyncStatus',
        parameters: {
          ThingName: this.input.thingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetThingRuntimeConfiguration.RuntimeConfiguration.TelemetryConfiguration.ConfigurationSyncStatus', props);
    return resource.getResponseField('RuntimeConfiguration.TelemetryConfiguration.ConfigurationSyncStatus') as unknown as string;
  }

  public get telemetry(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getThingRuntimeConfiguration',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.GetThingRuntimeConfiguration.RuntimeConfiguration.TelemetryConfiguration.Telemetry'),
        outputPath: 'RuntimeConfiguration.TelemetryConfiguration.Telemetry',
        parameters: {
          ThingName: this.input.thingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetThingRuntimeConfiguration.RuntimeConfiguration.TelemetryConfiguration.Telemetry', props);
    return resource.getResponseField('RuntimeConfiguration.TelemetryConfiguration.Telemetry') as unknown as string;
  }

}

export class GreengrassListBulkDeploymentDetailedReports extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassListBulkDeploymentDetailedReportsRequest) {
    super(scope, id);
  }

  public get deployments(): shapes.GreengrassBulkDeploymentResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBulkDeploymentDetailedReports',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListBulkDeploymentDetailedReports.Deployments'),
        outputPath: 'Deployments',
        parameters: {
          BulkDeploymentId: this.input.bulkDeploymentId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBulkDeploymentDetailedReports.Deployments', props);
    return resource.getResponseField('Deployments') as unknown as shapes.GreengrassBulkDeploymentResult[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBulkDeploymentDetailedReports',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListBulkDeploymentDetailedReports.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          BulkDeploymentId: this.input.bulkDeploymentId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBulkDeploymentDetailedReports.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GreengrassListBulkDeployments extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassListBulkDeploymentsRequest) {
    super(scope, id);
  }

  public get bulkDeployments(): shapes.GreengrassBulkDeployment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBulkDeployments',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListBulkDeployments.BulkDeployments'),
        outputPath: 'BulkDeployments',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBulkDeployments.BulkDeployments', props);
    return resource.getResponseField('BulkDeployments') as unknown as shapes.GreengrassBulkDeployment[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBulkDeployments',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListBulkDeployments.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBulkDeployments.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GreengrassListConnectorDefinitionVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassListConnectorDefinitionVersionsRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConnectorDefinitionVersions',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListConnectorDefinitionVersions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ConnectorDefinitionId: this.input.connectorDefinitionId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListConnectorDefinitionVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get versions(): shapes.GreengrassVersionInformation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConnectorDefinitionVersions',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListConnectorDefinitionVersions.Versions'),
        outputPath: 'Versions',
        parameters: {
          ConnectorDefinitionId: this.input.connectorDefinitionId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListConnectorDefinitionVersions.Versions', props);
    return resource.getResponseField('Versions') as unknown as shapes.GreengrassVersionInformation[];
  }

}

export class GreengrassListConnectorDefinitions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassListConnectorDefinitionsRequest) {
    super(scope, id);
  }

  public get definitions(): shapes.GreengrassDefinitionInformation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConnectorDefinitions',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListConnectorDefinitions.Definitions'),
        outputPath: 'Definitions',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListConnectorDefinitions.Definitions', props);
    return resource.getResponseField('Definitions') as unknown as shapes.GreengrassDefinitionInformation[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConnectorDefinitions',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListConnectorDefinitions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListConnectorDefinitions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GreengrassListCoreDefinitionVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassListCoreDefinitionVersionsRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCoreDefinitionVersions',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListCoreDefinitionVersions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CoreDefinitionId: this.input.coreDefinitionId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCoreDefinitionVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get versions(): shapes.GreengrassVersionInformation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCoreDefinitionVersions',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListCoreDefinitionVersions.Versions'),
        outputPath: 'Versions',
        parameters: {
          CoreDefinitionId: this.input.coreDefinitionId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCoreDefinitionVersions.Versions', props);
    return resource.getResponseField('Versions') as unknown as shapes.GreengrassVersionInformation[];
  }

}

export class GreengrassListCoreDefinitions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassListCoreDefinitionsRequest) {
    super(scope, id);
  }

  public get definitions(): shapes.GreengrassDefinitionInformation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCoreDefinitions',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListCoreDefinitions.Definitions'),
        outputPath: 'Definitions',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCoreDefinitions.Definitions', props);
    return resource.getResponseField('Definitions') as unknown as shapes.GreengrassDefinitionInformation[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCoreDefinitions',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListCoreDefinitions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCoreDefinitions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GreengrassListDeployments extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassListDeploymentsRequest) {
    super(scope, id);
  }

  public get deployments(): shapes.GreengrassDeployment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeployments',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListDeployments.Deployments'),
        outputPath: 'Deployments',
        parameters: {
          GroupId: this.input.groupId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDeployments.Deployments', props);
    return resource.getResponseField('Deployments') as unknown as shapes.GreengrassDeployment[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeployments',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListDeployments.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          GroupId: this.input.groupId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDeployments.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GreengrassListDeviceDefinitionVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassListDeviceDefinitionVersionsRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeviceDefinitionVersions',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListDeviceDefinitionVersions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DeviceDefinitionId: this.input.deviceDefinitionId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDeviceDefinitionVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get versions(): shapes.GreengrassVersionInformation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeviceDefinitionVersions',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListDeviceDefinitionVersions.Versions'),
        outputPath: 'Versions',
        parameters: {
          DeviceDefinitionId: this.input.deviceDefinitionId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDeviceDefinitionVersions.Versions', props);
    return resource.getResponseField('Versions') as unknown as shapes.GreengrassVersionInformation[];
  }

}

export class GreengrassListDeviceDefinitions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassListDeviceDefinitionsRequest) {
    super(scope, id);
  }

  public get definitions(): shapes.GreengrassDefinitionInformation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeviceDefinitions',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListDeviceDefinitions.Definitions'),
        outputPath: 'Definitions',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDeviceDefinitions.Definitions', props);
    return resource.getResponseField('Definitions') as unknown as shapes.GreengrassDefinitionInformation[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeviceDefinitions',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListDeviceDefinitions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDeviceDefinitions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GreengrassListFunctionDefinitionVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassListFunctionDefinitionVersionsRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFunctionDefinitionVersions',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListFunctionDefinitionVersions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          FunctionDefinitionId: this.input.functionDefinitionId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFunctionDefinitionVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get versions(): shapes.GreengrassVersionInformation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFunctionDefinitionVersions',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListFunctionDefinitionVersions.Versions'),
        outputPath: 'Versions',
        parameters: {
          FunctionDefinitionId: this.input.functionDefinitionId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFunctionDefinitionVersions.Versions', props);
    return resource.getResponseField('Versions') as unknown as shapes.GreengrassVersionInformation[];
  }

}

export class GreengrassListFunctionDefinitions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassListFunctionDefinitionsRequest) {
    super(scope, id);
  }

  public get definitions(): shapes.GreengrassDefinitionInformation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFunctionDefinitions',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListFunctionDefinitions.Definitions'),
        outputPath: 'Definitions',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFunctionDefinitions.Definitions', props);
    return resource.getResponseField('Definitions') as unknown as shapes.GreengrassDefinitionInformation[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFunctionDefinitions',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListFunctionDefinitions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFunctionDefinitions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GreengrassListGroupCertificateAuthorities extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassListGroupCertificateAuthoritiesRequest) {
    super(scope, id);
  }

  public get groupCertificateAuthorities(): shapes.GreengrassGroupCertificateAuthorityProperties[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroupCertificateAuthorities',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListGroupCertificateAuthorities.GroupCertificateAuthorities'),
        outputPath: 'GroupCertificateAuthorities',
        parameters: {
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroupCertificateAuthorities.GroupCertificateAuthorities', props);
    return resource.getResponseField('GroupCertificateAuthorities') as unknown as shapes.GreengrassGroupCertificateAuthorityProperties[];
  }

}

export class GreengrassListGroupVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassListGroupVersionsRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroupVersions',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListGroupVersions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          GroupId: this.input.groupId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroupVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get versions(): shapes.GreengrassVersionInformation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroupVersions',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListGroupVersions.Versions'),
        outputPath: 'Versions',
        parameters: {
          GroupId: this.input.groupId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroupVersions.Versions', props);
    return resource.getResponseField('Versions') as unknown as shapes.GreengrassVersionInformation[];
  }

}

export class GreengrassListGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassListGroupsRequest) {
    super(scope, id);
  }

  public get groups(): shapes.GreengrassGroupInformation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroups',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListGroups.Groups'),
        outputPath: 'Groups',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroups.Groups', props);
    return resource.getResponseField('Groups') as unknown as shapes.GreengrassGroupInformation[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroups',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListGroups.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GreengrassListLoggerDefinitionVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassListLoggerDefinitionVersionsRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLoggerDefinitionVersions',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListLoggerDefinitionVersions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          LoggerDefinitionId: this.input.loggerDefinitionId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLoggerDefinitionVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get versions(): shapes.GreengrassVersionInformation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLoggerDefinitionVersions',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListLoggerDefinitionVersions.Versions'),
        outputPath: 'Versions',
        parameters: {
          LoggerDefinitionId: this.input.loggerDefinitionId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLoggerDefinitionVersions.Versions', props);
    return resource.getResponseField('Versions') as unknown as shapes.GreengrassVersionInformation[];
  }

}

export class GreengrassListLoggerDefinitions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassListLoggerDefinitionsRequest) {
    super(scope, id);
  }

  public get definitions(): shapes.GreengrassDefinitionInformation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLoggerDefinitions',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListLoggerDefinitions.Definitions'),
        outputPath: 'Definitions',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLoggerDefinitions.Definitions', props);
    return resource.getResponseField('Definitions') as unknown as shapes.GreengrassDefinitionInformation[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLoggerDefinitions',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListLoggerDefinitions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLoggerDefinitions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GreengrassListResourceDefinitionVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassListResourceDefinitionVersionsRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourceDefinitionVersions',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListResourceDefinitionVersions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          ResourceDefinitionId: this.input.resourceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResourceDefinitionVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get versions(): shapes.GreengrassVersionInformation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourceDefinitionVersions',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListResourceDefinitionVersions.Versions'),
        outputPath: 'Versions',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          ResourceDefinitionId: this.input.resourceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResourceDefinitionVersions.Versions', props);
    return resource.getResponseField('Versions') as unknown as shapes.GreengrassVersionInformation[];
  }

}

export class GreengrassListResourceDefinitions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassListResourceDefinitionsRequest) {
    super(scope, id);
  }

  public get definitions(): shapes.GreengrassDefinitionInformation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourceDefinitions',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListResourceDefinitions.Definitions'),
        outputPath: 'Definitions',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResourceDefinitions.Definitions', props);
    return resource.getResponseField('Definitions') as unknown as shapes.GreengrassDefinitionInformation[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourceDefinitions',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListResourceDefinitions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResourceDefinitions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GreengrassListSubscriptionDefinitionVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassListSubscriptionDefinitionVersionsRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSubscriptionDefinitionVersions',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListSubscriptionDefinitionVersions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          SubscriptionDefinitionId: this.input.subscriptionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSubscriptionDefinitionVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get versions(): shapes.GreengrassVersionInformation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSubscriptionDefinitionVersions',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListSubscriptionDefinitionVersions.Versions'),
        outputPath: 'Versions',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          SubscriptionDefinitionId: this.input.subscriptionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSubscriptionDefinitionVersions.Versions', props);
    return resource.getResponseField('Versions') as unknown as shapes.GreengrassVersionInformation[];
  }

}

export class GreengrassListSubscriptionDefinitions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassListSubscriptionDefinitionsRequest) {
    super(scope, id);
  }

  public get definitions(): shapes.GreengrassDefinitionInformation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSubscriptionDefinitions',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListSubscriptionDefinitions.Definitions'),
        outputPath: 'Definitions',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSubscriptionDefinitions.Definitions', props);
    return resource.getResponseField('Definitions') as unknown as shapes.GreengrassDefinitionInformation[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSubscriptionDefinitions',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListSubscriptionDefinitions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSubscriptionDefinitions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GreengrassListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassListTagsForResourceRequest) {
    super(scope, id);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class GreengrassResetDeployments extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassResetDeploymentsRequest) {
    super(scope, id);
  }

  public get deploymentArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetDeployments',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ResetDeployments.DeploymentArn'),
        outputPath: 'DeploymentArn',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          Force: this.input.force,
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetDeployments.DeploymentArn', props);
    return resource.getResponseField('DeploymentArn') as unknown as string;
  }

  public get deploymentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetDeployments',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.ResetDeployments.DeploymentId'),
        outputPath: 'DeploymentId',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          Force: this.input.force,
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetDeployments.DeploymentId', props);
    return resource.getResponseField('DeploymentId') as unknown as string;
  }

}

export class GreengrassStartBulkDeployment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassStartBulkDeploymentRequest) {
    super(scope, id);
  }

  public get bulkDeploymentArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startBulkDeployment',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.StartBulkDeployment.BulkDeploymentArn'),
        outputPath: 'BulkDeploymentArn',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          ExecutionRoleArn: this.input.executionRoleArn,
          InputFileUri: this.input.inputFileUri,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartBulkDeployment.BulkDeploymentArn', props);
    return resource.getResponseField('BulkDeploymentArn') as unknown as string;
  }

  public get bulkDeploymentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startBulkDeployment',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.StartBulkDeployment.BulkDeploymentId'),
        outputPath: 'BulkDeploymentId',
        parameters: {
          AmznClientToken: this.input.amznClientToken,
          ExecutionRoleArn: this.input.executionRoleArn,
          InputFileUri: this.input.inputFileUri,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartBulkDeployment.BulkDeploymentId', props);
    return resource.getResponseField('BulkDeploymentId') as unknown as string;
  }

}

export class GreengrassUpdateConnectivityInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassUpdateConnectivityInfoRequest) {
    super(scope, id);
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConnectivityInfo',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.UpdateConnectivityInfo.Message'),
        outputPath: 'Message',
        parameters: {
          ConnectivityInfo: this.input.connectivityInfo,
          ThingName: this.input.thingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConnectivityInfo.Message', props);
    return resource.getResponseField('Message') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConnectivityInfo',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.UpdateConnectivityInfo.Version'),
        outputPath: 'Version',
        parameters: {
          ConnectivityInfo: this.input.connectivityInfo,
          ThingName: this.input.thingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConnectivityInfo.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class GreengrassUpdateGroupCertificateConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GreengrassUpdateGroupCertificateConfigurationRequest) {
    super(scope, id);
  }

  public get certificateAuthorityExpiryInMilliseconds(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGroupCertificateConfiguration',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.UpdateGroupCertificateConfiguration.CertificateAuthorityExpiryInMilliseconds'),
        outputPath: 'CertificateAuthorityExpiryInMilliseconds',
        parameters: {
          CertificateExpiryInMilliseconds: this.input.certificateExpiryInMilliseconds,
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGroupCertificateConfiguration.CertificateAuthorityExpiryInMilliseconds', props);
    return resource.getResponseField('CertificateAuthorityExpiryInMilliseconds') as unknown as string;
  }

  public get certificateExpiryInMilliseconds(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGroupCertificateConfiguration',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.UpdateGroupCertificateConfiguration.CertificateExpiryInMilliseconds'),
        outputPath: 'CertificateExpiryInMilliseconds',
        parameters: {
          CertificateExpiryInMilliseconds: this.input.certificateExpiryInMilliseconds,
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGroupCertificateConfiguration.CertificateExpiryInMilliseconds', props);
    return resource.getResponseField('CertificateExpiryInMilliseconds') as unknown as string;
  }

  public get groupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGroupCertificateConfiguration',
        service: 'Greengrass',
        physicalResourceId: cr.PhysicalResourceId.of('Greengrass.UpdateGroupCertificateConfiguration.GroupId'),
        outputPath: 'GroupId',
        parameters: {
          CertificateExpiryInMilliseconds: this.input.certificateExpiryInMilliseconds,
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGroupCertificateConfiguration.GroupId', props);
    return resource.getResponseField('GroupId') as unknown as string;
  }

}

