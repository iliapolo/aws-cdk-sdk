/**
 * @schema NeptuneAddRoleToDbClusterMessage
 */
export interface NeptuneAddRoleToDbClusterMessage {
  /**
   * @schema NeptuneAddRoleToDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema NeptuneAddRoleToDbClusterMessage#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema NeptuneAddRoleToDbClusterMessage#FeatureName
   */
  readonly featureName?: string;

}

/**
 * @schema NeptuneAddSourceIdentifierToSubscriptionMessage
 */
export interface NeptuneAddSourceIdentifierToSubscriptionMessage {
  /**
   * @schema NeptuneAddSourceIdentifierToSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName: string;

  /**
   * @schema NeptuneAddSourceIdentifierToSubscriptionMessage#SourceIdentifier
   */
  readonly sourceIdentifier: string;

}

/**
 * @schema NeptuneAddSourceIdentifierToSubscriptionResult
 */
export interface NeptuneAddSourceIdentifierToSubscriptionResult {
  /**
   * @schema NeptuneAddSourceIdentifierToSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: NeptuneEventSubscription;

}

/**
 * @schema NeptuneAddTagsToResourceMessage
 */
export interface NeptuneAddTagsToResourceMessage {
  /**
   * @schema NeptuneAddTagsToResourceMessage#ResourceName
   */
  readonly resourceName: string;

  /**
   * @schema NeptuneAddTagsToResourceMessage#Tags
   */
  readonly tags: NeptuneTag[];

}

/**
 * @schema NeptuneApplyPendingMaintenanceActionMessage
 */
export interface NeptuneApplyPendingMaintenanceActionMessage {
  /**
   * @schema NeptuneApplyPendingMaintenanceActionMessage#ResourceIdentifier
   */
  readonly resourceIdentifier: string;

  /**
   * @schema NeptuneApplyPendingMaintenanceActionMessage#ApplyAction
   */
  readonly applyAction: string;

  /**
   * @schema NeptuneApplyPendingMaintenanceActionMessage#OptInType
   */
  readonly optInType: string;

}

/**
 * @schema NeptuneApplyPendingMaintenanceActionResult
 */
export interface NeptuneApplyPendingMaintenanceActionResult {
  /**
   * @schema NeptuneApplyPendingMaintenanceActionResult#ResourcePendingMaintenanceActions
   */
  readonly resourcePendingMaintenanceActions?: NeptuneResourcePendingMaintenanceActions;

}

/**
 * @schema NeptuneCopyDbClusterParameterGroupMessage
 */
export interface NeptuneCopyDbClusterParameterGroupMessage {
  /**
   * @schema NeptuneCopyDbClusterParameterGroupMessage#SourceDBClusterParameterGroupIdentifier
   */
  readonly sourceDbClusterParameterGroupIdentifier: string;

  /**
   * @schema NeptuneCopyDbClusterParameterGroupMessage#TargetDBClusterParameterGroupIdentifier
   */
  readonly targetDbClusterParameterGroupIdentifier: string;

  /**
   * @schema NeptuneCopyDbClusterParameterGroupMessage#TargetDBClusterParameterGroupDescription
   */
  readonly targetDbClusterParameterGroupDescription: string;

  /**
   * @schema NeptuneCopyDbClusterParameterGroupMessage#Tags
   */
  readonly tags?: NeptuneTag[];

}

/**
 * @schema NeptuneCopyDbClusterParameterGroupResult
 */
export interface NeptuneCopyDbClusterParameterGroupResult {
  /**
   * @schema NeptuneCopyDbClusterParameterGroupResult#DBClusterParameterGroup
   */
  readonly dbClusterParameterGroup?: NeptuneDbClusterParameterGroup;

}

/**
 * @schema NeptuneCopyDbClusterSnapshotMessage
 */
export interface NeptuneCopyDbClusterSnapshotMessage {
  /**
   * @schema NeptuneCopyDbClusterSnapshotMessage#SourceDBClusterSnapshotIdentifier
   */
  readonly sourceDbClusterSnapshotIdentifier: string;

  /**
   * @schema NeptuneCopyDbClusterSnapshotMessage#TargetDBClusterSnapshotIdentifier
   */
  readonly targetDbClusterSnapshotIdentifier: string;

  /**
   * @schema NeptuneCopyDbClusterSnapshotMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema NeptuneCopyDbClusterSnapshotMessage#PreSignedUrl
   */
  readonly preSignedUrl?: string;

  /**
   * @schema NeptuneCopyDbClusterSnapshotMessage#CopyTags
   */
  readonly copyTags?: boolean;

  /**
   * @schema NeptuneCopyDbClusterSnapshotMessage#Tags
   */
  readonly tags?: NeptuneTag[];

}

/**
 * @schema NeptuneCopyDbClusterSnapshotResult
 */
export interface NeptuneCopyDbClusterSnapshotResult {
  /**
   * @schema NeptuneCopyDbClusterSnapshotResult#DBClusterSnapshot
   */
  readonly dbClusterSnapshot?: NeptuneDbClusterSnapshot;

}

/**
 * @schema NeptuneCopyDbParameterGroupMessage
 */
export interface NeptuneCopyDbParameterGroupMessage {
  /**
   * @schema NeptuneCopyDbParameterGroupMessage#SourceDBParameterGroupIdentifier
   */
  readonly sourceDbParameterGroupIdentifier: string;

  /**
   * @schema NeptuneCopyDbParameterGroupMessage#TargetDBParameterGroupIdentifier
   */
  readonly targetDbParameterGroupIdentifier: string;

  /**
   * @schema NeptuneCopyDbParameterGroupMessage#TargetDBParameterGroupDescription
   */
  readonly targetDbParameterGroupDescription: string;

  /**
   * @schema NeptuneCopyDbParameterGroupMessage#Tags
   */
  readonly tags?: NeptuneTag[];

}

/**
 * @schema NeptuneCopyDbParameterGroupResult
 */
export interface NeptuneCopyDbParameterGroupResult {
  /**
   * @schema NeptuneCopyDbParameterGroupResult#DBParameterGroup
   */
  readonly dbParameterGroup?: NeptuneDbParameterGroup;

}

/**
 * @schema NeptuneCreateDbClusterMessage
 */
export interface NeptuneCreateDbClusterMessage {
  /**
   * @schema NeptuneCreateDbClusterMessage#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema NeptuneCreateDbClusterMessage#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema NeptuneCreateDbClusterMessage#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema NeptuneCreateDbClusterMessage#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema NeptuneCreateDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema NeptuneCreateDbClusterMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema NeptuneCreateDbClusterMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema NeptuneCreateDbClusterMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema NeptuneCreateDbClusterMessage#Engine
   */
  readonly engine: string;

  /**
   * @schema NeptuneCreateDbClusterMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema NeptuneCreateDbClusterMessage#Port
   */
  readonly port?: number;

  /**
   * @schema NeptuneCreateDbClusterMessage#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema NeptuneCreateDbClusterMessage#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema NeptuneCreateDbClusterMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema NeptuneCreateDbClusterMessage#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema NeptuneCreateDbClusterMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema NeptuneCreateDbClusterMessage#ReplicationSourceIdentifier
   */
  readonly replicationSourceIdentifier?: string;

  /**
   * @schema NeptuneCreateDbClusterMessage#Tags
   */
  readonly tags?: NeptuneTag[];

  /**
   * @schema NeptuneCreateDbClusterMessage#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema NeptuneCreateDbClusterMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema NeptuneCreateDbClusterMessage#PreSignedUrl
   */
  readonly preSignedUrl?: string;

  /**
   * @schema NeptuneCreateDbClusterMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema NeptuneCreateDbClusterMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema NeptuneCreateDbClusterMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * @schema NeptuneCreateDbClusterResult
 */
export interface NeptuneCreateDbClusterResult {
  /**
   * @schema NeptuneCreateDbClusterResult#DBCluster
   */
  readonly dbCluster?: NeptuneDbCluster;

}

/**
 * @schema NeptuneCreateDbClusterEndpointMessage
 */
export interface NeptuneCreateDbClusterEndpointMessage {
  /**
   * @schema NeptuneCreateDbClusterEndpointMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema NeptuneCreateDbClusterEndpointMessage#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier: string;

  /**
   * @schema NeptuneCreateDbClusterEndpointMessage#EndpointType
   */
  readonly endpointType: string;

  /**
   * @schema NeptuneCreateDbClusterEndpointMessage#StaticMembers
   */
  readonly staticMembers?: string[];

  /**
   * @schema NeptuneCreateDbClusterEndpointMessage#ExcludedMembers
   */
  readonly excludedMembers?: string[];

  /**
   * @schema NeptuneCreateDbClusterEndpointMessage#Tags
   */
  readonly tags?: NeptuneTag[];

}

/**
 * @schema NeptuneCreateDbClusterEndpointOutput
 */
export interface NeptuneCreateDbClusterEndpointOutput {
  /**
   * @schema NeptuneCreateDbClusterEndpointOutput#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier?: string;

  /**
   * @schema NeptuneCreateDbClusterEndpointOutput#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema NeptuneCreateDbClusterEndpointOutput#DBClusterEndpointResourceIdentifier
   */
  readonly dbClusterEndpointResourceIdentifier?: string;

  /**
   * @schema NeptuneCreateDbClusterEndpointOutput#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema NeptuneCreateDbClusterEndpointOutput#Status
   */
  readonly status?: string;

  /**
   * @schema NeptuneCreateDbClusterEndpointOutput#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema NeptuneCreateDbClusterEndpointOutput#CustomEndpointType
   */
  readonly customEndpointType?: string;

  /**
   * @schema NeptuneCreateDbClusterEndpointOutput#StaticMembers
   */
  readonly staticMembers?: string[];

  /**
   * @schema NeptuneCreateDbClusterEndpointOutput#ExcludedMembers
   */
  readonly excludedMembers?: string[];

  /**
   * @schema NeptuneCreateDbClusterEndpointOutput#DBClusterEndpointArn
   */
  readonly dbClusterEndpointArn?: string;

}

/**
 * @schema NeptuneCreateDbClusterParameterGroupMessage
 */
export interface NeptuneCreateDbClusterParameterGroupMessage {
  /**
   * @schema NeptuneCreateDbClusterParameterGroupMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName: string;

  /**
   * @schema NeptuneCreateDbClusterParameterGroupMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily: string;

  /**
   * @schema NeptuneCreateDbClusterParameterGroupMessage#Description
   */
  readonly description: string;

  /**
   * @schema NeptuneCreateDbClusterParameterGroupMessage#Tags
   */
  readonly tags?: NeptuneTag[];

}

/**
 * @schema NeptuneCreateDbClusterParameterGroupResult
 */
export interface NeptuneCreateDbClusterParameterGroupResult {
  /**
   * @schema NeptuneCreateDbClusterParameterGroupResult#DBClusterParameterGroup
   */
  readonly dbClusterParameterGroup?: NeptuneDbClusterParameterGroup;

}

/**
 * @schema NeptuneCreateDbClusterSnapshotMessage
 */
export interface NeptuneCreateDbClusterSnapshotMessage {
  /**
   * @schema NeptuneCreateDbClusterSnapshotMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier: string;

  /**
   * @schema NeptuneCreateDbClusterSnapshotMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema NeptuneCreateDbClusterSnapshotMessage#Tags
   */
  readonly tags?: NeptuneTag[];

}

/**
 * @schema NeptuneCreateDbClusterSnapshotResult
 */
export interface NeptuneCreateDbClusterSnapshotResult {
  /**
   * @schema NeptuneCreateDbClusterSnapshotResult#DBClusterSnapshot
   */
  readonly dbClusterSnapshot?: NeptuneDbClusterSnapshot;

}

/**
 * @schema NeptuneCreateDbInstanceMessage
 */
export interface NeptuneCreateDbInstanceMessage {
  /**
   * @schema NeptuneCreateDbInstanceMessage#DBName
   */
  readonly dbName?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema NeptuneCreateDbInstanceMessage#DBInstanceClass
   */
  readonly dbInstanceClass: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#Engine
   */
  readonly engine: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#DBSecurityGroups
   */
  readonly dbSecurityGroups?: string[];

  /**
   * @schema NeptuneCreateDbInstanceMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema NeptuneCreateDbInstanceMessage#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema NeptuneCreateDbInstanceMessage#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#Port
   */
  readonly port?: number;

  /**
   * @schema NeptuneCreateDbInstanceMessage#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema NeptuneCreateDbInstanceMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema NeptuneCreateDbInstanceMessage#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#Iops
   */
  readonly iops?: number;

  /**
   * @schema NeptuneCreateDbInstanceMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema NeptuneCreateDbInstanceMessage#Tags
   */
  readonly tags?: NeptuneTag[];

  /**
   * @schema NeptuneCreateDbInstanceMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#TdeCredentialPassword
   */
  readonly tdeCredentialPassword?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema NeptuneCreateDbInstanceMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#Domain
   */
  readonly domain?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema NeptuneCreateDbInstanceMessage#MonitoringInterval
   */
  readonly monitoringInterval?: number;

  /**
   * @schema NeptuneCreateDbInstanceMessage#MonitoringRoleArn
   */
  readonly monitoringRoleArn?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#PromotionTier
   */
  readonly promotionTier?: number;

  /**
   * @schema NeptuneCreateDbInstanceMessage#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema NeptuneCreateDbInstanceMessage#EnablePerformanceInsights
   */
  readonly enablePerformanceInsights?: boolean;

  /**
   * @schema NeptuneCreateDbInstanceMessage#PerformanceInsightsKMSKeyId
   */
  readonly performanceInsightsKmsKeyId?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema NeptuneCreateDbInstanceMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * @schema NeptuneCreateDbInstanceResult
 */
export interface NeptuneCreateDbInstanceResult {
  /**
   * @schema NeptuneCreateDbInstanceResult#DBInstance
   */
  readonly dbInstance?: NeptuneDbInstance;

}

/**
 * @schema NeptuneCreateDbParameterGroupMessage
 */
export interface NeptuneCreateDbParameterGroupMessage {
  /**
   * @schema NeptuneCreateDbParameterGroupMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName: string;

  /**
   * @schema NeptuneCreateDbParameterGroupMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily: string;

  /**
   * @schema NeptuneCreateDbParameterGroupMessage#Description
   */
  readonly description: string;

  /**
   * @schema NeptuneCreateDbParameterGroupMessage#Tags
   */
  readonly tags?: NeptuneTag[];

}

/**
 * @schema NeptuneCreateDbParameterGroupResult
 */
export interface NeptuneCreateDbParameterGroupResult {
  /**
   * @schema NeptuneCreateDbParameterGroupResult#DBParameterGroup
   */
  readonly dbParameterGroup?: NeptuneDbParameterGroup;

}

/**
 * @schema NeptuneCreateDbSubnetGroupMessage
 */
export interface NeptuneCreateDbSubnetGroupMessage {
  /**
   * @schema NeptuneCreateDbSubnetGroupMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName: string;

  /**
   * @schema NeptuneCreateDbSubnetGroupMessage#DBSubnetGroupDescription
   */
  readonly dbSubnetGroupDescription: string;

  /**
   * @schema NeptuneCreateDbSubnetGroupMessage#SubnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema NeptuneCreateDbSubnetGroupMessage#Tags
   */
  readonly tags?: NeptuneTag[];

}

/**
 * @schema NeptuneCreateDbSubnetGroupResult
 */
export interface NeptuneCreateDbSubnetGroupResult {
  /**
   * @schema NeptuneCreateDbSubnetGroupResult#DBSubnetGroup
   */
  readonly dbSubnetGroup?: NeptuneDbSubnetGroup;

}

/**
 * @schema NeptuneCreateEventSubscriptionMessage
 */
export interface NeptuneCreateEventSubscriptionMessage {
  /**
   * @schema NeptuneCreateEventSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName: string;

  /**
   * @schema NeptuneCreateEventSubscriptionMessage#SnsTopicArn
   */
  readonly snsTopicArn: string;

  /**
   * @schema NeptuneCreateEventSubscriptionMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema NeptuneCreateEventSubscriptionMessage#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema NeptuneCreateEventSubscriptionMessage#SourceIds
   */
  readonly sourceIds?: string[];

  /**
   * @schema NeptuneCreateEventSubscriptionMessage#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema NeptuneCreateEventSubscriptionMessage#Tags
   */
  readonly tags?: NeptuneTag[];

}

/**
 * @schema NeptuneCreateEventSubscriptionResult
 */
export interface NeptuneCreateEventSubscriptionResult {
  /**
   * @schema NeptuneCreateEventSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: NeptuneEventSubscription;

}

/**
 * @schema NeptuneDeleteDbClusterMessage
 */
export interface NeptuneDeleteDbClusterMessage {
  /**
   * @schema NeptuneDeleteDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema NeptuneDeleteDbClusterMessage#SkipFinalSnapshot
   */
  readonly skipFinalSnapshot?: boolean;

  /**
   * @schema NeptuneDeleteDbClusterMessage#FinalDBSnapshotIdentifier
   */
  readonly finalDbSnapshotIdentifier?: string;

}

/**
 * @schema NeptuneDeleteDbClusterResult
 */
export interface NeptuneDeleteDbClusterResult {
  /**
   * @schema NeptuneDeleteDbClusterResult#DBCluster
   */
  readonly dbCluster?: NeptuneDbCluster;

}

/**
 * @schema NeptuneDeleteDbClusterEndpointMessage
 */
export interface NeptuneDeleteDbClusterEndpointMessage {
  /**
   * @schema NeptuneDeleteDbClusterEndpointMessage#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier: string;

}

/**
 * @schema NeptuneDeleteDbClusterEndpointOutput
 */
export interface NeptuneDeleteDbClusterEndpointOutput {
  /**
   * @schema NeptuneDeleteDbClusterEndpointOutput#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier?: string;

  /**
   * @schema NeptuneDeleteDbClusterEndpointOutput#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema NeptuneDeleteDbClusterEndpointOutput#DBClusterEndpointResourceIdentifier
   */
  readonly dbClusterEndpointResourceIdentifier?: string;

  /**
   * @schema NeptuneDeleteDbClusterEndpointOutput#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema NeptuneDeleteDbClusterEndpointOutput#Status
   */
  readonly status?: string;

  /**
   * @schema NeptuneDeleteDbClusterEndpointOutput#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema NeptuneDeleteDbClusterEndpointOutput#CustomEndpointType
   */
  readonly customEndpointType?: string;

  /**
   * @schema NeptuneDeleteDbClusterEndpointOutput#StaticMembers
   */
  readonly staticMembers?: string[];

  /**
   * @schema NeptuneDeleteDbClusterEndpointOutput#ExcludedMembers
   */
  readonly excludedMembers?: string[];

  /**
   * @schema NeptuneDeleteDbClusterEndpointOutput#DBClusterEndpointArn
   */
  readonly dbClusterEndpointArn?: string;

}

/**
 * @schema NeptuneDeleteDbClusterParameterGroupMessage
 */
export interface NeptuneDeleteDbClusterParameterGroupMessage {
  /**
   * @schema NeptuneDeleteDbClusterParameterGroupMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName: string;

}

/**
 * @schema NeptuneDeleteDbClusterSnapshotMessage
 */
export interface NeptuneDeleteDbClusterSnapshotMessage {
  /**
   * @schema NeptuneDeleteDbClusterSnapshotMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier: string;

}

/**
 * @schema NeptuneDeleteDbClusterSnapshotResult
 */
export interface NeptuneDeleteDbClusterSnapshotResult {
  /**
   * @schema NeptuneDeleteDbClusterSnapshotResult#DBClusterSnapshot
   */
  readonly dbClusterSnapshot?: NeptuneDbClusterSnapshot;

}

/**
 * @schema NeptuneDeleteDbInstanceMessage
 */
export interface NeptuneDeleteDbInstanceMessage {
  /**
   * @schema NeptuneDeleteDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema NeptuneDeleteDbInstanceMessage#SkipFinalSnapshot
   */
  readonly skipFinalSnapshot?: boolean;

  /**
   * @schema NeptuneDeleteDbInstanceMessage#FinalDBSnapshotIdentifier
   */
  readonly finalDbSnapshotIdentifier?: string;

}

/**
 * @schema NeptuneDeleteDbInstanceResult
 */
export interface NeptuneDeleteDbInstanceResult {
  /**
   * @schema NeptuneDeleteDbInstanceResult#DBInstance
   */
  readonly dbInstance?: NeptuneDbInstance;

}

/**
 * @schema NeptuneDeleteDbParameterGroupMessage
 */
export interface NeptuneDeleteDbParameterGroupMessage {
  /**
   * @schema NeptuneDeleteDbParameterGroupMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName: string;

}

/**
 * @schema NeptuneDeleteDbSubnetGroupMessage
 */
export interface NeptuneDeleteDbSubnetGroupMessage {
  /**
   * @schema NeptuneDeleteDbSubnetGroupMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName: string;

}

/**
 * @schema NeptuneDeleteEventSubscriptionMessage
 */
export interface NeptuneDeleteEventSubscriptionMessage {
  /**
   * @schema NeptuneDeleteEventSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName: string;

}

/**
 * @schema NeptuneDeleteEventSubscriptionResult
 */
export interface NeptuneDeleteEventSubscriptionResult {
  /**
   * @schema NeptuneDeleteEventSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: NeptuneEventSubscription;

}

/**
 * @schema NeptuneDescribeDbClusterEndpointsMessage
 */
export interface NeptuneDescribeDbClusterEndpointsMessage {
  /**
   * @schema NeptuneDescribeDbClusterEndpointsMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema NeptuneDescribeDbClusterEndpointsMessage#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier?: string;

  /**
   * @schema NeptuneDescribeDbClusterEndpointsMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

  /**
   * @schema NeptuneDescribeDbClusterEndpointsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema NeptuneDescribeDbClusterEndpointsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema NeptuneDbClusterEndpointMessage
 */
export interface NeptuneDbClusterEndpointMessage {
  /**
   * @schema NeptuneDbClusterEndpointMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema NeptuneDbClusterEndpointMessage#DBClusterEndpoints
   */
  readonly dbClusterEndpoints?: NeptuneDbClusterEndpoint[];

}

/**
 * @schema NeptuneDescribeDbClusterParameterGroupsMessage
 */
export interface NeptuneDescribeDbClusterParameterGroupsMessage {
  /**
   * @schema NeptuneDescribeDbClusterParameterGroupsMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema NeptuneDescribeDbClusterParameterGroupsMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

  /**
   * @schema NeptuneDescribeDbClusterParameterGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema NeptuneDescribeDbClusterParameterGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema NeptuneDbClusterParameterGroupsMessage
 */
export interface NeptuneDbClusterParameterGroupsMessage {
  /**
   * @schema NeptuneDbClusterParameterGroupsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema NeptuneDbClusterParameterGroupsMessage#DBClusterParameterGroups
   */
  readonly dbClusterParameterGroups?: NeptuneDbClusterParameterGroup[];

}

/**
 * @schema NeptuneDescribeDbClusterParametersMessage
 */
export interface NeptuneDescribeDbClusterParametersMessage {
  /**
   * @schema NeptuneDescribeDbClusterParametersMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName: string;

  /**
   * @schema NeptuneDescribeDbClusterParametersMessage#Source
   */
  readonly source?: string;

  /**
   * @schema NeptuneDescribeDbClusterParametersMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

  /**
   * @schema NeptuneDescribeDbClusterParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema NeptuneDescribeDbClusterParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema NeptuneDbClusterParameterGroupDetails
 */
export interface NeptuneDbClusterParameterGroupDetails {
  /**
   * @schema NeptuneDbClusterParameterGroupDetails#Parameters
   */
  readonly parameters?: NeptuneParameter[];

  /**
   * @schema NeptuneDbClusterParameterGroupDetails#Marker
   */
  readonly marker?: string;

}

/**
 * @schema NeptuneDescribeDbClusterSnapshotAttributesMessage
 */
export interface NeptuneDescribeDbClusterSnapshotAttributesMessage {
  /**
   * @schema NeptuneDescribeDbClusterSnapshotAttributesMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier: string;

}

/**
 * @schema NeptuneDescribeDbClusterSnapshotAttributesResult
 */
export interface NeptuneDescribeDbClusterSnapshotAttributesResult {
  /**
   * @schema NeptuneDescribeDbClusterSnapshotAttributesResult#DBClusterSnapshotAttributesResult
   */
  readonly dbClusterSnapshotAttributesResult?: NeptuneDbClusterSnapshotAttributesResult;

}

/**
 * @schema NeptuneDescribeDbClusterSnapshotsMessage
 */
export interface NeptuneDescribeDbClusterSnapshotsMessage {
  /**
   * @schema NeptuneDescribeDbClusterSnapshotsMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema NeptuneDescribeDbClusterSnapshotsMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

  /**
   * @schema NeptuneDescribeDbClusterSnapshotsMessage#SnapshotType
   */
  readonly snapshotType?: string;

  /**
   * @schema NeptuneDescribeDbClusterSnapshotsMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

  /**
   * @schema NeptuneDescribeDbClusterSnapshotsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema NeptuneDescribeDbClusterSnapshotsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema NeptuneDescribeDbClusterSnapshotsMessage#IncludeShared
   */
  readonly includeShared?: boolean;

  /**
   * @schema NeptuneDescribeDbClusterSnapshotsMessage#IncludePublic
   */
  readonly includePublic?: boolean;

}

/**
 * @schema NeptuneDbClusterSnapshotMessage
 */
export interface NeptuneDbClusterSnapshotMessage {
  /**
   * @schema NeptuneDbClusterSnapshotMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema NeptuneDbClusterSnapshotMessage#DBClusterSnapshots
   */
  readonly dbClusterSnapshots?: NeptuneDbClusterSnapshot[];

}

/**
 * @schema NeptuneDescribeDbClustersMessage
 */
export interface NeptuneDescribeDbClustersMessage {
  /**
   * @schema NeptuneDescribeDbClustersMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema NeptuneDescribeDbClustersMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

  /**
   * @schema NeptuneDescribeDbClustersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema NeptuneDescribeDbClustersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema NeptuneDbClusterMessage
 */
export interface NeptuneDbClusterMessage {
  /**
   * @schema NeptuneDbClusterMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema NeptuneDbClusterMessage#DBClusters
   */
  readonly dbClusters?: NeptuneDbCluster[];

}

/**
 * @schema NeptuneDescribeDbEngineVersionsMessage
 */
export interface NeptuneDescribeDbEngineVersionsMessage {
  /**
   * @schema NeptuneDescribeDbEngineVersionsMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema NeptuneDescribeDbEngineVersionsMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema NeptuneDescribeDbEngineVersionsMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema NeptuneDescribeDbEngineVersionsMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

  /**
   * @schema NeptuneDescribeDbEngineVersionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema NeptuneDescribeDbEngineVersionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema NeptuneDescribeDbEngineVersionsMessage#DefaultOnly
   */
  readonly defaultOnly?: boolean;

  /**
   * @schema NeptuneDescribeDbEngineVersionsMessage#ListSupportedCharacterSets
   */
  readonly listSupportedCharacterSets?: boolean;

  /**
   * @schema NeptuneDescribeDbEngineVersionsMessage#ListSupportedTimezones
   */
  readonly listSupportedTimezones?: boolean;

}

/**
 * @schema NeptuneDbEngineVersionMessage
 */
export interface NeptuneDbEngineVersionMessage {
  /**
   * @schema NeptuneDbEngineVersionMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema NeptuneDbEngineVersionMessage#DBEngineVersions
   */
  readonly dbEngineVersions?: NeptuneDbEngineVersion[];

}

/**
 * @schema NeptuneDescribeDbInstancesMessage
 */
export interface NeptuneDescribeDbInstancesMessage {
  /**
   * @schema NeptuneDescribeDbInstancesMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema NeptuneDescribeDbInstancesMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

  /**
   * @schema NeptuneDescribeDbInstancesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema NeptuneDescribeDbInstancesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema NeptuneDbInstanceMessage
 */
export interface NeptuneDbInstanceMessage {
  /**
   * @schema NeptuneDbInstanceMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema NeptuneDbInstanceMessage#DBInstances
   */
  readonly dbInstances?: NeptuneDbInstance[];

}

/**
 * @schema NeptuneDescribeDbParameterGroupsMessage
 */
export interface NeptuneDescribeDbParameterGroupsMessage {
  /**
   * @schema NeptuneDescribeDbParameterGroupsMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema NeptuneDescribeDbParameterGroupsMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

  /**
   * @schema NeptuneDescribeDbParameterGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema NeptuneDescribeDbParameterGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema NeptuneDbParameterGroupsMessage
 */
export interface NeptuneDbParameterGroupsMessage {
  /**
   * @schema NeptuneDbParameterGroupsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema NeptuneDbParameterGroupsMessage#DBParameterGroups
   */
  readonly dbParameterGroups?: NeptuneDbParameterGroup[];

}

/**
 * @schema NeptuneDescribeDbParametersMessage
 */
export interface NeptuneDescribeDbParametersMessage {
  /**
   * @schema NeptuneDescribeDbParametersMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName: string;

  /**
   * @schema NeptuneDescribeDbParametersMessage#Source
   */
  readonly source?: string;

  /**
   * @schema NeptuneDescribeDbParametersMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

  /**
   * @schema NeptuneDescribeDbParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema NeptuneDescribeDbParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema NeptuneDbParameterGroupDetails
 */
export interface NeptuneDbParameterGroupDetails {
  /**
   * @schema NeptuneDbParameterGroupDetails#Parameters
   */
  readonly parameters?: NeptuneParameter[];

  /**
   * @schema NeptuneDbParameterGroupDetails#Marker
   */
  readonly marker?: string;

}

/**
 * @schema NeptuneDescribeDbSubnetGroupsMessage
 */
export interface NeptuneDescribeDbSubnetGroupsMessage {
  /**
   * @schema NeptuneDescribeDbSubnetGroupsMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema NeptuneDescribeDbSubnetGroupsMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

  /**
   * @schema NeptuneDescribeDbSubnetGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema NeptuneDescribeDbSubnetGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema NeptuneDbSubnetGroupMessage
 */
export interface NeptuneDbSubnetGroupMessage {
  /**
   * @schema NeptuneDbSubnetGroupMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema NeptuneDbSubnetGroupMessage#DBSubnetGroups
   */
  readonly dbSubnetGroups?: NeptuneDbSubnetGroup[];

}

/**
 * @schema NeptuneDescribeEngineDefaultClusterParametersMessage
 */
export interface NeptuneDescribeEngineDefaultClusterParametersMessage {
  /**
   * @schema NeptuneDescribeEngineDefaultClusterParametersMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily: string;

  /**
   * @schema NeptuneDescribeEngineDefaultClusterParametersMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

  /**
   * @schema NeptuneDescribeEngineDefaultClusterParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema NeptuneDescribeEngineDefaultClusterParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema NeptuneDescribeEngineDefaultClusterParametersResult
 */
export interface NeptuneDescribeEngineDefaultClusterParametersResult {
  /**
   * @schema NeptuneDescribeEngineDefaultClusterParametersResult#EngineDefaults
   */
  readonly engineDefaults?: NeptuneEngineDefaults;

}

/**
 * @schema NeptuneDescribeEngineDefaultParametersMessage
 */
export interface NeptuneDescribeEngineDefaultParametersMessage {
  /**
   * @schema NeptuneDescribeEngineDefaultParametersMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily: string;

  /**
   * @schema NeptuneDescribeEngineDefaultParametersMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

  /**
   * @schema NeptuneDescribeEngineDefaultParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema NeptuneDescribeEngineDefaultParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema NeptuneDescribeEngineDefaultParametersResult
 */
export interface NeptuneDescribeEngineDefaultParametersResult {
  /**
   * @schema NeptuneDescribeEngineDefaultParametersResult#EngineDefaults
   */
  readonly engineDefaults?: NeptuneEngineDefaults;

}

/**
 * @schema NeptuneDescribeEventCategoriesMessage
 */
export interface NeptuneDescribeEventCategoriesMessage {
  /**
   * @schema NeptuneDescribeEventCategoriesMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema NeptuneDescribeEventCategoriesMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

}

/**
 * @schema NeptuneEventCategoriesMessage
 */
export interface NeptuneEventCategoriesMessage {
  /**
   * @schema NeptuneEventCategoriesMessage#EventCategoriesMapList
   */
  readonly eventCategoriesMapList?: NeptuneEventCategoriesMap[];

}

/**
 * @schema NeptuneDescribeEventSubscriptionsMessage
 */
export interface NeptuneDescribeEventSubscriptionsMessage {
  /**
   * @schema NeptuneDescribeEventSubscriptionsMessage#SubscriptionName
   */
  readonly subscriptionName?: string;

  /**
   * @schema NeptuneDescribeEventSubscriptionsMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

  /**
   * @schema NeptuneDescribeEventSubscriptionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema NeptuneDescribeEventSubscriptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema NeptuneEventSubscriptionsMessage
 */
export interface NeptuneEventSubscriptionsMessage {
  /**
   * @schema NeptuneEventSubscriptionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema NeptuneEventSubscriptionsMessage#EventSubscriptionsList
   */
  readonly eventSubscriptionsList?: NeptuneEventSubscription[];

}

/**
 * @schema NeptuneDescribeEventsMessage
 */
export interface NeptuneDescribeEventsMessage {
  /**
   * @schema NeptuneDescribeEventsMessage#SourceIdentifier
   */
  readonly sourceIdentifier?: string;

  /**
   * @schema NeptuneDescribeEventsMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema NeptuneDescribeEventsMessage#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema NeptuneDescribeEventsMessage#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema NeptuneDescribeEventsMessage#Duration
   */
  readonly duration?: number;

  /**
   * @schema NeptuneDescribeEventsMessage#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema NeptuneDescribeEventsMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

  /**
   * @schema NeptuneDescribeEventsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema NeptuneDescribeEventsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema NeptuneEventsMessage
 */
export interface NeptuneEventsMessage {
  /**
   * @schema NeptuneEventsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema NeptuneEventsMessage#Events
   */
  readonly events?: NeptuneEvent[];

}

/**
 * @schema NeptuneDescribeOrderableDbInstanceOptionsMessage
 */
export interface NeptuneDescribeOrderableDbInstanceOptionsMessage {
  /**
   * @schema NeptuneDescribeOrderableDbInstanceOptionsMessage#Engine
   */
  readonly engine: string;

  /**
   * @schema NeptuneDescribeOrderableDbInstanceOptionsMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema NeptuneDescribeOrderableDbInstanceOptionsMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema NeptuneDescribeOrderableDbInstanceOptionsMessage#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema NeptuneDescribeOrderableDbInstanceOptionsMessage#Vpc
   */
  readonly vpc?: boolean;

  /**
   * @schema NeptuneDescribeOrderableDbInstanceOptionsMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

  /**
   * @schema NeptuneDescribeOrderableDbInstanceOptionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema NeptuneDescribeOrderableDbInstanceOptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema NeptuneOrderableDbInstanceOptionsMessage
 */
export interface NeptuneOrderableDbInstanceOptionsMessage {
  /**
   * @schema NeptuneOrderableDbInstanceOptionsMessage#OrderableDBInstanceOptions
   */
  readonly orderableDbInstanceOptions?: NeptuneOrderableDbInstanceOption[];

  /**
   * @schema NeptuneOrderableDbInstanceOptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema NeptuneDescribePendingMaintenanceActionsMessage
 */
export interface NeptuneDescribePendingMaintenanceActionsMessage {
  /**
   * @schema NeptuneDescribePendingMaintenanceActionsMessage#ResourceIdentifier
   */
  readonly resourceIdentifier?: string;

  /**
   * @schema NeptuneDescribePendingMaintenanceActionsMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

  /**
   * @schema NeptuneDescribePendingMaintenanceActionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema NeptuneDescribePendingMaintenanceActionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema NeptunePendingMaintenanceActionsMessage
 */
export interface NeptunePendingMaintenanceActionsMessage {
  /**
   * @schema NeptunePendingMaintenanceActionsMessage#PendingMaintenanceActions
   */
  readonly pendingMaintenanceActions?: NeptuneResourcePendingMaintenanceActions[];

  /**
   * @schema NeptunePendingMaintenanceActionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema NeptuneDescribeValidDbInstanceModificationsMessage
 */
export interface NeptuneDescribeValidDbInstanceModificationsMessage {
  /**
   * @schema NeptuneDescribeValidDbInstanceModificationsMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

}

/**
 * @schema NeptuneDescribeValidDbInstanceModificationsResult
 */
export interface NeptuneDescribeValidDbInstanceModificationsResult {
  /**
   * @schema NeptuneDescribeValidDbInstanceModificationsResult#ValidDBInstanceModificationsMessage
   */
  readonly validDbInstanceModificationsMessage?: NeptuneValidDbInstanceModificationsMessage;

}

/**
 * @schema NeptuneFailoverDbClusterMessage
 */
export interface NeptuneFailoverDbClusterMessage {
  /**
   * @schema NeptuneFailoverDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema NeptuneFailoverDbClusterMessage#TargetDBInstanceIdentifier
   */
  readonly targetDbInstanceIdentifier?: string;

}

/**
 * @schema NeptuneFailoverDbClusterResult
 */
export interface NeptuneFailoverDbClusterResult {
  /**
   * @schema NeptuneFailoverDbClusterResult#DBCluster
   */
  readonly dbCluster?: NeptuneDbCluster;

}

/**
 * @schema NeptuneListTagsForResourceMessage
 */
export interface NeptuneListTagsForResourceMessage {
  /**
   * @schema NeptuneListTagsForResourceMessage#ResourceName
   */
  readonly resourceName: string;

  /**
   * @schema NeptuneListTagsForResourceMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

}

/**
 * @schema NeptuneTagListMessage
 */
export interface NeptuneTagListMessage {
  /**
   * @schema NeptuneTagListMessage#TagList
   */
  readonly tagList?: NeptuneTag[];

}

/**
 * @schema NeptuneModifyDbClusterMessage
 */
export interface NeptuneModifyDbClusterMessage {
  /**
   * @schema NeptuneModifyDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema NeptuneModifyDbClusterMessage#NewDBClusterIdentifier
   */
  readonly newDbClusterIdentifier?: string;

  /**
   * @schema NeptuneModifyDbClusterMessage#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

  /**
   * @schema NeptuneModifyDbClusterMessage#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema NeptuneModifyDbClusterMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema NeptuneModifyDbClusterMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema NeptuneModifyDbClusterMessage#Port
   */
  readonly port?: number;

  /**
   * @schema NeptuneModifyDbClusterMessage#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema NeptuneModifyDbClusterMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema NeptuneModifyDbClusterMessage#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema NeptuneModifyDbClusterMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema NeptuneModifyDbClusterMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema NeptuneModifyDbClusterMessage#CloudwatchLogsExportConfiguration
   */
  readonly cloudwatchLogsExportConfiguration?: NeptuneCloudwatchLogsExportConfiguration;

  /**
   * @schema NeptuneModifyDbClusterMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema NeptuneModifyDbClusterMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * @schema NeptuneModifyDbClusterResult
 */
export interface NeptuneModifyDbClusterResult {
  /**
   * @schema NeptuneModifyDbClusterResult#DBCluster
   */
  readonly dbCluster?: NeptuneDbCluster;

}

/**
 * @schema NeptuneModifyDbClusterEndpointMessage
 */
export interface NeptuneModifyDbClusterEndpointMessage {
  /**
   * @schema NeptuneModifyDbClusterEndpointMessage#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier: string;

  /**
   * @schema NeptuneModifyDbClusterEndpointMessage#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema NeptuneModifyDbClusterEndpointMessage#StaticMembers
   */
  readonly staticMembers?: string[];

  /**
   * @schema NeptuneModifyDbClusterEndpointMessage#ExcludedMembers
   */
  readonly excludedMembers?: string[];

}

/**
 * @schema NeptuneModifyDbClusterEndpointOutput
 */
export interface NeptuneModifyDbClusterEndpointOutput {
  /**
   * @schema NeptuneModifyDbClusterEndpointOutput#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier?: string;

  /**
   * @schema NeptuneModifyDbClusterEndpointOutput#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema NeptuneModifyDbClusterEndpointOutput#DBClusterEndpointResourceIdentifier
   */
  readonly dbClusterEndpointResourceIdentifier?: string;

  /**
   * @schema NeptuneModifyDbClusterEndpointOutput#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema NeptuneModifyDbClusterEndpointOutput#Status
   */
  readonly status?: string;

  /**
   * @schema NeptuneModifyDbClusterEndpointOutput#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema NeptuneModifyDbClusterEndpointOutput#CustomEndpointType
   */
  readonly customEndpointType?: string;

  /**
   * @schema NeptuneModifyDbClusterEndpointOutput#StaticMembers
   */
  readonly staticMembers?: string[];

  /**
   * @schema NeptuneModifyDbClusterEndpointOutput#ExcludedMembers
   */
  readonly excludedMembers?: string[];

  /**
   * @schema NeptuneModifyDbClusterEndpointOutput#DBClusterEndpointArn
   */
  readonly dbClusterEndpointArn?: string;

}

/**
 * @schema NeptuneModifyDbClusterParameterGroupMessage
 */
export interface NeptuneModifyDbClusterParameterGroupMessage {
  /**
   * @schema NeptuneModifyDbClusterParameterGroupMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName: string;

  /**
   * @schema NeptuneModifyDbClusterParameterGroupMessage#Parameters
   */
  readonly parameters: NeptuneParameter[];

}

/**
 * @schema NeptuneDbClusterParameterGroupNameMessage
 */
export interface NeptuneDbClusterParameterGroupNameMessage {
  /**
   * @schema NeptuneDbClusterParameterGroupNameMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

}

/**
 * @schema NeptuneModifyDbClusterSnapshotAttributeMessage
 */
export interface NeptuneModifyDbClusterSnapshotAttributeMessage {
  /**
   * @schema NeptuneModifyDbClusterSnapshotAttributeMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier: string;

  /**
   * @schema NeptuneModifyDbClusterSnapshotAttributeMessage#AttributeName
   */
  readonly attributeName: string;

  /**
   * @schema NeptuneModifyDbClusterSnapshotAttributeMessage#ValuesToAdd
   */
  readonly valuesToAdd?: string[];

  /**
   * @schema NeptuneModifyDbClusterSnapshotAttributeMessage#ValuesToRemove
   */
  readonly valuesToRemove?: string[];

}

/**
 * @schema NeptuneModifyDbClusterSnapshotAttributeResult
 */
export interface NeptuneModifyDbClusterSnapshotAttributeResult {
  /**
   * @schema NeptuneModifyDbClusterSnapshotAttributeResult#DBClusterSnapshotAttributesResult
   */
  readonly dbClusterSnapshotAttributesResult?: NeptuneDbClusterSnapshotAttributesResult;

}

/**
 * @schema NeptuneModifyDbInstanceMessage
 */
export interface NeptuneModifyDbInstanceMessage {
  /**
   * @schema NeptuneModifyDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema NeptuneModifyDbInstanceMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#DBSecurityGroups
   */
  readonly dbSecurityGroups?: string[];

  /**
   * @schema NeptuneModifyDbInstanceMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema NeptuneModifyDbInstanceMessage#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

  /**
   * @schema NeptuneModifyDbInstanceMessage#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema NeptuneModifyDbInstanceMessage#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema NeptuneModifyDbInstanceMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#AllowMajorVersionUpgrade
   */
  readonly allowMajorVersionUpgrade?: boolean;

  /**
   * @schema NeptuneModifyDbInstanceMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema NeptuneModifyDbInstanceMessage#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#Iops
   */
  readonly iops?: number;

  /**
   * @schema NeptuneModifyDbInstanceMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#NewDBInstanceIdentifier
   */
  readonly newDbInstanceIdentifier?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#TdeCredentialPassword
   */
  readonly tdeCredentialPassword?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#CACertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#Domain
   */
  readonly domain?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema NeptuneModifyDbInstanceMessage#MonitoringInterval
   */
  readonly monitoringInterval?: number;

  /**
   * @schema NeptuneModifyDbInstanceMessage#DBPortNumber
   */
  readonly dbPortNumber?: number;

  /**
   * @schema NeptuneModifyDbInstanceMessage#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema NeptuneModifyDbInstanceMessage#MonitoringRoleArn
   */
  readonly monitoringRoleArn?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#PromotionTier
   */
  readonly promotionTier?: number;

  /**
   * @schema NeptuneModifyDbInstanceMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema NeptuneModifyDbInstanceMessage#EnablePerformanceInsights
   */
  readonly enablePerformanceInsights?: boolean;

  /**
   * @schema NeptuneModifyDbInstanceMessage#PerformanceInsightsKMSKeyId
   */
  readonly performanceInsightsKmsKeyId?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#CloudwatchLogsExportConfiguration
   */
  readonly cloudwatchLogsExportConfiguration?: NeptuneCloudwatchLogsExportConfiguration;

  /**
   * @schema NeptuneModifyDbInstanceMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * @schema NeptuneModifyDbInstanceResult
 */
export interface NeptuneModifyDbInstanceResult {
  /**
   * @schema NeptuneModifyDbInstanceResult#DBInstance
   */
  readonly dbInstance?: NeptuneDbInstance;

}

/**
 * @schema NeptuneModifyDbParameterGroupMessage
 */
export interface NeptuneModifyDbParameterGroupMessage {
  /**
   * @schema NeptuneModifyDbParameterGroupMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName: string;

  /**
   * @schema NeptuneModifyDbParameterGroupMessage#Parameters
   */
  readonly parameters: NeptuneParameter[];

}

/**
 * @schema NeptuneDbParameterGroupNameMessage
 */
export interface NeptuneDbParameterGroupNameMessage {
  /**
   * @schema NeptuneDbParameterGroupNameMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

}

/**
 * @schema NeptuneModifyDbSubnetGroupMessage
 */
export interface NeptuneModifyDbSubnetGroupMessage {
  /**
   * @schema NeptuneModifyDbSubnetGroupMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName: string;

  /**
   * @schema NeptuneModifyDbSubnetGroupMessage#DBSubnetGroupDescription
   */
  readonly dbSubnetGroupDescription?: string;

  /**
   * @schema NeptuneModifyDbSubnetGroupMessage#SubnetIds
   */
  readonly subnetIds: string[];

}

/**
 * @schema NeptuneModifyDbSubnetGroupResult
 */
export interface NeptuneModifyDbSubnetGroupResult {
  /**
   * @schema NeptuneModifyDbSubnetGroupResult#DBSubnetGroup
   */
  readonly dbSubnetGroup?: NeptuneDbSubnetGroup;

}

/**
 * @schema NeptuneModifyEventSubscriptionMessage
 */
export interface NeptuneModifyEventSubscriptionMessage {
  /**
   * @schema NeptuneModifyEventSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName: string;

  /**
   * @schema NeptuneModifyEventSubscriptionMessage#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema NeptuneModifyEventSubscriptionMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema NeptuneModifyEventSubscriptionMessage#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema NeptuneModifyEventSubscriptionMessage#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema NeptuneModifyEventSubscriptionResult
 */
export interface NeptuneModifyEventSubscriptionResult {
  /**
   * @schema NeptuneModifyEventSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: NeptuneEventSubscription;

}

/**
 * @schema NeptunePromoteReadReplicaDbClusterMessage
 */
export interface NeptunePromoteReadReplicaDbClusterMessage {
  /**
   * @schema NeptunePromoteReadReplicaDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

}

/**
 * @schema NeptunePromoteReadReplicaDbClusterResult
 */
export interface NeptunePromoteReadReplicaDbClusterResult {
  /**
   * @schema NeptunePromoteReadReplicaDbClusterResult#DBCluster
   */
  readonly dbCluster?: NeptuneDbCluster;

}

/**
 * @schema NeptuneRebootDbInstanceMessage
 */
export interface NeptuneRebootDbInstanceMessage {
  /**
   * @schema NeptuneRebootDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema NeptuneRebootDbInstanceMessage#ForceFailover
   */
  readonly forceFailover?: boolean;

}

/**
 * @schema NeptuneRebootDbInstanceResult
 */
export interface NeptuneRebootDbInstanceResult {
  /**
   * @schema NeptuneRebootDbInstanceResult#DBInstance
   */
  readonly dbInstance?: NeptuneDbInstance;

}

/**
 * @schema NeptuneRemoveRoleFromDbClusterMessage
 */
export interface NeptuneRemoveRoleFromDbClusterMessage {
  /**
   * @schema NeptuneRemoveRoleFromDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema NeptuneRemoveRoleFromDbClusterMessage#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema NeptuneRemoveRoleFromDbClusterMessage#FeatureName
   */
  readonly featureName?: string;

}

/**
 * @schema NeptuneRemoveSourceIdentifierFromSubscriptionMessage
 */
export interface NeptuneRemoveSourceIdentifierFromSubscriptionMessage {
  /**
   * @schema NeptuneRemoveSourceIdentifierFromSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName: string;

  /**
   * @schema NeptuneRemoveSourceIdentifierFromSubscriptionMessage#SourceIdentifier
   */
  readonly sourceIdentifier: string;

}

/**
 * @schema NeptuneRemoveSourceIdentifierFromSubscriptionResult
 */
export interface NeptuneRemoveSourceIdentifierFromSubscriptionResult {
  /**
   * @schema NeptuneRemoveSourceIdentifierFromSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: NeptuneEventSubscription;

}

/**
 * @schema NeptuneRemoveTagsFromResourceMessage
 */
export interface NeptuneRemoveTagsFromResourceMessage {
  /**
   * @schema NeptuneRemoveTagsFromResourceMessage#ResourceName
   */
  readonly resourceName: string;

  /**
   * @schema NeptuneRemoveTagsFromResourceMessage#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema NeptuneResetDbClusterParameterGroupMessage
 */
export interface NeptuneResetDbClusterParameterGroupMessage {
  /**
   * @schema NeptuneResetDbClusterParameterGroupMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName: string;

  /**
   * @schema NeptuneResetDbClusterParameterGroupMessage#ResetAllParameters
   */
  readonly resetAllParameters?: boolean;

  /**
   * @schema NeptuneResetDbClusterParameterGroupMessage#Parameters
   */
  readonly parameters?: NeptuneParameter[];

}

/**
 * @schema NeptuneResetDbParameterGroupMessage
 */
export interface NeptuneResetDbParameterGroupMessage {
  /**
   * @schema NeptuneResetDbParameterGroupMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName: string;

  /**
   * @schema NeptuneResetDbParameterGroupMessage#ResetAllParameters
   */
  readonly resetAllParameters?: boolean;

  /**
   * @schema NeptuneResetDbParameterGroupMessage#Parameters
   */
  readonly parameters?: NeptuneParameter[];

}

/**
 * @schema NeptuneRestoreDbClusterFromSnapshotMessage
 */
export interface NeptuneRestoreDbClusterFromSnapshotMessage {
  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotMessage#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier: string;

  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotMessage#Engine
   */
  readonly engine: string;

  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotMessage#Port
   */
  readonly port?: number;

  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotMessage#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotMessage#Tags
   */
  readonly tags?: NeptuneTag[];

  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * @schema NeptuneRestoreDbClusterFromSnapshotResult
 */
export interface NeptuneRestoreDbClusterFromSnapshotResult {
  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotResult#DBCluster
   */
  readonly dbCluster?: NeptuneDbCluster;

}

/**
 * @schema NeptuneRestoreDbClusterToPointInTimeMessage
 */
export interface NeptuneRestoreDbClusterToPointInTimeMessage {
  /**
   * @schema NeptuneRestoreDbClusterToPointInTimeMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema NeptuneRestoreDbClusterToPointInTimeMessage#RestoreType
   */
  readonly restoreType?: string;

  /**
   * @schema NeptuneRestoreDbClusterToPointInTimeMessage#SourceDBClusterIdentifier
   */
  readonly sourceDbClusterIdentifier: string;

  /**
   * @schema NeptuneRestoreDbClusterToPointInTimeMessage#RestoreToTime
   */
  readonly restoreToTime?: string;

  /**
   * @schema NeptuneRestoreDbClusterToPointInTimeMessage#UseLatestRestorableTime
   */
  readonly useLatestRestorableTime?: boolean;

  /**
   * @schema NeptuneRestoreDbClusterToPointInTimeMessage#Port
   */
  readonly port?: number;

  /**
   * @schema NeptuneRestoreDbClusterToPointInTimeMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema NeptuneRestoreDbClusterToPointInTimeMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema NeptuneRestoreDbClusterToPointInTimeMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema NeptuneRestoreDbClusterToPointInTimeMessage#Tags
   */
  readonly tags?: NeptuneTag[];

  /**
   * @schema NeptuneRestoreDbClusterToPointInTimeMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema NeptuneRestoreDbClusterToPointInTimeMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema NeptuneRestoreDbClusterToPointInTimeMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema NeptuneRestoreDbClusterToPointInTimeMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema NeptuneRestoreDbClusterToPointInTimeMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * @schema NeptuneRestoreDbClusterToPointInTimeResult
 */
export interface NeptuneRestoreDbClusterToPointInTimeResult {
  /**
   * @schema NeptuneRestoreDbClusterToPointInTimeResult#DBCluster
   */
  readonly dbCluster?: NeptuneDbCluster;

}

/**
 * @schema NeptuneStartDbClusterMessage
 */
export interface NeptuneStartDbClusterMessage {
  /**
   * @schema NeptuneStartDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

}

/**
 * @schema NeptuneStartDbClusterResult
 */
export interface NeptuneStartDbClusterResult {
  /**
   * @schema NeptuneStartDbClusterResult#DBCluster
   */
  readonly dbCluster?: NeptuneDbCluster;

}

/**
 * @schema NeptuneStopDbClusterMessage
 */
export interface NeptuneStopDbClusterMessage {
  /**
   * @schema NeptuneStopDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

}

/**
 * @schema NeptuneStopDbClusterResult
 */
export interface NeptuneStopDbClusterResult {
  /**
   * @schema NeptuneStopDbClusterResult#DBCluster
   */
  readonly dbCluster?: NeptuneDbCluster;

}

/**
 * @schema NeptuneEventSubscription
 */
export interface NeptuneEventSubscription {
  /**
   * @schema NeptuneEventSubscription#CustomerAwsId
   */
  readonly customerAwsId?: string;

  /**
   * @schema NeptuneEventSubscription#CustSubscriptionId
   */
  readonly custSubscriptionId?: string;

  /**
   * @schema NeptuneEventSubscription#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema NeptuneEventSubscription#Status
   */
  readonly status?: string;

  /**
   * @schema NeptuneEventSubscription#SubscriptionCreationTime
   */
  readonly subscriptionCreationTime?: string;

  /**
   * @schema NeptuneEventSubscription#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema NeptuneEventSubscription#SourceIdsList
   */
  readonly sourceIdsList?: string[];

  /**
   * @schema NeptuneEventSubscription#EventCategoriesList
   */
  readonly eventCategoriesList?: string[];

  /**
   * @schema NeptuneEventSubscription#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema NeptuneEventSubscription#EventSubscriptionArn
   */
  readonly eventSubscriptionArn?: string;

}

/**
 * @schema NeptuneTag
 */
export interface NeptuneTag {
  /**
   * @schema NeptuneTag#Key
   */
  readonly key?: string;

  /**
   * @schema NeptuneTag#Value
   */
  readonly value?: string;

}

/**
 * @schema NeptuneResourcePendingMaintenanceActions
 */
export interface NeptuneResourcePendingMaintenanceActions {
  /**
   * @schema NeptuneResourcePendingMaintenanceActions#ResourceIdentifier
   */
  readonly resourceIdentifier?: string;

  /**
   * @schema NeptuneResourcePendingMaintenanceActions#PendingMaintenanceActionDetails
   */
  readonly pendingMaintenanceActionDetails?: NeptunePendingMaintenanceAction[];

}

/**
 * @schema NeptuneDbClusterParameterGroup
 */
export interface NeptuneDbClusterParameterGroup {
  /**
   * @schema NeptuneDbClusterParameterGroup#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema NeptuneDbClusterParameterGroup#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema NeptuneDbClusterParameterGroup#Description
   */
  readonly description?: string;

  /**
   * @schema NeptuneDbClusterParameterGroup#DBClusterParameterGroupArn
   */
  readonly dbClusterParameterGroupArn?: string;

}

/**
 * @schema NeptuneDbClusterSnapshot
 */
export interface NeptuneDbClusterSnapshot {
  /**
   * @schema NeptuneDbClusterSnapshot#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema NeptuneDbClusterSnapshot#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

  /**
   * @schema NeptuneDbClusterSnapshot#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema NeptuneDbClusterSnapshot#SnapshotCreateTime
   */
  readonly snapshotCreateTime?: string;

  /**
   * @schema NeptuneDbClusterSnapshot#Engine
   */
  readonly engine?: string;

  /**
   * @schema NeptuneDbClusterSnapshot#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema NeptuneDbClusterSnapshot#Status
   */
  readonly status?: string;

  /**
   * @schema NeptuneDbClusterSnapshot#Port
   */
  readonly port?: number;

  /**
   * @schema NeptuneDbClusterSnapshot#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema NeptuneDbClusterSnapshot#ClusterCreateTime
   */
  readonly clusterCreateTime?: string;

  /**
   * @schema NeptuneDbClusterSnapshot#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema NeptuneDbClusterSnapshot#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema NeptuneDbClusterSnapshot#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema NeptuneDbClusterSnapshot#SnapshotType
   */
  readonly snapshotType?: string;

  /**
   * @schema NeptuneDbClusterSnapshot#PercentProgress
   */
  readonly percentProgress?: number;

  /**
   * @schema NeptuneDbClusterSnapshot#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema NeptuneDbClusterSnapshot#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema NeptuneDbClusterSnapshot#DBClusterSnapshotArn
   */
  readonly dbClusterSnapshotArn?: string;

  /**
   * @schema NeptuneDbClusterSnapshot#SourceDBClusterSnapshotArn
   */
  readonly sourceDbClusterSnapshotArn?: string;

  /**
   * @schema NeptuneDbClusterSnapshot#IAMDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

}

/**
 * @schema NeptuneDbParameterGroup
 */
export interface NeptuneDbParameterGroup {
  /**
   * @schema NeptuneDbParameterGroup#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema NeptuneDbParameterGroup#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema NeptuneDbParameterGroup#Description
   */
  readonly description?: string;

  /**
   * @schema NeptuneDbParameterGroup#DBParameterGroupArn
   */
  readonly dbParameterGroupArn?: string;

}

/**
 * @schema NeptuneDbCluster
 */
export interface NeptuneDbCluster {
  /**
   * @schema NeptuneDbCluster#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema NeptuneDbCluster#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema NeptuneDbCluster#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema NeptuneDbCluster#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema NeptuneDbCluster#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema NeptuneDbCluster#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema NeptuneDbCluster#DBClusterParameterGroup
   */
  readonly dbClusterParameterGroup?: string;

  /**
   * @schema NeptuneDbCluster#DBSubnetGroup
   */
  readonly dbSubnetGroup?: string;

  /**
   * @schema NeptuneDbCluster#Status
   */
  readonly status?: string;

  /**
   * @schema NeptuneDbCluster#PercentProgress
   */
  readonly percentProgress?: string;

  /**
   * @schema NeptuneDbCluster#EarliestRestorableTime
   */
  readonly earliestRestorableTime?: string;

  /**
   * @schema NeptuneDbCluster#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema NeptuneDbCluster#ReaderEndpoint
   */
  readonly readerEndpoint?: string;

  /**
   * @schema NeptuneDbCluster#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema NeptuneDbCluster#Engine
   */
  readonly engine?: string;

  /**
   * @schema NeptuneDbCluster#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema NeptuneDbCluster#LatestRestorableTime
   */
  readonly latestRestorableTime?: string;

  /**
   * @schema NeptuneDbCluster#Port
   */
  readonly port?: number;

  /**
   * @schema NeptuneDbCluster#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema NeptuneDbCluster#DBClusterOptionGroupMemberships
   */
  readonly dbClusterOptionGroupMemberships?: NeptuneDbClusterOptionGroupStatus[];

  /**
   * @schema NeptuneDbCluster#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema NeptuneDbCluster#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema NeptuneDbCluster#ReplicationSourceIdentifier
   */
  readonly replicationSourceIdentifier?: string;

  /**
   * @schema NeptuneDbCluster#ReadReplicaIdentifiers
   */
  readonly readReplicaIdentifiers?: string[];

  /**
   * @schema NeptuneDbCluster#DBClusterMembers
   */
  readonly dbClusterMembers?: NeptuneDbClusterMember[];

  /**
   * @schema NeptuneDbCluster#VpcSecurityGroups
   */
  readonly vpcSecurityGroups?: NeptuneVpcSecurityGroupMembership[];

  /**
   * @schema NeptuneDbCluster#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema NeptuneDbCluster#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema NeptuneDbCluster#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema NeptuneDbCluster#DbClusterResourceId
   */
  readonly dbClusterResourceId?: string;

  /**
   * @schema NeptuneDbCluster#DBClusterArn
   */
  readonly dbClusterArn?: string;

  /**
   * @schema NeptuneDbCluster#AssociatedRoles
   */
  readonly associatedRoles?: NeptuneDbClusterRole[];

  /**
   * @schema NeptuneDbCluster#IAMDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

  /**
   * @schema NeptuneDbCluster#CloneGroupId
   */
  readonly cloneGroupId?: string;

  /**
   * @schema NeptuneDbCluster#ClusterCreateTime
   */
  readonly clusterCreateTime?: string;

  /**
   * @schema NeptuneDbCluster#EnabledCloudwatchLogsExports
   */
  readonly enabledCloudwatchLogsExports?: string[];

  /**
   * @schema NeptuneDbCluster#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * @schema NeptuneDbInstance
 */
export interface NeptuneDbInstance {
  /**
   * @schema NeptuneDbInstance#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema NeptuneDbInstance#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema NeptuneDbInstance#Engine
   */
  readonly engine?: string;

  /**
   * @schema NeptuneDbInstance#DBInstanceStatus
   */
  readonly dbInstanceStatus?: string;

  /**
   * @schema NeptuneDbInstance#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema NeptuneDbInstance#DBName
   */
  readonly dbName?: string;

  /**
   * @schema NeptuneDbInstance#Endpoint
   */
  readonly endpoint?: NeptuneEndpoint;

  /**
   * @schema NeptuneDbInstance#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema NeptuneDbInstance#InstanceCreateTime
   */
  readonly instanceCreateTime?: string;

  /**
   * @schema NeptuneDbInstance#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema NeptuneDbInstance#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema NeptuneDbInstance#DBSecurityGroups
   */
  readonly dbSecurityGroups?: NeptuneDbSecurityGroupMembership[];

  /**
   * @schema NeptuneDbInstance#VpcSecurityGroups
   */
  readonly vpcSecurityGroups?: NeptuneVpcSecurityGroupMembership[];

  /**
   * @schema NeptuneDbInstance#DBParameterGroups
   */
  readonly dbParameterGroups?: NeptuneDbParameterGroupStatus[];

  /**
   * @schema NeptuneDbInstance#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema NeptuneDbInstance#DBSubnetGroup
   */
  readonly dbSubnetGroup?: NeptuneDbSubnetGroup;

  /**
   * @schema NeptuneDbInstance#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema NeptuneDbInstance#PendingModifiedValues
   */
  readonly pendingModifiedValues?: NeptunePendingModifiedValues;

  /**
   * @schema NeptuneDbInstance#LatestRestorableTime
   */
  readonly latestRestorableTime?: string;

  /**
   * @schema NeptuneDbInstance#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema NeptuneDbInstance#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema NeptuneDbInstance#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema NeptuneDbInstance#ReadReplicaSourceDBInstanceIdentifier
   */
  readonly readReplicaSourceDbInstanceIdentifier?: string;

  /**
   * @schema NeptuneDbInstance#ReadReplicaDBInstanceIdentifiers
   */
  readonly readReplicaDbInstanceIdentifiers?: string[];

  /**
   * @schema NeptuneDbInstance#ReadReplicaDBClusterIdentifiers
   */
  readonly readReplicaDbClusterIdentifiers?: string[];

  /**
   * @schema NeptuneDbInstance#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema NeptuneDbInstance#Iops
   */
  readonly iops?: number;

  /**
   * @schema NeptuneDbInstance#OptionGroupMemberships
   */
  readonly optionGroupMemberships?: NeptuneOptionGroupMembership[];

  /**
   * @schema NeptuneDbInstance#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema NeptuneDbInstance#SecondaryAvailabilityZone
   */
  readonly secondaryAvailabilityZone?: string;

  /**
   * @schema NeptuneDbInstance#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema NeptuneDbInstance#StatusInfos
   */
  readonly statusInfos?: NeptuneDbInstanceStatusInfo[];

  /**
   * @schema NeptuneDbInstance#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema NeptuneDbInstance#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema NeptuneDbInstance#DbInstancePort
   */
  readonly dbInstancePort?: number;

  /**
   * @schema NeptuneDbInstance#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema NeptuneDbInstance#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema NeptuneDbInstance#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema NeptuneDbInstance#DbiResourceId
   */
  readonly dbiResourceId?: string;

  /**
   * @schema NeptuneDbInstance#CACertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

  /**
   * @schema NeptuneDbInstance#DomainMemberships
   */
  readonly domainMemberships?: NeptuneDomainMembership[];

  /**
   * @schema NeptuneDbInstance#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema NeptuneDbInstance#MonitoringInterval
   */
  readonly monitoringInterval?: number;

  /**
   * @schema NeptuneDbInstance#EnhancedMonitoringResourceArn
   */
  readonly enhancedMonitoringResourceArn?: string;

  /**
   * @schema NeptuneDbInstance#MonitoringRoleArn
   */
  readonly monitoringRoleArn?: string;

  /**
   * @schema NeptuneDbInstance#PromotionTier
   */
  readonly promotionTier?: number;

  /**
   * @schema NeptuneDbInstance#DBInstanceArn
   */
  readonly dbInstanceArn?: string;

  /**
   * @schema NeptuneDbInstance#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema NeptuneDbInstance#IAMDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

  /**
   * @schema NeptuneDbInstance#PerformanceInsightsEnabled
   */
  readonly performanceInsightsEnabled?: boolean;

  /**
   * @schema NeptuneDbInstance#PerformanceInsightsKMSKeyId
   */
  readonly performanceInsightsKmsKeyId?: string;

  /**
   * @schema NeptuneDbInstance#EnabledCloudwatchLogsExports
   */
  readonly enabledCloudwatchLogsExports?: string[];

  /**
   * @schema NeptuneDbInstance#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * @schema NeptuneDbSubnetGroup
 */
export interface NeptuneDbSubnetGroup {
  /**
   * @schema NeptuneDbSubnetGroup#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema NeptuneDbSubnetGroup#DBSubnetGroupDescription
   */
  readonly dbSubnetGroupDescription?: string;

  /**
   * @schema NeptuneDbSubnetGroup#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema NeptuneDbSubnetGroup#SubnetGroupStatus
   */
  readonly subnetGroupStatus?: string;

  /**
   * @schema NeptuneDbSubnetGroup#Subnets
   */
  readonly subnets?: NeptuneSubnet[];

  /**
   * @schema NeptuneDbSubnetGroup#DBSubnetGroupArn
   */
  readonly dbSubnetGroupArn?: string;

}

/**
 * @schema NeptuneFilter
 */
export interface NeptuneFilter {
  /**
   * @schema NeptuneFilter#Name
   */
  readonly name: string;

  /**
   * @schema NeptuneFilter#Values
   */
  readonly values: string[];

}

/**
 * @schema NeptuneDbClusterEndpoint
 */
export interface NeptuneDbClusterEndpoint {
  /**
   * @schema NeptuneDbClusterEndpoint#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier?: string;

  /**
   * @schema NeptuneDbClusterEndpoint#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema NeptuneDbClusterEndpoint#DBClusterEndpointResourceIdentifier
   */
  readonly dbClusterEndpointResourceIdentifier?: string;

  /**
   * @schema NeptuneDbClusterEndpoint#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema NeptuneDbClusterEndpoint#Status
   */
  readonly status?: string;

  /**
   * @schema NeptuneDbClusterEndpoint#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema NeptuneDbClusterEndpoint#CustomEndpointType
   */
  readonly customEndpointType?: string;

  /**
   * @schema NeptuneDbClusterEndpoint#StaticMembers
   */
  readonly staticMembers?: string[];

  /**
   * @schema NeptuneDbClusterEndpoint#ExcludedMembers
   */
  readonly excludedMembers?: string[];

  /**
   * @schema NeptuneDbClusterEndpoint#DBClusterEndpointArn
   */
  readonly dbClusterEndpointArn?: string;

}

/**
 * @schema NeptuneParameter
 */
export interface NeptuneParameter {
  /**
   * @schema NeptuneParameter#ParameterName
   */
  readonly parameterName?: string;

  /**
   * @schema NeptuneParameter#ParameterValue
   */
  readonly parameterValue?: string;

  /**
   * @schema NeptuneParameter#Description
   */
  readonly description?: string;

  /**
   * @schema NeptuneParameter#Source
   */
  readonly source?: string;

  /**
   * @schema NeptuneParameter#ApplyType
   */
  readonly applyType?: string;

  /**
   * @schema NeptuneParameter#DataType
   */
  readonly dataType?: string;

  /**
   * @schema NeptuneParameter#AllowedValues
   */
  readonly allowedValues?: string;

  /**
   * @schema NeptuneParameter#IsModifiable
   */
  readonly isModifiable?: boolean;

  /**
   * @schema NeptuneParameter#MinimumEngineVersion
   */
  readonly minimumEngineVersion?: string;

  /**
   * @schema NeptuneParameter#ApplyMethod
   */
  readonly applyMethod?: string;

}

/**
 * @schema NeptuneDbClusterSnapshotAttributesResult
 */
export interface NeptuneDbClusterSnapshotAttributesResult {
  /**
   * @schema NeptuneDbClusterSnapshotAttributesResult#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

  /**
   * @schema NeptuneDbClusterSnapshotAttributesResult#DBClusterSnapshotAttributes
   */
  readonly dbClusterSnapshotAttributes?: NeptuneDbClusterSnapshotAttribute[];

}

/**
 * @schema NeptuneDbEngineVersion
 */
export interface NeptuneDbEngineVersion {
  /**
   * @schema NeptuneDbEngineVersion#Engine
   */
  readonly engine?: string;

  /**
   * @schema NeptuneDbEngineVersion#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema NeptuneDbEngineVersion#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema NeptuneDbEngineVersion#DBEngineDescription
   */
  readonly dbEngineDescription?: string;

  /**
   * @schema NeptuneDbEngineVersion#DBEngineVersionDescription
   */
  readonly dbEngineVersionDescription?: string;

  /**
   * @schema NeptuneDbEngineVersion#DefaultCharacterSet
   */
  readonly defaultCharacterSet?: NeptuneCharacterSet;

  /**
   * @schema NeptuneDbEngineVersion#SupportedCharacterSets
   */
  readonly supportedCharacterSets?: NeptuneCharacterSet[];

  /**
   * @schema NeptuneDbEngineVersion#ValidUpgradeTarget
   */
  readonly validUpgradeTarget?: NeptuneUpgradeTarget[];

  /**
   * @schema NeptuneDbEngineVersion#SupportedTimezones
   */
  readonly supportedTimezones?: NeptuneTimezone[];

  /**
   * @schema NeptuneDbEngineVersion#ExportableLogTypes
   */
  readonly exportableLogTypes?: string[];

  /**
   * @schema NeptuneDbEngineVersion#SupportsLogExportsToCloudwatchLogs
   */
  readonly supportsLogExportsToCloudwatchLogs?: boolean;

  /**
   * @schema NeptuneDbEngineVersion#SupportsReadReplica
   */
  readonly supportsReadReplica?: boolean;

}

/**
 * @schema NeptuneEngineDefaults
 */
export interface NeptuneEngineDefaults {
  /**
   * @schema NeptuneEngineDefaults#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema NeptuneEngineDefaults#Marker
   */
  readonly marker?: string;

  /**
   * @schema NeptuneEngineDefaults#Parameters
   */
  readonly parameters?: NeptuneParameter[];

}

/**
 * @schema NeptuneEventCategoriesMap
 */
export interface NeptuneEventCategoriesMap {
  /**
   * @schema NeptuneEventCategoriesMap#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema NeptuneEventCategoriesMap#EventCategories
   */
  readonly eventCategories?: string[];

}

/**
 * @schema NeptuneEvent
 */
export interface NeptuneEvent {
  /**
   * @schema NeptuneEvent#SourceIdentifier
   */
  readonly sourceIdentifier?: string;

  /**
   * @schema NeptuneEvent#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema NeptuneEvent#Message
   */
  readonly message?: string;

  /**
   * @schema NeptuneEvent#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema NeptuneEvent#Date
   */
  readonly date?: string;

  /**
   * @schema NeptuneEvent#SourceArn
   */
  readonly sourceArn?: string;

}

/**
 * @schema NeptuneOrderableDbInstanceOption
 */
export interface NeptuneOrderableDbInstanceOption {
  /**
   * @schema NeptuneOrderableDbInstanceOption#Engine
   */
  readonly engine?: string;

  /**
   * @schema NeptuneOrderableDbInstanceOption#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema NeptuneOrderableDbInstanceOption#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema NeptuneOrderableDbInstanceOption#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema NeptuneOrderableDbInstanceOption#AvailabilityZones
   */
  readonly availabilityZones?: NeptuneAvailabilityZone[];

  /**
   * @schema NeptuneOrderableDbInstanceOption#MultiAZCapable
   */
  readonly multiAzCapable?: boolean;

  /**
   * @schema NeptuneOrderableDbInstanceOption#ReadReplicaCapable
   */
  readonly readReplicaCapable?: boolean;

  /**
   * @schema NeptuneOrderableDbInstanceOption#Vpc
   */
  readonly vpc?: boolean;

  /**
   * @schema NeptuneOrderableDbInstanceOption#SupportsStorageEncryption
   */
  readonly supportsStorageEncryption?: boolean;

  /**
   * @schema NeptuneOrderableDbInstanceOption#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema NeptuneOrderableDbInstanceOption#SupportsIops
   */
  readonly supportsIops?: boolean;

  /**
   * @schema NeptuneOrderableDbInstanceOption#SupportsEnhancedMonitoring
   */
  readonly supportsEnhancedMonitoring?: boolean;

  /**
   * @schema NeptuneOrderableDbInstanceOption#SupportsIAMDatabaseAuthentication
   */
  readonly supportsIamDatabaseAuthentication?: boolean;

  /**
   * @schema NeptuneOrderableDbInstanceOption#SupportsPerformanceInsights
   */
  readonly supportsPerformanceInsights?: boolean;

  /**
   * @schema NeptuneOrderableDbInstanceOption#MinStorageSize
   */
  readonly minStorageSize?: number;

  /**
   * @schema NeptuneOrderableDbInstanceOption#MaxStorageSize
   */
  readonly maxStorageSize?: number;

  /**
   * @schema NeptuneOrderableDbInstanceOption#MinIopsPerDbInstance
   */
  readonly minIopsPerDbInstance?: number;

  /**
   * @schema NeptuneOrderableDbInstanceOption#MaxIopsPerDbInstance
   */
  readonly maxIopsPerDbInstance?: number;

  /**
   * @schema NeptuneOrderableDbInstanceOption#MinIopsPerGib
   */
  readonly minIopsPerGib?: number;

  /**
   * @schema NeptuneOrderableDbInstanceOption#MaxIopsPerGib
   */
  readonly maxIopsPerGib?: number;

}

/**
 * @schema NeptuneValidDbInstanceModificationsMessage
 */
export interface NeptuneValidDbInstanceModificationsMessage {
  /**
   * @schema NeptuneValidDbInstanceModificationsMessage#Storage
   */
  readonly storage?: NeptuneValidStorageOptions[];

}

/**
 * @schema NeptuneCloudwatchLogsExportConfiguration
 */
export interface NeptuneCloudwatchLogsExportConfiguration {
  /**
   * @schema NeptuneCloudwatchLogsExportConfiguration#EnableLogTypes
   */
  readonly enableLogTypes?: string[];

  /**
   * @schema NeptuneCloudwatchLogsExportConfiguration#DisableLogTypes
   */
  readonly disableLogTypes?: string[];

}

/**
 * @schema NeptunePendingMaintenanceAction
 */
export interface NeptunePendingMaintenanceAction {
  /**
   * @schema NeptunePendingMaintenanceAction#Action
   */
  readonly action?: string;

  /**
   * @schema NeptunePendingMaintenanceAction#AutoAppliedAfterDate
   */
  readonly autoAppliedAfterDate?: string;

  /**
   * @schema NeptunePendingMaintenanceAction#ForcedApplyDate
   */
  readonly forcedApplyDate?: string;

  /**
   * @schema NeptunePendingMaintenanceAction#OptInStatus
   */
  readonly optInStatus?: string;

  /**
   * @schema NeptunePendingMaintenanceAction#CurrentApplyDate
   */
  readonly currentApplyDate?: string;

  /**
   * @schema NeptunePendingMaintenanceAction#Description
   */
  readonly description?: string;

}

/**
 * @schema NeptuneDbClusterOptionGroupStatus
 */
export interface NeptuneDbClusterOptionGroupStatus {
  /**
   * @schema NeptuneDbClusterOptionGroupStatus#DBClusterOptionGroupName
   */
  readonly dbClusterOptionGroupName?: string;

  /**
   * @schema NeptuneDbClusterOptionGroupStatus#Status
   */
  readonly status?: string;

}

/**
 * @schema NeptuneDbClusterMember
 */
export interface NeptuneDbClusterMember {
  /**
   * @schema NeptuneDbClusterMember#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema NeptuneDbClusterMember#IsClusterWriter
   */
  readonly isClusterWriter?: boolean;

  /**
   * @schema NeptuneDbClusterMember#DBClusterParameterGroupStatus
   */
  readonly dbClusterParameterGroupStatus?: string;

  /**
   * @schema NeptuneDbClusterMember#PromotionTier
   */
  readonly promotionTier?: number;

}

/**
 * @schema NeptuneVpcSecurityGroupMembership
 */
export interface NeptuneVpcSecurityGroupMembership {
  /**
   * @schema NeptuneVpcSecurityGroupMembership#VpcSecurityGroupId
   */
  readonly vpcSecurityGroupId?: string;

  /**
   * @schema NeptuneVpcSecurityGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * @schema NeptuneDbClusterRole
 */
export interface NeptuneDbClusterRole {
  /**
   * @schema NeptuneDbClusterRole#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema NeptuneDbClusterRole#Status
   */
  readonly status?: string;

  /**
   * @schema NeptuneDbClusterRole#FeatureName
   */
  readonly featureName?: string;

}

/**
 * @schema NeptuneEndpoint
 */
export interface NeptuneEndpoint {
  /**
   * @schema NeptuneEndpoint#Address
   */
  readonly address?: string;

  /**
   * @schema NeptuneEndpoint#Port
   */
  readonly port?: number;

  /**
   * @schema NeptuneEndpoint#HostedZoneId
   */
  readonly hostedZoneId?: string;

}

/**
 * @schema NeptuneDbSecurityGroupMembership
 */
export interface NeptuneDbSecurityGroupMembership {
  /**
   * @schema NeptuneDbSecurityGroupMembership#DBSecurityGroupName
   */
  readonly dbSecurityGroupName?: string;

  /**
   * @schema NeptuneDbSecurityGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * @schema NeptuneDbParameterGroupStatus
 */
export interface NeptuneDbParameterGroupStatus {
  /**
   * @schema NeptuneDbParameterGroupStatus#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema NeptuneDbParameterGroupStatus#ParameterApplyStatus
   */
  readonly parameterApplyStatus?: string;

}

/**
 * @schema NeptunePendingModifiedValues
 */
export interface NeptunePendingModifiedValues {
  /**
   * @schema NeptunePendingModifiedValues#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema NeptunePendingModifiedValues#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema NeptunePendingModifiedValues#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema NeptunePendingModifiedValues#Port
   */
  readonly port?: number;

  /**
   * @schema NeptunePendingModifiedValues#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema NeptunePendingModifiedValues#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema NeptunePendingModifiedValues#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema NeptunePendingModifiedValues#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema NeptunePendingModifiedValues#Iops
   */
  readonly iops?: number;

  /**
   * @schema NeptunePendingModifiedValues#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema NeptunePendingModifiedValues#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema NeptunePendingModifiedValues#CACertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

  /**
   * @schema NeptunePendingModifiedValues#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema NeptunePendingModifiedValues#PendingCloudwatchLogsExports
   */
  readonly pendingCloudwatchLogsExports?: NeptunePendingCloudwatchLogsExports;

}

/**
 * @schema NeptuneOptionGroupMembership
 */
export interface NeptuneOptionGroupMembership {
  /**
   * @schema NeptuneOptionGroupMembership#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema NeptuneOptionGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * @schema NeptuneDbInstanceStatusInfo
 */
export interface NeptuneDbInstanceStatusInfo {
  /**
   * @schema NeptuneDbInstanceStatusInfo#StatusType
   */
  readonly statusType?: string;

  /**
   * @schema NeptuneDbInstanceStatusInfo#Normal
   */
  readonly normal?: boolean;

  /**
   * @schema NeptuneDbInstanceStatusInfo#Status
   */
  readonly status?: string;

  /**
   * @schema NeptuneDbInstanceStatusInfo#Message
   */
  readonly message?: string;

}

/**
 * @schema NeptuneDomainMembership
 */
export interface NeptuneDomainMembership {
  /**
   * @schema NeptuneDomainMembership#Domain
   */
  readonly domain?: string;

  /**
   * @schema NeptuneDomainMembership#Status
   */
  readonly status?: string;

  /**
   * @schema NeptuneDomainMembership#FQDN
   */
  readonly fqdn?: string;

  /**
   * @schema NeptuneDomainMembership#IAMRoleName
   */
  readonly iamRoleName?: string;

}

/**
 * @schema NeptuneSubnet
 */
export interface NeptuneSubnet {
  /**
   * @schema NeptuneSubnet#SubnetIdentifier
   */
  readonly subnetIdentifier?: string;

  /**
   * @schema NeptuneSubnet#SubnetAvailabilityZone
   */
  readonly subnetAvailabilityZone?: NeptuneAvailabilityZone;

  /**
   * @schema NeptuneSubnet#SubnetStatus
   */
  readonly subnetStatus?: string;

}

/**
 * @schema NeptuneDbClusterSnapshotAttribute
 */
export interface NeptuneDbClusterSnapshotAttribute {
  /**
   * @schema NeptuneDbClusterSnapshotAttribute#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema NeptuneDbClusterSnapshotAttribute#AttributeValues
   */
  readonly attributeValues?: string[];

}

/**
 * @schema NeptuneCharacterSet
 */
export interface NeptuneCharacterSet {
  /**
   * @schema NeptuneCharacterSet#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema NeptuneCharacterSet#CharacterSetDescription
   */
  readonly characterSetDescription?: string;

}

/**
 * @schema NeptuneUpgradeTarget
 */
export interface NeptuneUpgradeTarget {
  /**
   * @schema NeptuneUpgradeTarget#Engine
   */
  readonly engine?: string;

  /**
   * @schema NeptuneUpgradeTarget#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema NeptuneUpgradeTarget#Description
   */
  readonly description?: string;

  /**
   * @schema NeptuneUpgradeTarget#AutoUpgrade
   */
  readonly autoUpgrade?: boolean;

  /**
   * @schema NeptuneUpgradeTarget#IsMajorVersionUpgrade
   */
  readonly isMajorVersionUpgrade?: boolean;

}

/**
 * @schema NeptuneTimezone
 */
export interface NeptuneTimezone {
  /**
   * @schema NeptuneTimezone#TimezoneName
   */
  readonly timezoneName?: string;

}

/**
 * @schema NeptuneAvailabilityZone
 */
export interface NeptuneAvailabilityZone {
  /**
   * @schema NeptuneAvailabilityZone#Name
   */
  readonly name?: string;

}

/**
 * @schema NeptuneValidStorageOptions
 */
export interface NeptuneValidStorageOptions {
  /**
   * @schema NeptuneValidStorageOptions#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema NeptuneValidStorageOptions#StorageSize
   */
  readonly storageSize?: NeptuneRange[];

  /**
   * @schema NeptuneValidStorageOptions#ProvisionedIops
   */
  readonly provisionedIops?: NeptuneRange[];

  /**
   * @schema NeptuneValidStorageOptions#IopsToStorageRatio
   */
  readonly iopsToStorageRatio?: NeptuneDoubleRange[];

}

/**
 * @schema NeptunePendingCloudwatchLogsExports
 */
export interface NeptunePendingCloudwatchLogsExports {
  /**
   * @schema NeptunePendingCloudwatchLogsExports#LogTypesToEnable
   */
  readonly logTypesToEnable?: string[];

  /**
   * @schema NeptunePendingCloudwatchLogsExports#LogTypesToDisable
   */
  readonly logTypesToDisable?: string[];

}

/**
 * @schema NeptuneRange
 */
export interface NeptuneRange {
  /**
   * @schema NeptuneRange#From
   */
  readonly from?: number;

  /**
   * @schema NeptuneRange#To
   */
  readonly to?: number;

  /**
   * @schema NeptuneRange#Step
   */
  readonly step?: number;

}

/**
 * @schema NeptuneDoubleRange
 */
export interface NeptuneDoubleRange {
  /**
   * @schema NeptuneDoubleRange#From
   */
  readonly from?: number;

  /**
   * @schema NeptuneDoubleRange#To
   */
  readonly to?: number;

}
