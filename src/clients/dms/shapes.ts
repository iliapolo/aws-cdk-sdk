/**
 * @schema DmsAddTagsToResourceMessage
 */
export interface DmsAddTagsToResourceMessage {
  /**
   * @schema DmsAddTagsToResourceMessage#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema DmsAddTagsToResourceMessage#Tags
   */
  readonly tags: DmsTag[];

}

/**
 * @schema DmsAddTagsToResourceResponse
 */
export interface DmsAddTagsToResourceResponse {
}

/**
 * @schema DmsApplyPendingMaintenanceActionMessage
 */
export interface DmsApplyPendingMaintenanceActionMessage {
  /**
   * @schema DmsApplyPendingMaintenanceActionMessage#ReplicationInstanceArn
   */
  readonly replicationInstanceArn: string;

  /**
   * @schema DmsApplyPendingMaintenanceActionMessage#ApplyAction
   */
  readonly applyAction: string;

  /**
   * @schema DmsApplyPendingMaintenanceActionMessage#OptInType
   */
  readonly optInType: string;

}

/**
 * @schema DmsApplyPendingMaintenanceActionResponse
 */
export interface DmsApplyPendingMaintenanceActionResponse {
  /**
   * @schema DmsApplyPendingMaintenanceActionResponse#ResourcePendingMaintenanceActions
   */
  readonly resourcePendingMaintenanceActions?: DmsResourcePendingMaintenanceActions;

}

/**
 * @schema DmsCancelReplicationTaskAssessmentRunMessage
 */
export interface DmsCancelReplicationTaskAssessmentRunMessage {
  /**
   * @schema DmsCancelReplicationTaskAssessmentRunMessage#ReplicationTaskAssessmentRunArn
   */
  readonly replicationTaskAssessmentRunArn: string;

}

/**
 * @schema DmsCancelReplicationTaskAssessmentRunResponse
 */
export interface DmsCancelReplicationTaskAssessmentRunResponse {
  /**
   * @schema DmsCancelReplicationTaskAssessmentRunResponse#ReplicationTaskAssessmentRun
   */
  readonly replicationTaskAssessmentRun?: DmsReplicationTaskAssessmentRun;

}

/**
 * @schema DmsCreateEndpointMessage
 */
export interface DmsCreateEndpointMessage {
  /**
   * @schema DmsCreateEndpointMessage#EndpointIdentifier
   */
  readonly endpointIdentifier: string;

  /**
   * @schema DmsCreateEndpointMessage#EndpointType
   */
  readonly endpointType: string;

  /**
   * @schema DmsCreateEndpointMessage#EngineName
   */
  readonly engineName: string;

  /**
   * @schema DmsCreateEndpointMessage#Username
   */
  readonly username?: string;

  /**
   * @schema DmsCreateEndpointMessage#Password
   */
  readonly password?: string;

  /**
   * @schema DmsCreateEndpointMessage#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema DmsCreateEndpointMessage#Port
   */
  readonly port?: number;

  /**
   * @schema DmsCreateEndpointMessage#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema DmsCreateEndpointMessage#ExtraConnectionAttributes
   */
  readonly extraConnectionAttributes?: string;

  /**
   * @schema DmsCreateEndpointMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema DmsCreateEndpointMessage#Tags
   */
  readonly tags?: DmsTag[];

  /**
   * @schema DmsCreateEndpointMessage#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema DmsCreateEndpointMessage#SslMode
   */
  readonly sslMode?: string;

  /**
   * @schema DmsCreateEndpointMessage#ServiceAccessRoleArn
   */
  readonly serviceAccessRoleArn?: string;

  /**
   * @schema DmsCreateEndpointMessage#ExternalTableDefinition
   */
  readonly externalTableDefinition?: string;

  /**
   * @schema DmsCreateEndpointMessage#DynamoDbSettings
   */
  readonly dynamoDbSettings?: DmsDynamoDbSettings;

  /**
   * @schema DmsCreateEndpointMessage#S3Settings
   */
  readonly s3Settings?: Dmss3Settings;

  /**
   * @schema DmsCreateEndpointMessage#DmsTransferSettings
   */
  readonly dmsTransferSettings?: DmsDmsTransferSettings;

  /**
   * @schema DmsCreateEndpointMessage#MongoDbSettings
   */
  readonly mongoDbSettings?: DmsMongoDbSettings;

  /**
   * @schema DmsCreateEndpointMessage#KinesisSettings
   */
  readonly kinesisSettings?: DmsKinesisSettings;

  /**
   * @schema DmsCreateEndpointMessage#KafkaSettings
   */
  readonly kafkaSettings?: DmsKafkaSettings;

  /**
   * @schema DmsCreateEndpointMessage#ElasticsearchSettings
   */
  readonly elasticsearchSettings?: DmsElasticsearchSettings;

  /**
   * @schema DmsCreateEndpointMessage#NeptuneSettings
   */
  readonly neptuneSettings?: DmsNeptuneSettings;

  /**
   * @schema DmsCreateEndpointMessage#RedshiftSettings
   */
  readonly redshiftSettings?: DmsRedshiftSettings;

  /**
   * @schema DmsCreateEndpointMessage#PostgreSQLSettings
   */
  readonly postgreSqlSettings?: DmsPostgreSqlSettings;

  /**
   * @schema DmsCreateEndpointMessage#MySQLSettings
   */
  readonly mySqlSettings?: DmsMySqlSettings;

  /**
   * @schema DmsCreateEndpointMessage#OracleSettings
   */
  readonly oracleSettings?: DmsOracleSettings;

  /**
   * @schema DmsCreateEndpointMessage#SybaseSettings
   */
  readonly sybaseSettings?: DmsSybaseSettings;

  /**
   * @schema DmsCreateEndpointMessage#MicrosoftSQLServerSettings
   */
  readonly microsoftSqlServerSettings?: DmsMicrosoftSqlServerSettings;

  /**
   * @schema DmsCreateEndpointMessage#IBMDb2Settings
   */
  readonly ibmDb2Settings?: DmsibmDb2Settings;

  /**
   * @schema DmsCreateEndpointMessage#ResourceIdentifier
   */
  readonly resourceIdentifier?: string;

  /**
   * @schema DmsCreateEndpointMessage#DocDbSettings
   */
  readonly docDbSettings?: DmsDocDbSettings;

}

/**
 * @schema DmsCreateEndpointResponse
 */
export interface DmsCreateEndpointResponse {
  /**
   * @schema DmsCreateEndpointResponse#Endpoint
   */
  readonly endpoint?: DmsEndpoint;

}

/**
 * @schema DmsCreateEventSubscriptionMessage
 */
export interface DmsCreateEventSubscriptionMessage {
  /**
   * @schema DmsCreateEventSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName: string;

  /**
   * @schema DmsCreateEventSubscriptionMessage#SnsTopicArn
   */
  readonly snsTopicArn: string;

  /**
   * @schema DmsCreateEventSubscriptionMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema DmsCreateEventSubscriptionMessage#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema DmsCreateEventSubscriptionMessage#SourceIds
   */
  readonly sourceIds?: string[];

  /**
   * @schema DmsCreateEventSubscriptionMessage#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema DmsCreateEventSubscriptionMessage#Tags
   */
  readonly tags?: DmsTag[];

}

/**
 * @schema DmsCreateEventSubscriptionResponse
 */
export interface DmsCreateEventSubscriptionResponse {
  /**
   * @schema DmsCreateEventSubscriptionResponse#EventSubscription
   */
  readonly eventSubscription?: DmsEventSubscription;

}

/**
 * @schema DmsCreateReplicationInstanceMessage
 */
export interface DmsCreateReplicationInstanceMessage {
  /**
   * @schema DmsCreateReplicationInstanceMessage#ReplicationInstanceIdentifier
   */
  readonly replicationInstanceIdentifier: string;

  /**
   * @schema DmsCreateReplicationInstanceMessage#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema DmsCreateReplicationInstanceMessage#ReplicationInstanceClass
   */
  readonly replicationInstanceClass: string;

  /**
   * @schema DmsCreateReplicationInstanceMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema DmsCreateReplicationInstanceMessage#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema DmsCreateReplicationInstanceMessage#ReplicationSubnetGroupIdentifier
   */
  readonly replicationSubnetGroupIdentifier?: string;

  /**
   * @schema DmsCreateReplicationInstanceMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema DmsCreateReplicationInstanceMessage#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema DmsCreateReplicationInstanceMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DmsCreateReplicationInstanceMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema DmsCreateReplicationInstanceMessage#Tags
   */
  readonly tags?: DmsTag[];

  /**
   * @schema DmsCreateReplicationInstanceMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema DmsCreateReplicationInstanceMessage#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema DmsCreateReplicationInstanceMessage#DnsNameServers
   */
  readonly dnsNameServers?: string;

  /**
   * @schema DmsCreateReplicationInstanceMessage#ResourceIdentifier
   */
  readonly resourceIdentifier?: string;

}

/**
 * @schema DmsCreateReplicationInstanceResponse
 */
export interface DmsCreateReplicationInstanceResponse {
  /**
   * @schema DmsCreateReplicationInstanceResponse#ReplicationInstance
   */
  readonly replicationInstance?: DmsReplicationInstance;

}

/**
 * @schema DmsCreateReplicationSubnetGroupMessage
 */
export interface DmsCreateReplicationSubnetGroupMessage {
  /**
   * @schema DmsCreateReplicationSubnetGroupMessage#ReplicationSubnetGroupIdentifier
   */
  readonly replicationSubnetGroupIdentifier: string;

  /**
   * @schema DmsCreateReplicationSubnetGroupMessage#ReplicationSubnetGroupDescription
   */
  readonly replicationSubnetGroupDescription: string;

  /**
   * @schema DmsCreateReplicationSubnetGroupMessage#SubnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema DmsCreateReplicationSubnetGroupMessage#Tags
   */
  readonly tags?: DmsTag[];

}

/**
 * @schema DmsCreateReplicationSubnetGroupResponse
 */
export interface DmsCreateReplicationSubnetGroupResponse {
  /**
   * @schema DmsCreateReplicationSubnetGroupResponse#ReplicationSubnetGroup
   */
  readonly replicationSubnetGroup?: DmsReplicationSubnetGroup;

}

/**
 * @schema DmsCreateReplicationTaskMessage
 */
export interface DmsCreateReplicationTaskMessage {
  /**
   * @schema DmsCreateReplicationTaskMessage#ReplicationTaskIdentifier
   */
  readonly replicationTaskIdentifier: string;

  /**
   * @schema DmsCreateReplicationTaskMessage#SourceEndpointArn
   */
  readonly sourceEndpointArn: string;

  /**
   * @schema DmsCreateReplicationTaskMessage#TargetEndpointArn
   */
  readonly targetEndpointArn: string;

  /**
   * @schema DmsCreateReplicationTaskMessage#ReplicationInstanceArn
   */
  readonly replicationInstanceArn: string;

  /**
   * @schema DmsCreateReplicationTaskMessage#MigrationType
   */
  readonly migrationType: string;

  /**
   * @schema DmsCreateReplicationTaskMessage#TableMappings
   */
  readonly tableMappings: string;

  /**
   * @schema DmsCreateReplicationTaskMessage#ReplicationTaskSettings
   */
  readonly replicationTaskSettings?: string;

  /**
   * @schema DmsCreateReplicationTaskMessage#CdcStartTime
   */
  readonly cdcStartTime?: string;

  /**
   * @schema DmsCreateReplicationTaskMessage#CdcStartPosition
   */
  readonly cdcStartPosition?: string;

  /**
   * @schema DmsCreateReplicationTaskMessage#CdcStopPosition
   */
  readonly cdcStopPosition?: string;

  /**
   * @schema DmsCreateReplicationTaskMessage#Tags
   */
  readonly tags?: DmsTag[];

  /**
   * @schema DmsCreateReplicationTaskMessage#TaskData
   */
  readonly taskData?: string;

  /**
   * @schema DmsCreateReplicationTaskMessage#ResourceIdentifier
   */
  readonly resourceIdentifier?: string;

}

/**
 * @schema DmsCreateReplicationTaskResponse
 */
export interface DmsCreateReplicationTaskResponse {
  /**
   * @schema DmsCreateReplicationTaskResponse#ReplicationTask
   */
  readonly replicationTask?: DmsReplicationTask;

}

/**
 * @schema DmsDeleteCertificateMessage
 */
export interface DmsDeleteCertificateMessage {
  /**
   * @schema DmsDeleteCertificateMessage#CertificateArn
   */
  readonly certificateArn: string;

}

/**
 * @schema DmsDeleteCertificateResponse
 */
export interface DmsDeleteCertificateResponse {
  /**
   * @schema DmsDeleteCertificateResponse#Certificate
   */
  readonly certificate?: DmsCertificate;

}

/**
 * @schema DmsDeleteConnectionMessage
 */
export interface DmsDeleteConnectionMessage {
  /**
   * @schema DmsDeleteConnectionMessage#EndpointArn
   */
  readonly endpointArn: string;

  /**
   * @schema DmsDeleteConnectionMessage#ReplicationInstanceArn
   */
  readonly replicationInstanceArn: string;

}

/**
 * @schema DmsDeleteConnectionResponse
 */
export interface DmsDeleteConnectionResponse {
  /**
   * @schema DmsDeleteConnectionResponse#Connection
   */
  readonly connection?: DmsConnection;

}

/**
 * @schema DmsDeleteEndpointMessage
 */
export interface DmsDeleteEndpointMessage {
  /**
   * @schema DmsDeleteEndpointMessage#EndpointArn
   */
  readonly endpointArn: string;

}

/**
 * @schema DmsDeleteEndpointResponse
 */
export interface DmsDeleteEndpointResponse {
  /**
   * @schema DmsDeleteEndpointResponse#Endpoint
   */
  readonly endpoint?: DmsEndpoint;

}

/**
 * @schema DmsDeleteEventSubscriptionMessage
 */
export interface DmsDeleteEventSubscriptionMessage {
  /**
   * @schema DmsDeleteEventSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName: string;

}

/**
 * @schema DmsDeleteEventSubscriptionResponse
 */
export interface DmsDeleteEventSubscriptionResponse {
  /**
   * @schema DmsDeleteEventSubscriptionResponse#EventSubscription
   */
  readonly eventSubscription?: DmsEventSubscription;

}

/**
 * @schema DmsDeleteReplicationInstanceMessage
 */
export interface DmsDeleteReplicationInstanceMessage {
  /**
   * @schema DmsDeleteReplicationInstanceMessage#ReplicationInstanceArn
   */
  readonly replicationInstanceArn: string;

}

/**
 * @schema DmsDeleteReplicationInstanceResponse
 */
export interface DmsDeleteReplicationInstanceResponse {
  /**
   * @schema DmsDeleteReplicationInstanceResponse#ReplicationInstance
   */
  readonly replicationInstance?: DmsReplicationInstance;

}

/**
 * @schema DmsDeleteReplicationSubnetGroupMessage
 */
export interface DmsDeleteReplicationSubnetGroupMessage {
  /**
   * @schema DmsDeleteReplicationSubnetGroupMessage#ReplicationSubnetGroupIdentifier
   */
  readonly replicationSubnetGroupIdentifier: string;

}

/**
 * @schema DmsDeleteReplicationSubnetGroupResponse
 */
export interface DmsDeleteReplicationSubnetGroupResponse {
}

/**
 * @schema DmsDeleteReplicationTaskMessage
 */
export interface DmsDeleteReplicationTaskMessage {
  /**
   * @schema DmsDeleteReplicationTaskMessage#ReplicationTaskArn
   */
  readonly replicationTaskArn: string;

}

/**
 * @schema DmsDeleteReplicationTaskResponse
 */
export interface DmsDeleteReplicationTaskResponse {
  /**
   * @schema DmsDeleteReplicationTaskResponse#ReplicationTask
   */
  readonly replicationTask?: DmsReplicationTask;

}

/**
 * @schema DmsDeleteReplicationTaskAssessmentRunMessage
 */
export interface DmsDeleteReplicationTaskAssessmentRunMessage {
  /**
   * @schema DmsDeleteReplicationTaskAssessmentRunMessage#ReplicationTaskAssessmentRunArn
   */
  readonly replicationTaskAssessmentRunArn: string;

}

/**
 * @schema DmsDeleteReplicationTaskAssessmentRunResponse
 */
export interface DmsDeleteReplicationTaskAssessmentRunResponse {
  /**
   * @schema DmsDeleteReplicationTaskAssessmentRunResponse#ReplicationTaskAssessmentRun
   */
  readonly replicationTaskAssessmentRun?: DmsReplicationTaskAssessmentRun;

}

/**
 * @schema DmsDescribeAccountAttributesMessage
 */
export interface DmsDescribeAccountAttributesMessage {
}

/**
 * @schema DmsDescribeAccountAttributesResponse
 */
export interface DmsDescribeAccountAttributesResponse {
  /**
   * @schema DmsDescribeAccountAttributesResponse#AccountQuotas
   */
  readonly accountQuotas?: DmsAccountQuota[];

  /**
   * @schema DmsDescribeAccountAttributesResponse#UniqueAccountIdentifier
   */
  readonly uniqueAccountIdentifier?: string;

}

/**
 * @schema DmsDescribeApplicableIndividualAssessmentsMessage
 */
export interface DmsDescribeApplicableIndividualAssessmentsMessage {
  /**
   * @schema DmsDescribeApplicableIndividualAssessmentsMessage#ReplicationTaskArn
   */
  readonly replicationTaskArn?: string;

  /**
   * @schema DmsDescribeApplicableIndividualAssessmentsMessage#ReplicationInstanceArn
   */
  readonly replicationInstanceArn?: string;

  /**
   * @schema DmsDescribeApplicableIndividualAssessmentsMessage#SourceEngineName
   */
  readonly sourceEngineName?: string;

  /**
   * @schema DmsDescribeApplicableIndividualAssessmentsMessage#TargetEngineName
   */
  readonly targetEngineName?: string;

  /**
   * @schema DmsDescribeApplicableIndividualAssessmentsMessage#MigrationType
   */
  readonly migrationType?: string;

  /**
   * @schema DmsDescribeApplicableIndividualAssessmentsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DmsDescribeApplicableIndividualAssessmentsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DmsDescribeApplicableIndividualAssessmentsResponse
 */
export interface DmsDescribeApplicableIndividualAssessmentsResponse {
  /**
   * @schema DmsDescribeApplicableIndividualAssessmentsResponse#IndividualAssessmentNames
   */
  readonly individualAssessmentNames?: string[];

  /**
   * @schema DmsDescribeApplicableIndividualAssessmentsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DmsDescribeCertificatesMessage
 */
export interface DmsDescribeCertificatesMessage {
  /**
   * @schema DmsDescribeCertificatesMessage#Filters
   */
  readonly filters?: DmsFilter[];

  /**
   * @schema DmsDescribeCertificatesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DmsDescribeCertificatesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DmsDescribeCertificatesResponse
 */
export interface DmsDescribeCertificatesResponse {
  /**
   * @schema DmsDescribeCertificatesResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema DmsDescribeCertificatesResponse#Certificates
   */
  readonly certificates?: DmsCertificate[];

}

/**
 * @schema DmsDescribeConnectionsMessage
 */
export interface DmsDescribeConnectionsMessage {
  /**
   * @schema DmsDescribeConnectionsMessage#Filters
   */
  readonly filters?: DmsFilter[];

  /**
   * @schema DmsDescribeConnectionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DmsDescribeConnectionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DmsDescribeConnectionsResponse
 */
export interface DmsDescribeConnectionsResponse {
  /**
   * @schema DmsDescribeConnectionsResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema DmsDescribeConnectionsResponse#Connections
   */
  readonly connections?: DmsConnection[];

}

/**
 * @schema DmsDescribeEndpointTypesMessage
 */
export interface DmsDescribeEndpointTypesMessage {
  /**
   * @schema DmsDescribeEndpointTypesMessage#Filters
   */
  readonly filters?: DmsFilter[];

  /**
   * @schema DmsDescribeEndpointTypesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DmsDescribeEndpointTypesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DmsDescribeEndpointTypesResponse
 */
export interface DmsDescribeEndpointTypesResponse {
  /**
   * @schema DmsDescribeEndpointTypesResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema DmsDescribeEndpointTypesResponse#SupportedEndpointTypes
   */
  readonly supportedEndpointTypes?: DmsSupportedEndpointType[];

}

/**
 * @schema DmsDescribeEndpointsMessage
 */
export interface DmsDescribeEndpointsMessage {
  /**
   * @schema DmsDescribeEndpointsMessage#Filters
   */
  readonly filters?: DmsFilter[];

  /**
   * @schema DmsDescribeEndpointsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DmsDescribeEndpointsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DmsDescribeEndpointsResponse
 */
export interface DmsDescribeEndpointsResponse {
  /**
   * @schema DmsDescribeEndpointsResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema DmsDescribeEndpointsResponse#Endpoints
   */
  readonly endpoints?: DmsEndpoint[];

}

/**
 * @schema DmsDescribeEventCategoriesMessage
 */
export interface DmsDescribeEventCategoriesMessage {
  /**
   * @schema DmsDescribeEventCategoriesMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema DmsDescribeEventCategoriesMessage#Filters
   */
  readonly filters?: DmsFilter[];

}

/**
 * @schema DmsDescribeEventCategoriesResponse
 */
export interface DmsDescribeEventCategoriesResponse {
  /**
   * @schema DmsDescribeEventCategoriesResponse#EventCategoryGroupList
   */
  readonly eventCategoryGroupList?: DmsEventCategoryGroup[];

}

/**
 * @schema DmsDescribeEventSubscriptionsMessage
 */
export interface DmsDescribeEventSubscriptionsMessage {
  /**
   * @schema DmsDescribeEventSubscriptionsMessage#SubscriptionName
   */
  readonly subscriptionName?: string;

  /**
   * @schema DmsDescribeEventSubscriptionsMessage#Filters
   */
  readonly filters?: DmsFilter[];

  /**
   * @schema DmsDescribeEventSubscriptionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DmsDescribeEventSubscriptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DmsDescribeEventSubscriptionsResponse
 */
export interface DmsDescribeEventSubscriptionsResponse {
  /**
   * @schema DmsDescribeEventSubscriptionsResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema DmsDescribeEventSubscriptionsResponse#EventSubscriptionsList
   */
  readonly eventSubscriptionsList?: DmsEventSubscription[];

}

/**
 * @schema DmsDescribeEventsMessage
 */
export interface DmsDescribeEventsMessage {
  /**
   * @schema DmsDescribeEventsMessage#SourceIdentifier
   */
  readonly sourceIdentifier?: string;

  /**
   * @schema DmsDescribeEventsMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema DmsDescribeEventsMessage#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema DmsDescribeEventsMessage#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema DmsDescribeEventsMessage#Duration
   */
  readonly duration?: number;

  /**
   * @schema DmsDescribeEventsMessage#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema DmsDescribeEventsMessage#Filters
   */
  readonly filters?: DmsFilter[];

  /**
   * @schema DmsDescribeEventsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DmsDescribeEventsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DmsDescribeEventsResponse
 */
export interface DmsDescribeEventsResponse {
  /**
   * @schema DmsDescribeEventsResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema DmsDescribeEventsResponse#Events
   */
  readonly events?: DmsEvent[];

}

/**
 * @schema DmsDescribeOrderableReplicationInstancesMessage
 */
export interface DmsDescribeOrderableReplicationInstancesMessage {
  /**
   * @schema DmsDescribeOrderableReplicationInstancesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DmsDescribeOrderableReplicationInstancesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DmsDescribeOrderableReplicationInstancesResponse
 */
export interface DmsDescribeOrderableReplicationInstancesResponse {
  /**
   * @schema DmsDescribeOrderableReplicationInstancesResponse#OrderableReplicationInstances
   */
  readonly orderableReplicationInstances?: DmsOrderableReplicationInstance[];

  /**
   * @schema DmsDescribeOrderableReplicationInstancesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DmsDescribePendingMaintenanceActionsMessage
 */
export interface DmsDescribePendingMaintenanceActionsMessage {
  /**
   * @schema DmsDescribePendingMaintenanceActionsMessage#ReplicationInstanceArn
   */
  readonly replicationInstanceArn?: string;

  /**
   * @schema DmsDescribePendingMaintenanceActionsMessage#Filters
   */
  readonly filters?: DmsFilter[];

  /**
   * @schema DmsDescribePendingMaintenanceActionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DmsDescribePendingMaintenanceActionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema DmsDescribePendingMaintenanceActionsResponse
 */
export interface DmsDescribePendingMaintenanceActionsResponse {
  /**
   * @schema DmsDescribePendingMaintenanceActionsResponse#PendingMaintenanceActions
   */
  readonly pendingMaintenanceActions?: DmsResourcePendingMaintenanceActions[];

  /**
   * @schema DmsDescribePendingMaintenanceActionsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DmsDescribeRefreshSchemasStatusMessage
 */
export interface DmsDescribeRefreshSchemasStatusMessage {
  /**
   * @schema DmsDescribeRefreshSchemasStatusMessage#EndpointArn
   */
  readonly endpointArn: string;

}

/**
 * @schema DmsDescribeRefreshSchemasStatusResponse
 */
export interface DmsDescribeRefreshSchemasStatusResponse {
  /**
   * @schema DmsDescribeRefreshSchemasStatusResponse#RefreshSchemasStatus
   */
  readonly refreshSchemasStatus?: DmsRefreshSchemasStatus;

}

/**
 * @schema DmsDescribeReplicationInstanceTaskLogsMessage
 */
export interface DmsDescribeReplicationInstanceTaskLogsMessage {
  /**
   * @schema DmsDescribeReplicationInstanceTaskLogsMessage#ReplicationInstanceArn
   */
  readonly replicationInstanceArn: string;

  /**
   * @schema DmsDescribeReplicationInstanceTaskLogsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DmsDescribeReplicationInstanceTaskLogsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DmsDescribeReplicationInstanceTaskLogsResponse
 */
export interface DmsDescribeReplicationInstanceTaskLogsResponse {
  /**
   * @schema DmsDescribeReplicationInstanceTaskLogsResponse#ReplicationInstanceArn
   */
  readonly replicationInstanceArn?: string;

  /**
   * @schema DmsDescribeReplicationInstanceTaskLogsResponse#ReplicationInstanceTaskLogs
   */
  readonly replicationInstanceTaskLogs?: DmsReplicationInstanceTaskLog[];

  /**
   * @schema DmsDescribeReplicationInstanceTaskLogsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DmsDescribeReplicationInstancesMessage
 */
export interface DmsDescribeReplicationInstancesMessage {
  /**
   * @schema DmsDescribeReplicationInstancesMessage#Filters
   */
  readonly filters?: DmsFilter[];

  /**
   * @schema DmsDescribeReplicationInstancesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DmsDescribeReplicationInstancesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DmsDescribeReplicationInstancesResponse
 */
export interface DmsDescribeReplicationInstancesResponse {
  /**
   * @schema DmsDescribeReplicationInstancesResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema DmsDescribeReplicationInstancesResponse#ReplicationInstances
   */
  readonly replicationInstances?: DmsReplicationInstance[];

}

/**
 * @schema DmsDescribeReplicationSubnetGroupsMessage
 */
export interface DmsDescribeReplicationSubnetGroupsMessage {
  /**
   * @schema DmsDescribeReplicationSubnetGroupsMessage#Filters
   */
  readonly filters?: DmsFilter[];

  /**
   * @schema DmsDescribeReplicationSubnetGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DmsDescribeReplicationSubnetGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DmsDescribeReplicationSubnetGroupsResponse
 */
export interface DmsDescribeReplicationSubnetGroupsResponse {
  /**
   * @schema DmsDescribeReplicationSubnetGroupsResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema DmsDescribeReplicationSubnetGroupsResponse#ReplicationSubnetGroups
   */
  readonly replicationSubnetGroups?: DmsReplicationSubnetGroup[];

}

/**
 * @schema DmsDescribeReplicationTaskAssessmentResultsMessage
 */
export interface DmsDescribeReplicationTaskAssessmentResultsMessage {
  /**
   * @schema DmsDescribeReplicationTaskAssessmentResultsMessage#ReplicationTaskArn
   */
  readonly replicationTaskArn?: string;

  /**
   * @schema DmsDescribeReplicationTaskAssessmentResultsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DmsDescribeReplicationTaskAssessmentResultsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DmsDescribeReplicationTaskAssessmentResultsResponse
 */
export interface DmsDescribeReplicationTaskAssessmentResultsResponse {
  /**
   * @schema DmsDescribeReplicationTaskAssessmentResultsResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema DmsDescribeReplicationTaskAssessmentResultsResponse#BucketName
   */
  readonly bucketName?: string;

  /**
   * @schema DmsDescribeReplicationTaskAssessmentResultsResponse#ReplicationTaskAssessmentResults
   */
  readonly replicationTaskAssessmentResults?: DmsReplicationTaskAssessmentResult[];

}

/**
 * @schema DmsDescribeReplicationTaskAssessmentRunsMessage
 */
export interface DmsDescribeReplicationTaskAssessmentRunsMessage {
  /**
   * @schema DmsDescribeReplicationTaskAssessmentRunsMessage#Filters
   */
  readonly filters?: DmsFilter[];

  /**
   * @schema DmsDescribeReplicationTaskAssessmentRunsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DmsDescribeReplicationTaskAssessmentRunsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DmsDescribeReplicationTaskAssessmentRunsResponse
 */
export interface DmsDescribeReplicationTaskAssessmentRunsResponse {
  /**
   * @schema DmsDescribeReplicationTaskAssessmentRunsResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema DmsDescribeReplicationTaskAssessmentRunsResponse#ReplicationTaskAssessmentRuns
   */
  readonly replicationTaskAssessmentRuns?: DmsReplicationTaskAssessmentRun[];

}

/**
 * @schema DmsDescribeReplicationTaskIndividualAssessmentsMessage
 */
export interface DmsDescribeReplicationTaskIndividualAssessmentsMessage {
  /**
   * @schema DmsDescribeReplicationTaskIndividualAssessmentsMessage#Filters
   */
  readonly filters?: DmsFilter[];

  /**
   * @schema DmsDescribeReplicationTaskIndividualAssessmentsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DmsDescribeReplicationTaskIndividualAssessmentsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DmsDescribeReplicationTaskIndividualAssessmentsResponse
 */
export interface DmsDescribeReplicationTaskIndividualAssessmentsResponse {
  /**
   * @schema DmsDescribeReplicationTaskIndividualAssessmentsResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema DmsDescribeReplicationTaskIndividualAssessmentsResponse#ReplicationTaskIndividualAssessments
   */
  readonly replicationTaskIndividualAssessments?: DmsReplicationTaskIndividualAssessment[];

}

/**
 * @schema DmsDescribeReplicationTasksMessage
 */
export interface DmsDescribeReplicationTasksMessage {
  /**
   * @schema DmsDescribeReplicationTasksMessage#Filters
   */
  readonly filters?: DmsFilter[];

  /**
   * @schema DmsDescribeReplicationTasksMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DmsDescribeReplicationTasksMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DmsDescribeReplicationTasksMessage#WithoutSettings
   */
  readonly withoutSettings?: boolean;

}

/**
 * @schema DmsDescribeReplicationTasksResponse
 */
export interface DmsDescribeReplicationTasksResponse {
  /**
   * @schema DmsDescribeReplicationTasksResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema DmsDescribeReplicationTasksResponse#ReplicationTasks
   */
  readonly replicationTasks?: DmsReplicationTask[];

}

/**
 * @schema DmsDescribeSchemasMessage
 */
export interface DmsDescribeSchemasMessage {
  /**
   * @schema DmsDescribeSchemasMessage#EndpointArn
   */
  readonly endpointArn: string;

  /**
   * @schema DmsDescribeSchemasMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DmsDescribeSchemasMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DmsDescribeSchemasResponse
 */
export interface DmsDescribeSchemasResponse {
  /**
   * @schema DmsDescribeSchemasResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema DmsDescribeSchemasResponse#Schemas
   */
  readonly schemas?: string[];

}

/**
 * @schema DmsDescribeTableStatisticsMessage
 */
export interface DmsDescribeTableStatisticsMessage {
  /**
   * @schema DmsDescribeTableStatisticsMessage#ReplicationTaskArn
   */
  readonly replicationTaskArn: string;

  /**
   * @schema DmsDescribeTableStatisticsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DmsDescribeTableStatisticsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DmsDescribeTableStatisticsMessage#Filters
   */
  readonly filters?: DmsFilter[];

}

/**
 * @schema DmsDescribeTableStatisticsResponse
 */
export interface DmsDescribeTableStatisticsResponse {
  /**
   * @schema DmsDescribeTableStatisticsResponse#ReplicationTaskArn
   */
  readonly replicationTaskArn?: string;

  /**
   * @schema DmsDescribeTableStatisticsResponse#TableStatistics
   */
  readonly tableStatistics?: DmsTableStatistics[];

  /**
   * @schema DmsDescribeTableStatisticsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DmsImportCertificateMessage
 */
export interface DmsImportCertificateMessage {
  /**
   * @schema DmsImportCertificateMessage#CertificateIdentifier
   */
  readonly certificateIdentifier: string;

  /**
   * @schema DmsImportCertificateMessage#CertificatePem
   */
  readonly certificatePem?: string;

  /**
   * @schema DmsImportCertificateMessage#CertificateWallet
   */
  readonly certificateWallet?: any;

  /**
   * @schema DmsImportCertificateMessage#Tags
   */
  readonly tags?: DmsTag[];

}

/**
 * @schema DmsImportCertificateResponse
 */
export interface DmsImportCertificateResponse {
  /**
   * @schema DmsImportCertificateResponse#Certificate
   */
  readonly certificate?: DmsCertificate;

}

/**
 * @schema DmsListTagsForResourceMessage
 */
export interface DmsListTagsForResourceMessage {
  /**
   * @schema DmsListTagsForResourceMessage#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema DmsListTagsForResourceResponse
 */
export interface DmsListTagsForResourceResponse {
  /**
   * @schema DmsListTagsForResourceResponse#TagList
   */
  readonly tagList?: DmsTag[];

}

/**
 * @schema DmsModifyEndpointMessage
 */
export interface DmsModifyEndpointMessage {
  /**
   * @schema DmsModifyEndpointMessage#EndpointArn
   */
  readonly endpointArn: string;

  /**
   * @schema DmsModifyEndpointMessage#EndpointIdentifier
   */
  readonly endpointIdentifier?: string;

  /**
   * @schema DmsModifyEndpointMessage#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema DmsModifyEndpointMessage#EngineName
   */
  readonly engineName?: string;

  /**
   * @schema DmsModifyEndpointMessage#Username
   */
  readonly username?: string;

  /**
   * @schema DmsModifyEndpointMessage#Password
   */
  readonly password?: string;

  /**
   * @schema DmsModifyEndpointMessage#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema DmsModifyEndpointMessage#Port
   */
  readonly port?: number;

  /**
   * @schema DmsModifyEndpointMessage#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema DmsModifyEndpointMessage#ExtraConnectionAttributes
   */
  readonly extraConnectionAttributes?: string;

  /**
   * @schema DmsModifyEndpointMessage#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema DmsModifyEndpointMessage#SslMode
   */
  readonly sslMode?: string;

  /**
   * @schema DmsModifyEndpointMessage#ServiceAccessRoleArn
   */
  readonly serviceAccessRoleArn?: string;

  /**
   * @schema DmsModifyEndpointMessage#ExternalTableDefinition
   */
  readonly externalTableDefinition?: string;

  /**
   * @schema DmsModifyEndpointMessage#DynamoDbSettings
   */
  readonly dynamoDbSettings?: DmsDynamoDbSettings;

  /**
   * @schema DmsModifyEndpointMessage#S3Settings
   */
  readonly s3Settings?: Dmss3Settings;

  /**
   * @schema DmsModifyEndpointMessage#DmsTransferSettings
   */
  readonly dmsTransferSettings?: DmsDmsTransferSettings;

  /**
   * @schema DmsModifyEndpointMessage#MongoDbSettings
   */
  readonly mongoDbSettings?: DmsMongoDbSettings;

  /**
   * @schema DmsModifyEndpointMessage#KinesisSettings
   */
  readonly kinesisSettings?: DmsKinesisSettings;

  /**
   * @schema DmsModifyEndpointMessage#KafkaSettings
   */
  readonly kafkaSettings?: DmsKafkaSettings;

  /**
   * @schema DmsModifyEndpointMessage#ElasticsearchSettings
   */
  readonly elasticsearchSettings?: DmsElasticsearchSettings;

  /**
   * @schema DmsModifyEndpointMessage#NeptuneSettings
   */
  readonly neptuneSettings?: DmsNeptuneSettings;

  /**
   * @schema DmsModifyEndpointMessage#RedshiftSettings
   */
  readonly redshiftSettings?: DmsRedshiftSettings;

  /**
   * @schema DmsModifyEndpointMessage#PostgreSQLSettings
   */
  readonly postgreSqlSettings?: DmsPostgreSqlSettings;

  /**
   * @schema DmsModifyEndpointMessage#MySQLSettings
   */
  readonly mySqlSettings?: DmsMySqlSettings;

  /**
   * @schema DmsModifyEndpointMessage#OracleSettings
   */
  readonly oracleSettings?: DmsOracleSettings;

  /**
   * @schema DmsModifyEndpointMessage#SybaseSettings
   */
  readonly sybaseSettings?: DmsSybaseSettings;

  /**
   * @schema DmsModifyEndpointMessage#MicrosoftSQLServerSettings
   */
  readonly microsoftSqlServerSettings?: DmsMicrosoftSqlServerSettings;

  /**
   * @schema DmsModifyEndpointMessage#IBMDb2Settings
   */
  readonly ibmDb2Settings?: DmsibmDb2Settings;

  /**
   * @schema DmsModifyEndpointMessage#DocDbSettings
   */
  readonly docDbSettings?: DmsDocDbSettings;

}

/**
 * @schema DmsModifyEndpointResponse
 */
export interface DmsModifyEndpointResponse {
  /**
   * @schema DmsModifyEndpointResponse#Endpoint
   */
  readonly endpoint?: DmsEndpoint;

}

/**
 * @schema DmsModifyEventSubscriptionMessage
 */
export interface DmsModifyEventSubscriptionMessage {
  /**
   * @schema DmsModifyEventSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName: string;

  /**
   * @schema DmsModifyEventSubscriptionMessage#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema DmsModifyEventSubscriptionMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema DmsModifyEventSubscriptionMessage#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema DmsModifyEventSubscriptionMessage#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema DmsModifyEventSubscriptionResponse
 */
export interface DmsModifyEventSubscriptionResponse {
  /**
   * @schema DmsModifyEventSubscriptionResponse#EventSubscription
   */
  readonly eventSubscription?: DmsEventSubscription;

}

/**
 * @schema DmsModifyReplicationInstanceMessage
 */
export interface DmsModifyReplicationInstanceMessage {
  /**
   * @schema DmsModifyReplicationInstanceMessage#ReplicationInstanceArn
   */
  readonly replicationInstanceArn: string;

  /**
   * @schema DmsModifyReplicationInstanceMessage#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema DmsModifyReplicationInstanceMessage#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

  /**
   * @schema DmsModifyReplicationInstanceMessage#ReplicationInstanceClass
   */
  readonly replicationInstanceClass?: string;

  /**
   * @schema DmsModifyReplicationInstanceMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema DmsModifyReplicationInstanceMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema DmsModifyReplicationInstanceMessage#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema DmsModifyReplicationInstanceMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DmsModifyReplicationInstanceMessage#AllowMajorVersionUpgrade
   */
  readonly allowMajorVersionUpgrade?: boolean;

  /**
   * @schema DmsModifyReplicationInstanceMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema DmsModifyReplicationInstanceMessage#ReplicationInstanceIdentifier
   */
  readonly replicationInstanceIdentifier?: string;

}

/**
 * @schema DmsModifyReplicationInstanceResponse
 */
export interface DmsModifyReplicationInstanceResponse {
  /**
   * @schema DmsModifyReplicationInstanceResponse#ReplicationInstance
   */
  readonly replicationInstance?: DmsReplicationInstance;

}

/**
 * @schema DmsModifyReplicationSubnetGroupMessage
 */
export interface DmsModifyReplicationSubnetGroupMessage {
  /**
   * @schema DmsModifyReplicationSubnetGroupMessage#ReplicationSubnetGroupIdentifier
   */
  readonly replicationSubnetGroupIdentifier: string;

  /**
   * @schema DmsModifyReplicationSubnetGroupMessage#ReplicationSubnetGroupDescription
   */
  readonly replicationSubnetGroupDescription?: string;

  /**
   * @schema DmsModifyReplicationSubnetGroupMessage#SubnetIds
   */
  readonly subnetIds: string[];

}

/**
 * @schema DmsModifyReplicationSubnetGroupResponse
 */
export interface DmsModifyReplicationSubnetGroupResponse {
  /**
   * @schema DmsModifyReplicationSubnetGroupResponse#ReplicationSubnetGroup
   */
  readonly replicationSubnetGroup?: DmsReplicationSubnetGroup;

}

/**
 * @schema DmsModifyReplicationTaskMessage
 */
export interface DmsModifyReplicationTaskMessage {
  /**
   * @schema DmsModifyReplicationTaskMessage#ReplicationTaskArn
   */
  readonly replicationTaskArn: string;

  /**
   * @schema DmsModifyReplicationTaskMessage#ReplicationTaskIdentifier
   */
  readonly replicationTaskIdentifier?: string;

  /**
   * @schema DmsModifyReplicationTaskMessage#MigrationType
   */
  readonly migrationType?: string;

  /**
   * @schema DmsModifyReplicationTaskMessage#TableMappings
   */
  readonly tableMappings?: string;

  /**
   * @schema DmsModifyReplicationTaskMessage#ReplicationTaskSettings
   */
  readonly replicationTaskSettings?: string;

  /**
   * @schema DmsModifyReplicationTaskMessage#CdcStartTime
   */
  readonly cdcStartTime?: string;

  /**
   * @schema DmsModifyReplicationTaskMessage#CdcStartPosition
   */
  readonly cdcStartPosition?: string;

  /**
   * @schema DmsModifyReplicationTaskMessage#CdcStopPosition
   */
  readonly cdcStopPosition?: string;

  /**
   * @schema DmsModifyReplicationTaskMessage#TaskData
   */
  readonly taskData?: string;

}

/**
 * @schema DmsModifyReplicationTaskResponse
 */
export interface DmsModifyReplicationTaskResponse {
  /**
   * @schema DmsModifyReplicationTaskResponse#ReplicationTask
   */
  readonly replicationTask?: DmsReplicationTask;

}

/**
 * @schema DmsMoveReplicationTaskMessage
 */
export interface DmsMoveReplicationTaskMessage {
  /**
   * @schema DmsMoveReplicationTaskMessage#ReplicationTaskArn
   */
  readonly replicationTaskArn: string;

  /**
   * @schema DmsMoveReplicationTaskMessage#TargetReplicationInstanceArn
   */
  readonly targetReplicationInstanceArn: string;

}

/**
 * @schema DmsMoveReplicationTaskResponse
 */
export interface DmsMoveReplicationTaskResponse {
  /**
   * @schema DmsMoveReplicationTaskResponse#ReplicationTask
   */
  readonly replicationTask?: DmsReplicationTask;

}

/**
 * @schema DmsRebootReplicationInstanceMessage
 */
export interface DmsRebootReplicationInstanceMessage {
  /**
   * @schema DmsRebootReplicationInstanceMessage#ReplicationInstanceArn
   */
  readonly replicationInstanceArn: string;

  /**
   * @schema DmsRebootReplicationInstanceMessage#ForceFailover
   */
  readonly forceFailover?: boolean;

}

/**
 * @schema DmsRebootReplicationInstanceResponse
 */
export interface DmsRebootReplicationInstanceResponse {
  /**
   * @schema DmsRebootReplicationInstanceResponse#ReplicationInstance
   */
  readonly replicationInstance?: DmsReplicationInstance;

}

/**
 * @schema DmsRefreshSchemasMessage
 */
export interface DmsRefreshSchemasMessage {
  /**
   * @schema DmsRefreshSchemasMessage#EndpointArn
   */
  readonly endpointArn: string;

  /**
   * @schema DmsRefreshSchemasMessage#ReplicationInstanceArn
   */
  readonly replicationInstanceArn: string;

}

/**
 * @schema DmsRefreshSchemasResponse
 */
export interface DmsRefreshSchemasResponse {
  /**
   * @schema DmsRefreshSchemasResponse#RefreshSchemasStatus
   */
  readonly refreshSchemasStatus?: DmsRefreshSchemasStatus;

}

/**
 * @schema DmsReloadTablesMessage
 */
export interface DmsReloadTablesMessage {
  /**
   * @schema DmsReloadTablesMessage#ReplicationTaskArn
   */
  readonly replicationTaskArn: string;

  /**
   * @schema DmsReloadTablesMessage#TablesToReload
   */
  readonly tablesToReload: DmsTableToReload[];

  /**
   * @schema DmsReloadTablesMessage#ReloadOption
   */
  readonly reloadOption?: string;

}

/**
 * @schema DmsReloadTablesResponse
 */
export interface DmsReloadTablesResponse {
  /**
   * @schema DmsReloadTablesResponse#ReplicationTaskArn
   */
  readonly replicationTaskArn?: string;

}

/**
 * @schema DmsRemoveTagsFromResourceMessage
 */
export interface DmsRemoveTagsFromResourceMessage {
  /**
   * @schema DmsRemoveTagsFromResourceMessage#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema DmsRemoveTagsFromResourceMessage#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema DmsRemoveTagsFromResourceResponse
 */
export interface DmsRemoveTagsFromResourceResponse {
}

/**
 * @schema DmsStartReplicationTaskMessage
 */
export interface DmsStartReplicationTaskMessage {
  /**
   * @schema DmsStartReplicationTaskMessage#ReplicationTaskArn
   */
  readonly replicationTaskArn: string;

  /**
   * @schema DmsStartReplicationTaskMessage#StartReplicationTaskType
   */
  readonly startReplicationTaskType: string;

  /**
   * @schema DmsStartReplicationTaskMessage#CdcStartTime
   */
  readonly cdcStartTime?: string;

  /**
   * @schema DmsStartReplicationTaskMessage#CdcStartPosition
   */
  readonly cdcStartPosition?: string;

  /**
   * @schema DmsStartReplicationTaskMessage#CdcStopPosition
   */
  readonly cdcStopPosition?: string;

}

/**
 * @schema DmsStartReplicationTaskResponse
 */
export interface DmsStartReplicationTaskResponse {
  /**
   * @schema DmsStartReplicationTaskResponse#ReplicationTask
   */
  readonly replicationTask?: DmsReplicationTask;

}

/**
 * @schema DmsStartReplicationTaskAssessmentMessage
 */
export interface DmsStartReplicationTaskAssessmentMessage {
  /**
   * @schema DmsStartReplicationTaskAssessmentMessage#ReplicationTaskArn
   */
  readonly replicationTaskArn: string;

}

/**
 * @schema DmsStartReplicationTaskAssessmentResponse
 */
export interface DmsStartReplicationTaskAssessmentResponse {
  /**
   * @schema DmsStartReplicationTaskAssessmentResponse#ReplicationTask
   */
  readonly replicationTask?: DmsReplicationTask;

}

/**
 * @schema DmsStartReplicationTaskAssessmentRunMessage
 */
export interface DmsStartReplicationTaskAssessmentRunMessage {
  /**
   * @schema DmsStartReplicationTaskAssessmentRunMessage#ReplicationTaskArn
   */
  readonly replicationTaskArn: string;

  /**
   * @schema DmsStartReplicationTaskAssessmentRunMessage#ServiceAccessRoleArn
   */
  readonly serviceAccessRoleArn: string;

  /**
   * @schema DmsStartReplicationTaskAssessmentRunMessage#ResultLocationBucket
   */
  readonly resultLocationBucket: string;

  /**
   * @schema DmsStartReplicationTaskAssessmentRunMessage#ResultLocationFolder
   */
  readonly resultLocationFolder?: string;

  /**
   * @schema DmsStartReplicationTaskAssessmentRunMessage#ResultEncryptionMode
   */
  readonly resultEncryptionMode?: string;

  /**
   * @schema DmsStartReplicationTaskAssessmentRunMessage#ResultKmsKeyArn
   */
  readonly resultKmsKeyArn?: string;

  /**
   * @schema DmsStartReplicationTaskAssessmentRunMessage#AssessmentRunName
   */
  readonly assessmentRunName: string;

  /**
   * @schema DmsStartReplicationTaskAssessmentRunMessage#IncludeOnly
   */
  readonly includeOnly?: string[];

  /**
   * @schema DmsStartReplicationTaskAssessmentRunMessage#Exclude
   */
  readonly exclude?: string[];

}

/**
 * @schema DmsStartReplicationTaskAssessmentRunResponse
 */
export interface DmsStartReplicationTaskAssessmentRunResponse {
  /**
   * @schema DmsStartReplicationTaskAssessmentRunResponse#ReplicationTaskAssessmentRun
   */
  readonly replicationTaskAssessmentRun?: DmsReplicationTaskAssessmentRun;

}

/**
 * @schema DmsStopReplicationTaskMessage
 */
export interface DmsStopReplicationTaskMessage {
  /**
   * @schema DmsStopReplicationTaskMessage#ReplicationTaskArn
   */
  readonly replicationTaskArn: string;

}

/**
 * @schema DmsStopReplicationTaskResponse
 */
export interface DmsStopReplicationTaskResponse {
  /**
   * @schema DmsStopReplicationTaskResponse#ReplicationTask
   */
  readonly replicationTask?: DmsReplicationTask;

}

/**
 * @schema DmsTestConnectionMessage
 */
export interface DmsTestConnectionMessage {
  /**
   * @schema DmsTestConnectionMessage#ReplicationInstanceArn
   */
  readonly replicationInstanceArn: string;

  /**
   * @schema DmsTestConnectionMessage#EndpointArn
   */
  readonly endpointArn: string;

}

/**
 * @schema DmsTestConnectionResponse
 */
export interface DmsTestConnectionResponse {
  /**
   * @schema DmsTestConnectionResponse#Connection
   */
  readonly connection?: DmsConnection;

}

/**
 * @schema DmsTag
 */
export interface DmsTag {
  /**
   * @schema DmsTag#Key
   */
  readonly key?: string;

  /**
   * @schema DmsTag#Value
   */
  readonly value?: string;

}

/**
 * @schema DmsResourcePendingMaintenanceActions
 */
export interface DmsResourcePendingMaintenanceActions {
  /**
   * @schema DmsResourcePendingMaintenanceActions#ResourceIdentifier
   */
  readonly resourceIdentifier?: string;

  /**
   * @schema DmsResourcePendingMaintenanceActions#PendingMaintenanceActionDetails
   */
  readonly pendingMaintenanceActionDetails?: DmsPendingMaintenanceAction[];

}

/**
 * @schema DmsReplicationTaskAssessmentRun
 */
export interface DmsReplicationTaskAssessmentRun {
  /**
   * @schema DmsReplicationTaskAssessmentRun#ReplicationTaskAssessmentRunArn
   */
  readonly replicationTaskAssessmentRunArn?: string;

  /**
   * @schema DmsReplicationTaskAssessmentRun#ReplicationTaskArn
   */
  readonly replicationTaskArn?: string;

  /**
   * @schema DmsReplicationTaskAssessmentRun#Status
   */
  readonly status?: string;

  /**
   * @schema DmsReplicationTaskAssessmentRun#ReplicationTaskAssessmentRunCreationDate
   */
  readonly replicationTaskAssessmentRunCreationDate?: string;

  /**
   * @schema DmsReplicationTaskAssessmentRun#AssessmentProgress
   */
  readonly assessmentProgress?: DmsReplicationTaskAssessmentRunProgress;

  /**
   * @schema DmsReplicationTaskAssessmentRun#LastFailureMessage
   */
  readonly lastFailureMessage?: string;

  /**
   * @schema DmsReplicationTaskAssessmentRun#ServiceAccessRoleArn
   */
  readonly serviceAccessRoleArn?: string;

  /**
   * @schema DmsReplicationTaskAssessmentRun#ResultLocationBucket
   */
  readonly resultLocationBucket?: string;

  /**
   * @schema DmsReplicationTaskAssessmentRun#ResultLocationFolder
   */
  readonly resultLocationFolder?: string;

  /**
   * @schema DmsReplicationTaskAssessmentRun#ResultEncryptionMode
   */
  readonly resultEncryptionMode?: string;

  /**
   * @schema DmsReplicationTaskAssessmentRun#ResultKmsKeyArn
   */
  readonly resultKmsKeyArn?: string;

  /**
   * @schema DmsReplicationTaskAssessmentRun#AssessmentRunName
   */
  readonly assessmentRunName?: string;

}

/**
 * @schema DmsDynamoDbSettings
 */
export interface DmsDynamoDbSettings {
  /**
   * @schema DmsDynamoDbSettings#ServiceAccessRoleArn
   */
  readonly serviceAccessRoleArn: string;

}

/**
 * @schema Dmss3Settings
 */
export interface Dmss3Settings {
  /**
   * @schema Dmss3Settings#ServiceAccessRoleArn
   */
  readonly serviceAccessRoleArn?: string;

  /**
   * @schema Dmss3Settings#ExternalTableDefinition
   */
  readonly externalTableDefinition?: string;

  /**
   * @schema Dmss3Settings#CsvRowDelimiter
   */
  readonly csvRowDelimiter?: string;

  /**
   * @schema Dmss3Settings#CsvDelimiter
   */
  readonly csvDelimiter?: string;

  /**
   * @schema Dmss3Settings#BucketFolder
   */
  readonly bucketFolder?: string;

  /**
   * @schema Dmss3Settings#BucketName
   */
  readonly bucketName?: string;

  /**
   * @schema Dmss3Settings#CompressionType
   */
  readonly compressionType?: string;

  /**
   * @schema Dmss3Settings#EncryptionMode
   */
  readonly encryptionMode?: string;

  /**
   * @schema Dmss3Settings#ServerSideEncryptionKmsKeyId
   */
  readonly serverSideEncryptionKmsKeyId?: string;

  /**
   * @schema Dmss3Settings#DataFormat
   */
  readonly dataFormat?: string;

  /**
   * @schema Dmss3Settings#EncodingType
   */
  readonly encodingType?: string;

  /**
   * @schema Dmss3Settings#DictPageSizeLimit
   */
  readonly dictPageSizeLimit?: number;

  /**
   * @schema Dmss3Settings#RowGroupLength
   */
  readonly rowGroupLength?: number;

  /**
   * @schema Dmss3Settings#DataPageSize
   */
  readonly dataPageSize?: number;

  /**
   * @schema Dmss3Settings#ParquetVersion
   */
  readonly parquetVersion?: string;

  /**
   * @schema Dmss3Settings#EnableStatistics
   */
  readonly enableStatistics?: boolean;

  /**
   * @schema Dmss3Settings#IncludeOpForFullLoad
   */
  readonly includeOpForFullLoad?: boolean;

  /**
   * @schema Dmss3Settings#CdcInsertsOnly
   */
  readonly cdcInsertsOnly?: boolean;

  /**
   * @schema Dmss3Settings#TimestampColumnName
   */
  readonly timestampColumnName?: string;

  /**
   * @schema Dmss3Settings#ParquetTimestampInMillisecond
   */
  readonly parquetTimestampInMillisecond?: boolean;

  /**
   * @schema Dmss3Settings#CdcInsertsAndUpdates
   */
  readonly cdcInsertsAndUpdates?: boolean;

  /**
   * @schema Dmss3Settings#DatePartitionEnabled
   */
  readonly datePartitionEnabled?: boolean;

  /**
   * @schema Dmss3Settings#DatePartitionSequence
   */
  readonly datePartitionSequence?: string;

  /**
   * @schema Dmss3Settings#DatePartitionDelimiter
   */
  readonly datePartitionDelimiter?: string;

}

/**
 * @schema DmsDmsTransferSettings
 */
export interface DmsDmsTransferSettings {
  /**
   * @schema DmsDmsTransferSettings#ServiceAccessRoleArn
   */
  readonly serviceAccessRoleArn?: string;

  /**
   * @schema DmsDmsTransferSettings#BucketName
   */
  readonly bucketName?: string;

}

/**
 * @schema DmsMongoDbSettings
 */
export interface DmsMongoDbSettings {
  /**
   * @schema DmsMongoDbSettings#Username
   */
  readonly username?: string;

  /**
   * @schema DmsMongoDbSettings#Password
   */
  readonly password?: string;

  /**
   * @schema DmsMongoDbSettings#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema DmsMongoDbSettings#Port
   */
  readonly port?: number;

  /**
   * @schema DmsMongoDbSettings#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema DmsMongoDbSettings#AuthType
   */
  readonly authType?: string;

  /**
   * @schema DmsMongoDbSettings#AuthMechanism
   */
  readonly authMechanism?: string;

  /**
   * @schema DmsMongoDbSettings#NestingLevel
   */
  readonly nestingLevel?: string;

  /**
   * @schema DmsMongoDbSettings#ExtractDocId
   */
  readonly extractDocId?: string;

  /**
   * @schema DmsMongoDbSettings#DocsToInvestigate
   */
  readonly docsToInvestigate?: string;

  /**
   * @schema DmsMongoDbSettings#AuthSource
   */
  readonly authSource?: string;

  /**
   * @schema DmsMongoDbSettings#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema DmsKinesisSettings
 */
export interface DmsKinesisSettings {
  /**
   * @schema DmsKinesisSettings#StreamArn
   */
  readonly streamArn?: string;

  /**
   * @schema DmsKinesisSettings#MessageFormat
   */
  readonly messageFormat?: string;

  /**
   * @schema DmsKinesisSettings#ServiceAccessRoleArn
   */
  readonly serviceAccessRoleArn?: string;

  /**
   * @schema DmsKinesisSettings#IncludeTransactionDetails
   */
  readonly includeTransactionDetails?: boolean;

  /**
   * @schema DmsKinesisSettings#IncludePartitionValue
   */
  readonly includePartitionValue?: boolean;

  /**
   * @schema DmsKinesisSettings#PartitionIncludeSchemaTable
   */
  readonly partitionIncludeSchemaTable?: boolean;

  /**
   * @schema DmsKinesisSettings#IncludeTableAlterOperations
   */
  readonly includeTableAlterOperations?: boolean;

  /**
   * @schema DmsKinesisSettings#IncludeControlDetails
   */
  readonly includeControlDetails?: boolean;

  /**
   * @schema DmsKinesisSettings#IncludeNullAndEmpty
   */
  readonly includeNullAndEmpty?: boolean;

}

/**
 * @schema DmsKafkaSettings
 */
export interface DmsKafkaSettings {
  /**
   * @schema DmsKafkaSettings#Broker
   */
  readonly broker?: string;

  /**
   * @schema DmsKafkaSettings#Topic
   */
  readonly topic?: string;

  /**
   * @schema DmsKafkaSettings#MessageFormat
   */
  readonly messageFormat?: string;

  /**
   * @schema DmsKafkaSettings#IncludeTransactionDetails
   */
  readonly includeTransactionDetails?: boolean;

  /**
   * @schema DmsKafkaSettings#IncludePartitionValue
   */
  readonly includePartitionValue?: boolean;

  /**
   * @schema DmsKafkaSettings#PartitionIncludeSchemaTable
   */
  readonly partitionIncludeSchemaTable?: boolean;

  /**
   * @schema DmsKafkaSettings#IncludeTableAlterOperations
   */
  readonly includeTableAlterOperations?: boolean;

  /**
   * @schema DmsKafkaSettings#IncludeControlDetails
   */
  readonly includeControlDetails?: boolean;

  /**
   * @schema DmsKafkaSettings#MessageMaxBytes
   */
  readonly messageMaxBytes?: number;

  /**
   * @schema DmsKafkaSettings#IncludeNullAndEmpty
   */
  readonly includeNullAndEmpty?: boolean;

}

/**
 * @schema DmsElasticsearchSettings
 */
export interface DmsElasticsearchSettings {
  /**
   * @schema DmsElasticsearchSettings#ServiceAccessRoleArn
   */
  readonly serviceAccessRoleArn: string;

  /**
   * @schema DmsElasticsearchSettings#EndpointUri
   */
  readonly endpointUri: string;

  /**
   * @schema DmsElasticsearchSettings#FullLoadErrorPercentage
   */
  readonly fullLoadErrorPercentage?: number;

  /**
   * @schema DmsElasticsearchSettings#ErrorRetryDuration
   */
  readonly errorRetryDuration?: number;

}

/**
 * @schema DmsNeptuneSettings
 */
export interface DmsNeptuneSettings {
  /**
   * @schema DmsNeptuneSettings#ServiceAccessRoleArn
   */
  readonly serviceAccessRoleArn?: string;

  /**
   * @schema DmsNeptuneSettings#S3BucketName
   */
  readonly s3BucketName: string;

  /**
   * @schema DmsNeptuneSettings#S3BucketFolder
   */
  readonly s3BucketFolder: string;

  /**
   * @schema DmsNeptuneSettings#ErrorRetryDuration
   */
  readonly errorRetryDuration?: number;

  /**
   * @schema DmsNeptuneSettings#MaxFileSize
   */
  readonly maxFileSize?: number;

  /**
   * @schema DmsNeptuneSettings#MaxRetryCount
   */
  readonly maxRetryCount?: number;

  /**
   * @schema DmsNeptuneSettings#IamAuthEnabled
   */
  readonly iamAuthEnabled?: boolean;

}

/**
 * @schema DmsRedshiftSettings
 */
export interface DmsRedshiftSettings {
  /**
   * @schema DmsRedshiftSettings#AcceptAnyDate
   */
  readonly acceptAnyDate?: boolean;

  /**
   * @schema DmsRedshiftSettings#AfterConnectScript
   */
  readonly afterConnectScript?: string;

  /**
   * @schema DmsRedshiftSettings#BucketFolder
   */
  readonly bucketFolder?: string;

  /**
   * @schema DmsRedshiftSettings#BucketName
   */
  readonly bucketName?: string;

  /**
   * @schema DmsRedshiftSettings#CaseSensitiveNames
   */
  readonly caseSensitiveNames?: boolean;

  /**
   * @schema DmsRedshiftSettings#CompUpdate
   */
  readonly compUpdate?: boolean;

  /**
   * @schema DmsRedshiftSettings#ConnectionTimeout
   */
  readonly connectionTimeout?: number;

  /**
   * @schema DmsRedshiftSettings#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema DmsRedshiftSettings#DateFormat
   */
  readonly dateFormat?: string;

  /**
   * @schema DmsRedshiftSettings#EmptyAsNull
   */
  readonly emptyAsNull?: boolean;

  /**
   * @schema DmsRedshiftSettings#EncryptionMode
   */
  readonly encryptionMode?: string;

  /**
   * @schema DmsRedshiftSettings#ExplicitIds
   */
  readonly explicitIds?: boolean;

  /**
   * @schema DmsRedshiftSettings#FileTransferUploadStreams
   */
  readonly fileTransferUploadStreams?: number;

  /**
   * @schema DmsRedshiftSettings#LoadTimeout
   */
  readonly loadTimeout?: number;

  /**
   * @schema DmsRedshiftSettings#MaxFileSize
   */
  readonly maxFileSize?: number;

  /**
   * @schema DmsRedshiftSettings#Password
   */
  readonly password?: string;

  /**
   * @schema DmsRedshiftSettings#Port
   */
  readonly port?: number;

  /**
   * @schema DmsRedshiftSettings#RemoveQuotes
   */
  readonly removeQuotes?: boolean;

  /**
   * @schema DmsRedshiftSettings#ReplaceInvalidChars
   */
  readonly replaceInvalidChars?: string;

  /**
   * @schema DmsRedshiftSettings#ReplaceChars
   */
  readonly replaceChars?: string;

  /**
   * @schema DmsRedshiftSettings#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema DmsRedshiftSettings#ServiceAccessRoleArn
   */
  readonly serviceAccessRoleArn?: string;

  /**
   * @schema DmsRedshiftSettings#ServerSideEncryptionKmsKeyId
   */
  readonly serverSideEncryptionKmsKeyId?: string;

  /**
   * @schema DmsRedshiftSettings#TimeFormat
   */
  readonly timeFormat?: string;

  /**
   * @schema DmsRedshiftSettings#TrimBlanks
   */
  readonly trimBlanks?: boolean;

  /**
   * @schema DmsRedshiftSettings#TruncateColumns
   */
  readonly truncateColumns?: boolean;

  /**
   * @schema DmsRedshiftSettings#Username
   */
  readonly username?: string;

  /**
   * @schema DmsRedshiftSettings#WriteBufferSize
   */
  readonly writeBufferSize?: number;

}

/**
 * @schema DmsPostgreSqlSettings
 */
export interface DmsPostgreSqlSettings {
  /**
   * @schema DmsPostgreSqlSettings#AfterConnectScript
   */
  readonly afterConnectScript?: string;

  /**
   * @schema DmsPostgreSqlSettings#CaptureDdls
   */
  readonly captureDdls?: boolean;

  /**
   * @schema DmsPostgreSqlSettings#MaxFileSize
   */
  readonly maxFileSize?: number;

  /**
   * @schema DmsPostgreSqlSettings#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema DmsPostgreSqlSettings#DdlArtifactsSchema
   */
  readonly ddlArtifactsSchema?: string;

  /**
   * @schema DmsPostgreSqlSettings#ExecuteTimeout
   */
  readonly executeTimeout?: number;

  /**
   * @schema DmsPostgreSqlSettings#FailTasksOnLobTruncation
   */
  readonly failTasksOnLobTruncation?: boolean;

  /**
   * @schema DmsPostgreSqlSettings#Password
   */
  readonly password?: string;

  /**
   * @schema DmsPostgreSqlSettings#Port
   */
  readonly port?: number;

  /**
   * @schema DmsPostgreSqlSettings#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema DmsPostgreSqlSettings#Username
   */
  readonly username?: string;

  /**
   * @schema DmsPostgreSqlSettings#SlotName
   */
  readonly slotName?: string;

}

/**
 * @schema DmsMySqlSettings
 */
export interface DmsMySqlSettings {
  /**
   * @schema DmsMySqlSettings#AfterConnectScript
   */
  readonly afterConnectScript?: string;

  /**
   * @schema DmsMySqlSettings#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema DmsMySqlSettings#EventsPollInterval
   */
  readonly eventsPollInterval?: number;

  /**
   * @schema DmsMySqlSettings#TargetDbType
   */
  readonly targetDbType?: string;

  /**
   * @schema DmsMySqlSettings#MaxFileSize
   */
  readonly maxFileSize?: number;

  /**
   * @schema DmsMySqlSettings#ParallelLoadThreads
   */
  readonly parallelLoadThreads?: number;

  /**
   * @schema DmsMySqlSettings#Password
   */
  readonly password?: string;

  /**
   * @schema DmsMySqlSettings#Port
   */
  readonly port?: number;

  /**
   * @schema DmsMySqlSettings#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema DmsMySqlSettings#ServerTimezone
   */
  readonly serverTimezone?: string;

  /**
   * @schema DmsMySqlSettings#Username
   */
  readonly username?: string;

}

/**
 * @schema DmsOracleSettings
 */
export interface DmsOracleSettings {
  /**
   * @schema DmsOracleSettings#AddSupplementalLogging
   */
  readonly addSupplementalLogging?: boolean;

  /**
   * @schema DmsOracleSettings#ArchivedLogDestId
   */
  readonly archivedLogDestId?: number;

  /**
   * @schema DmsOracleSettings#AdditionalArchivedLogDestId
   */
  readonly additionalArchivedLogDestId?: number;

  /**
   * @schema DmsOracleSettings#AllowSelectNestedTables
   */
  readonly allowSelectNestedTables?: boolean;

  /**
   * @schema DmsOracleSettings#ParallelAsmReadThreads
   */
  readonly parallelAsmReadThreads?: number;

  /**
   * @schema DmsOracleSettings#ReadAheadBlocks
   */
  readonly readAheadBlocks?: number;

  /**
   * @schema DmsOracleSettings#AccessAlternateDirectly
   */
  readonly accessAlternateDirectly?: boolean;

  /**
   * @schema DmsOracleSettings#UseAlternateFolderForOnline
   */
  readonly useAlternateFolderForOnline?: boolean;

  /**
   * @schema DmsOracleSettings#OraclePathPrefix
   */
  readonly oraclePathPrefix?: string;

  /**
   * @schema DmsOracleSettings#UsePathPrefix
   */
  readonly usePathPrefix?: string;

  /**
   * @schema DmsOracleSettings#ReplacePathPrefix
   */
  readonly replacePathPrefix?: boolean;

  /**
   * @schema DmsOracleSettings#EnableHomogenousTablespace
   */
  readonly enableHomogenousTablespace?: boolean;

  /**
   * @schema DmsOracleSettings#DirectPathNoLog
   */
  readonly directPathNoLog?: boolean;

  /**
   * @schema DmsOracleSettings#ArchivedLogsOnly
   */
  readonly archivedLogsOnly?: boolean;

  /**
   * @schema DmsOracleSettings#AsmPassword
   */
  readonly asmPassword?: string;

  /**
   * @schema DmsOracleSettings#AsmServer
   */
  readonly asmServer?: string;

  /**
   * @schema DmsOracleSettings#AsmUser
   */
  readonly asmUser?: string;

  /**
   * @schema DmsOracleSettings#CharLengthSemantics
   */
  readonly charLengthSemantics?: string;

  /**
   * @schema DmsOracleSettings#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema DmsOracleSettings#DirectPathParallelLoad
   */
  readonly directPathParallelLoad?: boolean;

  /**
   * @schema DmsOracleSettings#FailTasksOnLobTruncation
   */
  readonly failTasksOnLobTruncation?: boolean;

  /**
   * @schema DmsOracleSettings#NumberDatatypeScale
   */
  readonly numberDatatypeScale?: number;

  /**
   * @schema DmsOracleSettings#Password
   */
  readonly password?: string;

  /**
   * @schema DmsOracleSettings#Port
   */
  readonly port?: number;

  /**
   * @schema DmsOracleSettings#ReadTableSpaceName
   */
  readonly readTableSpaceName?: boolean;

  /**
   * @schema DmsOracleSettings#RetryInterval
   */
  readonly retryInterval?: number;

  /**
   * @schema DmsOracleSettings#SecurityDbEncryption
   */
  readonly securityDbEncryption?: string;

  /**
   * @schema DmsOracleSettings#SecurityDbEncryptionName
   */
  readonly securityDbEncryptionName?: string;

  /**
   * @schema DmsOracleSettings#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema DmsOracleSettings#Username
   */
  readonly username?: string;

}

/**
 * @schema DmsSybaseSettings
 */
export interface DmsSybaseSettings {
  /**
   * @schema DmsSybaseSettings#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema DmsSybaseSettings#Password
   */
  readonly password?: string;

  /**
   * @schema DmsSybaseSettings#Port
   */
  readonly port?: number;

  /**
   * @schema DmsSybaseSettings#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema DmsSybaseSettings#Username
   */
  readonly username?: string;

}

/**
 * @schema DmsMicrosoftSqlServerSettings
 */
export interface DmsMicrosoftSqlServerSettings {
  /**
   * @schema DmsMicrosoftSqlServerSettings#Port
   */
  readonly port?: number;

  /**
   * @schema DmsMicrosoftSqlServerSettings#BcpPacketSize
   */
  readonly bcpPacketSize?: number;

  /**
   * @schema DmsMicrosoftSqlServerSettings#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema DmsMicrosoftSqlServerSettings#ControlTablesFileGroup
   */
  readonly controlTablesFileGroup?: string;

  /**
   * @schema DmsMicrosoftSqlServerSettings#Password
   */
  readonly password?: string;

  /**
   * @schema DmsMicrosoftSqlServerSettings#ReadBackupOnly
   */
  readonly readBackupOnly?: boolean;

  /**
   * @schema DmsMicrosoftSqlServerSettings#SafeguardPolicy
   */
  readonly safeguardPolicy?: string;

  /**
   * @schema DmsMicrosoftSqlServerSettings#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema DmsMicrosoftSqlServerSettings#Username
   */
  readonly username?: string;

  /**
   * @schema DmsMicrosoftSqlServerSettings#UseBcpFullLoad
   */
  readonly useBcpFullLoad?: boolean;

}

/**
 * @schema DmsibmDb2Settings
 */
export interface DmsibmDb2Settings {
  /**
   * @schema DmsibmDb2Settings#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema DmsibmDb2Settings#Password
   */
  readonly password?: string;

  /**
   * @schema DmsibmDb2Settings#Port
   */
  readonly port?: number;

  /**
   * @schema DmsibmDb2Settings#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema DmsibmDb2Settings#SetDataCaptureChanges
   */
  readonly setDataCaptureChanges?: boolean;

  /**
   * @schema DmsibmDb2Settings#CurrentLsn
   */
  readonly currentLsn?: string;

  /**
   * @schema DmsibmDb2Settings#MaxKBytesPerRead
   */
  readonly maxKBytesPerRead?: number;

  /**
   * @schema DmsibmDb2Settings#Username
   */
  readonly username?: string;

}

/**
 * @schema DmsDocDbSettings
 */
export interface DmsDocDbSettings {
  /**
   * @schema DmsDocDbSettings#Username
   */
  readonly username?: string;

  /**
   * @schema DmsDocDbSettings#Password
   */
  readonly password?: string;

  /**
   * @schema DmsDocDbSettings#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema DmsDocDbSettings#Port
   */
  readonly port?: number;

  /**
   * @schema DmsDocDbSettings#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema DmsDocDbSettings#NestingLevel
   */
  readonly nestingLevel?: string;

  /**
   * @schema DmsDocDbSettings#ExtractDocId
   */
  readonly extractDocId?: boolean;

  /**
   * @schema DmsDocDbSettings#DocsToInvestigate
   */
  readonly docsToInvestigate?: number;

  /**
   * @schema DmsDocDbSettings#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema DmsEndpoint
 */
export interface DmsEndpoint {
  /**
   * @schema DmsEndpoint#EndpointIdentifier
   */
  readonly endpointIdentifier?: string;

  /**
   * @schema DmsEndpoint#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema DmsEndpoint#EngineName
   */
  readonly engineName?: string;

  /**
   * @schema DmsEndpoint#EngineDisplayName
   */
  readonly engineDisplayName?: string;

  /**
   * @schema DmsEndpoint#Username
   */
  readonly username?: string;

  /**
   * @schema DmsEndpoint#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema DmsEndpoint#Port
   */
  readonly port?: number;

  /**
   * @schema DmsEndpoint#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema DmsEndpoint#ExtraConnectionAttributes
   */
  readonly extraConnectionAttributes?: string;

  /**
   * @schema DmsEndpoint#Status
   */
  readonly status?: string;

  /**
   * @schema DmsEndpoint#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema DmsEndpoint#EndpointArn
   */
  readonly endpointArn?: string;

  /**
   * @schema DmsEndpoint#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema DmsEndpoint#SslMode
   */
  readonly sslMode?: string;

  /**
   * @schema DmsEndpoint#ServiceAccessRoleArn
   */
  readonly serviceAccessRoleArn?: string;

  /**
   * @schema DmsEndpoint#ExternalTableDefinition
   */
  readonly externalTableDefinition?: string;

  /**
   * @schema DmsEndpoint#ExternalId
   */
  readonly externalId?: string;

  /**
   * @schema DmsEndpoint#DynamoDbSettings
   */
  readonly dynamoDbSettings?: DmsDynamoDbSettings;

  /**
   * @schema DmsEndpoint#S3Settings
   */
  readonly s3Settings?: Dmss3Settings;

  /**
   * @schema DmsEndpoint#DmsTransferSettings
   */
  readonly dmsTransferSettings?: DmsDmsTransferSettings;

  /**
   * @schema DmsEndpoint#MongoDbSettings
   */
  readonly mongoDbSettings?: DmsMongoDbSettings;

  /**
   * @schema DmsEndpoint#KinesisSettings
   */
  readonly kinesisSettings?: DmsKinesisSettings;

  /**
   * @schema DmsEndpoint#KafkaSettings
   */
  readonly kafkaSettings?: DmsKafkaSettings;

  /**
   * @schema DmsEndpoint#ElasticsearchSettings
   */
  readonly elasticsearchSettings?: DmsElasticsearchSettings;

  /**
   * @schema DmsEndpoint#NeptuneSettings
   */
  readonly neptuneSettings?: DmsNeptuneSettings;

  /**
   * @schema DmsEndpoint#RedshiftSettings
   */
  readonly redshiftSettings?: DmsRedshiftSettings;

  /**
   * @schema DmsEndpoint#PostgreSQLSettings
   */
  readonly postgreSqlSettings?: DmsPostgreSqlSettings;

  /**
   * @schema DmsEndpoint#MySQLSettings
   */
  readonly mySqlSettings?: DmsMySqlSettings;

  /**
   * @schema DmsEndpoint#OracleSettings
   */
  readonly oracleSettings?: DmsOracleSettings;

  /**
   * @schema DmsEndpoint#SybaseSettings
   */
  readonly sybaseSettings?: DmsSybaseSettings;

  /**
   * @schema DmsEndpoint#MicrosoftSQLServerSettings
   */
  readonly microsoftSqlServerSettings?: DmsMicrosoftSqlServerSettings;

  /**
   * @schema DmsEndpoint#IBMDb2Settings
   */
  readonly ibmDb2Settings?: DmsibmDb2Settings;

  /**
   * @schema DmsEndpoint#DocDbSettings
   */
  readonly docDbSettings?: DmsDocDbSettings;

}

/**
 * @schema DmsEventSubscription
 */
export interface DmsEventSubscription {
  /**
   * @schema DmsEventSubscription#CustomerAwsId
   */
  readonly customerAwsId?: string;

  /**
   * @schema DmsEventSubscription#CustSubscriptionId
   */
  readonly custSubscriptionId?: string;

  /**
   * @schema DmsEventSubscription#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema DmsEventSubscription#Status
   */
  readonly status?: string;

  /**
   * @schema DmsEventSubscription#SubscriptionCreationTime
   */
  readonly subscriptionCreationTime?: string;

  /**
   * @schema DmsEventSubscription#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema DmsEventSubscription#SourceIdsList
   */
  readonly sourceIdsList?: string[];

  /**
   * @schema DmsEventSubscription#EventCategoriesList
   */
  readonly eventCategoriesList?: string[];

  /**
   * @schema DmsEventSubscription#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema DmsReplicationInstance
 */
export interface DmsReplicationInstance {
  /**
   * @schema DmsReplicationInstance#ReplicationInstanceIdentifier
   */
  readonly replicationInstanceIdentifier?: string;

  /**
   * @schema DmsReplicationInstance#ReplicationInstanceClass
   */
  readonly replicationInstanceClass?: string;

  /**
   * @schema DmsReplicationInstance#ReplicationInstanceStatus
   */
  readonly replicationInstanceStatus?: string;

  /**
   * @schema DmsReplicationInstance#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema DmsReplicationInstance#InstanceCreateTime
   */
  readonly instanceCreateTime?: string;

  /**
   * @schema DmsReplicationInstance#VpcSecurityGroups
   */
  readonly vpcSecurityGroups?: DmsVpcSecurityGroupMembership[];

  /**
   * @schema DmsReplicationInstance#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema DmsReplicationInstance#ReplicationSubnetGroup
   */
  readonly replicationSubnetGroup?: DmsReplicationSubnetGroup;

  /**
   * @schema DmsReplicationInstance#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema DmsReplicationInstance#PendingModifiedValues
   */
  readonly pendingModifiedValues?: DmsReplicationPendingModifiedValues;

  /**
   * @schema DmsReplicationInstance#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema DmsReplicationInstance#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DmsReplicationInstance#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema DmsReplicationInstance#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema DmsReplicationInstance#ReplicationInstanceArn
   */
  readonly replicationInstanceArn?: string;

  /**
   * @schema DmsReplicationInstance#ReplicationInstancePublicIpAddress
   */
  readonly replicationInstancePublicIpAddress?: string;

  /**
   * @schema DmsReplicationInstance#ReplicationInstancePrivateIpAddress
   */
  readonly replicationInstancePrivateIpAddress?: string;

  /**
   * @schema DmsReplicationInstance#ReplicationInstancePublicIpAddresses
   */
  readonly replicationInstancePublicIpAddresses?: string[];

  /**
   * @schema DmsReplicationInstance#ReplicationInstancePrivateIpAddresses
   */
  readonly replicationInstancePrivateIpAddresses?: string[];

  /**
   * @schema DmsReplicationInstance#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema DmsReplicationInstance#SecondaryAvailabilityZone
   */
  readonly secondaryAvailabilityZone?: string;

  /**
   * @schema DmsReplicationInstance#FreeUntil
   */
  readonly freeUntil?: string;

  /**
   * @schema DmsReplicationInstance#DnsNameServers
   */
  readonly dnsNameServers?: string;

}

/**
 * @schema DmsReplicationSubnetGroup
 */
export interface DmsReplicationSubnetGroup {
  /**
   * @schema DmsReplicationSubnetGroup#ReplicationSubnetGroupIdentifier
   */
  readonly replicationSubnetGroupIdentifier?: string;

  /**
   * @schema DmsReplicationSubnetGroup#ReplicationSubnetGroupDescription
   */
  readonly replicationSubnetGroupDescription?: string;

  /**
   * @schema DmsReplicationSubnetGroup#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema DmsReplicationSubnetGroup#SubnetGroupStatus
   */
  readonly subnetGroupStatus?: string;

  /**
   * @schema DmsReplicationSubnetGroup#Subnets
   */
  readonly subnets?: DmsSubnet[];

}

/**
 * @schema DmsReplicationTask
 */
export interface DmsReplicationTask {
  /**
   * @schema DmsReplicationTask#ReplicationTaskIdentifier
   */
  readonly replicationTaskIdentifier?: string;

  /**
   * @schema DmsReplicationTask#SourceEndpointArn
   */
  readonly sourceEndpointArn?: string;

  /**
   * @schema DmsReplicationTask#TargetEndpointArn
   */
  readonly targetEndpointArn?: string;

  /**
   * @schema DmsReplicationTask#ReplicationInstanceArn
   */
  readonly replicationInstanceArn?: string;

  /**
   * @schema DmsReplicationTask#MigrationType
   */
  readonly migrationType?: string;

  /**
   * @schema DmsReplicationTask#TableMappings
   */
  readonly tableMappings?: string;

  /**
   * @schema DmsReplicationTask#ReplicationTaskSettings
   */
  readonly replicationTaskSettings?: string;

  /**
   * @schema DmsReplicationTask#Status
   */
  readonly status?: string;

  /**
   * @schema DmsReplicationTask#LastFailureMessage
   */
  readonly lastFailureMessage?: string;

  /**
   * @schema DmsReplicationTask#StopReason
   */
  readonly stopReason?: string;

  /**
   * @schema DmsReplicationTask#ReplicationTaskCreationDate
   */
  readonly replicationTaskCreationDate?: string;

  /**
   * @schema DmsReplicationTask#ReplicationTaskStartDate
   */
  readonly replicationTaskStartDate?: string;

  /**
   * @schema DmsReplicationTask#CdcStartPosition
   */
  readonly cdcStartPosition?: string;

  /**
   * @schema DmsReplicationTask#CdcStopPosition
   */
  readonly cdcStopPosition?: string;

  /**
   * @schema DmsReplicationTask#RecoveryCheckpoint
   */
  readonly recoveryCheckpoint?: string;

  /**
   * @schema DmsReplicationTask#ReplicationTaskArn
   */
  readonly replicationTaskArn?: string;

  /**
   * @schema DmsReplicationTask#ReplicationTaskStats
   */
  readonly replicationTaskStats?: DmsReplicationTaskStats;

  /**
   * @schema DmsReplicationTask#TaskData
   */
  readonly taskData?: string;

  /**
   * @schema DmsReplicationTask#TargetReplicationInstanceArn
   */
  readonly targetReplicationInstanceArn?: string;

}

/**
 * @schema DmsCertificate
 */
export interface DmsCertificate {
  /**
   * @schema DmsCertificate#CertificateIdentifier
   */
  readonly certificateIdentifier?: string;

  /**
   * @schema DmsCertificate#CertificateCreationDate
   */
  readonly certificateCreationDate?: string;

  /**
   * @schema DmsCertificate#CertificatePem
   */
  readonly certificatePem?: string;

  /**
   * @schema DmsCertificate#CertificateWallet
   */
  readonly certificateWallet?: any;

  /**
   * @schema DmsCertificate#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema DmsCertificate#CertificateOwner
   */
  readonly certificateOwner?: string;

  /**
   * @schema DmsCertificate#ValidFromDate
   */
  readonly validFromDate?: string;

  /**
   * @schema DmsCertificate#ValidToDate
   */
  readonly validToDate?: string;

  /**
   * @schema DmsCertificate#SigningAlgorithm
   */
  readonly signingAlgorithm?: string;

  /**
   * @schema DmsCertificate#KeyLength
   */
  readonly keyLength?: number;

}

/**
 * @schema DmsConnection
 */
export interface DmsConnection {
  /**
   * @schema DmsConnection#ReplicationInstanceArn
   */
  readonly replicationInstanceArn?: string;

  /**
   * @schema DmsConnection#EndpointArn
   */
  readonly endpointArn?: string;

  /**
   * @schema DmsConnection#Status
   */
  readonly status?: string;

  /**
   * @schema DmsConnection#LastFailureMessage
   */
  readonly lastFailureMessage?: string;

  /**
   * @schema DmsConnection#EndpointIdentifier
   */
  readonly endpointIdentifier?: string;

  /**
   * @schema DmsConnection#ReplicationInstanceIdentifier
   */
  readonly replicationInstanceIdentifier?: string;

}

/**
 * @schema DmsAccountQuota
 */
export interface DmsAccountQuota {
  /**
   * @schema DmsAccountQuota#AccountQuotaName
   */
  readonly accountQuotaName?: string;

  /**
   * @schema DmsAccountQuota#Used
   */
  readonly used?: number;

  /**
   * @schema DmsAccountQuota#Max
   */
  readonly max?: number;

}

/**
 * @schema DmsFilter
 */
export interface DmsFilter {
  /**
   * @schema DmsFilter#Name
   */
  readonly name: string;

  /**
   * @schema DmsFilter#Values
   */
  readonly values: string[];

}

/**
 * @schema DmsSupportedEndpointType
 */
export interface DmsSupportedEndpointType {
  /**
   * @schema DmsSupportedEndpointType#EngineName
   */
  readonly engineName?: string;

  /**
   * @schema DmsSupportedEndpointType#SupportsCDC
   */
  readonly supportsCdc?: boolean;

  /**
   * @schema DmsSupportedEndpointType#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema DmsSupportedEndpointType#ReplicationInstanceEngineMinimumVersion
   */
  readonly replicationInstanceEngineMinimumVersion?: string;

  /**
   * @schema DmsSupportedEndpointType#EngineDisplayName
   */
  readonly engineDisplayName?: string;

}

/**
 * @schema DmsEventCategoryGroup
 */
export interface DmsEventCategoryGroup {
  /**
   * @schema DmsEventCategoryGroup#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema DmsEventCategoryGroup#EventCategories
   */
  readonly eventCategories?: string[];

}

/**
 * @schema DmsEvent
 */
export interface DmsEvent {
  /**
   * @schema DmsEvent#SourceIdentifier
   */
  readonly sourceIdentifier?: string;

  /**
   * @schema DmsEvent#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema DmsEvent#Message
   */
  readonly message?: string;

  /**
   * @schema DmsEvent#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema DmsEvent#Date
   */
  readonly date?: string;

}

/**
 * @schema DmsOrderableReplicationInstance
 */
export interface DmsOrderableReplicationInstance {
  /**
   * @schema DmsOrderableReplicationInstance#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DmsOrderableReplicationInstance#ReplicationInstanceClass
   */
  readonly replicationInstanceClass?: string;

  /**
   * @schema DmsOrderableReplicationInstance#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema DmsOrderableReplicationInstance#MinAllocatedStorage
   */
  readonly minAllocatedStorage?: number;

  /**
   * @schema DmsOrderableReplicationInstance#MaxAllocatedStorage
   */
  readonly maxAllocatedStorage?: number;

  /**
   * @schema DmsOrderableReplicationInstance#DefaultAllocatedStorage
   */
  readonly defaultAllocatedStorage?: number;

  /**
   * @schema DmsOrderableReplicationInstance#IncludedAllocatedStorage
   */
  readonly includedAllocatedStorage?: number;

  /**
   * @schema DmsOrderableReplicationInstance#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema DmsOrderableReplicationInstance#ReleaseStatus
   */
  readonly releaseStatus?: string;

}

/**
 * @schema DmsRefreshSchemasStatus
 */
export interface DmsRefreshSchemasStatus {
  /**
   * @schema DmsRefreshSchemasStatus#EndpointArn
   */
  readonly endpointArn?: string;

  /**
   * @schema DmsRefreshSchemasStatus#ReplicationInstanceArn
   */
  readonly replicationInstanceArn?: string;

  /**
   * @schema DmsRefreshSchemasStatus#Status
   */
  readonly status?: string;

  /**
   * @schema DmsRefreshSchemasStatus#LastRefreshDate
   */
  readonly lastRefreshDate?: string;

  /**
   * @schema DmsRefreshSchemasStatus#LastFailureMessage
   */
  readonly lastFailureMessage?: string;

}

/**
 * @schema DmsReplicationInstanceTaskLog
 */
export interface DmsReplicationInstanceTaskLog {
  /**
   * @schema DmsReplicationInstanceTaskLog#ReplicationTaskName
   */
  readonly replicationTaskName?: string;

  /**
   * @schema DmsReplicationInstanceTaskLog#ReplicationTaskArn
   */
  readonly replicationTaskArn?: string;

  /**
   * @schema DmsReplicationInstanceTaskLog#ReplicationInstanceTaskLogSize
   */
  readonly replicationInstanceTaskLogSize?: number;

}

/**
 * @schema DmsReplicationTaskAssessmentResult
 */
export interface DmsReplicationTaskAssessmentResult {
  /**
   * @schema DmsReplicationTaskAssessmentResult#ReplicationTaskIdentifier
   */
  readonly replicationTaskIdentifier?: string;

  /**
   * @schema DmsReplicationTaskAssessmentResult#ReplicationTaskArn
   */
  readonly replicationTaskArn?: string;

  /**
   * @schema DmsReplicationTaskAssessmentResult#ReplicationTaskLastAssessmentDate
   */
  readonly replicationTaskLastAssessmentDate?: string;

  /**
   * @schema DmsReplicationTaskAssessmentResult#AssessmentStatus
   */
  readonly assessmentStatus?: string;

  /**
   * @schema DmsReplicationTaskAssessmentResult#AssessmentResultsFile
   */
  readonly assessmentResultsFile?: string;

  /**
   * @schema DmsReplicationTaskAssessmentResult#AssessmentResults
   */
  readonly assessmentResults?: string;

  /**
   * @schema DmsReplicationTaskAssessmentResult#S3ObjectUrl
   */
  readonly s3ObjectUrl?: string;

}

/**
 * @schema DmsReplicationTaskIndividualAssessment
 */
export interface DmsReplicationTaskIndividualAssessment {
  /**
   * @schema DmsReplicationTaskIndividualAssessment#ReplicationTaskIndividualAssessmentArn
   */
  readonly replicationTaskIndividualAssessmentArn?: string;

  /**
   * @schema DmsReplicationTaskIndividualAssessment#ReplicationTaskAssessmentRunArn
   */
  readonly replicationTaskAssessmentRunArn?: string;

  /**
   * @schema DmsReplicationTaskIndividualAssessment#IndividualAssessmentName
   */
  readonly individualAssessmentName?: string;

  /**
   * @schema DmsReplicationTaskIndividualAssessment#Status
   */
  readonly status?: string;

  /**
   * @schema DmsReplicationTaskIndividualAssessment#ReplicationTaskIndividualAssessmentStartDate
   */
  readonly replicationTaskIndividualAssessmentStartDate?: string;

}

/**
 * @schema DmsTableStatistics
 */
export interface DmsTableStatistics {
  /**
   * @schema DmsTableStatistics#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema DmsTableStatistics#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DmsTableStatistics#Inserts
   */
  readonly inserts?: number;

  /**
   * @schema DmsTableStatistics#Deletes
   */
  readonly deletes?: number;

  /**
   * @schema DmsTableStatistics#Updates
   */
  readonly updates?: number;

  /**
   * @schema DmsTableStatistics#Ddls
   */
  readonly ddls?: number;

  /**
   * @schema DmsTableStatistics#FullLoadRows
   */
  readonly fullLoadRows?: number;

  /**
   * @schema DmsTableStatistics#FullLoadCondtnlChkFailedRows
   */
  readonly fullLoadCondtnlChkFailedRows?: number;

  /**
   * @schema DmsTableStatistics#FullLoadErrorRows
   */
  readonly fullLoadErrorRows?: number;

  /**
   * @schema DmsTableStatistics#FullLoadStartTime
   */
  readonly fullLoadStartTime?: string;

  /**
   * @schema DmsTableStatistics#FullLoadEndTime
   */
  readonly fullLoadEndTime?: string;

  /**
   * @schema DmsTableStatistics#FullLoadReloaded
   */
  readonly fullLoadReloaded?: boolean;

  /**
   * @schema DmsTableStatistics#LastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema DmsTableStatistics#TableState
   */
  readonly tableState?: string;

  /**
   * @schema DmsTableStatistics#ValidationPendingRecords
   */
  readonly validationPendingRecords?: number;

  /**
   * @schema DmsTableStatistics#ValidationFailedRecords
   */
  readonly validationFailedRecords?: number;

  /**
   * @schema DmsTableStatistics#ValidationSuspendedRecords
   */
  readonly validationSuspendedRecords?: number;

  /**
   * @schema DmsTableStatistics#ValidationState
   */
  readonly validationState?: string;

  /**
   * @schema DmsTableStatistics#ValidationStateDetails
   */
  readonly validationStateDetails?: string;

}

/**
 * @schema DmsTableToReload
 */
export interface DmsTableToReload {
  /**
   * @schema DmsTableToReload#SchemaName
   */
  readonly schemaName: string;

  /**
   * @schema DmsTableToReload#TableName
   */
  readonly tableName: string;

}

/**
 * @schema DmsPendingMaintenanceAction
 */
export interface DmsPendingMaintenanceAction {
  /**
   * @schema DmsPendingMaintenanceAction#Action
   */
  readonly action?: string;

  /**
   * @schema DmsPendingMaintenanceAction#AutoAppliedAfterDate
   */
  readonly autoAppliedAfterDate?: string;

  /**
   * @schema DmsPendingMaintenanceAction#ForcedApplyDate
   */
  readonly forcedApplyDate?: string;

  /**
   * @schema DmsPendingMaintenanceAction#OptInStatus
   */
  readonly optInStatus?: string;

  /**
   * @schema DmsPendingMaintenanceAction#CurrentApplyDate
   */
  readonly currentApplyDate?: string;

  /**
   * @schema DmsPendingMaintenanceAction#Description
   */
  readonly description?: string;

}

/**
 * @schema DmsReplicationTaskAssessmentRunProgress
 */
export interface DmsReplicationTaskAssessmentRunProgress {
  /**
   * @schema DmsReplicationTaskAssessmentRunProgress#IndividualAssessmentCount
   */
  readonly individualAssessmentCount?: number;

  /**
   * @schema DmsReplicationTaskAssessmentRunProgress#IndividualAssessmentCompletedCount
   */
  readonly individualAssessmentCompletedCount?: number;

}

/**
 * @schema DmsVpcSecurityGroupMembership
 */
export interface DmsVpcSecurityGroupMembership {
  /**
   * @schema DmsVpcSecurityGroupMembership#VpcSecurityGroupId
   */
  readonly vpcSecurityGroupId?: string;

  /**
   * @schema DmsVpcSecurityGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * @schema DmsReplicationPendingModifiedValues
 */
export interface DmsReplicationPendingModifiedValues {
  /**
   * @schema DmsReplicationPendingModifiedValues#ReplicationInstanceClass
   */
  readonly replicationInstanceClass?: string;

  /**
   * @schema DmsReplicationPendingModifiedValues#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema DmsReplicationPendingModifiedValues#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema DmsReplicationPendingModifiedValues#EngineVersion
   */
  readonly engineVersion?: string;

}

/**
 * @schema DmsSubnet
 */
export interface DmsSubnet {
  /**
   * @schema DmsSubnet#SubnetIdentifier
   */
  readonly subnetIdentifier?: string;

  /**
   * @schema DmsSubnet#SubnetAvailabilityZone
   */
  readonly subnetAvailabilityZone?: DmsAvailabilityZone;

  /**
   * @schema DmsSubnet#SubnetStatus
   */
  readonly subnetStatus?: string;

}

/**
 * @schema DmsReplicationTaskStats
 */
export interface DmsReplicationTaskStats {
  /**
   * @schema DmsReplicationTaskStats#FullLoadProgressPercent
   */
  readonly fullLoadProgressPercent?: number;

  /**
   * @schema DmsReplicationTaskStats#ElapsedTimeMillis
   */
  readonly elapsedTimeMillis?: number;

  /**
   * @schema DmsReplicationTaskStats#TablesLoaded
   */
  readonly tablesLoaded?: number;

  /**
   * @schema DmsReplicationTaskStats#TablesLoading
   */
  readonly tablesLoading?: number;

  /**
   * @schema DmsReplicationTaskStats#TablesQueued
   */
  readonly tablesQueued?: number;

  /**
   * @schema DmsReplicationTaskStats#TablesErrored
   */
  readonly tablesErrored?: number;

  /**
   * @schema DmsReplicationTaskStats#FreshStartDate
   */
  readonly freshStartDate?: string;

  /**
   * @schema DmsReplicationTaskStats#StartDate
   */
  readonly startDate?: string;

  /**
   * @schema DmsReplicationTaskStats#StopDate
   */
  readonly stopDate?: string;

  /**
   * @schema DmsReplicationTaskStats#FullLoadStartDate
   */
  readonly fullLoadStartDate?: string;

  /**
   * @schema DmsReplicationTaskStats#FullLoadFinishDate
   */
  readonly fullLoadFinishDate?: string;

}

/**
 * @schema DmsAvailabilityZone
 */
export interface DmsAvailabilityZone {
  /**
   * @schema DmsAvailabilityZone#Name
   */
  readonly name?: string;

}
