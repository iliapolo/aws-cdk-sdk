/**
 * @schema Macie2AcceptInvitationRequest
 */
export interface Macie2AcceptInvitationRequest {
  /**
   * @schema Macie2AcceptInvitationRequest#invitationId
   */
  readonly invitationId: string;

  /**
   * @schema Macie2AcceptInvitationRequest#masterAccount
   */
  readonly masterAccount: string;

}

/**
 * @schema Macie2AcceptInvitationResponse
 */
export interface Macie2AcceptInvitationResponse {
}

/**
 * @schema Macie2BatchGetCustomDataIdentifiersRequest
 */
export interface Macie2BatchGetCustomDataIdentifiersRequest {
  /**
   * @schema Macie2BatchGetCustomDataIdentifiersRequest#ids
   */
  readonly ids?: string[];

}

/**
 * @schema Macie2BatchGetCustomDataIdentifiersResponse
 */
export interface Macie2BatchGetCustomDataIdentifiersResponse {
  /**
   * @schema Macie2BatchGetCustomDataIdentifiersResponse#customDataIdentifiers
   */
  readonly customDataIdentifiers?: Macie2BatchGetCustomDataIdentifierSummary[];

  /**
   * @schema Macie2BatchGetCustomDataIdentifiersResponse#notFoundIdentifierIds
   */
  readonly notFoundIdentifierIds?: string[];

}

/**
 * @schema Macie2CreateClassificationJobRequest
 */
export interface Macie2CreateClassificationJobRequest {
  /**
   * @schema Macie2CreateClassificationJobRequest#clientToken
   */
  readonly clientToken: string;

  /**
   * @schema Macie2CreateClassificationJobRequest#customDataIdentifierIds
   */
  readonly customDataIdentifierIds?: string[];

  /**
   * @schema Macie2CreateClassificationJobRequest#description
   */
  readonly description?: string;

  /**
   * @schema Macie2CreateClassificationJobRequest#initialRun
   */
  readonly initialRun?: boolean;

  /**
   * @schema Macie2CreateClassificationJobRequest#jobType
   */
  readonly jobType: string;

  /**
   * @schema Macie2CreateClassificationJobRequest#name
   */
  readonly name: string;

  /**
   * @schema Macie2CreateClassificationJobRequest#s3JobDefinition
   */
  readonly s3JobDefinition: Macie2S3JobDefinition;

  /**
   * @schema Macie2CreateClassificationJobRequest#samplingPercentage
   */
  readonly samplingPercentage?: number;

  /**
   * @schema Macie2CreateClassificationJobRequest#scheduleFrequency
   */
  readonly scheduleFrequency?: Macie2JobScheduleFrequency;

  /**
   * @schema Macie2CreateClassificationJobRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema Macie2CreateClassificationJobResponse
 */
export interface Macie2CreateClassificationJobResponse {
  /**
   * @schema Macie2CreateClassificationJobResponse#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema Macie2CreateClassificationJobResponse#jobId
   */
  readonly jobId?: string;

}

/**
 * @schema Macie2CreateCustomDataIdentifierRequest
 */
export interface Macie2CreateCustomDataIdentifierRequest {
  /**
   * @schema Macie2CreateCustomDataIdentifierRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Macie2CreateCustomDataIdentifierRequest#description
   */
  readonly description?: string;

  /**
   * @schema Macie2CreateCustomDataIdentifierRequest#ignoreWords
   */
  readonly ignoreWords?: string[];

  /**
   * @schema Macie2CreateCustomDataIdentifierRequest#keywords
   */
  readonly keywords?: string[];

  /**
   * @schema Macie2CreateCustomDataIdentifierRequest#maximumMatchDistance
   */
  readonly maximumMatchDistance?: number;

  /**
   * @schema Macie2CreateCustomDataIdentifierRequest#name
   */
  readonly name?: string;

  /**
   * @schema Macie2CreateCustomDataIdentifierRequest#regex
   */
  readonly regex?: string;

  /**
   * @schema Macie2CreateCustomDataIdentifierRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema Macie2CreateCustomDataIdentifierResponse
 */
export interface Macie2CreateCustomDataIdentifierResponse {
  /**
   * @schema Macie2CreateCustomDataIdentifierResponse#customDataIdentifierId
   */
  readonly customDataIdentifierId?: string;

}

/**
 * @schema Macie2CreateFindingsFilterRequest
 */
export interface Macie2CreateFindingsFilterRequest {
  /**
   * @schema Macie2CreateFindingsFilterRequest#action
   */
  readonly action: string;

  /**
   * @schema Macie2CreateFindingsFilterRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Macie2CreateFindingsFilterRequest#description
   */
  readonly description?: string;

  /**
   * @schema Macie2CreateFindingsFilterRequest#findingCriteria
   */
  readonly findingCriteria: Macie2FindingCriteria;

  /**
   * @schema Macie2CreateFindingsFilterRequest#name
   */
  readonly name: string;

  /**
   * @schema Macie2CreateFindingsFilterRequest#position
   */
  readonly position?: number;

  /**
   * @schema Macie2CreateFindingsFilterRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema Macie2CreateFindingsFilterResponse
 */
export interface Macie2CreateFindingsFilterResponse {
  /**
   * @schema Macie2CreateFindingsFilterResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema Macie2CreateFindingsFilterResponse#id
   */
  readonly id?: string;

}

/**
 * @schema Macie2CreateInvitationsRequest
 */
export interface Macie2CreateInvitationsRequest {
  /**
   * @schema Macie2CreateInvitationsRequest#accountIds
   */
  readonly accountIds: string[];

  /**
   * @schema Macie2CreateInvitationsRequest#disableEmailNotification
   */
  readonly disableEmailNotification?: boolean;

  /**
   * @schema Macie2CreateInvitationsRequest#message
   */
  readonly message?: string;

}

/**
 * @schema Macie2CreateInvitationsResponse
 */
export interface Macie2CreateInvitationsResponse {
  /**
   * @schema Macie2CreateInvitationsResponse#unprocessedAccounts
   */
  readonly unprocessedAccounts?: Macie2UnprocessedAccount[];

}

/**
 * @schema Macie2CreateMemberRequest
 */
export interface Macie2CreateMemberRequest {
  /**
   * @schema Macie2CreateMemberRequest#account
   */
  readonly account: Macie2AccountDetail;

  /**
   * @schema Macie2CreateMemberRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema Macie2CreateMemberResponse
 */
export interface Macie2CreateMemberResponse {
  /**
   * @schema Macie2CreateMemberResponse#arn
   */
  readonly arn?: string;

}

/**
 * @schema Macie2CreateSampleFindingsRequest
 */
export interface Macie2CreateSampleFindingsRequest {
  /**
   * @schema Macie2CreateSampleFindingsRequest#findingTypes
   */
  readonly findingTypes?: string[];

}

/**
 * @schema Macie2CreateSampleFindingsResponse
 */
export interface Macie2CreateSampleFindingsResponse {
}

/**
 * @schema Macie2DeclineInvitationsRequest
 */
export interface Macie2DeclineInvitationsRequest {
  /**
   * @schema Macie2DeclineInvitationsRequest#accountIds
   */
  readonly accountIds: string[];

}

/**
 * @schema Macie2DeclineInvitationsResponse
 */
export interface Macie2DeclineInvitationsResponse {
  /**
   * @schema Macie2DeclineInvitationsResponse#unprocessedAccounts
   */
  readonly unprocessedAccounts?: Macie2UnprocessedAccount[];

}

/**
 * @schema Macie2DeleteCustomDataIdentifierRequest
 */
export interface Macie2DeleteCustomDataIdentifierRequest {
  /**
   * @schema Macie2DeleteCustomDataIdentifierRequest#id
   */
  readonly id: string;

}

/**
 * @schema Macie2DeleteCustomDataIdentifierResponse
 */
export interface Macie2DeleteCustomDataIdentifierResponse {
}

/**
 * @schema Macie2DeleteFindingsFilterRequest
 */
export interface Macie2DeleteFindingsFilterRequest {
  /**
   * @schema Macie2DeleteFindingsFilterRequest#id
   */
  readonly id: string;

}

/**
 * @schema Macie2DeleteFindingsFilterResponse
 */
export interface Macie2DeleteFindingsFilterResponse {
}

/**
 * @schema Macie2DeleteInvitationsRequest
 */
export interface Macie2DeleteInvitationsRequest {
  /**
   * @schema Macie2DeleteInvitationsRequest#accountIds
   */
  readonly accountIds: string[];

}

/**
 * @schema Macie2DeleteInvitationsResponse
 */
export interface Macie2DeleteInvitationsResponse {
  /**
   * @schema Macie2DeleteInvitationsResponse#unprocessedAccounts
   */
  readonly unprocessedAccounts?: Macie2UnprocessedAccount[];

}

/**
 * @schema Macie2DeleteMemberRequest
 */
export interface Macie2DeleteMemberRequest {
  /**
   * @schema Macie2DeleteMemberRequest#id
   */
  readonly id: string;

}

/**
 * @schema Macie2DeleteMemberResponse
 */
export interface Macie2DeleteMemberResponse {
}

/**
 * @schema Macie2DescribeBucketsRequest
 */
export interface Macie2DescribeBucketsRequest {
  /**
   * @schema Macie2DescribeBucketsRequest#criteria
   */
  readonly criteria?: { [key: string]: Macie2BucketCriteriaAdditionalProperties };

  /**
   * @schema Macie2DescribeBucketsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Macie2DescribeBucketsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Macie2DescribeBucketsRequest#sortCriteria
   */
  readonly sortCriteria?: Macie2BucketSortCriteria;

}

/**
 * @schema Macie2DescribeBucketsResponse
 */
export interface Macie2DescribeBucketsResponse {
  /**
   * @schema Macie2DescribeBucketsResponse#buckets
   */
  readonly buckets?: Macie2BucketMetadata[];

  /**
   * @schema Macie2DescribeBucketsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Macie2DescribeClassificationJobRequest
 */
export interface Macie2DescribeClassificationJobRequest {
  /**
   * @schema Macie2DescribeClassificationJobRequest#jobId
   */
  readonly jobId: string;

}

/**
 * @schema Macie2DescribeClassificationJobResponse
 */
export interface Macie2DescribeClassificationJobResponse {
  /**
   * @schema Macie2DescribeClassificationJobResponse#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Macie2DescribeClassificationJobResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema Macie2DescribeClassificationJobResponse#customDataIdentifierIds
   */
  readonly customDataIdentifierIds?: string[];

  /**
   * @schema Macie2DescribeClassificationJobResponse#description
   */
  readonly description?: string;

  /**
   * @schema Macie2DescribeClassificationJobResponse#initialRun
   */
  readonly initialRun?: boolean;

  /**
   * @schema Macie2DescribeClassificationJobResponse#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema Macie2DescribeClassificationJobResponse#jobId
   */
  readonly jobId?: string;

  /**
   * @schema Macie2DescribeClassificationJobResponse#jobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema Macie2DescribeClassificationJobResponse#jobType
   */
  readonly jobType?: string;

  /**
   * @schema Macie2DescribeClassificationJobResponse#lastRunErrorStatus
   */
  readonly lastRunErrorStatus?: Macie2LastRunErrorStatus;

  /**
   * @schema Macie2DescribeClassificationJobResponse#lastRunTime
   */
  readonly lastRunTime?: string;

  /**
   * @schema Macie2DescribeClassificationJobResponse#name
   */
  readonly name?: string;

  /**
   * @schema Macie2DescribeClassificationJobResponse#s3JobDefinition
   */
  readonly s3JobDefinition?: Macie2S3JobDefinition;

  /**
   * @schema Macie2DescribeClassificationJobResponse#samplingPercentage
   */
  readonly samplingPercentage?: number;

  /**
   * @schema Macie2DescribeClassificationJobResponse#scheduleFrequency
   */
  readonly scheduleFrequency?: Macie2JobScheduleFrequency;

  /**
   * @schema Macie2DescribeClassificationJobResponse#statistics
   */
  readonly statistics?: Macie2Statistics;

  /**
   * @schema Macie2DescribeClassificationJobResponse#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema Macie2DescribeClassificationJobResponse#userPausedDetails
   */
  readonly userPausedDetails?: Macie2UserPausedDetails;

}

/**
 * @schema Macie2DescribeOrganizationConfigurationRequest
 */
export interface Macie2DescribeOrganizationConfigurationRequest {
}

/**
 * @schema Macie2DescribeOrganizationConfigurationResponse
 */
export interface Macie2DescribeOrganizationConfigurationResponse {
  /**
   * @schema Macie2DescribeOrganizationConfigurationResponse#autoEnable
   */
  readonly autoEnable?: boolean;

  /**
   * @schema Macie2DescribeOrganizationConfigurationResponse#maxAccountLimitReached
   */
  readonly maxAccountLimitReached?: boolean;

}

/**
 * @schema Macie2DisableMacieRequest
 */
export interface Macie2DisableMacieRequest {
}

/**
 * @schema Macie2DisableMacieResponse
 */
export interface Macie2DisableMacieResponse {
}

/**
 * @schema Macie2DisableOrganizationAdminAccountRequest
 */
export interface Macie2DisableOrganizationAdminAccountRequest {
  /**
   * @schema Macie2DisableOrganizationAdminAccountRequest#adminAccountId
   */
  readonly adminAccountId: string;

}

/**
 * @schema Macie2DisableOrganizationAdminAccountResponse
 */
export interface Macie2DisableOrganizationAdminAccountResponse {
}

/**
 * @schema Macie2DisassociateFromMasterAccountRequest
 */
export interface Macie2DisassociateFromMasterAccountRequest {
}

/**
 * @schema Macie2DisassociateFromMasterAccountResponse
 */
export interface Macie2DisassociateFromMasterAccountResponse {
}

/**
 * @schema Macie2DisassociateMemberRequest
 */
export interface Macie2DisassociateMemberRequest {
  /**
   * @schema Macie2DisassociateMemberRequest#id
   */
  readonly id: string;

}

/**
 * @schema Macie2DisassociateMemberResponse
 */
export interface Macie2DisassociateMemberResponse {
}

/**
 * @schema Macie2EnableMacieRequest
 */
export interface Macie2EnableMacieRequest {
  /**
   * @schema Macie2EnableMacieRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Macie2EnableMacieRequest#findingPublishingFrequency
   */
  readonly findingPublishingFrequency?: string;

  /**
   * @schema Macie2EnableMacieRequest#status
   */
  readonly status?: string;

}

/**
 * @schema Macie2EnableMacieResponse
 */
export interface Macie2EnableMacieResponse {
}

/**
 * @schema Macie2EnableOrganizationAdminAccountRequest
 */
export interface Macie2EnableOrganizationAdminAccountRequest {
  /**
   * @schema Macie2EnableOrganizationAdminAccountRequest#adminAccountId
   */
  readonly adminAccountId: string;

  /**
   * @schema Macie2EnableOrganizationAdminAccountRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema Macie2EnableOrganizationAdminAccountResponse
 */
export interface Macie2EnableOrganizationAdminAccountResponse {
}

/**
 * @schema Macie2GetBucketStatisticsRequest
 */
export interface Macie2GetBucketStatisticsRequest {
  /**
   * @schema Macie2GetBucketStatisticsRequest#accountId
   */
  readonly accountId?: string;

}

/**
 * @schema Macie2GetBucketStatisticsResponse
 */
export interface Macie2GetBucketStatisticsResponse {
  /**
   * @schema Macie2GetBucketStatisticsResponse#bucketCount
   */
  readonly bucketCount?: number;

  /**
   * @schema Macie2GetBucketStatisticsResponse#bucketCountByEffectivePermission
   */
  readonly bucketCountByEffectivePermission?: Macie2BucketCountByEffectivePermission;

  /**
   * @schema Macie2GetBucketStatisticsResponse#bucketCountByEncryptionType
   */
  readonly bucketCountByEncryptionType?: Macie2BucketCountByEncryptionType;

  /**
   * @schema Macie2GetBucketStatisticsResponse#bucketCountBySharedAccessType
   */
  readonly bucketCountBySharedAccessType?: Macie2BucketCountBySharedAccessType;

  /**
   * @schema Macie2GetBucketStatisticsResponse#classifiableObjectCount
   */
  readonly classifiableObjectCount?: number;

  /**
   * @schema Macie2GetBucketStatisticsResponse#classifiableSizeInBytes
   */
  readonly classifiableSizeInBytes?: number;

  /**
   * @schema Macie2GetBucketStatisticsResponse#lastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema Macie2GetBucketStatisticsResponse#objectCount
   */
  readonly objectCount?: number;

  /**
   * @schema Macie2GetBucketStatisticsResponse#sizeInBytes
   */
  readonly sizeInBytes?: number;

  /**
   * @schema Macie2GetBucketStatisticsResponse#sizeInBytesCompressed
   */
  readonly sizeInBytesCompressed?: number;

  /**
   * @schema Macie2GetBucketStatisticsResponse#unclassifiableObjectCount
   */
  readonly unclassifiableObjectCount?: Macie2ObjectLevelStatistics;

  /**
   * @schema Macie2GetBucketStatisticsResponse#unclassifiableObjectSizeInBytes
   */
  readonly unclassifiableObjectSizeInBytes?: Macie2ObjectLevelStatistics;

}

/**
 * @schema Macie2GetClassificationExportConfigurationRequest
 */
export interface Macie2GetClassificationExportConfigurationRequest {
}

/**
 * @schema Macie2GetClassificationExportConfigurationResponse
 */
export interface Macie2GetClassificationExportConfigurationResponse {
  /**
   * @schema Macie2GetClassificationExportConfigurationResponse#configuration
   */
  readonly configuration?: Macie2ClassificationExportConfiguration;

}

/**
 * @schema Macie2GetCustomDataIdentifierRequest
 */
export interface Macie2GetCustomDataIdentifierRequest {
  /**
   * @schema Macie2GetCustomDataIdentifierRequest#id
   */
  readonly id: string;

}

/**
 * @schema Macie2GetCustomDataIdentifierResponse
 */
export interface Macie2GetCustomDataIdentifierResponse {
  /**
   * @schema Macie2GetCustomDataIdentifierResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema Macie2GetCustomDataIdentifierResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema Macie2GetCustomDataIdentifierResponse#deleted
   */
  readonly deleted?: boolean;

  /**
   * @schema Macie2GetCustomDataIdentifierResponse#description
   */
  readonly description?: string;

  /**
   * @schema Macie2GetCustomDataIdentifierResponse#id
   */
  readonly id?: string;

  /**
   * @schema Macie2GetCustomDataIdentifierResponse#ignoreWords
   */
  readonly ignoreWords?: string[];

  /**
   * @schema Macie2GetCustomDataIdentifierResponse#keywords
   */
  readonly keywords?: string[];

  /**
   * @schema Macie2GetCustomDataIdentifierResponse#maximumMatchDistance
   */
  readonly maximumMatchDistance?: number;

  /**
   * @schema Macie2GetCustomDataIdentifierResponse#name
   */
  readonly name?: string;

  /**
   * @schema Macie2GetCustomDataIdentifierResponse#regex
   */
  readonly regex?: string;

  /**
   * @schema Macie2GetCustomDataIdentifierResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema Macie2GetFindingStatisticsRequest
 */
export interface Macie2GetFindingStatisticsRequest {
  /**
   * @schema Macie2GetFindingStatisticsRequest#findingCriteria
   */
  readonly findingCriteria?: Macie2FindingCriteria;

  /**
   * @schema Macie2GetFindingStatisticsRequest#groupBy
   */
  readonly groupBy: string;

  /**
   * @schema Macie2GetFindingStatisticsRequest#size
   */
  readonly size?: number;

  /**
   * @schema Macie2GetFindingStatisticsRequest#sortCriteria
   */
  readonly sortCriteria?: Macie2FindingStatisticsSortCriteria;

}

/**
 * @schema Macie2GetFindingStatisticsResponse
 */
export interface Macie2GetFindingStatisticsResponse {
  /**
   * @schema Macie2GetFindingStatisticsResponse#countsByGroup
   */
  readonly countsByGroup?: Macie2GroupCount[];

}

/**
 * @schema Macie2GetFindingsRequest
 */
export interface Macie2GetFindingsRequest {
  /**
   * @schema Macie2GetFindingsRequest#findingIds
   */
  readonly findingIds: string[];

  /**
   * @schema Macie2GetFindingsRequest#sortCriteria
   */
  readonly sortCriteria?: Macie2SortCriteria;

}

/**
 * @schema Macie2GetFindingsResponse
 */
export interface Macie2GetFindingsResponse {
  /**
   * @schema Macie2GetFindingsResponse#findings
   */
  readonly findings?: Macie2Finding[];

}

/**
 * @schema Macie2GetFindingsFilterRequest
 */
export interface Macie2GetFindingsFilterRequest {
  /**
   * @schema Macie2GetFindingsFilterRequest#id
   */
  readonly id: string;

}

/**
 * @schema Macie2GetFindingsFilterResponse
 */
export interface Macie2GetFindingsFilterResponse {
  /**
   * @schema Macie2GetFindingsFilterResponse#action
   */
  readonly action?: string;

  /**
   * @schema Macie2GetFindingsFilterResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema Macie2GetFindingsFilterResponse#description
   */
  readonly description?: string;

  /**
   * @schema Macie2GetFindingsFilterResponse#findingCriteria
   */
  readonly findingCriteria?: Macie2FindingCriteria;

  /**
   * @schema Macie2GetFindingsFilterResponse#id
   */
  readonly id?: string;

  /**
   * @schema Macie2GetFindingsFilterResponse#name
   */
  readonly name?: string;

  /**
   * @schema Macie2GetFindingsFilterResponse#position
   */
  readonly position?: number;

  /**
   * @schema Macie2GetFindingsFilterResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema Macie2GetInvitationsCountRequest
 */
export interface Macie2GetInvitationsCountRequest {
}

/**
 * @schema Macie2GetInvitationsCountResponse
 */
export interface Macie2GetInvitationsCountResponse {
  /**
   * @schema Macie2GetInvitationsCountResponse#invitationsCount
   */
  readonly invitationsCount?: number;

}

/**
 * @schema Macie2GetMacieSessionRequest
 */
export interface Macie2GetMacieSessionRequest {
}

/**
 * @schema Macie2GetMacieSessionResponse
 */
export interface Macie2GetMacieSessionResponse {
  /**
   * @schema Macie2GetMacieSessionResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema Macie2GetMacieSessionResponse#findingPublishingFrequency
   */
  readonly findingPublishingFrequency?: string;

  /**
   * @schema Macie2GetMacieSessionResponse#serviceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema Macie2GetMacieSessionResponse#status
   */
  readonly status?: string;

  /**
   * @schema Macie2GetMacieSessionResponse#updatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema Macie2GetMasterAccountRequest
 */
export interface Macie2GetMasterAccountRequest {
}

/**
 * @schema Macie2GetMasterAccountResponse
 */
export interface Macie2GetMasterAccountResponse {
  /**
   * @schema Macie2GetMasterAccountResponse#master
   */
  readonly master?: Macie2Invitation;

}

/**
 * @schema Macie2GetMemberRequest
 */
export interface Macie2GetMemberRequest {
  /**
   * @schema Macie2GetMemberRequest#id
   */
  readonly id: string;

}

/**
 * @schema Macie2GetMemberResponse
 */
export interface Macie2GetMemberResponse {
  /**
   * @schema Macie2GetMemberResponse#accountId
   */
  readonly accountId?: string;

  /**
   * @schema Macie2GetMemberResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema Macie2GetMemberResponse#email
   */
  readonly email?: string;

  /**
   * @schema Macie2GetMemberResponse#invitedAt
   */
  readonly invitedAt?: string;

  /**
   * @schema Macie2GetMemberResponse#masterAccountId
   */
  readonly masterAccountId?: string;

  /**
   * @schema Macie2GetMemberResponse#relationshipStatus
   */
  readonly relationshipStatus?: string;

  /**
   * @schema Macie2GetMemberResponse#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema Macie2GetMemberResponse#updatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema Macie2GetUsageStatisticsRequest
 */
export interface Macie2GetUsageStatisticsRequest {
  /**
   * @schema Macie2GetUsageStatisticsRequest#filterBy
   */
  readonly filterBy?: Macie2UsageStatisticsFilter[];

  /**
   * @schema Macie2GetUsageStatisticsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Macie2GetUsageStatisticsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Macie2GetUsageStatisticsRequest#sortBy
   */
  readonly sortBy?: Macie2UsageStatisticsSortBy;

}

/**
 * @schema Macie2GetUsageStatisticsResponse
 */
export interface Macie2GetUsageStatisticsResponse {
  /**
   * @schema Macie2GetUsageStatisticsResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Macie2GetUsageStatisticsResponse#records
   */
  readonly records?: Macie2UsageRecord[];

}

/**
 * @schema Macie2GetUsageTotalsRequest
 */
export interface Macie2GetUsageTotalsRequest {
}

/**
 * @schema Macie2GetUsageTotalsResponse
 */
export interface Macie2GetUsageTotalsResponse {
  /**
   * @schema Macie2GetUsageTotalsResponse#usageTotals
   */
  readonly usageTotals?: Macie2UsageTotal[];

}

/**
 * @schema Macie2ListClassificationJobsRequest
 */
export interface Macie2ListClassificationJobsRequest {
  /**
   * @schema Macie2ListClassificationJobsRequest#filterCriteria
   */
  readonly filterCriteria?: Macie2ListJobsFilterCriteria;

  /**
   * @schema Macie2ListClassificationJobsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Macie2ListClassificationJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Macie2ListClassificationJobsRequest#sortCriteria
   */
  readonly sortCriteria?: Macie2ListJobsSortCriteria;

}

/**
 * @schema Macie2ListClassificationJobsResponse
 */
export interface Macie2ListClassificationJobsResponse {
  /**
   * @schema Macie2ListClassificationJobsResponse#items
   */
  readonly items?: Macie2JobSummary[];

  /**
   * @schema Macie2ListClassificationJobsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Macie2ListCustomDataIdentifiersRequest
 */
export interface Macie2ListCustomDataIdentifiersRequest {
  /**
   * @schema Macie2ListCustomDataIdentifiersRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Macie2ListCustomDataIdentifiersRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Macie2ListCustomDataIdentifiersResponse
 */
export interface Macie2ListCustomDataIdentifiersResponse {
  /**
   * @schema Macie2ListCustomDataIdentifiersResponse#items
   */
  readonly items?: Macie2CustomDataIdentifierSummary[];

  /**
   * @schema Macie2ListCustomDataIdentifiersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Macie2ListFindingsRequest
 */
export interface Macie2ListFindingsRequest {
  /**
   * @schema Macie2ListFindingsRequest#findingCriteria
   */
  readonly findingCriteria?: Macie2FindingCriteria;

  /**
   * @schema Macie2ListFindingsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Macie2ListFindingsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Macie2ListFindingsRequest#sortCriteria
   */
  readonly sortCriteria?: Macie2SortCriteria;

}

/**
 * @schema Macie2ListFindingsResponse
 */
export interface Macie2ListFindingsResponse {
  /**
   * @schema Macie2ListFindingsResponse#findingIds
   */
  readonly findingIds?: string[];

  /**
   * @schema Macie2ListFindingsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Macie2ListFindingsFiltersRequest
 */
export interface Macie2ListFindingsFiltersRequest {
  /**
   * @schema Macie2ListFindingsFiltersRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Macie2ListFindingsFiltersRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Macie2ListFindingsFiltersResponse
 */
export interface Macie2ListFindingsFiltersResponse {
  /**
   * @schema Macie2ListFindingsFiltersResponse#findingsFilterListItems
   */
  readonly findingsFilterListItems?: Macie2FindingsFilterListItem[];

  /**
   * @schema Macie2ListFindingsFiltersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Macie2ListInvitationsRequest
 */
export interface Macie2ListInvitationsRequest {
  /**
   * @schema Macie2ListInvitationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Macie2ListInvitationsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Macie2ListInvitationsResponse
 */
export interface Macie2ListInvitationsResponse {
  /**
   * @schema Macie2ListInvitationsResponse#invitations
   */
  readonly invitations?: Macie2Invitation[];

  /**
   * @schema Macie2ListInvitationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Macie2ListMembersRequest
 */
export interface Macie2ListMembersRequest {
  /**
   * @schema Macie2ListMembersRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Macie2ListMembersRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Macie2ListMembersRequest#onlyAssociated
   */
  readonly onlyAssociated?: string;

}

/**
 * @schema Macie2ListMembersResponse
 */
export interface Macie2ListMembersResponse {
  /**
   * @schema Macie2ListMembersResponse#members
   */
  readonly members?: Macie2Member[];

  /**
   * @schema Macie2ListMembersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Macie2ListOrganizationAdminAccountsRequest
 */
export interface Macie2ListOrganizationAdminAccountsRequest {
  /**
   * @schema Macie2ListOrganizationAdminAccountsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Macie2ListOrganizationAdminAccountsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Macie2ListOrganizationAdminAccountsResponse
 */
export interface Macie2ListOrganizationAdminAccountsResponse {
  /**
   * @schema Macie2ListOrganizationAdminAccountsResponse#adminAccounts
   */
  readonly adminAccounts?: Macie2AdminAccount[];

  /**
   * @schema Macie2ListOrganizationAdminAccountsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Macie2ListTagsForResourceRequest
 */
export interface Macie2ListTagsForResourceRequest {
  /**
   * @schema Macie2ListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema Macie2ListTagsForResourceResponse
 */
export interface Macie2ListTagsForResourceResponse {
  /**
   * @schema Macie2ListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema Macie2PutClassificationExportConfigurationRequest
 */
export interface Macie2PutClassificationExportConfigurationRequest {
  /**
   * @schema Macie2PutClassificationExportConfigurationRequest#configuration
   */
  readonly configuration: Macie2ClassificationExportConfiguration;

}

/**
 * @schema Macie2PutClassificationExportConfigurationResponse
 */
export interface Macie2PutClassificationExportConfigurationResponse {
  /**
   * @schema Macie2PutClassificationExportConfigurationResponse#configuration
   */
  readonly configuration?: Macie2ClassificationExportConfiguration;

}

/**
 * @schema Macie2TagResourceRequest
 */
export interface Macie2TagResourceRequest {
  /**
   * @schema Macie2TagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema Macie2TagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema Macie2TagResourceResponse
 */
export interface Macie2TagResourceResponse {
}

/**
 * @schema Macie2TestCustomDataIdentifierRequest
 */
export interface Macie2TestCustomDataIdentifierRequest {
  /**
   * @schema Macie2TestCustomDataIdentifierRequest#ignoreWords
   */
  readonly ignoreWords?: string[];

  /**
   * @schema Macie2TestCustomDataIdentifierRequest#keywords
   */
  readonly keywords?: string[];

  /**
   * @schema Macie2TestCustomDataIdentifierRequest#maximumMatchDistance
   */
  readonly maximumMatchDistance?: number;

  /**
   * @schema Macie2TestCustomDataIdentifierRequest#regex
   */
  readonly regex: string;

  /**
   * @schema Macie2TestCustomDataIdentifierRequest#sampleText
   */
  readonly sampleText: string;

}

/**
 * @schema Macie2TestCustomDataIdentifierResponse
 */
export interface Macie2TestCustomDataIdentifierResponse {
  /**
   * @schema Macie2TestCustomDataIdentifierResponse#matchCount
   */
  readonly matchCount?: number;

}

/**
 * @schema Macie2UntagResourceRequest
 */
export interface Macie2UntagResourceRequest {
  /**
   * @schema Macie2UntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema Macie2UntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema Macie2UntagResourceResponse
 */
export interface Macie2UntagResourceResponse {
}

/**
 * @schema Macie2UpdateClassificationJobRequest
 */
export interface Macie2UpdateClassificationJobRequest {
  /**
   * @schema Macie2UpdateClassificationJobRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema Macie2UpdateClassificationJobRequest#jobStatus
   */
  readonly jobStatus: string;

}

/**
 * @schema Macie2UpdateClassificationJobResponse
 */
export interface Macie2UpdateClassificationJobResponse {
}

/**
 * @schema Macie2UpdateFindingsFilterRequest
 */
export interface Macie2UpdateFindingsFilterRequest {
  /**
   * @schema Macie2UpdateFindingsFilterRequest#action
   */
  readonly action?: string;

  /**
   * @schema Macie2UpdateFindingsFilterRequest#description
   */
  readonly description?: string;

  /**
   * @schema Macie2UpdateFindingsFilterRequest#findingCriteria
   */
  readonly findingCriteria?: Macie2FindingCriteria;

  /**
   * @schema Macie2UpdateFindingsFilterRequest#id
   */
  readonly id: string;

  /**
   * @schema Macie2UpdateFindingsFilterRequest#name
   */
  readonly name?: string;

  /**
   * @schema Macie2UpdateFindingsFilterRequest#position
   */
  readonly position?: number;

}

/**
 * @schema Macie2UpdateFindingsFilterResponse
 */
export interface Macie2UpdateFindingsFilterResponse {
  /**
   * @schema Macie2UpdateFindingsFilterResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema Macie2UpdateFindingsFilterResponse#id
   */
  readonly id?: string;

}

/**
 * @schema Macie2UpdateMacieSessionRequest
 */
export interface Macie2UpdateMacieSessionRequest {
  /**
   * @schema Macie2UpdateMacieSessionRequest#findingPublishingFrequency
   */
  readonly findingPublishingFrequency?: string;

  /**
   * @schema Macie2UpdateMacieSessionRequest#status
   */
  readonly status?: string;

}

/**
 * @schema Macie2UpdateMacieSessionResponse
 */
export interface Macie2UpdateMacieSessionResponse {
}

/**
 * @schema Macie2UpdateMemberSessionRequest
 */
export interface Macie2UpdateMemberSessionRequest {
  /**
   * @schema Macie2UpdateMemberSessionRequest#id
   */
  readonly id: string;

  /**
   * @schema Macie2UpdateMemberSessionRequest#status
   */
  readonly status: string;

}

/**
 * @schema Macie2UpdateMemberSessionResponse
 */
export interface Macie2UpdateMemberSessionResponse {
}

/**
 * @schema Macie2UpdateOrganizationConfigurationRequest
 */
export interface Macie2UpdateOrganizationConfigurationRequest {
  /**
   * @schema Macie2UpdateOrganizationConfigurationRequest#autoEnable
   */
  readonly autoEnable: boolean;

}

/**
 * @schema Macie2UpdateOrganizationConfigurationResponse
 */
export interface Macie2UpdateOrganizationConfigurationResponse {
}

/**
 * @schema Macie2BatchGetCustomDataIdentifierSummary
 */
export interface Macie2BatchGetCustomDataIdentifierSummary {
  /**
   * @schema Macie2BatchGetCustomDataIdentifierSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema Macie2BatchGetCustomDataIdentifierSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema Macie2BatchGetCustomDataIdentifierSummary#deleted
   */
  readonly deleted?: boolean;

  /**
   * @schema Macie2BatchGetCustomDataIdentifierSummary#description
   */
  readonly description?: string;

  /**
   * @schema Macie2BatchGetCustomDataIdentifierSummary#id
   */
  readonly id?: string;

  /**
   * @schema Macie2BatchGetCustomDataIdentifierSummary#name
   */
  readonly name?: string;

}

/**
 * @schema Macie2S3JobDefinition
 */
export interface Macie2S3JobDefinition {
  /**
   * @schema Macie2S3JobDefinition#bucketDefinitions
   */
  readonly bucketDefinitions?: Macie2S3BucketDefinitionForJob[];

  /**
   * @schema Macie2S3JobDefinition#scoping
   */
  readonly scoping?: Macie2Scoping;

}

/**
 * @schema Macie2JobScheduleFrequency
 */
export interface Macie2JobScheduleFrequency {
  /**
   * @schema Macie2JobScheduleFrequency#dailySchedule
   */
  readonly dailySchedule?: Macie2DailySchedule;

  /**
   * @schema Macie2JobScheduleFrequency#monthlySchedule
   */
  readonly monthlySchedule?: Macie2MonthlySchedule;

  /**
   * @schema Macie2JobScheduleFrequency#weeklySchedule
   */
  readonly weeklySchedule?: Macie2WeeklySchedule;

}

/**
 * @schema Macie2FindingCriteria
 */
export interface Macie2FindingCriteria {
  /**
   * @schema Macie2FindingCriteria#criterion
   */
  readonly criterion?: { [key: string]: Macie2CriterionAdditionalProperties };

}

/**
 * @schema Macie2UnprocessedAccount
 */
export interface Macie2UnprocessedAccount {
  /**
   * @schema Macie2UnprocessedAccount#accountId
   */
  readonly accountId?: string;

  /**
   * @schema Macie2UnprocessedAccount#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema Macie2UnprocessedAccount#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema Macie2AccountDetail
 */
export interface Macie2AccountDetail {
  /**
   * @schema Macie2AccountDetail#accountId
   */
  readonly accountId: string;

  /**
   * @schema Macie2AccountDetail#email
   */
  readonly email: string;

}

/**
 * @schema Macie2BucketCriteriaAdditionalProperties
 */
export interface Macie2BucketCriteriaAdditionalProperties {
  /**
   * @schema Macie2BucketCriteriaAdditionalProperties#eq
   */
  readonly eq?: string[];

  /**
   * @schema Macie2BucketCriteriaAdditionalProperties#gt
   */
  readonly gt?: number;

  /**
   * @schema Macie2BucketCriteriaAdditionalProperties#gte
   */
  readonly gte?: number;

  /**
   * @schema Macie2BucketCriteriaAdditionalProperties#lt
   */
  readonly lt?: number;

  /**
   * @schema Macie2BucketCriteriaAdditionalProperties#lte
   */
  readonly lte?: number;

  /**
   * @schema Macie2BucketCriteriaAdditionalProperties#neq
   */
  readonly neq?: string[];

  /**
   * @schema Macie2BucketCriteriaAdditionalProperties#prefix
   */
  readonly prefix?: string;

}

/**
 * @schema Macie2BucketSortCriteria
 */
export interface Macie2BucketSortCriteria {
  /**
   * @schema Macie2BucketSortCriteria#attributeName
   */
  readonly attributeName?: string;

  /**
   * @schema Macie2BucketSortCriteria#orderBy
   */
  readonly orderBy?: string;

}

/**
 * @schema Macie2BucketMetadata
 */
export interface Macie2BucketMetadata {
  /**
   * @schema Macie2BucketMetadata#accountId
   */
  readonly accountId?: string;

  /**
   * @schema Macie2BucketMetadata#bucketArn
   */
  readonly bucketArn?: string;

  /**
   * @schema Macie2BucketMetadata#bucketCreatedAt
   */
  readonly bucketCreatedAt?: string;

  /**
   * @schema Macie2BucketMetadata#bucketName
   */
  readonly bucketName?: string;

  /**
   * @schema Macie2BucketMetadata#classifiableObjectCount
   */
  readonly classifiableObjectCount?: number;

  /**
   * @schema Macie2BucketMetadata#classifiableSizeInBytes
   */
  readonly classifiableSizeInBytes?: number;

  /**
   * @schema Macie2BucketMetadata#jobDetails
   */
  readonly jobDetails?: Macie2JobDetails;

  /**
   * @schema Macie2BucketMetadata#lastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema Macie2BucketMetadata#objectCount
   */
  readonly objectCount?: number;

  /**
   * @schema Macie2BucketMetadata#objectCountByEncryptionType
   */
  readonly objectCountByEncryptionType?: Macie2ObjectCountByEncryptionType;

  /**
   * @schema Macie2BucketMetadata#publicAccess
   */
  readonly publicAccess?: Macie2BucketPublicAccess;

  /**
   * @schema Macie2BucketMetadata#region
   */
  readonly region?: string;

  /**
   * @schema Macie2BucketMetadata#replicationDetails
   */
  readonly replicationDetails?: Macie2ReplicationDetails;

  /**
   * @schema Macie2BucketMetadata#sharedAccess
   */
  readonly sharedAccess?: string;

  /**
   * @schema Macie2BucketMetadata#sizeInBytes
   */
  readonly sizeInBytes?: number;

  /**
   * @schema Macie2BucketMetadata#sizeInBytesCompressed
   */
  readonly sizeInBytesCompressed?: number;

  /**
   * @schema Macie2BucketMetadata#tags
   */
  readonly tags?: Macie2KeyValuePair[];

  /**
   * @schema Macie2BucketMetadata#unclassifiableObjectCount
   */
  readonly unclassifiableObjectCount?: Macie2ObjectLevelStatistics;

  /**
   * @schema Macie2BucketMetadata#unclassifiableObjectSizeInBytes
   */
  readonly unclassifiableObjectSizeInBytes?: Macie2ObjectLevelStatistics;

  /**
   * @schema Macie2BucketMetadata#versioning
   */
  readonly versioning?: boolean;

}

/**
 * @schema Macie2LastRunErrorStatus
 */
export interface Macie2LastRunErrorStatus {
  /**
   * @schema Macie2LastRunErrorStatus#code
   */
  readonly code?: string;

}

/**
 * @schema Macie2Statistics
 */
export interface Macie2Statistics {
  /**
   * @schema Macie2Statistics#approximateNumberOfObjectsToProcess
   */
  readonly approximateNumberOfObjectsToProcess?: number;

  /**
   * @schema Macie2Statistics#numberOfRuns
   */
  readonly numberOfRuns?: number;

}

/**
 * @schema Macie2UserPausedDetails
 */
export interface Macie2UserPausedDetails {
  /**
   * @schema Macie2UserPausedDetails#jobExpiresAt
   */
  readonly jobExpiresAt?: string;

  /**
   * @schema Macie2UserPausedDetails#jobImminentExpirationHealthEventArn
   */
  readonly jobImminentExpirationHealthEventArn?: string;

  /**
   * @schema Macie2UserPausedDetails#jobPausedAt
   */
  readonly jobPausedAt?: string;

}

/**
 * @schema Macie2BucketCountByEffectivePermission
 */
export interface Macie2BucketCountByEffectivePermission {
  /**
   * @schema Macie2BucketCountByEffectivePermission#publiclyAccessible
   */
  readonly publiclyAccessible?: number;

  /**
   * @schema Macie2BucketCountByEffectivePermission#publiclyReadable
   */
  readonly publiclyReadable?: number;

  /**
   * @schema Macie2BucketCountByEffectivePermission#publiclyWritable
   */
  readonly publiclyWritable?: number;

  /**
   * @schema Macie2BucketCountByEffectivePermission#unknown
   */
  readonly unknown?: number;

}

/**
 * @schema Macie2BucketCountByEncryptionType
 */
export interface Macie2BucketCountByEncryptionType {
  /**
   * @schema Macie2BucketCountByEncryptionType#kmsManaged
   */
  readonly kmsManaged?: number;

  /**
   * @schema Macie2BucketCountByEncryptionType#s3Managed
   */
  readonly s3Managed?: number;

  /**
   * @schema Macie2BucketCountByEncryptionType#unencrypted
   */
  readonly unencrypted?: number;

}

/**
 * @schema Macie2BucketCountBySharedAccessType
 */
export interface Macie2BucketCountBySharedAccessType {
  /**
   * @schema Macie2BucketCountBySharedAccessType#external
   */
  readonly external?: number;

  /**
   * @schema Macie2BucketCountBySharedAccessType#internal
   */
  readonly internal?: number;

  /**
   * @schema Macie2BucketCountBySharedAccessType#notShared
   */
  readonly notShared?: number;

  /**
   * @schema Macie2BucketCountBySharedAccessType#unknown
   */
  readonly unknown?: number;

}

/**
 * @schema Macie2ObjectLevelStatistics
 */
export interface Macie2ObjectLevelStatistics {
  /**
   * @schema Macie2ObjectLevelStatistics#fileType
   */
  readonly fileType?: number;

  /**
   * @schema Macie2ObjectLevelStatistics#storageClass
   */
  readonly storageClass?: number;

  /**
   * @schema Macie2ObjectLevelStatistics#total
   */
  readonly total?: number;

}

/**
 * @schema Macie2ClassificationExportConfiguration
 */
export interface Macie2ClassificationExportConfiguration {
  /**
   * @schema Macie2ClassificationExportConfiguration#s3Destination
   */
  readonly s3Destination?: Macie2S3Destination;

}

/**
 * @schema Macie2FindingStatisticsSortCriteria
 */
export interface Macie2FindingStatisticsSortCriteria {
  /**
   * @schema Macie2FindingStatisticsSortCriteria#attributeName
   */
  readonly attributeName?: string;

  /**
   * @schema Macie2FindingStatisticsSortCriteria#orderBy
   */
  readonly orderBy?: string;

}

/**
 * @schema Macie2GroupCount
 */
export interface Macie2GroupCount {
  /**
   * @schema Macie2GroupCount#count
   */
  readonly count?: number;

  /**
   * @schema Macie2GroupCount#groupKey
   */
  readonly groupKey?: string;

}

/**
 * @schema Macie2SortCriteria
 */
export interface Macie2SortCriteria {
  /**
   * @schema Macie2SortCriteria#attributeName
   */
  readonly attributeName?: string;

  /**
   * @schema Macie2SortCriteria#orderBy
   */
  readonly orderBy?: string;

}

/**
 * @schema Macie2Finding
 */
export interface Macie2Finding {
  /**
   * @schema Macie2Finding#accountId
   */
  readonly accountId?: string;

  /**
   * @schema Macie2Finding#archived
   */
  readonly archived?: boolean;

  /**
   * @schema Macie2Finding#category
   */
  readonly category?: string;

  /**
   * @schema Macie2Finding#classificationDetails
   */
  readonly classificationDetails?: Macie2ClassificationDetails;

  /**
   * @schema Macie2Finding#count
   */
  readonly count?: number;

  /**
   * @schema Macie2Finding#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema Macie2Finding#description
   */
  readonly description?: string;

  /**
   * @schema Macie2Finding#id
   */
  readonly id?: string;

  /**
   * @schema Macie2Finding#partition
   */
  readonly partition?: string;

  /**
   * @schema Macie2Finding#policyDetails
   */
  readonly policyDetails?: Macie2PolicyDetails;

  /**
   * @schema Macie2Finding#region
   */
  readonly region?: string;

  /**
   * @schema Macie2Finding#resourcesAffected
   */
  readonly resourcesAffected?: Macie2ResourcesAffected;

  /**
   * @schema Macie2Finding#sample
   */
  readonly sample?: boolean;

  /**
   * @schema Macie2Finding#schemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema Macie2Finding#severity
   */
  readonly severity?: Macie2Severity;

  /**
   * @schema Macie2Finding#title
   */
  readonly title?: string;

  /**
   * @schema Macie2Finding#type
   */
  readonly type?: string;

  /**
   * @schema Macie2Finding#updatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema Macie2Invitation
 */
export interface Macie2Invitation {
  /**
   * @schema Macie2Invitation#accountId
   */
  readonly accountId?: string;

  /**
   * @schema Macie2Invitation#invitationId
   */
  readonly invitationId?: string;

  /**
   * @schema Macie2Invitation#invitedAt
   */
  readonly invitedAt?: string;

  /**
   * @schema Macie2Invitation#relationshipStatus
   */
  readonly relationshipStatus?: string;

}

/**
 * @schema Macie2UsageStatisticsFilter
 */
export interface Macie2UsageStatisticsFilter {
  /**
   * @schema Macie2UsageStatisticsFilter#comparator
   */
  readonly comparator?: string;

  /**
   * @schema Macie2UsageStatisticsFilter#key
   */
  readonly key?: string;

  /**
   * @schema Macie2UsageStatisticsFilter#values
   */
  readonly values?: string[];

}

/**
 * @schema Macie2UsageStatisticsSortBy
 */
export interface Macie2UsageStatisticsSortBy {
  /**
   * @schema Macie2UsageStatisticsSortBy#key
   */
  readonly key?: string;

  /**
   * @schema Macie2UsageStatisticsSortBy#orderBy
   */
  readonly orderBy?: string;

}

/**
 * @schema Macie2UsageRecord
 */
export interface Macie2UsageRecord {
  /**
   * @schema Macie2UsageRecord#accountId
   */
  readonly accountId?: string;

  /**
   * @schema Macie2UsageRecord#freeTrialStartDate
   */
  readonly freeTrialStartDate?: string;

  /**
   * @schema Macie2UsageRecord#usage
   */
  readonly usage?: Macie2UsageByAccount[];

}

/**
 * @schema Macie2UsageTotal
 */
export interface Macie2UsageTotal {
  /**
   * @schema Macie2UsageTotal#currency
   */
  readonly currency?: string;

  /**
   * @schema Macie2UsageTotal#estimatedCost
   */
  readonly estimatedCost?: string;

  /**
   * @schema Macie2UsageTotal#type
   */
  readonly type?: string;

}

/**
 * @schema Macie2ListJobsFilterCriteria
 */
export interface Macie2ListJobsFilterCriteria {
  /**
   * @schema Macie2ListJobsFilterCriteria#excludes
   */
  readonly excludes?: Macie2ListJobsFilterTerm[];

  /**
   * @schema Macie2ListJobsFilterCriteria#includes
   */
  readonly includes?: Macie2ListJobsFilterTerm[];

}

/**
 * @schema Macie2ListJobsSortCriteria
 */
export interface Macie2ListJobsSortCriteria {
  /**
   * @schema Macie2ListJobsSortCriteria#attributeName
   */
  readonly attributeName?: string;

  /**
   * @schema Macie2ListJobsSortCriteria#orderBy
   */
  readonly orderBy?: string;

}

/**
 * @schema Macie2JobSummary
 */
export interface Macie2JobSummary {
  /**
   * @schema Macie2JobSummary#bucketDefinitions
   */
  readonly bucketDefinitions?: Macie2S3BucketDefinitionForJob[];

  /**
   * @schema Macie2JobSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema Macie2JobSummary#jobId
   */
  readonly jobId?: string;

  /**
   * @schema Macie2JobSummary#jobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema Macie2JobSummary#jobType
   */
  readonly jobType?: string;

  /**
   * @schema Macie2JobSummary#lastRunErrorStatus
   */
  readonly lastRunErrorStatus?: Macie2LastRunErrorStatus;

  /**
   * @schema Macie2JobSummary#name
   */
  readonly name?: string;

  /**
   * @schema Macie2JobSummary#userPausedDetails
   */
  readonly userPausedDetails?: Macie2UserPausedDetails;

}

/**
 * @schema Macie2CustomDataIdentifierSummary
 */
export interface Macie2CustomDataIdentifierSummary {
  /**
   * @schema Macie2CustomDataIdentifierSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema Macie2CustomDataIdentifierSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema Macie2CustomDataIdentifierSummary#description
   */
  readonly description?: string;

  /**
   * @schema Macie2CustomDataIdentifierSummary#id
   */
  readonly id?: string;

  /**
   * @schema Macie2CustomDataIdentifierSummary#name
   */
  readonly name?: string;

}

/**
 * @schema Macie2FindingsFilterListItem
 */
export interface Macie2FindingsFilterListItem {
  /**
   * @schema Macie2FindingsFilterListItem#action
   */
  readonly action?: string;

  /**
   * @schema Macie2FindingsFilterListItem#arn
   */
  readonly arn?: string;

  /**
   * @schema Macie2FindingsFilterListItem#id
   */
  readonly id?: string;

  /**
   * @schema Macie2FindingsFilterListItem#name
   */
  readonly name?: string;

  /**
   * @schema Macie2FindingsFilterListItem#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema Macie2Member
 */
export interface Macie2Member {
  /**
   * @schema Macie2Member#accountId
   */
  readonly accountId?: string;

  /**
   * @schema Macie2Member#arn
   */
  readonly arn?: string;

  /**
   * @schema Macie2Member#email
   */
  readonly email?: string;

  /**
   * @schema Macie2Member#invitedAt
   */
  readonly invitedAt?: string;

  /**
   * @schema Macie2Member#masterAccountId
   */
  readonly masterAccountId?: string;

  /**
   * @schema Macie2Member#relationshipStatus
   */
  readonly relationshipStatus?: string;

  /**
   * @schema Macie2Member#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema Macie2Member#updatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema Macie2AdminAccount
 */
export interface Macie2AdminAccount {
  /**
   * @schema Macie2AdminAccount#accountId
   */
  readonly accountId?: string;

  /**
   * @schema Macie2AdminAccount#status
   */
  readonly status?: string;

}

/**
 * @schema Macie2S3BucketDefinitionForJob
 */
export interface Macie2S3BucketDefinitionForJob {
  /**
   * @schema Macie2S3BucketDefinitionForJob#accountId
   */
  readonly accountId?: string;

  /**
   * @schema Macie2S3BucketDefinitionForJob#buckets
   */
  readonly buckets?: string[];

}

/**
 * @schema Macie2Scoping
 */
export interface Macie2Scoping {
  /**
   * @schema Macie2Scoping#excludes
   */
  readonly excludes?: Macie2JobScopingBlock;

  /**
   * @schema Macie2Scoping#includes
   */
  readonly includes?: Macie2JobScopingBlock;

}

/**
 * @schema Macie2DailySchedule
 */
export interface Macie2DailySchedule {
}

/**
 * @schema Macie2MonthlySchedule
 */
export interface Macie2MonthlySchedule {
  /**
   * @schema Macie2MonthlySchedule#dayOfMonth
   */
  readonly dayOfMonth?: number;

}

/**
 * @schema Macie2WeeklySchedule
 */
export interface Macie2WeeklySchedule {
  /**
   * @schema Macie2WeeklySchedule#dayOfWeek
   */
  readonly dayOfWeek?: string;

}

/**
 * @schema Macie2CriterionAdditionalProperties
 */
export interface Macie2CriterionAdditionalProperties {
  /**
   * @schema Macie2CriterionAdditionalProperties#eq
   */
  readonly eq?: string[];

  /**
   * @schema Macie2CriterionAdditionalProperties#eqExactMatch
   */
  readonly eqExactMatch?: string[];

  /**
   * @schema Macie2CriterionAdditionalProperties#gt
   */
  readonly gt?: number;

  /**
   * @schema Macie2CriterionAdditionalProperties#gte
   */
  readonly gte?: number;

  /**
   * @schema Macie2CriterionAdditionalProperties#lt
   */
  readonly lt?: number;

  /**
   * @schema Macie2CriterionAdditionalProperties#lte
   */
  readonly lte?: number;

  /**
   * @schema Macie2CriterionAdditionalProperties#neq
   */
  readonly neq?: string[];

}

/**
 * @schema Macie2JobDetails
 */
export interface Macie2JobDetails {
  /**
   * @schema Macie2JobDetails#isDefinedInJob
   */
  readonly isDefinedInJob?: string;

  /**
   * @schema Macie2JobDetails#isMonitoredByJob
   */
  readonly isMonitoredByJob?: string;

  /**
   * @schema Macie2JobDetails#lastJobId
   */
  readonly lastJobId?: string;

  /**
   * @schema Macie2JobDetails#lastJobRunTime
   */
  readonly lastJobRunTime?: string;

}

/**
 * @schema Macie2ObjectCountByEncryptionType
 */
export interface Macie2ObjectCountByEncryptionType {
  /**
   * @schema Macie2ObjectCountByEncryptionType#customerManaged
   */
  readonly customerManaged?: number;

  /**
   * @schema Macie2ObjectCountByEncryptionType#kmsManaged
   */
  readonly kmsManaged?: number;

  /**
   * @schema Macie2ObjectCountByEncryptionType#s3Managed
   */
  readonly s3Managed?: number;

  /**
   * @schema Macie2ObjectCountByEncryptionType#unencrypted
   */
  readonly unencrypted?: number;

}

/**
 * @schema Macie2BucketPublicAccess
 */
export interface Macie2BucketPublicAccess {
  /**
   * @schema Macie2BucketPublicAccess#effectivePermission
   */
  readonly effectivePermission?: string;

  /**
   * @schema Macie2BucketPublicAccess#permissionConfiguration
   */
  readonly permissionConfiguration?: Macie2BucketPermissionConfiguration;

}

/**
 * @schema Macie2ReplicationDetails
 */
export interface Macie2ReplicationDetails {
  /**
   * @schema Macie2ReplicationDetails#replicated
   */
  readonly replicated?: boolean;

  /**
   * @schema Macie2ReplicationDetails#replicatedExternally
   */
  readonly replicatedExternally?: boolean;

  /**
   * @schema Macie2ReplicationDetails#replicationAccounts
   */
  readonly replicationAccounts?: string[];

}

/**
 * @schema Macie2KeyValuePair
 */
export interface Macie2KeyValuePair {
  /**
   * @schema Macie2KeyValuePair#key
   */
  readonly key?: string;

  /**
   * @schema Macie2KeyValuePair#value
   */
  readonly value?: string;

}

/**
 * @schema Macie2S3Destination
 */
export interface Macie2S3Destination {
  /**
   * @schema Macie2S3Destination#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema Macie2S3Destination#keyPrefix
   */
  readonly keyPrefix?: string;

  /**
   * @schema Macie2S3Destination#kmsKeyArn
   */
  readonly kmsKeyArn: string;

}

/**
 * @schema Macie2ClassificationDetails
 */
export interface Macie2ClassificationDetails {
  /**
   * @schema Macie2ClassificationDetails#detailedResultsLocation
   */
  readonly detailedResultsLocation?: string;

  /**
   * @schema Macie2ClassificationDetails#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema Macie2ClassificationDetails#jobId
   */
  readonly jobId?: string;

  /**
   * @schema Macie2ClassificationDetails#result
   */
  readonly result?: Macie2ClassificationResult;

}

/**
 * @schema Macie2PolicyDetails
 */
export interface Macie2PolicyDetails {
  /**
   * @schema Macie2PolicyDetails#action
   */
  readonly action?: Macie2FindingAction;

  /**
   * @schema Macie2PolicyDetails#actor
   */
  readonly actor?: Macie2FindingActor;

}

/**
 * @schema Macie2ResourcesAffected
 */
export interface Macie2ResourcesAffected {
  /**
   * @schema Macie2ResourcesAffected#s3Bucket
   */
  readonly s3Bucket?: Macie2S3Bucket;

  /**
   * @schema Macie2ResourcesAffected#s3Object
   */
  readonly s3Object?: Macie2S3Object;

}

/**
 * @schema Macie2Severity
 */
export interface Macie2Severity {
  /**
   * @schema Macie2Severity#description
   */
  readonly description?: string;

  /**
   * @schema Macie2Severity#score
   */
  readonly score?: number;

}

/**
 * @schema Macie2UsageByAccount
 */
export interface Macie2UsageByAccount {
  /**
   * @schema Macie2UsageByAccount#currency
   */
  readonly currency?: string;

  /**
   * @schema Macie2UsageByAccount#estimatedCost
   */
  readonly estimatedCost?: string;

  /**
   * @schema Macie2UsageByAccount#serviceLimit
   */
  readonly serviceLimit?: Macie2ServiceLimit;

  /**
   * @schema Macie2UsageByAccount#type
   */
  readonly type?: string;

}

/**
 * @schema Macie2ListJobsFilterTerm
 */
export interface Macie2ListJobsFilterTerm {
  /**
   * @schema Macie2ListJobsFilterTerm#comparator
   */
  readonly comparator?: string;

  /**
   * @schema Macie2ListJobsFilterTerm#key
   */
  readonly key?: string;

  /**
   * @schema Macie2ListJobsFilterTerm#values
   */
  readonly values?: string[];

}

/**
 * @schema Macie2JobScopingBlock
 */
export interface Macie2JobScopingBlock {
  /**
   * @schema Macie2JobScopingBlock#and
   */
  readonly and?: Macie2JobScopeTerm[];

}

/**
 * @schema Macie2BucketPermissionConfiguration
 */
export interface Macie2BucketPermissionConfiguration {
  /**
   * @schema Macie2BucketPermissionConfiguration#accountLevelPermissions
   */
  readonly accountLevelPermissions?: Macie2AccountLevelPermissions;

  /**
   * @schema Macie2BucketPermissionConfiguration#bucketLevelPermissions
   */
  readonly bucketLevelPermissions?: Macie2BucketLevelPermissions;

}

/**
 * @schema Macie2ClassificationResult
 */
export interface Macie2ClassificationResult {
  /**
   * @schema Macie2ClassificationResult#additionalOccurrences
   */
  readonly additionalOccurrences?: boolean;

  /**
   * @schema Macie2ClassificationResult#customDataIdentifiers
   */
  readonly customDataIdentifiers?: Macie2CustomDataIdentifiers;

  /**
   * @schema Macie2ClassificationResult#mimeType
   */
  readonly mimeType?: string;

  /**
   * @schema Macie2ClassificationResult#sensitiveData
   */
  readonly sensitiveData?: Macie2SensitiveDataItem[];

  /**
   * @schema Macie2ClassificationResult#sizeClassified
   */
  readonly sizeClassified?: number;

  /**
   * @schema Macie2ClassificationResult#status
   */
  readonly status?: Macie2ClassificationResultStatus;

}

/**
 * @schema Macie2FindingAction
 */
export interface Macie2FindingAction {
  /**
   * @schema Macie2FindingAction#actionType
   */
  readonly actionType?: string;

  /**
   * @schema Macie2FindingAction#apiCallDetails
   */
  readonly apiCallDetails?: Macie2ApiCallDetails;

}

/**
 * @schema Macie2FindingActor
 */
export interface Macie2FindingActor {
  /**
   * @schema Macie2FindingActor#domainDetails
   */
  readonly domainDetails?: Macie2DomainDetails;

  /**
   * @schema Macie2FindingActor#ipAddressDetails
   */
  readonly ipAddressDetails?: Macie2IpAddressDetails;

  /**
   * @schema Macie2FindingActor#userIdentity
   */
  readonly userIdentity?: Macie2UserIdentity;

}

/**
 * @schema Macie2S3Bucket
 */
export interface Macie2S3Bucket {
  /**
   * @schema Macie2S3Bucket#arn
   */
  readonly arn?: string;

  /**
   * @schema Macie2S3Bucket#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema Macie2S3Bucket#defaultServerSideEncryption
   */
  readonly defaultServerSideEncryption?: Macie2ServerSideEncryption;

  /**
   * @schema Macie2S3Bucket#name
   */
  readonly name?: string;

  /**
   * @schema Macie2S3Bucket#owner
   */
  readonly owner?: Macie2S3BucketOwner;

  /**
   * @schema Macie2S3Bucket#publicAccess
   */
  readonly publicAccess?: Macie2BucketPublicAccess;

  /**
   * @schema Macie2S3Bucket#tags
   */
  readonly tags?: Macie2KeyValuePair[];

}

/**
 * @schema Macie2S3Object
 */
export interface Macie2S3Object {
  /**
   * @schema Macie2S3Object#bucketArn
   */
  readonly bucketArn?: string;

  /**
   * @schema Macie2S3Object#eTag
   */
  readonly eTag?: string;

  /**
   * @schema Macie2S3Object#extension
   */
  readonly extension?: string;

  /**
   * @schema Macie2S3Object#key
   */
  readonly key?: string;

  /**
   * @schema Macie2S3Object#lastModified
   */
  readonly lastModified?: string;

  /**
   * @schema Macie2S3Object#path
   */
  readonly path?: string;

  /**
   * @schema Macie2S3Object#publicAccess
   */
  readonly publicAccess?: boolean;

  /**
   * @schema Macie2S3Object#serverSideEncryption
   */
  readonly serverSideEncryption?: Macie2ServerSideEncryption;

  /**
   * @schema Macie2S3Object#size
   */
  readonly size?: number;

  /**
   * @schema Macie2S3Object#storageClass
   */
  readonly storageClass?: string;

  /**
   * @schema Macie2S3Object#tags
   */
  readonly tags?: Macie2KeyValuePair[];

  /**
   * @schema Macie2S3Object#versionId
   */
  readonly versionId?: string;

}

/**
 * @schema Macie2ServiceLimit
 */
export interface Macie2ServiceLimit {
  /**
   * @schema Macie2ServiceLimit#isServiceLimited
   */
  readonly isServiceLimited?: boolean;

  /**
   * @schema Macie2ServiceLimit#unit
   */
  readonly unit?: string;

  /**
   * @schema Macie2ServiceLimit#value
   */
  readonly value?: number;

}

/**
 * @schema Macie2JobScopeTerm
 */
export interface Macie2JobScopeTerm {
  /**
   * @schema Macie2JobScopeTerm#simpleScopeTerm
   */
  readonly simpleScopeTerm?: Macie2SimpleScopeTerm;

  /**
   * @schema Macie2JobScopeTerm#tagScopeTerm
   */
  readonly tagScopeTerm?: Macie2TagScopeTerm;

}

/**
 * @schema Macie2AccountLevelPermissions
 */
export interface Macie2AccountLevelPermissions {
  /**
   * @schema Macie2AccountLevelPermissions#blockPublicAccess
   */
  readonly blockPublicAccess?: Macie2BlockPublicAccess;

}

/**
 * @schema Macie2BucketLevelPermissions
 */
export interface Macie2BucketLevelPermissions {
  /**
   * @schema Macie2BucketLevelPermissions#accessControlList
   */
  readonly accessControlList?: Macie2AccessControlList;

  /**
   * @schema Macie2BucketLevelPermissions#blockPublicAccess
   */
  readonly blockPublicAccess?: Macie2BlockPublicAccess;

  /**
   * @schema Macie2BucketLevelPermissions#bucketPolicy
   */
  readonly bucketPolicy?: Macie2BucketPolicy;

}

/**
 * @schema Macie2CustomDataIdentifiers
 */
export interface Macie2CustomDataIdentifiers {
  /**
   * @schema Macie2CustomDataIdentifiers#detections
   */
  readonly detections?: Macie2CustomDetection[];

  /**
   * @schema Macie2CustomDataIdentifiers#totalCount
   */
  readonly totalCount?: number;

}

/**
 * @schema Macie2SensitiveDataItem
 */
export interface Macie2SensitiveDataItem {
  /**
   * @schema Macie2SensitiveDataItem#category
   */
  readonly category?: string;

  /**
   * @schema Macie2SensitiveDataItem#detections
   */
  readonly detections?: Macie2DefaultDetection[];

  /**
   * @schema Macie2SensitiveDataItem#totalCount
   */
  readonly totalCount?: number;

}

/**
 * @schema Macie2ClassificationResultStatus
 */
export interface Macie2ClassificationResultStatus {
  /**
   * @schema Macie2ClassificationResultStatus#code
   */
  readonly code?: string;

  /**
   * @schema Macie2ClassificationResultStatus#reason
   */
  readonly reason?: string;

}

/**
 * @schema Macie2ApiCallDetails
 */
export interface Macie2ApiCallDetails {
  /**
   * @schema Macie2ApiCallDetails#api
   */
  readonly api?: string;

  /**
   * @schema Macie2ApiCallDetails#apiServiceName
   */
  readonly apiServiceName?: string;

  /**
   * @schema Macie2ApiCallDetails#firstSeen
   */
  readonly firstSeen?: string;

  /**
   * @schema Macie2ApiCallDetails#lastSeen
   */
  readonly lastSeen?: string;

}

/**
 * @schema Macie2DomainDetails
 */
export interface Macie2DomainDetails {
  /**
   * @schema Macie2DomainDetails#domainName
   */
  readonly domainName?: string;

}

/**
 * @schema Macie2IpAddressDetails
 */
export interface Macie2IpAddressDetails {
  /**
   * @schema Macie2IpAddressDetails#ipAddressV4
   */
  readonly ipAddressV4?: string;

  /**
   * @schema Macie2IpAddressDetails#ipCity
   */
  readonly ipCity?: Macie2IpCity;

  /**
   * @schema Macie2IpAddressDetails#ipCountry
   */
  readonly ipCountry?: Macie2IpCountry;

  /**
   * @schema Macie2IpAddressDetails#ipGeoLocation
   */
  readonly ipGeoLocation?: Macie2IpGeoLocation;

  /**
   * @schema Macie2IpAddressDetails#ipOwner
   */
  readonly ipOwner?: Macie2IpOwner;

}

/**
 * @schema Macie2UserIdentity
 */
export interface Macie2UserIdentity {
  /**
   * @schema Macie2UserIdentity#assumedRole
   */
  readonly assumedRole?: Macie2AssumedRole;

  /**
   * @schema Macie2UserIdentity#awsAccount
   */
  readonly awsAccount?: Macie2AwsAccount;

  /**
   * @schema Macie2UserIdentity#awsService
   */
  readonly awsService?: Macie2AwsService;

  /**
   * @schema Macie2UserIdentity#federatedUser
   */
  readonly federatedUser?: Macie2FederatedUser;

  /**
   * @schema Macie2UserIdentity#iamUser
   */
  readonly iamUser?: Macie2IamUser;

  /**
   * @schema Macie2UserIdentity#root
   */
  readonly root?: Macie2UserIdentityRoot;

  /**
   * @schema Macie2UserIdentity#type
   */
  readonly type?: string;

}

/**
 * @schema Macie2ServerSideEncryption
 */
export interface Macie2ServerSideEncryption {
  /**
   * @schema Macie2ServerSideEncryption#encryptionType
   */
  readonly encryptionType?: string;

  /**
   * @schema Macie2ServerSideEncryption#kmsMasterKeyId
   */
  readonly kmsMasterKeyId?: string;

}

/**
 * @schema Macie2S3BucketOwner
 */
export interface Macie2S3BucketOwner {
  /**
   * @schema Macie2S3BucketOwner#displayName
   */
  readonly displayName?: string;

  /**
   * @schema Macie2S3BucketOwner#id
   */
  readonly id?: string;

}

/**
 * @schema Macie2SimpleScopeTerm
 */
export interface Macie2SimpleScopeTerm {
  /**
   * @schema Macie2SimpleScopeTerm#comparator
   */
  readonly comparator?: string;

  /**
   * @schema Macie2SimpleScopeTerm#key
   */
  readonly key?: string;

  /**
   * @schema Macie2SimpleScopeTerm#values
   */
  readonly values?: string[];

}

/**
 * @schema Macie2TagScopeTerm
 */
export interface Macie2TagScopeTerm {
  /**
   * @schema Macie2TagScopeTerm#comparator
   */
  readonly comparator?: string;

  /**
   * @schema Macie2TagScopeTerm#key
   */
  readonly key?: string;

  /**
   * @schema Macie2TagScopeTerm#tagValues
   */
  readonly tagValues?: Macie2TagValuePair[];

  /**
   * @schema Macie2TagScopeTerm#target
   */
  readonly target?: string;

}

/**
 * @schema Macie2BlockPublicAccess
 */
export interface Macie2BlockPublicAccess {
  /**
   * @schema Macie2BlockPublicAccess#blockPublicAcls
   */
  readonly blockPublicAcls?: boolean;

  /**
   * @schema Macie2BlockPublicAccess#blockPublicPolicy
   */
  readonly blockPublicPolicy?: boolean;

  /**
   * @schema Macie2BlockPublicAccess#ignorePublicAcls
   */
  readonly ignorePublicAcls?: boolean;

  /**
   * @schema Macie2BlockPublicAccess#restrictPublicBuckets
   */
  readonly restrictPublicBuckets?: boolean;

}

/**
 * @schema Macie2AccessControlList
 */
export interface Macie2AccessControlList {
  /**
   * @schema Macie2AccessControlList#allowsPublicReadAccess
   */
  readonly allowsPublicReadAccess?: boolean;

  /**
   * @schema Macie2AccessControlList#allowsPublicWriteAccess
   */
  readonly allowsPublicWriteAccess?: boolean;

}

/**
 * @schema Macie2BucketPolicy
 */
export interface Macie2BucketPolicy {
  /**
   * @schema Macie2BucketPolicy#allowsPublicReadAccess
   */
  readonly allowsPublicReadAccess?: boolean;

  /**
   * @schema Macie2BucketPolicy#allowsPublicWriteAccess
   */
  readonly allowsPublicWriteAccess?: boolean;

}

/**
 * @schema Macie2CustomDetection
 */
export interface Macie2CustomDetection {
  /**
   * @schema Macie2CustomDetection#arn
   */
  readonly arn?: string;

  /**
   * @schema Macie2CustomDetection#count
   */
  readonly count?: number;

  /**
   * @schema Macie2CustomDetection#name
   */
  readonly name?: string;

  /**
   * @schema Macie2CustomDetection#occurrences
   */
  readonly occurrences?: Macie2Occurrences;

}

/**
 * @schema Macie2DefaultDetection
 */
export interface Macie2DefaultDetection {
  /**
   * @schema Macie2DefaultDetection#count
   */
  readonly count?: number;

  /**
   * @schema Macie2DefaultDetection#occurrences
   */
  readonly occurrences?: Macie2Occurrences;

  /**
   * @schema Macie2DefaultDetection#type
   */
  readonly type?: string;

}

/**
 * @schema Macie2IpCity
 */
export interface Macie2IpCity {
  /**
   * @schema Macie2IpCity#name
   */
  readonly name?: string;

}

/**
 * @schema Macie2IpCountry
 */
export interface Macie2IpCountry {
  /**
   * @schema Macie2IpCountry#code
   */
  readonly code?: string;

  /**
   * @schema Macie2IpCountry#name
   */
  readonly name?: string;

}

/**
 * @schema Macie2IpGeoLocation
 */
export interface Macie2IpGeoLocation {
  /**
   * @schema Macie2IpGeoLocation#lat
   */
  readonly lat?: number;

  /**
   * @schema Macie2IpGeoLocation#lon
   */
  readonly lon?: number;

}

/**
 * @schema Macie2IpOwner
 */
export interface Macie2IpOwner {
  /**
   * @schema Macie2IpOwner#asn
   */
  readonly asn?: string;

  /**
   * @schema Macie2IpOwner#asnOrg
   */
  readonly asnOrg?: string;

  /**
   * @schema Macie2IpOwner#isp
   */
  readonly isp?: string;

  /**
   * @schema Macie2IpOwner#org
   */
  readonly org?: string;

}

/**
 * @schema Macie2AssumedRole
 */
export interface Macie2AssumedRole {
  /**
   * @schema Macie2AssumedRole#accessKeyId
   */
  readonly accessKeyId?: string;

  /**
   * @schema Macie2AssumedRole#accountId
   */
  readonly accountId?: string;

  /**
   * @schema Macie2AssumedRole#arn
   */
  readonly arn?: string;

  /**
   * @schema Macie2AssumedRole#principalId
   */
  readonly principalId?: string;

  /**
   * @schema Macie2AssumedRole#sessionContext
   */
  readonly sessionContext?: Macie2SessionContext;

}

/**
 * @schema Macie2AwsAccount
 */
export interface Macie2AwsAccount {
  /**
   * @schema Macie2AwsAccount#accountId
   */
  readonly accountId?: string;

  /**
   * @schema Macie2AwsAccount#principalId
   */
  readonly principalId?: string;

}

/**
 * @schema Macie2AwsService
 */
export interface Macie2AwsService {
  /**
   * @schema Macie2AwsService#invokedBy
   */
  readonly invokedBy?: string;

}

/**
 * @schema Macie2FederatedUser
 */
export interface Macie2FederatedUser {
  /**
   * @schema Macie2FederatedUser#accessKeyId
   */
  readonly accessKeyId?: string;

  /**
   * @schema Macie2FederatedUser#accountId
   */
  readonly accountId?: string;

  /**
   * @schema Macie2FederatedUser#arn
   */
  readonly arn?: string;

  /**
   * @schema Macie2FederatedUser#principalId
   */
  readonly principalId?: string;

  /**
   * @schema Macie2FederatedUser#sessionContext
   */
  readonly sessionContext?: Macie2SessionContext;

}

/**
 * @schema Macie2IamUser
 */
export interface Macie2IamUser {
  /**
   * @schema Macie2IamUser#accountId
   */
  readonly accountId?: string;

  /**
   * @schema Macie2IamUser#arn
   */
  readonly arn?: string;

  /**
   * @schema Macie2IamUser#principalId
   */
  readonly principalId?: string;

  /**
   * @schema Macie2IamUser#userName
   */
  readonly userName?: string;

}

/**
 * @schema Macie2UserIdentityRoot
 */
export interface Macie2UserIdentityRoot {
  /**
   * @schema Macie2UserIdentityRoot#accountId
   */
  readonly accountId?: string;

  /**
   * @schema Macie2UserIdentityRoot#arn
   */
  readonly arn?: string;

  /**
   * @schema Macie2UserIdentityRoot#principalId
   */
  readonly principalId?: string;

}

/**
 * @schema Macie2TagValuePair
 */
export interface Macie2TagValuePair {
  /**
   * @schema Macie2TagValuePair#key
   */
  readonly key?: string;

  /**
   * @schema Macie2TagValuePair#value
   */
  readonly value?: string;

}

/**
 * @schema Macie2Occurrences
 */
export interface Macie2Occurrences {
  /**
   * @schema Macie2Occurrences#cells
   */
  readonly cells?: Macie2Cell[];

  /**
   * @schema Macie2Occurrences#lineRanges
   */
  readonly lineRanges?: Macie2Range[];

  /**
   * @schema Macie2Occurrences#offsetRanges
   */
  readonly offsetRanges?: Macie2Range[];

  /**
   * @schema Macie2Occurrences#pages
   */
  readonly pages?: Macie2Page[];

  /**
   * @schema Macie2Occurrences#records
   */
  readonly records?: Macie2Record[];

}

/**
 * @schema Macie2SessionContext
 */
export interface Macie2SessionContext {
  /**
   * @schema Macie2SessionContext#attributes
   */
  readonly attributes?: Macie2SessionContextAttributes;

  /**
   * @schema Macie2SessionContext#sessionIssuer
   */
  readonly sessionIssuer?: Macie2SessionIssuer;

}

/**
 * @schema Macie2Cell
 */
export interface Macie2Cell {
  /**
   * @schema Macie2Cell#cellReference
   */
  readonly cellReference?: string;

  /**
   * @schema Macie2Cell#column
   */
  readonly column?: number;

  /**
   * @schema Macie2Cell#columnName
   */
  readonly columnName?: string;

  /**
   * @schema Macie2Cell#row
   */
  readonly row?: number;

}

/**
 * @schema Macie2Range
 */
export interface Macie2Range {
  /**
   * @schema Macie2Range#end
   */
  readonly end?: number;

  /**
   * @schema Macie2Range#start
   */
  readonly start?: number;

  /**
   * @schema Macie2Range#startColumn
   */
  readonly startColumn?: number;

}

/**
 * @schema Macie2Page
 */
export interface Macie2Page {
  /**
   * @schema Macie2Page#lineRange
   */
  readonly lineRange?: Macie2Range;

  /**
   * @schema Macie2Page#offsetRange
   */
  readonly offsetRange?: Macie2Range;

  /**
   * @schema Macie2Page#pageNumber
   */
  readonly pageNumber?: number;

}

/**
 * @schema Macie2Record
 */
export interface Macie2Record {
  /**
   * @schema Macie2Record#jsonPath
   */
  readonly jsonPath?: string;

  /**
   * @schema Macie2Record#recordIndex
   */
  readonly recordIndex?: number;

}

/**
 * @schema Macie2SessionContextAttributes
 */
export interface Macie2SessionContextAttributes {
  /**
   * @schema Macie2SessionContextAttributes#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema Macie2SessionContextAttributes#mfaAuthenticated
   */
  readonly mfaAuthenticated?: boolean;

}

/**
 * @schema Macie2SessionIssuer
 */
export interface Macie2SessionIssuer {
  /**
   * @schema Macie2SessionIssuer#accountId
   */
  readonly accountId?: string;

  /**
   * @schema Macie2SessionIssuer#arn
   */
  readonly arn?: string;

  /**
   * @schema Macie2SessionIssuer#principalId
   */
  readonly principalId?: string;

  /**
   * @schema Macie2SessionIssuer#type
   */
  readonly type?: string;

  /**
   * @schema Macie2SessionIssuer#userName
   */
  readonly userName?: string;

}
