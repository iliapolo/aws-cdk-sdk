/**
 * @schema DescribeReportCreationInput
 */
export interface DescribeReportCreationInput {
}

/**
 * @schema DescribeReportCreationOutput
 */
export interface DescribeReportCreationOutput {
  /**
   * @schema DescribeReportCreationOutput#Status
   */
  readonly status?: string;

  /**
   * @schema DescribeReportCreationOutput#S3Location
   */
  readonly s3Location?: string;

  /**
   * @schema DescribeReportCreationOutput#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema GetComplianceSummaryInput
 */
export interface GetComplianceSummaryInput {
  /**
   * @schema GetComplianceSummaryInput#TargetIdFilters
   */
  readonly targetIdFilters?: string[];

  /**
   * @schema GetComplianceSummaryInput#RegionFilters
   */
  readonly regionFilters?: string[];

  /**
   * @schema GetComplianceSummaryInput#ResourceTypeFilters
   */
  readonly resourceTypeFilters?: string[];

  /**
   * @schema GetComplianceSummaryInput#TagKeyFilters
   */
  readonly tagKeyFilters?: string[];

  /**
   * @schema GetComplianceSummaryInput#GroupBy
   */
  readonly groupBy?: string[];

  /**
   * @schema GetComplianceSummaryInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetComplianceSummaryInput#PaginationToken
   */
  readonly paginationToken?: string;

}

/**
 * @schema GetComplianceSummaryOutput
 */
export interface GetComplianceSummaryOutput {
  /**
   * @schema GetComplianceSummaryOutput#SummaryList
   */
  readonly summaryList?: Summary[];

  /**
   * @schema GetComplianceSummaryOutput#PaginationToken
   */
  readonly paginationToken?: string;

}

/**
 * @schema GetResourcesInput
 */
export interface GetResourcesInput {
  /**
   * @schema GetResourcesInput#PaginationToken
   */
  readonly paginationToken?: string;

  /**
   * @schema GetResourcesInput#TagFilters
   */
  readonly tagFilters?: TagFilter[];

  /**
   * @schema GetResourcesInput#ResourcesPerPage
   */
  readonly resourcesPerPage?: number;

  /**
   * @schema GetResourcesInput#TagsPerPage
   */
  readonly tagsPerPage?: number;

  /**
   * @schema GetResourcesInput#ResourceTypeFilters
   */
  readonly resourceTypeFilters?: string[];

  /**
   * @schema GetResourcesInput#IncludeComplianceDetails
   */
  readonly includeComplianceDetails?: boolean;

  /**
   * @schema GetResourcesInput#ExcludeCompliantResources
   */
  readonly excludeCompliantResources?: boolean;

}

/**
 * @schema GetResourcesOutput
 */
export interface GetResourcesOutput {
  /**
   * @schema GetResourcesOutput#PaginationToken
   */
  readonly paginationToken?: string;

  /**
   * @schema GetResourcesOutput#ResourceTagMappingList
   */
  readonly resourceTagMappingList?: ResourceTagMapping[];

}

/**
 * @schema GetTagKeysInput
 */
export interface GetTagKeysInput {
  /**
   * @schema GetTagKeysInput#PaginationToken
   */
  readonly paginationToken?: string;

}

/**
 * @schema GetTagKeysOutput
 */
export interface GetTagKeysOutput {
  /**
   * @schema GetTagKeysOutput#PaginationToken
   */
  readonly paginationToken?: string;

  /**
   * @schema GetTagKeysOutput#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * @schema GetTagValuesInput
 */
export interface GetTagValuesInput {
  /**
   * @schema GetTagValuesInput#PaginationToken
   */
  readonly paginationToken?: string;

  /**
   * @schema GetTagValuesInput#Key
   */
  readonly key: string;

}

/**
 * @schema GetTagValuesOutput
 */
export interface GetTagValuesOutput {
  /**
   * @schema GetTagValuesOutput#PaginationToken
   */
  readonly paginationToken?: string;

  /**
   * @schema GetTagValuesOutput#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * @schema StartReportCreationInput
 */
export interface StartReportCreationInput {
  /**
   * @schema StartReportCreationInput#S3Bucket
   */
  readonly s3Bucket: string;

}

/**
 * @schema StartReportCreationOutput
 */
export interface StartReportCreationOutput {
}

/**
 * @schema TagResourcesInput
 */
export interface TagResourcesInput {
  /**
   * @schema TagResourcesInput#ResourceARNList
   */
  readonly resourceArnList: string[];

  /**
   * @schema TagResourcesInput#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema TagResourcesOutput
 */
export interface TagResourcesOutput {
  /**
   * @schema TagResourcesOutput#FailedResourcesMap
   */
  readonly failedResourcesMap?: { [key: string]: FailureInfo };

}

/**
 * @schema UntagResourcesInput
 */
export interface UntagResourcesInput {
  /**
   * @schema UntagResourcesInput#ResourceARNList
   */
  readonly resourceArnList: string[];

  /**
   * @schema UntagResourcesInput#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourcesOutput
 */
export interface UntagResourcesOutput {
  /**
   * @schema UntagResourcesOutput#FailedResourcesMap
   */
  readonly failedResourcesMap?: { [key: string]: FailureInfo };

}

/**
 * @schema Summary
 */
export interface Summary {
  /**
   * @schema Summary#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema Summary#TargetId
   */
  readonly targetId?: string;

  /**
   * @schema Summary#TargetIdType
   */
  readonly targetIdType?: string;

  /**
   * @schema Summary#Region
   */
  readonly region?: string;

  /**
   * @schema Summary#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema Summary#NonCompliantResources
   */
  readonly nonCompliantResources?: number;

}

/**
 * @schema TagFilter
 */
export interface TagFilter {
  /**
   * @schema TagFilter#Key
   */
  readonly key?: string;

  /**
   * @schema TagFilter#Values
   */
  readonly values?: string[];

}

/**
 * @schema ResourceTagMapping
 */
export interface ResourceTagMapping {
  /**
   * @schema ResourceTagMapping#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema ResourceTagMapping#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema ResourceTagMapping#ComplianceDetails
   */
  readonly complianceDetails?: ComplianceDetails;

}

/**
 * @schema FailureInfo
 */
export interface FailureInfo {
  /**
   * @schema FailureInfo#StatusCode
   */
  readonly statusCode?: number;

  /**
   * @schema FailureInfo#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema FailureInfo#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key: string;

  /**
   * @schema Tag#Value
   */
  readonly value: string;

}

/**
 * @schema ComplianceDetails
 */
export interface ComplianceDetails {
  /**
   * @schema ComplianceDetails#NoncompliantKeys
   */
  readonly noncompliantKeys?: string[];

  /**
   * @schema ComplianceDetails#KeysWithNoncompliantValues
   */
  readonly keysWithNoncompliantValues?: string[];

  /**
   * @schema ComplianceDetails#ComplianceStatus
   */
  readonly complianceStatus?: boolean;

}
