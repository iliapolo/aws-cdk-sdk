import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class FSxClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateFileSystemAliases(input: shapes.FSxAssociateFileSystemAliasesRequest): FSxResponsesAssociateFileSystemAliases {
    return new FSxResponsesAssociateFileSystemAliases(this, this.__resources, input);
  }

  public cancelDataRepositoryTask(input: shapes.FSxCancelDataRepositoryTaskRequest): FSxResponsesCancelDataRepositoryTask {
    return new FSxResponsesCancelDataRepositoryTask(this, this.__resources, input);
  }

  public copyBackup(input: shapes.FSxCopyBackupRequest): FSxResponsesCopyBackup {
    return new FSxResponsesCopyBackup(this, this.__resources, input);
  }

  public createBackup(input: shapes.FSxCreateBackupRequest): FSxResponsesCreateBackup {
    return new FSxResponsesCreateBackup(this, this.__resources, input);
  }

  public createDataRepositoryTask(input: shapes.FSxCreateDataRepositoryTaskRequest): FSxResponsesCreateDataRepositoryTask {
    return new FSxResponsesCreateDataRepositoryTask(this, this.__resources, input);
  }

  public createFileSystem(input: shapes.FSxCreateFileSystemRequest): FSxResponsesCreateFileSystem {
    return new FSxResponsesCreateFileSystem(this, this.__resources, input);
  }

  public createFileSystemFromBackup(input: shapes.FSxCreateFileSystemFromBackupRequest): FSxResponsesCreateFileSystemFromBackup {
    return new FSxResponsesCreateFileSystemFromBackup(this, this.__resources, input);
  }

  public deleteBackup(input: shapes.FSxDeleteBackupRequest): FSxResponsesDeleteBackup {
    return new FSxResponsesDeleteBackup(this, this.__resources, input);
  }

  public deleteFileSystem(input: shapes.FSxDeleteFileSystemRequest): FSxResponsesDeleteFileSystem {
    return new FSxResponsesDeleteFileSystem(this, this.__resources, input);
  }

  public describeBackups(input: shapes.FSxDescribeBackupsRequest): FSxResponsesDescribeBackups {
    return new FSxResponsesDescribeBackups(this, this.__resources, input);
  }

  public describeDataRepositoryTasks(input: shapes.FSxDescribeDataRepositoryTasksRequest): FSxResponsesDescribeDataRepositoryTasks {
    return new FSxResponsesDescribeDataRepositoryTasks(this, this.__resources, input);
  }

  public describeFileSystemAliases(input: shapes.FSxDescribeFileSystemAliasesRequest): FSxResponsesDescribeFileSystemAliases {
    return new FSxResponsesDescribeFileSystemAliases(this, this.__resources, input);
  }

  public describeFileSystems(input: shapes.FSxDescribeFileSystemsRequest): FSxResponsesDescribeFileSystems {
    return new FSxResponsesDescribeFileSystems(this, this.__resources, input);
  }

  public disassociateFileSystemAliases(input: shapes.FSxDisassociateFileSystemAliasesRequest): FSxResponsesDisassociateFileSystemAliases {
    return new FSxResponsesDisassociateFileSystemAliases(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.FSxListTagsForResourceRequest): FSxResponsesListTagsForResource {
    return new FSxResponsesListTagsForResource(this, this.__resources, input);
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

  public updateFileSystem(input: shapes.FSxUpdateFileSystemRequest): FSxResponsesUpdateFileSystem {
    return new FSxResponsesUpdateFileSystem(this, this.__resources, input);
  }

}

export class FSxResponsesAssociateFileSystemAliases {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxAssociateFileSystemAliasesRequest) {
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemId: this.__input.fileSystemId,
          Aliases: this.__input.aliases,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateFileSystemAliases.Aliases', props);
    return resource.getResponseField('Aliases') as unknown as shapes.FSxAlias[];
  }

}

export class FSxResponsesCancelDataRepositoryTask {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCancelDataRepositoryTaskRequest) {
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
          TaskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelDataRepositoryTask.Lifecycle', props);
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
          TaskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelDataRepositoryTask.TaskId', props);
    return resource.getResponseField('TaskId') as unknown as string;
  }

}

export class FSxResponsesCopyBackup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCopyBackupRequest) {
  }

  public get backup(): FSxResponsesCopyBackupBackup {
    return new FSxResponsesCopyBackupBackup(this.__scope, this.__resources, this.__input);
  }

}

export class FSxResponsesCopyBackupBackup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCopyBackupRequest) {
  }

  public get backupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.BackupId'),
        outputPath: 'Backup.BackupId',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.BackupId', props);
    return resource.getResponseField('Backup.BackupId') as unknown as string;
  }

  public get lifecycle(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.Lifecycle'),
        outputPath: 'Backup.Lifecycle',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.Lifecycle', props);
    return resource.getResponseField('Backup.Lifecycle') as unknown as string;
  }

  public get failureDetails(): FSxResponsesCopyBackupBackupFailureDetails {
    return new FSxResponsesCopyBackupBackupFailureDetails(this.__scope, this.__resources, this.__input);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.Type'),
        outputPath: 'Backup.Type',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.Type', props);
    return resource.getResponseField('Backup.Type') as unknown as string;
  }

  public get progressPercent(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.ProgressPercent'),
        outputPath: 'Backup.ProgressPercent',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.ProgressPercent', props);
    return resource.getResponseField('Backup.ProgressPercent') as unknown as number;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.CreationTime'),
        outputPath: 'Backup.CreationTime',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.CreationTime', props);
    return resource.getResponseField('Backup.CreationTime') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.KmsKeyId'),
        outputPath: 'Backup.KmsKeyId',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.KmsKeyId', props);
    return resource.getResponseField('Backup.KmsKeyId') as unknown as string;
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.ResourceARN'),
        outputPath: 'Backup.ResourceARN',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.ResourceARN', props);
    return resource.getResponseField('Backup.ResourceARN') as unknown as string;
  }

  public get tags(): shapes.FSxTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.Tags'),
        outputPath: 'Backup.Tags',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.Tags', props);
    return resource.getResponseField('Backup.Tags') as unknown as shapes.FSxTag[];
  }

  public get fileSystem(): FSxResponsesCopyBackupBackupFileSystem {
    return new FSxResponsesCopyBackupBackupFileSystem(this.__scope, this.__resources, this.__input);
  }

  public get directoryInformation(): FSxResponsesCopyBackupBackupDirectoryInformation {
    return new FSxResponsesCopyBackupBackupDirectoryInformation(this.__scope, this.__resources, this.__input);
  }

  public get ownerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.OwnerId'),
        outputPath: 'Backup.OwnerId',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.OwnerId', props);
    return resource.getResponseField('Backup.OwnerId') as unknown as string;
  }

  public get sourceBackupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.SourceBackupId'),
        outputPath: 'Backup.SourceBackupId',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.SourceBackupId', props);
    return resource.getResponseField('Backup.SourceBackupId') as unknown as string;
  }

  public get sourceBackupRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.SourceBackupRegion'),
        outputPath: 'Backup.SourceBackupRegion',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.SourceBackupRegion', props);
    return resource.getResponseField('Backup.SourceBackupRegion') as unknown as string;
  }

}

export class FSxResponsesCopyBackupBackupFailureDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCopyBackupRequest) {
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FailureDetails.Message'),
        outputPath: 'Backup.FailureDetails.Message',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FailureDetails.Message', props);
    return resource.getResponseField('Backup.FailureDetails.Message') as unknown as string;
  }

}

export class FSxResponsesCopyBackupBackupFileSystem {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCopyBackupRequest) {
  }

  public get ownerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.OwnerId'),
        outputPath: 'Backup.FileSystem.OwnerId',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.OwnerId', props);
    return resource.getResponseField('Backup.FileSystem.OwnerId') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.CreationTime'),
        outputPath: 'Backup.FileSystem.CreationTime',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.CreationTime', props);
    return resource.getResponseField('Backup.FileSystem.CreationTime') as unknown as string;
  }

  public get fileSystemId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.FileSystemId'),
        outputPath: 'Backup.FileSystem.FileSystemId',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.FileSystemId', props);
    return resource.getResponseField('Backup.FileSystem.FileSystemId') as unknown as string;
  }

  public get fileSystemType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.FileSystemType'),
        outputPath: 'Backup.FileSystem.FileSystemType',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.FileSystemType', props);
    return resource.getResponseField('Backup.FileSystem.FileSystemType') as unknown as string;
  }

  public get lifecycle(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.Lifecycle'),
        outputPath: 'Backup.FileSystem.Lifecycle',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.Lifecycle', props);
    return resource.getResponseField('Backup.FileSystem.Lifecycle') as unknown as string;
  }

  public get failureDetails(): FSxResponsesCopyBackupBackupFileSystemFailureDetails {
    return new FSxResponsesCopyBackupBackupFileSystemFailureDetails(this.__scope, this.__resources, this.__input);
  }

  public get storageCapacity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.StorageCapacity'),
        outputPath: 'Backup.FileSystem.StorageCapacity',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.StorageCapacity', props);
    return resource.getResponseField('Backup.FileSystem.StorageCapacity') as unknown as number;
  }

  public get storageType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.StorageType'),
        outputPath: 'Backup.FileSystem.StorageType',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.StorageType', props);
    return resource.getResponseField('Backup.FileSystem.StorageType') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.VpcId'),
        outputPath: 'Backup.FileSystem.VpcId',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.VpcId', props);
    return resource.getResponseField('Backup.FileSystem.VpcId') as unknown as string;
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.SubnetIds'),
        outputPath: 'Backup.FileSystem.SubnetIds',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.SubnetIds', props);
    return resource.getResponseField('Backup.FileSystem.SubnetIds') as unknown as string[];
  }

  public get networkInterfaceIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.NetworkInterfaceIds'),
        outputPath: 'Backup.FileSystem.NetworkInterfaceIds',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.NetworkInterfaceIds', props);
    return resource.getResponseField('Backup.FileSystem.NetworkInterfaceIds') as unknown as string[];
  }

  public get dnsName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.DNSName'),
        outputPath: 'Backup.FileSystem.DNSName',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.DNSName', props);
    return resource.getResponseField('Backup.FileSystem.DNSName') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.KmsKeyId'),
        outputPath: 'Backup.FileSystem.KmsKeyId',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.KmsKeyId', props);
    return resource.getResponseField('Backup.FileSystem.KmsKeyId') as unknown as string;
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.ResourceARN'),
        outputPath: 'Backup.FileSystem.ResourceARN',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.ResourceARN', props);
    return resource.getResponseField('Backup.FileSystem.ResourceARN') as unknown as string;
  }

  public get tags(): shapes.FSxTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.Tags'),
        outputPath: 'Backup.FileSystem.Tags',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.Tags', props);
    return resource.getResponseField('Backup.FileSystem.Tags') as unknown as shapes.FSxTag[];
  }

  public get windowsConfiguration(): FSxResponsesCopyBackupBackupFileSystemWindowsConfiguration {
    return new FSxResponsesCopyBackupBackupFileSystemWindowsConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get lustreConfiguration(): FSxResponsesCopyBackupBackupFileSystemLustreConfiguration {
    return new FSxResponsesCopyBackupBackupFileSystemLustreConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get administrativeActions(): shapes.FSxAdministrativeAction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.AdministrativeActions'),
        outputPath: 'Backup.FileSystem.AdministrativeActions',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.AdministrativeActions', props);
    return resource.getResponseField('Backup.FileSystem.AdministrativeActions') as unknown as shapes.FSxAdministrativeAction[];
  }

}

export class FSxResponsesCopyBackupBackupFileSystemFailureDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCopyBackupRequest) {
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.FailureDetails.Message'),
        outputPath: 'Backup.FileSystem.FailureDetails.Message',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.FailureDetails.Message', props);
    return resource.getResponseField('Backup.FileSystem.FailureDetails.Message') as unknown as string;
  }

}

export class FSxResponsesCopyBackupBackupFileSystemWindowsConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCopyBackupRequest) {
  }

  public get activeDirectoryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.WindowsConfiguration.ActiveDirectoryId'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.ActiveDirectoryId',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.WindowsConfiguration.ActiveDirectoryId', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.ActiveDirectoryId') as unknown as string;
  }

  public get selfManagedActiveDirectoryConfiguration(): FSxResponsesCopyBackupBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration {
    return new FSxResponsesCopyBackupBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get deploymentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.WindowsConfiguration.DeploymentType'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.DeploymentType',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.WindowsConfiguration.DeploymentType', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.DeploymentType') as unknown as string;
  }

  public get remoteAdministrationEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.WindowsConfiguration.RemoteAdministrationEndpoint'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.RemoteAdministrationEndpoint',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.WindowsConfiguration.RemoteAdministrationEndpoint', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.RemoteAdministrationEndpoint') as unknown as string;
  }

  public get preferredSubnetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.WindowsConfiguration.PreferredSubnetId'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.PreferredSubnetId',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.WindowsConfiguration.PreferredSubnetId', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.PreferredSubnetId') as unknown as string;
  }

  public get preferredFileServerIp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.WindowsConfiguration.PreferredFileServerIp'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.PreferredFileServerIp',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.WindowsConfiguration.PreferredFileServerIp', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.PreferredFileServerIp') as unknown as string;
  }

  public get throughputCapacity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.WindowsConfiguration.ThroughputCapacity'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.ThroughputCapacity',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.WindowsConfiguration.ThroughputCapacity', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.ThroughputCapacity') as unknown as number;
  }

  public get maintenanceOperationsInProgress(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.WindowsConfiguration.MaintenanceOperationsInProgress'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.MaintenanceOperationsInProgress',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.WindowsConfiguration.MaintenanceOperationsInProgress', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.MaintenanceOperationsInProgress') as unknown as string[];
  }

  public get weeklyMaintenanceStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.WindowsConfiguration.WeeklyMaintenanceStartTime'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.WeeklyMaintenanceStartTime',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.WindowsConfiguration.WeeklyMaintenanceStartTime', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.WeeklyMaintenanceStartTime') as unknown as string;
  }

  public get dailyAutomaticBackupStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.WindowsConfiguration.DailyAutomaticBackupStartTime'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.DailyAutomaticBackupStartTime',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.WindowsConfiguration.DailyAutomaticBackupStartTime', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.DailyAutomaticBackupStartTime') as unknown as string;
  }

  public get automaticBackupRetentionDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.WindowsConfiguration.AutomaticBackupRetentionDays'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.AutomaticBackupRetentionDays',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.WindowsConfiguration.AutomaticBackupRetentionDays', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.AutomaticBackupRetentionDays') as unknown as number;
  }

  public get copyTagsToBackups(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.WindowsConfiguration.CopyTagsToBackups'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.CopyTagsToBackups',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.WindowsConfiguration.CopyTagsToBackups', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.CopyTagsToBackups') as unknown as boolean;
  }

  public get aliases(): shapes.FSxAlias[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.WindowsConfiguration.Aliases'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.Aliases',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.WindowsConfiguration.Aliases', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.Aliases') as unknown as shapes.FSxAlias[];
  }

  public get auditLogConfiguration(): FSxResponsesCopyBackupBackupFileSystemWindowsConfigurationAuditLogConfiguration {
    return new FSxResponsesCopyBackupBackupFileSystemWindowsConfigurationAuditLogConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class FSxResponsesCopyBackupBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCopyBackupRequest) {
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DomainName'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DomainName',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DomainName', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DomainName') as unknown as string;
  }

  public get organizationalUnitDistinguishedName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.OrganizationalUnitDistinguishedName'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.OrganizationalUnitDistinguishedName',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.OrganizationalUnitDistinguishedName', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.OrganizationalUnitDistinguishedName') as unknown as string;
  }

  public get fileSystemAdministratorsGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.FileSystemAdministratorsGroup'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.FileSystemAdministratorsGroup',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.FileSystemAdministratorsGroup', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.FileSystemAdministratorsGroup') as unknown as string;
  }

  public get userName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.UserName'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.UserName',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.UserName', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.UserName') as unknown as string;
  }

  public get dnsIps(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DnsIps'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DnsIps',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DnsIps', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DnsIps') as unknown as string[];
  }

}

export class FSxResponsesCopyBackupBackupFileSystemWindowsConfigurationAuditLogConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCopyBackupRequest) {
  }

  public get fileAccessAuditLogLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.WindowsConfiguration.AuditLogConfiguration.FileAccessAuditLogLevel'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.AuditLogConfiguration.FileAccessAuditLogLevel',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.WindowsConfiguration.AuditLogConfiguration.FileAccessAuditLogLevel', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.AuditLogConfiguration.FileAccessAuditLogLevel') as unknown as string;
  }

  public get fileShareAccessAuditLogLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.WindowsConfiguration.AuditLogConfiguration.FileShareAccessAuditLogLevel'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.AuditLogConfiguration.FileShareAccessAuditLogLevel',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.WindowsConfiguration.AuditLogConfiguration.FileShareAccessAuditLogLevel', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.AuditLogConfiguration.FileShareAccessAuditLogLevel') as unknown as string;
  }

  public get auditLogDestination(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.WindowsConfiguration.AuditLogConfiguration.AuditLogDestination'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.AuditLogConfiguration.AuditLogDestination',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.WindowsConfiguration.AuditLogConfiguration.AuditLogDestination', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.AuditLogConfiguration.AuditLogDestination') as unknown as string;
  }

}

export class FSxResponsesCopyBackupBackupFileSystemLustreConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCopyBackupRequest) {
  }

  public get weeklyMaintenanceStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.LustreConfiguration.WeeklyMaintenanceStartTime'),
        outputPath: 'Backup.FileSystem.LustreConfiguration.WeeklyMaintenanceStartTime',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.LustreConfiguration.WeeklyMaintenanceStartTime', props);
    return resource.getResponseField('Backup.FileSystem.LustreConfiguration.WeeklyMaintenanceStartTime') as unknown as string;
  }

  public get dataRepositoryConfiguration(): FSxResponsesCopyBackupBackupFileSystemLustreConfigurationDataRepositoryConfiguration {
    return new FSxResponsesCopyBackupBackupFileSystemLustreConfigurationDataRepositoryConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get deploymentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.LustreConfiguration.DeploymentType'),
        outputPath: 'Backup.FileSystem.LustreConfiguration.DeploymentType',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.LustreConfiguration.DeploymentType', props);
    return resource.getResponseField('Backup.FileSystem.LustreConfiguration.DeploymentType') as unknown as string;
  }

  public get perUnitStorageThroughput(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.LustreConfiguration.PerUnitStorageThroughput'),
        outputPath: 'Backup.FileSystem.LustreConfiguration.PerUnitStorageThroughput',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.LustreConfiguration.PerUnitStorageThroughput', props);
    return resource.getResponseField('Backup.FileSystem.LustreConfiguration.PerUnitStorageThroughput') as unknown as number;
  }

  public get mountName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.LustreConfiguration.MountName'),
        outputPath: 'Backup.FileSystem.LustreConfiguration.MountName',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.LustreConfiguration.MountName', props);
    return resource.getResponseField('Backup.FileSystem.LustreConfiguration.MountName') as unknown as string;
  }

  public get dailyAutomaticBackupStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.LustreConfiguration.DailyAutomaticBackupStartTime'),
        outputPath: 'Backup.FileSystem.LustreConfiguration.DailyAutomaticBackupStartTime',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.LustreConfiguration.DailyAutomaticBackupStartTime', props);
    return resource.getResponseField('Backup.FileSystem.LustreConfiguration.DailyAutomaticBackupStartTime') as unknown as string;
  }

  public get automaticBackupRetentionDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.LustreConfiguration.AutomaticBackupRetentionDays'),
        outputPath: 'Backup.FileSystem.LustreConfiguration.AutomaticBackupRetentionDays',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.LustreConfiguration.AutomaticBackupRetentionDays', props);
    return resource.getResponseField('Backup.FileSystem.LustreConfiguration.AutomaticBackupRetentionDays') as unknown as number;
  }

  public get copyTagsToBackups(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.LustreConfiguration.CopyTagsToBackups'),
        outputPath: 'Backup.FileSystem.LustreConfiguration.CopyTagsToBackups',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.LustreConfiguration.CopyTagsToBackups', props);
    return resource.getResponseField('Backup.FileSystem.LustreConfiguration.CopyTagsToBackups') as unknown as boolean;
  }

  public get driveCacheType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.LustreConfiguration.DriveCacheType'),
        outputPath: 'Backup.FileSystem.LustreConfiguration.DriveCacheType',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.LustreConfiguration.DriveCacheType', props);
    return resource.getResponseField('Backup.FileSystem.LustreConfiguration.DriveCacheType') as unknown as string;
  }

  public get dataCompressionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.LustreConfiguration.DataCompressionType'),
        outputPath: 'Backup.FileSystem.LustreConfiguration.DataCompressionType',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.LustreConfiguration.DataCompressionType', props);
    return resource.getResponseField('Backup.FileSystem.LustreConfiguration.DataCompressionType') as unknown as string;
  }

}

export class FSxResponsesCopyBackupBackupFileSystemLustreConfigurationDataRepositoryConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCopyBackupRequest) {
  }

  public get lifecycle(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.Lifecycle'),
        outputPath: 'Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.Lifecycle',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.Lifecycle', props);
    return resource.getResponseField('Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.Lifecycle') as unknown as string;
  }

  public get importPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportPath'),
        outputPath: 'Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportPath',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportPath', props);
    return resource.getResponseField('Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportPath') as unknown as string;
  }

  public get exportPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ExportPath'),
        outputPath: 'Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ExportPath',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ExportPath', props);
    return resource.getResponseField('Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ExportPath') as unknown as string;
  }

  public get importedFileChunkSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportedFileChunkSize'),
        outputPath: 'Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportedFileChunkSize',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportedFileChunkSize', props);
    return resource.getResponseField('Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportedFileChunkSize') as unknown as number;
  }

  public get autoImportPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.AutoImportPolicy'),
        outputPath: 'Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.AutoImportPolicy',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.AutoImportPolicy', props);
    return resource.getResponseField('Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.AutoImportPolicy') as unknown as string;
  }

  public get failureDetails(): FSxResponsesCopyBackupBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails {
    return new FSxResponsesCopyBackupBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails(this.__scope, this.__resources, this.__input);
  }

}

export class FSxResponsesCopyBackupBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCopyBackupRequest) {
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.FailureDetails.Message'),
        outputPath: 'Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.FailureDetails.Message',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.FailureDetails.Message', props);
    return resource.getResponseField('Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.FailureDetails.Message') as unknown as string;
  }

}

export class FSxResponsesCopyBackupBackupDirectoryInformation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCopyBackupRequest) {
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.DirectoryInformation.DomainName'),
        outputPath: 'Backup.DirectoryInformation.DomainName',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.DirectoryInformation.DomainName', props);
    return resource.getResponseField('Backup.DirectoryInformation.DomainName') as unknown as string;
  }

  public get activeDirectoryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.DirectoryInformation.ActiveDirectoryId'),
        outputPath: 'Backup.DirectoryInformation.ActiveDirectoryId',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.DirectoryInformation.ActiveDirectoryId', props);
    return resource.getResponseField('Backup.DirectoryInformation.ActiveDirectoryId') as unknown as string;
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CopyBackup.Backup.DirectoryInformation.ResourceARN'),
        outputPath: 'Backup.DirectoryInformation.ResourceARN',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          SourceBackupId: this.__input.sourceBackupId,
          SourceRegion: this.__input.sourceRegion,
          KmsKeyId: this.__input.kmsKeyId,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyBackup.Backup.DirectoryInformation.ResourceARN', props);
    return resource.getResponseField('Backup.DirectoryInformation.ResourceARN') as unknown as string;
  }

}

export class FSxResponsesCreateBackup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateBackupRequest) {
  }

  public get backup(): FSxResponsesCreateBackupBackup {
    return new FSxResponsesCreateBackupBackup(this.__scope, this.__resources, this.__input);
  }

}

export class FSxResponsesCreateBackupBackup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateBackupRequest) {
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.BackupId', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.Lifecycle', props);
    return resource.getResponseField('Backup.Lifecycle') as unknown as string;
  }

  public get failureDetails(): FSxResponsesCreateBackupBackupFailureDetails {
    return new FSxResponsesCreateBackupBackupFailureDetails(this.__scope, this.__resources, this.__input);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.Type', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.ProgressPercent', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.CreationTime', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.KmsKeyId', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.ResourceARN', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.Tags', props);
    return resource.getResponseField('Backup.Tags') as unknown as shapes.FSxTag[];
  }

  public get fileSystem(): FSxResponsesCreateBackupBackupFileSystem {
    return new FSxResponsesCreateBackupBackupFileSystem(this.__scope, this.__resources, this.__input);
  }

  public get directoryInformation(): FSxResponsesCreateBackupBackupDirectoryInformation {
    return new FSxResponsesCreateBackupBackupDirectoryInformation(this.__scope, this.__resources, this.__input);
  }

  public get ownerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.OwnerId'),
        outputPath: 'Backup.OwnerId',
        parameters: {
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.OwnerId', props);
    return resource.getResponseField('Backup.OwnerId') as unknown as string;
  }

  public get sourceBackupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.SourceBackupId'),
        outputPath: 'Backup.SourceBackupId',
        parameters: {
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.SourceBackupId', props);
    return resource.getResponseField('Backup.SourceBackupId') as unknown as string;
  }

  public get sourceBackupRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.SourceBackupRegion'),
        outputPath: 'Backup.SourceBackupRegion',
        parameters: {
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.SourceBackupRegion', props);
    return resource.getResponseField('Backup.SourceBackupRegion') as unknown as string;
  }

}

export class FSxResponsesCreateBackupBackupFailureDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateBackupRequest) {
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FailureDetails.Message', props);
    return resource.getResponseField('Backup.FailureDetails.Message') as unknown as string;
  }

}

export class FSxResponsesCreateBackupBackupFileSystem {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateBackupRequest) {
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.OwnerId', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.CreationTime', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.FileSystemId', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.FileSystemType', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.Lifecycle', props);
    return resource.getResponseField('Backup.FileSystem.Lifecycle') as unknown as string;
  }

  public get failureDetails(): FSxResponsesCreateBackupBackupFileSystemFailureDetails {
    return new FSxResponsesCreateBackupBackupFileSystemFailureDetails(this.__scope, this.__resources, this.__input);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.StorageCapacity', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.StorageType', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.VpcId', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.SubnetIds', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.NetworkInterfaceIds', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.DNSName', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.KmsKeyId', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.ResourceARN', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.Tags', props);
    return resource.getResponseField('Backup.FileSystem.Tags') as unknown as shapes.FSxTag[];
  }

  public get windowsConfiguration(): FSxResponsesCreateBackupBackupFileSystemWindowsConfiguration {
    return new FSxResponsesCreateBackupBackupFileSystemWindowsConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get lustreConfiguration(): FSxResponsesCreateBackupBackupFileSystemLustreConfiguration {
    return new FSxResponsesCreateBackupBackupFileSystemLustreConfiguration(this.__scope, this.__resources, this.__input);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.AdministrativeActions', props);
    return resource.getResponseField('Backup.FileSystem.AdministrativeActions') as unknown as shapes.FSxAdministrativeAction[];
  }

}

export class FSxResponsesCreateBackupBackupFileSystemFailureDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateBackupRequest) {
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.FailureDetails.Message', props);
    return resource.getResponseField('Backup.FileSystem.FailureDetails.Message') as unknown as string;
  }

}

export class FSxResponsesCreateBackupBackupFileSystemWindowsConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateBackupRequest) {
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.ActiveDirectoryId', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.ActiveDirectoryId') as unknown as string;
  }

  public get selfManagedActiveDirectoryConfiguration(): FSxResponsesCreateBackupBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration {
    return new FSxResponsesCreateBackupBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration(this.__scope, this.__resources, this.__input);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.DeploymentType', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.RemoteAdministrationEndpoint', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.PreferredSubnetId', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.PreferredFileServerIp', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.ThroughputCapacity', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.MaintenanceOperationsInProgress', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.WeeklyMaintenanceStartTime', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.DailyAutomaticBackupStartTime', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.AutomaticBackupRetentionDays', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.CopyTagsToBackups', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.Aliases', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.Aliases') as unknown as shapes.FSxAlias[];
  }

  public get auditLogConfiguration(): FSxResponsesCreateBackupBackupFileSystemWindowsConfigurationAuditLogConfiguration {
    return new FSxResponsesCreateBackupBackupFileSystemWindowsConfigurationAuditLogConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class FSxResponsesCreateBackupBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateBackupRequest) {
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DomainName', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.OrganizationalUnitDistinguishedName', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.FileSystemAdministratorsGroup', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.UserName', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DnsIps', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DnsIps') as unknown as string[];
  }

}

export class FSxResponsesCreateBackupBackupFileSystemWindowsConfigurationAuditLogConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateBackupRequest) {
  }

  public get fileAccessAuditLogLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.WindowsConfiguration.AuditLogConfiguration.FileAccessAuditLogLevel'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.AuditLogConfiguration.FileAccessAuditLogLevel',
        parameters: {
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.AuditLogConfiguration.FileAccessAuditLogLevel', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.AuditLogConfiguration.FileAccessAuditLogLevel') as unknown as string;
  }

  public get fileShareAccessAuditLogLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.WindowsConfiguration.AuditLogConfiguration.FileShareAccessAuditLogLevel'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.AuditLogConfiguration.FileShareAccessAuditLogLevel',
        parameters: {
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.AuditLogConfiguration.FileShareAccessAuditLogLevel', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.AuditLogConfiguration.FileShareAccessAuditLogLevel') as unknown as string;
  }

  public get auditLogDestination(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.WindowsConfiguration.AuditLogConfiguration.AuditLogDestination'),
        outputPath: 'Backup.FileSystem.WindowsConfiguration.AuditLogConfiguration.AuditLogDestination',
        parameters: {
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.WindowsConfiguration.AuditLogConfiguration.AuditLogDestination', props);
    return resource.getResponseField('Backup.FileSystem.WindowsConfiguration.AuditLogConfiguration.AuditLogDestination') as unknown as string;
  }

}

export class FSxResponsesCreateBackupBackupFileSystemLustreConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateBackupRequest) {
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.LustreConfiguration.WeeklyMaintenanceStartTime', props);
    return resource.getResponseField('Backup.FileSystem.LustreConfiguration.WeeklyMaintenanceStartTime') as unknown as string;
  }

  public get dataRepositoryConfiguration(): FSxResponsesCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfiguration {
    return new FSxResponsesCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfiguration(this.__scope, this.__resources, this.__input);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.LustreConfiguration.DeploymentType', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.LustreConfiguration.PerUnitStorageThroughput', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.LustreConfiguration.MountName', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.LustreConfiguration.DailyAutomaticBackupStartTime', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.LustreConfiguration.AutomaticBackupRetentionDays', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.LustreConfiguration.CopyTagsToBackups', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.LustreConfiguration.DriveCacheType', props);
    return resource.getResponseField('Backup.FileSystem.LustreConfiguration.DriveCacheType') as unknown as string;
  }

  public get dataCompressionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.FileSystem.LustreConfiguration.DataCompressionType'),
        outputPath: 'Backup.FileSystem.LustreConfiguration.DataCompressionType',
        parameters: {
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.LustreConfiguration.DataCompressionType', props);
    return resource.getResponseField('Backup.FileSystem.LustreConfiguration.DataCompressionType') as unknown as string;
  }

}

export class FSxResponsesCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateBackupRequest) {
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.Lifecycle', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportPath', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ExportPath', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportedFileChunkSize', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.AutoImportPolicy', props);
    return resource.getResponseField('Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.AutoImportPolicy') as unknown as string;
  }

  public get failureDetails(): FSxResponsesCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails {
    return new FSxResponsesCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails(this.__scope, this.__resources, this.__input);
  }

}

export class FSxResponsesCreateBackupBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateBackupRequest) {
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.FailureDetails.Message', props);
    return resource.getResponseField('Backup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.FailureDetails.Message') as unknown as string;
  }

}

export class FSxResponsesCreateBackupBackupDirectoryInformation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateBackupRequest) {
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.DirectoryInformation.DomainName', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.DirectoryInformation.ActiveDirectoryId', props);
    return resource.getResponseField('Backup.DirectoryInformation.ActiveDirectoryId') as unknown as string;
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateBackup.Backup.DirectoryInformation.ResourceARN'),
        outputPath: 'Backup.DirectoryInformation.ResourceARN',
        parameters: {
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.Backup.DirectoryInformation.ResourceARN', props);
    return resource.getResponseField('Backup.DirectoryInformation.ResourceARN') as unknown as string;
  }

}

export class FSxResponsesCreateDataRepositoryTask {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateDataRepositoryTaskRequest) {
  }

  public get dataRepositoryTask(): FSxResponsesCreateDataRepositoryTaskDataRepositoryTask {
    return new FSxResponsesCreateDataRepositoryTaskDataRepositoryTask(this.__scope, this.__resources, this.__input);
  }

}

export class FSxResponsesCreateDataRepositoryTaskDataRepositoryTask {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateDataRepositoryTaskRequest) {
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
          Type: this.__input.type,
          Paths: this.__input.paths,
          FileSystemId: this.__input.fileSystemId,
          Report: {
            Enabled: this.__input.report.enabled,
            Path: this.__input.report.path,
            Format: this.__input.report.format,
            Scope: this.__input.report.scope,
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataRepositoryTask.DataRepositoryTask.TaskId', props);
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
          Type: this.__input.type,
          Paths: this.__input.paths,
          FileSystemId: this.__input.fileSystemId,
          Report: {
            Enabled: this.__input.report.enabled,
            Path: this.__input.report.path,
            Format: this.__input.report.format,
            Scope: this.__input.report.scope,
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataRepositoryTask.DataRepositoryTask.Lifecycle', props);
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
          Type: this.__input.type,
          Paths: this.__input.paths,
          FileSystemId: this.__input.fileSystemId,
          Report: {
            Enabled: this.__input.report.enabled,
            Path: this.__input.report.path,
            Format: this.__input.report.format,
            Scope: this.__input.report.scope,
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataRepositoryTask.DataRepositoryTask.Type', props);
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
          Type: this.__input.type,
          Paths: this.__input.paths,
          FileSystemId: this.__input.fileSystemId,
          Report: {
            Enabled: this.__input.report.enabled,
            Path: this.__input.report.path,
            Format: this.__input.report.format,
            Scope: this.__input.report.scope,
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataRepositoryTask.DataRepositoryTask.CreationTime', props);
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
          Type: this.__input.type,
          Paths: this.__input.paths,
          FileSystemId: this.__input.fileSystemId,
          Report: {
            Enabled: this.__input.report.enabled,
            Path: this.__input.report.path,
            Format: this.__input.report.format,
            Scope: this.__input.report.scope,
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataRepositoryTask.DataRepositoryTask.StartTime', props);
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
          Type: this.__input.type,
          Paths: this.__input.paths,
          FileSystemId: this.__input.fileSystemId,
          Report: {
            Enabled: this.__input.report.enabled,
            Path: this.__input.report.path,
            Format: this.__input.report.format,
            Scope: this.__input.report.scope,
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataRepositoryTask.DataRepositoryTask.EndTime', props);
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
          Type: this.__input.type,
          Paths: this.__input.paths,
          FileSystemId: this.__input.fileSystemId,
          Report: {
            Enabled: this.__input.report.enabled,
            Path: this.__input.report.path,
            Format: this.__input.report.format,
            Scope: this.__input.report.scope,
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataRepositoryTask.DataRepositoryTask.ResourceARN', props);
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
          Type: this.__input.type,
          Paths: this.__input.paths,
          FileSystemId: this.__input.fileSystemId,
          Report: {
            Enabled: this.__input.report.enabled,
            Path: this.__input.report.path,
            Format: this.__input.report.format,
            Scope: this.__input.report.scope,
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataRepositoryTask.DataRepositoryTask.Tags', props);
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
          Type: this.__input.type,
          Paths: this.__input.paths,
          FileSystemId: this.__input.fileSystemId,
          Report: {
            Enabled: this.__input.report.enabled,
            Path: this.__input.report.path,
            Format: this.__input.report.format,
            Scope: this.__input.report.scope,
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataRepositoryTask.DataRepositoryTask.FileSystemId', props);
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
          Type: this.__input.type,
          Paths: this.__input.paths,
          FileSystemId: this.__input.fileSystemId,
          Report: {
            Enabled: this.__input.report.enabled,
            Path: this.__input.report.path,
            Format: this.__input.report.format,
            Scope: this.__input.report.scope,
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataRepositoryTask.DataRepositoryTask.Paths', props);
    return resource.getResponseField('DataRepositoryTask.Paths') as unknown as string[];
  }

  public get failureDetails(): FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskFailureDetails {
    return new FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskFailureDetails(this.__scope, this.__resources, this.__input);
  }

  public get status(): FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskStatus {
    return new FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskStatus(this.__scope, this.__resources, this.__input);
  }

  public get report(): FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskReport {
    return new FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskReport(this.__scope, this.__resources, this.__input);
  }

}

export class FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskFailureDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateDataRepositoryTaskRequest) {
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
          Type: this.__input.type,
          Paths: this.__input.paths,
          FileSystemId: this.__input.fileSystemId,
          Report: {
            Enabled: this.__input.report.enabled,
            Path: this.__input.report.path,
            Format: this.__input.report.format,
            Scope: this.__input.report.scope,
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataRepositoryTask.DataRepositoryTask.FailureDetails.Message', props);
    return resource.getResponseField('DataRepositoryTask.FailureDetails.Message') as unknown as string;
  }

}

export class FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateDataRepositoryTaskRequest) {
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
          Type: this.__input.type,
          Paths: this.__input.paths,
          FileSystemId: this.__input.fileSystemId,
          Report: {
            Enabled: this.__input.report.enabled,
            Path: this.__input.report.path,
            Format: this.__input.report.format,
            Scope: this.__input.report.scope,
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataRepositoryTask.DataRepositoryTask.Status.TotalCount', props);
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
          Type: this.__input.type,
          Paths: this.__input.paths,
          FileSystemId: this.__input.fileSystemId,
          Report: {
            Enabled: this.__input.report.enabled,
            Path: this.__input.report.path,
            Format: this.__input.report.format,
            Scope: this.__input.report.scope,
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataRepositoryTask.DataRepositoryTask.Status.SucceededCount', props);
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
          Type: this.__input.type,
          Paths: this.__input.paths,
          FileSystemId: this.__input.fileSystemId,
          Report: {
            Enabled: this.__input.report.enabled,
            Path: this.__input.report.path,
            Format: this.__input.report.format,
            Scope: this.__input.report.scope,
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataRepositoryTask.DataRepositoryTask.Status.FailedCount', props);
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
          Type: this.__input.type,
          Paths: this.__input.paths,
          FileSystemId: this.__input.fileSystemId,
          Report: {
            Enabled: this.__input.report.enabled,
            Path: this.__input.report.path,
            Format: this.__input.report.format,
            Scope: this.__input.report.scope,
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataRepositoryTask.DataRepositoryTask.Status.LastUpdatedTime', props);
    return resource.getResponseField('DataRepositoryTask.Status.LastUpdatedTime') as unknown as string;
  }

}

export class FSxResponsesCreateDataRepositoryTaskDataRepositoryTaskReport {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateDataRepositoryTaskRequest) {
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
          Type: this.__input.type,
          Paths: this.__input.paths,
          FileSystemId: this.__input.fileSystemId,
          Report: {
            Enabled: this.__input.report.enabled,
            Path: this.__input.report.path,
            Format: this.__input.report.format,
            Scope: this.__input.report.scope,
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataRepositoryTask.DataRepositoryTask.Report.Enabled', props);
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
          Type: this.__input.type,
          Paths: this.__input.paths,
          FileSystemId: this.__input.fileSystemId,
          Report: {
            Enabled: this.__input.report.enabled,
            Path: this.__input.report.path,
            Format: this.__input.report.format,
            Scope: this.__input.report.scope,
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataRepositoryTask.DataRepositoryTask.Report.Path', props);
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
          Type: this.__input.type,
          Paths: this.__input.paths,
          FileSystemId: this.__input.fileSystemId,
          Report: {
            Enabled: this.__input.report.enabled,
            Path: this.__input.report.path,
            Format: this.__input.report.format,
            Scope: this.__input.report.scope,
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataRepositoryTask.DataRepositoryTask.Report.Format', props);
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
          Type: this.__input.type,
          Paths: this.__input.paths,
          FileSystemId: this.__input.fileSystemId,
          Report: {
            Enabled: this.__input.report.enabled,
            Path: this.__input.report.path,
            Format: this.__input.report.format,
            Scope: this.__input.report.scope,
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataRepositoryTask.DataRepositoryTask.Report.Scope', props);
    return resource.getResponseField('DataRepositoryTask.Report.Scope') as unknown as string;
  }

}

export class FSxResponsesCreateFileSystem {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateFileSystemRequest) {
  }

  public get fileSystem(): FSxResponsesCreateFileSystemFileSystem {
    return new FSxResponsesCreateFileSystemFileSystem(this.__scope, this.__resources, this.__input);
  }

}

export class FSxResponsesCreateFileSystemFileSystem {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateFileSystemRequest) {
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.OwnerId', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.CreationTime', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.FileSystemId', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.FileSystemType', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.Lifecycle', props);
    return resource.getResponseField('FileSystem.Lifecycle') as unknown as string;
  }

  public get failureDetails(): FSxResponsesCreateFileSystemFileSystemFailureDetails {
    return new FSxResponsesCreateFileSystemFileSystemFailureDetails(this.__scope, this.__resources, this.__input);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.StorageCapacity', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.StorageType', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.VpcId', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.SubnetIds', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.NetworkInterfaceIds', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.DNSName', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.KmsKeyId', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.ResourceARN', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.Tags', props);
    return resource.getResponseField('FileSystem.Tags') as unknown as shapes.FSxTag[];
  }

  public get windowsConfiguration(): FSxResponsesCreateFileSystemFileSystemWindowsConfiguration {
    return new FSxResponsesCreateFileSystemFileSystemWindowsConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get lustreConfiguration(): FSxResponsesCreateFileSystemFileSystemLustreConfiguration {
    return new FSxResponsesCreateFileSystemFileSystemLustreConfiguration(this.__scope, this.__resources, this.__input);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.AdministrativeActions', props);
    return resource.getResponseField('FileSystem.AdministrativeActions') as unknown as shapes.FSxAdministrativeAction[];
  }

}

export class FSxResponsesCreateFileSystemFileSystemFailureDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateFileSystemRequest) {
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.FailureDetails.Message', props);
    return resource.getResponseField('FileSystem.FailureDetails.Message') as unknown as string;
  }

}

export class FSxResponsesCreateFileSystemFileSystemWindowsConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateFileSystemRequest) {
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.WindowsConfiguration.ActiveDirectoryId', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.ActiveDirectoryId') as unknown as string;
  }

  public get selfManagedActiveDirectoryConfiguration(): FSxResponsesCreateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration {
    return new FSxResponsesCreateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration(this.__scope, this.__resources, this.__input);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.WindowsConfiguration.DeploymentType', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.WindowsConfiguration.RemoteAdministrationEndpoint', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.WindowsConfiguration.PreferredSubnetId', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.WindowsConfiguration.PreferredFileServerIp', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.WindowsConfiguration.ThroughputCapacity', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.WindowsConfiguration.MaintenanceOperationsInProgress', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.WindowsConfiguration.WeeklyMaintenanceStartTime', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.WindowsConfiguration.DailyAutomaticBackupStartTime', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.WindowsConfiguration.AutomaticBackupRetentionDays', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.WindowsConfiguration.CopyTagsToBackups', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.WindowsConfiguration.Aliases', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.Aliases') as unknown as shapes.FSxAlias[];
  }

  public get auditLogConfiguration(): FSxResponsesCreateFileSystemFileSystemWindowsConfigurationAuditLogConfiguration {
    return new FSxResponsesCreateFileSystemFileSystemWindowsConfigurationAuditLogConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class FSxResponsesCreateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateFileSystemRequest) {
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DomainName', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.OrganizationalUnitDistinguishedName', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.FileSystemAdministratorsGroup', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.UserName', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DnsIps', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DnsIps') as unknown as string[];
  }

}

export class FSxResponsesCreateFileSystemFileSystemWindowsConfigurationAuditLogConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateFileSystemRequest) {
  }

  public get fileAccessAuditLogLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.WindowsConfiguration.AuditLogConfiguration.FileAccessAuditLogLevel'),
        outputPath: 'FileSystem.WindowsConfiguration.AuditLogConfiguration.FileAccessAuditLogLevel',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.WindowsConfiguration.AuditLogConfiguration.FileAccessAuditLogLevel', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.AuditLogConfiguration.FileAccessAuditLogLevel') as unknown as string;
  }

  public get fileShareAccessAuditLogLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.WindowsConfiguration.AuditLogConfiguration.FileShareAccessAuditLogLevel'),
        outputPath: 'FileSystem.WindowsConfiguration.AuditLogConfiguration.FileShareAccessAuditLogLevel',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.WindowsConfiguration.AuditLogConfiguration.FileShareAccessAuditLogLevel', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.AuditLogConfiguration.FileShareAccessAuditLogLevel') as unknown as string;
  }

  public get auditLogDestination(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.WindowsConfiguration.AuditLogConfiguration.AuditLogDestination'),
        outputPath: 'FileSystem.WindowsConfiguration.AuditLogConfiguration.AuditLogDestination',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.WindowsConfiguration.AuditLogConfiguration.AuditLogDestination', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.AuditLogConfiguration.AuditLogDestination') as unknown as string;
  }

}

export class FSxResponsesCreateFileSystemFileSystemLustreConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateFileSystemRequest) {
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.LustreConfiguration.WeeklyMaintenanceStartTime', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.WeeklyMaintenanceStartTime') as unknown as string;
  }

  public get dataRepositoryConfiguration(): FSxResponsesCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration {
    return new FSxResponsesCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration(this.__scope, this.__resources, this.__input);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.LustreConfiguration.DeploymentType', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.LustreConfiguration.PerUnitStorageThroughput', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.LustreConfiguration.MountName', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.LustreConfiguration.DailyAutomaticBackupStartTime', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.LustreConfiguration.AutomaticBackupRetentionDays', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.LustreConfiguration.CopyTagsToBackups', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.LustreConfiguration.DriveCacheType', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DriveCacheType') as unknown as string;
  }

  public get dataCompressionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystem.FileSystem.LustreConfiguration.DataCompressionType'),
        outputPath: 'FileSystem.LustreConfiguration.DataCompressionType',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.LustreConfiguration.DataCompressionType', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DataCompressionType') as unknown as string;
  }

}

export class FSxResponsesCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateFileSystemRequest) {
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.Lifecycle', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportPath', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ExportPath', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportedFileChunkSize', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.AutoImportPolicy', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DataRepositoryConfiguration.AutoImportPolicy') as unknown as string;
  }

  public get failureDetails(): FSxResponsesCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails {
    return new FSxResponsesCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails(this.__scope, this.__resources, this.__input);
  }

}

export class FSxResponsesCreateFileSystemFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateFileSystemRequest) {
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemType: this.__input.fileSystemType,
          StorageCapacity: this.__input.storageCapacity,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.FailureDetails.Message', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DataRepositoryConfiguration.FailureDetails.Message') as unknown as string;
  }

}

export class FSxResponsesCreateFileSystemFromBackup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateFileSystemFromBackupRequest) {
  }

  public get fileSystem(): FSxResponsesCreateFileSystemFromBackupFileSystem {
    return new FSxResponsesCreateFileSystemFromBackupFileSystem(this.__scope, this.__resources, this.__input);
  }

}

export class FSxResponsesCreateFileSystemFromBackupFileSystem {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateFileSystemFromBackupRequest) {
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.OwnerId', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.CreationTime', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.FileSystemId', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.FileSystemType', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.Lifecycle', props);
    return resource.getResponseField('FileSystem.Lifecycle') as unknown as string;
  }

  public get failureDetails(): FSxResponsesCreateFileSystemFromBackupFileSystemFailureDetails {
    return new FSxResponsesCreateFileSystemFromBackupFileSystemFailureDetails(this.__scope, this.__resources, this.__input);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.StorageCapacity', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.StorageType', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.VpcId', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.SubnetIds', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.NetworkInterfaceIds', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.DNSName', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.KmsKeyId', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.ResourceARN', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.Tags', props);
    return resource.getResponseField('FileSystem.Tags') as unknown as shapes.FSxTag[];
  }

  public get windowsConfiguration(): FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfiguration {
    return new FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get lustreConfiguration(): FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfiguration {
    return new FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfiguration(this.__scope, this.__resources, this.__input);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.AdministrativeActions', props);
    return resource.getResponseField('FileSystem.AdministrativeActions') as unknown as shapes.FSxAdministrativeAction[];
  }

}

export class FSxResponsesCreateFileSystemFromBackupFileSystemFailureDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateFileSystemFromBackupRequest) {
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.FailureDetails.Message', props);
    return resource.getResponseField('FileSystem.FailureDetails.Message') as unknown as string;
  }

}

export class FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateFileSystemFromBackupRequest) {
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.ActiveDirectoryId', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.ActiveDirectoryId') as unknown as string;
  }

  public get selfManagedActiveDirectoryConfiguration(): FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration {
    return new FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration(this.__scope, this.__resources, this.__input);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.DeploymentType', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.RemoteAdministrationEndpoint', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.PreferredSubnetId', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.PreferredFileServerIp', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.ThroughputCapacity', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.MaintenanceOperationsInProgress', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.WeeklyMaintenanceStartTime', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.DailyAutomaticBackupStartTime', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.AutomaticBackupRetentionDays', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.CopyTagsToBackups', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.Aliases', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.Aliases') as unknown as shapes.FSxAlias[];
  }

  public get auditLogConfiguration(): FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfigurationAuditLogConfiguration {
    return new FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfigurationAuditLogConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateFileSystemFromBackupRequest) {
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DomainName', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.OrganizationalUnitDistinguishedName', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.FileSystemAdministratorsGroup', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.UserName', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DnsIps', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DnsIps') as unknown as string[];
  }

}

export class FSxResponsesCreateFileSystemFromBackupFileSystemWindowsConfigurationAuditLogConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateFileSystemFromBackupRequest) {
  }

  public get fileAccessAuditLogLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.AuditLogConfiguration.FileAccessAuditLogLevel'),
        outputPath: 'FileSystem.WindowsConfiguration.AuditLogConfiguration.FileAccessAuditLogLevel',
        parameters: {
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.AuditLogConfiguration.FileAccessAuditLogLevel', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.AuditLogConfiguration.FileAccessAuditLogLevel') as unknown as string;
  }

  public get fileShareAccessAuditLogLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.AuditLogConfiguration.FileShareAccessAuditLogLevel'),
        outputPath: 'FileSystem.WindowsConfiguration.AuditLogConfiguration.FileShareAccessAuditLogLevel',
        parameters: {
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.AuditLogConfiguration.FileShareAccessAuditLogLevel', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.AuditLogConfiguration.FileShareAccessAuditLogLevel') as unknown as string;
  }

  public get auditLogDestination(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.AuditLogConfiguration.AuditLogDestination'),
        outputPath: 'FileSystem.WindowsConfiguration.AuditLogConfiguration.AuditLogDestination',
        parameters: {
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.WindowsConfiguration.AuditLogConfiguration.AuditLogDestination', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.AuditLogConfiguration.AuditLogDestination') as unknown as string;
  }

}

export class FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateFileSystemFromBackupRequest) {
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.LustreConfiguration.WeeklyMaintenanceStartTime', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.WeeklyMaintenanceStartTime') as unknown as string;
  }

  public get dataRepositoryConfiguration(): FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfiguration {
    return new FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfiguration(this.__scope, this.__resources, this.__input);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.LustreConfiguration.DeploymentType', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.LustreConfiguration.PerUnitStorageThroughput', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.LustreConfiguration.MountName', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.LustreConfiguration.DailyAutomaticBackupStartTime', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.LustreConfiguration.AutomaticBackupRetentionDays', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.LustreConfiguration.CopyTagsToBackups', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.LustreConfiguration.DriveCacheType', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DriveCacheType') as unknown as string;
  }

  public get dataCompressionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFileSystemFromBackup',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.CreateFileSystemFromBackup.FileSystem.LustreConfiguration.DataCompressionType'),
        outputPath: 'FileSystem.LustreConfiguration.DataCompressionType',
        parameters: {
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.LustreConfiguration.DataCompressionType', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DataCompressionType') as unknown as string;
  }

}

export class FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateFileSystemFromBackupRequest) {
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.Lifecycle', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportPath', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ExportPath', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportedFileChunkSize', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.AutoImportPolicy', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DataRepositoryConfiguration.AutoImportPolicy') as unknown as string;
  }

  public get failureDetails(): FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails {
    return new FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails(this.__scope, this.__resources, this.__input);
  }

}

export class FSxResponsesCreateFileSystemFromBackupFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxCreateFileSystemFromBackupRequest) {
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
          SubnetIds: this.__input.subnetIds,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          WindowsConfiguration: {
            ActiveDirectoryId: this.__input.windowsConfiguration?.activeDirectoryId,
            SelfManagedActiveDirectoryConfiguration: {
              DomainName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.domainName,
              OrganizationalUnitDistinguishedName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.organizationalUnitDistinguishedName,
              FileSystemAdministratorsGroup: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.fileSystemAdministratorsGroup,
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            DeploymentType: this.__input.windowsConfiguration?.deploymentType,
            PreferredSubnetId: this.__input.windowsConfiguration?.preferredSubnetId,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.windowsConfiguration?.copyTagsToBackups,
            Aliases: this.__input.windowsConfiguration?.aliases,
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            ImportPath: this.__input.lustreConfiguration?.importPath,
            ExportPath: this.__input.lustreConfiguration?.exportPath,
            ImportedFileChunkSize: this.__input.lustreConfiguration?.importedFileChunkSize,
            DeploymentType: this.__input.lustreConfiguration?.deploymentType,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            PerUnitStorageThroughput: this.__input.lustreConfiguration?.perUnitStorageThroughput,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            CopyTagsToBackups: this.__input.lustreConfiguration?.copyTagsToBackups,
            DriveCacheType: this.__input.lustreConfiguration?.driveCacheType,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
          StorageType: this.__input.storageType,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFileSystemFromBackup.FileSystem.LustreConfiguration.DataRepositoryConfiguration.FailureDetails.Message', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DataRepositoryConfiguration.FailureDetails.Message') as unknown as string;
  }

}

export class FSxResponsesDeleteBackup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxDeleteBackupRequest) {
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.BackupId', props);
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
          BackupId: this.__input.backupId,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.Lifecycle', props);
    return resource.getResponseField('Lifecycle') as unknown as string;
  }

}

export class FSxResponsesDeleteFileSystem {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxDeleteFileSystemRequest) {
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          WindowsConfiguration: {
            SkipFinalBackup: this.__input.windowsConfiguration?.skipFinalBackup,
            FinalBackupTags: this.__input.windowsConfiguration?.finalBackupTags,
          },
          LustreConfiguration: {
            SkipFinalBackup: this.__input.lustreConfiguration?.skipFinalBackup,
            FinalBackupTags: this.__input.lustreConfiguration?.finalBackupTags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFileSystem.FileSystemId', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          WindowsConfiguration: {
            SkipFinalBackup: this.__input.windowsConfiguration?.skipFinalBackup,
            FinalBackupTags: this.__input.windowsConfiguration?.finalBackupTags,
          },
          LustreConfiguration: {
            SkipFinalBackup: this.__input.lustreConfiguration?.skipFinalBackup,
            FinalBackupTags: this.__input.lustreConfiguration?.finalBackupTags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFileSystem.Lifecycle', props);
    return resource.getResponseField('Lifecycle') as unknown as string;
  }

  public get windowsResponse(): FSxResponsesDeleteFileSystemWindowsResponse {
    return new FSxResponsesDeleteFileSystemWindowsResponse(this.__scope, this.__resources, this.__input);
  }

  public get lustreResponse(): FSxResponsesDeleteFileSystemLustreResponse {
    return new FSxResponsesDeleteFileSystemLustreResponse(this.__scope, this.__resources, this.__input);
  }

}

export class FSxResponsesDeleteFileSystemWindowsResponse {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxDeleteFileSystemRequest) {
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          WindowsConfiguration: {
            SkipFinalBackup: this.__input.windowsConfiguration?.skipFinalBackup,
            FinalBackupTags: this.__input.windowsConfiguration?.finalBackupTags,
          },
          LustreConfiguration: {
            SkipFinalBackup: this.__input.lustreConfiguration?.skipFinalBackup,
            FinalBackupTags: this.__input.lustreConfiguration?.finalBackupTags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFileSystem.WindowsResponse.FinalBackupId', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          WindowsConfiguration: {
            SkipFinalBackup: this.__input.windowsConfiguration?.skipFinalBackup,
            FinalBackupTags: this.__input.windowsConfiguration?.finalBackupTags,
          },
          LustreConfiguration: {
            SkipFinalBackup: this.__input.lustreConfiguration?.skipFinalBackup,
            FinalBackupTags: this.__input.lustreConfiguration?.finalBackupTags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFileSystem.WindowsResponse.FinalBackupTags', props);
    return resource.getResponseField('WindowsResponse.FinalBackupTags') as unknown as shapes.FSxTag[];
  }

}

export class FSxResponsesDeleteFileSystemLustreResponse {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxDeleteFileSystemRequest) {
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          WindowsConfiguration: {
            SkipFinalBackup: this.__input.windowsConfiguration?.skipFinalBackup,
            FinalBackupTags: this.__input.windowsConfiguration?.finalBackupTags,
          },
          LustreConfiguration: {
            SkipFinalBackup: this.__input.lustreConfiguration?.skipFinalBackup,
            FinalBackupTags: this.__input.lustreConfiguration?.finalBackupTags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFileSystem.LustreResponse.FinalBackupId', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          WindowsConfiguration: {
            SkipFinalBackup: this.__input.windowsConfiguration?.skipFinalBackup,
            FinalBackupTags: this.__input.windowsConfiguration?.finalBackupTags,
          },
          LustreConfiguration: {
            SkipFinalBackup: this.__input.lustreConfiguration?.skipFinalBackup,
            FinalBackupTags: this.__input.lustreConfiguration?.finalBackupTags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFileSystem.LustreResponse.FinalBackupTags', props);
    return resource.getResponseField('LustreResponse.FinalBackupTags') as unknown as shapes.FSxTag[];
  }

}

export class FSxResponsesDescribeBackups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxDescribeBackupsRequest) {
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
          BackupIds: this.__input.backupIds,
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackups.Backups', props);
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
          BackupIds: this.__input.backupIds,
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class FSxResponsesDescribeDataRepositoryTasks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxDescribeDataRepositoryTasksRequest) {
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
          TaskIds: this.__input.taskIds,
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataRepositoryTasks.DataRepositoryTasks', props);
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
          TaskIds: this.__input.taskIds,
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataRepositoryTasks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class FSxResponsesDescribeFileSystemAliases {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxDescribeFileSystemAliasesRequest) {
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemId: this.__input.fileSystemId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFileSystemAliases.Aliases', props);
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemId: this.__input.fileSystemId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFileSystemAliases.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class FSxResponsesDescribeFileSystems {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxDescribeFileSystemsRequest) {
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
          FileSystemIds: this.__input.fileSystemIds,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFileSystems.FileSystems', props);
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
          FileSystemIds: this.__input.fileSystemIds,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFileSystems.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class FSxResponsesDisassociateFileSystemAliases {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxDisassociateFileSystemAliasesRequest) {
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
          ClientRequestToken: this.__input.clientRequestToken,
          FileSystemId: this.__input.fileSystemId,
          Aliases: this.__input.aliases,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateFileSystemAliases.Aliases', props);
    return resource.getResponseField('Aliases') as unknown as shapes.FSxAlias[];
  }

}

export class FSxResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxListTagsForResourceRequest) {
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
          ResourceARN: this.__input.resourceArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
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
          ResourceARN: this.__input.resourceArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class FSxResponsesUpdateFileSystem {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxUpdateFileSystemRequest) {
  }

  public get fileSystem(): FSxResponsesUpdateFileSystemFileSystem {
    return new FSxResponsesUpdateFileSystemFileSystem(this.__scope, this.__resources, this.__input);
  }

}

export class FSxResponsesUpdateFileSystemFileSystem {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxUpdateFileSystemRequest) {
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.OwnerId', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.CreationTime', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.FileSystemId', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.FileSystemType', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.Lifecycle', props);
    return resource.getResponseField('FileSystem.Lifecycle') as unknown as string;
  }

  public get failureDetails(): FSxResponsesUpdateFileSystemFileSystemFailureDetails {
    return new FSxResponsesUpdateFileSystemFileSystemFailureDetails(this.__scope, this.__resources, this.__input);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.StorageCapacity', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.StorageType', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.VpcId', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.SubnetIds', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.NetworkInterfaceIds', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.DNSName', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.KmsKeyId', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.ResourceARN', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.Tags', props);
    return resource.getResponseField('FileSystem.Tags') as unknown as shapes.FSxTag[];
  }

  public get windowsConfiguration(): FSxResponsesUpdateFileSystemFileSystemWindowsConfiguration {
    return new FSxResponsesUpdateFileSystemFileSystemWindowsConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get lustreConfiguration(): FSxResponsesUpdateFileSystemFileSystemLustreConfiguration {
    return new FSxResponsesUpdateFileSystemFileSystemLustreConfiguration(this.__scope, this.__resources, this.__input);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.AdministrativeActions', props);
    return resource.getResponseField('FileSystem.AdministrativeActions') as unknown as shapes.FSxAdministrativeAction[];
  }

}

export class FSxResponsesUpdateFileSystemFileSystemFailureDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxUpdateFileSystemRequest) {
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.FailureDetails.Message', props);
    return resource.getResponseField('FileSystem.FailureDetails.Message') as unknown as string;
  }

}

export class FSxResponsesUpdateFileSystemFileSystemWindowsConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxUpdateFileSystemRequest) {
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.WindowsConfiguration.ActiveDirectoryId', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.ActiveDirectoryId') as unknown as string;
  }

  public get selfManagedActiveDirectoryConfiguration(): FSxResponsesUpdateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration {
    return new FSxResponsesUpdateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration(this.__scope, this.__resources, this.__input);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.WindowsConfiguration.DeploymentType', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.WindowsConfiguration.RemoteAdministrationEndpoint', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.WindowsConfiguration.PreferredSubnetId', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.WindowsConfiguration.PreferredFileServerIp', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.WindowsConfiguration.ThroughputCapacity', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.WindowsConfiguration.MaintenanceOperationsInProgress', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.WindowsConfiguration.WeeklyMaintenanceStartTime', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.WindowsConfiguration.DailyAutomaticBackupStartTime', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.WindowsConfiguration.AutomaticBackupRetentionDays', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.WindowsConfiguration.CopyTagsToBackups', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.WindowsConfiguration.Aliases', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.Aliases') as unknown as shapes.FSxAlias[];
  }

  public get auditLogConfiguration(): FSxResponsesUpdateFileSystemFileSystemWindowsConfigurationAuditLogConfiguration {
    return new FSxResponsesUpdateFileSystemFileSystemWindowsConfigurationAuditLogConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class FSxResponsesUpdateFileSystemFileSystemWindowsConfigurationSelfManagedActiveDirectoryConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxUpdateFileSystemRequest) {
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DomainName', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.OrganizationalUnitDistinguishedName', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.FileSystemAdministratorsGroup', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.UserName', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DnsIps', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration.DnsIps') as unknown as string[];
  }

}

export class FSxResponsesUpdateFileSystemFileSystemWindowsConfigurationAuditLogConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxUpdateFileSystemRequest) {
  }

  public get fileAccessAuditLogLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.WindowsConfiguration.AuditLogConfiguration.FileAccessAuditLogLevel'),
        outputPath: 'FileSystem.WindowsConfiguration.AuditLogConfiguration.FileAccessAuditLogLevel',
        parameters: {
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.WindowsConfiguration.AuditLogConfiguration.FileAccessAuditLogLevel', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.AuditLogConfiguration.FileAccessAuditLogLevel') as unknown as string;
  }

  public get fileShareAccessAuditLogLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.WindowsConfiguration.AuditLogConfiguration.FileShareAccessAuditLogLevel'),
        outputPath: 'FileSystem.WindowsConfiguration.AuditLogConfiguration.FileShareAccessAuditLogLevel',
        parameters: {
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.WindowsConfiguration.AuditLogConfiguration.FileShareAccessAuditLogLevel', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.AuditLogConfiguration.FileShareAccessAuditLogLevel') as unknown as string;
  }

  public get auditLogDestination(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.WindowsConfiguration.AuditLogConfiguration.AuditLogDestination'),
        outputPath: 'FileSystem.WindowsConfiguration.AuditLogConfiguration.AuditLogDestination',
        parameters: {
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.WindowsConfiguration.AuditLogConfiguration.AuditLogDestination', props);
    return resource.getResponseField('FileSystem.WindowsConfiguration.AuditLogConfiguration.AuditLogDestination') as unknown as string;
  }

}

export class FSxResponsesUpdateFileSystemFileSystemLustreConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxUpdateFileSystemRequest) {
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.LustreConfiguration.WeeklyMaintenanceStartTime', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.WeeklyMaintenanceStartTime') as unknown as string;
  }

  public get dataRepositoryConfiguration(): FSxResponsesUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration {
    return new FSxResponsesUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration(this.__scope, this.__resources, this.__input);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.LustreConfiguration.DeploymentType', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.LustreConfiguration.PerUnitStorageThroughput', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.LustreConfiguration.MountName', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.LustreConfiguration.DailyAutomaticBackupStartTime', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.LustreConfiguration.AutomaticBackupRetentionDays', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.LustreConfiguration.CopyTagsToBackups', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.LustreConfiguration.DriveCacheType', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DriveCacheType') as unknown as string;
  }

  public get dataCompressionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystem',
        service: 'FSx',
        physicalResourceId: cr.PhysicalResourceId.of('FSx.UpdateFileSystem.FileSystem.LustreConfiguration.DataCompressionType'),
        outputPath: 'FileSystem.LustreConfiguration.DataCompressionType',
        parameters: {
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.LustreConfiguration.DataCompressionType', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DataCompressionType') as unknown as string;
  }

}

export class FSxResponsesUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxUpdateFileSystemRequest) {
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.Lifecycle', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportPath', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ExportPath', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.ImportedFileChunkSize', props);
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.AutoImportPolicy', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DataRepositoryConfiguration.AutoImportPolicy') as unknown as string;
  }

  public get failureDetails(): FSxResponsesUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails {
    return new FSxResponsesUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails(this.__scope, this.__resources, this.__input);
  }

}

export class FSxResponsesUpdateFileSystemFileSystemLustreConfigurationDataRepositoryConfigurationFailureDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FSxUpdateFileSystemRequest) {
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
          FileSystemId: this.__input.fileSystemId,
          ClientRequestToken: this.__input.clientRequestToken,
          StorageCapacity: this.__input.storageCapacity,
          WindowsConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.windowsConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.windowsConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.windowsConfiguration?.automaticBackupRetentionDays,
            ThroughputCapacity: this.__input.windowsConfiguration?.throughputCapacity,
            SelfManagedActiveDirectoryConfiguration: {
              UserName: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.userName,
              Password: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.password,
              DnsIps: this.__input.windowsConfiguration?.selfManagedActiveDirectoryConfiguration?.dnsIps,
            },
            AuditLogConfiguration: {
              FileAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileAccessAuditLogLevel,
              FileShareAccessAuditLogLevel: this.__input.windowsConfiguration?.auditLogConfiguration?.fileShareAccessAuditLogLevel,
              AuditLogDestination: this.__input.windowsConfiguration?.auditLogConfiguration?.auditLogDestination,
            },
          },
          LustreConfiguration: {
            WeeklyMaintenanceStartTime: this.__input.lustreConfiguration?.weeklyMaintenanceStartTime,
            DailyAutomaticBackupStartTime: this.__input.lustreConfiguration?.dailyAutomaticBackupStartTime,
            AutomaticBackupRetentionDays: this.__input.lustreConfiguration?.automaticBackupRetentionDays,
            AutoImportPolicy: this.__input.lustreConfiguration?.autoImportPolicy,
            DataCompressionType: this.__input.lustreConfiguration?.dataCompressionType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystem.FileSystem.LustreConfiguration.DataRepositoryConfiguration.FailureDetails.Message', props);
    return resource.getResponseField('FileSystem.LustreConfiguration.DataRepositoryConfiguration.FailureDetails.Message') as unknown as string;
  }

}

