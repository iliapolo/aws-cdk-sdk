/**
 * @schema CreateConnectorProfileRequest
 */
export interface CreateConnectorProfileRequest {
  /**
   * @schema CreateConnectorProfileRequest#connectorProfileName
   */
  readonly connectorProfileName: string;

  /**
   * @schema CreateConnectorProfileRequest#kmsArn
   */
  readonly kmsArn?: string;

  /**
   * @schema CreateConnectorProfileRequest#connectorType
   */
  readonly connectorType: string;

  /**
   * @schema CreateConnectorProfileRequest#connectionMode
   */
  readonly connectionMode: string;

  /**
   * @schema CreateConnectorProfileRequest#connectorProfileConfig
   */
  readonly connectorProfileConfig: ConnectorProfileConfig;

}

/**
 * @schema CreateConnectorProfileResponse
 */
export interface CreateConnectorProfileResponse {
  /**
   * @schema CreateConnectorProfileResponse#connectorProfileArn
   */
  readonly connectorProfileArn?: string;

}

/**
 * @schema CreateFlowRequest
 */
export interface CreateFlowRequest {
  /**
   * @schema CreateFlowRequest#flowName
   */
  readonly flowName: string;

  /**
   * @schema CreateFlowRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateFlowRequest#kmsArn
   */
  readonly kmsArn?: string;

  /**
   * @schema CreateFlowRequest#triggerConfig
   */
  readonly triggerConfig: TriggerConfig;

  /**
   * @schema CreateFlowRequest#sourceFlowConfig
   */
  readonly sourceFlowConfig: SourceFlowConfig;

  /**
   * @schema CreateFlowRequest#destinationFlowConfigList
   */
  readonly destinationFlowConfigList: DestinationFlowConfig[];

  /**
   * @schema CreateFlowRequest#tasks
   */
  readonly tasks: Task[];

  /**
   * @schema CreateFlowRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateFlowResponse
 */
export interface CreateFlowResponse {
  /**
   * @schema CreateFlowResponse#flowArn
   */
  readonly flowArn?: string;

  /**
   * @schema CreateFlowResponse#flowStatus
   */
  readonly flowStatus?: string;

}

/**
 * @schema DeleteConnectorProfileRequest
 */
export interface DeleteConnectorProfileRequest {
  /**
   * @schema DeleteConnectorProfileRequest#connectorProfileName
   */
  readonly connectorProfileName: string;

  /**
   * @schema DeleteConnectorProfileRequest#forceDelete
   */
  readonly forceDelete?: boolean;

}

/**
 * @schema DeleteConnectorProfileResponse
 */
export interface DeleteConnectorProfileResponse {
}

/**
 * @schema DeleteFlowRequest
 */
export interface DeleteFlowRequest {
  /**
   * @schema DeleteFlowRequest#flowName
   */
  readonly flowName: string;

  /**
   * @schema DeleteFlowRequest#forceDelete
   */
  readonly forceDelete?: boolean;

}

/**
 * @schema DeleteFlowResponse
 */
export interface DeleteFlowResponse {
}

/**
 * @schema DescribeConnectorEntityRequest
 */
export interface DescribeConnectorEntityRequest {
  /**
   * @schema DescribeConnectorEntityRequest#connectorEntityName
   */
  readonly connectorEntityName: string;

  /**
   * @schema DescribeConnectorEntityRequest#connectorType
   */
  readonly connectorType?: string;

  /**
   * @schema DescribeConnectorEntityRequest#connectorProfileName
   */
  readonly connectorProfileName?: string;

}

/**
 * @schema DescribeConnectorEntityResponse
 */
export interface DescribeConnectorEntityResponse {
  /**
   * @schema DescribeConnectorEntityResponse#connectorEntityFields
   */
  readonly connectorEntityFields: ConnectorEntityField[];

}

/**
 * @schema DescribeConnectorProfilesRequest
 */
export interface DescribeConnectorProfilesRequest {
  /**
   * @schema DescribeConnectorProfilesRequest#connectorProfileNames
   */
  readonly connectorProfileNames?: string[];

  /**
   * @schema DescribeConnectorProfilesRequest#connectorType
   */
  readonly connectorType?: string;

  /**
   * @schema DescribeConnectorProfilesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeConnectorProfilesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeConnectorProfilesResponse
 */
export interface DescribeConnectorProfilesResponse {
  /**
   * @schema DescribeConnectorProfilesResponse#connectorProfileDetails
   */
  readonly connectorProfileDetails?: ConnectorProfile[];

  /**
   * @schema DescribeConnectorProfilesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeConnectorsRequest
 */
export interface DescribeConnectorsRequest {
  /**
   * @schema DescribeConnectorsRequest#connectorTypes
   */
  readonly connectorTypes?: string[];

  /**
   * @schema DescribeConnectorsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeConnectorsResponse
 */
export interface DescribeConnectorsResponse {
  /**
   * @schema DescribeConnectorsResponse#connectorConfigurations
   */
  readonly connectorConfigurations?: { [key: string]: ConnectorConfiguration };

  /**
   * @schema DescribeConnectorsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeFlowRequest
 */
export interface DescribeFlowRequest {
  /**
   * @schema DescribeFlowRequest#flowName
   */
  readonly flowName: string;

}

/**
 * @schema DescribeFlowResponse
 */
export interface DescribeFlowResponse {
  /**
   * @schema DescribeFlowResponse#flowArn
   */
  readonly flowArn?: string;

  /**
   * @schema DescribeFlowResponse#description
   */
  readonly description?: string;

  /**
   * @schema DescribeFlowResponse#flowName
   */
  readonly flowName?: string;

  /**
   * @schema DescribeFlowResponse#kmsArn
   */
  readonly kmsArn?: string;

  /**
   * @schema DescribeFlowResponse#flowStatus
   */
  readonly flowStatus?: string;

  /**
   * @schema DescribeFlowResponse#flowStatusMessage
   */
  readonly flowStatusMessage?: string;

  /**
   * @schema DescribeFlowResponse#sourceFlowConfig
   */
  readonly sourceFlowConfig?: SourceFlowConfig;

  /**
   * @schema DescribeFlowResponse#destinationFlowConfigList
   */
  readonly destinationFlowConfigList?: DestinationFlowConfig[];

  /**
   * @schema DescribeFlowResponse#lastRunExecutionDetails
   */
  readonly lastRunExecutionDetails?: ExecutionDetails;

  /**
   * @schema DescribeFlowResponse#triggerConfig
   */
  readonly triggerConfig?: TriggerConfig;

  /**
   * @schema DescribeFlowResponse#tasks
   */
  readonly tasks?: Task[];

  /**
   * @schema DescribeFlowResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema DescribeFlowResponse#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema DescribeFlowResponse#createdBy
   */
  readonly createdBy?: string;

  /**
   * @schema DescribeFlowResponse#lastUpdatedBy
   */
  readonly lastUpdatedBy?: string;

  /**
   * @schema DescribeFlowResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DescribeFlowExecutionRecordsRequest
 */
export interface DescribeFlowExecutionRecordsRequest {
  /**
   * @schema DescribeFlowExecutionRecordsRequest#flowName
   */
  readonly flowName: string;

  /**
   * @schema DescribeFlowExecutionRecordsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeFlowExecutionRecordsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeFlowExecutionRecordsResponse
 */
export interface DescribeFlowExecutionRecordsResponse {
  /**
   * @schema DescribeFlowExecutionRecordsResponse#flowExecutions
   */
  readonly flowExecutions?: ExecutionRecord[];

  /**
   * @schema DescribeFlowExecutionRecordsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListConnectorEntitiesRequest
 */
export interface ListConnectorEntitiesRequest {
  /**
   * @schema ListConnectorEntitiesRequest#connectorProfileName
   */
  readonly connectorProfileName?: string;

  /**
   * @schema ListConnectorEntitiesRequest#connectorType
   */
  readonly connectorType?: string;

  /**
   * @schema ListConnectorEntitiesRequest#entitiesPath
   */
  readonly entitiesPath?: string;

}

/**
 * @schema ListConnectorEntitiesResponse
 */
export interface ListConnectorEntitiesResponse {
  /**
   * @schema ListConnectorEntitiesResponse#connectorEntityMap
   */
  readonly connectorEntityMap: { [key: string]: ConnectorEntity[] };

}

/**
 * @schema ListFlowsRequest
 */
export interface ListFlowsRequest {
  /**
   * @schema ListFlowsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListFlowsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListFlowsResponse
 */
export interface ListFlowsResponse {
  /**
   * @schema ListFlowsResponse#flows
   */
  readonly flows?: FlowDefinition[];

  /**
   * @schema ListFlowsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema StartFlowRequest
 */
export interface StartFlowRequest {
  /**
   * @schema StartFlowRequest#flowName
   */
  readonly flowName: string;

}

/**
 * @schema StartFlowResponse
 */
export interface StartFlowResponse {
  /**
   * @schema StartFlowResponse#flowArn
   */
  readonly flowArn?: string;

  /**
   * @schema StartFlowResponse#flowStatus
   */
  readonly flowStatus?: string;

  /**
   * @schema StartFlowResponse#executionId
   */
  readonly executionId?: string;

}

/**
 * @schema StopFlowRequest
 */
export interface StopFlowRequest {
  /**
   * @schema StopFlowRequest#flowName
   */
  readonly flowName: string;

}

/**
 * @schema StopFlowResponse
 */
export interface StopFlowResponse {
  /**
   * @schema StopFlowResponse#flowArn
   */
  readonly flowArn?: string;

  /**
   * @schema StopFlowResponse#flowStatus
   */
  readonly flowStatus?: string;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

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
   * @schema UntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateConnectorProfileRequest
 */
export interface UpdateConnectorProfileRequest {
  /**
   * @schema UpdateConnectorProfileRequest#connectorProfileName
   */
  readonly connectorProfileName: string;

  /**
   * @schema UpdateConnectorProfileRequest#connectionMode
   */
  readonly connectionMode: string;

  /**
   * @schema UpdateConnectorProfileRequest#connectorProfileConfig
   */
  readonly connectorProfileConfig: ConnectorProfileConfig;

}

/**
 * @schema UpdateConnectorProfileResponse
 */
export interface UpdateConnectorProfileResponse {
  /**
   * @schema UpdateConnectorProfileResponse#connectorProfileArn
   */
  readonly connectorProfileArn?: string;

}

/**
 * @schema UpdateFlowRequest
 */
export interface UpdateFlowRequest {
  /**
   * @schema UpdateFlowRequest#flowName
   */
  readonly flowName: string;

  /**
   * @schema UpdateFlowRequest#description
   */
  readonly description?: string;

  /**
   * @schema UpdateFlowRequest#triggerConfig
   */
  readonly triggerConfig: TriggerConfig;

  /**
   * @schema UpdateFlowRequest#sourceFlowConfig
   */
  readonly sourceFlowConfig?: SourceFlowConfig;

  /**
   * @schema UpdateFlowRequest#destinationFlowConfigList
   */
  readonly destinationFlowConfigList: DestinationFlowConfig[];

  /**
   * @schema UpdateFlowRequest#tasks
   */
  readonly tasks: Task[];

}

/**
 * @schema UpdateFlowResponse
 */
export interface UpdateFlowResponse {
  /**
   * @schema UpdateFlowResponse#flowStatus
   */
  readonly flowStatus?: string;

}

/**
 * @schema ConnectorProfileConfig
 */
export interface ConnectorProfileConfig {
  /**
   * @schema ConnectorProfileConfig#connectorProfileProperties
   */
  readonly connectorProfileProperties: ConnectorProfileProperties;

  /**
   * @schema ConnectorProfileConfig#connectorProfileCredentials
   */
  readonly connectorProfileCredentials: ConnectorProfileCredentials;

}

/**
 * @schema TriggerConfig
 */
export interface TriggerConfig {
  /**
   * @schema TriggerConfig#triggerType
   */
  readonly triggerType: string;

  /**
   * @schema TriggerConfig#triggerProperties
   */
  readonly triggerProperties?: TriggerProperties;

}

/**
 * @schema SourceFlowConfig
 */
export interface SourceFlowConfig {
  /**
   * @schema SourceFlowConfig#connectorType
   */
  readonly connectorType: string;

  /**
   * @schema SourceFlowConfig#connectorProfileName
   */
  readonly connectorProfileName?: string;

  /**
   * @schema SourceFlowConfig#sourceConnectorProperties
   */
  readonly sourceConnectorProperties: SourceConnectorProperties;

  /**
   * @schema SourceFlowConfig#incrementalPullConfig
   */
  readonly incrementalPullConfig?: IncrementalPullConfig;

}

/**
 * @schema DestinationFlowConfig
 */
export interface DestinationFlowConfig {
  /**
   * @schema DestinationFlowConfig#connectorType
   */
  readonly connectorType: string;

  /**
   * @schema DestinationFlowConfig#connectorProfileName
   */
  readonly connectorProfileName?: string;

  /**
   * @schema DestinationFlowConfig#destinationConnectorProperties
   */
  readonly destinationConnectorProperties: DestinationConnectorProperties;

}

/**
 * @schema Task
 */
export interface Task {
  /**
   * @schema Task#sourceFields
   */
  readonly sourceFields: string[];

  /**
   * @schema Task#connectorOperator
   */
  readonly connectorOperator?: ConnectorOperator;

  /**
   * @schema Task#destinationField
   */
  readonly destinationField?: string;

  /**
   * @schema Task#taskType
   */
  readonly taskType: string;

  /**
   * @schema Task#taskProperties
   */
  readonly taskProperties?: { [key: string]: string };

}

/**
 * @schema ConnectorEntityField
 */
export interface ConnectorEntityField {
  /**
   * @schema ConnectorEntityField#identifier
   */
  readonly identifier: string;

  /**
   * @schema ConnectorEntityField#label
   */
  readonly label?: string;

  /**
   * @schema ConnectorEntityField#supportedFieldTypeDetails
   */
  readonly supportedFieldTypeDetails?: SupportedFieldTypeDetails;

  /**
   * @schema ConnectorEntityField#description
   */
  readonly description?: string;

  /**
   * @schema ConnectorEntityField#sourceProperties
   */
  readonly sourceProperties?: SourceFieldProperties;

  /**
   * @schema ConnectorEntityField#destinationProperties
   */
  readonly destinationProperties?: DestinationFieldProperties;

}

/**
 * @schema ConnectorProfile
 */
export interface ConnectorProfile {
  /**
   * @schema ConnectorProfile#connectorProfileArn
   */
  readonly connectorProfileArn?: string;

  /**
   * @schema ConnectorProfile#connectorProfileName
   */
  readonly connectorProfileName?: string;

  /**
   * @schema ConnectorProfile#connectorType
   */
  readonly connectorType?: string;

  /**
   * @schema ConnectorProfile#connectionMode
   */
  readonly connectionMode?: string;

  /**
   * @schema ConnectorProfile#credentialsArn
   */
  readonly credentialsArn?: string;

  /**
   * @schema ConnectorProfile#connectorProfileProperties
   */
  readonly connectorProfileProperties?: ConnectorProfileProperties;

  /**
   * @schema ConnectorProfile#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema ConnectorProfile#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

}

/**
 * @schema ConnectorConfiguration
 */
export interface ConnectorConfiguration {
  /**
   * @schema ConnectorConfiguration#canUseAsSource
   */
  readonly canUseAsSource?: boolean;

  /**
   * @schema ConnectorConfiguration#canUseAsDestination
   */
  readonly canUseAsDestination?: boolean;

  /**
   * @schema ConnectorConfiguration#supportedDestinationConnectors
   */
  readonly supportedDestinationConnectors?: string[];

  /**
   * @schema ConnectorConfiguration#supportedSchedulingFrequencies
   */
  readonly supportedSchedulingFrequencies?: string[];

  /**
   * @schema ConnectorConfiguration#isPrivateLinkEnabled
   */
  readonly isPrivateLinkEnabled?: boolean;

  /**
   * @schema ConnectorConfiguration#isPrivateLinkEndpointUrlRequired
   */
  readonly isPrivateLinkEndpointUrlRequired?: boolean;

  /**
   * @schema ConnectorConfiguration#supportedTriggerTypes
   */
  readonly supportedTriggerTypes?: string[];

  /**
   * @schema ConnectorConfiguration#connectorMetadata
   */
  readonly connectorMetadata?: ConnectorMetadata;

}

/**
 * @schema ExecutionDetails
 */
export interface ExecutionDetails {
  /**
   * @schema ExecutionDetails#mostRecentExecutionMessage
   */
  readonly mostRecentExecutionMessage?: string;

  /**
   * @schema ExecutionDetails#mostRecentExecutionTime
   */
  readonly mostRecentExecutionTime?: string;

  /**
   * @schema ExecutionDetails#mostRecentExecutionStatus
   */
  readonly mostRecentExecutionStatus?: string;

}

/**
 * @schema ExecutionRecord
 */
export interface ExecutionRecord {
  /**
   * @schema ExecutionRecord#executionId
   */
  readonly executionId?: string;

  /**
   * @schema ExecutionRecord#executionStatus
   */
  readonly executionStatus?: string;

  /**
   * @schema ExecutionRecord#executionResult
   */
  readonly executionResult?: ExecutionResult;

  /**
   * @schema ExecutionRecord#startedAt
   */
  readonly startedAt?: string;

  /**
   * @schema ExecutionRecord#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

}

/**
 * @schema ConnectorEntity
 */
export interface ConnectorEntity {
  /**
   * @schema ConnectorEntity#name
   */
  readonly name: string;

  /**
   * @schema ConnectorEntity#label
   */
  readonly label?: string;

  /**
   * @schema ConnectorEntity#hasNestedEntities
   */
  readonly hasNestedEntities?: boolean;

}

/**
 * @schema FlowDefinition
 */
export interface FlowDefinition {
  /**
   * @schema FlowDefinition#flowArn
   */
  readonly flowArn?: string;

  /**
   * @schema FlowDefinition#description
   */
  readonly description?: string;

  /**
   * @schema FlowDefinition#flowName
   */
  readonly flowName?: string;

  /**
   * @schema FlowDefinition#flowStatus
   */
  readonly flowStatus?: string;

  /**
   * @schema FlowDefinition#sourceConnectorType
   */
  readonly sourceConnectorType?: string;

  /**
   * @schema FlowDefinition#destinationConnectorType
   */
  readonly destinationConnectorType?: string;

  /**
   * @schema FlowDefinition#triggerType
   */
  readonly triggerType?: string;

  /**
   * @schema FlowDefinition#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema FlowDefinition#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema FlowDefinition#createdBy
   */
  readonly createdBy?: string;

  /**
   * @schema FlowDefinition#lastUpdatedBy
   */
  readonly lastUpdatedBy?: string;

  /**
   * @schema FlowDefinition#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema FlowDefinition#lastRunExecutionDetails
   */
  readonly lastRunExecutionDetails?: ExecutionDetails;

}

/**
 * @schema ConnectorProfileProperties
 */
export interface ConnectorProfileProperties {
  /**
   * @schema ConnectorProfileProperties#Amplitude
   */
  readonly amplitude?: AmplitudeConnectorProfileProperties;

  /**
   * @schema ConnectorProfileProperties#Datadog
   */
  readonly datadog?: DatadogConnectorProfileProperties;

  /**
   * @schema ConnectorProfileProperties#Dynatrace
   */
  readonly dynatrace?: DynatraceConnectorProfileProperties;

  /**
   * @schema ConnectorProfileProperties#GoogleAnalytics
   */
  readonly googleAnalytics?: GoogleAnalyticsConnectorProfileProperties;

  /**
   * @schema ConnectorProfileProperties#InforNexus
   */
  readonly inforNexus?: InforNexusConnectorProfileProperties;

  /**
   * @schema ConnectorProfileProperties#Marketo
   */
  readonly marketo?: MarketoConnectorProfileProperties;

  /**
   * @schema ConnectorProfileProperties#Redshift
   */
  readonly redshift?: RedshiftConnectorProfileProperties;

  /**
   * @schema ConnectorProfileProperties#Salesforce
   */
  readonly salesforce?: SalesforceConnectorProfileProperties;

  /**
   * @schema ConnectorProfileProperties#ServiceNow
   */
  readonly serviceNow?: ServiceNowConnectorProfileProperties;

  /**
   * @schema ConnectorProfileProperties#Singular
   */
  readonly singular?: SingularConnectorProfileProperties;

  /**
   * @schema ConnectorProfileProperties#Slack
   */
  readonly slack?: SlackConnectorProfileProperties;

  /**
   * @schema ConnectorProfileProperties#Snowflake
   */
  readonly snowflake?: SnowflakeConnectorProfileProperties;

  /**
   * @schema ConnectorProfileProperties#Trendmicro
   */
  readonly trendmicro?: TrendmicroConnectorProfileProperties;

  /**
   * @schema ConnectorProfileProperties#Veeva
   */
  readonly veeva?: VeevaConnectorProfileProperties;

  /**
   * @schema ConnectorProfileProperties#Zendesk
   */
  readonly zendesk?: ZendeskConnectorProfileProperties;

}

/**
 * @schema ConnectorProfileCredentials
 */
export interface ConnectorProfileCredentials {
  /**
   * @schema ConnectorProfileCredentials#Amplitude
   */
  readonly amplitude?: AmplitudeConnectorProfileCredentials;

  /**
   * @schema ConnectorProfileCredentials#Datadog
   */
  readonly datadog?: DatadogConnectorProfileCredentials;

  /**
   * @schema ConnectorProfileCredentials#Dynatrace
   */
  readonly dynatrace?: DynatraceConnectorProfileCredentials;

  /**
   * @schema ConnectorProfileCredentials#GoogleAnalytics
   */
  readonly googleAnalytics?: GoogleAnalyticsConnectorProfileCredentials;

  /**
   * @schema ConnectorProfileCredentials#InforNexus
   */
  readonly inforNexus?: InforNexusConnectorProfileCredentials;

  /**
   * @schema ConnectorProfileCredentials#Marketo
   */
  readonly marketo?: MarketoConnectorProfileCredentials;

  /**
   * @schema ConnectorProfileCredentials#Redshift
   */
  readonly redshift?: RedshiftConnectorProfileCredentials;

  /**
   * @schema ConnectorProfileCredentials#Salesforce
   */
  readonly salesforce?: SalesforceConnectorProfileCredentials;

  /**
   * @schema ConnectorProfileCredentials#ServiceNow
   */
  readonly serviceNow?: ServiceNowConnectorProfileCredentials;

  /**
   * @schema ConnectorProfileCredentials#Singular
   */
  readonly singular?: SingularConnectorProfileCredentials;

  /**
   * @schema ConnectorProfileCredentials#Slack
   */
  readonly slack?: SlackConnectorProfileCredentials;

  /**
   * @schema ConnectorProfileCredentials#Snowflake
   */
  readonly snowflake?: SnowflakeConnectorProfileCredentials;

  /**
   * @schema ConnectorProfileCredentials#Trendmicro
   */
  readonly trendmicro?: TrendmicroConnectorProfileCredentials;

  /**
   * @schema ConnectorProfileCredentials#Veeva
   */
  readonly veeva?: VeevaConnectorProfileCredentials;

  /**
   * @schema ConnectorProfileCredentials#Zendesk
   */
  readonly zendesk?: ZendeskConnectorProfileCredentials;

}

/**
 * @schema TriggerProperties
 */
export interface TriggerProperties {
  /**
   * @schema TriggerProperties#Scheduled
   */
  readonly scheduled?: ScheduledTriggerProperties;

}

/**
 * @schema SourceConnectorProperties
 */
export interface SourceConnectorProperties {
  /**
   * @schema SourceConnectorProperties#Amplitude
   */
  readonly amplitude?: AmplitudeSourceProperties;

  /**
   * @schema SourceConnectorProperties#Datadog
   */
  readonly datadog?: DatadogSourceProperties;

  /**
   * @schema SourceConnectorProperties#Dynatrace
   */
  readonly dynatrace?: DynatraceSourceProperties;

  /**
   * @schema SourceConnectorProperties#GoogleAnalytics
   */
  readonly googleAnalytics?: GoogleAnalyticsSourceProperties;

  /**
   * @schema SourceConnectorProperties#InforNexus
   */
  readonly inforNexus?: InforNexusSourceProperties;

  /**
   * @schema SourceConnectorProperties#Marketo
   */
  readonly marketo?: MarketoSourceProperties;

  /**
   * @schema SourceConnectorProperties#S3
   */
  readonly s3?: S3SourceProperties;

  /**
   * @schema SourceConnectorProperties#Salesforce
   */
  readonly salesforce?: SalesforceSourceProperties;

  /**
   * @schema SourceConnectorProperties#ServiceNow
   */
  readonly serviceNow?: ServiceNowSourceProperties;

  /**
   * @schema SourceConnectorProperties#Singular
   */
  readonly singular?: SingularSourceProperties;

  /**
   * @schema SourceConnectorProperties#Slack
   */
  readonly slack?: SlackSourceProperties;

  /**
   * @schema SourceConnectorProperties#Trendmicro
   */
  readonly trendmicro?: TrendmicroSourceProperties;

  /**
   * @schema SourceConnectorProperties#Veeva
   */
  readonly veeva?: VeevaSourceProperties;

  /**
   * @schema SourceConnectorProperties#Zendesk
   */
  readonly zendesk?: ZendeskSourceProperties;

}

/**
 * @schema IncrementalPullConfig
 */
export interface IncrementalPullConfig {
  /**
   * @schema IncrementalPullConfig#datetimeTypeFieldName
   */
  readonly datetimeTypeFieldName?: string;

}

/**
 * @schema DestinationConnectorProperties
 */
export interface DestinationConnectorProperties {
  /**
   * @schema DestinationConnectorProperties#Redshift
   */
  readonly redshift?: RedshiftDestinationProperties;

  /**
   * @schema DestinationConnectorProperties#S3
   */
  readonly s3?: S3DestinationProperties;

  /**
   * @schema DestinationConnectorProperties#Salesforce
   */
  readonly salesforce?: SalesforceDestinationProperties;

  /**
   * @schema DestinationConnectorProperties#Snowflake
   */
  readonly snowflake?: SnowflakeDestinationProperties;

  /**
   * @schema DestinationConnectorProperties#EventBridge
   */
  readonly eventBridge?: EventBridgeDestinationProperties;

  /**
   * @schema DestinationConnectorProperties#Upsolver
   */
  readonly upsolver?: UpsolverDestinationProperties;

}

/**
 * @schema ConnectorOperator
 */
export interface ConnectorOperator {
  /**
   * @schema ConnectorOperator#Amplitude
   */
  readonly amplitude?: string;

  /**
   * @schema ConnectorOperator#Datadog
   */
  readonly datadog?: string;

  /**
   * @schema ConnectorOperator#Dynatrace
   */
  readonly dynatrace?: string;

  /**
   * @schema ConnectorOperator#GoogleAnalytics
   */
  readonly googleAnalytics?: string;

  /**
   * @schema ConnectorOperator#InforNexus
   */
  readonly inforNexus?: string;

  /**
   * @schema ConnectorOperator#Marketo
   */
  readonly marketo?: string;

  /**
   * @schema ConnectorOperator#S3
   */
  readonly s3?: string;

  /**
   * @schema ConnectorOperator#Salesforce
   */
  readonly salesforce?: string;

  /**
   * @schema ConnectorOperator#ServiceNow
   */
  readonly serviceNow?: string;

  /**
   * @schema ConnectorOperator#Singular
   */
  readonly singular?: string;

  /**
   * @schema ConnectorOperator#Slack
   */
  readonly slack?: string;

  /**
   * @schema ConnectorOperator#Trendmicro
   */
  readonly trendmicro?: string;

  /**
   * @schema ConnectorOperator#Veeva
   */
  readonly veeva?: string;

  /**
   * @schema ConnectorOperator#Zendesk
   */
  readonly zendesk?: string;

}

/**
 * @schema SupportedFieldTypeDetails
 */
export interface SupportedFieldTypeDetails {
  /**
   * @schema SupportedFieldTypeDetails#v1
   */
  readonly v1: FieldTypeDetails;

}

/**
 * @schema SourceFieldProperties
 */
export interface SourceFieldProperties {
  /**
   * @schema SourceFieldProperties#isRetrievable
   */
  readonly isRetrievable?: boolean;

  /**
   * @schema SourceFieldProperties#isQueryable
   */
  readonly isQueryable?: boolean;

}

/**
 * @schema DestinationFieldProperties
 */
export interface DestinationFieldProperties {
  /**
   * @schema DestinationFieldProperties#isCreatable
   */
  readonly isCreatable?: boolean;

  /**
   * @schema DestinationFieldProperties#isNullable
   */
  readonly isNullable?: boolean;

  /**
   * @schema DestinationFieldProperties#isUpsertable
   */
  readonly isUpsertable?: boolean;

  /**
   * @schema DestinationFieldProperties#isUpdatable
   */
  readonly isUpdatable?: boolean;

  /**
   * @schema DestinationFieldProperties#supportedWriteOperations
   */
  readonly supportedWriteOperations?: string[];

}

/**
 * @schema ConnectorMetadata
 */
export interface ConnectorMetadata {
  /**
   * @schema ConnectorMetadata#Amplitude
   */
  readonly amplitude?: AmplitudeMetadata;

  /**
   * @schema ConnectorMetadata#Datadog
   */
  readonly datadog?: DatadogMetadata;

  /**
   * @schema ConnectorMetadata#Dynatrace
   */
  readonly dynatrace?: DynatraceMetadata;

  /**
   * @schema ConnectorMetadata#GoogleAnalytics
   */
  readonly googleAnalytics?: GoogleAnalyticsMetadata;

  /**
   * @schema ConnectorMetadata#InforNexus
   */
  readonly inforNexus?: InforNexusMetadata;

  /**
   * @schema ConnectorMetadata#Marketo
   */
  readonly marketo?: MarketoMetadata;

  /**
   * @schema ConnectorMetadata#Redshift
   */
  readonly redshift?: RedshiftMetadata;

  /**
   * @schema ConnectorMetadata#S3
   */
  readonly s3?: S3Metadata;

  /**
   * @schema ConnectorMetadata#Salesforce
   */
  readonly salesforce?: SalesforceMetadata;

  /**
   * @schema ConnectorMetadata#ServiceNow
   */
  readonly serviceNow?: ServiceNowMetadata;

  /**
   * @schema ConnectorMetadata#Singular
   */
  readonly singular?: SingularMetadata;

  /**
   * @schema ConnectorMetadata#Slack
   */
  readonly slack?: SlackMetadata;

  /**
   * @schema ConnectorMetadata#Snowflake
   */
  readonly snowflake?: SnowflakeMetadata;

  /**
   * @schema ConnectorMetadata#Trendmicro
   */
  readonly trendmicro?: TrendmicroMetadata;

  /**
   * @schema ConnectorMetadata#Veeva
   */
  readonly veeva?: VeevaMetadata;

  /**
   * @schema ConnectorMetadata#Zendesk
   */
  readonly zendesk?: ZendeskMetadata;

  /**
   * @schema ConnectorMetadata#EventBridge
   */
  readonly eventBridge?: EventBridgeMetadata;

  /**
   * @schema ConnectorMetadata#Upsolver
   */
  readonly upsolver?: UpsolverMetadata;

}

/**
 * @schema ExecutionResult
 */
export interface ExecutionResult {
  /**
   * @schema ExecutionResult#errorInfo
   */
  readonly errorInfo?: ErrorInfo;

  /**
   * @schema ExecutionResult#bytesProcessed
   */
  readonly bytesProcessed?: number;

  /**
   * @schema ExecutionResult#bytesWritten
   */
  readonly bytesWritten?: number;

  /**
   * @schema ExecutionResult#recordsProcessed
   */
  readonly recordsProcessed?: number;

}

/**
 * @schema AmplitudeConnectorProfileProperties
 */
export interface AmplitudeConnectorProfileProperties {
}

/**
 * @schema DatadogConnectorProfileProperties
 */
export interface DatadogConnectorProfileProperties {
  /**
   * @schema DatadogConnectorProfileProperties#instanceUrl
   */
  readonly instanceUrl: string;

}

/**
 * @schema DynatraceConnectorProfileProperties
 */
export interface DynatraceConnectorProfileProperties {
  /**
   * @schema DynatraceConnectorProfileProperties#instanceUrl
   */
  readonly instanceUrl: string;

}

/**
 * @schema GoogleAnalyticsConnectorProfileProperties
 */
export interface GoogleAnalyticsConnectorProfileProperties {
}

/**
 * @schema InforNexusConnectorProfileProperties
 */
export interface InforNexusConnectorProfileProperties {
  /**
   * @schema InforNexusConnectorProfileProperties#instanceUrl
   */
  readonly instanceUrl: string;

}

/**
 * @schema MarketoConnectorProfileProperties
 */
export interface MarketoConnectorProfileProperties {
  /**
   * @schema MarketoConnectorProfileProperties#instanceUrl
   */
  readonly instanceUrl: string;

}

/**
 * @schema RedshiftConnectorProfileProperties
 */
export interface RedshiftConnectorProfileProperties {
  /**
   * @schema RedshiftConnectorProfileProperties#databaseUrl
   */
  readonly databaseUrl: string;

  /**
   * @schema RedshiftConnectorProfileProperties#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema RedshiftConnectorProfileProperties#bucketPrefix
   */
  readonly bucketPrefix?: string;

  /**
   * @schema RedshiftConnectorProfileProperties#roleArn
   */
  readonly roleArn: string;

}

/**
 * @schema SalesforceConnectorProfileProperties
 */
export interface SalesforceConnectorProfileProperties {
  /**
   * @schema SalesforceConnectorProfileProperties#instanceUrl
   */
  readonly instanceUrl?: string;

  /**
   * @schema SalesforceConnectorProfileProperties#isSandboxEnvironment
   */
  readonly isSandboxEnvironment?: boolean;

}

/**
 * @schema ServiceNowConnectorProfileProperties
 */
export interface ServiceNowConnectorProfileProperties {
  /**
   * @schema ServiceNowConnectorProfileProperties#instanceUrl
   */
  readonly instanceUrl: string;

}

/**
 * @schema SingularConnectorProfileProperties
 */
export interface SingularConnectorProfileProperties {
}

/**
 * @schema SlackConnectorProfileProperties
 */
export interface SlackConnectorProfileProperties {
  /**
   * @schema SlackConnectorProfileProperties#instanceUrl
   */
  readonly instanceUrl: string;

}

/**
 * @schema SnowflakeConnectorProfileProperties
 */
export interface SnowflakeConnectorProfileProperties {
  /**
   * @schema SnowflakeConnectorProfileProperties#warehouse
   */
  readonly warehouse: string;

  /**
   * @schema SnowflakeConnectorProfileProperties#stage
   */
  readonly stage: string;

  /**
   * @schema SnowflakeConnectorProfileProperties#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema SnowflakeConnectorProfileProperties#bucketPrefix
   */
  readonly bucketPrefix?: string;

  /**
   * @schema SnowflakeConnectorProfileProperties#privateLinkServiceName
   */
  readonly privateLinkServiceName?: string;

  /**
   * @schema SnowflakeConnectorProfileProperties#accountName
   */
  readonly accountName?: string;

  /**
   * @schema SnowflakeConnectorProfileProperties#region
   */
  readonly region?: string;

}

/**
 * @schema TrendmicroConnectorProfileProperties
 */
export interface TrendmicroConnectorProfileProperties {
}

/**
 * @schema VeevaConnectorProfileProperties
 */
export interface VeevaConnectorProfileProperties {
  /**
   * @schema VeevaConnectorProfileProperties#instanceUrl
   */
  readonly instanceUrl: string;

}

/**
 * @schema ZendeskConnectorProfileProperties
 */
export interface ZendeskConnectorProfileProperties {
  /**
   * @schema ZendeskConnectorProfileProperties#instanceUrl
   */
  readonly instanceUrl: string;

}

/**
 * @schema AmplitudeConnectorProfileCredentials
 */
export interface AmplitudeConnectorProfileCredentials {
  /**
   * @schema AmplitudeConnectorProfileCredentials#apiKey
   */
  readonly apiKey: string;

  /**
   * @schema AmplitudeConnectorProfileCredentials#secretKey
   */
  readonly secretKey: string;

}

/**
 * @schema DatadogConnectorProfileCredentials
 */
export interface DatadogConnectorProfileCredentials {
  /**
   * @schema DatadogConnectorProfileCredentials#apiKey
   */
  readonly apiKey: string;

  /**
   * @schema DatadogConnectorProfileCredentials#applicationKey
   */
  readonly applicationKey: string;

}

/**
 * @schema DynatraceConnectorProfileCredentials
 */
export interface DynatraceConnectorProfileCredentials {
  /**
   * @schema DynatraceConnectorProfileCredentials#apiToken
   */
  readonly apiToken: string;

}

/**
 * @schema GoogleAnalyticsConnectorProfileCredentials
 */
export interface GoogleAnalyticsConnectorProfileCredentials {
  /**
   * @schema GoogleAnalyticsConnectorProfileCredentials#clientId
   */
  readonly clientId: string;

  /**
   * @schema GoogleAnalyticsConnectorProfileCredentials#clientSecret
   */
  readonly clientSecret: string;

  /**
   * @schema GoogleAnalyticsConnectorProfileCredentials#accessToken
   */
  readonly accessToken?: string;

  /**
   * @schema GoogleAnalyticsConnectorProfileCredentials#refreshToken
   */
  readonly refreshToken?: string;

  /**
   * @schema GoogleAnalyticsConnectorProfileCredentials#oAuthRequest
   */
  readonly oAuthRequest?: ConnectorOAuthRequest;

}

/**
 * @schema InforNexusConnectorProfileCredentials
 */
export interface InforNexusConnectorProfileCredentials {
  /**
   * @schema InforNexusConnectorProfileCredentials#accessKeyId
   */
  readonly accessKeyId: string;

  /**
   * @schema InforNexusConnectorProfileCredentials#userId
   */
  readonly userId: string;

  /**
   * @schema InforNexusConnectorProfileCredentials#secretAccessKey
   */
  readonly secretAccessKey: string;

  /**
   * @schema InforNexusConnectorProfileCredentials#datakey
   */
  readonly datakey: string;

}

/**
 * @schema MarketoConnectorProfileCredentials
 */
export interface MarketoConnectorProfileCredentials {
  /**
   * @schema MarketoConnectorProfileCredentials#clientId
   */
  readonly clientId: string;

  /**
   * @schema MarketoConnectorProfileCredentials#clientSecret
   */
  readonly clientSecret: string;

  /**
   * @schema MarketoConnectorProfileCredentials#accessToken
   */
  readonly accessToken?: string;

  /**
   * @schema MarketoConnectorProfileCredentials#oAuthRequest
   */
  readonly oAuthRequest?: ConnectorOAuthRequest;

}

/**
 * @schema RedshiftConnectorProfileCredentials
 */
export interface RedshiftConnectorProfileCredentials {
  /**
   * @schema RedshiftConnectorProfileCredentials#username
   */
  readonly username: string;

  /**
   * @schema RedshiftConnectorProfileCredentials#password
   */
  readonly password: string;

}

/**
 * @schema SalesforceConnectorProfileCredentials
 */
export interface SalesforceConnectorProfileCredentials {
  /**
   * @schema SalesforceConnectorProfileCredentials#accessToken
   */
  readonly accessToken?: string;

  /**
   * @schema SalesforceConnectorProfileCredentials#refreshToken
   */
  readonly refreshToken?: string;

  /**
   * @schema SalesforceConnectorProfileCredentials#oAuthRequest
   */
  readonly oAuthRequest?: ConnectorOAuthRequest;

  /**
   * @schema SalesforceConnectorProfileCredentials#clientCredentialsArn
   */
  readonly clientCredentialsArn?: string;

}

/**
 * @schema ServiceNowConnectorProfileCredentials
 */
export interface ServiceNowConnectorProfileCredentials {
  /**
   * @schema ServiceNowConnectorProfileCredentials#username
   */
  readonly username: string;

  /**
   * @schema ServiceNowConnectorProfileCredentials#password
   */
  readonly password: string;

}

/**
 * @schema SingularConnectorProfileCredentials
 */
export interface SingularConnectorProfileCredentials {
  /**
   * @schema SingularConnectorProfileCredentials#apiKey
   */
  readonly apiKey: string;

}

/**
 * @schema SlackConnectorProfileCredentials
 */
export interface SlackConnectorProfileCredentials {
  /**
   * @schema SlackConnectorProfileCredentials#clientId
   */
  readonly clientId: string;

  /**
   * @schema SlackConnectorProfileCredentials#clientSecret
   */
  readonly clientSecret: string;

  /**
   * @schema SlackConnectorProfileCredentials#accessToken
   */
  readonly accessToken?: string;

  /**
   * @schema SlackConnectorProfileCredentials#oAuthRequest
   */
  readonly oAuthRequest?: ConnectorOAuthRequest;

}

/**
 * @schema SnowflakeConnectorProfileCredentials
 */
export interface SnowflakeConnectorProfileCredentials {
  /**
   * @schema SnowflakeConnectorProfileCredentials#username
   */
  readonly username: string;

  /**
   * @schema SnowflakeConnectorProfileCredentials#password
   */
  readonly password: string;

}

/**
 * @schema TrendmicroConnectorProfileCredentials
 */
export interface TrendmicroConnectorProfileCredentials {
  /**
   * @schema TrendmicroConnectorProfileCredentials#apiSecretKey
   */
  readonly apiSecretKey: string;

}

/**
 * @schema VeevaConnectorProfileCredentials
 */
export interface VeevaConnectorProfileCredentials {
  /**
   * @schema VeevaConnectorProfileCredentials#username
   */
  readonly username: string;

  /**
   * @schema VeevaConnectorProfileCredentials#password
   */
  readonly password: string;

}

/**
 * @schema ZendeskConnectorProfileCredentials
 */
export interface ZendeskConnectorProfileCredentials {
  /**
   * @schema ZendeskConnectorProfileCredentials#clientId
   */
  readonly clientId: string;

  /**
   * @schema ZendeskConnectorProfileCredentials#clientSecret
   */
  readonly clientSecret: string;

  /**
   * @schema ZendeskConnectorProfileCredentials#accessToken
   */
  readonly accessToken?: string;

  /**
   * @schema ZendeskConnectorProfileCredentials#oAuthRequest
   */
  readonly oAuthRequest?: ConnectorOAuthRequest;

}

/**
 * @schema ScheduledTriggerProperties
 */
export interface ScheduledTriggerProperties {
  /**
   * @schema ScheduledTriggerProperties#scheduleExpression
   */
  readonly scheduleExpression: string;

  /**
   * @schema ScheduledTriggerProperties#dataPullMode
   */
  readonly dataPullMode?: string;

  /**
   * @schema ScheduledTriggerProperties#scheduleStartTime
   */
  readonly scheduleStartTime?: string;

  /**
   * @schema ScheduledTriggerProperties#scheduleEndTime
   */
  readonly scheduleEndTime?: string;

  /**
   * @schema ScheduledTriggerProperties#timezone
   */
  readonly timezone?: string;

}

/**
 * @schema AmplitudeSourceProperties
 */
export interface AmplitudeSourceProperties {
  /**
   * @schema AmplitudeSourceProperties#object
   */
  readonly object: string;

}

/**
 * @schema DatadogSourceProperties
 */
export interface DatadogSourceProperties {
  /**
   * @schema DatadogSourceProperties#object
   */
  readonly object: string;

}

/**
 * @schema DynatraceSourceProperties
 */
export interface DynatraceSourceProperties {
  /**
   * @schema DynatraceSourceProperties#object
   */
  readonly object: string;

}

/**
 * @schema GoogleAnalyticsSourceProperties
 */
export interface GoogleAnalyticsSourceProperties {
  /**
   * @schema GoogleAnalyticsSourceProperties#object
   */
  readonly object: string;

}

/**
 * @schema InforNexusSourceProperties
 */
export interface InforNexusSourceProperties {
  /**
   * @schema InforNexusSourceProperties#object
   */
  readonly object: string;

}

/**
 * @schema MarketoSourceProperties
 */
export interface MarketoSourceProperties {
  /**
   * @schema MarketoSourceProperties#object
   */
  readonly object: string;

}

/**
 * @schema S3SourceProperties
 */
export interface S3SourceProperties {
  /**
   * @schema S3SourceProperties#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema S3SourceProperties#bucketPrefix
   */
  readonly bucketPrefix?: string;

}

/**
 * @schema SalesforceSourceProperties
 */
export interface SalesforceSourceProperties {
  /**
   * @schema SalesforceSourceProperties#object
   */
  readonly object: string;

  /**
   * @schema SalesforceSourceProperties#enableDynamicFieldUpdate
   */
  readonly enableDynamicFieldUpdate?: boolean;

  /**
   * @schema SalesforceSourceProperties#includeDeletedRecords
   */
  readonly includeDeletedRecords?: boolean;

}

/**
 * @schema ServiceNowSourceProperties
 */
export interface ServiceNowSourceProperties {
  /**
   * @schema ServiceNowSourceProperties#object
   */
  readonly object: string;

}

/**
 * @schema SingularSourceProperties
 */
export interface SingularSourceProperties {
  /**
   * @schema SingularSourceProperties#object
   */
  readonly object: string;

}

/**
 * @schema SlackSourceProperties
 */
export interface SlackSourceProperties {
  /**
   * @schema SlackSourceProperties#object
   */
  readonly object: string;

}

/**
 * @schema TrendmicroSourceProperties
 */
export interface TrendmicroSourceProperties {
  /**
   * @schema TrendmicroSourceProperties#object
   */
  readonly object: string;

}

/**
 * @schema VeevaSourceProperties
 */
export interface VeevaSourceProperties {
  /**
   * @schema VeevaSourceProperties#object
   */
  readonly object: string;

}

/**
 * @schema ZendeskSourceProperties
 */
export interface ZendeskSourceProperties {
  /**
   * @schema ZendeskSourceProperties#object
   */
  readonly object: string;

}

/**
 * @schema RedshiftDestinationProperties
 */
export interface RedshiftDestinationProperties {
  /**
   * @schema RedshiftDestinationProperties#object
   */
  readonly object: string;

  /**
   * @schema RedshiftDestinationProperties#intermediateBucketName
   */
  readonly intermediateBucketName: string;

  /**
   * @schema RedshiftDestinationProperties#bucketPrefix
   */
  readonly bucketPrefix?: string;

  /**
   * @schema RedshiftDestinationProperties#errorHandlingConfig
   */
  readonly errorHandlingConfig?: ErrorHandlingConfig;

}

/**
 * @schema S3DestinationProperties
 */
export interface S3DestinationProperties {
  /**
   * @schema S3DestinationProperties#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema S3DestinationProperties#bucketPrefix
   */
  readonly bucketPrefix?: string;

  /**
   * @schema S3DestinationProperties#s3OutputFormatConfig
   */
  readonly s3OutputFormatConfig?: S3OutputFormatConfig;

}

/**
 * @schema SalesforceDestinationProperties
 */
export interface SalesforceDestinationProperties {
  /**
   * @schema SalesforceDestinationProperties#object
   */
  readonly object: string;

  /**
   * @schema SalesforceDestinationProperties#idFieldNames
   */
  readonly idFieldNames?: string[];

  /**
   * @schema SalesforceDestinationProperties#errorHandlingConfig
   */
  readonly errorHandlingConfig?: ErrorHandlingConfig;

  /**
   * @schema SalesforceDestinationProperties#writeOperationType
   */
  readonly writeOperationType?: string;

}

/**
 * @schema SnowflakeDestinationProperties
 */
export interface SnowflakeDestinationProperties {
  /**
   * @schema SnowflakeDestinationProperties#object
   */
  readonly object: string;

  /**
   * @schema SnowflakeDestinationProperties#intermediateBucketName
   */
  readonly intermediateBucketName: string;

  /**
   * @schema SnowflakeDestinationProperties#bucketPrefix
   */
  readonly bucketPrefix?: string;

  /**
   * @schema SnowflakeDestinationProperties#errorHandlingConfig
   */
  readonly errorHandlingConfig?: ErrorHandlingConfig;

}

/**
 * @schema EventBridgeDestinationProperties
 */
export interface EventBridgeDestinationProperties {
  /**
   * @schema EventBridgeDestinationProperties#object
   */
  readonly object: string;

  /**
   * @schema EventBridgeDestinationProperties#errorHandlingConfig
   */
  readonly errorHandlingConfig?: ErrorHandlingConfig;

}

/**
 * @schema UpsolverDestinationProperties
 */
export interface UpsolverDestinationProperties {
  /**
   * @schema UpsolverDestinationProperties#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema UpsolverDestinationProperties#bucketPrefix
   */
  readonly bucketPrefix?: string;

  /**
   * @schema UpsolverDestinationProperties#s3OutputFormatConfig
   */
  readonly s3OutputFormatConfig: UpsolverS3OutputFormatConfig;

}

/**
 * @schema FieldTypeDetails
 */
export interface FieldTypeDetails {
  /**
   * @schema FieldTypeDetails#fieldType
   */
  readonly fieldType: string;

  /**
   * @schema FieldTypeDetails#filterOperators
   */
  readonly filterOperators: string[];

  /**
   * @schema FieldTypeDetails#supportedValues
   */
  readonly supportedValues?: string[];

}

/**
 * @schema AmplitudeMetadata
 */
export interface AmplitudeMetadata {
}

/**
 * @schema DatadogMetadata
 */
export interface DatadogMetadata {
}

/**
 * @schema DynatraceMetadata
 */
export interface DynatraceMetadata {
}

/**
 * @schema GoogleAnalyticsMetadata
 */
export interface GoogleAnalyticsMetadata {
  /**
   * @schema GoogleAnalyticsMetadata#oAuthScopes
   */
  readonly oAuthScopes?: string[];

}

/**
 * @schema InforNexusMetadata
 */
export interface InforNexusMetadata {
}

/**
 * @schema MarketoMetadata
 */
export interface MarketoMetadata {
}

/**
 * @schema RedshiftMetadata
 */
export interface RedshiftMetadata {
}

/**
 * @schema S3Metadata
 */
export interface S3Metadata {
}

/**
 * @schema SalesforceMetadata
 */
export interface SalesforceMetadata {
  /**
   * @schema SalesforceMetadata#oAuthScopes
   */
  readonly oAuthScopes?: string[];

}

/**
 * @schema ServiceNowMetadata
 */
export interface ServiceNowMetadata {
}

/**
 * @schema SingularMetadata
 */
export interface SingularMetadata {
}

/**
 * @schema SlackMetadata
 */
export interface SlackMetadata {
  /**
   * @schema SlackMetadata#oAuthScopes
   */
  readonly oAuthScopes?: string[];

}

/**
 * @schema SnowflakeMetadata
 */
export interface SnowflakeMetadata {
  /**
   * @schema SnowflakeMetadata#supportedRegions
   */
  readonly supportedRegions?: string[];

}

/**
 * @schema TrendmicroMetadata
 */
export interface TrendmicroMetadata {
}

/**
 * @schema VeevaMetadata
 */
export interface VeevaMetadata {
}

/**
 * @schema ZendeskMetadata
 */
export interface ZendeskMetadata {
  /**
   * @schema ZendeskMetadata#oAuthScopes
   */
  readonly oAuthScopes?: string[];

}

/**
 * @schema EventBridgeMetadata
 */
export interface EventBridgeMetadata {
}

/**
 * @schema UpsolverMetadata
 */
export interface UpsolverMetadata {
}

/**
 * @schema ErrorInfo
 */
export interface ErrorInfo {
  /**
   * @schema ErrorInfo#putFailuresCount
   */
  readonly putFailuresCount?: number;

  /**
   * @schema ErrorInfo#executionMessage
   */
  readonly executionMessage?: string;

}

/**
 * @schema ConnectorOAuthRequest
 */
export interface ConnectorOAuthRequest {
  /**
   * @schema ConnectorOAuthRequest#authCode
   */
  readonly authCode?: string;

  /**
   * @schema ConnectorOAuthRequest#redirectUri
   */
  readonly redirectUri?: string;

}

/**
 * @schema ErrorHandlingConfig
 */
export interface ErrorHandlingConfig {
  /**
   * @schema ErrorHandlingConfig#failOnFirstDestinationError
   */
  readonly failOnFirstDestinationError?: boolean;

  /**
   * @schema ErrorHandlingConfig#bucketPrefix
   */
  readonly bucketPrefix?: string;

  /**
   * @schema ErrorHandlingConfig#bucketName
   */
  readonly bucketName?: string;

}

/**
 * @schema S3OutputFormatConfig
 */
export interface S3OutputFormatConfig {
  /**
   * @schema S3OutputFormatConfig#fileType
   */
  readonly fileType?: string;

  /**
   * @schema S3OutputFormatConfig#prefixConfig
   */
  readonly prefixConfig?: PrefixConfig;

  /**
   * @schema S3OutputFormatConfig#aggregationConfig
   */
  readonly aggregationConfig?: AggregationConfig;

}

/**
 * @schema UpsolverS3OutputFormatConfig
 */
export interface UpsolverS3OutputFormatConfig {
  /**
   * @schema UpsolverS3OutputFormatConfig#fileType
   */
  readonly fileType?: string;

  /**
   * @schema UpsolverS3OutputFormatConfig#prefixConfig
   */
  readonly prefixConfig: PrefixConfig;

  /**
   * @schema UpsolverS3OutputFormatConfig#aggregationConfig
   */
  readonly aggregationConfig?: AggregationConfig;

}

/**
 * @schema PrefixConfig
 */
export interface PrefixConfig {
  /**
   * @schema PrefixConfig#prefixType
   */
  readonly prefixType?: string;

  /**
   * @schema PrefixConfig#prefixFormat
   */
  readonly prefixFormat?: string;

}

/**
 * @schema AggregationConfig
 */
export interface AggregationConfig {
  /**
   * @schema AggregationConfig#aggregationType
   */
  readonly aggregationType?: string;

}
