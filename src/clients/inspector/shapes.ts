/**
 * @schema InspectorAddAttributesToFindingsRequest
 */
export interface InspectorAddAttributesToFindingsRequest {
  /**
   * @schema InspectorAddAttributesToFindingsRequest#findingArns
   */
  readonly findingArns: string[];

  /**
   * @schema InspectorAddAttributesToFindingsRequest#attributes
   */
  readonly attributes: InspectorAttribute[];

}

/**
 * @schema InspectorAddAttributesToFindingsResponse
 */
export interface InspectorAddAttributesToFindingsResponse {
  /**
   * @schema InspectorAddAttributesToFindingsResponse#failedItems
   */
  readonly failedItems: { [key: string]: InspectorFailedItemDetails };

}

/**
 * @schema InspectorCreateAssessmentTargetRequest
 */
export interface InspectorCreateAssessmentTargetRequest {
  /**
   * @schema InspectorCreateAssessmentTargetRequest#assessmentTargetName
   */
  readonly assessmentTargetName: string;

  /**
   * @schema InspectorCreateAssessmentTargetRequest#resourceGroupArn
   */
  readonly resourceGroupArn?: string;

}

/**
 * @schema InspectorCreateAssessmentTargetResponse
 */
export interface InspectorCreateAssessmentTargetResponse {
  /**
   * @schema InspectorCreateAssessmentTargetResponse#assessmentTargetArn
   */
  readonly assessmentTargetArn: string;

}

/**
 * @schema InspectorCreateAssessmentTemplateRequest
 */
export interface InspectorCreateAssessmentTemplateRequest {
  /**
   * @schema InspectorCreateAssessmentTemplateRequest#assessmentTargetArn
   */
  readonly assessmentTargetArn: string;

  /**
   * @schema InspectorCreateAssessmentTemplateRequest#assessmentTemplateName
   */
  readonly assessmentTemplateName: string;

  /**
   * @schema InspectorCreateAssessmentTemplateRequest#durationInSeconds
   */
  readonly durationInSeconds: number;

  /**
   * @schema InspectorCreateAssessmentTemplateRequest#rulesPackageArns
   */
  readonly rulesPackageArns: string[];

  /**
   * @schema InspectorCreateAssessmentTemplateRequest#userAttributesForFindings
   */
  readonly userAttributesForFindings?: InspectorAttribute[];

}

/**
 * @schema InspectorCreateAssessmentTemplateResponse
 */
export interface InspectorCreateAssessmentTemplateResponse {
  /**
   * @schema InspectorCreateAssessmentTemplateResponse#assessmentTemplateArn
   */
  readonly assessmentTemplateArn: string;

}

/**
 * @schema InspectorCreateExclusionsPreviewRequest
 */
export interface InspectorCreateExclusionsPreviewRequest {
  /**
   * @schema InspectorCreateExclusionsPreviewRequest#assessmentTemplateArn
   */
  readonly assessmentTemplateArn: string;

}

/**
 * @schema InspectorCreateExclusionsPreviewResponse
 */
export interface InspectorCreateExclusionsPreviewResponse {
  /**
   * @schema InspectorCreateExclusionsPreviewResponse#previewToken
   */
  readonly previewToken: string;

}

/**
 * @schema InspectorCreateResourceGroupRequest
 */
export interface InspectorCreateResourceGroupRequest {
  /**
   * @schema InspectorCreateResourceGroupRequest#resourceGroupTags
   */
  readonly resourceGroupTags: InspectorResourceGroupTag[];

}

/**
 * @schema InspectorCreateResourceGroupResponse
 */
export interface InspectorCreateResourceGroupResponse {
  /**
   * @schema InspectorCreateResourceGroupResponse#resourceGroupArn
   */
  readonly resourceGroupArn: string;

}

/**
 * @schema InspectorDeleteAssessmentRunRequest
 */
export interface InspectorDeleteAssessmentRunRequest {
  /**
   * @schema InspectorDeleteAssessmentRunRequest#assessmentRunArn
   */
  readonly assessmentRunArn: string;

}

/**
 * @schema InspectorDeleteAssessmentTargetRequest
 */
export interface InspectorDeleteAssessmentTargetRequest {
  /**
   * @schema InspectorDeleteAssessmentTargetRequest#assessmentTargetArn
   */
  readonly assessmentTargetArn: string;

}

/**
 * @schema InspectorDeleteAssessmentTemplateRequest
 */
export interface InspectorDeleteAssessmentTemplateRequest {
  /**
   * @schema InspectorDeleteAssessmentTemplateRequest#assessmentTemplateArn
   */
  readonly assessmentTemplateArn: string;

}

/**
 * @schema InspectorDescribeAssessmentRunsRequest
 */
export interface InspectorDescribeAssessmentRunsRequest {
  /**
   * @schema InspectorDescribeAssessmentRunsRequest#assessmentRunArns
   */
  readonly assessmentRunArns: string[];

}

/**
 * @schema InspectorDescribeAssessmentRunsResponse
 */
export interface InspectorDescribeAssessmentRunsResponse {
  /**
   * @schema InspectorDescribeAssessmentRunsResponse#assessmentRuns
   */
  readonly assessmentRuns: InspectorAssessmentRun[];

  /**
   * @schema InspectorDescribeAssessmentRunsResponse#failedItems
   */
  readonly failedItems: { [key: string]: InspectorFailedItemDetails };

}

/**
 * @schema InspectorDescribeAssessmentTargetsRequest
 */
export interface InspectorDescribeAssessmentTargetsRequest {
  /**
   * @schema InspectorDescribeAssessmentTargetsRequest#assessmentTargetArns
   */
  readonly assessmentTargetArns: string[];

}

/**
 * @schema InspectorDescribeAssessmentTargetsResponse
 */
export interface InspectorDescribeAssessmentTargetsResponse {
  /**
   * @schema InspectorDescribeAssessmentTargetsResponse#assessmentTargets
   */
  readonly assessmentTargets: InspectorAssessmentTarget[];

  /**
   * @schema InspectorDescribeAssessmentTargetsResponse#failedItems
   */
  readonly failedItems: { [key: string]: InspectorFailedItemDetails };

}

/**
 * @schema InspectorDescribeAssessmentTemplatesRequest
 */
export interface InspectorDescribeAssessmentTemplatesRequest {
  /**
   * @schema InspectorDescribeAssessmentTemplatesRequest#assessmentTemplateArns
   */
  readonly assessmentTemplateArns: string[];

}

/**
 * @schema InspectorDescribeAssessmentTemplatesResponse
 */
export interface InspectorDescribeAssessmentTemplatesResponse {
  /**
   * @schema InspectorDescribeAssessmentTemplatesResponse#assessmentTemplates
   */
  readonly assessmentTemplates: InspectorAssessmentTemplate[];

  /**
   * @schema InspectorDescribeAssessmentTemplatesResponse#failedItems
   */
  readonly failedItems: { [key: string]: InspectorFailedItemDetails };

}

/**
 * @schema InspectorDescribeCrossAccountAccessRoleResponse
 */
export interface InspectorDescribeCrossAccountAccessRoleResponse {
  /**
   * @schema InspectorDescribeCrossAccountAccessRoleResponse#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema InspectorDescribeCrossAccountAccessRoleResponse#valid
   */
  readonly valid: boolean;

  /**
   * @schema InspectorDescribeCrossAccountAccessRoleResponse#registeredAt
   */
  readonly registeredAt: string;

}

/**
 * @schema InspectorDescribeExclusionsRequest
 */
export interface InspectorDescribeExclusionsRequest {
  /**
   * @schema InspectorDescribeExclusionsRequest#exclusionArns
   */
  readonly exclusionArns: string[];

  /**
   * @schema InspectorDescribeExclusionsRequest#locale
   */
  readonly locale?: string;

}

/**
 * @schema InspectorDescribeExclusionsResponse
 */
export interface InspectorDescribeExclusionsResponse {
  /**
   * @schema InspectorDescribeExclusionsResponse#exclusions
   */
  readonly exclusions: { [key: string]: InspectorExclusion };

  /**
   * @schema InspectorDescribeExclusionsResponse#failedItems
   */
  readonly failedItems: { [key: string]: InspectorFailedItemDetails };

}

/**
 * @schema InspectorDescribeFindingsRequest
 */
export interface InspectorDescribeFindingsRequest {
  /**
   * @schema InspectorDescribeFindingsRequest#findingArns
   */
  readonly findingArns: string[];

  /**
   * @schema InspectorDescribeFindingsRequest#locale
   */
  readonly locale?: string;

}

/**
 * @schema InspectorDescribeFindingsResponse
 */
export interface InspectorDescribeFindingsResponse {
  /**
   * @schema InspectorDescribeFindingsResponse#findings
   */
  readonly findings: InspectorFinding[];

  /**
   * @schema InspectorDescribeFindingsResponse#failedItems
   */
  readonly failedItems: { [key: string]: InspectorFailedItemDetails };

}

/**
 * @schema InspectorDescribeResourceGroupsRequest
 */
export interface InspectorDescribeResourceGroupsRequest {
  /**
   * @schema InspectorDescribeResourceGroupsRequest#resourceGroupArns
   */
  readonly resourceGroupArns: string[];

}

/**
 * @schema InspectorDescribeResourceGroupsResponse
 */
export interface InspectorDescribeResourceGroupsResponse {
  /**
   * @schema InspectorDescribeResourceGroupsResponse#resourceGroups
   */
  readonly resourceGroups: InspectorResourceGroup[];

  /**
   * @schema InspectorDescribeResourceGroupsResponse#failedItems
   */
  readonly failedItems: { [key: string]: InspectorFailedItemDetails };

}

/**
 * @schema InspectorDescribeRulesPackagesRequest
 */
export interface InspectorDescribeRulesPackagesRequest {
  /**
   * @schema InspectorDescribeRulesPackagesRequest#rulesPackageArns
   */
  readonly rulesPackageArns: string[];

  /**
   * @schema InspectorDescribeRulesPackagesRequest#locale
   */
  readonly locale?: string;

}

/**
 * @schema InspectorDescribeRulesPackagesResponse
 */
export interface InspectorDescribeRulesPackagesResponse {
  /**
   * @schema InspectorDescribeRulesPackagesResponse#rulesPackages
   */
  readonly rulesPackages: InspectorRulesPackage[];

  /**
   * @schema InspectorDescribeRulesPackagesResponse#failedItems
   */
  readonly failedItems: { [key: string]: InspectorFailedItemDetails };

}

/**
 * @schema InspectorGetAssessmentReportRequest
 */
export interface InspectorGetAssessmentReportRequest {
  /**
   * @schema InspectorGetAssessmentReportRequest#assessmentRunArn
   */
  readonly assessmentRunArn: string;

  /**
   * @schema InspectorGetAssessmentReportRequest#reportFileFormat
   */
  readonly reportFileFormat: string;

  /**
   * @schema InspectorGetAssessmentReportRequest#reportType
   */
  readonly reportType: string;

}

/**
 * @schema InspectorGetAssessmentReportResponse
 */
export interface InspectorGetAssessmentReportResponse {
  /**
   * @schema InspectorGetAssessmentReportResponse#status
   */
  readonly status: string;

  /**
   * @schema InspectorGetAssessmentReportResponse#url
   */
  readonly url?: string;

}

/**
 * @schema InspectorGetExclusionsPreviewRequest
 */
export interface InspectorGetExclusionsPreviewRequest {
  /**
   * @schema InspectorGetExclusionsPreviewRequest#assessmentTemplateArn
   */
  readonly assessmentTemplateArn: string;

  /**
   * @schema InspectorGetExclusionsPreviewRequest#previewToken
   */
  readonly previewToken: string;

  /**
   * @schema InspectorGetExclusionsPreviewRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema InspectorGetExclusionsPreviewRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema InspectorGetExclusionsPreviewRequest#locale
   */
  readonly locale?: string;

}

/**
 * @schema InspectorGetExclusionsPreviewResponse
 */
export interface InspectorGetExclusionsPreviewResponse {
  /**
   * @schema InspectorGetExclusionsPreviewResponse#previewStatus
   */
  readonly previewStatus: string;

  /**
   * @schema InspectorGetExclusionsPreviewResponse#exclusionPreviews
   */
  readonly exclusionPreviews?: InspectorExclusionPreview[];

  /**
   * @schema InspectorGetExclusionsPreviewResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema InspectorGetTelemetryMetadataRequest
 */
export interface InspectorGetTelemetryMetadataRequest {
  /**
   * @schema InspectorGetTelemetryMetadataRequest#assessmentRunArn
   */
  readonly assessmentRunArn: string;

}

/**
 * @schema InspectorGetTelemetryMetadataResponse
 */
export interface InspectorGetTelemetryMetadataResponse {
  /**
   * @schema InspectorGetTelemetryMetadataResponse#telemetryMetadata
   */
  readonly telemetryMetadata: InspectorTelemetryMetadata[];

}

/**
 * @schema InspectorListAssessmentRunAgentsRequest
 */
export interface InspectorListAssessmentRunAgentsRequest {
  /**
   * @schema InspectorListAssessmentRunAgentsRequest#assessmentRunArn
   */
  readonly assessmentRunArn: string;

  /**
   * @schema InspectorListAssessmentRunAgentsRequest#filter
   */
  readonly filter?: InspectorAgentFilter;

  /**
   * @schema InspectorListAssessmentRunAgentsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema InspectorListAssessmentRunAgentsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema InspectorListAssessmentRunAgentsResponse
 */
export interface InspectorListAssessmentRunAgentsResponse {
  /**
   * @schema InspectorListAssessmentRunAgentsResponse#assessmentRunAgents
   */
  readonly assessmentRunAgents: InspectorAssessmentRunAgent[];

  /**
   * @schema InspectorListAssessmentRunAgentsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema InspectorListAssessmentRunsRequest
 */
export interface InspectorListAssessmentRunsRequest {
  /**
   * @schema InspectorListAssessmentRunsRequest#assessmentTemplateArns
   */
  readonly assessmentTemplateArns?: string[];

  /**
   * @schema InspectorListAssessmentRunsRequest#filter
   */
  readonly filter?: InspectorAssessmentRunFilter;

  /**
   * @schema InspectorListAssessmentRunsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema InspectorListAssessmentRunsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema InspectorListAssessmentRunsResponse
 */
export interface InspectorListAssessmentRunsResponse {
  /**
   * @schema InspectorListAssessmentRunsResponse#assessmentRunArns
   */
  readonly assessmentRunArns: string[];

  /**
   * @schema InspectorListAssessmentRunsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema InspectorListAssessmentTargetsRequest
 */
export interface InspectorListAssessmentTargetsRequest {
  /**
   * @schema InspectorListAssessmentTargetsRequest#filter
   */
  readonly filter?: InspectorAssessmentTargetFilter;

  /**
   * @schema InspectorListAssessmentTargetsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema InspectorListAssessmentTargetsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema InspectorListAssessmentTargetsResponse
 */
export interface InspectorListAssessmentTargetsResponse {
  /**
   * @schema InspectorListAssessmentTargetsResponse#assessmentTargetArns
   */
  readonly assessmentTargetArns: string[];

  /**
   * @schema InspectorListAssessmentTargetsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema InspectorListAssessmentTemplatesRequest
 */
export interface InspectorListAssessmentTemplatesRequest {
  /**
   * @schema InspectorListAssessmentTemplatesRequest#assessmentTargetArns
   */
  readonly assessmentTargetArns?: string[];

  /**
   * @schema InspectorListAssessmentTemplatesRequest#filter
   */
  readonly filter?: InspectorAssessmentTemplateFilter;

  /**
   * @schema InspectorListAssessmentTemplatesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema InspectorListAssessmentTemplatesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema InspectorListAssessmentTemplatesResponse
 */
export interface InspectorListAssessmentTemplatesResponse {
  /**
   * @schema InspectorListAssessmentTemplatesResponse#assessmentTemplateArns
   */
  readonly assessmentTemplateArns: string[];

  /**
   * @schema InspectorListAssessmentTemplatesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema InspectorListEventSubscriptionsRequest
 */
export interface InspectorListEventSubscriptionsRequest {
  /**
   * @schema InspectorListEventSubscriptionsRequest#resourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema InspectorListEventSubscriptionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema InspectorListEventSubscriptionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema InspectorListEventSubscriptionsResponse
 */
export interface InspectorListEventSubscriptionsResponse {
  /**
   * @schema InspectorListEventSubscriptionsResponse#subscriptions
   */
  readonly subscriptions: InspectorSubscription[];

  /**
   * @schema InspectorListEventSubscriptionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema InspectorListExclusionsRequest
 */
export interface InspectorListExclusionsRequest {
  /**
   * @schema InspectorListExclusionsRequest#assessmentRunArn
   */
  readonly assessmentRunArn: string;

  /**
   * @schema InspectorListExclusionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema InspectorListExclusionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema InspectorListExclusionsResponse
 */
export interface InspectorListExclusionsResponse {
  /**
   * @schema InspectorListExclusionsResponse#exclusionArns
   */
  readonly exclusionArns: string[];

  /**
   * @schema InspectorListExclusionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema InspectorListFindingsRequest
 */
export interface InspectorListFindingsRequest {
  /**
   * @schema InspectorListFindingsRequest#assessmentRunArns
   */
  readonly assessmentRunArns?: string[];

  /**
   * @schema InspectorListFindingsRequest#filter
   */
  readonly filter?: InspectorFindingFilter;

  /**
   * @schema InspectorListFindingsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema InspectorListFindingsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema InspectorListFindingsResponse
 */
export interface InspectorListFindingsResponse {
  /**
   * @schema InspectorListFindingsResponse#findingArns
   */
  readonly findingArns: string[];

  /**
   * @schema InspectorListFindingsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema InspectorListRulesPackagesRequest
 */
export interface InspectorListRulesPackagesRequest {
  /**
   * @schema InspectorListRulesPackagesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema InspectorListRulesPackagesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema InspectorListRulesPackagesResponse
 */
export interface InspectorListRulesPackagesResponse {
  /**
   * @schema InspectorListRulesPackagesResponse#rulesPackageArns
   */
  readonly rulesPackageArns: string[];

  /**
   * @schema InspectorListRulesPackagesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema InspectorListTagsForResourceRequest
 */
export interface InspectorListTagsForResourceRequest {
  /**
   * @schema InspectorListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema InspectorListTagsForResourceResponse
 */
export interface InspectorListTagsForResourceResponse {
  /**
   * @schema InspectorListTagsForResourceResponse#tags
   */
  readonly tags: InspectorTag[];

}

/**
 * @schema InspectorPreviewAgentsRequest
 */
export interface InspectorPreviewAgentsRequest {
  /**
   * @schema InspectorPreviewAgentsRequest#previewAgentsArn
   */
  readonly previewAgentsArn: string;

  /**
   * @schema InspectorPreviewAgentsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema InspectorPreviewAgentsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema InspectorPreviewAgentsResponse
 */
export interface InspectorPreviewAgentsResponse {
  /**
   * @schema InspectorPreviewAgentsResponse#agentPreviews
   */
  readonly agentPreviews: InspectorAgentPreview[];

  /**
   * @schema InspectorPreviewAgentsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema InspectorRegisterCrossAccountAccessRoleRequest
 */
export interface InspectorRegisterCrossAccountAccessRoleRequest {
  /**
   * @schema InspectorRegisterCrossAccountAccessRoleRequest#roleArn
   */
  readonly roleArn: string;

}

/**
 * @schema InspectorRemoveAttributesFromFindingsRequest
 */
export interface InspectorRemoveAttributesFromFindingsRequest {
  /**
   * @schema InspectorRemoveAttributesFromFindingsRequest#findingArns
   */
  readonly findingArns: string[];

  /**
   * @schema InspectorRemoveAttributesFromFindingsRequest#attributeKeys
   */
  readonly attributeKeys: string[];

}

/**
 * @schema InspectorRemoveAttributesFromFindingsResponse
 */
export interface InspectorRemoveAttributesFromFindingsResponse {
  /**
   * @schema InspectorRemoveAttributesFromFindingsResponse#failedItems
   */
  readonly failedItems: { [key: string]: InspectorFailedItemDetails };

}

/**
 * @schema InspectorSetTagsForResourceRequest
 */
export interface InspectorSetTagsForResourceRequest {
  /**
   * @schema InspectorSetTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema InspectorSetTagsForResourceRequest#tags
   */
  readonly tags?: InspectorTag[];

}

/**
 * @schema InspectorStartAssessmentRunRequest
 */
export interface InspectorStartAssessmentRunRequest {
  /**
   * @schema InspectorStartAssessmentRunRequest#assessmentTemplateArn
   */
  readonly assessmentTemplateArn: string;

  /**
   * @schema InspectorStartAssessmentRunRequest#assessmentRunName
   */
  readonly assessmentRunName?: string;

}

/**
 * @schema InspectorStartAssessmentRunResponse
 */
export interface InspectorStartAssessmentRunResponse {
  /**
   * @schema InspectorStartAssessmentRunResponse#assessmentRunArn
   */
  readonly assessmentRunArn: string;

}

/**
 * @schema InspectorStopAssessmentRunRequest
 */
export interface InspectorStopAssessmentRunRequest {
  /**
   * @schema InspectorStopAssessmentRunRequest#assessmentRunArn
   */
  readonly assessmentRunArn: string;

  /**
   * @schema InspectorStopAssessmentRunRequest#stopAction
   */
  readonly stopAction?: string;

}

/**
 * @schema InspectorSubscribeToEventRequest
 */
export interface InspectorSubscribeToEventRequest {
  /**
   * @schema InspectorSubscribeToEventRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema InspectorSubscribeToEventRequest#event
   */
  readonly event: string;

  /**
   * @schema InspectorSubscribeToEventRequest#topicArn
   */
  readonly topicArn: string;

}

/**
 * @schema InspectorUnsubscribeFromEventRequest
 */
export interface InspectorUnsubscribeFromEventRequest {
  /**
   * @schema InspectorUnsubscribeFromEventRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema InspectorUnsubscribeFromEventRequest#event
   */
  readonly event: string;

  /**
   * @schema InspectorUnsubscribeFromEventRequest#topicArn
   */
  readonly topicArn: string;

}

/**
 * @schema InspectorUpdateAssessmentTargetRequest
 */
export interface InspectorUpdateAssessmentTargetRequest {
  /**
   * @schema InspectorUpdateAssessmentTargetRequest#assessmentTargetArn
   */
  readonly assessmentTargetArn: string;

  /**
   * @schema InspectorUpdateAssessmentTargetRequest#assessmentTargetName
   */
  readonly assessmentTargetName: string;

  /**
   * @schema InspectorUpdateAssessmentTargetRequest#resourceGroupArn
   */
  readonly resourceGroupArn?: string;

}

/**
 * @schema InspectorAttribute
 */
export interface InspectorAttribute {
  /**
   * @schema InspectorAttribute#key
   */
  readonly key: string;

  /**
   * @schema InspectorAttribute#value
   */
  readonly value?: string;

}

/**
 * @schema InspectorFailedItemDetails
 */
export interface InspectorFailedItemDetails {
  /**
   * @schema InspectorFailedItemDetails#failureCode
   */
  readonly failureCode: string;

  /**
   * @schema InspectorFailedItemDetails#retryable
   */
  readonly retryable: boolean;

}

/**
 * @schema InspectorResourceGroupTag
 */
export interface InspectorResourceGroupTag {
  /**
   * @schema InspectorResourceGroupTag#key
   */
  readonly key: string;

  /**
   * @schema InspectorResourceGroupTag#value
   */
  readonly value?: string;

}

/**
 * @schema InspectorAssessmentRun
 */
export interface InspectorAssessmentRun {
  /**
   * @schema InspectorAssessmentRun#arn
   */
  readonly arn: string;

  /**
   * @schema InspectorAssessmentRun#name
   */
  readonly name: string;

  /**
   * @schema InspectorAssessmentRun#assessmentTemplateArn
   */
  readonly assessmentTemplateArn: string;

  /**
   * @schema InspectorAssessmentRun#state
   */
  readonly state: string;

  /**
   * @schema InspectorAssessmentRun#durationInSeconds
   */
  readonly durationInSeconds: number;

  /**
   * @schema InspectorAssessmentRun#rulesPackageArns
   */
  readonly rulesPackageArns: string[];

  /**
   * @schema InspectorAssessmentRun#userAttributesForFindings
   */
  readonly userAttributesForFindings: InspectorAttribute[];

  /**
   * @schema InspectorAssessmentRun#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema InspectorAssessmentRun#startedAt
   */
  readonly startedAt?: string;

  /**
   * @schema InspectorAssessmentRun#completedAt
   */
  readonly completedAt?: string;

  /**
   * @schema InspectorAssessmentRun#stateChangedAt
   */
  readonly stateChangedAt: string;

  /**
   * @schema InspectorAssessmentRun#dataCollected
   */
  readonly dataCollected: boolean;

  /**
   * @schema InspectorAssessmentRun#stateChanges
   */
  readonly stateChanges: InspectorAssessmentRunStateChange[];

  /**
   * @schema InspectorAssessmentRun#notifications
   */
  readonly notifications: InspectorAssessmentRunNotification[];

  /**
   * @schema InspectorAssessmentRun#findingCounts
   */
  readonly findingCounts: { [key: string]: number };

}

/**
 * @schema InspectorAssessmentTarget
 */
export interface InspectorAssessmentTarget {
  /**
   * @schema InspectorAssessmentTarget#arn
   */
  readonly arn: string;

  /**
   * @schema InspectorAssessmentTarget#name
   */
  readonly name: string;

  /**
   * @schema InspectorAssessmentTarget#resourceGroupArn
   */
  readonly resourceGroupArn?: string;

  /**
   * @schema InspectorAssessmentTarget#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema InspectorAssessmentTarget#updatedAt
   */
  readonly updatedAt: string;

}

/**
 * @schema InspectorAssessmentTemplate
 */
export interface InspectorAssessmentTemplate {
  /**
   * @schema InspectorAssessmentTemplate#arn
   */
  readonly arn: string;

  /**
   * @schema InspectorAssessmentTemplate#name
   */
  readonly name: string;

  /**
   * @schema InspectorAssessmentTemplate#assessmentTargetArn
   */
  readonly assessmentTargetArn: string;

  /**
   * @schema InspectorAssessmentTemplate#durationInSeconds
   */
  readonly durationInSeconds: number;

  /**
   * @schema InspectorAssessmentTemplate#rulesPackageArns
   */
  readonly rulesPackageArns: string[];

  /**
   * @schema InspectorAssessmentTemplate#userAttributesForFindings
   */
  readonly userAttributesForFindings: InspectorAttribute[];

  /**
   * @schema InspectorAssessmentTemplate#lastAssessmentRunArn
   */
  readonly lastAssessmentRunArn?: string;

  /**
   * @schema InspectorAssessmentTemplate#assessmentRunCount
   */
  readonly assessmentRunCount: number;

  /**
   * @schema InspectorAssessmentTemplate#createdAt
   */
  readonly createdAt: string;

}

/**
 * @schema InspectorExclusion
 */
export interface InspectorExclusion {
  /**
   * @schema InspectorExclusion#arn
   */
  readonly arn: string;

  /**
   * @schema InspectorExclusion#title
   */
  readonly title: string;

  /**
   * @schema InspectorExclusion#description
   */
  readonly description: string;

  /**
   * @schema InspectorExclusion#recommendation
   */
  readonly recommendation: string;

  /**
   * @schema InspectorExclusion#scopes
   */
  readonly scopes: InspectorScope[];

  /**
   * @schema InspectorExclusion#attributes
   */
  readonly attributes?: InspectorAttribute[];

}

/**
 * @schema InspectorFinding
 */
export interface InspectorFinding {
  /**
   * @schema InspectorFinding#arn
   */
  readonly arn: string;

  /**
   * @schema InspectorFinding#schemaVersion
   */
  readonly schemaVersion?: number;

  /**
   * @schema InspectorFinding#service
   */
  readonly service?: string;

  /**
   * @schema InspectorFinding#serviceAttributes
   */
  readonly serviceAttributes?: InspectorInspectorServiceAttributes;

  /**
   * @schema InspectorFinding#assetType
   */
  readonly assetType?: string;

  /**
   * @schema InspectorFinding#assetAttributes
   */
  readonly assetAttributes?: InspectorAssetAttributes;

  /**
   * @schema InspectorFinding#id
   */
  readonly id?: string;

  /**
   * @schema InspectorFinding#title
   */
  readonly title?: string;

  /**
   * @schema InspectorFinding#description
   */
  readonly description?: string;

  /**
   * @schema InspectorFinding#recommendation
   */
  readonly recommendation?: string;

  /**
   * @schema InspectorFinding#severity
   */
  readonly severity?: string;

  /**
   * @schema InspectorFinding#numericSeverity
   */
  readonly numericSeverity?: number;

  /**
   * @schema InspectorFinding#confidence
   */
  readonly confidence?: number;

  /**
   * @schema InspectorFinding#indicatorOfCompromise
   */
  readonly indicatorOfCompromise?: boolean;

  /**
   * @schema InspectorFinding#attributes
   */
  readonly attributes: InspectorAttribute[];

  /**
   * @schema InspectorFinding#userAttributes
   */
  readonly userAttributes: InspectorAttribute[];

  /**
   * @schema InspectorFinding#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema InspectorFinding#updatedAt
   */
  readonly updatedAt: string;

}

/**
 * @schema InspectorResourceGroup
 */
export interface InspectorResourceGroup {
  /**
   * @schema InspectorResourceGroup#arn
   */
  readonly arn: string;

  /**
   * @schema InspectorResourceGroup#tags
   */
  readonly tags: InspectorResourceGroupTag[];

  /**
   * @schema InspectorResourceGroup#createdAt
   */
  readonly createdAt: string;

}

/**
 * @schema InspectorRulesPackage
 */
export interface InspectorRulesPackage {
  /**
   * @schema InspectorRulesPackage#arn
   */
  readonly arn: string;

  /**
   * @schema InspectorRulesPackage#name
   */
  readonly name: string;

  /**
   * @schema InspectorRulesPackage#version
   */
  readonly version: string;

  /**
   * @schema InspectorRulesPackage#provider
   */
  readonly provider: string;

  /**
   * @schema InspectorRulesPackage#description
   */
  readonly description?: string;

}

/**
 * @schema InspectorExclusionPreview
 */
export interface InspectorExclusionPreview {
  /**
   * @schema InspectorExclusionPreview#title
   */
  readonly title: string;

  /**
   * @schema InspectorExclusionPreview#description
   */
  readonly description: string;

  /**
   * @schema InspectorExclusionPreview#recommendation
   */
  readonly recommendation: string;

  /**
   * @schema InspectorExclusionPreview#scopes
   */
  readonly scopes: InspectorScope[];

  /**
   * @schema InspectorExclusionPreview#attributes
   */
  readonly attributes?: InspectorAttribute[];

}

/**
 * @schema InspectorTelemetryMetadata
 */
export interface InspectorTelemetryMetadata {
  /**
   * @schema InspectorTelemetryMetadata#messageType
   */
  readonly messageType: string;

  /**
   * @schema InspectorTelemetryMetadata#count
   */
  readonly count: number;

  /**
   * @schema InspectorTelemetryMetadata#dataSize
   */
  readonly dataSize?: number;

}

/**
 * @schema InspectorAgentFilter
 */
export interface InspectorAgentFilter {
  /**
   * @schema InspectorAgentFilter#agentHealths
   */
  readonly agentHealths: string[];

  /**
   * @schema InspectorAgentFilter#agentHealthCodes
   */
  readonly agentHealthCodes: string[];

}

/**
 * @schema InspectorAssessmentRunAgent
 */
export interface InspectorAssessmentRunAgent {
  /**
   * @schema InspectorAssessmentRunAgent#agentId
   */
  readonly agentId: string;

  /**
   * @schema InspectorAssessmentRunAgent#assessmentRunArn
   */
  readonly assessmentRunArn: string;

  /**
   * @schema InspectorAssessmentRunAgent#agentHealth
   */
  readonly agentHealth: string;

  /**
   * @schema InspectorAssessmentRunAgent#agentHealthCode
   */
  readonly agentHealthCode: string;

  /**
   * @schema InspectorAssessmentRunAgent#agentHealthDetails
   */
  readonly agentHealthDetails?: string;

  /**
   * @schema InspectorAssessmentRunAgent#autoScalingGroup
   */
  readonly autoScalingGroup?: string;

  /**
   * @schema InspectorAssessmentRunAgent#telemetryMetadata
   */
  readonly telemetryMetadata: InspectorTelemetryMetadata[];

}

/**
 * @schema InspectorAssessmentRunFilter
 */
export interface InspectorAssessmentRunFilter {
  /**
   * @schema InspectorAssessmentRunFilter#namePattern
   */
  readonly namePattern?: string;

  /**
   * @schema InspectorAssessmentRunFilter#states
   */
  readonly states?: string[];

  /**
   * @schema InspectorAssessmentRunFilter#durationRange
   */
  readonly durationRange?: InspectorDurationRange;

  /**
   * @schema InspectorAssessmentRunFilter#rulesPackageArns
   */
  readonly rulesPackageArns?: string[];

  /**
   * @schema InspectorAssessmentRunFilter#startTimeRange
   */
  readonly startTimeRange?: InspectorTimestampRange;

  /**
   * @schema InspectorAssessmentRunFilter#completionTimeRange
   */
  readonly completionTimeRange?: InspectorTimestampRange;

  /**
   * @schema InspectorAssessmentRunFilter#stateChangeTimeRange
   */
  readonly stateChangeTimeRange?: InspectorTimestampRange;

}

/**
 * @schema InspectorAssessmentTargetFilter
 */
export interface InspectorAssessmentTargetFilter {
  /**
   * @schema InspectorAssessmentTargetFilter#assessmentTargetNamePattern
   */
  readonly assessmentTargetNamePattern?: string;

}

/**
 * @schema InspectorAssessmentTemplateFilter
 */
export interface InspectorAssessmentTemplateFilter {
  /**
   * @schema InspectorAssessmentTemplateFilter#namePattern
   */
  readonly namePattern?: string;

  /**
   * @schema InspectorAssessmentTemplateFilter#durationRange
   */
  readonly durationRange?: InspectorDurationRange;

  /**
   * @schema InspectorAssessmentTemplateFilter#rulesPackageArns
   */
  readonly rulesPackageArns?: string[];

}

/**
 * @schema InspectorSubscription
 */
export interface InspectorSubscription {
  /**
   * @schema InspectorSubscription#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema InspectorSubscription#topicArn
   */
  readonly topicArn: string;

  /**
   * @schema InspectorSubscription#eventSubscriptions
   */
  readonly eventSubscriptions: InspectorEventSubscription[];

}

/**
 * @schema InspectorFindingFilter
 */
export interface InspectorFindingFilter {
  /**
   * @schema InspectorFindingFilter#agentIds
   */
  readonly agentIds?: string[];

  /**
   * @schema InspectorFindingFilter#autoScalingGroups
   */
  readonly autoScalingGroups?: string[];

  /**
   * @schema InspectorFindingFilter#ruleNames
   */
  readonly ruleNames?: string[];

  /**
   * @schema InspectorFindingFilter#severities
   */
  readonly severities?: string[];

  /**
   * @schema InspectorFindingFilter#rulesPackageArns
   */
  readonly rulesPackageArns?: string[];

  /**
   * @schema InspectorFindingFilter#attributes
   */
  readonly attributes?: InspectorAttribute[];

  /**
   * @schema InspectorFindingFilter#userAttributes
   */
  readonly userAttributes?: InspectorAttribute[];

  /**
   * @schema InspectorFindingFilter#creationTimeRange
   */
  readonly creationTimeRange?: InspectorTimestampRange;

}

/**
 * @schema InspectorTag
 */
export interface InspectorTag {
  /**
   * @schema InspectorTag#key
   */
  readonly key: string;

  /**
   * @schema InspectorTag#value
   */
  readonly value?: string;

}

/**
 * @schema InspectorAgentPreview
 */
export interface InspectorAgentPreview {
  /**
   * @schema InspectorAgentPreview#hostname
   */
  readonly hostname?: string;

  /**
   * @schema InspectorAgentPreview#agentId
   */
  readonly agentId: string;

  /**
   * @schema InspectorAgentPreview#autoScalingGroup
   */
  readonly autoScalingGroup?: string;

  /**
   * @schema InspectorAgentPreview#agentHealth
   */
  readonly agentHealth?: string;

  /**
   * @schema InspectorAgentPreview#agentVersion
   */
  readonly agentVersion?: string;

  /**
   * @schema InspectorAgentPreview#operatingSystem
   */
  readonly operatingSystem?: string;

  /**
   * @schema InspectorAgentPreview#kernelVersion
   */
  readonly kernelVersion?: string;

  /**
   * @schema InspectorAgentPreview#ipv4Address
   */
  readonly ipv4Address?: string;

}

/**
 * @schema InspectorAssessmentRunStateChange
 */
export interface InspectorAssessmentRunStateChange {
  /**
   * @schema InspectorAssessmentRunStateChange#stateChangedAt
   */
  readonly stateChangedAt: string;

  /**
   * @schema InspectorAssessmentRunStateChange#state
   */
  readonly state: string;

}

/**
 * @schema InspectorAssessmentRunNotification
 */
export interface InspectorAssessmentRunNotification {
  /**
   * @schema InspectorAssessmentRunNotification#date
   */
  readonly date: string;

  /**
   * @schema InspectorAssessmentRunNotification#event
   */
  readonly event: string;

  /**
   * @schema InspectorAssessmentRunNotification#message
   */
  readonly message?: string;

  /**
   * @schema InspectorAssessmentRunNotification#error
   */
  readonly error: boolean;

  /**
   * @schema InspectorAssessmentRunNotification#snsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema InspectorAssessmentRunNotification#snsPublishStatusCode
   */
  readonly snsPublishStatusCode?: string;

}

/**
 * @schema InspectorScope
 */
export interface InspectorScope {
  /**
   * @schema InspectorScope#key
   */
  readonly key?: string;

  /**
   * @schema InspectorScope#value
   */
  readonly value?: string;

}

/**
 * @schema InspectorInspectorServiceAttributes
 */
export interface InspectorInspectorServiceAttributes {
  /**
   * @schema InspectorInspectorServiceAttributes#schemaVersion
   */
  readonly schemaVersion: number;

  /**
   * @schema InspectorInspectorServiceAttributes#assessmentRunArn
   */
  readonly assessmentRunArn?: string;

  /**
   * @schema InspectorInspectorServiceAttributes#rulesPackageArn
   */
  readonly rulesPackageArn?: string;

}

/**
 * @schema InspectorAssetAttributes
 */
export interface InspectorAssetAttributes {
  /**
   * @schema InspectorAssetAttributes#schemaVersion
   */
  readonly schemaVersion: number;

  /**
   * @schema InspectorAssetAttributes#agentId
   */
  readonly agentId?: string;

  /**
   * @schema InspectorAssetAttributes#autoScalingGroup
   */
  readonly autoScalingGroup?: string;

  /**
   * @schema InspectorAssetAttributes#amiId
   */
  readonly amiId?: string;

  /**
   * @schema InspectorAssetAttributes#hostname
   */
  readonly hostname?: string;

  /**
   * @schema InspectorAssetAttributes#ipv4Addresses
   */
  readonly ipv4Addresses?: string[];

  /**
   * @schema InspectorAssetAttributes#tags
   */
  readonly tags?: InspectorTag[];

  /**
   * @schema InspectorAssetAttributes#networkInterfaces
   */
  readonly networkInterfaces?: InspectorNetworkInterface[];

}

/**
 * @schema InspectorDurationRange
 */
export interface InspectorDurationRange {
  /**
   * @schema InspectorDurationRange#minSeconds
   */
  readonly minSeconds?: number;

  /**
   * @schema InspectorDurationRange#maxSeconds
   */
  readonly maxSeconds?: number;

}

/**
 * @schema InspectorTimestampRange
 */
export interface InspectorTimestampRange {
  /**
   * @schema InspectorTimestampRange#beginDate
   */
  readonly beginDate?: string;

  /**
   * @schema InspectorTimestampRange#endDate
   */
  readonly endDate?: string;

}

/**
 * @schema InspectorEventSubscription
 */
export interface InspectorEventSubscription {
  /**
   * @schema InspectorEventSubscription#event
   */
  readonly event: string;

  /**
   * @schema InspectorEventSubscription#subscribedAt
   */
  readonly subscribedAt: string;

}

/**
 * @schema InspectorNetworkInterface
 */
export interface InspectorNetworkInterface {
  /**
   * @schema InspectorNetworkInterface#networkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema InspectorNetworkInterface#subnetId
   */
  readonly subnetId?: string;

  /**
   * @schema InspectorNetworkInterface#vpcId
   */
  readonly vpcId?: string;

  /**
   * @schema InspectorNetworkInterface#privateDnsName
   */
  readonly privateDnsName?: string;

  /**
   * @schema InspectorNetworkInterface#privateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema InspectorNetworkInterface#privateIpAddresses
   */
  readonly privateIpAddresses?: InspectorPrivateIp[];

  /**
   * @schema InspectorNetworkInterface#publicDnsName
   */
  readonly publicDnsName?: string;

  /**
   * @schema InspectorNetworkInterface#publicIp
   */
  readonly publicIp?: string;

  /**
   * @schema InspectorNetworkInterface#ipv6Addresses
   */
  readonly ipv6Addresses?: string[];

  /**
   * @schema InspectorNetworkInterface#securityGroups
   */
  readonly securityGroups?: InspectorSecurityGroup[];

}

/**
 * @schema InspectorPrivateIp
 */
export interface InspectorPrivateIp {
  /**
   * @schema InspectorPrivateIp#privateDnsName
   */
  readonly privateDnsName?: string;

  /**
   * @schema InspectorPrivateIp#privateIpAddress
   */
  readonly privateIpAddress?: string;

}

/**
 * @schema InspectorSecurityGroup
 */
export interface InspectorSecurityGroup {
  /**
   * @schema InspectorSecurityGroup#groupName
   */
  readonly groupName?: string;

  /**
   * @schema InspectorSecurityGroup#groupId
   */
  readonly groupId?: string;

}
