/**
 * @schema AssociateApprovedOriginRequest
 */
export interface AssociateApprovedOriginRequest {
  /**
   * @schema AssociateApprovedOriginRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema AssociateApprovedOriginRequest#Origin
   */
  readonly origin: string;

}

/**
 * @schema AssociateInstanceStorageConfigRequest
 */
export interface AssociateInstanceStorageConfigRequest {
  /**
   * @schema AssociateInstanceStorageConfigRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema AssociateInstanceStorageConfigRequest#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema AssociateInstanceStorageConfigRequest#StorageConfig
   */
  readonly storageConfig: InstanceStorageConfig;

}

/**
 * @schema AssociateInstanceStorageConfigResponse
 */
export interface AssociateInstanceStorageConfigResponse {
  /**
   * @schema AssociateInstanceStorageConfigResponse#AssociationId
   */
  readonly associationId?: string;

}

/**
 * @schema AssociateLambdaFunctionRequest
 */
export interface AssociateLambdaFunctionRequest {
  /**
   * @schema AssociateLambdaFunctionRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema AssociateLambdaFunctionRequest#FunctionArn
   */
  readonly functionArn: string;

}

/**
 * @schema AssociateLexBotRequest
 */
export interface AssociateLexBotRequest {
  /**
   * @schema AssociateLexBotRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema AssociateLexBotRequest#LexBot
   */
  readonly lexBot: LexBot;

}

/**
 * @schema AssociateRoutingProfileQueuesRequest
 */
export interface AssociateRoutingProfileQueuesRequest {
  /**
   * @schema AssociateRoutingProfileQueuesRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema AssociateRoutingProfileQueuesRequest#RoutingProfileId
   */
  readonly routingProfileId: string;

  /**
   * @schema AssociateRoutingProfileQueuesRequest#QueueConfigs
   */
  readonly queueConfigs: RoutingProfileQueueConfig[];

}

/**
 * @schema AssociateSecurityKeyRequest
 */
export interface AssociateSecurityKeyRequest {
  /**
   * @schema AssociateSecurityKeyRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema AssociateSecurityKeyRequest#Key
   */
  readonly key: string;

}

/**
 * @schema AssociateSecurityKeyResponse
 */
export interface AssociateSecurityKeyResponse {
  /**
   * @schema AssociateSecurityKeyResponse#AssociationId
   */
  readonly associationId?: string;

}

/**
 * @schema CreateContactFlowRequest
 */
export interface CreateContactFlowRequest {
  /**
   * @schema CreateContactFlowRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema CreateContactFlowRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateContactFlowRequest#Type
   */
  readonly type: string;

  /**
   * @schema CreateContactFlowRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateContactFlowRequest#Content
   */
  readonly content: string;

  /**
   * @schema CreateContactFlowRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateContactFlowResponse
 */
export interface CreateContactFlowResponse {
  /**
   * @schema CreateContactFlowResponse#ContactFlowId
   */
  readonly contactFlowId?: string;

  /**
   * @schema CreateContactFlowResponse#ContactFlowArn
   */
  readonly contactFlowArn?: string;

}

/**
 * @schema CreateInstanceRequest
 */
export interface CreateInstanceRequest {
  /**
   * @schema CreateInstanceRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateInstanceRequest#IdentityManagementType
   */
  readonly identityManagementType: string;

  /**
   * @schema CreateInstanceRequest#InstanceAlias
   */
  readonly instanceAlias?: string;

  /**
   * @schema CreateInstanceRequest#DirectoryId
   */
  readonly directoryId?: string;

  /**
   * @schema CreateInstanceRequest#InboundCallsEnabled
   */
  readonly inboundCallsEnabled: boolean;

  /**
   * @schema CreateInstanceRequest#OutboundCallsEnabled
   */
  readonly outboundCallsEnabled: boolean;

}

/**
 * @schema CreateInstanceResponse
 */
export interface CreateInstanceResponse {
  /**
   * @schema CreateInstanceResponse#Id
   */
  readonly id?: string;

  /**
   * @schema CreateInstanceResponse#Arn
   */
  readonly arn?: string;

}

/**
 * @schema CreateRoutingProfileRequest
 */
export interface CreateRoutingProfileRequest {
  /**
   * @schema CreateRoutingProfileRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema CreateRoutingProfileRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateRoutingProfileRequest#Description
   */
  readonly description: string;

  /**
   * @schema CreateRoutingProfileRequest#DefaultOutboundQueueId
   */
  readonly defaultOutboundQueueId: string;

  /**
   * @schema CreateRoutingProfileRequest#QueueConfigs
   */
  readonly queueConfigs?: RoutingProfileQueueConfig[];

  /**
   * @schema CreateRoutingProfileRequest#MediaConcurrencies
   */
  readonly mediaConcurrencies: MediaConcurrency[];

  /**
   * @schema CreateRoutingProfileRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateRoutingProfileResponse
 */
export interface CreateRoutingProfileResponse {
  /**
   * @schema CreateRoutingProfileResponse#RoutingProfileArn
   */
  readonly routingProfileArn?: string;

  /**
   * @schema CreateRoutingProfileResponse#RoutingProfileId
   */
  readonly routingProfileId?: string;

}

/**
 * @schema CreateUserRequest
 */
export interface CreateUserRequest {
  /**
   * @schema CreateUserRequest#Username
   */
  readonly username: string;

  /**
   * @schema CreateUserRequest#Password
   */
  readonly password?: string;

  /**
   * @schema CreateUserRequest#IdentityInfo
   */
  readonly identityInfo?: UserIdentityInfo;

  /**
   * @schema CreateUserRequest#PhoneConfig
   */
  readonly phoneConfig: UserPhoneConfig;

  /**
   * @schema CreateUserRequest#DirectoryUserId
   */
  readonly directoryUserId?: string;

  /**
   * @schema CreateUserRequest#SecurityProfileIds
   */
  readonly securityProfileIds: string[];

  /**
   * @schema CreateUserRequest#RoutingProfileId
   */
  readonly routingProfileId: string;

  /**
   * @schema CreateUserRequest#HierarchyGroupId
   */
  readonly hierarchyGroupId?: string;

  /**
   * @schema CreateUserRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema CreateUserRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateUserResponse
 */
export interface CreateUserResponse {
  /**
   * @schema CreateUserResponse#UserId
   */
  readonly userId?: string;

  /**
   * @schema CreateUserResponse#UserArn
   */
  readonly userArn?: string;

}

/**
 * @schema CreateUserHierarchyGroupRequest
 */
export interface CreateUserHierarchyGroupRequest {
  /**
   * @schema CreateUserHierarchyGroupRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateUserHierarchyGroupRequest#ParentGroupId
   */
  readonly parentGroupId?: string;

  /**
   * @schema CreateUserHierarchyGroupRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema CreateUserHierarchyGroupResponse
 */
export interface CreateUserHierarchyGroupResponse {
  /**
   * @schema CreateUserHierarchyGroupResponse#HierarchyGroupId
   */
  readonly hierarchyGroupId?: string;

  /**
   * @schema CreateUserHierarchyGroupResponse#HierarchyGroupArn
   */
  readonly hierarchyGroupArn?: string;

}

/**
 * @schema DeleteInstanceRequest
 */
export interface DeleteInstanceRequest {
  /**
   * @schema DeleteInstanceRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema DeleteUserRequest
 */
export interface DeleteUserRequest {
  /**
   * @schema DeleteUserRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema DeleteUserRequest#UserId
   */
  readonly userId: string;

}

/**
 * @schema DeleteUserHierarchyGroupRequest
 */
export interface DeleteUserHierarchyGroupRequest {
  /**
   * @schema DeleteUserHierarchyGroupRequest#HierarchyGroupId
   */
  readonly hierarchyGroupId: string;

  /**
   * @schema DeleteUserHierarchyGroupRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema DescribeContactFlowRequest
 */
export interface DescribeContactFlowRequest {
  /**
   * @schema DescribeContactFlowRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema DescribeContactFlowRequest#ContactFlowId
   */
  readonly contactFlowId: string;

}

/**
 * @schema DescribeContactFlowResponse
 */
export interface DescribeContactFlowResponse {
  /**
   * @schema DescribeContactFlowResponse#ContactFlow
   */
  readonly contactFlow?: ContactFlow;

}

/**
 * @schema DescribeInstanceRequest
 */
export interface DescribeInstanceRequest {
  /**
   * @schema DescribeInstanceRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema DescribeInstanceResponse
 */
export interface DescribeInstanceResponse {
  /**
   * @schema DescribeInstanceResponse#Instance
   */
  readonly instance?: Instance;

}

/**
 * @schema DescribeInstanceAttributeRequest
 */
export interface DescribeInstanceAttributeRequest {
  /**
   * @schema DescribeInstanceAttributeRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema DescribeInstanceAttributeRequest#AttributeType
   */
  readonly attributeType: string;

}

/**
 * @schema DescribeInstanceAttributeResponse
 */
export interface DescribeInstanceAttributeResponse {
  /**
   * @schema DescribeInstanceAttributeResponse#Attribute
   */
  readonly attribute?: Attribute;

}

/**
 * @schema DescribeInstanceStorageConfigRequest
 */
export interface DescribeInstanceStorageConfigRequest {
  /**
   * @schema DescribeInstanceStorageConfigRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema DescribeInstanceStorageConfigRequest#AssociationId
   */
  readonly associationId: string;

  /**
   * @schema DescribeInstanceStorageConfigRequest#ResourceType
   */
  readonly resourceType: string;

}

/**
 * @schema DescribeInstanceStorageConfigResponse
 */
export interface DescribeInstanceStorageConfigResponse {
  /**
   * @schema DescribeInstanceStorageConfigResponse#StorageConfig
   */
  readonly storageConfig?: InstanceStorageConfig;

}

/**
 * @schema DescribeRoutingProfileRequest
 */
export interface DescribeRoutingProfileRequest {
  /**
   * @schema DescribeRoutingProfileRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema DescribeRoutingProfileRequest#RoutingProfileId
   */
  readonly routingProfileId: string;

}

/**
 * @schema DescribeRoutingProfileResponse
 */
export interface DescribeRoutingProfileResponse {
  /**
   * @schema DescribeRoutingProfileResponse#RoutingProfile
   */
  readonly routingProfile?: RoutingProfile;

}

/**
 * @schema DescribeUserRequest
 */
export interface DescribeUserRequest {
  /**
   * @schema DescribeUserRequest#UserId
   */
  readonly userId: string;

  /**
   * @schema DescribeUserRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema DescribeUserResponse
 */
export interface DescribeUserResponse {
  /**
   * @schema DescribeUserResponse#User
   */
  readonly user?: User;

}

/**
 * @schema DescribeUserHierarchyGroupRequest
 */
export interface DescribeUserHierarchyGroupRequest {
  /**
   * @schema DescribeUserHierarchyGroupRequest#HierarchyGroupId
   */
  readonly hierarchyGroupId: string;

  /**
   * @schema DescribeUserHierarchyGroupRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema DescribeUserHierarchyGroupResponse
 */
export interface DescribeUserHierarchyGroupResponse {
  /**
   * @schema DescribeUserHierarchyGroupResponse#HierarchyGroup
   */
  readonly hierarchyGroup?: HierarchyGroup;

}

/**
 * @schema DescribeUserHierarchyStructureRequest
 */
export interface DescribeUserHierarchyStructureRequest {
  /**
   * @schema DescribeUserHierarchyStructureRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema DescribeUserHierarchyStructureResponse
 */
export interface DescribeUserHierarchyStructureResponse {
  /**
   * @schema DescribeUserHierarchyStructureResponse#HierarchyStructure
   */
  readonly hierarchyStructure?: HierarchyStructure;

}

/**
 * @schema DisassociateApprovedOriginRequest
 */
export interface DisassociateApprovedOriginRequest {
  /**
   * @schema DisassociateApprovedOriginRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema DisassociateApprovedOriginRequest#Origin
   */
  readonly origin: string;

}

/**
 * @schema DisassociateInstanceStorageConfigRequest
 */
export interface DisassociateInstanceStorageConfigRequest {
  /**
   * @schema DisassociateInstanceStorageConfigRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema DisassociateInstanceStorageConfigRequest#AssociationId
   */
  readonly associationId: string;

  /**
   * @schema DisassociateInstanceStorageConfigRequest#ResourceType
   */
  readonly resourceType: string;

}

/**
 * @schema DisassociateLambdaFunctionRequest
 */
export interface DisassociateLambdaFunctionRequest {
  /**
   * @schema DisassociateLambdaFunctionRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema DisassociateLambdaFunctionRequest#FunctionArn
   */
  readonly functionArn: string;

}

/**
 * @schema DisassociateLexBotRequest
 */
export interface DisassociateLexBotRequest {
  /**
   * @schema DisassociateLexBotRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema DisassociateLexBotRequest#BotName
   */
  readonly botName: string;

  /**
   * @schema DisassociateLexBotRequest#LexRegion
   */
  readonly lexRegion: string;

}

/**
 * @schema DisassociateRoutingProfileQueuesRequest
 */
export interface DisassociateRoutingProfileQueuesRequest {
  /**
   * @schema DisassociateRoutingProfileQueuesRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema DisassociateRoutingProfileQueuesRequest#RoutingProfileId
   */
  readonly routingProfileId: string;

  /**
   * @schema DisassociateRoutingProfileQueuesRequest#QueueReferences
   */
  readonly queueReferences: RoutingProfileQueueReference[];

}

/**
 * @schema DisassociateSecurityKeyRequest
 */
export interface DisassociateSecurityKeyRequest {
  /**
   * @schema DisassociateSecurityKeyRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema DisassociateSecurityKeyRequest#AssociationId
   */
  readonly associationId: string;

}

/**
 * @schema GetContactAttributesRequest
 */
export interface GetContactAttributesRequest {
  /**
   * @schema GetContactAttributesRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema GetContactAttributesRequest#InitialContactId
   */
  readonly initialContactId: string;

}

/**
 * @schema GetContactAttributesResponse
 */
export interface GetContactAttributesResponse {
  /**
   * @schema GetContactAttributesResponse#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema GetCurrentMetricDataRequest
 */
export interface GetCurrentMetricDataRequest {
  /**
   * @schema GetCurrentMetricDataRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema GetCurrentMetricDataRequest#Filters
   */
  readonly filters: Filters;

  /**
   * @schema GetCurrentMetricDataRequest#Groupings
   */
  readonly groupings?: string[];

  /**
   * @schema GetCurrentMetricDataRequest#CurrentMetrics
   */
  readonly currentMetrics: CurrentMetric[];

  /**
   * @schema GetCurrentMetricDataRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetCurrentMetricDataRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetCurrentMetricDataResponse
 */
export interface GetCurrentMetricDataResponse {
  /**
   * @schema GetCurrentMetricDataResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetCurrentMetricDataResponse#MetricResults
   */
  readonly metricResults?: CurrentMetricResult[];

  /**
   * @schema GetCurrentMetricDataResponse#DataSnapshotTime
   */
  readonly dataSnapshotTime?: string;

}

/**
 * @schema GetFederationTokenRequest
 */
export interface GetFederationTokenRequest {
  /**
   * @schema GetFederationTokenRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema GetFederationTokenResponse
 */
export interface GetFederationTokenResponse {
  /**
   * @schema GetFederationTokenResponse#Credentials
   */
  readonly credentials?: Credentials;

}

/**
 * @schema GetMetricDataRequest
 */
export interface GetMetricDataRequest {
  /**
   * @schema GetMetricDataRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema GetMetricDataRequest#StartTime
   */
  readonly startTime: string;

  /**
   * @schema GetMetricDataRequest#EndTime
   */
  readonly endTime: string;

  /**
   * @schema GetMetricDataRequest#Filters
   */
  readonly filters: Filters;

  /**
   * @schema GetMetricDataRequest#Groupings
   */
  readonly groupings?: string[];

  /**
   * @schema GetMetricDataRequest#HistoricalMetrics
   */
  readonly historicalMetrics: HistoricalMetric[];

  /**
   * @schema GetMetricDataRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetMetricDataRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetMetricDataResponse
 */
export interface GetMetricDataResponse {
  /**
   * @schema GetMetricDataResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetMetricDataResponse#MetricResults
   */
  readonly metricResults?: HistoricalMetricResult[];

}

/**
 * @schema ListApprovedOriginsRequest
 */
export interface ListApprovedOriginsRequest {
  /**
   * @schema ListApprovedOriginsRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ListApprovedOriginsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListApprovedOriginsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListApprovedOriginsResponse
 */
export interface ListApprovedOriginsResponse {
  /**
   * @schema ListApprovedOriginsResponse#Origins
   */
  readonly origins?: string[];

  /**
   * @schema ListApprovedOriginsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListContactFlowsRequest
 */
export interface ListContactFlowsRequest {
  /**
   * @schema ListContactFlowsRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ListContactFlowsRequest#ContactFlowTypes
   */
  readonly contactFlowTypes?: string[];

  /**
   * @schema ListContactFlowsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListContactFlowsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListContactFlowsResponse
 */
export interface ListContactFlowsResponse {
  /**
   * @schema ListContactFlowsResponse#ContactFlowSummaryList
   */
  readonly contactFlowSummaryList?: ContactFlowSummary[];

  /**
   * @schema ListContactFlowsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListHoursOfOperationsRequest
 */
export interface ListHoursOfOperationsRequest {
  /**
   * @schema ListHoursOfOperationsRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ListHoursOfOperationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListHoursOfOperationsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListHoursOfOperationsResponse
 */
export interface ListHoursOfOperationsResponse {
  /**
   * @schema ListHoursOfOperationsResponse#HoursOfOperationSummaryList
   */
  readonly hoursOfOperationSummaryList?: HoursOfOperationSummary[];

  /**
   * @schema ListHoursOfOperationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListInstanceAttributesRequest
 */
export interface ListInstanceAttributesRequest {
  /**
   * @schema ListInstanceAttributesRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ListInstanceAttributesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListInstanceAttributesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListInstanceAttributesResponse
 */
export interface ListInstanceAttributesResponse {
  /**
   * @schema ListInstanceAttributesResponse#Attributes
   */
  readonly attributes?: Attribute[];

  /**
   * @schema ListInstanceAttributesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListInstanceStorageConfigsRequest
 */
export interface ListInstanceStorageConfigsRequest {
  /**
   * @schema ListInstanceStorageConfigsRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ListInstanceStorageConfigsRequest#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema ListInstanceStorageConfigsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListInstanceStorageConfigsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListInstanceStorageConfigsResponse
 */
export interface ListInstanceStorageConfigsResponse {
  /**
   * @schema ListInstanceStorageConfigsResponse#StorageConfigs
   */
  readonly storageConfigs?: InstanceStorageConfig[];

  /**
   * @schema ListInstanceStorageConfigsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListInstancesRequest
 */
export interface ListInstancesRequest {
  /**
   * @schema ListInstancesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListInstancesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListInstancesResponse
 */
export interface ListInstancesResponse {
  /**
   * @schema ListInstancesResponse#InstanceSummaryList
   */
  readonly instanceSummaryList?: InstanceSummary[];

  /**
   * @schema ListInstancesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListLambdaFunctionsRequest
 */
export interface ListLambdaFunctionsRequest {
  /**
   * @schema ListLambdaFunctionsRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ListLambdaFunctionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListLambdaFunctionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListLambdaFunctionsResponse
 */
export interface ListLambdaFunctionsResponse {
  /**
   * @schema ListLambdaFunctionsResponse#LambdaFunctions
   */
  readonly lambdaFunctions?: string[];

  /**
   * @schema ListLambdaFunctionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListLexBotsRequest
 */
export interface ListLexBotsRequest {
  /**
   * @schema ListLexBotsRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ListLexBotsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListLexBotsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListLexBotsResponse
 */
export interface ListLexBotsResponse {
  /**
   * @schema ListLexBotsResponse#LexBots
   */
  readonly lexBots?: LexBot[];

  /**
   * @schema ListLexBotsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPhoneNumbersRequest
 */
export interface ListPhoneNumbersRequest {
  /**
   * @schema ListPhoneNumbersRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ListPhoneNumbersRequest#PhoneNumberTypes
   */
  readonly phoneNumberTypes?: string[];

  /**
   * @schema ListPhoneNumbersRequest#PhoneNumberCountryCodes
   */
  readonly phoneNumberCountryCodes?: string[];

  /**
   * @schema ListPhoneNumbersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListPhoneNumbersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListPhoneNumbersResponse
 */
export interface ListPhoneNumbersResponse {
  /**
   * @schema ListPhoneNumbersResponse#PhoneNumberSummaryList
   */
  readonly phoneNumberSummaryList?: PhoneNumberSummary[];

  /**
   * @schema ListPhoneNumbersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPromptsRequest
 */
export interface ListPromptsRequest {
  /**
   * @schema ListPromptsRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ListPromptsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListPromptsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListPromptsResponse
 */
export interface ListPromptsResponse {
  /**
   * @schema ListPromptsResponse#PromptSummaryList
   */
  readonly promptSummaryList?: PromptSummary[];

  /**
   * @schema ListPromptsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListQueuesRequest
 */
export interface ListQueuesRequest {
  /**
   * @schema ListQueuesRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ListQueuesRequest#QueueTypes
   */
  readonly queueTypes?: string[];

  /**
   * @schema ListQueuesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListQueuesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListQueuesResponse
 */
export interface ListQueuesResponse {
  /**
   * @schema ListQueuesResponse#QueueSummaryList
   */
  readonly queueSummaryList?: QueueSummary[];

  /**
   * @schema ListQueuesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRoutingProfileQueuesRequest
 */
export interface ListRoutingProfileQueuesRequest {
  /**
   * @schema ListRoutingProfileQueuesRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ListRoutingProfileQueuesRequest#RoutingProfileId
   */
  readonly routingProfileId: string;

  /**
   * @schema ListRoutingProfileQueuesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRoutingProfileQueuesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListRoutingProfileQueuesResponse
 */
export interface ListRoutingProfileQueuesResponse {
  /**
   * @schema ListRoutingProfileQueuesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRoutingProfileQueuesResponse#RoutingProfileQueueConfigSummaryList
   */
  readonly routingProfileQueueConfigSummaryList?: RoutingProfileQueueConfigSummary[];

}

/**
 * @schema ListRoutingProfilesRequest
 */
export interface ListRoutingProfilesRequest {
  /**
   * @schema ListRoutingProfilesRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ListRoutingProfilesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRoutingProfilesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListRoutingProfilesResponse
 */
export interface ListRoutingProfilesResponse {
  /**
   * @schema ListRoutingProfilesResponse#RoutingProfileSummaryList
   */
  readonly routingProfileSummaryList?: RoutingProfileSummary[];

  /**
   * @schema ListRoutingProfilesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSecurityKeysRequest
 */
export interface ListSecurityKeysRequest {
  /**
   * @schema ListSecurityKeysRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ListSecurityKeysRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSecurityKeysRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListSecurityKeysResponse
 */
export interface ListSecurityKeysResponse {
  /**
   * @schema ListSecurityKeysResponse#SecurityKeys
   */
  readonly securityKeys?: SecurityKey[];

  /**
   * @schema ListSecurityKeysResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSecurityProfilesRequest
 */
export interface ListSecurityProfilesRequest {
  /**
   * @schema ListSecurityProfilesRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ListSecurityProfilesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSecurityProfilesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListSecurityProfilesResponse
 */
export interface ListSecurityProfilesResponse {
  /**
   * @schema ListSecurityProfilesResponse#SecurityProfileSummaryList
   */
  readonly securityProfileSummaryList?: SecurityProfileSummary[];

  /**
   * @schema ListSecurityProfilesResponse#NextToken
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
 * @schema ListUserHierarchyGroupsRequest
 */
export interface ListUserHierarchyGroupsRequest {
  /**
   * @schema ListUserHierarchyGroupsRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ListUserHierarchyGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListUserHierarchyGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListUserHierarchyGroupsResponse
 */
export interface ListUserHierarchyGroupsResponse {
  /**
   * @schema ListUserHierarchyGroupsResponse#UserHierarchyGroupSummaryList
   */
  readonly userHierarchyGroupSummaryList?: HierarchyGroupSummary[];

  /**
   * @schema ListUserHierarchyGroupsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListUsersRequest
 */
export interface ListUsersRequest {
  /**
   * @schema ListUsersRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ListUsersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListUsersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListUsersResponse
 */
export interface ListUsersResponse {
  /**
   * @schema ListUsersResponse#UserSummaryList
   */
  readonly userSummaryList?: UserSummary[];

  /**
   * @schema ListUsersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ResumeContactRecordingRequest
 */
export interface ResumeContactRecordingRequest {
  /**
   * @schema ResumeContactRecordingRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ResumeContactRecordingRequest#ContactId
   */
  readonly contactId: string;

  /**
   * @schema ResumeContactRecordingRequest#InitialContactId
   */
  readonly initialContactId: string;

}

/**
 * @schema ResumeContactRecordingResponse
 */
export interface ResumeContactRecordingResponse {
}

/**
 * @schema StartChatContactRequest
 */
export interface StartChatContactRequest {
  /**
   * @schema StartChatContactRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema StartChatContactRequest#ContactFlowId
   */
  readonly contactFlowId: string;

  /**
   * @schema StartChatContactRequest#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema StartChatContactRequest#ParticipantDetails
   */
  readonly participantDetails: ParticipantDetails;

  /**
   * @schema StartChatContactRequest#InitialMessage
   */
  readonly initialMessage?: ChatMessage;

  /**
   * @schema StartChatContactRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema StartChatContactResponse
 */
export interface StartChatContactResponse {
  /**
   * @schema StartChatContactResponse#ContactId
   */
  readonly contactId?: string;

  /**
   * @schema StartChatContactResponse#ParticipantId
   */
  readonly participantId?: string;

  /**
   * @schema StartChatContactResponse#ParticipantToken
   */
  readonly participantToken?: string;

}

/**
 * @schema StartContactRecordingRequest
 */
export interface StartContactRecordingRequest {
  /**
   * @schema StartContactRecordingRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema StartContactRecordingRequest#ContactId
   */
  readonly contactId: string;

  /**
   * @schema StartContactRecordingRequest#InitialContactId
   */
  readonly initialContactId: string;

  /**
   * @schema StartContactRecordingRequest#VoiceRecordingConfiguration
   */
  readonly voiceRecordingConfiguration: VoiceRecordingConfiguration;

}

/**
 * @schema StartContactRecordingResponse
 */
export interface StartContactRecordingResponse {
}

/**
 * @schema StartOutboundVoiceContactRequest
 */
export interface StartOutboundVoiceContactRequest {
  /**
   * @schema StartOutboundVoiceContactRequest#DestinationPhoneNumber
   */
  readonly destinationPhoneNumber: string;

  /**
   * @schema StartOutboundVoiceContactRequest#ContactFlowId
   */
  readonly contactFlowId: string;

  /**
   * @schema StartOutboundVoiceContactRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema StartOutboundVoiceContactRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema StartOutboundVoiceContactRequest#SourcePhoneNumber
   */
  readonly sourcePhoneNumber?: string;

  /**
   * @schema StartOutboundVoiceContactRequest#QueueId
   */
  readonly queueId?: string;

  /**
   * @schema StartOutboundVoiceContactRequest#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema StartOutboundVoiceContactResponse
 */
export interface StartOutboundVoiceContactResponse {
  /**
   * @schema StartOutboundVoiceContactResponse#ContactId
   */
  readonly contactId?: string;

}

/**
 * @schema StopContactRequest
 */
export interface StopContactRequest {
  /**
   * @schema StopContactRequest#ContactId
   */
  readonly contactId: string;

  /**
   * @schema StopContactRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema StopContactResponse
 */
export interface StopContactResponse {
}

/**
 * @schema StopContactRecordingRequest
 */
export interface StopContactRecordingRequest {
  /**
   * @schema StopContactRecordingRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema StopContactRecordingRequest#ContactId
   */
  readonly contactId: string;

  /**
   * @schema StopContactRecordingRequest#InitialContactId
   */
  readonly initialContactId: string;

}

/**
 * @schema StopContactRecordingResponse
 */
export interface StopContactRecordingResponse {
}

/**
 * @schema SuspendContactRecordingRequest
 */
export interface SuspendContactRecordingRequest {
  /**
   * @schema SuspendContactRecordingRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema SuspendContactRecordingRequest#ContactId
   */
  readonly contactId: string;

  /**
   * @schema SuspendContactRecordingRequest#InitialContactId
   */
  readonly initialContactId: string;

}

/**
 * @schema SuspendContactRecordingResponse
 */
export interface SuspendContactRecordingResponse {
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
 * @schema UpdateContactAttributesRequest
 */
export interface UpdateContactAttributesRequest {
  /**
   * @schema UpdateContactAttributesRequest#InitialContactId
   */
  readonly initialContactId: string;

  /**
   * @schema UpdateContactAttributesRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema UpdateContactAttributesRequest#Attributes
   */
  readonly attributes: { [key: string]: string };

}

/**
 * @schema UpdateContactAttributesResponse
 */
export interface UpdateContactAttributesResponse {
}

/**
 * @schema UpdateContactFlowContentRequest
 */
export interface UpdateContactFlowContentRequest {
  /**
   * @schema UpdateContactFlowContentRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema UpdateContactFlowContentRequest#ContactFlowId
   */
  readonly contactFlowId: string;

  /**
   * @schema UpdateContactFlowContentRequest#Content
   */
  readonly content: string;

}

/**
 * @schema UpdateContactFlowNameRequest
 */
export interface UpdateContactFlowNameRequest {
  /**
   * @schema UpdateContactFlowNameRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema UpdateContactFlowNameRequest#ContactFlowId
   */
  readonly contactFlowId: string;

  /**
   * @schema UpdateContactFlowNameRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateContactFlowNameRequest#Description
   */
  readonly description?: string;

}

/**
 * @schema UpdateInstanceAttributeRequest
 */
export interface UpdateInstanceAttributeRequest {
  /**
   * @schema UpdateInstanceAttributeRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema UpdateInstanceAttributeRequest#AttributeType
   */
  readonly attributeType: string;

  /**
   * @schema UpdateInstanceAttributeRequest#Value
   */
  readonly value: string;

}

/**
 * @schema UpdateInstanceStorageConfigRequest
 */
export interface UpdateInstanceStorageConfigRequest {
  /**
   * @schema UpdateInstanceStorageConfigRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema UpdateInstanceStorageConfigRequest#AssociationId
   */
  readonly associationId: string;

  /**
   * @schema UpdateInstanceStorageConfigRequest#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema UpdateInstanceStorageConfigRequest#StorageConfig
   */
  readonly storageConfig: InstanceStorageConfig;

}

/**
 * @schema UpdateRoutingProfileConcurrencyRequest
 */
export interface UpdateRoutingProfileConcurrencyRequest {
  /**
   * @schema UpdateRoutingProfileConcurrencyRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema UpdateRoutingProfileConcurrencyRequest#RoutingProfileId
   */
  readonly routingProfileId: string;

  /**
   * @schema UpdateRoutingProfileConcurrencyRequest#MediaConcurrencies
   */
  readonly mediaConcurrencies: MediaConcurrency[];

}

/**
 * @schema UpdateRoutingProfileDefaultOutboundQueueRequest
 */
export interface UpdateRoutingProfileDefaultOutboundQueueRequest {
  /**
   * @schema UpdateRoutingProfileDefaultOutboundQueueRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema UpdateRoutingProfileDefaultOutboundQueueRequest#RoutingProfileId
   */
  readonly routingProfileId: string;

  /**
   * @schema UpdateRoutingProfileDefaultOutboundQueueRequest#DefaultOutboundQueueId
   */
  readonly defaultOutboundQueueId: string;

}

/**
 * @schema UpdateRoutingProfileNameRequest
 */
export interface UpdateRoutingProfileNameRequest {
  /**
   * @schema UpdateRoutingProfileNameRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema UpdateRoutingProfileNameRequest#RoutingProfileId
   */
  readonly routingProfileId: string;

  /**
   * @schema UpdateRoutingProfileNameRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateRoutingProfileNameRequest#Description
   */
  readonly description?: string;

}

/**
 * @schema UpdateRoutingProfileQueuesRequest
 */
export interface UpdateRoutingProfileQueuesRequest {
  /**
   * @schema UpdateRoutingProfileQueuesRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema UpdateRoutingProfileQueuesRequest#RoutingProfileId
   */
  readonly routingProfileId: string;

  /**
   * @schema UpdateRoutingProfileQueuesRequest#QueueConfigs
   */
  readonly queueConfigs: RoutingProfileQueueConfig[];

}

/**
 * @schema UpdateUserHierarchyRequest
 */
export interface UpdateUserHierarchyRequest {
  /**
   * @schema UpdateUserHierarchyRequest#HierarchyGroupId
   */
  readonly hierarchyGroupId?: string;

  /**
   * @schema UpdateUserHierarchyRequest#UserId
   */
  readonly userId: string;

  /**
   * @schema UpdateUserHierarchyRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema UpdateUserHierarchyGroupNameRequest
 */
export interface UpdateUserHierarchyGroupNameRequest {
  /**
   * @schema UpdateUserHierarchyGroupNameRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateUserHierarchyGroupNameRequest#HierarchyGroupId
   */
  readonly hierarchyGroupId: string;

  /**
   * @schema UpdateUserHierarchyGroupNameRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema UpdateUserHierarchyStructureRequest
 */
export interface UpdateUserHierarchyStructureRequest {
  /**
   * @schema UpdateUserHierarchyStructureRequest#HierarchyStructure
   */
  readonly hierarchyStructure: HierarchyStructureUpdate;

  /**
   * @schema UpdateUserHierarchyStructureRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema UpdateUserIdentityInfoRequest
 */
export interface UpdateUserIdentityInfoRequest {
  /**
   * @schema UpdateUserIdentityInfoRequest#IdentityInfo
   */
  readonly identityInfo: UserIdentityInfo;

  /**
   * @schema UpdateUserIdentityInfoRequest#UserId
   */
  readonly userId: string;

  /**
   * @schema UpdateUserIdentityInfoRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema UpdateUserPhoneConfigRequest
 */
export interface UpdateUserPhoneConfigRequest {
  /**
   * @schema UpdateUserPhoneConfigRequest#PhoneConfig
   */
  readonly phoneConfig: UserPhoneConfig;

  /**
   * @schema UpdateUserPhoneConfigRequest#UserId
   */
  readonly userId: string;

  /**
   * @schema UpdateUserPhoneConfigRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema UpdateUserRoutingProfileRequest
 */
export interface UpdateUserRoutingProfileRequest {
  /**
   * @schema UpdateUserRoutingProfileRequest#RoutingProfileId
   */
  readonly routingProfileId: string;

  /**
   * @schema UpdateUserRoutingProfileRequest#UserId
   */
  readonly userId: string;

  /**
   * @schema UpdateUserRoutingProfileRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema UpdateUserSecurityProfilesRequest
 */
export interface UpdateUserSecurityProfilesRequest {
  /**
   * @schema UpdateUserSecurityProfilesRequest#SecurityProfileIds
   */
  readonly securityProfileIds: string[];

  /**
   * @schema UpdateUserSecurityProfilesRequest#UserId
   */
  readonly userId: string;

  /**
   * @schema UpdateUserSecurityProfilesRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema InstanceStorageConfig
 */
export interface InstanceStorageConfig {
  /**
   * @schema InstanceStorageConfig#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema InstanceStorageConfig#StorageType
   */
  readonly storageType: string;

  /**
   * @schema InstanceStorageConfig#S3Config
   */
  readonly s3Config?: S3Config;

  /**
   * @schema InstanceStorageConfig#KinesisVideoStreamConfig
   */
  readonly kinesisVideoStreamConfig?: KinesisVideoStreamConfig;

  /**
   * @schema InstanceStorageConfig#KinesisStreamConfig
   */
  readonly kinesisStreamConfig?: KinesisStreamConfig;

  /**
   * @schema InstanceStorageConfig#KinesisFirehoseConfig
   */
  readonly kinesisFirehoseConfig?: KinesisFirehoseConfig;

}

/**
 * @schema LexBot
 */
export interface LexBot {
  /**
   * @schema LexBot#Name
   */
  readonly name?: string;

  /**
   * @schema LexBot#LexRegion
   */
  readonly lexRegion?: string;

}

/**
 * @schema RoutingProfileQueueConfig
 */
export interface RoutingProfileQueueConfig {
  /**
   * @schema RoutingProfileQueueConfig#QueueReference
   */
  readonly queueReference: RoutingProfileQueueReference;

  /**
   * @schema RoutingProfileQueueConfig#Priority
   */
  readonly priority: number;

  /**
   * @schema RoutingProfileQueueConfig#Delay
   */
  readonly delay: number;

}

/**
 * @schema MediaConcurrency
 */
export interface MediaConcurrency {
  /**
   * @schema MediaConcurrency#Channel
   */
  readonly channel: string;

  /**
   * @schema MediaConcurrency#Concurrency
   */
  readonly concurrency: number;

}

/**
 * @schema UserIdentityInfo
 */
export interface UserIdentityInfo {
  /**
   * @schema UserIdentityInfo#FirstName
   */
  readonly firstName?: string;

  /**
   * @schema UserIdentityInfo#LastName
   */
  readonly lastName?: string;

  /**
   * @schema UserIdentityInfo#Email
   */
  readonly email?: string;

}

/**
 * @schema UserPhoneConfig
 */
export interface UserPhoneConfig {
  /**
   * @schema UserPhoneConfig#PhoneType
   */
  readonly phoneType: string;

  /**
   * @schema UserPhoneConfig#AutoAccept
   */
  readonly autoAccept?: boolean;

  /**
   * @schema UserPhoneConfig#AfterContactWorkTimeLimit
   */
  readonly afterContactWorkTimeLimit?: number;

  /**
   * @schema UserPhoneConfig#DeskPhoneNumber
   */
  readonly deskPhoneNumber?: string;

}

/**
 * @schema ContactFlow
 */
export interface ContactFlow {
  /**
   * @schema ContactFlow#Arn
   */
  readonly arn?: string;

  /**
   * @schema ContactFlow#Id
   */
  readonly id?: string;

  /**
   * @schema ContactFlow#Name
   */
  readonly name?: string;

  /**
   * @schema ContactFlow#Type
   */
  readonly type?: string;

  /**
   * @schema ContactFlow#Description
   */
  readonly description?: string;

  /**
   * @schema ContactFlow#Content
   */
  readonly content?: string;

  /**
   * @schema ContactFlow#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema Instance
 */
export interface Instance {
  /**
   * @schema Instance#Id
   */
  readonly id?: string;

  /**
   * @schema Instance#Arn
   */
  readonly arn?: string;

  /**
   * @schema Instance#IdentityManagementType
   */
  readonly identityManagementType?: string;

  /**
   * @schema Instance#InstanceAlias
   */
  readonly instanceAlias?: string;

  /**
   * @schema Instance#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema Instance#ServiceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema Instance#InstanceStatus
   */
  readonly instanceStatus?: string;

  /**
   * @schema Instance#StatusReason
   */
  readonly statusReason?: InstanceStatusReason;

  /**
   * @schema Instance#InboundCallsEnabled
   */
  readonly inboundCallsEnabled?: boolean;

  /**
   * @schema Instance#OutboundCallsEnabled
   */
  readonly outboundCallsEnabled?: boolean;

}

/**
 * @schema Attribute
 */
export interface Attribute {
  /**
   * @schema Attribute#AttributeType
   */
  readonly attributeType?: string;

  /**
   * @schema Attribute#Value
   */
  readonly value?: string;

}

/**
 * @schema RoutingProfile
 */
export interface RoutingProfile {
  /**
   * @schema RoutingProfile#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema RoutingProfile#Name
   */
  readonly name?: string;

  /**
   * @schema RoutingProfile#RoutingProfileArn
   */
  readonly routingProfileArn?: string;

  /**
   * @schema RoutingProfile#RoutingProfileId
   */
  readonly routingProfileId?: string;

  /**
   * @schema RoutingProfile#Description
   */
  readonly description?: string;

  /**
   * @schema RoutingProfile#MediaConcurrencies
   */
  readonly mediaConcurrencies?: MediaConcurrency[];

  /**
   * @schema RoutingProfile#DefaultOutboundQueueId
   */
  readonly defaultOutboundQueueId?: string;

  /**
   * @schema RoutingProfile#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema User
 */
export interface User {
  /**
   * @schema User#Id
   */
  readonly id?: string;

  /**
   * @schema User#Arn
   */
  readonly arn?: string;

  /**
   * @schema User#Username
   */
  readonly username?: string;

  /**
   * @schema User#IdentityInfo
   */
  readonly identityInfo?: UserIdentityInfo;

  /**
   * @schema User#PhoneConfig
   */
  readonly phoneConfig?: UserPhoneConfig;

  /**
   * @schema User#DirectoryUserId
   */
  readonly directoryUserId?: string;

  /**
   * @schema User#SecurityProfileIds
   */
  readonly securityProfileIds?: string[];

  /**
   * @schema User#RoutingProfileId
   */
  readonly routingProfileId?: string;

  /**
   * @schema User#HierarchyGroupId
   */
  readonly hierarchyGroupId?: string;

  /**
   * @schema User#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema HierarchyGroup
 */
export interface HierarchyGroup {
  /**
   * @schema HierarchyGroup#Id
   */
  readonly id?: string;

  /**
   * @schema HierarchyGroup#Arn
   */
  readonly arn?: string;

  /**
   * @schema HierarchyGroup#Name
   */
  readonly name?: string;

  /**
   * @schema HierarchyGroup#LevelId
   */
  readonly levelId?: string;

  /**
   * @schema HierarchyGroup#HierarchyPath
   */
  readonly hierarchyPath?: HierarchyPath;

}

/**
 * @schema HierarchyStructure
 */
export interface HierarchyStructure {
  /**
   * @schema HierarchyStructure#LevelOne
   */
  readonly levelOne?: HierarchyLevel;

  /**
   * @schema HierarchyStructure#LevelTwo
   */
  readonly levelTwo?: HierarchyLevel;

  /**
   * @schema HierarchyStructure#LevelThree
   */
  readonly levelThree?: HierarchyLevel;

  /**
   * @schema HierarchyStructure#LevelFour
   */
  readonly levelFour?: HierarchyLevel;

  /**
   * @schema HierarchyStructure#LevelFive
   */
  readonly levelFive?: HierarchyLevel;

}

/**
 * @schema RoutingProfileQueueReference
 */
export interface RoutingProfileQueueReference {
  /**
   * @schema RoutingProfileQueueReference#QueueId
   */
  readonly queueId: string;

  /**
   * @schema RoutingProfileQueueReference#Channel
   */
  readonly channel: string;

}

/**
 * @schema Filters
 */
export interface Filters {
  /**
   * @schema Filters#Queues
   */
  readonly queues?: string[];

  /**
   * @schema Filters#Channels
   */
  readonly channels?: string[];

}

/**
 * @schema CurrentMetric
 */
export interface CurrentMetric {
  /**
   * @schema CurrentMetric#Name
   */
  readonly name?: string;

  /**
   * @schema CurrentMetric#Unit
   */
  readonly unit?: string;

}

/**
 * @schema CurrentMetricResult
 */
export interface CurrentMetricResult {
  /**
   * @schema CurrentMetricResult#Dimensions
   */
  readonly dimensions?: Dimensions;

  /**
   * @schema CurrentMetricResult#Collections
   */
  readonly collections?: CurrentMetricData[];

}

/**
 * @schema Credentials
 */
export interface Credentials {
  /**
   * @schema Credentials#AccessToken
   */
  readonly accessToken?: string;

  /**
   * @schema Credentials#AccessTokenExpiration
   */
  readonly accessTokenExpiration?: string;

  /**
   * @schema Credentials#RefreshToken
   */
  readonly refreshToken?: string;

  /**
   * @schema Credentials#RefreshTokenExpiration
   */
  readonly refreshTokenExpiration?: string;

}

/**
 * @schema HistoricalMetric
 */
export interface HistoricalMetric {
  /**
   * @schema HistoricalMetric#Name
   */
  readonly name?: string;

  /**
   * @schema HistoricalMetric#Threshold
   */
  readonly threshold?: Threshold;

  /**
   * @schema HistoricalMetric#Statistic
   */
  readonly statistic?: string;

  /**
   * @schema HistoricalMetric#Unit
   */
  readonly unit?: string;

}

/**
 * @schema HistoricalMetricResult
 */
export interface HistoricalMetricResult {
  /**
   * @schema HistoricalMetricResult#Dimensions
   */
  readonly dimensions?: Dimensions;

  /**
   * @schema HistoricalMetricResult#Collections
   */
  readonly collections?: HistoricalMetricData[];

}

/**
 * @schema ContactFlowSummary
 */
export interface ContactFlowSummary {
  /**
   * @schema ContactFlowSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ContactFlowSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema ContactFlowSummary#Name
   */
  readonly name?: string;

  /**
   * @schema ContactFlowSummary#ContactFlowType
   */
  readonly contactFlowType?: string;

}

/**
 * @schema HoursOfOperationSummary
 */
export interface HoursOfOperationSummary {
  /**
   * @schema HoursOfOperationSummary#Id
   */
  readonly id?: string;

  /**
   * @schema HoursOfOperationSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema HoursOfOperationSummary#Name
   */
  readonly name?: string;

}

/**
 * @schema InstanceSummary
 */
export interface InstanceSummary {
  /**
   * @schema InstanceSummary#Id
   */
  readonly id?: string;

  /**
   * @schema InstanceSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema InstanceSummary#IdentityManagementType
   */
  readonly identityManagementType?: string;

  /**
   * @schema InstanceSummary#InstanceAlias
   */
  readonly instanceAlias?: string;

  /**
   * @schema InstanceSummary#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema InstanceSummary#ServiceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema InstanceSummary#InstanceStatus
   */
  readonly instanceStatus?: string;

  /**
   * @schema InstanceSummary#InboundCallsEnabled
   */
  readonly inboundCallsEnabled?: boolean;

  /**
   * @schema InstanceSummary#OutboundCallsEnabled
   */
  readonly outboundCallsEnabled?: boolean;

}

/**
 * @schema PhoneNumberSummary
 */
export interface PhoneNumberSummary {
  /**
   * @schema PhoneNumberSummary#Id
   */
  readonly id?: string;

  /**
   * @schema PhoneNumberSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema PhoneNumberSummary#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema PhoneNumberSummary#PhoneNumberType
   */
  readonly phoneNumberType?: string;

  /**
   * @schema PhoneNumberSummary#PhoneNumberCountryCode
   */
  readonly phoneNumberCountryCode?: string;

}

/**
 * @schema PromptSummary
 */
export interface PromptSummary {
  /**
   * @schema PromptSummary#Id
   */
  readonly id?: string;

  /**
   * @schema PromptSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema PromptSummary#Name
   */
  readonly name?: string;

}

/**
 * @schema QueueSummary
 */
export interface QueueSummary {
  /**
   * @schema QueueSummary#Id
   */
  readonly id?: string;

  /**
   * @schema QueueSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema QueueSummary#Name
   */
  readonly name?: string;

  /**
   * @schema QueueSummary#QueueType
   */
  readonly queueType?: string;

}

/**
 * @schema RoutingProfileQueueConfigSummary
 */
export interface RoutingProfileQueueConfigSummary {
  /**
   * @schema RoutingProfileQueueConfigSummary#QueueId
   */
  readonly queueId: string;

  /**
   * @schema RoutingProfileQueueConfigSummary#QueueArn
   */
  readonly queueArn: string;

  /**
   * @schema RoutingProfileQueueConfigSummary#QueueName
   */
  readonly queueName: string;

  /**
   * @schema RoutingProfileQueueConfigSummary#Priority
   */
  readonly priority: number;

  /**
   * @schema RoutingProfileQueueConfigSummary#Delay
   */
  readonly delay: number;

  /**
   * @schema RoutingProfileQueueConfigSummary#Channel
   */
  readonly channel: string;

}

/**
 * @schema RoutingProfileSummary
 */
export interface RoutingProfileSummary {
  /**
   * @schema RoutingProfileSummary#Id
   */
  readonly id?: string;

  /**
   * @schema RoutingProfileSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema RoutingProfileSummary#Name
   */
  readonly name?: string;

}

/**
 * @schema SecurityKey
 */
export interface SecurityKey {
  /**
   * @schema SecurityKey#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema SecurityKey#Key
   */
  readonly key?: string;

  /**
   * @schema SecurityKey#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema SecurityProfileSummary
 */
export interface SecurityProfileSummary {
  /**
   * @schema SecurityProfileSummary#Id
   */
  readonly id?: string;

  /**
   * @schema SecurityProfileSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema SecurityProfileSummary#Name
   */
  readonly name?: string;

}

/**
 * @schema HierarchyGroupSummary
 */
export interface HierarchyGroupSummary {
  /**
   * @schema HierarchyGroupSummary#Id
   */
  readonly id?: string;

  /**
   * @schema HierarchyGroupSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema HierarchyGroupSummary#Name
   */
  readonly name?: string;

}

/**
 * @schema UserSummary
 */
export interface UserSummary {
  /**
   * @schema UserSummary#Id
   */
  readonly id?: string;

  /**
   * @schema UserSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema UserSummary#Username
   */
  readonly username?: string;

}

/**
 * @schema ParticipantDetails
 */
export interface ParticipantDetails {
  /**
   * @schema ParticipantDetails#DisplayName
   */
  readonly displayName: string;

}

/**
 * @schema ChatMessage
 */
export interface ChatMessage {
  /**
   * @schema ChatMessage#ContentType
   */
  readonly contentType: string;

  /**
   * @schema ChatMessage#Content
   */
  readonly content: string;

}

/**
 * @schema VoiceRecordingConfiguration
 */
export interface VoiceRecordingConfiguration {
  /**
   * @schema VoiceRecordingConfiguration#VoiceRecordingTrack
   */
  readonly voiceRecordingTrack?: string;

}

/**
 * @schema HierarchyStructureUpdate
 */
export interface HierarchyStructureUpdate {
  /**
   * @schema HierarchyStructureUpdate#LevelOne
   */
  readonly levelOne?: HierarchyLevelUpdate;

  /**
   * @schema HierarchyStructureUpdate#LevelTwo
   */
  readonly levelTwo?: HierarchyLevelUpdate;

  /**
   * @schema HierarchyStructureUpdate#LevelThree
   */
  readonly levelThree?: HierarchyLevelUpdate;

  /**
   * @schema HierarchyStructureUpdate#LevelFour
   */
  readonly levelFour?: HierarchyLevelUpdate;

  /**
   * @schema HierarchyStructureUpdate#LevelFive
   */
  readonly levelFive?: HierarchyLevelUpdate;

}

/**
 * @schema S3Config
 */
export interface S3Config {
  /**
   * @schema S3Config#BucketName
   */
  readonly bucketName: string;

  /**
   * @schema S3Config#BucketPrefix
   */
  readonly bucketPrefix: string;

  /**
   * @schema S3Config#EncryptionConfig
   */
  readonly encryptionConfig?: EncryptionConfig;

}

/**
 * @schema KinesisVideoStreamConfig
 */
export interface KinesisVideoStreamConfig {
  /**
   * @schema KinesisVideoStreamConfig#Prefix
   */
  readonly prefix: string;

  /**
   * @schema KinesisVideoStreamConfig#RetentionPeriodHours
   */
  readonly retentionPeriodHours: number;

  /**
   * @schema KinesisVideoStreamConfig#EncryptionConfig
   */
  readonly encryptionConfig: EncryptionConfig;

}

/**
 * @schema KinesisStreamConfig
 */
export interface KinesisStreamConfig {
  /**
   * @schema KinesisStreamConfig#StreamArn
   */
  readonly streamArn: string;

}

/**
 * @schema KinesisFirehoseConfig
 */
export interface KinesisFirehoseConfig {
  /**
   * @schema KinesisFirehoseConfig#FirehoseArn
   */
  readonly firehoseArn: string;

}

/**
 * @schema InstanceStatusReason
 */
export interface InstanceStatusReason {
  /**
   * @schema InstanceStatusReason#Message
   */
  readonly message?: string;

}

/**
 * @schema HierarchyPath
 */
export interface HierarchyPath {
  /**
   * @schema HierarchyPath#LevelOne
   */
  readonly levelOne?: HierarchyGroupSummary;

  /**
   * @schema HierarchyPath#LevelTwo
   */
  readonly levelTwo?: HierarchyGroupSummary;

  /**
   * @schema HierarchyPath#LevelThree
   */
  readonly levelThree?: HierarchyGroupSummary;

  /**
   * @schema HierarchyPath#LevelFour
   */
  readonly levelFour?: HierarchyGroupSummary;

  /**
   * @schema HierarchyPath#LevelFive
   */
  readonly levelFive?: HierarchyGroupSummary;

}

/**
 * @schema HierarchyLevel
 */
export interface HierarchyLevel {
  /**
   * @schema HierarchyLevel#Id
   */
  readonly id?: string;

  /**
   * @schema HierarchyLevel#Arn
   */
  readonly arn?: string;

  /**
   * @schema HierarchyLevel#Name
   */
  readonly name?: string;

}

/**
 * @schema Dimensions
 */
export interface Dimensions {
  /**
   * @schema Dimensions#Queue
   */
  readonly queue?: QueueReference;

  /**
   * @schema Dimensions#Channel
   */
  readonly channel?: string;

}

/**
 * @schema CurrentMetricData
 */
export interface CurrentMetricData {
  /**
   * @schema CurrentMetricData#Metric
   */
  readonly metric?: CurrentMetric;

  /**
   * @schema CurrentMetricData#Value
   */
  readonly value?: number;

}

/**
 * @schema Threshold
 */
export interface Threshold {
  /**
   * @schema Threshold#Comparison
   */
  readonly comparison?: string;

  /**
   * @schema Threshold#ThresholdValue
   */
  readonly thresholdValue?: number;

}

/**
 * @schema HistoricalMetricData
 */
export interface HistoricalMetricData {
  /**
   * @schema HistoricalMetricData#Metric
   */
  readonly metric?: HistoricalMetric;

  /**
   * @schema HistoricalMetricData#Value
   */
  readonly value?: number;

}

/**
 * @schema HierarchyLevelUpdate
 */
export interface HierarchyLevelUpdate {
  /**
   * @schema HierarchyLevelUpdate#Name
   */
  readonly name: string;

}

/**
 * @schema EncryptionConfig
 */
export interface EncryptionConfig {
  /**
   * @schema EncryptionConfig#EncryptionType
   */
  readonly encryptionType: string;

  /**
   * @schema EncryptionConfig#KeyId
   */
  readonly keyId: string;

}

/**
 * @schema QueueReference
 */
export interface QueueReference {
  /**
   * @schema QueueReference#Id
   */
  readonly id?: string;

  /**
   * @schema QueueReference#Arn
   */
  readonly arn?: string;

}
