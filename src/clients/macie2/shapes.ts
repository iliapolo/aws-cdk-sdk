/**
 * @schema AcceptInvitationRequest
 */
export interface AcceptInvitationRequest {
  /**
   * @schema AcceptInvitationRequest#invitationId
   */
  readonly invitationId: string;

  /**
   * @schema AcceptInvitationRequest#masterAccount
   */
  readonly masterAccount: string;

}

/**
 * @schema AcceptInvitationResponse
 */
export interface AcceptInvitationResponse {
}

/**
 * @schema BatchGetCustomDataIdentifiersRequest
 */
export interface BatchGetCustomDataIdentifiersRequest {
  /**
   * @schema BatchGetCustomDataIdentifiersRequest#ids
   */
  readonly ids?: string[];

}

/**
 * @schema BatchGetCustomDataIdentifiersResponse
 */
export interface BatchGetCustomDataIdentifiersResponse {
  /**
   * @schema BatchGetCustomDataIdentifiersResponse#customDataIdentifiers
   */
  readonly customDataIdentifiers?: BatchGetCustomDataIdentifierSummary[];

  /**
   * @schema BatchGetCustomDataIdentifiersResponse#notFoundIdentifierIds
   */
  readonly notFoundIdentifierIds?: string[];

}

/**
 * @schema CreateClassificationJobRequest
 */
export interface CreateClassificationJobRequest {
  /**
   * @schema CreateClassificationJobRequest#clientToken
   */
  readonly clientToken: string;

  /**
   * @schema CreateClassificationJobRequest#customDataIdentifierIds
   */
  readonly customDataIdentifierIds?: string[];

  /**
   * @schema CreateClassificationJobRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateClassificationJobRequest#initialRun
   */
  readonly initialRun?: boolean;

  /**
   * @schema CreateClassificationJobRequest#jobType
   */
  readonly jobType: string;

  /**
   * @schema CreateClassificationJobRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateClassificationJobRequest#s3JobDefinition
   */
  readonly s3JobDefinition: S3JobDefinition;

  /**
   * @schema CreateClassificationJobRequest#samplingPercentage
   */
  readonly samplingPercentage?: number;

  /**
   * @schema CreateClassificationJobRequest#scheduleFrequency
   */
  readonly scheduleFrequency?: JobScheduleFrequency;

  /**
   * @schema CreateClassificationJobRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateClassificationJobResponse
 */
export interface CreateClassificationJobResponse {
  /**
   * @schema CreateClassificationJobResponse#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema CreateClassificationJobResponse#jobId
   */
  readonly jobId?: string;

}

/**
 * @schema CreateCustomDataIdentifierRequest
 */
export interface CreateCustomDataIdentifierRequest {
  /**
   * @schema CreateCustomDataIdentifierRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateCustomDataIdentifierRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateCustomDataIdentifierRequest#ignoreWords
   */
  readonly ignoreWords?: string[];

  /**
   * @schema CreateCustomDataIdentifierRequest#keywords
   */
  readonly keywords?: string[];

  /**
   * @schema CreateCustomDataIdentifierRequest#maximumMatchDistance
   */
  readonly maximumMatchDistance?: number;

  /**
   * @schema CreateCustomDataIdentifierRequest#name
   */
  readonly name?: string;

  /**
   * @schema CreateCustomDataIdentifierRequest#regex
   */
  readonly regex?: string;

  /**
   * @schema CreateCustomDataIdentifierRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateCustomDataIdentifierResponse
 */
export interface CreateCustomDataIdentifierResponse {
  /**
   * @schema CreateCustomDataIdentifierResponse#customDataIdentifierId
   */
  readonly customDataIdentifierId?: string;

}

/**
 * @schema CreateFindingsFilterRequest
 */
export interface CreateFindingsFilterRequest {
  /**
   * @schema CreateFindingsFilterRequest#action
   */
  readonly action: string;

  /**
   * @schema CreateFindingsFilterRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateFindingsFilterRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateFindingsFilterRequest#findingCriteria
   */
  readonly findingCriteria: FindingCriteria;

  /**
   * @schema CreateFindingsFilterRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateFindingsFilterRequest#position
   */
  readonly position?: number;

  /**
   * @schema CreateFindingsFilterRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateFindingsFilterResponse
 */
export interface CreateFindingsFilterResponse {
  /**
   * @schema CreateFindingsFilterResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema CreateFindingsFilterResponse#id
   */
  readonly id?: string;

}

/**
 * @schema CreateInvitationsRequest
 */
export interface CreateInvitationsRequest {
  /**
   * @schema CreateInvitationsRequest#accountIds
   */
  readonly accountIds: string[];

  /**
   * @schema CreateInvitationsRequest#disableEmailNotification
   */
  readonly disableEmailNotification?: boolean;

  /**
   * @schema CreateInvitationsRequest#message
   */
  readonly message?: string;

}

/**
 * @schema CreateInvitationsResponse
 */
export interface CreateInvitationsResponse {
  /**
   * @schema CreateInvitationsResponse#unprocessedAccounts
   */
  readonly unprocessedAccounts?: UnprocessedAccount[];

}

/**
 * @schema CreateMemberRequest
 */
export interface CreateMemberRequest {
  /**
   * @schema CreateMemberRequest#account
   */
  readonly account: AccountDetail;

  /**
   * @schema CreateMemberRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateMemberResponse
 */
export interface CreateMemberResponse {
  /**
   * @schema CreateMemberResponse#arn
   */
  readonly arn?: string;

}

/**
 * @schema CreateSampleFindingsRequest
 */
export interface CreateSampleFindingsRequest {
  /**
   * @schema CreateSampleFindingsRequest#findingTypes
   */
  readonly findingTypes?: string[];

}

/**
 * @schema CreateSampleFindingsResponse
 */
export interface CreateSampleFindingsResponse {
}

/**
 * @schema DeclineInvitationsRequest
 */
export interface DeclineInvitationsRequest {
  /**
   * @schema DeclineInvitationsRequest#accountIds
   */
  readonly accountIds: string[];

}

/**
 * @schema DeclineInvitationsResponse
 */
export interface DeclineInvitationsResponse {
  /**
   * @schema DeclineInvitationsResponse#unprocessedAccounts
   */
  readonly unprocessedAccounts?: UnprocessedAccount[];

}

/**
 * @schema DeleteCustomDataIdentifierRequest
 */
export interface DeleteCustomDataIdentifierRequest {
  /**
   * @schema DeleteCustomDataIdentifierRequest#id
   */
  readonly id: string;

}

/**
 * @schema DeleteCustomDataIdentifierResponse
 */
export interface DeleteCustomDataIdentifierResponse {
}

/**
 * @schema DeleteFindingsFilterRequest
 */
export interface DeleteFindingsFilterRequest {
  /**
   * @schema DeleteFindingsFilterRequest#id
   */
  readonly id: string;

}

/**
 * @schema DeleteFindingsFilterResponse
 */
export interface DeleteFindingsFilterResponse {
}

/**
 * @schema DeleteInvitationsRequest
 */
export interface DeleteInvitationsRequest {
  /**
   * @schema DeleteInvitationsRequest#accountIds
   */
  readonly accountIds: string[];

}

/**
 * @schema DeleteInvitationsResponse
 */
export interface DeleteInvitationsResponse {
  /**
   * @schema DeleteInvitationsResponse#unprocessedAccounts
   */
  readonly unprocessedAccounts?: UnprocessedAccount[];

}

/**
 * @schema DeleteMemberRequest
 */
export interface DeleteMemberRequest {
  /**
   * @schema DeleteMemberRequest#id
   */
  readonly id: string;

}

/**
 * @schema DeleteMemberResponse
 */
export interface DeleteMemberResponse {
}

/**
 * @schema DescribeBucketsRequest
 */
export interface DescribeBucketsRequest {
  /**
   * @schema DescribeBucketsRequest#criteria
   */
  readonly criteria?: { [key: string]: BucketCriteriaAdditionalProperties };

  /**
   * @schema DescribeBucketsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeBucketsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeBucketsRequest#sortCriteria
   */
  readonly sortCriteria?: BucketSortCriteria;

}

/**
 * @schema DescribeBucketsResponse
 */
export interface DescribeBucketsResponse {
  /**
   * @schema DescribeBucketsResponse#buckets
   */
  readonly buckets?: BucketMetadata[];

  /**
   * @schema DescribeBucketsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeClassificationJobRequest
 */
export interface DescribeClassificationJobRequest {
  /**
   * @schema DescribeClassificationJobRequest#jobId
   */
  readonly jobId: string;

}

/**
 * @schema DescribeClassificationJobResponse
 */
export interface DescribeClassificationJobResponse {
  /**
   * @schema DescribeClassificationJobResponse#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema DescribeClassificationJobResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema DescribeClassificationJobResponse#customDataIdentifierIds
   */
  readonly customDataIdentifierIds?: string[];

  /**
   * @schema DescribeClassificationJobResponse#description
   */
  readonly description?: string;

  /**
   * @schema DescribeClassificationJobResponse#initialRun
   */
  readonly initialRun?: boolean;

  /**
   * @schema DescribeClassificationJobResponse#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema DescribeClassificationJobResponse#jobId
   */
  readonly jobId?: string;

  /**
   * @schema DescribeClassificationJobResponse#jobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema DescribeClassificationJobResponse#jobType
   */
  readonly jobType?: string;

  /**
   * @schema DescribeClassificationJobResponse#lastRunErrorStatus
   */
  readonly lastRunErrorStatus?: LastRunErrorStatus;

  /**
   * @schema DescribeClassificationJobResponse#lastRunTime
   */
  readonly lastRunTime?: string;

  /**
   * @schema DescribeClassificationJobResponse#name
   */
  readonly name?: string;

  /**
   * @schema DescribeClassificationJobResponse#s3JobDefinition
   */
  readonly s3JobDefinition?: S3JobDefinition;

  /**
   * @schema DescribeClassificationJobResponse#samplingPercentage
   */
  readonly samplingPercentage?: number;

  /**
   * @schema DescribeClassificationJobResponse#scheduleFrequency
   */
  readonly scheduleFrequency?: JobScheduleFrequency;

  /**
   * @schema DescribeClassificationJobResponse#statistics
   */
  readonly statistics?: Statistics;

  /**
   * @schema DescribeClassificationJobResponse#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DescribeClassificationJobResponse#userPausedDetails
   */
  readonly userPausedDetails?: UserPausedDetails;

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
   * @schema DescribeOrganizationConfigurationResponse#autoEnable
   */
  readonly autoEnable?: boolean;

  /**
   * @schema DescribeOrganizationConfigurationResponse#maxAccountLimitReached
   */
  readonly maxAccountLimitReached?: boolean;

}

/**
 * @schema DisableMacieRequest
 */
export interface DisableMacieRequest {
}

/**
 * @schema DisableMacieResponse
 */
export interface DisableMacieResponse {
}

/**
 * @schema DisableOrganizationAdminAccountRequest
 */
export interface DisableOrganizationAdminAccountRequest {
  /**
   * @schema DisableOrganizationAdminAccountRequest#adminAccountId
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
}

/**
 * @schema DisassociateFromMasterAccountResponse
 */
export interface DisassociateFromMasterAccountResponse {
}

/**
 * @schema DisassociateMemberRequest
 */
export interface DisassociateMemberRequest {
  /**
   * @schema DisassociateMemberRequest#id
   */
  readonly id: string;

}

/**
 * @schema DisassociateMemberResponse
 */
export interface DisassociateMemberResponse {
}

/**
 * @schema EnableMacieRequest
 */
export interface EnableMacieRequest {
  /**
   * @schema EnableMacieRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema EnableMacieRequest#findingPublishingFrequency
   */
  readonly findingPublishingFrequency?: string;

  /**
   * @schema EnableMacieRequest#status
   */
  readonly status?: string;

}

/**
 * @schema EnableMacieResponse
 */
export interface EnableMacieResponse {
}

/**
 * @schema EnableOrganizationAdminAccountRequest
 */
export interface EnableOrganizationAdminAccountRequest {
  /**
   * @schema EnableOrganizationAdminAccountRequest#adminAccountId
   */
  readonly adminAccountId: string;

  /**
   * @schema EnableOrganizationAdminAccountRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema EnableOrganizationAdminAccountResponse
 */
export interface EnableOrganizationAdminAccountResponse {
}

/**
 * @schema GetBucketStatisticsRequest
 */
export interface GetBucketStatisticsRequest {
  /**
   * @schema GetBucketStatisticsRequest#accountId
   */
  readonly accountId?: string;

}

/**
 * @schema GetBucketStatisticsResponse
 */
export interface GetBucketStatisticsResponse {
  /**
   * @schema GetBucketStatisticsResponse#bucketCount
   */
  readonly bucketCount?: number;

  /**
   * @schema GetBucketStatisticsResponse#bucketCountByEffectivePermission
   */
  readonly bucketCountByEffectivePermission?: BucketCountByEffectivePermission;

  /**
   * @schema GetBucketStatisticsResponse#bucketCountByEncryptionType
   */
  readonly bucketCountByEncryptionType?: BucketCountByEncryptionType;

  /**
   * @schema GetBucketStatisticsResponse#bucketCountBySharedAccessType
   */
  readonly bucketCountBySharedAccessType?: BucketCountBySharedAccessType;

  /**
   * @schema GetBucketStatisticsResponse#classifiableObjectCount
   */
  readonly classifiableObjectCount?: number;

  /**
   * @schema GetBucketStatisticsResponse#classifiableSizeInBytes
   */
  readonly classifiableSizeInBytes?: number;

  /**
   * @schema GetBucketStatisticsResponse#lastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema GetBucketStatisticsResponse#objectCount
   */
  readonly objectCount?: number;

  /**
   * @schema GetBucketStatisticsResponse#sizeInBytes
   */
  readonly sizeInBytes?: number;

  /**
   * @schema GetBucketStatisticsResponse#sizeInBytesCompressed
   */
  readonly sizeInBytesCompressed?: number;

  /**
   * @schema GetBucketStatisticsResponse#unclassifiableObjectCount
   */
  readonly unclassifiableObjectCount?: ObjectLevelStatistics;

  /**
   * @schema GetBucketStatisticsResponse#unclassifiableObjectSizeInBytes
   */
  readonly unclassifiableObjectSizeInBytes?: ObjectLevelStatistics;

}

/**
 * @schema GetClassificationExportConfigurationRequest
 */
export interface GetClassificationExportConfigurationRequest {
}

/**
 * @schema GetClassificationExportConfigurationResponse
 */
export interface GetClassificationExportConfigurationResponse {
  /**
   * @schema GetClassificationExportConfigurationResponse#configuration
   */
  readonly configuration?: ClassificationExportConfiguration;

}

/**
 * @schema GetCustomDataIdentifierRequest
 */
export interface GetCustomDataIdentifierRequest {
  /**
   * @schema GetCustomDataIdentifierRequest#id
   */
  readonly id: string;

}

/**
 * @schema GetCustomDataIdentifierResponse
 */
export interface GetCustomDataIdentifierResponse {
  /**
   * @schema GetCustomDataIdentifierResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema GetCustomDataIdentifierResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema GetCustomDataIdentifierResponse#deleted
   */
  readonly deleted?: boolean;

  /**
   * @schema GetCustomDataIdentifierResponse#description
   */
  readonly description?: string;

  /**
   * @schema GetCustomDataIdentifierResponse#id
   */
  readonly id?: string;

  /**
   * @schema GetCustomDataIdentifierResponse#ignoreWords
   */
  readonly ignoreWords?: string[];

  /**
   * @schema GetCustomDataIdentifierResponse#keywords
   */
  readonly keywords?: string[];

  /**
   * @schema GetCustomDataIdentifierResponse#maximumMatchDistance
   */
  readonly maximumMatchDistance?: number;

  /**
   * @schema GetCustomDataIdentifierResponse#name
   */
  readonly name?: string;

  /**
   * @schema GetCustomDataIdentifierResponse#regex
   */
  readonly regex?: string;

  /**
   * @schema GetCustomDataIdentifierResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GetFindingStatisticsRequest
 */
export interface GetFindingStatisticsRequest {
  /**
   * @schema GetFindingStatisticsRequest#findingCriteria
   */
  readonly findingCriteria?: FindingCriteria;

  /**
   * @schema GetFindingStatisticsRequest#groupBy
   */
  readonly groupBy: string;

  /**
   * @schema GetFindingStatisticsRequest#size
   */
  readonly size?: number;

  /**
   * @schema GetFindingStatisticsRequest#sortCriteria
   */
  readonly sortCriteria?: FindingStatisticsSortCriteria;

}

/**
 * @schema GetFindingStatisticsResponse
 */
export interface GetFindingStatisticsResponse {
  /**
   * @schema GetFindingStatisticsResponse#countsByGroup
   */
  readonly countsByGroup?: GroupCount[];

}

/**
 * @schema GetFindingsRequest
 */
export interface GetFindingsRequest {
  /**
   * @schema GetFindingsRequest#findingIds
   */
  readonly findingIds: string[];

  /**
   * @schema GetFindingsRequest#sortCriteria
   */
  readonly sortCriteria?: SortCriteria;

}

/**
 * @schema GetFindingsResponse
 */
export interface GetFindingsResponse {
  /**
   * @schema GetFindingsResponse#findings
   */
  readonly findings?: Finding[];

}

/**
 * @schema GetFindingsFilterRequest
 */
export interface GetFindingsFilterRequest {
  /**
   * @schema GetFindingsFilterRequest#id
   */
  readonly id: string;

}

/**
 * @schema GetFindingsFilterResponse
 */
export interface GetFindingsFilterResponse {
  /**
   * @schema GetFindingsFilterResponse#action
   */
  readonly action?: string;

  /**
   * @schema GetFindingsFilterResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema GetFindingsFilterResponse#description
   */
  readonly description?: string;

  /**
   * @schema GetFindingsFilterResponse#findingCriteria
   */
  readonly findingCriteria?: FindingCriteria;

  /**
   * @schema GetFindingsFilterResponse#id
   */
  readonly id?: string;

  /**
   * @schema GetFindingsFilterResponse#name
   */
  readonly name?: string;

  /**
   * @schema GetFindingsFilterResponse#position
   */
  readonly position?: number;

  /**
   * @schema GetFindingsFilterResponse#tags
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
   * @schema GetInvitationsCountResponse#invitationsCount
   */
  readonly invitationsCount?: number;

}

/**
 * @schema GetMacieSessionRequest
 */
export interface GetMacieSessionRequest {
}

/**
 * @schema GetMacieSessionResponse
 */
export interface GetMacieSessionResponse {
  /**
   * @schema GetMacieSessionResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema GetMacieSessionResponse#findingPublishingFrequency
   */
  readonly findingPublishingFrequency?: string;

  /**
   * @schema GetMacieSessionResponse#serviceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema GetMacieSessionResponse#status
   */
  readonly status?: string;

  /**
   * @schema GetMacieSessionResponse#updatedAt
   */
  readonly updatedAt?: string;

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
   * @schema GetMasterAccountResponse#master
   */
  readonly master?: Invitation;

}

/**
 * @schema GetMemberRequest
 */
export interface GetMemberRequest {
  /**
   * @schema GetMemberRequest#id
   */
  readonly id: string;

}

/**
 * @schema GetMemberResponse
 */
export interface GetMemberResponse {
  /**
   * @schema GetMemberResponse#accountId
   */
  readonly accountId?: string;

  /**
   * @schema GetMemberResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema GetMemberResponse#email
   */
  readonly email?: string;

  /**
   * @schema GetMemberResponse#invitedAt
   */
  readonly invitedAt?: string;

  /**
   * @schema GetMemberResponse#masterAccountId
   */
  readonly masterAccountId?: string;

  /**
   * @schema GetMemberResponse#relationshipStatus
   */
  readonly relationshipStatus?: string;

  /**
   * @schema GetMemberResponse#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema GetMemberResponse#updatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema GetUsageStatisticsRequest
 */
export interface GetUsageStatisticsRequest {
  /**
   * @schema GetUsageStatisticsRequest#filterBy
   */
  readonly filterBy?: UsageStatisticsFilter[];

  /**
   * @schema GetUsageStatisticsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetUsageStatisticsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetUsageStatisticsRequest#sortBy
   */
  readonly sortBy?: UsageStatisticsSortBy;

}

/**
 * @schema GetUsageStatisticsResponse
 */
export interface GetUsageStatisticsResponse {
  /**
   * @schema GetUsageStatisticsResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetUsageStatisticsResponse#records
   */
  readonly records?: UsageRecord[];

}

/**
 * @schema GetUsageTotalsRequest
 */
export interface GetUsageTotalsRequest {
}

/**
 * @schema GetUsageTotalsResponse
 */
export interface GetUsageTotalsResponse {
  /**
   * @schema GetUsageTotalsResponse#usageTotals
   */
  readonly usageTotals?: UsageTotal[];

}

/**
 * @schema ListClassificationJobsRequest
 */
export interface ListClassificationJobsRequest {
  /**
   * @schema ListClassificationJobsRequest#filterCriteria
   */
  readonly filterCriteria?: ListJobsFilterCriteria;

  /**
   * @schema ListClassificationJobsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListClassificationJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListClassificationJobsRequest#sortCriteria
   */
  readonly sortCriteria?: ListJobsSortCriteria;

}

/**
 * @schema ListClassificationJobsResponse
 */
export interface ListClassificationJobsResponse {
  /**
   * @schema ListClassificationJobsResponse#items
   */
  readonly items?: JobSummary[];

  /**
   * @schema ListClassificationJobsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListCustomDataIdentifiersRequest
 */
export interface ListCustomDataIdentifiersRequest {
  /**
   * @schema ListCustomDataIdentifiersRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListCustomDataIdentifiersRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListCustomDataIdentifiersResponse
 */
export interface ListCustomDataIdentifiersResponse {
  /**
   * @schema ListCustomDataIdentifiersResponse#items
   */
  readonly items?: CustomDataIdentifierSummary[];

  /**
   * @schema ListCustomDataIdentifiersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListFindingsRequest
 */
export interface ListFindingsRequest {
  /**
   * @schema ListFindingsRequest#findingCriteria
   */
  readonly findingCriteria?: FindingCriteria;

  /**
   * @schema ListFindingsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListFindingsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListFindingsRequest#sortCriteria
   */
  readonly sortCriteria?: SortCriteria;

}

/**
 * @schema ListFindingsResponse
 */
export interface ListFindingsResponse {
  /**
   * @schema ListFindingsResponse#findingIds
   */
  readonly findingIds?: string[];

  /**
   * @schema ListFindingsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListFindingsFiltersRequest
 */
export interface ListFindingsFiltersRequest {
  /**
   * @schema ListFindingsFiltersRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListFindingsFiltersRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListFindingsFiltersResponse
 */
export interface ListFindingsFiltersResponse {
  /**
   * @schema ListFindingsFiltersResponse#findingsFilterListItems
   */
  readonly findingsFilterListItems?: FindingsFilterListItem[];

  /**
   * @schema ListFindingsFiltersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListInvitationsRequest
 */
export interface ListInvitationsRequest {
  /**
   * @schema ListInvitationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListInvitationsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListInvitationsResponse
 */
export interface ListInvitationsResponse {
  /**
   * @schema ListInvitationsResponse#invitations
   */
  readonly invitations?: Invitation[];

  /**
   * @schema ListInvitationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListMembersRequest
 */
export interface ListMembersRequest {
  /**
   * @schema ListMembersRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListMembersRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListMembersRequest#onlyAssociated
   */
  readonly onlyAssociated?: string;

}

/**
 * @schema ListMembersResponse
 */
export interface ListMembersResponse {
  /**
   * @schema ListMembersResponse#members
   */
  readonly members?: Member[];

  /**
   * @schema ListMembersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListOrganizationAdminAccountsRequest
 */
export interface ListOrganizationAdminAccountsRequest {
  /**
   * @schema ListOrganizationAdminAccountsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListOrganizationAdminAccountsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListOrganizationAdminAccountsResponse
 */
export interface ListOrganizationAdminAccountsResponse {
  /**
   * @schema ListOrganizationAdminAccountsResponse#adminAccounts
   */
  readonly adminAccounts?: AdminAccount[];

  /**
   * @schema ListOrganizationAdminAccountsResponse#nextToken
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
 * @schema PutClassificationExportConfigurationRequest
 */
export interface PutClassificationExportConfigurationRequest {
  /**
   * @schema PutClassificationExportConfigurationRequest#configuration
   */
  readonly configuration: ClassificationExportConfiguration;

}

/**
 * @schema PutClassificationExportConfigurationResponse
 */
export interface PutClassificationExportConfigurationResponse {
  /**
   * @schema PutClassificationExportConfigurationResponse#configuration
   */
  readonly configuration?: ClassificationExportConfiguration;

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
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
}

/**
 * @schema TestCustomDataIdentifierRequest
 */
export interface TestCustomDataIdentifierRequest {
  /**
   * @schema TestCustomDataIdentifierRequest#ignoreWords
   */
  readonly ignoreWords?: string[];

  /**
   * @schema TestCustomDataIdentifierRequest#keywords
   */
  readonly keywords?: string[];

  /**
   * @schema TestCustomDataIdentifierRequest#maximumMatchDistance
   */
  readonly maximumMatchDistance?: number;

  /**
   * @schema TestCustomDataIdentifierRequest#regex
   */
  readonly regex: string;

  /**
   * @schema TestCustomDataIdentifierRequest#sampleText
   */
  readonly sampleText: string;

}

/**
 * @schema TestCustomDataIdentifierResponse
 */
export interface TestCustomDataIdentifierResponse {
  /**
   * @schema TestCustomDataIdentifierResponse#matchCount
   */
  readonly matchCount?: number;

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
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateClassificationJobRequest
 */
export interface UpdateClassificationJobRequest {
  /**
   * @schema UpdateClassificationJobRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema UpdateClassificationJobRequest#jobStatus
   */
  readonly jobStatus: string;

}

/**
 * @schema UpdateClassificationJobResponse
 */
export interface UpdateClassificationJobResponse {
}

/**
 * @schema UpdateFindingsFilterRequest
 */
export interface UpdateFindingsFilterRequest {
  /**
   * @schema UpdateFindingsFilterRequest#action
   */
  readonly action?: string;

  /**
   * @schema UpdateFindingsFilterRequest#description
   */
  readonly description?: string;

  /**
   * @schema UpdateFindingsFilterRequest#findingCriteria
   */
  readonly findingCriteria?: FindingCriteria;

  /**
   * @schema UpdateFindingsFilterRequest#id
   */
  readonly id: string;

  /**
   * @schema UpdateFindingsFilterRequest#name
   */
  readonly name?: string;

  /**
   * @schema UpdateFindingsFilterRequest#position
   */
  readonly position?: number;

}

/**
 * @schema UpdateFindingsFilterResponse
 */
export interface UpdateFindingsFilterResponse {
  /**
   * @schema UpdateFindingsFilterResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema UpdateFindingsFilterResponse#id
   */
  readonly id?: string;

}

/**
 * @schema UpdateMacieSessionRequest
 */
export interface UpdateMacieSessionRequest {
  /**
   * @schema UpdateMacieSessionRequest#findingPublishingFrequency
   */
  readonly findingPublishingFrequency?: string;

  /**
   * @schema UpdateMacieSessionRequest#status
   */
  readonly status?: string;

}

/**
 * @schema UpdateMacieSessionResponse
 */
export interface UpdateMacieSessionResponse {
}

/**
 * @schema UpdateMemberSessionRequest
 */
export interface UpdateMemberSessionRequest {
  /**
   * @schema UpdateMemberSessionRequest#id
   */
  readonly id: string;

  /**
   * @schema UpdateMemberSessionRequest#status
   */
  readonly status: string;

}

/**
 * @schema UpdateMemberSessionResponse
 */
export interface UpdateMemberSessionResponse {
}

/**
 * @schema UpdateOrganizationConfigurationRequest
 */
export interface UpdateOrganizationConfigurationRequest {
  /**
   * @schema UpdateOrganizationConfigurationRequest#autoEnable
   */
  readonly autoEnable: boolean;

}

/**
 * @schema UpdateOrganizationConfigurationResponse
 */
export interface UpdateOrganizationConfigurationResponse {
}

/**
 * @schema BatchGetCustomDataIdentifierSummary
 */
export interface BatchGetCustomDataIdentifierSummary {
  /**
   * @schema BatchGetCustomDataIdentifierSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema BatchGetCustomDataIdentifierSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema BatchGetCustomDataIdentifierSummary#deleted
   */
  readonly deleted?: boolean;

  /**
   * @schema BatchGetCustomDataIdentifierSummary#description
   */
  readonly description?: string;

  /**
   * @schema BatchGetCustomDataIdentifierSummary#id
   */
  readonly id?: string;

  /**
   * @schema BatchGetCustomDataIdentifierSummary#name
   */
  readonly name?: string;

}

/**
 * @schema S3JobDefinition
 */
export interface S3JobDefinition {
  /**
   * @schema S3JobDefinition#bucketDefinitions
   */
  readonly bucketDefinitions?: S3BucketDefinitionForJob[];

  /**
   * @schema S3JobDefinition#scoping
   */
  readonly scoping?: Scoping;

}

/**
 * @schema JobScheduleFrequency
 */
export interface JobScheduleFrequency {
  /**
   * @schema JobScheduleFrequency#dailySchedule
   */
  readonly dailySchedule?: DailySchedule;

  /**
   * @schema JobScheduleFrequency#monthlySchedule
   */
  readonly monthlySchedule?: MonthlySchedule;

  /**
   * @schema JobScheduleFrequency#weeklySchedule
   */
  readonly weeklySchedule?: WeeklySchedule;

}

/**
 * @schema FindingCriteria
 */
export interface FindingCriteria {
  /**
   * @schema FindingCriteria#criterion
   */
  readonly criterion?: { [key: string]: CriterionAdditionalProperties };

}

/**
 * @schema UnprocessedAccount
 */
export interface UnprocessedAccount {
  /**
   * @schema UnprocessedAccount#accountId
   */
  readonly accountId?: string;

  /**
   * @schema UnprocessedAccount#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema UnprocessedAccount#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema AccountDetail
 */
export interface AccountDetail {
  /**
   * @schema AccountDetail#accountId
   */
  readonly accountId: string;

  /**
   * @schema AccountDetail#email
   */
  readonly email: string;

}

/**
 * @schema BucketCriteriaAdditionalProperties
 */
export interface BucketCriteriaAdditionalProperties {
  /**
   * @schema BucketCriteriaAdditionalProperties#eq
   */
  readonly eq?: string[];

  /**
   * @schema BucketCriteriaAdditionalProperties#gt
   */
  readonly gt?: number;

  /**
   * @schema BucketCriteriaAdditionalProperties#gte
   */
  readonly gte?: number;

  /**
   * @schema BucketCriteriaAdditionalProperties#lt
   */
  readonly lt?: number;

  /**
   * @schema BucketCriteriaAdditionalProperties#lte
   */
  readonly lte?: number;

  /**
   * @schema BucketCriteriaAdditionalProperties#neq
   */
  readonly neq?: string[];

  /**
   * @schema BucketCriteriaAdditionalProperties#prefix
   */
  readonly prefix?: string;

}

/**
 * @schema BucketSortCriteria
 */
export interface BucketSortCriteria {
  /**
   * @schema BucketSortCriteria#attributeName
   */
  readonly attributeName?: string;

  /**
   * @schema BucketSortCriteria#orderBy
   */
  readonly orderBy?: string;

}

/**
 * @schema BucketMetadata
 */
export interface BucketMetadata {
  /**
   * @schema BucketMetadata#accountId
   */
  readonly accountId?: string;

  /**
   * @schema BucketMetadata#bucketArn
   */
  readonly bucketArn?: string;

  /**
   * @schema BucketMetadata#bucketCreatedAt
   */
  readonly bucketCreatedAt?: string;

  /**
   * @schema BucketMetadata#bucketName
   */
  readonly bucketName?: string;

  /**
   * @schema BucketMetadata#classifiableObjectCount
   */
  readonly classifiableObjectCount?: number;

  /**
   * @schema BucketMetadata#classifiableSizeInBytes
   */
  readonly classifiableSizeInBytes?: number;

  /**
   * @schema BucketMetadata#jobDetails
   */
  readonly jobDetails?: JobDetails;

  /**
   * @schema BucketMetadata#lastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema BucketMetadata#objectCount
   */
  readonly objectCount?: number;

  /**
   * @schema BucketMetadata#objectCountByEncryptionType
   */
  readonly objectCountByEncryptionType?: ObjectCountByEncryptionType;

  /**
   * @schema BucketMetadata#publicAccess
   */
  readonly publicAccess?: BucketPublicAccess;

  /**
   * @schema BucketMetadata#region
   */
  readonly region?: string;

  /**
   * @schema BucketMetadata#replicationDetails
   */
  readonly replicationDetails?: ReplicationDetails;

  /**
   * @schema BucketMetadata#sharedAccess
   */
  readonly sharedAccess?: string;

  /**
   * @schema BucketMetadata#sizeInBytes
   */
  readonly sizeInBytes?: number;

  /**
   * @schema BucketMetadata#sizeInBytesCompressed
   */
  readonly sizeInBytesCompressed?: number;

  /**
   * @schema BucketMetadata#tags
   */
  readonly tags?: KeyValuePair[];

  /**
   * @schema BucketMetadata#unclassifiableObjectCount
   */
  readonly unclassifiableObjectCount?: ObjectLevelStatistics;

  /**
   * @schema BucketMetadata#unclassifiableObjectSizeInBytes
   */
  readonly unclassifiableObjectSizeInBytes?: ObjectLevelStatistics;

  /**
   * @schema BucketMetadata#versioning
   */
  readonly versioning?: boolean;

}

/**
 * @schema LastRunErrorStatus
 */
export interface LastRunErrorStatus {
  /**
   * @schema LastRunErrorStatus#code
   */
  readonly code?: string;

}

/**
 * @schema Statistics
 */
export interface Statistics {
  /**
   * @schema Statistics#approximateNumberOfObjectsToProcess
   */
  readonly approximateNumberOfObjectsToProcess?: number;

  /**
   * @schema Statistics#numberOfRuns
   */
  readonly numberOfRuns?: number;

}

/**
 * @schema UserPausedDetails
 */
export interface UserPausedDetails {
  /**
   * @schema UserPausedDetails#jobExpiresAt
   */
  readonly jobExpiresAt?: string;

  /**
   * @schema UserPausedDetails#jobImminentExpirationHealthEventArn
   */
  readonly jobImminentExpirationHealthEventArn?: string;

  /**
   * @schema UserPausedDetails#jobPausedAt
   */
  readonly jobPausedAt?: string;

}

/**
 * @schema BucketCountByEffectivePermission
 */
export interface BucketCountByEffectivePermission {
  /**
   * @schema BucketCountByEffectivePermission#publiclyAccessible
   */
  readonly publiclyAccessible?: number;

  /**
   * @schema BucketCountByEffectivePermission#publiclyReadable
   */
  readonly publiclyReadable?: number;

  /**
   * @schema BucketCountByEffectivePermission#publiclyWritable
   */
  readonly publiclyWritable?: number;

  /**
   * @schema BucketCountByEffectivePermission#unknown
   */
  readonly unknown?: number;

}

/**
 * @schema BucketCountByEncryptionType
 */
export interface BucketCountByEncryptionType {
  /**
   * @schema BucketCountByEncryptionType#kmsManaged
   */
  readonly kmsManaged?: number;

  /**
   * @schema BucketCountByEncryptionType#s3Managed
   */
  readonly s3Managed?: number;

  /**
   * @schema BucketCountByEncryptionType#unencrypted
   */
  readonly unencrypted?: number;

}

/**
 * @schema BucketCountBySharedAccessType
 */
export interface BucketCountBySharedAccessType {
  /**
   * @schema BucketCountBySharedAccessType#external
   */
  readonly external?: number;

  /**
   * @schema BucketCountBySharedAccessType#internal
   */
  readonly internal?: number;

  /**
   * @schema BucketCountBySharedAccessType#notShared
   */
  readonly notShared?: number;

  /**
   * @schema BucketCountBySharedAccessType#unknown
   */
  readonly unknown?: number;

}

/**
 * @schema ObjectLevelStatistics
 */
export interface ObjectLevelStatistics {
  /**
   * @schema ObjectLevelStatistics#fileType
   */
  readonly fileType?: number;

  /**
   * @schema ObjectLevelStatistics#storageClass
   */
  readonly storageClass?: number;

  /**
   * @schema ObjectLevelStatistics#total
   */
  readonly total?: number;

}

/**
 * @schema ClassificationExportConfiguration
 */
export interface ClassificationExportConfiguration {
  /**
   * @schema ClassificationExportConfiguration#s3Destination
   */
  readonly s3Destination?: S3Destination;

}

/**
 * @schema FindingStatisticsSortCriteria
 */
export interface FindingStatisticsSortCriteria {
  /**
   * @schema FindingStatisticsSortCriteria#attributeName
   */
  readonly attributeName?: string;

  /**
   * @schema FindingStatisticsSortCriteria#orderBy
   */
  readonly orderBy?: string;

}

/**
 * @schema GroupCount
 */
export interface GroupCount {
  /**
   * @schema GroupCount#count
   */
  readonly count?: number;

  /**
   * @schema GroupCount#groupKey
   */
  readonly groupKey?: string;

}

/**
 * @schema SortCriteria
 */
export interface SortCriteria {
  /**
   * @schema SortCriteria#attributeName
   */
  readonly attributeName?: string;

  /**
   * @schema SortCriteria#orderBy
   */
  readonly orderBy?: string;

}

/**
 * @schema Finding
 */
export interface Finding {
  /**
   * @schema Finding#accountId
   */
  readonly accountId?: string;

  /**
   * @schema Finding#archived
   */
  readonly archived?: boolean;

  /**
   * @schema Finding#category
   */
  readonly category?: string;

  /**
   * @schema Finding#classificationDetails
   */
  readonly classificationDetails?: ClassificationDetails;

  /**
   * @schema Finding#count
   */
  readonly count?: number;

  /**
   * @schema Finding#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema Finding#description
   */
  readonly description?: string;

  /**
   * @schema Finding#id
   */
  readonly id?: string;

  /**
   * @schema Finding#partition
   */
  readonly partition?: string;

  /**
   * @schema Finding#policyDetails
   */
  readonly policyDetails?: PolicyDetails;

  /**
   * @schema Finding#region
   */
  readonly region?: string;

  /**
   * @schema Finding#resourcesAffected
   */
  readonly resourcesAffected?: ResourcesAffected;

  /**
   * @schema Finding#sample
   */
  readonly sample?: boolean;

  /**
   * @schema Finding#schemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema Finding#severity
   */
  readonly severity?: Severity;

  /**
   * @schema Finding#title
   */
  readonly title?: string;

  /**
   * @schema Finding#type
   */
  readonly type?: string;

  /**
   * @schema Finding#updatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema Invitation
 */
export interface Invitation {
  /**
   * @schema Invitation#accountId
   */
  readonly accountId?: string;

  /**
   * @schema Invitation#invitationId
   */
  readonly invitationId?: string;

  /**
   * @schema Invitation#invitedAt
   */
  readonly invitedAt?: string;

  /**
   * @schema Invitation#relationshipStatus
   */
  readonly relationshipStatus?: string;

}

/**
 * @schema UsageStatisticsFilter
 */
export interface UsageStatisticsFilter {
  /**
   * @schema UsageStatisticsFilter#comparator
   */
  readonly comparator?: string;

  /**
   * @schema UsageStatisticsFilter#key
   */
  readonly key?: string;

  /**
   * @schema UsageStatisticsFilter#values
   */
  readonly values?: string[];

}

/**
 * @schema UsageStatisticsSortBy
 */
export interface UsageStatisticsSortBy {
  /**
   * @schema UsageStatisticsSortBy#key
   */
  readonly key?: string;

  /**
   * @schema UsageStatisticsSortBy#orderBy
   */
  readonly orderBy?: string;

}

/**
 * @schema UsageRecord
 */
export interface UsageRecord {
  /**
   * @schema UsageRecord#accountId
   */
  readonly accountId?: string;

  /**
   * @schema UsageRecord#freeTrialStartDate
   */
  readonly freeTrialStartDate?: string;

  /**
   * @schema UsageRecord#usage
   */
  readonly usage?: UsageByAccount[];

}

/**
 * @schema UsageTotal
 */
export interface UsageTotal {
  /**
   * @schema UsageTotal#currency
   */
  readonly currency?: string;

  /**
   * @schema UsageTotal#estimatedCost
   */
  readonly estimatedCost?: string;

  /**
   * @schema UsageTotal#type
   */
  readonly type?: string;

}

/**
 * @schema ListJobsFilterCriteria
 */
export interface ListJobsFilterCriteria {
  /**
   * @schema ListJobsFilterCriteria#excludes
   */
  readonly excludes?: ListJobsFilterTerm[];

  /**
   * @schema ListJobsFilterCriteria#includes
   */
  readonly includes?: ListJobsFilterTerm[];

}

/**
 * @schema ListJobsSortCriteria
 */
export interface ListJobsSortCriteria {
  /**
   * @schema ListJobsSortCriteria#attributeName
   */
  readonly attributeName?: string;

  /**
   * @schema ListJobsSortCriteria#orderBy
   */
  readonly orderBy?: string;

}

/**
 * @schema JobSummary
 */
export interface JobSummary {
  /**
   * @schema JobSummary#bucketDefinitions
   */
  readonly bucketDefinitions?: S3BucketDefinitionForJob[];

  /**
   * @schema JobSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema JobSummary#jobId
   */
  readonly jobId?: string;

  /**
   * @schema JobSummary#jobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema JobSummary#jobType
   */
  readonly jobType?: string;

  /**
   * @schema JobSummary#lastRunErrorStatus
   */
  readonly lastRunErrorStatus?: LastRunErrorStatus;

  /**
   * @schema JobSummary#name
   */
  readonly name?: string;

  /**
   * @schema JobSummary#userPausedDetails
   */
  readonly userPausedDetails?: UserPausedDetails;

}

/**
 * @schema CustomDataIdentifierSummary
 */
export interface CustomDataIdentifierSummary {
  /**
   * @schema CustomDataIdentifierSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema CustomDataIdentifierSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema CustomDataIdentifierSummary#description
   */
  readonly description?: string;

  /**
   * @schema CustomDataIdentifierSummary#id
   */
  readonly id?: string;

  /**
   * @schema CustomDataIdentifierSummary#name
   */
  readonly name?: string;

}

/**
 * @schema FindingsFilterListItem
 */
export interface FindingsFilterListItem {
  /**
   * @schema FindingsFilterListItem#action
   */
  readonly action?: string;

  /**
   * @schema FindingsFilterListItem#arn
   */
  readonly arn?: string;

  /**
   * @schema FindingsFilterListItem#id
   */
  readonly id?: string;

  /**
   * @schema FindingsFilterListItem#name
   */
  readonly name?: string;

  /**
   * @schema FindingsFilterListItem#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema Member
 */
export interface Member {
  /**
   * @schema Member#accountId
   */
  readonly accountId?: string;

  /**
   * @schema Member#arn
   */
  readonly arn?: string;

  /**
   * @schema Member#email
   */
  readonly email?: string;

  /**
   * @schema Member#invitedAt
   */
  readonly invitedAt?: string;

  /**
   * @schema Member#masterAccountId
   */
  readonly masterAccountId?: string;

  /**
   * @schema Member#relationshipStatus
   */
  readonly relationshipStatus?: string;

  /**
   * @schema Member#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema Member#updatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema AdminAccount
 */
export interface AdminAccount {
  /**
   * @schema AdminAccount#accountId
   */
  readonly accountId?: string;

  /**
   * @schema AdminAccount#status
   */
  readonly status?: string;

}

/**
 * @schema S3BucketDefinitionForJob
 */
export interface S3BucketDefinitionForJob {
  /**
   * @schema S3BucketDefinitionForJob#accountId
   */
  readonly accountId?: string;

  /**
   * @schema S3BucketDefinitionForJob#buckets
   */
  readonly buckets?: string[];

}

/**
 * @schema Scoping
 */
export interface Scoping {
  /**
   * @schema Scoping#excludes
   */
  readonly excludes?: JobScopingBlock;

  /**
   * @schema Scoping#includes
   */
  readonly includes?: JobScopingBlock;

}

/**
 * @schema DailySchedule
 */
export interface DailySchedule {
}

/**
 * @schema MonthlySchedule
 */
export interface MonthlySchedule {
  /**
   * @schema MonthlySchedule#dayOfMonth
   */
  readonly dayOfMonth?: number;

}

/**
 * @schema WeeklySchedule
 */
export interface WeeklySchedule {
  /**
   * @schema WeeklySchedule#dayOfWeek
   */
  readonly dayOfWeek?: string;

}

/**
 * @schema CriterionAdditionalProperties
 */
export interface CriterionAdditionalProperties {
  /**
   * @schema CriterionAdditionalProperties#eq
   */
  readonly eq?: string[];

  /**
   * @schema CriterionAdditionalProperties#eqExactMatch
   */
  readonly eqExactMatch?: string[];

  /**
   * @schema CriterionAdditionalProperties#gt
   */
  readonly gt?: number;

  /**
   * @schema CriterionAdditionalProperties#gte
   */
  readonly gte?: number;

  /**
   * @schema CriterionAdditionalProperties#lt
   */
  readonly lt?: number;

  /**
   * @schema CriterionAdditionalProperties#lte
   */
  readonly lte?: number;

  /**
   * @schema CriterionAdditionalProperties#neq
   */
  readonly neq?: string[];

}

/**
 * @schema JobDetails
 */
export interface JobDetails {
  /**
   * @schema JobDetails#isDefinedInJob
   */
  readonly isDefinedInJob?: string;

  /**
   * @schema JobDetails#isMonitoredByJob
   */
  readonly isMonitoredByJob?: string;

  /**
   * @schema JobDetails#lastJobId
   */
  readonly lastJobId?: string;

  /**
   * @schema JobDetails#lastJobRunTime
   */
  readonly lastJobRunTime?: string;

}

/**
 * @schema ObjectCountByEncryptionType
 */
export interface ObjectCountByEncryptionType {
  /**
   * @schema ObjectCountByEncryptionType#customerManaged
   */
  readonly customerManaged?: number;

  /**
   * @schema ObjectCountByEncryptionType#kmsManaged
   */
  readonly kmsManaged?: number;

  /**
   * @schema ObjectCountByEncryptionType#s3Managed
   */
  readonly s3Managed?: number;

  /**
   * @schema ObjectCountByEncryptionType#unencrypted
   */
  readonly unencrypted?: number;

}

/**
 * @schema BucketPublicAccess
 */
export interface BucketPublicAccess {
  /**
   * @schema BucketPublicAccess#effectivePermission
   */
  readonly effectivePermission?: string;

  /**
   * @schema BucketPublicAccess#permissionConfiguration
   */
  readonly permissionConfiguration?: BucketPermissionConfiguration;

}

/**
 * @schema ReplicationDetails
 */
export interface ReplicationDetails {
  /**
   * @schema ReplicationDetails#replicated
   */
  readonly replicated?: boolean;

  /**
   * @schema ReplicationDetails#replicatedExternally
   */
  readonly replicatedExternally?: boolean;

  /**
   * @schema ReplicationDetails#replicationAccounts
   */
  readonly replicationAccounts?: string[];

}

/**
 * @schema KeyValuePair
 */
export interface KeyValuePair {
  /**
   * @schema KeyValuePair#key
   */
  readonly key?: string;

  /**
   * @schema KeyValuePair#value
   */
  readonly value?: string;

}

/**
 * @schema S3Destination
 */
export interface S3Destination {
  /**
   * @schema S3Destination#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema S3Destination#keyPrefix
   */
  readonly keyPrefix?: string;

  /**
   * @schema S3Destination#kmsKeyArn
   */
  readonly kmsKeyArn: string;

}

/**
 * @schema ClassificationDetails
 */
export interface ClassificationDetails {
  /**
   * @schema ClassificationDetails#detailedResultsLocation
   */
  readonly detailedResultsLocation?: string;

  /**
   * @schema ClassificationDetails#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema ClassificationDetails#jobId
   */
  readonly jobId?: string;

  /**
   * @schema ClassificationDetails#result
   */
  readonly result?: ClassificationResult;

}

/**
 * @schema PolicyDetails
 */
export interface PolicyDetails {
  /**
   * @schema PolicyDetails#action
   */
  readonly action?: FindingAction;

  /**
   * @schema PolicyDetails#actor
   */
  readonly actor?: FindingActor;

}

/**
 * @schema ResourcesAffected
 */
export interface ResourcesAffected {
  /**
   * @schema ResourcesAffected#s3Bucket
   */
  readonly s3Bucket?: S3Bucket;

  /**
   * @schema ResourcesAffected#s3Object
   */
  readonly s3Object?: S3Object;

}

/**
 * @schema Severity
 */
export interface Severity {
  /**
   * @schema Severity#description
   */
  readonly description?: string;

  /**
   * @schema Severity#score
   */
  readonly score?: number;

}

/**
 * @schema UsageByAccount
 */
export interface UsageByAccount {
  /**
   * @schema UsageByAccount#currency
   */
  readonly currency?: string;

  /**
   * @schema UsageByAccount#estimatedCost
   */
  readonly estimatedCost?: string;

  /**
   * @schema UsageByAccount#serviceLimit
   */
  readonly serviceLimit?: ServiceLimit;

  /**
   * @schema UsageByAccount#type
   */
  readonly type?: string;

}

/**
 * @schema ListJobsFilterTerm
 */
export interface ListJobsFilterTerm {
  /**
   * @schema ListJobsFilterTerm#comparator
   */
  readonly comparator?: string;

  /**
   * @schema ListJobsFilterTerm#key
   */
  readonly key?: string;

  /**
   * @schema ListJobsFilterTerm#values
   */
  readonly values?: string[];

}

/**
 * @schema JobScopingBlock
 */
export interface JobScopingBlock {
  /**
   * @schema JobScopingBlock#and
   */
  readonly and?: JobScopeTerm[];

}

/**
 * @schema BucketPermissionConfiguration
 */
export interface BucketPermissionConfiguration {
  /**
   * @schema BucketPermissionConfiguration#accountLevelPermissions
   */
  readonly accountLevelPermissions?: AccountLevelPermissions;

  /**
   * @schema BucketPermissionConfiguration#bucketLevelPermissions
   */
  readonly bucketLevelPermissions?: BucketLevelPermissions;

}

/**
 * @schema ClassificationResult
 */
export interface ClassificationResult {
  /**
   * @schema ClassificationResult#additionalOccurrences
   */
  readonly additionalOccurrences?: boolean;

  /**
   * @schema ClassificationResult#customDataIdentifiers
   */
  readonly customDataIdentifiers?: CustomDataIdentifiers;

  /**
   * @schema ClassificationResult#mimeType
   */
  readonly mimeType?: string;

  /**
   * @schema ClassificationResult#sensitiveData
   */
  readonly sensitiveData?: SensitiveDataItem[];

  /**
   * @schema ClassificationResult#sizeClassified
   */
  readonly sizeClassified?: number;

  /**
   * @schema ClassificationResult#status
   */
  readonly status?: ClassificationResultStatus;

}

/**
 * @schema FindingAction
 */
export interface FindingAction {
  /**
   * @schema FindingAction#actionType
   */
  readonly actionType?: string;

  /**
   * @schema FindingAction#apiCallDetails
   */
  readonly apiCallDetails?: ApiCallDetails;

}

/**
 * @schema FindingActor
 */
export interface FindingActor {
  /**
   * @schema FindingActor#domainDetails
   */
  readonly domainDetails?: DomainDetails;

  /**
   * @schema FindingActor#ipAddressDetails
   */
  readonly ipAddressDetails?: IpAddressDetails;

  /**
   * @schema FindingActor#userIdentity
   */
  readonly userIdentity?: UserIdentity;

}

/**
 * @schema S3Bucket
 */
export interface S3Bucket {
  /**
   * @schema S3Bucket#arn
   */
  readonly arn?: string;

  /**
   * @schema S3Bucket#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema S3Bucket#defaultServerSideEncryption
   */
  readonly defaultServerSideEncryption?: ServerSideEncryption;

  /**
   * @schema S3Bucket#name
   */
  readonly name?: string;

  /**
   * @schema S3Bucket#owner
   */
  readonly owner?: S3BucketOwner;

  /**
   * @schema S3Bucket#publicAccess
   */
  readonly publicAccess?: BucketPublicAccess;

  /**
   * @schema S3Bucket#tags
   */
  readonly tags?: KeyValuePair[];

}

/**
 * @schema S3Object
 */
export interface S3Object {
  /**
   * @schema S3Object#bucketArn
   */
  readonly bucketArn?: string;

  /**
   * @schema S3Object#eTag
   */
  readonly eTag?: string;

  /**
   * @schema S3Object#extension
   */
  readonly extension?: string;

  /**
   * @schema S3Object#key
   */
  readonly key?: string;

  /**
   * @schema S3Object#lastModified
   */
  readonly lastModified?: string;

  /**
   * @schema S3Object#path
   */
  readonly path?: string;

  /**
   * @schema S3Object#publicAccess
   */
  readonly publicAccess?: boolean;

  /**
   * @schema S3Object#serverSideEncryption
   */
  readonly serverSideEncryption?: ServerSideEncryption;

  /**
   * @schema S3Object#size
   */
  readonly size?: number;

  /**
   * @schema S3Object#storageClass
   */
  readonly storageClass?: string;

  /**
   * @schema S3Object#tags
   */
  readonly tags?: KeyValuePair[];

  /**
   * @schema S3Object#versionId
   */
  readonly versionId?: string;

}

/**
 * @schema ServiceLimit
 */
export interface ServiceLimit {
  /**
   * @schema ServiceLimit#isServiceLimited
   */
  readonly isServiceLimited?: boolean;

  /**
   * @schema ServiceLimit#unit
   */
  readonly unit?: string;

  /**
   * @schema ServiceLimit#value
   */
  readonly value?: number;

}

/**
 * @schema JobScopeTerm
 */
export interface JobScopeTerm {
  /**
   * @schema JobScopeTerm#simpleScopeTerm
   */
  readonly simpleScopeTerm?: SimpleScopeTerm;

  /**
   * @schema JobScopeTerm#tagScopeTerm
   */
  readonly tagScopeTerm?: TagScopeTerm;

}

/**
 * @schema AccountLevelPermissions
 */
export interface AccountLevelPermissions {
  /**
   * @schema AccountLevelPermissions#blockPublicAccess
   */
  readonly blockPublicAccess?: BlockPublicAccess;

}

/**
 * @schema BucketLevelPermissions
 */
export interface BucketLevelPermissions {
  /**
   * @schema BucketLevelPermissions#accessControlList
   */
  readonly accessControlList?: AccessControlList;

  /**
   * @schema BucketLevelPermissions#blockPublicAccess
   */
  readonly blockPublicAccess?: BlockPublicAccess;

  /**
   * @schema BucketLevelPermissions#bucketPolicy
   */
  readonly bucketPolicy?: BucketPolicy;

}

/**
 * @schema CustomDataIdentifiers
 */
export interface CustomDataIdentifiers {
  /**
   * @schema CustomDataIdentifiers#detections
   */
  readonly detections?: CustomDetection[];

  /**
   * @schema CustomDataIdentifiers#totalCount
   */
  readonly totalCount?: number;

}

/**
 * @schema SensitiveDataItem
 */
export interface SensitiveDataItem {
  /**
   * @schema SensitiveDataItem#category
   */
  readonly category?: string;

  /**
   * @schema SensitiveDataItem#detections
   */
  readonly detections?: DefaultDetection[];

  /**
   * @schema SensitiveDataItem#totalCount
   */
  readonly totalCount?: number;

}

/**
 * @schema ClassificationResultStatus
 */
export interface ClassificationResultStatus {
  /**
   * @schema ClassificationResultStatus#code
   */
  readonly code?: string;

  /**
   * @schema ClassificationResultStatus#reason
   */
  readonly reason?: string;

}

/**
 * @schema ApiCallDetails
 */
export interface ApiCallDetails {
  /**
   * @schema ApiCallDetails#api
   */
  readonly api?: string;

  /**
   * @schema ApiCallDetails#apiServiceName
   */
  readonly apiServiceName?: string;

  /**
   * @schema ApiCallDetails#firstSeen
   */
  readonly firstSeen?: string;

  /**
   * @schema ApiCallDetails#lastSeen
   */
  readonly lastSeen?: string;

}

/**
 * @schema DomainDetails
 */
export interface DomainDetails {
  /**
   * @schema DomainDetails#domainName
   */
  readonly domainName?: string;

}

/**
 * @schema IpAddressDetails
 */
export interface IpAddressDetails {
  /**
   * @schema IpAddressDetails#ipAddressV4
   */
  readonly ipAddressV4?: string;

  /**
   * @schema IpAddressDetails#ipCity
   */
  readonly ipCity?: IpCity;

  /**
   * @schema IpAddressDetails#ipCountry
   */
  readonly ipCountry?: IpCountry;

  /**
   * @schema IpAddressDetails#ipGeoLocation
   */
  readonly ipGeoLocation?: IpGeoLocation;

  /**
   * @schema IpAddressDetails#ipOwner
   */
  readonly ipOwner?: IpOwner;

}

/**
 * @schema UserIdentity
 */
export interface UserIdentity {
  /**
   * @schema UserIdentity#assumedRole
   */
  readonly assumedRole?: AssumedRole;

  /**
   * @schema UserIdentity#awsAccount
   */
  readonly awsAccount?: AwsAccount;

  /**
   * @schema UserIdentity#awsService
   */
  readonly awsService?: AwsService;

  /**
   * @schema UserIdentity#federatedUser
   */
  readonly federatedUser?: FederatedUser;

  /**
   * @schema UserIdentity#iamUser
   */
  readonly iamUser?: IamUser;

  /**
   * @schema UserIdentity#root
   */
  readonly root?: UserIdentityRoot;

  /**
   * @schema UserIdentity#type
   */
  readonly type?: string;

}

/**
 * @schema ServerSideEncryption
 */
export interface ServerSideEncryption {
  /**
   * @schema ServerSideEncryption#encryptionType
   */
  readonly encryptionType?: string;

  /**
   * @schema ServerSideEncryption#kmsMasterKeyId
   */
  readonly kmsMasterKeyId?: string;

}

/**
 * @schema S3BucketOwner
 */
export interface S3BucketOwner {
  /**
   * @schema S3BucketOwner#displayName
   */
  readonly displayName?: string;

  /**
   * @schema S3BucketOwner#id
   */
  readonly id?: string;

}

/**
 * @schema SimpleScopeTerm
 */
export interface SimpleScopeTerm {
  /**
   * @schema SimpleScopeTerm#comparator
   */
  readonly comparator?: string;

  /**
   * @schema SimpleScopeTerm#key
   */
  readonly key?: string;

  /**
   * @schema SimpleScopeTerm#values
   */
  readonly values?: string[];

}

/**
 * @schema TagScopeTerm
 */
export interface TagScopeTerm {
  /**
   * @schema TagScopeTerm#comparator
   */
  readonly comparator?: string;

  /**
   * @schema TagScopeTerm#key
   */
  readonly key?: string;

  /**
   * @schema TagScopeTerm#tagValues
   */
  readonly tagValues?: TagValuePair[];

  /**
   * @schema TagScopeTerm#target
   */
  readonly target?: string;

}

/**
 * @schema BlockPublicAccess
 */
export interface BlockPublicAccess {
  /**
   * @schema BlockPublicAccess#blockPublicAcls
   */
  readonly blockPublicAcls?: boolean;

  /**
   * @schema BlockPublicAccess#blockPublicPolicy
   */
  readonly blockPublicPolicy?: boolean;

  /**
   * @schema BlockPublicAccess#ignorePublicAcls
   */
  readonly ignorePublicAcls?: boolean;

  /**
   * @schema BlockPublicAccess#restrictPublicBuckets
   */
  readonly restrictPublicBuckets?: boolean;

}

/**
 * @schema AccessControlList
 */
export interface AccessControlList {
  /**
   * @schema AccessControlList#allowsPublicReadAccess
   */
  readonly allowsPublicReadAccess?: boolean;

  /**
   * @schema AccessControlList#allowsPublicWriteAccess
   */
  readonly allowsPublicWriteAccess?: boolean;

}

/**
 * @schema BucketPolicy
 */
export interface BucketPolicy {
  /**
   * @schema BucketPolicy#allowsPublicReadAccess
   */
  readonly allowsPublicReadAccess?: boolean;

  /**
   * @schema BucketPolicy#allowsPublicWriteAccess
   */
  readonly allowsPublicWriteAccess?: boolean;

}

/**
 * @schema CustomDetection
 */
export interface CustomDetection {
  /**
   * @schema CustomDetection#arn
   */
  readonly arn?: string;

  /**
   * @schema CustomDetection#count
   */
  readonly count?: number;

  /**
   * @schema CustomDetection#name
   */
  readonly name?: string;

  /**
   * @schema CustomDetection#occurrences
   */
  readonly occurrences?: Occurrences;

}

/**
 * @schema DefaultDetection
 */
export interface DefaultDetection {
  /**
   * @schema DefaultDetection#count
   */
  readonly count?: number;

  /**
   * @schema DefaultDetection#occurrences
   */
  readonly occurrences?: Occurrences;

  /**
   * @schema DefaultDetection#type
   */
  readonly type?: string;

}

/**
 * @schema IpCity
 */
export interface IpCity {
  /**
   * @schema IpCity#name
   */
  readonly name?: string;

}

/**
 * @schema IpCountry
 */
export interface IpCountry {
  /**
   * @schema IpCountry#code
   */
  readonly code?: string;

  /**
   * @schema IpCountry#name
   */
  readonly name?: string;

}

/**
 * @schema IpGeoLocation
 */
export interface IpGeoLocation {
  /**
   * @schema IpGeoLocation#lat
   */
  readonly lat?: number;

  /**
   * @schema IpGeoLocation#lon
   */
  readonly lon?: number;

}

/**
 * @schema IpOwner
 */
export interface IpOwner {
  /**
   * @schema IpOwner#asn
   */
  readonly asn?: string;

  /**
   * @schema IpOwner#asnOrg
   */
  readonly asnOrg?: string;

  /**
   * @schema IpOwner#isp
   */
  readonly isp?: string;

  /**
   * @schema IpOwner#org
   */
  readonly org?: string;

}

/**
 * @schema AssumedRole
 */
export interface AssumedRole {
  /**
   * @schema AssumedRole#accessKeyId
   */
  readonly accessKeyId?: string;

  /**
   * @schema AssumedRole#accountId
   */
  readonly accountId?: string;

  /**
   * @schema AssumedRole#arn
   */
  readonly arn?: string;

  /**
   * @schema AssumedRole#principalId
   */
  readonly principalId?: string;

  /**
   * @schema AssumedRole#sessionContext
   */
  readonly sessionContext?: SessionContext;

}

/**
 * @schema AwsAccount
 */
export interface AwsAccount {
  /**
   * @schema AwsAccount#accountId
   */
  readonly accountId?: string;

  /**
   * @schema AwsAccount#principalId
   */
  readonly principalId?: string;

}

/**
 * @schema AwsService
 */
export interface AwsService {
  /**
   * @schema AwsService#invokedBy
   */
  readonly invokedBy?: string;

}

/**
 * @schema FederatedUser
 */
export interface FederatedUser {
  /**
   * @schema FederatedUser#accessKeyId
   */
  readonly accessKeyId?: string;

  /**
   * @schema FederatedUser#accountId
   */
  readonly accountId?: string;

  /**
   * @schema FederatedUser#arn
   */
  readonly arn?: string;

  /**
   * @schema FederatedUser#principalId
   */
  readonly principalId?: string;

  /**
   * @schema FederatedUser#sessionContext
   */
  readonly sessionContext?: SessionContext;

}

/**
 * @schema IamUser
 */
export interface IamUser {
  /**
   * @schema IamUser#accountId
   */
  readonly accountId?: string;

  /**
   * @schema IamUser#arn
   */
  readonly arn?: string;

  /**
   * @schema IamUser#principalId
   */
  readonly principalId?: string;

  /**
   * @schema IamUser#userName
   */
  readonly userName?: string;

}

/**
 * @schema UserIdentityRoot
 */
export interface UserIdentityRoot {
  /**
   * @schema UserIdentityRoot#accountId
   */
  readonly accountId?: string;

  /**
   * @schema UserIdentityRoot#arn
   */
  readonly arn?: string;

  /**
   * @schema UserIdentityRoot#principalId
   */
  readonly principalId?: string;

}

/**
 * @schema TagValuePair
 */
export interface TagValuePair {
  /**
   * @schema TagValuePair#key
   */
  readonly key?: string;

  /**
   * @schema TagValuePair#value
   */
  readonly value?: string;

}

/**
 * @schema Occurrences
 */
export interface Occurrences {
  /**
   * @schema Occurrences#cells
   */
  readonly cells?: Cell[];

  /**
   * @schema Occurrences#lineRanges
   */
  readonly lineRanges?: Range[];

  /**
   * @schema Occurrences#offsetRanges
   */
  readonly offsetRanges?: Range[];

  /**
   * @schema Occurrences#pages
   */
  readonly pages?: Page[];

  /**
   * @schema Occurrences#records
   */
  readonly records?: Record[];

}

/**
 * @schema SessionContext
 */
export interface SessionContext {
  /**
   * @schema SessionContext#attributes
   */
  readonly attributes?: SessionContextAttributes;

  /**
   * @schema SessionContext#sessionIssuer
   */
  readonly sessionIssuer?: SessionIssuer;

}

/**
 * @schema Cell
 */
export interface Cell {
  /**
   * @schema Cell#cellReference
   */
  readonly cellReference?: string;

  /**
   * @schema Cell#column
   */
  readonly column?: number;

  /**
   * @schema Cell#columnName
   */
  readonly columnName?: string;

  /**
   * @schema Cell#row
   */
  readonly row?: number;

}

/**
 * @schema Range
 */
export interface Range {
  /**
   * @schema Range#end
   */
  readonly end?: number;

  /**
   * @schema Range#start
   */
  readonly start?: number;

  /**
   * @schema Range#startColumn
   */
  readonly startColumn?: number;

}

/**
 * @schema Page
 */
export interface Page {
  /**
   * @schema Page#lineRange
   */
  readonly lineRange?: Range;

  /**
   * @schema Page#offsetRange
   */
  readonly offsetRange?: Range;

  /**
   * @schema Page#pageNumber
   */
  readonly pageNumber?: number;

}

/**
 * @schema Record
 */
export interface Record {
  /**
   * @schema Record#jsonPath
   */
  readonly jsonPath?: string;

  /**
   * @schema Record#recordIndex
   */
  readonly recordIndex?: number;

}

/**
 * @schema SessionContextAttributes
 */
export interface SessionContextAttributes {
  /**
   * @schema SessionContextAttributes#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema SessionContextAttributes#mfaAuthenticated
   */
  readonly mfaAuthenticated?: boolean;

}

/**
 * @schema SessionIssuer
 */
export interface SessionIssuer {
  /**
   * @schema SessionIssuer#accountId
   */
  readonly accountId?: string;

  /**
   * @schema SessionIssuer#arn
   */
  readonly arn?: string;

  /**
   * @schema SessionIssuer#principalId
   */
  readonly principalId?: string;

  /**
   * @schema SessionIssuer#type
   */
  readonly type?: string;

  /**
   * @schema SessionIssuer#userName
   */
  readonly userName?: string;

}
