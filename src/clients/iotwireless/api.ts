import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class IoTWirelessClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateAwsAccountWithPartnerAccount(input: shapes.IoTWirelessAssociateAwsAccountWithPartnerAccountRequest): IoTWirelessResponsesAssociateAwsAccountWithPartnerAccount {
    return new IoTWirelessResponsesAssociateAwsAccountWithPartnerAccount(this, this.__resources, input);
  }

  public associateWirelessDeviceWithThing(input: shapes.IoTWirelessAssociateWirelessDeviceWithThingRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateWirelessDeviceWithThing',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.AssociateWirelessDeviceWithThing'),
        parameters: {
          Id: input.id,
          ThingArn: input.thingArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateWirelessDeviceWithThing', props);
  }

  public associateWirelessGatewayWithCertificate(input: shapes.IoTWirelessAssociateWirelessGatewayWithCertificateRequest): IoTWirelessResponsesAssociateWirelessGatewayWithCertificate {
    return new IoTWirelessResponsesAssociateWirelessGatewayWithCertificate(this, this.__resources, input);
  }

  public associateWirelessGatewayWithThing(input: shapes.IoTWirelessAssociateWirelessGatewayWithThingRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateWirelessGatewayWithThing',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.AssociateWirelessGatewayWithThing'),
        parameters: {
          Id: input.id,
          ThingArn: input.thingArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateWirelessGatewayWithThing', props);
  }

  public createDestination(input: shapes.IoTWirelessCreateDestinationRequest): IoTWirelessResponsesCreateDestination {
    return new IoTWirelessResponsesCreateDestination(this, this.__resources, input);
  }

  public createDeviceProfile(input: shapes.IoTWirelessCreateDeviceProfileRequest): IoTWirelessResponsesCreateDeviceProfile {
    return new IoTWirelessResponsesCreateDeviceProfile(this, this.__resources, input);
  }

  public createServiceProfile(input: shapes.IoTWirelessCreateServiceProfileRequest): IoTWirelessResponsesCreateServiceProfile {
    return new IoTWirelessResponsesCreateServiceProfile(this, this.__resources, input);
  }

  public createWirelessDevice(input: shapes.IoTWirelessCreateWirelessDeviceRequest): IoTWirelessResponsesCreateWirelessDevice {
    return new IoTWirelessResponsesCreateWirelessDevice(this, this.__resources, input);
  }

  public createWirelessGateway(input: shapes.IoTWirelessCreateWirelessGatewayRequest): IoTWirelessResponsesCreateWirelessGateway {
    return new IoTWirelessResponsesCreateWirelessGateway(this, this.__resources, input);
  }

  public createWirelessGatewayTask(input: shapes.IoTWirelessCreateWirelessGatewayTaskRequest): IoTWirelessResponsesCreateWirelessGatewayTask {
    return new IoTWirelessResponsesCreateWirelessGatewayTask(this, this.__resources, input);
  }

  public createWirelessGatewayTaskDefinition(input: shapes.IoTWirelessCreateWirelessGatewayTaskDefinitionRequest): IoTWirelessResponsesCreateWirelessGatewayTaskDefinition {
    return new IoTWirelessResponsesCreateWirelessGatewayTaskDefinition(this, this.__resources, input);
  }

  public deleteDestination(input: shapes.IoTWirelessDeleteDestinationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDestination',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.DeleteDestination'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDestination', props);
  }

  public deleteDeviceProfile(input: shapes.IoTWirelessDeleteDeviceProfileRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDeviceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.DeleteDeviceProfile'),
        parameters: {
          Id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDeviceProfile', props);
  }

  public deleteServiceProfile(input: shapes.IoTWirelessDeleteServiceProfileRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteServiceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.DeleteServiceProfile'),
        parameters: {
          Id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteServiceProfile', props);
  }

  public deleteWirelessDevice(input: shapes.IoTWirelessDeleteWirelessDeviceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteWirelessDevice',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.DeleteWirelessDevice'),
        parameters: {
          Id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteWirelessDevice', props);
  }

  public deleteWirelessGateway(input: shapes.IoTWirelessDeleteWirelessGatewayRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteWirelessGateway',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.DeleteWirelessGateway'),
        parameters: {
          Id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteWirelessGateway', props);
  }

  public deleteWirelessGatewayTask(input: shapes.IoTWirelessDeleteWirelessGatewayTaskRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteWirelessGatewayTask',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.DeleteWirelessGatewayTask'),
        parameters: {
          Id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteWirelessGatewayTask', props);
  }

  public deleteWirelessGatewayTaskDefinition(input: shapes.IoTWirelessDeleteWirelessGatewayTaskDefinitionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteWirelessGatewayTaskDefinition',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.DeleteWirelessGatewayTaskDefinition'),
        parameters: {
          Id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteWirelessGatewayTaskDefinition', props);
  }

  public disassociateAwsAccountFromPartnerAccount(input: shapes.IoTWirelessDisassociateAwsAccountFromPartnerAccountRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateAwsAccountFromPartnerAccount',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.DisassociateAwsAccountFromPartnerAccount'),
        parameters: {
          PartnerAccountId: input.partnerAccountId,
          PartnerType: input.partnerType,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateAwsAccountFromPartnerAccount', props);
  }

  public disassociateWirelessDeviceFromThing(input: shapes.IoTWirelessDisassociateWirelessDeviceFromThingRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateWirelessDeviceFromThing',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.DisassociateWirelessDeviceFromThing'),
        parameters: {
          Id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateWirelessDeviceFromThing', props);
  }

  public disassociateWirelessGatewayFromCertificate(input: shapes.IoTWirelessDisassociateWirelessGatewayFromCertificateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateWirelessGatewayFromCertificate',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.DisassociateWirelessGatewayFromCertificate'),
        parameters: {
          Id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateWirelessGatewayFromCertificate', props);
  }

  public disassociateWirelessGatewayFromThing(input: shapes.IoTWirelessDisassociateWirelessGatewayFromThingRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateWirelessGatewayFromThing',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.DisassociateWirelessGatewayFromThing'),
        parameters: {
          Id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateWirelessGatewayFromThing', props);
  }

  public fetchDestination(input: shapes.IoTWirelessGetDestinationRequest): IoTWirelessResponsesFetchDestination {
    return new IoTWirelessResponsesFetchDestination(this, this.__resources, input);
  }

  public fetchDeviceProfile(input: shapes.IoTWirelessGetDeviceProfileRequest): IoTWirelessResponsesFetchDeviceProfile {
    return new IoTWirelessResponsesFetchDeviceProfile(this, this.__resources, input);
  }

  public fetchLogLevelsByResourceTypes(): IoTWirelessResponsesFetchLogLevelsByResourceTypes {
    return new IoTWirelessResponsesFetchLogLevelsByResourceTypes(this, this.__resources);
  }

  public fetchPartnerAccount(input: shapes.IoTWirelessGetPartnerAccountRequest): IoTWirelessResponsesFetchPartnerAccount {
    return new IoTWirelessResponsesFetchPartnerAccount(this, this.__resources, input);
  }

  public fetchResourceLogLevel(input: shapes.IoTWirelessGetResourceLogLevelRequest): IoTWirelessResponsesFetchResourceLogLevel {
    return new IoTWirelessResponsesFetchResourceLogLevel(this, this.__resources, input);
  }

  public fetchServiceEndpoint(input: shapes.IoTWirelessGetServiceEndpointRequest): IoTWirelessResponsesFetchServiceEndpoint {
    return new IoTWirelessResponsesFetchServiceEndpoint(this, this.__resources, input);
  }

  public fetchServiceProfile(input: shapes.IoTWirelessGetServiceProfileRequest): IoTWirelessResponsesFetchServiceProfile {
    return new IoTWirelessResponsesFetchServiceProfile(this, this.__resources, input);
  }

  public fetchWirelessDevice(input: shapes.IoTWirelessGetWirelessDeviceRequest): IoTWirelessResponsesFetchWirelessDevice {
    return new IoTWirelessResponsesFetchWirelessDevice(this, this.__resources, input);
  }

  public fetchWirelessDeviceStatistics(input: shapes.IoTWirelessGetWirelessDeviceStatisticsRequest): IoTWirelessResponsesFetchWirelessDeviceStatistics {
    return new IoTWirelessResponsesFetchWirelessDeviceStatistics(this, this.__resources, input);
  }

  public fetchWirelessGateway(input: shapes.IoTWirelessGetWirelessGatewayRequest): IoTWirelessResponsesFetchWirelessGateway {
    return new IoTWirelessResponsesFetchWirelessGateway(this, this.__resources, input);
  }

  public fetchWirelessGatewayCertificate(input: shapes.IoTWirelessGetWirelessGatewayCertificateRequest): IoTWirelessResponsesFetchWirelessGatewayCertificate {
    return new IoTWirelessResponsesFetchWirelessGatewayCertificate(this, this.__resources, input);
  }

  public fetchWirelessGatewayFirmwareInformation(input: shapes.IoTWirelessGetWirelessGatewayFirmwareInformationRequest): IoTWirelessResponsesFetchWirelessGatewayFirmwareInformation {
    return new IoTWirelessResponsesFetchWirelessGatewayFirmwareInformation(this, this.__resources, input);
  }

  public fetchWirelessGatewayStatistics(input: shapes.IoTWirelessGetWirelessGatewayStatisticsRequest): IoTWirelessResponsesFetchWirelessGatewayStatistics {
    return new IoTWirelessResponsesFetchWirelessGatewayStatistics(this, this.__resources, input);
  }

  public fetchWirelessGatewayTask(input: shapes.IoTWirelessGetWirelessGatewayTaskRequest): IoTWirelessResponsesFetchWirelessGatewayTask {
    return new IoTWirelessResponsesFetchWirelessGatewayTask(this, this.__resources, input);
  }

  public fetchWirelessGatewayTaskDefinition(input: shapes.IoTWirelessGetWirelessGatewayTaskDefinitionRequest): IoTWirelessResponsesFetchWirelessGatewayTaskDefinition {
    return new IoTWirelessResponsesFetchWirelessGatewayTaskDefinition(this, this.__resources, input);
  }

  public listDestinations(input: shapes.IoTWirelessListDestinationsRequest): IoTWirelessResponsesListDestinations {
    return new IoTWirelessResponsesListDestinations(this, this.__resources, input);
  }

  public listDeviceProfiles(input: shapes.IoTWirelessListDeviceProfilesRequest): IoTWirelessResponsesListDeviceProfiles {
    return new IoTWirelessResponsesListDeviceProfiles(this, this.__resources, input);
  }

  public listPartnerAccounts(input: shapes.IoTWirelessListPartnerAccountsRequest): IoTWirelessResponsesListPartnerAccounts {
    return new IoTWirelessResponsesListPartnerAccounts(this, this.__resources, input);
  }

  public listServiceProfiles(input: shapes.IoTWirelessListServiceProfilesRequest): IoTWirelessResponsesListServiceProfiles {
    return new IoTWirelessResponsesListServiceProfiles(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.IoTWirelessListTagsForResourceRequest): IoTWirelessResponsesListTagsForResource {
    return new IoTWirelessResponsesListTagsForResource(this, this.__resources, input);
  }

  public listWirelessDevices(input: shapes.IoTWirelessListWirelessDevicesRequest): IoTWirelessResponsesListWirelessDevices {
    return new IoTWirelessResponsesListWirelessDevices(this, this.__resources, input);
  }

  public listWirelessGatewayTaskDefinitions(input: shapes.IoTWirelessListWirelessGatewayTaskDefinitionsRequest): IoTWirelessResponsesListWirelessGatewayTaskDefinitions {
    return new IoTWirelessResponsesListWirelessGatewayTaskDefinitions(this, this.__resources, input);
  }

  public listWirelessGateways(input: shapes.IoTWirelessListWirelessGatewaysRequest): IoTWirelessResponsesListWirelessGateways {
    return new IoTWirelessResponsesListWirelessGateways(this, this.__resources, input);
  }

  public putResourceLogLevel(input: shapes.IoTWirelessPutResourceLogLevelRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putResourceLogLevel',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.PutResourceLogLevel'),
        parameters: {
          ResourceIdentifier: input.resourceIdentifier,
          ResourceType: input.resourceType,
          LogLevel: input.logLevel,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutResourceLogLevel', props);
  }

  public resetAllResourceLogLevels(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetAllResourceLogLevels',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.ResetAllResourceLogLevels'),
        parameters: {
        },
      },
    };
    new cr.AwsCustomResource(this, 'ResetAllResourceLogLevels', props);
  }

  public resetResourceLogLevel(input: shapes.IoTWirelessResetResourceLogLevelRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetResourceLogLevel',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.ResetResourceLogLevel'),
        parameters: {
          ResourceIdentifier: input.resourceIdentifier,
          ResourceType: input.resourceType,
        },
      },
    };
    new cr.AwsCustomResource(this, 'ResetResourceLogLevel', props);
  }

  public sendDataToWirelessDevice(input: shapes.IoTWirelessSendDataToWirelessDeviceRequest): IoTWirelessResponsesSendDataToWirelessDevice {
    return new IoTWirelessResponsesSendDataToWirelessDevice(this, this.__resources, input);
  }

  public tagResource(input: shapes.IoTWirelessTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public testWirelessDevice(input: shapes.IoTWirelessTestWirelessDeviceRequest): IoTWirelessResponsesTestWirelessDevice {
    return new IoTWirelessResponsesTestWirelessDevice(this, this.__resources, input);
  }

  public untagResource(input: shapes.IoTWirelessUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateDestination(input: shapes.IoTWirelessUpdateDestinationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDestination',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.UpdateDestination'),
        parameters: {
          Name: input.name,
          ExpressionType: input.expressionType,
          Expression: input.expression,
          Description: input.description,
          RoleArn: input.roleArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateDestination', props);
  }

  public updateLogLevelsByResourceTypes(input: shapes.IoTWirelessUpdateLogLevelsByResourceTypesRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLogLevelsByResourceTypes',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.UpdateLogLevelsByResourceTypes'),
        parameters: {
          DefaultLogLevel: input.defaultLogLevel,
          WirelessDeviceLogOptions: input.wirelessDeviceLogOptions,
          WirelessGatewayLogOptions: input.wirelessGatewayLogOptions,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateLogLevelsByResourceTypes', props);
  }

  public updatePartnerAccount(input: shapes.IoTWirelessUpdatePartnerAccountRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePartnerAccount',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.UpdatePartnerAccount'),
        parameters: {
          Sidewalk: {
            AppServerPrivateKey: input.sidewalk.appServerPrivateKey,
          },
          PartnerAccountId: input.partnerAccountId,
          PartnerType: input.partnerType,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdatePartnerAccount', props);
  }

  public updateWirelessDevice(input: shapes.IoTWirelessUpdateWirelessDeviceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWirelessDevice',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.UpdateWirelessDevice'),
        parameters: {
          Id: input.id,
          DestinationName: input.destinationName,
          Name: input.name,
          Description: input.description,
          LoRaWAN: {
            DeviceProfileId: input.loRaWan?.deviceProfileId,
            ServiceProfileId: input.loRaWan?.serviceProfileId,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateWirelessDevice', props);
  }

  public updateWirelessGateway(input: shapes.IoTWirelessUpdateWirelessGatewayRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWirelessGateway',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.UpdateWirelessGateway'),
        parameters: {
          Id: input.id,
          Name: input.name,
          Description: input.description,
          JoinEuiFilters: input.joinEuiFilters,
          NetIdFilters: input.netIdFilters,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateWirelessGateway', props);
  }

}

export class IoTWirelessResponsesAssociateAwsAccountWithPartnerAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessAssociateAwsAccountWithPartnerAccountRequest) {
  }

  public get sidewalk(): IoTWirelessResponsesAssociateAwsAccountWithPartnerAccountSidewalk {
    return new IoTWirelessResponsesAssociateAwsAccountWithPartnerAccountSidewalk(this.__scope, this.__resources, this.__input);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateAwsAccountWithPartnerAccount',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.AssociateAwsAccountWithPartnerAccount.Arn'),
        outputPath: 'Arn',
        parameters: {
          Sidewalk: {
            AmazonId: this.__input.sidewalk.amazonId,
            AppServerPrivateKey: this.__input.sidewalk.appServerPrivateKey,
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateAwsAccountWithPartnerAccount.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

}

export class IoTWirelessResponsesAssociateAwsAccountWithPartnerAccountSidewalk {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessAssociateAwsAccountWithPartnerAccountRequest) {
  }

  public get amazonId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateAwsAccountWithPartnerAccount',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.AssociateAwsAccountWithPartnerAccount.Sidewalk.AmazonId'),
        outputPath: 'Sidewalk.AmazonId',
        parameters: {
          Sidewalk: {
            AmazonId: this.__input.sidewalk.amazonId,
            AppServerPrivateKey: this.__input.sidewalk.appServerPrivateKey,
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateAwsAccountWithPartnerAccount.Sidewalk.AmazonId', props);
    return resource.getResponseField('Sidewalk.AmazonId') as unknown as string;
  }

  public get appServerPrivateKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateAwsAccountWithPartnerAccount',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.AssociateAwsAccountWithPartnerAccount.Sidewalk.AppServerPrivateKey'),
        outputPath: 'Sidewalk.AppServerPrivateKey',
        parameters: {
          Sidewalk: {
            AmazonId: this.__input.sidewalk.amazonId,
            AppServerPrivateKey: this.__input.sidewalk.appServerPrivateKey,
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateAwsAccountWithPartnerAccount.Sidewalk.AppServerPrivateKey', props);
    return resource.getResponseField('Sidewalk.AppServerPrivateKey') as unknown as string;
  }

}

export class IoTWirelessResponsesAssociateWirelessGatewayWithCertificate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessAssociateWirelessGatewayWithCertificateRequest) {
  }

  public get iotCertificateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateWirelessGatewayWithCertificate',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.AssociateWirelessGatewayWithCertificate.IotCertificateId'),
        outputPath: 'IotCertificateId',
        parameters: {
          Id: this.__input.id,
          IotCertificateId: this.__input.iotCertificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateWirelessGatewayWithCertificate.IotCertificateId', props);
    return resource.getResponseField('IotCertificateId') as unknown as string;
  }

}

export class IoTWirelessResponsesCreateDestination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessCreateDestinationRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDestination',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.CreateDestination.Arn'),
        outputPath: 'Arn',
        parameters: {
          Name: this.__input.name,
          ExpressionType: this.__input.expressionType,
          Expression: this.__input.expression,
          Description: this.__input.description,
          RoleArn: this.__input.roleArn,
          Tags: this.__input.tags,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDestination.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDestination',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.CreateDestination.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
          ExpressionType: this.__input.expressionType,
          Expression: this.__input.expression,
          Description: this.__input.description,
          RoleArn: this.__input.roleArn,
          Tags: this.__input.tags,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDestination.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class IoTWirelessResponsesCreateDeviceProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessCreateDeviceProfileRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeviceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.CreateDeviceProfile.Arn'),
        outputPath: 'Arn',
        parameters: {
          Name: this.__input.name,
          LoRaWAN: {
            SupportsClassB: this.__input.loRaWan?.supportsClassB,
            ClassBTimeout: this.__input.loRaWan?.classBTimeout,
            PingSlotPeriod: this.__input.loRaWan?.pingSlotPeriod,
            PingSlotDr: this.__input.loRaWan?.pingSlotDr,
            PingSlotFreq: this.__input.loRaWan?.pingSlotFreq,
            SupportsClassC: this.__input.loRaWan?.supportsClassC,
            ClassCTimeout: this.__input.loRaWan?.classCTimeout,
            MacVersion: this.__input.loRaWan?.macVersion,
            RegParamsRevision: this.__input.loRaWan?.regParamsRevision,
            RxDelay1: this.__input.loRaWan?.rxDelay1,
            RxDrOffset1: this.__input.loRaWan?.rxDrOffset1,
            RxDataRate2: this.__input.loRaWan?.rxDataRate2,
            RxFreq2: this.__input.loRaWan?.rxFreq2,
            FactoryPresetFreqsList: this.__input.loRaWan?.factoryPresetFreqsList,
            MaxEirp: this.__input.loRaWan?.maxEirp,
            MaxDutyCycle: this.__input.loRaWan?.maxDutyCycle,
            RfRegion: this.__input.loRaWan?.rfRegion,
            SupportsJoin: this.__input.loRaWan?.supportsJoin,
            Supports32BitFCnt: this.__input.loRaWan?.supports32BitFCnt,
          },
          Tags: this.__input.tags,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeviceProfile.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeviceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.CreateDeviceProfile.Id'),
        outputPath: 'Id',
        parameters: {
          Name: this.__input.name,
          LoRaWAN: {
            SupportsClassB: this.__input.loRaWan?.supportsClassB,
            ClassBTimeout: this.__input.loRaWan?.classBTimeout,
            PingSlotPeriod: this.__input.loRaWan?.pingSlotPeriod,
            PingSlotDr: this.__input.loRaWan?.pingSlotDr,
            PingSlotFreq: this.__input.loRaWan?.pingSlotFreq,
            SupportsClassC: this.__input.loRaWan?.supportsClassC,
            ClassCTimeout: this.__input.loRaWan?.classCTimeout,
            MacVersion: this.__input.loRaWan?.macVersion,
            RegParamsRevision: this.__input.loRaWan?.regParamsRevision,
            RxDelay1: this.__input.loRaWan?.rxDelay1,
            RxDrOffset1: this.__input.loRaWan?.rxDrOffset1,
            RxDataRate2: this.__input.loRaWan?.rxDataRate2,
            RxFreq2: this.__input.loRaWan?.rxFreq2,
            FactoryPresetFreqsList: this.__input.loRaWan?.factoryPresetFreqsList,
            MaxEirp: this.__input.loRaWan?.maxEirp,
            MaxDutyCycle: this.__input.loRaWan?.maxDutyCycle,
            RfRegion: this.__input.loRaWan?.rfRegion,
            SupportsJoin: this.__input.loRaWan?.supportsJoin,
            Supports32BitFCnt: this.__input.loRaWan?.supports32BitFCnt,
          },
          Tags: this.__input.tags,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeviceProfile.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

}

export class IoTWirelessResponsesCreateServiceProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessCreateServiceProfileRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.CreateServiceProfile.Arn'),
        outputPath: 'Arn',
        parameters: {
          Name: this.__input.name,
          LoRaWAN: {
            AddGwMetadata: this.__input.loRaWan?.addGwMetadata,
          },
          Tags: this.__input.tags,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceProfile.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.CreateServiceProfile.Id'),
        outputPath: 'Id',
        parameters: {
          Name: this.__input.name,
          LoRaWAN: {
            AddGwMetadata: this.__input.loRaWan?.addGwMetadata,
          },
          Tags: this.__input.tags,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceProfile.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

}

export class IoTWirelessResponsesCreateWirelessDevice {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessCreateWirelessDeviceRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWirelessDevice',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.CreateWirelessDevice.Arn'),
        outputPath: 'Arn',
        parameters: {
          Type: this.__input.type,
          Name: this.__input.name,
          Description: this.__input.description,
          DestinationName: this.__input.destinationName,
          ClientRequestToken: this.__input.clientRequestToken,
          LoRaWAN: {
            DevEui: this.__input.loRaWan?.devEui,
            DeviceProfileId: this.__input.loRaWan?.deviceProfileId,
            ServiceProfileId: this.__input.loRaWan?.serviceProfileId,
            OtaaV1_1: {
              AppKey: this.__input.loRaWan?.otaaV11?.appKey,
              NwkKey: this.__input.loRaWan?.otaaV11?.nwkKey,
              JoinEui: this.__input.loRaWan?.otaaV11?.joinEui,
            },
            OtaaV1_0_x: {
              AppKey: this.__input.loRaWan?.otaaV10X?.appKey,
              AppEui: this.__input.loRaWan?.otaaV10X?.appEui,
            },
            AbpV1_1: {
              DevAddr: this.__input.loRaWan?.abpV11?.devAddr,
              SessionKeys: {
                FNwkSIntKey: this.__input.loRaWan?.abpV11?.sessionKeys?.fNwkSIntKey,
                SNwkSIntKey: this.__input.loRaWan?.abpV11?.sessionKeys?.sNwkSIntKey,
                NwkSEncKey: this.__input.loRaWan?.abpV11?.sessionKeys?.nwkSEncKey,
                AppSKey: this.__input.loRaWan?.abpV11?.sessionKeys?.appSKey,
              },
            },
            AbpV1_0_x: {
              DevAddr: this.__input.loRaWan?.abpV10X?.devAddr,
              SessionKeys: {
                NwkSKey: this.__input.loRaWan?.abpV10X?.sessionKeys?.nwkSKey,
                AppSKey: this.__input.loRaWan?.abpV10X?.sessionKeys?.appSKey,
              },
            },
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWirelessDevice.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWirelessDevice',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.CreateWirelessDevice.Id'),
        outputPath: 'Id',
        parameters: {
          Type: this.__input.type,
          Name: this.__input.name,
          Description: this.__input.description,
          DestinationName: this.__input.destinationName,
          ClientRequestToken: this.__input.clientRequestToken,
          LoRaWAN: {
            DevEui: this.__input.loRaWan?.devEui,
            DeviceProfileId: this.__input.loRaWan?.deviceProfileId,
            ServiceProfileId: this.__input.loRaWan?.serviceProfileId,
            OtaaV1_1: {
              AppKey: this.__input.loRaWan?.otaaV11?.appKey,
              NwkKey: this.__input.loRaWan?.otaaV11?.nwkKey,
              JoinEui: this.__input.loRaWan?.otaaV11?.joinEui,
            },
            OtaaV1_0_x: {
              AppKey: this.__input.loRaWan?.otaaV10X?.appKey,
              AppEui: this.__input.loRaWan?.otaaV10X?.appEui,
            },
            AbpV1_1: {
              DevAddr: this.__input.loRaWan?.abpV11?.devAddr,
              SessionKeys: {
                FNwkSIntKey: this.__input.loRaWan?.abpV11?.sessionKeys?.fNwkSIntKey,
                SNwkSIntKey: this.__input.loRaWan?.abpV11?.sessionKeys?.sNwkSIntKey,
                NwkSEncKey: this.__input.loRaWan?.abpV11?.sessionKeys?.nwkSEncKey,
                AppSKey: this.__input.loRaWan?.abpV11?.sessionKeys?.appSKey,
              },
            },
            AbpV1_0_x: {
              DevAddr: this.__input.loRaWan?.abpV10X?.devAddr,
              SessionKeys: {
                NwkSKey: this.__input.loRaWan?.abpV10X?.sessionKeys?.nwkSKey,
                AppSKey: this.__input.loRaWan?.abpV10X?.sessionKeys?.appSKey,
              },
            },
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWirelessDevice.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

}

export class IoTWirelessResponsesCreateWirelessGateway {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessCreateWirelessGatewayRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWirelessGateway',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.CreateWirelessGateway.Arn'),
        outputPath: 'Arn',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          LoRaWAN: {
            GatewayEui: this.__input.loRaWan.gatewayEui,
            RfRegion: this.__input.loRaWan.rfRegion,
            JoinEuiFilters: this.__input.loRaWan.joinEuiFilters,
            NetIdFilters: this.__input.loRaWan.netIdFilters,
            SubBands: this.__input.loRaWan.subBands,
          },
          Tags: this.__input.tags,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWirelessGateway.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWirelessGateway',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.CreateWirelessGateway.Id'),
        outputPath: 'Id',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          LoRaWAN: {
            GatewayEui: this.__input.loRaWan.gatewayEui,
            RfRegion: this.__input.loRaWan.rfRegion,
            JoinEuiFilters: this.__input.loRaWan.joinEuiFilters,
            NetIdFilters: this.__input.loRaWan.netIdFilters,
            SubBands: this.__input.loRaWan.subBands,
          },
          Tags: this.__input.tags,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWirelessGateway.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

}

export class IoTWirelessResponsesCreateWirelessGatewayTask {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessCreateWirelessGatewayTaskRequest) {
  }

  public get wirelessGatewayTaskDefinitionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWirelessGatewayTask',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.CreateWirelessGatewayTask.WirelessGatewayTaskDefinitionId'),
        outputPath: 'WirelessGatewayTaskDefinitionId',
        parameters: {
          Id: this.__input.id,
          WirelessGatewayTaskDefinitionId: this.__input.wirelessGatewayTaskDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWirelessGatewayTask.WirelessGatewayTaskDefinitionId', props);
    return resource.getResponseField('WirelessGatewayTaskDefinitionId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWirelessGatewayTask',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.CreateWirelessGatewayTask.Status'),
        outputPath: 'Status',
        parameters: {
          Id: this.__input.id,
          WirelessGatewayTaskDefinitionId: this.__input.wirelessGatewayTaskDefinitionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWirelessGatewayTask.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class IoTWirelessResponsesCreateWirelessGatewayTaskDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessCreateWirelessGatewayTaskDefinitionRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWirelessGatewayTaskDefinition',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.CreateWirelessGatewayTaskDefinition.Id'),
        outputPath: 'Id',
        parameters: {
          AutoCreateTasks: this.__input.autoCreateTasks,
          Name: this.__input.name,
          Update: {
            UpdateDataSource: this.__input.update?.updateDataSource,
            UpdateDataRole: this.__input.update?.updateDataRole,
            LoRaWAN: {
              UpdateSignature: this.__input.update?.loRaWan?.updateSignature,
              SigKeyCrc: this.__input.update?.loRaWan?.sigKeyCrc,
              CurrentVersion: {
                PackageVersion: this.__input.update?.loRaWan?.currentVersion?.packageVersion,
                Model: this.__input.update?.loRaWan?.currentVersion?.model,
                Station: this.__input.update?.loRaWan?.currentVersion?.station,
              },
              UpdateVersion: {
                PackageVersion: this.__input.update?.loRaWan?.updateVersion?.packageVersion,
                Model: this.__input.update?.loRaWan?.updateVersion?.model,
                Station: this.__input.update?.loRaWan?.updateVersion?.station,
              },
            },
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWirelessGatewayTaskDefinition.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWirelessGatewayTaskDefinition',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.CreateWirelessGatewayTaskDefinition.Arn'),
        outputPath: 'Arn',
        parameters: {
          AutoCreateTasks: this.__input.autoCreateTasks,
          Name: this.__input.name,
          Update: {
            UpdateDataSource: this.__input.update?.updateDataSource,
            UpdateDataRole: this.__input.update?.updateDataRole,
            LoRaWAN: {
              UpdateSignature: this.__input.update?.loRaWan?.updateSignature,
              SigKeyCrc: this.__input.update?.loRaWan?.sigKeyCrc,
              CurrentVersion: {
                PackageVersion: this.__input.update?.loRaWan?.currentVersion?.packageVersion,
                Model: this.__input.update?.loRaWan?.currentVersion?.model,
                Station: this.__input.update?.loRaWan?.currentVersion?.station,
              },
              UpdateVersion: {
                PackageVersion: this.__input.update?.loRaWan?.updateVersion?.packageVersion,
                Model: this.__input.update?.loRaWan?.updateVersion?.model,
                Station: this.__input.update?.loRaWan?.updateVersion?.station,
              },
            },
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWirelessGatewayTaskDefinition.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

}

export class IoTWirelessResponsesFetchDestination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessGetDestinationRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDestination',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetDestination.Arn'),
        outputPath: 'Arn',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDestination.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDestination',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetDestination.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDestination.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get expression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDestination',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetDestination.Expression'),
        outputPath: 'Expression',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDestination.Expression', props);
    return resource.getResponseField('Expression') as unknown as string;
  }

  public get expressionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDestination',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetDestination.ExpressionType'),
        outputPath: 'ExpressionType',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDestination.ExpressionType', props);
    return resource.getResponseField('ExpressionType') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDestination',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetDestination.Description'),
        outputPath: 'Description',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDestination.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDestination',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetDestination.RoleArn'),
        outputPath: 'RoleArn',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDestination.RoleArn', props);
    return resource.getResponseField('RoleArn') as unknown as string;
  }

}

export class IoTWirelessResponsesFetchDeviceProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessGetDeviceProfileRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetDeviceProfile.Arn'),
        outputPath: 'Arn',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceProfile.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetDeviceProfile.Name'),
        outputPath: 'Name',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceProfile.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetDeviceProfile.Id'),
        outputPath: 'Id',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceProfile.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get loRaWan(): IoTWirelessResponsesFetchDeviceProfileLoRaWan {
    return new IoTWirelessResponsesFetchDeviceProfileLoRaWan(this.__scope, this.__resources, this.__input);
  }

}

export class IoTWirelessResponsesFetchDeviceProfileLoRaWan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessGetDeviceProfileRequest) {
  }

  public get supportsClassB(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetDeviceProfile.LoRaWAN.SupportsClassB'),
        outputPath: 'LoRaWAN.SupportsClassB',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceProfile.LoRaWAN.SupportsClassB', props);
    return resource.getResponseField('LoRaWAN.SupportsClassB') as unknown as boolean;
  }

  public get classBTimeout(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetDeviceProfile.LoRaWAN.ClassBTimeout'),
        outputPath: 'LoRaWAN.ClassBTimeout',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceProfile.LoRaWAN.ClassBTimeout', props);
    return resource.getResponseField('LoRaWAN.ClassBTimeout') as unknown as number;
  }

  public get pingSlotPeriod(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetDeviceProfile.LoRaWAN.PingSlotPeriod'),
        outputPath: 'LoRaWAN.PingSlotPeriod',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceProfile.LoRaWAN.PingSlotPeriod', props);
    return resource.getResponseField('LoRaWAN.PingSlotPeriod') as unknown as number;
  }

  public get pingSlotDr(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetDeviceProfile.LoRaWAN.PingSlotDr'),
        outputPath: 'LoRaWAN.PingSlotDr',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceProfile.LoRaWAN.PingSlotDr', props);
    return resource.getResponseField('LoRaWAN.PingSlotDr') as unknown as number;
  }

  public get pingSlotFreq(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetDeviceProfile.LoRaWAN.PingSlotFreq'),
        outputPath: 'LoRaWAN.PingSlotFreq',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceProfile.LoRaWAN.PingSlotFreq', props);
    return resource.getResponseField('LoRaWAN.PingSlotFreq') as unknown as number;
  }

  public get supportsClassC(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetDeviceProfile.LoRaWAN.SupportsClassC'),
        outputPath: 'LoRaWAN.SupportsClassC',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceProfile.LoRaWAN.SupportsClassC', props);
    return resource.getResponseField('LoRaWAN.SupportsClassC') as unknown as boolean;
  }

  public get classCTimeout(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetDeviceProfile.LoRaWAN.ClassCTimeout'),
        outputPath: 'LoRaWAN.ClassCTimeout',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceProfile.LoRaWAN.ClassCTimeout', props);
    return resource.getResponseField('LoRaWAN.ClassCTimeout') as unknown as number;
  }

  public get macVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetDeviceProfile.LoRaWAN.MacVersion'),
        outputPath: 'LoRaWAN.MacVersion',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceProfile.LoRaWAN.MacVersion', props);
    return resource.getResponseField('LoRaWAN.MacVersion') as unknown as string;
  }

  public get regParamsRevision(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetDeviceProfile.LoRaWAN.RegParamsRevision'),
        outputPath: 'LoRaWAN.RegParamsRevision',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceProfile.LoRaWAN.RegParamsRevision', props);
    return resource.getResponseField('LoRaWAN.RegParamsRevision') as unknown as string;
  }

  public get rxDelay1(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetDeviceProfile.LoRaWAN.RxDelay1'),
        outputPath: 'LoRaWAN.RxDelay1',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceProfile.LoRaWAN.RxDelay1', props);
    return resource.getResponseField('LoRaWAN.RxDelay1') as unknown as number;
  }

  public get rxDrOffset1(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetDeviceProfile.LoRaWAN.RxDrOffset1'),
        outputPath: 'LoRaWAN.RxDrOffset1',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceProfile.LoRaWAN.RxDrOffset1', props);
    return resource.getResponseField('LoRaWAN.RxDrOffset1') as unknown as number;
  }

  public get rxDataRate2(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetDeviceProfile.LoRaWAN.RxDataRate2'),
        outputPath: 'LoRaWAN.RxDataRate2',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceProfile.LoRaWAN.RxDataRate2', props);
    return resource.getResponseField('LoRaWAN.RxDataRate2') as unknown as number;
  }

  public get rxFreq2(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetDeviceProfile.LoRaWAN.RxFreq2'),
        outputPath: 'LoRaWAN.RxFreq2',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceProfile.LoRaWAN.RxFreq2', props);
    return resource.getResponseField('LoRaWAN.RxFreq2') as unknown as number;
  }

  public get factoryPresetFreqsList(): number[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetDeviceProfile.LoRaWAN.FactoryPresetFreqsList'),
        outputPath: 'LoRaWAN.FactoryPresetFreqsList',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceProfile.LoRaWAN.FactoryPresetFreqsList', props);
    return resource.getResponseField('LoRaWAN.FactoryPresetFreqsList') as unknown as number[];
  }

  public get maxEirp(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetDeviceProfile.LoRaWAN.MaxEirp'),
        outputPath: 'LoRaWAN.MaxEirp',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceProfile.LoRaWAN.MaxEirp', props);
    return resource.getResponseField('LoRaWAN.MaxEirp') as unknown as number;
  }

  public get maxDutyCycle(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetDeviceProfile.LoRaWAN.MaxDutyCycle'),
        outputPath: 'LoRaWAN.MaxDutyCycle',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceProfile.LoRaWAN.MaxDutyCycle', props);
    return resource.getResponseField('LoRaWAN.MaxDutyCycle') as unknown as number;
  }

  public get rfRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetDeviceProfile.LoRaWAN.RfRegion'),
        outputPath: 'LoRaWAN.RfRegion',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceProfile.LoRaWAN.RfRegion', props);
    return resource.getResponseField('LoRaWAN.RfRegion') as unknown as string;
  }

  public get supportsJoin(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetDeviceProfile.LoRaWAN.SupportsJoin'),
        outputPath: 'LoRaWAN.SupportsJoin',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceProfile.LoRaWAN.SupportsJoin', props);
    return resource.getResponseField('LoRaWAN.SupportsJoin') as unknown as boolean;
  }

  public get supports32BitFCnt(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetDeviceProfile.LoRaWAN.Supports32BitFCnt'),
        outputPath: 'LoRaWAN.Supports32BitFCnt',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceProfile.LoRaWAN.Supports32BitFCnt', props);
    return resource.getResponseField('LoRaWAN.Supports32BitFCnt') as unknown as boolean;
  }

}

export class IoTWirelessResponsesFetchLogLevelsByResourceTypes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get defaultLogLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLogLevelsByResourceTypes',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetLogLevelsByResourceTypes.DefaultLogLevel'),
        outputPath: 'DefaultLogLevel',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLogLevelsByResourceTypes.DefaultLogLevel', props);
    return resource.getResponseField('DefaultLogLevel') as unknown as string;
  }

  public get wirelessGatewayLogOptions(): shapes.IoTWirelessWirelessGatewayLogOption[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLogLevelsByResourceTypes',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetLogLevelsByResourceTypes.WirelessGatewayLogOptions'),
        outputPath: 'WirelessGatewayLogOptions',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLogLevelsByResourceTypes.WirelessGatewayLogOptions', props);
    return resource.getResponseField('WirelessGatewayLogOptions') as unknown as shapes.IoTWirelessWirelessGatewayLogOption[];
  }

  public get wirelessDeviceLogOptions(): shapes.IoTWirelessWirelessDeviceLogOption[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLogLevelsByResourceTypes',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetLogLevelsByResourceTypes.WirelessDeviceLogOptions'),
        outputPath: 'WirelessDeviceLogOptions',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLogLevelsByResourceTypes.WirelessDeviceLogOptions', props);
    return resource.getResponseField('WirelessDeviceLogOptions') as unknown as shapes.IoTWirelessWirelessDeviceLogOption[];
  }

}

export class IoTWirelessResponsesFetchPartnerAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessGetPartnerAccountRequest) {
  }

  public get sidewalk(): IoTWirelessResponsesFetchPartnerAccountSidewalk {
    return new IoTWirelessResponsesFetchPartnerAccountSidewalk(this.__scope, this.__resources, this.__input);
  }

  public get accountLinked(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartnerAccount',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetPartnerAccount.AccountLinked'),
        outputPath: 'AccountLinked',
        parameters: {
          PartnerAccountId: this.__input.partnerAccountId,
          PartnerType: this.__input.partnerType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartnerAccount.AccountLinked', props);
    return resource.getResponseField('AccountLinked') as unknown as boolean;
  }

}

export class IoTWirelessResponsesFetchPartnerAccountSidewalk {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessGetPartnerAccountRequest) {
  }

  public get amazonId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartnerAccount',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetPartnerAccount.Sidewalk.AmazonId'),
        outputPath: 'Sidewalk.AmazonId',
        parameters: {
          PartnerAccountId: this.__input.partnerAccountId,
          PartnerType: this.__input.partnerType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartnerAccount.Sidewalk.AmazonId', props);
    return resource.getResponseField('Sidewalk.AmazonId') as unknown as string;
  }

  public get fingerprint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartnerAccount',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetPartnerAccount.Sidewalk.Fingerprint'),
        outputPath: 'Sidewalk.Fingerprint',
        parameters: {
          PartnerAccountId: this.__input.partnerAccountId,
          PartnerType: this.__input.partnerType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartnerAccount.Sidewalk.Fingerprint', props);
    return resource.getResponseField('Sidewalk.Fingerprint') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartnerAccount',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetPartnerAccount.Sidewalk.Arn'),
        outputPath: 'Sidewalk.Arn',
        parameters: {
          PartnerAccountId: this.__input.partnerAccountId,
          PartnerType: this.__input.partnerType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartnerAccount.Sidewalk.Arn', props);
    return resource.getResponseField('Sidewalk.Arn') as unknown as string;
  }

}

export class IoTWirelessResponsesFetchResourceLogLevel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessGetResourceLogLevelRequest) {
  }

  public get logLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourceLogLevel',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetResourceLogLevel.LogLevel'),
        outputPath: 'LogLevel',
        parameters: {
          ResourceIdentifier: this.__input.resourceIdentifier,
          ResourceType: this.__input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourceLogLevel.LogLevel', props);
    return resource.getResponseField('LogLevel') as unknown as string;
  }

}

export class IoTWirelessResponsesFetchServiceEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessGetServiceEndpointRequest) {
  }

  public get serviceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceEndpoint',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetServiceEndpoint.ServiceType'),
        outputPath: 'ServiceType',
        parameters: {
          ServiceType: this.__input.serviceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceEndpoint.ServiceType', props);
    return resource.getResponseField('ServiceType') as unknown as string;
  }

  public get serviceEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceEndpoint',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetServiceEndpoint.ServiceEndpoint'),
        outputPath: 'ServiceEndpoint',
        parameters: {
          ServiceType: this.__input.serviceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceEndpoint.ServiceEndpoint', props);
    return resource.getResponseField('ServiceEndpoint') as unknown as string;
  }

  public get serverTrust(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceEndpoint',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetServiceEndpoint.ServerTrust'),
        outputPath: 'ServerTrust',
        parameters: {
          ServiceType: this.__input.serviceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceEndpoint.ServerTrust', props);
    return resource.getResponseField('ServerTrust') as unknown as string;
  }

}

export class IoTWirelessResponsesFetchServiceProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessGetServiceProfileRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetServiceProfile.Arn'),
        outputPath: 'Arn',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceProfile.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetServiceProfile.Name'),
        outputPath: 'Name',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceProfile.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetServiceProfile.Id'),
        outputPath: 'Id',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceProfile.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get loRaWan(): IoTWirelessResponsesFetchServiceProfileLoRaWan {
    return new IoTWirelessResponsesFetchServiceProfileLoRaWan(this.__scope, this.__resources, this.__input);
  }

}

export class IoTWirelessResponsesFetchServiceProfileLoRaWan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessGetServiceProfileRequest) {
  }

  public get ulRate(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetServiceProfile.LoRaWAN.UlRate'),
        outputPath: 'LoRaWAN.UlRate',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceProfile.LoRaWAN.UlRate', props);
    return resource.getResponseField('LoRaWAN.UlRate') as unknown as number;
  }

  public get ulBucketSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetServiceProfile.LoRaWAN.UlBucketSize'),
        outputPath: 'LoRaWAN.UlBucketSize',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceProfile.LoRaWAN.UlBucketSize', props);
    return resource.getResponseField('LoRaWAN.UlBucketSize') as unknown as number;
  }

  public get ulRatePolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetServiceProfile.LoRaWAN.UlRatePolicy'),
        outputPath: 'LoRaWAN.UlRatePolicy',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceProfile.LoRaWAN.UlRatePolicy', props);
    return resource.getResponseField('LoRaWAN.UlRatePolicy') as unknown as string;
  }

  public get dlRate(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetServiceProfile.LoRaWAN.DlRate'),
        outputPath: 'LoRaWAN.DlRate',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceProfile.LoRaWAN.DlRate', props);
    return resource.getResponseField('LoRaWAN.DlRate') as unknown as number;
  }

  public get dlBucketSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetServiceProfile.LoRaWAN.DlBucketSize'),
        outputPath: 'LoRaWAN.DlBucketSize',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceProfile.LoRaWAN.DlBucketSize', props);
    return resource.getResponseField('LoRaWAN.DlBucketSize') as unknown as number;
  }

  public get dlRatePolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetServiceProfile.LoRaWAN.DlRatePolicy'),
        outputPath: 'LoRaWAN.DlRatePolicy',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceProfile.LoRaWAN.DlRatePolicy', props);
    return resource.getResponseField('LoRaWAN.DlRatePolicy') as unknown as string;
  }

  public get addGwMetadata(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetServiceProfile.LoRaWAN.AddGwMetadata'),
        outputPath: 'LoRaWAN.AddGwMetadata',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceProfile.LoRaWAN.AddGwMetadata', props);
    return resource.getResponseField('LoRaWAN.AddGwMetadata') as unknown as boolean;
  }

  public get devStatusReqFreq(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetServiceProfile.LoRaWAN.DevStatusReqFreq'),
        outputPath: 'LoRaWAN.DevStatusReqFreq',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceProfile.LoRaWAN.DevStatusReqFreq', props);
    return resource.getResponseField('LoRaWAN.DevStatusReqFreq') as unknown as number;
  }

  public get reportDevStatusBattery(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetServiceProfile.LoRaWAN.ReportDevStatusBattery'),
        outputPath: 'LoRaWAN.ReportDevStatusBattery',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceProfile.LoRaWAN.ReportDevStatusBattery', props);
    return resource.getResponseField('LoRaWAN.ReportDevStatusBattery') as unknown as boolean;
  }

  public get reportDevStatusMargin(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetServiceProfile.LoRaWAN.ReportDevStatusMargin'),
        outputPath: 'LoRaWAN.ReportDevStatusMargin',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceProfile.LoRaWAN.ReportDevStatusMargin', props);
    return resource.getResponseField('LoRaWAN.ReportDevStatusMargin') as unknown as boolean;
  }

  public get drMin(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetServiceProfile.LoRaWAN.DrMin'),
        outputPath: 'LoRaWAN.DrMin',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceProfile.LoRaWAN.DrMin', props);
    return resource.getResponseField('LoRaWAN.DrMin') as unknown as number;
  }

  public get drMax(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetServiceProfile.LoRaWAN.DrMax'),
        outputPath: 'LoRaWAN.DrMax',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceProfile.LoRaWAN.DrMax', props);
    return resource.getResponseField('LoRaWAN.DrMax') as unknown as number;
  }

  public get channelMask(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetServiceProfile.LoRaWAN.ChannelMask'),
        outputPath: 'LoRaWAN.ChannelMask',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceProfile.LoRaWAN.ChannelMask', props);
    return resource.getResponseField('LoRaWAN.ChannelMask') as unknown as string;
  }

  public get prAllowed(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetServiceProfile.LoRaWAN.PrAllowed'),
        outputPath: 'LoRaWAN.PrAllowed',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceProfile.LoRaWAN.PrAllowed', props);
    return resource.getResponseField('LoRaWAN.PrAllowed') as unknown as boolean;
  }

  public get hrAllowed(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetServiceProfile.LoRaWAN.HrAllowed'),
        outputPath: 'LoRaWAN.HrAllowed',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceProfile.LoRaWAN.HrAllowed', props);
    return resource.getResponseField('LoRaWAN.HrAllowed') as unknown as boolean;
  }

  public get raAllowed(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetServiceProfile.LoRaWAN.RaAllowed'),
        outputPath: 'LoRaWAN.RaAllowed',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceProfile.LoRaWAN.RaAllowed', props);
    return resource.getResponseField('LoRaWAN.RaAllowed') as unknown as boolean;
  }

  public get nwkGeoLoc(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetServiceProfile.LoRaWAN.NwkGeoLoc'),
        outputPath: 'LoRaWAN.NwkGeoLoc',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceProfile.LoRaWAN.NwkGeoLoc', props);
    return resource.getResponseField('LoRaWAN.NwkGeoLoc') as unknown as boolean;
  }

  public get targetPer(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetServiceProfile.LoRaWAN.TargetPer'),
        outputPath: 'LoRaWAN.TargetPer',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceProfile.LoRaWAN.TargetPer', props);
    return resource.getResponseField('LoRaWAN.TargetPer') as unknown as number;
  }

  public get minGwDiversity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceProfile',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetServiceProfile.LoRaWAN.MinGwDiversity'),
        outputPath: 'LoRaWAN.MinGwDiversity',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceProfile.LoRaWAN.MinGwDiversity', props);
    return resource.getResponseField('LoRaWAN.MinGwDiversity') as unknown as number;
  }

}

export class IoTWirelessResponsesFetchWirelessDevice {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessGetWirelessDeviceRequest) {
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDevice',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDevice.Type'),
        outputPath: 'Type',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDevice.Type', props);
    return resource.getResponseField('Type') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDevice',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDevice.Name'),
        outputPath: 'Name',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDevice.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDevice',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDevice.Description'),
        outputPath: 'Description',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDevice.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get destinationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDevice',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDevice.DestinationName'),
        outputPath: 'DestinationName',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDevice.DestinationName', props);
    return resource.getResponseField('DestinationName') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDevice',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDevice.Id'),
        outputPath: 'Id',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDevice.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDevice',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDevice.Arn'),
        outputPath: 'Arn',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDevice.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get thingName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDevice',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDevice.ThingName'),
        outputPath: 'ThingName',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDevice.ThingName', props);
    return resource.getResponseField('ThingName') as unknown as string;
  }

  public get thingArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDevice',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDevice.ThingArn'),
        outputPath: 'ThingArn',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDevice.ThingArn', props);
    return resource.getResponseField('ThingArn') as unknown as string;
  }

  public get loRaWan(): IoTWirelessResponsesFetchWirelessDeviceLoRaWan {
    return new IoTWirelessResponsesFetchWirelessDeviceLoRaWan(this.__scope, this.__resources, this.__input);
  }

  public get sidewalk(): IoTWirelessResponsesFetchWirelessDeviceSidewalk {
    return new IoTWirelessResponsesFetchWirelessDeviceSidewalk(this.__scope, this.__resources, this.__input);
  }

}

export class IoTWirelessResponsesFetchWirelessDeviceLoRaWan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessGetWirelessDeviceRequest) {
  }

  public get devEui(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDevice',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDevice.LoRaWAN.DevEui'),
        outputPath: 'LoRaWAN.DevEui',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDevice.LoRaWAN.DevEui', props);
    return resource.getResponseField('LoRaWAN.DevEui') as unknown as string;
  }

  public get deviceProfileId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDevice',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDevice.LoRaWAN.DeviceProfileId'),
        outputPath: 'LoRaWAN.DeviceProfileId',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDevice.LoRaWAN.DeviceProfileId', props);
    return resource.getResponseField('LoRaWAN.DeviceProfileId') as unknown as string;
  }

  public get serviceProfileId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDevice',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDevice.LoRaWAN.ServiceProfileId'),
        outputPath: 'LoRaWAN.ServiceProfileId',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDevice.LoRaWAN.ServiceProfileId', props);
    return resource.getResponseField('LoRaWAN.ServiceProfileId') as unknown as string;
  }

  public get otaaV11(): IoTWirelessResponsesFetchWirelessDeviceLoRaWanOtaaV11 {
    return new IoTWirelessResponsesFetchWirelessDeviceLoRaWanOtaaV11(this.__scope, this.__resources, this.__input);
  }

  public get otaaV10X(): IoTWirelessResponsesFetchWirelessDeviceLoRaWanOtaaV10X {
    return new IoTWirelessResponsesFetchWirelessDeviceLoRaWanOtaaV10X(this.__scope, this.__resources, this.__input);
  }

  public get abpV11(): IoTWirelessResponsesFetchWirelessDeviceLoRaWanAbpV11 {
    return new IoTWirelessResponsesFetchWirelessDeviceLoRaWanAbpV11(this.__scope, this.__resources, this.__input);
  }

  public get abpV10X(): IoTWirelessResponsesFetchWirelessDeviceLoRaWanAbpV10X {
    return new IoTWirelessResponsesFetchWirelessDeviceLoRaWanAbpV10X(this.__scope, this.__resources, this.__input);
  }

}

export class IoTWirelessResponsesFetchWirelessDeviceLoRaWanOtaaV11 {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessGetWirelessDeviceRequest) {
  }

  public get appKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDevice',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDevice.LoRaWAN.OtaaV1_1.AppKey'),
        outputPath: 'LoRaWAN.OtaaV1_1.AppKey',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDevice.LoRaWAN.OtaaV1_1.AppKey', props);
    return resource.getResponseField('LoRaWAN.OtaaV1_1.AppKey') as unknown as string;
  }

  public get nwkKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDevice',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDevice.LoRaWAN.OtaaV1_1.NwkKey'),
        outputPath: 'LoRaWAN.OtaaV1_1.NwkKey',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDevice.LoRaWAN.OtaaV1_1.NwkKey', props);
    return resource.getResponseField('LoRaWAN.OtaaV1_1.NwkKey') as unknown as string;
  }

  public get joinEui(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDevice',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDevice.LoRaWAN.OtaaV1_1.JoinEui'),
        outputPath: 'LoRaWAN.OtaaV1_1.JoinEui',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDevice.LoRaWAN.OtaaV1_1.JoinEui', props);
    return resource.getResponseField('LoRaWAN.OtaaV1_1.JoinEui') as unknown as string;
  }

}

export class IoTWirelessResponsesFetchWirelessDeviceLoRaWanOtaaV10X {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessGetWirelessDeviceRequest) {
  }

  public get appKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDevice',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDevice.LoRaWAN.OtaaV1_0_x.AppKey'),
        outputPath: 'LoRaWAN.OtaaV1_0_x.AppKey',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDevice.LoRaWAN.OtaaV1_0_x.AppKey', props);
    return resource.getResponseField('LoRaWAN.OtaaV1_0_x.AppKey') as unknown as string;
  }

  public get appEui(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDevice',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDevice.LoRaWAN.OtaaV1_0_x.AppEui'),
        outputPath: 'LoRaWAN.OtaaV1_0_x.AppEui',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDevice.LoRaWAN.OtaaV1_0_x.AppEui', props);
    return resource.getResponseField('LoRaWAN.OtaaV1_0_x.AppEui') as unknown as string;
  }

}

export class IoTWirelessResponsesFetchWirelessDeviceLoRaWanAbpV11 {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessGetWirelessDeviceRequest) {
  }

  public get devAddr(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDevice',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDevice.LoRaWAN.AbpV1_1.DevAddr'),
        outputPath: 'LoRaWAN.AbpV1_1.DevAddr',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDevice.LoRaWAN.AbpV1_1.DevAddr', props);
    return resource.getResponseField('LoRaWAN.AbpV1_1.DevAddr') as unknown as string;
  }

  public get sessionKeys(): IoTWirelessResponsesFetchWirelessDeviceLoRaWanAbpV11SessionKeys {
    return new IoTWirelessResponsesFetchWirelessDeviceLoRaWanAbpV11SessionKeys(this.__scope, this.__resources, this.__input);
  }

}

export class IoTWirelessResponsesFetchWirelessDeviceLoRaWanAbpV11SessionKeys {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessGetWirelessDeviceRequest) {
  }

  public get fNwkSIntKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDevice',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDevice.LoRaWAN.AbpV1_1.SessionKeys.FNwkSIntKey'),
        outputPath: 'LoRaWAN.AbpV1_1.SessionKeys.FNwkSIntKey',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDevice.LoRaWAN.AbpV1_1.SessionKeys.FNwkSIntKey', props);
    return resource.getResponseField('LoRaWAN.AbpV1_1.SessionKeys.FNwkSIntKey') as unknown as string;
  }

  public get sNwkSIntKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDevice',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDevice.LoRaWAN.AbpV1_1.SessionKeys.SNwkSIntKey'),
        outputPath: 'LoRaWAN.AbpV1_1.SessionKeys.SNwkSIntKey',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDevice.LoRaWAN.AbpV1_1.SessionKeys.SNwkSIntKey', props);
    return resource.getResponseField('LoRaWAN.AbpV1_1.SessionKeys.SNwkSIntKey') as unknown as string;
  }

  public get nwkSEncKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDevice',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDevice.LoRaWAN.AbpV1_1.SessionKeys.NwkSEncKey'),
        outputPath: 'LoRaWAN.AbpV1_1.SessionKeys.NwkSEncKey',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDevice.LoRaWAN.AbpV1_1.SessionKeys.NwkSEncKey', props);
    return resource.getResponseField('LoRaWAN.AbpV1_1.SessionKeys.NwkSEncKey') as unknown as string;
  }

  public get appSKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDevice',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDevice.LoRaWAN.AbpV1_1.SessionKeys.AppSKey'),
        outputPath: 'LoRaWAN.AbpV1_1.SessionKeys.AppSKey',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDevice.LoRaWAN.AbpV1_1.SessionKeys.AppSKey', props);
    return resource.getResponseField('LoRaWAN.AbpV1_1.SessionKeys.AppSKey') as unknown as string;
  }

}

export class IoTWirelessResponsesFetchWirelessDeviceLoRaWanAbpV10X {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessGetWirelessDeviceRequest) {
  }

  public get devAddr(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDevice',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDevice.LoRaWAN.AbpV1_0_x.DevAddr'),
        outputPath: 'LoRaWAN.AbpV1_0_x.DevAddr',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDevice.LoRaWAN.AbpV1_0_x.DevAddr', props);
    return resource.getResponseField('LoRaWAN.AbpV1_0_x.DevAddr') as unknown as string;
  }

  public get sessionKeys(): IoTWirelessResponsesFetchWirelessDeviceLoRaWanAbpV10XSessionKeys {
    return new IoTWirelessResponsesFetchWirelessDeviceLoRaWanAbpV10XSessionKeys(this.__scope, this.__resources, this.__input);
  }

}

export class IoTWirelessResponsesFetchWirelessDeviceLoRaWanAbpV10XSessionKeys {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessGetWirelessDeviceRequest) {
  }

  public get nwkSKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDevice',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDevice.LoRaWAN.AbpV1_0_x.SessionKeys.NwkSKey'),
        outputPath: 'LoRaWAN.AbpV1_0_x.SessionKeys.NwkSKey',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDevice.LoRaWAN.AbpV1_0_x.SessionKeys.NwkSKey', props);
    return resource.getResponseField('LoRaWAN.AbpV1_0_x.SessionKeys.NwkSKey') as unknown as string;
  }

  public get appSKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDevice',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDevice.LoRaWAN.AbpV1_0_x.SessionKeys.AppSKey'),
        outputPath: 'LoRaWAN.AbpV1_0_x.SessionKeys.AppSKey',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDevice.LoRaWAN.AbpV1_0_x.SessionKeys.AppSKey', props);
    return resource.getResponseField('LoRaWAN.AbpV1_0_x.SessionKeys.AppSKey') as unknown as string;
  }

}

export class IoTWirelessResponsesFetchWirelessDeviceSidewalk {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessGetWirelessDeviceRequest) {
  }

  public get amazonId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDevice',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDevice.Sidewalk.AmazonId'),
        outputPath: 'Sidewalk.AmazonId',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDevice.Sidewalk.AmazonId', props);
    return resource.getResponseField('Sidewalk.AmazonId') as unknown as string;
  }

  public get sidewalkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDevice',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDevice.Sidewalk.SidewalkId'),
        outputPath: 'Sidewalk.SidewalkId',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDevice.Sidewalk.SidewalkId', props);
    return resource.getResponseField('Sidewalk.SidewalkId') as unknown as string;
  }

  public get sidewalkManufacturingSn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDevice',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDevice.Sidewalk.SidewalkManufacturingSn'),
        outputPath: 'Sidewalk.SidewalkManufacturingSn',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDevice.Sidewalk.SidewalkManufacturingSn', props);
    return resource.getResponseField('Sidewalk.SidewalkManufacturingSn') as unknown as string;
  }

  public get deviceCertificates(): shapes.IoTWirelessCertificateList[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDevice',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDevice.Sidewalk.DeviceCertificates'),
        outputPath: 'Sidewalk.DeviceCertificates',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDevice.Sidewalk.DeviceCertificates', props);
    return resource.getResponseField('Sidewalk.DeviceCertificates') as unknown as shapes.IoTWirelessCertificateList[];
  }

}

export class IoTWirelessResponsesFetchWirelessDeviceStatistics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessGetWirelessDeviceStatisticsRequest) {
  }

  public get wirelessDeviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDeviceStatistics',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDeviceStatistics.WirelessDeviceId'),
        outputPath: 'WirelessDeviceId',
        parameters: {
          WirelessDeviceId: this.__input.wirelessDeviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDeviceStatistics.WirelessDeviceId', props);
    return resource.getResponseField('WirelessDeviceId') as unknown as string;
  }

  public get lastUplinkReceivedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDeviceStatistics',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDeviceStatistics.LastUplinkReceivedAt'),
        outputPath: 'LastUplinkReceivedAt',
        parameters: {
          WirelessDeviceId: this.__input.wirelessDeviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDeviceStatistics.LastUplinkReceivedAt', props);
    return resource.getResponseField('LastUplinkReceivedAt') as unknown as string;
  }

  public get loRaWan(): IoTWirelessResponsesFetchWirelessDeviceStatisticsLoRaWan {
    return new IoTWirelessResponsesFetchWirelessDeviceStatisticsLoRaWan(this.__scope, this.__resources, this.__input);
  }

  public get sidewalk(): IoTWirelessResponsesFetchWirelessDeviceStatisticsSidewalk {
    return new IoTWirelessResponsesFetchWirelessDeviceStatisticsSidewalk(this.__scope, this.__resources, this.__input);
  }

}

export class IoTWirelessResponsesFetchWirelessDeviceStatisticsLoRaWan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessGetWirelessDeviceStatisticsRequest) {
  }

  public get devEui(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDeviceStatistics',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDeviceStatistics.LoRaWAN.DevEui'),
        outputPath: 'LoRaWAN.DevEui',
        parameters: {
          WirelessDeviceId: this.__input.wirelessDeviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDeviceStatistics.LoRaWAN.DevEui', props);
    return resource.getResponseField('LoRaWAN.DevEui') as unknown as string;
  }

  public get fPort(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDeviceStatistics',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDeviceStatistics.LoRaWAN.FPort'),
        outputPath: 'LoRaWAN.FPort',
        parameters: {
          WirelessDeviceId: this.__input.wirelessDeviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDeviceStatistics.LoRaWAN.FPort', props);
    return resource.getResponseField('LoRaWAN.FPort') as unknown as number;
  }

  public get dataRate(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDeviceStatistics',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDeviceStatistics.LoRaWAN.DataRate'),
        outputPath: 'LoRaWAN.DataRate',
        parameters: {
          WirelessDeviceId: this.__input.wirelessDeviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDeviceStatistics.LoRaWAN.DataRate', props);
    return resource.getResponseField('LoRaWAN.DataRate') as unknown as number;
  }

  public get frequency(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDeviceStatistics',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDeviceStatistics.LoRaWAN.Frequency'),
        outputPath: 'LoRaWAN.Frequency',
        parameters: {
          WirelessDeviceId: this.__input.wirelessDeviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDeviceStatistics.LoRaWAN.Frequency', props);
    return resource.getResponseField('LoRaWAN.Frequency') as unknown as number;
  }

  public get timestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDeviceStatistics',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDeviceStatistics.LoRaWAN.Timestamp'),
        outputPath: 'LoRaWAN.Timestamp',
        parameters: {
          WirelessDeviceId: this.__input.wirelessDeviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDeviceStatistics.LoRaWAN.Timestamp', props);
    return resource.getResponseField('LoRaWAN.Timestamp') as unknown as string;
  }

  public get gateways(): shapes.IoTWirelessLoRaWanGatewayMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDeviceStatistics',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDeviceStatistics.LoRaWAN.Gateways'),
        outputPath: 'LoRaWAN.Gateways',
        parameters: {
          WirelessDeviceId: this.__input.wirelessDeviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDeviceStatistics.LoRaWAN.Gateways', props);
    return resource.getResponseField('LoRaWAN.Gateways') as unknown as shapes.IoTWirelessLoRaWanGatewayMetadata[];
  }

}

export class IoTWirelessResponsesFetchWirelessDeviceStatisticsSidewalk {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessGetWirelessDeviceStatisticsRequest) {
  }

  public get rssi(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDeviceStatistics',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDeviceStatistics.Sidewalk.Rssi'),
        outputPath: 'Sidewalk.Rssi',
        parameters: {
          WirelessDeviceId: this.__input.wirelessDeviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDeviceStatistics.Sidewalk.Rssi', props);
    return resource.getResponseField('Sidewalk.Rssi') as unknown as number;
  }

  public get batteryLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDeviceStatistics',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDeviceStatistics.Sidewalk.BatteryLevel'),
        outputPath: 'Sidewalk.BatteryLevel',
        parameters: {
          WirelessDeviceId: this.__input.wirelessDeviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDeviceStatistics.Sidewalk.BatteryLevel', props);
    return resource.getResponseField('Sidewalk.BatteryLevel') as unknown as string;
  }

  public get event(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDeviceStatistics',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDeviceStatistics.Sidewalk.Event'),
        outputPath: 'Sidewalk.Event',
        parameters: {
          WirelessDeviceId: this.__input.wirelessDeviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDeviceStatistics.Sidewalk.Event', props);
    return resource.getResponseField('Sidewalk.Event') as unknown as string;
  }

  public get deviceState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessDeviceStatistics',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessDeviceStatistics.Sidewalk.DeviceState'),
        outputPath: 'Sidewalk.DeviceState',
        parameters: {
          WirelessDeviceId: this.__input.wirelessDeviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessDeviceStatistics.Sidewalk.DeviceState', props);
    return resource.getResponseField('Sidewalk.DeviceState') as unknown as string;
  }

}

export class IoTWirelessResponsesFetchWirelessGateway {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessGetWirelessGatewayRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGateway',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGateway.Name'),
        outputPath: 'Name',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGateway.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGateway',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGateway.Id'),
        outputPath: 'Id',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGateway.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGateway',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGateway.Description'),
        outputPath: 'Description',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGateway.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get loRaWan(): IoTWirelessResponsesFetchWirelessGatewayLoRaWan {
    return new IoTWirelessResponsesFetchWirelessGatewayLoRaWan(this.__scope, this.__resources, this.__input);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGateway',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGateway.Arn'),
        outputPath: 'Arn',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGateway.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get thingName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGateway',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGateway.ThingName'),
        outputPath: 'ThingName',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGateway.ThingName', props);
    return resource.getResponseField('ThingName') as unknown as string;
  }

  public get thingArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGateway',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGateway.ThingArn'),
        outputPath: 'ThingArn',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGateway.ThingArn', props);
    return resource.getResponseField('ThingArn') as unknown as string;
  }

}

export class IoTWirelessResponsesFetchWirelessGatewayLoRaWan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessGetWirelessGatewayRequest) {
  }

  public get gatewayEui(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGateway',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGateway.LoRaWAN.GatewayEui'),
        outputPath: 'LoRaWAN.GatewayEui',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGateway.LoRaWAN.GatewayEui', props);
    return resource.getResponseField('LoRaWAN.GatewayEui') as unknown as string;
  }

  public get rfRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGateway',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGateway.LoRaWAN.RfRegion'),
        outputPath: 'LoRaWAN.RfRegion',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGateway.LoRaWAN.RfRegion', props);
    return resource.getResponseField('LoRaWAN.RfRegion') as unknown as string;
  }

  public get joinEuiFilters(): string[][] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGateway',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGateway.LoRaWAN.JoinEuiFilters'),
        outputPath: 'LoRaWAN.JoinEuiFilters',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGateway.LoRaWAN.JoinEuiFilters', props);
    return resource.getResponseField('LoRaWAN.JoinEuiFilters') as unknown as string[][];
  }

  public get netIdFilters(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGateway',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGateway.LoRaWAN.NetIdFilters'),
        outputPath: 'LoRaWAN.NetIdFilters',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGateway.LoRaWAN.NetIdFilters', props);
    return resource.getResponseField('LoRaWAN.NetIdFilters') as unknown as string[];
  }

  public get subBands(): number[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGateway',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGateway.LoRaWAN.SubBands'),
        outputPath: 'LoRaWAN.SubBands',
        parameters: {
          Identifier: this.__input.identifier,
          IdentifierType: this.__input.identifierType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGateway.LoRaWAN.SubBands', props);
    return resource.getResponseField('LoRaWAN.SubBands') as unknown as number[];
  }

}

export class IoTWirelessResponsesFetchWirelessGatewayCertificate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessGetWirelessGatewayCertificateRequest) {
  }

  public get iotCertificateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGatewayCertificate',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGatewayCertificate.IotCertificateId'),
        outputPath: 'IotCertificateId',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGatewayCertificate.IotCertificateId', props);
    return resource.getResponseField('IotCertificateId') as unknown as string;
  }

  public get loRaWanNetworkServerCertificateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGatewayCertificate',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGatewayCertificate.LoRaWANNetworkServerCertificateId'),
        outputPath: 'LoRaWANNetworkServerCertificateId',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGatewayCertificate.LoRaWANNetworkServerCertificateId', props);
    return resource.getResponseField('LoRaWANNetworkServerCertificateId') as unknown as string;
  }

}

export class IoTWirelessResponsesFetchWirelessGatewayFirmwareInformation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessGetWirelessGatewayFirmwareInformationRequest) {
  }

  public get loRaWan(): IoTWirelessResponsesFetchWirelessGatewayFirmwareInformationLoRaWan {
    return new IoTWirelessResponsesFetchWirelessGatewayFirmwareInformationLoRaWan(this.__scope, this.__resources, this.__input);
  }

}

export class IoTWirelessResponsesFetchWirelessGatewayFirmwareInformationLoRaWan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessGetWirelessGatewayFirmwareInformationRequest) {
  }

  public get currentVersion(): IoTWirelessResponsesFetchWirelessGatewayFirmwareInformationLoRaWanCurrentVersion {
    return new IoTWirelessResponsesFetchWirelessGatewayFirmwareInformationLoRaWanCurrentVersion(this.__scope, this.__resources, this.__input);
  }

}

export class IoTWirelessResponsesFetchWirelessGatewayFirmwareInformationLoRaWanCurrentVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessGetWirelessGatewayFirmwareInformationRequest) {
  }

  public get packageVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGatewayFirmwareInformation',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGatewayFirmwareInformation.LoRaWAN.CurrentVersion.PackageVersion'),
        outputPath: 'LoRaWAN.CurrentVersion.PackageVersion',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGatewayFirmwareInformation.LoRaWAN.CurrentVersion.PackageVersion', props);
    return resource.getResponseField('LoRaWAN.CurrentVersion.PackageVersion') as unknown as string;
  }

  public get model(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGatewayFirmwareInformation',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGatewayFirmwareInformation.LoRaWAN.CurrentVersion.Model'),
        outputPath: 'LoRaWAN.CurrentVersion.Model',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGatewayFirmwareInformation.LoRaWAN.CurrentVersion.Model', props);
    return resource.getResponseField('LoRaWAN.CurrentVersion.Model') as unknown as string;
  }

  public get station(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGatewayFirmwareInformation',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGatewayFirmwareInformation.LoRaWAN.CurrentVersion.Station'),
        outputPath: 'LoRaWAN.CurrentVersion.Station',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGatewayFirmwareInformation.LoRaWAN.CurrentVersion.Station', props);
    return resource.getResponseField('LoRaWAN.CurrentVersion.Station') as unknown as string;
  }

}

export class IoTWirelessResponsesFetchWirelessGatewayStatistics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessGetWirelessGatewayStatisticsRequest) {
  }

  public get wirelessGatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGatewayStatistics',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGatewayStatistics.WirelessGatewayId'),
        outputPath: 'WirelessGatewayId',
        parameters: {
          WirelessGatewayId: this.__input.wirelessGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGatewayStatistics.WirelessGatewayId', props);
    return resource.getResponseField('WirelessGatewayId') as unknown as string;
  }

  public get lastUplinkReceivedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGatewayStatistics',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGatewayStatistics.LastUplinkReceivedAt'),
        outputPath: 'LastUplinkReceivedAt',
        parameters: {
          WirelessGatewayId: this.__input.wirelessGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGatewayStatistics.LastUplinkReceivedAt', props);
    return resource.getResponseField('LastUplinkReceivedAt') as unknown as string;
  }

  public get connectionStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGatewayStatistics',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGatewayStatistics.ConnectionStatus'),
        outputPath: 'ConnectionStatus',
        parameters: {
          WirelessGatewayId: this.__input.wirelessGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGatewayStatistics.ConnectionStatus', props);
    return resource.getResponseField('ConnectionStatus') as unknown as string;
  }

}

export class IoTWirelessResponsesFetchWirelessGatewayTask {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessGetWirelessGatewayTaskRequest) {
  }

  public get wirelessGatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGatewayTask',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGatewayTask.WirelessGatewayId'),
        outputPath: 'WirelessGatewayId',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGatewayTask.WirelessGatewayId', props);
    return resource.getResponseField('WirelessGatewayId') as unknown as string;
  }

  public get wirelessGatewayTaskDefinitionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGatewayTask',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGatewayTask.WirelessGatewayTaskDefinitionId'),
        outputPath: 'WirelessGatewayTaskDefinitionId',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGatewayTask.WirelessGatewayTaskDefinitionId', props);
    return resource.getResponseField('WirelessGatewayTaskDefinitionId') as unknown as string;
  }

  public get lastUplinkReceivedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGatewayTask',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGatewayTask.LastUplinkReceivedAt'),
        outputPath: 'LastUplinkReceivedAt',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGatewayTask.LastUplinkReceivedAt', props);
    return resource.getResponseField('LastUplinkReceivedAt') as unknown as string;
  }

  public get taskCreatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGatewayTask',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGatewayTask.TaskCreatedAt'),
        outputPath: 'TaskCreatedAt',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGatewayTask.TaskCreatedAt', props);
    return resource.getResponseField('TaskCreatedAt') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGatewayTask',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGatewayTask.Status'),
        outputPath: 'Status',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGatewayTask.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class IoTWirelessResponsesFetchWirelessGatewayTaskDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessGetWirelessGatewayTaskDefinitionRequest) {
  }

  public get autoCreateTasks(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGatewayTaskDefinition',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGatewayTaskDefinition.AutoCreateTasks'),
        outputPath: 'AutoCreateTasks',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGatewayTaskDefinition.AutoCreateTasks', props);
    return resource.getResponseField('AutoCreateTasks') as unknown as boolean;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGatewayTaskDefinition',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGatewayTaskDefinition.Name'),
        outputPath: 'Name',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGatewayTaskDefinition.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get update(): IoTWirelessResponsesFetchWirelessGatewayTaskDefinitionUpdate {
    return new IoTWirelessResponsesFetchWirelessGatewayTaskDefinitionUpdate(this.__scope, this.__resources, this.__input);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGatewayTaskDefinition',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGatewayTaskDefinition.Arn'),
        outputPath: 'Arn',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGatewayTaskDefinition.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

}

export class IoTWirelessResponsesFetchWirelessGatewayTaskDefinitionUpdate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessGetWirelessGatewayTaskDefinitionRequest) {
  }

  public get updateDataSource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGatewayTaskDefinition',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGatewayTaskDefinition.Update.UpdateDataSource'),
        outputPath: 'Update.UpdateDataSource',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGatewayTaskDefinition.Update.UpdateDataSource', props);
    return resource.getResponseField('Update.UpdateDataSource') as unknown as string;
  }

  public get updateDataRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGatewayTaskDefinition',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGatewayTaskDefinition.Update.UpdateDataRole'),
        outputPath: 'Update.UpdateDataRole',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGatewayTaskDefinition.Update.UpdateDataRole', props);
    return resource.getResponseField('Update.UpdateDataRole') as unknown as string;
  }

  public get loRaWan(): IoTWirelessResponsesFetchWirelessGatewayTaskDefinitionUpdateLoRaWan {
    return new IoTWirelessResponsesFetchWirelessGatewayTaskDefinitionUpdateLoRaWan(this.__scope, this.__resources, this.__input);
  }

}

export class IoTWirelessResponsesFetchWirelessGatewayTaskDefinitionUpdateLoRaWan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessGetWirelessGatewayTaskDefinitionRequest) {
  }

  public get updateSignature(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGatewayTaskDefinition',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGatewayTaskDefinition.Update.LoRaWAN.UpdateSignature'),
        outputPath: 'Update.LoRaWAN.UpdateSignature',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGatewayTaskDefinition.Update.LoRaWAN.UpdateSignature', props);
    return resource.getResponseField('Update.LoRaWAN.UpdateSignature') as unknown as string;
  }

  public get sigKeyCrc(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGatewayTaskDefinition',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGatewayTaskDefinition.Update.LoRaWAN.SigKeyCrc'),
        outputPath: 'Update.LoRaWAN.SigKeyCrc',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGatewayTaskDefinition.Update.LoRaWAN.SigKeyCrc', props);
    return resource.getResponseField('Update.LoRaWAN.SigKeyCrc') as unknown as number;
  }

  public get currentVersion(): IoTWirelessResponsesFetchWirelessGatewayTaskDefinitionUpdateLoRaWanCurrentVersion {
    return new IoTWirelessResponsesFetchWirelessGatewayTaskDefinitionUpdateLoRaWanCurrentVersion(this.__scope, this.__resources, this.__input);
  }

  public get updateVersion(): IoTWirelessResponsesFetchWirelessGatewayTaskDefinitionUpdateLoRaWanUpdateVersion {
    return new IoTWirelessResponsesFetchWirelessGatewayTaskDefinitionUpdateLoRaWanUpdateVersion(this.__scope, this.__resources, this.__input);
  }

}

export class IoTWirelessResponsesFetchWirelessGatewayTaskDefinitionUpdateLoRaWanCurrentVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessGetWirelessGatewayTaskDefinitionRequest) {
  }

  public get packageVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGatewayTaskDefinition',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGatewayTaskDefinition.Update.LoRaWAN.CurrentVersion.PackageVersion'),
        outputPath: 'Update.LoRaWAN.CurrentVersion.PackageVersion',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGatewayTaskDefinition.Update.LoRaWAN.CurrentVersion.PackageVersion', props);
    return resource.getResponseField('Update.LoRaWAN.CurrentVersion.PackageVersion') as unknown as string;
  }

  public get model(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGatewayTaskDefinition',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGatewayTaskDefinition.Update.LoRaWAN.CurrentVersion.Model'),
        outputPath: 'Update.LoRaWAN.CurrentVersion.Model',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGatewayTaskDefinition.Update.LoRaWAN.CurrentVersion.Model', props);
    return resource.getResponseField('Update.LoRaWAN.CurrentVersion.Model') as unknown as string;
  }

  public get station(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGatewayTaskDefinition',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGatewayTaskDefinition.Update.LoRaWAN.CurrentVersion.Station'),
        outputPath: 'Update.LoRaWAN.CurrentVersion.Station',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGatewayTaskDefinition.Update.LoRaWAN.CurrentVersion.Station', props);
    return resource.getResponseField('Update.LoRaWAN.CurrentVersion.Station') as unknown as string;
  }

}

export class IoTWirelessResponsesFetchWirelessGatewayTaskDefinitionUpdateLoRaWanUpdateVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessGetWirelessGatewayTaskDefinitionRequest) {
  }

  public get packageVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGatewayTaskDefinition',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGatewayTaskDefinition.Update.LoRaWAN.UpdateVersion.PackageVersion'),
        outputPath: 'Update.LoRaWAN.UpdateVersion.PackageVersion',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGatewayTaskDefinition.Update.LoRaWAN.UpdateVersion.PackageVersion', props);
    return resource.getResponseField('Update.LoRaWAN.UpdateVersion.PackageVersion') as unknown as string;
  }

  public get model(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGatewayTaskDefinition',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGatewayTaskDefinition.Update.LoRaWAN.UpdateVersion.Model'),
        outputPath: 'Update.LoRaWAN.UpdateVersion.Model',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGatewayTaskDefinition.Update.LoRaWAN.UpdateVersion.Model', props);
    return resource.getResponseField('Update.LoRaWAN.UpdateVersion.Model') as unknown as string;
  }

  public get station(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWirelessGatewayTaskDefinition',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.GetWirelessGatewayTaskDefinition.Update.LoRaWAN.UpdateVersion.Station'),
        outputPath: 'Update.LoRaWAN.UpdateVersion.Station',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWirelessGatewayTaskDefinition.Update.LoRaWAN.UpdateVersion.Station', props);
    return resource.getResponseField('Update.LoRaWAN.UpdateVersion.Station') as unknown as string;
  }

}

export class IoTWirelessResponsesListDestinations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessListDestinationsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDestinations',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.ListDestinations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDestinations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get destinationList(): shapes.IoTWirelessDestinations[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDestinations',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.ListDestinations.DestinationList'),
        outputPath: 'DestinationList',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDestinations.DestinationList', props);
    return resource.getResponseField('DestinationList') as unknown as shapes.IoTWirelessDestinations[];
  }

}

export class IoTWirelessResponsesListDeviceProfiles {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessListDeviceProfilesRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeviceProfiles',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.ListDeviceProfiles.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeviceProfiles.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get deviceProfileList(): shapes.IoTWirelessDeviceProfile[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeviceProfiles',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.ListDeviceProfiles.DeviceProfileList'),
        outputPath: 'DeviceProfileList',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeviceProfiles.DeviceProfileList', props);
    return resource.getResponseField('DeviceProfileList') as unknown as shapes.IoTWirelessDeviceProfile[];
  }

}

export class IoTWirelessResponsesListPartnerAccounts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessListPartnerAccountsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPartnerAccounts',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.ListPartnerAccounts.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPartnerAccounts.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get sidewalk(): shapes.IoTWirelessSidewalkAccountInfoWithFingerprint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPartnerAccounts',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.ListPartnerAccounts.Sidewalk'),
        outputPath: 'Sidewalk',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPartnerAccounts.Sidewalk', props);
    return resource.getResponseField('Sidewalk') as unknown as shapes.IoTWirelessSidewalkAccountInfoWithFingerprint[];
  }

}

export class IoTWirelessResponsesListServiceProfiles {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessListServiceProfilesRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServiceProfiles',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.ListServiceProfiles.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServiceProfiles.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get serviceProfileList(): shapes.IoTWirelessServiceProfile[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServiceProfiles',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.ListServiceProfiles.ServiceProfileList'),
        outputPath: 'ServiceProfileList',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServiceProfiles.ServiceProfileList', props);
    return resource.getResponseField('ServiceProfileList') as unknown as shapes.IoTWirelessServiceProfile[];
  }

}

export class IoTWirelessResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessListTagsForResourceRequest) {
  }

  public get tags(): shapes.IoTWirelessTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.IoTWirelessTag[];
  }

}

export class IoTWirelessResponsesListWirelessDevices {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessListWirelessDevicesRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWirelessDevices',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.ListWirelessDevices.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          DestinationName: this.__input.destinationName,
          DeviceProfileId: this.__input.deviceProfileId,
          ServiceProfileId: this.__input.serviceProfileId,
          WirelessDeviceType: this.__input.wirelessDeviceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWirelessDevices.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get wirelessDeviceList(): shapes.IoTWirelessWirelessDeviceStatistics[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWirelessDevices',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.ListWirelessDevices.WirelessDeviceList'),
        outputPath: 'WirelessDeviceList',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          DestinationName: this.__input.destinationName,
          DeviceProfileId: this.__input.deviceProfileId,
          ServiceProfileId: this.__input.serviceProfileId,
          WirelessDeviceType: this.__input.wirelessDeviceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWirelessDevices.WirelessDeviceList', props);
    return resource.getResponseField('WirelessDeviceList') as unknown as shapes.IoTWirelessWirelessDeviceStatistics[];
  }

}

export class IoTWirelessResponsesListWirelessGatewayTaskDefinitions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessListWirelessGatewayTaskDefinitionsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWirelessGatewayTaskDefinitions',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.ListWirelessGatewayTaskDefinitions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          TaskDefinitionType: this.__input.taskDefinitionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWirelessGatewayTaskDefinitions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get taskDefinitions(): shapes.IoTWirelessUpdateWirelessGatewayTaskEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWirelessGatewayTaskDefinitions',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.ListWirelessGatewayTaskDefinitions.TaskDefinitions'),
        outputPath: 'TaskDefinitions',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          TaskDefinitionType: this.__input.taskDefinitionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWirelessGatewayTaskDefinitions.TaskDefinitions', props);
    return resource.getResponseField('TaskDefinitions') as unknown as shapes.IoTWirelessUpdateWirelessGatewayTaskEntry[];
  }

}

export class IoTWirelessResponsesListWirelessGateways {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessListWirelessGatewaysRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWirelessGateways',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.ListWirelessGateways.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWirelessGateways.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get wirelessGatewayList(): shapes.IoTWirelessWirelessGatewayStatistics[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWirelessGateways',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.ListWirelessGateways.WirelessGatewayList'),
        outputPath: 'WirelessGatewayList',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWirelessGateways.WirelessGatewayList', props);
    return resource.getResponseField('WirelessGatewayList') as unknown as shapes.IoTWirelessWirelessGatewayStatistics[];
  }

}

export class IoTWirelessResponsesSendDataToWirelessDevice {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessSendDataToWirelessDeviceRequest) {
  }

  public get messageId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendDataToWirelessDevice',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.SendDataToWirelessDevice.MessageId'),
        outputPath: 'MessageId',
        parameters: {
          Id: this.__input.id,
          TransmitMode: this.__input.transmitMode,
          PayloadData: this.__input.payloadData,
          WirelessMetadata: {
            LoRaWAN: {
              FPort: this.__input.wirelessMetadata?.loRaWan?.fPort,
            },
            Sidewalk: {
              Seq: this.__input.wirelessMetadata?.sidewalk?.seq,
              MessageType: this.__input.wirelessMetadata?.sidewalk?.messageType,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendDataToWirelessDevice.MessageId', props);
    return resource.getResponseField('MessageId') as unknown as string;
  }

}

export class IoTWirelessResponsesTestWirelessDevice {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTWirelessTestWirelessDeviceRequest) {
  }

  public get result(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testWirelessDevice',
        service: 'IoTWireless',
        physicalResourceId: cr.PhysicalResourceId.of('IoTWireless.TestWirelessDevice.Result'),
        outputPath: 'Result',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestWirelessDevice.Result', props);
    return resource.getResponseField('Result') as unknown as string;
  }

}

