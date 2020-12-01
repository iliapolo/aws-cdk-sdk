/**
 * @schema AcceptInvitationRequest
 */
export interface AcceptInvitationRequest {
  /**
   * @schema AcceptInvitationRequest#MasterId
   */
  readonly masterId: string;

  /**
   * @schema AcceptInvitationRequest#InvitationId
   */
  readonly invitationId: string;

}

/**
 * @schema AcceptInvitationResponse
 */
export interface AcceptInvitationResponse {
}

/**
 * @schema BatchDisableStandardsRequest
 */
export interface BatchDisableStandardsRequest {
  /**
   * @schema BatchDisableStandardsRequest#StandardsSubscriptionArns
   */
  readonly standardsSubscriptionArns: string[];

}

/**
 * @schema BatchDisableStandardsResponse
 */
export interface BatchDisableStandardsResponse {
  /**
   * @schema BatchDisableStandardsResponse#StandardsSubscriptions
   */
  readonly standardsSubscriptions?: StandardsSubscription[];

}

/**
 * @schema BatchEnableStandardsRequest
 */
export interface BatchEnableStandardsRequest {
  /**
   * @schema BatchEnableStandardsRequest#StandardsSubscriptionRequests
   */
  readonly standardsSubscriptionRequests: StandardsSubscriptionRequest[];

}

/**
 * @schema BatchEnableStandardsResponse
 */
export interface BatchEnableStandardsResponse {
  /**
   * @schema BatchEnableStandardsResponse#StandardsSubscriptions
   */
  readonly standardsSubscriptions?: StandardsSubscription[];

}

/**
 * @schema BatchImportFindingsRequest
 */
export interface BatchImportFindingsRequest {
  /**
   * @schema BatchImportFindingsRequest#Findings
   */
  readonly findings: AwsSecurityFinding[];

}

/**
 * @schema BatchImportFindingsResponse
 */
export interface BatchImportFindingsResponse {
  /**
   * @schema BatchImportFindingsResponse#FailedCount
   */
  readonly failedCount: number;

  /**
   * @schema BatchImportFindingsResponse#SuccessCount
   */
  readonly successCount: number;

  /**
   * @schema BatchImportFindingsResponse#FailedFindings
   */
  readonly failedFindings?: ImportFindingsError[];

}

/**
 * @schema BatchUpdateFindingsRequest
 */
export interface BatchUpdateFindingsRequest {
  /**
   * @schema BatchUpdateFindingsRequest#FindingIdentifiers
   */
  readonly findingIdentifiers: AwsSecurityFindingIdentifier[];

  /**
   * @schema BatchUpdateFindingsRequest#Note
   */
  readonly note?: NoteUpdate;

  /**
   * @schema BatchUpdateFindingsRequest#Severity
   */
  readonly severity?: SeverityUpdate;

  /**
   * @schema BatchUpdateFindingsRequest#VerificationState
   */
  readonly verificationState?: string;

  /**
   * @schema BatchUpdateFindingsRequest#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema BatchUpdateFindingsRequest#Criticality
   */
  readonly criticality?: number;

  /**
   * @schema BatchUpdateFindingsRequest#Types
   */
  readonly types?: string[];

  /**
   * @schema BatchUpdateFindingsRequest#UserDefinedFields
   */
  readonly userDefinedFields?: { [key: string]: string };

  /**
   * @schema BatchUpdateFindingsRequest#Workflow
   */
  readonly workflow?: WorkflowUpdate;

  /**
   * @schema BatchUpdateFindingsRequest#RelatedFindings
   */
  readonly relatedFindings?: RelatedFinding[];

}

/**
 * @schema BatchUpdateFindingsResponse
 */
export interface BatchUpdateFindingsResponse {
  /**
   * @schema BatchUpdateFindingsResponse#ProcessedFindings
   */
  readonly processedFindings: AwsSecurityFindingIdentifier[];

  /**
   * @schema BatchUpdateFindingsResponse#UnprocessedFindings
   */
  readonly unprocessedFindings: BatchUpdateFindingsUnprocessedFinding[];

}

/**
 * @schema CreateActionTargetRequest
 */
export interface CreateActionTargetRequest {
  /**
   * @schema CreateActionTargetRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateActionTargetRequest#Description
   */
  readonly description: string;

  /**
   * @schema CreateActionTargetRequest#Id
   */
  readonly id: string;

}

/**
 * @schema CreateActionTargetResponse
 */
export interface CreateActionTargetResponse {
  /**
   * @schema CreateActionTargetResponse#ActionTargetArn
   */
  readonly actionTargetArn: string;

}

/**
 * @schema CreateInsightRequest
 */
export interface CreateInsightRequest {
  /**
   * @schema CreateInsightRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateInsightRequest#Filters
   */
  readonly filters: AwsSecurityFindingFilters;

  /**
   * @schema CreateInsightRequest#GroupByAttribute
   */
  readonly groupByAttribute: string;

}

/**
 * @schema CreateInsightResponse
 */
export interface CreateInsightResponse {
  /**
   * @schema CreateInsightResponse#InsightArn
   */
  readonly insightArn: string;

}

/**
 * @schema CreateMembersRequest
 */
export interface CreateMembersRequest {
  /**
   * @schema CreateMembersRequest#AccountDetails
   */
  readonly accountDetails: AccountDetails[];

}

/**
 * @schema CreateMembersResponse
 */
export interface CreateMembersResponse {
  /**
   * @schema CreateMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: Result[];

}

/**
 * @schema DeclineInvitationsRequest
 */
export interface DeclineInvitationsRequest {
  /**
   * @schema DeclineInvitationsRequest#AccountIds
   */
  readonly accountIds: string[];

}

/**
 * @schema DeclineInvitationsResponse
 */
export interface DeclineInvitationsResponse {
  /**
   * @schema DeclineInvitationsResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: Result[];

}

/**
 * @schema DeleteActionTargetRequest
 */
export interface DeleteActionTargetRequest {
  /**
   * @schema DeleteActionTargetRequest#ActionTargetArn
   */
  readonly actionTargetArn: string;

}

/**
 * @schema DeleteActionTargetResponse
 */
export interface DeleteActionTargetResponse {
  /**
   * @schema DeleteActionTargetResponse#ActionTargetArn
   */
  readonly actionTargetArn: string;

}

/**
 * @schema DeleteInsightRequest
 */
export interface DeleteInsightRequest {
  /**
   * @schema DeleteInsightRequest#InsightArn
   */
  readonly insightArn: string;

}

/**
 * @schema DeleteInsightResponse
 */
export interface DeleteInsightResponse {
  /**
   * @schema DeleteInsightResponse#InsightArn
   */
  readonly insightArn: string;

}

/**
 * @schema DeleteInvitationsRequest
 */
export interface DeleteInvitationsRequest {
  /**
   * @schema DeleteInvitationsRequest#AccountIds
   */
  readonly accountIds: string[];

}

/**
 * @schema DeleteInvitationsResponse
 */
export interface DeleteInvitationsResponse {
  /**
   * @schema DeleteInvitationsResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: Result[];

}

/**
 * @schema DeleteMembersRequest
 */
export interface DeleteMembersRequest {
  /**
   * @schema DeleteMembersRequest#AccountIds
   */
  readonly accountIds: string[];

}

/**
 * @schema DeleteMembersResponse
 */
export interface DeleteMembersResponse {
  /**
   * @schema DeleteMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: Result[];

}

/**
 * @schema DescribeActionTargetsRequest
 */
export interface DescribeActionTargetsRequest {
  /**
   * @schema DescribeActionTargetsRequest#ActionTargetArns
   */
  readonly actionTargetArns?: string[];

  /**
   * @schema DescribeActionTargetsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeActionTargetsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeActionTargetsResponse
 */
export interface DescribeActionTargetsResponse {
  /**
   * @schema DescribeActionTargetsResponse#ActionTargets
   */
  readonly actionTargets: ActionTarget[];

  /**
   * @schema DescribeActionTargetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeHubRequest
 */
export interface DescribeHubRequest {
  /**
   * @schema DescribeHubRequest#HubArn
   */
  readonly hubArn?: string;

}

/**
 * @schema DescribeHubResponse
 */
export interface DescribeHubResponse {
  /**
   * @schema DescribeHubResponse#HubArn
   */
  readonly hubArn?: string;

  /**
   * @schema DescribeHubResponse#SubscribedAt
   */
  readonly subscribedAt?: string;

  /**
   * @schema DescribeHubResponse#AutoEnableControls
   */
  readonly autoEnableControls?: boolean;

}

/**
 * @schema DescribeOrganizationConfigurationRequest
 */
export interface DescribeOrganizationConfigurationRequest {
}

/**
 * @schema DescribeOrganizationConfigurationResponse
 */
export interface DescribeOrganizationConfigurationResponse {
  /**
   * @schema DescribeOrganizationConfigurationResponse#AutoEnable
   */
  readonly autoEnable?: boolean;

  /**
   * @schema DescribeOrganizationConfigurationResponse#MemberAccountLimitReached
   */
  readonly memberAccountLimitReached?: boolean;

}

/**
 * @schema DescribeProductsRequest
 */
export interface DescribeProductsRequest {
  /**
   * @schema DescribeProductsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeProductsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeProductsResponse
 */
export interface DescribeProductsResponse {
  /**
   * @schema DescribeProductsResponse#Products
   */
  readonly products: Product[];

  /**
   * @schema DescribeProductsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeStandardsRequest
 */
export interface DescribeStandardsRequest {
  /**
   * @schema DescribeStandardsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeStandardsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeStandardsResponse
 */
export interface DescribeStandardsResponse {
  /**
   * @schema DescribeStandardsResponse#Standards
   */
  readonly standards?: Standard[];

  /**
   * @schema DescribeStandardsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeStandardsControlsRequest
 */
export interface DescribeStandardsControlsRequest {
  /**
   * @schema DescribeStandardsControlsRequest#StandardsSubscriptionArn
   */
  readonly standardsSubscriptionArn: string;

  /**
   * @schema DescribeStandardsControlsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeStandardsControlsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeStandardsControlsResponse
 */
export interface DescribeStandardsControlsResponse {
  /**
   * @schema DescribeStandardsControlsResponse#Controls
   */
  readonly controls?: StandardsControl[];

  /**
   * @schema DescribeStandardsControlsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DisableImportFindingsForProductRequest
 */
export interface DisableImportFindingsForProductRequest {
  /**
   * @schema DisableImportFindingsForProductRequest#ProductSubscriptionArn
   */
  readonly productSubscriptionArn: string;

}

/**
 * @schema DisableImportFindingsForProductResponse
 */
export interface DisableImportFindingsForProductResponse {
}

/**
 * @schema DisableOrganizationAdminAccountRequest
 */
export interface DisableOrganizationAdminAccountRequest {
  /**
   * @schema DisableOrganizationAdminAccountRequest#AdminAccountId
   */
  readonly adminAccountId: string;

}

/**
 * @schema DisableOrganizationAdminAccountResponse
 */
export interface DisableOrganizationAdminAccountResponse {
}

/**
 * @schema DisableSecurityHubRequest
 */
export interface DisableSecurityHubRequest {
}

/**
 * @schema DisableSecurityHubResponse
 */
export interface DisableSecurityHubResponse {
}

/**
 * @schema DisassociateFromMasterAccountRequest
 */
export interface DisassociateFromMasterAccountRequest {
}

/**
 * @schema DisassociateFromMasterAccountResponse
 */
export interface DisassociateFromMasterAccountResponse {
}

/**
 * @schema DisassociateMembersRequest
 */
export interface DisassociateMembersRequest {
  /**
   * @schema DisassociateMembersRequest#AccountIds
   */
  readonly accountIds: string[];

}

/**
 * @schema DisassociateMembersResponse
 */
export interface DisassociateMembersResponse {
}

/**
 * @schema EnableImportFindingsForProductRequest
 */
export interface EnableImportFindingsForProductRequest {
  /**
   * @schema EnableImportFindingsForProductRequest#ProductArn
   */
  readonly productArn: string;

}

/**
 * @schema EnableImportFindingsForProductResponse
 */
export interface EnableImportFindingsForProductResponse {
  /**
   * @schema EnableImportFindingsForProductResponse#ProductSubscriptionArn
   */
  readonly productSubscriptionArn?: string;

}

/**
 * @schema EnableOrganizationAdminAccountRequest
 */
export interface EnableOrganizationAdminAccountRequest {
  /**
   * @schema EnableOrganizationAdminAccountRequest#AdminAccountId
   */
  readonly adminAccountId: string;

}

/**
 * @schema EnableOrganizationAdminAccountResponse
 */
export interface EnableOrganizationAdminAccountResponse {
}

/**
 * @schema EnableSecurityHubRequest
 */
export interface EnableSecurityHubRequest {
  /**
   * @schema EnableSecurityHubRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema EnableSecurityHubRequest#EnableDefaultStandards
   */
  readonly enableDefaultStandards?: boolean;

}

/**
 * @schema EnableSecurityHubResponse
 */
export interface EnableSecurityHubResponse {
}

/**
 * @schema GetEnabledStandardsRequest
 */
export interface GetEnabledStandardsRequest {
  /**
   * @schema GetEnabledStandardsRequest#StandardsSubscriptionArns
   */
  readonly standardsSubscriptionArns?: string[];

  /**
   * @schema GetEnabledStandardsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetEnabledStandardsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetEnabledStandardsResponse
 */
export interface GetEnabledStandardsResponse {
  /**
   * @schema GetEnabledStandardsResponse#StandardsSubscriptions
   */
  readonly standardsSubscriptions?: StandardsSubscription[];

  /**
   * @schema GetEnabledStandardsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetFindingsRequest
 */
export interface GetFindingsRequest {
  /**
   * @schema GetFindingsRequest#Filters
   */
  readonly filters?: AwsSecurityFindingFilters;

  /**
   * @schema GetFindingsRequest#SortCriteria
   */
  readonly sortCriteria?: SortCriterion[];

  /**
   * @schema GetFindingsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetFindingsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetFindingsResponse
 */
export interface GetFindingsResponse {
  /**
   * @schema GetFindingsResponse#Findings
   */
  readonly findings: AwsSecurityFinding[];

  /**
   * @schema GetFindingsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetInsightResultsRequest
 */
export interface GetInsightResultsRequest {
  /**
   * @schema GetInsightResultsRequest#InsightArn
   */
  readonly insightArn: string;

}

/**
 * @schema GetInsightResultsResponse
 */
export interface GetInsightResultsResponse {
  /**
   * @schema GetInsightResultsResponse#InsightResults
   */
  readonly insightResults: InsightResults;

}

/**
 * @schema GetInsightsRequest
 */
export interface GetInsightsRequest {
  /**
   * @schema GetInsightsRequest#InsightArns
   */
  readonly insightArns?: string[];

  /**
   * @schema GetInsightsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetInsightsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetInsightsResponse
 */
export interface GetInsightsResponse {
  /**
   * @schema GetInsightsResponse#Insights
   */
  readonly insights: Insight[];

  /**
   * @schema GetInsightsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetInvitationsCountRequest
 */
export interface GetInvitationsCountRequest {
}

/**
 * @schema GetInvitationsCountResponse
 */
export interface GetInvitationsCountResponse {
  /**
   * @schema GetInvitationsCountResponse#InvitationsCount
   */
  readonly invitationsCount?: number;

}

/**
 * @schema GetMasterAccountRequest
 */
export interface GetMasterAccountRequest {
}

/**
 * @schema GetMasterAccountResponse
 */
export interface GetMasterAccountResponse {
  /**
   * @schema GetMasterAccountResponse#Master
   */
  readonly master?: Invitation;

}

/**
 * @schema GetMembersRequest
 */
export interface GetMembersRequest {
  /**
   * @schema GetMembersRequest#AccountIds
   */
  readonly accountIds: string[];

}

/**
 * @schema GetMembersResponse
 */
export interface GetMembersResponse {
  /**
   * @schema GetMembersResponse#Members
   */
  readonly members?: Member[];

  /**
   * @schema GetMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: Result[];

}

/**
 * @schema InviteMembersRequest
 */
export interface InviteMembersRequest {
  /**
   * @schema InviteMembersRequest#AccountIds
   */
  readonly accountIds: string[];

}

/**
 * @schema InviteMembersResponse
 */
export interface InviteMembersResponse {
  /**
   * @schema InviteMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: Result[];

}

/**
 * @schema ListEnabledProductsForImportRequest
 */
export interface ListEnabledProductsForImportRequest {
  /**
   * @schema ListEnabledProductsForImportRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListEnabledProductsForImportRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListEnabledProductsForImportResponse
 */
export interface ListEnabledProductsForImportResponse {
  /**
   * @schema ListEnabledProductsForImportResponse#ProductSubscriptions
   */
  readonly productSubscriptions?: string[];

  /**
   * @schema ListEnabledProductsForImportResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListInvitationsRequest
 */
export interface ListInvitationsRequest {
  /**
   * @schema ListInvitationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListInvitationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListInvitationsResponse
 */
export interface ListInvitationsResponse {
  /**
   * @schema ListInvitationsResponse#Invitations
   */
  readonly invitations?: Invitation[];

  /**
   * @schema ListInvitationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListMembersRequest
 */
export interface ListMembersRequest {
  /**
   * @schema ListMembersRequest#OnlyAssociated
   */
  readonly onlyAssociated?: boolean;

  /**
   * @schema ListMembersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListMembersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListMembersResponse
 */
export interface ListMembersResponse {
  /**
   * @schema ListMembersResponse#Members
   */
  readonly members?: Member[];

  /**
   * @schema ListMembersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListOrganizationAdminAccountsRequest
 */
export interface ListOrganizationAdminAccountsRequest {
  /**
   * @schema ListOrganizationAdminAccountsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListOrganizationAdminAccountsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListOrganizationAdminAccountsResponse
 */
export interface ListOrganizationAdminAccountsResponse {
  /**
   * @schema ListOrganizationAdminAccountsResponse#AdminAccounts
   */
  readonly adminAccounts?: AdminAccount[];

  /**
   * @schema ListOrganizationAdminAccountsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

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
   * @schema TagResourceRequest#Tags
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
   * @schema UntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateActionTargetRequest
 */
export interface UpdateActionTargetRequest {
  /**
   * @schema UpdateActionTargetRequest#ActionTargetArn
   */
  readonly actionTargetArn: string;

  /**
   * @schema UpdateActionTargetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateActionTargetRequest#Description
   */
  readonly description?: string;

}

/**
 * @schema UpdateActionTargetResponse
 */
export interface UpdateActionTargetResponse {
}

/**
 * @schema UpdateFindingsRequest
 */
export interface UpdateFindingsRequest {
  /**
   * @schema UpdateFindingsRequest#Filters
   */
  readonly filters: AwsSecurityFindingFilters;

  /**
   * @schema UpdateFindingsRequest#Note
   */
  readonly note?: NoteUpdate;

  /**
   * @schema UpdateFindingsRequest#RecordState
   */
  readonly recordState?: string;

}

/**
 * @schema UpdateFindingsResponse
 */
export interface UpdateFindingsResponse {
}

/**
 * @schema UpdateInsightRequest
 */
export interface UpdateInsightRequest {
  /**
   * @schema UpdateInsightRequest#InsightArn
   */
  readonly insightArn: string;

  /**
   * @schema UpdateInsightRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateInsightRequest#Filters
   */
  readonly filters?: AwsSecurityFindingFilters;

  /**
   * @schema UpdateInsightRequest#GroupByAttribute
   */
  readonly groupByAttribute?: string;

}

/**
 * @schema UpdateInsightResponse
 */
export interface UpdateInsightResponse {
}

/**
 * @schema UpdateOrganizationConfigurationRequest
 */
export interface UpdateOrganizationConfigurationRequest {
  /**
   * @schema UpdateOrganizationConfigurationRequest#AutoEnable
   */
  readonly autoEnable: boolean;

}

/**
 * @schema UpdateOrganizationConfigurationResponse
 */
export interface UpdateOrganizationConfigurationResponse {
}

/**
 * @schema UpdateSecurityHubConfigurationRequest
 */
export interface UpdateSecurityHubConfigurationRequest {
  /**
   * @schema UpdateSecurityHubConfigurationRequest#AutoEnableControls
   */
  readonly autoEnableControls?: boolean;

}

/**
 * @schema UpdateSecurityHubConfigurationResponse
 */
export interface UpdateSecurityHubConfigurationResponse {
}

/**
 * @schema UpdateStandardsControlRequest
 */
export interface UpdateStandardsControlRequest {
  /**
   * @schema UpdateStandardsControlRequest#StandardsControlArn
   */
  readonly standardsControlArn: string;

  /**
   * @schema UpdateStandardsControlRequest#ControlStatus
   */
  readonly controlStatus?: string;

  /**
   * @schema UpdateStandardsControlRequest#DisabledReason
   */
  readonly disabledReason?: string;

}

/**
 * @schema UpdateStandardsControlResponse
 */
export interface UpdateStandardsControlResponse {
}

/**
 * @schema StandardsSubscription
 */
export interface StandardsSubscription {
  /**
   * @schema StandardsSubscription#StandardsSubscriptionArn
   */
  readonly standardsSubscriptionArn: string;

  /**
   * @schema StandardsSubscription#StandardsArn
   */
  readonly standardsArn: string;

  /**
   * @schema StandardsSubscription#StandardsInput
   */
  readonly standardsInput: { [key: string]: string };

  /**
   * @schema StandardsSubscription#StandardsStatus
   */
  readonly standardsStatus: string;

}

/**
 * @schema StandardsSubscriptionRequest
 */
export interface StandardsSubscriptionRequest {
  /**
   * @schema StandardsSubscriptionRequest#StandardsArn
   */
  readonly standardsArn: string;

  /**
   * @schema StandardsSubscriptionRequest#StandardsInput
   */
  readonly standardsInput?: { [key: string]: string };

}

/**
 * @schema AwsSecurityFinding
 */
export interface AwsSecurityFinding {
  /**
   * @schema AwsSecurityFinding#SchemaVersion
   */
  readonly schemaVersion: string;

  /**
   * @schema AwsSecurityFinding#Id
   */
  readonly id: string;

  /**
   * @schema AwsSecurityFinding#ProductArn
   */
  readonly productArn: string;

  /**
   * @schema AwsSecurityFinding#GeneratorId
   */
  readonly generatorId: string;

  /**
   * @schema AwsSecurityFinding#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema AwsSecurityFinding#Types
   */
  readonly types: string[];

  /**
   * @schema AwsSecurityFinding#FirstObservedAt
   */
  readonly firstObservedAt?: string;

  /**
   * @schema AwsSecurityFinding#LastObservedAt
   */
  readonly lastObservedAt?: string;

  /**
   * @schema AwsSecurityFinding#CreatedAt
   */
  readonly createdAt: string;

  /**
   * @schema AwsSecurityFinding#UpdatedAt
   */
  readonly updatedAt: string;

  /**
   * @schema AwsSecurityFinding#Severity
   */
  readonly severity: Severity;

  /**
   * @schema AwsSecurityFinding#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema AwsSecurityFinding#Criticality
   */
  readonly criticality?: number;

  /**
   * @schema AwsSecurityFinding#Title
   */
  readonly title: string;

  /**
   * @schema AwsSecurityFinding#Description
   */
  readonly description: string;

  /**
   * @schema AwsSecurityFinding#Remediation
   */
  readonly remediation?: Remediation;

  /**
   * @schema AwsSecurityFinding#SourceUrl
   */
  readonly sourceUrl?: string;

  /**
   * @schema AwsSecurityFinding#ProductFields
   */
  readonly productFields?: { [key: string]: string };

  /**
   * @schema AwsSecurityFinding#UserDefinedFields
   */
  readonly userDefinedFields?: { [key: string]: string };

  /**
   * @schema AwsSecurityFinding#Malware
   */
  readonly malware?: Malware[];

  /**
   * @schema AwsSecurityFinding#Network
   */
  readonly network?: Network;

  /**
   * @schema AwsSecurityFinding#NetworkPath
   */
  readonly networkPath?: NetworkPathComponent[];

  /**
   * @schema AwsSecurityFinding#Process
   */
  readonly process?: ProcessDetails;

  /**
   * @schema AwsSecurityFinding#ThreatIntelIndicators
   */
  readonly threatIntelIndicators?: ThreatIntelIndicator[];

  /**
   * @schema AwsSecurityFinding#Resources
   */
  readonly resources: Resource[];

  /**
   * @schema AwsSecurityFinding#Compliance
   */
  readonly compliance?: Compliance;

  /**
   * @schema AwsSecurityFinding#VerificationState
   */
  readonly verificationState?: string;

  /**
   * @schema AwsSecurityFinding#WorkflowState
   */
  readonly workflowState?: string;

  /**
   * @schema AwsSecurityFinding#Workflow
   */
  readonly workflow?: Workflow;

  /**
   * @schema AwsSecurityFinding#RecordState
   */
  readonly recordState?: string;

  /**
   * @schema AwsSecurityFinding#RelatedFindings
   */
  readonly relatedFindings?: RelatedFinding[];

  /**
   * @schema AwsSecurityFinding#Note
   */
  readonly note?: Note;

  /**
   * @schema AwsSecurityFinding#Vulnerabilities
   */
  readonly vulnerabilities?: Vulnerability[];

  /**
   * @schema AwsSecurityFinding#PatchSummary
   */
  readonly patchSummary?: PatchSummary;

}

/**
 * @schema ImportFindingsError
 */
export interface ImportFindingsError {
  /**
   * @schema ImportFindingsError#Id
   */
  readonly id: string;

  /**
   * @schema ImportFindingsError#ErrorCode
   */
  readonly errorCode: string;

  /**
   * @schema ImportFindingsError#ErrorMessage
   */
  readonly errorMessage: string;

}

/**
 * @schema AwsSecurityFindingIdentifier
 */
export interface AwsSecurityFindingIdentifier {
  /**
   * @schema AwsSecurityFindingIdentifier#Id
   */
  readonly id: string;

  /**
   * @schema AwsSecurityFindingIdentifier#ProductArn
   */
  readonly productArn: string;

}

/**
 * @schema NoteUpdate
 */
export interface NoteUpdate {
  /**
   * @schema NoteUpdate#Text
   */
  readonly text: string;

  /**
   * @schema NoteUpdate#UpdatedBy
   */
  readonly updatedBy: string;

}

/**
 * @schema SeverityUpdate
 */
export interface SeverityUpdate {
  /**
   * @schema SeverityUpdate#Normalized
   */
  readonly normalized?: number;

  /**
   * @schema SeverityUpdate#Product
   */
  readonly product?: number;

  /**
   * @schema SeverityUpdate#Label
   */
  readonly label?: string;

}

/**
 * @schema WorkflowUpdate
 */
export interface WorkflowUpdate {
  /**
   * @schema WorkflowUpdate#Status
   */
  readonly status?: string;

}

/**
 * @schema RelatedFinding
 */
export interface RelatedFinding {
  /**
   * @schema RelatedFinding#ProductArn
   */
  readonly productArn: string;

  /**
   * @schema RelatedFinding#Id
   */
  readonly id: string;

}

/**
 * @schema BatchUpdateFindingsUnprocessedFinding
 */
export interface BatchUpdateFindingsUnprocessedFinding {
  /**
   * @schema BatchUpdateFindingsUnprocessedFinding#FindingIdentifier
   */
  readonly findingIdentifier: AwsSecurityFindingIdentifier;

  /**
   * @schema BatchUpdateFindingsUnprocessedFinding#ErrorCode
   */
  readonly errorCode: string;

  /**
   * @schema BatchUpdateFindingsUnprocessedFinding#ErrorMessage
   */
  readonly errorMessage: string;

}

/**
 * @schema AwsSecurityFindingFilters
 */
export interface AwsSecurityFindingFilters {
  /**
   * @schema AwsSecurityFindingFilters#ProductArn
   */
  readonly productArn?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#AwsAccountId
   */
  readonly awsAccountId?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#Id
   */
  readonly id?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#GeneratorId
   */
  readonly generatorId?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#Type
   */
  readonly type?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#FirstObservedAt
   */
  readonly firstObservedAt?: DateFilter[];

  /**
   * @schema AwsSecurityFindingFilters#LastObservedAt
   */
  readonly lastObservedAt?: DateFilter[];

  /**
   * @schema AwsSecurityFindingFilters#CreatedAt
   */
  readonly createdAt?: DateFilter[];

  /**
   * @schema AwsSecurityFindingFilters#UpdatedAt
   */
  readonly updatedAt?: DateFilter[];

  /**
   * @schema AwsSecurityFindingFilters#SeverityProduct
   */
  readonly severityProduct?: NumberFilter[];

  /**
   * @schema AwsSecurityFindingFilters#SeverityNormalized
   */
  readonly severityNormalized?: NumberFilter[];

  /**
   * @schema AwsSecurityFindingFilters#SeverityLabel
   */
  readonly severityLabel?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#Confidence
   */
  readonly confidence?: NumberFilter[];

  /**
   * @schema AwsSecurityFindingFilters#Criticality
   */
  readonly criticality?: NumberFilter[];

  /**
   * @schema AwsSecurityFindingFilters#Title
   */
  readonly title?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#Description
   */
  readonly description?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#RecommendationText
   */
  readonly recommendationText?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#SourceUrl
   */
  readonly sourceUrl?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ProductFields
   */
  readonly productFields?: MapFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ProductName
   */
  readonly productName?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#CompanyName
   */
  readonly companyName?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#UserDefinedFields
   */
  readonly userDefinedFields?: MapFilter[];

  /**
   * @schema AwsSecurityFindingFilters#MalwareName
   */
  readonly malwareName?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#MalwareType
   */
  readonly malwareType?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#MalwarePath
   */
  readonly malwarePath?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#MalwareState
   */
  readonly malwareState?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#NetworkDirection
   */
  readonly networkDirection?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#NetworkProtocol
   */
  readonly networkProtocol?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#NetworkSourceIpV4
   */
  readonly networkSourceIpV4?: IpFilter[];

  /**
   * @schema AwsSecurityFindingFilters#NetworkSourceIpV6
   */
  readonly networkSourceIpV6?: IpFilter[];

  /**
   * @schema AwsSecurityFindingFilters#NetworkSourcePort
   */
  readonly networkSourcePort?: NumberFilter[];

  /**
   * @schema AwsSecurityFindingFilters#NetworkSourceDomain
   */
  readonly networkSourceDomain?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#NetworkSourceMac
   */
  readonly networkSourceMac?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#NetworkDestinationIpV4
   */
  readonly networkDestinationIpV4?: IpFilter[];

  /**
   * @schema AwsSecurityFindingFilters#NetworkDestinationIpV6
   */
  readonly networkDestinationIpV6?: IpFilter[];

  /**
   * @schema AwsSecurityFindingFilters#NetworkDestinationPort
   */
  readonly networkDestinationPort?: NumberFilter[];

  /**
   * @schema AwsSecurityFindingFilters#NetworkDestinationDomain
   */
  readonly networkDestinationDomain?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ProcessName
   */
  readonly processName?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ProcessPath
   */
  readonly processPath?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ProcessPid
   */
  readonly processPid?: NumberFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ProcessParentPid
   */
  readonly processParentPid?: NumberFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ProcessLaunchedAt
   */
  readonly processLaunchedAt?: DateFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ProcessTerminatedAt
   */
  readonly processTerminatedAt?: DateFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ThreatIntelIndicatorType
   */
  readonly threatIntelIndicatorType?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ThreatIntelIndicatorValue
   */
  readonly threatIntelIndicatorValue?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ThreatIntelIndicatorCategory
   */
  readonly threatIntelIndicatorCategory?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ThreatIntelIndicatorLastObservedAt
   */
  readonly threatIntelIndicatorLastObservedAt?: DateFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ThreatIntelIndicatorSource
   */
  readonly threatIntelIndicatorSource?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ThreatIntelIndicatorSourceUrl
   */
  readonly threatIntelIndicatorSourceUrl?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ResourceType
   */
  readonly resourceType?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ResourceId
   */
  readonly resourceId?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ResourcePartition
   */
  readonly resourcePartition?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ResourceRegion
   */
  readonly resourceRegion?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ResourceTags
   */
  readonly resourceTags?: MapFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ResourceAwsEc2InstanceType
   */
  readonly resourceAwsEc2InstanceType?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ResourceAwsEc2InstanceImageId
   */
  readonly resourceAwsEc2InstanceImageId?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ResourceAwsEc2InstanceIpV4Addresses
   */
  readonly resourceAwsEc2InstanceIpV4Addresses?: IpFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ResourceAwsEc2InstanceIpV6Addresses
   */
  readonly resourceAwsEc2InstanceIpV6Addresses?: IpFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ResourceAwsEc2InstanceKeyName
   */
  readonly resourceAwsEc2InstanceKeyName?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ResourceAwsEc2InstanceIamInstanceProfileArn
   */
  readonly resourceAwsEc2InstanceIamInstanceProfileArn?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ResourceAwsEc2InstanceVpcId
   */
  readonly resourceAwsEc2InstanceVpcId?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ResourceAwsEc2InstanceSubnetId
   */
  readonly resourceAwsEc2InstanceSubnetId?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ResourceAwsEc2InstanceLaunchedAt
   */
  readonly resourceAwsEc2InstanceLaunchedAt?: DateFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ResourceAwsS3BucketOwnerId
   */
  readonly resourceAwsS3BucketOwnerId?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ResourceAwsS3BucketOwnerName
   */
  readonly resourceAwsS3BucketOwnerName?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ResourceAwsIamAccessKeyUserName
   */
  readonly resourceAwsIamAccessKeyUserName?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ResourceAwsIamAccessKeyStatus
   */
  readonly resourceAwsIamAccessKeyStatus?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ResourceAwsIamAccessKeyCreatedAt
   */
  readonly resourceAwsIamAccessKeyCreatedAt?: DateFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ResourceContainerName
   */
  readonly resourceContainerName?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ResourceContainerImageId
   */
  readonly resourceContainerImageId?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ResourceContainerImageName
   */
  readonly resourceContainerImageName?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ResourceContainerLaunchedAt
   */
  readonly resourceContainerLaunchedAt?: DateFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ResourceDetailsOther
   */
  readonly resourceDetailsOther?: MapFilter[];

  /**
   * @schema AwsSecurityFindingFilters#ComplianceStatus
   */
  readonly complianceStatus?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#VerificationState
   */
  readonly verificationState?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#WorkflowState
   */
  readonly workflowState?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#WorkflowStatus
   */
  readonly workflowStatus?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#RecordState
   */
  readonly recordState?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#RelatedFindingsProductArn
   */
  readonly relatedFindingsProductArn?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#RelatedFindingsId
   */
  readonly relatedFindingsId?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#NoteText
   */
  readonly noteText?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#NoteUpdatedAt
   */
  readonly noteUpdatedAt?: DateFilter[];

  /**
   * @schema AwsSecurityFindingFilters#NoteUpdatedBy
   */
  readonly noteUpdatedBy?: StringFilter[];

  /**
   * @schema AwsSecurityFindingFilters#Keyword
   */
  readonly keyword?: KeywordFilter[];

}

/**
 * @schema AccountDetails
 */
export interface AccountDetails {
  /**
   * @schema AccountDetails#AccountId
   */
  readonly accountId: string;

  /**
   * @schema AccountDetails#Email
   */
  readonly email?: string;

}

/**
 * @schema Result
 */
export interface Result {
  /**
   * @schema Result#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema Result#ProcessingResult
   */
  readonly processingResult?: string;

}

/**
 * @schema ActionTarget
 */
export interface ActionTarget {
  /**
   * @schema ActionTarget#ActionTargetArn
   */
  readonly actionTargetArn: string;

  /**
   * @schema ActionTarget#Name
   */
  readonly name: string;

  /**
   * @schema ActionTarget#Description
   */
  readonly description: string;

}

/**
 * @schema Product
 */
export interface Product {
  /**
   * @schema Product#ProductArn
   */
  readonly productArn: string;

  /**
   * @schema Product#ProductName
   */
  readonly productName?: string;

  /**
   * @schema Product#CompanyName
   */
  readonly companyName?: string;

  /**
   * @schema Product#Description
   */
  readonly description?: string;

  /**
   * @schema Product#Categories
   */
  readonly categories?: string[];

  /**
   * @schema Product#IntegrationTypes
   */
  readonly integrationTypes?: string[];

  /**
   * @schema Product#MarketplaceUrl
   */
  readonly marketplaceUrl?: string;

  /**
   * @schema Product#ActivationUrl
   */
  readonly activationUrl?: string;

  /**
   * @schema Product#ProductSubscriptionResourcePolicy
   */
  readonly productSubscriptionResourcePolicy?: string;

}

/**
 * @schema Standard
 */
export interface Standard {
  /**
   * @schema Standard#StandardsArn
   */
  readonly standardsArn?: string;

  /**
   * @schema Standard#Name
   */
  readonly name?: string;

  /**
   * @schema Standard#Description
   */
  readonly description?: string;

  /**
   * @schema Standard#EnabledByDefault
   */
  readonly enabledByDefault?: boolean;

}

/**
 * @schema StandardsControl
 */
export interface StandardsControl {
  /**
   * @schema StandardsControl#StandardsControlArn
   */
  readonly standardsControlArn?: string;

  /**
   * @schema StandardsControl#ControlStatus
   */
  readonly controlStatus?: string;

  /**
   * @schema StandardsControl#DisabledReason
   */
  readonly disabledReason?: string;

  /**
   * @schema StandardsControl#ControlStatusUpdatedAt
   */
  readonly controlStatusUpdatedAt?: string;

  /**
   * @schema StandardsControl#ControlId
   */
  readonly controlId?: string;

  /**
   * @schema StandardsControl#Title
   */
  readonly title?: string;

  /**
   * @schema StandardsControl#Description
   */
  readonly description?: string;

  /**
   * @schema StandardsControl#RemediationUrl
   */
  readonly remediationUrl?: string;

  /**
   * @schema StandardsControl#SeverityRating
   */
  readonly severityRating?: string;

  /**
   * @schema StandardsControl#RelatedRequirements
   */
  readonly relatedRequirements?: string[];

}

/**
 * @schema SortCriterion
 */
export interface SortCriterion {
  /**
   * @schema SortCriterion#Field
   */
  readonly field?: string;

  /**
   * @schema SortCriterion#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * @schema InsightResults
 */
export interface InsightResults {
  /**
   * @schema InsightResults#InsightArn
   */
  readonly insightArn: string;

  /**
   * @schema InsightResults#GroupByAttribute
   */
  readonly groupByAttribute: string;

  /**
   * @schema InsightResults#ResultValues
   */
  readonly resultValues: InsightResultValue[];

}

/**
 * @schema Insight
 */
export interface Insight {
  /**
   * @schema Insight#InsightArn
   */
  readonly insightArn: string;

  /**
   * @schema Insight#Name
   */
  readonly name: string;

  /**
   * @schema Insight#Filters
   */
  readonly filters: AwsSecurityFindingFilters;

  /**
   * @schema Insight#GroupByAttribute
   */
  readonly groupByAttribute: string;

}

/**
 * @schema Invitation
 */
export interface Invitation {
  /**
   * @schema Invitation#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema Invitation#InvitationId
   */
  readonly invitationId?: string;

  /**
   * @schema Invitation#InvitedAt
   */
  readonly invitedAt?: string;

  /**
   * @schema Invitation#MemberStatus
   */
  readonly memberStatus?: string;

}

/**
 * @schema Member
 */
export interface Member {
  /**
   * @schema Member#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema Member#Email
   */
  readonly email?: string;

  /**
   * @schema Member#MasterId
   */
  readonly masterId?: string;

  /**
   * @schema Member#MemberStatus
   */
  readonly memberStatus?: string;

  /**
   * @schema Member#InvitedAt
   */
  readonly invitedAt?: string;

  /**
   * @schema Member#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema AdminAccount
 */
export interface AdminAccount {
  /**
   * @schema AdminAccount#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema AdminAccount#Status
   */
  readonly status?: string;

}

/**
 * @schema Severity
 */
export interface Severity {
  /**
   * @schema Severity#Product
   */
  readonly product?: number;

  /**
   * @schema Severity#Label
   */
  readonly label?: string;

  /**
   * @schema Severity#Normalized
   */
  readonly normalized?: number;

  /**
   * @schema Severity#Original
   */
  readonly original?: string;

}

/**
 * @schema Remediation
 */
export interface Remediation {
  /**
   * @schema Remediation#Recommendation
   */
  readonly recommendation?: Recommendation;

}

/**
 * @schema Malware
 */
export interface Malware {
  /**
   * @schema Malware#Name
   */
  readonly name: string;

  /**
   * @schema Malware#Type
   */
  readonly type?: string;

  /**
   * @schema Malware#Path
   */
  readonly path?: string;

  /**
   * @schema Malware#State
   */
  readonly state?: string;

}

/**
 * @schema Network
 */
export interface Network {
  /**
   * @schema Network#Direction
   */
  readonly direction?: string;

  /**
   * @schema Network#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema Network#OpenPortRange
   */
  readonly openPortRange?: PortRange;

  /**
   * @schema Network#SourceIpV4
   */
  readonly sourceIpV4?: string;

  /**
   * @schema Network#SourceIpV6
   */
  readonly sourceIpV6?: string;

  /**
   * @schema Network#SourcePort
   */
  readonly sourcePort?: number;

  /**
   * @schema Network#SourceDomain
   */
  readonly sourceDomain?: string;

  /**
   * @schema Network#SourceMac
   */
  readonly sourceMac?: string;

  /**
   * @schema Network#DestinationIpV4
   */
  readonly destinationIpV4?: string;

  /**
   * @schema Network#DestinationIpV6
   */
  readonly destinationIpV6?: string;

  /**
   * @schema Network#DestinationPort
   */
  readonly destinationPort?: number;

  /**
   * @schema Network#DestinationDomain
   */
  readonly destinationDomain?: string;

}

/**
 * @schema NetworkPathComponent
 */
export interface NetworkPathComponent {
  /**
   * @schema NetworkPathComponent#ComponentId
   */
  readonly componentId?: string;

  /**
   * @schema NetworkPathComponent#ComponentType
   */
  readonly componentType?: string;

  /**
   * @schema NetworkPathComponent#Egress
   */
  readonly egress?: NetworkHeader;

  /**
   * @schema NetworkPathComponent#Ingress
   */
  readonly ingress?: NetworkHeader;

}

/**
 * @schema ProcessDetails
 */
export interface ProcessDetails {
  /**
   * @schema ProcessDetails#Name
   */
  readonly name?: string;

  /**
   * @schema ProcessDetails#Path
   */
  readonly path?: string;

  /**
   * @schema ProcessDetails#Pid
   */
  readonly pid?: number;

  /**
   * @schema ProcessDetails#ParentPid
   */
  readonly parentPid?: number;

  /**
   * @schema ProcessDetails#LaunchedAt
   */
  readonly launchedAt?: string;

  /**
   * @schema ProcessDetails#TerminatedAt
   */
  readonly terminatedAt?: string;

}

/**
 * @schema ThreatIntelIndicator
 */
export interface ThreatIntelIndicator {
  /**
   * @schema ThreatIntelIndicator#Type
   */
  readonly type?: string;

  /**
   * @schema ThreatIntelIndicator#Value
   */
  readonly value?: string;

  /**
   * @schema ThreatIntelIndicator#Category
   */
  readonly category?: string;

  /**
   * @schema ThreatIntelIndicator#LastObservedAt
   */
  readonly lastObservedAt?: string;

  /**
   * @schema ThreatIntelIndicator#Source
   */
  readonly source?: string;

  /**
   * @schema ThreatIntelIndicator#SourceUrl
   */
  readonly sourceUrl?: string;

}

/**
 * @schema Resource
 */
export interface Resource {
  /**
   * @schema Resource#Type
   */
  readonly type: string;

  /**
   * @schema Resource#Id
   */
  readonly id: string;

  /**
   * @schema Resource#Partition
   */
  readonly partition?: string;

  /**
   * @schema Resource#Region
   */
  readonly region?: string;

  /**
   * @schema Resource#ResourceRole
   */
  readonly resourceRole?: string;

  /**
   * @schema Resource#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema Resource#Details
   */
  readonly details?: ResourceDetails;

}

/**
 * @schema Compliance
 */
export interface Compliance {
  /**
   * @schema Compliance#Status
   */
  readonly status?: string;

  /**
   * @schema Compliance#RelatedRequirements
   */
  readonly relatedRequirements?: string[];

  /**
   * @schema Compliance#StatusReasons
   */
  readonly statusReasons?: StatusReason[];

}

/**
 * @schema Workflow
 */
export interface Workflow {
  /**
   * @schema Workflow#Status
   */
  readonly status?: string;

}

/**
 * @schema Note
 */
export interface Note {
  /**
   * @schema Note#Text
   */
  readonly text: string;

  /**
   * @schema Note#UpdatedBy
   */
  readonly updatedBy: string;

  /**
   * @schema Note#UpdatedAt
   */
  readonly updatedAt: string;

}

/**
 * @schema Vulnerability
 */
export interface Vulnerability {
  /**
   * @schema Vulnerability#Id
   */
  readonly id: string;

  /**
   * @schema Vulnerability#VulnerablePackages
   */
  readonly vulnerablePackages?: SoftwarePackage[];

  /**
   * @schema Vulnerability#Cvss
   */
  readonly cvss?: Cvss[];

  /**
   * @schema Vulnerability#RelatedVulnerabilities
   */
  readonly relatedVulnerabilities?: string[];

  /**
   * @schema Vulnerability#Vendor
   */
  readonly vendor?: VulnerabilityVendor;

  /**
   * @schema Vulnerability#ReferenceUrls
   */
  readonly referenceUrls?: string[];

}

/**
 * @schema PatchSummary
 */
export interface PatchSummary {
  /**
   * @schema PatchSummary#Id
   */
  readonly id: string;

  /**
   * @schema PatchSummary#InstalledCount
   */
  readonly installedCount?: number;

  /**
   * @schema PatchSummary#MissingCount
   */
  readonly missingCount?: number;

  /**
   * @schema PatchSummary#FailedCount
   */
  readonly failedCount?: number;

  /**
   * @schema PatchSummary#InstalledOtherCount
   */
  readonly installedOtherCount?: number;

  /**
   * @schema PatchSummary#InstalledRejectedCount
   */
  readonly installedRejectedCount?: number;

  /**
   * @schema PatchSummary#InstalledPendingReboot
   */
  readonly installedPendingReboot?: number;

  /**
   * @schema PatchSummary#OperationStartTime
   */
  readonly operationStartTime?: string;

  /**
   * @schema PatchSummary#OperationEndTime
   */
  readonly operationEndTime?: string;

  /**
   * @schema PatchSummary#RebootOption
   */
  readonly rebootOption?: string;

  /**
   * @schema PatchSummary#Operation
   */
  readonly operation?: string;

}

/**
 * @schema StringFilter
 */
export interface StringFilter {
  /**
   * @schema StringFilter#Value
   */
  readonly value?: string;

  /**
   * @schema StringFilter#Comparison
   */
  readonly comparison?: string;

}

/**
 * @schema DateFilter
 */
export interface DateFilter {
  /**
   * @schema DateFilter#Start
   */
  readonly start?: string;

  /**
   * @schema DateFilter#End
   */
  readonly end?: string;

  /**
   * @schema DateFilter#DateRange
   */
  readonly dateRange?: DateRange;

}

/**
 * @schema NumberFilter
 */
export interface NumberFilter {
  /**
   * @schema NumberFilter#Gte
   */
  readonly gte?: number;

  /**
   * @schema NumberFilter#Lte
   */
  readonly lte?: number;

  /**
   * @schema NumberFilter#Eq
   */
  readonly eq?: number;

}

/**
 * @schema MapFilter
 */
export interface MapFilter {
  /**
   * @schema MapFilter#Key
   */
  readonly key?: string;

  /**
   * @schema MapFilter#Value
   */
  readonly value?: string;

  /**
   * @schema MapFilter#Comparison
   */
  readonly comparison?: string;

}

/**
 * @schema IpFilter
 */
export interface IpFilter {
  /**
   * @schema IpFilter#Cidr
   */
  readonly cidr?: string;

}

/**
 * @schema KeywordFilter
 */
export interface KeywordFilter {
  /**
   * @schema KeywordFilter#Value
   */
  readonly value?: string;

}

/**
 * @schema InsightResultValue
 */
export interface InsightResultValue {
  /**
   * @schema InsightResultValue#GroupByAttributeValue
   */
  readonly groupByAttributeValue: string;

  /**
   * @schema InsightResultValue#Count
   */
  readonly count: number;

}

/**
 * @schema Recommendation
 */
export interface Recommendation {
  /**
   * @schema Recommendation#Text
   */
  readonly text?: string;

  /**
   * @schema Recommendation#Url
   */
  readonly url?: string;

}

/**
 * @schema PortRange
 */
export interface PortRange {
  /**
   * @schema PortRange#Begin
   */
  readonly begin?: number;

  /**
   * @schema PortRange#End
   */
  readonly end?: number;

}

/**
 * @schema NetworkHeader
 */
export interface NetworkHeader {
  /**
   * @schema NetworkHeader#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema NetworkHeader#Destination
   */
  readonly destination?: NetworkPathComponentDetails;

  /**
   * @schema NetworkHeader#Source
   */
  readonly source?: NetworkPathComponentDetails;

}

/**
 * @schema ResourceDetails
 */
export interface ResourceDetails {
  /**
   * @schema ResourceDetails#AwsAutoScalingAutoScalingGroup
   */
  readonly awsAutoScalingAutoScalingGroup?: AwsAutoScalingAutoScalingGroupDetails;

  /**
   * @schema ResourceDetails#AwsCodeBuildProject
   */
  readonly awsCodeBuildProject?: AwsCodeBuildProjectDetails;

  /**
   * @schema ResourceDetails#AwsCloudFrontDistribution
   */
  readonly awsCloudFrontDistribution?: AwsCloudFrontDistributionDetails;

  /**
   * @schema ResourceDetails#AwsEc2Instance
   */
  readonly awsEc2Instance?: AwsEc2InstanceDetails;

  /**
   * @schema ResourceDetails#AwsEc2NetworkInterface
   */
  readonly awsEc2NetworkInterface?: AwsEc2NetworkInterfaceDetails;

  /**
   * @schema ResourceDetails#AwsEc2SecurityGroup
   */
  readonly awsEc2SecurityGroup?: AwsEc2SecurityGroupDetails;

  /**
   * @schema ResourceDetails#AwsEc2Volume
   */
  readonly awsEc2Volume?: AwsEc2VolumeDetails;

  /**
   * @schema ResourceDetails#AwsEc2Vpc
   */
  readonly awsEc2Vpc?: AwsEc2VpcDetails;

  /**
   * @schema ResourceDetails#AwsEc2Eip
   */
  readonly awsEc2Eip?: AwsEc2EipDetails;

  /**
   * @schema ResourceDetails#AwsElbv2LoadBalancer
   */
  readonly awsElbv2LoadBalancer?: AwsElbv2LoadBalancerDetails;

  /**
   * @schema ResourceDetails#AwsElasticsearchDomain
   */
  readonly awsElasticsearchDomain?: AwsElasticsearchDomainDetails;

  /**
   * @schema ResourceDetails#AwsS3Bucket
   */
  readonly awsS3Bucket?: AwsS3BucketDetails;

  /**
   * @schema ResourceDetails#AwsS3Object
   */
  readonly awsS3Object?: AwsS3ObjectDetails;

  /**
   * @schema ResourceDetails#AwsSecretsManagerSecret
   */
  readonly awsSecretsManagerSecret?: AwsSecretsManagerSecretDetails;

  /**
   * @schema ResourceDetails#AwsIamAccessKey
   */
  readonly awsIamAccessKey?: AwsIamAccessKeyDetails;

  /**
   * @schema ResourceDetails#AwsIamUser
   */
  readonly awsIamUser?: AwsIamUserDetails;

  /**
   * @schema ResourceDetails#AwsIamPolicy
   */
  readonly awsIamPolicy?: AwsIamPolicyDetails;

  /**
   * @schema ResourceDetails#AwsApiGatewayV2Stage
   */
  readonly awsApiGatewayV2Stage?: AwsApiGatewayV2StageDetails;

  /**
   * @schema ResourceDetails#AwsApiGatewayV2Api
   */
  readonly awsApiGatewayV2Api?: AwsApiGatewayV2ApiDetails;

  /**
   * @schema ResourceDetails#AwsDynamoDbTable
   */
  readonly awsDynamoDbTable?: AwsDynamoDbTableDetails;

  /**
   * @schema ResourceDetails#AwsApiGatewayStage
   */
  readonly awsApiGatewayStage?: AwsApiGatewayStageDetails;

  /**
   * @schema ResourceDetails#AwsApiGatewayRestApi
   */
  readonly awsApiGatewayRestApi?: AwsApiGatewayRestApiDetails;

  /**
   * @schema ResourceDetails#AwsCloudTrailTrail
   */
  readonly awsCloudTrailTrail?: AwsCloudTrailTrailDetails;

  /**
   * @schema ResourceDetails#AwsCertificateManagerCertificate
   */
  readonly awsCertificateManagerCertificate?: AwsCertificateManagerCertificateDetails;

  /**
   * @schema ResourceDetails#AwsRedshiftCluster
   */
  readonly awsRedshiftCluster?: AwsRedshiftClusterDetails;

  /**
   * @schema ResourceDetails#AwsElbLoadBalancer
   */
  readonly awsElbLoadBalancer?: AwsElbLoadBalancerDetails;

  /**
   * @schema ResourceDetails#AwsIamGroup
   */
  readonly awsIamGroup?: AwsIamGroupDetails;

  /**
   * @schema ResourceDetails#AwsIamRole
   */
  readonly awsIamRole?: AwsIamRoleDetails;

  /**
   * @schema ResourceDetails#AwsKmsKey
   */
  readonly awsKmsKey?: AwsKmsKeyDetails;

  /**
   * @schema ResourceDetails#AwsLambdaFunction
   */
  readonly awsLambdaFunction?: AwsLambdaFunctionDetails;

  /**
   * @schema ResourceDetails#AwsLambdaLayerVersion
   */
  readonly awsLambdaLayerVersion?: AwsLambdaLayerVersionDetails;

  /**
   * @schema ResourceDetails#AwsRdsDbInstance
   */
  readonly awsRdsDbInstance?: AwsRdsDbInstanceDetails;

  /**
   * @schema ResourceDetails#AwsSnsTopic
   */
  readonly awsSnsTopic?: AwsSnsTopicDetails;

  /**
   * @schema ResourceDetails#AwsSqsQueue
   */
  readonly awsSqsQueue?: AwsSqsQueueDetails;

  /**
   * @schema ResourceDetails#AwsWafWebAcl
   */
  readonly awsWafWebAcl?: AwsWafWebAclDetails;

  /**
   * @schema ResourceDetails#AwsRdsDbSnapshot
   */
  readonly awsRdsDbSnapshot?: AwsRdsDbSnapshotDetails;

  /**
   * @schema ResourceDetails#AwsRdsDbClusterSnapshot
   */
  readonly awsRdsDbClusterSnapshot?: AwsRdsDbClusterSnapshotDetails;

  /**
   * @schema ResourceDetails#AwsRdsDbCluster
   */
  readonly awsRdsDbCluster?: AwsRdsDbClusterDetails;

  /**
   * @schema ResourceDetails#Container
   */
  readonly container?: ContainerDetails;

  /**
   * @schema ResourceDetails#Other
   */
  readonly other?: { [key: string]: string };

}

/**
 * @schema StatusReason
 */
export interface StatusReason {
  /**
   * @schema StatusReason#ReasonCode
   */
  readonly reasonCode: string;

  /**
   * @schema StatusReason#Description
   */
  readonly description?: string;

}

/**
 * @schema SoftwarePackage
 */
export interface SoftwarePackage {
  /**
   * @schema SoftwarePackage#Name
   */
  readonly name?: string;

  /**
   * @schema SoftwarePackage#Version
   */
  readonly version?: string;

  /**
   * @schema SoftwarePackage#Epoch
   */
  readonly epoch?: string;

  /**
   * @schema SoftwarePackage#Release
   */
  readonly release?: string;

  /**
   * @schema SoftwarePackage#Architecture
   */
  readonly architecture?: string;

}

/**
 * @schema Cvss
 */
export interface Cvss {
  /**
   * @schema Cvss#Version
   */
  readonly version?: string;

  /**
   * @schema Cvss#BaseScore
   */
  readonly baseScore?: number;

  /**
   * @schema Cvss#BaseVector
   */
  readonly baseVector?: string;

}

/**
 * @schema VulnerabilityVendor
 */
export interface VulnerabilityVendor {
  /**
   * @schema VulnerabilityVendor#Name
   */
  readonly name: string;

  /**
   * @schema VulnerabilityVendor#Url
   */
  readonly url?: string;

  /**
   * @schema VulnerabilityVendor#VendorSeverity
   */
  readonly vendorSeverity?: string;

  /**
   * @schema VulnerabilityVendor#VendorCreatedAt
   */
  readonly vendorCreatedAt?: string;

  /**
   * @schema VulnerabilityVendor#VendorUpdatedAt
   */
  readonly vendorUpdatedAt?: string;

}

/**
 * @schema DateRange
 */
export interface DateRange {
  /**
   * @schema DateRange#Value
   */
  readonly value?: number;

  /**
   * @schema DateRange#Unit
   */
  readonly unit?: string;

}

/**
 * @schema NetworkPathComponentDetails
 */
export interface NetworkPathComponentDetails {
  /**
   * @schema NetworkPathComponentDetails#Address
   */
  readonly address?: string[];

  /**
   * @schema NetworkPathComponentDetails#PortRanges
   */
  readonly portRanges?: PortRange[];

}

/**
 * @schema AwsAutoScalingAutoScalingGroupDetails
 */
export interface AwsAutoScalingAutoScalingGroupDetails {
  /**
   * @schema AwsAutoScalingAutoScalingGroupDetails#LaunchConfigurationName
   */
  readonly launchConfigurationName?: string;

  /**
   * @schema AwsAutoScalingAutoScalingGroupDetails#LoadBalancerNames
   */
  readonly loadBalancerNames?: string[];

  /**
   * @schema AwsAutoScalingAutoScalingGroupDetails#HealthCheckType
   */
  readonly healthCheckType?: string;

  /**
   * @schema AwsAutoScalingAutoScalingGroupDetails#HealthCheckGracePeriod
   */
  readonly healthCheckGracePeriod?: number;

  /**
   * @schema AwsAutoScalingAutoScalingGroupDetails#CreatedTime
   */
  readonly createdTime?: string;

}

/**
 * @schema AwsCodeBuildProjectDetails
 */
export interface AwsCodeBuildProjectDetails {
  /**
   * @schema AwsCodeBuildProjectDetails#EncryptionKey
   */
  readonly encryptionKey?: string;

  /**
   * @schema AwsCodeBuildProjectDetails#Environment
   */
  readonly environment?: AwsCodeBuildProjectEnvironment;

  /**
   * @schema AwsCodeBuildProjectDetails#Name
   */
  readonly name?: string;

  /**
   * @schema AwsCodeBuildProjectDetails#Source
   */
  readonly source?: AwsCodeBuildProjectSource;

  /**
   * @schema AwsCodeBuildProjectDetails#ServiceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema AwsCodeBuildProjectDetails#VpcConfig
   */
  readonly vpcConfig?: AwsCodeBuildProjectVpcConfig;

}

/**
 * @schema AwsCloudFrontDistributionDetails
 */
export interface AwsCloudFrontDistributionDetails {
  /**
   * @schema AwsCloudFrontDistributionDetails#CacheBehaviors
   */
  readonly cacheBehaviors?: AwsCloudFrontDistributionCacheBehaviors;

  /**
   * @schema AwsCloudFrontDistributionDetails#DefaultCacheBehavior
   */
  readonly defaultCacheBehavior?: AwsCloudFrontDistributionDefaultCacheBehavior;

  /**
   * @schema AwsCloudFrontDistributionDetails#DefaultRootObject
   */
  readonly defaultRootObject?: string;

  /**
   * @schema AwsCloudFrontDistributionDetails#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema AwsCloudFrontDistributionDetails#ETag
   */
  readonly eTag?: string;

  /**
   * @schema AwsCloudFrontDistributionDetails#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema AwsCloudFrontDistributionDetails#Logging
   */
  readonly logging?: AwsCloudFrontDistributionLogging;

  /**
   * @schema AwsCloudFrontDistributionDetails#Origins
   */
  readonly origins?: AwsCloudFrontDistributionOrigins;

  /**
   * @schema AwsCloudFrontDistributionDetails#OriginGroups
   */
  readonly originGroups?: AwsCloudFrontDistributionOriginGroups;

  /**
   * @schema AwsCloudFrontDistributionDetails#Status
   */
  readonly status?: string;

  /**
   * @schema AwsCloudFrontDistributionDetails#WebAclId
   */
  readonly webAclId?: string;

}

/**
 * @schema AwsEc2InstanceDetails
 */
export interface AwsEc2InstanceDetails {
  /**
   * @schema AwsEc2InstanceDetails#Type
   */
  readonly type?: string;

  /**
   * @schema AwsEc2InstanceDetails#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema AwsEc2InstanceDetails#IpV4Addresses
   */
  readonly ipV4Addresses?: string[];

  /**
   * @schema AwsEc2InstanceDetails#IpV6Addresses
   */
  readonly ipV6Addresses?: string[];

  /**
   * @schema AwsEc2InstanceDetails#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema AwsEc2InstanceDetails#IamInstanceProfileArn
   */
  readonly iamInstanceProfileArn?: string;

  /**
   * @schema AwsEc2InstanceDetails#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema AwsEc2InstanceDetails#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema AwsEc2InstanceDetails#LaunchedAt
   */
  readonly launchedAt?: string;

}

/**
 * @schema AwsEc2NetworkInterfaceDetails
 */
export interface AwsEc2NetworkInterfaceDetails {
  /**
   * @schema AwsEc2NetworkInterfaceDetails#Attachment
   */
  readonly attachment?: AwsEc2NetworkInterfaceAttachment;

  /**
   * @schema AwsEc2NetworkInterfaceDetails#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema AwsEc2NetworkInterfaceDetails#SecurityGroups
   */
  readonly securityGroups?: AwsEc2NetworkInterfaceSecurityGroup[];

  /**
   * @schema AwsEc2NetworkInterfaceDetails#SourceDestCheck
   */
  readonly sourceDestCheck?: boolean;

}

/**
 * @schema AwsEc2SecurityGroupDetails
 */
export interface AwsEc2SecurityGroupDetails {
  /**
   * @schema AwsEc2SecurityGroupDetails#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema AwsEc2SecurityGroupDetails#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema AwsEc2SecurityGroupDetails#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema AwsEc2SecurityGroupDetails#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema AwsEc2SecurityGroupDetails#IpPermissions
   */
  readonly ipPermissions?: AwsEc2SecurityGroupIpPermission[];

  /**
   * @schema AwsEc2SecurityGroupDetails#IpPermissionsEgress
   */
  readonly ipPermissionsEgress?: AwsEc2SecurityGroupIpPermission[];

}

/**
 * @schema AwsEc2VolumeDetails
 */
export interface AwsEc2VolumeDetails {
  /**
   * @schema AwsEc2VolumeDetails#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema AwsEc2VolumeDetails#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema AwsEc2VolumeDetails#Size
   */
  readonly size?: number;

  /**
   * @schema AwsEc2VolumeDetails#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema AwsEc2VolumeDetails#Status
   */
  readonly status?: string;

  /**
   * @schema AwsEc2VolumeDetails#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema AwsEc2VolumeDetails#Attachments
   */
  readonly attachments?: AwsEc2VolumeAttachment[];

}

/**
 * @schema AwsEc2VpcDetails
 */
export interface AwsEc2VpcDetails {
  /**
   * @schema AwsEc2VpcDetails#CidrBlockAssociationSet
   */
  readonly cidrBlockAssociationSet?: CidrBlockAssociation[];

  /**
   * @schema AwsEc2VpcDetails#Ipv6CidrBlockAssociationSet
   */
  readonly ipv6CidrBlockAssociationSet?: Ipv6CidrBlockAssociation[];

  /**
   * @schema AwsEc2VpcDetails#DhcpOptionsId
   */
  readonly dhcpOptionsId?: string;

  /**
   * @schema AwsEc2VpcDetails#State
   */
  readonly state?: string;

}

/**
 * @schema AwsEc2EipDetails
 */
export interface AwsEc2EipDetails {
  /**
   * @schema AwsEc2EipDetails#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema AwsEc2EipDetails#PublicIp
   */
  readonly publicIp?: string;

  /**
   * @schema AwsEc2EipDetails#AllocationId
   */
  readonly allocationId?: string;

  /**
   * @schema AwsEc2EipDetails#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema AwsEc2EipDetails#Domain
   */
  readonly domain?: string;

  /**
   * @schema AwsEc2EipDetails#PublicIpv4Pool
   */
  readonly publicIpv4Pool?: string;

  /**
   * @schema AwsEc2EipDetails#NetworkBorderGroup
   */
  readonly networkBorderGroup?: string;

  /**
   * @schema AwsEc2EipDetails#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema AwsEc2EipDetails#NetworkInterfaceOwnerId
   */
  readonly networkInterfaceOwnerId?: string;

  /**
   * @schema AwsEc2EipDetails#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

}

/**
 * @schema AwsElbv2LoadBalancerDetails
 */
export interface AwsElbv2LoadBalancerDetails {
  /**
   * @schema AwsElbv2LoadBalancerDetails#AvailabilityZones
   */
  readonly availabilityZones?: AvailabilityZone[];

  /**
   * @schema AwsElbv2LoadBalancerDetails#CanonicalHostedZoneId
   */
  readonly canonicalHostedZoneId?: string;

  /**
   * @schema AwsElbv2LoadBalancerDetails#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema AwsElbv2LoadBalancerDetails#DNSName
   */
  readonly dnsName?: string;

  /**
   * @schema AwsElbv2LoadBalancerDetails#IpAddressType
   */
  readonly ipAddressType?: string;

  /**
   * @schema AwsElbv2LoadBalancerDetails#Scheme
   */
  readonly scheme?: string;

  /**
   * @schema AwsElbv2LoadBalancerDetails#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema AwsElbv2LoadBalancerDetails#State
   */
  readonly state?: LoadBalancerState;

  /**
   * @schema AwsElbv2LoadBalancerDetails#Type
   */
  readonly type?: string;

  /**
   * @schema AwsElbv2LoadBalancerDetails#VpcId
   */
  readonly vpcId?: string;

}

/**
 * @schema AwsElasticsearchDomainDetails
 */
export interface AwsElasticsearchDomainDetails {
  /**
   * @schema AwsElasticsearchDomainDetails#AccessPolicies
   */
  readonly accessPolicies?: string;

  /**
   * @schema AwsElasticsearchDomainDetails#DomainEndpointOptions
   */
  readonly domainEndpointOptions?: AwsElasticsearchDomainDomainEndpointOptions;

  /**
   * @schema AwsElasticsearchDomainDetails#DomainId
   */
  readonly domainId?: string;

  /**
   * @schema AwsElasticsearchDomainDetails#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema AwsElasticsearchDomainDetails#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema AwsElasticsearchDomainDetails#Endpoints
   */
  readonly endpoints?: { [key: string]: string };

  /**
   * @schema AwsElasticsearchDomainDetails#ElasticsearchVersion
   */
  readonly elasticsearchVersion?: string;

  /**
   * @schema AwsElasticsearchDomainDetails#EncryptionAtRestOptions
   */
  readonly encryptionAtRestOptions?: AwsElasticsearchDomainEncryptionAtRestOptions;

  /**
   * @schema AwsElasticsearchDomainDetails#NodeToNodeEncryptionOptions
   */
  readonly nodeToNodeEncryptionOptions?: AwsElasticsearchDomainNodeToNodeEncryptionOptions;

  /**
   * @schema AwsElasticsearchDomainDetails#VPCOptions
   */
  readonly vpcOptions?: AwsElasticsearchDomainVpcOptions;

}

/**
 * @schema AwsS3BucketDetails
 */
export interface AwsS3BucketDetails {
  /**
   * @schema AwsS3BucketDetails#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema AwsS3BucketDetails#OwnerName
   */
  readonly ownerName?: string;

  /**
   * @schema AwsS3BucketDetails#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema AwsS3BucketDetails#ServerSideEncryptionConfiguration
   */
  readonly serverSideEncryptionConfiguration?: AwsS3BucketServerSideEncryptionConfiguration;

}

/**
 * @schema AwsS3ObjectDetails
 */
export interface AwsS3ObjectDetails {
  /**
   * @schema AwsS3ObjectDetails#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema AwsS3ObjectDetails#ETag
   */
  readonly eTag?: string;

  /**
   * @schema AwsS3ObjectDetails#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema AwsS3ObjectDetails#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema AwsS3ObjectDetails#ServerSideEncryption
   */
  readonly serverSideEncryption?: string;

  /**
   * @schema AwsS3ObjectDetails#SSEKMSKeyId
   */
  readonly ssekmsKeyId?: string;

}

/**
 * @schema AwsSecretsManagerSecretDetails
 */
export interface AwsSecretsManagerSecretDetails {
  /**
   * @schema AwsSecretsManagerSecretDetails#RotationRules
   */
  readonly rotationRules?: AwsSecretsManagerSecretRotationRules;

  /**
   * @schema AwsSecretsManagerSecretDetails#RotationOccurredWithinFrequency
   */
  readonly rotationOccurredWithinFrequency?: boolean;

  /**
   * @schema AwsSecretsManagerSecretDetails#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema AwsSecretsManagerSecretDetails#RotationEnabled
   */
  readonly rotationEnabled?: boolean;

  /**
   * @schema AwsSecretsManagerSecretDetails#RotationLambdaArn
   */
  readonly rotationLambdaArn?: string;

  /**
   * @schema AwsSecretsManagerSecretDetails#Deleted
   */
  readonly deleted?: boolean;

  /**
   * @schema AwsSecretsManagerSecretDetails#Name
   */
  readonly name?: string;

  /**
   * @schema AwsSecretsManagerSecretDetails#Description
   */
  readonly description?: string;

}

/**
 * @schema AwsIamAccessKeyDetails
 */
export interface AwsIamAccessKeyDetails {
  /**
   * @schema AwsIamAccessKeyDetails#UserName
   */
  readonly userName?: string;

  /**
   * @schema AwsIamAccessKeyDetails#Status
   */
  readonly status?: string;

  /**
   * @schema AwsIamAccessKeyDetails#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema AwsIamAccessKeyDetails#PrincipalId
   */
  readonly principalId?: string;

  /**
   * @schema AwsIamAccessKeyDetails#PrincipalType
   */
  readonly principalType?: string;

  /**
   * @schema AwsIamAccessKeyDetails#PrincipalName
   */
  readonly principalName?: string;

  /**
   * @schema AwsIamAccessKeyDetails#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema AwsIamAccessKeyDetails#AccessKeyId
   */
  readonly accessKeyId?: string;

  /**
   * @schema AwsIamAccessKeyDetails#SessionContext
   */
  readonly sessionContext?: AwsIamAccessKeySessionContext;

}

/**
 * @schema AwsIamUserDetails
 */
export interface AwsIamUserDetails {
  /**
   * @schema AwsIamUserDetails#AttachedManagedPolicies
   */
  readonly attachedManagedPolicies?: AwsIamAttachedManagedPolicy[];

  /**
   * @schema AwsIamUserDetails#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema AwsIamUserDetails#GroupList
   */
  readonly groupList?: string[];

  /**
   * @schema AwsIamUserDetails#Path
   */
  readonly path?: string;

  /**
   * @schema AwsIamUserDetails#PermissionsBoundary
   */
  readonly permissionsBoundary?: AwsIamPermissionsBoundary;

  /**
   * @schema AwsIamUserDetails#UserId
   */
  readonly userId?: string;

  /**
   * @schema AwsIamUserDetails#UserName
   */
  readonly userName?: string;

  /**
   * @schema AwsIamUserDetails#UserPolicyList
   */
  readonly userPolicyList?: AwsIamUserPolicy[];

}

/**
 * @schema AwsIamPolicyDetails
 */
export interface AwsIamPolicyDetails {
  /**
   * @schema AwsIamPolicyDetails#AttachmentCount
   */
  readonly attachmentCount?: number;

  /**
   * @schema AwsIamPolicyDetails#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema AwsIamPolicyDetails#DefaultVersionId
   */
  readonly defaultVersionId?: string;

  /**
   * @schema AwsIamPolicyDetails#Description
   */
  readonly description?: string;

  /**
   * @schema AwsIamPolicyDetails#IsAttachable
   */
  readonly isAttachable?: boolean;

  /**
   * @schema AwsIamPolicyDetails#Path
   */
  readonly path?: string;

  /**
   * @schema AwsIamPolicyDetails#PermissionsBoundaryUsageCount
   */
  readonly permissionsBoundaryUsageCount?: number;

  /**
   * @schema AwsIamPolicyDetails#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema AwsIamPolicyDetails#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema AwsIamPolicyDetails#PolicyVersionList
   */
  readonly policyVersionList?: AwsIamPolicyVersion[];

  /**
   * @schema AwsIamPolicyDetails#UpdateDate
   */
  readonly updateDate?: string;

}

/**
 * @schema AwsApiGatewayV2StageDetails
 */
export interface AwsApiGatewayV2StageDetails {
  /**
   * @schema AwsApiGatewayV2StageDetails#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema AwsApiGatewayV2StageDetails#Description
   */
  readonly description?: string;

  /**
   * @schema AwsApiGatewayV2StageDetails#DefaultRouteSettings
   */
  readonly defaultRouteSettings?: AwsApiGatewayV2RouteSettings;

  /**
   * @schema AwsApiGatewayV2StageDetails#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema AwsApiGatewayV2StageDetails#LastUpdatedDate
   */
  readonly lastUpdatedDate?: string;

  /**
   * @schema AwsApiGatewayV2StageDetails#RouteSettings
   */
  readonly routeSettings?: AwsApiGatewayV2RouteSettings;

  /**
   * @schema AwsApiGatewayV2StageDetails#StageName
   */
  readonly stageName?: string;

  /**
   * @schema AwsApiGatewayV2StageDetails#StageVariables
   */
  readonly stageVariables?: { [key: string]: string };

  /**
   * @schema AwsApiGatewayV2StageDetails#AccessLogSettings
   */
  readonly accessLogSettings?: AwsApiGatewayAccessLogSettings;

  /**
   * @schema AwsApiGatewayV2StageDetails#AutoDeploy
   */
  readonly autoDeploy?: boolean;

  /**
   * @schema AwsApiGatewayV2StageDetails#LastDeploymentStatusMessage
   */
  readonly lastDeploymentStatusMessage?: string;

  /**
   * @schema AwsApiGatewayV2StageDetails#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

}

/**
 * @schema AwsApiGatewayV2ApiDetails
 */
export interface AwsApiGatewayV2ApiDetails {
  /**
   * @schema AwsApiGatewayV2ApiDetails#ApiEndpoint
   */
  readonly apiEndpoint?: string;

  /**
   * @schema AwsApiGatewayV2ApiDetails#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema AwsApiGatewayV2ApiDetails#ApiKeySelectionExpression
   */
  readonly apiKeySelectionExpression?: string;

  /**
   * @schema AwsApiGatewayV2ApiDetails#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema AwsApiGatewayV2ApiDetails#Description
   */
  readonly description?: string;

  /**
   * @schema AwsApiGatewayV2ApiDetails#Version
   */
  readonly version?: string;

  /**
   * @schema AwsApiGatewayV2ApiDetails#Name
   */
  readonly name?: string;

  /**
   * @schema AwsApiGatewayV2ApiDetails#ProtocolType
   */
  readonly protocolType?: string;

  /**
   * @schema AwsApiGatewayV2ApiDetails#RouteSelectionExpression
   */
  readonly routeSelectionExpression?: string;

  /**
   * @schema AwsApiGatewayV2ApiDetails#CorsConfiguration
   */
  readonly corsConfiguration?: AwsCorsConfiguration;

}

/**
 * @schema AwsDynamoDbTableDetails
 */
export interface AwsDynamoDbTableDetails {
  /**
   * @schema AwsDynamoDbTableDetails#AttributeDefinitions
   */
  readonly attributeDefinitions?: AwsDynamoDbTableAttributeDefinition[];

  /**
   * @schema AwsDynamoDbTableDetails#BillingModeSummary
   */
  readonly billingModeSummary?: AwsDynamoDbTableBillingModeSummary;

  /**
   * @schema AwsDynamoDbTableDetails#CreationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema AwsDynamoDbTableDetails#GlobalSecondaryIndexes
   */
  readonly globalSecondaryIndexes?: AwsDynamoDbTableGlobalSecondaryIndex[];

  /**
   * @schema AwsDynamoDbTableDetails#GlobalTableVersion
   */
  readonly globalTableVersion?: string;

  /**
   * @schema AwsDynamoDbTableDetails#ItemCount
   */
  readonly itemCount?: number;

  /**
   * @schema AwsDynamoDbTableDetails#KeySchema
   */
  readonly keySchema?: AwsDynamoDbTableKeySchema[];

  /**
   * @schema AwsDynamoDbTableDetails#LatestStreamArn
   */
  readonly latestStreamArn?: string;

  /**
   * @schema AwsDynamoDbTableDetails#LatestStreamLabel
   */
  readonly latestStreamLabel?: string;

  /**
   * @schema AwsDynamoDbTableDetails#LocalSecondaryIndexes
   */
  readonly localSecondaryIndexes?: AwsDynamoDbTableLocalSecondaryIndex[];

  /**
   * @schema AwsDynamoDbTableDetails#ProvisionedThroughput
   */
  readonly provisionedThroughput?: AwsDynamoDbTableProvisionedThroughput;

  /**
   * @schema AwsDynamoDbTableDetails#Replicas
   */
  readonly replicas?: AwsDynamoDbTableReplica[];

  /**
   * @schema AwsDynamoDbTableDetails#RestoreSummary
   */
  readonly restoreSummary?: AwsDynamoDbTableRestoreSummary;

  /**
   * @schema AwsDynamoDbTableDetails#SseDescription
   */
  readonly sseDescription?: AwsDynamoDbTableSseDescription;

  /**
   * @schema AwsDynamoDbTableDetails#StreamSpecification
   */
  readonly streamSpecification?: AwsDynamoDbTableStreamSpecification;

  /**
   * @schema AwsDynamoDbTableDetails#TableId
   */
  readonly tableId?: string;

  /**
   * @schema AwsDynamoDbTableDetails#TableName
   */
  readonly tableName?: string;

  /**
   * @schema AwsDynamoDbTableDetails#TableSizeBytes
   */
  readonly tableSizeBytes?: number;

  /**
   * @schema AwsDynamoDbTableDetails#TableStatus
   */
  readonly tableStatus?: string;

}

/**
 * @schema AwsApiGatewayStageDetails
 */
export interface AwsApiGatewayStageDetails {
  /**
   * @schema AwsApiGatewayStageDetails#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema AwsApiGatewayStageDetails#ClientCertificateId
   */
  readonly clientCertificateId?: string;

  /**
   * @schema AwsApiGatewayStageDetails#StageName
   */
  readonly stageName?: string;

  /**
   * @schema AwsApiGatewayStageDetails#Description
   */
  readonly description?: string;

  /**
   * @schema AwsApiGatewayStageDetails#CacheClusterEnabled
   */
  readonly cacheClusterEnabled?: boolean;

  /**
   * @schema AwsApiGatewayStageDetails#CacheClusterSize
   */
  readonly cacheClusterSize?: string;

  /**
   * @schema AwsApiGatewayStageDetails#CacheClusterStatus
   */
  readonly cacheClusterStatus?: string;

  /**
   * @schema AwsApiGatewayStageDetails#MethodSettings
   */
  readonly methodSettings?: AwsApiGatewayMethodSettings[];

  /**
   * @schema AwsApiGatewayStageDetails#Variables
   */
  readonly variables?: { [key: string]: string };

  /**
   * @schema AwsApiGatewayStageDetails#DocumentationVersion
   */
  readonly documentationVersion?: string;

  /**
   * @schema AwsApiGatewayStageDetails#AccessLogSettings
   */
  readonly accessLogSettings?: AwsApiGatewayAccessLogSettings;

  /**
   * @schema AwsApiGatewayStageDetails#CanarySettings
   */
  readonly canarySettings?: AwsApiGatewayCanarySettings;

  /**
   * @schema AwsApiGatewayStageDetails#TracingEnabled
   */
  readonly tracingEnabled?: boolean;

  /**
   * @schema AwsApiGatewayStageDetails#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema AwsApiGatewayStageDetails#LastUpdatedDate
   */
  readonly lastUpdatedDate?: string;

  /**
   * @schema AwsApiGatewayStageDetails#WebAclArn
   */
  readonly webAclArn?: string;

}

/**
 * @schema AwsApiGatewayRestApiDetails
 */
export interface AwsApiGatewayRestApiDetails {
  /**
   * @schema AwsApiGatewayRestApiDetails#Id
   */
  readonly id?: string;

  /**
   * @schema AwsApiGatewayRestApiDetails#Name
   */
  readonly name?: string;

  /**
   * @schema AwsApiGatewayRestApiDetails#Description
   */
  readonly description?: string;

  /**
   * @schema AwsApiGatewayRestApiDetails#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema AwsApiGatewayRestApiDetails#Version
   */
  readonly version?: string;

  /**
   * @schema AwsApiGatewayRestApiDetails#BinaryMediaTypes
   */
  readonly binaryMediaTypes?: string[];

  /**
   * @schema AwsApiGatewayRestApiDetails#MinimumCompressionSize
   */
  readonly minimumCompressionSize?: number;

  /**
   * @schema AwsApiGatewayRestApiDetails#ApiKeySource
   */
  readonly apiKeySource?: string;

  /**
   * @schema AwsApiGatewayRestApiDetails#EndpointConfiguration
   */
  readonly endpointConfiguration?: AwsApiGatewayEndpointConfiguration;

}

/**
 * @schema AwsCloudTrailTrailDetails
 */
export interface AwsCloudTrailTrailDetails {
  /**
   * @schema AwsCloudTrailTrailDetails#CloudWatchLogsLogGroupArn
   */
  readonly cloudWatchLogsLogGroupArn?: string;

  /**
   * @schema AwsCloudTrailTrailDetails#CloudWatchLogsRoleArn
   */
  readonly cloudWatchLogsRoleArn?: string;

  /**
   * @schema AwsCloudTrailTrailDetails#HasCustomEventSelectors
   */
  readonly hasCustomEventSelectors?: boolean;

  /**
   * @schema AwsCloudTrailTrailDetails#HomeRegion
   */
  readonly homeRegion?: string;

  /**
   * @schema AwsCloudTrailTrailDetails#IncludeGlobalServiceEvents
   */
  readonly includeGlobalServiceEvents?: boolean;

  /**
   * @schema AwsCloudTrailTrailDetails#IsMultiRegionTrail
   */
  readonly isMultiRegionTrail?: boolean;

  /**
   * @schema AwsCloudTrailTrailDetails#IsOrganizationTrail
   */
  readonly isOrganizationTrail?: boolean;

  /**
   * @schema AwsCloudTrailTrailDetails#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema AwsCloudTrailTrailDetails#LogFileValidationEnabled
   */
  readonly logFileValidationEnabled?: boolean;

  /**
   * @schema AwsCloudTrailTrailDetails#Name
   */
  readonly name?: string;

  /**
   * @schema AwsCloudTrailTrailDetails#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema AwsCloudTrailTrailDetails#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

  /**
   * @schema AwsCloudTrailTrailDetails#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema AwsCloudTrailTrailDetails#SnsTopicName
   */
  readonly snsTopicName?: string;

  /**
   * @schema AwsCloudTrailTrailDetails#TrailArn
   */
  readonly trailArn?: string;

}

/**
 * @schema AwsCertificateManagerCertificateDetails
 */
export interface AwsCertificateManagerCertificateDetails {
  /**
   * @schema AwsCertificateManagerCertificateDetails#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

  /**
   * @schema AwsCertificateManagerCertificateDetails#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema AwsCertificateManagerCertificateDetails#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema AwsCertificateManagerCertificateDetails#DomainValidationOptions
   */
  readonly domainValidationOptions?: AwsCertificateManagerCertificateDomainValidationOption[];

  /**
   * @schema AwsCertificateManagerCertificateDetails#ExtendedKeyUsages
   */
  readonly extendedKeyUsages?: AwsCertificateManagerCertificateExtendedKeyUsage[];

  /**
   * @schema AwsCertificateManagerCertificateDetails#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema AwsCertificateManagerCertificateDetails#ImportedAt
   */
  readonly importedAt?: string;

  /**
   * @schema AwsCertificateManagerCertificateDetails#InUseBy
   */
  readonly inUseBy?: string[];

  /**
   * @schema AwsCertificateManagerCertificateDetails#IssuedAt
   */
  readonly issuedAt?: string;

  /**
   * @schema AwsCertificateManagerCertificateDetails#Issuer
   */
  readonly issuer?: string;

  /**
   * @schema AwsCertificateManagerCertificateDetails#KeyAlgorithm
   */
  readonly keyAlgorithm?: string;

  /**
   * @schema AwsCertificateManagerCertificateDetails#KeyUsages
   */
  readonly keyUsages?: AwsCertificateManagerCertificateKeyUsage[];

  /**
   * @schema AwsCertificateManagerCertificateDetails#NotAfter
   */
  readonly notAfter?: string;

  /**
   * @schema AwsCertificateManagerCertificateDetails#NotBefore
   */
  readonly notBefore?: string;

  /**
   * @schema AwsCertificateManagerCertificateDetails#Options
   */
  readonly options?: AwsCertificateManagerCertificateOptions;

  /**
   * @schema AwsCertificateManagerCertificateDetails#RenewalEligibility
   */
  readonly renewalEligibility?: string;

  /**
   * @schema AwsCertificateManagerCertificateDetails#RenewalSummary
   */
  readonly renewalSummary?: AwsCertificateManagerCertificateRenewalSummary;

  /**
   * @schema AwsCertificateManagerCertificateDetails#Serial
   */
  readonly serial?: string;

  /**
   * @schema AwsCertificateManagerCertificateDetails#SignatureAlgorithm
   */
  readonly signatureAlgorithm?: string;

  /**
   * @schema AwsCertificateManagerCertificateDetails#Status
   */
  readonly status?: string;

  /**
   * @schema AwsCertificateManagerCertificateDetails#Subject
   */
  readonly subject?: string;

  /**
   * @schema AwsCertificateManagerCertificateDetails#SubjectAlternativeNames
   */
  readonly subjectAlternativeNames?: string[];

  /**
   * @schema AwsCertificateManagerCertificateDetails#Type
   */
  readonly type?: string;

}

/**
 * @schema AwsRedshiftClusterDetails
 */
export interface AwsRedshiftClusterDetails {
  /**
   * @schema AwsRedshiftClusterDetails#AllowVersionUpgrade
   */
  readonly allowVersionUpgrade?: boolean;

  /**
   * @schema AwsRedshiftClusterDetails#AutomatedSnapshotRetentionPeriod
   */
  readonly automatedSnapshotRetentionPeriod?: number;

  /**
   * @schema AwsRedshiftClusterDetails#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema AwsRedshiftClusterDetails#ClusterAvailabilityStatus
   */
  readonly clusterAvailabilityStatus?: string;

  /**
   * @schema AwsRedshiftClusterDetails#ClusterCreateTime
   */
  readonly clusterCreateTime?: string;

  /**
   * @schema AwsRedshiftClusterDetails#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema AwsRedshiftClusterDetails#ClusterNodes
   */
  readonly clusterNodes?: AwsRedshiftClusterClusterNode[];

  /**
   * @schema AwsRedshiftClusterDetails#ClusterParameterGroups
   */
  readonly clusterParameterGroups?: AwsRedshiftClusterClusterParameterGroup[];

  /**
   * @schema AwsRedshiftClusterDetails#ClusterPublicKey
   */
  readonly clusterPublicKey?: string;

  /**
   * @schema AwsRedshiftClusterDetails#ClusterRevisionNumber
   */
  readonly clusterRevisionNumber?: string;

  /**
   * @schema AwsRedshiftClusterDetails#ClusterSecurityGroups
   */
  readonly clusterSecurityGroups?: AwsRedshiftClusterClusterSecurityGroup[];

  /**
   * @schema AwsRedshiftClusterDetails#ClusterSnapshotCopyStatus
   */
  readonly clusterSnapshotCopyStatus?: AwsRedshiftClusterClusterSnapshotCopyStatus;

  /**
   * @schema AwsRedshiftClusterDetails#ClusterStatus
   */
  readonly clusterStatus?: string;

  /**
   * @schema AwsRedshiftClusterDetails#ClusterSubnetGroupName
   */
  readonly clusterSubnetGroupName?: string;

  /**
   * @schema AwsRedshiftClusterDetails#ClusterVersion
   */
  readonly clusterVersion?: string;

  /**
   * @schema AwsRedshiftClusterDetails#DBName
   */
  readonly dbName?: string;

  /**
   * @schema AwsRedshiftClusterDetails#DeferredMaintenanceWindows
   */
  readonly deferredMaintenanceWindows?: AwsRedshiftClusterDeferredMaintenanceWindow[];

  /**
   * @schema AwsRedshiftClusterDetails#ElasticIpStatus
   */
  readonly elasticIpStatus?: AwsRedshiftClusterElasticIpStatus;

  /**
   * @schema AwsRedshiftClusterDetails#ElasticResizeNumberOfNodeOptions
   */
  readonly elasticResizeNumberOfNodeOptions?: string;

  /**
   * @schema AwsRedshiftClusterDetails#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema AwsRedshiftClusterDetails#Endpoint
   */
  readonly endpoint?: AwsRedshiftClusterEndpoint;

  /**
   * @schema AwsRedshiftClusterDetails#EnhancedVpcRouting
   */
  readonly enhancedVpcRouting?: boolean;

  /**
   * @schema AwsRedshiftClusterDetails#ExpectedNextSnapshotScheduleTime
   */
  readonly expectedNextSnapshotScheduleTime?: string;

  /**
   * @schema AwsRedshiftClusterDetails#ExpectedNextSnapshotScheduleTimeStatus
   */
  readonly expectedNextSnapshotScheduleTimeStatus?: string;

  /**
   * @schema AwsRedshiftClusterDetails#HsmStatus
   */
  readonly hsmStatus?: AwsRedshiftClusterHsmStatus;

  /**
   * @schema AwsRedshiftClusterDetails#IamRoles
   */
  readonly iamRoles?: AwsRedshiftClusterIamRole[];

  /**
   * @schema AwsRedshiftClusterDetails#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema AwsRedshiftClusterDetails#MaintenanceTrackName
   */
  readonly maintenanceTrackName?: string;

  /**
   * @schema AwsRedshiftClusterDetails#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

  /**
   * @schema AwsRedshiftClusterDetails#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema AwsRedshiftClusterDetails#NextMaintenanceWindowStartTime
   */
  readonly nextMaintenanceWindowStartTime?: string;

  /**
   * @schema AwsRedshiftClusterDetails#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema AwsRedshiftClusterDetails#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema AwsRedshiftClusterDetails#PendingActions
   */
  readonly pendingActions?: string[];

  /**
   * @schema AwsRedshiftClusterDetails#PendingModifiedValues
   */
  readonly pendingModifiedValues?: AwsRedshiftClusterPendingModifiedValues;

  /**
   * @schema AwsRedshiftClusterDetails#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema AwsRedshiftClusterDetails#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema AwsRedshiftClusterDetails#ResizeInfo
   */
  readonly resizeInfo?: AwsRedshiftClusterResizeInfo;

  /**
   * @schema AwsRedshiftClusterDetails#RestoreStatus
   */
  readonly restoreStatus?: AwsRedshiftClusterRestoreStatus;

  /**
   * @schema AwsRedshiftClusterDetails#SnapshotScheduleIdentifier
   */
  readonly snapshotScheduleIdentifier?: string;

  /**
   * @schema AwsRedshiftClusterDetails#SnapshotScheduleState
   */
  readonly snapshotScheduleState?: string;

  /**
   * @schema AwsRedshiftClusterDetails#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema AwsRedshiftClusterDetails#VpcSecurityGroups
   */
  readonly vpcSecurityGroups?: AwsRedshiftClusterVpcSecurityGroup[];

}

/**
 * @schema AwsElbLoadBalancerDetails
 */
export interface AwsElbLoadBalancerDetails {
  /**
   * @schema AwsElbLoadBalancerDetails#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema AwsElbLoadBalancerDetails#BackendServerDescriptions
   */
  readonly backendServerDescriptions?: AwsElbLoadBalancerBackendServerDescription[];

  /**
   * @schema AwsElbLoadBalancerDetails#CanonicalHostedZoneName
   */
  readonly canonicalHostedZoneName?: string;

  /**
   * @schema AwsElbLoadBalancerDetails#CanonicalHostedZoneNameID
   */
  readonly canonicalHostedZoneNameId?: string;

  /**
   * @schema AwsElbLoadBalancerDetails#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema AwsElbLoadBalancerDetails#DnsName
   */
  readonly dnsName?: string;

  /**
   * @schema AwsElbLoadBalancerDetails#HealthCheck
   */
  readonly healthCheck?: AwsElbLoadBalancerHealthCheck;

  /**
   * @schema AwsElbLoadBalancerDetails#Instances
   */
  readonly instances?: AwsElbLoadBalancerInstance[];

  /**
   * @schema AwsElbLoadBalancerDetails#ListenerDescriptions
   */
  readonly listenerDescriptions?: AwsElbLoadBalancerListenerDescription[];

  /**
   * @schema AwsElbLoadBalancerDetails#LoadBalancerAttributes
   */
  readonly loadBalancerAttributes?: AwsElbLoadBalancerAttributes;

  /**
   * @schema AwsElbLoadBalancerDetails#LoadBalancerName
   */
  readonly loadBalancerName?: string;

  /**
   * @schema AwsElbLoadBalancerDetails#Policies
   */
  readonly policies?: AwsElbLoadBalancerPolicies;

  /**
   * @schema AwsElbLoadBalancerDetails#Scheme
   */
  readonly scheme?: string;

  /**
   * @schema AwsElbLoadBalancerDetails#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema AwsElbLoadBalancerDetails#SourceSecurityGroup
   */
  readonly sourceSecurityGroup?: AwsElbLoadBalancerSourceSecurityGroup;

  /**
   * @schema AwsElbLoadBalancerDetails#Subnets
   */
  readonly subnets?: string[];

  /**
   * @schema AwsElbLoadBalancerDetails#VpcId
   */
  readonly vpcId?: string;

}

/**
 * @schema AwsIamGroupDetails
 */
export interface AwsIamGroupDetails {
  /**
   * @schema AwsIamGroupDetails#AttachedManagedPolicies
   */
  readonly attachedManagedPolicies?: AwsIamAttachedManagedPolicy[];

  /**
   * @schema AwsIamGroupDetails#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema AwsIamGroupDetails#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema AwsIamGroupDetails#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema AwsIamGroupDetails#GroupPolicyList
   */
  readonly groupPolicyList?: AwsIamGroupPolicy[];

  /**
   * @schema AwsIamGroupDetails#Path
   */
  readonly path?: string;

}

/**
 * @schema AwsIamRoleDetails
 */
export interface AwsIamRoleDetails {
  /**
   * @schema AwsIamRoleDetails#AssumeRolePolicyDocument
   */
  readonly assumeRolePolicyDocument?: string;

  /**
   * @schema AwsIamRoleDetails#AttachedManagedPolicies
   */
  readonly attachedManagedPolicies?: AwsIamAttachedManagedPolicy[];

  /**
   * @schema AwsIamRoleDetails#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema AwsIamRoleDetails#InstanceProfileList
   */
  readonly instanceProfileList?: AwsIamInstanceProfile[];

  /**
   * @schema AwsIamRoleDetails#PermissionsBoundary
   */
  readonly permissionsBoundary?: AwsIamPermissionsBoundary;

  /**
   * @schema AwsIamRoleDetails#RoleId
   */
  readonly roleId?: string;

  /**
   * @schema AwsIamRoleDetails#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema AwsIamRoleDetails#RolePolicyList
   */
  readonly rolePolicyList?: AwsIamRolePolicy[];

  /**
   * @schema AwsIamRoleDetails#MaxSessionDuration
   */
  readonly maxSessionDuration?: number;

  /**
   * @schema AwsIamRoleDetails#Path
   */
  readonly path?: string;

}

/**
 * @schema AwsKmsKeyDetails
 */
export interface AwsKmsKeyDetails {
  /**
   * @schema AwsKmsKeyDetails#AWSAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema AwsKmsKeyDetails#CreationDate
   */
  readonly creationDate?: number;

  /**
   * @schema AwsKmsKeyDetails#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema AwsKmsKeyDetails#KeyManager
   */
  readonly keyManager?: string;

  /**
   * @schema AwsKmsKeyDetails#KeyState
   */
  readonly keyState?: string;

  /**
   * @schema AwsKmsKeyDetails#Origin
   */
  readonly origin?: string;

  /**
   * @schema AwsKmsKeyDetails#Description
   */
  readonly description?: string;

}

/**
 * @schema AwsLambdaFunctionDetails
 */
export interface AwsLambdaFunctionDetails {
  /**
   * @schema AwsLambdaFunctionDetails#Code
   */
  readonly code?: AwsLambdaFunctionCode;

  /**
   * @schema AwsLambdaFunctionDetails#CodeSha256
   */
  readonly codeSha256?: string;

  /**
   * @schema AwsLambdaFunctionDetails#DeadLetterConfig
   */
  readonly deadLetterConfig?: AwsLambdaFunctionDeadLetterConfig;

  /**
   * @schema AwsLambdaFunctionDetails#Environment
   */
  readonly environment?: AwsLambdaFunctionEnvironment;

  /**
   * @schema AwsLambdaFunctionDetails#FunctionName
   */
  readonly functionName?: string;

  /**
   * @schema AwsLambdaFunctionDetails#Handler
   */
  readonly handler?: string;

  /**
   * @schema AwsLambdaFunctionDetails#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema AwsLambdaFunctionDetails#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema AwsLambdaFunctionDetails#Layers
   */
  readonly layers?: AwsLambdaFunctionLayer[];

  /**
   * @schema AwsLambdaFunctionDetails#MasterArn
   */
  readonly masterArn?: string;

  /**
   * @schema AwsLambdaFunctionDetails#MemorySize
   */
  readonly memorySize?: number;

  /**
   * @schema AwsLambdaFunctionDetails#RevisionId
   */
  readonly revisionId?: string;

  /**
   * @schema AwsLambdaFunctionDetails#Role
   */
  readonly role?: string;

  /**
   * @schema AwsLambdaFunctionDetails#Runtime
   */
  readonly runtime?: string;

  /**
   * @schema AwsLambdaFunctionDetails#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema AwsLambdaFunctionDetails#TracingConfig
   */
  readonly tracingConfig?: AwsLambdaFunctionTracingConfig;

  /**
   * @schema AwsLambdaFunctionDetails#VpcConfig
   */
  readonly vpcConfig?: AwsLambdaFunctionVpcConfig;

  /**
   * @schema AwsLambdaFunctionDetails#Version
   */
  readonly version?: string;

}

/**
 * @schema AwsLambdaLayerVersionDetails
 */
export interface AwsLambdaLayerVersionDetails {
  /**
   * @schema AwsLambdaLayerVersionDetails#Version
   */
  readonly version?: number;

  /**
   * @schema AwsLambdaLayerVersionDetails#CompatibleRuntimes
   */
  readonly compatibleRuntimes?: string[];

  /**
   * @schema AwsLambdaLayerVersionDetails#CreatedDate
   */
  readonly createdDate?: string;

}

/**
 * @schema AwsRdsDbInstanceDetails
 */
export interface AwsRdsDbInstanceDetails {
  /**
   * @schema AwsRdsDbInstanceDetails#AssociatedRoles
   */
  readonly associatedRoles?: AwsRdsDbInstanceAssociatedRole[];

  /**
   * @schema AwsRdsDbInstanceDetails#CACertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

  /**
   * @schema AwsRdsDbInstanceDetails#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema AwsRdsDbInstanceDetails#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema AwsRdsDbInstanceDetails#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema AwsRdsDbInstanceDetails#DbInstancePort
   */
  readonly dbInstancePort?: number;

  /**
   * @schema AwsRdsDbInstanceDetails#DbiResourceId
   */
  readonly dbiResourceId?: string;

  /**
   * @schema AwsRdsDbInstanceDetails#DBName
   */
  readonly dbName?: string;

  /**
   * @schema AwsRdsDbInstanceDetails#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema AwsRdsDbInstanceDetails#Endpoint
   */
  readonly endpoint?: AwsRdsDbInstanceEndpoint;

  /**
   * @schema AwsRdsDbInstanceDetails#Engine
   */
  readonly engine?: string;

  /**
   * @schema AwsRdsDbInstanceDetails#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema AwsRdsDbInstanceDetails#IAMDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

  /**
   * @schema AwsRdsDbInstanceDetails#InstanceCreateTime
   */
  readonly instanceCreateTime?: string;

  /**
   * @schema AwsRdsDbInstanceDetails#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema AwsRdsDbInstanceDetails#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema AwsRdsDbInstanceDetails#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema AwsRdsDbInstanceDetails#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema AwsRdsDbInstanceDetails#VpcSecurityGroups
   */
  readonly vpcSecurityGroups?: AwsRdsDbInstanceVpcSecurityGroup[];

  /**
   * @schema AwsRdsDbInstanceDetails#MultiAz
   */
  readonly multiAz?: boolean;

  /**
   * @schema AwsRdsDbInstanceDetails#EnhancedMonitoringResourceArn
   */
  readonly enhancedMonitoringResourceArn?: string;

  /**
   * @schema AwsRdsDbInstanceDetails#DbInstanceStatus
   */
  readonly dbInstanceStatus?: string;

  /**
   * @schema AwsRdsDbInstanceDetails#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema AwsRdsDbInstanceDetails#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema AwsRdsDbInstanceDetails#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema AwsRdsDbInstanceDetails#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema AwsRdsDbInstanceDetails#DbSecurityGroups
   */
  readonly dbSecurityGroups?: string[];

  /**
   * @schema AwsRdsDbInstanceDetails#DbParameterGroups
   */
  readonly dbParameterGroups?: AwsRdsDbParameterGroup[];

  /**
   * @schema AwsRdsDbInstanceDetails#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema AwsRdsDbInstanceDetails#DbSubnetGroup
   */
  readonly dbSubnetGroup?: AwsRdsDbSubnetGroup;

  /**
   * @schema AwsRdsDbInstanceDetails#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema AwsRdsDbInstanceDetails#PendingModifiedValues
   */
  readonly pendingModifiedValues?: AwsRdsDbPendingModifiedValues;

  /**
   * @schema AwsRdsDbInstanceDetails#LatestRestorableTime
   */
  readonly latestRestorableTime?: string;

  /**
   * @schema AwsRdsDbInstanceDetails#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema AwsRdsDbInstanceDetails#ReadReplicaSourceDBInstanceIdentifier
   */
  readonly readReplicaSourceDbInstanceIdentifier?: string;

  /**
   * @schema AwsRdsDbInstanceDetails#ReadReplicaDBInstanceIdentifiers
   */
  readonly readReplicaDbInstanceIdentifiers?: string[];

  /**
   * @schema AwsRdsDbInstanceDetails#ReadReplicaDBClusterIdentifiers
   */
  readonly readReplicaDbClusterIdentifiers?: string[];

  /**
   * @schema AwsRdsDbInstanceDetails#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema AwsRdsDbInstanceDetails#Iops
   */
  readonly iops?: number;

  /**
   * @schema AwsRdsDbInstanceDetails#OptionGroupMemberships
   */
  readonly optionGroupMemberships?: AwsRdsDbOptionGroupMembership[];

  /**
   * @schema AwsRdsDbInstanceDetails#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema AwsRdsDbInstanceDetails#SecondaryAvailabilityZone
   */
  readonly secondaryAvailabilityZone?: string;

  /**
   * @schema AwsRdsDbInstanceDetails#StatusInfos
   */
  readonly statusInfos?: AwsRdsDbStatusInfo[];

  /**
   * @schema AwsRdsDbInstanceDetails#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema AwsRdsDbInstanceDetails#DomainMemberships
   */
  readonly domainMemberships?: AwsRdsDbDomainMembership[];

  /**
   * @schema AwsRdsDbInstanceDetails#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema AwsRdsDbInstanceDetails#MonitoringInterval
   */
  readonly monitoringInterval?: number;

  /**
   * @schema AwsRdsDbInstanceDetails#MonitoringRoleArn
   */
  readonly monitoringRoleArn?: string;

  /**
   * @schema AwsRdsDbInstanceDetails#PromotionTier
   */
  readonly promotionTier?: number;

  /**
   * @schema AwsRdsDbInstanceDetails#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema AwsRdsDbInstanceDetails#PerformanceInsightsEnabled
   */
  readonly performanceInsightsEnabled?: boolean;

  /**
   * @schema AwsRdsDbInstanceDetails#PerformanceInsightsKmsKeyId
   */
  readonly performanceInsightsKmsKeyId?: string;

  /**
   * @schema AwsRdsDbInstanceDetails#PerformanceInsightsRetentionPeriod
   */
  readonly performanceInsightsRetentionPeriod?: number;

  /**
   * @schema AwsRdsDbInstanceDetails#EnabledCloudWatchLogsExports
   */
  readonly enabledCloudWatchLogsExports?: string[];

  /**
   * @schema AwsRdsDbInstanceDetails#ProcessorFeatures
   */
  readonly processorFeatures?: AwsRdsDbProcessorFeature[];

  /**
   * @schema AwsRdsDbInstanceDetails#ListenerEndpoint
   */
  readonly listenerEndpoint?: AwsRdsDbInstanceEndpoint;

  /**
   * @schema AwsRdsDbInstanceDetails#MaxAllocatedStorage
   */
  readonly maxAllocatedStorage?: number;

}

/**
 * @schema AwsSnsTopicDetails
 */
export interface AwsSnsTopicDetails {
  /**
   * @schema AwsSnsTopicDetails#KmsMasterKeyId
   */
  readonly kmsMasterKeyId?: string;

  /**
   * @schema AwsSnsTopicDetails#Subscription
   */
  readonly subscription?: AwsSnsTopicSubscription[];

  /**
   * @schema AwsSnsTopicDetails#TopicName
   */
  readonly topicName?: string;

  /**
   * @schema AwsSnsTopicDetails#Owner
   */
  readonly owner?: string;

}

/**
 * @schema AwsSqsQueueDetails
 */
export interface AwsSqsQueueDetails {
  /**
   * @schema AwsSqsQueueDetails#KmsDataKeyReusePeriodSeconds
   */
  readonly kmsDataKeyReusePeriodSeconds?: number;

  /**
   * @schema AwsSqsQueueDetails#KmsMasterKeyId
   */
  readonly kmsMasterKeyId?: string;

  /**
   * @schema AwsSqsQueueDetails#QueueName
   */
  readonly queueName?: string;

  /**
   * @schema AwsSqsQueueDetails#DeadLetterTargetArn
   */
  readonly deadLetterTargetArn?: string;

}

/**
 * @schema AwsWafWebAclDetails
 */
export interface AwsWafWebAclDetails {
  /**
   * @schema AwsWafWebAclDetails#Name
   */
  readonly name?: string;

  /**
   * @schema AwsWafWebAclDetails#DefaultAction
   */
  readonly defaultAction?: string;

  /**
   * @schema AwsWafWebAclDetails#Rules
   */
  readonly rules?: AwsWafWebAclRule[];

  /**
   * @schema AwsWafWebAclDetails#WebAclId
   */
  readonly webAclId?: string;

}

/**
 * @schema AwsRdsDbSnapshotDetails
 */
export interface AwsRdsDbSnapshotDetails {
  /**
   * @schema AwsRdsDbSnapshotDetails#DbSnapshotIdentifier
   */
  readonly dbSnapshotIdentifier?: string;

  /**
   * @schema AwsRdsDbSnapshotDetails#DbInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema AwsRdsDbSnapshotDetails#SnapshotCreateTime
   */
  readonly snapshotCreateTime?: string;

  /**
   * @schema AwsRdsDbSnapshotDetails#Engine
   */
  readonly engine?: string;

  /**
   * @schema AwsRdsDbSnapshotDetails#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema AwsRdsDbSnapshotDetails#Status
   */
  readonly status?: string;

  /**
   * @schema AwsRdsDbSnapshotDetails#Port
   */
  readonly port?: number;

  /**
   * @schema AwsRdsDbSnapshotDetails#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema AwsRdsDbSnapshotDetails#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema AwsRdsDbSnapshotDetails#InstanceCreateTime
   */
  readonly instanceCreateTime?: string;

  /**
   * @schema AwsRdsDbSnapshotDetails#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema AwsRdsDbSnapshotDetails#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema AwsRdsDbSnapshotDetails#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema AwsRdsDbSnapshotDetails#SnapshotType
   */
  readonly snapshotType?: string;

  /**
   * @schema AwsRdsDbSnapshotDetails#Iops
   */
  readonly iops?: number;

  /**
   * @schema AwsRdsDbSnapshotDetails#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema AwsRdsDbSnapshotDetails#PercentProgress
   */
  readonly percentProgress?: number;

  /**
   * @schema AwsRdsDbSnapshotDetails#SourceRegion
   */
  readonly sourceRegion?: string;

  /**
   * @schema AwsRdsDbSnapshotDetails#SourceDbSnapshotIdentifier
   */
  readonly sourceDbSnapshotIdentifier?: string;

  /**
   * @schema AwsRdsDbSnapshotDetails#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema AwsRdsDbSnapshotDetails#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema AwsRdsDbSnapshotDetails#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema AwsRdsDbSnapshotDetails#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema AwsRdsDbSnapshotDetails#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema AwsRdsDbSnapshotDetails#IamDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

  /**
   * @schema AwsRdsDbSnapshotDetails#ProcessorFeatures
   */
  readonly processorFeatures?: AwsRdsDbProcessorFeature[];

  /**
   * @schema AwsRdsDbSnapshotDetails#DbiResourceId
   */
  readonly dbiResourceId?: string;

}

/**
 * @schema AwsRdsDbClusterSnapshotDetails
 */
export interface AwsRdsDbClusterSnapshotDetails {
  /**
   * @schema AwsRdsDbClusterSnapshotDetails#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema AwsRdsDbClusterSnapshotDetails#SnapshotCreateTime
   */
  readonly snapshotCreateTime?: string;

  /**
   * @schema AwsRdsDbClusterSnapshotDetails#Engine
   */
  readonly engine?: string;

  /**
   * @schema AwsRdsDbClusterSnapshotDetails#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema AwsRdsDbClusterSnapshotDetails#Status
   */
  readonly status?: string;

  /**
   * @schema AwsRdsDbClusterSnapshotDetails#Port
   */
  readonly port?: number;

  /**
   * @schema AwsRdsDbClusterSnapshotDetails#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema AwsRdsDbClusterSnapshotDetails#ClusterCreateTime
   */
  readonly clusterCreateTime?: string;

  /**
   * @schema AwsRdsDbClusterSnapshotDetails#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema AwsRdsDbClusterSnapshotDetails#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema AwsRdsDbClusterSnapshotDetails#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema AwsRdsDbClusterSnapshotDetails#SnapshotType
   */
  readonly snapshotType?: string;

  /**
   * @schema AwsRdsDbClusterSnapshotDetails#PercentProgress
   */
  readonly percentProgress?: number;

  /**
   * @schema AwsRdsDbClusterSnapshotDetails#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema AwsRdsDbClusterSnapshotDetails#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema AwsRdsDbClusterSnapshotDetails#DbClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema AwsRdsDbClusterSnapshotDetails#DbClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

  /**
   * @schema AwsRdsDbClusterSnapshotDetails#IamDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

}

/**
 * @schema AwsRdsDbClusterDetails
 */
export interface AwsRdsDbClusterDetails {
  /**
   * @schema AwsRdsDbClusterDetails#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema AwsRdsDbClusterDetails#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema AwsRdsDbClusterDetails#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema AwsRdsDbClusterDetails#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema AwsRdsDbClusterDetails#Status
   */
  readonly status?: string;

  /**
   * @schema AwsRdsDbClusterDetails#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema AwsRdsDbClusterDetails#ReaderEndpoint
   */
  readonly readerEndpoint?: string;

  /**
   * @schema AwsRdsDbClusterDetails#CustomEndpoints
   */
  readonly customEndpoints?: string[];

  /**
   * @schema AwsRdsDbClusterDetails#MultiAz
   */
  readonly multiAz?: boolean;

  /**
   * @schema AwsRdsDbClusterDetails#Engine
   */
  readonly engine?: string;

  /**
   * @schema AwsRdsDbClusterDetails#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema AwsRdsDbClusterDetails#Port
   */
  readonly port?: number;

  /**
   * @schema AwsRdsDbClusterDetails#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema AwsRdsDbClusterDetails#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema AwsRdsDbClusterDetails#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema AwsRdsDbClusterDetails#ReadReplicaIdentifiers
   */
  readonly readReplicaIdentifiers?: string[];

  /**
   * @schema AwsRdsDbClusterDetails#VpcSecurityGroups
   */
  readonly vpcSecurityGroups?: AwsRdsDbInstanceVpcSecurityGroup[];

  /**
   * @schema AwsRdsDbClusterDetails#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema AwsRdsDbClusterDetails#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema AwsRdsDbClusterDetails#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema AwsRdsDbClusterDetails#DbClusterResourceId
   */
  readonly dbClusterResourceId?: string;

  /**
   * @schema AwsRdsDbClusterDetails#AssociatedRoles
   */
  readonly associatedRoles?: AwsRdsDbClusterAssociatedRole[];

  /**
   * @schema AwsRdsDbClusterDetails#ClusterCreateTime
   */
  readonly clusterCreateTime?: string;

  /**
   * @schema AwsRdsDbClusterDetails#EnabledCloudWatchLogsExports
   */
  readonly enabledCloudWatchLogsExports?: string[];

  /**
   * @schema AwsRdsDbClusterDetails#EngineMode
   */
  readonly engineMode?: string;

  /**
   * @schema AwsRdsDbClusterDetails#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema AwsRdsDbClusterDetails#HttpEndpointEnabled
   */
  readonly httpEndpointEnabled?: boolean;

  /**
   * @schema AwsRdsDbClusterDetails#ActivityStreamStatus
   */
  readonly activityStreamStatus?: string;

  /**
   * @schema AwsRdsDbClusterDetails#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema AwsRdsDbClusterDetails#CrossAccountClone
   */
  readonly crossAccountClone?: boolean;

  /**
   * @schema AwsRdsDbClusterDetails#DomainMemberships
   */
  readonly domainMemberships?: AwsRdsDbDomainMembership[];

  /**
   * @schema AwsRdsDbClusterDetails#DbClusterParameterGroup
   */
  readonly dbClusterParameterGroup?: string;

  /**
   * @schema AwsRdsDbClusterDetails#DbSubnetGroup
   */
  readonly dbSubnetGroup?: string;

  /**
   * @schema AwsRdsDbClusterDetails#DbClusterOptionGroupMemberships
   */
  readonly dbClusterOptionGroupMemberships?: AwsRdsDbClusterOptionGroupMembership[];

  /**
   * @schema AwsRdsDbClusterDetails#DbClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema AwsRdsDbClusterDetails#DbClusterMembers
   */
  readonly dbClusterMembers?: AwsRdsDbClusterMember[];

  /**
   * @schema AwsRdsDbClusterDetails#IamDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

}

/**
 * @schema ContainerDetails
 */
export interface ContainerDetails {
  /**
   * @schema ContainerDetails#Name
   */
  readonly name?: string;

  /**
   * @schema ContainerDetails#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema ContainerDetails#ImageName
   */
  readonly imageName?: string;

  /**
   * @schema ContainerDetails#LaunchedAt
   */
  readonly launchedAt?: string;

}

/**
 * @schema AwsCodeBuildProjectEnvironment
 */
export interface AwsCodeBuildProjectEnvironment {
  /**
   * @schema AwsCodeBuildProjectEnvironment#Certificate
   */
  readonly certificate?: string;

  /**
   * @schema AwsCodeBuildProjectEnvironment#ImagePullCredentialsType
   */
  readonly imagePullCredentialsType?: string;

  /**
   * @schema AwsCodeBuildProjectEnvironment#RegistryCredential
   */
  readonly registryCredential?: AwsCodeBuildProjectEnvironmentRegistryCredential;

  /**
   * @schema AwsCodeBuildProjectEnvironment#Type
   */
  readonly type?: string;

}

/**
 * @schema AwsCodeBuildProjectSource
 */
export interface AwsCodeBuildProjectSource {
  /**
   * @schema AwsCodeBuildProjectSource#Type
   */
  readonly type?: string;

  /**
   * @schema AwsCodeBuildProjectSource#Location
   */
  readonly location?: string;

  /**
   * @schema AwsCodeBuildProjectSource#GitCloneDepth
   */
  readonly gitCloneDepth?: number;

  /**
   * @schema AwsCodeBuildProjectSource#InsecureSsl
   */
  readonly insecureSsl?: boolean;

}

/**
 * @schema AwsCodeBuildProjectVpcConfig
 */
export interface AwsCodeBuildProjectVpcConfig {
  /**
   * @schema AwsCodeBuildProjectVpcConfig#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema AwsCodeBuildProjectVpcConfig#Subnets
   */
  readonly subnets?: string[];

  /**
   * @schema AwsCodeBuildProjectVpcConfig#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * @schema AwsCloudFrontDistributionCacheBehaviors
 */
export interface AwsCloudFrontDistributionCacheBehaviors {
  /**
   * @schema AwsCloudFrontDistributionCacheBehaviors#Items
   */
  readonly items?: AwsCloudFrontDistributionCacheBehavior[];

}

/**
 * @schema AwsCloudFrontDistributionDefaultCacheBehavior
 */
export interface AwsCloudFrontDistributionDefaultCacheBehavior {
  /**
   * @schema AwsCloudFrontDistributionDefaultCacheBehavior#ViewerProtocolPolicy
   */
  readonly viewerProtocolPolicy?: string;

}

/**
 * @schema AwsCloudFrontDistributionLogging
 */
export interface AwsCloudFrontDistributionLogging {
  /**
   * @schema AwsCloudFrontDistributionLogging#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema AwsCloudFrontDistributionLogging#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema AwsCloudFrontDistributionLogging#IncludeCookies
   */
  readonly includeCookies?: boolean;

  /**
   * @schema AwsCloudFrontDistributionLogging#Prefix
   */
  readonly prefix?: string;

}

/**
 * @schema AwsCloudFrontDistributionOrigins
 */
export interface AwsCloudFrontDistributionOrigins {
  /**
   * @schema AwsCloudFrontDistributionOrigins#Items
   */
  readonly items?: AwsCloudFrontDistributionOriginItem[];

}

/**
 * @schema AwsCloudFrontDistributionOriginGroups
 */
export interface AwsCloudFrontDistributionOriginGroups {
  /**
   * @schema AwsCloudFrontDistributionOriginGroups#Items
   */
  readonly items?: AwsCloudFrontDistributionOriginGroup[];

}

/**
 * @schema AwsEc2NetworkInterfaceAttachment
 */
export interface AwsEc2NetworkInterfaceAttachment {
  /**
   * @schema AwsEc2NetworkInterfaceAttachment#AttachTime
   */
  readonly attachTime?: string;

  /**
   * @schema AwsEc2NetworkInterfaceAttachment#AttachmentId
   */
  readonly attachmentId?: string;

  /**
   * @schema AwsEc2NetworkInterfaceAttachment#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

  /**
   * @schema AwsEc2NetworkInterfaceAttachment#DeviceIndex
   */
  readonly deviceIndex?: number;

  /**
   * @schema AwsEc2NetworkInterfaceAttachment#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema AwsEc2NetworkInterfaceAttachment#InstanceOwnerId
   */
  readonly instanceOwnerId?: string;

  /**
   * @schema AwsEc2NetworkInterfaceAttachment#Status
   */
  readonly status?: string;

}

/**
 * @schema AwsEc2NetworkInterfaceSecurityGroup
 */
export interface AwsEc2NetworkInterfaceSecurityGroup {
  /**
   * @schema AwsEc2NetworkInterfaceSecurityGroup#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema AwsEc2NetworkInterfaceSecurityGroup#GroupId
   */
  readonly groupId?: string;

}

/**
 * @schema AwsEc2SecurityGroupIpPermission
 */
export interface AwsEc2SecurityGroupIpPermission {
  /**
   * @schema AwsEc2SecurityGroupIpPermission#IpProtocol
   */
  readonly ipProtocol?: string;

  /**
   * @schema AwsEc2SecurityGroupIpPermission#FromPort
   */
  readonly fromPort?: number;

  /**
   * @schema AwsEc2SecurityGroupIpPermission#ToPort
   */
  readonly toPort?: number;

  /**
   * @schema AwsEc2SecurityGroupIpPermission#UserIdGroupPairs
   */
  readonly userIdGroupPairs?: AwsEc2SecurityGroupUserIdGroupPair[];

  /**
   * @schema AwsEc2SecurityGroupIpPermission#IpRanges
   */
  readonly ipRanges?: AwsEc2SecurityGroupIpRange[];

  /**
   * @schema AwsEc2SecurityGroupIpPermission#Ipv6Ranges
   */
  readonly ipv6Ranges?: AwsEc2SecurityGroupIpv6Range[];

  /**
   * @schema AwsEc2SecurityGroupIpPermission#PrefixListIds
   */
  readonly prefixListIds?: AwsEc2SecurityGroupPrefixListId[];

}

/**
 * @schema AwsEc2VolumeAttachment
 */
export interface AwsEc2VolumeAttachment {
  /**
   * @schema AwsEc2VolumeAttachment#AttachTime
   */
  readonly attachTime?: string;

  /**
   * @schema AwsEc2VolumeAttachment#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

  /**
   * @schema AwsEc2VolumeAttachment#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema AwsEc2VolumeAttachment#Status
   */
  readonly status?: string;

}

/**
 * @schema CidrBlockAssociation
 */
export interface CidrBlockAssociation {
  /**
   * @schema CidrBlockAssociation#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema CidrBlockAssociation#CidrBlock
   */
  readonly cidrBlock?: string;

  /**
   * @schema CidrBlockAssociation#CidrBlockState
   */
  readonly cidrBlockState?: string;

}

/**
 * @schema Ipv6CidrBlockAssociation
 */
export interface Ipv6CidrBlockAssociation {
  /**
   * @schema Ipv6CidrBlockAssociation#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema Ipv6CidrBlockAssociation#Ipv6CidrBlock
   */
  readonly ipv6CidrBlock?: string;

  /**
   * @schema Ipv6CidrBlockAssociation#CidrBlockState
   */
  readonly cidrBlockState?: string;

}

/**
 * @schema AvailabilityZone
 */
export interface AvailabilityZone {
  /**
   * @schema AvailabilityZone#ZoneName
   */
  readonly zoneName?: string;

  /**
   * @schema AvailabilityZone#SubnetId
   */
  readonly subnetId?: string;

}

/**
 * @schema LoadBalancerState
 */
export interface LoadBalancerState {
  /**
   * @schema LoadBalancerState#Code
   */
  readonly code?: string;

  /**
   * @schema LoadBalancerState#Reason
   */
  readonly reason?: string;

}

/**
 * @schema AwsElasticsearchDomainDomainEndpointOptions
 */
export interface AwsElasticsearchDomainDomainEndpointOptions {
  /**
   * @schema AwsElasticsearchDomainDomainEndpointOptions#EnforceHTTPS
   */
  readonly enforceHttps?: boolean;

  /**
   * @schema AwsElasticsearchDomainDomainEndpointOptions#TLSSecurityPolicy
   */
  readonly tlsSecurityPolicy?: string;

}

/**
 * @schema AwsElasticsearchDomainEncryptionAtRestOptions
 */
export interface AwsElasticsearchDomainEncryptionAtRestOptions {
  /**
   * @schema AwsElasticsearchDomainEncryptionAtRestOptions#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema AwsElasticsearchDomainEncryptionAtRestOptions#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema AwsElasticsearchDomainNodeToNodeEncryptionOptions
 */
export interface AwsElasticsearchDomainNodeToNodeEncryptionOptions {
  /**
   * @schema AwsElasticsearchDomainNodeToNodeEncryptionOptions#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema AwsElasticsearchDomainVpcOptions
 */
export interface AwsElasticsearchDomainVpcOptions {
  /**
   * @schema AwsElasticsearchDomainVpcOptions#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema AwsElasticsearchDomainVpcOptions#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema AwsElasticsearchDomainVpcOptions#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema AwsElasticsearchDomainVpcOptions#VPCId
   */
  readonly vpcId?: string;

}

/**
 * @schema AwsS3BucketServerSideEncryptionConfiguration
 */
export interface AwsS3BucketServerSideEncryptionConfiguration {
  /**
   * @schema AwsS3BucketServerSideEncryptionConfiguration#Rules
   */
  readonly rules?: AwsS3BucketServerSideEncryptionRule[];

}

/**
 * @schema AwsSecretsManagerSecretRotationRules
 */
export interface AwsSecretsManagerSecretRotationRules {
  /**
   * @schema AwsSecretsManagerSecretRotationRules#AutomaticallyAfterDays
   */
  readonly automaticallyAfterDays?: number;

}

/**
 * @schema AwsIamAccessKeySessionContext
 */
export interface AwsIamAccessKeySessionContext {
  /**
   * @schema AwsIamAccessKeySessionContext#Attributes
   */
  readonly attributes?: AwsIamAccessKeySessionContextAttributes;

  /**
   * @schema AwsIamAccessKeySessionContext#SessionIssuer
   */
  readonly sessionIssuer?: AwsIamAccessKeySessionContextSessionIssuer;

}

/**
 * @schema AwsIamAttachedManagedPolicy
 */
export interface AwsIamAttachedManagedPolicy {
  /**
   * @schema AwsIamAttachedManagedPolicy#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema AwsIamAttachedManagedPolicy#PolicyArn
   */
  readonly policyArn?: string;

}

/**
 * @schema AwsIamPermissionsBoundary
 */
export interface AwsIamPermissionsBoundary {
  /**
   * @schema AwsIamPermissionsBoundary#PermissionsBoundaryArn
   */
  readonly permissionsBoundaryArn?: string;

  /**
   * @schema AwsIamPermissionsBoundary#PermissionsBoundaryType
   */
  readonly permissionsBoundaryType?: string;

}

/**
 * @schema AwsIamUserPolicy
 */
export interface AwsIamUserPolicy {
  /**
   * @schema AwsIamUserPolicy#PolicyName
   */
  readonly policyName?: string;

}

/**
 * @schema AwsIamPolicyVersion
 */
export interface AwsIamPolicyVersion {
  /**
   * @schema AwsIamPolicyVersion#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema AwsIamPolicyVersion#IsDefaultVersion
   */
  readonly isDefaultVersion?: boolean;

  /**
   * @schema AwsIamPolicyVersion#CreateDate
   */
  readonly createDate?: string;

}

/**
 * @schema AwsApiGatewayV2RouteSettings
 */
export interface AwsApiGatewayV2RouteSettings {
  /**
   * @schema AwsApiGatewayV2RouteSettings#DetailedMetricsEnabled
   */
  readonly detailedMetricsEnabled?: boolean;

  /**
   * @schema AwsApiGatewayV2RouteSettings#LoggingLevel
   */
  readonly loggingLevel?: string;

  /**
   * @schema AwsApiGatewayV2RouteSettings#DataTraceEnabled
   */
  readonly dataTraceEnabled?: boolean;

  /**
   * @schema AwsApiGatewayV2RouteSettings#ThrottlingBurstLimit
   */
  readonly throttlingBurstLimit?: number;

  /**
   * @schema AwsApiGatewayV2RouteSettings#ThrottlingRateLimit
   */
  readonly throttlingRateLimit?: number;

}

/**
 * @schema AwsApiGatewayAccessLogSettings
 */
export interface AwsApiGatewayAccessLogSettings {
  /**
   * @schema AwsApiGatewayAccessLogSettings#Format
   */
  readonly format?: string;

  /**
   * @schema AwsApiGatewayAccessLogSettings#DestinationArn
   */
  readonly destinationArn?: string;

}

/**
 * @schema AwsCorsConfiguration
 */
export interface AwsCorsConfiguration {
  /**
   * @schema AwsCorsConfiguration#AllowOrigins
   */
  readonly allowOrigins?: string[];

  /**
   * @schema AwsCorsConfiguration#AllowCredentials
   */
  readonly allowCredentials?: boolean;

  /**
   * @schema AwsCorsConfiguration#ExposeHeaders
   */
  readonly exposeHeaders?: string[];

  /**
   * @schema AwsCorsConfiguration#MaxAge
   */
  readonly maxAge?: number;

  /**
   * @schema AwsCorsConfiguration#AllowMethods
   */
  readonly allowMethods?: string[];

  /**
   * @schema AwsCorsConfiguration#AllowHeaders
   */
  readonly allowHeaders?: string[];

}

/**
 * @schema AwsDynamoDbTableAttributeDefinition
 */
export interface AwsDynamoDbTableAttributeDefinition {
  /**
   * @schema AwsDynamoDbTableAttributeDefinition#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema AwsDynamoDbTableAttributeDefinition#AttributeType
   */
  readonly attributeType?: string;

}

/**
 * @schema AwsDynamoDbTableBillingModeSummary
 */
export interface AwsDynamoDbTableBillingModeSummary {
  /**
   * @schema AwsDynamoDbTableBillingModeSummary#BillingMode
   */
  readonly billingMode?: string;

  /**
   * @schema AwsDynamoDbTableBillingModeSummary#LastUpdateToPayPerRequestDateTime
   */
  readonly lastUpdateToPayPerRequestDateTime?: string;

}

/**
 * @schema AwsDynamoDbTableGlobalSecondaryIndex
 */
export interface AwsDynamoDbTableGlobalSecondaryIndex {
  /**
   * @schema AwsDynamoDbTableGlobalSecondaryIndex#Backfilling
   */
  readonly backfilling?: boolean;

  /**
   * @schema AwsDynamoDbTableGlobalSecondaryIndex#IndexArn
   */
  readonly indexArn?: string;

  /**
   * @schema AwsDynamoDbTableGlobalSecondaryIndex#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema AwsDynamoDbTableGlobalSecondaryIndex#IndexSizeBytes
   */
  readonly indexSizeBytes?: number;

  /**
   * @schema AwsDynamoDbTableGlobalSecondaryIndex#IndexStatus
   */
  readonly indexStatus?: string;

  /**
   * @schema AwsDynamoDbTableGlobalSecondaryIndex#ItemCount
   */
  readonly itemCount?: number;

  /**
   * @schema AwsDynamoDbTableGlobalSecondaryIndex#KeySchema
   */
  readonly keySchema?: AwsDynamoDbTableKeySchema[];

  /**
   * @schema AwsDynamoDbTableGlobalSecondaryIndex#Projection
   */
  readonly projection?: AwsDynamoDbTableProjection;

  /**
   * @schema AwsDynamoDbTableGlobalSecondaryIndex#ProvisionedThroughput
   */
  readonly provisionedThroughput?: AwsDynamoDbTableProvisionedThroughput;

}

/**
 * @schema AwsDynamoDbTableKeySchema
 */
export interface AwsDynamoDbTableKeySchema {
  /**
   * @schema AwsDynamoDbTableKeySchema#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema AwsDynamoDbTableKeySchema#KeyType
   */
  readonly keyType?: string;

}

/**
 * @schema AwsDynamoDbTableLocalSecondaryIndex
 */
export interface AwsDynamoDbTableLocalSecondaryIndex {
  /**
   * @schema AwsDynamoDbTableLocalSecondaryIndex#IndexArn
   */
  readonly indexArn?: string;

  /**
   * @schema AwsDynamoDbTableLocalSecondaryIndex#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema AwsDynamoDbTableLocalSecondaryIndex#KeySchema
   */
  readonly keySchema?: AwsDynamoDbTableKeySchema[];

  /**
   * @schema AwsDynamoDbTableLocalSecondaryIndex#Projection
   */
  readonly projection?: AwsDynamoDbTableProjection;

}

/**
 * @schema AwsDynamoDbTableProvisionedThroughput
 */
export interface AwsDynamoDbTableProvisionedThroughput {
  /**
   * @schema AwsDynamoDbTableProvisionedThroughput#LastDecreaseDateTime
   */
  readonly lastDecreaseDateTime?: string;

  /**
   * @schema AwsDynamoDbTableProvisionedThroughput#LastIncreaseDateTime
   */
  readonly lastIncreaseDateTime?: string;

  /**
   * @schema AwsDynamoDbTableProvisionedThroughput#NumberOfDecreasesToday
   */
  readonly numberOfDecreasesToday?: number;

  /**
   * @schema AwsDynamoDbTableProvisionedThroughput#ReadCapacityUnits
   */
  readonly readCapacityUnits?: number;

  /**
   * @schema AwsDynamoDbTableProvisionedThroughput#WriteCapacityUnits
   */
  readonly writeCapacityUnits?: number;

}

/**
 * @schema AwsDynamoDbTableReplica
 */
export interface AwsDynamoDbTableReplica {
  /**
   * @schema AwsDynamoDbTableReplica#GlobalSecondaryIndexes
   */
  readonly globalSecondaryIndexes?: AwsDynamoDbTableReplicaGlobalSecondaryIndex[];

  /**
   * @schema AwsDynamoDbTableReplica#KmsMasterKeyId
   */
  readonly kmsMasterKeyId?: string;

  /**
   * @schema AwsDynamoDbTableReplica#ProvisionedThroughputOverride
   */
  readonly provisionedThroughputOverride?: AwsDynamoDbTableProvisionedThroughputOverride;

  /**
   * @schema AwsDynamoDbTableReplica#RegionName
   */
  readonly regionName?: string;

  /**
   * @schema AwsDynamoDbTableReplica#ReplicaStatus
   */
  readonly replicaStatus?: string;

  /**
   * @schema AwsDynamoDbTableReplica#ReplicaStatusDescription
   */
  readonly replicaStatusDescription?: string;

}

/**
 * @schema AwsDynamoDbTableRestoreSummary
 */
export interface AwsDynamoDbTableRestoreSummary {
  /**
   * @schema AwsDynamoDbTableRestoreSummary#SourceBackupArn
   */
  readonly sourceBackupArn?: string;

  /**
   * @schema AwsDynamoDbTableRestoreSummary#SourceTableArn
   */
  readonly sourceTableArn?: string;

  /**
   * @schema AwsDynamoDbTableRestoreSummary#RestoreDateTime
   */
  readonly restoreDateTime?: string;

  /**
   * @schema AwsDynamoDbTableRestoreSummary#RestoreInProgress
   */
  readonly restoreInProgress?: boolean;

}

/**
 * @schema AwsDynamoDbTableSseDescription
 */
export interface AwsDynamoDbTableSseDescription {
  /**
   * @schema AwsDynamoDbTableSseDescription#InaccessibleEncryptionDateTime
   */
  readonly inaccessibleEncryptionDateTime?: string;

  /**
   * @schema AwsDynamoDbTableSseDescription#Status
   */
  readonly status?: string;

  /**
   * @schema AwsDynamoDbTableSseDescription#SseType
   */
  readonly sseType?: string;

  /**
   * @schema AwsDynamoDbTableSseDescription#KmsMasterKeyArn
   */
  readonly kmsMasterKeyArn?: string;

}

/**
 * @schema AwsDynamoDbTableStreamSpecification
 */
export interface AwsDynamoDbTableStreamSpecification {
  /**
   * @schema AwsDynamoDbTableStreamSpecification#StreamEnabled
   */
  readonly streamEnabled?: boolean;

  /**
   * @schema AwsDynamoDbTableStreamSpecification#StreamViewType
   */
  readonly streamViewType?: string;

}

/**
 * @schema AwsApiGatewayMethodSettings
 */
export interface AwsApiGatewayMethodSettings {
  /**
   * @schema AwsApiGatewayMethodSettings#MetricsEnabled
   */
  readonly metricsEnabled?: boolean;

  /**
   * @schema AwsApiGatewayMethodSettings#LoggingLevel
   */
  readonly loggingLevel?: string;

  /**
   * @schema AwsApiGatewayMethodSettings#DataTraceEnabled
   */
  readonly dataTraceEnabled?: boolean;

  /**
   * @schema AwsApiGatewayMethodSettings#ThrottlingBurstLimit
   */
  readonly throttlingBurstLimit?: number;

  /**
   * @schema AwsApiGatewayMethodSettings#ThrottlingRateLimit
   */
  readonly throttlingRateLimit?: number;

  /**
   * @schema AwsApiGatewayMethodSettings#CachingEnabled
   */
  readonly cachingEnabled?: boolean;

  /**
   * @schema AwsApiGatewayMethodSettings#CacheTtlInSeconds
   */
  readonly cacheTtlInSeconds?: number;

  /**
   * @schema AwsApiGatewayMethodSettings#CacheDataEncrypted
   */
  readonly cacheDataEncrypted?: boolean;

  /**
   * @schema AwsApiGatewayMethodSettings#RequireAuthorizationForCacheControl
   */
  readonly requireAuthorizationForCacheControl?: boolean;

  /**
   * @schema AwsApiGatewayMethodSettings#UnauthorizedCacheControlHeaderStrategy
   */
  readonly unauthorizedCacheControlHeaderStrategy?: string;

  /**
   * @schema AwsApiGatewayMethodSettings#HttpMethod
   */
  readonly httpMethod?: string;

  /**
   * @schema AwsApiGatewayMethodSettings#ResourcePath
   */
  readonly resourcePath?: string;

}

/**
 * @schema AwsApiGatewayCanarySettings
 */
export interface AwsApiGatewayCanarySettings {
  /**
   * @schema AwsApiGatewayCanarySettings#PercentTraffic
   */
  readonly percentTraffic?: number;

  /**
   * @schema AwsApiGatewayCanarySettings#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema AwsApiGatewayCanarySettings#StageVariableOverrides
   */
  readonly stageVariableOverrides?: { [key: string]: string };

  /**
   * @schema AwsApiGatewayCanarySettings#UseStageCache
   */
  readonly useStageCache?: boolean;

}

/**
 * @schema AwsApiGatewayEndpointConfiguration
 */
export interface AwsApiGatewayEndpointConfiguration {
  /**
   * @schema AwsApiGatewayEndpointConfiguration#Types
   */
  readonly types?: string[];

}

/**
 * @schema AwsCertificateManagerCertificateDomainValidationOption
 */
export interface AwsCertificateManagerCertificateDomainValidationOption {
  /**
   * @schema AwsCertificateManagerCertificateDomainValidationOption#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema AwsCertificateManagerCertificateDomainValidationOption#ResourceRecord
   */
  readonly resourceRecord?: AwsCertificateManagerCertificateResourceRecord;

  /**
   * @schema AwsCertificateManagerCertificateDomainValidationOption#ValidationDomain
   */
  readonly validationDomain?: string;

  /**
   * @schema AwsCertificateManagerCertificateDomainValidationOption#ValidationEmails
   */
  readonly validationEmails?: string[];

  /**
   * @schema AwsCertificateManagerCertificateDomainValidationOption#ValidationMethod
   */
  readonly validationMethod?: string;

  /**
   * @schema AwsCertificateManagerCertificateDomainValidationOption#ValidationStatus
   */
  readonly validationStatus?: string;

}

/**
 * @schema AwsCertificateManagerCertificateExtendedKeyUsage
 */
export interface AwsCertificateManagerCertificateExtendedKeyUsage {
  /**
   * @schema AwsCertificateManagerCertificateExtendedKeyUsage#Name
   */
  readonly name?: string;

  /**
   * @schema AwsCertificateManagerCertificateExtendedKeyUsage#OId
   */
  readonly oId?: string;

}

/**
 * @schema AwsCertificateManagerCertificateKeyUsage
 */
export interface AwsCertificateManagerCertificateKeyUsage {
  /**
   * @schema AwsCertificateManagerCertificateKeyUsage#Name
   */
  readonly name?: string;

}

/**
 * @schema AwsCertificateManagerCertificateOptions
 */
export interface AwsCertificateManagerCertificateOptions {
  /**
   * @schema AwsCertificateManagerCertificateOptions#CertificateTransparencyLoggingPreference
   */
  readonly certificateTransparencyLoggingPreference?: string;

}

/**
 * @schema AwsCertificateManagerCertificateRenewalSummary
 */
export interface AwsCertificateManagerCertificateRenewalSummary {
  /**
   * @schema AwsCertificateManagerCertificateRenewalSummary#DomainValidationOptions
   */
  readonly domainValidationOptions?: AwsCertificateManagerCertificateDomainValidationOption[];

  /**
   * @schema AwsCertificateManagerCertificateRenewalSummary#RenewalStatus
   */
  readonly renewalStatus?: string;

  /**
   * @schema AwsCertificateManagerCertificateRenewalSummary#RenewalStatusReason
   */
  readonly renewalStatusReason?: string;

  /**
   * @schema AwsCertificateManagerCertificateRenewalSummary#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema AwsRedshiftClusterClusterNode
 */
export interface AwsRedshiftClusterClusterNode {
  /**
   * @schema AwsRedshiftClusterClusterNode#NodeRole
   */
  readonly nodeRole?: string;

  /**
   * @schema AwsRedshiftClusterClusterNode#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema AwsRedshiftClusterClusterNode#PublicIpAddress
   */
  readonly publicIpAddress?: string;

}

/**
 * @schema AwsRedshiftClusterClusterParameterGroup
 */
export interface AwsRedshiftClusterClusterParameterGroup {
  /**
   * @schema AwsRedshiftClusterClusterParameterGroup#ClusterParameterStatusList
   */
  readonly clusterParameterStatusList?: AwsRedshiftClusterClusterParameterStatus[];

  /**
   * @schema AwsRedshiftClusterClusterParameterGroup#ParameterApplyStatus
   */
  readonly parameterApplyStatus?: string;

  /**
   * @schema AwsRedshiftClusterClusterParameterGroup#ParameterGroupName
   */
  readonly parameterGroupName?: string;

}

/**
 * @schema AwsRedshiftClusterClusterSecurityGroup
 */
export interface AwsRedshiftClusterClusterSecurityGroup {
  /**
   * @schema AwsRedshiftClusterClusterSecurityGroup#ClusterSecurityGroupName
   */
  readonly clusterSecurityGroupName?: string;

  /**
   * @schema AwsRedshiftClusterClusterSecurityGroup#Status
   */
  readonly status?: string;

}

/**
 * @schema AwsRedshiftClusterClusterSnapshotCopyStatus
 */
export interface AwsRedshiftClusterClusterSnapshotCopyStatus {
  /**
   * @schema AwsRedshiftClusterClusterSnapshotCopyStatus#DestinationRegion
   */
  readonly destinationRegion?: string;

  /**
   * @schema AwsRedshiftClusterClusterSnapshotCopyStatus#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

  /**
   * @schema AwsRedshiftClusterClusterSnapshotCopyStatus#RetentionPeriod
   */
  readonly retentionPeriod?: number;

  /**
   * @schema AwsRedshiftClusterClusterSnapshotCopyStatus#SnapshotCopyGrantName
   */
  readonly snapshotCopyGrantName?: string;

}

/**
 * @schema AwsRedshiftClusterDeferredMaintenanceWindow
 */
export interface AwsRedshiftClusterDeferredMaintenanceWindow {
  /**
   * @schema AwsRedshiftClusterDeferredMaintenanceWindow#DeferMaintenanceEndTime
   */
  readonly deferMaintenanceEndTime?: string;

  /**
   * @schema AwsRedshiftClusterDeferredMaintenanceWindow#DeferMaintenanceIdentifier
   */
  readonly deferMaintenanceIdentifier?: string;

  /**
   * @schema AwsRedshiftClusterDeferredMaintenanceWindow#DeferMaintenanceStartTime
   */
  readonly deferMaintenanceStartTime?: string;

}

/**
 * @schema AwsRedshiftClusterElasticIpStatus
 */
export interface AwsRedshiftClusterElasticIpStatus {
  /**
   * @schema AwsRedshiftClusterElasticIpStatus#ElasticIp
   */
  readonly elasticIp?: string;

  /**
   * @schema AwsRedshiftClusterElasticIpStatus#Status
   */
  readonly status?: string;

}

/**
 * @schema AwsRedshiftClusterEndpoint
 */
export interface AwsRedshiftClusterEndpoint {
  /**
   * @schema AwsRedshiftClusterEndpoint#Address
   */
  readonly address?: string;

  /**
   * @schema AwsRedshiftClusterEndpoint#Port
   */
  readonly port?: number;

}

/**
 * @schema AwsRedshiftClusterHsmStatus
 */
export interface AwsRedshiftClusterHsmStatus {
  /**
   * @schema AwsRedshiftClusterHsmStatus#HsmClientCertificateIdentifier
   */
  readonly hsmClientCertificateIdentifier?: string;

  /**
   * @schema AwsRedshiftClusterHsmStatus#HsmConfigurationIdentifier
   */
  readonly hsmConfigurationIdentifier?: string;

  /**
   * @schema AwsRedshiftClusterHsmStatus#Status
   */
  readonly status?: string;

}

/**
 * @schema AwsRedshiftClusterIamRole
 */
export interface AwsRedshiftClusterIamRole {
  /**
   * @schema AwsRedshiftClusterIamRole#ApplyStatus
   */
  readonly applyStatus?: string;

  /**
   * @schema AwsRedshiftClusterIamRole#IamRoleArn
   */
  readonly iamRoleArn?: string;

}

/**
 * @schema AwsRedshiftClusterPendingModifiedValues
 */
export interface AwsRedshiftClusterPendingModifiedValues {
  /**
   * @schema AwsRedshiftClusterPendingModifiedValues#AutomatedSnapshotRetentionPeriod
   */
  readonly automatedSnapshotRetentionPeriod?: number;

  /**
   * @schema AwsRedshiftClusterPendingModifiedValues#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema AwsRedshiftClusterPendingModifiedValues#ClusterType
   */
  readonly clusterType?: string;

  /**
   * @schema AwsRedshiftClusterPendingModifiedValues#ClusterVersion
   */
  readonly clusterVersion?: string;

  /**
   * @schema AwsRedshiftClusterPendingModifiedValues#EncryptionType
   */
  readonly encryptionType?: string;

  /**
   * @schema AwsRedshiftClusterPendingModifiedValues#EnhancedVpcRouting
   */
  readonly enhancedVpcRouting?: boolean;

  /**
   * @schema AwsRedshiftClusterPendingModifiedValues#MaintenanceTrackName
   */
  readonly maintenanceTrackName?: string;

  /**
   * @schema AwsRedshiftClusterPendingModifiedValues#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema AwsRedshiftClusterPendingModifiedValues#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema AwsRedshiftClusterPendingModifiedValues#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema AwsRedshiftClusterPendingModifiedValues#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

}

/**
 * @schema AwsRedshiftClusterResizeInfo
 */
export interface AwsRedshiftClusterResizeInfo {
  /**
   * @schema AwsRedshiftClusterResizeInfo#AllowCancelResize
   */
  readonly allowCancelResize?: boolean;

  /**
   * @schema AwsRedshiftClusterResizeInfo#ResizeType
   */
  readonly resizeType?: string;

}

/**
 * @schema AwsRedshiftClusterRestoreStatus
 */
export interface AwsRedshiftClusterRestoreStatus {
  /**
   * @schema AwsRedshiftClusterRestoreStatus#CurrentRestoreRateInMegaBytesPerSecond
   */
  readonly currentRestoreRateInMegaBytesPerSecond?: number;

  /**
   * @schema AwsRedshiftClusterRestoreStatus#ElapsedTimeInSeconds
   */
  readonly elapsedTimeInSeconds?: number;

  /**
   * @schema AwsRedshiftClusterRestoreStatus#EstimatedTimeToCompletionInSeconds
   */
  readonly estimatedTimeToCompletionInSeconds?: number;

  /**
   * @schema AwsRedshiftClusterRestoreStatus#ProgressInMegaBytes
   */
  readonly progressInMegaBytes?: number;

  /**
   * @schema AwsRedshiftClusterRestoreStatus#SnapshotSizeInMegaBytes
   */
  readonly snapshotSizeInMegaBytes?: number;

  /**
   * @schema AwsRedshiftClusterRestoreStatus#Status
   */
  readonly status?: string;

}

/**
 * @schema AwsRedshiftClusterVpcSecurityGroup
 */
export interface AwsRedshiftClusterVpcSecurityGroup {
  /**
   * @schema AwsRedshiftClusterVpcSecurityGroup#Status
   */
  readonly status?: string;

  /**
   * @schema AwsRedshiftClusterVpcSecurityGroup#VpcSecurityGroupId
   */
  readonly vpcSecurityGroupId?: string;

}

/**
 * @schema AwsElbLoadBalancerBackendServerDescription
 */
export interface AwsElbLoadBalancerBackendServerDescription {
  /**
   * @schema AwsElbLoadBalancerBackendServerDescription#InstancePort
   */
  readonly instancePort?: number;

  /**
   * @schema AwsElbLoadBalancerBackendServerDescription#PolicyNames
   */
  readonly policyNames?: string[];

}

/**
 * @schema AwsElbLoadBalancerHealthCheck
 */
export interface AwsElbLoadBalancerHealthCheck {
  /**
   * @schema AwsElbLoadBalancerHealthCheck#HealthyThreshold
   */
  readonly healthyThreshold?: number;

  /**
   * @schema AwsElbLoadBalancerHealthCheck#Interval
   */
  readonly interval?: number;

  /**
   * @schema AwsElbLoadBalancerHealthCheck#Target
   */
  readonly target?: string;

  /**
   * @schema AwsElbLoadBalancerHealthCheck#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema AwsElbLoadBalancerHealthCheck#UnhealthyThreshold
   */
  readonly unhealthyThreshold?: number;

}

/**
 * @schema AwsElbLoadBalancerInstance
 */
export interface AwsElbLoadBalancerInstance {
  /**
   * @schema AwsElbLoadBalancerInstance#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * @schema AwsElbLoadBalancerListenerDescription
 */
export interface AwsElbLoadBalancerListenerDescription {
  /**
   * @schema AwsElbLoadBalancerListenerDescription#Listener
   */
  readonly listener?: AwsElbLoadBalancerListener;

  /**
   * @schema AwsElbLoadBalancerListenerDescription#PolicyNames
   */
  readonly policyNames?: string[];

}

/**
 * @schema AwsElbLoadBalancerAttributes
 */
export interface AwsElbLoadBalancerAttributes {
  /**
   * @schema AwsElbLoadBalancerAttributes#AccessLog
   */
  readonly accessLog?: AwsElbLoadBalancerAccessLog;

  /**
   * @schema AwsElbLoadBalancerAttributes#ConnectionDraining
   */
  readonly connectionDraining?: AwsElbLoadBalancerConnectionDraining;

  /**
   * @schema AwsElbLoadBalancerAttributes#ConnectionSettings
   */
  readonly connectionSettings?: AwsElbLoadBalancerConnectionSettings;

  /**
   * @schema AwsElbLoadBalancerAttributes#CrossZoneLoadBalancing
   */
  readonly crossZoneLoadBalancing?: AwsElbLoadBalancerCrossZoneLoadBalancing;

}

/**
 * @schema AwsElbLoadBalancerPolicies
 */
export interface AwsElbLoadBalancerPolicies {
  /**
   * @schema AwsElbLoadBalancerPolicies#AppCookieStickinessPolicies
   */
  readonly appCookieStickinessPolicies?: AwsElbAppCookieStickinessPolicy[];

  /**
   * @schema AwsElbLoadBalancerPolicies#LbCookieStickinessPolicies
   */
  readonly lbCookieStickinessPolicies?: AwsElbLbCookieStickinessPolicy[];

  /**
   * @schema AwsElbLoadBalancerPolicies#OtherPolicies
   */
  readonly otherPolicies?: string[];

}

/**
 * @schema AwsElbLoadBalancerSourceSecurityGroup
 */
export interface AwsElbLoadBalancerSourceSecurityGroup {
  /**
   * @schema AwsElbLoadBalancerSourceSecurityGroup#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema AwsElbLoadBalancerSourceSecurityGroup#OwnerAlias
   */
  readonly ownerAlias?: string;

}

/**
 * @schema AwsIamGroupPolicy
 */
export interface AwsIamGroupPolicy {
  /**
   * @schema AwsIamGroupPolicy#PolicyName
   */
  readonly policyName?: string;

}

/**
 * @schema AwsIamInstanceProfile
 */
export interface AwsIamInstanceProfile {
  /**
   * @schema AwsIamInstanceProfile#Arn
   */
  readonly arn?: string;

  /**
   * @schema AwsIamInstanceProfile#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema AwsIamInstanceProfile#InstanceProfileId
   */
  readonly instanceProfileId?: string;

  /**
   * @schema AwsIamInstanceProfile#InstanceProfileName
   */
  readonly instanceProfileName?: string;

  /**
   * @schema AwsIamInstanceProfile#Path
   */
  readonly path?: string;

  /**
   * @schema AwsIamInstanceProfile#Roles
   */
  readonly roles?: AwsIamInstanceProfileRole[];

}

/**
 * @schema AwsIamRolePolicy
 */
export interface AwsIamRolePolicy {
  /**
   * @schema AwsIamRolePolicy#PolicyName
   */
  readonly policyName?: string;

}

/**
 * @schema AwsLambdaFunctionCode
 */
export interface AwsLambdaFunctionCode {
  /**
   * @schema AwsLambdaFunctionCode#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema AwsLambdaFunctionCode#S3Key
   */
  readonly s3Key?: string;

  /**
   * @schema AwsLambdaFunctionCode#S3ObjectVersion
   */
  readonly s3ObjectVersion?: string;

  /**
   * @schema AwsLambdaFunctionCode#ZipFile
   */
  readonly zipFile?: string;

}

/**
 * @schema AwsLambdaFunctionDeadLetterConfig
 */
export interface AwsLambdaFunctionDeadLetterConfig {
  /**
   * @schema AwsLambdaFunctionDeadLetterConfig#TargetArn
   */
  readonly targetArn?: string;

}

/**
 * @schema AwsLambdaFunctionEnvironment
 */
export interface AwsLambdaFunctionEnvironment {
  /**
   * @schema AwsLambdaFunctionEnvironment#Variables
   */
  readonly variables?: { [key: string]: string };

  /**
   * @schema AwsLambdaFunctionEnvironment#Error
   */
  readonly error?: AwsLambdaFunctionEnvironmentError;

}

/**
 * @schema AwsLambdaFunctionLayer
 */
export interface AwsLambdaFunctionLayer {
  /**
   * @schema AwsLambdaFunctionLayer#Arn
   */
  readonly arn?: string;

  /**
   * @schema AwsLambdaFunctionLayer#CodeSize
   */
  readonly codeSize?: number;

}

/**
 * @schema AwsLambdaFunctionTracingConfig
 */
export interface AwsLambdaFunctionTracingConfig {
  /**
   * @schema AwsLambdaFunctionTracingConfig#Mode
   */
  readonly mode?: string;

}

/**
 * @schema AwsLambdaFunctionVpcConfig
 */
export interface AwsLambdaFunctionVpcConfig {
  /**
   * @schema AwsLambdaFunctionVpcConfig#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema AwsLambdaFunctionVpcConfig#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema AwsLambdaFunctionVpcConfig#VpcId
   */
  readonly vpcId?: string;

}

/**
 * @schema AwsRdsDbInstanceAssociatedRole
 */
export interface AwsRdsDbInstanceAssociatedRole {
  /**
   * @schema AwsRdsDbInstanceAssociatedRole#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema AwsRdsDbInstanceAssociatedRole#FeatureName
   */
  readonly featureName?: string;

  /**
   * @schema AwsRdsDbInstanceAssociatedRole#Status
   */
  readonly status?: string;

}

/**
 * @schema AwsRdsDbInstanceEndpoint
 */
export interface AwsRdsDbInstanceEndpoint {
  /**
   * @schema AwsRdsDbInstanceEndpoint#Address
   */
  readonly address?: string;

  /**
   * @schema AwsRdsDbInstanceEndpoint#Port
   */
  readonly port?: number;

  /**
   * @schema AwsRdsDbInstanceEndpoint#HostedZoneId
   */
  readonly hostedZoneId?: string;

}

/**
 * @schema AwsRdsDbInstanceVpcSecurityGroup
 */
export interface AwsRdsDbInstanceVpcSecurityGroup {
  /**
   * @schema AwsRdsDbInstanceVpcSecurityGroup#VpcSecurityGroupId
   */
  readonly vpcSecurityGroupId?: string;

  /**
   * @schema AwsRdsDbInstanceVpcSecurityGroup#Status
   */
  readonly status?: string;

}

/**
 * @schema AwsRdsDbParameterGroup
 */
export interface AwsRdsDbParameterGroup {
  /**
   * @schema AwsRdsDbParameterGroup#DbParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema AwsRdsDbParameterGroup#ParameterApplyStatus
   */
  readonly parameterApplyStatus?: string;

}

/**
 * @schema AwsRdsDbSubnetGroup
 */
export interface AwsRdsDbSubnetGroup {
  /**
   * @schema AwsRdsDbSubnetGroup#DbSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema AwsRdsDbSubnetGroup#DbSubnetGroupDescription
   */
  readonly dbSubnetGroupDescription?: string;

  /**
   * @schema AwsRdsDbSubnetGroup#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema AwsRdsDbSubnetGroup#SubnetGroupStatus
   */
  readonly subnetGroupStatus?: string;

  /**
   * @schema AwsRdsDbSubnetGroup#Subnets
   */
  readonly subnets?: AwsRdsDbSubnetGroupSubnet[];

  /**
   * @schema AwsRdsDbSubnetGroup#DbSubnetGroupArn
   */
  readonly dbSubnetGroupArn?: string;

}

/**
 * @schema AwsRdsDbPendingModifiedValues
 */
export interface AwsRdsDbPendingModifiedValues {
  /**
   * @schema AwsRdsDbPendingModifiedValues#DbInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema AwsRdsDbPendingModifiedValues#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema AwsRdsDbPendingModifiedValues#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema AwsRdsDbPendingModifiedValues#Port
   */
  readonly port?: number;

  /**
   * @schema AwsRdsDbPendingModifiedValues#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema AwsRdsDbPendingModifiedValues#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema AwsRdsDbPendingModifiedValues#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema AwsRdsDbPendingModifiedValues#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema AwsRdsDbPendingModifiedValues#Iops
   */
  readonly iops?: number;

  /**
   * @schema AwsRdsDbPendingModifiedValues#DbInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema AwsRdsDbPendingModifiedValues#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema AwsRdsDbPendingModifiedValues#CaCertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

  /**
   * @schema AwsRdsDbPendingModifiedValues#DbSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema AwsRdsDbPendingModifiedValues#PendingCloudWatchLogsExports
   */
  readonly pendingCloudWatchLogsExports?: AwsRdsPendingCloudWatchLogsExports;

  /**
   * @schema AwsRdsDbPendingModifiedValues#ProcessorFeatures
   */
  readonly processorFeatures?: AwsRdsDbProcessorFeature[];

}

/**
 * @schema AwsRdsDbOptionGroupMembership
 */
export interface AwsRdsDbOptionGroupMembership {
  /**
   * @schema AwsRdsDbOptionGroupMembership#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema AwsRdsDbOptionGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * @schema AwsRdsDbStatusInfo
 */
export interface AwsRdsDbStatusInfo {
  /**
   * @schema AwsRdsDbStatusInfo#StatusType
   */
  readonly statusType?: string;

  /**
   * @schema AwsRdsDbStatusInfo#Normal
   */
  readonly normal?: boolean;

  /**
   * @schema AwsRdsDbStatusInfo#Status
   */
  readonly status?: string;

  /**
   * @schema AwsRdsDbStatusInfo#Message
   */
  readonly message?: string;

}

/**
 * @schema AwsRdsDbDomainMembership
 */
export interface AwsRdsDbDomainMembership {
  /**
   * @schema AwsRdsDbDomainMembership#Domain
   */
  readonly domain?: string;

  /**
   * @schema AwsRdsDbDomainMembership#Status
   */
  readonly status?: string;

  /**
   * @schema AwsRdsDbDomainMembership#Fqdn
   */
  readonly fqdn?: string;

  /**
   * @schema AwsRdsDbDomainMembership#IamRoleName
   */
  readonly iamRoleName?: string;

}

/**
 * @schema AwsRdsDbProcessorFeature
 */
export interface AwsRdsDbProcessorFeature {
  /**
   * @schema AwsRdsDbProcessorFeature#Name
   */
  readonly name?: string;

  /**
   * @schema AwsRdsDbProcessorFeature#Value
   */
  readonly value?: string;

}

/**
 * @schema AwsSnsTopicSubscription
 */
export interface AwsSnsTopicSubscription {
  /**
   * @schema AwsSnsTopicSubscription#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema AwsSnsTopicSubscription#Protocol
   */
  readonly protocol?: string;

}

/**
 * @schema AwsWafWebAclRule
 */
export interface AwsWafWebAclRule {
  /**
   * @schema AwsWafWebAclRule#Action
   */
  readonly action?: WafAction;

  /**
   * @schema AwsWafWebAclRule#ExcludedRules
   */
  readonly excludedRules?: WafExcludedRule[];

  /**
   * @schema AwsWafWebAclRule#OverrideAction
   */
  readonly overrideAction?: WafOverrideAction;

  /**
   * @schema AwsWafWebAclRule#Priority
   */
  readonly priority?: number;

  /**
   * @schema AwsWafWebAclRule#RuleId
   */
  readonly ruleId?: string;

  /**
   * @schema AwsWafWebAclRule#Type
   */
  readonly type?: string;

}

/**
 * @schema AwsRdsDbClusterAssociatedRole
 */
export interface AwsRdsDbClusterAssociatedRole {
  /**
   * @schema AwsRdsDbClusterAssociatedRole#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema AwsRdsDbClusterAssociatedRole#Status
   */
  readonly status?: string;

}

/**
 * @schema AwsRdsDbClusterOptionGroupMembership
 */
export interface AwsRdsDbClusterOptionGroupMembership {
  /**
   * @schema AwsRdsDbClusterOptionGroupMembership#DbClusterOptionGroupName
   */
  readonly dbClusterOptionGroupName?: string;

  /**
   * @schema AwsRdsDbClusterOptionGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * @schema AwsRdsDbClusterMember
 */
export interface AwsRdsDbClusterMember {
  /**
   * @schema AwsRdsDbClusterMember#IsClusterWriter
   */
  readonly isClusterWriter?: boolean;

  /**
   * @schema AwsRdsDbClusterMember#PromotionTier
   */
  readonly promotionTier?: number;

  /**
   * @schema AwsRdsDbClusterMember#DbInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema AwsRdsDbClusterMember#DbClusterParameterGroupStatus
   */
  readonly dbClusterParameterGroupStatus?: string;

}

/**
 * @schema AwsCodeBuildProjectEnvironmentRegistryCredential
 */
export interface AwsCodeBuildProjectEnvironmentRegistryCredential {
  /**
   * @schema AwsCodeBuildProjectEnvironmentRegistryCredential#Credential
   */
  readonly credential?: string;

  /**
   * @schema AwsCodeBuildProjectEnvironmentRegistryCredential#CredentialProvider
   */
  readonly credentialProvider?: string;

}

/**
 * @schema AwsCloudFrontDistributionCacheBehavior
 */
export interface AwsCloudFrontDistributionCacheBehavior {
  /**
   * @schema AwsCloudFrontDistributionCacheBehavior#ViewerProtocolPolicy
   */
  readonly viewerProtocolPolicy?: string;

}

/**
 * @schema AwsCloudFrontDistributionOriginItem
 */
export interface AwsCloudFrontDistributionOriginItem {
  /**
   * @schema AwsCloudFrontDistributionOriginItem#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema AwsCloudFrontDistributionOriginItem#Id
   */
  readonly id?: string;

  /**
   * @schema AwsCloudFrontDistributionOriginItem#OriginPath
   */
  readonly originPath?: string;

  /**
   * @schema AwsCloudFrontDistributionOriginItem#S3OriginConfig
   */
  readonly s3OriginConfig?: AwsCloudFrontDistributionOriginS3OriginConfig;

}

/**
 * @schema AwsCloudFrontDistributionOriginGroup
 */
export interface AwsCloudFrontDistributionOriginGroup {
  /**
   * @schema AwsCloudFrontDistributionOriginGroup#FailoverCriteria
   */
  readonly failoverCriteria?: AwsCloudFrontDistributionOriginGroupFailover;

}

/**
 * @schema AwsEc2SecurityGroupUserIdGroupPair
 */
export interface AwsEc2SecurityGroupUserIdGroupPair {
  /**
   * @schema AwsEc2SecurityGroupUserIdGroupPair#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema AwsEc2SecurityGroupUserIdGroupPair#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema AwsEc2SecurityGroupUserIdGroupPair#PeeringStatus
   */
  readonly peeringStatus?: string;

  /**
   * @schema AwsEc2SecurityGroupUserIdGroupPair#UserId
   */
  readonly userId?: string;

  /**
   * @schema AwsEc2SecurityGroupUserIdGroupPair#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema AwsEc2SecurityGroupUserIdGroupPair#VpcPeeringConnectionId
   */
  readonly vpcPeeringConnectionId?: string;

}

/**
 * @schema AwsEc2SecurityGroupIpRange
 */
export interface AwsEc2SecurityGroupIpRange {
  /**
   * @schema AwsEc2SecurityGroupIpRange#CidrIp
   */
  readonly cidrIp?: string;

}

/**
 * @schema AwsEc2SecurityGroupIpv6Range
 */
export interface AwsEc2SecurityGroupIpv6Range {
  /**
   * @schema AwsEc2SecurityGroupIpv6Range#CidrIpv6
   */
  readonly cidrIpv6?: string;

}

/**
 * @schema AwsEc2SecurityGroupPrefixListId
 */
export interface AwsEc2SecurityGroupPrefixListId {
  /**
   * @schema AwsEc2SecurityGroupPrefixListId#PrefixListId
   */
  readonly prefixListId?: string;

}

/**
 * @schema AwsS3BucketServerSideEncryptionRule
 */
export interface AwsS3BucketServerSideEncryptionRule {
  /**
   * @schema AwsS3BucketServerSideEncryptionRule#ApplyServerSideEncryptionByDefault
   */
  readonly applyServerSideEncryptionByDefault?: AwsS3BucketServerSideEncryptionByDefault;

}

/**
 * @schema AwsIamAccessKeySessionContextAttributes
 */
export interface AwsIamAccessKeySessionContextAttributes {
  /**
   * @schema AwsIamAccessKeySessionContextAttributes#MfaAuthenticated
   */
  readonly mfaAuthenticated?: boolean;

  /**
   * @schema AwsIamAccessKeySessionContextAttributes#CreationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema AwsIamAccessKeySessionContextSessionIssuer
 */
export interface AwsIamAccessKeySessionContextSessionIssuer {
  /**
   * @schema AwsIamAccessKeySessionContextSessionIssuer#Type
   */
  readonly type?: string;

  /**
   * @schema AwsIamAccessKeySessionContextSessionIssuer#PrincipalId
   */
  readonly principalId?: string;

  /**
   * @schema AwsIamAccessKeySessionContextSessionIssuer#Arn
   */
  readonly arn?: string;

  /**
   * @schema AwsIamAccessKeySessionContextSessionIssuer#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema AwsIamAccessKeySessionContextSessionIssuer#UserName
   */
  readonly userName?: string;

}

/**
 * @schema AwsDynamoDbTableProjection
 */
export interface AwsDynamoDbTableProjection {
  /**
   * @schema AwsDynamoDbTableProjection#NonKeyAttributes
   */
  readonly nonKeyAttributes?: string[];

  /**
   * @schema AwsDynamoDbTableProjection#ProjectionType
   */
  readonly projectionType?: string;

}

/**
 * @schema AwsDynamoDbTableReplicaGlobalSecondaryIndex
 */
export interface AwsDynamoDbTableReplicaGlobalSecondaryIndex {
  /**
   * @schema AwsDynamoDbTableReplicaGlobalSecondaryIndex#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema AwsDynamoDbTableReplicaGlobalSecondaryIndex#ProvisionedThroughputOverride
   */
  readonly provisionedThroughputOverride?: AwsDynamoDbTableProvisionedThroughputOverride;

}

/**
 * @schema AwsDynamoDbTableProvisionedThroughputOverride
 */
export interface AwsDynamoDbTableProvisionedThroughputOverride {
  /**
   * @schema AwsDynamoDbTableProvisionedThroughputOverride#ReadCapacityUnits
   */
  readonly readCapacityUnits?: number;

}

/**
 * @schema AwsCertificateManagerCertificateResourceRecord
 */
export interface AwsCertificateManagerCertificateResourceRecord {
  /**
   * @schema AwsCertificateManagerCertificateResourceRecord#Name
   */
  readonly name?: string;

  /**
   * @schema AwsCertificateManagerCertificateResourceRecord#Type
   */
  readonly type?: string;

  /**
   * @schema AwsCertificateManagerCertificateResourceRecord#Value
   */
  readonly value?: string;

}

/**
 * @schema AwsRedshiftClusterClusterParameterStatus
 */
export interface AwsRedshiftClusterClusterParameterStatus {
  /**
   * @schema AwsRedshiftClusterClusterParameterStatus#ParameterName
   */
  readonly parameterName?: string;

  /**
   * @schema AwsRedshiftClusterClusterParameterStatus#ParameterApplyStatus
   */
  readonly parameterApplyStatus?: string;

  /**
   * @schema AwsRedshiftClusterClusterParameterStatus#ParameterApplyErrorDescription
   */
  readonly parameterApplyErrorDescription?: string;

}

/**
 * @schema AwsElbLoadBalancerListener
 */
export interface AwsElbLoadBalancerListener {
  /**
   * @schema AwsElbLoadBalancerListener#InstancePort
   */
  readonly instancePort?: number;

  /**
   * @schema AwsElbLoadBalancerListener#InstanceProtocol
   */
  readonly instanceProtocol?: string;

  /**
   * @schema AwsElbLoadBalancerListener#LoadBalancerPort
   */
  readonly loadBalancerPort?: number;

  /**
   * @schema AwsElbLoadBalancerListener#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema AwsElbLoadBalancerListener#SslCertificateId
   */
  readonly sslCertificateId?: string;

}

/**
 * @schema AwsElbLoadBalancerAccessLog
 */
export interface AwsElbLoadBalancerAccessLog {
  /**
   * @schema AwsElbLoadBalancerAccessLog#EmitInterval
   */
  readonly emitInterval?: number;

  /**
   * @schema AwsElbLoadBalancerAccessLog#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema AwsElbLoadBalancerAccessLog#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema AwsElbLoadBalancerAccessLog#S3BucketPrefix
   */
  readonly s3BucketPrefix?: string;

}

/**
 * @schema AwsElbLoadBalancerConnectionDraining
 */
export interface AwsElbLoadBalancerConnectionDraining {
  /**
   * @schema AwsElbLoadBalancerConnectionDraining#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema AwsElbLoadBalancerConnectionDraining#Timeout
   */
  readonly timeout?: number;

}

/**
 * @schema AwsElbLoadBalancerConnectionSettings
 */
export interface AwsElbLoadBalancerConnectionSettings {
  /**
   * @schema AwsElbLoadBalancerConnectionSettings#IdleTimeout
   */
  readonly idleTimeout?: number;

}

/**
 * @schema AwsElbLoadBalancerCrossZoneLoadBalancing
 */
export interface AwsElbLoadBalancerCrossZoneLoadBalancing {
  /**
   * @schema AwsElbLoadBalancerCrossZoneLoadBalancing#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema AwsElbAppCookieStickinessPolicy
 */
export interface AwsElbAppCookieStickinessPolicy {
  /**
   * @schema AwsElbAppCookieStickinessPolicy#CookieName
   */
  readonly cookieName?: string;

  /**
   * @schema AwsElbAppCookieStickinessPolicy#PolicyName
   */
  readonly policyName?: string;

}

/**
 * @schema AwsElbLbCookieStickinessPolicy
 */
export interface AwsElbLbCookieStickinessPolicy {
  /**
   * @schema AwsElbLbCookieStickinessPolicy#CookieExpirationPeriod
   */
  readonly cookieExpirationPeriod?: number;

  /**
   * @schema AwsElbLbCookieStickinessPolicy#PolicyName
   */
  readonly policyName?: string;

}

/**
 * @schema AwsIamInstanceProfileRole
 */
export interface AwsIamInstanceProfileRole {
  /**
   * @schema AwsIamInstanceProfileRole#Arn
   */
  readonly arn?: string;

  /**
   * @schema AwsIamInstanceProfileRole#AssumeRolePolicyDocument
   */
  readonly assumeRolePolicyDocument?: string;

  /**
   * @schema AwsIamInstanceProfileRole#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema AwsIamInstanceProfileRole#Path
   */
  readonly path?: string;

  /**
   * @schema AwsIamInstanceProfileRole#RoleId
   */
  readonly roleId?: string;

  /**
   * @schema AwsIamInstanceProfileRole#RoleName
   */
  readonly roleName?: string;

}

/**
 * @schema AwsLambdaFunctionEnvironmentError
 */
export interface AwsLambdaFunctionEnvironmentError {
  /**
   * @schema AwsLambdaFunctionEnvironmentError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema AwsLambdaFunctionEnvironmentError#Message
   */
  readonly message?: string;

}

/**
 * @schema AwsRdsDbSubnetGroupSubnet
 */
export interface AwsRdsDbSubnetGroupSubnet {
  /**
   * @schema AwsRdsDbSubnetGroupSubnet#SubnetIdentifier
   */
  readonly subnetIdentifier?: string;

  /**
   * @schema AwsRdsDbSubnetGroupSubnet#SubnetAvailabilityZone
   */
  readonly subnetAvailabilityZone?: AwsRdsDbSubnetGroupSubnetAvailabilityZone;

  /**
   * @schema AwsRdsDbSubnetGroupSubnet#SubnetStatus
   */
  readonly subnetStatus?: string;

}

/**
 * @schema AwsRdsPendingCloudWatchLogsExports
 */
export interface AwsRdsPendingCloudWatchLogsExports {
  /**
   * @schema AwsRdsPendingCloudWatchLogsExports#LogTypesToEnable
   */
  readonly logTypesToEnable?: string[];

  /**
   * @schema AwsRdsPendingCloudWatchLogsExports#LogTypesToDisable
   */
  readonly logTypesToDisable?: string[];

}

/**
 * @schema WafAction
 */
export interface WafAction {
  /**
   * @schema WafAction#Type
   */
  readonly type?: string;

}

/**
 * @schema WafExcludedRule
 */
export interface WafExcludedRule {
  /**
   * @schema WafExcludedRule#RuleId
   */
  readonly ruleId?: string;

}

/**
 * @schema WafOverrideAction
 */
export interface WafOverrideAction {
  /**
   * @schema WafOverrideAction#Type
   */
  readonly type?: string;

}

/**
 * @schema AwsCloudFrontDistributionOriginS3OriginConfig
 */
export interface AwsCloudFrontDistributionOriginS3OriginConfig {
  /**
   * @schema AwsCloudFrontDistributionOriginS3OriginConfig#OriginAccessIdentity
   */
  readonly originAccessIdentity?: string;

}

/**
 * @schema AwsCloudFrontDistributionOriginGroupFailover
 */
export interface AwsCloudFrontDistributionOriginGroupFailover {
  /**
   * @schema AwsCloudFrontDistributionOriginGroupFailover#StatusCodes
   */
  readonly statusCodes?: AwsCloudFrontDistributionOriginGroupFailoverStatusCodes;

}

/**
 * @schema AwsS3BucketServerSideEncryptionByDefault
 */
export interface AwsS3BucketServerSideEncryptionByDefault {
  /**
   * @schema AwsS3BucketServerSideEncryptionByDefault#SSEAlgorithm
   */
  readonly sseAlgorithm?: string;

  /**
   * @schema AwsS3BucketServerSideEncryptionByDefault#KMSMasterKeyID
   */
  readonly kmsMasterKeyId?: string;

}

/**
 * @schema AwsRdsDbSubnetGroupSubnetAvailabilityZone
 */
export interface AwsRdsDbSubnetGroupSubnetAvailabilityZone {
  /**
   * @schema AwsRdsDbSubnetGroupSubnetAvailabilityZone#Name
   */
  readonly name?: string;

}

/**
 * @schema AwsCloudFrontDistributionOriginGroupFailoverStatusCodes
 */
export interface AwsCloudFrontDistributionOriginGroupFailoverStatusCodes {
  /**
   * @schema AwsCloudFrontDistributionOriginGroupFailoverStatusCodes#Items
   */
  readonly items?: number[];

  /**
   * @schema AwsCloudFrontDistributionOriginGroupFailoverStatusCodes#Quantity
   */
  readonly quantity?: number;

}
