import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class OpsWorksCmClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateNode(input: shapes.OpsWorksCmAssociateNodeRequest): OpsWorksCMResponsesAssociateNode {
    return new OpsWorksCMResponsesAssociateNode(this, this.__resources, input);
  }

  public createBackup(input: shapes.OpsWorksCmCreateBackupRequest): OpsWorksCMResponsesCreateBackup {
    return new OpsWorksCMResponsesCreateBackup(this, this.__resources, input);
  }

  public createServer(input: shapes.OpsWorksCmCreateServerRequest): OpsWorksCMResponsesCreateServer {
    return new OpsWorksCMResponsesCreateServer(this, this.__resources, input);
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

  public describeAccountAttributes(): OpsWorksCMResponsesDescribeAccountAttributes {
    return new OpsWorksCMResponsesDescribeAccountAttributes(this, this.__resources);
  }

  public describeBackups(input: shapes.OpsWorksCmDescribeBackupsRequest): OpsWorksCMResponsesDescribeBackups {
    return new OpsWorksCMResponsesDescribeBackups(this, this.__resources, input);
  }

  public describeEvents(input: shapes.OpsWorksCmDescribeEventsRequest): OpsWorksCMResponsesDescribeEvents {
    return new OpsWorksCMResponsesDescribeEvents(this, this.__resources, input);
  }

  public describeNodeAssociationStatus(input: shapes.OpsWorksCmDescribeNodeAssociationStatusRequest): OpsWorksCMResponsesDescribeNodeAssociationStatus {
    return new OpsWorksCMResponsesDescribeNodeAssociationStatus(this, this.__resources, input);
  }

  public describeServers(input: shapes.OpsWorksCmDescribeServersRequest): OpsWorksCMResponsesDescribeServers {
    return new OpsWorksCMResponsesDescribeServers(this, this.__resources, input);
  }

  public disassociateNode(input: shapes.OpsWorksCmDisassociateNodeRequest): OpsWorksCMResponsesDisassociateNode {
    return new OpsWorksCMResponsesDisassociateNode(this, this.__resources, input);
  }

  public exportServerEngineAttribute(input: shapes.OpsWorksCmExportServerEngineAttributeRequest): OpsWorksCMResponsesExportServerEngineAttribute {
    return new OpsWorksCMResponsesExportServerEngineAttribute(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.OpsWorksCmListTagsForResourceRequest): OpsWorksCMResponsesListTagsForResource {
    return new OpsWorksCMResponsesListTagsForResource(this, this.__resources, input);
  }

  public restoreServer(input: shapes.OpsWorksCmRestoreServerRequest): OpsWorksCMResponsesRestoreServer {
    return new OpsWorksCMResponsesRestoreServer(this, this.__resources, input);
  }

  public startMaintenance(input: shapes.OpsWorksCmStartMaintenanceRequest): OpsWorksCMResponsesStartMaintenance {
    return new OpsWorksCMResponsesStartMaintenance(this, this.__resources, input);
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

  public updateServer(input: shapes.OpsWorksCmUpdateServerRequest): OpsWorksCMResponsesUpdateServer {
    return new OpsWorksCMResponsesUpdateServer(this, this.__resources, input);
  }

  public updateServerEngineAttributes(input: shapes.OpsWorksCmUpdateServerEngineAttributesRequest): OpsWorksCMResponsesUpdateServerEngineAttributes {
    return new OpsWorksCMResponsesUpdateServerEngineAttributes(this, this.__resources, input);
  }

}

export class OpsWorksCMResponsesAssociateNode {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksCmAssociateNodeRequest) {
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
          ServerName: this.__input.serverName,
          NodeName: this.__input.nodeName,
          EngineAttributes: this.__input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateNode.NodeAssociationStatusToken', props);
    return resource.getResponseField('NodeAssociationStatusToken') as unknown as string;
  }

}

export class OpsWorksCMResponsesCreateBackup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksCmCreateBackupRequest) {
  }

  public get backup(): OpsWorksCMResponsesCreateBackupBackup {
    return new OpsWorksCMResponsesCreateBackupBackup(this.__scope, this.__resources, this.__input);
  }

}

export class OpsWorksCMResponsesCreateBackupBackup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksCmCreateBackupRequest) {
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
          ServerName: this.__input.serverName,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.BackupArn', props);
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
          ServerName: this.__input.serverName,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.BackupId', props);
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
          ServerName: this.__input.serverName,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.BackupType', props);
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
          ServerName: this.__input.serverName,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.CreatedAt', props);
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
          ServerName: this.__input.serverName,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.Description', props);
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
          ServerName: this.__input.serverName,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.Engine', props);
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
          ServerName: this.__input.serverName,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.EngineModel', props);
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
          ServerName: this.__input.serverName,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.EngineVersion', props);
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
          ServerName: this.__input.serverName,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.InstanceProfileArn', props);
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
          ServerName: this.__input.serverName,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.InstanceType', props);
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
          ServerName: this.__input.serverName,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.KeyPair', props);
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
          ServerName: this.__input.serverName,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.PreferredBackupWindow', props);
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
          ServerName: this.__input.serverName,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.PreferredMaintenanceWindow', props);
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
          ServerName: this.__input.serverName,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.S3DataSize', props);
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
          ServerName: this.__input.serverName,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.S3DataUrl', props);
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
          ServerName: this.__input.serverName,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.S3LogUrl', props);
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
          ServerName: this.__input.serverName,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.SecurityGroupIds', props);
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
          ServerName: this.__input.serverName,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.ServerName', props);
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
          ServerName: this.__input.serverName,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.ServiceRoleArn', props);
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
          ServerName: this.__input.serverName,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.Status', props);
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
          ServerName: this.__input.serverName,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.StatusDescription', props);
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
          ServerName: this.__input.serverName,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.SubnetIds', props);
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
          ServerName: this.__input.serverName,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.ToolsVersion', props);
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
          ServerName: this.__input.serverName,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.UserArn', props);
    return resource.getResponseField('Backup.UserArn') as unknown as string;
  }

}

export class OpsWorksCMResponsesCreateServer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksCmCreateServerRequest) {
  }

  public get server(): OpsWorksCMResponsesCreateServerServer {
    return new OpsWorksCMResponsesCreateServerServer(this.__scope, this.__resources, this.__input);
  }

}

export class OpsWorksCMResponsesCreateServerServer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksCmCreateServerRequest) {
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
          AssociatePublicIpAddress: this.__input.associatePublicIpAddress,
          CustomDomain: this.__input.customDomain,
          CustomCertificate: this.__input.customCertificate,
          CustomPrivateKey: this.__input.customPrivateKey,
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          Engine: this.__input.engine,
          EngineModel: this.__input.engineModel,
          EngineVersion: this.__input.engineVersion,
          EngineAttributes: this.__input.engineAttributes,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          InstanceProfileArn: this.__input.instanceProfileArn,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          SecurityGroupIds: this.__input.securityGroupIds,
          ServiceRoleArn: this.__input.serviceRoleArn,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServer.Server.AssociatePublicIpAddress', props);
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
          AssociatePublicIpAddress: this.__input.associatePublicIpAddress,
          CustomDomain: this.__input.customDomain,
          CustomCertificate: this.__input.customCertificate,
          CustomPrivateKey: this.__input.customPrivateKey,
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          Engine: this.__input.engine,
          EngineModel: this.__input.engineModel,
          EngineVersion: this.__input.engineVersion,
          EngineAttributes: this.__input.engineAttributes,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          InstanceProfileArn: this.__input.instanceProfileArn,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          SecurityGroupIds: this.__input.securityGroupIds,
          ServiceRoleArn: this.__input.serviceRoleArn,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServer.Server.BackupRetentionCount', props);
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
          AssociatePublicIpAddress: this.__input.associatePublicIpAddress,
          CustomDomain: this.__input.customDomain,
          CustomCertificate: this.__input.customCertificate,
          CustomPrivateKey: this.__input.customPrivateKey,
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          Engine: this.__input.engine,
          EngineModel: this.__input.engineModel,
          EngineVersion: this.__input.engineVersion,
          EngineAttributes: this.__input.engineAttributes,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          InstanceProfileArn: this.__input.instanceProfileArn,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          SecurityGroupIds: this.__input.securityGroupIds,
          ServiceRoleArn: this.__input.serviceRoleArn,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServer.Server.ServerName', props);
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
          AssociatePublicIpAddress: this.__input.associatePublicIpAddress,
          CustomDomain: this.__input.customDomain,
          CustomCertificate: this.__input.customCertificate,
          CustomPrivateKey: this.__input.customPrivateKey,
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          Engine: this.__input.engine,
          EngineModel: this.__input.engineModel,
          EngineVersion: this.__input.engineVersion,
          EngineAttributes: this.__input.engineAttributes,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          InstanceProfileArn: this.__input.instanceProfileArn,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          SecurityGroupIds: this.__input.securityGroupIds,
          ServiceRoleArn: this.__input.serviceRoleArn,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServer.Server.CreatedAt', props);
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
          AssociatePublicIpAddress: this.__input.associatePublicIpAddress,
          CustomDomain: this.__input.customDomain,
          CustomCertificate: this.__input.customCertificate,
          CustomPrivateKey: this.__input.customPrivateKey,
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          Engine: this.__input.engine,
          EngineModel: this.__input.engineModel,
          EngineVersion: this.__input.engineVersion,
          EngineAttributes: this.__input.engineAttributes,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          InstanceProfileArn: this.__input.instanceProfileArn,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          SecurityGroupIds: this.__input.securityGroupIds,
          ServiceRoleArn: this.__input.serviceRoleArn,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServer.Server.CloudFormationStackArn', props);
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
          AssociatePublicIpAddress: this.__input.associatePublicIpAddress,
          CustomDomain: this.__input.customDomain,
          CustomCertificate: this.__input.customCertificate,
          CustomPrivateKey: this.__input.customPrivateKey,
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          Engine: this.__input.engine,
          EngineModel: this.__input.engineModel,
          EngineVersion: this.__input.engineVersion,
          EngineAttributes: this.__input.engineAttributes,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          InstanceProfileArn: this.__input.instanceProfileArn,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          SecurityGroupIds: this.__input.securityGroupIds,
          ServiceRoleArn: this.__input.serviceRoleArn,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServer.Server.CustomDomain', props);
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
          AssociatePublicIpAddress: this.__input.associatePublicIpAddress,
          CustomDomain: this.__input.customDomain,
          CustomCertificate: this.__input.customCertificate,
          CustomPrivateKey: this.__input.customPrivateKey,
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          Engine: this.__input.engine,
          EngineModel: this.__input.engineModel,
          EngineVersion: this.__input.engineVersion,
          EngineAttributes: this.__input.engineAttributes,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          InstanceProfileArn: this.__input.instanceProfileArn,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          SecurityGroupIds: this.__input.securityGroupIds,
          ServiceRoleArn: this.__input.serviceRoleArn,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServer.Server.DisableAutomatedBackup', props);
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
          AssociatePublicIpAddress: this.__input.associatePublicIpAddress,
          CustomDomain: this.__input.customDomain,
          CustomCertificate: this.__input.customCertificate,
          CustomPrivateKey: this.__input.customPrivateKey,
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          Engine: this.__input.engine,
          EngineModel: this.__input.engineModel,
          EngineVersion: this.__input.engineVersion,
          EngineAttributes: this.__input.engineAttributes,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          InstanceProfileArn: this.__input.instanceProfileArn,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          SecurityGroupIds: this.__input.securityGroupIds,
          ServiceRoleArn: this.__input.serviceRoleArn,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServer.Server.Endpoint', props);
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
          AssociatePublicIpAddress: this.__input.associatePublicIpAddress,
          CustomDomain: this.__input.customDomain,
          CustomCertificate: this.__input.customCertificate,
          CustomPrivateKey: this.__input.customPrivateKey,
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          Engine: this.__input.engine,
          EngineModel: this.__input.engineModel,
          EngineVersion: this.__input.engineVersion,
          EngineAttributes: this.__input.engineAttributes,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          InstanceProfileArn: this.__input.instanceProfileArn,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          SecurityGroupIds: this.__input.securityGroupIds,
          ServiceRoleArn: this.__input.serviceRoleArn,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServer.Server.Engine', props);
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
          AssociatePublicIpAddress: this.__input.associatePublicIpAddress,
          CustomDomain: this.__input.customDomain,
          CustomCertificate: this.__input.customCertificate,
          CustomPrivateKey: this.__input.customPrivateKey,
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          Engine: this.__input.engine,
          EngineModel: this.__input.engineModel,
          EngineVersion: this.__input.engineVersion,
          EngineAttributes: this.__input.engineAttributes,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          InstanceProfileArn: this.__input.instanceProfileArn,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          SecurityGroupIds: this.__input.securityGroupIds,
          ServiceRoleArn: this.__input.serviceRoleArn,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServer.Server.EngineModel', props);
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
          AssociatePublicIpAddress: this.__input.associatePublicIpAddress,
          CustomDomain: this.__input.customDomain,
          CustomCertificate: this.__input.customCertificate,
          CustomPrivateKey: this.__input.customPrivateKey,
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          Engine: this.__input.engine,
          EngineModel: this.__input.engineModel,
          EngineVersion: this.__input.engineVersion,
          EngineAttributes: this.__input.engineAttributes,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          InstanceProfileArn: this.__input.instanceProfileArn,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          SecurityGroupIds: this.__input.securityGroupIds,
          ServiceRoleArn: this.__input.serviceRoleArn,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServer.Server.EngineAttributes', props);
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
          AssociatePublicIpAddress: this.__input.associatePublicIpAddress,
          CustomDomain: this.__input.customDomain,
          CustomCertificate: this.__input.customCertificate,
          CustomPrivateKey: this.__input.customPrivateKey,
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          Engine: this.__input.engine,
          EngineModel: this.__input.engineModel,
          EngineVersion: this.__input.engineVersion,
          EngineAttributes: this.__input.engineAttributes,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          InstanceProfileArn: this.__input.instanceProfileArn,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          SecurityGroupIds: this.__input.securityGroupIds,
          ServiceRoleArn: this.__input.serviceRoleArn,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServer.Server.EngineVersion', props);
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
          AssociatePublicIpAddress: this.__input.associatePublicIpAddress,
          CustomDomain: this.__input.customDomain,
          CustomCertificate: this.__input.customCertificate,
          CustomPrivateKey: this.__input.customPrivateKey,
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          Engine: this.__input.engine,
          EngineModel: this.__input.engineModel,
          EngineVersion: this.__input.engineVersion,
          EngineAttributes: this.__input.engineAttributes,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          InstanceProfileArn: this.__input.instanceProfileArn,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          SecurityGroupIds: this.__input.securityGroupIds,
          ServiceRoleArn: this.__input.serviceRoleArn,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServer.Server.InstanceProfileArn', props);
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
          AssociatePublicIpAddress: this.__input.associatePublicIpAddress,
          CustomDomain: this.__input.customDomain,
          CustomCertificate: this.__input.customCertificate,
          CustomPrivateKey: this.__input.customPrivateKey,
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          Engine: this.__input.engine,
          EngineModel: this.__input.engineModel,
          EngineVersion: this.__input.engineVersion,
          EngineAttributes: this.__input.engineAttributes,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          InstanceProfileArn: this.__input.instanceProfileArn,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          SecurityGroupIds: this.__input.securityGroupIds,
          ServiceRoleArn: this.__input.serviceRoleArn,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServer.Server.InstanceType', props);
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
          AssociatePublicIpAddress: this.__input.associatePublicIpAddress,
          CustomDomain: this.__input.customDomain,
          CustomCertificate: this.__input.customCertificate,
          CustomPrivateKey: this.__input.customPrivateKey,
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          Engine: this.__input.engine,
          EngineModel: this.__input.engineModel,
          EngineVersion: this.__input.engineVersion,
          EngineAttributes: this.__input.engineAttributes,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          InstanceProfileArn: this.__input.instanceProfileArn,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          SecurityGroupIds: this.__input.securityGroupIds,
          ServiceRoleArn: this.__input.serviceRoleArn,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServer.Server.KeyPair', props);
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
          AssociatePublicIpAddress: this.__input.associatePublicIpAddress,
          CustomDomain: this.__input.customDomain,
          CustomCertificate: this.__input.customCertificate,
          CustomPrivateKey: this.__input.customPrivateKey,
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          Engine: this.__input.engine,
          EngineModel: this.__input.engineModel,
          EngineVersion: this.__input.engineVersion,
          EngineAttributes: this.__input.engineAttributes,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          InstanceProfileArn: this.__input.instanceProfileArn,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          SecurityGroupIds: this.__input.securityGroupIds,
          ServiceRoleArn: this.__input.serviceRoleArn,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServer.Server.MaintenanceStatus', props);
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
          AssociatePublicIpAddress: this.__input.associatePublicIpAddress,
          CustomDomain: this.__input.customDomain,
          CustomCertificate: this.__input.customCertificate,
          CustomPrivateKey: this.__input.customPrivateKey,
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          Engine: this.__input.engine,
          EngineModel: this.__input.engineModel,
          EngineVersion: this.__input.engineVersion,
          EngineAttributes: this.__input.engineAttributes,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          InstanceProfileArn: this.__input.instanceProfileArn,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          SecurityGroupIds: this.__input.securityGroupIds,
          ServiceRoleArn: this.__input.serviceRoleArn,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServer.Server.PreferredMaintenanceWindow', props);
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
          AssociatePublicIpAddress: this.__input.associatePublicIpAddress,
          CustomDomain: this.__input.customDomain,
          CustomCertificate: this.__input.customCertificate,
          CustomPrivateKey: this.__input.customPrivateKey,
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          Engine: this.__input.engine,
          EngineModel: this.__input.engineModel,
          EngineVersion: this.__input.engineVersion,
          EngineAttributes: this.__input.engineAttributes,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          InstanceProfileArn: this.__input.instanceProfileArn,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          SecurityGroupIds: this.__input.securityGroupIds,
          ServiceRoleArn: this.__input.serviceRoleArn,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServer.Server.PreferredBackupWindow', props);
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
          AssociatePublicIpAddress: this.__input.associatePublicIpAddress,
          CustomDomain: this.__input.customDomain,
          CustomCertificate: this.__input.customCertificate,
          CustomPrivateKey: this.__input.customPrivateKey,
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          Engine: this.__input.engine,
          EngineModel: this.__input.engineModel,
          EngineVersion: this.__input.engineVersion,
          EngineAttributes: this.__input.engineAttributes,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          InstanceProfileArn: this.__input.instanceProfileArn,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          SecurityGroupIds: this.__input.securityGroupIds,
          ServiceRoleArn: this.__input.serviceRoleArn,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServer.Server.SecurityGroupIds', props);
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
          AssociatePublicIpAddress: this.__input.associatePublicIpAddress,
          CustomDomain: this.__input.customDomain,
          CustomCertificate: this.__input.customCertificate,
          CustomPrivateKey: this.__input.customPrivateKey,
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          Engine: this.__input.engine,
          EngineModel: this.__input.engineModel,
          EngineVersion: this.__input.engineVersion,
          EngineAttributes: this.__input.engineAttributes,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          InstanceProfileArn: this.__input.instanceProfileArn,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          SecurityGroupIds: this.__input.securityGroupIds,
          ServiceRoleArn: this.__input.serviceRoleArn,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServer.Server.ServiceRoleArn', props);
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
          AssociatePublicIpAddress: this.__input.associatePublicIpAddress,
          CustomDomain: this.__input.customDomain,
          CustomCertificate: this.__input.customCertificate,
          CustomPrivateKey: this.__input.customPrivateKey,
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          Engine: this.__input.engine,
          EngineModel: this.__input.engineModel,
          EngineVersion: this.__input.engineVersion,
          EngineAttributes: this.__input.engineAttributes,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          InstanceProfileArn: this.__input.instanceProfileArn,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          SecurityGroupIds: this.__input.securityGroupIds,
          ServiceRoleArn: this.__input.serviceRoleArn,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServer.Server.Status', props);
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
          AssociatePublicIpAddress: this.__input.associatePublicIpAddress,
          CustomDomain: this.__input.customDomain,
          CustomCertificate: this.__input.customCertificate,
          CustomPrivateKey: this.__input.customPrivateKey,
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          Engine: this.__input.engine,
          EngineModel: this.__input.engineModel,
          EngineVersion: this.__input.engineVersion,
          EngineAttributes: this.__input.engineAttributes,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          InstanceProfileArn: this.__input.instanceProfileArn,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          SecurityGroupIds: this.__input.securityGroupIds,
          ServiceRoleArn: this.__input.serviceRoleArn,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServer.Server.StatusReason', props);
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
          AssociatePublicIpAddress: this.__input.associatePublicIpAddress,
          CustomDomain: this.__input.customDomain,
          CustomCertificate: this.__input.customCertificate,
          CustomPrivateKey: this.__input.customPrivateKey,
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          Engine: this.__input.engine,
          EngineModel: this.__input.engineModel,
          EngineVersion: this.__input.engineVersion,
          EngineAttributes: this.__input.engineAttributes,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          InstanceProfileArn: this.__input.instanceProfileArn,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          SecurityGroupIds: this.__input.securityGroupIds,
          ServiceRoleArn: this.__input.serviceRoleArn,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServer.Server.SubnetIds', props);
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
          AssociatePublicIpAddress: this.__input.associatePublicIpAddress,
          CustomDomain: this.__input.customDomain,
          CustomCertificate: this.__input.customCertificate,
          CustomPrivateKey: this.__input.customPrivateKey,
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          Engine: this.__input.engine,
          EngineModel: this.__input.engineModel,
          EngineVersion: this.__input.engineVersion,
          EngineAttributes: this.__input.engineAttributes,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          InstanceProfileArn: this.__input.instanceProfileArn,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          SecurityGroupIds: this.__input.securityGroupIds,
          ServiceRoleArn: this.__input.serviceRoleArn,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
          BackupId: this.__input.backupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServer.Server.ServerArn', props);
    return resource.getResponseField('Server.ServerArn') as unknown as string;
  }

}

export class OpsWorksCMResponsesDescribeAccountAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountAttributes.Attributes', props);
    return resource.getResponseField('Attributes') as unknown as shapes.OpsWorksCmAccountAttribute[];
  }

}

export class OpsWorksCMResponsesDescribeBackups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksCmDescribeBackupsRequest) {
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
          BackupId: this.__input.backupId,
          ServerName: this.__input.serverName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackups.Backups', props);
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
          BackupId: this.__input.backupId,
          ServerName: this.__input.serverName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OpsWorksCMResponsesDescribeEvents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksCmDescribeEventsRequest) {
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
          ServerName: this.__input.serverName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEvents.ServerEvents', props);
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
          ServerName: this.__input.serverName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEvents.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OpsWorksCMResponsesDescribeNodeAssociationStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksCmDescribeNodeAssociationStatusRequest) {
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
          NodeAssociationStatusToken: this.__input.nodeAssociationStatusToken,
          ServerName: this.__input.serverName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNodeAssociationStatus.NodeAssociationStatus', props);
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
          NodeAssociationStatusToken: this.__input.nodeAssociationStatusToken,
          ServerName: this.__input.serverName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNodeAssociationStatus.EngineAttributes', props);
    return resource.getResponseField('EngineAttributes') as unknown as shapes.OpsWorksCmEngineAttribute[];
  }

}

export class OpsWorksCMResponsesDescribeServers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksCmDescribeServersRequest) {
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
          ServerName: this.__input.serverName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServers.Servers', props);
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
          ServerName: this.__input.serverName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OpsWorksCMResponsesDisassociateNode {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksCmDisassociateNodeRequest) {
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
          ServerName: this.__input.serverName,
          NodeName: this.__input.nodeName,
          EngineAttributes: this.__input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateNode.NodeAssociationStatusToken', props);
    return resource.getResponseField('NodeAssociationStatusToken') as unknown as string;
  }

}

export class OpsWorksCMResponsesExportServerEngineAttribute {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksCmExportServerEngineAttributeRequest) {
  }

  public get engineAttribute(): OpsWorksCMResponsesExportServerEngineAttributeEngineAttribute {
    return new OpsWorksCMResponsesExportServerEngineAttributeEngineAttribute(this.__scope, this.__resources, this.__input);
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
          ExportAttributeName: this.__input.exportAttributeName,
          ServerName: this.__input.serverName,
          InputAttributes: this.__input.inputAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportServerEngineAttribute.ServerName', props);
    return resource.getResponseField('ServerName') as unknown as string;
  }

}

export class OpsWorksCMResponsesExportServerEngineAttributeEngineAttribute {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksCmExportServerEngineAttributeRequest) {
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
          ExportAttributeName: this.__input.exportAttributeName,
          ServerName: this.__input.serverName,
          InputAttributes: this.__input.inputAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportServerEngineAttribute.EngineAttribute.Name', props);
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
          ExportAttributeName: this.__input.exportAttributeName,
          ServerName: this.__input.serverName,
          InputAttributes: this.__input.inputAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportServerEngineAttribute.EngineAttribute.Value', props);
    return resource.getResponseField('EngineAttribute.Value') as unknown as string;
  }

}

export class OpsWorksCMResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksCmListTagsForResourceRequest) {
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
          ResourceArn: this.__input.resourceArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
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
          ResourceArn: this.__input.resourceArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OpsWorksCMResponsesRestoreServer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksCmRestoreServerRequest) {
  }

  public get server(): OpsWorksCMResponsesRestoreServerServer {
    return new OpsWorksCMResponsesRestoreServerServer(this.__scope, this.__resources, this.__input);
  }

}

export class OpsWorksCMResponsesRestoreServerServer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksCmRestoreServerRequest) {
  }

  public get associatePublicIpAddress(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.RestoreServer.Server.AssociatePublicIpAddress'),
        outputPath: 'Server.AssociatePublicIpAddress',
        parameters: {
          BackupId: this.__input.backupId,
          ServerName: this.__input.serverName,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreServer.Server.AssociatePublicIpAddress', props);
    return resource.getResponseField('Server.AssociatePublicIpAddress') as unknown as boolean;
  }

  public get backupRetentionCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.RestoreServer.Server.BackupRetentionCount'),
        outputPath: 'Server.BackupRetentionCount',
        parameters: {
          BackupId: this.__input.backupId,
          ServerName: this.__input.serverName,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreServer.Server.BackupRetentionCount', props);
    return resource.getResponseField('Server.BackupRetentionCount') as unknown as number;
  }

  public get serverName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.RestoreServer.Server.ServerName'),
        outputPath: 'Server.ServerName',
        parameters: {
          BackupId: this.__input.backupId,
          ServerName: this.__input.serverName,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreServer.Server.ServerName', props);
    return resource.getResponseField('Server.ServerName') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.RestoreServer.Server.CreatedAt'),
        outputPath: 'Server.CreatedAt',
        parameters: {
          BackupId: this.__input.backupId,
          ServerName: this.__input.serverName,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreServer.Server.CreatedAt', props);
    return resource.getResponseField('Server.CreatedAt') as unknown as string;
  }

  public get cloudFormationStackArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.RestoreServer.Server.CloudFormationStackArn'),
        outputPath: 'Server.CloudFormationStackArn',
        parameters: {
          BackupId: this.__input.backupId,
          ServerName: this.__input.serverName,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreServer.Server.CloudFormationStackArn', props);
    return resource.getResponseField('Server.CloudFormationStackArn') as unknown as string;
  }

  public get customDomain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.RestoreServer.Server.CustomDomain'),
        outputPath: 'Server.CustomDomain',
        parameters: {
          BackupId: this.__input.backupId,
          ServerName: this.__input.serverName,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreServer.Server.CustomDomain', props);
    return resource.getResponseField('Server.CustomDomain') as unknown as string;
  }

  public get disableAutomatedBackup(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.RestoreServer.Server.DisableAutomatedBackup'),
        outputPath: 'Server.DisableAutomatedBackup',
        parameters: {
          BackupId: this.__input.backupId,
          ServerName: this.__input.serverName,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreServer.Server.DisableAutomatedBackup', props);
    return resource.getResponseField('Server.DisableAutomatedBackup') as unknown as boolean;
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.RestoreServer.Server.Endpoint'),
        outputPath: 'Server.Endpoint',
        parameters: {
          BackupId: this.__input.backupId,
          ServerName: this.__input.serverName,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreServer.Server.Endpoint', props);
    return resource.getResponseField('Server.Endpoint') as unknown as string;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.RestoreServer.Server.Engine'),
        outputPath: 'Server.Engine',
        parameters: {
          BackupId: this.__input.backupId,
          ServerName: this.__input.serverName,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreServer.Server.Engine', props);
    return resource.getResponseField('Server.Engine') as unknown as string;
  }

  public get engineModel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.RestoreServer.Server.EngineModel'),
        outputPath: 'Server.EngineModel',
        parameters: {
          BackupId: this.__input.backupId,
          ServerName: this.__input.serverName,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreServer.Server.EngineModel', props);
    return resource.getResponseField('Server.EngineModel') as unknown as string;
  }

  public get engineAttributes(): shapes.OpsWorksCmEngineAttribute[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.RestoreServer.Server.EngineAttributes'),
        outputPath: 'Server.EngineAttributes',
        parameters: {
          BackupId: this.__input.backupId,
          ServerName: this.__input.serverName,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreServer.Server.EngineAttributes', props);
    return resource.getResponseField('Server.EngineAttributes') as unknown as shapes.OpsWorksCmEngineAttribute[];
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.RestoreServer.Server.EngineVersion'),
        outputPath: 'Server.EngineVersion',
        parameters: {
          BackupId: this.__input.backupId,
          ServerName: this.__input.serverName,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreServer.Server.EngineVersion', props);
    return resource.getResponseField('Server.EngineVersion') as unknown as string;
  }

  public get instanceProfileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.RestoreServer.Server.InstanceProfileArn'),
        outputPath: 'Server.InstanceProfileArn',
        parameters: {
          BackupId: this.__input.backupId,
          ServerName: this.__input.serverName,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreServer.Server.InstanceProfileArn', props);
    return resource.getResponseField('Server.InstanceProfileArn') as unknown as string;
  }

  public get instanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.RestoreServer.Server.InstanceType'),
        outputPath: 'Server.InstanceType',
        parameters: {
          BackupId: this.__input.backupId,
          ServerName: this.__input.serverName,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreServer.Server.InstanceType', props);
    return resource.getResponseField('Server.InstanceType') as unknown as string;
  }

  public get keyPair(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.RestoreServer.Server.KeyPair'),
        outputPath: 'Server.KeyPair',
        parameters: {
          BackupId: this.__input.backupId,
          ServerName: this.__input.serverName,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreServer.Server.KeyPair', props);
    return resource.getResponseField('Server.KeyPair') as unknown as string;
  }

  public get maintenanceStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.RestoreServer.Server.MaintenanceStatus'),
        outputPath: 'Server.MaintenanceStatus',
        parameters: {
          BackupId: this.__input.backupId,
          ServerName: this.__input.serverName,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreServer.Server.MaintenanceStatus', props);
    return resource.getResponseField('Server.MaintenanceStatus') as unknown as string;
  }

  public get preferredMaintenanceWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.RestoreServer.Server.PreferredMaintenanceWindow'),
        outputPath: 'Server.PreferredMaintenanceWindow',
        parameters: {
          BackupId: this.__input.backupId,
          ServerName: this.__input.serverName,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreServer.Server.PreferredMaintenanceWindow', props);
    return resource.getResponseField('Server.PreferredMaintenanceWindow') as unknown as string;
  }

  public get preferredBackupWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.RestoreServer.Server.PreferredBackupWindow'),
        outputPath: 'Server.PreferredBackupWindow',
        parameters: {
          BackupId: this.__input.backupId,
          ServerName: this.__input.serverName,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreServer.Server.PreferredBackupWindow', props);
    return resource.getResponseField('Server.PreferredBackupWindow') as unknown as string;
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.RestoreServer.Server.SecurityGroupIds'),
        outputPath: 'Server.SecurityGroupIds',
        parameters: {
          BackupId: this.__input.backupId,
          ServerName: this.__input.serverName,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreServer.Server.SecurityGroupIds', props);
    return resource.getResponseField('Server.SecurityGroupIds') as unknown as string[];
  }

  public get serviceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.RestoreServer.Server.ServiceRoleArn'),
        outputPath: 'Server.ServiceRoleArn',
        parameters: {
          BackupId: this.__input.backupId,
          ServerName: this.__input.serverName,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreServer.Server.ServiceRoleArn', props);
    return resource.getResponseField('Server.ServiceRoleArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.RestoreServer.Server.Status'),
        outputPath: 'Server.Status',
        parameters: {
          BackupId: this.__input.backupId,
          ServerName: this.__input.serverName,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreServer.Server.Status', props);
    return resource.getResponseField('Server.Status') as unknown as string;
  }

  public get statusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.RestoreServer.Server.StatusReason'),
        outputPath: 'Server.StatusReason',
        parameters: {
          BackupId: this.__input.backupId,
          ServerName: this.__input.serverName,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreServer.Server.StatusReason', props);
    return resource.getResponseField('Server.StatusReason') as unknown as string;
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.RestoreServer.Server.SubnetIds'),
        outputPath: 'Server.SubnetIds',
        parameters: {
          BackupId: this.__input.backupId,
          ServerName: this.__input.serverName,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreServer.Server.SubnetIds', props);
    return resource.getResponseField('Server.SubnetIds') as unknown as string[];
  }

  public get serverArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreServer',
        service: 'OpsWorksCM',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorksCM.RestoreServer.Server.ServerArn'),
        outputPath: 'Server.ServerArn',
        parameters: {
          BackupId: this.__input.backupId,
          ServerName: this.__input.serverName,
          InstanceType: this.__input.instanceType,
          KeyPair: this.__input.keyPair,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreServer.Server.ServerArn', props);
    return resource.getResponseField('Server.ServerArn') as unknown as string;
  }

}

export class OpsWorksCMResponsesStartMaintenance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksCmStartMaintenanceRequest) {
  }

  public get server(): OpsWorksCMResponsesStartMaintenanceServer {
    return new OpsWorksCMResponsesStartMaintenanceServer(this.__scope, this.__resources, this.__input);
  }

}

export class OpsWorksCMResponsesStartMaintenanceServer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksCmStartMaintenanceRequest) {
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
          ServerName: this.__input.serverName,
          EngineAttributes: this.__input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMaintenance.Server.AssociatePublicIpAddress', props);
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
          ServerName: this.__input.serverName,
          EngineAttributes: this.__input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMaintenance.Server.BackupRetentionCount', props);
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
          ServerName: this.__input.serverName,
          EngineAttributes: this.__input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMaintenance.Server.ServerName', props);
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
          ServerName: this.__input.serverName,
          EngineAttributes: this.__input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMaintenance.Server.CreatedAt', props);
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
          ServerName: this.__input.serverName,
          EngineAttributes: this.__input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMaintenance.Server.CloudFormationStackArn', props);
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
          ServerName: this.__input.serverName,
          EngineAttributes: this.__input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMaintenance.Server.CustomDomain', props);
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
          ServerName: this.__input.serverName,
          EngineAttributes: this.__input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMaintenance.Server.DisableAutomatedBackup', props);
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
          ServerName: this.__input.serverName,
          EngineAttributes: this.__input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMaintenance.Server.Endpoint', props);
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
          ServerName: this.__input.serverName,
          EngineAttributes: this.__input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMaintenance.Server.Engine', props);
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
          ServerName: this.__input.serverName,
          EngineAttributes: this.__input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMaintenance.Server.EngineModel', props);
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
          ServerName: this.__input.serverName,
          EngineAttributes: this.__input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMaintenance.Server.EngineAttributes', props);
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
          ServerName: this.__input.serverName,
          EngineAttributes: this.__input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMaintenance.Server.EngineVersion', props);
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
          ServerName: this.__input.serverName,
          EngineAttributes: this.__input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMaintenance.Server.InstanceProfileArn', props);
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
          ServerName: this.__input.serverName,
          EngineAttributes: this.__input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMaintenance.Server.InstanceType', props);
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
          ServerName: this.__input.serverName,
          EngineAttributes: this.__input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMaintenance.Server.KeyPair', props);
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
          ServerName: this.__input.serverName,
          EngineAttributes: this.__input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMaintenance.Server.MaintenanceStatus', props);
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
          ServerName: this.__input.serverName,
          EngineAttributes: this.__input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMaintenance.Server.PreferredMaintenanceWindow', props);
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
          ServerName: this.__input.serverName,
          EngineAttributes: this.__input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMaintenance.Server.PreferredBackupWindow', props);
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
          ServerName: this.__input.serverName,
          EngineAttributes: this.__input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMaintenance.Server.SecurityGroupIds', props);
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
          ServerName: this.__input.serverName,
          EngineAttributes: this.__input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMaintenance.Server.ServiceRoleArn', props);
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
          ServerName: this.__input.serverName,
          EngineAttributes: this.__input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMaintenance.Server.Status', props);
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
          ServerName: this.__input.serverName,
          EngineAttributes: this.__input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMaintenance.Server.StatusReason', props);
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
          ServerName: this.__input.serverName,
          EngineAttributes: this.__input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMaintenance.Server.SubnetIds', props);
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
          ServerName: this.__input.serverName,
          EngineAttributes: this.__input.engineAttributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMaintenance.Server.ServerArn', props);
    return resource.getResponseField('Server.ServerArn') as unknown as string;
  }

}

export class OpsWorksCMResponsesUpdateServer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksCmUpdateServerRequest) {
  }

  public get server(): OpsWorksCMResponsesUpdateServerServer {
    return new OpsWorksCMResponsesUpdateServerServer(this.__scope, this.__resources, this.__input);
  }

}

export class OpsWorksCMResponsesUpdateServerServer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksCmUpdateServerRequest) {
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
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServer.Server.AssociatePublicIpAddress', props);
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
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServer.Server.BackupRetentionCount', props);
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
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServer.Server.ServerName', props);
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
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServer.Server.CreatedAt', props);
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
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServer.Server.CloudFormationStackArn', props);
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
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServer.Server.CustomDomain', props);
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
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServer.Server.DisableAutomatedBackup', props);
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
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServer.Server.Endpoint', props);
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
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServer.Server.Engine', props);
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
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServer.Server.EngineModel', props);
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
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServer.Server.EngineAttributes', props);
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
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServer.Server.EngineVersion', props);
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
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServer.Server.InstanceProfileArn', props);
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
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServer.Server.InstanceType', props);
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
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServer.Server.KeyPair', props);
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
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServer.Server.MaintenanceStatus', props);
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
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServer.Server.PreferredMaintenanceWindow', props);
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
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServer.Server.PreferredBackupWindow', props);
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
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServer.Server.SecurityGroupIds', props);
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
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServer.Server.ServiceRoleArn', props);
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
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServer.Server.Status', props);
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
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServer.Server.StatusReason', props);
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
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServer.Server.SubnetIds', props);
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
          DisableAutomatedBackup: this.__input.disableAutomatedBackup,
          BackupRetentionCount: this.__input.backupRetentionCount,
          ServerName: this.__input.serverName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServer.Server.ServerArn', props);
    return resource.getResponseField('Server.ServerArn') as unknown as string;
  }

}

export class OpsWorksCMResponsesUpdateServerEngineAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksCmUpdateServerEngineAttributesRequest) {
  }

  public get server(): OpsWorksCMResponsesUpdateServerEngineAttributesServer {
    return new OpsWorksCMResponsesUpdateServerEngineAttributesServer(this.__scope, this.__resources, this.__input);
  }

}

export class OpsWorksCMResponsesUpdateServerEngineAttributesServer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksCmUpdateServerEngineAttributesRequest) {
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
          ServerName: this.__input.serverName,
          AttributeName: this.__input.attributeName,
          AttributeValue: this.__input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServerEngineAttributes.Server.AssociatePublicIpAddress', props);
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
          ServerName: this.__input.serverName,
          AttributeName: this.__input.attributeName,
          AttributeValue: this.__input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServerEngineAttributes.Server.BackupRetentionCount', props);
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
          ServerName: this.__input.serverName,
          AttributeName: this.__input.attributeName,
          AttributeValue: this.__input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServerEngineAttributes.Server.ServerName', props);
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
          ServerName: this.__input.serverName,
          AttributeName: this.__input.attributeName,
          AttributeValue: this.__input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServerEngineAttributes.Server.CreatedAt', props);
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
          ServerName: this.__input.serverName,
          AttributeName: this.__input.attributeName,
          AttributeValue: this.__input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServerEngineAttributes.Server.CloudFormationStackArn', props);
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
          ServerName: this.__input.serverName,
          AttributeName: this.__input.attributeName,
          AttributeValue: this.__input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServerEngineAttributes.Server.CustomDomain', props);
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
          ServerName: this.__input.serverName,
          AttributeName: this.__input.attributeName,
          AttributeValue: this.__input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServerEngineAttributes.Server.DisableAutomatedBackup', props);
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
          ServerName: this.__input.serverName,
          AttributeName: this.__input.attributeName,
          AttributeValue: this.__input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServerEngineAttributes.Server.Endpoint', props);
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
          ServerName: this.__input.serverName,
          AttributeName: this.__input.attributeName,
          AttributeValue: this.__input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServerEngineAttributes.Server.Engine', props);
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
          ServerName: this.__input.serverName,
          AttributeName: this.__input.attributeName,
          AttributeValue: this.__input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServerEngineAttributes.Server.EngineModel', props);
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
          ServerName: this.__input.serverName,
          AttributeName: this.__input.attributeName,
          AttributeValue: this.__input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServerEngineAttributes.Server.EngineAttributes', props);
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
          ServerName: this.__input.serverName,
          AttributeName: this.__input.attributeName,
          AttributeValue: this.__input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServerEngineAttributes.Server.EngineVersion', props);
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
          ServerName: this.__input.serverName,
          AttributeName: this.__input.attributeName,
          AttributeValue: this.__input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServerEngineAttributes.Server.InstanceProfileArn', props);
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
          ServerName: this.__input.serverName,
          AttributeName: this.__input.attributeName,
          AttributeValue: this.__input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServerEngineAttributes.Server.InstanceType', props);
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
          ServerName: this.__input.serverName,
          AttributeName: this.__input.attributeName,
          AttributeValue: this.__input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServerEngineAttributes.Server.KeyPair', props);
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
          ServerName: this.__input.serverName,
          AttributeName: this.__input.attributeName,
          AttributeValue: this.__input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServerEngineAttributes.Server.MaintenanceStatus', props);
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
          ServerName: this.__input.serverName,
          AttributeName: this.__input.attributeName,
          AttributeValue: this.__input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServerEngineAttributes.Server.PreferredMaintenanceWindow', props);
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
          ServerName: this.__input.serverName,
          AttributeName: this.__input.attributeName,
          AttributeValue: this.__input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServerEngineAttributes.Server.PreferredBackupWindow', props);
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
          ServerName: this.__input.serverName,
          AttributeName: this.__input.attributeName,
          AttributeValue: this.__input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServerEngineAttributes.Server.SecurityGroupIds', props);
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
          ServerName: this.__input.serverName,
          AttributeName: this.__input.attributeName,
          AttributeValue: this.__input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServerEngineAttributes.Server.ServiceRoleArn', props);
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
          ServerName: this.__input.serverName,
          AttributeName: this.__input.attributeName,
          AttributeValue: this.__input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServerEngineAttributes.Server.Status', props);
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
          ServerName: this.__input.serverName,
          AttributeName: this.__input.attributeName,
          AttributeValue: this.__input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServerEngineAttributes.Server.StatusReason', props);
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
          ServerName: this.__input.serverName,
          AttributeName: this.__input.attributeName,
          AttributeValue: this.__input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServerEngineAttributes.Server.SubnetIds', props);
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
          ServerName: this.__input.serverName,
          AttributeName: this.__input.attributeName,
          AttributeValue: this.__input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServerEngineAttributes.Server.ServerArn', props);
    return resource.getResponseField('Server.ServerArn') as unknown as string;
  }

}

