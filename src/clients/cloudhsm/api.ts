import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class CloudHsmClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addTagsToResource(input: shapes.CloudHsmAddTagsToResourceRequest): CloudHSMAddTagsToResource {
    return new CloudHSMAddTagsToResource(this, 'AddTagsToResource', this.__resources, input);
  }

  public createHapg(input: shapes.CloudHsmCreateHapgRequest): CloudHSMCreateHapg {
    return new CloudHSMCreateHapg(this, 'CreateHapg', this.__resources, input);
  }

  public createHsm(input: shapes.CloudHsmCreateHsmRequest): CloudHSMCreateHsm {
    return new CloudHSMCreateHsm(this, 'CreateHsm', this.__resources, input);
  }

  public createLunaClient(input: shapes.CloudHsmCreateLunaClientRequest): CloudHSMCreateLunaClient {
    return new CloudHSMCreateLunaClient(this, 'CreateLunaClient', this.__resources, input);
  }

  public deleteHapg(input: shapes.CloudHsmDeleteHapgRequest): CloudHSMDeleteHapg {
    return new CloudHSMDeleteHapg(this, 'DeleteHapg', this.__resources, input);
  }

  public deleteHsm(input: shapes.CloudHsmDeleteHsmRequest): CloudHSMDeleteHsm {
    return new CloudHSMDeleteHsm(this, 'DeleteHsm', this.__resources, input);
  }

  public deleteLunaClient(input: shapes.CloudHsmDeleteLunaClientRequest): CloudHSMDeleteLunaClient {
    return new CloudHSMDeleteLunaClient(this, 'DeleteLunaClient', this.__resources, input);
  }

  public describeHapg(input: shapes.CloudHsmDescribeHapgRequest): CloudHSMDescribeHapg {
    return new CloudHSMDescribeHapg(this, 'DescribeHapg', this.__resources, input);
  }

  public describeHsm(input: shapes.CloudHsmDescribeHsmRequest): CloudHSMDescribeHsm {
    return new CloudHSMDescribeHsm(this, 'DescribeHsm', this.__resources, input);
  }

  public describeLunaClient(input: shapes.CloudHsmDescribeLunaClientRequest): CloudHSMDescribeLunaClient {
    return new CloudHSMDescribeLunaClient(this, 'DescribeLunaClient', this.__resources, input);
  }

  public fetchConfig(input: shapes.CloudHsmGetConfigRequest): CloudHSMFetchConfig {
    return new CloudHSMFetchConfig(this, 'FetchConfig', this.__resources, input);
  }

  public listAvailableZones(): CloudHSMListAvailableZones {
    return new CloudHSMListAvailableZones(this, 'ListAvailableZones', this.__resources);
  }

  public listHapgs(input: shapes.CloudHsmListHapgsRequest): CloudHSMListHapgs {
    return new CloudHSMListHapgs(this, 'ListHapgs', this.__resources, input);
  }

  public listHsms(input: shapes.CloudHsmListHsmsRequest): CloudHSMListHsms {
    return new CloudHSMListHsms(this, 'ListHsms', this.__resources, input);
  }

  public listLunaClients(input: shapes.CloudHsmListLunaClientsRequest): CloudHSMListLunaClients {
    return new CloudHSMListLunaClients(this, 'ListLunaClients', this.__resources, input);
  }

  public listTagsForResource(input: shapes.CloudHsmListTagsForResourceRequest): CloudHSMListTagsForResource {
    return new CloudHSMListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public modifyHapg(input: shapes.CloudHsmModifyHapgRequest): CloudHSMModifyHapg {
    return new CloudHSMModifyHapg(this, 'ModifyHapg', this.__resources, input);
  }

  public modifyHsm(input: shapes.CloudHsmModifyHsmRequest): CloudHSMModifyHsm {
    return new CloudHSMModifyHsm(this, 'ModifyHsm', this.__resources, input);
  }

  public modifyLunaClient(input: shapes.CloudHsmModifyLunaClientRequest): CloudHSMModifyLunaClient {
    return new CloudHSMModifyLunaClient(this, 'ModifyLunaClient', this.__resources, input);
  }

  public removeTagsFromResource(input: shapes.CloudHsmRemoveTagsFromResourceRequest): CloudHSMRemoveTagsFromResource {
    return new CloudHSMRemoveTagsFromResource(this, 'RemoveTagsFromResource', this.__resources, input);
  }

}

export class CloudHSMAddTagsToResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmAddTagsToResourceRequest) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddTagsToResource.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class CloudHSMCreateHapg extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmCreateHapgRequest) {
    super(scope, id);
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
          Label: this.input.label,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHapg.HapgArn', props);
    return resource.getResponseField('HapgArn') as unknown as string;
  }

}

export class CloudHSMCreateHsm extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmCreateHsmRequest) {
    super(scope, id);
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
          SubnetId: this.input.subnetId,
          SshKey: this.input.sshKey,
          EniIp: this.input.eniIp,
          IamRoleArn: this.input.iamRoleArn,
          ExternalId: this.input.externalId,
          SubscriptionType: this.input.subscriptionType,
          ClientToken: this.input.clientToken,
          SyslogIp: this.input.syslogIp,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHsm.HsmArn', props);
    return resource.getResponseField('HsmArn') as unknown as string;
  }

}

export class CloudHSMCreateLunaClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmCreateLunaClientRequest) {
    super(scope, id);
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
          Label: this.input.label,
          Certificate: this.input.certificate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLunaClient.ClientArn', props);
    return resource.getResponseField('ClientArn') as unknown as string;
  }

}

export class CloudHSMDeleteHapg extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmDeleteHapgRequest) {
    super(scope, id);
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
          HapgArn: this.input.hapgArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteHapg.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class CloudHSMDeleteHsm extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmDeleteHsmRequest) {
    super(scope, id);
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
          HsmArn: this.input.hsmArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteHsm.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class CloudHSMDeleteLunaClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmDeleteLunaClientRequest) {
    super(scope, id);
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
          ClientArn: this.input.clientArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLunaClient.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class CloudHSMDescribeHapg extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmDescribeHapgRequest) {
    super(scope, id);
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
          HapgArn: this.input.hapgArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHapg.HapgArn', props);
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
          HapgArn: this.input.hapgArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHapg.HapgSerial', props);
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
          HapgArn: this.input.hapgArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHapg.HsmsLastActionFailed', props);
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
          HapgArn: this.input.hapgArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHapg.HsmsPendingDeletion', props);
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
          HapgArn: this.input.hapgArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHapg.HsmsPendingRegistration', props);
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
          HapgArn: this.input.hapgArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHapg.Label', props);
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
          HapgArn: this.input.hapgArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHapg.LastModifiedTimestamp', props);
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
          HapgArn: this.input.hapgArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHapg.PartitionSerialList', props);
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
          HapgArn: this.input.hapgArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHapg.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

}

export class CloudHSMDescribeHsm extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmDescribeHsmRequest) {
    super(scope, id);
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
          HsmArn: this.input.hsmArn,
          HsmSerialNumber: this.input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHsm.HsmArn', props);
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
          HsmArn: this.input.hsmArn,
          HsmSerialNumber: this.input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHsm.Status', props);
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
          HsmArn: this.input.hsmArn,
          HsmSerialNumber: this.input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHsm.StatusDetails', props);
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
          HsmArn: this.input.hsmArn,
          HsmSerialNumber: this.input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHsm.AvailabilityZone', props);
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
          HsmArn: this.input.hsmArn,
          HsmSerialNumber: this.input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHsm.EniId', props);
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
          HsmArn: this.input.hsmArn,
          HsmSerialNumber: this.input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHsm.EniIp', props);
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
          HsmArn: this.input.hsmArn,
          HsmSerialNumber: this.input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHsm.SubscriptionType', props);
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
          HsmArn: this.input.hsmArn,
          HsmSerialNumber: this.input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHsm.SubscriptionStartDate', props);
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
          HsmArn: this.input.hsmArn,
          HsmSerialNumber: this.input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHsm.SubscriptionEndDate', props);
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
          HsmArn: this.input.hsmArn,
          HsmSerialNumber: this.input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHsm.VpcId', props);
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
          HsmArn: this.input.hsmArn,
          HsmSerialNumber: this.input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHsm.SubnetId', props);
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
          HsmArn: this.input.hsmArn,
          HsmSerialNumber: this.input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHsm.IamRoleArn', props);
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
          HsmArn: this.input.hsmArn,
          HsmSerialNumber: this.input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHsm.SerialNumber', props);
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
          HsmArn: this.input.hsmArn,
          HsmSerialNumber: this.input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHsm.VendorName', props);
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
          HsmArn: this.input.hsmArn,
          HsmSerialNumber: this.input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHsm.HsmType', props);
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
          HsmArn: this.input.hsmArn,
          HsmSerialNumber: this.input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHsm.SoftwareVersion', props);
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
          HsmArn: this.input.hsmArn,
          HsmSerialNumber: this.input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHsm.SshPublicKey', props);
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
          HsmArn: this.input.hsmArn,
          HsmSerialNumber: this.input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHsm.SshKeyLastUpdated', props);
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
          HsmArn: this.input.hsmArn,
          HsmSerialNumber: this.input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHsm.ServerCertUri', props);
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
          HsmArn: this.input.hsmArn,
          HsmSerialNumber: this.input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHsm.ServerCertLastUpdated', props);
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
          HsmArn: this.input.hsmArn,
          HsmSerialNumber: this.input.hsmSerialNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHsm.Partitions', props);
    return resource.getResponseField('Partitions') as unknown as string[];
  }

}

export class CloudHSMDescribeLunaClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmDescribeLunaClientRequest) {
    super(scope, id);
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
          ClientArn: this.input.clientArn,
          CertificateFingerprint: this.input.certificateFingerprint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLunaClient.ClientArn', props);
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
          ClientArn: this.input.clientArn,
          CertificateFingerprint: this.input.certificateFingerprint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLunaClient.Certificate', props);
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
          ClientArn: this.input.clientArn,
          CertificateFingerprint: this.input.certificateFingerprint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLunaClient.CertificateFingerprint', props);
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
          ClientArn: this.input.clientArn,
          CertificateFingerprint: this.input.certificateFingerprint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLunaClient.LastModifiedTimestamp', props);
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
          ClientArn: this.input.clientArn,
          CertificateFingerprint: this.input.certificateFingerprint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLunaClient.Label', props);
    return resource.getResponseField('Label') as unknown as string;
  }

}

export class CloudHSMFetchConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmGetConfigRequest) {
    super(scope, id);
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
          ClientArn: this.input.clientArn,
          ClientVersion: this.input.clientVersion,
          HapgList: this.input.hapgList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfig.ConfigType', props);
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
          ClientArn: this.input.clientArn,
          ClientVersion: this.input.clientVersion,
          HapgList: this.input.hapgList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfig.ConfigFile', props);
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
          ClientArn: this.input.clientArn,
          ClientVersion: this.input.clientVersion,
          HapgList: this.input.hapgList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfig.ConfigCred', props);
    return resource.getResponseField('ConfigCred') as unknown as string;
  }

}

export class CloudHSMListAvailableZones extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'ListAvailableZones.AZList', props);
    return resource.getResponseField('AZList') as unknown as string[];
  }

}

export class CloudHSMListHapgs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmListHapgsRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHapgs.HapgList', props);
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
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHapgs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudHSMListHsms extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmListHsmsRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHsms.HsmList', props);
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
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHsms.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudHSMListLunaClients extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmListLunaClientsRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLunaClients.ClientList', props);
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
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLunaClients.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudHSMListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmListTagsForResourceRequest) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.TagList', props);
    return resource.getResponseField('TagList') as unknown as shapes.CloudHsmTag[];
  }

}

export class CloudHSMModifyHapg extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmModifyHapgRequest) {
    super(scope, id);
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
          HapgArn: this.input.hapgArn,
          Label: this.input.label,
          PartitionSerialList: this.input.partitionSerialList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyHapg.HapgArn', props);
    return resource.getResponseField('HapgArn') as unknown as string;
  }

}

export class CloudHSMModifyHsm extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmModifyHsmRequest) {
    super(scope, id);
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
          HsmArn: this.input.hsmArn,
          SubnetId: this.input.subnetId,
          EniIp: this.input.eniIp,
          IamRoleArn: this.input.iamRoleArn,
          ExternalId: this.input.externalId,
          SyslogIp: this.input.syslogIp,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyHsm.HsmArn', props);
    return resource.getResponseField('HsmArn') as unknown as string;
  }

}

export class CloudHSMModifyLunaClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmModifyLunaClientRequest) {
    super(scope, id);
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
          ClientArn: this.input.clientArn,
          Certificate: this.input.certificate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyLunaClient.ClientArn', props);
    return resource.getResponseField('ClientArn') as unknown as string;
  }

}

export class CloudHSMRemoveTagsFromResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmRemoveTagsFromResourceRequest) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
          TagKeyList: this.input.tagKeyList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RemoveTagsFromResource.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

