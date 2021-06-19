import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class GreengrassClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateRoleToGroup(input: shapes.GreengrassAssociateRoleToGroupRequest): GreengrassResponsesAssociateRoleToGroup {
    return new GreengrassResponsesAssociateRoleToGroup(this, this.__resources, input);
  }

  public associateServiceRoleToAccount(input: shapes.GreengrassAssociateServiceRoleToAccountRequest): GreengrassResponsesAssociateServiceRoleToAccount {
    return new GreengrassResponsesAssociateServiceRoleToAccount(this, this.__resources, input);
  }

  public createConnectorDefinition(input: shapes.GreengrassCreateConnectorDefinitionRequest): GreengrassResponsesCreateConnectorDefinition {
    return new GreengrassResponsesCreateConnectorDefinition(this, this.__resources, input);
  }

  public createConnectorDefinitionVersion(input: shapes.GreengrassCreateConnectorDefinitionVersionRequest): GreengrassResponsesCreateConnectorDefinitionVersion {
    return new GreengrassResponsesCreateConnectorDefinitionVersion(this, this.__resources, input);
  }

  public createCoreDefinition(input: shapes.GreengrassCreateCoreDefinitionRequest): GreengrassResponsesCreateCoreDefinition {
    return new GreengrassResponsesCreateCoreDefinition(this, this.__resources, input);
  }

  public createCoreDefinitionVersion(input: shapes.GreengrassCreateCoreDefinitionVersionRequest): GreengrassResponsesCreateCoreDefinitionVersion {
    return new GreengrassResponsesCreateCoreDefinitionVersion(this, this.__resources, input);
  }

  public createDeployment(input: shapes.GreengrassCreateDeploymentRequest): GreengrassResponsesCreateDeployment {
    return new GreengrassResponsesCreateDeployment(this, this.__resources, input);
  }

  public createDeviceDefinition(input: shapes.GreengrassCreateDeviceDefinitionRequest): GreengrassResponsesCreateDeviceDefinition {
    return new GreengrassResponsesCreateDeviceDefinition(this, this.__resources, input);
  }

  public createDeviceDefinitionVersion(input: shapes.GreengrassCreateDeviceDefinitionVersionRequest): GreengrassResponsesCreateDeviceDefinitionVersion {
    return new GreengrassResponsesCreateDeviceDefinitionVersion(this, this.__resources, input);
  }

  public createFunctionDefinition(input: shapes.GreengrassCreateFunctionDefinitionRequest): GreengrassResponsesCreateFunctionDefinition {
    return new GreengrassResponsesCreateFunctionDefinition(this, this.__resources, input);
  }

  public createFunctionDefinitionVersion(input: shapes.GreengrassCreateFunctionDefinitionVersionRequest): GreengrassResponsesCreateFunctionDefinitionVersion {
    return new GreengrassResponsesCreateFunctionDefinitionVersion(this, this.__resources, input);
  }

  public createGroup(input: shapes.GreengrassCreateGroupRequest): GreengrassResponsesCreateGroup {
    return new GreengrassResponsesCreateGroup(this, this.__resources, input);
  }

  public createGroupCertificateAuthority(input: shapes.GreengrassCreateGroupCertificateAuthorityRequest): GreengrassResponsesCreateGroupCertificateAuthority {
    return new GreengrassResponsesCreateGroupCertificateAuthority(this, this.__resources, input);
  }

  public createGroupVersion(input: shapes.GreengrassCreateGroupVersionRequest): GreengrassResponsesCreateGroupVersion {
    return new GreengrassResponsesCreateGroupVersion(this, this.__resources, input);
  }

  public createLoggerDefinition(input: shapes.GreengrassCreateLoggerDefinitionRequest): GreengrassResponsesCreateLoggerDefinition {
    return new GreengrassResponsesCreateLoggerDefinition(this, this.__resources, input);
  }

  public createLoggerDefinitionVersion(input: shapes.GreengrassCreateLoggerDefinitionVersionRequest): GreengrassResponsesCreateLoggerDefinitionVersion {
    return new GreengrassResponsesCreateLoggerDefinitionVersion(this, this.__resources, input);
  }

  public createResourceDefinition(input: shapes.GreengrassCreateResourceDefinitionRequest): GreengrassResponsesCreateResourceDefinition {
    return new GreengrassResponsesCreateResourceDefinition(this, this.__resources, input);
  }

  public createResourceDefinitionVersion(input: shapes.GreengrassCreateResourceDefinitionVersionRequest): GreengrassResponsesCreateResourceDefinitionVersion {
    return new GreengrassResponsesCreateResourceDefinitionVersion(this, this.__resources, input);
  }

  public createSoftwareUpdateJob(input: shapes.GreengrassCreateSoftwareUpdateJobRequest): GreengrassResponsesCreateSoftwareUpdateJob {
    return new GreengrassResponsesCreateSoftwareUpdateJob(this, this.__resources, input);
  }

  public createSubscriptionDefinition(input: shapes.GreengrassCreateSubscriptionDefinitionRequest): GreengrassResponsesCreateSubscriptionDefinition {
    return new GreengrassResponsesCreateSubscriptionDefinition(this, this.__resources, input);
  }

  public createSubscriptionDefinitionVersion(input: shapes.GreengrassCreateSubscriptionDefinitionVersionRequest): GreengrassResponsesCreateSubscriptionDefinitionVersion {
    return new GreengrassResponsesCreateSubscriptionDefinitionVersion(this, this.__resources, input);
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

  public disassociateRoleFromGroup(input: shapes.GreengrassDisassociateRoleFromGroupRequest): GreengrassResponsesDisassociateRoleFromGroup {
    return new GreengrassResponsesDisassociateRoleFromGroup(this, this.__resources, input);
  }

  public disassociateServiceRoleFromAccount(): GreengrassResponsesDisassociateServiceRoleFromAccount {
    return new GreengrassResponsesDisassociateServiceRoleFromAccount(this, this.__resources);
  }

  public fetchAssociatedRole(input: shapes.GreengrassGetAssociatedRoleRequest): GreengrassResponsesFetchAssociatedRole {
    return new GreengrassResponsesFetchAssociatedRole(this, this.__resources, input);
  }

  public fetchBulkDeploymentStatus(input: shapes.GreengrassGetBulkDeploymentStatusRequest): GreengrassResponsesFetchBulkDeploymentStatus {
    return new GreengrassResponsesFetchBulkDeploymentStatus(this, this.__resources, input);
  }

  public fetchConnectivityInfo(input: shapes.GreengrassGetConnectivityInfoRequest): GreengrassResponsesFetchConnectivityInfo {
    return new GreengrassResponsesFetchConnectivityInfo(this, this.__resources, input);
  }

  public fetchConnectorDefinition(input: shapes.GreengrassGetConnectorDefinitionRequest): GreengrassResponsesFetchConnectorDefinition {
    return new GreengrassResponsesFetchConnectorDefinition(this, this.__resources, input);
  }

  public fetchConnectorDefinitionVersion(input: shapes.GreengrassGetConnectorDefinitionVersionRequest): GreengrassResponsesFetchConnectorDefinitionVersion {
    return new GreengrassResponsesFetchConnectorDefinitionVersion(this, this.__resources, input);
  }

  public fetchCoreDefinition(input: shapes.GreengrassGetCoreDefinitionRequest): GreengrassResponsesFetchCoreDefinition {
    return new GreengrassResponsesFetchCoreDefinition(this, this.__resources, input);
  }

  public fetchCoreDefinitionVersion(input: shapes.GreengrassGetCoreDefinitionVersionRequest): GreengrassResponsesFetchCoreDefinitionVersion {
    return new GreengrassResponsesFetchCoreDefinitionVersion(this, this.__resources, input);
  }

  public fetchDeploymentStatus(input: shapes.GreengrassGetDeploymentStatusRequest): GreengrassResponsesFetchDeploymentStatus {
    return new GreengrassResponsesFetchDeploymentStatus(this, this.__resources, input);
  }

  public fetchDeviceDefinition(input: shapes.GreengrassGetDeviceDefinitionRequest): GreengrassResponsesFetchDeviceDefinition {
    return new GreengrassResponsesFetchDeviceDefinition(this, this.__resources, input);
  }

  public fetchDeviceDefinitionVersion(input: shapes.GreengrassGetDeviceDefinitionVersionRequest): GreengrassResponsesFetchDeviceDefinitionVersion {
    return new GreengrassResponsesFetchDeviceDefinitionVersion(this, this.__resources, input);
  }

  public fetchFunctionDefinition(input: shapes.GreengrassGetFunctionDefinitionRequest): GreengrassResponsesFetchFunctionDefinition {
    return new GreengrassResponsesFetchFunctionDefinition(this, this.__resources, input);
  }

  public fetchFunctionDefinitionVersion(input: shapes.GreengrassGetFunctionDefinitionVersionRequest): GreengrassResponsesFetchFunctionDefinitionVersion {
    return new GreengrassResponsesFetchFunctionDefinitionVersion(this, this.__resources, input);
  }

  public fetchGroup(input: shapes.GreengrassGetGroupRequest): GreengrassResponsesFetchGroup {
    return new GreengrassResponsesFetchGroup(this, this.__resources, input);
  }

  public fetchGroupCertificateAuthority(input: shapes.GreengrassGetGroupCertificateAuthorityRequest): GreengrassResponsesFetchGroupCertificateAuthority {
    return new GreengrassResponsesFetchGroupCertificateAuthority(this, this.__resources, input);
  }

  public fetchGroupCertificateConfiguration(input: shapes.GreengrassGetGroupCertificateConfigurationRequest): GreengrassResponsesFetchGroupCertificateConfiguration {
    return new GreengrassResponsesFetchGroupCertificateConfiguration(this, this.__resources, input);
  }

  public fetchGroupVersion(input: shapes.GreengrassGetGroupVersionRequest): GreengrassResponsesFetchGroupVersion {
    return new GreengrassResponsesFetchGroupVersion(this, this.__resources, input);
  }

  public fetchLoggerDefinition(input: shapes.GreengrassGetLoggerDefinitionRequest): GreengrassResponsesFetchLoggerDefinition {
    return new GreengrassResponsesFetchLoggerDefinition(this, this.__resources, input);
  }

  public fetchLoggerDefinitionVersion(input: shapes.GreengrassGetLoggerDefinitionVersionRequest): GreengrassResponsesFetchLoggerDefinitionVersion {
    return new GreengrassResponsesFetchLoggerDefinitionVersion(this, this.__resources, input);
  }

  public fetchResourceDefinition(input: shapes.GreengrassGetResourceDefinitionRequest): GreengrassResponsesFetchResourceDefinition {
    return new GreengrassResponsesFetchResourceDefinition(this, this.__resources, input);
  }

  public fetchResourceDefinitionVersion(input: shapes.GreengrassGetResourceDefinitionVersionRequest): GreengrassResponsesFetchResourceDefinitionVersion {
    return new GreengrassResponsesFetchResourceDefinitionVersion(this, this.__resources, input);
  }

  public fetchServiceRoleForAccount(): GreengrassResponsesFetchServiceRoleForAccount {
    return new GreengrassResponsesFetchServiceRoleForAccount(this, this.__resources);
  }

  public fetchSubscriptionDefinition(input: shapes.GreengrassGetSubscriptionDefinitionRequest): GreengrassResponsesFetchSubscriptionDefinition {
    return new GreengrassResponsesFetchSubscriptionDefinition(this, this.__resources, input);
  }

  public fetchSubscriptionDefinitionVersion(input: shapes.GreengrassGetSubscriptionDefinitionVersionRequest): GreengrassResponsesFetchSubscriptionDefinitionVersion {
    return new GreengrassResponsesFetchSubscriptionDefinitionVersion(this, this.__resources, input);
  }

  public fetchThingRuntimeConfiguration(input: shapes.GreengrassGetThingRuntimeConfigurationRequest): GreengrassResponsesFetchThingRuntimeConfiguration {
    return new GreengrassResponsesFetchThingRuntimeConfiguration(this, this.__resources, input);
  }

  public listBulkDeploymentDetailedReports(input: shapes.GreengrassListBulkDeploymentDetailedReportsRequest): GreengrassResponsesListBulkDeploymentDetailedReports {
    return new GreengrassResponsesListBulkDeploymentDetailedReports(this, this.__resources, input);
  }

  public listBulkDeployments(input: shapes.GreengrassListBulkDeploymentsRequest): GreengrassResponsesListBulkDeployments {
    return new GreengrassResponsesListBulkDeployments(this, this.__resources, input);
  }

  public listConnectorDefinitionVersions(input: shapes.GreengrassListConnectorDefinitionVersionsRequest): GreengrassResponsesListConnectorDefinitionVersions {
    return new GreengrassResponsesListConnectorDefinitionVersions(this, this.__resources, input);
  }

  public listConnectorDefinitions(input: shapes.GreengrassListConnectorDefinitionsRequest): GreengrassResponsesListConnectorDefinitions {
    return new GreengrassResponsesListConnectorDefinitions(this, this.__resources, input);
  }

  public listCoreDefinitionVersions(input: shapes.GreengrassListCoreDefinitionVersionsRequest): GreengrassResponsesListCoreDefinitionVersions {
    return new GreengrassResponsesListCoreDefinitionVersions(this, this.__resources, input);
  }

  public listCoreDefinitions(input: shapes.GreengrassListCoreDefinitionsRequest): GreengrassResponsesListCoreDefinitions {
    return new GreengrassResponsesListCoreDefinitions(this, this.__resources, input);
  }

  public listDeployments(input: shapes.GreengrassListDeploymentsRequest): GreengrassResponsesListDeployments {
    return new GreengrassResponsesListDeployments(this, this.__resources, input);
  }

  public listDeviceDefinitionVersions(input: shapes.GreengrassListDeviceDefinitionVersionsRequest): GreengrassResponsesListDeviceDefinitionVersions {
    return new GreengrassResponsesListDeviceDefinitionVersions(this, this.__resources, input);
  }

  public listDeviceDefinitions(input: shapes.GreengrassListDeviceDefinitionsRequest): GreengrassResponsesListDeviceDefinitions {
    return new GreengrassResponsesListDeviceDefinitions(this, this.__resources, input);
  }

  public listFunctionDefinitionVersions(input: shapes.GreengrassListFunctionDefinitionVersionsRequest): GreengrassResponsesListFunctionDefinitionVersions {
    return new GreengrassResponsesListFunctionDefinitionVersions(this, this.__resources, input);
  }

  public listFunctionDefinitions(input: shapes.GreengrassListFunctionDefinitionsRequest): GreengrassResponsesListFunctionDefinitions {
    return new GreengrassResponsesListFunctionDefinitions(this, this.__resources, input);
  }

  public listGroupCertificateAuthorities(input: shapes.GreengrassListGroupCertificateAuthoritiesRequest): GreengrassResponsesListGroupCertificateAuthorities {
    return new GreengrassResponsesListGroupCertificateAuthorities(this, this.__resources, input);
  }

  public listGroupVersions(input: shapes.GreengrassListGroupVersionsRequest): GreengrassResponsesListGroupVersions {
    return new GreengrassResponsesListGroupVersions(this, this.__resources, input);
  }

  public listGroups(input: shapes.GreengrassListGroupsRequest): GreengrassResponsesListGroups {
    return new GreengrassResponsesListGroups(this, this.__resources, input);
  }

  public listLoggerDefinitionVersions(input: shapes.GreengrassListLoggerDefinitionVersionsRequest): GreengrassResponsesListLoggerDefinitionVersions {
    return new GreengrassResponsesListLoggerDefinitionVersions(this, this.__resources, input);
  }

  public listLoggerDefinitions(input: shapes.GreengrassListLoggerDefinitionsRequest): GreengrassResponsesListLoggerDefinitions {
    return new GreengrassResponsesListLoggerDefinitions(this, this.__resources, input);
  }

  public listResourceDefinitionVersions(input: shapes.GreengrassListResourceDefinitionVersionsRequest): GreengrassResponsesListResourceDefinitionVersions {
    return new GreengrassResponsesListResourceDefinitionVersions(this, this.__resources, input);
  }

  public listResourceDefinitions(input: shapes.GreengrassListResourceDefinitionsRequest): GreengrassResponsesListResourceDefinitions {
    return new GreengrassResponsesListResourceDefinitions(this, this.__resources, input);
  }

  public listSubscriptionDefinitionVersions(input: shapes.GreengrassListSubscriptionDefinitionVersionsRequest): GreengrassResponsesListSubscriptionDefinitionVersions {
    return new GreengrassResponsesListSubscriptionDefinitionVersions(this, this.__resources, input);
  }

  public listSubscriptionDefinitions(input: shapes.GreengrassListSubscriptionDefinitionsRequest): GreengrassResponsesListSubscriptionDefinitions {
    return new GreengrassResponsesListSubscriptionDefinitions(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.GreengrassListTagsForResourceRequest): GreengrassResponsesListTagsForResource {
    return new GreengrassResponsesListTagsForResource(this, this.__resources, input);
  }

  public resetDeployments(input: shapes.GreengrassResetDeploymentsRequest): GreengrassResponsesResetDeployments {
    return new GreengrassResponsesResetDeployments(this, this.__resources, input);
  }

  public startBulkDeployment(input: shapes.GreengrassStartBulkDeploymentRequest): GreengrassResponsesStartBulkDeployment {
    return new GreengrassResponsesStartBulkDeployment(this, this.__resources, input);
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

  public updateConnectivityInfo(input: shapes.GreengrassUpdateConnectivityInfoRequest): GreengrassResponsesUpdateConnectivityInfo {
    return new GreengrassResponsesUpdateConnectivityInfo(this, this.__resources, input);
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

  public updateGroupCertificateConfiguration(input: shapes.GreengrassUpdateGroupCertificateConfigurationRequest): GreengrassResponsesUpdateGroupCertificateConfiguration {
    return new GreengrassResponsesUpdateGroupCertificateConfiguration(this, this.__resources, input);
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

export class GreengrassResponsesAssociateRoleToGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassAssociateRoleToGroupRequest) {
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
          GroupId: this.__input.groupId,
          RoleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateRoleToGroup.AssociatedAt', props);
    return resource.getResponseField('AssociatedAt') as unknown as string;
  }

}

export class GreengrassResponsesAssociateServiceRoleToAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassAssociateServiceRoleToAccountRequest) {
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
          RoleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateServiceRoleToAccount.AssociatedAt', props);
    return resource.getResponseField('AssociatedAt') as unknown as string;
  }

}

export class GreengrassResponsesCreateConnectorDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassCreateConnectorDefinitionRequest) {
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Connectors: this.__input.initialVersion?.connectors,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnectorDefinition.Arn', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Connectors: this.__input.initialVersion?.connectors,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnectorDefinition.CreationTimestamp', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Connectors: this.__input.initialVersion?.connectors,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnectorDefinition.Id', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Connectors: this.__input.initialVersion?.connectors,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnectorDefinition.LastUpdatedTimestamp', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Connectors: this.__input.initialVersion?.connectors,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnectorDefinition.LatestVersion', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Connectors: this.__input.initialVersion?.connectors,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnectorDefinition.LatestVersionArn', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Connectors: this.__input.initialVersion?.connectors,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnectorDefinition.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GreengrassResponsesCreateConnectorDefinitionVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassCreateConnectorDefinitionVersionRequest) {
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
          AmznClientToken: this.__input.amznClientToken,
          ConnectorDefinitionId: this.__input.connectorDefinitionId,
          Connectors: this.__input.connectors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnectorDefinitionVersion.Arn', props);
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
          AmznClientToken: this.__input.amznClientToken,
          ConnectorDefinitionId: this.__input.connectorDefinitionId,
          Connectors: this.__input.connectors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnectorDefinitionVersion.CreationTimestamp', props);
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
          AmznClientToken: this.__input.amznClientToken,
          ConnectorDefinitionId: this.__input.connectorDefinitionId,
          Connectors: this.__input.connectors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnectorDefinitionVersion.Id', props);
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
          AmznClientToken: this.__input.amznClientToken,
          ConnectorDefinitionId: this.__input.connectorDefinitionId,
          Connectors: this.__input.connectors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnectorDefinitionVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class GreengrassResponsesCreateCoreDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassCreateCoreDefinitionRequest) {
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Cores: this.__input.initialVersion?.cores,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCoreDefinition.Arn', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Cores: this.__input.initialVersion?.cores,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCoreDefinition.CreationTimestamp', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Cores: this.__input.initialVersion?.cores,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCoreDefinition.Id', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Cores: this.__input.initialVersion?.cores,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCoreDefinition.LastUpdatedTimestamp', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Cores: this.__input.initialVersion?.cores,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCoreDefinition.LatestVersion', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Cores: this.__input.initialVersion?.cores,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCoreDefinition.LatestVersionArn', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Cores: this.__input.initialVersion?.cores,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCoreDefinition.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GreengrassResponsesCreateCoreDefinitionVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassCreateCoreDefinitionVersionRequest) {
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
          AmznClientToken: this.__input.amznClientToken,
          CoreDefinitionId: this.__input.coreDefinitionId,
          Cores: this.__input.cores,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCoreDefinitionVersion.Arn', props);
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
          AmznClientToken: this.__input.amznClientToken,
          CoreDefinitionId: this.__input.coreDefinitionId,
          Cores: this.__input.cores,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCoreDefinitionVersion.CreationTimestamp', props);
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
          AmznClientToken: this.__input.amznClientToken,
          CoreDefinitionId: this.__input.coreDefinitionId,
          Cores: this.__input.cores,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCoreDefinitionVersion.Id', props);
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
          AmznClientToken: this.__input.amznClientToken,
          CoreDefinitionId: this.__input.coreDefinitionId,
          Cores: this.__input.cores,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCoreDefinitionVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class GreengrassResponsesCreateDeployment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassCreateDeploymentRequest) {
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
          AmznClientToken: this.__input.amznClientToken,
          DeploymentId: this.__input.deploymentId,
          DeploymentType: this.__input.deploymentType,
          GroupId: this.__input.groupId,
          GroupVersionId: this.__input.groupVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeployment.DeploymentArn', props);
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
          AmznClientToken: this.__input.amznClientToken,
          DeploymentId: this.__input.deploymentId,
          DeploymentType: this.__input.deploymentType,
          GroupId: this.__input.groupId,
          GroupVersionId: this.__input.groupVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeployment.DeploymentId', props);
    return resource.getResponseField('DeploymentId') as unknown as string;
  }

}

export class GreengrassResponsesCreateDeviceDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassCreateDeviceDefinitionRequest) {
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Devices: this.__input.initialVersion?.devices,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeviceDefinition.Arn', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Devices: this.__input.initialVersion?.devices,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeviceDefinition.CreationTimestamp', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Devices: this.__input.initialVersion?.devices,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeviceDefinition.Id', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Devices: this.__input.initialVersion?.devices,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeviceDefinition.LastUpdatedTimestamp', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Devices: this.__input.initialVersion?.devices,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeviceDefinition.LatestVersion', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Devices: this.__input.initialVersion?.devices,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeviceDefinition.LatestVersionArn', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Devices: this.__input.initialVersion?.devices,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeviceDefinition.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GreengrassResponsesCreateDeviceDefinitionVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassCreateDeviceDefinitionVersionRequest) {
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
          AmznClientToken: this.__input.amznClientToken,
          DeviceDefinitionId: this.__input.deviceDefinitionId,
          Devices: this.__input.devices,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeviceDefinitionVersion.Arn', props);
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
          AmznClientToken: this.__input.amznClientToken,
          DeviceDefinitionId: this.__input.deviceDefinitionId,
          Devices: this.__input.devices,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeviceDefinitionVersion.CreationTimestamp', props);
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
          AmznClientToken: this.__input.amznClientToken,
          DeviceDefinitionId: this.__input.deviceDefinitionId,
          Devices: this.__input.devices,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeviceDefinitionVersion.Id', props);
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
          AmznClientToken: this.__input.amznClientToken,
          DeviceDefinitionId: this.__input.deviceDefinitionId,
          Devices: this.__input.devices,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeviceDefinitionVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class GreengrassResponsesCreateFunctionDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassCreateFunctionDefinitionRequest) {
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            DefaultConfig: {
              Execution: {
                IsolationMode: this.__input.initialVersion?.defaultConfig?.execution?.isolationMode,
                RunAs: {
                  Gid: this.__input.initialVersion?.defaultConfig?.execution?.runAs?.gid,
                  Uid: this.__input.initialVersion?.defaultConfig?.execution?.runAs?.uid,
                },
              },
            },
            Functions: this.__input.initialVersion?.functions,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunctionDefinition.Arn', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            DefaultConfig: {
              Execution: {
                IsolationMode: this.__input.initialVersion?.defaultConfig?.execution?.isolationMode,
                RunAs: {
                  Gid: this.__input.initialVersion?.defaultConfig?.execution?.runAs?.gid,
                  Uid: this.__input.initialVersion?.defaultConfig?.execution?.runAs?.uid,
                },
              },
            },
            Functions: this.__input.initialVersion?.functions,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunctionDefinition.CreationTimestamp', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            DefaultConfig: {
              Execution: {
                IsolationMode: this.__input.initialVersion?.defaultConfig?.execution?.isolationMode,
                RunAs: {
                  Gid: this.__input.initialVersion?.defaultConfig?.execution?.runAs?.gid,
                  Uid: this.__input.initialVersion?.defaultConfig?.execution?.runAs?.uid,
                },
              },
            },
            Functions: this.__input.initialVersion?.functions,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunctionDefinition.Id', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            DefaultConfig: {
              Execution: {
                IsolationMode: this.__input.initialVersion?.defaultConfig?.execution?.isolationMode,
                RunAs: {
                  Gid: this.__input.initialVersion?.defaultConfig?.execution?.runAs?.gid,
                  Uid: this.__input.initialVersion?.defaultConfig?.execution?.runAs?.uid,
                },
              },
            },
            Functions: this.__input.initialVersion?.functions,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunctionDefinition.LastUpdatedTimestamp', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            DefaultConfig: {
              Execution: {
                IsolationMode: this.__input.initialVersion?.defaultConfig?.execution?.isolationMode,
                RunAs: {
                  Gid: this.__input.initialVersion?.defaultConfig?.execution?.runAs?.gid,
                  Uid: this.__input.initialVersion?.defaultConfig?.execution?.runAs?.uid,
                },
              },
            },
            Functions: this.__input.initialVersion?.functions,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunctionDefinition.LatestVersion', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            DefaultConfig: {
              Execution: {
                IsolationMode: this.__input.initialVersion?.defaultConfig?.execution?.isolationMode,
                RunAs: {
                  Gid: this.__input.initialVersion?.defaultConfig?.execution?.runAs?.gid,
                  Uid: this.__input.initialVersion?.defaultConfig?.execution?.runAs?.uid,
                },
              },
            },
            Functions: this.__input.initialVersion?.functions,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunctionDefinition.LatestVersionArn', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            DefaultConfig: {
              Execution: {
                IsolationMode: this.__input.initialVersion?.defaultConfig?.execution?.isolationMode,
                RunAs: {
                  Gid: this.__input.initialVersion?.defaultConfig?.execution?.runAs?.gid,
                  Uid: this.__input.initialVersion?.defaultConfig?.execution?.runAs?.uid,
                },
              },
            },
            Functions: this.__input.initialVersion?.functions,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunctionDefinition.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GreengrassResponsesCreateFunctionDefinitionVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassCreateFunctionDefinitionVersionRequest) {
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
          AmznClientToken: this.__input.amznClientToken,
          DefaultConfig: {
            Execution: {
              IsolationMode: this.__input.defaultConfig?.execution?.isolationMode,
              RunAs: {
                Gid: this.__input.defaultConfig?.execution?.runAs?.gid,
                Uid: this.__input.defaultConfig?.execution?.runAs?.uid,
              },
            },
          },
          FunctionDefinitionId: this.__input.functionDefinitionId,
          Functions: this.__input.functions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunctionDefinitionVersion.Arn', props);
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
          AmznClientToken: this.__input.amznClientToken,
          DefaultConfig: {
            Execution: {
              IsolationMode: this.__input.defaultConfig?.execution?.isolationMode,
              RunAs: {
                Gid: this.__input.defaultConfig?.execution?.runAs?.gid,
                Uid: this.__input.defaultConfig?.execution?.runAs?.uid,
              },
            },
          },
          FunctionDefinitionId: this.__input.functionDefinitionId,
          Functions: this.__input.functions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunctionDefinitionVersion.CreationTimestamp', props);
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
          AmznClientToken: this.__input.amznClientToken,
          DefaultConfig: {
            Execution: {
              IsolationMode: this.__input.defaultConfig?.execution?.isolationMode,
              RunAs: {
                Gid: this.__input.defaultConfig?.execution?.runAs?.gid,
                Uid: this.__input.defaultConfig?.execution?.runAs?.uid,
              },
            },
          },
          FunctionDefinitionId: this.__input.functionDefinitionId,
          Functions: this.__input.functions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunctionDefinitionVersion.Id', props);
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
          AmznClientToken: this.__input.amznClientToken,
          DefaultConfig: {
            Execution: {
              IsolationMode: this.__input.defaultConfig?.execution?.isolationMode,
              RunAs: {
                Gid: this.__input.defaultConfig?.execution?.runAs?.gid,
                Uid: this.__input.defaultConfig?.execution?.runAs?.uid,
              },
            },
          },
          FunctionDefinitionId: this.__input.functionDefinitionId,
          Functions: this.__input.functions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunctionDefinitionVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class GreengrassResponsesCreateGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassCreateGroupRequest) {
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            ConnectorDefinitionVersionArn: this.__input.initialVersion?.connectorDefinitionVersionArn,
            CoreDefinitionVersionArn: this.__input.initialVersion?.coreDefinitionVersionArn,
            DeviceDefinitionVersionArn: this.__input.initialVersion?.deviceDefinitionVersionArn,
            FunctionDefinitionVersionArn: this.__input.initialVersion?.functionDefinitionVersionArn,
            LoggerDefinitionVersionArn: this.__input.initialVersion?.loggerDefinitionVersionArn,
            ResourceDefinitionVersionArn: this.__input.initialVersion?.resourceDefinitionVersionArn,
            SubscriptionDefinitionVersionArn: this.__input.initialVersion?.subscriptionDefinitionVersionArn,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroup.Arn', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            ConnectorDefinitionVersionArn: this.__input.initialVersion?.connectorDefinitionVersionArn,
            CoreDefinitionVersionArn: this.__input.initialVersion?.coreDefinitionVersionArn,
            DeviceDefinitionVersionArn: this.__input.initialVersion?.deviceDefinitionVersionArn,
            FunctionDefinitionVersionArn: this.__input.initialVersion?.functionDefinitionVersionArn,
            LoggerDefinitionVersionArn: this.__input.initialVersion?.loggerDefinitionVersionArn,
            ResourceDefinitionVersionArn: this.__input.initialVersion?.resourceDefinitionVersionArn,
            SubscriptionDefinitionVersionArn: this.__input.initialVersion?.subscriptionDefinitionVersionArn,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroup.CreationTimestamp', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            ConnectorDefinitionVersionArn: this.__input.initialVersion?.connectorDefinitionVersionArn,
            CoreDefinitionVersionArn: this.__input.initialVersion?.coreDefinitionVersionArn,
            DeviceDefinitionVersionArn: this.__input.initialVersion?.deviceDefinitionVersionArn,
            FunctionDefinitionVersionArn: this.__input.initialVersion?.functionDefinitionVersionArn,
            LoggerDefinitionVersionArn: this.__input.initialVersion?.loggerDefinitionVersionArn,
            ResourceDefinitionVersionArn: this.__input.initialVersion?.resourceDefinitionVersionArn,
            SubscriptionDefinitionVersionArn: this.__input.initialVersion?.subscriptionDefinitionVersionArn,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroup.Id', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            ConnectorDefinitionVersionArn: this.__input.initialVersion?.connectorDefinitionVersionArn,
            CoreDefinitionVersionArn: this.__input.initialVersion?.coreDefinitionVersionArn,
            DeviceDefinitionVersionArn: this.__input.initialVersion?.deviceDefinitionVersionArn,
            FunctionDefinitionVersionArn: this.__input.initialVersion?.functionDefinitionVersionArn,
            LoggerDefinitionVersionArn: this.__input.initialVersion?.loggerDefinitionVersionArn,
            ResourceDefinitionVersionArn: this.__input.initialVersion?.resourceDefinitionVersionArn,
            SubscriptionDefinitionVersionArn: this.__input.initialVersion?.subscriptionDefinitionVersionArn,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroup.LastUpdatedTimestamp', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            ConnectorDefinitionVersionArn: this.__input.initialVersion?.connectorDefinitionVersionArn,
            CoreDefinitionVersionArn: this.__input.initialVersion?.coreDefinitionVersionArn,
            DeviceDefinitionVersionArn: this.__input.initialVersion?.deviceDefinitionVersionArn,
            FunctionDefinitionVersionArn: this.__input.initialVersion?.functionDefinitionVersionArn,
            LoggerDefinitionVersionArn: this.__input.initialVersion?.loggerDefinitionVersionArn,
            ResourceDefinitionVersionArn: this.__input.initialVersion?.resourceDefinitionVersionArn,
            SubscriptionDefinitionVersionArn: this.__input.initialVersion?.subscriptionDefinitionVersionArn,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroup.LatestVersion', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            ConnectorDefinitionVersionArn: this.__input.initialVersion?.connectorDefinitionVersionArn,
            CoreDefinitionVersionArn: this.__input.initialVersion?.coreDefinitionVersionArn,
            DeviceDefinitionVersionArn: this.__input.initialVersion?.deviceDefinitionVersionArn,
            FunctionDefinitionVersionArn: this.__input.initialVersion?.functionDefinitionVersionArn,
            LoggerDefinitionVersionArn: this.__input.initialVersion?.loggerDefinitionVersionArn,
            ResourceDefinitionVersionArn: this.__input.initialVersion?.resourceDefinitionVersionArn,
            SubscriptionDefinitionVersionArn: this.__input.initialVersion?.subscriptionDefinitionVersionArn,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroup.LatestVersionArn', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            ConnectorDefinitionVersionArn: this.__input.initialVersion?.connectorDefinitionVersionArn,
            CoreDefinitionVersionArn: this.__input.initialVersion?.coreDefinitionVersionArn,
            DeviceDefinitionVersionArn: this.__input.initialVersion?.deviceDefinitionVersionArn,
            FunctionDefinitionVersionArn: this.__input.initialVersion?.functionDefinitionVersionArn,
            LoggerDefinitionVersionArn: this.__input.initialVersion?.loggerDefinitionVersionArn,
            ResourceDefinitionVersionArn: this.__input.initialVersion?.resourceDefinitionVersionArn,
            SubscriptionDefinitionVersionArn: this.__input.initialVersion?.subscriptionDefinitionVersionArn,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroup.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GreengrassResponsesCreateGroupCertificateAuthority {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassCreateGroupCertificateAuthorityRequest) {
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
          AmznClientToken: this.__input.amznClientToken,
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroupCertificateAuthority.GroupCertificateAuthorityArn', props);
    return resource.getResponseField('GroupCertificateAuthorityArn') as unknown as string;
  }

}

export class GreengrassResponsesCreateGroupVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassCreateGroupVersionRequest) {
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
          AmznClientToken: this.__input.amznClientToken,
          ConnectorDefinitionVersionArn: this.__input.connectorDefinitionVersionArn,
          CoreDefinitionVersionArn: this.__input.coreDefinitionVersionArn,
          DeviceDefinitionVersionArn: this.__input.deviceDefinitionVersionArn,
          FunctionDefinitionVersionArn: this.__input.functionDefinitionVersionArn,
          GroupId: this.__input.groupId,
          LoggerDefinitionVersionArn: this.__input.loggerDefinitionVersionArn,
          ResourceDefinitionVersionArn: this.__input.resourceDefinitionVersionArn,
          SubscriptionDefinitionVersionArn: this.__input.subscriptionDefinitionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroupVersion.Arn', props);
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
          AmznClientToken: this.__input.amznClientToken,
          ConnectorDefinitionVersionArn: this.__input.connectorDefinitionVersionArn,
          CoreDefinitionVersionArn: this.__input.coreDefinitionVersionArn,
          DeviceDefinitionVersionArn: this.__input.deviceDefinitionVersionArn,
          FunctionDefinitionVersionArn: this.__input.functionDefinitionVersionArn,
          GroupId: this.__input.groupId,
          LoggerDefinitionVersionArn: this.__input.loggerDefinitionVersionArn,
          ResourceDefinitionVersionArn: this.__input.resourceDefinitionVersionArn,
          SubscriptionDefinitionVersionArn: this.__input.subscriptionDefinitionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroupVersion.CreationTimestamp', props);
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
          AmznClientToken: this.__input.amznClientToken,
          ConnectorDefinitionVersionArn: this.__input.connectorDefinitionVersionArn,
          CoreDefinitionVersionArn: this.__input.coreDefinitionVersionArn,
          DeviceDefinitionVersionArn: this.__input.deviceDefinitionVersionArn,
          FunctionDefinitionVersionArn: this.__input.functionDefinitionVersionArn,
          GroupId: this.__input.groupId,
          LoggerDefinitionVersionArn: this.__input.loggerDefinitionVersionArn,
          ResourceDefinitionVersionArn: this.__input.resourceDefinitionVersionArn,
          SubscriptionDefinitionVersionArn: this.__input.subscriptionDefinitionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroupVersion.Id', props);
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
          AmznClientToken: this.__input.amznClientToken,
          ConnectorDefinitionVersionArn: this.__input.connectorDefinitionVersionArn,
          CoreDefinitionVersionArn: this.__input.coreDefinitionVersionArn,
          DeviceDefinitionVersionArn: this.__input.deviceDefinitionVersionArn,
          FunctionDefinitionVersionArn: this.__input.functionDefinitionVersionArn,
          GroupId: this.__input.groupId,
          LoggerDefinitionVersionArn: this.__input.loggerDefinitionVersionArn,
          ResourceDefinitionVersionArn: this.__input.resourceDefinitionVersionArn,
          SubscriptionDefinitionVersionArn: this.__input.subscriptionDefinitionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroupVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class GreengrassResponsesCreateLoggerDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassCreateLoggerDefinitionRequest) {
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Loggers: this.__input.initialVersion?.loggers,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLoggerDefinition.Arn', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Loggers: this.__input.initialVersion?.loggers,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLoggerDefinition.CreationTimestamp', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Loggers: this.__input.initialVersion?.loggers,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLoggerDefinition.Id', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Loggers: this.__input.initialVersion?.loggers,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLoggerDefinition.LastUpdatedTimestamp', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Loggers: this.__input.initialVersion?.loggers,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLoggerDefinition.LatestVersion', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Loggers: this.__input.initialVersion?.loggers,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLoggerDefinition.LatestVersionArn', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Loggers: this.__input.initialVersion?.loggers,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLoggerDefinition.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GreengrassResponsesCreateLoggerDefinitionVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassCreateLoggerDefinitionVersionRequest) {
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
          AmznClientToken: this.__input.amznClientToken,
          LoggerDefinitionId: this.__input.loggerDefinitionId,
          Loggers: this.__input.loggers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLoggerDefinitionVersion.Arn', props);
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
          AmznClientToken: this.__input.amznClientToken,
          LoggerDefinitionId: this.__input.loggerDefinitionId,
          Loggers: this.__input.loggers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLoggerDefinitionVersion.CreationTimestamp', props);
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
          AmznClientToken: this.__input.amznClientToken,
          LoggerDefinitionId: this.__input.loggerDefinitionId,
          Loggers: this.__input.loggers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLoggerDefinitionVersion.Id', props);
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
          AmznClientToken: this.__input.amznClientToken,
          LoggerDefinitionId: this.__input.loggerDefinitionId,
          Loggers: this.__input.loggers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLoggerDefinitionVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class GreengrassResponsesCreateResourceDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassCreateResourceDefinitionRequest) {
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Resources: this.__input.initialVersion?.resources,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResourceDefinition.Arn', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Resources: this.__input.initialVersion?.resources,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResourceDefinition.CreationTimestamp', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Resources: this.__input.initialVersion?.resources,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResourceDefinition.Id', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Resources: this.__input.initialVersion?.resources,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResourceDefinition.LastUpdatedTimestamp', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Resources: this.__input.initialVersion?.resources,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResourceDefinition.LatestVersion', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Resources: this.__input.initialVersion?.resources,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResourceDefinition.LatestVersionArn', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Resources: this.__input.initialVersion?.resources,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResourceDefinition.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GreengrassResponsesCreateResourceDefinitionVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassCreateResourceDefinitionVersionRequest) {
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
          AmznClientToken: this.__input.amznClientToken,
          ResourceDefinitionId: this.__input.resourceDefinitionId,
          Resources: this.__input.resources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResourceDefinitionVersion.Arn', props);
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
          AmznClientToken: this.__input.amznClientToken,
          ResourceDefinitionId: this.__input.resourceDefinitionId,
          Resources: this.__input.resources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResourceDefinitionVersion.CreationTimestamp', props);
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
          AmznClientToken: this.__input.amznClientToken,
          ResourceDefinitionId: this.__input.resourceDefinitionId,
          Resources: this.__input.resources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResourceDefinitionVersion.Id', props);
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
          AmznClientToken: this.__input.amznClientToken,
          ResourceDefinitionId: this.__input.resourceDefinitionId,
          Resources: this.__input.resources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResourceDefinitionVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class GreengrassResponsesCreateSoftwareUpdateJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassCreateSoftwareUpdateJobRequest) {
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
          AmznClientToken: this.__input.amznClientToken,
          S3UrlSignerRole: this.__input.s3UrlSignerRole,
          SoftwareToUpdate: this.__input.softwareToUpdate,
          UpdateAgentLogLevel: this.__input.updateAgentLogLevel,
          UpdateTargets: this.__input.updateTargets,
          UpdateTargetsArchitecture: this.__input.updateTargetsArchitecture,
          UpdateTargetsOperatingSystem: this.__input.updateTargetsOperatingSystem,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSoftwareUpdateJob.IotJobArn', props);
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
          AmznClientToken: this.__input.amznClientToken,
          S3UrlSignerRole: this.__input.s3UrlSignerRole,
          SoftwareToUpdate: this.__input.softwareToUpdate,
          UpdateAgentLogLevel: this.__input.updateAgentLogLevel,
          UpdateTargets: this.__input.updateTargets,
          UpdateTargetsArchitecture: this.__input.updateTargetsArchitecture,
          UpdateTargetsOperatingSystem: this.__input.updateTargetsOperatingSystem,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSoftwareUpdateJob.IotJobId', props);
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
          AmznClientToken: this.__input.amznClientToken,
          S3UrlSignerRole: this.__input.s3UrlSignerRole,
          SoftwareToUpdate: this.__input.softwareToUpdate,
          UpdateAgentLogLevel: this.__input.updateAgentLogLevel,
          UpdateTargets: this.__input.updateTargets,
          UpdateTargetsArchitecture: this.__input.updateTargetsArchitecture,
          UpdateTargetsOperatingSystem: this.__input.updateTargetsOperatingSystem,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSoftwareUpdateJob.PlatformSoftwareVersion', props);
    return resource.getResponseField('PlatformSoftwareVersion') as unknown as string;
  }

}

export class GreengrassResponsesCreateSubscriptionDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassCreateSubscriptionDefinitionRequest) {
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Subscriptions: this.__input.initialVersion?.subscriptions,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSubscriptionDefinition.Arn', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Subscriptions: this.__input.initialVersion?.subscriptions,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSubscriptionDefinition.CreationTimestamp', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Subscriptions: this.__input.initialVersion?.subscriptions,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSubscriptionDefinition.Id', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Subscriptions: this.__input.initialVersion?.subscriptions,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSubscriptionDefinition.LastUpdatedTimestamp', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Subscriptions: this.__input.initialVersion?.subscriptions,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSubscriptionDefinition.LatestVersion', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Subscriptions: this.__input.initialVersion?.subscriptions,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSubscriptionDefinition.LatestVersionArn', props);
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
          AmznClientToken: this.__input.amznClientToken,
          InitialVersion: {
            Subscriptions: this.__input.initialVersion?.subscriptions,
          },
          Name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSubscriptionDefinition.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GreengrassResponsesCreateSubscriptionDefinitionVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassCreateSubscriptionDefinitionVersionRequest) {
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
          AmznClientToken: this.__input.amznClientToken,
          SubscriptionDefinitionId: this.__input.subscriptionDefinitionId,
          Subscriptions: this.__input.subscriptions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSubscriptionDefinitionVersion.Arn', props);
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
          AmznClientToken: this.__input.amznClientToken,
          SubscriptionDefinitionId: this.__input.subscriptionDefinitionId,
          Subscriptions: this.__input.subscriptions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSubscriptionDefinitionVersion.CreationTimestamp', props);
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
          AmznClientToken: this.__input.amznClientToken,
          SubscriptionDefinitionId: this.__input.subscriptionDefinitionId,
          Subscriptions: this.__input.subscriptions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSubscriptionDefinitionVersion.Id', props);
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
          AmznClientToken: this.__input.amznClientToken,
          SubscriptionDefinitionId: this.__input.subscriptionDefinitionId,
          Subscriptions: this.__input.subscriptions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSubscriptionDefinitionVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class GreengrassResponsesDisassociateRoleFromGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassDisassociateRoleFromGroupRequest) {
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
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateRoleFromGroup.DisassociatedAt', props);
    return resource.getResponseField('DisassociatedAt') as unknown as string;
  }

}

export class GreengrassResponsesDisassociateServiceRoleFromAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateServiceRoleFromAccount.DisassociatedAt', props);
    return resource.getResponseField('DisassociatedAt') as unknown as string;
  }

}

export class GreengrassResponsesFetchAssociatedRole {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetAssociatedRoleRequest) {
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
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssociatedRole.AssociatedAt', props);
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
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssociatedRole.RoleArn', props);
    return resource.getResponseField('RoleArn') as unknown as string;
  }

}

export class GreengrassResponsesFetchBulkDeploymentStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetBulkDeploymentStatusRequest) {
  }

  public get bulkDeploymentMetrics(): GreengrassResponsesFetchBulkDeploymentStatusBulkDeploymentMetrics {
    return new GreengrassResponsesFetchBulkDeploymentStatusBulkDeploymentMetrics(this.__scope, this.__resources, this.__input);
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
          BulkDeploymentId: this.__input.bulkDeploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBulkDeploymentStatus.BulkDeploymentStatus', props);
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
          BulkDeploymentId: this.__input.bulkDeploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBulkDeploymentStatus.CreatedAt', props);
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
          BulkDeploymentId: this.__input.bulkDeploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBulkDeploymentStatus.ErrorDetails', props);
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
          BulkDeploymentId: this.__input.bulkDeploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBulkDeploymentStatus.ErrorMessage', props);
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
          BulkDeploymentId: this.__input.bulkDeploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBulkDeploymentStatus.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class GreengrassResponsesFetchBulkDeploymentStatusBulkDeploymentMetrics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetBulkDeploymentStatusRequest) {
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
          BulkDeploymentId: this.__input.bulkDeploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBulkDeploymentStatus.BulkDeploymentMetrics.InvalidInputRecords', props);
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
          BulkDeploymentId: this.__input.bulkDeploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBulkDeploymentStatus.BulkDeploymentMetrics.RecordsProcessed', props);
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
          BulkDeploymentId: this.__input.bulkDeploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBulkDeploymentStatus.BulkDeploymentMetrics.RetryAttempts', props);
    return resource.getResponseField('BulkDeploymentMetrics.RetryAttempts') as unknown as number;
  }

}

export class GreengrassResponsesFetchConnectivityInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetConnectivityInfoRequest) {
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
          ThingName: this.__input.thingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnectivityInfo.ConnectivityInfo', props);
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
          ThingName: this.__input.thingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnectivityInfo.Message', props);
    return resource.getResponseField('Message') as unknown as string;
  }

}

export class GreengrassResponsesFetchConnectorDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetConnectorDefinitionRequest) {
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
          ConnectorDefinitionId: this.__input.connectorDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnectorDefinition.Arn', props);
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
          ConnectorDefinitionId: this.__input.connectorDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnectorDefinition.CreationTimestamp', props);
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
          ConnectorDefinitionId: this.__input.connectorDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnectorDefinition.Id', props);
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
          ConnectorDefinitionId: this.__input.connectorDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnectorDefinition.LastUpdatedTimestamp', props);
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
          ConnectorDefinitionId: this.__input.connectorDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnectorDefinition.LatestVersion', props);
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
          ConnectorDefinitionId: this.__input.connectorDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnectorDefinition.LatestVersionArn', props);
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
          ConnectorDefinitionId: this.__input.connectorDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnectorDefinition.Name', props);
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
          ConnectorDefinitionId: this.__input.connectorDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnectorDefinition.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class GreengrassResponsesFetchConnectorDefinitionVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetConnectorDefinitionVersionRequest) {
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
          ConnectorDefinitionId: this.__input.connectorDefinitionId,
          ConnectorDefinitionVersionId: this.__input.connectorDefinitionVersionId,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnectorDefinitionVersion.Arn', props);
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
          ConnectorDefinitionId: this.__input.connectorDefinitionId,
          ConnectorDefinitionVersionId: this.__input.connectorDefinitionVersionId,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnectorDefinitionVersion.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get definition(): GreengrassResponsesFetchConnectorDefinitionVersionDefinition {
    return new GreengrassResponsesFetchConnectorDefinitionVersionDefinition(this.__scope, this.__resources, this.__input);
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
          ConnectorDefinitionId: this.__input.connectorDefinitionId,
          ConnectorDefinitionVersionId: this.__input.connectorDefinitionVersionId,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnectorDefinitionVersion.Id', props);
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
          ConnectorDefinitionId: this.__input.connectorDefinitionId,
          ConnectorDefinitionVersionId: this.__input.connectorDefinitionVersionId,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnectorDefinitionVersion.NextToken', props);
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
          ConnectorDefinitionId: this.__input.connectorDefinitionId,
          ConnectorDefinitionVersionId: this.__input.connectorDefinitionVersionId,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnectorDefinitionVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class GreengrassResponsesFetchConnectorDefinitionVersionDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetConnectorDefinitionVersionRequest) {
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
          ConnectorDefinitionId: this.__input.connectorDefinitionId,
          ConnectorDefinitionVersionId: this.__input.connectorDefinitionVersionId,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnectorDefinitionVersion.Definition.Connectors', props);
    return resource.getResponseField('Definition.Connectors') as unknown as shapes.GreengrassConnector[];
  }

}

export class GreengrassResponsesFetchCoreDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetCoreDefinitionRequest) {
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
          CoreDefinitionId: this.__input.coreDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCoreDefinition.Arn', props);
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
          CoreDefinitionId: this.__input.coreDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCoreDefinition.CreationTimestamp', props);
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
          CoreDefinitionId: this.__input.coreDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCoreDefinition.Id', props);
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
          CoreDefinitionId: this.__input.coreDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCoreDefinition.LastUpdatedTimestamp', props);
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
          CoreDefinitionId: this.__input.coreDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCoreDefinition.LatestVersion', props);
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
          CoreDefinitionId: this.__input.coreDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCoreDefinition.LatestVersionArn', props);
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
          CoreDefinitionId: this.__input.coreDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCoreDefinition.Name', props);
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
          CoreDefinitionId: this.__input.coreDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCoreDefinition.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class GreengrassResponsesFetchCoreDefinitionVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetCoreDefinitionVersionRequest) {
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
          CoreDefinitionId: this.__input.coreDefinitionId,
          CoreDefinitionVersionId: this.__input.coreDefinitionVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCoreDefinitionVersion.Arn', props);
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
          CoreDefinitionId: this.__input.coreDefinitionId,
          CoreDefinitionVersionId: this.__input.coreDefinitionVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCoreDefinitionVersion.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get definition(): GreengrassResponsesFetchCoreDefinitionVersionDefinition {
    return new GreengrassResponsesFetchCoreDefinitionVersionDefinition(this.__scope, this.__resources, this.__input);
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
          CoreDefinitionId: this.__input.coreDefinitionId,
          CoreDefinitionVersionId: this.__input.coreDefinitionVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCoreDefinitionVersion.Id', props);
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
          CoreDefinitionId: this.__input.coreDefinitionId,
          CoreDefinitionVersionId: this.__input.coreDefinitionVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCoreDefinitionVersion.NextToken', props);
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
          CoreDefinitionId: this.__input.coreDefinitionId,
          CoreDefinitionVersionId: this.__input.coreDefinitionVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCoreDefinitionVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class GreengrassResponsesFetchCoreDefinitionVersionDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetCoreDefinitionVersionRequest) {
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
          CoreDefinitionId: this.__input.coreDefinitionId,
          CoreDefinitionVersionId: this.__input.coreDefinitionVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCoreDefinitionVersion.Definition.Cores', props);
    return resource.getResponseField('Definition.Cores') as unknown as shapes.GreengrassCore[];
  }

}

export class GreengrassResponsesFetchDeploymentStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetDeploymentStatusRequest) {
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
          DeploymentId: this.__input.deploymentId,
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentStatus.DeploymentStatus', props);
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
          DeploymentId: this.__input.deploymentId,
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentStatus.DeploymentType', props);
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
          DeploymentId: this.__input.deploymentId,
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentStatus.ErrorDetails', props);
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
          DeploymentId: this.__input.deploymentId,
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentStatus.ErrorMessage', props);
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
          DeploymentId: this.__input.deploymentId,
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentStatus.UpdatedAt', props);
    return resource.getResponseField('UpdatedAt') as unknown as string;
  }

}

export class GreengrassResponsesFetchDeviceDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetDeviceDefinitionRequest) {
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
          DeviceDefinitionId: this.__input.deviceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceDefinition.Arn', props);
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
          DeviceDefinitionId: this.__input.deviceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceDefinition.CreationTimestamp', props);
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
          DeviceDefinitionId: this.__input.deviceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceDefinition.Id', props);
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
          DeviceDefinitionId: this.__input.deviceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceDefinition.LastUpdatedTimestamp', props);
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
          DeviceDefinitionId: this.__input.deviceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceDefinition.LatestVersion', props);
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
          DeviceDefinitionId: this.__input.deviceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceDefinition.LatestVersionArn', props);
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
          DeviceDefinitionId: this.__input.deviceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceDefinition.Name', props);
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
          DeviceDefinitionId: this.__input.deviceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceDefinition.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class GreengrassResponsesFetchDeviceDefinitionVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetDeviceDefinitionVersionRequest) {
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
          DeviceDefinitionId: this.__input.deviceDefinitionId,
          DeviceDefinitionVersionId: this.__input.deviceDefinitionVersionId,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceDefinitionVersion.Arn', props);
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
          DeviceDefinitionId: this.__input.deviceDefinitionId,
          DeviceDefinitionVersionId: this.__input.deviceDefinitionVersionId,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceDefinitionVersion.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get definition(): GreengrassResponsesFetchDeviceDefinitionVersionDefinition {
    return new GreengrassResponsesFetchDeviceDefinitionVersionDefinition(this.__scope, this.__resources, this.__input);
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
          DeviceDefinitionId: this.__input.deviceDefinitionId,
          DeviceDefinitionVersionId: this.__input.deviceDefinitionVersionId,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceDefinitionVersion.Id', props);
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
          DeviceDefinitionId: this.__input.deviceDefinitionId,
          DeviceDefinitionVersionId: this.__input.deviceDefinitionVersionId,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceDefinitionVersion.NextToken', props);
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
          DeviceDefinitionId: this.__input.deviceDefinitionId,
          DeviceDefinitionVersionId: this.__input.deviceDefinitionVersionId,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceDefinitionVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class GreengrassResponsesFetchDeviceDefinitionVersionDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetDeviceDefinitionVersionRequest) {
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
          DeviceDefinitionId: this.__input.deviceDefinitionId,
          DeviceDefinitionVersionId: this.__input.deviceDefinitionVersionId,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceDefinitionVersion.Definition.Devices', props);
    return resource.getResponseField('Definition.Devices') as unknown as shapes.GreengrassDevice[];
  }

}

export class GreengrassResponsesFetchFunctionDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetFunctionDefinitionRequest) {
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
          FunctionDefinitionId: this.__input.functionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionDefinition.Arn', props);
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
          FunctionDefinitionId: this.__input.functionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionDefinition.CreationTimestamp', props);
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
          FunctionDefinitionId: this.__input.functionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionDefinition.Id', props);
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
          FunctionDefinitionId: this.__input.functionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionDefinition.LastUpdatedTimestamp', props);
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
          FunctionDefinitionId: this.__input.functionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionDefinition.LatestVersion', props);
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
          FunctionDefinitionId: this.__input.functionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionDefinition.LatestVersionArn', props);
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
          FunctionDefinitionId: this.__input.functionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionDefinition.Name', props);
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
          FunctionDefinitionId: this.__input.functionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionDefinition.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class GreengrassResponsesFetchFunctionDefinitionVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetFunctionDefinitionVersionRequest) {
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
          FunctionDefinitionId: this.__input.functionDefinitionId,
          FunctionDefinitionVersionId: this.__input.functionDefinitionVersionId,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionDefinitionVersion.Arn', props);
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
          FunctionDefinitionId: this.__input.functionDefinitionId,
          FunctionDefinitionVersionId: this.__input.functionDefinitionVersionId,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionDefinitionVersion.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get definition(): GreengrassResponsesFetchFunctionDefinitionVersionDefinition {
    return new GreengrassResponsesFetchFunctionDefinitionVersionDefinition(this.__scope, this.__resources, this.__input);
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
          FunctionDefinitionId: this.__input.functionDefinitionId,
          FunctionDefinitionVersionId: this.__input.functionDefinitionVersionId,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionDefinitionVersion.Id', props);
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
          FunctionDefinitionId: this.__input.functionDefinitionId,
          FunctionDefinitionVersionId: this.__input.functionDefinitionVersionId,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionDefinitionVersion.NextToken', props);
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
          FunctionDefinitionId: this.__input.functionDefinitionId,
          FunctionDefinitionVersionId: this.__input.functionDefinitionVersionId,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionDefinitionVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class GreengrassResponsesFetchFunctionDefinitionVersionDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetFunctionDefinitionVersionRequest) {
  }

  public get defaultConfig(): GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfig {
    return new GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfig(this.__scope, this.__resources, this.__input);
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
          FunctionDefinitionId: this.__input.functionDefinitionId,
          FunctionDefinitionVersionId: this.__input.functionDefinitionVersionId,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionDefinitionVersion.Definition.Functions', props);
    return resource.getResponseField('Definition.Functions') as unknown as shapes.GreengrassFunction[];
  }

}

export class GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetFunctionDefinitionVersionRequest) {
  }

  public get execution(): GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfigExecution {
    return new GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfigExecution(this.__scope, this.__resources, this.__input);
  }

}

export class GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfigExecution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetFunctionDefinitionVersionRequest) {
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
          FunctionDefinitionId: this.__input.functionDefinitionId,
          FunctionDefinitionVersionId: this.__input.functionDefinitionVersionId,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionDefinitionVersion.Definition.DefaultConfig.Execution.IsolationMode', props);
    return resource.getResponseField('Definition.DefaultConfig.Execution.IsolationMode') as unknown as string;
  }

  public get runAs(): GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfigExecutionRunAs {
    return new GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfigExecutionRunAs(this.__scope, this.__resources, this.__input);
  }

}

export class GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfigExecutionRunAs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetFunctionDefinitionVersionRequest) {
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
          FunctionDefinitionId: this.__input.functionDefinitionId,
          FunctionDefinitionVersionId: this.__input.functionDefinitionVersionId,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionDefinitionVersion.Definition.DefaultConfig.Execution.RunAs.Gid', props);
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
          FunctionDefinitionId: this.__input.functionDefinitionId,
          FunctionDefinitionVersionId: this.__input.functionDefinitionVersionId,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunctionDefinitionVersion.Definition.DefaultConfig.Execution.RunAs.Uid', props);
    return resource.getResponseField('Definition.DefaultConfig.Execution.RunAs.Uid') as unknown as number;
  }

}

export class GreengrassResponsesFetchGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetGroupRequest) {
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
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroup.Arn', props);
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
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroup.CreationTimestamp', props);
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
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroup.Id', props);
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
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroup.LastUpdatedTimestamp', props);
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
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroup.LatestVersion', props);
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
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroup.LatestVersionArn', props);
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
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroup.Name', props);
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
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroup.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class GreengrassResponsesFetchGroupCertificateAuthority {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetGroupCertificateAuthorityRequest) {
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
          CertificateAuthorityId: this.__input.certificateAuthorityId,
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroupCertificateAuthority.GroupCertificateAuthorityArn', props);
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
          CertificateAuthorityId: this.__input.certificateAuthorityId,
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroupCertificateAuthority.GroupCertificateAuthorityId', props);
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
          CertificateAuthorityId: this.__input.certificateAuthorityId,
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroupCertificateAuthority.PemEncodedCertificate', props);
    return resource.getResponseField('PemEncodedCertificate') as unknown as string;
  }

}

export class GreengrassResponsesFetchGroupCertificateConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetGroupCertificateConfigurationRequest) {
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
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroupCertificateConfiguration.CertificateAuthorityExpiryInMilliseconds', props);
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
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroupCertificateConfiguration.CertificateExpiryInMilliseconds', props);
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
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroupCertificateConfiguration.GroupId', props);
    return resource.getResponseField('GroupId') as unknown as string;
  }

}

export class GreengrassResponsesFetchGroupVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetGroupVersionRequest) {
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
          GroupId: this.__input.groupId,
          GroupVersionId: this.__input.groupVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroupVersion.Arn', props);
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
          GroupId: this.__input.groupId,
          GroupVersionId: this.__input.groupVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroupVersion.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get definition(): GreengrassResponsesFetchGroupVersionDefinition {
    return new GreengrassResponsesFetchGroupVersionDefinition(this.__scope, this.__resources, this.__input);
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
          GroupId: this.__input.groupId,
          GroupVersionId: this.__input.groupVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroupVersion.Id', props);
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
          GroupId: this.__input.groupId,
          GroupVersionId: this.__input.groupVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroupVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class GreengrassResponsesFetchGroupVersionDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetGroupVersionRequest) {
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
          GroupId: this.__input.groupId,
          GroupVersionId: this.__input.groupVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroupVersion.Definition.ConnectorDefinitionVersionArn', props);
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
          GroupId: this.__input.groupId,
          GroupVersionId: this.__input.groupVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroupVersion.Definition.CoreDefinitionVersionArn', props);
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
          GroupId: this.__input.groupId,
          GroupVersionId: this.__input.groupVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroupVersion.Definition.DeviceDefinitionVersionArn', props);
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
          GroupId: this.__input.groupId,
          GroupVersionId: this.__input.groupVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroupVersion.Definition.FunctionDefinitionVersionArn', props);
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
          GroupId: this.__input.groupId,
          GroupVersionId: this.__input.groupVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroupVersion.Definition.LoggerDefinitionVersionArn', props);
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
          GroupId: this.__input.groupId,
          GroupVersionId: this.__input.groupVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroupVersion.Definition.ResourceDefinitionVersionArn', props);
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
          GroupId: this.__input.groupId,
          GroupVersionId: this.__input.groupVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroupVersion.Definition.SubscriptionDefinitionVersionArn', props);
    return resource.getResponseField('Definition.SubscriptionDefinitionVersionArn') as unknown as string;
  }

}

export class GreengrassResponsesFetchLoggerDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetLoggerDefinitionRequest) {
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
          LoggerDefinitionId: this.__input.loggerDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoggerDefinition.Arn', props);
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
          LoggerDefinitionId: this.__input.loggerDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoggerDefinition.CreationTimestamp', props);
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
          LoggerDefinitionId: this.__input.loggerDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoggerDefinition.Id', props);
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
          LoggerDefinitionId: this.__input.loggerDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoggerDefinition.LastUpdatedTimestamp', props);
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
          LoggerDefinitionId: this.__input.loggerDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoggerDefinition.LatestVersion', props);
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
          LoggerDefinitionId: this.__input.loggerDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoggerDefinition.LatestVersionArn', props);
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
          LoggerDefinitionId: this.__input.loggerDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoggerDefinition.Name', props);
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
          LoggerDefinitionId: this.__input.loggerDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoggerDefinition.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class GreengrassResponsesFetchLoggerDefinitionVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetLoggerDefinitionVersionRequest) {
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
          LoggerDefinitionId: this.__input.loggerDefinitionId,
          LoggerDefinitionVersionId: this.__input.loggerDefinitionVersionId,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoggerDefinitionVersion.Arn', props);
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
          LoggerDefinitionId: this.__input.loggerDefinitionId,
          LoggerDefinitionVersionId: this.__input.loggerDefinitionVersionId,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoggerDefinitionVersion.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get definition(): GreengrassResponsesFetchLoggerDefinitionVersionDefinition {
    return new GreengrassResponsesFetchLoggerDefinitionVersionDefinition(this.__scope, this.__resources, this.__input);
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
          LoggerDefinitionId: this.__input.loggerDefinitionId,
          LoggerDefinitionVersionId: this.__input.loggerDefinitionVersionId,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoggerDefinitionVersion.Id', props);
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
          LoggerDefinitionId: this.__input.loggerDefinitionId,
          LoggerDefinitionVersionId: this.__input.loggerDefinitionVersionId,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoggerDefinitionVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class GreengrassResponsesFetchLoggerDefinitionVersionDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetLoggerDefinitionVersionRequest) {
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
          LoggerDefinitionId: this.__input.loggerDefinitionId,
          LoggerDefinitionVersionId: this.__input.loggerDefinitionVersionId,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoggerDefinitionVersion.Definition.Loggers', props);
    return resource.getResponseField('Definition.Loggers') as unknown as shapes.GreengrassLogger[];
  }

}

export class GreengrassResponsesFetchResourceDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetResourceDefinitionRequest) {
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
          ResourceDefinitionId: this.__input.resourceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourceDefinition.Arn', props);
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
          ResourceDefinitionId: this.__input.resourceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourceDefinition.CreationTimestamp', props);
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
          ResourceDefinitionId: this.__input.resourceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourceDefinition.Id', props);
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
          ResourceDefinitionId: this.__input.resourceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourceDefinition.LastUpdatedTimestamp', props);
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
          ResourceDefinitionId: this.__input.resourceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourceDefinition.LatestVersion', props);
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
          ResourceDefinitionId: this.__input.resourceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourceDefinition.LatestVersionArn', props);
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
          ResourceDefinitionId: this.__input.resourceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourceDefinition.Name', props);
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
          ResourceDefinitionId: this.__input.resourceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourceDefinition.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class GreengrassResponsesFetchResourceDefinitionVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetResourceDefinitionVersionRequest) {
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
          ResourceDefinitionId: this.__input.resourceDefinitionId,
          ResourceDefinitionVersionId: this.__input.resourceDefinitionVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourceDefinitionVersion.Arn', props);
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
          ResourceDefinitionId: this.__input.resourceDefinitionId,
          ResourceDefinitionVersionId: this.__input.resourceDefinitionVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourceDefinitionVersion.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get definition(): GreengrassResponsesFetchResourceDefinitionVersionDefinition {
    return new GreengrassResponsesFetchResourceDefinitionVersionDefinition(this.__scope, this.__resources, this.__input);
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
          ResourceDefinitionId: this.__input.resourceDefinitionId,
          ResourceDefinitionVersionId: this.__input.resourceDefinitionVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourceDefinitionVersion.Id', props);
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
          ResourceDefinitionId: this.__input.resourceDefinitionId,
          ResourceDefinitionVersionId: this.__input.resourceDefinitionVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourceDefinitionVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class GreengrassResponsesFetchResourceDefinitionVersionDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetResourceDefinitionVersionRequest) {
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
          ResourceDefinitionId: this.__input.resourceDefinitionId,
          ResourceDefinitionVersionId: this.__input.resourceDefinitionVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourceDefinitionVersion.Definition.Resources', props);
    return resource.getResponseField('Definition.Resources') as unknown as shapes.GreengrassResource[];
  }

}

export class GreengrassResponsesFetchServiceRoleForAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceRoleForAccount.AssociatedAt', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceRoleForAccount.RoleArn', props);
    return resource.getResponseField('RoleArn') as unknown as string;
  }

}

export class GreengrassResponsesFetchSubscriptionDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetSubscriptionDefinitionRequest) {
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
          SubscriptionDefinitionId: this.__input.subscriptionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSubscriptionDefinition.Arn', props);
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
          SubscriptionDefinitionId: this.__input.subscriptionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSubscriptionDefinition.CreationTimestamp', props);
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
          SubscriptionDefinitionId: this.__input.subscriptionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSubscriptionDefinition.Id', props);
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
          SubscriptionDefinitionId: this.__input.subscriptionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSubscriptionDefinition.LastUpdatedTimestamp', props);
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
          SubscriptionDefinitionId: this.__input.subscriptionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSubscriptionDefinition.LatestVersion', props);
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
          SubscriptionDefinitionId: this.__input.subscriptionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSubscriptionDefinition.LatestVersionArn', props);
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
          SubscriptionDefinitionId: this.__input.subscriptionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSubscriptionDefinition.Name', props);
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
          SubscriptionDefinitionId: this.__input.subscriptionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSubscriptionDefinition.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class GreengrassResponsesFetchSubscriptionDefinitionVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetSubscriptionDefinitionVersionRequest) {
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
          NextToken: this.__input.nextToken,
          SubscriptionDefinitionId: this.__input.subscriptionDefinitionId,
          SubscriptionDefinitionVersionId: this.__input.subscriptionDefinitionVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSubscriptionDefinitionVersion.Arn', props);
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
          NextToken: this.__input.nextToken,
          SubscriptionDefinitionId: this.__input.subscriptionDefinitionId,
          SubscriptionDefinitionVersionId: this.__input.subscriptionDefinitionVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSubscriptionDefinitionVersion.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get definition(): GreengrassResponsesFetchSubscriptionDefinitionVersionDefinition {
    return new GreengrassResponsesFetchSubscriptionDefinitionVersionDefinition(this.__scope, this.__resources, this.__input);
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
          NextToken: this.__input.nextToken,
          SubscriptionDefinitionId: this.__input.subscriptionDefinitionId,
          SubscriptionDefinitionVersionId: this.__input.subscriptionDefinitionVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSubscriptionDefinitionVersion.Id', props);
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
          NextToken: this.__input.nextToken,
          SubscriptionDefinitionId: this.__input.subscriptionDefinitionId,
          SubscriptionDefinitionVersionId: this.__input.subscriptionDefinitionVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSubscriptionDefinitionVersion.NextToken', props);
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
          NextToken: this.__input.nextToken,
          SubscriptionDefinitionId: this.__input.subscriptionDefinitionId,
          SubscriptionDefinitionVersionId: this.__input.subscriptionDefinitionVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSubscriptionDefinitionVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class GreengrassResponsesFetchSubscriptionDefinitionVersionDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetSubscriptionDefinitionVersionRequest) {
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
          NextToken: this.__input.nextToken,
          SubscriptionDefinitionId: this.__input.subscriptionDefinitionId,
          SubscriptionDefinitionVersionId: this.__input.subscriptionDefinitionVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSubscriptionDefinitionVersion.Definition.Subscriptions', props);
    return resource.getResponseField('Definition.Subscriptions') as unknown as shapes.GreengrassSubscription[];
  }

}

export class GreengrassResponsesFetchThingRuntimeConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetThingRuntimeConfigurationRequest) {
  }

  public get runtimeConfiguration(): GreengrassResponsesFetchThingRuntimeConfigurationRuntimeConfiguration {
    return new GreengrassResponsesFetchThingRuntimeConfigurationRuntimeConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class GreengrassResponsesFetchThingRuntimeConfigurationRuntimeConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetThingRuntimeConfigurationRequest) {
  }

  public get telemetryConfiguration(): GreengrassResponsesFetchThingRuntimeConfigurationRuntimeConfigurationTelemetryConfiguration {
    return new GreengrassResponsesFetchThingRuntimeConfigurationRuntimeConfigurationTelemetryConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class GreengrassResponsesFetchThingRuntimeConfigurationRuntimeConfigurationTelemetryConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassGetThingRuntimeConfigurationRequest) {
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
          ThingName: this.__input.thingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetThingRuntimeConfiguration.RuntimeConfiguration.TelemetryConfiguration.ConfigurationSyncStatus', props);
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
          ThingName: this.__input.thingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetThingRuntimeConfiguration.RuntimeConfiguration.TelemetryConfiguration.Telemetry', props);
    return resource.getResponseField('RuntimeConfiguration.TelemetryConfiguration.Telemetry') as unknown as string;
  }

}

export class GreengrassResponsesListBulkDeploymentDetailedReports {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassListBulkDeploymentDetailedReportsRequest) {
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
          BulkDeploymentId: this.__input.bulkDeploymentId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBulkDeploymentDetailedReports.Deployments', props);
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
          BulkDeploymentId: this.__input.bulkDeploymentId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBulkDeploymentDetailedReports.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GreengrassResponsesListBulkDeployments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassListBulkDeploymentsRequest) {
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBulkDeployments.BulkDeployments', props);
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBulkDeployments.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GreengrassResponsesListConnectorDefinitionVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassListConnectorDefinitionVersionsRequest) {
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
          ConnectorDefinitionId: this.__input.connectorDefinitionId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListConnectorDefinitionVersions.NextToken', props);
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
          ConnectorDefinitionId: this.__input.connectorDefinitionId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListConnectorDefinitionVersions.Versions', props);
    return resource.getResponseField('Versions') as unknown as shapes.GreengrassVersionInformation[];
  }

}

export class GreengrassResponsesListConnectorDefinitions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassListConnectorDefinitionsRequest) {
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListConnectorDefinitions.Definitions', props);
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListConnectorDefinitions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GreengrassResponsesListCoreDefinitionVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassListCoreDefinitionVersionsRequest) {
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
          CoreDefinitionId: this.__input.coreDefinitionId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCoreDefinitionVersions.NextToken', props);
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
          CoreDefinitionId: this.__input.coreDefinitionId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCoreDefinitionVersions.Versions', props);
    return resource.getResponseField('Versions') as unknown as shapes.GreengrassVersionInformation[];
  }

}

export class GreengrassResponsesListCoreDefinitions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassListCoreDefinitionsRequest) {
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCoreDefinitions.Definitions', props);
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCoreDefinitions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GreengrassResponsesListDeployments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassListDeploymentsRequest) {
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
          GroupId: this.__input.groupId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeployments.Deployments', props);
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
          GroupId: this.__input.groupId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeployments.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GreengrassResponsesListDeviceDefinitionVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassListDeviceDefinitionVersionsRequest) {
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
          DeviceDefinitionId: this.__input.deviceDefinitionId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeviceDefinitionVersions.NextToken', props);
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
          DeviceDefinitionId: this.__input.deviceDefinitionId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeviceDefinitionVersions.Versions', props);
    return resource.getResponseField('Versions') as unknown as shapes.GreengrassVersionInformation[];
  }

}

export class GreengrassResponsesListDeviceDefinitions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassListDeviceDefinitionsRequest) {
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeviceDefinitions.Definitions', props);
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeviceDefinitions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GreengrassResponsesListFunctionDefinitionVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassListFunctionDefinitionVersionsRequest) {
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
          FunctionDefinitionId: this.__input.functionDefinitionId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFunctionDefinitionVersions.NextToken', props);
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
          FunctionDefinitionId: this.__input.functionDefinitionId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFunctionDefinitionVersions.Versions', props);
    return resource.getResponseField('Versions') as unknown as shapes.GreengrassVersionInformation[];
  }

}

export class GreengrassResponsesListFunctionDefinitions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassListFunctionDefinitionsRequest) {
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFunctionDefinitions.Definitions', props);
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFunctionDefinitions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GreengrassResponsesListGroupCertificateAuthorities {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassListGroupCertificateAuthoritiesRequest) {
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
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroupCertificateAuthorities.GroupCertificateAuthorities', props);
    return resource.getResponseField('GroupCertificateAuthorities') as unknown as shapes.GreengrassGroupCertificateAuthorityProperties[];
  }

}

export class GreengrassResponsesListGroupVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassListGroupVersionsRequest) {
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
          GroupId: this.__input.groupId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroupVersions.NextToken', props);
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
          GroupId: this.__input.groupId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroupVersions.Versions', props);
    return resource.getResponseField('Versions') as unknown as shapes.GreengrassVersionInformation[];
  }

}

export class GreengrassResponsesListGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassListGroupsRequest) {
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroups.Groups', props);
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GreengrassResponsesListLoggerDefinitionVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassListLoggerDefinitionVersionsRequest) {
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
          LoggerDefinitionId: this.__input.loggerDefinitionId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLoggerDefinitionVersions.NextToken', props);
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
          LoggerDefinitionId: this.__input.loggerDefinitionId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLoggerDefinitionVersions.Versions', props);
    return resource.getResponseField('Versions') as unknown as shapes.GreengrassVersionInformation[];
  }

}

export class GreengrassResponsesListLoggerDefinitions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassListLoggerDefinitionsRequest) {
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLoggerDefinitions.Definitions', props);
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLoggerDefinitions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GreengrassResponsesListResourceDefinitionVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassListResourceDefinitionVersionsRequest) {
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ResourceDefinitionId: this.__input.resourceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResourceDefinitionVersions.NextToken', props);
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ResourceDefinitionId: this.__input.resourceDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResourceDefinitionVersions.Versions', props);
    return resource.getResponseField('Versions') as unknown as shapes.GreengrassVersionInformation[];
  }

}

export class GreengrassResponsesListResourceDefinitions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassListResourceDefinitionsRequest) {
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResourceDefinitions.Definitions', props);
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResourceDefinitions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GreengrassResponsesListSubscriptionDefinitionVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassListSubscriptionDefinitionVersionsRequest) {
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SubscriptionDefinitionId: this.__input.subscriptionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSubscriptionDefinitionVersions.NextToken', props);
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SubscriptionDefinitionId: this.__input.subscriptionDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSubscriptionDefinitionVersions.Versions', props);
    return resource.getResponseField('Versions') as unknown as shapes.GreengrassVersionInformation[];
  }

}

export class GreengrassResponsesListSubscriptionDefinitions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassListSubscriptionDefinitionsRequest) {
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSubscriptionDefinitions.Definitions', props);
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSubscriptionDefinitions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GreengrassResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassListTagsForResourceRequest) {
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
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class GreengrassResponsesResetDeployments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassResetDeploymentsRequest) {
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
          AmznClientToken: this.__input.amznClientToken,
          Force: this.__input.force,
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetDeployments.DeploymentArn', props);
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
          AmznClientToken: this.__input.amznClientToken,
          Force: this.__input.force,
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetDeployments.DeploymentId', props);
    return resource.getResponseField('DeploymentId') as unknown as string;
  }

}

export class GreengrassResponsesStartBulkDeployment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassStartBulkDeploymentRequest) {
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
          AmznClientToken: this.__input.amznClientToken,
          ExecutionRoleArn: this.__input.executionRoleArn,
          InputFileUri: this.__input.inputFileUri,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartBulkDeployment.BulkDeploymentArn', props);
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
          AmznClientToken: this.__input.amznClientToken,
          ExecutionRoleArn: this.__input.executionRoleArn,
          InputFileUri: this.__input.inputFileUri,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartBulkDeployment.BulkDeploymentId', props);
    return resource.getResponseField('BulkDeploymentId') as unknown as string;
  }

}

export class GreengrassResponsesUpdateConnectivityInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassUpdateConnectivityInfoRequest) {
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
          ConnectivityInfo: this.__input.connectivityInfo,
          ThingName: this.__input.thingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConnectivityInfo.Message', props);
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
          ConnectivityInfo: this.__input.connectivityInfo,
          ThingName: this.__input.thingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConnectivityInfo.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class GreengrassResponsesUpdateGroupCertificateConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GreengrassUpdateGroupCertificateConfigurationRequest) {
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
          CertificateExpiryInMilliseconds: this.__input.certificateExpiryInMilliseconds,
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGroupCertificateConfiguration.CertificateAuthorityExpiryInMilliseconds', props);
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
          CertificateExpiryInMilliseconds: this.__input.certificateExpiryInMilliseconds,
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGroupCertificateConfiguration.CertificateExpiryInMilliseconds', props);
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
          CertificateExpiryInMilliseconds: this.__input.certificateExpiryInMilliseconds,
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGroupCertificateConfiguration.GroupId', props);
    return resource.getResponseField('GroupId') as unknown as string;
  }

}

