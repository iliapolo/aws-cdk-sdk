/**
 * @schema RedshiftAcceptReservedNodeExchangeInputMessage
 */
export interface RedshiftAcceptReservedNodeExchangeInputMessage {
  /**
   * @schema RedshiftAcceptReservedNodeExchangeInputMessage#ReservedNodeId
   */
  readonly reservedNodeId: string;

  /**
   * @schema RedshiftAcceptReservedNodeExchangeInputMessage#TargetReservedNodeOfferingId
   */
  readonly targetReservedNodeOfferingId: string;

}

/**
 * @schema RedshiftAcceptReservedNodeExchangeOutputMessage
 */
export interface RedshiftAcceptReservedNodeExchangeOutputMessage {
  /**
   * @schema RedshiftAcceptReservedNodeExchangeOutputMessage#ExchangedReservedNode
   */
  readonly exchangedReservedNode?: RedshiftReservedNode;

}

/**
 * @schema RedshiftAuthorizeClusterSecurityGroupIngressMessage
 */
export interface RedshiftAuthorizeClusterSecurityGroupIngressMessage {
  /**
   * @schema RedshiftAuthorizeClusterSecurityGroupIngressMessage#ClusterSecurityGroupName
   */
  readonly clusterSecurityGroupName: string;

  /**
   * @schema RedshiftAuthorizeClusterSecurityGroupIngressMessage#CIDRIP
   */
  readonly cidrip?: string;

  /**
   * @schema RedshiftAuthorizeClusterSecurityGroupIngressMessage#EC2SecurityGroupName
   */
  readonly ec2SecurityGroupName?: string;

  /**
   * @schema RedshiftAuthorizeClusterSecurityGroupIngressMessage#EC2SecurityGroupOwnerId
   */
  readonly ec2SecurityGroupOwnerId?: string;

}

/**
 * @schema RedshiftAuthorizeClusterSecurityGroupIngressResult
 */
export interface RedshiftAuthorizeClusterSecurityGroupIngressResult {
  /**
   * @schema RedshiftAuthorizeClusterSecurityGroupIngressResult#ClusterSecurityGroup
   */
  readonly clusterSecurityGroup?: RedshiftClusterSecurityGroup;

}

/**
 * @schema RedshiftAuthorizeSnapshotAccessMessage
 */
export interface RedshiftAuthorizeSnapshotAccessMessage {
  /**
   * @schema RedshiftAuthorizeSnapshotAccessMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier: string;

  /**
   * @schema RedshiftAuthorizeSnapshotAccessMessage#SnapshotClusterIdentifier
   */
  readonly snapshotClusterIdentifier?: string;

  /**
   * @schema RedshiftAuthorizeSnapshotAccessMessage#AccountWithRestoreAccess
   */
  readonly accountWithRestoreAccess: string;

}

/**
 * @schema RedshiftAuthorizeSnapshotAccessResult
 */
export interface RedshiftAuthorizeSnapshotAccessResult {
  /**
   * @schema RedshiftAuthorizeSnapshotAccessResult#Snapshot
   */
  readonly snapshot?: RedshiftSnapshot;

}

/**
 * @schema RedshiftBatchDeleteClusterSnapshotsRequest
 */
export interface RedshiftBatchDeleteClusterSnapshotsRequest {
  /**
   * @schema RedshiftBatchDeleteClusterSnapshotsRequest#Identifiers
   */
  readonly identifiers: RedshiftDeleteClusterSnapshotMessage[];

}

/**
 * @schema RedshiftBatchDeleteClusterSnapshotsResult
 */
export interface RedshiftBatchDeleteClusterSnapshotsResult {
  /**
   * @schema RedshiftBatchDeleteClusterSnapshotsResult#Resources
   */
  readonly resources?: string[];

  /**
   * @schema RedshiftBatchDeleteClusterSnapshotsResult#Errors
   */
  readonly errors?: RedshiftSnapshotErrorMessage[];

}

/**
 * @schema RedshiftBatchModifyClusterSnapshotsMessage
 */
export interface RedshiftBatchModifyClusterSnapshotsMessage {
  /**
   * @schema RedshiftBatchModifyClusterSnapshotsMessage#SnapshotIdentifierList
   */
  readonly snapshotIdentifierList: string[];

  /**
   * @schema RedshiftBatchModifyClusterSnapshotsMessage#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

  /**
   * @schema RedshiftBatchModifyClusterSnapshotsMessage#Force
   */
  readonly force?: boolean;

}

/**
 * @schema RedshiftBatchModifyClusterSnapshotsOutputMessage
 */
export interface RedshiftBatchModifyClusterSnapshotsOutputMessage {
  /**
   * @schema RedshiftBatchModifyClusterSnapshotsOutputMessage#Resources
   */
  readonly resources?: string[];

  /**
   * @schema RedshiftBatchModifyClusterSnapshotsOutputMessage#Errors
   */
  readonly errors?: RedshiftSnapshotErrorMessage[];

}

/**
 * @schema RedshiftCancelResizeMessage
 */
export interface RedshiftCancelResizeMessage {
  /**
   * @schema RedshiftCancelResizeMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

}

/**
 * @schema RedshiftResizeProgressMessage
 */
export interface RedshiftResizeProgressMessage {
  /**
   * @schema RedshiftResizeProgressMessage#TargetNodeType
   */
  readonly targetNodeType?: string;

  /**
   * @schema RedshiftResizeProgressMessage#TargetNumberOfNodes
   */
  readonly targetNumberOfNodes?: number;

  /**
   * @schema RedshiftResizeProgressMessage#TargetClusterType
   */
  readonly targetClusterType?: string;

  /**
   * @schema RedshiftResizeProgressMessage#Status
   */
  readonly status?: string;

  /**
   * @schema RedshiftResizeProgressMessage#ImportTablesCompleted
   */
  readonly importTablesCompleted?: string[];

  /**
   * @schema RedshiftResizeProgressMessage#ImportTablesInProgress
   */
  readonly importTablesInProgress?: string[];

  /**
   * @schema RedshiftResizeProgressMessage#ImportTablesNotStarted
   */
  readonly importTablesNotStarted?: string[];

  /**
   * @schema RedshiftResizeProgressMessage#AvgResizeRateInMegaBytesPerSecond
   */
  readonly avgResizeRateInMegaBytesPerSecond?: number;

  /**
   * @schema RedshiftResizeProgressMessage#TotalResizeDataInMegaBytes
   */
  readonly totalResizeDataInMegaBytes?: number;

  /**
   * @schema RedshiftResizeProgressMessage#ProgressInMegaBytes
   */
  readonly progressInMegaBytes?: number;

  /**
   * @schema RedshiftResizeProgressMessage#ElapsedTimeInSeconds
   */
  readonly elapsedTimeInSeconds?: number;

  /**
   * @schema RedshiftResizeProgressMessage#EstimatedTimeToCompletionInSeconds
   */
  readonly estimatedTimeToCompletionInSeconds?: number;

  /**
   * @schema RedshiftResizeProgressMessage#ResizeType
   */
  readonly resizeType?: string;

  /**
   * @schema RedshiftResizeProgressMessage#Message
   */
  readonly message?: string;

  /**
   * @schema RedshiftResizeProgressMessage#TargetEncryptionType
   */
  readonly targetEncryptionType?: string;

  /**
   * @schema RedshiftResizeProgressMessage#DataTransferProgressPercent
   */
  readonly dataTransferProgressPercent?: number;

}

/**
 * @schema RedshiftCopyClusterSnapshotMessage
 */
export interface RedshiftCopyClusterSnapshotMessage {
  /**
   * @schema RedshiftCopyClusterSnapshotMessage#SourceSnapshotIdentifier
   */
  readonly sourceSnapshotIdentifier: string;

  /**
   * @schema RedshiftCopyClusterSnapshotMessage#SourceSnapshotClusterIdentifier
   */
  readonly sourceSnapshotClusterIdentifier?: string;

  /**
   * @schema RedshiftCopyClusterSnapshotMessage#TargetSnapshotIdentifier
   */
  readonly targetSnapshotIdentifier: string;

  /**
   * @schema RedshiftCopyClusterSnapshotMessage#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

}

/**
 * @schema RedshiftCopyClusterSnapshotResult
 */
export interface RedshiftCopyClusterSnapshotResult {
  /**
   * @schema RedshiftCopyClusterSnapshotResult#Snapshot
   */
  readonly snapshot?: RedshiftSnapshot;

}

/**
 * @schema RedshiftCreateClusterMessage
 */
export interface RedshiftCreateClusterMessage {
  /**
   * @schema RedshiftCreateClusterMessage#DBName
   */
  readonly dbName?: string;

  /**
   * @schema RedshiftCreateClusterMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema RedshiftCreateClusterMessage#ClusterType
   */
  readonly clusterType?: string;

  /**
   * @schema RedshiftCreateClusterMessage#NodeType
   */
  readonly nodeType: string;

  /**
   * @schema RedshiftCreateClusterMessage#MasterUsername
   */
  readonly masterUsername: string;

  /**
   * @schema RedshiftCreateClusterMessage#MasterUserPassword
   */
  readonly masterUserPassword: string;

  /**
   * @schema RedshiftCreateClusterMessage#ClusterSecurityGroups
   */
  readonly clusterSecurityGroups?: string[];

  /**
   * @schema RedshiftCreateClusterMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RedshiftCreateClusterMessage#ClusterSubnetGroupName
   */
  readonly clusterSubnetGroupName?: string;

  /**
   * @schema RedshiftCreateClusterMessage#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema RedshiftCreateClusterMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema RedshiftCreateClusterMessage#ClusterParameterGroupName
   */
  readonly clusterParameterGroupName?: string;

  /**
   * @schema RedshiftCreateClusterMessage#AutomatedSnapshotRetentionPeriod
   */
  readonly automatedSnapshotRetentionPeriod?: number;

  /**
   * @schema RedshiftCreateClusterMessage#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

  /**
   * @schema RedshiftCreateClusterMessage#Port
   */
  readonly port?: number;

  /**
   * @schema RedshiftCreateClusterMessage#ClusterVersion
   */
  readonly clusterVersion?: string;

  /**
   * @schema RedshiftCreateClusterMessage#AllowVersionUpgrade
   */
  readonly allowVersionUpgrade?: boolean;

  /**
   * @schema RedshiftCreateClusterMessage#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema RedshiftCreateClusterMessage#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema RedshiftCreateClusterMessage#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema RedshiftCreateClusterMessage#HsmClientCertificateIdentifier
   */
  readonly hsmClientCertificateIdentifier?: string;

  /**
   * @schema RedshiftCreateClusterMessage#HsmConfigurationIdentifier
   */
  readonly hsmConfigurationIdentifier?: string;

  /**
   * @schema RedshiftCreateClusterMessage#ElasticIp
   */
  readonly elasticIp?: string;

  /**
   * @schema RedshiftCreateClusterMessage#Tags
   */
  readonly tags?: RedshiftTag[];

  /**
   * @schema RedshiftCreateClusterMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RedshiftCreateClusterMessage#EnhancedVpcRouting
   */
  readonly enhancedVpcRouting?: boolean;

  /**
   * @schema RedshiftCreateClusterMessage#AdditionalInfo
   */
  readonly additionalInfo?: string;

  /**
   * @schema RedshiftCreateClusterMessage#IamRoles
   */
  readonly iamRoles?: string[];

  /**
   * @schema RedshiftCreateClusterMessage#MaintenanceTrackName
   */
  readonly maintenanceTrackName?: string;

  /**
   * @schema RedshiftCreateClusterMessage#SnapshotScheduleIdentifier
   */
  readonly snapshotScheduleIdentifier?: string;

}

/**
 * @schema RedshiftCreateClusterResult
 */
export interface RedshiftCreateClusterResult {
  /**
   * @schema RedshiftCreateClusterResult#Cluster
   */
  readonly cluster?: RedshiftCluster;

}

/**
 * @schema RedshiftCreateClusterParameterGroupMessage
 */
export interface RedshiftCreateClusterParameterGroupMessage {
  /**
   * @schema RedshiftCreateClusterParameterGroupMessage#ParameterGroupName
   */
  readonly parameterGroupName: string;

  /**
   * @schema RedshiftCreateClusterParameterGroupMessage#ParameterGroupFamily
   */
  readonly parameterGroupFamily: string;

  /**
   * @schema RedshiftCreateClusterParameterGroupMessage#Description
   */
  readonly description: string;

  /**
   * @schema RedshiftCreateClusterParameterGroupMessage#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * @schema RedshiftCreateClusterParameterGroupResult
 */
export interface RedshiftCreateClusterParameterGroupResult {
  /**
   * @schema RedshiftCreateClusterParameterGroupResult#ClusterParameterGroup
   */
  readonly clusterParameterGroup?: RedshiftClusterParameterGroup;

}

/**
 * @schema RedshiftCreateClusterSecurityGroupMessage
 */
export interface RedshiftCreateClusterSecurityGroupMessage {
  /**
   * @schema RedshiftCreateClusterSecurityGroupMessage#ClusterSecurityGroupName
   */
  readonly clusterSecurityGroupName: string;

  /**
   * @schema RedshiftCreateClusterSecurityGroupMessage#Description
   */
  readonly description: string;

  /**
   * @schema RedshiftCreateClusterSecurityGroupMessage#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * @schema RedshiftCreateClusterSecurityGroupResult
 */
export interface RedshiftCreateClusterSecurityGroupResult {
  /**
   * @schema RedshiftCreateClusterSecurityGroupResult#ClusterSecurityGroup
   */
  readonly clusterSecurityGroup?: RedshiftClusterSecurityGroup;

}

/**
 * @schema RedshiftCreateClusterSnapshotMessage
 */
export interface RedshiftCreateClusterSnapshotMessage {
  /**
   * @schema RedshiftCreateClusterSnapshotMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier: string;

  /**
   * @schema RedshiftCreateClusterSnapshotMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema RedshiftCreateClusterSnapshotMessage#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

  /**
   * @schema RedshiftCreateClusterSnapshotMessage#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * @schema RedshiftCreateClusterSnapshotResult
 */
export interface RedshiftCreateClusterSnapshotResult {
  /**
   * @schema RedshiftCreateClusterSnapshotResult#Snapshot
   */
  readonly snapshot?: RedshiftSnapshot;

}

/**
 * @schema RedshiftCreateClusterSubnetGroupMessage
 */
export interface RedshiftCreateClusterSubnetGroupMessage {
  /**
   * @schema RedshiftCreateClusterSubnetGroupMessage#ClusterSubnetGroupName
   */
  readonly clusterSubnetGroupName: string;

  /**
   * @schema RedshiftCreateClusterSubnetGroupMessage#Description
   */
  readonly description: string;

  /**
   * @schema RedshiftCreateClusterSubnetGroupMessage#SubnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema RedshiftCreateClusterSubnetGroupMessage#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * @schema RedshiftCreateClusterSubnetGroupResult
 */
export interface RedshiftCreateClusterSubnetGroupResult {
  /**
   * @schema RedshiftCreateClusterSubnetGroupResult#ClusterSubnetGroup
   */
  readonly clusterSubnetGroup?: RedshiftClusterSubnetGroup;

}

/**
 * @schema RedshiftCreateEventSubscriptionMessage
 */
export interface RedshiftCreateEventSubscriptionMessage {
  /**
   * @schema RedshiftCreateEventSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName: string;

  /**
   * @schema RedshiftCreateEventSubscriptionMessage#SnsTopicArn
   */
  readonly snsTopicArn: string;

  /**
   * @schema RedshiftCreateEventSubscriptionMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema RedshiftCreateEventSubscriptionMessage#SourceIds
   */
  readonly sourceIds?: string[];

  /**
   * @schema RedshiftCreateEventSubscriptionMessage#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema RedshiftCreateEventSubscriptionMessage#Severity
   */
  readonly severity?: string;

  /**
   * @schema RedshiftCreateEventSubscriptionMessage#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema RedshiftCreateEventSubscriptionMessage#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * @schema RedshiftCreateEventSubscriptionResult
 */
export interface RedshiftCreateEventSubscriptionResult {
  /**
   * @schema RedshiftCreateEventSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: RedshiftEventSubscription;

}

/**
 * @schema RedshiftCreateHsmClientCertificateMessage
 */
export interface RedshiftCreateHsmClientCertificateMessage {
  /**
   * @schema RedshiftCreateHsmClientCertificateMessage#HsmClientCertificateIdentifier
   */
  readonly hsmClientCertificateIdentifier: string;

  /**
   * @schema RedshiftCreateHsmClientCertificateMessage#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * @schema RedshiftCreateHsmClientCertificateResult
 */
export interface RedshiftCreateHsmClientCertificateResult {
  /**
   * @schema RedshiftCreateHsmClientCertificateResult#HsmClientCertificate
   */
  readonly hsmClientCertificate?: RedshiftHsmClientCertificate;

}

/**
 * @schema RedshiftCreateHsmConfigurationMessage
 */
export interface RedshiftCreateHsmConfigurationMessage {
  /**
   * @schema RedshiftCreateHsmConfigurationMessage#HsmConfigurationIdentifier
   */
  readonly hsmConfigurationIdentifier: string;

  /**
   * @schema RedshiftCreateHsmConfigurationMessage#Description
   */
  readonly description: string;

  /**
   * @schema RedshiftCreateHsmConfigurationMessage#HsmIpAddress
   */
  readonly hsmIpAddress: string;

  /**
   * @schema RedshiftCreateHsmConfigurationMessage#HsmPartitionName
   */
  readonly hsmPartitionName: string;

  /**
   * @schema RedshiftCreateHsmConfigurationMessage#HsmPartitionPassword
   */
  readonly hsmPartitionPassword: string;

  /**
   * @schema RedshiftCreateHsmConfigurationMessage#HsmServerPublicCertificate
   */
  readonly hsmServerPublicCertificate: string;

  /**
   * @schema RedshiftCreateHsmConfigurationMessage#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * @schema RedshiftCreateHsmConfigurationResult
 */
export interface RedshiftCreateHsmConfigurationResult {
  /**
   * @schema RedshiftCreateHsmConfigurationResult#HsmConfiguration
   */
  readonly hsmConfiguration?: RedshiftHsmConfiguration;

}

/**
 * @schema RedshiftCreateScheduledActionMessage
 */
export interface RedshiftCreateScheduledActionMessage {
  /**
   * @schema RedshiftCreateScheduledActionMessage#ScheduledActionName
   */
  readonly scheduledActionName: string;

  /**
   * @schema RedshiftCreateScheduledActionMessage#TargetAction
   */
  readonly targetAction: RedshiftScheduledActionType;

  /**
   * @schema RedshiftCreateScheduledActionMessage#Schedule
   */
  readonly schedule: string;

  /**
   * @schema RedshiftCreateScheduledActionMessage#IamRole
   */
  readonly iamRole: string;

  /**
   * @schema RedshiftCreateScheduledActionMessage#ScheduledActionDescription
   */
  readonly scheduledActionDescription?: string;

  /**
   * @schema RedshiftCreateScheduledActionMessage#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema RedshiftCreateScheduledActionMessage#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema RedshiftCreateScheduledActionMessage#Enable
   */
  readonly enable?: boolean;

}

/**
 * @schema RedshiftScheduledAction
 */
export interface RedshiftScheduledAction {
  /**
   * @schema RedshiftScheduledAction#ScheduledActionName
   */
  readonly scheduledActionName?: string;

  /**
   * @schema RedshiftScheduledAction#TargetAction
   */
  readonly targetAction?: RedshiftScheduledActionType;

  /**
   * @schema RedshiftScheduledAction#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema RedshiftScheduledAction#IamRole
   */
  readonly iamRole?: string;

  /**
   * @schema RedshiftScheduledAction#ScheduledActionDescription
   */
  readonly scheduledActionDescription?: string;

  /**
   * @schema RedshiftScheduledAction#State
   */
  readonly state?: string;

  /**
   * @schema RedshiftScheduledAction#NextInvocations
   */
  readonly nextInvocations?: string[];

  /**
   * @schema RedshiftScheduledAction#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema RedshiftScheduledAction#EndTime
   */
  readonly endTime?: string;

}

/**
 * @schema RedshiftCreateSnapshotCopyGrantMessage
 */
export interface RedshiftCreateSnapshotCopyGrantMessage {
  /**
   * @schema RedshiftCreateSnapshotCopyGrantMessage#SnapshotCopyGrantName
   */
  readonly snapshotCopyGrantName: string;

  /**
   * @schema RedshiftCreateSnapshotCopyGrantMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RedshiftCreateSnapshotCopyGrantMessage#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * @schema RedshiftCreateSnapshotCopyGrantResult
 */
export interface RedshiftCreateSnapshotCopyGrantResult {
  /**
   * @schema RedshiftCreateSnapshotCopyGrantResult#SnapshotCopyGrant
   */
  readonly snapshotCopyGrant?: RedshiftSnapshotCopyGrant;

}

/**
 * @schema RedshiftCreateSnapshotScheduleMessage
 */
export interface RedshiftCreateSnapshotScheduleMessage {
  /**
   * @schema RedshiftCreateSnapshotScheduleMessage#ScheduleDefinitions
   */
  readonly scheduleDefinitions?: string[];

  /**
   * @schema RedshiftCreateSnapshotScheduleMessage#ScheduleIdentifier
   */
  readonly scheduleIdentifier?: string;

  /**
   * @schema RedshiftCreateSnapshotScheduleMessage#ScheduleDescription
   */
  readonly scheduleDescription?: string;

  /**
   * @schema RedshiftCreateSnapshotScheduleMessage#Tags
   */
  readonly tags?: RedshiftTag[];

  /**
   * @schema RedshiftCreateSnapshotScheduleMessage#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema RedshiftCreateSnapshotScheduleMessage#NextInvocations
   */
  readonly nextInvocations?: number;

}

/**
 * @schema RedshiftSnapshotSchedule
 */
export interface RedshiftSnapshotSchedule {
  /**
   * @schema RedshiftSnapshotSchedule#ScheduleDefinitions
   */
  readonly scheduleDefinitions?: string[];

  /**
   * @schema RedshiftSnapshotSchedule#ScheduleIdentifier
   */
  readonly scheduleIdentifier?: string;

  /**
   * @schema RedshiftSnapshotSchedule#ScheduleDescription
   */
  readonly scheduleDescription?: string;

  /**
   * @schema RedshiftSnapshotSchedule#Tags
   */
  readonly tags?: RedshiftTag[];

  /**
   * @schema RedshiftSnapshotSchedule#NextInvocations
   */
  readonly nextInvocations?: string[];

  /**
   * @schema RedshiftSnapshotSchedule#AssociatedClusterCount
   */
  readonly associatedClusterCount?: number;

  /**
   * @schema RedshiftSnapshotSchedule#AssociatedClusters
   */
  readonly associatedClusters?: RedshiftClusterAssociatedToSchedule[];

}

/**
 * @schema RedshiftCreateTagsMessage
 */
export interface RedshiftCreateTagsMessage {
  /**
   * @schema RedshiftCreateTagsMessage#ResourceName
   */
  readonly resourceName: string;

  /**
   * @schema RedshiftCreateTagsMessage#Tags
   */
  readonly tags: RedshiftTag[];

}

/**
 * @schema RedshiftCreateUsageLimitMessage
 */
export interface RedshiftCreateUsageLimitMessage {
  /**
   * @schema RedshiftCreateUsageLimitMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema RedshiftCreateUsageLimitMessage#FeatureType
   */
  readonly featureType: string;

  /**
   * @schema RedshiftCreateUsageLimitMessage#LimitType
   */
  readonly limitType: string;

  /**
   * @schema RedshiftCreateUsageLimitMessage#Amount
   */
  readonly amount: number;

  /**
   * @schema RedshiftCreateUsageLimitMessage#Period
   */
  readonly period?: string;

  /**
   * @schema RedshiftCreateUsageLimitMessage#BreachAction
   */
  readonly breachAction?: string;

  /**
   * @schema RedshiftCreateUsageLimitMessage#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * @schema RedshiftUsageLimit
 */
export interface RedshiftUsageLimit {
  /**
   * @schema RedshiftUsageLimit#UsageLimitId
   */
  readonly usageLimitId?: string;

  /**
   * @schema RedshiftUsageLimit#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftUsageLimit#FeatureType
   */
  readonly featureType?: string;

  /**
   * @schema RedshiftUsageLimit#LimitType
   */
  readonly limitType?: string;

  /**
   * @schema RedshiftUsageLimit#Amount
   */
  readonly amount?: number;

  /**
   * @schema RedshiftUsageLimit#Period
   */
  readonly period?: string;

  /**
   * @schema RedshiftUsageLimit#BreachAction
   */
  readonly breachAction?: string;

  /**
   * @schema RedshiftUsageLimit#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * @schema RedshiftDeleteClusterMessage
 */
export interface RedshiftDeleteClusterMessage {
  /**
   * @schema RedshiftDeleteClusterMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema RedshiftDeleteClusterMessage#SkipFinalClusterSnapshot
   */
  readonly skipFinalClusterSnapshot?: boolean;

  /**
   * @schema RedshiftDeleteClusterMessage#FinalClusterSnapshotIdentifier
   */
  readonly finalClusterSnapshotIdentifier?: string;

  /**
   * @schema RedshiftDeleteClusterMessage#FinalClusterSnapshotRetentionPeriod
   */
  readonly finalClusterSnapshotRetentionPeriod?: number;

}

/**
 * @schema RedshiftDeleteClusterResult
 */
export interface RedshiftDeleteClusterResult {
  /**
   * @schema RedshiftDeleteClusterResult#Cluster
   */
  readonly cluster?: RedshiftCluster;

}

/**
 * @schema RedshiftDeleteClusterParameterGroupMessage
 */
export interface RedshiftDeleteClusterParameterGroupMessage {
  /**
   * @schema RedshiftDeleteClusterParameterGroupMessage#ParameterGroupName
   */
  readonly parameterGroupName: string;

}

/**
 * @schema RedshiftDeleteClusterSecurityGroupMessage
 */
export interface RedshiftDeleteClusterSecurityGroupMessage {
  /**
   * @schema RedshiftDeleteClusterSecurityGroupMessage#ClusterSecurityGroupName
   */
  readonly clusterSecurityGroupName: string;

}

/**
 * @schema RedshiftDeleteClusterSnapshotMessage
 */
export interface RedshiftDeleteClusterSnapshotMessage {
  /**
   * @schema RedshiftDeleteClusterSnapshotMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier: string;

  /**
   * @schema RedshiftDeleteClusterSnapshotMessage#SnapshotClusterIdentifier
   */
  readonly snapshotClusterIdentifier?: string;

}

/**
 * @schema RedshiftDeleteClusterSnapshotResult
 */
export interface RedshiftDeleteClusterSnapshotResult {
  /**
   * @schema RedshiftDeleteClusterSnapshotResult#Snapshot
   */
  readonly snapshot?: RedshiftSnapshot;

}

/**
 * @schema RedshiftDeleteClusterSubnetGroupMessage
 */
export interface RedshiftDeleteClusterSubnetGroupMessage {
  /**
   * @schema RedshiftDeleteClusterSubnetGroupMessage#ClusterSubnetGroupName
   */
  readonly clusterSubnetGroupName: string;

}

/**
 * @schema RedshiftDeleteEventSubscriptionMessage
 */
export interface RedshiftDeleteEventSubscriptionMessage {
  /**
   * @schema RedshiftDeleteEventSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName: string;

}

/**
 * @schema RedshiftDeleteHsmClientCertificateMessage
 */
export interface RedshiftDeleteHsmClientCertificateMessage {
  /**
   * @schema RedshiftDeleteHsmClientCertificateMessage#HsmClientCertificateIdentifier
   */
  readonly hsmClientCertificateIdentifier: string;

}

/**
 * @schema RedshiftDeleteHsmConfigurationMessage
 */
export interface RedshiftDeleteHsmConfigurationMessage {
  /**
   * @schema RedshiftDeleteHsmConfigurationMessage#HsmConfigurationIdentifier
   */
  readonly hsmConfigurationIdentifier: string;

}

/**
 * @schema RedshiftDeleteScheduledActionMessage
 */
export interface RedshiftDeleteScheduledActionMessage {
  /**
   * @schema RedshiftDeleteScheduledActionMessage#ScheduledActionName
   */
  readonly scheduledActionName: string;

}

/**
 * @schema RedshiftDeleteSnapshotCopyGrantMessage
 */
export interface RedshiftDeleteSnapshotCopyGrantMessage {
  /**
   * @schema RedshiftDeleteSnapshotCopyGrantMessage#SnapshotCopyGrantName
   */
  readonly snapshotCopyGrantName: string;

}

/**
 * @schema RedshiftDeleteSnapshotScheduleMessage
 */
export interface RedshiftDeleteSnapshotScheduleMessage {
  /**
   * @schema RedshiftDeleteSnapshotScheduleMessage#ScheduleIdentifier
   */
  readonly scheduleIdentifier: string;

}

/**
 * @schema RedshiftDeleteTagsMessage
 */
export interface RedshiftDeleteTagsMessage {
  /**
   * @schema RedshiftDeleteTagsMessage#ResourceName
   */
  readonly resourceName: string;

  /**
   * @schema RedshiftDeleteTagsMessage#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema RedshiftDeleteUsageLimitMessage
 */
export interface RedshiftDeleteUsageLimitMessage {
  /**
   * @schema RedshiftDeleteUsageLimitMessage#UsageLimitId
   */
  readonly usageLimitId: string;

}

/**
 * @schema RedshiftDescribeAccountAttributesMessage
 */
export interface RedshiftDescribeAccountAttributesMessage {
  /**
   * @schema RedshiftDescribeAccountAttributesMessage#AttributeNames
   */
  readonly attributeNames?: string[];

}

/**
 * @schema RedshiftAccountAttributeList
 */
export interface RedshiftAccountAttributeList {
  /**
   * @schema RedshiftAccountAttributeList#AccountAttributes
   */
  readonly accountAttributes?: RedshiftAccountAttribute[];

}

/**
 * @schema RedshiftDescribeClusterDbRevisionsMessage
 */
export interface RedshiftDescribeClusterDbRevisionsMessage {
  /**
   * @schema RedshiftDescribeClusterDbRevisionsMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftDescribeClusterDbRevisionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeClusterDbRevisionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RedshiftClusterDbRevisionsMessage
 */
export interface RedshiftClusterDbRevisionsMessage {
  /**
   * @schema RedshiftClusterDbRevisionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftClusterDbRevisionsMessage#ClusterDbRevisions
   */
  readonly clusterDbRevisions?: RedshiftClusterDbRevision[];

}

/**
 * @schema RedshiftDescribeClusterParameterGroupsMessage
 */
export interface RedshiftDescribeClusterParameterGroupsMessage {
  /**
   * @schema RedshiftDescribeClusterParameterGroupsMessage#ParameterGroupName
   */
  readonly parameterGroupName?: string;

  /**
   * @schema RedshiftDescribeClusterParameterGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeClusterParameterGroupsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftDescribeClusterParameterGroupsMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema RedshiftDescribeClusterParameterGroupsMessage#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * @schema RedshiftClusterParameterGroupsMessage
 */
export interface RedshiftClusterParameterGroupsMessage {
  /**
   * @schema RedshiftClusterParameterGroupsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftClusterParameterGroupsMessage#ParameterGroups
   */
  readonly parameterGroups?: RedshiftClusterParameterGroup[];

}

/**
 * @schema RedshiftDescribeClusterParametersMessage
 */
export interface RedshiftDescribeClusterParametersMessage {
  /**
   * @schema RedshiftDescribeClusterParametersMessage#ParameterGroupName
   */
  readonly parameterGroupName: string;

  /**
   * @schema RedshiftDescribeClusterParametersMessage#Source
   */
  readonly source?: string;

  /**
   * @schema RedshiftDescribeClusterParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeClusterParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RedshiftClusterParameterGroupDetails
 */
export interface RedshiftClusterParameterGroupDetails {
  /**
   * @schema RedshiftClusterParameterGroupDetails#Parameters
   */
  readonly parameters?: RedshiftParameter[];

  /**
   * @schema RedshiftClusterParameterGroupDetails#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RedshiftDescribeClusterSecurityGroupsMessage
 */
export interface RedshiftDescribeClusterSecurityGroupsMessage {
  /**
   * @schema RedshiftDescribeClusterSecurityGroupsMessage#ClusterSecurityGroupName
   */
  readonly clusterSecurityGroupName?: string;

  /**
   * @schema RedshiftDescribeClusterSecurityGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeClusterSecurityGroupsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftDescribeClusterSecurityGroupsMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema RedshiftDescribeClusterSecurityGroupsMessage#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * @schema RedshiftClusterSecurityGroupMessage
 */
export interface RedshiftClusterSecurityGroupMessage {
  /**
   * @schema RedshiftClusterSecurityGroupMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftClusterSecurityGroupMessage#ClusterSecurityGroups
   */
  readonly clusterSecurityGroups?: RedshiftClusterSecurityGroup[];

}

/**
 * @schema RedshiftDescribeClusterSnapshotsMessage
 */
export interface RedshiftDescribeClusterSnapshotsMessage {
  /**
   * @schema RedshiftDescribeClusterSnapshotsMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftDescribeClusterSnapshotsMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier?: string;

  /**
   * @schema RedshiftDescribeClusterSnapshotsMessage#SnapshotType
   */
  readonly snapshotType?: string;

  /**
   * @schema RedshiftDescribeClusterSnapshotsMessage#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema RedshiftDescribeClusterSnapshotsMessage#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema RedshiftDescribeClusterSnapshotsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeClusterSnapshotsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftDescribeClusterSnapshotsMessage#OwnerAccount
   */
  readonly ownerAccount?: string;

  /**
   * @schema RedshiftDescribeClusterSnapshotsMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema RedshiftDescribeClusterSnapshotsMessage#TagValues
   */
  readonly tagValues?: string[];

  /**
   * @schema RedshiftDescribeClusterSnapshotsMessage#ClusterExists
   */
  readonly clusterExists?: boolean;

  /**
   * @schema RedshiftDescribeClusterSnapshotsMessage#SortingEntities
   */
  readonly sortingEntities?: RedshiftSnapshotSortingEntity[];

}

/**
 * @schema RedshiftSnapshotMessage
 */
export interface RedshiftSnapshotMessage {
  /**
   * @schema RedshiftSnapshotMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftSnapshotMessage#Snapshots
   */
  readonly snapshots?: RedshiftSnapshot[];

}

/**
 * @schema RedshiftDescribeClusterSubnetGroupsMessage
 */
export interface RedshiftDescribeClusterSubnetGroupsMessage {
  /**
   * @schema RedshiftDescribeClusterSubnetGroupsMessage#ClusterSubnetGroupName
   */
  readonly clusterSubnetGroupName?: string;

  /**
   * @schema RedshiftDescribeClusterSubnetGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeClusterSubnetGroupsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftDescribeClusterSubnetGroupsMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema RedshiftDescribeClusterSubnetGroupsMessage#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * @schema RedshiftClusterSubnetGroupMessage
 */
export interface RedshiftClusterSubnetGroupMessage {
  /**
   * @schema RedshiftClusterSubnetGroupMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftClusterSubnetGroupMessage#ClusterSubnetGroups
   */
  readonly clusterSubnetGroups?: RedshiftClusterSubnetGroup[];

}

/**
 * @schema RedshiftDescribeClusterTracksMessage
 */
export interface RedshiftDescribeClusterTracksMessage {
  /**
   * @schema RedshiftDescribeClusterTracksMessage#MaintenanceTrackName
   */
  readonly maintenanceTrackName?: string;

  /**
   * @schema RedshiftDescribeClusterTracksMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeClusterTracksMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RedshiftTrackListMessage
 */
export interface RedshiftTrackListMessage {
  /**
   * @schema RedshiftTrackListMessage#MaintenanceTracks
   */
  readonly maintenanceTracks?: RedshiftMaintenanceTrack[];

  /**
   * @schema RedshiftTrackListMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RedshiftDescribeClusterVersionsMessage
 */
export interface RedshiftDescribeClusterVersionsMessage {
  /**
   * @schema RedshiftDescribeClusterVersionsMessage#ClusterVersion
   */
  readonly clusterVersion?: string;

  /**
   * @schema RedshiftDescribeClusterVersionsMessage#ClusterParameterGroupFamily
   */
  readonly clusterParameterGroupFamily?: string;

  /**
   * @schema RedshiftDescribeClusterVersionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeClusterVersionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RedshiftClusterVersionsMessage
 */
export interface RedshiftClusterVersionsMessage {
  /**
   * @schema RedshiftClusterVersionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftClusterVersionsMessage#ClusterVersions
   */
  readonly clusterVersions?: RedshiftClusterVersion[];

}

/**
 * @schema RedshiftDescribeClustersMessage
 */
export interface RedshiftDescribeClustersMessage {
  /**
   * @schema RedshiftDescribeClustersMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftDescribeClustersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeClustersMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftDescribeClustersMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema RedshiftDescribeClustersMessage#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * @schema RedshiftClustersMessage
 */
export interface RedshiftClustersMessage {
  /**
   * @schema RedshiftClustersMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftClustersMessage#Clusters
   */
  readonly clusters?: RedshiftCluster[];

}

/**
 * @schema RedshiftDescribeDefaultClusterParametersMessage
 */
export interface RedshiftDescribeDefaultClusterParametersMessage {
  /**
   * @schema RedshiftDescribeDefaultClusterParametersMessage#ParameterGroupFamily
   */
  readonly parameterGroupFamily: string;

  /**
   * @schema RedshiftDescribeDefaultClusterParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeDefaultClusterParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RedshiftDescribeDefaultClusterParametersResult
 */
export interface RedshiftDescribeDefaultClusterParametersResult {
  /**
   * @schema RedshiftDescribeDefaultClusterParametersResult#DefaultClusterParameters
   */
  readonly defaultClusterParameters?: RedshiftDefaultClusterParameters;

}

/**
 * @schema RedshiftDescribeEventCategoriesMessage
 */
export interface RedshiftDescribeEventCategoriesMessage {
  /**
   * @schema RedshiftDescribeEventCategoriesMessage#SourceType
   */
  readonly sourceType?: string;

}

/**
 * @schema RedshiftEventCategoriesMessage
 */
export interface RedshiftEventCategoriesMessage {
  /**
   * @schema RedshiftEventCategoriesMessage#EventCategoriesMapList
   */
  readonly eventCategoriesMapList?: RedshiftEventCategoriesMap[];

}

/**
 * @schema RedshiftDescribeEventSubscriptionsMessage
 */
export interface RedshiftDescribeEventSubscriptionsMessage {
  /**
   * @schema RedshiftDescribeEventSubscriptionsMessage#SubscriptionName
   */
  readonly subscriptionName?: string;

  /**
   * @schema RedshiftDescribeEventSubscriptionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeEventSubscriptionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftDescribeEventSubscriptionsMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema RedshiftDescribeEventSubscriptionsMessage#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * @schema RedshiftEventSubscriptionsMessage
 */
export interface RedshiftEventSubscriptionsMessage {
  /**
   * @schema RedshiftEventSubscriptionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftEventSubscriptionsMessage#EventSubscriptionsList
   */
  readonly eventSubscriptionsList?: RedshiftEventSubscription[];

}

/**
 * @schema RedshiftDescribeEventsMessage
 */
export interface RedshiftDescribeEventsMessage {
  /**
   * @schema RedshiftDescribeEventsMessage#SourceIdentifier
   */
  readonly sourceIdentifier?: string;

  /**
   * @schema RedshiftDescribeEventsMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema RedshiftDescribeEventsMessage#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema RedshiftDescribeEventsMessage#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema RedshiftDescribeEventsMessage#Duration
   */
  readonly duration?: number;

  /**
   * @schema RedshiftDescribeEventsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeEventsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RedshiftEventsMessage
 */
export interface RedshiftEventsMessage {
  /**
   * @schema RedshiftEventsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftEventsMessage#Events
   */
  readonly events?: RedshiftEvent[];

}

/**
 * @schema RedshiftDescribeHsmClientCertificatesMessage
 */
export interface RedshiftDescribeHsmClientCertificatesMessage {
  /**
   * @schema RedshiftDescribeHsmClientCertificatesMessage#HsmClientCertificateIdentifier
   */
  readonly hsmClientCertificateIdentifier?: string;

  /**
   * @schema RedshiftDescribeHsmClientCertificatesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeHsmClientCertificatesMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftDescribeHsmClientCertificatesMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema RedshiftDescribeHsmClientCertificatesMessage#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * @schema RedshiftHsmClientCertificateMessage
 */
export interface RedshiftHsmClientCertificateMessage {
  /**
   * @schema RedshiftHsmClientCertificateMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftHsmClientCertificateMessage#HsmClientCertificates
   */
  readonly hsmClientCertificates?: RedshiftHsmClientCertificate[];

}

/**
 * @schema RedshiftDescribeHsmConfigurationsMessage
 */
export interface RedshiftDescribeHsmConfigurationsMessage {
  /**
   * @schema RedshiftDescribeHsmConfigurationsMessage#HsmConfigurationIdentifier
   */
  readonly hsmConfigurationIdentifier?: string;

  /**
   * @schema RedshiftDescribeHsmConfigurationsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeHsmConfigurationsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftDescribeHsmConfigurationsMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema RedshiftDescribeHsmConfigurationsMessage#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * @schema RedshiftHsmConfigurationMessage
 */
export interface RedshiftHsmConfigurationMessage {
  /**
   * @schema RedshiftHsmConfigurationMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftHsmConfigurationMessage#HsmConfigurations
   */
  readonly hsmConfigurations?: RedshiftHsmConfiguration[];

}

/**
 * @schema RedshiftDescribeLoggingStatusMessage
 */
export interface RedshiftDescribeLoggingStatusMessage {
  /**
   * @schema RedshiftDescribeLoggingStatusMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

}

/**
 * @schema RedshiftLoggingStatus
 */
export interface RedshiftLoggingStatus {
  /**
   * @schema RedshiftLoggingStatus#LoggingEnabled
   */
  readonly loggingEnabled?: boolean;

  /**
   * @schema RedshiftLoggingStatus#BucketName
   */
  readonly bucketName?: string;

  /**
   * @schema RedshiftLoggingStatus#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

  /**
   * @schema RedshiftLoggingStatus#LastSuccessfulDeliveryTime
   */
  readonly lastSuccessfulDeliveryTime?: string;

  /**
   * @schema RedshiftLoggingStatus#LastFailureTime
   */
  readonly lastFailureTime?: string;

  /**
   * @schema RedshiftLoggingStatus#LastFailureMessage
   */
  readonly lastFailureMessage?: string;

}

/**
 * @schema RedshiftDescribeNodeConfigurationOptionsMessage
 */
export interface RedshiftDescribeNodeConfigurationOptionsMessage {
  /**
   * @schema RedshiftDescribeNodeConfigurationOptionsMessage#ActionType
   */
  readonly actionType: string;

  /**
   * @schema RedshiftDescribeNodeConfigurationOptionsMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftDescribeNodeConfigurationOptionsMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier?: string;

  /**
   * @schema RedshiftDescribeNodeConfigurationOptionsMessage#OwnerAccount
   */
  readonly ownerAccount?: string;

  /**
   * @schema RedshiftDescribeNodeConfigurationOptionsMessage#Filters
   */
  readonly filters?: RedshiftNodeConfigurationOptionsFilter[];

  /**
   * @schema RedshiftDescribeNodeConfigurationOptionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftDescribeNodeConfigurationOptionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema RedshiftNodeConfigurationOptionsMessage
 */
export interface RedshiftNodeConfigurationOptionsMessage {
  /**
   * @schema RedshiftNodeConfigurationOptionsMessage#NodeConfigurationOptionList
   */
  readonly nodeConfigurationOptionList?: RedshiftNodeConfigurationOption[];

  /**
   * @schema RedshiftNodeConfigurationOptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RedshiftDescribeOrderableClusterOptionsMessage
 */
export interface RedshiftDescribeOrderableClusterOptionsMessage {
  /**
   * @schema RedshiftDescribeOrderableClusterOptionsMessage#ClusterVersion
   */
  readonly clusterVersion?: string;

  /**
   * @schema RedshiftDescribeOrderableClusterOptionsMessage#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema RedshiftDescribeOrderableClusterOptionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeOrderableClusterOptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RedshiftOrderableClusterOptionsMessage
 */
export interface RedshiftOrderableClusterOptionsMessage {
  /**
   * @schema RedshiftOrderableClusterOptionsMessage#OrderableClusterOptions
   */
  readonly orderableClusterOptions?: RedshiftOrderableClusterOption[];

  /**
   * @schema RedshiftOrderableClusterOptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RedshiftDescribeReservedNodeOfferingsMessage
 */
export interface RedshiftDescribeReservedNodeOfferingsMessage {
  /**
   * @schema RedshiftDescribeReservedNodeOfferingsMessage#ReservedNodeOfferingId
   */
  readonly reservedNodeOfferingId?: string;

  /**
   * @schema RedshiftDescribeReservedNodeOfferingsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeReservedNodeOfferingsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RedshiftReservedNodeOfferingsMessage
 */
export interface RedshiftReservedNodeOfferingsMessage {
  /**
   * @schema RedshiftReservedNodeOfferingsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftReservedNodeOfferingsMessage#ReservedNodeOfferings
   */
  readonly reservedNodeOfferings?: RedshiftReservedNodeOffering[];

}

/**
 * @schema RedshiftDescribeReservedNodesMessage
 */
export interface RedshiftDescribeReservedNodesMessage {
  /**
   * @schema RedshiftDescribeReservedNodesMessage#ReservedNodeId
   */
  readonly reservedNodeId?: string;

  /**
   * @schema RedshiftDescribeReservedNodesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeReservedNodesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RedshiftReservedNodesMessage
 */
export interface RedshiftReservedNodesMessage {
  /**
   * @schema RedshiftReservedNodesMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftReservedNodesMessage#ReservedNodes
   */
  readonly reservedNodes?: RedshiftReservedNode[];

}

/**
 * @schema RedshiftDescribeResizeMessage
 */
export interface RedshiftDescribeResizeMessage {
  /**
   * @schema RedshiftDescribeResizeMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

}

/**
 * @schema RedshiftDescribeScheduledActionsMessage
 */
export interface RedshiftDescribeScheduledActionsMessage {
  /**
   * @schema RedshiftDescribeScheduledActionsMessage#ScheduledActionName
   */
  readonly scheduledActionName?: string;

  /**
   * @schema RedshiftDescribeScheduledActionsMessage#TargetActionType
   */
  readonly targetActionType?: string;

  /**
   * @schema RedshiftDescribeScheduledActionsMessage#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema RedshiftDescribeScheduledActionsMessage#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema RedshiftDescribeScheduledActionsMessage#Active
   */
  readonly active?: boolean;

  /**
   * @schema RedshiftDescribeScheduledActionsMessage#Filters
   */
  readonly filters?: RedshiftScheduledActionFilter[];

  /**
   * @schema RedshiftDescribeScheduledActionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftDescribeScheduledActionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema RedshiftScheduledActionsMessage
 */
export interface RedshiftScheduledActionsMessage {
  /**
   * @schema RedshiftScheduledActionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftScheduledActionsMessage#ScheduledActions
   */
  readonly scheduledActions?: RedshiftScheduledAction[];

}

/**
 * @schema RedshiftDescribeSnapshotCopyGrantsMessage
 */
export interface RedshiftDescribeSnapshotCopyGrantsMessage {
  /**
   * @schema RedshiftDescribeSnapshotCopyGrantsMessage#SnapshotCopyGrantName
   */
  readonly snapshotCopyGrantName?: string;

  /**
   * @schema RedshiftDescribeSnapshotCopyGrantsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeSnapshotCopyGrantsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftDescribeSnapshotCopyGrantsMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema RedshiftDescribeSnapshotCopyGrantsMessage#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * @schema RedshiftSnapshotCopyGrantMessage
 */
export interface RedshiftSnapshotCopyGrantMessage {
  /**
   * @schema RedshiftSnapshotCopyGrantMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftSnapshotCopyGrantMessage#SnapshotCopyGrants
   */
  readonly snapshotCopyGrants?: RedshiftSnapshotCopyGrant[];

}

/**
 * @schema RedshiftDescribeSnapshotSchedulesMessage
 */
export interface RedshiftDescribeSnapshotSchedulesMessage {
  /**
   * @schema RedshiftDescribeSnapshotSchedulesMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftDescribeSnapshotSchedulesMessage#ScheduleIdentifier
   */
  readonly scheduleIdentifier?: string;

  /**
   * @schema RedshiftDescribeSnapshotSchedulesMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema RedshiftDescribeSnapshotSchedulesMessage#TagValues
   */
  readonly tagValues?: string[];

  /**
   * @schema RedshiftDescribeSnapshotSchedulesMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftDescribeSnapshotSchedulesMessage#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema RedshiftDescribeSnapshotSchedulesOutputMessage
 */
export interface RedshiftDescribeSnapshotSchedulesOutputMessage {
  /**
   * @schema RedshiftDescribeSnapshotSchedulesOutputMessage#SnapshotSchedules
   */
  readonly snapshotSchedules?: RedshiftSnapshotSchedule[];

  /**
   * @schema RedshiftDescribeSnapshotSchedulesOutputMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RedshiftCustomerStorageMessage
 */
export interface RedshiftCustomerStorageMessage {
  /**
   * @schema RedshiftCustomerStorageMessage#TotalBackupSizeInMegaBytes
   */
  readonly totalBackupSizeInMegaBytes?: number;

  /**
   * @schema RedshiftCustomerStorageMessage#TotalProvisionedStorageInMegaBytes
   */
  readonly totalProvisionedStorageInMegaBytes?: number;

}

/**
 * @schema RedshiftDescribeTableRestoreStatusMessage
 */
export interface RedshiftDescribeTableRestoreStatusMessage {
  /**
   * @schema RedshiftDescribeTableRestoreStatusMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftDescribeTableRestoreStatusMessage#TableRestoreRequestId
   */
  readonly tableRestoreRequestId?: string;

  /**
   * @schema RedshiftDescribeTableRestoreStatusMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeTableRestoreStatusMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RedshiftTableRestoreStatusMessage
 */
export interface RedshiftTableRestoreStatusMessage {
  /**
   * @schema RedshiftTableRestoreStatusMessage#TableRestoreStatusDetails
   */
  readonly tableRestoreStatusDetails?: RedshiftTableRestoreStatus[];

  /**
   * @schema RedshiftTableRestoreStatusMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RedshiftDescribeTagsMessage
 */
export interface RedshiftDescribeTagsMessage {
  /**
   * @schema RedshiftDescribeTagsMessage#ResourceName
   */
  readonly resourceName?: string;

  /**
   * @schema RedshiftDescribeTagsMessage#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema RedshiftDescribeTagsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeTagsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftDescribeTagsMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema RedshiftDescribeTagsMessage#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * @schema RedshiftTaggedResourceListMessage
 */
export interface RedshiftTaggedResourceListMessage {
  /**
   * @schema RedshiftTaggedResourceListMessage#TaggedResources
   */
  readonly taggedResources?: RedshiftTaggedResource[];

  /**
   * @schema RedshiftTaggedResourceListMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RedshiftDescribeUsageLimitsMessage
 */
export interface RedshiftDescribeUsageLimitsMessage {
  /**
   * @schema RedshiftDescribeUsageLimitsMessage#UsageLimitId
   */
  readonly usageLimitId?: string;

  /**
   * @schema RedshiftDescribeUsageLimitsMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftDescribeUsageLimitsMessage#FeatureType
   */
  readonly featureType?: string;

  /**
   * @schema RedshiftDescribeUsageLimitsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftDescribeUsageLimitsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftDescribeUsageLimitsMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema RedshiftDescribeUsageLimitsMessage#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * @schema RedshiftUsageLimitList
 */
export interface RedshiftUsageLimitList {
  /**
   * @schema RedshiftUsageLimitList#UsageLimits
   */
  readonly usageLimits?: RedshiftUsageLimit[];

  /**
   * @schema RedshiftUsageLimitList#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RedshiftDisableLoggingMessage
 */
export interface RedshiftDisableLoggingMessage {
  /**
   * @schema RedshiftDisableLoggingMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

}

/**
 * @schema RedshiftDisableSnapshotCopyMessage
 */
export interface RedshiftDisableSnapshotCopyMessage {
  /**
   * @schema RedshiftDisableSnapshotCopyMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

}

/**
 * @schema RedshiftDisableSnapshotCopyResult
 */
export interface RedshiftDisableSnapshotCopyResult {
  /**
   * @schema RedshiftDisableSnapshotCopyResult#Cluster
   */
  readonly cluster?: RedshiftCluster;

}

/**
 * @schema RedshiftEnableLoggingMessage
 */
export interface RedshiftEnableLoggingMessage {
  /**
   * @schema RedshiftEnableLoggingMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema RedshiftEnableLoggingMessage#BucketName
   */
  readonly bucketName: string;

  /**
   * @schema RedshiftEnableLoggingMessage#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

}

/**
 * @schema RedshiftEnableSnapshotCopyMessage
 */
export interface RedshiftEnableSnapshotCopyMessage {
  /**
   * @schema RedshiftEnableSnapshotCopyMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema RedshiftEnableSnapshotCopyMessage#DestinationRegion
   */
  readonly destinationRegion: string;

  /**
   * @schema RedshiftEnableSnapshotCopyMessage#RetentionPeriod
   */
  readonly retentionPeriod?: number;

  /**
   * @schema RedshiftEnableSnapshotCopyMessage#SnapshotCopyGrantName
   */
  readonly snapshotCopyGrantName?: string;

  /**
   * @schema RedshiftEnableSnapshotCopyMessage#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

}

/**
 * @schema RedshiftEnableSnapshotCopyResult
 */
export interface RedshiftEnableSnapshotCopyResult {
  /**
   * @schema RedshiftEnableSnapshotCopyResult#Cluster
   */
  readonly cluster?: RedshiftCluster;

}

/**
 * @schema RedshiftGetClusterCredentialsMessage
 */
export interface RedshiftGetClusterCredentialsMessage {
  /**
   * @schema RedshiftGetClusterCredentialsMessage#DbUser
   */
  readonly dbUser: string;

  /**
   * @schema RedshiftGetClusterCredentialsMessage#DbName
   */
  readonly dbName?: string;

  /**
   * @schema RedshiftGetClusterCredentialsMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema RedshiftGetClusterCredentialsMessage#DurationSeconds
   */
  readonly durationSeconds?: number;

  /**
   * @schema RedshiftGetClusterCredentialsMessage#AutoCreate
   */
  readonly autoCreate?: boolean;

  /**
   * @schema RedshiftGetClusterCredentialsMessage#DbGroups
   */
  readonly dbGroups?: string[];

}

/**
 * @schema RedshiftClusterCredentials
 */
export interface RedshiftClusterCredentials {
  /**
   * @schema RedshiftClusterCredentials#DbUser
   */
  readonly dbUser?: string;

  /**
   * @schema RedshiftClusterCredentials#DbPassword
   */
  readonly dbPassword?: string;

  /**
   * @schema RedshiftClusterCredentials#Expiration
   */
  readonly expiration?: string;

}

/**
 * @schema RedshiftGetReservedNodeExchangeOfferingsInputMessage
 */
export interface RedshiftGetReservedNodeExchangeOfferingsInputMessage {
  /**
   * @schema RedshiftGetReservedNodeExchangeOfferingsInputMessage#ReservedNodeId
   */
  readonly reservedNodeId: string;

  /**
   * @schema RedshiftGetReservedNodeExchangeOfferingsInputMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema RedshiftGetReservedNodeExchangeOfferingsInputMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema RedshiftGetReservedNodeExchangeOfferingsOutputMessage
 */
export interface RedshiftGetReservedNodeExchangeOfferingsOutputMessage {
  /**
   * @schema RedshiftGetReservedNodeExchangeOfferingsOutputMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftGetReservedNodeExchangeOfferingsOutputMessage#ReservedNodeOfferings
   */
  readonly reservedNodeOfferings?: RedshiftReservedNodeOffering[];

}

/**
 * @schema RedshiftModifyClusterMessage
 */
export interface RedshiftModifyClusterMessage {
  /**
   * @schema RedshiftModifyClusterMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema RedshiftModifyClusterMessage#ClusterType
   */
  readonly clusterType?: string;

  /**
   * @schema RedshiftModifyClusterMessage#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema RedshiftModifyClusterMessage#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema RedshiftModifyClusterMessage#ClusterSecurityGroups
   */
  readonly clusterSecurityGroups?: string[];

  /**
   * @schema RedshiftModifyClusterMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RedshiftModifyClusterMessage#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema RedshiftModifyClusterMessage#ClusterParameterGroupName
   */
  readonly clusterParameterGroupName?: string;

  /**
   * @schema RedshiftModifyClusterMessage#AutomatedSnapshotRetentionPeriod
   */
  readonly automatedSnapshotRetentionPeriod?: number;

  /**
   * @schema RedshiftModifyClusterMessage#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

  /**
   * @schema RedshiftModifyClusterMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema RedshiftModifyClusterMessage#ClusterVersion
   */
  readonly clusterVersion?: string;

  /**
   * @schema RedshiftModifyClusterMessage#AllowVersionUpgrade
   */
  readonly allowVersionUpgrade?: boolean;

  /**
   * @schema RedshiftModifyClusterMessage#HsmClientCertificateIdentifier
   */
  readonly hsmClientCertificateIdentifier?: string;

  /**
   * @schema RedshiftModifyClusterMessage#HsmConfigurationIdentifier
   */
  readonly hsmConfigurationIdentifier?: string;

  /**
   * @schema RedshiftModifyClusterMessage#NewClusterIdentifier
   */
  readonly newClusterIdentifier?: string;

  /**
   * @schema RedshiftModifyClusterMessage#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema RedshiftModifyClusterMessage#ElasticIp
   */
  readonly elasticIp?: string;

  /**
   * @schema RedshiftModifyClusterMessage#EnhancedVpcRouting
   */
  readonly enhancedVpcRouting?: boolean;

  /**
   * @schema RedshiftModifyClusterMessage#MaintenanceTrackName
   */
  readonly maintenanceTrackName?: string;

  /**
   * @schema RedshiftModifyClusterMessage#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema RedshiftModifyClusterMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema RedshiftModifyClusterResult
 */
export interface RedshiftModifyClusterResult {
  /**
   * @schema RedshiftModifyClusterResult#Cluster
   */
  readonly cluster?: RedshiftCluster;

}

/**
 * @schema RedshiftModifyClusterDbRevisionMessage
 */
export interface RedshiftModifyClusterDbRevisionMessage {
  /**
   * @schema RedshiftModifyClusterDbRevisionMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema RedshiftModifyClusterDbRevisionMessage#RevisionTarget
   */
  readonly revisionTarget: string;

}

/**
 * @schema RedshiftModifyClusterDbRevisionResult
 */
export interface RedshiftModifyClusterDbRevisionResult {
  /**
   * @schema RedshiftModifyClusterDbRevisionResult#Cluster
   */
  readonly cluster?: RedshiftCluster;

}

/**
 * @schema RedshiftModifyClusterIamRolesMessage
 */
export interface RedshiftModifyClusterIamRolesMessage {
  /**
   * @schema RedshiftModifyClusterIamRolesMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema RedshiftModifyClusterIamRolesMessage#AddIamRoles
   */
  readonly addIamRoles?: string[];

  /**
   * @schema RedshiftModifyClusterIamRolesMessage#RemoveIamRoles
   */
  readonly removeIamRoles?: string[];

}

/**
 * @schema RedshiftModifyClusterIamRolesResult
 */
export interface RedshiftModifyClusterIamRolesResult {
  /**
   * @schema RedshiftModifyClusterIamRolesResult#Cluster
   */
  readonly cluster?: RedshiftCluster;

}

/**
 * @schema RedshiftModifyClusterMaintenanceMessage
 */
export interface RedshiftModifyClusterMaintenanceMessage {
  /**
   * @schema RedshiftModifyClusterMaintenanceMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema RedshiftModifyClusterMaintenanceMessage#DeferMaintenance
   */
  readonly deferMaintenance?: boolean;

  /**
   * @schema RedshiftModifyClusterMaintenanceMessage#DeferMaintenanceIdentifier
   */
  readonly deferMaintenanceIdentifier?: string;

  /**
   * @schema RedshiftModifyClusterMaintenanceMessage#DeferMaintenanceStartTime
   */
  readonly deferMaintenanceStartTime?: string;

  /**
   * @schema RedshiftModifyClusterMaintenanceMessage#DeferMaintenanceEndTime
   */
  readonly deferMaintenanceEndTime?: string;

  /**
   * @schema RedshiftModifyClusterMaintenanceMessage#DeferMaintenanceDuration
   */
  readonly deferMaintenanceDuration?: number;

}

/**
 * @schema RedshiftModifyClusterMaintenanceResult
 */
export interface RedshiftModifyClusterMaintenanceResult {
  /**
   * @schema RedshiftModifyClusterMaintenanceResult#Cluster
   */
  readonly cluster?: RedshiftCluster;

}

/**
 * @schema RedshiftModifyClusterParameterGroupMessage
 */
export interface RedshiftModifyClusterParameterGroupMessage {
  /**
   * @schema RedshiftModifyClusterParameterGroupMessage#ParameterGroupName
   */
  readonly parameterGroupName: string;

  /**
   * @schema RedshiftModifyClusterParameterGroupMessage#Parameters
   */
  readonly parameters: RedshiftParameter[];

}

/**
 * @schema RedshiftClusterParameterGroupNameMessage
 */
export interface RedshiftClusterParameterGroupNameMessage {
  /**
   * @schema RedshiftClusterParameterGroupNameMessage#ParameterGroupName
   */
  readonly parameterGroupName?: string;

  /**
   * @schema RedshiftClusterParameterGroupNameMessage#ParameterGroupStatus
   */
  readonly parameterGroupStatus?: string;

}

/**
 * @schema RedshiftModifyClusterSnapshotMessage
 */
export interface RedshiftModifyClusterSnapshotMessage {
  /**
   * @schema RedshiftModifyClusterSnapshotMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier: string;

  /**
   * @schema RedshiftModifyClusterSnapshotMessage#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

  /**
   * @schema RedshiftModifyClusterSnapshotMessage#Force
   */
  readonly force?: boolean;

}

/**
 * @schema RedshiftModifyClusterSnapshotResult
 */
export interface RedshiftModifyClusterSnapshotResult {
  /**
   * @schema RedshiftModifyClusterSnapshotResult#Snapshot
   */
  readonly snapshot?: RedshiftSnapshot;

}

/**
 * @schema RedshiftModifyClusterSnapshotScheduleMessage
 */
export interface RedshiftModifyClusterSnapshotScheduleMessage {
  /**
   * @schema RedshiftModifyClusterSnapshotScheduleMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema RedshiftModifyClusterSnapshotScheduleMessage#ScheduleIdentifier
   */
  readonly scheduleIdentifier?: string;

  /**
   * @schema RedshiftModifyClusterSnapshotScheduleMessage#DisassociateSchedule
   */
  readonly disassociateSchedule?: boolean;

}

/**
 * @schema RedshiftModifyClusterSubnetGroupMessage
 */
export interface RedshiftModifyClusterSubnetGroupMessage {
  /**
   * @schema RedshiftModifyClusterSubnetGroupMessage#ClusterSubnetGroupName
   */
  readonly clusterSubnetGroupName: string;

  /**
   * @schema RedshiftModifyClusterSubnetGroupMessage#Description
   */
  readonly description?: string;

  /**
   * @schema RedshiftModifyClusterSubnetGroupMessage#SubnetIds
   */
  readonly subnetIds: string[];

}

/**
 * @schema RedshiftModifyClusterSubnetGroupResult
 */
export interface RedshiftModifyClusterSubnetGroupResult {
  /**
   * @schema RedshiftModifyClusterSubnetGroupResult#ClusterSubnetGroup
   */
  readonly clusterSubnetGroup?: RedshiftClusterSubnetGroup;

}

/**
 * @schema RedshiftModifyEventSubscriptionMessage
 */
export interface RedshiftModifyEventSubscriptionMessage {
  /**
   * @schema RedshiftModifyEventSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName: string;

  /**
   * @schema RedshiftModifyEventSubscriptionMessage#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema RedshiftModifyEventSubscriptionMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema RedshiftModifyEventSubscriptionMessage#SourceIds
   */
  readonly sourceIds?: string[];

  /**
   * @schema RedshiftModifyEventSubscriptionMessage#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema RedshiftModifyEventSubscriptionMessage#Severity
   */
  readonly severity?: string;

  /**
   * @schema RedshiftModifyEventSubscriptionMessage#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema RedshiftModifyEventSubscriptionResult
 */
export interface RedshiftModifyEventSubscriptionResult {
  /**
   * @schema RedshiftModifyEventSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: RedshiftEventSubscription;

}

/**
 * @schema RedshiftModifyScheduledActionMessage
 */
export interface RedshiftModifyScheduledActionMessage {
  /**
   * @schema RedshiftModifyScheduledActionMessage#ScheduledActionName
   */
  readonly scheduledActionName: string;

  /**
   * @schema RedshiftModifyScheduledActionMessage#TargetAction
   */
  readonly targetAction?: RedshiftScheduledActionType;

  /**
   * @schema RedshiftModifyScheduledActionMessage#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema RedshiftModifyScheduledActionMessage#IamRole
   */
  readonly iamRole?: string;

  /**
   * @schema RedshiftModifyScheduledActionMessage#ScheduledActionDescription
   */
  readonly scheduledActionDescription?: string;

  /**
   * @schema RedshiftModifyScheduledActionMessage#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema RedshiftModifyScheduledActionMessage#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema RedshiftModifyScheduledActionMessage#Enable
   */
  readonly enable?: boolean;

}

/**
 * @schema RedshiftModifySnapshotCopyRetentionPeriodMessage
 */
export interface RedshiftModifySnapshotCopyRetentionPeriodMessage {
  /**
   * @schema RedshiftModifySnapshotCopyRetentionPeriodMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema RedshiftModifySnapshotCopyRetentionPeriodMessage#RetentionPeriod
   */
  readonly retentionPeriod: number;

  /**
   * @schema RedshiftModifySnapshotCopyRetentionPeriodMessage#Manual
   */
  readonly manual?: boolean;

}

/**
 * @schema RedshiftModifySnapshotCopyRetentionPeriodResult
 */
export interface RedshiftModifySnapshotCopyRetentionPeriodResult {
  /**
   * @schema RedshiftModifySnapshotCopyRetentionPeriodResult#Cluster
   */
  readonly cluster?: RedshiftCluster;

}

/**
 * @schema RedshiftModifySnapshotScheduleMessage
 */
export interface RedshiftModifySnapshotScheduleMessage {
  /**
   * @schema RedshiftModifySnapshotScheduleMessage#ScheduleIdentifier
   */
  readonly scheduleIdentifier: string;

  /**
   * @schema RedshiftModifySnapshotScheduleMessage#ScheduleDefinitions
   */
  readonly scheduleDefinitions: string[];

}

/**
 * @schema RedshiftModifyUsageLimitMessage
 */
export interface RedshiftModifyUsageLimitMessage {
  /**
   * @schema RedshiftModifyUsageLimitMessage#UsageLimitId
   */
  readonly usageLimitId: string;

  /**
   * @schema RedshiftModifyUsageLimitMessage#Amount
   */
  readonly amount?: number;

  /**
   * @schema RedshiftModifyUsageLimitMessage#BreachAction
   */
  readonly breachAction?: string;

}

/**
 * @schema RedshiftPauseClusterMessage
 */
export interface RedshiftPauseClusterMessage {
  /**
   * @schema RedshiftPauseClusterMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

}

/**
 * @schema RedshiftPauseClusterResult
 */
export interface RedshiftPauseClusterResult {
  /**
   * @schema RedshiftPauseClusterResult#Cluster
   */
  readonly cluster?: RedshiftCluster;

}

/**
 * @schema RedshiftPurchaseReservedNodeOfferingMessage
 */
export interface RedshiftPurchaseReservedNodeOfferingMessage {
  /**
   * @schema RedshiftPurchaseReservedNodeOfferingMessage#ReservedNodeOfferingId
   */
  readonly reservedNodeOfferingId: string;

  /**
   * @schema RedshiftPurchaseReservedNodeOfferingMessage#NodeCount
   */
  readonly nodeCount?: number;

}

/**
 * @schema RedshiftPurchaseReservedNodeOfferingResult
 */
export interface RedshiftPurchaseReservedNodeOfferingResult {
  /**
   * @schema RedshiftPurchaseReservedNodeOfferingResult#ReservedNode
   */
  readonly reservedNode?: RedshiftReservedNode;

}

/**
 * @schema RedshiftRebootClusterMessage
 */
export interface RedshiftRebootClusterMessage {
  /**
   * @schema RedshiftRebootClusterMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

}

/**
 * @schema RedshiftRebootClusterResult
 */
export interface RedshiftRebootClusterResult {
  /**
   * @schema RedshiftRebootClusterResult#Cluster
   */
  readonly cluster?: RedshiftCluster;

}

/**
 * @schema RedshiftResetClusterParameterGroupMessage
 */
export interface RedshiftResetClusterParameterGroupMessage {
  /**
   * @schema RedshiftResetClusterParameterGroupMessage#ParameterGroupName
   */
  readonly parameterGroupName: string;

  /**
   * @schema RedshiftResetClusterParameterGroupMessage#ResetAllParameters
   */
  readonly resetAllParameters?: boolean;

  /**
   * @schema RedshiftResetClusterParameterGroupMessage#Parameters
   */
  readonly parameters?: RedshiftParameter[];

}

/**
 * @schema RedshiftResizeClusterMessage
 */
export interface RedshiftResizeClusterMessage {
  /**
   * @schema RedshiftResizeClusterMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema RedshiftResizeClusterMessage#ClusterType
   */
  readonly clusterType?: string;

  /**
   * @schema RedshiftResizeClusterMessage#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema RedshiftResizeClusterMessage#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema RedshiftResizeClusterMessage#Classic
   */
  readonly classic?: boolean;

}

/**
 * @schema RedshiftResizeClusterResult
 */
export interface RedshiftResizeClusterResult {
  /**
   * @schema RedshiftResizeClusterResult#Cluster
   */
  readonly cluster?: RedshiftCluster;

}

/**
 * @schema RedshiftRestoreFromClusterSnapshotMessage
 */
export interface RedshiftRestoreFromClusterSnapshotMessage {
  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier: string;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#SnapshotClusterIdentifier
   */
  readonly snapshotClusterIdentifier?: string;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#Port
   */
  readonly port?: number;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#AllowVersionUpgrade
   */
  readonly allowVersionUpgrade?: boolean;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#ClusterSubnetGroupName
   */
  readonly clusterSubnetGroupName?: string;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#OwnerAccount
   */
  readonly ownerAccount?: string;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#HsmClientCertificateIdentifier
   */
  readonly hsmClientCertificateIdentifier?: string;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#HsmConfigurationIdentifier
   */
  readonly hsmConfigurationIdentifier?: string;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#ElasticIp
   */
  readonly elasticIp?: string;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#ClusterParameterGroupName
   */
  readonly clusterParameterGroupName?: string;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#ClusterSecurityGroups
   */
  readonly clusterSecurityGroups?: string[];

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#AutomatedSnapshotRetentionPeriod
   */
  readonly automatedSnapshotRetentionPeriod?: number;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#EnhancedVpcRouting
   */
  readonly enhancedVpcRouting?: boolean;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#AdditionalInfo
   */
  readonly additionalInfo?: string;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#IamRoles
   */
  readonly iamRoles?: string[];

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#MaintenanceTrackName
   */
  readonly maintenanceTrackName?: string;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#SnapshotScheduleIdentifier
   */
  readonly snapshotScheduleIdentifier?: string;

  /**
   * @schema RedshiftRestoreFromClusterSnapshotMessage#NumberOfNodes
   */
  readonly numberOfNodes?: number;

}

/**
 * @schema RedshiftRestoreFromClusterSnapshotResult
 */
export interface RedshiftRestoreFromClusterSnapshotResult {
  /**
   * @schema RedshiftRestoreFromClusterSnapshotResult#Cluster
   */
  readonly cluster?: RedshiftCluster;

}

/**
 * @schema RedshiftRestoreTableFromClusterSnapshotMessage
 */
export interface RedshiftRestoreTableFromClusterSnapshotMessage {
  /**
   * @schema RedshiftRestoreTableFromClusterSnapshotMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema RedshiftRestoreTableFromClusterSnapshotMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier: string;

  /**
   * @schema RedshiftRestoreTableFromClusterSnapshotMessage#SourceDatabaseName
   */
  readonly sourceDatabaseName: string;

  /**
   * @schema RedshiftRestoreTableFromClusterSnapshotMessage#SourceSchemaName
   */
  readonly sourceSchemaName?: string;

  /**
   * @schema RedshiftRestoreTableFromClusterSnapshotMessage#SourceTableName
   */
  readonly sourceTableName: string;

  /**
   * @schema RedshiftRestoreTableFromClusterSnapshotMessage#TargetDatabaseName
   */
  readonly targetDatabaseName?: string;

  /**
   * @schema RedshiftRestoreTableFromClusterSnapshotMessage#TargetSchemaName
   */
  readonly targetSchemaName?: string;

  /**
   * @schema RedshiftRestoreTableFromClusterSnapshotMessage#NewTableName
   */
  readonly newTableName: string;

}

/**
 * @schema RedshiftRestoreTableFromClusterSnapshotResult
 */
export interface RedshiftRestoreTableFromClusterSnapshotResult {
  /**
   * @schema RedshiftRestoreTableFromClusterSnapshotResult#TableRestoreStatus
   */
  readonly tableRestoreStatus?: RedshiftTableRestoreStatus;

}

/**
 * @schema RedshiftResumeClusterMessage
 */
export interface RedshiftResumeClusterMessage {
  /**
   * @schema RedshiftResumeClusterMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

}

/**
 * @schema RedshiftResumeClusterResult
 */
export interface RedshiftResumeClusterResult {
  /**
   * @schema RedshiftResumeClusterResult#Cluster
   */
  readonly cluster?: RedshiftCluster;

}

/**
 * @schema RedshiftRevokeClusterSecurityGroupIngressMessage
 */
export interface RedshiftRevokeClusterSecurityGroupIngressMessage {
  /**
   * @schema RedshiftRevokeClusterSecurityGroupIngressMessage#ClusterSecurityGroupName
   */
  readonly clusterSecurityGroupName: string;

  /**
   * @schema RedshiftRevokeClusterSecurityGroupIngressMessage#CIDRIP
   */
  readonly cidrip?: string;

  /**
   * @schema RedshiftRevokeClusterSecurityGroupIngressMessage#EC2SecurityGroupName
   */
  readonly ec2SecurityGroupName?: string;

  /**
   * @schema RedshiftRevokeClusterSecurityGroupIngressMessage#EC2SecurityGroupOwnerId
   */
  readonly ec2SecurityGroupOwnerId?: string;

}

/**
 * @schema RedshiftRevokeClusterSecurityGroupIngressResult
 */
export interface RedshiftRevokeClusterSecurityGroupIngressResult {
  /**
   * @schema RedshiftRevokeClusterSecurityGroupIngressResult#ClusterSecurityGroup
   */
  readonly clusterSecurityGroup?: RedshiftClusterSecurityGroup;

}

/**
 * @schema RedshiftRevokeSnapshotAccessMessage
 */
export interface RedshiftRevokeSnapshotAccessMessage {
  /**
   * @schema RedshiftRevokeSnapshotAccessMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier: string;

  /**
   * @schema RedshiftRevokeSnapshotAccessMessage#SnapshotClusterIdentifier
   */
  readonly snapshotClusterIdentifier?: string;

  /**
   * @schema RedshiftRevokeSnapshotAccessMessage#AccountWithRestoreAccess
   */
  readonly accountWithRestoreAccess: string;

}

/**
 * @schema RedshiftRevokeSnapshotAccessResult
 */
export interface RedshiftRevokeSnapshotAccessResult {
  /**
   * @schema RedshiftRevokeSnapshotAccessResult#Snapshot
   */
  readonly snapshot?: RedshiftSnapshot;

}

/**
 * @schema RedshiftRotateEncryptionKeyMessage
 */
export interface RedshiftRotateEncryptionKeyMessage {
  /**
   * @schema RedshiftRotateEncryptionKeyMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

}

/**
 * @schema RedshiftRotateEncryptionKeyResult
 */
export interface RedshiftRotateEncryptionKeyResult {
  /**
   * @schema RedshiftRotateEncryptionKeyResult#Cluster
   */
  readonly cluster?: RedshiftCluster;

}

/**
 * @schema RedshiftReservedNode
 */
export interface RedshiftReservedNode {
  /**
   * @schema RedshiftReservedNode#ReservedNodeId
   */
  readonly reservedNodeId?: string;

  /**
   * @schema RedshiftReservedNode#ReservedNodeOfferingId
   */
  readonly reservedNodeOfferingId?: string;

  /**
   * @schema RedshiftReservedNode#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema RedshiftReservedNode#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema RedshiftReservedNode#Duration
   */
  readonly duration?: number;

  /**
   * @schema RedshiftReservedNode#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema RedshiftReservedNode#UsagePrice
   */
  readonly usagePrice?: number;

  /**
   * @schema RedshiftReservedNode#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema RedshiftReservedNode#NodeCount
   */
  readonly nodeCount?: number;

  /**
   * @schema RedshiftReservedNode#State
   */
  readonly state?: string;

  /**
   * @schema RedshiftReservedNode#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema RedshiftReservedNode#RecurringCharges
   */
  readonly recurringCharges?: RedshiftRecurringCharge[];

  /**
   * @schema RedshiftReservedNode#ReservedNodeOfferingType
   */
  readonly reservedNodeOfferingType?: string;

}

/**
 * @schema RedshiftClusterSecurityGroup
 */
export interface RedshiftClusterSecurityGroup {
  /**
   * @schema RedshiftClusterSecurityGroup#ClusterSecurityGroupName
   */
  readonly clusterSecurityGroupName?: string;

  /**
   * @schema RedshiftClusterSecurityGroup#Description
   */
  readonly description?: string;

  /**
   * @schema RedshiftClusterSecurityGroup#EC2SecurityGroups
   */
  readonly ec2SecurityGroups?: RedshiftEc2SecurityGroup[];

  /**
   * @schema RedshiftClusterSecurityGroup#IPRanges
   */
  readonly ipRanges?: RedshiftIpRange[];

  /**
   * @schema RedshiftClusterSecurityGroup#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * @schema RedshiftSnapshot
 */
export interface RedshiftSnapshot {
  /**
   * @schema RedshiftSnapshot#SnapshotIdentifier
   */
  readonly snapshotIdentifier?: string;

  /**
   * @schema RedshiftSnapshot#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftSnapshot#SnapshotCreateTime
   */
  readonly snapshotCreateTime?: string;

  /**
   * @schema RedshiftSnapshot#Status
   */
  readonly status?: string;

  /**
   * @schema RedshiftSnapshot#Port
   */
  readonly port?: number;

  /**
   * @schema RedshiftSnapshot#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema RedshiftSnapshot#ClusterCreateTime
   */
  readonly clusterCreateTime?: string;

  /**
   * @schema RedshiftSnapshot#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema RedshiftSnapshot#ClusterVersion
   */
  readonly clusterVersion?: string;

  /**
   * @schema RedshiftSnapshot#SnapshotType
   */
  readonly snapshotType?: string;

  /**
   * @schema RedshiftSnapshot#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema RedshiftSnapshot#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema RedshiftSnapshot#DBName
   */
  readonly dbName?: string;

  /**
   * @schema RedshiftSnapshot#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema RedshiftSnapshot#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema RedshiftSnapshot#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RedshiftSnapshot#EncryptedWithHSM
   */
  readonly encryptedWithHsm?: boolean;

  /**
   * @schema RedshiftSnapshot#AccountsWithRestoreAccess
   */
  readonly accountsWithRestoreAccess?: RedshiftAccountWithRestoreAccess[];

  /**
   * @schema RedshiftSnapshot#OwnerAccount
   */
  readonly ownerAccount?: string;

  /**
   * @schema RedshiftSnapshot#TotalBackupSizeInMegaBytes
   */
  readonly totalBackupSizeInMegaBytes?: number;

  /**
   * @schema RedshiftSnapshot#ActualIncrementalBackupSizeInMegaBytes
   */
  readonly actualIncrementalBackupSizeInMegaBytes?: number;

  /**
   * @schema RedshiftSnapshot#BackupProgressInMegaBytes
   */
  readonly backupProgressInMegaBytes?: number;

  /**
   * @schema RedshiftSnapshot#CurrentBackupRateInMegaBytesPerSecond
   */
  readonly currentBackupRateInMegaBytesPerSecond?: number;

  /**
   * @schema RedshiftSnapshot#EstimatedSecondsToCompletion
   */
  readonly estimatedSecondsToCompletion?: number;

  /**
   * @schema RedshiftSnapshot#ElapsedTimeInSeconds
   */
  readonly elapsedTimeInSeconds?: number;

  /**
   * @schema RedshiftSnapshot#SourceRegion
   */
  readonly sourceRegion?: string;

  /**
   * @schema RedshiftSnapshot#Tags
   */
  readonly tags?: RedshiftTag[];

  /**
   * @schema RedshiftSnapshot#RestorableNodeTypes
   */
  readonly restorableNodeTypes?: string[];

  /**
   * @schema RedshiftSnapshot#EnhancedVpcRouting
   */
  readonly enhancedVpcRouting?: boolean;

  /**
   * @schema RedshiftSnapshot#MaintenanceTrackName
   */
  readonly maintenanceTrackName?: string;

  /**
   * @schema RedshiftSnapshot#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

  /**
   * @schema RedshiftSnapshot#ManualSnapshotRemainingDays
   */
  readonly manualSnapshotRemainingDays?: number;

  /**
   * @schema RedshiftSnapshot#SnapshotRetentionStartTime
   */
  readonly snapshotRetentionStartTime?: string;

}

/**
 * @schema RedshiftSnapshotErrorMessage
 */
export interface RedshiftSnapshotErrorMessage {
  /**
   * @schema RedshiftSnapshotErrorMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier?: string;

  /**
   * @schema RedshiftSnapshotErrorMessage#SnapshotClusterIdentifier
   */
  readonly snapshotClusterIdentifier?: string;

  /**
   * @schema RedshiftSnapshotErrorMessage#FailureCode
   */
  readonly failureCode?: string;

  /**
   * @schema RedshiftSnapshotErrorMessage#FailureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema RedshiftTag
 */
export interface RedshiftTag {
  /**
   * @schema RedshiftTag#Key
   */
  readonly key?: string;

  /**
   * @schema RedshiftTag#Value
   */
  readonly value?: string;

}

/**
 * @schema RedshiftCluster
 */
export interface RedshiftCluster {
  /**
   * @schema RedshiftCluster#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftCluster#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema RedshiftCluster#ClusterStatus
   */
  readonly clusterStatus?: string;

  /**
   * @schema RedshiftCluster#ClusterAvailabilityStatus
   */
  readonly clusterAvailabilityStatus?: string;

  /**
   * @schema RedshiftCluster#ModifyStatus
   */
  readonly modifyStatus?: string;

  /**
   * @schema RedshiftCluster#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema RedshiftCluster#DBName
   */
  readonly dbName?: string;

  /**
   * @schema RedshiftCluster#Endpoint
   */
  readonly endpoint?: RedshiftEndpoint;

  /**
   * @schema RedshiftCluster#ClusterCreateTime
   */
  readonly clusterCreateTime?: string;

  /**
   * @schema RedshiftCluster#AutomatedSnapshotRetentionPeriod
   */
  readonly automatedSnapshotRetentionPeriod?: number;

  /**
   * @schema RedshiftCluster#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

  /**
   * @schema RedshiftCluster#ClusterSecurityGroups
   */
  readonly clusterSecurityGroups?: RedshiftClusterSecurityGroupMembership[];

  /**
   * @schema RedshiftCluster#VpcSecurityGroups
   */
  readonly vpcSecurityGroups?: RedshiftVpcSecurityGroupMembership[];

  /**
   * @schema RedshiftCluster#ClusterParameterGroups
   */
  readonly clusterParameterGroups?: RedshiftClusterParameterGroupStatus[];

  /**
   * @schema RedshiftCluster#ClusterSubnetGroupName
   */
  readonly clusterSubnetGroupName?: string;

  /**
   * @schema RedshiftCluster#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema RedshiftCluster#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema RedshiftCluster#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema RedshiftCluster#PendingModifiedValues
   */
  readonly pendingModifiedValues?: RedshiftPendingModifiedValues;

  /**
   * @schema RedshiftCluster#ClusterVersion
   */
  readonly clusterVersion?: string;

  /**
   * @schema RedshiftCluster#AllowVersionUpgrade
   */
  readonly allowVersionUpgrade?: boolean;

  /**
   * @schema RedshiftCluster#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema RedshiftCluster#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema RedshiftCluster#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema RedshiftCluster#RestoreStatus
   */
  readonly restoreStatus?: RedshiftRestoreStatus;

  /**
   * @schema RedshiftCluster#DataTransferProgress
   */
  readonly dataTransferProgress?: RedshiftDataTransferProgress;

  /**
   * @schema RedshiftCluster#HsmStatus
   */
  readonly hsmStatus?: RedshiftHsmStatus;

  /**
   * @schema RedshiftCluster#ClusterSnapshotCopyStatus
   */
  readonly clusterSnapshotCopyStatus?: RedshiftClusterSnapshotCopyStatus;

  /**
   * @schema RedshiftCluster#ClusterPublicKey
   */
  readonly clusterPublicKey?: string;

  /**
   * @schema RedshiftCluster#ClusterNodes
   */
  readonly clusterNodes?: RedshiftClusterNode[];

  /**
   * @schema RedshiftCluster#ElasticIpStatus
   */
  readonly elasticIpStatus?: RedshiftElasticIpStatus;

  /**
   * @schema RedshiftCluster#ClusterRevisionNumber
   */
  readonly clusterRevisionNumber?: string;

  /**
   * @schema RedshiftCluster#Tags
   */
  readonly tags?: RedshiftTag[];

  /**
   * @schema RedshiftCluster#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RedshiftCluster#EnhancedVpcRouting
   */
  readonly enhancedVpcRouting?: boolean;

  /**
   * @schema RedshiftCluster#IamRoles
   */
  readonly iamRoles?: RedshiftClusterIamRole[];

  /**
   * @schema RedshiftCluster#PendingActions
   */
  readonly pendingActions?: string[];

  /**
   * @schema RedshiftCluster#MaintenanceTrackName
   */
  readonly maintenanceTrackName?: string;

  /**
   * @schema RedshiftCluster#ElasticResizeNumberOfNodeOptions
   */
  readonly elasticResizeNumberOfNodeOptions?: string;

  /**
   * @schema RedshiftCluster#DeferredMaintenanceWindows
   */
  readonly deferredMaintenanceWindows?: RedshiftDeferredMaintenanceWindow[];

  /**
   * @schema RedshiftCluster#SnapshotScheduleIdentifier
   */
  readonly snapshotScheduleIdentifier?: string;

  /**
   * @schema RedshiftCluster#SnapshotScheduleState
   */
  readonly snapshotScheduleState?: string;

  /**
   * @schema RedshiftCluster#ExpectedNextSnapshotScheduleTime
   */
  readonly expectedNextSnapshotScheduleTime?: string;

  /**
   * @schema RedshiftCluster#ExpectedNextSnapshotScheduleTimeStatus
   */
  readonly expectedNextSnapshotScheduleTimeStatus?: string;

  /**
   * @schema RedshiftCluster#NextMaintenanceWindowStartTime
   */
  readonly nextMaintenanceWindowStartTime?: string;

  /**
   * @schema RedshiftCluster#ResizeInfo
   */
  readonly resizeInfo?: RedshiftResizeInfo;

  /**
   * @schema RedshiftCluster#ClusterNamespaceArn
   */
  readonly clusterNamespaceArn?: string;

}

/**
 * @schema RedshiftClusterParameterGroup
 */
export interface RedshiftClusterParameterGroup {
  /**
   * @schema RedshiftClusterParameterGroup#ParameterGroupName
   */
  readonly parameterGroupName?: string;

  /**
   * @schema RedshiftClusterParameterGroup#ParameterGroupFamily
   */
  readonly parameterGroupFamily?: string;

  /**
   * @schema RedshiftClusterParameterGroup#Description
   */
  readonly description?: string;

  /**
   * @schema RedshiftClusterParameterGroup#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * @schema RedshiftClusterSubnetGroup
 */
export interface RedshiftClusterSubnetGroup {
  /**
   * @schema RedshiftClusterSubnetGroup#ClusterSubnetGroupName
   */
  readonly clusterSubnetGroupName?: string;

  /**
   * @schema RedshiftClusterSubnetGroup#Description
   */
  readonly description?: string;

  /**
   * @schema RedshiftClusterSubnetGroup#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema RedshiftClusterSubnetGroup#SubnetGroupStatus
   */
  readonly subnetGroupStatus?: string;

  /**
   * @schema RedshiftClusterSubnetGroup#Subnets
   */
  readonly subnets?: RedshiftSubnet[];

  /**
   * @schema RedshiftClusterSubnetGroup#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * @schema RedshiftEventSubscription
 */
export interface RedshiftEventSubscription {
  /**
   * @schema RedshiftEventSubscription#CustomerAwsId
   */
  readonly customerAwsId?: string;

  /**
   * @schema RedshiftEventSubscription#CustSubscriptionId
   */
  readonly custSubscriptionId?: string;

  /**
   * @schema RedshiftEventSubscription#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema RedshiftEventSubscription#Status
   */
  readonly status?: string;

  /**
   * @schema RedshiftEventSubscription#SubscriptionCreationTime
   */
  readonly subscriptionCreationTime?: string;

  /**
   * @schema RedshiftEventSubscription#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema RedshiftEventSubscription#SourceIdsList
   */
  readonly sourceIdsList?: string[];

  /**
   * @schema RedshiftEventSubscription#EventCategoriesList
   */
  readonly eventCategoriesList?: string[];

  /**
   * @schema RedshiftEventSubscription#Severity
   */
  readonly severity?: string;

  /**
   * @schema RedshiftEventSubscription#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema RedshiftEventSubscription#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * @schema RedshiftHsmClientCertificate
 */
export interface RedshiftHsmClientCertificate {
  /**
   * @schema RedshiftHsmClientCertificate#HsmClientCertificateIdentifier
   */
  readonly hsmClientCertificateIdentifier?: string;

  /**
   * @schema RedshiftHsmClientCertificate#HsmClientCertificatePublicKey
   */
  readonly hsmClientCertificatePublicKey?: string;

  /**
   * @schema RedshiftHsmClientCertificate#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * @schema RedshiftHsmConfiguration
 */
export interface RedshiftHsmConfiguration {
  /**
   * @schema RedshiftHsmConfiguration#HsmConfigurationIdentifier
   */
  readonly hsmConfigurationIdentifier?: string;

  /**
   * @schema RedshiftHsmConfiguration#Description
   */
  readonly description?: string;

  /**
   * @schema RedshiftHsmConfiguration#HsmIpAddress
   */
  readonly hsmIpAddress?: string;

  /**
   * @schema RedshiftHsmConfiguration#HsmPartitionName
   */
  readonly hsmPartitionName?: string;

  /**
   * @schema RedshiftHsmConfiguration#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * @schema RedshiftScheduledActionType
 */
export interface RedshiftScheduledActionType {
  /**
   * @schema RedshiftScheduledActionType#ResizeCluster
   */
  readonly resizeCluster?: RedshiftResizeClusterMessage;

  /**
   * @schema RedshiftScheduledActionType#PauseCluster
   */
  readonly pauseCluster?: RedshiftPauseClusterMessage;

  /**
   * @schema RedshiftScheduledActionType#ResumeCluster
   */
  readonly resumeCluster?: RedshiftResumeClusterMessage;

}

/**
 * @schema RedshiftSnapshotCopyGrant
 */
export interface RedshiftSnapshotCopyGrant {
  /**
   * @schema RedshiftSnapshotCopyGrant#SnapshotCopyGrantName
   */
  readonly snapshotCopyGrantName?: string;

  /**
   * @schema RedshiftSnapshotCopyGrant#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RedshiftSnapshotCopyGrant#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * @schema RedshiftClusterAssociatedToSchedule
 */
export interface RedshiftClusterAssociatedToSchedule {
  /**
   * @schema RedshiftClusterAssociatedToSchedule#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftClusterAssociatedToSchedule#ScheduleAssociationState
   */
  readonly scheduleAssociationState?: string;

}

/**
 * @schema RedshiftAccountAttribute
 */
export interface RedshiftAccountAttribute {
  /**
   * @schema RedshiftAccountAttribute#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema RedshiftAccountAttribute#AttributeValues
   */
  readonly attributeValues?: RedshiftAttributeValueTarget[];

}

/**
 * @schema RedshiftClusterDbRevision
 */
export interface RedshiftClusterDbRevision {
  /**
   * @schema RedshiftClusterDbRevision#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftClusterDbRevision#CurrentDatabaseRevision
   */
  readonly currentDatabaseRevision?: string;

  /**
   * @schema RedshiftClusterDbRevision#DatabaseRevisionReleaseDate
   */
  readonly databaseRevisionReleaseDate?: string;

  /**
   * @schema RedshiftClusterDbRevision#RevisionTargets
   */
  readonly revisionTargets?: RedshiftRevisionTarget[];

}

/**
 * @schema RedshiftParameter
 */
export interface RedshiftParameter {
  /**
   * @schema RedshiftParameter#ParameterName
   */
  readonly parameterName?: string;

  /**
   * @schema RedshiftParameter#ParameterValue
   */
  readonly parameterValue?: string;

  /**
   * @schema RedshiftParameter#Description
   */
  readonly description?: string;

  /**
   * @schema RedshiftParameter#Source
   */
  readonly source?: string;

  /**
   * @schema RedshiftParameter#DataType
   */
  readonly dataType?: string;

  /**
   * @schema RedshiftParameter#AllowedValues
   */
  readonly allowedValues?: string;

  /**
   * @schema RedshiftParameter#ApplyType
   */
  readonly applyType?: string;

  /**
   * @schema RedshiftParameter#IsModifiable
   */
  readonly isModifiable?: boolean;

  /**
   * @schema RedshiftParameter#MinimumEngineVersion
   */
  readonly minimumEngineVersion?: string;

}

/**
 * @schema RedshiftSnapshotSortingEntity
 */
export interface RedshiftSnapshotSortingEntity {
  /**
   * @schema RedshiftSnapshotSortingEntity#Attribute
   */
  readonly attribute: string;

  /**
   * @schema RedshiftSnapshotSortingEntity#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * @schema RedshiftMaintenanceTrack
 */
export interface RedshiftMaintenanceTrack {
  /**
   * @schema RedshiftMaintenanceTrack#MaintenanceTrackName
   */
  readonly maintenanceTrackName?: string;

  /**
   * @schema RedshiftMaintenanceTrack#DatabaseVersion
   */
  readonly databaseVersion?: string;

  /**
   * @schema RedshiftMaintenanceTrack#UpdateTargets
   */
  readonly updateTargets?: RedshiftUpdateTarget[];

}

/**
 * @schema RedshiftClusterVersion
 */
export interface RedshiftClusterVersion {
  /**
   * @schema RedshiftClusterVersion#ClusterVersion
   */
  readonly clusterVersion?: string;

  /**
   * @schema RedshiftClusterVersion#ClusterParameterGroupFamily
   */
  readonly clusterParameterGroupFamily?: string;

  /**
   * @schema RedshiftClusterVersion#Description
   */
  readonly description?: string;

}

/**
 * @schema RedshiftDefaultClusterParameters
 */
export interface RedshiftDefaultClusterParameters {
  /**
   * @schema RedshiftDefaultClusterParameters#ParameterGroupFamily
   */
  readonly parameterGroupFamily?: string;

  /**
   * @schema RedshiftDefaultClusterParameters#Marker
   */
  readonly marker?: string;

  /**
   * @schema RedshiftDefaultClusterParameters#Parameters
   */
  readonly parameters?: RedshiftParameter[];

}

/**
 * @schema RedshiftEventCategoriesMap
 */
export interface RedshiftEventCategoriesMap {
  /**
   * @schema RedshiftEventCategoriesMap#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema RedshiftEventCategoriesMap#Events
   */
  readonly events?: RedshiftEventInfoMap[];

}

/**
 * @schema RedshiftEvent
 */
export interface RedshiftEvent {
  /**
   * @schema RedshiftEvent#SourceIdentifier
   */
  readonly sourceIdentifier?: string;

  /**
   * @schema RedshiftEvent#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema RedshiftEvent#Message
   */
  readonly message?: string;

  /**
   * @schema RedshiftEvent#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema RedshiftEvent#Severity
   */
  readonly severity?: string;

  /**
   * @schema RedshiftEvent#Date
   */
  readonly date?: string;

  /**
   * @schema RedshiftEvent#EventId
   */
  readonly eventId?: string;

}

/**
 * @schema RedshiftNodeConfigurationOptionsFilter
 */
export interface RedshiftNodeConfigurationOptionsFilter {
  /**
   * @schema RedshiftNodeConfigurationOptionsFilter#Name
   */
  readonly name?: string;

  /**
   * @schema RedshiftNodeConfigurationOptionsFilter#Operator
   */
  readonly operator?: string;

  /**
   * @schema RedshiftNodeConfigurationOptionsFilter#Values
   */
  readonly values?: string[];

}

/**
 * @schema RedshiftNodeConfigurationOption
 */
export interface RedshiftNodeConfigurationOption {
  /**
   * @schema RedshiftNodeConfigurationOption#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema RedshiftNodeConfigurationOption#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema RedshiftNodeConfigurationOption#EstimatedDiskUtilizationPercent
   */
  readonly estimatedDiskUtilizationPercent?: number;

  /**
   * @schema RedshiftNodeConfigurationOption#Mode
   */
  readonly mode?: string;

}

/**
 * @schema RedshiftOrderableClusterOption
 */
export interface RedshiftOrderableClusterOption {
  /**
   * @schema RedshiftOrderableClusterOption#ClusterVersion
   */
  readonly clusterVersion?: string;

  /**
   * @schema RedshiftOrderableClusterOption#ClusterType
   */
  readonly clusterType?: string;

  /**
   * @schema RedshiftOrderableClusterOption#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema RedshiftOrderableClusterOption#AvailabilityZones
   */
  readonly availabilityZones?: RedshiftAvailabilityZone[];

}

/**
 * @schema RedshiftReservedNodeOffering
 */
export interface RedshiftReservedNodeOffering {
  /**
   * @schema RedshiftReservedNodeOffering#ReservedNodeOfferingId
   */
  readonly reservedNodeOfferingId?: string;

  /**
   * @schema RedshiftReservedNodeOffering#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema RedshiftReservedNodeOffering#Duration
   */
  readonly duration?: number;

  /**
   * @schema RedshiftReservedNodeOffering#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema RedshiftReservedNodeOffering#UsagePrice
   */
  readonly usagePrice?: number;

  /**
   * @schema RedshiftReservedNodeOffering#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema RedshiftReservedNodeOffering#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema RedshiftReservedNodeOffering#RecurringCharges
   */
  readonly recurringCharges?: RedshiftRecurringCharge[];

  /**
   * @schema RedshiftReservedNodeOffering#ReservedNodeOfferingType
   */
  readonly reservedNodeOfferingType?: string;

}

/**
 * @schema RedshiftScheduledActionFilter
 */
export interface RedshiftScheduledActionFilter {
  /**
   * @schema RedshiftScheduledActionFilter#Name
   */
  readonly name: string;

  /**
   * @schema RedshiftScheduledActionFilter#Values
   */
  readonly values: string[];

}

/**
 * @schema RedshiftTableRestoreStatus
 */
export interface RedshiftTableRestoreStatus {
  /**
   * @schema RedshiftTableRestoreStatus#TableRestoreRequestId
   */
  readonly tableRestoreRequestId?: string;

  /**
   * @schema RedshiftTableRestoreStatus#Status
   */
  readonly status?: string;

  /**
   * @schema RedshiftTableRestoreStatus#Message
   */
  readonly message?: string;

  /**
   * @schema RedshiftTableRestoreStatus#RequestTime
   */
  readonly requestTime?: string;

  /**
   * @schema RedshiftTableRestoreStatus#ProgressInMegaBytes
   */
  readonly progressInMegaBytes?: number;

  /**
   * @schema RedshiftTableRestoreStatus#TotalDataInMegaBytes
   */
  readonly totalDataInMegaBytes?: number;

  /**
   * @schema RedshiftTableRestoreStatus#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftTableRestoreStatus#SnapshotIdentifier
   */
  readonly snapshotIdentifier?: string;

  /**
   * @schema RedshiftTableRestoreStatus#SourceDatabaseName
   */
  readonly sourceDatabaseName?: string;

  /**
   * @schema RedshiftTableRestoreStatus#SourceSchemaName
   */
  readonly sourceSchemaName?: string;

  /**
   * @schema RedshiftTableRestoreStatus#SourceTableName
   */
  readonly sourceTableName?: string;

  /**
   * @schema RedshiftTableRestoreStatus#TargetDatabaseName
   */
  readonly targetDatabaseName?: string;

  /**
   * @schema RedshiftTableRestoreStatus#TargetSchemaName
   */
  readonly targetSchemaName?: string;

  /**
   * @schema RedshiftTableRestoreStatus#NewTableName
   */
  readonly newTableName?: string;

}

/**
 * @schema RedshiftTaggedResource
 */
export interface RedshiftTaggedResource {
  /**
   * @schema RedshiftTaggedResource#Tag
   */
  readonly tag?: RedshiftTag;

  /**
   * @schema RedshiftTaggedResource#ResourceName
   */
  readonly resourceName?: string;

  /**
   * @schema RedshiftTaggedResource#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * @schema RedshiftRecurringCharge
 */
export interface RedshiftRecurringCharge {
  /**
   * @schema RedshiftRecurringCharge#RecurringChargeAmount
   */
  readonly recurringChargeAmount?: number;

  /**
   * @schema RedshiftRecurringCharge#RecurringChargeFrequency
   */
  readonly recurringChargeFrequency?: string;

}

/**
 * @schema RedshiftEc2SecurityGroup
 */
export interface RedshiftEc2SecurityGroup {
  /**
   * @schema RedshiftEc2SecurityGroup#Status
   */
  readonly status?: string;

  /**
   * @schema RedshiftEc2SecurityGroup#EC2SecurityGroupName
   */
  readonly ec2SecurityGroupName?: string;

  /**
   * @schema RedshiftEc2SecurityGroup#EC2SecurityGroupOwnerId
   */
  readonly ec2SecurityGroupOwnerId?: string;

  /**
   * @schema RedshiftEc2SecurityGroup#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * @schema RedshiftIpRange
 */
export interface RedshiftIpRange {
  /**
   * @schema RedshiftIpRange#Status
   */
  readonly status?: string;

  /**
   * @schema RedshiftIpRange#CIDRIP
   */
  readonly cidrip?: string;

  /**
   * @schema RedshiftIpRange#Tags
   */
  readonly tags?: RedshiftTag[];

}

/**
 * @schema RedshiftAccountWithRestoreAccess
 */
export interface RedshiftAccountWithRestoreAccess {
  /**
   * @schema RedshiftAccountWithRestoreAccess#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema RedshiftAccountWithRestoreAccess#AccountAlias
   */
  readonly accountAlias?: string;

}

/**
 * @schema RedshiftEndpoint
 */
export interface RedshiftEndpoint {
  /**
   * @schema RedshiftEndpoint#Address
   */
  readonly address?: string;

  /**
   * @schema RedshiftEndpoint#Port
   */
  readonly port?: number;

}

/**
 * @schema RedshiftClusterSecurityGroupMembership
 */
export interface RedshiftClusterSecurityGroupMembership {
  /**
   * @schema RedshiftClusterSecurityGroupMembership#ClusterSecurityGroupName
   */
  readonly clusterSecurityGroupName?: string;

  /**
   * @schema RedshiftClusterSecurityGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * @schema RedshiftVpcSecurityGroupMembership
 */
export interface RedshiftVpcSecurityGroupMembership {
  /**
   * @schema RedshiftVpcSecurityGroupMembership#VpcSecurityGroupId
   */
  readonly vpcSecurityGroupId?: string;

  /**
   * @schema RedshiftVpcSecurityGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * @schema RedshiftClusterParameterGroupStatus
 */
export interface RedshiftClusterParameterGroupStatus {
  /**
   * @schema RedshiftClusterParameterGroupStatus#ParameterGroupName
   */
  readonly parameterGroupName?: string;

  /**
   * @schema RedshiftClusterParameterGroupStatus#ParameterApplyStatus
   */
  readonly parameterApplyStatus?: string;

  /**
   * @schema RedshiftClusterParameterGroupStatus#ClusterParameterStatusList
   */
  readonly clusterParameterStatusList?: RedshiftClusterParameterStatus[];

}

/**
 * @schema RedshiftPendingModifiedValues
 */
export interface RedshiftPendingModifiedValues {
  /**
   * @schema RedshiftPendingModifiedValues#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema RedshiftPendingModifiedValues#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema RedshiftPendingModifiedValues#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema RedshiftPendingModifiedValues#ClusterType
   */
  readonly clusterType?: string;

  /**
   * @schema RedshiftPendingModifiedValues#ClusterVersion
   */
  readonly clusterVersion?: string;

  /**
   * @schema RedshiftPendingModifiedValues#AutomatedSnapshotRetentionPeriod
   */
  readonly automatedSnapshotRetentionPeriod?: number;

  /**
   * @schema RedshiftPendingModifiedValues#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema RedshiftPendingModifiedValues#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema RedshiftPendingModifiedValues#EnhancedVpcRouting
   */
  readonly enhancedVpcRouting?: boolean;

  /**
   * @schema RedshiftPendingModifiedValues#MaintenanceTrackName
   */
  readonly maintenanceTrackName?: string;

  /**
   * @schema RedshiftPendingModifiedValues#EncryptionType
   */
  readonly encryptionType?: string;

}

/**
 * @schema RedshiftRestoreStatus
 */
export interface RedshiftRestoreStatus {
  /**
   * @schema RedshiftRestoreStatus#Status
   */
  readonly status?: string;

  /**
   * @schema RedshiftRestoreStatus#CurrentRestoreRateInMegaBytesPerSecond
   */
  readonly currentRestoreRateInMegaBytesPerSecond?: number;

  /**
   * @schema RedshiftRestoreStatus#SnapshotSizeInMegaBytes
   */
  readonly snapshotSizeInMegaBytes?: number;

  /**
   * @schema RedshiftRestoreStatus#ProgressInMegaBytes
   */
  readonly progressInMegaBytes?: number;

  /**
   * @schema RedshiftRestoreStatus#ElapsedTimeInSeconds
   */
  readonly elapsedTimeInSeconds?: number;

  /**
   * @schema RedshiftRestoreStatus#EstimatedTimeToCompletionInSeconds
   */
  readonly estimatedTimeToCompletionInSeconds?: number;

}

/**
 * @schema RedshiftDataTransferProgress
 */
export interface RedshiftDataTransferProgress {
  /**
   * @schema RedshiftDataTransferProgress#Status
   */
  readonly status?: string;

  /**
   * @schema RedshiftDataTransferProgress#CurrentRateInMegaBytesPerSecond
   */
  readonly currentRateInMegaBytesPerSecond?: number;

  /**
   * @schema RedshiftDataTransferProgress#TotalDataInMegaBytes
   */
  readonly totalDataInMegaBytes?: number;

  /**
   * @schema RedshiftDataTransferProgress#DataTransferredInMegaBytes
   */
  readonly dataTransferredInMegaBytes?: number;

  /**
   * @schema RedshiftDataTransferProgress#EstimatedTimeToCompletionInSeconds
   */
  readonly estimatedTimeToCompletionInSeconds?: number;

  /**
   * @schema RedshiftDataTransferProgress#ElapsedTimeInSeconds
   */
  readonly elapsedTimeInSeconds?: number;

}

/**
 * @schema RedshiftHsmStatus
 */
export interface RedshiftHsmStatus {
  /**
   * @schema RedshiftHsmStatus#HsmClientCertificateIdentifier
   */
  readonly hsmClientCertificateIdentifier?: string;

  /**
   * @schema RedshiftHsmStatus#HsmConfigurationIdentifier
   */
  readonly hsmConfigurationIdentifier?: string;

  /**
   * @schema RedshiftHsmStatus#Status
   */
  readonly status?: string;

}

/**
 * @schema RedshiftClusterSnapshotCopyStatus
 */
export interface RedshiftClusterSnapshotCopyStatus {
  /**
   * @schema RedshiftClusterSnapshotCopyStatus#DestinationRegion
   */
  readonly destinationRegion?: string;

  /**
   * @schema RedshiftClusterSnapshotCopyStatus#RetentionPeriod
   */
  readonly retentionPeriod?: number;

  /**
   * @schema RedshiftClusterSnapshotCopyStatus#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

  /**
   * @schema RedshiftClusterSnapshotCopyStatus#SnapshotCopyGrantName
   */
  readonly snapshotCopyGrantName?: string;

}

/**
 * @schema RedshiftClusterNode
 */
export interface RedshiftClusterNode {
  /**
   * @schema RedshiftClusterNode#NodeRole
   */
  readonly nodeRole?: string;

  /**
   * @schema RedshiftClusterNode#PrivateIPAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema RedshiftClusterNode#PublicIPAddress
   */
  readonly publicIpAddress?: string;

}

/**
 * @schema RedshiftElasticIpStatus
 */
export interface RedshiftElasticIpStatus {
  /**
   * @schema RedshiftElasticIpStatus#ElasticIp
   */
  readonly elasticIp?: string;

  /**
   * @schema RedshiftElasticIpStatus#Status
   */
  readonly status?: string;

}

/**
 * @schema RedshiftClusterIamRole
 */
export interface RedshiftClusterIamRole {
  /**
   * @schema RedshiftClusterIamRole#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema RedshiftClusterIamRole#ApplyStatus
   */
  readonly applyStatus?: string;

}

/**
 * @schema RedshiftDeferredMaintenanceWindow
 */
export interface RedshiftDeferredMaintenanceWindow {
  /**
   * @schema RedshiftDeferredMaintenanceWindow#DeferMaintenanceIdentifier
   */
  readonly deferMaintenanceIdentifier?: string;

  /**
   * @schema RedshiftDeferredMaintenanceWindow#DeferMaintenanceStartTime
   */
  readonly deferMaintenanceStartTime?: string;

  /**
   * @schema RedshiftDeferredMaintenanceWindow#DeferMaintenanceEndTime
   */
  readonly deferMaintenanceEndTime?: string;

}

/**
 * @schema RedshiftResizeInfo
 */
export interface RedshiftResizeInfo {
  /**
   * @schema RedshiftResizeInfo#ResizeType
   */
  readonly resizeType?: string;

  /**
   * @schema RedshiftResizeInfo#AllowCancelResize
   */
  readonly allowCancelResize?: boolean;

}

/**
 * @schema RedshiftSubnet
 */
export interface RedshiftSubnet {
  /**
   * @schema RedshiftSubnet#SubnetIdentifier
   */
  readonly subnetIdentifier?: string;

  /**
   * @schema RedshiftSubnet#SubnetAvailabilityZone
   */
  readonly subnetAvailabilityZone?: RedshiftAvailabilityZone;

  /**
   * @schema RedshiftSubnet#SubnetStatus
   */
  readonly subnetStatus?: string;

}

/**
 * @schema RedshiftAttributeValueTarget
 */
export interface RedshiftAttributeValueTarget {
  /**
   * @schema RedshiftAttributeValueTarget#AttributeValue
   */
  readonly attributeValue?: string;

}

/**
 * @schema RedshiftRevisionTarget
 */
export interface RedshiftRevisionTarget {
  /**
   * @schema RedshiftRevisionTarget#DatabaseRevision
   */
  readonly databaseRevision?: string;

  /**
   * @schema RedshiftRevisionTarget#Description
   */
  readonly description?: string;

  /**
   * @schema RedshiftRevisionTarget#DatabaseRevisionReleaseDate
   */
  readonly databaseRevisionReleaseDate?: string;

}

/**
 * @schema RedshiftUpdateTarget
 */
export interface RedshiftUpdateTarget {
  /**
   * @schema RedshiftUpdateTarget#MaintenanceTrackName
   */
  readonly maintenanceTrackName?: string;

  /**
   * @schema RedshiftUpdateTarget#DatabaseVersion
   */
  readonly databaseVersion?: string;

  /**
   * @schema RedshiftUpdateTarget#SupportedOperations
   */
  readonly supportedOperations?: RedshiftSupportedOperation[];

}

/**
 * @schema RedshiftEventInfoMap
 */
export interface RedshiftEventInfoMap {
  /**
   * @schema RedshiftEventInfoMap#EventId
   */
  readonly eventId?: string;

  /**
   * @schema RedshiftEventInfoMap#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema RedshiftEventInfoMap#EventDescription
   */
  readonly eventDescription?: string;

  /**
   * @schema RedshiftEventInfoMap#Severity
   */
  readonly severity?: string;

}

/**
 * @schema RedshiftAvailabilityZone
 */
export interface RedshiftAvailabilityZone {
  /**
   * @schema RedshiftAvailabilityZone#Name
   */
  readonly name?: string;

  /**
   * @schema RedshiftAvailabilityZone#SupportedPlatforms
   */
  readonly supportedPlatforms?: RedshiftSupportedPlatform[];

}

/**
 * @schema RedshiftClusterParameterStatus
 */
export interface RedshiftClusterParameterStatus {
  /**
   * @schema RedshiftClusterParameterStatus#ParameterName
   */
  readonly parameterName?: string;

  /**
   * @schema RedshiftClusterParameterStatus#ParameterApplyStatus
   */
  readonly parameterApplyStatus?: string;

  /**
   * @schema RedshiftClusterParameterStatus#ParameterApplyErrorDescription
   */
  readonly parameterApplyErrorDescription?: string;

}

/**
 * @schema RedshiftSupportedOperation
 */
export interface RedshiftSupportedOperation {
  /**
   * @schema RedshiftSupportedOperation#OperationName
   */
  readonly operationName?: string;

}

/**
 * @schema RedshiftSupportedPlatform
 */
export interface RedshiftSupportedPlatform {
  /**
   * @schema RedshiftSupportedPlatform#Name
   */
  readonly name?: string;

}
