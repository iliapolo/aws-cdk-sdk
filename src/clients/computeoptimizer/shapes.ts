/**
 * @schema ComputeOptimizerDescribeRecommendationExportJobsRequest
 */
export interface ComputeOptimizerDescribeRecommendationExportJobsRequest {
  /**
   * @schema ComputeOptimizerDescribeRecommendationExportJobsRequest#jobIds
   */
  readonly jobIds?: string[];

  /**
   * @schema ComputeOptimizerDescribeRecommendationExportJobsRequest#filters
   */
  readonly filters?: ComputeOptimizerJobFilter[];

  /**
   * @schema ComputeOptimizerDescribeRecommendationExportJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComputeOptimizerDescribeRecommendationExportJobsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ComputeOptimizerDescribeRecommendationExportJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerDescribeRecommendationExportJobsRequest(obj: ComputeOptimizerDescribeRecommendationExportJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobIds': obj.jobIds?.map(y => y),
    'filters': obj.filters?.map(y => toJson_ComputeOptimizerJobFilter(y)),
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerDescribeRecommendationExportJobsResponse
 */
export interface ComputeOptimizerDescribeRecommendationExportJobsResponse {
  /**
   * @schema ComputeOptimizerDescribeRecommendationExportJobsResponse#recommendationExportJobs
   */
  readonly recommendationExportJobs?: ComputeOptimizerRecommendationExportJob[];

  /**
   * @schema ComputeOptimizerDescribeRecommendationExportJobsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ComputeOptimizerDescribeRecommendationExportJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerDescribeRecommendationExportJobsResponse(obj: ComputeOptimizerDescribeRecommendationExportJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'recommendationExportJobs': obj.recommendationExportJobs?.map(y => toJson_ComputeOptimizerRecommendationExportJob(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerExportAutoScalingGroupRecommendationsRequest
 */
export interface ComputeOptimizerExportAutoScalingGroupRecommendationsRequest {
  /**
   * @schema ComputeOptimizerExportAutoScalingGroupRecommendationsRequest#accountIds
   */
  readonly accountIds?: string[];

  /**
   * @schema ComputeOptimizerExportAutoScalingGroupRecommendationsRequest#filters
   */
  readonly filters?: ComputeOptimizerFilter[];

  /**
   * @schema ComputeOptimizerExportAutoScalingGroupRecommendationsRequest#fieldsToExport
   */
  readonly fieldsToExport?: string[];

  /**
   * @schema ComputeOptimizerExportAutoScalingGroupRecommendationsRequest#s3DestinationConfig
   */
  readonly s3DestinationConfig: ComputeOptimizerS3DestinationConfig;

  /**
   * @schema ComputeOptimizerExportAutoScalingGroupRecommendationsRequest#fileFormat
   */
  readonly fileFormat?: string;

  /**
   * @schema ComputeOptimizerExportAutoScalingGroupRecommendationsRequest#includeMemberAccounts
   */
  readonly includeMemberAccounts?: boolean;

}

/**
 * Converts an object of type 'ComputeOptimizerExportAutoScalingGroupRecommendationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerExportAutoScalingGroupRecommendationsRequest(obj: ComputeOptimizerExportAutoScalingGroupRecommendationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountIds': obj.accountIds?.map(y => y),
    'filters': obj.filters?.map(y => toJson_ComputeOptimizerFilter(y)),
    'fieldsToExport': obj.fieldsToExport?.map(y => y),
    's3DestinationConfig': toJson_ComputeOptimizerS3DestinationConfig(obj.s3DestinationConfig),
    'fileFormat': obj.fileFormat,
    'includeMemberAccounts': obj.includeMemberAccounts,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerExportAutoScalingGroupRecommendationsResponse
 */
export interface ComputeOptimizerExportAutoScalingGroupRecommendationsResponse {
  /**
   * @schema ComputeOptimizerExportAutoScalingGroupRecommendationsResponse#jobId
   */
  readonly jobId?: string;

  /**
   * @schema ComputeOptimizerExportAutoScalingGroupRecommendationsResponse#s3Destination
   */
  readonly s3Destination?: ComputeOptimizerS3Destination;

}

/**
 * Converts an object of type 'ComputeOptimizerExportAutoScalingGroupRecommendationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerExportAutoScalingGroupRecommendationsResponse(obj: ComputeOptimizerExportAutoScalingGroupRecommendationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    's3Destination': toJson_ComputeOptimizerS3Destination(obj.s3Destination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerExportEbsVolumeRecommendationsRequest
 */
export interface ComputeOptimizerExportEbsVolumeRecommendationsRequest {
  /**
   * @schema ComputeOptimizerExportEbsVolumeRecommendationsRequest#accountIds
   */
  readonly accountIds?: string[];

  /**
   * @schema ComputeOptimizerExportEbsVolumeRecommendationsRequest#filters
   */
  readonly filters?: ComputeOptimizerEbsFilter[];

  /**
   * @schema ComputeOptimizerExportEbsVolumeRecommendationsRequest#fieldsToExport
   */
  readonly fieldsToExport?: string[];

  /**
   * @schema ComputeOptimizerExportEbsVolumeRecommendationsRequest#s3DestinationConfig
   */
  readonly s3DestinationConfig: ComputeOptimizerS3DestinationConfig;

  /**
   * @schema ComputeOptimizerExportEbsVolumeRecommendationsRequest#fileFormat
   */
  readonly fileFormat?: string;

  /**
   * @schema ComputeOptimizerExportEbsVolumeRecommendationsRequest#includeMemberAccounts
   */
  readonly includeMemberAccounts?: boolean;

}

/**
 * Converts an object of type 'ComputeOptimizerExportEbsVolumeRecommendationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerExportEbsVolumeRecommendationsRequest(obj: ComputeOptimizerExportEbsVolumeRecommendationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountIds': obj.accountIds?.map(y => y),
    'filters': obj.filters?.map(y => toJson_ComputeOptimizerEbsFilter(y)),
    'fieldsToExport': obj.fieldsToExport?.map(y => y),
    's3DestinationConfig': toJson_ComputeOptimizerS3DestinationConfig(obj.s3DestinationConfig),
    'fileFormat': obj.fileFormat,
    'includeMemberAccounts': obj.includeMemberAccounts,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerExportEbsVolumeRecommendationsResponse
 */
export interface ComputeOptimizerExportEbsVolumeRecommendationsResponse {
  /**
   * @schema ComputeOptimizerExportEbsVolumeRecommendationsResponse#jobId
   */
  readonly jobId?: string;

  /**
   * @schema ComputeOptimizerExportEbsVolumeRecommendationsResponse#s3Destination
   */
  readonly s3Destination?: ComputeOptimizerS3Destination;

}

/**
 * Converts an object of type 'ComputeOptimizerExportEbsVolumeRecommendationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerExportEbsVolumeRecommendationsResponse(obj: ComputeOptimizerExportEbsVolumeRecommendationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    's3Destination': toJson_ComputeOptimizerS3Destination(obj.s3Destination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerExportEc2InstanceRecommendationsRequest
 */
export interface ComputeOptimizerExportEc2InstanceRecommendationsRequest {
  /**
   * @schema ComputeOptimizerExportEc2InstanceRecommendationsRequest#accountIds
   */
  readonly accountIds?: string[];

  /**
   * @schema ComputeOptimizerExportEc2InstanceRecommendationsRequest#filters
   */
  readonly filters?: ComputeOptimizerFilter[];

  /**
   * @schema ComputeOptimizerExportEc2InstanceRecommendationsRequest#fieldsToExport
   */
  readonly fieldsToExport?: string[];

  /**
   * @schema ComputeOptimizerExportEc2InstanceRecommendationsRequest#s3DestinationConfig
   */
  readonly s3DestinationConfig: ComputeOptimizerS3DestinationConfig;

  /**
   * @schema ComputeOptimizerExportEc2InstanceRecommendationsRequest#fileFormat
   */
  readonly fileFormat?: string;

  /**
   * @schema ComputeOptimizerExportEc2InstanceRecommendationsRequest#includeMemberAccounts
   */
  readonly includeMemberAccounts?: boolean;

}

/**
 * Converts an object of type 'ComputeOptimizerExportEc2InstanceRecommendationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerExportEc2InstanceRecommendationsRequest(obj: ComputeOptimizerExportEc2InstanceRecommendationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountIds': obj.accountIds?.map(y => y),
    'filters': obj.filters?.map(y => toJson_ComputeOptimizerFilter(y)),
    'fieldsToExport': obj.fieldsToExport?.map(y => y),
    's3DestinationConfig': toJson_ComputeOptimizerS3DestinationConfig(obj.s3DestinationConfig),
    'fileFormat': obj.fileFormat,
    'includeMemberAccounts': obj.includeMemberAccounts,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerExportEc2InstanceRecommendationsResponse
 */
export interface ComputeOptimizerExportEc2InstanceRecommendationsResponse {
  /**
   * @schema ComputeOptimizerExportEc2InstanceRecommendationsResponse#jobId
   */
  readonly jobId?: string;

  /**
   * @schema ComputeOptimizerExportEc2InstanceRecommendationsResponse#s3Destination
   */
  readonly s3Destination?: ComputeOptimizerS3Destination;

}

/**
 * Converts an object of type 'ComputeOptimizerExportEc2InstanceRecommendationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerExportEc2InstanceRecommendationsResponse(obj: ComputeOptimizerExportEc2InstanceRecommendationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    's3Destination': toJson_ComputeOptimizerS3Destination(obj.s3Destination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerExportLambdaFunctionRecommendationsRequest
 */
export interface ComputeOptimizerExportLambdaFunctionRecommendationsRequest {
  /**
   * @schema ComputeOptimizerExportLambdaFunctionRecommendationsRequest#accountIds
   */
  readonly accountIds?: string[];

  /**
   * @schema ComputeOptimizerExportLambdaFunctionRecommendationsRequest#filters
   */
  readonly filters?: ComputeOptimizerLambdaFunctionRecommendationFilter[];

  /**
   * @schema ComputeOptimizerExportLambdaFunctionRecommendationsRequest#fieldsToExport
   */
  readonly fieldsToExport?: string[];

  /**
   * @schema ComputeOptimizerExportLambdaFunctionRecommendationsRequest#s3DestinationConfig
   */
  readonly s3DestinationConfig: ComputeOptimizerS3DestinationConfig;

  /**
   * @schema ComputeOptimizerExportLambdaFunctionRecommendationsRequest#fileFormat
   */
  readonly fileFormat?: string;

  /**
   * @schema ComputeOptimizerExportLambdaFunctionRecommendationsRequest#includeMemberAccounts
   */
  readonly includeMemberAccounts?: boolean;

}

/**
 * Converts an object of type 'ComputeOptimizerExportLambdaFunctionRecommendationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerExportLambdaFunctionRecommendationsRequest(obj: ComputeOptimizerExportLambdaFunctionRecommendationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountIds': obj.accountIds?.map(y => y),
    'filters': obj.filters?.map(y => toJson_ComputeOptimizerLambdaFunctionRecommendationFilter(y)),
    'fieldsToExport': obj.fieldsToExport?.map(y => y),
    's3DestinationConfig': toJson_ComputeOptimizerS3DestinationConfig(obj.s3DestinationConfig),
    'fileFormat': obj.fileFormat,
    'includeMemberAccounts': obj.includeMemberAccounts,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerExportLambdaFunctionRecommendationsResponse
 */
export interface ComputeOptimizerExportLambdaFunctionRecommendationsResponse {
  /**
   * @schema ComputeOptimizerExportLambdaFunctionRecommendationsResponse#jobId
   */
  readonly jobId?: string;

  /**
   * @schema ComputeOptimizerExportLambdaFunctionRecommendationsResponse#s3Destination
   */
  readonly s3Destination?: ComputeOptimizerS3Destination;

}

/**
 * Converts an object of type 'ComputeOptimizerExportLambdaFunctionRecommendationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerExportLambdaFunctionRecommendationsResponse(obj: ComputeOptimizerExportLambdaFunctionRecommendationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    's3Destination': toJson_ComputeOptimizerS3Destination(obj.s3Destination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerGetAutoScalingGroupRecommendationsRequest
 */
export interface ComputeOptimizerGetAutoScalingGroupRecommendationsRequest {
  /**
   * @schema ComputeOptimizerGetAutoScalingGroupRecommendationsRequest#accountIds
   */
  readonly accountIds?: string[];

  /**
   * @schema ComputeOptimizerGetAutoScalingGroupRecommendationsRequest#autoScalingGroupArns
   */
  readonly autoScalingGroupArns?: string[];

  /**
   * @schema ComputeOptimizerGetAutoScalingGroupRecommendationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComputeOptimizerGetAutoScalingGroupRecommendationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ComputeOptimizerGetAutoScalingGroupRecommendationsRequest#filters
   */
  readonly filters?: ComputeOptimizerFilter[];

}

/**
 * Converts an object of type 'ComputeOptimizerGetAutoScalingGroupRecommendationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerGetAutoScalingGroupRecommendationsRequest(obj: ComputeOptimizerGetAutoScalingGroupRecommendationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountIds': obj.accountIds?.map(y => y),
    'autoScalingGroupArns': obj.autoScalingGroupArns?.map(y => y),
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'filters': obj.filters?.map(y => toJson_ComputeOptimizerFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerGetAutoScalingGroupRecommendationsResponse
 */
export interface ComputeOptimizerGetAutoScalingGroupRecommendationsResponse {
  /**
   * @schema ComputeOptimizerGetAutoScalingGroupRecommendationsResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComputeOptimizerGetAutoScalingGroupRecommendationsResponse#autoScalingGroupRecommendations
   */
  readonly autoScalingGroupRecommendations?: ComputeOptimizerAutoScalingGroupRecommendation[];

  /**
   * @schema ComputeOptimizerGetAutoScalingGroupRecommendationsResponse#errors
   */
  readonly errors?: ComputeOptimizerGetRecommendationError[];

}

/**
 * Converts an object of type 'ComputeOptimizerGetAutoScalingGroupRecommendationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerGetAutoScalingGroupRecommendationsResponse(obj: ComputeOptimizerGetAutoScalingGroupRecommendationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'autoScalingGroupRecommendations': obj.autoScalingGroupRecommendations?.map(y => toJson_ComputeOptimizerAutoScalingGroupRecommendation(y)),
    'errors': obj.errors?.map(y => toJson_ComputeOptimizerGetRecommendationError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerGetEbsVolumeRecommendationsRequest
 */
export interface ComputeOptimizerGetEbsVolumeRecommendationsRequest {
  /**
   * @schema ComputeOptimizerGetEbsVolumeRecommendationsRequest#volumeArns
   */
  readonly volumeArns?: string[];

  /**
   * @schema ComputeOptimizerGetEbsVolumeRecommendationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComputeOptimizerGetEbsVolumeRecommendationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ComputeOptimizerGetEbsVolumeRecommendationsRequest#filters
   */
  readonly filters?: ComputeOptimizerEbsFilter[];

  /**
   * @schema ComputeOptimizerGetEbsVolumeRecommendationsRequest#accountIds
   */
  readonly accountIds?: string[];

}

/**
 * Converts an object of type 'ComputeOptimizerGetEbsVolumeRecommendationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerGetEbsVolumeRecommendationsRequest(obj: ComputeOptimizerGetEbsVolumeRecommendationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'volumeArns': obj.volumeArns?.map(y => y),
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'filters': obj.filters?.map(y => toJson_ComputeOptimizerEbsFilter(y)),
    'accountIds': obj.accountIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerGetEbsVolumeRecommendationsResponse
 */
export interface ComputeOptimizerGetEbsVolumeRecommendationsResponse {
  /**
   * @schema ComputeOptimizerGetEbsVolumeRecommendationsResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComputeOptimizerGetEbsVolumeRecommendationsResponse#volumeRecommendations
   */
  readonly volumeRecommendations?: ComputeOptimizerVolumeRecommendation[];

  /**
   * @schema ComputeOptimizerGetEbsVolumeRecommendationsResponse#errors
   */
  readonly errors?: ComputeOptimizerGetRecommendationError[];

}

/**
 * Converts an object of type 'ComputeOptimizerGetEbsVolumeRecommendationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerGetEbsVolumeRecommendationsResponse(obj: ComputeOptimizerGetEbsVolumeRecommendationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'volumeRecommendations': obj.volumeRecommendations?.map(y => toJson_ComputeOptimizerVolumeRecommendation(y)),
    'errors': obj.errors?.map(y => toJson_ComputeOptimizerGetRecommendationError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerGetEc2InstanceRecommendationsRequest
 */
export interface ComputeOptimizerGetEc2InstanceRecommendationsRequest {
  /**
   * @schema ComputeOptimizerGetEc2InstanceRecommendationsRequest#instanceArns
   */
  readonly instanceArns?: string[];

  /**
   * @schema ComputeOptimizerGetEc2InstanceRecommendationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComputeOptimizerGetEc2InstanceRecommendationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ComputeOptimizerGetEc2InstanceRecommendationsRequest#filters
   */
  readonly filters?: ComputeOptimizerFilter[];

  /**
   * @schema ComputeOptimizerGetEc2InstanceRecommendationsRequest#accountIds
   */
  readonly accountIds?: string[];

}

/**
 * Converts an object of type 'ComputeOptimizerGetEc2InstanceRecommendationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerGetEc2InstanceRecommendationsRequest(obj: ComputeOptimizerGetEc2InstanceRecommendationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceArns': obj.instanceArns?.map(y => y),
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'filters': obj.filters?.map(y => toJson_ComputeOptimizerFilter(y)),
    'accountIds': obj.accountIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerGetEc2InstanceRecommendationsResponse
 */
export interface ComputeOptimizerGetEc2InstanceRecommendationsResponse {
  /**
   * @schema ComputeOptimizerGetEc2InstanceRecommendationsResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComputeOptimizerGetEc2InstanceRecommendationsResponse#instanceRecommendations
   */
  readonly instanceRecommendations?: ComputeOptimizerInstanceRecommendation[];

  /**
   * @schema ComputeOptimizerGetEc2InstanceRecommendationsResponse#errors
   */
  readonly errors?: ComputeOptimizerGetRecommendationError[];

}

/**
 * Converts an object of type 'ComputeOptimizerGetEc2InstanceRecommendationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerGetEc2InstanceRecommendationsResponse(obj: ComputeOptimizerGetEc2InstanceRecommendationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'instanceRecommendations': obj.instanceRecommendations?.map(y => toJson_ComputeOptimizerInstanceRecommendation(y)),
    'errors': obj.errors?.map(y => toJson_ComputeOptimizerGetRecommendationError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest
 */
export interface ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest {
  /**
   * @schema ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest#instanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest#stat
   */
  readonly stat: string;

  /**
   * @schema ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest#period
   */
  readonly period: number;

  /**
   * @schema ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest#startTime
   */
  readonly startTime: string;

  /**
   * @schema ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest#endTime
   */
  readonly endTime: string;

}

/**
 * Converts an object of type 'ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest(obj: ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceArn': obj.instanceArn,
    'stat': obj.stat,
    'period': obj.period,
    'startTime': obj.startTime,
    'endTime': obj.endTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerGetEc2RecommendationProjectedMetricsResponse
 */
export interface ComputeOptimizerGetEc2RecommendationProjectedMetricsResponse {
  /**
   * @schema ComputeOptimizerGetEc2RecommendationProjectedMetricsResponse#recommendedOptionProjectedMetrics
   */
  readonly recommendedOptionProjectedMetrics?: ComputeOptimizerRecommendedOptionProjectedMetric[];

}

/**
 * Converts an object of type 'ComputeOptimizerGetEc2RecommendationProjectedMetricsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerGetEc2RecommendationProjectedMetricsResponse(obj: ComputeOptimizerGetEc2RecommendationProjectedMetricsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'recommendedOptionProjectedMetrics': obj.recommendedOptionProjectedMetrics?.map(y => toJson_ComputeOptimizerRecommendedOptionProjectedMetric(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerGetEnrollmentStatusRequest
 */
export interface ComputeOptimizerGetEnrollmentStatusRequest {
}

/**
 * Converts an object of type 'ComputeOptimizerGetEnrollmentStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerGetEnrollmentStatusRequest(obj: ComputeOptimizerGetEnrollmentStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerGetEnrollmentStatusResponse
 */
export interface ComputeOptimizerGetEnrollmentStatusResponse {
  /**
   * @schema ComputeOptimizerGetEnrollmentStatusResponse#status
   */
  readonly status?: string;

  /**
   * @schema ComputeOptimizerGetEnrollmentStatusResponse#statusReason
   */
  readonly statusReason?: string;

  /**
   * @schema ComputeOptimizerGetEnrollmentStatusResponse#memberAccountsEnrolled
   */
  readonly memberAccountsEnrolled?: boolean;

}

/**
 * Converts an object of type 'ComputeOptimizerGetEnrollmentStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerGetEnrollmentStatusResponse(obj: ComputeOptimizerGetEnrollmentStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
    'statusReason': obj.statusReason,
    'memberAccountsEnrolled': obj.memberAccountsEnrolled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerGetLambdaFunctionRecommendationsRequest
 */
export interface ComputeOptimizerGetLambdaFunctionRecommendationsRequest {
  /**
   * @schema ComputeOptimizerGetLambdaFunctionRecommendationsRequest#functionArns
   */
  readonly functionArns?: string[];

  /**
   * @schema ComputeOptimizerGetLambdaFunctionRecommendationsRequest#accountIds
   */
  readonly accountIds?: string[];

  /**
   * @schema ComputeOptimizerGetLambdaFunctionRecommendationsRequest#filters
   */
  readonly filters?: ComputeOptimizerLambdaFunctionRecommendationFilter[];

  /**
   * @schema ComputeOptimizerGetLambdaFunctionRecommendationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComputeOptimizerGetLambdaFunctionRecommendationsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ComputeOptimizerGetLambdaFunctionRecommendationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerGetLambdaFunctionRecommendationsRequest(obj: ComputeOptimizerGetLambdaFunctionRecommendationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'functionArns': obj.functionArns?.map(y => y),
    'accountIds': obj.accountIds?.map(y => y),
    'filters': obj.filters?.map(y => toJson_ComputeOptimizerLambdaFunctionRecommendationFilter(y)),
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerGetLambdaFunctionRecommendationsResponse
 */
export interface ComputeOptimizerGetLambdaFunctionRecommendationsResponse {
  /**
   * @schema ComputeOptimizerGetLambdaFunctionRecommendationsResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComputeOptimizerGetLambdaFunctionRecommendationsResponse#lambdaFunctionRecommendations
   */
  readonly lambdaFunctionRecommendations?: ComputeOptimizerLambdaFunctionRecommendation[];

}

/**
 * Converts an object of type 'ComputeOptimizerGetLambdaFunctionRecommendationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerGetLambdaFunctionRecommendationsResponse(obj: ComputeOptimizerGetLambdaFunctionRecommendationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'lambdaFunctionRecommendations': obj.lambdaFunctionRecommendations?.map(y => toJson_ComputeOptimizerLambdaFunctionRecommendation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerGetRecommendationSummariesRequest
 */
export interface ComputeOptimizerGetRecommendationSummariesRequest {
  /**
   * @schema ComputeOptimizerGetRecommendationSummariesRequest#accountIds
   */
  readonly accountIds?: string[];

  /**
   * @schema ComputeOptimizerGetRecommendationSummariesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComputeOptimizerGetRecommendationSummariesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ComputeOptimizerGetRecommendationSummariesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerGetRecommendationSummariesRequest(obj: ComputeOptimizerGetRecommendationSummariesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountIds': obj.accountIds?.map(y => y),
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerGetRecommendationSummariesResponse
 */
export interface ComputeOptimizerGetRecommendationSummariesResponse {
  /**
   * @schema ComputeOptimizerGetRecommendationSummariesResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComputeOptimizerGetRecommendationSummariesResponse#recommendationSummaries
   */
  readonly recommendationSummaries?: ComputeOptimizerRecommendationSummary[];

}

/**
 * Converts an object of type 'ComputeOptimizerGetRecommendationSummariesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerGetRecommendationSummariesResponse(obj: ComputeOptimizerGetRecommendationSummariesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'recommendationSummaries': obj.recommendationSummaries?.map(y => toJson_ComputeOptimizerRecommendationSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerUpdateEnrollmentStatusRequest
 */
export interface ComputeOptimizerUpdateEnrollmentStatusRequest {
  /**
   * @schema ComputeOptimizerUpdateEnrollmentStatusRequest#status
   */
  readonly status: string;

  /**
   * @schema ComputeOptimizerUpdateEnrollmentStatusRequest#includeMemberAccounts
   */
  readonly includeMemberAccounts?: boolean;

}

/**
 * Converts an object of type 'ComputeOptimizerUpdateEnrollmentStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerUpdateEnrollmentStatusRequest(obj: ComputeOptimizerUpdateEnrollmentStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
    'includeMemberAccounts': obj.includeMemberAccounts,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerUpdateEnrollmentStatusResponse
 */
export interface ComputeOptimizerUpdateEnrollmentStatusResponse {
  /**
   * @schema ComputeOptimizerUpdateEnrollmentStatusResponse#status
   */
  readonly status?: string;

  /**
   * @schema ComputeOptimizerUpdateEnrollmentStatusResponse#statusReason
   */
  readonly statusReason?: string;

}

/**
 * Converts an object of type 'ComputeOptimizerUpdateEnrollmentStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerUpdateEnrollmentStatusResponse(obj: ComputeOptimizerUpdateEnrollmentStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
    'statusReason': obj.statusReason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerJobFilter
 */
export interface ComputeOptimizerJobFilter {
  /**
   * @schema ComputeOptimizerJobFilter#name
   */
  readonly name?: string;

  /**
   * @schema ComputeOptimizerJobFilter#values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'ComputeOptimizerJobFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerJobFilter(obj: ComputeOptimizerJobFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerRecommendationExportJob
 */
export interface ComputeOptimizerRecommendationExportJob {
  /**
   * @schema ComputeOptimizerRecommendationExportJob#jobId
   */
  readonly jobId?: string;

  /**
   * @schema ComputeOptimizerRecommendationExportJob#destination
   */
  readonly destination?: ComputeOptimizerExportDestination;

  /**
   * @schema ComputeOptimizerRecommendationExportJob#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ComputeOptimizerRecommendationExportJob#status
   */
  readonly status?: string;

  /**
   * @schema ComputeOptimizerRecommendationExportJob#creationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema ComputeOptimizerRecommendationExportJob#lastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema ComputeOptimizerRecommendationExportJob#failureReason
   */
  readonly failureReason?: string;

}

/**
 * Converts an object of type 'ComputeOptimizerRecommendationExportJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerRecommendationExportJob(obj: ComputeOptimizerRecommendationExportJob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    'destination': toJson_ComputeOptimizerExportDestination(obj.destination),
    'resourceType': obj.resourceType,
    'status': obj.status,
    'creationTimestamp': obj.creationTimestamp,
    'lastUpdatedTimestamp': obj.lastUpdatedTimestamp,
    'failureReason': obj.failureReason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerFilter
 */
export interface ComputeOptimizerFilter {
  /**
   * @schema ComputeOptimizerFilter#name
   */
  readonly name?: string;

  /**
   * @schema ComputeOptimizerFilter#values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'ComputeOptimizerFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerFilter(obj: ComputeOptimizerFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerS3DestinationConfig
 */
export interface ComputeOptimizerS3DestinationConfig {
  /**
   * @schema ComputeOptimizerS3DestinationConfig#bucket
   */
  readonly bucket?: string;

  /**
   * @schema ComputeOptimizerS3DestinationConfig#keyPrefix
   */
  readonly keyPrefix?: string;

}

/**
 * Converts an object of type 'ComputeOptimizerS3DestinationConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerS3DestinationConfig(obj: ComputeOptimizerS3DestinationConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucket': obj.bucket,
    'keyPrefix': obj.keyPrefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerS3Destination
 */
export interface ComputeOptimizerS3Destination {
  /**
   * @schema ComputeOptimizerS3Destination#bucket
   */
  readonly bucket?: string;

  /**
   * @schema ComputeOptimizerS3Destination#key
   */
  readonly key?: string;

  /**
   * @schema ComputeOptimizerS3Destination#metadataKey
   */
  readonly metadataKey?: string;

}

/**
 * Converts an object of type 'ComputeOptimizerS3Destination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerS3Destination(obj: ComputeOptimizerS3Destination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucket': obj.bucket,
    'key': obj.key,
    'metadataKey': obj.metadataKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerEbsFilter
 */
export interface ComputeOptimizerEbsFilter {
  /**
   * @schema ComputeOptimizerEbsFilter#name
   */
  readonly name?: string;

  /**
   * @schema ComputeOptimizerEbsFilter#values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'ComputeOptimizerEbsFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerEbsFilter(obj: ComputeOptimizerEbsFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerLambdaFunctionRecommendationFilter
 */
export interface ComputeOptimizerLambdaFunctionRecommendationFilter {
  /**
   * @schema ComputeOptimizerLambdaFunctionRecommendationFilter#name
   */
  readonly name?: string;

  /**
   * @schema ComputeOptimizerLambdaFunctionRecommendationFilter#values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'ComputeOptimizerLambdaFunctionRecommendationFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerLambdaFunctionRecommendationFilter(obj: ComputeOptimizerLambdaFunctionRecommendationFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerAutoScalingGroupRecommendation
 */
export interface ComputeOptimizerAutoScalingGroupRecommendation {
  /**
   * @schema ComputeOptimizerAutoScalingGroupRecommendation#accountId
   */
  readonly accountId?: string;

  /**
   * @schema ComputeOptimizerAutoScalingGroupRecommendation#autoScalingGroupArn
   */
  readonly autoScalingGroupArn?: string;

  /**
   * @schema ComputeOptimizerAutoScalingGroupRecommendation#autoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema ComputeOptimizerAutoScalingGroupRecommendation#finding
   */
  readonly finding?: string;

  /**
   * @schema ComputeOptimizerAutoScalingGroupRecommendation#utilizationMetrics
   */
  readonly utilizationMetrics?: ComputeOptimizerUtilizationMetric[];

  /**
   * @schema ComputeOptimizerAutoScalingGroupRecommendation#lookBackPeriodInDays
   */
  readonly lookBackPeriodInDays?: number;

  /**
   * @schema ComputeOptimizerAutoScalingGroupRecommendation#currentConfiguration
   */
  readonly currentConfiguration?: ComputeOptimizerAutoScalingGroupConfiguration;

  /**
   * @schema ComputeOptimizerAutoScalingGroupRecommendation#recommendationOptions
   */
  readonly recommendationOptions?: ComputeOptimizerAutoScalingGroupRecommendationOption[];

  /**
   * @schema ComputeOptimizerAutoScalingGroupRecommendation#lastRefreshTimestamp
   */
  readonly lastRefreshTimestamp?: string;

}

/**
 * Converts an object of type 'ComputeOptimizerAutoScalingGroupRecommendation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerAutoScalingGroupRecommendation(obj: ComputeOptimizerAutoScalingGroupRecommendation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'autoScalingGroupArn': obj.autoScalingGroupArn,
    'autoScalingGroupName': obj.autoScalingGroupName,
    'finding': obj.finding,
    'utilizationMetrics': obj.utilizationMetrics?.map(y => toJson_ComputeOptimizerUtilizationMetric(y)),
    'lookBackPeriodInDays': obj.lookBackPeriodInDays,
    'currentConfiguration': toJson_ComputeOptimizerAutoScalingGroupConfiguration(obj.currentConfiguration),
    'recommendationOptions': obj.recommendationOptions?.map(y => toJson_ComputeOptimizerAutoScalingGroupRecommendationOption(y)),
    'lastRefreshTimestamp': obj.lastRefreshTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerGetRecommendationError
 */
export interface ComputeOptimizerGetRecommendationError {
  /**
   * @schema ComputeOptimizerGetRecommendationError#identifier
   */
  readonly identifier?: string;

  /**
   * @schema ComputeOptimizerGetRecommendationError#code
   */
  readonly code?: string;

  /**
   * @schema ComputeOptimizerGetRecommendationError#message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'ComputeOptimizerGetRecommendationError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerGetRecommendationError(obj: ComputeOptimizerGetRecommendationError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'identifier': obj.identifier,
    'code': obj.code,
    'message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerVolumeRecommendation
 */
export interface ComputeOptimizerVolumeRecommendation {
  /**
   * @schema ComputeOptimizerVolumeRecommendation#volumeArn
   */
  readonly volumeArn?: string;

  /**
   * @schema ComputeOptimizerVolumeRecommendation#accountId
   */
  readonly accountId?: string;

  /**
   * @schema ComputeOptimizerVolumeRecommendation#currentConfiguration
   */
  readonly currentConfiguration?: ComputeOptimizerVolumeConfiguration;

  /**
   * @schema ComputeOptimizerVolumeRecommendation#finding
   */
  readonly finding?: string;

  /**
   * @schema ComputeOptimizerVolumeRecommendation#utilizationMetrics
   */
  readonly utilizationMetrics?: ComputeOptimizerEbsUtilizationMetric[];

  /**
   * @schema ComputeOptimizerVolumeRecommendation#lookBackPeriodInDays
   */
  readonly lookBackPeriodInDays?: number;

  /**
   * @schema ComputeOptimizerVolumeRecommendation#volumeRecommendationOptions
   */
  readonly volumeRecommendationOptions?: ComputeOptimizerVolumeRecommendationOption[];

  /**
   * @schema ComputeOptimizerVolumeRecommendation#lastRefreshTimestamp
   */
  readonly lastRefreshTimestamp?: string;

}

/**
 * Converts an object of type 'ComputeOptimizerVolumeRecommendation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerVolumeRecommendation(obj: ComputeOptimizerVolumeRecommendation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'volumeArn': obj.volumeArn,
    'accountId': obj.accountId,
    'currentConfiguration': toJson_ComputeOptimizerVolumeConfiguration(obj.currentConfiguration),
    'finding': obj.finding,
    'utilizationMetrics': obj.utilizationMetrics?.map(y => toJson_ComputeOptimizerEbsUtilizationMetric(y)),
    'lookBackPeriodInDays': obj.lookBackPeriodInDays,
    'volumeRecommendationOptions': obj.volumeRecommendationOptions?.map(y => toJson_ComputeOptimizerVolumeRecommendationOption(y)),
    'lastRefreshTimestamp': obj.lastRefreshTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerInstanceRecommendation
 */
export interface ComputeOptimizerInstanceRecommendation {
  /**
   * @schema ComputeOptimizerInstanceRecommendation#instanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema ComputeOptimizerInstanceRecommendation#accountId
   */
  readonly accountId?: string;

  /**
   * @schema ComputeOptimizerInstanceRecommendation#instanceName
   */
  readonly instanceName?: string;

  /**
   * @schema ComputeOptimizerInstanceRecommendation#currentInstanceType
   */
  readonly currentInstanceType?: string;

  /**
   * @schema ComputeOptimizerInstanceRecommendation#finding
   */
  readonly finding?: string;

  /**
   * @schema ComputeOptimizerInstanceRecommendation#findingReasonCodes
   */
  readonly findingReasonCodes?: string[];

  /**
   * @schema ComputeOptimizerInstanceRecommendation#utilizationMetrics
   */
  readonly utilizationMetrics?: ComputeOptimizerUtilizationMetric[];

  /**
   * @schema ComputeOptimizerInstanceRecommendation#lookBackPeriodInDays
   */
  readonly lookBackPeriodInDays?: number;

  /**
   * @schema ComputeOptimizerInstanceRecommendation#recommendationOptions
   */
  readonly recommendationOptions?: ComputeOptimizerInstanceRecommendationOption[];

  /**
   * @schema ComputeOptimizerInstanceRecommendation#recommendationSources
   */
  readonly recommendationSources?: ComputeOptimizerRecommendationSource[];

  /**
   * @schema ComputeOptimizerInstanceRecommendation#lastRefreshTimestamp
   */
  readonly lastRefreshTimestamp?: string;

}

/**
 * Converts an object of type 'ComputeOptimizerInstanceRecommendation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerInstanceRecommendation(obj: ComputeOptimizerInstanceRecommendation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceArn': obj.instanceArn,
    'accountId': obj.accountId,
    'instanceName': obj.instanceName,
    'currentInstanceType': obj.currentInstanceType,
    'finding': obj.finding,
    'findingReasonCodes': obj.findingReasonCodes?.map(y => y),
    'utilizationMetrics': obj.utilizationMetrics?.map(y => toJson_ComputeOptimizerUtilizationMetric(y)),
    'lookBackPeriodInDays': obj.lookBackPeriodInDays,
    'recommendationOptions': obj.recommendationOptions?.map(y => toJson_ComputeOptimizerInstanceRecommendationOption(y)),
    'recommendationSources': obj.recommendationSources?.map(y => toJson_ComputeOptimizerRecommendationSource(y)),
    'lastRefreshTimestamp': obj.lastRefreshTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerRecommendedOptionProjectedMetric
 */
export interface ComputeOptimizerRecommendedOptionProjectedMetric {
  /**
   * @schema ComputeOptimizerRecommendedOptionProjectedMetric#recommendedInstanceType
   */
  readonly recommendedInstanceType?: string;

  /**
   * @schema ComputeOptimizerRecommendedOptionProjectedMetric#rank
   */
  readonly rank?: number;

  /**
   * @schema ComputeOptimizerRecommendedOptionProjectedMetric#projectedMetrics
   */
  readonly projectedMetrics?: ComputeOptimizerProjectedMetric[];

}

/**
 * Converts an object of type 'ComputeOptimizerRecommendedOptionProjectedMetric' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerRecommendedOptionProjectedMetric(obj: ComputeOptimizerRecommendedOptionProjectedMetric | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'recommendedInstanceType': obj.recommendedInstanceType,
    'rank': obj.rank,
    'projectedMetrics': obj.projectedMetrics?.map(y => toJson_ComputeOptimizerProjectedMetric(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerLambdaFunctionRecommendation
 */
export interface ComputeOptimizerLambdaFunctionRecommendation {
  /**
   * @schema ComputeOptimizerLambdaFunctionRecommendation#functionArn
   */
  readonly functionArn?: string;

  /**
   * @schema ComputeOptimizerLambdaFunctionRecommendation#functionVersion
   */
  readonly functionVersion?: string;

  /**
   * @schema ComputeOptimizerLambdaFunctionRecommendation#accountId
   */
  readonly accountId?: string;

  /**
   * @schema ComputeOptimizerLambdaFunctionRecommendation#currentMemorySize
   */
  readonly currentMemorySize?: number;

  /**
   * @schema ComputeOptimizerLambdaFunctionRecommendation#numberOfInvocations
   */
  readonly numberOfInvocations?: number;

  /**
   * @schema ComputeOptimizerLambdaFunctionRecommendation#utilizationMetrics
   */
  readonly utilizationMetrics?: ComputeOptimizerLambdaFunctionUtilizationMetric[];

  /**
   * @schema ComputeOptimizerLambdaFunctionRecommendation#lookbackPeriodInDays
   */
  readonly lookbackPeriodInDays?: number;

  /**
   * @schema ComputeOptimizerLambdaFunctionRecommendation#lastRefreshTimestamp
   */
  readonly lastRefreshTimestamp?: string;

  /**
   * @schema ComputeOptimizerLambdaFunctionRecommendation#finding
   */
  readonly finding?: string;

  /**
   * @schema ComputeOptimizerLambdaFunctionRecommendation#findingReasonCodes
   */
  readonly findingReasonCodes?: string[];

  /**
   * @schema ComputeOptimizerLambdaFunctionRecommendation#memorySizeRecommendationOptions
   */
  readonly memorySizeRecommendationOptions?: ComputeOptimizerLambdaFunctionMemoryRecommendationOption[];

}

/**
 * Converts an object of type 'ComputeOptimizerLambdaFunctionRecommendation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerLambdaFunctionRecommendation(obj: ComputeOptimizerLambdaFunctionRecommendation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'functionArn': obj.functionArn,
    'functionVersion': obj.functionVersion,
    'accountId': obj.accountId,
    'currentMemorySize': obj.currentMemorySize,
    'numberOfInvocations': obj.numberOfInvocations,
    'utilizationMetrics': obj.utilizationMetrics?.map(y => toJson_ComputeOptimizerLambdaFunctionUtilizationMetric(y)),
    'lookbackPeriodInDays': obj.lookbackPeriodInDays,
    'lastRefreshTimestamp': obj.lastRefreshTimestamp,
    'finding': obj.finding,
    'findingReasonCodes': obj.findingReasonCodes?.map(y => y),
    'memorySizeRecommendationOptions': obj.memorySizeRecommendationOptions?.map(y => toJson_ComputeOptimizerLambdaFunctionMemoryRecommendationOption(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerRecommendationSummary
 */
export interface ComputeOptimizerRecommendationSummary {
  /**
   * @schema ComputeOptimizerRecommendationSummary#summaries
   */
  readonly summaries?: ComputeOptimizerSummary[];

  /**
   * @schema ComputeOptimizerRecommendationSummary#recommendationResourceType
   */
  readonly recommendationResourceType?: string;

  /**
   * @schema ComputeOptimizerRecommendationSummary#accountId
   */
  readonly accountId?: string;

}

/**
 * Converts an object of type 'ComputeOptimizerRecommendationSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerRecommendationSummary(obj: ComputeOptimizerRecommendationSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'summaries': obj.summaries?.map(y => toJson_ComputeOptimizerSummary(y)),
    'recommendationResourceType': obj.recommendationResourceType,
    'accountId': obj.accountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerExportDestination
 */
export interface ComputeOptimizerExportDestination {
  /**
   * @schema ComputeOptimizerExportDestination#s3
   */
  readonly s3?: ComputeOptimizerS3Destination;

}

/**
 * Converts an object of type 'ComputeOptimizerExportDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerExportDestination(obj: ComputeOptimizerExportDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    's3': toJson_ComputeOptimizerS3Destination(obj.s3),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerUtilizationMetric
 */
export interface ComputeOptimizerUtilizationMetric {
  /**
   * @schema ComputeOptimizerUtilizationMetric#name
   */
  readonly name?: string;

  /**
   * @schema ComputeOptimizerUtilizationMetric#statistic
   */
  readonly statistic?: string;

  /**
   * @schema ComputeOptimizerUtilizationMetric#value
   */
  readonly value?: number;

}

/**
 * Converts an object of type 'ComputeOptimizerUtilizationMetric' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerUtilizationMetric(obj: ComputeOptimizerUtilizationMetric | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'statistic': obj.statistic,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerAutoScalingGroupConfiguration
 */
export interface ComputeOptimizerAutoScalingGroupConfiguration {
  /**
   * @schema ComputeOptimizerAutoScalingGroupConfiguration#desiredCapacity
   */
  readonly desiredCapacity?: number;

  /**
   * @schema ComputeOptimizerAutoScalingGroupConfiguration#minSize
   */
  readonly minSize?: number;

  /**
   * @schema ComputeOptimizerAutoScalingGroupConfiguration#maxSize
   */
  readonly maxSize?: number;

  /**
   * @schema ComputeOptimizerAutoScalingGroupConfiguration#instanceType
   */
  readonly instanceType?: string;

}

/**
 * Converts an object of type 'ComputeOptimizerAutoScalingGroupConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerAutoScalingGroupConfiguration(obj: ComputeOptimizerAutoScalingGroupConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'desiredCapacity': obj.desiredCapacity,
    'minSize': obj.minSize,
    'maxSize': obj.maxSize,
    'instanceType': obj.instanceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerAutoScalingGroupRecommendationOption
 */
export interface ComputeOptimizerAutoScalingGroupRecommendationOption {
  /**
   * @schema ComputeOptimizerAutoScalingGroupRecommendationOption#configuration
   */
  readonly configuration?: ComputeOptimizerAutoScalingGroupConfiguration;

  /**
   * @schema ComputeOptimizerAutoScalingGroupRecommendationOption#projectedUtilizationMetrics
   */
  readonly projectedUtilizationMetrics?: ComputeOptimizerUtilizationMetric[];

  /**
   * @schema ComputeOptimizerAutoScalingGroupRecommendationOption#performanceRisk
   */
  readonly performanceRisk?: number;

  /**
   * @schema ComputeOptimizerAutoScalingGroupRecommendationOption#rank
   */
  readonly rank?: number;

}

/**
 * Converts an object of type 'ComputeOptimizerAutoScalingGroupRecommendationOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerAutoScalingGroupRecommendationOption(obj: ComputeOptimizerAutoScalingGroupRecommendationOption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configuration': toJson_ComputeOptimizerAutoScalingGroupConfiguration(obj.configuration),
    'projectedUtilizationMetrics': obj.projectedUtilizationMetrics?.map(y => toJson_ComputeOptimizerUtilizationMetric(y)),
    'performanceRisk': obj.performanceRisk,
    'rank': obj.rank,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerVolumeConfiguration
 */
export interface ComputeOptimizerVolumeConfiguration {
  /**
   * @schema ComputeOptimizerVolumeConfiguration#volumeType
   */
  readonly volumeType?: string;

  /**
   * @schema ComputeOptimizerVolumeConfiguration#volumeSize
   */
  readonly volumeSize?: number;

  /**
   * @schema ComputeOptimizerVolumeConfiguration#volumeBaselineIOPS
   */
  readonly volumeBaselineIops?: number;

  /**
   * @schema ComputeOptimizerVolumeConfiguration#volumeBurstIOPS
   */
  readonly volumeBurstIops?: number;

  /**
   * @schema ComputeOptimizerVolumeConfiguration#volumeBaselineThroughput
   */
  readonly volumeBaselineThroughput?: number;

  /**
   * @schema ComputeOptimizerVolumeConfiguration#volumeBurstThroughput
   */
  readonly volumeBurstThroughput?: number;

}

/**
 * Converts an object of type 'ComputeOptimizerVolumeConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerVolumeConfiguration(obj: ComputeOptimizerVolumeConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'volumeType': obj.volumeType,
    'volumeSize': obj.volumeSize,
    'volumeBaselineIOPS': obj.volumeBaselineIops,
    'volumeBurstIOPS': obj.volumeBurstIops,
    'volumeBaselineThroughput': obj.volumeBaselineThroughput,
    'volumeBurstThroughput': obj.volumeBurstThroughput,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerEbsUtilizationMetric
 */
export interface ComputeOptimizerEbsUtilizationMetric {
  /**
   * @schema ComputeOptimizerEbsUtilizationMetric#name
   */
  readonly name?: string;

  /**
   * @schema ComputeOptimizerEbsUtilizationMetric#statistic
   */
  readonly statistic?: string;

  /**
   * @schema ComputeOptimizerEbsUtilizationMetric#value
   */
  readonly value?: number;

}

/**
 * Converts an object of type 'ComputeOptimizerEbsUtilizationMetric' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerEbsUtilizationMetric(obj: ComputeOptimizerEbsUtilizationMetric | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'statistic': obj.statistic,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerVolumeRecommendationOption
 */
export interface ComputeOptimizerVolumeRecommendationOption {
  /**
   * @schema ComputeOptimizerVolumeRecommendationOption#configuration
   */
  readonly configuration?: ComputeOptimizerVolumeConfiguration;

  /**
   * @schema ComputeOptimizerVolumeRecommendationOption#performanceRisk
   */
  readonly performanceRisk?: number;

  /**
   * @schema ComputeOptimizerVolumeRecommendationOption#rank
   */
  readonly rank?: number;

}

/**
 * Converts an object of type 'ComputeOptimizerVolumeRecommendationOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerVolumeRecommendationOption(obj: ComputeOptimizerVolumeRecommendationOption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configuration': toJson_ComputeOptimizerVolumeConfiguration(obj.configuration),
    'performanceRisk': obj.performanceRisk,
    'rank': obj.rank,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerInstanceRecommendationOption
 */
export interface ComputeOptimizerInstanceRecommendationOption {
  /**
   * @schema ComputeOptimizerInstanceRecommendationOption#instanceType
   */
  readonly instanceType?: string;

  /**
   * @schema ComputeOptimizerInstanceRecommendationOption#projectedUtilizationMetrics
   */
  readonly projectedUtilizationMetrics?: ComputeOptimizerUtilizationMetric[];

  /**
   * @schema ComputeOptimizerInstanceRecommendationOption#platformDifferences
   */
  readonly platformDifferences?: string[];

  /**
   * @schema ComputeOptimizerInstanceRecommendationOption#performanceRisk
   */
  readonly performanceRisk?: number;

  /**
   * @schema ComputeOptimizerInstanceRecommendationOption#rank
   */
  readonly rank?: number;

}

/**
 * Converts an object of type 'ComputeOptimizerInstanceRecommendationOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerInstanceRecommendationOption(obj: ComputeOptimizerInstanceRecommendationOption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceType': obj.instanceType,
    'projectedUtilizationMetrics': obj.projectedUtilizationMetrics?.map(y => toJson_ComputeOptimizerUtilizationMetric(y)),
    'platformDifferences': obj.platformDifferences?.map(y => y),
    'performanceRisk': obj.performanceRisk,
    'rank': obj.rank,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerRecommendationSource
 */
export interface ComputeOptimizerRecommendationSource {
  /**
   * @schema ComputeOptimizerRecommendationSource#recommendationSourceArn
   */
  readonly recommendationSourceArn?: string;

  /**
   * @schema ComputeOptimizerRecommendationSource#recommendationSourceType
   */
  readonly recommendationSourceType?: string;

}

/**
 * Converts an object of type 'ComputeOptimizerRecommendationSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerRecommendationSource(obj: ComputeOptimizerRecommendationSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'recommendationSourceArn': obj.recommendationSourceArn,
    'recommendationSourceType': obj.recommendationSourceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerProjectedMetric
 */
export interface ComputeOptimizerProjectedMetric {
  /**
   * @schema ComputeOptimizerProjectedMetric#name
   */
  readonly name?: string;

  /**
   * @schema ComputeOptimizerProjectedMetric#timestamps
   */
  readonly timestamps?: string[];

  /**
   * @schema ComputeOptimizerProjectedMetric#values
   */
  readonly values?: number[];

}

/**
 * Converts an object of type 'ComputeOptimizerProjectedMetric' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerProjectedMetric(obj: ComputeOptimizerProjectedMetric | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'timestamps': obj.timestamps?.map(y => y),
    'values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerLambdaFunctionUtilizationMetric
 */
export interface ComputeOptimizerLambdaFunctionUtilizationMetric {
  /**
   * @schema ComputeOptimizerLambdaFunctionUtilizationMetric#name
   */
  readonly name?: string;

  /**
   * @schema ComputeOptimizerLambdaFunctionUtilizationMetric#statistic
   */
  readonly statistic?: string;

  /**
   * @schema ComputeOptimizerLambdaFunctionUtilizationMetric#value
   */
  readonly value?: number;

}

/**
 * Converts an object of type 'ComputeOptimizerLambdaFunctionUtilizationMetric' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerLambdaFunctionUtilizationMetric(obj: ComputeOptimizerLambdaFunctionUtilizationMetric | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'statistic': obj.statistic,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerLambdaFunctionMemoryRecommendationOption
 */
export interface ComputeOptimizerLambdaFunctionMemoryRecommendationOption {
  /**
   * @schema ComputeOptimizerLambdaFunctionMemoryRecommendationOption#rank
   */
  readonly rank?: number;

  /**
   * @schema ComputeOptimizerLambdaFunctionMemoryRecommendationOption#memorySize
   */
  readonly memorySize?: number;

  /**
   * @schema ComputeOptimizerLambdaFunctionMemoryRecommendationOption#projectedUtilizationMetrics
   */
  readonly projectedUtilizationMetrics?: ComputeOptimizerLambdaFunctionMemoryProjectedMetric[];

}

/**
 * Converts an object of type 'ComputeOptimizerLambdaFunctionMemoryRecommendationOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerLambdaFunctionMemoryRecommendationOption(obj: ComputeOptimizerLambdaFunctionMemoryRecommendationOption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'rank': obj.rank,
    'memorySize': obj.memorySize,
    'projectedUtilizationMetrics': obj.projectedUtilizationMetrics?.map(y => toJson_ComputeOptimizerLambdaFunctionMemoryProjectedMetric(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerSummary
 */
export interface ComputeOptimizerSummary {
  /**
   * @schema ComputeOptimizerSummary#name
   */
  readonly name?: string;

  /**
   * @schema ComputeOptimizerSummary#value
   */
  readonly value?: number;

  /**
   * @schema ComputeOptimizerSummary#reasonCodeSummaries
   */
  readonly reasonCodeSummaries?: ComputeOptimizerReasonCodeSummary[];

}

/**
 * Converts an object of type 'ComputeOptimizerSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerSummary(obj: ComputeOptimizerSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'value': obj.value,
    'reasonCodeSummaries': obj.reasonCodeSummaries?.map(y => toJson_ComputeOptimizerReasonCodeSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerLambdaFunctionMemoryProjectedMetric
 */
export interface ComputeOptimizerLambdaFunctionMemoryProjectedMetric {
  /**
   * @schema ComputeOptimizerLambdaFunctionMemoryProjectedMetric#name
   */
  readonly name?: string;

  /**
   * @schema ComputeOptimizerLambdaFunctionMemoryProjectedMetric#statistic
   */
  readonly statistic?: string;

  /**
   * @schema ComputeOptimizerLambdaFunctionMemoryProjectedMetric#value
   */
  readonly value?: number;

}

/**
 * Converts an object of type 'ComputeOptimizerLambdaFunctionMemoryProjectedMetric' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerLambdaFunctionMemoryProjectedMetric(obj: ComputeOptimizerLambdaFunctionMemoryProjectedMetric | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'statistic': obj.statistic,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComputeOptimizerReasonCodeSummary
 */
export interface ComputeOptimizerReasonCodeSummary {
  /**
   * @schema ComputeOptimizerReasonCodeSummary#name
   */
  readonly name?: string;

  /**
   * @schema ComputeOptimizerReasonCodeSummary#value
   */
  readonly value?: number;

}

/**
 * Converts an object of type 'ComputeOptimizerReasonCodeSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComputeOptimizerReasonCodeSummary(obj: ComputeOptimizerReasonCodeSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
