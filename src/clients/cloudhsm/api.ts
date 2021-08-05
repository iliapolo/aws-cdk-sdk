import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class CloudHsmClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addTagsToResource(input: shapes.CloudHsmAddTagsToResourceRequest): CloudHSMResponsesAddTagsToResource {
    return new CloudHSMResponsesAddTagsToResource(this, this.__resources, input);
  }

  public createHapg(input: shapes.CloudHsmCreateHapgRequest): CloudHSMResponsesCreateHapg {
    return new CloudHSMResponsesCreateHapg(this, this.__resources, input);
  }

  public createHsm(input: shapes.CloudHsmCreateHsmRequest): CloudHSMResponsesCreateHsm {
    return new CloudHSMResponsesCreateHsm(this, this.__resources, input);
  }

  public createLunaClient(input: shapes.CloudHsmCreateLunaClientRequest): CloudHSMResponsesCreateLunaClient {
    return new CloudHSMResponsesCreateLunaClient(this, this.__resources, input);
  }

  public deleteHapg(input: shapes.CloudHsmDeleteHapgRequest): CloudHSMResponsesDeleteHapg {
    return new CloudHSMResponsesDeleteHapg(this, this.__resources, input);
  }

  public deleteHsm(input: shapes.CloudHsmDeleteHsmRequest): CloudHSMResponsesDeleteHsm {
    return new CloudHSMResponsesDeleteHsm(this, this.__resources, input);
  }

  public deleteLunaClient(input: shapes.CloudHsmDeleteLunaClientRequest): CloudHSMResponsesDeleteLunaClient {
    return new CloudHSMResponsesDeleteLunaClient(this, this.__resources, input);
  }

  public describeHapg(input: shapes.CloudHsmDescribeHapgRequest): CloudHSMResponsesDescribeHapg {
    return new CloudHSMResponsesDescribeHapg(this, this.__resources, input);
  }

  public describeHsm(input: shapes.CloudHsmDescribeHsmRequest): CloudHSMResponsesDescribeHsm {
    return new CloudHSMResponsesDescribeHsm(this, this.__resources, input);
  }

  public describeLunaClient(input: shapes.CloudHsmDescribeLunaClientRequest): CloudHSMResponsesDescribeLunaClient {
    return new CloudHSMResponsesDescribeLunaClient(this, this.__resources, input);
  }

  public fetchConfig(input: shapes.CloudHsmGetConfigRequest): CloudHSMResponsesFetchConfig {
    return new CloudHSMResponsesFetchConfig(this, this.__resources, input);
  }

  public listAvailableZones(): CloudHSMResponsesListAvailableZones {
    return new CloudHSMResponsesListAvailableZones(this, this.__resources);
  }

  public listHapgs(input: shapes.CloudHsmListHapgsRequest): CloudHSMResponsesListHapgs {
    return new CloudHSMResponsesListHapgs(this, this.__resources, input);
  }

  public listHsms(input: shapes.CloudHsmListHsmsRequest): CloudHSMResponsesListHsms {
    return new CloudHSMResponsesListHsms(this, this.__resources, input);
  }

  public listLunaClients(input: shapes.CloudHsmListLunaClientsRequest): CloudHSMResponsesListLunaClients {
    return new CloudHSMResponsesListLunaClients(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.CloudHsmListTagsForResourceRequest): CloudHSMResponsesListTagsForResource {
    return new CloudHSMResponsesListTagsForResource(this, this.__resources, input);
  }

  public modifyHapg(input: shapes.CloudHsmModifyHapgRequest): CloudHSMResponsesModifyHapg {
    return new CloudHSMResponsesModifyHapg(this, this.__resources, input);
  }

  public modifyHsm(input: shapes.CloudHsmModifyHsmRequest): CloudHSMResponsesModifyHsm {
    return new CloudHSMResponsesModifyHsm(this, this.__resources, input);
  }

  public modifyLunaClient(input: shapes.CloudHsmModifyLunaClientRequest): CloudHSMResponsesModifyLunaClient {
    return new CloudHSMResponsesModifyLunaClient(this, this.__resources, input);
  }

  public removeTagsFromResource(input: shapes.CloudHsmRemoveTagsFromResourceRequest): CloudHSMResponsesRemoveTagsFromResource {
    return new CloudHSMResponsesRemoveTagsFromResource(this, this.__resources, input);
  }

}

export class CloudHSMResponsesAddTagsToResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmAddTagsToResourceRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addTagsToResource',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.AddTagsToResource.Status'),
        outputPath: 'Status',
        parameters: {
          ResourceArn: this.__input.resourceArn,
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddTagsToResource.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class CloudHSMResponsesCreateHapg {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmCreateHapgRequest) {
  }

  public get hapgArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHapg',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.CreateHapg.HapgArn'),
        outputPath: 'HapgArn',
        parameters: {
          Label: this.__input.label,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHapg.HapgArn', props);
    return resource.getResponseField('HapgArn') as unknown as string;
  }

}

export class CloudHSMResponsesCreateHsm {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmCreateHsmRequest) {
  }

  public get hsmArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHsm',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.CreateHsm.HsmArn'),
        outputPath: 'HsmArn',
        parameters: {
          SubnetId: this.__input.subnetId,
          SshKey: this.__input.sshKey,
          EniIp: this.__input.eniIp,
          IamRoleArn: this.__input.iamRoleArn,
          ExternalId: this.__input.externalId,
          SubscriptionType: this.__input.subscriptionType,
          ClientToken: this.__input.clientToken,
          SyslogIp: this.__input.syslogIp,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHsm.HsmArn', props);
    return resource.getResponseField('HsmArn') as unknown as string;
  }

}

export class CloudHSMResponsesCreateLunaClient {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmCreateLunaClientRequest) {
  }

  public get clientArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLunaClient',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.CreateLunaClient.ClientArn'),
        outputPath: 'ClientArn',
        parameters: {
          Label: this.__input.label,
          Certificate: this.__input.certificate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLunaClient.ClientArn', props);
    return resource.getResponseField('ClientArn') as unknown as string;
  }

}

export class CloudHSMResponsesDeleteHapg {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmDeleteHapgRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteHapg',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DeleteHapg.Status'),
        outputPath: 'Status',
        parameters: {
          HapgArn: this.__input.hapgArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteHapg.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class CloudHSMResponsesDeleteHsm {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmDeleteHsmRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteHsm',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DeleteHsm.Status'),
        outputPath: 'Status',
        parameters: {
          HsmArn: this.__input.hsmArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteHsm.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class CloudHSMResponsesDeleteLunaClient {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmDeleteLunaClientRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLunaClient',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DeleteLunaClient.Status'),
        outputPath: 'Status',
        parameters: {
          ClientArn: this.__input.clientArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLunaClient.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class CloudHSMResponsesDescribeHapg {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmDescribeHapgRequest) {
  }

  public get hapgArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHapg',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeHapg.HapgArn'),
        outputPath: 'HapgArn',
        parameters: {
          HapgArn: this.__input.hapgArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHapg.HapgArn', props);
    return resource.getResponseField('HapgArn') as unknown as string;
  }

  public get hapgSerial(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHapg',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeHapg.HapgSerial'),
        outputPath: 'HapgSerial',
        parameters: {
          HapgArn: this.__input.hapgArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHapg.HapgSerial', props);
    return resource.getResponseField('HapgSerial') as unknown as string;
  }

  public get hsmsLastActionFailed(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHapg',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeHapg.HsmsLastActionFailed'),
        outputPath: 'HsmsLastActionFailed',
        parameters: {
          HapgArn: this.__input.hapgArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHapg.HsmsLastActionFailed', props);
    return resource.getResponseField('HsmsLastActionFailed') as unknown as string[];
  }

  public get hsmsPendingDeletion(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHapg',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeHapg.HsmsPendingDeletion'),
        outputPath: 'HsmsPendingDeletion',
        parameters: {
          HapgArn: this.__input.hapgArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHapg.HsmsPendingDeletion', props);
    return resource.getResponseField('HsmsPendingDeletion') as unknown as string[];
  }

  public get hsmsPendingRegistration(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHapg',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeHapg.HsmsPendingRegistration'),
        outputPath: 'HsmsPendingRegistration',
        parameters: {
          HapgArn: this.__input.hapgArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHapg.HsmsPendingRegistration', props);
    return resource.getResponseField('HsmsPendingRegistration') as unknown as string[];
  }

  public get label(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHapg',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeHapg.Label'),
        outputPath: 'Label',
        parameters: {
          HapgArn: this.__input.hapgArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHapg.Label', props);
    return resource.getResponseField('Label') as unknown as string;
  }

  public get lastModifiedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHapg',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeHapg.LastModifiedTimestamp'),
        outputPath: 'LastModifiedTimestamp',
        parameters: {
          HapgArn: this.__input.hapgArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHapg.LastModifiedTimestamp', props);
    return resource.getResponseField('LastModifiedTimestamp') as unknown as string;
  }

  public get partitionSerialList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHapg',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeHapg.PartitionSerialList'),
        outputPath: 'PartitionSerialList',
        parameters: {
          HapgArn: this.__input.hapgArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHapg.PartitionSerialList', props);
    return resource.getResponseField('PartitionSerialList') as unknown as string[];
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHapg',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeHapg.State'),
        outputPath: 'State',
        parameters: {
          HapgArn: this.__input.hapgArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHapg.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

}

export class CloudHSMResponsesDescribeHsm {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmDescribeHsmRequest) {
  }

  public get hsmArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHsm',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeHsm.HsmArn'),
        outputPath: 'HsmArn',
        parameters: {
          HsmArn: this.__input.hsmArn,
          HsmSerialNumber: this.__input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHsm.HsmArn', props);
    return resource.getResponseField('HsmArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHsm',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeHsm.Status'),
        outputPath: 'Status',
        parameters: {
          HsmArn: this.__input.hsmArn,
          HsmSerialNumber: this.__input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHsm.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get statusDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHsm',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeHsm.StatusDetails'),
        outputPath: 'StatusDetails',
        parameters: {
          HsmArn: this.__input.hsmArn,
          HsmSerialNumber: this.__input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHsm.StatusDetails', props);
    return resource.getResponseField('StatusDetails') as unknown as string;
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHsm',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeHsm.AvailabilityZone'),
        outputPath: 'AvailabilityZone',
        parameters: {
          HsmArn: this.__input.hsmArn,
          HsmSerialNumber: this.__input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHsm.AvailabilityZone', props);
    return resource.getResponseField('AvailabilityZone') as unknown as string;
  }

  public get eniId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHsm',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeHsm.EniId'),
        outputPath: 'EniId',
        parameters: {
          HsmArn: this.__input.hsmArn,
          HsmSerialNumber: this.__input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHsm.EniId', props);
    return resource.getResponseField('EniId') as unknown as string;
  }

  public get eniIp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHsm',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeHsm.EniIp'),
        outputPath: 'EniIp',
        parameters: {
          HsmArn: this.__input.hsmArn,
          HsmSerialNumber: this.__input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHsm.EniIp', props);
    return resource.getResponseField('EniIp') as unknown as string;
  }

  public get subscriptionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHsm',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeHsm.SubscriptionType'),
        outputPath: 'SubscriptionType',
        parameters: {
          HsmArn: this.__input.hsmArn,
          HsmSerialNumber: this.__input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHsm.SubscriptionType', props);
    return resource.getResponseField('SubscriptionType') as unknown as string;
  }

  public get subscriptionStartDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHsm',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeHsm.SubscriptionStartDate'),
        outputPath: 'SubscriptionStartDate',
        parameters: {
          HsmArn: this.__input.hsmArn,
          HsmSerialNumber: this.__input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHsm.SubscriptionStartDate', props);
    return resource.getResponseField('SubscriptionStartDate') as unknown as string;
  }

  public get subscriptionEndDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHsm',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeHsm.SubscriptionEndDate'),
        outputPath: 'SubscriptionEndDate',
        parameters: {
          HsmArn: this.__input.hsmArn,
          HsmSerialNumber: this.__input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHsm.SubscriptionEndDate', props);
    return resource.getResponseField('SubscriptionEndDate') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHsm',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeHsm.VpcId'),
        outputPath: 'VpcId',
        parameters: {
          HsmArn: this.__input.hsmArn,
          HsmSerialNumber: this.__input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHsm.VpcId', props);
    return resource.getResponseField('VpcId') as unknown as string;
  }

  public get subnetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHsm',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeHsm.SubnetId'),
        outputPath: 'SubnetId',
        parameters: {
          HsmArn: this.__input.hsmArn,
          HsmSerialNumber: this.__input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHsm.SubnetId', props);
    return resource.getResponseField('SubnetId') as unknown as string;
  }

  public get iamRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHsm',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeHsm.IamRoleArn'),
        outputPath: 'IamRoleArn',
        parameters: {
          HsmArn: this.__input.hsmArn,
          HsmSerialNumber: this.__input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHsm.IamRoleArn', props);
    return resource.getResponseField('IamRoleArn') as unknown as string;
  }

  public get serialNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHsm',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeHsm.SerialNumber'),
        outputPath: 'SerialNumber',
        parameters: {
          HsmArn: this.__input.hsmArn,
          HsmSerialNumber: this.__input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHsm.SerialNumber', props);
    return resource.getResponseField('SerialNumber') as unknown as string;
  }

  public get vendorName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHsm',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeHsm.VendorName'),
        outputPath: 'VendorName',
        parameters: {
          HsmArn: this.__input.hsmArn,
          HsmSerialNumber: this.__input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHsm.VendorName', props);
    return resource.getResponseField('VendorName') as unknown as string;
  }

  public get hsmType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHsm',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeHsm.HsmType'),
        outputPath: 'HsmType',
        parameters: {
          HsmArn: this.__input.hsmArn,
          HsmSerialNumber: this.__input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHsm.HsmType', props);
    return resource.getResponseField('HsmType') as unknown as string;
  }

  public get softwareVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHsm',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeHsm.SoftwareVersion'),
        outputPath: 'SoftwareVersion',
        parameters: {
          HsmArn: this.__input.hsmArn,
          HsmSerialNumber: this.__input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHsm.SoftwareVersion', props);
    return resource.getResponseField('SoftwareVersion') as unknown as string;
  }

  public get sshPublicKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHsm',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeHsm.SshPublicKey'),
        outputPath: 'SshPublicKey',
        parameters: {
          HsmArn: this.__input.hsmArn,
          HsmSerialNumber: this.__input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHsm.SshPublicKey', props);
    return resource.getResponseField('SshPublicKey') as unknown as string;
  }

  public get sshKeyLastUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHsm',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeHsm.SshKeyLastUpdated'),
        outputPath: 'SshKeyLastUpdated',
        parameters: {
          HsmArn: this.__input.hsmArn,
          HsmSerialNumber: this.__input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHsm.SshKeyLastUpdated', props);
    return resource.getResponseField('SshKeyLastUpdated') as unknown as string;
  }

  public get serverCertUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHsm',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeHsm.ServerCertUri'),
        outputPath: 'ServerCertUri',
        parameters: {
          HsmArn: this.__input.hsmArn,
          HsmSerialNumber: this.__input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHsm.ServerCertUri', props);
    return resource.getResponseField('ServerCertUri') as unknown as string;
  }

  public get serverCertLastUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHsm',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeHsm.ServerCertLastUpdated'),
        outputPath: 'ServerCertLastUpdated',
        parameters: {
          HsmArn: this.__input.hsmArn,
          HsmSerialNumber: this.__input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHsm.ServerCertLastUpdated', props);
    return resource.getResponseField('ServerCertLastUpdated') as unknown as string;
  }

  public get partitions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHsm',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeHsm.Partitions'),
        outputPath: 'Partitions',
        parameters: {
          HsmArn: this.__input.hsmArn,
          HsmSerialNumber: this.__input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHsm.Partitions', props);
    return resource.getResponseField('Partitions') as unknown as string[];
  }

}

export class CloudHSMResponsesDescribeLunaClient {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmDescribeLunaClientRequest) {
  }

  public get clientArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLunaClient',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeLunaClient.ClientArn'),
        outputPath: 'ClientArn',
        parameters: {
          ClientArn: this.__input.clientArn,
          CertificateFingerprint: this.__input.certificateFingerprint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLunaClient.ClientArn', props);
    return resource.getResponseField('ClientArn') as unknown as string;
  }

  public get certificate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLunaClient',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeLunaClient.Certificate'),
        outputPath: 'Certificate',
        parameters: {
          ClientArn: this.__input.clientArn,
          CertificateFingerprint: this.__input.certificateFingerprint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLunaClient.Certificate', props);
    return resource.getResponseField('Certificate') as unknown as string;
  }

  public get certificateFingerprint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLunaClient',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeLunaClient.CertificateFingerprint'),
        outputPath: 'CertificateFingerprint',
        parameters: {
          ClientArn: this.__input.clientArn,
          CertificateFingerprint: this.__input.certificateFingerprint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLunaClient.CertificateFingerprint', props);
    return resource.getResponseField('CertificateFingerprint') as unknown as string;
  }

  public get lastModifiedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLunaClient',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeLunaClient.LastModifiedTimestamp'),
        outputPath: 'LastModifiedTimestamp',
        parameters: {
          ClientArn: this.__input.clientArn,
          CertificateFingerprint: this.__input.certificateFingerprint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLunaClient.LastModifiedTimestamp', props);
    return resource.getResponseField('LastModifiedTimestamp') as unknown as string;
  }

  public get label(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLunaClient',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.DescribeLunaClient.Label'),
        outputPath: 'Label',
        parameters: {
          ClientArn: this.__input.clientArn,
          CertificateFingerprint: this.__input.certificateFingerprint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLunaClient.Label', props);
    return resource.getResponseField('Label') as unknown as string;
  }

}

export class CloudHSMResponsesFetchConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmGetConfigRequest) {
  }

  public get configType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfig',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.GetConfig.ConfigType'),
        outputPath: 'ConfigType',
        parameters: {
          ClientArn: this.__input.clientArn,
          ClientVersion: this.__input.clientVersion,
          HapgList: this.__input.hapgList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfig.ConfigType', props);
    return resource.getResponseField('ConfigType') as unknown as string;
  }

  public get configFile(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfig',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.GetConfig.ConfigFile'),
        outputPath: 'ConfigFile',
        parameters: {
          ClientArn: this.__input.clientArn,
          ClientVersion: this.__input.clientVersion,
          HapgList: this.__input.hapgList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfig.ConfigFile', props);
    return resource.getResponseField('ConfigFile') as unknown as string;
  }

  public get configCred(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfig',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.GetConfig.ConfigCred'),
        outputPath: 'ConfigCred',
        parameters: {
          ClientArn: this.__input.clientArn,
          ClientVersion: this.__input.clientVersion,
          HapgList: this.__input.hapgList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfig.ConfigCred', props);
    return resource.getResponseField('ConfigCred') as unknown as string;
  }

}

export class CloudHSMResponsesListAvailableZones {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get azList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAvailableZones',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.ListAvailableZones.AZList'),
        outputPath: 'AZList',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAvailableZones.AZList', props);
    return resource.getResponseField('AZList') as unknown as string[];
  }

}

export class CloudHSMResponsesListHapgs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmListHapgsRequest) {
  }

  public get hapgList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHapgs',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.ListHapgs.HapgList'),
        outputPath: 'HapgList',
        parameters: {
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHapgs.HapgList', props);
    return resource.getResponseField('HapgList') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHapgs',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.ListHapgs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHapgs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudHSMResponsesListHsms {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmListHsmsRequest) {
  }

  public get hsmList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHsms',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.ListHsms.HsmList'),
        outputPath: 'HsmList',
        parameters: {
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHsms.HsmList', props);
    return resource.getResponseField('HsmList') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHsms',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.ListHsms.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHsms.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudHSMResponsesListLunaClients {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmListLunaClientsRequest) {
  }

  public get clientList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLunaClients',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.ListLunaClients.ClientList'),
        outputPath: 'ClientList',
        parameters: {
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLunaClients.ClientList', props);
    return resource.getResponseField('ClientList') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLunaClients',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.ListLunaClients.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLunaClients.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudHSMResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmListTagsForResourceRequest) {
  }

  public get tagList(): shapes.CloudHsmTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.ListTagsForResource.TagList'),
        outputPath: 'TagList',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.TagList', props);
    return resource.getResponseField('TagList') as unknown as shapes.CloudHsmTag[];
  }

}

export class CloudHSMResponsesModifyHapg {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmModifyHapgRequest) {
  }

  public get hapgArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyHapg',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.ModifyHapg.HapgArn'),
        outputPath: 'HapgArn',
        parameters: {
          HapgArn: this.__input.hapgArn,
          Label: this.__input.label,
          PartitionSerialList: this.__input.partitionSerialList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyHapg.HapgArn', props);
    return resource.getResponseField('HapgArn') as unknown as string;
  }

}

export class CloudHSMResponsesModifyHsm {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmModifyHsmRequest) {
  }

  public get hsmArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyHsm',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.ModifyHsm.HsmArn'),
        outputPath: 'HsmArn',
        parameters: {
          HsmArn: this.__input.hsmArn,
          SubnetId: this.__input.subnetId,
          EniIp: this.__input.eniIp,
          IamRoleArn: this.__input.iamRoleArn,
          ExternalId: this.__input.externalId,
          SyslogIp: this.__input.syslogIp,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyHsm.HsmArn', props);
    return resource.getResponseField('HsmArn') as unknown as string;
  }

}

export class CloudHSMResponsesModifyLunaClient {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmModifyLunaClientRequest) {
  }

  public get clientArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyLunaClient',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.ModifyLunaClient.ClientArn'),
        outputPath: 'ClientArn',
        parameters: {
          ClientArn: this.__input.clientArn,
          Certificate: this.__input.certificate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyLunaClient.ClientArn', props);
    return resource.getResponseField('ClientArn') as unknown as string;
  }

}

export class CloudHSMResponsesRemoveTagsFromResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmRemoveTagsFromResourceRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeTagsFromResource',
        service: 'CloudHSM',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSM.RemoveTagsFromResource.Status'),
        outputPath: 'Status',
        parameters: {
          ResourceArn: this.__input.resourceArn,
          TagKeyList: this.__input.tagKeyList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RemoveTagsFromResource.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

