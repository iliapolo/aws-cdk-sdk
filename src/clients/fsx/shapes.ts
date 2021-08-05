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
  readonly fileSystemId: string;

  /**
   * @schema FSxAssociateFileSystemAliasesRequest#Aliases
   */
  readonly aliases: string[];

}

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
 * @schema FSxCancelDataRepositoryTaskRequest
 */
export interface FSxCancelDataRepositoryTaskRequest {
  /**
   * @schema FSxCancelDataRepositoryTaskRequest#TaskId
   */
  readonly taskId: string;

}

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
 * @schema FSxCreateBackupRequest
 */
export interface FSxCreateBackupRequest {
  /**
   * @schema FSxCreateBackupRequest#FileSystemId
   */
  readonly fileSystemId: string;

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
 * @schema FSxCreateBackupResponse
 */
export interface FSxCreateBackupResponse {
  /**
   * @schema FSxCreateBackupResponse#Backup
   */
  readonly backup?: FSxBackup;

}

/**
 * @schema FSxCreateDataRepositoryTaskRequest
 */
export interface FSxCreateDataRepositoryTaskRequest {
  /**
   * @schema FSxCreateDataRepositoryTaskRequest#Type
   */
  readonly type: string;

  /**
   * @schema FSxCreateDataRepositoryTaskRequest#Paths
   */
  readonly paths?: string[];

  /**
   * @schema FSxCreateDataRepositoryTaskRequest#FileSystemId
   */
  readonly fileSystemId: string;

  /**
   * @schema FSxCreateDataRepositoryTaskRequest#Report
   */
  readonly report: FSxCompletionReport;

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
 * @schema FSxCreateDataRepositoryTaskResponse
 */
export interface FSxCreateDataRepositoryTaskResponse {
  /**
   * @schema FSxCreateDataRepositoryTaskResponse#DataRepositoryTask
   */
  readonly dataRepositoryTask?: FSxDataRepositoryTask;

}

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
  readonly fileSystemType: string;

  /**
   * @schema FSxCreateFileSystemRequest#StorageCapacity
   */
  readonly storageCapacity: number;

  /**
   * @schema FSxCreateFileSystemRequest#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema FSxCreateFileSystemRequest#SubnetIds
   */
  readonly subnetIds: string[];

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
 * @schema FSxCreateFileSystemResponse
 */
export interface FSxCreateFileSystemResponse {
  /**
   * @schema FSxCreateFileSystemResponse#FileSystem
   */
  readonly fileSystem?: FSxFileSystem;

}

/**
 * @schema FSxCreateFileSystemFromBackupRequest
 */
export interface FSxCreateFileSystemFromBackupRequest {
  /**
   * @schema FSxCreateFileSystemFromBackupRequest#BackupId
   */
  readonly backupId: string;

  /**
   * @schema FSxCreateFileSystemFromBackupRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema FSxCreateFileSystemFromBackupRequest#SubnetIds
   */
  readonly subnetIds: string[];

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

}

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
 * @schema FSxDeleteBackupRequest
 */
export interface FSxDeleteBackupRequest {
  /**
   * @schema FSxDeleteBackupRequest#BackupId
   */
  readonly backupId: string;

  /**
   * @schema FSxDeleteBackupRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

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
 * @schema FSxDeleteFileSystemRequest
 */
export interface FSxDeleteFileSystemRequest {
  /**
   * @schema FSxDeleteFileSystemRequest#FileSystemId
   */
  readonly fileSystemId: string;

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
  readonly fileSystemId: string;

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
  readonly fileSystemId: string;

  /**
   * @schema FSxDisassociateFileSystemAliasesRequest#Aliases
   */
  readonly aliases: string[];

}

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
 * @schema FSxListTagsForResourceRequest
 */
export interface FSxListTagsForResourceRequest {
  /**
   * @schema FSxListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

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
 * @schema FSxTagResourceRequest
 */
export interface FSxTagResourceRequest {
  /**
   * @schema FSxTagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema FSxTagResourceRequest#Tags
   */
  readonly tags: FSxTag[];

}

/**
 * @schema FSxTagResourceResponse
 */
export interface FSxTagResourceResponse {
}

/**
 * @schema FSxUntagResourceRequest
 */
export interface FSxUntagResourceRequest {
  /**
   * @schema FSxUntagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema FSxUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema FSxUntagResourceResponse
 */
export interface FSxUntagResourceResponse {
}

/**
 * @schema FSxUpdateFileSystemRequest
 */
export interface FSxUpdateFileSystemRequest {
  /**
   * @schema FSxUpdateFileSystemRequest#FileSystemId
   */
  readonly fileSystemId: string;

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
 * @schema FSxUpdateFileSystemResponse
 */
export interface FSxUpdateFileSystemResponse {
  /**
   * @schema FSxUpdateFileSystemResponse#FileSystem
   */
  readonly fileSystem?: FSxFileSystem;

}

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
 * @schema FSxTag
 */
export interface FSxTag {
  /**
   * @schema FSxTag#Key
   */
  readonly key: string;

  /**
   * @schema FSxTag#Value
   */
  readonly value: string;

}

/**
 * @schema FSxBackup
 */
export interface FSxBackup {
  /**
   * @schema FSxBackup#BackupId
   */
  readonly backupId: string;

  /**
   * @schema FSxBackup#Lifecycle
   */
  readonly lifecycle: string;

  /**
   * @schema FSxBackup#FailureDetails
   */
  readonly failureDetails?: FSxBackupFailureDetails;

  /**
   * @schema FSxBackup#Type
   */
  readonly type: string;

  /**
   * @schema FSxBackup#ProgressPercent
   */
  readonly progressPercent?: number;

  /**
   * @schema FSxBackup#CreationTime
   */
  readonly creationTime: string;

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
  readonly fileSystem: FSxFileSystem;

  /**
   * @schema FSxBackup#DirectoryInformation
   */
  readonly directoryInformation?: FSxActiveDirectoryBackupAttributes;

}

/**
 * @schema FSxCompletionReport
 */
export interface FSxCompletionReport {
  /**
   * @schema FSxCompletionReport#Enabled
   */
  readonly enabled: boolean;

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
 * @schema FSxDataRepositoryTask
 */
export interface FSxDataRepositoryTask {
  /**
   * @schema FSxDataRepositoryTask#TaskId
   */
  readonly taskId: string;

  /**
   * @schema FSxDataRepositoryTask#Lifecycle
   */
  readonly lifecycle: string;

  /**
   * @schema FSxDataRepositoryTask#Type
   */
  readonly type: string;

  /**
   * @schema FSxDataRepositoryTask#CreationTime
   */
  readonly creationTime: string;

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
  readonly fileSystemId: string;

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
  readonly throughputCapacity: number;

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

}

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

}

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

}

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

}

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

}

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
 * @schema FSxSelfManagedActiveDirectoryConfiguration
 */
export interface FSxSelfManagedActiveDirectoryConfiguration {
  /**
   * @schema FSxSelfManagedActiveDirectoryConfiguration#DomainName
   */
  readonly domainName: string;

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
  readonly userName: string;

  /**
   * @schema FSxSelfManagedActiveDirectoryConfiguration#Password
   */
  readonly password: string;

  /**
   * @schema FSxSelfManagedActiveDirectoryConfiguration#DnsIps
   */
  readonly dnsIps: string[];

}

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

}

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

}

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
 * @schema FSxAdministrativeActionFailureDetails
 */
export interface FSxAdministrativeActionFailureDetails {
  /**
   * @schema FSxAdministrativeActionFailureDetails#Message
   */
  readonly message?: string;

}

/**
 * @schema FSxDataRepositoryFailureDetails
 */
export interface FSxDataRepositoryFailureDetails {
  /**
   * @schema FSxDataRepositoryFailureDetails#Message
   */
  readonly message?: string;

}
