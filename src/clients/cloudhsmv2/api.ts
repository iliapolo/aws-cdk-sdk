import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class CloudHsmv2Client extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public copyBackupToRegion(input: shapes.CloudHsmv2CopyBackupToRegionRequest): CloudHSMV2CopyBackupToRegion {
    return new CloudHSMV2CopyBackupToRegion(this, 'CopyBackupToRegion', this.__resources, input);
  }

  public createCluster(input: shapes.CloudHsmv2CreateClusterRequest): CloudHSMV2CreateCluster {
    return new CloudHSMV2CreateCluster(this, 'CreateCluster', this.__resources, input);
  }

  public createHsm(input: shapes.CloudHsmv2CreateHsmRequest): CloudHSMV2CreateHsm {
    return new CloudHSMV2CreateHsm(this, 'CreateHsm', this.__resources, input);
  }

  public deleteBackup(input: shapes.CloudHsmv2DeleteBackupRequest): CloudHSMV2DeleteBackup {
    return new CloudHSMV2DeleteBackup(this, 'DeleteBackup', this.__resources, input);
  }

  public deleteCluster(input: shapes.CloudHsmv2DeleteClusterRequest): CloudHSMV2DeleteCluster {
    return new CloudHSMV2DeleteCluster(this, 'DeleteCluster', this.__resources, input);
  }

  public deleteHsm(input: shapes.CloudHsmv2DeleteHsmRequest): CloudHSMV2DeleteHsm {
    return new CloudHSMV2DeleteHsm(this, 'DeleteHsm', this.__resources, input);
  }

  public describeBackups(input: shapes.CloudHsmv2DescribeBackupsRequest): CloudHSMV2DescribeBackups {
    return new CloudHSMV2DescribeBackups(this, 'DescribeBackups', this.__resources, input);
  }

  public describeClusters(input: shapes.CloudHsmv2DescribeClustersRequest): CloudHSMV2DescribeClusters {
    return new CloudHSMV2DescribeClusters(this, 'DescribeClusters', this.__resources, input);
  }

  public initializeCluster(input: shapes.CloudHsmv2InitializeClusterRequest): CloudHSMV2InitializeCluster {
    return new CloudHSMV2InitializeCluster(this, 'InitializeCluster', this.__resources, input);
  }

  public listTags(input: shapes.CloudHsmv2ListTagsRequest): CloudHSMV2ListTags {
    return new CloudHSMV2ListTags(this, 'ListTags', this.__resources, input);
  }

  public modifyBackupAttributes(input: shapes.CloudHsmv2ModifyBackupAttributesRequest): CloudHSMV2ModifyBackupAttributes {
    return new CloudHSMV2ModifyBackupAttributes(this, 'ModifyBackupAttributes', this.__resources, input);
  }

  public modifyCluster(input: shapes.CloudHsmv2ModifyClusterRequest): CloudHSMV2ModifyCluster {
    return new CloudHSMV2ModifyCluster(this, 'ModifyCluster', this.__resources, input);
  }

  public restoreBackup(input: shapes.CloudHsmv2RestoreBackupRequest): CloudHSMV2RestoreBackup {
    return new CloudHSMV2RestoreBackup(this, 'RestoreBackup', this.__resources, input);
  }

  public tagResource(input: shapes.CloudHsmv2TagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.TagResource'),
        parameters: {
          ResourceId: input.resourceId,
          TagList: input.tagList,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.CloudHsmv2UntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.UntagResource'),
        parameters: {
          ResourceId: input.resourceId,
          TagKeyList: input.tagKeyList,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

}

export class CloudHSMV2CopyBackupToRegion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmv2CopyBackupToRegionRequest) {
    super(scope, id);
  }

  public get destinationBackup(): CloudHSMV2CopyBackupToRegionDestinationBackup {
    return new CloudHSMV2CopyBackupToRegionDestinationBackup(this, 'DestinationBackup', this.__resources, this.input);
  }

}

export class CloudHSMV2CopyBackupToRegionDestinationBackup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmv2CopyBackupToRegionRequest) {
    super(scope, id);
  }

  public get createTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackupToRegion',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.CopyBackupToRegion.DestinationBackup.CreateTimestamp'),
        outputPath: 'DestinationBackup.CreateTimestamp',
        parameters: {
          DestinationRegion: this.input.destinationRegion,
          BackupId: this.input.backupId,
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopyBackupToRegion.DestinationBackup.CreateTimestamp', props);
    return resource.getResponseField('DestinationBackup.CreateTimestamp') as unknown as string;
  }

  public get sourceRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackupToRegion',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.CopyBackupToRegion.DestinationBackup.SourceRegion'),
        outputPath: 'DestinationBackup.SourceRegion',
        parameters: {
          DestinationRegion: this.input.destinationRegion,
          BackupId: this.input.backupId,
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopyBackupToRegion.DestinationBackup.SourceRegion', props);
    return resource.getResponseField('DestinationBackup.SourceRegion') as unknown as string;
  }

  public get sourceBackup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackupToRegion',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.CopyBackupToRegion.DestinationBackup.SourceBackup'),
        outputPath: 'DestinationBackup.SourceBackup',
        parameters: {
          DestinationRegion: this.input.destinationRegion,
          BackupId: this.input.backupId,
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopyBackupToRegion.DestinationBackup.SourceBackup', props);
    return resource.getResponseField('DestinationBackup.SourceBackup') as unknown as string;
  }

  public get sourceCluster(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackupToRegion',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.CopyBackupToRegion.DestinationBackup.SourceCluster'),
        outputPath: 'DestinationBackup.SourceCluster',
        parameters: {
          DestinationRegion: this.input.destinationRegion,
          BackupId: this.input.backupId,
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopyBackupToRegion.DestinationBackup.SourceCluster', props);
    return resource.getResponseField('DestinationBackup.SourceCluster') as unknown as string;
  }

}

export class CloudHSMV2CreateCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmv2CreateClusterRequest) {
    super(scope, id);
  }

  public get cluster(): CloudHSMV2CreateClusterCluster {
    return new CloudHSMV2CreateClusterCluster(this, 'Cluster', this.__resources, this.input);
  }

}

export class CloudHSMV2CreateClusterCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmv2CreateClusterRequest) {
    super(scope, id);
  }

  public get backupPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.CreateCluster.Cluster.BackupPolicy'),
        outputPath: 'Cluster.BackupPolicy',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy?.type,
            Value: this.input.backupRetentionPolicy?.value,
          },
          HsmType: this.input.hsmType,
          SourceBackupId: this.input.sourceBackupId,
          SubnetIds: this.input.subnetIds,
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.BackupPolicy', props);
    return resource.getResponseField('Cluster.BackupPolicy') as unknown as string;
  }

  public get backupRetentionPolicy(): CloudHSMV2CreateClusterClusterBackupRetentionPolicy {
    return new CloudHSMV2CreateClusterClusterBackupRetentionPolicy(this, 'BackupRetentionPolicy', this.__resources, this.input);
  }

  public get clusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.CreateCluster.Cluster.ClusterId'),
        outputPath: 'Cluster.ClusterId',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy?.type,
            Value: this.input.backupRetentionPolicy?.value,
          },
          HsmType: this.input.hsmType,
          SourceBackupId: this.input.sourceBackupId,
          SubnetIds: this.input.subnetIds,
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.ClusterId', props);
    return resource.getResponseField('Cluster.ClusterId') as unknown as string;
  }

  public get createTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.CreateCluster.Cluster.CreateTimestamp'),
        outputPath: 'Cluster.CreateTimestamp',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy?.type,
            Value: this.input.backupRetentionPolicy?.value,
          },
          HsmType: this.input.hsmType,
          SourceBackupId: this.input.sourceBackupId,
          SubnetIds: this.input.subnetIds,
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.CreateTimestamp', props);
    return resource.getResponseField('Cluster.CreateTimestamp') as unknown as string;
  }

  public get hsms(): shapes.CloudHsmv2Hsm[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.CreateCluster.Cluster.Hsms'),
        outputPath: 'Cluster.Hsms',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy?.type,
            Value: this.input.backupRetentionPolicy?.value,
          },
          HsmType: this.input.hsmType,
          SourceBackupId: this.input.sourceBackupId,
          SubnetIds: this.input.subnetIds,
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.Hsms', props);
    return resource.getResponseField('Cluster.Hsms') as unknown as shapes.CloudHsmv2Hsm[];
  }

  public get hsmType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.CreateCluster.Cluster.HsmType'),
        outputPath: 'Cluster.HsmType',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy?.type,
            Value: this.input.backupRetentionPolicy?.value,
          },
          HsmType: this.input.hsmType,
          SourceBackupId: this.input.sourceBackupId,
          SubnetIds: this.input.subnetIds,
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.HsmType', props);
    return resource.getResponseField('Cluster.HsmType') as unknown as string;
  }

  public get preCoPassword(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.CreateCluster.Cluster.PreCoPassword'),
        outputPath: 'Cluster.PreCoPassword',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy?.type,
            Value: this.input.backupRetentionPolicy?.value,
          },
          HsmType: this.input.hsmType,
          SourceBackupId: this.input.sourceBackupId,
          SubnetIds: this.input.subnetIds,
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.PreCoPassword', props);
    return resource.getResponseField('Cluster.PreCoPassword') as unknown as string;
  }

  public get securityGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.CreateCluster.Cluster.SecurityGroup'),
        outputPath: 'Cluster.SecurityGroup',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy?.type,
            Value: this.input.backupRetentionPolicy?.value,
          },
          HsmType: this.input.hsmType,
          SourceBackupId: this.input.sourceBackupId,
          SubnetIds: this.input.subnetIds,
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.SecurityGroup', props);
    return resource.getResponseField('Cluster.SecurityGroup') as unknown as string;
  }

  public get sourceBackupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.CreateCluster.Cluster.SourceBackupId'),
        outputPath: 'Cluster.SourceBackupId',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy?.type,
            Value: this.input.backupRetentionPolicy?.value,
          },
          HsmType: this.input.hsmType,
          SourceBackupId: this.input.sourceBackupId,
          SubnetIds: this.input.subnetIds,
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.SourceBackupId', props);
    return resource.getResponseField('Cluster.SourceBackupId') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.CreateCluster.Cluster.State'),
        outputPath: 'Cluster.State',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy?.type,
            Value: this.input.backupRetentionPolicy?.value,
          },
          HsmType: this.input.hsmType,
          SourceBackupId: this.input.sourceBackupId,
          SubnetIds: this.input.subnetIds,
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.State', props);
    return resource.getResponseField('Cluster.State') as unknown as string;
  }

  public get stateMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.CreateCluster.Cluster.StateMessage'),
        outputPath: 'Cluster.StateMessage',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy?.type,
            Value: this.input.backupRetentionPolicy?.value,
          },
          HsmType: this.input.hsmType,
          SourceBackupId: this.input.sourceBackupId,
          SubnetIds: this.input.subnetIds,
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.StateMessage', props);
    return resource.getResponseField('Cluster.StateMessage') as unknown as string;
  }

  public get subnetMapping(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.CreateCluster.Cluster.SubnetMapping'),
        outputPath: 'Cluster.SubnetMapping',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy?.type,
            Value: this.input.backupRetentionPolicy?.value,
          },
          HsmType: this.input.hsmType,
          SourceBackupId: this.input.sourceBackupId,
          SubnetIds: this.input.subnetIds,
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.SubnetMapping', props);
    return resource.getResponseField('Cluster.SubnetMapping') as unknown as Record<string, string>;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.CreateCluster.Cluster.VpcId'),
        outputPath: 'Cluster.VpcId',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy?.type,
            Value: this.input.backupRetentionPolicy?.value,
          },
          HsmType: this.input.hsmType,
          SourceBackupId: this.input.sourceBackupId,
          SubnetIds: this.input.subnetIds,
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.VpcId', props);
    return resource.getResponseField('Cluster.VpcId') as unknown as string;
  }

  public get certificates(): CloudHSMV2CreateClusterClusterCertificates {
    return new CloudHSMV2CreateClusterClusterCertificates(this, 'Certificates', this.__resources, this.input);
  }

  public get tagList(): shapes.CloudHsmv2Tag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.CreateCluster.Cluster.TagList'),
        outputPath: 'Cluster.TagList',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy?.type,
            Value: this.input.backupRetentionPolicy?.value,
          },
          HsmType: this.input.hsmType,
          SourceBackupId: this.input.sourceBackupId,
          SubnetIds: this.input.subnetIds,
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.TagList', props);
    return resource.getResponseField('Cluster.TagList') as unknown as shapes.CloudHsmv2Tag[];
  }

}

export class CloudHSMV2CreateClusterClusterBackupRetentionPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmv2CreateClusterRequest) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.CreateCluster.Cluster.BackupRetentionPolicy.Type'),
        outputPath: 'Cluster.BackupRetentionPolicy.Type',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy?.type,
            Value: this.input.backupRetentionPolicy?.value,
          },
          HsmType: this.input.hsmType,
          SourceBackupId: this.input.sourceBackupId,
          SubnetIds: this.input.subnetIds,
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.BackupRetentionPolicy.Type', props);
    return resource.getResponseField('Cluster.BackupRetentionPolicy.Type') as unknown as string;
  }

  public get value(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.CreateCluster.Cluster.BackupRetentionPolicy.Value'),
        outputPath: 'Cluster.BackupRetentionPolicy.Value',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy?.type,
            Value: this.input.backupRetentionPolicy?.value,
          },
          HsmType: this.input.hsmType,
          SourceBackupId: this.input.sourceBackupId,
          SubnetIds: this.input.subnetIds,
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.BackupRetentionPolicy.Value', props);
    return resource.getResponseField('Cluster.BackupRetentionPolicy.Value') as unknown as string;
  }

}

export class CloudHSMV2CreateClusterClusterCertificates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmv2CreateClusterRequest) {
    super(scope, id);
  }

  public get clusterCsr(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.CreateCluster.Cluster.Certificates.ClusterCsr'),
        outputPath: 'Cluster.Certificates.ClusterCsr',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy?.type,
            Value: this.input.backupRetentionPolicy?.value,
          },
          HsmType: this.input.hsmType,
          SourceBackupId: this.input.sourceBackupId,
          SubnetIds: this.input.subnetIds,
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.Certificates.ClusterCsr', props);
    return resource.getResponseField('Cluster.Certificates.ClusterCsr') as unknown as string;
  }

  public get hsmCertificate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.CreateCluster.Cluster.Certificates.HsmCertificate'),
        outputPath: 'Cluster.Certificates.HsmCertificate',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy?.type,
            Value: this.input.backupRetentionPolicy?.value,
          },
          HsmType: this.input.hsmType,
          SourceBackupId: this.input.sourceBackupId,
          SubnetIds: this.input.subnetIds,
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.Certificates.HsmCertificate', props);
    return resource.getResponseField('Cluster.Certificates.HsmCertificate') as unknown as string;
  }

  public get awsHardwareCertificate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.CreateCluster.Cluster.Certificates.AwsHardwareCertificate'),
        outputPath: 'Cluster.Certificates.AwsHardwareCertificate',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy?.type,
            Value: this.input.backupRetentionPolicy?.value,
          },
          HsmType: this.input.hsmType,
          SourceBackupId: this.input.sourceBackupId,
          SubnetIds: this.input.subnetIds,
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.Certificates.AwsHardwareCertificate', props);
    return resource.getResponseField('Cluster.Certificates.AwsHardwareCertificate') as unknown as string;
  }

  public get manufacturerHardwareCertificate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.CreateCluster.Cluster.Certificates.ManufacturerHardwareCertificate'),
        outputPath: 'Cluster.Certificates.ManufacturerHardwareCertificate',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy?.type,
            Value: this.input.backupRetentionPolicy?.value,
          },
          HsmType: this.input.hsmType,
          SourceBackupId: this.input.sourceBackupId,
          SubnetIds: this.input.subnetIds,
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.Certificates.ManufacturerHardwareCertificate', props);
    return resource.getResponseField('Cluster.Certificates.ManufacturerHardwareCertificate') as unknown as string;
  }

  public get clusterCertificate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.CreateCluster.Cluster.Certificates.ClusterCertificate'),
        outputPath: 'Cluster.Certificates.ClusterCertificate',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy?.type,
            Value: this.input.backupRetentionPolicy?.value,
          },
          HsmType: this.input.hsmType,
          SourceBackupId: this.input.sourceBackupId,
          SubnetIds: this.input.subnetIds,
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.Certificates.ClusterCertificate', props);
    return resource.getResponseField('Cluster.Certificates.ClusterCertificate') as unknown as string;
  }

}

export class CloudHSMV2CreateHsm extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmv2CreateHsmRequest) {
    super(scope, id);
  }

  public get hsm(): CloudHSMV2CreateHsmHsm {
    return new CloudHSMV2CreateHsmHsm(this, 'Hsm', this.__resources, this.input);
  }

}

export class CloudHSMV2CreateHsmHsm extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmv2CreateHsmRequest) {
    super(scope, id);
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHsm',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.CreateHsm.Hsm.AvailabilityZone'),
        outputPath: 'Hsm.AvailabilityZone',
        parameters: {
          ClusterId: this.input.clusterId,
          AvailabilityZone: this.input.availabilityZone,
          IpAddress: this.input.ipAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHsm.Hsm.AvailabilityZone', props);
    return resource.getResponseField('Hsm.AvailabilityZone') as unknown as string;
  }

  public get clusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHsm',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.CreateHsm.Hsm.ClusterId'),
        outputPath: 'Hsm.ClusterId',
        parameters: {
          ClusterId: this.input.clusterId,
          AvailabilityZone: this.input.availabilityZone,
          IpAddress: this.input.ipAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHsm.Hsm.ClusterId', props);
    return resource.getResponseField('Hsm.ClusterId') as unknown as string;
  }

  public get subnetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHsm',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.CreateHsm.Hsm.SubnetId'),
        outputPath: 'Hsm.SubnetId',
        parameters: {
          ClusterId: this.input.clusterId,
          AvailabilityZone: this.input.availabilityZone,
          IpAddress: this.input.ipAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHsm.Hsm.SubnetId', props);
    return resource.getResponseField('Hsm.SubnetId') as unknown as string;
  }

  public get eniId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHsm',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.CreateHsm.Hsm.EniId'),
        outputPath: 'Hsm.EniId',
        parameters: {
          ClusterId: this.input.clusterId,
          AvailabilityZone: this.input.availabilityZone,
          IpAddress: this.input.ipAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHsm.Hsm.EniId', props);
    return resource.getResponseField('Hsm.EniId') as unknown as string;
  }

  public get eniIp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHsm',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.CreateHsm.Hsm.EniIp'),
        outputPath: 'Hsm.EniIp',
        parameters: {
          ClusterId: this.input.clusterId,
          AvailabilityZone: this.input.availabilityZone,
          IpAddress: this.input.ipAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHsm.Hsm.EniIp', props);
    return resource.getResponseField('Hsm.EniIp') as unknown as string;
  }

  public get hsmId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHsm',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.CreateHsm.Hsm.HsmId'),
        outputPath: 'Hsm.HsmId',
        parameters: {
          ClusterId: this.input.clusterId,
          AvailabilityZone: this.input.availabilityZone,
          IpAddress: this.input.ipAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHsm.Hsm.HsmId', props);
    return resource.getResponseField('Hsm.HsmId') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHsm',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.CreateHsm.Hsm.State'),
        outputPath: 'Hsm.State',
        parameters: {
          ClusterId: this.input.clusterId,
          AvailabilityZone: this.input.availabilityZone,
          IpAddress: this.input.ipAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHsm.Hsm.State', props);
    return resource.getResponseField('Hsm.State') as unknown as string;
  }

  public get stateMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHsm',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.CreateHsm.Hsm.StateMessage'),
        outputPath: 'Hsm.StateMessage',
        parameters: {
          ClusterId: this.input.clusterId,
          AvailabilityZone: this.input.availabilityZone,
          IpAddress: this.input.ipAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHsm.Hsm.StateMessage', props);
    return resource.getResponseField('Hsm.StateMessage') as unknown as string;
  }

}

export class CloudHSMV2DeleteBackup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmv2DeleteBackupRequest) {
    super(scope, id);
  }

  public get backup(): CloudHSMV2DeleteBackupBackup {
    return new CloudHSMV2DeleteBackupBackup(this, 'Backup', this.__resources, this.input);
  }

}

export class CloudHSMV2DeleteBackupBackup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmv2DeleteBackupRequest) {
    super(scope, id);
  }

  public get backupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DeleteBackup.Backup.BackupId'),
        outputPath: 'Backup.BackupId',
        parameters: {
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.Backup.BackupId', props);
    return resource.getResponseField('Backup.BackupId') as unknown as string;
  }

  public get backupState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DeleteBackup.Backup.BackupState'),
        outputPath: 'Backup.BackupState',
        parameters: {
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.Backup.BackupState', props);
    return resource.getResponseField('Backup.BackupState') as unknown as string;
  }

  public get clusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DeleteBackup.Backup.ClusterId'),
        outputPath: 'Backup.ClusterId',
        parameters: {
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.Backup.ClusterId', props);
    return resource.getResponseField('Backup.ClusterId') as unknown as string;
  }

  public get createTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DeleteBackup.Backup.CreateTimestamp'),
        outputPath: 'Backup.CreateTimestamp',
        parameters: {
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.Backup.CreateTimestamp', props);
    return resource.getResponseField('Backup.CreateTimestamp') as unknown as string;
  }

  public get copyTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DeleteBackup.Backup.CopyTimestamp'),
        outputPath: 'Backup.CopyTimestamp',
        parameters: {
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.Backup.CopyTimestamp', props);
    return resource.getResponseField('Backup.CopyTimestamp') as unknown as string;
  }

  public get neverExpires(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DeleteBackup.Backup.NeverExpires'),
        outputPath: 'Backup.NeverExpires',
        parameters: {
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.Backup.NeverExpires', props);
    return resource.getResponseField('Backup.NeverExpires') as unknown as boolean;
  }

  public get sourceRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DeleteBackup.Backup.SourceRegion'),
        outputPath: 'Backup.SourceRegion',
        parameters: {
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.Backup.SourceRegion', props);
    return resource.getResponseField('Backup.SourceRegion') as unknown as string;
  }

  public get sourceBackup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DeleteBackup.Backup.SourceBackup'),
        outputPath: 'Backup.SourceBackup',
        parameters: {
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.Backup.SourceBackup', props);
    return resource.getResponseField('Backup.SourceBackup') as unknown as string;
  }

  public get sourceCluster(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DeleteBackup.Backup.SourceCluster'),
        outputPath: 'Backup.SourceCluster',
        parameters: {
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.Backup.SourceCluster', props);
    return resource.getResponseField('Backup.SourceCluster') as unknown as string;
  }

  public get deleteTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DeleteBackup.Backup.DeleteTimestamp'),
        outputPath: 'Backup.DeleteTimestamp',
        parameters: {
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.Backup.DeleteTimestamp', props);
    return resource.getResponseField('Backup.DeleteTimestamp') as unknown as string;
  }

  public get tagList(): shapes.CloudHsmv2Tag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DeleteBackup.Backup.TagList'),
        outputPath: 'Backup.TagList',
        parameters: {
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.Backup.TagList', props);
    return resource.getResponseField('Backup.TagList') as unknown as shapes.CloudHsmv2Tag[];
  }

}

export class CloudHSMV2DeleteCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmv2DeleteClusterRequest) {
    super(scope, id);
  }

  public get cluster(): CloudHSMV2DeleteClusterCluster {
    return new CloudHSMV2DeleteClusterCluster(this, 'Cluster', this.__resources, this.input);
  }

}

export class CloudHSMV2DeleteClusterCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmv2DeleteClusterRequest) {
    super(scope, id);
  }

  public get backupPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DeleteCluster.Cluster.BackupPolicy'),
        outputPath: 'Cluster.BackupPolicy',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.BackupPolicy', props);
    return resource.getResponseField('Cluster.BackupPolicy') as unknown as string;
  }

  public get backupRetentionPolicy(): CloudHSMV2DeleteClusterClusterBackupRetentionPolicy {
    return new CloudHSMV2DeleteClusterClusterBackupRetentionPolicy(this, 'BackupRetentionPolicy', this.__resources, this.input);
  }

  public get clusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DeleteCluster.Cluster.ClusterId'),
        outputPath: 'Cluster.ClusterId',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.ClusterId', props);
    return resource.getResponseField('Cluster.ClusterId') as unknown as string;
  }

  public get createTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DeleteCluster.Cluster.CreateTimestamp'),
        outputPath: 'Cluster.CreateTimestamp',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.CreateTimestamp', props);
    return resource.getResponseField('Cluster.CreateTimestamp') as unknown as string;
  }

  public get hsms(): shapes.CloudHsmv2Hsm[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DeleteCluster.Cluster.Hsms'),
        outputPath: 'Cluster.Hsms',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.Hsms', props);
    return resource.getResponseField('Cluster.Hsms') as unknown as shapes.CloudHsmv2Hsm[];
  }

  public get hsmType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DeleteCluster.Cluster.HsmType'),
        outputPath: 'Cluster.HsmType',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.HsmType', props);
    return resource.getResponseField('Cluster.HsmType') as unknown as string;
  }

  public get preCoPassword(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DeleteCluster.Cluster.PreCoPassword'),
        outputPath: 'Cluster.PreCoPassword',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.PreCoPassword', props);
    return resource.getResponseField('Cluster.PreCoPassword') as unknown as string;
  }

  public get securityGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DeleteCluster.Cluster.SecurityGroup'),
        outputPath: 'Cluster.SecurityGroup',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.SecurityGroup', props);
    return resource.getResponseField('Cluster.SecurityGroup') as unknown as string;
  }

  public get sourceBackupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DeleteCluster.Cluster.SourceBackupId'),
        outputPath: 'Cluster.SourceBackupId',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.SourceBackupId', props);
    return resource.getResponseField('Cluster.SourceBackupId') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DeleteCluster.Cluster.State'),
        outputPath: 'Cluster.State',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.State', props);
    return resource.getResponseField('Cluster.State') as unknown as string;
  }

  public get stateMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DeleteCluster.Cluster.StateMessage'),
        outputPath: 'Cluster.StateMessage',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.StateMessage', props);
    return resource.getResponseField('Cluster.StateMessage') as unknown as string;
  }

  public get subnetMapping(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DeleteCluster.Cluster.SubnetMapping'),
        outputPath: 'Cluster.SubnetMapping',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.SubnetMapping', props);
    return resource.getResponseField('Cluster.SubnetMapping') as unknown as Record<string, string>;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DeleteCluster.Cluster.VpcId'),
        outputPath: 'Cluster.VpcId',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.VpcId', props);
    return resource.getResponseField('Cluster.VpcId') as unknown as string;
  }

  public get certificates(): CloudHSMV2DeleteClusterClusterCertificates {
    return new CloudHSMV2DeleteClusterClusterCertificates(this, 'Certificates', this.__resources, this.input);
  }

  public get tagList(): shapes.CloudHsmv2Tag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DeleteCluster.Cluster.TagList'),
        outputPath: 'Cluster.TagList',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.TagList', props);
    return resource.getResponseField('Cluster.TagList') as unknown as shapes.CloudHsmv2Tag[];
  }

}

export class CloudHSMV2DeleteClusterClusterBackupRetentionPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmv2DeleteClusterRequest) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DeleteCluster.Cluster.BackupRetentionPolicy.Type'),
        outputPath: 'Cluster.BackupRetentionPolicy.Type',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.BackupRetentionPolicy.Type', props);
    return resource.getResponseField('Cluster.BackupRetentionPolicy.Type') as unknown as string;
  }

  public get value(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DeleteCluster.Cluster.BackupRetentionPolicy.Value'),
        outputPath: 'Cluster.BackupRetentionPolicy.Value',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.BackupRetentionPolicy.Value', props);
    return resource.getResponseField('Cluster.BackupRetentionPolicy.Value') as unknown as string;
  }

}

export class CloudHSMV2DeleteClusterClusterCertificates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmv2DeleteClusterRequest) {
    super(scope, id);
  }

  public get clusterCsr(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DeleteCluster.Cluster.Certificates.ClusterCsr'),
        outputPath: 'Cluster.Certificates.ClusterCsr',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.Certificates.ClusterCsr', props);
    return resource.getResponseField('Cluster.Certificates.ClusterCsr') as unknown as string;
  }

  public get hsmCertificate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DeleteCluster.Cluster.Certificates.HsmCertificate'),
        outputPath: 'Cluster.Certificates.HsmCertificate',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.Certificates.HsmCertificate', props);
    return resource.getResponseField('Cluster.Certificates.HsmCertificate') as unknown as string;
  }

  public get awsHardwareCertificate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DeleteCluster.Cluster.Certificates.AwsHardwareCertificate'),
        outputPath: 'Cluster.Certificates.AwsHardwareCertificate',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.Certificates.AwsHardwareCertificate', props);
    return resource.getResponseField('Cluster.Certificates.AwsHardwareCertificate') as unknown as string;
  }

  public get manufacturerHardwareCertificate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DeleteCluster.Cluster.Certificates.ManufacturerHardwareCertificate'),
        outputPath: 'Cluster.Certificates.ManufacturerHardwareCertificate',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.Certificates.ManufacturerHardwareCertificate', props);
    return resource.getResponseField('Cluster.Certificates.ManufacturerHardwareCertificate') as unknown as string;
  }

  public get clusterCertificate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DeleteCluster.Cluster.Certificates.ClusterCertificate'),
        outputPath: 'Cluster.Certificates.ClusterCertificate',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.Certificates.ClusterCertificate', props);
    return resource.getResponseField('Cluster.Certificates.ClusterCertificate') as unknown as string;
  }

}

export class CloudHSMV2DeleteHsm extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmv2DeleteHsmRequest) {
    super(scope, id);
  }

  public get hsmId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteHsm',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DeleteHsm.HsmId'),
        outputPath: 'HsmId',
        parameters: {
          ClusterId: this.input.clusterId,
          HsmId: this.input.hsmId,
          EniId: this.input.eniId,
          EniIp: this.input.eniIp,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteHsm.HsmId', props);
    return resource.getResponseField('HsmId') as unknown as string;
  }

}

export class CloudHSMV2DescribeBackups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmv2DescribeBackupsRequest) {
    super(scope, id);
  }

  public get backups(): shapes.CloudHsmv2Backup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackups',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DescribeBackups.Backups'),
        outputPath: 'Backups',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Filters: this.input.filters,
          SortAscending: this.input.sortAscending,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackups.Backups', props);
    return resource.getResponseField('Backups') as unknown as shapes.CloudHsmv2Backup[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackups',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DescribeBackups.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Filters: this.input.filters,
          SortAscending: this.input.sortAscending,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudHSMV2DescribeClusters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmv2DescribeClustersRequest) {
    super(scope, id);
  }

  public get clusters(): shapes.CloudHsmv2Cluster[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusters',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DescribeClusters.Clusters'),
        outputPath: 'Clusters',
        parameters: {
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusters.Clusters', props);
    return resource.getResponseField('Clusters') as unknown as shapes.CloudHsmv2Cluster[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusters',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.DescribeClusters.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusters.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudHSMV2InitializeCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmv2InitializeClusterRequest) {
    super(scope, id);
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'initializeCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.InitializeCluster.State'),
        outputPath: 'State',
        parameters: {
          ClusterId: this.input.clusterId,
          SignedCert: this.input.signedCert,
          TrustAnchor: this.input.trustAnchor,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InitializeCluster.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get stateMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'initializeCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.InitializeCluster.StateMessage'),
        outputPath: 'StateMessage',
        parameters: {
          ClusterId: this.input.clusterId,
          SignedCert: this.input.signedCert,
          TrustAnchor: this.input.trustAnchor,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InitializeCluster.StateMessage', props);
    return resource.getResponseField('StateMessage') as unknown as string;
  }

}

export class CloudHSMV2ListTags extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmv2ListTagsRequest) {
    super(scope, id);
  }

  public get tagList(): shapes.CloudHsmv2Tag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTags',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.ListTags.TagList'),
        outputPath: 'TagList',
        parameters: {
          ResourceId: this.input.resourceId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTags.TagList', props);
    return resource.getResponseField('TagList') as unknown as shapes.CloudHsmv2Tag[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTags',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.ListTags.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ResourceId: this.input.resourceId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTags.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudHSMV2ModifyBackupAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmv2ModifyBackupAttributesRequest) {
    super(scope, id);
  }

  public get backup(): CloudHSMV2ModifyBackupAttributesBackup {
    return new CloudHSMV2ModifyBackupAttributesBackup(this, 'Backup', this.__resources, this.input);
  }

}

export class CloudHSMV2ModifyBackupAttributesBackup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmv2ModifyBackupAttributesRequest) {
    super(scope, id);
  }

  public get backupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyBackupAttributes',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.ModifyBackupAttributes.Backup.BackupId'),
        outputPath: 'Backup.BackupId',
        parameters: {
          BackupId: this.input.backupId,
          NeverExpires: this.input.neverExpires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyBackupAttributes.Backup.BackupId', props);
    return resource.getResponseField('Backup.BackupId') as unknown as string;
  }

  public get backupState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyBackupAttributes',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.ModifyBackupAttributes.Backup.BackupState'),
        outputPath: 'Backup.BackupState',
        parameters: {
          BackupId: this.input.backupId,
          NeverExpires: this.input.neverExpires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyBackupAttributes.Backup.BackupState', props);
    return resource.getResponseField('Backup.BackupState') as unknown as string;
  }

  public get clusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyBackupAttributes',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.ModifyBackupAttributes.Backup.ClusterId'),
        outputPath: 'Backup.ClusterId',
        parameters: {
          BackupId: this.input.backupId,
          NeverExpires: this.input.neverExpires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyBackupAttributes.Backup.ClusterId', props);
    return resource.getResponseField('Backup.ClusterId') as unknown as string;
  }

  public get createTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyBackupAttributes',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.ModifyBackupAttributes.Backup.CreateTimestamp'),
        outputPath: 'Backup.CreateTimestamp',
        parameters: {
          BackupId: this.input.backupId,
          NeverExpires: this.input.neverExpires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyBackupAttributes.Backup.CreateTimestamp', props);
    return resource.getResponseField('Backup.CreateTimestamp') as unknown as string;
  }

  public get copyTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyBackupAttributes',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.ModifyBackupAttributes.Backup.CopyTimestamp'),
        outputPath: 'Backup.CopyTimestamp',
        parameters: {
          BackupId: this.input.backupId,
          NeverExpires: this.input.neverExpires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyBackupAttributes.Backup.CopyTimestamp', props);
    return resource.getResponseField('Backup.CopyTimestamp') as unknown as string;
  }

  public get neverExpires(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyBackupAttributes',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.ModifyBackupAttributes.Backup.NeverExpires'),
        outputPath: 'Backup.NeverExpires',
        parameters: {
          BackupId: this.input.backupId,
          NeverExpires: this.input.neverExpires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyBackupAttributes.Backup.NeverExpires', props);
    return resource.getResponseField('Backup.NeverExpires') as unknown as boolean;
  }

  public get sourceRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyBackupAttributes',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.ModifyBackupAttributes.Backup.SourceRegion'),
        outputPath: 'Backup.SourceRegion',
        parameters: {
          BackupId: this.input.backupId,
          NeverExpires: this.input.neverExpires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyBackupAttributes.Backup.SourceRegion', props);
    return resource.getResponseField('Backup.SourceRegion') as unknown as string;
  }

  public get sourceBackup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyBackupAttributes',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.ModifyBackupAttributes.Backup.SourceBackup'),
        outputPath: 'Backup.SourceBackup',
        parameters: {
          BackupId: this.input.backupId,
          NeverExpires: this.input.neverExpires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyBackupAttributes.Backup.SourceBackup', props);
    return resource.getResponseField('Backup.SourceBackup') as unknown as string;
  }

  public get sourceCluster(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyBackupAttributes',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.ModifyBackupAttributes.Backup.SourceCluster'),
        outputPath: 'Backup.SourceCluster',
        parameters: {
          BackupId: this.input.backupId,
          NeverExpires: this.input.neverExpires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyBackupAttributes.Backup.SourceCluster', props);
    return resource.getResponseField('Backup.SourceCluster') as unknown as string;
  }

  public get deleteTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyBackupAttributes',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.ModifyBackupAttributes.Backup.DeleteTimestamp'),
        outputPath: 'Backup.DeleteTimestamp',
        parameters: {
          BackupId: this.input.backupId,
          NeverExpires: this.input.neverExpires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyBackupAttributes.Backup.DeleteTimestamp', props);
    return resource.getResponseField('Backup.DeleteTimestamp') as unknown as string;
  }

  public get tagList(): shapes.CloudHsmv2Tag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyBackupAttributes',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.ModifyBackupAttributes.Backup.TagList'),
        outputPath: 'Backup.TagList',
        parameters: {
          BackupId: this.input.backupId,
          NeverExpires: this.input.neverExpires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyBackupAttributes.Backup.TagList', props);
    return resource.getResponseField('Backup.TagList') as unknown as shapes.CloudHsmv2Tag[];
  }

}

export class CloudHSMV2ModifyCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmv2ModifyClusterRequest) {
    super(scope, id);
  }

  public get cluster(): CloudHSMV2ModifyClusterCluster {
    return new CloudHSMV2ModifyClusterCluster(this, 'Cluster', this.__resources, this.input);
  }

}

export class CloudHSMV2ModifyClusterCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmv2ModifyClusterRequest) {
    super(scope, id);
  }

  public get backupPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.ModifyCluster.Cluster.BackupPolicy'),
        outputPath: 'Cluster.BackupPolicy',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy.type,
            Value: this.input.backupRetentionPolicy.value,
          },
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCluster.Cluster.BackupPolicy', props);
    return resource.getResponseField('Cluster.BackupPolicy') as unknown as string;
  }

  public get backupRetentionPolicy(): CloudHSMV2ModifyClusterClusterBackupRetentionPolicy {
    return new CloudHSMV2ModifyClusterClusterBackupRetentionPolicy(this, 'BackupRetentionPolicy', this.__resources, this.input);
  }

  public get clusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.ModifyCluster.Cluster.ClusterId'),
        outputPath: 'Cluster.ClusterId',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy.type,
            Value: this.input.backupRetentionPolicy.value,
          },
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCluster.Cluster.ClusterId', props);
    return resource.getResponseField('Cluster.ClusterId') as unknown as string;
  }

  public get createTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.ModifyCluster.Cluster.CreateTimestamp'),
        outputPath: 'Cluster.CreateTimestamp',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy.type,
            Value: this.input.backupRetentionPolicy.value,
          },
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCluster.Cluster.CreateTimestamp', props);
    return resource.getResponseField('Cluster.CreateTimestamp') as unknown as string;
  }

  public get hsms(): shapes.CloudHsmv2Hsm[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.ModifyCluster.Cluster.Hsms'),
        outputPath: 'Cluster.Hsms',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy.type,
            Value: this.input.backupRetentionPolicy.value,
          },
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCluster.Cluster.Hsms', props);
    return resource.getResponseField('Cluster.Hsms') as unknown as shapes.CloudHsmv2Hsm[];
  }

  public get hsmType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.ModifyCluster.Cluster.HsmType'),
        outputPath: 'Cluster.HsmType',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy.type,
            Value: this.input.backupRetentionPolicy.value,
          },
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCluster.Cluster.HsmType', props);
    return resource.getResponseField('Cluster.HsmType') as unknown as string;
  }

  public get preCoPassword(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.ModifyCluster.Cluster.PreCoPassword'),
        outputPath: 'Cluster.PreCoPassword',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy.type,
            Value: this.input.backupRetentionPolicy.value,
          },
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCluster.Cluster.PreCoPassword', props);
    return resource.getResponseField('Cluster.PreCoPassword') as unknown as string;
  }

  public get securityGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.ModifyCluster.Cluster.SecurityGroup'),
        outputPath: 'Cluster.SecurityGroup',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy.type,
            Value: this.input.backupRetentionPolicy.value,
          },
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCluster.Cluster.SecurityGroup', props);
    return resource.getResponseField('Cluster.SecurityGroup') as unknown as string;
  }

  public get sourceBackupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.ModifyCluster.Cluster.SourceBackupId'),
        outputPath: 'Cluster.SourceBackupId',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy.type,
            Value: this.input.backupRetentionPolicy.value,
          },
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCluster.Cluster.SourceBackupId', props);
    return resource.getResponseField('Cluster.SourceBackupId') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.ModifyCluster.Cluster.State'),
        outputPath: 'Cluster.State',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy.type,
            Value: this.input.backupRetentionPolicy.value,
          },
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCluster.Cluster.State', props);
    return resource.getResponseField('Cluster.State') as unknown as string;
  }

  public get stateMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.ModifyCluster.Cluster.StateMessage'),
        outputPath: 'Cluster.StateMessage',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy.type,
            Value: this.input.backupRetentionPolicy.value,
          },
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCluster.Cluster.StateMessage', props);
    return resource.getResponseField('Cluster.StateMessage') as unknown as string;
  }

  public get subnetMapping(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.ModifyCluster.Cluster.SubnetMapping'),
        outputPath: 'Cluster.SubnetMapping',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy.type,
            Value: this.input.backupRetentionPolicy.value,
          },
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCluster.Cluster.SubnetMapping', props);
    return resource.getResponseField('Cluster.SubnetMapping') as unknown as Record<string, string>;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.ModifyCluster.Cluster.VpcId'),
        outputPath: 'Cluster.VpcId',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy.type,
            Value: this.input.backupRetentionPolicy.value,
          },
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCluster.Cluster.VpcId', props);
    return resource.getResponseField('Cluster.VpcId') as unknown as string;
  }

  public get certificates(): CloudHSMV2ModifyClusterClusterCertificates {
    return new CloudHSMV2ModifyClusterClusterCertificates(this, 'Certificates', this.__resources, this.input);
  }

  public get tagList(): shapes.CloudHsmv2Tag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.ModifyCluster.Cluster.TagList'),
        outputPath: 'Cluster.TagList',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy.type,
            Value: this.input.backupRetentionPolicy.value,
          },
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCluster.Cluster.TagList', props);
    return resource.getResponseField('Cluster.TagList') as unknown as shapes.CloudHsmv2Tag[];
  }

}

export class CloudHSMV2ModifyClusterClusterBackupRetentionPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmv2ModifyClusterRequest) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.ModifyCluster.Cluster.BackupRetentionPolicy.Type'),
        outputPath: 'Cluster.BackupRetentionPolicy.Type',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy.type,
            Value: this.input.backupRetentionPolicy.value,
          },
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCluster.Cluster.BackupRetentionPolicy.Type', props);
    return resource.getResponseField('Cluster.BackupRetentionPolicy.Type') as unknown as string;
  }

  public get value(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.ModifyCluster.Cluster.BackupRetentionPolicy.Value'),
        outputPath: 'Cluster.BackupRetentionPolicy.Value',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy.type,
            Value: this.input.backupRetentionPolicy.value,
          },
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCluster.Cluster.BackupRetentionPolicy.Value', props);
    return resource.getResponseField('Cluster.BackupRetentionPolicy.Value') as unknown as string;
  }

}

export class CloudHSMV2ModifyClusterClusterCertificates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmv2ModifyClusterRequest) {
    super(scope, id);
  }

  public get clusterCsr(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.ModifyCluster.Cluster.Certificates.ClusterCsr'),
        outputPath: 'Cluster.Certificates.ClusterCsr',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy.type,
            Value: this.input.backupRetentionPolicy.value,
          },
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCluster.Cluster.Certificates.ClusterCsr', props);
    return resource.getResponseField('Cluster.Certificates.ClusterCsr') as unknown as string;
  }

  public get hsmCertificate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.ModifyCluster.Cluster.Certificates.HsmCertificate'),
        outputPath: 'Cluster.Certificates.HsmCertificate',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy.type,
            Value: this.input.backupRetentionPolicy.value,
          },
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCluster.Cluster.Certificates.HsmCertificate', props);
    return resource.getResponseField('Cluster.Certificates.HsmCertificate') as unknown as string;
  }

  public get awsHardwareCertificate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.ModifyCluster.Cluster.Certificates.AwsHardwareCertificate'),
        outputPath: 'Cluster.Certificates.AwsHardwareCertificate',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy.type,
            Value: this.input.backupRetentionPolicy.value,
          },
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCluster.Cluster.Certificates.AwsHardwareCertificate', props);
    return resource.getResponseField('Cluster.Certificates.AwsHardwareCertificate') as unknown as string;
  }

  public get manufacturerHardwareCertificate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.ModifyCluster.Cluster.Certificates.ManufacturerHardwareCertificate'),
        outputPath: 'Cluster.Certificates.ManufacturerHardwareCertificate',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy.type,
            Value: this.input.backupRetentionPolicy.value,
          },
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCluster.Cluster.Certificates.ManufacturerHardwareCertificate', props);
    return resource.getResponseField('Cluster.Certificates.ManufacturerHardwareCertificate') as unknown as string;
  }

  public get clusterCertificate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCluster',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.ModifyCluster.Cluster.Certificates.ClusterCertificate'),
        outputPath: 'Cluster.Certificates.ClusterCertificate',
        parameters: {
          BackupRetentionPolicy: {
            Type: this.input.backupRetentionPolicy.type,
            Value: this.input.backupRetentionPolicy.value,
          },
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCluster.Cluster.Certificates.ClusterCertificate', props);
    return resource.getResponseField('Cluster.Certificates.ClusterCertificate') as unknown as string;
  }

}

export class CloudHSMV2RestoreBackup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmv2RestoreBackupRequest) {
    super(scope, id);
  }

  public get backup(): CloudHSMV2RestoreBackupBackup {
    return new CloudHSMV2RestoreBackupBackup(this, 'Backup', this.__resources, this.input);
  }

}

export class CloudHSMV2RestoreBackupBackup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudHsmv2RestoreBackupRequest) {
    super(scope, id);
  }

  public get backupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreBackup',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.RestoreBackup.Backup.BackupId'),
        outputPath: 'Backup.BackupId',
        parameters: {
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreBackup.Backup.BackupId', props);
    return resource.getResponseField('Backup.BackupId') as unknown as string;
  }

  public get backupState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreBackup',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.RestoreBackup.Backup.BackupState'),
        outputPath: 'Backup.BackupState',
        parameters: {
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreBackup.Backup.BackupState', props);
    return resource.getResponseField('Backup.BackupState') as unknown as string;
  }

  public get clusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreBackup',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.RestoreBackup.Backup.ClusterId'),
        outputPath: 'Backup.ClusterId',
        parameters: {
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreBackup.Backup.ClusterId', props);
    return resource.getResponseField('Backup.ClusterId') as unknown as string;
  }

  public get createTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreBackup',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.RestoreBackup.Backup.CreateTimestamp'),
        outputPath: 'Backup.CreateTimestamp',
        parameters: {
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreBackup.Backup.CreateTimestamp', props);
    return resource.getResponseField('Backup.CreateTimestamp') as unknown as string;
  }

  public get copyTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreBackup',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.RestoreBackup.Backup.CopyTimestamp'),
        outputPath: 'Backup.CopyTimestamp',
        parameters: {
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreBackup.Backup.CopyTimestamp', props);
    return resource.getResponseField('Backup.CopyTimestamp') as unknown as string;
  }

  public get neverExpires(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreBackup',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.RestoreBackup.Backup.NeverExpires'),
        outputPath: 'Backup.NeverExpires',
        parameters: {
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreBackup.Backup.NeverExpires', props);
    return resource.getResponseField('Backup.NeverExpires') as unknown as boolean;
  }

  public get sourceRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreBackup',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.RestoreBackup.Backup.SourceRegion'),
        outputPath: 'Backup.SourceRegion',
        parameters: {
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreBackup.Backup.SourceRegion', props);
    return resource.getResponseField('Backup.SourceRegion') as unknown as string;
  }

  public get sourceBackup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreBackup',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.RestoreBackup.Backup.SourceBackup'),
        outputPath: 'Backup.SourceBackup',
        parameters: {
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreBackup.Backup.SourceBackup', props);
    return resource.getResponseField('Backup.SourceBackup') as unknown as string;
  }

  public get sourceCluster(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreBackup',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.RestoreBackup.Backup.SourceCluster'),
        outputPath: 'Backup.SourceCluster',
        parameters: {
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreBackup.Backup.SourceCluster', props);
    return resource.getResponseField('Backup.SourceCluster') as unknown as string;
  }

  public get deleteTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreBackup',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.RestoreBackup.Backup.DeleteTimestamp'),
        outputPath: 'Backup.DeleteTimestamp',
        parameters: {
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreBackup.Backup.DeleteTimestamp', props);
    return resource.getResponseField('Backup.DeleteTimestamp') as unknown as string;
  }

  public get tagList(): shapes.CloudHsmv2Tag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreBackup',
        service: 'CloudHSMV2',
        physicalResourceId: cr.PhysicalResourceId.of('CloudHSMV2.RestoreBackup.Backup.TagList'),
        outputPath: 'Backup.TagList',
        parameters: {
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreBackup.Backup.TagList', props);
    return resource.getResponseField('Backup.TagList') as unknown as shapes.CloudHsmv2Tag[];
  }

}

