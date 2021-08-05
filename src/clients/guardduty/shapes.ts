/**
 * @schema GuardDutyAcceptInvitationRequest
 */
export interface GuardDutyAcceptInvitationRequest {
  /**
   * @schema GuardDutyAcceptInvitationRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyAcceptInvitationRequest#MasterId
   */
  readonly masterId: string;

  /**
   * @schema GuardDutyAcceptInvitationRequest#InvitationId
   */
  readonly invitationId: string;

}

/**
 * @schema GuardDutyAcceptInvitationResponse
 */
export interface GuardDutyAcceptInvitationResponse {
}

/**
 * @schema GuardDutyArchiveFindingsRequest
 */
export interface GuardDutyArchiveFindingsRequest {
  /**
   * @schema GuardDutyArchiveFindingsRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyArchiveFindingsRequest#FindingIds
   */
  readonly findingIds: string[];

}

/**
 * @schema GuardDutyArchiveFindingsResponse
 */
export interface GuardDutyArchiveFindingsResponse {
}

/**
 * @schema GuardDutyCreateDetectorRequest
 */
export interface GuardDutyCreateDetectorRequest {
  /**
   * @schema GuardDutyCreateDetectorRequest#Enable
   */
  readonly enable: boolean;

  /**
   * @schema GuardDutyCreateDetectorRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema GuardDutyCreateDetectorRequest#FindingPublishingFrequency
   */
  readonly findingPublishingFrequency?: string;

  /**
   * @schema GuardDutyCreateDetectorRequest#DataSources
   */
  readonly dataSources?: GuardDutyDataSourceConfigurations;

  /**
   * @schema GuardDutyCreateDetectorRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GuardDutyCreateDetectorResponse
 */
export interface GuardDutyCreateDetectorResponse {
  /**
   * @schema GuardDutyCreateDetectorResponse#DetectorId
   */
  readonly detectorId?: string;

}

/**
 * @schema GuardDutyCreateFilterRequest
 */
export interface GuardDutyCreateFilterRequest {
  /**
   * @schema GuardDutyCreateFilterRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyCreateFilterRequest#Name
   */
  readonly name: string;

  /**
   * @schema GuardDutyCreateFilterRequest#Description
   */
  readonly description?: string;

  /**
   * @schema GuardDutyCreateFilterRequest#Action
   */
  readonly action?: string;

  /**
   * @schema GuardDutyCreateFilterRequest#Rank
   */
  readonly rank?: number;

  /**
   * @schema GuardDutyCreateFilterRequest#FindingCriteria
   */
  readonly findingCriteria: GuardDutyFindingCriteria;

  /**
   * @schema GuardDutyCreateFilterRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema GuardDutyCreateFilterRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GuardDutyCreateFilterResponse
 */
export interface GuardDutyCreateFilterResponse {
  /**
   * @schema GuardDutyCreateFilterResponse#Name
   */
  readonly name: string;

}

/**
 * @schema GuardDutyCreateIpSetRequest
 */
export interface GuardDutyCreateIpSetRequest {
  /**
   * @schema GuardDutyCreateIpSetRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyCreateIpSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema GuardDutyCreateIpSetRequest#Format
   */
  readonly format: string;

  /**
   * @schema GuardDutyCreateIpSetRequest#Location
   */
  readonly location: string;

  /**
   * @schema GuardDutyCreateIpSetRequest#Activate
   */
  readonly activate: boolean;

  /**
   * @schema GuardDutyCreateIpSetRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema GuardDutyCreateIpSetRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GuardDutyCreateIpSetResponse
 */
export interface GuardDutyCreateIpSetResponse {
  /**
   * @schema GuardDutyCreateIpSetResponse#IpSetId
   */
  readonly ipSetId: string;

}

/**
 * @schema GuardDutyCreateMembersRequest
 */
export interface GuardDutyCreateMembersRequest {
  /**
   * @schema GuardDutyCreateMembersRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyCreateMembersRequest#AccountDetails
   */
  readonly accountDetails: GuardDutyAccountDetail[];

}

/**
 * @schema GuardDutyCreateMembersResponse
 */
export interface GuardDutyCreateMembersResponse {
  /**
   * @schema GuardDutyCreateMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts: GuardDutyUnprocessedAccount[];

}

/**
 * @schema GuardDutyCreatePublishingDestinationRequest
 */
export interface GuardDutyCreatePublishingDestinationRequest {
  /**
   * @schema GuardDutyCreatePublishingDestinationRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyCreatePublishingDestinationRequest#DestinationType
   */
  readonly destinationType: string;

  /**
   * @schema GuardDutyCreatePublishingDestinationRequest#DestinationProperties
   */
  readonly destinationProperties: GuardDutyDestinationProperties;

  /**
   * @schema GuardDutyCreatePublishingDestinationRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema GuardDutyCreatePublishingDestinationResponse
 */
export interface GuardDutyCreatePublishingDestinationResponse {
  /**
   * @schema GuardDutyCreatePublishingDestinationResponse#DestinationId
   */
  readonly destinationId: string;

}

/**
 * @schema GuardDutyCreateSampleFindingsRequest
 */
export interface GuardDutyCreateSampleFindingsRequest {
  /**
   * @schema GuardDutyCreateSampleFindingsRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyCreateSampleFindingsRequest#FindingTypes
   */
  readonly findingTypes?: string[];

}

/**
 * @schema GuardDutyCreateSampleFindingsResponse
 */
export interface GuardDutyCreateSampleFindingsResponse {
}

/**
 * @schema GuardDutyCreateThreatIntelSetRequest
 */
export interface GuardDutyCreateThreatIntelSetRequest {
  /**
   * @schema GuardDutyCreateThreatIntelSetRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyCreateThreatIntelSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema GuardDutyCreateThreatIntelSetRequest#Format
   */
  readonly format: string;

  /**
   * @schema GuardDutyCreateThreatIntelSetRequest#Location
   */
  readonly location: string;

  /**
   * @schema GuardDutyCreateThreatIntelSetRequest#Activate
   */
  readonly activate: boolean;

  /**
   * @schema GuardDutyCreateThreatIntelSetRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema GuardDutyCreateThreatIntelSetRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GuardDutyCreateThreatIntelSetResponse
 */
export interface GuardDutyCreateThreatIntelSetResponse {
  /**
   * @schema GuardDutyCreateThreatIntelSetResponse#ThreatIntelSetId
   */
  readonly threatIntelSetId: string;

}

/**
 * @schema GuardDutyDeclineInvitationsRequest
 */
export interface GuardDutyDeclineInvitationsRequest {
  /**
   * @schema GuardDutyDeclineInvitationsRequest#AccountIds
   */
  readonly accountIds: string[];

}

/**
 * @schema GuardDutyDeclineInvitationsResponse
 */
export interface GuardDutyDeclineInvitationsResponse {
  /**
   * @schema GuardDutyDeclineInvitationsResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts: GuardDutyUnprocessedAccount[];

}

/**
 * @schema GuardDutyDeleteDetectorRequest
 */
export interface GuardDutyDeleteDetectorRequest {
  /**
   * @schema GuardDutyDeleteDetectorRequest#DetectorId
   */
  readonly detectorId: string;

}

/**
 * @schema GuardDutyDeleteDetectorResponse
 */
export interface GuardDutyDeleteDetectorResponse {
}

/**
 * @schema GuardDutyDeleteFilterRequest
 */
export interface GuardDutyDeleteFilterRequest {
  /**
   * @schema GuardDutyDeleteFilterRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyDeleteFilterRequest#FilterName
   */
  readonly filterName: string;

}

/**
 * @schema GuardDutyDeleteFilterResponse
 */
export interface GuardDutyDeleteFilterResponse {
}

/**
 * @schema GuardDutyDeleteIpSetRequest
 */
export interface GuardDutyDeleteIpSetRequest {
  /**
   * @schema GuardDutyDeleteIpSetRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyDeleteIpSetRequest#IpSetId
   */
  readonly ipSetId: string;

}

/**
 * @schema GuardDutyDeleteIpSetResponse
 */
export interface GuardDutyDeleteIpSetResponse {
}

/**
 * @schema GuardDutyDeleteInvitationsRequest
 */
export interface GuardDutyDeleteInvitationsRequest {
  /**
   * @schema GuardDutyDeleteInvitationsRequest#AccountIds
   */
  readonly accountIds: string[];

}

/**
 * @schema GuardDutyDeleteInvitationsResponse
 */
export interface GuardDutyDeleteInvitationsResponse {
  /**
   * @schema GuardDutyDeleteInvitationsResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts: GuardDutyUnprocessedAccount[];

}

/**
 * @schema GuardDutyDeleteMembersRequest
 */
export interface GuardDutyDeleteMembersRequest {
  /**
   * @schema GuardDutyDeleteMembersRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyDeleteMembersRequest#AccountIds
   */
  readonly accountIds: string[];

}

/**
 * @schema GuardDutyDeleteMembersResponse
 */
export interface GuardDutyDeleteMembersResponse {
  /**
   * @schema GuardDutyDeleteMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts: GuardDutyUnprocessedAccount[];

}

/**
 * @schema GuardDutyDeletePublishingDestinationRequest
 */
export interface GuardDutyDeletePublishingDestinationRequest {
  /**
   * @schema GuardDutyDeletePublishingDestinationRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyDeletePublishingDestinationRequest#DestinationId
   */
  readonly destinationId: string;

}

/**
 * @schema GuardDutyDeletePublishingDestinationResponse
 */
export interface GuardDutyDeletePublishingDestinationResponse {
}

/**
 * @schema GuardDutyDeleteThreatIntelSetRequest
 */
export interface GuardDutyDeleteThreatIntelSetRequest {
  /**
   * @schema GuardDutyDeleteThreatIntelSetRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyDeleteThreatIntelSetRequest#ThreatIntelSetId
   */
  readonly threatIntelSetId: string;

}

/**
 * @schema GuardDutyDeleteThreatIntelSetResponse
 */
export interface GuardDutyDeleteThreatIntelSetResponse {
}

/**
 * @schema GuardDutyDescribeOrganizationConfigurationRequest
 */
export interface GuardDutyDescribeOrganizationConfigurationRequest {
  /**
   * @schema GuardDutyDescribeOrganizationConfigurationRequest#DetectorId
   */
  readonly detectorId: string;

}

/**
 * @schema GuardDutyDescribeOrganizationConfigurationResponse
 */
export interface GuardDutyDescribeOrganizationConfigurationResponse {
  /**
   * @schema GuardDutyDescribeOrganizationConfigurationResponse#AutoEnable
   */
  readonly autoEnable: boolean;

  /**
   * @schema GuardDutyDescribeOrganizationConfigurationResponse#MemberAccountLimitReached
   */
  readonly memberAccountLimitReached: boolean;

  /**
   * @schema GuardDutyDescribeOrganizationConfigurationResponse#DataSources
   */
  readonly dataSources?: GuardDutyOrganizationDataSourceConfigurationsResult;

}

/**
 * @schema GuardDutyDescribePublishingDestinationRequest
 */
export interface GuardDutyDescribePublishingDestinationRequest {
  /**
   * @schema GuardDutyDescribePublishingDestinationRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyDescribePublishingDestinationRequest#DestinationId
   */
  readonly destinationId: string;

}

/**
 * @schema GuardDutyDescribePublishingDestinationResponse
 */
export interface GuardDutyDescribePublishingDestinationResponse {
  /**
   * @schema GuardDutyDescribePublishingDestinationResponse#DestinationId
   */
  readonly destinationId: string;

  /**
   * @schema GuardDutyDescribePublishingDestinationResponse#DestinationType
   */
  readonly destinationType: string;

  /**
   * @schema GuardDutyDescribePublishingDestinationResponse#Status
   */
  readonly status: string;

  /**
   * @schema GuardDutyDescribePublishingDestinationResponse#PublishingFailureStartTimestamp
   */
  readonly publishingFailureStartTimestamp: number;

  /**
   * @schema GuardDutyDescribePublishingDestinationResponse#DestinationProperties
   */
  readonly destinationProperties: GuardDutyDestinationProperties;

}

/**
 * @schema GuardDutyDisableOrganizationAdminAccountRequest
 */
export interface GuardDutyDisableOrganizationAdminAccountRequest {
  /**
   * @schema GuardDutyDisableOrganizationAdminAccountRequest#AdminAccountId
   */
  readonly adminAccountId: string;

}

/**
 * @schema GuardDutyDisableOrganizationAdminAccountResponse
 */
export interface GuardDutyDisableOrganizationAdminAccountResponse {
}

/**
 * @schema GuardDutyDisassociateFromMasterAccountRequest
 */
export interface GuardDutyDisassociateFromMasterAccountRequest {
  /**
   * @schema GuardDutyDisassociateFromMasterAccountRequest#DetectorId
   */
  readonly detectorId: string;

}

/**
 * @schema GuardDutyDisassociateFromMasterAccountResponse
 */
export interface GuardDutyDisassociateFromMasterAccountResponse {
}

/**
 * @schema GuardDutyDisassociateMembersRequest
 */
export interface GuardDutyDisassociateMembersRequest {
  /**
   * @schema GuardDutyDisassociateMembersRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyDisassociateMembersRequest#AccountIds
   */
  readonly accountIds: string[];

}

/**
 * @schema GuardDutyDisassociateMembersResponse
 */
export interface GuardDutyDisassociateMembersResponse {
  /**
   * @schema GuardDutyDisassociateMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts: GuardDutyUnprocessedAccount[];

}

/**
 * @schema GuardDutyEnableOrganizationAdminAccountRequest
 */
export interface GuardDutyEnableOrganizationAdminAccountRequest {
  /**
   * @schema GuardDutyEnableOrganizationAdminAccountRequest#AdminAccountId
   */
  readonly adminAccountId: string;

}

/**
 * @schema GuardDutyEnableOrganizationAdminAccountResponse
 */
export interface GuardDutyEnableOrganizationAdminAccountResponse {
}

/**
 * @schema GuardDutyGetDetectorRequest
 */
export interface GuardDutyGetDetectorRequest {
  /**
   * @schema GuardDutyGetDetectorRequest#DetectorId
   */
  readonly detectorId: string;

}

/**
 * @schema GuardDutyGetDetectorResponse
 */
export interface GuardDutyGetDetectorResponse {
  /**
   * @schema GuardDutyGetDetectorResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema GuardDutyGetDetectorResponse#FindingPublishingFrequency
   */
  readonly findingPublishingFrequency?: string;

  /**
   * @schema GuardDutyGetDetectorResponse#ServiceRole
   */
  readonly serviceRole: string;

  /**
   * @schema GuardDutyGetDetectorResponse#Status
   */
  readonly status: string;

  /**
   * @schema GuardDutyGetDetectorResponse#UpdatedAt
   */
  readonly updatedAt?: string;

  /**
   * @schema GuardDutyGetDetectorResponse#DataSources
   */
  readonly dataSources?: GuardDutyDataSourceConfigurationsResult;

  /**
   * @schema GuardDutyGetDetectorResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GuardDutyGetFilterRequest
 */
export interface GuardDutyGetFilterRequest {
  /**
   * @schema GuardDutyGetFilterRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyGetFilterRequest#FilterName
   */
  readonly filterName: string;

}

/**
 * @schema GuardDutyGetFilterResponse
 */
export interface GuardDutyGetFilterResponse {
  /**
   * @schema GuardDutyGetFilterResponse#Name
   */
  readonly name: string;

  /**
   * @schema GuardDutyGetFilterResponse#Description
   */
  readonly description?: string;

  /**
   * @schema GuardDutyGetFilterResponse#Action
   */
  readonly action: string;

  /**
   * @schema GuardDutyGetFilterResponse#Rank
   */
  readonly rank?: number;

  /**
   * @schema GuardDutyGetFilterResponse#FindingCriteria
   */
  readonly findingCriteria: GuardDutyFindingCriteria;

  /**
   * @schema GuardDutyGetFilterResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GuardDutyGetFindingsRequest
 */
export interface GuardDutyGetFindingsRequest {
  /**
   * @schema GuardDutyGetFindingsRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyGetFindingsRequest#FindingIds
   */
  readonly findingIds: string[];

  /**
   * @schema GuardDutyGetFindingsRequest#SortCriteria
   */
  readonly sortCriteria?: GuardDutySortCriteria;

}

/**
 * @schema GuardDutyGetFindingsResponse
 */
export interface GuardDutyGetFindingsResponse {
  /**
   * @schema GuardDutyGetFindingsResponse#Findings
   */
  readonly findings: GuardDutyFinding[];

}

/**
 * @schema GuardDutyGetFindingsStatisticsRequest
 */
export interface GuardDutyGetFindingsStatisticsRequest {
  /**
   * @schema GuardDutyGetFindingsStatisticsRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyGetFindingsStatisticsRequest#FindingStatisticTypes
   */
  readonly findingStatisticTypes: string[];

  /**
   * @schema GuardDutyGetFindingsStatisticsRequest#FindingCriteria
   */
  readonly findingCriteria?: GuardDutyFindingCriteria;

}

/**
 * @schema GuardDutyGetFindingsStatisticsResponse
 */
export interface GuardDutyGetFindingsStatisticsResponse {
  /**
   * @schema GuardDutyGetFindingsStatisticsResponse#FindingStatistics
   */
  readonly findingStatistics: GuardDutyFindingStatistics;

}

/**
 * @schema GuardDutyGetIpSetRequest
 */
export interface GuardDutyGetIpSetRequest {
  /**
   * @schema GuardDutyGetIpSetRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyGetIpSetRequest#IpSetId
   */
  readonly ipSetId: string;

}

/**
 * @schema GuardDutyGetIpSetResponse
 */
export interface GuardDutyGetIpSetResponse {
  /**
   * @schema GuardDutyGetIpSetResponse#Name
   */
  readonly name: string;

  /**
   * @schema GuardDutyGetIpSetResponse#Format
   */
  readonly format: string;

  /**
   * @schema GuardDutyGetIpSetResponse#Location
   */
  readonly location: string;

  /**
   * @schema GuardDutyGetIpSetResponse#Status
   */
  readonly status: string;

  /**
   * @schema GuardDutyGetIpSetResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GuardDutyGetInvitationsCountRequest
 */
export interface GuardDutyGetInvitationsCountRequest {
}

/**
 * @schema GuardDutyGetInvitationsCountResponse
 */
export interface GuardDutyGetInvitationsCountResponse {
  /**
   * @schema GuardDutyGetInvitationsCountResponse#InvitationsCount
   */
  readonly invitationsCount?: number;

}

/**
 * @schema GuardDutyGetMasterAccountRequest
 */
export interface GuardDutyGetMasterAccountRequest {
  /**
   * @schema GuardDutyGetMasterAccountRequest#DetectorId
   */
  readonly detectorId: string;

}

/**
 * @schema GuardDutyGetMasterAccountResponse
 */
export interface GuardDutyGetMasterAccountResponse {
  /**
   * @schema GuardDutyGetMasterAccountResponse#Master
   */
  readonly master: GuardDutyMaster;

}

/**
 * @schema GuardDutyGetMemberDetectorsRequest
 */
export interface GuardDutyGetMemberDetectorsRequest {
  /**
   * @schema GuardDutyGetMemberDetectorsRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyGetMemberDetectorsRequest#AccountIds
   */
  readonly accountIds: string[];

}

/**
 * @schema GuardDutyGetMemberDetectorsResponse
 */
export interface GuardDutyGetMemberDetectorsResponse {
  /**
   * @schema GuardDutyGetMemberDetectorsResponse#MemberDataSourceConfigurations
   */
  readonly memberDataSourceConfigurations: GuardDutyMemberDataSourceConfiguration[];

  /**
   * @schema GuardDutyGetMemberDetectorsResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts: GuardDutyUnprocessedAccount[];

}

/**
 * @schema GuardDutyGetMembersRequest
 */
export interface GuardDutyGetMembersRequest {
  /**
   * @schema GuardDutyGetMembersRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyGetMembersRequest#AccountIds
   */
  readonly accountIds: string[];

}

/**
 * @schema GuardDutyGetMembersResponse
 */
export interface GuardDutyGetMembersResponse {
  /**
   * @schema GuardDutyGetMembersResponse#Members
   */
  readonly members: GuardDutyMember[];

  /**
   * @schema GuardDutyGetMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts: GuardDutyUnprocessedAccount[];

}

/**
 * @schema GuardDutyGetThreatIntelSetRequest
 */
export interface GuardDutyGetThreatIntelSetRequest {
  /**
   * @schema GuardDutyGetThreatIntelSetRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyGetThreatIntelSetRequest#ThreatIntelSetId
   */
  readonly threatIntelSetId: string;

}

/**
 * @schema GuardDutyGetThreatIntelSetResponse
 */
export interface GuardDutyGetThreatIntelSetResponse {
  /**
   * @schema GuardDutyGetThreatIntelSetResponse#Name
   */
  readonly name: string;

  /**
   * @schema GuardDutyGetThreatIntelSetResponse#Format
   */
  readonly format: string;

  /**
   * @schema GuardDutyGetThreatIntelSetResponse#Location
   */
  readonly location: string;

  /**
   * @schema GuardDutyGetThreatIntelSetResponse#Status
   */
  readonly status: string;

  /**
   * @schema GuardDutyGetThreatIntelSetResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GuardDutyGetUsageStatisticsRequest
 */
export interface GuardDutyGetUsageStatisticsRequest {
  /**
   * @schema GuardDutyGetUsageStatisticsRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyGetUsageStatisticsRequest#UsageStatisticType
   */
  readonly usageStatisticType: string;

  /**
   * @schema GuardDutyGetUsageStatisticsRequest#UsageCriteria
   */
  readonly usageCriteria: GuardDutyUsageCriteria;

  /**
   * @schema GuardDutyGetUsageStatisticsRequest#Unit
   */
  readonly unit?: string;

  /**
   * @schema GuardDutyGetUsageStatisticsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GuardDutyGetUsageStatisticsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GuardDutyGetUsageStatisticsResponse
 */
export interface GuardDutyGetUsageStatisticsResponse {
  /**
   * @schema GuardDutyGetUsageStatisticsResponse#UsageStatistics
   */
  readonly usageStatistics?: GuardDutyUsageStatistics;

  /**
   * @schema GuardDutyGetUsageStatisticsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GuardDutyInviteMembersRequest
 */
export interface GuardDutyInviteMembersRequest {
  /**
   * @schema GuardDutyInviteMembersRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyInviteMembersRequest#AccountIds
   */
  readonly accountIds: string[];

  /**
   * @schema GuardDutyInviteMembersRequest#DisableEmailNotification
   */
  readonly disableEmailNotification?: boolean;

  /**
   * @schema GuardDutyInviteMembersRequest#Message
   */
  readonly message?: string;

}

/**
 * @schema GuardDutyInviteMembersResponse
 */
export interface GuardDutyInviteMembersResponse {
  /**
   * @schema GuardDutyInviteMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts: GuardDutyUnprocessedAccount[];

}

/**
 * @schema GuardDutyListDetectorsRequest
 */
export interface GuardDutyListDetectorsRequest {
  /**
   * @schema GuardDutyListDetectorsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GuardDutyListDetectorsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GuardDutyListDetectorsResponse
 */
export interface GuardDutyListDetectorsResponse {
  /**
   * @schema GuardDutyListDetectorsResponse#DetectorIds
   */
  readonly detectorIds: string[];

  /**
   * @schema GuardDutyListDetectorsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GuardDutyListFiltersRequest
 */
export interface GuardDutyListFiltersRequest {
  /**
   * @schema GuardDutyListFiltersRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyListFiltersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GuardDutyListFiltersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GuardDutyListFiltersResponse
 */
export interface GuardDutyListFiltersResponse {
  /**
   * @schema GuardDutyListFiltersResponse#FilterNames
   */
  readonly filterNames: string[];

  /**
   * @schema GuardDutyListFiltersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GuardDutyListFindingsRequest
 */
export interface GuardDutyListFindingsRequest {
  /**
   * @schema GuardDutyListFindingsRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyListFindingsRequest#FindingCriteria
   */
  readonly findingCriteria?: GuardDutyFindingCriteria;

  /**
   * @schema GuardDutyListFindingsRequest#SortCriteria
   */
  readonly sortCriteria?: GuardDutySortCriteria;

  /**
   * @schema GuardDutyListFindingsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GuardDutyListFindingsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GuardDutyListFindingsResponse
 */
export interface GuardDutyListFindingsResponse {
  /**
   * @schema GuardDutyListFindingsResponse#FindingIds
   */
  readonly findingIds: string[];

  /**
   * @schema GuardDutyListFindingsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GuardDutyListIpSetsRequest
 */
export interface GuardDutyListIpSetsRequest {
  /**
   * @schema GuardDutyListIpSetsRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyListIpSetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GuardDutyListIpSetsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GuardDutyListIpSetsResponse
 */
export interface GuardDutyListIpSetsResponse {
  /**
   * @schema GuardDutyListIpSetsResponse#IpSetIds
   */
  readonly ipSetIds: string[];

  /**
   * @schema GuardDutyListIpSetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GuardDutyListInvitationsRequest
 */
export interface GuardDutyListInvitationsRequest {
  /**
   * @schema GuardDutyListInvitationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GuardDutyListInvitationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GuardDutyListInvitationsResponse
 */
export interface GuardDutyListInvitationsResponse {
  /**
   * @schema GuardDutyListInvitationsResponse#Invitations
   */
  readonly invitations?: GuardDutyInvitation[];

  /**
   * @schema GuardDutyListInvitationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GuardDutyListMembersRequest
 */
export interface GuardDutyListMembersRequest {
  /**
   * @schema GuardDutyListMembersRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyListMembersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GuardDutyListMembersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GuardDutyListMembersRequest#OnlyAssociated
   */
  readonly onlyAssociated?: string;

}

/**
 * @schema GuardDutyListMembersResponse
 */
export interface GuardDutyListMembersResponse {
  /**
   * @schema GuardDutyListMembersResponse#Members
   */
  readonly members?: GuardDutyMember[];

  /**
   * @schema GuardDutyListMembersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GuardDutyListOrganizationAdminAccountsRequest
 */
export interface GuardDutyListOrganizationAdminAccountsRequest {
  /**
   * @schema GuardDutyListOrganizationAdminAccountsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GuardDutyListOrganizationAdminAccountsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GuardDutyListOrganizationAdminAccountsResponse
 */
export interface GuardDutyListOrganizationAdminAccountsResponse {
  /**
   * @schema GuardDutyListOrganizationAdminAccountsResponse#AdminAccounts
   */
  readonly adminAccounts?: GuardDutyAdminAccount[];

  /**
   * @schema GuardDutyListOrganizationAdminAccountsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GuardDutyListPublishingDestinationsRequest
 */
export interface GuardDutyListPublishingDestinationsRequest {
  /**
   * @schema GuardDutyListPublishingDestinationsRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyListPublishingDestinationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GuardDutyListPublishingDestinationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GuardDutyListPublishingDestinationsResponse
 */
export interface GuardDutyListPublishingDestinationsResponse {
  /**
   * @schema GuardDutyListPublishingDestinationsResponse#Destinations
   */
  readonly destinations: GuardDutyDestination[];

  /**
   * @schema GuardDutyListPublishingDestinationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GuardDutyListTagsForResourceRequest
 */
export interface GuardDutyListTagsForResourceRequest {
  /**
   * @schema GuardDutyListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema GuardDutyListTagsForResourceResponse
 */
export interface GuardDutyListTagsForResourceResponse {
  /**
   * @schema GuardDutyListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GuardDutyListThreatIntelSetsRequest
 */
export interface GuardDutyListThreatIntelSetsRequest {
  /**
   * @schema GuardDutyListThreatIntelSetsRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyListThreatIntelSetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GuardDutyListThreatIntelSetsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GuardDutyListThreatIntelSetsResponse
 */
export interface GuardDutyListThreatIntelSetsResponse {
  /**
   * @schema GuardDutyListThreatIntelSetsResponse#ThreatIntelSetIds
   */
  readonly threatIntelSetIds: string[];

  /**
   * @schema GuardDutyListThreatIntelSetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GuardDutyStartMonitoringMembersRequest
 */
export interface GuardDutyStartMonitoringMembersRequest {
  /**
   * @schema GuardDutyStartMonitoringMembersRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyStartMonitoringMembersRequest#AccountIds
   */
  readonly accountIds: string[];

}

/**
 * @schema GuardDutyStartMonitoringMembersResponse
 */
export interface GuardDutyStartMonitoringMembersResponse {
  /**
   * @schema GuardDutyStartMonitoringMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts: GuardDutyUnprocessedAccount[];

}

/**
 * @schema GuardDutyStopMonitoringMembersRequest
 */
export interface GuardDutyStopMonitoringMembersRequest {
  /**
   * @schema GuardDutyStopMonitoringMembersRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyStopMonitoringMembersRequest#AccountIds
   */
  readonly accountIds: string[];

}

/**
 * @schema GuardDutyStopMonitoringMembersResponse
 */
export interface GuardDutyStopMonitoringMembersResponse {
  /**
   * @schema GuardDutyStopMonitoringMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts: GuardDutyUnprocessedAccount[];

}

/**
 * @schema GuardDutyTagResourceRequest
 */
export interface GuardDutyTagResourceRequest {
  /**
   * @schema GuardDutyTagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema GuardDutyTagResourceRequest#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema GuardDutyTagResourceResponse
 */
export interface GuardDutyTagResourceResponse {
}

/**
 * @schema GuardDutyUnarchiveFindingsRequest
 */
export interface GuardDutyUnarchiveFindingsRequest {
  /**
   * @schema GuardDutyUnarchiveFindingsRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyUnarchiveFindingsRequest#FindingIds
   */
  readonly findingIds: string[];

}

/**
 * @schema GuardDutyUnarchiveFindingsResponse
 */
export interface GuardDutyUnarchiveFindingsResponse {
}

/**
 * @schema GuardDutyUntagResourceRequest
 */
export interface GuardDutyUntagResourceRequest {
  /**
   * @schema GuardDutyUntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema GuardDutyUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema GuardDutyUntagResourceResponse
 */
export interface GuardDutyUntagResourceResponse {
}

/**
 * @schema GuardDutyUpdateDetectorRequest
 */
export interface GuardDutyUpdateDetectorRequest {
  /**
   * @schema GuardDutyUpdateDetectorRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyUpdateDetectorRequest#Enable
   */
  readonly enable?: boolean;

  /**
   * @schema GuardDutyUpdateDetectorRequest#FindingPublishingFrequency
   */
  readonly findingPublishingFrequency?: string;

  /**
   * @schema GuardDutyUpdateDetectorRequest#DataSources
   */
  readonly dataSources?: GuardDutyDataSourceConfigurations;

}

/**
 * @schema GuardDutyUpdateDetectorResponse
 */
export interface GuardDutyUpdateDetectorResponse {
}

/**
 * @schema GuardDutyUpdateFilterRequest
 */
export interface GuardDutyUpdateFilterRequest {
  /**
   * @schema GuardDutyUpdateFilterRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyUpdateFilterRequest#FilterName
   */
  readonly filterName: string;

  /**
   * @schema GuardDutyUpdateFilterRequest#Description
   */
  readonly description?: string;

  /**
   * @schema GuardDutyUpdateFilterRequest#Action
   */
  readonly action?: string;

  /**
   * @schema GuardDutyUpdateFilterRequest#Rank
   */
  readonly rank?: number;

  /**
   * @schema GuardDutyUpdateFilterRequest#FindingCriteria
   */
  readonly findingCriteria?: GuardDutyFindingCriteria;

}

/**
 * @schema GuardDutyUpdateFilterResponse
 */
export interface GuardDutyUpdateFilterResponse {
  /**
   * @schema GuardDutyUpdateFilterResponse#Name
   */
  readonly name: string;

}

/**
 * @schema GuardDutyUpdateFindingsFeedbackRequest
 */
export interface GuardDutyUpdateFindingsFeedbackRequest {
  /**
   * @schema GuardDutyUpdateFindingsFeedbackRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyUpdateFindingsFeedbackRequest#FindingIds
   */
  readonly findingIds: string[];

  /**
   * @schema GuardDutyUpdateFindingsFeedbackRequest#Feedback
   */
  readonly feedback: string;

  /**
   * @schema GuardDutyUpdateFindingsFeedbackRequest#Comments
   */
  readonly comments?: string;

}

/**
 * @schema GuardDutyUpdateFindingsFeedbackResponse
 */
export interface GuardDutyUpdateFindingsFeedbackResponse {
}

/**
 * @schema GuardDutyUpdateIpSetRequest
 */
export interface GuardDutyUpdateIpSetRequest {
  /**
   * @schema GuardDutyUpdateIpSetRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyUpdateIpSetRequest#IpSetId
   */
  readonly ipSetId: string;

  /**
   * @schema GuardDutyUpdateIpSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GuardDutyUpdateIpSetRequest#Location
   */
  readonly location?: string;

  /**
   * @schema GuardDutyUpdateIpSetRequest#Activate
   */
  readonly activate?: boolean;

}

/**
 * @schema GuardDutyUpdateIpSetResponse
 */
export interface GuardDutyUpdateIpSetResponse {
}

/**
 * @schema GuardDutyUpdateMemberDetectorsRequest
 */
export interface GuardDutyUpdateMemberDetectorsRequest {
  /**
   * @schema GuardDutyUpdateMemberDetectorsRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyUpdateMemberDetectorsRequest#AccountIds
   */
  readonly accountIds: string[];

  /**
   * @schema GuardDutyUpdateMemberDetectorsRequest#DataSources
   */
  readonly dataSources?: GuardDutyDataSourceConfigurations;

}

/**
 * @schema GuardDutyUpdateMemberDetectorsResponse
 */
export interface GuardDutyUpdateMemberDetectorsResponse {
  /**
   * @schema GuardDutyUpdateMemberDetectorsResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts: GuardDutyUnprocessedAccount[];

}

/**
 * @schema GuardDutyUpdateOrganizationConfigurationRequest
 */
export interface GuardDutyUpdateOrganizationConfigurationRequest {
  /**
   * @schema GuardDutyUpdateOrganizationConfigurationRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyUpdateOrganizationConfigurationRequest#AutoEnable
   */
  readonly autoEnable: boolean;

  /**
   * @schema GuardDutyUpdateOrganizationConfigurationRequest#DataSources
   */
  readonly dataSources?: GuardDutyOrganizationDataSourceConfigurations;

}

/**
 * @schema GuardDutyUpdateOrganizationConfigurationResponse
 */
export interface GuardDutyUpdateOrganizationConfigurationResponse {
}

/**
 * @schema GuardDutyUpdatePublishingDestinationRequest
 */
export interface GuardDutyUpdatePublishingDestinationRequest {
  /**
   * @schema GuardDutyUpdatePublishingDestinationRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyUpdatePublishingDestinationRequest#DestinationId
   */
  readonly destinationId: string;

  /**
   * @schema GuardDutyUpdatePublishingDestinationRequest#DestinationProperties
   */
  readonly destinationProperties?: GuardDutyDestinationProperties;

}

/**
 * @schema GuardDutyUpdatePublishingDestinationResponse
 */
export interface GuardDutyUpdatePublishingDestinationResponse {
}

/**
 * @schema GuardDutyUpdateThreatIntelSetRequest
 */
export interface GuardDutyUpdateThreatIntelSetRequest {
  /**
   * @schema GuardDutyUpdateThreatIntelSetRequest#DetectorId
   */
  readonly detectorId: string;

  /**
   * @schema GuardDutyUpdateThreatIntelSetRequest#ThreatIntelSetId
   */
  readonly threatIntelSetId: string;

  /**
   * @schema GuardDutyUpdateThreatIntelSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GuardDutyUpdateThreatIntelSetRequest#Location
   */
  readonly location?: string;

  /**
   * @schema GuardDutyUpdateThreatIntelSetRequest#Activate
   */
  readonly activate?: boolean;

}

/**
 * @schema GuardDutyUpdateThreatIntelSetResponse
 */
export interface GuardDutyUpdateThreatIntelSetResponse {
}

/**
 * @schema GuardDutyDataSourceConfigurations
 */
export interface GuardDutyDataSourceConfigurations {
  /**
   * @schema GuardDutyDataSourceConfigurations#S3Logs
   */
  readonly s3Logs?: GuardDutyS3LogsConfiguration;

}

/**
 * @schema GuardDutyFindingCriteria
 */
export interface GuardDutyFindingCriteria {
  /**
   * @schema GuardDutyFindingCriteria#Criterion
   */
  readonly criterion?: { [key: string]: GuardDutyCondition };

}

/**
 * @schema GuardDutyAccountDetail
 */
export interface GuardDutyAccountDetail {
  /**
   * @schema GuardDutyAccountDetail#AccountId
   */
  readonly accountId: string;

  /**
   * @schema GuardDutyAccountDetail#Email
   */
  readonly email: string;

}

/**
 * @schema GuardDutyUnprocessedAccount
 */
export interface GuardDutyUnprocessedAccount {
  /**
   * @schema GuardDutyUnprocessedAccount#AccountId
   */
  readonly accountId: string;

  /**
   * @schema GuardDutyUnprocessedAccount#Result
   */
  readonly result: string;

}

/**
 * @schema GuardDutyDestinationProperties
 */
export interface GuardDutyDestinationProperties {
  /**
   * @schema GuardDutyDestinationProperties#DestinationArn
   */
  readonly destinationArn?: string;

  /**
   * @schema GuardDutyDestinationProperties#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

}

/**
 * @schema GuardDutyOrganizationDataSourceConfigurationsResult
 */
export interface GuardDutyOrganizationDataSourceConfigurationsResult {
  /**
   * @schema GuardDutyOrganizationDataSourceConfigurationsResult#S3Logs
   */
  readonly s3Logs: GuardDutyOrganizationS3LogsConfigurationResult;

}

/**
 * @schema GuardDutyDataSourceConfigurationsResult
 */
export interface GuardDutyDataSourceConfigurationsResult {
  /**
   * @schema GuardDutyDataSourceConfigurationsResult#CloudTrail
   */
  readonly cloudTrail: GuardDutyCloudTrailConfigurationResult;

  /**
   * @schema GuardDutyDataSourceConfigurationsResult#DNSLogs
   */
  readonly dnsLogs: GuardDutyDnsLogsConfigurationResult;

  /**
   * @schema GuardDutyDataSourceConfigurationsResult#FlowLogs
   */
  readonly flowLogs: GuardDutyFlowLogsConfigurationResult;

  /**
   * @schema GuardDutyDataSourceConfigurationsResult#S3Logs
   */
  readonly s3Logs: GuardDutyS3LogsConfigurationResult;

}

/**
 * @schema GuardDutySortCriteria
 */
export interface GuardDutySortCriteria {
  /**
   * @schema GuardDutySortCriteria#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema GuardDutySortCriteria#OrderBy
   */
  readonly orderBy?: string;

}

/**
 * @schema GuardDutyFinding
 */
export interface GuardDutyFinding {
  /**
   * @schema GuardDutyFinding#AccountId
   */
  readonly accountId: string;

  /**
   * @schema GuardDutyFinding#Arn
   */
  readonly arn: string;

  /**
   * @schema GuardDutyFinding#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema GuardDutyFinding#CreatedAt
   */
  readonly createdAt: string;

  /**
   * @schema GuardDutyFinding#Description
   */
  readonly description?: string;

  /**
   * @schema GuardDutyFinding#Id
   */
  readonly id: string;

  /**
   * @schema GuardDutyFinding#Partition
   */
  readonly partition?: string;

  /**
   * @schema GuardDutyFinding#Region
   */
  readonly region: string;

  /**
   * @schema GuardDutyFinding#Resource
   */
  readonly resource: GuardDutyResource;

  /**
   * @schema GuardDutyFinding#SchemaVersion
   */
  readonly schemaVersion: string;

  /**
   * @schema GuardDutyFinding#Service
   */
  readonly service?: GuardDutyService;

  /**
   * @schema GuardDutyFinding#Severity
   */
  readonly severity: number;

  /**
   * @schema GuardDutyFinding#Title
   */
  readonly title?: string;

  /**
   * @schema GuardDutyFinding#Type
   */
  readonly type: string;

  /**
   * @schema GuardDutyFinding#UpdatedAt
   */
  readonly updatedAt: string;

}

/**
 * @schema GuardDutyFindingStatistics
 */
export interface GuardDutyFindingStatistics {
  /**
   * @schema GuardDutyFindingStatistics#CountBySeverity
   */
  readonly countBySeverity?: { [key: string]: number };

}

/**
 * @schema GuardDutyMaster
 */
export interface GuardDutyMaster {
  /**
   * @schema GuardDutyMaster#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema GuardDutyMaster#InvitationId
   */
  readonly invitationId?: string;

  /**
   * @schema GuardDutyMaster#RelationshipStatus
   */
  readonly relationshipStatus?: string;

  /**
   * @schema GuardDutyMaster#InvitedAt
   */
  readonly invitedAt?: string;

}

/**
 * @schema GuardDutyMemberDataSourceConfiguration
 */
export interface GuardDutyMemberDataSourceConfiguration {
  /**
   * @schema GuardDutyMemberDataSourceConfiguration#AccountId
   */
  readonly accountId: string;

  /**
   * @schema GuardDutyMemberDataSourceConfiguration#DataSources
   */
  readonly dataSources: GuardDutyDataSourceConfigurationsResult;

}

/**
 * @schema GuardDutyMember
 */
export interface GuardDutyMember {
  /**
   * @schema GuardDutyMember#AccountId
   */
  readonly accountId: string;

  /**
   * @schema GuardDutyMember#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyMember#MasterId
   */
  readonly masterId: string;

  /**
   * @schema GuardDutyMember#Email
   */
  readonly email: string;

  /**
   * @schema GuardDutyMember#RelationshipStatus
   */
  readonly relationshipStatus: string;

  /**
   * @schema GuardDutyMember#InvitedAt
   */
  readonly invitedAt?: string;

  /**
   * @schema GuardDutyMember#UpdatedAt
   */
  readonly updatedAt: string;

}

/**
 * @schema GuardDutyUsageCriteria
 */
export interface GuardDutyUsageCriteria {
  /**
   * @schema GuardDutyUsageCriteria#AccountIds
   */
  readonly accountIds?: string[];

  /**
   * @schema GuardDutyUsageCriteria#DataSources
   */
  readonly dataSources: string[];

  /**
   * @schema GuardDutyUsageCriteria#Resources
   */
  readonly resources?: string[];

}

/**
 * @schema GuardDutyUsageStatistics
 */
export interface GuardDutyUsageStatistics {
  /**
   * @schema GuardDutyUsageStatistics#SumByAccount
   */
  readonly sumByAccount?: GuardDutyUsageAccountResult[];

  /**
   * @schema GuardDutyUsageStatistics#SumByDataSource
   */
  readonly sumByDataSource?: GuardDutyUsageDataSourceResult[];

  /**
   * @schema GuardDutyUsageStatistics#SumByResource
   */
  readonly sumByResource?: GuardDutyUsageResourceResult[];

  /**
   * @schema GuardDutyUsageStatistics#TopResources
   */
  readonly topResources?: GuardDutyUsageResourceResult[];

}

/**
 * @schema GuardDutyInvitation
 */
export interface GuardDutyInvitation {
  /**
   * @schema GuardDutyInvitation#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema GuardDutyInvitation#InvitationId
   */
  readonly invitationId?: string;

  /**
   * @schema GuardDutyInvitation#RelationshipStatus
   */
  readonly relationshipStatus?: string;

  /**
   * @schema GuardDutyInvitation#InvitedAt
   */
  readonly invitedAt?: string;

}

/**
 * @schema GuardDutyAdminAccount
 */
export interface GuardDutyAdminAccount {
  /**
   * @schema GuardDutyAdminAccount#AdminAccountId
   */
  readonly adminAccountId?: string;

  /**
   * @schema GuardDutyAdminAccount#AdminStatus
   */
  readonly adminStatus?: string;

}

/**
 * @schema GuardDutyDestination
 */
export interface GuardDutyDestination {
  /**
   * @schema GuardDutyDestination#DestinationId
   */
  readonly destinationId: string;

  /**
   * @schema GuardDutyDestination#DestinationType
   */
  readonly destinationType: string;

  /**
   * @schema GuardDutyDestination#Status
   */
  readonly status: string;

}

/**
 * @schema GuardDutyOrganizationDataSourceConfigurations
 */
export interface GuardDutyOrganizationDataSourceConfigurations {
  /**
   * @schema GuardDutyOrganizationDataSourceConfigurations#S3Logs
   */
  readonly s3Logs?: GuardDutyOrganizationS3LogsConfiguration;

}

/**
 * @schema GuardDutyS3LogsConfiguration
 */
export interface GuardDutyS3LogsConfiguration {
  /**
   * @schema GuardDutyS3LogsConfiguration#Enable
   */
  readonly enable: boolean;

}

/**
 * @schema GuardDutyCondition
 */
export interface GuardDutyCondition {
  /**
   * @schema GuardDutyCondition#Eq
   */
  readonly eq?: string[];

  /**
   * @schema GuardDutyCondition#Neq
   */
  readonly neq?: string[];

  /**
   * @schema GuardDutyCondition#Gt
   */
  readonly gt?: number;

  /**
   * @schema GuardDutyCondition#Gte
   */
  readonly gte?: number;

  /**
   * @schema GuardDutyCondition#Lt
   */
  readonly lt?: number;

  /**
   * @schema GuardDutyCondition#Lte
   */
  readonly lte?: number;

  /**
   * @schema GuardDutyCondition#Equals2
   */
  readonly equals2?: string[];

  /**
   * @schema GuardDutyCondition#NotEquals
   */
  readonly notEquals?: string[];

  /**
   * @schema GuardDutyCondition#GreaterThan
   */
  readonly greaterThan?: number;

  /**
   * @schema GuardDutyCondition#GreaterThanOrEqual
   */
  readonly greaterThanOrEqual?: number;

  /**
   * @schema GuardDutyCondition#LessThan
   */
  readonly lessThan?: number;

  /**
   * @schema GuardDutyCondition#LessThanOrEqual
   */
  readonly lessThanOrEqual?: number;

}

/**
 * @schema GuardDutyOrganizationS3LogsConfigurationResult
 */
export interface GuardDutyOrganizationS3LogsConfigurationResult {
  /**
   * @schema GuardDutyOrganizationS3LogsConfigurationResult#AutoEnable
   */
  readonly autoEnable: boolean;

}

/**
 * @schema GuardDutyCloudTrailConfigurationResult
 */
export interface GuardDutyCloudTrailConfigurationResult {
  /**
   * @schema GuardDutyCloudTrailConfigurationResult#Status
   */
  readonly status: string;

}

/**
 * @schema GuardDutyDnsLogsConfigurationResult
 */
export interface GuardDutyDnsLogsConfigurationResult {
  /**
   * @schema GuardDutyDnsLogsConfigurationResult#Status
   */
  readonly status: string;

}

/**
 * @schema GuardDutyFlowLogsConfigurationResult
 */
export interface GuardDutyFlowLogsConfigurationResult {
  /**
   * @schema GuardDutyFlowLogsConfigurationResult#Status
   */
  readonly status: string;

}

/**
 * @schema GuardDutyS3LogsConfigurationResult
 */
export interface GuardDutyS3LogsConfigurationResult {
  /**
   * @schema GuardDutyS3LogsConfigurationResult#Status
   */
  readonly status: string;

}

/**
 * @schema GuardDutyResource
 */
export interface GuardDutyResource {
  /**
   * @schema GuardDutyResource#AccessKeyDetails
   */
  readonly accessKeyDetails?: GuardDutyAccessKeyDetails;

  /**
   * @schema GuardDutyResource#S3BucketDetails
   */
  readonly s3BucketDetails?: GuardDutyS3BucketDetail[];

  /**
   * @schema GuardDutyResource#InstanceDetails
   */
  readonly instanceDetails?: GuardDutyInstanceDetails;

  /**
   * @schema GuardDutyResource#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * @schema GuardDutyService
 */
export interface GuardDutyService {
  /**
   * @schema GuardDutyService#Action
   */
  readonly action?: GuardDutyAction;

  /**
   * @schema GuardDutyService#Evidence
   */
  readonly evidence?: GuardDutyEvidence;

  /**
   * @schema GuardDutyService#Archived
   */
  readonly archived?: boolean;

  /**
   * @schema GuardDutyService#Count
   */
  readonly count?: number;

  /**
   * @schema GuardDutyService#DetectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GuardDutyService#EventFirstSeen
   */
  readonly eventFirstSeen?: string;

  /**
   * @schema GuardDutyService#EventLastSeen
   */
  readonly eventLastSeen?: string;

  /**
   * @schema GuardDutyService#ResourceRole
   */
  readonly resourceRole?: string;

  /**
   * @schema GuardDutyService#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema GuardDutyService#UserFeedback
   */
  readonly userFeedback?: string;

}

/**
 * @schema GuardDutyUsageAccountResult
 */
export interface GuardDutyUsageAccountResult {
  /**
   * @schema GuardDutyUsageAccountResult#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema GuardDutyUsageAccountResult#Total
   */
  readonly total?: GuardDutyTotal;

}

/**
 * @schema GuardDutyUsageDataSourceResult
 */
export interface GuardDutyUsageDataSourceResult {
  /**
   * @schema GuardDutyUsageDataSourceResult#DataSource
   */
  readonly dataSource?: string;

  /**
   * @schema GuardDutyUsageDataSourceResult#Total
   */
  readonly total?: GuardDutyTotal;

}

/**
 * @schema GuardDutyUsageResourceResult
 */
export interface GuardDutyUsageResourceResult {
  /**
   * @schema GuardDutyUsageResourceResult#Resource
   */
  readonly resource?: string;

  /**
   * @schema GuardDutyUsageResourceResult#Total
   */
  readonly total?: GuardDutyTotal;

}

/**
 * @schema GuardDutyOrganizationS3LogsConfiguration
 */
export interface GuardDutyOrganizationS3LogsConfiguration {
  /**
   * @schema GuardDutyOrganizationS3LogsConfiguration#AutoEnable
   */
  readonly autoEnable: boolean;

}

/**
 * @schema GuardDutyAccessKeyDetails
 */
export interface GuardDutyAccessKeyDetails {
  /**
   * @schema GuardDutyAccessKeyDetails#AccessKeyId
   */
  readonly accessKeyId?: string;

  /**
   * @schema GuardDutyAccessKeyDetails#PrincipalId
   */
  readonly principalId?: string;

  /**
   * @schema GuardDutyAccessKeyDetails#UserName
   */
  readonly userName?: string;

  /**
   * @schema GuardDutyAccessKeyDetails#UserType
   */
  readonly userType?: string;

}

/**
 * @schema GuardDutyS3BucketDetail
 */
export interface GuardDutyS3BucketDetail {
  /**
   * @schema GuardDutyS3BucketDetail#Arn
   */
  readonly arn?: string;

  /**
   * @schema GuardDutyS3BucketDetail#Name
   */
  readonly name?: string;

  /**
   * @schema GuardDutyS3BucketDetail#Type
   */
  readonly type?: string;

  /**
   * @schema GuardDutyS3BucketDetail#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema GuardDutyS3BucketDetail#Owner
   */
  readonly owner?: GuardDutyOwner;

  /**
   * @schema GuardDutyS3BucketDetail#Tags
   */
  readonly tags?: GuardDutyTag[];

  /**
   * @schema GuardDutyS3BucketDetail#DefaultServerSideEncryption
   */
  readonly defaultServerSideEncryption?: GuardDutyDefaultServerSideEncryption;

  /**
   * @schema GuardDutyS3BucketDetail#PublicAccess
   */
  readonly publicAccess?: GuardDutyPublicAccess;

}

/**
 * @schema GuardDutyInstanceDetails
 */
export interface GuardDutyInstanceDetails {
  /**
   * @schema GuardDutyInstanceDetails#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema GuardDutyInstanceDetails#IamInstanceProfile
   */
  readonly iamInstanceProfile?: GuardDutyIamInstanceProfile;

  /**
   * @schema GuardDutyInstanceDetails#ImageDescription
   */
  readonly imageDescription?: string;

  /**
   * @schema GuardDutyInstanceDetails#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema GuardDutyInstanceDetails#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema GuardDutyInstanceDetails#InstanceState
   */
  readonly instanceState?: string;

  /**
   * @schema GuardDutyInstanceDetails#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema GuardDutyInstanceDetails#OutpostArn
   */
  readonly outpostArn?: string;

  /**
   * @schema GuardDutyInstanceDetails#LaunchTime
   */
  readonly launchTime?: string;

  /**
   * @schema GuardDutyInstanceDetails#NetworkInterfaces
   */
  readonly networkInterfaces?: GuardDutyNetworkInterface[];

  /**
   * @schema GuardDutyInstanceDetails#Platform
   */
  readonly platform?: string;

  /**
   * @schema GuardDutyInstanceDetails#ProductCodes
   */
  readonly productCodes?: GuardDutyProductCode[];

  /**
   * @schema GuardDutyInstanceDetails#Tags
   */
  readonly tags?: GuardDutyTag[];

}

/**
 * @schema GuardDutyAction
 */
export interface GuardDutyAction {
  /**
   * @schema GuardDutyAction#ActionType
   */
  readonly actionType?: string;

  /**
   * @schema GuardDutyAction#AwsApiCallAction
   */
  readonly awsApiCallAction?: GuardDutyAwsApiCallAction;

  /**
   * @schema GuardDutyAction#DnsRequestAction
   */
  readonly dnsRequestAction?: GuardDutyDnsRequestAction;

  /**
   * @schema GuardDutyAction#NetworkConnectionAction
   */
  readonly networkConnectionAction?: GuardDutyNetworkConnectionAction;

  /**
   * @schema GuardDutyAction#PortProbeAction
   */
  readonly portProbeAction?: GuardDutyPortProbeAction;

}

/**
 * @schema GuardDutyEvidence
 */
export interface GuardDutyEvidence {
  /**
   * @schema GuardDutyEvidence#ThreatIntelligenceDetails
   */
  readonly threatIntelligenceDetails?: GuardDutyThreatIntelligenceDetail[];

}

/**
 * @schema GuardDutyTotal
 */
export interface GuardDutyTotal {
  /**
   * @schema GuardDutyTotal#Amount
   */
  readonly amount?: string;

  /**
   * @schema GuardDutyTotal#Unit
   */
  readonly unit?: string;

}

/**
 * @schema GuardDutyOwner
 */
export interface GuardDutyOwner {
  /**
   * @schema GuardDutyOwner#Id
   */
  readonly id?: string;

}

/**
 * @schema GuardDutyTag
 */
export interface GuardDutyTag {
  /**
   * @schema GuardDutyTag#Key
   */
  readonly key?: string;

  /**
   * @schema GuardDutyTag#Value
   */
  readonly value?: string;

}

/**
 * @schema GuardDutyDefaultServerSideEncryption
 */
export interface GuardDutyDefaultServerSideEncryption {
  /**
   * @schema GuardDutyDefaultServerSideEncryption#EncryptionType
   */
  readonly encryptionType?: string;

  /**
   * @schema GuardDutyDefaultServerSideEncryption#KmsMasterKeyArn
   */
  readonly kmsMasterKeyArn?: string;

}

/**
 * @schema GuardDutyPublicAccess
 */
export interface GuardDutyPublicAccess {
  /**
   * @schema GuardDutyPublicAccess#PermissionConfiguration
   */
  readonly permissionConfiguration?: GuardDutyPermissionConfiguration;

  /**
   * @schema GuardDutyPublicAccess#EffectivePermission
   */
  readonly effectivePermission?: string;

}

/**
 * @schema GuardDutyIamInstanceProfile
 */
export interface GuardDutyIamInstanceProfile {
  /**
   * @schema GuardDutyIamInstanceProfile#Arn
   */
  readonly arn?: string;

  /**
   * @schema GuardDutyIamInstanceProfile#Id
   */
  readonly id?: string;

}

/**
 * @schema GuardDutyNetworkInterface
 */
export interface GuardDutyNetworkInterface {
  /**
   * @schema GuardDutyNetworkInterface#Ipv6Addresses
   */
  readonly ipv6Addresses?: string[];

  /**
   * @schema GuardDutyNetworkInterface#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema GuardDutyNetworkInterface#PrivateDnsName
   */
  readonly privateDnsName?: string;

  /**
   * @schema GuardDutyNetworkInterface#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema GuardDutyNetworkInterface#PrivateIpAddresses
   */
  readonly privateIpAddresses?: GuardDutyPrivateIpAddressDetails[];

  /**
   * @schema GuardDutyNetworkInterface#PublicDnsName
   */
  readonly publicDnsName?: string;

  /**
   * @schema GuardDutyNetworkInterface#PublicIp
   */
  readonly publicIp?: string;

  /**
   * @schema GuardDutyNetworkInterface#SecurityGroups
   */
  readonly securityGroups?: GuardDutySecurityGroup[];

  /**
   * @schema GuardDutyNetworkInterface#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema GuardDutyNetworkInterface#VpcId
   */
  readonly vpcId?: string;

}

/**
 * @schema GuardDutyProductCode
 */
export interface GuardDutyProductCode {
  /**
   * @schema GuardDutyProductCode#Code
   */
  readonly code?: string;

  /**
   * @schema GuardDutyProductCode#ProductType
   */
  readonly productType?: string;

}

/**
 * @schema GuardDutyAwsApiCallAction
 */
export interface GuardDutyAwsApiCallAction {
  /**
   * @schema GuardDutyAwsApiCallAction#Api
   */
  readonly api?: string;

  /**
   * @schema GuardDutyAwsApiCallAction#CallerType
   */
  readonly callerType?: string;

  /**
   * @schema GuardDutyAwsApiCallAction#DomainDetails
   */
  readonly domainDetails?: GuardDutyDomainDetails;

  /**
   * @schema GuardDutyAwsApiCallAction#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema GuardDutyAwsApiCallAction#RemoteIpDetails
   */
  readonly remoteIpDetails?: GuardDutyRemoteIpDetails;

  /**
   * @schema GuardDutyAwsApiCallAction#ServiceName
   */
  readonly serviceName?: string;

}

/**
 * @schema GuardDutyDnsRequestAction
 */
export interface GuardDutyDnsRequestAction {
  /**
   * @schema GuardDutyDnsRequestAction#Domain
   */
  readonly domain?: string;

}

/**
 * @schema GuardDutyNetworkConnectionAction
 */
export interface GuardDutyNetworkConnectionAction {
  /**
   * @schema GuardDutyNetworkConnectionAction#Blocked
   */
  readonly blocked?: boolean;

  /**
   * @schema GuardDutyNetworkConnectionAction#ConnectionDirection
   */
  readonly connectionDirection?: string;

  /**
   * @schema GuardDutyNetworkConnectionAction#LocalPortDetails
   */
  readonly localPortDetails?: GuardDutyLocalPortDetails;

  /**
   * @schema GuardDutyNetworkConnectionAction#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema GuardDutyNetworkConnectionAction#LocalIpDetails
   */
  readonly localIpDetails?: GuardDutyLocalIpDetails;

  /**
   * @schema GuardDutyNetworkConnectionAction#RemoteIpDetails
   */
  readonly remoteIpDetails?: GuardDutyRemoteIpDetails;

  /**
   * @schema GuardDutyNetworkConnectionAction#RemotePortDetails
   */
  readonly remotePortDetails?: GuardDutyRemotePortDetails;

}

/**
 * @schema GuardDutyPortProbeAction
 */
export interface GuardDutyPortProbeAction {
  /**
   * @schema GuardDutyPortProbeAction#Blocked
   */
  readonly blocked?: boolean;

  /**
   * @schema GuardDutyPortProbeAction#PortProbeDetails
   */
  readonly portProbeDetails?: GuardDutyPortProbeDetail[];

}

/**
 * @schema GuardDutyThreatIntelligenceDetail
 */
export interface GuardDutyThreatIntelligenceDetail {
  /**
   * @schema GuardDutyThreatIntelligenceDetail#ThreatListName
   */
  readonly threatListName?: string;

  /**
   * @schema GuardDutyThreatIntelligenceDetail#ThreatNames
   */
  readonly threatNames?: string[];

}

/**
 * @schema GuardDutyPermissionConfiguration
 */
export interface GuardDutyPermissionConfiguration {
  /**
   * @schema GuardDutyPermissionConfiguration#BucketLevelPermissions
   */
  readonly bucketLevelPermissions?: GuardDutyBucketLevelPermissions;

  /**
   * @schema GuardDutyPermissionConfiguration#AccountLevelPermissions
   */
  readonly accountLevelPermissions?: GuardDutyAccountLevelPermissions;

}

/**
 * @schema GuardDutyPrivateIpAddressDetails
 */
export interface GuardDutyPrivateIpAddressDetails {
  /**
   * @schema GuardDutyPrivateIpAddressDetails#PrivateDnsName
   */
  readonly privateDnsName?: string;

  /**
   * @schema GuardDutyPrivateIpAddressDetails#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

}

/**
 * @schema GuardDutySecurityGroup
 */
export interface GuardDutySecurityGroup {
  /**
   * @schema GuardDutySecurityGroup#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema GuardDutySecurityGroup#GroupName
   */
  readonly groupName?: string;

}

/**
 * @schema GuardDutyDomainDetails
 */
export interface GuardDutyDomainDetails {
  /**
   * @schema GuardDutyDomainDetails#Domain
   */
  readonly domain?: string;

}

/**
 * @schema GuardDutyRemoteIpDetails
 */
export interface GuardDutyRemoteIpDetails {
  /**
   * @schema GuardDutyRemoteIpDetails#City
   */
  readonly city?: GuardDutyCity;

  /**
   * @schema GuardDutyRemoteIpDetails#Country
   */
  readonly country?: GuardDutyCountry;

  /**
   * @schema GuardDutyRemoteIpDetails#GeoLocation
   */
  readonly geoLocation?: GuardDutyGeoLocation;

  /**
   * @schema GuardDutyRemoteIpDetails#IpAddressV4
   */
  readonly ipAddressV4?: string;

  /**
   * @schema GuardDutyRemoteIpDetails#Organization
   */
  readonly organization?: GuardDutyOrganization;

}

/**
 * @schema GuardDutyLocalPortDetails
 */
export interface GuardDutyLocalPortDetails {
  /**
   * @schema GuardDutyLocalPortDetails#Port
   */
  readonly port?: number;

  /**
   * @schema GuardDutyLocalPortDetails#PortName
   */
  readonly portName?: string;

}

/**
 * @schema GuardDutyLocalIpDetails
 */
export interface GuardDutyLocalIpDetails {
  /**
   * @schema GuardDutyLocalIpDetails#IpAddressV4
   */
  readonly ipAddressV4?: string;

}

/**
 * @schema GuardDutyRemotePortDetails
 */
export interface GuardDutyRemotePortDetails {
  /**
   * @schema GuardDutyRemotePortDetails#Port
   */
  readonly port?: number;

  /**
   * @schema GuardDutyRemotePortDetails#PortName
   */
  readonly portName?: string;

}

/**
 * @schema GuardDutyPortProbeDetail
 */
export interface GuardDutyPortProbeDetail {
  /**
   * @schema GuardDutyPortProbeDetail#LocalPortDetails
   */
  readonly localPortDetails?: GuardDutyLocalPortDetails;

  /**
   * @schema GuardDutyPortProbeDetail#LocalIpDetails
   */
  readonly localIpDetails?: GuardDutyLocalIpDetails;

  /**
   * @schema GuardDutyPortProbeDetail#RemoteIpDetails
   */
  readonly remoteIpDetails?: GuardDutyRemoteIpDetails;

}

/**
 * @schema GuardDutyBucketLevelPermissions
 */
export interface GuardDutyBucketLevelPermissions {
  /**
   * @schema GuardDutyBucketLevelPermissions#AccessControlList
   */
  readonly accessControlList?: GuardDutyAccessControlList;

  /**
   * @schema GuardDutyBucketLevelPermissions#BucketPolicy
   */
  readonly bucketPolicy?: GuardDutyBucketPolicy;

  /**
   * @schema GuardDutyBucketLevelPermissions#BlockPublicAccess
   */
  readonly blockPublicAccess?: GuardDutyBlockPublicAccess;

}

/**
 * @schema GuardDutyAccountLevelPermissions
 */
export interface GuardDutyAccountLevelPermissions {
  /**
   * @schema GuardDutyAccountLevelPermissions#BlockPublicAccess
   */
  readonly blockPublicAccess?: GuardDutyBlockPublicAccess;

}

/**
 * @schema GuardDutyCity
 */
export interface GuardDutyCity {
  /**
   * @schema GuardDutyCity#CityName
   */
  readonly cityName?: string;

}

/**
 * @schema GuardDutyCountry
 */
export interface GuardDutyCountry {
  /**
   * @schema GuardDutyCountry#CountryCode
   */
  readonly countryCode?: string;

  /**
   * @schema GuardDutyCountry#CountryName
   */
  readonly countryName?: string;

}

/**
 * @schema GuardDutyGeoLocation
 */
export interface GuardDutyGeoLocation {
  /**
   * @schema GuardDutyGeoLocation#Lat
   */
  readonly lat?: number;

  /**
   * @schema GuardDutyGeoLocation#Lon
   */
  readonly lon?: number;

}

/**
 * @schema GuardDutyOrganization
 */
export interface GuardDutyOrganization {
  /**
   * @schema GuardDutyOrganization#Asn
   */
  readonly asn?: string;

  /**
   * @schema GuardDutyOrganization#AsnOrg
   */
  readonly asnOrg?: string;

  /**
   * @schema GuardDutyOrganization#Isp
   */
  readonly isp?: string;

  /**
   * @schema GuardDutyOrganization#Org
   */
  readonly org?: string;

}

/**
 * @schema GuardDutyAccessControlList
 */
export interface GuardDutyAccessControlList {
  /**
   * @schema GuardDutyAccessControlList#AllowsPublicReadAccess
   */
  readonly allowsPublicReadAccess?: boolean;

  /**
   * @schema GuardDutyAccessControlList#AllowsPublicWriteAccess
   */
  readonly allowsPublicWriteAccess?: boolean;

}

/**
 * @schema GuardDutyBucketPolicy
 */
export interface GuardDutyBucketPolicy {
  /**
   * @schema GuardDutyBucketPolicy#AllowsPublicReadAccess
   */
  readonly allowsPublicReadAccess?: boolean;

  /**
   * @schema GuardDutyBucketPolicy#AllowsPublicWriteAccess
   */
  readonly allowsPublicWriteAccess?: boolean;

}

/**
 * @schema GuardDutyBlockPublicAccess
 */
export interface GuardDutyBlockPublicAccess {
  /**
   * @schema GuardDutyBlockPublicAccess#IgnorePublicAcls
   */
  readonly ignorePublicAcls?: boolean;

  /**
   * @schema GuardDutyBlockPublicAccess#RestrictPublicBuckets
   */
  readonly restrictPublicBuckets?: boolean;

  /**
   * @schema GuardDutyBlockPublicAccess#BlockPublicAcls
   */
  readonly blockPublicAcls?: boolean;

  /**
   * @schema GuardDutyBlockPublicAccess#BlockPublicPolicy
   */
  readonly blockPublicPolicy?: boolean;

}
