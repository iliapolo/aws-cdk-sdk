/**
 * @schema SecurityHubAcceptInvitationRequest
 */
export interface SecurityHubAcceptInvitationRequest {
  /**
   * @schema SecurityHubAcceptInvitationRequest#MasterId
   */
  readonly masterId: string;

  /**
   * @schema SecurityHubAcceptInvitationRequest#InvitationId
   */
  readonly invitationId: string;

}

/**
 * @schema SecurityHubAcceptInvitationResponse
 */
export interface SecurityHubAcceptInvitationResponse {
}

/**
 * @schema SecurityHubBatchDisableStandardsRequest
 */
export interface SecurityHubBatchDisableStandardsRequest {
  /**
   * @schema SecurityHubBatchDisableStandardsRequest#StandardsSubscriptionArns
   */
  readonly standardsSubscriptionArns: string[];

}

/**
 * @schema SecurityHubBatchDisableStandardsResponse
 */
export interface SecurityHubBatchDisableStandardsResponse {
  /**
   * @schema SecurityHubBatchDisableStandardsResponse#StandardsSubscriptions
   */
  readonly standardsSubscriptions?: SecurityHubStandardsSubscription[];

}

/**
 * @schema SecurityHubBatchEnableStandardsRequest
 */
export interface SecurityHubBatchEnableStandardsRequest {
  /**
   * @schema SecurityHubBatchEnableStandardsRequest#StandardsSubscriptionRequests
   */
  readonly standardsSubscriptionRequests: SecurityHubStandardsSubscriptionRequest[];

}

/**
 * @schema SecurityHubBatchEnableStandardsResponse
 */
export interface SecurityHubBatchEnableStandardsResponse {
  /**
   * @schema SecurityHubBatchEnableStandardsResponse#StandardsSubscriptions
   */
  readonly standardsSubscriptions?: SecurityHubStandardsSubscription[];

}

/**
 * @schema SecurityHubBatchImportFindingsRequest
 */
export interface SecurityHubBatchImportFindingsRequest {
  /**
   * @schema SecurityHubBatchImportFindingsRequest#Findings
   */
  readonly findings: SecurityHubAwsSecurityFinding[];

}

/**
 * @schema SecurityHubBatchImportFindingsResponse
 */
export interface SecurityHubBatchImportFindingsResponse {
  /**
   * @schema SecurityHubBatchImportFindingsResponse#FailedCount
   */
  readonly failedCount: number;

  /**
   * @schema SecurityHubBatchImportFindingsResponse#SuccessCount
   */
  readonly successCount: number;

  /**
   * @schema SecurityHubBatchImportFindingsResponse#FailedFindings
   */
  readonly failedFindings?: SecurityHubImportFindingsError[];

}

/**
 * @schema SecurityHubBatchUpdateFindingsRequest
 */
export interface SecurityHubBatchUpdateFindingsRequest {
  /**
   * @schema SecurityHubBatchUpdateFindingsRequest#FindingIdentifiers
   */
  readonly findingIdentifiers: SecurityHubAwsSecurityFindingIdentifier[];

  /**
   * @schema SecurityHubBatchUpdateFindingsRequest#Note
   */
  readonly note?: SecurityHubNoteUpdate;

  /**
   * @schema SecurityHubBatchUpdateFindingsRequest#Severity
   */
  readonly severity?: SecurityHubSeverityUpdate;

  /**
   * @schema SecurityHubBatchUpdateFindingsRequest#VerificationState
   */
  readonly verificationState?: string;

  /**
   * @schema SecurityHubBatchUpdateFindingsRequest#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema SecurityHubBatchUpdateFindingsRequest#Criticality
   */
  readonly criticality?: number;

  /**
   * @schema SecurityHubBatchUpdateFindingsRequest#Types
   */
  readonly types?: string[];

  /**
   * @schema SecurityHubBatchUpdateFindingsRequest#UserDefinedFields
   */
  readonly userDefinedFields?: { [key: string]: string };

  /**
   * @schema SecurityHubBatchUpdateFindingsRequest#Workflow
   */
  readonly workflow?: SecurityHubWorkflowUpdate;

  /**
   * @schema SecurityHubBatchUpdateFindingsRequest#RelatedFindings
   */
  readonly relatedFindings?: SecurityHubRelatedFinding[];

}

/**
 * @schema SecurityHubBatchUpdateFindingsResponse
 */
export interface SecurityHubBatchUpdateFindingsResponse {
  /**
   * @schema SecurityHubBatchUpdateFindingsResponse#ProcessedFindings
   */
  readonly processedFindings: SecurityHubAwsSecurityFindingIdentifier[];

  /**
   * @schema SecurityHubBatchUpdateFindingsResponse#UnprocessedFindings
   */
  readonly unprocessedFindings: SecurityHubBatchUpdateFindingsUnprocessedFinding[];

}

/**
 * @schema SecurityHubCreateActionTargetRequest
 */
export interface SecurityHubCreateActionTargetRequest {
  /**
   * @schema SecurityHubCreateActionTargetRequest#Name
   */
  readonly name: string;

  /**
   * @schema SecurityHubCreateActionTargetRequest#Description
   */
  readonly description: string;

  /**
   * @schema SecurityHubCreateActionTargetRequest#Id
   */
  readonly id: string;

}

/**
 * @schema SecurityHubCreateActionTargetResponse
 */
export interface SecurityHubCreateActionTargetResponse {
  /**
   * @schema SecurityHubCreateActionTargetResponse#ActionTargetArn
   */
  readonly actionTargetArn: string;

}

/**
 * @schema SecurityHubCreateInsightRequest
 */
export interface SecurityHubCreateInsightRequest {
  /**
   * @schema SecurityHubCreateInsightRequest#Name
   */
  readonly name: string;

  /**
   * @schema SecurityHubCreateInsightRequest#Filters
   */
  readonly filters: SecurityHubAwsSecurityFindingFilters;

  /**
   * @schema SecurityHubCreateInsightRequest#GroupByAttribute
   */
  readonly groupByAttribute: string;

}

/**
 * @schema SecurityHubCreateInsightResponse
 */
export interface SecurityHubCreateInsightResponse {
  /**
   * @schema SecurityHubCreateInsightResponse#InsightArn
   */
  readonly insightArn: string;

}

/**
 * @schema SecurityHubCreateMembersRequest
 */
export interface SecurityHubCreateMembersRequest {
  /**
   * @schema SecurityHubCreateMembersRequest#AccountDetails
   */
  readonly accountDetails: SecurityHubAccountDetails[];

}

/**
 * @schema SecurityHubCreateMembersResponse
 */
export interface SecurityHubCreateMembersResponse {
  /**
   * @schema SecurityHubCreateMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: SecurityHubResult[];

}

/**
 * @schema SecurityHubDeclineInvitationsRequest
 */
export interface SecurityHubDeclineInvitationsRequest {
  /**
   * @schema SecurityHubDeclineInvitationsRequest#AccountIds
   */
  readonly accountIds: string[];

}

/**
 * @schema SecurityHubDeclineInvitationsResponse
 */
export interface SecurityHubDeclineInvitationsResponse {
  /**
   * @schema SecurityHubDeclineInvitationsResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: SecurityHubResult[];

}

/**
 * @schema SecurityHubDeleteActionTargetRequest
 */
export interface SecurityHubDeleteActionTargetRequest {
  /**
   * @schema SecurityHubDeleteActionTargetRequest#ActionTargetArn
   */
  readonly actionTargetArn: string;

}

/**
 * @schema SecurityHubDeleteActionTargetResponse
 */
export interface SecurityHubDeleteActionTargetResponse {
  /**
   * @schema SecurityHubDeleteActionTargetResponse#ActionTargetArn
   */
  readonly actionTargetArn: string;

}

/**
 * @schema SecurityHubDeleteInsightRequest
 */
export interface SecurityHubDeleteInsightRequest {
  /**
   * @schema SecurityHubDeleteInsightRequest#InsightArn
   */
  readonly insightArn: string;

}

/**
 * @schema SecurityHubDeleteInsightResponse
 */
export interface SecurityHubDeleteInsightResponse {
  /**
   * @schema SecurityHubDeleteInsightResponse#InsightArn
   */
  readonly insightArn: string;

}

/**
 * @schema SecurityHubDeleteInvitationsRequest
 */
export interface SecurityHubDeleteInvitationsRequest {
  /**
   * @schema SecurityHubDeleteInvitationsRequest#AccountIds
   */
  readonly accountIds: string[];

}

/**
 * @schema SecurityHubDeleteInvitationsResponse
 */
export interface SecurityHubDeleteInvitationsResponse {
  /**
   * @schema SecurityHubDeleteInvitationsResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: SecurityHubResult[];

}

/**
 * @schema SecurityHubDeleteMembersRequest
 */
export interface SecurityHubDeleteMembersRequest {
  /**
   * @schema SecurityHubDeleteMembersRequest#AccountIds
   */
  readonly accountIds: string[];

}

/**
 * @schema SecurityHubDeleteMembersResponse
 */
export interface SecurityHubDeleteMembersResponse {
  /**
   * @schema SecurityHubDeleteMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: SecurityHubResult[];

}

/**
 * @schema SecurityHubDescribeActionTargetsRequest
 */
export interface SecurityHubDescribeActionTargetsRequest {
  /**
   * @schema SecurityHubDescribeActionTargetsRequest#ActionTargetArns
   */
  readonly actionTargetArns?: string[];

  /**
   * @schema SecurityHubDescribeActionTargetsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SecurityHubDescribeActionTargetsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SecurityHubDescribeActionTargetsResponse
 */
export interface SecurityHubDescribeActionTargetsResponse {
  /**
   * @schema SecurityHubDescribeActionTargetsResponse#ActionTargets
   */
  readonly actionTargets: SecurityHubActionTarget[];

  /**
   * @schema SecurityHubDescribeActionTargetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SecurityHubDescribeHubRequest
 */
export interface SecurityHubDescribeHubRequest {
  /**
   * @schema SecurityHubDescribeHubRequest#HubArn
   */
  readonly hubArn?: string;

}

/**
 * @schema SecurityHubDescribeHubResponse
 */
export interface SecurityHubDescribeHubResponse {
  /**
   * @schema SecurityHubDescribeHubResponse#HubArn
   */
  readonly hubArn?: string;

  /**
   * @schema SecurityHubDescribeHubResponse#SubscribedAt
   */
  readonly subscribedAt?: string;

  /**
   * @schema SecurityHubDescribeHubResponse#AutoEnableControls
   */
  readonly autoEnableControls?: boolean;

}

/**
 * @schema SecurityHubDescribeOrganizationConfigurationRequest
 */
export interface SecurityHubDescribeOrganizationConfigurationRequest {
}

/**
 * @schema SecurityHubDescribeOrganizationConfigurationResponse
 */
export interface SecurityHubDescribeOrganizationConfigurationResponse {
  /**
   * @schema SecurityHubDescribeOrganizationConfigurationResponse#AutoEnable
   */
  readonly autoEnable?: boolean;

  /**
   * @schema SecurityHubDescribeOrganizationConfigurationResponse#MemberAccountLimitReached
   */
  readonly memberAccountLimitReached?: boolean;

}

/**
 * @schema SecurityHubDescribeProductsRequest
 */
export interface SecurityHubDescribeProductsRequest {
  /**
   * @schema SecurityHubDescribeProductsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SecurityHubDescribeProductsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SecurityHubDescribeProductsResponse
 */
export interface SecurityHubDescribeProductsResponse {
  /**
   * @schema SecurityHubDescribeProductsResponse#Products
   */
  readonly products: SecurityHubProduct[];

  /**
   * @schema SecurityHubDescribeProductsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SecurityHubDescribeStandardsRequest
 */
export interface SecurityHubDescribeStandardsRequest {
  /**
   * @schema SecurityHubDescribeStandardsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SecurityHubDescribeStandardsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SecurityHubDescribeStandardsResponse
 */
export interface SecurityHubDescribeStandardsResponse {
  /**
   * @schema SecurityHubDescribeStandardsResponse#Standards
   */
  readonly standards?: SecurityHubStandard[];

  /**
   * @schema SecurityHubDescribeStandardsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SecurityHubDescribeStandardsControlsRequest
 */
export interface SecurityHubDescribeStandardsControlsRequest {
  /**
   * @schema SecurityHubDescribeStandardsControlsRequest#StandardsSubscriptionArn
   */
  readonly standardsSubscriptionArn: string;

  /**
   * @schema SecurityHubDescribeStandardsControlsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SecurityHubDescribeStandardsControlsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SecurityHubDescribeStandardsControlsResponse
 */
export interface SecurityHubDescribeStandardsControlsResponse {
  /**
   * @schema SecurityHubDescribeStandardsControlsResponse#Controls
   */
  readonly controls?: SecurityHubStandardsControl[];

  /**
   * @schema SecurityHubDescribeStandardsControlsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SecurityHubDisableImportFindingsForProductRequest
 */
export interface SecurityHubDisableImportFindingsForProductRequest {
  /**
   * @schema SecurityHubDisableImportFindingsForProductRequest#ProductSubscriptionArn
   */
  readonly productSubscriptionArn: string;

}

/**
 * @schema SecurityHubDisableImportFindingsForProductResponse
 */
export interface SecurityHubDisableImportFindingsForProductResponse {
}

/**
 * @schema SecurityHubDisableOrganizationAdminAccountRequest
 */
export interface SecurityHubDisableOrganizationAdminAccountRequest {
  /**
   * @schema SecurityHubDisableOrganizationAdminAccountRequest#AdminAccountId
   */
  readonly adminAccountId: string;

}

/**
 * @schema SecurityHubDisableOrganizationAdminAccountResponse
 */
export interface SecurityHubDisableOrganizationAdminAccountResponse {
}

/**
 * @schema SecurityHubDisableSecurityHubRequest
 */
export interface SecurityHubDisableSecurityHubRequest {
}

/**
 * @schema SecurityHubDisableSecurityHubResponse
 */
export interface SecurityHubDisableSecurityHubResponse {
}

/**
 * @schema SecurityHubDisassociateFromMasterAccountRequest
 */
export interface SecurityHubDisassociateFromMasterAccountRequest {
}

/**
 * @schema SecurityHubDisassociateFromMasterAccountResponse
 */
export interface SecurityHubDisassociateFromMasterAccountResponse {
}

/**
 * @schema SecurityHubDisassociateMembersRequest
 */
export interface SecurityHubDisassociateMembersRequest {
  /**
   * @schema SecurityHubDisassociateMembersRequest#AccountIds
   */
  readonly accountIds: string[];

}

/**
 * @schema SecurityHubDisassociateMembersResponse
 */
export interface SecurityHubDisassociateMembersResponse {
}

/**
 * @schema SecurityHubEnableImportFindingsForProductRequest
 */
export interface SecurityHubEnableImportFindingsForProductRequest {
  /**
   * @schema SecurityHubEnableImportFindingsForProductRequest#ProductArn
   */
  readonly productArn: string;

}

/**
 * @schema SecurityHubEnableImportFindingsForProductResponse
 */
export interface SecurityHubEnableImportFindingsForProductResponse {
  /**
   * @schema SecurityHubEnableImportFindingsForProductResponse#ProductSubscriptionArn
   */
  readonly productSubscriptionArn?: string;

}

/**
 * @schema SecurityHubEnableOrganizationAdminAccountRequest
 */
export interface SecurityHubEnableOrganizationAdminAccountRequest {
  /**
   * @schema SecurityHubEnableOrganizationAdminAccountRequest#AdminAccountId
   */
  readonly adminAccountId: string;

}

/**
 * @schema SecurityHubEnableOrganizationAdminAccountResponse
 */
export interface SecurityHubEnableOrganizationAdminAccountResponse {
}

/**
 * @schema SecurityHubEnableSecurityHubRequest
 */
export interface SecurityHubEnableSecurityHubRequest {
  /**
   * @schema SecurityHubEnableSecurityHubRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema SecurityHubEnableSecurityHubRequest#EnableDefaultStandards
   */
  readonly enableDefaultStandards?: boolean;

}

/**
 * @schema SecurityHubEnableSecurityHubResponse
 */
export interface SecurityHubEnableSecurityHubResponse {
}

/**
 * @schema SecurityHubGetEnabledStandardsRequest
 */
export interface SecurityHubGetEnabledStandardsRequest {
  /**
   * @schema SecurityHubGetEnabledStandardsRequest#StandardsSubscriptionArns
   */
  readonly standardsSubscriptionArns?: string[];

  /**
   * @schema SecurityHubGetEnabledStandardsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SecurityHubGetEnabledStandardsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SecurityHubGetEnabledStandardsResponse
 */
export interface SecurityHubGetEnabledStandardsResponse {
  /**
   * @schema SecurityHubGetEnabledStandardsResponse#StandardsSubscriptions
   */
  readonly standardsSubscriptions?: SecurityHubStandardsSubscription[];

  /**
   * @schema SecurityHubGetEnabledStandardsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SecurityHubGetFindingsRequest
 */
export interface SecurityHubGetFindingsRequest {
  /**
   * @schema SecurityHubGetFindingsRequest#Filters
   */
  readonly filters?: SecurityHubAwsSecurityFindingFilters;

  /**
   * @schema SecurityHubGetFindingsRequest#SortCriteria
   */
  readonly sortCriteria?: SecurityHubSortCriterion[];

  /**
   * @schema SecurityHubGetFindingsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SecurityHubGetFindingsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SecurityHubGetFindingsResponse
 */
export interface SecurityHubGetFindingsResponse {
  /**
   * @schema SecurityHubGetFindingsResponse#Findings
   */
  readonly findings: SecurityHubAwsSecurityFinding[];

  /**
   * @schema SecurityHubGetFindingsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SecurityHubGetInsightResultsRequest
 */
export interface SecurityHubGetInsightResultsRequest {
  /**
   * @schema SecurityHubGetInsightResultsRequest#InsightArn
   */
  readonly insightArn: string;

}

/**
 * @schema SecurityHubGetInsightResultsResponse
 */
export interface SecurityHubGetInsightResultsResponse {
  /**
   * @schema SecurityHubGetInsightResultsResponse#InsightResults
   */
  readonly insightResults: SecurityHubInsightResults;

}

/**
 * @schema SecurityHubGetInsightsRequest
 */
export interface SecurityHubGetInsightsRequest {
  /**
   * @schema SecurityHubGetInsightsRequest#InsightArns
   */
  readonly insightArns?: string[];

  /**
   * @schema SecurityHubGetInsightsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SecurityHubGetInsightsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SecurityHubGetInsightsResponse
 */
export interface SecurityHubGetInsightsResponse {
  /**
   * @schema SecurityHubGetInsightsResponse#Insights
   */
  readonly insights: SecurityHubInsight[];

  /**
   * @schema SecurityHubGetInsightsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SecurityHubGetInvitationsCountRequest
 */
export interface SecurityHubGetInvitationsCountRequest {
}

/**
 * @schema SecurityHubGetInvitationsCountResponse
 */
export interface SecurityHubGetInvitationsCountResponse {
  /**
   * @schema SecurityHubGetInvitationsCountResponse#InvitationsCount
   */
  readonly invitationsCount?: number;

}

/**
 * @schema SecurityHubGetMasterAccountRequest
 */
export interface SecurityHubGetMasterAccountRequest {
}

/**
 * @schema SecurityHubGetMasterAccountResponse
 */
export interface SecurityHubGetMasterAccountResponse {
  /**
   * @schema SecurityHubGetMasterAccountResponse#Master
   */
  readonly master?: SecurityHubInvitation;

}

/**
 * @schema SecurityHubGetMembersRequest
 */
export interface SecurityHubGetMembersRequest {
  /**
   * @schema SecurityHubGetMembersRequest#AccountIds
   */
  readonly accountIds: string[];

}

/**
 * @schema SecurityHubGetMembersResponse
 */
export interface SecurityHubGetMembersResponse {
  /**
   * @schema SecurityHubGetMembersResponse#Members
   */
  readonly members?: SecurityHubMember[];

  /**
   * @schema SecurityHubGetMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: SecurityHubResult[];

}

/**
 * @schema SecurityHubInviteMembersRequest
 */
export interface SecurityHubInviteMembersRequest {
  /**
   * @schema SecurityHubInviteMembersRequest#AccountIds
   */
  readonly accountIds: string[];

}

/**
 * @schema SecurityHubInviteMembersResponse
 */
export interface SecurityHubInviteMembersResponse {
  /**
   * @schema SecurityHubInviteMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: SecurityHubResult[];

}

/**
 * @schema SecurityHubListEnabledProductsForImportRequest
 */
export interface SecurityHubListEnabledProductsForImportRequest {
  /**
   * @schema SecurityHubListEnabledProductsForImportRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SecurityHubListEnabledProductsForImportRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SecurityHubListEnabledProductsForImportResponse
 */
export interface SecurityHubListEnabledProductsForImportResponse {
  /**
   * @schema SecurityHubListEnabledProductsForImportResponse#ProductSubscriptions
   */
  readonly productSubscriptions?: string[];

  /**
   * @schema SecurityHubListEnabledProductsForImportResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SecurityHubListInvitationsRequest
 */
export interface SecurityHubListInvitationsRequest {
  /**
   * @schema SecurityHubListInvitationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SecurityHubListInvitationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SecurityHubListInvitationsResponse
 */
export interface SecurityHubListInvitationsResponse {
  /**
   * @schema SecurityHubListInvitationsResponse#Invitations
   */
  readonly invitations?: SecurityHubInvitation[];

  /**
   * @schema SecurityHubListInvitationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SecurityHubListMembersRequest
 */
export interface SecurityHubListMembersRequest {
  /**
   * @schema SecurityHubListMembersRequest#OnlyAssociated
   */
  readonly onlyAssociated?: boolean;

  /**
   * @schema SecurityHubListMembersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SecurityHubListMembersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SecurityHubListMembersResponse
 */
export interface SecurityHubListMembersResponse {
  /**
   * @schema SecurityHubListMembersResponse#Members
   */
  readonly members?: SecurityHubMember[];

  /**
   * @schema SecurityHubListMembersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SecurityHubListOrganizationAdminAccountsRequest
 */
export interface SecurityHubListOrganizationAdminAccountsRequest {
  /**
   * @schema SecurityHubListOrganizationAdminAccountsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SecurityHubListOrganizationAdminAccountsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SecurityHubListOrganizationAdminAccountsResponse
 */
export interface SecurityHubListOrganizationAdminAccountsResponse {
  /**
   * @schema SecurityHubListOrganizationAdminAccountsResponse#AdminAccounts
   */
  readonly adminAccounts?: SecurityHubAdminAccount[];

  /**
   * @schema SecurityHubListOrganizationAdminAccountsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SecurityHubListTagsForResourceRequest
 */
export interface SecurityHubListTagsForResourceRequest {
  /**
   * @schema SecurityHubListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema SecurityHubListTagsForResourceResponse
 */
export interface SecurityHubListTagsForResourceResponse {
  /**
   * @schema SecurityHubListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema SecurityHubTagResourceRequest
 */
export interface SecurityHubTagResourceRequest {
  /**
   * @schema SecurityHubTagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema SecurityHubTagResourceRequest#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema SecurityHubTagResourceResponse
 */
export interface SecurityHubTagResourceResponse {
}

/**
 * @schema SecurityHubUntagResourceRequest
 */
export interface SecurityHubUntagResourceRequest {
  /**
   * @schema SecurityHubUntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema SecurityHubUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema SecurityHubUntagResourceResponse
 */
export interface SecurityHubUntagResourceResponse {
}

/**
 * @schema SecurityHubUpdateActionTargetRequest
 */
export interface SecurityHubUpdateActionTargetRequest {
  /**
   * @schema SecurityHubUpdateActionTargetRequest#ActionTargetArn
   */
  readonly actionTargetArn: string;

  /**
   * @schema SecurityHubUpdateActionTargetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubUpdateActionTargetRequest#Description
   */
  readonly description?: string;

}

/**
 * @schema SecurityHubUpdateActionTargetResponse
 */
export interface SecurityHubUpdateActionTargetResponse {
}

/**
 * @schema SecurityHubUpdateFindingsRequest
 */
export interface SecurityHubUpdateFindingsRequest {
  /**
   * @schema SecurityHubUpdateFindingsRequest#Filters
   */
  readonly filters: SecurityHubAwsSecurityFindingFilters;

  /**
   * @schema SecurityHubUpdateFindingsRequest#Note
   */
  readonly note?: SecurityHubNoteUpdate;

  /**
   * @schema SecurityHubUpdateFindingsRequest#RecordState
   */
  readonly recordState?: string;

}

/**
 * @schema SecurityHubUpdateFindingsResponse
 */
export interface SecurityHubUpdateFindingsResponse {
}

/**
 * @schema SecurityHubUpdateInsightRequest
 */
export interface SecurityHubUpdateInsightRequest {
  /**
   * @schema SecurityHubUpdateInsightRequest#InsightArn
   */
  readonly insightArn: string;

  /**
   * @schema SecurityHubUpdateInsightRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubUpdateInsightRequest#Filters
   */
  readonly filters?: SecurityHubAwsSecurityFindingFilters;

  /**
   * @schema SecurityHubUpdateInsightRequest#GroupByAttribute
   */
  readonly groupByAttribute?: string;

}

/**
 * @schema SecurityHubUpdateInsightResponse
 */
export interface SecurityHubUpdateInsightResponse {
}

/**
 * @schema SecurityHubUpdateOrganizationConfigurationRequest
 */
export interface SecurityHubUpdateOrganizationConfigurationRequest {
  /**
   * @schema SecurityHubUpdateOrganizationConfigurationRequest#AutoEnable
   */
  readonly autoEnable: boolean;

}

/**
 * @schema SecurityHubUpdateOrganizationConfigurationResponse
 */
export interface SecurityHubUpdateOrganizationConfigurationResponse {
}

/**
 * @schema SecurityHubUpdateSecurityHubConfigurationRequest
 */
export interface SecurityHubUpdateSecurityHubConfigurationRequest {
  /**
   * @schema SecurityHubUpdateSecurityHubConfigurationRequest#AutoEnableControls
   */
  readonly autoEnableControls?: boolean;

}

/**
 * @schema SecurityHubUpdateSecurityHubConfigurationResponse
 */
export interface SecurityHubUpdateSecurityHubConfigurationResponse {
}

/**
 * @schema SecurityHubUpdateStandardsControlRequest
 */
export interface SecurityHubUpdateStandardsControlRequest {
  /**
   * @schema SecurityHubUpdateStandardsControlRequest#StandardsControlArn
   */
  readonly standardsControlArn: string;

  /**
   * @schema SecurityHubUpdateStandardsControlRequest#ControlStatus
   */
  readonly controlStatus?: string;

  /**
   * @schema SecurityHubUpdateStandardsControlRequest#DisabledReason
   */
  readonly disabledReason?: string;

}

/**
 * @schema SecurityHubUpdateStandardsControlResponse
 */
export interface SecurityHubUpdateStandardsControlResponse {
}

/**
 * @schema SecurityHubStandardsSubscription
 */
export interface SecurityHubStandardsSubscription {
  /**
   * @schema SecurityHubStandardsSubscription#StandardsSubscriptionArn
   */
  readonly standardsSubscriptionArn: string;

  /**
   * @schema SecurityHubStandardsSubscription#StandardsArn
   */
  readonly standardsArn: string;

  /**
   * @schema SecurityHubStandardsSubscription#StandardsInput
   */
  readonly standardsInput: { [key: string]: string };

  /**
   * @schema SecurityHubStandardsSubscription#StandardsStatus
   */
  readonly standardsStatus: string;

}

/**
 * @schema SecurityHubStandardsSubscriptionRequest
 */
export interface SecurityHubStandardsSubscriptionRequest {
  /**
   * @schema SecurityHubStandardsSubscriptionRequest#StandardsArn
   */
  readonly standardsArn: string;

  /**
   * @schema SecurityHubStandardsSubscriptionRequest#StandardsInput
   */
  readonly standardsInput?: { [key: string]: string };

}

/**
 * @schema SecurityHubAwsSecurityFinding
 */
export interface SecurityHubAwsSecurityFinding {
  /**
   * @schema SecurityHubAwsSecurityFinding#SchemaVersion
   */
  readonly schemaVersion: string;

  /**
   * @schema SecurityHubAwsSecurityFinding#Id
   */
  readonly id: string;

  /**
   * @schema SecurityHubAwsSecurityFinding#ProductArn
   */
  readonly productArn: string;

  /**
   * @schema SecurityHubAwsSecurityFinding#GeneratorId
   */
  readonly generatorId: string;

  /**
   * @schema SecurityHubAwsSecurityFinding#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema SecurityHubAwsSecurityFinding#Types
   */
  readonly types: string[];

  /**
   * @schema SecurityHubAwsSecurityFinding#FirstObservedAt
   */
  readonly firstObservedAt?: string;

  /**
   * @schema SecurityHubAwsSecurityFinding#LastObservedAt
   */
  readonly lastObservedAt?: string;

  /**
   * @schema SecurityHubAwsSecurityFinding#CreatedAt
   */
  readonly createdAt: string;

  /**
   * @schema SecurityHubAwsSecurityFinding#UpdatedAt
   */
  readonly updatedAt: string;

  /**
   * @schema SecurityHubAwsSecurityFinding#Severity
   */
  readonly severity: SecurityHubSeverity;

  /**
   * @schema SecurityHubAwsSecurityFinding#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema SecurityHubAwsSecurityFinding#Criticality
   */
  readonly criticality?: number;

  /**
   * @schema SecurityHubAwsSecurityFinding#Title
   */
  readonly title: string;

  /**
   * @schema SecurityHubAwsSecurityFinding#Description
   */
  readonly description: string;

  /**
   * @schema SecurityHubAwsSecurityFinding#Remediation
   */
  readonly remediation?: SecurityHubRemediation;

  /**
   * @schema SecurityHubAwsSecurityFinding#SourceUrl
   */
  readonly sourceUrl?: string;

  /**
   * @schema SecurityHubAwsSecurityFinding#ProductFields
   */
  readonly productFields?: { [key: string]: string };

  /**
   * @schema SecurityHubAwsSecurityFinding#UserDefinedFields
   */
  readonly userDefinedFields?: { [key: string]: string };

  /**
   * @schema SecurityHubAwsSecurityFinding#Malware
   */
  readonly malware?: SecurityHubMalware[];

  /**
   * @schema SecurityHubAwsSecurityFinding#Network
   */
  readonly network?: SecurityHubNetwork;

  /**
   * @schema SecurityHubAwsSecurityFinding#NetworkPath
   */
  readonly networkPath?: SecurityHubNetworkPathComponent[];

  /**
   * @schema SecurityHubAwsSecurityFinding#Process
   */
  readonly process?: SecurityHubProcessDetails;

  /**
   * @schema SecurityHubAwsSecurityFinding#ThreatIntelIndicators
   */
  readonly threatIntelIndicators?: SecurityHubThreatIntelIndicator[];

  /**
   * @schema SecurityHubAwsSecurityFinding#Resources
   */
  readonly resources: SecurityHubResource[];

  /**
   * @schema SecurityHubAwsSecurityFinding#Compliance
   */
  readonly compliance?: SecurityHubCompliance;

  /**
   * @schema SecurityHubAwsSecurityFinding#VerificationState
   */
  readonly verificationState?: string;

  /**
   * @schema SecurityHubAwsSecurityFinding#WorkflowState
   */
  readonly workflowState?: string;

  /**
   * @schema SecurityHubAwsSecurityFinding#Workflow
   */
  readonly workflow?: SecurityHubWorkflow;

  /**
   * @schema SecurityHubAwsSecurityFinding#RecordState
   */
  readonly recordState?: string;

  /**
   * @schema SecurityHubAwsSecurityFinding#RelatedFindings
   */
  readonly relatedFindings?: SecurityHubRelatedFinding[];

  /**
   * @schema SecurityHubAwsSecurityFinding#Note
   */
  readonly note?: SecurityHubNote;

  /**
   * @schema SecurityHubAwsSecurityFinding#Vulnerabilities
   */
  readonly vulnerabilities?: SecurityHubVulnerability[];

  /**
   * @schema SecurityHubAwsSecurityFinding#PatchSummary
   */
  readonly patchSummary?: SecurityHubPatchSummary;

}

/**
 * @schema SecurityHubImportFindingsError
 */
export interface SecurityHubImportFindingsError {
  /**
   * @schema SecurityHubImportFindingsError#Id
   */
  readonly id: string;

  /**
   * @schema SecurityHubImportFindingsError#ErrorCode
   */
  readonly errorCode: string;

  /**
   * @schema SecurityHubImportFindingsError#ErrorMessage
   */
  readonly errorMessage: string;

}

/**
 * @schema SecurityHubAwsSecurityFindingIdentifier
 */
export interface SecurityHubAwsSecurityFindingIdentifier {
  /**
   * @schema SecurityHubAwsSecurityFindingIdentifier#Id
   */
  readonly id: string;

  /**
   * @schema SecurityHubAwsSecurityFindingIdentifier#ProductArn
   */
  readonly productArn: string;

}

/**
 * @schema SecurityHubNoteUpdate
 */
export interface SecurityHubNoteUpdate {
  /**
   * @schema SecurityHubNoteUpdate#Text
   */
  readonly text: string;

  /**
   * @schema SecurityHubNoteUpdate#UpdatedBy
   */
  readonly updatedBy: string;

}

/**
 * @schema SecurityHubSeverityUpdate
 */
export interface SecurityHubSeverityUpdate {
  /**
   * @schema SecurityHubSeverityUpdate#Normalized
   */
  readonly normalized?: number;

  /**
   * @schema SecurityHubSeverityUpdate#Product
   */
  readonly product?: number;

  /**
   * @schema SecurityHubSeverityUpdate#Label
   */
  readonly label?: string;

}

/**
 * @schema SecurityHubWorkflowUpdate
 */
export interface SecurityHubWorkflowUpdate {
  /**
   * @schema SecurityHubWorkflowUpdate#Status
   */
  readonly status?: string;

}

/**
 * @schema SecurityHubRelatedFinding
 */
export interface SecurityHubRelatedFinding {
  /**
   * @schema SecurityHubRelatedFinding#ProductArn
   */
  readonly productArn: string;

  /**
   * @schema SecurityHubRelatedFinding#Id
   */
  readonly id: string;

}

/**
 * @schema SecurityHubBatchUpdateFindingsUnprocessedFinding
 */
export interface SecurityHubBatchUpdateFindingsUnprocessedFinding {
  /**
   * @schema SecurityHubBatchUpdateFindingsUnprocessedFinding#FindingIdentifier
   */
  readonly findingIdentifier: SecurityHubAwsSecurityFindingIdentifier;

  /**
   * @schema SecurityHubBatchUpdateFindingsUnprocessedFinding#ErrorCode
   */
  readonly errorCode: string;

  /**
   * @schema SecurityHubBatchUpdateFindingsUnprocessedFinding#ErrorMessage
   */
  readonly errorMessage: string;

}

/**
 * @schema SecurityHubAwsSecurityFindingFilters
 */
export interface SecurityHubAwsSecurityFindingFilters {
  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ProductArn
   */
  readonly productArn?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#AwsAccountId
   */
  readonly awsAccountId?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#Id
   */
  readonly id?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#GeneratorId
   */
  readonly generatorId?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#Type
   */
  readonly type?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#FirstObservedAt
   */
  readonly firstObservedAt?: SecurityHubDateFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#LastObservedAt
   */
  readonly lastObservedAt?: SecurityHubDateFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#CreatedAt
   */
  readonly createdAt?: SecurityHubDateFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#UpdatedAt
   */
  readonly updatedAt?: SecurityHubDateFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#SeverityProduct
   */
  readonly severityProduct?: SecurityHubNumberFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#SeverityNormalized
   */
  readonly severityNormalized?: SecurityHubNumberFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#SeverityLabel
   */
  readonly severityLabel?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#Confidence
   */
  readonly confidence?: SecurityHubNumberFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#Criticality
   */
  readonly criticality?: SecurityHubNumberFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#Title
   */
  readonly title?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#Description
   */
  readonly description?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#RecommendationText
   */
  readonly recommendationText?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#SourceUrl
   */
  readonly sourceUrl?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ProductFields
   */
  readonly productFields?: SecurityHubMapFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ProductName
   */
  readonly productName?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#CompanyName
   */
  readonly companyName?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#UserDefinedFields
   */
  readonly userDefinedFields?: SecurityHubMapFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#MalwareName
   */
  readonly malwareName?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#MalwareType
   */
  readonly malwareType?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#MalwarePath
   */
  readonly malwarePath?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#MalwareState
   */
  readonly malwareState?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#NetworkDirection
   */
  readonly networkDirection?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#NetworkProtocol
   */
  readonly networkProtocol?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#NetworkSourceIpV4
   */
  readonly networkSourceIpV4?: SecurityHubIpFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#NetworkSourceIpV6
   */
  readonly networkSourceIpV6?: SecurityHubIpFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#NetworkSourcePort
   */
  readonly networkSourcePort?: SecurityHubNumberFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#NetworkSourceDomain
   */
  readonly networkSourceDomain?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#NetworkSourceMac
   */
  readonly networkSourceMac?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#NetworkDestinationIpV4
   */
  readonly networkDestinationIpV4?: SecurityHubIpFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#NetworkDestinationIpV6
   */
  readonly networkDestinationIpV6?: SecurityHubIpFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#NetworkDestinationPort
   */
  readonly networkDestinationPort?: SecurityHubNumberFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#NetworkDestinationDomain
   */
  readonly networkDestinationDomain?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ProcessName
   */
  readonly processName?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ProcessPath
   */
  readonly processPath?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ProcessPid
   */
  readonly processPid?: SecurityHubNumberFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ProcessParentPid
   */
  readonly processParentPid?: SecurityHubNumberFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ProcessLaunchedAt
   */
  readonly processLaunchedAt?: SecurityHubDateFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ProcessTerminatedAt
   */
  readonly processTerminatedAt?: SecurityHubDateFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ThreatIntelIndicatorType
   */
  readonly threatIntelIndicatorType?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ThreatIntelIndicatorValue
   */
  readonly threatIntelIndicatorValue?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ThreatIntelIndicatorCategory
   */
  readonly threatIntelIndicatorCategory?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ThreatIntelIndicatorLastObservedAt
   */
  readonly threatIntelIndicatorLastObservedAt?: SecurityHubDateFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ThreatIntelIndicatorSource
   */
  readonly threatIntelIndicatorSource?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ThreatIntelIndicatorSourceUrl
   */
  readonly threatIntelIndicatorSourceUrl?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceType
   */
  readonly resourceType?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceId
   */
  readonly resourceId?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourcePartition
   */
  readonly resourcePartition?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceRegion
   */
  readonly resourceRegion?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceTags
   */
  readonly resourceTags?: SecurityHubMapFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceAwsEc2InstanceType
   */
  readonly resourceAwsEc2InstanceType?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceAwsEc2InstanceImageId
   */
  readonly resourceAwsEc2InstanceImageId?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceAwsEc2InstanceIpV4Addresses
   */
  readonly resourceAwsEc2InstanceIpV4Addresses?: SecurityHubIpFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceAwsEc2InstanceIpV6Addresses
   */
  readonly resourceAwsEc2InstanceIpV6Addresses?: SecurityHubIpFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceAwsEc2InstanceKeyName
   */
  readonly resourceAwsEc2InstanceKeyName?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceAwsEc2InstanceIamInstanceProfileArn
   */
  readonly resourceAwsEc2InstanceIamInstanceProfileArn?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceAwsEc2InstanceVpcId
   */
  readonly resourceAwsEc2InstanceVpcId?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceAwsEc2InstanceSubnetId
   */
  readonly resourceAwsEc2InstanceSubnetId?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceAwsEc2InstanceLaunchedAt
   */
  readonly resourceAwsEc2InstanceLaunchedAt?: SecurityHubDateFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceAwsS3BucketOwnerId
   */
  readonly resourceAwsS3BucketOwnerId?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceAwsS3BucketOwnerName
   */
  readonly resourceAwsS3BucketOwnerName?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceAwsIamAccessKeyUserName
   */
  readonly resourceAwsIamAccessKeyUserName?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceAwsIamAccessKeyStatus
   */
  readonly resourceAwsIamAccessKeyStatus?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceAwsIamAccessKeyCreatedAt
   */
  readonly resourceAwsIamAccessKeyCreatedAt?: SecurityHubDateFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceContainerName
   */
  readonly resourceContainerName?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceContainerImageId
   */
  readonly resourceContainerImageId?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceContainerImageName
   */
  readonly resourceContainerImageName?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceContainerLaunchedAt
   */
  readonly resourceContainerLaunchedAt?: SecurityHubDateFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ResourceDetailsOther
   */
  readonly resourceDetailsOther?: SecurityHubMapFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#ComplianceStatus
   */
  readonly complianceStatus?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#VerificationState
   */
  readonly verificationState?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#WorkflowState
   */
  readonly workflowState?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#WorkflowStatus
   */
  readonly workflowStatus?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#RecordState
   */
  readonly recordState?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#RelatedFindingsProductArn
   */
  readonly relatedFindingsProductArn?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#RelatedFindingsId
   */
  readonly relatedFindingsId?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#NoteText
   */
  readonly noteText?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#NoteUpdatedAt
   */
  readonly noteUpdatedAt?: SecurityHubDateFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#NoteUpdatedBy
   */
  readonly noteUpdatedBy?: SecurityHubStringFilter[];

  /**
   * @schema SecurityHubAwsSecurityFindingFilters#Keyword
   */
  readonly keyword?: SecurityHubKeywordFilter[];

}

/**
 * @schema SecurityHubAccountDetails
 */
export interface SecurityHubAccountDetails {
  /**
   * @schema SecurityHubAccountDetails#AccountId
   */
  readonly accountId: string;

  /**
   * @schema SecurityHubAccountDetails#Email
   */
  readonly email?: string;

}

/**
 * @schema SecurityHubResult
 */
export interface SecurityHubResult {
  /**
   * @schema SecurityHubResult#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema SecurityHubResult#ProcessingResult
   */
  readonly processingResult?: string;

}

/**
 * @schema SecurityHubActionTarget
 */
export interface SecurityHubActionTarget {
  /**
   * @schema SecurityHubActionTarget#ActionTargetArn
   */
  readonly actionTargetArn: string;

  /**
   * @schema SecurityHubActionTarget#Name
   */
  readonly name: string;

  /**
   * @schema SecurityHubActionTarget#Description
   */
  readonly description: string;

}

/**
 * @schema SecurityHubProduct
 */
export interface SecurityHubProduct {
  /**
   * @schema SecurityHubProduct#ProductArn
   */
  readonly productArn: string;

  /**
   * @schema SecurityHubProduct#ProductName
   */
  readonly productName?: string;

  /**
   * @schema SecurityHubProduct#CompanyName
   */
  readonly companyName?: string;

  /**
   * @schema SecurityHubProduct#Description
   */
  readonly description?: string;

  /**
   * @schema SecurityHubProduct#Categories
   */
  readonly categories?: string[];

  /**
   * @schema SecurityHubProduct#IntegrationTypes
   */
  readonly integrationTypes?: string[];

  /**
   * @schema SecurityHubProduct#MarketplaceUrl
   */
  readonly marketplaceUrl?: string;

  /**
   * @schema SecurityHubProduct#ActivationUrl
   */
  readonly activationUrl?: string;

  /**
   * @schema SecurityHubProduct#ProductSubscriptionResourcePolicy
   */
  readonly productSubscriptionResourcePolicy?: string;

}

/**
 * @schema SecurityHubStandard
 */
export interface SecurityHubStandard {
  /**
   * @schema SecurityHubStandard#StandardsArn
   */
  readonly standardsArn?: string;

  /**
   * @schema SecurityHubStandard#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubStandard#Description
   */
  readonly description?: string;

  /**
   * @schema SecurityHubStandard#EnabledByDefault
   */
  readonly enabledByDefault?: boolean;

}

/**
 * @schema SecurityHubStandardsControl
 */
export interface SecurityHubStandardsControl {
  /**
   * @schema SecurityHubStandardsControl#StandardsControlArn
   */
  readonly standardsControlArn?: string;

  /**
   * @schema SecurityHubStandardsControl#ControlStatus
   */
  readonly controlStatus?: string;

  /**
   * @schema SecurityHubStandardsControl#DisabledReason
   */
  readonly disabledReason?: string;

  /**
   * @schema SecurityHubStandardsControl#ControlStatusUpdatedAt
   */
  readonly controlStatusUpdatedAt?: string;

  /**
   * @schema SecurityHubStandardsControl#ControlId
   */
  readonly controlId?: string;

  /**
   * @schema SecurityHubStandardsControl#Title
   */
  readonly title?: string;

  /**
   * @schema SecurityHubStandardsControl#Description
   */
  readonly description?: string;

  /**
   * @schema SecurityHubStandardsControl#RemediationUrl
   */
  readonly remediationUrl?: string;

  /**
   * @schema SecurityHubStandardsControl#SeverityRating
   */
  readonly severityRating?: string;

  /**
   * @schema SecurityHubStandardsControl#RelatedRequirements
   */
  readonly relatedRequirements?: string[];

}

/**
 * @schema SecurityHubSortCriterion
 */
export interface SecurityHubSortCriterion {
  /**
   * @schema SecurityHubSortCriterion#Field
   */
  readonly field?: string;

  /**
   * @schema SecurityHubSortCriterion#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * @schema SecurityHubInsightResults
 */
export interface SecurityHubInsightResults {
  /**
   * @schema SecurityHubInsightResults#InsightArn
   */
  readonly insightArn: string;

  /**
   * @schema SecurityHubInsightResults#GroupByAttribute
   */
  readonly groupByAttribute: string;

  /**
   * @schema SecurityHubInsightResults#ResultValues
   */
  readonly resultValues: SecurityHubInsightResultValue[];

}

/**
 * @schema SecurityHubInsight
 */
export interface SecurityHubInsight {
  /**
   * @schema SecurityHubInsight#InsightArn
   */
  readonly insightArn: string;

  /**
   * @schema SecurityHubInsight#Name
   */
  readonly name: string;

  /**
   * @schema SecurityHubInsight#Filters
   */
  readonly filters: SecurityHubAwsSecurityFindingFilters;

  /**
   * @schema SecurityHubInsight#GroupByAttribute
   */
  readonly groupByAttribute: string;

}

/**
 * @schema SecurityHubInvitation
 */
export interface SecurityHubInvitation {
  /**
   * @schema SecurityHubInvitation#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema SecurityHubInvitation#InvitationId
   */
  readonly invitationId?: string;

  /**
   * @schema SecurityHubInvitation#InvitedAt
   */
  readonly invitedAt?: string;

  /**
   * @schema SecurityHubInvitation#MemberStatus
   */
  readonly memberStatus?: string;

}

/**
 * @schema SecurityHubMember
 */
export interface SecurityHubMember {
  /**
   * @schema SecurityHubMember#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema SecurityHubMember#Email
   */
  readonly email?: string;

  /**
   * @schema SecurityHubMember#MasterId
   */
  readonly masterId?: string;

  /**
   * @schema SecurityHubMember#MemberStatus
   */
  readonly memberStatus?: string;

  /**
   * @schema SecurityHubMember#InvitedAt
   */
  readonly invitedAt?: string;

  /**
   * @schema SecurityHubMember#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema SecurityHubAdminAccount
 */
export interface SecurityHubAdminAccount {
  /**
   * @schema SecurityHubAdminAccount#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema SecurityHubAdminAccount#Status
   */
  readonly status?: string;

}

/**
 * @schema SecurityHubSeverity
 */
export interface SecurityHubSeverity {
  /**
   * @schema SecurityHubSeverity#Product
   */
  readonly product?: number;

  /**
   * @schema SecurityHubSeverity#Label
   */
  readonly label?: string;

  /**
   * @schema SecurityHubSeverity#Normalized
   */
  readonly normalized?: number;

  /**
   * @schema SecurityHubSeverity#Original
   */
  readonly original?: string;

}

/**
 * @schema SecurityHubRemediation
 */
export interface SecurityHubRemediation {
  /**
   * @schema SecurityHubRemediation#Recommendation
   */
  readonly recommendation?: SecurityHubRecommendation;

}

/**
 * @schema SecurityHubMalware
 */
export interface SecurityHubMalware {
  /**
   * @schema SecurityHubMalware#Name
   */
  readonly name: string;

  /**
   * @schema SecurityHubMalware#Type
   */
  readonly type?: string;

  /**
   * @schema SecurityHubMalware#Path
   */
  readonly path?: string;

  /**
   * @schema SecurityHubMalware#State
   */
  readonly state?: string;

}

/**
 * @schema SecurityHubNetwork
 */
export interface SecurityHubNetwork {
  /**
   * @schema SecurityHubNetwork#Direction
   */
  readonly direction?: string;

  /**
   * @schema SecurityHubNetwork#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema SecurityHubNetwork#OpenPortRange
   */
  readonly openPortRange?: SecurityHubPortRange;

  /**
   * @schema SecurityHubNetwork#SourceIpV4
   */
  readonly sourceIpV4?: string;

  /**
   * @schema SecurityHubNetwork#SourceIpV6
   */
  readonly sourceIpV6?: string;

  /**
   * @schema SecurityHubNetwork#SourcePort
   */
  readonly sourcePort?: number;

  /**
   * @schema SecurityHubNetwork#SourceDomain
   */
  readonly sourceDomain?: string;

  /**
   * @schema SecurityHubNetwork#SourceMac
   */
  readonly sourceMac?: string;

  /**
   * @schema SecurityHubNetwork#DestinationIpV4
   */
  readonly destinationIpV4?: string;

  /**
   * @schema SecurityHubNetwork#DestinationIpV6
   */
  readonly destinationIpV6?: string;

  /**
   * @schema SecurityHubNetwork#DestinationPort
   */
  readonly destinationPort?: number;

  /**
   * @schema SecurityHubNetwork#DestinationDomain
   */
  readonly destinationDomain?: string;

}

/**
 * @schema SecurityHubNetworkPathComponent
 */
export interface SecurityHubNetworkPathComponent {
  /**
   * @schema SecurityHubNetworkPathComponent#ComponentId
   */
  readonly componentId?: string;

  /**
   * @schema SecurityHubNetworkPathComponent#ComponentType
   */
  readonly componentType?: string;

  /**
   * @schema SecurityHubNetworkPathComponent#Egress
   */
  readonly egress?: SecurityHubNetworkHeader;

  /**
   * @schema SecurityHubNetworkPathComponent#Ingress
   */
  readonly ingress?: SecurityHubNetworkHeader;

}

/**
 * @schema SecurityHubProcessDetails
 */
export interface SecurityHubProcessDetails {
  /**
   * @schema SecurityHubProcessDetails#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubProcessDetails#Path
   */
  readonly path?: string;

  /**
   * @schema SecurityHubProcessDetails#Pid
   */
  readonly pid?: number;

  /**
   * @schema SecurityHubProcessDetails#ParentPid
   */
  readonly parentPid?: number;

  /**
   * @schema SecurityHubProcessDetails#LaunchedAt
   */
  readonly launchedAt?: string;

  /**
   * @schema SecurityHubProcessDetails#TerminatedAt
   */
  readonly terminatedAt?: string;

}

/**
 * @schema SecurityHubThreatIntelIndicator
 */
export interface SecurityHubThreatIntelIndicator {
  /**
   * @schema SecurityHubThreatIntelIndicator#Type
   */
  readonly type?: string;

  /**
   * @schema SecurityHubThreatIntelIndicator#Value
   */
  readonly value?: string;

  /**
   * @schema SecurityHubThreatIntelIndicator#Category
   */
  readonly category?: string;

  /**
   * @schema SecurityHubThreatIntelIndicator#LastObservedAt
   */
  readonly lastObservedAt?: string;

  /**
   * @schema SecurityHubThreatIntelIndicator#Source
   */
  readonly source?: string;

  /**
   * @schema SecurityHubThreatIntelIndicator#SourceUrl
   */
  readonly sourceUrl?: string;

}

/**
 * @schema SecurityHubResource
 */
export interface SecurityHubResource {
  /**
   * @schema SecurityHubResource#Type
   */
  readonly type: string;

  /**
   * @schema SecurityHubResource#Id
   */
  readonly id: string;

  /**
   * @schema SecurityHubResource#Partition
   */
  readonly partition?: string;

  /**
   * @schema SecurityHubResource#Region
   */
  readonly region?: string;

  /**
   * @schema SecurityHubResource#ResourceRole
   */
  readonly resourceRole?: string;

  /**
   * @schema SecurityHubResource#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema SecurityHubResource#Details
   */
  readonly details?: SecurityHubResourceDetails;

}

/**
 * @schema SecurityHubCompliance
 */
export interface SecurityHubCompliance {
  /**
   * @schema SecurityHubCompliance#Status
   */
  readonly status?: string;

  /**
   * @schema SecurityHubCompliance#RelatedRequirements
   */
  readonly relatedRequirements?: string[];

  /**
   * @schema SecurityHubCompliance#StatusReasons
   */
  readonly statusReasons?: SecurityHubStatusReason[];

}

/**
 * @schema SecurityHubWorkflow
 */
export interface SecurityHubWorkflow {
  /**
   * @schema SecurityHubWorkflow#Status
   */
  readonly status?: string;

}

/**
 * @schema SecurityHubNote
 */
export interface SecurityHubNote {
  /**
   * @schema SecurityHubNote#Text
   */
  readonly text: string;

  /**
   * @schema SecurityHubNote#UpdatedBy
   */
  readonly updatedBy: string;

  /**
   * @schema SecurityHubNote#UpdatedAt
   */
  readonly updatedAt: string;

}

/**
 * @schema SecurityHubVulnerability
 */
export interface SecurityHubVulnerability {
  /**
   * @schema SecurityHubVulnerability#Id
   */
  readonly id: string;

  /**
   * @schema SecurityHubVulnerability#VulnerablePackages
   */
  readonly vulnerablePackages?: SecurityHubSoftwarePackage[];

  /**
   * @schema SecurityHubVulnerability#Cvss
   */
  readonly cvss?: SecurityHubCvss[];

  /**
   * @schema SecurityHubVulnerability#RelatedVulnerabilities
   */
  readonly relatedVulnerabilities?: string[];

  /**
   * @schema SecurityHubVulnerability#Vendor
   */
  readonly vendor?: SecurityHubVulnerabilityVendor;

  /**
   * @schema SecurityHubVulnerability#ReferenceUrls
   */
  readonly referenceUrls?: string[];

}

/**
 * @schema SecurityHubPatchSummary
 */
export interface SecurityHubPatchSummary {
  /**
   * @schema SecurityHubPatchSummary#Id
   */
  readonly id: string;

  /**
   * @schema SecurityHubPatchSummary#InstalledCount
   */
  readonly installedCount?: number;

  /**
   * @schema SecurityHubPatchSummary#MissingCount
   */
  readonly missingCount?: number;

  /**
   * @schema SecurityHubPatchSummary#FailedCount
   */
  readonly failedCount?: number;

  /**
   * @schema SecurityHubPatchSummary#InstalledOtherCount
   */
  readonly installedOtherCount?: number;

  /**
   * @schema SecurityHubPatchSummary#InstalledRejectedCount
   */
  readonly installedRejectedCount?: number;

  /**
   * @schema SecurityHubPatchSummary#InstalledPendingReboot
   */
  readonly installedPendingReboot?: number;

  /**
   * @schema SecurityHubPatchSummary#OperationStartTime
   */
  readonly operationStartTime?: string;

  /**
   * @schema SecurityHubPatchSummary#OperationEndTime
   */
  readonly operationEndTime?: string;

  /**
   * @schema SecurityHubPatchSummary#RebootOption
   */
  readonly rebootOption?: string;

  /**
   * @schema SecurityHubPatchSummary#Operation
   */
  readonly operation?: string;

}

/**
 * @schema SecurityHubStringFilter
 */
export interface SecurityHubStringFilter {
  /**
   * @schema SecurityHubStringFilter#Value
   */
  readonly value?: string;

  /**
   * @schema SecurityHubStringFilter#Comparison
   */
  readonly comparison?: string;

}

/**
 * @schema SecurityHubDateFilter
 */
export interface SecurityHubDateFilter {
  /**
   * @schema SecurityHubDateFilter#Start
   */
  readonly start?: string;

  /**
   * @schema SecurityHubDateFilter#End
   */
  readonly end?: string;

  /**
   * @schema SecurityHubDateFilter#DateRange
   */
  readonly dateRange?: SecurityHubDateRange;

}

/**
 * @schema SecurityHubNumberFilter
 */
export interface SecurityHubNumberFilter {
  /**
   * @schema SecurityHubNumberFilter#Gte
   */
  readonly gte?: number;

  /**
   * @schema SecurityHubNumberFilter#Lte
   */
  readonly lte?: number;

  /**
   * @schema SecurityHubNumberFilter#Eq
   */
  readonly eq?: number;

}

/**
 * @schema SecurityHubMapFilter
 */
export interface SecurityHubMapFilter {
  /**
   * @schema SecurityHubMapFilter#Key
   */
  readonly key?: string;

  /**
   * @schema SecurityHubMapFilter#Value
   */
  readonly value?: string;

  /**
   * @schema SecurityHubMapFilter#Comparison
   */
  readonly comparison?: string;

}

/**
 * @schema SecurityHubIpFilter
 */
export interface SecurityHubIpFilter {
  /**
   * @schema SecurityHubIpFilter#Cidr
   */
  readonly cidr?: string;

}

/**
 * @schema SecurityHubKeywordFilter
 */
export interface SecurityHubKeywordFilter {
  /**
   * @schema SecurityHubKeywordFilter#Value
   */
  readonly value?: string;

}

/**
 * @schema SecurityHubInsightResultValue
 */
export interface SecurityHubInsightResultValue {
  /**
   * @schema SecurityHubInsightResultValue#GroupByAttributeValue
   */
  readonly groupByAttributeValue: string;

  /**
   * @schema SecurityHubInsightResultValue#Count
   */
  readonly count: number;

}

/**
 * @schema SecurityHubRecommendation
 */
export interface SecurityHubRecommendation {
  /**
   * @schema SecurityHubRecommendation#Text
   */
  readonly text?: string;

  /**
   * @schema SecurityHubRecommendation#Url
   */
  readonly url?: string;

}

/**
 * @schema SecurityHubPortRange
 */
export interface SecurityHubPortRange {
  /**
   * @schema SecurityHubPortRange#Begin
   */
  readonly begin?: number;

  /**
   * @schema SecurityHubPortRange#End
   */
  readonly end?: number;

}

/**
 * @schema SecurityHubNetworkHeader
 */
export interface SecurityHubNetworkHeader {
  /**
   * @schema SecurityHubNetworkHeader#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema SecurityHubNetworkHeader#Destination
   */
  readonly destination?: SecurityHubNetworkPathComponentDetails;

  /**
   * @schema SecurityHubNetworkHeader#Source
   */
  readonly source?: SecurityHubNetworkPathComponentDetails;

}

/**
 * @schema SecurityHubResourceDetails
 */
export interface SecurityHubResourceDetails {
  /**
   * @schema SecurityHubResourceDetails#AwsAutoScalingAutoScalingGroup
   */
  readonly awsAutoScalingAutoScalingGroup?: SecurityHubAwsAutoScalingAutoScalingGroupDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsCodeBuildProject
   */
  readonly awsCodeBuildProject?: SecurityHubAwsCodeBuildProjectDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsCloudFrontDistribution
   */
  readonly awsCloudFrontDistribution?: SecurityHubAwsCloudFrontDistributionDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsEc2Instance
   */
  readonly awsEc2Instance?: SecurityHubAwsEc2InstanceDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsEc2NetworkInterface
   */
  readonly awsEc2NetworkInterface?: SecurityHubAwsEc2NetworkInterfaceDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsEc2SecurityGroup
   */
  readonly awsEc2SecurityGroup?: SecurityHubAwsEc2SecurityGroupDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsEc2Volume
   */
  readonly awsEc2Volume?: SecurityHubAwsEc2VolumeDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsEc2Vpc
   */
  readonly awsEc2Vpc?: SecurityHubAwsEc2VpcDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsEc2Eip
   */
  readonly awsEc2Eip?: SecurityHubAwsEc2EipDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsElbv2LoadBalancer
   */
  readonly awsElbv2LoadBalancer?: SecurityHubAwsElbv2LoadBalancerDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsElasticsearchDomain
   */
  readonly awsElasticsearchDomain?: SecurityHubAwsElasticsearchDomainDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsS3Bucket
   */
  readonly awsS3Bucket?: SecurityHubAwsS3BucketDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsS3Object
   */
  readonly awsS3Object?: SecurityHubAwsS3ObjectDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsSecretsManagerSecret
   */
  readonly awsSecretsManagerSecret?: SecurityHubAwsSecretsManagerSecretDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsIamAccessKey
   */
  readonly awsIamAccessKey?: SecurityHubAwsIamAccessKeyDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsIamUser
   */
  readonly awsIamUser?: SecurityHubAwsIamUserDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsIamPolicy
   */
  readonly awsIamPolicy?: SecurityHubAwsIamPolicyDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsApiGatewayV2Stage
   */
  readonly awsApiGatewayV2Stage?: SecurityHubAwsApiGatewayV2StageDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsApiGatewayV2Api
   */
  readonly awsApiGatewayV2Api?: SecurityHubAwsApiGatewayV2ApiDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsDynamoDbTable
   */
  readonly awsDynamoDbTable?: SecurityHubAwsDynamoDbTableDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsApiGatewayStage
   */
  readonly awsApiGatewayStage?: SecurityHubAwsApiGatewayStageDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsApiGatewayRestApi
   */
  readonly awsApiGatewayRestApi?: SecurityHubAwsApiGatewayRestApiDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsCloudTrailTrail
   */
  readonly awsCloudTrailTrail?: SecurityHubAwsCloudTrailTrailDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsCertificateManagerCertificate
   */
  readonly awsCertificateManagerCertificate?: SecurityHubAwsCertificateManagerCertificateDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsRedshiftCluster
   */
  readonly awsRedshiftCluster?: SecurityHubAwsRedshiftClusterDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsElbLoadBalancer
   */
  readonly awsElbLoadBalancer?: SecurityHubAwsElbLoadBalancerDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsIamGroup
   */
  readonly awsIamGroup?: SecurityHubAwsIamGroupDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsIamRole
   */
  readonly awsIamRole?: SecurityHubAwsIamRoleDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsKmsKey
   */
  readonly awsKmsKey?: SecurityHubAwsKmsKeyDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsLambdaFunction
   */
  readonly awsLambdaFunction?: SecurityHubAwsLambdaFunctionDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsLambdaLayerVersion
   */
  readonly awsLambdaLayerVersion?: SecurityHubAwsLambdaLayerVersionDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsRdsDbInstance
   */
  readonly awsRdsDbInstance?: SecurityHubAwsRdsDbInstanceDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsSnsTopic
   */
  readonly awsSnsTopic?: SecurityHubAwsSnsTopicDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsSqsQueue
   */
  readonly awsSqsQueue?: SecurityHubAwsSqsQueueDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsWafWebAcl
   */
  readonly awsWafWebAcl?: SecurityHubAwsWafWebAclDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsRdsDbSnapshot
   */
  readonly awsRdsDbSnapshot?: SecurityHubAwsRdsDbSnapshotDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsRdsDbClusterSnapshot
   */
  readonly awsRdsDbClusterSnapshot?: SecurityHubAwsRdsDbClusterSnapshotDetails;

  /**
   * @schema SecurityHubResourceDetails#AwsRdsDbCluster
   */
  readonly awsRdsDbCluster?: SecurityHubAwsRdsDbClusterDetails;

  /**
   * @schema SecurityHubResourceDetails#Container
   */
  readonly container?: SecurityHubContainerDetails;

  /**
   * @schema SecurityHubResourceDetails#Other
   */
  readonly other?: { [key: string]: string };

}

/**
 * @schema SecurityHubStatusReason
 */
export interface SecurityHubStatusReason {
  /**
   * @schema SecurityHubStatusReason#ReasonCode
   */
  readonly reasonCode: string;

  /**
   * @schema SecurityHubStatusReason#Description
   */
  readonly description?: string;

}

/**
 * @schema SecurityHubSoftwarePackage
 */
export interface SecurityHubSoftwarePackage {
  /**
   * @schema SecurityHubSoftwarePackage#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubSoftwarePackage#Version
   */
  readonly version?: string;

  /**
   * @schema SecurityHubSoftwarePackage#Epoch
   */
  readonly epoch?: string;

  /**
   * @schema SecurityHubSoftwarePackage#Release
   */
  readonly release?: string;

  /**
   * @schema SecurityHubSoftwarePackage#Architecture
   */
  readonly architecture?: string;

}

/**
 * @schema SecurityHubCvss
 */
export interface SecurityHubCvss {
  /**
   * @schema SecurityHubCvss#Version
   */
  readonly version?: string;

  /**
   * @schema SecurityHubCvss#BaseScore
   */
  readonly baseScore?: number;

  /**
   * @schema SecurityHubCvss#BaseVector
   */
  readonly baseVector?: string;

}

/**
 * @schema SecurityHubVulnerabilityVendor
 */
export interface SecurityHubVulnerabilityVendor {
  /**
   * @schema SecurityHubVulnerabilityVendor#Name
   */
  readonly name: string;

  /**
   * @schema SecurityHubVulnerabilityVendor#Url
   */
  readonly url?: string;

  /**
   * @schema SecurityHubVulnerabilityVendor#VendorSeverity
   */
  readonly vendorSeverity?: string;

  /**
   * @schema SecurityHubVulnerabilityVendor#VendorCreatedAt
   */
  readonly vendorCreatedAt?: string;

  /**
   * @schema SecurityHubVulnerabilityVendor#VendorUpdatedAt
   */
  readonly vendorUpdatedAt?: string;

}

/**
 * @schema SecurityHubDateRange
 */
export interface SecurityHubDateRange {
  /**
   * @schema SecurityHubDateRange#Value
   */
  readonly value?: number;

  /**
   * @schema SecurityHubDateRange#Unit
   */
  readonly unit?: string;

}

/**
 * @schema SecurityHubNetworkPathComponentDetails
 */
export interface SecurityHubNetworkPathComponentDetails {
  /**
   * @schema SecurityHubNetworkPathComponentDetails#Address
   */
  readonly address?: string[];

  /**
   * @schema SecurityHubNetworkPathComponentDetails#PortRanges
   */
  readonly portRanges?: SecurityHubPortRange[];

}

/**
 * @schema SecurityHubAwsAutoScalingAutoScalingGroupDetails
 */
export interface SecurityHubAwsAutoScalingAutoScalingGroupDetails {
  /**
   * @schema SecurityHubAwsAutoScalingAutoScalingGroupDetails#LaunchConfigurationName
   */
  readonly launchConfigurationName?: string;

  /**
   * @schema SecurityHubAwsAutoScalingAutoScalingGroupDetails#LoadBalancerNames
   */
  readonly loadBalancerNames?: string[];

  /**
   * @schema SecurityHubAwsAutoScalingAutoScalingGroupDetails#HealthCheckType
   */
  readonly healthCheckType?: string;

  /**
   * @schema SecurityHubAwsAutoScalingAutoScalingGroupDetails#HealthCheckGracePeriod
   */
  readonly healthCheckGracePeriod?: number;

  /**
   * @schema SecurityHubAwsAutoScalingAutoScalingGroupDetails#CreatedTime
   */
  readonly createdTime?: string;

}

/**
 * @schema SecurityHubAwsCodeBuildProjectDetails
 */
export interface SecurityHubAwsCodeBuildProjectDetails {
  /**
   * @schema SecurityHubAwsCodeBuildProjectDetails#EncryptionKey
   */
  readonly encryptionKey?: string;

  /**
   * @schema SecurityHubAwsCodeBuildProjectDetails#Environment
   */
  readonly environment?: SecurityHubAwsCodeBuildProjectEnvironment;

  /**
   * @schema SecurityHubAwsCodeBuildProjectDetails#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubAwsCodeBuildProjectDetails#Source
   */
  readonly source?: SecurityHubAwsCodeBuildProjectSource;

  /**
   * @schema SecurityHubAwsCodeBuildProjectDetails#ServiceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema SecurityHubAwsCodeBuildProjectDetails#VpcConfig
   */
  readonly vpcConfig?: SecurityHubAwsCodeBuildProjectVpcConfig;

}

/**
 * @schema SecurityHubAwsCloudFrontDistributionDetails
 */
export interface SecurityHubAwsCloudFrontDistributionDetails {
  /**
   * @schema SecurityHubAwsCloudFrontDistributionDetails#CacheBehaviors
   */
  readonly cacheBehaviors?: SecurityHubAwsCloudFrontDistributionCacheBehaviors;

  /**
   * @schema SecurityHubAwsCloudFrontDistributionDetails#DefaultCacheBehavior
   */
  readonly defaultCacheBehavior?: SecurityHubAwsCloudFrontDistributionDefaultCacheBehavior;

  /**
   * @schema SecurityHubAwsCloudFrontDistributionDetails#DefaultRootObject
   */
  readonly defaultRootObject?: string;

  /**
   * @schema SecurityHubAwsCloudFrontDistributionDetails#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema SecurityHubAwsCloudFrontDistributionDetails#ETag
   */
  readonly eTag?: string;

  /**
   * @schema SecurityHubAwsCloudFrontDistributionDetails#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema SecurityHubAwsCloudFrontDistributionDetails#Logging
   */
  readonly logging?: SecurityHubAwsCloudFrontDistributionLogging;

  /**
   * @schema SecurityHubAwsCloudFrontDistributionDetails#Origins
   */
  readonly origins?: SecurityHubAwsCloudFrontDistributionOrigins;

  /**
   * @schema SecurityHubAwsCloudFrontDistributionDetails#OriginGroups
   */
  readonly originGroups?: SecurityHubAwsCloudFrontDistributionOriginGroups;

  /**
   * @schema SecurityHubAwsCloudFrontDistributionDetails#Status
   */
  readonly status?: string;

  /**
   * @schema SecurityHubAwsCloudFrontDistributionDetails#WebAclId
   */
  readonly webAclId?: string;

}

/**
 * @schema SecurityHubAwsEc2InstanceDetails
 */
export interface SecurityHubAwsEc2InstanceDetails {
  /**
   * @schema SecurityHubAwsEc2InstanceDetails#Type
   */
  readonly type?: string;

  /**
   * @schema SecurityHubAwsEc2InstanceDetails#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema SecurityHubAwsEc2InstanceDetails#IpV4Addresses
   */
  readonly ipV4Addresses?: string[];

  /**
   * @schema SecurityHubAwsEc2InstanceDetails#IpV6Addresses
   */
  readonly ipV6Addresses?: string[];

  /**
   * @schema SecurityHubAwsEc2InstanceDetails#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema SecurityHubAwsEc2InstanceDetails#IamInstanceProfileArn
   */
  readonly iamInstanceProfileArn?: string;

  /**
   * @schema SecurityHubAwsEc2InstanceDetails#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema SecurityHubAwsEc2InstanceDetails#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema SecurityHubAwsEc2InstanceDetails#LaunchedAt
   */
  readonly launchedAt?: string;

}

/**
 * @schema SecurityHubAwsEc2NetworkInterfaceDetails
 */
export interface SecurityHubAwsEc2NetworkInterfaceDetails {
  /**
   * @schema SecurityHubAwsEc2NetworkInterfaceDetails#Attachment
   */
  readonly attachment?: SecurityHubAwsEc2NetworkInterfaceAttachment;

  /**
   * @schema SecurityHubAwsEc2NetworkInterfaceDetails#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema SecurityHubAwsEc2NetworkInterfaceDetails#SecurityGroups
   */
  readonly securityGroups?: SecurityHubAwsEc2NetworkInterfaceSecurityGroup[];

  /**
   * @schema SecurityHubAwsEc2NetworkInterfaceDetails#SourceDestCheck
   */
  readonly sourceDestCheck?: boolean;

}

/**
 * @schema SecurityHubAwsEc2SecurityGroupDetails
 */
export interface SecurityHubAwsEc2SecurityGroupDetails {
  /**
   * @schema SecurityHubAwsEc2SecurityGroupDetails#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema SecurityHubAwsEc2SecurityGroupDetails#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema SecurityHubAwsEc2SecurityGroupDetails#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema SecurityHubAwsEc2SecurityGroupDetails#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema SecurityHubAwsEc2SecurityGroupDetails#IpPermissions
   */
  readonly ipPermissions?: SecurityHubAwsEc2SecurityGroupIpPermission[];

  /**
   * @schema SecurityHubAwsEc2SecurityGroupDetails#IpPermissionsEgress
   */
  readonly ipPermissionsEgress?: SecurityHubAwsEc2SecurityGroupIpPermission[];

}

/**
 * @schema SecurityHubAwsEc2VolumeDetails
 */
export interface SecurityHubAwsEc2VolumeDetails {
  /**
   * @schema SecurityHubAwsEc2VolumeDetails#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema SecurityHubAwsEc2VolumeDetails#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema SecurityHubAwsEc2VolumeDetails#Size
   */
  readonly size?: number;

  /**
   * @schema SecurityHubAwsEc2VolumeDetails#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema SecurityHubAwsEc2VolumeDetails#Status
   */
  readonly status?: string;

  /**
   * @schema SecurityHubAwsEc2VolumeDetails#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema SecurityHubAwsEc2VolumeDetails#Attachments
   */
  readonly attachments?: SecurityHubAwsEc2VolumeAttachment[];

}

/**
 * @schema SecurityHubAwsEc2VpcDetails
 */
export interface SecurityHubAwsEc2VpcDetails {
  /**
   * @schema SecurityHubAwsEc2VpcDetails#CidrBlockAssociationSet
   */
  readonly cidrBlockAssociationSet?: SecurityHubCidrBlockAssociation[];

  /**
   * @schema SecurityHubAwsEc2VpcDetails#Ipv6CidrBlockAssociationSet
   */
  readonly ipv6CidrBlockAssociationSet?: SecurityHubIpv6CidrBlockAssociation[];

  /**
   * @schema SecurityHubAwsEc2VpcDetails#DhcpOptionsId
   */
  readonly dhcpOptionsId?: string;

  /**
   * @schema SecurityHubAwsEc2VpcDetails#State
   */
  readonly state?: string;

}

/**
 * @schema SecurityHubAwsEc2EipDetails
 */
export interface SecurityHubAwsEc2EipDetails {
  /**
   * @schema SecurityHubAwsEc2EipDetails#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SecurityHubAwsEc2EipDetails#PublicIp
   */
  readonly publicIp?: string;

  /**
   * @schema SecurityHubAwsEc2EipDetails#AllocationId
   */
  readonly allocationId?: string;

  /**
   * @schema SecurityHubAwsEc2EipDetails#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema SecurityHubAwsEc2EipDetails#Domain
   */
  readonly domain?: string;

  /**
   * @schema SecurityHubAwsEc2EipDetails#PublicIpv4Pool
   */
  readonly publicIpv4Pool?: string;

  /**
   * @schema SecurityHubAwsEc2EipDetails#NetworkBorderGroup
   */
  readonly networkBorderGroup?: string;

  /**
   * @schema SecurityHubAwsEc2EipDetails#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema SecurityHubAwsEc2EipDetails#NetworkInterfaceOwnerId
   */
  readonly networkInterfaceOwnerId?: string;

  /**
   * @schema SecurityHubAwsEc2EipDetails#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

}

/**
 * @schema SecurityHubAwsElbv2LoadBalancerDetails
 */
export interface SecurityHubAwsElbv2LoadBalancerDetails {
  /**
   * @schema SecurityHubAwsElbv2LoadBalancerDetails#AvailabilityZones
   */
  readonly availabilityZones?: SecurityHubAvailabilityZone[];

  /**
   * @schema SecurityHubAwsElbv2LoadBalancerDetails#CanonicalHostedZoneId
   */
  readonly canonicalHostedZoneId?: string;

  /**
   * @schema SecurityHubAwsElbv2LoadBalancerDetails#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema SecurityHubAwsElbv2LoadBalancerDetails#DNSName
   */
  readonly dnsName?: string;

  /**
   * @schema SecurityHubAwsElbv2LoadBalancerDetails#IpAddressType
   */
  readonly ipAddressType?: string;

  /**
   * @schema SecurityHubAwsElbv2LoadBalancerDetails#Scheme
   */
  readonly scheme?: string;

  /**
   * @schema SecurityHubAwsElbv2LoadBalancerDetails#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema SecurityHubAwsElbv2LoadBalancerDetails#State
   */
  readonly state?: SecurityHubLoadBalancerState;

  /**
   * @schema SecurityHubAwsElbv2LoadBalancerDetails#Type
   */
  readonly type?: string;

  /**
   * @schema SecurityHubAwsElbv2LoadBalancerDetails#VpcId
   */
  readonly vpcId?: string;

}

/**
 * @schema SecurityHubAwsElasticsearchDomainDetails
 */
export interface SecurityHubAwsElasticsearchDomainDetails {
  /**
   * @schema SecurityHubAwsElasticsearchDomainDetails#AccessPolicies
   */
  readonly accessPolicies?: string;

  /**
   * @schema SecurityHubAwsElasticsearchDomainDetails#DomainEndpointOptions
   */
  readonly domainEndpointOptions?: SecurityHubAwsElasticsearchDomainDomainEndpointOptions;

  /**
   * @schema SecurityHubAwsElasticsearchDomainDetails#DomainId
   */
  readonly domainId?: string;

  /**
   * @schema SecurityHubAwsElasticsearchDomainDetails#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema SecurityHubAwsElasticsearchDomainDetails#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema SecurityHubAwsElasticsearchDomainDetails#Endpoints
   */
  readonly endpoints?: { [key: string]: string };

  /**
   * @schema SecurityHubAwsElasticsearchDomainDetails#ElasticsearchVersion
   */
  readonly elasticsearchVersion?: string;

  /**
   * @schema SecurityHubAwsElasticsearchDomainDetails#EncryptionAtRestOptions
   */
  readonly encryptionAtRestOptions?: SecurityHubAwsElasticsearchDomainEncryptionAtRestOptions;

  /**
   * @schema SecurityHubAwsElasticsearchDomainDetails#NodeToNodeEncryptionOptions
   */
  readonly nodeToNodeEncryptionOptions?: SecurityHubAwsElasticsearchDomainNodeToNodeEncryptionOptions;

  /**
   * @schema SecurityHubAwsElasticsearchDomainDetails#VPCOptions
   */
  readonly vpcOptions?: SecurityHubAwsElasticsearchDomainVpcOptions;

}

/**
 * @schema SecurityHubAwsS3BucketDetails
 */
export interface SecurityHubAwsS3BucketDetails {
  /**
   * @schema SecurityHubAwsS3BucketDetails#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema SecurityHubAwsS3BucketDetails#OwnerName
   */
  readonly ownerName?: string;

  /**
   * @schema SecurityHubAwsS3BucketDetails#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema SecurityHubAwsS3BucketDetails#ServerSideEncryptionConfiguration
   */
  readonly serverSideEncryptionConfiguration?: SecurityHubAwsS3BucketServerSideEncryptionConfiguration;

}

/**
 * @schema SecurityHubAwsS3ObjectDetails
 */
export interface SecurityHubAwsS3ObjectDetails {
  /**
   * @schema SecurityHubAwsS3ObjectDetails#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema SecurityHubAwsS3ObjectDetails#ETag
   */
  readonly eTag?: string;

  /**
   * @schema SecurityHubAwsS3ObjectDetails#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema SecurityHubAwsS3ObjectDetails#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema SecurityHubAwsS3ObjectDetails#ServerSideEncryption
   */
  readonly serverSideEncryption?: string;

  /**
   * @schema SecurityHubAwsS3ObjectDetails#SSEKMSKeyId
   */
  readonly ssekmsKeyId?: string;

}

/**
 * @schema SecurityHubAwsSecretsManagerSecretDetails
 */
export interface SecurityHubAwsSecretsManagerSecretDetails {
  /**
   * @schema SecurityHubAwsSecretsManagerSecretDetails#RotationRules
   */
  readonly rotationRules?: SecurityHubAwsSecretsManagerSecretRotationRules;

  /**
   * @schema SecurityHubAwsSecretsManagerSecretDetails#RotationOccurredWithinFrequency
   */
  readonly rotationOccurredWithinFrequency?: boolean;

  /**
   * @schema SecurityHubAwsSecretsManagerSecretDetails#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema SecurityHubAwsSecretsManagerSecretDetails#RotationEnabled
   */
  readonly rotationEnabled?: boolean;

  /**
   * @schema SecurityHubAwsSecretsManagerSecretDetails#RotationLambdaArn
   */
  readonly rotationLambdaArn?: string;

  /**
   * @schema SecurityHubAwsSecretsManagerSecretDetails#Deleted
   */
  readonly deleted?: boolean;

  /**
   * @schema SecurityHubAwsSecretsManagerSecretDetails#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubAwsSecretsManagerSecretDetails#Description
   */
  readonly description?: string;

}

/**
 * @schema SecurityHubAwsIamAccessKeyDetails
 */
export interface SecurityHubAwsIamAccessKeyDetails {
  /**
   * @schema SecurityHubAwsIamAccessKeyDetails#UserName
   */
  readonly userName?: string;

  /**
   * @schema SecurityHubAwsIamAccessKeyDetails#Status
   */
  readonly status?: string;

  /**
   * @schema SecurityHubAwsIamAccessKeyDetails#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema SecurityHubAwsIamAccessKeyDetails#PrincipalId
   */
  readonly principalId?: string;

  /**
   * @schema SecurityHubAwsIamAccessKeyDetails#PrincipalType
   */
  readonly principalType?: string;

  /**
   * @schema SecurityHubAwsIamAccessKeyDetails#PrincipalName
   */
  readonly principalName?: string;

  /**
   * @schema SecurityHubAwsIamAccessKeyDetails#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema SecurityHubAwsIamAccessKeyDetails#AccessKeyId
   */
  readonly accessKeyId?: string;

  /**
   * @schema SecurityHubAwsIamAccessKeyDetails#SessionContext
   */
  readonly sessionContext?: SecurityHubAwsIamAccessKeySessionContext;

}

/**
 * @schema SecurityHubAwsIamUserDetails
 */
export interface SecurityHubAwsIamUserDetails {
  /**
   * @schema SecurityHubAwsIamUserDetails#AttachedManagedPolicies
   */
  readonly attachedManagedPolicies?: SecurityHubAwsIamAttachedManagedPolicy[];

  /**
   * @schema SecurityHubAwsIamUserDetails#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema SecurityHubAwsIamUserDetails#GroupList
   */
  readonly groupList?: string[];

  /**
   * @schema SecurityHubAwsIamUserDetails#Path
   */
  readonly path?: string;

  /**
   * @schema SecurityHubAwsIamUserDetails#PermissionsBoundary
   */
  readonly permissionsBoundary?: SecurityHubAwsIamPermissionsBoundary;

  /**
   * @schema SecurityHubAwsIamUserDetails#UserId
   */
  readonly userId?: string;

  /**
   * @schema SecurityHubAwsIamUserDetails#UserName
   */
  readonly userName?: string;

  /**
   * @schema SecurityHubAwsIamUserDetails#UserPolicyList
   */
  readonly userPolicyList?: SecurityHubAwsIamUserPolicy[];

}

/**
 * @schema SecurityHubAwsIamPolicyDetails
 */
export interface SecurityHubAwsIamPolicyDetails {
  /**
   * @schema SecurityHubAwsIamPolicyDetails#AttachmentCount
   */
  readonly attachmentCount?: number;

  /**
   * @schema SecurityHubAwsIamPolicyDetails#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema SecurityHubAwsIamPolicyDetails#DefaultVersionId
   */
  readonly defaultVersionId?: string;

  /**
   * @schema SecurityHubAwsIamPolicyDetails#Description
   */
  readonly description?: string;

  /**
   * @schema SecurityHubAwsIamPolicyDetails#IsAttachable
   */
  readonly isAttachable?: boolean;

  /**
   * @schema SecurityHubAwsIamPolicyDetails#Path
   */
  readonly path?: string;

  /**
   * @schema SecurityHubAwsIamPolicyDetails#PermissionsBoundaryUsageCount
   */
  readonly permissionsBoundaryUsageCount?: number;

  /**
   * @schema SecurityHubAwsIamPolicyDetails#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema SecurityHubAwsIamPolicyDetails#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema SecurityHubAwsIamPolicyDetails#PolicyVersionList
   */
  readonly policyVersionList?: SecurityHubAwsIamPolicyVersion[];

  /**
   * @schema SecurityHubAwsIamPolicyDetails#UpdateDate
   */
  readonly updateDate?: string;

}

/**
 * @schema SecurityHubAwsApiGatewayV2StageDetails
 */
export interface SecurityHubAwsApiGatewayV2StageDetails {
  /**
   * @schema SecurityHubAwsApiGatewayV2StageDetails#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema SecurityHubAwsApiGatewayV2StageDetails#Description
   */
  readonly description?: string;

  /**
   * @schema SecurityHubAwsApiGatewayV2StageDetails#DefaultRouteSettings
   */
  readonly defaultRouteSettings?: SecurityHubAwsApiGatewayV2RouteSettings;

  /**
   * @schema SecurityHubAwsApiGatewayV2StageDetails#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema SecurityHubAwsApiGatewayV2StageDetails#LastUpdatedDate
   */
  readonly lastUpdatedDate?: string;

  /**
   * @schema SecurityHubAwsApiGatewayV2StageDetails#RouteSettings
   */
  readonly routeSettings?: SecurityHubAwsApiGatewayV2RouteSettings;

  /**
   * @schema SecurityHubAwsApiGatewayV2StageDetails#StageName
   */
  readonly stageName?: string;

  /**
   * @schema SecurityHubAwsApiGatewayV2StageDetails#StageVariables
   */
  readonly stageVariables?: { [key: string]: string };

  /**
   * @schema SecurityHubAwsApiGatewayV2StageDetails#AccessLogSettings
   */
  readonly accessLogSettings?: SecurityHubAwsApiGatewayAccessLogSettings;

  /**
   * @schema SecurityHubAwsApiGatewayV2StageDetails#AutoDeploy
   */
  readonly autoDeploy?: boolean;

  /**
   * @schema SecurityHubAwsApiGatewayV2StageDetails#LastDeploymentStatusMessage
   */
  readonly lastDeploymentStatusMessage?: string;

  /**
   * @schema SecurityHubAwsApiGatewayV2StageDetails#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

}

/**
 * @schema SecurityHubAwsApiGatewayV2ApiDetails
 */
export interface SecurityHubAwsApiGatewayV2ApiDetails {
  /**
   * @schema SecurityHubAwsApiGatewayV2ApiDetails#ApiEndpoint
   */
  readonly apiEndpoint?: string;

  /**
   * @schema SecurityHubAwsApiGatewayV2ApiDetails#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema SecurityHubAwsApiGatewayV2ApiDetails#ApiKeySelectionExpression
   */
  readonly apiKeySelectionExpression?: string;

  /**
   * @schema SecurityHubAwsApiGatewayV2ApiDetails#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema SecurityHubAwsApiGatewayV2ApiDetails#Description
   */
  readonly description?: string;

  /**
   * @schema SecurityHubAwsApiGatewayV2ApiDetails#Version
   */
  readonly version?: string;

  /**
   * @schema SecurityHubAwsApiGatewayV2ApiDetails#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubAwsApiGatewayV2ApiDetails#ProtocolType
   */
  readonly protocolType?: string;

  /**
   * @schema SecurityHubAwsApiGatewayV2ApiDetails#RouteSelectionExpression
   */
  readonly routeSelectionExpression?: string;

  /**
   * @schema SecurityHubAwsApiGatewayV2ApiDetails#CorsConfiguration
   */
  readonly corsConfiguration?: SecurityHubAwsCorsConfiguration;

}

/**
 * @schema SecurityHubAwsDynamoDbTableDetails
 */
export interface SecurityHubAwsDynamoDbTableDetails {
  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#AttributeDefinitions
   */
  readonly attributeDefinitions?: SecurityHubAwsDynamoDbTableAttributeDefinition[];

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#BillingModeSummary
   */
  readonly billingModeSummary?: SecurityHubAwsDynamoDbTableBillingModeSummary;

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#CreationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#GlobalSecondaryIndexes
   */
  readonly globalSecondaryIndexes?: SecurityHubAwsDynamoDbTableGlobalSecondaryIndex[];

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#GlobalTableVersion
   */
  readonly globalTableVersion?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#ItemCount
   */
  readonly itemCount?: number;

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#KeySchema
   */
  readonly keySchema?: SecurityHubAwsDynamoDbTableKeySchema[];

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#LatestStreamArn
   */
  readonly latestStreamArn?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#LatestStreamLabel
   */
  readonly latestStreamLabel?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#LocalSecondaryIndexes
   */
  readonly localSecondaryIndexes?: SecurityHubAwsDynamoDbTableLocalSecondaryIndex[];

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#ProvisionedThroughput
   */
  readonly provisionedThroughput?: SecurityHubAwsDynamoDbTableProvisionedThroughput;

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#Replicas
   */
  readonly replicas?: SecurityHubAwsDynamoDbTableReplica[];

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#RestoreSummary
   */
  readonly restoreSummary?: SecurityHubAwsDynamoDbTableRestoreSummary;

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#SseDescription
   */
  readonly sseDescription?: SecurityHubAwsDynamoDbTableSseDescription;

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#StreamSpecification
   */
  readonly streamSpecification?: SecurityHubAwsDynamoDbTableStreamSpecification;

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#TableId
   */
  readonly tableId?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#TableName
   */
  readonly tableName?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#TableSizeBytes
   */
  readonly tableSizeBytes?: number;

  /**
   * @schema SecurityHubAwsDynamoDbTableDetails#TableStatus
   */
  readonly tableStatus?: string;

}

/**
 * @schema SecurityHubAwsApiGatewayStageDetails
 */
export interface SecurityHubAwsApiGatewayStageDetails {
  /**
   * @schema SecurityHubAwsApiGatewayStageDetails#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema SecurityHubAwsApiGatewayStageDetails#ClientCertificateId
   */
  readonly clientCertificateId?: string;

  /**
   * @schema SecurityHubAwsApiGatewayStageDetails#StageName
   */
  readonly stageName?: string;

  /**
   * @schema SecurityHubAwsApiGatewayStageDetails#Description
   */
  readonly description?: string;

  /**
   * @schema SecurityHubAwsApiGatewayStageDetails#CacheClusterEnabled
   */
  readonly cacheClusterEnabled?: boolean;

  /**
   * @schema SecurityHubAwsApiGatewayStageDetails#CacheClusterSize
   */
  readonly cacheClusterSize?: string;

  /**
   * @schema SecurityHubAwsApiGatewayStageDetails#CacheClusterStatus
   */
  readonly cacheClusterStatus?: string;

  /**
   * @schema SecurityHubAwsApiGatewayStageDetails#MethodSettings
   */
  readonly methodSettings?: SecurityHubAwsApiGatewayMethodSettings[];

  /**
   * @schema SecurityHubAwsApiGatewayStageDetails#Variables
   */
  readonly variables?: { [key: string]: string };

  /**
   * @schema SecurityHubAwsApiGatewayStageDetails#DocumentationVersion
   */
  readonly documentationVersion?: string;

  /**
   * @schema SecurityHubAwsApiGatewayStageDetails#AccessLogSettings
   */
  readonly accessLogSettings?: SecurityHubAwsApiGatewayAccessLogSettings;

  /**
   * @schema SecurityHubAwsApiGatewayStageDetails#CanarySettings
   */
  readonly canarySettings?: SecurityHubAwsApiGatewayCanarySettings;

  /**
   * @schema SecurityHubAwsApiGatewayStageDetails#TracingEnabled
   */
  readonly tracingEnabled?: boolean;

  /**
   * @schema SecurityHubAwsApiGatewayStageDetails#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema SecurityHubAwsApiGatewayStageDetails#LastUpdatedDate
   */
  readonly lastUpdatedDate?: string;

  /**
   * @schema SecurityHubAwsApiGatewayStageDetails#WebAclArn
   */
  readonly webAclArn?: string;

}

/**
 * @schema SecurityHubAwsApiGatewayRestApiDetails
 */
export interface SecurityHubAwsApiGatewayRestApiDetails {
  /**
   * @schema SecurityHubAwsApiGatewayRestApiDetails#Id
   */
  readonly id?: string;

  /**
   * @schema SecurityHubAwsApiGatewayRestApiDetails#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubAwsApiGatewayRestApiDetails#Description
   */
  readonly description?: string;

  /**
   * @schema SecurityHubAwsApiGatewayRestApiDetails#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema SecurityHubAwsApiGatewayRestApiDetails#Version
   */
  readonly version?: string;

  /**
   * @schema SecurityHubAwsApiGatewayRestApiDetails#BinaryMediaTypes
   */
  readonly binaryMediaTypes?: string[];

  /**
   * @schema SecurityHubAwsApiGatewayRestApiDetails#MinimumCompressionSize
   */
  readonly minimumCompressionSize?: number;

  /**
   * @schema SecurityHubAwsApiGatewayRestApiDetails#ApiKeySource
   */
  readonly apiKeySource?: string;

  /**
   * @schema SecurityHubAwsApiGatewayRestApiDetails#EndpointConfiguration
   */
  readonly endpointConfiguration?: SecurityHubAwsApiGatewayEndpointConfiguration;

}

/**
 * @schema SecurityHubAwsCloudTrailTrailDetails
 */
export interface SecurityHubAwsCloudTrailTrailDetails {
  /**
   * @schema SecurityHubAwsCloudTrailTrailDetails#CloudWatchLogsLogGroupArn
   */
  readonly cloudWatchLogsLogGroupArn?: string;

  /**
   * @schema SecurityHubAwsCloudTrailTrailDetails#CloudWatchLogsRoleArn
   */
  readonly cloudWatchLogsRoleArn?: string;

  /**
   * @schema SecurityHubAwsCloudTrailTrailDetails#HasCustomEventSelectors
   */
  readonly hasCustomEventSelectors?: boolean;

  /**
   * @schema SecurityHubAwsCloudTrailTrailDetails#HomeRegion
   */
  readonly homeRegion?: string;

  /**
   * @schema SecurityHubAwsCloudTrailTrailDetails#IncludeGlobalServiceEvents
   */
  readonly includeGlobalServiceEvents?: boolean;

  /**
   * @schema SecurityHubAwsCloudTrailTrailDetails#IsMultiRegionTrail
   */
  readonly isMultiRegionTrail?: boolean;

  /**
   * @schema SecurityHubAwsCloudTrailTrailDetails#IsOrganizationTrail
   */
  readonly isOrganizationTrail?: boolean;

  /**
   * @schema SecurityHubAwsCloudTrailTrailDetails#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema SecurityHubAwsCloudTrailTrailDetails#LogFileValidationEnabled
   */
  readonly logFileValidationEnabled?: boolean;

  /**
   * @schema SecurityHubAwsCloudTrailTrailDetails#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubAwsCloudTrailTrailDetails#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema SecurityHubAwsCloudTrailTrailDetails#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

  /**
   * @schema SecurityHubAwsCloudTrailTrailDetails#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema SecurityHubAwsCloudTrailTrailDetails#SnsTopicName
   */
  readonly snsTopicName?: string;

  /**
   * @schema SecurityHubAwsCloudTrailTrailDetails#TrailArn
   */
  readonly trailArn?: string;

}

/**
 * @schema SecurityHubAwsCertificateManagerCertificateDetails
 */
export interface SecurityHubAwsCertificateManagerCertificateDetails {
  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#DomainValidationOptions
   */
  readonly domainValidationOptions?: SecurityHubAwsCertificateManagerCertificateDomainValidationOption[];

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#ExtendedKeyUsages
   */
  readonly extendedKeyUsages?: SecurityHubAwsCertificateManagerCertificateExtendedKeyUsage[];

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#ImportedAt
   */
  readonly importedAt?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#InUseBy
   */
  readonly inUseBy?: string[];

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#IssuedAt
   */
  readonly issuedAt?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#Issuer
   */
  readonly issuer?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#KeyAlgorithm
   */
  readonly keyAlgorithm?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#KeyUsages
   */
  readonly keyUsages?: SecurityHubAwsCertificateManagerCertificateKeyUsage[];

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#NotAfter
   */
  readonly notAfter?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#NotBefore
   */
  readonly notBefore?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#Options
   */
  readonly options?: SecurityHubAwsCertificateManagerCertificateOptions;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#RenewalEligibility
   */
  readonly renewalEligibility?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#RenewalSummary
   */
  readonly renewalSummary?: SecurityHubAwsCertificateManagerCertificateRenewalSummary;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#Serial
   */
  readonly serial?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#SignatureAlgorithm
   */
  readonly signatureAlgorithm?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#Status
   */
  readonly status?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#Subject
   */
  readonly subject?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#SubjectAlternativeNames
   */
  readonly subjectAlternativeNames?: string[];

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDetails#Type
   */
  readonly type?: string;

}

/**
 * @schema SecurityHubAwsRedshiftClusterDetails
 */
export interface SecurityHubAwsRedshiftClusterDetails {
  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#AllowVersionUpgrade
   */
  readonly allowVersionUpgrade?: boolean;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#AutomatedSnapshotRetentionPeriod
   */
  readonly automatedSnapshotRetentionPeriod?: number;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ClusterAvailabilityStatus
   */
  readonly clusterAvailabilityStatus?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ClusterCreateTime
   */
  readonly clusterCreateTime?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ClusterNodes
   */
  readonly clusterNodes?: SecurityHubAwsRedshiftClusterClusterNode[];

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ClusterParameterGroups
   */
  readonly clusterParameterGroups?: SecurityHubAwsRedshiftClusterClusterParameterGroup[];

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ClusterPublicKey
   */
  readonly clusterPublicKey?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ClusterRevisionNumber
   */
  readonly clusterRevisionNumber?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ClusterSecurityGroups
   */
  readonly clusterSecurityGroups?: SecurityHubAwsRedshiftClusterClusterSecurityGroup[];

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ClusterSnapshotCopyStatus
   */
  readonly clusterSnapshotCopyStatus?: SecurityHubAwsRedshiftClusterClusterSnapshotCopyStatus;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ClusterStatus
   */
  readonly clusterStatus?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ClusterSubnetGroupName
   */
  readonly clusterSubnetGroupName?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ClusterVersion
   */
  readonly clusterVersion?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#DBName
   */
  readonly dbName?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#DeferredMaintenanceWindows
   */
  readonly deferredMaintenanceWindows?: SecurityHubAwsRedshiftClusterDeferredMaintenanceWindow[];

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ElasticIpStatus
   */
  readonly elasticIpStatus?: SecurityHubAwsRedshiftClusterElasticIpStatus;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ElasticResizeNumberOfNodeOptions
   */
  readonly elasticResizeNumberOfNodeOptions?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#Endpoint
   */
  readonly endpoint?: SecurityHubAwsRedshiftClusterEndpoint;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#EnhancedVpcRouting
   */
  readonly enhancedVpcRouting?: boolean;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ExpectedNextSnapshotScheduleTime
   */
  readonly expectedNextSnapshotScheduleTime?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ExpectedNextSnapshotScheduleTimeStatus
   */
  readonly expectedNextSnapshotScheduleTimeStatus?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#HsmStatus
   */
  readonly hsmStatus?: SecurityHubAwsRedshiftClusterHsmStatus;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#IamRoles
   */
  readonly iamRoles?: SecurityHubAwsRedshiftClusterIamRole[];

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#MaintenanceTrackName
   */
  readonly maintenanceTrackName?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#NextMaintenanceWindowStartTime
   */
  readonly nextMaintenanceWindowStartTime?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#PendingActions
   */
  readonly pendingActions?: string[];

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#PendingModifiedValues
   */
  readonly pendingModifiedValues?: SecurityHubAwsRedshiftClusterPendingModifiedValues;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#ResizeInfo
   */
  readonly resizeInfo?: SecurityHubAwsRedshiftClusterResizeInfo;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#RestoreStatus
   */
  readonly restoreStatus?: SecurityHubAwsRedshiftClusterRestoreStatus;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#SnapshotScheduleIdentifier
   */
  readonly snapshotScheduleIdentifier?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#SnapshotScheduleState
   */
  readonly snapshotScheduleState?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDetails#VpcSecurityGroups
   */
  readonly vpcSecurityGroups?: SecurityHubAwsRedshiftClusterVpcSecurityGroup[];

}

/**
 * @schema SecurityHubAwsElbLoadBalancerDetails
 */
export interface SecurityHubAwsElbLoadBalancerDetails {
  /**
   * @schema SecurityHubAwsElbLoadBalancerDetails#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema SecurityHubAwsElbLoadBalancerDetails#BackendServerDescriptions
   */
  readonly backendServerDescriptions?: SecurityHubAwsElbLoadBalancerBackendServerDescription[];

  /**
   * @schema SecurityHubAwsElbLoadBalancerDetails#CanonicalHostedZoneName
   */
  readonly canonicalHostedZoneName?: string;

  /**
   * @schema SecurityHubAwsElbLoadBalancerDetails#CanonicalHostedZoneNameID
   */
  readonly canonicalHostedZoneNameId?: string;

  /**
   * @schema SecurityHubAwsElbLoadBalancerDetails#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema SecurityHubAwsElbLoadBalancerDetails#DnsName
   */
  readonly dnsName?: string;

  /**
   * @schema SecurityHubAwsElbLoadBalancerDetails#HealthCheck
   */
  readonly healthCheck?: SecurityHubAwsElbLoadBalancerHealthCheck;

  /**
   * @schema SecurityHubAwsElbLoadBalancerDetails#Instances
   */
  readonly instances?: SecurityHubAwsElbLoadBalancerInstance[];

  /**
   * @schema SecurityHubAwsElbLoadBalancerDetails#ListenerDescriptions
   */
  readonly listenerDescriptions?: SecurityHubAwsElbLoadBalancerListenerDescription[];

  /**
   * @schema SecurityHubAwsElbLoadBalancerDetails#LoadBalancerAttributes
   */
  readonly loadBalancerAttributes?: SecurityHubAwsElbLoadBalancerAttributes;

  /**
   * @schema SecurityHubAwsElbLoadBalancerDetails#LoadBalancerName
   */
  readonly loadBalancerName?: string;

  /**
   * @schema SecurityHubAwsElbLoadBalancerDetails#Policies
   */
  readonly policies?: SecurityHubAwsElbLoadBalancerPolicies;

  /**
   * @schema SecurityHubAwsElbLoadBalancerDetails#Scheme
   */
  readonly scheme?: string;

  /**
   * @schema SecurityHubAwsElbLoadBalancerDetails#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema SecurityHubAwsElbLoadBalancerDetails#SourceSecurityGroup
   */
  readonly sourceSecurityGroup?: SecurityHubAwsElbLoadBalancerSourceSecurityGroup;

  /**
   * @schema SecurityHubAwsElbLoadBalancerDetails#Subnets
   */
  readonly subnets?: string[];

  /**
   * @schema SecurityHubAwsElbLoadBalancerDetails#VpcId
   */
  readonly vpcId?: string;

}

/**
 * @schema SecurityHubAwsIamGroupDetails
 */
export interface SecurityHubAwsIamGroupDetails {
  /**
   * @schema SecurityHubAwsIamGroupDetails#AttachedManagedPolicies
   */
  readonly attachedManagedPolicies?: SecurityHubAwsIamAttachedManagedPolicy[];

  /**
   * @schema SecurityHubAwsIamGroupDetails#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema SecurityHubAwsIamGroupDetails#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema SecurityHubAwsIamGroupDetails#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema SecurityHubAwsIamGroupDetails#GroupPolicyList
   */
  readonly groupPolicyList?: SecurityHubAwsIamGroupPolicy[];

  /**
   * @schema SecurityHubAwsIamGroupDetails#Path
   */
  readonly path?: string;

}

/**
 * @schema SecurityHubAwsIamRoleDetails
 */
export interface SecurityHubAwsIamRoleDetails {
  /**
   * @schema SecurityHubAwsIamRoleDetails#AssumeRolePolicyDocument
   */
  readonly assumeRolePolicyDocument?: string;

  /**
   * @schema SecurityHubAwsIamRoleDetails#AttachedManagedPolicies
   */
  readonly attachedManagedPolicies?: SecurityHubAwsIamAttachedManagedPolicy[];

  /**
   * @schema SecurityHubAwsIamRoleDetails#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema SecurityHubAwsIamRoleDetails#InstanceProfileList
   */
  readonly instanceProfileList?: SecurityHubAwsIamInstanceProfile[];

  /**
   * @schema SecurityHubAwsIamRoleDetails#PermissionsBoundary
   */
  readonly permissionsBoundary?: SecurityHubAwsIamPermissionsBoundary;

  /**
   * @schema SecurityHubAwsIamRoleDetails#RoleId
   */
  readonly roleId?: string;

  /**
   * @schema SecurityHubAwsIamRoleDetails#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema SecurityHubAwsIamRoleDetails#RolePolicyList
   */
  readonly rolePolicyList?: SecurityHubAwsIamRolePolicy[];

  /**
   * @schema SecurityHubAwsIamRoleDetails#MaxSessionDuration
   */
  readonly maxSessionDuration?: number;

  /**
   * @schema SecurityHubAwsIamRoleDetails#Path
   */
  readonly path?: string;

}

/**
 * @schema SecurityHubAwsKmsKeyDetails
 */
export interface SecurityHubAwsKmsKeyDetails {
  /**
   * @schema SecurityHubAwsKmsKeyDetails#AWSAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema SecurityHubAwsKmsKeyDetails#CreationDate
   */
  readonly creationDate?: number;

  /**
   * @schema SecurityHubAwsKmsKeyDetails#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema SecurityHubAwsKmsKeyDetails#KeyManager
   */
  readonly keyManager?: string;

  /**
   * @schema SecurityHubAwsKmsKeyDetails#KeyState
   */
  readonly keyState?: string;

  /**
   * @schema SecurityHubAwsKmsKeyDetails#Origin
   */
  readonly origin?: string;

  /**
   * @schema SecurityHubAwsKmsKeyDetails#Description
   */
  readonly description?: string;

}

/**
 * @schema SecurityHubAwsLambdaFunctionDetails
 */
export interface SecurityHubAwsLambdaFunctionDetails {
  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#Code
   */
  readonly code?: SecurityHubAwsLambdaFunctionCode;

  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#CodeSha256
   */
  readonly codeSha256?: string;

  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#DeadLetterConfig
   */
  readonly deadLetterConfig?: SecurityHubAwsLambdaFunctionDeadLetterConfig;

  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#Environment
   */
  readonly environment?: SecurityHubAwsLambdaFunctionEnvironment;

  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#FunctionName
   */
  readonly functionName?: string;

  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#Handler
   */
  readonly handler?: string;

  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#Layers
   */
  readonly layers?: SecurityHubAwsLambdaFunctionLayer[];

  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#MasterArn
   */
  readonly masterArn?: string;

  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#MemorySize
   */
  readonly memorySize?: number;

  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#RevisionId
   */
  readonly revisionId?: string;

  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#Role
   */
  readonly role?: string;

  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#Runtime
   */
  readonly runtime?: string;

  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#TracingConfig
   */
  readonly tracingConfig?: SecurityHubAwsLambdaFunctionTracingConfig;

  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#VpcConfig
   */
  readonly vpcConfig?: SecurityHubAwsLambdaFunctionVpcConfig;

  /**
   * @schema SecurityHubAwsLambdaFunctionDetails#Version
   */
  readonly version?: string;

}

/**
 * @schema SecurityHubAwsLambdaLayerVersionDetails
 */
export interface SecurityHubAwsLambdaLayerVersionDetails {
  /**
   * @schema SecurityHubAwsLambdaLayerVersionDetails#Version
   */
  readonly version?: number;

  /**
   * @schema SecurityHubAwsLambdaLayerVersionDetails#CompatibleRuntimes
   */
  readonly compatibleRuntimes?: string[];

  /**
   * @schema SecurityHubAwsLambdaLayerVersionDetails#CreatedDate
   */
  readonly createdDate?: string;

}

/**
 * @schema SecurityHubAwsRdsDbInstanceDetails
 */
export interface SecurityHubAwsRdsDbInstanceDetails {
  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#AssociatedRoles
   */
  readonly associatedRoles?: SecurityHubAwsRdsDbInstanceAssociatedRole[];

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#CACertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#DbInstancePort
   */
  readonly dbInstancePort?: number;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#DbiResourceId
   */
  readonly dbiResourceId?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#DBName
   */
  readonly dbName?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#Endpoint
   */
  readonly endpoint?: SecurityHubAwsRdsDbInstanceEndpoint;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#Engine
   */
  readonly engine?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#IAMDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#InstanceCreateTime
   */
  readonly instanceCreateTime?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#VpcSecurityGroups
   */
  readonly vpcSecurityGroups?: SecurityHubAwsRdsDbInstanceVpcSecurityGroup[];

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#MultiAz
   */
  readonly multiAz?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#EnhancedMonitoringResourceArn
   */
  readonly enhancedMonitoringResourceArn?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#DbInstanceStatus
   */
  readonly dbInstanceStatus?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#DbSecurityGroups
   */
  readonly dbSecurityGroups?: string[];

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#DbParameterGroups
   */
  readonly dbParameterGroups?: SecurityHubAwsRdsDbParameterGroup[];

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#DbSubnetGroup
   */
  readonly dbSubnetGroup?: SecurityHubAwsRdsDbSubnetGroup;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#PendingModifiedValues
   */
  readonly pendingModifiedValues?: SecurityHubAwsRdsDbPendingModifiedValues;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#LatestRestorableTime
   */
  readonly latestRestorableTime?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#ReadReplicaSourceDBInstanceIdentifier
   */
  readonly readReplicaSourceDbInstanceIdentifier?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#ReadReplicaDBInstanceIdentifiers
   */
  readonly readReplicaDbInstanceIdentifiers?: string[];

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#ReadReplicaDBClusterIdentifiers
   */
  readonly readReplicaDbClusterIdentifiers?: string[];

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#Iops
   */
  readonly iops?: number;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#OptionGroupMemberships
   */
  readonly optionGroupMemberships?: SecurityHubAwsRdsDbOptionGroupMembership[];

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#SecondaryAvailabilityZone
   */
  readonly secondaryAvailabilityZone?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#StatusInfos
   */
  readonly statusInfos?: SecurityHubAwsRdsDbStatusInfo[];

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#DomainMemberships
   */
  readonly domainMemberships?: SecurityHubAwsRdsDbDomainMembership[];

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#MonitoringInterval
   */
  readonly monitoringInterval?: number;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#MonitoringRoleArn
   */
  readonly monitoringRoleArn?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#PromotionTier
   */
  readonly promotionTier?: number;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#PerformanceInsightsEnabled
   */
  readonly performanceInsightsEnabled?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#PerformanceInsightsKmsKeyId
   */
  readonly performanceInsightsKmsKeyId?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#PerformanceInsightsRetentionPeriod
   */
  readonly performanceInsightsRetentionPeriod?: number;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#EnabledCloudWatchLogsExports
   */
  readonly enabledCloudWatchLogsExports?: string[];

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#ProcessorFeatures
   */
  readonly processorFeatures?: SecurityHubAwsRdsDbProcessorFeature[];

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#ListenerEndpoint
   */
  readonly listenerEndpoint?: SecurityHubAwsRdsDbInstanceEndpoint;

  /**
   * @schema SecurityHubAwsRdsDbInstanceDetails#MaxAllocatedStorage
   */
  readonly maxAllocatedStorage?: number;

}

/**
 * @schema SecurityHubAwsSnsTopicDetails
 */
export interface SecurityHubAwsSnsTopicDetails {
  /**
   * @schema SecurityHubAwsSnsTopicDetails#KmsMasterKeyId
   */
  readonly kmsMasterKeyId?: string;

  /**
   * @schema SecurityHubAwsSnsTopicDetails#Subscription
   */
  readonly subscription?: SecurityHubAwsSnsTopicSubscription[];

  /**
   * @schema SecurityHubAwsSnsTopicDetails#TopicName
   */
  readonly topicName?: string;

  /**
   * @schema SecurityHubAwsSnsTopicDetails#Owner
   */
  readonly owner?: string;

}

/**
 * @schema SecurityHubAwsSqsQueueDetails
 */
export interface SecurityHubAwsSqsQueueDetails {
  /**
   * @schema SecurityHubAwsSqsQueueDetails#KmsDataKeyReusePeriodSeconds
   */
  readonly kmsDataKeyReusePeriodSeconds?: number;

  /**
   * @schema SecurityHubAwsSqsQueueDetails#KmsMasterKeyId
   */
  readonly kmsMasterKeyId?: string;

  /**
   * @schema SecurityHubAwsSqsQueueDetails#QueueName
   */
  readonly queueName?: string;

  /**
   * @schema SecurityHubAwsSqsQueueDetails#DeadLetterTargetArn
   */
  readonly deadLetterTargetArn?: string;

}

/**
 * @schema SecurityHubAwsWafWebAclDetails
 */
export interface SecurityHubAwsWafWebAclDetails {
  /**
   * @schema SecurityHubAwsWafWebAclDetails#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubAwsWafWebAclDetails#DefaultAction
   */
  readonly defaultAction?: string;

  /**
   * @schema SecurityHubAwsWafWebAclDetails#Rules
   */
  readonly rules?: SecurityHubAwsWafWebAclRule[];

  /**
   * @schema SecurityHubAwsWafWebAclDetails#WebAclId
   */
  readonly webAclId?: string;

}

/**
 * @schema SecurityHubAwsRdsDbSnapshotDetails
 */
export interface SecurityHubAwsRdsDbSnapshotDetails {
  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#DbSnapshotIdentifier
   */
  readonly dbSnapshotIdentifier?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#DbInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#SnapshotCreateTime
   */
  readonly snapshotCreateTime?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#Engine
   */
  readonly engine?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#Status
   */
  readonly status?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#Port
   */
  readonly port?: number;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#InstanceCreateTime
   */
  readonly instanceCreateTime?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#SnapshotType
   */
  readonly snapshotType?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#Iops
   */
  readonly iops?: number;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#PercentProgress
   */
  readonly percentProgress?: number;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#SourceRegion
   */
  readonly sourceRegion?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#SourceDbSnapshotIdentifier
   */
  readonly sourceDbSnapshotIdentifier?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#IamDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#ProcessorFeatures
   */
  readonly processorFeatures?: SecurityHubAwsRdsDbProcessorFeature[];

  /**
   * @schema SecurityHubAwsRdsDbSnapshotDetails#DbiResourceId
   */
  readonly dbiResourceId?: string;

}

/**
 * @schema SecurityHubAwsRdsDbClusterSnapshotDetails
 */
export interface SecurityHubAwsRdsDbClusterSnapshotDetails {
  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#SnapshotCreateTime
   */
  readonly snapshotCreateTime?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#Engine
   */
  readonly engine?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#Status
   */
  readonly status?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#Port
   */
  readonly port?: number;

  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#ClusterCreateTime
   */
  readonly clusterCreateTime?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#SnapshotType
   */
  readonly snapshotType?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#PercentProgress
   */
  readonly percentProgress?: number;

  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#DbClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#DbClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterSnapshotDetails#IamDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

}

/**
 * @schema SecurityHubAwsRdsDbClusterDetails
 */
export interface SecurityHubAwsRdsDbClusterDetails {
  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#Status
   */
  readonly status?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#ReaderEndpoint
   */
  readonly readerEndpoint?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#CustomEndpoints
   */
  readonly customEndpoints?: string[];

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#MultiAz
   */
  readonly multiAz?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#Engine
   */
  readonly engine?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#Port
   */
  readonly port?: number;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#ReadReplicaIdentifiers
   */
  readonly readReplicaIdentifiers?: string[];

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#VpcSecurityGroups
   */
  readonly vpcSecurityGroups?: SecurityHubAwsRdsDbInstanceVpcSecurityGroup[];

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#DbClusterResourceId
   */
  readonly dbClusterResourceId?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#AssociatedRoles
   */
  readonly associatedRoles?: SecurityHubAwsRdsDbClusterAssociatedRole[];

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#ClusterCreateTime
   */
  readonly clusterCreateTime?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#EnabledCloudWatchLogsExports
   */
  readonly enabledCloudWatchLogsExports?: string[];

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#EngineMode
   */
  readonly engineMode?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#HttpEndpointEnabled
   */
  readonly httpEndpointEnabled?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#ActivityStreamStatus
   */
  readonly activityStreamStatus?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#CrossAccountClone
   */
  readonly crossAccountClone?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#DomainMemberships
   */
  readonly domainMemberships?: SecurityHubAwsRdsDbDomainMembership[];

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#DbClusterParameterGroup
   */
  readonly dbClusterParameterGroup?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#DbSubnetGroup
   */
  readonly dbSubnetGroup?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#DbClusterOptionGroupMemberships
   */
  readonly dbClusterOptionGroupMemberships?: SecurityHubAwsRdsDbClusterOptionGroupMembership[];

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#DbClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#DbClusterMembers
   */
  readonly dbClusterMembers?: SecurityHubAwsRdsDbClusterMember[];

  /**
   * @schema SecurityHubAwsRdsDbClusterDetails#IamDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

}

/**
 * @schema SecurityHubContainerDetails
 */
export interface SecurityHubContainerDetails {
  /**
   * @schema SecurityHubContainerDetails#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubContainerDetails#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema SecurityHubContainerDetails#ImageName
   */
  readonly imageName?: string;

  /**
   * @schema SecurityHubContainerDetails#LaunchedAt
   */
  readonly launchedAt?: string;

}

/**
 * @schema SecurityHubAwsCodeBuildProjectEnvironment
 */
export interface SecurityHubAwsCodeBuildProjectEnvironment {
  /**
   * @schema SecurityHubAwsCodeBuildProjectEnvironment#Certificate
   */
  readonly certificate?: string;

  /**
   * @schema SecurityHubAwsCodeBuildProjectEnvironment#ImagePullCredentialsType
   */
  readonly imagePullCredentialsType?: string;

  /**
   * @schema SecurityHubAwsCodeBuildProjectEnvironment#RegistryCredential
   */
  readonly registryCredential?: SecurityHubAwsCodeBuildProjectEnvironmentRegistryCredential;

  /**
   * @schema SecurityHubAwsCodeBuildProjectEnvironment#Type
   */
  readonly type?: string;

}

/**
 * @schema SecurityHubAwsCodeBuildProjectSource
 */
export interface SecurityHubAwsCodeBuildProjectSource {
  /**
   * @schema SecurityHubAwsCodeBuildProjectSource#Type
   */
  readonly type?: string;

  /**
   * @schema SecurityHubAwsCodeBuildProjectSource#Location
   */
  readonly location?: string;

  /**
   * @schema SecurityHubAwsCodeBuildProjectSource#GitCloneDepth
   */
  readonly gitCloneDepth?: number;

  /**
   * @schema SecurityHubAwsCodeBuildProjectSource#InsecureSsl
   */
  readonly insecureSsl?: boolean;

}

/**
 * @schema SecurityHubAwsCodeBuildProjectVpcConfig
 */
export interface SecurityHubAwsCodeBuildProjectVpcConfig {
  /**
   * @schema SecurityHubAwsCodeBuildProjectVpcConfig#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema SecurityHubAwsCodeBuildProjectVpcConfig#Subnets
   */
  readonly subnets?: string[];

  /**
   * @schema SecurityHubAwsCodeBuildProjectVpcConfig#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * @schema SecurityHubAwsCloudFrontDistributionCacheBehaviors
 */
export interface SecurityHubAwsCloudFrontDistributionCacheBehaviors {
  /**
   * @schema SecurityHubAwsCloudFrontDistributionCacheBehaviors#Items
   */
  readonly items?: SecurityHubAwsCloudFrontDistributionCacheBehavior[];

}

/**
 * @schema SecurityHubAwsCloudFrontDistributionDefaultCacheBehavior
 */
export interface SecurityHubAwsCloudFrontDistributionDefaultCacheBehavior {
  /**
   * @schema SecurityHubAwsCloudFrontDistributionDefaultCacheBehavior#ViewerProtocolPolicy
   */
  readonly viewerProtocolPolicy?: string;

}

/**
 * @schema SecurityHubAwsCloudFrontDistributionLogging
 */
export interface SecurityHubAwsCloudFrontDistributionLogging {
  /**
   * @schema SecurityHubAwsCloudFrontDistributionLogging#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema SecurityHubAwsCloudFrontDistributionLogging#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema SecurityHubAwsCloudFrontDistributionLogging#IncludeCookies
   */
  readonly includeCookies?: boolean;

  /**
   * @schema SecurityHubAwsCloudFrontDistributionLogging#Prefix
   */
  readonly prefix?: string;

}

/**
 * @schema SecurityHubAwsCloudFrontDistributionOrigins
 */
export interface SecurityHubAwsCloudFrontDistributionOrigins {
  /**
   * @schema SecurityHubAwsCloudFrontDistributionOrigins#Items
   */
  readonly items?: SecurityHubAwsCloudFrontDistributionOriginItem[];

}

/**
 * @schema SecurityHubAwsCloudFrontDistributionOriginGroups
 */
export interface SecurityHubAwsCloudFrontDistributionOriginGroups {
  /**
   * @schema SecurityHubAwsCloudFrontDistributionOriginGroups#Items
   */
  readonly items?: SecurityHubAwsCloudFrontDistributionOriginGroup[];

}

/**
 * @schema SecurityHubAwsEc2NetworkInterfaceAttachment
 */
export interface SecurityHubAwsEc2NetworkInterfaceAttachment {
  /**
   * @schema SecurityHubAwsEc2NetworkInterfaceAttachment#AttachTime
   */
  readonly attachTime?: string;

  /**
   * @schema SecurityHubAwsEc2NetworkInterfaceAttachment#AttachmentId
   */
  readonly attachmentId?: string;

  /**
   * @schema SecurityHubAwsEc2NetworkInterfaceAttachment#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

  /**
   * @schema SecurityHubAwsEc2NetworkInterfaceAttachment#DeviceIndex
   */
  readonly deviceIndex?: number;

  /**
   * @schema SecurityHubAwsEc2NetworkInterfaceAttachment#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SecurityHubAwsEc2NetworkInterfaceAttachment#InstanceOwnerId
   */
  readonly instanceOwnerId?: string;

  /**
   * @schema SecurityHubAwsEc2NetworkInterfaceAttachment#Status
   */
  readonly status?: string;

}

/**
 * @schema SecurityHubAwsEc2NetworkInterfaceSecurityGroup
 */
export interface SecurityHubAwsEc2NetworkInterfaceSecurityGroup {
  /**
   * @schema SecurityHubAwsEc2NetworkInterfaceSecurityGroup#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema SecurityHubAwsEc2NetworkInterfaceSecurityGroup#GroupId
   */
  readonly groupId?: string;

}

/**
 * @schema SecurityHubAwsEc2SecurityGroupIpPermission
 */
export interface SecurityHubAwsEc2SecurityGroupIpPermission {
  /**
   * @schema SecurityHubAwsEc2SecurityGroupIpPermission#IpProtocol
   */
  readonly ipProtocol?: string;

  /**
   * @schema SecurityHubAwsEc2SecurityGroupIpPermission#FromPort
   */
  readonly fromPort?: number;

  /**
   * @schema SecurityHubAwsEc2SecurityGroupIpPermission#ToPort
   */
  readonly toPort?: number;

  /**
   * @schema SecurityHubAwsEc2SecurityGroupIpPermission#UserIdGroupPairs
   */
  readonly userIdGroupPairs?: SecurityHubAwsEc2SecurityGroupUserIdGroupPair[];

  /**
   * @schema SecurityHubAwsEc2SecurityGroupIpPermission#IpRanges
   */
  readonly ipRanges?: SecurityHubAwsEc2SecurityGroupIpRange[];

  /**
   * @schema SecurityHubAwsEc2SecurityGroupIpPermission#Ipv6Ranges
   */
  readonly ipv6Ranges?: SecurityHubAwsEc2SecurityGroupIpv6Range[];

  /**
   * @schema SecurityHubAwsEc2SecurityGroupIpPermission#PrefixListIds
   */
  readonly prefixListIds?: SecurityHubAwsEc2SecurityGroupPrefixListId[];

}

/**
 * @schema SecurityHubAwsEc2VolumeAttachment
 */
export interface SecurityHubAwsEc2VolumeAttachment {
  /**
   * @schema SecurityHubAwsEc2VolumeAttachment#AttachTime
   */
  readonly attachTime?: string;

  /**
   * @schema SecurityHubAwsEc2VolumeAttachment#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

  /**
   * @schema SecurityHubAwsEc2VolumeAttachment#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SecurityHubAwsEc2VolumeAttachment#Status
   */
  readonly status?: string;

}

/**
 * @schema SecurityHubCidrBlockAssociation
 */
export interface SecurityHubCidrBlockAssociation {
  /**
   * @schema SecurityHubCidrBlockAssociation#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema SecurityHubCidrBlockAssociation#CidrBlock
   */
  readonly cidrBlock?: string;

  /**
   * @schema SecurityHubCidrBlockAssociation#CidrBlockState
   */
  readonly cidrBlockState?: string;

}

/**
 * @schema SecurityHubIpv6CidrBlockAssociation
 */
export interface SecurityHubIpv6CidrBlockAssociation {
  /**
   * @schema SecurityHubIpv6CidrBlockAssociation#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema SecurityHubIpv6CidrBlockAssociation#Ipv6CidrBlock
   */
  readonly ipv6CidrBlock?: string;

  /**
   * @schema SecurityHubIpv6CidrBlockAssociation#CidrBlockState
   */
  readonly cidrBlockState?: string;

}

/**
 * @schema SecurityHubAvailabilityZone
 */
export interface SecurityHubAvailabilityZone {
  /**
   * @schema SecurityHubAvailabilityZone#ZoneName
   */
  readonly zoneName?: string;

  /**
   * @schema SecurityHubAvailabilityZone#SubnetId
   */
  readonly subnetId?: string;

}

/**
 * @schema SecurityHubLoadBalancerState
 */
export interface SecurityHubLoadBalancerState {
  /**
   * @schema SecurityHubLoadBalancerState#Code
   */
  readonly code?: string;

  /**
   * @schema SecurityHubLoadBalancerState#Reason
   */
  readonly reason?: string;

}

/**
 * @schema SecurityHubAwsElasticsearchDomainDomainEndpointOptions
 */
export interface SecurityHubAwsElasticsearchDomainDomainEndpointOptions {
  /**
   * @schema SecurityHubAwsElasticsearchDomainDomainEndpointOptions#EnforceHTTPS
   */
  readonly enforceHttps?: boolean;

  /**
   * @schema SecurityHubAwsElasticsearchDomainDomainEndpointOptions#TLSSecurityPolicy
   */
  readonly tlsSecurityPolicy?: string;

}

/**
 * @schema SecurityHubAwsElasticsearchDomainEncryptionAtRestOptions
 */
export interface SecurityHubAwsElasticsearchDomainEncryptionAtRestOptions {
  /**
   * @schema SecurityHubAwsElasticsearchDomainEncryptionAtRestOptions#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema SecurityHubAwsElasticsearchDomainEncryptionAtRestOptions#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema SecurityHubAwsElasticsearchDomainNodeToNodeEncryptionOptions
 */
export interface SecurityHubAwsElasticsearchDomainNodeToNodeEncryptionOptions {
  /**
   * @schema SecurityHubAwsElasticsearchDomainNodeToNodeEncryptionOptions#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema SecurityHubAwsElasticsearchDomainVpcOptions
 */
export interface SecurityHubAwsElasticsearchDomainVpcOptions {
  /**
   * @schema SecurityHubAwsElasticsearchDomainVpcOptions#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema SecurityHubAwsElasticsearchDomainVpcOptions#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema SecurityHubAwsElasticsearchDomainVpcOptions#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema SecurityHubAwsElasticsearchDomainVpcOptions#VPCId
   */
  readonly vpcId?: string;

}

/**
 * @schema SecurityHubAwsS3BucketServerSideEncryptionConfiguration
 */
export interface SecurityHubAwsS3BucketServerSideEncryptionConfiguration {
  /**
   * @schema SecurityHubAwsS3BucketServerSideEncryptionConfiguration#Rules
   */
  readonly rules?: SecurityHubAwsS3BucketServerSideEncryptionRule[];

}

/**
 * @schema SecurityHubAwsSecretsManagerSecretRotationRules
 */
export interface SecurityHubAwsSecretsManagerSecretRotationRules {
  /**
   * @schema SecurityHubAwsSecretsManagerSecretRotationRules#AutomaticallyAfterDays
   */
  readonly automaticallyAfterDays?: number;

}

/**
 * @schema SecurityHubAwsIamAccessKeySessionContext
 */
export interface SecurityHubAwsIamAccessKeySessionContext {
  /**
   * @schema SecurityHubAwsIamAccessKeySessionContext#Attributes
   */
  readonly attributes?: SecurityHubAwsIamAccessKeySessionContextAttributes;

  /**
   * @schema SecurityHubAwsIamAccessKeySessionContext#SessionIssuer
   */
  readonly sessionIssuer?: SecurityHubAwsIamAccessKeySessionContextSessionIssuer;

}

/**
 * @schema SecurityHubAwsIamAttachedManagedPolicy
 */
export interface SecurityHubAwsIamAttachedManagedPolicy {
  /**
   * @schema SecurityHubAwsIamAttachedManagedPolicy#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema SecurityHubAwsIamAttachedManagedPolicy#PolicyArn
   */
  readonly policyArn?: string;

}

/**
 * @schema SecurityHubAwsIamPermissionsBoundary
 */
export interface SecurityHubAwsIamPermissionsBoundary {
  /**
   * @schema SecurityHubAwsIamPermissionsBoundary#PermissionsBoundaryArn
   */
  readonly permissionsBoundaryArn?: string;

  /**
   * @schema SecurityHubAwsIamPermissionsBoundary#PermissionsBoundaryType
   */
  readonly permissionsBoundaryType?: string;

}

/**
 * @schema SecurityHubAwsIamUserPolicy
 */
export interface SecurityHubAwsIamUserPolicy {
  /**
   * @schema SecurityHubAwsIamUserPolicy#PolicyName
   */
  readonly policyName?: string;

}

/**
 * @schema SecurityHubAwsIamPolicyVersion
 */
export interface SecurityHubAwsIamPolicyVersion {
  /**
   * @schema SecurityHubAwsIamPolicyVersion#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema SecurityHubAwsIamPolicyVersion#IsDefaultVersion
   */
  readonly isDefaultVersion?: boolean;

  /**
   * @schema SecurityHubAwsIamPolicyVersion#CreateDate
   */
  readonly createDate?: string;

}

/**
 * @schema SecurityHubAwsApiGatewayV2RouteSettings
 */
export interface SecurityHubAwsApiGatewayV2RouteSettings {
  /**
   * @schema SecurityHubAwsApiGatewayV2RouteSettings#DetailedMetricsEnabled
   */
  readonly detailedMetricsEnabled?: boolean;

  /**
   * @schema SecurityHubAwsApiGatewayV2RouteSettings#LoggingLevel
   */
  readonly loggingLevel?: string;

  /**
   * @schema SecurityHubAwsApiGatewayV2RouteSettings#DataTraceEnabled
   */
  readonly dataTraceEnabled?: boolean;

  /**
   * @schema SecurityHubAwsApiGatewayV2RouteSettings#ThrottlingBurstLimit
   */
  readonly throttlingBurstLimit?: number;

  /**
   * @schema SecurityHubAwsApiGatewayV2RouteSettings#ThrottlingRateLimit
   */
  readonly throttlingRateLimit?: number;

}

/**
 * @schema SecurityHubAwsApiGatewayAccessLogSettings
 */
export interface SecurityHubAwsApiGatewayAccessLogSettings {
  /**
   * @schema SecurityHubAwsApiGatewayAccessLogSettings#Format
   */
  readonly format?: string;

  /**
   * @schema SecurityHubAwsApiGatewayAccessLogSettings#DestinationArn
   */
  readonly destinationArn?: string;

}

/**
 * @schema SecurityHubAwsCorsConfiguration
 */
export interface SecurityHubAwsCorsConfiguration {
  /**
   * @schema SecurityHubAwsCorsConfiguration#AllowOrigins
   */
  readonly allowOrigins?: string[];

  /**
   * @schema SecurityHubAwsCorsConfiguration#AllowCredentials
   */
  readonly allowCredentials?: boolean;

  /**
   * @schema SecurityHubAwsCorsConfiguration#ExposeHeaders
   */
  readonly exposeHeaders?: string[];

  /**
   * @schema SecurityHubAwsCorsConfiguration#MaxAge
   */
  readonly maxAge?: number;

  /**
   * @schema SecurityHubAwsCorsConfiguration#AllowMethods
   */
  readonly allowMethods?: string[];

  /**
   * @schema SecurityHubAwsCorsConfiguration#AllowHeaders
   */
  readonly allowHeaders?: string[];

}

/**
 * @schema SecurityHubAwsDynamoDbTableAttributeDefinition
 */
export interface SecurityHubAwsDynamoDbTableAttributeDefinition {
  /**
   * @schema SecurityHubAwsDynamoDbTableAttributeDefinition#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableAttributeDefinition#AttributeType
   */
  readonly attributeType?: string;

}

/**
 * @schema SecurityHubAwsDynamoDbTableBillingModeSummary
 */
export interface SecurityHubAwsDynamoDbTableBillingModeSummary {
  /**
   * @schema SecurityHubAwsDynamoDbTableBillingModeSummary#BillingMode
   */
  readonly billingMode?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableBillingModeSummary#LastUpdateToPayPerRequestDateTime
   */
  readonly lastUpdateToPayPerRequestDateTime?: string;

}

/**
 * @schema SecurityHubAwsDynamoDbTableGlobalSecondaryIndex
 */
export interface SecurityHubAwsDynamoDbTableGlobalSecondaryIndex {
  /**
   * @schema SecurityHubAwsDynamoDbTableGlobalSecondaryIndex#Backfilling
   */
  readonly backfilling?: boolean;

  /**
   * @schema SecurityHubAwsDynamoDbTableGlobalSecondaryIndex#IndexArn
   */
  readonly indexArn?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableGlobalSecondaryIndex#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableGlobalSecondaryIndex#IndexSizeBytes
   */
  readonly indexSizeBytes?: number;

  /**
   * @schema SecurityHubAwsDynamoDbTableGlobalSecondaryIndex#IndexStatus
   */
  readonly indexStatus?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableGlobalSecondaryIndex#ItemCount
   */
  readonly itemCount?: number;

  /**
   * @schema SecurityHubAwsDynamoDbTableGlobalSecondaryIndex#KeySchema
   */
  readonly keySchema?: SecurityHubAwsDynamoDbTableKeySchema[];

  /**
   * @schema SecurityHubAwsDynamoDbTableGlobalSecondaryIndex#Projection
   */
  readonly projection?: SecurityHubAwsDynamoDbTableProjection;

  /**
   * @schema SecurityHubAwsDynamoDbTableGlobalSecondaryIndex#ProvisionedThroughput
   */
  readonly provisionedThroughput?: SecurityHubAwsDynamoDbTableProvisionedThroughput;

}

/**
 * @schema SecurityHubAwsDynamoDbTableKeySchema
 */
export interface SecurityHubAwsDynamoDbTableKeySchema {
  /**
   * @schema SecurityHubAwsDynamoDbTableKeySchema#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableKeySchema#KeyType
   */
  readonly keyType?: string;

}

/**
 * @schema SecurityHubAwsDynamoDbTableLocalSecondaryIndex
 */
export interface SecurityHubAwsDynamoDbTableLocalSecondaryIndex {
  /**
   * @schema SecurityHubAwsDynamoDbTableLocalSecondaryIndex#IndexArn
   */
  readonly indexArn?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableLocalSecondaryIndex#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableLocalSecondaryIndex#KeySchema
   */
  readonly keySchema?: SecurityHubAwsDynamoDbTableKeySchema[];

  /**
   * @schema SecurityHubAwsDynamoDbTableLocalSecondaryIndex#Projection
   */
  readonly projection?: SecurityHubAwsDynamoDbTableProjection;

}

/**
 * @schema SecurityHubAwsDynamoDbTableProvisionedThroughput
 */
export interface SecurityHubAwsDynamoDbTableProvisionedThroughput {
  /**
   * @schema SecurityHubAwsDynamoDbTableProvisionedThroughput#LastDecreaseDateTime
   */
  readonly lastDecreaseDateTime?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableProvisionedThroughput#LastIncreaseDateTime
   */
  readonly lastIncreaseDateTime?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableProvisionedThroughput#NumberOfDecreasesToday
   */
  readonly numberOfDecreasesToday?: number;

  /**
   * @schema SecurityHubAwsDynamoDbTableProvisionedThroughput#ReadCapacityUnits
   */
  readonly readCapacityUnits?: number;

  /**
   * @schema SecurityHubAwsDynamoDbTableProvisionedThroughput#WriteCapacityUnits
   */
  readonly writeCapacityUnits?: number;

}

/**
 * @schema SecurityHubAwsDynamoDbTableReplica
 */
export interface SecurityHubAwsDynamoDbTableReplica {
  /**
   * @schema SecurityHubAwsDynamoDbTableReplica#GlobalSecondaryIndexes
   */
  readonly globalSecondaryIndexes?: SecurityHubAwsDynamoDbTableReplicaGlobalSecondaryIndex[];

  /**
   * @schema SecurityHubAwsDynamoDbTableReplica#KmsMasterKeyId
   */
  readonly kmsMasterKeyId?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableReplica#ProvisionedThroughputOverride
   */
  readonly provisionedThroughputOverride?: SecurityHubAwsDynamoDbTableProvisionedThroughputOverride;

  /**
   * @schema SecurityHubAwsDynamoDbTableReplica#RegionName
   */
  readonly regionName?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableReplica#ReplicaStatus
   */
  readonly replicaStatus?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableReplica#ReplicaStatusDescription
   */
  readonly replicaStatusDescription?: string;

}

/**
 * @schema SecurityHubAwsDynamoDbTableRestoreSummary
 */
export interface SecurityHubAwsDynamoDbTableRestoreSummary {
  /**
   * @schema SecurityHubAwsDynamoDbTableRestoreSummary#SourceBackupArn
   */
  readonly sourceBackupArn?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableRestoreSummary#SourceTableArn
   */
  readonly sourceTableArn?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableRestoreSummary#RestoreDateTime
   */
  readonly restoreDateTime?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableRestoreSummary#RestoreInProgress
   */
  readonly restoreInProgress?: boolean;

}

/**
 * @schema SecurityHubAwsDynamoDbTableSseDescription
 */
export interface SecurityHubAwsDynamoDbTableSseDescription {
  /**
   * @schema SecurityHubAwsDynamoDbTableSseDescription#InaccessibleEncryptionDateTime
   */
  readonly inaccessibleEncryptionDateTime?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableSseDescription#Status
   */
  readonly status?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableSseDescription#SseType
   */
  readonly sseType?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableSseDescription#KmsMasterKeyArn
   */
  readonly kmsMasterKeyArn?: string;

}

/**
 * @schema SecurityHubAwsDynamoDbTableStreamSpecification
 */
export interface SecurityHubAwsDynamoDbTableStreamSpecification {
  /**
   * @schema SecurityHubAwsDynamoDbTableStreamSpecification#StreamEnabled
   */
  readonly streamEnabled?: boolean;

  /**
   * @schema SecurityHubAwsDynamoDbTableStreamSpecification#StreamViewType
   */
  readonly streamViewType?: string;

}

/**
 * @schema SecurityHubAwsApiGatewayMethodSettings
 */
export interface SecurityHubAwsApiGatewayMethodSettings {
  /**
   * @schema SecurityHubAwsApiGatewayMethodSettings#MetricsEnabled
   */
  readonly metricsEnabled?: boolean;

  /**
   * @schema SecurityHubAwsApiGatewayMethodSettings#LoggingLevel
   */
  readonly loggingLevel?: string;

  /**
   * @schema SecurityHubAwsApiGatewayMethodSettings#DataTraceEnabled
   */
  readonly dataTraceEnabled?: boolean;

  /**
   * @schema SecurityHubAwsApiGatewayMethodSettings#ThrottlingBurstLimit
   */
  readonly throttlingBurstLimit?: number;

  /**
   * @schema SecurityHubAwsApiGatewayMethodSettings#ThrottlingRateLimit
   */
  readonly throttlingRateLimit?: number;

  /**
   * @schema SecurityHubAwsApiGatewayMethodSettings#CachingEnabled
   */
  readonly cachingEnabled?: boolean;

  /**
   * @schema SecurityHubAwsApiGatewayMethodSettings#CacheTtlInSeconds
   */
  readonly cacheTtlInSeconds?: number;

  /**
   * @schema SecurityHubAwsApiGatewayMethodSettings#CacheDataEncrypted
   */
  readonly cacheDataEncrypted?: boolean;

  /**
   * @schema SecurityHubAwsApiGatewayMethodSettings#RequireAuthorizationForCacheControl
   */
  readonly requireAuthorizationForCacheControl?: boolean;

  /**
   * @schema SecurityHubAwsApiGatewayMethodSettings#UnauthorizedCacheControlHeaderStrategy
   */
  readonly unauthorizedCacheControlHeaderStrategy?: string;

  /**
   * @schema SecurityHubAwsApiGatewayMethodSettings#HttpMethod
   */
  readonly httpMethod?: string;

  /**
   * @schema SecurityHubAwsApiGatewayMethodSettings#ResourcePath
   */
  readonly resourcePath?: string;

}

/**
 * @schema SecurityHubAwsApiGatewayCanarySettings
 */
export interface SecurityHubAwsApiGatewayCanarySettings {
  /**
   * @schema SecurityHubAwsApiGatewayCanarySettings#PercentTraffic
   */
  readonly percentTraffic?: number;

  /**
   * @schema SecurityHubAwsApiGatewayCanarySettings#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema SecurityHubAwsApiGatewayCanarySettings#StageVariableOverrides
   */
  readonly stageVariableOverrides?: { [key: string]: string };

  /**
   * @schema SecurityHubAwsApiGatewayCanarySettings#UseStageCache
   */
  readonly useStageCache?: boolean;

}

/**
 * @schema SecurityHubAwsApiGatewayEndpointConfiguration
 */
export interface SecurityHubAwsApiGatewayEndpointConfiguration {
  /**
   * @schema SecurityHubAwsApiGatewayEndpointConfiguration#Types
   */
  readonly types?: string[];

}

/**
 * @schema SecurityHubAwsCertificateManagerCertificateDomainValidationOption
 */
export interface SecurityHubAwsCertificateManagerCertificateDomainValidationOption {
  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDomainValidationOption#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDomainValidationOption#ResourceRecord
   */
  readonly resourceRecord?: SecurityHubAwsCertificateManagerCertificateResourceRecord;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDomainValidationOption#ValidationDomain
   */
  readonly validationDomain?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDomainValidationOption#ValidationEmails
   */
  readonly validationEmails?: string[];

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDomainValidationOption#ValidationMethod
   */
  readonly validationMethod?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateDomainValidationOption#ValidationStatus
   */
  readonly validationStatus?: string;

}

/**
 * @schema SecurityHubAwsCertificateManagerCertificateExtendedKeyUsage
 */
export interface SecurityHubAwsCertificateManagerCertificateExtendedKeyUsage {
  /**
   * @schema SecurityHubAwsCertificateManagerCertificateExtendedKeyUsage#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateExtendedKeyUsage#OId
   */
  readonly oId?: string;

}

/**
 * @schema SecurityHubAwsCertificateManagerCertificateKeyUsage
 */
export interface SecurityHubAwsCertificateManagerCertificateKeyUsage {
  /**
   * @schema SecurityHubAwsCertificateManagerCertificateKeyUsage#Name
   */
  readonly name?: string;

}

/**
 * @schema SecurityHubAwsCertificateManagerCertificateOptions
 */
export interface SecurityHubAwsCertificateManagerCertificateOptions {
  /**
   * @schema SecurityHubAwsCertificateManagerCertificateOptions#CertificateTransparencyLoggingPreference
   */
  readonly certificateTransparencyLoggingPreference?: string;

}

/**
 * @schema SecurityHubAwsCertificateManagerCertificateRenewalSummary
 */
export interface SecurityHubAwsCertificateManagerCertificateRenewalSummary {
  /**
   * @schema SecurityHubAwsCertificateManagerCertificateRenewalSummary#DomainValidationOptions
   */
  readonly domainValidationOptions?: SecurityHubAwsCertificateManagerCertificateDomainValidationOption[];

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateRenewalSummary#RenewalStatus
   */
  readonly renewalStatus?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateRenewalSummary#RenewalStatusReason
   */
  readonly renewalStatusReason?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateRenewalSummary#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema SecurityHubAwsRedshiftClusterClusterNode
 */
export interface SecurityHubAwsRedshiftClusterClusterNode {
  /**
   * @schema SecurityHubAwsRedshiftClusterClusterNode#NodeRole
   */
  readonly nodeRole?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterClusterNode#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterClusterNode#PublicIpAddress
   */
  readonly publicIpAddress?: string;

}

/**
 * @schema SecurityHubAwsRedshiftClusterClusterParameterGroup
 */
export interface SecurityHubAwsRedshiftClusterClusterParameterGroup {
  /**
   * @schema SecurityHubAwsRedshiftClusterClusterParameterGroup#ClusterParameterStatusList
   */
  readonly clusterParameterStatusList?: SecurityHubAwsRedshiftClusterClusterParameterStatus[];

  /**
   * @schema SecurityHubAwsRedshiftClusterClusterParameterGroup#ParameterApplyStatus
   */
  readonly parameterApplyStatus?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterClusterParameterGroup#ParameterGroupName
   */
  readonly parameterGroupName?: string;

}

/**
 * @schema SecurityHubAwsRedshiftClusterClusterSecurityGroup
 */
export interface SecurityHubAwsRedshiftClusterClusterSecurityGroup {
  /**
   * @schema SecurityHubAwsRedshiftClusterClusterSecurityGroup#ClusterSecurityGroupName
   */
  readonly clusterSecurityGroupName?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterClusterSecurityGroup#Status
   */
  readonly status?: string;

}

/**
 * @schema SecurityHubAwsRedshiftClusterClusterSnapshotCopyStatus
 */
export interface SecurityHubAwsRedshiftClusterClusterSnapshotCopyStatus {
  /**
   * @schema SecurityHubAwsRedshiftClusterClusterSnapshotCopyStatus#DestinationRegion
   */
  readonly destinationRegion?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterClusterSnapshotCopyStatus#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

  /**
   * @schema SecurityHubAwsRedshiftClusterClusterSnapshotCopyStatus#RetentionPeriod
   */
  readonly retentionPeriod?: number;

  /**
   * @schema SecurityHubAwsRedshiftClusterClusterSnapshotCopyStatus#SnapshotCopyGrantName
   */
  readonly snapshotCopyGrantName?: string;

}

/**
 * @schema SecurityHubAwsRedshiftClusterDeferredMaintenanceWindow
 */
export interface SecurityHubAwsRedshiftClusterDeferredMaintenanceWindow {
  /**
   * @schema SecurityHubAwsRedshiftClusterDeferredMaintenanceWindow#DeferMaintenanceEndTime
   */
  readonly deferMaintenanceEndTime?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDeferredMaintenanceWindow#DeferMaintenanceIdentifier
   */
  readonly deferMaintenanceIdentifier?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterDeferredMaintenanceWindow#DeferMaintenanceStartTime
   */
  readonly deferMaintenanceStartTime?: string;

}

/**
 * @schema SecurityHubAwsRedshiftClusterElasticIpStatus
 */
export interface SecurityHubAwsRedshiftClusterElasticIpStatus {
  /**
   * @schema SecurityHubAwsRedshiftClusterElasticIpStatus#ElasticIp
   */
  readonly elasticIp?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterElasticIpStatus#Status
   */
  readonly status?: string;

}

/**
 * @schema SecurityHubAwsRedshiftClusterEndpoint
 */
export interface SecurityHubAwsRedshiftClusterEndpoint {
  /**
   * @schema SecurityHubAwsRedshiftClusterEndpoint#Address
   */
  readonly address?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterEndpoint#Port
   */
  readonly port?: number;

}

/**
 * @schema SecurityHubAwsRedshiftClusterHsmStatus
 */
export interface SecurityHubAwsRedshiftClusterHsmStatus {
  /**
   * @schema SecurityHubAwsRedshiftClusterHsmStatus#HsmClientCertificateIdentifier
   */
  readonly hsmClientCertificateIdentifier?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterHsmStatus#HsmConfigurationIdentifier
   */
  readonly hsmConfigurationIdentifier?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterHsmStatus#Status
   */
  readonly status?: string;

}

/**
 * @schema SecurityHubAwsRedshiftClusterIamRole
 */
export interface SecurityHubAwsRedshiftClusterIamRole {
  /**
   * @schema SecurityHubAwsRedshiftClusterIamRole#ApplyStatus
   */
  readonly applyStatus?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterIamRole#IamRoleArn
   */
  readonly iamRoleArn?: string;

}

/**
 * @schema SecurityHubAwsRedshiftClusterPendingModifiedValues
 */
export interface SecurityHubAwsRedshiftClusterPendingModifiedValues {
  /**
   * @schema SecurityHubAwsRedshiftClusterPendingModifiedValues#AutomatedSnapshotRetentionPeriod
   */
  readonly automatedSnapshotRetentionPeriod?: number;

  /**
   * @schema SecurityHubAwsRedshiftClusterPendingModifiedValues#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterPendingModifiedValues#ClusterType
   */
  readonly clusterType?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterPendingModifiedValues#ClusterVersion
   */
  readonly clusterVersion?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterPendingModifiedValues#EncryptionType
   */
  readonly encryptionType?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterPendingModifiedValues#EnhancedVpcRouting
   */
  readonly enhancedVpcRouting?: boolean;

  /**
   * @schema SecurityHubAwsRedshiftClusterPendingModifiedValues#MaintenanceTrackName
   */
  readonly maintenanceTrackName?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterPendingModifiedValues#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterPendingModifiedValues#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterPendingModifiedValues#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema SecurityHubAwsRedshiftClusterPendingModifiedValues#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

}

/**
 * @schema SecurityHubAwsRedshiftClusterResizeInfo
 */
export interface SecurityHubAwsRedshiftClusterResizeInfo {
  /**
   * @schema SecurityHubAwsRedshiftClusterResizeInfo#AllowCancelResize
   */
  readonly allowCancelResize?: boolean;

  /**
   * @schema SecurityHubAwsRedshiftClusterResizeInfo#ResizeType
   */
  readonly resizeType?: string;

}

/**
 * @schema SecurityHubAwsRedshiftClusterRestoreStatus
 */
export interface SecurityHubAwsRedshiftClusterRestoreStatus {
  /**
   * @schema SecurityHubAwsRedshiftClusterRestoreStatus#CurrentRestoreRateInMegaBytesPerSecond
   */
  readonly currentRestoreRateInMegaBytesPerSecond?: number;

  /**
   * @schema SecurityHubAwsRedshiftClusterRestoreStatus#ElapsedTimeInSeconds
   */
  readonly elapsedTimeInSeconds?: number;

  /**
   * @schema SecurityHubAwsRedshiftClusterRestoreStatus#EstimatedTimeToCompletionInSeconds
   */
  readonly estimatedTimeToCompletionInSeconds?: number;

  /**
   * @schema SecurityHubAwsRedshiftClusterRestoreStatus#ProgressInMegaBytes
   */
  readonly progressInMegaBytes?: number;

  /**
   * @schema SecurityHubAwsRedshiftClusterRestoreStatus#SnapshotSizeInMegaBytes
   */
  readonly snapshotSizeInMegaBytes?: number;

  /**
   * @schema SecurityHubAwsRedshiftClusterRestoreStatus#Status
   */
  readonly status?: string;

}

/**
 * @schema SecurityHubAwsRedshiftClusterVpcSecurityGroup
 */
export interface SecurityHubAwsRedshiftClusterVpcSecurityGroup {
  /**
   * @schema SecurityHubAwsRedshiftClusterVpcSecurityGroup#Status
   */
  readonly status?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterVpcSecurityGroup#VpcSecurityGroupId
   */
  readonly vpcSecurityGroupId?: string;

}

/**
 * @schema SecurityHubAwsElbLoadBalancerBackendServerDescription
 */
export interface SecurityHubAwsElbLoadBalancerBackendServerDescription {
  /**
   * @schema SecurityHubAwsElbLoadBalancerBackendServerDescription#InstancePort
   */
  readonly instancePort?: number;

  /**
   * @schema SecurityHubAwsElbLoadBalancerBackendServerDescription#PolicyNames
   */
  readonly policyNames?: string[];

}

/**
 * @schema SecurityHubAwsElbLoadBalancerHealthCheck
 */
export interface SecurityHubAwsElbLoadBalancerHealthCheck {
  /**
   * @schema SecurityHubAwsElbLoadBalancerHealthCheck#HealthyThreshold
   */
  readonly healthyThreshold?: number;

  /**
   * @schema SecurityHubAwsElbLoadBalancerHealthCheck#Interval
   */
  readonly interval?: number;

  /**
   * @schema SecurityHubAwsElbLoadBalancerHealthCheck#Target
   */
  readonly target?: string;

  /**
   * @schema SecurityHubAwsElbLoadBalancerHealthCheck#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema SecurityHubAwsElbLoadBalancerHealthCheck#UnhealthyThreshold
   */
  readonly unhealthyThreshold?: number;

}

/**
 * @schema SecurityHubAwsElbLoadBalancerInstance
 */
export interface SecurityHubAwsElbLoadBalancerInstance {
  /**
   * @schema SecurityHubAwsElbLoadBalancerInstance#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * @schema SecurityHubAwsElbLoadBalancerListenerDescription
 */
export interface SecurityHubAwsElbLoadBalancerListenerDescription {
  /**
   * @schema SecurityHubAwsElbLoadBalancerListenerDescription#Listener
   */
  readonly listener?: SecurityHubAwsElbLoadBalancerListener;

  /**
   * @schema SecurityHubAwsElbLoadBalancerListenerDescription#PolicyNames
   */
  readonly policyNames?: string[];

}

/**
 * @schema SecurityHubAwsElbLoadBalancerAttributes
 */
export interface SecurityHubAwsElbLoadBalancerAttributes {
  /**
   * @schema SecurityHubAwsElbLoadBalancerAttributes#AccessLog
   */
  readonly accessLog?: SecurityHubAwsElbLoadBalancerAccessLog;

  /**
   * @schema SecurityHubAwsElbLoadBalancerAttributes#ConnectionDraining
   */
  readonly connectionDraining?: SecurityHubAwsElbLoadBalancerConnectionDraining;

  /**
   * @schema SecurityHubAwsElbLoadBalancerAttributes#ConnectionSettings
   */
  readonly connectionSettings?: SecurityHubAwsElbLoadBalancerConnectionSettings;

  /**
   * @schema SecurityHubAwsElbLoadBalancerAttributes#CrossZoneLoadBalancing
   */
  readonly crossZoneLoadBalancing?: SecurityHubAwsElbLoadBalancerCrossZoneLoadBalancing;

}

/**
 * @schema SecurityHubAwsElbLoadBalancerPolicies
 */
export interface SecurityHubAwsElbLoadBalancerPolicies {
  /**
   * @schema SecurityHubAwsElbLoadBalancerPolicies#AppCookieStickinessPolicies
   */
  readonly appCookieStickinessPolicies?: SecurityHubAwsElbAppCookieStickinessPolicy[];

  /**
   * @schema SecurityHubAwsElbLoadBalancerPolicies#LbCookieStickinessPolicies
   */
  readonly lbCookieStickinessPolicies?: SecurityHubAwsElbLbCookieStickinessPolicy[];

  /**
   * @schema SecurityHubAwsElbLoadBalancerPolicies#OtherPolicies
   */
  readonly otherPolicies?: string[];

}

/**
 * @schema SecurityHubAwsElbLoadBalancerSourceSecurityGroup
 */
export interface SecurityHubAwsElbLoadBalancerSourceSecurityGroup {
  /**
   * @schema SecurityHubAwsElbLoadBalancerSourceSecurityGroup#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema SecurityHubAwsElbLoadBalancerSourceSecurityGroup#OwnerAlias
   */
  readonly ownerAlias?: string;

}

/**
 * @schema SecurityHubAwsIamGroupPolicy
 */
export interface SecurityHubAwsIamGroupPolicy {
  /**
   * @schema SecurityHubAwsIamGroupPolicy#PolicyName
   */
  readonly policyName?: string;

}

/**
 * @schema SecurityHubAwsIamInstanceProfile
 */
export interface SecurityHubAwsIamInstanceProfile {
  /**
   * @schema SecurityHubAwsIamInstanceProfile#Arn
   */
  readonly arn?: string;

  /**
   * @schema SecurityHubAwsIamInstanceProfile#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema SecurityHubAwsIamInstanceProfile#InstanceProfileId
   */
  readonly instanceProfileId?: string;

  /**
   * @schema SecurityHubAwsIamInstanceProfile#InstanceProfileName
   */
  readonly instanceProfileName?: string;

  /**
   * @schema SecurityHubAwsIamInstanceProfile#Path
   */
  readonly path?: string;

  /**
   * @schema SecurityHubAwsIamInstanceProfile#Roles
   */
  readonly roles?: SecurityHubAwsIamInstanceProfileRole[];

}

/**
 * @schema SecurityHubAwsIamRolePolicy
 */
export interface SecurityHubAwsIamRolePolicy {
  /**
   * @schema SecurityHubAwsIamRolePolicy#PolicyName
   */
  readonly policyName?: string;

}

/**
 * @schema SecurityHubAwsLambdaFunctionCode
 */
export interface SecurityHubAwsLambdaFunctionCode {
  /**
   * @schema SecurityHubAwsLambdaFunctionCode#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema SecurityHubAwsLambdaFunctionCode#S3Key
   */
  readonly s3Key?: string;

  /**
   * @schema SecurityHubAwsLambdaFunctionCode#S3ObjectVersion
   */
  readonly s3ObjectVersion?: string;

  /**
   * @schema SecurityHubAwsLambdaFunctionCode#ZipFile
   */
  readonly zipFile?: string;

}

/**
 * @schema SecurityHubAwsLambdaFunctionDeadLetterConfig
 */
export interface SecurityHubAwsLambdaFunctionDeadLetterConfig {
  /**
   * @schema SecurityHubAwsLambdaFunctionDeadLetterConfig#TargetArn
   */
  readonly targetArn?: string;

}

/**
 * @schema SecurityHubAwsLambdaFunctionEnvironment
 */
export interface SecurityHubAwsLambdaFunctionEnvironment {
  /**
   * @schema SecurityHubAwsLambdaFunctionEnvironment#Variables
   */
  readonly variables?: { [key: string]: string };

  /**
   * @schema SecurityHubAwsLambdaFunctionEnvironment#Error
   */
  readonly error?: SecurityHubAwsLambdaFunctionEnvironmentError;

}

/**
 * @schema SecurityHubAwsLambdaFunctionLayer
 */
export interface SecurityHubAwsLambdaFunctionLayer {
  /**
   * @schema SecurityHubAwsLambdaFunctionLayer#Arn
   */
  readonly arn?: string;

  /**
   * @schema SecurityHubAwsLambdaFunctionLayer#CodeSize
   */
  readonly codeSize?: number;

}

/**
 * @schema SecurityHubAwsLambdaFunctionTracingConfig
 */
export interface SecurityHubAwsLambdaFunctionTracingConfig {
  /**
   * @schema SecurityHubAwsLambdaFunctionTracingConfig#Mode
   */
  readonly mode?: string;

}

/**
 * @schema SecurityHubAwsLambdaFunctionVpcConfig
 */
export interface SecurityHubAwsLambdaFunctionVpcConfig {
  /**
   * @schema SecurityHubAwsLambdaFunctionVpcConfig#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema SecurityHubAwsLambdaFunctionVpcConfig#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema SecurityHubAwsLambdaFunctionVpcConfig#VpcId
   */
  readonly vpcId?: string;

}

/**
 * @schema SecurityHubAwsRdsDbInstanceAssociatedRole
 */
export interface SecurityHubAwsRdsDbInstanceAssociatedRole {
  /**
   * @schema SecurityHubAwsRdsDbInstanceAssociatedRole#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceAssociatedRole#FeatureName
   */
  readonly featureName?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceAssociatedRole#Status
   */
  readonly status?: string;

}

/**
 * @schema SecurityHubAwsRdsDbInstanceEndpoint
 */
export interface SecurityHubAwsRdsDbInstanceEndpoint {
  /**
   * @schema SecurityHubAwsRdsDbInstanceEndpoint#Address
   */
  readonly address?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceEndpoint#Port
   */
  readonly port?: number;

  /**
   * @schema SecurityHubAwsRdsDbInstanceEndpoint#HostedZoneId
   */
  readonly hostedZoneId?: string;

}

/**
 * @schema SecurityHubAwsRdsDbInstanceVpcSecurityGroup
 */
export interface SecurityHubAwsRdsDbInstanceVpcSecurityGroup {
  /**
   * @schema SecurityHubAwsRdsDbInstanceVpcSecurityGroup#VpcSecurityGroupId
   */
  readonly vpcSecurityGroupId?: string;

  /**
   * @schema SecurityHubAwsRdsDbInstanceVpcSecurityGroup#Status
   */
  readonly status?: string;

}

/**
 * @schema SecurityHubAwsRdsDbParameterGroup
 */
export interface SecurityHubAwsRdsDbParameterGroup {
  /**
   * @schema SecurityHubAwsRdsDbParameterGroup#DbParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema SecurityHubAwsRdsDbParameterGroup#ParameterApplyStatus
   */
  readonly parameterApplyStatus?: string;

}

/**
 * @schema SecurityHubAwsRdsDbSubnetGroup
 */
export interface SecurityHubAwsRdsDbSubnetGroup {
  /**
   * @schema SecurityHubAwsRdsDbSubnetGroup#DbSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema SecurityHubAwsRdsDbSubnetGroup#DbSubnetGroupDescription
   */
  readonly dbSubnetGroupDescription?: string;

  /**
   * @schema SecurityHubAwsRdsDbSubnetGroup#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema SecurityHubAwsRdsDbSubnetGroup#SubnetGroupStatus
   */
  readonly subnetGroupStatus?: string;

  /**
   * @schema SecurityHubAwsRdsDbSubnetGroup#Subnets
   */
  readonly subnets?: SecurityHubAwsRdsDbSubnetGroupSubnet[];

  /**
   * @schema SecurityHubAwsRdsDbSubnetGroup#DbSubnetGroupArn
   */
  readonly dbSubnetGroupArn?: string;

}

/**
 * @schema SecurityHubAwsRdsDbPendingModifiedValues
 */
export interface SecurityHubAwsRdsDbPendingModifiedValues {
  /**
   * @schema SecurityHubAwsRdsDbPendingModifiedValues#DbInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema SecurityHubAwsRdsDbPendingModifiedValues#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema SecurityHubAwsRdsDbPendingModifiedValues#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema SecurityHubAwsRdsDbPendingModifiedValues#Port
   */
  readonly port?: number;

  /**
   * @schema SecurityHubAwsRdsDbPendingModifiedValues#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema SecurityHubAwsRdsDbPendingModifiedValues#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbPendingModifiedValues#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema SecurityHubAwsRdsDbPendingModifiedValues#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema SecurityHubAwsRdsDbPendingModifiedValues#Iops
   */
  readonly iops?: number;

  /**
   * @schema SecurityHubAwsRdsDbPendingModifiedValues#DbInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema SecurityHubAwsRdsDbPendingModifiedValues#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema SecurityHubAwsRdsDbPendingModifiedValues#CaCertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

  /**
   * @schema SecurityHubAwsRdsDbPendingModifiedValues#DbSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema SecurityHubAwsRdsDbPendingModifiedValues#PendingCloudWatchLogsExports
   */
  readonly pendingCloudWatchLogsExports?: SecurityHubAwsRdsPendingCloudWatchLogsExports;

  /**
   * @schema SecurityHubAwsRdsDbPendingModifiedValues#ProcessorFeatures
   */
  readonly processorFeatures?: SecurityHubAwsRdsDbProcessorFeature[];

}

/**
 * @schema SecurityHubAwsRdsDbOptionGroupMembership
 */
export interface SecurityHubAwsRdsDbOptionGroupMembership {
  /**
   * @schema SecurityHubAwsRdsDbOptionGroupMembership#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema SecurityHubAwsRdsDbOptionGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * @schema SecurityHubAwsRdsDbStatusInfo
 */
export interface SecurityHubAwsRdsDbStatusInfo {
  /**
   * @schema SecurityHubAwsRdsDbStatusInfo#StatusType
   */
  readonly statusType?: string;

  /**
   * @schema SecurityHubAwsRdsDbStatusInfo#Normal
   */
  readonly normal?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbStatusInfo#Status
   */
  readonly status?: string;

  /**
   * @schema SecurityHubAwsRdsDbStatusInfo#Message
   */
  readonly message?: string;

}

/**
 * @schema SecurityHubAwsRdsDbDomainMembership
 */
export interface SecurityHubAwsRdsDbDomainMembership {
  /**
   * @schema SecurityHubAwsRdsDbDomainMembership#Domain
   */
  readonly domain?: string;

  /**
   * @schema SecurityHubAwsRdsDbDomainMembership#Status
   */
  readonly status?: string;

  /**
   * @schema SecurityHubAwsRdsDbDomainMembership#Fqdn
   */
  readonly fqdn?: string;

  /**
   * @schema SecurityHubAwsRdsDbDomainMembership#IamRoleName
   */
  readonly iamRoleName?: string;

}

/**
 * @schema SecurityHubAwsRdsDbProcessorFeature
 */
export interface SecurityHubAwsRdsDbProcessorFeature {
  /**
   * @schema SecurityHubAwsRdsDbProcessorFeature#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubAwsRdsDbProcessorFeature#Value
   */
  readonly value?: string;

}

/**
 * @schema SecurityHubAwsSnsTopicSubscription
 */
export interface SecurityHubAwsSnsTopicSubscription {
  /**
   * @schema SecurityHubAwsSnsTopicSubscription#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema SecurityHubAwsSnsTopicSubscription#Protocol
   */
  readonly protocol?: string;

}

/**
 * @schema SecurityHubAwsWafWebAclRule
 */
export interface SecurityHubAwsWafWebAclRule {
  /**
   * @schema SecurityHubAwsWafWebAclRule#Action
   */
  readonly action?: SecurityHubWafAction;

  /**
   * @schema SecurityHubAwsWafWebAclRule#ExcludedRules
   */
  readonly excludedRules?: SecurityHubWafExcludedRule[];

  /**
   * @schema SecurityHubAwsWafWebAclRule#OverrideAction
   */
  readonly overrideAction?: SecurityHubWafOverrideAction;

  /**
   * @schema SecurityHubAwsWafWebAclRule#Priority
   */
  readonly priority?: number;

  /**
   * @schema SecurityHubAwsWafWebAclRule#RuleId
   */
  readonly ruleId?: string;

  /**
   * @schema SecurityHubAwsWafWebAclRule#Type
   */
  readonly type?: string;

}

/**
 * @schema SecurityHubAwsRdsDbClusterAssociatedRole
 */
export interface SecurityHubAwsRdsDbClusterAssociatedRole {
  /**
   * @schema SecurityHubAwsRdsDbClusterAssociatedRole#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterAssociatedRole#Status
   */
  readonly status?: string;

}

/**
 * @schema SecurityHubAwsRdsDbClusterOptionGroupMembership
 */
export interface SecurityHubAwsRdsDbClusterOptionGroupMembership {
  /**
   * @schema SecurityHubAwsRdsDbClusterOptionGroupMembership#DbClusterOptionGroupName
   */
  readonly dbClusterOptionGroupName?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterOptionGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * @schema SecurityHubAwsRdsDbClusterMember
 */
export interface SecurityHubAwsRdsDbClusterMember {
  /**
   * @schema SecurityHubAwsRdsDbClusterMember#IsClusterWriter
   */
  readonly isClusterWriter?: boolean;

  /**
   * @schema SecurityHubAwsRdsDbClusterMember#PromotionTier
   */
  readonly promotionTier?: number;

  /**
   * @schema SecurityHubAwsRdsDbClusterMember#DbInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema SecurityHubAwsRdsDbClusterMember#DbClusterParameterGroupStatus
   */
  readonly dbClusterParameterGroupStatus?: string;

}

/**
 * @schema SecurityHubAwsCodeBuildProjectEnvironmentRegistryCredential
 */
export interface SecurityHubAwsCodeBuildProjectEnvironmentRegistryCredential {
  /**
   * @schema SecurityHubAwsCodeBuildProjectEnvironmentRegistryCredential#Credential
   */
  readonly credential?: string;

  /**
   * @schema SecurityHubAwsCodeBuildProjectEnvironmentRegistryCredential#CredentialProvider
   */
  readonly credentialProvider?: string;

}

/**
 * @schema SecurityHubAwsCloudFrontDistributionCacheBehavior
 */
export interface SecurityHubAwsCloudFrontDistributionCacheBehavior {
  /**
   * @schema SecurityHubAwsCloudFrontDistributionCacheBehavior#ViewerProtocolPolicy
   */
  readonly viewerProtocolPolicy?: string;

}

/**
 * @schema SecurityHubAwsCloudFrontDistributionOriginItem
 */
export interface SecurityHubAwsCloudFrontDistributionOriginItem {
  /**
   * @schema SecurityHubAwsCloudFrontDistributionOriginItem#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema SecurityHubAwsCloudFrontDistributionOriginItem#Id
   */
  readonly id?: string;

  /**
   * @schema SecurityHubAwsCloudFrontDistributionOriginItem#OriginPath
   */
  readonly originPath?: string;

  /**
   * @schema SecurityHubAwsCloudFrontDistributionOriginItem#S3OriginConfig
   */
  readonly s3OriginConfig?: SecurityHubAwsCloudFrontDistributionOriginS3OriginConfig;

}

/**
 * @schema SecurityHubAwsCloudFrontDistributionOriginGroup
 */
export interface SecurityHubAwsCloudFrontDistributionOriginGroup {
  /**
   * @schema SecurityHubAwsCloudFrontDistributionOriginGroup#FailoverCriteria
   */
  readonly failoverCriteria?: SecurityHubAwsCloudFrontDistributionOriginGroupFailover;

}

/**
 * @schema SecurityHubAwsEc2SecurityGroupUserIdGroupPair
 */
export interface SecurityHubAwsEc2SecurityGroupUserIdGroupPair {
  /**
   * @schema SecurityHubAwsEc2SecurityGroupUserIdGroupPair#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema SecurityHubAwsEc2SecurityGroupUserIdGroupPair#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema SecurityHubAwsEc2SecurityGroupUserIdGroupPair#PeeringStatus
   */
  readonly peeringStatus?: string;

  /**
   * @schema SecurityHubAwsEc2SecurityGroupUserIdGroupPair#UserId
   */
  readonly userId?: string;

  /**
   * @schema SecurityHubAwsEc2SecurityGroupUserIdGroupPair#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema SecurityHubAwsEc2SecurityGroupUserIdGroupPair#VpcPeeringConnectionId
   */
  readonly vpcPeeringConnectionId?: string;

}

/**
 * @schema SecurityHubAwsEc2SecurityGroupIpRange
 */
export interface SecurityHubAwsEc2SecurityGroupIpRange {
  /**
   * @schema SecurityHubAwsEc2SecurityGroupIpRange#CidrIp
   */
  readonly cidrIp?: string;

}

/**
 * @schema SecurityHubAwsEc2SecurityGroupIpv6Range
 */
export interface SecurityHubAwsEc2SecurityGroupIpv6Range {
  /**
   * @schema SecurityHubAwsEc2SecurityGroupIpv6Range#CidrIpv6
   */
  readonly cidrIpv6?: string;

}

/**
 * @schema SecurityHubAwsEc2SecurityGroupPrefixListId
 */
export interface SecurityHubAwsEc2SecurityGroupPrefixListId {
  /**
   * @schema SecurityHubAwsEc2SecurityGroupPrefixListId#PrefixListId
   */
  readonly prefixListId?: string;

}

/**
 * @schema SecurityHubAwsS3BucketServerSideEncryptionRule
 */
export interface SecurityHubAwsS3BucketServerSideEncryptionRule {
  /**
   * @schema SecurityHubAwsS3BucketServerSideEncryptionRule#ApplyServerSideEncryptionByDefault
   */
  readonly applyServerSideEncryptionByDefault?: SecurityHubAwsS3BucketServerSideEncryptionByDefault;

}

/**
 * @schema SecurityHubAwsIamAccessKeySessionContextAttributes
 */
export interface SecurityHubAwsIamAccessKeySessionContextAttributes {
  /**
   * @schema SecurityHubAwsIamAccessKeySessionContextAttributes#MfaAuthenticated
   */
  readonly mfaAuthenticated?: boolean;

  /**
   * @schema SecurityHubAwsIamAccessKeySessionContextAttributes#CreationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema SecurityHubAwsIamAccessKeySessionContextSessionIssuer
 */
export interface SecurityHubAwsIamAccessKeySessionContextSessionIssuer {
  /**
   * @schema SecurityHubAwsIamAccessKeySessionContextSessionIssuer#Type
   */
  readonly type?: string;

  /**
   * @schema SecurityHubAwsIamAccessKeySessionContextSessionIssuer#PrincipalId
   */
  readonly principalId?: string;

  /**
   * @schema SecurityHubAwsIamAccessKeySessionContextSessionIssuer#Arn
   */
  readonly arn?: string;

  /**
   * @schema SecurityHubAwsIamAccessKeySessionContextSessionIssuer#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema SecurityHubAwsIamAccessKeySessionContextSessionIssuer#UserName
   */
  readonly userName?: string;

}

/**
 * @schema SecurityHubAwsDynamoDbTableProjection
 */
export interface SecurityHubAwsDynamoDbTableProjection {
  /**
   * @schema SecurityHubAwsDynamoDbTableProjection#NonKeyAttributes
   */
  readonly nonKeyAttributes?: string[];

  /**
   * @schema SecurityHubAwsDynamoDbTableProjection#ProjectionType
   */
  readonly projectionType?: string;

}

/**
 * @schema SecurityHubAwsDynamoDbTableReplicaGlobalSecondaryIndex
 */
export interface SecurityHubAwsDynamoDbTableReplicaGlobalSecondaryIndex {
  /**
   * @schema SecurityHubAwsDynamoDbTableReplicaGlobalSecondaryIndex#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema SecurityHubAwsDynamoDbTableReplicaGlobalSecondaryIndex#ProvisionedThroughputOverride
   */
  readonly provisionedThroughputOverride?: SecurityHubAwsDynamoDbTableProvisionedThroughputOverride;

}

/**
 * @schema SecurityHubAwsDynamoDbTableProvisionedThroughputOverride
 */
export interface SecurityHubAwsDynamoDbTableProvisionedThroughputOverride {
  /**
   * @schema SecurityHubAwsDynamoDbTableProvisionedThroughputOverride#ReadCapacityUnits
   */
  readonly readCapacityUnits?: number;

}

/**
 * @schema SecurityHubAwsCertificateManagerCertificateResourceRecord
 */
export interface SecurityHubAwsCertificateManagerCertificateResourceRecord {
  /**
   * @schema SecurityHubAwsCertificateManagerCertificateResourceRecord#Name
   */
  readonly name?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateResourceRecord#Type
   */
  readonly type?: string;

  /**
   * @schema SecurityHubAwsCertificateManagerCertificateResourceRecord#Value
   */
  readonly value?: string;

}

/**
 * @schema SecurityHubAwsRedshiftClusterClusterParameterStatus
 */
export interface SecurityHubAwsRedshiftClusterClusterParameterStatus {
  /**
   * @schema SecurityHubAwsRedshiftClusterClusterParameterStatus#ParameterName
   */
  readonly parameterName?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterClusterParameterStatus#ParameterApplyStatus
   */
  readonly parameterApplyStatus?: string;

  /**
   * @schema SecurityHubAwsRedshiftClusterClusterParameterStatus#ParameterApplyErrorDescription
   */
  readonly parameterApplyErrorDescription?: string;

}

/**
 * @schema SecurityHubAwsElbLoadBalancerListener
 */
export interface SecurityHubAwsElbLoadBalancerListener {
  /**
   * @schema SecurityHubAwsElbLoadBalancerListener#InstancePort
   */
  readonly instancePort?: number;

  /**
   * @schema SecurityHubAwsElbLoadBalancerListener#InstanceProtocol
   */
  readonly instanceProtocol?: string;

  /**
   * @schema SecurityHubAwsElbLoadBalancerListener#LoadBalancerPort
   */
  readonly loadBalancerPort?: number;

  /**
   * @schema SecurityHubAwsElbLoadBalancerListener#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema SecurityHubAwsElbLoadBalancerListener#SslCertificateId
   */
  readonly sslCertificateId?: string;

}

/**
 * @schema SecurityHubAwsElbLoadBalancerAccessLog
 */
export interface SecurityHubAwsElbLoadBalancerAccessLog {
  /**
   * @schema SecurityHubAwsElbLoadBalancerAccessLog#EmitInterval
   */
  readonly emitInterval?: number;

  /**
   * @schema SecurityHubAwsElbLoadBalancerAccessLog#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema SecurityHubAwsElbLoadBalancerAccessLog#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema SecurityHubAwsElbLoadBalancerAccessLog#S3BucketPrefix
   */
  readonly s3BucketPrefix?: string;

}

/**
 * @schema SecurityHubAwsElbLoadBalancerConnectionDraining
 */
export interface SecurityHubAwsElbLoadBalancerConnectionDraining {
  /**
   * @schema SecurityHubAwsElbLoadBalancerConnectionDraining#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema SecurityHubAwsElbLoadBalancerConnectionDraining#Timeout
   */
  readonly timeout?: number;

}

/**
 * @schema SecurityHubAwsElbLoadBalancerConnectionSettings
 */
export interface SecurityHubAwsElbLoadBalancerConnectionSettings {
  /**
   * @schema SecurityHubAwsElbLoadBalancerConnectionSettings#IdleTimeout
   */
  readonly idleTimeout?: number;

}

/**
 * @schema SecurityHubAwsElbLoadBalancerCrossZoneLoadBalancing
 */
export interface SecurityHubAwsElbLoadBalancerCrossZoneLoadBalancing {
  /**
   * @schema SecurityHubAwsElbLoadBalancerCrossZoneLoadBalancing#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema SecurityHubAwsElbAppCookieStickinessPolicy
 */
export interface SecurityHubAwsElbAppCookieStickinessPolicy {
  /**
   * @schema SecurityHubAwsElbAppCookieStickinessPolicy#CookieName
   */
  readonly cookieName?: string;

  /**
   * @schema SecurityHubAwsElbAppCookieStickinessPolicy#PolicyName
   */
  readonly policyName?: string;

}

/**
 * @schema SecurityHubAwsElbLbCookieStickinessPolicy
 */
export interface SecurityHubAwsElbLbCookieStickinessPolicy {
  /**
   * @schema SecurityHubAwsElbLbCookieStickinessPolicy#CookieExpirationPeriod
   */
  readonly cookieExpirationPeriod?: number;

  /**
   * @schema SecurityHubAwsElbLbCookieStickinessPolicy#PolicyName
   */
  readonly policyName?: string;

}

/**
 * @schema SecurityHubAwsIamInstanceProfileRole
 */
export interface SecurityHubAwsIamInstanceProfileRole {
  /**
   * @schema SecurityHubAwsIamInstanceProfileRole#Arn
   */
  readonly arn?: string;

  /**
   * @schema SecurityHubAwsIamInstanceProfileRole#AssumeRolePolicyDocument
   */
  readonly assumeRolePolicyDocument?: string;

  /**
   * @schema SecurityHubAwsIamInstanceProfileRole#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema SecurityHubAwsIamInstanceProfileRole#Path
   */
  readonly path?: string;

  /**
   * @schema SecurityHubAwsIamInstanceProfileRole#RoleId
   */
  readonly roleId?: string;

  /**
   * @schema SecurityHubAwsIamInstanceProfileRole#RoleName
   */
  readonly roleName?: string;

}

/**
 * @schema SecurityHubAwsLambdaFunctionEnvironmentError
 */
export interface SecurityHubAwsLambdaFunctionEnvironmentError {
  /**
   * @schema SecurityHubAwsLambdaFunctionEnvironmentError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema SecurityHubAwsLambdaFunctionEnvironmentError#Message
   */
  readonly message?: string;

}

/**
 * @schema SecurityHubAwsRdsDbSubnetGroupSubnet
 */
export interface SecurityHubAwsRdsDbSubnetGroupSubnet {
  /**
   * @schema SecurityHubAwsRdsDbSubnetGroupSubnet#SubnetIdentifier
   */
  readonly subnetIdentifier?: string;

  /**
   * @schema SecurityHubAwsRdsDbSubnetGroupSubnet#SubnetAvailabilityZone
   */
  readonly subnetAvailabilityZone?: SecurityHubAwsRdsDbSubnetGroupSubnetAvailabilityZone;

  /**
   * @schema SecurityHubAwsRdsDbSubnetGroupSubnet#SubnetStatus
   */
  readonly subnetStatus?: string;

}

/**
 * @schema SecurityHubAwsRdsPendingCloudWatchLogsExports
 */
export interface SecurityHubAwsRdsPendingCloudWatchLogsExports {
  /**
   * @schema SecurityHubAwsRdsPendingCloudWatchLogsExports#LogTypesToEnable
   */
  readonly logTypesToEnable?: string[];

  /**
   * @schema SecurityHubAwsRdsPendingCloudWatchLogsExports#LogTypesToDisable
   */
  readonly logTypesToDisable?: string[];

}

/**
 * @schema SecurityHubWafAction
 */
export interface SecurityHubWafAction {
  /**
   * @schema SecurityHubWafAction#Type
   */
  readonly type?: string;

}

/**
 * @schema SecurityHubWafExcludedRule
 */
export interface SecurityHubWafExcludedRule {
  /**
   * @schema SecurityHubWafExcludedRule#RuleId
   */
  readonly ruleId?: string;

}

/**
 * @schema SecurityHubWafOverrideAction
 */
export interface SecurityHubWafOverrideAction {
  /**
   * @schema SecurityHubWafOverrideAction#Type
   */
  readonly type?: string;

}

/**
 * @schema SecurityHubAwsCloudFrontDistributionOriginS3OriginConfig
 */
export interface SecurityHubAwsCloudFrontDistributionOriginS3OriginConfig {
  /**
   * @schema SecurityHubAwsCloudFrontDistributionOriginS3OriginConfig#OriginAccessIdentity
   */
  readonly originAccessIdentity?: string;

}

/**
 * @schema SecurityHubAwsCloudFrontDistributionOriginGroupFailover
 */
export interface SecurityHubAwsCloudFrontDistributionOriginGroupFailover {
  /**
   * @schema SecurityHubAwsCloudFrontDistributionOriginGroupFailover#StatusCodes
   */
  readonly statusCodes?: SecurityHubAwsCloudFrontDistributionOriginGroupFailoverStatusCodes;

}

/**
 * @schema SecurityHubAwsS3BucketServerSideEncryptionByDefault
 */
export interface SecurityHubAwsS3BucketServerSideEncryptionByDefault {
  /**
   * @schema SecurityHubAwsS3BucketServerSideEncryptionByDefault#SSEAlgorithm
   */
  readonly sseAlgorithm?: string;

  /**
   * @schema SecurityHubAwsS3BucketServerSideEncryptionByDefault#KMSMasterKeyID
   */
  readonly kmsMasterKeyId?: string;

}

/**
 * @schema SecurityHubAwsRdsDbSubnetGroupSubnetAvailabilityZone
 */
export interface SecurityHubAwsRdsDbSubnetGroupSubnetAvailabilityZone {
  /**
   * @schema SecurityHubAwsRdsDbSubnetGroupSubnetAvailabilityZone#Name
   */
  readonly name?: string;

}

/**
 * @schema SecurityHubAwsCloudFrontDistributionOriginGroupFailoverStatusCodes
 */
export interface SecurityHubAwsCloudFrontDistributionOriginGroupFailoverStatusCodes {
  /**
   * @schema SecurityHubAwsCloudFrontDistributionOriginGroupFailoverStatusCodes#Items
   */
  readonly items?: number[];

  /**
   * @schema SecurityHubAwsCloudFrontDistributionOriginGroupFailoverStatusCodes#Quantity
   */
  readonly quantity?: number;

}
