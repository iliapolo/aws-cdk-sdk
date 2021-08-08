/**
 * @schema FSxAssociateFileSystemAliasesRequest
 */
export interface FSxAssociateFileSystemAliasesRequest {
  /**
   * @schema FSxAssociateFileSystemAliasesRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema FSxAssociateFileSystemAliasesRequest#FileSystemId
   */
  readonly fileSystemId?: string;

  /**
   * @schema FSxAssociateFileSystemAliasesRequest#Aliases
   */
  readonly aliases?: string[];

}

/**
 * Converts an object of type 'FSxAssociateFileSystemAliasesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxAssociateFileSystemAliasesRequest(obj: FSxAssociateFileSystemAliasesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientRequestToken': obj.clientRequestToken,
    'FileSystemId': obj.fileSystemId,
    'Aliases': obj.aliases?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxAssociateFileSystemAliasesResponse
 */
export interface FSxAssociateFileSystemAliasesResponse {
  /**
   * @schema FSxAssociateFileSystemAliasesResponse#Aliases
   */
  readonly aliases?: FSxAlias[];

}

/**
 * Converts an object of type 'FSxAssociateFileSystemAliasesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxAssociateFileSystemAliasesResponse(obj: FSxAssociateFileSystemAliasesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Aliases': obj.aliases?.map(y => toJson_FSxAlias(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxCancelDataRepositoryTaskRequest
 */
export interface FSxCancelDataRepositoryTaskRequest {
  /**
   * @schema FSxCancelDataRepositoryTaskRequest#TaskId
   */
  readonly taskId?: string;

}

/**
 * Converts an object of type 'FSxCancelDataRepositoryTaskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxCancelDataRepositoryTaskRequest(obj: FSxCancelDataRepositoryTaskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TaskId': obj.taskId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxCancelDataRepositoryTaskResponse
 */
export interface FSxCancelDataRepositoryTaskResponse {
  /**
   * @schema FSxCancelDataRepositoryTaskResponse#Lifecycle
   */
  readonly lifecycle?: string;

  /**
   * @schema FSxCancelDataRepositoryTaskResponse#TaskId
   */
  readonly taskId?: string;

}

/**
 * Converts an object of type 'FSxCancelDataRepositoryTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxCancelDataRepositoryTaskResponse(obj: FSxCancelDataRepositoryTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Lifecycle': obj.lifecycle,
    'TaskId': obj.taskId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxCopyBackupRequest
 */
export interface FSxCopyBackupRequest {
  /**
   * @schema FSxCopyBackupRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema FSxCopyBackupRequest#SourceBackupId
   */
  readonly sourceBackupId?: string;

  /**
   * @schema FSxCopyBackupRequest#SourceRegion
   */
  readonly sourceRegion?: string;

  /**
   * @schema FSxCopyBackupRequest#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema FSxCopyBackupRequest#CopyTags
   */
  readonly copyTags?: boolean;

  /**
   * @schema FSxCopyBackupRequest#Tags
   */
  readonly tags?: FSxTag[];

}

/**
 * Converts an object of type 'FSxCopyBackupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxCopyBackupRequest(obj: FSxCopyBackupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientRequestToken': obj.clientRequestToken,
    'SourceBackupId': obj.sourceBackupId,
    'SourceRegion': obj.sourceRegion,
    'KmsKeyId': obj.kmsKeyId,
    'CopyTags': obj.copyTags,
    'Tags': obj.tags?.map(y => toJson_FSxTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxCopyBackupResponse
 */
export interface FSxCopyBackupResponse {
  /**
   * @schema FSxCopyBackupResponse#Backup
   */
  readonly backup?: FSxBackup;

}

/**
 * Converts an object of type 'FSxCopyBackupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxCopyBackupResponse(obj: FSxCopyBackupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Backup': toJson_FSxBackup(obj.backup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxCreateBackupRequest
 */
export interface FSxCreateBackupRequest {
  /**
   * @schema FSxCreateBackupRequest#FileSystemId
   */
  readonly fileSystemId?: string;

  /**
   * @schema FSxCreateBackupRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema FSxCreateBackupRequest#Tags
   */
  readonly tags?: FSxTag[];

}

/**
 * Converts an object of type 'FSxCreateBackupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxCreateBackupRequest(obj: FSxCreateBackupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileSystemId': obj.fileSystemId,
    'ClientRequestToken': obj.clientRequestToken,
    'Tags': obj.tags?.map(y => toJson_FSxTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxCreateBackupResponse
 */
export interface FSxCreateBackupResponse {
  /**
   * @schema FSxCreateBackupResponse#Backup
   */
  readonly backup?: FSxBackup;

}

/**
 * Converts an object of type 'FSxCreateBackupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxCreateBackupResponse(obj: FSxCreateBackupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Backup': toJson_FSxBackup(obj.backup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxCreateDataRepositoryTaskRequest
 */
export interface FSxCreateDataRepositoryTaskRequest {
  /**
   * @schema FSxCreateDataRepositoryTaskRequest#Type
   */
  readonly type?: string;

  /**
   * @schema FSxCreateDataRepositoryTaskRequest#Paths
   */
  readonly paths?: string[];

  /**
   * @schema FSxCreateDataRepositoryTaskRequest#FileSystemId
   */
  readonly fileSystemId?: string;

  /**
   * @schema FSxCreateDataRepositoryTaskRequest#Report
   */
  readonly report?: FSxCompletionReport;

  /**
   * @schema FSxCreateDataRepositoryTaskRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema FSxCreateDataRepositoryTaskRequest#Tags
   */
  readonly tags?: FSxTag[];

}

/**
 * Converts an object of type 'FSxCreateDataRepositoryTaskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxCreateDataRepositoryTaskRequest(obj: FSxCreateDataRepositoryTaskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Paths': obj.paths?.map(y => y),
    'FileSystemId': obj.fileSystemId,
    'Report': toJson_FSxCompletionReport(obj.report),
    'ClientRequestToken': obj.clientRequestToken,
    'Tags': obj.tags?.map(y => toJson_FSxTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxCreateDataRepositoryTaskResponse
 */
export interface FSxCreateDataRepositoryTaskResponse {
  /**
   * @schema FSxCreateDataRepositoryTaskResponse#DataRepositoryTask
   */
  readonly dataRepositoryTask?: FSxDataRepositoryTask;

}

/**
 * Converts an object of type 'FSxCreateDataRepositoryTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxCreateDataRepositoryTaskResponse(obj: FSxCreateDataRepositoryTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataRepositoryTask': toJson_FSxDataRepositoryTask(obj.dataRepositoryTask),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxCreateFileSystemRequest
 */
export interface FSxCreateFileSystemRequest {
  /**
   * @schema FSxCreateFileSystemRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema FSxCreateFileSystemRequest#FileSystemType
   */
  readonly fileSystemType?: string;

  /**
   * @schema FSxCreateFileSystemRequest#StorageCapacity
   */
  readonly storageCapacity?: number;

  /**
   * @schema FSxCreateFileSystemRequest#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema FSxCreateFileSystemRequest#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema FSxCreateFileSystemRequest#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema FSxCreateFileSystemRequest#Tags
   */
  readonly tags?: FSxTag[];

  /**
   * @schema FSxCreateFileSystemRequest#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema FSxCreateFileSystemRequest#WindowsConfiguration
   */
  readonly windowsConfiguration?: FSxCreateFileSystemWindowsConfiguration;

  /**
   * @schema FSxCreateFileSystemRequest#LustreConfiguration
   */
  readonly lustreConfiguration?: FSxCreateFileSystemLustreConfiguration;

}

/**
 * Converts an object of type 'FSxCreateFileSystemRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxCreateFileSystemRequest(obj: FSxCreateFileSystemRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientRequestToken': obj.clientRequestToken,
    'FileSystemType': obj.fileSystemType,
    'StorageCapacity': obj.storageCapacity,
    'StorageType': obj.storageType,
    'SubnetIds': obj.subnetIds?.map(y => y),
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'Tags': obj.tags?.map(y => toJson_FSxTag(y)),
    'KmsKeyId': obj.kmsKeyId,
    'WindowsConfiguration': toJson_FSxCreateFileSystemWindowsConfiguration(obj.windowsConfiguration),
    'LustreConfiguration': toJson_FSxCreateFileSystemLustreConfiguration(obj.lustreConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxCreateFileSystemResponse
 */
export interface FSxCreateFileSystemResponse {
  /**
   * @schema FSxCreateFileSystemResponse#FileSystem
   */
  readonly fileSystem?: FSxFileSystem;

}

/**
 * Converts an object of type 'FSxCreateFileSystemResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxCreateFileSystemResponse(obj: FSxCreateFileSystemResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileSystem': toJson_FSxFileSystem(obj.fileSystem),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxCreateFileSystemFromBackupRequest
 */
export interface FSxCreateFileSystemFromBackupRequest {
  /**
   * @schema FSxCreateFileSystemFromBackupRequest#BackupId
   */
  readonly backupId?: string;

  /**
   * @schema FSxCreateFileSystemFromBackupRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema FSxCreateFileSystemFromBackupRequest#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema FSxCreateFileSystemFromBackupRequest#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema FSxCreateFileSystemFromBackupRequest#Tags
   */
  readonly tags?: FSxTag[];

  /**
   * @schema FSxCreateFileSystemFromBackupRequest#WindowsConfiguration
   */
  readonly windowsConfiguration?: FSxCreateFileSystemWindowsConfiguration;

  /**
   * @schema FSxCreateFileSystemFromBackupRequest#LustreConfiguration
   */
  readonly lustreConfiguration?: FSxCreateFileSystemLustreConfiguration;

  /**
   * @schema FSxCreateFileSystemFromBackupRequest#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema FSxCreateFileSystemFromBackupRequest#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * Converts an object of type 'FSxCreateFileSystemFromBackupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxCreateFileSystemFromBackupRequest(obj: FSxCreateFileSystemFromBackupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupId': obj.backupId,
    'ClientRequestToken': obj.clientRequestToken,
    'SubnetIds': obj.subnetIds?.map(y => y),
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'Tags': obj.tags?.map(y => toJson_FSxTag(y)),
    'WindowsConfiguration': toJson_FSxCreateFileSystemWindowsConfiguration(obj.windowsConfiguration),
    'LustreConfiguration': toJson_FSxCreateFileSystemLustreConfiguration(obj.lustreConfiguration),
    'StorageType': obj.storageType,
    'KmsKeyId': obj.kmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxCreateFileSystemFromBackupResponse
 */
export interface FSxCreateFileSystemFromBackupResponse {
  /**
   * @schema FSxCreateFileSystemFromBackupResponse#FileSystem
   */
  readonly fileSystem?: FSxFileSystem;

}

/**
 * Converts an object of type 'FSxCreateFileSystemFromBackupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxCreateFileSystemFromBackupResponse(obj: FSxCreateFileSystemFromBackupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileSystem': toJson_FSxFileSystem(obj.fileSystem),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxDeleteBackupRequest
 */
export interface FSxDeleteBackupRequest {
  /**
   * @schema FSxDeleteBackupRequest#BackupId
   */
  readonly backupId?: string;

  /**
   * @schema FSxDeleteBackupRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'FSxDeleteBackupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxDeleteBackupRequest(obj: FSxDeleteBackupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupId': obj.backupId,
    'ClientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxDeleteBackupResponse
 */
export interface FSxDeleteBackupResponse {
  /**
   * @schema FSxDeleteBackupResponse#BackupId
   */
  readonly backupId?: string;

  /**
   * @schema FSxDeleteBackupResponse#Lifecycle
   */
  readonly lifecycle?: string;

}

/**
 * Converts an object of type 'FSxDeleteBackupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxDeleteBackupResponse(obj: FSxDeleteBackupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupId': obj.backupId,
    'Lifecycle': obj.lifecycle,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxDeleteFileSystemRequest
 */
export interface FSxDeleteFileSystemRequest {
  /**
   * @schema FSxDeleteFileSystemRequest#FileSystemId
   */
  readonly fileSystemId?: string;

  /**
   * @schema FSxDeleteFileSystemRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema FSxDeleteFileSystemRequest#WindowsConfiguration
   */
  readonly windowsConfiguration?: FSxDeleteFileSystemWindowsConfiguration;

  /**
   * @schema FSxDeleteFileSystemRequest#LustreConfiguration
   */
  readonly lustreConfiguration?: FSxDeleteFileSystemLustreConfiguration;

}

/**
 * Converts an object of type 'FSxDeleteFileSystemRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxDeleteFileSystemRequest(obj: FSxDeleteFileSystemRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileSystemId': obj.fileSystemId,
    'ClientRequestToken': obj.clientRequestToken,
    'WindowsConfiguration': toJson_FSxDeleteFileSystemWindowsConfiguration(obj.windowsConfiguration),
    'LustreConfiguration': toJson_FSxDeleteFileSystemLustreConfiguration(obj.lustreConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxDeleteFileSystemResponse
 */
export interface FSxDeleteFileSystemResponse {
  /**
   * @schema FSxDeleteFileSystemResponse#FileSystemId
   */
  readonly fileSystemId?: string;

  /**
   * @schema FSxDeleteFileSystemResponse#Lifecycle
   */
  readonly lifecycle?: string;

  /**
   * @schema FSxDeleteFileSystemResponse#WindowsResponse
   */
  readonly windowsResponse?: FSxDeleteFileSystemWindowsResponse;

  /**
   * @schema FSxDeleteFileSystemResponse#LustreResponse
   */
  readonly lustreResponse?: FSxDeleteFileSystemLustreResponse;

}

/**
 * Converts an object of type 'FSxDeleteFileSystemResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxDeleteFileSystemResponse(obj: FSxDeleteFileSystemResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileSystemId': obj.fileSystemId,
    'Lifecycle': obj.lifecycle,
    'WindowsResponse': toJson_FSxDeleteFileSystemWindowsResponse(obj.windowsResponse),
    'LustreResponse': toJson_FSxDeleteFileSystemLustreResponse(obj.lustreResponse),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxDescribeBackupsRequest
 */
export interface FSxDescribeBackupsRequest {
  /**
   * @schema FSxDescribeBackupsRequest#BackupIds
   */
  readonly backupIds?: string[];

  /**
   * @schema FSxDescribeBackupsRequest#Filters
   */
  readonly filters?: FSxFilter[];

  /**
   * @schema FSxDescribeBackupsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema FSxDescribeBackupsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FSxDescribeBackupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxDescribeBackupsRequest(obj: FSxDescribeBackupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupIds': obj.backupIds?.map(y => y),
    'Filters': obj.filters?.map(y => toJson_FSxFilter(y)),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxDescribeBackupsResponse
 */
export interface FSxDescribeBackupsResponse {
  /**
   * @schema FSxDescribeBackupsResponse#Backups
   */
  readonly backups?: FSxBackup[];

  /**
   * @schema FSxDescribeBackupsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FSxDescribeBackupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxDescribeBackupsResponse(obj: FSxDescribeBackupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Backups': obj.backups?.map(y => toJson_FSxBackup(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxDescribeDataRepositoryTasksRequest
 */
export interface FSxDescribeDataRepositoryTasksRequest {
  /**
   * @schema FSxDescribeDataRepositoryTasksRequest#TaskIds
   */
  readonly taskIds?: string[];

  /**
   * @schema FSxDescribeDataRepositoryTasksRequest#Filters
   */
  readonly filters?: FSxDataRepositoryTaskFilter[];

  /**
   * @schema FSxDescribeDataRepositoryTasksRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema FSxDescribeDataRepositoryTasksRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FSxDescribeDataRepositoryTasksRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxDescribeDataRepositoryTasksRequest(obj: FSxDescribeDataRepositoryTasksRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TaskIds': obj.taskIds?.map(y => y),
    'Filters': obj.filters?.map(y => toJson_FSxDataRepositoryTaskFilter(y)),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxDescribeDataRepositoryTasksResponse
 */
export interface FSxDescribeDataRepositoryTasksResponse {
  /**
   * @schema FSxDescribeDataRepositoryTasksResponse#DataRepositoryTasks
   */
  readonly dataRepositoryTasks?: FSxDataRepositoryTask[];

  /**
   * @schema FSxDescribeDataRepositoryTasksResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FSxDescribeDataRepositoryTasksResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxDescribeDataRepositoryTasksResponse(obj: FSxDescribeDataRepositoryTasksResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataRepositoryTasks': obj.dataRepositoryTasks?.map(y => toJson_FSxDataRepositoryTask(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxDescribeFileSystemAliasesRequest
 */
export interface FSxDescribeFileSystemAliasesRequest {
  /**
   * @schema FSxDescribeFileSystemAliasesRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema FSxDescribeFileSystemAliasesRequest#FileSystemId
   */
  readonly fileSystemId?: string;

  /**
   * @schema FSxDescribeFileSystemAliasesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema FSxDescribeFileSystemAliasesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FSxDescribeFileSystemAliasesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxDescribeFileSystemAliasesRequest(obj: FSxDescribeFileSystemAliasesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientRequestToken': obj.clientRequestToken,
    'FileSystemId': obj.fileSystemId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxDescribeFileSystemAliasesResponse
 */
export interface FSxDescribeFileSystemAliasesResponse {
  /**
   * @schema FSxDescribeFileSystemAliasesResponse#Aliases
   */
  readonly aliases?: FSxAlias[];

  /**
   * @schema FSxDescribeFileSystemAliasesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FSxDescribeFileSystemAliasesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxDescribeFileSystemAliasesResponse(obj: FSxDescribeFileSystemAliasesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Aliases': obj.aliases?.map(y => toJson_FSxAlias(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxDescribeFileSystemsRequest
 */
export interface FSxDescribeFileSystemsRequest {
  /**
   * @schema FSxDescribeFileSystemsRequest#FileSystemIds
   */
  readonly fileSystemIds?: string[];

  /**
   * @schema FSxDescribeFileSystemsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema FSxDescribeFileSystemsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FSxDescribeFileSystemsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxDescribeFileSystemsRequest(obj: FSxDescribeFileSystemsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileSystemIds': obj.fileSystemIds?.map(y => y),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxDescribeFileSystemsResponse
 */
export interface FSxDescribeFileSystemsResponse {
  /**
   * @schema FSxDescribeFileSystemsResponse#FileSystems
   */
  readonly fileSystems?: FSxFileSystem[];

  /**
   * @schema FSxDescribeFileSystemsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FSxDescribeFileSystemsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxDescribeFileSystemsResponse(obj: FSxDescribeFileSystemsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileSystems': obj.fileSystems?.map(y => toJson_FSxFileSystem(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxDisassociateFileSystemAliasesRequest
 */
export interface FSxDisassociateFileSystemAliasesRequest {
  /**
   * @schema FSxDisassociateFileSystemAliasesRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema FSxDisassociateFileSystemAliasesRequest#FileSystemId
   */
  readonly fileSystemId?: string;

  /**
   * @schema FSxDisassociateFileSystemAliasesRequest#Aliases
   */
  readonly aliases?: string[];

}

/**
 * Converts an object of type 'FSxDisassociateFileSystemAliasesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxDisassociateFileSystemAliasesRequest(obj: FSxDisassociateFileSystemAliasesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientRequestToken': obj.clientRequestToken,
    'FileSystemId': obj.fileSystemId,
    'Aliases': obj.aliases?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxDisassociateFileSystemAliasesResponse
 */
export interface FSxDisassociateFileSystemAliasesResponse {
  /**
   * @schema FSxDisassociateFileSystemAliasesResponse#Aliases
   */
  readonly aliases?: FSxAlias[];

}

/**
 * Converts an object of type 'FSxDisassociateFileSystemAliasesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxDisassociateFileSystemAliasesResponse(obj: FSxDisassociateFileSystemAliasesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Aliases': obj.aliases?.map(y => toJson_FSxAlias(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxListTagsForResourceRequest
 */
export interface FSxListTagsForResourceRequest {
  /**
   * @schema FSxListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema FSxListTagsForResourceRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema FSxListTagsForResourceRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FSxListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxListTagsForResourceRequest(obj: FSxListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxListTagsForResourceResponse
 */
export interface FSxListTagsForResourceResponse {
  /**
   * @schema FSxListTagsForResourceResponse#Tags
   */
  readonly tags?: FSxTag[];

  /**
   * @schema FSxListTagsForResourceResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FSxListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxListTagsForResourceResponse(obj: FSxListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_FSxTag(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxTagResourceRequest
 */
export interface FSxTagResourceRequest {
  /**
   * @schema FSxTagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema FSxTagResourceRequest#Tags
   */
  readonly tags?: FSxTag[];

}

/**
 * Converts an object of type 'FSxTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxTagResourceRequest(obj: FSxTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_FSxTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxTagResourceResponse
 */
export interface FSxTagResourceResponse {
}

/**
 * Converts an object of type 'FSxTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxTagResourceResponse(obj: FSxTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxUntagResourceRequest
 */
export interface FSxUntagResourceRequest {
  /**
   * @schema FSxUntagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema FSxUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'FSxUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxUntagResourceRequest(obj: FSxUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxUntagResourceResponse
 */
export interface FSxUntagResourceResponse {
}

/**
 * Converts an object of type 'FSxUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxUntagResourceResponse(obj: FSxUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxUpdateFileSystemRequest
 */
export interface FSxUpdateFileSystemRequest {
  /**
   * @schema FSxUpdateFileSystemRequest#FileSystemId
   */
  readonly fileSystemId?: string;

  /**
   * @schema FSxUpdateFileSystemRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema FSxUpdateFileSystemRequest#StorageCapacity
   */
  readonly storageCapacity?: number;

  /**
   * @schema FSxUpdateFileSystemRequest#WindowsConfiguration
   */
  readonly windowsConfiguration?: FSxUpdateFileSystemWindowsConfiguration;

  /**
   * @schema FSxUpdateFileSystemRequest#LustreConfiguration
   */
  readonly lustreConfiguration?: FSxUpdateFileSystemLustreConfiguration;

}

/**
 * Converts an object of type 'FSxUpdateFileSystemRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxUpdateFileSystemRequest(obj: FSxUpdateFileSystemRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileSystemId': obj.fileSystemId,
    'ClientRequestToken': obj.clientRequestToken,
    'StorageCapacity': obj.storageCapacity,
    'WindowsConfiguration': toJson_FSxUpdateFileSystemWindowsConfiguration(obj.windowsConfiguration),
    'LustreConfiguration': toJson_FSxUpdateFileSystemLustreConfiguration(obj.lustreConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxUpdateFileSystemResponse
 */
export interface FSxUpdateFileSystemResponse {
  /**
   * @schema FSxUpdateFileSystemResponse#FileSystem
   */
  readonly fileSystem?: FSxFileSystem;

}

/**
 * Converts an object of type 'FSxUpdateFileSystemResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxUpdateFileSystemResponse(obj: FSxUpdateFileSystemResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileSystem': toJson_FSxFileSystem(obj.fileSystem),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxAlias
 */
export interface FSxAlias {
  /**
   * @schema FSxAlias#Name
   */
  readonly name?: string;

  /**
   * @schema FSxAlias#Lifecycle
   */
  readonly lifecycle?: string;

}

/**
 * Converts an object of type 'FSxAlias' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxAlias(obj: FSxAlias | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Lifecycle': obj.lifecycle,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxTag
 */
export interface FSxTag {
  /**
   * @schema FSxTag#Key
   */
  readonly key?: string;

  /**
   * @schema FSxTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'FSxTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxTag(obj: FSxTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxBackup
 */
export interface FSxBackup {
  /**
   * @schema FSxBackup#BackupId
   */
  readonly backupId?: string;

  /**
   * @schema FSxBackup#Lifecycle
   */
  readonly lifecycle?: string;

  /**
   * @schema FSxBackup#FailureDetails
   */
  readonly failureDetails?: FSxBackupFailureDetails;

  /**
   * @schema FSxBackup#Type
   */
  readonly type?: string;

  /**
   * @schema FSxBackup#ProgressPercent
   */
  readonly progressPercent?: number;

  /**
   * @schema FSxBackup#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema FSxBackup#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema FSxBackup#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema FSxBackup#Tags
   */
  readonly tags?: FSxTag[];

  /**
   * @schema FSxBackup#FileSystem
   */
  readonly fileSystem?: FSxFileSystem;

  /**
   * @schema FSxBackup#DirectoryInformation
   */
  readonly directoryInformation?: FSxActiveDirectoryBackupAttributes;

  /**
   * @schema FSxBackup#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema FSxBackup#SourceBackupId
   */
  readonly sourceBackupId?: string;

  /**
   * @schema FSxBackup#SourceBackupRegion
   */
  readonly sourceBackupRegion?: string;

}

/**
 * Converts an object of type 'FSxBackup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxBackup(obj: FSxBackup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupId': obj.backupId,
    'Lifecycle': obj.lifecycle,
    'FailureDetails': toJson_FSxBackupFailureDetails(obj.failureDetails),
    'Type': obj.type,
    'ProgressPercent': obj.progressPercent,
    'CreationTime': obj.creationTime,
    'KmsKeyId': obj.kmsKeyId,
    'ResourceARN': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_FSxTag(y)),
    'FileSystem': toJson_FSxFileSystem(obj.fileSystem),
    'DirectoryInformation': toJson_FSxActiveDirectoryBackupAttributes(obj.directoryInformation),
    'OwnerId': obj.ownerId,
    'SourceBackupId': obj.sourceBackupId,
    'SourceBackupRegion': obj.sourceBackupRegion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxCompletionReport
 */
export interface FSxCompletionReport {
  /**
   * @schema FSxCompletionReport#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema FSxCompletionReport#Path
   */
  readonly path?: string;

  /**
   * @schema FSxCompletionReport#Format
   */
  readonly format?: string;

  /**
   * @schema FSxCompletionReport#Scope
   */
  readonly scope?: string;

}

/**
 * Converts an object of type 'FSxCompletionReport' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxCompletionReport(obj: FSxCompletionReport | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
    'Path': obj.path,
    'Format': obj.format,
    'Scope': obj.scope,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxDataRepositoryTask
 */
export interface FSxDataRepositoryTask {
  /**
   * @schema FSxDataRepositoryTask#TaskId
   */
  readonly taskId?: string;

  /**
   * @schema FSxDataRepositoryTask#Lifecycle
   */
  readonly lifecycle?: string;

  /**
   * @schema FSxDataRepositoryTask#Type
   */
  readonly type?: string;

  /**
   * @schema FSxDataRepositoryTask#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema FSxDataRepositoryTask#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema FSxDataRepositoryTask#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema FSxDataRepositoryTask#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema FSxDataRepositoryTask#Tags
   */
  readonly tags?: FSxTag[];

  /**
   * @schema FSxDataRepositoryTask#FileSystemId
   */
  readonly fileSystemId?: string;

  /**
   * @schema FSxDataRepositoryTask#Paths
   */
  readonly paths?: string[];

  /**
   * @schema FSxDataRepositoryTask#FailureDetails
   */
  readonly failureDetails?: FSxDataRepositoryTaskFailureDetails;

  /**
   * @schema FSxDataRepositoryTask#Status
   */
  readonly status?: FSxDataRepositoryTaskStatus;

  /**
   * @schema FSxDataRepositoryTask#Report
   */
  readonly report?: FSxCompletionReport;

}

/**
 * Converts an object of type 'FSxDataRepositoryTask' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxDataRepositoryTask(obj: FSxDataRepositoryTask | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TaskId': obj.taskId,
    'Lifecycle': obj.lifecycle,
    'Type': obj.type,
    'CreationTime': obj.creationTime,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'ResourceARN': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_FSxTag(y)),
    'FileSystemId': obj.fileSystemId,
    'Paths': obj.paths?.map(y => y),
    'FailureDetails': toJson_FSxDataRepositoryTaskFailureDetails(obj.failureDetails),
    'Status': toJson_FSxDataRepositoryTaskStatus(obj.status),
    'Report': toJson_FSxCompletionReport(obj.report),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxCreateFileSystemWindowsConfiguration
 */
export interface FSxCreateFileSystemWindowsConfiguration {
  /**
   * @schema FSxCreateFileSystemWindowsConfiguration#ActiveDirectoryId
   */
  readonly activeDirectoryId?: string;

  /**
   * @schema FSxCreateFileSystemWindowsConfiguration#SelfManagedActiveDirectoryConfiguration
   */
  readonly selfManagedActiveDirectoryConfiguration?: FSxSelfManagedActiveDirectoryConfiguration;

  /**
   * @schema FSxCreateFileSystemWindowsConfiguration#DeploymentType
   */
  readonly deploymentType?: string;

  /**
   * @schema FSxCreateFileSystemWindowsConfiguration#PreferredSubnetId
   */
  readonly preferredSubnetId?: string;

  /**
   * @schema FSxCreateFileSystemWindowsConfiguration#ThroughputCapacity
   */
  readonly throughputCapacity?: number;

  /**
   * @schema FSxCreateFileSystemWindowsConfiguration#WeeklyMaintenanceStartTime
   */
  readonly weeklyMaintenanceStartTime?: string;

  /**
   * @schema FSxCreateFileSystemWindowsConfiguration#DailyAutomaticBackupStartTime
   */
  readonly dailyAutomaticBackupStartTime?: string;

  /**
   * @schema FSxCreateFileSystemWindowsConfiguration#AutomaticBackupRetentionDays
   */
  readonly automaticBackupRetentionDays?: number;

  /**
   * @schema FSxCreateFileSystemWindowsConfiguration#CopyTagsToBackups
   */
  readonly copyTagsToBackups?: boolean;

  /**
   * @schema FSxCreateFileSystemWindowsConfiguration#Aliases
   */
  readonly aliases?: string[];

  /**
   * @schema FSxCreateFileSystemWindowsConfiguration#AuditLogConfiguration
   */
  readonly auditLogConfiguration?: FSxWindowsAuditLogCreateConfiguration;

}

/**
 * Converts an object of type 'FSxCreateFileSystemWindowsConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxCreateFileSystemWindowsConfiguration(obj: FSxCreateFileSystemWindowsConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActiveDirectoryId': obj.activeDirectoryId,
    'SelfManagedActiveDirectoryConfiguration': toJson_FSxSelfManagedActiveDirectoryConfiguration(obj.selfManagedActiveDirectoryConfiguration),
    'DeploymentType': obj.deploymentType,
    'PreferredSubnetId': obj.preferredSubnetId,
    'ThroughputCapacity': obj.throughputCapacity,
    'WeeklyMaintenanceStartTime': obj.weeklyMaintenanceStartTime,
    'DailyAutomaticBackupStartTime': obj.dailyAutomaticBackupStartTime,
    'AutomaticBackupRetentionDays': obj.automaticBackupRetentionDays,
    'CopyTagsToBackups': obj.copyTagsToBackups,
    'Aliases': obj.aliases?.map(y => y),
    'AuditLogConfiguration': toJson_FSxWindowsAuditLogCreateConfiguration(obj.auditLogConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxCreateFileSystemLustreConfiguration
 */
export interface FSxCreateFileSystemLustreConfiguration {
  /**
   * @schema FSxCreateFileSystemLustreConfiguration#WeeklyMaintenanceStartTime
   */
  readonly weeklyMaintenanceStartTime?: string;

  /**
   * @schema FSxCreateFileSystemLustreConfiguration#ImportPath
   */
  readonly importPath?: string;

  /**
   * @schema FSxCreateFileSystemLustreConfiguration#ExportPath
   */
  readonly exportPath?: string;

  /**
   * @schema FSxCreateFileSystemLustreConfiguration#ImportedFileChunkSize
   */
  readonly importedFileChunkSize?: number;

  /**
   * @schema FSxCreateFileSystemLustreConfiguration#DeploymentType
   */
  readonly deploymentType?: string;

  /**
   * @schema FSxCreateFileSystemLustreConfiguration#AutoImportPolicy
   */
  readonly autoImportPolicy?: string;

  /**
   * @schema FSxCreateFileSystemLustreConfiguration#PerUnitStorageThroughput
   */
  readonly perUnitStorageThroughput?: number;

  /**
   * @schema FSxCreateFileSystemLustreConfiguration#DailyAutomaticBackupStartTime
   */
  readonly dailyAutomaticBackupStartTime?: string;

  /**
   * @schema FSxCreateFileSystemLustreConfiguration#AutomaticBackupRetentionDays
   */
  readonly automaticBackupRetentionDays?: number;

  /**
   * @schema FSxCreateFileSystemLustreConfiguration#CopyTagsToBackups
   */
  readonly copyTagsToBackups?: boolean;

  /**
   * @schema FSxCreateFileSystemLustreConfiguration#DriveCacheType
   */
  readonly driveCacheType?: string;

  /**
   * @schema FSxCreateFileSystemLustreConfiguration#DataCompressionType
   */
  readonly dataCompressionType?: string;

}

/**
 * Converts an object of type 'FSxCreateFileSystemLustreConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxCreateFileSystemLustreConfiguration(obj: FSxCreateFileSystemLustreConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WeeklyMaintenanceStartTime': obj.weeklyMaintenanceStartTime,
    'ImportPath': obj.importPath,
    'ExportPath': obj.exportPath,
    'ImportedFileChunkSize': obj.importedFileChunkSize,
    'DeploymentType': obj.deploymentType,
    'AutoImportPolicy': obj.autoImportPolicy,
    'PerUnitStorageThroughput': obj.perUnitStorageThroughput,
    'DailyAutomaticBackupStartTime': obj.dailyAutomaticBackupStartTime,
    'AutomaticBackupRetentionDays': obj.automaticBackupRetentionDays,
    'CopyTagsToBackups': obj.copyTagsToBackups,
    'DriveCacheType': obj.driveCacheType,
    'DataCompressionType': obj.dataCompressionType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxFileSystem
 */
export interface FSxFileSystem {
  /**
   * @schema FSxFileSystem#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema FSxFileSystem#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema FSxFileSystem#FileSystemId
   */
  readonly fileSystemId?: string;

  /**
   * @schema FSxFileSystem#FileSystemType
   */
  readonly fileSystemType?: string;

  /**
   * @schema FSxFileSystem#Lifecycle
   */
  readonly lifecycle?: string;

  /**
   * @schema FSxFileSystem#FailureDetails
   */
  readonly failureDetails?: FSxFileSystemFailureDetails;

  /**
   * @schema FSxFileSystem#StorageCapacity
   */
  readonly storageCapacity?: number;

  /**
   * @schema FSxFileSystem#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema FSxFileSystem#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema FSxFileSystem#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema FSxFileSystem#NetworkInterfaceIds
   */
  readonly networkInterfaceIds?: string[];

  /**
   * @schema FSxFileSystem#DNSName
   */
  readonly dnsName?: string;

  /**
   * @schema FSxFileSystem#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema FSxFileSystem#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema FSxFileSystem#Tags
   */
  readonly tags?: FSxTag[];

  /**
   * @schema FSxFileSystem#WindowsConfiguration
   */
  readonly windowsConfiguration?: FSxWindowsFileSystemConfiguration;

  /**
   * @schema FSxFileSystem#LustreConfiguration
   */
  readonly lustreConfiguration?: FSxLustreFileSystemConfiguration;

  /**
   * @schema FSxFileSystem#AdministrativeActions
   */
  readonly administrativeActions?: FSxAdministrativeAction[];

}

/**
 * Converts an object of type 'FSxFileSystem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxFileSystem(obj: FSxFileSystem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OwnerId': obj.ownerId,
    'CreationTime': obj.creationTime,
    'FileSystemId': obj.fileSystemId,
    'FileSystemType': obj.fileSystemType,
    'Lifecycle': obj.lifecycle,
    'FailureDetails': toJson_FSxFileSystemFailureDetails(obj.failureDetails),
    'StorageCapacity': obj.storageCapacity,
    'StorageType': obj.storageType,
    'VpcId': obj.vpcId,
    'SubnetIds': obj.subnetIds?.map(y => y),
    'NetworkInterfaceIds': obj.networkInterfaceIds?.map(y => y),
    'DNSName': obj.dnsName,
    'KmsKeyId': obj.kmsKeyId,
    'ResourceARN': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_FSxTag(y)),
    'WindowsConfiguration': toJson_FSxWindowsFileSystemConfiguration(obj.windowsConfiguration),
    'LustreConfiguration': toJson_FSxLustreFileSystemConfiguration(obj.lustreConfiguration),
    'AdministrativeActions': obj.administrativeActions?.map(y => toJson_FSxAdministrativeAction(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxDeleteFileSystemWindowsConfiguration
 */
export interface FSxDeleteFileSystemWindowsConfiguration {
  /**
   * @schema FSxDeleteFileSystemWindowsConfiguration#SkipFinalBackup
   */
  readonly skipFinalBackup?: boolean;

  /**
   * @schema FSxDeleteFileSystemWindowsConfiguration#FinalBackupTags
   */
  readonly finalBackupTags?: FSxTag[];

}

/**
 * Converts an object of type 'FSxDeleteFileSystemWindowsConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxDeleteFileSystemWindowsConfiguration(obj: FSxDeleteFileSystemWindowsConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SkipFinalBackup': obj.skipFinalBackup,
    'FinalBackupTags': obj.finalBackupTags?.map(y => toJson_FSxTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxDeleteFileSystemLustreConfiguration
 */
export interface FSxDeleteFileSystemLustreConfiguration {
  /**
   * @schema FSxDeleteFileSystemLustreConfiguration#SkipFinalBackup
   */
  readonly skipFinalBackup?: boolean;

  /**
   * @schema FSxDeleteFileSystemLustreConfiguration#FinalBackupTags
   */
  readonly finalBackupTags?: FSxTag[];

}

/**
 * Converts an object of type 'FSxDeleteFileSystemLustreConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxDeleteFileSystemLustreConfiguration(obj: FSxDeleteFileSystemLustreConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SkipFinalBackup': obj.skipFinalBackup,
    'FinalBackupTags': obj.finalBackupTags?.map(y => toJson_FSxTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxDeleteFileSystemWindowsResponse
 */
export interface FSxDeleteFileSystemWindowsResponse {
  /**
   * @schema FSxDeleteFileSystemWindowsResponse#FinalBackupId
   */
  readonly finalBackupId?: string;

  /**
   * @schema FSxDeleteFileSystemWindowsResponse#FinalBackupTags
   */
  readonly finalBackupTags?: FSxTag[];

}

/**
 * Converts an object of type 'FSxDeleteFileSystemWindowsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxDeleteFileSystemWindowsResponse(obj: FSxDeleteFileSystemWindowsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FinalBackupId': obj.finalBackupId,
    'FinalBackupTags': obj.finalBackupTags?.map(y => toJson_FSxTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxDeleteFileSystemLustreResponse
 */
export interface FSxDeleteFileSystemLustreResponse {
  /**
   * @schema FSxDeleteFileSystemLustreResponse#FinalBackupId
   */
  readonly finalBackupId?: string;

  /**
   * @schema FSxDeleteFileSystemLustreResponse#FinalBackupTags
   */
  readonly finalBackupTags?: FSxTag[];

}

/**
 * Converts an object of type 'FSxDeleteFileSystemLustreResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxDeleteFileSystemLustreResponse(obj: FSxDeleteFileSystemLustreResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FinalBackupId': obj.finalBackupId,
    'FinalBackupTags': obj.finalBackupTags?.map(y => toJson_FSxTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxFilter
 */
export interface FSxFilter {
  /**
   * @schema FSxFilter#Name
   */
  readonly name?: string;

  /**
   * @schema FSxFilter#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'FSxFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxFilter(obj: FSxFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxDataRepositoryTaskFilter
 */
export interface FSxDataRepositoryTaskFilter {
  /**
   * @schema FSxDataRepositoryTaskFilter#Name
   */
  readonly name?: string;

  /**
   * @schema FSxDataRepositoryTaskFilter#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'FSxDataRepositoryTaskFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxDataRepositoryTaskFilter(obj: FSxDataRepositoryTaskFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxUpdateFileSystemWindowsConfiguration
 */
export interface FSxUpdateFileSystemWindowsConfiguration {
  /**
   * @schema FSxUpdateFileSystemWindowsConfiguration#WeeklyMaintenanceStartTime
   */
  readonly weeklyMaintenanceStartTime?: string;

  /**
   * @schema FSxUpdateFileSystemWindowsConfiguration#DailyAutomaticBackupStartTime
   */
  readonly dailyAutomaticBackupStartTime?: string;

  /**
   * @schema FSxUpdateFileSystemWindowsConfiguration#AutomaticBackupRetentionDays
   */
  readonly automaticBackupRetentionDays?: number;

  /**
   * @schema FSxUpdateFileSystemWindowsConfiguration#ThroughputCapacity
   */
  readonly throughputCapacity?: number;

  /**
   * @schema FSxUpdateFileSystemWindowsConfiguration#SelfManagedActiveDirectoryConfiguration
   */
  readonly selfManagedActiveDirectoryConfiguration?: FSxSelfManagedActiveDirectoryConfigurationUpdates;

  /**
   * @schema FSxUpdateFileSystemWindowsConfiguration#AuditLogConfiguration
   */
  readonly auditLogConfiguration?: FSxWindowsAuditLogCreateConfiguration;

}

/**
 * Converts an object of type 'FSxUpdateFileSystemWindowsConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxUpdateFileSystemWindowsConfiguration(obj: FSxUpdateFileSystemWindowsConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WeeklyMaintenanceStartTime': obj.weeklyMaintenanceStartTime,
    'DailyAutomaticBackupStartTime': obj.dailyAutomaticBackupStartTime,
    'AutomaticBackupRetentionDays': obj.automaticBackupRetentionDays,
    'ThroughputCapacity': obj.throughputCapacity,
    'SelfManagedActiveDirectoryConfiguration': toJson_FSxSelfManagedActiveDirectoryConfigurationUpdates(obj.selfManagedActiveDirectoryConfiguration),
    'AuditLogConfiguration': toJson_FSxWindowsAuditLogCreateConfiguration(obj.auditLogConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxUpdateFileSystemLustreConfiguration
 */
export interface FSxUpdateFileSystemLustreConfiguration {
  /**
   * @schema FSxUpdateFileSystemLustreConfiguration#WeeklyMaintenanceStartTime
   */
  readonly weeklyMaintenanceStartTime?: string;

  /**
   * @schema FSxUpdateFileSystemLustreConfiguration#DailyAutomaticBackupStartTime
   */
  readonly dailyAutomaticBackupStartTime?: string;

  /**
   * @schema FSxUpdateFileSystemLustreConfiguration#AutomaticBackupRetentionDays
   */
  readonly automaticBackupRetentionDays?: number;

  /**
   * @schema FSxUpdateFileSystemLustreConfiguration#AutoImportPolicy
   */
  readonly autoImportPolicy?: string;

  /**
   * @schema FSxUpdateFileSystemLustreConfiguration#DataCompressionType
   */
  readonly dataCompressionType?: string;

}

/**
 * Converts an object of type 'FSxUpdateFileSystemLustreConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxUpdateFileSystemLustreConfiguration(obj: FSxUpdateFileSystemLustreConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WeeklyMaintenanceStartTime': obj.weeklyMaintenanceStartTime,
    'DailyAutomaticBackupStartTime': obj.dailyAutomaticBackupStartTime,
    'AutomaticBackupRetentionDays': obj.automaticBackupRetentionDays,
    'AutoImportPolicy': obj.autoImportPolicy,
    'DataCompressionType': obj.dataCompressionType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxBackupFailureDetails
 */
export interface FSxBackupFailureDetails {
  /**
   * @schema FSxBackupFailureDetails#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'FSxBackupFailureDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxBackupFailureDetails(obj: FSxBackupFailureDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxActiveDirectoryBackupAttributes
 */
export interface FSxActiveDirectoryBackupAttributes {
  /**
   * @schema FSxActiveDirectoryBackupAttributes#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema FSxActiveDirectoryBackupAttributes#ActiveDirectoryId
   */
  readonly activeDirectoryId?: string;

  /**
   * @schema FSxActiveDirectoryBackupAttributes#ResourceARN
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'FSxActiveDirectoryBackupAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxActiveDirectoryBackupAttributes(obj: FSxActiveDirectoryBackupAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'ActiveDirectoryId': obj.activeDirectoryId,
    'ResourceARN': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxDataRepositoryTaskFailureDetails
 */
export interface FSxDataRepositoryTaskFailureDetails {
  /**
   * @schema FSxDataRepositoryTaskFailureDetails#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'FSxDataRepositoryTaskFailureDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxDataRepositoryTaskFailureDetails(obj: FSxDataRepositoryTaskFailureDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxDataRepositoryTaskStatus
 */
export interface FSxDataRepositoryTaskStatus {
  /**
   * @schema FSxDataRepositoryTaskStatus#TotalCount
   */
  readonly totalCount?: number;

  /**
   * @schema FSxDataRepositoryTaskStatus#SucceededCount
   */
  readonly succeededCount?: number;

  /**
   * @schema FSxDataRepositoryTaskStatus#FailedCount
   */
  readonly failedCount?: number;

  /**
   * @schema FSxDataRepositoryTaskStatus#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

}

/**
 * Converts an object of type 'FSxDataRepositoryTaskStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxDataRepositoryTaskStatus(obj: FSxDataRepositoryTaskStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TotalCount': obj.totalCount,
    'SucceededCount': obj.succeededCount,
    'FailedCount': obj.failedCount,
    'LastUpdatedTime': obj.lastUpdatedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxSelfManagedActiveDirectoryConfiguration
 */
export interface FSxSelfManagedActiveDirectoryConfiguration {
  /**
   * @schema FSxSelfManagedActiveDirectoryConfiguration#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema FSxSelfManagedActiveDirectoryConfiguration#OrganizationalUnitDistinguishedName
   */
  readonly organizationalUnitDistinguishedName?: string;

  /**
   * @schema FSxSelfManagedActiveDirectoryConfiguration#FileSystemAdministratorsGroup
   */
  readonly fileSystemAdministratorsGroup?: string;

  /**
   * @schema FSxSelfManagedActiveDirectoryConfiguration#UserName
   */
  readonly userName?: string;

  /**
   * @schema FSxSelfManagedActiveDirectoryConfiguration#Password
   */
  readonly password?: string;

  /**
   * @schema FSxSelfManagedActiveDirectoryConfiguration#DnsIps
   */
  readonly dnsIps?: string[];

}

/**
 * Converts an object of type 'FSxSelfManagedActiveDirectoryConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxSelfManagedActiveDirectoryConfiguration(obj: FSxSelfManagedActiveDirectoryConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'OrganizationalUnitDistinguishedName': obj.organizationalUnitDistinguishedName,
    'FileSystemAdministratorsGroup': obj.fileSystemAdministratorsGroup,
    'UserName': obj.userName,
    'Password': obj.password,
    'DnsIps': obj.dnsIps?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxWindowsAuditLogCreateConfiguration
 */
export interface FSxWindowsAuditLogCreateConfiguration {
  /**
   * @schema FSxWindowsAuditLogCreateConfiguration#FileAccessAuditLogLevel
   */
  readonly fileAccessAuditLogLevel?: string;

  /**
   * @schema FSxWindowsAuditLogCreateConfiguration#FileShareAccessAuditLogLevel
   */
  readonly fileShareAccessAuditLogLevel?: string;

  /**
   * @schema FSxWindowsAuditLogCreateConfiguration#AuditLogDestination
   */
  readonly auditLogDestination?: string;

}

/**
 * Converts an object of type 'FSxWindowsAuditLogCreateConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxWindowsAuditLogCreateConfiguration(obj: FSxWindowsAuditLogCreateConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileAccessAuditLogLevel': obj.fileAccessAuditLogLevel,
    'FileShareAccessAuditLogLevel': obj.fileShareAccessAuditLogLevel,
    'AuditLogDestination': obj.auditLogDestination,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxFileSystemFailureDetails
 */
export interface FSxFileSystemFailureDetails {
  /**
   * @schema FSxFileSystemFailureDetails#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'FSxFileSystemFailureDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxFileSystemFailureDetails(obj: FSxFileSystemFailureDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxWindowsFileSystemConfiguration
 */
export interface FSxWindowsFileSystemConfiguration {
  /**
   * @schema FSxWindowsFileSystemConfiguration#ActiveDirectoryId
   */
  readonly activeDirectoryId?: string;

  /**
   * @schema FSxWindowsFileSystemConfiguration#SelfManagedActiveDirectoryConfiguration
   */
  readonly selfManagedActiveDirectoryConfiguration?: FSxSelfManagedActiveDirectoryAttributes;

  /**
   * @schema FSxWindowsFileSystemConfiguration#DeploymentType
   */
  readonly deploymentType?: string;

  /**
   * @schema FSxWindowsFileSystemConfiguration#RemoteAdministrationEndpoint
   */
  readonly remoteAdministrationEndpoint?: string;

  /**
   * @schema FSxWindowsFileSystemConfiguration#PreferredSubnetId
   */
  readonly preferredSubnetId?: string;

  /**
   * @schema FSxWindowsFileSystemConfiguration#PreferredFileServerIp
   */
  readonly preferredFileServerIp?: string;

  /**
   * @schema FSxWindowsFileSystemConfiguration#ThroughputCapacity
   */
  readonly throughputCapacity?: number;

  /**
   * @schema FSxWindowsFileSystemConfiguration#MaintenanceOperationsInProgress
   */
  readonly maintenanceOperationsInProgress?: string[];

  /**
   * @schema FSxWindowsFileSystemConfiguration#WeeklyMaintenanceStartTime
   */
  readonly weeklyMaintenanceStartTime?: string;

  /**
   * @schema FSxWindowsFileSystemConfiguration#DailyAutomaticBackupStartTime
   */
  readonly dailyAutomaticBackupStartTime?: string;

  /**
   * @schema FSxWindowsFileSystemConfiguration#AutomaticBackupRetentionDays
   */
  readonly automaticBackupRetentionDays?: number;

  /**
   * @schema FSxWindowsFileSystemConfiguration#CopyTagsToBackups
   */
  readonly copyTagsToBackups?: boolean;

  /**
   * @schema FSxWindowsFileSystemConfiguration#Aliases
   */
  readonly aliases?: FSxAlias[];

  /**
   * @schema FSxWindowsFileSystemConfiguration#AuditLogConfiguration
   */
  readonly auditLogConfiguration?: FSxWindowsAuditLogConfiguration;

}

/**
 * Converts an object of type 'FSxWindowsFileSystemConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxWindowsFileSystemConfiguration(obj: FSxWindowsFileSystemConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActiveDirectoryId': obj.activeDirectoryId,
    'SelfManagedActiveDirectoryConfiguration': toJson_FSxSelfManagedActiveDirectoryAttributes(obj.selfManagedActiveDirectoryConfiguration),
    'DeploymentType': obj.deploymentType,
    'RemoteAdministrationEndpoint': obj.remoteAdministrationEndpoint,
    'PreferredSubnetId': obj.preferredSubnetId,
    'PreferredFileServerIp': obj.preferredFileServerIp,
    'ThroughputCapacity': obj.throughputCapacity,
    'MaintenanceOperationsInProgress': obj.maintenanceOperationsInProgress?.map(y => y),
    'WeeklyMaintenanceStartTime': obj.weeklyMaintenanceStartTime,
    'DailyAutomaticBackupStartTime': obj.dailyAutomaticBackupStartTime,
    'AutomaticBackupRetentionDays': obj.automaticBackupRetentionDays,
    'CopyTagsToBackups': obj.copyTagsToBackups,
    'Aliases': obj.aliases?.map(y => toJson_FSxAlias(y)),
    'AuditLogConfiguration': toJson_FSxWindowsAuditLogConfiguration(obj.auditLogConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxLustreFileSystemConfiguration
 */
export interface FSxLustreFileSystemConfiguration {
  /**
   * @schema FSxLustreFileSystemConfiguration#WeeklyMaintenanceStartTime
   */
  readonly weeklyMaintenanceStartTime?: string;

  /**
   * @schema FSxLustreFileSystemConfiguration#DataRepositoryConfiguration
   */
  readonly dataRepositoryConfiguration?: FSxDataRepositoryConfiguration;

  /**
   * @schema FSxLustreFileSystemConfiguration#DeploymentType
   */
  readonly deploymentType?: string;

  /**
   * @schema FSxLustreFileSystemConfiguration#PerUnitStorageThroughput
   */
  readonly perUnitStorageThroughput?: number;

  /**
   * @schema FSxLustreFileSystemConfiguration#MountName
   */
  readonly mountName?: string;

  /**
   * @schema FSxLustreFileSystemConfiguration#DailyAutomaticBackupStartTime
   */
  readonly dailyAutomaticBackupStartTime?: string;

  /**
   * @schema FSxLustreFileSystemConfiguration#AutomaticBackupRetentionDays
   */
  readonly automaticBackupRetentionDays?: number;

  /**
   * @schema FSxLustreFileSystemConfiguration#CopyTagsToBackups
   */
  readonly copyTagsToBackups?: boolean;

  /**
   * @schema FSxLustreFileSystemConfiguration#DriveCacheType
   */
  readonly driveCacheType?: string;

  /**
   * @schema FSxLustreFileSystemConfiguration#DataCompressionType
   */
  readonly dataCompressionType?: string;

}

/**
 * Converts an object of type 'FSxLustreFileSystemConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxLustreFileSystemConfiguration(obj: FSxLustreFileSystemConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WeeklyMaintenanceStartTime': obj.weeklyMaintenanceStartTime,
    'DataRepositoryConfiguration': toJson_FSxDataRepositoryConfiguration(obj.dataRepositoryConfiguration),
    'DeploymentType': obj.deploymentType,
    'PerUnitStorageThroughput': obj.perUnitStorageThroughput,
    'MountName': obj.mountName,
    'DailyAutomaticBackupStartTime': obj.dailyAutomaticBackupStartTime,
    'AutomaticBackupRetentionDays': obj.automaticBackupRetentionDays,
    'CopyTagsToBackups': obj.copyTagsToBackups,
    'DriveCacheType': obj.driveCacheType,
    'DataCompressionType': obj.dataCompressionType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxAdministrativeAction
 */
export interface FSxAdministrativeAction {
  /**
   * @schema FSxAdministrativeAction#AdministrativeActionType
   */
  readonly administrativeActionType?: string;

  /**
   * @schema FSxAdministrativeAction#ProgressPercent
   */
  readonly progressPercent?: number;

  /**
   * @schema FSxAdministrativeAction#RequestTime
   */
  readonly requestTime?: string;

  /**
   * @schema FSxAdministrativeAction#Status
   */
  readonly status?: string;

  /**
   * @schema FSxAdministrativeAction#TargetFileSystemValues
   */
  readonly targetFileSystemValues?: FSxFileSystem;

  /**
   * @schema FSxAdministrativeAction#FailureDetails
   */
  readonly failureDetails?: FSxAdministrativeActionFailureDetails;

}

/**
 * Converts an object of type 'FSxAdministrativeAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxAdministrativeAction(obj: FSxAdministrativeAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdministrativeActionType': obj.administrativeActionType,
    'ProgressPercent': obj.progressPercent,
    'RequestTime': obj.requestTime,
    'Status': obj.status,
    'TargetFileSystemValues': toJson_FSxFileSystem(obj.targetFileSystemValues),
    'FailureDetails': toJson_FSxAdministrativeActionFailureDetails(obj.failureDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxSelfManagedActiveDirectoryConfigurationUpdates
 */
export interface FSxSelfManagedActiveDirectoryConfigurationUpdates {
  /**
   * @schema FSxSelfManagedActiveDirectoryConfigurationUpdates#UserName
   */
  readonly userName?: string;

  /**
   * @schema FSxSelfManagedActiveDirectoryConfigurationUpdates#Password
   */
  readonly password?: string;

  /**
   * @schema FSxSelfManagedActiveDirectoryConfigurationUpdates#DnsIps
   */
  readonly dnsIps?: string[];

}

/**
 * Converts an object of type 'FSxSelfManagedActiveDirectoryConfigurationUpdates' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxSelfManagedActiveDirectoryConfigurationUpdates(obj: FSxSelfManagedActiveDirectoryConfigurationUpdates | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'Password': obj.password,
    'DnsIps': obj.dnsIps?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxSelfManagedActiveDirectoryAttributes
 */
export interface FSxSelfManagedActiveDirectoryAttributes {
  /**
   * @schema FSxSelfManagedActiveDirectoryAttributes#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema FSxSelfManagedActiveDirectoryAttributes#OrganizationalUnitDistinguishedName
   */
  readonly organizationalUnitDistinguishedName?: string;

  /**
   * @schema FSxSelfManagedActiveDirectoryAttributes#FileSystemAdministratorsGroup
   */
  readonly fileSystemAdministratorsGroup?: string;

  /**
   * @schema FSxSelfManagedActiveDirectoryAttributes#UserName
   */
  readonly userName?: string;

  /**
   * @schema FSxSelfManagedActiveDirectoryAttributes#DnsIps
   */
  readonly dnsIps?: string[];

}

/**
 * Converts an object of type 'FSxSelfManagedActiveDirectoryAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxSelfManagedActiveDirectoryAttributes(obj: FSxSelfManagedActiveDirectoryAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'OrganizationalUnitDistinguishedName': obj.organizationalUnitDistinguishedName,
    'FileSystemAdministratorsGroup': obj.fileSystemAdministratorsGroup,
    'UserName': obj.userName,
    'DnsIps': obj.dnsIps?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxWindowsAuditLogConfiguration
 */
export interface FSxWindowsAuditLogConfiguration {
  /**
   * @schema FSxWindowsAuditLogConfiguration#FileAccessAuditLogLevel
   */
  readonly fileAccessAuditLogLevel?: string;

  /**
   * @schema FSxWindowsAuditLogConfiguration#FileShareAccessAuditLogLevel
   */
  readonly fileShareAccessAuditLogLevel?: string;

  /**
   * @schema FSxWindowsAuditLogConfiguration#AuditLogDestination
   */
  readonly auditLogDestination?: string;

}

/**
 * Converts an object of type 'FSxWindowsAuditLogConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxWindowsAuditLogConfiguration(obj: FSxWindowsAuditLogConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileAccessAuditLogLevel': obj.fileAccessAuditLogLevel,
    'FileShareAccessAuditLogLevel': obj.fileShareAccessAuditLogLevel,
    'AuditLogDestination': obj.auditLogDestination,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxDataRepositoryConfiguration
 */
export interface FSxDataRepositoryConfiguration {
  /**
   * @schema FSxDataRepositoryConfiguration#Lifecycle
   */
  readonly lifecycle?: string;

  /**
   * @schema FSxDataRepositoryConfiguration#ImportPath
   */
  readonly importPath?: string;

  /**
   * @schema FSxDataRepositoryConfiguration#ExportPath
   */
  readonly exportPath?: string;

  /**
   * @schema FSxDataRepositoryConfiguration#ImportedFileChunkSize
   */
  readonly importedFileChunkSize?: number;

  /**
   * @schema FSxDataRepositoryConfiguration#AutoImportPolicy
   */
  readonly autoImportPolicy?: string;

  /**
   * @schema FSxDataRepositoryConfiguration#FailureDetails
   */
  readonly failureDetails?: FSxDataRepositoryFailureDetails;

}

/**
 * Converts an object of type 'FSxDataRepositoryConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxDataRepositoryConfiguration(obj: FSxDataRepositoryConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Lifecycle': obj.lifecycle,
    'ImportPath': obj.importPath,
    'ExportPath': obj.exportPath,
    'ImportedFileChunkSize': obj.importedFileChunkSize,
    'AutoImportPolicy': obj.autoImportPolicy,
    'FailureDetails': toJson_FSxDataRepositoryFailureDetails(obj.failureDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxAdministrativeActionFailureDetails
 */
export interface FSxAdministrativeActionFailureDetails {
  /**
   * @schema FSxAdministrativeActionFailureDetails#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'FSxAdministrativeActionFailureDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxAdministrativeActionFailureDetails(obj: FSxAdministrativeActionFailureDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FSxDataRepositoryFailureDetails
 */
export interface FSxDataRepositoryFailureDetails {
  /**
   * @schema FSxDataRepositoryFailureDetails#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'FSxDataRepositoryFailureDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FSxDataRepositoryFailureDetails(obj: FSxDataRepositoryFailureDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
