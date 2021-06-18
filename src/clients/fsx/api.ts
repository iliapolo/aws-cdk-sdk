import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class FSxClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateFileSystemAliases(input: shapes.FSxAssociateFileSystemAliasesRequest): FSxAssociateFileSystemAliases {
    return new FSxAssociateFileSystemAliases(this, 'AssociateFileSystemAliases', this.__resources, input);
  }

  public cancelDataRepositoryTask(input: shapes.FSxCancelDataRepositoryTaskRequest): FSxCancelDataRepositoryTask {
    return new FSxCancelDataRepositoryTask(this, 'CancelDataRepositoryTask', this.__resources, input);
  }

  public createBackup(input: shapes.FSxCreateBackupRequest): FSxCreateBackup {
    return new FSxCreateBackup(this, 'CreateBackup', this.__resources, input);
  }

  public createDataRepositoryTask(input: shapes.FSxCreateDataRepositoryTaskRequest): FSxCreateDataRepositoryTask {
    return new FSxCreateDataRepositoryTask(this, 'CreateDataRepositoryTask', this.__resources, input);
  }

  public createFileSystem(input: shapes.FSxCreateFileSystemRequest): FSxCreateFileSystem {
    return new FSxCreateFileSystem(this, 'CreateFileSystem', this.__resources, input);
  }

  public createFileSystemFromBackup(input: shapes.FSxCreateFileSystemFromBackupRequest): FSxCreateFileSystemFromBackup {
    return new FSxCreateFileSystemFromBackup(this, 'CreateFileSystemFromBackup', this.__resources, input);
  }

  public deleteBackup(input: shapes.FSxDeleteBackupRequest): FSxDeleteBackup {
    return new FSxDeleteBackup(this, 'DeleteBackup', this.__resources, input);
  }

  public deleteFileSystem(input: shapes.FSxDeleteFileSystemRequest): FSxDeleteFileSystem {
    return new FSxDeleteFileSystem(this, 'DeleteFileSystem', this.__resources, input);
  }

  public describeBackups(input: shapes.FSxDescribeBackupsRequest): FSxDescribeBackups {
    return new FSxDescribeBackups(this, 'DescribeBackups', this.__resources, input);
  }

  public describeDataRepositoryTasks(input: shapes.FSxDescribeDataRepositoryTasksRequest): FSxDescribeDataRepositoryTasks {
    return new FSxDescribeDataRepositoryTasks(this, 'DescribeDataRepositoryTasks', this.__resources, input);
  }

  public describeFileSystemAliases(input: shapes.FSxDescribeFileSystemAliasesRequest): FSxDescribeFileSystemAliases {
    return new FSxDescribeFileSystemAliases(this, 'DescribeFileSystemAliases', this.__resources, input);
  }

  public describeFileSystems(input: shapes.FSxDescribeFileSystemsRequest): FSxDescribeFileSystems {
    return new FSxDescribeFileSystems(this, 'DescribeFileSystems', this.__resources, input);
  }

  public disassociateFileSystemAliases(input: shapes.FSxDisassociateFileSystemAliasesRequest): FSxDisassociateFileSystemAliases {
    return new FSxDisassociateFileSystemAliases(this, 'DisassociateFileSystemAliases', this.__resources, input);
  }

  public listTagsForResource(input: shapes.FSxListTagsForResourceRequest): FSxListTagsForResource {
    return new FSxListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public tagResource(input: shapes.FSxTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.TagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.FSxUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UntagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateFileSystem(input: shapes.FSxUpdateFileSystemRequest): FSxUpdateFileSystem {
    return new FSxUpdateFileSystem(this, 'UpdateFileSystem', this.__resources, input);
  }

}

export class FSxAssociateFileSystemAliases extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxAssociateFileSystemAliasesRequest) {
    super(scope, id);
  }

  public get aliases(): shapes.FSxAlias[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateFileSystemAliases',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.AssociateFileSystemAliases.Aliases'),
        outputPath: 'Aliases',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemId: this.input.fileSystemId,
          Aliases: this.input.aliases,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateFileSystemAliases.Aliases', props);
    return resource.getResponseField('Aliases') as unknown as shapes.FSxAlias[];
  }

}

export class FSxCancelDataRepositoryTask extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxCancelDataRepositoryTaskRequest) {
    super(scope, id);
  }

  public get lifecycle(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelDataRepositoryTask',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CancelDataRepositoryTask.Lifecycle'),
        outputPath: 'Lifecycle',
        parameters: {
          TaskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelDataRepositoryTask.Lifecycle', props);
    return resource.getResponseField('Lifecycle') as unknown as string;
  }

  public get taskId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelDataRepositoryTask',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CancelDataRepositoryTask.TaskId'),
        outputPath: 'TaskId',
        parameters: {
          TaskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelDataRepositoryTask.TaskId', props);
    return resource.getResponseField('TaskId') as unknown as string;
  }

}

export class FSxCreateBackup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxCreateBackupRequest) {
    super(scope, id);
  }

  public get backup(): FSxCreateBackupBackup {
    return new FSxCreateBackupBackup(this, 'Backup', this.__resources, this.input);
  }

}

export class FSxCreateBackupBackup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxCreateBackupRequest) {
    super(scope, id);
  }

  public get backupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.BackupId'),
        outputPath: 'Backup.BackupId',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.BackupId', props);
    return resource.getResponseField('Backup.BackupId') as unknown as string;
  }

  public get lifecycle(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.Lifecycle'),
        outputPath: 'Backup.Lifecycle',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.Lifecycle', props);
    return resource.getResponseField('Backup.Lifecycle') as unknown as string;
  }

  public get failureDetails(): FSxCreateBackupBackupFailureDetails {
    return new FSxCreateBackupBackupFailureDetails(this, 'FailureDetails', this.__resources, this.input);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.Type'),
        outputPath: 'Backup.Type',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.Type', props);
    return resource.getResponseField('Backup.Type') as unknown as string;
  }

  public get progressPercent(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.ProgressPercent'),
        outputPath: 'Backup.ProgressPercent',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.ProgressPercent', props);
    return resource.getResponseField('Backup.ProgressPercent') as unknown as number;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.CreationTime'),
        outputPath: 'Backup.CreationTime',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.CreationTime', props);
    return resource.getResponseField('Backup.CreationTime') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.KmsKeyId'),
        outputPath: 'Backup.KmsKeyId',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.KmsKeyId', props);
    return resource.getResponseField('Backup.KmsKeyId') as unknown as string;
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.ResourceARN'),
        outputPath: 'Backup.ResourceARN',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.ResourceARN', props);
    return resource.getResponseField('Backup.ResourceARN') as unknown as string;
  }

  public get tags(): shapes.FSxTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.Tags'),
        outputPath: 'Backup.Tags',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.Tags', props);
    return resource.getResponseField('Backup.Tags') as unknown as shapes.FSxTag[];
  }

  public get fileSystem(): FSxCreateBackupBackupFileSystem {
    return new FSxCreateBackupBackupFileSystem(this, 'FileSystem', this.__resources, this.input);
  }

  public get directoryInformation(): FSxCreateBackupBackupDirectoryInformation {
    return new FSxCreateBackupBackupDirectoryInformation(this, 'DirectoryInformation', this.__resources, this.input);
  }

}

export class FSxCreateBackupBackupFailureDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxCreateBackupRequest) {
    super(scope, id);
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FailureDetails.Message'),
        outputPath: 'Backup.FailureDetails.Message',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FailureDetails.Message', props);
    return resource.getResponseField('Backup.FailureDetails.Message') as unknown as string;
  }

}

export class FSxCreateBackupBackupFileSystem extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxCreateBackupRequest) {
    super(scope, id);
  }

  public get ownerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.OwnerId'),
        outputPath: 'Backup.FileSystem.OwnerId',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.OwnerId', props);
    return resource.getResponseField('Backup.FileSystem.OwnerId') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.CreationTime'),
        outputPath: 'Backup.FileSystem.CreationTime',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.CreationTime', props);
    return resource.getResponseField('Backup.FileSystem.CreationTime') as unknown as string;
  }

  public get fileSystemId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.FileSystemId'),
        outputPath: 'Backup.FileSystem.FileSystemId',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.FileSystemId', props);
    return resource.getResponseField('Backup.FileSystem.FileSystemId') as unknown as string;
  }

  public get fileSystemType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.FileSystemType'),
        outputPath: 'Backup.FileSystem.FileSystemType',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.FileSystemType', props);
    return resource.getResponseField('Backup.FileSystem.FileSystemType') as unknown as string;
  }

  public get lifecycle(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.Lifecycle'),
        outputPath: 'Backup.FileSystem.Lifecycle',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.Lifecycle', props);
    return resource.getResponseField('Backup.FileSystem.Lifecycle') as unknown as string;
  }

  public get failureDetails(): FSxCreateBackupBackupFileSystemFailureDetails {
    return new FSxCreateBackupBackupFileSystemFailureDetails(this, 'FailureDetails', this.__resources, this.input);
  }

  public get storageCapacity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.StorageCapacity'),
        outputPath: 'Backup.FileSystem.StorageCapacity',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.StorageCapacity', props);
    return resource.getResponseField('Backup.FileSystem.StorageCapacity') as unknown as number;
  }

  public get storageType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.StorageType'),
        outputPath: 'Backup.FileSystem.StorageType',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.StorageType', props);
    return resource.getResponseField('Backup.FileSystem.StorageType') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.VpcId'),
        outputPath: 'Backup.FileSystem.VpcId',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.VpcId', props);
    return resource.getResponseField('Backup.FileSystem.VpcId') as unknown as string;
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.SubnetIds'),
        outputPath: 'Backup.FileSystem.SubnetIds',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.SubnetIds', props);
    return resource.getResponseField('Backup.FileSystem.SubnetIds') as unknown as string[];
  }

  public get networkInterfaceIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.NetworkInterfaceIds'),
        outputPath: 'Backup.FileSystem.NetworkInterfaceIds',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.NetworkInterfaceIds', props);
    return resource.getResponseField('Backup.FileSystem.NetworkInterfaceIds') as unknown as string[];
  }

  public get dnsName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.DNSName'),
        outputPath: 'Backup.FileSystem.DNSName',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.DNSName', props);
    return resource.getResponseField('Backup.FileSystem.DNSName') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.KmsKeyId'),
        outputPath: 'Backup.FileSystem.KmsKeyId',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.KmsKeyId', props);
    return resource.getResponseField('Backup.FileSystem.KmsKeyId') as unknown as string;
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.ResourceARN'),
        outputPath: 'Backup.FileSystem.ResourceARN',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.ResourceARN', props);
    return resource.getResponseField('Backup.FileSystem.ResourceARN') as unknown as string;
  }

  public get tags(): shapes.FSxTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.Tags'),
        outputPath: 'Backup.FileSystem.Tags',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.Tags', props);
    return resource.getResponseField('Backup.FileSystem.Tags') as unknown as shapes.FSxTag[];
  }

  public get windowsConfiguration(): FSxCreateBackupBackupFileSystemWindowsConfiguration {
    return new FSxCreateBackupBackupFileSystemWindowsConfiguration(this, 'WindowsConfiguration', this.__resources, this.input);
  }

  public get lustreConfiguration(): FSxCreateBackupBackupFileSystemLustreConfiguration {
    return new FSxCreateBackupBackupFileSystemLustreConfiguration(this, 'LustreConfiguration', this.__resources, this.input);
  }

  public get administrativeActions(): shapes.FSxAdministrativeAction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.AdministrativeActions'),
        outputPath: 'Backup.FileSystem.AdministrativeActions',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.AdministrativeActions', props);
    return resource.getResponseField('Backup.FileSystem.AdministrativeActions') as unknown as shapes.FSxAdministrativeAction[];
  }

}

export class FSxCreateBackupBackupFileSystemFailureDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxCreateBackupRequest) {
    super(scope, id);
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.FailureDetails.Message'),
        outputPath: 'Backup.FileSystem.FailureDetails.Message',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.FailureDetails.Message', props);
    return resource.getResponseField('Backup.FileSystem.FailureDetails.Message') as unknown as string;
  }

}

export class FSxCreateBackupBackupFileSystemWindowsConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxCreateBackupRequest) {
    super(scope, id);
  }

  public get activeDirectoryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.WindowsConfiguration.ActiveDirectoryId'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.ActiveDirectoryId',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.ActiveDirectoryId', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.ActiveDirectoryId') as unknown as string;
  }

  public get selfManagedActiveDirectoryConfiguration(): FSxCreateBackupBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration {
    return new FSxCreateBackupBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration(this, 'SelfManagedActiveDirectoryConfiguration', this.__resources, this.input);
  }

  public get deploymentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.WindowsConfiguration.DeploymentType'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.DeploymentType',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.DeploymentType', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.DeploymentType') as unknown as string;
  }

  public get remoteAdministrationEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.WindowsConfiguration.RemoteAdministrationEndpoint'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.RemoteAdministrationEndpoint',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.RemoteAdministrationEndpoint', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.RemoteAdministrationEndpoint') as unknown as string;
  }

  public get preferredSubnetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.WindowsConfiguration.PreferredSubnetId'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.PreferredSubnetId',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.PreferredSubnetId', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.PreferredSubnetId') as unknown as string;
  }

  public get preferredFileServerIp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.WindowsConfiguration.PreferredFileServerIp'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.PreferredFileServerIp',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.PreferredFileServerIp', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.PreferredFileServerIp') as unknown as string;
  }

  public get throughputCapacity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.WindowsConfiguration.ThroughputCapacity'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.ThroughputCapacity',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.ThroughputCapacity', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.ThroughputCapacity') as unknown as number;
  }

  public get maintenanceOperationsInProgress(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.WindowsConfiguration.MaintenanceOperationsInProgress'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.MaintenanceOperationsInProgress',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.MaintenanceOperationsInProgress', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.MaintenanceOperationsInProgress') as unknown as string[];
  }

  public get weeklyMaintenanceStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.WindowsConfiguration.WeeklyMaintenanceStartTime'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.WeeklyMaintenanceStartTime',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.WeeklyMaintenanceStartTime', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.WeeklyMaintenanceStartTime') as unknown as string;
  }

  public get dailyAutomaticBackupStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.WindowsConfiguration.DailyAutomaticBackupStartTime'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.DailyAutomaticBackupStartTime',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.DailyAutomaticBackupStartTime', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.DailyAutomaticBackupStartTime') as unknown as string;
  }

  public get automaticBackupRetentionDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.WindowsConfiguration.AutomaticBackupRetentionDays'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.AutomaticBackupRetentionDays',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.AutomaticBackupRetentionDays', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.AutomaticBackupRetentionDays') as unknown as number;
  }

  public get copyTagsToBackups(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.WindowsConfiguration.CopyTagsToBackups'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.CopyTagsToBackups',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.CopyTagsToBackups', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.CopyTagsToBackups') as unknown as boolean;
  }

  public get aliases(): shapes.FSxAlias[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.WindowsConfiguration.Aliases'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.Aliases',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.Aliases', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.Aliases') as unknown as shapes.FSxAlias[];
  }

}

export class FSxCreateBackupBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxCreateBackupRequest) {
    super(scope, id);
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DomainName'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DomainName',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DomainName', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DomainName') as unknown as string;
  }

  public get organizationalUnitDistinguishedName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.OrganizationalUnitDistinguishedName'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.OrganizationalUnitDistinguishedName',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.OrganizationalUnitDistinguishedName', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.OrganizationalUnitDistinguishedName') as unknown as string;
  }

  public get fileSystemAdministratorsGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.FileSystemAdministratorsGroup'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.FileSystemAdministratorsGroup',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.FileSystemAdministratorsGroup', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.FileSystemAdministratorsGroup') as unknown as string;
  }

  public get userName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.UserName'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.UserName',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.UserName', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.UserName') as unknown as string;
  }

  public get dnsIps(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DnsIps'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DnsIps',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DnsIps', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DnsIps') as unknown as string[];
  }

}

export class FSxCreateBackupBackupFileSystemLustreConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxCreateBackupRequest) {
    super(scope, id);
  }

  public get weeklyMaintenanceStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.LustreConfiguration.WeeklyMaintenanceStartTime'),
        outputPath: 'Backup.FileSystem.LustreConfiguration.WeeklyMaintenanceStartTime',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.LustreConfiguration.WeeklyMaintenanceStartTime', props);
    return resource.getResponseField('Backup.FileSystem.LustreConfiguration.WeeklyMaintenanceStartTime') as unknown as string;
  }

  public get dataRepositoryConfiguration(): FSxCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfiguration {
    return new FSxCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfiguration(this, 'DataRepositoryConfiguration', this.__resources, this.input);
  }

  public get deploymentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.LustreConfiguration.DeploymentType'),
        outputPath: 'Backup.FileSystem.LustreConfiguration.DeploymentType',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.LustreConfiguration.DeploymentType', props);
    return resource.getResponseField('Backup.FileSystem.LustreConfiguration.DeploymentType') as unknown as string;
  }

  public get perUnitStorageThroughput(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.LustreConfiguration.PerUnitStorageThroughput'),
        outputPath: 'Backup.FileSystem.LustreConfiguration.PerUnitStorageThroughput',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.LustreConfiguration.PerUnitStorageThroughput', props);
    return resource.getResponseField('Backup.FileSystem.LustreConfiguration.PerUnitStorageThroughput') as unknown as number;
  }

  public get mountName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.LustreConfiguration.MountName'),
        outputPath: 'Backup.FileSystem.LustreConfiguration.MountName',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.LustreConfiguration.MountName', props);
    return resource.getResponseField('Backup.FileSystem.LustreConfiguration.MountName') as unknown as string;
  }

  public get dailyAutomaticBackupStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.LustreConfiguration.DailyAutomaticBackupStartTime'),
        outputPath: 'Backup.FileSystem.LustreConfiguration.DailyAutomaticBackupStartTime',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.LustreConfiguration.DailyAutomaticBackupStartTime', props);
    return resource.getResponseField('Backup.FileSystem.LustreConfiguration.DailyAutomaticBackupStartTime') as unknown as string;
  }

  public get automaticBackupRetentionDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.LustreConfiguration.AutomaticBackupRetentionDays'),
        outputPath: 'Backup.FileSystem.LustreConfiguration.AutomaticBackupRetentionDays',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.LustreConfiguration.AutomaticBackupRetentionDays', props);
    return resource.getResponseField('Backup.FileSystem.LustreConfiguration.AutomaticBackupRetentionDays') as unknown as number;
  }

  public get copyTagsToBackups(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.LustreConfiguration.CopyTagsToBackups'),
        outputPath: 'Backup.FileSystem.LustreConfiguration.CopyTagsToBackups',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.LustreConfiguration.CopyTagsToBackups', props);
    return resource.getResponseField('Backup.FileSystem.LustreConfiguration.CopyTagsToBackups') as unknown as boolean;
  }

  public get driveCacheType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.LustreConfiguration.DriveCacheType'),
        outputPath: 'Backup.FileSystem.LustreConfiguration.DriveCacheType',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.LustreConfiguration.DriveCacheType', props);
    return resource.getResponseField('Backup.FileSystem.LustreConfiguration.DriveCacheType') as unknown as string;
  }

}

export class FSxCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxCreateBackupRequest) {
    super(scope, id);
  }

  public get lifecycle(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.Lifecycle'),
        outputPath: 'Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.Lifecycle',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.Lifecycle', props);
    return resource.getResponseField('Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.Lifecycle') as unknown as string;
  }

  public get importPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportPath'),
        outputPath: 'Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportPath',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportPath', props);
    return resource.getResponseField('Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportPath') as unknown as string;
  }

  public get exportPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ExportPath'),
        outputPath: 'Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ExportPath',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ExportPath', props);
    return resource.getResponseField('Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ExportPath') as unknown as string;
  }

  public get importedFileChunkSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportedFileChunkSize'),
        outputPath: 'Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportedFileChunkSize',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportedFileChunkSize', props);
    return resource.getResponseField('Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportedFileChunkSize') as unknown as number;
  }

  public get autoImportPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.AutoImportPolicy'),
        outputPath: 'Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.AutoImportPolicy',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.AutoImportPolicy', props);
    return resource.getResponseField('Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.AutoImportPolicy') as unknown as string;
  }

  public get failureDetails(): FSxCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails {
    return new FSxCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails(this, 'FailureDetails', this.__resources, this.input);
  }

}

export class FSxCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxCreateBackupRequest) {
    super(scope, id);
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.FailureDetails.Message'),
        outputPath: 'Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.FailureDetails.Message',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.FailureDetails.Message', props);
    return resource.getResponseField('Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.FailureDetails.Message') as unknown as string;
  }

}

export class FSxCreateBackupBackupDirectoryInformation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxCreateBackupRequest) {
    super(scope, id);
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.DirectoryInformation.DomainName'),
        outputPath: 'Backup.DirectoryInformation.DomainName',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.DirectoryInformation.DomainName', props);
    return resource.getResponseField('Backup.DirectoryInformation.DomainName') as unknown as string;
  }

  public get activeDirectoryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.DirectoryInformation.ActiveDirectoryId'),
        outputPath: 'Backup.DirectoryInformation.ActiveDirectoryId',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.Backup.DirectoryInformation.ActiveDirectoryId', props);
    return resource.getResponseField('Backup.DirectoryInformation.ActiveDirectoryId') as unknown as string;
  }

}

export class FSxCreateDataRepositoryTask extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxCreateDataRepositoryTaskRequest) {
    super(scope, id);
  }

  public get dataRepositoryTask(): FSxCreateDataRepositoryTaskDataRepositoryTask {
    return new FSxCreateDataRepositoryTaskDataRepositoryTask(this, 'DataRepositoryTask', this.__resources, this.input);
  }

}

export class FSxCreateDataRepositoryTaskDataRepositoryTask extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxCreateDataRepositoryTaskRequest) {
    super(scope, id);
  }

  public get taskId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataRepositoryTask',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateDataRepositoryTask.DataRepositoryTask.TaskId'),
        outputPath: 'DataRepositoryTask.TaskId',
        parameters: {
          Type: this.input.type,
          Paths: this.input.paths,
          FileSystemId: this.input.fileSystemId,
          Report: {
            Enabled: this.input.report.enabled,
            Path: this.input.report.path,
            Format: this.input.report.format,
            Scope: this.input.report.scope,
          },
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataRepositoryTask.DataRepositoryTask.TaskId', props);
    return resource.getResponseField('DataRepositoryTask.TaskId') as unknown as string;
  }

  public get lifecycle(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataRepositoryTask',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateDataRepositoryTask.DataRepositoryTask.Lifecycle'),
        outputPath: 'DataRepositoryTask.Lifecycle',
        parameters: {
          Type: this.input.type,
          Paths: this.input.paths,
          FileSystemId: this.input.fileSystemId,
          Report: {
            Enabled: this.input.report.enabled,
            Path: this.input.report.path,
            Format: this.input.report.format,
            Scope: this.input.report.scope,
          },
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataRepositoryTask.DataRepositoryTask.Lifecycle', props);
    return resource.getResponseField('DataRepositoryTask.Lifecycle') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataRepositoryTask',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateDataRepositoryTask.DataRepositoryTask.Type'),
        outputPath: 'DataRepositoryTask.Type',
        parameters: {
          Type: this.input.type,
          Paths: this.input.paths,
          FileSystemId: this.input.fileSystemId,
          Report: {
            Enabled: this.input.report.enabled,
            Path: this.input.report.path,
            Format: this.input.report.format,
            Scope: this.input.report.scope,
          },
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataRepositoryTask.DataRepositoryTask.Type', props);
    return resource.getResponseField('DataRepositoryTask.Type') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataRepositoryTask',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateDataRepositoryTask.DataRepositoryTask.CreationTime'),
        outputPath: 'DataRepositoryTask.CreationTime',
        parameters: {
          Type: this.input.type,
          Paths: this.input.paths,
          FileSystemId: this.input.fileSystemId,
          Report: {
            Enabled: this.input.report.enabled,
            Path: this.input.report.path,
            Format: this.input.report.format,
            Scope: this.input.report.scope,
          },
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataRepositoryTask.DataRepositoryTask.CreationTime', props);
    return resource.getResponseField('DataRepositoryTask.CreationTime') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataRepositoryTask',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateDataRepositoryTask.DataRepositoryTask.StartTime'),
        outputPath: 'DataRepositoryTask.StartTime',
        parameters: {
          Type: this.input.type,
          Paths: this.input.paths,
          FileSystemId: this.input.fileSystemId,
          Report: {
            Enabled: this.input.report.enabled,
            Path: this.input.report.path,
            Format: this.input.report.format,
            Scope: this.input.report.scope,
          },
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataRepositoryTask.DataRepositoryTask.StartTime', props);
    return resource.getResponseField('DataRepositoryTask.StartTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataRepositoryTask',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateDataRepositoryTask.DataRepositoryTask.EndTime'),
        outputPath: 'DataRepositoryTask.EndTime',
        parameters: {
          Type: this.input.type,
          Paths: this.input.paths,
          FileSystemId: this.input.fileSystemId,
          Report: {
            Enabled: this.input.report.enabled,
            Path: this.input.report.path,
            Format: this.input.report.format,
            Scope: this.input.report.scope,
          },
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataRepositoryTask.DataRepositoryTask.EndTime', props);
    return resource.getResponseField('DataRepositoryTask.EndTime') as unknown as string;
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataRepositoryTask',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateDataRepositoryTask.DataRepositoryTask.ResourceARN'),
        outputPath: 'DataRepositoryTask.ResourceARN',
        parameters: {
          Type: this.input.type,
          Paths: this.input.paths,
          FileSystemId: this.input.fileSystemId,
          Report: {
            Enabled: this.input.report.enabled,
            Path: this.input.report.path,
            Format: this.input.report.format,
            Scope: this.input.report.scope,
          },
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataRepositoryTask.DataRepositoryTask.ResourceARN', props);
    return resource.getResponseField('DataRepositoryTask.ResourceARN') as unknown as string;
  }

  public get tags(): shapes.FSxTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataRepositoryTask',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateDataRepositoryTask.DataRepositoryTask.Tags'),
        outputPath: 'DataRepositoryTask.Tags',
        parameters: {
          Type: this.input.type,
          Paths: this.input.paths,
          FileSystemId: this.input.fileSystemId,
          Report: {
            Enabled: this.input.report.enabled,
            Path: this.input.report.path,
            Format: this.input.report.format,
            Scope: this.input.report.scope,
          },
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataRepositoryTask.DataRepositoryTask.Tags', props);
    return resource.getResponseField('DataRepositoryTask.Tags') as unknown as shapes.FSxTag[];
  }

  public get fileSystemId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataRepositoryTask',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateDataRepositoryTask.DataRepositoryTask.FileSystemId'),
        outputPath: 'DataRepositoryTask.FileSystemId',
        parameters: {
          Type: this.input.type,
          Paths: this.input.paths,
          FileSystemId: this.input.fileSystemId,
          Report: {
            Enabled: this.input.report.enabled,
            Path: this.input.report.path,
            Format: this.input.report.format,
            Scope: this.input.report.scope,
          },
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataRepositoryTask.DataRepositoryTask.FileSystemId', props);
    return resource.getResponseField('DataRepositoryTask.FileSystemId') as unknown as string;
  }

  public get paths(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataRepositoryTask',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateDataRepositoryTask.DataRepositoryTask.Paths'),
        outputPath: 'DataRepositoryTask.Paths',
        parameters: {
          Type: this.input.type,
          Paths: this.input.paths,
          FileSystemId: this.input.fileSystemId,
          Report: {
            Enabled: this.input.report.enabled,
            Path: this.input.report.path,
            Format: this.input.report.format,
            Scope: this.input.report.scope,
          },
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataRepositoryTask.DataRepositoryTask.Paths', props);
    return resource.getResponseField('DataRepositoryTask.Paths') as unknown as string[];
  }

  public get failureDetails(): FSxCreateDataRepositoryTaskDataRepositoryTaskFailureDetails {
    return new FSxCreateDataRepositoryTaskDataRepositoryTaskFailureDetails(this, 'FailureDetails', this.__resources, this.input);
  }

  public get status(): FSxCreateDataRepositoryTaskDataRepositoryTaskStatus {
    return new FSxCreateDataRepositoryTaskDataRepositoryTaskStatus(this, 'Status', this.__resources, this.input);
  }

  public get report(): FSxCreateDataRepositoryTaskDataRepositoryTaskReport {
    return new FSxCreateDataRepositoryTaskDataRepositoryTaskReport(this, 'Report', this.__resources, this.input);
  }

}

export class FSxCreateDataRepositoryTaskDataRepositoryTaskFailureDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxCreateDataRepositoryTaskRequest) {
    super(scope, id);
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataRepositoryTask',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateDataRepositoryTask.DataRepositoryTask.FailureDetails.Message'),
        outputPath: 'DataRepositoryTask.FailureDetails.Message',
        parameters: {
          Type: this.input.type,
          Paths: this.input.paths,
          FileSystemId: this.input.fileSystemId,
          Report: {
            Enabled: this.input.report.enabled,
            Path: this.input.report.path,
            Format: this.input.report.format,
            Scope: this.input.report.scope,
          },
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataRepositoryTask.DataRepositoryTask.FailureDetails.Message', props);
    return resource.getResponseField('DataRepositoryTask.FailureDetails.Message') as unknown as string;
  }

}

export class FSxCreateDataRepositoryTaskDataRepositoryTaskStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxCreateDataRepositoryTaskRequest) {
    super(scope, id);
  }

  public get totalCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataRepositoryTask',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateDataRepositoryTask.DataRepositoryTask.Status.TotalCount'),
        outputPath: 'DataRepositoryTask.Status.TotalCount',
        parameters: {
          Type: this.input.type,
          Paths: this.input.paths,
          FileSystemId: this.input.fileSystemId,
          Report: {
            Enabled: this.input.report.enabled,
            Path: this.input.report.path,
            Format: this.input.report.format,
            Scope: this.input.report.scope,
          },
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataRepositoryTask.DataRepositoryTask.Status.TotalCount', props);
    return resource.getResponseField('DataRepositoryTask.Status.TotalCount') as unknown as number;
  }

  public get succeededCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataRepositoryTask',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateDataRepositoryTask.DataRepositoryTask.Status.SucceededCount'),
        outputPath: 'DataRepositoryTask.Status.SucceededCount',
        parameters: {
          Type: this.input.type,
          Paths: this.input.paths,
          FileSystemId: this.input.fileSystemId,
          Report: {
            Enabled: this.input.report.enabled,
            Path: this.input.report.path,
            Format: this.input.report.format,
            Scope: this.input.report.scope,
          },
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataRepositoryTask.DataRepositoryTask.Status.SucceededCount', props);
    return resource.getResponseField('DataRepositoryTask.Status.SucceededCount') as unknown as number;
  }

  public get failedCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataRepositoryTask',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateDataRepositoryTask.DataRepositoryTask.Status.FailedCount'),
        outputPath: 'DataRepositoryTask.Status.FailedCount',
        parameters: {
          Type: this.input.type,
          Paths: this.input.paths,
          FileSystemId: this.input.fileSystemId,
          Report: {
            Enabled: this.input.report.enabled,
            Path: this.input.report.path,
            Format: this.input.report.format,
            Scope: this.input.report.scope,
          },
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataRepositoryTask.DataRepositoryTask.Status.FailedCount', props);
    return resource.getResponseField('DataRepositoryTask.Status.FailedCount') as unknown as number;
  }

  public get lastUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataRepositoryTask',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateDataRepositoryTask.DataRepositoryTask.Status.LastUpdatedTime'),
        outputPath: 'DataRepositoryTask.Status.LastUpdatedTime',
        parameters: {
          Type: this.input.type,
          Paths: this.input.paths,
          FileSystemId: this.input.fileSystemId,
          Report: {
            Enabled: this.input.report.enabled,
            Path: this.input.report.path,
            Format: this.input.report.format,
            Scope: this.input.report.scope,
          },
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataRepositoryTask.DataRepositoryTask.Status.LastUpdatedTime', props);
    return resource.getResponseField('DataRepositoryTask.Status.LastUpdatedTime') as unknown as string;
  }

}

export class FSxCreateDataRepositoryTaskDataRepositoryTaskReport extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxCreateDataRepositoryTaskRequest) {
    super(scope, id);
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataRepositoryTask',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateDataRepositoryTask.DataRepositoryTask.Report.Enabled'),
        outputPath: 'DataRepositoryTask.Report.Enabled',
        parameters: {
          Type: this.input.type,
          Paths: this.input.paths,
          FileSystemId: this.input.fileSystemId,
          Report: {
            Enabled: this.input.report.enabled,
            Path: this.input.report.path,
            Format: this.input.report.format,
            Scope: this.input.report.scope,
          },
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataRepositoryTask.DataRepositoryTask.Report.Enabled', props);
    return resource.getResponseField('DataRepositoryTask.Report.Enabled') as unknown as boolean;
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataRepositoryTask',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateDataRepositoryTask.DataRepositoryTask.Report.Path'),
        outputPath: 'DataRepositoryTask.Report.Path',
        parameters: {
          Type: this.input.type,
          Paths: this.input.paths,
          FileSystemId: this.input.fileSystemId,
          Report: {
            Enabled: this.input.report.enabled,
            Path: this.input.report.path,
            Format: this.input.report.format,
            Scope: this.input.report.scope,
          },
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataRepositoryTask.DataRepositoryTask.Report.Path', props);
    return resource.getResponseField('DataRepositoryTask.Report.Path') as unknown as string;
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataRepositoryTask',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateDataRepositoryTask.DataRepositoryTask.Report.Format'),
        outputPath: 'DataRepositoryTask.Report.Format',
        parameters: {
          Type: this.input.type,
          Paths: this.input.paths,
          FileSystemId: this.input.fileSystemId,
          Report: {
            Enabled: this.input.report.enabled,
            Path: this.input.report.path,
            Format: this.input.report.format,
            Scope: this.input.report.scope,
          },
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataRepositoryTask.DataRepositoryTask.Report.Format', props);
    return resource.getResponseField('DataRepositoryTask.Report.Format') as unknown as string;
  }

  public get scope(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataRepositoryTask',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateDataRepositoryTask.DataRepositoryTask.Report.Scope'),
        outputPath: 'DataRepositoryTask.Report.Scope',
        parameters: {
          Type: this.input.type,
          Paths: this.input.paths,
          FileSystemId: this.input.fileSystemId,
          Report: {
            Enabled: this.input.report.enabled,
            Path: this.input.report.path,
            Format: this.input.report.format,
            Scope: this.input.report.scope,
          },
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataRepositoryTask.DataRepositoryTask.Report.Scope', props);
    return resource.getResponseField('DataRepositoryTask.Report.Scope') as unknown as string;
  }

}

export class FSxCreateFileSystem extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxCreateFileSystemRequest) {
    super(scope, id);
  }

  public get fileSystem(): FSxCreateFileSystemFileSystem {
    return new FSxCreateFileSystemFileSystem(this, 'FileSystem', this.__resources, this.input);
  }

}

export class FSxCreateFileSystemFileSystem extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxCreateFileSystemRequest) {
    super(scope, id);
  }

  public get ownerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.OwnerId'),
        outputPath: 'FileSystem.OwnerId',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.OwnerId', props);
    return resource.getResponseField('FileSystem.OwnerId') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.CreationTime'),
        outputPath: 'FileSystem.CreationTime',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.CreationTime', props);
    return resource.getResponseField('FileSystem.CreationTime') as unknown as string;
  }

  public get fileSystemId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.FileSystemId'),
        outputPath: 'FileSystem.FileSystemId',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.FileSystemId', props);
    return resource.getResponseField('FileSystem.FileSystemId') as unknown as string;
  }

  public get fileSystemType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.FileSystemType'),
        outputPath: 'FileSystem.FileSystemType',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.FileSystemType', props);
    return resource.getResponseField('FileSystem.FileSystemType') as unknown as string;
  }

  public get lifecycle(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.Lifecycle'),
        outputPath: 'FileSystem.Lifecycle',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.Lifecycle', props);
    return resource.getResponseField('FileSystem.Lifecycle') as unknown as string;
  }

  public get failureDetails(): FSxCreateFileSystemFileSystemFailureDetails {
    return new FSxCreateFileSystemFileSystemFailureDetails(this, 'FailureDetails', this.__resources, this.input);
  }

  public get storageCapacity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.StorageCapacity'),
        outputPath: 'FileSystem.StorageCapacity',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.StorageCapacity', props);
    return resource.getResponseField('FileSystem.StorageCapacity') as unknown as number;
  }

  public get storageType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.StorageType'),
        outputPath: 'FileSystem.StorageType',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.StorageType', props);
    return resource.getResponseField('FileSystem.StorageType') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.VpcId'),
        outputPath: 'FileSystem.VpcId',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.VpcId', props);
    return resource.getResponseField('FileSystem.VpcId') as unknown as string;
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.SubnetIds'),
        outputPath: 'FileSystem.SubnetIds',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.SubnetIds', props);
    return resource.getResponseField('FileSystem.SubnetIds') as unknown as string[];
  }

  public get networkInterfaceIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.NetworkInterfaceIds'),
        outputPath: 'FileSystem.NetworkInterfaceIds',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.NetworkInterfaceIds', props);
    return resource.getResponseField('FileSystem.NetworkInterfaceIds') as unknown as string[];
  }

  public get dnsName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.DNSName'),
        outputPath: 'FileSystem.DNSName',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.DNSName', props);
    return resource.getResponseField('FileSystem.DNSName') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.KmsKeyId'),
        outputPath: 'FileSystem.KmsKeyId',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.KmsKeyId', props);
    return resource.getResponseField('FileSystem.KmsKeyId') as unknown as string;
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.ResourceARN'),
        outputPath: 'FileSystem.ResourceARN',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.ResourceARN', props);
    return resource.getResponseField('FileSystem.ResourceARN') as unknown as string;
  }

  public get tags(): shapes.FSxTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.Tags'),
        outputPath: 'FileSystem.Tags',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.Tags', props);
    return resource.getResponseField('FileSystem.Tags') as unknown as shapes.FSxTag[];
  }

  public get windowsConfiguration(): FSxCreateFileSystemFileSystemWindowsConfiguration {
    return new FSxCreateFileSystemFileSystemWindowsConfiguration(this, 'WindowsConfiguration', this.__resources, this.input);
  }

  public get lustreConfiguration(): FSxCreateFileSystemFileSystemLustreConfiguration {
    return new FSxCreateFileSystemFileSystemLustreConfiguration(this, 'LustreConfiguration', this.__resources, this.input);
  }

  public get administrativeActions(): shapes.FSxAdministrativeAction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.AdministrativeActions'),
        outputPath: 'FileSystem.AdministrativeActions',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.AdministrativeActions', props);
    return resource.getResponseField('FileSystem.AdministrativeActions') as unknown as shapes.FSxAdministrativeAction[];
  }

}

export class FSxCreateFileSystemFileSystemFailureDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxCreateFileSystemRequest) {
    super(scope, id);
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.FailureDetails.Message'),
        outputPath: 'FileSystem.FailureDetails.Message',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.FailureDetails.Message', props);
    return resource.getResponseField('FileSystem.FailureDetails.Message') as unknown as string;
  }

}

export class FSxCreateFileSystemFileSystemWindowsConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxCreateFileSystemRequest) {
    super(scope, id);
  }

  public get activeDirectoryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.WindowsConfiguration.ActiveDirectoryId'),
        outputPath: 'FileSystem.WindowsConfiguration.ActiveDirectoryId',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.WindowsConfiguration.ActiveDirectoryId', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.ActiveDirectoryId') as unknown as string;
  }

  public get selfManagedActiveDirectoryConfiguration(): FSxCreateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration {
    return new FSxCreateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration(this, 'SelfManagedActiveDirectoryConfiguration', this.__resources, this.input);
  }

  public get deploymentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.WindowsConfiguration.DeploymentType'),
        outputPath: 'FileSystem.WindowsConfiguration.DeploymentType',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.WindowsConfiguration.DeploymentType', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.DeploymentType') as unknown as string;
  }

  public get remoteAdministrationEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.WindowsConfiguration.RemoteAdministrationEndpoint'),
        outputPath: 'FileSystem.WindowsConfiguration.RemoteAdministrationEndpoint',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.WindowsConfiguration.RemoteAdministrationEndpoint', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.RemoteAdministrationEndpoint') as unknown as string;
  }

  public get preferredSubnetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.WindowsConfiguration.PreferredSubnetId'),
        outputPath: 'FileSystem.WindowsConfiguration.PreferredSubnetId',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.WindowsConfiguration.PreferredSubnetId', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.PreferredSubnetId') as unknown as string;
  }

  public get preferredFileServerIp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.WindowsConfiguration.PreferredFileServerIp'),
        outputPath: 'FileSystem.WindowsConfiguration.PreferredFileServerIp',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.WindowsConfiguration.PreferredFileServerIp', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.PreferredFileServerIp') as unknown as string;
  }

  public get throughputCapacity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.WindowsConfiguration.ThroughputCapacity'),
        outputPath: 'FileSystem.WindowsConfiguration.ThroughputCapacity',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.WindowsConfiguration.ThroughputCapacity', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.ThroughputCapacity') as unknown as number;
  }

  public get maintenanceOperationsInProgress(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.WindowsConfiguration.MaintenanceOperationsInProgress'),
        outputPath: 'FileSystem.WindowsConfiguration.MaintenanceOperationsInProgress',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.WindowsConfiguration.MaintenanceOperationsInProgress', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.MaintenanceOperationsInProgress') as unknown as string[];
  }

  public get weeklyMaintenanceStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.WindowsConfiguration.WeeklyMaintenanceStartTime'),
        outputPath: 'FileSystem.WindowsConfiguration.WeeklyMaintenanceStartTime',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.WindowsConfiguration.WeeklyMaintenanceStartTime', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.WeeklyMaintenanceStartTime') as unknown as string;
  }

  public get dailyAutomaticBackupStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.WindowsConfiguration.DailyAutomaticBackupStartTime'),
        outputPath: 'FileSystem.WindowsConfiguration.DailyAutomaticBackupStartTime',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.WindowsConfiguration.DailyAutomaticBackupStartTime', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.DailyAutomaticBackupStartTime') as unknown as string;
  }

  public get automaticBackupRetentionDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.WindowsConfiguration.AutomaticBackupRetentionDays'),
        outputPath: 'FileSystem.WindowsConfiguration.AutomaticBackupRetentionDays',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.WindowsConfiguration.AutomaticBackupRetentionDays', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.AutomaticBackupRetentionDays') as unknown as number;
  }

  public get copyTagsToBackups(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.WindowsConfiguration.CopyTagsToBackups'),
        outputPath: 'FileSystem.WindowsConfiguration.CopyTagsToBackups',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.WindowsConfiguration.CopyTagsToBackups', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.CopyTagsToBackups') as unknown as boolean;
  }

  public get aliases(): shapes.FSxAlias[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.WindowsConfiguration.Aliases'),
        outputPath: 'FileSystem.WindowsConfiguration.Aliases',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.WindowsConfiguration.Aliases', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.Aliases') as unknown as shapes.FSxAlias[];
  }

}

export class FSxCreateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxCreateFileSystemRequest) {
    super(scope, id);
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DomainName'),
        outputPath: 'FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DomainName',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DomainName', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DomainName') as unknown as string;
  }

  public get organizationalUnitDistinguishedName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.OrganizationalUnitDistinguishedName'),
        outputPath: 'FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.OrganizationalUnitDistinguishedName',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.OrganizationalUnitDistinguishedName', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.OrganizationalUnitDistinguishedName') as unknown as string;
  }

  public get fileSystemAdministratorsGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.FileSystemAdministratorsGroup'),
        outputPath: 'FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.FileSystemAdministratorsGroup',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.FileSystemAdministratorsGroup', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.FileSystemAdministratorsGroup') as unknown as string;
  }

  public get userName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.UserName'),
        outputPath: 'FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.UserName',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.UserName', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.UserName') as unknown as string;
  }

  public get dnsIps(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DnsIps'),
        outputPath: 'FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DnsIps',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DnsIps', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DnsIps') as unknown as string[];
  }

}

export class FSxCreateFileSystemFileSystemLustreConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxCreateFileSystemRequest) {
    super(scope, id);
  }

  public get weeklyMaintenanceStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.LustreConfiguration.WeeklyMaintenanceStartTime'),
        outputPath: 'FileSystem.LustreConfiguration.WeeklyMaintenanceStartTime',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.LustreConfiguration.WeeklyMaintenanceStartTime', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.WeeklyMaintenanceStartTime') as unknown as string;
  }

  public get dataRepositoryConfiguration(): FSxCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration {
    return new FSxCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration(this, 'DataRepositoryConfiguration', this.__resources, this.input);
  }

  public get deploymentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.LustreConfiguration.DeploymentType'),
        outputPath: 'FileSystem.LustreConfiguration.DeploymentType',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.LustreConfiguration.DeploymentType', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DeploymentType') as unknown as string;
  }

  public get perUnitStorageThroughput(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.LustreConfiguration.PerUnitStorageThroughput'),
        outputPath: 'FileSystem.LustreConfiguration.PerUnitStorageThroughput',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.LustreConfiguration.PerUnitStorageThroughput', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.PerUnitStorageThroughput') as unknown as number;
  }

  public get mountName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.LustreConfiguration.MountName'),
        outputPath: 'FileSystem.LustreConfiguration.MountName',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.LustreConfiguration.MountName', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.MountName') as unknown as string;
  }

  public get dailyAutomaticBackupStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.LustreConfiguration.DailyAutomaticBackupStartTime'),
        outputPath: 'FileSystem.LustreConfiguration.DailyAutomaticBackupStartTime',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.LustreConfiguration.DailyAutomaticBackupStartTime', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DailyAutomaticBackupStartTime') as unknown as string;
  }

  public get automaticBackupRetentionDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.LustreConfiguration.AutomaticBackupRetentionDays'),
        outputPath: 'FileSystem.LustreConfiguration.AutomaticBackupRetentionDays',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.LustreConfiguration.AutomaticBackupRetentionDays', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.AutomaticBackupRetentionDays') as unknown as number;
  }

  public get copyTagsToBackups(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.LustreConfiguration.CopyTagsToBackups'),
        outputPath: 'FileSystem.LustreConfiguration.CopyTagsToBackups',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.LustreConfiguration.CopyTagsToBackups', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.CopyTagsToBackups') as unknown as boolean;
  }

  public get driveCacheType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.LustreConfiguration.DriveCacheType'),
        outputPath: 'FileSystem.LustreConfiguration.DriveCacheType',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.LustreConfiguration.DriveCacheType', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DriveCacheType') as unknown as string;
  }

}

export class FSxCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxCreateFileSystemRequest) {
    super(scope, id);
  }

  public get lifecycle(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.Lifecycle'),
        outputPath: 'FileSystem.LustreConfiguration.DataRepositoryConfiguration.Lifecycle',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.Lifecycle', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DataRepositoryConfiguration.Lifecycle') as unknown as string;
  }

  public get importPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportPath'),
        outputPath: 'FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportPath',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportPath', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportPath') as unknown as string;
  }

  public get exportPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ExportPath'),
        outputPath: 'FileSystem.LustreConfiguration.DataRepositoryConfiguration.ExportPath',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ExportPath', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DataRepositoryConfiguration.ExportPath') as unknown as string;
  }

  public get importedFileChunkSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportedFileChunkSize'),
        outputPath: 'FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportedFileChunkSize',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportedFileChunkSize', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportedFileChunkSize') as unknown as number;
  }

  public get autoImportPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.AutoImportPolicy'),
        outputPath: 'FileSystem.LustreConfiguration.DataRepositoryConfiguration.AutoImportPolicy',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.AutoImportPolicy', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DataRepositoryConfiguration.AutoImportPolicy') as unknown as string;
  }

  public get failureDetails(): FSxCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails {
    return new FSxCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails(this, 'FailureDetails', this.__resources, this.input);
  }

}

export class FSxCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxCreateFileSystemRequest) {
    super(scope, id);
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.FailureDetails.Message'),
        outputPath: 'FileSystem.LustreConfiguration.DataRepositoryConfiguration.FailureDetails.Message',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemType: this.input.fileSystemType,
          StorageCapacity: this.input.storageCapacity,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.FailureDetails.Message', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DataRepositoryConfiguration.FailureDetails.Message') as unknown as string;
  }

}

export class FSxCreateFileSystemFromBackup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxCreateFileSystemFromBackupRequest) {
    super(scope, id);
  }

  public get fileSystem(): FSxCreateFileSystemFromBackupFileSystem {
    return new FSxCreateFileSystemFromBackupFileSystem(this, 'FileSystem', this.__resources, this.input);
  }

}

export class FSxCreateFileSystemFromBackupFileSystem extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxCreateFileSystemFromBackupRequest) {
    super(scope, id);
  }

  public get ownerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.OwnerId'),
        outputPath: 'FileSystem.OwnerId',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.OwnerId', props);
    return resource.getResponseField('FileSystem.OwnerId') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.CreationTime'),
        outputPath: 'FileSystem.CreationTime',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.CreationTime', props);
    return resource.getResponseField('FileSystem.CreationTime') as unknown as string;
  }

  public get fileSystemId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.FileSystemId'),
        outputPath: 'FileSystem.FileSystemId',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.FileSystemId', props);
    return resource.getResponseField('FileSystem.FileSystemId') as unknown as string;
  }

  public get fileSystemType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.FileSystemType'),
        outputPath: 'FileSystem.FileSystemType',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.FileSystemType', props);
    return resource.getResponseField('FileSystem.FileSystemType') as unknown as string;
  }

  public get lifecycle(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.Lifecycle'),
        outputPath: 'FileSystem.Lifecycle',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.Lifecycle', props);
    return resource.getResponseField('FileSystem.Lifecycle') as unknown as string;
  }

  public get failureDetails(): FSxCreateFileSystemFromBackupFileSystemFailureDetails {
    return new FSxCreateFileSystemFromBackupFileSystemFailureDetails(this, 'FailureDetails', this.__resources, this.input);
  }

  public get storageCapacity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.StorageCapacity'),
        outputPath: 'FileSystem.StorageCapacity',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.StorageCapacity', props);
    return resource.getResponseField('FileSystem.StorageCapacity') as unknown as number;
  }

  public get storageType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.StorageType'),
        outputPath: 'FileSystem.StorageType',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.StorageType', props);
    return resource.getResponseField('FileSystem.StorageType') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.VpcId'),
        outputPath: 'FileSystem.VpcId',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.VpcId', props);
    return resource.getResponseField('FileSystem.VpcId') as unknown as string;
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.SubnetIds'),
        outputPath: 'FileSystem.SubnetIds',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.SubnetIds', props);
    return resource.getResponseField('FileSystem.SubnetIds') as unknown as string[];
  }

  public get networkInterfaceIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.NetworkInterfaceIds'),
        outputPath: 'FileSystem.NetworkInterfaceIds',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.NetworkInterfaceIds', props);
    return resource.getResponseField('FileSystem.NetworkInterfaceIds') as unknown as string[];
  }

  public get dnsName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.DNSName'),
        outputPath: 'FileSystem.DNSName',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.DNSName', props);
    return resource.getResponseField('FileSystem.DNSName') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.KmsKeyId'),
        outputPath: 'FileSystem.KmsKeyId',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.KmsKeyId', props);
    return resource.getResponseField('FileSystem.KmsKeyId') as unknown as string;
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.ResourceARN'),
        outputPath: 'FileSystem.ResourceARN',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.ResourceARN', props);
    return resource.getResponseField('FileSystem.ResourceARN') as unknown as string;
  }

  public get tags(): shapes.FSxTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.Tags'),
        outputPath: 'FileSystem.Tags',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.Tags', props);
    return resource.getResponseField('FileSystem.Tags') as unknown as shapes.FSxTag[];
  }

  public get windowsConfiguration(): FSxCreateFileSystemFromBackupFileSystemWindowsConfiguration {
    return new FSxCreateFileSystemFromBackupFileSystemWindowsConfiguration(this, 'WindowsConfiguration', this.__resources, this.input);
  }

  public get lustreConfiguration(): FSxCreateFileSystemFromBackupFileSystemLustreConfiguration {
    return new FSxCreateFileSystemFromBackupFileSystemLustreConfiguration(this, 'LustreConfiguration', this.__resources, this.input);
  }

  public get administrativeActions(): shapes.FSxAdministrativeAction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.AdministrativeActions'),
        outputPath: 'FileSystem.AdministrativeActions',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.AdministrativeActions', props);
    return resource.getResponseField('FileSystem.AdministrativeActions') as unknown as shapes.FSxAdministrativeAction[];
  }

}

export class FSxCreateFileSystemFromBackupFileSystemFailureDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxCreateFileSystemFromBackupRequest) {
    super(scope, id);
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.FailureDetails.Message'),
        outputPath: 'FileSystem.FailureDetails.Message',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.FailureDetails.Message', props);
    return resource.getResponseField('FileSystem.FailureDetails.Message') as unknown as string;
  }

}

export class FSxCreateFileSystemFromBackupFileSystemWindowsConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxCreateFileSystemFromBackupRequest) {
    super(scope, id);
  }

  public get activeDirectoryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.ActiveDirectoryId'),
        outputPath: 'FileSystem.WindowsConfiguration.ActiveDirectoryId',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.ActiveDirectoryId', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.ActiveDirectoryId') as unknown as string;
  }

  public get selfManagedActiveDirectoryConfiguration(): FSxCreateFileSystemFromBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration {
    return new FSxCreateFileSystemFromBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration(this, 'SelfManagedActiveDirectoryConfiguration', this.__resources, this.input);
  }

  public get deploymentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.DeploymentType'),
        outputPath: 'FileSystem.WindowsConfiguration.DeploymentType',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.DeploymentType', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.DeploymentType') as unknown as string;
  }

  public get remoteAdministrationEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.RemoteAdministrationEndpoint'),
        outputPath: 'FileSystem.WindowsConfiguration.RemoteAdministrationEndpoint',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.RemoteAdministrationEndpoint', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.RemoteAdministrationEndpoint') as unknown as string;
  }

  public get preferredSubnetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.PreferredSubnetId'),
        outputPath: 'FileSystem.WindowsConfiguration.PreferredSubnetId',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.PreferredSubnetId', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.PreferredSubnetId') as unknown as string;
  }

  public get preferredFileServerIp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.PreferredFileServerIp'),
        outputPath: 'FileSystem.WindowsConfiguration.PreferredFileServerIp',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.PreferredFileServerIp', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.PreferredFileServerIp') as unknown as string;
  }

  public get throughputCapacity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.ThroughputCapacity'),
        outputPath: 'FileSystem.WindowsConfiguration.ThroughputCapacity',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.ThroughputCapacity', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.ThroughputCapacity') as unknown as number;
  }

  public get maintenanceOperationsInProgress(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.MaintenanceOperationsInProgress'),
        outputPath: 'FileSystem.WindowsConfiguration.MaintenanceOperationsInProgress',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.MaintenanceOperationsInProgress', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.MaintenanceOperationsInProgress') as unknown as string[];
  }

  public get weeklyMaintenanceStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.WeeklyMaintenanceStartTime'),
        outputPath: 'FileSystem.WindowsConfiguration.WeeklyMaintenanceStartTime',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.WeeklyMaintenanceStartTime', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.WeeklyMaintenanceStartTime') as unknown as string;
  }

  public get dailyAutomaticBackupStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.DailyAutomaticBackupStartTime'),
        outputPath: 'FileSystem.WindowsConfiguration.DailyAutomaticBackupStartTime',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.DailyAutomaticBackupStartTime', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.DailyAutomaticBackupStartTime') as unknown as string;
  }

  public get automaticBackupRetentionDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.AutomaticBackupRetentionDays'),
        outputPath: 'FileSystem.WindowsConfiguration.AutomaticBackupRetentionDays',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.AutomaticBackupRetentionDays', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.AutomaticBackupRetentionDays') as unknown as number;
  }

  public get copyTagsToBackups(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.CopyTagsToBackups'),
        outputPath: 'FileSystem.WindowsConfiguration.CopyTagsToBackups',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.CopyTagsToBackups', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.CopyTagsToBackups') as unknown as boolean;
  }

  public get aliases(): shapes.FSxAlias[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.Aliases'),
        outputPath: 'FileSystem.WindowsConfiguration.Aliases',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.Aliases', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.Aliases') as unknown as shapes.FSxAlias[];
  }

}

export class FSxCreateFileSystemFromBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxCreateFileSystemFromBackupRequest) {
    super(scope, id);
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DomainName'),
        outputPath: 'FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DomainName',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DomainName', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DomainName') as unknown as string;
  }

  public get organizationalUnitDistinguishedName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.OrganizationalUnitDistinguishedName'),
        outputPath: 'FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.OrganizationalUnitDistinguishedName',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.OrganizationalUnitDistinguishedName', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.OrganizationalUnitDistinguishedName') as unknown as string;
  }

  public get fileSystemAdministratorsGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.FileSystemAdministratorsGroup'),
        outputPath: 'FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.FileSystemAdministratorsGroup',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.FileSystemAdministratorsGroup', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.FileSystemAdministratorsGroup') as unknown as string;
  }

  public get userName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.UserName'),
        outputPath: 'FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.UserName',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.UserName', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.UserName') as unknown as string;
  }

  public get dnsIps(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DnsIps'),
        outputPath: 'FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DnsIps',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DnsIps', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DnsIps') as unknown as string[];
  }

}

export class FSxCreateFileSystemFromBackupFileSystemLustreConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxCreateFileSystemFromBackupRequest) {
    super(scope, id);
  }

  public get weeklyMaintenanceStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.LustreConfiguration.WeeklyMaintenanceStartTime'),
        outputPath: 'FileSystem.LustreConfiguration.WeeklyMaintenanceStartTime',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.LustreConfiguration.WeeklyMaintenanceStartTime', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.WeeklyMaintenanceStartTime') as unknown as string;
  }

  public get dataRepositoryConfiguration(): FSxCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfiguration {
    return new FSxCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfiguration(this, 'DataRepositoryConfiguration', this.__resources, this.input);
  }

  public get deploymentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.LustreConfiguration.DeploymentType'),
        outputPath: 'FileSystem.LustreConfiguration.DeploymentType',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.LustreConfiguration.DeploymentType', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DeploymentType') as unknown as string;
  }

  public get perUnitStorageThroughput(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.LustreConfiguration.PerUnitStorageThroughput'),
        outputPath: 'FileSystem.LustreConfiguration.PerUnitStorageThroughput',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.LustreConfiguration.PerUnitStorageThroughput', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.PerUnitStorageThroughput') as unknown as number;
  }

  public get mountName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.LustreConfiguration.MountName'),
        outputPath: 'FileSystem.LustreConfiguration.MountName',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.LustreConfiguration.MountName', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.MountName') as unknown as string;
  }

  public get dailyAutomaticBackupStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.LustreConfiguration.DailyAutomaticBackupStartTime'),
        outputPath: 'FileSystem.LustreConfiguration.DailyAutomaticBackupStartTime',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.LustreConfiguration.DailyAutomaticBackupStartTime', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DailyAutomaticBackupStartTime') as unknown as string;
  }

  public get automaticBackupRetentionDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.LustreConfiguration.AutomaticBackupRetentionDays'),
        outputPath: 'FileSystem.LustreConfiguration.AutomaticBackupRetentionDays',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.LustreConfiguration.AutomaticBackupRetentionDays', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.AutomaticBackupRetentionDays') as unknown as number;
  }

  public get copyTagsToBackups(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.LustreConfiguration.CopyTagsToBackups'),
        outputPath: 'FileSystem.LustreConfiguration.CopyTagsToBackups',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.LustreConfiguration.CopyTagsToBackups', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.CopyTagsToBackups') as unknown as boolean;
  }

  public get driveCacheType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.LustreConfiguration.DriveCacheType'),
        outputPath: 'FileSystem.LustreConfiguration.DriveCacheType',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.LustreConfiguration.DriveCacheType', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DriveCacheType') as unknown as string;
  }

}

export class FSxCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxCreateFileSystemFromBackupRequest) {
    super(scope, id);
  }

  public get lifecycle(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.Lifecycle'),
        outputPath: 'FileSystem.LustreConfiguration.DataRepositoryConfiguration.Lifecycle',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.Lifecycle', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DataRepositoryConfiguration.Lifecycle') as unknown as string;
  }

  public get importPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportPath'),
        outputPath: 'FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportPath',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportPath', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportPath') as unknown as string;
  }

  public get exportPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ExportPath'),
        outputPath: 'FileSystem.LustreConfiguration.DataRepositoryConfiguration.ExportPath',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ExportPath', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DataRepositoryConfiguration.ExportPath') as unknown as string;
  }

  public get importedFileChunkSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportedFileChunkSize'),
        outputPath: 'FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportedFileChunkSize',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportedFileChunkSize', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportedFileChunkSize') as unknown as number;
  }

  public get autoImportPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.AutoImportPolicy'),
        outputPath: 'FileSystem.LustreConfiguration.DataRepositoryConfiguration.AutoImportPolicy',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.AutoImportPolicy', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DataRepositoryConfiguration.AutoImportPolicy') as unknown as string;
  }

  public get failureDetails(): FSxCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails {
    return new FSxCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails(this, 'FailureDetails', this.__resources, this.input);
  }

}

export class FSxCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxCreateFileSystemFromBackupRequest) {
    super(scope, id);
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.FailureDetails.Message'),
        outputPath: 'FileSystem.LustreConfiguration.DataRepositoryConfiguration.FailureDetails.Message',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
          SubnetIds: this.input.subnetIds,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.input.windowsConfiguration?.aliases,
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.input.lustreConfiguration?.importPath,
            ExportPath: this.input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.input.lustreConfiguration?.driveCacheType,
          },
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFileSystemFromBackup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.FailureDetails.Message', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DataRepositoryConfiguration.FailureDetails.Message') as unknown as string;
  }

}

export class FSxDeleteBackup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxDeleteBackupRequest) {
    super(scope, id);
  }

  public get backupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.DeleteBackup.BackupId'),
        outputPath: 'BackupId',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.BackupId', props);
    return resource.getResponseField('BackupId') as unknown as string;
  }

  public get lifecycle(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.DeleteBackup.Lifecycle'),
        outputPath: 'Lifecycle',
        parameters: {
          BackupId: this.input.backupId,
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.Lifecycle', props);
    return resource.getResponseField('Lifecycle') as unknown as string;
  }

}

export class FSxDeleteFileSystem extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxDeleteFileSystemRequest) {
    super(scope, id);
  }

  public get fileSystemId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.DeleteFileSystem.FileSystemId'),
        outputPath: 'FileSystemId',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          WindowsConfiguration: {
            SkipFinalBackup: this.input.windowsConfiguration?.skipFinalBackup,
            FinalBackupTags: this.input.windowsConfiguration?.finalBackupTags,
          },
          LustreConfiguration: {
            SkipFinalBackup: this.input.lustreConfiguration?.skipFinalBackup,
            FinalBackupTags: this.input.lustreConfiguration?.finalBackupTags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFileSystem.FileSystemId', props);
    return resource.getResponseField('FileSystemId') as unknown as string;
  }

  public get lifecycle(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.DeleteFileSystem.Lifecycle'),
        outputPath: 'Lifecycle',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          WindowsConfiguration: {
            SkipFinalBackup: this.input.windowsConfiguration?.skipFinalBackup,
            FinalBackupTags: this.input.windowsConfiguration?.finalBackupTags,
          },
          LustreConfiguration: {
            SkipFinalBackup: this.input.lustreConfiguration?.skipFinalBackup,
            FinalBackupTags: this.input.lustreConfiguration?.finalBackupTags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFileSystem.Lifecycle', props);
    return resource.getResponseField('Lifecycle') as unknown as string;
  }

  public get windowsResponse(): FSxDeleteFileSystemWindowsResponse {
    return new FSxDeleteFileSystemWindowsResponse(this, 'WindowsResponse', this.__resources, this.input);
  }

  public get lustreResponse(): FSxDeleteFileSystemLustreResponse {
    return new FSxDeleteFileSystemLustreResponse(this, 'LustreResponse', this.__resources, this.input);
  }

}

export class FSxDeleteFileSystemWindowsResponse extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxDeleteFileSystemRequest) {
    super(scope, id);
  }

  public get finalBackupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.DeleteFileSystem.WindowsResponse.FinalBackupId'),
        outputPath: 'WindowsResponse.FinalBackupId',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          WindowsConfiguration: {
            SkipFinalBackup: this.input.windowsConfiguration?.skipFinalBackup,
            FinalBackupTags: this.input.windowsConfiguration?.finalBackupTags,
          },
          LustreConfiguration: {
            SkipFinalBackup: this.input.lustreConfiguration?.skipFinalBackup,
            FinalBackupTags: this.input.lustreConfiguration?.finalBackupTags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFileSystem.WindowsResponse.FinalBackupId', props);
    return resource.getResponseField('WindowsResponse.FinalBackupId') as unknown as string;
  }

  public get finalBackupTags(): shapes.FSxTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.DeleteFileSystem.WindowsResponse.FinalBackupTags'),
        outputPath: 'WindowsResponse.FinalBackupTags',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          WindowsConfiguration: {
            SkipFinalBackup: this.input.windowsConfiguration?.skipFinalBackup,
            FinalBackupTags: this.input.windowsConfiguration?.finalBackupTags,
          },
          LustreConfiguration: {
            SkipFinalBackup: this.input.lustreConfiguration?.skipFinalBackup,
            FinalBackupTags: this.input.lustreConfiguration?.finalBackupTags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFileSystem.WindowsResponse.FinalBackupTags', props);
    return resource.getResponseField('WindowsResponse.FinalBackupTags') as unknown as shapes.FSxTag[];
  }

}

export class FSxDeleteFileSystemLustreResponse extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxDeleteFileSystemRequest) {
    super(scope, id);
  }

  public get finalBackupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.DeleteFileSystem.LustreResponse.FinalBackupId'),
        outputPath: 'LustreResponse.FinalBackupId',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          WindowsConfiguration: {
            SkipFinalBackup: this.input.windowsConfiguration?.skipFinalBackup,
            FinalBackupTags: this.input.windowsConfiguration?.finalBackupTags,
          },
          LustreConfiguration: {
            SkipFinalBackup: this.input.lustreConfiguration?.skipFinalBackup,
            FinalBackupTags: this.input.lustreConfiguration?.finalBackupTags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFileSystem.LustreResponse.FinalBackupId', props);
    return resource.getResponseField('LustreResponse.FinalBackupId') as unknown as string;
  }

  public get finalBackupTags(): shapes.FSxTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.DeleteFileSystem.LustreResponse.FinalBackupTags'),
        outputPath: 'LustreResponse.FinalBackupTags',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          WindowsConfiguration: {
            SkipFinalBackup: this.input.windowsConfiguration?.skipFinalBackup,
            FinalBackupTags: this.input.windowsConfiguration?.finalBackupTags,
          },
          LustreConfiguration: {
            SkipFinalBackup: this.input.lustreConfiguration?.skipFinalBackup,
            FinalBackupTags: this.input.lustreConfiguration?.finalBackupTags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFileSystem.LustreResponse.FinalBackupTags', props);
    return resource.getResponseField('LustreResponse.FinalBackupTags') as unknown as shapes.FSxTag[];
  }

}

export class FSxDescribeBackups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxDescribeBackupsRequest) {
    super(scope, id);
  }

  public get backups(): shapes.FSxBackup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackups',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.DescribeBackups.Backups'),
        outputPath: 'Backups',
        parameters: {
          BackupIds: this.input.backupIds,
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackups.Backups', props);
    return resource.getResponseField('Backups') as unknown as shapes.FSxBackup[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackups',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.DescribeBackups.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          BackupIds: this.input.backupIds,
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class FSxDescribeDataRepositoryTasks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxDescribeDataRepositoryTasksRequest) {
    super(scope, id);
  }

  public get dataRepositoryTasks(): shapes.FSxDataRepositoryTask[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataRepositoryTasks',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.DescribeDataRepositoryTasks.DataRepositoryTasks'),
        outputPath: 'DataRepositoryTasks',
        parameters: {
          TaskIds: this.input.taskIds,
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataRepositoryTasks.DataRepositoryTasks', props);
    return resource.getResponseField('DataRepositoryTasks') as unknown as shapes.FSxDataRepositoryTask[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataRepositoryTasks',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.DescribeDataRepositoryTasks.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          TaskIds: this.input.taskIds,
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataRepositoryTasks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class FSxDescribeFileSystemAliases extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxDescribeFileSystemAliasesRequest) {
    super(scope, id);
  }

  public get aliases(): shapes.FSxAlias[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFileSystemAliases',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.DescribeFileSystemAliases.Aliases'),
        outputPath: 'Aliases',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemId: this.input.fileSystemId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFileSystemAliases.Aliases', props);
    return resource.getResponseField('Aliases') as unknown as shapes.FSxAlias[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFileSystemAliases',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.DescribeFileSystemAliases.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemId: this.input.fileSystemId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFileSystemAliases.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class FSxDescribeFileSystems extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxDescribeFileSystemsRequest) {
    super(scope, id);
  }

  public get fileSystems(): shapes.FSxFileSystem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFileSystems',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.DescribeFileSystems.FileSystems'),
        outputPath: 'FileSystems',
        parameters: {
          FileSystemIds: this.input.fileSystemIds,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFileSystems.FileSystems', props);
    return resource.getResponseField('FileSystems') as unknown as shapes.FSxFileSystem[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFileSystems',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.DescribeFileSystems.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          FileSystemIds: this.input.fileSystemIds,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFileSystems.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class FSxDisassociateFileSystemAliases extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxDisassociateFileSystemAliasesRequest) {
    super(scope, id);
  }

  public get aliases(): shapes.FSxAlias[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateFileSystemAliases',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.DisassociateFileSystemAliases.Aliases'),
        outputPath: 'Aliases',
        parameters: {
          ClientRequestToken: this.input.clientRequestToken,
          FileSystemId: this.input.fileSystemId,
          Aliases: this.input.aliases,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateFileSystemAliases.Aliases', props);
    return resource.getResponseField('Aliases') as unknown as shapes.FSxAlias[];
  }

}

export class FSxListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxListTagsForResourceRequest) {
    super(scope, id);
  }

  public get tags(): shapes.FSxTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceARN: this.input.resourceArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.FSxTag[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.ListTagsForResource.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ResourceARN: this.input.resourceArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class FSxUpdateFileSystem extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxUpdateFileSystemRequest) {
    super(scope, id);
  }

  public get fileSystem(): FSxUpdateFileSystemFileSystem {
    return new FSxUpdateFileSystemFileSystem(this, 'FileSystem', this.__resources, this.input);
  }

}

export class FSxUpdateFileSystemFileSystem extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxUpdateFileSystemRequest) {
    super(scope, id);
  }

  public get ownerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.OwnerId'),
        outputPath: 'FileSystem.OwnerId',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.OwnerId', props);
    return resource.getResponseField('FileSystem.OwnerId') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.CreationTime'),
        outputPath: 'FileSystem.CreationTime',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.CreationTime', props);
    return resource.getResponseField('FileSystem.CreationTime') as unknown as string;
  }

  public get fileSystemId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.FileSystemId'),
        outputPath: 'FileSystem.FileSystemId',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.FileSystemId', props);
    return resource.getResponseField('FileSystem.FileSystemId') as unknown as string;
  }

  public get fileSystemType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.FileSystemType'),
        outputPath: 'FileSystem.FileSystemType',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.FileSystemType', props);
    return resource.getResponseField('FileSystem.FileSystemType') as unknown as string;
  }

  public get lifecycle(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.Lifecycle'),
        outputPath: 'FileSystem.Lifecycle',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.Lifecycle', props);
    return resource.getResponseField('FileSystem.Lifecycle') as unknown as string;
  }

  public get failureDetails(): FSxUpdateFileSystemFileSystemFailureDetails {
    return new FSxUpdateFileSystemFileSystemFailureDetails(this, 'FailureDetails', this.__resources, this.input);
  }

  public get storageCapacity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.StorageCapacity'),
        outputPath: 'FileSystem.StorageCapacity',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.StorageCapacity', props);
    return resource.getResponseField('FileSystem.StorageCapacity') as unknown as number;
  }

  public get storageType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.StorageType'),
        outputPath: 'FileSystem.StorageType',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.StorageType', props);
    return resource.getResponseField('FileSystem.StorageType') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.VpcId'),
        outputPath: 'FileSystem.VpcId',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.VpcId', props);
    return resource.getResponseField('FileSystem.VpcId') as unknown as string;
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.SubnetIds'),
        outputPath: 'FileSystem.SubnetIds',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.SubnetIds', props);
    return resource.getResponseField('FileSystem.SubnetIds') as unknown as string[];
  }

  public get networkInterfaceIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.NetworkInterfaceIds'),
        outputPath: 'FileSystem.NetworkInterfaceIds',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.NetworkInterfaceIds', props);
    return resource.getResponseField('FileSystem.NetworkInterfaceIds') as unknown as string[];
  }

  public get dnsName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.DNSName'),
        outputPath: 'FileSystem.DNSName',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.DNSName', props);
    return resource.getResponseField('FileSystem.DNSName') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.KmsKeyId'),
        outputPath: 'FileSystem.KmsKeyId',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.KmsKeyId', props);
    return resource.getResponseField('FileSystem.KmsKeyId') as unknown as string;
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.ResourceARN'),
        outputPath: 'FileSystem.ResourceARN',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.ResourceARN', props);
    return resource.getResponseField('FileSystem.ResourceARN') as unknown as string;
  }

  public get tags(): shapes.FSxTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.Tags'),
        outputPath: 'FileSystem.Tags',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.Tags', props);
    return resource.getResponseField('FileSystem.Tags') as unknown as shapes.FSxTag[];
  }

  public get windowsConfiguration(): FSxUpdateFileSystemFileSystemWindowsConfiguration {
    return new FSxUpdateFileSystemFileSystemWindowsConfiguration(this, 'WindowsConfiguration', this.__resources, this.input);
  }

  public get lustreConfiguration(): FSxUpdateFileSystemFileSystemLustreConfiguration {
    return new FSxUpdateFileSystemFileSystemLustreConfiguration(this, 'LustreConfiguration', this.__resources, this.input);
  }

  public get administrativeActions(): shapes.FSxAdministrativeAction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.AdministrativeActions'),
        outputPath: 'FileSystem.AdministrativeActions',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.AdministrativeActions', props);
    return resource.getResponseField('FileSystem.AdministrativeActions') as unknown as shapes.FSxAdministrativeAction[];
  }

}

export class FSxUpdateFileSystemFileSystemFailureDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxUpdateFileSystemRequest) {
    super(scope, id);
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.FailureDetails.Message'),
        outputPath: 'FileSystem.FailureDetails.Message',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.FailureDetails.Message', props);
    return resource.getResponseField('FileSystem.FailureDetails.Message') as unknown as string;
  }

}

export class FSxUpdateFileSystemFileSystemWindowsConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxUpdateFileSystemRequest) {
    super(scope, id);
  }

  public get activeDirectoryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.WindowsConfiguration.ActiveDirectoryId'),
        outputPath: 'FileSystem.WindowsConfiguration.ActiveDirectoryId',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.WindowsConfiguration.ActiveDirectoryId', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.ActiveDirectoryId') as unknown as string;
  }

  public get selfManagedActiveDirectoryConfiguration(): FSxUpdateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration {
    return new FSxUpdateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration(this, 'SelfManagedActiveDirectoryConfiguration', this.__resources, this.input);
  }

  public get deploymentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.WindowsConfiguration.DeploymentType'),
        outputPath: 'FileSystem.WindowsConfiguration.DeploymentType',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.WindowsConfiguration.DeploymentType', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.DeploymentType') as unknown as string;
  }

  public get remoteAdministrationEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.WindowsConfiguration.RemoteAdministrationEndpoint'),
        outputPath: 'FileSystem.WindowsConfiguration.RemoteAdministrationEndpoint',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.WindowsConfiguration.RemoteAdministrationEndpoint', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.RemoteAdministrationEndpoint') as unknown as string;
  }

  public get preferredSubnetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.WindowsConfiguration.PreferredSubnetId'),
        outputPath: 'FileSystem.WindowsConfiguration.PreferredSubnetId',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.WindowsConfiguration.PreferredSubnetId', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.PreferredSubnetId') as unknown as string;
  }

  public get preferredFileServerIp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.WindowsConfiguration.PreferredFileServerIp'),
        outputPath: 'FileSystem.WindowsConfiguration.PreferredFileServerIp',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.WindowsConfiguration.PreferredFileServerIp', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.PreferredFileServerIp') as unknown as string;
  }

  public get throughputCapacity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.WindowsConfiguration.ThroughputCapacity'),
        outputPath: 'FileSystem.WindowsConfiguration.ThroughputCapacity',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.WindowsConfiguration.ThroughputCapacity', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.ThroughputCapacity') as unknown as number;
  }

  public get maintenanceOperationsInProgress(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.WindowsConfiguration.MaintenanceOperationsInProgress'),
        outputPath: 'FileSystem.WindowsConfiguration.MaintenanceOperationsInProgress',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.WindowsConfiguration.MaintenanceOperationsInProgress', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.MaintenanceOperationsInProgress') as unknown as string[];
  }

  public get weeklyMaintenanceStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.WindowsConfiguration.WeeklyMaintenanceStartTime'),
        outputPath: 'FileSystem.WindowsConfiguration.WeeklyMaintenanceStartTime',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.WindowsConfiguration.WeeklyMaintenanceStartTime', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.WeeklyMaintenanceStartTime') as unknown as string;
  }

  public get dailyAutomaticBackupStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.WindowsConfiguration.DailyAutomaticBackupStartTime'),
        outputPath: 'FileSystem.WindowsConfiguration.DailyAutomaticBackupStartTime',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.WindowsConfiguration.DailyAutomaticBackupStartTime', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.DailyAutomaticBackupStartTime') as unknown as string;
  }

  public get automaticBackupRetentionDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.WindowsConfiguration.AutomaticBackupRetentionDays'),
        outputPath: 'FileSystem.WindowsConfiguration.AutomaticBackupRetentionDays',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.WindowsConfiguration.AutomaticBackupRetentionDays', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.AutomaticBackupRetentionDays') as unknown as number;
  }

  public get copyTagsToBackups(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.WindowsConfiguration.CopyTagsToBackups'),
        outputPath: 'FileSystem.WindowsConfiguration.CopyTagsToBackups',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.WindowsConfiguration.CopyTagsToBackups', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.CopyTagsToBackups') as unknown as boolean;
  }

  public get aliases(): shapes.FSxAlias[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.WindowsConfiguration.Aliases'),
        outputPath: 'FileSystem.WindowsConfiguration.Aliases',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.WindowsConfiguration.Aliases', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.Aliases') as unknown as shapes.FSxAlias[];
  }

}

export class FSxUpdateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxUpdateFileSystemRequest) {
    super(scope, id);
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DomainName'),
        outputPath: 'FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DomainName',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DomainName', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DomainName') as unknown as string;
  }

  public get organizationalUnitDistinguishedName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.OrganizationalUnitDistinguishedName'),
        outputPath: 'FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.OrganizationalUnitDistinguishedName',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.OrganizationalUnitDistinguishedName', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.OrganizationalUnitDistinguishedName') as unknown as string;
  }

  public get fileSystemAdministratorsGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.FileSystemAdministratorsGroup'),
        outputPath: 'FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.FileSystemAdministratorsGroup',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.FileSystemAdministratorsGroup', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.FileSystemAdministratorsGroup') as unknown as string;
  }

  public get userName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.UserName'),
        outputPath: 'FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.UserName',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.UserName', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.UserName') as unknown as string;
  }

  public get dnsIps(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DnsIps'),
        outputPath: 'FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DnsIps',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DnsIps', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DnsIps') as unknown as string[];
  }

}

export class FSxUpdateFileSystemFileSystemLustreConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxUpdateFileSystemRequest) {
    super(scope, id);
  }

  public get weeklyMaintenanceStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.LustreConfiguration.WeeklyMaintenanceStartTime'),
        outputPath: 'FileSystem.LustreConfiguration.WeeklyMaintenanceStartTime',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.LustreConfiguration.WeeklyMaintenanceStartTime', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.WeeklyMaintenanceStartTime') as unknown as string;
  }

  public get dataRepositoryConfiguration(): FSxUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration {
    return new FSxUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration(this, 'DataRepositoryConfiguration', this.__resources, this.input);
  }

  public get deploymentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.LustreConfiguration.DeploymentType'),
        outputPath: 'FileSystem.LustreConfiguration.DeploymentType',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.LustreConfiguration.DeploymentType', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DeploymentType') as unknown as string;
  }

  public get perUnitStorageThroughput(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.LustreConfiguration.PerUnitStorageThroughput'),
        outputPath: 'FileSystem.LustreConfiguration.PerUnitStorageThroughput',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.LustreConfiguration.PerUnitStorageThroughput', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.PerUnitStorageThroughput') as unknown as number;
  }

  public get mountName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.LustreConfiguration.MountName'),
        outputPath: 'FileSystem.LustreConfiguration.MountName',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.LustreConfiguration.MountName', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.MountName') as unknown as string;
  }

  public get dailyAutomaticBackupStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.LustreConfiguration.DailyAutomaticBackupStartTime'),
        outputPath: 'FileSystem.LustreConfiguration.DailyAutomaticBackupStartTime',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.LustreConfiguration.DailyAutomaticBackupStartTime', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DailyAutomaticBackupStartTime') as unknown as string;
  }

  public get automaticBackupRetentionDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.LustreConfiguration.AutomaticBackupRetentionDays'),
        outputPath: 'FileSystem.LustreConfiguration.AutomaticBackupRetentionDays',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.LustreConfiguration.AutomaticBackupRetentionDays', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.AutomaticBackupRetentionDays') as unknown as number;
  }

  public get copyTagsToBackups(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.LustreConfiguration.CopyTagsToBackups'),
        outputPath: 'FileSystem.LustreConfiguration.CopyTagsToBackups',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.LustreConfiguration.CopyTagsToBackups', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.CopyTagsToBackups') as unknown as boolean;
  }

  public get driveCacheType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.LustreConfiguration.DriveCacheType'),
        outputPath: 'FileSystem.LustreConfiguration.DriveCacheType',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.LustreConfiguration.DriveCacheType', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DriveCacheType') as unknown as string;
  }

}

export class FSxUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxUpdateFileSystemRequest) {
    super(scope, id);
  }

  public get lifecycle(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.Lifecycle'),
        outputPath: 'FileSystem.LustreConfiguration.DataRepositoryConfiguration.Lifecycle',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.Lifecycle', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DataRepositoryConfiguration.Lifecycle') as unknown as string;
  }

  public get importPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportPath'),
        outputPath: 'FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportPath',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportPath', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportPath') as unknown as string;
  }

  public get exportPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ExportPath'),
        outputPath: 'FileSystem.LustreConfiguration.DataRepositoryConfiguration.ExportPath',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ExportPath', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DataRepositoryConfiguration.ExportPath') as unknown as string;
  }

  public get importedFileChunkSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportedFileChunkSize'),
        outputPath: 'FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportedFileChunkSize',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportedFileChunkSize', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportedFileChunkSize') as unknown as number;
  }

  public get autoImportPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.AutoImportPolicy'),
        outputPath: 'FileSystem.LustreConfiguration.DataRepositoryConfiguration.AutoImportPolicy',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.AutoImportPolicy', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DataRepositoryConfiguration.AutoImportPolicy') as unknown as string;
  }

  public get failureDetails(): FSxUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails {
    return new FSxUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails(this, 'FailureDetails', this.__resources, this.input);
  }

}

export class FSxUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FSxUpdateFileSystemRequest) {
    super(scope, id);
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.FailureDetails.Message'),
        outputPath: 'FileSystem.LustreConfiguration.DataRepositoryConfiguration.FailureDetails.Message',
        parameters: {
          FileSystemId: this.input.fileSystemId,
          ClientRequestToken: this.input.clientRequestToken,
          StorageCapacity: this.input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.input.lustreConfiguration?.autoImportPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.FailureDetails.Message', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DataRepositoryConfiguration.FailureDetails.Message') as unknown as string;
  }

}

