/**
 * @schema RdsAddRoleToDbClusterMessage
 */
export interface RdsAddRoleToDbClusterMessage {
  /**
   * @schema RdsAddRoleToDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema RdsAddRoleToDbClusterMessage#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema RdsAddRoleToDbClusterMessage#FeatureName
   */
  readonly featureName?: string;

}

/**
 * @schema RdsAddRoleToDbInstanceMessage
 */
export interface RdsAddRoleToDbInstanceMessage {
  /**
   * @schema RdsAddRoleToDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema RdsAddRoleToDbInstanceMessage#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema RdsAddRoleToDbInstanceMessage#FeatureName
   */
  readonly featureName: string;

}

/**
 * @schema RdsAddSourceIdentifierToSubscriptionMessage
 */
export interface RdsAddSourceIdentifierToSubscriptionMessage {
  /**
   * @schema RdsAddSourceIdentifierToSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName: string;

  /**
   * @schema RdsAddSourceIdentifierToSubscriptionMessage#SourceIdentifier
   */
  readonly sourceIdentifier: string;

}

/**
 * @schema RdsAddSourceIdentifierToSubscriptionResult
 */
export interface RdsAddSourceIdentifierToSubscriptionResult {
  /**
   * @schema RdsAddSourceIdentifierToSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: RdsEventSubscription;

}

/**
 * @schema RdsAddTagsToResourceMessage
 */
export interface RdsAddTagsToResourceMessage {
  /**
   * @schema RdsAddTagsToResourceMessage#ResourceName
   */
  readonly resourceName: string;

  /**
   * @schema RdsAddTagsToResourceMessage#Tags
   */
  readonly tags: RdsTag[];

}

/**
 * @schema RdsApplyPendingMaintenanceActionMessage
 */
export interface RdsApplyPendingMaintenanceActionMessage {
  /**
   * @schema RdsApplyPendingMaintenanceActionMessage#ResourceIdentifier
   */
  readonly resourceIdentifier: string;

  /**
   * @schema RdsApplyPendingMaintenanceActionMessage#ApplyAction
   */
  readonly applyAction: string;

  /**
   * @schema RdsApplyPendingMaintenanceActionMessage#OptInType
   */
  readonly optInType: string;

}

/**
 * @schema RdsApplyPendingMaintenanceActionResult
 */
export interface RdsApplyPendingMaintenanceActionResult {
  /**
   * @schema RdsApplyPendingMaintenanceActionResult#ResourcePendingMaintenanceActions
   */
  readonly resourcePendingMaintenanceActions?: RdsResourcePendingMaintenanceActions;

}

/**
 * @schema RdsAuthorizeDbSecurityGroupIngressMessage
 */
export interface RdsAuthorizeDbSecurityGroupIngressMessage {
  /**
   * @schema RdsAuthorizeDbSecurityGroupIngressMessage#DBSecurityGroupName
   */
  readonly dbSecurityGroupName: string;

  /**
   * @schema RdsAuthorizeDbSecurityGroupIngressMessage#CIDRIP
   */
  readonly cidrip?: string;

  /**
   * @schema RdsAuthorizeDbSecurityGroupIngressMessage#EC2SecurityGroupName
   */
  readonly ec2SecurityGroupName?: string;

  /**
   * @schema RdsAuthorizeDbSecurityGroupIngressMessage#EC2SecurityGroupId
   */
  readonly ec2SecurityGroupId?: string;

  /**
   * @schema RdsAuthorizeDbSecurityGroupIngressMessage#EC2SecurityGroupOwnerId
   */
  readonly ec2SecurityGroupOwnerId?: string;

}

/**
 * @schema RdsAuthorizeDbSecurityGroupIngressResult
 */
export interface RdsAuthorizeDbSecurityGroupIngressResult {
  /**
   * @schema RdsAuthorizeDbSecurityGroupIngressResult#DBSecurityGroup
   */
  readonly dbSecurityGroup?: RdsdbSecurityGroup;

}

/**
 * @schema RdsBacktrackDbClusterMessage
 */
export interface RdsBacktrackDbClusterMessage {
  /**
   * @schema RdsBacktrackDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema RdsBacktrackDbClusterMessage#BacktrackTo
   */
  readonly backtrackTo: string;

  /**
   * @schema RdsBacktrackDbClusterMessage#Force
   */
  readonly force?: boolean;

  /**
   * @schema RdsBacktrackDbClusterMessage#UseEarliestTimeOnPointInTimeUnavailable
   */
  readonly useEarliestTimeOnPointInTimeUnavailable?: boolean;

}

/**
 * @schema RdsdbClusterBacktrack
 */
export interface RdsdbClusterBacktrack {
  /**
   * @schema RdsdbClusterBacktrack#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsdbClusterBacktrack#BacktrackIdentifier
   */
  readonly backtrackIdentifier?: string;

  /**
   * @schema RdsdbClusterBacktrack#BacktrackTo
   */
  readonly backtrackTo?: string;

  /**
   * @schema RdsdbClusterBacktrack#BacktrackedFrom
   */
  readonly backtrackedFrom?: string;

  /**
   * @schema RdsdbClusterBacktrack#BacktrackRequestCreationTime
   */
  readonly backtrackRequestCreationTime?: string;

  /**
   * @schema RdsdbClusterBacktrack#Status
   */
  readonly status?: string;

}

/**
 * @schema RdsCancelExportTaskMessage
 */
export interface RdsCancelExportTaskMessage {
  /**
   * @schema RdsCancelExportTaskMessage#ExportTaskIdentifier
   */
  readonly exportTaskIdentifier: string;

}

/**
 * @schema RdsExportTask
 */
export interface RdsExportTask {
  /**
   * @schema RdsExportTask#ExportTaskIdentifier
   */
  readonly exportTaskIdentifier?: string;

  /**
   * @schema RdsExportTask#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema RdsExportTask#ExportOnly
   */
  readonly exportOnly?: string[];

  /**
   * @schema RdsExportTask#SnapshotTime
   */
  readonly snapshotTime?: string;

  /**
   * @schema RdsExportTask#TaskStartTime
   */
  readonly taskStartTime?: string;

  /**
   * @schema RdsExportTask#TaskEndTime
   */
  readonly taskEndTime?: string;

  /**
   * @schema RdsExportTask#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema RdsExportTask#S3Prefix
   */
  readonly s3Prefix?: string;

  /**
   * @schema RdsExportTask#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema RdsExportTask#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsExportTask#Status
   */
  readonly status?: string;

  /**
   * @schema RdsExportTask#PercentProgress
   */
  readonly percentProgress?: number;

  /**
   * @schema RdsExportTask#TotalExtractedDataInGB
   */
  readonly totalExtractedDataInGb?: number;

  /**
   * @schema RdsExportTask#FailureCause
   */
  readonly failureCause?: string;

  /**
   * @schema RdsExportTask#WarningMessage
   */
  readonly warningMessage?: string;

}

/**
 * @schema RdsCopyDbClusterParameterGroupMessage
 */
export interface RdsCopyDbClusterParameterGroupMessage {
  /**
   * @schema RdsCopyDbClusterParameterGroupMessage#SourceDBClusterParameterGroupIdentifier
   */
  readonly sourceDbClusterParameterGroupIdentifier: string;

  /**
   * @schema RdsCopyDbClusterParameterGroupMessage#TargetDBClusterParameterGroupIdentifier
   */
  readonly targetDbClusterParameterGroupIdentifier: string;

  /**
   * @schema RdsCopyDbClusterParameterGroupMessage#TargetDBClusterParameterGroupDescription
   */
  readonly targetDbClusterParameterGroupDescription: string;

  /**
   * @schema RdsCopyDbClusterParameterGroupMessage#Tags
   */
  readonly tags?: RdsTag[];

}

/**
 * @schema RdsCopyDbClusterParameterGroupResult
 */
export interface RdsCopyDbClusterParameterGroupResult {
  /**
   * @schema RdsCopyDbClusterParameterGroupResult#DBClusterParameterGroup
   */
  readonly dbClusterParameterGroup?: RdsdbClusterParameterGroup;

}

/**
 * @schema RdsCopyDbClusterSnapshotMessage
 */
export interface RdsCopyDbClusterSnapshotMessage {
  /**
   * @schema RdsCopyDbClusterSnapshotMessage#SourceDBClusterSnapshotIdentifier
   */
  readonly sourceDbClusterSnapshotIdentifier: string;

  /**
   * @schema RdsCopyDbClusterSnapshotMessage#TargetDBClusterSnapshotIdentifier
   */
  readonly targetDbClusterSnapshotIdentifier: string;

  /**
   * @schema RdsCopyDbClusterSnapshotMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsCopyDbClusterSnapshotMessage#PreSignedUrl
   */
  readonly preSignedUrl?: string;

  /**
   * @schema RdsCopyDbClusterSnapshotMessage#CopyTags
   */
  readonly copyTags?: boolean;

  /**
   * @schema RdsCopyDbClusterSnapshotMessage#Tags
   */
  readonly tags?: RdsTag[];

  /**
   * @schema RdsCopyDbClusterSnapshotMessage#SourceRegion
   */
  readonly sourceRegion?: string;

}

/**
 * @schema RdsCopyDbClusterSnapshotResult
 */
export interface RdsCopyDbClusterSnapshotResult {
  /**
   * @schema RdsCopyDbClusterSnapshotResult#DBClusterSnapshot
   */
  readonly dbClusterSnapshot?: RdsdbClusterSnapshot;

}

/**
 * @schema RdsCopyDbParameterGroupMessage
 */
export interface RdsCopyDbParameterGroupMessage {
  /**
   * @schema RdsCopyDbParameterGroupMessage#SourceDBParameterGroupIdentifier
   */
  readonly sourceDbParameterGroupIdentifier: string;

  /**
   * @schema RdsCopyDbParameterGroupMessage#TargetDBParameterGroupIdentifier
   */
  readonly targetDbParameterGroupIdentifier: string;

  /**
   * @schema RdsCopyDbParameterGroupMessage#TargetDBParameterGroupDescription
   */
  readonly targetDbParameterGroupDescription: string;

  /**
   * @schema RdsCopyDbParameterGroupMessage#Tags
   */
  readonly tags?: RdsTag[];

}

/**
 * @schema RdsCopyDbParameterGroupResult
 */
export interface RdsCopyDbParameterGroupResult {
  /**
   * @schema RdsCopyDbParameterGroupResult#DBParameterGroup
   */
  readonly dbParameterGroup?: RdsdbParameterGroup;

}

/**
 * @schema RdsCopyDbSnapshotMessage
 */
export interface RdsCopyDbSnapshotMessage {
  /**
   * @schema RdsCopyDbSnapshotMessage#SourceDBSnapshotIdentifier
   */
  readonly sourceDbSnapshotIdentifier: string;

  /**
   * @schema RdsCopyDbSnapshotMessage#TargetDBSnapshotIdentifier
   */
  readonly targetDbSnapshotIdentifier: string;

  /**
   * @schema RdsCopyDbSnapshotMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsCopyDbSnapshotMessage#Tags
   */
  readonly tags?: RdsTag[];

  /**
   * @schema RdsCopyDbSnapshotMessage#CopyTags
   */
  readonly copyTags?: boolean;

  /**
   * @schema RdsCopyDbSnapshotMessage#PreSignedUrl
   */
  readonly preSignedUrl?: string;

  /**
   * @schema RdsCopyDbSnapshotMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsCopyDbSnapshotMessage#TargetCustomAvailabilityZone
   */
  readonly targetCustomAvailabilityZone?: string;

  /**
   * @schema RdsCopyDbSnapshotMessage#SourceRegion
   */
  readonly sourceRegion?: string;

}

/**
 * @schema RdsCopyDbSnapshotResult
 */
export interface RdsCopyDbSnapshotResult {
  /**
   * @schema RdsCopyDbSnapshotResult#DBSnapshot
   */
  readonly dbSnapshot?: RdsdbSnapshot;

}

/**
 * @schema RdsCopyOptionGroupMessage
 */
export interface RdsCopyOptionGroupMessage {
  /**
   * @schema RdsCopyOptionGroupMessage#SourceOptionGroupIdentifier
   */
  readonly sourceOptionGroupIdentifier: string;

  /**
   * @schema RdsCopyOptionGroupMessage#TargetOptionGroupIdentifier
   */
  readonly targetOptionGroupIdentifier: string;

  /**
   * @schema RdsCopyOptionGroupMessage#TargetOptionGroupDescription
   */
  readonly targetOptionGroupDescription: string;

  /**
   * @schema RdsCopyOptionGroupMessage#Tags
   */
  readonly tags?: RdsTag[];

}

/**
 * @schema RdsCopyOptionGroupResult
 */
export interface RdsCopyOptionGroupResult {
  /**
   * @schema RdsCopyOptionGroupResult#OptionGroup
   */
  readonly optionGroup?: RdsOptionGroup;

}

/**
 * @schema RdsCreateCustomAvailabilityZoneMessage
 */
export interface RdsCreateCustomAvailabilityZoneMessage {
  /**
   * @schema RdsCreateCustomAvailabilityZoneMessage#CustomAvailabilityZoneName
   */
  readonly customAvailabilityZoneName: string;

  /**
   * @schema RdsCreateCustomAvailabilityZoneMessage#ExistingVpnId
   */
  readonly existingVpnId?: string;

  /**
   * @schema RdsCreateCustomAvailabilityZoneMessage#NewVpnTunnelName
   */
  readonly newVpnTunnelName?: string;

  /**
   * @schema RdsCreateCustomAvailabilityZoneMessage#VpnTunnelOriginatorIP
   */
  readonly vpnTunnelOriginatorIp?: string;

}

/**
 * @schema RdsCreateCustomAvailabilityZoneResult
 */
export interface RdsCreateCustomAvailabilityZoneResult {
  /**
   * @schema RdsCreateCustomAvailabilityZoneResult#CustomAvailabilityZone
   */
  readonly customAvailabilityZone?: RdsCustomAvailabilityZone;

}

/**
 * @schema RdsCreateDbClusterMessage
 */
export interface RdsCreateDbClusterMessage {
  /**
   * @schema RdsCreateDbClusterMessage#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema RdsCreateDbClusterMessage#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema RdsCreateDbClusterMessage#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema RdsCreateDbClusterMessage#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema RdsCreateDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema RdsCreateDbClusterMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema RdsCreateDbClusterMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RdsCreateDbClusterMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RdsCreateDbClusterMessage#Engine
   */
  readonly engine: string;

  /**
   * @schema RdsCreateDbClusterMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsCreateDbClusterMessage#Port
   */
  readonly port?: number;

  /**
   * @schema RdsCreateDbClusterMessage#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema RdsCreateDbClusterMessage#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema RdsCreateDbClusterMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsCreateDbClusterMessage#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema RdsCreateDbClusterMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema RdsCreateDbClusterMessage#ReplicationSourceIdentifier
   */
  readonly replicationSourceIdentifier?: string;

  /**
   * @schema RdsCreateDbClusterMessage#Tags
   */
  readonly tags?: RdsTag[];

  /**
   * @schema RdsCreateDbClusterMessage#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema RdsCreateDbClusterMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsCreateDbClusterMessage#PreSignedUrl
   */
  readonly preSignedUrl?: string;

  /**
   * @schema RdsCreateDbClusterMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema RdsCreateDbClusterMessage#BacktrackWindow
   */
  readonly backtrackWindow?: number;

  /**
   * @schema RdsCreateDbClusterMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema RdsCreateDbClusterMessage#EngineMode
   */
  readonly engineMode?: string;

  /**
   * @schema RdsCreateDbClusterMessage#ScalingConfiguration
   */
  readonly scalingConfiguration?: RdsScalingConfiguration;

  /**
   * @schema RdsCreateDbClusterMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RdsCreateDbClusterMessage#GlobalClusterIdentifier
   */
  readonly globalClusterIdentifier?: string;

  /**
   * @schema RdsCreateDbClusterMessage#EnableHttpEndpoint
   */
  readonly enableHttpEndpoint?: boolean;

  /**
   * @schema RdsCreateDbClusterMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema RdsCreateDbClusterMessage#Domain
   */
  readonly domain?: string;

  /**
   * @schema RdsCreateDbClusterMessage#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

  /**
   * @schema RdsCreateDbClusterMessage#EnableGlobalWriteForwarding
   */
  readonly enableGlobalWriteForwarding?: boolean;

  /**
   * @schema RdsCreateDbClusterMessage#SourceRegion
   */
  readonly sourceRegion?: string;

}

/**
 * @schema RdsCreateDbClusterResult
 */
export interface RdsCreateDbClusterResult {
  /**
   * @schema RdsCreateDbClusterResult#DBCluster
   */
  readonly dbCluster?: RdsdbCluster;

}

/**
 * @schema RdsCreateDbClusterEndpointMessage
 */
export interface RdsCreateDbClusterEndpointMessage {
  /**
   * @schema RdsCreateDbClusterEndpointMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema RdsCreateDbClusterEndpointMessage#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier: string;

  /**
   * @schema RdsCreateDbClusterEndpointMessage#EndpointType
   */
  readonly endpointType: string;

  /**
   * @schema RdsCreateDbClusterEndpointMessage#StaticMembers
   */
  readonly staticMembers?: string[];

  /**
   * @schema RdsCreateDbClusterEndpointMessage#ExcludedMembers
   */
  readonly excludedMembers?: string[];

  /**
   * @schema RdsCreateDbClusterEndpointMessage#Tags
   */
  readonly tags?: RdsTag[];

}

/**
 * @schema RdsdbClusterEndpoint
 */
export interface RdsdbClusterEndpoint {
  /**
   * @schema RdsdbClusterEndpoint#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier?: string;

  /**
   * @schema RdsdbClusterEndpoint#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsdbClusterEndpoint#DBClusterEndpointResourceIdentifier
   */
  readonly dbClusterEndpointResourceIdentifier?: string;

  /**
   * @schema RdsdbClusterEndpoint#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema RdsdbClusterEndpoint#Status
   */
  readonly status?: string;

  /**
   * @schema RdsdbClusterEndpoint#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema RdsdbClusterEndpoint#CustomEndpointType
   */
  readonly customEndpointType?: string;

  /**
   * @schema RdsdbClusterEndpoint#StaticMembers
   */
  readonly staticMembers?: string[];

  /**
   * @schema RdsdbClusterEndpoint#ExcludedMembers
   */
  readonly excludedMembers?: string[];

  /**
   * @schema RdsdbClusterEndpoint#DBClusterEndpointArn
   */
  readonly dbClusterEndpointArn?: string;

}

/**
 * @schema RdsCreateDbClusterParameterGroupMessage
 */
export interface RdsCreateDbClusterParameterGroupMessage {
  /**
   * @schema RdsCreateDbClusterParameterGroupMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName: string;

  /**
   * @schema RdsCreateDbClusterParameterGroupMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily: string;

  /**
   * @schema RdsCreateDbClusterParameterGroupMessage#Description
   */
  readonly description: string;

  /**
   * @schema RdsCreateDbClusterParameterGroupMessage#Tags
   */
  readonly tags?: RdsTag[];

}

/**
 * @schema RdsCreateDbClusterParameterGroupResult
 */
export interface RdsCreateDbClusterParameterGroupResult {
  /**
   * @schema RdsCreateDbClusterParameterGroupResult#DBClusterParameterGroup
   */
  readonly dbClusterParameterGroup?: RdsdbClusterParameterGroup;

}

/**
 * @schema RdsCreateDbClusterSnapshotMessage
 */
export interface RdsCreateDbClusterSnapshotMessage {
  /**
   * @schema RdsCreateDbClusterSnapshotMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier: string;

  /**
   * @schema RdsCreateDbClusterSnapshotMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema RdsCreateDbClusterSnapshotMessage#Tags
   */
  readonly tags?: RdsTag[];

}

/**
 * @schema RdsCreateDbClusterSnapshotResult
 */
export interface RdsCreateDbClusterSnapshotResult {
  /**
   * @schema RdsCreateDbClusterSnapshotResult#DBClusterSnapshot
   */
  readonly dbClusterSnapshot?: RdsdbClusterSnapshot;

}

/**
 * @schema RdsCreateDbInstanceMessage
 */
export interface RdsCreateDbInstanceMessage {
  /**
   * @schema RdsCreateDbInstanceMessage#DBName
   */
  readonly dbName?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema RdsCreateDbInstanceMessage#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema RdsCreateDbInstanceMessage#DBInstanceClass
   */
  readonly dbInstanceClass: string;

  /**
   * @schema RdsCreateDbInstanceMessage#Engine
   */
  readonly engine: string;

  /**
   * @schema RdsCreateDbInstanceMessage#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#DBSecurityGroups
   */
  readonly dbSecurityGroups?: string[];

  /**
   * @schema RdsCreateDbInstanceMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RdsCreateDbInstanceMessage#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema RdsCreateDbInstanceMessage#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#Port
   */
  readonly port?: number;

  /**
   * @schema RdsCreateDbInstanceMessage#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema RdsCreateDbInstanceMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema RdsCreateDbInstanceMessage#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#Iops
   */
  readonly iops?: number;

  /**
   * @schema RdsCreateDbInstanceMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#NcharCharacterSetName
   */
  readonly ncharCharacterSetName?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema RdsCreateDbInstanceMessage#Tags
   */
  readonly tags?: RdsTag[];

  /**
   * @schema RdsCreateDbInstanceMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#TdeCredentialPassword
   */
  readonly tdeCredentialPassword?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema RdsCreateDbInstanceMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#Domain
   */
  readonly domain?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema RdsCreateDbInstanceMessage#MonitoringInterval
   */
  readonly monitoringInterval?: number;

  /**
   * @schema RdsCreateDbInstanceMessage#MonitoringRoleArn
   */
  readonly monitoringRoleArn?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#PromotionTier
   */
  readonly promotionTier?: number;

  /**
   * @schema RdsCreateDbInstanceMessage#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema RdsCreateDbInstanceMessage#EnablePerformanceInsights
   */
  readonly enablePerformanceInsights?: boolean;

  /**
   * @schema RdsCreateDbInstanceMessage#PerformanceInsightsKMSKeyId
   */
  readonly performanceInsightsKmsKeyId?: string;

  /**
   * @schema RdsCreateDbInstanceMessage#PerformanceInsightsRetentionPeriod
   */
  readonly performanceInsightsRetentionPeriod?: number;

  /**
   * @schema RdsCreateDbInstanceMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema RdsCreateDbInstanceMessage#ProcessorFeatures
   */
  readonly processorFeatures?: RdsProcessorFeature[];

  /**
   * @schema RdsCreateDbInstanceMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RdsCreateDbInstanceMessage#MaxAllocatedStorage
   */
  readonly maxAllocatedStorage?: number;

}

/**
 * @schema RdsCreateDbInstanceResult
 */
export interface RdsCreateDbInstanceResult {
  /**
   * @schema RdsCreateDbInstanceResult#DBInstance
   */
  readonly dbInstance?: RdsdbInstance;

}

/**
 * @schema RdsCreateDbInstanceReadReplicaMessage
 */
export interface RdsCreateDbInstanceReadReplicaMessage {
  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#SourceDBInstanceIdentifier
   */
  readonly sourceDbInstanceIdentifier: string;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#Port
   */
  readonly port?: number;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#Iops
   */
  readonly iops?: number;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#Tags
   */
  readonly tags?: RdsTag[];

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#MonitoringInterval
   */
  readonly monitoringInterval?: number;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#MonitoringRoleArn
   */
  readonly monitoringRoleArn?: string;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#PreSignedUrl
   */
  readonly preSignedUrl?: string;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#EnablePerformanceInsights
   */
  readonly enablePerformanceInsights?: boolean;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#PerformanceInsightsKMSKeyId
   */
  readonly performanceInsightsKmsKeyId?: string;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#PerformanceInsightsRetentionPeriod
   */
  readonly performanceInsightsRetentionPeriod?: number;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#ProcessorFeatures
   */
  readonly processorFeatures?: RdsProcessorFeature[];

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#UseDefaultProcessorFeatures
   */
  readonly useDefaultProcessorFeatures?: boolean;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#Domain
   */
  readonly domain?: string;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#ReplicaMode
   */
  readonly replicaMode?: string;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#MaxAllocatedStorage
   */
  readonly maxAllocatedStorage?: number;

  /**
   * @schema RdsCreateDbInstanceReadReplicaMessage#SourceRegion
   */
  readonly sourceRegion?: string;

}

/**
 * @schema RdsCreateDbInstanceReadReplicaResult
 */
export interface RdsCreateDbInstanceReadReplicaResult {
  /**
   * @schema RdsCreateDbInstanceReadReplicaResult#DBInstance
   */
  readonly dbInstance?: RdsdbInstance;

}

/**
 * @schema RdsCreateDbParameterGroupMessage
 */
export interface RdsCreateDbParameterGroupMessage {
  /**
   * @schema RdsCreateDbParameterGroupMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName: string;

  /**
   * @schema RdsCreateDbParameterGroupMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily: string;

  /**
   * @schema RdsCreateDbParameterGroupMessage#Description
   */
  readonly description: string;

  /**
   * @schema RdsCreateDbParameterGroupMessage#Tags
   */
  readonly tags?: RdsTag[];

}

/**
 * @schema RdsCreateDbParameterGroupResult
 */
export interface RdsCreateDbParameterGroupResult {
  /**
   * @schema RdsCreateDbParameterGroupResult#DBParameterGroup
   */
  readonly dbParameterGroup?: RdsdbParameterGroup;

}

/**
 * @schema RdsCreateDbProxyRequest
 */
export interface RdsCreateDbProxyRequest {
  /**
   * @schema RdsCreateDbProxyRequest#DBProxyName
   */
  readonly dbProxyName: string;

  /**
   * @schema RdsCreateDbProxyRequest#EngineFamily
   */
  readonly engineFamily: string;

  /**
   * @schema RdsCreateDbProxyRequest#Auth
   */
  readonly auth: RdsUserAuthConfig[];

  /**
   * @schema RdsCreateDbProxyRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema RdsCreateDbProxyRequest#VpcSubnetIds
   */
  readonly vpcSubnetIds: string[];

  /**
   * @schema RdsCreateDbProxyRequest#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RdsCreateDbProxyRequest#RequireTLS
   */
  readonly requireTls?: boolean;

  /**
   * @schema RdsCreateDbProxyRequest#IdleClientTimeout
   */
  readonly idleClientTimeout?: number;

  /**
   * @schema RdsCreateDbProxyRequest#DebugLogging
   */
  readonly debugLogging?: boolean;

  /**
   * @schema RdsCreateDbProxyRequest#Tags
   */
  readonly tags?: RdsTag[];

}

/**
 * @schema RdsCreateDbProxyResponse
 */
export interface RdsCreateDbProxyResponse {
  /**
   * @schema RdsCreateDbProxyResponse#DBProxy
   */
  readonly dbProxy?: RdsdbProxy;

}

/**
 * @schema RdsCreateDbSecurityGroupMessage
 */
export interface RdsCreateDbSecurityGroupMessage {
  /**
   * @schema RdsCreateDbSecurityGroupMessage#DBSecurityGroupName
   */
  readonly dbSecurityGroupName: string;

  /**
   * @schema RdsCreateDbSecurityGroupMessage#DBSecurityGroupDescription
   */
  readonly dbSecurityGroupDescription: string;

  /**
   * @schema RdsCreateDbSecurityGroupMessage#Tags
   */
  readonly tags?: RdsTag[];

}

/**
 * @schema RdsCreateDbSecurityGroupResult
 */
export interface RdsCreateDbSecurityGroupResult {
  /**
   * @schema RdsCreateDbSecurityGroupResult#DBSecurityGroup
   */
  readonly dbSecurityGroup?: RdsdbSecurityGroup;

}

/**
 * @schema RdsCreateDbSnapshotMessage
 */
export interface RdsCreateDbSnapshotMessage {
  /**
   * @schema RdsCreateDbSnapshotMessage#DBSnapshotIdentifier
   */
  readonly dbSnapshotIdentifier: string;

  /**
   * @schema RdsCreateDbSnapshotMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema RdsCreateDbSnapshotMessage#Tags
   */
  readonly tags?: RdsTag[];

}

/**
 * @schema RdsCreateDbSnapshotResult
 */
export interface RdsCreateDbSnapshotResult {
  /**
   * @schema RdsCreateDbSnapshotResult#DBSnapshot
   */
  readonly dbSnapshot?: RdsdbSnapshot;

}

/**
 * @schema RdsCreateDbSubnetGroupMessage
 */
export interface RdsCreateDbSubnetGroupMessage {
  /**
   * @schema RdsCreateDbSubnetGroupMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName: string;

  /**
   * @schema RdsCreateDbSubnetGroupMessage#DBSubnetGroupDescription
   */
  readonly dbSubnetGroupDescription: string;

  /**
   * @schema RdsCreateDbSubnetGroupMessage#SubnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema RdsCreateDbSubnetGroupMessage#Tags
   */
  readonly tags?: RdsTag[];

}

/**
 * @schema RdsCreateDbSubnetGroupResult
 */
export interface RdsCreateDbSubnetGroupResult {
  /**
   * @schema RdsCreateDbSubnetGroupResult#DBSubnetGroup
   */
  readonly dbSubnetGroup?: RdsdbSubnetGroup;

}

/**
 * @schema RdsCreateEventSubscriptionMessage
 */
export interface RdsCreateEventSubscriptionMessage {
  /**
   * @schema RdsCreateEventSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName: string;

  /**
   * @schema RdsCreateEventSubscriptionMessage#SnsTopicArn
   */
  readonly snsTopicArn: string;

  /**
   * @schema RdsCreateEventSubscriptionMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema RdsCreateEventSubscriptionMessage#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema RdsCreateEventSubscriptionMessage#SourceIds
   */
  readonly sourceIds?: string[];

  /**
   * @schema RdsCreateEventSubscriptionMessage#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema RdsCreateEventSubscriptionMessage#Tags
   */
  readonly tags?: RdsTag[];

}

/**
 * @schema RdsCreateEventSubscriptionResult
 */
export interface RdsCreateEventSubscriptionResult {
  /**
   * @schema RdsCreateEventSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: RdsEventSubscription;

}

/**
 * @schema RdsCreateGlobalClusterMessage
 */
export interface RdsCreateGlobalClusterMessage {
  /**
   * @schema RdsCreateGlobalClusterMessage#GlobalClusterIdentifier
   */
  readonly globalClusterIdentifier?: string;

  /**
   * @schema RdsCreateGlobalClusterMessage#SourceDBClusterIdentifier
   */
  readonly sourceDbClusterIdentifier?: string;

  /**
   * @schema RdsCreateGlobalClusterMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsCreateGlobalClusterMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsCreateGlobalClusterMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RdsCreateGlobalClusterMessage#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema RdsCreateGlobalClusterMessage#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

}

/**
 * @schema RdsCreateGlobalClusterResult
 */
export interface RdsCreateGlobalClusterResult {
  /**
   * @schema RdsCreateGlobalClusterResult#GlobalCluster
   */
  readonly globalCluster?: RdsGlobalCluster;

}

/**
 * @schema RdsCreateOptionGroupMessage
 */
export interface RdsCreateOptionGroupMessage {
  /**
   * @schema RdsCreateOptionGroupMessage#OptionGroupName
   */
  readonly optionGroupName: string;

  /**
   * @schema RdsCreateOptionGroupMessage#EngineName
   */
  readonly engineName: string;

  /**
   * @schema RdsCreateOptionGroupMessage#MajorEngineVersion
   */
  readonly majorEngineVersion: string;

  /**
   * @schema RdsCreateOptionGroupMessage#OptionGroupDescription
   */
  readonly optionGroupDescription: string;

  /**
   * @schema RdsCreateOptionGroupMessage#Tags
   */
  readonly tags?: RdsTag[];

}

/**
 * @schema RdsCreateOptionGroupResult
 */
export interface RdsCreateOptionGroupResult {
  /**
   * @schema RdsCreateOptionGroupResult#OptionGroup
   */
  readonly optionGroup?: RdsOptionGroup;

}

/**
 * @schema RdsDeleteCustomAvailabilityZoneMessage
 */
export interface RdsDeleteCustomAvailabilityZoneMessage {
  /**
   * @schema RdsDeleteCustomAvailabilityZoneMessage#CustomAvailabilityZoneId
   */
  readonly customAvailabilityZoneId: string;

}

/**
 * @schema RdsDeleteCustomAvailabilityZoneResult
 */
export interface RdsDeleteCustomAvailabilityZoneResult {
  /**
   * @schema RdsDeleteCustomAvailabilityZoneResult#CustomAvailabilityZone
   */
  readonly customAvailabilityZone?: RdsCustomAvailabilityZone;

}

/**
 * @schema RdsDeleteDbClusterMessage
 */
export interface RdsDeleteDbClusterMessage {
  /**
   * @schema RdsDeleteDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema RdsDeleteDbClusterMessage#SkipFinalSnapshot
   */
  readonly skipFinalSnapshot?: boolean;

  /**
   * @schema RdsDeleteDbClusterMessage#FinalDBSnapshotIdentifier
   */
  readonly finalDbSnapshotIdentifier?: string;

}

/**
 * @schema RdsDeleteDbClusterResult
 */
export interface RdsDeleteDbClusterResult {
  /**
   * @schema RdsDeleteDbClusterResult#DBCluster
   */
  readonly dbCluster?: RdsdbCluster;

}

/**
 * @schema RdsDeleteDbClusterEndpointMessage
 */
export interface RdsDeleteDbClusterEndpointMessage {
  /**
   * @schema RdsDeleteDbClusterEndpointMessage#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier: string;

}

/**
 * @schema RdsDeleteDbClusterParameterGroupMessage
 */
export interface RdsDeleteDbClusterParameterGroupMessage {
  /**
   * @schema RdsDeleteDbClusterParameterGroupMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName: string;

}

/**
 * @schema RdsDeleteDbClusterSnapshotMessage
 */
export interface RdsDeleteDbClusterSnapshotMessage {
  /**
   * @schema RdsDeleteDbClusterSnapshotMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier: string;

}

/**
 * @schema RdsDeleteDbClusterSnapshotResult
 */
export interface RdsDeleteDbClusterSnapshotResult {
  /**
   * @schema RdsDeleteDbClusterSnapshotResult#DBClusterSnapshot
   */
  readonly dbClusterSnapshot?: RdsdbClusterSnapshot;

}

/**
 * @schema RdsDeleteDbInstanceMessage
 */
export interface RdsDeleteDbInstanceMessage {
  /**
   * @schema RdsDeleteDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema RdsDeleteDbInstanceMessage#SkipFinalSnapshot
   */
  readonly skipFinalSnapshot?: boolean;

  /**
   * @schema RdsDeleteDbInstanceMessage#FinalDBSnapshotIdentifier
   */
  readonly finalDbSnapshotIdentifier?: string;

  /**
   * @schema RdsDeleteDbInstanceMessage#DeleteAutomatedBackups
   */
  readonly deleteAutomatedBackups?: boolean;

}

/**
 * @schema RdsDeleteDbInstanceResult
 */
export interface RdsDeleteDbInstanceResult {
  /**
   * @schema RdsDeleteDbInstanceResult#DBInstance
   */
  readonly dbInstance?: RdsdbInstance;

}

/**
 * @schema RdsDeleteDbInstanceAutomatedBackupMessage
 */
export interface RdsDeleteDbInstanceAutomatedBackupMessage {
  /**
   * @schema RdsDeleteDbInstanceAutomatedBackupMessage#DbiResourceId
   */
  readonly dbiResourceId: string;

}

/**
 * @schema RdsDeleteDbInstanceAutomatedBackupResult
 */
export interface RdsDeleteDbInstanceAutomatedBackupResult {
  /**
   * @schema RdsDeleteDbInstanceAutomatedBackupResult#DBInstanceAutomatedBackup
   */
  readonly dbInstanceAutomatedBackup?: RdsdbInstanceAutomatedBackup;

}

/**
 * @schema RdsDeleteDbParameterGroupMessage
 */
export interface RdsDeleteDbParameterGroupMessage {
  /**
   * @schema RdsDeleteDbParameterGroupMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName: string;

}

/**
 * @schema RdsDeleteDbProxyRequest
 */
export interface RdsDeleteDbProxyRequest {
  /**
   * @schema RdsDeleteDbProxyRequest#DBProxyName
   */
  readonly dbProxyName: string;

}

/**
 * @schema RdsDeleteDbProxyResponse
 */
export interface RdsDeleteDbProxyResponse {
  /**
   * @schema RdsDeleteDbProxyResponse#DBProxy
   */
  readonly dbProxy?: RdsdbProxy;

}

/**
 * @schema RdsDeleteDbSecurityGroupMessage
 */
export interface RdsDeleteDbSecurityGroupMessage {
  /**
   * @schema RdsDeleteDbSecurityGroupMessage#DBSecurityGroupName
   */
  readonly dbSecurityGroupName: string;

}

/**
 * @schema RdsDeleteDbSnapshotMessage
 */
export interface RdsDeleteDbSnapshotMessage {
  /**
   * @schema RdsDeleteDbSnapshotMessage#DBSnapshotIdentifier
   */
  readonly dbSnapshotIdentifier: string;

}

/**
 * @schema RdsDeleteDbSnapshotResult
 */
export interface RdsDeleteDbSnapshotResult {
  /**
   * @schema RdsDeleteDbSnapshotResult#DBSnapshot
   */
  readonly dbSnapshot?: RdsdbSnapshot;

}

/**
 * @schema RdsDeleteDbSubnetGroupMessage
 */
export interface RdsDeleteDbSubnetGroupMessage {
  /**
   * @schema RdsDeleteDbSubnetGroupMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName: string;

}

/**
 * @schema RdsDeleteEventSubscriptionMessage
 */
export interface RdsDeleteEventSubscriptionMessage {
  /**
   * @schema RdsDeleteEventSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName: string;

}

/**
 * @schema RdsDeleteEventSubscriptionResult
 */
export interface RdsDeleteEventSubscriptionResult {
  /**
   * @schema RdsDeleteEventSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: RdsEventSubscription;

}

/**
 * @schema RdsDeleteGlobalClusterMessage
 */
export interface RdsDeleteGlobalClusterMessage {
  /**
   * @schema RdsDeleteGlobalClusterMessage#GlobalClusterIdentifier
   */
  readonly globalClusterIdentifier: string;

}

/**
 * @schema RdsDeleteGlobalClusterResult
 */
export interface RdsDeleteGlobalClusterResult {
  /**
   * @schema RdsDeleteGlobalClusterResult#GlobalCluster
   */
  readonly globalCluster?: RdsGlobalCluster;

}

/**
 * @schema RdsDeleteInstallationMediaMessage
 */
export interface RdsDeleteInstallationMediaMessage {
  /**
   * @schema RdsDeleteInstallationMediaMessage#InstallationMediaId
   */
  readonly installationMediaId: string;

}

/**
 * @schema RdsInstallationMedia
 */
export interface RdsInstallationMedia {
  /**
   * @schema RdsInstallationMedia#InstallationMediaId
   */
  readonly installationMediaId?: string;

  /**
   * @schema RdsInstallationMedia#CustomAvailabilityZoneId
   */
  readonly customAvailabilityZoneId?: string;

  /**
   * @schema RdsInstallationMedia#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsInstallationMedia#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsInstallationMedia#EngineInstallationMediaPath
   */
  readonly engineInstallationMediaPath?: string;

  /**
   * @schema RdsInstallationMedia#OSInstallationMediaPath
   */
  readonly osInstallationMediaPath?: string;

  /**
   * @schema RdsInstallationMedia#Status
   */
  readonly status?: string;

  /**
   * @schema RdsInstallationMedia#FailureCause
   */
  readonly failureCause?: RdsInstallationMediaFailureCause;

}

/**
 * @schema RdsDeleteOptionGroupMessage
 */
export interface RdsDeleteOptionGroupMessage {
  /**
   * @schema RdsDeleteOptionGroupMessage#OptionGroupName
   */
  readonly optionGroupName: string;

}

/**
 * @schema RdsDeregisterDbProxyTargetsRequest
 */
export interface RdsDeregisterDbProxyTargetsRequest {
  /**
   * @schema RdsDeregisterDbProxyTargetsRequest#DBProxyName
   */
  readonly dbProxyName: string;

  /**
   * @schema RdsDeregisterDbProxyTargetsRequest#TargetGroupName
   */
  readonly targetGroupName?: string;

  /**
   * @schema RdsDeregisterDbProxyTargetsRequest#DBInstanceIdentifiers
   */
  readonly dbInstanceIdentifiers?: string[];

  /**
   * @schema RdsDeregisterDbProxyTargetsRequest#DBClusterIdentifiers
   */
  readonly dbClusterIdentifiers?: string[];

}

/**
 * @schema RdsDeregisterDbProxyTargetsResponse
 */
export interface RdsDeregisterDbProxyTargetsResponse {
}

/**
 * @schema RdsDescribeAccountAttributesMessage
 */
export interface RdsDescribeAccountAttributesMessage {
}

/**
 * @schema RdsAccountAttributesMessage
 */
export interface RdsAccountAttributesMessage {
  /**
   * @schema RdsAccountAttributesMessage#AccountQuotas
   */
  readonly accountQuotas?: RdsAccountQuota[];

}

/**
 * @schema RdsDescribeCertificatesMessage
 */
export interface RdsDescribeCertificatesMessage {
  /**
   * @schema RdsDescribeCertificatesMessage#CertificateIdentifier
   */
  readonly certificateIdentifier?: string;

  /**
   * @schema RdsDescribeCertificatesMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeCertificatesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeCertificatesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RdsCertificateMessage
 */
export interface RdsCertificateMessage {
  /**
   * @schema RdsCertificateMessage#Certificates
   */
  readonly certificates?: RdsCertificate[];

  /**
   * @schema RdsCertificateMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RdsDescribeCustomAvailabilityZonesMessage
 */
export interface RdsDescribeCustomAvailabilityZonesMessage {
  /**
   * @schema RdsDescribeCustomAvailabilityZonesMessage#CustomAvailabilityZoneId
   */
  readonly customAvailabilityZoneId?: string;

  /**
   * @schema RdsDescribeCustomAvailabilityZonesMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeCustomAvailabilityZonesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeCustomAvailabilityZonesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RdsCustomAvailabilityZoneMessage
 */
export interface RdsCustomAvailabilityZoneMessage {
  /**
   * @schema RdsCustomAvailabilityZoneMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsCustomAvailabilityZoneMessage#CustomAvailabilityZones
   */
  readonly customAvailabilityZones?: RdsCustomAvailabilityZone[];

}

/**
 * @schema RdsDescribeDbClusterBacktracksMessage
 */
export interface RdsDescribeDbClusterBacktracksMessage {
  /**
   * @schema RdsDescribeDbClusterBacktracksMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema RdsDescribeDbClusterBacktracksMessage#BacktrackIdentifier
   */
  readonly backtrackIdentifier?: string;

  /**
   * @schema RdsDescribeDbClusterBacktracksMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbClusterBacktracksMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeDbClusterBacktracksMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RdsdbClusterBacktrackMessage
 */
export interface RdsdbClusterBacktrackMessage {
  /**
   * @schema RdsdbClusterBacktrackMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsdbClusterBacktrackMessage#DBClusterBacktracks
   */
  readonly dbClusterBacktracks?: RdsdbClusterBacktrack[];

}

/**
 * @schema RdsDescribeDbClusterEndpointsMessage
 */
export interface RdsDescribeDbClusterEndpointsMessage {
  /**
   * @schema RdsDescribeDbClusterEndpointsMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsDescribeDbClusterEndpointsMessage#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier?: string;

  /**
   * @schema RdsDescribeDbClusterEndpointsMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbClusterEndpointsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeDbClusterEndpointsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RdsdbClusterEndpointMessage
 */
export interface RdsdbClusterEndpointMessage {
  /**
   * @schema RdsdbClusterEndpointMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsdbClusterEndpointMessage#DBClusterEndpoints
   */
  readonly dbClusterEndpoints?: RdsdbClusterEndpoint[];

}

/**
 * @schema RdsDescribeDbClusterParameterGroupsMessage
 */
export interface RdsDescribeDbClusterParameterGroupsMessage {
  /**
   * @schema RdsDescribeDbClusterParameterGroupsMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema RdsDescribeDbClusterParameterGroupsMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbClusterParameterGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeDbClusterParameterGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RdsdbClusterParameterGroupsMessage
 */
export interface RdsdbClusterParameterGroupsMessage {
  /**
   * @schema RdsdbClusterParameterGroupsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsdbClusterParameterGroupsMessage#DBClusterParameterGroups
   */
  readonly dbClusterParameterGroups?: RdsdbClusterParameterGroup[];

}

/**
 * @schema RdsDescribeDbClusterParametersMessage
 */
export interface RdsDescribeDbClusterParametersMessage {
  /**
   * @schema RdsDescribeDbClusterParametersMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName: string;

  /**
   * @schema RdsDescribeDbClusterParametersMessage#Source
   */
  readonly source?: string;

  /**
   * @schema RdsDescribeDbClusterParametersMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbClusterParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeDbClusterParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RdsdbClusterParameterGroupDetails
 */
export interface RdsdbClusterParameterGroupDetails {
  /**
   * @schema RdsdbClusterParameterGroupDetails#Parameters
   */
  readonly parameters?: RdsParameter[];

  /**
   * @schema RdsdbClusterParameterGroupDetails#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RdsDescribeDbClusterSnapshotAttributesMessage
 */
export interface RdsDescribeDbClusterSnapshotAttributesMessage {
  /**
   * @schema RdsDescribeDbClusterSnapshotAttributesMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier: string;

}

/**
 * @schema RdsDescribeDbClusterSnapshotAttributesResult
 */
export interface RdsDescribeDbClusterSnapshotAttributesResult {
  /**
   * @schema RdsDescribeDbClusterSnapshotAttributesResult#DBClusterSnapshotAttributesResult
   */
  readonly dbClusterSnapshotAttributesResult?: RdsdbClusterSnapshotAttributesResult;

}

/**
 * @schema RdsDescribeDbClusterSnapshotsMessage
 */
export interface RdsDescribeDbClusterSnapshotsMessage {
  /**
   * @schema RdsDescribeDbClusterSnapshotsMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsDescribeDbClusterSnapshotsMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

  /**
   * @schema RdsDescribeDbClusterSnapshotsMessage#SnapshotType
   */
  readonly snapshotType?: string;

  /**
   * @schema RdsDescribeDbClusterSnapshotsMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbClusterSnapshotsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeDbClusterSnapshotsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsDescribeDbClusterSnapshotsMessage#IncludeShared
   */
  readonly includeShared?: boolean;

  /**
   * @schema RdsDescribeDbClusterSnapshotsMessage#IncludePublic
   */
  readonly includePublic?: boolean;

}

/**
 * @schema RdsdbClusterSnapshotMessage
 */
export interface RdsdbClusterSnapshotMessage {
  /**
   * @schema RdsdbClusterSnapshotMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsdbClusterSnapshotMessage#DBClusterSnapshots
   */
  readonly dbClusterSnapshots?: RdsdbClusterSnapshot[];

}

/**
 * @schema RdsDescribeDbClustersMessage
 */
export interface RdsDescribeDbClustersMessage {
  /**
   * @schema RdsDescribeDbClustersMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsDescribeDbClustersMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbClustersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeDbClustersMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsDescribeDbClustersMessage#IncludeShared
   */
  readonly includeShared?: boolean;

}

/**
 * @schema RdsdbClusterMessage
 */
export interface RdsdbClusterMessage {
  /**
   * @schema RdsdbClusterMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsdbClusterMessage#DBClusters
   */
  readonly dbClusters?: RdsdbCluster[];

}

/**
 * @schema RdsDescribeDbEngineVersionsMessage
 */
export interface RdsDescribeDbEngineVersionsMessage {
  /**
   * @schema RdsDescribeDbEngineVersionsMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsDescribeDbEngineVersionsMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsDescribeDbEngineVersionsMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema RdsDescribeDbEngineVersionsMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbEngineVersionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeDbEngineVersionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsDescribeDbEngineVersionsMessage#DefaultOnly
   */
  readonly defaultOnly?: boolean;

  /**
   * @schema RdsDescribeDbEngineVersionsMessage#ListSupportedCharacterSets
   */
  readonly listSupportedCharacterSets?: boolean;

  /**
   * @schema RdsDescribeDbEngineVersionsMessage#ListSupportedTimezones
   */
  readonly listSupportedTimezones?: boolean;

  /**
   * @schema RdsDescribeDbEngineVersionsMessage#IncludeAll
   */
  readonly includeAll?: boolean;

}

/**
 * @schema RdsdbEngineVersionMessage
 */
export interface RdsdbEngineVersionMessage {
  /**
   * @schema RdsdbEngineVersionMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsdbEngineVersionMessage#DBEngineVersions
   */
  readonly dbEngineVersions?: RdsdbEngineVersion[];

}

/**
 * @schema RdsDescribeDbInstanceAutomatedBackupsMessage
 */
export interface RdsDescribeDbInstanceAutomatedBackupsMessage {
  /**
   * @schema RdsDescribeDbInstanceAutomatedBackupsMessage#DbiResourceId
   */
  readonly dbiResourceId?: string;

  /**
   * @schema RdsDescribeDbInstanceAutomatedBackupsMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema RdsDescribeDbInstanceAutomatedBackupsMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbInstanceAutomatedBackupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeDbInstanceAutomatedBackupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RdsdbInstanceAutomatedBackupMessage
 */
export interface RdsdbInstanceAutomatedBackupMessage {
  /**
   * @schema RdsdbInstanceAutomatedBackupMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackupMessage#DBInstanceAutomatedBackups
   */
  readonly dbInstanceAutomatedBackups?: RdsdbInstanceAutomatedBackup[];

}

/**
 * @schema RdsDescribeDbInstancesMessage
 */
export interface RdsDescribeDbInstancesMessage {
  /**
   * @schema RdsDescribeDbInstancesMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema RdsDescribeDbInstancesMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbInstancesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeDbInstancesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RdsdbInstanceMessage
 */
export interface RdsdbInstanceMessage {
  /**
   * @schema RdsdbInstanceMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsdbInstanceMessage#DBInstances
   */
  readonly dbInstances?: RdsdbInstance[];

}

/**
 * @schema RdsDescribeDbLogFilesMessage
 */
export interface RdsDescribeDbLogFilesMessage {
  /**
   * @schema RdsDescribeDbLogFilesMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema RdsDescribeDbLogFilesMessage#FilenameContains
   */
  readonly filenameContains?: string;

  /**
   * @schema RdsDescribeDbLogFilesMessage#FileLastWritten
   */
  readonly fileLastWritten?: number;

  /**
   * @schema RdsDescribeDbLogFilesMessage#FileSize
   */
  readonly fileSize?: number;

  /**
   * @schema RdsDescribeDbLogFilesMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbLogFilesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeDbLogFilesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RdsDescribeDbLogFilesResponse
 */
export interface RdsDescribeDbLogFilesResponse {
  /**
   * @schema RdsDescribeDbLogFilesResponse#DescribeDBLogFiles
   */
  readonly describeDbLogFiles?: RdsDescribeDbLogFilesDetails[];

  /**
   * @schema RdsDescribeDbLogFilesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RdsDescribeDbParameterGroupsMessage
 */
export interface RdsDescribeDbParameterGroupsMessage {
  /**
   * @schema RdsDescribeDbParameterGroupsMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema RdsDescribeDbParameterGroupsMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbParameterGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeDbParameterGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RdsdbParameterGroupsMessage
 */
export interface RdsdbParameterGroupsMessage {
  /**
   * @schema RdsdbParameterGroupsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsdbParameterGroupsMessage#DBParameterGroups
   */
  readonly dbParameterGroups?: RdsdbParameterGroup[];

}

/**
 * @schema RdsDescribeDbParametersMessage
 */
export interface RdsDescribeDbParametersMessage {
  /**
   * @schema RdsDescribeDbParametersMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName: string;

  /**
   * @schema RdsDescribeDbParametersMessage#Source
   */
  readonly source?: string;

  /**
   * @schema RdsDescribeDbParametersMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeDbParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RdsdbParameterGroupDetails
 */
export interface RdsdbParameterGroupDetails {
  /**
   * @schema RdsdbParameterGroupDetails#Parameters
   */
  readonly parameters?: RdsParameter[];

  /**
   * @schema RdsdbParameterGroupDetails#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RdsDescribeDbProxiesRequest
 */
export interface RdsDescribeDbProxiesRequest {
  /**
   * @schema RdsDescribeDbProxiesRequest#DBProxyName
   */
  readonly dbProxyName?: string;

  /**
   * @schema RdsDescribeDbProxiesRequest#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbProxiesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsDescribeDbProxiesRequest#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema RdsDescribeDbProxiesResponse
 */
export interface RdsDescribeDbProxiesResponse {
  /**
   * @schema RdsDescribeDbProxiesResponse#DBProxies
   */
  readonly dbProxies?: RdsdbProxy[];

  /**
   * @schema RdsDescribeDbProxiesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RdsDescribeDbProxyTargetGroupsRequest
 */
export interface RdsDescribeDbProxyTargetGroupsRequest {
  /**
   * @schema RdsDescribeDbProxyTargetGroupsRequest#DBProxyName
   */
  readonly dbProxyName: string;

  /**
   * @schema RdsDescribeDbProxyTargetGroupsRequest#TargetGroupName
   */
  readonly targetGroupName?: string;

  /**
   * @schema RdsDescribeDbProxyTargetGroupsRequest#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbProxyTargetGroupsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsDescribeDbProxyTargetGroupsRequest#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema RdsDescribeDbProxyTargetGroupsResponse
 */
export interface RdsDescribeDbProxyTargetGroupsResponse {
  /**
   * @schema RdsDescribeDbProxyTargetGroupsResponse#TargetGroups
   */
  readonly targetGroups?: RdsdbProxyTargetGroup[];

  /**
   * @schema RdsDescribeDbProxyTargetGroupsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RdsDescribeDbProxyTargetsRequest
 */
export interface RdsDescribeDbProxyTargetsRequest {
  /**
   * @schema RdsDescribeDbProxyTargetsRequest#DBProxyName
   */
  readonly dbProxyName: string;

  /**
   * @schema RdsDescribeDbProxyTargetsRequest#TargetGroupName
   */
  readonly targetGroupName?: string;

  /**
   * @schema RdsDescribeDbProxyTargetsRequest#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbProxyTargetsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsDescribeDbProxyTargetsRequest#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema RdsDescribeDbProxyTargetsResponse
 */
export interface RdsDescribeDbProxyTargetsResponse {
  /**
   * @schema RdsDescribeDbProxyTargetsResponse#Targets
   */
  readonly targets?: RdsdbProxyTarget[];

  /**
   * @schema RdsDescribeDbProxyTargetsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RdsDescribeDbSecurityGroupsMessage
 */
export interface RdsDescribeDbSecurityGroupsMessage {
  /**
   * @schema RdsDescribeDbSecurityGroupsMessage#DBSecurityGroupName
   */
  readonly dbSecurityGroupName?: string;

  /**
   * @schema RdsDescribeDbSecurityGroupsMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbSecurityGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeDbSecurityGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RdsdbSecurityGroupMessage
 */
export interface RdsdbSecurityGroupMessage {
  /**
   * @schema RdsdbSecurityGroupMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsdbSecurityGroupMessage#DBSecurityGroups
   */
  readonly dbSecurityGroups?: RdsdbSecurityGroup[];

}

/**
 * @schema RdsDescribeDbSnapshotAttributesMessage
 */
export interface RdsDescribeDbSnapshotAttributesMessage {
  /**
   * @schema RdsDescribeDbSnapshotAttributesMessage#DBSnapshotIdentifier
   */
  readonly dbSnapshotIdentifier: string;

}

/**
 * @schema RdsDescribeDbSnapshotAttributesResult
 */
export interface RdsDescribeDbSnapshotAttributesResult {
  /**
   * @schema RdsDescribeDbSnapshotAttributesResult#DBSnapshotAttributesResult
   */
  readonly dbSnapshotAttributesResult?: RdsdbSnapshotAttributesResult;

}

/**
 * @schema RdsDescribeDbSnapshotsMessage
 */
export interface RdsDescribeDbSnapshotsMessage {
  /**
   * @schema RdsDescribeDbSnapshotsMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema RdsDescribeDbSnapshotsMessage#DBSnapshotIdentifier
   */
  readonly dbSnapshotIdentifier?: string;

  /**
   * @schema RdsDescribeDbSnapshotsMessage#SnapshotType
   */
  readonly snapshotType?: string;

  /**
   * @schema RdsDescribeDbSnapshotsMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbSnapshotsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeDbSnapshotsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsDescribeDbSnapshotsMessage#IncludeShared
   */
  readonly includeShared?: boolean;

  /**
   * @schema RdsDescribeDbSnapshotsMessage#IncludePublic
   */
  readonly includePublic?: boolean;

  /**
   * @schema RdsDescribeDbSnapshotsMessage#DbiResourceId
   */
  readonly dbiResourceId?: string;

}

/**
 * @schema RdsdbSnapshotMessage
 */
export interface RdsdbSnapshotMessage {
  /**
   * @schema RdsdbSnapshotMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsdbSnapshotMessage#DBSnapshots
   */
  readonly dbSnapshots?: RdsdbSnapshot[];

}

/**
 * @schema RdsDescribeDbSubnetGroupsMessage
 */
export interface RdsDescribeDbSubnetGroupsMessage {
  /**
   * @schema RdsDescribeDbSubnetGroupsMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RdsDescribeDbSubnetGroupsMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeDbSubnetGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeDbSubnetGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RdsdbSubnetGroupMessage
 */
export interface RdsdbSubnetGroupMessage {
  /**
   * @schema RdsdbSubnetGroupMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsdbSubnetGroupMessage#DBSubnetGroups
   */
  readonly dbSubnetGroups?: RdsdbSubnetGroup[];

}

/**
 * @schema RdsDescribeEngineDefaultClusterParametersMessage
 */
export interface RdsDescribeEngineDefaultClusterParametersMessage {
  /**
   * @schema RdsDescribeEngineDefaultClusterParametersMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily: string;

  /**
   * @schema RdsDescribeEngineDefaultClusterParametersMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeEngineDefaultClusterParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeEngineDefaultClusterParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RdsDescribeEngineDefaultClusterParametersResult
 */
export interface RdsDescribeEngineDefaultClusterParametersResult {
  /**
   * @schema RdsDescribeEngineDefaultClusterParametersResult#EngineDefaults
   */
  readonly engineDefaults?: RdsEngineDefaults;

}

/**
 * @schema RdsDescribeEngineDefaultParametersMessage
 */
export interface RdsDescribeEngineDefaultParametersMessage {
  /**
   * @schema RdsDescribeEngineDefaultParametersMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily: string;

  /**
   * @schema RdsDescribeEngineDefaultParametersMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeEngineDefaultParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeEngineDefaultParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RdsDescribeEngineDefaultParametersResult
 */
export interface RdsDescribeEngineDefaultParametersResult {
  /**
   * @schema RdsDescribeEngineDefaultParametersResult#EngineDefaults
   */
  readonly engineDefaults?: RdsEngineDefaults;

}

/**
 * @schema RdsDescribeEventCategoriesMessage
 */
export interface RdsDescribeEventCategoriesMessage {
  /**
   * @schema RdsDescribeEventCategoriesMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema RdsDescribeEventCategoriesMessage#Filters
   */
  readonly filters?: RdsFilter[];

}

/**
 * @schema RdsEventCategoriesMessage
 */
export interface RdsEventCategoriesMessage {
  /**
   * @schema RdsEventCategoriesMessage#EventCategoriesMapList
   */
  readonly eventCategoriesMapList?: RdsEventCategoriesMap[];

}

/**
 * @schema RdsDescribeEventSubscriptionsMessage
 */
export interface RdsDescribeEventSubscriptionsMessage {
  /**
   * @schema RdsDescribeEventSubscriptionsMessage#SubscriptionName
   */
  readonly subscriptionName?: string;

  /**
   * @schema RdsDescribeEventSubscriptionsMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeEventSubscriptionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeEventSubscriptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RdsEventSubscriptionsMessage
 */
export interface RdsEventSubscriptionsMessage {
  /**
   * @schema RdsEventSubscriptionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsEventSubscriptionsMessage#EventSubscriptionsList
   */
  readonly eventSubscriptionsList?: RdsEventSubscription[];

}

/**
 * @schema RdsDescribeEventsMessage
 */
export interface RdsDescribeEventsMessage {
  /**
   * @schema RdsDescribeEventsMessage#SourceIdentifier
   */
  readonly sourceIdentifier?: string;

  /**
   * @schema RdsDescribeEventsMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema RdsDescribeEventsMessage#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema RdsDescribeEventsMessage#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema RdsDescribeEventsMessage#Duration
   */
  readonly duration?: number;

  /**
   * @schema RdsDescribeEventsMessage#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema RdsDescribeEventsMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeEventsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeEventsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RdsEventsMessage
 */
export interface RdsEventsMessage {
  /**
   * @schema RdsEventsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsEventsMessage#Events
   */
  readonly events?: RdsEvent[];

}

/**
 * @schema RdsDescribeExportTasksMessage
 */
export interface RdsDescribeExportTasksMessage {
  /**
   * @schema RdsDescribeExportTasksMessage#ExportTaskIdentifier
   */
  readonly exportTaskIdentifier?: string;

  /**
   * @schema RdsDescribeExportTasksMessage#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema RdsDescribeExportTasksMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeExportTasksMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsDescribeExportTasksMessage#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema RdsExportTasksMessage
 */
export interface RdsExportTasksMessage {
  /**
   * @schema RdsExportTasksMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsExportTasksMessage#ExportTasks
   */
  readonly exportTasks?: RdsExportTask[];

}

/**
 * @schema RdsDescribeGlobalClustersMessage
 */
export interface RdsDescribeGlobalClustersMessage {
  /**
   * @schema RdsDescribeGlobalClustersMessage#GlobalClusterIdentifier
   */
  readonly globalClusterIdentifier?: string;

  /**
   * @schema RdsDescribeGlobalClustersMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeGlobalClustersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeGlobalClustersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RdsGlobalClustersMessage
 */
export interface RdsGlobalClustersMessage {
  /**
   * @schema RdsGlobalClustersMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsGlobalClustersMessage#GlobalClusters
   */
  readonly globalClusters?: RdsGlobalCluster[];

}

/**
 * @schema RdsDescribeInstallationMediaMessage
 */
export interface RdsDescribeInstallationMediaMessage {
  /**
   * @schema RdsDescribeInstallationMediaMessage#InstallationMediaId
   */
  readonly installationMediaId?: string;

  /**
   * @schema RdsDescribeInstallationMediaMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeInstallationMediaMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeInstallationMediaMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RdsInstallationMediaMessage
 */
export interface RdsInstallationMediaMessage {
  /**
   * @schema RdsInstallationMediaMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsInstallationMediaMessage#InstallationMedia
   */
  readonly installationMedia?: RdsInstallationMedia[];

}

/**
 * @schema RdsDescribeOptionGroupOptionsMessage
 */
export interface RdsDescribeOptionGroupOptionsMessage {
  /**
   * @schema RdsDescribeOptionGroupOptionsMessage#EngineName
   */
  readonly engineName: string;

  /**
   * @schema RdsDescribeOptionGroupOptionsMessage#MajorEngineVersion
   */
  readonly majorEngineVersion?: string;

  /**
   * @schema RdsDescribeOptionGroupOptionsMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeOptionGroupOptionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeOptionGroupOptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RdsOptionGroupOptionsMessage
 */
export interface RdsOptionGroupOptionsMessage {
  /**
   * @schema RdsOptionGroupOptionsMessage#OptionGroupOptions
   */
  readonly optionGroupOptions?: RdsOptionGroupOption[];

  /**
   * @schema RdsOptionGroupOptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RdsDescribeOptionGroupsMessage
 */
export interface RdsDescribeOptionGroupsMessage {
  /**
   * @schema RdsDescribeOptionGroupsMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsDescribeOptionGroupsMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeOptionGroupsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsDescribeOptionGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeOptionGroupsMessage#EngineName
   */
  readonly engineName?: string;

  /**
   * @schema RdsDescribeOptionGroupsMessage#MajorEngineVersion
   */
  readonly majorEngineVersion?: string;

}

/**
 * @schema RdsOptionGroups
 */
export interface RdsOptionGroups {
  /**
   * @schema RdsOptionGroups#OptionGroupsList
   */
  readonly optionGroupsList?: RdsOptionGroup[];

  /**
   * @schema RdsOptionGroups#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RdsDescribeOrderableDbInstanceOptionsMessage
 */
export interface RdsDescribeOrderableDbInstanceOptionsMessage {
  /**
   * @schema RdsDescribeOrderableDbInstanceOptionsMessage#Engine
   */
  readonly engine: string;

  /**
   * @schema RdsDescribeOrderableDbInstanceOptionsMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsDescribeOrderableDbInstanceOptionsMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema RdsDescribeOrderableDbInstanceOptionsMessage#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema RdsDescribeOrderableDbInstanceOptionsMessage#AvailabilityZoneGroup
   */
  readonly availabilityZoneGroup?: string;

  /**
   * @schema RdsDescribeOrderableDbInstanceOptionsMessage#Vpc
   */
  readonly vpc?: boolean;

  /**
   * @schema RdsDescribeOrderableDbInstanceOptionsMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeOrderableDbInstanceOptionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeOrderableDbInstanceOptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RdsOrderableDbInstanceOptionsMessage
 */
export interface RdsOrderableDbInstanceOptionsMessage {
  /**
   * @schema RdsOrderableDbInstanceOptionsMessage#OrderableDBInstanceOptions
   */
  readonly orderableDbInstanceOptions?: RdsOrderableDbInstanceOption[];

  /**
   * @schema RdsOrderableDbInstanceOptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RdsDescribePendingMaintenanceActionsMessage
 */
export interface RdsDescribePendingMaintenanceActionsMessage {
  /**
   * @schema RdsDescribePendingMaintenanceActionsMessage#ResourceIdentifier
   */
  readonly resourceIdentifier?: string;

  /**
   * @schema RdsDescribePendingMaintenanceActionsMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribePendingMaintenanceActionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsDescribePendingMaintenanceActionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema RdsPendingMaintenanceActionsMessage
 */
export interface RdsPendingMaintenanceActionsMessage {
  /**
   * @schema RdsPendingMaintenanceActionsMessage#PendingMaintenanceActions
   */
  readonly pendingMaintenanceActions?: RdsResourcePendingMaintenanceActions[];

  /**
   * @schema RdsPendingMaintenanceActionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RdsDescribeReservedDbInstancesMessage
 */
export interface RdsDescribeReservedDbInstancesMessage {
  /**
   * @schema RdsDescribeReservedDbInstancesMessage#ReservedDBInstanceId
   */
  readonly reservedDbInstanceId?: string;

  /**
   * @schema RdsDescribeReservedDbInstancesMessage#ReservedDBInstancesOfferingId
   */
  readonly reservedDbInstancesOfferingId?: string;

  /**
   * @schema RdsDescribeReservedDbInstancesMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema RdsDescribeReservedDbInstancesMessage#Duration
   */
  readonly duration?: string;

  /**
   * @schema RdsDescribeReservedDbInstancesMessage#ProductDescription
   */
  readonly productDescription?: string;

  /**
   * @schema RdsDescribeReservedDbInstancesMessage#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema RdsDescribeReservedDbInstancesMessage#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema RdsDescribeReservedDbInstancesMessage#LeaseId
   */
  readonly leaseId?: string;

  /**
   * @schema RdsDescribeReservedDbInstancesMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeReservedDbInstancesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeReservedDbInstancesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RdsReservedDbInstanceMessage
 */
export interface RdsReservedDbInstanceMessage {
  /**
   * @schema RdsReservedDbInstanceMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsReservedDbInstanceMessage#ReservedDBInstances
   */
  readonly reservedDbInstances?: RdsReservedDbInstance[];

}

/**
 * @schema RdsDescribeReservedDbInstancesOfferingsMessage
 */
export interface RdsDescribeReservedDbInstancesOfferingsMessage {
  /**
   * @schema RdsDescribeReservedDbInstancesOfferingsMessage#ReservedDBInstancesOfferingId
   */
  readonly reservedDbInstancesOfferingId?: string;

  /**
   * @schema RdsDescribeReservedDbInstancesOfferingsMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema RdsDescribeReservedDbInstancesOfferingsMessage#Duration
   */
  readonly duration?: string;

  /**
   * @schema RdsDescribeReservedDbInstancesOfferingsMessage#ProductDescription
   */
  readonly productDescription?: string;

  /**
   * @schema RdsDescribeReservedDbInstancesOfferingsMessage#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema RdsDescribeReservedDbInstancesOfferingsMessage#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema RdsDescribeReservedDbInstancesOfferingsMessage#Filters
   */
  readonly filters?: RdsFilter[];

  /**
   * @schema RdsDescribeReservedDbInstancesOfferingsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeReservedDbInstancesOfferingsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RdsReservedDbInstancesOfferingMessage
 */
export interface RdsReservedDbInstancesOfferingMessage {
  /**
   * @schema RdsReservedDbInstancesOfferingMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsReservedDbInstancesOfferingMessage#ReservedDBInstancesOfferings
   */
  readonly reservedDbInstancesOfferings?: RdsReservedDbInstancesOffering[];

}

/**
 * @schema RdsDescribeSourceRegionsMessage
 */
export interface RdsDescribeSourceRegionsMessage {
  /**
   * @schema RdsDescribeSourceRegionsMessage#RegionName
   */
  readonly regionName?: string;

  /**
   * @schema RdsDescribeSourceRegionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RdsDescribeSourceRegionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsDescribeSourceRegionsMessage#Filters
   */
  readonly filters?: RdsFilter[];

}

/**
 * @schema RdsSourceRegionMessage
 */
export interface RdsSourceRegionMessage {
  /**
   * @schema RdsSourceRegionMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsSourceRegionMessage#SourceRegions
   */
  readonly sourceRegions?: RdsSourceRegion[];

}

/**
 * @schema RdsDescribeValidDbInstanceModificationsMessage
 */
export interface RdsDescribeValidDbInstanceModificationsMessage {
  /**
   * @schema RdsDescribeValidDbInstanceModificationsMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

}

/**
 * @schema RdsDescribeValidDbInstanceModificationsResult
 */
export interface RdsDescribeValidDbInstanceModificationsResult {
  /**
   * @schema RdsDescribeValidDbInstanceModificationsResult#ValidDBInstanceModificationsMessage
   */
  readonly validDbInstanceModificationsMessage?: RdsValidDbInstanceModificationsMessage;

}

/**
 * @schema RdsDownloadDbLogFilePortionMessage
 */
export interface RdsDownloadDbLogFilePortionMessage {
  /**
   * @schema RdsDownloadDbLogFilePortionMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema RdsDownloadDbLogFilePortionMessage#LogFileName
   */
  readonly logFileName: string;

  /**
   * @schema RdsDownloadDbLogFilePortionMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsDownloadDbLogFilePortionMessage#NumberOfLines
   */
  readonly numberOfLines?: number;

}

/**
 * @schema RdsDownloadDbLogFilePortionDetails
 */
export interface RdsDownloadDbLogFilePortionDetails {
  /**
   * @schema RdsDownloadDbLogFilePortionDetails#LogFileData
   */
  readonly logFileData?: string;

  /**
   * @schema RdsDownloadDbLogFilePortionDetails#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsDownloadDbLogFilePortionDetails#AdditionalDataPending
   */
  readonly additionalDataPending?: boolean;

}

/**
 * @schema RdsFailoverDbClusterMessage
 */
export interface RdsFailoverDbClusterMessage {
  /**
   * @schema RdsFailoverDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema RdsFailoverDbClusterMessage#TargetDBInstanceIdentifier
   */
  readonly targetDbInstanceIdentifier?: string;

}

/**
 * @schema RdsFailoverDbClusterResult
 */
export interface RdsFailoverDbClusterResult {
  /**
   * @schema RdsFailoverDbClusterResult#DBCluster
   */
  readonly dbCluster?: RdsdbCluster;

}

/**
 * @schema RdsImportInstallationMediaMessage
 */
export interface RdsImportInstallationMediaMessage {
  /**
   * @schema RdsImportInstallationMediaMessage#CustomAvailabilityZoneId
   */
  readonly customAvailabilityZoneId: string;

  /**
   * @schema RdsImportInstallationMediaMessage#Engine
   */
  readonly engine: string;

  /**
   * @schema RdsImportInstallationMediaMessage#EngineVersion
   */
  readonly engineVersion: string;

  /**
   * @schema RdsImportInstallationMediaMessage#EngineInstallationMediaPath
   */
  readonly engineInstallationMediaPath: string;

  /**
   * @schema RdsImportInstallationMediaMessage#OSInstallationMediaPath
   */
  readonly osInstallationMediaPath: string;

}

/**
 * @schema RdsListTagsForResourceMessage
 */
export interface RdsListTagsForResourceMessage {
  /**
   * @schema RdsListTagsForResourceMessage#ResourceName
   */
  readonly resourceName: string;

  /**
   * @schema RdsListTagsForResourceMessage#Filters
   */
  readonly filters?: RdsFilter[];

}

/**
 * @schema RdsTagListMessage
 */
export interface RdsTagListMessage {
  /**
   * @schema RdsTagListMessage#TagList
   */
  readonly tagList?: RdsTag[];

}

/**
 * @schema RdsModifyCertificatesMessage
 */
export interface RdsModifyCertificatesMessage {
  /**
   * @schema RdsModifyCertificatesMessage#CertificateIdentifier
   */
  readonly certificateIdentifier?: string;

  /**
   * @schema RdsModifyCertificatesMessage#RemoveCustomerOverride
   */
  readonly removeCustomerOverride?: boolean;

}

/**
 * @schema RdsModifyCertificatesResult
 */
export interface RdsModifyCertificatesResult {
  /**
   * @schema RdsModifyCertificatesResult#Certificate
   */
  readonly certificate?: RdsCertificate;

}

/**
 * @schema RdsModifyCurrentDbClusterCapacityMessage
 */
export interface RdsModifyCurrentDbClusterCapacityMessage {
  /**
   * @schema RdsModifyCurrentDbClusterCapacityMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema RdsModifyCurrentDbClusterCapacityMessage#Capacity
   */
  readonly capacity?: number;

  /**
   * @schema RdsModifyCurrentDbClusterCapacityMessage#SecondsBeforeTimeout
   */
  readonly secondsBeforeTimeout?: number;

  /**
   * @schema RdsModifyCurrentDbClusterCapacityMessage#TimeoutAction
   */
  readonly timeoutAction?: string;

}

/**
 * @schema RdsdbClusterCapacityInfo
 */
export interface RdsdbClusterCapacityInfo {
  /**
   * @schema RdsdbClusterCapacityInfo#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsdbClusterCapacityInfo#PendingCapacity
   */
  readonly pendingCapacity?: number;

  /**
   * @schema RdsdbClusterCapacityInfo#CurrentCapacity
   */
  readonly currentCapacity?: number;

  /**
   * @schema RdsdbClusterCapacityInfo#SecondsBeforeTimeout
   */
  readonly secondsBeforeTimeout?: number;

  /**
   * @schema RdsdbClusterCapacityInfo#TimeoutAction
   */
  readonly timeoutAction?: string;

}

/**
 * @schema RdsModifyDbClusterMessage
 */
export interface RdsModifyDbClusterMessage {
  /**
   * @schema RdsModifyDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema RdsModifyDbClusterMessage#NewDBClusterIdentifier
   */
  readonly newDbClusterIdentifier?: string;

  /**
   * @schema RdsModifyDbClusterMessage#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

  /**
   * @schema RdsModifyDbClusterMessage#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema RdsModifyDbClusterMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema RdsModifyDbClusterMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RdsModifyDbClusterMessage#Port
   */
  readonly port?: number;

  /**
   * @schema RdsModifyDbClusterMessage#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema RdsModifyDbClusterMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsModifyDbClusterMessage#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema RdsModifyDbClusterMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema RdsModifyDbClusterMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema RdsModifyDbClusterMessage#BacktrackWindow
   */
  readonly backtrackWindow?: number;

  /**
   * @schema RdsModifyDbClusterMessage#CloudwatchLogsExportConfiguration
   */
  readonly cloudwatchLogsExportConfiguration?: RdsCloudwatchLogsExportConfiguration;

  /**
   * @schema RdsModifyDbClusterMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsModifyDbClusterMessage#AllowMajorVersionUpgrade
   */
  readonly allowMajorVersionUpgrade?: boolean;

  /**
   * @schema RdsModifyDbClusterMessage#DBInstanceParameterGroupName
   */
  readonly dbInstanceParameterGroupName?: string;

  /**
   * @schema RdsModifyDbClusterMessage#Domain
   */
  readonly domain?: string;

  /**
   * @schema RdsModifyDbClusterMessage#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

  /**
   * @schema RdsModifyDbClusterMessage#ScalingConfiguration
   */
  readonly scalingConfiguration?: RdsScalingConfiguration;

  /**
   * @schema RdsModifyDbClusterMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RdsModifyDbClusterMessage#EnableHttpEndpoint
   */
  readonly enableHttpEndpoint?: boolean;

  /**
   * @schema RdsModifyDbClusterMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema RdsModifyDbClusterMessage#EnableGlobalWriteForwarding
   */
  readonly enableGlobalWriteForwarding?: boolean;

}

/**
 * @schema RdsModifyDbClusterResult
 */
export interface RdsModifyDbClusterResult {
  /**
   * @schema RdsModifyDbClusterResult#DBCluster
   */
  readonly dbCluster?: RdsdbCluster;

}

/**
 * @schema RdsModifyDbClusterEndpointMessage
 */
export interface RdsModifyDbClusterEndpointMessage {
  /**
   * @schema RdsModifyDbClusterEndpointMessage#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier: string;

  /**
   * @schema RdsModifyDbClusterEndpointMessage#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema RdsModifyDbClusterEndpointMessage#StaticMembers
   */
  readonly staticMembers?: string[];

  /**
   * @schema RdsModifyDbClusterEndpointMessage#ExcludedMembers
   */
  readonly excludedMembers?: string[];

}

/**
 * @schema RdsModifyDbClusterParameterGroupMessage
 */
export interface RdsModifyDbClusterParameterGroupMessage {
  /**
   * @schema RdsModifyDbClusterParameterGroupMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName: string;

  /**
   * @schema RdsModifyDbClusterParameterGroupMessage#Parameters
   */
  readonly parameters: RdsParameter[];

}

/**
 * @schema RdsdbClusterParameterGroupNameMessage
 */
export interface RdsdbClusterParameterGroupNameMessage {
  /**
   * @schema RdsdbClusterParameterGroupNameMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

}

/**
 * @schema RdsModifyDbClusterSnapshotAttributeMessage
 */
export interface RdsModifyDbClusterSnapshotAttributeMessage {
  /**
   * @schema RdsModifyDbClusterSnapshotAttributeMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier: string;

  /**
   * @schema RdsModifyDbClusterSnapshotAttributeMessage#AttributeName
   */
  readonly attributeName: string;

  /**
   * @schema RdsModifyDbClusterSnapshotAttributeMessage#ValuesToAdd
   */
  readonly valuesToAdd?: string[];

  /**
   * @schema RdsModifyDbClusterSnapshotAttributeMessage#ValuesToRemove
   */
  readonly valuesToRemove?: string[];

}

/**
 * @schema RdsModifyDbClusterSnapshotAttributeResult
 */
export interface RdsModifyDbClusterSnapshotAttributeResult {
  /**
   * @schema RdsModifyDbClusterSnapshotAttributeResult#DBClusterSnapshotAttributesResult
   */
  readonly dbClusterSnapshotAttributesResult?: RdsdbClusterSnapshotAttributesResult;

}

/**
 * @schema RdsModifyDbInstanceMessage
 */
export interface RdsModifyDbInstanceMessage {
  /**
   * @schema RdsModifyDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema RdsModifyDbInstanceMessage#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema RdsModifyDbInstanceMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#DBSecurityGroups
   */
  readonly dbSecurityGroups?: string[];

  /**
   * @schema RdsModifyDbInstanceMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RdsModifyDbInstanceMessage#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

  /**
   * @schema RdsModifyDbInstanceMessage#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema RdsModifyDbInstanceMessage#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema RdsModifyDbInstanceMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#AllowMajorVersionUpgrade
   */
  readonly allowMajorVersionUpgrade?: boolean;

  /**
   * @schema RdsModifyDbInstanceMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema RdsModifyDbInstanceMessage#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#Iops
   */
  readonly iops?: number;

  /**
   * @schema RdsModifyDbInstanceMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#NewDBInstanceIdentifier
   */
  readonly newDbInstanceIdentifier?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#TdeCredentialPassword
   */
  readonly tdeCredentialPassword?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#CACertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#Domain
   */
  readonly domain?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema RdsModifyDbInstanceMessage#MonitoringInterval
   */
  readonly monitoringInterval?: number;

  /**
   * @schema RdsModifyDbInstanceMessage#DBPortNumber
   */
  readonly dbPortNumber?: number;

  /**
   * @schema RdsModifyDbInstanceMessage#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema RdsModifyDbInstanceMessage#MonitoringRoleArn
   */
  readonly monitoringRoleArn?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#PromotionTier
   */
  readonly promotionTier?: number;

  /**
   * @schema RdsModifyDbInstanceMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema RdsModifyDbInstanceMessage#EnablePerformanceInsights
   */
  readonly enablePerformanceInsights?: boolean;

  /**
   * @schema RdsModifyDbInstanceMessage#PerformanceInsightsKMSKeyId
   */
  readonly performanceInsightsKmsKeyId?: string;

  /**
   * @schema RdsModifyDbInstanceMessage#PerformanceInsightsRetentionPeriod
   */
  readonly performanceInsightsRetentionPeriod?: number;

  /**
   * @schema RdsModifyDbInstanceMessage#CloudwatchLogsExportConfiguration
   */
  readonly cloudwatchLogsExportConfiguration?: RdsCloudwatchLogsExportConfiguration;

  /**
   * @schema RdsModifyDbInstanceMessage#ProcessorFeatures
   */
  readonly processorFeatures?: RdsProcessorFeature[];

  /**
   * @schema RdsModifyDbInstanceMessage#UseDefaultProcessorFeatures
   */
  readonly useDefaultProcessorFeatures?: boolean;

  /**
   * @schema RdsModifyDbInstanceMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RdsModifyDbInstanceMessage#MaxAllocatedStorage
   */
  readonly maxAllocatedStorage?: number;

  /**
   * @schema RdsModifyDbInstanceMessage#CertificateRotationRestart
   */
  readonly certificateRotationRestart?: boolean;

  /**
   * @schema RdsModifyDbInstanceMessage#ReplicaMode
   */
  readonly replicaMode?: string;

}

/**
 * @schema RdsModifyDbInstanceResult
 */
export interface RdsModifyDbInstanceResult {
  /**
   * @schema RdsModifyDbInstanceResult#DBInstance
   */
  readonly dbInstance?: RdsdbInstance;

}

/**
 * @schema RdsModifyDbParameterGroupMessage
 */
export interface RdsModifyDbParameterGroupMessage {
  /**
   * @schema RdsModifyDbParameterGroupMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName: string;

  /**
   * @schema RdsModifyDbParameterGroupMessage#Parameters
   */
  readonly parameters: RdsParameter[];

}

/**
 * @schema RdsdbParameterGroupNameMessage
 */
export interface RdsdbParameterGroupNameMessage {
  /**
   * @schema RdsdbParameterGroupNameMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

}

/**
 * @schema RdsModifyDbProxyRequest
 */
export interface RdsModifyDbProxyRequest {
  /**
   * @schema RdsModifyDbProxyRequest#DBProxyName
   */
  readonly dbProxyName: string;

  /**
   * @schema RdsModifyDbProxyRequest#NewDBProxyName
   */
  readonly newDbProxyName?: string;

  /**
   * @schema RdsModifyDbProxyRequest#Auth
   */
  readonly auth?: RdsUserAuthConfig[];

  /**
   * @schema RdsModifyDbProxyRequest#RequireTLS
   */
  readonly requireTls?: boolean;

  /**
   * @schema RdsModifyDbProxyRequest#IdleClientTimeout
   */
  readonly idleClientTimeout?: number;

  /**
   * @schema RdsModifyDbProxyRequest#DebugLogging
   */
  readonly debugLogging?: boolean;

  /**
   * @schema RdsModifyDbProxyRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema RdsModifyDbProxyRequest#SecurityGroups
   */
  readonly securityGroups?: string[];

}

/**
 * @schema RdsModifyDbProxyResponse
 */
export interface RdsModifyDbProxyResponse {
  /**
   * @schema RdsModifyDbProxyResponse#DBProxy
   */
  readonly dbProxy?: RdsdbProxy;

}

/**
 * @schema RdsModifyDbProxyTargetGroupRequest
 */
export interface RdsModifyDbProxyTargetGroupRequest {
  /**
   * @schema RdsModifyDbProxyTargetGroupRequest#TargetGroupName
   */
  readonly targetGroupName: string;

  /**
   * @schema RdsModifyDbProxyTargetGroupRequest#DBProxyName
   */
  readonly dbProxyName: string;

  /**
   * @schema RdsModifyDbProxyTargetGroupRequest#ConnectionPoolConfig
   */
  readonly connectionPoolConfig?: RdsConnectionPoolConfiguration;

  /**
   * @schema RdsModifyDbProxyTargetGroupRequest#NewName
   */
  readonly newName?: string;

}

/**
 * @schema RdsModifyDbProxyTargetGroupResponse
 */
export interface RdsModifyDbProxyTargetGroupResponse {
  /**
   * @schema RdsModifyDbProxyTargetGroupResponse#DBProxyTargetGroup
   */
  readonly dbProxyTargetGroup?: RdsdbProxyTargetGroup;

}

/**
 * @schema RdsModifyDbSnapshotMessage
 */
export interface RdsModifyDbSnapshotMessage {
  /**
   * @schema RdsModifyDbSnapshotMessage#DBSnapshotIdentifier
   */
  readonly dbSnapshotIdentifier: string;

  /**
   * @schema RdsModifyDbSnapshotMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsModifyDbSnapshotMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

}

/**
 * @schema RdsModifyDbSnapshotResult
 */
export interface RdsModifyDbSnapshotResult {
  /**
   * @schema RdsModifyDbSnapshotResult#DBSnapshot
   */
  readonly dbSnapshot?: RdsdbSnapshot;

}

/**
 * @schema RdsModifyDbSnapshotAttributeMessage
 */
export interface RdsModifyDbSnapshotAttributeMessage {
  /**
   * @schema RdsModifyDbSnapshotAttributeMessage#DBSnapshotIdentifier
   */
  readonly dbSnapshotIdentifier: string;

  /**
   * @schema RdsModifyDbSnapshotAttributeMessage#AttributeName
   */
  readonly attributeName: string;

  /**
   * @schema RdsModifyDbSnapshotAttributeMessage#ValuesToAdd
   */
  readonly valuesToAdd?: string[];

  /**
   * @schema RdsModifyDbSnapshotAttributeMessage#ValuesToRemove
   */
  readonly valuesToRemove?: string[];

}

/**
 * @schema RdsModifyDbSnapshotAttributeResult
 */
export interface RdsModifyDbSnapshotAttributeResult {
  /**
   * @schema RdsModifyDbSnapshotAttributeResult#DBSnapshotAttributesResult
   */
  readonly dbSnapshotAttributesResult?: RdsdbSnapshotAttributesResult;

}

/**
 * @schema RdsModifyDbSubnetGroupMessage
 */
export interface RdsModifyDbSubnetGroupMessage {
  /**
   * @schema RdsModifyDbSubnetGroupMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName: string;

  /**
   * @schema RdsModifyDbSubnetGroupMessage#DBSubnetGroupDescription
   */
  readonly dbSubnetGroupDescription?: string;

  /**
   * @schema RdsModifyDbSubnetGroupMessage#SubnetIds
   */
  readonly subnetIds: string[];

}

/**
 * @schema RdsModifyDbSubnetGroupResult
 */
export interface RdsModifyDbSubnetGroupResult {
  /**
   * @schema RdsModifyDbSubnetGroupResult#DBSubnetGroup
   */
  readonly dbSubnetGroup?: RdsdbSubnetGroup;

}

/**
 * @schema RdsModifyEventSubscriptionMessage
 */
export interface RdsModifyEventSubscriptionMessage {
  /**
   * @schema RdsModifyEventSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName: string;

  /**
   * @schema RdsModifyEventSubscriptionMessage#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema RdsModifyEventSubscriptionMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema RdsModifyEventSubscriptionMessage#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema RdsModifyEventSubscriptionMessage#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema RdsModifyEventSubscriptionResult
 */
export interface RdsModifyEventSubscriptionResult {
  /**
   * @schema RdsModifyEventSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: RdsEventSubscription;

}

/**
 * @schema RdsModifyGlobalClusterMessage
 */
export interface RdsModifyGlobalClusterMessage {
  /**
   * @schema RdsModifyGlobalClusterMessage#GlobalClusterIdentifier
   */
  readonly globalClusterIdentifier?: string;

  /**
   * @schema RdsModifyGlobalClusterMessage#NewGlobalClusterIdentifier
   */
  readonly newGlobalClusterIdentifier?: string;

  /**
   * @schema RdsModifyGlobalClusterMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * @schema RdsModifyGlobalClusterResult
 */
export interface RdsModifyGlobalClusterResult {
  /**
   * @schema RdsModifyGlobalClusterResult#GlobalCluster
   */
  readonly globalCluster?: RdsGlobalCluster;

}

/**
 * @schema RdsModifyOptionGroupMessage
 */
export interface RdsModifyOptionGroupMessage {
  /**
   * @schema RdsModifyOptionGroupMessage#OptionGroupName
   */
  readonly optionGroupName: string;

  /**
   * @schema RdsModifyOptionGroupMessage#OptionsToInclude
   */
  readonly optionsToInclude?: RdsOptionConfiguration[];

  /**
   * @schema RdsModifyOptionGroupMessage#OptionsToRemove
   */
  readonly optionsToRemove?: string[];

  /**
   * @schema RdsModifyOptionGroupMessage#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

}

/**
 * @schema RdsModifyOptionGroupResult
 */
export interface RdsModifyOptionGroupResult {
  /**
   * @schema RdsModifyOptionGroupResult#OptionGroup
   */
  readonly optionGroup?: RdsOptionGroup;

}

/**
 * @schema RdsPromoteReadReplicaMessage
 */
export interface RdsPromoteReadReplicaMessage {
  /**
   * @schema RdsPromoteReadReplicaMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema RdsPromoteReadReplicaMessage#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema RdsPromoteReadReplicaMessage#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

}

/**
 * @schema RdsPromoteReadReplicaResult
 */
export interface RdsPromoteReadReplicaResult {
  /**
   * @schema RdsPromoteReadReplicaResult#DBInstance
   */
  readonly dbInstance?: RdsdbInstance;

}

/**
 * @schema RdsPromoteReadReplicaDbClusterMessage
 */
export interface RdsPromoteReadReplicaDbClusterMessage {
  /**
   * @schema RdsPromoteReadReplicaDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

}

/**
 * @schema RdsPromoteReadReplicaDbClusterResult
 */
export interface RdsPromoteReadReplicaDbClusterResult {
  /**
   * @schema RdsPromoteReadReplicaDbClusterResult#DBCluster
   */
  readonly dbCluster?: RdsdbCluster;

}

/**
 * @schema RdsPurchaseReservedDbInstancesOfferingMessage
 */
export interface RdsPurchaseReservedDbInstancesOfferingMessage {
  /**
   * @schema RdsPurchaseReservedDbInstancesOfferingMessage#ReservedDBInstancesOfferingId
   */
  readonly reservedDbInstancesOfferingId: string;

  /**
   * @schema RdsPurchaseReservedDbInstancesOfferingMessage#ReservedDBInstanceId
   */
  readonly reservedDbInstanceId?: string;

  /**
   * @schema RdsPurchaseReservedDbInstancesOfferingMessage#DBInstanceCount
   */
  readonly dbInstanceCount?: number;

  /**
   * @schema RdsPurchaseReservedDbInstancesOfferingMessage#Tags
   */
  readonly tags?: RdsTag[];

}

/**
 * @schema RdsPurchaseReservedDbInstancesOfferingResult
 */
export interface RdsPurchaseReservedDbInstancesOfferingResult {
  /**
   * @schema RdsPurchaseReservedDbInstancesOfferingResult#ReservedDBInstance
   */
  readonly reservedDbInstance?: RdsReservedDbInstance;

}

/**
 * @schema RdsRebootDbInstanceMessage
 */
export interface RdsRebootDbInstanceMessage {
  /**
   * @schema RdsRebootDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema RdsRebootDbInstanceMessage#ForceFailover
   */
  readonly forceFailover?: boolean;

}

/**
 * @schema RdsRebootDbInstanceResult
 */
export interface RdsRebootDbInstanceResult {
  /**
   * @schema RdsRebootDbInstanceResult#DBInstance
   */
  readonly dbInstance?: RdsdbInstance;

}

/**
 * @schema RdsRegisterDbProxyTargetsRequest
 */
export interface RdsRegisterDbProxyTargetsRequest {
  /**
   * @schema RdsRegisterDbProxyTargetsRequest#DBProxyName
   */
  readonly dbProxyName: string;

  /**
   * @schema RdsRegisterDbProxyTargetsRequest#TargetGroupName
   */
  readonly targetGroupName?: string;

  /**
   * @schema RdsRegisterDbProxyTargetsRequest#DBInstanceIdentifiers
   */
  readonly dbInstanceIdentifiers?: string[];

  /**
   * @schema RdsRegisterDbProxyTargetsRequest#DBClusterIdentifiers
   */
  readonly dbClusterIdentifiers?: string[];

}

/**
 * @schema RdsRegisterDbProxyTargetsResponse
 */
export interface RdsRegisterDbProxyTargetsResponse {
  /**
   * @schema RdsRegisterDbProxyTargetsResponse#DBProxyTargets
   */
  readonly dbProxyTargets?: RdsdbProxyTarget[];

}

/**
 * @schema RdsRemoveFromGlobalClusterMessage
 */
export interface RdsRemoveFromGlobalClusterMessage {
  /**
   * @schema RdsRemoveFromGlobalClusterMessage#GlobalClusterIdentifier
   */
  readonly globalClusterIdentifier?: string;

  /**
   * @schema RdsRemoveFromGlobalClusterMessage#DbClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

}

/**
 * @schema RdsRemoveFromGlobalClusterResult
 */
export interface RdsRemoveFromGlobalClusterResult {
  /**
   * @schema RdsRemoveFromGlobalClusterResult#GlobalCluster
   */
  readonly globalCluster?: RdsGlobalCluster;

}

/**
 * @schema RdsRemoveRoleFromDbClusterMessage
 */
export interface RdsRemoveRoleFromDbClusterMessage {
  /**
   * @schema RdsRemoveRoleFromDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema RdsRemoveRoleFromDbClusterMessage#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema RdsRemoveRoleFromDbClusterMessage#FeatureName
   */
  readonly featureName?: string;

}

/**
 * @schema RdsRemoveRoleFromDbInstanceMessage
 */
export interface RdsRemoveRoleFromDbInstanceMessage {
  /**
   * @schema RdsRemoveRoleFromDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema RdsRemoveRoleFromDbInstanceMessage#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema RdsRemoveRoleFromDbInstanceMessage#FeatureName
   */
  readonly featureName: string;

}

/**
 * @schema RdsRemoveSourceIdentifierFromSubscriptionMessage
 */
export interface RdsRemoveSourceIdentifierFromSubscriptionMessage {
  /**
   * @schema RdsRemoveSourceIdentifierFromSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName: string;

  /**
   * @schema RdsRemoveSourceIdentifierFromSubscriptionMessage#SourceIdentifier
   */
  readonly sourceIdentifier: string;

}

/**
 * @schema RdsRemoveSourceIdentifierFromSubscriptionResult
 */
export interface RdsRemoveSourceIdentifierFromSubscriptionResult {
  /**
   * @schema RdsRemoveSourceIdentifierFromSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: RdsEventSubscription;

}

/**
 * @schema RdsRemoveTagsFromResourceMessage
 */
export interface RdsRemoveTagsFromResourceMessage {
  /**
   * @schema RdsRemoveTagsFromResourceMessage#ResourceName
   */
  readonly resourceName: string;

  /**
   * @schema RdsRemoveTagsFromResourceMessage#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema RdsResetDbClusterParameterGroupMessage
 */
export interface RdsResetDbClusterParameterGroupMessage {
  /**
   * @schema RdsResetDbClusterParameterGroupMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName: string;

  /**
   * @schema RdsResetDbClusterParameterGroupMessage#ResetAllParameters
   */
  readonly resetAllParameters?: boolean;

  /**
   * @schema RdsResetDbClusterParameterGroupMessage#Parameters
   */
  readonly parameters?: RdsParameter[];

}

/**
 * @schema RdsResetDbParameterGroupMessage
 */
export interface RdsResetDbParameterGroupMessage {
  /**
   * @schema RdsResetDbParameterGroupMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName: string;

  /**
   * @schema RdsResetDbParameterGroupMessage#ResetAllParameters
   */
  readonly resetAllParameters?: boolean;

  /**
   * @schema RdsResetDbParameterGroupMessage#Parameters
   */
  readonly parameters?: RdsParameter[];

}

/**
 * @schema RdsRestoreDbClusterFromS3Message
 */
export interface RdsRestoreDbClusterFromS3Message {
  /**
   * @schema RdsRestoreDbClusterFromS3Message#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema RdsRestoreDbClusterFromS3Message#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RdsRestoreDbClusterFromS3Message#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#Engine
   */
  readonly engine: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#Port
   */
  readonly port?: number;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#MasterUsername
   */
  readonly masterUsername: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#MasterUserPassword
   */
  readonly masterUserPassword: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#Tags
   */
  readonly tags?: RdsTag[];

  /**
   * @schema RdsRestoreDbClusterFromS3Message#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#SourceEngine
   */
  readonly sourceEngine: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#SourceEngineVersion
   */
  readonly sourceEngineVersion: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#S3BucketName
   */
  readonly s3BucketName: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#S3Prefix
   */
  readonly s3Prefix?: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#S3IngestionRoleArn
   */
  readonly s3IngestionRoleArn: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#BacktrackWindow
   */
  readonly backtrackWindow?: number;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema RdsRestoreDbClusterFromS3Message#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#Domain
   */
  readonly domain?: string;

  /**
   * @schema RdsRestoreDbClusterFromS3Message#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

}

/**
 * @schema RdsRestoreDbClusterFromS3Result
 */
export interface RdsRestoreDbClusterFromS3Result {
  /**
   * @schema RdsRestoreDbClusterFromS3Result#DBCluster
   */
  readonly dbCluster?: RdsdbCluster;

}

/**
 * @schema RdsRestoreDbClusterFromSnapshotMessage
 */
export interface RdsRestoreDbClusterFromSnapshotMessage {
  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier: string;

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#Engine
   */
  readonly engine: string;

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#Port
   */
  readonly port?: number;

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#Tags
   */
  readonly tags?: RdsTag[];

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#BacktrackWindow
   */
  readonly backtrackWindow?: number;

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#EngineMode
   */
  readonly engineMode?: string;

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#ScalingConfiguration
   */
  readonly scalingConfiguration?: RdsScalingConfiguration;

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#Domain
   */
  readonly domain?: string;

  /**
   * @schema RdsRestoreDbClusterFromSnapshotMessage#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

}

/**
 * @schema RdsRestoreDbClusterFromSnapshotResult
 */
export interface RdsRestoreDbClusterFromSnapshotResult {
  /**
   * @schema RdsRestoreDbClusterFromSnapshotResult#DBCluster
   */
  readonly dbCluster?: RdsdbCluster;

}

/**
 * @schema RdsRestoreDbClusterToPointInTimeMessage
 */
export interface RdsRestoreDbClusterToPointInTimeMessage {
  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#RestoreType
   */
  readonly restoreType?: string;

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#SourceDBClusterIdentifier
   */
  readonly sourceDbClusterIdentifier: string;

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#RestoreToTime
   */
  readonly restoreToTime?: string;

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#UseLatestRestorableTime
   */
  readonly useLatestRestorableTime?: boolean;

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#Port
   */
  readonly port?: number;

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#Tags
   */
  readonly tags?: RdsTag[];

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#BacktrackWindow
   */
  readonly backtrackWindow?: number;

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#Domain
   */
  readonly domain?: string;

  /**
   * @schema RdsRestoreDbClusterToPointInTimeMessage#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

}

/**
 * @schema RdsRestoreDbClusterToPointInTimeResult
 */
export interface RdsRestoreDbClusterToPointInTimeResult {
  /**
   * @schema RdsRestoreDbClusterToPointInTimeResult#DBCluster
   */
  readonly dbCluster?: RdsdbCluster;

}

/**
 * @schema RdsRestoreDbInstanceFromDbSnapshotMessage
 */
export interface RdsRestoreDbInstanceFromDbSnapshotMessage {
  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#DBSnapshotIdentifier
   */
  readonly dbSnapshotIdentifier: string;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#Port
   */
  readonly port?: number;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#DBName
   */
  readonly dbName?: string;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#Iops
   */
  readonly iops?: number;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#Tags
   */
  readonly tags?: RdsTag[];

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#TdeCredentialPassword
   */
  readonly tdeCredentialPassword?: string;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#Domain
   */
  readonly domain?: string;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#ProcessorFeatures
   */
  readonly processorFeatures?: RdsProcessorFeature[];

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#UseDefaultProcessorFeatures
   */
  readonly useDefaultProcessorFeatures?: boolean;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * @schema RdsRestoreDbInstanceFromDbSnapshotResult
 */
export interface RdsRestoreDbInstanceFromDbSnapshotResult {
  /**
   * @schema RdsRestoreDbInstanceFromDbSnapshotResult#DBInstance
   */
  readonly dbInstance?: RdsdbInstance;

}

/**
 * @schema RdsRestoreDbInstanceFromS3Message
 */
export interface RdsRestoreDbInstanceFromS3Message {
  /**
   * @schema RdsRestoreDbInstanceFromS3Message#DBName
   */
  readonly dbName?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#DBInstanceClass
   */
  readonly dbInstanceClass: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#Engine
   */
  readonly engine: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#DBSecurityGroups
   */
  readonly dbSecurityGroups?: string[];

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#Port
   */
  readonly port?: number;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#Iops
   */
  readonly iops?: number;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#Tags
   */
  readonly tags?: RdsTag[];

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#MonitoringInterval
   */
  readonly monitoringInterval?: number;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#MonitoringRoleArn
   */
  readonly monitoringRoleArn?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#SourceEngine
   */
  readonly sourceEngine: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#SourceEngineVersion
   */
  readonly sourceEngineVersion: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#S3BucketName
   */
  readonly s3BucketName: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#S3Prefix
   */
  readonly s3Prefix?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#S3IngestionRoleArn
   */
  readonly s3IngestionRoleArn: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#EnablePerformanceInsights
   */
  readonly enablePerformanceInsights?: boolean;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#PerformanceInsightsKMSKeyId
   */
  readonly performanceInsightsKmsKeyId?: string;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#PerformanceInsightsRetentionPeriod
   */
  readonly performanceInsightsRetentionPeriod?: number;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#ProcessorFeatures
   */
  readonly processorFeatures?: RdsProcessorFeature[];

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#UseDefaultProcessorFeatures
   */
  readonly useDefaultProcessorFeatures?: boolean;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RdsRestoreDbInstanceFromS3Message#MaxAllocatedStorage
   */
  readonly maxAllocatedStorage?: number;

}

/**
 * @schema RdsRestoreDbInstanceFromS3Result
 */
export interface RdsRestoreDbInstanceFromS3Result {
  /**
   * @schema RdsRestoreDbInstanceFromS3Result#DBInstance
   */
  readonly dbInstance?: RdsdbInstance;

}

/**
 * @schema RdsRestoreDbInstanceToPointInTimeMessage
 */
export interface RdsRestoreDbInstanceToPointInTimeMessage {
  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#SourceDBInstanceIdentifier
   */
  readonly sourceDbInstanceIdentifier?: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#TargetDBInstanceIdentifier
   */
  readonly targetDbInstanceIdentifier: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#RestoreTime
   */
  readonly restoreTime?: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#UseLatestRestorableTime
   */
  readonly useLatestRestorableTime?: boolean;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#Port
   */
  readonly port?: number;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#DBName
   */
  readonly dbName?: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#Iops
   */
  readonly iops?: number;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#Tags
   */
  readonly tags?: RdsTag[];

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#TdeCredentialPassword
   */
  readonly tdeCredentialPassword?: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#Domain
   */
  readonly domain?: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#ProcessorFeatures
   */
  readonly processorFeatures?: RdsProcessorFeature[];

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#UseDefaultProcessorFeatures
   */
  readonly useDefaultProcessorFeatures?: boolean;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#SourceDbiResourceId
   */
  readonly sourceDbiResourceId?: string;

  /**
   * @schema RdsRestoreDbInstanceToPointInTimeMessage#MaxAllocatedStorage
   */
  readonly maxAllocatedStorage?: number;

}

/**
 * @schema RdsRestoreDbInstanceToPointInTimeResult
 */
export interface RdsRestoreDbInstanceToPointInTimeResult {
  /**
   * @schema RdsRestoreDbInstanceToPointInTimeResult#DBInstance
   */
  readonly dbInstance?: RdsdbInstance;

}

/**
 * @schema RdsRevokeDbSecurityGroupIngressMessage
 */
export interface RdsRevokeDbSecurityGroupIngressMessage {
  /**
   * @schema RdsRevokeDbSecurityGroupIngressMessage#DBSecurityGroupName
   */
  readonly dbSecurityGroupName: string;

  /**
   * @schema RdsRevokeDbSecurityGroupIngressMessage#CIDRIP
   */
  readonly cidrip?: string;

  /**
   * @schema RdsRevokeDbSecurityGroupIngressMessage#EC2SecurityGroupName
   */
  readonly ec2SecurityGroupName?: string;

  /**
   * @schema RdsRevokeDbSecurityGroupIngressMessage#EC2SecurityGroupId
   */
  readonly ec2SecurityGroupId?: string;

  /**
   * @schema RdsRevokeDbSecurityGroupIngressMessage#EC2SecurityGroupOwnerId
   */
  readonly ec2SecurityGroupOwnerId?: string;

}

/**
 * @schema RdsRevokeDbSecurityGroupIngressResult
 */
export interface RdsRevokeDbSecurityGroupIngressResult {
  /**
   * @schema RdsRevokeDbSecurityGroupIngressResult#DBSecurityGroup
   */
  readonly dbSecurityGroup?: RdsdbSecurityGroup;

}

/**
 * @schema RdsStartActivityStreamRequest
 */
export interface RdsStartActivityStreamRequest {
  /**
   * @schema RdsStartActivityStreamRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema RdsStartActivityStreamRequest#Mode
   */
  readonly mode: string;

  /**
   * @schema RdsStartActivityStreamRequest#KmsKeyId
   */
  readonly kmsKeyId: string;

  /**
   * @schema RdsStartActivityStreamRequest#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

}

/**
 * @schema RdsStartActivityStreamResponse
 */
export interface RdsStartActivityStreamResponse {
  /**
   * @schema RdsStartActivityStreamResponse#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsStartActivityStreamResponse#KinesisStreamName
   */
  readonly kinesisStreamName?: string;

  /**
   * @schema RdsStartActivityStreamResponse#Status
   */
  readonly status?: string;

  /**
   * @schema RdsStartActivityStreamResponse#Mode
   */
  readonly mode?: string;

  /**
   * @schema RdsStartActivityStreamResponse#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

}

/**
 * @schema RdsStartDbClusterMessage
 */
export interface RdsStartDbClusterMessage {
  /**
   * @schema RdsStartDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

}

/**
 * @schema RdsStartDbClusterResult
 */
export interface RdsStartDbClusterResult {
  /**
   * @schema RdsStartDbClusterResult#DBCluster
   */
  readonly dbCluster?: RdsdbCluster;

}

/**
 * @schema RdsStartDbInstanceMessage
 */
export interface RdsStartDbInstanceMessage {
  /**
   * @schema RdsStartDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

}

/**
 * @schema RdsStartDbInstanceResult
 */
export interface RdsStartDbInstanceResult {
  /**
   * @schema RdsStartDbInstanceResult#DBInstance
   */
  readonly dbInstance?: RdsdbInstance;

}

/**
 * @schema RdsStartExportTaskMessage
 */
export interface RdsStartExportTaskMessage {
  /**
   * @schema RdsStartExportTaskMessage#ExportTaskIdentifier
   */
  readonly exportTaskIdentifier: string;

  /**
   * @schema RdsStartExportTaskMessage#SourceArn
   */
  readonly sourceArn: string;

  /**
   * @schema RdsStartExportTaskMessage#S3BucketName
   */
  readonly s3BucketName: string;

  /**
   * @schema RdsStartExportTaskMessage#IamRoleArn
   */
  readonly iamRoleArn: string;

  /**
   * @schema RdsStartExportTaskMessage#KmsKeyId
   */
  readonly kmsKeyId: string;

  /**
   * @schema RdsStartExportTaskMessage#S3Prefix
   */
  readonly s3Prefix?: string;

  /**
   * @schema RdsStartExportTaskMessage#ExportOnly
   */
  readonly exportOnly?: string[];

}

/**
 * @schema RdsStopActivityStreamRequest
 */
export interface RdsStopActivityStreamRequest {
  /**
   * @schema RdsStopActivityStreamRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema RdsStopActivityStreamRequest#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

}

/**
 * @schema RdsStopActivityStreamResponse
 */
export interface RdsStopActivityStreamResponse {
  /**
   * @schema RdsStopActivityStreamResponse#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsStopActivityStreamResponse#KinesisStreamName
   */
  readonly kinesisStreamName?: string;

  /**
   * @schema RdsStopActivityStreamResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema RdsStopDbClusterMessage
 */
export interface RdsStopDbClusterMessage {
  /**
   * @schema RdsStopDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

}

/**
 * @schema RdsStopDbClusterResult
 */
export interface RdsStopDbClusterResult {
  /**
   * @schema RdsStopDbClusterResult#DBCluster
   */
  readonly dbCluster?: RdsdbCluster;

}

/**
 * @schema RdsStopDbInstanceMessage
 */
export interface RdsStopDbInstanceMessage {
  /**
   * @schema RdsStopDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema RdsStopDbInstanceMessage#DBSnapshotIdentifier
   */
  readonly dbSnapshotIdentifier?: string;

}

/**
 * @schema RdsStopDbInstanceResult
 */
export interface RdsStopDbInstanceResult {
  /**
   * @schema RdsStopDbInstanceResult#DBInstance
   */
  readonly dbInstance?: RdsdbInstance;

}

/**
 * @schema RdsEventSubscription
 */
export interface RdsEventSubscription {
  /**
   * @schema RdsEventSubscription#CustomerAwsId
   */
  readonly customerAwsId?: string;

  /**
   * @schema RdsEventSubscription#CustSubscriptionId
   */
  readonly custSubscriptionId?: string;

  /**
   * @schema RdsEventSubscription#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema RdsEventSubscription#Status
   */
  readonly status?: string;

  /**
   * @schema RdsEventSubscription#SubscriptionCreationTime
   */
  readonly subscriptionCreationTime?: string;

  /**
   * @schema RdsEventSubscription#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema RdsEventSubscription#SourceIdsList
   */
  readonly sourceIdsList?: string[];

  /**
   * @schema RdsEventSubscription#EventCategoriesList
   */
  readonly eventCategoriesList?: string[];

  /**
   * @schema RdsEventSubscription#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema RdsEventSubscription#EventSubscriptionArn
   */
  readonly eventSubscriptionArn?: string;

}

/**
 * @schema RdsTag
 */
export interface RdsTag {
  /**
   * @schema RdsTag#Key
   */
  readonly key?: string;

  /**
   * @schema RdsTag#Value
   */
  readonly value?: string;

}

/**
 * @schema RdsResourcePendingMaintenanceActions
 */
export interface RdsResourcePendingMaintenanceActions {
  /**
   * @schema RdsResourcePendingMaintenanceActions#ResourceIdentifier
   */
  readonly resourceIdentifier?: string;

  /**
   * @schema RdsResourcePendingMaintenanceActions#PendingMaintenanceActionDetails
   */
  readonly pendingMaintenanceActionDetails?: RdsPendingMaintenanceAction[];

}

/**
 * @schema RdsdbSecurityGroup
 */
export interface RdsdbSecurityGroup {
  /**
   * @schema RdsdbSecurityGroup#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema RdsdbSecurityGroup#DBSecurityGroupName
   */
  readonly dbSecurityGroupName?: string;

  /**
   * @schema RdsdbSecurityGroup#DBSecurityGroupDescription
   */
  readonly dbSecurityGroupDescription?: string;

  /**
   * @schema RdsdbSecurityGroup#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema RdsdbSecurityGroup#EC2SecurityGroups
   */
  readonly ec2SecurityGroups?: Rdsec2SecurityGroup[];

  /**
   * @schema RdsdbSecurityGroup#IPRanges
   */
  readonly ipRanges?: RdsipRange[];

  /**
   * @schema RdsdbSecurityGroup#DBSecurityGroupArn
   */
  readonly dbSecurityGroupArn?: string;

}

/**
 * @schema RdsdbClusterParameterGroup
 */
export interface RdsdbClusterParameterGroup {
  /**
   * @schema RdsdbClusterParameterGroup#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema RdsdbClusterParameterGroup#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema RdsdbClusterParameterGroup#Description
   */
  readonly description?: string;

  /**
   * @schema RdsdbClusterParameterGroup#DBClusterParameterGroupArn
   */
  readonly dbClusterParameterGroupArn?: string;

}

/**
 * @schema RdsdbClusterSnapshot
 */
export interface RdsdbClusterSnapshot {
  /**
   * @schema RdsdbClusterSnapshot#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema RdsdbClusterSnapshot#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

  /**
   * @schema RdsdbClusterSnapshot#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsdbClusterSnapshot#SnapshotCreateTime
   */
  readonly snapshotCreateTime?: string;

  /**
   * @schema RdsdbClusterSnapshot#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsdbClusterSnapshot#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema RdsdbClusterSnapshot#Status
   */
  readonly status?: string;

  /**
   * @schema RdsdbClusterSnapshot#Port
   */
  readonly port?: number;

  /**
   * @schema RdsdbClusterSnapshot#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema RdsdbClusterSnapshot#ClusterCreateTime
   */
  readonly clusterCreateTime?: string;

  /**
   * @schema RdsdbClusterSnapshot#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema RdsdbClusterSnapshot#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsdbClusterSnapshot#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema RdsdbClusterSnapshot#SnapshotType
   */
  readonly snapshotType?: string;

  /**
   * @schema RdsdbClusterSnapshot#PercentProgress
   */
  readonly percentProgress?: number;

  /**
   * @schema RdsdbClusterSnapshot#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema RdsdbClusterSnapshot#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsdbClusterSnapshot#DBClusterSnapshotArn
   */
  readonly dbClusterSnapshotArn?: string;

  /**
   * @schema RdsdbClusterSnapshot#SourceDBClusterSnapshotArn
   */
  readonly sourceDbClusterSnapshotArn?: string;

  /**
   * @schema RdsdbClusterSnapshot#IAMDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

  /**
   * @schema RdsdbClusterSnapshot#TagList
   */
  readonly tagList?: RdsTag[];

}

/**
 * @schema RdsdbParameterGroup
 */
export interface RdsdbParameterGroup {
  /**
   * @schema RdsdbParameterGroup#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema RdsdbParameterGroup#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema RdsdbParameterGroup#Description
   */
  readonly description?: string;

  /**
   * @schema RdsdbParameterGroup#DBParameterGroupArn
   */
  readonly dbParameterGroupArn?: string;

}

/**
 * @schema RdsdbSnapshot
 */
export interface RdsdbSnapshot {
  /**
   * @schema RdsdbSnapshot#DBSnapshotIdentifier
   */
  readonly dbSnapshotIdentifier?: string;

  /**
   * @schema RdsdbSnapshot#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema RdsdbSnapshot#SnapshotCreateTime
   */
  readonly snapshotCreateTime?: string;

  /**
   * @schema RdsdbSnapshot#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsdbSnapshot#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema RdsdbSnapshot#Status
   */
  readonly status?: string;

  /**
   * @schema RdsdbSnapshot#Port
   */
  readonly port?: number;

  /**
   * @schema RdsdbSnapshot#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema RdsdbSnapshot#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema RdsdbSnapshot#InstanceCreateTime
   */
  readonly instanceCreateTime?: string;

  /**
   * @schema RdsdbSnapshot#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema RdsdbSnapshot#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsdbSnapshot#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema RdsdbSnapshot#SnapshotType
   */
  readonly snapshotType?: string;

  /**
   * @schema RdsdbSnapshot#Iops
   */
  readonly iops?: number;

  /**
   * @schema RdsdbSnapshot#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsdbSnapshot#PercentProgress
   */
  readonly percentProgress?: number;

  /**
   * @schema RdsdbSnapshot#SourceRegion
   */
  readonly sourceRegion?: string;

  /**
   * @schema RdsdbSnapshot#SourceDBSnapshotIdentifier
   */
  readonly sourceDbSnapshotIdentifier?: string;

  /**
   * @schema RdsdbSnapshot#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema RdsdbSnapshot#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema RdsdbSnapshot#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema RdsdbSnapshot#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsdbSnapshot#DBSnapshotArn
   */
  readonly dbSnapshotArn?: string;

  /**
   * @schema RdsdbSnapshot#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema RdsdbSnapshot#IAMDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

  /**
   * @schema RdsdbSnapshot#ProcessorFeatures
   */
  readonly processorFeatures?: RdsProcessorFeature[];

  /**
   * @schema RdsdbSnapshot#DbiResourceId
   */
  readonly dbiResourceId?: string;

  /**
   * @schema RdsdbSnapshot#TagList
   */
  readonly tagList?: RdsTag[];

}

/**
 * @schema RdsOptionGroup
 */
export interface RdsOptionGroup {
  /**
   * @schema RdsOptionGroup#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsOptionGroup#OptionGroupDescription
   */
  readonly optionGroupDescription?: string;

  /**
   * @schema RdsOptionGroup#EngineName
   */
  readonly engineName?: string;

  /**
   * @schema RdsOptionGroup#MajorEngineVersion
   */
  readonly majorEngineVersion?: string;

  /**
   * @schema RdsOptionGroup#Options
   */
  readonly options?: RdsOption[];

  /**
   * @schema RdsOptionGroup#AllowsVpcAndNonVpcInstanceMemberships
   */
  readonly allowsVpcAndNonVpcInstanceMemberships?: boolean;

  /**
   * @schema RdsOptionGroup#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema RdsOptionGroup#OptionGroupArn
   */
  readonly optionGroupArn?: string;

}

/**
 * @schema RdsCustomAvailabilityZone
 */
export interface RdsCustomAvailabilityZone {
  /**
   * @schema RdsCustomAvailabilityZone#CustomAvailabilityZoneId
   */
  readonly customAvailabilityZoneId?: string;

  /**
   * @schema RdsCustomAvailabilityZone#CustomAvailabilityZoneName
   */
  readonly customAvailabilityZoneName?: string;

  /**
   * @schema RdsCustomAvailabilityZone#CustomAvailabilityZoneStatus
   */
  readonly customAvailabilityZoneStatus?: string;

  /**
   * @schema RdsCustomAvailabilityZone#VpnDetails
   */
  readonly vpnDetails?: RdsVpnDetails;

}

/**
 * @schema RdsScalingConfiguration
 */
export interface RdsScalingConfiguration {
  /**
   * @schema RdsScalingConfiguration#MinCapacity
   */
  readonly minCapacity?: number;

  /**
   * @schema RdsScalingConfiguration#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema RdsScalingConfiguration#AutoPause
   */
  readonly autoPause?: boolean;

  /**
   * @schema RdsScalingConfiguration#SecondsUntilAutoPause
   */
  readonly secondsUntilAutoPause?: number;

  /**
   * @schema RdsScalingConfiguration#TimeoutAction
   */
  readonly timeoutAction?: string;

}

/**
 * @schema RdsdbCluster
 */
export interface RdsdbCluster {
  /**
   * @schema RdsdbCluster#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema RdsdbCluster#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema RdsdbCluster#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema RdsdbCluster#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema RdsdbCluster#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema RdsdbCluster#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsdbCluster#DBClusterParameterGroup
   */
  readonly dbClusterParameterGroup?: string;

  /**
   * @schema RdsdbCluster#DBSubnetGroup
   */
  readonly dbSubnetGroup?: string;

  /**
   * @schema RdsdbCluster#Status
   */
  readonly status?: string;

  /**
   * @schema RdsdbCluster#PercentProgress
   */
  readonly percentProgress?: string;

  /**
   * @schema RdsdbCluster#EarliestRestorableTime
   */
  readonly earliestRestorableTime?: string;

  /**
   * @schema RdsdbCluster#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema RdsdbCluster#ReaderEndpoint
   */
  readonly readerEndpoint?: string;

  /**
   * @schema RdsdbCluster#CustomEndpoints
   */
  readonly customEndpoints?: string[];

  /**
   * @schema RdsdbCluster#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema RdsdbCluster#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsdbCluster#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsdbCluster#LatestRestorableTime
   */
  readonly latestRestorableTime?: string;

  /**
   * @schema RdsdbCluster#Port
   */
  readonly port?: number;

  /**
   * @schema RdsdbCluster#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema RdsdbCluster#DBClusterOptionGroupMemberships
   */
  readonly dbClusterOptionGroupMemberships?: RdsdbClusterOptionGroupStatus[];

  /**
   * @schema RdsdbCluster#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema RdsdbCluster#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema RdsdbCluster#ReplicationSourceIdentifier
   */
  readonly replicationSourceIdentifier?: string;

  /**
   * @schema RdsdbCluster#ReadReplicaIdentifiers
   */
  readonly readReplicaIdentifiers?: string[];

  /**
   * @schema RdsdbCluster#DBClusterMembers
   */
  readonly dbClusterMembers?: RdsdbClusterMember[];

  /**
   * @schema RdsdbCluster#VpcSecurityGroups
   */
  readonly vpcSecurityGroups?: RdsVpcSecurityGroupMembership[];

  /**
   * @schema RdsdbCluster#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema RdsdbCluster#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema RdsdbCluster#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsdbCluster#DbClusterResourceId
   */
  readonly dbClusterResourceId?: string;

  /**
   * @schema RdsdbCluster#DBClusterArn
   */
  readonly dbClusterArn?: string;

  /**
   * @schema RdsdbCluster#AssociatedRoles
   */
  readonly associatedRoles?: RdsdbClusterRole[];

  /**
   * @schema RdsdbCluster#IAMDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

  /**
   * @schema RdsdbCluster#CloneGroupId
   */
  readonly cloneGroupId?: string;

  /**
   * @schema RdsdbCluster#ClusterCreateTime
   */
  readonly clusterCreateTime?: string;

  /**
   * @schema RdsdbCluster#EarliestBacktrackTime
   */
  readonly earliestBacktrackTime?: string;

  /**
   * @schema RdsdbCluster#BacktrackWindow
   */
  readonly backtrackWindow?: number;

  /**
   * @schema RdsdbCluster#BacktrackConsumedChangeRecords
   */
  readonly backtrackConsumedChangeRecords?: number;

  /**
   * @schema RdsdbCluster#EnabledCloudwatchLogsExports
   */
  readonly enabledCloudwatchLogsExports?: string[];

  /**
   * @schema RdsdbCluster#Capacity
   */
  readonly capacity?: number;

  /**
   * @schema RdsdbCluster#EngineMode
   */
  readonly engineMode?: string;

  /**
   * @schema RdsdbCluster#ScalingConfigurationInfo
   */
  readonly scalingConfigurationInfo?: RdsScalingConfigurationInfo;

  /**
   * @schema RdsdbCluster#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RdsdbCluster#HttpEndpointEnabled
   */
  readonly httpEndpointEnabled?: boolean;

  /**
   * @schema RdsdbCluster#ActivityStreamMode
   */
  readonly activityStreamMode?: string;

  /**
   * @schema RdsdbCluster#ActivityStreamStatus
   */
  readonly activityStreamStatus?: string;

  /**
   * @schema RdsdbCluster#ActivityStreamKmsKeyId
   */
  readonly activityStreamKmsKeyId?: string;

  /**
   * @schema RdsdbCluster#ActivityStreamKinesisStreamName
   */
  readonly activityStreamKinesisStreamName?: string;

  /**
   * @schema RdsdbCluster#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema RdsdbCluster#CrossAccountClone
   */
  readonly crossAccountClone?: boolean;

  /**
   * @schema RdsdbCluster#DomainMemberships
   */
  readonly domainMemberships?: RdsDomainMembership[];

  /**
   * @schema RdsdbCluster#TagList
   */
  readonly tagList?: RdsTag[];

  /**
   * @schema RdsdbCluster#GlobalWriteForwardingStatus
   */
  readonly globalWriteForwardingStatus?: string;

  /**
   * @schema RdsdbCluster#GlobalWriteForwardingRequested
   */
  readonly globalWriteForwardingRequested?: boolean;

}

/**
 * @schema RdsProcessorFeature
 */
export interface RdsProcessorFeature {
  /**
   * @schema RdsProcessorFeature#Name
   */
  readonly name?: string;

  /**
   * @schema RdsProcessorFeature#Value
   */
  readonly value?: string;

}

/**
 * @schema RdsdbInstance
 */
export interface RdsdbInstance {
  /**
   * @schema RdsdbInstance#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema RdsdbInstance#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema RdsdbInstance#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsdbInstance#DBInstanceStatus
   */
  readonly dbInstanceStatus?: string;

  /**
   * @schema RdsdbInstance#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema RdsdbInstance#DBName
   */
  readonly dbName?: string;

  /**
   * @schema RdsdbInstance#Endpoint
   */
  readonly endpoint?: RdsEndpoint;

  /**
   * @schema RdsdbInstance#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema RdsdbInstance#InstanceCreateTime
   */
  readonly instanceCreateTime?: string;

  /**
   * @schema RdsdbInstance#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema RdsdbInstance#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema RdsdbInstance#DBSecurityGroups
   */
  readonly dbSecurityGroups?: RdsdbSecurityGroupMembership[];

  /**
   * @schema RdsdbInstance#VpcSecurityGroups
   */
  readonly vpcSecurityGroups?: RdsVpcSecurityGroupMembership[];

  /**
   * @schema RdsdbInstance#DBParameterGroups
   */
  readonly dbParameterGroups?: RdsdbParameterGroupStatus[];

  /**
   * @schema RdsdbInstance#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema RdsdbInstance#DBSubnetGroup
   */
  readonly dbSubnetGroup?: RdsdbSubnetGroup;

  /**
   * @schema RdsdbInstance#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema RdsdbInstance#PendingModifiedValues
   */
  readonly pendingModifiedValues?: RdsPendingModifiedValues;

  /**
   * @schema RdsdbInstance#LatestRestorableTime
   */
  readonly latestRestorableTime?: string;

  /**
   * @schema RdsdbInstance#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema RdsdbInstance#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsdbInstance#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema RdsdbInstance#ReadReplicaSourceDBInstanceIdentifier
   */
  readonly readReplicaSourceDbInstanceIdentifier?: string;

  /**
   * @schema RdsdbInstance#ReadReplicaDBInstanceIdentifiers
   */
  readonly readReplicaDbInstanceIdentifiers?: string[];

  /**
   * @schema RdsdbInstance#ReadReplicaDBClusterIdentifiers
   */
  readonly readReplicaDbClusterIdentifiers?: string[];

  /**
   * @schema RdsdbInstance#ReplicaMode
   */
  readonly replicaMode?: string;

  /**
   * @schema RdsdbInstance#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema RdsdbInstance#Iops
   */
  readonly iops?: number;

  /**
   * @schema RdsdbInstance#OptionGroupMemberships
   */
  readonly optionGroupMemberships?: RdsOptionGroupMembership[];

  /**
   * @schema RdsdbInstance#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema RdsdbInstance#NcharCharacterSetName
   */
  readonly ncharCharacterSetName?: string;

  /**
   * @schema RdsdbInstance#SecondaryAvailabilityZone
   */
  readonly secondaryAvailabilityZone?: string;

  /**
   * @schema RdsdbInstance#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema RdsdbInstance#StatusInfos
   */
  readonly statusInfos?: RdsdbInstanceStatusInfo[];

  /**
   * @schema RdsdbInstance#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema RdsdbInstance#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema RdsdbInstance#DbInstancePort
   */
  readonly dbInstancePort?: number;

  /**
   * @schema RdsdbInstance#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsdbInstance#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema RdsdbInstance#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsdbInstance#DbiResourceId
   */
  readonly dbiResourceId?: string;

  /**
   * @schema RdsdbInstance#CACertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

  /**
   * @schema RdsdbInstance#DomainMemberships
   */
  readonly domainMemberships?: RdsDomainMembership[];

  /**
   * @schema RdsdbInstance#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema RdsdbInstance#MonitoringInterval
   */
  readonly monitoringInterval?: number;

  /**
   * @schema RdsdbInstance#EnhancedMonitoringResourceArn
   */
  readonly enhancedMonitoringResourceArn?: string;

  /**
   * @schema RdsdbInstance#MonitoringRoleArn
   */
  readonly monitoringRoleArn?: string;

  /**
   * @schema RdsdbInstance#PromotionTier
   */
  readonly promotionTier?: number;

  /**
   * @schema RdsdbInstance#DBInstanceArn
   */
  readonly dbInstanceArn?: string;

  /**
   * @schema RdsdbInstance#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema RdsdbInstance#IAMDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

  /**
   * @schema RdsdbInstance#PerformanceInsightsEnabled
   */
  readonly performanceInsightsEnabled?: boolean;

  /**
   * @schema RdsdbInstance#PerformanceInsightsKMSKeyId
   */
  readonly performanceInsightsKmsKeyId?: string;

  /**
   * @schema RdsdbInstance#PerformanceInsightsRetentionPeriod
   */
  readonly performanceInsightsRetentionPeriod?: number;

  /**
   * @schema RdsdbInstance#EnabledCloudwatchLogsExports
   */
  readonly enabledCloudwatchLogsExports?: string[];

  /**
   * @schema RdsdbInstance#ProcessorFeatures
   */
  readonly processorFeatures?: RdsProcessorFeature[];

  /**
   * @schema RdsdbInstance#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RdsdbInstance#AssociatedRoles
   */
  readonly associatedRoles?: RdsdbInstanceRole[];

  /**
   * @schema RdsdbInstance#ListenerEndpoint
   */
  readonly listenerEndpoint?: RdsEndpoint;

  /**
   * @schema RdsdbInstance#MaxAllocatedStorage
   */
  readonly maxAllocatedStorage?: number;

  /**
   * @schema RdsdbInstance#TagList
   */
  readonly tagList?: RdsTag[];

}

/**
 * @schema RdsUserAuthConfig
 */
export interface RdsUserAuthConfig {
  /**
   * @schema RdsUserAuthConfig#Description
   */
  readonly description?: string;

  /**
   * @schema RdsUserAuthConfig#UserName
   */
  readonly userName?: string;

  /**
   * @schema RdsUserAuthConfig#AuthScheme
   */
  readonly authScheme?: string;

  /**
   * @schema RdsUserAuthConfig#SecretArn
   */
  readonly secretArn?: string;

  /**
   * @schema RdsUserAuthConfig#IAMAuth
   */
  readonly iamAuth?: string;

}

/**
 * @schema RdsdbProxy
 */
export interface RdsdbProxy {
  /**
   * @schema RdsdbProxy#DBProxyName
   */
  readonly dbProxyName?: string;

  /**
   * @schema RdsdbProxy#DBProxyArn
   */
  readonly dbProxyArn?: string;

  /**
   * @schema RdsdbProxy#Status
   */
  readonly status?: string;

  /**
   * @schema RdsdbProxy#EngineFamily
   */
  readonly engineFamily?: string;

  /**
   * @schema RdsdbProxy#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RdsdbProxy#VpcSubnetIds
   */
  readonly vpcSubnetIds?: string[];

  /**
   * @schema RdsdbProxy#Auth
   */
  readonly auth?: RdsUserAuthConfigInfo[];

  /**
   * @schema RdsdbProxy#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema RdsdbProxy#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema RdsdbProxy#RequireTLS
   */
  readonly requireTls?: boolean;

  /**
   * @schema RdsdbProxy#IdleClientTimeout
   */
  readonly idleClientTimeout?: number;

  /**
   * @schema RdsdbProxy#DebugLogging
   */
  readonly debugLogging?: boolean;

  /**
   * @schema RdsdbProxy#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema RdsdbProxy#UpdatedDate
   */
  readonly updatedDate?: string;

}

/**
 * @schema RdsdbSubnetGroup
 */
export interface RdsdbSubnetGroup {
  /**
   * @schema RdsdbSubnetGroup#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RdsdbSubnetGroup#DBSubnetGroupDescription
   */
  readonly dbSubnetGroupDescription?: string;

  /**
   * @schema RdsdbSubnetGroup#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema RdsdbSubnetGroup#SubnetGroupStatus
   */
  readonly subnetGroupStatus?: string;

  /**
   * @schema RdsdbSubnetGroup#Subnets
   */
  readonly subnets?: RdsSubnet[];

  /**
   * @schema RdsdbSubnetGroup#DBSubnetGroupArn
   */
  readonly dbSubnetGroupArn?: string;

}

/**
 * @schema RdsGlobalCluster
 */
export interface RdsGlobalCluster {
  /**
   * @schema RdsGlobalCluster#GlobalClusterIdentifier
   */
  readonly globalClusterIdentifier?: string;

  /**
   * @schema RdsGlobalCluster#GlobalClusterResourceId
   */
  readonly globalClusterResourceId?: string;

  /**
   * @schema RdsGlobalCluster#GlobalClusterArn
   */
  readonly globalClusterArn?: string;

  /**
   * @schema RdsGlobalCluster#Status
   */
  readonly status?: string;

  /**
   * @schema RdsGlobalCluster#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsGlobalCluster#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsGlobalCluster#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema RdsGlobalCluster#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema RdsGlobalCluster#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema RdsGlobalCluster#GlobalClusterMembers
   */
  readonly globalClusterMembers?: RdsGlobalClusterMember[];

}

/**
 * @schema RdsdbInstanceAutomatedBackup
 */
export interface RdsdbInstanceAutomatedBackup {
  /**
   * @schema RdsdbInstanceAutomatedBackup#DBInstanceArn
   */
  readonly dbInstanceArn?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#DbiResourceId
   */
  readonly dbiResourceId?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#Region
   */
  readonly region?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#RestoreWindow
   */
  readonly restoreWindow?: RdsRestoreWindow;

  /**
   * @schema RdsdbInstanceAutomatedBackup#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema RdsdbInstanceAutomatedBackup#Status
   */
  readonly status?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#Port
   */
  readonly port?: number;

  /**
   * @schema RdsdbInstanceAutomatedBackup#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#InstanceCreateTime
   */
  readonly instanceCreateTime?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#Iops
   */
  readonly iops?: number;

  /**
   * @schema RdsdbInstanceAutomatedBackup#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema RdsdbInstanceAutomatedBackup#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema RdsdbInstanceAutomatedBackup#IAMDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

}

/**
 * @schema RdsInstallationMediaFailureCause
 */
export interface RdsInstallationMediaFailureCause {
  /**
   * @schema RdsInstallationMediaFailureCause#Message
   */
  readonly message?: string;

}

/**
 * @schema RdsAccountQuota
 */
export interface RdsAccountQuota {
  /**
   * @schema RdsAccountQuota#AccountQuotaName
   */
  readonly accountQuotaName?: string;

  /**
   * @schema RdsAccountQuota#Used
   */
  readonly used?: number;

  /**
   * @schema RdsAccountQuota#Max
   */
  readonly max?: number;

}

/**
 * @schema RdsFilter
 */
export interface RdsFilter {
  /**
   * @schema RdsFilter#Name
   */
  readonly name: string;

  /**
   * @schema RdsFilter#Values
   */
  readonly values: string[];

}

/**
 * @schema RdsCertificate
 */
export interface RdsCertificate {
  /**
   * @schema RdsCertificate#CertificateIdentifier
   */
  readonly certificateIdentifier?: string;

  /**
   * @schema RdsCertificate#CertificateType
   */
  readonly certificateType?: string;

  /**
   * @schema RdsCertificate#Thumbprint
   */
  readonly thumbprint?: string;

  /**
   * @schema RdsCertificate#ValidFrom
   */
  readonly validFrom?: string;

  /**
   * @schema RdsCertificate#ValidTill
   */
  readonly validTill?: string;

  /**
   * @schema RdsCertificate#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema RdsCertificate#CustomerOverride
   */
  readonly customerOverride?: boolean;

  /**
   * @schema RdsCertificate#CustomerOverrideValidTill
   */
  readonly customerOverrideValidTill?: string;

}

/**
 * @schema RdsParameter
 */
export interface RdsParameter {
  /**
   * @schema RdsParameter#ParameterName
   */
  readonly parameterName?: string;

  /**
   * @schema RdsParameter#ParameterValue
   */
  readonly parameterValue?: string;

  /**
   * @schema RdsParameter#Description
   */
  readonly description?: string;

  /**
   * @schema RdsParameter#Source
   */
  readonly source?: string;

  /**
   * @schema RdsParameter#ApplyType
   */
  readonly applyType?: string;

  /**
   * @schema RdsParameter#DataType
   */
  readonly dataType?: string;

  /**
   * @schema RdsParameter#AllowedValues
   */
  readonly allowedValues?: string;

  /**
   * @schema RdsParameter#IsModifiable
   */
  readonly isModifiable?: boolean;

  /**
   * @schema RdsParameter#MinimumEngineVersion
   */
  readonly minimumEngineVersion?: string;

  /**
   * @schema RdsParameter#ApplyMethod
   */
  readonly applyMethod?: string;

  /**
   * @schema RdsParameter#SupportedEngineModes
   */
  readonly supportedEngineModes?: string[];

}

/**
 * @schema RdsdbClusterSnapshotAttributesResult
 */
export interface RdsdbClusterSnapshotAttributesResult {
  /**
   * @schema RdsdbClusterSnapshotAttributesResult#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

  /**
   * @schema RdsdbClusterSnapshotAttributesResult#DBClusterSnapshotAttributes
   */
  readonly dbClusterSnapshotAttributes?: RdsdbClusterSnapshotAttribute[];

}

/**
 * @schema RdsdbEngineVersion
 */
export interface RdsdbEngineVersion {
  /**
   * @schema RdsdbEngineVersion#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsdbEngineVersion#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsdbEngineVersion#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema RdsdbEngineVersion#DBEngineDescription
   */
  readonly dbEngineDescription?: string;

  /**
   * @schema RdsdbEngineVersion#DBEngineVersionDescription
   */
  readonly dbEngineVersionDescription?: string;

  /**
   * @schema RdsdbEngineVersion#DefaultCharacterSet
   */
  readonly defaultCharacterSet?: RdsCharacterSet;

  /**
   * @schema RdsdbEngineVersion#SupportedCharacterSets
   */
  readonly supportedCharacterSets?: RdsCharacterSet[];

  /**
   * @schema RdsdbEngineVersion#SupportedNcharCharacterSets
   */
  readonly supportedNcharCharacterSets?: RdsCharacterSet[];

  /**
   * @schema RdsdbEngineVersion#ValidUpgradeTarget
   */
  readonly validUpgradeTarget?: RdsUpgradeTarget[];

  /**
   * @schema RdsdbEngineVersion#SupportedTimezones
   */
  readonly supportedTimezones?: RdsTimezone[];

  /**
   * @schema RdsdbEngineVersion#ExportableLogTypes
   */
  readonly exportableLogTypes?: string[];

  /**
   * @schema RdsdbEngineVersion#SupportsLogExportsToCloudwatchLogs
   */
  readonly supportsLogExportsToCloudwatchLogs?: boolean;

  /**
   * @schema RdsdbEngineVersion#SupportsReadReplica
   */
  readonly supportsReadReplica?: boolean;

  /**
   * @schema RdsdbEngineVersion#SupportedEngineModes
   */
  readonly supportedEngineModes?: string[];

  /**
   * @schema RdsdbEngineVersion#SupportedFeatureNames
   */
  readonly supportedFeatureNames?: string[];

  /**
   * @schema RdsdbEngineVersion#Status
   */
  readonly status?: string;

  /**
   * @schema RdsdbEngineVersion#SupportsParallelQuery
   */
  readonly supportsParallelQuery?: boolean;

  /**
   * @schema RdsdbEngineVersion#SupportsGlobalDatabases
   */
  readonly supportsGlobalDatabases?: boolean;

}

/**
 * @schema RdsDescribeDbLogFilesDetails
 */
export interface RdsDescribeDbLogFilesDetails {
  /**
   * @schema RdsDescribeDbLogFilesDetails#LogFileName
   */
  readonly logFileName?: string;

  /**
   * @schema RdsDescribeDbLogFilesDetails#LastWritten
   */
  readonly lastWritten?: number;

  /**
   * @schema RdsDescribeDbLogFilesDetails#Size
   */
  readonly size?: number;

}

/**
 * @schema RdsdbProxyTargetGroup
 */
export interface RdsdbProxyTargetGroup {
  /**
   * @schema RdsdbProxyTargetGroup#DBProxyName
   */
  readonly dbProxyName?: string;

  /**
   * @schema RdsdbProxyTargetGroup#TargetGroupName
   */
  readonly targetGroupName?: string;

  /**
   * @schema RdsdbProxyTargetGroup#TargetGroupArn
   */
  readonly targetGroupArn?: string;

  /**
   * @schema RdsdbProxyTargetGroup#IsDefault
   */
  readonly isDefault?: boolean;

  /**
   * @schema RdsdbProxyTargetGroup#Status
   */
  readonly status?: string;

  /**
   * @schema RdsdbProxyTargetGroup#ConnectionPoolConfig
   */
  readonly connectionPoolConfig?: RdsConnectionPoolConfigurationInfo;

  /**
   * @schema RdsdbProxyTargetGroup#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema RdsdbProxyTargetGroup#UpdatedDate
   */
  readonly updatedDate?: string;

}

/**
 * @schema RdsdbProxyTarget
 */
export interface RdsdbProxyTarget {
  /**
   * @schema RdsdbProxyTarget#TargetArn
   */
  readonly targetArn?: string;

  /**
   * @schema RdsdbProxyTarget#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema RdsdbProxyTarget#TrackedClusterId
   */
  readonly trackedClusterId?: string;

  /**
   * @schema RdsdbProxyTarget#RdsResourceId
   */
  readonly rdsResourceId?: string;

  /**
   * @schema RdsdbProxyTarget#Port
   */
  readonly port?: number;

  /**
   * @schema RdsdbProxyTarget#Type
   */
  readonly type?: string;

  /**
   * @schema RdsdbProxyTarget#TargetHealth
   */
  readonly targetHealth?: RdsTargetHealth;

}

/**
 * @schema RdsdbSnapshotAttributesResult
 */
export interface RdsdbSnapshotAttributesResult {
  /**
   * @schema RdsdbSnapshotAttributesResult#DBSnapshotIdentifier
   */
  readonly dbSnapshotIdentifier?: string;

  /**
   * @schema RdsdbSnapshotAttributesResult#DBSnapshotAttributes
   */
  readonly dbSnapshotAttributes?: RdsdbSnapshotAttribute[];

}

/**
 * @schema RdsEngineDefaults
 */
export interface RdsEngineDefaults {
  /**
   * @schema RdsEngineDefaults#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema RdsEngineDefaults#Marker
   */
  readonly marker?: string;

  /**
   * @schema RdsEngineDefaults#Parameters
   */
  readonly parameters?: RdsParameter[];

}

/**
 * @schema RdsEventCategoriesMap
 */
export interface RdsEventCategoriesMap {
  /**
   * @schema RdsEventCategoriesMap#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema RdsEventCategoriesMap#EventCategories
   */
  readonly eventCategories?: string[];

}

/**
 * @schema RdsEvent
 */
export interface RdsEvent {
  /**
   * @schema RdsEvent#SourceIdentifier
   */
  readonly sourceIdentifier?: string;

  /**
   * @schema RdsEvent#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema RdsEvent#Message
   */
  readonly message?: string;

  /**
   * @schema RdsEvent#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema RdsEvent#Date
   */
  readonly date?: string;

  /**
   * @schema RdsEvent#SourceArn
   */
  readonly sourceArn?: string;

}

/**
 * @schema RdsOptionGroupOption
 */
export interface RdsOptionGroupOption {
  /**
   * @schema RdsOptionGroupOption#Name
   */
  readonly name?: string;

  /**
   * @schema RdsOptionGroupOption#Description
   */
  readonly description?: string;

  /**
   * @schema RdsOptionGroupOption#EngineName
   */
  readonly engineName?: string;

  /**
   * @schema RdsOptionGroupOption#MajorEngineVersion
   */
  readonly majorEngineVersion?: string;

  /**
   * @schema RdsOptionGroupOption#MinimumRequiredMinorEngineVersion
   */
  readonly minimumRequiredMinorEngineVersion?: string;

  /**
   * @schema RdsOptionGroupOption#PortRequired
   */
  readonly portRequired?: boolean;

  /**
   * @schema RdsOptionGroupOption#DefaultPort
   */
  readonly defaultPort?: number;

  /**
   * @schema RdsOptionGroupOption#OptionsDependedOn
   */
  readonly optionsDependedOn?: string[];

  /**
   * @schema RdsOptionGroupOption#OptionsConflictsWith
   */
  readonly optionsConflictsWith?: string[];

  /**
   * @schema RdsOptionGroupOption#Persistent
   */
  readonly persistent?: boolean;

  /**
   * @schema RdsOptionGroupOption#Permanent
   */
  readonly permanent?: boolean;

  /**
   * @schema RdsOptionGroupOption#RequiresAutoMinorEngineVersionUpgrade
   */
  readonly requiresAutoMinorEngineVersionUpgrade?: boolean;

  /**
   * @schema RdsOptionGroupOption#VpcOnly
   */
  readonly vpcOnly?: boolean;

  /**
   * @schema RdsOptionGroupOption#SupportsOptionVersionDowngrade
   */
  readonly supportsOptionVersionDowngrade?: boolean;

  /**
   * @schema RdsOptionGroupOption#OptionGroupOptionSettings
   */
  readonly optionGroupOptionSettings?: RdsOptionGroupOptionSetting[];

  /**
   * @schema RdsOptionGroupOption#OptionGroupOptionVersions
   */
  readonly optionGroupOptionVersions?: RdsOptionVersion[];

}

/**
 * @schema RdsOrderableDbInstanceOption
 */
export interface RdsOrderableDbInstanceOption {
  /**
   * @schema RdsOrderableDbInstanceOption#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsOrderableDbInstanceOption#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsOrderableDbInstanceOption#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema RdsOrderableDbInstanceOption#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema RdsOrderableDbInstanceOption#AvailabilityZoneGroup
   */
  readonly availabilityZoneGroup?: string;

  /**
   * @schema RdsOrderableDbInstanceOption#AvailabilityZones
   */
  readonly availabilityZones?: RdsAvailabilityZone[];

  /**
   * @schema RdsOrderableDbInstanceOption#MultiAZCapable
   */
  readonly multiAzCapable?: boolean;

  /**
   * @schema RdsOrderableDbInstanceOption#ReadReplicaCapable
   */
  readonly readReplicaCapable?: boolean;

  /**
   * @schema RdsOrderableDbInstanceOption#Vpc
   */
  readonly vpc?: boolean;

  /**
   * @schema RdsOrderableDbInstanceOption#SupportsStorageEncryption
   */
  readonly supportsStorageEncryption?: boolean;

  /**
   * @schema RdsOrderableDbInstanceOption#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema RdsOrderableDbInstanceOption#SupportsIops
   */
  readonly supportsIops?: boolean;

  /**
   * @schema RdsOrderableDbInstanceOption#SupportsEnhancedMonitoring
   */
  readonly supportsEnhancedMonitoring?: boolean;

  /**
   * @schema RdsOrderableDbInstanceOption#SupportsIAMDatabaseAuthentication
   */
  readonly supportsIamDatabaseAuthentication?: boolean;

  /**
   * @schema RdsOrderableDbInstanceOption#SupportsPerformanceInsights
   */
  readonly supportsPerformanceInsights?: boolean;

  /**
   * @schema RdsOrderableDbInstanceOption#MinStorageSize
   */
  readonly minStorageSize?: number;

  /**
   * @schema RdsOrderableDbInstanceOption#MaxStorageSize
   */
  readonly maxStorageSize?: number;

  /**
   * @schema RdsOrderableDbInstanceOption#MinIopsPerDbInstance
   */
  readonly minIopsPerDbInstance?: number;

  /**
   * @schema RdsOrderableDbInstanceOption#MaxIopsPerDbInstance
   */
  readonly maxIopsPerDbInstance?: number;

  /**
   * @schema RdsOrderableDbInstanceOption#MinIopsPerGib
   */
  readonly minIopsPerGib?: number;

  /**
   * @schema RdsOrderableDbInstanceOption#MaxIopsPerGib
   */
  readonly maxIopsPerGib?: number;

  /**
   * @schema RdsOrderableDbInstanceOption#AvailableProcessorFeatures
   */
  readonly availableProcessorFeatures?: RdsAvailableProcessorFeature[];

  /**
   * @schema RdsOrderableDbInstanceOption#SupportedEngineModes
   */
  readonly supportedEngineModes?: string[];

  /**
   * @schema RdsOrderableDbInstanceOption#SupportsStorageAutoscaling
   */
  readonly supportsStorageAutoscaling?: boolean;

  /**
   * @schema RdsOrderableDbInstanceOption#SupportsKerberosAuthentication
   */
  readonly supportsKerberosAuthentication?: boolean;

  /**
   * @schema RdsOrderableDbInstanceOption#OutpostCapable
   */
  readonly outpostCapable?: boolean;

  /**
   * @schema RdsOrderableDbInstanceOption#SupportsGlobalDatabases
   */
  readonly supportsGlobalDatabases?: boolean;

}

/**
 * @schema RdsReservedDbInstance
 */
export interface RdsReservedDbInstance {
  /**
   * @schema RdsReservedDbInstance#ReservedDBInstanceId
   */
  readonly reservedDbInstanceId?: string;

  /**
   * @schema RdsReservedDbInstance#ReservedDBInstancesOfferingId
   */
  readonly reservedDbInstancesOfferingId?: string;

  /**
   * @schema RdsReservedDbInstance#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema RdsReservedDbInstance#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema RdsReservedDbInstance#Duration
   */
  readonly duration?: number;

  /**
   * @schema RdsReservedDbInstance#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema RdsReservedDbInstance#UsagePrice
   */
  readonly usagePrice?: number;

  /**
   * @schema RdsReservedDbInstance#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema RdsReservedDbInstance#DBInstanceCount
   */
  readonly dbInstanceCount?: number;

  /**
   * @schema RdsReservedDbInstance#ProductDescription
   */
  readonly productDescription?: string;

  /**
   * @schema RdsReservedDbInstance#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema RdsReservedDbInstance#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema RdsReservedDbInstance#State
   */
  readonly state?: string;

  /**
   * @schema RdsReservedDbInstance#RecurringCharges
   */
  readonly recurringCharges?: RdsRecurringCharge[];

  /**
   * @schema RdsReservedDbInstance#ReservedDBInstanceArn
   */
  readonly reservedDbInstanceArn?: string;

  /**
   * @schema RdsReservedDbInstance#LeaseId
   */
  readonly leaseId?: string;

}

/**
 * @schema RdsReservedDbInstancesOffering
 */
export interface RdsReservedDbInstancesOffering {
  /**
   * @schema RdsReservedDbInstancesOffering#ReservedDBInstancesOfferingId
   */
  readonly reservedDbInstancesOfferingId?: string;

  /**
   * @schema RdsReservedDbInstancesOffering#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema RdsReservedDbInstancesOffering#Duration
   */
  readonly duration?: number;

  /**
   * @schema RdsReservedDbInstancesOffering#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema RdsReservedDbInstancesOffering#UsagePrice
   */
  readonly usagePrice?: number;

  /**
   * @schema RdsReservedDbInstancesOffering#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema RdsReservedDbInstancesOffering#ProductDescription
   */
  readonly productDescription?: string;

  /**
   * @schema RdsReservedDbInstancesOffering#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema RdsReservedDbInstancesOffering#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema RdsReservedDbInstancesOffering#RecurringCharges
   */
  readonly recurringCharges?: RdsRecurringCharge[];

}

/**
 * @schema RdsSourceRegion
 */
export interface RdsSourceRegion {
  /**
   * @schema RdsSourceRegion#RegionName
   */
  readonly regionName?: string;

  /**
   * @schema RdsSourceRegion#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema RdsSourceRegion#Status
   */
  readonly status?: string;

}

/**
 * @schema RdsValidDbInstanceModificationsMessage
 */
export interface RdsValidDbInstanceModificationsMessage {
  /**
   * @schema RdsValidDbInstanceModificationsMessage#Storage
   */
  readonly storage?: RdsValidStorageOptions[];

  /**
   * @schema RdsValidDbInstanceModificationsMessage#ValidProcessorFeatures
   */
  readonly validProcessorFeatures?: RdsAvailableProcessorFeature[];

}

/**
 * @schema RdsCloudwatchLogsExportConfiguration
 */
export interface RdsCloudwatchLogsExportConfiguration {
  /**
   * @schema RdsCloudwatchLogsExportConfiguration#EnableLogTypes
   */
  readonly enableLogTypes?: string[];

  /**
   * @schema RdsCloudwatchLogsExportConfiguration#DisableLogTypes
   */
  readonly disableLogTypes?: string[];

}

/**
 * @schema RdsConnectionPoolConfiguration
 */
export interface RdsConnectionPoolConfiguration {
  /**
   * @schema RdsConnectionPoolConfiguration#MaxConnectionsPercent
   */
  readonly maxConnectionsPercent?: number;

  /**
   * @schema RdsConnectionPoolConfiguration#MaxIdleConnectionsPercent
   */
  readonly maxIdleConnectionsPercent?: number;

  /**
   * @schema RdsConnectionPoolConfiguration#ConnectionBorrowTimeout
   */
  readonly connectionBorrowTimeout?: number;

  /**
   * @schema RdsConnectionPoolConfiguration#SessionPinningFilters
   */
  readonly sessionPinningFilters?: string[];

  /**
   * @schema RdsConnectionPoolConfiguration#InitQuery
   */
  readonly initQuery?: string;

}

/**
 * @schema RdsOptionConfiguration
 */
export interface RdsOptionConfiguration {
  /**
   * @schema RdsOptionConfiguration#OptionName
   */
  readonly optionName: string;

  /**
   * @schema RdsOptionConfiguration#Port
   */
  readonly port?: number;

  /**
   * @schema RdsOptionConfiguration#OptionVersion
   */
  readonly optionVersion?: string;

  /**
   * @schema RdsOptionConfiguration#DBSecurityGroupMemberships
   */
  readonly dbSecurityGroupMemberships?: string[];

  /**
   * @schema RdsOptionConfiguration#VpcSecurityGroupMemberships
   */
  readonly vpcSecurityGroupMemberships?: string[];

  /**
   * @schema RdsOptionConfiguration#OptionSettings
   */
  readonly optionSettings?: RdsOptionSetting[];

}

/**
 * @schema RdsPendingMaintenanceAction
 */
export interface RdsPendingMaintenanceAction {
  /**
   * @schema RdsPendingMaintenanceAction#Action
   */
  readonly action?: string;

  /**
   * @schema RdsPendingMaintenanceAction#AutoAppliedAfterDate
   */
  readonly autoAppliedAfterDate?: string;

  /**
   * @schema RdsPendingMaintenanceAction#ForcedApplyDate
   */
  readonly forcedApplyDate?: string;

  /**
   * @schema RdsPendingMaintenanceAction#OptInStatus
   */
  readonly optInStatus?: string;

  /**
   * @schema RdsPendingMaintenanceAction#CurrentApplyDate
   */
  readonly currentApplyDate?: string;

  /**
   * @schema RdsPendingMaintenanceAction#Description
   */
  readonly description?: string;

}

/**
 * @schema Rdsec2SecurityGroup
 */
export interface Rdsec2SecurityGroup {
  /**
   * @schema Rdsec2SecurityGroup#Status
   */
  readonly status?: string;

  /**
   * @schema Rdsec2SecurityGroup#EC2SecurityGroupName
   */
  readonly ec2SecurityGroupName?: string;

  /**
   * @schema Rdsec2SecurityGroup#EC2SecurityGroupId
   */
  readonly ec2SecurityGroupId?: string;

  /**
   * @schema Rdsec2SecurityGroup#EC2SecurityGroupOwnerId
   */
  readonly ec2SecurityGroupOwnerId?: string;

}

/**
 * @schema RdsipRange
 */
export interface RdsipRange {
  /**
   * @schema RdsipRange#Status
   */
  readonly status?: string;

  /**
   * @schema RdsipRange#CIDRIP
   */
  readonly cidrip?: string;

}

/**
 * @schema RdsOption
 */
export interface RdsOption {
  /**
   * @schema RdsOption#OptionName
   */
  readonly optionName?: string;

  /**
   * @schema RdsOption#OptionDescription
   */
  readonly optionDescription?: string;

  /**
   * @schema RdsOption#Persistent
   */
  readonly persistent?: boolean;

  /**
   * @schema RdsOption#Permanent
   */
  readonly permanent?: boolean;

  /**
   * @schema RdsOption#Port
   */
  readonly port?: number;

  /**
   * @schema RdsOption#OptionVersion
   */
  readonly optionVersion?: string;

  /**
   * @schema RdsOption#OptionSettings
   */
  readonly optionSettings?: RdsOptionSetting[];

  /**
   * @schema RdsOption#DBSecurityGroupMemberships
   */
  readonly dbSecurityGroupMemberships?: RdsdbSecurityGroupMembership[];

  /**
   * @schema RdsOption#VpcSecurityGroupMemberships
   */
  readonly vpcSecurityGroupMemberships?: RdsVpcSecurityGroupMembership[];

}

/**
 * @schema RdsVpnDetails
 */
export interface RdsVpnDetails {
  /**
   * @schema RdsVpnDetails#VpnId
   */
  readonly vpnId?: string;

  /**
   * @schema RdsVpnDetails#VpnTunnelOriginatorIP
   */
  readonly vpnTunnelOriginatorIp?: string;

  /**
   * @schema RdsVpnDetails#VpnGatewayIp
   */
  readonly vpnGatewayIp?: string;

  /**
   * @schema RdsVpnDetails#VpnPSK
   */
  readonly vpnPsk?: string;

  /**
   * @schema RdsVpnDetails#VpnName
   */
  readonly vpnName?: string;

  /**
   * @schema RdsVpnDetails#VpnState
   */
  readonly vpnState?: string;

}

/**
 * @schema RdsdbClusterOptionGroupStatus
 */
export interface RdsdbClusterOptionGroupStatus {
  /**
   * @schema RdsdbClusterOptionGroupStatus#DBClusterOptionGroupName
   */
  readonly dbClusterOptionGroupName?: string;

  /**
   * @schema RdsdbClusterOptionGroupStatus#Status
   */
  readonly status?: string;

}

/**
 * @schema RdsdbClusterMember
 */
export interface RdsdbClusterMember {
  /**
   * @schema RdsdbClusterMember#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema RdsdbClusterMember#IsClusterWriter
   */
  readonly isClusterWriter?: boolean;

  /**
   * @schema RdsdbClusterMember#DBClusterParameterGroupStatus
   */
  readonly dbClusterParameterGroupStatus?: string;

  /**
   * @schema RdsdbClusterMember#PromotionTier
   */
  readonly promotionTier?: number;

}

/**
 * @schema RdsVpcSecurityGroupMembership
 */
export interface RdsVpcSecurityGroupMembership {
  /**
   * @schema RdsVpcSecurityGroupMembership#VpcSecurityGroupId
   */
  readonly vpcSecurityGroupId?: string;

  /**
   * @schema RdsVpcSecurityGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * @schema RdsdbClusterRole
 */
export interface RdsdbClusterRole {
  /**
   * @schema RdsdbClusterRole#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema RdsdbClusterRole#Status
   */
  readonly status?: string;

  /**
   * @schema RdsdbClusterRole#FeatureName
   */
  readonly featureName?: string;

}

/**
 * @schema RdsScalingConfigurationInfo
 */
export interface RdsScalingConfigurationInfo {
  /**
   * @schema RdsScalingConfigurationInfo#MinCapacity
   */
  readonly minCapacity?: number;

  /**
   * @schema RdsScalingConfigurationInfo#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema RdsScalingConfigurationInfo#AutoPause
   */
  readonly autoPause?: boolean;

  /**
   * @schema RdsScalingConfigurationInfo#SecondsUntilAutoPause
   */
  readonly secondsUntilAutoPause?: number;

  /**
   * @schema RdsScalingConfigurationInfo#TimeoutAction
   */
  readonly timeoutAction?: string;

}

/**
 * @schema RdsDomainMembership
 */
export interface RdsDomainMembership {
  /**
   * @schema RdsDomainMembership#Domain
   */
  readonly domain?: string;

  /**
   * @schema RdsDomainMembership#Status
   */
  readonly status?: string;

  /**
   * @schema RdsDomainMembership#FQDN
   */
  readonly fqdn?: string;

  /**
   * @schema RdsDomainMembership#IAMRoleName
   */
  readonly iamRoleName?: string;

}

/**
 * @schema RdsEndpoint
 */
export interface RdsEndpoint {
  /**
   * @schema RdsEndpoint#Address
   */
  readonly address?: string;

  /**
   * @schema RdsEndpoint#Port
   */
  readonly port?: number;

  /**
   * @schema RdsEndpoint#HostedZoneId
   */
  readonly hostedZoneId?: string;

}

/**
 * @schema RdsdbSecurityGroupMembership
 */
export interface RdsdbSecurityGroupMembership {
  /**
   * @schema RdsdbSecurityGroupMembership#DBSecurityGroupName
   */
  readonly dbSecurityGroupName?: string;

  /**
   * @schema RdsdbSecurityGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * @schema RdsdbParameterGroupStatus
 */
export interface RdsdbParameterGroupStatus {
  /**
   * @schema RdsdbParameterGroupStatus#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema RdsdbParameterGroupStatus#ParameterApplyStatus
   */
  readonly parameterApplyStatus?: string;

}

/**
 * @schema RdsPendingModifiedValues
 */
export interface RdsPendingModifiedValues {
  /**
   * @schema RdsPendingModifiedValues#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema RdsPendingModifiedValues#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema RdsPendingModifiedValues#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema RdsPendingModifiedValues#Port
   */
  readonly port?: number;

  /**
   * @schema RdsPendingModifiedValues#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema RdsPendingModifiedValues#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema RdsPendingModifiedValues#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsPendingModifiedValues#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema RdsPendingModifiedValues#Iops
   */
  readonly iops?: number;

  /**
   * @schema RdsPendingModifiedValues#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema RdsPendingModifiedValues#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema RdsPendingModifiedValues#CACertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

  /**
   * @schema RdsPendingModifiedValues#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RdsPendingModifiedValues#PendingCloudwatchLogsExports
   */
  readonly pendingCloudwatchLogsExports?: RdsPendingCloudwatchLogsExports;

  /**
   * @schema RdsPendingModifiedValues#ProcessorFeatures
   */
  readonly processorFeatures?: RdsProcessorFeature[];

}

/**
 * @schema RdsOptionGroupMembership
 */
export interface RdsOptionGroupMembership {
  /**
   * @schema RdsOptionGroupMembership#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RdsOptionGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * @schema RdsdbInstanceStatusInfo
 */
export interface RdsdbInstanceStatusInfo {
  /**
   * @schema RdsdbInstanceStatusInfo#StatusType
   */
  readonly statusType?: string;

  /**
   * @schema RdsdbInstanceStatusInfo#Normal
   */
  readonly normal?: boolean;

  /**
   * @schema RdsdbInstanceStatusInfo#Status
   */
  readonly status?: string;

  /**
   * @schema RdsdbInstanceStatusInfo#Message
   */
  readonly message?: string;

}

/**
 * @schema RdsdbInstanceRole
 */
export interface RdsdbInstanceRole {
  /**
   * @schema RdsdbInstanceRole#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema RdsdbInstanceRole#FeatureName
   */
  readonly featureName?: string;

  /**
   * @schema RdsdbInstanceRole#Status
   */
  readonly status?: string;

}

/**
 * @schema RdsUserAuthConfigInfo
 */
export interface RdsUserAuthConfigInfo {
  /**
   * @schema RdsUserAuthConfigInfo#Description
   */
  readonly description?: string;

  /**
   * @schema RdsUserAuthConfigInfo#UserName
   */
  readonly userName?: string;

  /**
   * @schema RdsUserAuthConfigInfo#AuthScheme
   */
  readonly authScheme?: string;

  /**
   * @schema RdsUserAuthConfigInfo#SecretArn
   */
  readonly secretArn?: string;

  /**
   * @schema RdsUserAuthConfigInfo#IAMAuth
   */
  readonly iamAuth?: string;

}

/**
 * @schema RdsSubnet
 */
export interface RdsSubnet {
  /**
   * @schema RdsSubnet#SubnetIdentifier
   */
  readonly subnetIdentifier?: string;

  /**
   * @schema RdsSubnet#SubnetAvailabilityZone
   */
  readonly subnetAvailabilityZone?: RdsAvailabilityZone;

  /**
   * @schema RdsSubnet#SubnetOutpost
   */
  readonly subnetOutpost?: RdsOutpost;

  /**
   * @schema RdsSubnet#SubnetStatus
   */
  readonly subnetStatus?: string;

}

/**
 * @schema RdsGlobalClusterMember
 */
export interface RdsGlobalClusterMember {
  /**
   * @schema RdsGlobalClusterMember#DBClusterArn
   */
  readonly dbClusterArn?: string;

  /**
   * @schema RdsGlobalClusterMember#Readers
   */
  readonly readers?: string[];

  /**
   * @schema RdsGlobalClusterMember#IsWriter
   */
  readonly isWriter?: boolean;

  /**
   * @schema RdsGlobalClusterMember#GlobalWriteForwardingStatus
   */
  readonly globalWriteForwardingStatus?: string;

}

/**
 * @schema RdsRestoreWindow
 */
export interface RdsRestoreWindow {
  /**
   * @schema RdsRestoreWindow#EarliestTime
   */
  readonly earliestTime?: string;

  /**
   * @schema RdsRestoreWindow#LatestTime
   */
  readonly latestTime?: string;

}

/**
 * @schema RdsdbClusterSnapshotAttribute
 */
export interface RdsdbClusterSnapshotAttribute {
  /**
   * @schema RdsdbClusterSnapshotAttribute#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema RdsdbClusterSnapshotAttribute#AttributeValues
   */
  readonly attributeValues?: string[];

}

/**
 * @schema RdsCharacterSet
 */
export interface RdsCharacterSet {
  /**
   * @schema RdsCharacterSet#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema RdsCharacterSet#CharacterSetDescription
   */
  readonly characterSetDescription?: string;

}

/**
 * @schema RdsUpgradeTarget
 */
export interface RdsUpgradeTarget {
  /**
   * @schema RdsUpgradeTarget#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsUpgradeTarget#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RdsUpgradeTarget#Description
   */
  readonly description?: string;

  /**
   * @schema RdsUpgradeTarget#AutoUpgrade
   */
  readonly autoUpgrade?: boolean;

  /**
   * @schema RdsUpgradeTarget#IsMajorVersionUpgrade
   */
  readonly isMajorVersionUpgrade?: boolean;

}

/**
 * @schema RdsTimezone
 */
export interface RdsTimezone {
  /**
   * @schema RdsTimezone#TimezoneName
   */
  readonly timezoneName?: string;

}

/**
 * @schema RdsConnectionPoolConfigurationInfo
 */
export interface RdsConnectionPoolConfigurationInfo {
  /**
   * @schema RdsConnectionPoolConfigurationInfo#MaxConnectionsPercent
   */
  readonly maxConnectionsPercent?: number;

  /**
   * @schema RdsConnectionPoolConfigurationInfo#MaxIdleConnectionsPercent
   */
  readonly maxIdleConnectionsPercent?: number;

  /**
   * @schema RdsConnectionPoolConfigurationInfo#ConnectionBorrowTimeout
   */
  readonly connectionBorrowTimeout?: number;

  /**
   * @schema RdsConnectionPoolConfigurationInfo#SessionPinningFilters
   */
  readonly sessionPinningFilters?: string[];

  /**
   * @schema RdsConnectionPoolConfigurationInfo#InitQuery
   */
  readonly initQuery?: string;

}

/**
 * @schema RdsTargetHealth
 */
export interface RdsTargetHealth {
  /**
   * @schema RdsTargetHealth#State
   */
  readonly state?: string;

  /**
   * @schema RdsTargetHealth#Reason
   */
  readonly reason?: string;

  /**
   * @schema RdsTargetHealth#Description
   */
  readonly description?: string;

}

/**
 * @schema RdsdbSnapshotAttribute
 */
export interface RdsdbSnapshotAttribute {
  /**
   * @schema RdsdbSnapshotAttribute#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema RdsdbSnapshotAttribute#AttributeValues
   */
  readonly attributeValues?: string[];

}

/**
 * @schema RdsOptionGroupOptionSetting
 */
export interface RdsOptionGroupOptionSetting {
  /**
   * @schema RdsOptionGroupOptionSetting#SettingName
   */
  readonly settingName?: string;

  /**
   * @schema RdsOptionGroupOptionSetting#SettingDescription
   */
  readonly settingDescription?: string;

  /**
   * @schema RdsOptionGroupOptionSetting#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema RdsOptionGroupOptionSetting#ApplyType
   */
  readonly applyType?: string;

  /**
   * @schema RdsOptionGroupOptionSetting#AllowedValues
   */
  readonly allowedValues?: string;

  /**
   * @schema RdsOptionGroupOptionSetting#IsModifiable
   */
  readonly isModifiable?: boolean;

  /**
   * @schema RdsOptionGroupOptionSetting#IsRequired
   */
  readonly isRequired?: boolean;

  /**
   * @schema RdsOptionGroupOptionSetting#MinimumEngineVersionPerAllowedValue
   */
  readonly minimumEngineVersionPerAllowedValue?: RdsMinimumEngineVersionPerAllowedValue[];

}

/**
 * @schema RdsOptionVersion
 */
export interface RdsOptionVersion {
  /**
   * @schema RdsOptionVersion#Version
   */
  readonly version?: string;

  /**
   * @schema RdsOptionVersion#IsDefault
   */
  readonly isDefault?: boolean;

}

/**
 * @schema RdsAvailabilityZone
 */
export interface RdsAvailabilityZone {
  /**
   * @schema RdsAvailabilityZone#Name
   */
  readonly name?: string;

}

/**
 * @schema RdsAvailableProcessorFeature
 */
export interface RdsAvailableProcessorFeature {
  /**
   * @schema RdsAvailableProcessorFeature#Name
   */
  readonly name?: string;

  /**
   * @schema RdsAvailableProcessorFeature#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema RdsAvailableProcessorFeature#AllowedValues
   */
  readonly allowedValues?: string;

}

/**
 * @schema RdsRecurringCharge
 */
export interface RdsRecurringCharge {
  /**
   * @schema RdsRecurringCharge#RecurringChargeAmount
   */
  readonly recurringChargeAmount?: number;

  /**
   * @schema RdsRecurringCharge#RecurringChargeFrequency
   */
  readonly recurringChargeFrequency?: string;

}

/**
 * @schema RdsValidStorageOptions
 */
export interface RdsValidStorageOptions {
  /**
   * @schema RdsValidStorageOptions#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema RdsValidStorageOptions#StorageSize
   */
  readonly storageSize?: RdsRange[];

  /**
   * @schema RdsValidStorageOptions#ProvisionedIops
   */
  readonly provisionedIops?: RdsRange[];

  /**
   * @schema RdsValidStorageOptions#IopsToStorageRatio
   */
  readonly iopsToStorageRatio?: RdsDoubleRange[];

  /**
   * @schema RdsValidStorageOptions#SupportsStorageAutoscaling
   */
  readonly supportsStorageAutoscaling?: boolean;

}

/**
 * @schema RdsOptionSetting
 */
export interface RdsOptionSetting {
  /**
   * @schema RdsOptionSetting#Name
   */
  readonly name?: string;

  /**
   * @schema RdsOptionSetting#Value
   */
  readonly value?: string;

  /**
   * @schema RdsOptionSetting#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema RdsOptionSetting#Description
   */
  readonly description?: string;

  /**
   * @schema RdsOptionSetting#ApplyType
   */
  readonly applyType?: string;

  /**
   * @schema RdsOptionSetting#DataType
   */
  readonly dataType?: string;

  /**
   * @schema RdsOptionSetting#AllowedValues
   */
  readonly allowedValues?: string;

  /**
   * @schema RdsOptionSetting#IsModifiable
   */
  readonly isModifiable?: boolean;

  /**
   * @schema RdsOptionSetting#IsCollection
   */
  readonly isCollection?: boolean;

}

/**
 * @schema RdsPendingCloudwatchLogsExports
 */
export interface RdsPendingCloudwatchLogsExports {
  /**
   * @schema RdsPendingCloudwatchLogsExports#LogTypesToEnable
   */
  readonly logTypesToEnable?: string[];

  /**
   * @schema RdsPendingCloudwatchLogsExports#LogTypesToDisable
   */
  readonly logTypesToDisable?: string[];

}

/**
 * @schema RdsOutpost
 */
export interface RdsOutpost {
  /**
   * @schema RdsOutpost#Arn
   */
  readonly arn?: string;

}

/**
 * @schema RdsMinimumEngineVersionPerAllowedValue
 */
export interface RdsMinimumEngineVersionPerAllowedValue {
  /**
   * @schema RdsMinimumEngineVersionPerAllowedValue#AllowedValue
   */
  readonly allowedValue?: string;

  /**
   * @schema RdsMinimumEngineVersionPerAllowedValue#MinimumEngineVersion
   */
  readonly minimumEngineVersion?: string;

}

/**
 * @schema RdsRange
 */
export interface RdsRange {
  /**
   * @schema RdsRange#From
   */
  readonly from?: number;

  /**
   * @schema RdsRange#To
   */
  readonly to?: number;

  /**
   * @schema RdsRange#Step
   */
  readonly step?: number;

}

/**
 * @schema RdsDoubleRange
 */
export interface RdsDoubleRange {
  /**
   * @schema RdsDoubleRange#From
   */
  readonly from?: number;

  /**
   * @schema RdsDoubleRange#To
   */
  readonly to?: number;

}
