/**
 * @schema ConnectAssociateApprovedOriginRequest
 */
export interface ConnectAssociateApprovedOriginRequest {
  /**
   * @schema ConnectAssociateApprovedOriginRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectAssociateApprovedOriginRequest#Origin
   */
  readonly origin: string;

}

/**
 * @schema ConnectAssociateInstanceStorageConfigRequest
 */
export interface ConnectAssociateInstanceStorageConfigRequest {
  /**
   * @schema ConnectAssociateInstanceStorageConfigRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectAssociateInstanceStorageConfigRequest#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema ConnectAssociateInstanceStorageConfigRequest#StorageConfig
   */
  readonly storageConfig: ConnectInstanceStorageConfig;

}

/**
 * @schema ConnectAssociateInstanceStorageConfigResponse
 */
export interface ConnectAssociateInstanceStorageConfigResponse {
  /**
   * @schema ConnectAssociateInstanceStorageConfigResponse#AssociationId
   */
  readonly associationId?: string;

}

/**
 * @schema ConnectAssociateLambdaFunctionRequest
 */
export interface ConnectAssociateLambdaFunctionRequest {
  /**
   * @schema ConnectAssociateLambdaFunctionRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectAssociateLambdaFunctionRequest#FunctionArn
   */
  readonly functionArn: string;

}

/**
 * @schema ConnectAssociateLexBotRequest
 */
export interface ConnectAssociateLexBotRequest {
  /**
   * @schema ConnectAssociateLexBotRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectAssociateLexBotRequest#LexBot
   */
  readonly lexBot: ConnectLexBot;

}

/**
 * @schema ConnectAssociateRoutingProfileQueuesRequest
 */
export interface ConnectAssociateRoutingProfileQueuesRequest {
  /**
   * @schema ConnectAssociateRoutingProfileQueuesRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectAssociateRoutingProfileQueuesRequest#RoutingProfileId
   */
  readonly routingProfileId: string;

  /**
   * @schema ConnectAssociateRoutingProfileQueuesRequest#QueueConfigs
   */
  readonly queueConfigs: ConnectRoutingProfileQueueConfig[];

}

/**
 * @schema ConnectAssociateSecurityKeyRequest
 */
export interface ConnectAssociateSecurityKeyRequest {
  /**
   * @schema ConnectAssociateSecurityKeyRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectAssociateSecurityKeyRequest#Key
   */
  readonly key: string;

}

/**
 * @schema ConnectAssociateSecurityKeyResponse
 */
export interface ConnectAssociateSecurityKeyResponse {
  /**
   * @schema ConnectAssociateSecurityKeyResponse#AssociationId
   */
  readonly associationId?: string;

}

/**
 * @schema ConnectCreateContactFlowRequest
 */
export interface ConnectCreateContactFlowRequest {
  /**
   * @schema ConnectCreateContactFlowRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectCreateContactFlowRequest#Name
   */
  readonly name: string;

  /**
   * @schema ConnectCreateContactFlowRequest#Type
   */
  readonly type: string;

  /**
   * @schema ConnectCreateContactFlowRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ConnectCreateContactFlowRequest#Content
   */
  readonly content: string;

  /**
   * @schema ConnectCreateContactFlowRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ConnectCreateContactFlowResponse
 */
export interface ConnectCreateContactFlowResponse {
  /**
   * @schema ConnectCreateContactFlowResponse#ContactFlowId
   */
  readonly contactFlowId?: string;

  /**
   * @schema ConnectCreateContactFlowResponse#ContactFlowArn
   */
  readonly contactFlowArn?: string;

}

/**
 * @schema ConnectCreateInstanceRequest
 */
export interface ConnectCreateInstanceRequest {
  /**
   * @schema ConnectCreateInstanceRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ConnectCreateInstanceRequest#IdentityManagementType
   */
  readonly identityManagementType: string;

  /**
   * @schema ConnectCreateInstanceRequest#InstanceAlias
   */
  readonly instanceAlias?: string;

  /**
   * @schema ConnectCreateInstanceRequest#DirectoryId
   */
  readonly directoryId?: string;

  /**
   * @schema ConnectCreateInstanceRequest#InboundCallsEnabled
   */
  readonly inboundCallsEnabled: boolean;

  /**
   * @schema ConnectCreateInstanceRequest#OutboundCallsEnabled
   */
  readonly outboundCallsEnabled: boolean;

}

/**
 * @schema ConnectCreateInstanceResponse
 */
export interface ConnectCreateInstanceResponse {
  /**
   * @schema ConnectCreateInstanceResponse#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectCreateInstanceResponse#Arn
   */
  readonly arn?: string;

}

/**
 * @schema ConnectCreateRoutingProfileRequest
 */
export interface ConnectCreateRoutingProfileRequest {
  /**
   * @schema ConnectCreateRoutingProfileRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectCreateRoutingProfileRequest#Name
   */
  readonly name: string;

  /**
   * @schema ConnectCreateRoutingProfileRequest#Description
   */
  readonly description: string;

  /**
   * @schema ConnectCreateRoutingProfileRequest#DefaultOutboundQueueId
   */
  readonly defaultOutboundQueueId: string;

  /**
   * @schema ConnectCreateRoutingProfileRequest#QueueConfigs
   */
  readonly queueConfigs?: ConnectRoutingProfileQueueConfig[];

  /**
   * @schema ConnectCreateRoutingProfileRequest#MediaConcurrencies
   */
  readonly mediaConcurrencies: ConnectMediaConcurrency[];

  /**
   * @schema ConnectCreateRoutingProfileRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ConnectCreateRoutingProfileResponse
 */
export interface ConnectCreateRoutingProfileResponse {
  /**
   * @schema ConnectCreateRoutingProfileResponse#RoutingProfileArn
   */
  readonly routingProfileArn?: string;

  /**
   * @schema ConnectCreateRoutingProfileResponse#RoutingProfileId
   */
  readonly routingProfileId?: string;

}

/**
 * @schema ConnectCreateUserRequest
 */
export interface ConnectCreateUserRequest {
  /**
   * @schema ConnectCreateUserRequest#Username
   */
  readonly username: string;

  /**
   * @schema ConnectCreateUserRequest#Password
   */
  readonly password?: string;

  /**
   * @schema ConnectCreateUserRequest#IdentityInfo
   */
  readonly identityInfo?: ConnectUserIdentityInfo;

  /**
   * @schema ConnectCreateUserRequest#PhoneConfig
   */
  readonly phoneConfig: ConnectUserPhoneConfig;

  /**
   * @schema ConnectCreateUserRequest#DirectoryUserId
   */
  readonly directoryUserId?: string;

  /**
   * @schema ConnectCreateUserRequest#SecurityProfileIds
   */
  readonly securityProfileIds: string[];

  /**
   * @schema ConnectCreateUserRequest#RoutingProfileId
   */
  readonly routingProfileId: string;

  /**
   * @schema ConnectCreateUserRequest#HierarchyGroupId
   */
  readonly hierarchyGroupId?: string;

  /**
   * @schema ConnectCreateUserRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectCreateUserRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ConnectCreateUserResponse
 */
export interface ConnectCreateUserResponse {
  /**
   * @schema ConnectCreateUserResponse#UserId
   */
  readonly userId?: string;

  /**
   * @schema ConnectCreateUserResponse#UserArn
   */
  readonly userArn?: string;

}

/**
 * @schema ConnectCreateUserHierarchyGroupRequest
 */
export interface ConnectCreateUserHierarchyGroupRequest {
  /**
   * @schema ConnectCreateUserHierarchyGroupRequest#Name
   */
  readonly name: string;

  /**
   * @schema ConnectCreateUserHierarchyGroupRequest#ParentGroupId
   */
  readonly parentGroupId?: string;

  /**
   * @schema ConnectCreateUserHierarchyGroupRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema ConnectCreateUserHierarchyGroupResponse
 */
export interface ConnectCreateUserHierarchyGroupResponse {
  /**
   * @schema ConnectCreateUserHierarchyGroupResponse#HierarchyGroupId
   */
  readonly hierarchyGroupId?: string;

  /**
   * @schema ConnectCreateUserHierarchyGroupResponse#HierarchyGroupArn
   */
  readonly hierarchyGroupArn?: string;

}

/**
 * @schema ConnectDeleteInstanceRequest
 */
export interface ConnectDeleteInstanceRequest {
  /**
   * @schema ConnectDeleteInstanceRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema ConnectDeleteUserRequest
 */
export interface ConnectDeleteUserRequest {
  /**
   * @schema ConnectDeleteUserRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectDeleteUserRequest#UserId
   */
  readonly userId: string;

}

/**
 * @schema ConnectDeleteUserHierarchyGroupRequest
 */
export interface ConnectDeleteUserHierarchyGroupRequest {
  /**
   * @schema ConnectDeleteUserHierarchyGroupRequest#HierarchyGroupId
   */
  readonly hierarchyGroupId: string;

  /**
   * @schema ConnectDeleteUserHierarchyGroupRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema ConnectDescribeContactFlowRequest
 */
export interface ConnectDescribeContactFlowRequest {
  /**
   * @schema ConnectDescribeContactFlowRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectDescribeContactFlowRequest#ContactFlowId
   */
  readonly contactFlowId: string;

}

/**
 * @schema ConnectDescribeContactFlowResponse
 */
export interface ConnectDescribeContactFlowResponse {
  /**
   * @schema ConnectDescribeContactFlowResponse#ContactFlow
   */
  readonly contactFlow?: ConnectContactFlow;

}

/**
 * @schema ConnectDescribeInstanceRequest
 */
export interface ConnectDescribeInstanceRequest {
  /**
   * @schema ConnectDescribeInstanceRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema ConnectDescribeInstanceResponse
 */
export interface ConnectDescribeInstanceResponse {
  /**
   * @schema ConnectDescribeInstanceResponse#Instance
   */
  readonly instance?: ConnectInstance;

}

/**
 * @schema ConnectDescribeInstanceAttributeRequest
 */
export interface ConnectDescribeInstanceAttributeRequest {
  /**
   * @schema ConnectDescribeInstanceAttributeRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectDescribeInstanceAttributeRequest#AttributeType
   */
  readonly attributeType: string;

}

/**
 * @schema ConnectDescribeInstanceAttributeResponse
 */
export interface ConnectDescribeInstanceAttributeResponse {
  /**
   * @schema ConnectDescribeInstanceAttributeResponse#Attribute
   */
  readonly attribute?: ConnectAttribute;

}

/**
 * @schema ConnectDescribeInstanceStorageConfigRequest
 */
export interface ConnectDescribeInstanceStorageConfigRequest {
  /**
   * @schema ConnectDescribeInstanceStorageConfigRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectDescribeInstanceStorageConfigRequest#AssociationId
   */
  readonly associationId: string;

  /**
   * @schema ConnectDescribeInstanceStorageConfigRequest#ResourceType
   */
  readonly resourceType: string;

}

/**
 * @schema ConnectDescribeInstanceStorageConfigResponse
 */
export interface ConnectDescribeInstanceStorageConfigResponse {
  /**
   * @schema ConnectDescribeInstanceStorageConfigResponse#StorageConfig
   */
  readonly storageConfig?: ConnectInstanceStorageConfig;

}

/**
 * @schema ConnectDescribeRoutingProfileRequest
 */
export interface ConnectDescribeRoutingProfileRequest {
  /**
   * @schema ConnectDescribeRoutingProfileRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectDescribeRoutingProfileRequest#RoutingProfileId
   */
  readonly routingProfileId: string;

}

/**
 * @schema ConnectDescribeRoutingProfileResponse
 */
export interface ConnectDescribeRoutingProfileResponse {
  /**
   * @schema ConnectDescribeRoutingProfileResponse#RoutingProfile
   */
  readonly routingProfile?: ConnectRoutingProfile;

}

/**
 * @schema ConnectDescribeUserRequest
 */
export interface ConnectDescribeUserRequest {
  /**
   * @schema ConnectDescribeUserRequest#UserId
   */
  readonly userId: string;

  /**
   * @schema ConnectDescribeUserRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema ConnectDescribeUserResponse
 */
export interface ConnectDescribeUserResponse {
  /**
   * @schema ConnectDescribeUserResponse#User
   */
  readonly user?: ConnectUser;

}

/**
 * @schema ConnectDescribeUserHierarchyGroupRequest
 */
export interface ConnectDescribeUserHierarchyGroupRequest {
  /**
   * @schema ConnectDescribeUserHierarchyGroupRequest#HierarchyGroupId
   */
  readonly hierarchyGroupId: string;

  /**
   * @schema ConnectDescribeUserHierarchyGroupRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema ConnectDescribeUserHierarchyGroupResponse
 */
export interface ConnectDescribeUserHierarchyGroupResponse {
  /**
   * @schema ConnectDescribeUserHierarchyGroupResponse#HierarchyGroup
   */
  readonly hierarchyGroup?: ConnectHierarchyGroup;

}

/**
 * @schema ConnectDescribeUserHierarchyStructureRequest
 */
export interface ConnectDescribeUserHierarchyStructureRequest {
  /**
   * @schema ConnectDescribeUserHierarchyStructureRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema ConnectDescribeUserHierarchyStructureResponse
 */
export interface ConnectDescribeUserHierarchyStructureResponse {
  /**
   * @schema ConnectDescribeUserHierarchyStructureResponse#HierarchyStructure
   */
  readonly hierarchyStructure?: ConnectHierarchyStructure;

}

/**
 * @schema ConnectDisassociateApprovedOriginRequest
 */
export interface ConnectDisassociateApprovedOriginRequest {
  /**
   * @schema ConnectDisassociateApprovedOriginRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectDisassociateApprovedOriginRequest#Origin
   */
  readonly origin: string;

}

/**
 * @schema ConnectDisassociateInstanceStorageConfigRequest
 */
export interface ConnectDisassociateInstanceStorageConfigRequest {
  /**
   * @schema ConnectDisassociateInstanceStorageConfigRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectDisassociateInstanceStorageConfigRequest#AssociationId
   */
  readonly associationId: string;

  /**
   * @schema ConnectDisassociateInstanceStorageConfigRequest#ResourceType
   */
  readonly resourceType: string;

}

/**
 * @schema ConnectDisassociateLambdaFunctionRequest
 */
export interface ConnectDisassociateLambdaFunctionRequest {
  /**
   * @schema ConnectDisassociateLambdaFunctionRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectDisassociateLambdaFunctionRequest#FunctionArn
   */
  readonly functionArn: string;

}

/**
 * @schema ConnectDisassociateLexBotRequest
 */
export interface ConnectDisassociateLexBotRequest {
  /**
   * @schema ConnectDisassociateLexBotRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectDisassociateLexBotRequest#BotName
   */
  readonly botName: string;

  /**
   * @schema ConnectDisassociateLexBotRequest#LexRegion
   */
  readonly lexRegion: string;

}

/**
 * @schema ConnectDisassociateRoutingProfileQueuesRequest
 */
export interface ConnectDisassociateRoutingProfileQueuesRequest {
  /**
   * @schema ConnectDisassociateRoutingProfileQueuesRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectDisassociateRoutingProfileQueuesRequest#RoutingProfileId
   */
  readonly routingProfileId: string;

  /**
   * @schema ConnectDisassociateRoutingProfileQueuesRequest#QueueReferences
   */
  readonly queueReferences: ConnectRoutingProfileQueueReference[];

}

/**
 * @schema ConnectDisassociateSecurityKeyRequest
 */
export interface ConnectDisassociateSecurityKeyRequest {
  /**
   * @schema ConnectDisassociateSecurityKeyRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectDisassociateSecurityKeyRequest#AssociationId
   */
  readonly associationId: string;

}

/**
 * @schema ConnectGetContactAttributesRequest
 */
export interface ConnectGetContactAttributesRequest {
  /**
   * @schema ConnectGetContactAttributesRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectGetContactAttributesRequest#InitialContactId
   */
  readonly initialContactId: string;

}

/**
 * @schema ConnectGetContactAttributesResponse
 */
export interface ConnectGetContactAttributesResponse {
  /**
   * @schema ConnectGetContactAttributesResponse#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema ConnectGetCurrentMetricDataRequest
 */
export interface ConnectGetCurrentMetricDataRequest {
  /**
   * @schema ConnectGetCurrentMetricDataRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectGetCurrentMetricDataRequest#Filters
   */
  readonly filters: ConnectFilters;

  /**
   * @schema ConnectGetCurrentMetricDataRequest#Groupings
   */
  readonly groupings?: string[];

  /**
   * @schema ConnectGetCurrentMetricDataRequest#CurrentMetrics
   */
  readonly currentMetrics: ConnectCurrentMetric[];

  /**
   * @schema ConnectGetCurrentMetricDataRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectGetCurrentMetricDataRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ConnectGetCurrentMetricDataResponse
 */
export interface ConnectGetCurrentMetricDataResponse {
  /**
   * @schema ConnectGetCurrentMetricDataResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectGetCurrentMetricDataResponse#MetricResults
   */
  readonly metricResults?: ConnectCurrentMetricResult[];

  /**
   * @schema ConnectGetCurrentMetricDataResponse#DataSnapshotTime
   */
  readonly dataSnapshotTime?: string;

}

/**
 * @schema ConnectGetFederationTokenRequest
 */
export interface ConnectGetFederationTokenRequest {
  /**
   * @schema ConnectGetFederationTokenRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema ConnectGetFederationTokenResponse
 */
export interface ConnectGetFederationTokenResponse {
  /**
   * @schema ConnectGetFederationTokenResponse#Credentials
   */
  readonly credentials?: ConnectCredentials;

}

/**
 * @schema ConnectGetMetricDataRequest
 */
export interface ConnectGetMetricDataRequest {
  /**
   * @schema ConnectGetMetricDataRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectGetMetricDataRequest#StartTime
   */
  readonly startTime: string;

  /**
   * @schema ConnectGetMetricDataRequest#EndTime
   */
  readonly endTime: string;

  /**
   * @schema ConnectGetMetricDataRequest#Filters
   */
  readonly filters: ConnectFilters;

  /**
   * @schema ConnectGetMetricDataRequest#Groupings
   */
  readonly groupings?: string[];

  /**
   * @schema ConnectGetMetricDataRequest#HistoricalMetrics
   */
  readonly historicalMetrics: ConnectHistoricalMetric[];

  /**
   * @schema ConnectGetMetricDataRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectGetMetricDataRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ConnectGetMetricDataResponse
 */
export interface ConnectGetMetricDataResponse {
  /**
   * @schema ConnectGetMetricDataResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectGetMetricDataResponse#MetricResults
   */
  readonly metricResults?: ConnectHistoricalMetricResult[];

}

/**
 * @schema ConnectListApprovedOriginsRequest
 */
export interface ConnectListApprovedOriginsRequest {
  /**
   * @schema ConnectListApprovedOriginsRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectListApprovedOriginsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListApprovedOriginsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ConnectListApprovedOriginsResponse
 */
export interface ConnectListApprovedOriginsResponse {
  /**
   * @schema ConnectListApprovedOriginsResponse#Origins
   */
  readonly origins?: string[];

  /**
   * @schema ConnectListApprovedOriginsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ConnectListContactFlowsRequest
 */
export interface ConnectListContactFlowsRequest {
  /**
   * @schema ConnectListContactFlowsRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectListContactFlowsRequest#ContactFlowTypes
   */
  readonly contactFlowTypes?: string[];

  /**
   * @schema ConnectListContactFlowsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListContactFlowsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ConnectListContactFlowsResponse
 */
export interface ConnectListContactFlowsResponse {
  /**
   * @schema ConnectListContactFlowsResponse#ContactFlowSummaryList
   */
  readonly contactFlowSummaryList?: ConnectContactFlowSummary[];

  /**
   * @schema ConnectListContactFlowsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ConnectListHoursOfOperationsRequest
 */
export interface ConnectListHoursOfOperationsRequest {
  /**
   * @schema ConnectListHoursOfOperationsRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectListHoursOfOperationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListHoursOfOperationsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ConnectListHoursOfOperationsResponse
 */
export interface ConnectListHoursOfOperationsResponse {
  /**
   * @schema ConnectListHoursOfOperationsResponse#HoursOfOperationSummaryList
   */
  readonly hoursOfOperationSummaryList?: ConnectHoursOfOperationSummary[];

  /**
   * @schema ConnectListHoursOfOperationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ConnectListInstanceAttributesRequest
 */
export interface ConnectListInstanceAttributesRequest {
  /**
   * @schema ConnectListInstanceAttributesRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectListInstanceAttributesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListInstanceAttributesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ConnectListInstanceAttributesResponse
 */
export interface ConnectListInstanceAttributesResponse {
  /**
   * @schema ConnectListInstanceAttributesResponse#Attributes
   */
  readonly attributes?: ConnectAttribute[];

  /**
   * @schema ConnectListInstanceAttributesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ConnectListInstanceStorageConfigsRequest
 */
export interface ConnectListInstanceStorageConfigsRequest {
  /**
   * @schema ConnectListInstanceStorageConfigsRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectListInstanceStorageConfigsRequest#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema ConnectListInstanceStorageConfigsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListInstanceStorageConfigsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ConnectListInstanceStorageConfigsResponse
 */
export interface ConnectListInstanceStorageConfigsResponse {
  /**
   * @schema ConnectListInstanceStorageConfigsResponse#StorageConfigs
   */
  readonly storageConfigs?: ConnectInstanceStorageConfig[];

  /**
   * @schema ConnectListInstanceStorageConfigsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ConnectListInstancesRequest
 */
export interface ConnectListInstancesRequest {
  /**
   * @schema ConnectListInstancesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListInstancesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ConnectListInstancesResponse
 */
export interface ConnectListInstancesResponse {
  /**
   * @schema ConnectListInstancesResponse#InstanceSummaryList
   */
  readonly instanceSummaryList?: ConnectInstanceSummary[];

  /**
   * @schema ConnectListInstancesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ConnectListLambdaFunctionsRequest
 */
export interface ConnectListLambdaFunctionsRequest {
  /**
   * @schema ConnectListLambdaFunctionsRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectListLambdaFunctionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListLambdaFunctionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ConnectListLambdaFunctionsResponse
 */
export interface ConnectListLambdaFunctionsResponse {
  /**
   * @schema ConnectListLambdaFunctionsResponse#LambdaFunctions
   */
  readonly lambdaFunctions?: string[];

  /**
   * @schema ConnectListLambdaFunctionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ConnectListLexBotsRequest
 */
export interface ConnectListLexBotsRequest {
  /**
   * @schema ConnectListLexBotsRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectListLexBotsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListLexBotsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ConnectListLexBotsResponse
 */
export interface ConnectListLexBotsResponse {
  /**
   * @schema ConnectListLexBotsResponse#LexBots
   */
  readonly lexBots?: ConnectLexBot[];

  /**
   * @schema ConnectListLexBotsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ConnectListPhoneNumbersRequest
 */
export interface ConnectListPhoneNumbersRequest {
  /**
   * @schema ConnectListPhoneNumbersRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectListPhoneNumbersRequest#PhoneNumberTypes
   */
  readonly phoneNumberTypes?: string[];

  /**
   * @schema ConnectListPhoneNumbersRequest#PhoneNumberCountryCodes
   */
  readonly phoneNumberCountryCodes?: string[];

  /**
   * @schema ConnectListPhoneNumbersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListPhoneNumbersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ConnectListPhoneNumbersResponse
 */
export interface ConnectListPhoneNumbersResponse {
  /**
   * @schema ConnectListPhoneNumbersResponse#PhoneNumberSummaryList
   */
  readonly phoneNumberSummaryList?: ConnectPhoneNumberSummary[];

  /**
   * @schema ConnectListPhoneNumbersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ConnectListPromptsRequest
 */
export interface ConnectListPromptsRequest {
  /**
   * @schema ConnectListPromptsRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectListPromptsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListPromptsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ConnectListPromptsResponse
 */
export interface ConnectListPromptsResponse {
  /**
   * @schema ConnectListPromptsResponse#PromptSummaryList
   */
  readonly promptSummaryList?: ConnectPromptSummary[];

  /**
   * @schema ConnectListPromptsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ConnectListQueuesRequest
 */
export interface ConnectListQueuesRequest {
  /**
   * @schema ConnectListQueuesRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectListQueuesRequest#QueueTypes
   */
  readonly queueTypes?: string[];

  /**
   * @schema ConnectListQueuesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListQueuesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ConnectListQueuesResponse
 */
export interface ConnectListQueuesResponse {
  /**
   * @schema ConnectListQueuesResponse#QueueSummaryList
   */
  readonly queueSummaryList?: ConnectQueueSummary[];

  /**
   * @schema ConnectListQueuesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ConnectListRoutingProfileQueuesRequest
 */
export interface ConnectListRoutingProfileQueuesRequest {
  /**
   * @schema ConnectListRoutingProfileQueuesRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectListRoutingProfileQueuesRequest#RoutingProfileId
   */
  readonly routingProfileId: string;

  /**
   * @schema ConnectListRoutingProfileQueuesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListRoutingProfileQueuesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ConnectListRoutingProfileQueuesResponse
 */
export interface ConnectListRoutingProfileQueuesResponse {
  /**
   * @schema ConnectListRoutingProfileQueuesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListRoutingProfileQueuesResponse#RoutingProfileQueueConfigSummaryList
   */
  readonly routingProfileQueueConfigSummaryList?: ConnectRoutingProfileQueueConfigSummary[];

}

/**
 * @schema ConnectListRoutingProfilesRequest
 */
export interface ConnectListRoutingProfilesRequest {
  /**
   * @schema ConnectListRoutingProfilesRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectListRoutingProfilesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListRoutingProfilesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ConnectListRoutingProfilesResponse
 */
export interface ConnectListRoutingProfilesResponse {
  /**
   * @schema ConnectListRoutingProfilesResponse#RoutingProfileSummaryList
   */
  readonly routingProfileSummaryList?: ConnectRoutingProfileSummary[];

  /**
   * @schema ConnectListRoutingProfilesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ConnectListSecurityKeysRequest
 */
export interface ConnectListSecurityKeysRequest {
  /**
   * @schema ConnectListSecurityKeysRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectListSecurityKeysRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListSecurityKeysRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ConnectListSecurityKeysResponse
 */
export interface ConnectListSecurityKeysResponse {
  /**
   * @schema ConnectListSecurityKeysResponse#SecurityKeys
   */
  readonly securityKeys?: ConnectSecurityKey[];

  /**
   * @schema ConnectListSecurityKeysResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ConnectListSecurityProfilesRequest
 */
export interface ConnectListSecurityProfilesRequest {
  /**
   * @schema ConnectListSecurityProfilesRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectListSecurityProfilesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListSecurityProfilesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ConnectListSecurityProfilesResponse
 */
export interface ConnectListSecurityProfilesResponse {
  /**
   * @schema ConnectListSecurityProfilesResponse#SecurityProfileSummaryList
   */
  readonly securityProfileSummaryList?: ConnectSecurityProfileSummary[];

  /**
   * @schema ConnectListSecurityProfilesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ConnectListTagsForResourceRequest
 */
export interface ConnectListTagsForResourceRequest {
  /**
   * @schema ConnectListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ConnectListTagsForResourceResponse
 */
export interface ConnectListTagsForResourceResponse {
  /**
   * @schema ConnectListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ConnectListUserHierarchyGroupsRequest
 */
export interface ConnectListUserHierarchyGroupsRequest {
  /**
   * @schema ConnectListUserHierarchyGroupsRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectListUserHierarchyGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListUserHierarchyGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ConnectListUserHierarchyGroupsResponse
 */
export interface ConnectListUserHierarchyGroupsResponse {
  /**
   * @schema ConnectListUserHierarchyGroupsResponse#UserHierarchyGroupSummaryList
   */
  readonly userHierarchyGroupSummaryList?: ConnectHierarchyGroupSummary[];

  /**
   * @schema ConnectListUserHierarchyGroupsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ConnectListUsersRequest
 */
export interface ConnectListUsersRequest {
  /**
   * @schema ConnectListUsersRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectListUsersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListUsersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ConnectListUsersResponse
 */
export interface ConnectListUsersResponse {
  /**
   * @schema ConnectListUsersResponse#UserSummaryList
   */
  readonly userSummaryList?: ConnectUserSummary[];

  /**
   * @schema ConnectListUsersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ConnectResumeContactRecordingRequest
 */
export interface ConnectResumeContactRecordingRequest {
  /**
   * @schema ConnectResumeContactRecordingRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectResumeContactRecordingRequest#ContactId
   */
  readonly contactId: string;

  /**
   * @schema ConnectResumeContactRecordingRequest#InitialContactId
   */
  readonly initialContactId: string;

}

/**
 * @schema ConnectResumeContactRecordingResponse
 */
export interface ConnectResumeContactRecordingResponse {
}

/**
 * @schema ConnectStartChatContactRequest
 */
export interface ConnectStartChatContactRequest {
  /**
   * @schema ConnectStartChatContactRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectStartChatContactRequest#ContactFlowId
   */
  readonly contactFlowId: string;

  /**
   * @schema ConnectStartChatContactRequest#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema ConnectStartChatContactRequest#ParticipantDetails
   */
  readonly participantDetails: ConnectParticipantDetails;

  /**
   * @schema ConnectStartChatContactRequest#InitialMessage
   */
  readonly initialMessage?: ConnectChatMessage;

  /**
   * @schema ConnectStartChatContactRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema ConnectStartChatContactResponse
 */
export interface ConnectStartChatContactResponse {
  /**
   * @schema ConnectStartChatContactResponse#ContactId
   */
  readonly contactId?: string;

  /**
   * @schema ConnectStartChatContactResponse#ParticipantId
   */
  readonly participantId?: string;

  /**
   * @schema ConnectStartChatContactResponse#ParticipantToken
   */
  readonly participantToken?: string;

}

/**
 * @schema ConnectStartContactRecordingRequest
 */
export interface ConnectStartContactRecordingRequest {
  /**
   * @schema ConnectStartContactRecordingRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectStartContactRecordingRequest#ContactId
   */
  readonly contactId: string;

  /**
   * @schema ConnectStartContactRecordingRequest#InitialContactId
   */
  readonly initialContactId: string;

  /**
   * @schema ConnectStartContactRecordingRequest#VoiceRecordingConfiguration
   */
  readonly voiceRecordingConfiguration: ConnectVoiceRecordingConfiguration;

}

/**
 * @schema ConnectStartContactRecordingResponse
 */
export interface ConnectStartContactRecordingResponse {
}

/**
 * @schema ConnectStartOutboundVoiceContactRequest
 */
export interface ConnectStartOutboundVoiceContactRequest {
  /**
   * @schema ConnectStartOutboundVoiceContactRequest#DestinationPhoneNumber
   */
  readonly destinationPhoneNumber: string;

  /**
   * @schema ConnectStartOutboundVoiceContactRequest#ContactFlowId
   */
  readonly contactFlowId: string;

  /**
   * @schema ConnectStartOutboundVoiceContactRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectStartOutboundVoiceContactRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ConnectStartOutboundVoiceContactRequest#SourcePhoneNumber
   */
  readonly sourcePhoneNumber?: string;

  /**
   * @schema ConnectStartOutboundVoiceContactRequest#QueueId
   */
  readonly queueId?: string;

  /**
   * @schema ConnectStartOutboundVoiceContactRequest#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema ConnectStartOutboundVoiceContactResponse
 */
export interface ConnectStartOutboundVoiceContactResponse {
  /**
   * @schema ConnectStartOutboundVoiceContactResponse#ContactId
   */
  readonly contactId?: string;

}

/**
 * @schema ConnectStopContactRequest
 */
export interface ConnectStopContactRequest {
  /**
   * @schema ConnectStopContactRequest#ContactId
   */
  readonly contactId: string;

  /**
   * @schema ConnectStopContactRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema ConnectStopContactResponse
 */
export interface ConnectStopContactResponse {
}

/**
 * @schema ConnectStopContactRecordingRequest
 */
export interface ConnectStopContactRecordingRequest {
  /**
   * @schema ConnectStopContactRecordingRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectStopContactRecordingRequest#ContactId
   */
  readonly contactId: string;

  /**
   * @schema ConnectStopContactRecordingRequest#InitialContactId
   */
  readonly initialContactId: string;

}

/**
 * @schema ConnectStopContactRecordingResponse
 */
export interface ConnectStopContactRecordingResponse {
}

/**
 * @schema ConnectSuspendContactRecordingRequest
 */
export interface ConnectSuspendContactRecordingRequest {
  /**
   * @schema ConnectSuspendContactRecordingRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectSuspendContactRecordingRequest#ContactId
   */
  readonly contactId: string;

  /**
   * @schema ConnectSuspendContactRecordingRequest#InitialContactId
   */
  readonly initialContactId: string;

}

/**
 * @schema ConnectSuspendContactRecordingResponse
 */
export interface ConnectSuspendContactRecordingResponse {
}

/**
 * @schema ConnectTagResourceRequest
 */
export interface ConnectTagResourceRequest {
  /**
   * @schema ConnectTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ConnectTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema ConnectUntagResourceRequest
 */
export interface ConnectUntagResourceRequest {
  /**
   * @schema ConnectUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ConnectUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema ConnectUpdateContactAttributesRequest
 */
export interface ConnectUpdateContactAttributesRequest {
  /**
   * @schema ConnectUpdateContactAttributesRequest#InitialContactId
   */
  readonly initialContactId: string;

  /**
   * @schema ConnectUpdateContactAttributesRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectUpdateContactAttributesRequest#Attributes
   */
  readonly attributes: { [key: string]: string };

}

/**
 * @schema ConnectUpdateContactAttributesResponse
 */
export interface ConnectUpdateContactAttributesResponse {
}

/**
 * @schema ConnectUpdateContactFlowContentRequest
 */
export interface ConnectUpdateContactFlowContentRequest {
  /**
   * @schema ConnectUpdateContactFlowContentRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectUpdateContactFlowContentRequest#ContactFlowId
   */
  readonly contactFlowId: string;

  /**
   * @schema ConnectUpdateContactFlowContentRequest#Content
   */
  readonly content: string;

}

/**
 * @schema ConnectUpdateContactFlowNameRequest
 */
export interface ConnectUpdateContactFlowNameRequest {
  /**
   * @schema ConnectUpdateContactFlowNameRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectUpdateContactFlowNameRequest#ContactFlowId
   */
  readonly contactFlowId: string;

  /**
   * @schema ConnectUpdateContactFlowNameRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectUpdateContactFlowNameRequest#Description
   */
  readonly description?: string;

}

/**
 * @schema ConnectUpdateInstanceAttributeRequest
 */
export interface ConnectUpdateInstanceAttributeRequest {
  /**
   * @schema ConnectUpdateInstanceAttributeRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectUpdateInstanceAttributeRequest#AttributeType
   */
  readonly attributeType: string;

  /**
   * @schema ConnectUpdateInstanceAttributeRequest#Value
   */
  readonly value: string;

}

/**
 * @schema ConnectUpdateInstanceStorageConfigRequest
 */
export interface ConnectUpdateInstanceStorageConfigRequest {
  /**
   * @schema ConnectUpdateInstanceStorageConfigRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectUpdateInstanceStorageConfigRequest#AssociationId
   */
  readonly associationId: string;

  /**
   * @schema ConnectUpdateInstanceStorageConfigRequest#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema ConnectUpdateInstanceStorageConfigRequest#StorageConfig
   */
  readonly storageConfig: ConnectInstanceStorageConfig;

}

/**
 * @schema ConnectUpdateRoutingProfileConcurrencyRequest
 */
export interface ConnectUpdateRoutingProfileConcurrencyRequest {
  /**
   * @schema ConnectUpdateRoutingProfileConcurrencyRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectUpdateRoutingProfileConcurrencyRequest#RoutingProfileId
   */
  readonly routingProfileId: string;

  /**
   * @schema ConnectUpdateRoutingProfileConcurrencyRequest#MediaConcurrencies
   */
  readonly mediaConcurrencies: ConnectMediaConcurrency[];

}

/**
 * @schema ConnectUpdateRoutingProfileDefaultOutboundQueueRequest
 */
export interface ConnectUpdateRoutingProfileDefaultOutboundQueueRequest {
  /**
   * @schema ConnectUpdateRoutingProfileDefaultOutboundQueueRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectUpdateRoutingProfileDefaultOutboundQueueRequest#RoutingProfileId
   */
  readonly routingProfileId: string;

  /**
   * @schema ConnectUpdateRoutingProfileDefaultOutboundQueueRequest#DefaultOutboundQueueId
   */
  readonly defaultOutboundQueueId: string;

}

/**
 * @schema ConnectUpdateRoutingProfileNameRequest
 */
export interface ConnectUpdateRoutingProfileNameRequest {
  /**
   * @schema ConnectUpdateRoutingProfileNameRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectUpdateRoutingProfileNameRequest#RoutingProfileId
   */
  readonly routingProfileId: string;

  /**
   * @schema ConnectUpdateRoutingProfileNameRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectUpdateRoutingProfileNameRequest#Description
   */
  readonly description?: string;

}

/**
 * @schema ConnectUpdateRoutingProfileQueuesRequest
 */
export interface ConnectUpdateRoutingProfileQueuesRequest {
  /**
   * @schema ConnectUpdateRoutingProfileQueuesRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConnectUpdateRoutingProfileQueuesRequest#RoutingProfileId
   */
  readonly routingProfileId: string;

  /**
   * @schema ConnectUpdateRoutingProfileQueuesRequest#QueueConfigs
   */
  readonly queueConfigs: ConnectRoutingProfileQueueConfig[];

}

/**
 * @schema ConnectUpdateUserHierarchyRequest
 */
export interface ConnectUpdateUserHierarchyRequest {
  /**
   * @schema ConnectUpdateUserHierarchyRequest#HierarchyGroupId
   */
  readonly hierarchyGroupId?: string;

  /**
   * @schema ConnectUpdateUserHierarchyRequest#UserId
   */
  readonly userId: string;

  /**
   * @schema ConnectUpdateUserHierarchyRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema ConnectUpdateUserHierarchyGroupNameRequest
 */
export interface ConnectUpdateUserHierarchyGroupNameRequest {
  /**
   * @schema ConnectUpdateUserHierarchyGroupNameRequest#Name
   */
  readonly name: string;

  /**
   * @schema ConnectUpdateUserHierarchyGroupNameRequest#HierarchyGroupId
   */
  readonly hierarchyGroupId: string;

  /**
   * @schema ConnectUpdateUserHierarchyGroupNameRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema ConnectUpdateUserHierarchyStructureRequest
 */
export interface ConnectUpdateUserHierarchyStructureRequest {
  /**
   * @schema ConnectUpdateUserHierarchyStructureRequest#HierarchyStructure
   */
  readonly hierarchyStructure: ConnectHierarchyStructureUpdate;

  /**
   * @schema ConnectUpdateUserHierarchyStructureRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema ConnectUpdateUserIdentityInfoRequest
 */
export interface ConnectUpdateUserIdentityInfoRequest {
  /**
   * @schema ConnectUpdateUserIdentityInfoRequest#IdentityInfo
   */
  readonly identityInfo: ConnectUserIdentityInfo;

  /**
   * @schema ConnectUpdateUserIdentityInfoRequest#UserId
   */
  readonly userId: string;

  /**
   * @schema ConnectUpdateUserIdentityInfoRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema ConnectUpdateUserPhoneConfigRequest
 */
export interface ConnectUpdateUserPhoneConfigRequest {
  /**
   * @schema ConnectUpdateUserPhoneConfigRequest#PhoneConfig
   */
  readonly phoneConfig: ConnectUserPhoneConfig;

  /**
   * @schema ConnectUpdateUserPhoneConfigRequest#UserId
   */
  readonly userId: string;

  /**
   * @schema ConnectUpdateUserPhoneConfigRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema ConnectUpdateUserRoutingProfileRequest
 */
export interface ConnectUpdateUserRoutingProfileRequest {
  /**
   * @schema ConnectUpdateUserRoutingProfileRequest#RoutingProfileId
   */
  readonly routingProfileId: string;

  /**
   * @schema ConnectUpdateUserRoutingProfileRequest#UserId
   */
  readonly userId: string;

  /**
   * @schema ConnectUpdateUserRoutingProfileRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema ConnectUpdateUserSecurityProfilesRequest
 */
export interface ConnectUpdateUserSecurityProfilesRequest {
  /**
   * @schema ConnectUpdateUserSecurityProfilesRequest#SecurityProfileIds
   */
  readonly securityProfileIds: string[];

  /**
   * @schema ConnectUpdateUserSecurityProfilesRequest#UserId
   */
  readonly userId: string;

  /**
   * @schema ConnectUpdateUserSecurityProfilesRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema ConnectInstanceStorageConfig
 */
export interface ConnectInstanceStorageConfig {
  /**
   * @schema ConnectInstanceStorageConfig#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema ConnectInstanceStorageConfig#StorageType
   */
  readonly storageType: string;

  /**
   * @schema ConnectInstanceStorageConfig#S3Config
   */
  readonly s3Config?: ConnectS3Config;

  /**
   * @schema ConnectInstanceStorageConfig#KinesisVideoStreamConfig
   */
  readonly kinesisVideoStreamConfig?: ConnectKinesisVideoStreamConfig;

  /**
   * @schema ConnectInstanceStorageConfig#KinesisStreamConfig
   */
  readonly kinesisStreamConfig?: ConnectKinesisStreamConfig;

  /**
   * @schema ConnectInstanceStorageConfig#KinesisFirehoseConfig
   */
  readonly kinesisFirehoseConfig?: ConnectKinesisFirehoseConfig;

}

/**
 * @schema ConnectLexBot
 */
export interface ConnectLexBot {
  /**
   * @schema ConnectLexBot#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectLexBot#LexRegion
   */
  readonly lexRegion?: string;

}

/**
 * @schema ConnectRoutingProfileQueueConfig
 */
export interface ConnectRoutingProfileQueueConfig {
  /**
   * @schema ConnectRoutingProfileQueueConfig#QueueReference
   */
  readonly queueReference: ConnectRoutingProfileQueueReference;

  /**
   * @schema ConnectRoutingProfileQueueConfig#Priority
   */
  readonly priority: number;

  /**
   * @schema ConnectRoutingProfileQueueConfig#Delay
   */
  readonly delay: number;

}

/**
 * @schema ConnectMediaConcurrency
 */
export interface ConnectMediaConcurrency {
  /**
   * @schema ConnectMediaConcurrency#Channel
   */
  readonly channel: string;

  /**
   * @schema ConnectMediaConcurrency#Concurrency
   */
  readonly concurrency: number;

}

/**
 * @schema ConnectUserIdentityInfo
 */
export interface ConnectUserIdentityInfo {
  /**
   * @schema ConnectUserIdentityInfo#FirstName
   */
  readonly firstName?: string;

  /**
   * @schema ConnectUserIdentityInfo#LastName
   */
  readonly lastName?: string;

  /**
   * @schema ConnectUserIdentityInfo#Email
   */
  readonly email?: string;

}

/**
 * @schema ConnectUserPhoneConfig
 */
export interface ConnectUserPhoneConfig {
  /**
   * @schema ConnectUserPhoneConfig#PhoneType
   */
  readonly phoneType: string;

  /**
   * @schema ConnectUserPhoneConfig#AutoAccept
   */
  readonly autoAccept?: boolean;

  /**
   * @schema ConnectUserPhoneConfig#AfterContactWorkTimeLimit
   */
  readonly afterContactWorkTimeLimit?: number;

  /**
   * @schema ConnectUserPhoneConfig#DeskPhoneNumber
   */
  readonly deskPhoneNumber?: string;

}

/**
 * @schema ConnectContactFlow
 */
export interface ConnectContactFlow {
  /**
   * @schema ConnectContactFlow#Arn
   */
  readonly arn?: string;

  /**
   * @schema ConnectContactFlow#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectContactFlow#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectContactFlow#Type
   */
  readonly type?: string;

  /**
   * @schema ConnectContactFlow#Description
   */
  readonly description?: string;

  /**
   * @schema ConnectContactFlow#Content
   */
  readonly content?: string;

  /**
   * @schema ConnectContactFlow#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ConnectInstance
 */
export interface ConnectInstance {
  /**
   * @schema ConnectInstance#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectInstance#Arn
   */
  readonly arn?: string;

  /**
   * @schema ConnectInstance#IdentityManagementType
   */
  readonly identityManagementType?: string;

  /**
   * @schema ConnectInstance#InstanceAlias
   */
  readonly instanceAlias?: string;

  /**
   * @schema ConnectInstance#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema ConnectInstance#ServiceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema ConnectInstance#InstanceStatus
   */
  readonly instanceStatus?: string;

  /**
   * @schema ConnectInstance#StatusReason
   */
  readonly statusReason?: ConnectInstanceStatusReason;

  /**
   * @schema ConnectInstance#InboundCallsEnabled
   */
  readonly inboundCallsEnabled?: boolean;

  /**
   * @schema ConnectInstance#OutboundCallsEnabled
   */
  readonly outboundCallsEnabled?: boolean;

}

/**
 * @schema ConnectAttribute
 */
export interface ConnectAttribute {
  /**
   * @schema ConnectAttribute#AttributeType
   */
  readonly attributeType?: string;

  /**
   * @schema ConnectAttribute#Value
   */
  readonly value?: string;

}

/**
 * @schema ConnectRoutingProfile
 */
export interface ConnectRoutingProfile {
  /**
   * @schema ConnectRoutingProfile#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectRoutingProfile#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectRoutingProfile#RoutingProfileArn
   */
  readonly routingProfileArn?: string;

  /**
   * @schema ConnectRoutingProfile#RoutingProfileId
   */
  readonly routingProfileId?: string;

  /**
   * @schema ConnectRoutingProfile#Description
   */
  readonly description?: string;

  /**
   * @schema ConnectRoutingProfile#MediaConcurrencies
   */
  readonly mediaConcurrencies?: ConnectMediaConcurrency[];

  /**
   * @schema ConnectRoutingProfile#DefaultOutboundQueueId
   */
  readonly defaultOutboundQueueId?: string;

  /**
   * @schema ConnectRoutingProfile#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ConnectUser
 */
export interface ConnectUser {
  /**
   * @schema ConnectUser#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectUser#Arn
   */
  readonly arn?: string;

  /**
   * @schema ConnectUser#Username
   */
  readonly username?: string;

  /**
   * @schema ConnectUser#IdentityInfo
   */
  readonly identityInfo?: ConnectUserIdentityInfo;

  /**
   * @schema ConnectUser#PhoneConfig
   */
  readonly phoneConfig?: ConnectUserPhoneConfig;

  /**
   * @schema ConnectUser#DirectoryUserId
   */
  readonly directoryUserId?: string;

  /**
   * @schema ConnectUser#SecurityProfileIds
   */
  readonly securityProfileIds?: string[];

  /**
   * @schema ConnectUser#RoutingProfileId
   */
  readonly routingProfileId?: string;

  /**
   * @schema ConnectUser#HierarchyGroupId
   */
  readonly hierarchyGroupId?: string;

  /**
   * @schema ConnectUser#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ConnectHierarchyGroup
 */
export interface ConnectHierarchyGroup {
  /**
   * @schema ConnectHierarchyGroup#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectHierarchyGroup#Arn
   */
  readonly arn?: string;

  /**
   * @schema ConnectHierarchyGroup#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectHierarchyGroup#LevelId
   */
  readonly levelId?: string;

  /**
   * @schema ConnectHierarchyGroup#HierarchyPath
   */
  readonly hierarchyPath?: ConnectHierarchyPath;

}

/**
 * @schema ConnectHierarchyStructure
 */
export interface ConnectHierarchyStructure {
  /**
   * @schema ConnectHierarchyStructure#LevelOne
   */
  readonly levelOne?: ConnectHierarchyLevel;

  /**
   * @schema ConnectHierarchyStructure#LevelTwo
   */
  readonly levelTwo?: ConnectHierarchyLevel;

  /**
   * @schema ConnectHierarchyStructure#LevelThree
   */
  readonly levelThree?: ConnectHierarchyLevel;

  /**
   * @schema ConnectHierarchyStructure#LevelFour
   */
  readonly levelFour?: ConnectHierarchyLevel;

  /**
   * @schema ConnectHierarchyStructure#LevelFive
   */
  readonly levelFive?: ConnectHierarchyLevel;

}

/**
 * @schema ConnectRoutingProfileQueueReference
 */
export interface ConnectRoutingProfileQueueReference {
  /**
   * @schema ConnectRoutingProfileQueueReference#QueueId
   */
  readonly queueId: string;

  /**
   * @schema ConnectRoutingProfileQueueReference#Channel
   */
  readonly channel: string;

}

/**
 * @schema ConnectFilters
 */
export interface ConnectFilters {
  /**
   * @schema ConnectFilters#Queues
   */
  readonly queues?: string[];

  /**
   * @schema ConnectFilters#Channels
   */
  readonly channels?: string[];

}

/**
 * @schema ConnectCurrentMetric
 */
export interface ConnectCurrentMetric {
  /**
   * @schema ConnectCurrentMetric#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectCurrentMetric#Unit
   */
  readonly unit?: string;

}

/**
 * @schema ConnectCurrentMetricResult
 */
export interface ConnectCurrentMetricResult {
  /**
   * @schema ConnectCurrentMetricResult#Dimensions
   */
  readonly dimensions?: ConnectDimensions;

  /**
   * @schema ConnectCurrentMetricResult#Collections
   */
  readonly collections?: ConnectCurrentMetricData[];

}

/**
 * @schema ConnectCredentials
 */
export interface ConnectCredentials {
  /**
   * @schema ConnectCredentials#AccessToken
   */
  readonly accessToken?: string;

  /**
   * @schema ConnectCredentials#AccessTokenExpiration
   */
  readonly accessTokenExpiration?: string;

  /**
   * @schema ConnectCredentials#RefreshToken
   */
  readonly refreshToken?: string;

  /**
   * @schema ConnectCredentials#RefreshTokenExpiration
   */
  readonly refreshTokenExpiration?: string;

}

/**
 * @schema ConnectHistoricalMetric
 */
export interface ConnectHistoricalMetric {
  /**
   * @schema ConnectHistoricalMetric#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectHistoricalMetric#Threshold
   */
  readonly threshold?: ConnectThreshold;

  /**
   * @schema ConnectHistoricalMetric#Statistic
   */
  readonly statistic?: string;

  /**
   * @schema ConnectHistoricalMetric#Unit
   */
  readonly unit?: string;

}

/**
 * @schema ConnectHistoricalMetricResult
 */
export interface ConnectHistoricalMetricResult {
  /**
   * @schema ConnectHistoricalMetricResult#Dimensions
   */
  readonly dimensions?: ConnectDimensions;

  /**
   * @schema ConnectHistoricalMetricResult#Collections
   */
  readonly collections?: ConnectHistoricalMetricData[];

}

/**
 * @schema ConnectContactFlowSummary
 */
export interface ConnectContactFlowSummary {
  /**
   * @schema ConnectContactFlowSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectContactFlowSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema ConnectContactFlowSummary#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectContactFlowSummary#ContactFlowType
   */
  readonly contactFlowType?: string;

}

/**
 * @schema ConnectHoursOfOperationSummary
 */
export interface ConnectHoursOfOperationSummary {
  /**
   * @schema ConnectHoursOfOperationSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectHoursOfOperationSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema ConnectHoursOfOperationSummary#Name
   */
  readonly name?: string;

}

/**
 * @schema ConnectInstanceSummary
 */
export interface ConnectInstanceSummary {
  /**
   * @schema ConnectInstanceSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectInstanceSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema ConnectInstanceSummary#IdentityManagementType
   */
  readonly identityManagementType?: string;

  /**
   * @schema ConnectInstanceSummary#InstanceAlias
   */
  readonly instanceAlias?: string;

  /**
   * @schema ConnectInstanceSummary#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema ConnectInstanceSummary#ServiceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema ConnectInstanceSummary#InstanceStatus
   */
  readonly instanceStatus?: string;

  /**
   * @schema ConnectInstanceSummary#InboundCallsEnabled
   */
  readonly inboundCallsEnabled?: boolean;

  /**
   * @schema ConnectInstanceSummary#OutboundCallsEnabled
   */
  readonly outboundCallsEnabled?: boolean;

}

/**
 * @schema ConnectPhoneNumberSummary
 */
export interface ConnectPhoneNumberSummary {
  /**
   * @schema ConnectPhoneNumberSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectPhoneNumberSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema ConnectPhoneNumberSummary#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema ConnectPhoneNumberSummary#PhoneNumberType
   */
  readonly phoneNumberType?: string;

  /**
   * @schema ConnectPhoneNumberSummary#PhoneNumberCountryCode
   */
  readonly phoneNumberCountryCode?: string;

}

/**
 * @schema ConnectPromptSummary
 */
export interface ConnectPromptSummary {
  /**
   * @schema ConnectPromptSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectPromptSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema ConnectPromptSummary#Name
   */
  readonly name?: string;

}

/**
 * @schema ConnectQueueSummary
 */
export interface ConnectQueueSummary {
  /**
   * @schema ConnectQueueSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectQueueSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema ConnectQueueSummary#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectQueueSummary#QueueType
   */
  readonly queueType?: string;

}

/**
 * @schema ConnectRoutingProfileQueueConfigSummary
 */
export interface ConnectRoutingProfileQueueConfigSummary {
  /**
   * @schema ConnectRoutingProfileQueueConfigSummary#QueueId
   */
  readonly queueId: string;

  /**
   * @schema ConnectRoutingProfileQueueConfigSummary#QueueArn
   */
  readonly queueArn: string;

  /**
   * @schema ConnectRoutingProfileQueueConfigSummary#QueueName
   */
  readonly queueName: string;

  /**
   * @schema ConnectRoutingProfileQueueConfigSummary#Priority
   */
  readonly priority: number;

  /**
   * @schema ConnectRoutingProfileQueueConfigSummary#Delay
   */
  readonly delay: number;

  /**
   * @schema ConnectRoutingProfileQueueConfigSummary#Channel
   */
  readonly channel: string;

}

/**
 * @schema ConnectRoutingProfileSummary
 */
export interface ConnectRoutingProfileSummary {
  /**
   * @schema ConnectRoutingProfileSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectRoutingProfileSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema ConnectRoutingProfileSummary#Name
   */
  readonly name?: string;

}

/**
 * @schema ConnectSecurityKey
 */
export interface ConnectSecurityKey {
  /**
   * @schema ConnectSecurityKey#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema ConnectSecurityKey#Key
   */
  readonly key?: string;

  /**
   * @schema ConnectSecurityKey#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema ConnectSecurityProfileSummary
 */
export interface ConnectSecurityProfileSummary {
  /**
   * @schema ConnectSecurityProfileSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectSecurityProfileSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema ConnectSecurityProfileSummary#Name
   */
  readonly name?: string;

}

/**
 * @schema ConnectHierarchyGroupSummary
 */
export interface ConnectHierarchyGroupSummary {
  /**
   * @schema ConnectHierarchyGroupSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectHierarchyGroupSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema ConnectHierarchyGroupSummary#Name
   */
  readonly name?: string;

}

/**
 * @schema ConnectUserSummary
 */
export interface ConnectUserSummary {
  /**
   * @schema ConnectUserSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectUserSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema ConnectUserSummary#Username
   */
  readonly username?: string;

}

/**
 * @schema ConnectParticipantDetails
 */
export interface ConnectParticipantDetails {
  /**
   * @schema ConnectParticipantDetails#DisplayName
   */
  readonly displayName: string;

}

/**
 * @schema ConnectChatMessage
 */
export interface ConnectChatMessage {
  /**
   * @schema ConnectChatMessage#ContentType
   */
  readonly contentType: string;

  /**
   * @schema ConnectChatMessage#Content
   */
  readonly content: string;

}

/**
 * @schema ConnectVoiceRecordingConfiguration
 */
export interface ConnectVoiceRecordingConfiguration {
  /**
   * @schema ConnectVoiceRecordingConfiguration#VoiceRecordingTrack
   */
  readonly voiceRecordingTrack?: string;

}

/**
 * @schema ConnectHierarchyStructureUpdate
 */
export interface ConnectHierarchyStructureUpdate {
  /**
   * @schema ConnectHierarchyStructureUpdate#LevelOne
   */
  readonly levelOne?: ConnectHierarchyLevelUpdate;

  /**
   * @schema ConnectHierarchyStructureUpdate#LevelTwo
   */
  readonly levelTwo?: ConnectHierarchyLevelUpdate;

  /**
   * @schema ConnectHierarchyStructureUpdate#LevelThree
   */
  readonly levelThree?: ConnectHierarchyLevelUpdate;

  /**
   * @schema ConnectHierarchyStructureUpdate#LevelFour
   */
  readonly levelFour?: ConnectHierarchyLevelUpdate;

  /**
   * @schema ConnectHierarchyStructureUpdate#LevelFive
   */
  readonly levelFive?: ConnectHierarchyLevelUpdate;

}

/**
 * @schema ConnectS3Config
 */
export interface ConnectS3Config {
  /**
   * @schema ConnectS3Config#BucketName
   */
  readonly bucketName: string;

  /**
   * @schema ConnectS3Config#BucketPrefix
   */
  readonly bucketPrefix: string;

  /**
   * @schema ConnectS3Config#EncryptionConfig
   */
  readonly encryptionConfig?: ConnectEncryptionConfig;

}

/**
 * @schema ConnectKinesisVideoStreamConfig
 */
export interface ConnectKinesisVideoStreamConfig {
  /**
   * @schema ConnectKinesisVideoStreamConfig#Prefix
   */
  readonly prefix: string;

  /**
   * @schema ConnectKinesisVideoStreamConfig#RetentionPeriodHours
   */
  readonly retentionPeriodHours: number;

  /**
   * @schema ConnectKinesisVideoStreamConfig#EncryptionConfig
   */
  readonly encryptionConfig: ConnectEncryptionConfig;

}

/**
 * @schema ConnectKinesisStreamConfig
 */
export interface ConnectKinesisStreamConfig {
  /**
   * @schema ConnectKinesisStreamConfig#StreamArn
   */
  readonly streamArn: string;

}

/**
 * @schema ConnectKinesisFirehoseConfig
 */
export interface ConnectKinesisFirehoseConfig {
  /**
   * @schema ConnectKinesisFirehoseConfig#FirehoseArn
   */
  readonly firehoseArn: string;

}

/**
 * @schema ConnectInstanceStatusReason
 */
export interface ConnectInstanceStatusReason {
  /**
   * @schema ConnectInstanceStatusReason#Message
   */
  readonly message?: string;

}

/**
 * @schema ConnectHierarchyPath
 */
export interface ConnectHierarchyPath {
  /**
   * @schema ConnectHierarchyPath#LevelOne
   */
  readonly levelOne?: ConnectHierarchyGroupSummary;

  /**
   * @schema ConnectHierarchyPath#LevelTwo
   */
  readonly levelTwo?: ConnectHierarchyGroupSummary;

  /**
   * @schema ConnectHierarchyPath#LevelThree
   */
  readonly levelThree?: ConnectHierarchyGroupSummary;

  /**
   * @schema ConnectHierarchyPath#LevelFour
   */
  readonly levelFour?: ConnectHierarchyGroupSummary;

  /**
   * @schema ConnectHierarchyPath#LevelFive
   */
  readonly levelFive?: ConnectHierarchyGroupSummary;

}

/**
 * @schema ConnectHierarchyLevel
 */
export interface ConnectHierarchyLevel {
  /**
   * @schema ConnectHierarchyLevel#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectHierarchyLevel#Arn
   */
  readonly arn?: string;

  /**
   * @schema ConnectHierarchyLevel#Name
   */
  readonly name?: string;

}

/**
 * @schema ConnectDimensions
 */
export interface ConnectDimensions {
  /**
   * @schema ConnectDimensions#Queue
   */
  readonly queue?: ConnectQueueReference;

  /**
   * @schema ConnectDimensions#Channel
   */
  readonly channel?: string;

}

/**
 * @schema ConnectCurrentMetricData
 */
export interface ConnectCurrentMetricData {
  /**
   * @schema ConnectCurrentMetricData#Metric
   */
  readonly metric?: ConnectCurrentMetric;

  /**
   * @schema ConnectCurrentMetricData#Value
   */
  readonly value?: number;

}

/**
 * @schema ConnectThreshold
 */
export interface ConnectThreshold {
  /**
   * @schema ConnectThreshold#Comparison
   */
  readonly comparison?: string;

  /**
   * @schema ConnectThreshold#ThresholdValue
   */
  readonly thresholdValue?: number;

}

/**
 * @schema ConnectHistoricalMetricData
 */
export interface ConnectHistoricalMetricData {
  /**
   * @schema ConnectHistoricalMetricData#Metric
   */
  readonly metric?: ConnectHistoricalMetric;

  /**
   * @schema ConnectHistoricalMetricData#Value
   */
  readonly value?: number;

}

/**
 * @schema ConnectHierarchyLevelUpdate
 */
export interface ConnectHierarchyLevelUpdate {
  /**
   * @schema ConnectHierarchyLevelUpdate#Name
   */
  readonly name: string;

}

/**
 * @schema ConnectEncryptionConfig
 */
export interface ConnectEncryptionConfig {
  /**
   * @schema ConnectEncryptionConfig#EncryptionType
   */
  readonly encryptionType: string;

  /**
   * @schema ConnectEncryptionConfig#KeyId
   */
  readonly keyId: string;

}

/**
 * @schema ConnectQueueReference
 */
export interface ConnectQueueReference {
  /**
   * @schema ConnectQueueReference#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectQueueReference#Arn
   */
  readonly arn?: string;

}
