/**
 * @schema DocDbAddTagsToResourceMessage
 */
export interface DocDbAddTagsToResourceMessage {
  /**
   * @schema DocDbAddTagsToResourceMessage#ResourceName
   */
  readonly resourceName: string;

  /**
   * @schema DocDbAddTagsToResourceMessage#Tags
   */
  readonly tags: DocDbTag[];

}

/**
 * @schema DocDbApplyPendingMaintenanceActionMessage
 */
export interface DocDbApplyPendingMaintenanceActionMessage {
  /**
   * @schema DocDbApplyPendingMaintenanceActionMessage#ResourceIdentifier
   */
  readonly resourceIdentifier: string;

  /**
   * @schema DocDbApplyPendingMaintenanceActionMessage#ApplyAction
   */
  readonly applyAction: string;

  /**
   * @schema DocDbApplyPendingMaintenanceActionMessage#OptInType
   */
  readonly optInType: string;

}

/**
 * @schema DocDbApplyPendingMaintenanceActionResult
 */
export interface DocDbApplyPendingMaintenanceActionResult {
  /**
   * @schema DocDbApplyPendingMaintenanceActionResult#ResourcePendingMaintenanceActions
   */
  readonly resourcePendingMaintenanceActions?: DocDbResourcePendingMaintenanceActions;

}

/**
 * @schema DocDbCopyDbClusterParameterGroupMessage
 */
export interface DocDbCopyDbClusterParameterGroupMessage {
  /**
   * @schema DocDbCopyDbClusterParameterGroupMessage#SourceDBClusterParameterGroupIdentifier
   */
  readonly sourceDbClusterParameterGroupIdentifier: string;

  /**
   * @schema DocDbCopyDbClusterParameterGroupMessage#TargetDBClusterParameterGroupIdentifier
   */
  readonly targetDbClusterParameterGroupIdentifier: string;

  /**
   * @schema DocDbCopyDbClusterParameterGroupMessage#TargetDBClusterParameterGroupDescription
   */
  readonly targetDbClusterParameterGroupDescription: string;

  /**
   * @schema DocDbCopyDbClusterParameterGroupMessage#Tags
   */
  readonly tags?: DocDbTag[];

}

/**
 * @schema DocDbCopyDbClusterParameterGroupResult
 */
export interface DocDbCopyDbClusterParameterGroupResult {
  /**
   * @schema DocDbCopyDbClusterParameterGroupResult#DBClusterParameterGroup
   */
  readonly dbClusterParameterGroup?: DocDbdbClusterParameterGroup;

}

/**
 * @schema DocDbCopyDbClusterSnapshotMessage
 */
export interface DocDbCopyDbClusterSnapshotMessage {
  /**
   * @schema DocDbCopyDbClusterSnapshotMessage#SourceDBClusterSnapshotIdentifier
   */
  readonly sourceDbClusterSnapshotIdentifier: string;

  /**
   * @schema DocDbCopyDbClusterSnapshotMessage#TargetDBClusterSnapshotIdentifier
   */
  readonly targetDbClusterSnapshotIdentifier: string;

  /**
   * @schema DocDbCopyDbClusterSnapshotMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema DocDbCopyDbClusterSnapshotMessage#PreSignedUrl
   */
  readonly preSignedUrl?: string;

  /**
   * @schema DocDbCopyDbClusterSnapshotMessage#CopyTags
   */
  readonly copyTags?: boolean;

  /**
   * @schema DocDbCopyDbClusterSnapshotMessage#Tags
   */
  readonly tags?: DocDbTag[];

}

/**
 * @schema DocDbCopyDbClusterSnapshotResult
 */
export interface DocDbCopyDbClusterSnapshotResult {
  /**
   * @schema DocDbCopyDbClusterSnapshotResult#DBClusterSnapshot
   */
  readonly dbClusterSnapshot?: DocDbdbClusterSnapshot;

}

/**
 * @schema DocDbCreateDbClusterMessage
 */
export interface DocDbCreateDbClusterMessage {
  /**
   * @schema DocDbCreateDbClusterMessage#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema DocDbCreateDbClusterMessage#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema DocDbCreateDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema DocDbCreateDbClusterMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema DocDbCreateDbClusterMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema DocDbCreateDbClusterMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema DocDbCreateDbClusterMessage#Engine
   */
  readonly engine: string;

  /**
   * @schema DocDbCreateDbClusterMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DocDbCreateDbClusterMessage#Port
   */
  readonly port?: number;

  /**
   * @schema DocDbCreateDbClusterMessage#MasterUsername
   */
  readonly masterUsername: string;

  /**
   * @schema DocDbCreateDbClusterMessage#MasterUserPassword
   */
  readonly masterUserPassword: string;

  /**
   * @schema DocDbCreateDbClusterMessage#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema DocDbCreateDbClusterMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema DocDbCreateDbClusterMessage#Tags
   */
  readonly tags?: DocDbTag[];

  /**
   * @schema DocDbCreateDbClusterMessage#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema DocDbCreateDbClusterMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema DocDbCreateDbClusterMessage#PreSignedUrl
   */
  readonly preSignedUrl?: string;

  /**
   * @schema DocDbCreateDbClusterMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema DocDbCreateDbClusterMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * @schema DocDbCreateDbClusterResult
 */
export interface DocDbCreateDbClusterResult {
  /**
   * @schema DocDbCreateDbClusterResult#DBCluster
   */
  readonly dbCluster?: DocDbdbCluster;

}

/**
 * @schema DocDbCreateDbClusterParameterGroupMessage
 */
export interface DocDbCreateDbClusterParameterGroupMessage {
  /**
   * @schema DocDbCreateDbClusterParameterGroupMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName: string;

  /**
   * @schema DocDbCreateDbClusterParameterGroupMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily: string;

  /**
   * @schema DocDbCreateDbClusterParameterGroupMessage#Description
   */
  readonly description: string;

  /**
   * @schema DocDbCreateDbClusterParameterGroupMessage#Tags
   */
  readonly tags?: DocDbTag[];

}

/**
 * @schema DocDbCreateDbClusterParameterGroupResult
 */
export interface DocDbCreateDbClusterParameterGroupResult {
  /**
   * @schema DocDbCreateDbClusterParameterGroupResult#DBClusterParameterGroup
   */
  readonly dbClusterParameterGroup?: DocDbdbClusterParameterGroup;

}

/**
 * @schema DocDbCreateDbClusterSnapshotMessage
 */
export interface DocDbCreateDbClusterSnapshotMessage {
  /**
   * @schema DocDbCreateDbClusterSnapshotMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier: string;

  /**
   * @schema DocDbCreateDbClusterSnapshotMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema DocDbCreateDbClusterSnapshotMessage#Tags
   */
  readonly tags?: DocDbTag[];

}

/**
 * @schema DocDbCreateDbClusterSnapshotResult
 */
export interface DocDbCreateDbClusterSnapshotResult {
  /**
   * @schema DocDbCreateDbClusterSnapshotResult#DBClusterSnapshot
   */
  readonly dbClusterSnapshot?: DocDbdbClusterSnapshot;

}

/**
 * @schema DocDbCreateDbInstanceMessage
 */
export interface DocDbCreateDbInstanceMessage {
  /**
   * @schema DocDbCreateDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema DocDbCreateDbInstanceMessage#DBInstanceClass
   */
  readonly dbInstanceClass: string;

  /**
   * @schema DocDbCreateDbInstanceMessage#Engine
   */
  readonly engine: string;

  /**
   * @schema DocDbCreateDbInstanceMessage#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema DocDbCreateDbInstanceMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema DocDbCreateDbInstanceMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema DocDbCreateDbInstanceMessage#Tags
   */
  readonly tags?: DocDbTag[];

  /**
   * @schema DocDbCreateDbInstanceMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema DocDbCreateDbInstanceMessage#PromotionTier
   */
  readonly promotionTier?: number;

}

/**
 * @schema DocDbCreateDbInstanceResult
 */
export interface DocDbCreateDbInstanceResult {
  /**
   * @schema DocDbCreateDbInstanceResult#DBInstance
   */
  readonly dbInstance?: DocDbdbInstance;

}

/**
 * @schema DocDbCreateDbSubnetGroupMessage
 */
export interface DocDbCreateDbSubnetGroupMessage {
  /**
   * @schema DocDbCreateDbSubnetGroupMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName: string;

  /**
   * @schema DocDbCreateDbSubnetGroupMessage#DBSubnetGroupDescription
   */
  readonly dbSubnetGroupDescription: string;

  /**
   * @schema DocDbCreateDbSubnetGroupMessage#SubnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema DocDbCreateDbSubnetGroupMessage#Tags
   */
  readonly tags?: DocDbTag[];

}

/**
 * @schema DocDbCreateDbSubnetGroupResult
 */
export interface DocDbCreateDbSubnetGroupResult {
  /**
   * @schema DocDbCreateDbSubnetGroupResult#DBSubnetGroup
   */
  readonly dbSubnetGroup?: DocDbdbSubnetGroup;

}

/**
 * @schema DocDbDeleteDbClusterMessage
 */
export interface DocDbDeleteDbClusterMessage {
  /**
   * @schema DocDbDeleteDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema DocDbDeleteDbClusterMessage#SkipFinalSnapshot
   */
  readonly skipFinalSnapshot?: boolean;

  /**
   * @schema DocDbDeleteDbClusterMessage#FinalDBSnapshotIdentifier
   */
  readonly finalDbSnapshotIdentifier?: string;

}

/**
 * @schema DocDbDeleteDbClusterResult
 */
export interface DocDbDeleteDbClusterResult {
  /**
   * @schema DocDbDeleteDbClusterResult#DBCluster
   */
  readonly dbCluster?: DocDbdbCluster;

}

/**
 * @schema DocDbDeleteDbClusterParameterGroupMessage
 */
export interface DocDbDeleteDbClusterParameterGroupMessage {
  /**
   * @schema DocDbDeleteDbClusterParameterGroupMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName: string;

}

/**
 * @schema DocDbDeleteDbClusterSnapshotMessage
 */
export interface DocDbDeleteDbClusterSnapshotMessage {
  /**
   * @schema DocDbDeleteDbClusterSnapshotMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier: string;

}

/**
 * @schema DocDbDeleteDbClusterSnapshotResult
 */
export interface DocDbDeleteDbClusterSnapshotResult {
  /**
   * @schema DocDbDeleteDbClusterSnapshotResult#DBClusterSnapshot
   */
  readonly dbClusterSnapshot?: DocDbdbClusterSnapshot;

}

/**
 * @schema DocDbDeleteDbInstanceMessage
 */
export interface DocDbDeleteDbInstanceMessage {
  /**
   * @schema DocDbDeleteDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

}

/**
 * @schema DocDbDeleteDbInstanceResult
 */
export interface DocDbDeleteDbInstanceResult {
  /**
   * @schema DocDbDeleteDbInstanceResult#DBInstance
   */
  readonly dbInstance?: DocDbdbInstance;

}

/**
 * @schema DocDbDeleteDbSubnetGroupMessage
 */
export interface DocDbDeleteDbSubnetGroupMessage {
  /**
   * @schema DocDbDeleteDbSubnetGroupMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName: string;

}

/**
 * @schema DocDbDescribeCertificatesMessage
 */
export interface DocDbDescribeCertificatesMessage {
  /**
   * @schema DocDbDescribeCertificatesMessage#CertificateIdentifier
   */
  readonly certificateIdentifier?: string;

  /**
   * @schema DocDbDescribeCertificatesMessage#Filters
   */
  readonly filters?: DocDbFilter[];

  /**
   * @schema DocDbDescribeCertificatesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DocDbDescribeCertificatesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DocDbCertificateMessage
 */
export interface DocDbCertificateMessage {
  /**
   * @schema DocDbCertificateMessage#Certificates
   */
  readonly certificates?: DocDbCertificate[];

  /**
   * @schema DocDbCertificateMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DocDbDescribeDbClusterParameterGroupsMessage
 */
export interface DocDbDescribeDbClusterParameterGroupsMessage {
  /**
   * @schema DocDbDescribeDbClusterParameterGroupsMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema DocDbDescribeDbClusterParameterGroupsMessage#Filters
   */
  readonly filters?: DocDbFilter[];

  /**
   * @schema DocDbDescribeDbClusterParameterGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DocDbDescribeDbClusterParameterGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DocDbdbClusterParameterGroupsMessage
 */
export interface DocDbdbClusterParameterGroupsMessage {
  /**
   * @schema DocDbdbClusterParameterGroupsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DocDbdbClusterParameterGroupsMessage#DBClusterParameterGroups
   */
  readonly dbClusterParameterGroups?: DocDbdbClusterParameterGroup[];

}

/**
 * @schema DocDbDescribeDbClusterParametersMessage
 */
export interface DocDbDescribeDbClusterParametersMessage {
  /**
   * @schema DocDbDescribeDbClusterParametersMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName: string;

  /**
   * @schema DocDbDescribeDbClusterParametersMessage#Source
   */
  readonly source?: string;

  /**
   * @schema DocDbDescribeDbClusterParametersMessage#Filters
   */
  readonly filters?: DocDbFilter[];

  /**
   * @schema DocDbDescribeDbClusterParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DocDbDescribeDbClusterParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DocDbdbClusterParameterGroupDetails
 */
export interface DocDbdbClusterParameterGroupDetails {
  /**
   * @schema DocDbdbClusterParameterGroupDetails#Parameters
   */
  readonly parameters?: DocDbParameter[];

  /**
   * @schema DocDbdbClusterParameterGroupDetails#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DocDbDescribeDbClusterSnapshotAttributesMessage
 */
export interface DocDbDescribeDbClusterSnapshotAttributesMessage {
  /**
   * @schema DocDbDescribeDbClusterSnapshotAttributesMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier: string;

}

/**
 * @schema DocDbDescribeDbClusterSnapshotAttributesResult
 */
export interface DocDbDescribeDbClusterSnapshotAttributesResult {
  /**
   * @schema DocDbDescribeDbClusterSnapshotAttributesResult#DBClusterSnapshotAttributesResult
   */
  readonly dbClusterSnapshotAttributesResult?: DocDbdbClusterSnapshotAttributesResult;

}

/**
 * @schema DocDbDescribeDbClusterSnapshotsMessage
 */
export interface DocDbDescribeDbClusterSnapshotsMessage {
  /**
   * @schema DocDbDescribeDbClusterSnapshotsMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DocDbDescribeDbClusterSnapshotsMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

  /**
   * @schema DocDbDescribeDbClusterSnapshotsMessage#SnapshotType
   */
  readonly snapshotType?: string;

  /**
   * @schema DocDbDescribeDbClusterSnapshotsMessage#Filters
   */
  readonly filters?: DocDbFilter[];

  /**
   * @schema DocDbDescribeDbClusterSnapshotsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DocDbDescribeDbClusterSnapshotsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DocDbDescribeDbClusterSnapshotsMessage#IncludeShared
   */
  readonly includeShared?: boolean;

  /**
   * @schema DocDbDescribeDbClusterSnapshotsMessage#IncludePublic
   */
  readonly includePublic?: boolean;

}

/**
 * @schema DocDbdbClusterSnapshotMessage
 */
export interface DocDbdbClusterSnapshotMessage {
  /**
   * @schema DocDbdbClusterSnapshotMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DocDbdbClusterSnapshotMessage#DBClusterSnapshots
   */
  readonly dbClusterSnapshots?: DocDbdbClusterSnapshot[];

}

/**
 * @schema DocDbDescribeDbClustersMessage
 */
export interface DocDbDescribeDbClustersMessage {
  /**
   * @schema DocDbDescribeDbClustersMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DocDbDescribeDbClustersMessage#Filters
   */
  readonly filters?: DocDbFilter[];

  /**
   * @schema DocDbDescribeDbClustersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DocDbDescribeDbClustersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DocDbdbClusterMessage
 */
export interface DocDbdbClusterMessage {
  /**
   * @schema DocDbdbClusterMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DocDbdbClusterMessage#DBClusters
   */
  readonly dbClusters?: DocDbdbCluster[];

}

/**
 * @schema DocDbDescribeDbEngineVersionsMessage
 */
export interface DocDbDescribeDbEngineVersionsMessage {
  /**
   * @schema DocDbDescribeDbEngineVersionsMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema DocDbDescribeDbEngineVersionsMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DocDbDescribeDbEngineVersionsMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema DocDbDescribeDbEngineVersionsMessage#Filters
   */
  readonly filters?: DocDbFilter[];

  /**
   * @schema DocDbDescribeDbEngineVersionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DocDbDescribeDbEngineVersionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DocDbDescribeDbEngineVersionsMessage#DefaultOnly
   */
  readonly defaultOnly?: boolean;

  /**
   * @schema DocDbDescribeDbEngineVersionsMessage#ListSupportedCharacterSets
   */
  readonly listSupportedCharacterSets?: boolean;

  /**
   * @schema DocDbDescribeDbEngineVersionsMessage#ListSupportedTimezones
   */
  readonly listSupportedTimezones?: boolean;

}

/**
 * @schema DocDbdbEngineVersionMessage
 */
export interface DocDbdbEngineVersionMessage {
  /**
   * @schema DocDbdbEngineVersionMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DocDbdbEngineVersionMessage#DBEngineVersions
   */
  readonly dbEngineVersions?: DocDbdbEngineVersion[];

}

/**
 * @schema DocDbDescribeDbInstancesMessage
 */
export interface DocDbDescribeDbInstancesMessage {
  /**
   * @schema DocDbDescribeDbInstancesMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema DocDbDescribeDbInstancesMessage#Filters
   */
  readonly filters?: DocDbFilter[];

  /**
   * @schema DocDbDescribeDbInstancesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DocDbDescribeDbInstancesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DocDbdbInstanceMessage
 */
export interface DocDbdbInstanceMessage {
  /**
   * @schema DocDbdbInstanceMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DocDbdbInstanceMessage#DBInstances
   */
  readonly dbInstances?: DocDbdbInstance[];

}

/**
 * @schema DocDbDescribeDbSubnetGroupsMessage
 */
export interface DocDbDescribeDbSubnetGroupsMessage {
  /**
   * @schema DocDbDescribeDbSubnetGroupsMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema DocDbDescribeDbSubnetGroupsMessage#Filters
   */
  readonly filters?: DocDbFilter[];

  /**
   * @schema DocDbDescribeDbSubnetGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DocDbDescribeDbSubnetGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DocDbdbSubnetGroupMessage
 */
export interface DocDbdbSubnetGroupMessage {
  /**
   * @schema DocDbdbSubnetGroupMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DocDbdbSubnetGroupMessage#DBSubnetGroups
   */
  readonly dbSubnetGroups?: DocDbdbSubnetGroup[];

}

/**
 * @schema DocDbDescribeEngineDefaultClusterParametersMessage
 */
export interface DocDbDescribeEngineDefaultClusterParametersMessage {
  /**
   * @schema DocDbDescribeEngineDefaultClusterParametersMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily: string;

  /**
   * @schema DocDbDescribeEngineDefaultClusterParametersMessage#Filters
   */
  readonly filters?: DocDbFilter[];

  /**
   * @schema DocDbDescribeEngineDefaultClusterParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DocDbDescribeEngineDefaultClusterParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DocDbDescribeEngineDefaultClusterParametersResult
 */
export interface DocDbDescribeEngineDefaultClusterParametersResult {
  /**
   * @schema DocDbDescribeEngineDefaultClusterParametersResult#EngineDefaults
   */
  readonly engineDefaults?: DocDbEngineDefaults;

}

/**
 * @schema DocDbDescribeEventCategoriesMessage
 */
export interface DocDbDescribeEventCategoriesMessage {
  /**
   * @schema DocDbDescribeEventCategoriesMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema DocDbDescribeEventCategoriesMessage#Filters
   */
  readonly filters?: DocDbFilter[];

}

/**
 * @schema DocDbEventCategoriesMessage
 */
export interface DocDbEventCategoriesMessage {
  /**
   * @schema DocDbEventCategoriesMessage#EventCategoriesMapList
   */
  readonly eventCategoriesMapList?: DocDbEventCategoriesMap[];

}

/**
 * @schema DocDbDescribeEventsMessage
 */
export interface DocDbDescribeEventsMessage {
  /**
   * @schema DocDbDescribeEventsMessage#SourceIdentifier
   */
  readonly sourceIdentifier?: string;

  /**
   * @schema DocDbDescribeEventsMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema DocDbDescribeEventsMessage#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema DocDbDescribeEventsMessage#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema DocDbDescribeEventsMessage#Duration
   */
  readonly duration?: number;

  /**
   * @schema DocDbDescribeEventsMessage#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema DocDbDescribeEventsMessage#Filters
   */
  readonly filters?: DocDbFilter[];

  /**
   * @schema DocDbDescribeEventsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DocDbDescribeEventsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DocDbEventsMessage
 */
export interface DocDbEventsMessage {
  /**
   * @schema DocDbEventsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DocDbEventsMessage#Events
   */
  readonly events?: DocDbEvent[];

}

/**
 * @schema DocDbDescribeOrderableDbInstanceOptionsMessage
 */
export interface DocDbDescribeOrderableDbInstanceOptionsMessage {
  /**
   * @schema DocDbDescribeOrderableDbInstanceOptionsMessage#Engine
   */
  readonly engine: string;

  /**
   * @schema DocDbDescribeOrderableDbInstanceOptionsMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DocDbDescribeOrderableDbInstanceOptionsMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema DocDbDescribeOrderableDbInstanceOptionsMessage#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema DocDbDescribeOrderableDbInstanceOptionsMessage#Vpc
   */
  readonly vpc?: boolean;

  /**
   * @schema DocDbDescribeOrderableDbInstanceOptionsMessage#Filters
   */
  readonly filters?: DocDbFilter[];

  /**
   * @schema DocDbDescribeOrderableDbInstanceOptionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DocDbDescribeOrderableDbInstanceOptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DocDbOrderableDbInstanceOptionsMessage
 */
export interface DocDbOrderableDbInstanceOptionsMessage {
  /**
   * @schema DocDbOrderableDbInstanceOptionsMessage#OrderableDBInstanceOptions
   */
  readonly orderableDbInstanceOptions?: DocDbOrderableDbInstanceOption[];

  /**
   * @schema DocDbOrderableDbInstanceOptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DocDbDescribePendingMaintenanceActionsMessage
 */
export interface DocDbDescribePendingMaintenanceActionsMessage {
  /**
   * @schema DocDbDescribePendingMaintenanceActionsMessage#ResourceIdentifier
   */
  readonly resourceIdentifier?: string;

  /**
   * @schema DocDbDescribePendingMaintenanceActionsMessage#Filters
   */
  readonly filters?: DocDbFilter[];

  /**
   * @schema DocDbDescribePendingMaintenanceActionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DocDbDescribePendingMaintenanceActionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema DocDbPendingMaintenanceActionsMessage
 */
export interface DocDbPendingMaintenanceActionsMessage {
  /**
   * @schema DocDbPendingMaintenanceActionsMessage#PendingMaintenanceActions
   */
  readonly pendingMaintenanceActions?: DocDbResourcePendingMaintenanceActions[];

  /**
   * @schema DocDbPendingMaintenanceActionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DocDbFailoverDbClusterMessage
 */
export interface DocDbFailoverDbClusterMessage {
  /**
   * @schema DocDbFailoverDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DocDbFailoverDbClusterMessage#TargetDBInstanceIdentifier
   */
  readonly targetDbInstanceIdentifier?: string;

}

/**
 * @schema DocDbFailoverDbClusterResult
 */
export interface DocDbFailoverDbClusterResult {
  /**
   * @schema DocDbFailoverDbClusterResult#DBCluster
   */
  readonly dbCluster?: DocDbdbCluster;

}

/**
 * @schema DocDbListTagsForResourceMessage
 */
export interface DocDbListTagsForResourceMessage {
  /**
   * @schema DocDbListTagsForResourceMessage#ResourceName
   */
  readonly resourceName: string;

  /**
   * @schema DocDbListTagsForResourceMessage#Filters
   */
  readonly filters?: DocDbFilter[];

}

/**
 * @schema DocDbTagListMessage
 */
export interface DocDbTagListMessage {
  /**
   * @schema DocDbTagListMessage#TagList
   */
  readonly tagList?: DocDbTag[];

}

/**
 * @schema DocDbModifyDbClusterMessage
 */
export interface DocDbModifyDbClusterMessage {
  /**
   * @schema DocDbModifyDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema DocDbModifyDbClusterMessage#NewDBClusterIdentifier
   */
  readonly newDbClusterIdentifier?: string;

  /**
   * @schema DocDbModifyDbClusterMessage#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

  /**
   * @schema DocDbModifyDbClusterMessage#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema DocDbModifyDbClusterMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema DocDbModifyDbClusterMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema DocDbModifyDbClusterMessage#Port
   */
  readonly port?: number;

  /**
   * @schema DocDbModifyDbClusterMessage#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema DocDbModifyDbClusterMessage#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema DocDbModifyDbClusterMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema DocDbModifyDbClusterMessage#CloudwatchLogsExportConfiguration
   */
  readonly cloudwatchLogsExportConfiguration?: DocDbCloudwatchLogsExportConfiguration;

  /**
   * @schema DocDbModifyDbClusterMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DocDbModifyDbClusterMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * @schema DocDbModifyDbClusterResult
 */
export interface DocDbModifyDbClusterResult {
  /**
   * @schema DocDbModifyDbClusterResult#DBCluster
   */
  readonly dbCluster?: DocDbdbCluster;

}

/**
 * @schema DocDbModifyDbClusterParameterGroupMessage
 */
export interface DocDbModifyDbClusterParameterGroupMessage {
  /**
   * @schema DocDbModifyDbClusterParameterGroupMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName: string;

  /**
   * @schema DocDbModifyDbClusterParameterGroupMessage#Parameters
   */
  readonly parameters: DocDbParameter[];

}

/**
 * @schema DocDbdbClusterParameterGroupNameMessage
 */
export interface DocDbdbClusterParameterGroupNameMessage {
  /**
   * @schema DocDbdbClusterParameterGroupNameMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

}

/**
 * @schema DocDbModifyDbClusterSnapshotAttributeMessage
 */
export interface DocDbModifyDbClusterSnapshotAttributeMessage {
  /**
   * @schema DocDbModifyDbClusterSnapshotAttributeMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier: string;

  /**
   * @schema DocDbModifyDbClusterSnapshotAttributeMessage#AttributeName
   */
  readonly attributeName: string;

  /**
   * @schema DocDbModifyDbClusterSnapshotAttributeMessage#ValuesToAdd
   */
  readonly valuesToAdd?: string[];

  /**
   * @schema DocDbModifyDbClusterSnapshotAttributeMessage#ValuesToRemove
   */
  readonly valuesToRemove?: string[];

}

/**
 * @schema DocDbModifyDbClusterSnapshotAttributeResult
 */
export interface DocDbModifyDbClusterSnapshotAttributeResult {
  /**
   * @schema DocDbModifyDbClusterSnapshotAttributeResult#DBClusterSnapshotAttributesResult
   */
  readonly dbClusterSnapshotAttributesResult?: DocDbdbClusterSnapshotAttributesResult;

}

/**
 * @schema DocDbModifyDbInstanceMessage
 */
export interface DocDbModifyDbInstanceMessage {
  /**
   * @schema DocDbModifyDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema DocDbModifyDbInstanceMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema DocDbModifyDbInstanceMessage#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

  /**
   * @schema DocDbModifyDbInstanceMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema DocDbModifyDbInstanceMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema DocDbModifyDbInstanceMessage#NewDBInstanceIdentifier
   */
  readonly newDbInstanceIdentifier?: string;

  /**
   * @schema DocDbModifyDbInstanceMessage#CACertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

  /**
   * @schema DocDbModifyDbInstanceMessage#PromotionTier
   */
  readonly promotionTier?: number;

}

/**
 * @schema DocDbModifyDbInstanceResult
 */
export interface DocDbModifyDbInstanceResult {
  /**
   * @schema DocDbModifyDbInstanceResult#DBInstance
   */
  readonly dbInstance?: DocDbdbInstance;

}

/**
 * @schema DocDbModifyDbSubnetGroupMessage
 */
export interface DocDbModifyDbSubnetGroupMessage {
  /**
   * @schema DocDbModifyDbSubnetGroupMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName: string;

  /**
   * @schema DocDbModifyDbSubnetGroupMessage#DBSubnetGroupDescription
   */
  readonly dbSubnetGroupDescription?: string;

  /**
   * @schema DocDbModifyDbSubnetGroupMessage#SubnetIds
   */
  readonly subnetIds: string[];

}

/**
 * @schema DocDbModifyDbSubnetGroupResult
 */
export interface DocDbModifyDbSubnetGroupResult {
  /**
   * @schema DocDbModifyDbSubnetGroupResult#DBSubnetGroup
   */
  readonly dbSubnetGroup?: DocDbdbSubnetGroup;

}

/**
 * @schema DocDbRebootDbInstanceMessage
 */
export interface DocDbRebootDbInstanceMessage {
  /**
   * @schema DocDbRebootDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema DocDbRebootDbInstanceMessage#ForceFailover
   */
  readonly forceFailover?: boolean;

}

/**
 * @schema DocDbRebootDbInstanceResult
 */
export interface DocDbRebootDbInstanceResult {
  /**
   * @schema DocDbRebootDbInstanceResult#DBInstance
   */
  readonly dbInstance?: DocDbdbInstance;

}

/**
 * @schema DocDbRemoveTagsFromResourceMessage
 */
export interface DocDbRemoveTagsFromResourceMessage {
  /**
   * @schema DocDbRemoveTagsFromResourceMessage#ResourceName
   */
  readonly resourceName: string;

  /**
   * @schema DocDbRemoveTagsFromResourceMessage#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema DocDbResetDbClusterParameterGroupMessage
 */
export interface DocDbResetDbClusterParameterGroupMessage {
  /**
   * @schema DocDbResetDbClusterParameterGroupMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName: string;

  /**
   * @schema DocDbResetDbClusterParameterGroupMessage#ResetAllParameters
   */
  readonly resetAllParameters?: boolean;

  /**
   * @schema DocDbResetDbClusterParameterGroupMessage#Parameters
   */
  readonly parameters?: DocDbParameter[];

}

/**
 * @schema DocDbRestoreDbClusterFromSnapshotMessage
 */
export interface DocDbRestoreDbClusterFromSnapshotMessage {
  /**
   * @schema DocDbRestoreDbClusterFromSnapshotMessage#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema DocDbRestoreDbClusterFromSnapshotMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema DocDbRestoreDbClusterFromSnapshotMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier: string;

  /**
   * @schema DocDbRestoreDbClusterFromSnapshotMessage#Engine
   */
  readonly engine: string;

  /**
   * @schema DocDbRestoreDbClusterFromSnapshotMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DocDbRestoreDbClusterFromSnapshotMessage#Port
   */
  readonly port?: number;

  /**
   * @schema DocDbRestoreDbClusterFromSnapshotMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema DocDbRestoreDbClusterFromSnapshotMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema DocDbRestoreDbClusterFromSnapshotMessage#Tags
   */
  readonly tags?: DocDbTag[];

  /**
   * @schema DocDbRestoreDbClusterFromSnapshotMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema DocDbRestoreDbClusterFromSnapshotMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema DocDbRestoreDbClusterFromSnapshotMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * @schema DocDbRestoreDbClusterFromSnapshotResult
 */
export interface DocDbRestoreDbClusterFromSnapshotResult {
  /**
   * @schema DocDbRestoreDbClusterFromSnapshotResult#DBCluster
   */
  readonly dbCluster?: DocDbdbCluster;

}

/**
 * @schema DocDbRestoreDbClusterToPointInTimeMessage
 */
export interface DocDbRestoreDbClusterToPointInTimeMessage {
  /**
   * @schema DocDbRestoreDbClusterToPointInTimeMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema DocDbRestoreDbClusterToPointInTimeMessage#SourceDBClusterIdentifier
   */
  readonly sourceDbClusterIdentifier: string;

  /**
   * @schema DocDbRestoreDbClusterToPointInTimeMessage#RestoreToTime
   */
  readonly restoreToTime?: string;

  /**
   * @schema DocDbRestoreDbClusterToPointInTimeMessage#UseLatestRestorableTime
   */
  readonly useLatestRestorableTime?: boolean;

  /**
   * @schema DocDbRestoreDbClusterToPointInTimeMessage#Port
   */
  readonly port?: number;

  /**
   * @schema DocDbRestoreDbClusterToPointInTimeMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema DocDbRestoreDbClusterToPointInTimeMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema DocDbRestoreDbClusterToPointInTimeMessage#Tags
   */
  readonly tags?: DocDbTag[];

  /**
   * @schema DocDbRestoreDbClusterToPointInTimeMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema DocDbRestoreDbClusterToPointInTimeMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema DocDbRestoreDbClusterToPointInTimeMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * @schema DocDbRestoreDbClusterToPointInTimeResult
 */
export interface DocDbRestoreDbClusterToPointInTimeResult {
  /**
   * @schema DocDbRestoreDbClusterToPointInTimeResult#DBCluster
   */
  readonly dbCluster?: DocDbdbCluster;

}

/**
 * @schema DocDbStartDbClusterMessage
 */
export interface DocDbStartDbClusterMessage {
  /**
   * @schema DocDbStartDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

}

/**
 * @schema DocDbStartDbClusterResult
 */
export interface DocDbStartDbClusterResult {
  /**
   * @schema DocDbStartDbClusterResult#DBCluster
   */
  readonly dbCluster?: DocDbdbCluster;

}

/**
 * @schema DocDbStopDbClusterMessage
 */
export interface DocDbStopDbClusterMessage {
  /**
   * @schema DocDbStopDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

}

/**
 * @schema DocDbStopDbClusterResult
 */
export interface DocDbStopDbClusterResult {
  /**
   * @schema DocDbStopDbClusterResult#DBCluster
   */
  readonly dbCluster?: DocDbdbCluster;

}

/**
 * @schema DocDbTag
 */
export interface DocDbTag {
  /**
   * @schema DocDbTag#Key
   */
  readonly key?: string;

  /**
   * @schema DocDbTag#Value
   */
  readonly value?: string;

}

/**
 * @schema DocDbResourcePendingMaintenanceActions
 */
export interface DocDbResourcePendingMaintenanceActions {
  /**
   * @schema DocDbResourcePendingMaintenanceActions#ResourceIdentifier
   */
  readonly resourceIdentifier?: string;

  /**
   * @schema DocDbResourcePendingMaintenanceActions#PendingMaintenanceActionDetails
   */
  readonly pendingMaintenanceActionDetails?: DocDbPendingMaintenanceAction[];

}

/**
 * @schema DocDbdbClusterParameterGroup
 */
export interface DocDbdbClusterParameterGroup {
  /**
   * @schema DocDbdbClusterParameterGroup#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema DocDbdbClusterParameterGroup#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema DocDbdbClusterParameterGroup#Description
   */
  readonly description?: string;

  /**
   * @schema DocDbdbClusterParameterGroup#DBClusterParameterGroupArn
   */
  readonly dbClusterParameterGroupArn?: string;

}

/**
 * @schema DocDbdbClusterSnapshot
 */
export interface DocDbdbClusterSnapshot {
  /**
   * @schema DocDbdbClusterSnapshot#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema DocDbdbClusterSnapshot#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

  /**
   * @schema DocDbdbClusterSnapshot#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DocDbdbClusterSnapshot#SnapshotCreateTime
   */
  readonly snapshotCreateTime?: string;

  /**
   * @schema DocDbdbClusterSnapshot#Engine
   */
  readonly engine?: string;

  /**
   * @schema DocDbdbClusterSnapshot#Status
   */
  readonly status?: string;

  /**
   * @schema DocDbdbClusterSnapshot#Port
   */
  readonly port?: number;

  /**
   * @schema DocDbdbClusterSnapshot#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema DocDbdbClusterSnapshot#ClusterCreateTime
   */
  readonly clusterCreateTime?: string;

  /**
   * @schema DocDbdbClusterSnapshot#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema DocDbdbClusterSnapshot#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DocDbdbClusterSnapshot#SnapshotType
   */
  readonly snapshotType?: string;

  /**
   * @schema DocDbdbClusterSnapshot#PercentProgress
   */
  readonly percentProgress?: number;

  /**
   * @schema DocDbdbClusterSnapshot#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema DocDbdbClusterSnapshot#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema DocDbdbClusterSnapshot#DBClusterSnapshotArn
   */
  readonly dbClusterSnapshotArn?: string;

  /**
   * @schema DocDbdbClusterSnapshot#SourceDBClusterSnapshotArn
   */
  readonly sourceDbClusterSnapshotArn?: string;

}

/**
 * @schema DocDbdbCluster
 */
export interface DocDbdbCluster {
  /**
   * @schema DocDbdbCluster#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema DocDbdbCluster#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema DocDbdbCluster#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DocDbdbCluster#DBClusterParameterGroup
   */
  readonly dbClusterParameterGroup?: string;

  /**
   * @schema DocDbdbCluster#DBSubnetGroup
   */
  readonly dbSubnetGroup?: string;

  /**
   * @schema DocDbdbCluster#Status
   */
  readonly status?: string;

  /**
   * @schema DocDbdbCluster#PercentProgress
   */
  readonly percentProgress?: string;

  /**
   * @schema DocDbdbCluster#EarliestRestorableTime
   */
  readonly earliestRestorableTime?: string;

  /**
   * @schema DocDbdbCluster#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema DocDbdbCluster#ReaderEndpoint
   */
  readonly readerEndpoint?: string;

  /**
   * @schema DocDbdbCluster#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema DocDbdbCluster#Engine
   */
  readonly engine?: string;

  /**
   * @schema DocDbdbCluster#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DocDbdbCluster#LatestRestorableTime
   */
  readonly latestRestorableTime?: string;

  /**
   * @schema DocDbdbCluster#Port
   */
  readonly port?: number;

  /**
   * @schema DocDbdbCluster#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema DocDbdbCluster#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema DocDbdbCluster#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema DocDbdbCluster#DBClusterMembers
   */
  readonly dbClusterMembers?: DocDbdbClusterMember[];

  /**
   * @schema DocDbdbCluster#VpcSecurityGroups
   */
  readonly vpcSecurityGroups?: DocDbVpcSecurityGroupMembership[];

  /**
   * @schema DocDbdbCluster#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema DocDbdbCluster#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema DocDbdbCluster#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema DocDbdbCluster#DbClusterResourceId
   */
  readonly dbClusterResourceId?: string;

  /**
   * @schema DocDbdbCluster#DBClusterArn
   */
  readonly dbClusterArn?: string;

  /**
   * @schema DocDbdbCluster#AssociatedRoles
   */
  readonly associatedRoles?: DocDbdbClusterRole[];

  /**
   * @schema DocDbdbCluster#ClusterCreateTime
   */
  readonly clusterCreateTime?: string;

  /**
   * @schema DocDbdbCluster#EnabledCloudwatchLogsExports
   */
  readonly enabledCloudwatchLogsExports?: string[];

  /**
   * @schema DocDbdbCluster#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * @schema DocDbdbInstance
 */
export interface DocDbdbInstance {
  /**
   * @schema DocDbdbInstance#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema DocDbdbInstance#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema DocDbdbInstance#Engine
   */
  readonly engine?: string;

  /**
   * @schema DocDbdbInstance#DBInstanceStatus
   */
  readonly dbInstanceStatus?: string;

  /**
   * @schema DocDbdbInstance#Endpoint
   */
  readonly endpoint?: DocDbEndpoint;

  /**
   * @schema DocDbdbInstance#InstanceCreateTime
   */
  readonly instanceCreateTime?: string;

  /**
   * @schema DocDbdbInstance#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema DocDbdbInstance#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema DocDbdbInstance#VpcSecurityGroups
   */
  readonly vpcSecurityGroups?: DocDbVpcSecurityGroupMembership[];

  /**
   * @schema DocDbdbInstance#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema DocDbdbInstance#DBSubnetGroup
   */
  readonly dbSubnetGroup?: DocDbdbSubnetGroup;

  /**
   * @schema DocDbdbInstance#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema DocDbdbInstance#PendingModifiedValues
   */
  readonly pendingModifiedValues?: DocDbPendingModifiedValues;

  /**
   * @schema DocDbdbInstance#LatestRestorableTime
   */
  readonly latestRestorableTime?: string;

  /**
   * @schema DocDbdbInstance#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DocDbdbInstance#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema DocDbdbInstance#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema DocDbdbInstance#StatusInfos
   */
  readonly statusInfos?: DocDbdbInstanceStatusInfo[];

  /**
   * @schema DocDbdbInstance#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DocDbdbInstance#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema DocDbdbInstance#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema DocDbdbInstance#DbiResourceId
   */
  readonly dbiResourceId?: string;

  /**
   * @schema DocDbdbInstance#CACertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

  /**
   * @schema DocDbdbInstance#PromotionTier
   */
  readonly promotionTier?: number;

  /**
   * @schema DocDbdbInstance#DBInstanceArn
   */
  readonly dbInstanceArn?: string;

  /**
   * @schema DocDbdbInstance#EnabledCloudwatchLogsExports
   */
  readonly enabledCloudwatchLogsExports?: string[];

}

/**
 * @schema DocDbdbSubnetGroup
 */
export interface DocDbdbSubnetGroup {
  /**
   * @schema DocDbdbSubnetGroup#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema DocDbdbSubnetGroup#DBSubnetGroupDescription
   */
  readonly dbSubnetGroupDescription?: string;

  /**
   * @schema DocDbdbSubnetGroup#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema DocDbdbSubnetGroup#SubnetGroupStatus
   */
  readonly subnetGroupStatus?: string;

  /**
   * @schema DocDbdbSubnetGroup#Subnets
   */
  readonly subnets?: DocDbSubnet[];

  /**
   * @schema DocDbdbSubnetGroup#DBSubnetGroupArn
   */
  readonly dbSubnetGroupArn?: string;

}

/**
 * @schema DocDbFilter
 */
export interface DocDbFilter {
  /**
   * @schema DocDbFilter#Name
   */
  readonly name: string;

  /**
   * @schema DocDbFilter#Values
   */
  readonly values: string[];

}

/**
 * @schema DocDbCertificate
 */
export interface DocDbCertificate {
  /**
   * @schema DocDbCertificate#CertificateIdentifier
   */
  readonly certificateIdentifier?: string;

  /**
   * @schema DocDbCertificate#CertificateType
   */
  readonly certificateType?: string;

  /**
   * @schema DocDbCertificate#Thumbprint
   */
  readonly thumbprint?: string;

  /**
   * @schema DocDbCertificate#ValidFrom
   */
  readonly validFrom?: string;

  /**
   * @schema DocDbCertificate#ValidTill
   */
  readonly validTill?: string;

  /**
   * @schema DocDbCertificate#CertificateArn
   */
  readonly certificateArn?: string;

}

/**
 * @schema DocDbParameter
 */
export interface DocDbParameter {
  /**
   * @schema DocDbParameter#ParameterName
   */
  readonly parameterName?: string;

  /**
   * @schema DocDbParameter#ParameterValue
   */
  readonly parameterValue?: string;

  /**
   * @schema DocDbParameter#Description
   */
  readonly description?: string;

  /**
   * @schema DocDbParameter#Source
   */
  readonly source?: string;

  /**
   * @schema DocDbParameter#ApplyType
   */
  readonly applyType?: string;

  /**
   * @schema DocDbParameter#DataType
   */
  readonly dataType?: string;

  /**
   * @schema DocDbParameter#AllowedValues
   */
  readonly allowedValues?: string;

  /**
   * @schema DocDbParameter#IsModifiable
   */
  readonly isModifiable?: boolean;

  /**
   * @schema DocDbParameter#MinimumEngineVersion
   */
  readonly minimumEngineVersion?: string;

  /**
   * @schema DocDbParameter#ApplyMethod
   */
  readonly applyMethod?: string;

}

/**
 * @schema DocDbdbClusterSnapshotAttributesResult
 */
export interface DocDbdbClusterSnapshotAttributesResult {
  /**
   * @schema DocDbdbClusterSnapshotAttributesResult#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

  /**
   * @schema DocDbdbClusterSnapshotAttributesResult#DBClusterSnapshotAttributes
   */
  readonly dbClusterSnapshotAttributes?: DocDbdbClusterSnapshotAttribute[];

}

/**
 * @schema DocDbdbEngineVersion
 */
export interface DocDbdbEngineVersion {
  /**
   * @schema DocDbdbEngineVersion#Engine
   */
  readonly engine?: string;

  /**
   * @schema DocDbdbEngineVersion#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DocDbdbEngineVersion#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema DocDbdbEngineVersion#DBEngineDescription
   */
  readonly dbEngineDescription?: string;

  /**
   * @schema DocDbdbEngineVersion#DBEngineVersionDescription
   */
  readonly dbEngineVersionDescription?: string;

  /**
   * @schema DocDbdbEngineVersion#ValidUpgradeTarget
   */
  readonly validUpgradeTarget?: DocDbUpgradeTarget[];

  /**
   * @schema DocDbdbEngineVersion#ExportableLogTypes
   */
  readonly exportableLogTypes?: string[];

  /**
   * @schema DocDbdbEngineVersion#SupportsLogExportsToCloudwatchLogs
   */
  readonly supportsLogExportsToCloudwatchLogs?: boolean;

}

/**
 * @schema DocDbEngineDefaults
 */
export interface DocDbEngineDefaults {
  /**
   * @schema DocDbEngineDefaults#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema DocDbEngineDefaults#Marker
   */
  readonly marker?: string;

  /**
   * @schema DocDbEngineDefaults#Parameters
   */
  readonly parameters?: DocDbParameter[];

}

/**
 * @schema DocDbEventCategoriesMap
 */
export interface DocDbEventCategoriesMap {
  /**
   * @schema DocDbEventCategoriesMap#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema DocDbEventCategoriesMap#EventCategories
   */
  readonly eventCategories?: string[];

}

/**
 * @schema DocDbEvent
 */
export interface DocDbEvent {
  /**
   * @schema DocDbEvent#SourceIdentifier
   */
  readonly sourceIdentifier?: string;

  /**
   * @schema DocDbEvent#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema DocDbEvent#Message
   */
  readonly message?: string;

  /**
   * @schema DocDbEvent#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema DocDbEvent#Date
   */
  readonly date?: string;

  /**
   * @schema DocDbEvent#SourceArn
   */
  readonly sourceArn?: string;

}

/**
 * @schema DocDbOrderableDbInstanceOption
 */
export interface DocDbOrderableDbInstanceOption {
  /**
   * @schema DocDbOrderableDbInstanceOption#Engine
   */
  readonly engine?: string;

  /**
   * @schema DocDbOrderableDbInstanceOption#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DocDbOrderableDbInstanceOption#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema DocDbOrderableDbInstanceOption#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema DocDbOrderableDbInstanceOption#AvailabilityZones
   */
  readonly availabilityZones?: DocDbAvailabilityZone[];

  /**
   * @schema DocDbOrderableDbInstanceOption#Vpc
   */
  readonly vpc?: boolean;

}

/**
 * @schema DocDbCloudwatchLogsExportConfiguration
 */
export interface DocDbCloudwatchLogsExportConfiguration {
  /**
   * @schema DocDbCloudwatchLogsExportConfiguration#EnableLogTypes
   */
  readonly enableLogTypes?: string[];

  /**
   * @schema DocDbCloudwatchLogsExportConfiguration#DisableLogTypes
   */
  readonly disableLogTypes?: string[];

}

/**
 * @schema DocDbPendingMaintenanceAction
 */
export interface DocDbPendingMaintenanceAction {
  /**
   * @schema DocDbPendingMaintenanceAction#Action
   */
  readonly action?: string;

  /**
   * @schema DocDbPendingMaintenanceAction#AutoAppliedAfterDate
   */
  readonly autoAppliedAfterDate?: string;

  /**
   * @schema DocDbPendingMaintenanceAction#ForcedApplyDate
   */
  readonly forcedApplyDate?: string;

  /**
   * @schema DocDbPendingMaintenanceAction#OptInStatus
   */
  readonly optInStatus?: string;

  /**
   * @schema DocDbPendingMaintenanceAction#CurrentApplyDate
   */
  readonly currentApplyDate?: string;

  /**
   * @schema DocDbPendingMaintenanceAction#Description
   */
  readonly description?: string;

}

/**
 * @schema DocDbdbClusterMember
 */
export interface DocDbdbClusterMember {
  /**
   * @schema DocDbdbClusterMember#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema DocDbdbClusterMember#IsClusterWriter
   */
  readonly isClusterWriter?: boolean;

  /**
   * @schema DocDbdbClusterMember#DBClusterParameterGroupStatus
   */
  readonly dbClusterParameterGroupStatus?: string;

  /**
   * @schema DocDbdbClusterMember#PromotionTier
   */
  readonly promotionTier?: number;

}

/**
 * @schema DocDbVpcSecurityGroupMembership
 */
export interface DocDbVpcSecurityGroupMembership {
  /**
   * @schema DocDbVpcSecurityGroupMembership#VpcSecurityGroupId
   */
  readonly vpcSecurityGroupId?: string;

  /**
   * @schema DocDbVpcSecurityGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * @schema DocDbdbClusterRole
 */
export interface DocDbdbClusterRole {
  /**
   * @schema DocDbdbClusterRole#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DocDbdbClusterRole#Status
   */
  readonly status?: string;

}

/**
 * @schema DocDbEndpoint
 */
export interface DocDbEndpoint {
  /**
   * @schema DocDbEndpoint#Address
   */
  readonly address?: string;

  /**
   * @schema DocDbEndpoint#Port
   */
  readonly port?: number;

  /**
   * @schema DocDbEndpoint#HostedZoneId
   */
  readonly hostedZoneId?: string;

}

/**
 * @schema DocDbPendingModifiedValues
 */
export interface DocDbPendingModifiedValues {
  /**
   * @schema DocDbPendingModifiedValues#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema DocDbPendingModifiedValues#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema DocDbPendingModifiedValues#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema DocDbPendingModifiedValues#Port
   */
  readonly port?: number;

  /**
   * @schema DocDbPendingModifiedValues#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema DocDbPendingModifiedValues#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema DocDbPendingModifiedValues#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DocDbPendingModifiedValues#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema DocDbPendingModifiedValues#Iops
   */
  readonly iops?: number;

  /**
   * @schema DocDbPendingModifiedValues#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema DocDbPendingModifiedValues#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema DocDbPendingModifiedValues#CACertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

  /**
   * @schema DocDbPendingModifiedValues#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema DocDbPendingModifiedValues#PendingCloudwatchLogsExports
   */
  readonly pendingCloudwatchLogsExports?: DocDbPendingCloudwatchLogsExports;

}

/**
 * @schema DocDbdbInstanceStatusInfo
 */
export interface DocDbdbInstanceStatusInfo {
  /**
   * @schema DocDbdbInstanceStatusInfo#StatusType
   */
  readonly statusType?: string;

  /**
   * @schema DocDbdbInstanceStatusInfo#Normal
   */
  readonly normal?: boolean;

  /**
   * @schema DocDbdbInstanceStatusInfo#Status
   */
  readonly status?: string;

  /**
   * @schema DocDbdbInstanceStatusInfo#Message
   */
  readonly message?: string;

}

/**
 * @schema DocDbSubnet
 */
export interface DocDbSubnet {
  /**
   * @schema DocDbSubnet#SubnetIdentifier
   */
  readonly subnetIdentifier?: string;

  /**
   * @schema DocDbSubnet#SubnetAvailabilityZone
   */
  readonly subnetAvailabilityZone?: DocDbAvailabilityZone;

  /**
   * @schema DocDbSubnet#SubnetStatus
   */
  readonly subnetStatus?: string;

}

/**
 * @schema DocDbdbClusterSnapshotAttribute
 */
export interface DocDbdbClusterSnapshotAttribute {
  /**
   * @schema DocDbdbClusterSnapshotAttribute#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema DocDbdbClusterSnapshotAttribute#AttributeValues
   */
  readonly attributeValues?: string[];

}

/**
 * @schema DocDbUpgradeTarget
 */
export interface DocDbUpgradeTarget {
  /**
   * @schema DocDbUpgradeTarget#Engine
   */
  readonly engine?: string;

  /**
   * @schema DocDbUpgradeTarget#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DocDbUpgradeTarget#Description
   */
  readonly description?: string;

  /**
   * @schema DocDbUpgradeTarget#AutoUpgrade
   */
  readonly autoUpgrade?: boolean;

  /**
   * @schema DocDbUpgradeTarget#IsMajorVersionUpgrade
   */
  readonly isMajorVersionUpgrade?: boolean;

}

/**
 * @schema DocDbAvailabilityZone
 */
export interface DocDbAvailabilityZone {
  /**
   * @schema DocDbAvailabilityZone#Name
   */
  readonly name?: string;

}

/**
 * @schema DocDbPendingCloudwatchLogsExports
 */
export interface DocDbPendingCloudwatchLogsExports {
  /**
   * @schema DocDbPendingCloudwatchLogsExports#LogTypesToEnable
   */
  readonly logTypesToEnable?: string[];

  /**
   * @schema DocDbPendingCloudwatchLogsExports#LogTypesToDisable
   */
  readonly logTypesToDisable?: string[];

}
