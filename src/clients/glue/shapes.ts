/**
 * @schema GlueBatchCreatePartitionRequest
 */
export interface GlueBatchCreatePartitionRequest {
  /**
   * @schema GlueBatchCreatePartitionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueBatchCreatePartitionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueBatchCreatePartitionRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema GlueBatchCreatePartitionRequest#PartitionInputList
   */
  readonly partitionInputList: GluePartitionInput[];

}

/**
 * @schema GlueBatchCreatePartitionResponse
 */
export interface GlueBatchCreatePartitionResponse {
  /**
   * @schema GlueBatchCreatePartitionResponse#Errors
   */
  readonly errors?: GluePartitionError[];

}

/**
 * @schema GlueBatchDeleteConnectionRequest
 */
export interface GlueBatchDeleteConnectionRequest {
  /**
   * @schema GlueBatchDeleteConnectionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueBatchDeleteConnectionRequest#ConnectionNameList
   */
  readonly connectionNameList: string[];

}

/**
 * @schema GlueBatchDeleteConnectionResponse
 */
export interface GlueBatchDeleteConnectionResponse {
  /**
   * @schema GlueBatchDeleteConnectionResponse#Succeeded
   */
  readonly succeeded?: string[];

  /**
   * @schema GlueBatchDeleteConnectionResponse#Errors
   */
  readonly errors?: { [key: string]: GlueErrorDetail };

}

/**
 * @schema GlueBatchDeletePartitionRequest
 */
export interface GlueBatchDeletePartitionRequest {
  /**
   * @schema GlueBatchDeletePartitionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueBatchDeletePartitionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueBatchDeletePartitionRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema GlueBatchDeletePartitionRequest#PartitionsToDelete
   */
  readonly partitionsToDelete: GluePartitionValueList[];

}

/**
 * @schema GlueBatchDeletePartitionResponse
 */
export interface GlueBatchDeletePartitionResponse {
  /**
   * @schema GlueBatchDeletePartitionResponse#Errors
   */
  readonly errors?: GluePartitionError[];

}

/**
 * @schema GlueBatchDeleteTableRequest
 */
export interface GlueBatchDeleteTableRequest {
  /**
   * @schema GlueBatchDeleteTableRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueBatchDeleteTableRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueBatchDeleteTableRequest#TablesToDelete
   */
  readonly tablesToDelete: string[];

}

/**
 * @schema GlueBatchDeleteTableResponse
 */
export interface GlueBatchDeleteTableResponse {
  /**
   * @schema GlueBatchDeleteTableResponse#Errors
   */
  readonly errors?: GlueTableError[];

}

/**
 * @schema GlueBatchDeleteTableVersionRequest
 */
export interface GlueBatchDeleteTableVersionRequest {
  /**
   * @schema GlueBatchDeleteTableVersionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueBatchDeleteTableVersionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueBatchDeleteTableVersionRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema GlueBatchDeleteTableVersionRequest#VersionIds
   */
  readonly versionIds: string[];

}

/**
 * @schema GlueBatchDeleteTableVersionResponse
 */
export interface GlueBatchDeleteTableVersionResponse {
  /**
   * @schema GlueBatchDeleteTableVersionResponse#Errors
   */
  readonly errors?: GlueTableVersionError[];

}

/**
 * @schema GlueBatchGetCrawlersRequest
 */
export interface GlueBatchGetCrawlersRequest {
  /**
   * @schema GlueBatchGetCrawlersRequest#CrawlerNames
   */
  readonly crawlerNames: string[];

}

/**
 * @schema GlueBatchGetCrawlersResponse
 */
export interface GlueBatchGetCrawlersResponse {
  /**
   * @schema GlueBatchGetCrawlersResponse#Crawlers
   */
  readonly crawlers?: GlueCrawler[];

  /**
   * @schema GlueBatchGetCrawlersResponse#CrawlersNotFound
   */
  readonly crawlersNotFound?: string[];

}

/**
 * @schema GlueBatchGetDevEndpointsRequest
 */
export interface GlueBatchGetDevEndpointsRequest {
  /**
   * @schema GlueBatchGetDevEndpointsRequest#DevEndpointNames
   */
  readonly devEndpointNames: string[];

}

/**
 * @schema GlueBatchGetDevEndpointsResponse
 */
export interface GlueBatchGetDevEndpointsResponse {
  /**
   * @schema GlueBatchGetDevEndpointsResponse#DevEndpoints
   */
  readonly devEndpoints?: GlueDevEndpoint[];

  /**
   * @schema GlueBatchGetDevEndpointsResponse#DevEndpointsNotFound
   */
  readonly devEndpointsNotFound?: string[];

}

/**
 * @schema GlueBatchGetJobsRequest
 */
export interface GlueBatchGetJobsRequest {
  /**
   * @schema GlueBatchGetJobsRequest#JobNames
   */
  readonly jobNames: string[];

}

/**
 * @schema GlueBatchGetJobsResponse
 */
export interface GlueBatchGetJobsResponse {
  /**
   * @schema GlueBatchGetJobsResponse#Jobs
   */
  readonly jobs?: GlueJob[];

  /**
   * @schema GlueBatchGetJobsResponse#JobsNotFound
   */
  readonly jobsNotFound?: string[];

}

/**
 * @schema GlueBatchGetPartitionRequest
 */
export interface GlueBatchGetPartitionRequest {
  /**
   * @schema GlueBatchGetPartitionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueBatchGetPartitionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueBatchGetPartitionRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema GlueBatchGetPartitionRequest#PartitionsToGet
   */
  readonly partitionsToGet: GluePartitionValueList[];

}

/**
 * @schema GlueBatchGetPartitionResponse
 */
export interface GlueBatchGetPartitionResponse {
  /**
   * @schema GlueBatchGetPartitionResponse#Partitions
   */
  readonly partitions?: GluePartition[];

  /**
   * @schema GlueBatchGetPartitionResponse#UnprocessedKeys
   */
  readonly unprocessedKeys?: GluePartitionValueList[];

}

/**
 * @schema GlueBatchGetTriggersRequest
 */
export interface GlueBatchGetTriggersRequest {
  /**
   * @schema GlueBatchGetTriggersRequest#TriggerNames
   */
  readonly triggerNames: string[];

}

/**
 * @schema GlueBatchGetTriggersResponse
 */
export interface GlueBatchGetTriggersResponse {
  /**
   * @schema GlueBatchGetTriggersResponse#Triggers
   */
  readonly triggers?: GlueTrigger[];

  /**
   * @schema GlueBatchGetTriggersResponse#TriggersNotFound
   */
  readonly triggersNotFound?: string[];

}

/**
 * @schema GlueBatchGetWorkflowsRequest
 */
export interface GlueBatchGetWorkflowsRequest {
  /**
   * @schema GlueBatchGetWorkflowsRequest#Names
   */
  readonly names: string[];

  /**
   * @schema GlueBatchGetWorkflowsRequest#IncludeGraph
   */
  readonly includeGraph?: boolean;

}

/**
 * @schema GlueBatchGetWorkflowsResponse
 */
export interface GlueBatchGetWorkflowsResponse {
  /**
   * @schema GlueBatchGetWorkflowsResponse#Workflows
   */
  readonly workflows?: GlueWorkflow[];

  /**
   * @schema GlueBatchGetWorkflowsResponse#MissingWorkflows
   */
  readonly missingWorkflows?: string[];

}

/**
 * @schema GlueBatchStopJobRunRequest
 */
export interface GlueBatchStopJobRunRequest {
  /**
   * @schema GlueBatchStopJobRunRequest#JobName
   */
  readonly jobName: string;

  /**
   * @schema GlueBatchStopJobRunRequest#JobRunIds
   */
  readonly jobRunIds: string[];

}

/**
 * @schema GlueBatchStopJobRunResponse
 */
export interface GlueBatchStopJobRunResponse {
  /**
   * @schema GlueBatchStopJobRunResponse#SuccessfulSubmissions
   */
  readonly successfulSubmissions?: GlueBatchStopJobRunSuccessfulSubmission[];

  /**
   * @schema GlueBatchStopJobRunResponse#Errors
   */
  readonly errors?: GlueBatchStopJobRunError[];

}

/**
 * @schema GlueBatchUpdatePartitionRequest
 */
export interface GlueBatchUpdatePartitionRequest {
  /**
   * @schema GlueBatchUpdatePartitionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueBatchUpdatePartitionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueBatchUpdatePartitionRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema GlueBatchUpdatePartitionRequest#Entries
   */
  readonly entries: GlueBatchUpdatePartitionRequestEntry[];

}

/**
 * @schema GlueBatchUpdatePartitionResponse
 */
export interface GlueBatchUpdatePartitionResponse {
  /**
   * @schema GlueBatchUpdatePartitionResponse#Errors
   */
  readonly errors?: GlueBatchUpdatePartitionFailureEntry[];

}

/**
 * @schema GlueCancelMlTaskRunRequest
 */
export interface GlueCancelMlTaskRunRequest {
  /**
   * @schema GlueCancelMlTaskRunRequest#TransformId
   */
  readonly transformId: string;

  /**
   * @schema GlueCancelMlTaskRunRequest#TaskRunId
   */
  readonly taskRunId: string;

}

/**
 * @schema GlueCancelMlTaskRunResponse
 */
export interface GlueCancelMlTaskRunResponse {
  /**
   * @schema GlueCancelMlTaskRunResponse#TransformId
   */
  readonly transformId?: string;

  /**
   * @schema GlueCancelMlTaskRunResponse#TaskRunId
   */
  readonly taskRunId?: string;

  /**
   * @schema GlueCancelMlTaskRunResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema GlueCheckSchemaVersionValidityInput
 */
export interface GlueCheckSchemaVersionValidityInput {
  /**
   * @schema GlueCheckSchemaVersionValidityInput#DataFormat
   */
  readonly dataFormat: string;

  /**
   * @schema GlueCheckSchemaVersionValidityInput#SchemaDefinition
   */
  readonly schemaDefinition: string;

}

/**
 * @schema GlueCheckSchemaVersionValidityResponse
 */
export interface GlueCheckSchemaVersionValidityResponse {
  /**
   * @schema GlueCheckSchemaVersionValidityResponse#Valid
   */
  readonly valid?: boolean;

  /**
   * @schema GlueCheckSchemaVersionValidityResponse#Error
   */
  readonly error?: string;

}

/**
 * @schema GlueCreateClassifierRequest
 */
export interface GlueCreateClassifierRequest {
  /**
   * @schema GlueCreateClassifierRequest#GrokClassifier
   */
  readonly grokClassifier?: GlueCreateGrokClassifierRequest;

  /**
   * @schema GlueCreateClassifierRequest#XMLClassifier
   */
  readonly xmlClassifier?: GlueCreateXmlClassifierRequest;

  /**
   * @schema GlueCreateClassifierRequest#JsonClassifier
   */
  readonly jsonClassifier?: GlueCreateJsonClassifierRequest;

  /**
   * @schema GlueCreateClassifierRequest#CsvClassifier
   */
  readonly csvClassifier?: GlueCreateCsvClassifierRequest;

}

/**
 * @schema GlueCreateClassifierResponse
 */
export interface GlueCreateClassifierResponse {
}

/**
 * @schema GlueCreateConnectionRequest
 */
export interface GlueCreateConnectionRequest {
  /**
   * @schema GlueCreateConnectionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueCreateConnectionRequest#ConnectionInput
   */
  readonly connectionInput: GlueConnectionInput;

}

/**
 * @schema GlueCreateConnectionResponse
 */
export interface GlueCreateConnectionResponse {
}

/**
 * @schema GlueCreateCrawlerRequest
 */
export interface GlueCreateCrawlerRequest {
  /**
   * @schema GlueCreateCrawlerRequest#Name
   */
  readonly name: string;

  /**
   * @schema GlueCreateCrawlerRequest#Role
   */
  readonly role: string;

  /**
   * @schema GlueCreateCrawlerRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueCreateCrawlerRequest#Description
   */
  readonly description?: string;

  /**
   * @schema GlueCreateCrawlerRequest#Targets
   */
  readonly targets: GlueCrawlerTargets;

  /**
   * @schema GlueCreateCrawlerRequest#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema GlueCreateCrawlerRequest#Classifiers
   */
  readonly classifiers?: string[];

  /**
   * @schema GlueCreateCrawlerRequest#TablePrefix
   */
  readonly tablePrefix?: string;

  /**
   * @schema GlueCreateCrawlerRequest#SchemaChangePolicy
   */
  readonly schemaChangePolicy?: GlueSchemaChangePolicy;

  /**
   * @schema GlueCreateCrawlerRequest#RecrawlPolicy
   */
  readonly recrawlPolicy?: GlueRecrawlPolicy;

  /**
   * @schema GlueCreateCrawlerRequest#LineageConfiguration
   */
  readonly lineageConfiguration?: GlueLineageConfiguration;

  /**
   * @schema GlueCreateCrawlerRequest#Configuration
   */
  readonly configuration?: string;

  /**
   * @schema GlueCreateCrawlerRequest#CrawlerSecurityConfiguration
   */
  readonly crawlerSecurityConfiguration?: string;

  /**
   * @schema GlueCreateCrawlerRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GlueCreateCrawlerResponse
 */
export interface GlueCreateCrawlerResponse {
}

/**
 * @schema GlueCreateDatabaseRequest
 */
export interface GlueCreateDatabaseRequest {
  /**
   * @schema GlueCreateDatabaseRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueCreateDatabaseRequest#DatabaseInput
   */
  readonly databaseInput: GlueDatabaseInput;

}

/**
 * @schema GlueCreateDatabaseResponse
 */
export interface GlueCreateDatabaseResponse {
}

/**
 * @schema GlueCreateDevEndpointRequest
 */
export interface GlueCreateDevEndpointRequest {
  /**
   * @schema GlueCreateDevEndpointRequest#EndpointName
   */
  readonly endpointName: string;

  /**
   * @schema GlueCreateDevEndpointRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema GlueCreateDevEndpointRequest#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema GlueCreateDevEndpointRequest#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema GlueCreateDevEndpointRequest#PublicKey
   */
  readonly publicKey?: string;

  /**
   * @schema GlueCreateDevEndpointRequest#PublicKeys
   */
  readonly publicKeys?: string[];

  /**
   * @schema GlueCreateDevEndpointRequest#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema GlueCreateDevEndpointRequest#WorkerType
   */
  readonly workerType?: string;

  /**
   * @schema GlueCreateDevEndpointRequest#GlueVersion
   */
  readonly glueVersion?: string;

  /**
   * @schema GlueCreateDevEndpointRequest#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

  /**
   * @schema GlueCreateDevEndpointRequest#ExtraPythonLibsS3Path
   */
  readonly extraPythonLibsS3Path?: string;

  /**
   * @schema GlueCreateDevEndpointRequest#ExtraJarsS3Path
   */
  readonly extraJarsS3Path?: string;

  /**
   * @schema GlueCreateDevEndpointRequest#SecurityConfiguration
   */
  readonly securityConfiguration?: string;

  /**
   * @schema GlueCreateDevEndpointRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema GlueCreateDevEndpointRequest#Arguments
   */
  readonly arguments?: { [key: string]: string };

}

/**
 * @schema GlueCreateDevEndpointResponse
 */
export interface GlueCreateDevEndpointResponse {
  /**
   * @schema GlueCreateDevEndpointResponse#EndpointName
   */
  readonly endpointName?: string;

  /**
   * @schema GlueCreateDevEndpointResponse#Status
   */
  readonly status?: string;

  /**
   * @schema GlueCreateDevEndpointResponse#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema GlueCreateDevEndpointResponse#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema GlueCreateDevEndpointResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema GlueCreateDevEndpointResponse#YarnEndpointAddress
   */
  readonly yarnEndpointAddress?: string;

  /**
   * @schema GlueCreateDevEndpointResponse#ZeppelinRemoteSparkInterpreterPort
   */
  readonly zeppelinRemoteSparkInterpreterPort?: number;

  /**
   * @schema GlueCreateDevEndpointResponse#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema GlueCreateDevEndpointResponse#WorkerType
   */
  readonly workerType?: string;

  /**
   * @schema GlueCreateDevEndpointResponse#GlueVersion
   */
  readonly glueVersion?: string;

  /**
   * @schema GlueCreateDevEndpointResponse#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

  /**
   * @schema GlueCreateDevEndpointResponse#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema GlueCreateDevEndpointResponse#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema GlueCreateDevEndpointResponse#ExtraPythonLibsS3Path
   */
  readonly extraPythonLibsS3Path?: string;

  /**
   * @schema GlueCreateDevEndpointResponse#ExtraJarsS3Path
   */
  readonly extraJarsS3Path?: string;

  /**
   * @schema GlueCreateDevEndpointResponse#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema GlueCreateDevEndpointResponse#SecurityConfiguration
   */
  readonly securityConfiguration?: string;

  /**
   * @schema GlueCreateDevEndpointResponse#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema GlueCreateDevEndpointResponse#Arguments
   */
  readonly arguments?: { [key: string]: string };

}

/**
 * @schema GlueCreateJobRequest
 */
export interface GlueCreateJobRequest {
  /**
   * @schema GlueCreateJobRequest#Name
   */
  readonly name: string;

  /**
   * @schema GlueCreateJobRequest#Description
   */
  readonly description?: string;

  /**
   * @schema GlueCreateJobRequest#LogUri
   */
  readonly logUri?: string;

  /**
   * @schema GlueCreateJobRequest#Role
   */
  readonly role: string;

  /**
   * @schema GlueCreateJobRequest#ExecutionProperty
   */
  readonly executionProperty?: GlueExecutionProperty;

  /**
   * @schema GlueCreateJobRequest#Command
   */
  readonly command: GlueJobCommand;

  /**
   * @schema GlueCreateJobRequest#DefaultArguments
   */
  readonly defaultArguments?: { [key: string]: string };

  /**
   * @schema GlueCreateJobRequest#NonOverridableArguments
   */
  readonly nonOverridableArguments?: { [key: string]: string };

  /**
   * @schema GlueCreateJobRequest#Connections
   */
  readonly connections?: GlueConnectionsList;

  /**
   * @schema GlueCreateJobRequest#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema GlueCreateJobRequest#AllocatedCapacity
   */
  readonly allocatedCapacity?: number;

  /**
   * @schema GlueCreateJobRequest#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema GlueCreateJobRequest#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema GlueCreateJobRequest#SecurityConfiguration
   */
  readonly securityConfiguration?: string;

  /**
   * @schema GlueCreateJobRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema GlueCreateJobRequest#NotificationProperty
   */
  readonly notificationProperty?: GlueNotificationProperty;

  /**
   * @schema GlueCreateJobRequest#GlueVersion
   */
  readonly glueVersion?: string;

  /**
   * @schema GlueCreateJobRequest#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

  /**
   * @schema GlueCreateJobRequest#WorkerType
   */
  readonly workerType?: string;

}

/**
 * @schema GlueCreateJobResponse
 */
export interface GlueCreateJobResponse {
  /**
   * @schema GlueCreateJobResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema GlueCreateMlTransformRequest
 */
export interface GlueCreateMlTransformRequest {
  /**
   * @schema GlueCreateMlTransformRequest#Name
   */
  readonly name: string;

  /**
   * @schema GlueCreateMlTransformRequest#Description
   */
  readonly description?: string;

  /**
   * @schema GlueCreateMlTransformRequest#InputRecordTables
   */
  readonly inputRecordTables: GlueGlueTable[];

  /**
   * @schema GlueCreateMlTransformRequest#Parameters
   */
  readonly parameters: GlueTransformParameters;

  /**
   * @schema GlueCreateMlTransformRequest#Role
   */
  readonly role: string;

  /**
   * @schema GlueCreateMlTransformRequest#GlueVersion
   */
  readonly glueVersion?: string;

  /**
   * @schema GlueCreateMlTransformRequest#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema GlueCreateMlTransformRequest#WorkerType
   */
  readonly workerType?: string;

  /**
   * @schema GlueCreateMlTransformRequest#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

  /**
   * @schema GlueCreateMlTransformRequest#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema GlueCreateMlTransformRequest#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema GlueCreateMlTransformRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema GlueCreateMlTransformRequest#TransformEncryption
   */
  readonly transformEncryption?: GlueTransformEncryption;

}

/**
 * @schema GlueCreateMlTransformResponse
 */
export interface GlueCreateMlTransformResponse {
  /**
   * @schema GlueCreateMlTransformResponse#TransformId
   */
  readonly transformId?: string;

}

/**
 * @schema GlueCreatePartitionRequest
 */
export interface GlueCreatePartitionRequest {
  /**
   * @schema GlueCreatePartitionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueCreatePartitionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueCreatePartitionRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema GlueCreatePartitionRequest#PartitionInput
   */
  readonly partitionInput: GluePartitionInput;

}

/**
 * @schema GlueCreatePartitionResponse
 */
export interface GlueCreatePartitionResponse {
}

/**
 * @schema GlueCreatePartitionIndexRequest
 */
export interface GlueCreatePartitionIndexRequest {
  /**
   * @schema GlueCreatePartitionIndexRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueCreatePartitionIndexRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueCreatePartitionIndexRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema GlueCreatePartitionIndexRequest#PartitionIndex
   */
  readonly partitionIndex: GluePartitionIndex;

}

/**
 * @schema GlueCreatePartitionIndexResponse
 */
export interface GlueCreatePartitionIndexResponse {
}

/**
 * @schema GlueCreateRegistryInput
 */
export interface GlueCreateRegistryInput {
  /**
   * @schema GlueCreateRegistryInput#RegistryName
   */
  readonly registryName: string;

  /**
   * @schema GlueCreateRegistryInput#Description
   */
  readonly description?: string;

  /**
   * @schema GlueCreateRegistryInput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GlueCreateRegistryResponse
 */
export interface GlueCreateRegistryResponse {
  /**
   * @schema GlueCreateRegistryResponse#RegistryArn
   */
  readonly registryArn?: string;

  /**
   * @schema GlueCreateRegistryResponse#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema GlueCreateRegistryResponse#Description
   */
  readonly description?: string;

  /**
   * @schema GlueCreateRegistryResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GlueCreateSchemaInput
 */
export interface GlueCreateSchemaInput {
  /**
   * @schema GlueCreateSchemaInput#RegistryId
   */
  readonly registryId?: GlueRegistryId;

  /**
   * @schema GlueCreateSchemaInput#SchemaName
   */
  readonly schemaName: string;

  /**
   * @schema GlueCreateSchemaInput#DataFormat
   */
  readonly dataFormat: string;

  /**
   * @schema GlueCreateSchemaInput#Compatibility
   */
  readonly compatibility?: string;

  /**
   * @schema GlueCreateSchemaInput#Description
   */
  readonly description?: string;

  /**
   * @schema GlueCreateSchemaInput#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema GlueCreateSchemaInput#SchemaDefinition
   */
  readonly schemaDefinition?: string;

}

/**
 * @schema GlueCreateSchemaResponse
 */
export interface GlueCreateSchemaResponse {
  /**
   * @schema GlueCreateSchemaResponse#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema GlueCreateSchemaResponse#RegistryArn
   */
  readonly registryArn?: string;

  /**
   * @schema GlueCreateSchemaResponse#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema GlueCreateSchemaResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema GlueCreateSchemaResponse#Description
   */
  readonly description?: string;

  /**
   * @schema GlueCreateSchemaResponse#DataFormat
   */
  readonly dataFormat?: string;

  /**
   * @schema GlueCreateSchemaResponse#Compatibility
   */
  readonly compatibility?: string;

  /**
   * @schema GlueCreateSchemaResponse#SchemaCheckpoint
   */
  readonly schemaCheckpoint?: number;

  /**
   * @schema GlueCreateSchemaResponse#LatestSchemaVersion
   */
  readonly latestSchemaVersion?: number;

  /**
   * @schema GlueCreateSchemaResponse#NextSchemaVersion
   */
  readonly nextSchemaVersion?: number;

  /**
   * @schema GlueCreateSchemaResponse#SchemaStatus
   */
  readonly schemaStatus?: string;

  /**
   * @schema GlueCreateSchemaResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema GlueCreateSchemaResponse#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema GlueCreateSchemaResponse#SchemaVersionStatus
   */
  readonly schemaVersionStatus?: string;

}

/**
 * @schema GlueCreateScriptRequest
 */
export interface GlueCreateScriptRequest {
  /**
   * @schema GlueCreateScriptRequest#DagNodes
   */
  readonly dagNodes?: GlueCodeGenNode[];

  /**
   * @schema GlueCreateScriptRequest#DagEdges
   */
  readonly dagEdges?: GlueCodeGenEdge[];

  /**
   * @schema GlueCreateScriptRequest#Language
   */
  readonly language?: string;

}

/**
 * @schema GlueCreateScriptResponse
 */
export interface GlueCreateScriptResponse {
  /**
   * @schema GlueCreateScriptResponse#PythonScript
   */
  readonly pythonScript?: string;

  /**
   * @schema GlueCreateScriptResponse#ScalaCode
   */
  readonly scalaCode?: string;

}

/**
 * @schema GlueCreateSecurityConfigurationRequest
 */
export interface GlueCreateSecurityConfigurationRequest {
  /**
   * @schema GlueCreateSecurityConfigurationRequest#Name
   */
  readonly name: string;

  /**
   * @schema GlueCreateSecurityConfigurationRequest#EncryptionConfiguration
   */
  readonly encryptionConfiguration: GlueEncryptionConfiguration;

}

/**
 * @schema GlueCreateSecurityConfigurationResponse
 */
export interface GlueCreateSecurityConfigurationResponse {
  /**
   * @schema GlueCreateSecurityConfigurationResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GlueCreateSecurityConfigurationResponse#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

}

/**
 * @schema GlueCreateTableRequest
 */
export interface GlueCreateTableRequest {
  /**
   * @schema GlueCreateTableRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueCreateTableRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueCreateTableRequest#TableInput
   */
  readonly tableInput: GlueTableInput;

  /**
   * @schema GlueCreateTableRequest#PartitionIndexes
   */
  readonly partitionIndexes?: GluePartitionIndex[];

}

/**
 * @schema GlueCreateTableResponse
 */
export interface GlueCreateTableResponse {
}

/**
 * @schema GlueCreateTriggerRequest
 */
export interface GlueCreateTriggerRequest {
  /**
   * @schema GlueCreateTriggerRequest#Name
   */
  readonly name: string;

  /**
   * @schema GlueCreateTriggerRequest#WorkflowName
   */
  readonly workflowName?: string;

  /**
   * @schema GlueCreateTriggerRequest#Type
   */
  readonly type: string;

  /**
   * @schema GlueCreateTriggerRequest#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema GlueCreateTriggerRequest#Predicate
   */
  readonly predicate?: GluePredicate;

  /**
   * @schema GlueCreateTriggerRequest#Actions
   */
  readonly actions: GlueAction[];

  /**
   * @schema GlueCreateTriggerRequest#Description
   */
  readonly description?: string;

  /**
   * @schema GlueCreateTriggerRequest#StartOnCreation
   */
  readonly startOnCreation?: boolean;

  /**
   * @schema GlueCreateTriggerRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GlueCreateTriggerResponse
 */
export interface GlueCreateTriggerResponse {
  /**
   * @schema GlueCreateTriggerResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema GlueCreateUserDefinedFunctionRequest
 */
export interface GlueCreateUserDefinedFunctionRequest {
  /**
   * @schema GlueCreateUserDefinedFunctionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueCreateUserDefinedFunctionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueCreateUserDefinedFunctionRequest#FunctionInput
   */
  readonly functionInput: GlueUserDefinedFunctionInput;

}

/**
 * @schema GlueCreateUserDefinedFunctionResponse
 */
export interface GlueCreateUserDefinedFunctionResponse {
}

/**
 * @schema GlueCreateWorkflowRequest
 */
export interface GlueCreateWorkflowRequest {
  /**
   * @schema GlueCreateWorkflowRequest#Name
   */
  readonly name: string;

  /**
   * @schema GlueCreateWorkflowRequest#Description
   */
  readonly description?: string;

  /**
   * @schema GlueCreateWorkflowRequest#DefaultRunProperties
   */
  readonly defaultRunProperties?: { [key: string]: string };

  /**
   * @schema GlueCreateWorkflowRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema GlueCreateWorkflowRequest#MaxConcurrentRuns
   */
  readonly maxConcurrentRuns?: number;

}

/**
 * @schema GlueCreateWorkflowResponse
 */
export interface GlueCreateWorkflowResponse {
  /**
   * @schema GlueCreateWorkflowResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema GlueDeleteClassifierRequest
 */
export interface GlueDeleteClassifierRequest {
  /**
   * @schema GlueDeleteClassifierRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GlueDeleteClassifierResponse
 */
export interface GlueDeleteClassifierResponse {
}

/**
 * @schema GlueDeleteColumnStatisticsForPartitionRequest
 */
export interface GlueDeleteColumnStatisticsForPartitionRequest {
  /**
   * @schema GlueDeleteColumnStatisticsForPartitionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueDeleteColumnStatisticsForPartitionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueDeleteColumnStatisticsForPartitionRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema GlueDeleteColumnStatisticsForPartitionRequest#PartitionValues
   */
  readonly partitionValues: string[];

  /**
   * @schema GlueDeleteColumnStatisticsForPartitionRequest#ColumnName
   */
  readonly columnName: string;

}

/**
 * @schema GlueDeleteColumnStatisticsForPartitionResponse
 */
export interface GlueDeleteColumnStatisticsForPartitionResponse {
}

/**
 * @schema GlueDeleteColumnStatisticsForTableRequest
 */
export interface GlueDeleteColumnStatisticsForTableRequest {
  /**
   * @schema GlueDeleteColumnStatisticsForTableRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueDeleteColumnStatisticsForTableRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueDeleteColumnStatisticsForTableRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema GlueDeleteColumnStatisticsForTableRequest#ColumnName
   */
  readonly columnName: string;

}

/**
 * @schema GlueDeleteColumnStatisticsForTableResponse
 */
export interface GlueDeleteColumnStatisticsForTableResponse {
}

/**
 * @schema GlueDeleteConnectionRequest
 */
export interface GlueDeleteConnectionRequest {
  /**
   * @schema GlueDeleteConnectionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueDeleteConnectionRequest#ConnectionName
   */
  readonly connectionName: string;

}

/**
 * @schema GlueDeleteConnectionResponse
 */
export interface GlueDeleteConnectionResponse {
}

/**
 * @schema GlueDeleteCrawlerRequest
 */
export interface GlueDeleteCrawlerRequest {
  /**
   * @schema GlueDeleteCrawlerRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GlueDeleteCrawlerResponse
 */
export interface GlueDeleteCrawlerResponse {
}

/**
 * @schema GlueDeleteDatabaseRequest
 */
export interface GlueDeleteDatabaseRequest {
  /**
   * @schema GlueDeleteDatabaseRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueDeleteDatabaseRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GlueDeleteDatabaseResponse
 */
export interface GlueDeleteDatabaseResponse {
}

/**
 * @schema GlueDeleteDevEndpointRequest
 */
export interface GlueDeleteDevEndpointRequest {
  /**
   * @schema GlueDeleteDevEndpointRequest#EndpointName
   */
  readonly endpointName: string;

}

/**
 * @schema GlueDeleteDevEndpointResponse
 */
export interface GlueDeleteDevEndpointResponse {
}

/**
 * @schema GlueDeleteJobRequest
 */
export interface GlueDeleteJobRequest {
  /**
   * @schema GlueDeleteJobRequest#JobName
   */
  readonly jobName: string;

}

/**
 * @schema GlueDeleteJobResponse
 */
export interface GlueDeleteJobResponse {
  /**
   * @schema GlueDeleteJobResponse#JobName
   */
  readonly jobName?: string;

}

/**
 * @schema GlueDeleteMlTransformRequest
 */
export interface GlueDeleteMlTransformRequest {
  /**
   * @schema GlueDeleteMlTransformRequest#TransformId
   */
  readonly transformId: string;

}

/**
 * @schema GlueDeleteMlTransformResponse
 */
export interface GlueDeleteMlTransformResponse {
  /**
   * @schema GlueDeleteMlTransformResponse#TransformId
   */
  readonly transformId?: string;

}

/**
 * @schema GlueDeletePartitionRequest
 */
export interface GlueDeletePartitionRequest {
  /**
   * @schema GlueDeletePartitionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueDeletePartitionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueDeletePartitionRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema GlueDeletePartitionRequest#PartitionValues
   */
  readonly partitionValues: string[];

}

/**
 * @schema GlueDeletePartitionResponse
 */
export interface GlueDeletePartitionResponse {
}

/**
 * @schema GlueDeletePartitionIndexRequest
 */
export interface GlueDeletePartitionIndexRequest {
  /**
   * @schema GlueDeletePartitionIndexRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueDeletePartitionIndexRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueDeletePartitionIndexRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema GlueDeletePartitionIndexRequest#IndexName
   */
  readonly indexName: string;

}

/**
 * @schema GlueDeletePartitionIndexResponse
 */
export interface GlueDeletePartitionIndexResponse {
}

/**
 * @schema GlueDeleteRegistryInput
 */
export interface GlueDeleteRegistryInput {
  /**
   * @schema GlueDeleteRegistryInput#RegistryId
   */
  readonly registryId: GlueRegistryId;

}

/**
 * @schema GlueDeleteRegistryResponse
 */
export interface GlueDeleteRegistryResponse {
  /**
   * @schema GlueDeleteRegistryResponse#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema GlueDeleteRegistryResponse#RegistryArn
   */
  readonly registryArn?: string;

  /**
   * @schema GlueDeleteRegistryResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema GlueDeleteResourcePolicyRequest
 */
export interface GlueDeleteResourcePolicyRequest {
  /**
   * @schema GlueDeleteResourcePolicyRequest#PolicyHashCondition
   */
  readonly policyHashCondition?: string;

  /**
   * @schema GlueDeleteResourcePolicyRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * @schema GlueDeleteResourcePolicyResponse
 */
export interface GlueDeleteResourcePolicyResponse {
}

/**
 * @schema GlueDeleteSchemaInput
 */
export interface GlueDeleteSchemaInput {
  /**
   * @schema GlueDeleteSchemaInput#SchemaId
   */
  readonly schemaId: GlueSchemaId;

}

/**
 * @schema GlueDeleteSchemaResponse
 */
export interface GlueDeleteSchemaResponse {
  /**
   * @schema GlueDeleteSchemaResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema GlueDeleteSchemaResponse#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema GlueDeleteSchemaResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema GlueDeleteSchemaVersionsInput
 */
export interface GlueDeleteSchemaVersionsInput {
  /**
   * @schema GlueDeleteSchemaVersionsInput#SchemaId
   */
  readonly schemaId: GlueSchemaId;

  /**
   * @schema GlueDeleteSchemaVersionsInput#Versions
   */
  readonly versions: string;

}

/**
 * @schema GlueDeleteSchemaVersionsResponse
 */
export interface GlueDeleteSchemaVersionsResponse {
  /**
   * @schema GlueDeleteSchemaVersionsResponse#SchemaVersionErrors
   */
  readonly schemaVersionErrors?: GlueSchemaVersionErrorItem[];

}

/**
 * @schema GlueDeleteSecurityConfigurationRequest
 */
export interface GlueDeleteSecurityConfigurationRequest {
  /**
   * @schema GlueDeleteSecurityConfigurationRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GlueDeleteSecurityConfigurationResponse
 */
export interface GlueDeleteSecurityConfigurationResponse {
}

/**
 * @schema GlueDeleteTableRequest
 */
export interface GlueDeleteTableRequest {
  /**
   * @schema GlueDeleteTableRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueDeleteTableRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueDeleteTableRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GlueDeleteTableResponse
 */
export interface GlueDeleteTableResponse {
}

/**
 * @schema GlueDeleteTableVersionRequest
 */
export interface GlueDeleteTableVersionRequest {
  /**
   * @schema GlueDeleteTableVersionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueDeleteTableVersionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueDeleteTableVersionRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema GlueDeleteTableVersionRequest#VersionId
   */
  readonly versionId: string;

}

/**
 * @schema GlueDeleteTableVersionResponse
 */
export interface GlueDeleteTableVersionResponse {
}

/**
 * @schema GlueDeleteTriggerRequest
 */
export interface GlueDeleteTriggerRequest {
  /**
   * @schema GlueDeleteTriggerRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GlueDeleteTriggerResponse
 */
export interface GlueDeleteTriggerResponse {
  /**
   * @schema GlueDeleteTriggerResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema GlueDeleteUserDefinedFunctionRequest
 */
export interface GlueDeleteUserDefinedFunctionRequest {
  /**
   * @schema GlueDeleteUserDefinedFunctionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueDeleteUserDefinedFunctionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueDeleteUserDefinedFunctionRequest#FunctionName
   */
  readonly functionName: string;

}

/**
 * @schema GlueDeleteUserDefinedFunctionResponse
 */
export interface GlueDeleteUserDefinedFunctionResponse {
}

/**
 * @schema GlueDeleteWorkflowRequest
 */
export interface GlueDeleteWorkflowRequest {
  /**
   * @schema GlueDeleteWorkflowRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GlueDeleteWorkflowResponse
 */
export interface GlueDeleteWorkflowResponse {
  /**
   * @schema GlueDeleteWorkflowResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema GlueGetCatalogImportStatusRequest
 */
export interface GlueGetCatalogImportStatusRequest {
  /**
   * @schema GlueGetCatalogImportStatusRequest#CatalogId
   */
  readonly catalogId?: string;

}

/**
 * @schema GlueGetCatalogImportStatusResponse
 */
export interface GlueGetCatalogImportStatusResponse {
  /**
   * @schema GlueGetCatalogImportStatusResponse#ImportStatus
   */
  readonly importStatus?: GlueCatalogImportStatus;

}

/**
 * @schema GlueGetClassifierRequest
 */
export interface GlueGetClassifierRequest {
  /**
   * @schema GlueGetClassifierRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GlueGetClassifierResponse
 */
export interface GlueGetClassifierResponse {
  /**
   * @schema GlueGetClassifierResponse#Classifier
   */
  readonly classifier?: GlueClassifier;

}

/**
 * @schema GlueGetClassifiersRequest
 */
export interface GlueGetClassifiersRequest {
  /**
   * @schema GlueGetClassifiersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueGetClassifiersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueGetClassifiersResponse
 */
export interface GlueGetClassifiersResponse {
  /**
   * @schema GlueGetClassifiersResponse#Classifiers
   */
  readonly classifiers?: GlueClassifier[];

  /**
   * @schema GlueGetClassifiersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueGetColumnStatisticsForPartitionRequest
 */
export interface GlueGetColumnStatisticsForPartitionRequest {
  /**
   * @schema GlueGetColumnStatisticsForPartitionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueGetColumnStatisticsForPartitionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueGetColumnStatisticsForPartitionRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema GlueGetColumnStatisticsForPartitionRequest#PartitionValues
   */
  readonly partitionValues: string[];

  /**
   * @schema GlueGetColumnStatisticsForPartitionRequest#ColumnNames
   */
  readonly columnNames: string[];

}

/**
 * @schema GlueGetColumnStatisticsForPartitionResponse
 */
export interface GlueGetColumnStatisticsForPartitionResponse {
  /**
   * @schema GlueGetColumnStatisticsForPartitionResponse#ColumnStatisticsList
   */
  readonly columnStatisticsList?: GlueColumnStatistics[];

  /**
   * @schema GlueGetColumnStatisticsForPartitionResponse#Errors
   */
  readonly errors?: GlueColumnError[];

}

/**
 * @schema GlueGetColumnStatisticsForTableRequest
 */
export interface GlueGetColumnStatisticsForTableRequest {
  /**
   * @schema GlueGetColumnStatisticsForTableRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueGetColumnStatisticsForTableRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueGetColumnStatisticsForTableRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema GlueGetColumnStatisticsForTableRequest#ColumnNames
   */
  readonly columnNames: string[];

}

/**
 * @schema GlueGetColumnStatisticsForTableResponse
 */
export interface GlueGetColumnStatisticsForTableResponse {
  /**
   * @schema GlueGetColumnStatisticsForTableResponse#ColumnStatisticsList
   */
  readonly columnStatisticsList?: GlueColumnStatistics[];

  /**
   * @schema GlueGetColumnStatisticsForTableResponse#Errors
   */
  readonly errors?: GlueColumnError[];

}

/**
 * @schema GlueGetConnectionRequest
 */
export interface GlueGetConnectionRequest {
  /**
   * @schema GlueGetConnectionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueGetConnectionRequest#Name
   */
  readonly name: string;

  /**
   * @schema GlueGetConnectionRequest#HidePassword
   */
  readonly hidePassword?: boolean;

}

/**
 * @schema GlueGetConnectionResponse
 */
export interface GlueGetConnectionResponse {
  /**
   * @schema GlueGetConnectionResponse#Connection
   */
  readonly connection?: GlueConnection;

}

/**
 * @schema GlueGetConnectionsRequest
 */
export interface GlueGetConnectionsRequest {
  /**
   * @schema GlueGetConnectionsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueGetConnectionsRequest#Filter
   */
  readonly filter?: GlueGetConnectionsFilter;

  /**
   * @schema GlueGetConnectionsRequest#HidePassword
   */
  readonly hidePassword?: boolean;

  /**
   * @schema GlueGetConnectionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueGetConnectionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GlueGetConnectionsResponse
 */
export interface GlueGetConnectionsResponse {
  /**
   * @schema GlueGetConnectionsResponse#ConnectionList
   */
  readonly connectionList?: GlueConnection[];

  /**
   * @schema GlueGetConnectionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueGetCrawlerRequest
 */
export interface GlueGetCrawlerRequest {
  /**
   * @schema GlueGetCrawlerRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GlueGetCrawlerResponse
 */
export interface GlueGetCrawlerResponse {
  /**
   * @schema GlueGetCrawlerResponse#Crawler
   */
  readonly crawler?: GlueCrawler;

}

/**
 * @schema GlueGetCrawlerMetricsRequest
 */
export interface GlueGetCrawlerMetricsRequest {
  /**
   * @schema GlueGetCrawlerMetricsRequest#CrawlerNameList
   */
  readonly crawlerNameList?: string[];

  /**
   * @schema GlueGetCrawlerMetricsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueGetCrawlerMetricsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueGetCrawlerMetricsResponse
 */
export interface GlueGetCrawlerMetricsResponse {
  /**
   * @schema GlueGetCrawlerMetricsResponse#CrawlerMetricsList
   */
  readonly crawlerMetricsList?: GlueCrawlerMetrics[];

  /**
   * @schema GlueGetCrawlerMetricsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueGetCrawlersRequest
 */
export interface GlueGetCrawlersRequest {
  /**
   * @schema GlueGetCrawlersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueGetCrawlersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueGetCrawlersResponse
 */
export interface GlueGetCrawlersResponse {
  /**
   * @schema GlueGetCrawlersResponse#Crawlers
   */
  readonly crawlers?: GlueCrawler[];

  /**
   * @schema GlueGetCrawlersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueGetDataCatalogEncryptionSettingsRequest
 */
export interface GlueGetDataCatalogEncryptionSettingsRequest {
  /**
   * @schema GlueGetDataCatalogEncryptionSettingsRequest#CatalogId
   */
  readonly catalogId?: string;

}

/**
 * @schema GlueGetDataCatalogEncryptionSettingsResponse
 */
export interface GlueGetDataCatalogEncryptionSettingsResponse {
  /**
   * @schema GlueGetDataCatalogEncryptionSettingsResponse#DataCatalogEncryptionSettings
   */
  readonly dataCatalogEncryptionSettings?: GlueDataCatalogEncryptionSettings;

}

/**
 * @schema GlueGetDatabaseRequest
 */
export interface GlueGetDatabaseRequest {
  /**
   * @schema GlueGetDatabaseRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueGetDatabaseRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GlueGetDatabaseResponse
 */
export interface GlueGetDatabaseResponse {
  /**
   * @schema GlueGetDatabaseResponse#Database
   */
  readonly database?: GlueDatabase;

}

/**
 * @schema GlueGetDatabasesRequest
 */
export interface GlueGetDatabasesRequest {
  /**
   * @schema GlueGetDatabasesRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueGetDatabasesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueGetDatabasesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueGetDatabasesRequest#ResourceShareType
   */
  readonly resourceShareType?: string;

}

/**
 * @schema GlueGetDatabasesResponse
 */
export interface GlueGetDatabasesResponse {
  /**
   * @schema GlueGetDatabasesResponse#DatabaseList
   */
  readonly databaseList: GlueDatabase[];

  /**
   * @schema GlueGetDatabasesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueGetDataflowGraphRequest
 */
export interface GlueGetDataflowGraphRequest {
  /**
   * @schema GlueGetDataflowGraphRequest#PythonScript
   */
  readonly pythonScript?: string;

}

/**
 * @schema GlueGetDataflowGraphResponse
 */
export interface GlueGetDataflowGraphResponse {
  /**
   * @schema GlueGetDataflowGraphResponse#DagNodes
   */
  readonly dagNodes?: GlueCodeGenNode[];

  /**
   * @schema GlueGetDataflowGraphResponse#DagEdges
   */
  readonly dagEdges?: GlueCodeGenEdge[];

}

/**
 * @schema GlueGetDevEndpointRequest
 */
export interface GlueGetDevEndpointRequest {
  /**
   * @schema GlueGetDevEndpointRequest#EndpointName
   */
  readonly endpointName: string;

}

/**
 * @schema GlueGetDevEndpointResponse
 */
export interface GlueGetDevEndpointResponse {
  /**
   * @schema GlueGetDevEndpointResponse#DevEndpoint
   */
  readonly devEndpoint?: GlueDevEndpoint;

}

/**
 * @schema GlueGetDevEndpointsRequest
 */
export interface GlueGetDevEndpointsRequest {
  /**
   * @schema GlueGetDevEndpointsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueGetDevEndpointsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueGetDevEndpointsResponse
 */
export interface GlueGetDevEndpointsResponse {
  /**
   * @schema GlueGetDevEndpointsResponse#DevEndpoints
   */
  readonly devEndpoints?: GlueDevEndpoint[];

  /**
   * @schema GlueGetDevEndpointsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueGetJobRequest
 */
export interface GlueGetJobRequest {
  /**
   * @schema GlueGetJobRequest#JobName
   */
  readonly jobName: string;

}

/**
 * @schema GlueGetJobResponse
 */
export interface GlueGetJobResponse {
  /**
   * @schema GlueGetJobResponse#Job
   */
  readonly job?: GlueJob;

}

/**
 * @schema GlueGetJobBookmarkRequest
 */
export interface GlueGetJobBookmarkRequest {
  /**
   * @schema GlueGetJobBookmarkRequest#JobName
   */
  readonly jobName: string;

  /**
   * @schema GlueGetJobBookmarkRequest#RunId
   */
  readonly runId?: string;

}

/**
 * @schema GlueGetJobBookmarkResponse
 */
export interface GlueGetJobBookmarkResponse {
  /**
   * @schema GlueGetJobBookmarkResponse#JobBookmarkEntry
   */
  readonly jobBookmarkEntry?: GlueJobBookmarkEntry;

}

/**
 * @schema GlueGetJobRunRequest
 */
export interface GlueGetJobRunRequest {
  /**
   * @schema GlueGetJobRunRequest#JobName
   */
  readonly jobName: string;

  /**
   * @schema GlueGetJobRunRequest#RunId
   */
  readonly runId: string;

  /**
   * @schema GlueGetJobRunRequest#PredecessorsIncluded
   */
  readonly predecessorsIncluded?: boolean;

}

/**
 * @schema GlueGetJobRunResponse
 */
export interface GlueGetJobRunResponse {
  /**
   * @schema GlueGetJobRunResponse#JobRun
   */
  readonly jobRun?: GlueJobRun;

}

/**
 * @schema GlueGetJobRunsRequest
 */
export interface GlueGetJobRunsRequest {
  /**
   * @schema GlueGetJobRunsRequest#JobName
   */
  readonly jobName: string;

  /**
   * @schema GlueGetJobRunsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueGetJobRunsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GlueGetJobRunsResponse
 */
export interface GlueGetJobRunsResponse {
  /**
   * @schema GlueGetJobRunsResponse#JobRuns
   */
  readonly jobRuns?: GlueJobRun[];

  /**
   * @schema GlueGetJobRunsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueGetJobsRequest
 */
export interface GlueGetJobsRequest {
  /**
   * @schema GlueGetJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueGetJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GlueGetJobsResponse
 */
export interface GlueGetJobsResponse {
  /**
   * @schema GlueGetJobsResponse#Jobs
   */
  readonly jobs?: GlueJob[];

  /**
   * @schema GlueGetJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueGetMlTaskRunRequest
 */
export interface GlueGetMlTaskRunRequest {
  /**
   * @schema GlueGetMlTaskRunRequest#TransformId
   */
  readonly transformId: string;

  /**
   * @schema GlueGetMlTaskRunRequest#TaskRunId
   */
  readonly taskRunId: string;

}

/**
 * @schema GlueGetMlTaskRunResponse
 */
export interface GlueGetMlTaskRunResponse {
  /**
   * @schema GlueGetMlTaskRunResponse#TransformId
   */
  readonly transformId?: string;

  /**
   * @schema GlueGetMlTaskRunResponse#TaskRunId
   */
  readonly taskRunId?: string;

  /**
   * @schema GlueGetMlTaskRunResponse#Status
   */
  readonly status?: string;

  /**
   * @schema GlueGetMlTaskRunResponse#LogGroupName
   */
  readonly logGroupName?: string;

  /**
   * @schema GlueGetMlTaskRunResponse#Properties
   */
  readonly properties?: GlueTaskRunProperties;

  /**
   * @schema GlueGetMlTaskRunResponse#ErrorString
   */
  readonly errorString?: string;

  /**
   * @schema GlueGetMlTaskRunResponse#StartedOn
   */
  readonly startedOn?: string;

  /**
   * @schema GlueGetMlTaskRunResponse#LastModifiedOn
   */
  readonly lastModifiedOn?: string;

  /**
   * @schema GlueGetMlTaskRunResponse#CompletedOn
   */
  readonly completedOn?: string;

  /**
   * @schema GlueGetMlTaskRunResponse#ExecutionTime
   */
  readonly executionTime?: number;

}

/**
 * @schema GlueGetMlTaskRunsRequest
 */
export interface GlueGetMlTaskRunsRequest {
  /**
   * @schema GlueGetMlTaskRunsRequest#TransformId
   */
  readonly transformId: string;

  /**
   * @schema GlueGetMlTaskRunsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueGetMlTaskRunsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueGetMlTaskRunsRequest#Filter
   */
  readonly filter?: GlueTaskRunFilterCriteria;

  /**
   * @schema GlueGetMlTaskRunsRequest#Sort
   */
  readonly sort?: GlueTaskRunSortCriteria;

}

/**
 * @schema GlueGetMlTaskRunsResponse
 */
export interface GlueGetMlTaskRunsResponse {
  /**
   * @schema GlueGetMlTaskRunsResponse#TaskRuns
   */
  readonly taskRuns?: GlueTaskRun[];

  /**
   * @schema GlueGetMlTaskRunsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueGetMlTransformRequest
 */
export interface GlueGetMlTransformRequest {
  /**
   * @schema GlueGetMlTransformRequest#TransformId
   */
  readonly transformId: string;

}

/**
 * @schema GlueGetMlTransformResponse
 */
export interface GlueGetMlTransformResponse {
  /**
   * @schema GlueGetMlTransformResponse#TransformId
   */
  readonly transformId?: string;

  /**
   * @schema GlueGetMlTransformResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GlueGetMlTransformResponse#Description
   */
  readonly description?: string;

  /**
   * @schema GlueGetMlTransformResponse#Status
   */
  readonly status?: string;

  /**
   * @schema GlueGetMlTransformResponse#CreatedOn
   */
  readonly createdOn?: string;

  /**
   * @schema GlueGetMlTransformResponse#LastModifiedOn
   */
  readonly lastModifiedOn?: string;

  /**
   * @schema GlueGetMlTransformResponse#InputRecordTables
   */
  readonly inputRecordTables?: GlueGlueTable[];

  /**
   * @schema GlueGetMlTransformResponse#Parameters
   */
  readonly parameters?: GlueTransformParameters;

  /**
   * @schema GlueGetMlTransformResponse#EvaluationMetrics
   */
  readonly evaluationMetrics?: GlueEvaluationMetrics;

  /**
   * @schema GlueGetMlTransformResponse#LabelCount
   */
  readonly labelCount?: number;

  /**
   * @schema GlueGetMlTransformResponse#Schema
   */
  readonly schema?: GlueSchemaColumn[];

  /**
   * @schema GlueGetMlTransformResponse#Role
   */
  readonly role?: string;

  /**
   * @schema GlueGetMlTransformResponse#GlueVersion
   */
  readonly glueVersion?: string;

  /**
   * @schema GlueGetMlTransformResponse#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema GlueGetMlTransformResponse#WorkerType
   */
  readonly workerType?: string;

  /**
   * @schema GlueGetMlTransformResponse#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

  /**
   * @schema GlueGetMlTransformResponse#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema GlueGetMlTransformResponse#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema GlueGetMlTransformResponse#TransformEncryption
   */
  readonly transformEncryption?: GlueTransformEncryption;

}

/**
 * @schema GlueGetMlTransformsRequest
 */
export interface GlueGetMlTransformsRequest {
  /**
   * @schema GlueGetMlTransformsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueGetMlTransformsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueGetMlTransformsRequest#Filter
   */
  readonly filter?: GlueTransformFilterCriteria;

  /**
   * @schema GlueGetMlTransformsRequest#Sort
   */
  readonly sort?: GlueTransformSortCriteria;

}

/**
 * @schema GlueGetMlTransformsResponse
 */
export interface GlueGetMlTransformsResponse {
  /**
   * @schema GlueGetMlTransformsResponse#Transforms
   */
  readonly transforms: GlueMlTransform[];

  /**
   * @schema GlueGetMlTransformsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueGetMappingRequest
 */
export interface GlueGetMappingRequest {
  /**
   * @schema GlueGetMappingRequest#Source
   */
  readonly source: GlueCatalogEntry;

  /**
   * @schema GlueGetMappingRequest#Sinks
   */
  readonly sinks?: GlueCatalogEntry[];

  /**
   * @schema GlueGetMappingRequest#Location
   */
  readonly location?: GlueLocation;

}

/**
 * @schema GlueGetMappingResponse
 */
export interface GlueGetMappingResponse {
  /**
   * @schema GlueGetMappingResponse#Mapping
   */
  readonly mapping: GlueMappingEntry[];

}

/**
 * @schema GlueGetPartitionRequest
 */
export interface GlueGetPartitionRequest {
  /**
   * @schema GlueGetPartitionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueGetPartitionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueGetPartitionRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema GlueGetPartitionRequest#PartitionValues
   */
  readonly partitionValues: string[];

}

/**
 * @schema GlueGetPartitionResponse
 */
export interface GlueGetPartitionResponse {
  /**
   * @schema GlueGetPartitionResponse#Partition
   */
  readonly partition?: GluePartition;

}

/**
 * @schema GlueGetPartitionIndexesRequest
 */
export interface GlueGetPartitionIndexesRequest {
  /**
   * @schema GlueGetPartitionIndexesRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueGetPartitionIndexesRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueGetPartitionIndexesRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema GlueGetPartitionIndexesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueGetPartitionIndexesResponse
 */
export interface GlueGetPartitionIndexesResponse {
  /**
   * @schema GlueGetPartitionIndexesResponse#PartitionIndexDescriptorList
   */
  readonly partitionIndexDescriptorList?: GluePartitionIndexDescriptor[];

  /**
   * @schema GlueGetPartitionIndexesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueGetPartitionsRequest
 */
export interface GlueGetPartitionsRequest {
  /**
   * @schema GlueGetPartitionsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueGetPartitionsRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueGetPartitionsRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema GlueGetPartitionsRequest#Expression
   */
  readonly expression?: string;

  /**
   * @schema GlueGetPartitionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueGetPartitionsRequest#Segment
   */
  readonly segment?: GlueSegment;

  /**
   * @schema GlueGetPartitionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GlueGetPartitionsResponse
 */
export interface GlueGetPartitionsResponse {
  /**
   * @schema GlueGetPartitionsResponse#Partitions
   */
  readonly partitions?: GluePartition[];

  /**
   * @schema GlueGetPartitionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueGetPlanRequest
 */
export interface GlueGetPlanRequest {
  /**
   * @schema GlueGetPlanRequest#Mapping
   */
  readonly mapping: GlueMappingEntry[];

  /**
   * @schema GlueGetPlanRequest#Source
   */
  readonly source: GlueCatalogEntry;

  /**
   * @schema GlueGetPlanRequest#Sinks
   */
  readonly sinks?: GlueCatalogEntry[];

  /**
   * @schema GlueGetPlanRequest#Location
   */
  readonly location?: GlueLocation;

  /**
   * @schema GlueGetPlanRequest#Language
   */
  readonly language?: string;

  /**
   * @schema GlueGetPlanRequest#AdditionalPlanOptionsMap
   */
  readonly additionalPlanOptionsMap?: { [key: string]: string };

}

/**
 * @schema GlueGetPlanResponse
 */
export interface GlueGetPlanResponse {
  /**
   * @schema GlueGetPlanResponse#PythonScript
   */
  readonly pythonScript?: string;

  /**
   * @schema GlueGetPlanResponse#ScalaCode
   */
  readonly scalaCode?: string;

}

/**
 * @schema GlueGetRegistryInput
 */
export interface GlueGetRegistryInput {
  /**
   * @schema GlueGetRegistryInput#RegistryId
   */
  readonly registryId: GlueRegistryId;

}

/**
 * @schema GlueGetRegistryResponse
 */
export interface GlueGetRegistryResponse {
  /**
   * @schema GlueGetRegistryResponse#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema GlueGetRegistryResponse#RegistryArn
   */
  readonly registryArn?: string;

  /**
   * @schema GlueGetRegistryResponse#Description
   */
  readonly description?: string;

  /**
   * @schema GlueGetRegistryResponse#Status
   */
  readonly status?: string;

  /**
   * @schema GlueGetRegistryResponse#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema GlueGetRegistryResponse#UpdatedTime
   */
  readonly updatedTime?: string;

}

/**
 * @schema GlueGetResourcePoliciesRequest
 */
export interface GlueGetResourcePoliciesRequest {
  /**
   * @schema GlueGetResourcePoliciesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueGetResourcePoliciesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GlueGetResourcePoliciesResponse
 */
export interface GlueGetResourcePoliciesResponse {
  /**
   * @schema GlueGetResourcePoliciesResponse#GetResourcePoliciesResponseList
   */
  readonly getResourcePoliciesResponseList?: GlueGluePolicy[];

  /**
   * @schema GlueGetResourcePoliciesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueGetResourcePolicyRequest
 */
export interface GlueGetResourcePolicyRequest {
  /**
   * @schema GlueGetResourcePolicyRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * @schema GlueGetResourcePolicyResponse
 */
export interface GlueGetResourcePolicyResponse {
  /**
   * @schema GlueGetResourcePolicyResponse#PolicyInJson
   */
  readonly policyInJson?: string;

  /**
   * @schema GlueGetResourcePolicyResponse#PolicyHash
   */
  readonly policyHash?: string;

  /**
   * @schema GlueGetResourcePolicyResponse#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema GlueGetResourcePolicyResponse#UpdateTime
   */
  readonly updateTime?: string;

}

/**
 * @schema GlueGetSchemaInput
 */
export interface GlueGetSchemaInput {
  /**
   * @schema GlueGetSchemaInput#SchemaId
   */
  readonly schemaId: GlueSchemaId;

}

/**
 * @schema GlueGetSchemaResponse
 */
export interface GlueGetSchemaResponse {
  /**
   * @schema GlueGetSchemaResponse#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema GlueGetSchemaResponse#RegistryArn
   */
  readonly registryArn?: string;

  /**
   * @schema GlueGetSchemaResponse#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema GlueGetSchemaResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema GlueGetSchemaResponse#Description
   */
  readonly description?: string;

  /**
   * @schema GlueGetSchemaResponse#DataFormat
   */
  readonly dataFormat?: string;

  /**
   * @schema GlueGetSchemaResponse#Compatibility
   */
  readonly compatibility?: string;

  /**
   * @schema GlueGetSchemaResponse#SchemaCheckpoint
   */
  readonly schemaCheckpoint?: number;

  /**
   * @schema GlueGetSchemaResponse#LatestSchemaVersion
   */
  readonly latestSchemaVersion?: number;

  /**
   * @schema GlueGetSchemaResponse#NextSchemaVersion
   */
  readonly nextSchemaVersion?: number;

  /**
   * @schema GlueGetSchemaResponse#SchemaStatus
   */
  readonly schemaStatus?: string;

  /**
   * @schema GlueGetSchemaResponse#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema GlueGetSchemaResponse#UpdatedTime
   */
  readonly updatedTime?: string;

}

/**
 * @schema GlueGetSchemaByDefinitionInput
 */
export interface GlueGetSchemaByDefinitionInput {
  /**
   * @schema GlueGetSchemaByDefinitionInput#SchemaId
   */
  readonly schemaId: GlueSchemaId;

  /**
   * @schema GlueGetSchemaByDefinitionInput#SchemaDefinition
   */
  readonly schemaDefinition: string;

}

/**
 * @schema GlueGetSchemaByDefinitionResponse
 */
export interface GlueGetSchemaByDefinitionResponse {
  /**
   * @schema GlueGetSchemaByDefinitionResponse#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema GlueGetSchemaByDefinitionResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema GlueGetSchemaByDefinitionResponse#DataFormat
   */
  readonly dataFormat?: string;

  /**
   * @schema GlueGetSchemaByDefinitionResponse#Status
   */
  readonly status?: string;

  /**
   * @schema GlueGetSchemaByDefinitionResponse#CreatedTime
   */
  readonly createdTime?: string;

}

/**
 * @schema GlueGetSchemaVersionInput
 */
export interface GlueGetSchemaVersionInput {
  /**
   * @schema GlueGetSchemaVersionInput#SchemaId
   */
  readonly schemaId?: GlueSchemaId;

  /**
   * @schema GlueGetSchemaVersionInput#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema GlueGetSchemaVersionInput#SchemaVersionNumber
   */
  readonly schemaVersionNumber?: GlueSchemaVersionNumber;

}

/**
 * @schema GlueGetSchemaVersionResponse
 */
export interface GlueGetSchemaVersionResponse {
  /**
   * @schema GlueGetSchemaVersionResponse#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema GlueGetSchemaVersionResponse#SchemaDefinition
   */
  readonly schemaDefinition?: string;

  /**
   * @schema GlueGetSchemaVersionResponse#DataFormat
   */
  readonly dataFormat?: string;

  /**
   * @schema GlueGetSchemaVersionResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema GlueGetSchemaVersionResponse#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema GlueGetSchemaVersionResponse#Status
   */
  readonly status?: string;

  /**
   * @schema GlueGetSchemaVersionResponse#CreatedTime
   */
  readonly createdTime?: string;

}

/**
 * @schema GlueGetSchemaVersionsDiffInput
 */
export interface GlueGetSchemaVersionsDiffInput {
  /**
   * @schema GlueGetSchemaVersionsDiffInput#SchemaId
   */
  readonly schemaId: GlueSchemaId;

  /**
   * @schema GlueGetSchemaVersionsDiffInput#FirstSchemaVersionNumber
   */
  readonly firstSchemaVersionNumber: GlueSchemaVersionNumber;

  /**
   * @schema GlueGetSchemaVersionsDiffInput#SecondSchemaVersionNumber
   */
  readonly secondSchemaVersionNumber: GlueSchemaVersionNumber;

  /**
   * @schema GlueGetSchemaVersionsDiffInput#SchemaDiffType
   */
  readonly schemaDiffType: string;

}

/**
 * @schema GlueGetSchemaVersionsDiffResponse
 */
export interface GlueGetSchemaVersionsDiffResponse {
  /**
   * @schema GlueGetSchemaVersionsDiffResponse#Diff
   */
  readonly diff?: string;

}

/**
 * @schema GlueGetSecurityConfigurationRequest
 */
export interface GlueGetSecurityConfigurationRequest {
  /**
   * @schema GlueGetSecurityConfigurationRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GlueGetSecurityConfigurationResponse
 */
export interface GlueGetSecurityConfigurationResponse {
  /**
   * @schema GlueGetSecurityConfigurationResponse#SecurityConfiguration
   */
  readonly securityConfiguration?: GlueSecurityConfiguration;

}

/**
 * @schema GlueGetSecurityConfigurationsRequest
 */
export interface GlueGetSecurityConfigurationsRequest {
  /**
   * @schema GlueGetSecurityConfigurationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueGetSecurityConfigurationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueGetSecurityConfigurationsResponse
 */
export interface GlueGetSecurityConfigurationsResponse {
  /**
   * @schema GlueGetSecurityConfigurationsResponse#SecurityConfigurations
   */
  readonly securityConfigurations?: GlueSecurityConfiguration[];

  /**
   * @schema GlueGetSecurityConfigurationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueGetTableRequest
 */
export interface GlueGetTableRequest {
  /**
   * @schema GlueGetTableRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueGetTableRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueGetTableRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GlueGetTableResponse
 */
export interface GlueGetTableResponse {
  /**
   * @schema GlueGetTableResponse#Table
   */
  readonly table?: GlueTable;

}

/**
 * @schema GlueGetTableVersionRequest
 */
export interface GlueGetTableVersionRequest {
  /**
   * @schema GlueGetTableVersionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueGetTableVersionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueGetTableVersionRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema GlueGetTableVersionRequest#VersionId
   */
  readonly versionId?: string;

}

/**
 * @schema GlueGetTableVersionResponse
 */
export interface GlueGetTableVersionResponse {
  /**
   * @schema GlueGetTableVersionResponse#TableVersion
   */
  readonly tableVersion?: GlueTableVersion;

}

/**
 * @schema GlueGetTableVersionsRequest
 */
export interface GlueGetTableVersionsRequest {
  /**
   * @schema GlueGetTableVersionsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueGetTableVersionsRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueGetTableVersionsRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema GlueGetTableVersionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueGetTableVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GlueGetTableVersionsResponse
 */
export interface GlueGetTableVersionsResponse {
  /**
   * @schema GlueGetTableVersionsResponse#TableVersions
   */
  readonly tableVersions?: GlueTableVersion[];

  /**
   * @schema GlueGetTableVersionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueGetTablesRequest
 */
export interface GlueGetTablesRequest {
  /**
   * @schema GlueGetTablesRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueGetTablesRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueGetTablesRequest#Expression
   */
  readonly expression?: string;

  /**
   * @schema GlueGetTablesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueGetTablesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GlueGetTablesResponse
 */
export interface GlueGetTablesResponse {
  /**
   * @schema GlueGetTablesResponse#TableList
   */
  readonly tableList?: GlueTable[];

  /**
   * @schema GlueGetTablesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueGetTagsRequest
 */
export interface GlueGetTagsRequest {
  /**
   * @schema GlueGetTagsRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema GlueGetTagsResponse
 */
export interface GlueGetTagsResponse {
  /**
   * @schema GlueGetTagsResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GlueGetTriggerRequest
 */
export interface GlueGetTriggerRequest {
  /**
   * @schema GlueGetTriggerRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GlueGetTriggerResponse
 */
export interface GlueGetTriggerResponse {
  /**
   * @schema GlueGetTriggerResponse#Trigger
   */
  readonly trigger?: GlueTrigger;

}

/**
 * @schema GlueGetTriggersRequest
 */
export interface GlueGetTriggersRequest {
  /**
   * @schema GlueGetTriggersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueGetTriggersRequest#DependentJobName
   */
  readonly dependentJobName?: string;

  /**
   * @schema GlueGetTriggersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GlueGetTriggersResponse
 */
export interface GlueGetTriggersResponse {
  /**
   * @schema GlueGetTriggersResponse#Triggers
   */
  readonly triggers?: GlueTrigger[];

  /**
   * @schema GlueGetTriggersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueGetUserDefinedFunctionRequest
 */
export interface GlueGetUserDefinedFunctionRequest {
  /**
   * @schema GlueGetUserDefinedFunctionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueGetUserDefinedFunctionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueGetUserDefinedFunctionRequest#FunctionName
   */
  readonly functionName: string;

}

/**
 * @schema GlueGetUserDefinedFunctionResponse
 */
export interface GlueGetUserDefinedFunctionResponse {
  /**
   * @schema GlueGetUserDefinedFunctionResponse#UserDefinedFunction
   */
  readonly userDefinedFunction?: GlueUserDefinedFunction;

}

/**
 * @schema GlueGetUserDefinedFunctionsRequest
 */
export interface GlueGetUserDefinedFunctionsRequest {
  /**
   * @schema GlueGetUserDefinedFunctionsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueGetUserDefinedFunctionsRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueGetUserDefinedFunctionsRequest#Pattern
   */
  readonly pattern: string;

  /**
   * @schema GlueGetUserDefinedFunctionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueGetUserDefinedFunctionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GlueGetUserDefinedFunctionsResponse
 */
export interface GlueGetUserDefinedFunctionsResponse {
  /**
   * @schema GlueGetUserDefinedFunctionsResponse#UserDefinedFunctions
   */
  readonly userDefinedFunctions?: GlueUserDefinedFunction[];

  /**
   * @schema GlueGetUserDefinedFunctionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueGetWorkflowRequest
 */
export interface GlueGetWorkflowRequest {
  /**
   * @schema GlueGetWorkflowRequest#Name
   */
  readonly name: string;

  /**
   * @schema GlueGetWorkflowRequest#IncludeGraph
   */
  readonly includeGraph?: boolean;

}

/**
 * @schema GlueGetWorkflowResponse
 */
export interface GlueGetWorkflowResponse {
  /**
   * @schema GlueGetWorkflowResponse#Workflow
   */
  readonly workflow?: GlueWorkflow;

}

/**
 * @schema GlueGetWorkflowRunRequest
 */
export interface GlueGetWorkflowRunRequest {
  /**
   * @schema GlueGetWorkflowRunRequest#Name
   */
  readonly name: string;

  /**
   * @schema GlueGetWorkflowRunRequest#RunId
   */
  readonly runId: string;

  /**
   * @schema GlueGetWorkflowRunRequest#IncludeGraph
   */
  readonly includeGraph?: boolean;

}

/**
 * @schema GlueGetWorkflowRunResponse
 */
export interface GlueGetWorkflowRunResponse {
  /**
   * @schema GlueGetWorkflowRunResponse#Run
   */
  readonly run?: GlueWorkflowRun;

}

/**
 * @schema GlueGetWorkflowRunPropertiesRequest
 */
export interface GlueGetWorkflowRunPropertiesRequest {
  /**
   * @schema GlueGetWorkflowRunPropertiesRequest#Name
   */
  readonly name: string;

  /**
   * @schema GlueGetWorkflowRunPropertiesRequest#RunId
   */
  readonly runId: string;

}

/**
 * @schema GlueGetWorkflowRunPropertiesResponse
 */
export interface GlueGetWorkflowRunPropertiesResponse {
  /**
   * @schema GlueGetWorkflowRunPropertiesResponse#RunProperties
   */
  readonly runProperties?: { [key: string]: string };

}

/**
 * @schema GlueGetWorkflowRunsRequest
 */
export interface GlueGetWorkflowRunsRequest {
  /**
   * @schema GlueGetWorkflowRunsRequest#Name
   */
  readonly name: string;

  /**
   * @schema GlueGetWorkflowRunsRequest#IncludeGraph
   */
  readonly includeGraph?: boolean;

  /**
   * @schema GlueGetWorkflowRunsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueGetWorkflowRunsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GlueGetWorkflowRunsResponse
 */
export interface GlueGetWorkflowRunsResponse {
  /**
   * @schema GlueGetWorkflowRunsResponse#Runs
   */
  readonly runs?: GlueWorkflowRun[];

  /**
   * @schema GlueGetWorkflowRunsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueImportCatalogToGlueRequest
 */
export interface GlueImportCatalogToGlueRequest {
  /**
   * @schema GlueImportCatalogToGlueRequest#CatalogId
   */
  readonly catalogId?: string;

}

/**
 * @schema GlueImportCatalogToGlueResponse
 */
export interface GlueImportCatalogToGlueResponse {
}

/**
 * @schema GlueListCrawlersRequest
 */
export interface GlueListCrawlersRequest {
  /**
   * @schema GlueListCrawlersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueListCrawlersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueListCrawlersRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GlueListCrawlersResponse
 */
export interface GlueListCrawlersResponse {
  /**
   * @schema GlueListCrawlersResponse#CrawlerNames
   */
  readonly crawlerNames?: string[];

  /**
   * @schema GlueListCrawlersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueListDevEndpointsRequest
 */
export interface GlueListDevEndpointsRequest {
  /**
   * @schema GlueListDevEndpointsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueListDevEndpointsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueListDevEndpointsRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GlueListDevEndpointsResponse
 */
export interface GlueListDevEndpointsResponse {
  /**
   * @schema GlueListDevEndpointsResponse#DevEndpointNames
   */
  readonly devEndpointNames?: string[];

  /**
   * @schema GlueListDevEndpointsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueListJobsRequest
 */
export interface GlueListJobsRequest {
  /**
   * @schema GlueListJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueListJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueListJobsRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GlueListJobsResponse
 */
export interface GlueListJobsResponse {
  /**
   * @schema GlueListJobsResponse#JobNames
   */
  readonly jobNames?: string[];

  /**
   * @schema GlueListJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueListMlTransformsRequest
 */
export interface GlueListMlTransformsRequest {
  /**
   * @schema GlueListMlTransformsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueListMlTransformsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueListMlTransformsRequest#Filter
   */
  readonly filter?: GlueTransformFilterCriteria;

  /**
   * @schema GlueListMlTransformsRequest#Sort
   */
  readonly sort?: GlueTransformSortCriteria;

  /**
   * @schema GlueListMlTransformsRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GlueListMlTransformsResponse
 */
export interface GlueListMlTransformsResponse {
  /**
   * @schema GlueListMlTransformsResponse#TransformIds
   */
  readonly transformIds: string[];

  /**
   * @schema GlueListMlTransformsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueListRegistriesInput
 */
export interface GlueListRegistriesInput {
  /**
   * @schema GlueListRegistriesInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueListRegistriesInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueListRegistriesResponse
 */
export interface GlueListRegistriesResponse {
  /**
   * @schema GlueListRegistriesResponse#Registries
   */
  readonly registries?: GlueRegistryListItem[];

  /**
   * @schema GlueListRegistriesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueListSchemaVersionsInput
 */
export interface GlueListSchemaVersionsInput {
  /**
   * @schema GlueListSchemaVersionsInput#SchemaId
   */
  readonly schemaId: GlueSchemaId;

  /**
   * @schema GlueListSchemaVersionsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueListSchemaVersionsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueListSchemaVersionsResponse
 */
export interface GlueListSchemaVersionsResponse {
  /**
   * @schema GlueListSchemaVersionsResponse#Schemas
   */
  readonly schemas?: GlueSchemaVersionListItem[];

  /**
   * @schema GlueListSchemaVersionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueListSchemasInput
 */
export interface GlueListSchemasInput {
  /**
   * @schema GlueListSchemasInput#RegistryId
   */
  readonly registryId?: GlueRegistryId;

  /**
   * @schema GlueListSchemasInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueListSchemasInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueListSchemasResponse
 */
export interface GlueListSchemasResponse {
  /**
   * @schema GlueListSchemasResponse#Schemas
   */
  readonly schemas?: GlueSchemaListItem[];

  /**
   * @schema GlueListSchemasResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueListTriggersRequest
 */
export interface GlueListTriggersRequest {
  /**
   * @schema GlueListTriggersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueListTriggersRequest#DependentJobName
   */
  readonly dependentJobName?: string;

  /**
   * @schema GlueListTriggersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueListTriggersRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GlueListTriggersResponse
 */
export interface GlueListTriggersResponse {
  /**
   * @schema GlueListTriggersResponse#TriggerNames
   */
  readonly triggerNames?: string[];

  /**
   * @schema GlueListTriggersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueListWorkflowsRequest
 */
export interface GlueListWorkflowsRequest {
  /**
   * @schema GlueListWorkflowsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueListWorkflowsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GlueListWorkflowsResponse
 */
export interface GlueListWorkflowsResponse {
  /**
   * @schema GlueListWorkflowsResponse#Workflows
   */
  readonly workflows?: string[];

  /**
   * @schema GlueListWorkflowsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GluePutDataCatalogEncryptionSettingsRequest
 */
export interface GluePutDataCatalogEncryptionSettingsRequest {
  /**
   * @schema GluePutDataCatalogEncryptionSettingsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GluePutDataCatalogEncryptionSettingsRequest#DataCatalogEncryptionSettings
   */
  readonly dataCatalogEncryptionSettings: GlueDataCatalogEncryptionSettings;

}

/**
 * @schema GluePutDataCatalogEncryptionSettingsResponse
 */
export interface GluePutDataCatalogEncryptionSettingsResponse {
}

/**
 * @schema GluePutResourcePolicyRequest
 */
export interface GluePutResourcePolicyRequest {
  /**
   * @schema GluePutResourcePolicyRequest#PolicyInJson
   */
  readonly policyInJson: string;

  /**
   * @schema GluePutResourcePolicyRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema GluePutResourcePolicyRequest#PolicyHashCondition
   */
  readonly policyHashCondition?: string;

  /**
   * @schema GluePutResourcePolicyRequest#PolicyExistsCondition
   */
  readonly policyExistsCondition?: string;

  /**
   * @schema GluePutResourcePolicyRequest#EnableHybrid
   */
  readonly enableHybrid?: string;

}

/**
 * @schema GluePutResourcePolicyResponse
 */
export interface GluePutResourcePolicyResponse {
  /**
   * @schema GluePutResourcePolicyResponse#PolicyHash
   */
  readonly policyHash?: string;

}

/**
 * @schema GluePutSchemaVersionMetadataInput
 */
export interface GluePutSchemaVersionMetadataInput {
  /**
   * @schema GluePutSchemaVersionMetadataInput#SchemaId
   */
  readonly schemaId?: GlueSchemaId;

  /**
   * @schema GluePutSchemaVersionMetadataInput#SchemaVersionNumber
   */
  readonly schemaVersionNumber?: GlueSchemaVersionNumber;

  /**
   * @schema GluePutSchemaVersionMetadataInput#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema GluePutSchemaVersionMetadataInput#MetadataKeyValue
   */
  readonly metadataKeyValue: GlueMetadataKeyValuePair;

}

/**
 * @schema GluePutSchemaVersionMetadataResponse
 */
export interface GluePutSchemaVersionMetadataResponse {
  /**
   * @schema GluePutSchemaVersionMetadataResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema GluePutSchemaVersionMetadataResponse#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema GluePutSchemaVersionMetadataResponse#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema GluePutSchemaVersionMetadataResponse#LatestVersion
   */
  readonly latestVersion?: boolean;

  /**
   * @schema GluePutSchemaVersionMetadataResponse#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema GluePutSchemaVersionMetadataResponse#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema GluePutSchemaVersionMetadataResponse#MetadataKey
   */
  readonly metadataKey?: string;

  /**
   * @schema GluePutSchemaVersionMetadataResponse#MetadataValue
   */
  readonly metadataValue?: string;

}

/**
 * @schema GluePutWorkflowRunPropertiesRequest
 */
export interface GluePutWorkflowRunPropertiesRequest {
  /**
   * @schema GluePutWorkflowRunPropertiesRequest#Name
   */
  readonly name: string;

  /**
   * @schema GluePutWorkflowRunPropertiesRequest#RunId
   */
  readonly runId: string;

  /**
   * @schema GluePutWorkflowRunPropertiesRequest#RunProperties
   */
  readonly runProperties: { [key: string]: string };

}

/**
 * @schema GluePutWorkflowRunPropertiesResponse
 */
export interface GluePutWorkflowRunPropertiesResponse {
}

/**
 * @schema GlueQuerySchemaVersionMetadataInput
 */
export interface GlueQuerySchemaVersionMetadataInput {
  /**
   * @schema GlueQuerySchemaVersionMetadataInput#SchemaId
   */
  readonly schemaId?: GlueSchemaId;

  /**
   * @schema GlueQuerySchemaVersionMetadataInput#SchemaVersionNumber
   */
  readonly schemaVersionNumber?: GlueSchemaVersionNumber;

  /**
   * @schema GlueQuerySchemaVersionMetadataInput#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema GlueQuerySchemaVersionMetadataInput#MetadataList
   */
  readonly metadataList?: GlueMetadataKeyValuePair[];

  /**
   * @schema GlueQuerySchemaVersionMetadataInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueQuerySchemaVersionMetadataInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueQuerySchemaVersionMetadataResponse
 */
export interface GlueQuerySchemaVersionMetadataResponse {
  /**
   * @schema GlueQuerySchemaVersionMetadataResponse#MetadataInfoMap
   */
  readonly metadataInfoMap?: { [key: string]: GlueMetadataInfo };

  /**
   * @schema GlueQuerySchemaVersionMetadataResponse#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema GlueQuerySchemaVersionMetadataResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlueRegisterSchemaVersionInput
 */
export interface GlueRegisterSchemaVersionInput {
  /**
   * @schema GlueRegisterSchemaVersionInput#SchemaId
   */
  readonly schemaId: GlueSchemaId;

  /**
   * @schema GlueRegisterSchemaVersionInput#SchemaDefinition
   */
  readonly schemaDefinition: string;

}

/**
 * @schema GlueRegisterSchemaVersionResponse
 */
export interface GlueRegisterSchemaVersionResponse {
  /**
   * @schema GlueRegisterSchemaVersionResponse#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema GlueRegisterSchemaVersionResponse#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema GlueRegisterSchemaVersionResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema GlueRemoveSchemaVersionMetadataInput
 */
export interface GlueRemoveSchemaVersionMetadataInput {
  /**
   * @schema GlueRemoveSchemaVersionMetadataInput#SchemaId
   */
  readonly schemaId?: GlueSchemaId;

  /**
   * @schema GlueRemoveSchemaVersionMetadataInput#SchemaVersionNumber
   */
  readonly schemaVersionNumber?: GlueSchemaVersionNumber;

  /**
   * @schema GlueRemoveSchemaVersionMetadataInput#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema GlueRemoveSchemaVersionMetadataInput#MetadataKeyValue
   */
  readonly metadataKeyValue: GlueMetadataKeyValuePair;

}

/**
 * @schema GlueRemoveSchemaVersionMetadataResponse
 */
export interface GlueRemoveSchemaVersionMetadataResponse {
  /**
   * @schema GlueRemoveSchemaVersionMetadataResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema GlueRemoveSchemaVersionMetadataResponse#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema GlueRemoveSchemaVersionMetadataResponse#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema GlueRemoveSchemaVersionMetadataResponse#LatestVersion
   */
  readonly latestVersion?: boolean;

  /**
   * @schema GlueRemoveSchemaVersionMetadataResponse#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema GlueRemoveSchemaVersionMetadataResponse#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema GlueRemoveSchemaVersionMetadataResponse#MetadataKey
   */
  readonly metadataKey?: string;

  /**
   * @schema GlueRemoveSchemaVersionMetadataResponse#MetadataValue
   */
  readonly metadataValue?: string;

}

/**
 * @schema GlueResetJobBookmarkRequest
 */
export interface GlueResetJobBookmarkRequest {
  /**
   * @schema GlueResetJobBookmarkRequest#JobName
   */
  readonly jobName: string;

  /**
   * @schema GlueResetJobBookmarkRequest#RunId
   */
  readonly runId?: string;

}

/**
 * @schema GlueResetJobBookmarkResponse
 */
export interface GlueResetJobBookmarkResponse {
  /**
   * @schema GlueResetJobBookmarkResponse#JobBookmarkEntry
   */
  readonly jobBookmarkEntry?: GlueJobBookmarkEntry;

}

/**
 * @schema GlueResumeWorkflowRunRequest
 */
export interface GlueResumeWorkflowRunRequest {
  /**
   * @schema GlueResumeWorkflowRunRequest#Name
   */
  readonly name: string;

  /**
   * @schema GlueResumeWorkflowRunRequest#RunId
   */
  readonly runId: string;

  /**
   * @schema GlueResumeWorkflowRunRequest#NodeIds
   */
  readonly nodeIds: string[];

}

/**
 * @schema GlueResumeWorkflowRunResponse
 */
export interface GlueResumeWorkflowRunResponse {
  /**
   * @schema GlueResumeWorkflowRunResponse#RunId
   */
  readonly runId?: string;

  /**
   * @schema GlueResumeWorkflowRunResponse#NodeIds
   */
  readonly nodeIds?: string[];

}

/**
 * @schema GlueSearchTablesRequest
 */
export interface GlueSearchTablesRequest {
  /**
   * @schema GlueSearchTablesRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueSearchTablesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueSearchTablesRequest#Filters
   */
  readonly filters?: GluePropertyPredicate[];

  /**
   * @schema GlueSearchTablesRequest#SearchText
   */
  readonly searchText?: string;

  /**
   * @schema GlueSearchTablesRequest#SortCriteria
   */
  readonly sortCriteria?: GlueSortCriterion[];

  /**
   * @schema GlueSearchTablesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlueSearchTablesRequest#ResourceShareType
   */
  readonly resourceShareType?: string;

}

/**
 * @schema GlueSearchTablesResponse
 */
export interface GlueSearchTablesResponse {
  /**
   * @schema GlueSearchTablesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GlueSearchTablesResponse#TableList
   */
  readonly tableList?: GlueTable[];

}

/**
 * @schema GlueStartCrawlerRequest
 */
export interface GlueStartCrawlerRequest {
  /**
   * @schema GlueStartCrawlerRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GlueStartCrawlerResponse
 */
export interface GlueStartCrawlerResponse {
}

/**
 * @schema GlueStartCrawlerScheduleRequest
 */
export interface GlueStartCrawlerScheduleRequest {
  /**
   * @schema GlueStartCrawlerScheduleRequest#CrawlerName
   */
  readonly crawlerName: string;

}

/**
 * @schema GlueStartCrawlerScheduleResponse
 */
export interface GlueStartCrawlerScheduleResponse {
}

/**
 * @schema GlueStartExportLabelsTaskRunRequest
 */
export interface GlueStartExportLabelsTaskRunRequest {
  /**
   * @schema GlueStartExportLabelsTaskRunRequest#TransformId
   */
  readonly transformId: string;

  /**
   * @schema GlueStartExportLabelsTaskRunRequest#OutputS3Path
   */
  readonly outputS3Path: string;

}

/**
 * @schema GlueStartExportLabelsTaskRunResponse
 */
export interface GlueStartExportLabelsTaskRunResponse {
  /**
   * @schema GlueStartExportLabelsTaskRunResponse#TaskRunId
   */
  readonly taskRunId?: string;

}

/**
 * @schema GlueStartImportLabelsTaskRunRequest
 */
export interface GlueStartImportLabelsTaskRunRequest {
  /**
   * @schema GlueStartImportLabelsTaskRunRequest#TransformId
   */
  readonly transformId: string;

  /**
   * @schema GlueStartImportLabelsTaskRunRequest#InputS3Path
   */
  readonly inputS3Path: string;

  /**
   * @schema GlueStartImportLabelsTaskRunRequest#ReplaceAllLabels
   */
  readonly replaceAllLabels?: boolean;

}

/**
 * @schema GlueStartImportLabelsTaskRunResponse
 */
export interface GlueStartImportLabelsTaskRunResponse {
  /**
   * @schema GlueStartImportLabelsTaskRunResponse#TaskRunId
   */
  readonly taskRunId?: string;

}

/**
 * @schema GlueStartJobRunRequest
 */
export interface GlueStartJobRunRequest {
  /**
   * @schema GlueStartJobRunRequest#JobName
   */
  readonly jobName: string;

  /**
   * @schema GlueStartJobRunRequest#JobRunId
   */
  readonly jobRunId?: string;

  /**
   * @schema GlueStartJobRunRequest#Arguments
   */
  readonly arguments?: { [key: string]: string };

  /**
   * @schema GlueStartJobRunRequest#AllocatedCapacity
   */
  readonly allocatedCapacity?: number;

  /**
   * @schema GlueStartJobRunRequest#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema GlueStartJobRunRequest#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema GlueStartJobRunRequest#SecurityConfiguration
   */
  readonly securityConfiguration?: string;

  /**
   * @schema GlueStartJobRunRequest#NotificationProperty
   */
  readonly notificationProperty?: GlueNotificationProperty;

  /**
   * @schema GlueStartJobRunRequest#WorkerType
   */
  readonly workerType?: string;

  /**
   * @schema GlueStartJobRunRequest#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

}

/**
 * @schema GlueStartJobRunResponse
 */
export interface GlueStartJobRunResponse {
  /**
   * @schema GlueStartJobRunResponse#JobRunId
   */
  readonly jobRunId?: string;

}

/**
 * @schema GlueStartMlEvaluationTaskRunRequest
 */
export interface GlueStartMlEvaluationTaskRunRequest {
  /**
   * @schema GlueStartMlEvaluationTaskRunRequest#TransformId
   */
  readonly transformId: string;

}

/**
 * @schema GlueStartMlEvaluationTaskRunResponse
 */
export interface GlueStartMlEvaluationTaskRunResponse {
  /**
   * @schema GlueStartMlEvaluationTaskRunResponse#TaskRunId
   */
  readonly taskRunId?: string;

}

/**
 * @schema GlueStartMlLabelingSetGenerationTaskRunRequest
 */
export interface GlueStartMlLabelingSetGenerationTaskRunRequest {
  /**
   * @schema GlueStartMlLabelingSetGenerationTaskRunRequest#TransformId
   */
  readonly transformId: string;

  /**
   * @schema GlueStartMlLabelingSetGenerationTaskRunRequest#OutputS3Path
   */
  readonly outputS3Path: string;

}

/**
 * @schema GlueStartMlLabelingSetGenerationTaskRunResponse
 */
export interface GlueStartMlLabelingSetGenerationTaskRunResponse {
  /**
   * @schema GlueStartMlLabelingSetGenerationTaskRunResponse#TaskRunId
   */
  readonly taskRunId?: string;

}

/**
 * @schema GlueStartTriggerRequest
 */
export interface GlueStartTriggerRequest {
  /**
   * @schema GlueStartTriggerRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GlueStartTriggerResponse
 */
export interface GlueStartTriggerResponse {
  /**
   * @schema GlueStartTriggerResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema GlueStartWorkflowRunRequest
 */
export interface GlueStartWorkflowRunRequest {
  /**
   * @schema GlueStartWorkflowRunRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GlueStartWorkflowRunResponse
 */
export interface GlueStartWorkflowRunResponse {
  /**
   * @schema GlueStartWorkflowRunResponse#RunId
   */
  readonly runId?: string;

}

/**
 * @schema GlueStopCrawlerRequest
 */
export interface GlueStopCrawlerRequest {
  /**
   * @schema GlueStopCrawlerRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GlueStopCrawlerResponse
 */
export interface GlueStopCrawlerResponse {
}

/**
 * @schema GlueStopCrawlerScheduleRequest
 */
export interface GlueStopCrawlerScheduleRequest {
  /**
   * @schema GlueStopCrawlerScheduleRequest#CrawlerName
   */
  readonly crawlerName: string;

}

/**
 * @schema GlueStopCrawlerScheduleResponse
 */
export interface GlueStopCrawlerScheduleResponse {
}

/**
 * @schema GlueStopTriggerRequest
 */
export interface GlueStopTriggerRequest {
  /**
   * @schema GlueStopTriggerRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GlueStopTriggerResponse
 */
export interface GlueStopTriggerResponse {
  /**
   * @schema GlueStopTriggerResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema GlueStopWorkflowRunRequest
 */
export interface GlueStopWorkflowRunRequest {
  /**
   * @schema GlueStopWorkflowRunRequest#Name
   */
  readonly name: string;

  /**
   * @schema GlueStopWorkflowRunRequest#RunId
   */
  readonly runId: string;

}

/**
 * @schema GlueStopWorkflowRunResponse
 */
export interface GlueStopWorkflowRunResponse {
}

/**
 * @schema GlueTagResourceRequest
 */
export interface GlueTagResourceRequest {
  /**
   * @schema GlueTagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema GlueTagResourceRequest#TagsToAdd
   */
  readonly tagsToAdd: { [key: string]: string };

}

/**
 * @schema GlueTagResourceResponse
 */
export interface GlueTagResourceResponse {
}

/**
 * @schema GlueUntagResourceRequest
 */
export interface GlueUntagResourceRequest {
  /**
   * @schema GlueUntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema GlueUntagResourceRequest#TagsToRemove
   */
  readonly tagsToRemove: string[];

}

/**
 * @schema GlueUntagResourceResponse
 */
export interface GlueUntagResourceResponse {
}

/**
 * @schema GlueUpdateClassifierRequest
 */
export interface GlueUpdateClassifierRequest {
  /**
   * @schema GlueUpdateClassifierRequest#GrokClassifier
   */
  readonly grokClassifier?: GlueUpdateGrokClassifierRequest;

  /**
   * @schema GlueUpdateClassifierRequest#XMLClassifier
   */
  readonly xmlClassifier?: GlueUpdateXmlClassifierRequest;

  /**
   * @schema GlueUpdateClassifierRequest#JsonClassifier
   */
  readonly jsonClassifier?: GlueUpdateJsonClassifierRequest;

  /**
   * @schema GlueUpdateClassifierRequest#CsvClassifier
   */
  readonly csvClassifier?: GlueUpdateCsvClassifierRequest;

}

/**
 * @schema GlueUpdateClassifierResponse
 */
export interface GlueUpdateClassifierResponse {
}

/**
 * @schema GlueUpdateColumnStatisticsForPartitionRequest
 */
export interface GlueUpdateColumnStatisticsForPartitionRequest {
  /**
   * @schema GlueUpdateColumnStatisticsForPartitionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueUpdateColumnStatisticsForPartitionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueUpdateColumnStatisticsForPartitionRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema GlueUpdateColumnStatisticsForPartitionRequest#PartitionValues
   */
  readonly partitionValues: string[];

  /**
   * @schema GlueUpdateColumnStatisticsForPartitionRequest#ColumnStatisticsList
   */
  readonly columnStatisticsList: GlueColumnStatistics[];

}

/**
 * @schema GlueUpdateColumnStatisticsForPartitionResponse
 */
export interface GlueUpdateColumnStatisticsForPartitionResponse {
  /**
   * @schema GlueUpdateColumnStatisticsForPartitionResponse#Errors
   */
  readonly errors?: GlueColumnStatisticsError[];

}

/**
 * @schema GlueUpdateColumnStatisticsForTableRequest
 */
export interface GlueUpdateColumnStatisticsForTableRequest {
  /**
   * @schema GlueUpdateColumnStatisticsForTableRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueUpdateColumnStatisticsForTableRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueUpdateColumnStatisticsForTableRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema GlueUpdateColumnStatisticsForTableRequest#ColumnStatisticsList
   */
  readonly columnStatisticsList: GlueColumnStatistics[];

}

/**
 * @schema GlueUpdateColumnStatisticsForTableResponse
 */
export interface GlueUpdateColumnStatisticsForTableResponse {
  /**
   * @schema GlueUpdateColumnStatisticsForTableResponse#Errors
   */
  readonly errors?: GlueColumnStatisticsError[];

}

/**
 * @schema GlueUpdateConnectionRequest
 */
export interface GlueUpdateConnectionRequest {
  /**
   * @schema GlueUpdateConnectionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueUpdateConnectionRequest#Name
   */
  readonly name: string;

  /**
   * @schema GlueUpdateConnectionRequest#ConnectionInput
   */
  readonly connectionInput: GlueConnectionInput;

}

/**
 * @schema GlueUpdateConnectionResponse
 */
export interface GlueUpdateConnectionResponse {
}

/**
 * @schema GlueUpdateCrawlerRequest
 */
export interface GlueUpdateCrawlerRequest {
  /**
   * @schema GlueUpdateCrawlerRequest#Name
   */
  readonly name: string;

  /**
   * @schema GlueUpdateCrawlerRequest#Role
   */
  readonly role?: string;

  /**
   * @schema GlueUpdateCrawlerRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueUpdateCrawlerRequest#Description
   */
  readonly description?: string;

  /**
   * @schema GlueUpdateCrawlerRequest#Targets
   */
  readonly targets?: GlueCrawlerTargets;

  /**
   * @schema GlueUpdateCrawlerRequest#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema GlueUpdateCrawlerRequest#Classifiers
   */
  readonly classifiers?: string[];

  /**
   * @schema GlueUpdateCrawlerRequest#TablePrefix
   */
  readonly tablePrefix?: string;

  /**
   * @schema GlueUpdateCrawlerRequest#SchemaChangePolicy
   */
  readonly schemaChangePolicy?: GlueSchemaChangePolicy;

  /**
   * @schema GlueUpdateCrawlerRequest#RecrawlPolicy
   */
  readonly recrawlPolicy?: GlueRecrawlPolicy;

  /**
   * @schema GlueUpdateCrawlerRequest#LineageConfiguration
   */
  readonly lineageConfiguration?: GlueLineageConfiguration;

  /**
   * @schema GlueUpdateCrawlerRequest#Configuration
   */
  readonly configuration?: string;

  /**
   * @schema GlueUpdateCrawlerRequest#CrawlerSecurityConfiguration
   */
  readonly crawlerSecurityConfiguration?: string;

}

/**
 * @schema GlueUpdateCrawlerResponse
 */
export interface GlueUpdateCrawlerResponse {
}

/**
 * @schema GlueUpdateCrawlerScheduleRequest
 */
export interface GlueUpdateCrawlerScheduleRequest {
  /**
   * @schema GlueUpdateCrawlerScheduleRequest#CrawlerName
   */
  readonly crawlerName: string;

  /**
   * @schema GlueUpdateCrawlerScheduleRequest#Schedule
   */
  readonly schedule?: string;

}

/**
 * @schema GlueUpdateCrawlerScheduleResponse
 */
export interface GlueUpdateCrawlerScheduleResponse {
}

/**
 * @schema GlueUpdateDatabaseRequest
 */
export interface GlueUpdateDatabaseRequest {
  /**
   * @schema GlueUpdateDatabaseRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueUpdateDatabaseRequest#Name
   */
  readonly name: string;

  /**
   * @schema GlueUpdateDatabaseRequest#DatabaseInput
   */
  readonly databaseInput: GlueDatabaseInput;

}

/**
 * @schema GlueUpdateDatabaseResponse
 */
export interface GlueUpdateDatabaseResponse {
}

/**
 * @schema GlueUpdateDevEndpointRequest
 */
export interface GlueUpdateDevEndpointRequest {
  /**
   * @schema GlueUpdateDevEndpointRequest#EndpointName
   */
  readonly endpointName: string;

  /**
   * @schema GlueUpdateDevEndpointRequest#PublicKey
   */
  readonly publicKey?: string;

  /**
   * @schema GlueUpdateDevEndpointRequest#AddPublicKeys
   */
  readonly addPublicKeys?: string[];

  /**
   * @schema GlueUpdateDevEndpointRequest#DeletePublicKeys
   */
  readonly deletePublicKeys?: string[];

  /**
   * @schema GlueUpdateDevEndpointRequest#CustomLibraries
   */
  readonly customLibraries?: GlueDevEndpointCustomLibraries;

  /**
   * @schema GlueUpdateDevEndpointRequest#UpdateEtlLibraries
   */
  readonly updateEtlLibraries?: boolean;

  /**
   * @schema GlueUpdateDevEndpointRequest#DeleteArguments
   */
  readonly deleteArguments?: string[];

  /**
   * @schema GlueUpdateDevEndpointRequest#AddArguments
   */
  readonly addArguments?: { [key: string]: string };

}

/**
 * @schema GlueUpdateDevEndpointResponse
 */
export interface GlueUpdateDevEndpointResponse {
}

/**
 * @schema GlueUpdateJobRequest
 */
export interface GlueUpdateJobRequest {
  /**
   * @schema GlueUpdateJobRequest#JobName
   */
  readonly jobName: string;

  /**
   * @schema GlueUpdateJobRequest#JobUpdate
   */
  readonly jobUpdate: GlueJobUpdate;

}

/**
 * @schema GlueUpdateJobResponse
 */
export interface GlueUpdateJobResponse {
  /**
   * @schema GlueUpdateJobResponse#JobName
   */
  readonly jobName?: string;

}

/**
 * @schema GlueUpdateMlTransformRequest
 */
export interface GlueUpdateMlTransformRequest {
  /**
   * @schema GlueUpdateMlTransformRequest#TransformId
   */
  readonly transformId: string;

  /**
   * @schema GlueUpdateMlTransformRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GlueUpdateMlTransformRequest#Description
   */
  readonly description?: string;

  /**
   * @schema GlueUpdateMlTransformRequest#Parameters
   */
  readonly parameters?: GlueTransformParameters;

  /**
   * @schema GlueUpdateMlTransformRequest#Role
   */
  readonly role?: string;

  /**
   * @schema GlueUpdateMlTransformRequest#GlueVersion
   */
  readonly glueVersion?: string;

  /**
   * @schema GlueUpdateMlTransformRequest#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema GlueUpdateMlTransformRequest#WorkerType
   */
  readonly workerType?: string;

  /**
   * @schema GlueUpdateMlTransformRequest#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

  /**
   * @schema GlueUpdateMlTransformRequest#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema GlueUpdateMlTransformRequest#MaxRetries
   */
  readonly maxRetries?: number;

}

/**
 * @schema GlueUpdateMlTransformResponse
 */
export interface GlueUpdateMlTransformResponse {
  /**
   * @schema GlueUpdateMlTransformResponse#TransformId
   */
  readonly transformId?: string;

}

/**
 * @schema GlueUpdatePartitionRequest
 */
export interface GlueUpdatePartitionRequest {
  /**
   * @schema GlueUpdatePartitionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueUpdatePartitionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueUpdatePartitionRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema GlueUpdatePartitionRequest#PartitionValueList
   */
  readonly partitionValueList: string[];

  /**
   * @schema GlueUpdatePartitionRequest#PartitionInput
   */
  readonly partitionInput: GluePartitionInput;

}

/**
 * @schema GlueUpdatePartitionResponse
 */
export interface GlueUpdatePartitionResponse {
}

/**
 * @schema GlueUpdateRegistryInput
 */
export interface GlueUpdateRegistryInput {
  /**
   * @schema GlueUpdateRegistryInput#RegistryId
   */
  readonly registryId: GlueRegistryId;

  /**
   * @schema GlueUpdateRegistryInput#Description
   */
  readonly description: string;

}

/**
 * @schema GlueUpdateRegistryResponse
 */
export interface GlueUpdateRegistryResponse {
  /**
   * @schema GlueUpdateRegistryResponse#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema GlueUpdateRegistryResponse#RegistryArn
   */
  readonly registryArn?: string;

}

/**
 * @schema GlueUpdateSchemaInput
 */
export interface GlueUpdateSchemaInput {
  /**
   * @schema GlueUpdateSchemaInput#SchemaId
   */
  readonly schemaId: GlueSchemaId;

  /**
   * @schema GlueUpdateSchemaInput#SchemaVersionNumber
   */
  readonly schemaVersionNumber?: GlueSchemaVersionNumber;

  /**
   * @schema GlueUpdateSchemaInput#Compatibility
   */
  readonly compatibility?: string;

  /**
   * @schema GlueUpdateSchemaInput#Description
   */
  readonly description?: string;

}

/**
 * @schema GlueUpdateSchemaResponse
 */
export interface GlueUpdateSchemaResponse {
  /**
   * @schema GlueUpdateSchemaResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema GlueUpdateSchemaResponse#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema GlueUpdateSchemaResponse#RegistryName
   */
  readonly registryName?: string;

}

/**
 * @schema GlueUpdateTableRequest
 */
export interface GlueUpdateTableRequest {
  /**
   * @schema GlueUpdateTableRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueUpdateTableRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueUpdateTableRequest#TableInput
   */
  readonly tableInput: GlueTableInput;

  /**
   * @schema GlueUpdateTableRequest#SkipArchive
   */
  readonly skipArchive?: boolean;

}

/**
 * @schema GlueUpdateTableResponse
 */
export interface GlueUpdateTableResponse {
}

/**
 * @schema GlueUpdateTriggerRequest
 */
export interface GlueUpdateTriggerRequest {
  /**
   * @schema GlueUpdateTriggerRequest#Name
   */
  readonly name: string;

  /**
   * @schema GlueUpdateTriggerRequest#TriggerUpdate
   */
  readonly triggerUpdate: GlueTriggerUpdate;

}

/**
 * @schema GlueUpdateTriggerResponse
 */
export interface GlueUpdateTriggerResponse {
  /**
   * @schema GlueUpdateTriggerResponse#Trigger
   */
  readonly trigger?: GlueTrigger;

}

/**
 * @schema GlueUpdateUserDefinedFunctionRequest
 */
export interface GlueUpdateUserDefinedFunctionRequest {
  /**
   * @schema GlueUpdateUserDefinedFunctionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueUpdateUserDefinedFunctionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueUpdateUserDefinedFunctionRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema GlueUpdateUserDefinedFunctionRequest#FunctionInput
   */
  readonly functionInput: GlueUserDefinedFunctionInput;

}

/**
 * @schema GlueUpdateUserDefinedFunctionResponse
 */
export interface GlueUpdateUserDefinedFunctionResponse {
}

/**
 * @schema GlueUpdateWorkflowRequest
 */
export interface GlueUpdateWorkflowRequest {
  /**
   * @schema GlueUpdateWorkflowRequest#Name
   */
  readonly name: string;

  /**
   * @schema GlueUpdateWorkflowRequest#Description
   */
  readonly description?: string;

  /**
   * @schema GlueUpdateWorkflowRequest#DefaultRunProperties
   */
  readonly defaultRunProperties?: { [key: string]: string };

  /**
   * @schema GlueUpdateWorkflowRequest#MaxConcurrentRuns
   */
  readonly maxConcurrentRuns?: number;

}

/**
 * @schema GlueUpdateWorkflowResponse
 */
export interface GlueUpdateWorkflowResponse {
  /**
   * @schema GlueUpdateWorkflowResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema GluePartitionInput
 */
export interface GluePartitionInput {
  /**
   * @schema GluePartitionInput#Values
   */
  readonly values?: string[];

  /**
   * @schema GluePartitionInput#LastAccessTime
   */
  readonly lastAccessTime?: string;

  /**
   * @schema GluePartitionInput#StorageDescriptor
   */
  readonly storageDescriptor?: GlueStorageDescriptor;

  /**
   * @schema GluePartitionInput#Parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema GluePartitionInput#LastAnalyzedTime
   */
  readonly lastAnalyzedTime?: string;

}

/**
 * @schema GluePartitionError
 */
export interface GluePartitionError {
  /**
   * @schema GluePartitionError#PartitionValues
   */
  readonly partitionValues?: string[];

  /**
   * @schema GluePartitionError#ErrorDetail
   */
  readonly errorDetail?: GlueErrorDetail;

}

/**
 * @schema GlueErrorDetail
 */
export interface GlueErrorDetail {
  /**
   * @schema GlueErrorDetail#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema GlueErrorDetail#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema GluePartitionValueList
 */
export interface GluePartitionValueList {
  /**
   * @schema GluePartitionValueList#Values
   */
  readonly values: string[];

}

/**
 * @schema GlueTableError
 */
export interface GlueTableError {
  /**
   * @schema GlueTableError#TableName
   */
  readonly tableName?: string;

  /**
   * @schema GlueTableError#ErrorDetail
   */
  readonly errorDetail?: GlueErrorDetail;

}

/**
 * @schema GlueTableVersionError
 */
export interface GlueTableVersionError {
  /**
   * @schema GlueTableVersionError#TableName
   */
  readonly tableName?: string;

  /**
   * @schema GlueTableVersionError#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema GlueTableVersionError#ErrorDetail
   */
  readonly errorDetail?: GlueErrorDetail;

}

/**
 * @schema GlueCrawler
 */
export interface GlueCrawler {
  /**
   * @schema GlueCrawler#Name
   */
  readonly name?: string;

  /**
   * @schema GlueCrawler#Role
   */
  readonly role?: string;

  /**
   * @schema GlueCrawler#Targets
   */
  readonly targets?: GlueCrawlerTargets;

  /**
   * @schema GlueCrawler#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueCrawler#Description
   */
  readonly description?: string;

  /**
   * @schema GlueCrawler#Classifiers
   */
  readonly classifiers?: string[];

  /**
   * @schema GlueCrawler#RecrawlPolicy
   */
  readonly recrawlPolicy?: GlueRecrawlPolicy;

  /**
   * @schema GlueCrawler#SchemaChangePolicy
   */
  readonly schemaChangePolicy?: GlueSchemaChangePolicy;

  /**
   * @schema GlueCrawler#LineageConfiguration
   */
  readonly lineageConfiguration?: GlueLineageConfiguration;

  /**
   * @schema GlueCrawler#State
   */
  readonly state?: string;

  /**
   * @schema GlueCrawler#TablePrefix
   */
  readonly tablePrefix?: string;

  /**
   * @schema GlueCrawler#Schedule
   */
  readonly schedule?: GlueSchedule;

  /**
   * @schema GlueCrawler#CrawlElapsedTime
   */
  readonly crawlElapsedTime?: number;

  /**
   * @schema GlueCrawler#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema GlueCrawler#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema GlueCrawler#LastCrawl
   */
  readonly lastCrawl?: GlueLastCrawlInfo;

  /**
   * @schema GlueCrawler#Version
   */
  readonly version?: number;

  /**
   * @schema GlueCrawler#Configuration
   */
  readonly configuration?: string;

  /**
   * @schema GlueCrawler#CrawlerSecurityConfiguration
   */
  readonly crawlerSecurityConfiguration?: string;

}

/**
 * @schema GlueDevEndpoint
 */
export interface GlueDevEndpoint {
  /**
   * @schema GlueDevEndpoint#EndpointName
   */
  readonly endpointName?: string;

  /**
   * @schema GlueDevEndpoint#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema GlueDevEndpoint#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema GlueDevEndpoint#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema GlueDevEndpoint#YarnEndpointAddress
   */
  readonly yarnEndpointAddress?: string;

  /**
   * @schema GlueDevEndpoint#PrivateAddress
   */
  readonly privateAddress?: string;

  /**
   * @schema GlueDevEndpoint#ZeppelinRemoteSparkInterpreterPort
   */
  readonly zeppelinRemoteSparkInterpreterPort?: number;

  /**
   * @schema GlueDevEndpoint#PublicAddress
   */
  readonly publicAddress?: string;

  /**
   * @schema GlueDevEndpoint#Status
   */
  readonly status?: string;

  /**
   * @schema GlueDevEndpoint#WorkerType
   */
  readonly workerType?: string;

  /**
   * @schema GlueDevEndpoint#GlueVersion
   */
  readonly glueVersion?: string;

  /**
   * @schema GlueDevEndpoint#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

  /**
   * @schema GlueDevEndpoint#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema GlueDevEndpoint#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema GlueDevEndpoint#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema GlueDevEndpoint#ExtraPythonLibsS3Path
   */
  readonly extraPythonLibsS3Path?: string;

  /**
   * @schema GlueDevEndpoint#ExtraJarsS3Path
   */
  readonly extraJarsS3Path?: string;

  /**
   * @schema GlueDevEndpoint#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema GlueDevEndpoint#LastUpdateStatus
   */
  readonly lastUpdateStatus?: string;

  /**
   * @schema GlueDevEndpoint#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema GlueDevEndpoint#LastModifiedTimestamp
   */
  readonly lastModifiedTimestamp?: string;

  /**
   * @schema GlueDevEndpoint#PublicKey
   */
  readonly publicKey?: string;

  /**
   * @schema GlueDevEndpoint#PublicKeys
   */
  readonly publicKeys?: string[];

  /**
   * @schema GlueDevEndpoint#SecurityConfiguration
   */
  readonly securityConfiguration?: string;

  /**
   * @schema GlueDevEndpoint#Arguments
   */
  readonly arguments?: { [key: string]: string };

}

/**
 * @schema GlueJob
 */
export interface GlueJob {
  /**
   * @schema GlueJob#Name
   */
  readonly name?: string;

  /**
   * @schema GlueJob#Description
   */
  readonly description?: string;

  /**
   * @schema GlueJob#LogUri
   */
  readonly logUri?: string;

  /**
   * @schema GlueJob#Role
   */
  readonly role?: string;

  /**
   * @schema GlueJob#CreatedOn
   */
  readonly createdOn?: string;

  /**
   * @schema GlueJob#LastModifiedOn
   */
  readonly lastModifiedOn?: string;

  /**
   * @schema GlueJob#ExecutionProperty
   */
  readonly executionProperty?: GlueExecutionProperty;

  /**
   * @schema GlueJob#Command
   */
  readonly command?: GlueJobCommand;

  /**
   * @schema GlueJob#DefaultArguments
   */
  readonly defaultArguments?: { [key: string]: string };

  /**
   * @schema GlueJob#NonOverridableArguments
   */
  readonly nonOverridableArguments?: { [key: string]: string };

  /**
   * @schema GlueJob#Connections
   */
  readonly connections?: GlueConnectionsList;

  /**
   * @schema GlueJob#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema GlueJob#AllocatedCapacity
   */
  readonly allocatedCapacity?: number;

  /**
   * @schema GlueJob#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema GlueJob#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema GlueJob#WorkerType
   */
  readonly workerType?: string;

  /**
   * @schema GlueJob#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

  /**
   * @schema GlueJob#SecurityConfiguration
   */
  readonly securityConfiguration?: string;

  /**
   * @schema GlueJob#NotificationProperty
   */
  readonly notificationProperty?: GlueNotificationProperty;

  /**
   * @schema GlueJob#GlueVersion
   */
  readonly glueVersion?: string;

}

/**
 * @schema GluePartition
 */
export interface GluePartition {
  /**
   * @schema GluePartition#Values
   */
  readonly values?: string[];

  /**
   * @schema GluePartition#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GluePartition#TableName
   */
  readonly tableName?: string;

  /**
   * @schema GluePartition#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema GluePartition#LastAccessTime
   */
  readonly lastAccessTime?: string;

  /**
   * @schema GluePartition#StorageDescriptor
   */
  readonly storageDescriptor?: GlueStorageDescriptor;

  /**
   * @schema GluePartition#Parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema GluePartition#LastAnalyzedTime
   */
  readonly lastAnalyzedTime?: string;

  /**
   * @schema GluePartition#CatalogId
   */
  readonly catalogId?: string;

}

/**
 * @schema GlueTrigger
 */
export interface GlueTrigger {
  /**
   * @schema GlueTrigger#Name
   */
  readonly name?: string;

  /**
   * @schema GlueTrigger#WorkflowName
   */
  readonly workflowName?: string;

  /**
   * @schema GlueTrigger#Id
   */
  readonly id?: string;

  /**
   * @schema GlueTrigger#Type
   */
  readonly type?: string;

  /**
   * @schema GlueTrigger#State
   */
  readonly state?: string;

  /**
   * @schema GlueTrigger#Description
   */
  readonly description?: string;

  /**
   * @schema GlueTrigger#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema GlueTrigger#Actions
   */
  readonly actions?: GlueAction[];

  /**
   * @schema GlueTrigger#Predicate
   */
  readonly predicate?: GluePredicate;

}

/**
 * @schema GlueWorkflow
 */
export interface GlueWorkflow {
  /**
   * @schema GlueWorkflow#Name
   */
  readonly name?: string;

  /**
   * @schema GlueWorkflow#Description
   */
  readonly description?: string;

  /**
   * @schema GlueWorkflow#DefaultRunProperties
   */
  readonly defaultRunProperties?: { [key: string]: string };

  /**
   * @schema GlueWorkflow#CreatedOn
   */
  readonly createdOn?: string;

  /**
   * @schema GlueWorkflow#LastModifiedOn
   */
  readonly lastModifiedOn?: string;

  /**
   * @schema GlueWorkflow#LastRun
   */
  readonly lastRun?: GlueWorkflowRun;

  /**
   * @schema GlueWorkflow#Graph
   */
  readonly graph?: GlueWorkflowGraph;

  /**
   * @schema GlueWorkflow#MaxConcurrentRuns
   */
  readonly maxConcurrentRuns?: number;

}

/**
 * @schema GlueBatchStopJobRunSuccessfulSubmission
 */
export interface GlueBatchStopJobRunSuccessfulSubmission {
  /**
   * @schema GlueBatchStopJobRunSuccessfulSubmission#JobName
   */
  readonly jobName?: string;

  /**
   * @schema GlueBatchStopJobRunSuccessfulSubmission#JobRunId
   */
  readonly jobRunId?: string;

}

/**
 * @schema GlueBatchStopJobRunError
 */
export interface GlueBatchStopJobRunError {
  /**
   * @schema GlueBatchStopJobRunError#JobName
   */
  readonly jobName?: string;

  /**
   * @schema GlueBatchStopJobRunError#JobRunId
   */
  readonly jobRunId?: string;

  /**
   * @schema GlueBatchStopJobRunError#ErrorDetail
   */
  readonly errorDetail?: GlueErrorDetail;

}

/**
 * @schema GlueBatchUpdatePartitionRequestEntry
 */
export interface GlueBatchUpdatePartitionRequestEntry {
  /**
   * @schema GlueBatchUpdatePartitionRequestEntry#PartitionValueList
   */
  readonly partitionValueList: string[];

  /**
   * @schema GlueBatchUpdatePartitionRequestEntry#PartitionInput
   */
  readonly partitionInput: GluePartitionInput;

}

/**
 * @schema GlueBatchUpdatePartitionFailureEntry
 */
export interface GlueBatchUpdatePartitionFailureEntry {
  /**
   * @schema GlueBatchUpdatePartitionFailureEntry#PartitionValueList
   */
  readonly partitionValueList?: string[];

  /**
   * @schema GlueBatchUpdatePartitionFailureEntry#ErrorDetail
   */
  readonly errorDetail?: GlueErrorDetail;

}

/**
 * @schema GlueCreateGrokClassifierRequest
 */
export interface GlueCreateGrokClassifierRequest {
  /**
   * @schema GlueCreateGrokClassifierRequest#Classification
   */
  readonly classification: string;

  /**
   * @schema GlueCreateGrokClassifierRequest#Name
   */
  readonly name: string;

  /**
   * @schema GlueCreateGrokClassifierRequest#GrokPattern
   */
  readonly grokPattern: string;

  /**
   * @schema GlueCreateGrokClassifierRequest#CustomPatterns
   */
  readonly customPatterns?: string;

}

/**
 * @schema GlueCreateXmlClassifierRequest
 */
export interface GlueCreateXmlClassifierRequest {
  /**
   * @schema GlueCreateXmlClassifierRequest#Classification
   */
  readonly classification: string;

  /**
   * @schema GlueCreateXmlClassifierRequest#Name
   */
  readonly name: string;

  /**
   * @schema GlueCreateXmlClassifierRequest#RowTag
   */
  readonly rowTag?: string;

}

/**
 * @schema GlueCreateJsonClassifierRequest
 */
export interface GlueCreateJsonClassifierRequest {
  /**
   * @schema GlueCreateJsonClassifierRequest#Name
   */
  readonly name: string;

  /**
   * @schema GlueCreateJsonClassifierRequest#JsonPath
   */
  readonly jsonPath: string;

}

/**
 * @schema GlueCreateCsvClassifierRequest
 */
export interface GlueCreateCsvClassifierRequest {
  /**
   * @schema GlueCreateCsvClassifierRequest#Name
   */
  readonly name: string;

  /**
   * @schema GlueCreateCsvClassifierRequest#Delimiter
   */
  readonly delimiter?: string;

  /**
   * @schema GlueCreateCsvClassifierRequest#QuoteSymbol
   */
  readonly quoteSymbol?: string;

  /**
   * @schema GlueCreateCsvClassifierRequest#ContainsHeader
   */
  readonly containsHeader?: string;

  /**
   * @schema GlueCreateCsvClassifierRequest#Header
   */
  readonly header?: string[];

  /**
   * @schema GlueCreateCsvClassifierRequest#DisableValueTrimming
   */
  readonly disableValueTrimming?: boolean;

  /**
   * @schema GlueCreateCsvClassifierRequest#AllowSingleColumn
   */
  readonly allowSingleColumn?: boolean;

}

/**
 * @schema GlueConnectionInput
 */
export interface GlueConnectionInput {
  /**
   * @schema GlueConnectionInput#Name
   */
  readonly name: string;

  /**
   * @schema GlueConnectionInput#Description
   */
  readonly description?: string;

  /**
   * @schema GlueConnectionInput#ConnectionType
   */
  readonly connectionType: string;

  /**
   * @schema GlueConnectionInput#MatchCriteria
   */
  readonly matchCriteria?: string[];

  /**
   * @schema GlueConnectionInput#ConnectionProperties
   */
  readonly connectionProperties: { [key: string]: string };

  /**
   * @schema GlueConnectionInput#PhysicalConnectionRequirements
   */
  readonly physicalConnectionRequirements?: GluePhysicalConnectionRequirements;

}

/**
 * @schema GlueCrawlerTargets
 */
export interface GlueCrawlerTargets {
  /**
   * @schema GlueCrawlerTargets#S3Targets
   */
  readonly s3Targets?: GlueS3Target[];

  /**
   * @schema GlueCrawlerTargets#JdbcTargets
   */
  readonly jdbcTargets?: GlueJdbcTarget[];

  /**
   * @schema GlueCrawlerTargets#MongoDBTargets
   */
  readonly mongoDbTargets?: GlueMongoDbTarget[];

  /**
   * @schema GlueCrawlerTargets#DynamoDBTargets
   */
  readonly dynamoDbTargets?: GlueDynamoDbTarget[];

  /**
   * @schema GlueCrawlerTargets#CatalogTargets
   */
  readonly catalogTargets?: GlueCatalogTarget[];

}

/**
 * @schema GlueSchemaChangePolicy
 */
export interface GlueSchemaChangePolicy {
  /**
   * @schema GlueSchemaChangePolicy#UpdateBehavior
   */
  readonly updateBehavior?: string;

  /**
   * @schema GlueSchemaChangePolicy#DeleteBehavior
   */
  readonly deleteBehavior?: string;

}

/**
 * @schema GlueRecrawlPolicy
 */
export interface GlueRecrawlPolicy {
  /**
   * @schema GlueRecrawlPolicy#RecrawlBehavior
   */
  readonly recrawlBehavior?: string;

}

/**
 * @schema GlueLineageConfiguration
 */
export interface GlueLineageConfiguration {
  /**
   * @schema GlueLineageConfiguration#CrawlerLineageSettings
   */
  readonly crawlerLineageSettings?: string;

}

/**
 * @schema GlueDatabaseInput
 */
export interface GlueDatabaseInput {
  /**
   * @schema GlueDatabaseInput#Name
   */
  readonly name: string;

  /**
   * @schema GlueDatabaseInput#Description
   */
  readonly description?: string;

  /**
   * @schema GlueDatabaseInput#LocationUri
   */
  readonly locationUri?: string;

  /**
   * @schema GlueDatabaseInput#Parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema GlueDatabaseInput#CreateTableDefaultPermissions
   */
  readonly createTableDefaultPermissions?: GluePrincipalPermissions[];

  /**
   * @schema GlueDatabaseInput#TargetDatabase
   */
  readonly targetDatabase?: GlueDatabaseIdentifier;

}

/**
 * @schema GlueExecutionProperty
 */
export interface GlueExecutionProperty {
  /**
   * @schema GlueExecutionProperty#MaxConcurrentRuns
   */
  readonly maxConcurrentRuns?: number;

}

/**
 * @schema GlueJobCommand
 */
export interface GlueJobCommand {
  /**
   * @schema GlueJobCommand#Name
   */
  readonly name?: string;

  /**
   * @schema GlueJobCommand#ScriptLocation
   */
  readonly scriptLocation?: string;

  /**
   * @schema GlueJobCommand#PythonVersion
   */
  readonly pythonVersion?: string;

}

/**
 * @schema GlueConnectionsList
 */
export interface GlueConnectionsList {
  /**
   * @schema GlueConnectionsList#Connections
   */
  readonly connections?: string[];

}

/**
 * @schema GlueNotificationProperty
 */
export interface GlueNotificationProperty {
  /**
   * @schema GlueNotificationProperty#NotifyDelayAfter
   */
  readonly notifyDelayAfter?: number;

}

/**
 * @schema GlueGlueTable
 */
export interface GlueGlueTable {
  /**
   * @schema GlueGlueTable#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueGlueTable#TableName
   */
  readonly tableName: string;

  /**
   * @schema GlueGlueTable#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueGlueTable#ConnectionName
   */
  readonly connectionName?: string;

}

/**
 * @schema GlueTransformParameters
 */
export interface GlueTransformParameters {
  /**
   * @schema GlueTransformParameters#TransformType
   */
  readonly transformType: string;

  /**
   * @schema GlueTransformParameters#FindMatchesParameters
   */
  readonly findMatchesParameters?: GlueFindMatchesParameters;

}

/**
 * @schema GlueTransformEncryption
 */
export interface GlueTransformEncryption {
  /**
   * @schema GlueTransformEncryption#MlUserDataEncryption
   */
  readonly mlUserDataEncryption?: GlueMlUserDataEncryption;

  /**
   * @schema GlueTransformEncryption#TaskRunSecurityConfigurationName
   */
  readonly taskRunSecurityConfigurationName?: string;

}

/**
 * @schema GluePartitionIndex
 */
export interface GluePartitionIndex {
  /**
   * @schema GluePartitionIndex#Keys
   */
  readonly keys: string[];

  /**
   * @schema GluePartitionIndex#IndexName
   */
  readonly indexName: string;

}

/**
 * @schema GlueRegistryId
 */
export interface GlueRegistryId {
  /**
   * @schema GlueRegistryId#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema GlueRegistryId#RegistryArn
   */
  readonly registryArn?: string;

}

/**
 * @schema GlueCodeGenNode
 */
export interface GlueCodeGenNode {
  /**
   * @schema GlueCodeGenNode#Id
   */
  readonly id: string;

  /**
   * @schema GlueCodeGenNode#NodeType
   */
  readonly nodeType: string;

  /**
   * @schema GlueCodeGenNode#Args
   */
  readonly args: GlueCodeGenNodeArg[];

  /**
   * @schema GlueCodeGenNode#LineNumber
   */
  readonly lineNumber?: number;

}

/**
 * @schema GlueCodeGenEdge
 */
export interface GlueCodeGenEdge {
  /**
   * @schema GlueCodeGenEdge#Source
   */
  readonly source: string;

  /**
   * @schema GlueCodeGenEdge#Target
   */
  readonly target: string;

  /**
   * @schema GlueCodeGenEdge#TargetParameter
   */
  readonly targetParameter?: string;

}

/**
 * @schema GlueEncryptionConfiguration
 */
export interface GlueEncryptionConfiguration {
  /**
   * @schema GlueEncryptionConfiguration#S3Encryption
   */
  readonly s3Encryption?: GlueS3Encryption[];

  /**
   * @schema GlueEncryptionConfiguration#CloudWatchEncryption
   */
  readonly cloudWatchEncryption?: GlueCloudWatchEncryption;

  /**
   * @schema GlueEncryptionConfiguration#JobBookmarksEncryption
   */
  readonly jobBookmarksEncryption?: GlueJobBookmarksEncryption;

}

/**
 * @schema GlueTableInput
 */
export interface GlueTableInput {
  /**
   * @schema GlueTableInput#Name
   */
  readonly name: string;

  /**
   * @schema GlueTableInput#Description
   */
  readonly description?: string;

  /**
   * @schema GlueTableInput#Owner
   */
  readonly owner?: string;

  /**
   * @schema GlueTableInput#LastAccessTime
   */
  readonly lastAccessTime?: string;

  /**
   * @schema GlueTableInput#LastAnalyzedTime
   */
  readonly lastAnalyzedTime?: string;

  /**
   * @schema GlueTableInput#Retention
   */
  readonly retention?: number;

  /**
   * @schema GlueTableInput#StorageDescriptor
   */
  readonly storageDescriptor?: GlueStorageDescriptor;

  /**
   * @schema GlueTableInput#PartitionKeys
   */
  readonly partitionKeys?: GlueColumn[];

  /**
   * @schema GlueTableInput#ViewOriginalText
   */
  readonly viewOriginalText?: string;

  /**
   * @schema GlueTableInput#ViewExpandedText
   */
  readonly viewExpandedText?: string;

  /**
   * @schema GlueTableInput#TableType
   */
  readonly tableType?: string;

  /**
   * @schema GlueTableInput#Parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema GlueTableInput#TargetTable
   */
  readonly targetTable?: GlueTableIdentifier;

}

/**
 * @schema GluePredicate
 */
export interface GluePredicate {
  /**
   * @schema GluePredicate#Logical
   */
  readonly logical?: string;

  /**
   * @schema GluePredicate#Conditions
   */
  readonly conditions?: GlueCondition[];

}

/**
 * @schema GlueAction
 */
export interface GlueAction {
  /**
   * @schema GlueAction#JobName
   */
  readonly jobName?: string;

  /**
   * @schema GlueAction#Arguments
   */
  readonly arguments?: { [key: string]: string };

  /**
   * @schema GlueAction#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema GlueAction#SecurityConfiguration
   */
  readonly securityConfiguration?: string;

  /**
   * @schema GlueAction#NotificationProperty
   */
  readonly notificationProperty?: GlueNotificationProperty;

  /**
   * @schema GlueAction#CrawlerName
   */
  readonly crawlerName?: string;

}

/**
 * @schema GlueUserDefinedFunctionInput
 */
export interface GlueUserDefinedFunctionInput {
  /**
   * @schema GlueUserDefinedFunctionInput#FunctionName
   */
  readonly functionName?: string;

  /**
   * @schema GlueUserDefinedFunctionInput#ClassName
   */
  readonly className?: string;

  /**
   * @schema GlueUserDefinedFunctionInput#OwnerName
   */
  readonly ownerName?: string;

  /**
   * @schema GlueUserDefinedFunctionInput#OwnerType
   */
  readonly ownerType?: string;

  /**
   * @schema GlueUserDefinedFunctionInput#ResourceUris
   */
  readonly resourceUris?: GlueResourceUri[];

}

/**
 * @schema GlueSchemaId
 */
export interface GlueSchemaId {
  /**
   * @schema GlueSchemaId#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema GlueSchemaId#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema GlueSchemaId#RegistryName
   */
  readonly registryName?: string;

}

/**
 * @schema GlueSchemaVersionErrorItem
 */
export interface GlueSchemaVersionErrorItem {
  /**
   * @schema GlueSchemaVersionErrorItem#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema GlueSchemaVersionErrorItem#ErrorDetails
   */
  readonly errorDetails?: GlueErrorDetails;

}

/**
 * @schema GlueCatalogImportStatus
 */
export interface GlueCatalogImportStatus {
  /**
   * @schema GlueCatalogImportStatus#ImportCompleted
   */
  readonly importCompleted?: boolean;

  /**
   * @schema GlueCatalogImportStatus#ImportTime
   */
  readonly importTime?: string;

  /**
   * @schema GlueCatalogImportStatus#ImportedBy
   */
  readonly importedBy?: string;

}

/**
 * @schema GlueClassifier
 */
export interface GlueClassifier {
  /**
   * @schema GlueClassifier#GrokClassifier
   */
  readonly grokClassifier?: GlueGrokClassifier;

  /**
   * @schema GlueClassifier#XMLClassifier
   */
  readonly xmlClassifier?: GlueXmlClassifier;

  /**
   * @schema GlueClassifier#JsonClassifier
   */
  readonly jsonClassifier?: GlueJsonClassifier;

  /**
   * @schema GlueClassifier#CsvClassifier
   */
  readonly csvClassifier?: GlueCsvClassifier;

}

/**
 * @schema GlueColumnStatistics
 */
export interface GlueColumnStatistics {
  /**
   * @schema GlueColumnStatistics#ColumnName
   */
  readonly columnName: string;

  /**
   * @schema GlueColumnStatistics#ColumnType
   */
  readonly columnType: string;

  /**
   * @schema GlueColumnStatistics#AnalyzedTime
   */
  readonly analyzedTime: string;

  /**
   * @schema GlueColumnStatistics#StatisticsData
   */
  readonly statisticsData: GlueColumnStatisticsData;

}

/**
 * @schema GlueColumnError
 */
export interface GlueColumnError {
  /**
   * @schema GlueColumnError#ColumnName
   */
  readonly columnName?: string;

  /**
   * @schema GlueColumnError#Error
   */
  readonly error?: GlueErrorDetail;

}

/**
 * @schema GlueConnection
 */
export interface GlueConnection {
  /**
   * @schema GlueConnection#Name
   */
  readonly name?: string;

  /**
   * @schema GlueConnection#Description
   */
  readonly description?: string;

  /**
   * @schema GlueConnection#ConnectionType
   */
  readonly connectionType?: string;

  /**
   * @schema GlueConnection#MatchCriteria
   */
  readonly matchCriteria?: string[];

  /**
   * @schema GlueConnection#ConnectionProperties
   */
  readonly connectionProperties?: { [key: string]: string };

  /**
   * @schema GlueConnection#PhysicalConnectionRequirements
   */
  readonly physicalConnectionRequirements?: GluePhysicalConnectionRequirements;

  /**
   * @schema GlueConnection#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema GlueConnection#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema GlueConnection#LastUpdatedBy
   */
  readonly lastUpdatedBy?: string;

}

/**
 * @schema GlueGetConnectionsFilter
 */
export interface GlueGetConnectionsFilter {
  /**
   * @schema GlueGetConnectionsFilter#MatchCriteria
   */
  readonly matchCriteria?: string[];

  /**
   * @schema GlueGetConnectionsFilter#ConnectionType
   */
  readonly connectionType?: string;

}

/**
 * @schema GlueCrawlerMetrics
 */
export interface GlueCrawlerMetrics {
  /**
   * @schema GlueCrawlerMetrics#CrawlerName
   */
  readonly crawlerName?: string;

  /**
   * @schema GlueCrawlerMetrics#TimeLeftSeconds
   */
  readonly timeLeftSeconds?: number;

  /**
   * @schema GlueCrawlerMetrics#StillEstimating
   */
  readonly stillEstimating?: boolean;

  /**
   * @schema GlueCrawlerMetrics#LastRuntimeSeconds
   */
  readonly lastRuntimeSeconds?: number;

  /**
   * @schema GlueCrawlerMetrics#MedianRuntimeSeconds
   */
  readonly medianRuntimeSeconds?: number;

  /**
   * @schema GlueCrawlerMetrics#TablesCreated
   */
  readonly tablesCreated?: number;

  /**
   * @schema GlueCrawlerMetrics#TablesUpdated
   */
  readonly tablesUpdated?: number;

  /**
   * @schema GlueCrawlerMetrics#TablesDeleted
   */
  readonly tablesDeleted?: number;

}

/**
 * @schema GlueDataCatalogEncryptionSettings
 */
export interface GlueDataCatalogEncryptionSettings {
  /**
   * @schema GlueDataCatalogEncryptionSettings#EncryptionAtRest
   */
  readonly encryptionAtRest?: GlueEncryptionAtRest;

  /**
   * @schema GlueDataCatalogEncryptionSettings#ConnectionPasswordEncryption
   */
  readonly connectionPasswordEncryption?: GlueConnectionPasswordEncryption;

}

/**
 * @schema GlueDatabase
 */
export interface GlueDatabase {
  /**
   * @schema GlueDatabase#Name
   */
  readonly name: string;

  /**
   * @schema GlueDatabase#Description
   */
  readonly description?: string;

  /**
   * @schema GlueDatabase#LocationUri
   */
  readonly locationUri?: string;

  /**
   * @schema GlueDatabase#Parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema GlueDatabase#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema GlueDatabase#CreateTableDefaultPermissions
   */
  readonly createTableDefaultPermissions?: GluePrincipalPermissions[];

  /**
   * @schema GlueDatabase#TargetDatabase
   */
  readonly targetDatabase?: GlueDatabaseIdentifier;

  /**
   * @schema GlueDatabase#CatalogId
   */
  readonly catalogId?: string;

}

/**
 * @schema GlueJobBookmarkEntry
 */
export interface GlueJobBookmarkEntry {
  /**
   * @schema GlueJobBookmarkEntry#JobName
   */
  readonly jobName?: string;

  /**
   * @schema GlueJobBookmarkEntry#Version
   */
  readonly version?: number;

  /**
   * @schema GlueJobBookmarkEntry#Run
   */
  readonly run?: number;

  /**
   * @schema GlueJobBookmarkEntry#Attempt
   */
  readonly attempt?: number;

  /**
   * @schema GlueJobBookmarkEntry#PreviousRunId
   */
  readonly previousRunId?: string;

  /**
   * @schema GlueJobBookmarkEntry#RunId
   */
  readonly runId?: string;

  /**
   * @schema GlueJobBookmarkEntry#JobBookmark
   */
  readonly jobBookmark?: string;

}

/**
 * @schema GlueJobRun
 */
export interface GlueJobRun {
  /**
   * @schema GlueJobRun#Id
   */
  readonly id?: string;

  /**
   * @schema GlueJobRun#Attempt
   */
  readonly attempt?: number;

  /**
   * @schema GlueJobRun#PreviousRunId
   */
  readonly previousRunId?: string;

  /**
   * @schema GlueJobRun#TriggerName
   */
  readonly triggerName?: string;

  /**
   * @schema GlueJobRun#JobName
   */
  readonly jobName?: string;

  /**
   * @schema GlueJobRun#StartedOn
   */
  readonly startedOn?: string;

  /**
   * @schema GlueJobRun#LastModifiedOn
   */
  readonly lastModifiedOn?: string;

  /**
   * @schema GlueJobRun#CompletedOn
   */
  readonly completedOn?: string;

  /**
   * @schema GlueJobRun#JobRunState
   */
  readonly jobRunState?: string;

  /**
   * @schema GlueJobRun#Arguments
   */
  readonly arguments?: { [key: string]: string };

  /**
   * @schema GlueJobRun#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema GlueJobRun#PredecessorRuns
   */
  readonly predecessorRuns?: GluePredecessor[];

  /**
   * @schema GlueJobRun#AllocatedCapacity
   */
  readonly allocatedCapacity?: number;

  /**
   * @schema GlueJobRun#ExecutionTime
   */
  readonly executionTime?: number;

  /**
   * @schema GlueJobRun#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema GlueJobRun#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema GlueJobRun#WorkerType
   */
  readonly workerType?: string;

  /**
   * @schema GlueJobRun#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

  /**
   * @schema GlueJobRun#SecurityConfiguration
   */
  readonly securityConfiguration?: string;

  /**
   * @schema GlueJobRun#LogGroupName
   */
  readonly logGroupName?: string;

  /**
   * @schema GlueJobRun#NotificationProperty
   */
  readonly notificationProperty?: GlueNotificationProperty;

  /**
   * @schema GlueJobRun#GlueVersion
   */
  readonly glueVersion?: string;

}

/**
 * @schema GlueTaskRunProperties
 */
export interface GlueTaskRunProperties {
  /**
   * @schema GlueTaskRunProperties#TaskType
   */
  readonly taskType?: string;

  /**
   * @schema GlueTaskRunProperties#ImportLabelsTaskRunProperties
   */
  readonly importLabelsTaskRunProperties?: GlueImportLabelsTaskRunProperties;

  /**
   * @schema GlueTaskRunProperties#ExportLabelsTaskRunProperties
   */
  readonly exportLabelsTaskRunProperties?: GlueExportLabelsTaskRunProperties;

  /**
   * @schema GlueTaskRunProperties#LabelingSetGenerationTaskRunProperties
   */
  readonly labelingSetGenerationTaskRunProperties?: GlueLabelingSetGenerationTaskRunProperties;

  /**
   * @schema GlueTaskRunProperties#FindMatchesTaskRunProperties
   */
  readonly findMatchesTaskRunProperties?: GlueFindMatchesTaskRunProperties;

}

/**
 * @schema GlueTaskRunFilterCriteria
 */
export interface GlueTaskRunFilterCriteria {
  /**
   * @schema GlueTaskRunFilterCriteria#TaskRunType
   */
  readonly taskRunType?: string;

  /**
   * @schema GlueTaskRunFilterCriteria#Status
   */
  readonly status?: string;

  /**
   * @schema GlueTaskRunFilterCriteria#StartedBefore
   */
  readonly startedBefore?: string;

  /**
   * @schema GlueTaskRunFilterCriteria#StartedAfter
   */
  readonly startedAfter?: string;

}

/**
 * @schema GlueTaskRunSortCriteria
 */
export interface GlueTaskRunSortCriteria {
  /**
   * @schema GlueTaskRunSortCriteria#Column
   */
  readonly column: string;

  /**
   * @schema GlueTaskRunSortCriteria#SortDirection
   */
  readonly sortDirection: string;

}

/**
 * @schema GlueTaskRun
 */
export interface GlueTaskRun {
  /**
   * @schema GlueTaskRun#TransformId
   */
  readonly transformId?: string;

  /**
   * @schema GlueTaskRun#TaskRunId
   */
  readonly taskRunId?: string;

  /**
   * @schema GlueTaskRun#Status
   */
  readonly status?: string;

  /**
   * @schema GlueTaskRun#LogGroupName
   */
  readonly logGroupName?: string;

  /**
   * @schema GlueTaskRun#Properties
   */
  readonly properties?: GlueTaskRunProperties;

  /**
   * @schema GlueTaskRun#ErrorString
   */
  readonly errorString?: string;

  /**
   * @schema GlueTaskRun#StartedOn
   */
  readonly startedOn?: string;

  /**
   * @schema GlueTaskRun#LastModifiedOn
   */
  readonly lastModifiedOn?: string;

  /**
   * @schema GlueTaskRun#CompletedOn
   */
  readonly completedOn?: string;

  /**
   * @schema GlueTaskRun#ExecutionTime
   */
  readonly executionTime?: number;

}

/**
 * @schema GlueEvaluationMetrics
 */
export interface GlueEvaluationMetrics {
  /**
   * @schema GlueEvaluationMetrics#TransformType
   */
  readonly transformType: string;

  /**
   * @schema GlueEvaluationMetrics#FindMatchesMetrics
   */
  readonly findMatchesMetrics?: GlueFindMatchesMetrics;

}

/**
 * @schema GlueSchemaColumn
 */
export interface GlueSchemaColumn {
  /**
   * @schema GlueSchemaColumn#Name
   */
  readonly name?: string;

  /**
   * @schema GlueSchemaColumn#DataType
   */
  readonly dataType?: string;

}

/**
 * @schema GlueTransformFilterCriteria
 */
export interface GlueTransformFilterCriteria {
  /**
   * @schema GlueTransformFilterCriteria#Name
   */
  readonly name?: string;

  /**
   * @schema GlueTransformFilterCriteria#TransformType
   */
  readonly transformType?: string;

  /**
   * @schema GlueTransformFilterCriteria#Status
   */
  readonly status?: string;

  /**
   * @schema GlueTransformFilterCriteria#GlueVersion
   */
  readonly glueVersion?: string;

  /**
   * @schema GlueTransformFilterCriteria#CreatedBefore
   */
  readonly createdBefore?: string;

  /**
   * @schema GlueTransformFilterCriteria#CreatedAfter
   */
  readonly createdAfter?: string;

  /**
   * @schema GlueTransformFilterCriteria#LastModifiedBefore
   */
  readonly lastModifiedBefore?: string;

  /**
   * @schema GlueTransformFilterCriteria#LastModifiedAfter
   */
  readonly lastModifiedAfter?: string;

  /**
   * @schema GlueTransformFilterCriteria#Schema
   */
  readonly schema?: GlueSchemaColumn[];

}

/**
 * @schema GlueTransformSortCriteria
 */
export interface GlueTransformSortCriteria {
  /**
   * @schema GlueTransformSortCriteria#Column
   */
  readonly column: string;

  /**
   * @schema GlueTransformSortCriteria#SortDirection
   */
  readonly sortDirection: string;

}

/**
 * @schema GlueMlTransform
 */
export interface GlueMlTransform {
  /**
   * @schema GlueMlTransform#TransformId
   */
  readonly transformId?: string;

  /**
   * @schema GlueMlTransform#Name
   */
  readonly name?: string;

  /**
   * @schema GlueMlTransform#Description
   */
  readonly description?: string;

  /**
   * @schema GlueMlTransform#Status
   */
  readonly status?: string;

  /**
   * @schema GlueMlTransform#CreatedOn
   */
  readonly createdOn?: string;

  /**
   * @schema GlueMlTransform#LastModifiedOn
   */
  readonly lastModifiedOn?: string;

  /**
   * @schema GlueMlTransform#InputRecordTables
   */
  readonly inputRecordTables?: GlueGlueTable[];

  /**
   * @schema GlueMlTransform#Parameters
   */
  readonly parameters?: GlueTransformParameters;

  /**
   * @schema GlueMlTransform#EvaluationMetrics
   */
  readonly evaluationMetrics?: GlueEvaluationMetrics;

  /**
   * @schema GlueMlTransform#LabelCount
   */
  readonly labelCount?: number;

  /**
   * @schema GlueMlTransform#Schema
   */
  readonly schema?: GlueSchemaColumn[];

  /**
   * @schema GlueMlTransform#Role
   */
  readonly role?: string;

  /**
   * @schema GlueMlTransform#GlueVersion
   */
  readonly glueVersion?: string;

  /**
   * @schema GlueMlTransform#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema GlueMlTransform#WorkerType
   */
  readonly workerType?: string;

  /**
   * @schema GlueMlTransform#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

  /**
   * @schema GlueMlTransform#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema GlueMlTransform#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema GlueMlTransform#TransformEncryption
   */
  readonly transformEncryption?: GlueTransformEncryption;

}

/**
 * @schema GlueCatalogEntry
 */
export interface GlueCatalogEntry {
  /**
   * @schema GlueCatalogEntry#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueCatalogEntry#TableName
   */
  readonly tableName: string;

}

/**
 * @schema GlueLocation
 */
export interface GlueLocation {
  /**
   * @schema GlueLocation#Jdbc
   */
  readonly jdbc?: GlueCodeGenNodeArg[];

  /**
   * @schema GlueLocation#S3
   */
  readonly s3?: GlueCodeGenNodeArg[];

  /**
   * @schema GlueLocation#DynamoDB
   */
  readonly dynamoDb?: GlueCodeGenNodeArg[];

}

/**
 * @schema GlueMappingEntry
 */
export interface GlueMappingEntry {
  /**
   * @schema GlueMappingEntry#SourceTable
   */
  readonly sourceTable?: string;

  /**
   * @schema GlueMappingEntry#SourcePath
   */
  readonly sourcePath?: string;

  /**
   * @schema GlueMappingEntry#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema GlueMappingEntry#TargetTable
   */
  readonly targetTable?: string;

  /**
   * @schema GlueMappingEntry#TargetPath
   */
  readonly targetPath?: string;

  /**
   * @schema GlueMappingEntry#TargetType
   */
  readonly targetType?: string;

}

/**
 * @schema GluePartitionIndexDescriptor
 */
export interface GluePartitionIndexDescriptor {
  /**
   * @schema GluePartitionIndexDescriptor#IndexName
   */
  readonly indexName: string;

  /**
   * @schema GluePartitionIndexDescriptor#Keys
   */
  readonly keys: GlueKeySchemaElement[];

  /**
   * @schema GluePartitionIndexDescriptor#IndexStatus
   */
  readonly indexStatus: string;

  /**
   * @schema GluePartitionIndexDescriptor#BackfillErrors
   */
  readonly backfillErrors?: GlueBackfillError[];

}

/**
 * @schema GlueSegment
 */
export interface GlueSegment {
  /**
   * @schema GlueSegment#SegmentNumber
   */
  readonly segmentNumber: number;

  /**
   * @schema GlueSegment#TotalSegments
   */
  readonly totalSegments: number;

}

/**
 * @schema GlueGluePolicy
 */
export interface GlueGluePolicy {
  /**
   * @schema GlueGluePolicy#PolicyInJson
   */
  readonly policyInJson?: string;

  /**
   * @schema GlueGluePolicy#PolicyHash
   */
  readonly policyHash?: string;

  /**
   * @schema GlueGluePolicy#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema GlueGluePolicy#UpdateTime
   */
  readonly updateTime?: string;

}

/**
 * @schema GlueSchemaVersionNumber
 */
export interface GlueSchemaVersionNumber {
  /**
   * @schema GlueSchemaVersionNumber#LatestVersion
   */
  readonly latestVersion?: boolean;

  /**
   * @schema GlueSchemaVersionNumber#VersionNumber
   */
  readonly versionNumber?: number;

}

/**
 * @schema GlueSecurityConfiguration
 */
export interface GlueSecurityConfiguration {
  /**
   * @schema GlueSecurityConfiguration#Name
   */
  readonly name?: string;

  /**
   * @schema GlueSecurityConfiguration#CreatedTimeStamp
   */
  readonly createdTimeStamp?: string;

  /**
   * @schema GlueSecurityConfiguration#EncryptionConfiguration
   */
  readonly encryptionConfiguration?: GlueEncryptionConfiguration;

}

/**
 * @schema GlueTable
 */
export interface GlueTable {
  /**
   * @schema GlueTable#Name
   */
  readonly name: string;

  /**
   * @schema GlueTable#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueTable#Description
   */
  readonly description?: string;

  /**
   * @schema GlueTable#Owner
   */
  readonly owner?: string;

  /**
   * @schema GlueTable#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema GlueTable#UpdateTime
   */
  readonly updateTime?: string;

  /**
   * @schema GlueTable#LastAccessTime
   */
  readonly lastAccessTime?: string;

  /**
   * @schema GlueTable#LastAnalyzedTime
   */
  readonly lastAnalyzedTime?: string;

  /**
   * @schema GlueTable#Retention
   */
  readonly retention?: number;

  /**
   * @schema GlueTable#StorageDescriptor
   */
  readonly storageDescriptor?: GlueStorageDescriptor;

  /**
   * @schema GlueTable#PartitionKeys
   */
  readonly partitionKeys?: GlueColumn[];

  /**
   * @schema GlueTable#ViewOriginalText
   */
  readonly viewOriginalText?: string;

  /**
   * @schema GlueTable#ViewExpandedText
   */
  readonly viewExpandedText?: string;

  /**
   * @schema GlueTable#TableType
   */
  readonly tableType?: string;

  /**
   * @schema GlueTable#Parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema GlueTable#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema GlueTable#IsRegisteredWithLakeFormation
   */
  readonly isRegisteredWithLakeFormation?: boolean;

  /**
   * @schema GlueTable#TargetTable
   */
  readonly targetTable?: GlueTableIdentifier;

  /**
   * @schema GlueTable#CatalogId
   */
  readonly catalogId?: string;

}

/**
 * @schema GlueTableVersion
 */
export interface GlueTableVersion {
  /**
   * @schema GlueTableVersion#Table
   */
  readonly table?: GlueTable;

  /**
   * @schema GlueTableVersion#VersionId
   */
  readonly versionId?: string;

}

/**
 * @schema GlueUserDefinedFunction
 */
export interface GlueUserDefinedFunction {
  /**
   * @schema GlueUserDefinedFunction#FunctionName
   */
  readonly functionName?: string;

  /**
   * @schema GlueUserDefinedFunction#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueUserDefinedFunction#ClassName
   */
  readonly className?: string;

  /**
   * @schema GlueUserDefinedFunction#OwnerName
   */
  readonly ownerName?: string;

  /**
   * @schema GlueUserDefinedFunction#OwnerType
   */
  readonly ownerType?: string;

  /**
   * @schema GlueUserDefinedFunction#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema GlueUserDefinedFunction#ResourceUris
   */
  readonly resourceUris?: GlueResourceUri[];

  /**
   * @schema GlueUserDefinedFunction#CatalogId
   */
  readonly catalogId?: string;

}

/**
 * @schema GlueWorkflowRun
 */
export interface GlueWorkflowRun {
  /**
   * @schema GlueWorkflowRun#Name
   */
  readonly name?: string;

  /**
   * @schema GlueWorkflowRun#WorkflowRunId
   */
  readonly workflowRunId?: string;

  /**
   * @schema GlueWorkflowRun#PreviousRunId
   */
  readonly previousRunId?: string;

  /**
   * @schema GlueWorkflowRun#WorkflowRunProperties
   */
  readonly workflowRunProperties?: { [key: string]: string };

  /**
   * @schema GlueWorkflowRun#StartedOn
   */
  readonly startedOn?: string;

  /**
   * @schema GlueWorkflowRun#CompletedOn
   */
  readonly completedOn?: string;

  /**
   * @schema GlueWorkflowRun#Status
   */
  readonly status?: string;

  /**
   * @schema GlueWorkflowRun#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema GlueWorkflowRun#Statistics
   */
  readonly statistics?: GlueWorkflowRunStatistics;

  /**
   * @schema GlueWorkflowRun#Graph
   */
  readonly graph?: GlueWorkflowGraph;

}

/**
 * @schema GlueRegistryListItem
 */
export interface GlueRegistryListItem {
  /**
   * @schema GlueRegistryListItem#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema GlueRegistryListItem#RegistryArn
   */
  readonly registryArn?: string;

  /**
   * @schema GlueRegistryListItem#Description
   */
  readonly description?: string;

  /**
   * @schema GlueRegistryListItem#Status
   */
  readonly status?: string;

  /**
   * @schema GlueRegistryListItem#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema GlueRegistryListItem#UpdatedTime
   */
  readonly updatedTime?: string;

}

/**
 * @schema GlueSchemaVersionListItem
 */
export interface GlueSchemaVersionListItem {
  /**
   * @schema GlueSchemaVersionListItem#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema GlueSchemaVersionListItem#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema GlueSchemaVersionListItem#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema GlueSchemaVersionListItem#Status
   */
  readonly status?: string;

  /**
   * @schema GlueSchemaVersionListItem#CreatedTime
   */
  readonly createdTime?: string;

}

/**
 * @schema GlueSchemaListItem
 */
export interface GlueSchemaListItem {
  /**
   * @schema GlueSchemaListItem#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema GlueSchemaListItem#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema GlueSchemaListItem#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema GlueSchemaListItem#Description
   */
  readonly description?: string;

  /**
   * @schema GlueSchemaListItem#SchemaStatus
   */
  readonly schemaStatus?: string;

  /**
   * @schema GlueSchemaListItem#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema GlueSchemaListItem#UpdatedTime
   */
  readonly updatedTime?: string;

}

/**
 * @schema GlueMetadataKeyValuePair
 */
export interface GlueMetadataKeyValuePair {
  /**
   * @schema GlueMetadataKeyValuePair#MetadataKey
   */
  readonly metadataKey?: string;

  /**
   * @schema GlueMetadataKeyValuePair#MetadataValue
   */
  readonly metadataValue?: string;

}

/**
 * @schema GlueMetadataInfo
 */
export interface GlueMetadataInfo {
  /**
   * @schema GlueMetadataInfo#MetadataValue
   */
  readonly metadataValue?: string;

  /**
   * @schema GlueMetadataInfo#CreatedTime
   */
  readonly createdTime?: string;

}

/**
 * @schema GluePropertyPredicate
 */
export interface GluePropertyPredicate {
  /**
   * @schema GluePropertyPredicate#Key
   */
  readonly key?: string;

  /**
   * @schema GluePropertyPredicate#Value
   */
  readonly value?: string;

  /**
   * @schema GluePropertyPredicate#Comparator
   */
  readonly comparator?: string;

}

/**
 * @schema GlueSortCriterion
 */
export interface GlueSortCriterion {
  /**
   * @schema GlueSortCriterion#FieldName
   */
  readonly fieldName?: string;

  /**
   * @schema GlueSortCriterion#Sort
   */
  readonly sort?: string;

}

/**
 * @schema GlueUpdateGrokClassifierRequest
 */
export interface GlueUpdateGrokClassifierRequest {
  /**
   * @schema GlueUpdateGrokClassifierRequest#Name
   */
  readonly name: string;

  /**
   * @schema GlueUpdateGrokClassifierRequest#Classification
   */
  readonly classification?: string;

  /**
   * @schema GlueUpdateGrokClassifierRequest#GrokPattern
   */
  readonly grokPattern?: string;

  /**
   * @schema GlueUpdateGrokClassifierRequest#CustomPatterns
   */
  readonly customPatterns?: string;

}

/**
 * @schema GlueUpdateXmlClassifierRequest
 */
export interface GlueUpdateXmlClassifierRequest {
  /**
   * @schema GlueUpdateXmlClassifierRequest#Name
   */
  readonly name: string;

  /**
   * @schema GlueUpdateXmlClassifierRequest#Classification
   */
  readonly classification?: string;

  /**
   * @schema GlueUpdateXmlClassifierRequest#RowTag
   */
  readonly rowTag?: string;

}

/**
 * @schema GlueUpdateJsonClassifierRequest
 */
export interface GlueUpdateJsonClassifierRequest {
  /**
   * @schema GlueUpdateJsonClassifierRequest#Name
   */
  readonly name: string;

  /**
   * @schema GlueUpdateJsonClassifierRequest#JsonPath
   */
  readonly jsonPath?: string;

}

/**
 * @schema GlueUpdateCsvClassifierRequest
 */
export interface GlueUpdateCsvClassifierRequest {
  /**
   * @schema GlueUpdateCsvClassifierRequest#Name
   */
  readonly name: string;

  /**
   * @schema GlueUpdateCsvClassifierRequest#Delimiter
   */
  readonly delimiter?: string;

  /**
   * @schema GlueUpdateCsvClassifierRequest#QuoteSymbol
   */
  readonly quoteSymbol?: string;

  /**
   * @schema GlueUpdateCsvClassifierRequest#ContainsHeader
   */
  readonly containsHeader?: string;

  /**
   * @schema GlueUpdateCsvClassifierRequest#Header
   */
  readonly header?: string[];

  /**
   * @schema GlueUpdateCsvClassifierRequest#DisableValueTrimming
   */
  readonly disableValueTrimming?: boolean;

  /**
   * @schema GlueUpdateCsvClassifierRequest#AllowSingleColumn
   */
  readonly allowSingleColumn?: boolean;

}

/**
 * @schema GlueColumnStatisticsError
 */
export interface GlueColumnStatisticsError {
  /**
   * @schema GlueColumnStatisticsError#ColumnStatistics
   */
  readonly columnStatistics?: GlueColumnStatistics;

  /**
   * @schema GlueColumnStatisticsError#Error
   */
  readonly error?: GlueErrorDetail;

}

/**
 * @schema GlueDevEndpointCustomLibraries
 */
export interface GlueDevEndpointCustomLibraries {
  /**
   * @schema GlueDevEndpointCustomLibraries#ExtraPythonLibsS3Path
   */
  readonly extraPythonLibsS3Path?: string;

  /**
   * @schema GlueDevEndpointCustomLibraries#ExtraJarsS3Path
   */
  readonly extraJarsS3Path?: string;

}

/**
 * @schema GlueJobUpdate
 */
export interface GlueJobUpdate {
  /**
   * @schema GlueJobUpdate#Description
   */
  readonly description?: string;

  /**
   * @schema GlueJobUpdate#LogUri
   */
  readonly logUri?: string;

  /**
   * @schema GlueJobUpdate#Role
   */
  readonly role?: string;

  /**
   * @schema GlueJobUpdate#ExecutionProperty
   */
  readonly executionProperty?: GlueExecutionProperty;

  /**
   * @schema GlueJobUpdate#Command
   */
  readonly command?: GlueJobCommand;

  /**
   * @schema GlueJobUpdate#DefaultArguments
   */
  readonly defaultArguments?: { [key: string]: string };

  /**
   * @schema GlueJobUpdate#NonOverridableArguments
   */
  readonly nonOverridableArguments?: { [key: string]: string };

  /**
   * @schema GlueJobUpdate#Connections
   */
  readonly connections?: GlueConnectionsList;

  /**
   * @schema GlueJobUpdate#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema GlueJobUpdate#AllocatedCapacity
   */
  readonly allocatedCapacity?: number;

  /**
   * @schema GlueJobUpdate#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema GlueJobUpdate#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema GlueJobUpdate#WorkerType
   */
  readonly workerType?: string;

  /**
   * @schema GlueJobUpdate#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

  /**
   * @schema GlueJobUpdate#SecurityConfiguration
   */
  readonly securityConfiguration?: string;

  /**
   * @schema GlueJobUpdate#NotificationProperty
   */
  readonly notificationProperty?: GlueNotificationProperty;

  /**
   * @schema GlueJobUpdate#GlueVersion
   */
  readonly glueVersion?: string;

}

/**
 * @schema GlueTriggerUpdate
 */
export interface GlueTriggerUpdate {
  /**
   * @schema GlueTriggerUpdate#Name
   */
  readonly name?: string;

  /**
   * @schema GlueTriggerUpdate#Description
   */
  readonly description?: string;

  /**
   * @schema GlueTriggerUpdate#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema GlueTriggerUpdate#Actions
   */
  readonly actions?: GlueAction[];

  /**
   * @schema GlueTriggerUpdate#Predicate
   */
  readonly predicate?: GluePredicate;

}

/**
 * @schema GlueStorageDescriptor
 */
export interface GlueStorageDescriptor {
  /**
   * @schema GlueStorageDescriptor#Columns
   */
  readonly columns?: GlueColumn[];

  /**
   * @schema GlueStorageDescriptor#Location
   */
  readonly location?: string;

  /**
   * @schema GlueStorageDescriptor#InputFormat
   */
  readonly inputFormat?: string;

  /**
   * @schema GlueStorageDescriptor#OutputFormat
   */
  readonly outputFormat?: string;

  /**
   * @schema GlueStorageDescriptor#Compressed
   */
  readonly compressed?: boolean;

  /**
   * @schema GlueStorageDescriptor#NumberOfBuckets
   */
  readonly numberOfBuckets?: number;

  /**
   * @schema GlueStorageDescriptor#SerdeInfo
   */
  readonly serdeInfo?: GlueSerDeInfo;

  /**
   * @schema GlueStorageDescriptor#BucketColumns
   */
  readonly bucketColumns?: string[];

  /**
   * @schema GlueStorageDescriptor#SortColumns
   */
  readonly sortColumns?: GlueOrder[];

  /**
   * @schema GlueStorageDescriptor#Parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema GlueStorageDescriptor#SkewedInfo
   */
  readonly skewedInfo?: GlueSkewedInfo;

  /**
   * @schema GlueStorageDescriptor#StoredAsSubDirectories
   */
  readonly storedAsSubDirectories?: boolean;

  /**
   * @schema GlueStorageDescriptor#SchemaReference
   */
  readonly schemaReference?: GlueSchemaReference;

}

/**
 * @schema GlueSchedule
 */
export interface GlueSchedule {
  /**
   * @schema GlueSchedule#ScheduleExpression
   */
  readonly scheduleExpression?: string;

  /**
   * @schema GlueSchedule#State
   */
  readonly state?: string;

}

/**
 * @schema GlueLastCrawlInfo
 */
export interface GlueLastCrawlInfo {
  /**
   * @schema GlueLastCrawlInfo#Status
   */
  readonly status?: string;

  /**
   * @schema GlueLastCrawlInfo#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema GlueLastCrawlInfo#LogGroup
   */
  readonly logGroup?: string;

  /**
   * @schema GlueLastCrawlInfo#LogStream
   */
  readonly logStream?: string;

  /**
   * @schema GlueLastCrawlInfo#MessagePrefix
   */
  readonly messagePrefix?: string;

  /**
   * @schema GlueLastCrawlInfo#StartTime
   */
  readonly startTime?: string;

}

/**
 * @schema GlueWorkflowGraph
 */
export interface GlueWorkflowGraph {
  /**
   * @schema GlueWorkflowGraph#Nodes
   */
  readonly nodes?: GlueNode[];

  /**
   * @schema GlueWorkflowGraph#Edges
   */
  readonly edges?: GlueEdge[];

}

/**
 * @schema GluePhysicalConnectionRequirements
 */
export interface GluePhysicalConnectionRequirements {
  /**
   * @schema GluePhysicalConnectionRequirements#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema GluePhysicalConnectionRequirements#SecurityGroupIdList
   */
  readonly securityGroupIdList?: string[];

  /**
   * @schema GluePhysicalConnectionRequirements#AvailabilityZone
   */
  readonly availabilityZone?: string;

}

/**
 * @schema GlueS3Target
 */
export interface GlueS3Target {
  /**
   * @schema GlueS3Target#Path
   */
  readonly path?: string;

  /**
   * @schema GlueS3Target#Exclusions
   */
  readonly exclusions?: string[];

  /**
   * @schema GlueS3Target#ConnectionName
   */
  readonly connectionName?: string;

}

/**
 * @schema GlueJdbcTarget
 */
export interface GlueJdbcTarget {
  /**
   * @schema GlueJdbcTarget#ConnectionName
   */
  readonly connectionName?: string;

  /**
   * @schema GlueJdbcTarget#Path
   */
  readonly path?: string;

  /**
   * @schema GlueJdbcTarget#Exclusions
   */
  readonly exclusions?: string[];

}

/**
 * @schema GlueMongoDbTarget
 */
export interface GlueMongoDbTarget {
  /**
   * @schema GlueMongoDbTarget#ConnectionName
   */
  readonly connectionName?: string;

  /**
   * @schema GlueMongoDbTarget#Path
   */
  readonly path?: string;

  /**
   * @schema GlueMongoDbTarget#ScanAll
   */
  readonly scanAll?: boolean;

}

/**
 * @schema GlueDynamoDbTarget
 */
export interface GlueDynamoDbTarget {
  /**
   * @schema GlueDynamoDbTarget#Path
   */
  readonly path?: string;

  /**
   * @schema GlueDynamoDbTarget#scanAll
   */
  readonly scanAll?: boolean;

  /**
   * @schema GlueDynamoDbTarget#scanRate
   */
  readonly scanRate?: number;

}

/**
 * @schema GlueCatalogTarget
 */
export interface GlueCatalogTarget {
  /**
   * @schema GlueCatalogTarget#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueCatalogTarget#Tables
   */
  readonly tables: string[];

}

/**
 * @schema GluePrincipalPermissions
 */
export interface GluePrincipalPermissions {
  /**
   * @schema GluePrincipalPermissions#Principal
   */
  readonly principal?: GlueDataLakePrincipal;

  /**
   * @schema GluePrincipalPermissions#Permissions
   */
  readonly permissions?: string[];

}

/**
 * @schema GlueDatabaseIdentifier
 */
export interface GlueDatabaseIdentifier {
  /**
   * @schema GlueDatabaseIdentifier#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueDatabaseIdentifier#DatabaseName
   */
  readonly databaseName?: string;

}

/**
 * @schema GlueFindMatchesParameters
 */
export interface GlueFindMatchesParameters {
  /**
   * @schema GlueFindMatchesParameters#PrimaryKeyColumnName
   */
  readonly primaryKeyColumnName?: string;

  /**
   * @schema GlueFindMatchesParameters#PrecisionRecallTradeoff
   */
  readonly precisionRecallTradeoff?: number;

  /**
   * @schema GlueFindMatchesParameters#AccuracyCostTradeoff
   */
  readonly accuracyCostTradeoff?: number;

  /**
   * @schema GlueFindMatchesParameters#EnforceProvidedLabels
   */
  readonly enforceProvidedLabels?: boolean;

}

/**
 * @schema GlueMlUserDataEncryption
 */
export interface GlueMlUserDataEncryption {
  /**
   * @schema GlueMlUserDataEncryption#MlUserDataEncryptionMode
   */
  readonly mlUserDataEncryptionMode: string;

  /**
   * @schema GlueMlUserDataEncryption#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema GlueCodeGenNodeArg
 */
export interface GlueCodeGenNodeArg {
  /**
   * @schema GlueCodeGenNodeArg#Name
   */
  readonly name: string;

  /**
   * @schema GlueCodeGenNodeArg#Value
   */
  readonly value: string;

  /**
   * @schema GlueCodeGenNodeArg#Param
   */
  readonly param?: boolean;

}

/**
 * @schema GlueS3Encryption
 */
export interface GlueS3Encryption {
  /**
   * @schema GlueS3Encryption#S3EncryptionMode
   */
  readonly s3EncryptionMode?: string;

  /**
   * @schema GlueS3Encryption#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

}

/**
 * @schema GlueCloudWatchEncryption
 */
export interface GlueCloudWatchEncryption {
  /**
   * @schema GlueCloudWatchEncryption#CloudWatchEncryptionMode
   */
  readonly cloudWatchEncryptionMode?: string;

  /**
   * @schema GlueCloudWatchEncryption#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

}

/**
 * @schema GlueJobBookmarksEncryption
 */
export interface GlueJobBookmarksEncryption {
  /**
   * @schema GlueJobBookmarksEncryption#JobBookmarksEncryptionMode
   */
  readonly jobBookmarksEncryptionMode?: string;

  /**
   * @schema GlueJobBookmarksEncryption#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

}

/**
 * @schema GlueColumn
 */
export interface GlueColumn {
  /**
   * @schema GlueColumn#Name
   */
  readonly name: string;

  /**
   * @schema GlueColumn#Type
   */
  readonly type?: string;

  /**
   * @schema GlueColumn#Comment
   */
  readonly comment?: string;

  /**
   * @schema GlueColumn#Parameters
   */
  readonly parameters?: { [key: string]: string };

}

/**
 * @schema GlueTableIdentifier
 */
export interface GlueTableIdentifier {
  /**
   * @schema GlueTableIdentifier#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueTableIdentifier#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GlueTableIdentifier#Name
   */
  readonly name?: string;

}

/**
 * @schema GlueCondition
 */
export interface GlueCondition {
  /**
   * @schema GlueCondition#LogicalOperator
   */
  readonly logicalOperator?: string;

  /**
   * @schema GlueCondition#JobName
   */
  readonly jobName?: string;

  /**
   * @schema GlueCondition#State
   */
  readonly state?: string;

  /**
   * @schema GlueCondition#CrawlerName
   */
  readonly crawlerName?: string;

  /**
   * @schema GlueCondition#CrawlState
   */
  readonly crawlState?: string;

}

/**
 * @schema GlueResourceUri
 */
export interface GlueResourceUri {
  /**
   * @schema GlueResourceUri#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema GlueResourceUri#Uri
   */
  readonly uri?: string;

}

/**
 * @schema GlueErrorDetails
 */
export interface GlueErrorDetails {
  /**
   * @schema GlueErrorDetails#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema GlueErrorDetails#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema GlueGrokClassifier
 */
export interface GlueGrokClassifier {
  /**
   * @schema GlueGrokClassifier#Name
   */
  readonly name: string;

  /**
   * @schema GlueGrokClassifier#Classification
   */
  readonly classification: string;

  /**
   * @schema GlueGrokClassifier#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema GlueGrokClassifier#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema GlueGrokClassifier#Version
   */
  readonly version?: number;

  /**
   * @schema GlueGrokClassifier#GrokPattern
   */
  readonly grokPattern: string;

  /**
   * @schema GlueGrokClassifier#CustomPatterns
   */
  readonly customPatterns?: string;

}

/**
 * @schema GlueXmlClassifier
 */
export interface GlueXmlClassifier {
  /**
   * @schema GlueXmlClassifier#Name
   */
  readonly name: string;

  /**
   * @schema GlueXmlClassifier#Classification
   */
  readonly classification: string;

  /**
   * @schema GlueXmlClassifier#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema GlueXmlClassifier#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema GlueXmlClassifier#Version
   */
  readonly version?: number;

  /**
   * @schema GlueXmlClassifier#RowTag
   */
  readonly rowTag?: string;

}

/**
 * @schema GlueJsonClassifier
 */
export interface GlueJsonClassifier {
  /**
   * @schema GlueJsonClassifier#Name
   */
  readonly name: string;

  /**
   * @schema GlueJsonClassifier#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema GlueJsonClassifier#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema GlueJsonClassifier#Version
   */
  readonly version?: number;

  /**
   * @schema GlueJsonClassifier#JsonPath
   */
  readonly jsonPath: string;

}

/**
 * @schema GlueCsvClassifier
 */
export interface GlueCsvClassifier {
  /**
   * @schema GlueCsvClassifier#Name
   */
  readonly name: string;

  /**
   * @schema GlueCsvClassifier#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema GlueCsvClassifier#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema GlueCsvClassifier#Version
   */
  readonly version?: number;

  /**
   * @schema GlueCsvClassifier#Delimiter
   */
  readonly delimiter?: string;

  /**
   * @schema GlueCsvClassifier#QuoteSymbol
   */
  readonly quoteSymbol?: string;

  /**
   * @schema GlueCsvClassifier#ContainsHeader
   */
  readonly containsHeader?: string;

  /**
   * @schema GlueCsvClassifier#Header
   */
  readonly header?: string[];

  /**
   * @schema GlueCsvClassifier#DisableValueTrimming
   */
  readonly disableValueTrimming?: boolean;

  /**
   * @schema GlueCsvClassifier#AllowSingleColumn
   */
  readonly allowSingleColumn?: boolean;

}

/**
 * @schema GlueColumnStatisticsData
 */
export interface GlueColumnStatisticsData {
  /**
   * @schema GlueColumnStatisticsData#Type
   */
  readonly type: string;

  /**
   * @schema GlueColumnStatisticsData#BooleanColumnStatisticsData
   */
  readonly booleanColumnStatisticsData?: GlueBooleanColumnStatisticsData;

  /**
   * @schema GlueColumnStatisticsData#DateColumnStatisticsData
   */
  readonly dateColumnStatisticsData?: GlueDateColumnStatisticsData;

  /**
   * @schema GlueColumnStatisticsData#DecimalColumnStatisticsData
   */
  readonly decimalColumnStatisticsData?: GlueDecimalColumnStatisticsData;

  /**
   * @schema GlueColumnStatisticsData#DoubleColumnStatisticsData
   */
  readonly doubleColumnStatisticsData?: GlueDoubleColumnStatisticsData;

  /**
   * @schema GlueColumnStatisticsData#LongColumnStatisticsData
   */
  readonly longColumnStatisticsData?: GlueLongColumnStatisticsData;

  /**
   * @schema GlueColumnStatisticsData#StringColumnStatisticsData
   */
  readonly stringColumnStatisticsData?: GlueStringColumnStatisticsData;

  /**
   * @schema GlueColumnStatisticsData#BinaryColumnStatisticsData
   */
  readonly binaryColumnStatisticsData?: GlueBinaryColumnStatisticsData;

}

/**
 * @schema GlueEncryptionAtRest
 */
export interface GlueEncryptionAtRest {
  /**
   * @schema GlueEncryptionAtRest#CatalogEncryptionMode
   */
  readonly catalogEncryptionMode: string;

  /**
   * @schema GlueEncryptionAtRest#SseAwsKmsKeyId
   */
  readonly sseAwsKmsKeyId?: string;

}

/**
 * @schema GlueConnectionPasswordEncryption
 */
export interface GlueConnectionPasswordEncryption {
  /**
   * @schema GlueConnectionPasswordEncryption#ReturnConnectionPasswordEncrypted
   */
  readonly returnConnectionPasswordEncrypted: boolean;

  /**
   * @schema GlueConnectionPasswordEncryption#AwsKmsKeyId
   */
  readonly awsKmsKeyId?: string;

}

/**
 * @schema GluePredecessor
 */
export interface GluePredecessor {
  /**
   * @schema GluePredecessor#JobName
   */
  readonly jobName?: string;

  /**
   * @schema GluePredecessor#RunId
   */
  readonly runId?: string;

}

/**
 * @schema GlueImportLabelsTaskRunProperties
 */
export interface GlueImportLabelsTaskRunProperties {
  /**
   * @schema GlueImportLabelsTaskRunProperties#InputS3Path
   */
  readonly inputS3Path?: string;

  /**
   * @schema GlueImportLabelsTaskRunProperties#Replace
   */
  readonly replace?: boolean;

}

/**
 * @schema GlueExportLabelsTaskRunProperties
 */
export interface GlueExportLabelsTaskRunProperties {
  /**
   * @schema GlueExportLabelsTaskRunProperties#OutputS3Path
   */
  readonly outputS3Path?: string;

}

/**
 * @schema GlueLabelingSetGenerationTaskRunProperties
 */
export interface GlueLabelingSetGenerationTaskRunProperties {
  /**
   * @schema GlueLabelingSetGenerationTaskRunProperties#OutputS3Path
   */
  readonly outputS3Path?: string;

}

/**
 * @schema GlueFindMatchesTaskRunProperties
 */
export interface GlueFindMatchesTaskRunProperties {
  /**
   * @schema GlueFindMatchesTaskRunProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema GlueFindMatchesTaskRunProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema GlueFindMatchesTaskRunProperties#JobRunId
   */
  readonly jobRunId?: string;

}

/**
 * @schema GlueFindMatchesMetrics
 */
export interface GlueFindMatchesMetrics {
  /**
   * @schema GlueFindMatchesMetrics#AreaUnderPRCurve
   */
  readonly areaUnderPrCurve?: number;

  /**
   * @schema GlueFindMatchesMetrics#Precision
   */
  readonly precision?: number;

  /**
   * @schema GlueFindMatchesMetrics#Recall
   */
  readonly recall?: number;

  /**
   * @schema GlueFindMatchesMetrics#F1
   */
  readonly f1?: number;

  /**
   * @schema GlueFindMatchesMetrics#ConfusionMatrix
   */
  readonly confusionMatrix?: GlueConfusionMatrix;

}

/**
 * @schema GlueKeySchemaElement
 */
export interface GlueKeySchemaElement {
  /**
   * @schema GlueKeySchemaElement#Name
   */
  readonly name: string;

  /**
   * @schema GlueKeySchemaElement#Type
   */
  readonly type: string;

}

/**
 * @schema GlueBackfillError
 */
export interface GlueBackfillError {
  /**
   * @schema GlueBackfillError#Code
   */
  readonly code?: string;

  /**
   * @schema GlueBackfillError#Partitions
   */
  readonly partitions?: GluePartitionValueList[];

}

/**
 * @schema GlueWorkflowRunStatistics
 */
export interface GlueWorkflowRunStatistics {
  /**
   * @schema GlueWorkflowRunStatistics#TotalActions
   */
  readonly totalActions?: number;

  /**
   * @schema GlueWorkflowRunStatistics#TimeoutActions
   */
  readonly timeoutActions?: number;

  /**
   * @schema GlueWorkflowRunStatistics#FailedActions
   */
  readonly failedActions?: number;

  /**
   * @schema GlueWorkflowRunStatistics#StoppedActions
   */
  readonly stoppedActions?: number;

  /**
   * @schema GlueWorkflowRunStatistics#SucceededActions
   */
  readonly succeededActions?: number;

  /**
   * @schema GlueWorkflowRunStatistics#RunningActions
   */
  readonly runningActions?: number;

}

/**
 * @schema GlueSerDeInfo
 */
export interface GlueSerDeInfo {
  /**
   * @schema GlueSerDeInfo#Name
   */
  readonly name?: string;

  /**
   * @schema GlueSerDeInfo#SerializationLibrary
   */
  readonly serializationLibrary?: string;

  /**
   * @schema GlueSerDeInfo#Parameters
   */
  readonly parameters?: { [key: string]: string };

}

/**
 * @schema GlueOrder
 */
export interface GlueOrder {
  /**
   * @schema GlueOrder#Column
   */
  readonly column: string;

  /**
   * @schema GlueOrder#SortOrder
   */
  readonly sortOrder: number;

}

/**
 * @schema GlueSkewedInfo
 */
export interface GlueSkewedInfo {
  /**
   * @schema GlueSkewedInfo#SkewedColumnNames
   */
  readonly skewedColumnNames?: string[];

  /**
   * @schema GlueSkewedInfo#SkewedColumnValues
   */
  readonly skewedColumnValues?: string[];

  /**
   * @schema GlueSkewedInfo#SkewedColumnValueLocationMaps
   */
  readonly skewedColumnValueLocationMaps?: { [key: string]: string };

}

/**
 * @schema GlueSchemaReference
 */
export interface GlueSchemaReference {
  /**
   * @schema GlueSchemaReference#SchemaId
   */
  readonly schemaId?: GlueSchemaId;

  /**
   * @schema GlueSchemaReference#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema GlueSchemaReference#SchemaVersionNumber
   */
  readonly schemaVersionNumber?: number;

}

/**
 * @schema GlueNode
 */
export interface GlueNode {
  /**
   * @schema GlueNode#Type
   */
  readonly type?: string;

  /**
   * @schema GlueNode#Name
   */
  readonly name?: string;

  /**
   * @schema GlueNode#UniqueId
   */
  readonly uniqueId?: string;

  /**
   * @schema GlueNode#TriggerDetails
   */
  readonly triggerDetails?: GlueTriggerNodeDetails;

  /**
   * @schema GlueNode#JobDetails
   */
  readonly jobDetails?: GlueJobNodeDetails;

  /**
   * @schema GlueNode#CrawlerDetails
   */
  readonly crawlerDetails?: GlueCrawlerNodeDetails;

}

/**
 * @schema GlueEdge
 */
export interface GlueEdge {
  /**
   * @schema GlueEdge#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema GlueEdge#DestinationId
   */
  readonly destinationId?: string;

}

/**
 * @schema GlueDataLakePrincipal
 */
export interface GlueDataLakePrincipal {
  /**
   * @schema GlueDataLakePrincipal#DataLakePrincipalIdentifier
   */
  readonly dataLakePrincipalIdentifier?: string;

}

/**
 * @schema GlueBooleanColumnStatisticsData
 */
export interface GlueBooleanColumnStatisticsData {
  /**
   * @schema GlueBooleanColumnStatisticsData#NumberOfTrues
   */
  readonly numberOfTrues: number;

  /**
   * @schema GlueBooleanColumnStatisticsData#NumberOfFalses
   */
  readonly numberOfFalses: number;

  /**
   * @schema GlueBooleanColumnStatisticsData#NumberOfNulls
   */
  readonly numberOfNulls: number;

}

/**
 * @schema GlueDateColumnStatisticsData
 */
export interface GlueDateColumnStatisticsData {
  /**
   * @schema GlueDateColumnStatisticsData#MinimumValue
   */
  readonly minimumValue?: string;

  /**
   * @schema GlueDateColumnStatisticsData#MaximumValue
   */
  readonly maximumValue?: string;

  /**
   * @schema GlueDateColumnStatisticsData#NumberOfNulls
   */
  readonly numberOfNulls: number;

  /**
   * @schema GlueDateColumnStatisticsData#NumberOfDistinctValues
   */
  readonly numberOfDistinctValues: number;

}

/**
 * @schema GlueDecimalColumnStatisticsData
 */
export interface GlueDecimalColumnStatisticsData {
  /**
   * @schema GlueDecimalColumnStatisticsData#MinimumValue
   */
  readonly minimumValue?: GlueDecimalNumber;

  /**
   * @schema GlueDecimalColumnStatisticsData#MaximumValue
   */
  readonly maximumValue?: GlueDecimalNumber;

  /**
   * @schema GlueDecimalColumnStatisticsData#NumberOfNulls
   */
  readonly numberOfNulls: number;

  /**
   * @schema GlueDecimalColumnStatisticsData#NumberOfDistinctValues
   */
  readonly numberOfDistinctValues: number;

}

/**
 * @schema GlueDoubleColumnStatisticsData
 */
export interface GlueDoubleColumnStatisticsData {
  /**
   * @schema GlueDoubleColumnStatisticsData#MinimumValue
   */
  readonly minimumValue?: number;

  /**
   * @schema GlueDoubleColumnStatisticsData#MaximumValue
   */
  readonly maximumValue?: number;

  /**
   * @schema GlueDoubleColumnStatisticsData#NumberOfNulls
   */
  readonly numberOfNulls: number;

  /**
   * @schema GlueDoubleColumnStatisticsData#NumberOfDistinctValues
   */
  readonly numberOfDistinctValues: number;

}

/**
 * @schema GlueLongColumnStatisticsData
 */
export interface GlueLongColumnStatisticsData {
  /**
   * @schema GlueLongColumnStatisticsData#MinimumValue
   */
  readonly minimumValue?: number;

  /**
   * @schema GlueLongColumnStatisticsData#MaximumValue
   */
  readonly maximumValue?: number;

  /**
   * @schema GlueLongColumnStatisticsData#NumberOfNulls
   */
  readonly numberOfNulls: number;

  /**
   * @schema GlueLongColumnStatisticsData#NumberOfDistinctValues
   */
  readonly numberOfDistinctValues: number;

}

/**
 * @schema GlueStringColumnStatisticsData
 */
export interface GlueStringColumnStatisticsData {
  /**
   * @schema GlueStringColumnStatisticsData#MaximumLength
   */
  readonly maximumLength: number;

  /**
   * @schema GlueStringColumnStatisticsData#AverageLength
   */
  readonly averageLength: number;

  /**
   * @schema GlueStringColumnStatisticsData#NumberOfNulls
   */
  readonly numberOfNulls: number;

  /**
   * @schema GlueStringColumnStatisticsData#NumberOfDistinctValues
   */
  readonly numberOfDistinctValues: number;

}

/**
 * @schema GlueBinaryColumnStatisticsData
 */
export interface GlueBinaryColumnStatisticsData {
  /**
   * @schema GlueBinaryColumnStatisticsData#MaximumLength
   */
  readonly maximumLength: number;

  /**
   * @schema GlueBinaryColumnStatisticsData#AverageLength
   */
  readonly averageLength: number;

  /**
   * @schema GlueBinaryColumnStatisticsData#NumberOfNulls
   */
  readonly numberOfNulls: number;

}

/**
 * @schema GlueConfusionMatrix
 */
export interface GlueConfusionMatrix {
  /**
   * @schema GlueConfusionMatrix#NumTruePositives
   */
  readonly numTruePositives?: number;

  /**
   * @schema GlueConfusionMatrix#NumFalsePositives
   */
  readonly numFalsePositives?: number;

  /**
   * @schema GlueConfusionMatrix#NumTrueNegatives
   */
  readonly numTrueNegatives?: number;

  /**
   * @schema GlueConfusionMatrix#NumFalseNegatives
   */
  readonly numFalseNegatives?: number;

}

/**
 * @schema GlueTriggerNodeDetails
 */
export interface GlueTriggerNodeDetails {
  /**
   * @schema GlueTriggerNodeDetails#Trigger
   */
  readonly trigger?: GlueTrigger;

}

/**
 * @schema GlueJobNodeDetails
 */
export interface GlueJobNodeDetails {
  /**
   * @schema GlueJobNodeDetails#JobRuns
   */
  readonly jobRuns?: GlueJobRun[];

}

/**
 * @schema GlueCrawlerNodeDetails
 */
export interface GlueCrawlerNodeDetails {
  /**
   * @schema GlueCrawlerNodeDetails#Crawls
   */
  readonly crawls?: GlueCrawl[];

}

/**
 * @schema GlueDecimalNumber
 */
export interface GlueDecimalNumber {
  /**
   * @schema GlueDecimalNumber#UnscaledValue
   */
  readonly unscaledValue: any;

  /**
   * @schema GlueDecimalNumber#Scale
   */
  readonly scale: number;

}

/**
 * @schema GlueCrawl
 */
export interface GlueCrawl {
  /**
   * @schema GlueCrawl#State
   */
  readonly state?: string;

  /**
   * @schema GlueCrawl#StartedOn
   */
  readonly startedOn?: string;

  /**
   * @schema GlueCrawl#CompletedOn
   */
  readonly completedOn?: string;

  /**
   * @schema GlueCrawl#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema GlueCrawl#LogGroup
   */
  readonly logGroup?: string;

  /**
   * @schema GlueCrawl#LogStream
   */
  readonly logStream?: string;

}
