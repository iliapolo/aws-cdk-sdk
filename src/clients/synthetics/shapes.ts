/**
 * @schema SyntheticsCreateCanaryRequest
 */
export interface SyntheticsCreateCanaryRequest {
  /**
   * @schema SyntheticsCreateCanaryRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SyntheticsCreateCanaryRequest#Code
   */
  readonly code?: SyntheticsCanaryCodeInput;

  /**
   * @schema SyntheticsCreateCanaryRequest#ArtifactS3Location
   */
  readonly artifactS3Location?: string;

  /**
   * @schema SyntheticsCreateCanaryRequest#ExecutionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema SyntheticsCreateCanaryRequest#Schedule
   */
  readonly schedule?: SyntheticsCanaryScheduleInput;

  /**
   * @schema SyntheticsCreateCanaryRequest#RunConfig
   */
  readonly runConfig?: SyntheticsCanaryRunConfigInput;

  /**
   * @schema SyntheticsCreateCanaryRequest#SuccessRetentionPeriodInDays
   */
  readonly successRetentionPeriodInDays?: number;

  /**
   * @schema SyntheticsCreateCanaryRequest#FailureRetentionPeriodInDays
   */
  readonly failureRetentionPeriodInDays?: number;

  /**
   * @schema SyntheticsCreateCanaryRequest#RuntimeVersion
   */
  readonly runtimeVersion?: string;

  /**
   * @schema SyntheticsCreateCanaryRequest#VpcConfig
   */
  readonly vpcConfig?: SyntheticsVpcConfigInput;

  /**
   * @schema SyntheticsCreateCanaryRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'SyntheticsCreateCanaryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsCreateCanaryRequest(obj: SyntheticsCreateCanaryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Code': toJson_SyntheticsCanaryCodeInput(obj.code),
    'ArtifactS3Location': obj.artifactS3Location,
    'ExecutionRoleArn': obj.executionRoleArn,
    'Schedule': toJson_SyntheticsCanaryScheduleInput(obj.schedule),
    'RunConfig': toJson_SyntheticsCanaryRunConfigInput(obj.runConfig),
    'SuccessRetentionPeriodInDays': obj.successRetentionPeriodInDays,
    'FailureRetentionPeriodInDays': obj.failureRetentionPeriodInDays,
    'RuntimeVersion': obj.runtimeVersion,
    'VpcConfig': toJson_SyntheticsVpcConfigInput(obj.vpcConfig),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsCreateCanaryResponse
 */
export interface SyntheticsCreateCanaryResponse {
  /**
   * @schema SyntheticsCreateCanaryResponse#Canary
   */
  readonly canary?: SyntheticsCanary;

}

/**
 * Converts an object of type 'SyntheticsCreateCanaryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsCreateCanaryResponse(obj: SyntheticsCreateCanaryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Canary': toJson_SyntheticsCanary(obj.canary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsDeleteCanaryRequest
 */
export interface SyntheticsDeleteCanaryRequest {
  /**
   * @schema SyntheticsDeleteCanaryRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'SyntheticsDeleteCanaryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsDeleteCanaryRequest(obj: SyntheticsDeleteCanaryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsDeleteCanaryResponse
 */
export interface SyntheticsDeleteCanaryResponse {
}

/**
 * Converts an object of type 'SyntheticsDeleteCanaryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsDeleteCanaryResponse(obj: SyntheticsDeleteCanaryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsDescribeCanariesRequest
 */
export interface SyntheticsDescribeCanariesRequest {
  /**
   * @schema SyntheticsDescribeCanariesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SyntheticsDescribeCanariesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SyntheticsDescribeCanariesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsDescribeCanariesRequest(obj: SyntheticsDescribeCanariesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsDescribeCanariesResponse
 */
export interface SyntheticsDescribeCanariesResponse {
  /**
   * @schema SyntheticsDescribeCanariesResponse#Canaries
   */
  readonly canaries?: SyntheticsCanary[];

  /**
   * @schema SyntheticsDescribeCanariesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SyntheticsDescribeCanariesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsDescribeCanariesResponse(obj: SyntheticsDescribeCanariesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Canaries': obj.canaries?.map(y => toJson_SyntheticsCanary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsDescribeCanariesLastRunRequest
 */
export interface SyntheticsDescribeCanariesLastRunRequest {
  /**
   * @schema SyntheticsDescribeCanariesLastRunRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SyntheticsDescribeCanariesLastRunRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SyntheticsDescribeCanariesLastRunRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsDescribeCanariesLastRunRequest(obj: SyntheticsDescribeCanariesLastRunRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsDescribeCanariesLastRunResponse
 */
export interface SyntheticsDescribeCanariesLastRunResponse {
  /**
   * @schema SyntheticsDescribeCanariesLastRunResponse#CanariesLastRun
   */
  readonly canariesLastRun?: SyntheticsCanaryLastRun[];

  /**
   * @schema SyntheticsDescribeCanariesLastRunResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SyntheticsDescribeCanariesLastRunResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsDescribeCanariesLastRunResponse(obj: SyntheticsDescribeCanariesLastRunResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CanariesLastRun': obj.canariesLastRun?.map(y => toJson_SyntheticsCanaryLastRun(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsDescribeRuntimeVersionsRequest
 */
export interface SyntheticsDescribeRuntimeVersionsRequest {
  /**
   * @schema SyntheticsDescribeRuntimeVersionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SyntheticsDescribeRuntimeVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SyntheticsDescribeRuntimeVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsDescribeRuntimeVersionsRequest(obj: SyntheticsDescribeRuntimeVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsDescribeRuntimeVersionsResponse
 */
export interface SyntheticsDescribeRuntimeVersionsResponse {
  /**
   * @schema SyntheticsDescribeRuntimeVersionsResponse#RuntimeVersions
   */
  readonly runtimeVersions?: SyntheticsRuntimeVersion[];

  /**
   * @schema SyntheticsDescribeRuntimeVersionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SyntheticsDescribeRuntimeVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsDescribeRuntimeVersionsResponse(obj: SyntheticsDescribeRuntimeVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuntimeVersions': obj.runtimeVersions?.map(y => toJson_SyntheticsRuntimeVersion(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsGetCanaryRequest
 */
export interface SyntheticsGetCanaryRequest {
  /**
   * @schema SyntheticsGetCanaryRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'SyntheticsGetCanaryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsGetCanaryRequest(obj: SyntheticsGetCanaryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsGetCanaryResponse
 */
export interface SyntheticsGetCanaryResponse {
  /**
   * @schema SyntheticsGetCanaryResponse#Canary
   */
  readonly canary?: SyntheticsCanary;

}

/**
 * Converts an object of type 'SyntheticsGetCanaryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsGetCanaryResponse(obj: SyntheticsGetCanaryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Canary': toJson_SyntheticsCanary(obj.canary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsGetCanaryRunsRequest
 */
export interface SyntheticsGetCanaryRunsRequest {
  /**
   * @schema SyntheticsGetCanaryRunsRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SyntheticsGetCanaryRunsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SyntheticsGetCanaryRunsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SyntheticsGetCanaryRunsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsGetCanaryRunsRequest(obj: SyntheticsGetCanaryRunsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsGetCanaryRunsResponse
 */
export interface SyntheticsGetCanaryRunsResponse {
  /**
   * @schema SyntheticsGetCanaryRunsResponse#CanaryRuns
   */
  readonly canaryRuns?: SyntheticsCanaryRun[];

  /**
   * @schema SyntheticsGetCanaryRunsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SyntheticsGetCanaryRunsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsGetCanaryRunsResponse(obj: SyntheticsGetCanaryRunsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CanaryRuns': obj.canaryRuns?.map(y => toJson_SyntheticsCanaryRun(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsListTagsForResourceRequest
 */
export interface SyntheticsListTagsForResourceRequest {
  /**
   * @schema SyntheticsListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'SyntheticsListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsListTagsForResourceRequest(obj: SyntheticsListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsListTagsForResourceResponse
 */
export interface SyntheticsListTagsForResourceResponse {
  /**
   * @schema SyntheticsListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'SyntheticsListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsListTagsForResourceResponse(obj: SyntheticsListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsStartCanaryRequest
 */
export interface SyntheticsStartCanaryRequest {
  /**
   * @schema SyntheticsStartCanaryRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'SyntheticsStartCanaryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsStartCanaryRequest(obj: SyntheticsStartCanaryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsStartCanaryResponse
 */
export interface SyntheticsStartCanaryResponse {
}

/**
 * Converts an object of type 'SyntheticsStartCanaryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsStartCanaryResponse(obj: SyntheticsStartCanaryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsStopCanaryRequest
 */
export interface SyntheticsStopCanaryRequest {
  /**
   * @schema SyntheticsStopCanaryRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'SyntheticsStopCanaryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsStopCanaryRequest(obj: SyntheticsStopCanaryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsStopCanaryResponse
 */
export interface SyntheticsStopCanaryResponse {
}

/**
 * Converts an object of type 'SyntheticsStopCanaryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsStopCanaryResponse(obj: SyntheticsStopCanaryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsTagResourceRequest
 */
export interface SyntheticsTagResourceRequest {
  /**
   * @schema SyntheticsTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema SyntheticsTagResourceRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'SyntheticsTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsTagResourceRequest(obj: SyntheticsTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsTagResourceResponse
 */
export interface SyntheticsTagResourceResponse {
}

/**
 * Converts an object of type 'SyntheticsTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsTagResourceResponse(obj: SyntheticsTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsUntagResourceRequest
 */
export interface SyntheticsUntagResourceRequest {
  /**
   * @schema SyntheticsUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema SyntheticsUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'SyntheticsUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsUntagResourceRequest(obj: SyntheticsUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsUntagResourceResponse
 */
export interface SyntheticsUntagResourceResponse {
}

/**
 * Converts an object of type 'SyntheticsUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsUntagResourceResponse(obj: SyntheticsUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsUpdateCanaryRequest
 */
export interface SyntheticsUpdateCanaryRequest {
  /**
   * @schema SyntheticsUpdateCanaryRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SyntheticsUpdateCanaryRequest#Code
   */
  readonly code?: SyntheticsCanaryCodeInput;

  /**
   * @schema SyntheticsUpdateCanaryRequest#ExecutionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema SyntheticsUpdateCanaryRequest#RuntimeVersion
   */
  readonly runtimeVersion?: string;

  /**
   * @schema SyntheticsUpdateCanaryRequest#Schedule
   */
  readonly schedule?: SyntheticsCanaryScheduleInput;

  /**
   * @schema SyntheticsUpdateCanaryRequest#RunConfig
   */
  readonly runConfig?: SyntheticsCanaryRunConfigInput;

  /**
   * @schema SyntheticsUpdateCanaryRequest#SuccessRetentionPeriodInDays
   */
  readonly successRetentionPeriodInDays?: number;

  /**
   * @schema SyntheticsUpdateCanaryRequest#FailureRetentionPeriodInDays
   */
  readonly failureRetentionPeriodInDays?: number;

  /**
   * @schema SyntheticsUpdateCanaryRequest#VpcConfig
   */
  readonly vpcConfig?: SyntheticsVpcConfigInput;

  /**
   * @schema SyntheticsUpdateCanaryRequest#VisualReference
   */
  readonly visualReference?: SyntheticsVisualReferenceInput;

}

/**
 * Converts an object of type 'SyntheticsUpdateCanaryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsUpdateCanaryRequest(obj: SyntheticsUpdateCanaryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Code': toJson_SyntheticsCanaryCodeInput(obj.code),
    'ExecutionRoleArn': obj.executionRoleArn,
    'RuntimeVersion': obj.runtimeVersion,
    'Schedule': toJson_SyntheticsCanaryScheduleInput(obj.schedule),
    'RunConfig': toJson_SyntheticsCanaryRunConfigInput(obj.runConfig),
    'SuccessRetentionPeriodInDays': obj.successRetentionPeriodInDays,
    'FailureRetentionPeriodInDays': obj.failureRetentionPeriodInDays,
    'VpcConfig': toJson_SyntheticsVpcConfigInput(obj.vpcConfig),
    'VisualReference': toJson_SyntheticsVisualReferenceInput(obj.visualReference),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsUpdateCanaryResponse
 */
export interface SyntheticsUpdateCanaryResponse {
}

/**
 * Converts an object of type 'SyntheticsUpdateCanaryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsUpdateCanaryResponse(obj: SyntheticsUpdateCanaryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsCanaryCodeInput
 */
export interface SyntheticsCanaryCodeInput {
  /**
   * @schema SyntheticsCanaryCodeInput#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema SyntheticsCanaryCodeInput#S3Key
   */
  readonly s3Key?: string;

  /**
   * @schema SyntheticsCanaryCodeInput#S3Version
   */
  readonly s3Version?: string;

  /**
   * @schema SyntheticsCanaryCodeInput#ZipFile
   */
  readonly zipFile?: any;

  /**
   * @schema SyntheticsCanaryCodeInput#Handler
   */
  readonly handler?: string;

}

/**
 * Converts an object of type 'SyntheticsCanaryCodeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsCanaryCodeInput(obj: SyntheticsCanaryCodeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Bucket': obj.s3Bucket,
    'S3Key': obj.s3Key,
    'S3Version': obj.s3Version,
    'ZipFile': obj.zipFile,
    'Handler': obj.handler,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsCanaryScheduleInput
 */
export interface SyntheticsCanaryScheduleInput {
  /**
   * @schema SyntheticsCanaryScheduleInput#Expression
   */
  readonly expression?: string;

  /**
   * @schema SyntheticsCanaryScheduleInput#DurationInSeconds
   */
  readonly durationInSeconds?: number;

}

/**
 * Converts an object of type 'SyntheticsCanaryScheduleInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsCanaryScheduleInput(obj: SyntheticsCanaryScheduleInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Expression': obj.expression,
    'DurationInSeconds': obj.durationInSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsCanaryRunConfigInput
 */
export interface SyntheticsCanaryRunConfigInput {
  /**
   * @schema SyntheticsCanaryRunConfigInput#TimeoutInSeconds
   */
  readonly timeoutInSeconds?: number;

  /**
   * @schema SyntheticsCanaryRunConfigInput#MemoryInMB
   */
  readonly memoryInMb?: number;

  /**
   * @schema SyntheticsCanaryRunConfigInput#ActiveTracing
   */
  readonly activeTracing?: boolean;

  /**
   * @schema SyntheticsCanaryRunConfigInput#EnvironmentVariables
   */
  readonly environmentVariables?: { [key: string]: string };

}

/**
 * Converts an object of type 'SyntheticsCanaryRunConfigInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsCanaryRunConfigInput(obj: SyntheticsCanaryRunConfigInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TimeoutInSeconds': obj.timeoutInSeconds,
    'MemoryInMB': obj.memoryInMb,
    'ActiveTracing': obj.activeTracing,
    'EnvironmentVariables': ((obj.environmentVariables) === undefined) ? undefined : (Object.entries(obj.environmentVariables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsVpcConfigInput
 */
export interface SyntheticsVpcConfigInput {
  /**
   * @schema SyntheticsVpcConfigInput#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema SyntheticsVpcConfigInput#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * Converts an object of type 'SyntheticsVpcConfigInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsVpcConfigInput(obj: SyntheticsVpcConfigInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubnetIds': obj.subnetIds?.map(y => y),
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsCanary
 */
export interface SyntheticsCanary {
  /**
   * @schema SyntheticsCanary#Id
   */
  readonly id?: string;

  /**
   * @schema SyntheticsCanary#Name
   */
  readonly name?: string;

  /**
   * @schema SyntheticsCanary#Code
   */
  readonly code?: SyntheticsCanaryCodeOutput;

  /**
   * @schema SyntheticsCanary#ExecutionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema SyntheticsCanary#Schedule
   */
  readonly schedule?: SyntheticsCanaryScheduleOutput;

  /**
   * @schema SyntheticsCanary#RunConfig
   */
  readonly runConfig?: SyntheticsCanaryRunConfigOutput;

  /**
   * @schema SyntheticsCanary#SuccessRetentionPeriodInDays
   */
  readonly successRetentionPeriodInDays?: number;

  /**
   * @schema SyntheticsCanary#FailureRetentionPeriodInDays
   */
  readonly failureRetentionPeriodInDays?: number;

  /**
   * @schema SyntheticsCanary#Status
   */
  readonly status?: SyntheticsCanaryStatus;

  /**
   * @schema SyntheticsCanary#Timeline
   */
  readonly timeline?: SyntheticsCanaryTimeline;

  /**
   * @schema SyntheticsCanary#ArtifactS3Location
   */
  readonly artifactS3Location?: string;

  /**
   * @schema SyntheticsCanary#EngineArn
   */
  readonly engineArn?: string;

  /**
   * @schema SyntheticsCanary#RuntimeVersion
   */
  readonly runtimeVersion?: string;

  /**
   * @schema SyntheticsCanary#VpcConfig
   */
  readonly vpcConfig?: SyntheticsVpcConfigOutput;

  /**
   * @schema SyntheticsCanary#VisualReference
   */
  readonly visualReference?: SyntheticsVisualReferenceOutput;

  /**
   * @schema SyntheticsCanary#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'SyntheticsCanary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsCanary(obj: SyntheticsCanary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Name': obj.name,
    'Code': toJson_SyntheticsCanaryCodeOutput(obj.code),
    'ExecutionRoleArn': obj.executionRoleArn,
    'Schedule': toJson_SyntheticsCanaryScheduleOutput(obj.schedule),
    'RunConfig': toJson_SyntheticsCanaryRunConfigOutput(obj.runConfig),
    'SuccessRetentionPeriodInDays': obj.successRetentionPeriodInDays,
    'FailureRetentionPeriodInDays': obj.failureRetentionPeriodInDays,
    'Status': toJson_SyntheticsCanaryStatus(obj.status),
    'Timeline': toJson_SyntheticsCanaryTimeline(obj.timeline),
    'ArtifactS3Location': obj.artifactS3Location,
    'EngineArn': obj.engineArn,
    'RuntimeVersion': obj.runtimeVersion,
    'VpcConfig': toJson_SyntheticsVpcConfigOutput(obj.vpcConfig),
    'VisualReference': toJson_SyntheticsVisualReferenceOutput(obj.visualReference),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsCanaryLastRun
 */
export interface SyntheticsCanaryLastRun {
  /**
   * @schema SyntheticsCanaryLastRun#CanaryName
   */
  readonly canaryName?: string;

  /**
   * @schema SyntheticsCanaryLastRun#LastRun
   */
  readonly lastRun?: SyntheticsCanaryRun;

}

/**
 * Converts an object of type 'SyntheticsCanaryLastRun' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsCanaryLastRun(obj: SyntheticsCanaryLastRun | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CanaryName': obj.canaryName,
    'LastRun': toJson_SyntheticsCanaryRun(obj.lastRun),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsRuntimeVersion
 */
export interface SyntheticsRuntimeVersion {
  /**
   * @schema SyntheticsRuntimeVersion#VersionName
   */
  readonly versionName?: string;

  /**
   * @schema SyntheticsRuntimeVersion#Description
   */
  readonly description?: string;

  /**
   * @schema SyntheticsRuntimeVersion#ReleaseDate
   */
  readonly releaseDate?: string;

  /**
   * @schema SyntheticsRuntimeVersion#DeprecationDate
   */
  readonly deprecationDate?: string;

}

/**
 * Converts an object of type 'SyntheticsRuntimeVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsRuntimeVersion(obj: SyntheticsRuntimeVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VersionName': obj.versionName,
    'Description': obj.description,
    'ReleaseDate': obj.releaseDate,
    'DeprecationDate': obj.deprecationDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsCanaryRun
 */
export interface SyntheticsCanaryRun {
  /**
   * @schema SyntheticsCanaryRun#Id
   */
  readonly id?: string;

  /**
   * @schema SyntheticsCanaryRun#Name
   */
  readonly name?: string;

  /**
   * @schema SyntheticsCanaryRun#Status
   */
  readonly status?: SyntheticsCanaryRunStatus;

  /**
   * @schema SyntheticsCanaryRun#Timeline
   */
  readonly timeline?: SyntheticsCanaryRunTimeline;

  /**
   * @schema SyntheticsCanaryRun#ArtifactS3Location
   */
  readonly artifactS3Location?: string;

}

/**
 * Converts an object of type 'SyntheticsCanaryRun' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsCanaryRun(obj: SyntheticsCanaryRun | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Name': obj.name,
    'Status': toJson_SyntheticsCanaryRunStatus(obj.status),
    'Timeline': toJson_SyntheticsCanaryRunTimeline(obj.timeline),
    'ArtifactS3Location': obj.artifactS3Location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsVisualReferenceInput
 */
export interface SyntheticsVisualReferenceInput {
  /**
   * @schema SyntheticsVisualReferenceInput#BaseScreenshots
   */
  readonly baseScreenshots?: SyntheticsBaseScreenshot[];

  /**
   * @schema SyntheticsVisualReferenceInput#BaseCanaryRunId
   */
  readonly baseCanaryRunId?: string;

}

/**
 * Converts an object of type 'SyntheticsVisualReferenceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsVisualReferenceInput(obj: SyntheticsVisualReferenceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BaseScreenshots': obj.baseScreenshots?.map(y => toJson_SyntheticsBaseScreenshot(y)),
    'BaseCanaryRunId': obj.baseCanaryRunId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsCanaryCodeOutput
 */
export interface SyntheticsCanaryCodeOutput {
  /**
   * @schema SyntheticsCanaryCodeOutput#SourceLocationArn
   */
  readonly sourceLocationArn?: string;

  /**
   * @schema SyntheticsCanaryCodeOutput#Handler
   */
  readonly handler?: string;

}

/**
 * Converts an object of type 'SyntheticsCanaryCodeOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsCanaryCodeOutput(obj: SyntheticsCanaryCodeOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceLocationArn': obj.sourceLocationArn,
    'Handler': obj.handler,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsCanaryScheduleOutput
 */
export interface SyntheticsCanaryScheduleOutput {
  /**
   * @schema SyntheticsCanaryScheduleOutput#Expression
   */
  readonly expression?: string;

  /**
   * @schema SyntheticsCanaryScheduleOutput#DurationInSeconds
   */
  readonly durationInSeconds?: number;

}

/**
 * Converts an object of type 'SyntheticsCanaryScheduleOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsCanaryScheduleOutput(obj: SyntheticsCanaryScheduleOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Expression': obj.expression,
    'DurationInSeconds': obj.durationInSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsCanaryRunConfigOutput
 */
export interface SyntheticsCanaryRunConfigOutput {
  /**
   * @schema SyntheticsCanaryRunConfigOutput#TimeoutInSeconds
   */
  readonly timeoutInSeconds?: number;

  /**
   * @schema SyntheticsCanaryRunConfigOutput#MemoryInMB
   */
  readonly memoryInMb?: number;

  /**
   * @schema SyntheticsCanaryRunConfigOutput#ActiveTracing
   */
  readonly activeTracing?: boolean;

}

/**
 * Converts an object of type 'SyntheticsCanaryRunConfigOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsCanaryRunConfigOutput(obj: SyntheticsCanaryRunConfigOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TimeoutInSeconds': obj.timeoutInSeconds,
    'MemoryInMB': obj.memoryInMb,
    'ActiveTracing': obj.activeTracing,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsCanaryStatus
 */
export interface SyntheticsCanaryStatus {
  /**
   * @schema SyntheticsCanaryStatus#State
   */
  readonly state?: string;

  /**
   * @schema SyntheticsCanaryStatus#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema SyntheticsCanaryStatus#StateReasonCode
   */
  readonly stateReasonCode?: string;

}

/**
 * Converts an object of type 'SyntheticsCanaryStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsCanaryStatus(obj: SyntheticsCanaryStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'State': obj.state,
    'StateReason': obj.stateReason,
    'StateReasonCode': obj.stateReasonCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsCanaryTimeline
 */
export interface SyntheticsCanaryTimeline {
  /**
   * @schema SyntheticsCanaryTimeline#Created
   */
  readonly created?: string;

  /**
   * @schema SyntheticsCanaryTimeline#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema SyntheticsCanaryTimeline#LastStarted
   */
  readonly lastStarted?: string;

  /**
   * @schema SyntheticsCanaryTimeline#LastStopped
   */
  readonly lastStopped?: string;

}

/**
 * Converts an object of type 'SyntheticsCanaryTimeline' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsCanaryTimeline(obj: SyntheticsCanaryTimeline | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Created': obj.created,
    'LastModified': obj.lastModified,
    'LastStarted': obj.lastStarted,
    'LastStopped': obj.lastStopped,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsVpcConfigOutput
 */
export interface SyntheticsVpcConfigOutput {
  /**
   * @schema SyntheticsVpcConfigOutput#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema SyntheticsVpcConfigOutput#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema SyntheticsVpcConfigOutput#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * Converts an object of type 'SyntheticsVpcConfigOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsVpcConfigOutput(obj: SyntheticsVpcConfigOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VpcId': obj.vpcId,
    'SubnetIds': obj.subnetIds?.map(y => y),
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsVisualReferenceOutput
 */
export interface SyntheticsVisualReferenceOutput {
  /**
   * @schema SyntheticsVisualReferenceOutput#BaseScreenshots
   */
  readonly baseScreenshots?: SyntheticsBaseScreenshot[];

  /**
   * @schema SyntheticsVisualReferenceOutput#BaseCanaryRunId
   */
  readonly baseCanaryRunId?: string;

}

/**
 * Converts an object of type 'SyntheticsVisualReferenceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsVisualReferenceOutput(obj: SyntheticsVisualReferenceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BaseScreenshots': obj.baseScreenshots?.map(y => toJson_SyntheticsBaseScreenshot(y)),
    'BaseCanaryRunId': obj.baseCanaryRunId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsCanaryRunStatus
 */
export interface SyntheticsCanaryRunStatus {
  /**
   * @schema SyntheticsCanaryRunStatus#State
   */
  readonly state?: string;

  /**
   * @schema SyntheticsCanaryRunStatus#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema SyntheticsCanaryRunStatus#StateReasonCode
   */
  readonly stateReasonCode?: string;

}

/**
 * Converts an object of type 'SyntheticsCanaryRunStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsCanaryRunStatus(obj: SyntheticsCanaryRunStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'State': obj.state,
    'StateReason': obj.stateReason,
    'StateReasonCode': obj.stateReasonCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsCanaryRunTimeline
 */
export interface SyntheticsCanaryRunTimeline {
  /**
   * @schema SyntheticsCanaryRunTimeline#Started
   */
  readonly started?: string;

  /**
   * @schema SyntheticsCanaryRunTimeline#Completed
   */
  readonly completed?: string;

}

/**
 * Converts an object of type 'SyntheticsCanaryRunTimeline' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsCanaryRunTimeline(obj: SyntheticsCanaryRunTimeline | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Started': obj.started,
    'Completed': obj.completed,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SyntheticsBaseScreenshot
 */
export interface SyntheticsBaseScreenshot {
  /**
   * @schema SyntheticsBaseScreenshot#ScreenshotName
   */
  readonly screenshotName?: string;

  /**
   * @schema SyntheticsBaseScreenshot#IgnoreCoordinates
   */
  readonly ignoreCoordinates?: string[];

}

/**
 * Converts an object of type 'SyntheticsBaseScreenshot' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SyntheticsBaseScreenshot(obj: SyntheticsBaseScreenshot | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScreenshotName': obj.screenshotName,
    'IgnoreCoordinates': obj.ignoreCoordinates?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
