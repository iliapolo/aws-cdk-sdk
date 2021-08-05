import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class CloudHsmv2Client extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public copyBackupToRegion(input: shapes.CloudHsmv2CopyBackupToRegionRequest): CloudHSMV2ResponsesCopyBackupToRegion {
    return new CloudHSMV2ResponsesCopyBackupToRegion(this, this.__resources, input);
  }

  public createCluster(input: shapes.CloudHsmv2CreateClusterRequest): CloudHSMV2ResponsesCreateCluster {
    return new CloudHSMV2ResponsesCreateCluster(this, this.__resources, input);
  }

  public createHsm(input: shapes.CloudHsmv2CreateHsmRequest): CloudHSMV2ResponsesCreateHsm {
    return new CloudHSMV2ResponsesCreateHsm(this, this.__resources, input);
  }

  public deleteBackup(input: shapes.CloudHsmv2DeleteBackupRequest): CloudHSMV2ResponsesDeleteBackup {
    return new CloudHSMV2ResponsesDeleteBackup(this, this.__resources, input);
  }

  public deleteCluster(input: shapes.CloudHsmv2DeleteClusterRequest): CloudHSMV2ResponsesDeleteCluster {
    return new CloudHSMV2ResponsesDeleteCluster(this, this.__resources, input);
  }

  public deleteHsm(input: shapes.CloudHsmv2DeleteHsmRequest): CloudHSMV2ResponsesDeleteHsm {
    return new CloudHSMV2ResponsesDeleteHsm(this, this.__resources, input);
  }

  public describeBackups(input: shapes.CloudHsmv2DescribeBackupsRequest): CloudHSMV2ResponsesDescribeBackups {
    return new CloudHSMV2ResponsesDescribeBackups(this, this.__resources, input);
  }

  public describeClusters(input: shapes.CloudHsmv2DescribeClustersRequest): CloudHSMV2ResponsesDescribeClusters {
    return new CloudHSMV2ResponsesDescribeClusters(this, this.__resources, input);
  }

  public initializeCluster(input: shapes.CloudHsmv2InitializeClusterRequest): CloudHSMV2ResponsesInitializeCluster {
    return new CloudHSMV2ResponsesInitializeCluster(this, this.__resources, input);
  }

  public listTags(input: shapes.CloudHsmv2ListTagsRequest): CloudHSMV2ResponsesListTags {
    return new CloudHSMV2ResponsesListTags(this, this.__resources, input);
  }

  public modifyBackupAttributes(input: shapes.CloudHsmv2ModifyBackupAttributesRequest): CloudHSMV2ResponsesModifyBackupAttributes {
    return new CloudHSMV2ResponsesModifyBackupAttributes(this, this.__resources, input);
  }

  public modifyCluster(input: shapes.CloudHsmv2ModifyClusterRequest): CloudHSMV2ResponsesModifyCluster {
    return new CloudHSMV2ResponsesModifyCluster(this, this.__resources, input);
  }

  public restoreBackup(input: shapes.CloudHsmv2RestoreBackupRequest): CloudHSMV2ResponsesRestoreBackup {
    return new CloudHSMV2ResponsesRestoreBackup(this, this.__resources, input);
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

export class CloudHSMV2ResponsesCopyBackupToRegion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmv2CopyBackupToRegionRequest) {
  }

  public get destinationBackup(): CloudHSMV2ResponsesCopyBackupToRegionDestinationBackup {
    return new CloudHSMV2ResponsesCopyBackupToRegionDestinationBackup(this.__scope, this.__resources, this.__input);
  }

}

export class CloudHSMV2ResponsesCopyBackupToRegionDestinationBackup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmv2CopyBackupToRegionRequest) {
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
          DestinationRegion: this.__input.destinationRegion,
          BackupId: this.__input.backupId,
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackupToRegion.DestinationBackup.CreateTimestamp', props);
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
          DestinationRegion: this.__input.destinationRegion,
          BackupId: this.__input.backupId,
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackupToRegion.DestinationBackup.SourceRegion', props);
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
          DestinationRegion: this.__input.destinationRegion,
          BackupId: this.__input.backupId,
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackupToRegion.DestinationBackup.SourceBackup', props);
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
          DestinationRegion: this.__input.destinationRegion,
          BackupId: this.__input.backupId,
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackupToRegion.DestinationBackup.SourceCluster', props);
    return resource.getResponseField('DestinationBackup.SourceCluster') as unknown as string;
  }

}

export class CloudHSMV2ResponsesCreateCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmv2CreateClusterRequest) {
  }

  public get cluster(): CloudHSMV2ResponsesCreateClusterCluster {
    return new CloudHSMV2ResponsesCreateClusterCluster(this.__scope, this.__resources, this.__input);
  }

}

export class CloudHSMV2ResponsesCreateClusterCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmv2CreateClusterRequest) {
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
            Type: this.__input.backupRetentionPolicy?.type,
            Value: this.__input.backupRetentionPolicy?.value,
          },
          HsmType: this.__input.hsmType,
          SourceBackupId: this.__input.sourceBackupId,
          SubnetIds: this.__input.subnetIds,
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.BackupPolicy', props);
    return resource.getResponseField('Cluster.BackupPolicy') as unknown as string;
  }

  public get backupRetentionPolicy(): CloudHSMV2ResponsesCreateClusterClusterBackupRetentionPolicy {
    return new CloudHSMV2ResponsesCreateClusterClusterBackupRetentionPolicy(this.__scope, this.__resources, this.__input);
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
            Type: this.__input.backupRetentionPolicy?.type,
            Value: this.__input.backupRetentionPolicy?.value,
          },
          HsmType: this.__input.hsmType,
          SourceBackupId: this.__input.sourceBackupId,
          SubnetIds: this.__input.subnetIds,
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.ClusterId', props);
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
            Type: this.__input.backupRetentionPolicy?.type,
            Value: this.__input.backupRetentionPolicy?.value,
          },
          HsmType: this.__input.hsmType,
          SourceBackupId: this.__input.sourceBackupId,
          SubnetIds: this.__input.subnetIds,
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.CreateTimestamp', props);
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
            Type: this.__input.backupRetentionPolicy?.type,
            Value: this.__input.backupRetentionPolicy?.value,
          },
          HsmType: this.__input.hsmType,
          SourceBackupId: this.__input.sourceBackupId,
          SubnetIds: this.__input.subnetIds,
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.Hsms', props);
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
            Type: this.__input.backupRetentionPolicy?.type,
            Value: this.__input.backupRetentionPolicy?.value,
          },
          HsmType: this.__input.hsmType,
          SourceBackupId: this.__input.sourceBackupId,
          SubnetIds: this.__input.subnetIds,
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.HsmType', props);
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
            Type: this.__input.backupRetentionPolicy?.type,
            Value: this.__input.backupRetentionPolicy?.value,
          },
          HsmType: this.__input.hsmType,
          SourceBackupId: this.__input.sourceBackupId,
          SubnetIds: this.__input.subnetIds,
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.PreCoPassword', props);
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
            Type: this.__input.backupRetentionPolicy?.type,
            Value: this.__input.backupRetentionPolicy?.value,
          },
          HsmType: this.__input.hsmType,
          SourceBackupId: this.__input.sourceBackupId,
          SubnetIds: this.__input.subnetIds,
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.SecurityGroup', props);
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
            Type: this.__input.backupRetentionPolicy?.type,
            Value: this.__input.backupRetentionPolicy?.value,
          },
          HsmType: this.__input.hsmType,
          SourceBackupId: this.__input.sourceBackupId,
          SubnetIds: this.__input.subnetIds,
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.SourceBackupId', props);
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
            Type: this.__input.backupRetentionPolicy?.type,
            Value: this.__input.backupRetentionPolicy?.value,
          },
          HsmType: this.__input.hsmType,
          SourceBackupId: this.__input.sourceBackupId,
          SubnetIds: this.__input.subnetIds,
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.State', props);
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
            Type: this.__input.backupRetentionPolicy?.type,
            Value: this.__input.backupRetentionPolicy?.value,
          },
          HsmType: this.__input.hsmType,
          SourceBackupId: this.__input.sourceBackupId,
          SubnetIds: this.__input.subnetIds,
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.StateMessage', props);
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
            Type: this.__input.backupRetentionPolicy?.type,
            Value: this.__input.backupRetentionPolicy?.value,
          },
          HsmType: this.__input.hsmType,
          SourceBackupId: this.__input.sourceBackupId,
          SubnetIds: this.__input.subnetIds,
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.SubnetMapping', props);
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
            Type: this.__input.backupRetentionPolicy?.type,
            Value: this.__input.backupRetentionPolicy?.value,
          },
          HsmType: this.__input.hsmType,
          SourceBackupId: this.__input.sourceBackupId,
          SubnetIds: this.__input.subnetIds,
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.VpcId', props);
    return resource.getResponseField('Cluster.VpcId') as unknown as string;
  }

  public get certificates(): CloudHSMV2ResponsesCreateClusterClusterCertificates {
    return new CloudHSMV2ResponsesCreateClusterClusterCertificates(this.__scope, this.__resources, this.__input);
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
            Type: this.__input.backupRetentionPolicy?.type,
            Value: this.__input.backupRetentionPolicy?.value,
          },
          HsmType: this.__input.hsmType,
          SourceBackupId: this.__input.sourceBackupId,
          SubnetIds: this.__input.subnetIds,
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.TagList', props);
    return resource.getResponseField('Cluster.TagList') as unknown as shapes.CloudHsmv2Tag[];
  }

}

export class CloudHSMV2ResponsesCreateClusterClusterBackupRetentionPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmv2CreateClusterRequest) {
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
            Type: this.__input.backupRetentionPolicy?.type,
            Value: this.__input.backupRetentionPolicy?.value,
          },
          HsmType: this.__input.hsmType,
          SourceBackupId: this.__input.sourceBackupId,
          SubnetIds: this.__input.subnetIds,
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.BackupRetentionPolicy.Type', props);
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
            Type: this.__input.backupRetentionPolicy?.type,
            Value: this.__input.backupRetentionPolicy?.value,
          },
          HsmType: this.__input.hsmType,
          SourceBackupId: this.__input.sourceBackupId,
          SubnetIds: this.__input.subnetIds,
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.BackupRetentionPolicy.Value', props);
    return resource.getResponseField('Cluster.BackupRetentionPolicy.Value') as unknown as string;
  }

}

export class CloudHSMV2ResponsesCreateClusterClusterCertificates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmv2CreateClusterRequest) {
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
            Type: this.__input.backupRetentionPolicy?.type,
            Value: this.__input.backupRetentionPolicy?.value,
          },
          HsmType: this.__input.hsmType,
          SourceBackupId: this.__input.sourceBackupId,
          SubnetIds: this.__input.subnetIds,
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.Certificates.ClusterCsr', props);
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
            Type: this.__input.backupRetentionPolicy?.type,
            Value: this.__input.backupRetentionPolicy?.value,
          },
          HsmType: this.__input.hsmType,
          SourceBackupId: this.__input.sourceBackupId,
          SubnetIds: this.__input.subnetIds,
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.Certificates.HsmCertificate', props);
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
            Type: this.__input.backupRetentionPolicy?.type,
            Value: this.__input.backupRetentionPolicy?.value,
          },
          HsmType: this.__input.hsmType,
          SourceBackupId: this.__input.sourceBackupId,
          SubnetIds: this.__input.subnetIds,
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.Certificates.AwsHardwareCertificate', props);
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
            Type: this.__input.backupRetentionPolicy?.type,
            Value: this.__input.backupRetentionPolicy?.value,
          },
          HsmType: this.__input.hsmType,
          SourceBackupId: this.__input.sourceBackupId,
          SubnetIds: this.__input.subnetIds,
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.Certificates.ManufacturerHardwareCertificate', props);
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
            Type: this.__input.backupRetentionPolicy?.type,
            Value: this.__input.backupRetentionPolicy?.value,
          },
          HsmType: this.__input.hsmType,
          SourceBackupId: this.__input.sourceBackupId,
          SubnetIds: this.__input.subnetIds,
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.Certificates.ClusterCertificate', props);
    return resource.getResponseField('Cluster.Certificates.ClusterCertificate') as unknown as string;
  }

}

export class CloudHSMV2ResponsesCreateHsm {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmv2CreateHsmRequest) {
  }

  public get hsm(): CloudHSMV2ResponsesCreateHsmHsm {
    return new CloudHSMV2ResponsesCreateHsmHsm(this.__scope, this.__resources, this.__input);
  }

}

export class CloudHSMV2ResponsesCreateHsmHsm {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmv2CreateHsmRequest) {
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
          ClusterId: this.__input.clusterId,
          AvailabilityZone: this.__input.availabilityZone,
          IpAddress: this.__input.ipAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHsm.Hsm.AvailabilityZone', props);
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
          ClusterId: this.__input.clusterId,
          AvailabilityZone: this.__input.availabilityZone,
          IpAddress: this.__input.ipAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHsm.Hsm.ClusterId', props);
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
          ClusterId: this.__input.clusterId,
          AvailabilityZone: this.__input.availabilityZone,
          IpAddress: this.__input.ipAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHsm.Hsm.SubnetId', props);
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
          ClusterId: this.__input.clusterId,
          AvailabilityZone: this.__input.availabilityZone,
          IpAddress: this.__input.ipAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHsm.Hsm.EniId', props);
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
          ClusterId: this.__input.clusterId,
          AvailabilityZone: this.__input.availabilityZone,
          IpAddress: this.__input.ipAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHsm.Hsm.EniIp', props);
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
          ClusterId: this.__input.clusterId,
          AvailabilityZone: this.__input.availabilityZone,
          IpAddress: this.__input.ipAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHsm.Hsm.HsmId', props);
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
          ClusterId: this.__input.clusterId,
          AvailabilityZone: this.__input.availabilityZone,
          IpAddress: this.__input.ipAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHsm.Hsm.State', props);
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
          ClusterId: this.__input.clusterId,
          AvailabilityZone: this.__input.availabilityZone,
          IpAddress: this.__input.ipAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHsm.Hsm.StateMessage', props);
    return resource.getResponseField('Hsm.StateMessage') as unknown as string;
  }

}

export class CloudHSMV2ResponsesDeleteBackup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmv2DeleteBackupRequest) {
  }

  public get backup(): CloudHSMV2ResponsesDeleteBackupBackup {
    return new CloudHSMV2ResponsesDeleteBackupBackup(this.__scope, this.__resources, this.__input);
  }

}

export class CloudHSMV2ResponsesDeleteBackupBackup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmv2DeleteBackupRequest) {
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
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.Backup.BackupId', props);
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
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.Backup.BackupState', props);
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
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.Backup.ClusterId', props);
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
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.Backup.CreateTimestamp', props);
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
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.Backup.CopyTimestamp', props);
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
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.Backup.NeverExpires', props);
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
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.Backup.SourceRegion', props);
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
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.Backup.SourceBackup', props);
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
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.Backup.SourceCluster', props);
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
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.Backup.DeleteTimestamp', props);
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
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.Backup.TagList', props);
    return resource.getResponseField('Backup.TagList') as unknown as shapes.CloudHsmv2Tag[];
  }

}

export class CloudHSMV2ResponsesDeleteCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmv2DeleteClusterRequest) {
  }

  public get cluster(): CloudHSMV2ResponsesDeleteClusterCluster {
    return new CloudHSMV2ResponsesDeleteClusterCluster(this.__scope, this.__resources, this.__input);
  }

}

export class CloudHSMV2ResponsesDeleteClusterCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmv2DeleteClusterRequest) {
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.BackupPolicy', props);
    return resource.getResponseField('Cluster.BackupPolicy') as unknown as string;
  }

  public get backupRetentionPolicy(): CloudHSMV2ResponsesDeleteClusterClusterBackupRetentionPolicy {
    return new CloudHSMV2ResponsesDeleteClusterClusterBackupRetentionPolicy(this.__scope, this.__resources, this.__input);
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.ClusterId', props);
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.CreateTimestamp', props);
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.Hsms', props);
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.HsmType', props);
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.PreCoPassword', props);
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.SecurityGroup', props);
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.SourceBackupId', props);
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.State', props);
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.StateMessage', props);
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.SubnetMapping', props);
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.VpcId', props);
    return resource.getResponseField('Cluster.VpcId') as unknown as string;
  }

  public get certificates(): CloudHSMV2ResponsesDeleteClusterClusterCertificates {
    return new CloudHSMV2ResponsesDeleteClusterClusterCertificates(this.__scope, this.__resources, this.__input);
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.TagList', props);
    return resource.getResponseField('Cluster.TagList') as unknown as shapes.CloudHsmv2Tag[];
  }

}

export class CloudHSMV2ResponsesDeleteClusterClusterBackupRetentionPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmv2DeleteClusterRequest) {
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.BackupRetentionPolicy.Type', props);
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.BackupRetentionPolicy.Value', props);
    return resource.getResponseField('Cluster.BackupRetentionPolicy.Value') as unknown as string;
  }

}

export class CloudHSMV2ResponsesDeleteClusterClusterCertificates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmv2DeleteClusterRequest) {
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.Certificates.ClusterCsr', props);
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.Certificates.HsmCertificate', props);
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.Certificates.AwsHardwareCertificate', props);
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.Certificates.ManufacturerHardwareCertificate', props);
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.Certificates.ClusterCertificate', props);
    return resource.getResponseField('Cluster.Certificates.ClusterCertificate') as unknown as string;
  }

}

export class CloudHSMV2ResponsesDeleteHsm {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmv2DeleteHsmRequest) {
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
          ClusterId: this.__input.clusterId,
          HsmId: this.__input.hsmId,
          EniId: this.__input.eniId,
          EniIp: this.__input.eniIp,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteHsm.HsmId', props);
    return resource.getResponseField('HsmId') as unknown as string;
  }

}

export class CloudHSMV2ResponsesDescribeBackups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmv2DescribeBackupsRequest) {
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Filters: this.__input.filters,
          SortAscending: this.__input.sortAscending,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackups.Backups', props);
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Filters: this.__input.filters,
          SortAscending: this.__input.sortAscending,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudHSMV2ResponsesDescribeClusters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmv2DescribeClustersRequest) {
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
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusters.Clusters', props);
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
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusters.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudHSMV2ResponsesInitializeCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmv2InitializeClusterRequest) {
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
          ClusterId: this.__input.clusterId,
          SignedCert: this.__input.signedCert,
          TrustAnchor: this.__input.trustAnchor,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InitializeCluster.State', props);
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
          ClusterId: this.__input.clusterId,
          SignedCert: this.__input.signedCert,
          TrustAnchor: this.__input.trustAnchor,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InitializeCluster.StateMessage', props);
    return resource.getResponseField('StateMessage') as unknown as string;
  }

}

export class CloudHSMV2ResponsesListTags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmv2ListTagsRequest) {
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
          ResourceId: this.__input.resourceId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTags.TagList', props);
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
          ResourceId: this.__input.resourceId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTags.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudHSMV2ResponsesModifyBackupAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmv2ModifyBackupAttributesRequest) {
  }

  public get backup(): CloudHSMV2ResponsesModifyBackupAttributesBackup {
    return new CloudHSMV2ResponsesModifyBackupAttributesBackup(this.__scope, this.__resources, this.__input);
  }

}

export class CloudHSMV2ResponsesModifyBackupAttributesBackup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmv2ModifyBackupAttributesRequest) {
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
          BackupId: this.__input.backupId,
          NeverExpires: this.__input.neverExpires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyBackupAttributes.Backup.BackupId', props);
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
          BackupId: this.__input.backupId,
          NeverExpires: this.__input.neverExpires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyBackupAttributes.Backup.BackupState', props);
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
          BackupId: this.__input.backupId,
          NeverExpires: this.__input.neverExpires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyBackupAttributes.Backup.ClusterId', props);
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
          BackupId: this.__input.backupId,
          NeverExpires: this.__input.neverExpires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyBackupAttributes.Backup.CreateTimestamp', props);
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
          BackupId: this.__input.backupId,
          NeverExpires: this.__input.neverExpires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyBackupAttributes.Backup.CopyTimestamp', props);
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
          BackupId: this.__input.backupId,
          NeverExpires: this.__input.neverExpires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyBackupAttributes.Backup.NeverExpires', props);
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
          BackupId: this.__input.backupId,
          NeverExpires: this.__input.neverExpires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyBackupAttributes.Backup.SourceRegion', props);
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
          BackupId: this.__input.backupId,
          NeverExpires: this.__input.neverExpires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyBackupAttributes.Backup.SourceBackup', props);
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
          BackupId: this.__input.backupId,
          NeverExpires: this.__input.neverExpires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyBackupAttributes.Backup.SourceCluster', props);
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
          BackupId: this.__input.backupId,
          NeverExpires: this.__input.neverExpires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyBackupAttributes.Backup.DeleteTimestamp', props);
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
          BackupId: this.__input.backupId,
          NeverExpires: this.__input.neverExpires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyBackupAttributes.Backup.TagList', props);
    return resource.getResponseField('Backup.TagList') as unknown as shapes.CloudHsmv2Tag[];
  }

}

export class CloudHSMV2ResponsesModifyCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmv2ModifyClusterRequest) {
  }

  public get cluster(): CloudHSMV2ResponsesModifyClusterCluster {
    return new CloudHSMV2ResponsesModifyClusterCluster(this.__scope, this.__resources, this.__input);
  }

}

export class CloudHSMV2ResponsesModifyClusterCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmv2ModifyClusterRequest) {
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
            Type: this.__input.backupRetentionPolicy.type,
            Value: this.__input.backupRetentionPolicy.value,
          },
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCluster.Cluster.BackupPolicy', props);
    return resource.getResponseField('Cluster.BackupPolicy') as unknown as string;
  }

  public get backupRetentionPolicy(): CloudHSMV2ResponsesModifyClusterClusterBackupRetentionPolicy {
    return new CloudHSMV2ResponsesModifyClusterClusterBackupRetentionPolicy(this.__scope, this.__resources, this.__input);
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
            Type: this.__input.backupRetentionPolicy.type,
            Value: this.__input.backupRetentionPolicy.value,
          },
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCluster.Cluster.ClusterId', props);
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
            Type: this.__input.backupRetentionPolicy.type,
            Value: this.__input.backupRetentionPolicy.value,
          },
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCluster.Cluster.CreateTimestamp', props);
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
            Type: this.__input.backupRetentionPolicy.type,
            Value: this.__input.backupRetentionPolicy.value,
          },
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCluster.Cluster.Hsms', props);
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
            Type: this.__input.backupRetentionPolicy.type,
            Value: this.__input.backupRetentionPolicy.value,
          },
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCluster.Cluster.HsmType', props);
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
            Type: this.__input.backupRetentionPolicy.type,
            Value: this.__input.backupRetentionPolicy.value,
          },
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCluster.Cluster.PreCoPassword', props);
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
            Type: this.__input.backupRetentionPolicy.type,
            Value: this.__input.backupRetentionPolicy.value,
          },
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCluster.Cluster.SecurityGroup', props);
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
            Type: this.__input.backupRetentionPolicy.type,
            Value: this.__input.backupRetentionPolicy.value,
          },
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCluster.Cluster.SourceBackupId', props);
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
            Type: this.__input.backupRetentionPolicy.type,
            Value: this.__input.backupRetentionPolicy.value,
          },
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCluster.Cluster.State', props);
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
            Type: this.__input.backupRetentionPolicy.type,
            Value: this.__input.backupRetentionPolicy.value,
          },
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCluster.Cluster.StateMessage', props);
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
            Type: this.__input.backupRetentionPolicy.type,
            Value: this.__input.backupRetentionPolicy.value,
          },
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCluster.Cluster.SubnetMapping', props);
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
            Type: this.__input.backupRetentionPolicy.type,
            Value: this.__input.backupRetentionPolicy.value,
          },
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCluster.Cluster.VpcId', props);
    return resource.getResponseField('Cluster.VpcId') as unknown as string;
  }

  public get certificates(): CloudHSMV2ResponsesModifyClusterClusterCertificates {
    return new CloudHSMV2ResponsesModifyClusterClusterCertificates(this.__scope, this.__resources, this.__input);
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
            Type: this.__input.backupRetentionPolicy.type,
            Value: this.__input.backupRetentionPolicy.value,
          },
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCluster.Cluster.TagList', props);
    return resource.getResponseField('Cluster.TagList') as unknown as shapes.CloudHsmv2Tag[];
  }

}

export class CloudHSMV2ResponsesModifyClusterClusterBackupRetentionPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmv2ModifyClusterRequest) {
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
            Type: this.__input.backupRetentionPolicy.type,
            Value: this.__input.backupRetentionPolicy.value,
          },
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCluster.Cluster.BackupRetentionPolicy.Type', props);
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
            Type: this.__input.backupRetentionPolicy.type,
            Value: this.__input.backupRetentionPolicy.value,
          },
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCluster.Cluster.BackupRetentionPolicy.Value', props);
    return resource.getResponseField('Cluster.BackupRetentionPolicy.Value') as unknown as string;
  }

}

export class CloudHSMV2ResponsesModifyClusterClusterCertificates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmv2ModifyClusterRequest) {
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
            Type: this.__input.backupRetentionPolicy.type,
            Value: this.__input.backupRetentionPolicy.value,
          },
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCluster.Cluster.Certificates.ClusterCsr', props);
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
            Type: this.__input.backupRetentionPolicy.type,
            Value: this.__input.backupRetentionPolicy.value,
          },
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCluster.Cluster.Certificates.HsmCertificate', props);
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
            Type: this.__input.backupRetentionPolicy.type,
            Value: this.__input.backupRetentionPolicy.value,
          },
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCluster.Cluster.Certificates.AwsHardwareCertificate', props);
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
            Type: this.__input.backupRetentionPolicy.type,
            Value: this.__input.backupRetentionPolicy.value,
          },
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCluster.Cluster.Certificates.ManufacturerHardwareCertificate', props);
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
            Type: this.__input.backupRetentionPolicy.type,
            Value: this.__input.backupRetentionPolicy.value,
          },
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCluster.Cluster.Certificates.ClusterCertificate', props);
    return resource.getResponseField('Cluster.Certificates.ClusterCertificate') as unknown as string;
  }

}

export class CloudHSMV2ResponsesRestoreBackup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmv2RestoreBackupRequest) {
  }

  public get backup(): CloudHSMV2ResponsesRestoreBackupBackup {
    return new CloudHSMV2ResponsesRestoreBackupBackup(this.__scope, this.__resources, this.__input);
  }

}

export class CloudHSMV2ResponsesRestoreBackupBackup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudHsmv2RestoreBackupRequest) {
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
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreBackup.Backup.BackupId', props);
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
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreBackup.Backup.BackupState', props);
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
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreBackup.Backup.ClusterId', props);
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
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreBackup.Backup.CreateTimestamp', props);
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
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreBackup.Backup.CopyTimestamp', props);
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
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreBackup.Backup.NeverExpires', props);
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
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreBackup.Backup.SourceRegion', props);
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
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreBackup.Backup.SourceBackup', props);
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
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreBackup.Backup.SourceCluster', props);
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
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreBackup.Backup.DeleteTimestamp', props);
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
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreBackup.Backup.TagList', props);
    return resource.getResponseField('Backup.TagList') as unknown as shapes.CloudHsmv2Tag[];
  }

}

