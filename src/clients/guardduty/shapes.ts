/**
 * @schema AcceptInvitationRequest
 */
export interface AcceptInvitationRequest {
  /**
   * @schema AcceptInvitationRequest#DetectorId
   */
  readonly detectorId: string;

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
 * @schema ArchiveFindingsRequest
 */
export interface ArchiveFindingsRequest {
  /**
   * @schema ArchiveFindingsRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema ArchiveFindingsRequest#FindingIds
   */
  readonly findingIds: string[];

}

/**
 * @schema ArchiveFindingsResponse
 */
export interface ArchiveFindingsResponse {
}

/**
 * @schema CreateDetectorRequest
 */
export interface CreateDetectorRequest {
  /**
   * @schema CreateDetectorRequest#Enable
   */
  readonly enable: boolean;

  /**
   * @schema CreateDetectorRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateDetectorRequest#FindingPublishingFrequency
   */
  readonly findingPublishingFrequency?: string;

  /**
   * @schema CreateDetectorRequest#DataSources
   */
  readonly dataSources?: DataSourceConfigurations;

  /**
   * @schema CreateDetectorRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateDetectorResponse
 */
export interface CreateDetectorResponse {
  /**
   * @schema CreateDetectorResponse#DetectorId
   */
  readonly detectorId?: string;

}

/**
 * @schema CreateFilterRequest
 */
export interface CreateFilterRequest {
  /**
   * @schema CreateFilterRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema CreateFilterRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateFilterRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateFilterRequest#Action
   */
  readonly action?: string;

  /**
   * @schema CreateFilterRequest#Rank
   */
  readonly rank?: number;

  /**
   * @schema CreateFilterRequest#FindingCriteria
   */
  readonly findingCriteria: FindingCriteria;

  /**
   * @schema CreateFilterRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateFilterRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateFilterResponse
 */
export interface CreateFilterResponse {
  /**
   * @schema CreateFilterResponse#Name
   */
  readonly name: string;

}

/**
 * @schema CreateIpSetRequest
 */
export interface CreateIpSetRequest {
  /**
   * @schema CreateIpSetRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema CreateIpSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateIpSetRequest#Format
   */
  readonly format: string;

  /**
   * @schema CreateIpSetRequest#Location
   */
  readonly location: string;

  /**
   * @schema CreateIpSetRequest#Activate
   */
  readonly activate: boolean;

  /**
   * @schema CreateIpSetRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateIpSetRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateIpSetResponse
 */
export interface CreateIpSetResponse {
  /**
   * @schema CreateIpSetResponse#IpSetId
   */
  readonly ipSetId: string;

}

/**
 * @schema CreateMembersRequest
 */
export interface CreateMembersRequest {
  /**
   * @schema CreateMembersRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema CreateMembersRequest#AccountDetails
   */
  readonly accountDetails: AccountDetail[];

}

/**
 * @schema CreateMembersResponse
 */
export interface CreateMembersResponse {
  /**
   * @schema CreateMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts: UnprocessedAccount[];

}

/**
 * @schema CreatePublishingDestinationRequest
 */
export interface CreatePublishingDestinationRequest {
  /**
   * @schema CreatePublishingDestinationRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema CreatePublishingDestinationRequest#DestinationType
   */
  readonly destinationType: string;

  /**
   * @schema CreatePublishingDestinationRequest#DestinationProperties
   */
  readonly destinationProperties: DestinationProperties;

  /**
   * @schema CreatePublishingDestinationRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema CreatePublishingDestinationResponse
 */
export interface CreatePublishingDestinationResponse {
  /**
   * @schema CreatePublishingDestinationResponse#DestinationId
   */
  readonly destinationId: string;

}

/**
 * @schema CreateSampleFindingsRequest
 */
export interface CreateSampleFindingsRequest {
  /**
   * @schema CreateSampleFindingsRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema CreateSampleFindingsRequest#FindingTypes
   */
  readonly findingTypes?: string[];

}

/**
 * @schema CreateSampleFindingsResponse
 */
export interface CreateSampleFindingsResponse {
}

/**
 * @schema CreateThreatIntelSetRequest
 */
export interface CreateThreatIntelSetRequest {
  /**
   * @schema CreateThreatIntelSetRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema CreateThreatIntelSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateThreatIntelSetRequest#Format
   */
  readonly format: string;

  /**
   * @schema CreateThreatIntelSetRequest#Location
   */
  readonly location: string;

  /**
   * @schema CreateThreatIntelSetRequest#Activate
   */
  readonly activate: boolean;

  /**
   * @schema CreateThreatIntelSetRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateThreatIntelSetRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateThreatIntelSetResponse
 */
export interface CreateThreatIntelSetResponse {
  /**
   * @schema CreateThreatIntelSetResponse#ThreatIntelSetId
   */
  readonly threatIntelSetId: string;

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
  readonly unprocessedAccounts: UnprocessedAccount[];

}

/**
 * @schema DeleteDetectorRequest
 */
export interface DeleteDetectorRequest {
  /**
   * @schema DeleteDetectorRequest#DetectorId
   */
  readonly detectorId: string;

}

/**
 * @schema DeleteDetectorResponse
 */
export interface DeleteDetectorResponse {
}

/**
 * @schema DeleteFilterRequest
 */
export interface DeleteFilterRequest {
  /**
   * @schema DeleteFilterRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema DeleteFilterRequest#FilterName
   */
  readonly filterName: string;

}

/**
 * @schema DeleteFilterResponse
 */
export interface DeleteFilterResponse {
}

/**
 * @schema DeleteIpSetRequest
 */
export interface DeleteIpSetRequest {
  /**
   * @schema DeleteIpSetRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema DeleteIpSetRequest#IpSetId
   */
  readonly ipSetId: string;

}

/**
 * @schema DeleteIpSetResponse
 */
export interface DeleteIpSetResponse {
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
  readonly unprocessedAccounts: UnprocessedAccount[];

}

/**
 * @schema DeleteMembersRequest
 */
export interface DeleteMembersRequest {
  /**
   * @schema DeleteMembersRequest#DetectorId
   */
  readonly detectorId: string;

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
  readonly unprocessedAccounts: UnprocessedAccount[];

}

/**
 * @schema DeletePublishingDestinationRequest
 */
export interface DeletePublishingDestinationRequest {
  /**
   * @schema DeletePublishingDestinationRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema DeletePublishingDestinationRequest#DestinationId
   */
  readonly destinationId: string;

}

/**
 * @schema DeletePublishingDestinationResponse
 */
export interface DeletePublishingDestinationResponse {
}

/**
 * @schema DeleteThreatIntelSetRequest
 */
export interface DeleteThreatIntelSetRequest {
  /**
   * @schema DeleteThreatIntelSetRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema DeleteThreatIntelSetRequest#ThreatIntelSetId
   */
  readonly threatIntelSetId: string;

}

/**
 * @schema DeleteThreatIntelSetResponse
 */
export interface DeleteThreatIntelSetResponse {
}

/**
 * @schema DescribeOrganizationConfigurationRequest
 */
export interface DescribeOrganizationConfigurationRequest {
  /**
   * @schema DescribeOrganizationConfigurationRequest#DetectorId
   */
  readonly detectorId: string;

}

/**
 * @schema DescribeOrganizationConfigurationResponse
 */
export interface DescribeOrganizationConfigurationResponse {
  /**
   * @schema DescribeOrganizationConfigurationResponse#AutoEnable
   */
  readonly autoEnable: boolean;

  /**
   * @schema DescribeOrganizationConfigurationResponse#MemberAccountLimitReached
   */
  readonly memberAccountLimitReached: boolean;

  /**
   * @schema DescribeOrganizationConfigurationResponse#DataSources
   */
  readonly dataSources?: OrganizationDataSourceConfigurationsResult;

}

/**
 * @schema DescribePublishingDestinationRequest
 */
export interface DescribePublishingDestinationRequest {
  /**
   * @schema DescribePublishingDestinationRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema DescribePublishingDestinationRequest#DestinationId
   */
  readonly destinationId: string;

}

/**
 * @schema DescribePublishingDestinationResponse
 */
export interface DescribePublishingDestinationResponse {
  /**
   * @schema DescribePublishingDestinationResponse#DestinationId
   */
  readonly destinationId: string;

  /**
   * @schema DescribePublishingDestinationResponse#DestinationType
   */
  readonly destinationType: string;

  /**
   * @schema DescribePublishingDestinationResponse#Status
   */
  readonly status: string;

  /**
   * @schema DescribePublishingDestinationResponse#PublishingFailureStartTimestamp
   */
  readonly publishingFailureStartTimestamp: number;

  /**
   * @schema DescribePublishingDestinationResponse#DestinationProperties
   */
  readonly destinationProperties: DestinationProperties;

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
 * @schema DisassociateFromMasterAccountRequest
 */
export interface DisassociateFromMasterAccountRequest {
  /**
   * @schema DisassociateFromMasterAccountRequest#DetectorId
   */
  readonly detectorId: string;

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
   * @schema DisassociateMembersRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema DisassociateMembersRequest#AccountIds
   */
  readonly accountIds: string[];

}

/**
 * @schema DisassociateMembersResponse
 */
export interface DisassociateMembersResponse {
  /**
   * @schema DisassociateMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts: UnprocessedAccount[];

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
 * @schema GetDetectorRequest
 */
export interface GetDetectorRequest {
  /**
   * @schema GetDetectorRequest#DetectorId
   */
  readonly detectorId: string;

}

/**
 * @schema GetDetectorResponse
 */
export interface GetDetectorResponse {
  /**
   * @schema GetDetectorResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema GetDetectorResponse#FindingPublishingFrequency
   */
  readonly findingPublishingFrequency?: string;

  /**
   * @schema GetDetectorResponse#ServiceRole
   */
  readonly serviceRole: string;

  /**
   * @schema GetDetectorResponse#Status
   */
  readonly status: string;

  /**
   * @schema GetDetectorResponse#UpdatedAt
   */
  readonly updatedAt?: string;

  /**
   * @schema GetDetectorResponse#DataSources
   */
  readonly dataSources?: DataSourceConfigurationsResult;

  /**
   * @schema GetDetectorResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GetFilterRequest
 */
export interface GetFilterRequest {
  /**
   * @schema GetFilterRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GetFilterRequest#FilterName
   */
  readonly filterName: string;

}

/**
 * @schema GetFilterResponse
 */
export interface GetFilterResponse {
  /**
   * @schema GetFilterResponse#Name
   */
  readonly name: string;

  /**
   * @schema GetFilterResponse#Description
   */
  readonly description?: string;

  /**
   * @schema GetFilterResponse#Action
   */
  readonly action: string;

  /**
   * @schema GetFilterResponse#Rank
   */
  readonly rank?: number;

  /**
   * @schema GetFilterResponse#FindingCriteria
   */
  readonly findingCriteria: FindingCriteria;

  /**
   * @schema GetFilterResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GetFindingsRequest
 */
export interface GetFindingsRequest {
  /**
   * @schema GetFindingsRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GetFindingsRequest#FindingIds
   */
  readonly findingIds: string[];

  /**
   * @schema GetFindingsRequest#SortCriteria
   */
  readonly sortCriteria?: SortCriteria;

}

/**
 * @schema GetFindingsResponse
 */
export interface GetFindingsResponse {
  /**
   * @schema GetFindingsResponse#Findings
   */
  readonly findings: Finding[];

}

/**
 * @schema GetFindingsStatisticsRequest
 */
export interface GetFindingsStatisticsRequest {
  /**
   * @schema GetFindingsStatisticsRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GetFindingsStatisticsRequest#FindingStatisticTypes
   */
  readonly findingStatisticTypes: string[];

  /**
   * @schema GetFindingsStatisticsRequest#FindingCriteria
   */
  readonly findingCriteria?: FindingCriteria;

}

/**
 * @schema GetFindingsStatisticsResponse
 */
export interface GetFindingsStatisticsResponse {
  /**
   * @schema GetFindingsStatisticsResponse#FindingStatistics
   */
  readonly findingStatistics: FindingStatistics;

}

/**
 * @schema GetIpSetRequest
 */
export interface GetIpSetRequest {
  /**
   * @schema GetIpSetRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GetIpSetRequest#IpSetId
   */
  readonly ipSetId: string;

}

/**
 * @schema GetIpSetResponse
 */
export interface GetIpSetResponse {
  /**
   * @schema GetIpSetResponse#Name
   */
  readonly name: string;

  /**
   * @schema GetIpSetResponse#Format
   */
  readonly format: string;

  /**
   * @schema GetIpSetResponse#Location
   */
  readonly location: string;

  /**
   * @schema GetIpSetResponse#Status
   */
  readonly status: string;

  /**
   * @schema GetIpSetResponse#Tags
   */
  readonly tags?: { [key: string]: string };

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
  /**
   * @schema GetMasterAccountRequest#DetectorId
   */
  readonly detectorId: string;

}

/**
 * @schema GetMasterAccountResponse
 */
export interface GetMasterAccountResponse {
  /**
   * @schema GetMasterAccountResponse#Master
   */
  readonly master: Master;

}

/**
 * @schema GetMemberDetectorsRequest
 */
export interface GetMemberDetectorsRequest {
  /**
   * @schema GetMemberDetectorsRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GetMemberDetectorsRequest#AccountIds
   */
  readonly accountIds: string[];

}

/**
 * @schema GetMemberDetectorsResponse
 */
export interface GetMemberDetectorsResponse {
  /**
   * @schema GetMemberDetectorsResponse#MemberDataSourceConfigurations
   */
  readonly memberDataSourceConfigurations: MemberDataSourceConfiguration[];

  /**
   * @schema GetMemberDetectorsResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts: UnprocessedAccount[];

}

/**
 * @schema GetMembersRequest
 */
export interface GetMembersRequest {
  /**
   * @schema GetMembersRequest#DetectorId
   */
  readonly detectorId: string;

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
  readonly members: Member[];

  /**
   * @schema GetMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts: UnprocessedAccount[];

}

/**
 * @schema GetThreatIntelSetRequest
 */
export interface GetThreatIntelSetRequest {
  /**
   * @schema GetThreatIntelSetRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GetThreatIntelSetRequest#ThreatIntelSetId
   */
  readonly threatIntelSetId: string;

}

/**
 * @schema GetThreatIntelSetResponse
 */
export interface GetThreatIntelSetResponse {
  /**
   * @schema GetThreatIntelSetResponse#Name
   */
  readonly name: string;

  /**
   * @schema GetThreatIntelSetResponse#Format
   */
  readonly format: string;

  /**
   * @schema GetThreatIntelSetResponse#Location
   */
  readonly location: string;

  /**
   * @schema GetThreatIntelSetResponse#Status
   */
  readonly status: string;

  /**
   * @schema GetThreatIntelSetResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GetUsageStatisticsRequest
 */
export interface GetUsageStatisticsRequest {
  /**
   * @schema GetUsageStatisticsRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GetUsageStatisticsRequest#UsageStatisticType
   */
  readonly usageStatisticType: string;

  /**
   * @schema GetUsageStatisticsRequest#UsageCriteria
   */
  readonly usageCriteria: UsageCriteria;

  /**
   * @schema GetUsageStatisticsRequest#Unit
   */
  readonly unit?: string;

  /**
   * @schema GetUsageStatisticsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetUsageStatisticsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetUsageStatisticsResponse
 */
export interface GetUsageStatisticsResponse {
  /**
   * @schema GetUsageStatisticsResponse#UsageStatistics
   */
  readonly usageStatistics?: UsageStatistics;

  /**
   * @schema GetUsageStatisticsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema InviteMembersRequest
 */
export interface InviteMembersRequest {
  /**
   * @schema InviteMembersRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema InviteMembersRequest#AccountIds
   */
  readonly accountIds: string[];

  /**
   * @schema InviteMembersRequest#DisableEmailNotification
   */
  readonly disableEmailNotification?: boolean;

  /**
   * @schema InviteMembersRequest#Message
   */
  readonly message?: string;

}

/**
 * @schema InviteMembersResponse
 */
export interface InviteMembersResponse {
  /**
   * @schema InviteMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts: UnprocessedAccount[];

}

/**
 * @schema ListDetectorsRequest
 */
export interface ListDetectorsRequest {
  /**
   * @schema ListDetectorsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListDetectorsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDetectorsResponse
 */
export interface ListDetectorsResponse {
  /**
   * @schema ListDetectorsResponse#DetectorIds
   */
  readonly detectorIds: string[];

  /**
   * @schema ListDetectorsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListFiltersRequest
 */
export interface ListFiltersRequest {
  /**
   * @schema ListFiltersRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema ListFiltersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListFiltersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListFiltersResponse
 */
export interface ListFiltersResponse {
  /**
   * @schema ListFiltersResponse#FilterNames
   */
  readonly filterNames: string[];

  /**
   * @schema ListFiltersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListFindingsRequest
 */
export interface ListFindingsRequest {
  /**
   * @schema ListFindingsRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema ListFindingsRequest#FindingCriteria
   */
  readonly findingCriteria?: FindingCriteria;

  /**
   * @schema ListFindingsRequest#SortCriteria
   */
  readonly sortCriteria?: SortCriteria;

  /**
   * @schema ListFindingsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListFindingsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListFindingsResponse
 */
export interface ListFindingsResponse {
  /**
   * @schema ListFindingsResponse#FindingIds
   */
  readonly findingIds: string[];

  /**
   * @schema ListFindingsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListIpSetsRequest
 */
export interface ListIpSetsRequest {
  /**
   * @schema ListIpSetsRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema ListIpSetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListIpSetsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListIpSetsResponse
 */
export interface ListIpSetsResponse {
  /**
   * @schema ListIpSetsResponse#IpSetIds
   */
  readonly ipSetIds: string[];

  /**
   * @schema ListIpSetsResponse#NextToken
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
   * @schema ListMembersRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema ListMembersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListMembersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListMembersRequest#OnlyAssociated
   */
  readonly onlyAssociated?: string;

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
 * @schema ListPublishingDestinationsRequest
 */
export interface ListPublishingDestinationsRequest {
  /**
   * @schema ListPublishingDestinationsRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema ListPublishingDestinationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListPublishingDestinationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPublishingDestinationsResponse
 */
export interface ListPublishingDestinationsResponse {
  /**
   * @schema ListPublishingDestinationsResponse#Destinations
   */
  readonly destinations: Destination[];

  /**
   * @schema ListPublishingDestinationsResponse#NextToken
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
 * @schema ListThreatIntelSetsRequest
 */
export interface ListThreatIntelSetsRequest {
  /**
   * @schema ListThreatIntelSetsRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema ListThreatIntelSetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListThreatIntelSetsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListThreatIntelSetsResponse
 */
export interface ListThreatIntelSetsResponse {
  /**
   * @schema ListThreatIntelSetsResponse#ThreatIntelSetIds
   */
  readonly threatIntelSetIds: string[];

  /**
   * @schema ListThreatIntelSetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema StartMonitoringMembersRequest
 */
export interface StartMonitoringMembersRequest {
  /**
   * @schema StartMonitoringMembersRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema StartMonitoringMembersRequest#AccountIds
   */
  readonly accountIds: string[];

}

/**
 * @schema StartMonitoringMembersResponse
 */
export interface StartMonitoringMembersResponse {
  /**
   * @schema StartMonitoringMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts: UnprocessedAccount[];

}

/**
 * @schema StopMonitoringMembersRequest
 */
export interface StopMonitoringMembersRequest {
  /**
   * @schema StopMonitoringMembersRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema StopMonitoringMembersRequest#AccountIds
   */
  readonly accountIds: string[];

}

/**
 * @schema StopMonitoringMembersResponse
 */
export interface StopMonitoringMembersResponse {
  /**
   * @schema StopMonitoringMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts: UnprocessedAccount[];

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
 * @schema UnarchiveFindingsRequest
 */
export interface UnarchiveFindingsRequest {
  /**
   * @schema UnarchiveFindingsRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema UnarchiveFindingsRequest#FindingIds
   */
  readonly findingIds: string[];

}

/**
 * @schema UnarchiveFindingsResponse
 */
export interface UnarchiveFindingsResponse {
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
 * @schema UpdateDetectorRequest
 */
export interface UpdateDetectorRequest {
  /**
   * @schema UpdateDetectorRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema UpdateDetectorRequest#Enable
   */
  readonly enable?: boolean;

  /**
   * @schema UpdateDetectorRequest#FindingPublishingFrequency
   */
  readonly findingPublishingFrequency?: string;

  /**
   * @schema UpdateDetectorRequest#DataSources
   */
  readonly dataSources?: DataSourceConfigurations;

}

/**
 * @schema UpdateDetectorResponse
 */
export interface UpdateDetectorResponse {
}

/**
 * @schema UpdateFilterRequest
 */
export interface UpdateFilterRequest {
  /**
   * @schema UpdateFilterRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema UpdateFilterRequest#FilterName
   */
  readonly filterName: string;

  /**
   * @schema UpdateFilterRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateFilterRequest#Action
   */
  readonly action?: string;

  /**
   * @schema UpdateFilterRequest#Rank
   */
  readonly rank?: number;

  /**
   * @schema UpdateFilterRequest#FindingCriteria
   */
  readonly findingCriteria?: FindingCriteria;

}

/**
 * @schema UpdateFilterResponse
 */
export interface UpdateFilterResponse {
  /**
   * @schema UpdateFilterResponse#Name
   */
  readonly name: string;

}

/**
 * @schema UpdateFindingsFeedbackRequest
 */
export interface UpdateFindingsFeedbackRequest {
  /**
   * @schema UpdateFindingsFeedbackRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema UpdateFindingsFeedbackRequest#FindingIds
   */
  readonly findingIds: string[];

  /**
   * @schema UpdateFindingsFeedbackRequest#Feedback
   */
  readonly feedback: string;

  /**
   * @schema UpdateFindingsFeedbackRequest#Comments
   */
  readonly comments?: string;

}

/**
 * @schema UpdateFindingsFeedbackResponse
 */
export interface UpdateFindingsFeedbackResponse {
}

/**
 * @schema UpdateIpSetRequest
 */
export interface UpdateIpSetRequest {
  /**
   * @schema UpdateIpSetRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema UpdateIpSetRequest#IpSetId
   */
  readonly ipSetId: string;

  /**
   * @schema UpdateIpSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateIpSetRequest#Location
   */
  readonly location?: string;

  /**
   * @schema UpdateIpSetRequest#Activate
   */
  readonly activate?: boolean;

}

/**
 * @schema UpdateIpSetResponse
 */
export interface UpdateIpSetResponse {
}

/**
 * @schema UpdateMemberDetectorsRequest
 */
export interface UpdateMemberDetectorsRequest {
  /**
   * @schema UpdateMemberDetectorsRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema UpdateMemberDetectorsRequest#AccountIds
   */
  readonly accountIds: string[];

  /**
   * @schema UpdateMemberDetectorsRequest#DataSources
   */
  readonly dataSources?: DataSourceConfigurations;

}

/**
 * @schema UpdateMemberDetectorsResponse
 */
export interface UpdateMemberDetectorsResponse {
  /**
   * @schema UpdateMemberDetectorsResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts: UnprocessedAccount[];

}

/**
 * @schema UpdateOrganizationConfigurationRequest
 */
export interface UpdateOrganizationConfigurationRequest {
  /**
   * @schema UpdateOrganizationConfigurationRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema UpdateOrganizationConfigurationRequest#AutoEnable
   */
  readonly autoEnable: boolean;

  /**
   * @schema UpdateOrganizationConfigurationRequest#DataSources
   */
  readonly dataSources?: OrganizationDataSourceConfigurations;

}

/**
 * @schema UpdateOrganizationConfigurationResponse
 */
export interface UpdateOrganizationConfigurationResponse {
}

/**
 * @schema UpdatePublishingDestinationRequest
 */
export interface UpdatePublishingDestinationRequest {
  /**
   * @schema UpdatePublishingDestinationRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema UpdatePublishingDestinationRequest#DestinationId
   */
  readonly destinationId: string;

  /**
   * @schema UpdatePublishingDestinationRequest#DestinationProperties
   */
  readonly destinationProperties?: DestinationProperties;

}

/**
 * @schema UpdatePublishingDestinationResponse
 */
export interface UpdatePublishingDestinationResponse {
}

/**
 * @schema UpdateThreatIntelSetRequest
 */
export interface UpdateThreatIntelSetRequest {
  /**
   * @schema UpdateThreatIntelSetRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema UpdateThreatIntelSetRequest#ThreatIntelSetId
   */
  readonly threatIntelSetId: string;

  /**
   * @schema UpdateThreatIntelSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateThreatIntelSetRequest#Location
   */
  readonly location?: string;

  /**
   * @schema UpdateThreatIntelSetRequest#Activate
   */
  readonly activate?: boolean;

}

/**
 * @schema UpdateThreatIntelSetResponse
 */
export interface UpdateThreatIntelSetResponse {
}

/**
 * @schema DataSourceConfigurations
 */
export interface DataSourceConfigurations {
  /**
   * @schema DataSourceConfigurations#S3Logs
   */
  readonly s3Logs?: S3LogsConfiguration;

}

/**
 * @schema FindingCriteria
 */
export interface FindingCriteria {
  /**
   * @schema FindingCriteria#Criterion
   */
  readonly criterion?: { [key: string]: Condition };

}

/**
 * @schema AccountDetail
 */
export interface AccountDetail {
  /**
   * @schema AccountDetail#AccountId
   */
  readonly accountId: string;

  /**
   * @schema AccountDetail#Email
   */
  readonly email: string;

}

/**
 * @schema UnprocessedAccount
 */
export interface UnprocessedAccount {
  /**
   * @schema UnprocessedAccount#AccountId
   */
  readonly accountId: string;

  /**
   * @schema UnprocessedAccount#Result
   */
  readonly result: string;

}

/**
 * @schema DestinationProperties
 */
export interface DestinationProperties {
  /**
   * @schema DestinationProperties#DestinationArn
   */
  readonly destinationArn?: string;

  /**
   * @schema DestinationProperties#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

}

/**
 * @schema OrganizationDataSourceConfigurationsResult
 */
export interface OrganizationDataSourceConfigurationsResult {
  /**
   * @schema OrganizationDataSourceConfigurationsResult#S3Logs
   */
  readonly s3Logs: OrganizationS3LogsConfigurationResult;

}

/**
 * @schema DataSourceConfigurationsResult
 */
export interface DataSourceConfigurationsResult {
  /**
   * @schema DataSourceConfigurationsResult#CloudTrail
   */
  readonly cloudTrail: CloudTrailConfigurationResult;

  /**
   * @schema DataSourceConfigurationsResult#DNSLogs
   */
  readonly dnsLogs: DnsLogsConfigurationResult;

  /**
   * @schema DataSourceConfigurationsResult#FlowLogs
   */
  readonly flowLogs: FlowLogsConfigurationResult;

  /**
   * @schema DataSourceConfigurationsResult#S3Logs
   */
  readonly s3Logs: S3LogsConfigurationResult;

}

/**
 * @schema SortCriteria
 */
export interface SortCriteria {
  /**
   * @schema SortCriteria#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema SortCriteria#OrderBy
   */
  readonly orderBy?: string;

}

/**
 * @schema Finding
 */
export interface Finding {
  /**
   * @schema Finding#AccountId
   */
  readonly accountId: string;

  /**
   * @schema Finding#Arn
   */
  readonly arn: string;

  /**
   * @schema Finding#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema Finding#CreatedAt
   */
  readonly createdAt: string;

  /**
   * @schema Finding#Description
   */
  readonly description?: string;

  /**
   * @schema Finding#Id
   */
  readonly id: string;

  /**
   * @schema Finding#Partition
   */
  readonly partition?: string;

  /**
   * @schema Finding#Region
   */
  readonly region: string;

  /**
   * @schema Finding#Resource
   */
  readonly resource: Resource;

  /**
   * @schema Finding#SchemaVersion
   */
  readonly schemaVersion: string;

  /**
   * @schema Finding#Service
   */
  readonly service?: Service;

  /**
   * @schema Finding#Severity
   */
  readonly severity: number;

  /**
   * @schema Finding#Title
   */
  readonly title?: string;

  /**
   * @schema Finding#Type
   */
  readonly type: string;

  /**
   * @schema Finding#UpdatedAt
   */
  readonly updatedAt: string;

}

/**
 * @schema FindingStatistics
 */
export interface FindingStatistics {
  /**
   * @schema FindingStatistics#CountBySeverity
   */
  readonly countBySeverity?: { [key: string]: number };

}

/**
 * @schema Master
 */
export interface Master {
  /**
   * @schema Master#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema Master#InvitationId
   */
  readonly invitationId?: string;

  /**
   * @schema Master#RelationshipStatus
   */
  readonly relationshipStatus?: string;

  /**
   * @schema Master#InvitedAt
   */
  readonly invitedAt?: string;

}

/**
 * @schema MemberDataSourceConfiguration
 */
export interface MemberDataSourceConfiguration {
  /**
   * @schema MemberDataSourceConfiguration#AccountId
   */
  readonly accountId: string;

  /**
   * @schema MemberDataSourceConfiguration#DataSources
   */
  readonly dataSources: DataSourceConfigurationsResult;

}

/**
 * @schema Member
 */
export interface Member {
  /**
   * @schema Member#AccountId
   */
  readonly accountId: string;

  /**
   * @schema Member#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema Member#MasterId
   */
  readonly masterId: string;

  /**
   * @schema Member#Email
   */
  readonly email: string;

  /**
   * @schema Member#RelationshipStatus
   */
  readonly relationshipStatus: string;

  /**
   * @schema Member#InvitedAt
   */
  readonly invitedAt?: string;

  /**
   * @schema Member#UpdatedAt
   */
  readonly updatedAt: string;

}

/**
 * @schema UsageCriteria
 */
export interface UsageCriteria {
  /**
   * @schema UsageCriteria#AccountIds
   */
  readonly accountIds?: string[];

  /**
   * @schema UsageCriteria#DataSources
   */
  readonly dataSources: string[];

  /**
   * @schema UsageCriteria#Resources
   */
  readonly resources?: string[];

}

/**
 * @schema UsageStatistics
 */
export interface UsageStatistics {
  /**
   * @schema UsageStatistics#SumByAccount
   */
  readonly sumByAccount?: UsageAccountResult[];

  /**
   * @schema UsageStatistics#SumByDataSource
   */
  readonly sumByDataSource?: UsageDataSourceResult[];

  /**
   * @schema UsageStatistics#SumByResource
   */
  readonly sumByResource?: UsageResourceResult[];

  /**
   * @schema UsageStatistics#TopResources
   */
  readonly topResources?: UsageResourceResult[];

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
   * @schema Invitation#RelationshipStatus
   */
  readonly relationshipStatus?: string;

  /**
   * @schema Invitation#InvitedAt
   */
  readonly invitedAt?: string;

}

/**
 * @schema AdminAccount
 */
export interface AdminAccount {
  /**
   * @schema AdminAccount#AdminAccountId
   */
  readonly adminAccountId?: string;

  /**
   * @schema AdminAccount#AdminStatus
   */
  readonly adminStatus?: string;

}

/**
 * @schema Destination
 */
export interface Destination {
  /**
   * @schema Destination#DestinationId
   */
  readonly destinationId: string;

  /**
   * @schema Destination#DestinationType
   */
  readonly destinationType: string;

  /**
   * @schema Destination#Status
   */
  readonly status: string;

}

/**
 * @schema OrganizationDataSourceConfigurations
 */
export interface OrganizationDataSourceConfigurations {
  /**
   * @schema OrganizationDataSourceConfigurations#S3Logs
   */
  readonly s3Logs?: OrganizationS3LogsConfiguration;

}

/**
 * @schema S3LogsConfiguration
 */
export interface S3LogsConfiguration {
  /**
   * @schema S3LogsConfiguration#Enable
   */
  readonly enable: boolean;

}

/**
 * @schema Condition
 */
export interface Condition {
  /**
   * @schema Condition#Eq
   */
  readonly eq?: string[];

  /**
   * @schema Condition#Neq
   */
  readonly neq?: string[];

  /**
   * @schema Condition#Gt
   */
  readonly gt?: number;

  /**
   * @schema Condition#Gte
   */
  readonly gte?: number;

  /**
   * @schema Condition#Lt
   */
  readonly lt?: number;

  /**
   * @schema Condition#Lte
   */
  readonly lte?: number;

  /**
   * @schema Condition#Equals
   */
  readonly equals?: string[];

  /**
   * @schema Condition#NotEquals
   */
  readonly notEquals?: string[];

  /**
   * @schema Condition#GreaterThan
   */
  readonly greaterThan?: number;

  /**
   * @schema Condition#GreaterThanOrEqual
   */
  readonly greaterThanOrEqual?: number;

  /**
   * @schema Condition#LessThan
   */
  readonly lessThan?: number;

  /**
   * @schema Condition#LessThanOrEqual
   */
  readonly lessThanOrEqual?: number;

}

/**
 * @schema OrganizationS3LogsConfigurationResult
 */
export interface OrganizationS3LogsConfigurationResult {
  /**
   * @schema OrganizationS3LogsConfigurationResult#AutoEnable
   */
  readonly autoEnable: boolean;

}

/**
 * @schema CloudTrailConfigurationResult
 */
export interface CloudTrailConfigurationResult {
  /**
   * @schema CloudTrailConfigurationResult#Status
   */
  readonly status: string;

}

/**
 * @schema DnsLogsConfigurationResult
 */
export interface DnsLogsConfigurationResult {
  /**
   * @schema DnsLogsConfigurationResult#Status
   */
  readonly status: string;

}

/**
 * @schema FlowLogsConfigurationResult
 */
export interface FlowLogsConfigurationResult {
  /**
   * @schema FlowLogsConfigurationResult#Status
   */
  readonly status: string;

}

/**
 * @schema S3LogsConfigurationResult
 */
export interface S3LogsConfigurationResult {
  /**
   * @schema S3LogsConfigurationResult#Status
   */
  readonly status: string;

}

/**
 * @schema Resource
 */
export interface Resource {
  /**
   * @schema Resource#AccessKeyDetails
   */
  readonly accessKeyDetails?: AccessKeyDetails;

  /**
   * @schema Resource#S3BucketDetails
   */
  readonly s3BucketDetails?: S3BucketDetail[];

  /**
   * @schema Resource#InstanceDetails
   */
  readonly instanceDetails?: InstanceDetails;

  /**
   * @schema Resource#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * @schema Service
 */
export interface Service {
  /**
   * @schema Service#Action
   */
  readonly action?: Action;

  /**
   * @schema Service#Evidence
   */
  readonly evidence?: Evidence;

  /**
   * @schema Service#Archived
   */
  readonly archived?: boolean;

  /**
   * @schema Service#Count
   */
  readonly count?: number;

  /**
   * @schema Service#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema Service#EventFirstSeen
   */
  readonly eventFirstSeen?: string;

  /**
   * @schema Service#EventLastSeen
   */
  readonly eventLastSeen?: string;

  /**
   * @schema Service#ResourceRole
   */
  readonly resourceRole?: string;

  /**
   * @schema Service#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema Service#UserFeedback
   */
  readonly userFeedback?: string;

}

/**
 * @schema UsageAccountResult
 */
export interface UsageAccountResult {
  /**
   * @schema UsageAccountResult#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema UsageAccountResult#Total
   */
  readonly total?: Total;

}

/**
 * @schema UsageDataSourceResult
 */
export interface UsageDataSourceResult {
  /**
   * @schema UsageDataSourceResult#DataSource
   */
  readonly dataSource?: string;

  /**
   * @schema UsageDataSourceResult#Total
   */
  readonly total?: Total;

}

/**
 * @schema UsageResourceResult
 */
export interface UsageResourceResult {
  /**
   * @schema UsageResourceResult#Resource
   */
  readonly resource?: string;

  /**
   * @schema UsageResourceResult#Total
   */
  readonly total?: Total;

}

/**
 * @schema OrganizationS3LogsConfiguration
 */
export interface OrganizationS3LogsConfiguration {
  /**
   * @schema OrganizationS3LogsConfiguration#AutoEnable
   */
  readonly autoEnable: boolean;

}

/**
 * @schema AccessKeyDetails
 */
export interface AccessKeyDetails {
  /**
   * @schema AccessKeyDetails#AccessKeyId
   */
  readonly accessKeyId?: string;

  /**
   * @schema AccessKeyDetails#PrincipalId
   */
  readonly principalId?: string;

  /**
   * @schema AccessKeyDetails#UserName
   */
  readonly userName?: string;

  /**
   * @schema AccessKeyDetails#UserType
   */
  readonly userType?: string;

}

/**
 * @schema S3BucketDetail
 */
export interface S3BucketDetail {
  /**
   * @schema S3BucketDetail#Arn
   */
  readonly arn?: string;

  /**
   * @schema S3BucketDetail#Name
   */
  readonly name?: string;

  /**
   * @schema S3BucketDetail#Type
   */
  readonly type?: string;

  /**
   * @schema S3BucketDetail#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema S3BucketDetail#Owner
   */
  readonly owner?: Owner;

  /**
   * @schema S3BucketDetail#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema S3BucketDetail#DefaultServerSideEncryption
   */
  readonly defaultServerSideEncryption?: DefaultServerSideEncryption;

  /**
   * @schema S3BucketDetail#PublicAccess
   */
  readonly publicAccess?: PublicAccess;

}

/**
 * @schema InstanceDetails
 */
export interface InstanceDetails {
  /**
   * @schema InstanceDetails#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema InstanceDetails#IamInstanceProfile
   */
  readonly iamInstanceProfile?: IamInstanceProfile;

  /**
   * @schema InstanceDetails#ImageDescription
   */
  readonly imageDescription?: string;

  /**
   * @schema InstanceDetails#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema InstanceDetails#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema InstanceDetails#InstanceState
   */
  readonly instanceState?: string;

  /**
   * @schema InstanceDetails#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema InstanceDetails#OutpostArn
   */
  readonly outpostArn?: string;

  /**
   * @schema InstanceDetails#LaunchTime
   */
  readonly launchTime?: string;

  /**
   * @schema InstanceDetails#NetworkInterfaces
   */
  readonly networkInterfaces?: NetworkInterface[];

  /**
   * @schema InstanceDetails#Platform
   */
  readonly platform?: string;

  /**
   * @schema InstanceDetails#ProductCodes
   */
  readonly productCodes?: ProductCode[];

  /**
   * @schema InstanceDetails#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema Action
 */
export interface Action {
  /**
   * @schema Action#ActionType
   */
  readonly actionType?: string;

  /**
   * @schema Action#AwsApiCallAction
   */
  readonly awsApiCallAction?: AwsApiCallAction;

  /**
   * @schema Action#DnsRequestAction
   */
  readonly dnsRequestAction?: DnsRequestAction;

  /**
   * @schema Action#NetworkConnectionAction
   */
  readonly networkConnectionAction?: NetworkConnectionAction;

  /**
   * @schema Action#PortProbeAction
   */
  readonly portProbeAction?: PortProbeAction;

}

/**
 * @schema Evidence
 */
export interface Evidence {
  /**
   * @schema Evidence#ThreatIntelligenceDetails
   */
  readonly threatIntelligenceDetails?: ThreatIntelligenceDetail[];

}

/**
 * @schema Total
 */
export interface Total {
  /**
   * @schema Total#Amount
   */
  readonly amount?: string;

  /**
   * @schema Total#Unit
   */
  readonly unit?: string;

}

/**
 * @schema Owner
 */
export interface Owner {
  /**
   * @schema Owner#Id
   */
  readonly id?: string;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key?: string;

  /**
   * @schema Tag#Value
   */
  readonly value?: string;

}

/**
 * @schema DefaultServerSideEncryption
 */
export interface DefaultServerSideEncryption {
  /**
   * @schema DefaultServerSideEncryption#EncryptionType
   */
  readonly encryptionType?: string;

  /**
   * @schema DefaultServerSideEncryption#KmsMasterKeyArn
   */
  readonly kmsMasterKeyArn?: string;

}

/**
 * @schema PublicAccess
 */
export interface PublicAccess {
  /**
   * @schema PublicAccess#PermissionConfiguration
   */
  readonly permissionConfiguration?: PermissionConfiguration;

  /**
   * @schema PublicAccess#EffectivePermission
   */
  readonly effectivePermission?: string;

}

/**
 * @schema IamInstanceProfile
 */
export interface IamInstanceProfile {
  /**
   * @schema IamInstanceProfile#Arn
   */
  readonly arn?: string;

  /**
   * @schema IamInstanceProfile#Id
   */
  readonly id?: string;

}

/**
 * @schema NetworkInterface
 */
export interface NetworkInterface {
  /**
   * @schema NetworkInterface#Ipv6Addresses
   */
  readonly ipv6Addresses?: string[];

  /**
   * @schema NetworkInterface#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema NetworkInterface#PrivateDnsName
   */
  readonly privateDnsName?: string;

  /**
   * @schema NetworkInterface#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema NetworkInterface#PrivateIpAddresses
   */
  readonly privateIpAddresses?: PrivateIpAddressDetails[];

  /**
   * @schema NetworkInterface#PublicDnsName
   */
  readonly publicDnsName?: string;

  /**
   * @schema NetworkInterface#PublicIp
   */
  readonly publicIp?: string;

  /**
   * @schema NetworkInterface#SecurityGroups
   */
  readonly securityGroups?: SecurityGroup[];

  /**
   * @schema NetworkInterface#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema NetworkInterface#VpcId
   */
  readonly vpcId?: string;

}

/**
 * @schema ProductCode
 */
export interface ProductCode {
  /**
   * @schema ProductCode#Code
   */
  readonly code?: string;

  /**
   * @schema ProductCode#ProductType
   */
  readonly productType?: string;

}

/**
 * @schema AwsApiCallAction
 */
export interface AwsApiCallAction {
  /**
   * @schema AwsApiCallAction#Api
   */
  readonly api?: string;

  /**
   * @schema AwsApiCallAction#CallerType
   */
  readonly callerType?: string;

  /**
   * @schema AwsApiCallAction#DomainDetails
   */
  readonly domainDetails?: DomainDetails;

  /**
   * @schema AwsApiCallAction#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema AwsApiCallAction#RemoteIpDetails
   */
  readonly remoteIpDetails?: RemoteIpDetails;

  /**
   * @schema AwsApiCallAction#ServiceName
   */
  readonly serviceName?: string;

}

/**
 * @schema DnsRequestAction
 */
export interface DnsRequestAction {
  /**
   * @schema DnsRequestAction#Domain
   */
  readonly domain?: string;

}

/**
 * @schema NetworkConnectionAction
 */
export interface NetworkConnectionAction {
  /**
   * @schema NetworkConnectionAction#Blocked
   */
  readonly blocked?: boolean;

  /**
   * @schema NetworkConnectionAction#ConnectionDirection
   */
  readonly connectionDirection?: string;

  /**
   * @schema NetworkConnectionAction#LocalPortDetails
   */
  readonly localPortDetails?: LocalPortDetails;

  /**
   * @schema NetworkConnectionAction#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema NetworkConnectionAction#LocalIpDetails
   */
  readonly localIpDetails?: LocalIpDetails;

  /**
   * @schema NetworkConnectionAction#RemoteIpDetails
   */
  readonly remoteIpDetails?: RemoteIpDetails;

  /**
   * @schema NetworkConnectionAction#RemotePortDetails
   */
  readonly remotePortDetails?: RemotePortDetails;

}

/**
 * @schema PortProbeAction
 */
export interface PortProbeAction {
  /**
   * @schema PortProbeAction#Blocked
   */
  readonly blocked?: boolean;

  /**
   * @schema PortProbeAction#PortProbeDetails
   */
  readonly portProbeDetails?: PortProbeDetail[];

}

/**
 * @schema ThreatIntelligenceDetail
 */
export interface ThreatIntelligenceDetail {
  /**
   * @schema ThreatIntelligenceDetail#ThreatListName
   */
  readonly threatListName?: string;

  /**
   * @schema ThreatIntelligenceDetail#ThreatNames
   */
  readonly threatNames?: string[];

}

/**
 * @schema PermissionConfiguration
 */
export interface PermissionConfiguration {
  /**
   * @schema PermissionConfiguration#BucketLevelPermissions
   */
  readonly bucketLevelPermissions?: BucketLevelPermissions;

  /**
   * @schema PermissionConfiguration#AccountLevelPermissions
   */
  readonly accountLevelPermissions?: AccountLevelPermissions;

}

/**
 * @schema PrivateIpAddressDetails
 */
export interface PrivateIpAddressDetails {
  /**
   * @schema PrivateIpAddressDetails#PrivateDnsName
   */
  readonly privateDnsName?: string;

  /**
   * @schema PrivateIpAddressDetails#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

}

/**
 * @schema SecurityGroup
 */
export interface SecurityGroup {
  /**
   * @schema SecurityGroup#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema SecurityGroup#GroupName
   */
  readonly groupName?: string;

}

/**
 * @schema DomainDetails
 */
export interface DomainDetails {
  /**
   * @schema DomainDetails#Domain
   */
  readonly domain?: string;

}

/**
 * @schema RemoteIpDetails
 */
export interface RemoteIpDetails {
  /**
   * @schema RemoteIpDetails#City
   */
  readonly city?: City;

  /**
   * @schema RemoteIpDetails#Country
   */
  readonly country?: Country;

  /**
   * @schema RemoteIpDetails#GeoLocation
   */
  readonly geoLocation?: GeoLocation;

  /**
   * @schema RemoteIpDetails#IpAddressV4
   */
  readonly ipAddressV4?: string;

  /**
   * @schema RemoteIpDetails#Organization
   */
  readonly organization?: Organization;

}

/**
 * @schema LocalPortDetails
 */
export interface LocalPortDetails {
  /**
   * @schema LocalPortDetails#Port
   */
  readonly port?: number;

  /**
   * @schema LocalPortDetails#PortName
   */
  readonly portName?: string;

}

/**
 * @schema LocalIpDetails
 */
export interface LocalIpDetails {
  /**
   * @schema LocalIpDetails#IpAddressV4
   */
  readonly ipAddressV4?: string;

}

/**
 * @schema RemotePortDetails
 */
export interface RemotePortDetails {
  /**
   * @schema RemotePortDetails#Port
   */
  readonly port?: number;

  /**
   * @schema RemotePortDetails#PortName
   */
  readonly portName?: string;

}

/**
 * @schema PortProbeDetail
 */
export interface PortProbeDetail {
  /**
   * @schema PortProbeDetail#LocalPortDetails
   */
  readonly localPortDetails?: LocalPortDetails;

  /**
   * @schema PortProbeDetail#LocalIpDetails
   */
  readonly localIpDetails?: LocalIpDetails;

  /**
   * @schema PortProbeDetail#RemoteIpDetails
   */
  readonly remoteIpDetails?: RemoteIpDetails;

}

/**
 * @schema BucketLevelPermissions
 */
export interface BucketLevelPermissions {
  /**
   * @schema BucketLevelPermissions#AccessControlList
   */
  readonly accessControlList?: AccessControlList;

  /**
   * @schema BucketLevelPermissions#BucketPolicy
   */
  readonly bucketPolicy?: BucketPolicy;

  /**
   * @schema BucketLevelPermissions#BlockPublicAccess
   */
  readonly blockPublicAccess?: BlockPublicAccess;

}

/**
 * @schema AccountLevelPermissions
 */
export interface AccountLevelPermissions {
  /**
   * @schema AccountLevelPermissions#BlockPublicAccess
   */
  readonly blockPublicAccess?: BlockPublicAccess;

}

/**
 * @schema City
 */
export interface City {
  /**
   * @schema City#CityName
   */
  readonly cityName?: string;

}

/**
 * @schema Country
 */
export interface Country {
  /**
   * @schema Country#CountryCode
   */
  readonly countryCode?: string;

  /**
   * @schema Country#CountryName
   */
  readonly countryName?: string;

}

/**
 * @schema GeoLocation
 */
export interface GeoLocation {
  /**
   * @schema GeoLocation#Lat
   */
  readonly lat?: number;

  /**
   * @schema GeoLocation#Lon
   */
  readonly lon?: number;

}

/**
 * @schema Organization
 */
export interface Organization {
  /**
   * @schema Organization#Asn
   */
  readonly asn?: string;

  /**
   * @schema Organization#AsnOrg
   */
  readonly asnOrg?: string;

  /**
   * @schema Organization#Isp
   */
  readonly isp?: string;

  /**
   * @schema Organization#Org
   */
  readonly org?: string;

}

/**
 * @schema AccessControlList
 */
export interface AccessControlList {
  /**
   * @schema AccessControlList#AllowsPublicReadAccess
   */
  readonly allowsPublicReadAccess?: boolean;

  /**
   * @schema AccessControlList#AllowsPublicWriteAccess
   */
  readonly allowsPublicWriteAccess?: boolean;

}

/**
 * @schema BucketPolicy
 */
export interface BucketPolicy {
  /**
   * @schema BucketPolicy#AllowsPublicReadAccess
   */
  readonly allowsPublicReadAccess?: boolean;

  /**
   * @schema BucketPolicy#AllowsPublicWriteAccess
   */
  readonly allowsPublicWriteAccess?: boolean;

}

/**
 * @schema BlockPublicAccess
 */
export interface BlockPublicAccess {
  /**
   * @schema BlockPublicAccess#IgnorePublicAcls
   */
  readonly ignorePublicAcls?: boolean;

  /**
   * @schema BlockPublicAccess#RestrictPublicBuckets
   */
  readonly restrictPublicBuckets?: boolean;

  /**
   * @schema BlockPublicAccess#BlockPublicAcls
   */
  readonly blockPublicAcls?: boolean;

  /**
   * @schema BlockPublicAccess#BlockPublicPolicy
   */
  readonly blockPublicPolicy?: boolean;

}
