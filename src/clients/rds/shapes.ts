/**
 * @schema AddRoleToDbClusterMessage
 */
export interface AddRoleToDbClusterMessage {
  /**
   * @schema AddRoleToDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema AddRoleToDbClusterMessage#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema AddRoleToDbClusterMessage#FeatureName
   */
  readonly featureName?: string;

}

/**
 * @schema AddRoleToDbInstanceMessage
 */
export interface AddRoleToDbInstanceMessage {
  /**
   * @schema AddRoleToDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema AddRoleToDbInstanceMessage#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema AddRoleToDbInstanceMessage#FeatureName
   */
  readonly featureName: string;

}

/**
 * @schema AddSourceIdentifierToSubscriptionMessage
 */
export interface AddSourceIdentifierToSubscriptionMessage {
  /**
   * @schema AddSourceIdentifierToSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName: string;

  /**
   * @schema AddSourceIdentifierToSubscriptionMessage#SourceIdentifier
   */
  readonly sourceIdentifier: string;

}

/**
 * @schema AddSourceIdentifierToSubscriptionResult
 */
export interface AddSourceIdentifierToSubscriptionResult {
  /**
   * @schema AddSourceIdentifierToSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: EventSubscription;

}

/**
 * @schema AddTagsToResourceMessage
 */
export interface AddTagsToResourceMessage {
  /**
   * @schema AddTagsToResourceMessage#ResourceName
   */
  readonly resourceName: string;

  /**
   * @schema AddTagsToResourceMessage#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema ApplyPendingMaintenanceActionMessage
 */
export interface ApplyPendingMaintenanceActionMessage {
  /**
   * @schema ApplyPendingMaintenanceActionMessage#ResourceIdentifier
   */
  readonly resourceIdentifier: string;

  /**
   * @schema ApplyPendingMaintenanceActionMessage#ApplyAction
   */
  readonly applyAction: string;

  /**
   * @schema ApplyPendingMaintenanceActionMessage#OptInType
   */
  readonly optInType: string;

}

/**
 * @schema ApplyPendingMaintenanceActionResult
 */
export interface ApplyPendingMaintenanceActionResult {
  /**
   * @schema ApplyPendingMaintenanceActionResult#ResourcePendingMaintenanceActions
   */
  readonly resourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions;

}

/**
 * @schema AuthorizeDbSecurityGroupIngressMessage
 */
export interface AuthorizeDbSecurityGroupIngressMessage {
  /**
   * @schema AuthorizeDbSecurityGroupIngressMessage#DBSecurityGroupName
   */
  readonly dbSecurityGroupName: string;

  /**
   * @schema AuthorizeDbSecurityGroupIngressMessage#CIDRIP
   */
  readonly cidrip?: string;

  /**
   * @schema AuthorizeDbSecurityGroupIngressMessage#EC2SecurityGroupName
   */
  readonly ec2SecurityGroupName?: string;

  /**
   * @schema AuthorizeDbSecurityGroupIngressMessage#EC2SecurityGroupId
   */
  readonly ec2SecurityGroupId?: string;

  /**
   * @schema AuthorizeDbSecurityGroupIngressMessage#EC2SecurityGroupOwnerId
   */
  readonly ec2SecurityGroupOwnerId?: string;

}

/**
 * @schema AuthorizeDbSecurityGroupIngressResult
 */
export interface AuthorizeDbSecurityGroupIngressResult {
  /**
   * @schema AuthorizeDbSecurityGroupIngressResult#DBSecurityGroup
   */
  readonly dbSecurityGroup?: DbSecurityGroup;

}

/**
 * @schema BacktrackDbClusterMessage
 */
export interface BacktrackDbClusterMessage {
  /**
   * @schema BacktrackDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema BacktrackDbClusterMessage#BacktrackTo
   */
  readonly backtrackTo: string;

  /**
   * @schema BacktrackDbClusterMessage#Force
   */
  readonly force?: boolean;

  /**
   * @schema BacktrackDbClusterMessage#UseEarliestTimeOnPointInTimeUnavailable
   */
  readonly useEarliestTimeOnPointInTimeUnavailable?: boolean;

}

/**
 * @schema DbClusterBacktrack
 */
export interface DbClusterBacktrack {
  /**
   * @schema DbClusterBacktrack#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DbClusterBacktrack#BacktrackIdentifier
   */
  readonly backtrackIdentifier?: string;

  /**
   * @schema DbClusterBacktrack#BacktrackTo
   */
  readonly backtrackTo?: string;

  /**
   * @schema DbClusterBacktrack#BacktrackedFrom
   */
  readonly backtrackedFrom?: string;

  /**
   * @schema DbClusterBacktrack#BacktrackRequestCreationTime
   */
  readonly backtrackRequestCreationTime?: string;

  /**
   * @schema DbClusterBacktrack#Status
   */
  readonly status?: string;

}

/**
 * @schema CancelExportTaskMessage
 */
export interface CancelExportTaskMessage {
  /**
   * @schema CancelExportTaskMessage#ExportTaskIdentifier
   */
  readonly exportTaskIdentifier: string;

}

/**
 * @schema ExportTask
 */
export interface ExportTask {
  /**
   * @schema ExportTask#ExportTaskIdentifier
   */
  readonly exportTaskIdentifier?: string;

  /**
   * @schema ExportTask#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema ExportTask#ExportOnly
   */
  readonly exportOnly?: string[];

  /**
   * @schema ExportTask#SnapshotTime
   */
  readonly snapshotTime?: string;

  /**
   * @schema ExportTask#TaskStartTime
   */
  readonly taskStartTime?: string;

  /**
   * @schema ExportTask#TaskEndTime
   */
  readonly taskEndTime?: string;

  /**
   * @schema ExportTask#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema ExportTask#S3Prefix
   */
  readonly s3Prefix?: string;

  /**
   * @schema ExportTask#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema ExportTask#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema ExportTask#Status
   */
  readonly status?: string;

  /**
   * @schema ExportTask#PercentProgress
   */
  readonly percentProgress?: number;

  /**
   * @schema ExportTask#TotalExtractedDataInGB
   */
  readonly totalExtractedDataInGb?: number;

  /**
   * @schema ExportTask#FailureCause
   */
  readonly failureCause?: string;

  /**
   * @schema ExportTask#WarningMessage
   */
  readonly warningMessage?: string;

}

/**
 * @schema CopyDbClusterParameterGroupMessage
 */
export interface CopyDbClusterParameterGroupMessage {
  /**
   * @schema CopyDbClusterParameterGroupMessage#SourceDBClusterParameterGroupIdentifier
   */
  readonly sourceDbClusterParameterGroupIdentifier: string;

  /**
   * @schema CopyDbClusterParameterGroupMessage#TargetDBClusterParameterGroupIdentifier
   */
  readonly targetDbClusterParameterGroupIdentifier: string;

  /**
   * @schema CopyDbClusterParameterGroupMessage#TargetDBClusterParameterGroupDescription
   */
  readonly targetDbClusterParameterGroupDescription: string;

  /**
   * @schema CopyDbClusterParameterGroupMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CopyDbClusterParameterGroupResult
 */
export interface CopyDbClusterParameterGroupResult {
  /**
   * @schema CopyDbClusterParameterGroupResult#DBClusterParameterGroup
   */
  readonly dbClusterParameterGroup?: DbClusterParameterGroup;

}

/**
 * @schema CopyDbClusterSnapshotMessage
 */
export interface CopyDbClusterSnapshotMessage {
  /**
   * @schema CopyDbClusterSnapshotMessage#SourceDBClusterSnapshotIdentifier
   */
  readonly sourceDbClusterSnapshotIdentifier: string;

  /**
   * @schema CopyDbClusterSnapshotMessage#TargetDBClusterSnapshotIdentifier
   */
  readonly targetDbClusterSnapshotIdentifier: string;

  /**
   * @schema CopyDbClusterSnapshotMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema CopyDbClusterSnapshotMessage#PreSignedUrl
   */
  readonly preSignedUrl?: string;

  /**
   * @schema CopyDbClusterSnapshotMessage#CopyTags
   */
  readonly copyTags?: boolean;

  /**
   * @schema CopyDbClusterSnapshotMessage#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CopyDbClusterSnapshotMessage#SourceRegion
   */
  readonly sourceRegion?: string;

}

/**
 * @schema CopyDbClusterSnapshotResult
 */
export interface CopyDbClusterSnapshotResult {
  /**
   * @schema CopyDbClusterSnapshotResult#DBClusterSnapshot
   */
  readonly dbClusterSnapshot?: DbClusterSnapshot;

}

/**
 * @schema CopyDbParameterGroupMessage
 */
export interface CopyDbParameterGroupMessage {
  /**
   * @schema CopyDbParameterGroupMessage#SourceDBParameterGroupIdentifier
   */
  readonly sourceDbParameterGroupIdentifier: string;

  /**
   * @schema CopyDbParameterGroupMessage#TargetDBParameterGroupIdentifier
   */
  readonly targetDbParameterGroupIdentifier: string;

  /**
   * @schema CopyDbParameterGroupMessage#TargetDBParameterGroupDescription
   */
  readonly targetDbParameterGroupDescription: string;

  /**
   * @schema CopyDbParameterGroupMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CopyDbParameterGroupResult
 */
export interface CopyDbParameterGroupResult {
  /**
   * @schema CopyDbParameterGroupResult#DBParameterGroup
   */
  readonly dbParameterGroup?: DbParameterGroup;

}

/**
 * @schema CopyDbSnapshotMessage
 */
export interface CopyDbSnapshotMessage {
  /**
   * @schema CopyDbSnapshotMessage#SourceDBSnapshotIdentifier
   */
  readonly sourceDbSnapshotIdentifier: string;

  /**
   * @schema CopyDbSnapshotMessage#TargetDBSnapshotIdentifier
   */
  readonly targetDbSnapshotIdentifier: string;

  /**
   * @schema CopyDbSnapshotMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema CopyDbSnapshotMessage#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CopyDbSnapshotMessage#CopyTags
   */
  readonly copyTags?: boolean;

  /**
   * @schema CopyDbSnapshotMessage#PreSignedUrl
   */
  readonly preSignedUrl?: string;

  /**
   * @schema CopyDbSnapshotMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema CopyDbSnapshotMessage#TargetCustomAvailabilityZone
   */
  readonly targetCustomAvailabilityZone?: string;

  /**
   * @schema CopyDbSnapshotMessage#SourceRegion
   */
  readonly sourceRegion?: string;

}

/**
 * @schema CopyDbSnapshotResult
 */
export interface CopyDbSnapshotResult {
  /**
   * @schema CopyDbSnapshotResult#DBSnapshot
   */
  readonly dbSnapshot?: DbSnapshot;

}

/**
 * @schema CopyOptionGroupMessage
 */
export interface CopyOptionGroupMessage {
  /**
   * @schema CopyOptionGroupMessage#SourceOptionGroupIdentifier
   */
  readonly sourceOptionGroupIdentifier: string;

  /**
   * @schema CopyOptionGroupMessage#TargetOptionGroupIdentifier
   */
  readonly targetOptionGroupIdentifier: string;

  /**
   * @schema CopyOptionGroupMessage#TargetOptionGroupDescription
   */
  readonly targetOptionGroupDescription: string;

  /**
   * @schema CopyOptionGroupMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CopyOptionGroupResult
 */
export interface CopyOptionGroupResult {
  /**
   * @schema CopyOptionGroupResult#OptionGroup
   */
  readonly optionGroup?: OptionGroup;

}

/**
 * @schema CreateCustomAvailabilityZoneMessage
 */
export interface CreateCustomAvailabilityZoneMessage {
  /**
   * @schema CreateCustomAvailabilityZoneMessage#CustomAvailabilityZoneName
   */
  readonly customAvailabilityZoneName: string;

  /**
   * @schema CreateCustomAvailabilityZoneMessage#ExistingVpnId
   */
  readonly existingVpnId?: string;

  /**
   * @schema CreateCustomAvailabilityZoneMessage#NewVpnTunnelName
   */
  readonly newVpnTunnelName?: string;

  /**
   * @schema CreateCustomAvailabilityZoneMessage#VpnTunnelOriginatorIP
   */
  readonly vpnTunnelOriginatorIp?: string;

}

/**
 * @schema CreateCustomAvailabilityZoneResult
 */
export interface CreateCustomAvailabilityZoneResult {
  /**
   * @schema CreateCustomAvailabilityZoneResult#CustomAvailabilityZone
   */
  readonly customAvailabilityZone?: CustomAvailabilityZone;

}

/**
 * @schema CreateDbClusterMessage
 */
export interface CreateDbClusterMessage {
  /**
   * @schema CreateDbClusterMessage#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema CreateDbClusterMessage#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema CreateDbClusterMessage#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema CreateDbClusterMessage#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema CreateDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema CreateDbClusterMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema CreateDbClusterMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema CreateDbClusterMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema CreateDbClusterMessage#Engine
   */
  readonly engine: string;

  /**
   * @schema CreateDbClusterMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema CreateDbClusterMessage#Port
   */
  readonly port?: number;

  /**
   * @schema CreateDbClusterMessage#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema CreateDbClusterMessage#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema CreateDbClusterMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema CreateDbClusterMessage#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema CreateDbClusterMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema CreateDbClusterMessage#ReplicationSourceIdentifier
   */
  readonly replicationSourceIdentifier?: string;

  /**
   * @schema CreateDbClusterMessage#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateDbClusterMessage#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema CreateDbClusterMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema CreateDbClusterMessage#PreSignedUrl
   */
  readonly preSignedUrl?: string;

  /**
   * @schema CreateDbClusterMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema CreateDbClusterMessage#BacktrackWindow
   */
  readonly backtrackWindow?: number;

  /**
   * @schema CreateDbClusterMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema CreateDbClusterMessage#EngineMode
   */
  readonly engineMode?: string;

  /**
   * @schema CreateDbClusterMessage#ScalingConfiguration
   */
  readonly scalingConfiguration?: ScalingConfiguration;

  /**
   * @schema CreateDbClusterMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema CreateDbClusterMessage#GlobalClusterIdentifier
   */
  readonly globalClusterIdentifier?: string;

  /**
   * @schema CreateDbClusterMessage#EnableHttpEndpoint
   */
  readonly enableHttpEndpoint?: boolean;

  /**
   * @schema CreateDbClusterMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema CreateDbClusterMessage#Domain
   */
  readonly domain?: string;

  /**
   * @schema CreateDbClusterMessage#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

  /**
   * @schema CreateDbClusterMessage#EnableGlobalWriteForwarding
   */
  readonly enableGlobalWriteForwarding?: boolean;

  /**
   * @schema CreateDbClusterMessage#SourceRegion
   */
  readonly sourceRegion?: string;

}

/**
 * @schema CreateDbClusterResult
 */
export interface CreateDbClusterResult {
  /**
   * @schema CreateDbClusterResult#DBCluster
   */
  readonly dbCluster?: DbCluster;

}

/**
 * @schema CreateDbClusterEndpointMessage
 */
export interface CreateDbClusterEndpointMessage {
  /**
   * @schema CreateDbClusterEndpointMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema CreateDbClusterEndpointMessage#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier: string;

  /**
   * @schema CreateDbClusterEndpointMessage#EndpointType
   */
  readonly endpointType: string;

  /**
   * @schema CreateDbClusterEndpointMessage#StaticMembers
   */
  readonly staticMembers?: string[];

  /**
   * @schema CreateDbClusterEndpointMessage#ExcludedMembers
   */
  readonly excludedMembers?: string[];

  /**
   * @schema CreateDbClusterEndpointMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema DbClusterEndpoint
 */
export interface DbClusterEndpoint {
  /**
   * @schema DbClusterEndpoint#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier?: string;

  /**
   * @schema DbClusterEndpoint#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DbClusterEndpoint#DBClusterEndpointResourceIdentifier
   */
  readonly dbClusterEndpointResourceIdentifier?: string;

  /**
   * @schema DbClusterEndpoint#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema DbClusterEndpoint#Status
   */
  readonly status?: string;

  /**
   * @schema DbClusterEndpoint#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema DbClusterEndpoint#CustomEndpointType
   */
  readonly customEndpointType?: string;

  /**
   * @schema DbClusterEndpoint#StaticMembers
   */
  readonly staticMembers?: string[];

  /**
   * @schema DbClusterEndpoint#ExcludedMembers
   */
  readonly excludedMembers?: string[];

  /**
   * @schema DbClusterEndpoint#DBClusterEndpointArn
   */
  readonly dbClusterEndpointArn?: string;

}

/**
 * @schema CreateDbClusterParameterGroupMessage
 */
export interface CreateDbClusterParameterGroupMessage {
  /**
   * @schema CreateDbClusterParameterGroupMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName: string;

  /**
   * @schema CreateDbClusterParameterGroupMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily: string;

  /**
   * @schema CreateDbClusterParameterGroupMessage#Description
   */
  readonly description: string;

  /**
   * @schema CreateDbClusterParameterGroupMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateDbClusterParameterGroupResult
 */
export interface CreateDbClusterParameterGroupResult {
  /**
   * @schema CreateDbClusterParameterGroupResult#DBClusterParameterGroup
   */
  readonly dbClusterParameterGroup?: DbClusterParameterGroup;

}

/**
 * @schema CreateDbClusterSnapshotMessage
 */
export interface CreateDbClusterSnapshotMessage {
  /**
   * @schema CreateDbClusterSnapshotMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier: string;

  /**
   * @schema CreateDbClusterSnapshotMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema CreateDbClusterSnapshotMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateDbClusterSnapshotResult
 */
export interface CreateDbClusterSnapshotResult {
  /**
   * @schema CreateDbClusterSnapshotResult#DBClusterSnapshot
   */
  readonly dbClusterSnapshot?: DbClusterSnapshot;

}

/**
 * @schema CreateDbInstanceMessage
 */
export interface CreateDbInstanceMessage {
  /**
   * @schema CreateDbInstanceMessage#DBName
   */
  readonly dbName?: string;

  /**
   * @schema CreateDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema CreateDbInstanceMessage#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema CreateDbInstanceMessage#DBInstanceClass
   */
  readonly dbInstanceClass: string;

  /**
   * @schema CreateDbInstanceMessage#Engine
   */
  readonly engine: string;

  /**
   * @schema CreateDbInstanceMessage#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema CreateDbInstanceMessage#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema CreateDbInstanceMessage#DBSecurityGroups
   */
  readonly dbSecurityGroups?: string[];

  /**
   * @schema CreateDbInstanceMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema CreateDbInstanceMessage#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema CreateDbInstanceMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema CreateDbInstanceMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema CreateDbInstanceMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema CreateDbInstanceMessage#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema CreateDbInstanceMessage#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema CreateDbInstanceMessage#Port
   */
  readonly port?: number;

  /**
   * @schema CreateDbInstanceMessage#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema CreateDbInstanceMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema CreateDbInstanceMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema CreateDbInstanceMessage#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema CreateDbInstanceMessage#Iops
   */
  readonly iops?: number;

  /**
   * @schema CreateDbInstanceMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema CreateDbInstanceMessage#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema CreateDbInstanceMessage#NcharCharacterSetName
   */
  readonly ncharCharacterSetName?: string;

  /**
   * @schema CreateDbInstanceMessage#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema CreateDbInstanceMessage#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateDbInstanceMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema CreateDbInstanceMessage#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema CreateDbInstanceMessage#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema CreateDbInstanceMessage#TdeCredentialPassword
   */
  readonly tdeCredentialPassword?: string;

  /**
   * @schema CreateDbInstanceMessage#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema CreateDbInstanceMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema CreateDbInstanceMessage#Domain
   */
  readonly domain?: string;

  /**
   * @schema CreateDbInstanceMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema CreateDbInstanceMessage#MonitoringInterval
   */
  readonly monitoringInterval?: number;

  /**
   * @schema CreateDbInstanceMessage#MonitoringRoleArn
   */
  readonly monitoringRoleArn?: string;

  /**
   * @schema CreateDbInstanceMessage#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

  /**
   * @schema CreateDbInstanceMessage#PromotionTier
   */
  readonly promotionTier?: number;

  /**
   * @schema CreateDbInstanceMessage#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema CreateDbInstanceMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema CreateDbInstanceMessage#EnablePerformanceInsights
   */
  readonly enablePerformanceInsights?: boolean;

  /**
   * @schema CreateDbInstanceMessage#PerformanceInsightsKMSKeyId
   */
  readonly performanceInsightsKmsKeyId?: string;

  /**
   * @schema CreateDbInstanceMessage#PerformanceInsightsRetentionPeriod
   */
  readonly performanceInsightsRetentionPeriod?: number;

  /**
   * @schema CreateDbInstanceMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema CreateDbInstanceMessage#ProcessorFeatures
   */
  readonly processorFeatures?: ProcessorFeature[];

  /**
   * @schema CreateDbInstanceMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema CreateDbInstanceMessage#MaxAllocatedStorage
   */
  readonly maxAllocatedStorage?: number;

}

/**
 * @schema CreateDbInstanceResult
 */
export interface CreateDbInstanceResult {
  /**
   * @schema CreateDbInstanceResult#DBInstance
   */
  readonly dbInstance?: DbInstance;

}

/**
 * @schema CreateDbInstanceReadReplicaMessage
 */
export interface CreateDbInstanceReadReplicaMessage {
  /**
   * @schema CreateDbInstanceReadReplicaMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema CreateDbInstanceReadReplicaMessage#SourceDBInstanceIdentifier
   */
  readonly sourceDbInstanceIdentifier: string;

  /**
   * @schema CreateDbInstanceReadReplicaMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema CreateDbInstanceReadReplicaMessage#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema CreateDbInstanceReadReplicaMessage#Port
   */
  readonly port?: number;

  /**
   * @schema CreateDbInstanceReadReplicaMessage#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema CreateDbInstanceReadReplicaMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema CreateDbInstanceReadReplicaMessage#Iops
   */
  readonly iops?: number;

  /**
   * @schema CreateDbInstanceReadReplicaMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema CreateDbInstanceReadReplicaMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema CreateDbInstanceReadReplicaMessage#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema CreateDbInstanceReadReplicaMessage#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateDbInstanceReadReplicaMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema CreateDbInstanceReadReplicaMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema CreateDbInstanceReadReplicaMessage#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema CreateDbInstanceReadReplicaMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema CreateDbInstanceReadReplicaMessage#MonitoringInterval
   */
  readonly monitoringInterval?: number;

  /**
   * @schema CreateDbInstanceReadReplicaMessage#MonitoringRoleArn
   */
  readonly monitoringRoleArn?: string;

  /**
   * @schema CreateDbInstanceReadReplicaMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema CreateDbInstanceReadReplicaMessage#PreSignedUrl
   */
  readonly preSignedUrl?: string;

  /**
   * @schema CreateDbInstanceReadReplicaMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema CreateDbInstanceReadReplicaMessage#EnablePerformanceInsights
   */
  readonly enablePerformanceInsights?: boolean;

  /**
   * @schema CreateDbInstanceReadReplicaMessage#PerformanceInsightsKMSKeyId
   */
  readonly performanceInsightsKmsKeyId?: string;

  /**
   * @schema CreateDbInstanceReadReplicaMessage#PerformanceInsightsRetentionPeriod
   */
  readonly performanceInsightsRetentionPeriod?: number;

  /**
   * @schema CreateDbInstanceReadReplicaMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema CreateDbInstanceReadReplicaMessage#ProcessorFeatures
   */
  readonly processorFeatures?: ProcessorFeature[];

  /**
   * @schema CreateDbInstanceReadReplicaMessage#UseDefaultProcessorFeatures
   */
  readonly useDefaultProcessorFeatures?: boolean;

  /**
   * @schema CreateDbInstanceReadReplicaMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema CreateDbInstanceReadReplicaMessage#Domain
   */
  readonly domain?: string;

  /**
   * @schema CreateDbInstanceReadReplicaMessage#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

  /**
   * @schema CreateDbInstanceReadReplicaMessage#ReplicaMode
   */
  readonly replicaMode?: string;

  /**
   * @schema CreateDbInstanceReadReplicaMessage#MaxAllocatedStorage
   */
  readonly maxAllocatedStorage?: number;

  /**
   * @schema CreateDbInstanceReadReplicaMessage#SourceRegion
   */
  readonly sourceRegion?: string;

}

/**
 * @schema CreateDbInstanceReadReplicaResult
 */
export interface CreateDbInstanceReadReplicaResult {
  /**
   * @schema CreateDbInstanceReadReplicaResult#DBInstance
   */
  readonly dbInstance?: DbInstance;

}

/**
 * @schema CreateDbParameterGroupMessage
 */
export interface CreateDbParameterGroupMessage {
  /**
   * @schema CreateDbParameterGroupMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName: string;

  /**
   * @schema CreateDbParameterGroupMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily: string;

  /**
   * @schema CreateDbParameterGroupMessage#Description
   */
  readonly description: string;

  /**
   * @schema CreateDbParameterGroupMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateDbParameterGroupResult
 */
export interface CreateDbParameterGroupResult {
  /**
   * @schema CreateDbParameterGroupResult#DBParameterGroup
   */
  readonly dbParameterGroup?: DbParameterGroup;

}

/**
 * @schema CreateDbProxyRequest
 */
export interface CreateDbProxyRequest {
  /**
   * @schema CreateDbProxyRequest#DBProxyName
   */
  readonly dbProxyName: string;

  /**
   * @schema CreateDbProxyRequest#EngineFamily
   */
  readonly engineFamily: string;

  /**
   * @schema CreateDbProxyRequest#Auth
   */
  readonly auth: UserAuthConfig[];

  /**
   * @schema CreateDbProxyRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema CreateDbProxyRequest#VpcSubnetIds
   */
  readonly vpcSubnetIds: string[];

  /**
   * @schema CreateDbProxyRequest#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema CreateDbProxyRequest#RequireTLS
   */
  readonly requireTls?: boolean;

  /**
   * @schema CreateDbProxyRequest#IdleClientTimeout
   */
  readonly idleClientTimeout?: number;

  /**
   * @schema CreateDbProxyRequest#DebugLogging
   */
  readonly debugLogging?: boolean;

  /**
   * @schema CreateDbProxyRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateDbProxyResponse
 */
export interface CreateDbProxyResponse {
  /**
   * @schema CreateDbProxyResponse#DBProxy
   */
  readonly dbProxy?: DbProxy;

}

/**
 * @schema CreateDbSecurityGroupMessage
 */
export interface CreateDbSecurityGroupMessage {
  /**
   * @schema CreateDbSecurityGroupMessage#DBSecurityGroupName
   */
  readonly dbSecurityGroupName: string;

  /**
   * @schema CreateDbSecurityGroupMessage#DBSecurityGroupDescription
   */
  readonly dbSecurityGroupDescription: string;

  /**
   * @schema CreateDbSecurityGroupMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateDbSecurityGroupResult
 */
export interface CreateDbSecurityGroupResult {
  /**
   * @schema CreateDbSecurityGroupResult#DBSecurityGroup
   */
  readonly dbSecurityGroup?: DbSecurityGroup;

}

/**
 * @schema CreateDbSnapshotMessage
 */
export interface CreateDbSnapshotMessage {
  /**
   * @schema CreateDbSnapshotMessage#DBSnapshotIdentifier
   */
  readonly dbSnapshotIdentifier: string;

  /**
   * @schema CreateDbSnapshotMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema CreateDbSnapshotMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateDbSnapshotResult
 */
export interface CreateDbSnapshotResult {
  /**
   * @schema CreateDbSnapshotResult#DBSnapshot
   */
  readonly dbSnapshot?: DbSnapshot;

}

/**
 * @schema CreateDbSubnetGroupMessage
 */
export interface CreateDbSubnetGroupMessage {
  /**
   * @schema CreateDbSubnetGroupMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName: string;

  /**
   * @schema CreateDbSubnetGroupMessage#DBSubnetGroupDescription
   */
  readonly dbSubnetGroupDescription: string;

  /**
   * @schema CreateDbSubnetGroupMessage#SubnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema CreateDbSubnetGroupMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateDbSubnetGroupResult
 */
export interface CreateDbSubnetGroupResult {
  /**
   * @schema CreateDbSubnetGroupResult#DBSubnetGroup
   */
  readonly dbSubnetGroup?: DbSubnetGroup;

}

/**
 * @schema CreateEventSubscriptionMessage
 */
export interface CreateEventSubscriptionMessage {
  /**
   * @schema CreateEventSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName: string;

  /**
   * @schema CreateEventSubscriptionMessage#SnsTopicArn
   */
  readonly snsTopicArn: string;

  /**
   * @schema CreateEventSubscriptionMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema CreateEventSubscriptionMessage#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema CreateEventSubscriptionMessage#SourceIds
   */
  readonly sourceIds?: string[];

  /**
   * @schema CreateEventSubscriptionMessage#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema CreateEventSubscriptionMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateEventSubscriptionResult
 */
export interface CreateEventSubscriptionResult {
  /**
   * @schema CreateEventSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: EventSubscription;

}

/**
 * @schema CreateGlobalClusterMessage
 */
export interface CreateGlobalClusterMessage {
  /**
   * @schema CreateGlobalClusterMessage#GlobalClusterIdentifier
   */
  readonly globalClusterIdentifier?: string;

  /**
   * @schema CreateGlobalClusterMessage#SourceDBClusterIdentifier
   */
  readonly sourceDbClusterIdentifier?: string;

  /**
   * @schema CreateGlobalClusterMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema CreateGlobalClusterMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema CreateGlobalClusterMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema CreateGlobalClusterMessage#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema CreateGlobalClusterMessage#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

}

/**
 * @schema CreateGlobalClusterResult
 */
export interface CreateGlobalClusterResult {
  /**
   * @schema CreateGlobalClusterResult#GlobalCluster
   */
  readonly globalCluster?: GlobalCluster;

}

/**
 * @schema CreateOptionGroupMessage
 */
export interface CreateOptionGroupMessage {
  /**
   * @schema CreateOptionGroupMessage#OptionGroupName
   */
  readonly optionGroupName: string;

  /**
   * @schema CreateOptionGroupMessage#EngineName
   */
  readonly engineName: string;

  /**
   * @schema CreateOptionGroupMessage#MajorEngineVersion
   */
  readonly majorEngineVersion: string;

  /**
   * @schema CreateOptionGroupMessage#OptionGroupDescription
   */
  readonly optionGroupDescription: string;

  /**
   * @schema CreateOptionGroupMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateOptionGroupResult
 */
export interface CreateOptionGroupResult {
  /**
   * @schema CreateOptionGroupResult#OptionGroup
   */
  readonly optionGroup?: OptionGroup;

}

/**
 * @schema DeleteCustomAvailabilityZoneMessage
 */
export interface DeleteCustomAvailabilityZoneMessage {
  /**
   * @schema DeleteCustomAvailabilityZoneMessage#CustomAvailabilityZoneId
   */
  readonly customAvailabilityZoneId: string;

}

/**
 * @schema DeleteCustomAvailabilityZoneResult
 */
export interface DeleteCustomAvailabilityZoneResult {
  /**
   * @schema DeleteCustomAvailabilityZoneResult#CustomAvailabilityZone
   */
  readonly customAvailabilityZone?: CustomAvailabilityZone;

}

/**
 * @schema DeleteDbClusterMessage
 */
export interface DeleteDbClusterMessage {
  /**
   * @schema DeleteDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema DeleteDbClusterMessage#SkipFinalSnapshot
   */
  readonly skipFinalSnapshot?: boolean;

  /**
   * @schema DeleteDbClusterMessage#FinalDBSnapshotIdentifier
   */
  readonly finalDbSnapshotIdentifier?: string;

}

/**
 * @schema DeleteDbClusterResult
 */
export interface DeleteDbClusterResult {
  /**
   * @schema DeleteDbClusterResult#DBCluster
   */
  readonly dbCluster?: DbCluster;

}

/**
 * @schema DeleteDbClusterEndpointMessage
 */
export interface DeleteDbClusterEndpointMessage {
  /**
   * @schema DeleteDbClusterEndpointMessage#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier: string;

}

/**
 * @schema DeleteDbClusterParameterGroupMessage
 */
export interface DeleteDbClusterParameterGroupMessage {
  /**
   * @schema DeleteDbClusterParameterGroupMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName: string;

}

/**
 * @schema DeleteDbClusterSnapshotMessage
 */
export interface DeleteDbClusterSnapshotMessage {
  /**
   * @schema DeleteDbClusterSnapshotMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier: string;

}

/**
 * @schema DeleteDbClusterSnapshotResult
 */
export interface DeleteDbClusterSnapshotResult {
  /**
   * @schema DeleteDbClusterSnapshotResult#DBClusterSnapshot
   */
  readonly dbClusterSnapshot?: DbClusterSnapshot;

}

/**
 * @schema DeleteDbInstanceMessage
 */
export interface DeleteDbInstanceMessage {
  /**
   * @schema DeleteDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema DeleteDbInstanceMessage#SkipFinalSnapshot
   */
  readonly skipFinalSnapshot?: boolean;

  /**
   * @schema DeleteDbInstanceMessage#FinalDBSnapshotIdentifier
   */
  readonly finalDbSnapshotIdentifier?: string;

  /**
   * @schema DeleteDbInstanceMessage#DeleteAutomatedBackups
   */
  readonly deleteAutomatedBackups?: boolean;

}

/**
 * @schema DeleteDbInstanceResult
 */
export interface DeleteDbInstanceResult {
  /**
   * @schema DeleteDbInstanceResult#DBInstance
   */
  readonly dbInstance?: DbInstance;

}

/**
 * @schema DeleteDbInstanceAutomatedBackupMessage
 */
export interface DeleteDbInstanceAutomatedBackupMessage {
  /**
   * @schema DeleteDbInstanceAutomatedBackupMessage#DbiResourceId
   */
  readonly dbiResourceId: string;

}

/**
 * @schema DeleteDbInstanceAutomatedBackupResult
 */
export interface DeleteDbInstanceAutomatedBackupResult {
  /**
   * @schema DeleteDbInstanceAutomatedBackupResult#DBInstanceAutomatedBackup
   */
  readonly dbInstanceAutomatedBackup?: DbInstanceAutomatedBackup;

}

/**
 * @schema DeleteDbParameterGroupMessage
 */
export interface DeleteDbParameterGroupMessage {
  /**
   * @schema DeleteDbParameterGroupMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName: string;

}

/**
 * @schema DeleteDbProxyRequest
 */
export interface DeleteDbProxyRequest {
  /**
   * @schema DeleteDbProxyRequest#DBProxyName
   */
  readonly dbProxyName: string;

}

/**
 * @schema DeleteDbProxyResponse
 */
export interface DeleteDbProxyResponse {
  /**
   * @schema DeleteDbProxyResponse#DBProxy
   */
  readonly dbProxy?: DbProxy;

}

/**
 * @schema DeleteDbSecurityGroupMessage
 */
export interface DeleteDbSecurityGroupMessage {
  /**
   * @schema DeleteDbSecurityGroupMessage#DBSecurityGroupName
   */
  readonly dbSecurityGroupName: string;

}

/**
 * @schema DeleteDbSnapshotMessage
 */
export interface DeleteDbSnapshotMessage {
  /**
   * @schema DeleteDbSnapshotMessage#DBSnapshotIdentifier
   */
  readonly dbSnapshotIdentifier: string;

}

/**
 * @schema DeleteDbSnapshotResult
 */
export interface DeleteDbSnapshotResult {
  /**
   * @schema DeleteDbSnapshotResult#DBSnapshot
   */
  readonly dbSnapshot?: DbSnapshot;

}

/**
 * @schema DeleteDbSubnetGroupMessage
 */
export interface DeleteDbSubnetGroupMessage {
  /**
   * @schema DeleteDbSubnetGroupMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName: string;

}

/**
 * @schema DeleteEventSubscriptionMessage
 */
export interface DeleteEventSubscriptionMessage {
  /**
   * @schema DeleteEventSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName: string;

}

/**
 * @schema DeleteEventSubscriptionResult
 */
export interface DeleteEventSubscriptionResult {
  /**
   * @schema DeleteEventSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: EventSubscription;

}

/**
 * @schema DeleteGlobalClusterMessage
 */
export interface DeleteGlobalClusterMessage {
  /**
   * @schema DeleteGlobalClusterMessage#GlobalClusterIdentifier
   */
  readonly globalClusterIdentifier: string;

}

/**
 * @schema DeleteGlobalClusterResult
 */
export interface DeleteGlobalClusterResult {
  /**
   * @schema DeleteGlobalClusterResult#GlobalCluster
   */
  readonly globalCluster?: GlobalCluster;

}

/**
 * @schema DeleteInstallationMediaMessage
 */
export interface DeleteInstallationMediaMessage {
  /**
   * @schema DeleteInstallationMediaMessage#InstallationMediaId
   */
  readonly installationMediaId: string;

}

/**
 * @schema InstallationMedia
 */
export interface InstallationMedia {
  /**
   * @schema InstallationMedia#InstallationMediaId
   */
  readonly installationMediaId?: string;

  /**
   * @schema InstallationMedia#CustomAvailabilityZoneId
   */
  readonly customAvailabilityZoneId?: string;

  /**
   * @schema InstallationMedia#Engine
   */
  readonly engine?: string;

  /**
   * @schema InstallationMedia#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema InstallationMedia#EngineInstallationMediaPath
   */
  readonly engineInstallationMediaPath?: string;

  /**
   * @schema InstallationMedia#OSInstallationMediaPath
   */
  readonly osInstallationMediaPath?: string;

  /**
   * @schema InstallationMedia#Status
   */
  readonly status?: string;

  /**
   * @schema InstallationMedia#FailureCause
   */
  readonly failureCause?: InstallationMediaFailureCause;

}

/**
 * @schema DeleteOptionGroupMessage
 */
export interface DeleteOptionGroupMessage {
  /**
   * @schema DeleteOptionGroupMessage#OptionGroupName
   */
  readonly optionGroupName: string;

}

/**
 * @schema DeregisterDbProxyTargetsRequest
 */
export interface DeregisterDbProxyTargetsRequest {
  /**
   * @schema DeregisterDbProxyTargetsRequest#DBProxyName
   */
  readonly dbProxyName: string;

  /**
   * @schema DeregisterDbProxyTargetsRequest#TargetGroupName
   */
  readonly targetGroupName?: string;

  /**
   * @schema DeregisterDbProxyTargetsRequest#DBInstanceIdentifiers
   */
  readonly dbInstanceIdentifiers?: string[];

  /**
   * @schema DeregisterDbProxyTargetsRequest#DBClusterIdentifiers
   */
  readonly dbClusterIdentifiers?: string[];

}

/**
 * @schema DeregisterDbProxyTargetsResponse
 */
export interface DeregisterDbProxyTargetsResponse {
}

/**
 * @schema DescribeAccountAttributesMessage
 */
export interface DescribeAccountAttributesMessage {
}

/**
 * @schema AccountAttributesMessage
 */
export interface AccountAttributesMessage {
  /**
   * @schema AccountAttributesMessage#AccountQuotas
   */
  readonly accountQuotas?: AccountQuota[];

}

/**
 * @schema DescribeCertificatesMessage
 */
export interface DescribeCertificatesMessage {
  /**
   * @schema DescribeCertificatesMessage#CertificateIdentifier
   */
  readonly certificateIdentifier?: string;

  /**
   * @schema DescribeCertificatesMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeCertificatesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeCertificatesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema CertificateMessage
 */
export interface CertificateMessage {
  /**
   * @schema CertificateMessage#Certificates
   */
  readonly certificates?: Certificate[];

  /**
   * @schema CertificateMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeCustomAvailabilityZonesMessage
 */
export interface DescribeCustomAvailabilityZonesMessage {
  /**
   * @schema DescribeCustomAvailabilityZonesMessage#CustomAvailabilityZoneId
   */
  readonly customAvailabilityZoneId?: string;

  /**
   * @schema DescribeCustomAvailabilityZonesMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeCustomAvailabilityZonesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeCustomAvailabilityZonesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema CustomAvailabilityZoneMessage
 */
export interface CustomAvailabilityZoneMessage {
  /**
   * @schema CustomAvailabilityZoneMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema CustomAvailabilityZoneMessage#CustomAvailabilityZones
   */
  readonly customAvailabilityZones?: CustomAvailabilityZone[];

}

/**
 * @schema DescribeDbClusterBacktracksMessage
 */
export interface DescribeDbClusterBacktracksMessage {
  /**
   * @schema DescribeDbClusterBacktracksMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema DescribeDbClusterBacktracksMessage#BacktrackIdentifier
   */
  readonly backtrackIdentifier?: string;

  /**
   * @schema DescribeDbClusterBacktracksMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeDbClusterBacktracksMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeDbClusterBacktracksMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DbClusterBacktrackMessage
 */
export interface DbClusterBacktrackMessage {
  /**
   * @schema DbClusterBacktrackMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DbClusterBacktrackMessage#DBClusterBacktracks
   */
  readonly dbClusterBacktracks?: DbClusterBacktrack[];

}

/**
 * @schema DescribeDbClusterEndpointsMessage
 */
export interface DescribeDbClusterEndpointsMessage {
  /**
   * @schema DescribeDbClusterEndpointsMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DescribeDbClusterEndpointsMessage#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier?: string;

  /**
   * @schema DescribeDbClusterEndpointsMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeDbClusterEndpointsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeDbClusterEndpointsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DbClusterEndpointMessage
 */
export interface DbClusterEndpointMessage {
  /**
   * @schema DbClusterEndpointMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DbClusterEndpointMessage#DBClusterEndpoints
   */
  readonly dbClusterEndpoints?: DbClusterEndpoint[];

}

/**
 * @schema DescribeDbClusterParameterGroupsMessage
 */
export interface DescribeDbClusterParameterGroupsMessage {
  /**
   * @schema DescribeDbClusterParameterGroupsMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema DescribeDbClusterParameterGroupsMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeDbClusterParameterGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeDbClusterParameterGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DbClusterParameterGroupsMessage
 */
export interface DbClusterParameterGroupsMessage {
  /**
   * @schema DbClusterParameterGroupsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DbClusterParameterGroupsMessage#DBClusterParameterGroups
   */
  readonly dbClusterParameterGroups?: DbClusterParameterGroup[];

}

/**
 * @schema DescribeDbClusterParametersMessage
 */
export interface DescribeDbClusterParametersMessage {
  /**
   * @schema DescribeDbClusterParametersMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName: string;

  /**
   * @schema DescribeDbClusterParametersMessage#Source
   */
  readonly source?: string;

  /**
   * @schema DescribeDbClusterParametersMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeDbClusterParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeDbClusterParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DbClusterParameterGroupDetails
 */
export interface DbClusterParameterGroupDetails {
  /**
   * @schema DbClusterParameterGroupDetails#Parameters
   */
  readonly parameters?: Parameter[];

  /**
   * @schema DbClusterParameterGroupDetails#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeDbClusterSnapshotAttributesMessage
 */
export interface DescribeDbClusterSnapshotAttributesMessage {
  /**
   * @schema DescribeDbClusterSnapshotAttributesMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier: string;

}

/**
 * @schema DescribeDbClusterSnapshotAttributesResult
 */
export interface DescribeDbClusterSnapshotAttributesResult {
  /**
   * @schema DescribeDbClusterSnapshotAttributesResult#DBClusterSnapshotAttributesResult
   */
  readonly dbClusterSnapshotAttributesResult?: DbClusterSnapshotAttributesResult;

}

/**
 * @schema DescribeDbClusterSnapshotsMessage
 */
export interface DescribeDbClusterSnapshotsMessage {
  /**
   * @schema DescribeDbClusterSnapshotsMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DescribeDbClusterSnapshotsMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

  /**
   * @schema DescribeDbClusterSnapshotsMessage#SnapshotType
   */
  readonly snapshotType?: string;

  /**
   * @schema DescribeDbClusterSnapshotsMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeDbClusterSnapshotsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeDbClusterSnapshotsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeDbClusterSnapshotsMessage#IncludeShared
   */
  readonly includeShared?: boolean;

  /**
   * @schema DescribeDbClusterSnapshotsMessage#IncludePublic
   */
  readonly includePublic?: boolean;

}

/**
 * @schema DbClusterSnapshotMessage
 */
export interface DbClusterSnapshotMessage {
  /**
   * @schema DbClusterSnapshotMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DbClusterSnapshotMessage#DBClusterSnapshots
   */
  readonly dbClusterSnapshots?: DbClusterSnapshot[];

}

/**
 * @schema DescribeDbClustersMessage
 */
export interface DescribeDbClustersMessage {
  /**
   * @schema DescribeDbClustersMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DescribeDbClustersMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeDbClustersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeDbClustersMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeDbClustersMessage#IncludeShared
   */
  readonly includeShared?: boolean;

}

/**
 * @schema DbClusterMessage
 */
export interface DbClusterMessage {
  /**
   * @schema DbClusterMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DbClusterMessage#DBClusters
   */
  readonly dbClusters?: DbCluster[];

}

/**
 * @schema DescribeDbEngineVersionsMessage
 */
export interface DescribeDbEngineVersionsMessage {
  /**
   * @schema DescribeDbEngineVersionsMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema DescribeDbEngineVersionsMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DescribeDbEngineVersionsMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema DescribeDbEngineVersionsMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeDbEngineVersionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeDbEngineVersionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeDbEngineVersionsMessage#DefaultOnly
   */
  readonly defaultOnly?: boolean;

  /**
   * @schema DescribeDbEngineVersionsMessage#ListSupportedCharacterSets
   */
  readonly listSupportedCharacterSets?: boolean;

  /**
   * @schema DescribeDbEngineVersionsMessage#ListSupportedTimezones
   */
  readonly listSupportedTimezones?: boolean;

  /**
   * @schema DescribeDbEngineVersionsMessage#IncludeAll
   */
  readonly includeAll?: boolean;

}

/**
 * @schema DbEngineVersionMessage
 */
export interface DbEngineVersionMessage {
  /**
   * @schema DbEngineVersionMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DbEngineVersionMessage#DBEngineVersions
   */
  readonly dbEngineVersions?: DbEngineVersion[];

}

/**
 * @schema DescribeDbInstanceAutomatedBackupsMessage
 */
export interface DescribeDbInstanceAutomatedBackupsMessage {
  /**
   * @schema DescribeDbInstanceAutomatedBackupsMessage#DbiResourceId
   */
  readonly dbiResourceId?: string;

  /**
   * @schema DescribeDbInstanceAutomatedBackupsMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema DescribeDbInstanceAutomatedBackupsMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeDbInstanceAutomatedBackupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeDbInstanceAutomatedBackupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DbInstanceAutomatedBackupMessage
 */
export interface DbInstanceAutomatedBackupMessage {
  /**
   * @schema DbInstanceAutomatedBackupMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DbInstanceAutomatedBackupMessage#DBInstanceAutomatedBackups
   */
  readonly dbInstanceAutomatedBackups?: DbInstanceAutomatedBackup[];

}

/**
 * @schema DescribeDbInstancesMessage
 */
export interface DescribeDbInstancesMessage {
  /**
   * @schema DescribeDbInstancesMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema DescribeDbInstancesMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeDbInstancesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeDbInstancesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DbInstanceMessage
 */
export interface DbInstanceMessage {
  /**
   * @schema DbInstanceMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DbInstanceMessage#DBInstances
   */
  readonly dbInstances?: DbInstance[];

}

/**
 * @schema DescribeDbLogFilesMessage
 */
export interface DescribeDbLogFilesMessage {
  /**
   * @schema DescribeDbLogFilesMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema DescribeDbLogFilesMessage#FilenameContains
   */
  readonly filenameContains?: string;

  /**
   * @schema DescribeDbLogFilesMessage#FileLastWritten
   */
  readonly fileLastWritten?: number;

  /**
   * @schema DescribeDbLogFilesMessage#FileSize
   */
  readonly fileSize?: number;

  /**
   * @schema DescribeDbLogFilesMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeDbLogFilesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeDbLogFilesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeDbLogFilesResponse
 */
export interface DescribeDbLogFilesResponse {
  /**
   * @schema DescribeDbLogFilesResponse#DescribeDBLogFiles
   */
  readonly describeDbLogFiles?: DescribeDbLogFilesDetails[];

  /**
   * @schema DescribeDbLogFilesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeDbParameterGroupsMessage
 */
export interface DescribeDbParameterGroupsMessage {
  /**
   * @schema DescribeDbParameterGroupsMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema DescribeDbParameterGroupsMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeDbParameterGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeDbParameterGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DbParameterGroupsMessage
 */
export interface DbParameterGroupsMessage {
  /**
   * @schema DbParameterGroupsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DbParameterGroupsMessage#DBParameterGroups
   */
  readonly dbParameterGroups?: DbParameterGroup[];

}

/**
 * @schema DescribeDbParametersMessage
 */
export interface DescribeDbParametersMessage {
  /**
   * @schema DescribeDbParametersMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName: string;

  /**
   * @schema DescribeDbParametersMessage#Source
   */
  readonly source?: string;

  /**
   * @schema DescribeDbParametersMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeDbParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeDbParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DbParameterGroupDetails
 */
export interface DbParameterGroupDetails {
  /**
   * @schema DbParameterGroupDetails#Parameters
   */
  readonly parameters?: Parameter[];

  /**
   * @schema DbParameterGroupDetails#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeDbProxiesRequest
 */
export interface DescribeDbProxiesRequest {
  /**
   * @schema DescribeDbProxiesRequest#DBProxyName
   */
  readonly dbProxyName?: string;

  /**
   * @schema DescribeDbProxiesRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeDbProxiesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeDbProxiesRequest#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema DescribeDbProxiesResponse
 */
export interface DescribeDbProxiesResponse {
  /**
   * @schema DescribeDbProxiesResponse#DBProxies
   */
  readonly dbProxies?: DbProxy[];

  /**
   * @schema DescribeDbProxiesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeDbProxyTargetGroupsRequest
 */
export interface DescribeDbProxyTargetGroupsRequest {
  /**
   * @schema DescribeDbProxyTargetGroupsRequest#DBProxyName
   */
  readonly dbProxyName: string;

  /**
   * @schema DescribeDbProxyTargetGroupsRequest#TargetGroupName
   */
  readonly targetGroupName?: string;

  /**
   * @schema DescribeDbProxyTargetGroupsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeDbProxyTargetGroupsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeDbProxyTargetGroupsRequest#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema DescribeDbProxyTargetGroupsResponse
 */
export interface DescribeDbProxyTargetGroupsResponse {
  /**
   * @schema DescribeDbProxyTargetGroupsResponse#TargetGroups
   */
  readonly targetGroups?: DbProxyTargetGroup[];

  /**
   * @schema DescribeDbProxyTargetGroupsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeDbProxyTargetsRequest
 */
export interface DescribeDbProxyTargetsRequest {
  /**
   * @schema DescribeDbProxyTargetsRequest#DBProxyName
   */
  readonly dbProxyName: string;

  /**
   * @schema DescribeDbProxyTargetsRequest#TargetGroupName
   */
  readonly targetGroupName?: string;

  /**
   * @schema DescribeDbProxyTargetsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeDbProxyTargetsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeDbProxyTargetsRequest#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema DescribeDbProxyTargetsResponse
 */
export interface DescribeDbProxyTargetsResponse {
  /**
   * @schema DescribeDbProxyTargetsResponse#Targets
   */
  readonly targets?: DbProxyTarget[];

  /**
   * @schema DescribeDbProxyTargetsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeDbSecurityGroupsMessage
 */
export interface DescribeDbSecurityGroupsMessage {
  /**
   * @schema DescribeDbSecurityGroupsMessage#DBSecurityGroupName
   */
  readonly dbSecurityGroupName?: string;

  /**
   * @schema DescribeDbSecurityGroupsMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeDbSecurityGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeDbSecurityGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DbSecurityGroupMessage
 */
export interface DbSecurityGroupMessage {
  /**
   * @schema DbSecurityGroupMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DbSecurityGroupMessage#DBSecurityGroups
   */
  readonly dbSecurityGroups?: DbSecurityGroup[];

}

/**
 * @schema DescribeDbSnapshotAttributesMessage
 */
export interface DescribeDbSnapshotAttributesMessage {
  /**
   * @schema DescribeDbSnapshotAttributesMessage#DBSnapshotIdentifier
   */
  readonly dbSnapshotIdentifier: string;

}

/**
 * @schema DescribeDbSnapshotAttributesResult
 */
export interface DescribeDbSnapshotAttributesResult {
  /**
   * @schema DescribeDbSnapshotAttributesResult#DBSnapshotAttributesResult
   */
  readonly dbSnapshotAttributesResult?: DbSnapshotAttributesResult;

}

/**
 * @schema DescribeDbSnapshotsMessage
 */
export interface DescribeDbSnapshotsMessage {
  /**
   * @schema DescribeDbSnapshotsMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema DescribeDbSnapshotsMessage#DBSnapshotIdentifier
   */
  readonly dbSnapshotIdentifier?: string;

  /**
   * @schema DescribeDbSnapshotsMessage#SnapshotType
   */
  readonly snapshotType?: string;

  /**
   * @schema DescribeDbSnapshotsMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeDbSnapshotsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeDbSnapshotsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeDbSnapshotsMessage#IncludeShared
   */
  readonly includeShared?: boolean;

  /**
   * @schema DescribeDbSnapshotsMessage#IncludePublic
   */
  readonly includePublic?: boolean;

  /**
   * @schema DescribeDbSnapshotsMessage#DbiResourceId
   */
  readonly dbiResourceId?: string;

}

/**
 * @schema DbSnapshotMessage
 */
export interface DbSnapshotMessage {
  /**
   * @schema DbSnapshotMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DbSnapshotMessage#DBSnapshots
   */
  readonly dbSnapshots?: DbSnapshot[];

}

/**
 * @schema DescribeDbSubnetGroupsMessage
 */
export interface DescribeDbSubnetGroupsMessage {
  /**
   * @schema DescribeDbSubnetGroupsMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema DescribeDbSubnetGroupsMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeDbSubnetGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeDbSubnetGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DbSubnetGroupMessage
 */
export interface DbSubnetGroupMessage {
  /**
   * @schema DbSubnetGroupMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DbSubnetGroupMessage#DBSubnetGroups
   */
  readonly dbSubnetGroups?: DbSubnetGroup[];

}

/**
 * @schema DescribeEngineDefaultClusterParametersMessage
 */
export interface DescribeEngineDefaultClusterParametersMessage {
  /**
   * @schema DescribeEngineDefaultClusterParametersMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily: string;

  /**
   * @schema DescribeEngineDefaultClusterParametersMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeEngineDefaultClusterParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeEngineDefaultClusterParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeEngineDefaultClusterParametersResult
 */
export interface DescribeEngineDefaultClusterParametersResult {
  /**
   * @schema DescribeEngineDefaultClusterParametersResult#EngineDefaults
   */
  readonly engineDefaults?: EngineDefaults;

}

/**
 * @schema DescribeEngineDefaultParametersMessage
 */
export interface DescribeEngineDefaultParametersMessage {
  /**
   * @schema DescribeEngineDefaultParametersMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily: string;

  /**
   * @schema DescribeEngineDefaultParametersMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeEngineDefaultParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeEngineDefaultParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeEngineDefaultParametersResult
 */
export interface DescribeEngineDefaultParametersResult {
  /**
   * @schema DescribeEngineDefaultParametersResult#EngineDefaults
   */
  readonly engineDefaults?: EngineDefaults;

}

/**
 * @schema DescribeEventCategoriesMessage
 */
export interface DescribeEventCategoriesMessage {
  /**
   * @schema DescribeEventCategoriesMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema DescribeEventCategoriesMessage#Filters
   */
  readonly filters?: Filter[];

}

/**
 * @schema EventCategoriesMessage
 */
export interface EventCategoriesMessage {
  /**
   * @schema EventCategoriesMessage#EventCategoriesMapList
   */
  readonly eventCategoriesMapList?: EventCategoriesMap[];

}

/**
 * @schema DescribeEventSubscriptionsMessage
 */
export interface DescribeEventSubscriptionsMessage {
  /**
   * @schema DescribeEventSubscriptionsMessage#SubscriptionName
   */
  readonly subscriptionName?: string;

  /**
   * @schema DescribeEventSubscriptionsMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeEventSubscriptionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeEventSubscriptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema EventSubscriptionsMessage
 */
export interface EventSubscriptionsMessage {
  /**
   * @schema EventSubscriptionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema EventSubscriptionsMessage#EventSubscriptionsList
   */
  readonly eventSubscriptionsList?: EventSubscription[];

}

/**
 * @schema DescribeEventsMessage
 */
export interface DescribeEventsMessage {
  /**
   * @schema DescribeEventsMessage#SourceIdentifier
   */
  readonly sourceIdentifier?: string;

  /**
   * @schema DescribeEventsMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema DescribeEventsMessage#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema DescribeEventsMessage#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema DescribeEventsMessage#Duration
   */
  readonly duration?: number;

  /**
   * @schema DescribeEventsMessage#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema DescribeEventsMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeEventsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeEventsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema EventsMessage
 */
export interface EventsMessage {
  /**
   * @schema EventsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema EventsMessage#Events
   */
  readonly events?: Event[];

}

/**
 * @schema DescribeExportTasksMessage
 */
export interface DescribeExportTasksMessage {
  /**
   * @schema DescribeExportTasksMessage#ExportTaskIdentifier
   */
  readonly exportTaskIdentifier?: string;

  /**
   * @schema DescribeExportTasksMessage#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema DescribeExportTasksMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeExportTasksMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeExportTasksMessage#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema ExportTasksMessage
 */
export interface ExportTasksMessage {
  /**
   * @schema ExportTasksMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema ExportTasksMessage#ExportTasks
   */
  readonly exportTasks?: ExportTask[];

}

/**
 * @schema DescribeGlobalClustersMessage
 */
export interface DescribeGlobalClustersMessage {
  /**
   * @schema DescribeGlobalClustersMessage#GlobalClusterIdentifier
   */
  readonly globalClusterIdentifier?: string;

  /**
   * @schema DescribeGlobalClustersMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeGlobalClustersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeGlobalClustersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema GlobalClustersMessage
 */
export interface GlobalClustersMessage {
  /**
   * @schema GlobalClustersMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema GlobalClustersMessage#GlobalClusters
   */
  readonly globalClusters?: GlobalCluster[];

}

/**
 * @schema DescribeInstallationMediaMessage
 */
export interface DescribeInstallationMediaMessage {
  /**
   * @schema DescribeInstallationMediaMessage#InstallationMediaId
   */
  readonly installationMediaId?: string;

  /**
   * @schema DescribeInstallationMediaMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeInstallationMediaMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeInstallationMediaMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema InstallationMediaMessage
 */
export interface InstallationMediaMessage {
  /**
   * @schema InstallationMediaMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema InstallationMediaMessage#InstallationMedia
   */
  readonly installationMedia?: InstallationMedia[];

}

/**
 * @schema DescribeOptionGroupOptionsMessage
 */
export interface DescribeOptionGroupOptionsMessage {
  /**
   * @schema DescribeOptionGroupOptionsMessage#EngineName
   */
  readonly engineName: string;

  /**
   * @schema DescribeOptionGroupOptionsMessage#MajorEngineVersion
   */
  readonly majorEngineVersion?: string;

  /**
   * @schema DescribeOptionGroupOptionsMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeOptionGroupOptionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeOptionGroupOptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema OptionGroupOptionsMessage
 */
export interface OptionGroupOptionsMessage {
  /**
   * @schema OptionGroupOptionsMessage#OptionGroupOptions
   */
  readonly optionGroupOptions?: OptionGroupOption[];

  /**
   * @schema OptionGroupOptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeOptionGroupsMessage
 */
export interface DescribeOptionGroupsMessage {
  /**
   * @schema DescribeOptionGroupsMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema DescribeOptionGroupsMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeOptionGroupsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeOptionGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeOptionGroupsMessage#EngineName
   */
  readonly engineName?: string;

  /**
   * @schema DescribeOptionGroupsMessage#MajorEngineVersion
   */
  readonly majorEngineVersion?: string;

}

/**
 * @schema OptionGroups
 */
export interface OptionGroups {
  /**
   * @schema OptionGroups#OptionGroupsList
   */
  readonly optionGroupsList?: OptionGroup[];

  /**
   * @schema OptionGroups#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeOrderableDbInstanceOptionsMessage
 */
export interface DescribeOrderableDbInstanceOptionsMessage {
  /**
   * @schema DescribeOrderableDbInstanceOptionsMessage#Engine
   */
  readonly engine: string;

  /**
   * @schema DescribeOrderableDbInstanceOptionsMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DescribeOrderableDbInstanceOptionsMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema DescribeOrderableDbInstanceOptionsMessage#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema DescribeOrderableDbInstanceOptionsMessage#AvailabilityZoneGroup
   */
  readonly availabilityZoneGroup?: string;

  /**
   * @schema DescribeOrderableDbInstanceOptionsMessage#Vpc
   */
  readonly vpc?: boolean;

  /**
   * @schema DescribeOrderableDbInstanceOptionsMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeOrderableDbInstanceOptionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeOrderableDbInstanceOptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema OrderableDbInstanceOptionsMessage
 */
export interface OrderableDbInstanceOptionsMessage {
  /**
   * @schema OrderableDbInstanceOptionsMessage#OrderableDBInstanceOptions
   */
  readonly orderableDbInstanceOptions?: OrderableDbInstanceOption[];

  /**
   * @schema OrderableDbInstanceOptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribePendingMaintenanceActionsMessage
 */
export interface DescribePendingMaintenanceActionsMessage {
  /**
   * @schema DescribePendingMaintenanceActionsMessage#ResourceIdentifier
   */
  readonly resourceIdentifier?: string;

  /**
   * @schema DescribePendingMaintenanceActionsMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribePendingMaintenanceActionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribePendingMaintenanceActionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema PendingMaintenanceActionsMessage
 */
export interface PendingMaintenanceActionsMessage {
  /**
   * @schema PendingMaintenanceActionsMessage#PendingMaintenanceActions
   */
  readonly pendingMaintenanceActions?: ResourcePendingMaintenanceActions[];

  /**
   * @schema PendingMaintenanceActionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeReservedDbInstancesMessage
 */
export interface DescribeReservedDbInstancesMessage {
  /**
   * @schema DescribeReservedDbInstancesMessage#ReservedDBInstanceId
   */
  readonly reservedDbInstanceId?: string;

  /**
   * @schema DescribeReservedDbInstancesMessage#ReservedDBInstancesOfferingId
   */
  readonly reservedDbInstancesOfferingId?: string;

  /**
   * @schema DescribeReservedDbInstancesMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema DescribeReservedDbInstancesMessage#Duration
   */
  readonly duration?: string;

  /**
   * @schema DescribeReservedDbInstancesMessage#ProductDescription
   */
  readonly productDescription?: string;

  /**
   * @schema DescribeReservedDbInstancesMessage#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema DescribeReservedDbInstancesMessage#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema DescribeReservedDbInstancesMessage#LeaseId
   */
  readonly leaseId?: string;

  /**
   * @schema DescribeReservedDbInstancesMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeReservedDbInstancesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeReservedDbInstancesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ReservedDbInstanceMessage
 */
export interface ReservedDbInstanceMessage {
  /**
   * @schema ReservedDbInstanceMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema ReservedDbInstanceMessage#ReservedDBInstances
   */
  readonly reservedDbInstances?: ReservedDbInstance[];

}

/**
 * @schema DescribeReservedDbInstancesOfferingsMessage
 */
export interface DescribeReservedDbInstancesOfferingsMessage {
  /**
   * @schema DescribeReservedDbInstancesOfferingsMessage#ReservedDBInstancesOfferingId
   */
  readonly reservedDbInstancesOfferingId?: string;

  /**
   * @schema DescribeReservedDbInstancesOfferingsMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema DescribeReservedDbInstancesOfferingsMessage#Duration
   */
  readonly duration?: string;

  /**
   * @schema DescribeReservedDbInstancesOfferingsMessage#ProductDescription
   */
  readonly productDescription?: string;

  /**
   * @schema DescribeReservedDbInstancesOfferingsMessage#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema DescribeReservedDbInstancesOfferingsMessage#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema DescribeReservedDbInstancesOfferingsMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeReservedDbInstancesOfferingsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeReservedDbInstancesOfferingsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ReservedDbInstancesOfferingMessage
 */
export interface ReservedDbInstancesOfferingMessage {
  /**
   * @schema ReservedDbInstancesOfferingMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema ReservedDbInstancesOfferingMessage#ReservedDBInstancesOfferings
   */
  readonly reservedDbInstancesOfferings?: ReservedDbInstancesOffering[];

}

/**
 * @schema DescribeSourceRegionsMessage
 */
export interface DescribeSourceRegionsMessage {
  /**
   * @schema DescribeSourceRegionsMessage#RegionName
   */
  readonly regionName?: string;

  /**
   * @schema DescribeSourceRegionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeSourceRegionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeSourceRegionsMessage#Filters
   */
  readonly filters?: Filter[];

}

/**
 * @schema SourceRegionMessage
 */
export interface SourceRegionMessage {
  /**
   * @schema SourceRegionMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema SourceRegionMessage#SourceRegions
   */
  readonly sourceRegions?: SourceRegion[];

}

/**
 * @schema DescribeValidDbInstanceModificationsMessage
 */
export interface DescribeValidDbInstanceModificationsMessage {
  /**
   * @schema DescribeValidDbInstanceModificationsMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

}

/**
 * @schema DescribeValidDbInstanceModificationsResult
 */
export interface DescribeValidDbInstanceModificationsResult {
  /**
   * @schema DescribeValidDbInstanceModificationsResult#ValidDBInstanceModificationsMessage
   */
  readonly validDbInstanceModificationsMessage?: ValidDbInstanceModificationsMessage;

}

/**
 * @schema DownloadDbLogFilePortionMessage
 */
export interface DownloadDbLogFilePortionMessage {
  /**
   * @schema DownloadDbLogFilePortionMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema DownloadDbLogFilePortionMessage#LogFileName
   */
  readonly logFileName: string;

  /**
   * @schema DownloadDbLogFilePortionMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DownloadDbLogFilePortionMessage#NumberOfLines
   */
  readonly numberOfLines?: number;

}

/**
 * @schema DownloadDbLogFilePortionDetails
 */
export interface DownloadDbLogFilePortionDetails {
  /**
   * @schema DownloadDbLogFilePortionDetails#LogFileData
   */
  readonly logFileData?: string;

  /**
   * @schema DownloadDbLogFilePortionDetails#Marker
   */
  readonly marker?: string;

  /**
   * @schema DownloadDbLogFilePortionDetails#AdditionalDataPending
   */
  readonly additionalDataPending?: boolean;

}

/**
 * @schema FailoverDbClusterMessage
 */
export interface FailoverDbClusterMessage {
  /**
   * @schema FailoverDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema FailoverDbClusterMessage#TargetDBInstanceIdentifier
   */
  readonly targetDbInstanceIdentifier?: string;

}

/**
 * @schema FailoverDbClusterResult
 */
export interface FailoverDbClusterResult {
  /**
   * @schema FailoverDbClusterResult#DBCluster
   */
  readonly dbCluster?: DbCluster;

}

/**
 * @schema ImportInstallationMediaMessage
 */
export interface ImportInstallationMediaMessage {
  /**
   * @schema ImportInstallationMediaMessage#CustomAvailabilityZoneId
   */
  readonly customAvailabilityZoneId: string;

  /**
   * @schema ImportInstallationMediaMessage#Engine
   */
  readonly engine: string;

  /**
   * @schema ImportInstallationMediaMessage#EngineVersion
   */
  readonly engineVersion: string;

  /**
   * @schema ImportInstallationMediaMessage#EngineInstallationMediaPath
   */
  readonly engineInstallationMediaPath: string;

  /**
   * @schema ImportInstallationMediaMessage#OSInstallationMediaPath
   */
  readonly osInstallationMediaPath: string;

}

/**
 * @schema ListTagsForResourceMessage
 */
export interface ListTagsForResourceMessage {
  /**
   * @schema ListTagsForResourceMessage#ResourceName
   */
  readonly resourceName: string;

  /**
   * @schema ListTagsForResourceMessage#Filters
   */
  readonly filters?: Filter[];

}

/**
 * @schema TagListMessage
 */
export interface TagListMessage {
  /**
   * @schema TagListMessage#TagList
   */
  readonly tagList?: Tag[];

}

/**
 * @schema ModifyCertificatesMessage
 */
export interface ModifyCertificatesMessage {
  /**
   * @schema ModifyCertificatesMessage#CertificateIdentifier
   */
  readonly certificateIdentifier?: string;

  /**
   * @schema ModifyCertificatesMessage#RemoveCustomerOverride
   */
  readonly removeCustomerOverride?: boolean;

}

/**
 * @schema ModifyCertificatesResult
 */
export interface ModifyCertificatesResult {
  /**
   * @schema ModifyCertificatesResult#Certificate
   */
  readonly certificate?: Certificate;

}

/**
 * @schema ModifyCurrentDbClusterCapacityMessage
 */
export interface ModifyCurrentDbClusterCapacityMessage {
  /**
   * @schema ModifyCurrentDbClusterCapacityMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema ModifyCurrentDbClusterCapacityMessage#Capacity
   */
  readonly capacity?: number;

  /**
   * @schema ModifyCurrentDbClusterCapacityMessage#SecondsBeforeTimeout
   */
  readonly secondsBeforeTimeout?: number;

  /**
   * @schema ModifyCurrentDbClusterCapacityMessage#TimeoutAction
   */
  readonly timeoutAction?: string;

}

/**
 * @schema DbClusterCapacityInfo
 */
export interface DbClusterCapacityInfo {
  /**
   * @schema DbClusterCapacityInfo#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DbClusterCapacityInfo#PendingCapacity
   */
  readonly pendingCapacity?: number;

  /**
   * @schema DbClusterCapacityInfo#CurrentCapacity
   */
  readonly currentCapacity?: number;

  /**
   * @schema DbClusterCapacityInfo#SecondsBeforeTimeout
   */
  readonly secondsBeforeTimeout?: number;

  /**
   * @schema DbClusterCapacityInfo#TimeoutAction
   */
  readonly timeoutAction?: string;

}

/**
 * @schema ModifyDbClusterMessage
 */
export interface ModifyDbClusterMessage {
  /**
   * @schema ModifyDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema ModifyDbClusterMessage#NewDBClusterIdentifier
   */
  readonly newDbClusterIdentifier?: string;

  /**
   * @schema ModifyDbClusterMessage#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

  /**
   * @schema ModifyDbClusterMessage#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema ModifyDbClusterMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema ModifyDbClusterMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema ModifyDbClusterMessage#Port
   */
  readonly port?: number;

  /**
   * @schema ModifyDbClusterMessage#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema ModifyDbClusterMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema ModifyDbClusterMessage#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema ModifyDbClusterMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema ModifyDbClusterMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema ModifyDbClusterMessage#BacktrackWindow
   */
  readonly backtrackWindow?: number;

  /**
   * @schema ModifyDbClusterMessage#CloudwatchLogsExportConfiguration
   */
  readonly cloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;

  /**
   * @schema ModifyDbClusterMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema ModifyDbClusterMessage#AllowMajorVersionUpgrade
   */
  readonly allowMajorVersionUpgrade?: boolean;

  /**
   * @schema ModifyDbClusterMessage#DBInstanceParameterGroupName
   */
  readonly dbInstanceParameterGroupName?: string;

  /**
   * @schema ModifyDbClusterMessage#Domain
   */
  readonly domain?: string;

  /**
   * @schema ModifyDbClusterMessage#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

  /**
   * @schema ModifyDbClusterMessage#ScalingConfiguration
   */
  readonly scalingConfiguration?: ScalingConfiguration;

  /**
   * @schema ModifyDbClusterMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema ModifyDbClusterMessage#EnableHttpEndpoint
   */
  readonly enableHttpEndpoint?: boolean;

  /**
   * @schema ModifyDbClusterMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema ModifyDbClusterMessage#EnableGlobalWriteForwarding
   */
  readonly enableGlobalWriteForwarding?: boolean;

}

/**
 * @schema ModifyDbClusterResult
 */
export interface ModifyDbClusterResult {
  /**
   * @schema ModifyDbClusterResult#DBCluster
   */
  readonly dbCluster?: DbCluster;

}

/**
 * @schema ModifyDbClusterEndpointMessage
 */
export interface ModifyDbClusterEndpointMessage {
  /**
   * @schema ModifyDbClusterEndpointMessage#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier: string;

  /**
   * @schema ModifyDbClusterEndpointMessage#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema ModifyDbClusterEndpointMessage#StaticMembers
   */
  readonly staticMembers?: string[];

  /**
   * @schema ModifyDbClusterEndpointMessage#ExcludedMembers
   */
  readonly excludedMembers?: string[];

}

/**
 * @schema ModifyDbClusterParameterGroupMessage
 */
export interface ModifyDbClusterParameterGroupMessage {
  /**
   * @schema ModifyDbClusterParameterGroupMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName: string;

  /**
   * @schema ModifyDbClusterParameterGroupMessage#Parameters
   */
  readonly parameters: Parameter[];

}

/**
 * @schema DbClusterParameterGroupNameMessage
 */
export interface DbClusterParameterGroupNameMessage {
  /**
   * @schema DbClusterParameterGroupNameMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

}

/**
 * @schema ModifyDbClusterSnapshotAttributeMessage
 */
export interface ModifyDbClusterSnapshotAttributeMessage {
  /**
   * @schema ModifyDbClusterSnapshotAttributeMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier: string;

  /**
   * @schema ModifyDbClusterSnapshotAttributeMessage#AttributeName
   */
  readonly attributeName: string;

  /**
   * @schema ModifyDbClusterSnapshotAttributeMessage#ValuesToAdd
   */
  readonly valuesToAdd?: string[];

  /**
   * @schema ModifyDbClusterSnapshotAttributeMessage#ValuesToRemove
   */
  readonly valuesToRemove?: string[];

}

/**
 * @schema ModifyDbClusterSnapshotAttributeResult
 */
export interface ModifyDbClusterSnapshotAttributeResult {
  /**
   * @schema ModifyDbClusterSnapshotAttributeResult#DBClusterSnapshotAttributesResult
   */
  readonly dbClusterSnapshotAttributesResult?: DbClusterSnapshotAttributesResult;

}

/**
 * @schema ModifyDbInstanceMessage
 */
export interface ModifyDbInstanceMessage {
  /**
   * @schema ModifyDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema ModifyDbInstanceMessage#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema ModifyDbInstanceMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema ModifyDbInstanceMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema ModifyDbInstanceMessage#DBSecurityGroups
   */
  readonly dbSecurityGroups?: string[];

  /**
   * @schema ModifyDbInstanceMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema ModifyDbInstanceMessage#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

  /**
   * @schema ModifyDbInstanceMessage#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema ModifyDbInstanceMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema ModifyDbInstanceMessage#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema ModifyDbInstanceMessage#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema ModifyDbInstanceMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema ModifyDbInstanceMessage#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema ModifyDbInstanceMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema ModifyDbInstanceMessage#AllowMajorVersionUpgrade
   */
  readonly allowMajorVersionUpgrade?: boolean;

  /**
   * @schema ModifyDbInstanceMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema ModifyDbInstanceMessage#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema ModifyDbInstanceMessage#Iops
   */
  readonly iops?: number;

  /**
   * @schema ModifyDbInstanceMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema ModifyDbInstanceMessage#NewDBInstanceIdentifier
   */
  readonly newDbInstanceIdentifier?: string;

  /**
   * @schema ModifyDbInstanceMessage#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema ModifyDbInstanceMessage#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema ModifyDbInstanceMessage#TdeCredentialPassword
   */
  readonly tdeCredentialPassword?: string;

  /**
   * @schema ModifyDbInstanceMessage#CACertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

  /**
   * @schema ModifyDbInstanceMessage#Domain
   */
  readonly domain?: string;

  /**
   * @schema ModifyDbInstanceMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema ModifyDbInstanceMessage#MonitoringInterval
   */
  readonly monitoringInterval?: number;

  /**
   * @schema ModifyDbInstanceMessage#DBPortNumber
   */
  readonly dbPortNumber?: number;

  /**
   * @schema ModifyDbInstanceMessage#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema ModifyDbInstanceMessage#MonitoringRoleArn
   */
  readonly monitoringRoleArn?: string;

  /**
   * @schema ModifyDbInstanceMessage#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

  /**
   * @schema ModifyDbInstanceMessage#PromotionTier
   */
  readonly promotionTier?: number;

  /**
   * @schema ModifyDbInstanceMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema ModifyDbInstanceMessage#EnablePerformanceInsights
   */
  readonly enablePerformanceInsights?: boolean;

  /**
   * @schema ModifyDbInstanceMessage#PerformanceInsightsKMSKeyId
   */
  readonly performanceInsightsKmsKeyId?: string;

  /**
   * @schema ModifyDbInstanceMessage#PerformanceInsightsRetentionPeriod
   */
  readonly performanceInsightsRetentionPeriod?: number;

  /**
   * @schema ModifyDbInstanceMessage#CloudwatchLogsExportConfiguration
   */
  readonly cloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;

  /**
   * @schema ModifyDbInstanceMessage#ProcessorFeatures
   */
  readonly processorFeatures?: ProcessorFeature[];

  /**
   * @schema ModifyDbInstanceMessage#UseDefaultProcessorFeatures
   */
  readonly useDefaultProcessorFeatures?: boolean;

  /**
   * @schema ModifyDbInstanceMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema ModifyDbInstanceMessage#MaxAllocatedStorage
   */
  readonly maxAllocatedStorage?: number;

  /**
   * @schema ModifyDbInstanceMessage#CertificateRotationRestart
   */
  readonly certificateRotationRestart?: boolean;

  /**
   * @schema ModifyDbInstanceMessage#ReplicaMode
   */
  readonly replicaMode?: string;

}

/**
 * @schema ModifyDbInstanceResult
 */
export interface ModifyDbInstanceResult {
  /**
   * @schema ModifyDbInstanceResult#DBInstance
   */
  readonly dbInstance?: DbInstance;

}

/**
 * @schema ModifyDbParameterGroupMessage
 */
export interface ModifyDbParameterGroupMessage {
  /**
   * @schema ModifyDbParameterGroupMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName: string;

  /**
   * @schema ModifyDbParameterGroupMessage#Parameters
   */
  readonly parameters: Parameter[];

}

/**
 * @schema DbParameterGroupNameMessage
 */
export interface DbParameterGroupNameMessage {
  /**
   * @schema DbParameterGroupNameMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

}

/**
 * @schema ModifyDbProxyRequest
 */
export interface ModifyDbProxyRequest {
  /**
   * @schema ModifyDbProxyRequest#DBProxyName
   */
  readonly dbProxyName: string;

  /**
   * @schema ModifyDbProxyRequest#NewDBProxyName
   */
  readonly newDbProxyName?: string;

  /**
   * @schema ModifyDbProxyRequest#Auth
   */
  readonly auth?: UserAuthConfig[];

  /**
   * @schema ModifyDbProxyRequest#RequireTLS
   */
  readonly requireTls?: boolean;

  /**
   * @schema ModifyDbProxyRequest#IdleClientTimeout
   */
  readonly idleClientTimeout?: number;

  /**
   * @schema ModifyDbProxyRequest#DebugLogging
   */
  readonly debugLogging?: boolean;

  /**
   * @schema ModifyDbProxyRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema ModifyDbProxyRequest#SecurityGroups
   */
  readonly securityGroups?: string[];

}

/**
 * @schema ModifyDbProxyResponse
 */
export interface ModifyDbProxyResponse {
  /**
   * @schema ModifyDbProxyResponse#DBProxy
   */
  readonly dbProxy?: DbProxy;

}

/**
 * @schema ModifyDbProxyTargetGroupRequest
 */
export interface ModifyDbProxyTargetGroupRequest {
  /**
   * @schema ModifyDbProxyTargetGroupRequest#TargetGroupName
   */
  readonly targetGroupName: string;

  /**
   * @schema ModifyDbProxyTargetGroupRequest#DBProxyName
   */
  readonly dbProxyName: string;

  /**
   * @schema ModifyDbProxyTargetGroupRequest#ConnectionPoolConfig
   */
  readonly connectionPoolConfig?: ConnectionPoolConfiguration;

  /**
   * @schema ModifyDbProxyTargetGroupRequest#NewName
   */
  readonly newName?: string;

}

/**
 * @schema ModifyDbProxyTargetGroupResponse
 */
export interface ModifyDbProxyTargetGroupResponse {
  /**
   * @schema ModifyDbProxyTargetGroupResponse#DBProxyTargetGroup
   */
  readonly dbProxyTargetGroup?: DbProxyTargetGroup;

}

/**
 * @schema ModifyDbSnapshotMessage
 */
export interface ModifyDbSnapshotMessage {
  /**
   * @schema ModifyDbSnapshotMessage#DBSnapshotIdentifier
   */
  readonly dbSnapshotIdentifier: string;

  /**
   * @schema ModifyDbSnapshotMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema ModifyDbSnapshotMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

}

/**
 * @schema ModifyDbSnapshotResult
 */
export interface ModifyDbSnapshotResult {
  /**
   * @schema ModifyDbSnapshotResult#DBSnapshot
   */
  readonly dbSnapshot?: DbSnapshot;

}

/**
 * @schema ModifyDbSnapshotAttributeMessage
 */
export interface ModifyDbSnapshotAttributeMessage {
  /**
   * @schema ModifyDbSnapshotAttributeMessage#DBSnapshotIdentifier
   */
  readonly dbSnapshotIdentifier: string;

  /**
   * @schema ModifyDbSnapshotAttributeMessage#AttributeName
   */
  readonly attributeName: string;

  /**
   * @schema ModifyDbSnapshotAttributeMessage#ValuesToAdd
   */
  readonly valuesToAdd?: string[];

  /**
   * @schema ModifyDbSnapshotAttributeMessage#ValuesToRemove
   */
  readonly valuesToRemove?: string[];

}

/**
 * @schema ModifyDbSnapshotAttributeResult
 */
export interface ModifyDbSnapshotAttributeResult {
  /**
   * @schema ModifyDbSnapshotAttributeResult#DBSnapshotAttributesResult
   */
  readonly dbSnapshotAttributesResult?: DbSnapshotAttributesResult;

}

/**
 * @schema ModifyDbSubnetGroupMessage
 */
export interface ModifyDbSubnetGroupMessage {
  /**
   * @schema ModifyDbSubnetGroupMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName: string;

  /**
   * @schema ModifyDbSubnetGroupMessage#DBSubnetGroupDescription
   */
  readonly dbSubnetGroupDescription?: string;

  /**
   * @schema ModifyDbSubnetGroupMessage#SubnetIds
   */
  readonly subnetIds: string[];

}

/**
 * @schema ModifyDbSubnetGroupResult
 */
export interface ModifyDbSubnetGroupResult {
  /**
   * @schema ModifyDbSubnetGroupResult#DBSubnetGroup
   */
  readonly dbSubnetGroup?: DbSubnetGroup;

}

/**
 * @schema ModifyEventSubscriptionMessage
 */
export interface ModifyEventSubscriptionMessage {
  /**
   * @schema ModifyEventSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName: string;

  /**
   * @schema ModifyEventSubscriptionMessage#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema ModifyEventSubscriptionMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema ModifyEventSubscriptionMessage#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema ModifyEventSubscriptionMessage#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema ModifyEventSubscriptionResult
 */
export interface ModifyEventSubscriptionResult {
  /**
   * @schema ModifyEventSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: EventSubscription;

}

/**
 * @schema ModifyGlobalClusterMessage
 */
export interface ModifyGlobalClusterMessage {
  /**
   * @schema ModifyGlobalClusterMessage#GlobalClusterIdentifier
   */
  readonly globalClusterIdentifier?: string;

  /**
   * @schema ModifyGlobalClusterMessage#NewGlobalClusterIdentifier
   */
  readonly newGlobalClusterIdentifier?: string;

  /**
   * @schema ModifyGlobalClusterMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * @schema ModifyGlobalClusterResult
 */
export interface ModifyGlobalClusterResult {
  /**
   * @schema ModifyGlobalClusterResult#GlobalCluster
   */
  readonly globalCluster?: GlobalCluster;

}

/**
 * @schema ModifyOptionGroupMessage
 */
export interface ModifyOptionGroupMessage {
  /**
   * @schema ModifyOptionGroupMessage#OptionGroupName
   */
  readonly optionGroupName: string;

  /**
   * @schema ModifyOptionGroupMessage#OptionsToInclude
   */
  readonly optionsToInclude?: OptionConfiguration[];

  /**
   * @schema ModifyOptionGroupMessage#OptionsToRemove
   */
  readonly optionsToRemove?: string[];

  /**
   * @schema ModifyOptionGroupMessage#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

}

/**
 * @schema ModifyOptionGroupResult
 */
export interface ModifyOptionGroupResult {
  /**
   * @schema ModifyOptionGroupResult#OptionGroup
   */
  readonly optionGroup?: OptionGroup;

}

/**
 * @schema PromoteReadReplicaMessage
 */
export interface PromoteReadReplicaMessage {
  /**
   * @schema PromoteReadReplicaMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema PromoteReadReplicaMessage#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema PromoteReadReplicaMessage#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

}

/**
 * @schema PromoteReadReplicaResult
 */
export interface PromoteReadReplicaResult {
  /**
   * @schema PromoteReadReplicaResult#DBInstance
   */
  readonly dbInstance?: DbInstance;

}

/**
 * @schema PromoteReadReplicaDbClusterMessage
 */
export interface PromoteReadReplicaDbClusterMessage {
  /**
   * @schema PromoteReadReplicaDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

}

/**
 * @schema PromoteReadReplicaDbClusterResult
 */
export interface PromoteReadReplicaDbClusterResult {
  /**
   * @schema PromoteReadReplicaDbClusterResult#DBCluster
   */
  readonly dbCluster?: DbCluster;

}

/**
 * @schema PurchaseReservedDbInstancesOfferingMessage
 */
export interface PurchaseReservedDbInstancesOfferingMessage {
  /**
   * @schema PurchaseReservedDbInstancesOfferingMessage#ReservedDBInstancesOfferingId
   */
  readonly reservedDbInstancesOfferingId: string;

  /**
   * @schema PurchaseReservedDbInstancesOfferingMessage#ReservedDBInstanceId
   */
  readonly reservedDbInstanceId?: string;

  /**
   * @schema PurchaseReservedDbInstancesOfferingMessage#DBInstanceCount
   */
  readonly dbInstanceCount?: number;

  /**
   * @schema PurchaseReservedDbInstancesOfferingMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema PurchaseReservedDbInstancesOfferingResult
 */
export interface PurchaseReservedDbInstancesOfferingResult {
  /**
   * @schema PurchaseReservedDbInstancesOfferingResult#ReservedDBInstance
   */
  readonly reservedDbInstance?: ReservedDbInstance;

}

/**
 * @schema RebootDbInstanceMessage
 */
export interface RebootDbInstanceMessage {
  /**
   * @schema RebootDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema RebootDbInstanceMessage#ForceFailover
   */
  readonly forceFailover?: boolean;

}

/**
 * @schema RebootDbInstanceResult
 */
export interface RebootDbInstanceResult {
  /**
   * @schema RebootDbInstanceResult#DBInstance
   */
  readonly dbInstance?: DbInstance;

}

/**
 * @schema RegisterDbProxyTargetsRequest
 */
export interface RegisterDbProxyTargetsRequest {
  /**
   * @schema RegisterDbProxyTargetsRequest#DBProxyName
   */
  readonly dbProxyName: string;

  /**
   * @schema RegisterDbProxyTargetsRequest#TargetGroupName
   */
  readonly targetGroupName?: string;

  /**
   * @schema RegisterDbProxyTargetsRequest#DBInstanceIdentifiers
   */
  readonly dbInstanceIdentifiers?: string[];

  /**
   * @schema RegisterDbProxyTargetsRequest#DBClusterIdentifiers
   */
  readonly dbClusterIdentifiers?: string[];

}

/**
 * @schema RegisterDbProxyTargetsResponse
 */
export interface RegisterDbProxyTargetsResponse {
  /**
   * @schema RegisterDbProxyTargetsResponse#DBProxyTargets
   */
  readonly dbProxyTargets?: DbProxyTarget[];

}

/**
 * @schema RemoveFromGlobalClusterMessage
 */
export interface RemoveFromGlobalClusterMessage {
  /**
   * @schema RemoveFromGlobalClusterMessage#GlobalClusterIdentifier
   */
  readonly globalClusterIdentifier?: string;

  /**
   * @schema RemoveFromGlobalClusterMessage#DbClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

}

/**
 * @schema RemoveFromGlobalClusterResult
 */
export interface RemoveFromGlobalClusterResult {
  /**
   * @schema RemoveFromGlobalClusterResult#GlobalCluster
   */
  readonly globalCluster?: GlobalCluster;

}

/**
 * @schema RemoveRoleFromDbClusterMessage
 */
export interface RemoveRoleFromDbClusterMessage {
  /**
   * @schema RemoveRoleFromDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema RemoveRoleFromDbClusterMessage#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema RemoveRoleFromDbClusterMessage#FeatureName
   */
  readonly featureName?: string;

}

/**
 * @schema RemoveRoleFromDbInstanceMessage
 */
export interface RemoveRoleFromDbInstanceMessage {
  /**
   * @schema RemoveRoleFromDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema RemoveRoleFromDbInstanceMessage#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema RemoveRoleFromDbInstanceMessage#FeatureName
   */
  readonly featureName: string;

}

/**
 * @schema RemoveSourceIdentifierFromSubscriptionMessage
 */
export interface RemoveSourceIdentifierFromSubscriptionMessage {
  /**
   * @schema RemoveSourceIdentifierFromSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName: string;

  /**
   * @schema RemoveSourceIdentifierFromSubscriptionMessage#SourceIdentifier
   */
  readonly sourceIdentifier: string;

}

/**
 * @schema RemoveSourceIdentifierFromSubscriptionResult
 */
export interface RemoveSourceIdentifierFromSubscriptionResult {
  /**
   * @schema RemoveSourceIdentifierFromSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: EventSubscription;

}

/**
 * @schema RemoveTagsFromResourceMessage
 */
export interface RemoveTagsFromResourceMessage {
  /**
   * @schema RemoveTagsFromResourceMessage#ResourceName
   */
  readonly resourceName: string;

  /**
   * @schema RemoveTagsFromResourceMessage#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema ResetDbClusterParameterGroupMessage
 */
export interface ResetDbClusterParameterGroupMessage {
  /**
   * @schema ResetDbClusterParameterGroupMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName: string;

  /**
   * @schema ResetDbClusterParameterGroupMessage#ResetAllParameters
   */
  readonly resetAllParameters?: boolean;

  /**
   * @schema ResetDbClusterParameterGroupMessage#Parameters
   */
  readonly parameters?: Parameter[];

}

/**
 * @schema ResetDbParameterGroupMessage
 */
export interface ResetDbParameterGroupMessage {
  /**
   * @schema ResetDbParameterGroupMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName: string;

  /**
   * @schema ResetDbParameterGroupMessage#ResetAllParameters
   */
  readonly resetAllParameters?: boolean;

  /**
   * @schema ResetDbParameterGroupMessage#Parameters
   */
  readonly parameters?: Parameter[];

}

/**
 * @schema RestoreDbClusterFromS3Message
 */
export interface RestoreDbClusterFromS3Message {
  /**
   * @schema RestoreDbClusterFromS3Message#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema RestoreDbClusterFromS3Message#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema RestoreDbClusterFromS3Message#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema RestoreDbClusterFromS3Message#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema RestoreDbClusterFromS3Message#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema RestoreDbClusterFromS3Message#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema RestoreDbClusterFromS3Message#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RestoreDbClusterFromS3Message#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RestoreDbClusterFromS3Message#Engine
   */
  readonly engine: string;

  /**
   * @schema RestoreDbClusterFromS3Message#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RestoreDbClusterFromS3Message#Port
   */
  readonly port?: number;

  /**
   * @schema RestoreDbClusterFromS3Message#MasterUsername
   */
  readonly masterUsername: string;

  /**
   * @schema RestoreDbClusterFromS3Message#MasterUserPassword
   */
  readonly masterUserPassword: string;

  /**
   * @schema RestoreDbClusterFromS3Message#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RestoreDbClusterFromS3Message#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema RestoreDbClusterFromS3Message#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema RestoreDbClusterFromS3Message#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema RestoreDbClusterFromS3Message#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema RestoreDbClusterFromS3Message#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RestoreDbClusterFromS3Message#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema RestoreDbClusterFromS3Message#SourceEngine
   */
  readonly sourceEngine: string;

  /**
   * @schema RestoreDbClusterFromS3Message#SourceEngineVersion
   */
  readonly sourceEngineVersion: string;

  /**
   * @schema RestoreDbClusterFromS3Message#S3BucketName
   */
  readonly s3BucketName: string;

  /**
   * @schema RestoreDbClusterFromS3Message#S3Prefix
   */
  readonly s3Prefix?: string;

  /**
   * @schema RestoreDbClusterFromS3Message#S3IngestionRoleArn
   */
  readonly s3IngestionRoleArn: string;

  /**
   * @schema RestoreDbClusterFromS3Message#BacktrackWindow
   */
  readonly backtrackWindow?: number;

  /**
   * @schema RestoreDbClusterFromS3Message#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema RestoreDbClusterFromS3Message#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RestoreDbClusterFromS3Message#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema RestoreDbClusterFromS3Message#Domain
   */
  readonly domain?: string;

  /**
   * @schema RestoreDbClusterFromS3Message#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

}

/**
 * @schema RestoreDbClusterFromS3Result
 */
export interface RestoreDbClusterFromS3Result {
  /**
   * @schema RestoreDbClusterFromS3Result#DBCluster
   */
  readonly dbCluster?: DbCluster;

}

/**
 * @schema RestoreDbClusterFromSnapshotMessage
 */
export interface RestoreDbClusterFromSnapshotMessage {
  /**
   * @schema RestoreDbClusterFromSnapshotMessage#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier: string;

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#Engine
   */
  readonly engine: string;

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#Port
   */
  readonly port?: number;

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#BacktrackWindow
   */
  readonly backtrackWindow?: number;

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#EngineMode
   */
  readonly engineMode?: string;

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#ScalingConfiguration
   */
  readonly scalingConfiguration?: ScalingConfiguration;

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#Domain
   */
  readonly domain?: string;

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

}

/**
 * @schema RestoreDbClusterFromSnapshotResult
 */
export interface RestoreDbClusterFromSnapshotResult {
  /**
   * @schema RestoreDbClusterFromSnapshotResult#DBCluster
   */
  readonly dbCluster?: DbCluster;

}

/**
 * @schema RestoreDbClusterToPointInTimeMessage
 */
export interface RestoreDbClusterToPointInTimeMessage {
  /**
   * @schema RestoreDbClusterToPointInTimeMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema RestoreDbClusterToPointInTimeMessage#RestoreType
   */
  readonly restoreType?: string;

  /**
   * @schema RestoreDbClusterToPointInTimeMessage#SourceDBClusterIdentifier
   */
  readonly sourceDbClusterIdentifier: string;

  /**
   * @schema RestoreDbClusterToPointInTimeMessage#RestoreToTime
   */
  readonly restoreToTime?: string;

  /**
   * @schema RestoreDbClusterToPointInTimeMessage#UseLatestRestorableTime
   */
  readonly useLatestRestorableTime?: boolean;

  /**
   * @schema RestoreDbClusterToPointInTimeMessage#Port
   */
  readonly port?: number;

  /**
   * @schema RestoreDbClusterToPointInTimeMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RestoreDbClusterToPointInTimeMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RestoreDbClusterToPointInTimeMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RestoreDbClusterToPointInTimeMessage#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema RestoreDbClusterToPointInTimeMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RestoreDbClusterToPointInTimeMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema RestoreDbClusterToPointInTimeMessage#BacktrackWindow
   */
  readonly backtrackWindow?: number;

  /**
   * @schema RestoreDbClusterToPointInTimeMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema RestoreDbClusterToPointInTimeMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema RestoreDbClusterToPointInTimeMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RestoreDbClusterToPointInTimeMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema RestoreDbClusterToPointInTimeMessage#Domain
   */
  readonly domain?: string;

  /**
   * @schema RestoreDbClusterToPointInTimeMessage#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

}

/**
 * @schema RestoreDbClusterToPointInTimeResult
 */
export interface RestoreDbClusterToPointInTimeResult {
  /**
   * @schema RestoreDbClusterToPointInTimeResult#DBCluster
   */
  readonly dbCluster?: DbCluster;

}

/**
 * @schema RestoreDbInstanceFromDbSnapshotMessage
 */
export interface RestoreDbInstanceFromDbSnapshotMessage {
  /**
   * @schema RestoreDbInstanceFromDbSnapshotMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema RestoreDbInstanceFromDbSnapshotMessage#DBSnapshotIdentifier
   */
  readonly dbSnapshotIdentifier: string;

  /**
   * @schema RestoreDbInstanceFromDbSnapshotMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema RestoreDbInstanceFromDbSnapshotMessage#Port
   */
  readonly port?: number;

  /**
   * @schema RestoreDbInstanceFromDbSnapshotMessage#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema RestoreDbInstanceFromDbSnapshotMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RestoreDbInstanceFromDbSnapshotMessage#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema RestoreDbInstanceFromDbSnapshotMessage#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema RestoreDbInstanceFromDbSnapshotMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema RestoreDbInstanceFromDbSnapshotMessage#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema RestoreDbInstanceFromDbSnapshotMessage#DBName
   */
  readonly dbName?: string;

  /**
   * @schema RestoreDbInstanceFromDbSnapshotMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema RestoreDbInstanceFromDbSnapshotMessage#Iops
   */
  readonly iops?: number;

  /**
   * @schema RestoreDbInstanceFromDbSnapshotMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RestoreDbInstanceFromDbSnapshotMessage#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema RestoreDbInstanceFromDbSnapshotMessage#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema RestoreDbInstanceFromDbSnapshotMessage#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema RestoreDbInstanceFromDbSnapshotMessage#TdeCredentialPassword
   */
  readonly tdeCredentialPassword?: string;

  /**
   * @schema RestoreDbInstanceFromDbSnapshotMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RestoreDbInstanceFromDbSnapshotMessage#Domain
   */
  readonly domain?: string;

  /**
   * @schema RestoreDbInstanceFromDbSnapshotMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema RestoreDbInstanceFromDbSnapshotMessage#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

  /**
   * @schema RestoreDbInstanceFromDbSnapshotMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema RestoreDbInstanceFromDbSnapshotMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema RestoreDbInstanceFromDbSnapshotMessage#ProcessorFeatures
   */
  readonly processorFeatures?: ProcessorFeature[];

  /**
   * @schema RestoreDbInstanceFromDbSnapshotMessage#UseDefaultProcessorFeatures
   */
  readonly useDefaultProcessorFeatures?: boolean;

  /**
   * @schema RestoreDbInstanceFromDbSnapshotMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema RestoreDbInstanceFromDbSnapshotMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * @schema RestoreDbInstanceFromDbSnapshotResult
 */
export interface RestoreDbInstanceFromDbSnapshotResult {
  /**
   * @schema RestoreDbInstanceFromDbSnapshotResult#DBInstance
   */
  readonly dbInstance?: DbInstance;

}

/**
 * @schema RestoreDbInstanceFromS3Message
 */
export interface RestoreDbInstanceFromS3Message {
  /**
   * @schema RestoreDbInstanceFromS3Message#DBName
   */
  readonly dbName?: string;

  /**
   * @schema RestoreDbInstanceFromS3Message#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema RestoreDbInstanceFromS3Message#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema RestoreDbInstanceFromS3Message#DBInstanceClass
   */
  readonly dbInstanceClass: string;

  /**
   * @schema RestoreDbInstanceFromS3Message#Engine
   */
  readonly engine: string;

  /**
   * @schema RestoreDbInstanceFromS3Message#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema RestoreDbInstanceFromS3Message#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema RestoreDbInstanceFromS3Message#DBSecurityGroups
   */
  readonly dbSecurityGroups?: string[];

  /**
   * @schema RestoreDbInstanceFromS3Message#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RestoreDbInstanceFromS3Message#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema RestoreDbInstanceFromS3Message#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RestoreDbInstanceFromS3Message#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema RestoreDbInstanceFromS3Message#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema RestoreDbInstanceFromS3Message#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema RestoreDbInstanceFromS3Message#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema RestoreDbInstanceFromS3Message#Port
   */
  readonly port?: number;

  /**
   * @schema RestoreDbInstanceFromS3Message#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema RestoreDbInstanceFromS3Message#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RestoreDbInstanceFromS3Message#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema RestoreDbInstanceFromS3Message#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema RestoreDbInstanceFromS3Message#Iops
   */
  readonly iops?: number;

  /**
   * @schema RestoreDbInstanceFromS3Message#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RestoreDbInstanceFromS3Message#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema RestoreDbInstanceFromS3Message#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema RestoreDbInstanceFromS3Message#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema RestoreDbInstanceFromS3Message#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema RestoreDbInstanceFromS3Message#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RestoreDbInstanceFromS3Message#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema RestoreDbInstanceFromS3Message#MonitoringInterval
   */
  readonly monitoringInterval?: number;

  /**
   * @schema RestoreDbInstanceFromS3Message#MonitoringRoleArn
   */
  readonly monitoringRoleArn?: string;

  /**
   * @schema RestoreDbInstanceFromS3Message#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema RestoreDbInstanceFromS3Message#SourceEngine
   */
  readonly sourceEngine: string;

  /**
   * @schema RestoreDbInstanceFromS3Message#SourceEngineVersion
   */
  readonly sourceEngineVersion: string;

  /**
   * @schema RestoreDbInstanceFromS3Message#S3BucketName
   */
  readonly s3BucketName: string;

  /**
   * @schema RestoreDbInstanceFromS3Message#S3Prefix
   */
  readonly s3Prefix?: string;

  /**
   * @schema RestoreDbInstanceFromS3Message#S3IngestionRoleArn
   */
  readonly s3IngestionRoleArn: string;

  /**
   * @schema RestoreDbInstanceFromS3Message#EnablePerformanceInsights
   */
  readonly enablePerformanceInsights?: boolean;

  /**
   * @schema RestoreDbInstanceFromS3Message#PerformanceInsightsKMSKeyId
   */
  readonly performanceInsightsKmsKeyId?: string;

  /**
   * @schema RestoreDbInstanceFromS3Message#PerformanceInsightsRetentionPeriod
   */
  readonly performanceInsightsRetentionPeriod?: number;

  /**
   * @schema RestoreDbInstanceFromS3Message#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema RestoreDbInstanceFromS3Message#ProcessorFeatures
   */
  readonly processorFeatures?: ProcessorFeature[];

  /**
   * @schema RestoreDbInstanceFromS3Message#UseDefaultProcessorFeatures
   */
  readonly useDefaultProcessorFeatures?: boolean;

  /**
   * @schema RestoreDbInstanceFromS3Message#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RestoreDbInstanceFromS3Message#MaxAllocatedStorage
   */
  readonly maxAllocatedStorage?: number;

}

/**
 * @schema RestoreDbInstanceFromS3Result
 */
export interface RestoreDbInstanceFromS3Result {
  /**
   * @schema RestoreDbInstanceFromS3Result#DBInstance
   */
  readonly dbInstance?: DbInstance;

}

/**
 * @schema RestoreDbInstanceToPointInTimeMessage
 */
export interface RestoreDbInstanceToPointInTimeMessage {
  /**
   * @schema RestoreDbInstanceToPointInTimeMessage#SourceDBInstanceIdentifier
   */
  readonly sourceDbInstanceIdentifier?: string;

  /**
   * @schema RestoreDbInstanceToPointInTimeMessage#TargetDBInstanceIdentifier
   */
  readonly targetDbInstanceIdentifier: string;

  /**
   * @schema RestoreDbInstanceToPointInTimeMessage#RestoreTime
   */
  readonly restoreTime?: string;

  /**
   * @schema RestoreDbInstanceToPointInTimeMessage#UseLatestRestorableTime
   */
  readonly useLatestRestorableTime?: boolean;

  /**
   * @schema RestoreDbInstanceToPointInTimeMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema RestoreDbInstanceToPointInTimeMessage#Port
   */
  readonly port?: number;

  /**
   * @schema RestoreDbInstanceToPointInTimeMessage#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema RestoreDbInstanceToPointInTimeMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RestoreDbInstanceToPointInTimeMessage#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema RestoreDbInstanceToPointInTimeMessage#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema RestoreDbInstanceToPointInTimeMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema RestoreDbInstanceToPointInTimeMessage#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema RestoreDbInstanceToPointInTimeMessage#DBName
   */
  readonly dbName?: string;

  /**
   * @schema RestoreDbInstanceToPointInTimeMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema RestoreDbInstanceToPointInTimeMessage#Iops
   */
  readonly iops?: number;

  /**
   * @schema RestoreDbInstanceToPointInTimeMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RestoreDbInstanceToPointInTimeMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema RestoreDbInstanceToPointInTimeMessage#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema RestoreDbInstanceToPointInTimeMessage#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema RestoreDbInstanceToPointInTimeMessage#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema RestoreDbInstanceToPointInTimeMessage#TdeCredentialPassword
   */
  readonly tdeCredentialPassword?: string;

  /**
   * @schema RestoreDbInstanceToPointInTimeMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RestoreDbInstanceToPointInTimeMessage#Domain
   */
  readonly domain?: string;

  /**
   * @schema RestoreDbInstanceToPointInTimeMessage#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

  /**
   * @schema RestoreDbInstanceToPointInTimeMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema RestoreDbInstanceToPointInTimeMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema RestoreDbInstanceToPointInTimeMessage#ProcessorFeatures
   */
  readonly processorFeatures?: ProcessorFeature[];

  /**
   * @schema RestoreDbInstanceToPointInTimeMessage#UseDefaultProcessorFeatures
   */
  readonly useDefaultProcessorFeatures?: boolean;

  /**
   * @schema RestoreDbInstanceToPointInTimeMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema RestoreDbInstanceToPointInTimeMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RestoreDbInstanceToPointInTimeMessage#SourceDbiResourceId
   */
  readonly sourceDbiResourceId?: string;

  /**
   * @schema RestoreDbInstanceToPointInTimeMessage#MaxAllocatedStorage
   */
  readonly maxAllocatedStorage?: number;

}

/**
 * @schema RestoreDbInstanceToPointInTimeResult
 */
export interface RestoreDbInstanceToPointInTimeResult {
  /**
   * @schema RestoreDbInstanceToPointInTimeResult#DBInstance
   */
  readonly dbInstance?: DbInstance;

}

/**
 * @schema RevokeDbSecurityGroupIngressMessage
 */
export interface RevokeDbSecurityGroupIngressMessage {
  /**
   * @schema RevokeDbSecurityGroupIngressMessage#DBSecurityGroupName
   */
  readonly dbSecurityGroupName: string;

  /**
   * @schema RevokeDbSecurityGroupIngressMessage#CIDRIP
   */
  readonly cidrip?: string;

  /**
   * @schema RevokeDbSecurityGroupIngressMessage#EC2SecurityGroupName
   */
  readonly ec2SecurityGroupName?: string;

  /**
   * @schema RevokeDbSecurityGroupIngressMessage#EC2SecurityGroupId
   */
  readonly ec2SecurityGroupId?: string;

  /**
   * @schema RevokeDbSecurityGroupIngressMessage#EC2SecurityGroupOwnerId
   */
  readonly ec2SecurityGroupOwnerId?: string;

}

/**
 * @schema RevokeDbSecurityGroupIngressResult
 */
export interface RevokeDbSecurityGroupIngressResult {
  /**
   * @schema RevokeDbSecurityGroupIngressResult#DBSecurityGroup
   */
  readonly dbSecurityGroup?: DbSecurityGroup;

}

/**
 * @schema StartActivityStreamRequest
 */
export interface StartActivityStreamRequest {
  /**
   * @schema StartActivityStreamRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema StartActivityStreamRequest#Mode
   */
  readonly mode: string;

  /**
   * @schema StartActivityStreamRequest#KmsKeyId
   */
  readonly kmsKeyId: string;

  /**
   * @schema StartActivityStreamRequest#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

}

/**
 * @schema StartActivityStreamResponse
 */
export interface StartActivityStreamResponse {
  /**
   * @schema StartActivityStreamResponse#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema StartActivityStreamResponse#KinesisStreamName
   */
  readonly kinesisStreamName?: string;

  /**
   * @schema StartActivityStreamResponse#Status
   */
  readonly status?: string;

  /**
   * @schema StartActivityStreamResponse#Mode
   */
  readonly mode?: string;

  /**
   * @schema StartActivityStreamResponse#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

}

/**
 * @schema StartDbClusterMessage
 */
export interface StartDbClusterMessage {
  /**
   * @schema StartDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

}

/**
 * @schema StartDbClusterResult
 */
export interface StartDbClusterResult {
  /**
   * @schema StartDbClusterResult#DBCluster
   */
  readonly dbCluster?: DbCluster;

}

/**
 * @schema StartDbInstanceMessage
 */
export interface StartDbInstanceMessage {
  /**
   * @schema StartDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

}

/**
 * @schema StartDbInstanceResult
 */
export interface StartDbInstanceResult {
  /**
   * @schema StartDbInstanceResult#DBInstance
   */
  readonly dbInstance?: DbInstance;

}

/**
 * @schema StartExportTaskMessage
 */
export interface StartExportTaskMessage {
  /**
   * @schema StartExportTaskMessage#ExportTaskIdentifier
   */
  readonly exportTaskIdentifier: string;

  /**
   * @schema StartExportTaskMessage#SourceArn
   */
  readonly sourceArn: string;

  /**
   * @schema StartExportTaskMessage#S3BucketName
   */
  readonly s3BucketName: string;

  /**
   * @schema StartExportTaskMessage#IamRoleArn
   */
  readonly iamRoleArn: string;

  /**
   * @schema StartExportTaskMessage#KmsKeyId
   */
  readonly kmsKeyId: string;

  /**
   * @schema StartExportTaskMessage#S3Prefix
   */
  readonly s3Prefix?: string;

  /**
   * @schema StartExportTaskMessage#ExportOnly
   */
  readonly exportOnly?: string[];

}

/**
 * @schema StopActivityStreamRequest
 */
export interface StopActivityStreamRequest {
  /**
   * @schema StopActivityStreamRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema StopActivityStreamRequest#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

}

/**
 * @schema StopActivityStreamResponse
 */
export interface StopActivityStreamResponse {
  /**
   * @schema StopActivityStreamResponse#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema StopActivityStreamResponse#KinesisStreamName
   */
  readonly kinesisStreamName?: string;

  /**
   * @schema StopActivityStreamResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema StopDbClusterMessage
 */
export interface StopDbClusterMessage {
  /**
   * @schema StopDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

}

/**
 * @schema StopDbClusterResult
 */
export interface StopDbClusterResult {
  /**
   * @schema StopDbClusterResult#DBCluster
   */
  readonly dbCluster?: DbCluster;

}

/**
 * @schema StopDbInstanceMessage
 */
export interface StopDbInstanceMessage {
  /**
   * @schema StopDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema StopDbInstanceMessage#DBSnapshotIdentifier
   */
  readonly dbSnapshotIdentifier?: string;

}

/**
 * @schema StopDbInstanceResult
 */
export interface StopDbInstanceResult {
  /**
   * @schema StopDbInstanceResult#DBInstance
   */
  readonly dbInstance?: DbInstance;

}

/**
 * @schema EventSubscription
 */
export interface EventSubscription {
  /**
   * @schema EventSubscription#CustomerAwsId
   */
  readonly customerAwsId?: string;

  /**
   * @schema EventSubscription#CustSubscriptionId
   */
  readonly custSubscriptionId?: string;

  /**
   * @schema EventSubscription#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema EventSubscription#Status
   */
  readonly status?: string;

  /**
   * @schema EventSubscription#SubscriptionCreationTime
   */
  readonly subscriptionCreationTime?: string;

  /**
   * @schema EventSubscription#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema EventSubscription#SourceIdsList
   */
  readonly sourceIdsList?: string[];

  /**
   * @schema EventSubscription#EventCategoriesList
   */
  readonly eventCategoriesList?: string[];

  /**
   * @schema EventSubscription#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema EventSubscription#EventSubscriptionArn
   */
  readonly eventSubscriptionArn?: string;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key?: string;

  /**
   * @schema Tag#Value
   */
  readonly value?: string;

}

/**
 * @schema ResourcePendingMaintenanceActions
 */
export interface ResourcePendingMaintenanceActions {
  /**
   * @schema ResourcePendingMaintenanceActions#ResourceIdentifier
   */
  readonly resourceIdentifier?: string;

  /**
   * @schema ResourcePendingMaintenanceActions#PendingMaintenanceActionDetails
   */
  readonly pendingMaintenanceActionDetails?: PendingMaintenanceAction[];

}

/**
 * @schema DbSecurityGroup
 */
export interface DbSecurityGroup {
  /**
   * @schema DbSecurityGroup#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema DbSecurityGroup#DBSecurityGroupName
   */
  readonly dbSecurityGroupName?: string;

  /**
   * @schema DbSecurityGroup#DBSecurityGroupDescription
   */
  readonly dbSecurityGroupDescription?: string;

  /**
   * @schema DbSecurityGroup#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema DbSecurityGroup#EC2SecurityGroups
   */
  readonly ec2SecurityGroups?: Ec2SecurityGroup[];

  /**
   * @schema DbSecurityGroup#IPRanges
   */
  readonly ipRanges?: IpRange[];

  /**
   * @schema DbSecurityGroup#DBSecurityGroupArn
   */
  readonly dbSecurityGroupArn?: string;

}

/**
 * @schema DbClusterParameterGroup
 */
export interface DbClusterParameterGroup {
  /**
   * @schema DbClusterParameterGroup#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema DbClusterParameterGroup#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema DbClusterParameterGroup#Description
   */
  readonly description?: string;

  /**
   * @schema DbClusterParameterGroup#DBClusterParameterGroupArn
   */
  readonly dbClusterParameterGroupArn?: string;

}

/**
 * @schema DbClusterSnapshot
 */
export interface DbClusterSnapshot {
  /**
   * @schema DbClusterSnapshot#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema DbClusterSnapshot#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

  /**
   * @schema DbClusterSnapshot#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DbClusterSnapshot#SnapshotCreateTime
   */
  readonly snapshotCreateTime?: string;

  /**
   * @schema DbClusterSnapshot#Engine
   */
  readonly engine?: string;

  /**
   * @schema DbClusterSnapshot#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema DbClusterSnapshot#Status
   */
  readonly status?: string;

  /**
   * @schema DbClusterSnapshot#Port
   */
  readonly port?: number;

  /**
   * @schema DbClusterSnapshot#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema DbClusterSnapshot#ClusterCreateTime
   */
  readonly clusterCreateTime?: string;

  /**
   * @schema DbClusterSnapshot#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema DbClusterSnapshot#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DbClusterSnapshot#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema DbClusterSnapshot#SnapshotType
   */
  readonly snapshotType?: string;

  /**
   * @schema DbClusterSnapshot#PercentProgress
   */
  readonly percentProgress?: number;

  /**
   * @schema DbClusterSnapshot#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema DbClusterSnapshot#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema DbClusterSnapshot#DBClusterSnapshotArn
   */
  readonly dbClusterSnapshotArn?: string;

  /**
   * @schema DbClusterSnapshot#SourceDBClusterSnapshotArn
   */
  readonly sourceDbClusterSnapshotArn?: string;

  /**
   * @schema DbClusterSnapshot#IAMDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

  /**
   * @schema DbClusterSnapshot#TagList
   */
  readonly tagList?: Tag[];

}

/**
 * @schema DbParameterGroup
 */
export interface DbParameterGroup {
  /**
   * @schema DbParameterGroup#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema DbParameterGroup#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema DbParameterGroup#Description
   */
  readonly description?: string;

  /**
   * @schema DbParameterGroup#DBParameterGroupArn
   */
  readonly dbParameterGroupArn?: string;

}

/**
 * @schema DbSnapshot
 */
export interface DbSnapshot {
  /**
   * @schema DbSnapshot#DBSnapshotIdentifier
   */
  readonly dbSnapshotIdentifier?: string;

  /**
   * @schema DbSnapshot#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema DbSnapshot#SnapshotCreateTime
   */
  readonly snapshotCreateTime?: string;

  /**
   * @schema DbSnapshot#Engine
   */
  readonly engine?: string;

  /**
   * @schema DbSnapshot#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema DbSnapshot#Status
   */
  readonly status?: string;

  /**
   * @schema DbSnapshot#Port
   */
  readonly port?: number;

  /**
   * @schema DbSnapshot#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema DbSnapshot#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema DbSnapshot#InstanceCreateTime
   */
  readonly instanceCreateTime?: string;

  /**
   * @schema DbSnapshot#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema DbSnapshot#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DbSnapshot#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema DbSnapshot#SnapshotType
   */
  readonly snapshotType?: string;

  /**
   * @schema DbSnapshot#Iops
   */
  readonly iops?: number;

  /**
   * @schema DbSnapshot#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema DbSnapshot#PercentProgress
   */
  readonly percentProgress?: number;

  /**
   * @schema DbSnapshot#SourceRegion
   */
  readonly sourceRegion?: string;

  /**
   * @schema DbSnapshot#SourceDBSnapshotIdentifier
   */
  readonly sourceDbSnapshotIdentifier?: string;

  /**
   * @schema DbSnapshot#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema DbSnapshot#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema DbSnapshot#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema DbSnapshot#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema DbSnapshot#DBSnapshotArn
   */
  readonly dbSnapshotArn?: string;

  /**
   * @schema DbSnapshot#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema DbSnapshot#IAMDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

  /**
   * @schema DbSnapshot#ProcessorFeatures
   */
  readonly processorFeatures?: ProcessorFeature[];

  /**
   * @schema DbSnapshot#DbiResourceId
   */
  readonly dbiResourceId?: string;

  /**
   * @schema DbSnapshot#TagList
   */
  readonly tagList?: Tag[];

}

/**
 * @schema OptionGroup
 */
export interface OptionGroup {
  /**
   * @schema OptionGroup#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema OptionGroup#OptionGroupDescription
   */
  readonly optionGroupDescription?: string;

  /**
   * @schema OptionGroup#EngineName
   */
  readonly engineName?: string;

  /**
   * @schema OptionGroup#MajorEngineVersion
   */
  readonly majorEngineVersion?: string;

  /**
   * @schema OptionGroup#Options
   */
  readonly options?: Option[];

  /**
   * @schema OptionGroup#AllowsVpcAndNonVpcInstanceMemberships
   */
  readonly allowsVpcAndNonVpcInstanceMemberships?: boolean;

  /**
   * @schema OptionGroup#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema OptionGroup#OptionGroupArn
   */
  readonly optionGroupArn?: string;

}

/**
 * @schema CustomAvailabilityZone
 */
export interface CustomAvailabilityZone {
  /**
   * @schema CustomAvailabilityZone#CustomAvailabilityZoneId
   */
  readonly customAvailabilityZoneId?: string;

  /**
   * @schema CustomAvailabilityZone#CustomAvailabilityZoneName
   */
  readonly customAvailabilityZoneName?: string;

  /**
   * @schema CustomAvailabilityZone#CustomAvailabilityZoneStatus
   */
  readonly customAvailabilityZoneStatus?: string;

  /**
   * @schema CustomAvailabilityZone#VpnDetails
   */
  readonly vpnDetails?: VpnDetails;

}

/**
 * @schema ScalingConfiguration
 */
export interface ScalingConfiguration {
  /**
   * @schema ScalingConfiguration#MinCapacity
   */
  readonly minCapacity?: number;

  /**
   * @schema ScalingConfiguration#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema ScalingConfiguration#AutoPause
   */
  readonly autoPause?: boolean;

  /**
   * @schema ScalingConfiguration#SecondsUntilAutoPause
   */
  readonly secondsUntilAutoPause?: number;

  /**
   * @schema ScalingConfiguration#TimeoutAction
   */
  readonly timeoutAction?: string;

}

/**
 * @schema DbCluster
 */
export interface DbCluster {
  /**
   * @schema DbCluster#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema DbCluster#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema DbCluster#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema DbCluster#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema DbCluster#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema DbCluster#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DbCluster#DBClusterParameterGroup
   */
  readonly dbClusterParameterGroup?: string;

  /**
   * @schema DbCluster#DBSubnetGroup
   */
  readonly dbSubnetGroup?: string;

  /**
   * @schema DbCluster#Status
   */
  readonly status?: string;

  /**
   * @schema DbCluster#PercentProgress
   */
  readonly percentProgress?: string;

  /**
   * @schema DbCluster#EarliestRestorableTime
   */
  readonly earliestRestorableTime?: string;

  /**
   * @schema DbCluster#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema DbCluster#ReaderEndpoint
   */
  readonly readerEndpoint?: string;

  /**
   * @schema DbCluster#CustomEndpoints
   */
  readonly customEndpoints?: string[];

  /**
   * @schema DbCluster#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema DbCluster#Engine
   */
  readonly engine?: string;

  /**
   * @schema DbCluster#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DbCluster#LatestRestorableTime
   */
  readonly latestRestorableTime?: string;

  /**
   * @schema DbCluster#Port
   */
  readonly port?: number;

  /**
   * @schema DbCluster#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema DbCluster#DBClusterOptionGroupMemberships
   */
  readonly dbClusterOptionGroupMemberships?: DbClusterOptionGroupStatus[];

  /**
   * @schema DbCluster#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema DbCluster#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema DbCluster#ReplicationSourceIdentifier
   */
  readonly replicationSourceIdentifier?: string;

  /**
   * @schema DbCluster#ReadReplicaIdentifiers
   */
  readonly readReplicaIdentifiers?: string[];

  /**
   * @schema DbCluster#DBClusterMembers
   */
  readonly dbClusterMembers?: DbClusterMember[];

  /**
   * @schema DbCluster#VpcSecurityGroups
   */
  readonly vpcSecurityGroups?: VpcSecurityGroupMembership[];

  /**
   * @schema DbCluster#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema DbCluster#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema DbCluster#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema DbCluster#DbClusterResourceId
   */
  readonly dbClusterResourceId?: string;

  /**
   * @schema DbCluster#DBClusterArn
   */
  readonly dbClusterArn?: string;

  /**
   * @schema DbCluster#AssociatedRoles
   */
  readonly associatedRoles?: DbClusterRole[];

  /**
   * @schema DbCluster#IAMDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

  /**
   * @schema DbCluster#CloneGroupId
   */
  readonly cloneGroupId?: string;

  /**
   * @schema DbCluster#ClusterCreateTime
   */
  readonly clusterCreateTime?: string;

  /**
   * @schema DbCluster#EarliestBacktrackTime
   */
  readonly earliestBacktrackTime?: string;

  /**
   * @schema DbCluster#BacktrackWindow
   */
  readonly backtrackWindow?: number;

  /**
   * @schema DbCluster#BacktrackConsumedChangeRecords
   */
  readonly backtrackConsumedChangeRecords?: number;

  /**
   * @schema DbCluster#EnabledCloudwatchLogsExports
   */
  readonly enabledCloudwatchLogsExports?: string[];

  /**
   * @schema DbCluster#Capacity
   */
  readonly capacity?: number;

  /**
   * @schema DbCluster#EngineMode
   */
  readonly engineMode?: string;

  /**
   * @schema DbCluster#ScalingConfigurationInfo
   */
  readonly scalingConfigurationInfo?: ScalingConfigurationInfo;

  /**
   * @schema DbCluster#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema DbCluster#HttpEndpointEnabled
   */
  readonly httpEndpointEnabled?: boolean;

  /**
   * @schema DbCluster#ActivityStreamMode
   */
  readonly activityStreamMode?: string;

  /**
   * @schema DbCluster#ActivityStreamStatus
   */
  readonly activityStreamStatus?: string;

  /**
   * @schema DbCluster#ActivityStreamKmsKeyId
   */
  readonly activityStreamKmsKeyId?: string;

  /**
   * @schema DbCluster#ActivityStreamKinesisStreamName
   */
  readonly activityStreamKinesisStreamName?: string;

  /**
   * @schema DbCluster#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema DbCluster#CrossAccountClone
   */
  readonly crossAccountClone?: boolean;

  /**
   * @schema DbCluster#DomainMemberships
   */
  readonly domainMemberships?: DomainMembership[];

  /**
   * @schema DbCluster#TagList
   */
  readonly tagList?: Tag[];

  /**
   * @schema DbCluster#GlobalWriteForwardingStatus
   */
  readonly globalWriteForwardingStatus?: string;

  /**
   * @schema DbCluster#GlobalWriteForwardingRequested
   */
  readonly globalWriteForwardingRequested?: boolean;

}

/**
 * @schema ProcessorFeature
 */
export interface ProcessorFeature {
  /**
   * @schema ProcessorFeature#Name
   */
  readonly name?: string;

  /**
   * @schema ProcessorFeature#Value
   */
  readonly value?: string;

}

/**
 * @schema DbInstance
 */
export interface DbInstance {
  /**
   * @schema DbInstance#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema DbInstance#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema DbInstance#Engine
   */
  readonly engine?: string;

  /**
   * @schema DbInstance#DBInstanceStatus
   */
  readonly dbInstanceStatus?: string;

  /**
   * @schema DbInstance#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema DbInstance#DBName
   */
  readonly dbName?: string;

  /**
   * @schema DbInstance#Endpoint
   */
  readonly endpoint?: Endpoint;

  /**
   * @schema DbInstance#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema DbInstance#InstanceCreateTime
   */
  readonly instanceCreateTime?: string;

  /**
   * @schema DbInstance#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema DbInstance#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema DbInstance#DBSecurityGroups
   */
  readonly dbSecurityGroups?: DbSecurityGroupMembership[];

  /**
   * @schema DbInstance#VpcSecurityGroups
   */
  readonly vpcSecurityGroups?: VpcSecurityGroupMembership[];

  /**
   * @schema DbInstance#DBParameterGroups
   */
  readonly dbParameterGroups?: DbParameterGroupStatus[];

  /**
   * @schema DbInstance#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema DbInstance#DBSubnetGroup
   */
  readonly dbSubnetGroup?: DbSubnetGroup;

  /**
   * @schema DbInstance#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema DbInstance#PendingModifiedValues
   */
  readonly pendingModifiedValues?: PendingModifiedValues;

  /**
   * @schema DbInstance#LatestRestorableTime
   */
  readonly latestRestorableTime?: string;

  /**
   * @schema DbInstance#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema DbInstance#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DbInstance#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema DbInstance#ReadReplicaSourceDBInstanceIdentifier
   */
  readonly readReplicaSourceDbInstanceIdentifier?: string;

  /**
   * @schema DbInstance#ReadReplicaDBInstanceIdentifiers
   */
  readonly readReplicaDbInstanceIdentifiers?: string[];

  /**
   * @schema DbInstance#ReadReplicaDBClusterIdentifiers
   */
  readonly readReplicaDbClusterIdentifiers?: string[];

  /**
   * @schema DbInstance#ReplicaMode
   */
  readonly replicaMode?: string;

  /**
   * @schema DbInstance#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema DbInstance#Iops
   */
  readonly iops?: number;

  /**
   * @schema DbInstance#OptionGroupMemberships
   */
  readonly optionGroupMemberships?: OptionGroupMembership[];

  /**
   * @schema DbInstance#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema DbInstance#NcharCharacterSetName
   */
  readonly ncharCharacterSetName?: string;

  /**
   * @schema DbInstance#SecondaryAvailabilityZone
   */
  readonly secondaryAvailabilityZone?: string;

  /**
   * @schema DbInstance#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema DbInstance#StatusInfos
   */
  readonly statusInfos?: DbInstanceStatusInfo[];

  /**
   * @schema DbInstance#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema DbInstance#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema DbInstance#DbInstancePort
   */
  readonly dbInstancePort?: number;

  /**
   * @schema DbInstance#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DbInstance#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema DbInstance#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema DbInstance#DbiResourceId
   */
  readonly dbiResourceId?: string;

  /**
   * @schema DbInstance#CACertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

  /**
   * @schema DbInstance#DomainMemberships
   */
  readonly domainMemberships?: DomainMembership[];

  /**
   * @schema DbInstance#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema DbInstance#MonitoringInterval
   */
  readonly monitoringInterval?: number;

  /**
   * @schema DbInstance#EnhancedMonitoringResourceArn
   */
  readonly enhancedMonitoringResourceArn?: string;

  /**
   * @schema DbInstance#MonitoringRoleArn
   */
  readonly monitoringRoleArn?: string;

  /**
   * @schema DbInstance#PromotionTier
   */
  readonly promotionTier?: number;

  /**
   * @schema DbInstance#DBInstanceArn
   */
  readonly dbInstanceArn?: string;

  /**
   * @schema DbInstance#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema DbInstance#IAMDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

  /**
   * @schema DbInstance#PerformanceInsightsEnabled
   */
  readonly performanceInsightsEnabled?: boolean;

  /**
   * @schema DbInstance#PerformanceInsightsKMSKeyId
   */
  readonly performanceInsightsKmsKeyId?: string;

  /**
   * @schema DbInstance#PerformanceInsightsRetentionPeriod
   */
  readonly performanceInsightsRetentionPeriod?: number;

  /**
   * @schema DbInstance#EnabledCloudwatchLogsExports
   */
  readonly enabledCloudwatchLogsExports?: string[];

  /**
   * @schema DbInstance#ProcessorFeatures
   */
  readonly processorFeatures?: ProcessorFeature[];

  /**
   * @schema DbInstance#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema DbInstance#AssociatedRoles
   */
  readonly associatedRoles?: DbInstanceRole[];

  /**
   * @schema DbInstance#ListenerEndpoint
   */
  readonly listenerEndpoint?: Endpoint;

  /**
   * @schema DbInstance#MaxAllocatedStorage
   */
  readonly maxAllocatedStorage?: number;

  /**
   * @schema DbInstance#TagList
   */
  readonly tagList?: Tag[];

}

/**
 * @schema UserAuthConfig
 */
export interface UserAuthConfig {
  /**
   * @schema UserAuthConfig#Description
   */
  readonly description?: string;

  /**
   * @schema UserAuthConfig#UserName
   */
  readonly userName?: string;

  /**
   * @schema UserAuthConfig#AuthScheme
   */
  readonly authScheme?: string;

  /**
   * @schema UserAuthConfig#SecretArn
   */
  readonly secretArn?: string;

  /**
   * @schema UserAuthConfig#IAMAuth
   */
  readonly iamAuth?: string;

}

/**
 * @schema DbProxy
 */
export interface DbProxy {
  /**
   * @schema DbProxy#DBProxyName
   */
  readonly dbProxyName?: string;

  /**
   * @schema DbProxy#DBProxyArn
   */
  readonly dbProxyArn?: string;

  /**
   * @schema DbProxy#Status
   */
  readonly status?: string;

  /**
   * @schema DbProxy#EngineFamily
   */
  readonly engineFamily?: string;

  /**
   * @schema DbProxy#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema DbProxy#VpcSubnetIds
   */
  readonly vpcSubnetIds?: string[];

  /**
   * @schema DbProxy#Auth
   */
  readonly auth?: UserAuthConfigInfo[];

  /**
   * @schema DbProxy#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DbProxy#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema DbProxy#RequireTLS
   */
  readonly requireTls?: boolean;

  /**
   * @schema DbProxy#IdleClientTimeout
   */
  readonly idleClientTimeout?: number;

  /**
   * @schema DbProxy#DebugLogging
   */
  readonly debugLogging?: boolean;

  /**
   * @schema DbProxy#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema DbProxy#UpdatedDate
   */
  readonly updatedDate?: string;

}

/**
 * @schema DbSubnetGroup
 */
export interface DbSubnetGroup {
  /**
   * @schema DbSubnetGroup#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema DbSubnetGroup#DBSubnetGroupDescription
   */
  readonly dbSubnetGroupDescription?: string;

  /**
   * @schema DbSubnetGroup#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema DbSubnetGroup#SubnetGroupStatus
   */
  readonly subnetGroupStatus?: string;

  /**
   * @schema DbSubnetGroup#Subnets
   */
  readonly subnets?: Subnet[];

  /**
   * @schema DbSubnetGroup#DBSubnetGroupArn
   */
  readonly dbSubnetGroupArn?: string;

}

/**
 * @schema GlobalCluster
 */
export interface GlobalCluster {
  /**
   * @schema GlobalCluster#GlobalClusterIdentifier
   */
  readonly globalClusterIdentifier?: string;

  /**
   * @schema GlobalCluster#GlobalClusterResourceId
   */
  readonly globalClusterResourceId?: string;

  /**
   * @schema GlobalCluster#GlobalClusterArn
   */
  readonly globalClusterArn?: string;

  /**
   * @schema GlobalCluster#Status
   */
  readonly status?: string;

  /**
   * @schema GlobalCluster#Engine
   */
  readonly engine?: string;

  /**
   * @schema GlobalCluster#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema GlobalCluster#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlobalCluster#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema GlobalCluster#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema GlobalCluster#GlobalClusterMembers
   */
  readonly globalClusterMembers?: GlobalClusterMember[];

}

/**
 * @schema DbInstanceAutomatedBackup
 */
export interface DbInstanceAutomatedBackup {
  /**
   * @schema DbInstanceAutomatedBackup#DBInstanceArn
   */
  readonly dbInstanceArn?: string;

  /**
   * @schema DbInstanceAutomatedBackup#DbiResourceId
   */
  readonly dbiResourceId?: string;

  /**
   * @schema DbInstanceAutomatedBackup#Region
   */
  readonly region?: string;

  /**
   * @schema DbInstanceAutomatedBackup#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema DbInstanceAutomatedBackup#RestoreWindow
   */
  readonly restoreWindow?: RestoreWindow;

  /**
   * @schema DbInstanceAutomatedBackup#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema DbInstanceAutomatedBackup#Status
   */
  readonly status?: string;

  /**
   * @schema DbInstanceAutomatedBackup#Port
   */
  readonly port?: number;

  /**
   * @schema DbInstanceAutomatedBackup#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema DbInstanceAutomatedBackup#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema DbInstanceAutomatedBackup#InstanceCreateTime
   */
  readonly instanceCreateTime?: string;

  /**
   * @schema DbInstanceAutomatedBackup#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema DbInstanceAutomatedBackup#Engine
   */
  readonly engine?: string;

  /**
   * @schema DbInstanceAutomatedBackup#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DbInstanceAutomatedBackup#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema DbInstanceAutomatedBackup#Iops
   */
  readonly iops?: number;

  /**
   * @schema DbInstanceAutomatedBackup#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema DbInstanceAutomatedBackup#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema DbInstanceAutomatedBackup#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema DbInstanceAutomatedBackup#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema DbInstanceAutomatedBackup#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema DbInstanceAutomatedBackup#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema DbInstanceAutomatedBackup#IAMDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

}

/**
 * @schema InstallationMediaFailureCause
 */
export interface InstallationMediaFailureCause {
  /**
   * @schema InstallationMediaFailureCause#Message
   */
  readonly message?: string;

}

/**
 * @schema AccountQuota
 */
export interface AccountQuota {
  /**
   * @schema AccountQuota#AccountQuotaName
   */
  readonly accountQuotaName?: string;

  /**
   * @schema AccountQuota#Used
   */
  readonly used?: number;

  /**
   * @schema AccountQuota#Max
   */
  readonly max?: number;

}

/**
 * @schema Filter
 */
export interface Filter {
  /**
   * @schema Filter#Name
   */
  readonly name: string;

  /**
   * @schema Filter#Values
   */
  readonly values: string[];

}

/**
 * @schema Certificate
 */
export interface Certificate {
  /**
   * @schema Certificate#CertificateIdentifier
   */
  readonly certificateIdentifier?: string;

  /**
   * @schema Certificate#CertificateType
   */
  readonly certificateType?: string;

  /**
   * @schema Certificate#Thumbprint
   */
  readonly thumbprint?: string;

  /**
   * @schema Certificate#ValidFrom
   */
  readonly validFrom?: string;

  /**
   * @schema Certificate#ValidTill
   */
  readonly validTill?: string;

  /**
   * @schema Certificate#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema Certificate#CustomerOverride
   */
  readonly customerOverride?: boolean;

  /**
   * @schema Certificate#CustomerOverrideValidTill
   */
  readonly customerOverrideValidTill?: string;

}

/**
 * @schema Parameter
 */
export interface Parameter {
  /**
   * @schema Parameter#ParameterName
   */
  readonly parameterName?: string;

  /**
   * @schema Parameter#ParameterValue
   */
  readonly parameterValue?: string;

  /**
   * @schema Parameter#Description
   */
  readonly description?: string;

  /**
   * @schema Parameter#Source
   */
  readonly source?: string;

  /**
   * @schema Parameter#ApplyType
   */
  readonly applyType?: string;

  /**
   * @schema Parameter#DataType
   */
  readonly dataType?: string;

  /**
   * @schema Parameter#AllowedValues
   */
  readonly allowedValues?: string;

  /**
   * @schema Parameter#IsModifiable
   */
  readonly isModifiable?: boolean;

  /**
   * @schema Parameter#MinimumEngineVersion
   */
  readonly minimumEngineVersion?: string;

  /**
   * @schema Parameter#ApplyMethod
   */
  readonly applyMethod?: string;

  /**
   * @schema Parameter#SupportedEngineModes
   */
  readonly supportedEngineModes?: string[];

}

/**
 * @schema DbClusterSnapshotAttributesResult
 */
export interface DbClusterSnapshotAttributesResult {
  /**
   * @schema DbClusterSnapshotAttributesResult#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

  /**
   * @schema DbClusterSnapshotAttributesResult#DBClusterSnapshotAttributes
   */
  readonly dbClusterSnapshotAttributes?: DbClusterSnapshotAttribute[];

}

/**
 * @schema DbEngineVersion
 */
export interface DbEngineVersion {
  /**
   * @schema DbEngineVersion#Engine
   */
  readonly engine?: string;

  /**
   * @schema DbEngineVersion#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DbEngineVersion#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema DbEngineVersion#DBEngineDescription
   */
  readonly dbEngineDescription?: string;

  /**
   * @schema DbEngineVersion#DBEngineVersionDescription
   */
  readonly dbEngineVersionDescription?: string;

  /**
   * @schema DbEngineVersion#DefaultCharacterSet
   */
  readonly defaultCharacterSet?: CharacterSet;

  /**
   * @schema DbEngineVersion#SupportedCharacterSets
   */
  readonly supportedCharacterSets?: CharacterSet[];

  /**
   * @schema DbEngineVersion#SupportedNcharCharacterSets
   */
  readonly supportedNcharCharacterSets?: CharacterSet[];

  /**
   * @schema DbEngineVersion#ValidUpgradeTarget
   */
  readonly validUpgradeTarget?: UpgradeTarget[];

  /**
   * @schema DbEngineVersion#SupportedTimezones
   */
  readonly supportedTimezones?: Timezone[];

  /**
   * @schema DbEngineVersion#ExportableLogTypes
   */
  readonly exportableLogTypes?: string[];

  /**
   * @schema DbEngineVersion#SupportsLogExportsToCloudwatchLogs
   */
  readonly supportsLogExportsToCloudwatchLogs?: boolean;

  /**
   * @schema DbEngineVersion#SupportsReadReplica
   */
  readonly supportsReadReplica?: boolean;

  /**
   * @schema DbEngineVersion#SupportedEngineModes
   */
  readonly supportedEngineModes?: string[];

  /**
   * @schema DbEngineVersion#SupportedFeatureNames
   */
  readonly supportedFeatureNames?: string[];

  /**
   * @schema DbEngineVersion#Status
   */
  readonly status?: string;

  /**
   * @schema DbEngineVersion#SupportsParallelQuery
   */
  readonly supportsParallelQuery?: boolean;

  /**
   * @schema DbEngineVersion#SupportsGlobalDatabases
   */
  readonly supportsGlobalDatabases?: boolean;

}

/**
 * @schema DescribeDbLogFilesDetails
 */
export interface DescribeDbLogFilesDetails {
  /**
   * @schema DescribeDbLogFilesDetails#LogFileName
   */
  readonly logFileName?: string;

  /**
   * @schema DescribeDbLogFilesDetails#LastWritten
   */
  readonly lastWritten?: number;

  /**
   * @schema DescribeDbLogFilesDetails#Size
   */
  readonly size?: number;

}

/**
 * @schema DbProxyTargetGroup
 */
export interface DbProxyTargetGroup {
  /**
   * @schema DbProxyTargetGroup#DBProxyName
   */
  readonly dbProxyName?: string;

  /**
   * @schema DbProxyTargetGroup#TargetGroupName
   */
  readonly targetGroupName?: string;

  /**
   * @schema DbProxyTargetGroup#TargetGroupArn
   */
  readonly targetGroupArn?: string;

  /**
   * @schema DbProxyTargetGroup#IsDefault
   */
  readonly isDefault?: boolean;

  /**
   * @schema DbProxyTargetGroup#Status
   */
  readonly status?: string;

  /**
   * @schema DbProxyTargetGroup#ConnectionPoolConfig
   */
  readonly connectionPoolConfig?: ConnectionPoolConfigurationInfo;

  /**
   * @schema DbProxyTargetGroup#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema DbProxyTargetGroup#UpdatedDate
   */
  readonly updatedDate?: string;

}

/**
 * @schema DbProxyTarget
 */
export interface DbProxyTarget {
  /**
   * @schema DbProxyTarget#TargetArn
   */
  readonly targetArn?: string;

  /**
   * @schema DbProxyTarget#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema DbProxyTarget#TrackedClusterId
   */
  readonly trackedClusterId?: string;

  /**
   * @schema DbProxyTarget#RdsResourceId
   */
  readonly rdsResourceId?: string;

  /**
   * @schema DbProxyTarget#Port
   */
  readonly port?: number;

  /**
   * @schema DbProxyTarget#Type
   */
  readonly type?: string;

  /**
   * @schema DbProxyTarget#TargetHealth
   */
  readonly targetHealth?: TargetHealth;

}

/**
 * @schema DbSnapshotAttributesResult
 */
export interface DbSnapshotAttributesResult {
  /**
   * @schema DbSnapshotAttributesResult#DBSnapshotIdentifier
   */
  readonly dbSnapshotIdentifier?: string;

  /**
   * @schema DbSnapshotAttributesResult#DBSnapshotAttributes
   */
  readonly dbSnapshotAttributes?: DbSnapshotAttribute[];

}

/**
 * @schema EngineDefaults
 */
export interface EngineDefaults {
  /**
   * @schema EngineDefaults#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema EngineDefaults#Marker
   */
  readonly marker?: string;

  /**
   * @schema EngineDefaults#Parameters
   */
  readonly parameters?: Parameter[];

}

/**
 * @schema EventCategoriesMap
 */
export interface EventCategoriesMap {
  /**
   * @schema EventCategoriesMap#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema EventCategoriesMap#EventCategories
   */
  readonly eventCategories?: string[];

}

/**
 * @schema Event
 */
export interface Event {
  /**
   * @schema Event#SourceIdentifier
   */
  readonly sourceIdentifier?: string;

  /**
   * @schema Event#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema Event#Message
   */
  readonly message?: string;

  /**
   * @schema Event#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema Event#Date
   */
  readonly date?: string;

  /**
   * @schema Event#SourceArn
   */
  readonly sourceArn?: string;

}

/**
 * @schema OptionGroupOption
 */
export interface OptionGroupOption {
  /**
   * @schema OptionGroupOption#Name
   */
  readonly name?: string;

  /**
   * @schema OptionGroupOption#Description
   */
  readonly description?: string;

  /**
   * @schema OptionGroupOption#EngineName
   */
  readonly engineName?: string;

  /**
   * @schema OptionGroupOption#MajorEngineVersion
   */
  readonly majorEngineVersion?: string;

  /**
   * @schema OptionGroupOption#MinimumRequiredMinorEngineVersion
   */
  readonly minimumRequiredMinorEngineVersion?: string;

  /**
   * @schema OptionGroupOption#PortRequired
   */
  readonly portRequired?: boolean;

  /**
   * @schema OptionGroupOption#DefaultPort
   */
  readonly defaultPort?: number;

  /**
   * @schema OptionGroupOption#OptionsDependedOn
   */
  readonly optionsDependedOn?: string[];

  /**
   * @schema OptionGroupOption#OptionsConflictsWith
   */
  readonly optionsConflictsWith?: string[];

  /**
   * @schema OptionGroupOption#Persistent
   */
  readonly persistent?: boolean;

  /**
   * @schema OptionGroupOption#Permanent
   */
  readonly permanent?: boolean;

  /**
   * @schema OptionGroupOption#RequiresAutoMinorEngineVersionUpgrade
   */
  readonly requiresAutoMinorEngineVersionUpgrade?: boolean;

  /**
   * @schema OptionGroupOption#VpcOnly
   */
  readonly vpcOnly?: boolean;

  /**
   * @schema OptionGroupOption#SupportsOptionVersionDowngrade
   */
  readonly supportsOptionVersionDowngrade?: boolean;

  /**
   * @schema OptionGroupOption#OptionGroupOptionSettings
   */
  readonly optionGroupOptionSettings?: OptionGroupOptionSetting[];

  /**
   * @schema OptionGroupOption#OptionGroupOptionVersions
   */
  readonly optionGroupOptionVersions?: OptionVersion[];

}

/**
 * @schema OrderableDbInstanceOption
 */
export interface OrderableDbInstanceOption {
  /**
   * @schema OrderableDbInstanceOption#Engine
   */
  readonly engine?: string;

  /**
   * @schema OrderableDbInstanceOption#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema OrderableDbInstanceOption#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema OrderableDbInstanceOption#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema OrderableDbInstanceOption#AvailabilityZoneGroup
   */
  readonly availabilityZoneGroup?: string;

  /**
   * @schema OrderableDbInstanceOption#AvailabilityZones
   */
  readonly availabilityZones?: AvailabilityZone[];

  /**
   * @schema OrderableDbInstanceOption#MultiAZCapable
   */
  readonly multiAzCapable?: boolean;

  /**
   * @schema OrderableDbInstanceOption#ReadReplicaCapable
   */
  readonly readReplicaCapable?: boolean;

  /**
   * @schema OrderableDbInstanceOption#Vpc
   */
  readonly vpc?: boolean;

  /**
   * @schema OrderableDbInstanceOption#SupportsStorageEncryption
   */
  readonly supportsStorageEncryption?: boolean;

  /**
   * @schema OrderableDbInstanceOption#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema OrderableDbInstanceOption#SupportsIops
   */
  readonly supportsIops?: boolean;

  /**
   * @schema OrderableDbInstanceOption#SupportsEnhancedMonitoring
   */
  readonly supportsEnhancedMonitoring?: boolean;

  /**
   * @schema OrderableDbInstanceOption#SupportsIAMDatabaseAuthentication
   */
  readonly supportsIamDatabaseAuthentication?: boolean;

  /**
   * @schema OrderableDbInstanceOption#SupportsPerformanceInsights
   */
  readonly supportsPerformanceInsights?: boolean;

  /**
   * @schema OrderableDbInstanceOption#MinStorageSize
   */
  readonly minStorageSize?: number;

  /**
   * @schema OrderableDbInstanceOption#MaxStorageSize
   */
  readonly maxStorageSize?: number;

  /**
   * @schema OrderableDbInstanceOption#MinIopsPerDbInstance
   */
  readonly minIopsPerDbInstance?: number;

  /**
   * @schema OrderableDbInstanceOption#MaxIopsPerDbInstance
   */
  readonly maxIopsPerDbInstance?: number;

  /**
   * @schema OrderableDbInstanceOption#MinIopsPerGib
   */
  readonly minIopsPerGib?: number;

  /**
   * @schema OrderableDbInstanceOption#MaxIopsPerGib
   */
  readonly maxIopsPerGib?: number;

  /**
   * @schema OrderableDbInstanceOption#AvailableProcessorFeatures
   */
  readonly availableProcessorFeatures?: AvailableProcessorFeature[];

  /**
   * @schema OrderableDbInstanceOption#SupportedEngineModes
   */
  readonly supportedEngineModes?: string[];

  /**
   * @schema OrderableDbInstanceOption#SupportsStorageAutoscaling
   */
  readonly supportsStorageAutoscaling?: boolean;

  /**
   * @schema OrderableDbInstanceOption#SupportsKerberosAuthentication
   */
  readonly supportsKerberosAuthentication?: boolean;

  /**
   * @schema OrderableDbInstanceOption#OutpostCapable
   */
  readonly outpostCapable?: boolean;

  /**
   * @schema OrderableDbInstanceOption#SupportsGlobalDatabases
   */
  readonly supportsGlobalDatabases?: boolean;

}

/**
 * @schema ReservedDbInstance
 */
export interface ReservedDbInstance {
  /**
   * @schema ReservedDbInstance#ReservedDBInstanceId
   */
  readonly reservedDbInstanceId?: string;

  /**
   * @schema ReservedDbInstance#ReservedDBInstancesOfferingId
   */
  readonly reservedDbInstancesOfferingId?: string;

  /**
   * @schema ReservedDbInstance#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema ReservedDbInstance#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ReservedDbInstance#Duration
   */
  readonly duration?: number;

  /**
   * @schema ReservedDbInstance#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema ReservedDbInstance#UsagePrice
   */
  readonly usagePrice?: number;

  /**
   * @schema ReservedDbInstance#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema ReservedDbInstance#DBInstanceCount
   */
  readonly dbInstanceCount?: number;

  /**
   * @schema ReservedDbInstance#ProductDescription
   */
  readonly productDescription?: string;

  /**
   * @schema ReservedDbInstance#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema ReservedDbInstance#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema ReservedDbInstance#State
   */
  readonly state?: string;

  /**
   * @schema ReservedDbInstance#RecurringCharges
   */
  readonly recurringCharges?: RecurringCharge[];

  /**
   * @schema ReservedDbInstance#ReservedDBInstanceArn
   */
  readonly reservedDbInstanceArn?: string;

  /**
   * @schema ReservedDbInstance#LeaseId
   */
  readonly leaseId?: string;

}

/**
 * @schema ReservedDbInstancesOffering
 */
export interface ReservedDbInstancesOffering {
  /**
   * @schema ReservedDbInstancesOffering#ReservedDBInstancesOfferingId
   */
  readonly reservedDbInstancesOfferingId?: string;

  /**
   * @schema ReservedDbInstancesOffering#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema ReservedDbInstancesOffering#Duration
   */
  readonly duration?: number;

  /**
   * @schema ReservedDbInstancesOffering#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema ReservedDbInstancesOffering#UsagePrice
   */
  readonly usagePrice?: number;

  /**
   * @schema ReservedDbInstancesOffering#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema ReservedDbInstancesOffering#ProductDescription
   */
  readonly productDescription?: string;

  /**
   * @schema ReservedDbInstancesOffering#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema ReservedDbInstancesOffering#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema ReservedDbInstancesOffering#RecurringCharges
   */
  readonly recurringCharges?: RecurringCharge[];

}

/**
 * @schema SourceRegion
 */
export interface SourceRegion {
  /**
   * @schema SourceRegion#RegionName
   */
  readonly regionName?: string;

  /**
   * @schema SourceRegion#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema SourceRegion#Status
   */
  readonly status?: string;

}

/**
 * @schema ValidDbInstanceModificationsMessage
 */
export interface ValidDbInstanceModificationsMessage {
  /**
   * @schema ValidDbInstanceModificationsMessage#Storage
   */
  readonly storage?: ValidStorageOptions[];

  /**
   * @schema ValidDbInstanceModificationsMessage#ValidProcessorFeatures
   */
  readonly validProcessorFeatures?: AvailableProcessorFeature[];

}

/**
 * @schema CloudwatchLogsExportConfiguration
 */
export interface CloudwatchLogsExportConfiguration {
  /**
   * @schema CloudwatchLogsExportConfiguration#EnableLogTypes
   */
  readonly enableLogTypes?: string[];

  /**
   * @schema CloudwatchLogsExportConfiguration#DisableLogTypes
   */
  readonly disableLogTypes?: string[];

}

/**
 * @schema ConnectionPoolConfiguration
 */
export interface ConnectionPoolConfiguration {
  /**
   * @schema ConnectionPoolConfiguration#MaxConnectionsPercent
   */
  readonly maxConnectionsPercent?: number;

  /**
   * @schema ConnectionPoolConfiguration#MaxIdleConnectionsPercent
   */
  readonly maxIdleConnectionsPercent?: number;

  /**
   * @schema ConnectionPoolConfiguration#ConnectionBorrowTimeout
   */
  readonly connectionBorrowTimeout?: number;

  /**
   * @schema ConnectionPoolConfiguration#SessionPinningFilters
   */
  readonly sessionPinningFilters?: string[];

  /**
   * @schema ConnectionPoolConfiguration#InitQuery
   */
  readonly initQuery?: string;

}

/**
 * @schema OptionConfiguration
 */
export interface OptionConfiguration {
  /**
   * @schema OptionConfiguration#OptionName
   */
  readonly optionName: string;

  /**
   * @schema OptionConfiguration#Port
   */
  readonly port?: number;

  /**
   * @schema OptionConfiguration#OptionVersion
   */
  readonly optionVersion?: string;

  /**
   * @schema OptionConfiguration#DBSecurityGroupMemberships
   */
  readonly dbSecurityGroupMemberships?: string[];

  /**
   * @schema OptionConfiguration#VpcSecurityGroupMemberships
   */
  readonly vpcSecurityGroupMemberships?: string[];

  /**
   * @schema OptionConfiguration#OptionSettings
   */
  readonly optionSettings?: OptionSetting[];

}

/**
 * @schema PendingMaintenanceAction
 */
export interface PendingMaintenanceAction {
  /**
   * @schema PendingMaintenanceAction#Action
   */
  readonly action?: string;

  /**
   * @schema PendingMaintenanceAction#AutoAppliedAfterDate
   */
  readonly autoAppliedAfterDate?: string;

  /**
   * @schema PendingMaintenanceAction#ForcedApplyDate
   */
  readonly forcedApplyDate?: string;

  /**
   * @schema PendingMaintenanceAction#OptInStatus
   */
  readonly optInStatus?: string;

  /**
   * @schema PendingMaintenanceAction#CurrentApplyDate
   */
  readonly currentApplyDate?: string;

  /**
   * @schema PendingMaintenanceAction#Description
   */
  readonly description?: string;

}

/**
 * @schema Ec2SecurityGroup
 */
export interface Ec2SecurityGroup {
  /**
   * @schema Ec2SecurityGroup#Status
   */
  readonly status?: string;

  /**
   * @schema Ec2SecurityGroup#EC2SecurityGroupName
   */
  readonly ec2SecurityGroupName?: string;

  /**
   * @schema Ec2SecurityGroup#EC2SecurityGroupId
   */
  readonly ec2SecurityGroupId?: string;

  /**
   * @schema Ec2SecurityGroup#EC2SecurityGroupOwnerId
   */
  readonly ec2SecurityGroupOwnerId?: string;

}

/**
 * @schema IpRange
 */
export interface IpRange {
  /**
   * @schema IpRange#Status
   */
  readonly status?: string;

  /**
   * @schema IpRange#CIDRIP
   */
  readonly cidrip?: string;

}

/**
 * @schema Option
 */
export interface Option {
  /**
   * @schema Option#OptionName
   */
  readonly optionName?: string;

  /**
   * @schema Option#OptionDescription
   */
  readonly optionDescription?: string;

  /**
   * @schema Option#Persistent
   */
  readonly persistent?: boolean;

  /**
   * @schema Option#Permanent
   */
  readonly permanent?: boolean;

  /**
   * @schema Option#Port
   */
  readonly port?: number;

  /**
   * @schema Option#OptionVersion
   */
  readonly optionVersion?: string;

  /**
   * @schema Option#OptionSettings
   */
  readonly optionSettings?: OptionSetting[];

  /**
   * @schema Option#DBSecurityGroupMemberships
   */
  readonly dbSecurityGroupMemberships?: DbSecurityGroupMembership[];

  /**
   * @schema Option#VpcSecurityGroupMemberships
   */
  readonly vpcSecurityGroupMemberships?: VpcSecurityGroupMembership[];

}

/**
 * @schema VpnDetails
 */
export interface VpnDetails {
  /**
   * @schema VpnDetails#VpnId
   */
  readonly vpnId?: string;

  /**
   * @schema VpnDetails#VpnTunnelOriginatorIP
   */
  readonly vpnTunnelOriginatorIp?: string;

  /**
   * @schema VpnDetails#VpnGatewayIp
   */
  readonly vpnGatewayIp?: string;

  /**
   * @schema VpnDetails#VpnPSK
   */
  readonly vpnPsk?: string;

  /**
   * @schema VpnDetails#VpnName
   */
  readonly vpnName?: string;

  /**
   * @schema VpnDetails#VpnState
   */
  readonly vpnState?: string;

}

/**
 * @schema DbClusterOptionGroupStatus
 */
export interface DbClusterOptionGroupStatus {
  /**
   * @schema DbClusterOptionGroupStatus#DBClusterOptionGroupName
   */
  readonly dbClusterOptionGroupName?: string;

  /**
   * @schema DbClusterOptionGroupStatus#Status
   */
  readonly status?: string;

}

/**
 * @schema DbClusterMember
 */
export interface DbClusterMember {
  /**
   * @schema DbClusterMember#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema DbClusterMember#IsClusterWriter
   */
  readonly isClusterWriter?: boolean;

  /**
   * @schema DbClusterMember#DBClusterParameterGroupStatus
   */
  readonly dbClusterParameterGroupStatus?: string;

  /**
   * @schema DbClusterMember#PromotionTier
   */
  readonly promotionTier?: number;

}

/**
 * @schema VpcSecurityGroupMembership
 */
export interface VpcSecurityGroupMembership {
  /**
   * @schema VpcSecurityGroupMembership#VpcSecurityGroupId
   */
  readonly vpcSecurityGroupId?: string;

  /**
   * @schema VpcSecurityGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * @schema DbClusterRole
 */
export interface DbClusterRole {
  /**
   * @schema DbClusterRole#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DbClusterRole#Status
   */
  readonly status?: string;

  /**
   * @schema DbClusterRole#FeatureName
   */
  readonly featureName?: string;

}

/**
 * @schema ScalingConfigurationInfo
 */
export interface ScalingConfigurationInfo {
  /**
   * @schema ScalingConfigurationInfo#MinCapacity
   */
  readonly minCapacity?: number;

  /**
   * @schema ScalingConfigurationInfo#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema ScalingConfigurationInfo#AutoPause
   */
  readonly autoPause?: boolean;

  /**
   * @schema ScalingConfigurationInfo#SecondsUntilAutoPause
   */
  readonly secondsUntilAutoPause?: number;

  /**
   * @schema ScalingConfigurationInfo#TimeoutAction
   */
  readonly timeoutAction?: string;

}

/**
 * @schema DomainMembership
 */
export interface DomainMembership {
  /**
   * @schema DomainMembership#Domain
   */
  readonly domain?: string;

  /**
   * @schema DomainMembership#Status
   */
  readonly status?: string;

  /**
   * @schema DomainMembership#FQDN
   */
  readonly fqdn?: string;

  /**
   * @schema DomainMembership#IAMRoleName
   */
  readonly iamRoleName?: string;

}

/**
 * @schema Endpoint
 */
export interface Endpoint {
  /**
   * @schema Endpoint#Address
   */
  readonly address?: string;

  /**
   * @schema Endpoint#Port
   */
  readonly port?: number;

  /**
   * @schema Endpoint#HostedZoneId
   */
  readonly hostedZoneId?: string;

}

/**
 * @schema DbSecurityGroupMembership
 */
export interface DbSecurityGroupMembership {
  /**
   * @schema DbSecurityGroupMembership#DBSecurityGroupName
   */
  readonly dbSecurityGroupName?: string;

  /**
   * @schema DbSecurityGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * @schema DbParameterGroupStatus
 */
export interface DbParameterGroupStatus {
  /**
   * @schema DbParameterGroupStatus#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema DbParameterGroupStatus#ParameterApplyStatus
   */
  readonly parameterApplyStatus?: string;

}

/**
 * @schema PendingModifiedValues
 */
export interface PendingModifiedValues {
  /**
   * @schema PendingModifiedValues#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema PendingModifiedValues#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema PendingModifiedValues#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema PendingModifiedValues#Port
   */
  readonly port?: number;

  /**
   * @schema PendingModifiedValues#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema PendingModifiedValues#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema PendingModifiedValues#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema PendingModifiedValues#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema PendingModifiedValues#Iops
   */
  readonly iops?: number;

  /**
   * @schema PendingModifiedValues#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema PendingModifiedValues#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema PendingModifiedValues#CACertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

  /**
   * @schema PendingModifiedValues#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema PendingModifiedValues#PendingCloudwatchLogsExports
   */
  readonly pendingCloudwatchLogsExports?: PendingCloudwatchLogsExports;

  /**
   * @schema PendingModifiedValues#ProcessorFeatures
   */
  readonly processorFeatures?: ProcessorFeature[];

}

/**
 * @schema OptionGroupMembership
 */
export interface OptionGroupMembership {
  /**
   * @schema OptionGroupMembership#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema OptionGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * @schema DbInstanceStatusInfo
 */
export interface DbInstanceStatusInfo {
  /**
   * @schema DbInstanceStatusInfo#StatusType
   */
  readonly statusType?: string;

  /**
   * @schema DbInstanceStatusInfo#Normal
   */
  readonly normal?: boolean;

  /**
   * @schema DbInstanceStatusInfo#Status
   */
  readonly status?: string;

  /**
   * @schema DbInstanceStatusInfo#Message
   */
  readonly message?: string;

}

/**
 * @schema DbInstanceRole
 */
export interface DbInstanceRole {
  /**
   * @schema DbInstanceRole#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DbInstanceRole#FeatureName
   */
  readonly featureName?: string;

  /**
   * @schema DbInstanceRole#Status
   */
  readonly status?: string;

}

/**
 * @schema UserAuthConfigInfo
 */
export interface UserAuthConfigInfo {
  /**
   * @schema UserAuthConfigInfo#Description
   */
  readonly description?: string;

  /**
   * @schema UserAuthConfigInfo#UserName
   */
  readonly userName?: string;

  /**
   * @schema UserAuthConfigInfo#AuthScheme
   */
  readonly authScheme?: string;

  /**
   * @schema UserAuthConfigInfo#SecretArn
   */
  readonly secretArn?: string;

  /**
   * @schema UserAuthConfigInfo#IAMAuth
   */
  readonly iamAuth?: string;

}

/**
 * @schema Subnet
 */
export interface Subnet {
  /**
   * @schema Subnet#SubnetIdentifier
   */
  readonly subnetIdentifier?: string;

  /**
   * @schema Subnet#SubnetAvailabilityZone
   */
  readonly subnetAvailabilityZone?: AvailabilityZone;

  /**
   * @schema Subnet#SubnetOutpost
   */
  readonly subnetOutpost?: Outpost;

  /**
   * @schema Subnet#SubnetStatus
   */
  readonly subnetStatus?: string;

}

/**
 * @schema GlobalClusterMember
 */
export interface GlobalClusterMember {
  /**
   * @schema GlobalClusterMember#DBClusterArn
   */
  readonly dbClusterArn?: string;

  /**
   * @schema GlobalClusterMember#Readers
   */
  readonly readers?: string[];

  /**
   * @schema GlobalClusterMember#IsWriter
   */
  readonly isWriter?: boolean;

  /**
   * @schema GlobalClusterMember#GlobalWriteForwardingStatus
   */
  readonly globalWriteForwardingStatus?: string;

}

/**
 * @schema RestoreWindow
 */
export interface RestoreWindow {
  /**
   * @schema RestoreWindow#EarliestTime
   */
  readonly earliestTime?: string;

  /**
   * @schema RestoreWindow#LatestTime
   */
  readonly latestTime?: string;

}

/**
 * @schema DbClusterSnapshotAttribute
 */
export interface DbClusterSnapshotAttribute {
  /**
   * @schema DbClusterSnapshotAttribute#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema DbClusterSnapshotAttribute#AttributeValues
   */
  readonly attributeValues?: string[];

}

/**
 * @schema CharacterSet
 */
export interface CharacterSet {
  /**
   * @schema CharacterSet#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema CharacterSet#CharacterSetDescription
   */
  readonly characterSetDescription?: string;

}

/**
 * @schema UpgradeTarget
 */
export interface UpgradeTarget {
  /**
   * @schema UpgradeTarget#Engine
   */
  readonly engine?: string;

  /**
   * @schema UpgradeTarget#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema UpgradeTarget#Description
   */
  readonly description?: string;

  /**
   * @schema UpgradeTarget#AutoUpgrade
   */
  readonly autoUpgrade?: boolean;

  /**
   * @schema UpgradeTarget#IsMajorVersionUpgrade
   */
  readonly isMajorVersionUpgrade?: boolean;

}

/**
 * @schema Timezone
 */
export interface Timezone {
  /**
   * @schema Timezone#TimezoneName
   */
  readonly timezoneName?: string;

}

/**
 * @schema ConnectionPoolConfigurationInfo
 */
export interface ConnectionPoolConfigurationInfo {
  /**
   * @schema ConnectionPoolConfigurationInfo#MaxConnectionsPercent
   */
  readonly maxConnectionsPercent?: number;

  /**
   * @schema ConnectionPoolConfigurationInfo#MaxIdleConnectionsPercent
   */
  readonly maxIdleConnectionsPercent?: number;

  /**
   * @schema ConnectionPoolConfigurationInfo#ConnectionBorrowTimeout
   */
  readonly connectionBorrowTimeout?: number;

  /**
   * @schema ConnectionPoolConfigurationInfo#SessionPinningFilters
   */
  readonly sessionPinningFilters?: string[];

  /**
   * @schema ConnectionPoolConfigurationInfo#InitQuery
   */
  readonly initQuery?: string;

}

/**
 * @schema TargetHealth
 */
export interface TargetHealth {
  /**
   * @schema TargetHealth#State
   */
  readonly state?: string;

  /**
   * @schema TargetHealth#Reason
   */
  readonly reason?: string;

  /**
   * @schema TargetHealth#Description
   */
  readonly description?: string;

}

/**
 * @schema DbSnapshotAttribute
 */
export interface DbSnapshotAttribute {
  /**
   * @schema DbSnapshotAttribute#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema DbSnapshotAttribute#AttributeValues
   */
  readonly attributeValues?: string[];

}

/**
 * @schema OptionGroupOptionSetting
 */
export interface OptionGroupOptionSetting {
  /**
   * @schema OptionGroupOptionSetting#SettingName
   */
  readonly settingName?: string;

  /**
   * @schema OptionGroupOptionSetting#SettingDescription
   */
  readonly settingDescription?: string;

  /**
   * @schema OptionGroupOptionSetting#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema OptionGroupOptionSetting#ApplyType
   */
  readonly applyType?: string;

  /**
   * @schema OptionGroupOptionSetting#AllowedValues
   */
  readonly allowedValues?: string;

  /**
   * @schema OptionGroupOptionSetting#IsModifiable
   */
  readonly isModifiable?: boolean;

  /**
   * @schema OptionGroupOptionSetting#IsRequired
   */
  readonly isRequired?: boolean;

  /**
   * @schema OptionGroupOptionSetting#MinimumEngineVersionPerAllowedValue
   */
  readonly minimumEngineVersionPerAllowedValue?: MinimumEngineVersionPerAllowedValue[];

}

/**
 * @schema OptionVersion
 */
export interface OptionVersion {
  /**
   * @schema OptionVersion#Version
   */
  readonly version?: string;

  /**
   * @schema OptionVersion#IsDefault
   */
  readonly isDefault?: boolean;

}

/**
 * @schema AvailabilityZone
 */
export interface AvailabilityZone {
  /**
   * @schema AvailabilityZone#Name
   */
  readonly name?: string;

}

/**
 * @schema AvailableProcessorFeature
 */
export interface AvailableProcessorFeature {
  /**
   * @schema AvailableProcessorFeature#Name
   */
  readonly name?: string;

  /**
   * @schema AvailableProcessorFeature#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema AvailableProcessorFeature#AllowedValues
   */
  readonly allowedValues?: string;

}

/**
 * @schema RecurringCharge
 */
export interface RecurringCharge {
  /**
   * @schema RecurringCharge#RecurringChargeAmount
   */
  readonly recurringChargeAmount?: number;

  /**
   * @schema RecurringCharge#RecurringChargeFrequency
   */
  readonly recurringChargeFrequency?: string;

}

/**
 * @schema ValidStorageOptions
 */
export interface ValidStorageOptions {
  /**
   * @schema ValidStorageOptions#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema ValidStorageOptions#StorageSize
   */
  readonly storageSize?: Range[];

  /**
   * @schema ValidStorageOptions#ProvisionedIops
   */
  readonly provisionedIops?: Range[];

  /**
   * @schema ValidStorageOptions#IopsToStorageRatio
   */
  readonly iopsToStorageRatio?: DoubleRange[];

  /**
   * @schema ValidStorageOptions#SupportsStorageAutoscaling
   */
  readonly supportsStorageAutoscaling?: boolean;

}

/**
 * @schema OptionSetting
 */
export interface OptionSetting {
  /**
   * @schema OptionSetting#Name
   */
  readonly name?: string;

  /**
   * @schema OptionSetting#Value
   */
  readonly value?: string;

  /**
   * @schema OptionSetting#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema OptionSetting#Description
   */
  readonly description?: string;

  /**
   * @schema OptionSetting#ApplyType
   */
  readonly applyType?: string;

  /**
   * @schema OptionSetting#DataType
   */
  readonly dataType?: string;

  /**
   * @schema OptionSetting#AllowedValues
   */
  readonly allowedValues?: string;

  /**
   * @schema OptionSetting#IsModifiable
   */
  readonly isModifiable?: boolean;

  /**
   * @schema OptionSetting#IsCollection
   */
  readonly isCollection?: boolean;

}

/**
 * @schema PendingCloudwatchLogsExports
 */
export interface PendingCloudwatchLogsExports {
  /**
   * @schema PendingCloudwatchLogsExports#LogTypesToEnable
   */
  readonly logTypesToEnable?: string[];

  /**
   * @schema PendingCloudwatchLogsExports#LogTypesToDisable
   */
  readonly logTypesToDisable?: string[];

}

/**
 * @schema Outpost
 */
export interface Outpost {
  /**
   * @schema Outpost#Arn
   */
  readonly arn?: string;

}

/**
 * @schema MinimumEngineVersionPerAllowedValue
 */
export interface MinimumEngineVersionPerAllowedValue {
  /**
   * @schema MinimumEngineVersionPerAllowedValue#AllowedValue
   */
  readonly allowedValue?: string;

  /**
   * @schema MinimumEngineVersionPerAllowedValue#MinimumEngineVersion
   */
  readonly minimumEngineVersion?: string;

}

/**
 * @schema Range
 */
export interface Range {
  /**
   * @schema Range#From
   */
  readonly from?: number;

  /**
   * @schema Range#To
   */
  readonly to?: number;

  /**
   * @schema Range#Step
   */
  readonly step?: number;

}

/**
 * @schema DoubleRange
 */
export interface DoubleRange {
  /**
   * @schema DoubleRange#From
   */
  readonly from?: number;

  /**
   * @schema DoubleRange#To
   */
  readonly to?: number;

}
