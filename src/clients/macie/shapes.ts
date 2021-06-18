/**
 * @schema MacieAcceptInvitationRequest
 */
export interface MacieAcceptInvitationRequest {
  /**
   * @schema MacieAcceptInvitationRequest#invitationId
   */
  readonly invitationId: string;

  /**
   * @schema MacieAcceptInvitationRequest#masterAccount
   */
  readonly masterAccount: string;

}

/**
 * @schema MacieAcceptInvitationResponse
 */
export interface MacieAcceptInvitationResponse {
}

/**
 * @schema MacieBatchGetCustomDataIdentifiersRequest
 */
export interface MacieBatchGetCustomDataIdentifiersRequest {
  /**
   * @schema MacieBatchGetCustomDataIdentifiersRequest#ids
   */
  readonly ids?: string[];

}

/**
 * @schema MacieBatchGetCustomDataIdentifiersResponse
 */
export interface MacieBatchGetCustomDataIdentifiersResponse {
  /**
   * @schema MacieBatchGetCustomDataIdentifiersResponse#customDataIdentifiers
   */
  readonly customDataIdentifiers?: MacieBatchGetCustomDataIdentifierSummary[];

  /**
   * @schema MacieBatchGetCustomDataIdentifiersResponse#notFoundIdentifierIds
   */
  readonly notFoundIdentifierIds?: string[];

}

/**
 * @schema MacieCreateClassificationJobRequest
 */
export interface MacieCreateClassificationJobRequest {
  /**
   * @schema MacieCreateClassificationJobRequest#clientToken
   */
  readonly clientToken: string;

  /**
   * @schema MacieCreateClassificationJobRequest#customDataIdentifierIds
   */
  readonly customDataIdentifierIds?: string[];

  /**
   * @schema MacieCreateClassificationJobRequest#description
   */
  readonly description?: string;

  /**
   * @schema MacieCreateClassificationJobRequest#initialRun
   */
  readonly initialRun?: boolean;

  /**
   * @schema MacieCreateClassificationJobRequest#jobType
   */
  readonly jobType: string;

  /**
   * @schema MacieCreateClassificationJobRequest#name
   */
  readonly name: string;

  /**
   * @schema MacieCreateClassificationJobRequest#s3JobDefinition
   */
  readonly s3JobDefinition: MacieS3JobDefinition;

  /**
   * @schema MacieCreateClassificationJobRequest#samplingPercentage
   */
  readonly samplingPercentage?: number;

  /**
   * @schema MacieCreateClassificationJobRequest#scheduleFrequency
   */
  readonly scheduleFrequency?: MacieJobScheduleFrequency;

  /**
   * @schema MacieCreateClassificationJobRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MacieCreateClassificationJobResponse
 */
export interface MacieCreateClassificationJobResponse {
  /**
   * @schema MacieCreateClassificationJobResponse#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema MacieCreateClassificationJobResponse#jobId
   */
  readonly jobId?: string;

}

/**
 * @schema MacieCreateCustomDataIdentifierRequest
 */
export interface MacieCreateCustomDataIdentifierRequest {
  /**
   * @schema MacieCreateCustomDataIdentifierRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema MacieCreateCustomDataIdentifierRequest#description
   */
  readonly description?: string;

  /**
   * @schema MacieCreateCustomDataIdentifierRequest#ignoreWords
   */
  readonly ignoreWords?: string[];

  /**
   * @schema MacieCreateCustomDataIdentifierRequest#keywords
   */
  readonly keywords?: string[];

  /**
   * @schema MacieCreateCustomDataIdentifierRequest#maximumMatchDistance
   */
  readonly maximumMatchDistance?: number;

  /**
   * @schema MacieCreateCustomDataIdentifierRequest#name
   */
  readonly name?: string;

  /**
   * @schema MacieCreateCustomDataIdentifierRequest#regex
   */
  readonly regex?: string;

  /**
   * @schema MacieCreateCustomDataIdentifierRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MacieCreateCustomDataIdentifierResponse
 */
export interface MacieCreateCustomDataIdentifierResponse {
  /**
   * @schema MacieCreateCustomDataIdentifierResponse#customDataIdentifierId
   */
  readonly customDataIdentifierId?: string;

}

/**
 * @schema MacieCreateFindingsFilterRequest
 */
export interface MacieCreateFindingsFilterRequest {
  /**
   * @schema MacieCreateFindingsFilterRequest#action
   */
  readonly action: string;

  /**
   * @schema MacieCreateFindingsFilterRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema MacieCreateFindingsFilterRequest#description
   */
  readonly description?: string;

  /**
   * @schema MacieCreateFindingsFilterRequest#findingCriteria
   */
  readonly findingCriteria: MacieFindingCriteria;

  /**
   * @schema MacieCreateFindingsFilterRequest#name
   */
  readonly name: string;

  /**
   * @schema MacieCreateFindingsFilterRequest#position
   */
  readonly position?: number;

  /**
   * @schema MacieCreateFindingsFilterRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MacieCreateFindingsFilterResponse
 */
export interface MacieCreateFindingsFilterResponse {
  /**
   * @schema MacieCreateFindingsFilterResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema MacieCreateFindingsFilterResponse#id
   */
  readonly id?: string;

}

/**
 * @schema MacieCreateInvitationsRequest
 */
export interface MacieCreateInvitationsRequest {
  /**
   * @schema MacieCreateInvitationsRequest#accountIds
   */
  readonly accountIds: string[];

  /**
   * @schema MacieCreateInvitationsRequest#disableEmailNotification
   */
  readonly disableEmailNotification?: boolean;

  /**
   * @schema MacieCreateInvitationsRequest#message
   */
  readonly message?: string;

}

/**
 * @schema MacieCreateInvitationsResponse
 */
export interface MacieCreateInvitationsResponse {
  /**
   * @schema MacieCreateInvitationsResponse#unprocessedAccounts
   */
  readonly unprocessedAccounts?: MacieUnprocessedAccount[];

}

/**
 * @schema MacieCreateMemberRequest
 */
export interface MacieCreateMemberRequest {
  /**
   * @schema MacieCreateMemberRequest#account
   */
  readonly account: MacieAccountDetail;

  /**
   * @schema MacieCreateMemberRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MacieCreateMemberResponse
 */
export interface MacieCreateMemberResponse {
  /**
   * @schema MacieCreateMemberResponse#arn
   */
  readonly arn?: string;

}

/**
 * @schema MacieCreateSampleFindingsRequest
 */
export interface MacieCreateSampleFindingsRequest {
  /**
   * @schema MacieCreateSampleFindingsRequest#findingTypes
   */
  readonly findingTypes?: string[];

}

/**
 * @schema MacieCreateSampleFindingsResponse
 */
export interface MacieCreateSampleFindingsResponse {
}

/**
 * @schema MacieDeclineInvitationsRequest
 */
export interface MacieDeclineInvitationsRequest {
  /**
   * @schema MacieDeclineInvitationsRequest#accountIds
   */
  readonly accountIds: string[];

}

/**
 * @schema MacieDeclineInvitationsResponse
 */
export interface MacieDeclineInvitationsResponse {
  /**
   * @schema MacieDeclineInvitationsResponse#unprocessedAccounts
   */
  readonly unprocessedAccounts?: MacieUnprocessedAccount[];

}

/**
 * @schema MacieDeleteCustomDataIdentifierRequest
 */
export interface MacieDeleteCustomDataIdentifierRequest {
  /**
   * @schema MacieDeleteCustomDataIdentifierRequest#id
   */
  readonly id: string;

}

/**
 * @schema MacieDeleteCustomDataIdentifierResponse
 */
export interface MacieDeleteCustomDataIdentifierResponse {
}

/**
 * @schema MacieDeleteFindingsFilterRequest
 */
export interface MacieDeleteFindingsFilterRequest {
  /**
   * @schema MacieDeleteFindingsFilterRequest#id
   */
  readonly id: string;

}

/**
 * @schema MacieDeleteFindingsFilterResponse
 */
export interface MacieDeleteFindingsFilterResponse {
}

/**
 * @schema MacieDeleteInvitationsRequest
 */
export interface MacieDeleteInvitationsRequest {
  /**
   * @schema MacieDeleteInvitationsRequest#accountIds
   */
  readonly accountIds: string[];

}

/**
 * @schema MacieDeleteInvitationsResponse
 */
export interface MacieDeleteInvitationsResponse {
  /**
   * @schema MacieDeleteInvitationsResponse#unprocessedAccounts
   */
  readonly unprocessedAccounts?: MacieUnprocessedAccount[];

}

/**
 * @schema MacieDeleteMemberRequest
 */
export interface MacieDeleteMemberRequest {
  /**
   * @schema MacieDeleteMemberRequest#id
   */
  readonly id: string;

}

/**
 * @schema MacieDeleteMemberResponse
 */
export interface MacieDeleteMemberResponse {
}

/**
 * @schema MacieDescribeBucketsRequest
 */
export interface MacieDescribeBucketsRequest {
  /**
   * @schema MacieDescribeBucketsRequest#criteria
   */
  readonly criteria?: { [key: string]: MacieBucketCriteriaAdditionalProperties };

  /**
   * @schema MacieDescribeBucketsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MacieDescribeBucketsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MacieDescribeBucketsRequest#sortCriteria
   */
  readonly sortCriteria?: MacieBucketSortCriteria;

}

/**
 * @schema MacieDescribeBucketsResponse
 */
export interface MacieDescribeBucketsResponse {
  /**
   * @schema MacieDescribeBucketsResponse#buckets
   */
  readonly buckets?: MacieBucketMetadata[];

  /**
   * @schema MacieDescribeBucketsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MacieDescribeClassificationJobRequest
 */
export interface MacieDescribeClassificationJobRequest {
  /**
   * @schema MacieDescribeClassificationJobRequest#jobId
   */
  readonly jobId: string;

}

/**
 * @schema MacieDescribeClassificationJobResponse
 */
export interface MacieDescribeClassificationJobResponse {
  /**
   * @schema MacieDescribeClassificationJobResponse#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema MacieDescribeClassificationJobResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema MacieDescribeClassificationJobResponse#customDataIdentifierIds
   */
  readonly customDataIdentifierIds?: string[];

  /**
   * @schema MacieDescribeClassificationJobResponse#description
   */
  readonly description?: string;

  /**
   * @schema MacieDescribeClassificationJobResponse#initialRun
   */
  readonly initialRun?: boolean;

  /**
   * @schema MacieDescribeClassificationJobResponse#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema MacieDescribeClassificationJobResponse#jobId
   */
  readonly jobId?: string;

  /**
   * @schema MacieDescribeClassificationJobResponse#jobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema MacieDescribeClassificationJobResponse#jobType
   */
  readonly jobType?: string;

  /**
   * @schema MacieDescribeClassificationJobResponse#lastRunErrorStatus
   */
  readonly lastRunErrorStatus?: MacieLastRunErrorStatus;

  /**
   * @schema MacieDescribeClassificationJobResponse#lastRunTime
   */
  readonly lastRunTime?: string;

  /**
   * @schema MacieDescribeClassificationJobResponse#name
   */
  readonly name?: string;

  /**
   * @schema MacieDescribeClassificationJobResponse#s3JobDefinition
   */
  readonly s3JobDefinition?: MacieS3JobDefinition;

  /**
   * @schema MacieDescribeClassificationJobResponse#samplingPercentage
   */
  readonly samplingPercentage?: number;

  /**
   * @schema MacieDescribeClassificationJobResponse#scheduleFrequency
   */
  readonly scheduleFrequency?: MacieJobScheduleFrequency;

  /**
   * @schema MacieDescribeClassificationJobResponse#statistics
   */
  readonly statistics?: MacieStatistics;

  /**
   * @schema MacieDescribeClassificationJobResponse#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MacieDescribeClassificationJobResponse#userPausedDetails
   */
  readonly userPausedDetails?: MacieUserPausedDetails;

}

/**
 * @schema MacieDescribeOrganizationConfigurationRequest
 */
export interface MacieDescribeOrganizationConfigurationRequest {
}

/**
 * @schema MacieDescribeOrganizationConfigurationResponse
 */
export interface MacieDescribeOrganizationConfigurationResponse {
  /**
   * @schema MacieDescribeOrganizationConfigurationResponse#autoEnable
   */
  readonly autoEnable?: boolean;

  /**
   * @schema MacieDescribeOrganizationConfigurationResponse#maxAccountLimitReached
   */
  readonly maxAccountLimitReached?: boolean;

}

/**
 * @schema MacieDisableMacieRequest
 */
export interface MacieDisableMacieRequest {
}

/**
 * @schema MacieDisableMacieResponse
 */
export interface MacieDisableMacieResponse {
}

/**
 * @schema MacieDisableOrganizationAdminAccountRequest
 */
export interface MacieDisableOrganizationAdminAccountRequest {
  /**
   * @schema MacieDisableOrganizationAdminAccountRequest#adminAccountId
   */
  readonly adminAccountId: string;

}

/**
 * @schema MacieDisableOrganizationAdminAccountResponse
 */
export interface MacieDisableOrganizationAdminAccountResponse {
}

/**
 * @schema MacieDisassociateFromMasterAccountRequest
 */
export interface MacieDisassociateFromMasterAccountRequest {
}

/**
 * @schema MacieDisassociateFromMasterAccountResponse
 */
export interface MacieDisassociateFromMasterAccountResponse {
}

/**
 * @schema MacieDisassociateMemberRequest
 */
export interface MacieDisassociateMemberRequest {
  /**
   * @schema MacieDisassociateMemberRequest#id
   */
  readonly id: string;

}

/**
 * @schema MacieDisassociateMemberResponse
 */
export interface MacieDisassociateMemberResponse {
}

/**
 * @schema MacieEnableMacieRequest
 */
export interface MacieEnableMacieRequest {
  /**
   * @schema MacieEnableMacieRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema MacieEnableMacieRequest#findingPublishingFrequency
   */
  readonly findingPublishingFrequency?: string;

  /**
   * @schema MacieEnableMacieRequest#status
   */
  readonly status?: string;

}

/**
 * @schema MacieEnableMacieResponse
 */
export interface MacieEnableMacieResponse {
}

/**
 * @schema MacieEnableOrganizationAdminAccountRequest
 */
export interface MacieEnableOrganizationAdminAccountRequest {
  /**
   * @schema MacieEnableOrganizationAdminAccountRequest#adminAccountId
   */
  readonly adminAccountId: string;

  /**
   * @schema MacieEnableOrganizationAdminAccountRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema MacieEnableOrganizationAdminAccountResponse
 */
export interface MacieEnableOrganizationAdminAccountResponse {
}

/**
 * @schema MacieGetBucketStatisticsRequest
 */
export interface MacieGetBucketStatisticsRequest {
  /**
   * @schema MacieGetBucketStatisticsRequest#accountId
   */
  readonly accountId?: string;

}

/**
 * @schema MacieGetBucketStatisticsResponse
 */
export interface MacieGetBucketStatisticsResponse {
  /**
   * @schema MacieGetBucketStatisticsResponse#bucketCount
   */
  readonly bucketCount?: number;

  /**
   * @schema MacieGetBucketStatisticsResponse#bucketCountByEffectivePermission
   */
  readonly bucketCountByEffectivePermission?: MacieBucketCountByEffectivePermission;

  /**
   * @schema MacieGetBucketStatisticsResponse#bucketCountByEncryptionType
   */
  readonly bucketCountByEncryptionType?: MacieBucketCountByEncryptionType;

  /**
   * @schema MacieGetBucketStatisticsResponse#bucketCountBySharedAccessType
   */
  readonly bucketCountBySharedAccessType?: MacieBucketCountBySharedAccessType;

  /**
   * @schema MacieGetBucketStatisticsResponse#classifiableObjectCount
   */
  readonly classifiableObjectCount?: number;

  /**
   * @schema MacieGetBucketStatisticsResponse#classifiableSizeInBytes
   */
  readonly classifiableSizeInBytes?: number;

  /**
   * @schema MacieGetBucketStatisticsResponse#lastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema MacieGetBucketStatisticsResponse#objectCount
   */
  readonly objectCount?: number;

  /**
   * @schema MacieGetBucketStatisticsResponse#sizeInBytes
   */
  readonly sizeInBytes?: number;

  /**
   * @schema MacieGetBucketStatisticsResponse#sizeInBytesCompressed
   */
  readonly sizeInBytesCompressed?: number;

  /**
   * @schema MacieGetBucketStatisticsResponse#unclassifiableObjectCount
   */
  readonly unclassifiableObjectCount?: MacieObjectLevelStatistics;

  /**
   * @schema MacieGetBucketStatisticsResponse#unclassifiableObjectSizeInBytes
   */
  readonly unclassifiableObjectSizeInBytes?: MacieObjectLevelStatistics;

}

/**
 * @schema MacieGetClassificationExportConfigurationRequest
 */
export interface MacieGetClassificationExportConfigurationRequest {
}

/**
 * @schema MacieGetClassificationExportConfigurationResponse
 */
export interface MacieGetClassificationExportConfigurationResponse {
  /**
   * @schema MacieGetClassificationExportConfigurationResponse#configuration
   */
  readonly configuration?: MacieClassificationExportConfiguration;

}

/**
 * @schema MacieGetCustomDataIdentifierRequest
 */
export interface MacieGetCustomDataIdentifierRequest {
  /**
   * @schema MacieGetCustomDataIdentifierRequest#id
   */
  readonly id: string;

}

/**
 * @schema MacieGetCustomDataIdentifierResponse
 */
export interface MacieGetCustomDataIdentifierResponse {
  /**
   * @schema MacieGetCustomDataIdentifierResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema MacieGetCustomDataIdentifierResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema MacieGetCustomDataIdentifierResponse#deleted
   */
  readonly deleted?: boolean;

  /**
   * @schema MacieGetCustomDataIdentifierResponse#description
   */
  readonly description?: string;

  /**
   * @schema MacieGetCustomDataIdentifierResponse#id
   */
  readonly id?: string;

  /**
   * @schema MacieGetCustomDataIdentifierResponse#ignoreWords
   */
  readonly ignoreWords?: string[];

  /**
   * @schema MacieGetCustomDataIdentifierResponse#keywords
   */
  readonly keywords?: string[];

  /**
   * @schema MacieGetCustomDataIdentifierResponse#maximumMatchDistance
   */
  readonly maximumMatchDistance?: number;

  /**
   * @schema MacieGetCustomDataIdentifierResponse#name
   */
  readonly name?: string;

  /**
   * @schema MacieGetCustomDataIdentifierResponse#regex
   */
  readonly regex?: string;

  /**
   * @schema MacieGetCustomDataIdentifierResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MacieGetFindingStatisticsRequest
 */
export interface MacieGetFindingStatisticsRequest {
  /**
   * @schema MacieGetFindingStatisticsRequest#findingCriteria
   */
  readonly findingCriteria?: MacieFindingCriteria;

  /**
   * @schema MacieGetFindingStatisticsRequest#groupBy
   */
  readonly groupBy: string;

  /**
   * @schema MacieGetFindingStatisticsRequest#size
   */
  readonly size?: number;

  /**
   * @schema MacieGetFindingStatisticsRequest#sortCriteria
   */
  readonly sortCriteria?: MacieFindingStatisticsSortCriteria;

}

/**
 * @schema MacieGetFindingStatisticsResponse
 */
export interface MacieGetFindingStatisticsResponse {
  /**
   * @schema MacieGetFindingStatisticsResponse#countsByGroup
   */
  readonly countsByGroup?: MacieGroupCount[];

}

/**
 * @schema MacieGetFindingsRequest
 */
export interface MacieGetFindingsRequest {
  /**
   * @schema MacieGetFindingsRequest#findingIds
   */
  readonly findingIds: string[];

  /**
   * @schema MacieGetFindingsRequest#sortCriteria
   */
  readonly sortCriteria?: MacieSortCriteria;

}

/**
 * @schema MacieGetFindingsResponse
 */
export interface MacieGetFindingsResponse {
  /**
   * @schema MacieGetFindingsResponse#findings
   */
  readonly findings?: MacieFinding[];

}

/**
 * @schema MacieGetFindingsFilterRequest
 */
export interface MacieGetFindingsFilterRequest {
  /**
   * @schema MacieGetFindingsFilterRequest#id
   */
  readonly id: string;

}

/**
 * @schema MacieGetFindingsFilterResponse
 */
export interface MacieGetFindingsFilterResponse {
  /**
   * @schema MacieGetFindingsFilterResponse#action
   */
  readonly action?: string;

  /**
   * @schema MacieGetFindingsFilterResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema MacieGetFindingsFilterResponse#description
   */
  readonly description?: string;

  /**
   * @schema MacieGetFindingsFilterResponse#findingCriteria
   */
  readonly findingCriteria?: MacieFindingCriteria;

  /**
   * @schema MacieGetFindingsFilterResponse#id
   */
  readonly id?: string;

  /**
   * @schema MacieGetFindingsFilterResponse#name
   */
  readonly name?: string;

  /**
   * @schema MacieGetFindingsFilterResponse#position
   */
  readonly position?: number;

  /**
   * @schema MacieGetFindingsFilterResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MacieGetInvitationsCountRequest
 */
export interface MacieGetInvitationsCountRequest {
}

/**
 * @schema MacieGetInvitationsCountResponse
 */
export interface MacieGetInvitationsCountResponse {
  /**
   * @schema MacieGetInvitationsCountResponse#invitationsCount
   */
  readonly invitationsCount?: number;

}

/**
 * @schema MacieGetMacieSessionRequest
 */
export interface MacieGetMacieSessionRequest {
}

/**
 * @schema MacieGetMacieSessionResponse
 */
export interface MacieGetMacieSessionResponse {
  /**
   * @schema MacieGetMacieSessionResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema MacieGetMacieSessionResponse#findingPublishingFrequency
   */
  readonly findingPublishingFrequency?: string;

  /**
   * @schema MacieGetMacieSessionResponse#serviceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema MacieGetMacieSessionResponse#status
   */
  readonly status?: string;

  /**
   * @schema MacieGetMacieSessionResponse#updatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema MacieGetMasterAccountRequest
 */
export interface MacieGetMasterAccountRequest {
}

/**
 * @schema MacieGetMasterAccountResponse
 */
export interface MacieGetMasterAccountResponse {
  /**
   * @schema MacieGetMasterAccountResponse#master
   */
  readonly master?: MacieInvitation;

}

/**
 * @schema MacieGetMemberRequest
 */
export interface MacieGetMemberRequest {
  /**
   * @schema MacieGetMemberRequest#id
   */
  readonly id: string;

}

/**
 * @schema MacieGetMemberResponse
 */
export interface MacieGetMemberResponse {
  /**
   * @schema MacieGetMemberResponse#accountId
   */
  readonly accountId?: string;

  /**
   * @schema MacieGetMemberResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema MacieGetMemberResponse#email
   */
  readonly email?: string;

  /**
   * @schema MacieGetMemberResponse#invitedAt
   */
  readonly invitedAt?: string;

  /**
   * @schema MacieGetMemberResponse#masterAccountId
   */
  readonly masterAccountId?: string;

  /**
   * @schema MacieGetMemberResponse#relationshipStatus
   */
  readonly relationshipStatus?: string;

  /**
   * @schema MacieGetMemberResponse#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MacieGetMemberResponse#updatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema MacieGetUsageStatisticsRequest
 */
export interface MacieGetUsageStatisticsRequest {
  /**
   * @schema MacieGetUsageStatisticsRequest#filterBy
   */
  readonly filterBy?: MacieUsageStatisticsFilter[];

  /**
   * @schema MacieGetUsageStatisticsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MacieGetUsageStatisticsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MacieGetUsageStatisticsRequest#sortBy
   */
  readonly sortBy?: MacieUsageStatisticsSortBy;

}

/**
 * @schema MacieGetUsageStatisticsResponse
 */
export interface MacieGetUsageStatisticsResponse {
  /**
   * @schema MacieGetUsageStatisticsResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MacieGetUsageStatisticsResponse#records
   */
  readonly records?: MacieUsageRecord[];

}

/**
 * @schema MacieGetUsageTotalsRequest
 */
export interface MacieGetUsageTotalsRequest {
}

/**
 * @schema MacieGetUsageTotalsResponse
 */
export interface MacieGetUsageTotalsResponse {
  /**
   * @schema MacieGetUsageTotalsResponse#usageTotals
   */
  readonly usageTotals?: MacieUsageTotal[];

}

/**
 * @schema MacieListClassificationJobsRequest
 */
export interface MacieListClassificationJobsRequest {
  /**
   * @schema MacieListClassificationJobsRequest#filterCriteria
   */
  readonly filterCriteria?: MacieListJobsFilterCriteria;

  /**
   * @schema MacieListClassificationJobsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MacieListClassificationJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MacieListClassificationJobsRequest#sortCriteria
   */
  readonly sortCriteria?: MacieListJobsSortCriteria;

}

/**
 * @schema MacieListClassificationJobsResponse
 */
export interface MacieListClassificationJobsResponse {
  /**
   * @schema MacieListClassificationJobsResponse#items
   */
  readonly items?: MacieJobSummary[];

  /**
   * @schema MacieListClassificationJobsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MacieListCustomDataIdentifiersRequest
 */
export interface MacieListCustomDataIdentifiersRequest {
  /**
   * @schema MacieListCustomDataIdentifiersRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MacieListCustomDataIdentifiersRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MacieListCustomDataIdentifiersResponse
 */
export interface MacieListCustomDataIdentifiersResponse {
  /**
   * @schema MacieListCustomDataIdentifiersResponse#items
   */
  readonly items?: MacieCustomDataIdentifierSummary[];

  /**
   * @schema MacieListCustomDataIdentifiersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MacieListFindingsRequest
 */
export interface MacieListFindingsRequest {
  /**
   * @schema MacieListFindingsRequest#findingCriteria
   */
  readonly findingCriteria?: MacieFindingCriteria;

  /**
   * @schema MacieListFindingsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MacieListFindingsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MacieListFindingsRequest#sortCriteria
   */
  readonly sortCriteria?: MacieSortCriteria;

}

/**
 * @schema MacieListFindingsResponse
 */
export interface MacieListFindingsResponse {
  /**
   * @schema MacieListFindingsResponse#findingIds
   */
  readonly findingIds?: string[];

  /**
   * @schema MacieListFindingsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MacieListFindingsFiltersRequest
 */
export interface MacieListFindingsFiltersRequest {
  /**
   * @schema MacieListFindingsFiltersRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MacieListFindingsFiltersRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MacieListFindingsFiltersResponse
 */
export interface MacieListFindingsFiltersResponse {
  /**
   * @schema MacieListFindingsFiltersResponse#findingsFilterListItems
   */
  readonly findingsFilterListItems?: MacieFindingsFilterListItem[];

  /**
   * @schema MacieListFindingsFiltersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MacieListInvitationsRequest
 */
export interface MacieListInvitationsRequest {
  /**
   * @schema MacieListInvitationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MacieListInvitationsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MacieListInvitationsResponse
 */
export interface MacieListInvitationsResponse {
  /**
   * @schema MacieListInvitationsResponse#invitations
   */
  readonly invitations?: MacieInvitation[];

  /**
   * @schema MacieListInvitationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MacieListMembersRequest
 */
export interface MacieListMembersRequest {
  /**
   * @schema MacieListMembersRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MacieListMembersRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MacieListMembersRequest#onlyAssociated
   */
  readonly onlyAssociated?: string;

}

/**
 * @schema MacieListMembersResponse
 */
export interface MacieListMembersResponse {
  /**
   * @schema MacieListMembersResponse#members
   */
  readonly members?: MacieMember[];

  /**
   * @schema MacieListMembersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MacieListOrganizationAdminAccountsRequest
 */
export interface MacieListOrganizationAdminAccountsRequest {
  /**
   * @schema MacieListOrganizationAdminAccountsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MacieListOrganizationAdminAccountsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MacieListOrganizationAdminAccountsResponse
 */
export interface MacieListOrganizationAdminAccountsResponse {
  /**
   * @schema MacieListOrganizationAdminAccountsResponse#adminAccounts
   */
  readonly adminAccounts?: MacieAdminAccount[];

  /**
   * @schema MacieListOrganizationAdminAccountsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MacieListTagsForResourceRequest
 */
export interface MacieListTagsForResourceRequest {
  /**
   * @schema MacieListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema MacieListTagsForResourceResponse
 */
export interface MacieListTagsForResourceResponse {
  /**
   * @schema MacieListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MaciePutClassificationExportConfigurationRequest
 */
export interface MaciePutClassificationExportConfigurationRequest {
  /**
   * @schema MaciePutClassificationExportConfigurationRequest#configuration
   */
  readonly configuration: MacieClassificationExportConfiguration;

}

/**
 * @schema MaciePutClassificationExportConfigurationResponse
 */
export interface MaciePutClassificationExportConfigurationResponse {
  /**
   * @schema MaciePutClassificationExportConfigurationResponse#configuration
   */
  readonly configuration?: MacieClassificationExportConfiguration;

}

/**
 * @schema MacieTagResourceRequest
 */
export interface MacieTagResourceRequest {
  /**
   * @schema MacieTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema MacieTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema MacieTagResourceResponse
 */
export interface MacieTagResourceResponse {
}

/**
 * @schema MacieTestCustomDataIdentifierRequest
 */
export interface MacieTestCustomDataIdentifierRequest {
  /**
   * @schema MacieTestCustomDataIdentifierRequest#ignoreWords
   */
  readonly ignoreWords?: string[];

  /**
   * @schema MacieTestCustomDataIdentifierRequest#keywords
   */
  readonly keywords?: string[];

  /**
   * @schema MacieTestCustomDataIdentifierRequest#maximumMatchDistance
   */
  readonly maximumMatchDistance?: number;

  /**
   * @schema MacieTestCustomDataIdentifierRequest#regex
   */
  readonly regex: string;

  /**
   * @schema MacieTestCustomDataIdentifierRequest#sampleText
   */
  readonly sampleText: string;

}

/**
 * @schema MacieTestCustomDataIdentifierResponse
 */
export interface MacieTestCustomDataIdentifierResponse {
  /**
   * @schema MacieTestCustomDataIdentifierResponse#matchCount
   */
  readonly matchCount?: number;

}

/**
 * @schema MacieUntagResourceRequest
 */
export interface MacieUntagResourceRequest {
  /**
   * @schema MacieUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema MacieUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema MacieUntagResourceResponse
 */
export interface MacieUntagResourceResponse {
}

/**
 * @schema MacieUpdateClassificationJobRequest
 */
export interface MacieUpdateClassificationJobRequest {
  /**
   * @schema MacieUpdateClassificationJobRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema MacieUpdateClassificationJobRequest#jobStatus
   */
  readonly jobStatus: string;

}

/**
 * @schema MacieUpdateClassificationJobResponse
 */
export interface MacieUpdateClassificationJobResponse {
}

/**
 * @schema MacieUpdateFindingsFilterRequest
 */
export interface MacieUpdateFindingsFilterRequest {
  /**
   * @schema MacieUpdateFindingsFilterRequest#action
   */
  readonly action?: string;

  /**
   * @schema MacieUpdateFindingsFilterRequest#description
   */
  readonly description?: string;

  /**
   * @schema MacieUpdateFindingsFilterRequest#findingCriteria
   */
  readonly findingCriteria?: MacieFindingCriteria;

  /**
   * @schema MacieUpdateFindingsFilterRequest#id
   */
  readonly id: string;

  /**
   * @schema MacieUpdateFindingsFilterRequest#name
   */
  readonly name?: string;

  /**
   * @schema MacieUpdateFindingsFilterRequest#position
   */
  readonly position?: number;

}

/**
 * @schema MacieUpdateFindingsFilterResponse
 */
export interface MacieUpdateFindingsFilterResponse {
  /**
   * @schema MacieUpdateFindingsFilterResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema MacieUpdateFindingsFilterResponse#id
   */
  readonly id?: string;

}

/**
 * @schema MacieUpdateMacieSessionRequest
 */
export interface MacieUpdateMacieSessionRequest {
  /**
   * @schema MacieUpdateMacieSessionRequest#findingPublishingFrequency
   */
  readonly findingPublishingFrequency?: string;

  /**
   * @schema MacieUpdateMacieSessionRequest#status
   */
  readonly status?: string;

}

/**
 * @schema MacieUpdateMacieSessionResponse
 */
export interface MacieUpdateMacieSessionResponse {
}

/**
 * @schema MacieUpdateMemberSessionRequest
 */
export interface MacieUpdateMemberSessionRequest {
  /**
   * @schema MacieUpdateMemberSessionRequest#id
   */
  readonly id: string;

  /**
   * @schema MacieUpdateMemberSessionRequest#status
   */
  readonly status: string;

}

/**
 * @schema MacieUpdateMemberSessionResponse
 */
export interface MacieUpdateMemberSessionResponse {
}

/**
 * @schema MacieUpdateOrganizationConfigurationRequest
 */
export interface MacieUpdateOrganizationConfigurationRequest {
  /**
   * @schema MacieUpdateOrganizationConfigurationRequest#autoEnable
   */
  readonly autoEnable: boolean;

}

/**
 * @schema MacieUpdateOrganizationConfigurationResponse
 */
export interface MacieUpdateOrganizationConfigurationResponse {
}

/**
 * @schema MacieBatchGetCustomDataIdentifierSummary
 */
export interface MacieBatchGetCustomDataIdentifierSummary {
  /**
   * @schema MacieBatchGetCustomDataIdentifierSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema MacieBatchGetCustomDataIdentifierSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema MacieBatchGetCustomDataIdentifierSummary#deleted
   */
  readonly deleted?: boolean;

  /**
   * @schema MacieBatchGetCustomDataIdentifierSummary#description
   */
  readonly description?: string;

  /**
   * @schema MacieBatchGetCustomDataIdentifierSummary#id
   */
  readonly id?: string;

  /**
   * @schema MacieBatchGetCustomDataIdentifierSummary#name
   */
  readonly name?: string;

}

/**
 * @schema MacieS3JobDefinition
 */
export interface MacieS3JobDefinition {
  /**
   * @schema MacieS3JobDefinition#bucketDefinitions
   */
  readonly bucketDefinitions?: MacieS3BucketDefinitionForJob[];

  /**
   * @schema MacieS3JobDefinition#scoping
   */
  readonly scoping?: MacieScoping;

}

/**
 * @schema MacieJobScheduleFrequency
 */
export interface MacieJobScheduleFrequency {
  /**
   * @schema MacieJobScheduleFrequency#dailySchedule
   */
  readonly dailySchedule?: MacieDailySchedule;

  /**
   * @schema MacieJobScheduleFrequency#monthlySchedule
   */
  readonly monthlySchedule?: MacieMonthlySchedule;

  /**
   * @schema MacieJobScheduleFrequency#weeklySchedule
   */
  readonly weeklySchedule?: MacieWeeklySchedule;

}

/**
 * @schema MacieFindingCriteria
 */
export interface MacieFindingCriteria {
  /**
   * @schema MacieFindingCriteria#criterion
   */
  readonly criterion?: { [key: string]: MacieCriterionAdditionalProperties };

}

/**
 * @schema MacieUnprocessedAccount
 */
export interface MacieUnprocessedAccount {
  /**
   * @schema MacieUnprocessedAccount#accountId
   */
  readonly accountId?: string;

  /**
   * @schema MacieUnprocessedAccount#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema MacieUnprocessedAccount#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema MacieAccountDetail
 */
export interface MacieAccountDetail {
  /**
   * @schema MacieAccountDetail#accountId
   */
  readonly accountId: string;

  /**
   * @schema MacieAccountDetail#email
   */
  readonly email: string;

}

/**
 * @schema MacieBucketCriteriaAdditionalProperties
 */
export interface MacieBucketCriteriaAdditionalProperties {
  /**
   * @schema MacieBucketCriteriaAdditionalProperties#eq
   */
  readonly eq?: string[];

  /**
   * @schema MacieBucketCriteriaAdditionalProperties#gt
   */
  readonly gt?: number;

  /**
   * @schema MacieBucketCriteriaAdditionalProperties#gte
   */
  readonly gte?: number;

  /**
   * @schema MacieBucketCriteriaAdditionalProperties#lt
   */
  readonly lt?: number;

  /**
   * @schema MacieBucketCriteriaAdditionalProperties#lte
   */
  readonly lte?: number;

  /**
   * @schema MacieBucketCriteriaAdditionalProperties#neq
   */
  readonly neq?: string[];

  /**
   * @schema MacieBucketCriteriaAdditionalProperties#prefix
   */
  readonly prefix?: string;

}

/**
 * @schema MacieBucketSortCriteria
 */
export interface MacieBucketSortCriteria {
  /**
   * @schema MacieBucketSortCriteria#attributeName
   */
  readonly attributeName?: string;

  /**
   * @schema MacieBucketSortCriteria#orderBy
   */
  readonly orderBy?: string;

}

/**
 * @schema MacieBucketMetadata
 */
export interface MacieBucketMetadata {
  /**
   * @schema MacieBucketMetadata#accountId
   */
  readonly accountId?: string;

  /**
   * @schema MacieBucketMetadata#bucketArn
   */
  readonly bucketArn?: string;

  /**
   * @schema MacieBucketMetadata#bucketCreatedAt
   */
  readonly bucketCreatedAt?: string;

  /**
   * @schema MacieBucketMetadata#bucketName
   */
  readonly bucketName?: string;

  /**
   * @schema MacieBucketMetadata#classifiableObjectCount
   */
  readonly classifiableObjectCount?: number;

  /**
   * @schema MacieBucketMetadata#classifiableSizeInBytes
   */
  readonly classifiableSizeInBytes?: number;

  /**
   * @schema MacieBucketMetadata#jobDetails
   */
  readonly jobDetails?: MacieJobDetails;

  /**
   * @schema MacieBucketMetadata#lastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema MacieBucketMetadata#objectCount
   */
  readonly objectCount?: number;

  /**
   * @schema MacieBucketMetadata#objectCountByEncryptionType
   */
  readonly objectCountByEncryptionType?: MacieObjectCountByEncryptionType;

  /**
   * @schema MacieBucketMetadata#publicAccess
   */
  readonly publicAccess?: MacieBucketPublicAccess;

  /**
   * @schema MacieBucketMetadata#region
   */
  readonly region?: string;

  /**
   * @schema MacieBucketMetadata#replicationDetails
   */
  readonly replicationDetails?: MacieReplicationDetails;

  /**
   * @schema MacieBucketMetadata#sharedAccess
   */
  readonly sharedAccess?: string;

  /**
   * @schema MacieBucketMetadata#sizeInBytes
   */
  readonly sizeInBytes?: number;

  /**
   * @schema MacieBucketMetadata#sizeInBytesCompressed
   */
  readonly sizeInBytesCompressed?: number;

  /**
   * @schema MacieBucketMetadata#tags
   */
  readonly tags?: MacieKeyValuePair[];

  /**
   * @schema MacieBucketMetadata#unclassifiableObjectCount
   */
  readonly unclassifiableObjectCount?: MacieObjectLevelStatistics;

  /**
   * @schema MacieBucketMetadata#unclassifiableObjectSizeInBytes
   */
  readonly unclassifiableObjectSizeInBytes?: MacieObjectLevelStatistics;

  /**
   * @schema MacieBucketMetadata#versioning
   */
  readonly versioning?: boolean;

}

/**
 * @schema MacieLastRunErrorStatus
 */
export interface MacieLastRunErrorStatus {
  /**
   * @schema MacieLastRunErrorStatus#code
   */
  readonly code?: string;

}

/**
 * @schema MacieStatistics
 */
export interface MacieStatistics {
  /**
   * @schema MacieStatistics#approximateNumberOfObjectsToProcess
   */
  readonly approximateNumberOfObjectsToProcess?: number;

  /**
   * @schema MacieStatistics#numberOfRuns
   */
  readonly numberOfRuns?: number;

}

/**
 * @schema MacieUserPausedDetails
 */
export interface MacieUserPausedDetails {
  /**
   * @schema MacieUserPausedDetails#jobExpiresAt
   */
  readonly jobExpiresAt?: string;

  /**
   * @schema MacieUserPausedDetails#jobImminentExpirationHealthEventArn
   */
  readonly jobImminentExpirationHealthEventArn?: string;

  /**
   * @schema MacieUserPausedDetails#jobPausedAt
   */
  readonly jobPausedAt?: string;

}

/**
 * @schema MacieBucketCountByEffectivePermission
 */
export interface MacieBucketCountByEffectivePermission {
  /**
   * @schema MacieBucketCountByEffectivePermission#publiclyAccessible
   */
  readonly publiclyAccessible?: number;

  /**
   * @schema MacieBucketCountByEffectivePermission#publiclyReadable
   */
  readonly publiclyReadable?: number;

  /**
   * @schema MacieBucketCountByEffectivePermission#publiclyWritable
   */
  readonly publiclyWritable?: number;

  /**
   * @schema MacieBucketCountByEffectivePermission#unknown
   */
  readonly unknown?: number;

}

/**
 * @schema MacieBucketCountByEncryptionType
 */
export interface MacieBucketCountByEncryptionType {
  /**
   * @schema MacieBucketCountByEncryptionType#kmsManaged
   */
  readonly kmsManaged?: number;

  /**
   * @schema MacieBucketCountByEncryptionType#s3Managed
   */
  readonly s3Managed?: number;

  /**
   * @schema MacieBucketCountByEncryptionType#unencrypted
   */
  readonly unencrypted?: number;

}

/**
 * @schema MacieBucketCountBySharedAccessType
 */
export interface MacieBucketCountBySharedAccessType {
  /**
   * @schema MacieBucketCountBySharedAccessType#external
   */
  readonly external?: number;

  /**
   * @schema MacieBucketCountBySharedAccessType#internal
   */
  readonly internal?: number;

  /**
   * @schema MacieBucketCountBySharedAccessType#notShared
   */
  readonly notShared?: number;

  /**
   * @schema MacieBucketCountBySharedAccessType#unknown
   */
  readonly unknown?: number;

}

/**
 * @schema MacieObjectLevelStatistics
 */
export interface MacieObjectLevelStatistics {
  /**
   * @schema MacieObjectLevelStatistics#fileType
   */
  readonly fileType?: number;

  /**
   * @schema MacieObjectLevelStatistics#storageClass
   */
  readonly storageClass?: number;

  /**
   * @schema MacieObjectLevelStatistics#total
   */
  readonly total?: number;

}

/**
 * @schema MacieClassificationExportConfiguration
 */
export interface MacieClassificationExportConfiguration {
  /**
   * @schema MacieClassificationExportConfiguration#s3Destination
   */
  readonly s3Destination?: MacieS3Destination;

}

/**
 * @schema MacieFindingStatisticsSortCriteria
 */
export interface MacieFindingStatisticsSortCriteria {
  /**
   * @schema MacieFindingStatisticsSortCriteria#attributeName
   */
  readonly attributeName?: string;

  /**
   * @schema MacieFindingStatisticsSortCriteria#orderBy
   */
  readonly orderBy?: string;

}

/**
 * @schema MacieGroupCount
 */
export interface MacieGroupCount {
  /**
   * @schema MacieGroupCount#count
   */
  readonly count?: number;

  /**
   * @schema MacieGroupCount#groupKey
   */
  readonly groupKey?: string;

}

/**
 * @schema MacieSortCriteria
 */
export interface MacieSortCriteria {
  /**
   * @schema MacieSortCriteria#attributeName
   */
  readonly attributeName?: string;

  /**
   * @schema MacieSortCriteria#orderBy
   */
  readonly orderBy?: string;

}

/**
 * @schema MacieFinding
 */
export interface MacieFinding {
  /**
   * @schema MacieFinding#accountId
   */
  readonly accountId?: string;

  /**
   * @schema MacieFinding#archived
   */
  readonly archived?: boolean;

  /**
   * @schema MacieFinding#category
   */
  readonly category?: string;

  /**
   * @schema MacieFinding#classificationDetails
   */
  readonly classificationDetails?: MacieClassificationDetails;

  /**
   * @schema MacieFinding#count
   */
  readonly count?: number;

  /**
   * @schema MacieFinding#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema MacieFinding#description
   */
  readonly description?: string;

  /**
   * @schema MacieFinding#id
   */
  readonly id?: string;

  /**
   * @schema MacieFinding#partition
   */
  readonly partition?: string;

  /**
   * @schema MacieFinding#policyDetails
   */
  readonly policyDetails?: MaciePolicyDetails;

  /**
   * @schema MacieFinding#region
   */
  readonly region?: string;

  /**
   * @schema MacieFinding#resourcesAffected
   */
  readonly resourcesAffected?: MacieResourcesAffected;

  /**
   * @schema MacieFinding#sample
   */
  readonly sample?: boolean;

  /**
   * @schema MacieFinding#schemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema MacieFinding#severity
   */
  readonly severity?: MacieSeverity;

  /**
   * @schema MacieFinding#title
   */
  readonly title?: string;

  /**
   * @schema MacieFinding#type
   */
  readonly type?: string;

  /**
   * @schema MacieFinding#updatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema MacieInvitation
 */
export interface MacieInvitation {
  /**
   * @schema MacieInvitation#accountId
   */
  readonly accountId?: string;

  /**
   * @schema MacieInvitation#invitationId
   */
  readonly invitationId?: string;

  /**
   * @schema MacieInvitation#invitedAt
   */
  readonly invitedAt?: string;

  /**
   * @schema MacieInvitation#relationshipStatus
   */
  readonly relationshipStatus?: string;

}

/**
 * @schema MacieUsageStatisticsFilter
 */
export interface MacieUsageStatisticsFilter {
  /**
   * @schema MacieUsageStatisticsFilter#comparator
   */
  readonly comparator?: string;

  /**
   * @schema MacieUsageStatisticsFilter#key
   */
  readonly key?: string;

  /**
   * @schema MacieUsageStatisticsFilter#values
   */
  readonly values?: string[];

}

/**
 * @schema MacieUsageStatisticsSortBy
 */
export interface MacieUsageStatisticsSortBy {
  /**
   * @schema MacieUsageStatisticsSortBy#key
   */
  readonly key?: string;

  /**
   * @schema MacieUsageStatisticsSortBy#orderBy
   */
  readonly orderBy?: string;

}

/**
 * @schema MacieUsageRecord
 */
export interface MacieUsageRecord {
  /**
   * @schema MacieUsageRecord#accountId
   */
  readonly accountId?: string;

  /**
   * @schema MacieUsageRecord#freeTrialStartDate
   */
  readonly freeTrialStartDate?: string;

  /**
   * @schema MacieUsageRecord#usage
   */
  readonly usage?: MacieUsageByAccount[];

}

/**
 * @schema MacieUsageTotal
 */
export interface MacieUsageTotal {
  /**
   * @schema MacieUsageTotal#currency
   */
  readonly currency?: string;

  /**
   * @schema MacieUsageTotal#estimatedCost
   */
  readonly estimatedCost?: string;

  /**
   * @schema MacieUsageTotal#type
   */
  readonly type?: string;

}

/**
 * @schema MacieListJobsFilterCriteria
 */
export interface MacieListJobsFilterCriteria {
  /**
   * @schema MacieListJobsFilterCriteria#excludes
   */
  readonly excludes?: MacieListJobsFilterTerm[];

  /**
   * @schema MacieListJobsFilterCriteria#includes
   */
  readonly includes?: MacieListJobsFilterTerm[];

}

/**
 * @schema MacieListJobsSortCriteria
 */
export interface MacieListJobsSortCriteria {
  /**
   * @schema MacieListJobsSortCriteria#attributeName
   */
  readonly attributeName?: string;

  /**
   * @schema MacieListJobsSortCriteria#orderBy
   */
  readonly orderBy?: string;

}

/**
 * @schema MacieJobSummary
 */
export interface MacieJobSummary {
  /**
   * @schema MacieJobSummary#bucketDefinitions
   */
  readonly bucketDefinitions?: MacieS3BucketDefinitionForJob[];

  /**
   * @schema MacieJobSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema MacieJobSummary#jobId
   */
  readonly jobId?: string;

  /**
   * @schema MacieJobSummary#jobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema MacieJobSummary#jobType
   */
  readonly jobType?: string;

  /**
   * @schema MacieJobSummary#lastRunErrorStatus
   */
  readonly lastRunErrorStatus?: MacieLastRunErrorStatus;

  /**
   * @schema MacieJobSummary#name
   */
  readonly name?: string;

  /**
   * @schema MacieJobSummary#userPausedDetails
   */
  readonly userPausedDetails?: MacieUserPausedDetails;

}

/**
 * @schema MacieCustomDataIdentifierSummary
 */
export interface MacieCustomDataIdentifierSummary {
  /**
   * @schema MacieCustomDataIdentifierSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema MacieCustomDataIdentifierSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema MacieCustomDataIdentifierSummary#description
   */
  readonly description?: string;

  /**
   * @schema MacieCustomDataIdentifierSummary#id
   */
  readonly id?: string;

  /**
   * @schema MacieCustomDataIdentifierSummary#name
   */
  readonly name?: string;

}

/**
 * @schema MacieFindingsFilterListItem
 */
export interface MacieFindingsFilterListItem {
  /**
   * @schema MacieFindingsFilterListItem#action
   */
  readonly action?: string;

  /**
   * @schema MacieFindingsFilterListItem#arn
   */
  readonly arn?: string;

  /**
   * @schema MacieFindingsFilterListItem#id
   */
  readonly id?: string;

  /**
   * @schema MacieFindingsFilterListItem#name
   */
  readonly name?: string;

  /**
   * @schema MacieFindingsFilterListItem#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MacieMember
 */
export interface MacieMember {
  /**
   * @schema MacieMember#accountId
   */
  readonly accountId?: string;

  /**
   * @schema MacieMember#arn
   */
  readonly arn?: string;

  /**
   * @schema MacieMember#email
   */
  readonly email?: string;

  /**
   * @schema MacieMember#invitedAt
   */
  readonly invitedAt?: string;

  /**
   * @schema MacieMember#masterAccountId
   */
  readonly masterAccountId?: string;

  /**
   * @schema MacieMember#relationshipStatus
   */
  readonly relationshipStatus?: string;

  /**
   * @schema MacieMember#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MacieMember#updatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema MacieAdminAccount
 */
export interface MacieAdminAccount {
  /**
   * @schema MacieAdminAccount#accountId
   */
  readonly accountId?: string;

  /**
   * @schema MacieAdminAccount#status
   */
  readonly status?: string;

}

/**
 * @schema MacieS3BucketDefinitionForJob
 */
export interface MacieS3BucketDefinitionForJob {
  /**
   * @schema MacieS3BucketDefinitionForJob#accountId
   */
  readonly accountId?: string;

  /**
   * @schema MacieS3BucketDefinitionForJob#buckets
   */
  readonly buckets?: string[];

}

/**
 * @schema MacieScoping
 */
export interface MacieScoping {
  /**
   * @schema MacieScoping#excludes
   */
  readonly excludes?: MacieJobScopingBlock;

  /**
   * @schema MacieScoping#includes
   */
  readonly includes?: MacieJobScopingBlock;

}

/**
 * @schema MacieDailySchedule
 */
export interface MacieDailySchedule {
}

/**
 * @schema MacieMonthlySchedule
 */
export interface MacieMonthlySchedule {
  /**
   * @schema MacieMonthlySchedule#dayOfMonth
   */
  readonly dayOfMonth?: number;

}

/**
 * @schema MacieWeeklySchedule
 */
export interface MacieWeeklySchedule {
  /**
   * @schema MacieWeeklySchedule#dayOfWeek
   */
  readonly dayOfWeek?: string;

}

/**
 * @schema MacieCriterionAdditionalProperties
 */
export interface MacieCriterionAdditionalProperties {
  /**
   * @schema MacieCriterionAdditionalProperties#eq
   */
  readonly eq?: string[];

  /**
   * @schema MacieCriterionAdditionalProperties#eqExactMatch
   */
  readonly eqExactMatch?: string[];

  /**
   * @schema MacieCriterionAdditionalProperties#gt
   */
  readonly gt?: number;

  /**
   * @schema MacieCriterionAdditionalProperties#gte
   */
  readonly gte?: number;

  /**
   * @schema MacieCriterionAdditionalProperties#lt
   */
  readonly lt?: number;

  /**
   * @schema MacieCriterionAdditionalProperties#lte
   */
  readonly lte?: number;

  /**
   * @schema MacieCriterionAdditionalProperties#neq
   */
  readonly neq?: string[];

}

/**
 * @schema MacieJobDetails
 */
export interface MacieJobDetails {
  /**
   * @schema MacieJobDetails#isDefinedInJob
   */
  readonly isDefinedInJob?: string;

  /**
   * @schema MacieJobDetails#isMonitoredByJob
   */
  readonly isMonitoredByJob?: string;

  /**
   * @schema MacieJobDetails#lastJobId
   */
  readonly lastJobId?: string;

  /**
   * @schema MacieJobDetails#lastJobRunTime
   */
  readonly lastJobRunTime?: string;

}

/**
 * @schema MacieObjectCountByEncryptionType
 */
export interface MacieObjectCountByEncryptionType {
  /**
   * @schema MacieObjectCountByEncryptionType#customerManaged
   */
  readonly customerManaged?: number;

  /**
   * @schema MacieObjectCountByEncryptionType#kmsManaged
   */
  readonly kmsManaged?: number;

  /**
   * @schema MacieObjectCountByEncryptionType#s3Managed
   */
  readonly s3Managed?: number;

  /**
   * @schema MacieObjectCountByEncryptionType#unencrypted
   */
  readonly unencrypted?: number;

}

/**
 * @schema MacieBucketPublicAccess
 */
export interface MacieBucketPublicAccess {
  /**
   * @schema MacieBucketPublicAccess#effectivePermission
   */
  readonly effectivePermission?: string;

  /**
   * @schema MacieBucketPublicAccess#permissionConfiguration
   */
  readonly permissionConfiguration?: MacieBucketPermissionConfiguration;

}

/**
 * @schema MacieReplicationDetails
 */
export interface MacieReplicationDetails {
  /**
   * @schema MacieReplicationDetails#replicated
   */
  readonly replicated?: boolean;

  /**
   * @schema MacieReplicationDetails#replicatedExternally
   */
  readonly replicatedExternally?: boolean;

  /**
   * @schema MacieReplicationDetails#replicationAccounts
   */
  readonly replicationAccounts?: string[];

}

/**
 * @schema MacieKeyValuePair
 */
export interface MacieKeyValuePair {
  /**
   * @schema MacieKeyValuePair#key
   */
  readonly key?: string;

  /**
   * @schema MacieKeyValuePair#value
   */
  readonly value?: string;

}

/**
 * @schema MacieS3Destination
 */
export interface MacieS3Destination {
  /**
   * @schema MacieS3Destination#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema MacieS3Destination#keyPrefix
   */
  readonly keyPrefix?: string;

  /**
   * @schema MacieS3Destination#kmsKeyArn
   */
  readonly kmsKeyArn: string;

}

/**
 * @schema MacieClassificationDetails
 */
export interface MacieClassificationDetails {
  /**
   * @schema MacieClassificationDetails#detailedResultsLocation
   */
  readonly detailedResultsLocation?: string;

  /**
   * @schema MacieClassificationDetails#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema MacieClassificationDetails#jobId
   */
  readonly jobId?: string;

  /**
   * @schema MacieClassificationDetails#result
   */
  readonly result?: MacieClassificationResult;

}

/**
 * @schema MaciePolicyDetails
 */
export interface MaciePolicyDetails {
  /**
   * @schema MaciePolicyDetails#action
   */
  readonly action?: MacieFindingAction;

  /**
   * @schema MaciePolicyDetails#actor
   */
  readonly actor?: MacieFindingActor;

}

/**
 * @schema MacieResourcesAffected
 */
export interface MacieResourcesAffected {
  /**
   * @schema MacieResourcesAffected#s3Bucket
   */
  readonly s3Bucket?: MacieS3Bucket;

  /**
   * @schema MacieResourcesAffected#s3Object
   */
  readonly s3Object?: MacieS3Object;

}

/**
 * @schema MacieSeverity
 */
export interface MacieSeverity {
  /**
   * @schema MacieSeverity#description
   */
  readonly description?: string;

  /**
   * @schema MacieSeverity#score
   */
  readonly score?: number;

}

/**
 * @schema MacieUsageByAccount
 */
export interface MacieUsageByAccount {
  /**
   * @schema MacieUsageByAccount#currency
   */
  readonly currency?: string;

  /**
   * @schema MacieUsageByAccount#estimatedCost
   */
  readonly estimatedCost?: string;

  /**
   * @schema MacieUsageByAccount#serviceLimit
   */
  readonly serviceLimit?: MacieServiceLimit;

  /**
   * @schema MacieUsageByAccount#type
   */
  readonly type?: string;

}

/**
 * @schema MacieListJobsFilterTerm
 */
export interface MacieListJobsFilterTerm {
  /**
   * @schema MacieListJobsFilterTerm#comparator
   */
  readonly comparator?: string;

  /**
   * @schema MacieListJobsFilterTerm#key
   */
  readonly key?: string;

  /**
   * @schema MacieListJobsFilterTerm#values
   */
  readonly values?: string[];

}

/**
 * @schema MacieJobScopingBlock
 */
export interface MacieJobScopingBlock {
  /**
   * @schema MacieJobScopingBlock#and
   */
  readonly and?: MacieJobScopeTerm[];

}

/**
 * @schema MacieBucketPermissionConfiguration
 */
export interface MacieBucketPermissionConfiguration {
  /**
   * @schema MacieBucketPermissionConfiguration#accountLevelPermissions
   */
  readonly accountLevelPermissions?: MacieAccountLevelPermissions;

  /**
   * @schema MacieBucketPermissionConfiguration#bucketLevelPermissions
   */
  readonly bucketLevelPermissions?: MacieBucketLevelPermissions;

}

/**
 * @schema MacieClassificationResult
 */
export interface MacieClassificationResult {
  /**
   * @schema MacieClassificationResult#additionalOccurrences
   */
  readonly additionalOccurrences?: boolean;

  /**
   * @schema MacieClassificationResult#customDataIdentifiers
   */
  readonly customDataIdentifiers?: MacieCustomDataIdentifiers;

  /**
   * @schema MacieClassificationResult#mimeType
   */
  readonly mimeType?: string;

  /**
   * @schema MacieClassificationResult#sensitiveData
   */
  readonly sensitiveData?: MacieSensitiveDataItem[];

  /**
   * @schema MacieClassificationResult#sizeClassified
   */
  readonly sizeClassified?: number;

  /**
   * @schema MacieClassificationResult#status
   */
  readonly status?: MacieClassificationResultStatus;

}

/**
 * @schema MacieFindingAction
 */
export interface MacieFindingAction {
  /**
   * @schema MacieFindingAction#actionType
   */
  readonly actionType?: string;

  /**
   * @schema MacieFindingAction#apiCallDetails
   */
  readonly apiCallDetails?: MacieApiCallDetails;

}

/**
 * @schema MacieFindingActor
 */
export interface MacieFindingActor {
  /**
   * @schema MacieFindingActor#domainDetails
   */
  readonly domainDetails?: MacieDomainDetails;

  /**
   * @schema MacieFindingActor#ipAddressDetails
   */
  readonly ipAddressDetails?: MacieIpAddressDetails;

  /**
   * @schema MacieFindingActor#userIdentity
   */
  readonly userIdentity?: MacieUserIdentity;

}

/**
 * @schema MacieS3Bucket
 */
export interface MacieS3Bucket {
  /**
   * @schema MacieS3Bucket#arn
   */
  readonly arn?: string;

  /**
   * @schema MacieS3Bucket#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema MacieS3Bucket#defaultServerSideEncryption
   */
  readonly defaultServerSideEncryption?: MacieServerSideEncryption;

  /**
   * @schema MacieS3Bucket#name
   */
  readonly name?: string;

  /**
   * @schema MacieS3Bucket#owner
   */
  readonly owner?: MacieS3BucketOwner;

  /**
   * @schema MacieS3Bucket#publicAccess
   */
  readonly publicAccess?: MacieBucketPublicAccess;

  /**
   * @schema MacieS3Bucket#tags
   */
  readonly tags?: MacieKeyValuePair[];

}

/**
 * @schema MacieS3Object
 */
export interface MacieS3Object {
  /**
   * @schema MacieS3Object#bucketArn
   */
  readonly bucketArn?: string;

  /**
   * @schema MacieS3Object#eTag
   */
  readonly eTag?: string;

  /**
   * @schema MacieS3Object#extension
   */
  readonly extension?: string;

  /**
   * @schema MacieS3Object#key
   */
  readonly key?: string;

  /**
   * @schema MacieS3Object#lastModified
   */
  readonly lastModified?: string;

  /**
   * @schema MacieS3Object#path
   */
  readonly path?: string;

  /**
   * @schema MacieS3Object#publicAccess
   */
  readonly publicAccess?: boolean;

  /**
   * @schema MacieS3Object#serverSideEncryption
   */
  readonly serverSideEncryption?: MacieServerSideEncryption;

  /**
   * @schema MacieS3Object#size
   */
  readonly size?: number;

  /**
   * @schema MacieS3Object#storageClass
   */
  readonly storageClass?: string;

  /**
   * @schema MacieS3Object#tags
   */
  readonly tags?: MacieKeyValuePair[];

  /**
   * @schema MacieS3Object#versionId
   */
  readonly versionId?: string;

}

/**
 * @schema MacieServiceLimit
 */
export interface MacieServiceLimit {
  /**
   * @schema MacieServiceLimit#isServiceLimited
   */
  readonly isServiceLimited?: boolean;

  /**
   * @schema MacieServiceLimit#unit
   */
  readonly unit?: string;

  /**
   * @schema MacieServiceLimit#value
   */
  readonly value?: number;

}

/**
 * @schema MacieJobScopeTerm
 */
export interface MacieJobScopeTerm {
  /**
   * @schema MacieJobScopeTerm#simpleScopeTerm
   */
  readonly simpleScopeTerm?: MacieSimpleScopeTerm;

  /**
   * @schema MacieJobScopeTerm#tagScopeTerm
   */
  readonly tagScopeTerm?: MacieTagScopeTerm;

}

/**
 * @schema MacieAccountLevelPermissions
 */
export interface MacieAccountLevelPermissions {
  /**
   * @schema MacieAccountLevelPermissions#blockPublicAccess
   */
  readonly blockPublicAccess?: MacieBlockPublicAccess;

}

/**
 * @schema MacieBucketLevelPermissions
 */
export interface MacieBucketLevelPermissions {
  /**
   * @schema MacieBucketLevelPermissions#accessControlList
   */
  readonly accessControlList?: MacieAccessControlList;

  /**
   * @schema MacieBucketLevelPermissions#blockPublicAccess
   */
  readonly blockPublicAccess?: MacieBlockPublicAccess;

  /**
   * @schema MacieBucketLevelPermissions#bucketPolicy
   */
  readonly bucketPolicy?: MacieBucketPolicy;

}

/**
 * @schema MacieCustomDataIdentifiers
 */
export interface MacieCustomDataIdentifiers {
  /**
   * @schema MacieCustomDataIdentifiers#detections
   */
  readonly detections?: MacieCustomDetection[];

  /**
   * @schema MacieCustomDataIdentifiers#totalCount
   */
  readonly totalCount?: number;

}

/**
 * @schema MacieSensitiveDataItem
 */
export interface MacieSensitiveDataItem {
  /**
   * @schema MacieSensitiveDataItem#category
   */
  readonly category?: string;

  /**
   * @schema MacieSensitiveDataItem#detections
   */
  readonly detections?: MacieDefaultDetection[];

  /**
   * @schema MacieSensitiveDataItem#totalCount
   */
  readonly totalCount?: number;

}

/**
 * @schema MacieClassificationResultStatus
 */
export interface MacieClassificationResultStatus {
  /**
   * @schema MacieClassificationResultStatus#code
   */
  readonly code?: string;

  /**
   * @schema MacieClassificationResultStatus#reason
   */
  readonly reason?: string;

}

/**
 * @schema MacieApiCallDetails
 */
export interface MacieApiCallDetails {
  /**
   * @schema MacieApiCallDetails#api
   */
  readonly api?: string;

  /**
   * @schema MacieApiCallDetails#apiServiceName
   */
  readonly apiServiceName?: string;

  /**
   * @schema MacieApiCallDetails#firstSeen
   */
  readonly firstSeen?: string;

  /**
   * @schema MacieApiCallDetails#lastSeen
   */
  readonly lastSeen?: string;

}

/**
 * @schema MacieDomainDetails
 */
export interface MacieDomainDetails {
  /**
   * @schema MacieDomainDetails#domainName
   */
  readonly domainName?: string;

}

/**
 * @schema MacieIpAddressDetails
 */
export interface MacieIpAddressDetails {
  /**
   * @schema MacieIpAddressDetails#ipAddressV4
   */
  readonly ipAddressV4?: string;

  /**
   * @schema MacieIpAddressDetails#ipCity
   */
  readonly ipCity?: MacieIpCity;

  /**
   * @schema MacieIpAddressDetails#ipCountry
   */
  readonly ipCountry?: MacieIpCountry;

  /**
   * @schema MacieIpAddressDetails#ipGeoLocation
   */
  readonly ipGeoLocation?: MacieIpGeoLocation;

  /**
   * @schema MacieIpAddressDetails#ipOwner
   */
  readonly ipOwner?: MacieIpOwner;

}

/**
 * @schema MacieUserIdentity
 */
export interface MacieUserIdentity {
  /**
   * @schema MacieUserIdentity#assumedRole
   */
  readonly assumedRole?: MacieAssumedRole;

  /**
   * @schema MacieUserIdentity#awsAccount
   */
  readonly awsAccount?: MacieAwsAccount;

  /**
   * @schema MacieUserIdentity#awsService
   */
  readonly awsService?: MacieAwsService;

  /**
   * @schema MacieUserIdentity#federatedUser
   */
  readonly federatedUser?: MacieFederatedUser;

  /**
   * @schema MacieUserIdentity#iamUser
   */
  readonly iamUser?: MacieIamUser;

  /**
   * @schema MacieUserIdentity#root
   */
  readonly root?: MacieUserIdentityRoot;

  /**
   * @schema MacieUserIdentity#type
   */
  readonly type?: string;

}

/**
 * @schema MacieServerSideEncryption
 */
export interface MacieServerSideEncryption {
  /**
   * @schema MacieServerSideEncryption#encryptionType
   */
  readonly encryptionType?: string;

  /**
   * @schema MacieServerSideEncryption#kmsMasterKeyId
   */
  readonly kmsMasterKeyId?: string;

}

/**
 * @schema MacieS3BucketOwner
 */
export interface MacieS3BucketOwner {
  /**
   * @schema MacieS3BucketOwner#displayName
   */
  readonly displayName?: string;

  /**
   * @schema MacieS3BucketOwner#id
   */
  readonly id?: string;

}

/**
 * @schema MacieSimpleScopeTerm
 */
export interface MacieSimpleScopeTerm {
  /**
   * @schema MacieSimpleScopeTerm#comparator
   */
  readonly comparator?: string;

  /**
   * @schema MacieSimpleScopeTerm#key
   */
  readonly key?: string;

  /**
   * @schema MacieSimpleScopeTerm#values
   */
  readonly values?: string[];

}

/**
 * @schema MacieTagScopeTerm
 */
export interface MacieTagScopeTerm {
  /**
   * @schema MacieTagScopeTerm#comparator
   */
  readonly comparator?: string;

  /**
   * @schema MacieTagScopeTerm#key
   */
  readonly key?: string;

  /**
   * @schema MacieTagScopeTerm#tagValues
   */
  readonly tagValues?: MacieTagValuePair[];

  /**
   * @schema MacieTagScopeTerm#target
   */
  readonly target?: string;

}

/**
 * @schema MacieBlockPublicAccess
 */
export interface MacieBlockPublicAccess {
  /**
   * @schema MacieBlockPublicAccess#blockPublicAcls
   */
  readonly blockPublicAcls?: boolean;

  /**
   * @schema MacieBlockPublicAccess#blockPublicPolicy
   */
  readonly blockPublicPolicy?: boolean;

  /**
   * @schema MacieBlockPublicAccess#ignorePublicAcls
   */
  readonly ignorePublicAcls?: boolean;

  /**
   * @schema MacieBlockPublicAccess#restrictPublicBuckets
   */
  readonly restrictPublicBuckets?: boolean;

}

/**
 * @schema MacieAccessControlList
 */
export interface MacieAccessControlList {
  /**
   * @schema MacieAccessControlList#allowsPublicReadAccess
   */
  readonly allowsPublicReadAccess?: boolean;

  /**
   * @schema MacieAccessControlList#allowsPublicWriteAccess
   */
  readonly allowsPublicWriteAccess?: boolean;

}

/**
 * @schema MacieBucketPolicy
 */
export interface MacieBucketPolicy {
  /**
   * @schema MacieBucketPolicy#allowsPublicReadAccess
   */
  readonly allowsPublicReadAccess?: boolean;

  /**
   * @schema MacieBucketPolicy#allowsPublicWriteAccess
   */
  readonly allowsPublicWriteAccess?: boolean;

}

/**
 * @schema MacieCustomDetection
 */
export interface MacieCustomDetection {
  /**
   * @schema MacieCustomDetection#arn
   */
  readonly arn?: string;

  /**
   * @schema MacieCustomDetection#count
   */
  readonly count?: number;

  /**
   * @schema MacieCustomDetection#name
   */
  readonly name?: string;

  /**
   * @schema MacieCustomDetection#occurrences
   */
  readonly occurrences?: MacieOccurrences;

}

/**
 * @schema MacieDefaultDetection
 */
export interface MacieDefaultDetection {
  /**
   * @schema MacieDefaultDetection#count
   */
  readonly count?: number;

  /**
   * @schema MacieDefaultDetection#occurrences
   */
  readonly occurrences?: MacieOccurrences;

  /**
   * @schema MacieDefaultDetection#type
   */
  readonly type?: string;

}

/**
 * @schema MacieIpCity
 */
export interface MacieIpCity {
  /**
   * @schema MacieIpCity#name
   */
  readonly name?: string;

}

/**
 * @schema MacieIpCountry
 */
export interface MacieIpCountry {
  /**
   * @schema MacieIpCountry#code
   */
  readonly code?: string;

  /**
   * @schema MacieIpCountry#name
   */
  readonly name?: string;

}

/**
 * @schema MacieIpGeoLocation
 */
export interface MacieIpGeoLocation {
  /**
   * @schema MacieIpGeoLocation#lat
   */
  readonly lat?: number;

  /**
   * @schema MacieIpGeoLocation#lon
   */
  readonly lon?: number;

}

/**
 * @schema MacieIpOwner
 */
export interface MacieIpOwner {
  /**
   * @schema MacieIpOwner#asn
   */
  readonly asn?: string;

  /**
   * @schema MacieIpOwner#asnOrg
   */
  readonly asnOrg?: string;

  /**
   * @schema MacieIpOwner#isp
   */
  readonly isp?: string;

  /**
   * @schema MacieIpOwner#org
   */
  readonly org?: string;

}

/**
 * @schema MacieAssumedRole
 */
export interface MacieAssumedRole {
  /**
   * @schema MacieAssumedRole#accessKeyId
   */
  readonly accessKeyId?: string;

  /**
   * @schema MacieAssumedRole#accountId
   */
  readonly accountId?: string;

  /**
   * @schema MacieAssumedRole#arn
   */
  readonly arn?: string;

  /**
   * @schema MacieAssumedRole#principalId
   */
  readonly principalId?: string;

  /**
   * @schema MacieAssumedRole#sessionContext
   */
  readonly sessionContext?: MacieSessionContext;

}

/**
 * @schema MacieAwsAccount
 */
export interface MacieAwsAccount {
  /**
   * @schema MacieAwsAccount#accountId
   */
  readonly accountId?: string;

  /**
   * @schema MacieAwsAccount#principalId
   */
  readonly principalId?: string;

}

/**
 * @schema MacieAwsService
 */
export interface MacieAwsService {
  /**
   * @schema MacieAwsService#invokedBy
   */
  readonly invokedBy?: string;

}

/**
 * @schema MacieFederatedUser
 */
export interface MacieFederatedUser {
  /**
   * @schema MacieFederatedUser#accessKeyId
   */
  readonly accessKeyId?: string;

  /**
   * @schema MacieFederatedUser#accountId
   */
  readonly accountId?: string;

  /**
   * @schema MacieFederatedUser#arn
   */
  readonly arn?: string;

  /**
   * @schema MacieFederatedUser#principalId
   */
  readonly principalId?: string;

  /**
   * @schema MacieFederatedUser#sessionContext
   */
  readonly sessionContext?: MacieSessionContext;

}

/**
 * @schema MacieIamUser
 */
export interface MacieIamUser {
  /**
   * @schema MacieIamUser#accountId
   */
  readonly accountId?: string;

  /**
   * @schema MacieIamUser#arn
   */
  readonly arn?: string;

  /**
   * @schema MacieIamUser#principalId
   */
  readonly principalId?: string;

  /**
   * @schema MacieIamUser#userName
   */
  readonly userName?: string;

}

/**
 * @schema MacieUserIdentityRoot
 */
export interface MacieUserIdentityRoot {
  /**
   * @schema MacieUserIdentityRoot#accountId
   */
  readonly accountId?: string;

  /**
   * @schema MacieUserIdentityRoot#arn
   */
  readonly arn?: string;

  /**
   * @schema MacieUserIdentityRoot#principalId
   */
  readonly principalId?: string;

}

/**
 * @schema MacieTagValuePair
 */
export interface MacieTagValuePair {
  /**
   * @schema MacieTagValuePair#key
   */
  readonly key?: string;

  /**
   * @schema MacieTagValuePair#value
   */
  readonly value?: string;

}

/**
 * @schema MacieOccurrences
 */
export interface MacieOccurrences {
  /**
   * @schema MacieOccurrences#cells
   */
  readonly cells?: MacieCell[];

  /**
   * @schema MacieOccurrences#lineRanges
   */
  readonly lineRanges?: MacieRange[];

  /**
   * @schema MacieOccurrences#offsetRanges
   */
  readonly offsetRanges?: MacieRange[];

  /**
   * @schema MacieOccurrences#pages
   */
  readonly pages?: MaciePage[];

  /**
   * @schema MacieOccurrences#records
   */
  readonly records?: MacieRecord[];

}

/**
 * @schema MacieSessionContext
 */
export interface MacieSessionContext {
  /**
   * @schema MacieSessionContext#attributes
   */
  readonly attributes?: MacieSessionContextAttributes;

  /**
   * @schema MacieSessionContext#sessionIssuer
   */
  readonly sessionIssuer?: MacieSessionIssuer;

}

/**
 * @schema MacieCell
 */
export interface MacieCell {
  /**
   * @schema MacieCell#cellReference
   */
  readonly cellReference?: string;

  /**
   * @schema MacieCell#column
   */
  readonly column?: number;

  /**
   * @schema MacieCell#columnName
   */
  readonly columnName?: string;

  /**
   * @schema MacieCell#row
   */
  readonly row?: number;

}

/**
 * @schema MacieRange
 */
export interface MacieRange {
  /**
   * @schema MacieRange#end
   */
  readonly end?: number;

  /**
   * @schema MacieRange#start
   */
  readonly start?: number;

  /**
   * @schema MacieRange#startColumn
   */
  readonly startColumn?: number;

}

/**
 * @schema MaciePage
 */
export interface MaciePage {
  /**
   * @schema MaciePage#lineRange
   */
  readonly lineRange?: MacieRange;

  /**
   * @schema MaciePage#offsetRange
   */
  readonly offsetRange?: MacieRange;

  /**
   * @schema MaciePage#pageNumber
   */
  readonly pageNumber?: number;

}

/**
 * @schema MacieRecord
 */
export interface MacieRecord {
  /**
   * @schema MacieRecord#jsonPath
   */
  readonly jsonPath?: string;

  /**
   * @schema MacieRecord#recordIndex
   */
  readonly recordIndex?: number;

}

/**
 * @schema MacieSessionContextAttributes
 */
export interface MacieSessionContextAttributes {
  /**
   * @schema MacieSessionContextAttributes#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema MacieSessionContextAttributes#mfaAuthenticated
   */
  readonly mfaAuthenticated?: boolean;

}

/**
 * @schema MacieSessionIssuer
 */
export interface MacieSessionIssuer {
  /**
   * @schema MacieSessionIssuer#accountId
   */
  readonly accountId?: string;

  /**
   * @schema MacieSessionIssuer#arn
   */
  readonly arn?: string;

  /**
   * @schema MacieSessionIssuer#principalId
   */
  readonly principalId?: string;

  /**
   * @schema MacieSessionIssuer#type
   */
  readonly type?: string;

  /**
   * @schema MacieSessionIssuer#userName
   */
  readonly userName?: string;

}
