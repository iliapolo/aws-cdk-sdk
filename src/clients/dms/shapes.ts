/**
 * @schema DmsAddTagsToResourceMessage
 */
export interface DmsAddTagsToResourceMessage {
  /**
   * @schema DmsAddTagsToResourceMessage#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DmsAddTagsToResourceMessage#Tags
   */
  readonly tags?: DmsTag[];

}

/**
 * Converts an object of type 'DmsAddTagsToResourceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsAddTagsToResourceMessage(obj: DmsAddTagsToResourceMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_DmsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsAddTagsToResourceResponse
 */
export interface DmsAddTagsToResourceResponse {
}

/**
 * Converts an object of type 'DmsAddTagsToResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsAddTagsToResourceResponse(obj: DmsAddTagsToResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsApplyPendingMaintenanceActionMessage
 */
export interface DmsApplyPendingMaintenanceActionMessage {
  /**
   * @schema DmsApplyPendingMaintenanceActionMessage#ReplicationInstanceArn
   */
  readonly replicationInstanceArn?: string;

  /**
   * @schema DmsApplyPendingMaintenanceActionMessage#ApplyAction
   */
  readonly applyAction?: string;

  /**
   * @schema DmsApplyPendingMaintenanceActionMessage#OptInType
   */
  readonly optInType?: string;

}

/**
 * Converts an object of type 'DmsApplyPendingMaintenanceActionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsApplyPendingMaintenanceActionMessage(obj: DmsApplyPendingMaintenanceActionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationInstanceArn': obj.replicationInstanceArn,
    'ApplyAction': obj.applyAction,
    'OptInType': obj.optInType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsApplyPendingMaintenanceActionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsApplyPendingMaintenanceActionResponse(obj: DmsApplyPendingMaintenanceActionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourcePendingMaintenanceActions': toJson_DmsResourcePendingMaintenanceActions(obj.resourcePendingMaintenanceActions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsCancelReplicationTaskAssessmentRunMessage
 */
export interface DmsCancelReplicationTaskAssessmentRunMessage {
  /**
   * @schema DmsCancelReplicationTaskAssessmentRunMessage#ReplicationTaskAssessmentRunArn
   */
  readonly replicationTaskAssessmentRunArn?: string;

}

/**
 * Converts an object of type 'DmsCancelReplicationTaskAssessmentRunMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsCancelReplicationTaskAssessmentRunMessage(obj: DmsCancelReplicationTaskAssessmentRunMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationTaskAssessmentRunArn': obj.replicationTaskAssessmentRunArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsCancelReplicationTaskAssessmentRunResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsCancelReplicationTaskAssessmentRunResponse(obj: DmsCancelReplicationTaskAssessmentRunResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationTaskAssessmentRun': toJson_DmsReplicationTaskAssessmentRun(obj.replicationTaskAssessmentRun),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsCreateEndpointMessage
 */
export interface DmsCreateEndpointMessage {
  /**
   * @schema DmsCreateEndpointMessage#EndpointIdentifier
   */
  readonly endpointIdentifier?: string;

  /**
   * @schema DmsCreateEndpointMessage#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema DmsCreateEndpointMessage#EngineName
   */
  readonly engineName?: string;

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
 * Converts an object of type 'DmsCreateEndpointMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsCreateEndpointMessage(obj: DmsCreateEndpointMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointIdentifier': obj.endpointIdentifier,
    'EndpointType': obj.endpointType,
    'EngineName': obj.engineName,
    'Username': obj.username,
    'Password': obj.password,
    'ServerName': obj.serverName,
    'Port': obj.port,
    'DatabaseName': obj.databaseName,
    'ExtraConnectionAttributes': obj.extraConnectionAttributes,
    'KmsKeyId': obj.kmsKeyId,
    'Tags': obj.tags?.map(y => toJson_DmsTag(y)),
    'CertificateArn': obj.certificateArn,
    'SslMode': obj.sslMode,
    'ServiceAccessRoleArn': obj.serviceAccessRoleArn,
    'ExternalTableDefinition': obj.externalTableDefinition,
    'DynamoDbSettings': toJson_DmsDynamoDbSettings(obj.dynamoDbSettings),
    'S3Settings': toJson_Dmss3Settings(obj.s3Settings),
    'DmsTransferSettings': toJson_DmsDmsTransferSettings(obj.dmsTransferSettings),
    'MongoDbSettings': toJson_DmsMongoDbSettings(obj.mongoDbSettings),
    'KinesisSettings': toJson_DmsKinesisSettings(obj.kinesisSettings),
    'KafkaSettings': toJson_DmsKafkaSettings(obj.kafkaSettings),
    'ElasticsearchSettings': toJson_DmsElasticsearchSettings(obj.elasticsearchSettings),
    'NeptuneSettings': toJson_DmsNeptuneSettings(obj.neptuneSettings),
    'RedshiftSettings': toJson_DmsRedshiftSettings(obj.redshiftSettings),
    'PostgreSQLSettings': toJson_DmsPostgreSqlSettings(obj.postgreSqlSettings),
    'MySQLSettings': toJson_DmsMySqlSettings(obj.mySqlSettings),
    'OracleSettings': toJson_DmsOracleSettings(obj.oracleSettings),
    'SybaseSettings': toJson_DmsSybaseSettings(obj.sybaseSettings),
    'MicrosoftSQLServerSettings': toJson_DmsMicrosoftSqlServerSettings(obj.microsoftSqlServerSettings),
    'IBMDb2Settings': toJson_DmsibmDb2Settings(obj.ibmDb2Settings),
    'ResourceIdentifier': obj.resourceIdentifier,
    'DocDbSettings': toJson_DmsDocDbSettings(obj.docDbSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsCreateEndpointResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsCreateEndpointResponse(obj: DmsCreateEndpointResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Endpoint': toJson_DmsEndpoint(obj.endpoint),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsCreateEventSubscriptionMessage
 */
export interface DmsCreateEventSubscriptionMessage {
  /**
   * @schema DmsCreateEventSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName?: string;

  /**
   * @schema DmsCreateEventSubscriptionMessage#SnsTopicArn
   */
  readonly snsTopicArn?: string;

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
 * Converts an object of type 'DmsCreateEventSubscriptionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsCreateEventSubscriptionMessage(obj: DmsCreateEventSubscriptionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubscriptionName': obj.subscriptionName,
    'SnsTopicArn': obj.snsTopicArn,
    'SourceType': obj.sourceType,
    'EventCategories': obj.eventCategories?.map(y => y),
    'SourceIds': obj.sourceIds?.map(y => y),
    'Enabled': obj.enabled,
    'Tags': obj.tags?.map(y => toJson_DmsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsCreateEventSubscriptionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsCreateEventSubscriptionResponse(obj: DmsCreateEventSubscriptionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventSubscription': toJson_DmsEventSubscription(obj.eventSubscription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsCreateReplicationInstanceMessage
 */
export interface DmsCreateReplicationInstanceMessage {
  /**
   * @schema DmsCreateReplicationInstanceMessage#ReplicationInstanceIdentifier
   */
  readonly replicationInstanceIdentifier?: string;

  /**
   * @schema DmsCreateReplicationInstanceMessage#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema DmsCreateReplicationInstanceMessage#ReplicationInstanceClass
   */
  readonly replicationInstanceClass?: string;

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
 * Converts an object of type 'DmsCreateReplicationInstanceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsCreateReplicationInstanceMessage(obj: DmsCreateReplicationInstanceMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationInstanceIdentifier': obj.replicationInstanceIdentifier,
    'AllocatedStorage': obj.allocatedStorage,
    'ReplicationInstanceClass': obj.replicationInstanceClass,
    'VpcSecurityGroupIds': obj.vpcSecurityGroupIds?.map(y => y),
    'AvailabilityZone': obj.availabilityZone,
    'ReplicationSubnetGroupIdentifier': obj.replicationSubnetGroupIdentifier,
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'MultiAZ': obj.multiAz,
    'EngineVersion': obj.engineVersion,
    'AutoMinorVersionUpgrade': obj.autoMinorVersionUpgrade,
    'Tags': obj.tags?.map(y => toJson_DmsTag(y)),
    'KmsKeyId': obj.kmsKeyId,
    'PubliclyAccessible': obj.publiclyAccessible,
    'DnsNameServers': obj.dnsNameServers,
    'ResourceIdentifier': obj.resourceIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsCreateReplicationInstanceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsCreateReplicationInstanceResponse(obj: DmsCreateReplicationInstanceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationInstance': toJson_DmsReplicationInstance(obj.replicationInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsCreateReplicationSubnetGroupMessage
 */
export interface DmsCreateReplicationSubnetGroupMessage {
  /**
   * @schema DmsCreateReplicationSubnetGroupMessage#ReplicationSubnetGroupIdentifier
   */
  readonly replicationSubnetGroupIdentifier?: string;

  /**
   * @schema DmsCreateReplicationSubnetGroupMessage#ReplicationSubnetGroupDescription
   */
  readonly replicationSubnetGroupDescription?: string;

  /**
   * @schema DmsCreateReplicationSubnetGroupMessage#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema DmsCreateReplicationSubnetGroupMessage#Tags
   */
  readonly tags?: DmsTag[];

}

/**
 * Converts an object of type 'DmsCreateReplicationSubnetGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsCreateReplicationSubnetGroupMessage(obj: DmsCreateReplicationSubnetGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationSubnetGroupIdentifier': obj.replicationSubnetGroupIdentifier,
    'ReplicationSubnetGroupDescription': obj.replicationSubnetGroupDescription,
    'SubnetIds': obj.subnetIds?.map(y => y),
    'Tags': obj.tags?.map(y => toJson_DmsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsCreateReplicationSubnetGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsCreateReplicationSubnetGroupResponse(obj: DmsCreateReplicationSubnetGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationSubnetGroup': toJson_DmsReplicationSubnetGroup(obj.replicationSubnetGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsCreateReplicationTaskMessage
 */
export interface DmsCreateReplicationTaskMessage {
  /**
   * @schema DmsCreateReplicationTaskMessage#ReplicationTaskIdentifier
   */
  readonly replicationTaskIdentifier?: string;

  /**
   * @schema DmsCreateReplicationTaskMessage#SourceEndpointArn
   */
  readonly sourceEndpointArn?: string;

  /**
   * @schema DmsCreateReplicationTaskMessage#TargetEndpointArn
   */
  readonly targetEndpointArn?: string;

  /**
   * @schema DmsCreateReplicationTaskMessage#ReplicationInstanceArn
   */
  readonly replicationInstanceArn?: string;

  /**
   * @schema DmsCreateReplicationTaskMessage#MigrationType
   */
  readonly migrationType?: string;

  /**
   * @schema DmsCreateReplicationTaskMessage#TableMappings
   */
  readonly tableMappings?: string;

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
 * Converts an object of type 'DmsCreateReplicationTaskMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsCreateReplicationTaskMessage(obj: DmsCreateReplicationTaskMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationTaskIdentifier': obj.replicationTaskIdentifier,
    'SourceEndpointArn': obj.sourceEndpointArn,
    'TargetEndpointArn': obj.targetEndpointArn,
    'ReplicationInstanceArn': obj.replicationInstanceArn,
    'MigrationType': obj.migrationType,
    'TableMappings': obj.tableMappings,
    'ReplicationTaskSettings': obj.replicationTaskSettings,
    'CdcStartTime': obj.cdcStartTime,
    'CdcStartPosition': obj.cdcStartPosition,
    'CdcStopPosition': obj.cdcStopPosition,
    'Tags': obj.tags?.map(y => toJson_DmsTag(y)),
    'TaskData': obj.taskData,
    'ResourceIdentifier': obj.resourceIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsCreateReplicationTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsCreateReplicationTaskResponse(obj: DmsCreateReplicationTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationTask': toJson_DmsReplicationTask(obj.replicationTask),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsDeleteCertificateMessage
 */
export interface DmsDeleteCertificateMessage {
  /**
   * @schema DmsDeleteCertificateMessage#CertificateArn
   */
  readonly certificateArn?: string;

}

/**
 * Converts an object of type 'DmsDeleteCertificateMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDeleteCertificateMessage(obj: DmsDeleteCertificateMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateArn': obj.certificateArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDeleteCertificateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDeleteCertificateResponse(obj: DmsDeleteCertificateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Certificate': toJson_DmsCertificate(obj.certificate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsDeleteConnectionMessage
 */
export interface DmsDeleteConnectionMessage {
  /**
   * @schema DmsDeleteConnectionMessage#EndpointArn
   */
  readonly endpointArn?: string;

  /**
   * @schema DmsDeleteConnectionMessage#ReplicationInstanceArn
   */
  readonly replicationInstanceArn?: string;

}

/**
 * Converts an object of type 'DmsDeleteConnectionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDeleteConnectionMessage(obj: DmsDeleteConnectionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointArn': obj.endpointArn,
    'ReplicationInstanceArn': obj.replicationInstanceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDeleteConnectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDeleteConnectionResponse(obj: DmsDeleteConnectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Connection': toJson_DmsConnection(obj.connection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsDeleteEndpointMessage
 */
export interface DmsDeleteEndpointMessage {
  /**
   * @schema DmsDeleteEndpointMessage#EndpointArn
   */
  readonly endpointArn?: string;

}

/**
 * Converts an object of type 'DmsDeleteEndpointMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDeleteEndpointMessage(obj: DmsDeleteEndpointMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointArn': obj.endpointArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDeleteEndpointResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDeleteEndpointResponse(obj: DmsDeleteEndpointResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Endpoint': toJson_DmsEndpoint(obj.endpoint),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsDeleteEventSubscriptionMessage
 */
export interface DmsDeleteEventSubscriptionMessage {
  /**
   * @schema DmsDeleteEventSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName?: string;

}

/**
 * Converts an object of type 'DmsDeleteEventSubscriptionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDeleteEventSubscriptionMessage(obj: DmsDeleteEventSubscriptionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubscriptionName': obj.subscriptionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDeleteEventSubscriptionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDeleteEventSubscriptionResponse(obj: DmsDeleteEventSubscriptionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventSubscription': toJson_DmsEventSubscription(obj.eventSubscription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsDeleteReplicationInstanceMessage
 */
export interface DmsDeleteReplicationInstanceMessage {
  /**
   * @schema DmsDeleteReplicationInstanceMessage#ReplicationInstanceArn
   */
  readonly replicationInstanceArn?: string;

}

/**
 * Converts an object of type 'DmsDeleteReplicationInstanceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDeleteReplicationInstanceMessage(obj: DmsDeleteReplicationInstanceMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationInstanceArn': obj.replicationInstanceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDeleteReplicationInstanceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDeleteReplicationInstanceResponse(obj: DmsDeleteReplicationInstanceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationInstance': toJson_DmsReplicationInstance(obj.replicationInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsDeleteReplicationSubnetGroupMessage
 */
export interface DmsDeleteReplicationSubnetGroupMessage {
  /**
   * @schema DmsDeleteReplicationSubnetGroupMessage#ReplicationSubnetGroupIdentifier
   */
  readonly replicationSubnetGroupIdentifier?: string;

}

/**
 * Converts an object of type 'DmsDeleteReplicationSubnetGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDeleteReplicationSubnetGroupMessage(obj: DmsDeleteReplicationSubnetGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationSubnetGroupIdentifier': obj.replicationSubnetGroupIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsDeleteReplicationSubnetGroupResponse
 */
export interface DmsDeleteReplicationSubnetGroupResponse {
}

/**
 * Converts an object of type 'DmsDeleteReplicationSubnetGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDeleteReplicationSubnetGroupResponse(obj: DmsDeleteReplicationSubnetGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsDeleteReplicationTaskMessage
 */
export interface DmsDeleteReplicationTaskMessage {
  /**
   * @schema DmsDeleteReplicationTaskMessage#ReplicationTaskArn
   */
  readonly replicationTaskArn?: string;

}

/**
 * Converts an object of type 'DmsDeleteReplicationTaskMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDeleteReplicationTaskMessage(obj: DmsDeleteReplicationTaskMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationTaskArn': obj.replicationTaskArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDeleteReplicationTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDeleteReplicationTaskResponse(obj: DmsDeleteReplicationTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationTask': toJson_DmsReplicationTask(obj.replicationTask),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsDeleteReplicationTaskAssessmentRunMessage
 */
export interface DmsDeleteReplicationTaskAssessmentRunMessage {
  /**
   * @schema DmsDeleteReplicationTaskAssessmentRunMessage#ReplicationTaskAssessmentRunArn
   */
  readonly replicationTaskAssessmentRunArn?: string;

}

/**
 * Converts an object of type 'DmsDeleteReplicationTaskAssessmentRunMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDeleteReplicationTaskAssessmentRunMessage(obj: DmsDeleteReplicationTaskAssessmentRunMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationTaskAssessmentRunArn': obj.replicationTaskAssessmentRunArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDeleteReplicationTaskAssessmentRunResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDeleteReplicationTaskAssessmentRunResponse(obj: DmsDeleteReplicationTaskAssessmentRunResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationTaskAssessmentRun': toJson_DmsReplicationTaskAssessmentRun(obj.replicationTaskAssessmentRun),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsDescribeAccountAttributesMessage
 */
export interface DmsDescribeAccountAttributesMessage {
}

/**
 * Converts an object of type 'DmsDescribeAccountAttributesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeAccountAttributesMessage(obj: DmsDescribeAccountAttributesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeAccountAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeAccountAttributesResponse(obj: DmsDescribeAccountAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountQuotas': obj.accountQuotas?.map(y => toJson_DmsAccountQuota(y)),
    'UniqueAccountIdentifier': obj.uniqueAccountIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeApplicableIndividualAssessmentsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeApplicableIndividualAssessmentsMessage(obj: DmsDescribeApplicableIndividualAssessmentsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationTaskArn': obj.replicationTaskArn,
    'ReplicationInstanceArn': obj.replicationInstanceArn,
    'SourceEngineName': obj.sourceEngineName,
    'TargetEngineName': obj.targetEngineName,
    'MigrationType': obj.migrationType,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeApplicableIndividualAssessmentsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeApplicableIndividualAssessmentsResponse(obj: DmsDescribeApplicableIndividualAssessmentsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndividualAssessmentNames': obj.individualAssessmentNames?.map(y => y),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeCertificatesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeCertificatesMessage(obj: DmsDescribeCertificatesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_DmsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeCertificatesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeCertificatesResponse(obj: DmsDescribeCertificatesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'Certificates': obj.certificates?.map(y => toJson_DmsCertificate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeConnectionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeConnectionsMessage(obj: DmsDescribeConnectionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_DmsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeConnectionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeConnectionsResponse(obj: DmsDescribeConnectionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'Connections': obj.connections?.map(y => toJson_DmsConnection(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsDescribeEndpointSettingsMessage
 */
export interface DmsDescribeEndpointSettingsMessage {
  /**
   * @schema DmsDescribeEndpointSettingsMessage#EngineName
   */
  readonly engineName?: string;

  /**
   * @schema DmsDescribeEndpointSettingsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DmsDescribeEndpointSettingsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'DmsDescribeEndpointSettingsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeEndpointSettingsMessage(obj: DmsDescribeEndpointSettingsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EngineName': obj.engineName,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsDescribeEndpointSettingsResponse
 */
export interface DmsDescribeEndpointSettingsResponse {
  /**
   * @schema DmsDescribeEndpointSettingsResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema DmsDescribeEndpointSettingsResponse#EndpointSettings
   */
  readonly endpointSettings?: DmsEndpointSetting[];

}

/**
 * Converts an object of type 'DmsDescribeEndpointSettingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeEndpointSettingsResponse(obj: DmsDescribeEndpointSettingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'EndpointSettings': obj.endpointSettings?.map(y => toJson_DmsEndpointSetting(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeEndpointTypesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeEndpointTypesMessage(obj: DmsDescribeEndpointTypesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_DmsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeEndpointTypesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeEndpointTypesResponse(obj: DmsDescribeEndpointTypesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'SupportedEndpointTypes': obj.supportedEndpointTypes?.map(y => toJson_DmsSupportedEndpointType(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeEndpointsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeEndpointsMessage(obj: DmsDescribeEndpointsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_DmsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeEndpointsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeEndpointsResponse(obj: DmsDescribeEndpointsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'Endpoints': obj.endpoints?.map(y => toJson_DmsEndpoint(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeEventCategoriesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeEventCategoriesMessage(obj: DmsDescribeEventCategoriesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceType': obj.sourceType,
    'Filters': obj.filters?.map(y => toJson_DmsFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeEventCategoriesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeEventCategoriesResponse(obj: DmsDescribeEventCategoriesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventCategoryGroupList': obj.eventCategoryGroupList?.map(y => toJson_DmsEventCategoryGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeEventSubscriptionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeEventSubscriptionsMessage(obj: DmsDescribeEventSubscriptionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubscriptionName': obj.subscriptionName,
    'Filters': obj.filters?.map(y => toJson_DmsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeEventSubscriptionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeEventSubscriptionsResponse(obj: DmsDescribeEventSubscriptionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'EventSubscriptionsList': obj.eventSubscriptionsList?.map(y => toJson_DmsEventSubscription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeEventsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeEventsMessage(obj: DmsDescribeEventsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceIdentifier': obj.sourceIdentifier,
    'SourceType': obj.sourceType,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'Duration': obj.duration,
    'EventCategories': obj.eventCategories?.map(y => y),
    'Filters': obj.filters?.map(y => toJson_DmsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeEventsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeEventsResponse(obj: DmsDescribeEventsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'Events': obj.events?.map(y => toJson_DmsEvent(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeOrderableReplicationInstancesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeOrderableReplicationInstancesMessage(obj: DmsDescribeOrderableReplicationInstancesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeOrderableReplicationInstancesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeOrderableReplicationInstancesResponse(obj: DmsDescribeOrderableReplicationInstancesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrderableReplicationInstances': obj.orderableReplicationInstances?.map(y => toJson_DmsOrderableReplicationInstance(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribePendingMaintenanceActionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribePendingMaintenanceActionsMessage(obj: DmsDescribePendingMaintenanceActionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationInstanceArn': obj.replicationInstanceArn,
    'Filters': obj.filters?.map(y => toJson_DmsFilter(y)),
    'Marker': obj.marker,
    'MaxRecords': obj.maxRecords,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribePendingMaintenanceActionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribePendingMaintenanceActionsResponse(obj: DmsDescribePendingMaintenanceActionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PendingMaintenanceActions': obj.pendingMaintenanceActions?.map(y => toJson_DmsResourcePendingMaintenanceActions(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsDescribeRefreshSchemasStatusMessage
 */
export interface DmsDescribeRefreshSchemasStatusMessage {
  /**
   * @schema DmsDescribeRefreshSchemasStatusMessage#EndpointArn
   */
  readonly endpointArn?: string;

}

/**
 * Converts an object of type 'DmsDescribeRefreshSchemasStatusMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeRefreshSchemasStatusMessage(obj: DmsDescribeRefreshSchemasStatusMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointArn': obj.endpointArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeRefreshSchemasStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeRefreshSchemasStatusResponse(obj: DmsDescribeRefreshSchemasStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RefreshSchemasStatus': toJson_DmsRefreshSchemasStatus(obj.refreshSchemasStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsDescribeReplicationInstanceTaskLogsMessage
 */
export interface DmsDescribeReplicationInstanceTaskLogsMessage {
  /**
   * @schema DmsDescribeReplicationInstanceTaskLogsMessage#ReplicationInstanceArn
   */
  readonly replicationInstanceArn?: string;

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
 * Converts an object of type 'DmsDescribeReplicationInstanceTaskLogsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeReplicationInstanceTaskLogsMessage(obj: DmsDescribeReplicationInstanceTaskLogsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationInstanceArn': obj.replicationInstanceArn,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeReplicationInstanceTaskLogsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeReplicationInstanceTaskLogsResponse(obj: DmsDescribeReplicationInstanceTaskLogsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationInstanceArn': obj.replicationInstanceArn,
    'ReplicationInstanceTaskLogs': obj.replicationInstanceTaskLogs?.map(y => toJson_DmsReplicationInstanceTaskLog(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeReplicationInstancesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeReplicationInstancesMessage(obj: DmsDescribeReplicationInstancesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_DmsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeReplicationInstancesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeReplicationInstancesResponse(obj: DmsDescribeReplicationInstancesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'ReplicationInstances': obj.replicationInstances?.map(y => toJson_DmsReplicationInstance(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeReplicationSubnetGroupsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeReplicationSubnetGroupsMessage(obj: DmsDescribeReplicationSubnetGroupsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_DmsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeReplicationSubnetGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeReplicationSubnetGroupsResponse(obj: DmsDescribeReplicationSubnetGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'ReplicationSubnetGroups': obj.replicationSubnetGroups?.map(y => toJson_DmsReplicationSubnetGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeReplicationTaskAssessmentResultsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeReplicationTaskAssessmentResultsMessage(obj: DmsDescribeReplicationTaskAssessmentResultsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationTaskArn': obj.replicationTaskArn,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeReplicationTaskAssessmentResultsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeReplicationTaskAssessmentResultsResponse(obj: DmsDescribeReplicationTaskAssessmentResultsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'BucketName': obj.bucketName,
    'ReplicationTaskAssessmentResults': obj.replicationTaskAssessmentResults?.map(y => toJson_DmsReplicationTaskAssessmentResult(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeReplicationTaskAssessmentRunsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeReplicationTaskAssessmentRunsMessage(obj: DmsDescribeReplicationTaskAssessmentRunsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_DmsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeReplicationTaskAssessmentRunsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeReplicationTaskAssessmentRunsResponse(obj: DmsDescribeReplicationTaskAssessmentRunsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'ReplicationTaskAssessmentRuns': obj.replicationTaskAssessmentRuns?.map(y => toJson_DmsReplicationTaskAssessmentRun(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeReplicationTaskIndividualAssessmentsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeReplicationTaskIndividualAssessmentsMessage(obj: DmsDescribeReplicationTaskIndividualAssessmentsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_DmsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeReplicationTaskIndividualAssessmentsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeReplicationTaskIndividualAssessmentsResponse(obj: DmsDescribeReplicationTaskIndividualAssessmentsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'ReplicationTaskIndividualAssessments': obj.replicationTaskIndividualAssessments?.map(y => toJson_DmsReplicationTaskIndividualAssessment(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeReplicationTasksMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeReplicationTasksMessage(obj: DmsDescribeReplicationTasksMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_DmsFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
    'WithoutSettings': obj.withoutSettings,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeReplicationTasksResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeReplicationTasksResponse(obj: DmsDescribeReplicationTasksResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'ReplicationTasks': obj.replicationTasks?.map(y => toJson_DmsReplicationTask(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsDescribeSchemasMessage
 */
export interface DmsDescribeSchemasMessage {
  /**
   * @schema DmsDescribeSchemasMessage#EndpointArn
   */
  readonly endpointArn?: string;

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
 * Converts an object of type 'DmsDescribeSchemasMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeSchemasMessage(obj: DmsDescribeSchemasMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointArn': obj.endpointArn,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeSchemasResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeSchemasResponse(obj: DmsDescribeSchemasResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'Schemas': obj.schemas?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsDescribeTableStatisticsMessage
 */
export interface DmsDescribeTableStatisticsMessage {
  /**
   * @schema DmsDescribeTableStatisticsMessage#ReplicationTaskArn
   */
  readonly replicationTaskArn?: string;

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
 * Converts an object of type 'DmsDescribeTableStatisticsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeTableStatisticsMessage(obj: DmsDescribeTableStatisticsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationTaskArn': obj.replicationTaskArn,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
    'Filters': obj.filters?.map(y => toJson_DmsFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDescribeTableStatisticsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDescribeTableStatisticsResponse(obj: DmsDescribeTableStatisticsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationTaskArn': obj.replicationTaskArn,
    'TableStatistics': obj.tableStatistics?.map(y => toJson_DmsTableStatistics(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsImportCertificateMessage
 */
export interface DmsImportCertificateMessage {
  /**
   * @schema DmsImportCertificateMessage#CertificateIdentifier
   */
  readonly certificateIdentifier?: string;

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
 * Converts an object of type 'DmsImportCertificateMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsImportCertificateMessage(obj: DmsImportCertificateMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateIdentifier': obj.certificateIdentifier,
    'CertificatePem': obj.certificatePem,
    'CertificateWallet': obj.certificateWallet,
    'Tags': obj.tags?.map(y => toJson_DmsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsImportCertificateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsImportCertificateResponse(obj: DmsImportCertificateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Certificate': toJson_DmsCertificate(obj.certificate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsListTagsForResourceMessage
 */
export interface DmsListTagsForResourceMessage {
  /**
   * @schema DmsListTagsForResourceMessage#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'DmsListTagsForResourceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsListTagsForResourceMessage(obj: DmsListTagsForResourceMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsListTagsForResourceResponse(obj: DmsListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TagList': obj.tagList?.map(y => toJson_DmsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsModifyEndpointMessage
 */
export interface DmsModifyEndpointMessage {
  /**
   * @schema DmsModifyEndpointMessage#EndpointArn
   */
  readonly endpointArn?: string;

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

  /**
   * @schema DmsModifyEndpointMessage#ExactSettings
   */
  readonly exactSettings?: boolean;

}

/**
 * Converts an object of type 'DmsModifyEndpointMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsModifyEndpointMessage(obj: DmsModifyEndpointMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointArn': obj.endpointArn,
    'EndpointIdentifier': obj.endpointIdentifier,
    'EndpointType': obj.endpointType,
    'EngineName': obj.engineName,
    'Username': obj.username,
    'Password': obj.password,
    'ServerName': obj.serverName,
    'Port': obj.port,
    'DatabaseName': obj.databaseName,
    'ExtraConnectionAttributes': obj.extraConnectionAttributes,
    'CertificateArn': obj.certificateArn,
    'SslMode': obj.sslMode,
    'ServiceAccessRoleArn': obj.serviceAccessRoleArn,
    'ExternalTableDefinition': obj.externalTableDefinition,
    'DynamoDbSettings': toJson_DmsDynamoDbSettings(obj.dynamoDbSettings),
    'S3Settings': toJson_Dmss3Settings(obj.s3Settings),
    'DmsTransferSettings': toJson_DmsDmsTransferSettings(obj.dmsTransferSettings),
    'MongoDbSettings': toJson_DmsMongoDbSettings(obj.mongoDbSettings),
    'KinesisSettings': toJson_DmsKinesisSettings(obj.kinesisSettings),
    'KafkaSettings': toJson_DmsKafkaSettings(obj.kafkaSettings),
    'ElasticsearchSettings': toJson_DmsElasticsearchSettings(obj.elasticsearchSettings),
    'NeptuneSettings': toJson_DmsNeptuneSettings(obj.neptuneSettings),
    'RedshiftSettings': toJson_DmsRedshiftSettings(obj.redshiftSettings),
    'PostgreSQLSettings': toJson_DmsPostgreSqlSettings(obj.postgreSqlSettings),
    'MySQLSettings': toJson_DmsMySqlSettings(obj.mySqlSettings),
    'OracleSettings': toJson_DmsOracleSettings(obj.oracleSettings),
    'SybaseSettings': toJson_DmsSybaseSettings(obj.sybaseSettings),
    'MicrosoftSQLServerSettings': toJson_DmsMicrosoftSqlServerSettings(obj.microsoftSqlServerSettings),
    'IBMDb2Settings': toJson_DmsibmDb2Settings(obj.ibmDb2Settings),
    'DocDbSettings': toJson_DmsDocDbSettings(obj.docDbSettings),
    'ExactSettings': obj.exactSettings,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsModifyEndpointResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsModifyEndpointResponse(obj: DmsModifyEndpointResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Endpoint': toJson_DmsEndpoint(obj.endpoint),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsModifyEventSubscriptionMessage
 */
export interface DmsModifyEventSubscriptionMessage {
  /**
   * @schema DmsModifyEventSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName?: string;

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
 * Converts an object of type 'DmsModifyEventSubscriptionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsModifyEventSubscriptionMessage(obj: DmsModifyEventSubscriptionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubscriptionName': obj.subscriptionName,
    'SnsTopicArn': obj.snsTopicArn,
    'SourceType': obj.sourceType,
    'EventCategories': obj.eventCategories?.map(y => y),
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsModifyEventSubscriptionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsModifyEventSubscriptionResponse(obj: DmsModifyEventSubscriptionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventSubscription': toJson_DmsEventSubscription(obj.eventSubscription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsModifyReplicationInstanceMessage
 */
export interface DmsModifyReplicationInstanceMessage {
  /**
   * @schema DmsModifyReplicationInstanceMessage#ReplicationInstanceArn
   */
  readonly replicationInstanceArn?: string;

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
 * Converts an object of type 'DmsModifyReplicationInstanceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsModifyReplicationInstanceMessage(obj: DmsModifyReplicationInstanceMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationInstanceArn': obj.replicationInstanceArn,
    'AllocatedStorage': obj.allocatedStorage,
    'ApplyImmediately': obj.applyImmediately,
    'ReplicationInstanceClass': obj.replicationInstanceClass,
    'VpcSecurityGroupIds': obj.vpcSecurityGroupIds?.map(y => y),
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'MultiAZ': obj.multiAz,
    'EngineVersion': obj.engineVersion,
    'AllowMajorVersionUpgrade': obj.allowMajorVersionUpgrade,
    'AutoMinorVersionUpgrade': obj.autoMinorVersionUpgrade,
    'ReplicationInstanceIdentifier': obj.replicationInstanceIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsModifyReplicationInstanceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsModifyReplicationInstanceResponse(obj: DmsModifyReplicationInstanceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationInstance': toJson_DmsReplicationInstance(obj.replicationInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsModifyReplicationSubnetGroupMessage
 */
export interface DmsModifyReplicationSubnetGroupMessage {
  /**
   * @schema DmsModifyReplicationSubnetGroupMessage#ReplicationSubnetGroupIdentifier
   */
  readonly replicationSubnetGroupIdentifier?: string;

  /**
   * @schema DmsModifyReplicationSubnetGroupMessage#ReplicationSubnetGroupDescription
   */
  readonly replicationSubnetGroupDescription?: string;

  /**
   * @schema DmsModifyReplicationSubnetGroupMessage#SubnetIds
   */
  readonly subnetIds?: string[];

}

/**
 * Converts an object of type 'DmsModifyReplicationSubnetGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsModifyReplicationSubnetGroupMessage(obj: DmsModifyReplicationSubnetGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationSubnetGroupIdentifier': obj.replicationSubnetGroupIdentifier,
    'ReplicationSubnetGroupDescription': obj.replicationSubnetGroupDescription,
    'SubnetIds': obj.subnetIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsModifyReplicationSubnetGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsModifyReplicationSubnetGroupResponse(obj: DmsModifyReplicationSubnetGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationSubnetGroup': toJson_DmsReplicationSubnetGroup(obj.replicationSubnetGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsModifyReplicationTaskMessage
 */
export interface DmsModifyReplicationTaskMessage {
  /**
   * @schema DmsModifyReplicationTaskMessage#ReplicationTaskArn
   */
  readonly replicationTaskArn?: string;

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
 * Converts an object of type 'DmsModifyReplicationTaskMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsModifyReplicationTaskMessage(obj: DmsModifyReplicationTaskMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationTaskArn': obj.replicationTaskArn,
    'ReplicationTaskIdentifier': obj.replicationTaskIdentifier,
    'MigrationType': obj.migrationType,
    'TableMappings': obj.tableMappings,
    'ReplicationTaskSettings': obj.replicationTaskSettings,
    'CdcStartTime': obj.cdcStartTime,
    'CdcStartPosition': obj.cdcStartPosition,
    'CdcStopPosition': obj.cdcStopPosition,
    'TaskData': obj.taskData,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsModifyReplicationTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsModifyReplicationTaskResponse(obj: DmsModifyReplicationTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationTask': toJson_DmsReplicationTask(obj.replicationTask),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsMoveReplicationTaskMessage
 */
export interface DmsMoveReplicationTaskMessage {
  /**
   * @schema DmsMoveReplicationTaskMessage#ReplicationTaskArn
   */
  readonly replicationTaskArn?: string;

  /**
   * @schema DmsMoveReplicationTaskMessage#TargetReplicationInstanceArn
   */
  readonly targetReplicationInstanceArn?: string;

}

/**
 * Converts an object of type 'DmsMoveReplicationTaskMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsMoveReplicationTaskMessage(obj: DmsMoveReplicationTaskMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationTaskArn': obj.replicationTaskArn,
    'TargetReplicationInstanceArn': obj.targetReplicationInstanceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsMoveReplicationTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsMoveReplicationTaskResponse(obj: DmsMoveReplicationTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationTask': toJson_DmsReplicationTask(obj.replicationTask),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsRebootReplicationInstanceMessage
 */
export interface DmsRebootReplicationInstanceMessage {
  /**
   * @schema DmsRebootReplicationInstanceMessage#ReplicationInstanceArn
   */
  readonly replicationInstanceArn?: string;

  /**
   * @schema DmsRebootReplicationInstanceMessage#ForceFailover
   */
  readonly forceFailover?: boolean;

}

/**
 * Converts an object of type 'DmsRebootReplicationInstanceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsRebootReplicationInstanceMessage(obj: DmsRebootReplicationInstanceMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationInstanceArn': obj.replicationInstanceArn,
    'ForceFailover': obj.forceFailover,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsRebootReplicationInstanceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsRebootReplicationInstanceResponse(obj: DmsRebootReplicationInstanceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationInstance': toJson_DmsReplicationInstance(obj.replicationInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsRefreshSchemasMessage
 */
export interface DmsRefreshSchemasMessage {
  /**
   * @schema DmsRefreshSchemasMessage#EndpointArn
   */
  readonly endpointArn?: string;

  /**
   * @schema DmsRefreshSchemasMessage#ReplicationInstanceArn
   */
  readonly replicationInstanceArn?: string;

}

/**
 * Converts an object of type 'DmsRefreshSchemasMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsRefreshSchemasMessage(obj: DmsRefreshSchemasMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointArn': obj.endpointArn,
    'ReplicationInstanceArn': obj.replicationInstanceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsRefreshSchemasResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsRefreshSchemasResponse(obj: DmsRefreshSchemasResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RefreshSchemasStatus': toJson_DmsRefreshSchemasStatus(obj.refreshSchemasStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsReloadTablesMessage
 */
export interface DmsReloadTablesMessage {
  /**
   * @schema DmsReloadTablesMessage#ReplicationTaskArn
   */
  readonly replicationTaskArn?: string;

  /**
   * @schema DmsReloadTablesMessage#TablesToReload
   */
  readonly tablesToReload?: DmsTableToReload[];

  /**
   * @schema DmsReloadTablesMessage#ReloadOption
   */
  readonly reloadOption?: string;

}

/**
 * Converts an object of type 'DmsReloadTablesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsReloadTablesMessage(obj: DmsReloadTablesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationTaskArn': obj.replicationTaskArn,
    'TablesToReload': obj.tablesToReload?.map(y => toJson_DmsTableToReload(y)),
    'ReloadOption': obj.reloadOption,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsReloadTablesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsReloadTablesResponse(obj: DmsReloadTablesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationTaskArn': obj.replicationTaskArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsRemoveTagsFromResourceMessage
 */
export interface DmsRemoveTagsFromResourceMessage {
  /**
   * @schema DmsRemoveTagsFromResourceMessage#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DmsRemoveTagsFromResourceMessage#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'DmsRemoveTagsFromResourceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsRemoveTagsFromResourceMessage(obj: DmsRemoveTagsFromResourceMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsRemoveTagsFromResourceResponse
 */
export interface DmsRemoveTagsFromResourceResponse {
}

/**
 * Converts an object of type 'DmsRemoveTagsFromResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsRemoveTagsFromResourceResponse(obj: DmsRemoveTagsFromResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsStartReplicationTaskMessage
 */
export interface DmsStartReplicationTaskMessage {
  /**
   * @schema DmsStartReplicationTaskMessage#ReplicationTaskArn
   */
  readonly replicationTaskArn?: string;

  /**
   * @schema DmsStartReplicationTaskMessage#StartReplicationTaskType
   */
  readonly startReplicationTaskType?: string;

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
 * Converts an object of type 'DmsStartReplicationTaskMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsStartReplicationTaskMessage(obj: DmsStartReplicationTaskMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationTaskArn': obj.replicationTaskArn,
    'StartReplicationTaskType': obj.startReplicationTaskType,
    'CdcStartTime': obj.cdcStartTime,
    'CdcStartPosition': obj.cdcStartPosition,
    'CdcStopPosition': obj.cdcStopPosition,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsStartReplicationTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsStartReplicationTaskResponse(obj: DmsStartReplicationTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationTask': toJson_DmsReplicationTask(obj.replicationTask),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsStartReplicationTaskAssessmentMessage
 */
export interface DmsStartReplicationTaskAssessmentMessage {
  /**
   * @schema DmsStartReplicationTaskAssessmentMessage#ReplicationTaskArn
   */
  readonly replicationTaskArn?: string;

}

/**
 * Converts an object of type 'DmsStartReplicationTaskAssessmentMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsStartReplicationTaskAssessmentMessage(obj: DmsStartReplicationTaskAssessmentMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationTaskArn': obj.replicationTaskArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsStartReplicationTaskAssessmentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsStartReplicationTaskAssessmentResponse(obj: DmsStartReplicationTaskAssessmentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationTask': toJson_DmsReplicationTask(obj.replicationTask),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsStartReplicationTaskAssessmentRunMessage
 */
export interface DmsStartReplicationTaskAssessmentRunMessage {
  /**
   * @schema DmsStartReplicationTaskAssessmentRunMessage#ReplicationTaskArn
   */
  readonly replicationTaskArn?: string;

  /**
   * @schema DmsStartReplicationTaskAssessmentRunMessage#ServiceAccessRoleArn
   */
  readonly serviceAccessRoleArn?: string;

  /**
   * @schema DmsStartReplicationTaskAssessmentRunMessage#ResultLocationBucket
   */
  readonly resultLocationBucket?: string;

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
  readonly assessmentRunName?: string;

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
 * Converts an object of type 'DmsStartReplicationTaskAssessmentRunMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsStartReplicationTaskAssessmentRunMessage(obj: DmsStartReplicationTaskAssessmentRunMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationTaskArn': obj.replicationTaskArn,
    'ServiceAccessRoleArn': obj.serviceAccessRoleArn,
    'ResultLocationBucket': obj.resultLocationBucket,
    'ResultLocationFolder': obj.resultLocationFolder,
    'ResultEncryptionMode': obj.resultEncryptionMode,
    'ResultKmsKeyArn': obj.resultKmsKeyArn,
    'AssessmentRunName': obj.assessmentRunName,
    'IncludeOnly': obj.includeOnly?.map(y => y),
    'Exclude': obj.exclude?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsStartReplicationTaskAssessmentRunResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsStartReplicationTaskAssessmentRunResponse(obj: DmsStartReplicationTaskAssessmentRunResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationTaskAssessmentRun': toJson_DmsReplicationTaskAssessmentRun(obj.replicationTaskAssessmentRun),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsStopReplicationTaskMessage
 */
export interface DmsStopReplicationTaskMessage {
  /**
   * @schema DmsStopReplicationTaskMessage#ReplicationTaskArn
   */
  readonly replicationTaskArn?: string;

}

/**
 * Converts an object of type 'DmsStopReplicationTaskMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsStopReplicationTaskMessage(obj: DmsStopReplicationTaskMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationTaskArn': obj.replicationTaskArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsStopReplicationTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsStopReplicationTaskResponse(obj: DmsStopReplicationTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationTask': toJson_DmsReplicationTask(obj.replicationTask),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsTestConnectionMessage
 */
export interface DmsTestConnectionMessage {
  /**
   * @schema DmsTestConnectionMessage#ReplicationInstanceArn
   */
  readonly replicationInstanceArn?: string;

  /**
   * @schema DmsTestConnectionMessage#EndpointArn
   */
  readonly endpointArn?: string;

}

/**
 * Converts an object of type 'DmsTestConnectionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsTestConnectionMessage(obj: DmsTestConnectionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationInstanceArn': obj.replicationInstanceArn,
    'EndpointArn': obj.endpointArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsTestConnectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsTestConnectionResponse(obj: DmsTestConnectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Connection': toJson_DmsConnection(obj.connection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsTag(obj: DmsTag | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'DmsResourcePendingMaintenanceActions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsResourcePendingMaintenanceActions(obj: DmsResourcePendingMaintenanceActions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceIdentifier': obj.resourceIdentifier,
    'PendingMaintenanceActionDetails': obj.pendingMaintenanceActionDetails?.map(y => toJson_DmsPendingMaintenanceAction(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsReplicationTaskAssessmentRun' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsReplicationTaskAssessmentRun(obj: DmsReplicationTaskAssessmentRun | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationTaskAssessmentRunArn': obj.replicationTaskAssessmentRunArn,
    'ReplicationTaskArn': obj.replicationTaskArn,
    'Status': obj.status,
    'ReplicationTaskAssessmentRunCreationDate': obj.replicationTaskAssessmentRunCreationDate,
    'AssessmentProgress': toJson_DmsReplicationTaskAssessmentRunProgress(obj.assessmentProgress),
    'LastFailureMessage': obj.lastFailureMessage,
    'ServiceAccessRoleArn': obj.serviceAccessRoleArn,
    'ResultLocationBucket': obj.resultLocationBucket,
    'ResultLocationFolder': obj.resultLocationFolder,
    'ResultEncryptionMode': obj.resultEncryptionMode,
    'ResultKmsKeyArn': obj.resultKmsKeyArn,
    'AssessmentRunName': obj.assessmentRunName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsDynamoDbSettings
 */
export interface DmsDynamoDbSettings {
  /**
   * @schema DmsDynamoDbSettings#ServiceAccessRoleArn
   */
  readonly serviceAccessRoleArn?: string;

}

/**
 * Converts an object of type 'DmsDynamoDbSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDynamoDbSettings(obj: DmsDynamoDbSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceAccessRoleArn': obj.serviceAccessRoleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema Dmss3Settings#UseCsvNoSupValue
   */
  readonly useCsvNoSupValue?: boolean;

  /**
   * @schema Dmss3Settings#CsvNoSupValue
   */
  readonly csvNoSupValue?: string;

  /**
   * @schema Dmss3Settings#PreserveTransactions
   */
  readonly preserveTransactions?: boolean;

  /**
   * @schema Dmss3Settings#CdcPath
   */
  readonly cdcPath?: string;

}

/**
 * Converts an object of type 'Dmss3Settings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Dmss3Settings(obj: Dmss3Settings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceAccessRoleArn': obj.serviceAccessRoleArn,
    'ExternalTableDefinition': obj.externalTableDefinition,
    'CsvRowDelimiter': obj.csvRowDelimiter,
    'CsvDelimiter': obj.csvDelimiter,
    'BucketFolder': obj.bucketFolder,
    'BucketName': obj.bucketName,
    'CompressionType': obj.compressionType,
    'EncryptionMode': obj.encryptionMode,
    'ServerSideEncryptionKmsKeyId': obj.serverSideEncryptionKmsKeyId,
    'DataFormat': obj.dataFormat,
    'EncodingType': obj.encodingType,
    'DictPageSizeLimit': obj.dictPageSizeLimit,
    'RowGroupLength': obj.rowGroupLength,
    'DataPageSize': obj.dataPageSize,
    'ParquetVersion': obj.parquetVersion,
    'EnableStatistics': obj.enableStatistics,
    'IncludeOpForFullLoad': obj.includeOpForFullLoad,
    'CdcInsertsOnly': obj.cdcInsertsOnly,
    'TimestampColumnName': obj.timestampColumnName,
    'ParquetTimestampInMillisecond': obj.parquetTimestampInMillisecond,
    'CdcInsertsAndUpdates': obj.cdcInsertsAndUpdates,
    'DatePartitionEnabled': obj.datePartitionEnabled,
    'DatePartitionSequence': obj.datePartitionSequence,
    'DatePartitionDelimiter': obj.datePartitionDelimiter,
    'UseCsvNoSupValue': obj.useCsvNoSupValue,
    'CsvNoSupValue': obj.csvNoSupValue,
    'PreserveTransactions': obj.preserveTransactions,
    'CdcPath': obj.cdcPath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsDmsTransferSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDmsTransferSettings(obj: DmsDmsTransferSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceAccessRoleArn': obj.serviceAccessRoleArn,
    'BucketName': obj.bucketName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema DmsMongoDbSettings#SecretsManagerAccessRoleArn
   */
  readonly secretsManagerAccessRoleArn?: string;

  /**
   * @schema DmsMongoDbSettings#SecretsManagerSecretId
   */
  readonly secretsManagerSecretId?: string;

}

/**
 * Converts an object of type 'DmsMongoDbSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsMongoDbSettings(obj: DmsMongoDbSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Username': obj.username,
    'Password': obj.password,
    'ServerName': obj.serverName,
    'Port': obj.port,
    'DatabaseName': obj.databaseName,
    'AuthType': obj.authType,
    'AuthMechanism': obj.authMechanism,
    'NestingLevel': obj.nestingLevel,
    'ExtractDocId': obj.extractDocId,
    'DocsToInvestigate': obj.docsToInvestigate,
    'AuthSource': obj.authSource,
    'KmsKeyId': obj.kmsKeyId,
    'SecretsManagerAccessRoleArn': obj.secretsManagerAccessRoleArn,
    'SecretsManagerSecretId': obj.secretsManagerSecretId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema DmsKinesisSettings#NoHexPrefix
   */
  readonly noHexPrefix?: boolean;

}

/**
 * Converts an object of type 'DmsKinesisSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsKinesisSettings(obj: DmsKinesisSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamArn': obj.streamArn,
    'MessageFormat': obj.messageFormat,
    'ServiceAccessRoleArn': obj.serviceAccessRoleArn,
    'IncludeTransactionDetails': obj.includeTransactionDetails,
    'IncludePartitionValue': obj.includePartitionValue,
    'PartitionIncludeSchemaTable': obj.partitionIncludeSchemaTable,
    'IncludeTableAlterOperations': obj.includeTableAlterOperations,
    'IncludeControlDetails': obj.includeControlDetails,
    'IncludeNullAndEmpty': obj.includeNullAndEmpty,
    'NoHexPrefix': obj.noHexPrefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema DmsKafkaSettings#SecurityProtocol
   */
  readonly securityProtocol?: string;

  /**
   * @schema DmsKafkaSettings#SslClientCertificateArn
   */
  readonly sslClientCertificateArn?: string;

  /**
   * @schema DmsKafkaSettings#SslClientKeyArn
   */
  readonly sslClientKeyArn?: string;

  /**
   * @schema DmsKafkaSettings#SslClientKeyPassword
   */
  readonly sslClientKeyPassword?: string;

  /**
   * @schema DmsKafkaSettings#SslCaCertificateArn
   */
  readonly sslCaCertificateArn?: string;

  /**
   * @schema DmsKafkaSettings#SaslUsername
   */
  readonly saslUsername?: string;

  /**
   * @schema DmsKafkaSettings#SaslPassword
   */
  readonly saslPassword?: string;

  /**
   * @schema DmsKafkaSettings#NoHexPrefix
   */
  readonly noHexPrefix?: boolean;

}

/**
 * Converts an object of type 'DmsKafkaSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsKafkaSettings(obj: DmsKafkaSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Broker': obj.broker,
    'Topic': obj.topic,
    'MessageFormat': obj.messageFormat,
    'IncludeTransactionDetails': obj.includeTransactionDetails,
    'IncludePartitionValue': obj.includePartitionValue,
    'PartitionIncludeSchemaTable': obj.partitionIncludeSchemaTable,
    'IncludeTableAlterOperations': obj.includeTableAlterOperations,
    'IncludeControlDetails': obj.includeControlDetails,
    'MessageMaxBytes': obj.messageMaxBytes,
    'IncludeNullAndEmpty': obj.includeNullAndEmpty,
    'SecurityProtocol': obj.securityProtocol,
    'SslClientCertificateArn': obj.sslClientCertificateArn,
    'SslClientKeyArn': obj.sslClientKeyArn,
    'SslClientKeyPassword': obj.sslClientKeyPassword,
    'SslCaCertificateArn': obj.sslCaCertificateArn,
    'SaslUsername': obj.saslUsername,
    'SaslPassword': obj.saslPassword,
    'NoHexPrefix': obj.noHexPrefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsElasticsearchSettings
 */
export interface DmsElasticsearchSettings {
  /**
   * @schema DmsElasticsearchSettings#ServiceAccessRoleArn
   */
  readonly serviceAccessRoleArn?: string;

  /**
   * @schema DmsElasticsearchSettings#EndpointUri
   */
  readonly endpointUri?: string;

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
 * Converts an object of type 'DmsElasticsearchSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsElasticsearchSettings(obj: DmsElasticsearchSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceAccessRoleArn': obj.serviceAccessRoleArn,
    'EndpointUri': obj.endpointUri,
    'FullLoadErrorPercentage': obj.fullLoadErrorPercentage,
    'ErrorRetryDuration': obj.errorRetryDuration,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly s3BucketName?: string;

  /**
   * @schema DmsNeptuneSettings#S3BucketFolder
   */
  readonly s3BucketFolder?: string;

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
 * Converts an object of type 'DmsNeptuneSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsNeptuneSettings(obj: DmsNeptuneSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceAccessRoleArn': obj.serviceAccessRoleArn,
    'S3BucketName': obj.s3BucketName,
    'S3BucketFolder': obj.s3BucketFolder,
    'ErrorRetryDuration': obj.errorRetryDuration,
    'MaxFileSize': obj.maxFileSize,
    'MaxRetryCount': obj.maxRetryCount,
    'IamAuthEnabled': obj.iamAuthEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema DmsRedshiftSettings#SecretsManagerAccessRoleArn
   */
  readonly secretsManagerAccessRoleArn?: string;

  /**
   * @schema DmsRedshiftSettings#SecretsManagerSecretId
   */
  readonly secretsManagerSecretId?: string;

}

/**
 * Converts an object of type 'DmsRedshiftSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsRedshiftSettings(obj: DmsRedshiftSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptAnyDate': obj.acceptAnyDate,
    'AfterConnectScript': obj.afterConnectScript,
    'BucketFolder': obj.bucketFolder,
    'BucketName': obj.bucketName,
    'CaseSensitiveNames': obj.caseSensitiveNames,
    'CompUpdate': obj.compUpdate,
    'ConnectionTimeout': obj.connectionTimeout,
    'DatabaseName': obj.databaseName,
    'DateFormat': obj.dateFormat,
    'EmptyAsNull': obj.emptyAsNull,
    'EncryptionMode': obj.encryptionMode,
    'ExplicitIds': obj.explicitIds,
    'FileTransferUploadStreams': obj.fileTransferUploadStreams,
    'LoadTimeout': obj.loadTimeout,
    'MaxFileSize': obj.maxFileSize,
    'Password': obj.password,
    'Port': obj.port,
    'RemoveQuotes': obj.removeQuotes,
    'ReplaceInvalidChars': obj.replaceInvalidChars,
    'ReplaceChars': obj.replaceChars,
    'ServerName': obj.serverName,
    'ServiceAccessRoleArn': obj.serviceAccessRoleArn,
    'ServerSideEncryptionKmsKeyId': obj.serverSideEncryptionKmsKeyId,
    'TimeFormat': obj.timeFormat,
    'TrimBlanks': obj.trimBlanks,
    'TruncateColumns': obj.truncateColumns,
    'Username': obj.username,
    'WriteBufferSize': obj.writeBufferSize,
    'SecretsManagerAccessRoleArn': obj.secretsManagerAccessRoleArn,
    'SecretsManagerSecretId': obj.secretsManagerSecretId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema DmsPostgreSqlSettings#HeartbeatEnable
   */
  readonly heartbeatEnable?: boolean;

  /**
   * @schema DmsPostgreSqlSettings#HeartbeatSchema
   */
  readonly heartbeatSchema?: string;

  /**
   * @schema DmsPostgreSqlSettings#HeartbeatFrequency
   */
  readonly heartbeatFrequency?: number;

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

  /**
   * @schema DmsPostgreSqlSettings#PluginName
   */
  readonly pluginName?: string;

  /**
   * @schema DmsPostgreSqlSettings#SecretsManagerAccessRoleArn
   */
  readonly secretsManagerAccessRoleArn?: string;

  /**
   * @schema DmsPostgreSqlSettings#SecretsManagerSecretId
   */
  readonly secretsManagerSecretId?: string;

}

/**
 * Converts an object of type 'DmsPostgreSqlSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsPostgreSqlSettings(obj: DmsPostgreSqlSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AfterConnectScript': obj.afterConnectScript,
    'CaptureDdls': obj.captureDdls,
    'MaxFileSize': obj.maxFileSize,
    'DatabaseName': obj.databaseName,
    'DdlArtifactsSchema': obj.ddlArtifactsSchema,
    'ExecuteTimeout': obj.executeTimeout,
    'FailTasksOnLobTruncation': obj.failTasksOnLobTruncation,
    'HeartbeatEnable': obj.heartbeatEnable,
    'HeartbeatSchema': obj.heartbeatSchema,
    'HeartbeatFrequency': obj.heartbeatFrequency,
    'Password': obj.password,
    'Port': obj.port,
    'ServerName': obj.serverName,
    'Username': obj.username,
    'SlotName': obj.slotName,
    'PluginName': obj.pluginName,
    'SecretsManagerAccessRoleArn': obj.secretsManagerAccessRoleArn,
    'SecretsManagerSecretId': obj.secretsManagerSecretId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsMySqlSettings
 */
export interface DmsMySqlSettings {
  /**
   * @schema DmsMySqlSettings#AfterConnectScript
   */
  readonly afterConnectScript?: string;

  /**
   * @schema DmsMySqlSettings#CleanSourceMetadataOnMismatch
   */
  readonly cleanSourceMetadataOnMismatch?: boolean;

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

  /**
   * @schema DmsMySqlSettings#SecretsManagerAccessRoleArn
   */
  readonly secretsManagerAccessRoleArn?: string;

  /**
   * @schema DmsMySqlSettings#SecretsManagerSecretId
   */
  readonly secretsManagerSecretId?: string;

}

/**
 * Converts an object of type 'DmsMySqlSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsMySqlSettings(obj: DmsMySqlSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AfterConnectScript': obj.afterConnectScript,
    'CleanSourceMetadataOnMismatch': obj.cleanSourceMetadataOnMismatch,
    'DatabaseName': obj.databaseName,
    'EventsPollInterval': obj.eventsPollInterval,
    'TargetDbType': obj.targetDbType,
    'MaxFileSize': obj.maxFileSize,
    'ParallelLoadThreads': obj.parallelLoadThreads,
    'Password': obj.password,
    'Port': obj.port,
    'ServerName': obj.serverName,
    'ServerTimezone': obj.serverTimezone,
    'Username': obj.username,
    'SecretsManagerAccessRoleArn': obj.secretsManagerAccessRoleArn,
    'SecretsManagerSecretId': obj.secretsManagerSecretId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema DmsOracleSettings#SpatialDataOptionToGeoJsonFunctionName
   */
  readonly spatialDataOptionToGeoJsonFunctionName?: string;

  /**
   * @schema DmsOracleSettings#StandbyDelayTime
   */
  readonly standbyDelayTime?: number;

  /**
   * @schema DmsOracleSettings#Username
   */
  readonly username?: string;

  /**
   * @schema DmsOracleSettings#UseBFile
   */
  readonly useBFile?: boolean;

  /**
   * @schema DmsOracleSettings#UseDirectPathFullLoad
   */
  readonly useDirectPathFullLoad?: boolean;

  /**
   * @schema DmsOracleSettings#UseLogminerReader
   */
  readonly useLogminerReader?: boolean;

  /**
   * @schema DmsOracleSettings#SecretsManagerAccessRoleArn
   */
  readonly secretsManagerAccessRoleArn?: string;

  /**
   * @schema DmsOracleSettings#SecretsManagerSecretId
   */
  readonly secretsManagerSecretId?: string;

  /**
   * @schema DmsOracleSettings#SecretsManagerOracleAsmAccessRoleArn
   */
  readonly secretsManagerOracleAsmAccessRoleArn?: string;

  /**
   * @schema DmsOracleSettings#SecretsManagerOracleAsmSecretId
   */
  readonly secretsManagerOracleAsmSecretId?: string;

}

/**
 * Converts an object of type 'DmsOracleSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsOracleSettings(obj: DmsOracleSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AddSupplementalLogging': obj.addSupplementalLogging,
    'ArchivedLogDestId': obj.archivedLogDestId,
    'AdditionalArchivedLogDestId': obj.additionalArchivedLogDestId,
    'AllowSelectNestedTables': obj.allowSelectNestedTables,
    'ParallelAsmReadThreads': obj.parallelAsmReadThreads,
    'ReadAheadBlocks': obj.readAheadBlocks,
    'AccessAlternateDirectly': obj.accessAlternateDirectly,
    'UseAlternateFolderForOnline': obj.useAlternateFolderForOnline,
    'OraclePathPrefix': obj.oraclePathPrefix,
    'UsePathPrefix': obj.usePathPrefix,
    'ReplacePathPrefix': obj.replacePathPrefix,
    'EnableHomogenousTablespace': obj.enableHomogenousTablespace,
    'DirectPathNoLog': obj.directPathNoLog,
    'ArchivedLogsOnly': obj.archivedLogsOnly,
    'AsmPassword': obj.asmPassword,
    'AsmServer': obj.asmServer,
    'AsmUser': obj.asmUser,
    'CharLengthSemantics': obj.charLengthSemantics,
    'DatabaseName': obj.databaseName,
    'DirectPathParallelLoad': obj.directPathParallelLoad,
    'FailTasksOnLobTruncation': obj.failTasksOnLobTruncation,
    'NumberDatatypeScale': obj.numberDatatypeScale,
    'Password': obj.password,
    'Port': obj.port,
    'ReadTableSpaceName': obj.readTableSpaceName,
    'RetryInterval': obj.retryInterval,
    'SecurityDbEncryption': obj.securityDbEncryption,
    'SecurityDbEncryptionName': obj.securityDbEncryptionName,
    'ServerName': obj.serverName,
    'SpatialDataOptionToGeoJsonFunctionName': obj.spatialDataOptionToGeoJsonFunctionName,
    'StandbyDelayTime': obj.standbyDelayTime,
    'Username': obj.username,
    'UseBFile': obj.useBFile,
    'UseDirectPathFullLoad': obj.useDirectPathFullLoad,
    'UseLogminerReader': obj.useLogminerReader,
    'SecretsManagerAccessRoleArn': obj.secretsManagerAccessRoleArn,
    'SecretsManagerSecretId': obj.secretsManagerSecretId,
    'SecretsManagerOracleAsmAccessRoleArn': obj.secretsManagerOracleAsmAccessRoleArn,
    'SecretsManagerOracleAsmSecretId': obj.secretsManagerOracleAsmSecretId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema DmsSybaseSettings#SecretsManagerAccessRoleArn
   */
  readonly secretsManagerAccessRoleArn?: string;

  /**
   * @schema DmsSybaseSettings#SecretsManagerSecretId
   */
  readonly secretsManagerSecretId?: string;

}

/**
 * Converts an object of type 'DmsSybaseSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsSybaseSettings(obj: DmsSybaseSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatabaseName': obj.databaseName,
    'Password': obj.password,
    'Port': obj.port,
    'ServerName': obj.serverName,
    'Username': obj.username,
    'SecretsManagerAccessRoleArn': obj.secretsManagerAccessRoleArn,
    'SecretsManagerSecretId': obj.secretsManagerSecretId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema DmsMicrosoftSqlServerSettings#QuerySingleAlwaysOnNode
   */
  readonly querySingleAlwaysOnNode?: boolean;

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

  /**
   * @schema DmsMicrosoftSqlServerSettings#UseThirdPartyBackupDevice
   */
  readonly useThirdPartyBackupDevice?: boolean;

  /**
   * @schema DmsMicrosoftSqlServerSettings#SecretsManagerAccessRoleArn
   */
  readonly secretsManagerAccessRoleArn?: string;

  /**
   * @schema DmsMicrosoftSqlServerSettings#SecretsManagerSecretId
   */
  readonly secretsManagerSecretId?: string;

}

/**
 * Converts an object of type 'DmsMicrosoftSqlServerSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsMicrosoftSqlServerSettings(obj: DmsMicrosoftSqlServerSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Port': obj.port,
    'BcpPacketSize': obj.bcpPacketSize,
    'DatabaseName': obj.databaseName,
    'ControlTablesFileGroup': obj.controlTablesFileGroup,
    'Password': obj.password,
    'QuerySingleAlwaysOnNode': obj.querySingleAlwaysOnNode,
    'ReadBackupOnly': obj.readBackupOnly,
    'SafeguardPolicy': obj.safeguardPolicy,
    'ServerName': obj.serverName,
    'Username': obj.username,
    'UseBcpFullLoad': obj.useBcpFullLoad,
    'UseThirdPartyBackupDevice': obj.useThirdPartyBackupDevice,
    'SecretsManagerAccessRoleArn': obj.secretsManagerAccessRoleArn,
    'SecretsManagerSecretId': obj.secretsManagerSecretId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema DmsibmDb2Settings#SecretsManagerAccessRoleArn
   */
  readonly secretsManagerAccessRoleArn?: string;

  /**
   * @schema DmsibmDb2Settings#SecretsManagerSecretId
   */
  readonly secretsManagerSecretId?: string;

}

/**
 * Converts an object of type 'DmsibmDb2Settings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsibmDb2Settings(obj: DmsibmDb2Settings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatabaseName': obj.databaseName,
    'Password': obj.password,
    'Port': obj.port,
    'ServerName': obj.serverName,
    'SetDataCaptureChanges': obj.setDataCaptureChanges,
    'CurrentLsn': obj.currentLsn,
    'MaxKBytesPerRead': obj.maxKBytesPerRead,
    'Username': obj.username,
    'SecretsManagerAccessRoleArn': obj.secretsManagerAccessRoleArn,
    'SecretsManagerSecretId': obj.secretsManagerSecretId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema DmsDocDbSettings#SecretsManagerAccessRoleArn
   */
  readonly secretsManagerAccessRoleArn?: string;

  /**
   * @schema DmsDocDbSettings#SecretsManagerSecretId
   */
  readonly secretsManagerSecretId?: string;

}

/**
 * Converts an object of type 'DmsDocDbSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsDocDbSettings(obj: DmsDocDbSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Username': obj.username,
    'Password': obj.password,
    'ServerName': obj.serverName,
    'Port': obj.port,
    'DatabaseName': obj.databaseName,
    'NestingLevel': obj.nestingLevel,
    'ExtractDocId': obj.extractDocId,
    'DocsToInvestigate': obj.docsToInvestigate,
    'KmsKeyId': obj.kmsKeyId,
    'SecretsManagerAccessRoleArn': obj.secretsManagerAccessRoleArn,
    'SecretsManagerSecretId': obj.secretsManagerSecretId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsEndpoint(obj: DmsEndpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointIdentifier': obj.endpointIdentifier,
    'EndpointType': obj.endpointType,
    'EngineName': obj.engineName,
    'EngineDisplayName': obj.engineDisplayName,
    'Username': obj.username,
    'ServerName': obj.serverName,
    'Port': obj.port,
    'DatabaseName': obj.databaseName,
    'ExtraConnectionAttributes': obj.extraConnectionAttributes,
    'Status': obj.status,
    'KmsKeyId': obj.kmsKeyId,
    'EndpointArn': obj.endpointArn,
    'CertificateArn': obj.certificateArn,
    'SslMode': obj.sslMode,
    'ServiceAccessRoleArn': obj.serviceAccessRoleArn,
    'ExternalTableDefinition': obj.externalTableDefinition,
    'ExternalId': obj.externalId,
    'DynamoDbSettings': toJson_DmsDynamoDbSettings(obj.dynamoDbSettings),
    'S3Settings': toJson_Dmss3Settings(obj.s3Settings),
    'DmsTransferSettings': toJson_DmsDmsTransferSettings(obj.dmsTransferSettings),
    'MongoDbSettings': toJson_DmsMongoDbSettings(obj.mongoDbSettings),
    'KinesisSettings': toJson_DmsKinesisSettings(obj.kinesisSettings),
    'KafkaSettings': toJson_DmsKafkaSettings(obj.kafkaSettings),
    'ElasticsearchSettings': toJson_DmsElasticsearchSettings(obj.elasticsearchSettings),
    'NeptuneSettings': toJson_DmsNeptuneSettings(obj.neptuneSettings),
    'RedshiftSettings': toJson_DmsRedshiftSettings(obj.redshiftSettings),
    'PostgreSQLSettings': toJson_DmsPostgreSqlSettings(obj.postgreSqlSettings),
    'MySQLSettings': toJson_DmsMySqlSettings(obj.mySqlSettings),
    'OracleSettings': toJson_DmsOracleSettings(obj.oracleSettings),
    'SybaseSettings': toJson_DmsSybaseSettings(obj.sybaseSettings),
    'MicrosoftSQLServerSettings': toJson_DmsMicrosoftSqlServerSettings(obj.microsoftSqlServerSettings),
    'IBMDb2Settings': toJson_DmsibmDb2Settings(obj.ibmDb2Settings),
    'DocDbSettings': toJson_DmsDocDbSettings(obj.docDbSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsEventSubscription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsEventSubscription(obj: DmsEventSubscription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustomerAwsId': obj.customerAwsId,
    'CustSubscriptionId': obj.custSubscriptionId,
    'SnsTopicArn': obj.snsTopicArn,
    'Status': obj.status,
    'SubscriptionCreationTime': obj.subscriptionCreationTime,
    'SourceType': obj.sourceType,
    'SourceIdsList': obj.sourceIdsList?.map(y => y),
    'EventCategoriesList': obj.eventCategoriesList?.map(y => y),
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsReplicationInstance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsReplicationInstance(obj: DmsReplicationInstance | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationInstanceIdentifier': obj.replicationInstanceIdentifier,
    'ReplicationInstanceClass': obj.replicationInstanceClass,
    'ReplicationInstanceStatus': obj.replicationInstanceStatus,
    'AllocatedStorage': obj.allocatedStorage,
    'InstanceCreateTime': obj.instanceCreateTime,
    'VpcSecurityGroups': obj.vpcSecurityGroups?.map(y => toJson_DmsVpcSecurityGroupMembership(y)),
    'AvailabilityZone': obj.availabilityZone,
    'ReplicationSubnetGroup': toJson_DmsReplicationSubnetGroup(obj.replicationSubnetGroup),
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'PendingModifiedValues': toJson_DmsReplicationPendingModifiedValues(obj.pendingModifiedValues),
    'MultiAZ': obj.multiAz,
    'EngineVersion': obj.engineVersion,
    'AutoMinorVersionUpgrade': obj.autoMinorVersionUpgrade,
    'KmsKeyId': obj.kmsKeyId,
    'ReplicationInstanceArn': obj.replicationInstanceArn,
    'ReplicationInstancePublicIpAddress': obj.replicationInstancePublicIpAddress,
    'ReplicationInstancePrivateIpAddress': obj.replicationInstancePrivateIpAddress,
    'ReplicationInstancePublicIpAddresses': obj.replicationInstancePublicIpAddresses?.map(y => y),
    'ReplicationInstancePrivateIpAddresses': obj.replicationInstancePrivateIpAddresses?.map(y => y),
    'PubliclyAccessible': obj.publiclyAccessible,
    'SecondaryAvailabilityZone': obj.secondaryAvailabilityZone,
    'FreeUntil': obj.freeUntil,
    'DnsNameServers': obj.dnsNameServers,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsReplicationSubnetGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsReplicationSubnetGroup(obj: DmsReplicationSubnetGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationSubnetGroupIdentifier': obj.replicationSubnetGroupIdentifier,
    'ReplicationSubnetGroupDescription': obj.replicationSubnetGroupDescription,
    'VpcId': obj.vpcId,
    'SubnetGroupStatus': obj.subnetGroupStatus,
    'Subnets': obj.subnets?.map(y => toJson_DmsSubnet(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsReplicationTask' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsReplicationTask(obj: DmsReplicationTask | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationTaskIdentifier': obj.replicationTaskIdentifier,
    'SourceEndpointArn': obj.sourceEndpointArn,
    'TargetEndpointArn': obj.targetEndpointArn,
    'ReplicationInstanceArn': obj.replicationInstanceArn,
    'MigrationType': obj.migrationType,
    'TableMappings': obj.tableMappings,
    'ReplicationTaskSettings': obj.replicationTaskSettings,
    'Status': obj.status,
    'LastFailureMessage': obj.lastFailureMessage,
    'StopReason': obj.stopReason,
    'ReplicationTaskCreationDate': obj.replicationTaskCreationDate,
    'ReplicationTaskStartDate': obj.replicationTaskStartDate,
    'CdcStartPosition': obj.cdcStartPosition,
    'CdcStopPosition': obj.cdcStopPosition,
    'RecoveryCheckpoint': obj.recoveryCheckpoint,
    'ReplicationTaskArn': obj.replicationTaskArn,
    'ReplicationTaskStats': toJson_DmsReplicationTaskStats(obj.replicationTaskStats),
    'TaskData': obj.taskData,
    'TargetReplicationInstanceArn': obj.targetReplicationInstanceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsCertificate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsCertificate(obj: DmsCertificate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateIdentifier': obj.certificateIdentifier,
    'CertificateCreationDate': obj.certificateCreationDate,
    'CertificatePem': obj.certificatePem,
    'CertificateWallet': obj.certificateWallet,
    'CertificateArn': obj.certificateArn,
    'CertificateOwner': obj.certificateOwner,
    'ValidFromDate': obj.validFromDate,
    'ValidToDate': obj.validToDate,
    'SigningAlgorithm': obj.signingAlgorithm,
    'KeyLength': obj.keyLength,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsConnection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsConnection(obj: DmsConnection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationInstanceArn': obj.replicationInstanceArn,
    'EndpointArn': obj.endpointArn,
    'Status': obj.status,
    'LastFailureMessage': obj.lastFailureMessage,
    'EndpointIdentifier': obj.endpointIdentifier,
    'ReplicationInstanceIdentifier': obj.replicationInstanceIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsAccountQuota' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsAccountQuota(obj: DmsAccountQuota | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountQuotaName': obj.accountQuotaName,
    'Used': obj.used,
    'Max': obj.max,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsFilter
 */
export interface DmsFilter {
  /**
   * @schema DmsFilter#Name
   */
  readonly name?: string;

  /**
   * @schema DmsFilter#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'DmsFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsFilter(obj: DmsFilter | undefined): Record<string, any> | undefined {
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
 * @schema DmsEndpointSetting
 */
export interface DmsEndpointSetting {
  /**
   * @schema DmsEndpointSetting#Name
   */
  readonly name?: string;

  /**
   * @schema DmsEndpointSetting#Type
   */
  readonly type?: string;

  /**
   * @schema DmsEndpointSetting#EnumValues
   */
  readonly enumValues?: string[];

  /**
   * @schema DmsEndpointSetting#Sensitive
   */
  readonly sensitive?: boolean;

  /**
   * @schema DmsEndpointSetting#Units
   */
  readonly units?: string;

  /**
   * @schema DmsEndpointSetting#Applicability
   */
  readonly applicability?: string;

  /**
   * @schema DmsEndpointSetting#IntValueMin
   */
  readonly intValueMin?: number;

  /**
   * @schema DmsEndpointSetting#IntValueMax
   */
  readonly intValueMax?: number;

  /**
   * @schema DmsEndpointSetting#DefaultValue
   */
  readonly defaultValue?: string;

}

/**
 * Converts an object of type 'DmsEndpointSetting' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsEndpointSetting(obj: DmsEndpointSetting | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Type': obj.type,
    'EnumValues': obj.enumValues?.map(y => y),
    'Sensitive': obj.sensitive,
    'Units': obj.units,
    'Applicability': obj.applicability,
    'IntValueMin': obj.intValueMin,
    'IntValueMax': obj.intValueMax,
    'DefaultValue': obj.defaultValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsSupportedEndpointType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsSupportedEndpointType(obj: DmsSupportedEndpointType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EngineName': obj.engineName,
    'SupportsCDC': obj.supportsCdc,
    'EndpointType': obj.endpointType,
    'ReplicationInstanceEngineMinimumVersion': obj.replicationInstanceEngineMinimumVersion,
    'EngineDisplayName': obj.engineDisplayName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsEventCategoryGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsEventCategoryGroup(obj: DmsEventCategoryGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceType': obj.sourceType,
    'EventCategories': obj.eventCategories?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsEvent(obj: DmsEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceIdentifier': obj.sourceIdentifier,
    'SourceType': obj.sourceType,
    'Message': obj.message,
    'EventCategories': obj.eventCategories?.map(y => y),
    'Date': obj.date,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsOrderableReplicationInstance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsOrderableReplicationInstance(obj: DmsOrderableReplicationInstance | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EngineVersion': obj.engineVersion,
    'ReplicationInstanceClass': obj.replicationInstanceClass,
    'StorageType': obj.storageType,
    'MinAllocatedStorage': obj.minAllocatedStorage,
    'MaxAllocatedStorage': obj.maxAllocatedStorage,
    'DefaultAllocatedStorage': obj.defaultAllocatedStorage,
    'IncludedAllocatedStorage': obj.includedAllocatedStorage,
    'AvailabilityZones': obj.availabilityZones?.map(y => y),
    'ReleaseStatus': obj.releaseStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsRefreshSchemasStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsRefreshSchemasStatus(obj: DmsRefreshSchemasStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointArn': obj.endpointArn,
    'ReplicationInstanceArn': obj.replicationInstanceArn,
    'Status': obj.status,
    'LastRefreshDate': obj.lastRefreshDate,
    'LastFailureMessage': obj.lastFailureMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsReplicationInstanceTaskLog' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsReplicationInstanceTaskLog(obj: DmsReplicationInstanceTaskLog | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationTaskName': obj.replicationTaskName,
    'ReplicationTaskArn': obj.replicationTaskArn,
    'ReplicationInstanceTaskLogSize': obj.replicationInstanceTaskLogSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsReplicationTaskAssessmentResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsReplicationTaskAssessmentResult(obj: DmsReplicationTaskAssessmentResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationTaskIdentifier': obj.replicationTaskIdentifier,
    'ReplicationTaskArn': obj.replicationTaskArn,
    'ReplicationTaskLastAssessmentDate': obj.replicationTaskLastAssessmentDate,
    'AssessmentStatus': obj.assessmentStatus,
    'AssessmentResultsFile': obj.assessmentResultsFile,
    'AssessmentResults': obj.assessmentResults,
    'S3ObjectUrl': obj.s3ObjectUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsReplicationTaskIndividualAssessment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsReplicationTaskIndividualAssessment(obj: DmsReplicationTaskIndividualAssessment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationTaskIndividualAssessmentArn': obj.replicationTaskIndividualAssessmentArn,
    'ReplicationTaskAssessmentRunArn': obj.replicationTaskAssessmentRunArn,
    'IndividualAssessmentName': obj.individualAssessmentName,
    'Status': obj.status,
    'ReplicationTaskIndividualAssessmentStartDate': obj.replicationTaskIndividualAssessmentStartDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsTableStatistics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsTableStatistics(obj: DmsTableStatistics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaName': obj.schemaName,
    'TableName': obj.tableName,
    'Inserts': obj.inserts,
    'Deletes': obj.deletes,
    'Updates': obj.updates,
    'Ddls': obj.ddls,
    'FullLoadRows': obj.fullLoadRows,
    'FullLoadCondtnlChkFailedRows': obj.fullLoadCondtnlChkFailedRows,
    'FullLoadErrorRows': obj.fullLoadErrorRows,
    'FullLoadStartTime': obj.fullLoadStartTime,
    'FullLoadEndTime': obj.fullLoadEndTime,
    'FullLoadReloaded': obj.fullLoadReloaded,
    'LastUpdateTime': obj.lastUpdateTime,
    'TableState': obj.tableState,
    'ValidationPendingRecords': obj.validationPendingRecords,
    'ValidationFailedRecords': obj.validationFailedRecords,
    'ValidationSuspendedRecords': obj.validationSuspendedRecords,
    'ValidationState': obj.validationState,
    'ValidationStateDetails': obj.validationStateDetails,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsTableToReload
 */
export interface DmsTableToReload {
  /**
   * @schema DmsTableToReload#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema DmsTableToReload#TableName
   */
  readonly tableName?: string;

}

/**
 * Converts an object of type 'DmsTableToReload' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsTableToReload(obj: DmsTableToReload | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaName': obj.schemaName,
    'TableName': obj.tableName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsPendingMaintenanceAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsPendingMaintenanceAction(obj: DmsPendingMaintenanceAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': obj.action,
    'AutoAppliedAfterDate': obj.autoAppliedAfterDate,
    'ForcedApplyDate': obj.forcedApplyDate,
    'OptInStatus': obj.optInStatus,
    'CurrentApplyDate': obj.currentApplyDate,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsReplicationTaskAssessmentRunProgress' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsReplicationTaskAssessmentRunProgress(obj: DmsReplicationTaskAssessmentRunProgress | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndividualAssessmentCount': obj.individualAssessmentCount,
    'IndividualAssessmentCompletedCount': obj.individualAssessmentCompletedCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsVpcSecurityGroupMembership' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsVpcSecurityGroupMembership(obj: DmsVpcSecurityGroupMembership | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VpcSecurityGroupId': obj.vpcSecurityGroupId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsReplicationPendingModifiedValues' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsReplicationPendingModifiedValues(obj: DmsReplicationPendingModifiedValues | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationInstanceClass': obj.replicationInstanceClass,
    'AllocatedStorage': obj.allocatedStorage,
    'MultiAZ': obj.multiAz,
    'EngineVersion': obj.engineVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsSubnet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsSubnet(obj: DmsSubnet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubnetIdentifier': obj.subnetIdentifier,
    'SubnetAvailabilityZone': toJson_DmsAvailabilityZone(obj.subnetAvailabilityZone),
    'SubnetStatus': obj.subnetStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DmsReplicationTaskStats' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsReplicationTaskStats(obj: DmsReplicationTaskStats | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FullLoadProgressPercent': obj.fullLoadProgressPercent,
    'ElapsedTimeMillis': obj.elapsedTimeMillis,
    'TablesLoaded': obj.tablesLoaded,
    'TablesLoading': obj.tablesLoading,
    'TablesQueued': obj.tablesQueued,
    'TablesErrored': obj.tablesErrored,
    'FreshStartDate': obj.freshStartDate,
    'StartDate': obj.startDate,
    'StopDate': obj.stopDate,
    'FullLoadStartDate': obj.fullLoadStartDate,
    'FullLoadFinishDate': obj.fullLoadFinishDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DmsAvailabilityZone
 */
export interface DmsAvailabilityZone {
  /**
   * @schema DmsAvailabilityZone#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DmsAvailabilityZone' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DmsAvailabilityZone(obj: DmsAvailabilityZone | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
