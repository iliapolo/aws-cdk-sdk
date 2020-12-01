/**
 * @schema AssociateFileSystemAliasesRequest
 */
export interface AssociateFileSystemAliasesRequest {
  /**
   * @schema AssociateFileSystemAliasesRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema AssociateFileSystemAliasesRequest#FileSystemId
   */
  readonly fileSystemId: string;

  /**
   * @schema AssociateFileSystemAliasesRequest#Aliases
   */
  readonly aliases: string[];

}

/**
 * @schema AssociateFileSystemAliasesResponse
 */
export interface AssociateFileSystemAliasesResponse {
  /**
   * @schema AssociateFileSystemAliasesResponse#Aliases
   */
  readonly aliases?: Alias[];

}

/**
 * @schema CancelDataRepositoryTaskRequest
 */
export interface CancelDataRepositoryTaskRequest {
  /**
   * @schema CancelDataRepositoryTaskRequest#TaskId
   */
  readonly taskId: string;

}

/**
 * @schema CancelDataRepositoryTaskResponse
 */
export interface CancelDataRepositoryTaskResponse {
  /**
   * @schema CancelDataRepositoryTaskResponse#Lifecycle
   */
  readonly lifecycle?: string;

  /**
   * @schema CancelDataRepositoryTaskResponse#TaskId
   */
  readonly taskId?: string;

}

/**
 * @schema CreateBackupRequest
 */
export interface CreateBackupRequest {
  /**
   * @schema CreateBackupRequest#FileSystemId
   */
  readonly fileSystemId: string;

  /**
   * @schema CreateBackupRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CreateBackupRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateBackupResponse
 */
export interface CreateBackupResponse {
  /**
   * @schema CreateBackupResponse#Backup
   */
  readonly backup?: Backup;

}

/**
 * @schema CreateDataRepositoryTaskRequest
 */
export interface CreateDataRepositoryTaskRequest {
  /**
   * @schema CreateDataRepositoryTaskRequest#Type
   */
  readonly type: string;

  /**
   * @schema CreateDataRepositoryTaskRequest#Paths
   */
  readonly paths?: string[];

  /**
   * @schema CreateDataRepositoryTaskRequest#FileSystemId
   */
  readonly fileSystemId: string;

  /**
   * @schema CreateDataRepositoryTaskRequest#Report
   */
  readonly report: CompletionReport;

  /**
   * @schema CreateDataRepositoryTaskRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CreateDataRepositoryTaskRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateDataRepositoryTaskResponse
 */
export interface CreateDataRepositoryTaskResponse {
  /**
   * @schema CreateDataRepositoryTaskResponse#DataRepositoryTask
   */
  readonly dataRepositoryTask?: DataRepositoryTask;

}

/**
 * @schema CreateFileSystemRequest
 */
export interface CreateFileSystemRequest {
  /**
   * @schema CreateFileSystemRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CreateFileSystemRequest#FileSystemType
   */
  readonly fileSystemType: string;

  /**
   * @schema CreateFileSystemRequest#StorageCapacity
   */
  readonly storageCapacity: number;

  /**
   * @schema CreateFileSystemRequest#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema CreateFileSystemRequest#SubnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema CreateFileSystemRequest#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema CreateFileSystemRequest#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateFileSystemRequest#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema CreateFileSystemRequest#WindowsConfiguration
   */
  readonly windowsConfiguration?: CreateFileSystemWindowsConfiguration;

  /**
   * @schema CreateFileSystemRequest#LustreConfiguration
   */
  readonly lustreConfiguration?: CreateFileSystemLustreConfiguration;

}

/**
 * @schema CreateFileSystemResponse
 */
export interface CreateFileSystemResponse {
  /**
   * @schema CreateFileSystemResponse#FileSystem
   */
  readonly fileSystem?: FileSystem;

}

/**
 * @schema CreateFileSystemFromBackupRequest
 */
export interface CreateFileSystemFromBackupRequest {
  /**
   * @schema CreateFileSystemFromBackupRequest#BackupId
   */
  readonly backupId: string;

  /**
   * @schema CreateFileSystemFromBackupRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CreateFileSystemFromBackupRequest#SubnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema CreateFileSystemFromBackupRequest#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema CreateFileSystemFromBackupRequest#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateFileSystemFromBackupRequest#WindowsConfiguration
   */
  readonly windowsConfiguration?: CreateFileSystemWindowsConfiguration;

  /**
   * @schema CreateFileSystemFromBackupRequest#LustreConfiguration
   */
  readonly lustreConfiguration?: CreateFileSystemLustreConfiguration;

  /**
   * @schema CreateFileSystemFromBackupRequest#StorageType
   */
  readonly storageType?: string;

}

/**
 * @schema CreateFileSystemFromBackupResponse
 */
export interface CreateFileSystemFromBackupResponse {
  /**
   * @schema CreateFileSystemFromBackupResponse#FileSystem
   */
  readonly fileSystem?: FileSystem;

}

/**
 * @schema DeleteBackupRequest
 */
export interface DeleteBackupRequest {
  /**
   * @schema DeleteBackupRequest#BackupId
   */
  readonly backupId: string;

  /**
   * @schema DeleteBackupRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema DeleteBackupResponse
 */
export interface DeleteBackupResponse {
  /**
   * @schema DeleteBackupResponse#BackupId
   */
  readonly backupId?: string;

  /**
   * @schema DeleteBackupResponse#Lifecycle
   */
  readonly lifecycle?: string;

}

/**
 * @schema DeleteFileSystemRequest
 */
export interface DeleteFileSystemRequest {
  /**
   * @schema DeleteFileSystemRequest#FileSystemId
   */
  readonly fileSystemId: string;

  /**
   * @schema DeleteFileSystemRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema DeleteFileSystemRequest#WindowsConfiguration
   */
  readonly windowsConfiguration?: DeleteFileSystemWindowsConfiguration;

  /**
   * @schema DeleteFileSystemRequest#LustreConfiguration
   */
  readonly lustreConfiguration?: DeleteFileSystemLustreConfiguration;

}

/**
 * @schema DeleteFileSystemResponse
 */
export interface DeleteFileSystemResponse {
  /**
   * @schema DeleteFileSystemResponse#FileSystemId
   */
  readonly fileSystemId?: string;

  /**
   * @schema DeleteFileSystemResponse#Lifecycle
   */
  readonly lifecycle?: string;

  /**
   * @schema DeleteFileSystemResponse#WindowsResponse
   */
  readonly windowsResponse?: DeleteFileSystemWindowsResponse;

  /**
   * @schema DeleteFileSystemResponse#LustreResponse
   */
  readonly lustreResponse?: DeleteFileSystemLustreResponse;

}

/**
 * @schema DescribeBackupsRequest
 */
export interface DescribeBackupsRequest {
  /**
   * @schema DescribeBackupsRequest#BackupIds
   */
  readonly backupIds?: string[];

  /**
   * @schema DescribeBackupsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeBackupsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeBackupsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeBackupsResponse
 */
export interface DescribeBackupsResponse {
  /**
   * @schema DescribeBackupsResponse#Backups
   */
  readonly backups?: Backup[];

  /**
   * @schema DescribeBackupsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeDataRepositoryTasksRequest
 */
export interface DescribeDataRepositoryTasksRequest {
  /**
   * @schema DescribeDataRepositoryTasksRequest#TaskIds
   */
  readonly taskIds?: string[];

  /**
   * @schema DescribeDataRepositoryTasksRequest#Filters
   */
  readonly filters?: DataRepositoryTaskFilter[];

  /**
   * @schema DescribeDataRepositoryTasksRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeDataRepositoryTasksRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeDataRepositoryTasksResponse
 */
export interface DescribeDataRepositoryTasksResponse {
  /**
   * @schema DescribeDataRepositoryTasksResponse#DataRepositoryTasks
   */
  readonly dataRepositoryTasks?: DataRepositoryTask[];

  /**
   * @schema DescribeDataRepositoryTasksResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeFileSystemAliasesRequest
 */
export interface DescribeFileSystemAliasesRequest {
  /**
   * @schema DescribeFileSystemAliasesRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema DescribeFileSystemAliasesRequest#FileSystemId
   */
  readonly fileSystemId: string;

  /**
   * @schema DescribeFileSystemAliasesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeFileSystemAliasesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeFileSystemAliasesResponse
 */
export interface DescribeFileSystemAliasesResponse {
  /**
   * @schema DescribeFileSystemAliasesResponse#Aliases
   */
  readonly aliases?: Alias[];

  /**
   * @schema DescribeFileSystemAliasesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeFileSystemsRequest
 */
export interface DescribeFileSystemsRequest {
  /**
   * @schema DescribeFileSystemsRequest#FileSystemIds
   */
  readonly fileSystemIds?: string[];

  /**
   * @schema DescribeFileSystemsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeFileSystemsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeFileSystemsResponse
 */
export interface DescribeFileSystemsResponse {
  /**
   * @schema DescribeFileSystemsResponse#FileSystems
   */
  readonly fileSystems?: FileSystem[];

  /**
   * @schema DescribeFileSystemsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DisassociateFileSystemAliasesRequest
 */
export interface DisassociateFileSystemAliasesRequest {
  /**
   * @schema DisassociateFileSystemAliasesRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema DisassociateFileSystemAliasesRequest#FileSystemId
   */
  readonly fileSystemId: string;

  /**
   * @schema DisassociateFileSystemAliasesRequest#Aliases
   */
  readonly aliases: string[];

}

/**
 * @schema DisassociateFileSystemAliasesResponse
 */
export interface DisassociateFileSystemAliasesResponse {
  /**
   * @schema DisassociateFileSystemAliasesResponse#Aliases
   */
  readonly aliases?: Alias[];

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema ListTagsForResourceRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListTagsForResourceRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema ListTagsForResourceResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateFileSystemRequest
 */
export interface UpdateFileSystemRequest {
  /**
   * @schema UpdateFileSystemRequest#FileSystemId
   */
  readonly fileSystemId: string;

  /**
   * @schema UpdateFileSystemRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema UpdateFileSystemRequest#StorageCapacity
   */
  readonly storageCapacity?: number;

  /**
   * @schema UpdateFileSystemRequest#WindowsConfiguration
   */
  readonly windowsConfiguration?: UpdateFileSystemWindowsConfiguration;

  /**
   * @schema UpdateFileSystemRequest#LustreConfiguration
   */
  readonly lustreConfiguration?: UpdateFileSystemLustreConfiguration;

}

/**
 * @schema UpdateFileSystemResponse
 */
export interface UpdateFileSystemResponse {
  /**
   * @schema UpdateFileSystemResponse#FileSystem
   */
  readonly fileSystem?: FileSystem;

}

/**
 * @schema Alias
 */
export interface Alias {
  /**
   * @schema Alias#Name
   */
  readonly name?: string;

  /**
   * @schema Alias#Lifecycle
   */
  readonly lifecycle?: string;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key: string;

  /**
   * @schema Tag#Value
   */
  readonly value: string;

}

/**
 * @schema Backup
 */
export interface Backup {
  /**
   * @schema Backup#BackupId
   */
  readonly backupId: string;

  /**
   * @schema Backup#Lifecycle
   */
  readonly lifecycle: string;

  /**
   * @schema Backup#FailureDetails
   */
  readonly failureDetails?: BackupFailureDetails;

  /**
   * @schema Backup#Type
   */
  readonly type: string;

  /**
   * @schema Backup#ProgressPercent
   */
  readonly progressPercent?: number;

  /**
   * @schema Backup#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema Backup#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema Backup#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema Backup#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema Backup#FileSystem
   */
  readonly fileSystem: FileSystem;

  /**
   * @schema Backup#DirectoryInformation
   */
  readonly directoryInformation?: ActiveDirectoryBackupAttributes;

}

/**
 * @schema CompletionReport
 */
export interface CompletionReport {
  /**
   * @schema CompletionReport#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema CompletionReport#Path
   */
  readonly path?: string;

  /**
   * @schema CompletionReport#Format
   */
  readonly format?: string;

  /**
   * @schema CompletionReport#Scope
   */
  readonly scope?: string;

}

/**
 * @schema DataRepositoryTask
 */
export interface DataRepositoryTask {
  /**
   * @schema DataRepositoryTask#TaskId
   */
  readonly taskId: string;

  /**
   * @schema DataRepositoryTask#Lifecycle
   */
  readonly lifecycle: string;

  /**
   * @schema DataRepositoryTask#Type
   */
  readonly type: string;

  /**
   * @schema DataRepositoryTask#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema DataRepositoryTask#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema DataRepositoryTask#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema DataRepositoryTask#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema DataRepositoryTask#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema DataRepositoryTask#FileSystemId
   */
  readonly fileSystemId: string;

  /**
   * @schema DataRepositoryTask#Paths
   */
  readonly paths?: string[];

  /**
   * @schema DataRepositoryTask#FailureDetails
   */
  readonly failureDetails?: DataRepositoryTaskFailureDetails;

  /**
   * @schema DataRepositoryTask#Status
   */
  readonly status?: DataRepositoryTaskStatus;

  /**
   * @schema DataRepositoryTask#Report
   */
  readonly report?: CompletionReport;

}

/**
 * @schema CreateFileSystemWindowsConfiguration
 */
export interface CreateFileSystemWindowsConfiguration {
  /**
   * @schema CreateFileSystemWindowsConfiguration#ActiveDirectoryId
   */
  readonly activeDirectoryId?: string;

  /**
   * @schema CreateFileSystemWindowsConfiguration#SelfManagedActiveDirectoryConfiguration
   */
  readonly selfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfiguration;

  /**
   * @schema CreateFileSystemWindowsConfiguration#DeploymentType
   */
  readonly deploymentType?: string;

  /**
   * @schema CreateFileSystemWindowsConfiguration#PreferredSubnetId
   */
  readonly preferredSubnetId?: string;

  /**
   * @schema CreateFileSystemWindowsConfiguration#ThroughputCapacity
   */
  readonly throughputCapacity: number;

  /**
   * @schema CreateFileSystemWindowsConfiguration#WeeklyMaintenanceStartTime
   */
  readonly weeklyMaintenanceStartTime?: string;

  /**
   * @schema CreateFileSystemWindowsConfiguration#DailyAutomaticBackupStartTime
   */
  readonly dailyAutomaticBackupStartTime?: string;

  /**
   * @schema CreateFileSystemWindowsConfiguration#AutomaticBackupRetentionDays
   */
  readonly automaticBackupRetentionDays?: number;

  /**
   * @schema CreateFileSystemWindowsConfiguration#CopyTagsToBackups
   */
  readonly copyTagsToBackups?: boolean;

  /**
   * @schema CreateFileSystemWindowsConfiguration#Aliases
   */
  readonly aliases?: string[];

}

/**
 * @schema CreateFileSystemLustreConfiguration
 */
export interface CreateFileSystemLustreConfiguration {
  /**
   * @schema CreateFileSystemLustreConfiguration#WeeklyMaintenanceStartTime
   */
  readonly weeklyMaintenanceStartTime?: string;

  /**
   * @schema CreateFileSystemLustreConfiguration#ImportPath
   */
  readonly importPath?: string;

  /**
   * @schema CreateFileSystemLustreConfiguration#ExportPath
   */
  readonly exportPath?: string;

  /**
   * @schema CreateFileSystemLustreConfiguration#ImportedFileChunkSize
   */
  readonly importedFileChunkSize?: number;

  /**
   * @schema CreateFileSystemLustreConfiguration#DeploymentType
   */
  readonly deploymentType?: string;

  /**
   * @schema CreateFileSystemLustreConfiguration#AutoImportPolicy
   */
  readonly autoImportPolicy?: string;

  /**
   * @schema CreateFileSystemLustreConfiguration#PerUnitStorageThroughput
   */
  readonly perUnitStorageThroughput?: number;

  /**
   * @schema CreateFileSystemLustreConfiguration#DailyAutomaticBackupStartTime
   */
  readonly dailyAutomaticBackupStartTime?: string;

  /**
   * @schema CreateFileSystemLustreConfiguration#AutomaticBackupRetentionDays
   */
  readonly automaticBackupRetentionDays?: number;

  /**
   * @schema CreateFileSystemLustreConfiguration#CopyTagsToBackups
   */
  readonly copyTagsToBackups?: boolean;

  /**
   * @schema CreateFileSystemLustreConfiguration#DriveCacheType
   */
  readonly driveCacheType?: string;

}

/**
 * @schema FileSystem
 */
export interface FileSystem {
  /**
   * @schema FileSystem#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema FileSystem#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema FileSystem#FileSystemId
   */
  readonly fileSystemId?: string;

  /**
   * @schema FileSystem#FileSystemType
   */
  readonly fileSystemType?: string;

  /**
   * @schema FileSystem#Lifecycle
   */
  readonly lifecycle?: string;

  /**
   * @schema FileSystem#FailureDetails
   */
  readonly failureDetails?: FileSystemFailureDetails;

  /**
   * @schema FileSystem#StorageCapacity
   */
  readonly storageCapacity?: number;

  /**
   * @schema FileSystem#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema FileSystem#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema FileSystem#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema FileSystem#NetworkInterfaceIds
   */
  readonly networkInterfaceIds?: string[];

  /**
   * @schema FileSystem#DNSName
   */
  readonly dnsName?: string;

  /**
   * @schema FileSystem#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema FileSystem#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema FileSystem#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema FileSystem#WindowsConfiguration
   */
  readonly windowsConfiguration?: WindowsFileSystemConfiguration;

  /**
   * @schema FileSystem#LustreConfiguration
   */
  readonly lustreConfiguration?: LustreFileSystemConfiguration;

  /**
   * @schema FileSystem#AdministrativeActions
   */
  readonly administrativeActions?: AdministrativeAction[];

}

/**
 * @schema DeleteFileSystemWindowsConfiguration
 */
export interface DeleteFileSystemWindowsConfiguration {
  /**
   * @schema DeleteFileSystemWindowsConfiguration#SkipFinalBackup
   */
  readonly skipFinalBackup?: boolean;

  /**
   * @schema DeleteFileSystemWindowsConfiguration#FinalBackupTags
   */
  readonly finalBackupTags?: Tag[];

}

/**
 * @schema DeleteFileSystemLustreConfiguration
 */
export interface DeleteFileSystemLustreConfiguration {
  /**
   * @schema DeleteFileSystemLustreConfiguration#SkipFinalBackup
   */
  readonly skipFinalBackup?: boolean;

  /**
   * @schema DeleteFileSystemLustreConfiguration#FinalBackupTags
   */
  readonly finalBackupTags?: Tag[];

}

/**
 * @schema DeleteFileSystemWindowsResponse
 */
export interface DeleteFileSystemWindowsResponse {
  /**
   * @schema DeleteFileSystemWindowsResponse#FinalBackupId
   */
  readonly finalBackupId?: string;

  /**
   * @schema DeleteFileSystemWindowsResponse#FinalBackupTags
   */
  readonly finalBackupTags?: Tag[];

}

/**
 * @schema DeleteFileSystemLustreResponse
 */
export interface DeleteFileSystemLustreResponse {
  /**
   * @schema DeleteFileSystemLustreResponse#FinalBackupId
   */
  readonly finalBackupId?: string;

  /**
   * @schema DeleteFileSystemLustreResponse#FinalBackupTags
   */
  readonly finalBackupTags?: Tag[];

}

/**
 * @schema Filter
 */
export interface Filter {
  /**
   * @schema Filter#Name
   */
  readonly name?: string;

  /**
   * @schema Filter#Values
   */
  readonly values?: string[];

}

/**
 * @schema DataRepositoryTaskFilter
 */
export interface DataRepositoryTaskFilter {
  /**
   * @schema DataRepositoryTaskFilter#Name
   */
  readonly name?: string;

  /**
   * @schema DataRepositoryTaskFilter#Values
   */
  readonly values?: string[];

}

/**
 * @schema UpdateFileSystemWindowsConfiguration
 */
export interface UpdateFileSystemWindowsConfiguration {
  /**
   * @schema UpdateFileSystemWindowsConfiguration#WeeklyMaintenanceStartTime
   */
  readonly weeklyMaintenanceStartTime?: string;

  /**
   * @schema UpdateFileSystemWindowsConfiguration#DailyAutomaticBackupStartTime
   */
  readonly dailyAutomaticBackupStartTime?: string;

  /**
   * @schema UpdateFileSystemWindowsConfiguration#AutomaticBackupRetentionDays
   */
  readonly automaticBackupRetentionDays?: number;

  /**
   * @schema UpdateFileSystemWindowsConfiguration#ThroughputCapacity
   */
  readonly throughputCapacity?: number;

  /**
   * @schema UpdateFileSystemWindowsConfiguration#SelfManagedActiveDirectoryConfiguration
   */
  readonly selfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfigurationUpdates;

}

/**
 * @schema UpdateFileSystemLustreConfiguration
 */
export interface UpdateFileSystemLustreConfiguration {
  /**
   * @schema UpdateFileSystemLustreConfiguration#WeeklyMaintenanceStartTime
   */
  readonly weeklyMaintenanceStartTime?: string;

  /**
   * @schema UpdateFileSystemLustreConfiguration#DailyAutomaticBackupStartTime
   */
  readonly dailyAutomaticBackupStartTime?: string;

  /**
   * @schema UpdateFileSystemLustreConfiguration#AutomaticBackupRetentionDays
   */
  readonly automaticBackupRetentionDays?: number;

  /**
   * @schema UpdateFileSystemLustreConfiguration#AutoImportPolicy
   */
  readonly autoImportPolicy?: string;

}

/**
 * @schema BackupFailureDetails
 */
export interface BackupFailureDetails {
  /**
   * @schema BackupFailureDetails#Message
   */
  readonly message?: string;

}

/**
 * @schema ActiveDirectoryBackupAttributes
 */
export interface ActiveDirectoryBackupAttributes {
  /**
   * @schema ActiveDirectoryBackupAttributes#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema ActiveDirectoryBackupAttributes#ActiveDirectoryId
   */
  readonly activeDirectoryId?: string;

}

/**
 * @schema DataRepositoryTaskFailureDetails
 */
export interface DataRepositoryTaskFailureDetails {
  /**
   * @schema DataRepositoryTaskFailureDetails#Message
   */
  readonly message?: string;

}

/**
 * @schema DataRepositoryTaskStatus
 */
export interface DataRepositoryTaskStatus {
  /**
   * @schema DataRepositoryTaskStatus#TotalCount
   */
  readonly totalCount?: number;

  /**
   * @schema DataRepositoryTaskStatus#SucceededCount
   */
  readonly succeededCount?: number;

  /**
   * @schema DataRepositoryTaskStatus#FailedCount
   */
  readonly failedCount?: number;

  /**
   * @schema DataRepositoryTaskStatus#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

}

/**
 * @schema SelfManagedActiveDirectoryConfiguration
 */
export interface SelfManagedActiveDirectoryConfiguration {
  /**
   * @schema SelfManagedActiveDirectoryConfiguration#DomainName
   */
  readonly domainName: string;

  /**
   * @schema SelfManagedActiveDirectoryConfiguration#OrganizationalUnitDistinguishedName
   */
  readonly organizationalUnitDistinguishedName?: string;

  /**
   * @schema SelfManagedActiveDirectoryConfiguration#FileSystemAdministratorsGroup
   */
  readonly fileSystemAdministratorsGroup?: string;

  /**
   * @schema SelfManagedActiveDirectoryConfiguration#UserName
   */
  readonly userName: string;

  /**
   * @schema SelfManagedActiveDirectoryConfiguration#Password
   */
  readonly password: string;

  /**
   * @schema SelfManagedActiveDirectoryConfiguration#DnsIps
   */
  readonly dnsIps: string[];

}

/**
 * @schema FileSystemFailureDetails
 */
export interface FileSystemFailureDetails {
  /**
   * @schema FileSystemFailureDetails#Message
   */
  readonly message?: string;

}

/**
 * @schema WindowsFileSystemConfiguration
 */
export interface WindowsFileSystemConfiguration {
  /**
   * @schema WindowsFileSystemConfiguration#ActiveDirectoryId
   */
  readonly activeDirectoryId?: string;

  /**
   * @schema WindowsFileSystemConfiguration#SelfManagedActiveDirectoryConfiguration
   */
  readonly selfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryAttributes;

  /**
   * @schema WindowsFileSystemConfiguration#DeploymentType
   */
  readonly deploymentType?: string;

  /**
   * @schema WindowsFileSystemConfiguration#RemoteAdministrationEndpoint
   */
  readonly remoteAdministrationEndpoint?: string;

  /**
   * @schema WindowsFileSystemConfiguration#PreferredSubnetId
   */
  readonly preferredSubnetId?: string;

  /**
   * @schema WindowsFileSystemConfiguration#PreferredFileServerIp
   */
  readonly preferredFileServerIp?: string;

  /**
   * @schema WindowsFileSystemConfiguration#ThroughputCapacity
   */
  readonly throughputCapacity?: number;

  /**
   * @schema WindowsFileSystemConfiguration#MaintenanceOperationsInProgress
   */
  readonly maintenanceOperationsInProgress?: string[];

  /**
   * @schema WindowsFileSystemConfiguration#WeeklyMaintenanceStartTime
   */
  readonly weeklyMaintenanceStartTime?: string;

  /**
   * @schema WindowsFileSystemConfiguration#DailyAutomaticBackupStartTime
   */
  readonly dailyAutomaticBackupStartTime?: string;

  /**
   * @schema WindowsFileSystemConfiguration#AutomaticBackupRetentionDays
   */
  readonly automaticBackupRetentionDays?: number;

  /**
   * @schema WindowsFileSystemConfiguration#CopyTagsToBackups
   */
  readonly copyTagsToBackups?: boolean;

  /**
   * @schema WindowsFileSystemConfiguration#Aliases
   */
  readonly aliases?: Alias[];

}

/**
 * @schema LustreFileSystemConfiguration
 */
export interface LustreFileSystemConfiguration {
  /**
   * @schema LustreFileSystemConfiguration#WeeklyMaintenanceStartTime
   */
  readonly weeklyMaintenanceStartTime?: string;

  /**
   * @schema LustreFileSystemConfiguration#DataRepositoryConfiguration
   */
  readonly dataRepositoryConfiguration?: DataRepositoryConfiguration;

  /**
   * @schema LustreFileSystemConfiguration#DeploymentType
   */
  readonly deploymentType?: string;

  /**
   * @schema LustreFileSystemConfiguration#PerUnitStorageThroughput
   */
  readonly perUnitStorageThroughput?: number;

  /**
   * @schema LustreFileSystemConfiguration#MountName
   */
  readonly mountName?: string;

  /**
   * @schema LustreFileSystemConfiguration#DailyAutomaticBackupStartTime
   */
  readonly dailyAutomaticBackupStartTime?: string;

  /**
   * @schema LustreFileSystemConfiguration#AutomaticBackupRetentionDays
   */
  readonly automaticBackupRetentionDays?: number;

  /**
   * @schema LustreFileSystemConfiguration#CopyTagsToBackups
   */
  readonly copyTagsToBackups?: boolean;

  /**
   * @schema LustreFileSystemConfiguration#DriveCacheType
   */
  readonly driveCacheType?: string;

}

/**
 * @schema AdministrativeAction
 */
export interface AdministrativeAction {
  /**
   * @schema AdministrativeAction#AdministrativeActionType
   */
  readonly administrativeActionType?: string;

  /**
   * @schema AdministrativeAction#ProgressPercent
   */
  readonly progressPercent?: number;

  /**
   * @schema AdministrativeAction#RequestTime
   */
  readonly requestTime?: string;

  /**
   * @schema AdministrativeAction#Status
   */
  readonly status?: string;

  /**
   * @schema AdministrativeAction#TargetFileSystemValues
   */
  readonly targetFileSystemValues?: FileSystem;

  /**
   * @schema AdministrativeAction#FailureDetails
   */
  readonly failureDetails?: AdministrativeActionFailureDetails;

}

/**
 * @schema SelfManagedActiveDirectoryConfigurationUpdates
 */
export interface SelfManagedActiveDirectoryConfigurationUpdates {
  /**
   * @schema SelfManagedActiveDirectoryConfigurationUpdates#UserName
   */
  readonly userName?: string;

  /**
   * @schema SelfManagedActiveDirectoryConfigurationUpdates#Password
   */
  readonly password?: string;

  /**
   * @schema SelfManagedActiveDirectoryConfigurationUpdates#DnsIps
   */
  readonly dnsIps?: string[];

}

/**
 * @schema SelfManagedActiveDirectoryAttributes
 */
export interface SelfManagedActiveDirectoryAttributes {
  /**
   * @schema SelfManagedActiveDirectoryAttributes#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema SelfManagedActiveDirectoryAttributes#OrganizationalUnitDistinguishedName
   */
  readonly organizationalUnitDistinguishedName?: string;

  /**
   * @schema SelfManagedActiveDirectoryAttributes#FileSystemAdministratorsGroup
   */
  readonly fileSystemAdministratorsGroup?: string;

  /**
   * @schema SelfManagedActiveDirectoryAttributes#UserName
   */
  readonly userName?: string;

  /**
   * @schema SelfManagedActiveDirectoryAttributes#DnsIps
   */
  readonly dnsIps?: string[];

}

/**
 * @schema DataRepositoryConfiguration
 */
export interface DataRepositoryConfiguration {
  /**
   * @schema DataRepositoryConfiguration#Lifecycle
   */
  readonly lifecycle?: string;

  /**
   * @schema DataRepositoryConfiguration#ImportPath
   */
  readonly importPath?: string;

  /**
   * @schema DataRepositoryConfiguration#ExportPath
   */
  readonly exportPath?: string;

  /**
   * @schema DataRepositoryConfiguration#ImportedFileChunkSize
   */
  readonly importedFileChunkSize?: number;

  /**
   * @schema DataRepositoryConfiguration#AutoImportPolicy
   */
  readonly autoImportPolicy?: string;

  /**
   * @schema DataRepositoryConfiguration#FailureDetails
   */
  readonly failureDetails?: DataRepositoryFailureDetails;

}

/**
 * @schema AdministrativeActionFailureDetails
 */
export interface AdministrativeActionFailureDetails {
  /**
   * @schema AdministrativeActionFailureDetails#Message
   */
  readonly message?: string;

}

/**
 * @schema DataRepositoryFailureDetails
 */
export interface DataRepositoryFailureDetails {
  /**
   * @schema DataRepositoryFailureDetails#Message
   */
  readonly message?: string;

}
