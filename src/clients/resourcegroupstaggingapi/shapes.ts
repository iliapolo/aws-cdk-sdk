/**
 * @schema ResourceGroupsTaggingApiDescribeReportCreationInput
 */
export interface ResourceGroupsTaggingApiDescribeReportCreationInput {
}

/**
 * Converts an object of type 'ResourceGroupsTaggingApiDescribeReportCreationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsTaggingApiDescribeReportCreationInput(obj: ResourceGroupsTaggingApiDescribeReportCreationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsTaggingApiDescribeReportCreationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsTaggingApiDescribeReportCreationOutput(obj: ResourceGroupsTaggingApiDescribeReportCreationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'S3Location': obj.s3Location,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsTaggingApiGetComplianceSummaryInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsTaggingApiGetComplianceSummaryInput(obj: ResourceGroupsTaggingApiGetComplianceSummaryInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetIdFilters': obj.targetIdFilters?.map(y => y),
    'RegionFilters': obj.regionFilters?.map(y => y),
    'ResourceTypeFilters': obj.resourceTypeFilters?.map(y => y),
    'TagKeyFilters': obj.tagKeyFilters?.map(y => y),
    'GroupBy': obj.groupBy?.map(y => y),
    'MaxResults': obj.maxResults,
    'PaginationToken': obj.paginationToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsTaggingApiGetComplianceSummaryOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsTaggingApiGetComplianceSummaryOutput(obj: ResourceGroupsTaggingApiGetComplianceSummaryOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SummaryList': obj.summaryList?.map(y => toJson_ResourceGroupsTaggingApiSummary(y)),
    'PaginationToken': obj.paginationToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema ResourceGroupsTaggingApiGetResourcesInput#ResourceARNList
   */
  readonly resourceArnList?: string[];

}

/**
 * Converts an object of type 'ResourceGroupsTaggingApiGetResourcesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsTaggingApiGetResourcesInput(obj: ResourceGroupsTaggingApiGetResourcesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PaginationToken': obj.paginationToken,
    'TagFilters': obj.tagFilters?.map(y => toJson_ResourceGroupsTaggingApiTagFilter(y)),
    'ResourcesPerPage': obj.resourcesPerPage,
    'TagsPerPage': obj.tagsPerPage,
    'ResourceTypeFilters': obj.resourceTypeFilters?.map(y => y),
    'IncludeComplianceDetails': obj.includeComplianceDetails,
    'ExcludeCompliantResources': obj.excludeCompliantResources,
    'ResourceARNList': obj.resourceArnList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsTaggingApiGetResourcesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsTaggingApiGetResourcesOutput(obj: ResourceGroupsTaggingApiGetResourcesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PaginationToken': obj.paginationToken,
    'ResourceTagMappingList': obj.resourceTagMappingList?.map(y => toJson_ResourceGroupsTaggingApiResourceTagMapping(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsTaggingApiGetTagKeysInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsTaggingApiGetTagKeysInput(obj: ResourceGroupsTaggingApiGetTagKeysInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PaginationToken': obj.paginationToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsTaggingApiGetTagKeysOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsTaggingApiGetTagKeysOutput(obj: ResourceGroupsTaggingApiGetTagKeysOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PaginationToken': obj.paginationToken,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly key?: string;

}

/**
 * Converts an object of type 'ResourceGroupsTaggingApiGetTagValuesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsTaggingApiGetTagValuesInput(obj: ResourceGroupsTaggingApiGetTagValuesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PaginationToken': obj.paginationToken,
    'Key': obj.key,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsTaggingApiGetTagValuesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsTaggingApiGetTagValuesOutput(obj: ResourceGroupsTaggingApiGetTagValuesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PaginationToken': obj.paginationToken,
    'TagValues': obj.tagValues?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ResourceGroupsTaggingApiStartReportCreationInput
 */
export interface ResourceGroupsTaggingApiStartReportCreationInput {
  /**
   * @schema ResourceGroupsTaggingApiStartReportCreationInput#S3Bucket
   */
  readonly s3Bucket?: string;

}

/**
 * Converts an object of type 'ResourceGroupsTaggingApiStartReportCreationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsTaggingApiStartReportCreationInput(obj: ResourceGroupsTaggingApiStartReportCreationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Bucket': obj.s3Bucket,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ResourceGroupsTaggingApiStartReportCreationOutput
 */
export interface ResourceGroupsTaggingApiStartReportCreationOutput {
}

/**
 * Converts an object of type 'ResourceGroupsTaggingApiStartReportCreationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsTaggingApiStartReportCreationOutput(obj: ResourceGroupsTaggingApiStartReportCreationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ResourceGroupsTaggingApiTagResourcesInput
 */
export interface ResourceGroupsTaggingApiTagResourcesInput {
  /**
   * @schema ResourceGroupsTaggingApiTagResourcesInput#ResourceARNList
   */
  readonly resourceArnList?: string[];

  /**
   * @schema ResourceGroupsTaggingApiTagResourcesInput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ResourceGroupsTaggingApiTagResourcesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsTaggingApiTagResourcesInput(obj: ResourceGroupsTaggingApiTagResourcesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARNList': obj.resourceArnList?.map(y => y),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsTaggingApiTagResourcesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsTaggingApiTagResourcesOutput(obj: ResourceGroupsTaggingApiTagResourcesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FailedResourcesMap': ((obj.failedResourcesMap) === undefined) ? undefined : (Object.entries(obj.failedResourcesMap).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_ResourceGroupsTaggingApiFailureInfo(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ResourceGroupsTaggingApiUntagResourcesInput
 */
export interface ResourceGroupsTaggingApiUntagResourcesInput {
  /**
   * @schema ResourceGroupsTaggingApiUntagResourcesInput#ResourceARNList
   */
  readonly resourceArnList?: string[];

  /**
   * @schema ResourceGroupsTaggingApiUntagResourcesInput#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'ResourceGroupsTaggingApiUntagResourcesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsTaggingApiUntagResourcesInput(obj: ResourceGroupsTaggingApiUntagResourcesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARNList': obj.resourceArnList?.map(y => y),
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsTaggingApiUntagResourcesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsTaggingApiUntagResourcesOutput(obj: ResourceGroupsTaggingApiUntagResourcesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FailedResourcesMap': ((obj.failedResourcesMap) === undefined) ? undefined : (Object.entries(obj.failedResourcesMap).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_ResourceGroupsTaggingApiFailureInfo(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsTaggingApiSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsTaggingApiSummary(obj: ResourceGroupsTaggingApiSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LastUpdated': obj.lastUpdated,
    'TargetId': obj.targetId,
    'TargetIdType': obj.targetIdType,
    'Region': obj.region,
    'ResourceType': obj.resourceType,
    'NonCompliantResources': obj.nonCompliantResources,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsTaggingApiTagFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsTaggingApiTagFilter(obj: ResourceGroupsTaggingApiTagFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsTaggingApiResourceTagMapping' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsTaggingApiResourceTagMapping(obj: ResourceGroupsTaggingApiResourceTagMapping | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_ResourceGroupsTaggingApiTag(y)),
    'ComplianceDetails': toJson_ResourceGroupsTaggingApiComplianceDetails(obj.complianceDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsTaggingApiFailureInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsTaggingApiFailureInfo(obj: ResourceGroupsTaggingApiFailureInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StatusCode': obj.statusCode,
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ResourceGroupsTaggingApiTag
 */
export interface ResourceGroupsTaggingApiTag {
  /**
   * @schema ResourceGroupsTaggingApiTag#Key
   */
  readonly key?: string;

  /**
   * @schema ResourceGroupsTaggingApiTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'ResourceGroupsTaggingApiTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsTaggingApiTag(obj: ResourceGroupsTaggingApiTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'ResourceGroupsTaggingApiComplianceDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsTaggingApiComplianceDetails(obj: ResourceGroupsTaggingApiComplianceDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NoncompliantKeys': obj.noncompliantKeys?.map(y => y),
    'KeysWithNoncompliantValues': obj.keysWithNoncompliantValues?.map(y => y),
    'ComplianceStatus': obj.complianceStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
