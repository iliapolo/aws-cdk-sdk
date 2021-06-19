/**
 * @schema AppflowCreateConnectorProfileRequest
 */
export interface AppflowCreateConnectorProfileRequest {
  /**
   * @schema AppflowCreateConnectorProfileRequest#connectorProfileName
   */
  readonly connectorProfileName: string;

  /**
   * @schema AppflowCreateConnectorProfileRequest#kmsArn
   */
  readonly kmsArn?: string;

  /**
   * @schema AppflowCreateConnectorProfileRequest#connectorType
   */
  readonly connectorType: string;

  /**
   * @schema AppflowCreateConnectorProfileRequest#connectionMode
   */
  readonly connectionMode: string;

  /**
   * @schema AppflowCreateConnectorProfileRequest#connectorProfileConfig
   */
  readonly connectorProfileConfig: AppflowConnectorProfileConfig;

}

/**
 * @schema AppflowCreateConnectorProfileResponse
 */
export interface AppflowCreateConnectorProfileResponse {
  /**
   * @schema AppflowCreateConnectorProfileResponse#connectorProfileArn
   */
  readonly connectorProfileArn?: string;

}

/**
 * @schema AppflowCreateFlowRequest
 */
export interface AppflowCreateFlowRequest {
  /**
   * @schema AppflowCreateFlowRequest#flowName
   */
  readonly flowName: string;

  /**
   * @schema AppflowCreateFlowRequest#description
   */
  readonly description?: string;

  /**
   * @schema AppflowCreateFlowRequest#kmsArn
   */
  readonly kmsArn?: string;

  /**
   * @schema AppflowCreateFlowRequest#triggerConfig
   */
  readonly triggerConfig: AppflowTriggerConfig;

  /**
   * @schema AppflowCreateFlowRequest#sourceFlowConfig
   */
  readonly sourceFlowConfig: AppflowSourceFlowConfig;

  /**
   * @schema AppflowCreateFlowRequest#destinationFlowConfigList
   */
  readonly destinationFlowConfigList: AppflowDestinationFlowConfig[];

  /**
   * @schema AppflowCreateFlowRequest#tasks
   */
  readonly tasks: AppflowTask[];

  /**
   * @schema AppflowCreateFlowRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema AppflowCreateFlowResponse
 */
export interface AppflowCreateFlowResponse {
  /**
   * @schema AppflowCreateFlowResponse#flowArn
   */
  readonly flowArn?: string;

  /**
   * @schema AppflowCreateFlowResponse#flowStatus
   */
  readonly flowStatus?: string;

}

/**
 * @schema AppflowDeleteConnectorProfileRequest
 */
export interface AppflowDeleteConnectorProfileRequest {
  /**
   * @schema AppflowDeleteConnectorProfileRequest#connectorProfileName
   */
  readonly connectorProfileName: string;

  /**
   * @schema AppflowDeleteConnectorProfileRequest#forceDelete
   */
  readonly forceDelete?: boolean;

}

/**
 * @schema AppflowDeleteConnectorProfileResponse
 */
export interface AppflowDeleteConnectorProfileResponse {
}

/**
 * @schema AppflowDeleteFlowRequest
 */
export interface AppflowDeleteFlowRequest {
  /**
   * @schema AppflowDeleteFlowRequest#flowName
   */
  readonly flowName: string;

  /**
   * @schema AppflowDeleteFlowRequest#forceDelete
   */
  readonly forceDelete?: boolean;

}

/**
 * @schema AppflowDeleteFlowResponse
 */
export interface AppflowDeleteFlowResponse {
}

/**
 * @schema AppflowDescribeConnectorEntityRequest
 */
export interface AppflowDescribeConnectorEntityRequest {
  /**
   * @schema AppflowDescribeConnectorEntityRequest#connectorEntityName
   */
  readonly connectorEntityName: string;

  /**
   * @schema AppflowDescribeConnectorEntityRequest#connectorType
   */
  readonly connectorType?: string;

  /**
   * @schema AppflowDescribeConnectorEntityRequest#connectorProfileName
   */
  readonly connectorProfileName?: string;

}

/**
 * @schema AppflowDescribeConnectorEntityResponse
 */
export interface AppflowDescribeConnectorEntityResponse {
  /**
   * @schema AppflowDescribeConnectorEntityResponse#connectorEntityFields
   */
  readonly connectorEntityFields: AppflowConnectorEntityField[];

}

/**
 * @schema AppflowDescribeConnectorProfilesRequest
 */
export interface AppflowDescribeConnectorProfilesRequest {
  /**
   * @schema AppflowDescribeConnectorProfilesRequest#connectorProfileNames
   */
  readonly connectorProfileNames?: string[];

  /**
   * @schema AppflowDescribeConnectorProfilesRequest#connectorType
   */
  readonly connectorType?: string;

  /**
   * @schema AppflowDescribeConnectorProfilesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AppflowDescribeConnectorProfilesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppflowDescribeConnectorProfilesResponse
 */
export interface AppflowDescribeConnectorProfilesResponse {
  /**
   * @schema AppflowDescribeConnectorProfilesResponse#connectorProfileDetails
   */
  readonly connectorProfileDetails?: AppflowConnectorProfile[];

  /**
   * @schema AppflowDescribeConnectorProfilesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppflowDescribeConnectorsRequest
 */
export interface AppflowDescribeConnectorsRequest {
  /**
   * @schema AppflowDescribeConnectorsRequest#connectorTypes
   */
  readonly connectorTypes?: string[];

  /**
   * @schema AppflowDescribeConnectorsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppflowDescribeConnectorsResponse
 */
export interface AppflowDescribeConnectorsResponse {
  /**
   * @schema AppflowDescribeConnectorsResponse#connectorConfigurations
   */
  readonly connectorConfigurations?: { [key: string]: AppflowConnectorConfiguration };

  /**
   * @schema AppflowDescribeConnectorsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppflowDescribeFlowRequest
 */
export interface AppflowDescribeFlowRequest {
  /**
   * @schema AppflowDescribeFlowRequest#flowName
   */
  readonly flowName: string;

}

/**
 * @schema AppflowDescribeFlowResponse
 */
export interface AppflowDescribeFlowResponse {
  /**
   * @schema AppflowDescribeFlowResponse#flowArn
   */
  readonly flowArn?: string;

  /**
   * @schema AppflowDescribeFlowResponse#description
   */
  readonly description?: string;

  /**
   * @schema AppflowDescribeFlowResponse#flowName
   */
  readonly flowName?: string;

  /**
   * @schema AppflowDescribeFlowResponse#kmsArn
   */
  readonly kmsArn?: string;

  /**
   * @schema AppflowDescribeFlowResponse#flowStatus
   */
  readonly flowStatus?: string;

  /**
   * @schema AppflowDescribeFlowResponse#flowStatusMessage
   */
  readonly flowStatusMessage?: string;

  /**
   * @schema AppflowDescribeFlowResponse#sourceFlowConfig
   */
  readonly sourceFlowConfig?: AppflowSourceFlowConfig;

  /**
   * @schema AppflowDescribeFlowResponse#destinationFlowConfigList
   */
  readonly destinationFlowConfigList?: AppflowDestinationFlowConfig[];

  /**
   * @schema AppflowDescribeFlowResponse#lastRunExecutionDetails
   */
  readonly lastRunExecutionDetails?: AppflowExecutionDetails;

  /**
   * @schema AppflowDescribeFlowResponse#triggerConfig
   */
  readonly triggerConfig?: AppflowTriggerConfig;

  /**
   * @schema AppflowDescribeFlowResponse#tasks
   */
  readonly tasks?: AppflowTask[];

  /**
   * @schema AppflowDescribeFlowResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema AppflowDescribeFlowResponse#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema AppflowDescribeFlowResponse#createdBy
   */
  readonly createdBy?: string;

  /**
   * @schema AppflowDescribeFlowResponse#lastUpdatedBy
   */
  readonly lastUpdatedBy?: string;

  /**
   * @schema AppflowDescribeFlowResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema AppflowDescribeFlowExecutionRecordsRequest
 */
export interface AppflowDescribeFlowExecutionRecordsRequest {
  /**
   * @schema AppflowDescribeFlowExecutionRecordsRequest#flowName
   */
  readonly flowName: string;

  /**
   * @schema AppflowDescribeFlowExecutionRecordsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AppflowDescribeFlowExecutionRecordsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppflowDescribeFlowExecutionRecordsResponse
 */
export interface AppflowDescribeFlowExecutionRecordsResponse {
  /**
   * @schema AppflowDescribeFlowExecutionRecordsResponse#flowExecutions
   */
  readonly flowExecutions?: AppflowExecutionRecord[];

  /**
   * @schema AppflowDescribeFlowExecutionRecordsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppflowListConnectorEntitiesRequest
 */
export interface AppflowListConnectorEntitiesRequest {
  /**
   * @schema AppflowListConnectorEntitiesRequest#connectorProfileName
   */
  readonly connectorProfileName?: string;

  /**
   * @schema AppflowListConnectorEntitiesRequest#connectorType
   */
  readonly connectorType?: string;

  /**
   * @schema AppflowListConnectorEntitiesRequest#entitiesPath
   */
  readonly entitiesPath?: string;

}

/**
 * @schema AppflowListConnectorEntitiesResponse
 */
export interface AppflowListConnectorEntitiesResponse {
  /**
   * @schema AppflowListConnectorEntitiesResponse#connectorEntityMap
   */
  readonly connectorEntityMap: { [key: string]: AppflowConnectorEntity[] };

}

/**
 * @schema AppflowListFlowsRequest
 */
export interface AppflowListFlowsRequest {
  /**
   * @schema AppflowListFlowsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AppflowListFlowsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppflowListFlowsResponse
 */
export interface AppflowListFlowsResponse {
  /**
   * @schema AppflowListFlowsResponse#flows
   */
  readonly flows?: AppflowFlowDefinition[];

  /**
   * @schema AppflowListFlowsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppflowListTagsForResourceRequest
 */
export interface AppflowListTagsForResourceRequest {
  /**
   * @schema AppflowListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema AppflowListTagsForResourceResponse
 */
export interface AppflowListTagsForResourceResponse {
  /**
   * @schema AppflowListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema AppflowStartFlowRequest
 */
export interface AppflowStartFlowRequest {
  /**
   * @schema AppflowStartFlowRequest#flowName
   */
  readonly flowName: string;

}

/**
 * @schema AppflowStartFlowResponse
 */
export interface AppflowStartFlowResponse {
  /**
   * @schema AppflowStartFlowResponse#flowArn
   */
  readonly flowArn?: string;

  /**
   * @schema AppflowStartFlowResponse#flowStatus
   */
  readonly flowStatus?: string;

  /**
   * @schema AppflowStartFlowResponse#executionId
   */
  readonly executionId?: string;

}

/**
 * @schema AppflowStopFlowRequest
 */
export interface AppflowStopFlowRequest {
  /**
   * @schema AppflowStopFlowRequest#flowName
   */
  readonly flowName: string;

}

/**
 * @schema AppflowStopFlowResponse
 */
export interface AppflowStopFlowResponse {
  /**
   * @schema AppflowStopFlowResponse#flowArn
   */
  readonly flowArn?: string;

  /**
   * @schema AppflowStopFlowResponse#flowStatus
   */
  readonly flowStatus?: string;

}

/**
 * @schema AppflowTagResourceRequest
 */
export interface AppflowTagResourceRequest {
  /**
   * @schema AppflowTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema AppflowTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema AppflowTagResourceResponse
 */
export interface AppflowTagResourceResponse {
}

/**
 * @schema AppflowUntagResourceRequest
 */
export interface AppflowUntagResourceRequest {
  /**
   * @schema AppflowUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema AppflowUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema AppflowUntagResourceResponse
 */
export interface AppflowUntagResourceResponse {
}

/**
 * @schema AppflowUpdateConnectorProfileRequest
 */
export interface AppflowUpdateConnectorProfileRequest {
  /**
   * @schema AppflowUpdateConnectorProfileRequest#connectorProfileName
   */
  readonly connectorProfileName: string;

  /**
   * @schema AppflowUpdateConnectorProfileRequest#connectionMode
   */
  readonly connectionMode: string;

  /**
   * @schema AppflowUpdateConnectorProfileRequest#connectorProfileConfig
   */
  readonly connectorProfileConfig: AppflowConnectorProfileConfig;

}

/**
 * @schema AppflowUpdateConnectorProfileResponse
 */
export interface AppflowUpdateConnectorProfileResponse {
  /**
   * @schema AppflowUpdateConnectorProfileResponse#connectorProfileArn
   */
  readonly connectorProfileArn?: string;

}

/**
 * @schema AppflowUpdateFlowRequest
 */
export interface AppflowUpdateFlowRequest {
  /**
   * @schema AppflowUpdateFlowRequest#flowName
   */
  readonly flowName: string;

  /**
   * @schema AppflowUpdateFlowRequest#description
   */
  readonly description?: string;

  /**
   * @schema AppflowUpdateFlowRequest#triggerConfig
   */
  readonly triggerConfig: AppflowTriggerConfig;

  /**
   * @schema AppflowUpdateFlowRequest#sourceFlowConfig
   */
  readonly sourceFlowConfig?: AppflowSourceFlowConfig;

  /**
   * @schema AppflowUpdateFlowRequest#destinationFlowConfigList
   */
  readonly destinationFlowConfigList: AppflowDestinationFlowConfig[];

  /**
   * @schema AppflowUpdateFlowRequest#tasks
   */
  readonly tasks: AppflowTask[];

}

/**
 * @schema AppflowUpdateFlowResponse
 */
export interface AppflowUpdateFlowResponse {
  /**
   * @schema AppflowUpdateFlowResponse#flowStatus
   */
  readonly flowStatus?: string;

}

/**
 * @schema AppflowConnectorProfileConfig
 */
export interface AppflowConnectorProfileConfig {
  /**
   * @schema AppflowConnectorProfileConfig#connectorProfileProperties
   */
  readonly connectorProfileProperties: AppflowConnectorProfileProperties;

  /**
   * @schema AppflowConnectorProfileConfig#connectorProfileCredentials
   */
  readonly connectorProfileCredentials: AppflowConnectorProfileCredentials;

}

/**
 * @schema AppflowTriggerConfig
 */
export interface AppflowTriggerConfig {
  /**
   * @schema AppflowTriggerConfig#triggerType
   */
  readonly triggerType: string;

  /**
   * @schema AppflowTriggerConfig#triggerProperties
   */
  readonly triggerProperties?: AppflowTriggerProperties;

}

/**
 * @schema AppflowSourceFlowConfig
 */
export interface AppflowSourceFlowConfig {
  /**
   * @schema AppflowSourceFlowConfig#connectorType
   */
  readonly connectorType: string;

  /**
   * @schema AppflowSourceFlowConfig#connectorProfileName
   */
  readonly connectorProfileName?: string;

  /**
   * @schema AppflowSourceFlowConfig#sourceConnectorProperties
   */
  readonly sourceConnectorProperties: AppflowSourceConnectorProperties;

  /**
   * @schema AppflowSourceFlowConfig#incrementalPullConfig
   */
  readonly incrementalPullConfig?: AppflowIncrementalPullConfig;

}

/**
 * @schema AppflowDestinationFlowConfig
 */
export interface AppflowDestinationFlowConfig {
  /**
   * @schema AppflowDestinationFlowConfig#connectorType
   */
  readonly connectorType: string;

  /**
   * @schema AppflowDestinationFlowConfig#connectorProfileName
   */
  readonly connectorProfileName?: string;

  /**
   * @schema AppflowDestinationFlowConfig#destinationConnectorProperties
   */
  readonly destinationConnectorProperties: AppflowDestinationConnectorProperties;

}

/**
 * @schema AppflowTask
 */
export interface AppflowTask {
  /**
   * @schema AppflowTask#sourceFields
   */
  readonly sourceFields: string[];

  /**
   * @schema AppflowTask#connectorOperator
   */
  readonly connectorOperator?: AppflowConnectorOperator;

  /**
   * @schema AppflowTask#destinationField
   */
  readonly destinationField?: string;

  /**
   * @schema AppflowTask#taskType
   */
  readonly taskType: string;

  /**
   * @schema AppflowTask#taskProperties
   */
  readonly taskProperties?: { [key: string]: string };

}

/**
 * @schema AppflowConnectorEntityField
 */
export interface AppflowConnectorEntityField {
  /**
   * @schema AppflowConnectorEntityField#identifier
   */
  readonly identifier: string;

  /**
   * @schema AppflowConnectorEntityField#label
   */
  readonly label?: string;

  /**
   * @schema AppflowConnectorEntityField#supportedFieldTypeDetails
   */
  readonly supportedFieldTypeDetails?: AppflowSupportedFieldTypeDetails;

  /**
   * @schema AppflowConnectorEntityField#description
   */
  readonly description?: string;

  /**
   * @schema AppflowConnectorEntityField#sourceProperties
   */
  readonly sourceProperties?: AppflowSourceFieldProperties;

  /**
   * @schema AppflowConnectorEntityField#destinationProperties
   */
  readonly destinationProperties?: AppflowDestinationFieldProperties;

}

/**
 * @schema AppflowConnectorProfile
 */
export interface AppflowConnectorProfile {
  /**
   * @schema AppflowConnectorProfile#connectorProfileArn
   */
  readonly connectorProfileArn?: string;

  /**
   * @schema AppflowConnectorProfile#connectorProfileName
   */
  readonly connectorProfileName?: string;

  /**
   * @schema AppflowConnectorProfile#connectorType
   */
  readonly connectorType?: string;

  /**
   * @schema AppflowConnectorProfile#connectionMode
   */
  readonly connectionMode?: string;

  /**
   * @schema AppflowConnectorProfile#credentialsArn
   */
  readonly credentialsArn?: string;

  /**
   * @schema AppflowConnectorProfile#connectorProfileProperties
   */
  readonly connectorProfileProperties?: AppflowConnectorProfileProperties;

  /**
   * @schema AppflowConnectorProfile#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema AppflowConnectorProfile#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

}

/**
 * @schema AppflowConnectorConfiguration
 */
export interface AppflowConnectorConfiguration {
  /**
   * @schema AppflowConnectorConfiguration#canUseAsSource
   */
  readonly canUseAsSource?: boolean;

  /**
   * @schema AppflowConnectorConfiguration#canUseAsDestination
   */
  readonly canUseAsDestination?: boolean;

  /**
   * @schema AppflowConnectorConfiguration#supportedDestinationConnectors
   */
  readonly supportedDestinationConnectors?: string[];

  /**
   * @schema AppflowConnectorConfiguration#supportedSchedulingFrequencies
   */
  readonly supportedSchedulingFrequencies?: string[];

  /**
   * @schema AppflowConnectorConfiguration#isPrivateLinkEnabled
   */
  readonly isPrivateLinkEnabled?: boolean;

  /**
   * @schema AppflowConnectorConfiguration#isPrivateLinkEndpointUrlRequired
   */
  readonly isPrivateLinkEndpointUrlRequired?: boolean;

  /**
   * @schema AppflowConnectorConfiguration#supportedTriggerTypes
   */
  readonly supportedTriggerTypes?: string[];

  /**
   * @schema AppflowConnectorConfiguration#connectorMetadata
   */
  readonly connectorMetadata?: AppflowConnectorMetadata;

}

/**
 * @schema AppflowExecutionDetails
 */
export interface AppflowExecutionDetails {
  /**
   * @schema AppflowExecutionDetails#mostRecentExecutionMessage
   */
  readonly mostRecentExecutionMessage?: string;

  /**
   * @schema AppflowExecutionDetails#mostRecentExecutionTime
   */
  readonly mostRecentExecutionTime?: string;

  /**
   * @schema AppflowExecutionDetails#mostRecentExecutionStatus
   */
  readonly mostRecentExecutionStatus?: string;

}

/**
 * @schema AppflowExecutionRecord
 */
export interface AppflowExecutionRecord {
  /**
   * @schema AppflowExecutionRecord#executionId
   */
  readonly executionId?: string;

  /**
   * @schema AppflowExecutionRecord#executionStatus
   */
  readonly executionStatus?: string;

  /**
   * @schema AppflowExecutionRecord#executionResult
   */
  readonly executionResult?: AppflowExecutionResult;

  /**
   * @schema AppflowExecutionRecord#startedAt
   */
  readonly startedAt?: string;

  /**
   * @schema AppflowExecutionRecord#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

}

/**
 * @schema AppflowConnectorEntity
 */
export interface AppflowConnectorEntity {
  /**
   * @schema AppflowConnectorEntity#name
   */
  readonly name: string;

  /**
   * @schema AppflowConnectorEntity#label
   */
  readonly label?: string;

  /**
   * @schema AppflowConnectorEntity#hasNestedEntities
   */
  readonly hasNestedEntities?: boolean;

}

/**
 * @schema AppflowFlowDefinition
 */
export interface AppflowFlowDefinition {
  /**
   * @schema AppflowFlowDefinition#flowArn
   */
  readonly flowArn?: string;

  /**
   * @schema AppflowFlowDefinition#description
   */
  readonly description?: string;

  /**
   * @schema AppflowFlowDefinition#flowName
   */
  readonly flowName?: string;

  /**
   * @schema AppflowFlowDefinition#flowStatus
   */
  readonly flowStatus?: string;

  /**
   * @schema AppflowFlowDefinition#sourceConnectorType
   */
  readonly sourceConnectorType?: string;

  /**
   * @schema AppflowFlowDefinition#destinationConnectorType
   */
  readonly destinationConnectorType?: string;

  /**
   * @schema AppflowFlowDefinition#triggerType
   */
  readonly triggerType?: string;

  /**
   * @schema AppflowFlowDefinition#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema AppflowFlowDefinition#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema AppflowFlowDefinition#createdBy
   */
  readonly createdBy?: string;

  /**
   * @schema AppflowFlowDefinition#lastUpdatedBy
   */
  readonly lastUpdatedBy?: string;

  /**
   * @schema AppflowFlowDefinition#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema AppflowFlowDefinition#lastRunExecutionDetails
   */
  readonly lastRunExecutionDetails?: AppflowExecutionDetails;

}

/**
 * @schema AppflowConnectorProfileProperties
 */
export interface AppflowConnectorProfileProperties {
  /**
   * @schema AppflowConnectorProfileProperties#Amplitude
   */
  readonly amplitude?: AppflowAmplitudeConnectorProfileProperties;

  /**
   * @schema AppflowConnectorProfileProperties#Datadog
   */
  readonly datadog?: AppflowDatadogConnectorProfileProperties;

  /**
   * @schema AppflowConnectorProfileProperties#Dynatrace
   */
  readonly dynatrace?: AppflowDynatraceConnectorProfileProperties;

  /**
   * @schema AppflowConnectorProfileProperties#GoogleAnalytics
   */
  readonly googleAnalytics?: AppflowGoogleAnalyticsConnectorProfileProperties;

  /**
   * @schema AppflowConnectorProfileProperties#InforNexus
   */
  readonly inforNexus?: AppflowInforNexusConnectorProfileProperties;

  /**
   * @schema AppflowConnectorProfileProperties#Marketo
   */
  readonly marketo?: AppflowMarketoConnectorProfileProperties;

  /**
   * @schema AppflowConnectorProfileProperties#Redshift
   */
  readonly redshift?: AppflowRedshiftConnectorProfileProperties;

  /**
   * @schema AppflowConnectorProfileProperties#Salesforce
   */
  readonly salesforce?: AppflowSalesforceConnectorProfileProperties;

  /**
   * @schema AppflowConnectorProfileProperties#ServiceNow
   */
  readonly serviceNow?: AppflowServiceNowConnectorProfileProperties;

  /**
   * @schema AppflowConnectorProfileProperties#Singular
   */
  readonly singular?: AppflowSingularConnectorProfileProperties;

  /**
   * @schema AppflowConnectorProfileProperties#Slack
   */
  readonly slack?: AppflowSlackConnectorProfileProperties;

  /**
   * @schema AppflowConnectorProfileProperties#Snowflake
   */
  readonly snowflake?: AppflowSnowflakeConnectorProfileProperties;

  /**
   * @schema AppflowConnectorProfileProperties#Trendmicro
   */
  readonly trendmicro?: AppflowTrendmicroConnectorProfileProperties;

  /**
   * @schema AppflowConnectorProfileProperties#Veeva
   */
  readonly veeva?: AppflowVeevaConnectorProfileProperties;

  /**
   * @schema AppflowConnectorProfileProperties#Zendesk
   */
  readonly zendesk?: AppflowZendeskConnectorProfileProperties;

}

/**
 * @schema AppflowConnectorProfileCredentials
 */
export interface AppflowConnectorProfileCredentials {
  /**
   * @schema AppflowConnectorProfileCredentials#Amplitude
   */
  readonly amplitude?: AppflowAmplitudeConnectorProfileCredentials;

  /**
   * @schema AppflowConnectorProfileCredentials#Datadog
   */
  readonly datadog?: AppflowDatadogConnectorProfileCredentials;

  /**
   * @schema AppflowConnectorProfileCredentials#Dynatrace
   */
  readonly dynatrace?: AppflowDynatraceConnectorProfileCredentials;

  /**
   * @schema AppflowConnectorProfileCredentials#GoogleAnalytics
   */
  readonly googleAnalytics?: AppflowGoogleAnalyticsConnectorProfileCredentials;

  /**
   * @schema AppflowConnectorProfileCredentials#InforNexus
   */
  readonly inforNexus?: AppflowInforNexusConnectorProfileCredentials;

  /**
   * @schema AppflowConnectorProfileCredentials#Marketo
   */
  readonly marketo?: AppflowMarketoConnectorProfileCredentials;

  /**
   * @schema AppflowConnectorProfileCredentials#Redshift
   */
  readonly redshift?: AppflowRedshiftConnectorProfileCredentials;

  /**
   * @schema AppflowConnectorProfileCredentials#Salesforce
   */
  readonly salesforce?: AppflowSalesforceConnectorProfileCredentials;

  /**
   * @schema AppflowConnectorProfileCredentials#ServiceNow
   */
  readonly serviceNow?: AppflowServiceNowConnectorProfileCredentials;

  /**
   * @schema AppflowConnectorProfileCredentials#Singular
   */
  readonly singular?: AppflowSingularConnectorProfileCredentials;

  /**
   * @schema AppflowConnectorProfileCredentials#Slack
   */
  readonly slack?: AppflowSlackConnectorProfileCredentials;

  /**
   * @schema AppflowConnectorProfileCredentials#Snowflake
   */
  readonly snowflake?: AppflowSnowflakeConnectorProfileCredentials;

  /**
   * @schema AppflowConnectorProfileCredentials#Trendmicro
   */
  readonly trendmicro?: AppflowTrendmicroConnectorProfileCredentials;

  /**
   * @schema AppflowConnectorProfileCredentials#Veeva
   */
  readonly veeva?: AppflowVeevaConnectorProfileCredentials;

  /**
   * @schema AppflowConnectorProfileCredentials#Zendesk
   */
  readonly zendesk?: AppflowZendeskConnectorProfileCredentials;

}

/**
 * @schema AppflowTriggerProperties
 */
export interface AppflowTriggerProperties {
  /**
   * @schema AppflowTriggerProperties#Scheduled
   */
  readonly scheduled?: AppflowScheduledTriggerProperties;

}

/**
 * @schema AppflowSourceConnectorProperties
 */
export interface AppflowSourceConnectorProperties {
  /**
   * @schema AppflowSourceConnectorProperties#Amplitude
   */
  readonly amplitude?: AppflowAmplitudeSourceProperties;

  /**
   * @schema AppflowSourceConnectorProperties#Datadog
   */
  readonly datadog?: AppflowDatadogSourceProperties;

  /**
   * @schema AppflowSourceConnectorProperties#Dynatrace
   */
  readonly dynatrace?: AppflowDynatraceSourceProperties;

  /**
   * @schema AppflowSourceConnectorProperties#GoogleAnalytics
   */
  readonly googleAnalytics?: AppflowGoogleAnalyticsSourceProperties;

  /**
   * @schema AppflowSourceConnectorProperties#InforNexus
   */
  readonly inforNexus?: AppflowInforNexusSourceProperties;

  /**
   * @schema AppflowSourceConnectorProperties#Marketo
   */
  readonly marketo?: AppflowMarketoSourceProperties;

  /**
   * @schema AppflowSourceConnectorProperties#S3
   */
  readonly s3?: AppflowS3SourceProperties;

  /**
   * @schema AppflowSourceConnectorProperties#Salesforce
   */
  readonly salesforce?: AppflowSalesforceSourceProperties;

  /**
   * @schema AppflowSourceConnectorProperties#ServiceNow
   */
  readonly serviceNow?: AppflowServiceNowSourceProperties;

  /**
   * @schema AppflowSourceConnectorProperties#Singular
   */
  readonly singular?: AppflowSingularSourceProperties;

  /**
   * @schema AppflowSourceConnectorProperties#Slack
   */
  readonly slack?: AppflowSlackSourceProperties;

  /**
   * @schema AppflowSourceConnectorProperties#Trendmicro
   */
  readonly trendmicro?: AppflowTrendmicroSourceProperties;

  /**
   * @schema AppflowSourceConnectorProperties#Veeva
   */
  readonly veeva?: AppflowVeevaSourceProperties;

  /**
   * @schema AppflowSourceConnectorProperties#Zendesk
   */
  readonly zendesk?: AppflowZendeskSourceProperties;

}

/**
 * @schema AppflowIncrementalPullConfig
 */
export interface AppflowIncrementalPullConfig {
  /**
   * @schema AppflowIncrementalPullConfig#datetimeTypeFieldName
   */
  readonly datetimeTypeFieldName?: string;

}

/**
 * @schema AppflowDestinationConnectorProperties
 */
export interface AppflowDestinationConnectorProperties {
  /**
   * @schema AppflowDestinationConnectorProperties#Redshift
   */
  readonly redshift?: AppflowRedshiftDestinationProperties;

  /**
   * @schema AppflowDestinationConnectorProperties#S3
   */
  readonly s3?: AppflowS3DestinationProperties;

  /**
   * @schema AppflowDestinationConnectorProperties#Salesforce
   */
  readonly salesforce?: AppflowSalesforceDestinationProperties;

  /**
   * @schema AppflowDestinationConnectorProperties#Snowflake
   */
  readonly snowflake?: AppflowSnowflakeDestinationProperties;

  /**
   * @schema AppflowDestinationConnectorProperties#EventBridge
   */
  readonly eventBridge?: AppflowEventBridgeDestinationProperties;

  /**
   * @schema AppflowDestinationConnectorProperties#Upsolver
   */
  readonly upsolver?: AppflowUpsolverDestinationProperties;

}

/**
 * @schema AppflowConnectorOperator
 */
export interface AppflowConnectorOperator {
  /**
   * @schema AppflowConnectorOperator#Amplitude
   */
  readonly amplitude?: string;

  /**
   * @schema AppflowConnectorOperator#Datadog
   */
  readonly datadog?: string;

  /**
   * @schema AppflowConnectorOperator#Dynatrace
   */
  readonly dynatrace?: string;

  /**
   * @schema AppflowConnectorOperator#GoogleAnalytics
   */
  readonly googleAnalytics?: string;

  /**
   * @schema AppflowConnectorOperator#InforNexus
   */
  readonly inforNexus?: string;

  /**
   * @schema AppflowConnectorOperator#Marketo
   */
  readonly marketo?: string;

  /**
   * @schema AppflowConnectorOperator#S3
   */
  readonly s3?: string;

  /**
   * @schema AppflowConnectorOperator#Salesforce
   */
  readonly salesforce?: string;

  /**
   * @schema AppflowConnectorOperator#ServiceNow
   */
  readonly serviceNow?: string;

  /**
   * @schema AppflowConnectorOperator#Singular
   */
  readonly singular?: string;

  /**
   * @schema AppflowConnectorOperator#Slack
   */
  readonly slack?: string;

  /**
   * @schema AppflowConnectorOperator#Trendmicro
   */
  readonly trendmicro?: string;

  /**
   * @schema AppflowConnectorOperator#Veeva
   */
  readonly veeva?: string;

  /**
   * @schema AppflowConnectorOperator#Zendesk
   */
  readonly zendesk?: string;

}

/**
 * @schema AppflowSupportedFieldTypeDetails
 */
export interface AppflowSupportedFieldTypeDetails {
  /**
   * @schema AppflowSupportedFieldTypeDetails#v1
   */
  readonly v1: AppflowFieldTypeDetails;

}

/**
 * @schema AppflowSourceFieldProperties
 */
export interface AppflowSourceFieldProperties {
  /**
   * @schema AppflowSourceFieldProperties#isRetrievable
   */
  readonly isRetrievable?: boolean;

  /**
   * @schema AppflowSourceFieldProperties#isQueryable
   */
  readonly isQueryable?: boolean;

}

/**
 * @schema AppflowDestinationFieldProperties
 */
export interface AppflowDestinationFieldProperties {
  /**
   * @schema AppflowDestinationFieldProperties#isCreatable
   */
  readonly isCreatable?: boolean;

  /**
   * @schema AppflowDestinationFieldProperties#isNullable
   */
  readonly isNullable?: boolean;

  /**
   * @schema AppflowDestinationFieldProperties#isUpsertable
   */
  readonly isUpsertable?: boolean;

  /**
   * @schema AppflowDestinationFieldProperties#isUpdatable
   */
  readonly isUpdatable?: boolean;

  /**
   * @schema AppflowDestinationFieldProperties#supportedWriteOperations
   */
  readonly supportedWriteOperations?: string[];

}

/**
 * @schema AppflowConnectorMetadata
 */
export interface AppflowConnectorMetadata {
  /**
   * @schema AppflowConnectorMetadata#Amplitude
   */
  readonly amplitude?: AppflowAmplitudeMetadata;

  /**
   * @schema AppflowConnectorMetadata#Datadog
   */
  readonly datadog?: AppflowDatadogMetadata;

  /**
   * @schema AppflowConnectorMetadata#Dynatrace
   */
  readonly dynatrace?: AppflowDynatraceMetadata;

  /**
   * @schema AppflowConnectorMetadata#GoogleAnalytics
   */
  readonly googleAnalytics?: AppflowGoogleAnalyticsMetadata;

  /**
   * @schema AppflowConnectorMetadata#InforNexus
   */
  readonly inforNexus?: AppflowInforNexusMetadata;

  /**
   * @schema AppflowConnectorMetadata#Marketo
   */
  readonly marketo?: AppflowMarketoMetadata;

  /**
   * @schema AppflowConnectorMetadata#Redshift
   */
  readonly redshift?: AppflowRedshiftMetadata;

  /**
   * @schema AppflowConnectorMetadata#S3
   */
  readonly s3?: AppflowS3Metadata;

  /**
   * @schema AppflowConnectorMetadata#Salesforce
   */
  readonly salesforce?: AppflowSalesforceMetadata;

  /**
   * @schema AppflowConnectorMetadata#ServiceNow
   */
  readonly serviceNow?: AppflowServiceNowMetadata;

  /**
   * @schema AppflowConnectorMetadata#Singular
   */
  readonly singular?: AppflowSingularMetadata;

  /**
   * @schema AppflowConnectorMetadata#Slack
   */
  readonly slack?: AppflowSlackMetadata;

  /**
   * @schema AppflowConnectorMetadata#Snowflake
   */
  readonly snowflake?: AppflowSnowflakeMetadata;

  /**
   * @schema AppflowConnectorMetadata#Trendmicro
   */
  readonly trendmicro?: AppflowTrendmicroMetadata;

  /**
   * @schema AppflowConnectorMetadata#Veeva
   */
  readonly veeva?: AppflowVeevaMetadata;

  /**
   * @schema AppflowConnectorMetadata#Zendesk
   */
  readonly zendesk?: AppflowZendeskMetadata;

  /**
   * @schema AppflowConnectorMetadata#EventBridge
   */
  readonly eventBridge?: AppflowEventBridgeMetadata;

  /**
   * @schema AppflowConnectorMetadata#Upsolver
   */
  readonly upsolver?: AppflowUpsolverMetadata;

}

/**
 * @schema AppflowExecutionResult
 */
export interface AppflowExecutionResult {
  /**
   * @schema AppflowExecutionResult#errorInfo
   */
  readonly errorInfo?: AppflowErrorInfo;

  /**
   * @schema AppflowExecutionResult#bytesProcessed
   */
  readonly bytesProcessed?: number;

  /**
   * @schema AppflowExecutionResult#bytesWritten
   */
  readonly bytesWritten?: number;

  /**
   * @schema AppflowExecutionResult#recordsProcessed
   */
  readonly recordsProcessed?: number;

}

/**
 * @schema AppflowAmplitudeConnectorProfileProperties
 */
export interface AppflowAmplitudeConnectorProfileProperties {
}

/**
 * @schema AppflowDatadogConnectorProfileProperties
 */
export interface AppflowDatadogConnectorProfileProperties {
  /**
   * @schema AppflowDatadogConnectorProfileProperties#instanceUrl
   */
  readonly instanceUrl: string;

}

/**
 * @schema AppflowDynatraceConnectorProfileProperties
 */
export interface AppflowDynatraceConnectorProfileProperties {
  /**
   * @schema AppflowDynatraceConnectorProfileProperties#instanceUrl
   */
  readonly instanceUrl: string;

}

/**
 * @schema AppflowGoogleAnalyticsConnectorProfileProperties
 */
export interface AppflowGoogleAnalyticsConnectorProfileProperties {
}

/**
 * @schema AppflowInforNexusConnectorProfileProperties
 */
export interface AppflowInforNexusConnectorProfileProperties {
  /**
   * @schema AppflowInforNexusConnectorProfileProperties#instanceUrl
   */
  readonly instanceUrl: string;

}

/**
 * @schema AppflowMarketoConnectorProfileProperties
 */
export interface AppflowMarketoConnectorProfileProperties {
  /**
   * @schema AppflowMarketoConnectorProfileProperties#instanceUrl
   */
  readonly instanceUrl: string;

}

/**
 * @schema AppflowRedshiftConnectorProfileProperties
 */
export interface AppflowRedshiftConnectorProfileProperties {
  /**
   * @schema AppflowRedshiftConnectorProfileProperties#databaseUrl
   */
  readonly databaseUrl: string;

  /**
   * @schema AppflowRedshiftConnectorProfileProperties#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema AppflowRedshiftConnectorProfileProperties#bucketPrefix
   */
  readonly bucketPrefix?: string;

  /**
   * @schema AppflowRedshiftConnectorProfileProperties#roleArn
   */
  readonly roleArn: string;

}

/**
 * @schema AppflowSalesforceConnectorProfileProperties
 */
export interface AppflowSalesforceConnectorProfileProperties {
  /**
   * @schema AppflowSalesforceConnectorProfileProperties#instanceUrl
   */
  readonly instanceUrl?: string;

  /**
   * @schema AppflowSalesforceConnectorProfileProperties#isSandboxEnvironment
   */
  readonly isSandboxEnvironment?: boolean;

}

/**
 * @schema AppflowServiceNowConnectorProfileProperties
 */
export interface AppflowServiceNowConnectorProfileProperties {
  /**
   * @schema AppflowServiceNowConnectorProfileProperties#instanceUrl
   */
  readonly instanceUrl: string;

}

/**
 * @schema AppflowSingularConnectorProfileProperties
 */
export interface AppflowSingularConnectorProfileProperties {
}

/**
 * @schema AppflowSlackConnectorProfileProperties
 */
export interface AppflowSlackConnectorProfileProperties {
  /**
   * @schema AppflowSlackConnectorProfileProperties#instanceUrl
   */
  readonly instanceUrl: string;

}

/**
 * @schema AppflowSnowflakeConnectorProfileProperties
 */
export interface AppflowSnowflakeConnectorProfileProperties {
  /**
   * @schema AppflowSnowflakeConnectorProfileProperties#warehouse
   */
  readonly warehouse: string;

  /**
   * @schema AppflowSnowflakeConnectorProfileProperties#stage
   */
  readonly stage: string;

  /**
   * @schema AppflowSnowflakeConnectorProfileProperties#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema AppflowSnowflakeConnectorProfileProperties#bucketPrefix
   */
  readonly bucketPrefix?: string;

  /**
   * @schema AppflowSnowflakeConnectorProfileProperties#privateLinkServiceName
   */
  readonly privateLinkServiceName?: string;

  /**
   * @schema AppflowSnowflakeConnectorProfileProperties#accountName
   */
  readonly accountName?: string;

  /**
   * @schema AppflowSnowflakeConnectorProfileProperties#region
   */
  readonly region?: string;

}

/**
 * @schema AppflowTrendmicroConnectorProfileProperties
 */
export interface AppflowTrendmicroConnectorProfileProperties {
}

/**
 * @schema AppflowVeevaConnectorProfileProperties
 */
export interface AppflowVeevaConnectorProfileProperties {
  /**
   * @schema AppflowVeevaConnectorProfileProperties#instanceUrl
   */
  readonly instanceUrl: string;

}

/**
 * @schema AppflowZendeskConnectorProfileProperties
 */
export interface AppflowZendeskConnectorProfileProperties {
  /**
   * @schema AppflowZendeskConnectorProfileProperties#instanceUrl
   */
  readonly instanceUrl: string;

}

/**
 * @schema AppflowAmplitudeConnectorProfileCredentials
 */
export interface AppflowAmplitudeConnectorProfileCredentials {
  /**
   * @schema AppflowAmplitudeConnectorProfileCredentials#apiKey
   */
  readonly apiKey: string;

  /**
   * @schema AppflowAmplitudeConnectorProfileCredentials#secretKey
   */
  readonly secretKey: string;

}

/**
 * @schema AppflowDatadogConnectorProfileCredentials
 */
export interface AppflowDatadogConnectorProfileCredentials {
  /**
   * @schema AppflowDatadogConnectorProfileCredentials#apiKey
   */
  readonly apiKey: string;

  /**
   * @schema AppflowDatadogConnectorProfileCredentials#applicationKey
   */
  readonly applicationKey: string;

}

/**
 * @schema AppflowDynatraceConnectorProfileCredentials
 */
export interface AppflowDynatraceConnectorProfileCredentials {
  /**
   * @schema AppflowDynatraceConnectorProfileCredentials#apiToken
   */
  readonly apiToken: string;

}

/**
 * @schema AppflowGoogleAnalyticsConnectorProfileCredentials
 */
export interface AppflowGoogleAnalyticsConnectorProfileCredentials {
  /**
   * @schema AppflowGoogleAnalyticsConnectorProfileCredentials#clientId
   */
  readonly clientId: string;

  /**
   * @schema AppflowGoogleAnalyticsConnectorProfileCredentials#clientSecret
   */
  readonly clientSecret: string;

  /**
   * @schema AppflowGoogleAnalyticsConnectorProfileCredentials#accessToken
   */
  readonly accessToken?: string;

  /**
   * @schema AppflowGoogleAnalyticsConnectorProfileCredentials#refreshToken
   */
  readonly refreshToken?: string;

  /**
   * @schema AppflowGoogleAnalyticsConnectorProfileCredentials#oAuthRequest
   */
  readonly oAuthRequest?: AppflowConnectorOAuthRequest;

}

/**
 * @schema AppflowInforNexusConnectorProfileCredentials
 */
export interface AppflowInforNexusConnectorProfileCredentials {
  /**
   * @schema AppflowInforNexusConnectorProfileCredentials#accessKeyId
   */
  readonly accessKeyId: string;

  /**
   * @schema AppflowInforNexusConnectorProfileCredentials#userId
   */
  readonly userId: string;

  /**
   * @schema AppflowInforNexusConnectorProfileCredentials#secretAccessKey
   */
  readonly secretAccessKey: string;

  /**
   * @schema AppflowInforNexusConnectorProfileCredentials#datakey
   */
  readonly datakey: string;

}

/**
 * @schema AppflowMarketoConnectorProfileCredentials
 */
export interface AppflowMarketoConnectorProfileCredentials {
  /**
   * @schema AppflowMarketoConnectorProfileCredentials#clientId
   */
  readonly clientId: string;

  /**
   * @schema AppflowMarketoConnectorProfileCredentials#clientSecret
   */
  readonly clientSecret: string;

  /**
   * @schema AppflowMarketoConnectorProfileCredentials#accessToken
   */
  readonly accessToken?: string;

  /**
   * @schema AppflowMarketoConnectorProfileCredentials#oAuthRequest
   */
  readonly oAuthRequest?: AppflowConnectorOAuthRequest;

}

/**
 * @schema AppflowRedshiftConnectorProfileCredentials
 */
export interface AppflowRedshiftConnectorProfileCredentials {
  /**
   * @schema AppflowRedshiftConnectorProfileCredentials#username
   */
  readonly username: string;

  /**
   * @schema AppflowRedshiftConnectorProfileCredentials#password
   */
  readonly password: string;

}

/**
 * @schema AppflowSalesforceConnectorProfileCredentials
 */
export interface AppflowSalesforceConnectorProfileCredentials {
  /**
   * @schema AppflowSalesforceConnectorProfileCredentials#accessToken
   */
  readonly accessToken?: string;

  /**
   * @schema AppflowSalesforceConnectorProfileCredentials#refreshToken
   */
  readonly refreshToken?: string;

  /**
   * @schema AppflowSalesforceConnectorProfileCredentials#oAuthRequest
   */
  readonly oAuthRequest?: AppflowConnectorOAuthRequest;

  /**
   * @schema AppflowSalesforceConnectorProfileCredentials#clientCredentialsArn
   */
  readonly clientCredentialsArn?: string;

}

/**
 * @schema AppflowServiceNowConnectorProfileCredentials
 */
export interface AppflowServiceNowConnectorProfileCredentials {
  /**
   * @schema AppflowServiceNowConnectorProfileCredentials#username
   */
  readonly username: string;

  /**
   * @schema AppflowServiceNowConnectorProfileCredentials#password
   */
  readonly password: string;

}

/**
 * @schema AppflowSingularConnectorProfileCredentials
 */
export interface AppflowSingularConnectorProfileCredentials {
  /**
   * @schema AppflowSingularConnectorProfileCredentials#apiKey
   */
  readonly apiKey: string;

}

/**
 * @schema AppflowSlackConnectorProfileCredentials
 */
export interface AppflowSlackConnectorProfileCredentials {
  /**
   * @schema AppflowSlackConnectorProfileCredentials#clientId
   */
  readonly clientId: string;

  /**
   * @schema AppflowSlackConnectorProfileCredentials#clientSecret
   */
  readonly clientSecret: string;

  /**
   * @schema AppflowSlackConnectorProfileCredentials#accessToken
   */
  readonly accessToken?: string;

  /**
   * @schema AppflowSlackConnectorProfileCredentials#oAuthRequest
   */
  readonly oAuthRequest?: AppflowConnectorOAuthRequest;

}

/**
 * @schema AppflowSnowflakeConnectorProfileCredentials
 */
export interface AppflowSnowflakeConnectorProfileCredentials {
  /**
   * @schema AppflowSnowflakeConnectorProfileCredentials#username
   */
  readonly username: string;

  /**
   * @schema AppflowSnowflakeConnectorProfileCredentials#password
   */
  readonly password: string;

}

/**
 * @schema AppflowTrendmicroConnectorProfileCredentials
 */
export interface AppflowTrendmicroConnectorProfileCredentials {
  /**
   * @schema AppflowTrendmicroConnectorProfileCredentials#apiSecretKey
   */
  readonly apiSecretKey: string;

}

/**
 * @schema AppflowVeevaConnectorProfileCredentials
 */
export interface AppflowVeevaConnectorProfileCredentials {
  /**
   * @schema AppflowVeevaConnectorProfileCredentials#username
   */
  readonly username: string;

  /**
   * @schema AppflowVeevaConnectorProfileCredentials#password
   */
  readonly password: string;

}

/**
 * @schema AppflowZendeskConnectorProfileCredentials
 */
export interface AppflowZendeskConnectorProfileCredentials {
  /**
   * @schema AppflowZendeskConnectorProfileCredentials#clientId
   */
  readonly clientId: string;

  /**
   * @schema AppflowZendeskConnectorProfileCredentials#clientSecret
   */
  readonly clientSecret: string;

  /**
   * @schema AppflowZendeskConnectorProfileCredentials#accessToken
   */
  readonly accessToken?: string;

  /**
   * @schema AppflowZendeskConnectorProfileCredentials#oAuthRequest
   */
  readonly oAuthRequest?: AppflowConnectorOAuthRequest;

}

/**
 * @schema AppflowScheduledTriggerProperties
 */
export interface AppflowScheduledTriggerProperties {
  /**
   * @schema AppflowScheduledTriggerProperties#scheduleExpression
   */
  readonly scheduleExpression: string;

  /**
   * @schema AppflowScheduledTriggerProperties#dataPullMode
   */
  readonly dataPullMode?: string;

  /**
   * @schema AppflowScheduledTriggerProperties#scheduleStartTime
   */
  readonly scheduleStartTime?: string;

  /**
   * @schema AppflowScheduledTriggerProperties#scheduleEndTime
   */
  readonly scheduleEndTime?: string;

  /**
   * @schema AppflowScheduledTriggerProperties#timezone
   */
  readonly timezone?: string;

}

/**
 * @schema AppflowAmplitudeSourceProperties
 */
export interface AppflowAmplitudeSourceProperties {
  /**
   * @schema AppflowAmplitudeSourceProperties#object
   */
  readonly object: string;

}

/**
 * @schema AppflowDatadogSourceProperties
 */
export interface AppflowDatadogSourceProperties {
  /**
   * @schema AppflowDatadogSourceProperties#object
   */
  readonly object: string;

}

/**
 * @schema AppflowDynatraceSourceProperties
 */
export interface AppflowDynatraceSourceProperties {
  /**
   * @schema AppflowDynatraceSourceProperties#object
   */
  readonly object: string;

}

/**
 * @schema AppflowGoogleAnalyticsSourceProperties
 */
export interface AppflowGoogleAnalyticsSourceProperties {
  /**
   * @schema AppflowGoogleAnalyticsSourceProperties#object
   */
  readonly object: string;

}

/**
 * @schema AppflowInforNexusSourceProperties
 */
export interface AppflowInforNexusSourceProperties {
  /**
   * @schema AppflowInforNexusSourceProperties#object
   */
  readonly object: string;

}

/**
 * @schema AppflowMarketoSourceProperties
 */
export interface AppflowMarketoSourceProperties {
  /**
   * @schema AppflowMarketoSourceProperties#object
   */
  readonly object: string;

}

/**
 * @schema AppflowS3SourceProperties
 */
export interface AppflowS3SourceProperties {
  /**
   * @schema AppflowS3SourceProperties#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema AppflowS3SourceProperties#bucketPrefix
   */
  readonly bucketPrefix?: string;

}

/**
 * @schema AppflowSalesforceSourceProperties
 */
export interface AppflowSalesforceSourceProperties {
  /**
   * @schema AppflowSalesforceSourceProperties#object
   */
  readonly object: string;

  /**
   * @schema AppflowSalesforceSourceProperties#enableDynamicFieldUpdate
   */
  readonly enableDynamicFieldUpdate?: boolean;

  /**
   * @schema AppflowSalesforceSourceProperties#includeDeletedRecords
   */
  readonly includeDeletedRecords?: boolean;

}

/**
 * @schema AppflowServiceNowSourceProperties
 */
export interface AppflowServiceNowSourceProperties {
  /**
   * @schema AppflowServiceNowSourceProperties#object
   */
  readonly object: string;

}

/**
 * @schema AppflowSingularSourceProperties
 */
export interface AppflowSingularSourceProperties {
  /**
   * @schema AppflowSingularSourceProperties#object
   */
  readonly object: string;

}

/**
 * @schema AppflowSlackSourceProperties
 */
export interface AppflowSlackSourceProperties {
  /**
   * @schema AppflowSlackSourceProperties#object
   */
  readonly object: string;

}

/**
 * @schema AppflowTrendmicroSourceProperties
 */
export interface AppflowTrendmicroSourceProperties {
  /**
   * @schema AppflowTrendmicroSourceProperties#object
   */
  readonly object: string;

}

/**
 * @schema AppflowVeevaSourceProperties
 */
export interface AppflowVeevaSourceProperties {
  /**
   * @schema AppflowVeevaSourceProperties#object
   */
  readonly object: string;

}

/**
 * @schema AppflowZendeskSourceProperties
 */
export interface AppflowZendeskSourceProperties {
  /**
   * @schema AppflowZendeskSourceProperties#object
   */
  readonly object: string;

}

/**
 * @schema AppflowRedshiftDestinationProperties
 */
export interface AppflowRedshiftDestinationProperties {
  /**
   * @schema AppflowRedshiftDestinationProperties#object
   */
  readonly object: string;

  /**
   * @schema AppflowRedshiftDestinationProperties#intermediateBucketName
   */
  readonly intermediateBucketName: string;

  /**
   * @schema AppflowRedshiftDestinationProperties#bucketPrefix
   */
  readonly bucketPrefix?: string;

  /**
   * @schema AppflowRedshiftDestinationProperties#errorHandlingConfig
   */
  readonly errorHandlingConfig?: AppflowErrorHandlingConfig;

}

/**
 * @schema AppflowS3DestinationProperties
 */
export interface AppflowS3DestinationProperties {
  /**
   * @schema AppflowS3DestinationProperties#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema AppflowS3DestinationProperties#bucketPrefix
   */
  readonly bucketPrefix?: string;

  /**
   * @schema AppflowS3DestinationProperties#s3OutputFormatConfig
   */
  readonly s3OutputFormatConfig?: AppflowS3OutputFormatConfig;

}

/**
 * @schema AppflowSalesforceDestinationProperties
 */
export interface AppflowSalesforceDestinationProperties {
  /**
   * @schema AppflowSalesforceDestinationProperties#object
   */
  readonly object: string;

  /**
   * @schema AppflowSalesforceDestinationProperties#idFieldNames
   */
  readonly idFieldNames?: string[];

  /**
   * @schema AppflowSalesforceDestinationProperties#errorHandlingConfig
   */
  readonly errorHandlingConfig?: AppflowErrorHandlingConfig;

  /**
   * @schema AppflowSalesforceDestinationProperties#writeOperationType
   */
  readonly writeOperationType?: string;

}

/**
 * @schema AppflowSnowflakeDestinationProperties
 */
export interface AppflowSnowflakeDestinationProperties {
  /**
   * @schema AppflowSnowflakeDestinationProperties#object
   */
  readonly object: string;

  /**
   * @schema AppflowSnowflakeDestinationProperties#intermediateBucketName
   */
  readonly intermediateBucketName: string;

  /**
   * @schema AppflowSnowflakeDestinationProperties#bucketPrefix
   */
  readonly bucketPrefix?: string;

  /**
   * @schema AppflowSnowflakeDestinationProperties#errorHandlingConfig
   */
  readonly errorHandlingConfig?: AppflowErrorHandlingConfig;

}

/**
 * @schema AppflowEventBridgeDestinationProperties
 */
export interface AppflowEventBridgeDestinationProperties {
  /**
   * @schema AppflowEventBridgeDestinationProperties#object
   */
  readonly object: string;

  /**
   * @schema AppflowEventBridgeDestinationProperties#errorHandlingConfig
   */
  readonly errorHandlingConfig?: AppflowErrorHandlingConfig;

}

/**
 * @schema AppflowUpsolverDestinationProperties
 */
export interface AppflowUpsolverDestinationProperties {
  /**
   * @schema AppflowUpsolverDestinationProperties#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema AppflowUpsolverDestinationProperties#bucketPrefix
   */
  readonly bucketPrefix?: string;

  /**
   * @schema AppflowUpsolverDestinationProperties#s3OutputFormatConfig
   */
  readonly s3OutputFormatConfig: AppflowUpsolverS3OutputFormatConfig;

}

/**
 * @schema AppflowFieldTypeDetails
 */
export interface AppflowFieldTypeDetails {
  /**
   * @schema AppflowFieldTypeDetails#fieldType
   */
  readonly fieldType: string;

  /**
   * @schema AppflowFieldTypeDetails#filterOperators
   */
  readonly filterOperators: string[];

  /**
   * @schema AppflowFieldTypeDetails#supportedValues
   */
  readonly supportedValues?: string[];

}

/**
 * @schema AppflowAmplitudeMetadata
 */
export interface AppflowAmplitudeMetadata {
}

/**
 * @schema AppflowDatadogMetadata
 */
export interface AppflowDatadogMetadata {
}

/**
 * @schema AppflowDynatraceMetadata
 */
export interface AppflowDynatraceMetadata {
}

/**
 * @schema AppflowGoogleAnalyticsMetadata
 */
export interface AppflowGoogleAnalyticsMetadata {
  /**
   * @schema AppflowGoogleAnalyticsMetadata#oAuthScopes
   */
  readonly oAuthScopes?: string[];

}

/**
 * @schema AppflowInforNexusMetadata
 */
export interface AppflowInforNexusMetadata {
}

/**
 * @schema AppflowMarketoMetadata
 */
export interface AppflowMarketoMetadata {
}

/**
 * @schema AppflowRedshiftMetadata
 */
export interface AppflowRedshiftMetadata {
}

/**
 * @schema AppflowS3Metadata
 */
export interface AppflowS3Metadata {
}

/**
 * @schema AppflowSalesforceMetadata
 */
export interface AppflowSalesforceMetadata {
  /**
   * @schema AppflowSalesforceMetadata#oAuthScopes
   */
  readonly oAuthScopes?: string[];

}

/**
 * @schema AppflowServiceNowMetadata
 */
export interface AppflowServiceNowMetadata {
}

/**
 * @schema AppflowSingularMetadata
 */
export interface AppflowSingularMetadata {
}

/**
 * @schema AppflowSlackMetadata
 */
export interface AppflowSlackMetadata {
  /**
   * @schema AppflowSlackMetadata#oAuthScopes
   */
  readonly oAuthScopes?: string[];

}

/**
 * @schema AppflowSnowflakeMetadata
 */
export interface AppflowSnowflakeMetadata {
  /**
   * @schema AppflowSnowflakeMetadata#supportedRegions
   */
  readonly supportedRegions?: string[];

}

/**
 * @schema AppflowTrendmicroMetadata
 */
export interface AppflowTrendmicroMetadata {
}

/**
 * @schema AppflowVeevaMetadata
 */
export interface AppflowVeevaMetadata {
}

/**
 * @schema AppflowZendeskMetadata
 */
export interface AppflowZendeskMetadata {
  /**
   * @schema AppflowZendeskMetadata#oAuthScopes
   */
  readonly oAuthScopes?: string[];

}

/**
 * @schema AppflowEventBridgeMetadata
 */
export interface AppflowEventBridgeMetadata {
}

/**
 * @schema AppflowUpsolverMetadata
 */
export interface AppflowUpsolverMetadata {
}

/**
 * @schema AppflowErrorInfo
 */
export interface AppflowErrorInfo {
  /**
   * @schema AppflowErrorInfo#putFailuresCount
   */
  readonly putFailuresCount?: number;

  /**
   * @schema AppflowErrorInfo#executionMessage
   */
  readonly executionMessage?: string;

}

/**
 * @schema AppflowConnectorOAuthRequest
 */
export interface AppflowConnectorOAuthRequest {
  /**
   * @schema AppflowConnectorOAuthRequest#authCode
   */
  readonly authCode?: string;

  /**
   * @schema AppflowConnectorOAuthRequest#redirectUri
   */
  readonly redirectUri?: string;

}

/**
 * @schema AppflowErrorHandlingConfig
 */
export interface AppflowErrorHandlingConfig {
  /**
   * @schema AppflowErrorHandlingConfig#failOnFirstDestinationError
   */
  readonly failOnFirstDestinationError?: boolean;

  /**
   * @schema AppflowErrorHandlingConfig#bucketPrefix
   */
  readonly bucketPrefix?: string;

  /**
   * @schema AppflowErrorHandlingConfig#bucketName
   */
  readonly bucketName?: string;

}

/**
 * @schema AppflowS3OutputFormatConfig
 */
export interface AppflowS3OutputFormatConfig {
  /**
   * @schema AppflowS3OutputFormatConfig#fileType
   */
  readonly fileType?: string;

  /**
   * @schema AppflowS3OutputFormatConfig#prefixConfig
   */
  readonly prefixConfig?: AppflowPrefixConfig;

  /**
   * @schema AppflowS3OutputFormatConfig#aggregationConfig
   */
  readonly aggregationConfig?: AppflowAggregationConfig;

}

/**
 * @schema AppflowUpsolverS3OutputFormatConfig
 */
export interface AppflowUpsolverS3OutputFormatConfig {
  /**
   * @schema AppflowUpsolverS3OutputFormatConfig#fileType
   */
  readonly fileType?: string;

  /**
   * @schema AppflowUpsolverS3OutputFormatConfig#prefixConfig
   */
  readonly prefixConfig: AppflowPrefixConfig;

  /**
   * @schema AppflowUpsolverS3OutputFormatConfig#aggregationConfig
   */
  readonly aggregationConfig?: AppflowAggregationConfig;

}

/**
 * @schema AppflowPrefixConfig
 */
export interface AppflowPrefixConfig {
  /**
   * @schema AppflowPrefixConfig#prefixType
   */
  readonly prefixType?: string;

  /**
   * @schema AppflowPrefixConfig#prefixFormat
   */
  readonly prefixFormat?: string;

}

/**
 * @schema AppflowAggregationConfig
 */
export interface AppflowAggregationConfig {
  /**
   * @schema AppflowAggregationConfig#aggregationType
   */
  readonly aggregationType?: string;

}
