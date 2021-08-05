/**
 * @schema ResourceGroupsTaggingApiDescribeReportCreationInput
 */
export interface ResourceGroupsTaggingApiDescribeReportCreationInput {
}

/**
 * @schema ResourceGroupsTaggingApiDescribeReportCreationOutput
 */
export interface ResourceGroupsTaggingApiDescribeReportCreationOutput {
  /**
   * @schema ResourceGroupsTaggingApiDescribeReportCreationOutput#Status
   */
  readonly status?: string;

  /**
   * @schema ResourceGroupsTaggingApiDescribeReportCreationOutput#S3Location
   */
  readonly s3Location?: string;

  /**
   * @schema ResourceGroupsTaggingApiDescribeReportCreationOutput#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema ResourceGroupsTaggingApiGetComplianceSummaryInput
 */
export interface ResourceGroupsTaggingApiGetComplianceSummaryInput {
  /**
   * @schema ResourceGroupsTaggingApiGetComplianceSummaryInput#TargetIdFilters
   */
  readonly targetIdFilters?: string[];

  /**
   * @schema ResourceGroupsTaggingApiGetComplianceSummaryInput#RegionFilters
   */
  readonly regionFilters?: string[];

  /**
   * @schema ResourceGroupsTaggingApiGetComplianceSummaryInput#ResourceTypeFilters
   */
  readonly resourceTypeFilters?: string[];

  /**
   * @schema ResourceGroupsTaggingApiGetComplianceSummaryInput#TagKeyFilters
   */
  readonly tagKeyFilters?: string[];

  /**
   * @schema ResourceGroupsTaggingApiGetComplianceSummaryInput#GroupBy
   */
  readonly groupBy?: string[];

  /**
   * @schema ResourceGroupsTaggingApiGetComplianceSummaryInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ResourceGroupsTaggingApiGetComplianceSummaryInput#PaginationToken
   */
  readonly paginationToken?: string;

}

/**
 * @schema ResourceGroupsTaggingApiGetComplianceSummaryOutput
 */
export interface ResourceGroupsTaggingApiGetComplianceSummaryOutput {
  /**
   * @schema ResourceGroupsTaggingApiGetComplianceSummaryOutput#SummaryList
   */
  readonly summaryList?: ResourceGroupsTaggingApiSummary[];

  /**
   * @schema ResourceGroupsTaggingApiGetComplianceSummaryOutput#PaginationToken
   */
  readonly paginationToken?: string;

}

/**
 * @schema ResourceGroupsTaggingApiGetResourcesInput
 */
export interface ResourceGroupsTaggingApiGetResourcesInput {
  /**
   * @schema ResourceGroupsTaggingApiGetResourcesInput#PaginationToken
   */
  readonly paginationToken?: string;

  /**
   * @schema ResourceGroupsTaggingApiGetResourcesInput#TagFilters
   */
  readonly tagFilters?: ResourceGroupsTaggingApiTagFilter[];

  /**
   * @schema ResourceGroupsTaggingApiGetResourcesInput#ResourcesPerPage
   */
  readonly resourcesPerPage?: number;

  /**
   * @schema ResourceGroupsTaggingApiGetResourcesInput#TagsPerPage
   */
  readonly tagsPerPage?: number;

  /**
   * @schema ResourceGroupsTaggingApiGetResourcesInput#ResourceTypeFilters
   */
  readonly resourceTypeFilters?: string[];

  /**
   * @schema ResourceGroupsTaggingApiGetResourcesInput#IncludeComplianceDetails
   */
  readonly includeComplianceDetails?: boolean;

  /**
   * @schema ResourceGroupsTaggingApiGetResourcesInput#ExcludeCompliantResources
   */
  readonly excludeCompliantResources?: boolean;

}

/**
 * @schema ResourceGroupsTaggingApiGetResourcesOutput
 */
export interface ResourceGroupsTaggingApiGetResourcesOutput {
  /**
   * @schema ResourceGroupsTaggingApiGetResourcesOutput#PaginationToken
   */
  readonly paginationToken?: string;

  /**
   * @schema ResourceGroupsTaggingApiGetResourcesOutput#ResourceTagMappingList
   */
  readonly resourceTagMappingList?: ResourceGroupsTaggingApiResourceTagMapping[];

}

/**
 * @schema ResourceGroupsTaggingApiGetTagKeysInput
 */
export interface ResourceGroupsTaggingApiGetTagKeysInput {
  /**
   * @schema ResourceGroupsTaggingApiGetTagKeysInput#PaginationToken
   */
  readonly paginationToken?: string;

}

/**
 * @schema ResourceGroupsTaggingApiGetTagKeysOutput
 */
export interface ResourceGroupsTaggingApiGetTagKeysOutput {
  /**
   * @schema ResourceGroupsTaggingApiGetTagKeysOutput#PaginationToken
   */
  readonly paginationToken?: string;

  /**
   * @schema ResourceGroupsTaggingApiGetTagKeysOutput#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * @schema ResourceGroupsTaggingApiGetTagValuesInput
 */
export interface ResourceGroupsTaggingApiGetTagValuesInput {
  /**
   * @schema ResourceGroupsTaggingApiGetTagValuesInput#PaginationToken
   */
  readonly paginationToken?: string;

  /**
   * @schema ResourceGroupsTaggingApiGetTagValuesInput#Key
   */
  readonly key: string;

}

/**
 * @schema ResourceGroupsTaggingApiGetTagValuesOutput
 */
export interface ResourceGroupsTaggingApiGetTagValuesOutput {
  /**
   * @schema ResourceGroupsTaggingApiGetTagValuesOutput#PaginationToken
   */
  readonly paginationToken?: string;

  /**
   * @schema ResourceGroupsTaggingApiGetTagValuesOutput#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * @schema ResourceGroupsTaggingApiStartReportCreationInput
 */
export interface ResourceGroupsTaggingApiStartReportCreationInput {
  /**
   * @schema ResourceGroupsTaggingApiStartReportCreationInput#S3Bucket
   */
  readonly s3Bucket: string;

}

/**
 * @schema ResourceGroupsTaggingApiStartReportCreationOutput
 */
export interface ResourceGroupsTaggingApiStartReportCreationOutput {
}

/**
 * @schema ResourceGroupsTaggingApiTagResourcesInput
 */
export interface ResourceGroupsTaggingApiTagResourcesInput {
  /**
   * @schema ResourceGroupsTaggingApiTagResourcesInput#ResourceARNList
   */
  readonly resourceArnList: string[];

  /**
   * @schema ResourceGroupsTaggingApiTagResourcesInput#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema ResourceGroupsTaggingApiTagResourcesOutput
 */
export interface ResourceGroupsTaggingApiTagResourcesOutput {
  /**
   * @schema ResourceGroupsTaggingApiTagResourcesOutput#FailedResourcesMap
   */
  readonly failedResourcesMap?: { [key: string]: ResourceGroupsTaggingApiFailureInfo };

}

/**
 * @schema ResourceGroupsTaggingApiUntagResourcesInput
 */
export interface ResourceGroupsTaggingApiUntagResourcesInput {
  /**
   * @schema ResourceGroupsTaggingApiUntagResourcesInput#ResourceARNList
   */
  readonly resourceArnList: string[];

  /**
   * @schema ResourceGroupsTaggingApiUntagResourcesInput#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema ResourceGroupsTaggingApiUntagResourcesOutput
 */
export interface ResourceGroupsTaggingApiUntagResourcesOutput {
  /**
   * @schema ResourceGroupsTaggingApiUntagResourcesOutput#FailedResourcesMap
   */
  readonly failedResourcesMap?: { [key: string]: ResourceGroupsTaggingApiFailureInfo };

}

/**
 * @schema ResourceGroupsTaggingApiSummary
 */
export interface ResourceGroupsTaggingApiSummary {
  /**
   * @schema ResourceGroupsTaggingApiSummary#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema ResourceGroupsTaggingApiSummary#TargetId
   */
  readonly targetId?: string;

  /**
   * @schema ResourceGroupsTaggingApiSummary#TargetIdType
   */
  readonly targetIdType?: string;

  /**
   * @schema ResourceGroupsTaggingApiSummary#Region
   */
  readonly region?: string;

  /**
   * @schema ResourceGroupsTaggingApiSummary#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ResourceGroupsTaggingApiSummary#NonCompliantResources
   */
  readonly nonCompliantResources?: number;

}

/**
 * @schema ResourceGroupsTaggingApiTagFilter
 */
export interface ResourceGroupsTaggingApiTagFilter {
  /**
   * @schema ResourceGroupsTaggingApiTagFilter#Key
   */
  readonly key?: string;

  /**
   * @schema ResourceGroupsTaggingApiTagFilter#Values
   */
  readonly values?: string[];

}

/**
 * @schema ResourceGroupsTaggingApiResourceTagMapping
 */
export interface ResourceGroupsTaggingApiResourceTagMapping {
  /**
   * @schema ResourceGroupsTaggingApiResourceTagMapping#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema ResourceGroupsTaggingApiResourceTagMapping#Tags
   */
  readonly tags?: ResourceGroupsTaggingApiTag[];

  /**
   * @schema ResourceGroupsTaggingApiResourceTagMapping#ComplianceDetails
   */
  readonly complianceDetails?: ResourceGroupsTaggingApiComplianceDetails;

}

/**
 * @schema ResourceGroupsTaggingApiFailureInfo
 */
export interface ResourceGroupsTaggingApiFailureInfo {
  /**
   * @schema ResourceGroupsTaggingApiFailureInfo#StatusCode
   */
  readonly statusCode?: number;

  /**
   * @schema ResourceGroupsTaggingApiFailureInfo#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema ResourceGroupsTaggingApiFailureInfo#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema ResourceGroupsTaggingApiTag
 */
export interface ResourceGroupsTaggingApiTag {
  /**
   * @schema ResourceGroupsTaggingApiTag#Key
   */
  readonly key: string;

  /**
   * @schema ResourceGroupsTaggingApiTag#Value
   */
  readonly value: string;

}

/**
 * @schema ResourceGroupsTaggingApiComplianceDetails
 */
export interface ResourceGroupsTaggingApiComplianceDetails {
  /**
   * @schema ResourceGroupsTaggingApiComplianceDetails#NoncompliantKeys
   */
  readonly noncompliantKeys?: string[];

  /**
   * @schema ResourceGroupsTaggingApiComplianceDetails#KeysWithNoncompliantValues
   */
  readonly keysWithNoncompliantValues?: string[];

  /**
   * @schema ResourceGroupsTaggingApiComplianceDetails#ComplianceStatus
   */
  readonly complianceStatus?: boolean;

}
