import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class OpsWorksCmClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateNode(input: shapes.OpsWorksCmAssociateNodeRequest): OpsWorksCMAssociateNode {
    return new OpsWorksCMAssociateNode(this, 'AssociateNode', this.__resources, input);
  }

  public createBackup(input: shapes.OpsWorksCmCreateBackupRequest): OpsWorksCMCreateBackup {
    return new OpsWorksCMCreateBackup(this, 'CreateBackup', this.__resources, input);
  }

  public createServer(input: shapes.OpsWorksCmCreateServerRequest): OpsWorksCMCreateServer {
    return new OpsWorksCMCreateServer(this, 'CreateServer', this.__resources, input);
  }

  public deleteBackup(input: shapes.OpsWorksCmDeleteBackupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.DeleteBackup'),
        parameters: {
          BackupId: input.backupId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteBackup', props);
  }

  public deleteServer(input: shapes.OpsWorksCmDeleteServerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.DeleteServer'),
        parameters: {
          ServerName: input.serverName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteServer', props);
  }

  public describeAccountAttributes(): OpsWorksCMDescribeAccountAttributes {
    return new OpsWorksCMDescribeAccountAttributes(this, 'DescribeAccountAttributes', this.__resources);
  }

  public describeBackups(input: shapes.OpsWorksCmDescribeBackupsRequest): OpsWorksCMDescribeBackups {
    return new OpsWorksCMDescribeBackups(this, 'DescribeBackups', this.__resources, input);
  }

  public describeEvents(input: shapes.OpsWorksCmDescribeEventsRequest): OpsWorksCMDescribeEvents {
    return new OpsWorksCMDescribeEvents(this, 'DescribeEvents', this.__resources, input);
  }

  public describeNodeAssociationStatus(input: shapes.OpsWorksCmDescribeNodeAssociationStatusRequest): OpsWorksCMDescribeNodeAssociationStatus {
    return new OpsWorksCMDescribeNodeAssociationStatus(this, 'DescribeNodeAssociationStatus', this.__resources, input);
  }

  public describeServers(input: shapes.OpsWorksCmDescribeServersRequest): OpsWorksCMDescribeServers {
    return new OpsWorksCMDescribeServers(this, 'DescribeServers', this.__resources, input);
  }

  public disassociateNode(input: shapes.OpsWorksCmDisassociateNodeRequest): OpsWorksCMDisassociateNode {
    return new OpsWorksCMDisassociateNode(this, 'DisassociateNode', this.__resources, input);
  }

  public exportServerEngineAttribute(input: shapes.OpsWorksCmExportServerEngineAttributeRequest): OpsWorksCMExportServerEngineAttribute {
    return new OpsWorksCMExportServerEngineAttribute(this, 'ExportServerEngineAttribute', this.__resources, input);
  }

  public listTagsForResource(input: shapes.OpsWorksCmListTagsForResourceRequest): OpsWorksCMListTagsForResource {
    return new OpsWorksCMListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public restoreServer(input: shapes.OpsWorksCmRestoreServerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.RestoreServer'),
        parameters: {
          BackupId: input.backupId,
          ServerName: input.serverName,
          InstanceType: input.instanceType,
          KeyPair: input.keyPair,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RestoreServer', props);
  }

  public startMaintenance(input: shapes.OpsWorksCmStartMaintenanceRequest): OpsWorksCMStartMaintenance {
    return new OpsWorksCMStartMaintenance(this, 'StartMaintenance', this.__resources, input);
  }

  public tagResource(input: shapes.OpsWorksCmTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.OpsWorksCmUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateServer(input: shapes.OpsWorksCmUpdateServerRequest): OpsWorksCMUpdateServer {
    return new OpsWorksCMUpdateServer(this, 'UpdateServer', this.__resources, input);
  }

  public updateServerEngineAttributes(input: shapes.OpsWorksCmUpdateServerEngineAttributesRequest): OpsWorksCMUpdateServerEngineAttributes {
    return new OpsWorksCMUpdateServerEngineAttributes(this, 'UpdateServerEngineAttributes', this.__resources, input);
  }

}

export class OpsWorksCMAssociateNode extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksCmAssociateNodeRequest) {
    super(scope, id);
  }

  public get nodeAssociationStatusToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateNode',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.AssociateNode.NodeAssociationStatusToken'),
        outputPath: 'NodeAssociationStatusToken',
        parameters: {
          ServerName: this.input.serverName,
          NodeName: this.input.nodeName,
          EngineAttributes: this.input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateNode.NodeAssociationStatusToken', props);
    return resource.getResponseField('NodeAssociationStatusToken') as unknown as string;
  }

}

export class OpsWorksCMCreateBackup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksCmCreateBackupRequest) {
    super(scope, id);
  }

  public get backup(): OpsWorksCMCreateBackupBackup {
    return new OpsWorksCMCreateBackupBackup(this, 'Backup', this.__resources, this.input);
  }

}

export class OpsWorksCMCreateBackupBackup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksCmCreateBackupRequest) {
    super(scope, id);
  }

  public get backupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateBackup.Backup.BackupArn'),
        outputPath: 'Backup.BackupArn',
        parameters: {
          ServerName: this.input.serverName,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.BackupArn', props);
    return resource.getResponseField('Backup.BackupArn') as unknown as string;
  }

  public get backupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateBackup.Backup.BackupId'),
        outputPath: 'Backup.BackupId',
        parameters: {
          ServerName: this.input.serverName,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.BackupId', props);
    return resource.getResponseField('Backup.BackupId') as unknown as string;
  }

  public get backupType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateBackup.Backup.BackupType'),
        outputPath: 'Backup.BackupType',
        parameters: {
          ServerName: this.input.serverName,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.BackupType', props);
    return resource.getResponseField('Backup.BackupType') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateBackup.Backup.CreatedAt'),
        outputPath: 'Backup.CreatedAt',
        parameters: {
          ServerName: this.input.serverName,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.CreatedAt', props);
    return resource.getResponseField('Backup.CreatedAt') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateBackup.Backup.Description'),
        outputPath: 'Backup.Description',
        parameters: {
          ServerName: this.input.serverName,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.Description', props);
    return resource.getResponseField('Backup.Description') as unknown as string;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateBackup.Backup.Engine'),
        outputPath: 'Backup.Engine',
        parameters: {
          ServerName: this.input.serverName,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.Engine', props);
    return resource.getResponseField('Backup.Engine') as unknown as string;
  }

  public get engineModel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateBackup.Backup.EngineModel'),
        outputPath: 'Backup.EngineModel',
        parameters: {
          ServerName: this.input.serverName,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.EngineModel', props);
    return resource.getResponseField('Backup.EngineModel') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateBackup.Backup.EngineVersion'),
        outputPath: 'Backup.EngineVersion',
        parameters: {
          ServerName: this.input.serverName,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.EngineVersion', props);
    return resource.getResponseField('Backup.EngineVersion') as unknown as string;
  }

  public get instanceProfileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateBackup.Backup.InstanceProfileArn'),
        outputPath: 'Backup.InstanceProfileArn',
        parameters: {
          ServerName: this.input.serverName,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.InstanceProfileArn', props);
    return resource.getResponseField('Backup.InstanceProfileArn') as unknown as string;
  }

  public get instanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateBackup.Backup.InstanceType'),
        outputPath: 'Backup.InstanceType',
        parameters: {
          ServerName: this.input.serverName,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.InstanceType', props);
    return resource.getResponseField('Backup.InstanceType') as unknown as string;
  }

  public get keyPair(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateBackup.Backup.KeyPair'),
        outputPath: 'Backup.KeyPair',
        parameters: {
          ServerName: this.input.serverName,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.KeyPair', props);
    return resource.getResponseField('Backup.KeyPair') as unknown as string;
  }

  public get preferredBackupWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateBackup.Backup.PreferredBackupWindow'),
        outputPath: 'Backup.PreferredBackupWindow',
        parameters: {
          ServerName: this.input.serverName,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.PreferredBackupWindow', props);
    return resource.getResponseField('Backup.PreferredBackupWindow') as unknown as string;
  }

  public get preferredMaintenanceWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateBackup.Backup.PreferredMaintenanceWindow'),
        outputPath: 'Backup.PreferredMaintenanceWindow',
        parameters: {
          ServerName: this.input.serverName,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.PreferredMaintenanceWindow', props);
    return resource.getResponseField('Backup.PreferredMaintenanceWindow') as unknown as string;
  }

  public get s3DataSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateBackup.Backup.S3DataSize'),
        outputPath: 'Backup.S3DataSize',
        parameters: {
          ServerName: this.input.serverName,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.S3DataSize', props);
    return resource.getResponseField('Backup.S3DataSize') as unknown as number;
  }

  public get s3DataUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateBackup.Backup.S3DataUrl'),
        outputPath: 'Backup.S3DataUrl',
        parameters: {
          ServerName: this.input.serverName,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.S3DataUrl', props);
    return resource.getResponseField('Backup.S3DataUrl') as unknown as string;
  }

  public get s3LogUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateBackup.Backup.S3LogUrl'),
        outputPath: 'Backup.S3LogUrl',
        parameters: {
          ServerName: this.input.serverName,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.S3LogUrl', props);
    return resource.getResponseField('Backup.S3LogUrl') as unknown as string;
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateBackup.Backup.SecurityGroupIds'),
        outputPath: 'Backup.SecurityGroupIds',
        parameters: {
          ServerName: this.input.serverName,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.SecurityGroupIds', props);
    return resource.getResponseField('Backup.SecurityGroupIds') as unknown as string[];
  }

  public get serverName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateBackup.Backup.ServerName'),
        outputPath: 'Backup.ServerName',
        parameters: {
          ServerName: this.input.serverName,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.ServerName', props);
    return resource.getResponseField('Backup.ServerName') as unknown as string;
  }

  public get serviceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateBackup.Backup.ServiceRoleArn'),
        outputPath: 'Backup.ServiceRoleArn',
        parameters: {
          ServerName: this.input.serverName,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.ServiceRoleArn', props);
    return resource.getResponseField('Backup.ServiceRoleArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateBackup.Backup.Status'),
        outputPath: 'Backup.Status',
        parameters: {
          ServerName: this.input.serverName,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.Status', props);
    return resource.getResponseField('Backup.Status') as unknown as string;
  }

  public get statusDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateBackup.Backup.StatusDescription'),
        outputPath: 'Backup.StatusDescription',
        parameters: {
          ServerName: this.input.serverName,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.StatusDescription', props);
    return resource.getResponseField('Backup.StatusDescription') as unknown as string;
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateBackup.Backup.SubnetIds'),
        outputPath: 'Backup.SubnetIds',
        parameters: {
          ServerName: this.input.serverName,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.SubnetIds', props);
    return resource.getResponseField('Backup.SubnetIds') as unknown as string[];
  }

  public get toolsVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateBackup.Backup.ToolsVersion'),
        outputPath: 'Backup.ToolsVersion',
        parameters: {
          ServerName: this.input.serverName,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.ToolsVersion', props);
    return resource.getResponseField('Backup.ToolsVersion') as unknown as string;
  }

  public get userArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateBackup.Backup.UserArn'),
        outputPath: 'Backup.UserArn',
        parameters: {
          ServerName: this.input.serverName,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.UserArn', props);
    return resource.getResponseField('Backup.UserArn') as unknown as string;
  }

}

export class OpsWorksCMCreateServer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksCmCreateServerRequest) {
    super(scope, id);
  }

  public get server(): OpsWorksCMCreateServerServer {
    return new OpsWorksCMCreateServerServer(this, 'Server', this.__resources, this.input);
  }

}

export class OpsWorksCMCreateServerServer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksCmCreateServerRequest) {
    super(scope, id);
  }

  public get associatePublicIpAddress(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateServer.Server.AssociatePublicIpAddress'),
        outputPath: 'Server.AssociatePublicIpAddress',
        parameters: {
          AssociatePublicIpAddress: this.input.associatePublicIpAddress,
          CustomDomain: this.input.customDomain,
          CustomCertificate: this.input.customCertificate,
          CustomPrivateKey: this.input.customPrivateKey,
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          Engine: this.input.engine,
          EngineModel: this.input.engineModel,
          EngineVersion: this.input.engineVersion,
          EngineAttributes: this.input.engineAttributes,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          InstanceProfileArn: this.input.instanceProfileArn,
          InstanceType: this.input.instanceType,
          KeyPair: this.input.keyPair,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          SecurityGroupIds: this.input.securityGroupIds,
          ServiceRoleArn: this.input.serviceRoleArn,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServer.Server.AssociatePublicIpAddress', props);
    return resource.getResponseField('Server.AssociatePublicIpAddress') as unknown as boolean;
  }

  public get backupRetentionCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateServer.Server.BackupRetentionCount'),
        outputPath: 'Server.BackupRetentionCount',
        parameters: {
          AssociatePublicIpAddress: this.input.associatePublicIpAddress,
          CustomDomain: this.input.customDomain,
          CustomCertificate: this.input.customCertificate,
          CustomPrivateKey: this.input.customPrivateKey,
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          Engine: this.input.engine,
          EngineModel: this.input.engineModel,
          EngineVersion: this.input.engineVersion,
          EngineAttributes: this.input.engineAttributes,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          InstanceProfileArn: this.input.instanceProfileArn,
          InstanceType: this.input.instanceType,
          KeyPair: this.input.keyPair,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          SecurityGroupIds: this.input.securityGroupIds,
          ServiceRoleArn: this.input.serviceRoleArn,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServer.Server.BackupRetentionCount', props);
    return resource.getResponseField('Server.BackupRetentionCount') as unknown as number;
  }

  public get serverName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateServer.Server.ServerName'),
        outputPath: 'Server.ServerName',
        parameters: {
          AssociatePublicIpAddress: this.input.associatePublicIpAddress,
          CustomDomain: this.input.customDomain,
          CustomCertificate: this.input.customCertificate,
          CustomPrivateKey: this.input.customPrivateKey,
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          Engine: this.input.engine,
          EngineModel: this.input.engineModel,
          EngineVersion: this.input.engineVersion,
          EngineAttributes: this.input.engineAttributes,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          InstanceProfileArn: this.input.instanceProfileArn,
          InstanceType: this.input.instanceType,
          KeyPair: this.input.keyPair,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          SecurityGroupIds: this.input.securityGroupIds,
          ServiceRoleArn: this.input.serviceRoleArn,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServer.Server.ServerName', props);
    return resource.getResponseField('Server.ServerName') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateServer.Server.CreatedAt'),
        outputPath: 'Server.CreatedAt',
        parameters: {
          AssociatePublicIpAddress: this.input.associatePublicIpAddress,
          CustomDomain: this.input.customDomain,
          CustomCertificate: this.input.customCertificate,
          CustomPrivateKey: this.input.customPrivateKey,
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          Engine: this.input.engine,
          EngineModel: this.input.engineModel,
          EngineVersion: this.input.engineVersion,
          EngineAttributes: this.input.engineAttributes,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          InstanceProfileArn: this.input.instanceProfileArn,
          InstanceType: this.input.instanceType,
          KeyPair: this.input.keyPair,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          SecurityGroupIds: this.input.securityGroupIds,
          ServiceRoleArn: this.input.serviceRoleArn,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServer.Server.CreatedAt', props);
    return resource.getResponseField('Server.CreatedAt') as unknown as string;
  }

  public get cloudFormationStackArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateServer.Server.CloudFormationStackArn'),
        outputPath: 'Server.CloudFormationStackArn',
        parameters: {
          AssociatePublicIpAddress: this.input.associatePublicIpAddress,
          CustomDomain: this.input.customDomain,
          CustomCertificate: this.input.customCertificate,
          CustomPrivateKey: this.input.customPrivateKey,
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          Engine: this.input.engine,
          EngineModel: this.input.engineModel,
          EngineVersion: this.input.engineVersion,
          EngineAttributes: this.input.engineAttributes,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          InstanceProfileArn: this.input.instanceProfileArn,
          InstanceType: this.input.instanceType,
          KeyPair: this.input.keyPair,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          SecurityGroupIds: this.input.securityGroupIds,
          ServiceRoleArn: this.input.serviceRoleArn,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServer.Server.CloudFormationStackArn', props);
    return resource.getResponseField('Server.CloudFormationStackArn') as unknown as string;
  }

  public get customDomain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateServer.Server.CustomDomain'),
        outputPath: 'Server.CustomDomain',
        parameters: {
          AssociatePublicIpAddress: this.input.associatePublicIpAddress,
          CustomDomain: this.input.customDomain,
          CustomCertificate: this.input.customCertificate,
          CustomPrivateKey: this.input.customPrivateKey,
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          Engine: this.input.engine,
          EngineModel: this.input.engineModel,
          EngineVersion: this.input.engineVersion,
          EngineAttributes: this.input.engineAttributes,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          InstanceProfileArn: this.input.instanceProfileArn,
          InstanceType: this.input.instanceType,
          KeyPair: this.input.keyPair,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          SecurityGroupIds: this.input.securityGroupIds,
          ServiceRoleArn: this.input.serviceRoleArn,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServer.Server.CustomDomain', props);
    return resource.getResponseField('Server.CustomDomain') as unknown as string;
  }

  public get disableAutomatedBackup(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateServer.Server.DisableAutomatedBackup'),
        outputPath: 'Server.DisableAutomatedBackup',
        parameters: {
          AssociatePublicIpAddress: this.input.associatePublicIpAddress,
          CustomDomain: this.input.customDomain,
          CustomCertificate: this.input.customCertificate,
          CustomPrivateKey: this.input.customPrivateKey,
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          Engine: this.input.engine,
          EngineModel: this.input.engineModel,
          EngineVersion: this.input.engineVersion,
          EngineAttributes: this.input.engineAttributes,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          InstanceProfileArn: this.input.instanceProfileArn,
          InstanceType: this.input.instanceType,
          KeyPair: this.input.keyPair,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          SecurityGroupIds: this.input.securityGroupIds,
          ServiceRoleArn: this.input.serviceRoleArn,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServer.Server.DisableAutomatedBackup', props);
    return resource.getResponseField('Server.DisableAutomatedBackup') as unknown as boolean;
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateServer.Server.Endpoint'),
        outputPath: 'Server.Endpoint',
        parameters: {
          AssociatePublicIpAddress: this.input.associatePublicIpAddress,
          CustomDomain: this.input.customDomain,
          CustomCertificate: this.input.customCertificate,
          CustomPrivateKey: this.input.customPrivateKey,
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          Engine: this.input.engine,
          EngineModel: this.input.engineModel,
          EngineVersion: this.input.engineVersion,
          EngineAttributes: this.input.engineAttributes,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          InstanceProfileArn: this.input.instanceProfileArn,
          InstanceType: this.input.instanceType,
          KeyPair: this.input.keyPair,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          SecurityGroupIds: this.input.securityGroupIds,
          ServiceRoleArn: this.input.serviceRoleArn,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServer.Server.Endpoint', props);
    return resource.getResponseField('Server.Endpoint') as unknown as string;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateServer.Server.Engine'),
        outputPath: 'Server.Engine',
        parameters: {
          AssociatePublicIpAddress: this.input.associatePublicIpAddress,
          CustomDomain: this.input.customDomain,
          CustomCertificate: this.input.customCertificate,
          CustomPrivateKey: this.input.customPrivateKey,
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          Engine: this.input.engine,
          EngineModel: this.input.engineModel,
          EngineVersion: this.input.engineVersion,
          EngineAttributes: this.input.engineAttributes,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          InstanceProfileArn: this.input.instanceProfileArn,
          InstanceType: this.input.instanceType,
          KeyPair: this.input.keyPair,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          SecurityGroupIds: this.input.securityGroupIds,
          ServiceRoleArn: this.input.serviceRoleArn,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServer.Server.Engine', props);
    return resource.getResponseField('Server.Engine') as unknown as string;
  }

  public get engineModel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateServer.Server.EngineModel'),
        outputPath: 'Server.EngineModel',
        parameters: {
          AssociatePublicIpAddress: this.input.associatePublicIpAddress,
          CustomDomain: this.input.customDomain,
          CustomCertificate: this.input.customCertificate,
          CustomPrivateKey: this.input.customPrivateKey,
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          Engine: this.input.engine,
          EngineModel: this.input.engineModel,
          EngineVersion: this.input.engineVersion,
          EngineAttributes: this.input.engineAttributes,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          InstanceProfileArn: this.input.instanceProfileArn,
          InstanceType: this.input.instanceType,
          KeyPair: this.input.keyPair,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          SecurityGroupIds: this.input.securityGroupIds,
          ServiceRoleArn: this.input.serviceRoleArn,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServer.Server.EngineModel', props);
    return resource.getResponseField('Server.EngineModel') as unknown as string;
  }

  public get engineAttributes(): shapes.OpsWorksCmEngineAttribute[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateServer.Server.EngineAttributes'),
        outputPath: 'Server.EngineAttributes',
        parameters: {
          AssociatePublicIpAddress: this.input.associatePublicIpAddress,
          CustomDomain: this.input.customDomain,
          CustomCertificate: this.input.customCertificate,
          CustomPrivateKey: this.input.customPrivateKey,
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          Engine: this.input.engine,
          EngineModel: this.input.engineModel,
          EngineVersion: this.input.engineVersion,
          EngineAttributes: this.input.engineAttributes,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          InstanceProfileArn: this.input.instanceProfileArn,
          InstanceType: this.input.instanceType,
          KeyPair: this.input.keyPair,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          SecurityGroupIds: this.input.securityGroupIds,
          ServiceRoleArn: this.input.serviceRoleArn,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServer.Server.EngineAttributes', props);
    return resource.getResponseField('Server.EngineAttributes') as unknown as shapes.OpsWorksCmEngineAttribute[];
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateServer.Server.EngineVersion'),
        outputPath: 'Server.EngineVersion',
        parameters: {
          AssociatePublicIpAddress: this.input.associatePublicIpAddress,
          CustomDomain: this.input.customDomain,
          CustomCertificate: this.input.customCertificate,
          CustomPrivateKey: this.input.customPrivateKey,
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          Engine: this.input.engine,
          EngineModel: this.input.engineModel,
          EngineVersion: this.input.engineVersion,
          EngineAttributes: this.input.engineAttributes,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          InstanceProfileArn: this.input.instanceProfileArn,
          InstanceType: this.input.instanceType,
          KeyPair: this.input.keyPair,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          SecurityGroupIds: this.input.securityGroupIds,
          ServiceRoleArn: this.input.serviceRoleArn,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServer.Server.EngineVersion', props);
    return resource.getResponseField('Server.EngineVersion') as unknown as string;
  }

  public get instanceProfileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateServer.Server.InstanceProfileArn'),
        outputPath: 'Server.InstanceProfileArn',
        parameters: {
          AssociatePublicIpAddress: this.input.associatePublicIpAddress,
          CustomDomain: this.input.customDomain,
          CustomCertificate: this.input.customCertificate,
          CustomPrivateKey: this.input.customPrivateKey,
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          Engine: this.input.engine,
          EngineModel: this.input.engineModel,
          EngineVersion: this.input.engineVersion,
          EngineAttributes: this.input.engineAttributes,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          InstanceProfileArn: this.input.instanceProfileArn,
          InstanceType: this.input.instanceType,
          KeyPair: this.input.keyPair,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          SecurityGroupIds: this.input.securityGroupIds,
          ServiceRoleArn: this.input.serviceRoleArn,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServer.Server.InstanceProfileArn', props);
    return resource.getResponseField('Server.InstanceProfileArn') as unknown as string;
  }

  public get instanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateServer.Server.InstanceType'),
        outputPath: 'Server.InstanceType',
        parameters: {
          AssociatePublicIpAddress: this.input.associatePublicIpAddress,
          CustomDomain: this.input.customDomain,
          CustomCertificate: this.input.customCertificate,
          CustomPrivateKey: this.input.customPrivateKey,
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          Engine: this.input.engine,
          EngineModel: this.input.engineModel,
          EngineVersion: this.input.engineVersion,
          EngineAttributes: this.input.engineAttributes,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          InstanceProfileArn: this.input.instanceProfileArn,
          InstanceType: this.input.instanceType,
          KeyPair: this.input.keyPair,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          SecurityGroupIds: this.input.securityGroupIds,
          ServiceRoleArn: this.input.serviceRoleArn,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServer.Server.InstanceType', props);
    return resource.getResponseField('Server.InstanceType') as unknown as string;
  }

  public get keyPair(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateServer.Server.KeyPair'),
        outputPath: 'Server.KeyPair',
        parameters: {
          AssociatePublicIpAddress: this.input.associatePublicIpAddress,
          CustomDomain: this.input.customDomain,
          CustomCertificate: this.input.customCertificate,
          CustomPrivateKey: this.input.customPrivateKey,
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          Engine: this.input.engine,
          EngineModel: this.input.engineModel,
          EngineVersion: this.input.engineVersion,
          EngineAttributes: this.input.engineAttributes,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          InstanceProfileArn: this.input.instanceProfileArn,
          InstanceType: this.input.instanceType,
          KeyPair: this.input.keyPair,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          SecurityGroupIds: this.input.securityGroupIds,
          ServiceRoleArn: this.input.serviceRoleArn,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServer.Server.KeyPair', props);
    return resource.getResponseField('Server.KeyPair') as unknown as string;
  }

  public get maintenanceStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateServer.Server.MaintenanceStatus'),
        outputPath: 'Server.MaintenanceStatus',
        parameters: {
          AssociatePublicIpAddress: this.input.associatePublicIpAddress,
          CustomDomain: this.input.customDomain,
          CustomCertificate: this.input.customCertificate,
          CustomPrivateKey: this.input.customPrivateKey,
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          Engine: this.input.engine,
          EngineModel: this.input.engineModel,
          EngineVersion: this.input.engineVersion,
          EngineAttributes: this.input.engineAttributes,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          InstanceProfileArn: this.input.instanceProfileArn,
          InstanceType: this.input.instanceType,
          KeyPair: this.input.keyPair,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          SecurityGroupIds: this.input.securityGroupIds,
          ServiceRoleArn: this.input.serviceRoleArn,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServer.Server.MaintenanceStatus', props);
    return resource.getResponseField('Server.MaintenanceStatus') as unknown as string;
  }

  public get preferredMaintenanceWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateServer.Server.PreferredMaintenanceWindow'),
        outputPath: 'Server.PreferredMaintenanceWindow',
        parameters: {
          AssociatePublicIpAddress: this.input.associatePublicIpAddress,
          CustomDomain: this.input.customDomain,
          CustomCertificate: this.input.customCertificate,
          CustomPrivateKey: this.input.customPrivateKey,
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          Engine: this.input.engine,
          EngineModel: this.input.engineModel,
          EngineVersion: this.input.engineVersion,
          EngineAttributes: this.input.engineAttributes,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          InstanceProfileArn: this.input.instanceProfileArn,
          InstanceType: this.input.instanceType,
          KeyPair: this.input.keyPair,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          SecurityGroupIds: this.input.securityGroupIds,
          ServiceRoleArn: this.input.serviceRoleArn,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServer.Server.PreferredMaintenanceWindow', props);
    return resource.getResponseField('Server.PreferredMaintenanceWindow') as unknown as string;
  }

  public get preferredBackupWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateServer.Server.PreferredBackupWindow'),
        outputPath: 'Server.PreferredBackupWindow',
        parameters: {
          AssociatePublicIpAddress: this.input.associatePublicIpAddress,
          CustomDomain: this.input.customDomain,
          CustomCertificate: this.input.customCertificate,
          CustomPrivateKey: this.input.customPrivateKey,
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          Engine: this.input.engine,
          EngineModel: this.input.engineModel,
          EngineVersion: this.input.engineVersion,
          EngineAttributes: this.input.engineAttributes,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          InstanceProfileArn: this.input.instanceProfileArn,
          InstanceType: this.input.instanceType,
          KeyPair: this.input.keyPair,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          SecurityGroupIds: this.input.securityGroupIds,
          ServiceRoleArn: this.input.serviceRoleArn,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServer.Server.PreferredBackupWindow', props);
    return resource.getResponseField('Server.PreferredBackupWindow') as unknown as string;
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateServer.Server.SecurityGroupIds'),
        outputPath: 'Server.SecurityGroupIds',
        parameters: {
          AssociatePublicIpAddress: this.input.associatePublicIpAddress,
          CustomDomain: this.input.customDomain,
          CustomCertificate: this.input.customCertificate,
          CustomPrivateKey: this.input.customPrivateKey,
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          Engine: this.input.engine,
          EngineModel: this.input.engineModel,
          EngineVersion: this.input.engineVersion,
          EngineAttributes: this.input.engineAttributes,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          InstanceProfileArn: this.input.instanceProfileArn,
          InstanceType: this.input.instanceType,
          KeyPair: this.input.keyPair,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          SecurityGroupIds: this.input.securityGroupIds,
          ServiceRoleArn: this.input.serviceRoleArn,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServer.Server.SecurityGroupIds', props);
    return resource.getResponseField('Server.SecurityGroupIds') as unknown as string[];
  }

  public get serviceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateServer.Server.ServiceRoleArn'),
        outputPath: 'Server.ServiceRoleArn',
        parameters: {
          AssociatePublicIpAddress: this.input.associatePublicIpAddress,
          CustomDomain: this.input.customDomain,
          CustomCertificate: this.input.customCertificate,
          CustomPrivateKey: this.input.customPrivateKey,
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          Engine: this.input.engine,
          EngineModel: this.input.engineModel,
          EngineVersion: this.input.engineVersion,
          EngineAttributes: this.input.engineAttributes,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          InstanceProfileArn: this.input.instanceProfileArn,
          InstanceType: this.input.instanceType,
          KeyPair: this.input.keyPair,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          SecurityGroupIds: this.input.securityGroupIds,
          ServiceRoleArn: this.input.serviceRoleArn,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServer.Server.ServiceRoleArn', props);
    return resource.getResponseField('Server.ServiceRoleArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateServer.Server.Status'),
        outputPath: 'Server.Status',
        parameters: {
          AssociatePublicIpAddress: this.input.associatePublicIpAddress,
          CustomDomain: this.input.customDomain,
          CustomCertificate: this.input.customCertificate,
          CustomPrivateKey: this.input.customPrivateKey,
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          Engine: this.input.engine,
          EngineModel: this.input.engineModel,
          EngineVersion: this.input.engineVersion,
          EngineAttributes: this.input.engineAttributes,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          InstanceProfileArn: this.input.instanceProfileArn,
          InstanceType: this.input.instanceType,
          KeyPair: this.input.keyPair,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          SecurityGroupIds: this.input.securityGroupIds,
          ServiceRoleArn: this.input.serviceRoleArn,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServer.Server.Status', props);
    return resource.getResponseField('Server.Status') as unknown as string;
  }

  public get statusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateServer.Server.StatusReason'),
        outputPath: 'Server.StatusReason',
        parameters: {
          AssociatePublicIpAddress: this.input.associatePublicIpAddress,
          CustomDomain: this.input.customDomain,
          CustomCertificate: this.input.customCertificate,
          CustomPrivateKey: this.input.customPrivateKey,
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          Engine: this.input.engine,
          EngineModel: this.input.engineModel,
          EngineVersion: this.input.engineVersion,
          EngineAttributes: this.input.engineAttributes,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          InstanceProfileArn: this.input.instanceProfileArn,
          InstanceType: this.input.instanceType,
          KeyPair: this.input.keyPair,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          SecurityGroupIds: this.input.securityGroupIds,
          ServiceRoleArn: this.input.serviceRoleArn,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServer.Server.StatusReason', props);
    return resource.getResponseField('Server.StatusReason') as unknown as string;
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateServer.Server.SubnetIds'),
        outputPath: 'Server.SubnetIds',
        parameters: {
          AssociatePublicIpAddress: this.input.associatePublicIpAddress,
          CustomDomain: this.input.customDomain,
          CustomCertificate: this.input.customCertificate,
          CustomPrivateKey: this.input.customPrivateKey,
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          Engine: this.input.engine,
          EngineModel: this.input.engineModel,
          EngineVersion: this.input.engineVersion,
          EngineAttributes: this.input.engineAttributes,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          InstanceProfileArn: this.input.instanceProfileArn,
          InstanceType: this.input.instanceType,
          KeyPair: this.input.keyPair,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          SecurityGroupIds: this.input.securityGroupIds,
          ServiceRoleArn: this.input.serviceRoleArn,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServer.Server.SubnetIds', props);
    return resource.getResponseField('Server.SubnetIds') as unknown as string[];
  }

  public get serverArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.CreateServer.Server.ServerArn'),
        outputPath: 'Server.ServerArn',
        parameters: {
          AssociatePublicIpAddress: this.input.associatePublicIpAddress,
          CustomDomain: this.input.customDomain,
          CustomCertificate: this.input.customCertificate,
          CustomPrivateKey: this.input.customPrivateKey,
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          Engine: this.input.engine,
          EngineModel: this.input.engineModel,
          EngineVersion: this.input.engineVersion,
          EngineAttributes: this.input.engineAttributes,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          InstanceProfileArn: this.input.instanceProfileArn,
          InstanceType: this.input.instanceType,
          KeyPair: this.input.keyPair,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          SecurityGroupIds: this.input.securityGroupIds,
          ServiceRoleArn: this.input.serviceRoleArn,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
          BackupId: this.input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServer.Server.ServerArn', props);
    return resource.getResponseField('Server.ServerArn') as unknown as string;
  }

}

export class OpsWorksCMDescribeAccountAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get attributes(): shapes.OpsWorksCmAccountAttribute[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountAttributes',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.DescribeAccountAttributes.Attributes'),
        outputPath: 'Attributes',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountAttributes.Attributes', props);
    return resource.getResponseField('Attributes') as unknown as shapes.OpsWorksCmAccountAttribute[];
  }

}

export class OpsWorksCMDescribeBackups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksCmDescribeBackupsRequest) {
    super(scope, id);
  }

  public get backups(): shapes.OpsWorksCmBackup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackups',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.DescribeBackups.Backups'),
        outputPath: 'Backups',
        parameters: {
          BackupId: this.input.backupId,
          ServerName: this.input.serverName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackups.Backups', props);
    return resource.getResponseField('Backups') as unknown as shapes.OpsWorksCmBackup[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackups',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.DescribeBackups.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          BackupId: this.input.backupId,
          ServerName: this.input.serverName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OpsWorksCMDescribeEvents extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksCmDescribeEventsRequest) {
    super(scope, id);
  }

  public get serverEvents(): shapes.OpsWorksCmServerEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEvents',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.DescribeEvents.ServerEvents'),
        outputPath: 'ServerEvents',
        parameters: {
          ServerName: this.input.serverName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEvents.ServerEvents', props);
    return resource.getResponseField('ServerEvents') as unknown as shapes.OpsWorksCmServerEvent[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEvents',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.DescribeEvents.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ServerName: this.input.serverName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEvents.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OpsWorksCMDescribeNodeAssociationStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksCmDescribeNodeAssociationStatusRequest) {
    super(scope, id);
  }

  public get nodeAssociationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNodeAssociationStatus',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.DescribeNodeAssociationStatus.NodeAssociationStatus'),
        outputPath: 'NodeAssociationStatus',
        parameters: {
          NodeAssociationStatusToken: this.input.nodeAssociationStatusToken,
          ServerName: this.input.serverName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNodeAssociationStatus.NodeAssociationStatus', props);
    return resource.getResponseField('NodeAssociationStatus') as unknown as string;
  }

  public get engineAttributes(): shapes.OpsWorksCmEngineAttribute[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNodeAssociationStatus',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.DescribeNodeAssociationStatus.EngineAttributes'),
        outputPath: 'EngineAttributes',
        parameters: {
          NodeAssociationStatusToken: this.input.nodeAssociationStatusToken,
          ServerName: this.input.serverName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNodeAssociationStatus.EngineAttributes', props);
    return resource.getResponseField('EngineAttributes') as unknown as shapes.OpsWorksCmEngineAttribute[];
  }

}

export class OpsWorksCMDescribeServers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksCmDescribeServersRequest) {
    super(scope, id);
  }

  public get servers(): shapes.OpsWorksCmServer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServers',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.DescribeServers.Servers'),
        outputPath: 'Servers',
        parameters: {
          ServerName: this.input.serverName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServers.Servers', props);
    return resource.getResponseField('Servers') as unknown as shapes.OpsWorksCmServer[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServers',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.DescribeServers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ServerName: this.input.serverName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OpsWorksCMDisassociateNode extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksCmDisassociateNodeRequest) {
    super(scope, id);
  }

  public get nodeAssociationStatusToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateNode',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.DisassociateNode.NodeAssociationStatusToken'),
        outputPath: 'NodeAssociationStatusToken',
        parameters: {
          ServerName: this.input.serverName,
          NodeName: this.input.nodeName,
          EngineAttributes: this.input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateNode.NodeAssociationStatusToken', props);
    return resource.getResponseField('NodeAssociationStatusToken') as unknown as string;
  }

}

export class OpsWorksCMExportServerEngineAttribute extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksCmExportServerEngineAttributeRequest) {
    super(scope, id);
  }

  public get engineAttribute(): OpsWorksCMExportServerEngineAttributeEngineAttribute {
    return new OpsWorksCMExportServerEngineAttributeEngineAttribute(this, 'EngineAttribute', this.__resources, this.input);
  }

  public get serverName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportServerEngineAttribute',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.ExportServerEngineAttribute.ServerName'),
        outputPath: 'ServerName',
        parameters: {
          ExportAttributeName: this.input.exportAttributeName,
          ServerName: this.input.serverName,
          InputAttributes: this.input.inputAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportServerEngineAttribute.ServerName', props);
    return resource.getResponseField('ServerName') as unknown as string;
  }

}

export class OpsWorksCMExportServerEngineAttributeEngineAttribute extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksCmExportServerEngineAttributeRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportServerEngineAttribute',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.ExportServerEngineAttribute.EngineAttribute.Name'),
        outputPath: 'EngineAttribute.Name',
        parameters: {
          ExportAttributeName: this.input.exportAttributeName,
          ServerName: this.input.serverName,
          InputAttributes: this.input.inputAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportServerEngineAttribute.EngineAttribute.Name', props);
    return resource.getResponseField('EngineAttribute.Name') as unknown as string;
  }

  public get value(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportServerEngineAttribute',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.ExportServerEngineAttribute.EngineAttribute.Value'),
        outputPath: 'EngineAttribute.Value',
        parameters: {
          ExportAttributeName: this.input.exportAttributeName,
          ServerName: this.input.serverName,
          InputAttributes: this.input.inputAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportServerEngineAttribute.EngineAttribute.Value', props);
    return resource.getResponseField('EngineAttribute.Value') as unknown as string;
  }

}

export class OpsWorksCMListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksCmListTagsForResourceRequest) {
    super(scope, id);
  }

  public get tags(): shapes.OpsWorksCmTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.input.resourceArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.OpsWorksCmTag[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.ListTagsForResource.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ResourceArn: this.input.resourceArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OpsWorksCMStartMaintenance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksCmStartMaintenanceRequest) {
    super(scope, id);
  }

  public get server(): OpsWorksCMStartMaintenanceServer {
    return new OpsWorksCMStartMaintenanceServer(this, 'Server', this.__resources, this.input);
  }

}

export class OpsWorksCMStartMaintenanceServer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksCmStartMaintenanceRequest) {
    super(scope, id);
  }

  public get associatePublicIpAddress(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMaintenance',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.StartMaintenance.Server.AssociatePublicIpAddress'),
        outputPath: 'Server.AssociatePublicIpAddress',
        parameters: {
          ServerName: this.input.serverName,
          EngineAttributes: this.input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMaintenance.Server.AssociatePublicIpAddress', props);
    return resource.getResponseField('Server.AssociatePublicIpAddress') as unknown as boolean;
  }

  public get backupRetentionCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMaintenance',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.StartMaintenance.Server.BackupRetentionCount'),
        outputPath: 'Server.BackupRetentionCount',
        parameters: {
          ServerName: this.input.serverName,
          EngineAttributes: this.input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMaintenance.Server.BackupRetentionCount', props);
    return resource.getResponseField('Server.BackupRetentionCount') as unknown as number;
  }

  public get serverName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMaintenance',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.StartMaintenance.Server.ServerName'),
        outputPath: 'Server.ServerName',
        parameters: {
          ServerName: this.input.serverName,
          EngineAttributes: this.input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMaintenance.Server.ServerName', props);
    return resource.getResponseField('Server.ServerName') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMaintenance',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.StartMaintenance.Server.CreatedAt'),
        outputPath: 'Server.CreatedAt',
        parameters: {
          ServerName: this.input.serverName,
          EngineAttributes: this.input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMaintenance.Server.CreatedAt', props);
    return resource.getResponseField('Server.CreatedAt') as unknown as string;
  }

  public get cloudFormationStackArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMaintenance',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.StartMaintenance.Server.CloudFormationStackArn'),
        outputPath: 'Server.CloudFormationStackArn',
        parameters: {
          ServerName: this.input.serverName,
          EngineAttributes: this.input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMaintenance.Server.CloudFormationStackArn', props);
    return resource.getResponseField('Server.CloudFormationStackArn') as unknown as string;
  }

  public get customDomain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMaintenance',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.StartMaintenance.Server.CustomDomain'),
        outputPath: 'Server.CustomDomain',
        parameters: {
          ServerName: this.input.serverName,
          EngineAttributes: this.input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMaintenance.Server.CustomDomain', props);
    return resource.getResponseField('Server.CustomDomain') as unknown as string;
  }

  public get disableAutomatedBackup(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMaintenance',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.StartMaintenance.Server.DisableAutomatedBackup'),
        outputPath: 'Server.DisableAutomatedBackup',
        parameters: {
          ServerName: this.input.serverName,
          EngineAttributes: this.input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMaintenance.Server.DisableAutomatedBackup', props);
    return resource.getResponseField('Server.DisableAutomatedBackup') as unknown as boolean;
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMaintenance',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.StartMaintenance.Server.Endpoint'),
        outputPath: 'Server.Endpoint',
        parameters: {
          ServerName: this.input.serverName,
          EngineAttributes: this.input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMaintenance.Server.Endpoint', props);
    return resource.getResponseField('Server.Endpoint') as unknown as string;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMaintenance',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.StartMaintenance.Server.Engine'),
        outputPath: 'Server.Engine',
        parameters: {
          ServerName: this.input.serverName,
          EngineAttributes: this.input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMaintenance.Server.Engine', props);
    return resource.getResponseField('Server.Engine') as unknown as string;
  }

  public get engineModel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMaintenance',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.StartMaintenance.Server.EngineModel'),
        outputPath: 'Server.EngineModel',
        parameters: {
          ServerName: this.input.serverName,
          EngineAttributes: this.input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMaintenance.Server.EngineModel', props);
    return resource.getResponseField('Server.EngineModel') as unknown as string;
  }

  public get engineAttributes(): shapes.OpsWorksCmEngineAttribute[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMaintenance',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.StartMaintenance.Server.EngineAttributes'),
        outputPath: 'Server.EngineAttributes',
        parameters: {
          ServerName: this.input.serverName,
          EngineAttributes: this.input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMaintenance.Server.EngineAttributes', props);
    return resource.getResponseField('Server.EngineAttributes') as unknown as shapes.OpsWorksCmEngineAttribute[];
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMaintenance',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.StartMaintenance.Server.EngineVersion'),
        outputPath: 'Server.EngineVersion',
        parameters: {
          ServerName: this.input.serverName,
          EngineAttributes: this.input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMaintenance.Server.EngineVersion', props);
    return resource.getResponseField('Server.EngineVersion') as unknown as string;
  }

  public get instanceProfileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMaintenance',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.StartMaintenance.Server.InstanceProfileArn'),
        outputPath: 'Server.InstanceProfileArn',
        parameters: {
          ServerName: this.input.serverName,
          EngineAttributes: this.input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMaintenance.Server.InstanceProfileArn', props);
    return resource.getResponseField('Server.InstanceProfileArn') as unknown as string;
  }

  public get instanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMaintenance',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.StartMaintenance.Server.InstanceType'),
        outputPath: 'Server.InstanceType',
        parameters: {
          ServerName: this.input.serverName,
          EngineAttributes: this.input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMaintenance.Server.InstanceType', props);
    return resource.getResponseField('Server.InstanceType') as unknown as string;
  }

  public get keyPair(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMaintenance',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.StartMaintenance.Server.KeyPair'),
        outputPath: 'Server.KeyPair',
        parameters: {
          ServerName: this.input.serverName,
          EngineAttributes: this.input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMaintenance.Server.KeyPair', props);
    return resource.getResponseField('Server.KeyPair') as unknown as string;
  }

  public get maintenanceStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMaintenance',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.StartMaintenance.Server.MaintenanceStatus'),
        outputPath: 'Server.MaintenanceStatus',
        parameters: {
          ServerName: this.input.serverName,
          EngineAttributes: this.input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMaintenance.Server.MaintenanceStatus', props);
    return resource.getResponseField('Server.MaintenanceStatus') as unknown as string;
  }

  public get preferredMaintenanceWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMaintenance',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.StartMaintenance.Server.PreferredMaintenanceWindow'),
        outputPath: 'Server.PreferredMaintenanceWindow',
        parameters: {
          ServerName: this.input.serverName,
          EngineAttributes: this.input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMaintenance.Server.PreferredMaintenanceWindow', props);
    return resource.getResponseField('Server.PreferredMaintenanceWindow') as unknown as string;
  }

  public get preferredBackupWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMaintenance',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.StartMaintenance.Server.PreferredBackupWindow'),
        outputPath: 'Server.PreferredBackupWindow',
        parameters: {
          ServerName: this.input.serverName,
          EngineAttributes: this.input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMaintenance.Server.PreferredBackupWindow', props);
    return resource.getResponseField('Server.PreferredBackupWindow') as unknown as string;
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMaintenance',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.StartMaintenance.Server.SecurityGroupIds'),
        outputPath: 'Server.SecurityGroupIds',
        parameters: {
          ServerName: this.input.serverName,
          EngineAttributes: this.input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMaintenance.Server.SecurityGroupIds', props);
    return resource.getResponseField('Server.SecurityGroupIds') as unknown as string[];
  }

  public get serviceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMaintenance',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.StartMaintenance.Server.ServiceRoleArn'),
        outputPath: 'Server.ServiceRoleArn',
        parameters: {
          ServerName: this.input.serverName,
          EngineAttributes: this.input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMaintenance.Server.ServiceRoleArn', props);
    return resource.getResponseField('Server.ServiceRoleArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMaintenance',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.StartMaintenance.Server.Status'),
        outputPath: 'Server.Status',
        parameters: {
          ServerName: this.input.serverName,
          EngineAttributes: this.input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMaintenance.Server.Status', props);
    return resource.getResponseField('Server.Status') as unknown as string;
  }

  public get statusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMaintenance',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.StartMaintenance.Server.StatusReason'),
        outputPath: 'Server.StatusReason',
        parameters: {
          ServerName: this.input.serverName,
          EngineAttributes: this.input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMaintenance.Server.StatusReason', props);
    return resource.getResponseField('Server.StatusReason') as unknown as string;
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMaintenance',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.StartMaintenance.Server.SubnetIds'),
        outputPath: 'Server.SubnetIds',
        parameters: {
          ServerName: this.input.serverName,
          EngineAttributes: this.input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMaintenance.Server.SubnetIds', props);
    return resource.getResponseField('Server.SubnetIds') as unknown as string[];
  }

  public get serverArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMaintenance',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.StartMaintenance.Server.ServerArn'),
        outputPath: 'Server.ServerArn',
        parameters: {
          ServerName: this.input.serverName,
          EngineAttributes: this.input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMaintenance.Server.ServerArn', props);
    return resource.getResponseField('Server.ServerArn') as unknown as string;
  }

}

export class OpsWorksCMUpdateServer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksCmUpdateServerRequest) {
    super(scope, id);
  }

  public get server(): OpsWorksCMUpdateServerServer {
    return new OpsWorksCMUpdateServerServer(this, 'Server', this.__resources, this.input);
  }

}

export class OpsWorksCMUpdateServerServer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksCmUpdateServerRequest) {
    super(scope, id);
  }

  public get associatePublicIpAddress(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServer.Server.AssociatePublicIpAddress'),
        outputPath: 'Server.AssociatePublicIpAddress',
        parameters: {
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServer.Server.AssociatePublicIpAddress', props);
    return resource.getResponseField('Server.AssociatePublicIpAddress') as unknown as boolean;
  }

  public get backupRetentionCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServer.Server.BackupRetentionCount'),
        outputPath: 'Server.BackupRetentionCount',
        parameters: {
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServer.Server.BackupRetentionCount', props);
    return resource.getResponseField('Server.BackupRetentionCount') as unknown as number;
  }

  public get serverName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServer.Server.ServerName'),
        outputPath: 'Server.ServerName',
        parameters: {
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServer.Server.ServerName', props);
    return resource.getResponseField('Server.ServerName') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServer.Server.CreatedAt'),
        outputPath: 'Server.CreatedAt',
        parameters: {
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServer.Server.CreatedAt', props);
    return resource.getResponseField('Server.CreatedAt') as unknown as string;
  }

  public get cloudFormationStackArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServer.Server.CloudFormationStackArn'),
        outputPath: 'Server.CloudFormationStackArn',
        parameters: {
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServer.Server.CloudFormationStackArn', props);
    return resource.getResponseField('Server.CloudFormationStackArn') as unknown as string;
  }

  public get customDomain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServer.Server.CustomDomain'),
        outputPath: 'Server.CustomDomain',
        parameters: {
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServer.Server.CustomDomain', props);
    return resource.getResponseField('Server.CustomDomain') as unknown as string;
  }

  public get disableAutomatedBackup(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServer.Server.DisableAutomatedBackup'),
        outputPath: 'Server.DisableAutomatedBackup',
        parameters: {
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServer.Server.DisableAutomatedBackup', props);
    return resource.getResponseField('Server.DisableAutomatedBackup') as unknown as boolean;
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServer.Server.Endpoint'),
        outputPath: 'Server.Endpoint',
        parameters: {
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServer.Server.Endpoint', props);
    return resource.getResponseField('Server.Endpoint') as unknown as string;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServer.Server.Engine'),
        outputPath: 'Server.Engine',
        parameters: {
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServer.Server.Engine', props);
    return resource.getResponseField('Server.Engine') as unknown as string;
  }

  public get engineModel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServer.Server.EngineModel'),
        outputPath: 'Server.EngineModel',
        parameters: {
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServer.Server.EngineModel', props);
    return resource.getResponseField('Server.EngineModel') as unknown as string;
  }

  public get engineAttributes(): shapes.OpsWorksCmEngineAttribute[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServer.Server.EngineAttributes'),
        outputPath: 'Server.EngineAttributes',
        parameters: {
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServer.Server.EngineAttributes', props);
    return resource.getResponseField('Server.EngineAttributes') as unknown as shapes.OpsWorksCmEngineAttribute[];
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServer.Server.EngineVersion'),
        outputPath: 'Server.EngineVersion',
        parameters: {
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServer.Server.EngineVersion', props);
    return resource.getResponseField('Server.EngineVersion') as unknown as string;
  }

  public get instanceProfileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServer.Server.InstanceProfileArn'),
        outputPath: 'Server.InstanceProfileArn',
        parameters: {
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServer.Server.InstanceProfileArn', props);
    return resource.getResponseField('Server.InstanceProfileArn') as unknown as string;
  }

  public get instanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServer.Server.InstanceType'),
        outputPath: 'Server.InstanceType',
        parameters: {
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServer.Server.InstanceType', props);
    return resource.getResponseField('Server.InstanceType') as unknown as string;
  }

  public get keyPair(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServer.Server.KeyPair'),
        outputPath: 'Server.KeyPair',
        parameters: {
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServer.Server.KeyPair', props);
    return resource.getResponseField('Server.KeyPair') as unknown as string;
  }

  public get maintenanceStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServer.Server.MaintenanceStatus'),
        outputPath: 'Server.MaintenanceStatus',
        parameters: {
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServer.Server.MaintenanceStatus', props);
    return resource.getResponseField('Server.MaintenanceStatus') as unknown as string;
  }

  public get preferredMaintenanceWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServer.Server.PreferredMaintenanceWindow'),
        outputPath: 'Server.PreferredMaintenanceWindow',
        parameters: {
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServer.Server.PreferredMaintenanceWindow', props);
    return resource.getResponseField('Server.PreferredMaintenanceWindow') as unknown as string;
  }

  public get preferredBackupWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServer.Server.PreferredBackupWindow'),
        outputPath: 'Server.PreferredBackupWindow',
        parameters: {
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServer.Server.PreferredBackupWindow', props);
    return resource.getResponseField('Server.PreferredBackupWindow') as unknown as string;
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServer.Server.SecurityGroupIds'),
        outputPath: 'Server.SecurityGroupIds',
        parameters: {
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServer.Server.SecurityGroupIds', props);
    return resource.getResponseField('Server.SecurityGroupIds') as unknown as string[];
  }

  public get serviceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServer.Server.ServiceRoleArn'),
        outputPath: 'Server.ServiceRoleArn',
        parameters: {
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServer.Server.ServiceRoleArn', props);
    return resource.getResponseField('Server.ServiceRoleArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServer.Server.Status'),
        outputPath: 'Server.Status',
        parameters: {
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServer.Server.Status', props);
    return resource.getResponseField('Server.Status') as unknown as string;
  }

  public get statusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServer.Server.StatusReason'),
        outputPath: 'Server.StatusReason',
        parameters: {
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServer.Server.StatusReason', props);
    return resource.getResponseField('Server.StatusReason') as unknown as string;
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServer.Server.SubnetIds'),
        outputPath: 'Server.SubnetIds',
        parameters: {
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServer.Server.SubnetIds', props);
    return resource.getResponseField('Server.SubnetIds') as unknown as string[];
  }

  public get serverArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServer.Server.ServerArn'),
        outputPath: 'Server.ServerArn',
        parameters: {
          DisableAutomatedBackup: this.input.disableAutomatedBackup,
          BackupRetentionCount: this.input.backupRetentionCount,
          ServerName: this.input.serverName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServer.Server.ServerArn', props);
    return resource.getResponseField('Server.ServerArn') as unknown as string;
  }

}

export class OpsWorksCMUpdateServerEngineAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksCmUpdateServerEngineAttributesRequest) {
    super(scope, id);
  }

  public get server(): OpsWorksCMUpdateServerEngineAttributesServer {
    return new OpsWorksCMUpdateServerEngineAttributesServer(this, 'Server', this.__resources, this.input);
  }

}

export class OpsWorksCMUpdateServerEngineAttributesServer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksCmUpdateServerEngineAttributesRequest) {
    super(scope, id);
  }

  public get associatePublicIpAddress(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServerEngineAttributes',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServerEngineAttributes.Server.AssociatePublicIpAddress'),
        outputPath: 'Server.AssociatePublicIpAddress',
        parameters: {
          ServerName: this.input.serverName,
          AttributeName: this.input.attributeName,
          AttributeValue: this.input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServerEngineAttributes.Server.AssociatePublicIpAddress', props);
    return resource.getResponseField('Server.AssociatePublicIpAddress') as unknown as boolean;
  }

  public get backupRetentionCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServerEngineAttributes',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServerEngineAttributes.Server.BackupRetentionCount'),
        outputPath: 'Server.BackupRetentionCount',
        parameters: {
          ServerName: this.input.serverName,
          AttributeName: this.input.attributeName,
          AttributeValue: this.input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServerEngineAttributes.Server.BackupRetentionCount', props);
    return resource.getResponseField('Server.BackupRetentionCount') as unknown as number;
  }

  public get serverName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServerEngineAttributes',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServerEngineAttributes.Server.ServerName'),
        outputPath: 'Server.ServerName',
        parameters: {
          ServerName: this.input.serverName,
          AttributeName: this.input.attributeName,
          AttributeValue: this.input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServerEngineAttributes.Server.ServerName', props);
    return resource.getResponseField('Server.ServerName') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServerEngineAttributes',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServerEngineAttributes.Server.CreatedAt'),
        outputPath: 'Server.CreatedAt',
        parameters: {
          ServerName: this.input.serverName,
          AttributeName: this.input.attributeName,
          AttributeValue: this.input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServerEngineAttributes.Server.CreatedAt', props);
    return resource.getResponseField('Server.CreatedAt') as unknown as string;
  }

  public get cloudFormationStackArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServerEngineAttributes',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServerEngineAttributes.Server.CloudFormationStackArn'),
        outputPath: 'Server.CloudFormationStackArn',
        parameters: {
          ServerName: this.input.serverName,
          AttributeName: this.input.attributeName,
          AttributeValue: this.input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServerEngineAttributes.Server.CloudFormationStackArn', props);
    return resource.getResponseField('Server.CloudFormationStackArn') as unknown as string;
  }

  public get customDomain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServerEngineAttributes',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServerEngineAttributes.Server.CustomDomain'),
        outputPath: 'Server.CustomDomain',
        parameters: {
          ServerName: this.input.serverName,
          AttributeName: this.input.attributeName,
          AttributeValue: this.input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServerEngineAttributes.Server.CustomDomain', props);
    return resource.getResponseField('Server.CustomDomain') as unknown as string;
  }

  public get disableAutomatedBackup(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServerEngineAttributes',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServerEngineAttributes.Server.DisableAutomatedBackup'),
        outputPath: 'Server.DisableAutomatedBackup',
        parameters: {
          ServerName: this.input.serverName,
          AttributeName: this.input.attributeName,
          AttributeValue: this.input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServerEngineAttributes.Server.DisableAutomatedBackup', props);
    return resource.getResponseField('Server.DisableAutomatedBackup') as unknown as boolean;
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServerEngineAttributes',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServerEngineAttributes.Server.Endpoint'),
        outputPath: 'Server.Endpoint',
        parameters: {
          ServerName: this.input.serverName,
          AttributeName: this.input.attributeName,
          AttributeValue: this.input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServerEngineAttributes.Server.Endpoint', props);
    return resource.getResponseField('Server.Endpoint') as unknown as string;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServerEngineAttributes',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServerEngineAttributes.Server.Engine'),
        outputPath: 'Server.Engine',
        parameters: {
          ServerName: this.input.serverName,
          AttributeName: this.input.attributeName,
          AttributeValue: this.input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServerEngineAttributes.Server.Engine', props);
    return resource.getResponseField('Server.Engine') as unknown as string;
  }

  public get engineModel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServerEngineAttributes',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServerEngineAttributes.Server.EngineModel'),
        outputPath: 'Server.EngineModel',
        parameters: {
          ServerName: this.input.serverName,
          AttributeName: this.input.attributeName,
          AttributeValue: this.input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServerEngineAttributes.Server.EngineModel', props);
    return resource.getResponseField('Server.EngineModel') as unknown as string;
  }

  public get engineAttributes(): shapes.OpsWorksCmEngineAttribute[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServerEngineAttributes',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServerEngineAttributes.Server.EngineAttributes'),
        outputPath: 'Server.EngineAttributes',
        parameters: {
          ServerName: this.input.serverName,
          AttributeName: this.input.attributeName,
          AttributeValue: this.input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServerEngineAttributes.Server.EngineAttributes', props);
    return resource.getResponseField('Server.EngineAttributes') as unknown as shapes.OpsWorksCmEngineAttribute[];
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServerEngineAttributes',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServerEngineAttributes.Server.EngineVersion'),
        outputPath: 'Server.EngineVersion',
        parameters: {
          ServerName: this.input.serverName,
          AttributeName: this.input.attributeName,
          AttributeValue: this.input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServerEngineAttributes.Server.EngineVersion', props);
    return resource.getResponseField('Server.EngineVersion') as unknown as string;
  }

  public get instanceProfileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServerEngineAttributes',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServerEngineAttributes.Server.InstanceProfileArn'),
        outputPath: 'Server.InstanceProfileArn',
        parameters: {
          ServerName: this.input.serverName,
          AttributeName: this.input.attributeName,
          AttributeValue: this.input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServerEngineAttributes.Server.InstanceProfileArn', props);
    return resource.getResponseField('Server.InstanceProfileArn') as unknown as string;
  }

  public get instanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServerEngineAttributes',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServerEngineAttributes.Server.InstanceType'),
        outputPath: 'Server.InstanceType',
        parameters: {
          ServerName: this.input.serverName,
          AttributeName: this.input.attributeName,
          AttributeValue: this.input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServerEngineAttributes.Server.InstanceType', props);
    return resource.getResponseField('Server.InstanceType') as unknown as string;
  }

  public get keyPair(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServerEngineAttributes',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServerEngineAttributes.Server.KeyPair'),
        outputPath: 'Server.KeyPair',
        parameters: {
          ServerName: this.input.serverName,
          AttributeName: this.input.attributeName,
          AttributeValue: this.input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServerEngineAttributes.Server.KeyPair', props);
    return resource.getResponseField('Server.KeyPair') as unknown as string;
  }

  public get maintenanceStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServerEngineAttributes',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServerEngineAttributes.Server.MaintenanceStatus'),
        outputPath: 'Server.MaintenanceStatus',
        parameters: {
          ServerName: this.input.serverName,
          AttributeName: this.input.attributeName,
          AttributeValue: this.input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServerEngineAttributes.Server.MaintenanceStatus', props);
    return resource.getResponseField('Server.MaintenanceStatus') as unknown as string;
  }

  public get preferredMaintenanceWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServerEngineAttributes',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServerEngineAttributes.Server.PreferredMaintenanceWindow'),
        outputPath: 'Server.PreferredMaintenanceWindow',
        parameters: {
          ServerName: this.input.serverName,
          AttributeName: this.input.attributeName,
          AttributeValue: this.input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServerEngineAttributes.Server.PreferredMaintenanceWindow', props);
    return resource.getResponseField('Server.PreferredMaintenanceWindow') as unknown as string;
  }

  public get preferredBackupWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServerEngineAttributes',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServerEngineAttributes.Server.PreferredBackupWindow'),
        outputPath: 'Server.PreferredBackupWindow',
        parameters: {
          ServerName: this.input.serverName,
          AttributeName: this.input.attributeName,
          AttributeValue: this.input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServerEngineAttributes.Server.PreferredBackupWindow', props);
    return resource.getResponseField('Server.PreferredBackupWindow') as unknown as string;
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServerEngineAttributes',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServerEngineAttributes.Server.SecurityGroupIds'),
        outputPath: 'Server.SecurityGroupIds',
        parameters: {
          ServerName: this.input.serverName,
          AttributeName: this.input.attributeName,
          AttributeValue: this.input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServerEngineAttributes.Server.SecurityGroupIds', props);
    return resource.getResponseField('Server.SecurityGroupIds') as unknown as string[];
  }

  public get serviceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServerEngineAttributes',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServerEngineAttributes.Server.ServiceRoleArn'),
        outputPath: 'Server.ServiceRoleArn',
        parameters: {
          ServerName: this.input.serverName,
          AttributeName: this.input.attributeName,
          AttributeValue: this.input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServerEngineAttributes.Server.ServiceRoleArn', props);
    return resource.getResponseField('Server.ServiceRoleArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServerEngineAttributes',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServerEngineAttributes.Server.Status'),
        outputPath: 'Server.Status',
        parameters: {
          ServerName: this.input.serverName,
          AttributeName: this.input.attributeName,
          AttributeValue: this.input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServerEngineAttributes.Server.Status', props);
    return resource.getResponseField('Server.Status') as unknown as string;
  }

  public get statusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServerEngineAttributes',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServerEngineAttributes.Server.StatusReason'),
        outputPath: 'Server.StatusReason',
        parameters: {
          ServerName: this.input.serverName,
          AttributeName: this.input.attributeName,
          AttributeValue: this.input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServerEngineAttributes.Server.StatusReason', props);
    return resource.getResponseField('Server.StatusReason') as unknown as string;
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServerEngineAttributes',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServerEngineAttributes.Server.SubnetIds'),
        outputPath: 'Server.SubnetIds',
        parameters: {
          ServerName: this.input.serverName,
          AttributeName: this.input.attributeName,
          AttributeValue: this.input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServerEngineAttributes.Server.SubnetIds', props);
    return resource.getResponseField('Server.SubnetIds') as unknown as string[];
  }

  public get serverArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServerEngineAttributes',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.UpdateServerEngineAttributes.Server.ServerArn'),
        outputPath: 'Server.ServerArn',
        parameters: {
          ServerName: this.input.serverName,
          AttributeName: this.input.attributeName,
          AttributeValue: this.input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServerEngineAttributes.Server.ServerArn', props);
    return resource.getResponseField('Server.ServerArn') as unknown as string;
  }

}

