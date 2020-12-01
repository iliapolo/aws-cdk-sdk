/**
 * @schema AddAttributesToFindingsRequest
 */
export interface AddAttributesToFindingsRequest {
  /**
   * @schema AddAttributesToFindingsRequest#findingArns
   */
  readonly findingArns: string[];

  /**
   * @schema AddAttributesToFindingsRequest#attributes
   */
  readonly attributes: Attribute[];

}

/**
 * @schema AddAttributesToFindingsResponse
 */
export interface AddAttributesToFindingsResponse {
  /**
   * @schema AddAttributesToFindingsResponse#failedItems
   */
  readonly failedItems: { [key: string]: FailedItemDetails };

}

/**
 * @schema CreateAssessmentTargetRequest
 */
export interface CreateAssessmentTargetRequest {
  /**
   * @schema CreateAssessmentTargetRequest#assessmentTargetName
   */
  readonly assessmentTargetName: string;

  /**
   * @schema CreateAssessmentTargetRequest#resourceGroupArn
   */
  readonly resourceGroupArn?: string;

}

/**
 * @schema CreateAssessmentTargetResponse
 */
export interface CreateAssessmentTargetResponse {
  /**
   * @schema CreateAssessmentTargetResponse#assessmentTargetArn
   */
  readonly assessmentTargetArn: string;

}

/**
 * @schema CreateAssessmentTemplateRequest
 */
export interface CreateAssessmentTemplateRequest {
  /**
   * @schema CreateAssessmentTemplateRequest#assessmentTargetArn
   */
  readonly assessmentTargetArn: string;

  /**
   * @schema CreateAssessmentTemplateRequest#assessmentTemplateName
   */
  readonly assessmentTemplateName: string;

  /**
   * @schema CreateAssessmentTemplateRequest#durationInSeconds
   */
  readonly durationInSeconds: number;

  /**
   * @schema CreateAssessmentTemplateRequest#rulesPackageArns
   */
  readonly rulesPackageArns: string[];

  /**
   * @schema CreateAssessmentTemplateRequest#userAttributesForFindings
   */
  readonly userAttributesForFindings?: Attribute[];

}

/**
 * @schema CreateAssessmentTemplateResponse
 */
export interface CreateAssessmentTemplateResponse {
  /**
   * @schema CreateAssessmentTemplateResponse#assessmentTemplateArn
   */
  readonly assessmentTemplateArn: string;

}

/**
 * @schema CreateExclusionsPreviewRequest
 */
export interface CreateExclusionsPreviewRequest {
  /**
   * @schema CreateExclusionsPreviewRequest#assessmentTemplateArn
   */
  readonly assessmentTemplateArn: string;

}

/**
 * @schema CreateExclusionsPreviewResponse
 */
export interface CreateExclusionsPreviewResponse {
  /**
   * @schema CreateExclusionsPreviewResponse#previewToken
   */
  readonly previewToken: string;

}

/**
 * @schema CreateResourceGroupRequest
 */
export interface CreateResourceGroupRequest {
  /**
   * @schema CreateResourceGroupRequest#resourceGroupTags
   */
  readonly resourceGroupTags: ResourceGroupTag[];

}

/**
 * @schema CreateResourceGroupResponse
 */
export interface CreateResourceGroupResponse {
  /**
   * @schema CreateResourceGroupResponse#resourceGroupArn
   */
  readonly resourceGroupArn: string;

}

/**
 * @schema DeleteAssessmentRunRequest
 */
export interface DeleteAssessmentRunRequest {
  /**
   * @schema DeleteAssessmentRunRequest#assessmentRunArn
   */
  readonly assessmentRunArn: string;

}

/**
 * @schema DeleteAssessmentTargetRequest
 */
export interface DeleteAssessmentTargetRequest {
  /**
   * @schema DeleteAssessmentTargetRequest#assessmentTargetArn
   */
  readonly assessmentTargetArn: string;

}

/**
 * @schema DeleteAssessmentTemplateRequest
 */
export interface DeleteAssessmentTemplateRequest {
  /**
   * @schema DeleteAssessmentTemplateRequest#assessmentTemplateArn
   */
  readonly assessmentTemplateArn: string;

}

/**
 * @schema DescribeAssessmentRunsRequest
 */
export interface DescribeAssessmentRunsRequest {
  /**
   * @schema DescribeAssessmentRunsRequest#assessmentRunArns
   */
  readonly assessmentRunArns: string[];

}

/**
 * @schema DescribeAssessmentRunsResponse
 */
export interface DescribeAssessmentRunsResponse {
  /**
   * @schema DescribeAssessmentRunsResponse#assessmentRuns
   */
  readonly assessmentRuns: AssessmentRun[];

  /**
   * @schema DescribeAssessmentRunsResponse#failedItems
   */
  readonly failedItems: { [key: string]: FailedItemDetails };

}

/**
 * @schema DescribeAssessmentTargetsRequest
 */
export interface DescribeAssessmentTargetsRequest {
  /**
   * @schema DescribeAssessmentTargetsRequest#assessmentTargetArns
   */
  readonly assessmentTargetArns: string[];

}

/**
 * @schema DescribeAssessmentTargetsResponse
 */
export interface DescribeAssessmentTargetsResponse {
  /**
   * @schema DescribeAssessmentTargetsResponse#assessmentTargets
   */
  readonly assessmentTargets: AssessmentTarget[];

  /**
   * @schema DescribeAssessmentTargetsResponse#failedItems
   */
  readonly failedItems: { [key: string]: FailedItemDetails };

}

/**
 * @schema DescribeAssessmentTemplatesRequest
 */
export interface DescribeAssessmentTemplatesRequest {
  /**
   * @schema DescribeAssessmentTemplatesRequest#assessmentTemplateArns
   */
  readonly assessmentTemplateArns: string[];

}

/**
 * @schema DescribeAssessmentTemplatesResponse
 */
export interface DescribeAssessmentTemplatesResponse {
  /**
   * @schema DescribeAssessmentTemplatesResponse#assessmentTemplates
   */
  readonly assessmentTemplates: AssessmentTemplate[];

  /**
   * @schema DescribeAssessmentTemplatesResponse#failedItems
   */
  readonly failedItems: { [key: string]: FailedItemDetails };

}

/**
 * @schema DescribeCrossAccountAccessRoleResponse
 */
export interface DescribeCrossAccountAccessRoleResponse {
  /**
   * @schema DescribeCrossAccountAccessRoleResponse#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema DescribeCrossAccountAccessRoleResponse#valid
   */
  readonly valid: boolean;

  /**
   * @schema DescribeCrossAccountAccessRoleResponse#registeredAt
   */
  readonly registeredAt: string;

}

/**
 * @schema DescribeExclusionsRequest
 */
export interface DescribeExclusionsRequest {
  /**
   * @schema DescribeExclusionsRequest#exclusionArns
   */
  readonly exclusionArns: string[];

  /**
   * @schema DescribeExclusionsRequest#locale
   */
  readonly locale?: string;

}

/**
 * @schema DescribeExclusionsResponse
 */
export interface DescribeExclusionsResponse {
  /**
   * @schema DescribeExclusionsResponse#exclusions
   */
  readonly exclusions: { [key: string]: Exclusion };

  /**
   * @schema DescribeExclusionsResponse#failedItems
   */
  readonly failedItems: { [key: string]: FailedItemDetails };

}

/**
 * @schema DescribeFindingsRequest
 */
export interface DescribeFindingsRequest {
  /**
   * @schema DescribeFindingsRequest#findingArns
   */
  readonly findingArns: string[];

  /**
   * @schema DescribeFindingsRequest#locale
   */
  readonly locale?: string;

}

/**
 * @schema DescribeFindingsResponse
 */
export interface DescribeFindingsResponse {
  /**
   * @schema DescribeFindingsResponse#findings
   */
  readonly findings: Finding[];

  /**
   * @schema DescribeFindingsResponse#failedItems
   */
  readonly failedItems: { [key: string]: FailedItemDetails };

}

/**
 * @schema DescribeResourceGroupsRequest
 */
export interface DescribeResourceGroupsRequest {
  /**
   * @schema DescribeResourceGroupsRequest#resourceGroupArns
   */
  readonly resourceGroupArns: string[];

}

/**
 * @schema DescribeResourceGroupsResponse
 */
export interface DescribeResourceGroupsResponse {
  /**
   * @schema DescribeResourceGroupsResponse#resourceGroups
   */
  readonly resourceGroups: ResourceGroup[];

  /**
   * @schema DescribeResourceGroupsResponse#failedItems
   */
  readonly failedItems: { [key: string]: FailedItemDetails };

}

/**
 * @schema DescribeRulesPackagesRequest
 */
export interface DescribeRulesPackagesRequest {
  /**
   * @schema DescribeRulesPackagesRequest#rulesPackageArns
   */
  readonly rulesPackageArns: string[];

  /**
   * @schema DescribeRulesPackagesRequest#locale
   */
  readonly locale?: string;

}

/**
 * @schema DescribeRulesPackagesResponse
 */
export interface DescribeRulesPackagesResponse {
  /**
   * @schema DescribeRulesPackagesResponse#rulesPackages
   */
  readonly rulesPackages: RulesPackage[];

  /**
   * @schema DescribeRulesPackagesResponse#failedItems
   */
  readonly failedItems: { [key: string]: FailedItemDetails };

}

/**
 * @schema GetAssessmentReportRequest
 */
export interface GetAssessmentReportRequest {
  /**
   * @schema GetAssessmentReportRequest#assessmentRunArn
   */
  readonly assessmentRunArn: string;

  /**
   * @schema GetAssessmentReportRequest#reportFileFormat
   */
  readonly reportFileFormat: string;

  /**
   * @schema GetAssessmentReportRequest#reportType
   */
  readonly reportType: string;

}

/**
 * @schema GetAssessmentReportResponse
 */
export interface GetAssessmentReportResponse {
  /**
   * @schema GetAssessmentReportResponse#status
   */
  readonly status: string;

  /**
   * @schema GetAssessmentReportResponse#url
   */
  readonly url?: string;

}

/**
 * @schema GetExclusionsPreviewRequest
 */
export interface GetExclusionsPreviewRequest {
  /**
   * @schema GetExclusionsPreviewRequest#assessmentTemplateArn
   */
  readonly assessmentTemplateArn: string;

  /**
   * @schema GetExclusionsPreviewRequest#previewToken
   */
  readonly previewToken: string;

  /**
   * @schema GetExclusionsPreviewRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetExclusionsPreviewRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetExclusionsPreviewRequest#locale
   */
  readonly locale?: string;

}

/**
 * @schema GetExclusionsPreviewResponse
 */
export interface GetExclusionsPreviewResponse {
  /**
   * @schema GetExclusionsPreviewResponse#previewStatus
   */
  readonly previewStatus: string;

  /**
   * @schema GetExclusionsPreviewResponse#exclusionPreviews
   */
  readonly exclusionPreviews?: ExclusionPreview[];

  /**
   * @schema GetExclusionsPreviewResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetTelemetryMetadataRequest
 */
export interface GetTelemetryMetadataRequest {
  /**
   * @schema GetTelemetryMetadataRequest#assessmentRunArn
   */
  readonly assessmentRunArn: string;

}

/**
 * @schema GetTelemetryMetadataResponse
 */
export interface GetTelemetryMetadataResponse {
  /**
   * @schema GetTelemetryMetadataResponse#telemetryMetadata
   */
  readonly telemetryMetadata: TelemetryMetadata[];

}

/**
 * @schema ListAssessmentRunAgentsRequest
 */
export interface ListAssessmentRunAgentsRequest {
  /**
   * @schema ListAssessmentRunAgentsRequest#assessmentRunArn
   */
  readonly assessmentRunArn: string;

  /**
   * @schema ListAssessmentRunAgentsRequest#filter
   */
  readonly filter?: AgentFilter;

  /**
   * @schema ListAssessmentRunAgentsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAssessmentRunAgentsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListAssessmentRunAgentsResponse
 */
export interface ListAssessmentRunAgentsResponse {
  /**
   * @schema ListAssessmentRunAgentsResponse#assessmentRunAgents
   */
  readonly assessmentRunAgents: AssessmentRunAgent[];

  /**
   * @schema ListAssessmentRunAgentsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAssessmentRunsRequest
 */
export interface ListAssessmentRunsRequest {
  /**
   * @schema ListAssessmentRunsRequest#assessmentTemplateArns
   */
  readonly assessmentTemplateArns?: string[];

  /**
   * @schema ListAssessmentRunsRequest#filter
   */
  readonly filter?: AssessmentRunFilter;

  /**
   * @schema ListAssessmentRunsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAssessmentRunsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListAssessmentRunsResponse
 */
export interface ListAssessmentRunsResponse {
  /**
   * @schema ListAssessmentRunsResponse#assessmentRunArns
   */
  readonly assessmentRunArns: string[];

  /**
   * @schema ListAssessmentRunsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAssessmentTargetsRequest
 */
export interface ListAssessmentTargetsRequest {
  /**
   * @schema ListAssessmentTargetsRequest#filter
   */
  readonly filter?: AssessmentTargetFilter;

  /**
   * @schema ListAssessmentTargetsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAssessmentTargetsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListAssessmentTargetsResponse
 */
export interface ListAssessmentTargetsResponse {
  /**
   * @schema ListAssessmentTargetsResponse#assessmentTargetArns
   */
  readonly assessmentTargetArns: string[];

  /**
   * @schema ListAssessmentTargetsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAssessmentTemplatesRequest
 */
export interface ListAssessmentTemplatesRequest {
  /**
   * @schema ListAssessmentTemplatesRequest#assessmentTargetArns
   */
  readonly assessmentTargetArns?: string[];

  /**
   * @schema ListAssessmentTemplatesRequest#filter
   */
  readonly filter?: AssessmentTemplateFilter;

  /**
   * @schema ListAssessmentTemplatesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAssessmentTemplatesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListAssessmentTemplatesResponse
 */
export interface ListAssessmentTemplatesResponse {
  /**
   * @schema ListAssessmentTemplatesResponse#assessmentTemplateArns
   */
  readonly assessmentTemplateArns: string[];

  /**
   * @schema ListAssessmentTemplatesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListEventSubscriptionsRequest
 */
export interface ListEventSubscriptionsRequest {
  /**
   * @schema ListEventSubscriptionsRequest#resourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema ListEventSubscriptionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListEventSubscriptionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListEventSubscriptionsResponse
 */
export interface ListEventSubscriptionsResponse {
  /**
   * @schema ListEventSubscriptionsResponse#subscriptions
   */
  readonly subscriptions: Subscription[];

  /**
   * @schema ListEventSubscriptionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListExclusionsRequest
 */
export interface ListExclusionsRequest {
  /**
   * @schema ListExclusionsRequest#assessmentRunArn
   */
  readonly assessmentRunArn: string;

  /**
   * @schema ListExclusionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListExclusionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListExclusionsResponse
 */
export interface ListExclusionsResponse {
  /**
   * @schema ListExclusionsResponse#exclusionArns
   */
  readonly exclusionArns: string[];

  /**
   * @schema ListExclusionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListFindingsRequest
 */
export interface ListFindingsRequest {
  /**
   * @schema ListFindingsRequest#assessmentRunArns
   */
  readonly assessmentRunArns?: string[];

  /**
   * @schema ListFindingsRequest#filter
   */
  readonly filter?: FindingFilter;

  /**
   * @schema ListFindingsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListFindingsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListFindingsResponse
 */
export interface ListFindingsResponse {
  /**
   * @schema ListFindingsResponse#findingArns
   */
  readonly findingArns: string[];

  /**
   * @schema ListFindingsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRulesPackagesRequest
 */
export interface ListRulesPackagesRequest {
  /**
   * @schema ListRulesPackagesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRulesPackagesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListRulesPackagesResponse
 */
export interface ListRulesPackagesResponse {
  /**
   * @schema ListRulesPackagesResponse#rulesPackageArns
   */
  readonly rulesPackageArns: string[];

  /**
   * @schema ListRulesPackagesResponse#nextToken
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
  readonly tags: Tag[];

}

/**
 * @schema PreviewAgentsRequest
 */
export interface PreviewAgentsRequest {
  /**
   * @schema PreviewAgentsRequest#previewAgentsArn
   */
  readonly previewAgentsArn: string;

  /**
   * @schema PreviewAgentsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PreviewAgentsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema PreviewAgentsResponse
 */
export interface PreviewAgentsResponse {
  /**
   * @schema PreviewAgentsResponse#agentPreviews
   */
  readonly agentPreviews: AgentPreview[];

  /**
   * @schema PreviewAgentsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RegisterCrossAccountAccessRoleRequest
 */
export interface RegisterCrossAccountAccessRoleRequest {
  /**
   * @schema RegisterCrossAccountAccessRoleRequest#roleArn
   */
  readonly roleArn: string;

}

/**
 * @schema RemoveAttributesFromFindingsRequest
 */
export interface RemoveAttributesFromFindingsRequest {
  /**
   * @schema RemoveAttributesFromFindingsRequest#findingArns
   */
  readonly findingArns: string[];

  /**
   * @schema RemoveAttributesFromFindingsRequest#attributeKeys
   */
  readonly attributeKeys: string[];

}

/**
 * @schema RemoveAttributesFromFindingsResponse
 */
export interface RemoveAttributesFromFindingsResponse {
  /**
   * @schema RemoveAttributesFromFindingsResponse#failedItems
   */
  readonly failedItems: { [key: string]: FailedItemDetails };

}

/**
 * @schema SetTagsForResourceRequest
 */
export interface SetTagsForResourceRequest {
  /**
   * @schema SetTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema SetTagsForResourceRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema StartAssessmentRunRequest
 */
export interface StartAssessmentRunRequest {
  /**
   * @schema StartAssessmentRunRequest#assessmentTemplateArn
   */
  readonly assessmentTemplateArn: string;

  /**
   * @schema StartAssessmentRunRequest#assessmentRunName
   */
  readonly assessmentRunName?: string;

}

/**
 * @schema StartAssessmentRunResponse
 */
export interface StartAssessmentRunResponse {
  /**
   * @schema StartAssessmentRunResponse#assessmentRunArn
   */
  readonly assessmentRunArn: string;

}

/**
 * @schema StopAssessmentRunRequest
 */
export interface StopAssessmentRunRequest {
  /**
   * @schema StopAssessmentRunRequest#assessmentRunArn
   */
  readonly assessmentRunArn: string;

  /**
   * @schema StopAssessmentRunRequest#stopAction
   */
  readonly stopAction?: string;

}

/**
 * @schema SubscribeToEventRequest
 */
export interface SubscribeToEventRequest {
  /**
   * @schema SubscribeToEventRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema SubscribeToEventRequest#event
   */
  readonly event: string;

  /**
   * @schema SubscribeToEventRequest#topicArn
   */
  readonly topicArn: string;

}

/**
 * @schema UnsubscribeFromEventRequest
 */
export interface UnsubscribeFromEventRequest {
  /**
   * @schema UnsubscribeFromEventRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UnsubscribeFromEventRequest#event
   */
  readonly event: string;

  /**
   * @schema UnsubscribeFromEventRequest#topicArn
   */
  readonly topicArn: string;

}

/**
 * @schema UpdateAssessmentTargetRequest
 */
export interface UpdateAssessmentTargetRequest {
  /**
   * @schema UpdateAssessmentTargetRequest#assessmentTargetArn
   */
  readonly assessmentTargetArn: string;

  /**
   * @schema UpdateAssessmentTargetRequest#assessmentTargetName
   */
  readonly assessmentTargetName: string;

  /**
   * @schema UpdateAssessmentTargetRequest#resourceGroupArn
   */
  readonly resourceGroupArn?: string;

}

/**
 * @schema Attribute
 */
export interface Attribute {
  /**
   * @schema Attribute#key
   */
  readonly key: string;

  /**
   * @schema Attribute#value
   */
  readonly value?: string;

}

/**
 * @schema FailedItemDetails
 */
export interface FailedItemDetails {
  /**
   * @schema FailedItemDetails#failureCode
   */
  readonly failureCode: string;

  /**
   * @schema FailedItemDetails#retryable
   */
  readonly retryable: boolean;

}

/**
 * @schema ResourceGroupTag
 */
export interface ResourceGroupTag {
  /**
   * @schema ResourceGroupTag#key
   */
  readonly key: string;

  /**
   * @schema ResourceGroupTag#value
   */
  readonly value?: string;

}

/**
 * @schema AssessmentRun
 */
export interface AssessmentRun {
  /**
   * @schema AssessmentRun#arn
   */
  readonly arn: string;

  /**
   * @schema AssessmentRun#name
   */
  readonly name: string;

  /**
   * @schema AssessmentRun#assessmentTemplateArn
   */
  readonly assessmentTemplateArn: string;

  /**
   * @schema AssessmentRun#state
   */
  readonly state: string;

  /**
   * @schema AssessmentRun#durationInSeconds
   */
  readonly durationInSeconds: number;

  /**
   * @schema AssessmentRun#rulesPackageArns
   */
  readonly rulesPackageArns: string[];

  /**
   * @schema AssessmentRun#userAttributesForFindings
   */
  readonly userAttributesForFindings: Attribute[];

  /**
   * @schema AssessmentRun#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema AssessmentRun#startedAt
   */
  readonly startedAt?: string;

  /**
   * @schema AssessmentRun#completedAt
   */
  readonly completedAt?: string;

  /**
   * @schema AssessmentRun#stateChangedAt
   */
  readonly stateChangedAt: string;

  /**
   * @schema AssessmentRun#dataCollected
   */
  readonly dataCollected: boolean;

  /**
   * @schema AssessmentRun#stateChanges
   */
  readonly stateChanges: AssessmentRunStateChange[];

  /**
   * @schema AssessmentRun#notifications
   */
  readonly notifications: AssessmentRunNotification[];

  /**
   * @schema AssessmentRun#findingCounts
   */
  readonly findingCounts: { [key: string]: number };

}

/**
 * @schema AssessmentTarget
 */
export interface AssessmentTarget {
  /**
   * @schema AssessmentTarget#arn
   */
  readonly arn: string;

  /**
   * @schema AssessmentTarget#name
   */
  readonly name: string;

  /**
   * @schema AssessmentTarget#resourceGroupArn
   */
  readonly resourceGroupArn?: string;

  /**
   * @schema AssessmentTarget#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema AssessmentTarget#updatedAt
   */
  readonly updatedAt: string;

}

/**
 * @schema AssessmentTemplate
 */
export interface AssessmentTemplate {
  /**
   * @schema AssessmentTemplate#arn
   */
  readonly arn: string;

  /**
   * @schema AssessmentTemplate#name
   */
  readonly name: string;

  /**
   * @schema AssessmentTemplate#assessmentTargetArn
   */
  readonly assessmentTargetArn: string;

  /**
   * @schema AssessmentTemplate#durationInSeconds
   */
  readonly durationInSeconds: number;

  /**
   * @schema AssessmentTemplate#rulesPackageArns
   */
  readonly rulesPackageArns: string[];

  /**
   * @schema AssessmentTemplate#userAttributesForFindings
   */
  readonly userAttributesForFindings: Attribute[];

  /**
   * @schema AssessmentTemplate#lastAssessmentRunArn
   */
  readonly lastAssessmentRunArn?: string;

  /**
   * @schema AssessmentTemplate#assessmentRunCount
   */
  readonly assessmentRunCount: number;

  /**
   * @schema AssessmentTemplate#createdAt
   */
  readonly createdAt: string;

}

/**
 * @schema Exclusion
 */
export interface Exclusion {
  /**
   * @schema Exclusion#arn
   */
  readonly arn: string;

  /**
   * @schema Exclusion#title
   */
  readonly title: string;

  /**
   * @schema Exclusion#description
   */
  readonly description: string;

  /**
   * @schema Exclusion#recommendation
   */
  readonly recommendation: string;

  /**
   * @schema Exclusion#scopes
   */
  readonly scopes: Scope[];

  /**
   * @schema Exclusion#attributes
   */
  readonly attributes?: Attribute[];

}

/**
 * @schema Finding
 */
export interface Finding {
  /**
   * @schema Finding#arn
   */
  readonly arn: string;

  /**
   * @schema Finding#schemaVersion
   */
  readonly schemaVersion?: number;

  /**
   * @schema Finding#service
   */
  readonly service?: string;

  /**
   * @schema Finding#serviceAttributes
   */
  readonly serviceAttributes?: InspectorServiceAttributes;

  /**
   * @schema Finding#assetType
   */
  readonly assetType?: string;

  /**
   * @schema Finding#assetAttributes
   */
  readonly assetAttributes?: AssetAttributes;

  /**
   * @schema Finding#id
   */
  readonly id?: string;

  /**
   * @schema Finding#title
   */
  readonly title?: string;

  /**
   * @schema Finding#description
   */
  readonly description?: string;

  /**
   * @schema Finding#recommendation
   */
  readonly recommendation?: string;

  /**
   * @schema Finding#severity
   */
  readonly severity?: string;

  /**
   * @schema Finding#numericSeverity
   */
  readonly numericSeverity?: number;

  /**
   * @schema Finding#confidence
   */
  readonly confidence?: number;

  /**
   * @schema Finding#indicatorOfCompromise
   */
  readonly indicatorOfCompromise?: boolean;

  /**
   * @schema Finding#attributes
   */
  readonly attributes: Attribute[];

  /**
   * @schema Finding#userAttributes
   */
  readonly userAttributes: Attribute[];

  /**
   * @schema Finding#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema Finding#updatedAt
   */
  readonly updatedAt: string;

}

/**
 * @schema ResourceGroup
 */
export interface ResourceGroup {
  /**
   * @schema ResourceGroup#arn
   */
  readonly arn: string;

  /**
   * @schema ResourceGroup#tags
   */
  readonly tags: ResourceGroupTag[];

  /**
   * @schema ResourceGroup#createdAt
   */
  readonly createdAt: string;

}

/**
 * @schema RulesPackage
 */
export interface RulesPackage {
  /**
   * @schema RulesPackage#arn
   */
  readonly arn: string;

  /**
   * @schema RulesPackage#name
   */
  readonly name: string;

  /**
   * @schema RulesPackage#version
   */
  readonly version: string;

  /**
   * @schema RulesPackage#provider
   */
  readonly provider: string;

  /**
   * @schema RulesPackage#description
   */
  readonly description?: string;

}

/**
 * @schema ExclusionPreview
 */
export interface ExclusionPreview {
  /**
   * @schema ExclusionPreview#title
   */
  readonly title: string;

  /**
   * @schema ExclusionPreview#description
   */
  readonly description: string;

  /**
   * @schema ExclusionPreview#recommendation
   */
  readonly recommendation: string;

  /**
   * @schema ExclusionPreview#scopes
   */
  readonly scopes: Scope[];

  /**
   * @schema ExclusionPreview#attributes
   */
  readonly attributes?: Attribute[];

}

/**
 * @schema TelemetryMetadata
 */
export interface TelemetryMetadata {
  /**
   * @schema TelemetryMetadata#messageType
   */
  readonly messageType: string;

  /**
   * @schema TelemetryMetadata#count
   */
  readonly count: number;

  /**
   * @schema TelemetryMetadata#dataSize
   */
  readonly dataSize?: number;

}

/**
 * @schema AgentFilter
 */
export interface AgentFilter {
  /**
   * @schema AgentFilter#agentHealths
   */
  readonly agentHealths: string[];

  /**
   * @schema AgentFilter#agentHealthCodes
   */
  readonly agentHealthCodes: string[];

}

/**
 * @schema AssessmentRunAgent
 */
export interface AssessmentRunAgent {
  /**
   * @schema AssessmentRunAgent#agentId
   */
  readonly agentId: string;

  /**
   * @schema AssessmentRunAgent#assessmentRunArn
   */
  readonly assessmentRunArn: string;

  /**
   * @schema AssessmentRunAgent#agentHealth
   */
  readonly agentHealth: string;

  /**
   * @schema AssessmentRunAgent#agentHealthCode
   */
  readonly agentHealthCode: string;

  /**
   * @schema AssessmentRunAgent#agentHealthDetails
   */
  readonly agentHealthDetails?: string;

  /**
   * @schema AssessmentRunAgent#autoScalingGroup
   */
  readonly autoScalingGroup?: string;

  /**
   * @schema AssessmentRunAgent#telemetryMetadata
   */
  readonly telemetryMetadata: TelemetryMetadata[];

}

/**
 * @schema AssessmentRunFilter
 */
export interface AssessmentRunFilter {
  /**
   * @schema AssessmentRunFilter#namePattern
   */
  readonly namePattern?: string;

  /**
   * @schema AssessmentRunFilter#states
   */
  readonly states?: string[];

  /**
   * @schema AssessmentRunFilter#durationRange
   */
  readonly durationRange?: DurationRange;

  /**
   * @schema AssessmentRunFilter#rulesPackageArns
   */
  readonly rulesPackageArns?: string[];

  /**
   * @schema AssessmentRunFilter#startTimeRange
   */
  readonly startTimeRange?: TimestampRange;

  /**
   * @schema AssessmentRunFilter#completionTimeRange
   */
  readonly completionTimeRange?: TimestampRange;

  /**
   * @schema AssessmentRunFilter#stateChangeTimeRange
   */
  readonly stateChangeTimeRange?: TimestampRange;

}

/**
 * @schema AssessmentTargetFilter
 */
export interface AssessmentTargetFilter {
  /**
   * @schema AssessmentTargetFilter#assessmentTargetNamePattern
   */
  readonly assessmentTargetNamePattern?: string;

}

/**
 * @schema AssessmentTemplateFilter
 */
export interface AssessmentTemplateFilter {
  /**
   * @schema AssessmentTemplateFilter#namePattern
   */
  readonly namePattern?: string;

  /**
   * @schema AssessmentTemplateFilter#durationRange
   */
  readonly durationRange?: DurationRange;

  /**
   * @schema AssessmentTemplateFilter#rulesPackageArns
   */
  readonly rulesPackageArns?: string[];

}

/**
 * @schema Subscription
 */
export interface Subscription {
  /**
   * @schema Subscription#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema Subscription#topicArn
   */
  readonly topicArn: string;

  /**
   * @schema Subscription#eventSubscriptions
   */
  readonly eventSubscriptions: EventSubscription[];

}

/**
 * @schema FindingFilter
 */
export interface FindingFilter {
  /**
   * @schema FindingFilter#agentIds
   */
  readonly agentIds?: string[];

  /**
   * @schema FindingFilter#autoScalingGroups
   */
  readonly autoScalingGroups?: string[];

  /**
   * @schema FindingFilter#ruleNames
   */
  readonly ruleNames?: string[];

  /**
   * @schema FindingFilter#severities
   */
  readonly severities?: string[];

  /**
   * @schema FindingFilter#rulesPackageArns
   */
  readonly rulesPackageArns?: string[];

  /**
   * @schema FindingFilter#attributes
   */
  readonly attributes?: Attribute[];

  /**
   * @schema FindingFilter#userAttributes
   */
  readonly userAttributes?: Attribute[];

  /**
   * @schema FindingFilter#creationTimeRange
   */
  readonly creationTimeRange?: TimestampRange;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#key
   */
  readonly key: string;

  /**
   * @schema Tag#value
   */
  readonly value?: string;

}

/**
 * @schema AgentPreview
 */
export interface AgentPreview {
  /**
   * @schema AgentPreview#hostname
   */
  readonly hostname?: string;

  /**
   * @schema AgentPreview#agentId
   */
  readonly agentId: string;

  /**
   * @schema AgentPreview#autoScalingGroup
   */
  readonly autoScalingGroup?: string;

  /**
   * @schema AgentPreview#agentHealth
   */
  readonly agentHealth?: string;

  /**
   * @schema AgentPreview#agentVersion
   */
  readonly agentVersion?: string;

  /**
   * @schema AgentPreview#operatingSystem
   */
  readonly operatingSystem?: string;

  /**
   * @schema AgentPreview#kernelVersion
   */
  readonly kernelVersion?: string;

  /**
   * @schema AgentPreview#ipv4Address
   */
  readonly ipv4Address?: string;

}

/**
 * @schema AssessmentRunStateChange
 */
export interface AssessmentRunStateChange {
  /**
   * @schema AssessmentRunStateChange#stateChangedAt
   */
  readonly stateChangedAt: string;

  /**
   * @schema AssessmentRunStateChange#state
   */
  readonly state: string;

}

/**
 * @schema AssessmentRunNotification
 */
export interface AssessmentRunNotification {
  /**
   * @schema AssessmentRunNotification#date
   */
  readonly date: string;

  /**
   * @schema AssessmentRunNotification#event
   */
  readonly event: string;

  /**
   * @schema AssessmentRunNotification#message
   */
  readonly message?: string;

  /**
   * @schema AssessmentRunNotification#error
   */
  readonly error: boolean;

  /**
   * @schema AssessmentRunNotification#snsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema AssessmentRunNotification#snsPublishStatusCode
   */
  readonly snsPublishStatusCode?: string;

}

/**
 * @schema Scope
 */
export interface Scope {
  /**
   * @schema Scope#key
   */
  readonly key?: string;

  /**
   * @schema Scope#value
   */
  readonly value?: string;

}

/**
 * @schema InspectorServiceAttributes
 */
export interface InspectorServiceAttributes {
  /**
   * @schema InspectorServiceAttributes#schemaVersion
   */
  readonly schemaVersion: number;

  /**
   * @schema InspectorServiceAttributes#assessmentRunArn
   */
  readonly assessmentRunArn?: string;

  /**
   * @schema InspectorServiceAttributes#rulesPackageArn
   */
  readonly rulesPackageArn?: string;

}

/**
 * @schema AssetAttributes
 */
export interface AssetAttributes {
  /**
   * @schema AssetAttributes#schemaVersion
   */
  readonly schemaVersion: number;

  /**
   * @schema AssetAttributes#agentId
   */
  readonly agentId?: string;

  /**
   * @schema AssetAttributes#autoScalingGroup
   */
  readonly autoScalingGroup?: string;

  /**
   * @schema AssetAttributes#amiId
   */
  readonly amiId?: string;

  /**
   * @schema AssetAttributes#hostname
   */
  readonly hostname?: string;

  /**
   * @schema AssetAttributes#ipv4Addresses
   */
  readonly ipv4Addresses?: string[];

  /**
   * @schema AssetAttributes#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema AssetAttributes#networkInterfaces
   */
  readonly networkInterfaces?: NetworkInterface[];

}

/**
 * @schema DurationRange
 */
export interface DurationRange {
  /**
   * @schema DurationRange#minSeconds
   */
  readonly minSeconds?: number;

  /**
   * @schema DurationRange#maxSeconds
   */
  readonly maxSeconds?: number;

}

/**
 * @schema TimestampRange
 */
export interface TimestampRange {
  /**
   * @schema TimestampRange#beginDate
   */
  readonly beginDate?: string;

  /**
   * @schema TimestampRange#endDate
   */
  readonly endDate?: string;

}

/**
 * @schema EventSubscription
 */
export interface EventSubscription {
  /**
   * @schema EventSubscription#event
   */
  readonly event: string;

  /**
   * @schema EventSubscription#subscribedAt
   */
  readonly subscribedAt: string;

}

/**
 * @schema NetworkInterface
 */
export interface NetworkInterface {
  /**
   * @schema NetworkInterface#networkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema NetworkInterface#subnetId
   */
  readonly subnetId?: string;

  /**
   * @schema NetworkInterface#vpcId
   */
  readonly vpcId?: string;

  /**
   * @schema NetworkInterface#privateDnsName
   */
  readonly privateDnsName?: string;

  /**
   * @schema NetworkInterface#privateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema NetworkInterface#privateIpAddresses
   */
  readonly privateIpAddresses?: PrivateIp[];

  /**
   * @schema NetworkInterface#publicDnsName
   */
  readonly publicDnsName?: string;

  /**
   * @schema NetworkInterface#publicIp
   */
  readonly publicIp?: string;

  /**
   * @schema NetworkInterface#ipv6Addresses
   */
  readonly ipv6Addresses?: string[];

  /**
   * @schema NetworkInterface#securityGroups
   */
  readonly securityGroups?: SecurityGroup[];

}

/**
 * @schema PrivateIp
 */
export interface PrivateIp {
  /**
   * @schema PrivateIp#privateDnsName
   */
  readonly privateDnsName?: string;

  /**
   * @schema PrivateIp#privateIpAddress
   */
  readonly privateIpAddress?: string;

}

/**
 * @schema SecurityGroup
 */
export interface SecurityGroup {
  /**
   * @schema SecurityGroup#groupName
   */
  readonly groupName?: string;

  /**
   * @schema SecurityGroup#groupId
   */
  readonly groupId?: string;

}
