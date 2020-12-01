/**
 * @schema BatchCreatePartitionRequest
 */
export interface BatchCreatePartitionRequest {
  /**
   * @schema BatchCreatePartitionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema BatchCreatePartitionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema BatchCreatePartitionRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema BatchCreatePartitionRequest#PartitionInputList
   */
  readonly partitionInputList: PartitionInput[];

}

/**
 * @schema BatchCreatePartitionResponse
 */
export interface BatchCreatePartitionResponse {
  /**
   * @schema BatchCreatePartitionResponse#Errors
   */
  readonly errors?: PartitionError[];

}

/**
 * @schema BatchDeleteConnectionRequest
 */
export interface BatchDeleteConnectionRequest {
  /**
   * @schema BatchDeleteConnectionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema BatchDeleteConnectionRequest#ConnectionNameList
   */
  readonly connectionNameList: string[];

}

/**
 * @schema BatchDeleteConnectionResponse
 */
export interface BatchDeleteConnectionResponse {
  /**
   * @schema BatchDeleteConnectionResponse#Succeeded
   */
  readonly succeeded?: string[];

  /**
   * @schema BatchDeleteConnectionResponse#Errors
   */
  readonly errors?: { [key: string]: ErrorDetail };

}

/**
 * @schema BatchDeletePartitionRequest
 */
export interface BatchDeletePartitionRequest {
  /**
   * @schema BatchDeletePartitionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema BatchDeletePartitionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema BatchDeletePartitionRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema BatchDeletePartitionRequest#PartitionsToDelete
   */
  readonly partitionsToDelete: PartitionValueList[];

}

/**
 * @schema BatchDeletePartitionResponse
 */
export interface BatchDeletePartitionResponse {
  /**
   * @schema BatchDeletePartitionResponse#Errors
   */
  readonly errors?: PartitionError[];

}

/**
 * @schema BatchDeleteTableRequest
 */
export interface BatchDeleteTableRequest {
  /**
   * @schema BatchDeleteTableRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema BatchDeleteTableRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema BatchDeleteTableRequest#TablesToDelete
   */
  readonly tablesToDelete: string[];

}

/**
 * @schema BatchDeleteTableResponse
 */
export interface BatchDeleteTableResponse {
  /**
   * @schema BatchDeleteTableResponse#Errors
   */
  readonly errors?: TableError[];

}

/**
 * @schema BatchDeleteTableVersionRequest
 */
export interface BatchDeleteTableVersionRequest {
  /**
   * @schema BatchDeleteTableVersionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema BatchDeleteTableVersionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema BatchDeleteTableVersionRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema BatchDeleteTableVersionRequest#VersionIds
   */
  readonly versionIds: string[];

}

/**
 * @schema BatchDeleteTableVersionResponse
 */
export interface BatchDeleteTableVersionResponse {
  /**
   * @schema BatchDeleteTableVersionResponse#Errors
   */
  readonly errors?: TableVersionError[];

}

/**
 * @schema BatchGetCrawlersRequest
 */
export interface BatchGetCrawlersRequest {
  /**
   * @schema BatchGetCrawlersRequest#CrawlerNames
   */
  readonly crawlerNames: string[];

}

/**
 * @schema BatchGetCrawlersResponse
 */
export interface BatchGetCrawlersResponse {
  /**
   * @schema BatchGetCrawlersResponse#Crawlers
   */
  readonly crawlers?: Crawler[];

  /**
   * @schema BatchGetCrawlersResponse#CrawlersNotFound
   */
  readonly crawlersNotFound?: string[];

}

/**
 * @schema BatchGetDevEndpointsRequest
 */
export interface BatchGetDevEndpointsRequest {
  /**
   * @schema BatchGetDevEndpointsRequest#DevEndpointNames
   */
  readonly devEndpointNames: string[];

}

/**
 * @schema BatchGetDevEndpointsResponse
 */
export interface BatchGetDevEndpointsResponse {
  /**
   * @schema BatchGetDevEndpointsResponse#DevEndpoints
   */
  readonly devEndpoints?: DevEndpoint[];

  /**
   * @schema BatchGetDevEndpointsResponse#DevEndpointsNotFound
   */
  readonly devEndpointsNotFound?: string[];

}

/**
 * @schema BatchGetJobsRequest
 */
export interface BatchGetJobsRequest {
  /**
   * @schema BatchGetJobsRequest#JobNames
   */
  readonly jobNames: string[];

}

/**
 * @schema BatchGetJobsResponse
 */
export interface BatchGetJobsResponse {
  /**
   * @schema BatchGetJobsResponse#Jobs
   */
  readonly jobs?: Job[];

  /**
   * @schema BatchGetJobsResponse#JobsNotFound
   */
  readonly jobsNotFound?: string[];

}

/**
 * @schema BatchGetPartitionRequest
 */
export interface BatchGetPartitionRequest {
  /**
   * @schema BatchGetPartitionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema BatchGetPartitionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema BatchGetPartitionRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema BatchGetPartitionRequest#PartitionsToGet
   */
  readonly partitionsToGet: PartitionValueList[];

}

/**
 * @schema BatchGetPartitionResponse
 */
export interface BatchGetPartitionResponse {
  /**
   * @schema BatchGetPartitionResponse#Partitions
   */
  readonly partitions?: Partition[];

  /**
   * @schema BatchGetPartitionResponse#UnprocessedKeys
   */
  readonly unprocessedKeys?: PartitionValueList[];

}

/**
 * @schema BatchGetTriggersRequest
 */
export interface BatchGetTriggersRequest {
  /**
   * @schema BatchGetTriggersRequest#TriggerNames
   */
  readonly triggerNames: string[];

}

/**
 * @schema BatchGetTriggersResponse
 */
export interface BatchGetTriggersResponse {
  /**
   * @schema BatchGetTriggersResponse#Triggers
   */
  readonly triggers?: Trigger[];

  /**
   * @schema BatchGetTriggersResponse#TriggersNotFound
   */
  readonly triggersNotFound?: string[];

}

/**
 * @schema BatchGetWorkflowsRequest
 */
export interface BatchGetWorkflowsRequest {
  /**
   * @schema BatchGetWorkflowsRequest#Names
   */
  readonly names: string[];

  /**
   * @schema BatchGetWorkflowsRequest#IncludeGraph
   */
  readonly includeGraph?: boolean;

}

/**
 * @schema BatchGetWorkflowsResponse
 */
export interface BatchGetWorkflowsResponse {
  /**
   * @schema BatchGetWorkflowsResponse#Workflows
   */
  readonly workflows?: Workflow[];

  /**
   * @schema BatchGetWorkflowsResponse#MissingWorkflows
   */
  readonly missingWorkflows?: string[];

}

/**
 * @schema BatchStopJobRunRequest
 */
export interface BatchStopJobRunRequest {
  /**
   * @schema BatchStopJobRunRequest#JobName
   */
  readonly jobName: string;

  /**
   * @schema BatchStopJobRunRequest#JobRunIds
   */
  readonly jobRunIds: string[];

}

/**
 * @schema BatchStopJobRunResponse
 */
export interface BatchStopJobRunResponse {
  /**
   * @schema BatchStopJobRunResponse#SuccessfulSubmissions
   */
  readonly successfulSubmissions?: BatchStopJobRunSuccessfulSubmission[];

  /**
   * @schema BatchStopJobRunResponse#Errors
   */
  readonly errors?: BatchStopJobRunError[];

}

/**
 * @schema BatchUpdatePartitionRequest
 */
export interface BatchUpdatePartitionRequest {
  /**
   * @schema BatchUpdatePartitionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema BatchUpdatePartitionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema BatchUpdatePartitionRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema BatchUpdatePartitionRequest#Entries
   */
  readonly entries: BatchUpdatePartitionRequestEntry[];

}

/**
 * @schema BatchUpdatePartitionResponse
 */
export interface BatchUpdatePartitionResponse {
  /**
   * @schema BatchUpdatePartitionResponse#Errors
   */
  readonly errors?: BatchUpdatePartitionFailureEntry[];

}

/**
 * @schema CancelMlTaskRunRequest
 */
export interface CancelMlTaskRunRequest {
  /**
   * @schema CancelMlTaskRunRequest#TransformId
   */
  readonly transformId: string;

  /**
   * @schema CancelMlTaskRunRequest#TaskRunId
   */
  readonly taskRunId: string;

}

/**
 * @schema CancelMlTaskRunResponse
 */
export interface CancelMlTaskRunResponse {
  /**
   * @schema CancelMlTaskRunResponse#TransformId
   */
  readonly transformId?: string;

  /**
   * @schema CancelMlTaskRunResponse#TaskRunId
   */
  readonly taskRunId?: string;

  /**
   * @schema CancelMlTaskRunResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema CheckSchemaVersionValidityInput
 */
export interface CheckSchemaVersionValidityInput {
  /**
   * @schema CheckSchemaVersionValidityInput#DataFormat
   */
  readonly dataFormat: string;

  /**
   * @schema CheckSchemaVersionValidityInput#SchemaDefinition
   */
  readonly schemaDefinition: string;

}

/**
 * @schema CheckSchemaVersionValidityResponse
 */
export interface CheckSchemaVersionValidityResponse {
  /**
   * @schema CheckSchemaVersionValidityResponse#Valid
   */
  readonly valid?: boolean;

  /**
   * @schema CheckSchemaVersionValidityResponse#Error
   */
  readonly error?: string;

}

/**
 * @schema CreateClassifierRequest
 */
export interface CreateClassifierRequest {
  /**
   * @schema CreateClassifierRequest#GrokClassifier
   */
  readonly grokClassifier?: CreateGrokClassifierRequest;

  /**
   * @schema CreateClassifierRequest#XMLClassifier
   */
  readonly xmlClassifier?: CreateXmlClassifierRequest;

  /**
   * @schema CreateClassifierRequest#JsonClassifier
   */
  readonly jsonClassifier?: CreateJsonClassifierRequest;

  /**
   * @schema CreateClassifierRequest#CsvClassifier
   */
  readonly csvClassifier?: CreateCsvClassifierRequest;

}

/**
 * @schema CreateClassifierResponse
 */
export interface CreateClassifierResponse {
}

/**
 * @schema CreateConnectionRequest
 */
export interface CreateConnectionRequest {
  /**
   * @schema CreateConnectionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema CreateConnectionRequest#ConnectionInput
   */
  readonly connectionInput: ConnectionInput;

}

/**
 * @schema CreateConnectionResponse
 */
export interface CreateConnectionResponse {
}

/**
 * @schema CreateCrawlerRequest
 */
export interface CreateCrawlerRequest {
  /**
   * @schema CreateCrawlerRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateCrawlerRequest#Role
   */
  readonly role: string;

  /**
   * @schema CreateCrawlerRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema CreateCrawlerRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateCrawlerRequest#Targets
   */
  readonly targets: CrawlerTargets;

  /**
   * @schema CreateCrawlerRequest#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema CreateCrawlerRequest#Classifiers
   */
  readonly classifiers?: string[];

  /**
   * @schema CreateCrawlerRequest#TablePrefix
   */
  readonly tablePrefix?: string;

  /**
   * @schema CreateCrawlerRequest#SchemaChangePolicy
   */
  readonly schemaChangePolicy?: SchemaChangePolicy;

  /**
   * @schema CreateCrawlerRequest#RecrawlPolicy
   */
  readonly recrawlPolicy?: RecrawlPolicy;

  /**
   * @schema CreateCrawlerRequest#LineageConfiguration
   */
  readonly lineageConfiguration?: LineageConfiguration;

  /**
   * @schema CreateCrawlerRequest#Configuration
   */
  readonly configuration?: string;

  /**
   * @schema CreateCrawlerRequest#CrawlerSecurityConfiguration
   */
  readonly crawlerSecurityConfiguration?: string;

  /**
   * @schema CreateCrawlerRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateCrawlerResponse
 */
export interface CreateCrawlerResponse {
}

/**
 * @schema CreateDatabaseRequest
 */
export interface CreateDatabaseRequest {
  /**
   * @schema CreateDatabaseRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema CreateDatabaseRequest#DatabaseInput
   */
  readonly databaseInput: DatabaseInput;

}

/**
 * @schema CreateDatabaseResponse
 */
export interface CreateDatabaseResponse {
}

/**
 * @schema CreateDevEndpointRequest
 */
export interface CreateDevEndpointRequest {
  /**
   * @schema CreateDevEndpointRequest#EndpointName
   */
  readonly endpointName: string;

  /**
   * @schema CreateDevEndpointRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema CreateDevEndpointRequest#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema CreateDevEndpointRequest#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema CreateDevEndpointRequest#PublicKey
   */
  readonly publicKey?: string;

  /**
   * @schema CreateDevEndpointRequest#PublicKeys
   */
  readonly publicKeys?: string[];

  /**
   * @schema CreateDevEndpointRequest#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema CreateDevEndpointRequest#WorkerType
   */
  readonly workerType?: string;

  /**
   * @schema CreateDevEndpointRequest#GlueVersion
   */
  readonly glueVersion?: string;

  /**
   * @schema CreateDevEndpointRequest#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

  /**
   * @schema CreateDevEndpointRequest#ExtraPythonLibsS3Path
   */
  readonly extraPythonLibsS3Path?: string;

  /**
   * @schema CreateDevEndpointRequest#ExtraJarsS3Path
   */
  readonly extraJarsS3Path?: string;

  /**
   * @schema CreateDevEndpointRequest#SecurityConfiguration
   */
  readonly securityConfiguration?: string;

  /**
   * @schema CreateDevEndpointRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateDevEndpointRequest#Arguments
   */
  readonly arguments?: { [key: string]: string };

}

/**
 * @schema CreateDevEndpointResponse
 */
export interface CreateDevEndpointResponse {
  /**
   * @schema CreateDevEndpointResponse#EndpointName
   */
  readonly endpointName?: string;

  /**
   * @schema CreateDevEndpointResponse#Status
   */
  readonly status?: string;

  /**
   * @schema CreateDevEndpointResponse#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema CreateDevEndpointResponse#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema CreateDevEndpointResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema CreateDevEndpointResponse#YarnEndpointAddress
   */
  readonly yarnEndpointAddress?: string;

  /**
   * @schema CreateDevEndpointResponse#ZeppelinRemoteSparkInterpreterPort
   */
  readonly zeppelinRemoteSparkInterpreterPort?: number;

  /**
   * @schema CreateDevEndpointResponse#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema CreateDevEndpointResponse#WorkerType
   */
  readonly workerType?: string;

  /**
   * @schema CreateDevEndpointResponse#GlueVersion
   */
  readonly glueVersion?: string;

  /**
   * @schema CreateDevEndpointResponse#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

  /**
   * @schema CreateDevEndpointResponse#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema CreateDevEndpointResponse#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema CreateDevEndpointResponse#ExtraPythonLibsS3Path
   */
  readonly extraPythonLibsS3Path?: string;

  /**
   * @schema CreateDevEndpointResponse#ExtraJarsS3Path
   */
  readonly extraJarsS3Path?: string;

  /**
   * @schema CreateDevEndpointResponse#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema CreateDevEndpointResponse#SecurityConfiguration
   */
  readonly securityConfiguration?: string;

  /**
   * @schema CreateDevEndpointResponse#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema CreateDevEndpointResponse#Arguments
   */
  readonly arguments?: { [key: string]: string };

}

/**
 * @schema CreateJobRequest
 */
export interface CreateJobRequest {
  /**
   * @schema CreateJobRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateJobRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateJobRequest#LogUri
   */
  readonly logUri?: string;

  /**
   * @schema CreateJobRequest#Role
   */
  readonly role: string;

  /**
   * @schema CreateJobRequest#ExecutionProperty
   */
  readonly executionProperty?: ExecutionProperty;

  /**
   * @schema CreateJobRequest#Command
   */
  readonly command: JobCommand;

  /**
   * @schema CreateJobRequest#DefaultArguments
   */
  readonly defaultArguments?: { [key: string]: string };

  /**
   * @schema CreateJobRequest#NonOverridableArguments
   */
  readonly nonOverridableArguments?: { [key: string]: string };

  /**
   * @schema CreateJobRequest#Connections
   */
  readonly connections?: ConnectionsList;

  /**
   * @schema CreateJobRequest#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema CreateJobRequest#AllocatedCapacity
   */
  readonly allocatedCapacity?: number;

  /**
   * @schema CreateJobRequest#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema CreateJobRequest#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema CreateJobRequest#SecurityConfiguration
   */
  readonly securityConfiguration?: string;

  /**
   * @schema CreateJobRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateJobRequest#NotificationProperty
   */
  readonly notificationProperty?: NotificationProperty;

  /**
   * @schema CreateJobRequest#GlueVersion
   */
  readonly glueVersion?: string;

  /**
   * @schema CreateJobRequest#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

  /**
   * @schema CreateJobRequest#WorkerType
   */
  readonly workerType?: string;

}

/**
 * @schema CreateJobResponse
 */
export interface CreateJobResponse {
  /**
   * @schema CreateJobResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema CreateMlTransformRequest
 */
export interface CreateMlTransformRequest {
  /**
   * @schema CreateMlTransformRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateMlTransformRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateMlTransformRequest#InputRecordTables
   */
  readonly inputRecordTables: GlueTable[];

  /**
   * @schema CreateMlTransformRequest#Parameters
   */
  readonly parameters: TransformParameters;

  /**
   * @schema CreateMlTransformRequest#Role
   */
  readonly role: string;

  /**
   * @schema CreateMlTransformRequest#GlueVersion
   */
  readonly glueVersion?: string;

  /**
   * @schema CreateMlTransformRequest#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema CreateMlTransformRequest#WorkerType
   */
  readonly workerType?: string;

  /**
   * @schema CreateMlTransformRequest#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

  /**
   * @schema CreateMlTransformRequest#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema CreateMlTransformRequest#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema CreateMlTransformRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateMlTransformRequest#TransformEncryption
   */
  readonly transformEncryption?: TransformEncryption;

}

/**
 * @schema CreateMlTransformResponse
 */
export interface CreateMlTransformResponse {
  /**
   * @schema CreateMlTransformResponse#TransformId
   */
  readonly transformId?: string;

}

/**
 * @schema CreatePartitionRequest
 */
export interface CreatePartitionRequest {
  /**
   * @schema CreatePartitionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema CreatePartitionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema CreatePartitionRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema CreatePartitionRequest#PartitionInput
   */
  readonly partitionInput: PartitionInput;

}

/**
 * @schema CreatePartitionResponse
 */
export interface CreatePartitionResponse {
}

/**
 * @schema CreatePartitionIndexRequest
 */
export interface CreatePartitionIndexRequest {
  /**
   * @schema CreatePartitionIndexRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema CreatePartitionIndexRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema CreatePartitionIndexRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema CreatePartitionIndexRequest#PartitionIndex
   */
  readonly partitionIndex: PartitionIndex;

}

/**
 * @schema CreatePartitionIndexResponse
 */
export interface CreatePartitionIndexResponse {
}

/**
 * @schema CreateRegistryInput
 */
export interface CreateRegistryInput {
  /**
   * @schema CreateRegistryInput#RegistryName
   */
  readonly registryName: string;

  /**
   * @schema CreateRegistryInput#Description
   */
  readonly description?: string;

  /**
   * @schema CreateRegistryInput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateRegistryResponse
 */
export interface CreateRegistryResponse {
  /**
   * @schema CreateRegistryResponse#RegistryArn
   */
  readonly registryArn?: string;

  /**
   * @schema CreateRegistryResponse#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema CreateRegistryResponse#Description
   */
  readonly description?: string;

  /**
   * @schema CreateRegistryResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateSchemaInput
 */
export interface CreateSchemaInput {
  /**
   * @schema CreateSchemaInput#RegistryId
   */
  readonly registryId?: RegistryId;

  /**
   * @schema CreateSchemaInput#SchemaName
   */
  readonly schemaName: string;

  /**
   * @schema CreateSchemaInput#DataFormat
   */
  readonly dataFormat: string;

  /**
   * @schema CreateSchemaInput#Compatibility
   */
  readonly compatibility?: string;

  /**
   * @schema CreateSchemaInput#Description
   */
  readonly description?: string;

  /**
   * @schema CreateSchemaInput#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateSchemaInput#SchemaDefinition
   */
  readonly schemaDefinition?: string;

}

/**
 * @schema CreateSchemaResponse
 */
export interface CreateSchemaResponse {
  /**
   * @schema CreateSchemaResponse#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema CreateSchemaResponse#RegistryArn
   */
  readonly registryArn?: string;

  /**
   * @schema CreateSchemaResponse#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema CreateSchemaResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema CreateSchemaResponse#Description
   */
  readonly description?: string;

  /**
   * @schema CreateSchemaResponse#DataFormat
   */
  readonly dataFormat?: string;

  /**
   * @schema CreateSchemaResponse#Compatibility
   */
  readonly compatibility?: string;

  /**
   * @schema CreateSchemaResponse#SchemaCheckpoint
   */
  readonly schemaCheckpoint?: number;

  /**
   * @schema CreateSchemaResponse#LatestSchemaVersion
   */
  readonly latestSchemaVersion?: number;

  /**
   * @schema CreateSchemaResponse#NextSchemaVersion
   */
  readonly nextSchemaVersion?: number;

  /**
   * @schema CreateSchemaResponse#SchemaStatus
   */
  readonly schemaStatus?: string;

  /**
   * @schema CreateSchemaResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateSchemaResponse#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema CreateSchemaResponse#SchemaVersionStatus
   */
  readonly schemaVersionStatus?: string;

}

/**
 * @schema CreateScriptRequest
 */
export interface CreateScriptRequest {
  /**
   * @schema CreateScriptRequest#DagNodes
   */
  readonly dagNodes?: CodeGenNode[];

  /**
   * @schema CreateScriptRequest#DagEdges
   */
  readonly dagEdges?: CodeGenEdge[];

  /**
   * @schema CreateScriptRequest#Language
   */
  readonly language?: string;

}

/**
 * @schema CreateScriptResponse
 */
export interface CreateScriptResponse {
  /**
   * @schema CreateScriptResponse#PythonScript
   */
  readonly pythonScript?: string;

  /**
   * @schema CreateScriptResponse#ScalaCode
   */
  readonly scalaCode?: string;

}

/**
 * @schema CreateSecurityConfigurationRequest
 */
export interface CreateSecurityConfigurationRequest {
  /**
   * @schema CreateSecurityConfigurationRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateSecurityConfigurationRequest#EncryptionConfiguration
   */
  readonly encryptionConfiguration: EncryptionConfiguration;

}

/**
 * @schema CreateSecurityConfigurationResponse
 */
export interface CreateSecurityConfigurationResponse {
  /**
   * @schema CreateSecurityConfigurationResponse#Name
   */
  readonly name?: string;

  /**
   * @schema CreateSecurityConfigurationResponse#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

}

/**
 * @schema CreateTableRequest
 */
export interface CreateTableRequest {
  /**
   * @schema CreateTableRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema CreateTableRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema CreateTableRequest#TableInput
   */
  readonly tableInput: TableInput;

  /**
   * @schema CreateTableRequest#PartitionIndexes
   */
  readonly partitionIndexes?: PartitionIndex[];

}

/**
 * @schema CreateTableResponse
 */
export interface CreateTableResponse {
}

/**
 * @schema CreateTriggerRequest
 */
export interface CreateTriggerRequest {
  /**
   * @schema CreateTriggerRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateTriggerRequest#WorkflowName
   */
  readonly workflowName?: string;

  /**
   * @schema CreateTriggerRequest#Type
   */
  readonly type: string;

  /**
   * @schema CreateTriggerRequest#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema CreateTriggerRequest#Predicate
   */
  readonly predicate?: Predicate;

  /**
   * @schema CreateTriggerRequest#Actions
   */
  readonly actions: Action[];

  /**
   * @schema CreateTriggerRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateTriggerRequest#StartOnCreation
   */
  readonly startOnCreation?: boolean;

  /**
   * @schema CreateTriggerRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateTriggerResponse
 */
export interface CreateTriggerResponse {
  /**
   * @schema CreateTriggerResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema CreateUserDefinedFunctionRequest
 */
export interface CreateUserDefinedFunctionRequest {
  /**
   * @schema CreateUserDefinedFunctionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema CreateUserDefinedFunctionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema CreateUserDefinedFunctionRequest#FunctionInput
   */
  readonly functionInput: UserDefinedFunctionInput;

}

/**
 * @schema CreateUserDefinedFunctionResponse
 */
export interface CreateUserDefinedFunctionResponse {
}

/**
 * @schema CreateWorkflowRequest
 */
export interface CreateWorkflowRequest {
  /**
   * @schema CreateWorkflowRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateWorkflowRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateWorkflowRequest#DefaultRunProperties
   */
  readonly defaultRunProperties?: { [key: string]: string };

  /**
   * @schema CreateWorkflowRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateWorkflowRequest#MaxConcurrentRuns
   */
  readonly maxConcurrentRuns?: number;

}

/**
 * @schema CreateWorkflowResponse
 */
export interface CreateWorkflowResponse {
  /**
   * @schema CreateWorkflowResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema DeleteClassifierRequest
 */
export interface DeleteClassifierRequest {
  /**
   * @schema DeleteClassifierRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteClassifierResponse
 */
export interface DeleteClassifierResponse {
}

/**
 * @schema DeleteColumnStatisticsForPartitionRequest
 */
export interface DeleteColumnStatisticsForPartitionRequest {
  /**
   * @schema DeleteColumnStatisticsForPartitionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema DeleteColumnStatisticsForPartitionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema DeleteColumnStatisticsForPartitionRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema DeleteColumnStatisticsForPartitionRequest#PartitionValues
   */
  readonly partitionValues: string[];

  /**
   * @schema DeleteColumnStatisticsForPartitionRequest#ColumnName
   */
  readonly columnName: string;

}

/**
 * @schema DeleteColumnStatisticsForPartitionResponse
 */
export interface DeleteColumnStatisticsForPartitionResponse {
}

/**
 * @schema DeleteColumnStatisticsForTableRequest
 */
export interface DeleteColumnStatisticsForTableRequest {
  /**
   * @schema DeleteColumnStatisticsForTableRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema DeleteColumnStatisticsForTableRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema DeleteColumnStatisticsForTableRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema DeleteColumnStatisticsForTableRequest#ColumnName
   */
  readonly columnName: string;

}

/**
 * @schema DeleteColumnStatisticsForTableResponse
 */
export interface DeleteColumnStatisticsForTableResponse {
}

/**
 * @schema DeleteConnectionRequest
 */
export interface DeleteConnectionRequest {
  /**
   * @schema DeleteConnectionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema DeleteConnectionRequest#ConnectionName
   */
  readonly connectionName: string;

}

/**
 * @schema DeleteConnectionResponse
 */
export interface DeleteConnectionResponse {
}

/**
 * @schema DeleteCrawlerRequest
 */
export interface DeleteCrawlerRequest {
  /**
   * @schema DeleteCrawlerRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteCrawlerResponse
 */
export interface DeleteCrawlerResponse {
}

/**
 * @schema DeleteDatabaseRequest
 */
export interface DeleteDatabaseRequest {
  /**
   * @schema DeleteDatabaseRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema DeleteDatabaseRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteDatabaseResponse
 */
export interface DeleteDatabaseResponse {
}

/**
 * @schema DeleteDevEndpointRequest
 */
export interface DeleteDevEndpointRequest {
  /**
   * @schema DeleteDevEndpointRequest#EndpointName
   */
  readonly endpointName: string;

}

/**
 * @schema DeleteDevEndpointResponse
 */
export interface DeleteDevEndpointResponse {
}

/**
 * @schema DeleteJobRequest
 */
export interface DeleteJobRequest {
  /**
   * @schema DeleteJobRequest#JobName
   */
  readonly jobName: string;

}

/**
 * @schema DeleteJobResponse
 */
export interface DeleteJobResponse {
  /**
   * @schema DeleteJobResponse#JobName
   */
  readonly jobName?: string;

}

/**
 * @schema DeleteMlTransformRequest
 */
export interface DeleteMlTransformRequest {
  /**
   * @schema DeleteMlTransformRequest#TransformId
   */
  readonly transformId: string;

}

/**
 * @schema DeleteMlTransformResponse
 */
export interface DeleteMlTransformResponse {
  /**
   * @schema DeleteMlTransformResponse#TransformId
   */
  readonly transformId?: string;

}

/**
 * @schema DeletePartitionRequest
 */
export interface DeletePartitionRequest {
  /**
   * @schema DeletePartitionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema DeletePartitionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema DeletePartitionRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema DeletePartitionRequest#PartitionValues
   */
  readonly partitionValues: string[];

}

/**
 * @schema DeletePartitionResponse
 */
export interface DeletePartitionResponse {
}

/**
 * @schema DeletePartitionIndexRequest
 */
export interface DeletePartitionIndexRequest {
  /**
   * @schema DeletePartitionIndexRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema DeletePartitionIndexRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema DeletePartitionIndexRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema DeletePartitionIndexRequest#IndexName
   */
  readonly indexName: string;

}

/**
 * @schema DeletePartitionIndexResponse
 */
export interface DeletePartitionIndexResponse {
}

/**
 * @schema DeleteRegistryInput
 */
export interface DeleteRegistryInput {
  /**
   * @schema DeleteRegistryInput#RegistryId
   */
  readonly registryId: RegistryId;

}

/**
 * @schema DeleteRegistryResponse
 */
export interface DeleteRegistryResponse {
  /**
   * @schema DeleteRegistryResponse#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema DeleteRegistryResponse#RegistryArn
   */
  readonly registryArn?: string;

  /**
   * @schema DeleteRegistryResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema DeleteResourcePolicyRequest
 */
export interface DeleteResourcePolicyRequest {
  /**
   * @schema DeleteResourcePolicyRequest#PolicyHashCondition
   */
  readonly policyHashCondition?: string;

  /**
   * @schema DeleteResourcePolicyRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * @schema DeleteResourcePolicyResponse
 */
export interface DeleteResourcePolicyResponse {
}

/**
 * @schema DeleteSchemaInput
 */
export interface DeleteSchemaInput {
  /**
   * @schema DeleteSchemaInput#SchemaId
   */
  readonly schemaId: SchemaId;

}

/**
 * @schema DeleteSchemaResponse
 */
export interface DeleteSchemaResponse {
  /**
   * @schema DeleteSchemaResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema DeleteSchemaResponse#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema DeleteSchemaResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema DeleteSchemaVersionsInput
 */
export interface DeleteSchemaVersionsInput {
  /**
   * @schema DeleteSchemaVersionsInput#SchemaId
   */
  readonly schemaId: SchemaId;

  /**
   * @schema DeleteSchemaVersionsInput#Versions
   */
  readonly versions: string;

}

/**
 * @schema DeleteSchemaVersionsResponse
 */
export interface DeleteSchemaVersionsResponse {
  /**
   * @schema DeleteSchemaVersionsResponse#SchemaVersionErrors
   */
  readonly schemaVersionErrors?: SchemaVersionErrorItem[];

}

/**
 * @schema DeleteSecurityConfigurationRequest
 */
export interface DeleteSecurityConfigurationRequest {
  /**
   * @schema DeleteSecurityConfigurationRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteSecurityConfigurationResponse
 */
export interface DeleteSecurityConfigurationResponse {
}

/**
 * @schema DeleteTableRequest
 */
export interface DeleteTableRequest {
  /**
   * @schema DeleteTableRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema DeleteTableRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema DeleteTableRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteTableResponse
 */
export interface DeleteTableResponse {
}

/**
 * @schema DeleteTableVersionRequest
 */
export interface DeleteTableVersionRequest {
  /**
   * @schema DeleteTableVersionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema DeleteTableVersionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema DeleteTableVersionRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema DeleteTableVersionRequest#VersionId
   */
  readonly versionId: string;

}

/**
 * @schema DeleteTableVersionResponse
 */
export interface DeleteTableVersionResponse {
}

/**
 * @schema DeleteTriggerRequest
 */
export interface DeleteTriggerRequest {
  /**
   * @schema DeleteTriggerRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteTriggerResponse
 */
export interface DeleteTriggerResponse {
  /**
   * @schema DeleteTriggerResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema DeleteUserDefinedFunctionRequest
 */
export interface DeleteUserDefinedFunctionRequest {
  /**
   * @schema DeleteUserDefinedFunctionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema DeleteUserDefinedFunctionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema DeleteUserDefinedFunctionRequest#FunctionName
   */
  readonly functionName: string;

}

/**
 * @schema DeleteUserDefinedFunctionResponse
 */
export interface DeleteUserDefinedFunctionResponse {
}

/**
 * @schema DeleteWorkflowRequest
 */
export interface DeleteWorkflowRequest {
  /**
   * @schema DeleteWorkflowRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteWorkflowResponse
 */
export interface DeleteWorkflowResponse {
  /**
   * @schema DeleteWorkflowResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema GetCatalogImportStatusRequest
 */
export interface GetCatalogImportStatusRequest {
  /**
   * @schema GetCatalogImportStatusRequest#CatalogId
   */
  readonly catalogId?: string;

}

/**
 * @schema GetCatalogImportStatusResponse
 */
export interface GetCatalogImportStatusResponse {
  /**
   * @schema GetCatalogImportStatusResponse#ImportStatus
   */
  readonly importStatus?: CatalogImportStatus;

}

/**
 * @schema GetClassifierRequest
 */
export interface GetClassifierRequest {
  /**
   * @schema GetClassifierRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GetClassifierResponse
 */
export interface GetClassifierResponse {
  /**
   * @schema GetClassifierResponse#Classifier
   */
  readonly classifier?: Classifier;

}

/**
 * @schema GetClassifiersRequest
 */
export interface GetClassifiersRequest {
  /**
   * @schema GetClassifiersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetClassifiersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetClassifiersResponse
 */
export interface GetClassifiersResponse {
  /**
   * @schema GetClassifiersResponse#Classifiers
   */
  readonly classifiers?: Classifier[];

  /**
   * @schema GetClassifiersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetColumnStatisticsForPartitionRequest
 */
export interface GetColumnStatisticsForPartitionRequest {
  /**
   * @schema GetColumnStatisticsForPartitionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GetColumnStatisticsForPartitionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GetColumnStatisticsForPartitionRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema GetColumnStatisticsForPartitionRequest#PartitionValues
   */
  readonly partitionValues: string[];

  /**
   * @schema GetColumnStatisticsForPartitionRequest#ColumnNames
   */
  readonly columnNames: string[];

}

/**
 * @schema GetColumnStatisticsForPartitionResponse
 */
export interface GetColumnStatisticsForPartitionResponse {
  /**
   * @schema GetColumnStatisticsForPartitionResponse#ColumnStatisticsList
   */
  readonly columnStatisticsList?: ColumnStatistics[];

  /**
   * @schema GetColumnStatisticsForPartitionResponse#Errors
   */
  readonly errors?: ColumnError[];

}

/**
 * @schema GetColumnStatisticsForTableRequest
 */
export interface GetColumnStatisticsForTableRequest {
  /**
   * @schema GetColumnStatisticsForTableRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GetColumnStatisticsForTableRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GetColumnStatisticsForTableRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema GetColumnStatisticsForTableRequest#ColumnNames
   */
  readonly columnNames: string[];

}

/**
 * @schema GetColumnStatisticsForTableResponse
 */
export interface GetColumnStatisticsForTableResponse {
  /**
   * @schema GetColumnStatisticsForTableResponse#ColumnStatisticsList
   */
  readonly columnStatisticsList?: ColumnStatistics[];

  /**
   * @schema GetColumnStatisticsForTableResponse#Errors
   */
  readonly errors?: ColumnError[];

}

/**
 * @schema GetConnectionRequest
 */
export interface GetConnectionRequest {
  /**
   * @schema GetConnectionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GetConnectionRequest#Name
   */
  readonly name: string;

  /**
   * @schema GetConnectionRequest#HidePassword
   */
  readonly hidePassword?: boolean;

}

/**
 * @schema GetConnectionResponse
 */
export interface GetConnectionResponse {
  /**
   * @schema GetConnectionResponse#Connection
   */
  readonly connection?: Connection;

}

/**
 * @schema GetConnectionsRequest
 */
export interface GetConnectionsRequest {
  /**
   * @schema GetConnectionsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GetConnectionsRequest#Filter
   */
  readonly filter?: GetConnectionsFilter;

  /**
   * @schema GetConnectionsRequest#HidePassword
   */
  readonly hidePassword?: boolean;

  /**
   * @schema GetConnectionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetConnectionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetConnectionsResponse
 */
export interface GetConnectionsResponse {
  /**
   * @schema GetConnectionsResponse#ConnectionList
   */
  readonly connectionList?: Connection[];

  /**
   * @schema GetConnectionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetCrawlerRequest
 */
export interface GetCrawlerRequest {
  /**
   * @schema GetCrawlerRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GetCrawlerResponse
 */
export interface GetCrawlerResponse {
  /**
   * @schema GetCrawlerResponse#Crawler
   */
  readonly crawler?: Crawler;

}

/**
 * @schema GetCrawlerMetricsRequest
 */
export interface GetCrawlerMetricsRequest {
  /**
   * @schema GetCrawlerMetricsRequest#CrawlerNameList
   */
  readonly crawlerNameList?: string[];

  /**
   * @schema GetCrawlerMetricsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetCrawlerMetricsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetCrawlerMetricsResponse
 */
export interface GetCrawlerMetricsResponse {
  /**
   * @schema GetCrawlerMetricsResponse#CrawlerMetricsList
   */
  readonly crawlerMetricsList?: CrawlerMetrics[];

  /**
   * @schema GetCrawlerMetricsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetCrawlersRequest
 */
export interface GetCrawlersRequest {
  /**
   * @schema GetCrawlersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetCrawlersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetCrawlersResponse
 */
export interface GetCrawlersResponse {
  /**
   * @schema GetCrawlersResponse#Crawlers
   */
  readonly crawlers?: Crawler[];

  /**
   * @schema GetCrawlersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetDataCatalogEncryptionSettingsRequest
 */
export interface GetDataCatalogEncryptionSettingsRequest {
  /**
   * @schema GetDataCatalogEncryptionSettingsRequest#CatalogId
   */
  readonly catalogId?: string;

}

/**
 * @schema GetDataCatalogEncryptionSettingsResponse
 */
export interface GetDataCatalogEncryptionSettingsResponse {
  /**
   * @schema GetDataCatalogEncryptionSettingsResponse#DataCatalogEncryptionSettings
   */
  readonly dataCatalogEncryptionSettings?: DataCatalogEncryptionSettings;

}

/**
 * @schema GetDatabaseRequest
 */
export interface GetDatabaseRequest {
  /**
   * @schema GetDatabaseRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GetDatabaseRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GetDatabaseResponse
 */
export interface GetDatabaseResponse {
  /**
   * @schema GetDatabaseResponse#Database
   */
  readonly database?: Database;

}

/**
 * @schema GetDatabasesRequest
 */
export interface GetDatabasesRequest {
  /**
   * @schema GetDatabasesRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GetDatabasesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetDatabasesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetDatabasesRequest#ResourceShareType
   */
  readonly resourceShareType?: string;

}

/**
 * @schema GetDatabasesResponse
 */
export interface GetDatabasesResponse {
  /**
   * @schema GetDatabasesResponse#DatabaseList
   */
  readonly databaseList: Database[];

  /**
   * @schema GetDatabasesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetDataflowGraphRequest
 */
export interface GetDataflowGraphRequest {
  /**
   * @schema GetDataflowGraphRequest#PythonScript
   */
  readonly pythonScript?: string;

}

/**
 * @schema GetDataflowGraphResponse
 */
export interface GetDataflowGraphResponse {
  /**
   * @schema GetDataflowGraphResponse#DagNodes
   */
  readonly dagNodes?: CodeGenNode[];

  /**
   * @schema GetDataflowGraphResponse#DagEdges
   */
  readonly dagEdges?: CodeGenEdge[];

}

/**
 * @schema GetDevEndpointRequest
 */
export interface GetDevEndpointRequest {
  /**
   * @schema GetDevEndpointRequest#EndpointName
   */
  readonly endpointName: string;

}

/**
 * @schema GetDevEndpointResponse
 */
export interface GetDevEndpointResponse {
  /**
   * @schema GetDevEndpointResponse#DevEndpoint
   */
  readonly devEndpoint?: DevEndpoint;

}

/**
 * @schema GetDevEndpointsRequest
 */
export interface GetDevEndpointsRequest {
  /**
   * @schema GetDevEndpointsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetDevEndpointsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetDevEndpointsResponse
 */
export interface GetDevEndpointsResponse {
  /**
   * @schema GetDevEndpointsResponse#DevEndpoints
   */
  readonly devEndpoints?: DevEndpoint[];

  /**
   * @schema GetDevEndpointsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetJobRequest
 */
export interface GetJobRequest {
  /**
   * @schema GetJobRequest#JobName
   */
  readonly jobName: string;

}

/**
 * @schema GetJobResponse
 */
export interface GetJobResponse {
  /**
   * @schema GetJobResponse#Job
   */
  readonly job?: Job;

}

/**
 * @schema GetJobBookmarkRequest
 */
export interface GetJobBookmarkRequest {
  /**
   * @schema GetJobBookmarkRequest#JobName
   */
  readonly jobName: string;

  /**
   * @schema GetJobBookmarkRequest#RunId
   */
  readonly runId?: string;

}

/**
 * @schema GetJobBookmarkResponse
 */
export interface GetJobBookmarkResponse {
  /**
   * @schema GetJobBookmarkResponse#JobBookmarkEntry
   */
  readonly jobBookmarkEntry?: JobBookmarkEntry;

}

/**
 * @schema GetJobRunRequest
 */
export interface GetJobRunRequest {
  /**
   * @schema GetJobRunRequest#JobName
   */
  readonly jobName: string;

  /**
   * @schema GetJobRunRequest#RunId
   */
  readonly runId: string;

  /**
   * @schema GetJobRunRequest#PredecessorsIncluded
   */
  readonly predecessorsIncluded?: boolean;

}

/**
 * @schema GetJobRunResponse
 */
export interface GetJobRunResponse {
  /**
   * @schema GetJobRunResponse#JobRun
   */
  readonly jobRun?: JobRun;

}

/**
 * @schema GetJobRunsRequest
 */
export interface GetJobRunsRequest {
  /**
   * @schema GetJobRunsRequest#JobName
   */
  readonly jobName: string;

  /**
   * @schema GetJobRunsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetJobRunsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetJobRunsResponse
 */
export interface GetJobRunsResponse {
  /**
   * @schema GetJobRunsResponse#JobRuns
   */
  readonly jobRuns?: JobRun[];

  /**
   * @schema GetJobRunsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetJobsRequest
 */
export interface GetJobsRequest {
  /**
   * @schema GetJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetJobsResponse
 */
export interface GetJobsResponse {
  /**
   * @schema GetJobsResponse#Jobs
   */
  readonly jobs?: Job[];

  /**
   * @schema GetJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetMlTaskRunRequest
 */
export interface GetMlTaskRunRequest {
  /**
   * @schema GetMlTaskRunRequest#TransformId
   */
  readonly transformId: string;

  /**
   * @schema GetMlTaskRunRequest#TaskRunId
   */
  readonly taskRunId: string;

}

/**
 * @schema GetMlTaskRunResponse
 */
export interface GetMlTaskRunResponse {
  /**
   * @schema GetMlTaskRunResponse#TransformId
   */
  readonly transformId?: string;

  /**
   * @schema GetMlTaskRunResponse#TaskRunId
   */
  readonly taskRunId?: string;

  /**
   * @schema GetMlTaskRunResponse#Status
   */
  readonly status?: string;

  /**
   * @schema GetMlTaskRunResponse#LogGroupName
   */
  readonly logGroupName?: string;

  /**
   * @schema GetMlTaskRunResponse#Properties
   */
  readonly properties?: TaskRunProperties;

  /**
   * @schema GetMlTaskRunResponse#ErrorString
   */
  readonly errorString?: string;

  /**
   * @schema GetMlTaskRunResponse#StartedOn
   */
  readonly startedOn?: string;

  /**
   * @schema GetMlTaskRunResponse#LastModifiedOn
   */
  readonly lastModifiedOn?: string;

  /**
   * @schema GetMlTaskRunResponse#CompletedOn
   */
  readonly completedOn?: string;

  /**
   * @schema GetMlTaskRunResponse#ExecutionTime
   */
  readonly executionTime?: number;

}

/**
 * @schema GetMlTaskRunsRequest
 */
export interface GetMlTaskRunsRequest {
  /**
   * @schema GetMlTaskRunsRequest#TransformId
   */
  readonly transformId: string;

  /**
   * @schema GetMlTaskRunsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetMlTaskRunsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetMlTaskRunsRequest#Filter
   */
  readonly filter?: TaskRunFilterCriteria;

  /**
   * @schema GetMlTaskRunsRequest#Sort
   */
  readonly sort?: TaskRunSortCriteria;

}

/**
 * @schema GetMlTaskRunsResponse
 */
export interface GetMlTaskRunsResponse {
  /**
   * @schema GetMlTaskRunsResponse#TaskRuns
   */
  readonly taskRuns?: TaskRun[];

  /**
   * @schema GetMlTaskRunsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetMlTransformRequest
 */
export interface GetMlTransformRequest {
  /**
   * @schema GetMlTransformRequest#TransformId
   */
  readonly transformId: string;

}

/**
 * @schema GetMlTransformResponse
 */
export interface GetMlTransformResponse {
  /**
   * @schema GetMlTransformResponse#TransformId
   */
  readonly transformId?: string;

  /**
   * @schema GetMlTransformResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GetMlTransformResponse#Description
   */
  readonly description?: string;

  /**
   * @schema GetMlTransformResponse#Status
   */
  readonly status?: string;

  /**
   * @schema GetMlTransformResponse#CreatedOn
   */
  readonly createdOn?: string;

  /**
   * @schema GetMlTransformResponse#LastModifiedOn
   */
  readonly lastModifiedOn?: string;

  /**
   * @schema GetMlTransformResponse#InputRecordTables
   */
  readonly inputRecordTables?: GlueTable[];

  /**
   * @schema GetMlTransformResponse#Parameters
   */
  readonly parameters?: TransformParameters;

  /**
   * @schema GetMlTransformResponse#EvaluationMetrics
   */
  readonly evaluationMetrics?: EvaluationMetrics;

  /**
   * @schema GetMlTransformResponse#LabelCount
   */
  readonly labelCount?: number;

  /**
   * @schema GetMlTransformResponse#Schema
   */
  readonly schema?: SchemaColumn[];

  /**
   * @schema GetMlTransformResponse#Role
   */
  readonly role?: string;

  /**
   * @schema GetMlTransformResponse#GlueVersion
   */
  readonly glueVersion?: string;

  /**
   * @schema GetMlTransformResponse#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema GetMlTransformResponse#WorkerType
   */
  readonly workerType?: string;

  /**
   * @schema GetMlTransformResponse#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

  /**
   * @schema GetMlTransformResponse#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema GetMlTransformResponse#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema GetMlTransformResponse#TransformEncryption
   */
  readonly transformEncryption?: TransformEncryption;

}

/**
 * @schema GetMlTransformsRequest
 */
export interface GetMlTransformsRequest {
  /**
   * @schema GetMlTransformsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetMlTransformsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetMlTransformsRequest#Filter
   */
  readonly filter?: TransformFilterCriteria;

  /**
   * @schema GetMlTransformsRequest#Sort
   */
  readonly sort?: TransformSortCriteria;

}

/**
 * @schema GetMlTransformsResponse
 */
export interface GetMlTransformsResponse {
  /**
   * @schema GetMlTransformsResponse#Transforms
   */
  readonly transforms: MlTransform[];

  /**
   * @schema GetMlTransformsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetMappingRequest
 */
export interface GetMappingRequest {
  /**
   * @schema GetMappingRequest#Source
   */
  readonly source: CatalogEntry;

  /**
   * @schema GetMappingRequest#Sinks
   */
  readonly sinks?: CatalogEntry[];

  /**
   * @schema GetMappingRequest#Location
   */
  readonly location?: Location;

}

/**
 * @schema GetMappingResponse
 */
export interface GetMappingResponse {
  /**
   * @schema GetMappingResponse#Mapping
   */
  readonly mapping: MappingEntry[];

}

/**
 * @schema GetPartitionRequest
 */
export interface GetPartitionRequest {
  /**
   * @schema GetPartitionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GetPartitionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GetPartitionRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema GetPartitionRequest#PartitionValues
   */
  readonly partitionValues: string[];

}

/**
 * @schema GetPartitionResponse
 */
export interface GetPartitionResponse {
  /**
   * @schema GetPartitionResponse#Partition
   */
  readonly partition?: Partition;

}

/**
 * @schema GetPartitionIndexesRequest
 */
export interface GetPartitionIndexesRequest {
  /**
   * @schema GetPartitionIndexesRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GetPartitionIndexesRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GetPartitionIndexesRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema GetPartitionIndexesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetPartitionIndexesResponse
 */
export interface GetPartitionIndexesResponse {
  /**
   * @schema GetPartitionIndexesResponse#PartitionIndexDescriptorList
   */
  readonly partitionIndexDescriptorList?: PartitionIndexDescriptor[];

  /**
   * @schema GetPartitionIndexesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetPartitionsRequest
 */
export interface GetPartitionsRequest {
  /**
   * @schema GetPartitionsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GetPartitionsRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GetPartitionsRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema GetPartitionsRequest#Expression
   */
  readonly expression?: string;

  /**
   * @schema GetPartitionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetPartitionsRequest#Segment
   */
  readonly segment?: Segment;

  /**
   * @schema GetPartitionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetPartitionsResponse
 */
export interface GetPartitionsResponse {
  /**
   * @schema GetPartitionsResponse#Partitions
   */
  readonly partitions?: Partition[];

  /**
   * @schema GetPartitionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetPlanRequest
 */
export interface GetPlanRequest {
  /**
   * @schema GetPlanRequest#Mapping
   */
  readonly mapping: MappingEntry[];

  /**
   * @schema GetPlanRequest#Source
   */
  readonly source: CatalogEntry;

  /**
   * @schema GetPlanRequest#Sinks
   */
  readonly sinks?: CatalogEntry[];

  /**
   * @schema GetPlanRequest#Location
   */
  readonly location?: Location;

  /**
   * @schema GetPlanRequest#Language
   */
  readonly language?: string;

  /**
   * @schema GetPlanRequest#AdditionalPlanOptionsMap
   */
  readonly additionalPlanOptionsMap?: { [key: string]: string };

}

/**
 * @schema GetPlanResponse
 */
export interface GetPlanResponse {
  /**
   * @schema GetPlanResponse#PythonScript
   */
  readonly pythonScript?: string;

  /**
   * @schema GetPlanResponse#ScalaCode
   */
  readonly scalaCode?: string;

}

/**
 * @schema GetRegistryInput
 */
export interface GetRegistryInput {
  /**
   * @schema GetRegistryInput#RegistryId
   */
  readonly registryId: RegistryId;

}

/**
 * @schema GetRegistryResponse
 */
export interface GetRegistryResponse {
  /**
   * @schema GetRegistryResponse#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema GetRegistryResponse#RegistryArn
   */
  readonly registryArn?: string;

  /**
   * @schema GetRegistryResponse#Description
   */
  readonly description?: string;

  /**
   * @schema GetRegistryResponse#Status
   */
  readonly status?: string;

  /**
   * @schema GetRegistryResponse#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema GetRegistryResponse#UpdatedTime
   */
  readonly updatedTime?: string;

}

/**
 * @schema GetResourcePoliciesRequest
 */
export interface GetResourcePoliciesRequest {
  /**
   * @schema GetResourcePoliciesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetResourcePoliciesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetResourcePoliciesResponse
 */
export interface GetResourcePoliciesResponse {
  /**
   * @schema GetResourcePoliciesResponse#GetResourcePoliciesResponseList
   */
  readonly getResourcePoliciesResponseList?: GluePolicy[];

  /**
   * @schema GetResourcePoliciesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetResourcePolicyRequest
 */
export interface GetResourcePolicyRequest {
  /**
   * @schema GetResourcePolicyRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * @schema GetResourcePolicyResponse
 */
export interface GetResourcePolicyResponse {
  /**
   * @schema GetResourcePolicyResponse#PolicyInJson
   */
  readonly policyInJson?: string;

  /**
   * @schema GetResourcePolicyResponse#PolicyHash
   */
  readonly policyHash?: string;

  /**
   * @schema GetResourcePolicyResponse#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema GetResourcePolicyResponse#UpdateTime
   */
  readonly updateTime?: string;

}

/**
 * @schema GetSchemaInput
 */
export interface GetSchemaInput {
  /**
   * @schema GetSchemaInput#SchemaId
   */
  readonly schemaId: SchemaId;

}

/**
 * @schema GetSchemaResponse
 */
export interface GetSchemaResponse {
  /**
   * @schema GetSchemaResponse#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema GetSchemaResponse#RegistryArn
   */
  readonly registryArn?: string;

  /**
   * @schema GetSchemaResponse#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema GetSchemaResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema GetSchemaResponse#Description
   */
  readonly description?: string;

  /**
   * @schema GetSchemaResponse#DataFormat
   */
  readonly dataFormat?: string;

  /**
   * @schema GetSchemaResponse#Compatibility
   */
  readonly compatibility?: string;

  /**
   * @schema GetSchemaResponse#SchemaCheckpoint
   */
  readonly schemaCheckpoint?: number;

  /**
   * @schema GetSchemaResponse#LatestSchemaVersion
   */
  readonly latestSchemaVersion?: number;

  /**
   * @schema GetSchemaResponse#NextSchemaVersion
   */
  readonly nextSchemaVersion?: number;

  /**
   * @schema GetSchemaResponse#SchemaStatus
   */
  readonly schemaStatus?: string;

  /**
   * @schema GetSchemaResponse#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema GetSchemaResponse#UpdatedTime
   */
  readonly updatedTime?: string;

}

/**
 * @schema GetSchemaByDefinitionInput
 */
export interface GetSchemaByDefinitionInput {
  /**
   * @schema GetSchemaByDefinitionInput#SchemaId
   */
  readonly schemaId: SchemaId;

  /**
   * @schema GetSchemaByDefinitionInput#SchemaDefinition
   */
  readonly schemaDefinition: string;

}

/**
 * @schema GetSchemaByDefinitionResponse
 */
export interface GetSchemaByDefinitionResponse {
  /**
   * @schema GetSchemaByDefinitionResponse#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema GetSchemaByDefinitionResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema GetSchemaByDefinitionResponse#DataFormat
   */
  readonly dataFormat?: string;

  /**
   * @schema GetSchemaByDefinitionResponse#Status
   */
  readonly status?: string;

  /**
   * @schema GetSchemaByDefinitionResponse#CreatedTime
   */
  readonly createdTime?: string;

}

/**
 * @schema GetSchemaVersionInput
 */
export interface GetSchemaVersionInput {
  /**
   * @schema GetSchemaVersionInput#SchemaId
   */
  readonly schemaId?: SchemaId;

  /**
   * @schema GetSchemaVersionInput#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema GetSchemaVersionInput#SchemaVersionNumber
   */
  readonly schemaVersionNumber?: SchemaVersionNumber;

}

/**
 * @schema GetSchemaVersionResponse
 */
export interface GetSchemaVersionResponse {
  /**
   * @schema GetSchemaVersionResponse#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema GetSchemaVersionResponse#SchemaDefinition
   */
  readonly schemaDefinition?: string;

  /**
   * @schema GetSchemaVersionResponse#DataFormat
   */
  readonly dataFormat?: string;

  /**
   * @schema GetSchemaVersionResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema GetSchemaVersionResponse#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema GetSchemaVersionResponse#Status
   */
  readonly status?: string;

  /**
   * @schema GetSchemaVersionResponse#CreatedTime
   */
  readonly createdTime?: string;

}

/**
 * @schema GetSchemaVersionsDiffInput
 */
export interface GetSchemaVersionsDiffInput {
  /**
   * @schema GetSchemaVersionsDiffInput#SchemaId
   */
  readonly schemaId: SchemaId;

  /**
   * @schema GetSchemaVersionsDiffInput#FirstSchemaVersionNumber
   */
  readonly firstSchemaVersionNumber: SchemaVersionNumber;

  /**
   * @schema GetSchemaVersionsDiffInput#SecondSchemaVersionNumber
   */
  readonly secondSchemaVersionNumber: SchemaVersionNumber;

  /**
   * @schema GetSchemaVersionsDiffInput#SchemaDiffType
   */
  readonly schemaDiffType: string;

}

/**
 * @schema GetSchemaVersionsDiffResponse
 */
export interface GetSchemaVersionsDiffResponse {
  /**
   * @schema GetSchemaVersionsDiffResponse#Diff
   */
  readonly diff?: string;

}

/**
 * @schema GetSecurityConfigurationRequest
 */
export interface GetSecurityConfigurationRequest {
  /**
   * @schema GetSecurityConfigurationRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GetSecurityConfigurationResponse
 */
export interface GetSecurityConfigurationResponse {
  /**
   * @schema GetSecurityConfigurationResponse#SecurityConfiguration
   */
  readonly securityConfiguration?: SecurityConfiguration;

}

/**
 * @schema GetSecurityConfigurationsRequest
 */
export interface GetSecurityConfigurationsRequest {
  /**
   * @schema GetSecurityConfigurationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetSecurityConfigurationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetSecurityConfigurationsResponse
 */
export interface GetSecurityConfigurationsResponse {
  /**
   * @schema GetSecurityConfigurationsResponse#SecurityConfigurations
   */
  readonly securityConfigurations?: SecurityConfiguration[];

  /**
   * @schema GetSecurityConfigurationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetTableRequest
 */
export interface GetTableRequest {
  /**
   * @schema GetTableRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GetTableRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GetTableRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GetTableResponse
 */
export interface GetTableResponse {
  /**
   * @schema GetTableResponse#Table
   */
  readonly table?: Table;

}

/**
 * @schema GetTableVersionRequest
 */
export interface GetTableVersionRequest {
  /**
   * @schema GetTableVersionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GetTableVersionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GetTableVersionRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema GetTableVersionRequest#VersionId
   */
  readonly versionId?: string;

}

/**
 * @schema GetTableVersionResponse
 */
export interface GetTableVersionResponse {
  /**
   * @schema GetTableVersionResponse#TableVersion
   */
  readonly tableVersion?: TableVersion;

}

/**
 * @schema GetTableVersionsRequest
 */
export interface GetTableVersionsRequest {
  /**
   * @schema GetTableVersionsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GetTableVersionsRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GetTableVersionsRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema GetTableVersionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetTableVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetTableVersionsResponse
 */
export interface GetTableVersionsResponse {
  /**
   * @schema GetTableVersionsResponse#TableVersions
   */
  readonly tableVersions?: TableVersion[];

  /**
   * @schema GetTableVersionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetTablesRequest
 */
export interface GetTablesRequest {
  /**
   * @schema GetTablesRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GetTablesRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GetTablesRequest#Expression
   */
  readonly expression?: string;

  /**
   * @schema GetTablesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetTablesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetTablesResponse
 */
export interface GetTablesResponse {
  /**
   * @schema GetTablesResponse#TableList
   */
  readonly tableList?: Table[];

  /**
   * @schema GetTablesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetTagsRequest
 */
export interface GetTagsRequest {
  /**
   * @schema GetTagsRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema GetTagsResponse
 */
export interface GetTagsResponse {
  /**
   * @schema GetTagsResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GetTriggerRequest
 */
export interface GetTriggerRequest {
  /**
   * @schema GetTriggerRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GetTriggerResponse
 */
export interface GetTriggerResponse {
  /**
   * @schema GetTriggerResponse#Trigger
   */
  readonly trigger?: Trigger;

}

/**
 * @schema GetTriggersRequest
 */
export interface GetTriggersRequest {
  /**
   * @schema GetTriggersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetTriggersRequest#DependentJobName
   */
  readonly dependentJobName?: string;

  /**
   * @schema GetTriggersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetTriggersResponse
 */
export interface GetTriggersResponse {
  /**
   * @schema GetTriggersResponse#Triggers
   */
  readonly triggers?: Trigger[];

  /**
   * @schema GetTriggersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetUserDefinedFunctionRequest
 */
export interface GetUserDefinedFunctionRequest {
  /**
   * @schema GetUserDefinedFunctionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GetUserDefinedFunctionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GetUserDefinedFunctionRequest#FunctionName
   */
  readonly functionName: string;

}

/**
 * @schema GetUserDefinedFunctionResponse
 */
export interface GetUserDefinedFunctionResponse {
  /**
   * @schema GetUserDefinedFunctionResponse#UserDefinedFunction
   */
  readonly userDefinedFunction?: UserDefinedFunction;

}

/**
 * @schema GetUserDefinedFunctionsRequest
 */
export interface GetUserDefinedFunctionsRequest {
  /**
   * @schema GetUserDefinedFunctionsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GetUserDefinedFunctionsRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema GetUserDefinedFunctionsRequest#Pattern
   */
  readonly pattern: string;

  /**
   * @schema GetUserDefinedFunctionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetUserDefinedFunctionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetUserDefinedFunctionsResponse
 */
export interface GetUserDefinedFunctionsResponse {
  /**
   * @schema GetUserDefinedFunctionsResponse#UserDefinedFunctions
   */
  readonly userDefinedFunctions?: UserDefinedFunction[];

  /**
   * @schema GetUserDefinedFunctionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetWorkflowRequest
 */
export interface GetWorkflowRequest {
  /**
   * @schema GetWorkflowRequest#Name
   */
  readonly name: string;

  /**
   * @schema GetWorkflowRequest#IncludeGraph
   */
  readonly includeGraph?: boolean;

}

/**
 * @schema GetWorkflowResponse
 */
export interface GetWorkflowResponse {
  /**
   * @schema GetWorkflowResponse#Workflow
   */
  readonly workflow?: Workflow;

}

/**
 * @schema GetWorkflowRunRequest
 */
export interface GetWorkflowRunRequest {
  /**
   * @schema GetWorkflowRunRequest#Name
   */
  readonly name: string;

  /**
   * @schema GetWorkflowRunRequest#RunId
   */
  readonly runId: string;

  /**
   * @schema GetWorkflowRunRequest#IncludeGraph
   */
  readonly includeGraph?: boolean;

}

/**
 * @schema GetWorkflowRunResponse
 */
export interface GetWorkflowRunResponse {
  /**
   * @schema GetWorkflowRunResponse#Run
   */
  readonly run?: WorkflowRun;

}

/**
 * @schema GetWorkflowRunPropertiesRequest
 */
export interface GetWorkflowRunPropertiesRequest {
  /**
   * @schema GetWorkflowRunPropertiesRequest#Name
   */
  readonly name: string;

  /**
   * @schema GetWorkflowRunPropertiesRequest#RunId
   */
  readonly runId: string;

}

/**
 * @schema GetWorkflowRunPropertiesResponse
 */
export interface GetWorkflowRunPropertiesResponse {
  /**
   * @schema GetWorkflowRunPropertiesResponse#RunProperties
   */
  readonly runProperties?: { [key: string]: string };

}

/**
 * @schema GetWorkflowRunsRequest
 */
export interface GetWorkflowRunsRequest {
  /**
   * @schema GetWorkflowRunsRequest#Name
   */
  readonly name: string;

  /**
   * @schema GetWorkflowRunsRequest#IncludeGraph
   */
  readonly includeGraph?: boolean;

  /**
   * @schema GetWorkflowRunsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetWorkflowRunsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetWorkflowRunsResponse
 */
export interface GetWorkflowRunsResponse {
  /**
   * @schema GetWorkflowRunsResponse#Runs
   */
  readonly runs?: WorkflowRun[];

  /**
   * @schema GetWorkflowRunsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ImportCatalogToGlueRequest
 */
export interface ImportCatalogToGlueRequest {
  /**
   * @schema ImportCatalogToGlueRequest#CatalogId
   */
  readonly catalogId?: string;

}

/**
 * @schema ImportCatalogToGlueResponse
 */
export interface ImportCatalogToGlueResponse {
}

/**
 * @schema ListCrawlersRequest
 */
export interface ListCrawlersRequest {
  /**
   * @schema ListCrawlersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListCrawlersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListCrawlersRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ListCrawlersResponse
 */
export interface ListCrawlersResponse {
  /**
   * @schema ListCrawlersResponse#CrawlerNames
   */
  readonly crawlerNames?: string[];

  /**
   * @schema ListCrawlersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDevEndpointsRequest
 */
export interface ListDevEndpointsRequest {
  /**
   * @schema ListDevEndpointsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDevEndpointsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListDevEndpointsRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ListDevEndpointsResponse
 */
export interface ListDevEndpointsResponse {
  /**
   * @schema ListDevEndpointsResponse#DevEndpointNames
   */
  readonly devEndpointNames?: string[];

  /**
   * @schema ListDevEndpointsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListJobsRequest
 */
export interface ListJobsRequest {
  /**
   * @schema ListJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListJobsRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ListJobsResponse
 */
export interface ListJobsResponse {
  /**
   * @schema ListJobsResponse#JobNames
   */
  readonly jobNames?: string[];

  /**
   * @schema ListJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListMlTransformsRequest
 */
export interface ListMlTransformsRequest {
  /**
   * @schema ListMlTransformsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListMlTransformsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListMlTransformsRequest#Filter
   */
  readonly filter?: TransformFilterCriteria;

  /**
   * @schema ListMlTransformsRequest#Sort
   */
  readonly sort?: TransformSortCriteria;

  /**
   * @schema ListMlTransformsRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ListMlTransformsResponse
 */
export interface ListMlTransformsResponse {
  /**
   * @schema ListMlTransformsResponse#TransformIds
   */
  readonly transformIds: string[];

  /**
   * @schema ListMlTransformsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRegistriesInput
 */
export interface ListRegistriesInput {
  /**
   * @schema ListRegistriesInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListRegistriesInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRegistriesResponse
 */
export interface ListRegistriesResponse {
  /**
   * @schema ListRegistriesResponse#Registries
   */
  readonly registries?: RegistryListItem[];

  /**
   * @schema ListRegistriesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSchemaVersionsInput
 */
export interface ListSchemaVersionsInput {
  /**
   * @schema ListSchemaVersionsInput#SchemaId
   */
  readonly schemaId: SchemaId;

  /**
   * @schema ListSchemaVersionsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListSchemaVersionsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSchemaVersionsResponse
 */
export interface ListSchemaVersionsResponse {
  /**
   * @schema ListSchemaVersionsResponse#Schemas
   */
  readonly schemas?: SchemaVersionListItem[];

  /**
   * @schema ListSchemaVersionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSchemasInput
 */
export interface ListSchemasInput {
  /**
   * @schema ListSchemasInput#RegistryId
   */
  readonly registryId?: RegistryId;

  /**
   * @schema ListSchemasInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListSchemasInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSchemasResponse
 */
export interface ListSchemasResponse {
  /**
   * @schema ListSchemasResponse#Schemas
   */
  readonly schemas?: SchemaListItem[];

  /**
   * @schema ListSchemasResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTriggersRequest
 */
export interface ListTriggersRequest {
  /**
   * @schema ListTriggersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTriggersRequest#DependentJobName
   */
  readonly dependentJobName?: string;

  /**
   * @schema ListTriggersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListTriggersRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ListTriggersResponse
 */
export interface ListTriggersResponse {
  /**
   * @schema ListTriggersResponse#TriggerNames
   */
  readonly triggerNames?: string[];

  /**
   * @schema ListTriggersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListWorkflowsRequest
 */
export interface ListWorkflowsRequest {
  /**
   * @schema ListWorkflowsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListWorkflowsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListWorkflowsResponse
 */
export interface ListWorkflowsResponse {
  /**
   * @schema ListWorkflowsResponse#Workflows
   */
  readonly workflows?: string[];

  /**
   * @schema ListWorkflowsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PutDataCatalogEncryptionSettingsRequest
 */
export interface PutDataCatalogEncryptionSettingsRequest {
  /**
   * @schema PutDataCatalogEncryptionSettingsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema PutDataCatalogEncryptionSettingsRequest#DataCatalogEncryptionSettings
   */
  readonly dataCatalogEncryptionSettings: DataCatalogEncryptionSettings;

}

/**
 * @schema PutDataCatalogEncryptionSettingsResponse
 */
export interface PutDataCatalogEncryptionSettingsResponse {
}

/**
 * @schema PutResourcePolicyRequest
 */
export interface PutResourcePolicyRequest {
  /**
   * @schema PutResourcePolicyRequest#PolicyInJson
   */
  readonly policyInJson: string;

  /**
   * @schema PutResourcePolicyRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema PutResourcePolicyRequest#PolicyHashCondition
   */
  readonly policyHashCondition?: string;

  /**
   * @schema PutResourcePolicyRequest#PolicyExistsCondition
   */
  readonly policyExistsCondition?: string;

  /**
   * @schema PutResourcePolicyRequest#EnableHybrid
   */
  readonly enableHybrid?: string;

}

/**
 * @schema PutResourcePolicyResponse
 */
export interface PutResourcePolicyResponse {
  /**
   * @schema PutResourcePolicyResponse#PolicyHash
   */
  readonly policyHash?: string;

}

/**
 * @schema PutSchemaVersionMetadataInput
 */
export interface PutSchemaVersionMetadataInput {
  /**
   * @schema PutSchemaVersionMetadataInput#SchemaId
   */
  readonly schemaId?: SchemaId;

  /**
   * @schema PutSchemaVersionMetadataInput#SchemaVersionNumber
   */
  readonly schemaVersionNumber?: SchemaVersionNumber;

  /**
   * @schema PutSchemaVersionMetadataInput#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema PutSchemaVersionMetadataInput#MetadataKeyValue
   */
  readonly metadataKeyValue: MetadataKeyValuePair;

}

/**
 * @schema PutSchemaVersionMetadataResponse
 */
export interface PutSchemaVersionMetadataResponse {
  /**
   * @schema PutSchemaVersionMetadataResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema PutSchemaVersionMetadataResponse#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema PutSchemaVersionMetadataResponse#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema PutSchemaVersionMetadataResponse#LatestVersion
   */
  readonly latestVersion?: boolean;

  /**
   * @schema PutSchemaVersionMetadataResponse#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema PutSchemaVersionMetadataResponse#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema PutSchemaVersionMetadataResponse#MetadataKey
   */
  readonly metadataKey?: string;

  /**
   * @schema PutSchemaVersionMetadataResponse#MetadataValue
   */
  readonly metadataValue?: string;

}

/**
 * @schema PutWorkflowRunPropertiesRequest
 */
export interface PutWorkflowRunPropertiesRequest {
  /**
   * @schema PutWorkflowRunPropertiesRequest#Name
   */
  readonly name: string;

  /**
   * @schema PutWorkflowRunPropertiesRequest#RunId
   */
  readonly runId: string;

  /**
   * @schema PutWorkflowRunPropertiesRequest#RunProperties
   */
  readonly runProperties: { [key: string]: string };

}

/**
 * @schema PutWorkflowRunPropertiesResponse
 */
export interface PutWorkflowRunPropertiesResponse {
}

/**
 * @schema QuerySchemaVersionMetadataInput
 */
export interface QuerySchemaVersionMetadataInput {
  /**
   * @schema QuerySchemaVersionMetadataInput#SchemaId
   */
  readonly schemaId?: SchemaId;

  /**
   * @schema QuerySchemaVersionMetadataInput#SchemaVersionNumber
   */
  readonly schemaVersionNumber?: SchemaVersionNumber;

  /**
   * @schema QuerySchemaVersionMetadataInput#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema QuerySchemaVersionMetadataInput#MetadataList
   */
  readonly metadataList?: MetadataKeyValuePair[];

  /**
   * @schema QuerySchemaVersionMetadataInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema QuerySchemaVersionMetadataInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema QuerySchemaVersionMetadataResponse
 */
export interface QuerySchemaVersionMetadataResponse {
  /**
   * @schema QuerySchemaVersionMetadataResponse#MetadataInfoMap
   */
  readonly metadataInfoMap?: { [key: string]: MetadataInfo };

  /**
   * @schema QuerySchemaVersionMetadataResponse#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema QuerySchemaVersionMetadataResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RegisterSchemaVersionInput
 */
export interface RegisterSchemaVersionInput {
  /**
   * @schema RegisterSchemaVersionInput#SchemaId
   */
  readonly schemaId: SchemaId;

  /**
   * @schema RegisterSchemaVersionInput#SchemaDefinition
   */
  readonly schemaDefinition: string;

}

/**
 * @schema RegisterSchemaVersionResponse
 */
export interface RegisterSchemaVersionResponse {
  /**
   * @schema RegisterSchemaVersionResponse#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema RegisterSchemaVersionResponse#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema RegisterSchemaVersionResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema RemoveSchemaVersionMetadataInput
 */
export interface RemoveSchemaVersionMetadataInput {
  /**
   * @schema RemoveSchemaVersionMetadataInput#SchemaId
   */
  readonly schemaId?: SchemaId;

  /**
   * @schema RemoveSchemaVersionMetadataInput#SchemaVersionNumber
   */
  readonly schemaVersionNumber?: SchemaVersionNumber;

  /**
   * @schema RemoveSchemaVersionMetadataInput#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema RemoveSchemaVersionMetadataInput#MetadataKeyValue
   */
  readonly metadataKeyValue: MetadataKeyValuePair;

}

/**
 * @schema RemoveSchemaVersionMetadataResponse
 */
export interface RemoveSchemaVersionMetadataResponse {
  /**
   * @schema RemoveSchemaVersionMetadataResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema RemoveSchemaVersionMetadataResponse#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema RemoveSchemaVersionMetadataResponse#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema RemoveSchemaVersionMetadataResponse#LatestVersion
   */
  readonly latestVersion?: boolean;

  /**
   * @schema RemoveSchemaVersionMetadataResponse#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema RemoveSchemaVersionMetadataResponse#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema RemoveSchemaVersionMetadataResponse#MetadataKey
   */
  readonly metadataKey?: string;

  /**
   * @schema RemoveSchemaVersionMetadataResponse#MetadataValue
   */
  readonly metadataValue?: string;

}

/**
 * @schema ResetJobBookmarkRequest
 */
export interface ResetJobBookmarkRequest {
  /**
   * @schema ResetJobBookmarkRequest#JobName
   */
  readonly jobName: string;

  /**
   * @schema ResetJobBookmarkRequest#RunId
   */
  readonly runId?: string;

}

/**
 * @schema ResetJobBookmarkResponse
 */
export interface ResetJobBookmarkResponse {
  /**
   * @schema ResetJobBookmarkResponse#JobBookmarkEntry
   */
  readonly jobBookmarkEntry?: JobBookmarkEntry;

}

/**
 * @schema ResumeWorkflowRunRequest
 */
export interface ResumeWorkflowRunRequest {
  /**
   * @schema ResumeWorkflowRunRequest#Name
   */
  readonly name: string;

  /**
   * @schema ResumeWorkflowRunRequest#RunId
   */
  readonly runId: string;

  /**
   * @schema ResumeWorkflowRunRequest#NodeIds
   */
  readonly nodeIds: string[];

}

/**
 * @schema ResumeWorkflowRunResponse
 */
export interface ResumeWorkflowRunResponse {
  /**
   * @schema ResumeWorkflowRunResponse#RunId
   */
  readonly runId?: string;

  /**
   * @schema ResumeWorkflowRunResponse#NodeIds
   */
  readonly nodeIds?: string[];

}

/**
 * @schema SearchTablesRequest
 */
export interface SearchTablesRequest {
  /**
   * @schema SearchTablesRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema SearchTablesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchTablesRequest#Filters
   */
  readonly filters?: PropertyPredicate[];

  /**
   * @schema SearchTablesRequest#SearchText
   */
  readonly searchText?: string;

  /**
   * @schema SearchTablesRequest#SortCriteria
   */
  readonly sortCriteria?: SortCriterion[];

  /**
   * @schema SearchTablesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SearchTablesRequest#ResourceShareType
   */
  readonly resourceShareType?: string;

}

/**
 * @schema SearchTablesResponse
 */
export interface SearchTablesResponse {
  /**
   * @schema SearchTablesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchTablesResponse#TableList
   */
  readonly tableList?: Table[];

}

/**
 * @schema StartCrawlerRequest
 */
export interface StartCrawlerRequest {
  /**
   * @schema StartCrawlerRequest#Name
   */
  readonly name: string;

}

/**
 * @schema StartCrawlerResponse
 */
export interface StartCrawlerResponse {
}

/**
 * @schema StartCrawlerScheduleRequest
 */
export interface StartCrawlerScheduleRequest {
  /**
   * @schema StartCrawlerScheduleRequest#CrawlerName
   */
  readonly crawlerName: string;

}

/**
 * @schema StartCrawlerScheduleResponse
 */
export interface StartCrawlerScheduleResponse {
}

/**
 * @schema StartExportLabelsTaskRunRequest
 */
export interface StartExportLabelsTaskRunRequest {
  /**
   * @schema StartExportLabelsTaskRunRequest#TransformId
   */
  readonly transformId: string;

  /**
   * @schema StartExportLabelsTaskRunRequest#OutputS3Path
   */
  readonly outputS3Path: string;

}

/**
 * @schema StartExportLabelsTaskRunResponse
 */
export interface StartExportLabelsTaskRunResponse {
  /**
   * @schema StartExportLabelsTaskRunResponse#TaskRunId
   */
  readonly taskRunId?: string;

}

/**
 * @schema StartImportLabelsTaskRunRequest
 */
export interface StartImportLabelsTaskRunRequest {
  /**
   * @schema StartImportLabelsTaskRunRequest#TransformId
   */
  readonly transformId: string;

  /**
   * @schema StartImportLabelsTaskRunRequest#InputS3Path
   */
  readonly inputS3Path: string;

  /**
   * @schema StartImportLabelsTaskRunRequest#ReplaceAllLabels
   */
  readonly replaceAllLabels?: boolean;

}

/**
 * @schema StartImportLabelsTaskRunResponse
 */
export interface StartImportLabelsTaskRunResponse {
  /**
   * @schema StartImportLabelsTaskRunResponse#TaskRunId
   */
  readonly taskRunId?: string;

}

/**
 * @schema StartJobRunRequest
 */
export interface StartJobRunRequest {
  /**
   * @schema StartJobRunRequest#JobName
   */
  readonly jobName: string;

  /**
   * @schema StartJobRunRequest#JobRunId
   */
  readonly jobRunId?: string;

  /**
   * @schema StartJobRunRequest#Arguments
   */
  readonly arguments?: { [key: string]: string };

  /**
   * @schema StartJobRunRequest#AllocatedCapacity
   */
  readonly allocatedCapacity?: number;

  /**
   * @schema StartJobRunRequest#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema StartJobRunRequest#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema StartJobRunRequest#SecurityConfiguration
   */
  readonly securityConfiguration?: string;

  /**
   * @schema StartJobRunRequest#NotificationProperty
   */
  readonly notificationProperty?: NotificationProperty;

  /**
   * @schema StartJobRunRequest#WorkerType
   */
  readonly workerType?: string;

  /**
   * @schema StartJobRunRequest#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

}

/**
 * @schema StartJobRunResponse
 */
export interface StartJobRunResponse {
  /**
   * @schema StartJobRunResponse#JobRunId
   */
  readonly jobRunId?: string;

}

/**
 * @schema StartMlEvaluationTaskRunRequest
 */
export interface StartMlEvaluationTaskRunRequest {
  /**
   * @schema StartMlEvaluationTaskRunRequest#TransformId
   */
  readonly transformId: string;

}

/**
 * @schema StartMlEvaluationTaskRunResponse
 */
export interface StartMlEvaluationTaskRunResponse {
  /**
   * @schema StartMlEvaluationTaskRunResponse#TaskRunId
   */
  readonly taskRunId?: string;

}

/**
 * @schema StartMlLabelingSetGenerationTaskRunRequest
 */
export interface StartMlLabelingSetGenerationTaskRunRequest {
  /**
   * @schema StartMlLabelingSetGenerationTaskRunRequest#TransformId
   */
  readonly transformId: string;

  /**
   * @schema StartMlLabelingSetGenerationTaskRunRequest#OutputS3Path
   */
  readonly outputS3Path: string;

}

/**
 * @schema StartMlLabelingSetGenerationTaskRunResponse
 */
export interface StartMlLabelingSetGenerationTaskRunResponse {
  /**
   * @schema StartMlLabelingSetGenerationTaskRunResponse#TaskRunId
   */
  readonly taskRunId?: string;

}

/**
 * @schema StartTriggerRequest
 */
export interface StartTriggerRequest {
  /**
   * @schema StartTriggerRequest#Name
   */
  readonly name: string;

}

/**
 * @schema StartTriggerResponse
 */
export interface StartTriggerResponse {
  /**
   * @schema StartTriggerResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema StartWorkflowRunRequest
 */
export interface StartWorkflowRunRequest {
  /**
   * @schema StartWorkflowRunRequest#Name
   */
  readonly name: string;

}

/**
 * @schema StartWorkflowRunResponse
 */
export interface StartWorkflowRunResponse {
  /**
   * @schema StartWorkflowRunResponse#RunId
   */
  readonly runId?: string;

}

/**
 * @schema StopCrawlerRequest
 */
export interface StopCrawlerRequest {
  /**
   * @schema StopCrawlerRequest#Name
   */
  readonly name: string;

}

/**
 * @schema StopCrawlerResponse
 */
export interface StopCrawlerResponse {
}

/**
 * @schema StopCrawlerScheduleRequest
 */
export interface StopCrawlerScheduleRequest {
  /**
   * @schema StopCrawlerScheduleRequest#CrawlerName
   */
  readonly crawlerName: string;

}

/**
 * @schema StopCrawlerScheduleResponse
 */
export interface StopCrawlerScheduleResponse {
}

/**
 * @schema StopTriggerRequest
 */
export interface StopTriggerRequest {
  /**
   * @schema StopTriggerRequest#Name
   */
  readonly name: string;

}

/**
 * @schema StopTriggerResponse
 */
export interface StopTriggerResponse {
  /**
   * @schema StopTriggerResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema StopWorkflowRunRequest
 */
export interface StopWorkflowRunRequest {
  /**
   * @schema StopWorkflowRunRequest#Name
   */
  readonly name: string;

  /**
   * @schema StopWorkflowRunRequest#RunId
   */
  readonly runId: string;

}

/**
 * @schema StopWorkflowRunResponse
 */
export interface StopWorkflowRunResponse {
}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#TagsToAdd
   */
  readonly tagsToAdd: { [key: string]: string };

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
   * @schema UntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#TagsToRemove
   */
  readonly tagsToRemove: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateClassifierRequest
 */
export interface UpdateClassifierRequest {
  /**
   * @schema UpdateClassifierRequest#GrokClassifier
   */
  readonly grokClassifier?: UpdateGrokClassifierRequest;

  /**
   * @schema UpdateClassifierRequest#XMLClassifier
   */
  readonly xmlClassifier?: UpdateXmlClassifierRequest;

  /**
   * @schema UpdateClassifierRequest#JsonClassifier
   */
  readonly jsonClassifier?: UpdateJsonClassifierRequest;

  /**
   * @schema UpdateClassifierRequest#CsvClassifier
   */
  readonly csvClassifier?: UpdateCsvClassifierRequest;

}

/**
 * @schema UpdateClassifierResponse
 */
export interface UpdateClassifierResponse {
}

/**
 * @schema UpdateColumnStatisticsForPartitionRequest
 */
export interface UpdateColumnStatisticsForPartitionRequest {
  /**
   * @schema UpdateColumnStatisticsForPartitionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema UpdateColumnStatisticsForPartitionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema UpdateColumnStatisticsForPartitionRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema UpdateColumnStatisticsForPartitionRequest#PartitionValues
   */
  readonly partitionValues: string[];

  /**
   * @schema UpdateColumnStatisticsForPartitionRequest#ColumnStatisticsList
   */
  readonly columnStatisticsList: ColumnStatistics[];

}

/**
 * @schema UpdateColumnStatisticsForPartitionResponse
 */
export interface UpdateColumnStatisticsForPartitionResponse {
  /**
   * @schema UpdateColumnStatisticsForPartitionResponse#Errors
   */
  readonly errors?: ColumnStatisticsError[];

}

/**
 * @schema UpdateColumnStatisticsForTableRequest
 */
export interface UpdateColumnStatisticsForTableRequest {
  /**
   * @schema UpdateColumnStatisticsForTableRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema UpdateColumnStatisticsForTableRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema UpdateColumnStatisticsForTableRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema UpdateColumnStatisticsForTableRequest#ColumnStatisticsList
   */
  readonly columnStatisticsList: ColumnStatistics[];

}

/**
 * @schema UpdateColumnStatisticsForTableResponse
 */
export interface UpdateColumnStatisticsForTableResponse {
  /**
   * @schema UpdateColumnStatisticsForTableResponse#Errors
   */
  readonly errors?: ColumnStatisticsError[];

}

/**
 * @schema UpdateConnectionRequest
 */
export interface UpdateConnectionRequest {
  /**
   * @schema UpdateConnectionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema UpdateConnectionRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateConnectionRequest#ConnectionInput
   */
  readonly connectionInput: ConnectionInput;

}

/**
 * @schema UpdateConnectionResponse
 */
export interface UpdateConnectionResponse {
}

/**
 * @schema UpdateCrawlerRequest
 */
export interface UpdateCrawlerRequest {
  /**
   * @schema UpdateCrawlerRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateCrawlerRequest#Role
   */
  readonly role?: string;

  /**
   * @schema UpdateCrawlerRequest#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema UpdateCrawlerRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateCrawlerRequest#Targets
   */
  readonly targets?: CrawlerTargets;

  /**
   * @schema UpdateCrawlerRequest#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema UpdateCrawlerRequest#Classifiers
   */
  readonly classifiers?: string[];

  /**
   * @schema UpdateCrawlerRequest#TablePrefix
   */
  readonly tablePrefix?: string;

  /**
   * @schema UpdateCrawlerRequest#SchemaChangePolicy
   */
  readonly schemaChangePolicy?: SchemaChangePolicy;

  /**
   * @schema UpdateCrawlerRequest#RecrawlPolicy
   */
  readonly recrawlPolicy?: RecrawlPolicy;

  /**
   * @schema UpdateCrawlerRequest#LineageConfiguration
   */
  readonly lineageConfiguration?: LineageConfiguration;

  /**
   * @schema UpdateCrawlerRequest#Configuration
   */
  readonly configuration?: string;

  /**
   * @schema UpdateCrawlerRequest#CrawlerSecurityConfiguration
   */
  readonly crawlerSecurityConfiguration?: string;

}

/**
 * @schema UpdateCrawlerResponse
 */
export interface UpdateCrawlerResponse {
}

/**
 * @schema UpdateCrawlerScheduleRequest
 */
export interface UpdateCrawlerScheduleRequest {
  /**
   * @schema UpdateCrawlerScheduleRequest#CrawlerName
   */
  readonly crawlerName: string;

  /**
   * @schema UpdateCrawlerScheduleRequest#Schedule
   */
  readonly schedule?: string;

}

/**
 * @schema UpdateCrawlerScheduleResponse
 */
export interface UpdateCrawlerScheduleResponse {
}

/**
 * @schema UpdateDatabaseRequest
 */
export interface UpdateDatabaseRequest {
  /**
   * @schema UpdateDatabaseRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema UpdateDatabaseRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateDatabaseRequest#DatabaseInput
   */
  readonly databaseInput: DatabaseInput;

}

/**
 * @schema UpdateDatabaseResponse
 */
export interface UpdateDatabaseResponse {
}

/**
 * @schema UpdateDevEndpointRequest
 */
export interface UpdateDevEndpointRequest {
  /**
   * @schema UpdateDevEndpointRequest#EndpointName
   */
  readonly endpointName: string;

  /**
   * @schema UpdateDevEndpointRequest#PublicKey
   */
  readonly publicKey?: string;

  /**
   * @schema UpdateDevEndpointRequest#AddPublicKeys
   */
  readonly addPublicKeys?: string[];

  /**
   * @schema UpdateDevEndpointRequest#DeletePublicKeys
   */
  readonly deletePublicKeys?: string[];

  /**
   * @schema UpdateDevEndpointRequest#CustomLibraries
   */
  readonly customLibraries?: DevEndpointCustomLibraries;

  /**
   * @schema UpdateDevEndpointRequest#UpdateEtlLibraries
   */
  readonly updateEtlLibraries?: boolean;

  /**
   * @schema UpdateDevEndpointRequest#DeleteArguments
   */
  readonly deleteArguments?: string[];

  /**
   * @schema UpdateDevEndpointRequest#AddArguments
   */
  readonly addArguments?: { [key: string]: string };

}

/**
 * @schema UpdateDevEndpointResponse
 */
export interface UpdateDevEndpointResponse {
}

/**
 * @schema UpdateJobRequest
 */
export interface UpdateJobRequest {
  /**
   * @schema UpdateJobRequest#JobName
   */
  readonly jobName: string;

  /**
   * @schema UpdateJobRequest#JobUpdate
   */
  readonly jobUpdate: JobUpdate;

}

/**
 * @schema UpdateJobResponse
 */
export interface UpdateJobResponse {
  /**
   * @schema UpdateJobResponse#JobName
   */
  readonly jobName?: string;

}

/**
 * @schema UpdateMlTransformRequest
 */
export interface UpdateMlTransformRequest {
  /**
   * @schema UpdateMlTransformRequest#TransformId
   */
  readonly transformId: string;

  /**
   * @schema UpdateMlTransformRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateMlTransformRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateMlTransformRequest#Parameters
   */
  readonly parameters?: TransformParameters;

  /**
   * @schema UpdateMlTransformRequest#Role
   */
  readonly role?: string;

  /**
   * @schema UpdateMlTransformRequest#GlueVersion
   */
  readonly glueVersion?: string;

  /**
   * @schema UpdateMlTransformRequest#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema UpdateMlTransformRequest#WorkerType
   */
  readonly workerType?: string;

  /**
   * @schema UpdateMlTransformRequest#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

  /**
   * @schema UpdateMlTransformRequest#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema UpdateMlTransformRequest#MaxRetries
   */
  readonly maxRetries?: number;

}

/**
 * @schema UpdateMlTransformResponse
 */
export interface UpdateMlTransformResponse {
  /**
   * @schema UpdateMlTransformResponse#TransformId
   */
  readonly transformId?: string;

}

/**
 * @schema UpdatePartitionRequest
 */
export interface UpdatePartitionRequest {
  /**
   * @schema UpdatePartitionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema UpdatePartitionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema UpdatePartitionRequest#TableName
   */
  readonly tableName: string;

  /**
   * @schema UpdatePartitionRequest#PartitionValueList
   */
  readonly partitionValueList: string[];

  /**
   * @schema UpdatePartitionRequest#PartitionInput
   */
  readonly partitionInput: PartitionInput;

}

/**
 * @schema UpdatePartitionResponse
 */
export interface UpdatePartitionResponse {
}

/**
 * @schema UpdateRegistryInput
 */
export interface UpdateRegistryInput {
  /**
   * @schema UpdateRegistryInput#RegistryId
   */
  readonly registryId: RegistryId;

  /**
   * @schema UpdateRegistryInput#Description
   */
  readonly description: string;

}

/**
 * @schema UpdateRegistryResponse
 */
export interface UpdateRegistryResponse {
  /**
   * @schema UpdateRegistryResponse#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema UpdateRegistryResponse#RegistryArn
   */
  readonly registryArn?: string;

}

/**
 * @schema UpdateSchemaInput
 */
export interface UpdateSchemaInput {
  /**
   * @schema UpdateSchemaInput#SchemaId
   */
  readonly schemaId: SchemaId;

  /**
   * @schema UpdateSchemaInput#SchemaVersionNumber
   */
  readonly schemaVersionNumber?: SchemaVersionNumber;

  /**
   * @schema UpdateSchemaInput#Compatibility
   */
  readonly compatibility?: string;

  /**
   * @schema UpdateSchemaInput#Description
   */
  readonly description?: string;

}

/**
 * @schema UpdateSchemaResponse
 */
export interface UpdateSchemaResponse {
  /**
   * @schema UpdateSchemaResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema UpdateSchemaResponse#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema UpdateSchemaResponse#RegistryName
   */
  readonly registryName?: string;

}

/**
 * @schema UpdateTableRequest
 */
export interface UpdateTableRequest {
  /**
   * @schema UpdateTableRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema UpdateTableRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema UpdateTableRequest#TableInput
   */
  readonly tableInput: TableInput;

  /**
   * @schema UpdateTableRequest#SkipArchive
   */
  readonly skipArchive?: boolean;

}

/**
 * @schema UpdateTableResponse
 */
export interface UpdateTableResponse {
}

/**
 * @schema UpdateTriggerRequest
 */
export interface UpdateTriggerRequest {
  /**
   * @schema UpdateTriggerRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateTriggerRequest#TriggerUpdate
   */
  readonly triggerUpdate: TriggerUpdate;

}

/**
 * @schema UpdateTriggerResponse
 */
export interface UpdateTriggerResponse {
  /**
   * @schema UpdateTriggerResponse#Trigger
   */
  readonly trigger?: Trigger;

}

/**
 * @schema UpdateUserDefinedFunctionRequest
 */
export interface UpdateUserDefinedFunctionRequest {
  /**
   * @schema UpdateUserDefinedFunctionRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema UpdateUserDefinedFunctionRequest#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema UpdateUserDefinedFunctionRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema UpdateUserDefinedFunctionRequest#FunctionInput
   */
  readonly functionInput: UserDefinedFunctionInput;

}

/**
 * @schema UpdateUserDefinedFunctionResponse
 */
export interface UpdateUserDefinedFunctionResponse {
}

/**
 * @schema UpdateWorkflowRequest
 */
export interface UpdateWorkflowRequest {
  /**
   * @schema UpdateWorkflowRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateWorkflowRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateWorkflowRequest#DefaultRunProperties
   */
  readonly defaultRunProperties?: { [key: string]: string };

  /**
   * @schema UpdateWorkflowRequest#MaxConcurrentRuns
   */
  readonly maxConcurrentRuns?: number;

}

/**
 * @schema UpdateWorkflowResponse
 */
export interface UpdateWorkflowResponse {
  /**
   * @schema UpdateWorkflowResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema PartitionInput
 */
export interface PartitionInput {
  /**
   * @schema PartitionInput#Values
   */
  readonly values?: string[];

  /**
   * @schema PartitionInput#LastAccessTime
   */
  readonly lastAccessTime?: string;

  /**
   * @schema PartitionInput#StorageDescriptor
   */
  readonly storageDescriptor?: StorageDescriptor;

  /**
   * @schema PartitionInput#Parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema PartitionInput#LastAnalyzedTime
   */
  readonly lastAnalyzedTime?: string;

}

/**
 * @schema PartitionError
 */
export interface PartitionError {
  /**
   * @schema PartitionError#PartitionValues
   */
  readonly partitionValues?: string[];

  /**
   * @schema PartitionError#ErrorDetail
   */
  readonly errorDetail?: ErrorDetail;

}

/**
 * @schema ErrorDetail
 */
export interface ErrorDetail {
  /**
   * @schema ErrorDetail#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema ErrorDetail#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema PartitionValueList
 */
export interface PartitionValueList {
  /**
   * @schema PartitionValueList#Values
   */
  readonly values: string[];

}

/**
 * @schema TableError
 */
export interface TableError {
  /**
   * @schema TableError#TableName
   */
  readonly tableName?: string;

  /**
   * @schema TableError#ErrorDetail
   */
  readonly errorDetail?: ErrorDetail;

}

/**
 * @schema TableVersionError
 */
export interface TableVersionError {
  /**
   * @schema TableVersionError#TableName
   */
  readonly tableName?: string;

  /**
   * @schema TableVersionError#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema TableVersionError#ErrorDetail
   */
  readonly errorDetail?: ErrorDetail;

}

/**
 * @schema Crawler
 */
export interface Crawler {
  /**
   * @schema Crawler#Name
   */
  readonly name?: string;

  /**
   * @schema Crawler#Role
   */
  readonly role?: string;

  /**
   * @schema Crawler#Targets
   */
  readonly targets?: CrawlerTargets;

  /**
   * @schema Crawler#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema Crawler#Description
   */
  readonly description?: string;

  /**
   * @schema Crawler#Classifiers
   */
  readonly classifiers?: string[];

  /**
   * @schema Crawler#RecrawlPolicy
   */
  readonly recrawlPolicy?: RecrawlPolicy;

  /**
   * @schema Crawler#SchemaChangePolicy
   */
  readonly schemaChangePolicy?: SchemaChangePolicy;

  /**
   * @schema Crawler#LineageConfiguration
   */
  readonly lineageConfiguration?: LineageConfiguration;

  /**
   * @schema Crawler#State
   */
  readonly state?: string;

  /**
   * @schema Crawler#TablePrefix
   */
  readonly tablePrefix?: string;

  /**
   * @schema Crawler#Schedule
   */
  readonly schedule?: Schedule;

  /**
   * @schema Crawler#CrawlElapsedTime
   */
  readonly crawlElapsedTime?: number;

  /**
   * @schema Crawler#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Crawler#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema Crawler#LastCrawl
   */
  readonly lastCrawl?: LastCrawlInfo;

  /**
   * @schema Crawler#Version
   */
  readonly version?: number;

  /**
   * @schema Crawler#Configuration
   */
  readonly configuration?: string;

  /**
   * @schema Crawler#CrawlerSecurityConfiguration
   */
  readonly crawlerSecurityConfiguration?: string;

}

/**
 * @schema DevEndpoint
 */
export interface DevEndpoint {
  /**
   * @schema DevEndpoint#EndpointName
   */
  readonly endpointName?: string;

  /**
   * @schema DevEndpoint#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DevEndpoint#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema DevEndpoint#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema DevEndpoint#YarnEndpointAddress
   */
  readonly yarnEndpointAddress?: string;

  /**
   * @schema DevEndpoint#PrivateAddress
   */
  readonly privateAddress?: string;

  /**
   * @schema DevEndpoint#ZeppelinRemoteSparkInterpreterPort
   */
  readonly zeppelinRemoteSparkInterpreterPort?: number;

  /**
   * @schema DevEndpoint#PublicAddress
   */
  readonly publicAddress?: string;

  /**
   * @schema DevEndpoint#Status
   */
  readonly status?: string;

  /**
   * @schema DevEndpoint#WorkerType
   */
  readonly workerType?: string;

  /**
   * @schema DevEndpoint#GlueVersion
   */
  readonly glueVersion?: string;

  /**
   * @schema DevEndpoint#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

  /**
   * @schema DevEndpoint#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema DevEndpoint#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema DevEndpoint#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema DevEndpoint#ExtraPythonLibsS3Path
   */
  readonly extraPythonLibsS3Path?: string;

  /**
   * @schema DevEndpoint#ExtraJarsS3Path
   */
  readonly extraJarsS3Path?: string;

  /**
   * @schema DevEndpoint#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema DevEndpoint#LastUpdateStatus
   */
  readonly lastUpdateStatus?: string;

  /**
   * @schema DevEndpoint#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema DevEndpoint#LastModifiedTimestamp
   */
  readonly lastModifiedTimestamp?: string;

  /**
   * @schema DevEndpoint#PublicKey
   */
  readonly publicKey?: string;

  /**
   * @schema DevEndpoint#PublicKeys
   */
  readonly publicKeys?: string[];

  /**
   * @schema DevEndpoint#SecurityConfiguration
   */
  readonly securityConfiguration?: string;

  /**
   * @schema DevEndpoint#Arguments
   */
  readonly arguments?: { [key: string]: string };

}

/**
 * @schema Job
 */
export interface Job {
  /**
   * @schema Job#Name
   */
  readonly name?: string;

  /**
   * @schema Job#Description
   */
  readonly description?: string;

  /**
   * @schema Job#LogUri
   */
  readonly logUri?: string;

  /**
   * @schema Job#Role
   */
  readonly role?: string;

  /**
   * @schema Job#CreatedOn
   */
  readonly createdOn?: string;

  /**
   * @schema Job#LastModifiedOn
   */
  readonly lastModifiedOn?: string;

  /**
   * @schema Job#ExecutionProperty
   */
  readonly executionProperty?: ExecutionProperty;

  /**
   * @schema Job#Command
   */
  readonly command?: JobCommand;

  /**
   * @schema Job#DefaultArguments
   */
  readonly defaultArguments?: { [key: string]: string };

  /**
   * @schema Job#NonOverridableArguments
   */
  readonly nonOverridableArguments?: { [key: string]: string };

  /**
   * @schema Job#Connections
   */
  readonly connections?: ConnectionsList;

  /**
   * @schema Job#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema Job#AllocatedCapacity
   */
  readonly allocatedCapacity?: number;

  /**
   * @schema Job#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema Job#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema Job#WorkerType
   */
  readonly workerType?: string;

  /**
   * @schema Job#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

  /**
   * @schema Job#SecurityConfiguration
   */
  readonly securityConfiguration?: string;

  /**
   * @schema Job#NotificationProperty
   */
  readonly notificationProperty?: NotificationProperty;

  /**
   * @schema Job#GlueVersion
   */
  readonly glueVersion?: string;

}

/**
 * @schema Partition
 */
export interface Partition {
  /**
   * @schema Partition#Values
   */
  readonly values?: string[];

  /**
   * @schema Partition#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema Partition#TableName
   */
  readonly tableName?: string;

  /**
   * @schema Partition#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Partition#LastAccessTime
   */
  readonly lastAccessTime?: string;

  /**
   * @schema Partition#StorageDescriptor
   */
  readonly storageDescriptor?: StorageDescriptor;

  /**
   * @schema Partition#Parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema Partition#LastAnalyzedTime
   */
  readonly lastAnalyzedTime?: string;

  /**
   * @schema Partition#CatalogId
   */
  readonly catalogId?: string;

}

/**
 * @schema Trigger
 */
export interface Trigger {
  /**
   * @schema Trigger#Name
   */
  readonly name?: string;

  /**
   * @schema Trigger#WorkflowName
   */
  readonly workflowName?: string;

  /**
   * @schema Trigger#Id
   */
  readonly id?: string;

  /**
   * @schema Trigger#Type
   */
  readonly type?: string;

  /**
   * @schema Trigger#State
   */
  readonly state?: string;

  /**
   * @schema Trigger#Description
   */
  readonly description?: string;

  /**
   * @schema Trigger#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema Trigger#Actions
   */
  readonly actions?: Action[];

  /**
   * @schema Trigger#Predicate
   */
  readonly predicate?: Predicate;

}

/**
 * @schema Workflow
 */
export interface Workflow {
  /**
   * @schema Workflow#Name
   */
  readonly name?: string;

  /**
   * @schema Workflow#Description
   */
  readonly description?: string;

  /**
   * @schema Workflow#DefaultRunProperties
   */
  readonly defaultRunProperties?: { [key: string]: string };

  /**
   * @schema Workflow#CreatedOn
   */
  readonly createdOn?: string;

  /**
   * @schema Workflow#LastModifiedOn
   */
  readonly lastModifiedOn?: string;

  /**
   * @schema Workflow#LastRun
   */
  readonly lastRun?: WorkflowRun;

  /**
   * @schema Workflow#Graph
   */
  readonly graph?: WorkflowGraph;

  /**
   * @schema Workflow#MaxConcurrentRuns
   */
  readonly maxConcurrentRuns?: number;

}

/**
 * @schema BatchStopJobRunSuccessfulSubmission
 */
export interface BatchStopJobRunSuccessfulSubmission {
  /**
   * @schema BatchStopJobRunSuccessfulSubmission#JobName
   */
  readonly jobName?: string;

  /**
   * @schema BatchStopJobRunSuccessfulSubmission#JobRunId
   */
  readonly jobRunId?: string;

}

/**
 * @schema BatchStopJobRunError
 */
export interface BatchStopJobRunError {
  /**
   * @schema BatchStopJobRunError#JobName
   */
  readonly jobName?: string;

  /**
   * @schema BatchStopJobRunError#JobRunId
   */
  readonly jobRunId?: string;

  /**
   * @schema BatchStopJobRunError#ErrorDetail
   */
  readonly errorDetail?: ErrorDetail;

}

/**
 * @schema BatchUpdatePartitionRequestEntry
 */
export interface BatchUpdatePartitionRequestEntry {
  /**
   * @schema BatchUpdatePartitionRequestEntry#PartitionValueList
   */
  readonly partitionValueList: string[];

  /**
   * @schema BatchUpdatePartitionRequestEntry#PartitionInput
   */
  readonly partitionInput: PartitionInput;

}

/**
 * @schema BatchUpdatePartitionFailureEntry
 */
export interface BatchUpdatePartitionFailureEntry {
  /**
   * @schema BatchUpdatePartitionFailureEntry#PartitionValueList
   */
  readonly partitionValueList?: string[];

  /**
   * @schema BatchUpdatePartitionFailureEntry#ErrorDetail
   */
  readonly errorDetail?: ErrorDetail;

}

/**
 * @schema CreateGrokClassifierRequest
 */
export interface CreateGrokClassifierRequest {
  /**
   * @schema CreateGrokClassifierRequest#Classification
   */
  readonly classification: string;

  /**
   * @schema CreateGrokClassifierRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateGrokClassifierRequest#GrokPattern
   */
  readonly grokPattern: string;

  /**
   * @schema CreateGrokClassifierRequest#CustomPatterns
   */
  readonly customPatterns?: string;

}

/**
 * @schema CreateXmlClassifierRequest
 */
export interface CreateXmlClassifierRequest {
  /**
   * @schema CreateXmlClassifierRequest#Classification
   */
  readonly classification: string;

  /**
   * @schema CreateXmlClassifierRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateXmlClassifierRequest#RowTag
   */
  readonly rowTag?: string;

}

/**
 * @schema CreateJsonClassifierRequest
 */
export interface CreateJsonClassifierRequest {
  /**
   * @schema CreateJsonClassifierRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateJsonClassifierRequest#JsonPath
   */
  readonly jsonPath: string;

}

/**
 * @schema CreateCsvClassifierRequest
 */
export interface CreateCsvClassifierRequest {
  /**
   * @schema CreateCsvClassifierRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateCsvClassifierRequest#Delimiter
   */
  readonly delimiter?: string;

  /**
   * @schema CreateCsvClassifierRequest#QuoteSymbol
   */
  readonly quoteSymbol?: string;

  /**
   * @schema CreateCsvClassifierRequest#ContainsHeader
   */
  readonly containsHeader?: string;

  /**
   * @schema CreateCsvClassifierRequest#Header
   */
  readonly header?: string[];

  /**
   * @schema CreateCsvClassifierRequest#DisableValueTrimming
   */
  readonly disableValueTrimming?: boolean;

  /**
   * @schema CreateCsvClassifierRequest#AllowSingleColumn
   */
  readonly allowSingleColumn?: boolean;

}

/**
 * @schema ConnectionInput
 */
export interface ConnectionInput {
  /**
   * @schema ConnectionInput#Name
   */
  readonly name: string;

  /**
   * @schema ConnectionInput#Description
   */
  readonly description?: string;

  /**
   * @schema ConnectionInput#ConnectionType
   */
  readonly connectionType: string;

  /**
   * @schema ConnectionInput#MatchCriteria
   */
  readonly matchCriteria?: string[];

  /**
   * @schema ConnectionInput#ConnectionProperties
   */
  readonly connectionProperties: { [key: string]: string };

  /**
   * @schema ConnectionInput#PhysicalConnectionRequirements
   */
  readonly physicalConnectionRequirements?: PhysicalConnectionRequirements;

}

/**
 * @schema CrawlerTargets
 */
export interface CrawlerTargets {
  /**
   * @schema CrawlerTargets#S3Targets
   */
  readonly s3Targets?: S3Target[];

  /**
   * @schema CrawlerTargets#JdbcTargets
   */
  readonly jdbcTargets?: JdbcTarget[];

  /**
   * @schema CrawlerTargets#MongoDBTargets
   */
  readonly mongoDbTargets?: MongoDbTarget[];

  /**
   * @schema CrawlerTargets#DynamoDBTargets
   */
  readonly dynamoDbTargets?: DynamoDbTarget[];

  /**
   * @schema CrawlerTargets#CatalogTargets
   */
  readonly catalogTargets?: CatalogTarget[];

}

/**
 * @schema SchemaChangePolicy
 */
export interface SchemaChangePolicy {
  /**
   * @schema SchemaChangePolicy#UpdateBehavior
   */
  readonly updateBehavior?: string;

  /**
   * @schema SchemaChangePolicy#DeleteBehavior
   */
  readonly deleteBehavior?: string;

}

/**
 * @schema RecrawlPolicy
 */
export interface RecrawlPolicy {
  /**
   * @schema RecrawlPolicy#RecrawlBehavior
   */
  readonly recrawlBehavior?: string;

}

/**
 * @schema LineageConfiguration
 */
export interface LineageConfiguration {
  /**
   * @schema LineageConfiguration#CrawlerLineageSettings
   */
  readonly crawlerLineageSettings?: string;

}

/**
 * @schema DatabaseInput
 */
export interface DatabaseInput {
  /**
   * @schema DatabaseInput#Name
   */
  readonly name: string;

  /**
   * @schema DatabaseInput#Description
   */
  readonly description?: string;

  /**
   * @schema DatabaseInput#LocationUri
   */
  readonly locationUri?: string;

  /**
   * @schema DatabaseInput#Parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema DatabaseInput#CreateTableDefaultPermissions
   */
  readonly createTableDefaultPermissions?: PrincipalPermissions[];

  /**
   * @schema DatabaseInput#TargetDatabase
   */
  readonly targetDatabase?: DatabaseIdentifier;

}

/**
 * @schema ExecutionProperty
 */
export interface ExecutionProperty {
  /**
   * @schema ExecutionProperty#MaxConcurrentRuns
   */
  readonly maxConcurrentRuns?: number;

}

/**
 * @schema JobCommand
 */
export interface JobCommand {
  /**
   * @schema JobCommand#Name
   */
  readonly name?: string;

  /**
   * @schema JobCommand#ScriptLocation
   */
  readonly scriptLocation?: string;

  /**
   * @schema JobCommand#PythonVersion
   */
  readonly pythonVersion?: string;

}

/**
 * @schema ConnectionsList
 */
export interface ConnectionsList {
  /**
   * @schema ConnectionsList#Connections
   */
  readonly connections?: string[];

}

/**
 * @schema NotificationProperty
 */
export interface NotificationProperty {
  /**
   * @schema NotificationProperty#NotifyDelayAfter
   */
  readonly notifyDelayAfter?: number;

}

/**
 * @schema GlueTable
 */
export interface GlueTable {
  /**
   * @schema GlueTable#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema GlueTable#TableName
   */
  readonly tableName: string;

  /**
   * @schema GlueTable#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GlueTable#ConnectionName
   */
  readonly connectionName?: string;

}

/**
 * @schema TransformParameters
 */
export interface TransformParameters {
  /**
   * @schema TransformParameters#TransformType
   */
  readonly transformType: string;

  /**
   * @schema TransformParameters#FindMatchesParameters
   */
  readonly findMatchesParameters?: FindMatchesParameters;

}

/**
 * @schema TransformEncryption
 */
export interface TransformEncryption {
  /**
   * @schema TransformEncryption#MlUserDataEncryption
   */
  readonly mlUserDataEncryption?: MlUserDataEncryption;

  /**
   * @schema TransformEncryption#TaskRunSecurityConfigurationName
   */
  readonly taskRunSecurityConfigurationName?: string;

}

/**
 * @schema PartitionIndex
 */
export interface PartitionIndex {
  /**
   * @schema PartitionIndex#Keys
   */
  readonly keys: string[];

  /**
   * @schema PartitionIndex#IndexName
   */
  readonly indexName: string;

}

/**
 * @schema RegistryId
 */
export interface RegistryId {
  /**
   * @schema RegistryId#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema RegistryId#RegistryArn
   */
  readonly registryArn?: string;

}

/**
 * @schema CodeGenNode
 */
export interface CodeGenNode {
  /**
   * @schema CodeGenNode#Id
   */
  readonly id: string;

  /**
   * @schema CodeGenNode#NodeType
   */
  readonly nodeType: string;

  /**
   * @schema CodeGenNode#Args
   */
  readonly args: CodeGenNodeArg[];

  /**
   * @schema CodeGenNode#LineNumber
   */
  readonly lineNumber?: number;

}

/**
 * @schema CodeGenEdge
 */
export interface CodeGenEdge {
  /**
   * @schema CodeGenEdge#Source
   */
  readonly source: string;

  /**
   * @schema CodeGenEdge#Target
   */
  readonly target: string;

  /**
   * @schema CodeGenEdge#TargetParameter
   */
  readonly targetParameter?: string;

}

/**
 * @schema EncryptionConfiguration
 */
export interface EncryptionConfiguration {
  /**
   * @schema EncryptionConfiguration#S3Encryption
   */
  readonly s3Encryption?: S3Encryption[];

  /**
   * @schema EncryptionConfiguration#CloudWatchEncryption
   */
  readonly cloudWatchEncryption?: CloudWatchEncryption;

  /**
   * @schema EncryptionConfiguration#JobBookmarksEncryption
   */
  readonly jobBookmarksEncryption?: JobBookmarksEncryption;

}

/**
 * @schema TableInput
 */
export interface TableInput {
  /**
   * @schema TableInput#Name
   */
  readonly name: string;

  /**
   * @schema TableInput#Description
   */
  readonly description?: string;

  /**
   * @schema TableInput#Owner
   */
  readonly owner?: string;

  /**
   * @schema TableInput#LastAccessTime
   */
  readonly lastAccessTime?: string;

  /**
   * @schema TableInput#LastAnalyzedTime
   */
  readonly lastAnalyzedTime?: string;

  /**
   * @schema TableInput#Retention
   */
  readonly retention?: number;

  /**
   * @schema TableInput#StorageDescriptor
   */
  readonly storageDescriptor?: StorageDescriptor;

  /**
   * @schema TableInput#PartitionKeys
   */
  readonly partitionKeys?: Column[];

  /**
   * @schema TableInput#ViewOriginalText
   */
  readonly viewOriginalText?: string;

  /**
   * @schema TableInput#ViewExpandedText
   */
  readonly viewExpandedText?: string;

  /**
   * @schema TableInput#TableType
   */
  readonly tableType?: string;

  /**
   * @schema TableInput#Parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema TableInput#TargetTable
   */
  readonly targetTable?: TableIdentifier;

}

/**
 * @schema Predicate
 */
export interface Predicate {
  /**
   * @schema Predicate#Logical
   */
  readonly logical?: string;

  /**
   * @schema Predicate#Conditions
   */
  readonly conditions?: Condition[];

}

/**
 * @schema Action
 */
export interface Action {
  /**
   * @schema Action#JobName
   */
  readonly jobName?: string;

  /**
   * @schema Action#Arguments
   */
  readonly arguments?: { [key: string]: string };

  /**
   * @schema Action#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema Action#SecurityConfiguration
   */
  readonly securityConfiguration?: string;

  /**
   * @schema Action#NotificationProperty
   */
  readonly notificationProperty?: NotificationProperty;

  /**
   * @schema Action#CrawlerName
   */
  readonly crawlerName?: string;

}

/**
 * @schema UserDefinedFunctionInput
 */
export interface UserDefinedFunctionInput {
  /**
   * @schema UserDefinedFunctionInput#FunctionName
   */
  readonly functionName?: string;

  /**
   * @schema UserDefinedFunctionInput#ClassName
   */
  readonly className?: string;

  /**
   * @schema UserDefinedFunctionInput#OwnerName
   */
  readonly ownerName?: string;

  /**
   * @schema UserDefinedFunctionInput#OwnerType
   */
  readonly ownerType?: string;

  /**
   * @schema UserDefinedFunctionInput#ResourceUris
   */
  readonly resourceUris?: ResourceUri[];

}

/**
 * @schema SchemaId
 */
export interface SchemaId {
  /**
   * @schema SchemaId#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema SchemaId#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema SchemaId#RegistryName
   */
  readonly registryName?: string;

}

/**
 * @schema SchemaVersionErrorItem
 */
export interface SchemaVersionErrorItem {
  /**
   * @schema SchemaVersionErrorItem#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema SchemaVersionErrorItem#ErrorDetails
   */
  readonly errorDetails?: ErrorDetails;

}

/**
 * @schema CatalogImportStatus
 */
export interface CatalogImportStatus {
  /**
   * @schema CatalogImportStatus#ImportCompleted
   */
  readonly importCompleted?: boolean;

  /**
   * @schema CatalogImportStatus#ImportTime
   */
  readonly importTime?: string;

  /**
   * @schema CatalogImportStatus#ImportedBy
   */
  readonly importedBy?: string;

}

/**
 * @schema Classifier
 */
export interface Classifier {
  /**
   * @schema Classifier#GrokClassifier
   */
  readonly grokClassifier?: GrokClassifier;

  /**
   * @schema Classifier#XMLClassifier
   */
  readonly xmlClassifier?: XmlClassifier;

  /**
   * @schema Classifier#JsonClassifier
   */
  readonly jsonClassifier?: JsonClassifier;

  /**
   * @schema Classifier#CsvClassifier
   */
  readonly csvClassifier?: CsvClassifier;

}

/**
 * @schema ColumnStatistics
 */
export interface ColumnStatistics {
  /**
   * @schema ColumnStatistics#ColumnName
   */
  readonly columnName: string;

  /**
   * @schema ColumnStatistics#ColumnType
   */
  readonly columnType: string;

  /**
   * @schema ColumnStatistics#AnalyzedTime
   */
  readonly analyzedTime: string;

  /**
   * @schema ColumnStatistics#StatisticsData
   */
  readonly statisticsData: ColumnStatisticsData;

}

/**
 * @schema ColumnError
 */
export interface ColumnError {
  /**
   * @schema ColumnError#ColumnName
   */
  readonly columnName?: string;

  /**
   * @schema ColumnError#Error
   */
  readonly error?: ErrorDetail;

}

/**
 * @schema Connection
 */
export interface Connection {
  /**
   * @schema Connection#Name
   */
  readonly name?: string;

  /**
   * @schema Connection#Description
   */
  readonly description?: string;

  /**
   * @schema Connection#ConnectionType
   */
  readonly connectionType?: string;

  /**
   * @schema Connection#MatchCriteria
   */
  readonly matchCriteria?: string[];

  /**
   * @schema Connection#ConnectionProperties
   */
  readonly connectionProperties?: { [key: string]: string };

  /**
   * @schema Connection#PhysicalConnectionRequirements
   */
  readonly physicalConnectionRequirements?: PhysicalConnectionRequirements;

  /**
   * @schema Connection#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Connection#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema Connection#LastUpdatedBy
   */
  readonly lastUpdatedBy?: string;

}

/**
 * @schema GetConnectionsFilter
 */
export interface GetConnectionsFilter {
  /**
   * @schema GetConnectionsFilter#MatchCriteria
   */
  readonly matchCriteria?: string[];

  /**
   * @schema GetConnectionsFilter#ConnectionType
   */
  readonly connectionType?: string;

}

/**
 * @schema CrawlerMetrics
 */
export interface CrawlerMetrics {
  /**
   * @schema CrawlerMetrics#CrawlerName
   */
  readonly crawlerName?: string;

  /**
   * @schema CrawlerMetrics#TimeLeftSeconds
   */
  readonly timeLeftSeconds?: number;

  /**
   * @schema CrawlerMetrics#StillEstimating
   */
  readonly stillEstimating?: boolean;

  /**
   * @schema CrawlerMetrics#LastRuntimeSeconds
   */
  readonly lastRuntimeSeconds?: number;

  /**
   * @schema CrawlerMetrics#MedianRuntimeSeconds
   */
  readonly medianRuntimeSeconds?: number;

  /**
   * @schema CrawlerMetrics#TablesCreated
   */
  readonly tablesCreated?: number;

  /**
   * @schema CrawlerMetrics#TablesUpdated
   */
  readonly tablesUpdated?: number;

  /**
   * @schema CrawlerMetrics#TablesDeleted
   */
  readonly tablesDeleted?: number;

}

/**
 * @schema DataCatalogEncryptionSettings
 */
export interface DataCatalogEncryptionSettings {
  /**
   * @schema DataCatalogEncryptionSettings#EncryptionAtRest
   */
  readonly encryptionAtRest?: EncryptionAtRest;

  /**
   * @schema DataCatalogEncryptionSettings#ConnectionPasswordEncryption
   */
  readonly connectionPasswordEncryption?: ConnectionPasswordEncryption;

}

/**
 * @schema Database
 */
export interface Database {
  /**
   * @schema Database#Name
   */
  readonly name: string;

  /**
   * @schema Database#Description
   */
  readonly description?: string;

  /**
   * @schema Database#LocationUri
   */
  readonly locationUri?: string;

  /**
   * @schema Database#Parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema Database#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema Database#CreateTableDefaultPermissions
   */
  readonly createTableDefaultPermissions?: PrincipalPermissions[];

  /**
   * @schema Database#TargetDatabase
   */
  readonly targetDatabase?: DatabaseIdentifier;

  /**
   * @schema Database#CatalogId
   */
  readonly catalogId?: string;

}

/**
 * @schema JobBookmarkEntry
 */
export interface JobBookmarkEntry {
  /**
   * @schema JobBookmarkEntry#JobName
   */
  readonly jobName?: string;

  /**
   * @schema JobBookmarkEntry#Version
   */
  readonly version?: number;

  /**
   * @schema JobBookmarkEntry#Run
   */
  readonly run?: number;

  /**
   * @schema JobBookmarkEntry#Attempt
   */
  readonly attempt?: number;

  /**
   * @schema JobBookmarkEntry#PreviousRunId
   */
  readonly previousRunId?: string;

  /**
   * @schema JobBookmarkEntry#RunId
   */
  readonly runId?: string;

  /**
   * @schema JobBookmarkEntry#JobBookmark
   */
  readonly jobBookmark?: string;

}

/**
 * @schema JobRun
 */
export interface JobRun {
  /**
   * @schema JobRun#Id
   */
  readonly id?: string;

  /**
   * @schema JobRun#Attempt
   */
  readonly attempt?: number;

  /**
   * @schema JobRun#PreviousRunId
   */
  readonly previousRunId?: string;

  /**
   * @schema JobRun#TriggerName
   */
  readonly triggerName?: string;

  /**
   * @schema JobRun#JobName
   */
  readonly jobName?: string;

  /**
   * @schema JobRun#StartedOn
   */
  readonly startedOn?: string;

  /**
   * @schema JobRun#LastModifiedOn
   */
  readonly lastModifiedOn?: string;

  /**
   * @schema JobRun#CompletedOn
   */
  readonly completedOn?: string;

  /**
   * @schema JobRun#JobRunState
   */
  readonly jobRunState?: string;

  /**
   * @schema JobRun#Arguments
   */
  readonly arguments?: { [key: string]: string };

  /**
   * @schema JobRun#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema JobRun#PredecessorRuns
   */
  readonly predecessorRuns?: Predecessor[];

  /**
   * @schema JobRun#AllocatedCapacity
   */
  readonly allocatedCapacity?: number;

  /**
   * @schema JobRun#ExecutionTime
   */
  readonly executionTime?: number;

  /**
   * @schema JobRun#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema JobRun#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema JobRun#WorkerType
   */
  readonly workerType?: string;

  /**
   * @schema JobRun#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

  /**
   * @schema JobRun#SecurityConfiguration
   */
  readonly securityConfiguration?: string;

  /**
   * @schema JobRun#LogGroupName
   */
  readonly logGroupName?: string;

  /**
   * @schema JobRun#NotificationProperty
   */
  readonly notificationProperty?: NotificationProperty;

  /**
   * @schema JobRun#GlueVersion
   */
  readonly glueVersion?: string;

}

/**
 * @schema TaskRunProperties
 */
export interface TaskRunProperties {
  /**
   * @schema TaskRunProperties#TaskType
   */
  readonly taskType?: string;

  /**
   * @schema TaskRunProperties#ImportLabelsTaskRunProperties
   */
  readonly importLabelsTaskRunProperties?: ImportLabelsTaskRunProperties;

  /**
   * @schema TaskRunProperties#ExportLabelsTaskRunProperties
   */
  readonly exportLabelsTaskRunProperties?: ExportLabelsTaskRunProperties;

  /**
   * @schema TaskRunProperties#LabelingSetGenerationTaskRunProperties
   */
  readonly labelingSetGenerationTaskRunProperties?: LabelingSetGenerationTaskRunProperties;

  /**
   * @schema TaskRunProperties#FindMatchesTaskRunProperties
   */
  readonly findMatchesTaskRunProperties?: FindMatchesTaskRunProperties;

}

/**
 * @schema TaskRunFilterCriteria
 */
export interface TaskRunFilterCriteria {
  /**
   * @schema TaskRunFilterCriteria#TaskRunType
   */
  readonly taskRunType?: string;

  /**
   * @schema TaskRunFilterCriteria#Status
   */
  readonly status?: string;

  /**
   * @schema TaskRunFilterCriteria#StartedBefore
   */
  readonly startedBefore?: string;

  /**
   * @schema TaskRunFilterCriteria#StartedAfter
   */
  readonly startedAfter?: string;

}

/**
 * @schema TaskRunSortCriteria
 */
export interface TaskRunSortCriteria {
  /**
   * @schema TaskRunSortCriteria#Column
   */
  readonly column: string;

  /**
   * @schema TaskRunSortCriteria#SortDirection
   */
  readonly sortDirection: string;

}

/**
 * @schema TaskRun
 */
export interface TaskRun {
  /**
   * @schema TaskRun#TransformId
   */
  readonly transformId?: string;

  /**
   * @schema TaskRun#TaskRunId
   */
  readonly taskRunId?: string;

  /**
   * @schema TaskRun#Status
   */
  readonly status?: string;

  /**
   * @schema TaskRun#LogGroupName
   */
  readonly logGroupName?: string;

  /**
   * @schema TaskRun#Properties
   */
  readonly properties?: TaskRunProperties;

  /**
   * @schema TaskRun#ErrorString
   */
  readonly errorString?: string;

  /**
   * @schema TaskRun#StartedOn
   */
  readonly startedOn?: string;

  /**
   * @schema TaskRun#LastModifiedOn
   */
  readonly lastModifiedOn?: string;

  /**
   * @schema TaskRun#CompletedOn
   */
  readonly completedOn?: string;

  /**
   * @schema TaskRun#ExecutionTime
   */
  readonly executionTime?: number;

}

/**
 * @schema EvaluationMetrics
 */
export interface EvaluationMetrics {
  /**
   * @schema EvaluationMetrics#TransformType
   */
  readonly transformType: string;

  /**
   * @schema EvaluationMetrics#FindMatchesMetrics
   */
  readonly findMatchesMetrics?: FindMatchesMetrics;

}

/**
 * @schema SchemaColumn
 */
export interface SchemaColumn {
  /**
   * @schema SchemaColumn#Name
   */
  readonly name?: string;

  /**
   * @schema SchemaColumn#DataType
   */
  readonly dataType?: string;

}

/**
 * @schema TransformFilterCriteria
 */
export interface TransformFilterCriteria {
  /**
   * @schema TransformFilterCriteria#Name
   */
  readonly name?: string;

  /**
   * @schema TransformFilterCriteria#TransformType
   */
  readonly transformType?: string;

  /**
   * @schema TransformFilterCriteria#Status
   */
  readonly status?: string;

  /**
   * @schema TransformFilterCriteria#GlueVersion
   */
  readonly glueVersion?: string;

  /**
   * @schema TransformFilterCriteria#CreatedBefore
   */
  readonly createdBefore?: string;

  /**
   * @schema TransformFilterCriteria#CreatedAfter
   */
  readonly createdAfter?: string;

  /**
   * @schema TransformFilterCriteria#LastModifiedBefore
   */
  readonly lastModifiedBefore?: string;

  /**
   * @schema TransformFilterCriteria#LastModifiedAfter
   */
  readonly lastModifiedAfter?: string;

  /**
   * @schema TransformFilterCriteria#Schema
   */
  readonly schema?: SchemaColumn[];

}

/**
 * @schema TransformSortCriteria
 */
export interface TransformSortCriteria {
  /**
   * @schema TransformSortCriteria#Column
   */
  readonly column: string;

  /**
   * @schema TransformSortCriteria#SortDirection
   */
  readonly sortDirection: string;

}

/**
 * @schema MlTransform
 */
export interface MlTransform {
  /**
   * @schema MlTransform#TransformId
   */
  readonly transformId?: string;

  /**
   * @schema MlTransform#Name
   */
  readonly name?: string;

  /**
   * @schema MlTransform#Description
   */
  readonly description?: string;

  /**
   * @schema MlTransform#Status
   */
  readonly status?: string;

  /**
   * @schema MlTransform#CreatedOn
   */
  readonly createdOn?: string;

  /**
   * @schema MlTransform#LastModifiedOn
   */
  readonly lastModifiedOn?: string;

  /**
   * @schema MlTransform#InputRecordTables
   */
  readonly inputRecordTables?: GlueTable[];

  /**
   * @schema MlTransform#Parameters
   */
  readonly parameters?: TransformParameters;

  /**
   * @schema MlTransform#EvaluationMetrics
   */
  readonly evaluationMetrics?: EvaluationMetrics;

  /**
   * @schema MlTransform#LabelCount
   */
  readonly labelCount?: number;

  /**
   * @schema MlTransform#Schema
   */
  readonly schema?: SchemaColumn[];

  /**
   * @schema MlTransform#Role
   */
  readonly role?: string;

  /**
   * @schema MlTransform#GlueVersion
   */
  readonly glueVersion?: string;

  /**
   * @schema MlTransform#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema MlTransform#WorkerType
   */
  readonly workerType?: string;

  /**
   * @schema MlTransform#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

  /**
   * @schema MlTransform#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema MlTransform#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema MlTransform#TransformEncryption
   */
  readonly transformEncryption?: TransformEncryption;

}

/**
 * @schema CatalogEntry
 */
export interface CatalogEntry {
  /**
   * @schema CatalogEntry#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema CatalogEntry#TableName
   */
  readonly tableName: string;

}

/**
 * @schema Location
 */
export interface Location {
  /**
   * @schema Location#Jdbc
   */
  readonly jdbc?: CodeGenNodeArg[];

  /**
   * @schema Location#S3
   */
  readonly s3?: CodeGenNodeArg[];

  /**
   * @schema Location#DynamoDB
   */
  readonly dynamoDb?: CodeGenNodeArg[];

}

/**
 * @schema MappingEntry
 */
export interface MappingEntry {
  /**
   * @schema MappingEntry#SourceTable
   */
  readonly sourceTable?: string;

  /**
   * @schema MappingEntry#SourcePath
   */
  readonly sourcePath?: string;

  /**
   * @schema MappingEntry#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema MappingEntry#TargetTable
   */
  readonly targetTable?: string;

  /**
   * @schema MappingEntry#TargetPath
   */
  readonly targetPath?: string;

  /**
   * @schema MappingEntry#TargetType
   */
  readonly targetType?: string;

}

/**
 * @schema PartitionIndexDescriptor
 */
export interface PartitionIndexDescriptor {
  /**
   * @schema PartitionIndexDescriptor#IndexName
   */
  readonly indexName: string;

  /**
   * @schema PartitionIndexDescriptor#Keys
   */
  readonly keys: KeySchemaElement[];

  /**
   * @schema PartitionIndexDescriptor#IndexStatus
   */
  readonly indexStatus: string;

  /**
   * @schema PartitionIndexDescriptor#BackfillErrors
   */
  readonly backfillErrors?: BackfillError[];

}

/**
 * @schema Segment
 */
export interface Segment {
  /**
   * @schema Segment#SegmentNumber
   */
  readonly segmentNumber: number;

  /**
   * @schema Segment#TotalSegments
   */
  readonly totalSegments: number;

}

/**
 * @schema GluePolicy
 */
export interface GluePolicy {
  /**
   * @schema GluePolicy#PolicyInJson
   */
  readonly policyInJson?: string;

  /**
   * @schema GluePolicy#PolicyHash
   */
  readonly policyHash?: string;

  /**
   * @schema GluePolicy#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema GluePolicy#UpdateTime
   */
  readonly updateTime?: string;

}

/**
 * @schema SchemaVersionNumber
 */
export interface SchemaVersionNumber {
  /**
   * @schema SchemaVersionNumber#LatestVersion
   */
  readonly latestVersion?: boolean;

  /**
   * @schema SchemaVersionNumber#VersionNumber
   */
  readonly versionNumber?: number;

}

/**
 * @schema SecurityConfiguration
 */
export interface SecurityConfiguration {
  /**
   * @schema SecurityConfiguration#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityConfiguration#CreatedTimeStamp
   */
  readonly createdTimeStamp?: string;

  /**
   * @schema SecurityConfiguration#EncryptionConfiguration
   */
  readonly encryptionConfiguration?: EncryptionConfiguration;

}

/**
 * @schema Table
 */
export interface Table {
  /**
   * @schema Table#Name
   */
  readonly name: string;

  /**
   * @schema Table#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema Table#Description
   */
  readonly description?: string;

  /**
   * @schema Table#Owner
   */
  readonly owner?: string;

  /**
   * @schema Table#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema Table#UpdateTime
   */
  readonly updateTime?: string;

  /**
   * @schema Table#LastAccessTime
   */
  readonly lastAccessTime?: string;

  /**
   * @schema Table#LastAnalyzedTime
   */
  readonly lastAnalyzedTime?: string;

  /**
   * @schema Table#Retention
   */
  readonly retention?: number;

  /**
   * @schema Table#StorageDescriptor
   */
  readonly storageDescriptor?: StorageDescriptor;

  /**
   * @schema Table#PartitionKeys
   */
  readonly partitionKeys?: Column[];

  /**
   * @schema Table#ViewOriginalText
   */
  readonly viewOriginalText?: string;

  /**
   * @schema Table#ViewExpandedText
   */
  readonly viewExpandedText?: string;

  /**
   * @schema Table#TableType
   */
  readonly tableType?: string;

  /**
   * @schema Table#Parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema Table#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema Table#IsRegisteredWithLakeFormation
   */
  readonly isRegisteredWithLakeFormation?: boolean;

  /**
   * @schema Table#TargetTable
   */
  readonly targetTable?: TableIdentifier;

  /**
   * @schema Table#CatalogId
   */
  readonly catalogId?: string;

}

/**
 * @schema TableVersion
 */
export interface TableVersion {
  /**
   * @schema TableVersion#Table
   */
  readonly table?: Table;

  /**
   * @schema TableVersion#VersionId
   */
  readonly versionId?: string;

}

/**
 * @schema UserDefinedFunction
 */
export interface UserDefinedFunction {
  /**
   * @schema UserDefinedFunction#FunctionName
   */
  readonly functionName?: string;

  /**
   * @schema UserDefinedFunction#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema UserDefinedFunction#ClassName
   */
  readonly className?: string;

  /**
   * @schema UserDefinedFunction#OwnerName
   */
  readonly ownerName?: string;

  /**
   * @schema UserDefinedFunction#OwnerType
   */
  readonly ownerType?: string;

  /**
   * @schema UserDefinedFunction#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema UserDefinedFunction#ResourceUris
   */
  readonly resourceUris?: ResourceUri[];

  /**
   * @schema UserDefinedFunction#CatalogId
   */
  readonly catalogId?: string;

}

/**
 * @schema WorkflowRun
 */
export interface WorkflowRun {
  /**
   * @schema WorkflowRun#Name
   */
  readonly name?: string;

  /**
   * @schema WorkflowRun#WorkflowRunId
   */
  readonly workflowRunId?: string;

  /**
   * @schema WorkflowRun#PreviousRunId
   */
  readonly previousRunId?: string;

  /**
   * @schema WorkflowRun#WorkflowRunProperties
   */
  readonly workflowRunProperties?: { [key: string]: string };

  /**
   * @schema WorkflowRun#StartedOn
   */
  readonly startedOn?: string;

  /**
   * @schema WorkflowRun#CompletedOn
   */
  readonly completedOn?: string;

  /**
   * @schema WorkflowRun#Status
   */
  readonly status?: string;

  /**
   * @schema WorkflowRun#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema WorkflowRun#Statistics
   */
  readonly statistics?: WorkflowRunStatistics;

  /**
   * @schema WorkflowRun#Graph
   */
  readonly graph?: WorkflowGraph;

}

/**
 * @schema RegistryListItem
 */
export interface RegistryListItem {
  /**
   * @schema RegistryListItem#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema RegistryListItem#RegistryArn
   */
  readonly registryArn?: string;

  /**
   * @schema RegistryListItem#Description
   */
  readonly description?: string;

  /**
   * @schema RegistryListItem#Status
   */
  readonly status?: string;

  /**
   * @schema RegistryListItem#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema RegistryListItem#UpdatedTime
   */
  readonly updatedTime?: string;

}

/**
 * @schema SchemaVersionListItem
 */
export interface SchemaVersionListItem {
  /**
   * @schema SchemaVersionListItem#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema SchemaVersionListItem#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema SchemaVersionListItem#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema SchemaVersionListItem#Status
   */
  readonly status?: string;

  /**
   * @schema SchemaVersionListItem#CreatedTime
   */
  readonly createdTime?: string;

}

/**
 * @schema SchemaListItem
 */
export interface SchemaListItem {
  /**
   * @schema SchemaListItem#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema SchemaListItem#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema SchemaListItem#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema SchemaListItem#Description
   */
  readonly description?: string;

  /**
   * @schema SchemaListItem#SchemaStatus
   */
  readonly schemaStatus?: string;

  /**
   * @schema SchemaListItem#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema SchemaListItem#UpdatedTime
   */
  readonly updatedTime?: string;

}

/**
 * @schema MetadataKeyValuePair
 */
export interface MetadataKeyValuePair {
  /**
   * @schema MetadataKeyValuePair#MetadataKey
   */
  readonly metadataKey?: string;

  /**
   * @schema MetadataKeyValuePair#MetadataValue
   */
  readonly metadataValue?: string;

}

/**
 * @schema MetadataInfo
 */
export interface MetadataInfo {
  /**
   * @schema MetadataInfo#MetadataValue
   */
  readonly metadataValue?: string;

  /**
   * @schema MetadataInfo#CreatedTime
   */
  readonly createdTime?: string;

}

/**
 * @schema PropertyPredicate
 */
export interface PropertyPredicate {
  /**
   * @schema PropertyPredicate#Key
   */
  readonly key?: string;

  /**
   * @schema PropertyPredicate#Value
   */
  readonly value?: string;

  /**
   * @schema PropertyPredicate#Comparator
   */
  readonly comparator?: string;

}

/**
 * @schema SortCriterion
 */
export interface SortCriterion {
  /**
   * @schema SortCriterion#FieldName
   */
  readonly fieldName?: string;

  /**
   * @schema SortCriterion#Sort
   */
  readonly sort?: string;

}

/**
 * @schema UpdateGrokClassifierRequest
 */
export interface UpdateGrokClassifierRequest {
  /**
   * @schema UpdateGrokClassifierRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateGrokClassifierRequest#Classification
   */
  readonly classification?: string;

  /**
   * @schema UpdateGrokClassifierRequest#GrokPattern
   */
  readonly grokPattern?: string;

  /**
   * @schema UpdateGrokClassifierRequest#CustomPatterns
   */
  readonly customPatterns?: string;

}

/**
 * @schema UpdateXmlClassifierRequest
 */
export interface UpdateXmlClassifierRequest {
  /**
   * @schema UpdateXmlClassifierRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateXmlClassifierRequest#Classification
   */
  readonly classification?: string;

  /**
   * @schema UpdateXmlClassifierRequest#RowTag
   */
  readonly rowTag?: string;

}

/**
 * @schema UpdateJsonClassifierRequest
 */
export interface UpdateJsonClassifierRequest {
  /**
   * @schema UpdateJsonClassifierRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateJsonClassifierRequest#JsonPath
   */
  readonly jsonPath?: string;

}

/**
 * @schema UpdateCsvClassifierRequest
 */
export interface UpdateCsvClassifierRequest {
  /**
   * @schema UpdateCsvClassifierRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateCsvClassifierRequest#Delimiter
   */
  readonly delimiter?: string;

  /**
   * @schema UpdateCsvClassifierRequest#QuoteSymbol
   */
  readonly quoteSymbol?: string;

  /**
   * @schema UpdateCsvClassifierRequest#ContainsHeader
   */
  readonly containsHeader?: string;

  /**
   * @schema UpdateCsvClassifierRequest#Header
   */
  readonly header?: string[];

  /**
   * @schema UpdateCsvClassifierRequest#DisableValueTrimming
   */
  readonly disableValueTrimming?: boolean;

  /**
   * @schema UpdateCsvClassifierRequest#AllowSingleColumn
   */
  readonly allowSingleColumn?: boolean;

}

/**
 * @schema ColumnStatisticsError
 */
export interface ColumnStatisticsError {
  /**
   * @schema ColumnStatisticsError#ColumnStatistics
   */
  readonly columnStatistics?: ColumnStatistics;

  /**
   * @schema ColumnStatisticsError#Error
   */
  readonly error?: ErrorDetail;

}

/**
 * @schema DevEndpointCustomLibraries
 */
export interface DevEndpointCustomLibraries {
  /**
   * @schema DevEndpointCustomLibraries#ExtraPythonLibsS3Path
   */
  readonly extraPythonLibsS3Path?: string;

  /**
   * @schema DevEndpointCustomLibraries#ExtraJarsS3Path
   */
  readonly extraJarsS3Path?: string;

}

/**
 * @schema JobUpdate
 */
export interface JobUpdate {
  /**
   * @schema JobUpdate#Description
   */
  readonly description?: string;

  /**
   * @schema JobUpdate#LogUri
   */
  readonly logUri?: string;

  /**
   * @schema JobUpdate#Role
   */
  readonly role?: string;

  /**
   * @schema JobUpdate#ExecutionProperty
   */
  readonly executionProperty?: ExecutionProperty;

  /**
   * @schema JobUpdate#Command
   */
  readonly command?: JobCommand;

  /**
   * @schema JobUpdate#DefaultArguments
   */
  readonly defaultArguments?: { [key: string]: string };

  /**
   * @schema JobUpdate#NonOverridableArguments
   */
  readonly nonOverridableArguments?: { [key: string]: string };

  /**
   * @schema JobUpdate#Connections
   */
  readonly connections?: ConnectionsList;

  /**
   * @schema JobUpdate#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema JobUpdate#AllocatedCapacity
   */
  readonly allocatedCapacity?: number;

  /**
   * @schema JobUpdate#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema JobUpdate#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema JobUpdate#WorkerType
   */
  readonly workerType?: string;

  /**
   * @schema JobUpdate#NumberOfWorkers
   */
  readonly numberOfWorkers?: number;

  /**
   * @schema JobUpdate#SecurityConfiguration
   */
  readonly securityConfiguration?: string;

  /**
   * @schema JobUpdate#NotificationProperty
   */
  readonly notificationProperty?: NotificationProperty;

  /**
   * @schema JobUpdate#GlueVersion
   */
  readonly glueVersion?: string;

}

/**
 * @schema TriggerUpdate
 */
export interface TriggerUpdate {
  /**
   * @schema TriggerUpdate#Name
   */
  readonly name?: string;

  /**
   * @schema TriggerUpdate#Description
   */
  readonly description?: string;

  /**
   * @schema TriggerUpdate#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema TriggerUpdate#Actions
   */
  readonly actions?: Action[];

  /**
   * @schema TriggerUpdate#Predicate
   */
  readonly predicate?: Predicate;

}

/**
 * @schema StorageDescriptor
 */
export interface StorageDescriptor {
  /**
   * @schema StorageDescriptor#Columns
   */
  readonly columns?: Column[];

  /**
   * @schema StorageDescriptor#Location
   */
  readonly location?: string;

  /**
   * @schema StorageDescriptor#InputFormat
   */
  readonly inputFormat?: string;

  /**
   * @schema StorageDescriptor#OutputFormat
   */
  readonly outputFormat?: string;

  /**
   * @schema StorageDescriptor#Compressed
   */
  readonly compressed?: boolean;

  /**
   * @schema StorageDescriptor#NumberOfBuckets
   */
  readonly numberOfBuckets?: number;

  /**
   * @schema StorageDescriptor#SerdeInfo
   */
  readonly serdeInfo?: SerDeInfo;

  /**
   * @schema StorageDescriptor#BucketColumns
   */
  readonly bucketColumns?: string[];

  /**
   * @schema StorageDescriptor#SortColumns
   */
  readonly sortColumns?: Order[];

  /**
   * @schema StorageDescriptor#Parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema StorageDescriptor#SkewedInfo
   */
  readonly skewedInfo?: SkewedInfo;

  /**
   * @schema StorageDescriptor#StoredAsSubDirectories
   */
  readonly storedAsSubDirectories?: boolean;

  /**
   * @schema StorageDescriptor#SchemaReference
   */
  readonly schemaReference?: SchemaReference;

}

/**
 * @schema Schedule
 */
export interface Schedule {
  /**
   * @schema Schedule#ScheduleExpression
   */
  readonly scheduleExpression?: string;

  /**
   * @schema Schedule#State
   */
  readonly state?: string;

}

/**
 * @schema LastCrawlInfo
 */
export interface LastCrawlInfo {
  /**
   * @schema LastCrawlInfo#Status
   */
  readonly status?: string;

  /**
   * @schema LastCrawlInfo#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema LastCrawlInfo#LogGroup
   */
  readonly logGroup?: string;

  /**
   * @schema LastCrawlInfo#LogStream
   */
  readonly logStream?: string;

  /**
   * @schema LastCrawlInfo#MessagePrefix
   */
  readonly messagePrefix?: string;

  /**
   * @schema LastCrawlInfo#StartTime
   */
  readonly startTime?: string;

}

/**
 * @schema WorkflowGraph
 */
export interface WorkflowGraph {
  /**
   * @schema WorkflowGraph#Nodes
   */
  readonly nodes?: Node[];

  /**
   * @schema WorkflowGraph#Edges
   */
  readonly edges?: Edge[];

}

/**
 * @schema PhysicalConnectionRequirements
 */
export interface PhysicalConnectionRequirements {
  /**
   * @schema PhysicalConnectionRequirements#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema PhysicalConnectionRequirements#SecurityGroupIdList
   */
  readonly securityGroupIdList?: string[];

  /**
   * @schema PhysicalConnectionRequirements#AvailabilityZone
   */
  readonly availabilityZone?: string;

}

/**
 * @schema S3Target
 */
export interface S3Target {
  /**
   * @schema S3Target#Path
   */
  readonly path?: string;

  /**
   * @schema S3Target#Exclusions
   */
  readonly exclusions?: string[];

  /**
   * @schema S3Target#ConnectionName
   */
  readonly connectionName?: string;

}

/**
 * @schema JdbcTarget
 */
export interface JdbcTarget {
  /**
   * @schema JdbcTarget#ConnectionName
   */
  readonly connectionName?: string;

  /**
   * @schema JdbcTarget#Path
   */
  readonly path?: string;

  /**
   * @schema JdbcTarget#Exclusions
   */
  readonly exclusions?: string[];

}

/**
 * @schema MongoDbTarget
 */
export interface MongoDbTarget {
  /**
   * @schema MongoDbTarget#ConnectionName
   */
  readonly connectionName?: string;

  /**
   * @schema MongoDbTarget#Path
   */
  readonly path?: string;

  /**
   * @schema MongoDbTarget#ScanAll
   */
  readonly scanAll?: boolean;

}

/**
 * @schema DynamoDbTarget
 */
export interface DynamoDbTarget {
  /**
   * @schema DynamoDbTarget#Path
   */
  readonly path?: string;

  /**
   * @schema DynamoDbTarget#scanAll
   */
  readonly scanAll?: boolean;

  /**
   * @schema DynamoDbTarget#scanRate
   */
  readonly scanRate?: number;

}

/**
 * @schema CatalogTarget
 */
export interface CatalogTarget {
  /**
   * @schema CatalogTarget#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema CatalogTarget#Tables
   */
  readonly tables: string[];

}

/**
 * @schema PrincipalPermissions
 */
export interface PrincipalPermissions {
  /**
   * @schema PrincipalPermissions#Principal
   */
  readonly principal?: DataLakePrincipal;

  /**
   * @schema PrincipalPermissions#Permissions
   */
  readonly permissions?: string[];

}

/**
 * @schema DatabaseIdentifier
 */
export interface DatabaseIdentifier {
  /**
   * @schema DatabaseIdentifier#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema DatabaseIdentifier#DatabaseName
   */
  readonly databaseName?: string;

}

/**
 * @schema FindMatchesParameters
 */
export interface FindMatchesParameters {
  /**
   * @schema FindMatchesParameters#PrimaryKeyColumnName
   */
  readonly primaryKeyColumnName?: string;

  /**
   * @schema FindMatchesParameters#PrecisionRecallTradeoff
   */
  readonly precisionRecallTradeoff?: number;

  /**
   * @schema FindMatchesParameters#AccuracyCostTradeoff
   */
  readonly accuracyCostTradeoff?: number;

  /**
   * @schema FindMatchesParameters#EnforceProvidedLabels
   */
  readonly enforceProvidedLabels?: boolean;

}

/**
 * @schema MlUserDataEncryption
 */
export interface MlUserDataEncryption {
  /**
   * @schema MlUserDataEncryption#MlUserDataEncryptionMode
   */
  readonly mlUserDataEncryptionMode: string;

  /**
   * @schema MlUserDataEncryption#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema CodeGenNodeArg
 */
export interface CodeGenNodeArg {
  /**
   * @schema CodeGenNodeArg#Name
   */
  readonly name: string;

  /**
   * @schema CodeGenNodeArg#Value
   */
  readonly value: string;

  /**
   * @schema CodeGenNodeArg#Param
   */
  readonly param?: boolean;

}

/**
 * @schema S3Encryption
 */
export interface S3Encryption {
  /**
   * @schema S3Encryption#S3EncryptionMode
   */
  readonly s3EncryptionMode?: string;

  /**
   * @schema S3Encryption#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

}

/**
 * @schema CloudWatchEncryption
 */
export interface CloudWatchEncryption {
  /**
   * @schema CloudWatchEncryption#CloudWatchEncryptionMode
   */
  readonly cloudWatchEncryptionMode?: string;

  /**
   * @schema CloudWatchEncryption#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

}

/**
 * @schema JobBookmarksEncryption
 */
export interface JobBookmarksEncryption {
  /**
   * @schema JobBookmarksEncryption#JobBookmarksEncryptionMode
   */
  readonly jobBookmarksEncryptionMode?: string;

  /**
   * @schema JobBookmarksEncryption#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

}

/**
 * @schema Column
 */
export interface Column {
  /**
   * @schema Column#Name
   */
  readonly name: string;

  /**
   * @schema Column#Type
   */
  readonly type?: string;

  /**
   * @schema Column#Comment
   */
  readonly comment?: string;

  /**
   * @schema Column#Parameters
   */
  readonly parameters?: { [key: string]: string };

}

/**
 * @schema TableIdentifier
 */
export interface TableIdentifier {
  /**
   * @schema TableIdentifier#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema TableIdentifier#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema TableIdentifier#Name
   */
  readonly name?: string;

}

/**
 * @schema Condition
 */
export interface Condition {
  /**
   * @schema Condition#LogicalOperator
   */
  readonly logicalOperator?: string;

  /**
   * @schema Condition#JobName
   */
  readonly jobName?: string;

  /**
   * @schema Condition#State
   */
  readonly state?: string;

  /**
   * @schema Condition#CrawlerName
   */
  readonly crawlerName?: string;

  /**
   * @schema Condition#CrawlState
   */
  readonly crawlState?: string;

}

/**
 * @schema ResourceUri
 */
export interface ResourceUri {
  /**
   * @schema ResourceUri#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ResourceUri#Uri
   */
  readonly uri?: string;

}

/**
 * @schema ErrorDetails
 */
export interface ErrorDetails {
  /**
   * @schema ErrorDetails#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema ErrorDetails#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema GrokClassifier
 */
export interface GrokClassifier {
  /**
   * @schema GrokClassifier#Name
   */
  readonly name: string;

  /**
   * @schema GrokClassifier#Classification
   */
  readonly classification: string;

  /**
   * @schema GrokClassifier#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema GrokClassifier#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema GrokClassifier#Version
   */
  readonly version?: number;

  /**
   * @schema GrokClassifier#GrokPattern
   */
  readonly grokPattern: string;

  /**
   * @schema GrokClassifier#CustomPatterns
   */
  readonly customPatterns?: string;

}

/**
 * @schema XmlClassifier
 */
export interface XmlClassifier {
  /**
   * @schema XmlClassifier#Name
   */
  readonly name: string;

  /**
   * @schema XmlClassifier#Classification
   */
  readonly classification: string;

  /**
   * @schema XmlClassifier#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema XmlClassifier#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema XmlClassifier#Version
   */
  readonly version?: number;

  /**
   * @schema XmlClassifier#RowTag
   */
  readonly rowTag?: string;

}

/**
 * @schema JsonClassifier
 */
export interface JsonClassifier {
  /**
   * @schema JsonClassifier#Name
   */
  readonly name: string;

  /**
   * @schema JsonClassifier#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema JsonClassifier#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema JsonClassifier#Version
   */
  readonly version?: number;

  /**
   * @schema JsonClassifier#JsonPath
   */
  readonly jsonPath: string;

}

/**
 * @schema CsvClassifier
 */
export interface CsvClassifier {
  /**
   * @schema CsvClassifier#Name
   */
  readonly name: string;

  /**
   * @schema CsvClassifier#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema CsvClassifier#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema CsvClassifier#Version
   */
  readonly version?: number;

  /**
   * @schema CsvClassifier#Delimiter
   */
  readonly delimiter?: string;

  /**
   * @schema CsvClassifier#QuoteSymbol
   */
  readonly quoteSymbol?: string;

  /**
   * @schema CsvClassifier#ContainsHeader
   */
  readonly containsHeader?: string;

  /**
   * @schema CsvClassifier#Header
   */
  readonly header?: string[];

  /**
   * @schema CsvClassifier#DisableValueTrimming
   */
  readonly disableValueTrimming?: boolean;

  /**
   * @schema CsvClassifier#AllowSingleColumn
   */
  readonly allowSingleColumn?: boolean;

}

/**
 * @schema ColumnStatisticsData
 */
export interface ColumnStatisticsData {
  /**
   * @schema ColumnStatisticsData#Type
   */
  readonly type: string;

  /**
   * @schema ColumnStatisticsData#BooleanColumnStatisticsData
   */
  readonly booleanColumnStatisticsData?: BooleanColumnStatisticsData;

  /**
   * @schema ColumnStatisticsData#DateColumnStatisticsData
   */
  readonly dateColumnStatisticsData?: DateColumnStatisticsData;

  /**
   * @schema ColumnStatisticsData#DecimalColumnStatisticsData
   */
  readonly decimalColumnStatisticsData?: DecimalColumnStatisticsData;

  /**
   * @schema ColumnStatisticsData#DoubleColumnStatisticsData
   */
  readonly doubleColumnStatisticsData?: DoubleColumnStatisticsData;

  /**
   * @schema ColumnStatisticsData#LongColumnStatisticsData
   */
  readonly longColumnStatisticsData?: LongColumnStatisticsData;

  /**
   * @schema ColumnStatisticsData#StringColumnStatisticsData
   */
  readonly stringColumnStatisticsData?: StringColumnStatisticsData;

  /**
   * @schema ColumnStatisticsData#BinaryColumnStatisticsData
   */
  readonly binaryColumnStatisticsData?: BinaryColumnStatisticsData;

}

/**
 * @schema EncryptionAtRest
 */
export interface EncryptionAtRest {
  /**
   * @schema EncryptionAtRest#CatalogEncryptionMode
   */
  readonly catalogEncryptionMode: string;

  /**
   * @schema EncryptionAtRest#SseAwsKmsKeyId
   */
  readonly sseAwsKmsKeyId?: string;

}

/**
 * @schema ConnectionPasswordEncryption
 */
export interface ConnectionPasswordEncryption {
  /**
   * @schema ConnectionPasswordEncryption#ReturnConnectionPasswordEncrypted
   */
  readonly returnConnectionPasswordEncrypted: boolean;

  /**
   * @schema ConnectionPasswordEncryption#AwsKmsKeyId
   */
  readonly awsKmsKeyId?: string;

}

/**
 * @schema Predecessor
 */
export interface Predecessor {
  /**
   * @schema Predecessor#JobName
   */
  readonly jobName?: string;

  /**
   * @schema Predecessor#RunId
   */
  readonly runId?: string;

}

/**
 * @schema ImportLabelsTaskRunProperties
 */
export interface ImportLabelsTaskRunProperties {
  /**
   * @schema ImportLabelsTaskRunProperties#InputS3Path
   */
  readonly inputS3Path?: string;

  /**
   * @schema ImportLabelsTaskRunProperties#Replace
   */
  readonly replace?: boolean;

}

/**
 * @schema ExportLabelsTaskRunProperties
 */
export interface ExportLabelsTaskRunProperties {
  /**
   * @schema ExportLabelsTaskRunProperties#OutputS3Path
   */
  readonly outputS3Path?: string;

}

/**
 * @schema LabelingSetGenerationTaskRunProperties
 */
export interface LabelingSetGenerationTaskRunProperties {
  /**
   * @schema LabelingSetGenerationTaskRunProperties#OutputS3Path
   */
  readonly outputS3Path?: string;

}

/**
 * @schema FindMatchesTaskRunProperties
 */
export interface FindMatchesTaskRunProperties {
  /**
   * @schema FindMatchesTaskRunProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema FindMatchesTaskRunProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema FindMatchesTaskRunProperties#JobRunId
   */
  readonly jobRunId?: string;

}

/**
 * @schema FindMatchesMetrics
 */
export interface FindMatchesMetrics {
  /**
   * @schema FindMatchesMetrics#AreaUnderPRCurve
   */
  readonly areaUnderPrCurve?: number;

  /**
   * @schema FindMatchesMetrics#Precision
   */
  readonly precision?: number;

  /**
   * @schema FindMatchesMetrics#Recall
   */
  readonly recall?: number;

  /**
   * @schema FindMatchesMetrics#F1
   */
  readonly f1?: number;

  /**
   * @schema FindMatchesMetrics#ConfusionMatrix
   */
  readonly confusionMatrix?: ConfusionMatrix;

}

/**
 * @schema KeySchemaElement
 */
export interface KeySchemaElement {
  /**
   * @schema KeySchemaElement#Name
   */
  readonly name: string;

  /**
   * @schema KeySchemaElement#Type
   */
  readonly type: string;

}

/**
 * @schema BackfillError
 */
export interface BackfillError {
  /**
   * @schema BackfillError#Code
   */
  readonly code?: string;

  /**
   * @schema BackfillError#Partitions
   */
  readonly partitions?: PartitionValueList[];

}

/**
 * @schema WorkflowRunStatistics
 */
export interface WorkflowRunStatistics {
  /**
   * @schema WorkflowRunStatistics#TotalActions
   */
  readonly totalActions?: number;

  /**
   * @schema WorkflowRunStatistics#TimeoutActions
   */
  readonly timeoutActions?: number;

  /**
   * @schema WorkflowRunStatistics#FailedActions
   */
  readonly failedActions?: number;

  /**
   * @schema WorkflowRunStatistics#StoppedActions
   */
  readonly stoppedActions?: number;

  /**
   * @schema WorkflowRunStatistics#SucceededActions
   */
  readonly succeededActions?: number;

  /**
   * @schema WorkflowRunStatistics#RunningActions
   */
  readonly runningActions?: number;

}

/**
 * @schema SerDeInfo
 */
export interface SerDeInfo {
  /**
   * @schema SerDeInfo#Name
   */
  readonly name?: string;

  /**
   * @schema SerDeInfo#SerializationLibrary
   */
  readonly serializationLibrary?: string;

  /**
   * @schema SerDeInfo#Parameters
   */
  readonly parameters?: { [key: string]: string };

}

/**
 * @schema Order
 */
export interface Order {
  /**
   * @schema Order#Column
   */
  readonly column: string;

  /**
   * @schema Order#SortOrder
   */
  readonly sortOrder: number;

}

/**
 * @schema SkewedInfo
 */
export interface SkewedInfo {
  /**
   * @schema SkewedInfo#SkewedColumnNames
   */
  readonly skewedColumnNames?: string[];

  /**
   * @schema SkewedInfo#SkewedColumnValues
   */
  readonly skewedColumnValues?: string[];

  /**
   * @schema SkewedInfo#SkewedColumnValueLocationMaps
   */
  readonly skewedColumnValueLocationMaps?: { [key: string]: string };

}

/**
 * @schema SchemaReference
 */
export interface SchemaReference {
  /**
   * @schema SchemaReference#SchemaId
   */
  readonly schemaId?: SchemaId;

  /**
   * @schema SchemaReference#SchemaVersionId
   */
  readonly schemaVersionId?: string;

  /**
   * @schema SchemaReference#SchemaVersionNumber
   */
  readonly schemaVersionNumber?: number;

}

/**
 * @schema Node
 */
export interface Node {
  /**
   * @schema Node#Type
   */
  readonly type?: string;

  /**
   * @schema Node#Name
   */
  readonly name?: string;

  /**
   * @schema Node#UniqueId
   */
  readonly uniqueId?: string;

  /**
   * @schema Node#TriggerDetails
   */
  readonly triggerDetails?: TriggerNodeDetails;

  /**
   * @schema Node#JobDetails
   */
  readonly jobDetails?: JobNodeDetails;

  /**
   * @schema Node#CrawlerDetails
   */
  readonly crawlerDetails?: CrawlerNodeDetails;

}

/**
 * @schema Edge
 */
export interface Edge {
  /**
   * @schema Edge#SourceId
   */
  readonly sourceId?: string;

  /**
   * @schema Edge#DestinationId
   */
  readonly destinationId?: string;

}

/**
 * @schema DataLakePrincipal
 */
export interface DataLakePrincipal {
  /**
   * @schema DataLakePrincipal#DataLakePrincipalIdentifier
   */
  readonly dataLakePrincipalIdentifier?: string;

}

/**
 * @schema BooleanColumnStatisticsData
 */
export interface BooleanColumnStatisticsData {
  /**
   * @schema BooleanColumnStatisticsData#NumberOfTrues
   */
  readonly numberOfTrues: number;

  /**
   * @schema BooleanColumnStatisticsData#NumberOfFalses
   */
  readonly numberOfFalses: number;

  /**
   * @schema BooleanColumnStatisticsData#NumberOfNulls
   */
  readonly numberOfNulls: number;

}

/**
 * @schema DateColumnStatisticsData
 */
export interface DateColumnStatisticsData {
  /**
   * @schema DateColumnStatisticsData#MinimumValue
   */
  readonly minimumValue?: string;

  /**
   * @schema DateColumnStatisticsData#MaximumValue
   */
  readonly maximumValue?: string;

  /**
   * @schema DateColumnStatisticsData#NumberOfNulls
   */
  readonly numberOfNulls: number;

  /**
   * @schema DateColumnStatisticsData#NumberOfDistinctValues
   */
  readonly numberOfDistinctValues: number;

}

/**
 * @schema DecimalColumnStatisticsData
 */
export interface DecimalColumnStatisticsData {
  /**
   * @schema DecimalColumnStatisticsData#MinimumValue
   */
  readonly minimumValue?: DecimalNumber;

  /**
   * @schema DecimalColumnStatisticsData#MaximumValue
   */
  readonly maximumValue?: DecimalNumber;

  /**
   * @schema DecimalColumnStatisticsData#NumberOfNulls
   */
  readonly numberOfNulls: number;

  /**
   * @schema DecimalColumnStatisticsData#NumberOfDistinctValues
   */
  readonly numberOfDistinctValues: number;

}

/**
 * @schema DoubleColumnStatisticsData
 */
export interface DoubleColumnStatisticsData {
  /**
   * @schema DoubleColumnStatisticsData#MinimumValue
   */
  readonly minimumValue?: number;

  /**
   * @schema DoubleColumnStatisticsData#MaximumValue
   */
  readonly maximumValue?: number;

  /**
   * @schema DoubleColumnStatisticsData#NumberOfNulls
   */
  readonly numberOfNulls: number;

  /**
   * @schema DoubleColumnStatisticsData#NumberOfDistinctValues
   */
  readonly numberOfDistinctValues: number;

}

/**
 * @schema LongColumnStatisticsData
 */
export interface LongColumnStatisticsData {
  /**
   * @schema LongColumnStatisticsData#MinimumValue
   */
  readonly minimumValue?: number;

  /**
   * @schema LongColumnStatisticsData#MaximumValue
   */
  readonly maximumValue?: number;

  /**
   * @schema LongColumnStatisticsData#NumberOfNulls
   */
  readonly numberOfNulls: number;

  /**
   * @schema LongColumnStatisticsData#NumberOfDistinctValues
   */
  readonly numberOfDistinctValues: number;

}

/**
 * @schema StringColumnStatisticsData
 */
export interface StringColumnStatisticsData {
  /**
   * @schema StringColumnStatisticsData#MaximumLength
   */
  readonly maximumLength: number;

  /**
   * @schema StringColumnStatisticsData#AverageLength
   */
  readonly averageLength: number;

  /**
   * @schema StringColumnStatisticsData#NumberOfNulls
   */
  readonly numberOfNulls: number;

  /**
   * @schema StringColumnStatisticsData#NumberOfDistinctValues
   */
  readonly numberOfDistinctValues: number;

}

/**
 * @schema BinaryColumnStatisticsData
 */
export interface BinaryColumnStatisticsData {
  /**
   * @schema BinaryColumnStatisticsData#MaximumLength
   */
  readonly maximumLength: number;

  /**
   * @schema BinaryColumnStatisticsData#AverageLength
   */
  readonly averageLength: number;

  /**
   * @schema BinaryColumnStatisticsData#NumberOfNulls
   */
  readonly numberOfNulls: number;

}

/**
 * @schema ConfusionMatrix
 */
export interface ConfusionMatrix {
  /**
   * @schema ConfusionMatrix#NumTruePositives
   */
  readonly numTruePositives?: number;

  /**
   * @schema ConfusionMatrix#NumFalsePositives
   */
  readonly numFalsePositives?: number;

  /**
   * @schema ConfusionMatrix#NumTrueNegatives
   */
  readonly numTrueNegatives?: number;

  /**
   * @schema ConfusionMatrix#NumFalseNegatives
   */
  readonly numFalseNegatives?: number;

}

/**
 * @schema TriggerNodeDetails
 */
export interface TriggerNodeDetails {
  /**
   * @schema TriggerNodeDetails#Trigger
   */
  readonly trigger?: Trigger;

}

/**
 * @schema JobNodeDetails
 */
export interface JobNodeDetails {
  /**
   * @schema JobNodeDetails#JobRuns
   */
  readonly jobRuns?: JobRun[];

}

/**
 * @schema CrawlerNodeDetails
 */
export interface CrawlerNodeDetails {
  /**
   * @schema CrawlerNodeDetails#Crawls
   */
  readonly crawls?: Crawl[];

}

/**
 * @schema DecimalNumber
 */
export interface DecimalNumber {
  /**
   * @schema DecimalNumber#UnscaledValue
   */
  readonly unscaledValue: any;

  /**
   * @schema DecimalNumber#Scale
   */
  readonly scale: number;

}

/**
 * @schema Crawl
 */
export interface Crawl {
  /**
   * @schema Crawl#State
   */
  readonly state?: string;

  /**
   * @schema Crawl#StartedOn
   */
  readonly startedOn?: string;

  /**
   * @schema Crawl#CompletedOn
   */
  readonly completedOn?: string;

  /**
   * @schema Crawl#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema Crawl#LogGroup
   */
  readonly logGroup?: string;

  /**
   * @schema Crawl#LogStream
   */
  readonly logStream?: string;

}
